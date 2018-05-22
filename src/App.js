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
  reduce = (type, value) => {
    let action = null;
    if (value) {
      action = { type, value };
    } else {
      action = { type };
    }
    this.props.dispatch(action);
  }

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
        <button onClick={() => this.reduce('BUTTON_ONE')}>Button One</button>
        <button onClick={() => this.reduce('MINUS')}>Minus</button><br />
        <button onClick={() => this.reduce('BUTTON_TWO')}>Button Two</button>
        <button onClick={() => this.reduce('REMOVE_OREO')}>Eat an Oreo</button><br />
        <input onChange={this.handleElementChange('first')} />
        <button onClick={() => this.reduce('SET_FIRST', this.state.midplace.first)}>Set first</button><br />
        <input onChange={this.handleElementChange('second')} />
        <button onClick={() => this.reduce('SET_SECOND', this.state.midplace.second)}>Set second</button><br />
        <button onClick={() => this.reduce('SET_BOTH', [this.state.midplace.first, this.state.midplace.second])}>SET BOTH!</button>
      </div>
    );
  }
}

export default connect()(App);
