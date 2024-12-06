const defaultValue = { count: 3, user: "Test" };

const countReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default countReducer;
