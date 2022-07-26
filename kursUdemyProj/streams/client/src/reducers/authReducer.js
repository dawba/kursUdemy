const INITIAL_STATE = {
  signedInStatus: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, signedInStatus: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, signedInStatus: false, userId: null };
    default:
      return state;
  }
};
