var ass = require('chai').assert

describe('Result', function () {
  var Result = require('../lib/Result')

  it('will instantiate', function () {
    var result = new Result()
    ass.instanceOf( result, Result )
  })

  it('will instantiate without new', function () {
    var result = Result()
    ass.instanceOf( result, Result )
  })

  it('will set a key and read it back', function () {
    var result = new Result()
    result.set('key','value')

    ass.equal( result.get('key'), 'value' )

  })

})
