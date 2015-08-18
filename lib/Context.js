module.exports = Context

function Context( options ) {
  var context = Object.create( Context.prototype )

  context.Result = require('./Result')
  context.getOption = getOption
  context.call = call

  return context 

  function call ( func ) {
    return func.apply( context, _.slice( arguments, 1 ) )
  }

  function getOption( key, defaultValue ) {

  }
}
