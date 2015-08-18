exports.processFile = readdir
exports.keys = [ 'file','type','subtype','size'];


function readdir( file ) {
  var Result = this.Result
    , Promise = require('bluebird-extra')
    , fs = Promise.promisifyAll(require("fs"))
    , noHidden = this.getOption( 'noHidden', true )
    , statFunc = followSymlink ? fs.lstatAsync : fs.lstatAsync

  return fs.readdirAsync( file )
    .then( function( listing ) {
      if ( noHidden )
        listing = listing.filter( function( str ) {
          return str.substr(0,1) !== '.'
        })

      return new Result( 'readdir', listing )
    } )
}
