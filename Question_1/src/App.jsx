import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './Components/table';

function App() {



  return (
          <Router>
          <Routes>
            <Route path="/" element={<Table />} />
          </Routes>
        </Router>
  )
}

export default App
