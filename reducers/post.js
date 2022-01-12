export const initialState = {
  // 더미 데이터
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        username: 'hyewon'
      },
      content: '#첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png'
        },
        {
          src: 'https://avatars.githubusercontent.com/u/6045824?v=4'
        },
        {
          src: 'https://www.html5rocks.com/ko/tutorials/responsive/picture-element/cat-stretching.png'
        }
      ],
      Comments: [
        {
          User: {
            username: 'tom'
          },
          content: '좋은 글 감사합니다!'
        },
        {
          User: {
            username: 'happy'
          },
          content: '안녕하세요~~'
        }
      ]
    }
  ],
  imagePaths: [],
  postAdded: false
};

// action
// 액션은 객체
// 동적인 액션이 필요할 경우 action creator 함수 생성.
const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST
};

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    username: 'hyewon'
  },
  Images: [],
  Comments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      };
    default:
      return state;
  }
};

export default reducer;
