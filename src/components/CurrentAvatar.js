import React, { Component } from 'react';
import { connect } from 'react-redux';

class currentAvatar extends Component {
  render() {
    const { currentAvatar } = this.props.redux.state;
    return(
      <div className="circle-border">
        <img src={currentAvatar.imageSrc} alt={currentAvatar.label} className="avatar"
        onClick={this.props.showOthers} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentAvatar: state.currentAvatar }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...dispatchProps,
    redux: {
      state: stateProps
    }
  }
}

export default connect(mapStateToProps, null, mergeProps)(currentAvatar);
