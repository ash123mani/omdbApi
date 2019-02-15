import { combineReducers } from "redux";
import { getItemReducer } from "./getItemReducer";

export default combineReducers({
  itemsData: getItemReducer
});
