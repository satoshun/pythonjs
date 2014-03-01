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
          length = this.length;
      if (chars === undef) {
        while (start < length && this.charAt(start) === ' ') start++;
      } else {
        while (start < length && chars.indexOf(this[start]) !== -1) start++;
      }
      return this.slice(start);
    },
    rstrip: function rstrip (chars) {
      var length = this.length,
          end = length - 1;
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
    expandtabs: function expandtabs (length) {
      var s = String(this);
      return s.replace(/\s/g, function (tab) {
        return repeatString(' ', length);
      });
    },
    isalnum: function isalnum () {
      return (this.match(/^\w*$/) || [''])[0] === String(this);
    },
    isalpha: function isalpha () {
      return (this.match(/^[a-zA-Z]*$/) || [''])[0] === String(this);
    },
    isdigit: function isdigit () {
      return (this.match(/^\d*$/) || [''])[0] === String(this);
    },
    islower: function islower () {
      return (this.match(/^[a-z]*$/) || [''])[0] === String(this);
    },
    isupper: function isupper () {
      return (this.match(/^[A-Z]*$/) || [''])[0] === String(this);
    },
    isspace: function isspace () {
      return (this.match(/^\s*$/) || [''])[0] === String(this);
    },
    rjust: function rjust (length, char) {
      if (this.length >= length) return this;
      if (char === undef) char = ' ';
      return repeatString(char, length - this.length) + this;
    },
    ljust: function ljust (length, char) {
      if (this.length >= length) return this;
      if (char === undef) char = ' ';
      return this + repeatString(char, length - this.length);
    }
  });

  function repeatString(char, length) {
    return new Array(length + 1).join(char);
  }

} (this));
