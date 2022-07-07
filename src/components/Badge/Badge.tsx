import React, { FC } from "react";

import { BaseBadgeProps } from "./type";
import { StyledBadge } from "./Style";

const Badge: FC<BaseBadgeProps> = (props) => {
  const {
    variant = "light",
    inverted = false,
    suffix = false,
    prefix,
    iconOnly = false,
    label = "",
  } = props;

  return (
    <StyledBadge variant={variant} inverted={inverted}>
      <div className="badgeWrapper">
        <p className="badgeLabel">{label}</p>
      </div>
    </StyledBadge>
  );
};

export default Badge;
