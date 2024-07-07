import React, { Component } from 'react';
import CounterWithState from './components/Counter/Counter';
import Header from './components/Header/Header';



class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <CounterWithState />
      </div>
    );
  }
}

export default App;
