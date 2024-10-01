import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const mobileData = useSelector((state) => state.mobiles);
  const product = mobileData.find((item) => item.id === Number(id));
  console.log(product);
  return (
    <div className="product">
      <div className="product-image"></div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>

        <Link className="link" to="/">
          <button>Other products</button>
        </Link>
      </div>
    </div>
    // <div className="product">
    //   <div className="product-image"></div>
    //   <div className="product-details">
    //     <h3>name</h3>
    //     <p>price</p>
    //     <p>Desc: </p>
    //     <button>Other products</button>
    //   </div>
    // </div>
  );
};

export default ProductDetails;
