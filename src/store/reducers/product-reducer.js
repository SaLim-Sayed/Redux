import { ADD_PRODUCTS, GET_PRODUCTS } from "../actions/product-actions";

export const productReducer=(state=[{id:1,title:"product1"}],action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
          console.log(action.payload);
          return [...action.payload];
        case ADD_PRODUCTS:
          return [...state, action.payload];
    
        default:
          return state;
      }
    };