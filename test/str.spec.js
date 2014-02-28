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

  it('lstrip', function () {
    expect(' a '.lstrip()).toEqual('a ');
    expect('a '.lstrip()).toEqual('a ');
    expect('ba '.lstrip('b')).toEqual('a ');
    expect('bbaba '.lstrip('b')).toEqual('aba ');
    expect('ababb '.lstrip('ab')).toEqual(' ');
  });

  it('rstrip', function () {
    expect(' a '.rstrip()).toEqual(' a');
    expect('a '.rstrip()).toEqual('a');
    expect('bab'.rstrip('b')).toEqual('ba');
    expect(' ababb'.rstrip('ab')).toEqual(' ');
  });

  it('strip', function () {
    expect(' a '.strip()).toEqual('a');
    expect('a '.strip()).toEqual('a');
    expect('bab'.strip('b')).toEqual('a');
    expect('ababb ababb'.strip('ab')).toEqual(' ');
  });
});
