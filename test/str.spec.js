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

  it('center', function () {
    expect('abc'.center(9)).toEqual('   abc   ');
    expect('abc'.center(8)).toEqual('  abc   ');
    expect('abcd'.center(7)).toEqual('  abcd ');
    expect('abc'.center(4, 'd')).toEqual('abcd');
    expect('abc'.center(7, 'e')).toEqual('eeabcee');
  });

  it('startswith', function () {
    expect('abc'.startswith('a')).toEqual(true);
    expect('abc'.startswith('ab')).toEqual(true);
    expect('abc'.startswith('d')).toEqual(false);
  });

  it('endswith', function () {
    expect('abc'.endswith('c')).toEqual(true);
    expect('abc'.endswith('bc')).toEqual(true);
    expect('abc'.endswith('d')).toEqual(false);
  });

  it('expandtabs', function () {
    expect('\tabc'.expandtabs(10)).toEqual('          abc');
    expect('ab\tc\t'.expandtabs(3)).toEqual('ab   c   ');
  });
});
