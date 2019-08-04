import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: {}
    }
    this.getFlower();
  }
  getFlower() {
    fetch('/flower')
      .then(response => response.json())
      .then(data => {
        this.setState({
          flower: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.flower.name}</h1>
        <p>{this.state.flower.colour}</p>
      </div>
    );
  }
}
export default App;