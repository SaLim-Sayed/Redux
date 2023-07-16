import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProducts } from "../store/actions/product-actions";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });
  console.log(products);
  return (
    <div className="row">
      <h1 className="col  col-4">Products</h1>
      <div className="col col-6"></div>
      <button className="btn btn-primary mb-2 col col-2 p-0"
        onClick={() => dispatch(addProduct({ id: 2, title: "product2" }))}
      >
        Add Product
      </button>
      <ul className="grid-container">
        {products.map((product, idx) => {
          return (
            <h5 className="grid-item" key={idx}>
              <small> {product.title}</small>
            </h5>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
