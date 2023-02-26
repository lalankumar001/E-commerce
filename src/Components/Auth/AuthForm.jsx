import { useState, useRef, useContext } from "react";

import classes from "./AuthForm.module.css";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import AuthContext from "../../globalStore/AuthContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const inputHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const API_KEY = "AIzaSyAH66WpDQeACP7ep50zdf8CjZtiI1odyXE";

    const signinUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    const signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    const mainUrl = isLogin ? signinUrl : signupUrl;

    const res = await fetch(mainUrl, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      authCtx.onLogin(data);
    } else {
      alert(data.error.message);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            onChange={inputHandler}
            required
            placeholder="@"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            onChange={inputHandler}
            id="password"
            placeholder="******"
            required
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
      <h1>
        <FaGoogle /> <FaFacebook /> <FaGithub />
      </h1>
    </section>
  );
};

export default AuthForm;
