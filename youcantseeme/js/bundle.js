webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(92);



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        });
      default:
        return Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? f2 : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b);
        }) : Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(33);
var hide = __webpack_require__(19);
var redefine = __webpack_require__(20);
var ctx = __webpack_require__(28);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry1;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlaceholder__ = __webpack_require__(92);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(__WEBPACK_IMPORTED_MODULE_0__isPlaceholder__["a" /* default */])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curry3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isPlaceholder__ = __webpack_require__(92);




/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? f3 : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(a) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_a) {
          return fn(_a, b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(b) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_b) {
          return fn(a, _b, c);
        }) : Object(__WEBPACK_IMPORTED_MODULE_2__isPlaceholder__["a" /* default */])(c) ? Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(78)('wks');
var uid = __webpack_require__(50);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(157);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(36);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _dispatchable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isTransformer__ = __webpack_require__(137);



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_1__isTransformer__["a" /* default */])(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_curryN__ = __webpack_require__(94);





/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function curryN(length, fn) {
  if (length === 1) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(fn);
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(length, Object(__WEBPACK_IMPORTED_MODULE_3__internal_curryN__["a" /* default */])(length, [], fn));
});
/* harmony default export */ __webpack_exports__["a"] = (curryN);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _has;
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(49);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var hide = __webpack_require__(19);
var has = __webpack_require__(18);
var SRC = __webpack_require__(50)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(33).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var fails = __webpack_require__(6);
var defined = __webpack_require__(35);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xmap__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(41);








/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/map', 'map'], __WEBPACK_IMPORTED_MODULE_4__internal_xmap__["a" /* default */], function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return Object(__WEBPACK_IMPORTED_MODULE_5__curryN__["a" /* default */])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, Object(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(functor));
    default:
      return Object(__WEBPACK_IMPORTED_MODULE_2__internal_map__["a" /* default */])(fn, functor);
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (map);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(69);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(70);
var createDesc = __webpack_require__(49);
var toIObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(34);
var has = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(157);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(18);
var toObject = __webpack_require__(14);
var IE_PROTO = __webpack_require__(110)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xwrap__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind__ = __webpack_require__(200);




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](Object(__WEBPACK_IMPORTED_MODULE_2__bind__["a" /* default */])(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = Object(__WEBPACK_IMPORTED_MODULE_1__xwrap__["a" /* default */])(fn);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_equals__ = __webpack_require__(506);



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function equals(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_equals__["a" /* default */])(a, b, [], []);
});
/* harmony default export */ __webpack_exports__["a"] = (equals);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(6);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _concat;
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(3);



/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
/* harmony default export */ __webpack_exports__["a"] = (slice);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(1);
var core = __webpack_require__(33);
var fails = __webpack_require__(6);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(28);
var IObject = __webpack_require__(69);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(11);
var asc = __webpack_require__(127);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arity;
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArguments__ = __webpack_require__(201);




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArguments__["a" /* default */])(obj);
  for (prop in obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_keys);
/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(26);



/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (reduce);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(9)) {
  var LIBRARY = __webpack_require__(51);
  var global = __webpack_require__(5);
  var fails = __webpack_require__(6);
  var $export = __webpack_require__(1);
  var $typed = __webpack_require__(88);
  var $buffer = __webpack_require__(133);
  var ctx = __webpack_require__(28);
  var anInstance = __webpack_require__(57);
  var propertyDesc = __webpack_require__(49);
  var hide = __webpack_require__(19);
  var redefineAll = __webpack_require__(59);
  var toInteger = __webpack_require__(36);
  var toLength = __webpack_require__(11);
  var toIndex = __webpack_require__(183);
  var toAbsoluteIndex = __webpack_require__(53);
  var toPrimitive = __webpack_require__(34);
  var has = __webpack_require__(18);
  var classof = __webpack_require__(71);
  var isObject = __webpack_require__(7);
  var toObject = __webpack_require__(14);
  var isArrayIter = __webpack_require__(124);
  var create = __webpack_require__(54);
  var getPrototypeOf = __webpack_require__(25);
  var gOPN = __webpack_require__(55).f;
  var getIterFn = __webpack_require__(126);
  var uid = __webpack_require__(50);
  var wks = __webpack_require__(8);
  var createArrayMethod = __webpack_require__(38);
  var createArrayIncludes = __webpack_require__(79);
  var speciesConstructor = __webpack_require__(86);
  var ArrayIterators = __webpack_require__(129);
  var Iterators = __webpack_require__(62);
  var $iterDetect = __webpack_require__(83);
  var setSpecies = __webpack_require__(56);
  var arrayFill = __webpack_require__(128);
  var arrayCopyWithin = __webpack_require__(173);
  var $DP = __webpack_require__(10);
  var $GOPD = __webpack_require__(24);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(178);
var $export = __webpack_require__(1);
var shared = __webpack_require__(78)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(181))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(50)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(18);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(6)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(8)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(19)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ __webpack_exports__["a"] = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _reduced;
function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(159);
var enumBugKeys = __webpack_require__(111);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(36);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(160);
var enumBugKeys = __webpack_require__(111);
var IE_PROTO = __webpack_require__(110)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(108)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(112).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(159);
var hiddenKeys = __webpack_require__(111).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var dP = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(8)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(28);
var call = __webpack_require__(171);
var isArrayIter = __webpack_require__(124);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(11);
var getIterFn = __webpack_require__(126);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(20);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(18);
var TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var defined = __webpack_require__(35);
var fails = __webpack_require__(6);
var spaces = __webpack_require__(114);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function always(val) {
  return function () {
    return val;
  };
});
/* harmony default export */ __webpack_exports__["a"] = (always);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function max(a, b) {
  return b > a ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (max);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
/* harmony default export */ __webpack_exports__["a"] = (path);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _contains;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexOf__ = __webpack_require__(217);


function _contains(a, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__indexOf__["a" /* default */])(list, a, 0) >= 0;
}

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(29);
var TAG = __webpack_require__(8)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop__ = __webpack_require__(138);




/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pluck(p, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__prop__["a" /* default */])(p), list);
});
/* harmony default export */ __webpack_exports__["a"] = (pluck);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isString;
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _checkForMethod;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray__ = __webpack_require__(47);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return Object(__WEBPACK_IMPORTED_MODULE_0__isArray__["a" /* default */])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_toString__ = __webpack_require__(505);



/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toString(val) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_toString__["a" /* default */])(val, []);
});
/* harmony default export */ __webpack_exports__["a"] = (toString);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(73);



/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
var nth = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.charAt(idx) : list[idx];
});
/* harmony default export */ __webpack_exports__["a"] = (nth);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(75);





/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function invoker(arity, method) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(target) + ' does not have a method named "' + method + '"');
  });
});
/* harmony default export */ __webpack_exports__["a"] = (invoker);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(11);
var toAbsoluteIndex = __webpack_require__(53);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(29);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(7);
var cof = __webpack_require__(29);
var MATCH = __webpack_require__(8)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(8)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(4);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(19);
var redefine = __webpack_require__(20);
var fails = __webpack_require__(6);
var defined = __webpack_require__(35);
var wks = __webpack_require__(8);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(16);
var SPECIES = __webpack_require__(8)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(20);
var redefineAll = __webpack_require__(59);
var meta = __webpack_require__(45);
var forOf = __webpack_require__(58);
var anInstance = __webpack_require__(57);
var isObject = __webpack_require__(7);
var fails = __webpack_require__(6);
var $iterDetect = __webpack_require__(83);
var setToStringTag = __webpack_require__(60);
var inheritIfRequired = __webpack_require__(115);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var hide = __webpack_require__(19);
var uid = __webpack_require__(50);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(51) || !__webpack_require__(6)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(5)[K];
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);
var aFunction = __webpack_require__(16);
var ctx = __webpack_require__(28);
var forOf = __webpack_require__(58);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isPlaceholder;
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function add(a, b) {
  return Number(a) + Number(b);
});
/* harmony default export */ __webpack_exports__["a"] = (add);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _curryN;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPlaceholder__ = __webpack_require__(92);



/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!Object(__WEBPACK_IMPORTED_MODULE_1__isPlaceholder__["a" /* default */])(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : Object(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(left, _curryN(length, combined, fn));
  };
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _map;
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString__ = __webpack_require__(73);




/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry1__["a" /* default */])(function isArrayLike(x) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isArray__["a" /* default */])(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isString__["a" /* default */])(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
/* harmony default export */ __webpack_exports__["a"] = (_isArrayLike);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
var assoc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (assoc);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
var nAry = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});
/* harmony default export */ __webpack_exports__["a"] = (nAry);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isFunction;
function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liftN__ = __webpack_require__(209);



/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
var lift = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lift(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__liftN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (lift);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isString__ = __webpack_require__(73);



/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function reverse(list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isString__["a" /* default */])(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
/* harmony default export */ __webpack_exports__["a"] = (reverse);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _containsWith;
function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(147);




/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function reject(pred, filterable) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])(pred), filterable);
});
/* harmony default export */ __webpack_exports__["a"] = (reject);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__ = __webpack_require__(516);






/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
var reduceBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_4__internal_xreduceBy__["a" /* default */], function reduceBy(valueFn, valueAcc, keyFn, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(Object(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));
/* harmony default export */ __webpack_exports__["a"] = (reduceBy);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);



