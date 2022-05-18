import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { BaseContainer, FlexCenter } from '@/components/atoms/layouts'
import { Headline1 } from '@/components/atoms/typographies'
import { useNavigate } from 'react-router-dom'

const HeaderWrapper = styled.header<{ backgroundColor?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  background: ${(p) => p.backgroundColor || 'var(--color-white)'};
`

const HeaderContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  grid-template-areas: 'back title blank';
  justify-content: center;
  align-items: center;
  height: var(--header-height);
  min-height: var(--header-height);
  max-height: var(--header-height);
`

const BackButton = styled(FlexCenter)`
  grid-area: 'back';
  width: 24px;
  height: 24px;
  cursor: pointer;
`

type HeaderProps = {
  hasBackButton?: boolean
  title: string
  backgroundColor?: string
}

const Header = (props: HeaderProps) => {
  const navigate = useNavigate()
  const { title, hasBackButton, backgroundColor } = props

  return (
    <HeaderWrapper backgroundColor={backgroundColor}>
      <HeaderContainer>
        {hasBackButton ? (
          <BackButton onClick={() => navigate(-1)}>
            <IoIosArrowBack />
          </BackButton>
        ) : null}
        <Headline1>{title}</Headline1>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
