module.exports = {
  plugins: ["react", "react-etc", "react-hooks"],
  rules: {
    "react/no-unstable-nested-components": ["error"],
    "react-etc/no-unstable-context-selector": ["error"],
    "react-etc/prefer-usememo": ["warn"],
    "react-hooks/rules-of-hooks": ["error"],
    "react-hooks/exhaustive-deps": ["error"],
  },
};
