# JS Boilerplate

This is a basic JavaScript front-end boilerplate so I don't have to spend so much damn time copying configurations from older projects.

# Conventions

- `src/entry/[name]/index.{js,html}` define the entry points
- `src/ui/[name]/{index.js,style.scss}` define a component
- `url("~path/inside/assets")` for assets inside SCSS
- `npm run build` to build dist files
- `npm start` to start developing

# TODO

- more modular webpack config
- js only distributable files shouldnt get hashed
- configurable chunking

- unit tests
- functional tests

- routing, state, HMR
- postcss? css modules? inline css?

- optimizations
  - babel/react optimizations
    - https://github.com/thejameskyle/babel-react-optimize
  - image optimizations
    - https://github.com/tcoopman/image-webpack-loader
    - https://github.com/Levelmoney/resize-image-loader

- react storybook
- inline svg with css styles
- deploy github static site

# Features

- coming soon
