import React, { useState, useEffect } from 'react';
import './stylesheet.css';
import Menu from './components/layout/header/Menu';
import Settings from './components/layout/header/Settings';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Films from './components/pages/Films';
import Shows from './components/pages/Shows';
import MyList from './components/pages/MyList';
import Home from './components/pages/Home';

const App = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY)
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header style={offset > 0 ? {backgroundImage: 'linear-gradient(180deg, #111111, #141414)'} : {backgroundColor: 'transparent'}}>
          <Menu />
          <Settings />
        </header>
        <Routes>
          <Route path="/" element={ <Home /> }>Home</Route>
          <Route path="/shows" element={ <Shows /> }>TV Shows</Route>
          <Route path="/films" element={ <Films /> }>Films</Route>
          <Route path="/mylist" element={ <MyList /> }>My List</Route>  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;