function deepFreeze(obj) {
  if (Array.isArray(obj)) {
    obj.forEach((item) => deepFreeze(item));
  }
  return Object.freeze(obj);
}

module.exports = { deepFreeze };