/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function flip(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (flip);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(22);



/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lens = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
/* harmony default export */ __webpack_exports__["a"] = (lens);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isObject__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mergeWithKey__ = __webpack_require__(156);




/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWithKey(fn, lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__mergeWithKey__["a" /* default */])(function (k, lVal, rVal) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(lVal) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isObject__["a" /* default */])(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepWithKey);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(33);
var LIBRARY = __webpack_require__(51);
var wksExt = __webpack_require__(158);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(78)('keys');
var uid = __webpack_require__(50);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(7);
var anObject = __webpack_require__(4);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(28)(Function.call, __webpack_require__(24).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var setPrototypeOf = __webpack_require__(113).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(36);
var defined = __webpack_require__(35);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(36);
var defined = __webpack_require__(35);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(20);
var hide = __webpack_require__(19);
var has = __webpack_require__(18);
var Iterators = __webpack_require__(62);
var $iterCreate = __webpack_require__(121);
var setToStringTag = __webpack_require__(60);
var getPrototypeOf = __webpack_require__(25);
var ITERATOR = __webpack_require__(8)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(54);
var descriptor = __webpack_require__(49);
var setToStringTag = __webpack_require__(60);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(8)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(82);
var defined = __webpack_require__(35);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(8)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(62);
var ITERATOR = __webpack_require__(8)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(49);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(71);
var ITERATOR = __webpack_require__(8)('iterator');
var Iterators = __webpack_require__(62);
module.exports = __webpack_require__(33).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(347);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(53);
var toLength = __webpack_require__(11);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(46);
var step = __webpack_require__(174);
var Iterators = __webpack_require__(62);
var toIObject = __webpack_require__(23);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(120)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(28);
var invoke = __webpack_require__(164);
var html = __webpack_require__(112);
var cel = __webpack_require__(108);
var global = __webpack_require__(5);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(29)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var macrotask = __webpack_require__(130).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(29)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(16);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(9);
var LIBRARY = __webpack_require__(51);
var $typed = __webpack_require__(88);
var hide = __webpack_require__(19);
var redefineAll = __webpack_require__(59);
var fails = __webpack_require__(6);
var anInstance = __webpack_require__(57);
var toInteger = __webpack_require__(36);
var toLength = __webpack_require__(11);
var toIndex = __webpack_require__(183);
var gOPN = __webpack_require__(55).f;
var dP = __webpack_require__(10).f;
var arrayFill = __webpack_require__(128);
var setToStringTag = __webpack_require__(60);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerGameObjects", function() { return centerGameObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePositionFix", function() { return movePositionFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMapObjects", function() { return createMapObjects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sprites_MapObject__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_sprites_MapObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_sprites_MapObject__);


/**
 * 將物件移置中心點
 */
function centerGameObjects(objects) {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

/**
 * 修正玩家移動軌跡
 */
function movePositionFix(oldPoint, newPoint) {
  const unit = 32 // 根據玩家材質尺寸
  const fixPoint = {
    x: newPoint.x > oldPoint.x ? newPoint.x + unit : newPoint.x - unit,
    y: newPoint.y > oldPoint.y ? newPoint.y : newPoint.y
  }
  return fixPoint
}

/**
 * 實體化地圖中的物件 (不再需要了)
 */
function createMapObjects(game, map, group) {
  // group = this.game.add.group()
  group.enableBody = true;

  let result = findLayersByName(false, map, 0);
  result.forEach(element => {
    createFromTiledObject(game, element, group);
  })

  return group
}

/**
 * 尋找地圖中指定屬性
 */
function findLayersByName(bool, map, index) {

  let result = [];

  for (let i = 0; i < 80; i++) {
    for (let j = 0; j < 20; j++) {
      // If name is wall then collide
      let obj = map.layers[index].data[i][j]
      // if (obj.properties.pass === bool) {
      //   // resize item
      //   obj.y *= map.tileHeight;
      //   obj.x *= map.tileWidth;
      //   result.push(obj);
      // }

      // resize item
      obj.y *= map.tileHeight;
      obj.x *= map.tileWidth;
      result.push(obj);

    }
  }
  return result;
}

/**
 * 建立物件
 */
function createFromTiledObject(game, element, group) {

  var mapobj = new __WEBPACK_IMPORTED_MODULE_0__src_sprites_MapObject___default.a({
    game: game,
    x: element.x,
    y: element.y,
    // asset: 'obj' // 暫不使用 直接做透明的牆壁就可
  })

  // 暫不使用, 直接做透明的牆壁就可
  // wall.frame = 31;
  Object.keys(element.properties).forEach(function (key) {
    mapobj[key] = element.properties[key];
  });

  group.add(mapobj)
}



/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

/*******************************************************************************
 * Copyright (c) 2013 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *    Andrew Banks - initial API and implementation and initial documentation
 *******************************************************************************/


// Only expose a single object name in the global namespace.
// Everything must go through this module. Global Paho module
// only has a single public function, client, which returns
// a Paho client object given connection details.

/**
 * Send and receive messages using web browsers.
 * <p>
 * This programming interface lets a JavaScript client application use the MQTT V3.1 or
 * V3.1.1 protocol to connect to an MQTT-supporting messaging server.
 *
 * The function supported includes:
 * <ol>
 * <li>Connecting to and disconnecting from a server. The server is identified by its host name and port number.
 * <li>Specifying options that relate to the communications link with the server,
 * for example the frequency of keep-alive heartbeats, and whether SSL/TLS is required.
 * <li>Subscribing to and receiving messages from MQTT Topics.
 * <li>Publishing messages to MQTT Topics.
 * </ol>
 * <p>
 * The API consists of two main objects:
 * <dl>
 * <dt><b>{@link Paho.Client}</b></dt>
 * <dd>This contains methods that provide the functionality of the API,
 * including provision of callbacks that notify the application when a message
 * arrives from or is delivered to the messaging server,
 * or when the status of its connection to the messaging server changes.</dd>
 * <dt><b>{@link Paho.Message}</b></dt>
 * <dd>This encapsulates the payload of the message along with various attributes
 * associated with its delivery, in particular the destination to which it has
 * been (or is about to be) sent.</dd>
 * </dl>
 * <p>
 * The programming interface validates parameters passed to it, and will throw
 * an Error containing an error message intended for developer use, if it detects
 * an error with any parameter.
 * <p>
 * Example:
 *
 * <code><pre>
client = new Paho.Client(location.hostname, Number(location.port), "clientId");
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({onSuccess:onConnect});

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("/World");
  message = new Paho.Message("Hello");
  message.destinationName = "/World";
  client.send(message);
};
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0)
	console.log("onConnectionLost:"+responseObject.errorMessage);
};
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
  client.disconnect();
};
 * </pre></code>
 * @namespace Paho
 */

/* jshint shadow:true */
(function ExportLibrary(root, factory) {
	if (true) {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		exports = factory();
	} else {
		if (typeof root.Paho === 'undefined') {
			root.Paho = {};
		}
		root.Paho = factory();
	}
})(this, function LibraryFactory() {


	var PahoMQTT = (function (global) {

		// Private variables below, these are only visible inside the function closure
		// which is used to define the module.

		var version = "@VERSION@";
		var buildLevel = "@BUILDLEVEL@";

		/**
		 * Unique message type identifiers, with associated
		 * associated integer values.
		 * @private
		 */
		var MESSAGE_TYPE = {
			CONNECT: 1,
			CONNACK: 2,
			PUBLISH: 3,
			PUBACK: 4,
			PUBREC: 5,
			PUBREL: 6,
			PUBCOMP: 7,
			SUBSCRIBE: 8,
			SUBACK: 9,
			UNSUBSCRIBE: 10,
			UNSUBACK: 11,
			PINGREQ: 12,
			PINGRESP: 13,
			DISCONNECT: 14
		};

		// Collection of utility methods used to simplify module code
		// and promote the DRY pattern.

		/**
		 * Validate an object's parameter names to ensure they
		 * match a list of expected variables name for this option
		 * type. Used to ensure option object passed into the API don't
		 * contain erroneous parameters.
		 * @param {Object} obj - User options object
		 * @param {Object} keys - valid keys and types that may exist in obj.
		 * @throws {Error} Invalid option parameter found.
		 * @private
		 */
		var validate = function (obj, keys) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					if (keys.hasOwnProperty(key)) {
						if (typeof obj[key] !== keys[key])
							throw new Error(format(ERROR.INVALID_TYPE, [typeof obj[key], key]));
					} else {
						var errorStr = "Unknown property, " + key + ". Valid properties are:";
						for (var validKey in keys)
							if (keys.hasOwnProperty(validKey))
								errorStr = errorStr + " " + validKey;
						throw new Error(errorStr);
					}
				}
			}
		};

		/**
		 * Return a new function which runs the user function bound
		 * to a fixed scope.
		 * @param {function} User function
		 * @param {object} Function scope
		 * @return {function} User function bound to another scope
		 * @private
		 */
		var scope = function (f, scope) {
			return function () {
				return f.apply(scope, arguments);
			};
		};

		/**
		 * Unique message type identifiers, with associated
		 * associated integer values.
		 * @private
		 */
		var ERROR = {
			OK: { code: 0, text: "AMQJSC0000I OK." },
			CONNECT_TIMEOUT: { code: 1, text: "AMQJSC0001E Connect timed out." },
			SUBSCRIBE_TIMEOUT: { code: 2, text: "AMQJS0002E Subscribe timed out." },
			UNSUBSCRIBE_TIMEOUT: { code: 3, text: "AMQJS0003E Unsubscribe timed out." },
			PING_TIMEOUT: { code: 4, text: "AMQJS0004E Ping timed out." },
			INTERNAL_ERROR: { code: 5, text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}" },
			CONNACK_RETURNCODE: { code: 6, text: "AMQJS0006E Bad Connack return code:{0} {1}." },
			SOCKET_ERROR: { code: 7, text: "AMQJS0007E Socket error:{0}." },
			SOCKET_CLOSE: { code: 8, text: "AMQJS0008I Socket closed." },
			MALFORMED_UTF: { code: 9, text: "AMQJS0009E Malformed UTF data:{0} {1} {2}." },
			UNSUPPORTED: { code: 10, text: "AMQJS0010E {0} is not supported by this browser." },
			INVALID_STATE: { code: 11, text: "AMQJS0011E Invalid state {0}." },
			INVALID_TYPE: { code: 12, text: "AMQJS0012E Invalid type {0} for {1}." },
			INVALID_ARGUMENT: { code: 13, text: "AMQJS0013E Invalid argument {0} for {1}." },
			UNSUPPORTED_OPERATION: { code: 14, text: "AMQJS0014E Unsupported operation." },
			INVALID_STORED_DATA: { code: 15, text: "AMQJS0015E Invalid data in local storage key={0} value={1}." },
			INVALID_MQTT_MESSAGE_TYPE: { code: 16, text: "AMQJS0016E Invalid MQTT message type {0}." },
			MALFORMED_UNICODE: { code: 17, text: "AMQJS0017E Malformed Unicode string:{0} {1}." },
			BUFFER_FULL: { code: 18, text: "AMQJS0018E Message buffer is full, maximum buffer size: {0}." },
		};

		/** CONNACK RC Meaning. */
		var CONNACK_RC = {
			0: "Connection Accepted",
			1: "Connection Refused: unacceptable protocol version",
			2: "Connection Refused: identifier rejected",
			3: "Connection Refused: server unavailable",
			4: "Connection Refused: bad user name or password",
			5: "Connection Refused: not authorized"
		};

		/**
		 * Format an error message text.
		 * @private
		 * @param {error} ERROR.KEY value above.
		 * @param {substitutions} [array] substituted into the text.
		 * @return the text with the substitutions made.
		 */
		var format = function (error, substitutions) {
			var text = error.text;
			if (substitutions) {
				var field, start;
				for (var i = 0; i < substitutions.length; i++) {
					field = "{" + i + "}";
					start = text.indexOf(field);
					if (start > 0) {
						var part1 = text.substring(0, start);
						var part2 = text.substring(start + field.length);
						text = part1 + substitutions[i] + part2;
					}
				}
			}
			return text;
		};

		//MQTT protocol and version          6    M    Q    I    s    d    p    3
		var MqttProtoIdentifierv3 = [0x00, 0x06, 0x4d, 0x51, 0x49, 0x73, 0x64, 0x70, 0x03];
		//MQTT proto/version for 311         4    M    Q    T    T    4
		var MqttProtoIdentifierv4 = [0x00, 0x04, 0x4d, 0x51, 0x54, 0x54, 0x04];

		/**
		 * Construct an MQTT wire protocol message.
		 * @param type MQTT packet type.
		 * @param options optional wire message attributes.
		 *
		 * Optional properties
		 *
		 * messageIdentifier: message ID in the range [0..65535]
		 * payloadMessage:	Application Message - PUBLISH only
		 * connectStrings:	array of 0 or more Strings to be put into the CONNECT payload
		 * topics:			array of strings (SUBSCRIBE, UNSUBSCRIBE)
		 * requestQoS:		array of QoS values [0..2]
		 *
		 * "Flag" properties
		 * cleanSession:	true if present / false if absent (CONNECT)
		 * willMessage:  	true if present / false if absent (CONNECT)
		 * isRetained:		true if present / false if absent (CONNECT)
		 * userName:		true if present / false if absent (CONNECT)
		 * password:		true if present / false if absent (CONNECT)
		 * keepAliveInterval:	integer [0..65535]  (CONNECT)
		 *
		 * @private
		 * @ignore
		 */
		var WireMessage = function (type, options) {
			this.type = type;
			for (var name in options) {
				if (options.hasOwnProperty(name)) {
					this[name] = options[name];
				}
			}
		};

		WireMessage.prototype.encode = function () {
			// Compute the first byte of the fixed header
			var first = ((this.type & 0x0f) << 4);

			/*
			 * Now calculate the length of the variable header + payload by adding up the lengths
			 * of all the component parts
			 */

			var remLength = 0;
			var topicStrLength = [];
			var destinationNameLength = 0;
			var willMessagePayloadBytes;

			// if the message contains a messageIdentifier then we need two bytes for that
			if (this.messageIdentifier !== undefined)
				remLength += 2;

			switch (this.type) {
				// If this a Connect then we need to include 12 bytes for its header
				case MESSAGE_TYPE.CONNECT:
					switch (this.mqttVersion) {
						case 3:
							remLength += MqttProtoIdentifierv3.length + 3;
							break;
						case 4:
							remLength += MqttProtoIdentifierv4.length + 3;
							break;
					}

					remLength += UTF8Length(this.clientId) + 2;
					if (this.willMessage !== undefined) {
						remLength += UTF8Length(this.willMessage.destinationName) + 2;
						// Will message is always a string, sent as UTF-8 characters with a preceding length.
						willMessagePayloadBytes = this.willMessage.payloadBytes;
						if (!(willMessagePayloadBytes instanceof Uint8Array))
							willMessagePayloadBytes = new Uint8Array(payloadBytes);
						remLength += willMessagePayloadBytes.byteLength + 2;
					}
					if (this.userName !== undefined)
						remLength += UTF8Length(this.userName) + 2;
					if (this.password !== undefined)
						remLength += UTF8Length(this.password) + 2;
					break;

				// Subscribe, Unsubscribe can both contain topic strings
				case MESSAGE_TYPE.SUBSCRIBE:
					first |= 0x02; // Qos = 1;
					for (var i = 0; i < this.topics.length; i++) {
						topicStrLength[i] = UTF8Length(this.topics[i]);
						remLength += topicStrLength[i] + 2;
					}
					remLength += this.requestedQos.length; // 1 byte for each topic's Qos
					// QoS on Subscribe only
					break;

				case MESSAGE_TYPE.UNSUBSCRIBE:
					first |= 0x02; // Qos = 1;
					for (var i = 0; i < this.topics.length; i++) {
						topicStrLength[i] = UTF8Length(this.topics[i]);
						remLength += topicStrLength[i] + 2;
					}
					break;

				case MESSAGE_TYPE.PUBREL:
					first |= 0x02; // Qos = 1;
					break;

				case MESSAGE_TYPE.PUBLISH:
					if (this.payloadMessage.duplicate) first |= 0x08;
					first = first |= (this.payloadMessage.qos << 1);
					if (this.payloadMessage.retained) first |= 0x01;
					destinationNameLength = UTF8Length(this.payloadMessage.destinationName);
					remLength += destinationNameLength + 2;
					var payloadBytes = this.payloadMessage.payloadBytes;
					remLength += payloadBytes.byteLength;
					if (payloadBytes instanceof ArrayBuffer)
						payloadBytes = new Uint8Array(payloadBytes);
					else if (!(payloadBytes instanceof Uint8Array))
						payloadBytes = new Uint8Array(payloadBytes.buffer);
					break;

				case MESSAGE_TYPE.DISCONNECT:
					break;

				default:
					break;
			}

			// Now we can allocate a buffer for the message

			var mbi = encodeMBI(remLength);  // Convert the length to MQTT MBI format
			var pos = mbi.length + 1;        // Offset of start of variable header
			var buffer = new ArrayBuffer(remLength + pos);
			var byteStream = new Uint8Array(buffer);    // view it as a sequence of bytes

			//Write the fixed header into the buffer
			byteStream[0] = first;
			byteStream.set(mbi, 1);

			// If this is a PUBLISH then the variable header starts with a topic
			if (this.type == MESSAGE_TYPE.PUBLISH)
				pos = writeString(this.payloadMessage.destinationName, destinationNameLength, byteStream, pos);
			// If this is a CONNECT then the variable header contains the protocol name/version, flags and keepalive time

			else if (this.type == MESSAGE_TYPE.CONNECT) {
				switch (this.mqttVersion) {
					case 3:
						byteStream.set(MqttProtoIdentifierv3, pos);
						pos += MqttProtoIdentifierv3.length;
						break;
					case 4:
						byteStream.set(MqttProtoIdentifierv4, pos);
						pos += MqttProtoIdentifierv4.length;
						break;
				}
				var connectFlags = 0;
				if (this.cleanSession)
					connectFlags = 0x02;
				if (this.willMessage !== undefined) {
					connectFlags |= 0x04;
					connectFlags |= (this.willMessage.qos << 3);
					if (this.willMessage.retained) {
						connectFlags |= 0x20;
					}
				}
				if (this.userName !== undefined)
					connectFlags |= 0x80;
				if (this.password !== undefined)
					connectFlags |= 0x40;
				byteStream[pos++] = connectFlags;
				pos = writeUint16(this.keepAliveInterval, byteStream, pos);
			}

			// Output the messageIdentifier - if there is one
			if (this.messageIdentifier !== undefined)
				pos = writeUint16(this.messageIdentifier, byteStream, pos);

			switch (this.type) {
				case MESSAGE_TYPE.CONNECT:
					pos = writeString(this.clientId, UTF8Length(this.clientId), byteStream, pos);
					if (this.willMessage !== undefined) {
						pos = writeString(this.willMessage.destinationName, UTF8Length(this.willMessage.destinationName), byteStream, pos);
						pos = writeUint16(willMessagePayloadBytes.byteLength, byteStream, pos);
						byteStream.set(willMessagePayloadBytes, pos);
						pos += willMessagePayloadBytes.byteLength;

					}
					if (this.userName !== undefined)
						pos = writeString(this.userName, UTF8Length(this.userName), byteStream, pos);
					if (this.password !== undefined)
						pos = writeString(this.password, UTF8Length(this.password), byteStream, pos);
					break;

				case MESSAGE_TYPE.PUBLISH:
					// PUBLISH has a text or binary payload, if text do not add a 2 byte length field, just the UTF characters.
					byteStream.set(payloadBytes, pos);

					break;

				//    	    case MESSAGE_TYPE.PUBREC:
				//    	    case MESSAGE_TYPE.PUBREL:
				//    	    case MESSAGE_TYPE.PUBCOMP:
				//    	    	break;

				case MESSAGE_TYPE.SUBSCRIBE:
					// SUBSCRIBE has a list of topic strings and request QoS
					for (var i = 0; i < this.topics.length; i++) {
						pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
						byteStream[pos++] = this.requestedQos[i];
					}
					break;

				case MESSAGE_TYPE.UNSUBSCRIBE:
					// UNSUBSCRIBE has a list of topic strings
					for (var i = 0; i < this.topics.length; i++)
						pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
					break;

				default:
				// Do nothing.
			}

			return buffer;
		};

		function decodeMessage(input, pos) {

			var startingPos = pos;
			var first = input[pos];
			var type = first >> 4;
			var messageInfo = first &= 0x0f;
			pos += 1;


			// Decode the remaining length (MBI format)

			var digit;
			var remLength = 0;
			var multiplier = 1;
			do {
				if (pos == input.length) {
					return [null, startingPos];
				}
				digit = input[pos++];
				remLength += ((digit & 0x7F) * multiplier);
				multiplier *= 128;
			} while ((digit & 0x80) !== 0);

			var endPos = pos + remLength;
			if (endPos > input.length) {
				return [null, startingPos];
			}

			var wireMessage = new WireMessage(type);

			switch (type) {
				case MESSAGE_TYPE.CONNACK:
					var connectAcknowledgeFlags = input[pos++];
					if (connectAcknowledgeFlags & 0x01)
						wireMessage.sessionPresent = true;
					wireMessage.returnCode = input[pos++];
					break;

				case MESSAGE_TYPE.PUBLISH:

					var qos = (messageInfo >> 1) & 0x03;

					var len = readUint16(input, pos);
					pos += 2;
					var topicName = parseUTF8(input, pos, len);
					pos += len;
					// If QoS 1 or 2 there will be a messageIdentifier

					if (qos > 0) {
						wireMessage.messageIdentifier = readUint16(input, pos);
						pos += 2;
					}

					var message;
					// fix by RobbyWu
					try {
						message = new Paho.Message(input.subarray(pos, endPos));
					} catch (e) {
						message = { input: input.subarray(pos, endPos) }
					}

					if ((messageInfo & 0x01) == 0x01)
						message.retained = true;
					if ((messageInfo & 0x08) == 0x08)
						message.duplicate = true;
					message.qos = qos;
					message.destinationName = topicName;
					wireMessage.payloadMessage = message;
					break;

				case MESSAGE_TYPE.PUBACK:
				case MESSAGE_TYPE.PUBREC:
				case MESSAGE_TYPE.PUBREL:
				case MESSAGE_TYPE.PUBCOMP:
				case MESSAGE_TYPE.UNSUBACK:
					wireMessage.messageIdentifier = readUint16(input, pos);
					break;

				case MESSAGE_TYPE.SUBACK:
					wireMessage.messageIdentifier = readUint16(input, pos);
					pos += 2;
					wireMessage.returnCode = input.subarray(pos, endPos);
					break;

				default:
					break;
			}

			return [wireMessage, endPos];
		}

		function writeUint16(input, buffer, offset) {
			buffer[offset++] = input >> 8;      //MSB
			buffer[offset++] = input % 256;     //LSB
			return offset;
		}

		function writeString(input, utf8Length, buffer, offset) {
			offset = writeUint16(utf8Length, buffer, offset);
			stringToUTF8(input, buffer, offset);
			return offset + utf8Length;
		}

		function readUint16(buffer, offset) {
			return 256 * buffer[offset] + buffer[offset + 1];
		}

		/**
		 * Encodes an MQTT Multi-Byte Integer
		 * @private
		 */
		function encodeMBI(number) {
			var output = new Array(1);
			var numBytes = 0;

			do {
				var digit = number % 128;
				number = number >> 7;
				if (number > 0) {
					digit |= 0x80;
				}
				output[numBytes++] = digit;
			} while ((number > 0) && (numBytes < 4));

			return output;
		}

		/**
		 * Takes a String and calculates its length in bytes when encoded in UTF8.
		 * @private
		 */
		function UTF8Length(input) {
			var output = 0;
			for (var i = 0; i < input.length; i++) {
				var charCode = input.charCodeAt(i);
				if (charCode > 0x7FF) {
					// Surrogate pair means its a 4 byte character
					if (0xD800 <= charCode && charCode <= 0xDBFF) {
						i++;
						output++;
					}
					output += 3;
				}
				else if (charCode > 0x7F)
					output += 2;
				else
					output++;
			}
			return output;
		}

		/**
		 * Takes a String and writes it into an array as UTF8 encoded bytes.
		 * @private
		 */
		function stringToUTF8(input, output, start) {
			var pos = start;
			for (var i = 0; i < input.length; i++) {
				var charCode = input.charCodeAt(i);

				// Check for a surrogate pair.
				if (0xD800 <= charCode && charCode <= 0xDBFF) {
					var lowCharCode = input.charCodeAt(++i);
					if (isNaN(lowCharCode)) {
						throw new Error(format(ERROR.MALFORMED_UNICODE, [charCode, lowCharCode]));
					}
					charCode = ((charCode - 0xD800) << 10) + (lowCharCode - 0xDC00) + 0x10000;

				}

				if (charCode <= 0x7F) {
					output[pos++] = charCode;
				} else if (charCode <= 0x7FF) {
					output[pos++] = charCode >> 6 & 0x1F | 0xC0;
					output[pos++] = charCode & 0x3F | 0x80;
				} else if (charCode <= 0xFFFF) {
					output[pos++] = charCode >> 12 & 0x0F | 0xE0;
					output[pos++] = charCode >> 6 & 0x3F | 0x80;
					output[pos++] = charCode & 0x3F | 0x80;
				} else {
					output[pos++] = charCode >> 18 & 0x07 | 0xF0;
					output[pos++] = charCode >> 12 & 0x3F | 0x80;
					output[pos++] = charCode >> 6 & 0x3F | 0x80;
					output[pos++] = charCode & 0x3F | 0x80;
				}
			}
			return output;
		}

		function parseUTF8(input, offset, length) {
			var output = "";
			var utf16;
			var pos = offset;

			while (pos < offset + length) {
				var byte1 = input[pos++];
				if (byte1 < 128)
					utf16 = byte1;
				else {
					var byte2 = input[pos++] - 128;
					if (byte2 < 0)
						throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), ""]));
					if (byte1 < 0xE0)             // 2 byte character
						utf16 = 64 * (byte1 - 0xC0) + byte2;
					else {
						var byte3 = input[pos++] - 128;
						if (byte3 < 0)
							throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16)]));
						if (byte1 < 0xF0)        // 3 byte character
							utf16 = 4096 * (byte1 - 0xE0) + 64 * byte2 + byte3;
						else {
							var byte4 = input[pos++] - 128;
							if (byte4 < 0)
								throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
							if (byte1 < 0xF8)        // 4 byte character
								utf16 = 262144 * (byte1 - 0xF0) + 4096 * byte2 + 64 * byte3 + byte4;
							else                     // longer encodings are not supported
								throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
						}
					}
				}

				if (utf16 > 0xFFFF)   // 4 byte character - express as a surrogate pair
				{
					utf16 -= 0x10000;
					output += String.fromCharCode(0xD800 + (utf16 >> 10)); // lead character
					utf16 = 0xDC00 + (utf16 & 0x3FF);  // trail character
				}
				output += String.fromCharCode(utf16);
			}
			return output;
		}

		/**
		 * Repeat keepalive requests, monitor responses.
		 * @ignore
		 */
		var Pinger = function (client, window, keepAliveInterval) {
			this._client = client;
			this._window = window;
			this._keepAliveInterval = keepAliveInterval * 1000;
			this.isReset = false;

			var pingReq = new WireMessage(MESSAGE_TYPE.PINGREQ).encode();

			var doTimeout = function (pinger) {
				return function () {
					return doPing.apply(pinger);
				};
			};

			/** @ignore */
			var doPing = function () {
				if (!this.isReset) {
					this._client._trace("Pinger.doPing", "Timed out");
					this._client._disconnected(ERROR.PING_TIMEOUT.code, format(ERROR.PING_TIMEOUT));
				} else {
					this.isReset = false;
					this._client._trace("Pinger.doPing", "send PINGREQ");
					this._client.socket.send(pingReq);
					this.timeout = this._window.setTimeout(doTimeout(this), this._keepAliveInterval);
				}
			};

			this.reset = function () {
				this.isReset = true;
				this._window.clearTimeout(this.timeout);
				if (this._keepAliveInterval > 0)
					this.timeout = setTimeout(doTimeout(this), this._keepAliveInterval);
			};

			this.cancel = function () {
				this._window.clearTimeout(this.timeout);
			};
		};

		/**
		 * Monitor request completion.
		 * @ignore
		 */
		var Timeout = function (client, window, timeoutSeconds, action, args) {
			this._window = window;
			if (!timeoutSeconds)
				timeoutSeconds = 30;

			var doTimeout = function (action, client, args) {
				return function () {
					return action.apply(client, args);
				};
			};
			this.timeout = setTimeout(doTimeout(action, client, args), timeoutSeconds * 1000);

			this.cancel = function () {
				this._window.clearTimeout(this.timeout);
			};
		};

		/*
		 * Internal implementation of the Websockets MQTT V3.1 client.
		 *
		 * @name Paho.ClientImpl @constructor
		 * @param {String} host the DNS nameof the webSocket host.
		 * @param {Number} port the port number for that host.
		 * @param {String} clientId the MQ client identifier.
		 */
		var ClientImpl = function (uri, host, port, path, clientId) {
			// Check dependencies are satisfied in this browser.
			if (!("WebSocket" in global && global.WebSocket !== null)) {
				throw new Error(format(ERROR.UNSUPPORTED, ["WebSocket"]));
			}
			if (!("localStorage" in global && global.localStorage !== null)) {
				throw new Error(format(ERROR.UNSUPPORTED, ["localStorage"]));
			}
			if (!("ArrayBuffer" in global && global.ArrayBuffer !== null)) {
				throw new Error(format(ERROR.UNSUPPORTED, ["ArrayBuffer"]));
			}
			this._trace("Paho.Client", uri, host, port, path, clientId);

			this.host = host;
			this.port = port;
			this.path = path;
			this.uri = uri;
			this.clientId = clientId;
			this._wsuri = null;

			// Local storagekeys are qualified with the following string.
			// The conditional inclusion of path in the key is for backward
			// compatibility to when the path was not configurable and assumed to
			// be /mqtt
			this._localKey = host + ":" + port + (path != "/mqtt" ? ":" + path : "") + ":" + clientId + ":";

			// Create private instance-only message queue
			// Internal queue of messages to be sent, in sending order.
			this._msg_queue = [];
			this._buffered_msg_queue = [];

			// Messages we have sent and are expecting a response for, indexed by their respective message ids.
			this._sentMessages = {};

			// Messages we have received and acknowleged and are expecting a confirm message for
			// indexed by their respective message ids.
			this._receivedMessages = {};

			// Internal list of callbacks to be executed when messages
			// have been successfully sent over web socket, e.g. disconnect
			// when it doesn't have to wait for ACK, just message is dispatched.
			this._notify_msg_sent = {};

			// Unique identifier for SEND messages, incrementing
			// counter as messages are sent.
			this._message_identifier = 1;

			// Used to determine the transmission sequence of stored sent messages.
			this._sequence = 0;


			// Load the local state, if any, from the saved version, only restore state relevant to this client.
			for (var key in localStorage)
				if (key.indexOf("Sent:" + this._localKey) === 0 || key.indexOf("Received:" + this._localKey) === 0)
					this.restore(key);
		};

		// Messaging Client public instance members.
		ClientImpl.prototype.host = null;
		ClientImpl.prototype.port = null;
		ClientImpl.prototype.path = null;
		ClientImpl.prototype.uri = null;
		ClientImpl.prototype.clientId = null;

		// Messaging Client private instance members.
		ClientImpl.prototype.socket = null;
		/* true once we have received an acknowledgement to a CONNECT packet. */
		ClientImpl.prototype.connected = false;
		/* The largest message identifier allowed, may not be larger than 2**16 but
		 * if set smaller reduces the maximum number of outbound messages allowed.
		 */
		ClientImpl.prototype.maxMessageIdentifier = 65536;
		ClientImpl.prototype.connectOptions = null;
		ClientImpl.prototype.hostIndex = null;
		ClientImpl.prototype.onConnected = null;
		ClientImpl.prototype.onConnectionLost = null;
		ClientImpl.prototype.onMessageDelivered = null;
		ClientImpl.prototype.onMessageArrived = null;
		ClientImpl.prototype.traceFunction = null;
		ClientImpl.prototype._msg_queue = null;
		ClientImpl.prototype._buffered_msg_queue = null;
		ClientImpl.prototype._connectTimeout = null;
		/* The sendPinger monitors how long we allow before we send data to prove to the server that we are alive. */
		ClientImpl.prototype.sendPinger = null;
		/* The receivePinger monitors how long we allow before we require evidence that the server is alive. */
		ClientImpl.prototype.receivePinger = null;
		ClientImpl.prototype._reconnectInterval = 1; // Reconnect Delay, starts at 1 second
		ClientImpl.prototype._reconnecting = false;
		ClientImpl.prototype._reconnectTimeout = null;
		ClientImpl.prototype.disconnectedPublishing = false;
		ClientImpl.prototype.disconnectedBufferSize = 5000;

		ClientImpl.prototype.receiveBuffer = null;

		ClientImpl.prototype._traceBuffer = null;
		ClientImpl.prototype._MAX_TRACE_ENTRIES = 100;

		ClientImpl.prototype.connect = function (connectOptions) {
			var connectOptionsMasked = this._traceMask(connectOptions, "password");
			this._trace("Client.connect", connectOptionsMasked, this.socket, this.connected);

			if (this.connected)
				throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
			if (this.socket)
				throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));

			if (this._reconnecting) {
				// connect() function is called while reconnect is in progress.
				// Terminate the auto reconnect process to use new connect options.
				this._reconnectTimeout.cancel();
				this._reconnectTimeout = null;
				this._reconnecting = false;
			}

			this.connectOptions = connectOptions;
			this._reconnectInterval = 1;
			this._reconnecting = false;
			if (connectOptions.uris) {
				this.hostIndex = 0;
				this._doConnect(connectOptions.uris[0]);
			} else {
				this._doConnect(this.uri);
			}

		};

		ClientImpl.prototype.subscribe = function (filter, subscribeOptions) {
			this._trace("Client.subscribe", filter, subscribeOptions);

			if (!this.connected)
				throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));

			var wireMessage = new WireMessage(MESSAGE_TYPE.SUBSCRIBE);
			wireMessage.topics = [filter];
			if (subscribeOptions.qos !== undefined)
				wireMessage.requestedQos = [subscribeOptions.qos];
			else
				wireMessage.requestedQos = [0];

			if (subscribeOptions.onSuccess) {
				wireMessage.onSuccess = function (grantedQos) { subscribeOptions.onSuccess({ invocationContext: subscribeOptions.invocationContext, grantedQos: grantedQos }); };
			}

			if (subscribeOptions.onFailure) {
				wireMessage.onFailure = function (errorCode) { subscribeOptions.onFailure({ invocationContext: subscribeOptions.invocationContext, errorCode: errorCode, errorMessage: format(errorCode) }); };
			}

			if (subscribeOptions.timeout) {
				wireMessage.timeOut = new Timeout(this, window, subscribeOptions.timeout, subscribeOptions.onFailure,
					[{
						invocationContext: subscribeOptions.invocationContext,
						errorCode: ERROR.SUBSCRIBE_TIMEOUT.code,
						errorMessage: format(ERROR.SUBSCRIBE_TIMEOUT)
					}]);
			}

			// All subscriptions return a SUBACK.
			this._requires_ack(wireMessage);
			this._schedule_message(wireMessage);
		};

		/** @ignore */
		ClientImpl.prototype.unsubscribe = function (filter, unsubscribeOptions) {
			this._trace("Client.unsubscribe", filter, unsubscribeOptions);

			if (!this.connected)
				throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));

			var wireMessage = new WireMessage(MESSAGE_TYPE.UNSUBSCRIBE);
			wireMessage.topics = [filter];

			if (unsubscribeOptions.onSuccess) {
				wireMessage.callback = function () { unsubscribeOptions.onSuccess({ invocationContext: unsubscribeOptions.invocationContext }); };
			}
			if (unsubscribeOptions.timeout) {
				wireMessage.timeOut = new Timeout(this, window, unsubscribeOptions.timeout, unsubscribeOptions.onFailure,
					[{
						invocationContext: unsubscribeOptions.invocationContext,
						errorCode: ERROR.UNSUBSCRIBE_TIMEOUT.code,
						errorMessage: format(ERROR.UNSUBSCRIBE_TIMEOUT)
					}]);
			}

			// All unsubscribes return a SUBACK.
			this._requires_ack(wireMessage);
			this._schedule_message(wireMessage);
		};

		ClientImpl.prototype.send = function (message) {
			this._trace("Client.send", message);

			wireMessage = new WireMessage(MESSAGE_TYPE.PUBLISH);
			wireMessage.payloadMessage = message;

			if (this.connected) {
				// Mark qos 1 & 2 message as "ACK required"
				// For qos 0 message, invoke onMessageDelivered callback if there is one.
				// Then schedule the message.
				if (message.qos > 0) {
					this._requires_ack(wireMessage);
				} else if (this.onMessageDelivered) {
					this._notify_msg_sent[wireMessage] = this.onMessageDelivered(wireMessage.payloadMessage);
				}
				this._schedule_message(wireMessage);
			} else {
				// Currently disconnected, will not schedule this message
				// Check if reconnecting is in progress and disconnected publish is enabled.
				if (this._reconnecting && this.disconnectedPublishing) {
					// Check the limit which include the "required ACK" messages
					var messageCount = Object.keys(this._sentMessages).length + this._buffered_msg_queue.length;
					if (messageCount > this.disconnectedBufferSize) {
						throw new Error(format(ERROR.BUFFER_FULL, [this.disconnectedBufferSize]));
					} else {
						if (message.qos > 0) {
							// Mark this message as "ACK required"
							this._requires_ack(wireMessage);
						} else {
							wireMessage.sequence = ++this._sequence;
							this._buffered_msg_queue.push(wireMessage);
						}
					}
				} else {
					throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
				}
			}
		};

		ClientImpl.prototype.disconnect = function () {
			this._trace("Client.disconnect");

			if (this._reconnecting) {
				// disconnect() function is called while reconnect is in progress.
				// Terminate the auto reconnect process.
				this._reconnectTimeout.cancel();
				this._reconnectTimeout = null;
				this._reconnecting = false;
			}

			if (!this.socket)
				throw new Error(format(ERROR.INVALID_STATE, ["not connecting or connected"]));

			wireMessage = new WireMessage(MESSAGE_TYPE.DISCONNECT);

			// Run the disconnected call back as soon as the message has been sent,
			// in case of a failure later on in the disconnect processing.
			// as a consequence, the _disconected call back may be run several times.
			this._notify_msg_sent[wireMessage] = scope(this._disconnected, this);

			this._schedule_message(wireMessage);
		};

		ClientImpl.prototype.getTraceLog = function () {
			if (this._traceBuffer !== null) {
				this._trace("Client.getTraceLog", new Date());
				this._trace("Client.getTraceLog in flight messages", this._sentMessages.length);
				for (var key in this._sentMessages)
					this._trace("_sentMessages ", key, this._sentMessages[key]);
				for (var key in this._receivedMessages)
					this._trace("_receivedMessages ", key, this._receivedMessages[key]);

				return this._traceBuffer;
			}
		};

		ClientImpl.prototype.startTrace = function () {
			if (this._traceBuffer === null) {
				this._traceBuffer = [];
			}
			this._trace("Client.startTrace", new Date(), version);
		};

		ClientImpl.prototype.stopTrace = function () {
			delete this._traceBuffer;
		};

		ClientImpl.prototype._doConnect = function (wsurl) {
			// When the socket is open, this client will send the CONNECT WireMessage using the saved parameters.
			if (this.connectOptions.useSSL) {
				var uriParts = wsurl.split(":");
				uriParts[0] = "wss";
				wsurl = uriParts.join(":");
			}
			this._wsuri = wsurl;
			this.connected = false;



			if (this.connectOptions.mqttVersion < 4) {
				this.socket = new WebSocket(wsurl, ["mqttv3.1"]);
			} else {
				this.socket = new WebSocket(wsurl, ["mqtt"]);
			}
			this.socket.binaryType = 'arraybuffer';
			this.socket.onopen = scope(this._on_socket_open, this);
			this.socket.onmessage = scope(this._on_socket_message, this);
			this.socket.onerror = scope(this._on_socket_error, this);
			this.socket.onclose = scope(this._on_socket_close, this);

			this.sendPinger = new Pinger(this, window, this.connectOptions.keepAliveInterval);
			this.receivePinger = new Pinger(this, window, this.connectOptions.keepAliveInterval);
			if (this._connectTimeout) {
				this._connectTimeout.cancel();
				this._connectTimeout = null;
			}
			this._connectTimeout = new Timeout(this, window, this.connectOptions.timeout, this._disconnected, [ERROR.CONNECT_TIMEOUT.code, format(ERROR.CONNECT_TIMEOUT)]);
		};


		// Schedule a new message to be sent over the WebSockets
		// connection. CONNECT messages cause WebSocket connection
		// to be started. All other messages are queued internally
		// until this has happened. When WS connection starts, process
		// all outstanding messages.
		ClientImpl.prototype._schedule_message = function (message) {
			this._msg_queue.push(message);
			// Process outstanding messages in the queue if we have an  open socket, and have received CONNACK.
			if (this.connected) {
				this._process_queue();
			}
		};

		ClientImpl.prototype.store = function (prefix, wireMessage) {
			var storedMessage = { type: wireMessage.type, messageIdentifier: wireMessage.messageIdentifier, version: 1 };

			switch (wireMessage.type) {
				case MESSAGE_TYPE.PUBLISH:
					if (wireMessage.pubRecReceived)
						storedMessage.pubRecReceived = true;

					// Convert the payload to a hex string.
					storedMessage.payloadMessage = {};
					var hex = "";
					var messageBytes = wireMessage.payloadMessage.payloadBytes;
					for (var i = 0; i < messageBytes.length; i++) {
						if (messageBytes[i] <= 0xF)
							hex = hex + "0" + messageBytes[i].toString(16);
						else
							hex = hex + messageBytes[i].toString(16);
					}
					storedMessage.payloadMessage.payloadHex = hex;

					storedMessage.payloadMessage.qos = wireMessage.payloadMessage.qos;
					storedMessage.payloadMessage.destinationName = wireMessage.payloadMessage.destinationName;
					if (wireMessage.payloadMessage.duplicate)
						storedMessage.payloadMessage.duplicate = true;
					if (wireMessage.payloadMessage.retained)
						storedMessage.payloadMessage.retained = true;

					// Add a sequence number to sent messages.
					if (prefix.indexOf("Sent:") === 0) {
						if (wireMessage.sequence === undefined)
							wireMessage.sequence = ++this._sequence;
						storedMessage.sequence = wireMessage.sequence;
					}
					break;

				default:
					throw Error(format(ERROR.INVALID_STORED_DATA, [key, storedMessage]));
			}
			localStorage.setItem(prefix + this._localKey + wireMessage.messageIdentifier, JSON.stringify(storedMessage));
		};

		ClientImpl.prototype.restore = function (key) {
			var value = localStorage.getItem(key);
			var storedMessage = JSON.parse(value);

			var wireMessage = new WireMessage(storedMessage.type, storedMessage);

			switch (storedMessage.type) {
				case MESSAGE_TYPE.PUBLISH:
					// Replace the payload message with a Message object.
					var hex = storedMessage.payloadMessage.payloadHex;
					var buffer = new ArrayBuffer((hex.length) / 2);
					var byteStream = new Uint8Array(buffer);
					var i = 0;
					while (hex.length >= 2) {
						var x = parseInt(hex.substring(0, 2), 16);
						hex = hex.substring(2, hex.length);
						byteStream[i++] = x;
					}
					var payloadMessage = new Paho.Message(byteStream);

					payloadMessage.qos = storedMessage.payloadMessage.qos;
					payloadMessage.destinationName = storedMessage.payloadMessage.destinationName;
					if (storedMessage.payloadMessage.duplicate)
						payloadMessage.duplicate = true;
					if (storedMessage.payloadMessage.retained)
						payloadMessage.retained = true;
					wireMessage.payloadMessage = payloadMessage;

					break;

				default:
					throw Error(format(ERROR.INVALID_STORED_DATA, [key, value]));
			}

			if (key.indexOf("Sent:" + this._localKey) === 0) {
				wireMessage.payloadMessage.duplicate = true;
				this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
			} else if (key.indexOf("Received:" + this._localKey) === 0) {
				this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
			}
		};

		ClientImpl.prototype._process_queue = function () {
			var message = null;
			// Process messages in order they were added
			var fifo = this._msg_queue.reverse();

			// Send all queued messages down socket connection
			while ((message = fifo.pop())) {
				this._socket_send(message);
				// Notify listeners that message was successfully sent
				if (this._notify_msg_sent[message]) {
					this._notify_msg_sent[message]();
					delete this._notify_msg_sent[message];
				}
			}
		};

		/**
		 * Expect an ACK response for this message. Add message to the set of in progress
		 * messages and set an unused identifier in this message.
		 * @ignore
		 */
		ClientImpl.prototype._requires_ack = function (wireMessage) {
			var messageCount = Object.keys(this._sentMessages).length;
			if (messageCount > this.maxMessageIdentifier)
				throw Error("Too many messages:" + messageCount);

			while (this._sentMessages[this._message_identifier] !== undefined) {
				this._message_identifier++;
			}
			wireMessage.messageIdentifier = this._message_identifier;
			this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
			if (wireMessage.type === MESSAGE_TYPE.PUBLISH) {
				this.store("Sent:", wireMessage);
			}
			if (this._message_identifier === this.maxMessageIdentifier) {
				this._message_identifier = 1;
			}
		};

		/**
		 * Called when the underlying websocket has been opened.
		 * @ignore
		 */
		ClientImpl.prototype._on_socket_open = function () {
			// Create the CONNECT message object.
			var wireMessage = new WireMessage(MESSAGE_TYPE.CONNECT, this.connectOptions);
			wireMessage.clientId = this.clientId;
			this._socket_send(wireMessage);
		};

		/**
		 * Called when the underlying websocket has received a complete packet.
		 * @ignore
		 */
		ClientImpl.prototype._on_socket_message = function (event) {

			this._trace("Client._on_socket_message", event.data);
			var messages = this._deframeMessages(event.data);

			for (var i = 0; i < messages.length; i += 1) {
				this._handleMessage(messages[i]);
			}
		};

		ClientImpl.prototype._deframeMessages = function (data) {
			var byteArray = new Uint8Array(data);
			var messages = [];
			if (this.receiveBuffer) {
				var newData = new Uint8Array(this.receiveBuffer.length + byteArray.length);
				newData.set(this.receiveBuffer);
				newData.set(byteArray, this.receiveBuffer.length);
				byteArray = newData;
				delete this.receiveBuffer;
			}
			try {
				var offset = 0;
				while (offset < byteArray.length) {
					var result = decodeMessage(byteArray, offset);

					var wireMessage = result[0];
					offset = result[1];
					if (wireMessage !== null) {
						messages.push(wireMessage);
					} else {
						break;
					}
				}
				if (offset < byteArray.length) {
					this.receiveBuffer = byteArray.subarray(offset);
				}
			} catch (error) {
				var errorStack = ((error.hasOwnProperty('stack') == 'undefined') ? error.stack.toString() : "No Error Stack Available");
				this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, errorStack]));
				return;
			}
			return messages;
		};

		ClientImpl.prototype._handleMessage = function (wireMessage) {

			this._trace("Client._handleMessage", wireMessage);

			try {
				switch (wireMessage.type) {
					case MESSAGE_TYPE.CONNACK:
						this._connectTimeout.cancel();
						if (this._reconnectTimeout)
							this._reconnectTimeout.cancel();

						// If we have started using clean session then clear up the local state.
						if (this.connectOptions.cleanSession) {
							for (var key in this._sentMessages) {
								var sentMessage = this._sentMessages[key];
								localStorage.removeItem("Sent:" + this._localKey + sentMessage.messageIdentifier);
							}
							this._sentMessages = {};

							for (var key in this._receivedMessages) {
								var receivedMessage = this._receivedMessages[key];
								localStorage.removeItem("Received:" + this._localKey + receivedMessage.messageIdentifier);
							}
							this._receivedMessages = {};
						}
						// Client connected and ready for business.
						if (wireMessage.returnCode === 0) {

							this.connected = true;
							// Jump to the end of the list of uris and stop looking for a good host.

							if (this.connectOptions.uris)
								this.hostIndex = this.connectOptions.uris.length;

						} else {
							this._disconnected(ERROR.CONNACK_RETURNCODE.code, format(ERROR.CONNACK_RETURNCODE, [wireMessage.returnCode, CONNACK_RC[wireMessage.returnCode]]));
							break;
						}

						// Resend messages.
						var sequencedMessages = [];
						for (var msgId in this._sentMessages) {
							if (this._sentMessages.hasOwnProperty(msgId))
								sequencedMessages.push(this._sentMessages[msgId]);
						}

						// Also schedule qos 0 buffered messages if any
						if (this._buffered_msg_queue.length > 0) {
							var msg = null;
							var fifo = this._buffered_msg_queue.reverse();
							while ((msg = fifo.pop())) {
								sequencedMessages.push(msg);
								if (this.onMessageDelivered)
									this._notify_msg_sent[msg] = this.onMessageDelivered(msg.payloadMessage);
							}
						}

						// Sort sentMessages into the original sent order.
						var sequencedMessages = sequencedMessages.sort(function (a, b) { return a.sequence - b.sequence; });
						for (var i = 0, len = sequencedMessages.length; i < len; i++) {
							var sentMessage = sequencedMessages[i];
							if (sentMessage.type == MESSAGE_TYPE.PUBLISH && sentMessage.pubRecReceived) {
								var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, { messageIdentifier: sentMessage.messageIdentifier });
								this._schedule_message(pubRelMessage);
							} else {
								this._schedule_message(sentMessage);
							}
						}

						// Execute the connectOptions.onSuccess callback if there is one.
						// Will also now return if this connection was the result of an automatic
						// reconnect and which URI was successfully connected to.
						if (this.connectOptions.onSuccess) {
							this.connectOptions.onSuccess({ invocationContext: this.connectOptions.invocationContext });
						}

						var reconnected = false;
						if (this._reconnecting) {
							reconnected = true;
							this._reconnectInterval = 1;
							this._reconnecting = false;
						}

						// Execute the onConnected callback if there is one.
						this._connected(reconnected, this._wsuri);

						// Process all queued messages now that the connection is established.
						this._process_queue();
						break;

					case MESSAGE_TYPE.PUBLISH:
						this._receivePublish(wireMessage);
						break;

					case MESSAGE_TYPE.PUBACK:
						var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
						// If this is a re flow of a PUBACK after we have restarted receivedMessage will not exist.
						if (sentMessage) {
							delete this._sentMessages[wireMessage.messageIdentifier];
							localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
							if (this.onMessageDelivered)
								this.onMessageDelivered(sentMessage.payloadMessage);
						}
						break;

					case MESSAGE_TYPE.PUBREC:
						var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
						// If this is a re flow of a PUBREC after we have restarted receivedMessage will not exist.
						if (sentMessage) {
							sentMessage.pubRecReceived = true;
							var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, { messageIdentifier: wireMessage.messageIdentifier });
							this.store("Sent:", sentMessage);
							this._schedule_message(pubRelMessage);
						}
						break;

					case MESSAGE_TYPE.PUBREL:
						var receivedMessage = this._receivedMessages[wireMessage.messageIdentifier];
						localStorage.removeItem("Received:" + this._localKey + wireMessage.messageIdentifier);
						// If this is a re flow of a PUBREL after we have restarted receivedMessage will not exist.
						if (receivedMessage) {
							this._receiveMessage(receivedMessage);
							delete this._receivedMessages[wireMessage.messageIdentifier];
						}
						// Always flow PubComp, we may have previously flowed PubComp but the server lost it and restarted.
						var pubCompMessage = new WireMessage(MESSAGE_TYPE.PUBCOMP, { messageIdentifier: wireMessage.messageIdentifier });
						this._schedule_message(pubCompMessage);


						break;

					case MESSAGE_TYPE.PUBCOMP:
						var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
						delete this._sentMessages[wireMessage.messageIdentifier];
						localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
						if (this.onMessageDelivered)
							this.onMessageDelivered(sentMessage.payloadMessage);
						break;

					case MESSAGE_TYPE.SUBACK:
						var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
						if (sentMessage) {
							if (sentMessage.timeOut)
								sentMessage.timeOut.cancel();
							// This will need to be fixed when we add multiple topic support
							if (wireMessage.returnCode[0] === 0x80) {
								if (sentMessage.onFailure) {
									sentMessage.onFailure(wireMessage.returnCode);
								}
							} else if (sentMessage.onSuccess) {
								sentMessage.onSuccess(wireMessage.returnCode);
							}
							delete this._sentMessages[wireMessage.messageIdentifier];
						}
						break;

					case MESSAGE_TYPE.UNSUBACK:
						var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
						if (sentMessage) {
							if (sentMessage.timeOut)
								sentMessage.timeOut.cancel();
							if (sentMessage.callback) {
								sentMessage.callback();
							}
							delete this._sentMessages[wireMessage.messageIdentifier];
						}

						break;

					case MESSAGE_TYPE.PINGRESP:
						/* The sendPinger or receivePinger may have sent a ping, the receivePinger has already been reset. */
						this.sendPinger.reset();
						break;

					case MESSAGE_TYPE.DISCONNECT:
						// Clients do not expect to receive disconnect packets.
						this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));
						break;

					default:
						this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));
				}
			} catch (error) {
				var errorStack = ((error.hasOwnProperty('stack') == 'undefined') ? error.stack.toString() : "No Error Stack Available");
				this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, errorStack]));
				return;
			}
		};

		/** @ignore */
		ClientImpl.prototype._on_socket_error = function (error) {
			if (!this._reconnecting) {
				this._disconnected(ERROR.SOCKET_ERROR.code, format(ERROR.SOCKET_ERROR, [error.data]));
			}
		};

		/** @ignore */
		ClientImpl.prototype._on_socket_close = function () {
			if (!this._reconnecting) {
				this._disconnected(ERROR.SOCKET_CLOSE.code, format(ERROR.SOCKET_CLOSE));
			}
		};

		/** @ignore */
		ClientImpl.prototype._socket_send = function (wireMessage) {

			if (wireMessage.type == 1) {
				var wireMessageMasked = this._traceMask(wireMessage, "password");
				this._trace("Client._socket_send", wireMessageMasked);
			}
			else this._trace("Client._socket_send", wireMessage);

			this.socket.send(wireMessage.encode());
			/* We have proved to the server we are alive. */
			this.sendPinger.reset();
		};

		/** @ignore */
		ClientImpl.prototype._receivePublish = function (wireMessage) {
			switch (wireMessage.payloadMessage.qos) {
				case "undefined":
				case 0:
					this._receiveMessage(wireMessage);
					break;

				case 1:
					var pubAckMessage = new WireMessage(MESSAGE_TYPE.PUBACK, { messageIdentifier: wireMessage.messageIdentifier });
					this._schedule_message(pubAckMessage);
					this._receiveMessage(wireMessage);
					break;

				case 2:
					this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
					this.store("Received:", wireMessage);
					var pubRecMessage = new WireMessage(MESSAGE_TYPE.PUBREC, { messageIdentifier: wireMessage.messageIdentifier });
					this._schedule_message(pubRecMessage);

					break;

				default:
					throw Error("Invaild qos=" + wireMmessage.payloadMessage.qos);
			}
		};

		/** @ignore */
		ClientImpl.prototype._receiveMessage = function (wireMessage) {
			if (this.onMessageArrived) {
				this.onMessageArrived(wireMessage.payloadMessage);
			}
		};

		/**
		 * Client has connected.
		 * @param {reconnect} [boolean] indicate if this was a result of reconnect operation.
		 * @param {uri} [string] fully qualified WebSocket URI of the server.
		 */
		ClientImpl.prototype._connected = function (reconnect, uri) {
			// Execute the onConnected callback if there is one.
			if (this.onConnected)
				this.onConnected(reconnect, uri);
		};

		/**
		 * Attempts to reconnect the client to the server.
	   * For each reconnect attempt, will double the reconnect interval
	   * up to 128 seconds.
		 */
		ClientImpl.prototype._reconnect = function () {
			this._trace("Client._reconnect");
			if (!this.connected) {
				this._reconnecting = true;
				this.sendPinger.cancel();
				this.receivePinger.cancel();
				if (this._reconnectInterval < 128)
					this._reconnectInterval = this._reconnectInterval * 2;
				if (this.connectOptions.uris) {
					this.hostIndex = 0;
					this._doConnect(this.connectOptions.uris[0]);
				} else {
					this._doConnect(this.uri);
				}
			}
		};

		/**
		 * Client has disconnected either at its own request or because the server
		 * or network disconnected it. Remove all non-durable state.
		 * @param {errorCode} [number] the error number.
		 * @param {errorText} [string] the error text.
		 * @ignore
		 */
		ClientImpl.prototype._disconnected = function (errorCode, errorText) {
			this._trace("Client._disconnected", errorCode, errorText);

			if (errorCode !== undefined && this._reconnecting) {
				//Continue automatic reconnect process
				this._reconnectTimeout = new Timeout(this, window, this._reconnectInterval, this._reconnect);
				return;
			}

			this.sendPinger.cancel();
			this.receivePinger.cancel();
			if (this._connectTimeout) {
				this._connectTimeout.cancel();
				this._connectTimeout = null;
			}

			// Clear message buffers.
			this._msg_queue = [];
			this._buffered_msg_queue = [];
			this._notify_msg_sent = {};

			if (this.socket) {
				// Cancel all socket callbacks so that they cannot be driven again by this socket.
				this.socket.onopen = null;
				this.socket.onmessage = null;
				this.socket.onerror = null;
				this.socket.onclose = null;
				if (this.socket.readyState === 1)
					this.socket.close();
				delete this.socket;
			}

			if (this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1) {
				// Try the next host.
				this.hostIndex++;
				this._doConnect(this.connectOptions.uris[this.hostIndex]);
			} else {

				if (errorCode === undefined) {
					errorCode = ERROR.OK.code;
					errorText = format(ERROR.OK);
				}

				// Run any application callbacks last as they may attempt to reconnect and hence create a new socket.
				if (this.connected) {
					this.connected = false;
					// Execute the connectionLostCallback if there is one, and we were connected.
					if (this.onConnectionLost) {
						this.onConnectionLost({ errorCode: errorCode, errorMessage: errorText, reconnect: this.connectOptions.reconnect, uri: this._wsuri });
					}
					if (errorCode !== ERROR.OK.code && this.connectOptions.reconnect) {
						// Start automatic reconnect process for the very first time since last successful connect.
						this._reconnectInterval = 1;
						this._reconnect();
						return;
					}
				} else {
					// Otherwise we never had a connection, so indicate that the connect has failed.
					if (this.connectOptions.mqttVersion === 4 && this.connectOptions.mqttVersionExplicit === false) {
						this._trace("Failed to connect V4, dropping back to V3");
						this.connectOptions.mqttVersion = 3;
						if (this.connectOptions.uris) {
							this.hostIndex = 0;
							this._doConnect(this.connectOptions.uris[0]);
						} else {
							this._doConnect(this.uri);
						}
					} else if (this.connectOptions.onFailure) {
						this.connectOptions.onFailure({ invocationContext: this.connectOptions.invocationContext, errorCode: errorCode, errorMessage: errorText });
					}
				}
			}
		};

		/** @ignore */
		ClientImpl.prototype._trace = function () {
			// Pass trace message back to client's callback function
			if (this.traceFunction) {
				for (var i in arguments) {
					if (typeof arguments[i] !== "undefined")
						arguments.splice(i, 1, JSON.stringify(arguments[i]));
				}
				var record = Array.prototype.slice.call(arguments).join("");
				this.traceFunction({ severity: "Debug", message: record });
			}

			//buffer style trace
			if (this._traceBuffer !== null) {
				for (var i = 0, max = arguments.length; i < max; i++) {
					if (this._traceBuffer.length == this._MAX_TRACE_ENTRIES) {
						this._traceBuffer.shift();
					}
					if (i === 0) this._traceBuffer.push(arguments[i]);
					else if (typeof arguments[i] === "undefined") this._traceBuffer.push(arguments[i]);
					else this._traceBuffer.push("  " + JSON.stringify(arguments[i]));
				}
			}
		};

		/** @ignore */
		ClientImpl.prototype._traceMask = function (traceObject, masked) {
			var traceObjectMasked = {};
			for (var attr in traceObject) {
				if (traceObject.hasOwnProperty(attr)) {
					if (attr == masked)
						traceObjectMasked[attr] = "******";
					else
						traceObjectMasked[attr] = traceObject[attr];
				}
			}
			return traceObjectMasked;
		};

		// ------------------------------------------------------------------------
		// Public Programming interface.
		// ------------------------------------------------------------------------

		/**
		 * The JavaScript application communicates to the server using a {@link Paho.Client} object.
		 * <p>
		 * Most applications will create just one Client object and then call its connect() method,
		 * however applications can create more than one Client object if they wish.
		 * In this case the combination of host, port and clientId attributes must be different for each Client object.
		 * <p>
		 * The send, subscribe and unsubscribe methods are implemented as asynchronous JavaScript methods
		 * (even though the underlying protocol exchange might be synchronous in nature).
		 * This means they signal their completion by calling back to the application,
		 * via Success or Failure callback functions provided by the application on the method in question.
		 * Such callbacks are called at most once per method invocation and do not persist beyond the lifetime
		 * of the script that made the invocation.
		 * <p>
		 * In contrast there are some callback functions, most notably <i>onMessageArrived</i>,
		 * that are defined on the {@link Paho.Client} object.
		 * These may get called multiple times, and aren't directly related to specific method invocations made by the client.
		 *
		 * @name Paho.Client
		 *
		 * @constructor
		 *
		 * @param {string} host - the address of the messaging server, as a fully qualified WebSocket URI, as a DNS name or dotted decimal IP address.
		 * @param {number} port - the port number to connect to - only required if host is not a URI
		 * @param {string} path - the path on the host to connect to - only used if host is not a URI. Default: '/mqtt'.
		 * @param {string} clientId - the Messaging client identifier, between 1 and 23 characters in length.
		 *
		 * @property {string} host - <i>read only</i> the server's DNS hostname or dotted decimal IP address.
		 * @property {number} port - <i>read only</i> the server's port.
		 * @property {string} path - <i>read only</i> the server's path.
		 * @property {string} clientId - <i>read only</i> used when connecting to the server.
		 * @property {function} onConnectionLost - called when a connection has been lost.
		 *                            after a connect() method has succeeded.
		 *                            Establish the call back used when a connection has been lost. The connection may be
		 *                            lost because the client initiates a disconnect or because the server or network
		 *                            cause the client to be disconnected. The disconnect call back may be called without
		 *                            the connectionComplete call back being invoked if, for example the client fails to
		 *                            connect.
		 *                            A single response object parameter is passed to the onConnectionLost callback containing the following fields:
		 *                            <ol>
		 *                            <li>errorCode
		 *                            <li>errorMessage
		 *                            </ol>
		 * @property {function} onMessageDelivered - called when a message has been delivered.
		 *                            All processing that this Client will ever do has been completed. So, for example,
		 *                            in the case of a Qos=2 message sent by this client, the PubComp flow has been received from the server
		 *                            and the message has been removed from persistent storage before this callback is invoked.
		 *                            Parameters passed to the onMessageDelivered callback are:
		 *                            <ol>
		 *                            <li>{@link Paho.Message} that was delivered.
		 *                            </ol>
		 * @property {function} onMessageArrived - called when a message has arrived in this Paho.client.
		 *                            Parameters passed to the onMessageArrived callback are:
		 *                            <ol>
		 *                            <li>{@link Paho.Message} that has arrived.
		 *                            </ol>
		 * @property {function} onConnected - called when a connection is successfully made to the server.
		 *                                  after a connect() method.
		 *                                  Parameters passed to the onConnected callback are:
		 *                                  <ol>
		 *                                  <li>reconnect (boolean) - If true, the connection was the result of a reconnect.</li>
		 *                                  <li>URI (string) - The URI used to connect to the server.</li>
		 *                                  </ol>
		 * @property {boolean} disconnectedPublishing - if set, will enable disconnected publishing in
		 *                                            in the event that the connection to the server is lost.
		 * @property {number} disconnectedBufferSize - Used to set the maximum number of messages that the disconnected
		 *                                             buffer will hold before rejecting new messages. Default size: 5000 messages
		 * @property {function} trace - called whenever trace is called. TODO
		 */
		var Client = function (host, port, path, clientId) {

			var uri;

			if (typeof host !== "string")
				throw new Error(format(ERROR.INVALID_TYPE, [typeof host, "host"]));

			if (arguments.length == 2) {
				// host: must be full ws:// uri
				// port: clientId
				clientId = port;
				uri = host;
				var match = uri.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);
				if (match) {
					host = match[4] || match[2];
					port = parseInt(match[7]);
					path = match[8];
				} else {
					throw new Error(format(ERROR.INVALID_ARGUMENT, [host, "host"]));
				}
			} else {
				if (arguments.length == 3) {
					clientId = path;
					path = "/mqtt";
				}
				if (typeof port !== "number" || port < 0)
					throw new Error(format(ERROR.INVALID_TYPE, [typeof port, "port"]));
				if (typeof path !== "string")
					throw new Error(format(ERROR.INVALID_TYPE, [typeof path, "path"]));

				var ipv6AddSBracket = (host.indexOf(":") !== -1 && host.slice(0, 1) !== "[" && host.slice(-1) !== "]");
				uri = "ws://" + (ipv6AddSBracket ? "[" + host + "]" : host) + ":" + port + path;
			}

			var clientIdLength = 0;
			for (var i = 0; i < clientId.length; i++) {
				var charCode = clientId.charCodeAt(i);
				if (0xD800 <= charCode && charCode <= 0xDBFF) {
					i++; // Surrogate pair.
				}
				clientIdLength++;
			}
			if (typeof clientId !== "string" || clientIdLength > 65535)
				throw new Error(format(ERROR.INVALID_ARGUMENT, [clientId, "clientId"]));

			var client = new ClientImpl(uri, host, port, path, clientId);
			this._getHost = function () { return host; };
			this._setHost = function () { throw new Error(format(ERROR.UNSUPPORTED_OPERATION)); };

			this._getPort = function () { return port; };
			this._setPort = function () { throw new Error(format(ERROR.UNSUPPORTED_OPERATION)); };

			this._getPath = function () { return path; };
			this._setPath = function () { throw new Error(format(ERROR.UNSUPPORTED_OPERATION)); };

			this._getURI = function () { return uri; };
			this._setURI = function () { throw new Error(format(ERROR.UNSUPPORTED_OPERATION)); };

			this._getClientId = function () { return client.clientId; };
			this._setClientId = function () { throw new Error(format(ERROR.UNSUPPORTED_OPERATION)); };

			this._getOnConnected = function () { return client.onConnected; };
			this._setOnConnected = function (newOnConnected) {
				if (typeof newOnConnected === "function")
					client.onConnected = newOnConnected;
				else
					throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnConnected, "onConnected"]));
			};

			this._getDisconnectedPublishing = function () { return client.disconnectedPublishing; };
			this._setDisconnectedPublishing = function (newDisconnectedPublishing) {
				client.disconnectedPublishing = newDisconnectedPublishing;
			};

			this._getDisconnectedBufferSize = function () { return client.disconnectedBufferSize; };
			this._setDisconnectedBufferSize = function (newDisconnectedBufferSize) {
				client.disconnectedBufferSize = newDisconnectedBufferSize;
			};

			this._getOnConnectionLost = function () { return client.onConnectionLost; };
			this._setOnConnectionLost = function (newOnConnectionLost) {
				if (typeof newOnConnectionLost === "function")
					client.onConnectionLost = newOnConnectionLost;
				else
					throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnConnectionLost, "onConnectionLost"]));
			};

			this._getOnMessageDelivered = function () { return client.onMessageDelivered; };
			this._setOnMessageDelivered = function (newOnMessageDelivered) {
				if (typeof newOnMessageDelivered === "function")
					client.onMessageDelivered = newOnMessageDelivered;
				else
					throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnMessageDelivered, "onMessageDelivered"]));
			};

			this._getOnMessageArrived = function () { return client.onMessageArrived; };
			this._setOnMessageArrived = function (newOnMessageArrived) {
				if (typeof newOnMessageArrived === "function")
					client.onMessageArrived = newOnMessageArrived;
				else
					throw new Error(format(ERROR.INVALID_TYPE, [typeof newOnMessageArrived, "onMessageArrived"]));
			};

			this._getTrace = function () { return client.traceFunction; };
			this._setTrace = function (trace) {
				if (typeof trace === "function") {
					client.traceFunction = trace;
				} else {
					throw new Error(format(ERROR.INVALID_TYPE, [typeof trace, "onTrace"]));
				}
			};

			/**
			 * Connect this Messaging client to its server.
			 *
			 * @name Paho.Client#connect
			 * @function
			 * @param {object} connectOptions - Attributes used with the connection.
			 * @param {number} connectOptions.timeout - If the connect has not succeeded within this
			 *                    number of seconds, it is deemed to have failed.
			 *                    The default is 30 seconds.
			 * @param {string} connectOptions.userName - Authentication username for this connection.
			 * @param {string} connectOptions.password - Authentication password for this connection.
			 * @param {Paho.Message} connectOptions.willMessage - sent by the server when the client
			 *                    disconnects abnormally.
			 * @param {number} connectOptions.keepAliveInterval - the server disconnects this client if
			 *                    there is no activity for this number of seconds.
			 *                    The default value of 60 seconds is assumed if not set.
			 * @param {boolean} connectOptions.cleanSession - if true(default) the client and server
			 *                    persistent state is deleted on successful connect.
			 * @param {boolean} connectOptions.useSSL - if present and true, use an SSL Websocket connection.
			 * @param {object} connectOptions.invocationContext - passed to the onSuccess callback or onFailure callback.
			 * @param {function} connectOptions.onSuccess - called when the connect acknowledgement
			 *                    has been received from the server.
			 * A single response object parameter is passed to the onSuccess callback containing the following fields:
			 * <ol>
			 * <li>invocationContext as passed in to the onSuccess method in the connectOptions.
			 * </ol>
		 * @param {function} connectOptions.onFailure - called when the connect request has failed or timed out.
			 * A single response object parameter is passed to the onFailure callback containing the following fields:
			 * <ol>
			 * <li>invocationContext as passed in to the onFailure method in the connectOptions.
			 * <li>errorCode a number indicating the nature of the error.
			 * <li>errorMessage text describing the error.
			 * </ol>
		 * @param {array} connectOptions.hosts - If present this contains either a set of hostnames or fully qualified
			 * WebSocket URIs (ws://iot.eclipse.org:80/ws), that are tried in order in place
			 * of the host and port paramater on the construtor. The hosts are tried one at at time in order until
			 * one of then succeeds.
		 * @param {array} connectOptions.ports - If present the set of ports matching the hosts. If hosts contains URIs, this property
			 * is not used.
		 * @param {boolean} connectOptions.reconnect - Sets whether the client will automatically attempt to reconnect
		 * to the server if the connection is lost.
		 *<ul>
		 *<li>If set to false, the client will not attempt to automatically reconnect to the server in the event that the
		 * connection is lost.</li>
		 *<li>If set to true, in the event that the connection is lost, the client will attempt to reconnect to the server.
		 * It will initially wait 1 second before it attempts to reconnect, for every failed reconnect attempt, the delay
		 * will double until it is at 2 minutes at which point the delay will stay at 2 minutes.</li>
		 *</ul>
		 * @param {number} connectOptions.mqttVersion - The version of MQTT to use to connect to the MQTT Broker.
		 *<ul>
		 *<li>3 - MQTT V3.1</li>
		 *<li>4 - MQTT V3.1.1</li>
		 *</ul>
		 * @param {boolean} connectOptions.mqttVersionExplicit - If set to true, will force the connection to use the
		 * selected MQTT Version or will fail to connect.
		 * @param {array} connectOptions.uris - If present, should contain a list of fully qualified WebSocket uris
		 * (e.g. ws://iot.eclipse.org:80/ws), that are tried in order in place of the host and port parameter of the construtor.
		 * The uris are tried one at a time in order until one of them succeeds. Do not use this in conjunction with hosts as
		 * the hosts array will be converted to uris and will overwrite this property.
			 * @throws {InvalidState} If the client is not in disconnected state. The client must have received connectionLost
			 * or disconnected before calling connect for a second or subsequent time.
			 */
			this.connect = function (connectOptions) {
				connectOptions = connectOptions || {};
				validate(connectOptions, {
					timeout: "number",
					userName: "string",
					password: "string",
					willMessage: "object",
					keepAliveInterval: "number",
					cleanSession: "boolean",
					useSSL: "boolean",
					invocationContext: "object",
					onSuccess: "function",
					onFailure: "function",
					hosts: "object",
					ports: "object",
					reconnect: "boolean",
					mqttVersion: "number",
					mqttVersionExplicit: "boolean",
					uris: "object"
				});

				// If no keep alive interval is set, assume 60 seconds.
				if (connectOptions.keepAliveInterval === undefined)
					connectOptions.keepAliveInterval = 60;

				if (connectOptions.mqttVersion > 4 || connectOptions.mqttVersion < 3) {
					throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.mqttVersion, "connectOptions.mqttVersion"]));
				}

				if (connectOptions.mqttVersion === undefined) {
					connectOptions.mqttVersionExplicit = false;
					connectOptions.mqttVersion = 4;
				} else {
					connectOptions.mqttVersionExplicit = true;
				}

				//Check that if password is set, so is username
				if (connectOptions.password !== undefined && connectOptions.userName === undefined)
					throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.password, "connectOptions.password"]));

				if (connectOptions.willMessage) {
					if (!(connectOptions.willMessage instanceof Message))
						throw new Error(format(ERROR.INVALID_TYPE, [connectOptions.willMessage, "connectOptions.willMessage"]));
					// The will message must have a payload that can be represented as a string.
					// Cause the willMessage to throw an exception if this is not the case.
					connectOptions.willMessage.stringPayload = null;

					if (typeof connectOptions.willMessage.destinationName === "undefined")
						throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.willMessage.destinationName, "connectOptions.willMessage.destinationName"]));
				}
				if (typeof connectOptions.cleanSession === "undefined")
					connectOptions.cleanSession = true;
				if (connectOptions.hosts) {

					if (!(connectOptions.hosts instanceof Array))
						throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
					if (connectOptions.hosts.length < 1)
						throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));

					var usingURIs = false;
					for (var i = 0; i < connectOptions.hosts.length; i++) {
						if (typeof connectOptions.hosts[i] !== "string")
							throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
						if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(connectOptions.hosts[i])) {
							if (i === 0) {
								usingURIs = true;
							} else if (!usingURIs) {
								throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
							}
						} else if (usingURIs) {
							throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
						}
					}

					if (!usingURIs) {
						if (!connectOptions.ports)
							throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
						if (!(connectOptions.ports instanceof Array))
							throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
						if (connectOptions.hosts.length !== connectOptions.ports.length)
							throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));

						connectOptions.uris = [];

						for (var i = 0; i < connectOptions.hosts.length; i++) {
							if (typeof connectOptions.ports[i] !== "number" || connectOptions.ports[i] < 0)
								throw new Error(format(ERROR.INVALID_TYPE, [typeof connectOptions.ports[i], "connectOptions.ports[" + i + "]"]));
							var host = connectOptions.hosts[i];
							var port = connectOptions.ports[i];

							var ipv6 = (host.indexOf(":") !== -1);
							uri = "wss://" + (ipv6 ? "[" + host + "]" : host) + ":" + port + path;
							connectOptions.uris.push(uri);
						}
					} else {
						connectOptions.uris = connectOptions.hosts;
					}
				}

				client.connect(connectOptions);
			};

			/**
			 * Subscribe for messages, request receipt of a copy of messages sent to the destinations described by the filter.
			 *
			 * @name Paho.Client#subscribe
			 * @function
			 * @param {string} filter describing the destinations to receive messages from.
			 * <br>
			 * @param {object} subscribeOptions - used to control the subscription
			 *
			 * @param {number} subscribeOptions.qos - the maiximum qos of any publications sent
			 *                                  as a result of making this subscription.
			 * @param {object} subscribeOptions.invocationContext - passed to the onSuccess callback
			 *                                  or onFailure callback.
			 * @param {function} subscribeOptions.onSuccess - called when the subscribe acknowledgement
			 *                                  has been received from the server.
			 *                                  A single response object parameter is passed to the onSuccess callback containing the following fields:
			 *                                  <ol>
			 *                                  <li>invocationContext if set in the subscribeOptions.
			 *                                  </ol>
			 * @param {function} subscribeOptions.onFailure - called when the subscribe request has failed or timed out.
			 *                                  A single response object parameter is passed to the onFailure callback containing the following fields:
			 *                                  <ol>
			 *                                  <li>invocationContext - if set in the subscribeOptions.
			 *                                  <li>errorCode - a number indicating the nature of the error.
			 *                                  <li>errorMessage - text describing the error.
			 *                                  </ol>
			 * @param {number} subscribeOptions.timeout - which, if present, determines the number of
			 *                                  seconds after which the onFailure calback is called.
			 *                                  The presence of a timeout does not prevent the onSuccess
			 *                                  callback from being called when the subscribe completes.
			 * @throws {InvalidState} if the client is not in connected state.
			 */
			this.subscribe = function (filter, subscribeOptions) {
				if (typeof filter !== "string")
					throw new Error("Invalid argument:" + filter);
				subscribeOptions = subscribeOptions || {};
				validate(subscribeOptions, {
					qos: "number",
					invocationContext: "object",
					onSuccess: "function",
					onFailure: "function",
					timeout: "number"
				});
				if (subscribeOptions.timeout && !subscribeOptions.onFailure)
					throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
				if (typeof subscribeOptions.qos !== "undefined" && !(subscribeOptions.qos === 0 || subscribeOptions.qos === 1 || subscribeOptions.qos === 2))
					throw new Error(format(ERROR.INVALID_ARGUMENT, [subscribeOptions.qos, "subscribeOptions.qos"]));
				client.subscribe(filter, subscribeOptions);
			};

			/**
			 * Unsubscribe for messages, stop receiving messages sent to destinations described by the filter.
			 *
			 * @name Paho.Client#unsubscribe
			 * @function
			 * @param {string} filter - describing the destinations to receive messages from.
			 * @param {object} unsubscribeOptions - used to control the subscription
			 * @param {object} unsubscribeOptions.invocationContext - passed to the onSuccess callback
												  or onFailure callback.
			 * @param {function} unsubscribeOptions.onSuccess - called when the unsubscribe acknowledgement has been received from the server.
			 *                                    A single response object parameter is passed to the
			 *                                    onSuccess callback containing the following fields:
			 *                                    <ol>
			 *                                    <li>invocationContext - if set in the unsubscribeOptions.
			 *                                    </ol>
			 * @param {function} unsubscribeOptions.onFailure called when the unsubscribe request has failed or timed out.
			 *                                    A single response object parameter is passed to the onFailure callback containing the following fields:
			 *                                    <ol>
			 *                                    <li>invocationContext - if set in the unsubscribeOptions.
			 *                                    <li>errorCode - a number indicating the nature of the error.
			 *                                    <li>errorMessage - text describing the error.
			 *                                    </ol>
			 * @param {number} unsubscribeOptions.timeout - which, if present, determines the number of seconds
			 *                                    after which the onFailure callback is called. The presence of
			 *                                    a timeout does not prevent the onSuccess callback from being
			 *                                    called when the unsubscribe completes
			 * @throws {InvalidState} if the client is not in connected state.
			 */
			this.unsubscribe = function (filter, unsubscribeOptions) {
				if (typeof filter !== "string")
					throw new Error("Invalid argument:" + filter);
				unsubscribeOptions = unsubscribeOptions || {};
				validate(unsubscribeOptions, {
					invocationContext: "object",
					onSuccess: "function",
					onFailure: "function",
					timeout: "number"
				});
				if (unsubscribeOptions.timeout && !unsubscribeOptions.onFailure)
					throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
				client.unsubscribe(filter, unsubscribeOptions);
			};

			/**
			 * Send a message to the consumers of the destination in the Message.
			 *
			 * @name Paho.Client#send
			 * @function
			 * @param {string|Paho.Message} topic - <b>mandatory</b> The name of the destination to which the message is to be sent.
			 * 					   - If it is the only parameter, used as Paho.Message object.
			 * @param {String|ArrayBuffer} payload - The message data to be sent.
			 * @param {number} qos The Quality of Service used to deliver the message.
			 * 		<dl>
			 * 			<dt>0 Best effort (default).
			 *     			<dt>1 At least once.
			 *     			<dt>2 Exactly once.
			 * 		</dl>
			 * @param {Boolean} retained If true, the message is to be retained by the server and delivered
			 *                     to both current and future subscriptions.
			 *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
			 *                     A received message has the retained boolean set to true if the message was published
			 *                     with the retained boolean set to true
			 *                     and the subscrption was made after the message has been published.
			 * @throws {InvalidState} if the client is not connected.
			 */
			this.send = function (topic, payload, qos, retained) {
				var message;

				if (arguments.length === 0) {
					throw new Error("Invalid argument." + "length");

				} else if (arguments.length == 1) {

					if (!(topic instanceof Message) && (typeof topic !== "string"))
						throw new Error("Invalid argument:" + typeof topic);

					message = topic;
					if (typeof message.destinationName === "undefined")
						throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
					client.send(message);

				} else {
					//parameter checking in Message object
					message = new Message(payload);
					message.destinationName = topic;
					if (arguments.length >= 3)
						message.qos = qos;
					if (arguments.length >= 4)
						message.retained = retained;
					client.send(message);
				}
			};

			/**
			 * Publish a message to the consumers of the destination in the Message.
			 * Synonym for Paho.Mqtt.Client#send
			 *
			 * @name Paho.Client#publish
			 * @function
			 * @param {string|Paho.Message} topic - <b>mandatory</b> The name of the topic to which the message is to be published.
			 * 					   - If it is the only parameter, used as Paho.Message object.
			 * @param {String|ArrayBuffer} payload - The message data to be published.
			 * @param {number} qos The Quality of Service used to deliver the message.
			 * 		<dl>
			 * 			<dt>0 Best effort (default).
			 *     			<dt>1 At least once.
			 *     			<dt>2 Exactly once.
			 * 		</dl>
			 * @param {Boolean} retained If true, the message is to be retained by the server and delivered
			 *                     to both current and future subscriptions.
			 *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
			 *                     A received message has the retained boolean set to true if the message was published
			 *                     with the retained boolean set to true
			 *                     and the subscrption was made after the message has been published.
			 * @throws {InvalidState} if the client is not connected.
			 */
			this.publish = function (topic, payload, qos, retained) {
				console.log("Publising message to: ", topic);
				var message;

				if (arguments.length === 0) {
					throw new Error("Invalid argument." + "length");

				} else if (arguments.length == 1) {

					if (!(topic instanceof Message) && (typeof topic !== "string"))
						throw new Error("Invalid argument:" + typeof topic);

					message = topic;
					if (typeof message.destinationName === "undefined")
						throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
					client.send(message);

				} else {
					//parameter checking in Message object
					message = new Message(payload);
					message.destinationName = topic;
					if (arguments.length >= 3)
						message.qos = qos;
					if (arguments.length >= 4)
						message.retained = retained;
					client.send(message);
				}
			};

			/**
			 * Normal disconnect of this Messaging client from its server.
			 *
			 * @name Paho.Client#disconnect
			 * @function
			 * @throws {InvalidState} if the client is already disconnected.
			 */
			this.disconnect = function () {
				client.disconnect();
			};

			/**
			 * Get the contents of the trace log.
			 *
			 * @name Paho.Client#getTraceLog
			 * @function
			 * @return {Object[]} tracebuffer containing the time ordered trace records.
			 */
			this.getTraceLog = function () {
				return client.getTraceLog();
			};

			/**
			 * Start tracing.
			 *
			 * @name Paho.Client#startTrace
			 * @function
			 */
			this.startTrace = function () {
				client.startTrace();
			};

			/**
			 * Stop tracing.
			 *
			 * @name Paho.Client#stopTrace
			 * @function
			 */
			this.stopTrace = function () {
				client.stopTrace();
			};

			this.isConnected = function () {
				return client.connected;
			};
		};

		Client.prototype = {
			get host() { return this._getHost(); },
			set host(newHost) { this._setHost(newHost); },

			get port() { return this._getPort(); },
			set port(newPort) { this._setPort(newPort); },

			get path() { return this._getPath(); },
			set path(newPath) { this._setPath(newPath); },

			get clientId() { return this._getClientId(); },
			set clientId(newClientId) { this._setClientId(newClientId); },

			get onConnected() { return this._getOnConnected(); },
			set onConnected(newOnConnected) { this._setOnConnected(newOnConnected); },

			get disconnectedPublishing() { return this._getDisconnectedPublishing(); },
			set disconnectedPublishing(newDisconnectedPublishing) { this._setDisconnectedPublishing(newDisconnectedPublishing); },

			get disconnectedBufferSize() { return this._getDisconnectedBufferSize(); },
			set disconnectedBufferSize(newDisconnectedBufferSize) { this._setDisconnectedBufferSize(newDisconnectedBufferSize); },

			get onConnectionLost() { return this._getOnConnectionLost(); },
			set onConnectionLost(newOnConnectionLost) { this._setOnConnectionLost(newOnConnectionLost); },

			get onMessageDelivered() { return this._getOnMessageDelivered(); },
			set onMessageDelivered(newOnMessageDelivered) { this._setOnMessageDelivered(newOnMessageDelivered); },

			get onMessageArrived() { return this._getOnMessageArrived(); },
			set onMessageArrived(newOnMessageArrived) { this._setOnMessageArrived(newOnMessageArrived); },

			get trace() { return this._getTrace(); },
			set trace(newTraceFunction) { this._setTrace(newTraceFunction); }

		};

		/**
		 * An application message, sent or received.
		 * <p>
		 * All attributes may be null, which implies the default values.
		 *
		 * @name Paho.Message
		 * @constructor
		 * @param {String|ArrayBuffer} payload The message data to be sent.
		 * <p>
		 * @property {string} payloadString <i>read only</i> The payload as a string if the payload consists of valid UTF-8 characters.
		 * @property {ArrayBuffer} payloadBytes <i>read only</i> The payload as an ArrayBuffer.
		 * <p>
		 * @property {string} destinationName <b>mandatory</b> The name of the destination to which the message is to be sent
		 *                    (for messages about to be sent) or the name of the destination from which the message has been received.
		 *                    (for messages received by the onMessage function).
		 * <p>
		 * @property {number} qos The Quality of Service used to deliver the message.
		 * <dl>
		 *     <dt>0 Best effort (default).
		 *     <dt>1 At least once.
		 *     <dt>2 Exactly once.
		 * </dl>
		 * <p>
		 * @property {Boolean} retained If true, the message is to be retained by the server and delivered
		 *                     to both current and future subscriptions.
		 *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
		 *                     A received message has the retained boolean set to true if the message was published
		 *                     with the retained boolean set to true
		 *                     and the subscrption was made after the message has been published.
		 * <p>
		 * @property {Boolean} duplicate <i>read only</i> If true, this message might be a duplicate of one which has already been received.
		 *                     This is only set on messages received from the server.
		 *
		 */
		var Message = function (newPayload) {
			var payload;
			if (typeof newPayload === "string" ||
				newPayload instanceof ArrayBuffer ||
				newPayload instanceof Int8Array ||
				newPayload instanceof Uint8Array ||
				newPayload instanceof Int16Array ||
				newPayload instanceof Uint16Array ||
				newPayload instanceof Int32Array ||
				newPayload instanceof Uint32Array ||
				newPayload instanceof Float32Array ||
				newPayload instanceof Float64Array
			) {
				payload = newPayload;
			} else {
				throw (format(ERROR.INVALID_ARGUMENT, [newPayload, "newPayload"]));
			}

			this._getPayloadString = function () {
				if (typeof payload === "string")
					return payload;
				else
					return parseUTF8(payload, 0, payload.length);
			};

			this._getPayloadBytes = function () {
				if (typeof payload === "string") {
					var buffer = new ArrayBuffer(UTF8Length(payload));
					var byteStream = new Uint8Array(buffer);
					stringToUTF8(payload, byteStream, 0);

					return byteStream;
				} else {
					return payload;
				}
			};

			var destinationName;
			this._getDestinationName = function () { return destinationName; };
			this._setDestinationName = function (newDestinationName) {
				if (typeof newDestinationName === "string")
					destinationName = newDestinationName;
				else
					throw new Error(format(ERROR.INVALID_ARGUMENT, [newDestinationName, "newDestinationName"]));
			};

			var qos = 0;
			this._getQos = function () { return qos; };
			this._setQos = function (newQos) {
				if (newQos === 0 || newQos === 1 || newQos === 2)
					qos = newQos;
				else
					throw new Error("Invalid argument:" + newQos);
			};

			var retained = false;
			this._getRetained = function () { return retained; };
			this._setRetained = function (newRetained) {
				if (typeof newRetained === "boolean")
					retained = newRetained;
				else
					throw new Error(format(ERROR.INVALID_ARGUMENT, [newRetained, "newRetained"]));
			};

			var duplicate = false;
			this._getDuplicate = function () { return duplicate; };
			this._setDuplicate = function (newDuplicate) { duplicate = newDuplicate; };
		};

		Message.prototype = {
			get payloadString() { return this._getPayloadString(); },
			get payloadBytes() { return this._getPayloadBytes(); },

			get destinationName() { return this._getDestinationName(); },
			set destinationName(newDestinationName) { this._setDestinationName(newDestinationName); },

			get topic() { return this._getDestinationName(); },
			set topic(newTopic) { this._setDestinationName(newTopic); },

			get qos() { return this._getQos(); },
			set qos(newQos) { this._setQos(newQos); },

			get retained() { return this._getRetained(); },
			set retained(newRetained) { this._setRetained(newRetained); },

			get duplicate() { return this._getDuplicate(); },
			set duplicate(newDuplicate) { this._setDuplicate(newDuplicate); }
		};

		// Module contents.
		return {
			Client: Client,
			Message: Message
		};
	})(window);
	return PahoMQTT;
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isTransformer;
function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
}

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(66);



