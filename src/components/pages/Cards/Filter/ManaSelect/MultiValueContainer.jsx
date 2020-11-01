import React from "react";
import { components } from "react-select";
import ManaLabel from './ManaLabel';

const MultiValueContainer = (props) => {
  return (
    <components.MultiValue className="h-6" {...props} >
      <components.MultiValueContainer {...props}>
        <ManaLabel {...props}/>
      </components.MultiValueContainer>
    </components.MultiValue >
  );
}; 

export default MultiValueContainer;