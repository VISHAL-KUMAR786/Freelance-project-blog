import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add the Facebook icon to the library
library.add(fab, faFacebookF);

//* Styling
import "../assets/styles/login.css";

const Login = ({ isActive }) => {
  const [isSignUpActive, setIsSignUpActive] = useState(isActive);

  useEffect(() => {
    setIsSignUpActive(!isActive);
    document.title = 'Login/SignUp'
  }, [isActive]);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f6f5f7",
      }}
    >
      <div
        className={`container_login ${
          isSignUpActive ? "right-panel-active" : ""
        }`}
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h2>Create Account</h2>
            <div className="social-container">
              <Link to={"/"} className="social">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to={"/"} className="social">
                <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
              </Link>
              <Link to={"/"} className="social">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign In</h1>
            <div className="social-container">
              <Link to={"/"} className="social">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to={"/"} className="social">
                <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
              </Link>
              <Link to={"/"} className="social">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </Link>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="cpassword" placeholder="Re-enter Password" />
            <Link to={"/help"}>Help?</Link>
            <button>Login</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello friend!</h1>
              <p>Login to your account</p>
              <button className="ghost" onClick={handleSignInClick}>
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>
                Don't have an account? <br /> Join us now
              </p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
