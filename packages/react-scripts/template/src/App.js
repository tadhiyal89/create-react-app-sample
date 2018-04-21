import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IndexRoute,BrowserRouter as Router, Route, Switch,Render,Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to='/'><button>home</button></Link>
        <Link to='/dashboard'><button>Dashboard</button></Link>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
