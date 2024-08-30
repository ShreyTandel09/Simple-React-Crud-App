import React from 'react';
import './App.css';
import { Button, Divider, Input, Segment } from 'semantic-ui-react'

import Create from './component/create';
import Update from './component/update';
import Read from './component/read';
import NotFound from './component/404.jsx';
import HomePage from './component/home.jsx';
import Header from './component/header.jsx';



// Import BrowserRouter, Routes, and Route from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <div>
          <Routes>
            {/* Use 'element' prop to pass the component */}
            <Route path='/' element={<HomePage />} />
            <Route path='/create' element={<Create />} />
            <Route path='/read' element={<Read />} />
            <Route path='/update' element={<Update />} />
            <Route path='/404' element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
