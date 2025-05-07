import React, {useState} from 'react'
import './AllQuestions.css'
import InputComp from '../../Input/inputComp'
import Button from '../../Button/button'

export default function AllQuestions({questions, theme, callback, isLastPage=false}) {
  const [btnText] = useState(!isLastPage ? 'Следующая страница' : 'Закончить тест')
  const changeNumber = () => {
    callback();
    console.log('it is child')
  }

  return (
    <div className={`allQuestions ${theme}`}>
      <div className='testTitle'>
        <p>{questions.name}</p>
        <span></span>
      </div>
        {questions.questions.map(que => (
          <InputComp theme={theme} inputArray={que}/>
        ))}
          <Button label={btnText} usingFor='main' onClick={changeNumber}/>
    </div>
  )
}
