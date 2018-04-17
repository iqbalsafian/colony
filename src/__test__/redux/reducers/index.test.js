// import { CHANGE_AVATAR } from "../../../redux/constants/action-types";
import rootReducer from '../../../redux/reducers/index';
import CHANGE_AVATAR from '../../../redux/constants/action-types';

const initialState = {
    currentAvatar: {
      imageSrc: './avatar1.png',
      label: 'Avatar 1',
      id: 1
    },
    avatars: [
      {
        imageSrc: './avatar1.png',
        label: 'Avatar 1',
        id: 1
      },
      {
        imageSrc: './avatar2.png',
        label: 'Avatar 2',
        id: 2
      },
      {
        imageSrc: './avatar3.png',
        label: 'Avatar 3',
        id: 3
      },
      {
        imageSrc: './avatar4.png',
        label: 'Avatar 4',
        id: 4
      },
      {
        imageSrc: './avatar5.png',
        label: 'Avatar 5',
        id: 5
      },
      {
        imageSrc: './avatar6.png',
        label: 'Avatar 6',
        id: 6
      }
    ]
};

describe('Avatar List Reducer', () => {
  it('has a default state', () => {
    const avatarList = initialState
    expect(avatarList).toEqual(initialState)
  })

  it('should handle CHANGE_AVATAR', () => {
    const { currentAvatar } = initialState.currentAvatar;
    expect(rootReducer([], {
      action: CHANGE_AVATAR,
      payload: currentAvatar
    })).not.toEqual(currentAvatar)
  })
})
