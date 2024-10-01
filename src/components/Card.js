import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ title, price, image, id }) => {
  const userType = useSelector((state) => state.userType);
  return (
    <div className="card">
      <div className="img-div">{image}</div>
      <div className="mobile-details">
        <p>{title}</p>
        <div className="price-buy">
          <p>$ {price}</p>

          {userType == "admin" ? (
            <Link to={`/admin/products/${id}`} className="link">
              <button className=".btn">Edit</button>
            </Link>
          ) : (
            <Link to={`/products/${id}`} className="link">
              <button className=".btn">Buy</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
