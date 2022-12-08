import React from 'react'
import { Link } from 'react-router-dom'
import logo from './gpay.png'
import logo1 from './paytm.png'
import logo2 from './phonepe.png'
import logo3 from './mcard.png'
import logo4 from './rcard.png'
import logo5 from './cash.png'
export const Home = () => {
  return (
    <div className='container'>
        <h1 className='container'>How would you like to pay !.</h1>
        <button><Link to='/u'><img src={logo} alt=''/></Link></button>
        <button><Link to='/c'><img src={logo1} alt=''/></Link></button>
        <button><Link to='/d'><img src={logo2} alt=''/></Link></button>
        <button><Link to='/d'><img src={logo3} alt=''/></Link></button>
        <button><Link to='/d'><img src={logo4} alt=''/></Link></button>
        <button><Link to='/d'><img src={logo5} alt=''/></Link></button>
    </div>
  )
}
