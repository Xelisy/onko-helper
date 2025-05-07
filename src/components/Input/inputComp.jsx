import React from 'react'
import './inputComp.css'

export default function inputComp({inputArray, theme, usingFor, type, placeholder}) {
  return (
    <>
    {inputArray && <div className={`inputTest ${theme}`}>
        <label>{inputArray.name}</label>
        <div className="radioCont">
            {inputArray.type == 'radio' && inputArray.options && (inputArray.options[0] !== 'Да' && inputArray.options[1] !== 'Да') && inputArray.options.map(opt => (
                <div className='radioTest'>
                    <label htmlFor={opt}>{opt}</label>
                    <input type={inputArray.type} name={inputArray.name} id={opt} value={opt}/>
                </div> 
            ))}
            {inputArray.type === 'radio' && !inputArray.options && (
                <> 
                <div className='radioTest'>
                    <label htmlFor="Да">Да</label>
                        <input 
                        type={inputArray.type} 
                        name={inputArray.name} 
                        id="Да" 
                        value="Да"
                        />
                </div>
                <div className='radioTest'>
                        <label htmlFor="Нет">Нет</label>
                        <input 
                        type={inputArray.type} 
                        name={inputArray.name} 
                        id="Нет" 
                        value="Нет"
                        />
                </div>
                </>
                )}
        </div>
        {inputArray.type !== 'radio' && <input type={inputArray.type}/>}
    </div>}

    {!inputArray && <div className={`inputRegister ${theme}`}>
        <input type={type} placeholder={placeholder}/>      
    </div>}
    </>
  )
}
