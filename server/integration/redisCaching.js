const cache = new Map();

const setCache = (key, value) => {
  cache.set(key, value);
};

const getCache = (key) => {
  return cache.get(key);
};

module.exports = {
  setCache,
  getCache,
};