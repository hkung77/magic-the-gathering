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
  setDraftFilter: PropTypes.func,
  draftFilter: PropTypes.object,
};

const ManaSelect = React.memo(
  ({ setDraftFilter, draftFilter }) => {
    const handleSelect = (options) => {
      const manaFilters = options.map((option) => option.value).join();
      setDraftFilter({ ...draftFilter, colors: manaFilters });
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
    prevProps.draftFilter?.colors === nextProps.draftFilter?.colors
);

ManaSelect.propTypes = propTypes;
export default ManaSelect;
