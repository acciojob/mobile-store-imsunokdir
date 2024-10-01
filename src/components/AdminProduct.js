import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { mobileAction } from "../store/mobile";

const AdminProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mobileData = useSelector((state) => state.mobiles);
  const mobile = mobileData.find((item) => item.id == Number(id));

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    if (mobile) {
      setFormData({
        title: mobile.title,
        description: mobile.description,
        image: mobile.image,
        price: mobile.price,
      });
    }
  }, [mobile]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(mobileAction.updateMobile({ id, updatedProduct: formData }));
    return;
  };
  const handleDelete = () => {
    dispatch(mobileAction.delete({ id: id }));
    navigate("/admin");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          placeholder="Product name"
          id="title"
          onChange={handleChange}
          value={formData.title}
        />
        <br />
        <label htmlFor="desc">Description</label>
        <br />
        <textarea
          rows="5"
          cols="80"
          id="desc"
          onChange={handleChange}
          value={formData.description}
        />
        <br />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          placeholder="Image url"
          id="image"
          onChange={handleChange}
          value={formData.image}
        />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          placeholder="price"
          id="price"
          onChange={handleChange}
          value={formData.price}
        />

        <div className="admin-buttons">
          <button onClick={handleDelete}>Delete</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AdminProduct;
