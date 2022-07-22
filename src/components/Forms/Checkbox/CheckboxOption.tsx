import React, { useState } from "react";
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
import { BaseCheckboxProps } from "./type";
import { StyledCheckboxContainer } from "./style";

const CheckboxOption= React.forwardRef<HTMLInputElement, BaseCheckboxProps>(
  (props, ref) => {
    const {
      name = "checkbox",
      disabled= false,
      id="checkbox_1",
      value="checkbox-1",
      label="Label",
      description="",
      hasError=false,
      checked=false,
      onChange
    } = props;

    const [isChecked, setIsChecked] = useState<boolean>(checked);

    return (
      <StyledCheckboxContainer disabled={disabled} hasError={hasError}>
        <Checkbox
          name={name}
          disabled={disabled}
          id={id}
          label={label}
          hasError={hasError}
          info={description}
          value={value}
          checked={isChecked}
          onChange={(val) => {
            setIsChecked((val?.target as HTMLInputElement)?.checked);
            if (onChange !== undefined) onChange((val?.target as HTMLInputElement)?.checked);
          }}
        />
      </StyledCheckboxContainer>
    );
  }
);

export default CheckboxOption;