// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import Home from './routes/Home';
import './App.css';
// import { HashRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie-detail' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
