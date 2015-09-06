# defer [![Build Status](https://travis-ci.org/mvader/es6-defer.svg)](https://travis-ci.org/mvader/es6-defer)
A deferred for EcmaScript 6.

It works just like [Q](https://github.com/kriskowal/q)'s deferred but they use EcmaScript 6 promises underneath.

You can install it from npm.
```
npm install es6-defer
```

**Example:**
```javascript
import defer from 'es6-defer';

let deferred = defer();

deferred.promise.then(foo);

deferred.resolve(true);
deferred.reject(false);
```

It's entirely written in ES6 and requires ES6 promises but does not include them. It is your responsibility to include it.
