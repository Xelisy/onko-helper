import React, {useState} from 'react'
import Background from '/src/assets/png/BackgroundTest.png'
import BackgroundVenom from '/src/assets/png/BackgroundVenom.png'
import Clouds from '/src/assets/png/cloudsLogin.png'
import MoonShaders from '/src/assets/png/MoonShaders.png'
import Stars from '/src/assets/png/Stars.png'
import './Authorization.css'
import InputComp from '../../components/Input/inputComp'
import Button from '../../components/Button/button'
import { useTheme } from '../../context/ThemeContext'

export default function Authorization() {
  const [isLogin, setIsLogin] = useState(true)
  const {theme} = useTheme()
  const changeIsLogin = (value) => {
    setIsLogin(value);
  }
  return (
    <div className='login'>
        <img className='bgLogin' src={theme == 'light' ? Background : BackgroundVenom} alt="bgLight" />
        {theme == 'light' && <div className="caroussel">
        <img src={Clouds} alt="cloudsLight" />
        <img src={Clouds} alt="cloudsSecondLight" />
      </div>}
      {theme == 'venom' && <div className="bgVenom">
        <img src={MoonShaders} alt="moonShaders" />
        <img src={Stars} alt="Stars" />
      </div>}
        <div className="loginCont">
            <div className="loginTop">
              <div className="displayMirror">
                <div className="displayMirrorText">
                  <p onClick={() => changeIsLogin(false)} className={isLogin ? 'titleLogin' : 'titleLogin activeLine'}>Авторизация</p>
                  <p onClick={() => changeIsLogin(true)} className={isLogin ? 'titleLogin activeLine' : 'titleLogin'}>Регистрация</p>
                </div>
                {isLogin && <div className="displayMirrorInputs">
                  <form>
                    <InputComp type="text" placeholder="Почта"/>
                    <InputComp type="text" placeholder="Фамилия"/>
                    <InputComp type="text" placeholder="Имя"/>
                    <InputComp type="text" placeholder="Пароль"/>
                    <InputComp type="text" placeholder="Повторите пароль"/>
                    <InputComp type="text" placeholder="Код доступа"/>
                    <div className="btnCont">
                    <Button label='Зарегистрироваться' usingFor='signIn'/>
                    </div>
                  </form>
                </div>}
                {!isLogin && <div className="displayMirrorInputs">
                  <form>
                    <InputComp type="text" placeholder="Почта"/>
                    <InputComp type="text" placeholder="Пароль"/>
                    <div className="btnCont">
                    <Button label='Авторизация' usingFor='signIn'/>
                    </div>
                  </form>
                </div>}
              </div>
            </div>
        </div>
    </div>
  )
}
