import React from 'react'
import Logo from '/src/assets/svg/logo.svg'
import Button from '../Button/button'
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header({theme}) {
  const {toggleTheme} = useTheme();
  return (
    <div className={`header ${theme}`}>
        <div className="wrapper">
        <div className="headerCont">
        <Link to={`/`} className='logo'> <img src={Logo} alt="logoOnko"/></Link>
        <nav>
            <ul>
            
                <Link to={`/articles`}>
                  {theme == 'light' && <li><img src="src/assets/png/cheremsha_light.jpg" alt="CheremshaL" width="100px"/></li>}
                  {theme == 'venom' && <li><img src="src/assets/png/cheremsha_venom.webp" alt="CheremshaV" width="100px"/></li>}
                </Link>
                <Link to={`/contacts`}><li>Контакты</li></Link>
                <Link to={`/test`}><li>Тест</li></Link>
            
            </ul>
        </nav>
        <div className='buttonCont'>
                <div className='themeIcons' onClick={toggleTheme}>
                  {theme == 'light' && <img src="src/assets/svg/lightIcon.svg" alt="lightI" width="50px"/>}
                  {theme == 'venom' && <img src="src/assets/svg/venomIcon.svg" alt="venomI" width="50px"/>}
                </div>
          <Link to={`/login`}><Button label={'Вход'} usingFor={"signIn"}/></Link>
        </div>
        </div>
        </div>
    </div>
  )
}
