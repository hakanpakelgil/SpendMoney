import React from 'react'
import BasketItem from './BasketItem'
import '../assets/styles/basket.css'

const Basket = ({total, basket,products,resetBasket}) => {
  return (
    <>
    <div className='basket-container container'>
        <ul>
        {basket.map(item => (
            <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
        ))}
        </ul>
        <div>
            Toplam: ${total}
        </div>
        <button className='reset-button' onClick={resetBasket}>Sepeti Sıfırla</button>
    </div>    
    </>
  )
}

export default Basket