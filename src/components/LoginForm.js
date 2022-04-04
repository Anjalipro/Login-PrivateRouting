import React, { useState } from "react";
//import Dashboard from "../pages/Dashboard";
//import { useNavigate } from "react-router-dom";
import "./../styles/loginForm.css";

const LoginForm = ({Login,error}) => {
  //const Navigate = useNavigate();
  const [details, setDetails] = useState({ username: "", password: "" });
  // const Logout = () => {
  //      console.log("Logout");
  //      setDetails({ username: "", password: "" });
  //    }
  
  const submitHandler = (e) => {
    e.preventDefault();

    setDetails({ username: "", password: "" });
    Login(details)
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <h2>Login</h2>
           {error != "" ? <div>{error}</div> : ""} 
          <div className="form-group">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={details.username}
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
            />
          </div>
          <input type = "submit" value="Login"/>
          <div style={{ color: "red" }}>
            WARNING: This is a management tool and data of a particularly <br />
            sensitive or classified nature should not be included{" "}
          </div>
        </div>
        <div>
          <h4>
            Please access the engagement complexity tool using your AD ONE
            username and password
          </h4>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
