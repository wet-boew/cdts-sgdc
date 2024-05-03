const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 12,
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.es2021,
                ...globals.node,
            },
        },
        //`ignores` must actually configured in a separate object, which can be found below  (see https://github.com/eslint/eslint/issues/17400)
        //ignores: [...],
        "rules": {
            "accessor-pairs": "error",
            "array-bracket-newline": ["error", "consistent"],
            "array-bracket-spacing": "error",
            "array-callback-return": "error",
            "array-element-newline": [
                "error",
                {
                    "ArrayExpression": "consistent", /*{minItems: 32, "multiline": true},*/
                    "ArrayPattern": "never"
                }
            ],
            "arrow-body-style": "error",
            "arrow-parens": [
                "error",
                "always"
            ],
            "arrow-spacing": [
                "error",
                {
                    "after": true,
                    "before": true
                }
            ],
            "block-scoped-var": "error",
            "block-spacing": "error",
            "brace-style": [
                "error",
                "stroustrup"
            ],
            "camelcase": "error",
            "capitalized-comments": "off",
            "class-methods-use-this": "error",
            "comma-dangle": "off",
            "comma-spacing": [
                "error",
                {
                    "after": true,
                    "before": false
                }
            ],
            "comma-style": [
                "error",
                "last"
            ],
            "complexity": "error",
            "computed-property-spacing": [
                "error",
                "never"
            ],
            "consistent-return": "error",
            "consistent-this": "error",
            "curly": "off",
            "default-case": "error",
            "default-case-last": "error",
            "default-param-last": "error",
            "dot-location": "error",
            "dot-notation": "error",
            "eol-last": "off",
            "eqeqeq": "error",
            "func-call-spacing": "error",
            "func-name-matching": "error",
            "func-names": "error",
            "func-style": [
                "error",
                "declaration"
            ],
            "function-paren-newline": "error",
            "generator-star-spacing": "error",
            "grouped-accessor-pairs": "error",
            "guard-for-in": "off",
            "id-denylist": "error",
            "id-length": "off",
            "id-match": "error",
            "implicit-arrow-linebreak": [
                "error",
                "beside"
            ],
            "indent": "error",
            "init-declarations": "off",
            "jsx-quotes": "error",
            "key-spacing": "error",
            "keyword-spacing": [
                "error",
                {
                    "after": true,
                    "before": true
                }
            ],
            "line-comment-position": "off",
            "linebreak-style": "off", //["error", "windows"],
            "lines-around-comment": "off",
            "lines-between-class-members": "error",
            "max-classes-per-file": "error",
            "max-depth": ["error", { max: 8 }],
            "max-len": "off",
            "max-lines": "off",
            "max-lines-per-function": "off",
            "max-nested-callbacks": "error",
            "max-params": "off",
            "max-statements": "off",
            "max-statements-per-line": "error",
            "multiline-comment-style": "off",
            "new-parens": "error",
            "newline-per-chained-call": "off",
            "no-alert": "error",
            "no-array-constructor": "error",
            "no-await-in-loop": "error",
            "no-bitwise": "error",
            "no-caller": "error",
            "no-confusing-arrow": "error",
            "no-console": "off",
            "no-constructor-return": "error",
            "no-continue": "off",
            "no-div-regex": "error",
            "no-duplicate-imports": "error",
            "no-else-return": "error",
            "no-empty-function": "error",
            "no-eq-null": "error",
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-extra-label": "error",
            "no-extra-parens": "off",
            "no-floating-decimal": "error",
            "no-implicit-coercion": "error",
            "no-implicit-globals": "error",
            "no-implied-eval": "error",
            "no-inline-comments": "off",
            "no-invalid-this": "off",
            "no-iterator": "error",
            "no-label-var": "error",
            "no-labels": "error",
            "no-lone-blocks": "error",
            "no-lonely-if": "error",
            "no-loop-func": "error",
            "no-loss-of-precision": "error",
            "no-magic-numbers": "off",
            "no-mixed-operators": "error",
            "no-multi-assign": "error",
            "no-multi-spaces": "error",
            "no-multi-str": "error",
            "no-multiple-empty-lines": "error",
            "no-negated-condition": "off",
            "no-nested-ternary": "error",
            "no-new": "error",
            "no-new-func": "error",
            "no-new-object": "error",
            "no-new-wrappers": "error",
            "no-nonoctal-decimal-escape": "error",
            "no-octal-escape": "error",
            "no-param-reassign": "error",
            "no-plusplus": "off",
            "no-promise-executor-return": "error",
            "no-proto": "error",
            "no-restricted-exports": "error",
            "no-restricted-globals": "error",
            "no-restricted-imports": "error",
            "no-restricted-properties": "error",
            "no-restricted-syntax": "error",
            "no-return-assign": "error",
            "no-return-await": "error",
            "no-script-url": "error",
            "no-self-compare": "error",
            "no-sequences": "error",
            "no-shadow": "error",
            "no-tabs": "error",
            "no-template-curly-in-string": "off",
            "no-ternary": "off",
            "no-throw-literal": "error",
            "no-trailing-spaces": "off",
            "no-undef-init": "error",
            "no-undefined": "error",
            "no-underscore-dangle": "error",
            "no-unmodified-loop-condition": "error",
            "no-unneeded-ternary": "error",
            "no-unreachable-loop": "error",
            "no-unsafe-optional-chaining": "error",
            "no-unused-expressions": "error",
            "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
            "no-use-before-define": "error",
            "no-useless-backreference": "error",
            "no-useless-call": "error",
            "no-useless-computed-key": "error",
            "no-useless-concat": "error",
            "no-useless-constructor": "error",
            "no-useless-rename": "error",
            "no-useless-return": "error",
            "no-var": "error",
            "no-void": "error",
            "no-warning-comments": "off",
            "no-whitespace-before-property": "error",
            "nonblock-statement-body-position": "error",
            "object-curly-newline": "error",
            "object-curly-spacing": "off",
            "object-shorthand": "error",
            "one-var": "off",
            "one-var-declaration-per-line": "error",
            "operator-assignment": [
                "error",
                "always"
            ],
            "operator-linebreak": ["error", "after"],
            "padded-blocks": "off",
            "padding-line-between-statements": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prefer-destructuring": "off",
            "prefer-exponentiation-operator": "error",
            "prefer-named-capture-group": "off",
            "prefer-numeric-literals": "error",
            "prefer-object-spread": "error",
            "prefer-promise-reject-errors": "error",
            "prefer-regex-literals": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "off",
            "quote-props": "off",
            "quotes": "off",
            "radix": "error",
            "require-atomic-updates": "error",
            "require-await": "error",
            "require-unicode-regexp": "off",
            "rest-spread-spacing": "error",
            "semi": "off",
            "semi-spacing": [
                "error",
                {
                    "after": true,
                    "before": false
                }
            ],
            "semi-style": [
                "error",
                "last"
            ],
            "sort-imports": "error",
            "sort-keys": "off",
            "sort-vars": "error",
            "space-before-blocks": "error",
            "space-before-function-paren": "off",
            "space-in-parens": [
                "error",
                "never"
            ],
            "space-infix-ops": "off",
            "space-unary-ops": "error",
            "spaced-comment": "off",
            "strict": [
                "error",
                "never"
            ],
            "switch-colon-spacing": "error",
            "symbol-description": "error",
            "template-curly-spacing": [
                "error",
                "never"
            ],
            "template-tag-spacing": "error",
            "unicode-bom": [
                "error",
                "never"
            ],
            "vars-on-top": "error",
            "wrap-iife": "error",
            "wrap-regex": "error",
            "yield-star-spacing": "error",
            "yoda": [
                "error",
                "never"
            ]
        }
    },
    {
        ignores: ["**/.*", "dist/*", "test/*", "public/wet/*", "tmp/*"],
    }
];
