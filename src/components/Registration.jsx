import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/registration.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/users", data);
      console.log("Registration successful", response.data);
      navigate("/");
      toast.success("Registration successful"); // Display a success toast
    } catch (error) {
      console.error("Registration failed", error);
      toast.error("Registration failed"); // Display an error toast
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span className="error">Name is required</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className="error">Valid email is required</span>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">Password is required</span>
          )}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input {...register("mobileNumber", { required: true })} />
          {errors.mobileNumber && (
            <span className="error">Mobile Number is required</span>
          )}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" {...register("age", { required: true })} />
          {errors.age && <span className="error">Age is required</span>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea {...register("address", { required: true })} />
          {errors.address && <span className="error">Address is required</span>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select {...register("gender", { required: true })}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">Gender is required</span>}
        </div>

        <div className="form-group">
          <label>Occupation</label>
          <input {...register("occupation", { required: true })} />
          {errors.occupation && (
            <span className="error">Occupation is required</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
      <div class="login-link">
        <p>
          Already a user? <a href="/">Login</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
