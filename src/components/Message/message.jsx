import React from 'react'
import Styles from './message.module.css'
import corner from '../../assets/png/corner.png';
export default function Message({title, time, position='left', theme='light'}) {
    return (
      <div className={`${Styles.message} ${Styles[position]} ${Styles[theme]}`}>
            <p>
            <img draggable="false" src={corner} alt="Corner" />
            {title}
            <span>{time}</span>
            </p>
      </div>
    )
  }
      