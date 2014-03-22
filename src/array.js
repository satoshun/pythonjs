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
    }
  });
} (this));
