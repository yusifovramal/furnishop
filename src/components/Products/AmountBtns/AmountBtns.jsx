import { FaPlus, FaMinus } from 'react-icons/fa'
import { Wrapper } from './AmountBtnsWrapper'

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <p className='amount'>{amount}</p>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}


export default AmountButtons