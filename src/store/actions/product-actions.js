export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const addProduct = (product) => {
  return { type: ADD_PRODUCTS, payload: product };
};

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    dispatch(getProducts(data));
  };
};
