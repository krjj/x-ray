/**
 * Module Dependencies
 */

var Promise = require('bluebird')
var sts = require('stream-to-string')

/**
 * Export `params`
 */

module.exports = streamToPromise

/**
 * Convert a readStream from xray.stream() into
 * a Promise resolved with written string
 *
 * @param {Stream} strem
 * @return {Promise}
 */
function streamToPromise(stream) {
  return new Promise(function (resolve, reject) {
    sts(stream).then((resStr) => {
      try {
        resolve(JSON.parse(resStr))
      } catch (e) {
        reject(e);
      }
    }).catch((e) => {
      reject(e)
    })
  })
}
