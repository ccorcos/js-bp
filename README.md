# JS Boilerplate

This is a basic JavaScript front-end boilerplate so I don't have to spend so much damn time copying configurations from older projects.

# Conventions

- `src/entry/[name]/index.{js,html}` define the entry points
- `src/ui/[name]/{index.js,style.scss}` define a component
- `url("~path/inside/assets")` for assets inside SCSS
- `NODE_ENV=production webpack -p --progress` to build dist files

# TODO

- build dist files -- link html
- feature flags (formatted logs?)
- css extract text

- react storybook
- postcss? css modules? inline css?
- routing, state, HMR

- babel/react optimizations
  - https://github.com/thejameskyle/babel-react-optimize
- image optimizations
  - https://github.com/tcoopman/image-webpack-loader
  - https://github.com/Levelmoney/resize-image-loader
- inline svg

- deploy github static site
- multiple entry points
- unit tests
- functional tests
- node dev server proxy
- dead code elimination
- postcss
- css modules

# Features

- webpack
- hot module replacement
- babel
