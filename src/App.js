import React from 'react';
import NavBar from './NavBar.js';
import Counter from './Counter.js';
// import ImageGen from './ImageGen';
import './App.css';

function App() {
  return (
    <>
      <NavBar name='NavBar' />
      <Counter name='Counter' />
      {/* <ImageGen name='ImageGen' /> */}
    </>
  );
}

export default App;
