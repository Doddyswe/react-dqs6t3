import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header.js'
import ComponentTwo from './components/ComponentTwo.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <ComponentTwo />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
