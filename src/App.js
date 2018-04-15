import React, { Component } from 'react';
import { connect } from 'react-redux';
import OtherAvatars from './components/OtherAvatars';
import './App.css';

class App extends Component {
  state = {
    showOptions: false
  }
  hideOthers = () => this.setState({showOptions: false})
  render() {
    const { currentAvatar } = this.props
    return (
      <div className="App"
        //  onClick={() => this.state.showOptions ? this.setState({showOptions: false}) : null}
         >
        <div className="circle-border">
          <img src={currentAvatar.imageSrc} alt={currentAvatar.label} className="avatar"
          onClick={() => this.setState({showOptions: !this.state.showOptions})} />
        </div>
        {
          this.state.showOptions ?
          <OtherAvatars hideOthers={this.hideOthers} /> :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentAvatar: state.currentAvatar }
}

export default connect(mapStateToProps)(App);
