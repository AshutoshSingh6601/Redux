let reduxState = {
  post: 0,
  message: "THis is a new post",
  user: "Ashutosh",
};

function reducer(state, action) {
  if (action.type == "post/incre") {
    return { ...state, post: state.post + 1 };
  } else if (action.type == "post/decrement") {
    return { ...state, post: state.post - 1 };
  } else if (action.type == "post/incrementBy") {
    return { ...state, post: state.post + action.payload };
  }
  return state;

  // switch (action.type) {
  //   case 'post/increment':
  //       return { ...state, post: state.post + 1 };
  //   case 'post/decrement':
  //       return { ...state, post: state.post - 1 };
  //   case 'post/incrementBy':
  //       return { ...state, post: state.post + action.payload };
  //   case 'post/decrementBy':
  //       return { ...state, post: state.post - action.payload };

  //   default:
  //       return state;
  // }

}

reduxState = reducer(reduxState, { type: "post/incre" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/incre" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 5 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/decrement" });
console.log(reduxState);
