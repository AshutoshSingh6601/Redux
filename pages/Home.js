import React from "react";
import Product from "../components/Product";

import "../App.css";
import { useSelector } from "react-redux";

const Home = () => {
  let ProductList = useSelector((state) => state.product);

  return (
    <div>
      <div className="products-container">
        {ProductList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            productId={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
