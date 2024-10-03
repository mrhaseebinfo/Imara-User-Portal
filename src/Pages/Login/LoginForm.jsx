/* eslint-disable react/prop-types */
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordInput = ({ showPassword, togglePassword }) => (
  <div className="mb-4 position-relative col-md-12">
    <input
      type={showPassword ? "text" : "password"}
      className="form-control"
      placeholder="Password"
    />
    <button
      type="button"
      className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent"
      onClick={togglePassword}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
);

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Add validation logic here if needed

    // Navigate to the dashboard
    navigate("/layout/dashboard");
  };

  return (
    <div className="rounded d-flex justify-content-center align-items-center login-form">
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Use onSubmit for the form */}
        <div className="mb-5 ms-4 mt-4">
          <h6 className="fs-3 fw-bold logo-h">Login to continue</h6>
        </div>
        <div className="form-group mb-4">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group mb-3">
          <PasswordInput
            showPassword={showPassword}
            togglePassword={togglePassword}
          />
        </div>
        <div className="form-check d-flex justify-content-between mb-5 gap-5 text-white">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <a><span>Forgot Password?</span></a>
        </div>
        <button type="submit" className="btn btn-login w-100 mb-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
