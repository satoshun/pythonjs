describe('collections spec test', function () {
  it('initialize spec', function () {
    var c = new collections.Counter({a: 10, b: 20});
    expect(c.a).toEqual(10);
    expect(c.b).toEqual(20);

    c = new collections.Counter({a: 10, b: 20}, {c: 100, d: 1000});
    expect(c.a).toEqual(10);
    expect(c.b).toEqual(20);
    expect(c.c).toEqual(100);
    expect(c.d).toEqual(1000);

    c = new collections.Counter('AABBA');
    expect(c.A).toEqual(3);
    expect(c.B).toEqual(2);

    c = new collections.Counter({'A': 10}, 'AABBA');
    expect(c.A).toEqual(13);
    expect(c.B).toEqual(2);
    expect(c.items).toEqual([['A', 13], ['B', 2]]);
  });

  it('mostCommon', function () {
    var c = new collections.Counter({a: 10, b: 20});
    expect(c.mostCommon()).toEqual([['b', 20], ['a', 10]]);
    expect(c.mostCommon(1)).toEqual([['b', 20]]);
    expect(c.mostCommon(0)).toEqual([]);

    c = new collections.Counter({a: 10, b: 20, d: 40, e: -1});
    expect(c.mostCommon()).toEqual([['d', 40], ['b', 20], ['a', 10], ['e', -1]]);
    expect(c.mostCommon(2)).toEqual([['d', 40], ['b', 20]]);
    expect(c.mostCommon(1)).toEqual([['d', 40]]);

    c = new collections.Counter('addbbd', {a: 10, b: 10, d: 10});
    expect(c.mostCommon()).toEqual([['d', 13], ['b', 12], ['a', 11]]);
  });
});
