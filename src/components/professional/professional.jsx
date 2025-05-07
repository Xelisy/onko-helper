import React from 'react'
import './professional.css'
import Map from '/src/assets/png/map.png'
import Poppins from '/src/assets/png/merrypopins.png'
import PoppinsVenom from '/src/assets/png/merrypoppinsvenom.png'
import { useTheme } from '../../context/ThemeContext'

export default function professional() {
  const {theme} = useTheme()
  return (
    <div className='professional'>
        <div className='title'>
        <h1>Упор на профессионалов - залог здоровья</h1>
        <p>Наш сервис не предоставляет медицинские услуги, он лишь сотрудничает с медицинскими учреждениями, но мы вам с радостью передадим контакты к кому можно обратиться для начала вашего нелегкого пути лечения!</p>
    </div>
    <div className='number'>
        <div className="number-left">
            <h2>Центр амбулаторной онкологической помощи:</h2>
            <img src={theme === 'light' ? Poppins : PoppinsVenom} alt="flyman" />
        </div>
        <h2 className='phone'>+7 (846) 330-07-25</h2>
    </div>
    <div className='map'>
        <h2>Клиники в вашем городе на карте:</h2>
        <img src={Map} alt="map" />
    </div>
    </div>
    
  )
}
