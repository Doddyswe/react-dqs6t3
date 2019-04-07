import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Counter from './Counter.js';

export default class Header extends Component {
  render() {
    return (
    <Spring style={{ zIndex: 1 }}
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div class="header" style={props}>
        <h1>Simple React Animations</h1>
        <p>With react-spring</p>
        <Counter />
      </div>
      )}
    </Spring>
    )
  }
}