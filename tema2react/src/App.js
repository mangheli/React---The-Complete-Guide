import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component{
  state = {
    name: 'Monica'
  }

  nameChangedHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.name.split('');
    chars.splice(charIndex, 1);
    const upd = chars.join('');
    this.setState({name: upd});
  }

  render() {
    const charList = this.state.name.split('').map((ch, index) => {
      return <Char character = {ch} 
                   key = {index}
                   clicked = {() => this.deleteCharHandler(index)}/>
    })



    return (
      <div className="App">
        <UserInput
          changed = {this.nameChangedHandler}
          currentName = {this.state.name}/>
        <UserOutput
          name = {this.state.name.length}/>
        <Validation 
          inputLength = {this.state.name.length}/>
        {charList}
      </div>        
    );
  }
}
export default App;
