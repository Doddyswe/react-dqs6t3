import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops'

export class Counter extends Component {
  render() {
    return(
    <Spring
      from={{ number: 0 }}
      to={{ number: 100 }}
      config={{ delay: 1000, duration:1000 }}
    >

      {props => (
        <div className="Counter" style={props}>
        <div style={CounterStyle}>
          <h2>{props.number.toFixed()}</h2>
          <svg>
            <line stroke="slateblue" strokeWidth="5px" x1="0" y1="0" x2={props.number+'%'} y2="0" />
          </svg>
        </div>
      </div>
      )}
    </Spring>
    );
  }
}

const CounterStyle = {
  background: 'floralwhite',
  color: 'slateblue',
  padding: '1.5rem',
  width: '100px',
  height: '100px',
  textAlign: 'center'
}

export default Counter;