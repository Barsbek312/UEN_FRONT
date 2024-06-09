import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    control,
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (data, event) => {
    event.preventDefault();

    const res = await dispatch(login(data));
    if (res.payload.type === "user/getUser/fulfilled") {
      navigate("/");
    } else {
      setErrorMessage(res?.payload?.response?.data?.detail || "Login failed, please try again")
    }
  };

  return (
    <div className="white-bg">
      <div className="login">
        <h1>Log in</h1>
        <form className="login-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="username"
            required
            {...register("username")}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            {...register("password")}
          />
          <p style={{ color: errorMessage ? "red" : "transparent", margin: 0 }}>
            {errorMessage ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veniam."}
          </p>
          <button type="submit">Log in</button>
        </form>
        <p>
          Don't have an account yet? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
