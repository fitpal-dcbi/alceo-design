import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "src/theme";

export interface AlceoProviderProps {
  children?: JSX.Element;
}

const AlceoProvider: React.FC<AlceoProviderProps> = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AlceoProvider;
