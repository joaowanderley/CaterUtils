import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'

export default function Home() {

  return (
    <div className='home-container'>
      <div className='menu-container'>
        <ul>
          <li>
            <img src={logo} href="#home" />
          </li>
          <li><a  href="#news">Personagens</a></li>
          <li><a href="#contact">Warzone</a></li>
          <li><a  href="#about">Oberon</a></li>
        </ul>
      </div>
    </div>
  )
}