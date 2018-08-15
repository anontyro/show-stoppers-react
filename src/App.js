import React, { Component } from 'react';
import './App.css';
import Header from './routing/Header';
import Main from './routing/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
