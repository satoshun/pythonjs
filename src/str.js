(function (root) {
  var
    _ = root._,
    undef = void 0;

  _.extend(root.String.prototype, {
    count: function count(key) {
      if (key === undef) return 0;
      return (this.match(new RegExp(key, 'g')) || []).length;
    },
    title: function title() {
      var s = String(this);
      return s.replace(/[a-zA-Z]\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
    },
    capitalize: function capitalize() {
      return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    },
    lstrip: function lstrip(chars) {
      var start = 0,
          length = this.length;
      if (chars === undef) {
        while (start < length && this.charAt(start) === ' ') start++;
      } else {
        while (start < length && chars.indexOf(this[start]) !== -1) start++;
      }
      return this.slice(start);
    },
    rstrip: function rstrip(chars) {
      var length = this.length,
          end = length - 1;
      if (chars === undef) {
        while (end >= 0 && this.charAt(end) === ' ') end--;
      } else {
        while (end >= 0 && chars.indexOf(this[end]) !== -1) end--;
      }
      return this.slice(0, end + 1);
    },
    strip: function strip(chars) {
      return this.lstrip(chars).rstrip(chars);
    },
    center: function center(length, char) {
      var r, l;
      if (this.length >= length) return this;
      if (char === undef) char = ' ';
      length -= this.length;
      r = l = Math.floor(length / 2);
      if (this.length % 2 === 0) r += (length % 2);
      else l += (length % 2);
      return repeatString(char, r) + this + repeatString(char, l);
    },
    endswith: function endswith(chars) {
      return this.slice(this.length - chars.length) === chars;
    },
    startswith: function startswith(chars) {
      return this.slice(0, chars.length) === chars;
    },
    expandtabs: function expandtabs(length) {
      var s = String(this);
      return s.replace(/\s/g, function (tab) {
        return repeatString(' ', length);
      });
    },
    isalnum: function isalnum() {
      return (this.match(/^\w*$/) || [''])[0] === String(this);
    },
    isalpha: function isalpha() {
      return (this.match(/^[a-zA-Z]*$/) || [''])[0] === String(this);
    },
    isdigit: function isdigit() {
      return (this.match(/^\d*$/) || [''])[0] === String(this);
    },
    islower: function islower() {
      return (this.match(/^[a-z]*$/) || [''])[0] === String(this);
    },
    isupper: function isupper() {
      return (this.match(/^[A-Z]*$/) || [''])[0] === String(this);
    },
    isspace: function isspace() {
      return (this.match(/^\s*$/) || [''])[0] === String(this);
    },
    rjust: function rjust(length, char) {
      if (this.length >= length) return this;
      if (char === undef) char = ' ';
      return repeatString(char, length - this.length) + this;
    },
    ljust: function ljust(length, char) {
      if (this.length >= length) return this;
      if (char === undef) char = ' ';
      return this + repeatString(char, length - this.length);
    },
    rsplit: function rsplit(char, num) {
      var words, start = 0, end;
      if (char === undef) char = '\n';
      words = this.split(char);
      if (num === undef || num >= words.length - 1) return words;

      end = words.length;
      num = end - num - 1;
      for (; num > start && end > start; start++) {
        words[start + 1] = words[start] + char + words[start + 1];
      }
      return words.slice(start, end);
    },
    lsplit: function lsplit(char, num) {
      var words, start = 0, end, length;
      if (char === undef) char = '\n';
      words = this.split(char);
      if (num === undef || num >= words.length - 1) return words;

      end = length = words.length;
      num = length - num - 1;
      for (; num > (length - end) && end > start; end--) {
        words[end - 2] = words[end - 2] + char + words[end - 1];
      }
      return words.slice(start, end);
    },
    splitlines: function splitlines(keepend) {
      var words = this.split('\n');
      if (keepend) {
        for (var i = 0, l = words.length - 1; i < l; i++) {
          words[i] += '\n';
        }
      }

      return words[words.length - 1] === '' || words[words.length - 1] === '\n' ? words.slice(0, words.length - 1) : words;
    },
    format: function format() {
      var s = String(this),
          values = Array.prototype.slice.call(arguments),
          value, length = values.length, i = 0, index = 0,
          indexFlag = !!(this.match(/\{0\}/));

      for (; i < length; i++) {
        value = values[i];
        if (typeof value === 'string') {
          if (indexFlag) s = s.split('{' + index + '}').join(value);
          else s = s.replace('{}', value);
          index++;
        } else {
          for (var key in value) {
            if (value.hasOwnProperty(key)) {
              s = s.split('{' + key + '}').join(value[key]);
            }
          }
        }
      }

      return s;
    },
    zfill: function zfill(length) {
      return this.rjust(length, '0');
    }
  });

  function repeatString(char, length) {
    return new Array(length + 1).join(char);
  }

} (this));
