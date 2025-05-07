import React from 'react'
import Styles from './button.module.css'

export default function Button({label, theme="light", usingFor, onClick}) {
  return (
    <button
    className={`${Styles.button} ${Styles[theme]} ${Styles[usingFor]}`}
    onClick={onClick}
    >
        {label}
    </button>
  )
}
    