import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Cookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import DashboardRouter from "./containers/DashboardRouter/DashboardRouter";
import ViewPage from "./containers/ViewPage/ViewPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/view/:id?" component={ViewPage} />
        <Route path="/" component={DashboardRouter} />
      </Switch>
      {/* <DashboardRouter onSavePassWord={this.onSavePassWord} /> */}
    </BrowserRouter>
  );
};

export default App;
