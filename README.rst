pythonjs (implemented Python functions)
==============================================

This is implemented Python functions.
String, Array object extend a Python functions.

implement methods
-----------------

String
~~~~~~

count, title, capitalize, strip, lstrip, rstrip, center, endswith, startswith, expandtabs, isalpha, isalnum, isdigit, islower, isupper, isspace, rjust, ljust, rsplit, lsplit, splitlines, format, zfill

Array
~~~~~

count, remove, extend


builtin
~~~~~~~

py set in Window object.

py has under functions.

::

  abs, all, any, bool, callable, chr, dir, getattr, globals, hasattr, isinstance, min, max, range.

for example

::

  console.log(py.all([1, false])); // false
  console.log(py.any([1, false])); // true


development
-----------

::

  $ npm install
  $ gulp test  # test
  $ gulp build # update python.js 


License
-------

This Source is released under the MIT License(http://opensource.org/licenses/MIT).
