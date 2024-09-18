import React from "react";
import { EmptyStateProps } from "./type";

import { StyledEmptyState } from "./style";

const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const { image, title, description, button } = props;

  return (
    <StyledEmptyState>
      <div className="empty-state__container">
        {image}
        {title && (
          <h2 className="empty-state__title">
            {title}
          </h2>
        )}
        {description && (
          <p className="empty-state__description">
            {description}
          </p>
        )}
        {button && <div className="empty-state__button-wrapper">{button}</div>}
      </div>
    </StyledEmptyState>
  );
};

EmptyState.defaultProps = {
  image: null,
  title: "",
  description: "",
  button: null,
};

export default EmptyState;
