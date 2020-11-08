import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  setText: PropTypes.func,
  text: PropTypes.string
};

const TextSearch = ({ text, setText }) => {

  return (
    <div className="w-48 py-1 bg-white border-solid border-1 rounded flex flex-row items-center">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-5/6 focus:outline-none" />
      <FontAwesomeIcon icon={faSearch} color="gray"/>
    </div>
  )
};

TextSearch.propTypes = propTypes;
export default TextSearch;