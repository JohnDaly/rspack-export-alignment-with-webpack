/*! For license information please see main.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      d: (o, r) => {
        for (var a in r)
          e.o(r, a) &&
            !e.o(o, a) &&
            Object.defineProperty(o, a, { enumerable: !0, get: r[a] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    o = {};
  e.r(o),
    e.d(o, {
      variableWithLongNameFive: () => n,
      variableWithLongNameFour: () => i,
      variableWithLongNameOne: () => r,
      variableWithLongNameSix: () => l,
      variableWithLongNameThree: () => t,
      variableWithLongNameTwo: () => a,
    });
  const r = 'one',
    a = 'two',
    t = 'three',
    i = 'four',
    n = 'five',
    l = 'six';
})();
