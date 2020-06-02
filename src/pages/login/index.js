import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg'
import imgSection from '../../assets/magodosmagos.png'

export default function Login() {

  const history = useHistory()
  
  async function handleLogin(e) {
    e.preventDefault()

    try {

      history.push('/home')
    } catch (error) {
      alert('Falha no login')
    }

  }
  return (
    <div className='login-container'>
      <section className='form'>
        <img src={logoImg} alt='jester' />
        <form onSubmit={handleLogin} >
          <h1>Faça login</h1>

          <input
            placeholder='Usuário'
          />
          <input
            placeholder='Senha'
            type='password'
          />
          <button className='button' type='submit'>
            Entrar
          </button>

          <Link to='/register' className='back-link'>
            <FiLogIn size={16} color='#7C5DD6' />
            Faça cadastro
          </Link>
        </form>
      </section>
      <img src={imgSection} alt='Heroes' />
    </div>
  )
}