import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'John'
  }

  onChangeInputHandler(event) {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput chanded={this.onChangeInputHandler.bind(this)} username={this.state.username} />
        <UserOutput paragraph="1" username={this.state.username} />
        <UserOutput paragraph="2" username={this.state.username} />
        <UserOutput paragraph="3" username={this.state.username} />
      </div>
    );
  }
}

export default App;
