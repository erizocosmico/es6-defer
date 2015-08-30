/**
 * Defer returns a deferred object. It contains a promise and a method to
 * resolve it or reject it.
 *
 * @return {Object}
 */
export default function defer() {
  let _resolve, _reject;
  let promise = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });

  return Object.freeze(Object.create({}, {
    resolve: {
      value: _resolve,
      enumerable: true
    },
    reject: {
      value: _reject,
      enumerable: true
    },
    promise: {
      value: promise,
      enumerable: true
    }
  }));
}
