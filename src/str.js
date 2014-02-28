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
    },
    capitalize: function capitalize () {
      return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    },
    lstrip: function lstrip (chars) {
      var start = 0,
          len = this.length;
      if (chars === undef) {
        while (start < len && this.charAt(start) === ' ') start++;
      } else {
        while (start < len && chars.indexOf(this[start]) !== -1) start++;
      }
      return this.slice(start);
    },
    rstrip: function rstrip (chars) {
      var len = this.length
          end = len - 1;
      if (chars === undef) {
        while (end >= 0 && this.charAt(end) === ' ') end--;
      } else {
        while (end >= 0 && chars.indexOf(this[end]) !== -1) end--;
      }
      return this.slice(0, end + 1);
    }
  });

} (this));
