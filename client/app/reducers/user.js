import { without } from 'lodash';

import { setUserInfo, addToFavourites, removeFromFavourites } from '../actions';

const initialState = {
  token: '',
  username: '',
  favourites: [],
  isAdmin: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case setUserInfo:
      return {
        ...state,
        token: action.user.token,
        username: action.user.username,
        isAdmin: action.user.isAdmin
      };
    case addToFavourites: {
      const newFavourites = state.favourites;
      newFavourites.push(action.item);
      return {
        ...state,
        favourites: newFavourites
      };
    }
    case removeFromFavourites: 
      return {
        ...state,
        favourites: without(state.favourites, action.item)
      };
    default:
      return state;
  }
}