/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */

var prop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function prop(p, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])([p], obj);
});
/* harmony default export */ __webpack_exports__["a"] = (prop);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(22);





/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } :
  // else
  Object(__WEBPACK_IMPORTED_MODULE_2__internal_reduce__["a" /* default */])(function (acc, f) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(acc, Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(f, applyX));
  }, [], applyF);
});
/* harmony default export */ __webpack_exports__["a"] = (ap);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);



/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curry = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function curry(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(fn.length, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (curry);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xchain__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(22);






/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['fantasy-land/chain', 'chain'], __WEBPACK_IMPORTED_MODULE_3__internal_xchain__["a" /* default */], function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_makeFlat__["a" /* default */])(false)(Object(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(fn, monad));
}));
/* harmony default export */ __webpack_exports__["a"] = (chain);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(101);



/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(32);




/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('tail', /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(1, Infinity)));
/* harmony default export */ __webpack_exports__["a"] = (tail);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isFunction__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isString__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toString__ = __webpack_require__(75);






/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function concat(a, b) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(a)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(b)) {
      return a.concat(b);
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not an array');
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(a)) {
    if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isString__["a" /* default */])(b)) {
      return a + b;
    }
    throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(b) + ' is not a string');
  }
  if (a != null && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isFunction__["a" /* default */])(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(Object(__WEBPACK_IMPORTED_MODULE_4__toString__["a" /* default */])(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
/* harmony default export */ __webpack_exports__["a"] = (concat);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(41);








/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['filter'], __WEBPACK_IMPORTED_MODULE_5__internal_xfilter__["a" /* default */], function (pred, filterable) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(filterable) ? Object(__WEBPACK_IMPORTED_MODULE_4__internal_reduce__["a" /* default */])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, Object(__WEBPACK_IMPORTED_MODULE_6__keys__["a" /* default */])(filterable)) :
  // else
  Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(pred, filterable);
}));
/* harmony default export */ __webpack_exports__["a"] = (filter);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _filter;
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isObject;
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adjust__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__always__ = __webpack_require__(64);




