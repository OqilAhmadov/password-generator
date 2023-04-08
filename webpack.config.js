module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'password-generator.js',
      library: 'passwordGenerator',
      libraryTarget: 'umd'
    },
    mode: 'production'
  };