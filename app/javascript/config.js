import { useDispatch } from "react-redux";

// Actions
const LOAD = "my-app/greetings/LOAD";


// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return { message: action.payload };
    default:
      return state;
  }
}

// Action Creators
export function loadGreeting(payload) {
  return { type: LOAD, payload: payload };
}

export function getMessage() {
  return async (dispatch, getState) => {
    const response = await fetch("/message.json");
    const json = await response.json();
    dispatch(loadGreeting(json.text));
  };
}
