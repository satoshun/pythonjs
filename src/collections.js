(function (root) {
  root.pymoudle = root.pymoudle || {};

  var slice = Array.prototype.slice,
      undef = void 0;
  root.pymoudle.collections = function () {
    root.collections = root.collections || {};

    root.collections.Counter = function Counter () {
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

    root.collections.Counter.prototype = {
      mostCommon: function mostCommon (n) {
        var items = this.items.sort(function (a, b) {
          return a[1] <= b[1];
        });
        if (n === undef) return items;
        return items.slice(0, n);
      }
    };

    function setOwnProperty (src, dict, store) {
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
