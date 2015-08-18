module.exports = Result

var _ = require('lodash')

function Result () {
  var self = Object.create( Result.prototype )
    , data = {}
    , defaults = {}

  self.set = set
  self.get = get

  return self

  function set( key, value ) {
    if ( arguments.length == 2 ) {
      _.set( data, key, value )
    } else if ( arguments.length == 1 ) {
      _.merge( data, key )
    }
  }

  function apply( target ) {
    if ( !_.isObject( target ) )
      target = {}

    _.defaultsDeep( target, defaults )
    _.merge( target, data )
    return target
  }

  function get( key ) {
    var result = apply( {} )
    return _.get( result, key )
  }
}
