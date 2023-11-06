// src/utils/CacheCollection.js
/**
 * Creates a collection of unique values in local storage
 * Works with arrays only
 * Singleton method to allow sharing between classes without adding extra stuff
 */
class CacheCollection {
  constructor(key, expire = 1200) {
    this.key = key;
    this.expire = expire;
    this.items = this.getall();
  }
  add(el) {
    if (!this.has(el) && el !== '') {
      this.items.push(el.toString() || el);
      console.log('[CacheCollection] add: ', el, this.items);
    }
    this.store();
  }
  del(el) {
    let idx = this.indexOf(el);
    if (idx !== -1) {
      this.items.splice(idx, 1);
    }
    this.store();
  }
  has(el) {
    return this.indexOf(el) !== -1;
  }
  indexOf(el) {
    el = el.toString() || el;
    return this.items.indexOf(el);
  }
  store() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
    localStorage.setItem(this.key + ':ts', Date.now());
  }

  getall() {
    let stored = localStorage.getItem(this.key);
    console.log(stored);
    return this.isExpired() || !stored ? [] : JSON.parse(stored);
  }

  isExpired() {
    let whenCached = localStorage.getItem(this.key + ':ts');
    let age = (Date.now() - whenCached) / 1000;
    console.log('[CachedColletion] is Expired', age > this.expire);
    if (age > this.expire) {
      this.clear();
      return true;
    } else {
      return false;
    }
  }
  clear() {
    localStorage.removeItem(this.key);
    localStorage.removeItem(this.key + ':ts');
  }
}
/**
 * Caches objects as singletons. Alternative, can ignore this.items and just load
 * always from localStorage.
 * @type {Object}
 */

let cache = {};
/**
 * [getSingleton description]
 * @method getSingleton
 * @param  {string}     key           Key for localStorage
 * @param  {Number}     [expire=1200] Expiration time in seconds
 * @param  {String}     [sep=',']     separator in case. Default: ,
 * @return {CacheCollection}          A singleton of CacheCollection
 */
function getSingleton(key, expire = 1200) {
  if (!cache.hasOwnProperty(key)) {
    // console.log('[getSingleton] Not in cache');
    cache[key] = new CacheCollection(key, expire);
  }
  // console.log('[getSingleton]', cache[key]);
  return cache[key];
}

export { getSingleton, CacheCollection };
