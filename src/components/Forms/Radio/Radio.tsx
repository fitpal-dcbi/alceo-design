import React, { FC, useState } from "react";
import Radio from "@kiwicom/orbit-components/lib/Radio";
import { BaseRadioProps } from "./type";
import { StyledRadioWrapper } from "./style";

const RadioButton: FC<BaseRadioProps> = (props) => {
  const {
    name = "",
    disabled = false,
    children = '',
    id = '',
    value, description = '',
    hasError= false,
  } = props;
  
  const [checked, setChecked] = useState(false);
  const [itemChecked, setItemChecked] = useState<string>('')

  const onChange = (val: any) => {
    setItemChecked(val?.target?.value)
  };
  return (
    <StyledRadioWrapper disabled={disabled}>
      <Radio
        name={name}
        id={id}
        label={children}
        value={value}
        disabled={disabled}
        checked={checked}
        info={description}
        hasError={hasError}
        onChange={(val) => {
          setChecked(!checked);
          onChange(val)
        }}
      />
      <div className="labelRadioSelected">Item Selected : {itemChecked}</div>
    </StyledRadioWrapper>
  )
}

export default RadioButton;