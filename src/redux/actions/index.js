import { CHANGE_AVATAR } from "../constants/action-types";

export const changeAvatar = avatar => ({
  type: CHANGE_AVATAR,
  payload: avatar
});
