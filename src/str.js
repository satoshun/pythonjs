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
      var s = String(this);
      return s.replace(/[a-zA-Z]\S*/g, function (word) {
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
      var len = this.length,
          end = len - 1;
      if (chars === undef) {
        while (end >= 0 && this.charAt(end) === ' ') end--;
      } else {
        while (end >= 0 && chars.indexOf(this[end]) !== -1) end--;
      }
      return this.slice(0, end + 1);
    },
    strip: function strip (chars) {
      return this.lstrip(chars).rstrip(chars);
    },
    center: function center (length, char) {
      var r, l;
      if (this.length >= length) return this;
      if (char === undef) char = ' ';
      length -= this.length;
      r = l = Math.floor(length / 2);
      if (this.length % 2 === 0) r += (length % 2);
      else l += (length % 2);
      return repeatString(char, r) + this + repeatString(char, l);
    },
    endswith: function endswith (chars) {
      return this.slice(this.length - chars.length) === chars;
    },
    startswith: function startswith (chars) {
      return this.slice(0, chars.length) === chars;
    },
  });

  function repeatString(char, length) {
    return new Array(length + 1).join(char);
  }

} (this));
