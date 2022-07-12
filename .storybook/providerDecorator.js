import React from "react";
import { AlceoProvider } from "../src/provider";

const ProviderDecorator = (storyFn) => (
  <AlceoProvider>{storyFn()}</AlceoProvider>
);

export default ProviderDecorator;
