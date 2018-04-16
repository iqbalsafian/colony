import React, { Component } from 'react';
import OtherAvatars from './components/OtherAvatars';
import CurrentAvatar from './components/CurrentAvatar';
import './App.css';

class App extends Component {
  state = {
    showOptionsVar: false
  }
  showOptions = () => this.setState({showOptionsVar: !this.state.showOptionsVar})
  render() {
    return (
      <div className="App">
         <CurrentAvatar showOptions={this.showOptions} />
        {
          this.state.showOptionsVar ? <OtherAvatars showOptions={this.showOptions} /> : null
        }
      </div>
    );
  }
}

export default App;
