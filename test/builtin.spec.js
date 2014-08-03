describe('global builtin test', function() {
  it('abs', function() {
    expect(10).toEqual(py.abs(-10));
    expect(10).toEqual(py.abs(10));

    expect(10.1).toEqual(py.abs(-10.1));
    expect(10.1).toEqual(py.abs(10.1));
  });

  it('all', function() {
    expect(true).toEqual(py.all([1,4, -1]));
    expect(true).toEqual(py.all([true, -1, 1]));
    expect(true).toEqual(py.all(['0', 'false']));

    expect(false).toEqual(py.all([1,4, 0]));
    expect(false).toEqual(py.all([false, true, true, false]));
  });
});
