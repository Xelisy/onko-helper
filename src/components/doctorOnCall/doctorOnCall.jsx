import React from 'react'
import "./doctorOnCall.css"
import CallCard from '../callCard/callCard'
import Key from '/src/assets/png/key.png'
import Screen from '/src/assets/png/Screen.png'
import Watch from '/src/assets/png/Watch.png'

export default function doctorOnCall() {
  return (
    <div className='doctorOnCall'>
      <h1>Доктор - на связи</h1>
      <p>Онкопомощник не только предоставляет вам возможность пройти тест и получить результаты, а также и обсудить это с квалифицированным специалистом. Каким образом?</p>
      <div className="callCards">
        <CallCard title={"Получите ваш код доступа"} img={Key}/>
        <CallCard title={"Зарегистрируйтесь или авторизуйтесь"} img={Screen}/>
        <CallCard title={"Дождитесь сообщения врача"} img={Watch}/>
      </div>
    </div>
  )
}
