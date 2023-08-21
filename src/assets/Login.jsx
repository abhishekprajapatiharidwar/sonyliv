import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { MyContext } from "./mycontext";
import { useNavigate } from "react-router-dom";

export default function Login({ handleToggle }) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setlogin } = useContext(MyContext);
  const navigate = useNavigate();

  // Event handlers for input changes
  const handleUsernameChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = "https://academics.newtonschool.co/api/v1/user/login";
      const ott='ott';
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "62b02tyexb5i",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType:ott
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(JSON.stringify(data.token));
        localStorage.setItem("token", data.token);
        toast.success("Successfully Logged In");
        localStorage.setItem("username", data.data.name);
        localStorage.setItem("email", data.data.email);
        setlogin(true);
        navigate("/");
      } else {
        toast.error("Login Failed: Invalid Username or Password");
        console.log(error);
      }
    } catch (error) {
      toast.error("Internal server problem. Please try again later.");
    }
    setemail("");
    setPassword("");
  };

  return (
    <div className="SignupPage">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {/* <a href="" id="googleauth"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327"></img></a> */}
      <button onClick={handleSubmit}>Sign In</button>
      {/* Prompt to navigate to signup */}
      <p>
        {" "}
        Don't have an account? <span onClick={handleToggle}>Sign Up</span>
      </p>
    </div>
  );
}
