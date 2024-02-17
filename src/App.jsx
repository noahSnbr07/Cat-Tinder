import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Swiper from '../src/pages/Swiper';
import Archive from '../src/pages/Archive';

export default function App() {
  const navigate = useNavigate()
  useEffect(() => { navigate('/swiper') }, []);
  return (
    <>
      <nav className='navbar'>
        <section>
          <Link to={'/'}> Cat Tinder </Link>
        </section>
        <section>
          <Link to={'/swiper'}> 🌐 </Link>
          <Link to={'/archive'}> 💾 </Link>
        </section>
      </nav>
      <main className='viewport'>
        <Routes>
          <Route path='/swiper' element={<Swiper />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </main>
    </>
  );
}