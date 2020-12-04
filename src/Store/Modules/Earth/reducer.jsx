const photoEarthReducer = (state = [], action) => {
  switch (action.type) {
    case "@earthPhoto/GET":
      const { photoEarth } = action;
      return [photoEarth];

    default:
      return state;
  }
};

export default photoEarthReducer;
