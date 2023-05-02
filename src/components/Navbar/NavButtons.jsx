import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Wrapper } from './NavBtnsWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../../features/Utils/utilsSlice'

const CartButtons = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(store => store.cart)
  const totalItems = cartItems.reduce((total, item) => total += item.amount, 0)
  console.log();
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link onClick={() => dispatch(closeSidebar())} to='/cart' className='cart-btn' >
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{totalItems}</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login
      </button>
    </Wrapper>
  )
}


export default CartButtons