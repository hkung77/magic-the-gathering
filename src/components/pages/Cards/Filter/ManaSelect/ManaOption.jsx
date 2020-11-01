import React from "react";
import PropType from "prop-types";
import { components } from "react-select";

const propTypes = {
  data: PropType.object,
};

const ManaOption = (props) => {
  return (
    <components.Option className="h-16" {...props}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/mana/${props.data.value}.png`}
        className="w-12 mx-auto"
        alt={`${props.data.value} mana`}
      />
    </components.Option>
  );
};

ManaOption.propTypes = propTypes;
export default ManaOption;
