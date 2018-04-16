import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import onClickOutside from 'react-onclickoutside';

class OtherAvatars extends Component {
  handleClickOutside() {
    this.props.showOptions();
  }
  render() {
    const { avatars } = this.props.redux.state;
    return(
      <div style={{width:'280px', marginLeft:'auto', marginRight:'auto'}}>
        <div className="arrow_box">
          <div className="title">Choose your avatar</div>
          <ul>
            {
              avatars.map(avatar => <li key={avatar.id}>
                <Avatar avatar={avatar} showOptions={this.props.showOptions} />
              </li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    redux: {
      state: stateProps
    }
  }
}

const mapStateToProps = state => {
  return { avatars: state.avatars };
}

export default connect(mapStateToProps, null, mergeProps)(onClickOutside(OtherAvatars));
