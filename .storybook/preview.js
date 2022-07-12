import ProviderDecorator from "./providerDecorator";

export const decorators = [(storyFn) => ProviderDecorator(storyFn)];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
