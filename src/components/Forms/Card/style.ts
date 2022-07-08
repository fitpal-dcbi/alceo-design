import styled from "styled-components";

export const StyledCard = styled.div`
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 6px #FFEEE5;  

  .card-header {
    color: #5CA898;
    font-weight: 700;
    background-color: #EDF9F6;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1.125rem 1.5rem;
  };

  .card-body {
    padding: 1.5rem;
  };

  @media (max-width: 768px) {
    .card-header {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

export const StyledCardEditable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      filter: brightness(0.9) contrast(1.2);
    }
  }

  span {
    margin-left: .5938rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    color: #FF6112;
  }
`;