import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalState } from './GlobalState';

import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

import Header from './components/header/Header';
import SideNav from './components/navigation/SideNav';

const App = () => {
  const state = useContext(GlobalState)
  const [auth] = state.auth

  return (
    <Router>
      <div className="App">
        {auth && <Header />}

        <div className='d-flex'>
          {auth && <SideNav />}
          <Routes>
            <Route path="/" element={ auth ? <Users /> : <Login /> } />
            <Route path="/users" element={ auth ? <Users /> : <Login /> } />
            <Route path="/users/:id" element={ auth ? <UserDetails /> : <Login /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
