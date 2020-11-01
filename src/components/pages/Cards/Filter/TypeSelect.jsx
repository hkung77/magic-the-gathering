import React from "react";
import PropTypes from "prop-types";
import Select, { components } from "react-select";

const TYPES = [
  { value: "Instant", label: "Instant" },
  { value: "Sorcery", label: "Sorcery" },
  { value: "Artifact", label: "Artifact" },
  { value: "Land", label: "Land" },
  { value: "Creature", label: "Creature" },
  { value: "Enchantment", label: "Enchantment" },
  { value: "Planeswalker", label: "Planeswalker" },
];

const propTypes = {
  draftFilter: PropTypes.object,
  setDraftFilter: PropTypes.func,
};

const TypeSelect = React.memo(
  ({ setDraftFilter, draftFilter }) => {
    const handleSelect = (option) => {
      setDraftFilter({ ...draftFilter, type: option.value });
    };

    return (
      <div className="w-56">
        <Select
          onChange={handleSelect}
          options={TYPES}
          placeholder="Type"
          components={{
            Input: (props) => <components.Input className="h-8" {...props} />,
          }}
        />
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.draftFilter?.type === nextProps.draftFilter?.type
);

TypeSelect.propTypes = propTypes;
export default TypeSelect;
