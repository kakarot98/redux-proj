import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

//this file will combine all the reducers created. every reducer will get a key
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer
});

export default reducers;
