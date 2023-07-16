import { applyMiddleware, combineReducers, createStore } from "redux";
import bankReducer from "./reducers/bank-reducer";
import { productReducer } from "./reducers/product-reducer";
import thunk from "redux-thunk";

const rootStore = combineReducers({
    bank:bankReducer,
    products:productReducer
})
export const store = createStore(rootStore,applyMiddleware(thunk));