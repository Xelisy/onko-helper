import React from 'react'
import './footer.css'
import Clouds from '/src/assets/png/clouds.png'
import { Link } from 'react-router-dom'




export default function footer() {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
    

  return (
    <footer className='footer'>
        <div className="up wrapper">
            <h2>Вы обнаружили проблемы на сайте? Обратитесь 
                <Link to={`/contacts`}> сюда.</Link>
            </h2>
            <h2>
                Вы клиника, готовая к сотрудничеству? Тогда вам 
                <Link to={`/contacts`}> к нам.</Link>
            </h2>
        </div>
       <div className="down">
            <div className="text-down wrapper">
                <p>Онкопомощник. Все правы защищены.</p>
                <p onClick={handleScrollToTop}>Вернуться в начало?</p>
            </div>
            <img src={Clouds} alt="cloudsBack" />
       </div>

    </footer>
  )
}
