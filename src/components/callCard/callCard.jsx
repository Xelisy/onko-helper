import React from 'react'
import Styles from './callCard.module.css'
import { useTheme } from '../../context/ThemeContext'

export default function callCard({title, img, positionImg='right'}) {
  const {theme} = useTheme();
  return (
    <div className={`${Styles.callCard} ${Styles[theme]} ${Styles[positionImg]}`}>
        <img src={img} data-alt={`card ${img}}`} />
        <h2>{title}</h2>
    </div>
  )
}
