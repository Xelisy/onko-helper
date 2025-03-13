import React from 'react'
import Logo from '/src/assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="wrapper">
        <div className="headerCont">
        <img src={Logo} alt="logoOnko" />
        <nav>
            <ul>
            <li>
                <Link to={`/articles`}>Статьи</Link>
            </li>
            <li>
                <Link to={`/contacts`}>Контакты</Link>
            </li>
            <li>
                <Link to={`/test`}>Тест</Link>
            </li>
            <li>
                <a href='#'>Другие ссылки</a> 
            </li>
            </ul>
        </nav>
        <button className='headerButton'>Вход</button>                    
        </div>
        </div>
    </div>
  )
}
