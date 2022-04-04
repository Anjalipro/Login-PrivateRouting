import React from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import "./../styles/dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = ({Logout , user}) => {
  const handleClick =(e) => {
    console.log("Clicked");
  }
  return (
    <div className="row">
      <div className="column left">
        <h3>Home Page</h3>
        <h2 className="topRight">
          Welcome, <span>{user}</span>
        </h2>
        <button className="topRightdown" onClick={Logout} >Logout</button>
        {/* <button onClick={CallMe}>Hello</button> */}
        <br />
        <Button>Create Complexity Assesment</Button>
        <br />
        <Button>Update Complexity Assesment</Button>
        <br />
        <span>
          You can use the trial feature to see how
          <br />
          complexity Assesments are entered and
          <br /> completed and look at the ouputs that are produced
        </span>
        <Button>Try the complexity Assesment tool</Button>
        <br />
        <Button>Extract Reports</Button>
        <Button handleClick={handleClick}>Hello</Button>
        <Link to="/menubar" >go to menubar</Link>
      </div>
      <div className="vl"></div>
      <div className="column right">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
