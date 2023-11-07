module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "react/react-in-jsx-scope": "off",
    "comma-dangle": [2, "always-multiline"],
    "object-shorthand": [2, "always", {
      "ignoreConstructors": false,
      "avoidQuotes": false
    }],
    "max-len": [2, 120, {
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreComments": true
    }],
    "consistent-return": 0,

    "prefer-destructuring": [2, { "array": false, "object": false }, { "enforceForRenamedProperties": false }],
    "prefer-object-spread": 0,
    "prefer-rest-params": 0,
    "prefer-spread": 0,
    "function-call-argument-newline": 1,
    "function-paren-newline": 0,
    "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
    "no-param-reassign": 1,
    "no-restricted-syntax": [2, {
      "selector": "ObjectPattern",
      "message": "Object destructuring is not compatible with Node v4"
    }],
    "strict": [2, "safe"],
    "valid-jsdoc": [2, {
      "requireReturn": false,
      "requireParamDescription": false,
      "requireReturnDescription": false
    }],

    "eslint-plugin/consistent-output": 0,
    "eslint-plugin/require-meta-docs-description": [2, { "pattern": "^(Enforce|Require|Disallow)" }],
    "eslint-plugin/require-meta-schema": 0,
    "eslint-plugin/require-meta-type": 0
  },
  "overrides": [
      {
        "files": "tests/**",
        "rules": {
          "no-template-curly-in-string": 1
        }
      },
      {
        "files": "markdown.config.js",
        "rules": {
          "no-console": 0
        }
      },
      {
        "files": ".github/workflows/*.js",
        "parserOptions": {
          "ecmaVersion": 2019
        },
        "rules": {
          "camelcase": 0,
          "no-console": 0,
          "no-restricted-syntax": 0
        }
      }
    ]
};
