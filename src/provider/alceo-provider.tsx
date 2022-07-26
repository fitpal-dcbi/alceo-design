import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

import theme from "../theme";

export interface AlceoProviderProps {
  children?: JSX.Element;
}

const AlceoProvider: React.FC<AlceoProviderProps> = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      {children}
    </ThemeProvider>
  );
};

export default AlceoProvider;
