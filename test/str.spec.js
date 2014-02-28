describe('str prototype test', function () {
  it('count', function () {
    var s = 'abbcb';
    expect(s.count('a')).toEqual(1);
    expect(s.count('b')).toEqual(3);
    expect(s.count('z')).toEqual(0);
    expect(s.count('bc')).toEqual(1);
  });
});
