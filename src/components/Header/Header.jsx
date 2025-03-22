import React from 'react'
import Logo from '/src/assets/svg/logo.svg'
import Button from '../Button/button'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
  return (
    <div className='header'>
        <div className="wrapper">
        <div className="headerCont">
        <Link to={`/`}> <img src={Logo} alt="logoOnko"/></Link>
        <nav>
            <ul>
            
                <Link to={`/articles`}><li>Статьи</li></Link>
            
            
                <Link to={`/contacts`}><li>Контакты</li></Link>
            
            
                <Link to={`/test`}><li>Тест</li></Link>
            
            
                <Link to={`*`}><li>Другие ссылки</li></Link>
        
            
            </ul>
        </nav>
        <Button label={'Вход'} usingFor={"signIn"}/>      
        </div>
        </div>
    </div>
  )
}
