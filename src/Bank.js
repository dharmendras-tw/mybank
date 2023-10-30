
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Account from './features/account/Account';
import { ReduxAccount } from './features/redux/account/Account';
import CityQuizStates from './features/demo/CityQuizStates';
import CityQuiz from './features/demo/CityQuiz';


function Bank () {
    return (
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/account" element={<Account/>} />
              <Route path="/redux-account" element={<ReduxAccount/>} />
              <Route path="/city-quiz" element={<CityQuiz/>} />
              <Route path="/city-quiz-states" element={<CityQuizStates/>} />
            </Routes>
          </div>
        </Router>
      );
}

export default Bank;