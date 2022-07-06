import React, { FC } from "react";
import { BaseSwitchProps } from "./type";
import { StyledSwitchWrapper, StyledSwitch, StyledSwitchBox } from "./style";

const Switch: FC<BaseSwitchProps> = (props) => {
  const { type } = props;

  const handleChange = (e: any) => {
    console.log("wahib checked", e);
  };

  return (
    <StyledSwitchWrapper>
      <StyledSwitch
        type={"checkbox"}
        id="checkbox"
        onChange={(e) => handleChange(e.target.checked)}
      />
      <StyledSwitchBox htmlFor="checkbox">
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
