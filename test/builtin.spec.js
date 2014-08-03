describe('global builtin test', function() {
  it('abs', function() {
    expect(10).toEqual(py.abs(-10));
    expect(10).toEqual(py.abs(10));

    expect(10.1).toEqual(py.abs(-10.1));
    expect(10.1).toEqual(py.abs(10.1));
  });
});
