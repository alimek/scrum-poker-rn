module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
    "linebreak-style": ["error", "unix"],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "no-useless-rename": 0,
    "global-require": 0,
  },
  "parser": "babel-eslint",
  "plugins": [
    "flowtype"
  ],
  "globals": {
    "window": true,
    "requestAnimationFrame": true,
  }
};