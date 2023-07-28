import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className="heading">
      <h2>Todo App</h2>
    </div>
    <div className="nav">
    <div className='nav-link'  onClick={()=>navigate('/')}><h3>Create</h3></div>
    <div className='nav-link' onClick={()=>navigate('/data')}><h3>Data</h3></div>
    </div>
    
    </div>
  )
}

export default Navbar