/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
var update = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function update(idx, x, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__adjust__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__always__["a" /* default */])(x), idx, list);
});
/* harmony default export */ __webpack_exports__["a"] = (update);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtake__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(32);





/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
var take = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['take'], __WEBPACK_IMPORTED_MODULE_2__internal_xtake__["a" /* default */], function take(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, n < 0 ? Infinity : n, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (take);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_identity__ = __webpack_require__(153);



/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (identity);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _identity;
function _identity(x) {
  return x;
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uniqBy__ = __webpack_require__(234);



/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__uniqBy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (uniq);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectAssign__ = __webpack_require__(569);


/* harmony default export */ __webpack_exports__["a"] = (typeof Object.assign === 'function' ? Object.assign : __WEBPACK_IMPORTED_MODULE_0__objectAssign__["a" /* default */]);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, l)) {
      result[k] = Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, r) && !Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (mergeWithKey);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(108)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(79)(false);
var IE_PROTO = __webpack_require__(110)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(52);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(23);
var gOPN = __webpack_require__(55).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(52);
var gOPS = __webpack_require__(80);
var pIE = __webpack_require__(70);
var toObject = __webpack_require__(14);
var IObject = __webpack_require__(69);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(16);
var isObject = __webpack_require__(7);
var invoke = __webpack_require__(164);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 164 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(5).parseInt;
var $trim = __webpack_require__(61).trim;
var ws = __webpack_require__(114);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(5).parseFloat;
var $trim = __webpack_require__(61).trim;

module.exports = 1 / $parseFloat(__webpack_require__(114) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(29);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(7);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 169 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(117);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(16);
var toObject = __webpack_require__(14);
var IObject = __webpack_require__(69);
var toLength = __webpack_require__(11);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(53);
var toLength = __webpack_require__(11);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(9) && /./g.flags != 'g') __webpack_require__(10).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(84)
});


/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(132);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(179);
var validate = __webpack_require__(63);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(87)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(10).f;
var create = __webpack_require__(54);
var redefineAll = __webpack_require__(59);
var ctx = __webpack_require__(28);
var anInstance = __webpack_require__(57);
var forOf = __webpack_require__(58);
var $iterDefine = __webpack_require__(120);
var step = __webpack_require__(174);
var setSpecies = __webpack_require__(56);
var DESCRIPTORS = __webpack_require__(9);
var fastKey = __webpack_require__(45).fastKey;
var validate = __webpack_require__(63);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(179);
var validate = __webpack_require__(63);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(87)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(38)(0);
var redefine = __webpack_require__(20);
var meta = __webpack_require__(45);
var assign = __webpack_require__(162);
var weak = __webpack_require__(182);
var isObject = __webpack_require__(7);
var fails = __webpack_require__(6);
var validate = __webpack_require__(63);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(87)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(59);
var getWeak = __webpack_require__(45).getWeak;
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);
var anInstance = __webpack_require__(57);
var forOf = __webpack_require__(58);
var createArrayMethod = __webpack_require__(38);
var $has = __webpack_require__(18);
var validate = __webpack_require__(63);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(36);
var toLength = __webpack_require__(11);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(55);
var gOPS = __webpack_require__(80);
var anObject = __webpack_require__(4);
var Reflect = __webpack_require__(5).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(81);
var isObject = __webpack_require__(7);
var toLength = __webpack_require__(11);
var ctx = __webpack_require__(28);
var IS_CONCAT_SPREADABLE = __webpack_require__(8)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(11);
var repeat = __webpack_require__(116);
var defined = __webpack_require__(35);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(52);
var toIObject = __webpack_require__(23);
var isEnum = __webpack_require__(70).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(71);
var from = __webpack_require__(189);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(58);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 190 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  gameWidth: 1920,
  gameHeight: 1080,
  // gameWidth: 640,
  // gameHeight: 640,
  localStorageName: 'nobuwebclient',
  webfonts: ['Bangers']
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Sprite) {
    _inherits(_class, _Phaser$Sprite);

    function _class(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset;

        _classCallCheck(this, _class);

        // // 固定物體 (避免受重力影響)
        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, x, y, asset));

        _this.game.physics.arcade.enable(_this);
        _this.body.immovable = true;
        return _this;
    }

    _createClass(_class, [{
        key: 'update',
        value: function update() {}
    }]);

    return _class;
}(_phaser2.default.Sprite);

exports.default = _class;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pahoMqtt = __webpack_require__(136);

var _pahoMqtt2 = _interopRequireDefault(_pahoMqtt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = {

    /**
     * 加入房間
     * @param {string} master 
     */
    JoinRoom: function JoinRoom(master) {
        this.payload = new _pahoMqtt2.default.Message(JSON.stringify({
            action: 'join',
            key: master
        }));
        this.payload.destinationName = 'room';
        this.payload.qos = 0;
        return this.payload;
    },


    /**
     * 開新房間
     * @param {string} master 
     */
    CreateRoom: function CreateRoom(master) {
        this.payload = new _pahoMqtt2.default.Message(JSON.stringify({
            action: 'create',
            key: master
        }));
        this.payload.destinationName = 'room';
        this.payload.qos = 0;
        return this.payload;
    },


    /**
     * 刪除角色
     * @param {string} master 
     * @param {string} player 
     */
    RemovePlayer: function RemovePlayer(master, player) {
        this.payload = new _pahoMqtt2.default.Message(JSON.stringify({
            id: player
        }));
        this.payload.destinationName = 'delete/' + master;
        this.payload.qos = 0;
        return this.payload;
    },


    /**
     * 刪除角色
     * @param {string} master
     */
    RemoveRoom: function RemoveRoom(master) {
        this.payload = new _pahoMqtt2.default.Message(JSON.stringify({
            key: master
        }));
        this.payload.destinationName = 'delete_room';
        this.payload.qos = 0;
        return this.payload;
    },


    /**
     *  移動角色
     * @param {string} master
     * @param {string} player
     * @param {number} x
     * @param {number} y
     */
    MovePlayer: function MovePlayer(master, player, x, y) {
        this.payload = new _pahoMqtt2.default.Message(JSON.stringify({
            x: x,
            y: y,
            id: player
        }));
        this.payload.destinationName = 'game/' + master;
        this.payload.qos = 0;
        return this.payload;
    }
};
exports.default = Message;

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(3);



/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
var adjust = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
/* harmony default export */ __webpack_exports__["a"] = (adjust);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _xwrap;
var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function bind(fn, thisObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (bind);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(17);


var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])('callee', x);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_isArguments);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function and(a, b) {
  return a && b;
});
/* harmony default export */ __webpack_exports__["a"] = (and);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xany__ = __webpack_require__(204);




/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
var any = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_2__internal_xany__["a" /* default */], function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));
/* harmony default export */ __webpack_exports__["a"] = (any);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XAny = /*#__PURE__*/function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return XAny;
}();

var _xany = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xany(f, xf) {
  return new XAny(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xany);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
var apply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function apply(fn, args) {
  return fn.apply(this, args);
});
/* harmony default export */ __webpack_exports__["a"] = (apply);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(41);



/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
var values = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function values(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
/* harmony default export */ __webpack_exports__["a"] = (values);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isInteger__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assoc__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isNil__ = __webpack_require__(208);







/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
var assocPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !Object(__WEBPACK_IMPORTED_MODULE_5__isNil__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(idx, obj) ? obj[idx] : Object(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__internal_isInteger__["a" /* default */])(idx) && Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_4__assoc__["a" /* default */])(idx, val, obj);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (assocPath);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isNil(x) {
  return x == null;
});
/* harmony default export */ __webpack_exports__["a"] = (isNil);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ap__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(22);






/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function liftN(arity, fn) {
  var lifted = Object(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, fn);
  return Object(__WEBPACK_IMPORTED_MODULE_3__curryN__["a" /* default */])(arity, function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__ap__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__map__["a" /* default */])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (liftN);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _makeFlat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike__ = __webpack_require__(96);


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike__["a" /* default */])(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _clone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloneRegExp__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(143);



/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (Object(__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */])(value)) {
    case 'Object':
      return copy({});
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return Object(__WEBPACK_IMPORTED_MODULE_0__cloneRegExp__["a" /* default */])(value);
    default:
      return value;
  }
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _cloneRegExp;
function _cloneRegExp(pattern) {
                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function not(a) {
  return !a;
});
/* harmony default export */ __webpack_exports__["a"] = (not);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipe;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipe__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(145);





/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipe__["a" /* default */], arguments[0], Object(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = composeK;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chain__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(22);




/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return Object(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__chain__["a" /* default */], init)), last);
}

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeP;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_pipeP__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tail__ = __webpack_require__(145);





/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arguments[0].length, Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_pipeP__["a" /* default */], arguments[0], Object(__WEBPACK_IMPORTED_MODULE_3__tail__["a" /* default */])(arguments)));
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _indexOf;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equals__ = __webpack_require__(27);


function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__equals__["a" /* default */])(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (identical);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _complement;
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nAry__ = __webpack_require__(98);




/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */
var constructN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__curry__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__nAry__["a" /* default */])(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (constructN);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pluck__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reduce__ = __webpack_require__(42);







/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function converge(after, fns) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_4__pluck__["a" /* default */])('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, Object(__WEBPACK_IMPORTED_MODULE_1__internal_map__["a" /* default */])(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (converge);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
/* harmony default export */ __webpack_exports__["a"] = (defaultTo);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
var difference = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], second) && !Object(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (difference);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(3);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
var differenceWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], second) && !Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (differenceWith);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
var dissoc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (dissoc);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
var remove = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (remove);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(32);





/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
var drop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['drop'], __WEBPACK_IMPORTED_MODULE_2__internal_xdrop__["a" /* default */], function drop(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(Math.max(0, n), Infinity, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (drop);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XDropRepeatsWith = /*#__PURE__*/function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropRepeatsWith.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return XDropRepeatsWith;
}();

var _xdropRepeatsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropRepeatsWith(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropRepeatsWith);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__last__ = __webpack_require__(230);





/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
var dropRepeatsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */], function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(Object(__WEBPACK_IMPORTED_MODULE_3__last__["a" /* default */])(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
/* harmony default export */ __webpack_exports__["a"] = (dropRepeatsWith);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(76);


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
var last = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(-1);
/* harmony default export */ __webpack_exports__["a"] = (last);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function or(a, b) {
  return a || b;
});
/* harmony default export */ __webpack_exports__["a"] = (or);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArguments__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_isObject__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_isString__ = __webpack_require__(73);






/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
var empty = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(x) ? [] : Object(__WEBPACK_IMPORTED_MODULE_4__internal_isString__["a" /* default */])(x) ? '' : Object(__WEBPACK_IMPORTED_MODULE_3__internal_isObject__["a" /* default */])(x) ? {} : Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArguments__["a" /* default */])(x) ? function () {
    return arguments;
  }() :
  // else
  void 0;
});
/* harmony default export */ __webpack_exports__["a"] = (empty);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop__ = __webpack_require__(227);



