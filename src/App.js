import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DashboardRouter from "./components/DashboardRouter/DashboardRouter";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: cookies.get('cardbo-user-email'),
      userPassword: cookies.get('cardbo-user-password'),
    }
    console.log(this.state.userEmail);
    console.log(this.state.userPassword);
  }
  onSavePassWord = () => {

  }
  render() {
    return (
      <BrowserRouter>
        <DashboardRouter onSavePassWord={this.onSavePassWord}/>
      </BrowserRouter>
    );
  }
}

