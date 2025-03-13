import React from 'react'
import WhyLeft from '/src/assets/png/whyleft.png'
import './why.css'

export default function why() {
  return (
    <div className='why'>
        <h1>Почему это важно?</h1>
        <div className="whyAQCont">
            <div className="whyOne">
              <img src={WhyLeft} alt="whyLeft" />
              <p>Ты правда хочешь больше заняться своим здоровьем и проконсультироваться со специалистом? У тебя же ничего не болит, зачем тогда это нужно?</p>
              <span>13:52</span>
            </div>
        </div>
    </div>
  )
}
    