// Suppressing act wrap error because of library issue  https://github.com/callstack/react-native-testing-library/issues/200
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    !args[0].startsWith(
      'Warning: An update to %s inside a test was not wrapped in act(...).',
    )
  ) {
    originalConsoleError(...args);
  }
};
