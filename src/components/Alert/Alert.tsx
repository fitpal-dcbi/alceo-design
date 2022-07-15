import React from "react";
import { BaseAlertProps } from "./type";
import { StyledAlertWrapper } from "./style";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";

const Alert = React.forwardRef<HTMLDivElement, BaseAlertProps>(
  (props) => {
    const {
      prefix,
      header="",
      description="",
      variant="infoPrimary",
      closable=true,
    } = props;
    return (
      <StyledAlertWrapper variant={variant}>
        <div className="alert-content">
          <div className="alert-content__wording">
            {prefix}
            <div className="alert-content-info">
              <p className="alert-content-info__header">{header}</p>
              <p className="alert-content-info__desc">{description}</p>
            </div>
          </div>
          {closable && 
          (          
            <div className="alert-content__close">
              <IconClose className="alert-content-close"/>
            </div>
          )}
        </div>
      </StyledAlertWrapper>
    )
  }
);

export default Alert;