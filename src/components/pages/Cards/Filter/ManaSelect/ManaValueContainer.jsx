import React from "react";
import { components } from "react-select";

const ManaValueContainer = (props) => {
  return (
    <components.ValueContainer {...props}>
      <div
        className={`d-flex flex flex-wrap flex-row h-10 w-40 ${
          props.children[0].length > 2 && "overflow-y-scroll"
        }`}
      >
        {props.children}
      </div>
    </components.ValueContainer>
  );
};

export default ManaValueContainer;
