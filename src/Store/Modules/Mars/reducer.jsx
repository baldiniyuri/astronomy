const photoMarsReducer = (state = [], action) => {
  switch (action.type) {
    case "@marsPhoto/GET":
      const { photoMars } = action;
      return [...photoMars];

    default:
      return state;
  }
};

export default photoMarsReducer;
