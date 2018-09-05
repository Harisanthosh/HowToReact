function userDetailsReducer(
  prevState = {
    fetching: false,
    userDetails: {},
    error: ""
  },
  action
) {
  let newState;

  switch (action.type) {
    case "FETCHING":
      //tbd
      newState = {
        ...prevState,
        fetching: true,
        userDetails: {},
        error: ""
      };
      break;
    case "FETCH_SUCCESS":
      //rbd
      newState = {
        ...prevState,
        fetching: false,
        userDetails: action.userDetails,
        error: ""
      };
      break;
    case "FETCH_ERROR":
      //tbd
      newState = {
        ...prevState,
        fetching: false,
        userDetails: {},
        error: action.error
      };
      break;
    default:
      newState = { ...prevState };
      break;
  }

  return newState;
}

export default userDetailsReducer;
