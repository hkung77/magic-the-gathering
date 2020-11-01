import React from "react";
import PropTypes from "prop-types";
import TextSearch from "./TextSearch";
import ManaSelect from './ManaSelect';

const propTypes = {
  handleSearch: PropTypes.func,
};

const Filter = ({ handleSearch }) => {
  return (
    <div className="w-full d-flex flex space-x-2 pt-24 pb-2 px-2 bg-gray-500">
      <ManaSelect />
      <TextSearch handleSearch={handleSearch} />
    </div>
  );
};

Filter.propTypes = propTypes;
export default Filter;
