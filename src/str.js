(function (root) {
  var
    _ = root._,
    undef = void 0;

  _.extend(String.prototype, {
    count: function count (key) {
      if (key === undef) return 0;
      return (this.match(new RegExp(key, 'g')) || []).length;
    }
  });

} (this));
