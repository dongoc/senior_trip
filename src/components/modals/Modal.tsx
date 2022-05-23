import { FlexCenter } from '@/components/atoms/layouts'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { useRef, MutableRefObject, ReactNode } from 'react'
import useOutsideClick from '@/lib/hooks/useOutsideClick'

const Backdrop = styled(FlexCenter)<{ visible: boolean }>`
  display: ${(p) => (p.visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5000;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
`

const ModalContainer = styled.div`
  width: calc(100% - 20px * 2);
  /* margin: 0 auto; */
  padding: 20px;
  background-color: var(--color-white);
`

export type ModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose(): void
}

const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose } = props
  const portal = document.querySelector('#portal') as HTMLElement
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  useOutsideClick(ref, onClose)

  return ReactDOM.createPortal(
    <Backdrop visible={isOpen}>
      <ModalContainer ref={ref}>{children}</ModalContainer>
    </Backdrop>,
    portal
  )
}

export default Modal
