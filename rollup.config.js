import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

// MS: Currently, we don't need to use postcss. But, if in the future we want to use things like: tailwind, etc. we might need this.
// import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

const rollupConfig = {
  input: "src/index.ts",
  external: ["styled-components"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};

export default rollupConfig;
