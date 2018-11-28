import React, { Component } from 'react';
import './App.css';

class App extends Component {
  _colorChanged({ target: { name, value }}) {
    this.color = this.color || {};
    this.color[name] = value;
  }


  _changeGradient() {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('style', `background: linear-gradient(90deg, ${this.color.left}, ${this.color.right});`);
  }
  render() {
    return (
      <div className="App">
        <input name="left" placeholder="Цвет слева" onChange={this._colorChanged.bind(this)}></input><br></br>
        <input name="right" placeholder="Цвет справа" onChange={this._colorChanged.bind(this)}></input><br></br>
        <button onClick={this._changeGradient.bind(this)}>Go</button>
      </div>
    );
  }
}

export default App;
