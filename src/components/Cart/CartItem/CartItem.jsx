import { formatPrice } from '../../../utils/formatPrice'
import { AmountButtons } from '../../index'
import { FaTrash } from 'react-icons/fa'
import { removeItem, toggleAmount } from '../../../features/Cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Wrapper } from './Wrapper'

const CartItem = ({ id, image, name, color, price, amount }) => {
  const dispatch = useDispatch()
  const increase = () => {
    dispatch(toggleAmount([id, "inc"]))
  }
  const decrease = () => {
    dispatch(toggleAmount([id, "dec"]))
  }
  return (
    <Wrapper>
      <div className='product'>
        <img src={image} alt={name} />
        <div className='content'>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color :
            <span style={{ background: color }} />
          </p>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button className='remove-btn' onClick={() => dispatch(removeItem(id))} >
        <FaTrash />
      </button>
    </Wrapper>
  )
}


export default CartItem