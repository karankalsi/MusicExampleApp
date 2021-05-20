const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    preset: "react-native",
    rootDir: "./",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    setupFilesAfterEnv: ['./jest.setup.js'],
  };
};
