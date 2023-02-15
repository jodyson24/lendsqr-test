import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

const App = () => {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={ <Login/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
