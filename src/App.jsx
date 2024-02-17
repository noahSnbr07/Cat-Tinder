import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Swiper from '../src/pages/Swiper';
import Archive from '../src/pages/Archive';
import Invalid from './pages/Invalid';

export default function App() {
  return (
    <>
      <nav className='navbar'>
        <section>
          <Link to={'/'}> Cat Tinder </Link>
        </section>
        <section>
          <Link to={'/swiper'}> 🐈 </Link>
          <Link to={'/archive'}> 💾 </Link>
          <a href='https://www.github.com/noahSnbr07/Katinder'> 💻 </a>
        </section>
      </nav >
      <main className='viewport'>
        <Routes>
          <Route index element={<Swiper />} />
          <Route path='/swiper' element={<Swiper />} />
          <Route path='/' element={<Swiper />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/*' element={<Invalid />} />
        </Routes>
      </main>
    </>
  );
}