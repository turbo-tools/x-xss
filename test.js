/* eslint-env jest */
const xxss = require('./index')

// response mock
const response = {
  headers: {},
  setHeader: function (a, b) {
    this.headers[a] = b
  }
}

afterEach(() => {
  response.headers = {}
})

test('does set default header if no report uri is given', () => {
  xxss(response)
  expect(response.headers).toEqual({'X-XSS-Protection': '1; mode=block'})
})

test('does set header with report uri', () => {
  xxss(response, 'https://example.com')
  expect(response.headers).toEqual({'X-XSS-Protection': '1; mode=block; report=https://example.com'})
})
