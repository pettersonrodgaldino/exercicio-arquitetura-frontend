import React from 'react'
import { Link } from 'react-router-dom'
import './layout/index.css'

export default () => 
  <div>  
      <ul className = 'menu'>
        <li className = 'menu-item'><Link to ='/'>Blog</Link></li>
        <li className = 'menu-item'><Link to = '/sobre'>Sobre</Link></li>
        <li className = 'menu-item'><Link to = '/viagens'>Viagens</Link></li>
      </ul>  
  </div>