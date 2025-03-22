import React from 'react'
import "./Error.css"
import { Link } from 'react-router-dom'
import Button from '../components/Button/button'


export default function Error() {
  return (
    <div>
      <h1>Этот раздел еще не создан</h1>
      
      <Link to={`/`} className="center-link"> <Button label={'Перейти на главную'} usingFor={"signIn"}/> </Link>
    </div>
  )
}
