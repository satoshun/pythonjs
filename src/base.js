(function (root) {
  root.pymoudle = root.pymoudle || {};

  _.extend(root.pymoudle, {
    Import: function Import (path) {
      root.pymoudle[path]();
    },
  });
} (this));
