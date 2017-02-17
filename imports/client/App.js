import React, { Component } from 'react';

// A basic string, {let is a variable type}
let name = "Tim";

export default class App extends Component{
  // constructor for the component on instantiation
  constructor() {
    // allows access to functions from parent objects (ie Component)
    super();
    // reference to state a from component parent
    this.state = {
      count: 0
    }
  }


  // describes a function to be called on clicking the header, described within the scope of App
  headingClick() {
    console.log('hello');
    // increment the state value count on this particular component
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      // onClick allows us to call a function on mouse click, using this. indicates the function is within this scope
      // adding the lines bind(this) allows the method to refer to this instance of a component
      <header onClick={this.headingClick.bind(this)}>
        Hello {name}! This is the state count
        {/* this is a nested react component within the header html */}
        {/* count is called a prop, can fetch data from a parent (ie App state) */}
        <Heading count={this.state.count} />
      </header>
    );
  }
}

// this is a very simple react component can be used within the render function of other components
class Heading extends Component {
  render() {
    return (
      // this.props.count gets the count prop attached to an instance of the Heading component
      <h1>{this.props.count}</h1>
    )
  }
}
