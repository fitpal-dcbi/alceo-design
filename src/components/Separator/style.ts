import styled, { css } from "styled-components";

import {
  SeparatorProps,
  SeparatorIndentation,
  SeparatorAlignment,
} from "./type";

const mapSeparatorIndentationToJustifyContent = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

const parseSeparatorIndentation = (
  alignment: SeparatorAlignment,
  indentation: SeparatorIndentation
) => {
  if (alignment === "left")
    return css`
      margin-right: ${indentation}px;
    `;
  else if (alignment === "right")
    return css`
      margin-left: ${indentation}px;
    `;
  else if (alignment === "center")
    return css`
      margin-left: ${indentation}px;
      margin-right: ${indentation}px;
    `;
};

export const StyledSeparator = styled.div<SeparatorProps>`
  height: 1px;
  display: flex;
  justify-content: ${({ alignment }) =>
    alignment && mapSeparatorIndentationToJustifyContent[alignment]};
  background-color: ${(props) => props.theme.colors.whiteAlpha[50]};
  ${({ alignment, indentation }) =>
    alignment &&
    indentation &&
    parseSeparatorIndentation(alignment, indentation)}
`;
