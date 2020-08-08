import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

import path from "path";

const extensions = [".js", ".ts", ".vue"];

const plugins = [
  alias({
    entries: {
      vue: "vue/dist/vue.runtime.esm-browser.prod.js",
    },
  }),
  resolve({
    extensions,
    browser: true,
  }),
  commonjs(),
  vue(),
  postcss({
    minimize: true,
    extract: path.resolve("dist/bundle.css"),
  }),
  typescript({
    include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
    useTsconfigDeclarationDir: true,
  }),
];

if (process.env.NODE_ENV === "development") {
  plugins.push(livereload());
  plugins.push(
    serve({
      historyApiFallback: true,
      contentBase: ["public", "libs"],
    })
  );
}

export default {
  input: "./src/components/index.ts",
  external: ["vue"],
  plugins,
  output: [
    {
      file: "libs/bundle.es.js",
      format: "es", // 打包模块支持方案，可选 amd, cjs, es, iife, umd
    },
    {
      file: "libs/bundle.min.js",
      format: "es", // 打包模块支持方案，可选 amd, cjs, es, iife, umd
      plugins: [terser()],
    },
  ],
};