/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
var takeLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLast(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__drop__["a" /* default */])(n >= 0 ? xs.length - n : 0, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (takeLast);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_Set__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
var uniqBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqBy(fn, list) {
  var set = new __WEBPACK_IMPORTED_MODULE_0__internal_Set__["a" /* default */]();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqBy);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
var objOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
/* harmony default export */ __webpack_exports__["a"] = (objOf);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
var is = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
/* harmony default export */ __webpack_exports__["a"] = (is);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converge__ = __webpack_require__(221);



/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
var juxt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function juxt(fns) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__converge__["a" /* default */])(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
/* harmony default export */ __webpack_exports__["a"] = (juxt);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(239);



/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
var length = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function length(list) {
  return list != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(list.length) ? list.length : NaN;
});
/* harmony default export */ __webpack_exports__["a"] = (length);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isNumber;
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sum__ = __webpack_require__(241);



/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function mean(list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__sum__["a" /* default */])(list) / list.length;
});
/* harmony default export */ __webpack_exports__["a"] = (mean);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(42);



/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */], 0);
/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_has__ = __webpack_require__(17);




/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoizeWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function memoizeWith(mFn, fn) {
  var cache = {};
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__internal_has__["a" /* default */])(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
/* harmony default export */ __webpack_exports__["a"] = (memoizeWith);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function multiply(a, b) {
  return a * b;
});
/* harmony default export */ __webpack_exports__["a"] = (multiply);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
var Identity = function (x) {
  return { value: x, map: function (f) {
      return Identity(f(x));
    } };
};

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});
/* harmony default export */ __webpack_exports__["a"] = (over);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createPartialApplicator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);



function _createPartialApplicator(concat) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function (fn, args) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__arity__["a" /* default */])(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
var pickAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pickAll);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
var prepend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function prepend(el, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])([el], list);
});
/* harmony default export */ __webpack_exports__["a"] = (prepend);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);



/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function useWith(fn, transformers) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
/* harmony default export */ __webpack_exports__["a"] = (useWith);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
var reduceRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
/* harmony default export */ __webpack_exports__["a"] = (reduceRight);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
var times = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
/* harmony default export */ __webpack_exports__["a"] = (times);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ap__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prepend__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduceRight__ = __webpack_require__(249);






/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
var sequence = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : Object(__WEBPACK_IMPORTED_MODULE_4__reduceRight__["a" /* default */])(function (x, acc) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__ap__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__prepend__["a" /* default */], x), acc);
  }, of([]), traversable);
});
/* harmony default export */ __webpack_exports__["a"] = (sequence);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
var uniqWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (uniqWith);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);



/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
var where = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function where(spec, testObj) {
  for (var prop in spec) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});
/* harmony default export */ __webpack_exports__["a"] = (where);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(255);
module.exports = __webpack_require__(457);


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(256);

__webpack_require__(453);

__webpack_require__(454);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)))

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(257);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(328);
__webpack_require__(329);
__webpack_require__(330);
__webpack_require__(331);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(335);
__webpack_require__(337);
__webpack_require__(338);
__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(342);
__webpack_require__(343);
__webpack_require__(344);
__webpack_require__(345);
__webpack_require__(346);
__webpack_require__(348);
__webpack_require__(349);
__webpack_require__(350);
__webpack_require__(351);
__webpack_require__(352);
__webpack_require__(353);
__webpack_require__(354);
__webpack_require__(355);
__webpack_require__(356);
__webpack_require__(357);
__webpack_require__(358);
__webpack_require__(359);
__webpack_require__(360);
__webpack_require__(129);
__webpack_require__(361);
__webpack_require__(362);
__webpack_require__(175);
__webpack_require__(363);
__webpack_require__(364);
__webpack_require__(365);
__webpack_require__(366);
__webpack_require__(367);
__webpack_require__(178);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(368);
__webpack_require__(369);
__webpack_require__(370);
__webpack_require__(371);
__webpack_require__(372);
__webpack_require__(373);
__webpack_require__(374);
__webpack_require__(375);
__webpack_require__(376);
__webpack_require__(377);
__webpack_require__(378);
__webpack_require__(379);
__webpack_require__(380);
__webpack_require__(381);
__webpack_require__(382);
__webpack_require__(383);
__webpack_require__(384);
__webpack_require__(385);
__webpack_require__(386);
__webpack_require__(387);
__webpack_require__(388);
__webpack_require__(389);
__webpack_require__(390);
__webpack_require__(391);
__webpack_require__(392);
__webpack_require__(393);
__webpack_require__(394);
__webpack_require__(395);
__webpack_require__(396);
__webpack_require__(397);
__webpack_require__(398);
__webpack_require__(399);
__webpack_require__(400);
__webpack_require__(401);
__webpack_require__(402);
__webpack_require__(403);
__webpack_require__(404);
__webpack_require__(405);
__webpack_require__(406);
__webpack_require__(407);
__webpack_require__(408);
__webpack_require__(409);
__webpack_require__(410);
__webpack_require__(411);
__webpack_require__(412);
__webpack_require__(413);
__webpack_require__(414);
__webpack_require__(415);
__webpack_require__(416);
__webpack_require__(417);
__webpack_require__(418);
__webpack_require__(419);
__webpack_require__(420);
__webpack_require__(421);
__webpack_require__(422);
__webpack_require__(423);
__webpack_require__(424);
__webpack_require__(425);
__webpack_require__(426);
__webpack_require__(427);
__webpack_require__(428);
__webpack_require__(429);
__webpack_require__(430);
__webpack_require__(431);
__webpack_require__(432);
__webpack_require__(433);
__webpack_require__(434);
__webpack_require__(435);
__webpack_require__(436);
__webpack_require__(437);
__webpack_require__(438);
__webpack_require__(439);
__webpack_require__(440);
__webpack_require__(441);
__webpack_require__(442);
__webpack_require__(443);
__webpack_require__(444);
__webpack_require__(445);
__webpack_require__(446);
__webpack_require__(447);
__webpack_require__(448);
__webpack_require__(449);
__webpack_require__(450);
__webpack_require__(451);
__webpack_require__(452);
module.exports = __webpack_require__(33);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(18);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(20);
var META = __webpack_require__(45).KEY;
var $fails = __webpack_require__(6);
var shared = __webpack_require__(78);
var setToStringTag = __webpack_require__(60);
var uid = __webpack_require__(50);
var wks = __webpack_require__(8);
var wksExt = __webpack_require__(158);
var wksDefine = __webpack_require__(109);
var enumKeys = __webpack_require__(258);
var isArray = __webpack_require__(81);
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);
var toIObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(34);
var createDesc = __webpack_require__(49);
var _create = __webpack_require__(54);
var gOPNExt = __webpack_require__(161);
var $GOPD = __webpack_require__(24);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(52);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(55).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(70).f = $propertyIsEnumerable;
  __webpack_require__(80).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(51)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(52);
var gOPS = __webpack_require__(80);
var pIE = __webpack_require__(70);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(54) });


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(10).f });


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperties: __webpack_require__(160) });


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(23);
var $getOwnPropertyDescriptor = __webpack_require__(24).f;

__webpack_require__(37)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(14);
var $getPrototypeOf = __webpack_require__(25);

__webpack_require__(37)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(14);
var $keys = __webpack_require__(52);

__webpack_require__(37)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(37)('getOwnPropertyNames', function () {
  return __webpack_require__(161).f;
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(7);
var meta = __webpack_require__(45).onFreeze;

__webpack_require__(37)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(7);
var meta = __webpack_require__(45).onFreeze;

__webpack_require__(37)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(7);
var meta = __webpack_require__(45).onFreeze;

__webpack_require__(37)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(7);

__webpack_require__(37)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(7);

__webpack_require__(37)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(7);

__webpack_require__(37)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(1);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(162) });


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(1);
$export($export.S, 'Object', { is: __webpack_require__(274) });


/***/ }),
/* 274 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(1);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(113).set });


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(71);
var test = {};
test[__webpack_require__(8)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(20)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(1);

$export($export.P, 'Function', { bind: __webpack_require__(163) });


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(9) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(7);
var getPrototypeOf = __webpack_require__(25);
var HAS_INSTANCE = __webpack_require__(8)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(10).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var $parseInt = __webpack_require__(165);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var $parseFloat = __webpack_require__(166);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var has = __webpack_require__(18);
var cof = __webpack_require__(29);
var inheritIfRequired = __webpack_require__(115);
var toPrimitive = __webpack_require__(34);
var fails = __webpack_require__(6);
var gOPN = __webpack_require__(55).f;
var gOPD = __webpack_require__(24).f;
var dP = __webpack_require__(10).f;
var $trim = __webpack_require__(61).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(54)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(9) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(20)(global, NUMBER, $Number);
}


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var toInteger = __webpack_require__(36);
var aNumberValue = __webpack_require__(167);
var repeat = __webpack_require__(116);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(6)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $fails = __webpack_require__(6);
var aNumberValue = __webpack_require__(167);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(1);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(1);
var _isFinite = __webpack_require__(5).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(1);

$export($export.S, 'Number', { isInteger: __webpack_require__(168) });


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(1);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(1);
var isInteger = __webpack_require__(168);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(1);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(1);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var $parseFloat = __webpack_require__(166);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var $parseInt = __webpack_require__(165);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(1);
var log1p = __webpack_require__(169);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(1);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(1);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(1);
var sign = __webpack_require__(117);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(1);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(1);
var $expm1 = __webpack_require__(118);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', { fround: __webpack_require__(170) });


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(1);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(1);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(6)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', { log1p: __webpack_require__(169) });


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', { sign: __webpack_require__(117) });


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(1);
var expm1 = __webpack_require__(118);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(6)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(1);
var expm1 = __webpack_require__(118);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(53);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(11);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(61)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(119)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(120)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $at = __webpack_require__(119)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(1);
var toLength = __webpack_require__(11);
var context = __webpack_require__(122);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(123)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(1);
var context = __webpack_require__(122);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(123)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(116)
});


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(1);
var toLength = __webpack_require__(11);
var context = __webpack_require__(122);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(123)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(21)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(21)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(21)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(21)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(21)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(21)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(21)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(21)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(21)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(21)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(21)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(21)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(21)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(1);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var toObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(34);

$export($export.P + $export.F * __webpack_require__(6)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(1);
var toISOString = __webpack_require__(336);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(6);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(20)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(8)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(19)(proto, TO_PRIMITIVE, __webpack_require__(339));


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(4);
var toPrimitive = __webpack_require__(34);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(1);

$export($export.S, 'Array', { isArray: __webpack_require__(81) });


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(28);
var $export = __webpack_require__(1);
var toObject = __webpack_require__(14);
var call = __webpack_require__(171);
var isArrayIter = __webpack_require__(124);
var toLength = __webpack_require__(11);
var createProperty = __webpack_require__(125);
var getIterFn = __webpack_require__(126);

$export($export.S + $export.F * !__webpack_require__(83)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var createProperty = __webpack_require__(125);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(6)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(1);
var toIObject = __webpack_require__(23);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(69) != Object || !__webpack_require__(30)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var html = __webpack_require__(112);
var cof = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(53);
var toLength = __webpack_require__(11);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(6)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var aFunction = __webpack_require__(16);
var toObject = __webpack_require__(14);
var fails = __webpack_require__(6);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(30)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $forEach = __webpack_require__(38)(0);
var STRICT = __webpack_require__(30)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var isArray = __webpack_require__(81);
var SPECIES = __webpack_require__(8)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $map = __webpack_require__(38)(1);

$export($export.P + $export.F * !__webpack_require__(30)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $filter = __webpack_require__(38)(2);

$export($export.P + $export.F * !__webpack_require__(30)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $some = __webpack_require__(38)(3);

$export($export.P + $export.F * !__webpack_require__(30)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $every = __webpack_require__(38)(4);

$export($export.P + $export.F * !__webpack_require__(30)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $reduce = __webpack_require__(172);

$export($export.P + $export.F * !__webpack_require__(30)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $reduce = __webpack_require__(172);

$export($export.P + $export.F * !__webpack_require__(30)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $indexOf = __webpack_require__(79)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(30)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var toIObject = __webpack_require__(23);
var toInteger = __webpack_require__(36);
var toLength = __webpack_require__(11);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(30)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(1);

$export($export.P, 'Array', { copyWithin: __webpack_require__(173) });

__webpack_require__(46)('copyWithin');


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(1);

$export($export.P, 'Array', { fill: __webpack_require__(128) });

__webpack_require__(46)('fill');


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(1);
var $find = __webpack_require__(38)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(46)(KEY);


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(1);
var $find = __webpack_require__(38)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(46)(KEY);


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56)('Array');


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var inheritIfRequired = __webpack_require__(115);
var dP = __webpack_require__(10).f;
var gOPN = __webpack_require__(55).f;
var isRegExp = __webpack_require__(82);
var $flags = __webpack_require__(84);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(9) && (!CORRECT_NEW || __webpack_require__(6)(function () {
  re2[__webpack_require__(8)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(20)(global, 'RegExp', $RegExp);
}

__webpack_require__(56)('RegExp');


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(175);
var anObject = __webpack_require__(4);
var $flags = __webpack_require__(84);
var DESCRIPTORS = __webpack_require__(9);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(20)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(6)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(85)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(85)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(85)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(85)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(82);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var global = __webpack_require__(5);
var ctx = __webpack_require__(28);
var classof = __webpack_require__(71);
var $export = __webpack_require__(1);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(16);
var anInstance = __webpack_require__(57);
var forOf = __webpack_require__(58);
var speciesConstructor = __webpack_require__(86);
var task = __webpack_require__(130).set;
var microtask = __webpack_require__(131)();
var newPromiseCapabilityModule = __webpack_require__(132);
var perform = __webpack_require__(176);
var promiseResolve = __webpack_require__(177);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(8)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(59)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(60)($Promise, PROMISE);
__webpack_require__(56)(PROMISE);
Wrapper = __webpack_require__(33)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(83)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(182);
var validate = __webpack_require__(63);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(87)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var $typed = __webpack_require__(88);
var buffer = __webpack_require__(133);
var anObject = __webpack_require__(4);
var toAbsoluteIndex = __webpack_require__(53);
var toLength = __webpack_require__(11);
var isObject = __webpack_require__(7);
var ArrayBuffer = __webpack_require__(5).ArrayBuffer;
var speciesConstructor = __webpack_require__(86);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(6)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var final = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(56)(ARRAY_BUFFER);


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
$export($export.G + $export.W + $export.F * !__webpack_require__(88).ABV, {
  DataView: __webpack_require__(133).DataView
});


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(1);
var aFunction = __webpack_require__(16);
var anObject = __webpack_require__(4);
var rApply = (__webpack_require__(5).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(6)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(1);
var create = __webpack_require__(54);
var aFunction = __webpack_require__(16);
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);
var fails = __webpack_require__(6);
var bind = __webpack_require__(163);
var rConstruct = (__webpack_require__(5).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(10);
var $export = __webpack_require__(1);
var anObject = __webpack_require__(4);
var toPrimitive = __webpack_require__(34);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(6)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(1);
var gOPD = __webpack_require__(24).f;
var anObject = __webpack_require__(4);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(1);
var anObject = __webpack_require__(4);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(121)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(25);
var has = __webpack_require__(18);
var $export = __webpack_require__(1);
var isObject = __webpack_require__(7);
var anObject = __webpack_require__(4);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(24);
var $export = __webpack_require__(1);
var anObject = __webpack_require__(4);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(1);
var getProto = __webpack_require__(25);
var anObject = __webpack_require__(4);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(1);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(1);
var anObject = __webpack_require__(4);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(1);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(184) });


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(1);
var anObject = __webpack_require__(4);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(10);
var gOPD = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(25);
var has = __webpack_require__(18);
var $export = __webpack_require__(1);
var createDesc = __webpack_require__(49);
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(1);
var setProto = __webpack_require__(113);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(1);
var $includes = __webpack_require__(79)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(46)('includes');


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(1);
var flattenIntoArray = __webpack_require__(185);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(11);
var aFunction = __webpack_require__(16);
var arraySpeciesCreate = __webpack_require__(127);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(46)('flatMap');


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(1);
var flattenIntoArray = __webpack_require__(185);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(11);
var toInteger = __webpack_require__(36);
var arraySpeciesCreate = __webpack_require__(127);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(46)('flatten');


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(1);
var $at = __webpack_require__(119)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(1);
var $pad = __webpack_require__(186);
var userAgent = __webpack_require__(134);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(1);
var $pad = __webpack_require__(186);
var userAgent = __webpack_require__(134);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(61)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(61)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(1);
var defined = __webpack_require__(35);
var toLength = __webpack_require__(11);
var isRegExp = __webpack_require__(82);
var getFlags = __webpack_require__(84);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(121)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109)('asyncIterator');


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109)('observable');


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(1);
var ownKeys = __webpack_require__(184);
var toIObject = __webpack_require__(23);
var gOPD = __webpack_require__(24);
var createProperty = __webpack_require__(125);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(1);
var $values = __webpack_require__(187)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(1);
var $entries = __webpack_require__(187)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var toObject = __webpack_require__(14);
var aFunction = __webpack_require__(16);
var $defineProperty = __webpack_require__(10);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(9) && $export($export.P + __webpack_require__(89), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var toObject = __webpack_require__(14);
var aFunction = __webpack_require__(16);
var $defineProperty = __webpack_require__(10);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(9) && $export($export.P + __webpack_require__(89), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var toObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(25);
var getOwnPropertyDescriptor = __webpack_require__(24).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(9) && $export($export.P + __webpack_require__(89), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(1);
var toObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(25);
var getOwnPropertyDescriptor = __webpack_require__(24).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(9) && $export($export.P + __webpack_require__(89), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(188)('Map') });


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(188)('Set') });


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(90)('Map');


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(90)('Set');


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(90)('WeakMap');


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(90)('WeakSet');


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(91)('Map');


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(91)('Set');


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(91)('WeakMap');


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(91)('WeakSet');


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(1);

$export($export.G, { global: __webpack_require__(5) });


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(1);

$export($export.S, 'System', { global: __webpack_require__(5) });


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(1);
var cof = __webpack_require__(29);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(1);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(1);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(1);
var scale = __webpack_require__(190);
var fround = __webpack_require__(170);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(1);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(1);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(1);

$export($export.S, 'Math', { scale: __webpack_require__(190) });


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(1);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(1);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(1);
var core = __webpack_require__(33);
var global = __webpack_require__(5);
var speciesConstructor = __webpack_require__(86);
var promiseResolve = __webpack_require__(177);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(1);
var newPromiseCapability = __webpack_require__(132);
var perform = __webpack_require__(176);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(25);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(180);
var from = __webpack_require__(189);
var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(25);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(25);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(44);
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(16);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(1);
var microtask = __webpack_require__(131)();
var process = __webpack_require__(5).process;
var isNode = __webpack_require__(29)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(1);
var global = __webpack_require__(5);
var core = __webpack_require__(33);
var microtask = __webpack_require__(131)();
var OBSERVABLE = __webpack_require__(8)('observable');
var aFunction = __webpack_require__(16);
var anObject = __webpack_require__(4);
var anInstance = __webpack_require__(57);
var redefineAll = __webpack_require__(59);
var hide = __webpack_require__(19);
var forOf = __webpack_require__(58);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(56)('Observable');


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(5);
var $export = __webpack_require__(1);
var userAgent = __webpack_require__(134);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
var $task = __webpack_require__(130);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(129);
var getKeys = __webpack_require__(52);
var redefine = __webpack_require__(20);
var global = __webpack_require__(5);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(62);
var wks = __webpack_require__(8);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)))

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(455);
module.exports = __webpack_require__(33).RegExp.escape;


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(1);
var $re = __webpack_require__(456)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 456 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(191);

__webpack_require__(192);

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

var _Boot = __webpack_require__(461);

var _Boot2 = _interopRequireDefault(_Boot);

var _Splash = __webpack_require__(462);

var _Splash2 = _interopRequireDefault(_Splash);

var _Login = __webpack_require__(463);

var _Login2 = _interopRequireDefault(_Login);

var _Game = __webpack_require__(464);

var _Game2 = _interopRequireDefault(_Game);

var _config = __webpack_require__(195);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var docElement = document.documentElement;
    var width = docElement.clientWidth > _config2.default.gameWidth ? _config2.default.gameWidth : docElement.clientWidth;
    var height = docElement.clientHeight > _config2.default.gameHeight ? _config2.default.gameHeight : docElement.clientHeight;

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, width, height, _phaser2.default.CANVAS, 'content', null));

    _this.state.add('Boot', _Boot2.default, false);
    _this.state.add('Splash', _Splash2.default, false);
    _this.state.add('Login', _Login2.default, false);
    _this.state.add('Game', _Game2.default, false);

    // with Cordova with need to wait that the device is ready so we will call the Boot state in another file
    if (!window.cordova) {
      _this.state.start('Boot');
    }
    return _this;
  }

  return Game;
}(_phaser2.default.Game);

window.PhaserGlobal = {
  disableAudio: true
  // hideBanner: true
};

window.game = new Game();

if (window.cordova) {
  var app = {
    initialize: function initialize() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    onDeviceReady: function onDeviceReady() {
      this.receivedEvent('deviceready');

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot');
    },

    receivedEvent: function receivedEvent(id) {
      console.log('Received Event: ' + id);
    }
  };

  app.initialize();
}

/***/ }),
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

var _webfontloader = __webpack_require__(194);

var _webfontloader2 = _interopRequireDefault(_webfontloader);

var _config = __webpack_require__(195);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$State) {
  _inherits(_class, _Phaser$State);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      this.stage.backgroundColor = '#fff';
      this.fontsReady = false;
      this.fontsLoaded = this.fontsLoaded.bind(this);
    }
  }, {
    key: 'preload',
    value: function preload() {
      if (_config2.default.webfonts.length) {
        _webfontloader2.default.load({
          google: {
            families: _config2.default.webfonts
          },
          active: this.fontsLoaded
        });
      }

      var text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' });
      text.anchor.setTo(0.5, 0.5);

      this.load.image('loaderBg', './assets/images/loader-bg.png');
      this.load.image('loaderBar', './assets/images/loader-bar.png');
    }
  }, {
    key: 'render',
    value: function render() {
      if (_config2.default.webfonts.length && this.fontsReady) {
        this.state.start('Splash');
      }
      if (!_config2.default.webfonts.length) {
        this.state.start('Splash');
      }
    }
  }, {
    key: 'fontsLoaded',
    value: function fontsLoaded() {
      this.fontsReady = true;
    }
  }]);

  return _class;
}(_phaser2.default.State);

exports.default = _class;

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

var _phaser3 = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$State) {
  _inherits(_class, _Phaser$State);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
      this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
      this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
      (0, _phaser3.centerGameObjects)([this.loaderBg, this.loaderBar]);
    }
  }, {
    key: 'loadScripts',
    value: function loadScripts() {}
  }, {
    key: 'loadBgm',
    value: function loadBgm() {}
  }, {
    key: 'loadFonts',
    value: function loadFonts() {}
  }, {
    key: 'loadMaps',
    value: function loadMaps() {
      this.load.tilemap('map', 'assets/map/map-large.json', null, _phaser2.default.Tilemap.TILED_JSON);
    }
  }, {
    key: 'loadImages',
    value: function loadImages() {
      this.load.spritesheet('obj', 'assets/map/map.png', 32, 32, -1, 1, 1);
      this.load.spritesheet('player', 'assets/images/player.png', 32, 32);
      this.load.image('background-login', 'assets/images/background-login.png');
      this.load.image('tiles', 'assets/map/map.png');
      this.load.image('button-start', 'assets/images/button-start.png');
      this.load.image('marker', 'assets/images/marker.png', 16, 16);
      this.load.image('enemy', 'assets/images/enemy.png', 32, 32);
    }
  }, {
    key: 'preload',
    value: function preload() {

      this.load.setPreloadSprite(this.loaderBar);

      this.loadMaps();
      this.loadImages();
    }
  }, {
    key: 'create',
    value: function create() {
      this.state.start('Login');
    }
  }]);

  return _class;
}(_phaser2.default.State);

exports.default = _class;

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

var _phaser3 = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$State) {
    _inherits(_class, _Phaser$State);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'init',
        value: function init() {}
    }, {
        key: 'preload',
        value: function preload() {}
    }, {
        key: 'create',
        value: function create() {

            this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background-login');
            this.logo.anchor.set(0.5, 0.5);

            this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'button-start', this.actionOnClick, this, 2, 1, 0);
            this.button.onInputOver.add(this.over, this);
            this.button.onInputOut.add(this.out, this);
            this.button.onInputUp.add(this.up, this);
            this.button.anchor.set(0.5, -0.4);

            var style = {
                font: 'Microsoft JhengHei',
                fontSize: 65,
                fontWeight: 'bold',
                fill: '#ff0044',
                align: 'center'
            };

            this.text = this.add.text(this.game.world.centerX, this.game.world.centerY, '- Nobu Web Client -\n \u842C\u4EBA\u570B\u6230 \n 0557', style);
            this.text.anchor.set(0.5, 0.8);
        }
    }, {
        key: 'up',
        value: function up() {
            // console.log('button up', arguments);
        }
    }, {
        key: 'over',
        value: function over() {
            // console.log('button over');
        }
    }, {
        key: 'out',
        value: function out() {
            // console.log('button out');
        }
    }, {
        key: 'actionOnClick',
        value: function actionOnClick() {
            // console.log('button click')
            this.state.start('Game');
        }
    }]);

    return _class;
}(_phaser2.default.State);

exports.default = _class;

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

var _Player = __webpack_require__(465);

var _Player2 = _interopRequireDefault(_Player);

var _Marker = __webpack_require__(466);

var _Marker2 = _interopRequireDefault(_Marker);

var _MapObject = __webpack_require__(196);

var _MapObject2 = _interopRequireDefault(_MapObject);

var _Location = __webpack_require__(467);

var _Location2 = _interopRequireDefault(_Location);

var _Client = __webpack_require__(468);

var _Client2 = _interopRequireDefault(_Client);

var _Message = __webpack_require__(197);

var _Message2 = _interopRequireDefault(_Message);

var _phaserMoveAndStopPlugin = __webpack_require__(470);

var _phaserMoveAndStopPlugin2 = _interopRequireDefault(_phaserMoveAndStopPlugin);

var _ramda = __webpack_require__(475);

var _ramda2 = _interopRequireDefault(_ramda);

var _phaser3 = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals __DEV__ */


