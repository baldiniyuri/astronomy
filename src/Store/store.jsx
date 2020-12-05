import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import photoReducer from "./Modules/Astronomy/reducer";
import photoEarthReducer from "./Modules/Earth/reducer";
import photoMarsReducer from "./Modules/Mars/reducer";

const reducers = combineReducers({
  photo: photoReducer,
  photoEarth: photoEarthReducer,
  photoMars: photoMarsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
