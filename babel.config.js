module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            screens: "./src/screens",
            types: "./src/types",
            constants: "./src/constants",
            utils: "./src/utils",
            "global-styles": "./src/global-styles.ts",
            "global-types": "./src/global-types.ts",
          },
        },
      ],
    ],
  };
};
