module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["plugin:jsx-a11y/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "new-cap": 0,
        "no-console": 1,
        "no-debugger": 1,
        "no-param-reassign": 0,
        "no-var": 1,
        "semi": [
            1,
            "always"
        ],
        "no-trailing-spaces": 0,
        "eol-last": 2,
        "no-unused-vars": 0,
        "no-underscore-dangle": 0,
        "no-alert": 1,
        "react/jsx-indent": [
            "error",
            2
        ],
        "indent": [
            "error",
            2
        ],
        "no-lone-blocks": 0,
        "jsx-quotes": 1,
        "react/display-name": [
            1,
            {
                "ignoreTranspilerName": false
            }
        ],
        "react/forbid-prop-types": [
            1,
            {
                "forbid": [
                    "any"
                ]
            }
        ],
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 0,
        "react/jsx-curly-spacing": 1,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/jsx-indent-props": 1,
        "react/jsx-key": 1,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-bind": 1,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 1,
        "react/jsx-pascal-case": 1,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 0,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-multi-comp": 1,
        "react/no-set-state": 0,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prefer-stateless-function": 0,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 0,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 0,
        "jsx-a11y/label-has-for": [
            2,
            {
                "components": [
                    "Label"
                ],
                "required": {
                    "some": [
                        "nesting",
                        "id"
                    ]
                },
                "allowChildren": false
            }
        ]
    }
};