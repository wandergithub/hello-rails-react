// Actions
const LOAD   = 'my-app/greetings/LOAD';
// const CREATE = 'my-app/widgets/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {message: "a message"}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      return state
    default: return state;
  }
}

// Action Creators
export function loadGreeting() {
  return { type: LOAD };
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
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }