import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './Components/Home/HomeContainer';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
