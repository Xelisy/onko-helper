import React, {useState} from 'react'
import './AllQuestions.css'
import InputComp from '../../Input/inputComp'
import Button from '../../Button/button'

export default function AllQuestions({questions, theme, callback, isLastPage=false}) {
  const [btnText] = useState(!isLastPage ? 'Следующая страница' : 'Закончить тест')
  const [scopes, changeScopes] = useState(0);
  function addScopes(formData) {
    let sc = [];
    
    questions.questions.map((que, index) => {
      formData.get(que.name) == 'Да' 
      ? sc.push({'index': index, 'answer': 1}) 
      : sc.push({'index': index, 'answer': 0})
    })
    changeScopes();
    callback(sc);
  }
  return (
    <div className={`allQuestions ${theme}`}>
      <div className='testTitle'>
        <p>{questions.name}</p>
        <span></span>
      </div>
      <form action={addScopes}>
        {questions.questions.map(que => (
          <InputComp theme={theme} inputArray={que}/>
        ))}
          <Button label={btnText} usingFor='main' type="submit"/>
          </form>
    </div>
  )
}
