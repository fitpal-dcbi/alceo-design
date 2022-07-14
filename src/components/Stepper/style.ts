import styled from "styled-components";

export const StyledStepper = styled.div`
  .StepperWrapper {
    display: flex;
    align-items: center;
  }

  .butttonWrapper {
    display: flex;
    align-items: center;

    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .iconWrapper {
    width: 1.25rem;
    height: 1.25rem;
  }

  .textWrapper {
    color: #555555;
    font-weight: 700;
    font-size: 0.875rem;
    margin: 0 0.75rem;
  }

  @media (min-width: 768px) {
    .iconWrapper {
      width: 2.25rem;
      height: 2.25rem;
    }

    .textWrapper {
      font-size: 1rem;
      margin: 0 1rem;
    }
  }
`;
