import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

import Header from './components/header/Header';
import SideNav from './components/navigation/SideNav';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className='d-flex'>
          <SideNav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
