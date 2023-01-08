import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from './BLL/redux';
import { sagaGetAnime } from './BLL/anime-reducer';
import Main from './UI/Main/Main';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => { dispatch(sagaGetAnime(10, 0)) }, [])
  return (
    <div className="App">
      {/* {anime.map((a: any) => <div className='anime' key={a.id}>{a.attributes.description}</div>)} */}
      <Main />
    </div>
  );
}

export default App;
