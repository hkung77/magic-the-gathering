import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

const Input = ({ label, type, name }) => {
  // Hook into formik field utilities
  const [field, meta] = useField(name);
  
  // Show error when touched and fails field validation
  const errorStyle =
    meta.touched && meta.error ? "border-solid border-2 border-red-600" : "";

  return (
    <div
      className={`flex justify-between items-center bg-white px-1 py-1 rounded w-auto shadow ${errorStyle}`}
    >
      <input className="h-10 w-64" type={type} placeholder={label} {...field} />
    </div>
  );
};

Input.propTypes = propTypes;
export default Input;
