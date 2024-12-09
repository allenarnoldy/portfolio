// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const [currentPage, setPage] = useState("About Me")
  useEffect(() => {
    if (location.pathname === '/') {
      setPage("About Me");
    }
    else if(location.pathname === 'portfolio') {
      setPage("Portfolio");
    }
    else if(location.pathname === 'contact') {
      setPage('Contact Me');
    }
    else if(location.pathname === 'resume') {
      setPage('resume');
    }
    document.title = `${currentPage} | Allen - Portfolio`;
  })
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
