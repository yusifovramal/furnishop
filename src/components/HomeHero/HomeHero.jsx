import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../assets/img/hero.png'
import hero2 from '../../assets/img/hero2.png'
import { Wrapper } from './HeroWrapper'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <div className='container'>
        <article className='content'>
          <h2 className='title'>
            design your <br />
            comfort zone
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
            alias?
          </p>
          <Link to='/products' className='btn hero-btn'>
            shop now
          </Link>
        </article>
        <article className='img-container'>
          <div className='hero'>
            <img src={hero} alt='hero' className='main-img' />
          </div>
          <img src={hero2} alt='hero' className='accent-img' />
        </article>
      </div>
    </Wrapper>
  )
}



export default Hero
