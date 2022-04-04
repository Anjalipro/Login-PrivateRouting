import React, { useState } from "react";

//import LoginForm from "./LoginForm";
import Dashboard from "./../pages/Dashboard";
import Home from "../pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Menubar from "../pages/Menubar";
import About from "../pages/About";
import Products from "../pages/Products";

const Routess = () => {
  const [isAuth, setisAuth] = useState(false);
  return (
    <>
      {/* <h1>Engagement Complexity Tool</h1> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path='/dashboard' element={<PrivateRoute component={Dashboard} isAuth={isAuth}/>}/> */}
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            isAuth={isAuth}
          />
          <PrivateRoute exact path="/menubar" component={Menubar} isAuth={isAuth} />
          <PrivateRoute exact path="/about" component={About} isAuth={isAuth}/>
          <PrivateRoute exact path="/products" component={Products} isAuth={isAuth} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routess;
