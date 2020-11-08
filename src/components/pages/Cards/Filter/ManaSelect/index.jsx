import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import ManaOption from "./ManaOption";
import ManaValueContainer from "./ManaValueContainer";
import MultiValueContainer from "./MultiValueContainer";

const mana = [
  { value: "white" },
  { value: "black" },
  { value: "red" },
  { value: "blue" },
  { value: "green" },
];

const propTypes = {
  setColors: PropTypes.func,
};

const ManaSelect = React.memo(
  ({ setColor }) => {
    const handleSelect = (options) => {
      const manaFilters = options.map((option) => option.value).join();
      setColor(manaFilters);
    };

    return (
      <div className="w-56">
        <Select
          onChange={handleSelect}
          options={mana}
          isMulti={true}
          closeOnMenuSelect={false}
          placeholder="Mana"
          components={{
            Option: ManaOption,
            MultiValue: MultiValueContainer,
            ValueContainer: ManaValueContainer,
          }}
        />
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.colors === nextProps.colors 
);

ManaSelect.propTypes = propTypes;
export default ManaSelect;
