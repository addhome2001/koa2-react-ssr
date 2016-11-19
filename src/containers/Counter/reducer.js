const initialState = {
  counter: 0
}
const COUNTER = "COUNTER";

export default function (state = initialState, action) {
  switch (action.type) {
    case COUNTER:
      return action.count
    default:
      return state;
  }
};
