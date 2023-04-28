import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Wrapper } from './StarsWrapper'
const Stars = ({ stars, reviews }) => {

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  )
}

export default Stars