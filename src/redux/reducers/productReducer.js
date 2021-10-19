import { ActionTypes } from "../constants/actionTypes";

//a specific reducer. there can be multiple such reducers

const initialState = {
  products: [{
    id:12,
    title:"test",
    category:"testCategory"
  }]
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products:payload};
    default:
      return state;
  }
};

export const selectedProductReducer = (state={}, {type, payload}) =>{
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...state, ...payload}
    
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}
    
    default:
      return state;
  }
}
