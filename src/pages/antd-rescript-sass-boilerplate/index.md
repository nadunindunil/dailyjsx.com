---
title: Ant Design Webpack override using rescript and antd scss theme plugin
date: '2019-08-06'
spoiler: How to override webpack using rescript in CRA
author: 'Nadun Indunil'
tags: ['React', 'webpack', 'antd']
---

This episode I am going to describe how to use rescripts to override create-react-app webpack configuration to work with ant design ntd-scss-theme-plugin. Even though [antd](https://ant.design/docs/react/use-with-create-react-app) and [antd-scss-theme-plugin](https://github.com/intoli/antd-scss-theme-plugin) provide somewhat documentation to override CRA webpack I couldn't find a way to run the application.

> TL;DR here is the boilerplate url : https://github.com/nadunindunil/antd-rescripts-boilerplate

### Lets start installing dependencies:

Install these as dev dependencies:
- @rescripts/cli
- @rescripts/rescript-use-babel-config
- antd-scss-theme-plugin
- babel-plugin-import0
- less
- less-loader

Install antd as npm dependency.

change ***package.json*** scripts section to this:

```json
"scripts": {
    "start-old": "react-scripts start",
    "build-old": "react-scripts build",
    "test-old": "react-scripts test --env=jsdom",
    "start": "rescripts start",
    "build": "rescripts build",
    "test": "rescripts test",
    "eject": "react-scripts eject"
}
```

then add theme.scss file inside src folder with a styling like this:

```scss
$primary-color: #fe8019;
```

finally add .rescriptsrc.js into project root:

```js
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

const addLessLoader = (loaderOptions = {}) => config => {
  const mode = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

  // Need these for production mode, which are copied from react-scripts
  const publicPath = require('react-scripts/config/paths').servedPath;
  const shouldUseRelativeAssetPaths = publicPath === './';
  const shouldUseSourceMap = mode === 'prod' && process.env.GENERATE_SOURCEMAP !== 'false';
  const lessRegex = /\.less$/;
  const lessModuleRegex = /\.module\.less$/;
  const localIdentName = loaderOptions.localIdentName || '[path][name]__[local]--[hash:base64:5]';

  const getLessLoader = cssOptions => {
    return [
      mode === 'dev'
        ? require.resolve('style-loader')
        : {
            loader: require('mini-css-extract-plugin').loader,
            options: Object.assign({}, shouldUseRelativeAssetPaths ? { publicPath: '../../' } : undefined)
          },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009'
              },
              stage: 3
            })
          ],
          sourceMap: shouldUseSourceMap
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: process.env.NODE_ENV !== 'production'
        }
      },
      AntdScssThemePlugin.themify({
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          sourceMap: process.env.NODE_ENV !== 'production'
        }
      })
    ];
  };

  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;

  // Insert less-loader as the penultimate item of loaders (before file-loader)
  loaders.splice(
    loaders.length - 1,
    0,
    {
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getLessLoader({
        importLoaders: 2
      }),
      sideEffects: mode === 'prod'
    },
    {
      test: lessModuleRegex,
      use: getLessLoader({
        importLoaders: 2,
        modules: true,
        localIdentName: localIdentName
      })
    }
  );

  return config;
};

module.exports = [
  {
    webpack: config => {
      config.resolve.extensions = [...config.resolve.extensions, '.less'];
      // change next line location as you want to add custom scss file
      config.plugins = [...config.plugins, new AntdScssThemePlugin('./src/theme.scss')];

      config = addLessLoader()(config);

      return config;
    }
  },
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [
        [
          'import',
          {
            libraryName: 'antd',
            style: true
          }
        ]
      ]
    }
  ]
];
```

I hope this will help you to configure your next react application using antd.