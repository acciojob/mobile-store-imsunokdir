import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/user";
import Card from "./Card";

const Admin = () => {
  const dispatch = useDispatch();
  const mobileData = useSelector((state) => state.mobiles);

  useEffect(() => {
    dispatch(userAction.changeUserType("admin"));
  }, []);

  return (
    <div>
      <h1>Admin</h1>
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

export default Admin;
