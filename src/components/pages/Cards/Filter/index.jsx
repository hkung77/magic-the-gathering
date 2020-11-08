import React, { useState } from "react";
import PropTypes from "prop-types";
import TextSearch from "./TextSearch";
import ManaSelect from "./ManaSelect";
import TypeSelect from "./TypeSelect";
import Button from "../../../shared/Button";

const propTypes = {
  setFilter: PropTypes.func,
};


const Filter = ({ setFilter }) => {
  const [ type, setType ] = useState('');
  const [ colors, setColors ] = useState('');
  const [ text, setText ] = useState('');


  return (
    <div className="w-full d-flex flex space-x-2 pb-2 px-2 bg-gray-500 justify-end pr-4">
      <TypeSelect type={type} setType={setType} />
      <ManaSelect colors={colors} setColor={setColors} />
      <TextSearch setText={setText} text={text}/>
      <div className="d-flex flex">
        <Button label="Search" onClick={() => {setFilter({ type, colors, text })}} />
      </div>
    </div>
  );
};

Filter.propTypes = propTypes;
export default Filter;
