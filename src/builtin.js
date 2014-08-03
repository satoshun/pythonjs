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
      return obj[key] || defaultValue;
    },
    globals: function() {
      var props = [];
      for (var key in root) {
        if (hasOwnProperty.call(root, key)) props.push(key);
      }
      return props;
    },
    hasattr: function(obj, key) {
      return hasOwnProperty.call(obj, key) || !!obj[key];
    },
    isinstance: function(obj, classinfo) {
      return obj instanceof classinfo;
    },
    max: function(iterable) {
      return Math.max.apply(null, iterable);
    },
    min: function(iterable) {
      return Math.min.apply(null, iterable);
    },
    range: _.range
  });
}(this));
