import Logo from '../../assets/img/Logo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../../utils/constants'
import CartButtons from './NavButtons'
import { NavContainer } from './NavbarWrapper'
import { openSidebar } from '../../features/Utils/utilsSlice'
import { useDispatch } from 'react-redux'
const Navbar = () => {
  const dispatch = useDispatch()
  const handleSidebar = () => {
    dispatch(openSidebar())
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
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

export default Navbar