(function (root) {
  var
    _ = root._,
    undef = void 0;

  if (root.Array.prototype.filter === undef) {
    Array.prototype.filter = function (fun) {
      if (this === undef || this === null) throw new TypeError();

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun != "function") throw new TypeError();

      var res = [],
          thisArg = arguments.length >= 2 ? arguments[1] : undef;
      for (var i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i];
          if (fun.call(thisArg, val, i, t)) res.push(val);
        }
      }
      return res;
    };
  }

  _.extend(root.Array.prototype, {
    count: function count(value) {
      return this.filter(function (v) {
        return v === value;
      }).length;
    },
    remove: function remove(value) {
      var index = this.indexOf(value);
      if (index !== -1) this.splice(index, 1);
    },
    extend: function extend(target) {
      this.push.apply(this, target);
    },
    copy: function copy() {
      return _.clone(this);
    }
  });
} (this));

(function (root) {
  root.pymoudle = root.pymoudle || {};

  var
    undef = void 0;

  _.extend(root.pymoudle, {
    Import: function Import(path, scope) {
      if (scope === undef) scope = root;
      root.pymoudle[path](scope);
    },
  });
} (this));

(function (root) {
  root.pymoudle = root.pymoudle || {};

  var
    slice = Array.prototype.slice,
    undef = void 0;

  root.pymoudle.collections = function (scope) {
    scope.collections = scope.collections || {};

    scope.collections.Counter = function Counter() {
      var kwargs = slice.call(arguments),
          tmp = {};
      this.items = [];
      for (var i = 0, li = kwargs.length; i < li; i++) {
        if (typeof kwargs[i] === 'string') {
          for (var j = 0, lj = kwargs[i].length; j < lj; j++) {
            tmp[kwargs[i][j]] = tmp[kwargs[i][j]] || 0;
            tmp[kwargs[i][j]] += 1;
          }
        }
        else setOwnProperty(this, kwargs[i], this.items);
      }
      setOwnProperty(this, tmp, this.items);
    };

    scope.collections.Counter.prototype = {
      mostCommon: function mostCommon(n) {
        var items = this.items.sort(function (a, b) {
          return a[1] <= b[1];
        });
        if (n === undef) return items;
        return items.slice(0, n);
      }
    };

    function setOwnProperty(src, dict, store) {
      for (var key in dict) {
        if (dict.hasOwnProperty(key)) {
          if (src[key] === undef) {
            src[key] = dict[key];
          } else {
            src[key] += dict[key];
            if (store !== undef) {
              var i = 0;
              while (store.length > i) {
                if (store[i][0] === key) {
                  store.splice(i, 1);
                  break;
                }
                i++;
              }
            }
          }
          if (store !== undef) store.push([key, src[key]]);
        }
      }
    }
  };

} (this));

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
