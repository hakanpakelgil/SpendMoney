import React from 'react'
import '../assets/styles/basketItem.css'

const BasketItem = ({item,product}) => {
  return (
    <li className='basket-item'>
        {product.title} x {item.amount}
    </li>
  )
}

export default BasketItem