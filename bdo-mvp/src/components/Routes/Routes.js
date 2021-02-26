/* eslint-disable no-unused-vars */
import React, { Component } from "react";
// npm i -S react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Selection from "../Selection/Selection";
// import Login from "../Login/Login";
// import Menu from "../Menu/Menu";
// import HowToUse from "../HowToUse/HowToUse";
import Home from "../Home/Home";
import Landing from "../Landing/Landing";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Landing} /> {/*Here is the change of route*/}
        <Route path="/Home" exact component={Home} />
        {/* <Route path="/checker" exact component={Menu} /> */}
        {/* <Route path="/login" exact component={Login} /> */}
      </Switch>
    );
  }
}
export default Routes;