import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops'

export class ComponentTwo extends Component {
  render() {
    return(
    <Spring style={{componentTwoStyle}}
      from={{ marginTop: 500 }}
      to={{ marginTop: 0 }}
      config={{ delay:200, duration:1000 }}
    >
      {props => (
        <div class="componenttwo" style={props}>
        <div style={componentTwoStyle}>
          <h1>ComponentTwo</h1>
          <p>Lorem ipsum dolor sit, amet consectetur apidisicing elit.</p>
        </div>
      </div>
      )}
    </Spring>
    );
  }
}

const componentTwoStyle = {
  background: 'slateblue',
  color: 'floralwhite',
  padding: '1.5rem',
  zIndex: -1000
}

export default ComponentTwo;