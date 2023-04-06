import {
  ScrollRestoration,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import PCheader from './components/pc/header';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (isMobile && location.pathname !== '/mobile') {
      navigate('/mobile');
    } else if (!isMobile && location.pathname === '/mobile') {
      navigate('/');
    }
  }, [isMobile, location.pathname, navigate]);

  return isMobile ? (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  ) : (
    <div>
      <ScrollRestoration />
      <Outlet />
      <PCheader />
    </div>
  );
}

export default App;
