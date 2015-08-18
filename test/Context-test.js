var ass = require('chai').assert

describe('Context', function () {
  var Context = require('../lib/Context')

  it('will instantiate without new', function () {
    var context = Context()
    ass.instanceOf( context, Context )
  })

})
