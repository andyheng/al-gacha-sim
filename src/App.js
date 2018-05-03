import React, { Component } from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <Main />
      </div>
    );
  }
}

export default App;