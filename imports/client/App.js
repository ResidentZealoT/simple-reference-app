import React, { Component } from 'react';

// A basic string, {let is a variable type}
let name = "Tim";

export default class App extends Component{
  // describes a function to be called on clicking the header, described within the scope of App
  headingClick() {
    console.log('hello');
  }
  render() {
    return (
      // onClick allows us to call a function on mouse click, using this. indicates the function is within this scope
      <h1 onClick={this.headingClick}>Hello {name}!</h1>
    );
  }
}
