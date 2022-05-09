import styled from 'styled-components'
import { MdPlace } from 'react-icons/md'
import { BaseContainer } from '@/components/atoms/layouts'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  background: var(--color-background);
`

const HeaderContainer = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <MdPlace size='40px' color='var(--color-blue-primary)' />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
