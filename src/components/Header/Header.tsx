import { Link } from 'react-router-dom'

import logo from '../../assets/fxdigitallogo.png'
import { StyledHeader, StyledNav } from './Header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <img src={logo} alt='logo' />
        <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
