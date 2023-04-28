import { Wrapper } from "./ContactWrapper"
const Contact = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h3 className='section-title'>Join our newsletter and get 20% off</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          sint unde quaerat ratione soluta veniam provident adipisci cumque
          eveniet tempore?
        </p>
        <form className='contact-form'>
          <div className='input-wrapper'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
          </div>
          <button type='submit' className='btn submit-btn'>
            subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default Contact