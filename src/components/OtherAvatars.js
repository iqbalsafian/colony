import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';

class OtherAvatars extends Component {
  state = {
    showOptions: false
  }
  hideOthers = () => {
    this.props.hideOthers()
  }
  render() {
    const { avatars } = this.props;
    return(
      <div>
        <div className="arrow_box">
          <div className="title">Choose your avatar</div>
          <ul>
            {
              avatars.map(avatar => <li key={avatar.id}>
                <Avatar avatar={avatar} hideOthers={this.hideOthers} />
              </li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { avatars: state.avatars };
}

export default connect(mapStateToProps)(OtherAvatars);
