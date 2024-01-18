const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')


test('to convert the url', () => {
    expect(normalizeURL('https://atulsubedi.com.np/path/')).toBe('atulsubedi.com.np/path');
});
