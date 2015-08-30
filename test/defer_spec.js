require('es6-promise').polyfill();
import defer from '../src/defer';
import expect from 'expect';

describe('defer', () => {
  let fail = () => expect(true).toBe(false);

  describe('should return an object', () => {
    let def = defer();

    it('with promise', () => {
      expect(def.promise instanceof Promise).toBe(true);
    });

    it('with resolve', () => {
      expect(typeof def.resolve).toBe('function');
    });

    it('with rejected', () => {
      expect(typeof def.reject).toBe('function');
    });
  });

  describe('resolve', () => {
    it('should resolve the promise', done => {
      let def = defer();
      def.promise.then(foo => {
        expect(foo).toBe(1);
        done();
      }).catch(bar => {
        fail();
        done();
      });

      def.resolve(1);
    });
  });

  describe('reject', () => {
    it('should reject the promise', done => {
      let def = defer();
      def.promise.then(foo => {
        fail();
        done();
      }).catch(bar => {
        expect(bar).toBe(1);
        done();
      });

      def.reject(1);
    });
  });

  it('does not allow anyone to alter the object', () => {
    let def = defer();
    try {
      def.foo = 1;
      fail();
    } catch (e) {
      expect(true).toBe(true);
    }
  });
});
