import React, { FC, useState } from "react";
import { useController } from "react-hook-form";
import Radio from "@kiwicom/orbit-components/lib/Radio";
import { RadioProps } from "./type";
import { StyledRadioWrapper } from "./style";
import { ConnectForm } from "../../../utils/index";

const ControlledRadio : FC<RadioProps> = (props) => {
  const {
    name = "",
    disabled = false,
    control,
    rules = {},
    children = '',
    id = '',
    value
  } = props;
  const {
    field: { onChange: fieldOnChange, name: fieldName, ref },
  } = useController({
    name,
    control,
    rules,
  });

  const [checked, setChecked] = useState(false);

  return (
    <StyledRadioWrapper disabled={disabled}>
      <ConnectForm>
        {() => (
          <Radio 
            name={fieldName}
            id={id}
            label={children} 
            checked={checked}
            onChange={(val) => {
              fieldOnChange(val);
              if (typeof fieldOnChange === "function") fieldOnChange(val);
              setChecked(!checked);
            }}   
            value={value} 
            disabled={disabled}
            ref={ref}
          />
        )}
      </ConnectForm>
    </StyledRadioWrapper>
  )
};

export default ControlledRadio;
