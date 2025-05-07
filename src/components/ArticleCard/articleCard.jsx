import React, { useEffect, useState } from 'react'
import Styles from './articleCard.module.css'

export default function articleCard({date, title, author, img}) {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  

  let heightSize;

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  if (windowWidth < 1280 && isHovered == false) {
    heightSize = '130px';
  }
  else if (windowWidth < 1280 && isHovered == true) {
    heightSize = '230px'
  }
  else {
    heightSize = '500px'
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);



  return (
    <div
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={`${Styles.articleCard}`}
    style={{
        background: isHovered === false ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})` : `#FDCCD9`,
        backgroundSize: isHovered === false ? 'cover' : 'none',
        color: isHovered === false ? '#ffffff' : '#0C0C0C',
        maxWidth: isHovered === false && windowWidth > 1280 ? '320px' : '450px',
        height: heightSize
    }}
    >
        <p className={`${Styles.date}`}>{date}</p>
        <h2 className={`${Styles.title}`}>{title}</h2>
        <p className={`${Styles.author}`}>{author}</p>
    </div>
  )
}
