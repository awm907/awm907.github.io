import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Navigation from './Components/Navigation';
import { Route , Routes , BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>

  );
}

export default App;
