module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "password-generator.js",
    library: "passwordGenerator",
    path: __dirname + "/dist",
    libraryTarget: "umd",
  },
  mode: "production",
};
