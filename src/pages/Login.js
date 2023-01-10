import React, { useState, createRef } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/actions/firebase-actions";
import { connect } from "react-redux";
const Login = ({ login, history }) => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (event) => {
    event.preventDefault();
    login(email, password)
      .then(() => {
        toast.success("Login successful");
        history.push("/");
      })
      .catch((error) => {
        toast.error("Login failed");
        console.error(error);
      });
  };

  // const register = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       if (auth) {
  //         history.push("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };
  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedIn(false);
  };
  return (
    <div className="login">
      <>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the eShop Website Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button className="login__registerButton">
            Create your eShop Account
          </button>
        </div>
      </>
    </div>
  );
};

export default connect(null, { login })(Login);
