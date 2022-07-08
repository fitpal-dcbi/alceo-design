import React, { FC } from "react";

import { BaseBadgeProps } from "./type";
import { StyledBadge } from "./Style";
import { ReactComponent as GlyphIcon } from "../../assets/icon-glyph.svg";

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
        <div className="prefixBadge">{prefix}</div>
        <p className="badgeLabel">{label}</p>
        {suffix && <GlyphIcon className="suffixBadge" />}
      </div>
    </StyledBadge>
  );
};

export default Badge;
