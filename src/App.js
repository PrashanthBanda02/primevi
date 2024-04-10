import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import Upcoming from './components/Upcoming';
import TopRated from './components/TopRated';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/popular" element={<Popular />} />
        <Route exact path="/upcoming" element={<Upcoming />} />
        <Route exact path="/topRated" element={<TopRated />} />
      </Routes>
    </Router>
  );
};

export default App;
