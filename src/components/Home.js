import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import ProductDetails from "./ProductDetails";
import { userAction } from "../store/user";
import AdminProduct from "./AdminProduct";

const Home = () => {
  const mobileData = useSelector((state) => state.mobiles);
  // const userType = useSelector((state) => state.userType);
  //   console.log(userType);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAction.changeUserType("customer"));
  }, []);

  console.log(mobileData);
  return (
    <div>
      <h1>Home</h1>
      <div className="products-grid">
        {mobileData.map((item, i) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
