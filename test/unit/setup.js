global.expect = require('chai').expect;
global.document = require('jsdom').jsdom('<html><body><div id="app"></div></body></html>');
global.window = global.document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};