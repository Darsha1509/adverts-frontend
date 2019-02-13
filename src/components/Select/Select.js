import React from "react";
import "./Select.css";
import PropTypes from 'prop-types';

export default function SelectCategory(props) {
  const { className, ...otherProps } = props;

  return (
    <select className={`Select ${className || ""}`} {...otherProps}>
      {props.children}
    </select>
  );
}

SelectCategory.propTypes = {
  children: PropTypes.node.isRequired
};