import React from 'react'
import Styles from './callCard.module.css'

export default function callCard({title, img, theme="light"}) {
  return (
    <div className={`${Styles.callCard} ${Styles[theme]}`}>
        <img src={img} alt={`card ${img}}`} />
        <h2>{title}</h2>
    </div>
  )
}
