import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import { observer } from "mobx-react";
import Routes from "./components/Routes/Routes";
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import history from "./components/History/History";

import  './assets/styles/App.scss';


const App = () => (
  <Router history={history}>
  <div className="App">
    <Header/>
     <Routes />
    </div>
    </Router>
);

export default App;
