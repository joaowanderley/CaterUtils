import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg'
import './styles.css'

export default function Register() {
  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logo} alt='Be The Hero' />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e organize
            seus horários de bosses
          </p>

          <Link to='/' className='back-link'>
            <FiArrowLeft size={16} color='#7C5DD6' />
            Já tenho cadastro
          </Link>
        </section>

        <form>
          <input
            placeholder='Seu usuário'
          />
          <input
            type='password'
            placeholder='E-mail'
          />
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}