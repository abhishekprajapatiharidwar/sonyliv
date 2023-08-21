import { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup({ handleToggle }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validation checks
    if (
      username === null ||
      username === "" ||
      email === null ||
      email === "" ||
      password === null ||
      password === ""
    ) {
      toast.error("Fields cannot be empty");
      console.log("cantbe empty");
    }
    if (!email.includes("@" && ".")) {
      toast.error("Invalid email address");
      console.log("email invailid");
    }

    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      )
    ) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special symbol"
      );
    } else {
      try {
        // API call to sign up user
        const apiUrl = "https://academics.newtonschool.co/api/v1/user/signup";
        const ott='ott';
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectId: "62b02tyexb5i",
          },
          body: JSON.stringify({
            name: username,
            email: email,
            password: password,
            appType:ott,
          }),
        });

        if (response.ok) {
          toast.success("Signup successful! Welcome to our community.");
        } else {
          toast.error("Signup Failed");
        }
      } catch (error) {
        toast.error("Internal server problem. Please try again later.");
      }
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="SignupPage">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* <a href="" id="googleauth"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327"></img></a> */}
        <button onClick={handleSubmit}>Sign Up</button>
        <p>
          {" "}
          Already have an account? <span onClick={handleToggle}>Login</span>
        </p>
      </div>
    </>
  );
}
