#webpack-starter-es2015-react

A really simple tool to start quickly developing in es2015 and preview in the browser with [browsersync](https://github.com/Browsersync/browser-sync).
[Babel](https://github.com/babel/babel) is used to transpile to es5.

## Testing

A testing framwork consisting of [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) have been included. Additionally [Enzyme](https://github.com/airbnb/enzyme) is included to test react components.

## Installation

Please note that this repo hasn't been published to npm yet.

* `git clone git@github.com:msmy/webpack-starter-es2015-react.git`
* `cd webpack-starter-es2015-react`
* `npm i`

## Usage

* `npm start`: start application while watching file changes
* `npm run build`: transpile to es5
* `test`: run unit tests
* `test:unit`: run unit tests
* `test:unit:watch`: run unit test with a watch flag
* `npm run update-package`: uses [npm-check-updates](https://github.com/tjunnone/npm-check-updates) to update packages
