const { normalizeURL } = require('./crawl.js')
const { getURLSFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')


 test('normalize url', () => {
     expect(normalizeURL('https://ATULsubedi.com.np/path/')).toEqual('atulsubedi.com.np/path');
 });

test('get url', () => {
    expect(getURLSFromHTML('<a href="https://blog.boot.dev"></a>', 'https://blog.boot.dev')).toEqual(['https://blog.boot.dev']);
})
test('url', () => {
    expect(getURLSFromHTML('<a href="/xyz"></a>', 'https://blog.boot.dev')).toEqual(['https://blog.boot.dev/xyz']);
})