import React from "react";
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

const ManaSelect = () => {
  return (
    <div className="w-56">
      <Select
        options={mana}
        isMulti={true}
        closeOnMenuSelect={false}
        components={{
          Option: ManaOption,
          MultiValue: MultiValueContainer,
          ValueContainer: ManaValueContainer,
        }}
      />
    </div>
  );
};

export default ManaSelect;
