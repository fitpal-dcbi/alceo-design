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