import React from "react";
import PropTypes from "prop-types";
import "./PageTitle.css";

export default function PageTitle(props) {
  const { className, ...otherProps } = props;

  return (
    <h1 className={`PageTitle ${className || ""}`} {...otherProps}>
      {props.children}
    </h1>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
};
