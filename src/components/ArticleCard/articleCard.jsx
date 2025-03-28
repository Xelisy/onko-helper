import React from 'react'
import Styles from './articleCard.module.css'

export default function articleCard({date, title, author, img}) {
  return (
    <div className={`${Styles.articleCard}`}
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
        backgroundSize: 'cover'
    }}
    >
        <p className={`${Styles.date}`}>{date}</p>
        <h2 className={`${Styles.title}`}>{title}</h2>
        <p className={`${Styles.author}`}>{author}</p>
    </div>
  )
}
