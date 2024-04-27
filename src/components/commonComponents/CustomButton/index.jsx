import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const CustomButton = (props) => {
  const {
    variant,
    title,
    label,
    onClick,
    hasIcon,
    leftIcon,
    rightIcon,
    className,
  } = props;

  return (
    <button
      className={`custom-button 
			${variant} 
			${hasIcon ? "iconed" : ""} 
			${className}`}
      onClick={onClick}
      title={title || label}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  hasIcon: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
};

export default CustomButton;
