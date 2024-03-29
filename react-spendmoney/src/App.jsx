import { useEffect, useState } from 'react'
import './App.css'
import products from './products.json'
import Header from './components/Header'
import Product from './components/Product'
import Basket from './components/Basket'

function App() {  

  const [money,setMoney] = useState(10000000)
  const [basket,setBasket] = useState([])
  const [total,setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(basket.reduce((acc,item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
  },[basket])

  return (
    <>
      <Header total={total} money={money}/>
      <div className='container'>
        {products.map(product => (
          <Product key={product.id} total={total} money={money} product={product} basket={basket} setBasket={setBasket} />
        ))}
      </div>
      {
        total > 0 && (
          <Basket resetBasket={resetBasket} products={products} basket={basket} total={total} />
        )}
      
    </>
  )
}

export default App
