module.exports = {
  plugins: ["react", "react-etc", "react-hooks"],
  rules: {
    "react-etc/prefer-usememo": ["warn"],
    "react-hooks/rules-of-hooks": ["error"],
    "react-hooks/exhaustive-deps": ["error"]
  },
};
