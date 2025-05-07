import { BrowserRouter, useLocation } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Router from './routes/router';
import Footer from './components/footer/footer'
import { useTheme } from './context/ThemeContext';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation(); 
  const { theme } = useTheme();


  useEffect(() => {
    if (location.pathname === '/login') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location.pathname]);

  return (
    <div className={`app-container ${theme}`}>
      <Header theme={theme} />
      <main className="content">
        <Router />
      </main>
      {location.pathname !== '/login' && <Footer theme={theme} />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;