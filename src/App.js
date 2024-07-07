import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';



class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
