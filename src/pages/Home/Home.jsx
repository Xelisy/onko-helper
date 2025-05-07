import React from 'react'
import './Home.css'
import Button from '../../components/Button/button'
import Defender from '/src/assets/png/Defender.png'
import Why from '../../components/why/why'
import DoctorOnCall from '../../components/doctorOnCall/doctorOnCall'
import Article from '../../components/articles/article'
import Professional from '../../components/professional/professional'
import { useTheme } from '../../context/ThemeContext'


export default function Home() {
  const {theme} = useTheme()
  return (
    
    <div className={`home ${theme}`}>
      <div className="wrapper">
        <div className="home-main">
        <div className='home-left'>
          <h1>Ваше здоровье - наша главная забота</h1>
          <p>Онкопомощник предлагает медицинскую информацию и тесты для выявления проблем со здоровьем. Мы стремимся помочь вам лучше понять ваше состояние и принять обоснованные решения.</p>
          <Button label={"Пройти тест"} usingFor={"main"} theme={theme}/>
        </div>
        <div className='home-right'>
          <img src={Defender} alt='defender'/>
        </div>
        </div>
          <Why theme={theme}/>
          <DoctorOnCall theme={theme} />
          <Article theme={theme} />
          <Professional />
        </div>
        
    </div>
  )
}
