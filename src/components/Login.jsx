import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(
        `https://intuitive-api.onrender.com/users?email=${data.identifier}&password=${data.password}`
      );

      if (response.data.length > 0) {
        onLogin(response.data[0]);
        navigate("/userdetails");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error("check the email and password");
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="identifier">Email or Mobile Number</label>
            <input
              type="text"
              id="identifier"
              {...register("identifier", { required: true })}
            />
            {errors.identifier && (
              <span className="error">This field is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div class="login-link">
            <p>
              Already not a valid user? <a href="/registration">Register</a>
            </p>
          </div>
          <button type="submit">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
