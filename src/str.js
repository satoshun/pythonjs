(function (root) {
  var
    _ = root._,
    undef = void 0;

  _.extend(String.prototype, {
    count: function count (key) {
      if (key === undef) return 0;
      return (this.match(new RegExp(key, 'g')) || []).length;
    },
    title: function title () {
      return this.replace(/[a-zA-Z]\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
    }
  });

} (this));
