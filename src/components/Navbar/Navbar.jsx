import Logo from '../../assets/img/Logo.png'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../../utils/constants'
import CartButtons from './NavButtons'
import { NavContainer } from './NavbarWrapper'
import { openSidebar } from '../../features/Utils/utilsSlice'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Spinner from '../Spinner'

const Navbar = () => {
  const dispatch = useDispatch()
  const handleSidebar = () => {
    dispatch(openSidebar())
  }
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading && !isAuthenticated) {
    return <Spinner />
  }
  return (
    <NavContainer>
      <div className='container'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='furnyshop' />
            </Link>
          </div>
          <button type='button' className='nav-toggle' onClick={handleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={url}>{text}</NavLink>
              </li>
            )
          })}
          {isAuthenticated && <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/checkout">Checkout</NavLink>
          </li>}

        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

export default Navbar