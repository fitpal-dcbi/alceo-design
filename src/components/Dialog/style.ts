import styled from "styled-components";

export const StyledDialog = styled.div`
  max-width: 20.5rem !important;

  @media (min-width: 414px) {
    max-width: 24.5rem !important;
  }

  .hFPfDp {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ipxMNJ {
    max-width: 20.5rem !important;
    top: -5rem !important;

    @media (min-width: 414px) {
      max-width: 24.5rem !important;
      top: -20rem !important;
    }

    @media (min-width: 768px) {
      max-width: 24.5rem !important;
      top: 0 !important;
    }
  }

  .bVlrWV,
  .gjhdJZ,
  .eOQnLR,
  .vEyOF,
  .lmyzkN {
    box-shadow: 0px 0px 0px 1px rgba(28, 59, 84, 0.05),
      0px 2px 6px -2px rgba(28, 59, 84, 0.06),
      0px 8px 12px -3px rgba(28, 59, 84, 0.1) !important;
    border-radius: 12px !important;
  }

  // WA: override orbit kiwi css class on title component
  .jiKDht {
    padding: 1.5rem 1rem 0rem 1rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .iaeqcN {
    margin-top: 0 !important;
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

  // WA: override orbit kiwi css class on body component

  .jCBKRJ {
    padding: 0.5rem 1rem !important;

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

  //WA: override orbit kiri css clas on footer component

  .LrIRm {
    padding: 1rem !important;
  }

  .hlbvGo {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
