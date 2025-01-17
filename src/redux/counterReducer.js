//step2 : create reducers, whihc carries out the particular action and update the state depending on the action.

const initialState = {
  count: 0,
};

//it takes state and action and return the updated state according to the action
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
