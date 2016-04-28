# JS Boilerplate

This is a basic JavaScript front-end boilerplate so I don't have to spend so much damn time copying configurations from older projects.

# Conventions

- `src/entry/[name]/index.{js,html}` define the entry points
- `src/ui/[name]/{index.js,style.scss}` define a component
- `url("~path/inside/assets")` for assets inside SCSS
- `npm run build` to build dist files
- `npm start` to start developing

# TODO

- lint scss files?
- webpack and karma comments and notes

- js only distributable files shouldnt get hashed
  - e.g. creating a package or something
- configurable chunking / targets

- integration tests with webdriver.io

- continuous integration with travis-ci

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
