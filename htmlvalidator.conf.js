//https://html-validate.org/usage/index.html
module.exports = {
  "root": true,
  
  "extends": ["html-validate:recommended"],
  
  "rules": {
      //off, warn or error
      "no-redundant-role": "off",
      "no-conditional-comment": "off",
      "prefer-native-element": "off",
      "element-permitted-content": "warn",
      "no-inline-style": "off"
  },
};