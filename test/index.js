var uniq = require('../');

describe('uniq(array)', function(){
  it('should remove duplicated items from array', function(){
    var a = [1, 2, 3, 3, null, null, undefined, undefined, 'a', 'a', false, false];
    uniq(a).should.be.eql([1, 2, 3, null, undefined, 'a', false]);
  });
});
