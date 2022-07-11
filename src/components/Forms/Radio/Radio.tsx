import React, { FC, useState } from "react";
import Radio from "@kiwicom/orbit-components/lib/Radio";
import { StyledRadioWrapper } from "./style";
import { BaseRadioProps } from "./type";

const RadioButton: FC<BaseRadioProps> = (props) => {
  const {
    name = "",
    disabled = false,
    children = '',
    id = '',
    value
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