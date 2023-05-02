
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContent } from '../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotal } from '../features/Cart/cartSlice'
const CartPage = () => {

  const dispatch = useDispatch()
  const { cartItems } = useSelector(store => store.cart)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
    dispatch(calculateTotal())
  }, [cartItems])


  if (cartItems.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
 min-height:60vh;
  .empty {
    margin-top:60px;
    text-align:center;
    color:var(--secondary);
    h2 {
      margin-bottom: 16px;
      text-transform: none;
    }
  }
`

export default CartPage