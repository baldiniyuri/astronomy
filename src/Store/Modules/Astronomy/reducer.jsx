const photoReducer = (state = [], action) => {
  switch (action.type) {
    case "@astronomyPhoto/GET":
      const { photo } = action;
      return [photo];

    default:
      return state;
  }
};

export default photoReducer;
