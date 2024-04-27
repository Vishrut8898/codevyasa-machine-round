import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const IconComponent = ({ className, icon, title, handleClick }) => {
  return (
    <div
      className={`icon-styles ${className}`}
      onClick={handleClick}
      title={title}
    >
      {icon}
    </div>
  );
};

IconComponent.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default IconComponent;
