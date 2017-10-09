// shim that gets rid of react-polyfills warning while running tests
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};