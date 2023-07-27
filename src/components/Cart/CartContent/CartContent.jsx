
import { Link } from 'react-router-dom'
import { CartColumns, CartItem, CartTotals } from "../../index"
import { useDispatch, useSelector } from 'react-redux'
import {  clearCart } from '../../../features/Cart/cartSlice'
import { Wrapper } from './Wrapper'
import { MobileCart } from '../MobileCart/MobileCart'

const CartContent = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(store => store.cart)
  return (
    <Wrapper className='section section-center'>
      <div className="container">
        <CartColumns />
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        {cartItems.map((item) => {
          return <MobileCart key={item.id} {...item} />
        })}
        <div className='link-container'>
          <Link to='/products' className='btn'>
            continue shopping
          </Link>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => dispatch(clearCart())}
          >
            Clear Shopping Cart
          </button>
        </div>
        <CartTotals />
      </div>
    </Wrapper>
  )
}

export default CartContent