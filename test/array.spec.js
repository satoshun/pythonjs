describe('array prototype test', function () {
  it('count', function () {
    var a = ['a', 100, 'a', 'bb', 'hoge'];
    expect(a.count('a')).toEqual(2);
    expect(a.count('h')).toEqual(0);
    expect(a.count('hoge')).toEqual(1);
  });

  it('remove', function () {
    var a = ['a', 100, 'a', 'bb', 'hoge'];
    a.remove('a');
    expect(a).toEqual([100, 'a', 'bb', 'hoge']);
    a = ['a', 100, 'a', 'bb', 'hoge'];
    a.remove(100);
    expect(a).toEqual(['a', 'a', 'bb', 'hoge']);
    a = ['a', 100, 'a', 'bb', 'hoge'];
    a.remove('100');
    expect(a).toEqual(['a', 100, 'a', 'bb', 'hoge']);
  });
});
