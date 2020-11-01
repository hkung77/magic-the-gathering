import React from "react";
import PropType from "prop-types";
import { components } from "react-select";

const propTypes = {
  data: PropType.object,
};

const ManaLabel = (props) => {
  return (
    <components.MultiValueLabel {...props}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/mana/${props.data.value}.png`}
        className="w-4 h-4 mx-auto"
        alt={`${props.data.value} mana`}
      />
    </components.MultiValueLabel>
  );
};

ManaLabel.propTypes = propTypes;
export default ManaLabel;