var _class = function (_Phaser$State) {
  _inherits(_class, _Phaser$State);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {}
  }, {
    key: 'preload',
    value: function preload() {

      // Add Lib
      // this.game.moveAndStop = this.game.plugins.add(MoveAndStopPlugin);

      // Connection
      this.client = new _Client2.default('abcdef');
      this.client.onConnect();

      // Add Map
      this.map = this.game.add.tilemap('map');
      this.map.addTilesetImage('tile', 'tiles');
      this.layer = this.map.createLayer('Layer');
      this.layer.resizeWorld();
      // this.layer.renderSettings.enableScrollDelta = true

      this.map.setCollisionBetween(31, 32, true, this.layer);
      this.map.setCollision(46);

      // this.layer.debug = true
    }
  }, {
    key: 'create',
    value: function create() {

      // Add Physics
      this.game.physics.startSystem(_phaser2.default.Physics.ARCADE);
      // this.game.world.setBounds(0, 0, 600, 600);

      // Add Enemy
      this.enemys = this.game.add.group();

      // Add LocationText
      this.locationText = new _Location2.default({
        game: this.game,
        text: '陸地',
        options: {
          fontSize: '12px',
          fill: '#ff0',
          backgroundColor: '#000',
          align: 'center'
        }
      });
      this.game.add.existing(this.locationText);

      // Add Keyboard Event
      this.cursors = this.game.input.keyboard.createCursorKeys();

      // Update Status
      this.timer = this.game.time.create(false);
      this.timer.loop(1000, this.updateStatus, this);
      this.timer.start();

      // Add Mouse Click Event
      this.game.input.onDown.add(this.move, this);
    }

    /** 
     *  更新狀態 FROM MQTT 
     */

  }, {
    key: 'updateStatus',
    value: function updateStatus() {
      var _this2 = this;

      if (this.client.status) {

        /** 檢查玩家是否已建立 */
        if (this.player === undefined) {

          // Add Player
          this.player = new _Player2.default({
            game: this.game,
            x: this.client.status.x,
            y: this.client.status.y,
            asset: 'player',
            clientid: this.client.status.id
          });
          this.game.add.existing(this.player);
          console.log('you\'re ' + this.player.clientid);

          // Add Camera
          // this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON);
          this.game.camera.follow(this.player, _phaser2.default.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        }

        console.log('player x:' + this.player.x + ', client x:' + this.client.status.x);

        /** 檢查玩家是否與新座標同一個點 */
        if (this.player.x !== this.client.status.x && this.player.y !== this.client.status.y) {
          console.log('move');
          // this.player.body.velocity.setTo(0, 0)
          this.game.physics.arcade.moveToXY(this.player, this.client.status.x, this.client.status.y, 500);
          console.log('update player: x' + this.client.status.x + ' y' + this.client.status.y);
        } else {
          this.player.body.velocity.setTo(0, 0);
        }

        this.locationText.text = 'HP' + this.client.status.hp;

        /** 敵人建立 */
        if (this.enemys.total === 0) {

          this.client.status.others.forEach(function (other) {
            var enemy = new _Player2.default({
              game: game,
              x: other.x,
              y: other.y,
              asset: 'enemy',
              clientid: other.id
            });
            _this2.enemys.add(enemy);
          });
        } else {

          /** 敵人移動 */
          this.enemys.children.forEach(function (enemy, index) {
            _this2.client.status.others.forEach(function (other, index) {

              /** 在既有名單內 */
              if (enemy.clientid === other.id) {
                try {
                  if (enemy.x !== other.x && enemy.y !== other.y) {
                    _this2.game.physics.arcade.moveToXY(enemy, other.x, other.y, 500);
                  }
                } catch (ex) {
                  console.log('enemy move error');
                }
              } else {

                /** 不在既有名單內 */

                // 刪除
                _this2.enemys.removeChild(_enemy);

                // 新加入
                var _enemy = new _Player2.default({
                  game: game,
                  x: other.x,
                  y: other.y,
                  asset: 'enemy',
                  clientid: other.id
                });
                _this2.enemys.add(_enemy);
              }
            });
          });
        }
      } else {
        console.log('error status', this.client.status);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this3 = this;

      // 碰撞偵測
      // this.game.physics.arcade.collide(this.player, this.layer)
      // this.game.physics.arcade.overlap(this.player, this.layer, (player, obj) => {
      //   this.locationText.text = obj.properties.name === '石礫' ? obj.properties.name + '(打滑中)' : obj.properties.name
      //   this.locationText.x = this.player.x + 16
      //   this.locationText.y = this.player.y + 32
      //   this.player.isWalk = obj.properties.name !== '石礫'
      // }, null, this)

      // Player and Marker
      if (this.marker !== undefined) {
        this.game.physics.arcade.overlap(this.player, this.marker, function (player, obj) {
          _this3.player.body.velocity.setTo(0, 0);
          _this3.marker.kill();
        });
      }
    }
  }, {
    key: 'move',
    value: function move(pointer) {

      // const point = movePositionFix(this.player, {
      //   x: this.game.input.worldX,
      //   y: this.game.input.worldY
      // })

      var point = {
        x: this.game.input.worldX,
        y: this.game.input.worldY

        // Add Marker 到時候改成直接修改座標就好
      };if (this.marker !== undefined) {
        this.marker.kill();
      }
      this.marker = new _Marker2.default({
        game: this.game,
        x: 0,
        y: 0,
        asset: 'marker'
      });
      this.game.add.existing(this.marker);

      // this.game.physics.arcade.moveToXY(this.player, point.x, point.y, 500);
      // this.client.client.send(Message.MovePlayer(this.client.master, this.client.player, point.x, point.y))
      this.client.onPlayerMoving(this.client.master, this.client.player, point.x, point.y);
      console.log('click x:' + point.x + ', y:' + point.y);
      console.log(this.client.status);
      this.marker.x = point.x;
      this.marker.y = point.y;
    }
  }, {
    key: 'render',
    value: function render() {
      if (false) {
        // this.game.debug.spriteInfo(this.player, 32, 32)
      }
    }
  }]);

  return _class;
}(_phaser2.default.State);

exports.default = _class;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Sprite) {
        _inherits(_class, _Phaser$Sprite);

        function _class(_ref) {
                var game = _ref.game,
                    x = _ref.x,
                    y = _ref.y,
                    asset = _ref.asset,
                    clientid = _ref.clientid;

                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, x, y, asset));

                _this.clientid = clientid;

                _this.game.physics.arcade.enable(_this);

                _this.iscon = false;
                // 沒有重量
                // this.body.bounce.y = 0.1
                // this.body.gravity.y = 400

                // 限制於世界邊界
                _this.body.collideWorldBounds = true;

                // 移動動畫
                _this.animations.add('down', [0, 1, 2, 3], 10, true);
                _this.animations.add('left', [4, 5, 6, 7], 10, true);
                _this.animations.add('right', [8, 9, 10, 11], 10, true);
                _this.animations.add('up', [12, 13, 14, 15], 10, true);

                // this.cursors = this.game.input.keyboard.createCursorKeys()

                // this.last = {}

                return _this;
        }

        _createClass(_class, [{
                key: 'update',
                value: function update() {

                        // only move when you click
                        // if (this.game.input.mousePointer.isDown) {

                        //     this.game.physics.arcade.moveToPointer(this, 200);
                        //     // this.game.physics.arcade.moveToXY(this, this.game.input.x, this.game.input.y, 200);
                        //     // if it 's overlapping the mouse, don't move any more
                        //     if (Phaser.Rectangle.contains(this.body, this.game.input.x, this.game.input.y)) {
                        //         this.body.velocity.setTo(0, 0);
                        //     }
                        // } else {
                        //     if (Phaser.Rectangle.contains(this.body, this.last.x, this.last.y) ||
                        //         this.getBounds().contains(this.last.x, this.last.y)) {
                        //         this.body.velocity.setTo(0, 0);
                        //     }
                        // }

                        // Event By keyboard 
                        //
                        // if (this.isWalk) {
                        //     this.body.velocity.x = 0
                        //     this.body.velocity.y = 0
                        // }

                        // if (this.cursors.down.isDown) {
                        //     this.body.velocity.y = +200
                        //     this.animations.play('down')
                        //     this.game.camera.follow(this)
                        //     console.log(`player: ${this.x} ${this.y}`)
                        //     console.log(`camera: ${this.game.camera.x} ${this.game.camera.y}`)
                        // } else if (this.cursors.left.isDown) {
                        //     this.body.velocity.x = -200
                        //     this.animations.play('left')
                        //     this.game.camera.follow(this)
                        //     console.log(`player: ${this.x} ${this.y}`)
                        //     console.log(`camera: ${this.game.camera.x} ${this.game.camera.y}`)
                        // } else if (this.cursors.right.isDown) {
                        //     this.body.velocity.x = 200
                        //     this.animations.play('right')
                        //     this.game.camera.follow(this)
                        //     console.log(`player: ${this.x} ${this.y}`)
                        //     console.log(`camera: ${this.game.camera.x} ${this.game.camera.y}`)
                        // } else if (this.cursors.up.isDown) {
                        //     this.body.velocity.y = -200
                        //     this.animations.play('up')
                        //     this.game.camera.follow(this)
                        //     console.log(`player: ${this.x} ${this.y}`)
                        //     console.log(`camera: ${this.game.camera.x} ${this.game.camera.y}`)
                        // } else {
                        //     this.animations.stop()
                        // }

                }
        }]);

        return _class;
}(_phaser2.default.Sprite);

exports.default = _class;

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Sprite) {
    _inherits(_class, _Phaser$Sprite);

    function _class(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            asset = _ref.asset;

        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, x, y, asset));

        _this.game.physics.arcade.enable(_this);
        return _this;
    }

    _createClass(_class, [{
        key: 'update',
        value: function update() {}
    }]);

    return _class;
}(_phaser2.default.Sprite);

exports.default = _class;

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(39);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Text) {
    _inherits(_class, _Phaser$Text);

    function _class(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            text = _ref.text,
            options = _ref.options;

        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, x, y, text, options));
    }

    _createClass(_class, [{
        key: 'update',
        value: function update() {}
    }]);

    return _class;
}(_phaser2.default.Text);

exports.default = _class;

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pahoMqtt = __webpack_require__(136);

var _pahoMqtt2 = _interopRequireDefault(_pahoMqtt);

var _Message = __webpack_require__(197);

var _Message2 = _interopRequireDefault(_Message);

var _paho = __webpack_require__(469);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clients = function () {
    function Clients(master) {
        _classCallCheck(this, Clients);

        this.server = '60.249.179.126';
        this.port = window.location.protocol !== 'https:' ? 8083 : 8084;
        this.clientid = 'mqttclient123456\'' + new Date().getTime();
        this.player = '';
        this.master = master;
        this.map = '';
        this.status = undefined;
        this.reconnectTimeout = 3000;
        this.client = null;
    }

    /** 
     * 連線 
     */


    _createClass(Clients, [{
        key: 'onConnect',
        value: function onConnect() {
            this.client = new _pahoMqtt2.default.Client(this.server, this.port, this.clientid);
            this.client.onConnectionLost = this.onConnectionLost.bind(this);
            this.client.onMessageArrived = this.onMessageArrived.bind(this);

            var connectionOptinos = {
                useSSL: false,
                keepAliveInterval: 30,
                onSuccess: this.onSuccess.bind(this),
                onFailure: this.onFailure.bind(this)
                // userName: 'Username',
                // password: 'password',
            };
            this.client.connect(connectionOptinos);
        }

        /** 
         * 連線成功
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess() {
            console.log('onSuccess');
            // this.client.send(Message.RemoveRoom(this.master))
            this.client.subscribe('join/' + this.master);
            // this.client.subscribe(`newplayer/${this.master}`)
            this.client.send(_Message2.default.JoinRoom(this.master));
        }

        /**
         * 連線失敗
         * @param {object} message 
         */

    }, {
        key: 'onFailure',
        value: function onFailure(message) {
            this.status = undefined;
            if (responseObject.errorCode !== 0) {
                console.log('onConnectionFail:' + responseObject.errorMessage);
            } else {
                console.log('connection to server fail. Attempting to reconnect in ' + this.reconnectTimeout / 1000 + ' sec');
                setTimeout(this.onConnect.bind(this));
            }
        }

        /**
         * 連線遺失
         * @param {object} responseObject 
         */

    }, {
        key: 'onConnectionLost',
        value: function onConnectionLost(responseObject) {
            this.status = undefined;
            if (responseObject.errorCode !== 0) {
                console.log('onConnectionLost:' + responseObject.errorMessage);
            } else {
                console.log('connection to server lost. Attempting to reconnect in ' + this.reconnectTimeout / 1000 + ' sec');
                setTimeout(this.onConnect.bind(this));
            }
        }

        /**
         * 訊息接收
         * @param {string} msg 
         */

    }, {
        key: 'onMessageArrived',
        value: function onMessageArrived(msg) {

            var message = (0, _paho.bulidMessageObjects)(msg);

            // console.log(message.payload)

            switch (message.topic) {

                case 'join/' + this.master:
                    // 加入房間
                    if (message.payload.result === 'success') {
                        this.player = message.payload.id;
                        this.map = message.payload.map;

                        // 成功加入後就不要再訂閱是否加入成功 會造成 message loop
                        this.client.unsubscribe('join/' + this.master);
                        this.client.subscribe('game/' + this.master + '/' + this.player);
                    } else {

                        console.log('recreate room (nothing to do)');
                        // this.client.send(Message.CreateRoom(this.master))
                        // this.client.send(Message.JoinRoom(this.master))
                    }
                    break;

                case 'game/' + this.master + '/' + this.player:
                    // 了解目前狀態
                    this.status = message.payload;
                    break;
                default:
                    // 垃圾訊息
                    // console.log(message)
                    break;
            }
        }

        /**
         *  移動角色
         * @param {string} master
         * @param {string} player
         * @param {number} x
         * @param {number} y
         */

    }, {
        key: 'onPlayerMoving',
        value: function onPlayerMoving(master, player, x, y) {
            this.client.send(_Message2.default.MovePlayer(master, player, x, y));
        }
    }]);

    return Clients;
}();

exports.default = Clients;

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulidMessageObjects", function() { return bulidMessageObjects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_paho_mqtt__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_paho_mqtt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_paho_mqtt__);


/**
 * 重新組合訊息內容(修正原paho-mqtt錯誤)
 */
function bulidMessageObjects(message) {
    let result = message.input ? new __WEBPACK_IMPORTED_MODULE_0_paho_mqtt___default.a.Message(message.input) : message
    Object.keys(message).forEach(key => {
        if (key !== 'input') {
            result[key] = message[key]
        }
    });
    // Add JSON payload to message
    result.payload = result._getPayloadString() ? JSON.parse(result._getPayloadString()) : ''
    return result
}



/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _moveAndStopCore = __webpack_require__(471);

//Plugin Core definition

function MoveAndStop(game, parent) {
	Phaser.Plugin.call(this, game, parent);
	this.objectsToMove = [];
	this.active = true; //enable reUpdate and update methods called by the parent
}

MoveAndStop.prototype = Object.create(Phaser.Plugin.prototype);

MoveAndStop.prototype.postUpdate = function postUpdate_() {
	return (0, _moveAndStopCore.postUpdate)(this.objectsToMove, this.game);
};

//Plugin moving functions

MoveAndStop.prototype.toXY = function toXY(displayObject, x, y, speed, maxTime, events) {
	return (0, _moveAndStopCore.moveToXY)(this.objectsToMove, this.game, displayObject, x, y, speed, maxTime, events);
};

MoveAndStop.prototype.toObject = function toObject(displayObject, destination, speed, maxTime, events) {
	return (0, _moveAndStopCore.moveToObject)(this.objectsToMove, this.game, displayObject, destination, speed, maxTime, events);
};

MoveAndStop.prototype.stop = function stop(displayObject) {
	return (0, _moveAndStopCore.stopToMove)(this.objectsToMove, displayObject);
};

// Utils

MoveAndStop.prototype.isItemMoving = function (displayObject) {
	return (0, _moveAndStopCore.isItemMoving)(displayObject);
};

exports.default = MoveAndStop;

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.postUpdate = postUpdate;
exports.isItemMoving = isItemMoving;
exports.moveToXY = moveToXY;
exports.moveToObject = moveToObject;
exports.stopToMove = stopToMove;

var _debug = __webpack_require__(472);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('phaser-move-and-stop-plugin:moveAndStop');
var debugObjectToMove = function debugObjectToMove(objectsToMove, objectToMove, label) {
	return debug(objectsToMove.indexOf(objectToMove) + ': ' + label);
};

var STATE = {
	isMoving: 'isMoving',
	hasStopped: 'hasStopped'
};

function findObjectToMove(objectsToMove, displayObject) {
	if (displayObject) {
		return objectsToMove.find(function (objectToMove) {
			return objectToMove.displayObject === displayObject;
		});
	}
	return undefined;
}

function addDisplayObjectToList(objectsToMove, displayObject) {
	var info = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var objectToMove = {
		displayObject: displayObject,
		info: info
	};
	objectsToMove.push(objectToMove);
	debugObjectToMove(objectsToMove, objectToMove, 'addDisplayObjectToList x:' + info.x + ' y:' + info.y + ' speed:' + info.speed + ' maxTime:' + info.maxTime + ' events:' + (info.events ? Object.keys(info.events) : info.events));
}

function removeObjectToMove(objectsToMove, objectToMove) {
	debugObjectToMove(objectsToMove, objectToMove, "removeObjectToMove");
	if (objectToMove) {
		var index = objectsToMove.indexOf(objectToMove);
		if (index > -1) {
			objectsToMove.splice(index, 1);
		}
	}
}

function stopObjectMovement(objectToMove) {
	var displayObject = objectToMove.displayObject,
	    info = objectToMove.info;

	displayObject.body.velocity.x = 0;
	displayObject.body.velocity.y = 0;

	if (info.events) {
		if (info.events.onPositionReached) {
			info.events.onPositionReached(displayObject);
		}
		if (info.events.onStopped) {
			info.events.onStopped(displayObject);
		}
	}

	info.move = STATE.hasStopped;
}

function updateObjectMovement(game, objectToMove) {
	var displayObject = objectToMove.displayObject,
	    info = objectToMove.info;

	if (displayObject.alive && info.moveDistFromTarget && displayObject.body) {

		if (isMoving(objectToMove)) {
			var updatedDist = game.physics.arcade.distanceToXY(displayObject, info.x, info.y);
			if (updatedDist === 0 || updatedDist > info.moveDistFromTarget) {
				// update coordinates
				displayObject.x = info.x;
				displayObject.y = info.y;

				// if displayObject is still moving, we ask to pahser to stop it (stop velocity)
				stopObjectMovement(objectToMove);
			} else {
				//if not stopped, or no need to stop, we update last distance between current displayObject and targetted corrdinates
				info.moveDistFromTarget = updatedDist;
			}
		}
	}
}

function isMoving(objectToMove) {
	var info = objectToMove.info;

	return info.move === STATE.isMoving;
}

function hasStopped(objectToMove) {
	var info = objectToMove.info;

	return info.move === STATE.hasStopped;
}

function postUpdate(objectsToMove, game) {
	var objectsNotAlive = [];
	objectsToMove.forEach(function (objectToMove) {
		var displayObject = objectToMove.displayObject,
		    info = objectToMove.info;

		if (!displayObject || !displayObject.alive || hasStopped(objectToMove)) {
			if (info && info.events) {
				if (info.events.onStopped) {
					info.events.onStopped(displayObject);
				}
			}
			objectsNotAlive.push(objectToMove);
		} else {
			updateObjectMovement(game, objectToMove);
			if (hasStopped(objectToMove)) {
				objectsNotAlive.push(objectToMove);
			}
		}
	});

	objectsNotAlive.forEach(function (objectToMove) {
		removeObjectToMove(objectsToMove, objectToMove);
	});
}

function isItemMoving(displayObject) {
	if (!displayObject) {
		throw new Error("object is undefined");
	}
	return displayObject.body && displayObject.body.velocity && (displayObject.body.velocity.x || displayObject.body.velocity.y);
}

function moveToXY(objectsToMove, game, displayObject, x, y, speed, maxTime, events) {
	if (displayObject && displayObject.alive && displayObject.body) {
		var objectToMove = findObjectToMove(objectsToMove, displayObject);

		if (!objectToMove || objectToMove.info.x !== x || objectToMove.info.y !== y || objectToMove.info.speed !== speed || objectToMove.info.maxTime !== maxTime || objectToMove.info.events !== events) {
			if (objectToMove) {
				removeObjectToMove(objectsToMove, objectToMove);
			}
			var moveDistFromTarget = game.physics.arcade.distanceToXY(displayObject, x, y);
			addDisplayObjectToList(objectsToMove, displayObject, {
				move: STATE.isMoving,
				x: x,
				y: y,
				speed: speed,
				maxTime: maxTime,
				events: events,
				moveDistFromTarget: moveDistFromTarget,
				moveDistFromTargetOrigin: moveDistFromTarget
			});
			return game.physics.arcade.moveToXY(displayObject, x, y, speed, maxTime);
		}
	}
}

function moveToObject(objectsToMove, game, displayObject, destination, speed, maxTime, events) {
	return moveToXY(objectsToMove, game, displayObject, destination.x, destination.y, speed, maxTime, events);
}

