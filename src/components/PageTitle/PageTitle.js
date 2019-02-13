import React from "react";
import PropTypes from "prop-types";
import "./PageTitle.css";

export default function PageTitle(props) {
  const { className, ...otherProps } = props;

  return (
    <div className={`PageTitle ${className || ""}`}>
    <h1 className="title" {...otherProps}>
      {props.children}
    </h1>
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
};
