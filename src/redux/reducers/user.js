const SET_USER = 'SET_USER';

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function setUser(userObj) {
  const { id, username } = userObj
  return {
    type: SET_USER,
    payload: { id, username }
  }
}