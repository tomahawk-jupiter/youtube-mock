# React App Setup

Webpack and React setup from scratch. I think I followed a **Traversy Media** tutorial.

**NOTE:** The original didn't work, the babel install and .babelrc file needed changing. I found the solution on [stack overflow](https://stackoverflow.com/questions/49182862/preset-files-are-not-allowed-to-export-objects), I didn't use the green tick solution but another one on that page.

## Steps:

- [Installations](#installations)
- [Webpack Configuration](#webpack-configuration)
- [Babel Config](#babel-config)
- [index.js](#index-js)
- [Components folder](#components-folder)
- [Add scripts to package.json](#add-scripts)
- [Clean output folder](#clean-output-folder)
- [JSX](#jsx)
- [Sass Setup](#sass-setup)

## Installations

    $ npm init

### React and ReactDOM install

    $ npm install react react-dom

### Webpack Install

    $ npm install --save-dev webpack webpack-dev-server webpack-cli

### Babel Install

**This didn't work:**

    $ npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin

**Install like this instead:**

    npm add -D @babel/core babel-loader @babel/preset-env @babel/preset-react

**Note**: -D is the same as --save-dev

## Webpack Configuration

### Create `webpack.config.js`

    const path = require(‘path’); 						// path module is a core node module
    const HtmlWebpackPlugin = require(‘html-webpack-plugin’);

    module.exports = {
      entry: ‘./src/index.js’,					// this is where all our react code will be
    output: {
        path: path.join(__dirname, ‘/dist’),			// this is where it will get compiled to
        filename: ‘index_bundle.js’,				// you can call this what you want
        clean: true                         // clean the dist each build
      },
      module: {						// setup the loaders
        rules: [						// rules is an array
          {
            test: \.js$/, 						// look for anything thats a js file for babel to compile
            exclude: /node_modules/,				// what to ignore (these are regexp)
            use: {
              loader: ‘babel-loader’				// use the babel loader
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: ‘./src/index.html’				// tells it to use our template
        })
      ]
    }

## Create index.js and index.html

Create `src/index.js` folder and file. This is where the React app goes.

Create a template file `src/index.html`.

Fill in the html boilerplate and a `<div id=”app”></div>` element for the React app to go.

We don’t need to include the bundle file, webpack will do that for us (html-webpack-plugin).

## Babel Config

Create `.babelrc`.

**This didn't work:**

    {
        “presets”: [“env”, “react”]
    }

**Change to this:**

    {
      "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
      ]
    }

## Index js

    import React from ‘react’;				// we can use ES6 modules because it will get compiled
    import ReactDOM from ‘react-dom’;
    import App from ‘./components/App’;

    ReactDOM.render(<App />, document.getElementById(‘app’));

## Components folder

This is where the react components go.

### src/components/App.js

Note the use of capitalized file / component name for react components.

    Import React, {Component} from ‘react’;

    class App extends Component {
        render() {
          return (
            <div>
                <h1>My React App</h1>
            </div>
            );
      }
    }

    export default App;

## Add scripts

One for webpack-dev-server, one for building into dist folder.

    “scripts”: {
      “start”: “webpack-dev-server –mode development –open –hot”,
      “build”: “webpack –mode production”					- this will create the dist
    }

**--mode development**  
**--open** will open automatically when we run the command  
**--hot** will auto reload when you save

## Asset Management

[webpack docs](https://webpack.js.org/guides/asset-management/#loading-css)

I followed the instuctions to get css loader and image loader setup. Add regex in the webpack config to look for more image formats.

## [FreeCodeCamp article](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/)

This is a helpful article that shows webpack, babel and react setup. It also shows how to setup `prettier` and `ESlint`.

### Source maps for better error logs.

Put this in the `webpack.config.js`.

    module.exports = {
      devtool: 'inline-source-map',
      // … the rest of the config
    };

## Clean output folder

To cleanup the dist folder each build, add this to the output part of the `webpack.config.js` (where the filename and path properties are):

    clean: true

## JSX

VSCode will let you use html / react snippets, ie. for html tags and react attribute versions eg. className, if the file extension is .jsx.

However there is an error when webpack tries to build these files. Fix with:

    resolve: {
      extensions: ['', '.js', '.jsx'],
    }

Also test for .jsx and .js:

    test: /\.(js|jsx)$/,

## Sass Setup

    $ npm install sass-loader sass --save-dev

And add this to `webpack.config.js`:

    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },

Now just import sass files into jsx files like you would do with css files.

    import './app.sass';
