(function(root, undefined) {
  'use strict';

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  root.py = root.py || {};
  _.extend(root.py, {
    abs: Math.abs,
    all: function all(iterable) {
      var i = 0, len = iterable.length;
      for (; i < len; i++) {
        if (!iterable[i]) return false;
      }
      return true;
    },
    any: function any(iterable) {
      var i = 0, len = iterable.length;
      for (; i < len; i++) {
        if (iterable[i]) return true;
      }
      return false;
    },
    bool: function(x) {
      return !!x;
    },
    callable: function(x) {
      return typeof x === 'function';
    },
    chr: String.fromCharCode,
    dir: function dir(obj) {
      var props = [];
      for (var key in obj) {
        props.push(key);
      }
      return props;
    },
    getattr: function(obj, key, defaultValue) {
      if (hasOwnProperty.call(obj, key)) return obj[key];
      return defaultValue;
    }
  });
}(this));
