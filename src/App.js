import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      midplace: {
        first: '',
        second: '',
      }
    }
  }
  buttonOneClicked = () => {
    const action = { type: 'BUTTON_ONE', someProp: 'Hello!' };
    this.props.dispatch(action);
  };

  handleElementChange = propertyName => event => {
    this.setState({
      midplace: {
        ...this.state.midplace,
        [propertyName]: event.target.value,
      }
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.buttonOneClicked}>Button One</button>
        <button onClick={() => this.props.dispatch({ type: 'MINUS' })}>Minus</button><br />
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO' })}>Button Two</button>
        <button onClick={() => this.props.dispatch({ type: 'REMOVE_OREO' })}>Eat an Oreo</button><br />
        <input onChange={this.handleElementChange('first')} />
        <button onClick={() => this.props.dispatch({ type: 'SET_FIRST', value: this.state.midplace.first })}>Set first</button><br />
        <input onChange={this.handleElementChange('second')} />
        <button onClick={() => this.props.dispatch({ type: 'SET_SECOND', value: this.state.midplace.second })}>Set second</button><br />
        <button onClick={() => this.props.dispatch({ type: 'SET_BOTH', values: [this.state.midplace.first, this.state.midplace.second]})}>SET BOTH!</button>
      </div>
    );
  }
}

export default connect()(App);
