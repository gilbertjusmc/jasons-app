import React, { useState } from 'react';
import NavBar from './NavBar.js';
import Counter from './Counter.js';
import Switch from './Switch.js';
import HomePage from './HomePage.js';
// import ImageGen from './ImageGen';
import './App.css';
import { UserProvider } from './UserContext.js';

function App() {
  const [value, setValue] = useState(false);
  const user = { name: "Jason", loggedIn: true }
  return (
    <>
      <UserProvider value={user}>
        <HomePage />
      </UserProvider>

      <div className="app">
        <Switch
          isOn={value}
          // color of button when on.
          onColor="#EF476F"
          handleToggle={() => setValue(!value)}
        />
      </div>
      <NavBar name='NavBar' />
      <Counter name='Counter' />

      {/* <ImageGen name='ImageGen' /> */}
    </>
  );
}

export default App;
