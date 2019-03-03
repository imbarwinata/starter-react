import { combineReducers } from "redux";
import homeReducer from "containers/Home/reducer";
import loginReducer from "containers/Login/reducer";

export default combineReducers({
  homeReducer, loginReducer
});