import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Router from './routes/router';
import Footer from './components/footer/footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="app-container">
      <Header />
      <main className="content">
      <Router />
      </main>
      <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
