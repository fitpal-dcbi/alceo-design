import styled from "styled-components";

export const StyledDialog = styled.div`
  [role="dialog"] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div > div {
    max-width: 20.5rem !important;
    bottom: 9rem;
    @media (min-width: 414px) {
      max-width: 24.5rem !important;
    }

    @media (min-width: 768px) {
      max-width: 24.5rem !important;
      top: 0 !important;
      bottom: 0;
    }
  }

  .modal__container {
    max-width: 20.5rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1.5rem 1rem 1rem 1rem !important;

    @media (min-width: 414px) {
      max-width: 24.5rem !important;
    }
  }

  .modal__container > div,
  .modal__container > div > div {
    padding: 0 !important;
    margin-top: 0 !important;
  }

  .modal__header-wrapper {
    margin-top: 0 !important;
    padding: 0 !important;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    height: 100%;
    color: #000000;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }

  .modal__header-wrapper > div > p {
    margin-top: 1rem !important;

    @media (min-width: 768px) {
      margin-top: 1.5rem !important;
    }
  }

  section {
    padding: 0.5rem 0 1rem 0 !important;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 1.125rem;
    text-align: center;
    color: #262626;

    @media (min-width: 768px) {
      padding: 0.5rem 0 1.5rem 0 !important;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }

  .modal__body-wrapper {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 0.75rem;
    line-height: 1.125rem;
    text-align: center;
    color: #262626;

    @media (min-width: 768px) {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }

  .modal__container .modal__footer-wrapper {
    width: 100%;
  }
`;
