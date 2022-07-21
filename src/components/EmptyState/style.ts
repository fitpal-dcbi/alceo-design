import styled from "styled-components";

export const StyledEmptyState = styled.div`
  .empty-state__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.875rem;
    justify-content: flex-start;

    max-width: 23.5rem;
    height: 100%;
  }

  .empty-state__title {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.375rem;
    text-align: center;
    color: #262626;
    margin-bottom: 0.5rem;
  }

  .empty-state__description {
    margin: 0;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #555555;
    text-align: center;
    margin-bottom: 1rem;
  }

  .empty-state__button-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
