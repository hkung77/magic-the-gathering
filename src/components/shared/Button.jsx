import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string,
};

const Button = ({ onClick, label, bgColor, disabled }) => {
  // Set background color
  const backgroundColor = () => {
    // When disabled, background color is always gray
    if (disabled) {
      return "bg-gray-600";
      // Custom background color
    } else if (bgColor) {
      return bgColor;
      // Default
    } else {
      return "bg-green-600";
    }
  };

  return (
    <button
      className={`px-10 py-2 rounded font-sans font-bold text-white shadow ${backgroundColor()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = propTypes;
export default Button;
