import React from "react";
import "./Description.css";

export default function Description(props) {
  const { className, ...otherProps } = props;

  return (
    <textarea className={`Description ${className || ""}`} {...otherProps}/>
  );
}