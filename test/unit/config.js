require('babel-polyfill');
require('babel-core/register')({
    only: [/src/, /test/]
});