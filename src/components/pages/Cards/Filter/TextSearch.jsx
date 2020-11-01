import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  handleSearch: PropTypes.func,
};

const TextSearch = ({ handleSearch }) => {
  const [text , setText] = useState('');

  const handleSearchPress = () => {
    handleSearch();
  }

  const handleKeyDown = (e) => {
    if(e.key === 'enter') {
      handleSearch();
    }
  }

  return (
    <div className="w-48 py-1 bg-white border-solid border-1 rounded flex flex-row items-center">
      <input type="text" value={text} onKeyDown={handleKeyDown} onChange={(e) => setText(e.target.value)} className="w-5/6 focus:outline-none" />
      <button onClick={handleSearchPress} className="w-1/6 focus:outline-none">
        <FontAwesomeIcon icon={faSearch} color="gray"/>
      </button>
    </div>
  )
};

TextSearch.propTypes = propTypes;
export default TextSearch;