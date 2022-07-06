import React, { FC } from "react";
import { BaseSwitchProps } from "./type";
import { StyledSwitchWrapper, StyledSwitch, StyledSwitchBox } from "./style";

const Switch = React.forwardRef<HTMLInputElement, BaseSwitchProps>(
  (props, ref) => {
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
          id={"checkbox"}
          disabled={readOnly || disabled}
          defaultChecked={defaultChecked}
          name={name}
          onChange={(value) => {
            if (readOnly) return;
            if (onChange !== undefined) onChange(value?.target?.checked);
          }}
          ref={ref}
        />
        <StyledSwitchBox htmlFor="checkbox" disabled={readOnly || disabled}>
          <div className="SwitchCircle">
            <div
              className={
                type === "default" ? "SwitchNode" : "WithIconSwitchNode"
              }
            />
          </div>
        </StyledSwitchBox>
      </StyledSwitchWrapper>
    );
  }
);
export default Switch;
