pythonjs (python like function for javascript)
===============================================

This is JavaScript like Python.
String, Array object extend to a python functions.

extend
------

String
~~~~~~

count, title, capitalize, strip, lstrip, rstrip, center, endswith, startswith, expandtabs, isalpha, isalnum, isdigit, islower, isupper, isspace, rjust, ljust, rsplit, lsplit, splitlines, format, zfill

Array
~~~~~

count, remove, extend

standard library
----------------

need import.

::

  pymodule.Import('collections');
  new collections.Counter();

  or

  var package = {};
  pymodule.Import('collections', package);
  new package.collections.Counter();

collections
~~~~~~~~~~~

Counter

License
-------

This Source is released under the MIT License(http://opensource.org/licenses/MIT).