function stopToMove(objectsToMove, displayObject) {
	var objectToMove = findObjectToMove(objectsToMove, displayObject);
	if (objectToMove) {
		if (isMoving(objectToMove)) {
			stopObjectMovement(objectToMove);
		}
	}
}

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(473);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(193)))

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(474);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 474 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__F__ = __webpack_require__(476);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_0__F__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__T__ = __webpack_require__(477);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_1__T__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(478);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __WEBPACK_IMPORTED_MODULE_2____["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return __WEBPACK_IMPORTED_MODULE_3__add__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addIndex__ = __webpack_require__(479);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addIndex", function() { return __WEBPACK_IMPORTED_MODULE_4__addIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adjust__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "adjust", function() { return __WEBPACK_IMPORTED_MODULE_5__adjust__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all__ = __webpack_require__(480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_6__all__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__allPass__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return __WEBPACK_IMPORTED_MODULE_7__allPass__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__always__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return __WEBPACK_IMPORTED_MODULE_8__always__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__and__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return __WEBPACK_IMPORTED_MODULE_9__and__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__any__ = __webpack_require__(203);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return __WEBPACK_IMPORTED_MODULE_10__any__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__anyPass__ = __webpack_require__(484);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return __WEBPACK_IMPORTED_MODULE_11__anyPass__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ap__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return __WEBPACK_IMPORTED_MODULE_12__ap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aperture__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "aperture", function() { return __WEBPACK_IMPORTED_MODULE_13__aperture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__append__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return __WEBPACK_IMPORTED_MODULE_14__append__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__apply__ = __webpack_require__(205);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return __WEBPACK_IMPORTED_MODULE_15__apply__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__applySpec__ = __webpack_require__(489);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applySpec", function() { return __WEBPACK_IMPORTED_MODULE_16__applySpec__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__applyTo__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyTo", function() { return __WEBPACK_IMPORTED_MODULE_17__applyTo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ascend__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ascend", function() { return __WEBPACK_IMPORTED_MODULE_18__ascend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assoc__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assoc", function() { return __WEBPACK_IMPORTED_MODULE_19__assoc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assocPath__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assocPath", function() { return __WEBPACK_IMPORTED_MODULE_20__assocPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__binary__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "binary", function() { return __WEBPACK_IMPORTED_MODULE_21__binary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bind__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_22__bind__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__both__ = __webpack_require__(493);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "both", function() { return __WEBPACK_IMPORTED_MODULE_23__both__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__call__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return __WEBPACK_IMPORTED_MODULE_24__call__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chain__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return __WEBPACK_IMPORTED_MODULE_25__chain__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clamp__ = __webpack_require__(498);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_26__clamp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__clone__ = __webpack_require__(499);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_27__clone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comparator__ = __webpack_require__(500);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "comparator", function() { return __WEBPACK_IMPORTED_MODULE_28__comparator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__complement__ = __webpack_require__(501);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return __WEBPACK_IMPORTED_MODULE_29__complement__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__compose__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_30__compose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__composeK__ = __webpack_require__(215);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "composeK", function() { return __WEBPACK_IMPORTED_MODULE_31__composeK__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__composeP__ = __webpack_require__(503);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "composeP", function() { return __WEBPACK_IMPORTED_MODULE_32__composeP__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__concat__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return __WEBPACK_IMPORTED_MODULE_33__concat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__cond__ = __webpack_require__(512);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cond", function() { return __WEBPACK_IMPORTED_MODULE_34__cond__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__construct__ = __webpack_require__(513);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "construct", function() { return __WEBPACK_IMPORTED_MODULE_35__construct__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__constructN__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "constructN", function() { return __WEBPACK_IMPORTED_MODULE_36__constructN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__contains__ = __webpack_require__(514);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return __WEBPACK_IMPORTED_MODULE_37__contains__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__converge__ = __webpack_require__(221);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "converge", function() { return __WEBPACK_IMPORTED_MODULE_38__converge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__countBy__ = __webpack_require__(515);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return __WEBPACK_IMPORTED_MODULE_39__countBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__curry__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return __WEBPACK_IMPORTED_MODULE_40__curry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__curryN__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curryN", function() { return __WEBPACK_IMPORTED_MODULE_41__curryN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dec__ = __webpack_require__(517);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dec", function() { return __WEBPACK_IMPORTED_MODULE_42__dec__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__defaultTo__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return __WEBPACK_IMPORTED_MODULE_43__defaultTo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__descend__ = __webpack_require__(518);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "descend", function() { return __WEBPACK_IMPORTED_MODULE_44__descend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__difference__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return __WEBPACK_IMPORTED_MODULE_45__difference__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__differenceWith__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "differenceWith", function() { return __WEBPACK_IMPORTED_MODULE_46__differenceWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__dissoc__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dissoc", function() { return __WEBPACK_IMPORTED_MODULE_47__dissoc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__dissocPath__ = __webpack_require__(519);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dissocPath", function() { return __WEBPACK_IMPORTED_MODULE_48__dissocPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__divide__ = __webpack_require__(520);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return __WEBPACK_IMPORTED_MODULE_49__divide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__drop__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return __WEBPACK_IMPORTED_MODULE_50__drop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dropLast__ = __webpack_require__(522);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropLast", function() { return __WEBPACK_IMPORTED_MODULE_51__dropLast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dropLastWhile__ = __webpack_require__(526);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropLastWhile", function() { return __WEBPACK_IMPORTED_MODULE_52__dropLastWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__dropRepeats__ = __webpack_require__(529);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropRepeats", function() { return __WEBPACK_IMPORTED_MODULE_53__dropRepeats__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__dropRepeatsWith__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropRepeatsWith", function() { return __WEBPACK_IMPORTED_MODULE_54__dropRepeatsWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__dropWhile__ = __webpack_require__(530);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropWhile", function() { return __WEBPACK_IMPORTED_MODULE_55__dropWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__either__ = __webpack_require__(532);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "either", function() { return __WEBPACK_IMPORTED_MODULE_56__either__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__empty__ = __webpack_require__(232);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return __WEBPACK_IMPORTED_MODULE_57__empty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__endsWith__ = __webpack_require__(533);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return __WEBPACK_IMPORTED_MODULE_58__endsWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__eqBy__ = __webpack_require__(534);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "eqBy", function() { return __WEBPACK_IMPORTED_MODULE_59__eqBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__eqProps__ = __webpack_require__(535);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "eqProps", function() { return __WEBPACK_IMPORTED_MODULE_60__eqProps__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__equals__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return __WEBPACK_IMPORTED_MODULE_61__equals__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__evolve__ = __webpack_require__(536);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "evolve", function() { return __WEBPACK_IMPORTED_MODULE_62__evolve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__filter__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_63__filter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__find__ = __webpack_require__(537);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return __WEBPACK_IMPORTED_MODULE_64__find__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__findIndex__ = __webpack_require__(539);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return __WEBPACK_IMPORTED_MODULE_65__findIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__findLast__ = __webpack_require__(541);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return __WEBPACK_IMPORTED_MODULE_66__findLast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__findLastIndex__ = __webpack_require__(543);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return __WEBPACK_IMPORTED_MODULE_67__findLastIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__flatten__ = __webpack_require__(545);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return __WEBPACK_IMPORTED_MODULE_68__flatten__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__flip__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return __WEBPACK_IMPORTED_MODULE_69__flip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__forEach__ = __webpack_require__(546);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return __WEBPACK_IMPORTED_MODULE_70__forEach__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__forEachObjIndexed__ = __webpack_require__(547);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forEachObjIndexed", function() { return __WEBPACK_IMPORTED_MODULE_71__forEachObjIndexed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__fromPairs__ = __webpack_require__(548);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fromPairs", function() { return __WEBPACK_IMPORTED_MODULE_72__fromPairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__groupBy__ = __webpack_require__(549);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return __WEBPACK_IMPORTED_MODULE_73__groupBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__groupWith__ = __webpack_require__(550);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "groupWith", function() { return __WEBPACK_IMPORTED_MODULE_74__groupWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__gt__ = __webpack_require__(551);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return __WEBPACK_IMPORTED_MODULE_75__gt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__gte__ = __webpack_require__(552);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "gte", function() { return __WEBPACK_IMPORTED_MODULE_76__gte__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__has__ = __webpack_require__(553);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return __WEBPACK_IMPORTED_MODULE_77__has__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__hasIn__ = __webpack_require__(554);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return __WEBPACK_IMPORTED_MODULE_78__hasIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__head__ = __webpack_require__(555);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return __WEBPACK_IMPORTED_MODULE_79__head__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__identical__ = __webpack_require__(218);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "identical", function() { return __WEBPACK_IMPORTED_MODULE_80__identical__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__identity__ = __webpack_require__(152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_81__identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ifElse__ = __webpack_require__(556);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ifElse", function() { return __WEBPACK_IMPORTED_MODULE_82__ifElse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__inc__ = __webpack_require__(557);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inc", function() { return __WEBPACK_IMPORTED_MODULE_83__inc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__indexBy__ = __webpack_require__(558);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return __WEBPACK_IMPORTED_MODULE_84__indexBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__indexOf__ = __webpack_require__(559);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return __WEBPACK_IMPORTED_MODULE_85__indexOf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__init__ = __webpack_require__(560);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return __WEBPACK_IMPORTED_MODULE_86__init__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__innerJoin__ = __webpack_require__(561);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "innerJoin", function() { return __WEBPACK_IMPORTED_MODULE_87__innerJoin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__insert__ = __webpack_require__(562);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return __WEBPACK_IMPORTED_MODULE_88__insert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__insertAll__ = __webpack_require__(563);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "insertAll", function() { return __WEBPACK_IMPORTED_MODULE_89__insertAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__intersection__ = __webpack_require__(564);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return __WEBPACK_IMPORTED_MODULE_90__intersection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__intersperse__ = __webpack_require__(566);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "intersperse", function() { return __WEBPACK_IMPORTED_MODULE_91__intersperse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__into__ = __webpack_require__(567);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "into", function() { return __WEBPACK_IMPORTED_MODULE_92__into__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__invert__ = __webpack_require__(570);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return __WEBPACK_IMPORTED_MODULE_93__invert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__invertObj__ = __webpack_require__(571);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invertObj", function() { return __WEBPACK_IMPORTED_MODULE_94__invertObj__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__invoker__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invoker", function() { return __WEBPACK_IMPORTED_MODULE_95__invoker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__is__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return __WEBPACK_IMPORTED_MODULE_96__is__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__isEmpty__ = __webpack_require__(572);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return __WEBPACK_IMPORTED_MODULE_97__isEmpty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__isNil__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return __WEBPACK_IMPORTED_MODULE_98__isNil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__join__ = __webpack_require__(573);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return __WEBPACK_IMPORTED_MODULE_99__join__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__juxt__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "juxt", function() { return __WEBPACK_IMPORTED_MODULE_100__juxt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__keys__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_101__keys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__keysIn__ = __webpack_require__(574);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keysIn", function() { return __WEBPACK_IMPORTED_MODULE_102__keysIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__last__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return __WEBPACK_IMPORTED_MODULE_103__last__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__lastIndexOf__ = __webpack_require__(575);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return __WEBPACK_IMPORTED_MODULE_104__lastIndexOf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__length__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return __WEBPACK_IMPORTED_MODULE_105__length__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__lens__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lens", function() { return __WEBPACK_IMPORTED_MODULE_106__lens__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__lensIndex__ = __webpack_require__(576);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lensIndex", function() { return __WEBPACK_IMPORTED_MODULE_107__lensIndex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__lensPath__ = __webpack_require__(577);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lensPath", function() { return __WEBPACK_IMPORTED_MODULE_108__lensPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__lensProp__ = __webpack_require__(578);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lensProp", function() { return __WEBPACK_IMPORTED_MODULE_109__lensProp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__lift__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return __WEBPACK_IMPORTED_MODULE_110__lift__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__liftN__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "liftN", function() { return __WEBPACK_IMPORTED_MODULE_111__liftN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__lt__ = __webpack_require__(579);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return __WEBPACK_IMPORTED_MODULE_112__lt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__lte__ = __webpack_require__(580);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lte", function() { return __WEBPACK_IMPORTED_MODULE_113__lte__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__map__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_114__map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__mapAccum__ = __webpack_require__(581);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapAccum", function() { return __WEBPACK_IMPORTED_MODULE_115__mapAccum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__mapAccumRight__ = __webpack_require__(582);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapAccumRight", function() { return __WEBPACK_IMPORTED_MODULE_116__mapAccumRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__mapObjIndexed__ = __webpack_require__(583);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapObjIndexed", function() { return __WEBPACK_IMPORTED_MODULE_117__mapObjIndexed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__match__ = __webpack_require__(584);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return __WEBPACK_IMPORTED_MODULE_118__match__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__mathMod__ = __webpack_require__(585);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mathMod", function() { return __WEBPACK_IMPORTED_MODULE_119__mathMod__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__max__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_120__max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__maxBy__ = __webpack_require__(586);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return __WEBPACK_IMPORTED_MODULE_121__maxBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__mean__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_122__mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__median__ = __webpack_require__(587);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_123__median__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__memoize__ = __webpack_require__(588);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return __WEBPACK_IMPORTED_MODULE_124__memoize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__memoizeWith__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeWith", function() { return __WEBPACK_IMPORTED_MODULE_125__memoizeWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__merge__ = __webpack_require__(589);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_126__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__mergeAll__ = __webpack_require__(590);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return __WEBPACK_IMPORTED_MODULE_127__mergeAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__mergeDeepLeft__ = __webpack_require__(591);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepLeft", function() { return __WEBPACK_IMPORTED_MODULE_128__mergeDeepLeft__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__mergeDeepRight__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepRight", function() { return __WEBPACK_IMPORTED_MODULE_129__mergeDeepRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__mergeDeepWith__ = __webpack_require__(593);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return __WEBPACK_IMPORTED_MODULE_130__mergeDeepWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__mergeDeepWithKey__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWithKey", function() { return __WEBPACK_IMPORTED_MODULE_131__mergeDeepWithKey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__mergeWith__ = __webpack_require__(594);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return __WEBPACK_IMPORTED_MODULE_132__mergeWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__mergeWithKey__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWithKey", function() { return __WEBPACK_IMPORTED_MODULE_133__mergeWithKey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__min__ = __webpack_require__(595);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_134__min__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__minBy__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return __WEBPACK_IMPORTED_MODULE_135__minBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__modulo__ = __webpack_require__(597);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return __WEBPACK_IMPORTED_MODULE_136__modulo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__multiply__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return __WEBPACK_IMPORTED_MODULE_137__multiply__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__nAry__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nAry", function() { return __WEBPACK_IMPORTED_MODULE_138__nAry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__negate__ = __webpack_require__(598);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return __WEBPACK_IMPORTED_MODULE_139__negate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__none__ = __webpack_require__(599);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "none", function() { return __WEBPACK_IMPORTED_MODULE_140__none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__not__ = __webpack_require__(213);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return __WEBPACK_IMPORTED_MODULE_141__not__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__nth__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return __WEBPACK_IMPORTED_MODULE_142__nth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__nthArg__ = __webpack_require__(600);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nthArg", function() { return __WEBPACK_IMPORTED_MODULE_143__nthArg__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__o__ = __webpack_require__(601);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_144__o__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__objOf__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "objOf", function() { return __WEBPACK_IMPORTED_MODULE_145__objOf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__of__ = __webpack_require__(602);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return __WEBPACK_IMPORTED_MODULE_146__of__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__omit__ = __webpack_require__(604);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return __WEBPACK_IMPORTED_MODULE_147__omit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__once__ = __webpack_require__(605);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return __WEBPACK_IMPORTED_MODULE_148__once__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__or__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return __WEBPACK_IMPORTED_MODULE_149__or__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__over__ = __webpack_require__(244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "over", function() { return __WEBPACK_IMPORTED_MODULE_150__over__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__pair__ = __webpack_require__(606);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return __WEBPACK_IMPORTED_MODULE_151__pair__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__partial__ = __webpack_require__(607);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return __WEBPACK_IMPORTED_MODULE_152__partial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__partialRight__ = __webpack_require__(608);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partialRight", function() { return __WEBPACK_IMPORTED_MODULE_153__partialRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__partition__ = __webpack_require__(609);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_154__partition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__path__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return __WEBPACK_IMPORTED_MODULE_155__path__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__pathEq__ = __webpack_require__(610);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pathEq", function() { return __WEBPACK_IMPORTED_MODULE_156__pathEq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__pathOr__ = __webpack_require__(611);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pathOr", function() { return __WEBPACK_IMPORTED_MODULE_157__pathOr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__pathSatisfies__ = __webpack_require__(612);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pathSatisfies", function() { return __WEBPACK_IMPORTED_MODULE_158__pathSatisfies__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__pick__ = __webpack_require__(613);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return __WEBPACK_IMPORTED_MODULE_159__pick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__pickAll__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pickAll", function() { return __WEBPACK_IMPORTED_MODULE_160__pickAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__pickBy__ = __webpack_require__(614);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pickBy", function() { return __WEBPACK_IMPORTED_MODULE_161__pickBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__pipe__ = __webpack_require__(214);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return __WEBPACK_IMPORTED_MODULE_162__pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__pipeK__ = __webpack_require__(615);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipeK", function() { return __WEBPACK_IMPORTED_MODULE_163__pipeK__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__pipeP__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipeP", function() { return __WEBPACK_IMPORTED_MODULE_164__pipeP__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__pluck__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return __WEBPACK_IMPORTED_MODULE_165__pluck__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__prepend__ = __webpack_require__(247);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return __WEBPACK_IMPORTED_MODULE_166__prepend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__product__ = __webpack_require__(616);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return __WEBPACK_IMPORTED_MODULE_167__product__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__project__ = __webpack_require__(617);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return __WEBPACK_IMPORTED_MODULE_168__project__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__prop__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return __WEBPACK_IMPORTED_MODULE_169__prop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__propEq__ = __webpack_require__(618);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return __WEBPACK_IMPORTED_MODULE_170__propEq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__propIs__ = __webpack_require__(619);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propIs", function() { return __WEBPACK_IMPORTED_MODULE_171__propIs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__propOr__ = __webpack_require__(620);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propOr", function() { return __WEBPACK_IMPORTED_MODULE_172__propOr__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__propSatisfies__ = __webpack_require__(621);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propSatisfies", function() { return __WEBPACK_IMPORTED_MODULE_173__propSatisfies__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__props__ = __webpack_require__(622);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_174__props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__range__ = __webpack_require__(623);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_175__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__reduce__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return __WEBPACK_IMPORTED_MODULE_176__reduce__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__reduceBy__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBy", function() { return __WEBPACK_IMPORTED_MODULE_177__reduceBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__reduceRight__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return __WEBPACK_IMPORTED_MODULE_178__reduceRight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__reduceWhile__ = __webpack_require__(624);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduceWhile", function() { return __WEBPACK_IMPORTED_MODULE_179__reduceWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__reduced__ = __webpack_require__(625);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduced", function() { return __WEBPACK_IMPORTED_MODULE_180__reduced__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__reject__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return __WEBPACK_IMPORTED_MODULE_181__reject__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__remove__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_182__remove__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__repeat__ = __webpack_require__(626);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return __WEBPACK_IMPORTED_MODULE_183__repeat__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__replace__ = __webpack_require__(627);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return __WEBPACK_IMPORTED_MODULE_184__replace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__reverse__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return __WEBPACK_IMPORTED_MODULE_185__reverse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__scan__ = __webpack_require__(628);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_186__scan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__sequence__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return __WEBPACK_IMPORTED_MODULE_187__sequence__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__set__ = __webpack_require__(629);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_188__set__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__slice__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return __WEBPACK_IMPORTED_MODULE_189__slice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__sort__ = __webpack_require__(630);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return __WEBPACK_IMPORTED_MODULE_190__sort__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__sortBy__ = __webpack_require__(631);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return __WEBPACK_IMPORTED_MODULE_191__sortBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__sortWith__ = __webpack_require__(632);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return __WEBPACK_IMPORTED_MODULE_192__sortWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__split__ = __webpack_require__(633);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return __WEBPACK_IMPORTED_MODULE_193__split__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__splitAt__ = __webpack_require__(634);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "splitAt", function() { return __WEBPACK_IMPORTED_MODULE_194__splitAt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__splitEvery__ = __webpack_require__(635);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "splitEvery", function() { return __WEBPACK_IMPORTED_MODULE_195__splitEvery__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__splitWhen__ = __webpack_require__(636);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "splitWhen", function() { return __WEBPACK_IMPORTED_MODULE_196__splitWhen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__startsWith__ = __webpack_require__(637);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return __WEBPACK_IMPORTED_MODULE_197__startsWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__subtract__ = __webpack_require__(638);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return __WEBPACK_IMPORTED_MODULE_198__subtract__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__sum__ = __webpack_require__(241);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_199__sum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__symmetricDifference__ = __webpack_require__(639);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symmetricDifference", function() { return __WEBPACK_IMPORTED_MODULE_200__symmetricDifference__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__symmetricDifferenceWith__ = __webpack_require__(640);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symmetricDifferenceWith", function() { return __WEBPACK_IMPORTED_MODULE_201__symmetricDifferenceWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__tail__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return __WEBPACK_IMPORTED_MODULE_202__tail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__take__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return __WEBPACK_IMPORTED_MODULE_203__take__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__takeLast__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return __WEBPACK_IMPORTED_MODULE_204__takeLast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__takeLastWhile__ = __webpack_require__(641);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLastWhile", function() { return __WEBPACK_IMPORTED_MODULE_205__takeLastWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__takeWhile__ = __webpack_require__(642);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return __WEBPACK_IMPORTED_MODULE_206__takeWhile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__tap__ = __webpack_require__(644);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return __WEBPACK_IMPORTED_MODULE_207__tap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__test__ = __webpack_require__(646);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return __WEBPACK_IMPORTED_MODULE_208__test__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__times__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return __WEBPACK_IMPORTED_MODULE_209__times__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__toLower__ = __webpack_require__(648);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toLower", function() { return __WEBPACK_IMPORTED_MODULE_210__toLower__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__toPairs__ = __webpack_require__(649);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toPairs", function() { return __WEBPACK_IMPORTED_MODULE_211__toPairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__toPairsIn__ = __webpack_require__(650);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toPairsIn", function() { return __WEBPACK_IMPORTED_MODULE_212__toPairsIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__toString__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return __WEBPACK_IMPORTED_MODULE_213__toString__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__toUpper__ = __webpack_require__(651);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toUpper", function() { return __WEBPACK_IMPORTED_MODULE_214__toUpper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__transduce__ = __webpack_require__(652);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transduce", function() { return __WEBPACK_IMPORTED_MODULE_215__transduce__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__transpose__ = __webpack_require__(653);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_216__transpose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__traverse__ = __webpack_require__(654);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return __WEBPACK_IMPORTED_MODULE_217__traverse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__trim__ = __webpack_require__(655);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return __WEBPACK_IMPORTED_MODULE_218__trim__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__tryCatch__ = __webpack_require__(656);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return __WEBPACK_IMPORTED_MODULE_219__tryCatch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__type__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return __WEBPACK_IMPORTED_MODULE_220__type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__unapply__ = __webpack_require__(657);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unapply", function() { return __WEBPACK_IMPORTED_MODULE_221__unapply__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__unary__ = __webpack_require__(658);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unary", function() { return __WEBPACK_IMPORTED_MODULE_222__unary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__uncurryN__ = __webpack_require__(659);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uncurryN", function() { return __WEBPACK_IMPORTED_MODULE_223__uncurryN__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__unfold__ = __webpack_require__(660);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return __WEBPACK_IMPORTED_MODULE_224__unfold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__union__ = __webpack_require__(661);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return __WEBPACK_IMPORTED_MODULE_225__union__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__unionWith__ = __webpack_require__(662);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unionWith", function() { return __WEBPACK_IMPORTED_MODULE_226__unionWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__uniq__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return __WEBPACK_IMPORTED_MODULE_227__uniq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__uniqBy__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqBy", function() { return __WEBPACK_IMPORTED_MODULE_228__uniqBy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_229__uniqWith__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqWith", function() { return __WEBPACK_IMPORTED_MODULE_229__uniqWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_230__unless__ = __webpack_require__(663);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unless", function() { return __WEBPACK_IMPORTED_MODULE_230__unless__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_231__unnest__ = __webpack_require__(664);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return __WEBPACK_IMPORTED_MODULE_231__unnest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_232__until__ = __webpack_require__(665);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return __WEBPACK_IMPORTED_MODULE_232__until__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_233__update__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_233__update__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_234__useWith__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "useWith", function() { return __WEBPACK_IMPORTED_MODULE_234__useWith__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_235__values__ = __webpack_require__(206);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_235__values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_236__valuesIn__ = __webpack_require__(666);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "valuesIn", function() { return __WEBPACK_IMPORTED_MODULE_236__valuesIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_237__view__ = __webpack_require__(667);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return __WEBPACK_IMPORTED_MODULE_237__view__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_238__when__ = __webpack_require__(668);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return __WEBPACK_IMPORTED_MODULE_238__when__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_239__where__ = __webpack_require__(253);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return __WEBPACK_IMPORTED_MODULE_239__where__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_240__whereEq__ = __webpack_require__(669);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "whereEq", function() { return __WEBPACK_IMPORTED_MODULE_240__whereEq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_241__without__ = __webpack_require__(670);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return __WEBPACK_IMPORTED_MODULE_241__without__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_242__xprod__ = __webpack_require__(671);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "xprod", function() { return __WEBPACK_IMPORTED_MODULE_242__xprod__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_243__zip__ = __webpack_require__(672);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_243__zip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_244__zipObj__ = __webpack_require__(673);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zipObj", function() { return __WEBPACK_IMPORTED_MODULE_244__zipObj__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_245__zipWith__ = __webpack_require__(674);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return __WEBPACK_IMPORTED_MODULE_245__zipWith__["a"]; });























































































































































































































































/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(64);


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(false);
/* harmony default export */ __webpack_exports__["a"] = (F);

/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__always__ = __webpack_require__(64);


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__always__["a" /* default */])(true);
/* harmony default export */ __webpack_exports__["a"] = (T);

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
/* harmony default export */ __webpack_exports__["a"] = ({ '@@functional/placeholder': true });

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(15);




/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
var addIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function addIndex(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (addIndex);

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xall__ = __webpack_require__(481);




/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
var all = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['all'], __WEBPACK_IMPORTED_MODULE_2__internal_xall__["a" /* default */], function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
/* harmony default export */ __webpack_exports__["a"] = (all);

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XAll = /*#__PURE__*/function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return XAll;
}();

var _xall = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xall(f, xf) {
  return new XAll(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xall);

/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(42);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function allPass(preds) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (allPass);

/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XMap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xmap(f, xf) {
  return new XMap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xmap);

/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__max__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluck__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(42);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
var anyPass = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function anyPass(preds) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_3__pluck__["a" /* default */])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (anyPass);

/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_aperture__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__ = __webpack_require__(487);





/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
var aperture = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xaperture__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_aperture__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (aperture);

/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _aperture;
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XAperture = /*#__PURE__*/function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0__concat__["a" /* default */])(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return XAperture;
}();

var _xaperture = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__curry2__["a" /* default */])(function _xaperture(n, xf) {
  return new XAperture(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xaperture);

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
var append = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function append(el, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list, [el]);
});
/* harmony default export */ __webpack_exports__["a"] = (append);

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apply__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__max__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pluck__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reduce__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__values__ = __webpack_require__(206);









/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
var applySpec = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function applySpec(spec) {
  spec = Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_5__pluck__["a" /* default */])('length', Object(__WEBPACK_IMPORTED_MODULE_7__values__["a" /* default */])(spec))), function () {
    var args = arguments;
    return Object(__WEBPACK_IMPORTED_MODULE_3__map__["a" /* default */])(function (f) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__apply__["a" /* default */])(f, args);
    }, spec);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (applySpec);

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
* Takes a value and applies a function to it.
*
* This function is also known as the `thrush` combinator.
*
* @func
* @memberOf R
 * @since v0.25.0
* @category Function
* @sig a -> (a -> b) -> b
* @param {*} x The value
* @param {Function} f The function to apply
* @return {*} The result of applying `f` to `x`
* @example
*
*      var t42 = R.applyTo(42);
*      t42(R.identity); //=> 42
*      t42(R.add(1)); //=> 43
*/
var applyTo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function applyTo(x, f) {
  return f(x);
});
/* harmony default export */ __webpack_exports__["a"] = (applyTo);

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
var ascend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
/* harmony default export */ __webpack_exports__["a"] = (ascend);

/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(98);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
var binary = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function binary(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(2, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (binary);

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__and__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lift__ = __webpack_require__(100);





/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
var both = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function both(f, g) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : Object(__WEBPACK_IMPORTED_MODULE_3__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__and__["a" /* default */])(f, g);
});
/* harmony default export */ __webpack_exports__["a"] = (both);

/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry__ = __webpack_require__(141);


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry__["a" /* default */])(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
/* harmony default export */ __webpack_exports__["a"] = (call);

/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatCat__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(22);




var _xchain = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xchain(f, xf) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(f, Object(__WEBPACK_IMPORTED_MODULE_1__flatCat__["a" /* default */])(xf));
});
/* harmony default export */ __webpack_exports__["a"] = (_xchain);

/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forceReduced__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xfBase__ = __webpack_require__(13);





var preservingReduced = function (xf) {
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? Object(__WEBPACK_IMPORTED_MODULE_0__forceReduced__["a" /* default */])(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': __WEBPACK_IMPORTED_MODULE_3__xfBase__["a" /* default */].init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike__["a" /* default */])(input) ? Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, [input]) : Object(__WEBPACK_IMPORTED_MODULE_2__reduce__["a" /* default */])(rxf, result, input);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (_flatCat);

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _forceReduced;
function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
var clamp = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min : value > max ? max : value;
});
/* harmony default export */ __webpack_exports__["a"] = (clamp);

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(2);



/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : Object(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(value, [], [], true);
});
/* harmony default export */ __webpack_exports__["a"] = (clone);

/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
var comparator = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
/* harmony default export */ __webpack_exports__["a"] = (comparator);

/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lift__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not__ = __webpack_require__(213);



/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__not__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (complement);

/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipe;
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = composeP;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipeP__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(101);



/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__pipeP__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _pipeP;
function _pipeP(f, g) {
  return function () {
    var ctx = this;
    return f.apply(ctx, arguments).then(function (x) {
      return g.call(ctx, x);
    });
  };
}

/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _toString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toISOString__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reject__ = __webpack_require__(103);







function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(function (k) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(recur, x).concat(mapPairs(x, Object(__WEBPACK_IMPORTED_MODULE_5__reject__["a" /* default */])(function (k) {
        return (/^\d+$/.test(k)
        );
      }, Object(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__toISOString__["a" /* default */])(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : Object(__WEBPACK_IMPORTED_MODULE_2__quote__["a" /* default */])(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, Object(__WEBPACK_IMPORTED_MODULE_4__keys__["a" /* default */])(x)).join(', ') + '}';
  }
}

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containsWith__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functionName__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identical__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keys__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(143);








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = Object(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(aIterator);
  var b = Object(__WEBPACK_IMPORTED_MODULE_0__arrayFromIterator__["a" /* default */])(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !Object(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(function (b, aItem) {
    return !Object(__WEBPACK_IMPORTED_MODULE_1__containsWith__["a" /* default */])(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a, b)) {
    return true;
  }

  var typeA = Object(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(a);

  if (typeA !== Object(__WEBPACK_IMPORTED_MODULE_6__type__["a" /* default */])(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && Object(__WEBPACK_IMPORTED_MODULE_2__functionName__["a" /* default */])(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!Object(__WEBPACK_IMPORTED_MODULE_4__identical__["a" /* default */])(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = Object(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(a);
  if (keysA.length !== Object(__WEBPACK_IMPORTED_MODULE_5__keys__["a" /* default */])(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(Object(__WEBPACK_IMPORTED_MODULE_3__has__["a" /* default */])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/***/ }),
/* 507 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayFromIterator;
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

/***/ }),
/* 508 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _functionName;
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),
/* 509 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _quote;
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/***/ }),
/* 510 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

/* harmony default export */ __webpack_exports__["a"] = (_toISOString);

/***/ }),
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFilter.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfilter);

/***/ }),
/* 512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__max__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduce__ = __webpack_require__(42);






/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
var cond = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function cond(pairs) {
  var arity = Object(__WEBPACK_IMPORTED_MODULE_4__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__max__["a" /* default */], 0, Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(function (pair) {
    return pair[0].length;
  }, pairs));
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
/* harmony default export */ __webpack_exports__["a"] = (cond);

/***/ }),
/* 513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructN__ = __webpack_require__(220);



/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
var construct = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function construct(Fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__constructN__["a" /* default */])(Fn.length, Fn);
});
/* harmony default export */ __webpack_exports__["a"] = (construct);

/***/ }),
/* 514 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
var contains = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (contains);

/***/ }),
/* 515 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(104);


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return acc + 1;
}, 0);
/* harmony default export */ __webpack_exports__["a"] = (countBy);

/***/ }),
/* 516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curryN__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XReduceBy = /*#__PURE__*/function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__has__["a" /* default */])(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return XReduceBy;
}();

var _xreduceBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curryN__["a" /* default */])(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xreduceBy);

/***/ }),
/* 517 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(93);


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
var dec = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(-1);
/* harmony default export */ __webpack_exports__["a"] = (dec);

/***/ }),
/* 518 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
var descend = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
/* harmony default export */ __webpack_exports__["a"] = (descend);

/***/ }),
/* 519 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assoc__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dissoc__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remove__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update__ = __webpack_require__(150);







/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
var dissocPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0]) ? Object(__WEBPACK_IMPORTED_MODULE_4__remove__["a" /* default */])(path[0], 1, obj) : Object(__WEBPACK_IMPORTED_MODULE_3__dissoc__["a" /* default */])(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(path[0])) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__update__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      } else {
        return Object(__WEBPACK_IMPORTED_MODULE_2__assoc__["a" /* default */])(head, dissocPath(tail, obj[head]), obj);
      }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (dissocPath);

/***/ }),
/* 520 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
var divide = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function divide(a, b) {
  return a / b;
});
/* harmony default export */ __webpack_exports__["a"] = (divide);

/***/ }),
/* 521 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XDrop = /*#__PURE__*/function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDrop.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDrop;
}();

var _xdrop = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdrop(n, xf) {
  return new XDrop(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdrop);

/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__ = __webpack_require__(525);





/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
var dropLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLast__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLast__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (dropLast);

/***/ }),
/* 523 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__take__ = __webpack_require__(151);


function dropLast(n, xs) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__take__["a" /* default */])(n < xs.length ? xs.length - n : 0, xs);
}

/***/ }),
/* 524 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XTake = /*#__PURE__*/function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTake.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(ret) : ret;
  };

  return XTake;
}();

var _xtake = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtake(n, xf) {
  return new XTake(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtake);

/***/ }),
/* 525 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XDropLast = /*#__PURE__*/function () {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return XDropLast;
}();

var _xdropLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLast(n, xf) {
  return new XDropLast(n, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLast);

/***/ }),
/* 526 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__ = __webpack_require__(528);





/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */
var dropLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_3__internal_xdropLastWhile__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__internal_dropLastWhile__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (dropLastWhile);

/***/ }),
/* 527 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropLastWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(32);


function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, idx + 1, xs);
}

/***/ }),
/* 528 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XDropLastWhile = /*#__PURE__*/function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function (result, input) {
    result = Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };

  return XDropLastWhile;
}();

var _xdropLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropLastWhile(fn, xf) {
  return new XDropLastWhile(fn, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropLastWhile);

/***/ }),
/* 529 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equals__ = __webpack_require__(27);






/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
var dropRepeats = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_xdropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */]), /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__dropRepeatsWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__equals__["a" /* default */])));
/* harmony default export */ __webpack_exports__["a"] = (dropRepeats);

/***/ }),
/* 530 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(32);





/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['dropWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xdropWhile__["a" /* default */], function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(idx, Infinity, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (dropWhile);

/***/ }),
/* 531 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XDropWhile = /*#__PURE__*/function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XDropWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return XDropWhile;
}();

var _xdropWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xdropWhile(f, xf) {
  return new XDropWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xdropWhile);

/***/ }),
/* 532 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isFunction__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lift__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__or__ = __webpack_require__(231);





/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
var either = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function either(f, g) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_isFunction__["a" /* default */])(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : Object(__WEBPACK_IMPORTED_MODULE_2__lift__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__or__["a" /* default */])(f, g);
});
/* harmony default export */ __webpack_exports__["a"] = (either);

/***/ }),
/* 533 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takeLast__ = __webpack_require__(233);




/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var endsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (suffix, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__takeLast__["a" /* default */])(suffix.length, list), suffix);
});
/* harmony default export */ __webpack_exports__["a"] = (endsWith);

