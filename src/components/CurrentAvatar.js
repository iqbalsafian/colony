import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CurrentAvatar extends Component {
  render() {
    const { currentAvatar } = this.props.redux.state;
    return(
      <div style={{marginRight: 'auto', marginLeft:'auto'}}>
        <a tabIndex="1" onClick={this.props.showOptions} onKeyPress={this.props.showOptions} >
          <img src={currentAvatar.imageSrc} alt={currentAvatar.label} className="avatar-initial" />
        </a>
      </div>
    )
  }
}

CurrentAvatar.propTypes = {
  currentAvatar: PropTypes.object,
  showOptions: PropTypes.func
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

export default connect(mapStateToProps, null, mergeProps)(CurrentAvatar);
