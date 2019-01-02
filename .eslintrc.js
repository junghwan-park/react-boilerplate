module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      jsx: true
    },
    ecmaVersion: 7,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['tui', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        ignoreComments: false,
        ImportDeclaration: 1,
        flatTernaryExpressions: false
      }
    ]
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.3'
    }
  }
};
