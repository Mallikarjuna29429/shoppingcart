import { combineReducers } from "redux";
import { cartReducer } from "./cartSliceReducer";
import { userReducer } from "./firebaseReducer";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export default rootReducer;
