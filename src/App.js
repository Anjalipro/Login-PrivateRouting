import React from "react";
import "./App.css";

import Routess from "./components/Routes";
const App = () => {
  

  
  return (
    <React.Fragment>
      <Routess/>
    </React.Fragment>
  );

  // const adminUser = {
  //   username: "Admin",
  //   password: "admin@123",
  // };

  // const [user, setUser] = useState({ username: "", password: "" });
  // const [error, setError] = useState("");

  // const Login = (details) => {
  //   //console.log(details);
  //   if (
  //     details.username == adminUser.username &&
  //     details.password == adminUser.password
  //   ) {
  //     //console.log("Logged in");
  //     setUser({
  //       username: details.username,
  //       password: details.password,
  //     });
  //   } else {
  //     //console.log("Details do not match");
  //     setError("Details do not match");
  //   }
  // };
  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({ username: "", password: "" });
  // };
  // return (
  //   <div className="App">
  //     <h1>Engagement Complexity Tool</h1>
  //     {user.username != "" ? (
  //       <div>
  //         <Dashboard Logout={Logout} user={user.username} />
  //       </div>
  //     ) : (
  //       <div>
  //         <LoginForm Login={Login} error={error} />{" "}
  //       </div>
  //     )}

  //   </div>
  // );
};

export default App;
