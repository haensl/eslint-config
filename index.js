module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'curly': [
      'error'
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': false
      }
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-trailing-spaces': [
      'error'
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'multiline': true,
          'consistent': true,
          'minProperties': 2
        },
        'ImportDeclaration': 'never',
        'ExportDeclaration': {
          'multiline': true
        },
        'ObjectPattern': {
          'multiline': true
        }
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'operator-linebreak': [
      'error',
      'before'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'semi-style': [
      'error',
      'last'
    ],
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'eqeqeq': [
      'error',
      'always'
    ],
    'no-empty-function': [
      'error'
    ],
    'no-eval': [
      'error'
    ],
    'no-param-reassign': [
      'error'
    ],
    'no-throw-literal': [
      'error'
    ],
    'wrap-iife': [
      'error',
      'inside'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'func-style': [
      'error',
      'expression'
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 'off',
        'ArrayExpression': 1,
        'CallExpression': {
          'arguments': 1
        },
        'ObjectExpression': 1
      }
    ],
    'new-parens': [
      'error'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    'no-tabs': [
      'error'
    ],
    'no-whitespace-before-property': [
      'error'
    ],
    'padded-blocks': [
      'error',
      'never'
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': [
      'error',
      {
        'int32Hint': true
      }
    ],
    'space-unary-ops': [
      'error'
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    'no-duplicate-imports': [
      'error',
      {
        'includeExports': true
      }
    ],
    'no-useless-constructor': [
      'error'
    ],
    'no-var': [
      'error'
    ],
    'prefer-const': [
      'error'
    ],
    'prefer-rest-params': [
      'error'
    ],
    'prefer-template': [
      'error'
    ],
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    'template-curly-spacing': [
      'error',
      'never'
    ]
  }
};