/***/ }),
/* 534 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(27);



/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
var eqBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqBy(f, x, y) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(f(x), f(y));
});
/* harmony default export */ __webpack_exports__["a"] = (eqBy);

/***/ }),
/* 535 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(27);



/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
var eqProps = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function eqProps(prop, obj1, obj2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(obj1[prop], obj2[prop]);
});
/* harmony default export */ __webpack_exports__["a"] = (eqProps);

/***/ }),
/* 536 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
var evolve = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (evolve);

/***/ }),
/* 537 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfind__ = __webpack_require__(538);




/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
var find = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['find'], __WEBPACK_IMPORTED_MODULE_2__internal_xfind__["a" /* default */], function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (find);

/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XFind = /*#__PURE__*/function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return XFind;
}();

var _xfind = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfind(f, xf) {
  return new XFind(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfind);

/***/ }),
/* 539 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__ = __webpack_require__(540);




/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindIndex__["a" /* default */], function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));
/* harmony default export */ __webpack_exports__["a"] = (findIndex);

/***/ }),
/* 540 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XFindIndex = /*#__PURE__*/function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return XFindIndex;
}();

var _xfindIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindIndex(f, xf) {
  return new XFindIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindIndex);

/***/ }),
/* 541 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__ = __webpack_require__(542);




/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
var findLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLast__["a" /* default */], function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (findLast);

/***/ }),
/* 542 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XFindLast = /*#__PURE__*/function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return XFindLast;
}();

var _xfindLast = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLast(f, xf) {
  return new XFindLast(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLast);

/***/ }),
/* 543 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__ = __webpack_require__(544);




/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findLastIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xfindLastIndex__["a" /* default */], function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
/* harmony default export */ __webpack_exports__["a"] = (findLastIndex);

/***/ }),
/* 544 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XFindLastIndex = /*#__PURE__*/function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return XFindLastIndex;
}();

var _xfindLastIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xfindLastIndex(f, xf) {
  return new XFindLastIndex(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xfindLastIndex);

/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__ = __webpack_require__(210);



/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_makeFlat__["a" /* default */])(true));
/* harmony default export */ __webpack_exports__["a"] = (flatten);

/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
/* harmony default export */ __webpack_exports__["a"] = (forEach);

/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(41);



/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
var forEachObjIndexed = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function forEachObjIndexed(fn, obj) {
  var keyList = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
/* harmony default export */ __webpack_exports__["a"] = (forEachObjIndexed);

/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
var fromPairs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (fromPairs);

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduceBy__ = __webpack_require__(104);




/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('groupBy', /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__reduceBy__["a" /* default */])(function (acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));
/* harmony default export */ __webpack_exports__["a"] = (groupBy);

/***/ }),
/* 550 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
var groupWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
/* harmony default export */ __webpack_exports__["a"] = (groupWith);

/***/ }),
/* 551 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
var gt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gt(a, b) {
  return a > b;
});
/* harmony default export */ __webpack_exports__["a"] = (gt);

/***/ }),
/* 552 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
var gte = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function gte(a, b) {
  return a >= b;
});
/* harmony default export */ __webpack_exports__["a"] = (gte);

/***/ }),
/* 553 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);



/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
var has = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (has);

/***/ }),
/* 554 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
var hasIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function hasIn(prop, obj) {
  return prop in obj;
});
/* harmony default export */ __webpack_exports__["a"] = (hasIn);

/***/ }),
/* 555 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nth__ = __webpack_require__(76);


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
var head = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__nth__["a" /* default */])(0);
/* harmony default export */ __webpack_exports__["a"] = (head);

/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);



/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
var ifElse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function ifElse(condition, onTrue, onFalse) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (ifElse);

/***/ }),
/* 557 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(93);


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
var inc = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__add__["a" /* default */])(1);
/* harmony default export */ __webpack_exports__["a"] = (inc);

/***/ }),
/* 558 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduceBy__ = __webpack_require__(104);


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__reduceBy__["a" /* default */])(function (acc, elem) {
  return elem;
}, null);
/* harmony default export */ __webpack_exports__["a"] = (indexBy);

/***/ }),
/* 559 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_indexOf__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isArray__ = __webpack_require__(47);




/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !Object(__WEBPACK_IMPORTED_MODULE_2__internal_isArray__["a" /* default */])(xs) ? xs.indexOf(target) : Object(__WEBPACK_IMPORTED_MODULE_1__internal_indexOf__["a" /* default */])(xs, target, 0);
});
/* harmony default export */ __webpack_exports__["a"] = (indexOf);

/***/ }),
/* 560 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slice__ = __webpack_require__(32);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__slice__["a" /* default */])(0, -1);
/* harmony default export */ __webpack_exports__["a"] = (init);

/***/ }),
/* 561 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_containsWith__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(148);




/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
var innerJoin = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function innerJoin(pred, xs, ys) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(function (x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__internal_containsWith__["a" /* default */])(pred, x, ys);
  }, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (innerJoin);

/***/ }),
/* 562 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
var insert = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (insert);

/***/ }),
/* 563 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
var insertAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
/* harmony default export */ __webpack_exports__["a"] = (insertAll);

/***/ }),
/* 564 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_filter__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flip__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uniq__ = __webpack_require__(154);






/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
var intersection = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_4__uniq__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__internal_filter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(lookupList), filteredList));
});
/* harmony default export */ __webpack_exports__["a"] = (intersection);

/***/ }),
/* 565 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(67);


var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
/* harmony default export */ __webpack_exports__["a"] = (_Set);

/***/ }),
/* 566 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
var intersperse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_checkForMethod__["a" /* default */])('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));
/* harmony default export */ __webpack_exports__["a"] = (intersperse);

/***/ }),
/* 567 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_clone__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_stepCat__ = __webpack_require__(568);






/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
var into = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function into(acc, xf, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__internal_isTransformer__["a" /* default */])(acc) ? Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(acc), acc['@@transducer/init'](), list) : Object(__WEBPACK_IMPORTED_MODULE_3__internal_reduce__["a" /* default */])(xf(Object(__WEBPACK_IMPORTED_MODULE_4__internal_stepCat__["a" /* default */])(acc)), Object(__WEBPACK_IMPORTED_MODULE_0__internal_clone__["a" /* default */])(acc, [], [], false), list);
});
/* harmony default export */ __webpack_exports__["a"] = (into);

/***/ }),
/* 568 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _stepCat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isTransformer__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objOf__ = __webpack_require__(235);






var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__assign__["a" /* default */])(result, Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(input) ? Object(__WEBPACK_IMPORTED_MODULE_4__objOf__["a" /* default */])(input[0], input[1]) : input);
  },
  '@@transducer/result': __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]
};

function _stepCat(obj) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__isTransformer__["a" /* default */])(obj)) {
    return obj;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike__["a" /* default */])(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === 'string') {
    return _stepCatString;
  }
  if (typeof obj === 'object') {
    return _stepCatObject;
  }
  throw new Error('Cannot create transformer for ' + obj);
}

/***/ }),
/* 569 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectAssign;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(17);


// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

/***/ }),
/* 570 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(41);




/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
var invert = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invert(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (invert);

/***/ }),
/* 571 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(41);



/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
var invertObj = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function invertObj(obj) {
  var props = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (invertObj);

/***/ }),
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(27);




/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
var isEmpty = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function isEmpty(x) {
  return x != null && Object(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(x, Object(__WEBPACK_IMPORTED_MODULE_1__empty__["a" /* default */])(x));
});
/* harmony default export */ __webpack_exports__["a"] = (isEmpty);

/***/ }),
/* 573 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(77);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'join');
/* harmony default export */ __webpack_exports__["a"] = (join);

/***/ }),
/* 574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
var keysIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});
/* harmony default export */ __webpack_exports__["a"] = (keysIn);

/***/ }),
/* 575 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isArray__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equals__ = __webpack_require__(27);




/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
var lastIndexOf = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !Object(__WEBPACK_IMPORTED_MODULE_1__internal_isArray__["a" /* default */])(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (Object(__WEBPACK_IMPORTED_MODULE_2__equals__["a" /* default */])(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
/* harmony default export */ __webpack_exports__["a"] = (lastIndexOf);

/***/ }),
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lens__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update__ = __webpack_require__(150);





/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
var lensIndex = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensIndex(n) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n), Object(__WEBPACK_IMPORTED_MODULE_3__update__["a" /* default */])(n));
});
/* harmony default export */ __webpack_exports__["a"] = (lensIndex);

/***/ }),
/* 577 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assocPath__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path__ = __webpack_require__(66);





/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
var lensPath = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensPath(p) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__path__["a" /* default */])(p), Object(__WEBPACK_IMPORTED_MODULE_1__assocPath__["a" /* default */])(p));
});
/* harmony default export */ __webpack_exports__["a"] = (lensPath);

/***/ }),
/* 578 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assoc__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lens__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prop__ = __webpack_require__(138);





/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lensProp = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function lensProp(k) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__lens__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__prop__["a" /* default */])(k), Object(__WEBPACK_IMPORTED_MODULE_1__assoc__["a" /* default */])(k));
});
/* harmony default export */ __webpack_exports__["a"] = (lensProp);

/***/ }),
/* 579 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
var lt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lt(a, b) {
  return a < b;
});
/* harmony default export */ __webpack_exports__["a"] = (lt);

/***/ }),
/* 580 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
var lte = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function lte(a, b) {
  return a <= b;
});
/* harmony default export */ __webpack_exports__["a"] = (lte);

/***/ }),
/* 581 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
var mapAccum = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
/* harmony default export */ __webpack_exports__["a"] = (mapAccum);

/***/ }),
/* 582 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
var mapAccumRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});
/* harmony default export */ __webpack_exports__["a"] = (mapAccumRight);

/***/ }),
/* 583 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(41);




/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
var mapObjIndexed = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mapObjIndexed(fn, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, Object(__WEBPACK_IMPORTED_MODULE_2__keys__["a" /* default */])(obj));
});
/* harmony default export */ __webpack_exports__["a"] = (mapObjIndexed);

/***/ }),
/* 584 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
var match = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function match(rx, str) {
  return str.match(rx) || [];
});
/* harmony default export */ __webpack_exports__["a"] = (match);

/***/ }),
/* 585 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isInteger__ = __webpack_require__(140);



/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
var mathMod = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mathMod(m, p) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(m)) {
    return NaN;
  }
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__internal_isInteger__["a" /* default */])(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
/* harmony default export */ __webpack_exports__["a"] = (mathMod);

/***/ }),
/* 586 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
var maxBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (maxBy);

/***/ }),
/* 587 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mean__ = __webpack_require__(240);



/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
var median = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return Object(__WEBPACK_IMPORTED_MODULE_1__mean__["a" /* default */])(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});
/* harmony default export */ __webpack_exports__["a"] = (median);

/***/ }),
/* 588 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memoizeWith__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toString__ = __webpack_require__(75);



/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @deprecated since v0.25.0
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoize = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__memoizeWith__["a" /* default */])(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__toString__["a" /* default */])(arguments);
});
/* harmony default export */ __webpack_exports__["a"] = (memoize);

/***/ }),
/* 589 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);



/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
var merge = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function merge(l, r) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */])({}, l, r);
});
/* harmony default export */ __webpack_exports__["a"] = (merge);

/***/ }),
/* 590 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_assign__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(2);



/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
var mergeAll = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function mergeAll(list) {
  return __WEBPACK_IMPORTED_MODULE_0__internal_assign__["a" /* default */].apply(null, [{}].concat(list));
});
/* harmony default export */ __webpack_exports__["a"] = (mergeAll);

/***/ }),
/* 591 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(107);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
var mergeDeepLeft = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepLeft(lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepLeft);

/***/ }),
/* 592 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(107);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function mergeDeepRight(lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepRight);

/***/ }),
/* 593 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__ = __webpack_require__(107);



/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
var mergeDeepWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeDeepWith(fn, lObj, rObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeDeepWithKey__["a" /* default */])(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeDeepWith);

/***/ }),
/* 594 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mergeWithKey__ = __webpack_require__(156);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
var mergeWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function mergeWith(fn, l, r) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__mergeWithKey__["a" /* default */])(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
/* harmony default export */ __webpack_exports__["a"] = (mergeWith);

/***/ }),
/* 595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
var min = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function min(a, b) {
  return b < a ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (min);

/***/ }),
/* 596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
var minBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});
/* harmony default export */ __webpack_exports__["a"] = (minBy);

/***/ }),
/* 597 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
var modulo = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function modulo(a, b) {
  return a % b;
});
/* harmony default export */ __webpack_exports__["a"] = (modulo);

/***/ }),
/* 598 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
var negate = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function negate(n) {
  return -n;
});
/* harmony default export */ __webpack_exports__["a"] = (negate);

/***/ }),
/* 599 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_complement__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_xany__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__any__ = __webpack_require__(203);






/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *      var isOdd = n => n % 2 === 1;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */
var none = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_complement__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_dispatchable__["a" /* default */])(['any'], __WEBPACK_IMPORTED_MODULE_3__internal_xany__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__any__["a" /* default */])));
/* harmony default export */ __webpack_exports__["a"] = (none);

/***/ }),
/* 600 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nth__ = __webpack_require__(76);




/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
var nthArg = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(arity, function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__nth__["a" /* default */])(n, arguments);
  });
});
/* harmony default export */ __webpack_exports__["a"] = (nthArg);

/***/ }),
/* 601 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
var o = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function o(f, g, x) {
  return f(g(x));
});
/* harmony default export */ __webpack_exports__["a"] = (o);

/***/ }),
/* 602 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_of__ = __webpack_require__(603);



/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
var of = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_of__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (of);

/***/ }),
/* 603 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _of;
function _of(x) {
  return [x];
}

/***/ }),
/* 604 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
var omit = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (omit);

/***/ }),
/* 605 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry1__ = __webpack_require__(2);



/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
var once = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry1__["a" /* default */])(function once(fn) {
  var called = false;
  var result;
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (once);

/***/ }),
/* 606 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
var pair = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pair(fst, snd) {
  return [fst, snd];
});
/* harmony default export */ __webpack_exports__["a"] = (pair);

/***/ }),
/* 607 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(245);



/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
var partial = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (partial);

/***/ }),
/* 608 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(105);




/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
var partialRight = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_createPartialApplicator__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (partialRight);

/***/ }),
/* 609 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__juxt__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reject__ = __webpack_require__(103);




/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__juxt__["a" /* default */])([__WEBPACK_IMPORTED_MODULE_0__filter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__reject__["a" /* default */]]);
/* harmony default export */ __webpack_exports__["a"] = (partition);

/***/ }),
/* 610 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(66);




/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
var pathEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathEq(_path, val, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(_path, obj), val);
});
/* harmony default export */ __webpack_exports__["a"] = (pathEq);

/***/ }),
/* 611 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultTo__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(66);




/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathOr(d, p, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__defaultTo__["a" /* default */])(d, Object(__WEBPACK_IMPORTED_MODULE_2__path__["a" /* default */])(p, obj));
});
/* harmony default export */ __webpack_exports__["a"] = (pathOr);

/***/ }),
/* 612 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path__ = __webpack_require__(66);



/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
var pathSatisfies = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(Object(__WEBPACK_IMPORTED_MODULE_1__path__["a" /* default */])(propPath, obj));
});
/* harmony default export */ __webpack_exports__["a"] = (pathSatisfies);

/***/ }),
/* 613 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
var pick = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pick);

/***/ }),
/* 614 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
var pickBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (pickBy);

/***/ }),
/* 615 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipeK;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composeK__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse__ = __webpack_require__(101);



/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return __WEBPACK_IMPORTED_MODULE_0__composeK__["a" /* default */].apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__reverse__["a" /* default */])(arguments));
}

/***/ }),
/* 616 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiply__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduce__ = __webpack_require__(42);



/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
var product = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__reduce__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__multiply__["a" /* default */], 1);
/* harmony default export */ __webpack_exports__["a"] = (product);

/***/ }),
/* 617 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickAll__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__useWith__ = __webpack_require__(248);





/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__useWith__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_map__["a" /* default */], [__WEBPACK_IMPORTED_MODULE_2__pickAll__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]]); // passing `identity` gives correct arity
/* harmony default export */ __webpack_exports__["a"] = (project);

/***/ }),
/* 618 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(27);



/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propEq(name, val, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(val, obj[name]);
});
/* harmony default export */ __webpack_exports__["a"] = (propEq);

/***/ }),
/* 619 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(236);



/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propIs(type, name, obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__is__["a" /* default */])(type, obj[name]);
});
/* harmony default export */ __webpack_exports__["a"] = (propIs);

/***/ }),
/* 620 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);



/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propOr(val, p, obj) {
  return obj != null && Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(p, obj) ? obj[p] : val;
});
/* harmony default export */ __webpack_exports__["a"] = (propOr);

/***/ }),
/* 621 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});
/* harmony default export */ __webpack_exports__["a"] = (propSatisfies);

/***/ }),
/* 622 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
var props = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (props);

/***/ }),
/* 623 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_isNumber__ = __webpack_require__(239);



/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
var range = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function range(from, to) {
  if (!(Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(from) && Object(__WEBPACK_IMPORTED_MODULE_1__internal_isNumber__["a" /* default */])(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (range);

/***/ }),
/* 624 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curryN__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_reduced__ = __webpack_require__(48);




/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
var reduceWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curryN__["a" /* default */])(4, [], function _reduceWhile(pred, fn, a, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__internal_reduce__["a" /* default */])(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : Object(__WEBPACK_IMPORTED_MODULE_2__internal_reduced__["a" /* default */])(acc);
  }, a, list);
});
/* harmony default export */ __webpack_exports__["a"] = (reduceWhile);

/***/ }),
/* 625 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_reduced__ = __webpack_require__(48);



/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__internal_reduced__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (reduced);

/***/ }),
/* 626 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__times__ = __webpack_require__(250);




/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
var repeat = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function repeat(value, n) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__times__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(value), n);
});
/* harmony default export */ __webpack_exports__["a"] = (repeat);

/***/ }),
/* 627 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
var replace = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});
/* harmony default export */ __webpack_exports__["a"] = (replace);

/***/ }),
/* 628 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
var scan = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (scan);

/***/ }),
/* 629 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__over__ = __webpack_require__(244);




/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
var set = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function set(lens, v, x) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__over__["a" /* default */])(lens, Object(__WEBPACK_IMPORTED_MODULE_1__always__["a" /* default */])(v), x);
});
/* harmony default export */ __webpack_exports__["a"] = (set);

/***/ }),
/* 630 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
/* harmony default export */ __webpack_exports__["a"] = (sort);

/***/ }),
/* 631 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
var sortBy = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (sortBy);

/***/ }),
/* 632 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
var sortWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (sortWith);

/***/ }),
/* 633 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(77);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(1, 'split');
/* harmony default export */ __webpack_exports__["a"] = (split);

/***/ }),
/* 634 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__length__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice__ = __webpack_require__(32);




/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
var splitAt = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitAt(index, array) {
  return [Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(0, index, array), Object(__WEBPACK_IMPORTED_MODULE_2__slice__["a" /* default */])(index, Object(__WEBPACK_IMPORTED_MODULE_1__length__["a" /* default */])(array), array)];
});
/* harmony default export */ __webpack_exports__["a"] = (splitAt);

/***/ }),
/* 635 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(32);



/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
var splitEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx, idx += n, list));
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (splitEvery);

/***/ }),
/* 636 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
var splitWhen = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});
/* harmony default export */ __webpack_exports__["a"] = (splitWhen);

/***/ }),
/* 637 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__take__ = __webpack_require__(151);




/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function (prefix, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__take__["a" /* default */])(prefix.length, list), prefix);
});
/* harmony default export */ __webpack_exports__["a"] = (startsWith);

/***/ }),
/* 638 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
var subtract = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function subtract(a, b) {
  return Number(a) - Number(b);
});
/* harmony default export */ __webpack_exports__["a"] = (subtract);

/***/ }),
/* 639 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difference__ = __webpack_require__(223);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
var symmetricDifference = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function symmetricDifference(list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list1, list2), Object(__WEBPACK_IMPORTED_MODULE_2__difference__["a" /* default */])(list2, list1));
});
/* harmony default export */ __webpack_exports__["a"] = (symmetricDifference);

/***/ }),
/* 640 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concat__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceWith__ = __webpack_require__(224);




/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
var symmetricDifferenceWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function symmetricDifferenceWith(pred, list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__concat__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list1, list2), Object(__WEBPACK_IMPORTED_MODULE_2__differenceWith__["a" /* default */])(pred, list2, list1));
});
/* harmony default export */ __webpack_exports__["a"] = (symmetricDifferenceWith);

/***/ }),
/* 641 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(32);



/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */
var takeLastWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(idx + 1, Infinity, xs);
});
/* harmony default export */ __webpack_exports__["a"] = (takeLastWhile);

/***/ }),
/* 642 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slice__ = __webpack_require__(32);





/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */
var takeWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])(['takeWhile'], __WEBPACK_IMPORTED_MODULE_2__internal_xtakeWhile__["a" /* default */], function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_3__slice__["a" /* default */])(0, idx, xs);
}));
/* harmony default export */ __webpack_exports__["a"] = (takeWhile);

/***/ }),
/* 643 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reduced__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xfBase__ = __webpack_require__(13);




var XTakeWhile = /*#__PURE__*/function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].init;
  XTakeWhile.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_2__xfBase__["a" /* default */].result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : Object(__WEBPACK_IMPORTED_MODULE_1__reduced__["a" /* default */])(result);
  };

  return XTakeWhile;
}();

var _xtakeWhile = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtakeWhile(f, xf) {
  return new XTakeWhile(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtakeWhile);

/***/ }),
/* 644 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_xtap__ = __webpack_require__(645);




/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_dispatchable__["a" /* default */])([], __WEBPACK_IMPORTED_MODULE_2__internal_xtap__["a" /* default */], function tap(fn, x) {
  fn(x);
  return x;
}));
/* harmony default export */ __webpack_exports__["a"] = (tap);

/***/ }),
/* 645 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xfBase__ = __webpack_require__(13);



var XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].init;
  XTap.prototype['@@transducer/result'] = __WEBPACK_IMPORTED_MODULE_1__xfBase__["a" /* default */].result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__curry2__["a" /* default */])(function _xtap(f, xf) {
  return new XTap(f, xf);
});
/* harmony default export */ __webpack_exports__["a"] = (_xtap);

/***/ }),
/* 646 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toString__ = __webpack_require__(75);





/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
var test = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function test(pattern, str) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__internal_isRegExp__["a" /* default */])(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + Object(__WEBPACK_IMPORTED_MODULE_3__toString__["a" /* default */])(pattern));
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_cloneRegExp__["a" /* default */])(pattern).test(str);
});
/* harmony default export */ __webpack_exports__["a"] = (test);

/***/ }),
/* 647 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _isRegExp;
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}

/***/ }),
/* 648 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(77);


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
var toLower = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toLowerCase');
/* harmony default export */ __webpack_exports__["a"] = (toLower);

/***/ }),
/* 649 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_has__ = __webpack_require__(17);



/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
var toPairs = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__internal_has__["a" /* default */])(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
/* harmony default export */ __webpack_exports__["a"] = (toPairs);

/***/ }),
/* 650 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
var toPairsIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
/* harmony default export */ __webpack_exports__["a"] = (toPairsIn);

/***/ }),
/* 651 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoker__ = __webpack_require__(77);


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__invoker__["a" /* default */])(0, 'toUpperCase');
/* harmony default export */ __webpack_exports__["a"] = (toUpper);

/***/ }),
/* 652 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_reduce__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_xwrap__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curryN__ = __webpack_require__(15);




/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__curryN__["a" /* default */])(4, function transduce(xf, fn, acc, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_reduce__["a" /* default */])(xf(typeof fn === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__internal_xwrap__["a" /* default */])(fn) : fn), acc, list);
});
/* harmony default export */ __webpack_exports__["a"] = (transduce);

/***/ }),
/* 653 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
var transpose = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (transpose);

/***/ }),
/* 654 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sequence__ = __webpack_require__(251);




/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
var traverse = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : Object(__WEBPACK_IMPORTED_MODULE_2__sequence__["a" /* default */])(of, Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* default */])(f, traversable));
});
/* harmony default export */ __webpack_exports__["a"] = (traverse);

/***/ }),
/* 655 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var _trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function trim(str) {
  return str.trim();
};
var trim = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(_trim);
/* harmony default export */ __webpack_exports__["a"] = (trim);

/***/ }),
/* 656 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_arity__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_curry2__ = __webpack_require__(0);




/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
var tryCatch = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__internal_curry2__["a" /* default */])(function _tryCatch(tryer, catcher) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__internal_arity__["a" /* default */])(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, Object(__WEBPACK_IMPORTED_MODULE_1__internal_concat__["a" /* default */])([e], arguments));
    }
  });
});
/* harmony default export */ __webpack_exports__["a"] = (tryCatch);

/***/ }),
/* 657 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
/* harmony default export */ __webpack_exports__["a"] = (unapply);

/***/ }),
/* 658 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nAry__ = __webpack_require__(98);



/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
var unary = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function unary(fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__nAry__["a" /* default */])(1, fn);
});
/* harmony default export */ __webpack_exports__["a"] = (unary);

/***/ }),
/* 659 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curryN__ = __webpack_require__(15);



/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
var uncurryN = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function uncurryN(depth, fn) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__curryN__["a" /* default */])(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
/* harmony default export */ __webpack_exports__["a"] = (uncurryN);

/***/ }),
/* 660 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
var unfold = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (unfold);

/***/ }),
/* 661 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uniq__ = __webpack_require__(154);





/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])( /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_2__compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__uniq__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (union);

/***/ }),
/* 662 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_concat__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniqWith__ = __webpack_require__(252);




/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
var unionWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry3__["a" /* default */])(function unionWith(pred, list1, list2) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__uniqWith__["a" /* default */])(pred, Object(__WEBPACK_IMPORTED_MODULE_0__internal_concat__["a" /* default */])(list1, list2));
});
/* harmony default export */ __webpack_exports__["a"] = (unionWith);

/***/ }),
/* 663 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
var unless = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
/* harmony default export */ __webpack_exports__["a"] = (unless);

/***/ }),
/* 664 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_identity__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chain__ = __webpack_require__(142);



/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__chain__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_identity__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (unnest);

/***/ }),
/* 665 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
var until = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
/* harmony default export */ __webpack_exports__["a"] = (until);

/***/ }),
/* 666 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry1__ = __webpack_require__(2);


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
var valuesIn = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry1__["a" /* default */])(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
/* harmony default export */ __webpack_exports__["a"] = (valuesIn);

/***/ }),
/* 667 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


// `Const` is a functor that effectively ignores the function given to `map`.
var Const = function (x) {
  return { value: x, 'fantasy-land/map': function () {
      return this;
    } };
};

/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
var view = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});
/* harmony default export */ __webpack_exports__["a"] = (view);

/***/ }),
/* 668 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
var when = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
/* harmony default export */ __webpack_exports__["a"] = (when);

/***/ }),
/* 669 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equals__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__where__ = __webpack_require__(253);





/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
var whereEq = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function whereEq(spec, testObj) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__where__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__equals__["a" /* default */], spec), testObj);
});
/* harmony default export */ __webpack_exports__["a"] = (whereEq);

/***/ }),
/* 670 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_contains__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_curry2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flip__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reject__ = __webpack_require__(103);





/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_1__internal_curry2__["a" /* default */])(function (xs, list) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__reject__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__flip__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__internal_contains__["a" /* default */])(xs), list);
});
/* harmony default export */ __webpack_exports__["a"] = (without);

/***/ }),
/* 671 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
var xprod = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function xprod(a, b) {
  // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ __webpack_exports__["a"] = (xprod);

/***/ }),
/* 672 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
var zip = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
/* harmony default export */ __webpack_exports__["a"] = (zip);

/***/ }),
/* 673 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry2__ = __webpack_require__(0);


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
var zipObj = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry2__["a" /* default */])(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});
/* harmony default export */ __webpack_exports__["a"] = (zipObj);

/***/ }),
/* 674 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_curry3__ = __webpack_require__(3);


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
var zipWith = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__internal_curry3__["a" /* default */])(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
/* harmony default export */ __webpack_exports__["a"] = (zipWith);

/***/ })
],[254]);