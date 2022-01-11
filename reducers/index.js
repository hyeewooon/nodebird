import { HYDRATE } from 'next-redux-wrapper';

// 중앙 저장소
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPosts: []
  }
};

// action creator
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  };
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT'
  };
};

// reducer
// (previousState, action) => newState
// 이전 상태와 액션을 받아서 다음 상태를 돌려주는 함수.
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data
        }
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
