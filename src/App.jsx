import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Router from './routes/router';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App
