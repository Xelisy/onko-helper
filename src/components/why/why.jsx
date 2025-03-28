import React from 'react'
import './why.css'
import Message from '../Message/message'
import Button from '../Button/button'

export default function why() {
  return (
    <div className='why'>
        <h1>Почему это важно?</h1>
        <div className="whyAQCont">
            <Message 
              title={"Ты правда хочешь больше заняться своим здоровьем и проконсультироваться со специалистом? У тебя же ничего не болит, зачем тогда это нужно?"} 
              time={"13:53"}
            />
            <Message 
              title={"Конечно, я тебе даже назову несколько причин!"} 
              time={"13:53"}
              position={"right"}
            />
            <Message 
              title={"1. Ранняя диагностика спасает жизни. Если на ранних стадиях выявить, то это значительно увеличит шансы на спасение"} 
              time={"13:53"}
              position={"right"}
            />
            <Message 
              title={"2. Тест это просто и быстро, его можно пройти даже пока едешь в транспорте вместо игры “Три в ряд”."} 
              time={"13:54"}
              position={"right"}
            />
            <Message 
              title={"3. Пройдя тест, и проконсультировавшись со специалистом я могу быть в уверенности, что с моим здоровьем всё в порядке "} 
              time={"13:54"}
              position={"right"}
            />
            <Message 
              title={"Ух ты, в ритме жизни я не и думал о том, что ей может угрожать, и что так быстро и просто можно это уточнить, спасибо, я обязательно пройду тест!"} 
              time={"13:55"}
            />
        </div>
        <div className="button-cont">
        <Button label={"Пройти тест"} usingFor={'signIn'}/>
        </div>
        
    </div>
  )
}
    