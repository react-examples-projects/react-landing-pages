export default function userReducer(state, action) {
  switch (action.type) {
    case "set":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
