// Code ClickityClick Component Here
// import React from 'react';

// class ClickityClick extends React.Component {
//   constructor() {
//     super();

//     // Define the initial state:
//     this.state = {
//       hasBeenClicked: false
//     };
//   }

//   handleClick = () => {
//     // Update our state here...
//     this.setState({
//         hasBeenClicked: true
//         // currentTheme: 'blue',
//       }, 
//       () => console.log(this.state.hasBeenClicked)); //prints false
//   };

//   render() {
//     return (
//       <div>
//         <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
//         <button onClick={this.handleClick}>Click me!</button>
//       </div>
//     );
//   }
// }

// export default ClickityClick;

// import React, {Component} from 'react';

// class ButtonCounter extends Component {
//   constructor() {
//     super()
//     // initial state has count set at 0
//     this.state = {
//       count: 0
//     }
//   }

//   handleClick = () => {
//     // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
//     let newCount = this.state.count + 1
//     this.setState({
//       count: newCount
//     })
//   }
// handleClick = () => {
//     this.setState(previousState => {
//       return {
//         count: previousState.count + 1
//       }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     )
//   }
// }

// export default ButtonCounter 

import React from 'react';

class LightSwitch extends React.Component {
  constructor() {
    super();

    // Initial state is defined
    this.state = {
      toggled: false
    };
  }

  // when handleClick is called, setState will update the state so that toggle is reversed
  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default LightSwitch; 