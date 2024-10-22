import React, { FC } from "react";

import { BaseBadgeProps } from "./type";
import { StyledBadge } from "./Style";
import { ReactComponent as IconIc } from "../../assets/icon-ic.svg";
import { ReactComponent as IconIcWhite } from "../../assets/icon-ic-white.svg";

const Badge: FC<BaseBadgeProps> = (props) => {
  const {
    variant = "primary",
    inverted = false,
    hasInfoIcon = false,
    prefix,
    iconOnly = false,
    children,
    size = "sm",
    weight = 'bold',
  } = props;

  return (
    <StyledBadge variant={variant} inverted={inverted} size={size} weight={weight}>
      <div className="badge-wrapper">
        {!iconOnly ? (
          <>
            {prefix && <div className="prefix-badge">{prefix}</div>}
            <p className="badge-label">{children}</p>
            {hasInfoIcon && (<span className="badge-info">{inverted ? <IconIcWhite /> : <IconIc />}</span>)}
          </>
        ) : (
          children
        )}
      </div>
    </StyledBadge>
  );
};

export default Badge;
