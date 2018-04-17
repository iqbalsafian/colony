import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { changeAvatar } from '../redux/actions/index.js';

class Avatar extends Component {
  state = {
    mouseClick: false,
    mouseOver: false
  }

  onSelected = (avatar) => {
    this.setState({mouseClick: true, mouseOver: false});
    setTimeout(()=>{
      this.props.changeAvatar(avatar);
      this.setState({mouseClick: false});
      this.props.showOptions();
    }, 2000)
  }

  render() {
    const { avatar } = this.props;
    const { currentAvatar } = this.props.redux.state;
    const isActive = (avatar.id === currentAvatar.id);
    return(
      <div className="circle">
        <div
          className={classNames({
            loader: this.state.mouseClick
          })
        }>
        </div>
        <a tabIndex={avatar.id+1} onKeyPress={() => this.onSelected(avatar)} onClick={() => this.onSelected(avatar)}>
          <img
            src={avatar.imageSrc}
            alt={avatar.label}
            className={classNames({'avatar': !isActive}, {'avatar-active': isActive})}
          />
          <div className={classNames({overlay: !this.state.mouseClick})}></div>
        </a>
      </div>
    )
  }
}

Avatar.propTypes = {
  currentAvatar: PropTypes.object,
  avatar: PropTypes.object,
  showOptions: PropTypes.func
}

const mapStateToProps = state => {
  return { currentAvatar: state.currentAvatar};
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

const mapDispatchToProps = dispatch => {
  return {
    changeAvatar: avatar => {
      dispatch(changeAvatar(avatar))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Avatar);
