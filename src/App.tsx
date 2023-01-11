import React from 'react';
import './App.css';
import Main from './UI/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Anime from './UI/Anime/Anime';
import Manga from './UI/Manga/Manga';


function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path='/anime' element={<Anime />} />
        <Route path='/manga' element={<Manga />} />
      </Routes>
    </div>
  );
}

export default App;
