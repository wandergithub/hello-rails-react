import { useDispatch } from "react-redux";

// Actions
const LOAD = "my-app/greetings/LOAD";
// const CREATE = 'my-app/widgets/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
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

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getMessage() {
  return async (dispatch, getState) => {
    const response = await fetch("/message.json");
    const json = await response.json();
    dispatch(loadGreeting(json.text));
  };
}
