!(function () {
  var e = {
      './src/index.js': function (e, r, n) {
        'use strict';
        n.r(r),
          n.d(r, {
            variableWithLongNameFive: function () {
              return a;
            },
            variableWithLongNameFour: function () {
              return u;
            },
            variableWithLongNameOne: function () {
              return t;
            },
            variableWithLongNameSix: function () {
              return f;
            },
            variableWithLongNameThree: function () {
              return i;
            },
            variableWithLongNameTwo: function () {
              return o;
            },
          });
        let t = 'one',
          o = 'two',
          i = 'three',
          u = 'four',
          a = 'five',
          f = 'six';
      },
    },
    r = {};
  function n(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var i = (r[t] = { exports: {} });
    return e[t](i, i.exports, n), i.exports;
  }
  (n.d = function (e, r) {
    for (var t in r)
      n.o(r, t) &&
        !n.o(e, t) &&
        Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
  }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    n('./src/index.js');
})();
