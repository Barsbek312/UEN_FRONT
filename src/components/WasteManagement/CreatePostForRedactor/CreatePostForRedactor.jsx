import React from "react";
import WasteManagementIMG from "./../../../assets/waste_management/WasteManagement.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostList } from "../../../redux/redactor";

const CreatePostForRedactor = ({ setIsCreatePostMode }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.user);
  const handleFormSubmit = async (data, event) => {
    event && event.preventDefault();
    if (isAuth && user && user.redactor) {
      data["redactor"] = user.redactor.url;
      data["number_of_likes"] = 0;
      const d = new Date();
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      data['date'] = `${year}-${month}-${day}`;
      const res = await dispatch(createPost(data));
      console.log(res);
      if (res.type === "redactor/create-post/fulfilled") {
        setIsCreatePostMode(false);
        dispatch(getPostList());
      }
    }
  };
  return (
    <div className="create-post">
      <div className="post-input">
        <form className="post-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            required
            {...register("text")}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForRedactor;
