/**
 * Sets X-XSS-Protection protection headers
 *
 * @param {object} response Turbo HTTP response object
 * @param {string} reportUri Optional report uri [optional]
 * @public
 */

module.exports = function xXssProtection (response, reportUri = false) {
  let headerValue = '1; mode=block'
  if (reportUri) headerValue += '; report=' + reportUri
  response.setHeader('X-XSS-Protection', headerValue)
}
