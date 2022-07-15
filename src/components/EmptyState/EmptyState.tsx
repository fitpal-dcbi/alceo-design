import React from "react";
import { EmptyStateProps } from "./type";

import { StyledEmptyState } from "./style";

import { Button } from "../Button";

const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const { image, title, desc, button } = props;

  return (
    <StyledEmptyState>
      <div className="empty-state__container">
        {image}
        {title && (
          <h2 className="empty-state__title">
            Sorry, we couldn't find that connection.
          </h2>
        )}
        {desc && (
          <p className="empty-state__description">
            Try changing up your search a bit. We'll try harder next time.{" "}
          </p>
        )}
        {button && <div className="empty-state__button-wrapper">{button}</div>}
      </div>
    </StyledEmptyState>
  );
};

export default EmptyState;
