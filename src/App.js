import React, { Component } from 'react';
import OtherAvatars from './components/OtherAvatars';
import CurrentAvatar from './components/CurrentAvatar';
import './App.css';

class App extends Component {
  state = {
    showOptions: false
  }
  hideOthers = () => this.setState({showOptions: false})
  showOthers = () => this.setState({showOptions:true})
  render() {
    return (
      <div className="App"
        //  onClick={() => this.state.showOptions ? this.setState({showOptions: false}) : null}
         >
           <CurrentAvatar showOthers={this.showOthers} />
        {
          this.state.showOptions ?
          <OtherAvatars hideOthers={this.hideOthers} /> :
          null
        }
      </div>
    );
  }
}

export default App;
