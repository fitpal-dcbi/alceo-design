import React, { FC } from "react";
import { BaseSwitchProps } from "./type";
import { StyledSwitchWrapper, StyledSwitch, StyledSwitchBox } from "./style";

const Switch: FC<BaseSwitchProps> = (props) => {
  const {
    defaultChecked = false,
    disabled = false,
    name = "",
    onChange,
    readOnly = false,
    type = "default",
  } = props;

  return (
    <StyledSwitchWrapper>
      <StyledSwitch
        type={"checkbox"}
        id="checkbox"
        disabled={readOnly || disabled}
        defaultChecked={defaultChecked}
        name={name}
        onChange={(value) => {
          if (readOnly) return;
          onChange(value?.target?.checked);
        }}
      />
      <StyledSwitchBox htmlFor="checkbox" disabled={readOnly || disabled}>
        <div className="SwitchCircle">
          <div
            className={type === "default" ? "SwitchNode" : "WithIconSwitchNode"}
          />
        </div>
      </StyledSwitchBox>
    </StyledSwitchWrapper>
  );
};

export default Switch;
