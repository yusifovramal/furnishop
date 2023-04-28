import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../../utils/constants'
import CartButtons from '../Navbar/NavButtons'
import { SidebarWrapper } from './SidebarWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../../features/Utils/utilsSlice'

const Sidebar = () => {
  const { isSidebarOpen } = useSelector(store => store.utils)
  const dispatch = useDispatch()
  const handleSidebar = () => {
    dispatch(closeSidebar())
  }
  return (
    <SidebarWrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <div className='logo'>
            <img src={Logo} alt='furnyshop' />
          </div>
          <button className='close-btn' onClick={handleSidebar} >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} >
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
        <CartButtons />
      </aside>
    </SidebarWrapper>
  )
}

export default Sidebar