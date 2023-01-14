import React from 'react';
import './App.css';
import Main from './UI/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Anime from './UI/Anime/Anime';
import Manga from './UI/Manga/Manga';
import Info from './UI/Info/Info';
import TEST from './UI/Main/TEST';


function App() {
  console.log("1")
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path='/*' element={<TEST />} />
        <Route path='/anime/*' element={<Anime />} />
        <Route path='/manga/*' element={<Manga />} />
        <Route path='/info/*' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
