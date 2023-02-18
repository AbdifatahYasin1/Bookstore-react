import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Categories from './components/Categories';
import Conatiner from './components/Conatiner';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Conatiner />} />
          <Route exact path="/categories/*" element={<Categories />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
