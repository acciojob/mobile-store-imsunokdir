import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userAction } from "../store/user";

const Navbar = () => {
  const userType = useSelector((state) => state.userType);
  const dispatch = useDispatch();
  const handleClick = () => {};
  return (
    <div className="nav-main">
      <div className="nav-bar">
        <div className="navItems">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
          {/* <button onClick={handleClick}>change User</button>
          <p>{userType}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
