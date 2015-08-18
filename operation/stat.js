exports.trivial = true
exports.processFile = processFile
exports.keys = ['file','type','subtype','size']
exports.priority = -2

function processFile( file ) {
  var Result = require('../lib/Operation').Result
    , Promise = require('bluebird-extra')
    , fs = Promise.promisifyAll(require("fs"))
    , followSymlink = this.getOption( 'followSymlink', true )
    , statFunc = followSymlink ? fs.lstatAsync : fs.lstatAsync

  return statFunc
    .then( function onStat( stat ) {
      var result = new Result()
      Result.set( 'stat', stat )

      if ( stat ) {
        if ( stat.isFile() ) {
          Result.defaults('mime', {
            type: 'inode',
            subtype: 'directory'
          })
        } else {
          if ( stat.isDirectory() ) {
            Result.defaults('mime', {
              type: 'inode',
              subtype: 'directory'
            })
          }

          if ( stat.isSymbolicLink() ) {
            Result.defaults('mime', {
              type: 'inode',
              subtype: 'symbolic-link'
            })
          }
        }
      } )

    return result
  }

}
