README
=================

Determinate the type of a variable

#### Installation

``
$ npm install object-typeof
``

#### Usage


##### is([type], value)

```javascript

var object = require('object-typeof');
var myObject = {
	name: 'foo'
};
object.is(myObject); // 'object'
object.is('object', myObject); // true
object.is('object', 1); // false
object.is(1); // 'number'

```

##### isNumber(value)

```javascript

var object = require('object-typeof');

object.isNumber(123); // true
object.isNumber('foo'); // false

```

##### isBoolean(value)

```javascript

var object = require('object-typeof');

object.isBoolean(false); // true
object.isBoolean(null); // false

```

##### isUndefined(value)

```javascript

var object = require('object-typeof');

object.isUndefined(undefined); // true
object.isUndefined(true); // false

```

##### isString(value)

```javascript

var object = require('object-typeof');

object.isNumber(123); // true
object.isNumber('foo'); // false

```

##### isObject(value)

```javascript

var object = require('object-typeof');

object.isObject({
	name: 'foo'
}); 
// true
object.isObject('bar'); // false

```

##### isArray(value)

```javascript

var object = require('object-typeof');

object.isArray([]); // true
object.isArray('foo'); // false

```

##### isNull(value)

```javascript

var object = require('object-typeof');

object.isNull(null); // true
object.isNull('foo'); // false

```

##### isBuffer(value)

```javascript

var object = require('object-typeof');

object.isBuffer(new Buffer(0)); // true
object.isBuffer(true); // false

```