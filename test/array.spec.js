describe('array prototype test', function () {
  it('count', function () {
    var a = ['a', 100, 'a', 'bb', 'hoge'];
    expect(a.count('a')).toEqual(2);
    expect(a.count('h')).toEqual(0);
    expect(a.count('hoge')).toEqual(1);
  });
});
