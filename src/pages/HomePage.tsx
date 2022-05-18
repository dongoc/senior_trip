import styled from 'styled-components'
import { MdPlace } from 'react-icons/md'
import { PrimaryOutlineButton, PrimarySolidButton } from '@/components/atoms/buttons'
import { useNavigate } from 'react-router-dom'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr var(--button-height) var(--button-height);
  grid-gap: 25px;
  height: calc(100vh - var(--header-height));
  padding-bottom: 50px;
`

const Logo = styled(MdPlace)`
  width: 90px;
  height: 90px;
  margin: 100px auto 0 auto;
  color: var(--color-primary);
`

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <PageGrid>
      <Logo />
      <PrimarySolidButton onClick={() => navigate('/login')}>로그인</PrimarySolidButton>
      <PrimaryOutlineButton onClick={() => navigate('/register')}>회원가입</PrimaryOutlineButton>
    </PageGrid>
  )
}

export default HomePage
