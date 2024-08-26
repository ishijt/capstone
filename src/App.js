import React from 'react';
import './App.css';

import logo from './Logo.svg';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <img src={logo}/>
      <Nav/>
    </>
  );
}

export default App;