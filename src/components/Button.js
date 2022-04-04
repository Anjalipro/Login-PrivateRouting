import React from "react";
import "./../styles/button.css";

const Button = (props) => {
  
  return <button className="buttons" onClick={props.handleClick}>{props.children}</button>;
};

export default Button;
