import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--medium-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height:70vh;
  h1 {
    font-size: 4rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  a{
    background-color:var(--main);
    color:white;
  }
`

export default ErrorPage