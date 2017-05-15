module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
    "linebreak-style": ["error", "windows"]
  },
  "parser": "babel-eslint",
  "plugins": [
    "flowtype"
  ],
  "globals": {
    "window": true
  }
};