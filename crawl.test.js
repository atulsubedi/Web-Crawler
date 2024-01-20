const { normalizeURL } = require('./crawl.js')
const { getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')


test('normalizeUrl', ()=> {
    const input = 'https://atulsubedi.com.np/'
    const actual = normalizeURL(input)
    const expected = 'atulsubedi.com.np'
    expect(actual).toEqual(expected)
})

test('normalizeUrl', ()=> {
    const input = 'https://ATULsubedi.com.np/'
    const actual = normalizeURL(input)
    const expected = 'atulsubedi.com.np'
    expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
  const inputURL = 'https://valorantasia.com'
  const inputBody = '<html><body><a href="https://valorantasia.com"><span>vandal.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://valorantasia.com/' ]
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
  const inputURL = 'https://valorantasia.com'
  const inputBody = '<html><body><a href="/path/one"><span>sherrif.dev></span></a></body></html>'
  const actual = getURLsFromHTML(inputBody, inputURL)
  const expected = [ 'https://valorantasia.com/path/one' ]
  expect(actual).toEqual(expected)
})