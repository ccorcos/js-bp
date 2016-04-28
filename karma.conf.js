'use strict'

const path = require('path')
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      './src/test.js',
    ],
    preprocessors: {
      './src/test.js': ['webpack', 'sourcemap'],
    },
    webpack: require('./webpack/configs').testing(),
    webpackServer: {
      noInfo: true,
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-junit-reporter',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jsdom-launcher',
    ],
    reporters: [
      // 'progress',
      // 'dots',
      'spec',
      'junit',
      'coverage',
    ],
    coverageReporter: {
      reporters: [{
        type: 'cobertura',
        dir: './test_results',
        file: 'test-unit-coverage.xml',
      }]
    },
    junitReporter: {
      outputDir: './test_results',
      outputFile: './test-unit-results.xml',
      suite: 'unit',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    // browsers: ['PhantomJS'],
    // browsers: ['jsdom'],
    // autoWatch: true,
    singleRun: true,
  })
}