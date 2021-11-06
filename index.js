module.exports = {
  plugins: ["jsx-expressions", "react", "react-etc", "react-hooks"],
  rules: {
    "jsx-expressions/strict-logical-expressions": ["error"],
    "react/no-unstable-nested-components": ["error"],
    "react-etc/no-unstable-context-selector": ["error"],
    "react-etc/prefer-usememo": ["warn"],
    "react-hooks/rules-of-hooks": ["error"],
    "react-hooks/exhaustive-deps": ["error"],
  },
};
