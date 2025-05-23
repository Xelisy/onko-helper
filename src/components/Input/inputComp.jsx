import React from 'react'
import './inputComp.css'

export default function inputComp({inputArray, theme, usingFor, type, placeholder}) {
  return (
    <>
    {inputArray && <div className={`inputTest ${theme}`}>
        <label className='questionText'>{inputArray.name}</label>
        <div className="radioCont">
            {inputArray.type == 'radio' && inputArray.options && (inputArray.options[0] !== 'Да' && inputArray.options[1] !== 'Да') && inputArray.options.map(opt => (
                <div className='radioTest'>
                    <label htmlFor={opt}>{opt}</label>
                    <input type={inputArray.type} name={inputArray.name} id={opt} value={opt} required/>
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
                        required
                        />
                </div>
                <div className='radioTest'>
                        <label htmlFor="Нет">Нет</label>
                        <input 
                        type={inputArray.type} 
                        name={inputArray.name} 
                        id="Нет"
                        required
                        value="Нет"
                        />
                </div>
                </>
                )}
        </div>
        {inputArray.type !== 'radio' && <input type={inputArray.type} required/>}
    </div>}

    {!inputArray && <div className={`inputRegister ${theme}`}>
        <input type={type} placeholder={placeholder} required/>      
    </div>}
    </>
  )
}
