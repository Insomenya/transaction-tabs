import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Summary from './pages/summary/Summary';
import List from './pages/list/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Summary />} />
        <Route path='/navigator' element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
