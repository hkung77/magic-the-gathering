import React, { useState } from "react";
import PropTypes from "prop-types";
import TextSearch from "./TextSearch";
import ManaSelect from "./ManaSelect";
import TypeSelect from "./TypeSelect";
import Button from "../../../shared/Button";

const propTypes = {
  setFilter: PropTypes.func,
};


const Filter = ({ handleSearch }) => {
  const [ draftFilter, setDraftFilter ] = useState({});

  return (
    <div className="w-full d-flex flex space-x-2 pb-2 px-2 bg-gray-500 justify-end pr-4">
      <TypeSelect draftFilter={draftFilter} setDraftFilter={setDraftFilter} />
      <ManaSelect draftFilter={draftFilter} setDraftFilter={setDraftFilter} />
      <TextSearch setDraftFilter={setDraftFilter} />
      <div className="d-flex flex">
        <Button label="Search" onClick={() => {}} />
      </div>
    </div>
  );
};

Filter.propTypes = propTypes;
export default Filter;
