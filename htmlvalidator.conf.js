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
        "no-inline-style": "off",
        //TODO: A temporary workaround for a bug that was introduced in html-validate (7.3.1)
        //The validator needs to be fixed as it is throwing an error for a valid value for form action
        "attribute-allowed-values": "warn"
    },
};
