# defer [![Build Status](https://travis-ci.org/mvader/defer.svg)](https://travis-ci.org/mvader/defer)
A deferred for EcmaScript 6.

It works just like [Q](https://github.com/kriskowal/q)'s deferred but they use EcmaScript 6 promises underneath.

**Example:**
```javascript
import defer from 'defer';

let deferred = defer();

deferred.promise.then(foo);

deferred.resolve(true);
deferred.reject(false);
```

It's entirely written in ES6 and requires ES6 promises but does not include them. It is your responsibility to include it.
