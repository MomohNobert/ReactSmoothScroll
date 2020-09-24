import React from 'react';
import './App.css';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Main from './components/main/main.component';
import Navbar from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Contact />
    </div>
  );
}

export default App;
