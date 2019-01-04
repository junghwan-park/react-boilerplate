# React.js & Redux Boilerplate

## Included Modules

#### Webpack
* [webpack](https://webpack.js.org/)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
* [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
* [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)

#### React
* [prop-types](https://github.com/facebook/prop-types)
* [react](https://github.com/facebook/react)
* [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)
* [react-redux](https://github.com/reduxjs/react-redux)
* [redux](https://github.com/reduxjs/redux)

#### Babel
* [babel](https://babeljs.io/)
* [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
* [@babel/preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
* [@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
* [@babel/plugin-proposal-object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)


#### ESLint
* [eslint](https://eslint.org/)
* [babel-eslint](https://github.com/babel/babel-eslint)
* [eslint-config-tui](https://github.com/nhnent/tui.eslint.config)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint-plugin-react](https://github.com/prettier/eslint-plugin-react)

#### Prettier
* [prettier](https://prettier.io/)

## Browser support

#### Supports all browsers that are ES5-compliant

- IE8 and below are not supported

## Getting started

1. Gets the git project.
```
  git clone https://github.nhnent.com/fe/react-boilerplate.git
```
2. Run the installation from the internal repo directory.
```
  npm install
```
3. Start the webpack-dev-server.
```
  npm run dev
```
4. Open http://localhost:8080 in your browser.

## Commands
* `npm run dev` - Start webpack-dev-server.
* `npm run lint` - Run ESLint.
* `npm run build` - Bundle and minify resources into `/dist` directory.