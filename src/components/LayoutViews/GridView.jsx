import React from 'react'
import Product from '../Products/Product'
import { Wrapper } from './GridViewWrapper'

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}



export default GridView