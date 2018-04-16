import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { changeAvatar } from '../redux/actions/index.js';

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

class Avatar extends Component {
  state = {
    mouseOver: false,
    mouseClick: false
  }

  onSelected = (avatar) => {
    this.setState({mouseClick: true});
    setTimeout(()=>{
      this.props.changeAvatar(avatar);
      this.setState({mouseClick: false});
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
        <a>
          <img
            src={avatar.imageSrc}
            alt={avatar.label}
            onClick={() => this.onSelected(avatar)}
            onMouseOver={()=>this.setState({mouseOver:true})}
            className={classNames({'avatar': !isActive}, {'avatar-active': isActive})} />
        </a>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Avatar);
