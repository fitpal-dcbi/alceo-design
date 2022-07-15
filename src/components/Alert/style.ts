import styled from "styled-components";
import { BaseAlertProps } from "./type";

const mapAlertColor = {
  infoPrimary: ""
};

export const StyledAlertWrapper = styled.div<BaseAlertProps>`
  width: auto;
  border-radius: 1.25rem;
  background-color: #FFF8F4;
  border: 1px solid #FFE7DA;
  padding: 1rem;

  .alert-content,
  .alert-content__wording {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  };

  .alert-content-prefix {
    width: 1.5rem;
    height: 1.5rem;

    > path {
      fill: #FF6112;
    };
  };

  .alert-content-info {
    display: flex;
    flex-direction: column;
    margin-left: .75rem;
    
    p {
      font-size: .875rem;
      line-height: 1.25rem;
      margin: 0;
    }
  };

  .alert-content-info__header {
    color: #FF6112;
    font-size: .875rem;
    font-weight: 600;
  };

  .alert-content-info__desc {
    color: #555555;
    font-weight: 400;
  };

  .alert-content__close {
    cursor: pointer;
    &:hover {
      filter: brightness(0.9) contrast(1.2);
      transform: scale(1.09);
    }
  };

  .alert-content-close {
   > path {
      fill: #FF6112;
      stroke: #FF6112;
      stroke-width: 1.6;
   }
  }
`;