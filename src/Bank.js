
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Account from './features/account/Account';

function Bank () {
    return (
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/account" element={<Account/>} />
            </Routes>
          </div>
        </Router>
      );
}

export default Bank;