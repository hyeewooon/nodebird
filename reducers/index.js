import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

// reducer
// (previousState, action) => newState
// 이전 상태와 액션을 받아서 다음 상태를 돌려주는 함수.
const rootReducer = combineReducers({
  //ssr을 위한 index reducer 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  },
  user,
  post
});

export default rootReducer;
