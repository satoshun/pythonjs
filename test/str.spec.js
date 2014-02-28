describe('str prototype test', function () {
  it('count', function () {
    var s = 'abbcb';
    expect(s.count('a')).toEqual(1);
    expect(s.count('b')).toEqual(3);
    expect(s.count('z')).toEqual(0);
    expect(s.count('bc')).toEqual(1);
  });

  it('title', function () {
    expect('aBc'.title()).toEqual('ABc');
    expect('BbC'.title()).toEqual('BbC');
    expect('Bbc bbc'.title()).toEqual('Bbc Bbc');
    expect('1bc ;bc'.title()).toEqual('1Bc ;Bc');
  });

  it('capitalize', function () {
    expect('aBc'.capitalize()).toEqual('Abc');
    expect('BbC'.capitalize()).toEqual('Bbc');
    expect('Bbc bbc'.capitalize()).toEqual('Bbc bbc');
  });
});
