(function(root, undefined) {
  'use strict';

  root.py = root.py || {};
  _.extend(root.py, {
    abs: Math.abs,
    all: function all(iterable) {
      var i = 0, len = iterable.length;
      for (; i < len; i++) {
        if (!iterable[i]) return false;
      }
      return true;
    }
  });
}(this));
