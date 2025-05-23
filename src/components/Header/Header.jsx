import React from 'react'
import Logo from '/src/assets/svg/logo.svg'
import Button from '../Button/button'
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
import './Header.css'
import CheremshaL from '/src/assets/png/cheremsha_light.jpg'
import CheremshaV from '/src/assets/png/cheremsha_venom.webp'
import LightIcon from '/src/assets/svg/lightIcon.svg'
import VenomIcon from '/src/assets/svg/venomIcon.svg'

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
                  {theme == 'light' && <li><img src={CheremshaL} alt="CheremshaL" width="100px"/></li>}
                  {theme == 'venom' && <li><img src={CheremshaV} alt="CheremshaV" width="100px"/></li>}
                </Link>
                <Link to={`/contacts`}><li>Контакты</li></Link>
                <Link to={`/test`}><li>Тест</li></Link>
            
            </ul>
        </nav>
        <div className='buttonCont'>
                <div className='themeIcons' onClick={toggleTheme}>
                  {theme == 'light' && <img src={LightIcon} alt="lightI" width="50px"/>}
                  {theme == 'venom' && <img src={VenomIcon} alt="venomI" width="50px"/>}
                </div>
          <Link to={`/login`}><Button label={'Вход'} usingFor={"signIn"}/></Link>
        </div>
        </div>
        </div>
    </div>
  )
}
