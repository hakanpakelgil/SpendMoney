import React from 'react'
import { moneyFormat } from '../helpers'
import '../assets/styles/header.css'

const Header = ({money, total}) => {
  return (
    <div>        
        {total > 0 && (
            <div className='header'>
                Harcayacabileceğiniz için <span>${moneyFormat(money - total)}</span> paranız var
            </div>
        ) || (
            <div className='header'>
                Harcamak için <span>${moneyFormat(money)}</span> paranız var
            </div>            
        )}        
    </div>
  )
}

export default Header