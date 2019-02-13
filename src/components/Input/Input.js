import React from "react";
import "./Input.css";

export default function Input(props) {
  const { className, ...otherProps } = props;

  return (
      <input className={`Input ${className || ""}`} {...otherProps}/>
  );
}