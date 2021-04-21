import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserState from './context/user/userState';
import Home from "./components/Home/Home";
import "./App.css";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/User/Wallets";
import axios from 'axios';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  axios.defaults.baseURL = 'http://104.236.219.24:4000/';

  return (
    <div className="App">
      <UserState>
        <Router>
          {darkMode === false ?
            <div className="bgwhite whitemode">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Switch>
                <Route path="/list">
                  <UserList darkMode={darkMode} />
                </Route>
                <Route path="/">
                  <Home darkMode={darkMode} />
                </Route>
              </Switch>
            </div>
          :
            <div className="bgdark darkmode">
              <Navbar setDarkMode={setDarkMode} />
              <Switch>
                <Route path="/list">
                  <UserList darkMode={darkMode} />
                </Route>
                <Route path="/">
                  <Home darkMode={darkMode} />
                </Route>
              </Switch>
            </div>
          }
        </Router>
      </UserState>
    </div>
  );
}