import React, { FC } from "react";

import {
  StyledInput,
  StyledInputWrapper,
  generateStyledInputContainer,
} from "./style";
import { InputProps } from "./type";

import { ReactComponent as IconError } from "../../assets/Input/icon-error.svg";
import { ReactComponent as IconHelp } from "../../assets/Input/icon-help.svg";

const Input: FC<InputProps> = (props) => {
  const {
    error,
    help,
    inlineLabel = false,
    label,
    prefix,
    suffix,
    disabled = false,
    ...other
  } = props;
  const StyledInputContainer = generateStyledInputContainer(!!label);
  return (
    <StyledInputContainer className="input-container">
      {label && !inlineLabel && (
        <span className="input-label non-inline-label">{label}</span>
      )}
      <StyledInputWrapper
        className="input-wrapper"
        error={error}
        help={help}
        disabled={disabled}
      >
        {prefix && <div className="prefix-container">{prefix}</div>}
        {label && inlineLabel && (
          <span className="input-label inline-label">{label}</span>
        )}
        <StyledInput className="input-field" disabled={disabled} {...other} />
        {suffix && <div className="suffix-container">{suffix}</div>}
      </StyledInputWrapper>
      {error && (
        <div className="error-container">
          <IconError className="error-icon" />
          <span className="error-text">{error}</span>
        </div>
      )}
      {help && !error && (
        <div className="help-container">
          <IconHelp className="help-icon" />
          <span className="help-text">{help}</span>
        </div>
      )}
    </StyledInputContainer>
  );
};

export default Input;
