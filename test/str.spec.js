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

  it('isalnum', function () {
    expect('abc'.isalnum()).toEqual(true);
    expect('1abc2'.isalnum()).toEqual(true);
    expect('1AZabc2'.isalnum()).toEqual(true);
    expect(' abc'.isalnum()).toEqual(false);
    expect('abc\n'.isalnum()).toEqual(false);
  });

  it('isalpha', function () {
    expect('abc'.isalpha()).toEqual(true);
    expect('Abc'.isalpha()).toEqual(true);
    expect('1abc2'.isalpha()).toEqual(false);
    expect('1AZabc2'.isalpha()).toEqual(false);
    expect(' abc'.isalpha()).toEqual(false);
    expect('abc\n'.isalpha()).toEqual(false);
  });

  it('isdigit', function () {
    expect('123'.isdigit()).toEqual(true);
    expect('0123'.isdigit()).toEqual(true);
    expect('0123a'.isdigit()).toEqual(false);
    expect('0123 '.isdigit()).toEqual(false);
    expect('01a23'.isdigit()).toEqual(false);
  });

  it('islower', function () {
    expect('abc'.islower()).toEqual(true);
    expect('abcde'.islower()).toEqual(true);
    expect('Abc'.islower()).toEqual(false);
    expect('ab '.islower()).toEqual(false);
    expect('a1bc'.islower()).toEqual(false);
  });

  it('isupper', function () {
    expect('ABC'.isupper()).toEqual(true);
    expect('ABCDE'.isupper()).toEqual(true);
    expect('ABc'.isupper()).toEqual(false);
    expect('AB '.isupper()).toEqual(false);
    expect('A1BC'.isupper()).toEqual(false);
  });

  it('isspace', function () {
    expect(' '.isspace()).toEqual(true);
    expect('  '.isspace()).toEqual(true);
    expect(' a'.isspace()).toEqual(false);
    expect(' 1 '.isspace()).toEqual(false);
  });

  it('rjust', function () {
    expect('abc'.rjust(5)).toEqual('  abc');
    expect(' abc'.rjust(5)).toEqual('  abc');
    expect('abc'.rjust(5, 'd')).toEqual('ddabc');
    expect('abc '.rjust(5, 'd')).toEqual('dabc ');
  });

  it('ljust', function () {
    expect('abc'.ljust(5)).toEqual('abc  ');
    expect('abc '.ljust(5)).toEqual('abc  ');
    expect('abc'.ljust(5, 'd')).toEqual('abcdd');
    expect('abc '.ljust(5, 'd')).toEqual('abc d');
  });

  it('rsplit', function () {
    expect('abc\nhoge'.rsplit('\n', 1)).toEqual(['abc', 'hoge']);
    expect('hoge\nabc\nhoge'.rsplit()).toEqual(['hoge', 'abc', 'hoge']);
    expect('hoge\nabc\nhoge'.rsplit('\n', 1)).toEqual(['hoge\nabc', 'hoge']);
    expect('hogea\nhoge\nabc\nhoge'.rsplit('\n', 2)).toEqual(['hogea\nhoge', 'abc', 'hoge']);
    expect(''.rsplit('\n', 10)).toEqual(['']);
    expect('bas'.rsplit('\n', 10)).toEqual(['bas']);
  });

  it('lsplit', function () {
    expect('abc\nhoge'.lsplit('\n', 1)).toEqual(['abc', 'hoge']);
    expect('hoge\nabc\nhoge'.lsplit()).toEqual(['hoge', 'abc', 'hoge']);
    expect('hoge\nabc\nhoge'.lsplit('\n', 1)).toEqual(['hoge', 'abc\nhoge']);
    expect('hogea\nhoge\nabc\nhoge'.lsplit('\n', 2)).toEqual(['hogea', 'hoge', 'abc\nhoge']);
    expect(''.lsplit('\n', 10)).toEqual(['']);
    expect('bas'.lsplit('\n', 10)).toEqual(['bas']);
  });

  it('format', function () {
    expect('{}'.format('hogehoge')).toEqual('hogehoge');
    expect('{} {}'.format('hogehoge', 'gaa')).toEqual('hogehoge gaa');

    expect('{hoge}'.format({hoge: 'gaa'})).toEqual('gaa');
    expect('{hoge} {hoge}'.format({hoge: 'gaa'})).toEqual('gaa gaa');
    expect('{hoge} {huga} {hoge}'.format({hoge: 'gaa', huga: 'bbd'})).toEqual('gaa bbd gaa');

    expect('{0}'.format('gaa')).toEqual('gaa');
    expect('{0} {0}'.format('gaa')).toEqual('gaa gaa');
    expect('{0} {1} {0}'.format('gaa', 'duu')).toEqual('gaa duu gaa');
    expect('{0} {3} {1} {0} {2}'.format('gaa', 'duu', 'buu', 'ccc')).toEqual('gaa ccc duu gaa buu');

    expect('{0} {hoge}'.format('gaa', {hoge: 'hoge'})).toEqual('gaa hoge');
    expect('{0} {hoge} {1}'.format('gaa', 'nii', {hoge: 'hoge'})).toEqual('gaa hoge nii');
    expect('{0} {hoge} {1} {huga}'.format('gaa', 'nii', {hoge: 'hoge', 'huga': 'huga'})).toEqual('gaa hoge nii huga');
  });

  it('zfill', function () {
    expect('hoge'.zfill(10)).toEqual('000000hoge');
    expect('hoge'.zfill(3)).toEqual('hoge');
    expect('0a'.zfill(4)).toEqual('000a');
  });
});
