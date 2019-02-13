import React from "react";
import "./Button.css";
import PropTypes from 'prop-types';

export default function Button(props) {
  const { className, ...otherProps } = props;

  return (
    <button className={`Button ${className || ""}`} {...otherProps}>
      <span className="Button-textStyle">
      {props.children}
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};