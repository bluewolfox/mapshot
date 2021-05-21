import { combineReducers } from "redux";
import { mapSlice } from "./map";
import userSlice from "./user";

export default combineReducers({
  map: mapSlice.reducer,
  user: userSlice.reducer,
});
