import { CHANGE_AVATAR } from "../constants/action-types";

var initialState = {
  currentAvatar: {
    imageSrc: './avatar3.png',
    label: 'Avatar 3',
    id: 3
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AVATAR:
      state.currentAvatar = action.payload;
      return state;
    default:
      return state;
  }
};

export default rootReducer;
