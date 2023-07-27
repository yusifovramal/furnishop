import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Wrapper } from './NavBtnsWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../../features/Utils/utilsSlice'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../LoginButton'

const CartButtons = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(store => store.cart)
  const totalItems = cartItems.reduce((total, item) => total += item.amount, 0)
  const { logout, isAuthenticated, isLoading } = useAuth0();


  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link onClick={() => dispatch(closeSidebar())} to='/cart' className='cart-btn' >
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{totalItems}</span>
        </span>
      </Link>
      {isAuthenticated && <button type='button' className='auth-btn' onClick={() => logout()}>
        Logout
      </button> }
      <LoginButton/>
    </Wrapper>
  )
}


export default CartButtons