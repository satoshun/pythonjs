(function (root) {
  root.pymoudle = root.pymoudle || {};

  var
    undef = void 0;

  _.extend(root.pymoudle, {
    Import: function Import (path, scope) {
      if (scope === undef) scope = root;
      root.pymoudle[path](scope);
    },
  });
} (this));
