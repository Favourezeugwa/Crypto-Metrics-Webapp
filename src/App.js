import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsContainer from './Components/Details/DetailsContainer';
import Navigation from './Components/Navigation/Navigation';
import HomeItem from './Components/Home/HomeItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomeItem />} />
          <Route path="/details" element={<DetailsContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
