exports.processFile = path
exports.trivial = true
exports.priority = -3

function path ( file ) {
  var Result = require('../lib/Result')
  return new Result( 'path', require('path').parse( file ) )
}
