import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Cookies } from "react-cookie";
import DashboardRouter from "./containers/DashboardRouter/DashboardRouter";
import ViewPage from "./containers/ViewPage/ViewPage";

const cookies = new Cookies();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: cookies.get("cardbo-user-email"),
      userPassword: cookies.get("cardbo-user-password"),
    };
    // console.log(this.state.userEmail);
    // console.log(this.state.userPassword);
  }

  onSavePassWord = () => {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/view/:id?" component={ViewPage} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
        {/* <DashboardRouter onSavePassWord={this.onSavePassWord} /> */}
      </BrowserRouter>
    );
  }
}
