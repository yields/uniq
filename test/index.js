var uniq = require('../');

describe('uniq(array)', function(){
  it('should remove repeated items', function(){
    var a = [1, 2, 3, 3, null, null, undefined, undefined, 'a', 'a', false, false];
    uniq(a).should.be.eql([1, 2, 3, null, undefined, 'a', false]);
  });

  it('should remove specifics repeated items', function(){
    var a = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    uniq(a, [1, 3]).should.be.eql([1, 2, 3, 2, 2]);
  });
});
