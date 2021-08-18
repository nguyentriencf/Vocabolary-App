import {  combineReducers } from "redux";
import arrWordsReducer from "./reducer/arrWordsReducer";
import filterStatusReducer from "./reducer/filterStatusReducer";
import isAddingReducer from "./reducer/isAddingReducer";
const reducer = combineReducers({
  arrWords: arrWordsReducer,
  filterStatus: filterStatusReducer,
  isAdding: isAddingReducer,
});

export default reducer;
