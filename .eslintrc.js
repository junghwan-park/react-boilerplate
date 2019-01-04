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
  extends: ['tui/es6', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  rules: {},
  settings: {
    react: {
      pragma: 'React',
      version: '16.6'
    }
  }
};
