function qc(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const l in r)
				if (l !== 'default' && !(l in e)) {
					const o = Object.getOwnPropertyDescriptor(r, l);
					o &&
						Object.defineProperty(
							e,
							l,
							o.get ? o : { enumerable: !0, get: () => r[l] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	);
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver(l => {
		for (const o of l)
			if (o.type === 'childList')
				for (const i of o.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const o = {};
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: l.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const o = n(l);
		fetch(l.href, o);
	}
})();
function Ss(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var ks = { exports: {} },
	pl = {},
	xs = { exports: {} },
	z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for('react.element'),
	bc = Symbol.for('react.portal'),
	ef = Symbol.for('react.fragment'),
	tf = Symbol.for('react.strict_mode'),
	nf = Symbol.for('react.profiler'),
	rf = Symbol.for('react.provider'),
	lf = Symbol.for('react.context'),
	of = Symbol.for('react.forward_ref'),
	uf = Symbol.for('react.suspense'),
	sf = Symbol.for('react.memo'),
	af = Symbol.for('react.lazy'),
	ru = Symbol.iterator;
function cf(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (ru && e[ru]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var _s = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Es = Object.assign,
	Cs = {};
function dn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Cs),
		(this.updater = n || _s);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
dn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ns() {}
Ns.prototype = dn.prototype;
function oi(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Cs),
		(this.updater = n || _s);
}
var ii = (oi.prototype = new Ns());
ii.constructor = oi;
Es(ii, dn.prototype);
ii.isPureReactComponent = !0;
var lu = Array.isArray,
	Ps = Object.prototype.hasOwnProperty,
	ui = { current: null },
	js = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ts(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (o = '' + t.key),
		t))
			Ps.call(t, r) && !js.hasOwnProperty(r) && (l[r] = t[r]);
	var u = arguments.length - 2;
	if (u === 1) l.children = n;
	else if (1 < u) {
		for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
		l.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
	return {
		$$typeof: lr,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: ui.current,
	};
}
function ff(e, t) {
	return {
		$$typeof: lr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function si(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === lr;
}
function df(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var ou = /\/+/g;
function Il(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? df('' + e.key)
		: t.toString(36);
}
function Tr(e, t, n, r, l) {
	var o = typeof e;
	(o === 'undefined' || o === 'boolean') && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (o) {
			case 'string':
			case 'number':
				i = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case lr:
					case bc:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(l = l(i)),
			(e = r === '' ? '.' + Il(i, 0) : r),
			lu(l)
				? ((n = ''),
				  e != null && (n = e.replace(ou, '$&/') + '/'),
				  Tr(l, t, n, '', function (a) {
						return a;
				  }))
				: l != null &&
				  (si(l) &&
						(l = ff(
							l,
							n +
								(!l.key || (i && i.key === l.key)
									? ''
									: ('' + l.key).replace(ou, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((i = 0), (r = r === '' ? '.' : r + ':'), lu(e)))
		for (var u = 0; u < e.length; u++) {
			o = e[u];
			var s = r + Il(o, u);
			i += Tr(o, t, n, s, l);
		}
	else if (((s = cf(e)), typeof s == 'function'))
		for (e = s.call(e), u = 0; !(o = e.next()).done; )
			(o = o.value), (s = r + Il(o, u++)), (i += Tr(o, t, n, s, l));
	else if (o === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return i;
}
function dr(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		Tr(e, r, '', '', function (o) {
			return t.call(n, o, l++);
		}),
		r
	);
}
function pf(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var ae = { current: null },
	Lr = { transition: null },
	hf = {
		ReactCurrentDispatcher: ae,
		ReactCurrentBatchConfig: Lr,
		ReactCurrentOwner: ui,
	};
function Ls() {
	throw Error('act(...) is not supported in production builds of React.');
}
z.Children = {
	map: dr,
	forEach: function (e, t, n) {
		dr(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			dr(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			dr(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!si(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
z.Component = dn;
z.Fragment = ef;
z.Profiler = nf;
z.PureComponent = oi;
z.StrictMode = tf;
z.Suspense = uf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hf;
z.act = Ls;
z.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = Es({}, e.props),
		l = e.key,
		o = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (i = ui.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var u = e.type.defaultProps;
		for (s in t)
			Ps.call(t, s) &&
				!js.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		u = Array(s);
		for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
		r.children = u;
	}
	return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
	return (
		(e = {
			$$typeof: lf,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: rf, _context: e }),
		(e.Consumer = e)
	);
};
z.createElement = Ts;
z.createFactory = function (e) {
	var t = Ts.bind(null, e);
	return (t.type = e), t;
};
z.createRef = function () {
	return { current: null };
};
z.forwardRef = function (e) {
	return { $$typeof: of, render: e };
};
z.isValidElement = si;
z.lazy = function (e) {
	return { $$typeof: af, _payload: { _status: -1, _result: e }, _init: pf };
};
z.memo = function (e, t) {
	return { $$typeof: sf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
	var t = Lr.transition;
	Lr.transition = {};
	try {
		e();
	} finally {
		Lr.transition = t;
	}
};
z.unstable_act = Ls;
z.useCallback = function (e, t) {
	return ae.current.useCallback(e, t);
};
z.useContext = function (e) {
	return ae.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
	return ae.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
	return ae.current.useEffect(e, t);
};
z.useId = function () {
	return ae.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
	return ae.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
	return ae.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
	return ae.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
	return ae.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
	return ae.current.useReducer(e, t, n);
};
z.useRef = function (e) {
	return ae.current.useRef(e);
};
z.useState = function (e) {
	return ae.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
	return ae.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
	return ae.current.useTransition();
};
z.version = '18.3.1';
xs.exports = z;
var E = xs.exports;
const Rs = Ss(E),
	mf = qc({ __proto__: null, default: Rs }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf = E,
	gf = Symbol.for('react.element'),
	yf = Symbol.for('react.fragment'),
	wf = Object.prototype.hasOwnProperty,
	Sf = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function zs(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	n !== void 0 && (o = '' + n),
		t.key !== void 0 && (o = '' + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (r in t) wf.call(t, r) && !kf.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: gf,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: Sf.current,
	};
}
pl.Fragment = yf;
pl.jsx = zs;
pl.jsxs = zs;
ks.exports = pl;
var v = ks.exports,
	uo = {},
	Os = { exports: {} },
	Se = {},
	Is = { exports: {} },
	Fs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(N, L) {
		var R = N.length;
		N.push(L);
		e: for (; 0 < R; ) {
			var Q = (R - 1) >>> 1,
				Z = N[Q];
			if (0 < l(Z, L)) (N[Q] = L), (N[R] = Z), (R = Q);
			else break e;
		}
	}
	function n(N) {
		return N.length === 0 ? null : N[0];
	}
	function r(N) {
		if (N.length === 0) return null;
		var L = N[0],
			R = N.pop();
		if (R !== L) {
			N[0] = R;
			e: for (var Q = 0, Z = N.length, cr = Z >>> 1; Q < cr; ) {
				var St = 2 * (Q + 1) - 1,
					Ol = N[St],
					kt = St + 1,
					fr = N[kt];
				if (0 > l(Ol, R))
					kt < Z && 0 > l(fr, Ol)
						? ((N[Q] = fr), (N[kt] = R), (Q = kt))
						: ((N[Q] = Ol), (N[St] = R), (Q = St));
				else if (kt < Z && 0 > l(fr, R)) (N[Q] = fr), (N[kt] = R), (Q = kt);
				else break e;
			}
		}
		return L;
	}
	function l(N, L) {
		var R = N.sortIndex - L.sortIndex;
		return R !== 0 ? R : N.id - L.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var i = Date,
			u = i.now();
		e.unstable_now = function () {
			return i.now() - u;
		};
	}
	var s = [],
		a = [],
		h = 1,
		p = null,
		m = 3,
		y = !1,
		w = !1,
		S = !1,
		_ = typeof setTimeout == 'function' ? setTimeout : null,
		f = typeof clearTimeout == 'function' ? clearTimeout : null,
		c = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function d(N) {
		for (var L = n(a); L !== null; ) {
			if (L.callback === null) r(a);
			else if (L.startTime <= N)
				r(a), (L.sortIndex = L.expirationTime), t(s, L);
			else break;
			L = n(a);
		}
	}
	function g(N) {
		if (((S = !1), d(N), !w))
			if (n(s) !== null) (w = !0), Rl(x);
			else {
				var L = n(a);
				L !== null && zl(g, L.startTime - N);
			}
	}
	function x(N, L) {
		(w = !1), S && ((S = !1), f(T), (T = -1)), (y = !0);
		var R = m;
		try {
			for (
				d(L), p = n(s);
				p !== null && (!(p.expirationTime > L) || (N && !je()));

			) {
				var Q = p.callback;
				if (typeof Q == 'function') {
					(p.callback = null), (m = p.priorityLevel);
					var Z = Q(p.expirationTime <= L);
					(L = e.unstable_now()),
						typeof Z == 'function' ? (p.callback = Z) : p === n(s) && r(s),
						d(L);
				} else r(s);
				p = n(s);
			}
			if (p !== null) var cr = !0;
			else {
				var St = n(a);
				St !== null && zl(g, St.startTime - L), (cr = !1);
			}
			return cr;
		} finally {
			(p = null), (m = R), (y = !1);
		}
	}
	var P = !1,
		j = null,
		T = -1,
		H = 5,
		O = -1;
	function je() {
		return !(e.unstable_now() - O < H);
	}
	function mn() {
		if (j !== null) {
			var N = e.unstable_now();
			O = N;
			var L = !0;
			try {
				L = j(!0, N);
			} finally {
				L ? vn() : ((P = !1), (j = null));
			}
		} else P = !1;
	}
	var vn;
	if (typeof c == 'function')
		vn = function () {
			c(mn);
		};
	else if (typeof MessageChannel < 'u') {
		var nu = new MessageChannel(),
			Zc = nu.port2;
		(nu.port1.onmessage = mn),
			(vn = function () {
				Zc.postMessage(null);
			});
	} else
		vn = function () {
			_(mn, 0);
		};
	function Rl(N) {
		(j = N), P || ((P = !0), vn());
	}
	function zl(N, L) {
		T = _(function () {
			N(e.unstable_now());
		}, L);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (N) {
			N.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || y || ((w = !0), Rl(x));
		}),
		(e.unstable_forceFrameRate = function (N) {
			0 > N || 125 < N
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (H = 0 < N ? Math.floor(1e3 / N) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (N) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var L = 3;
					break;
				default:
					L = m;
			}
			var R = m;
			m = L;
			try {
				return N();
			} finally {
				m = R;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (N, L) {
			switch (N) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					N = 3;
			}
			var R = m;
			m = N;
			try {
				return L();
			} finally {
				m = R;
			}
		}),
		(e.unstable_scheduleCallback = function (N, L, R) {
			var Q = e.unstable_now();
			switch (
				(typeof R == 'object' && R !== null
					? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? Q + R : Q))
					: (R = Q),
				N)
			) {
				case 1:
					var Z = -1;
					break;
				case 2:
					Z = 250;
					break;
				case 5:
					Z = 1073741823;
					break;
				case 4:
					Z = 1e4;
					break;
				default:
					Z = 5e3;
			}
			return (
				(Z = R + Z),
				(N = {
					id: h++,
					callback: L,
					priorityLevel: N,
					startTime: R,
					expirationTime: Z,
					sortIndex: -1,
				}),
				R > Q
					? ((N.sortIndex = R),
					  t(a, N),
					  n(s) === null &&
							N === n(a) &&
							(S ? (f(T), (T = -1)) : (S = !0), zl(g, R - Q)))
					: ((N.sortIndex = Z), t(s, N), w || y || ((w = !0), Rl(x))),
				N
			);
		}),
		(e.unstable_shouldYield = je),
		(e.unstable_wrapCallback = function (N) {
			var L = m;
			return function () {
				var R = m;
				m = L;
				try {
					return N.apply(this, arguments);
				} finally {
					m = R;
				}
			};
		});
})(Fs);
Is.exports = Fs;
var xf = Is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _f = E,
	we = xf;
function k(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var Ms = new Set(),
	$n = {};
function It(e, t) {
	ln(e, t), ln(e + 'Capture', t);
}
function ln(e, t) {
	for ($n[e] = t, e = 0; e < t.length; e++) Ms.add(t[e]);
}
var Ye = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	so = Object.prototype.hasOwnProperty,
	Ef =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	iu = {},
	uu = {};
function Cf(e) {
	return so.call(uu, e)
		? !0
		: so.call(iu, e)
		? !1
		: Ef.test(e)
		? (uu[e] = !0)
		: ((iu[e] = !0), !1);
}
function Nf(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function Pf(e, t, n, r) {
	if (t === null || typeof t > 'u' || Nf(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function ce(e, t, n, r, l, o, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		ne[e] = new ce(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ai = /[\-:]([a-z])/g;
function ci(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ai, ci);
		ne[t] = new ce(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ai, ci);
		ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(ai, ci);
	ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fi(e, t, n, r) {
	var l = ne.hasOwnProperty(t) ? ne[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Pf(t, n, l, r) && (n = null),
		r || l === null
			? Cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: l.mustUseProperty
			? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
			: ((t = l.attributeName),
			  (r = l.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((l = l.type),
					  (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = _f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	pr = Symbol.for('react.element'),
	Bt = Symbol.for('react.portal'),
	At = Symbol.for('react.fragment'),
	di = Symbol.for('react.strict_mode'),
	ao = Symbol.for('react.profiler'),
	Us = Symbol.for('react.provider'),
	Ds = Symbol.for('react.context'),
	pi = Symbol.for('react.forward_ref'),
	co = Symbol.for('react.suspense'),
	fo = Symbol.for('react.suspense_list'),
	hi = Symbol.for('react.memo'),
	be = Symbol.for('react.lazy'),
	$s = Symbol.for('react.offscreen'),
	su = Symbol.iterator;
function gn(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (su && e[su]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var V = Object.assign,
	Fl;
function Cn(e) {
	if (Fl === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Fl = (t && t[1]) || '';
		}
	return (
		`
` +
		Fl +
		e
	);
}
var Ml = !1;
function Ul(e, t) {
	if (!e || Ml) return '';
	Ml = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (a) {
					var r = a;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (a) {
					r = a;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (a) {
				r = a;
			}
			e();
		}
	} catch (a) {
		if (a && r && typeof a.stack == 'string') {
			for (
				var l = a.stack.split(`
`),
					o = r.stack.split(`
`),
					i = l.length - 1,
					u = o.length - 1;
				1 <= i && 0 <= u && l[i] !== o[u];

			)
				u--;
			for (; 1 <= i && 0 <= u; i--, u--)
				if (l[i] !== o[u]) {
					if (i !== 1 || u !== 1)
						do
							if ((i--, u--, 0 > u || l[i] !== o[u])) {
								var s =
									`
` + l[i].replace(' at new ', ' at ');
								return (
									e.displayName &&
										s.includes('<anonymous>') &&
										(s = s.replace('<anonymous>', e.displayName)),
									s
								);
							}
						while (1 <= i && 0 <= u);
					break;
				}
		}
	} finally {
		(Ml = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Cn(e) : '';
}
function jf(e) {
	switch (e.tag) {
		case 5:
			return Cn(e.type);
		case 16:
			return Cn('Lazy');
		case 13:
			return Cn('Suspense');
		case 19:
			return Cn('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = Ul(e.type, !1)), e;
		case 11:
			return (e = Ul(e.type.render, !1)), e;
		case 1:
			return (e = Ul(e.type, !0)), e;
		default:
			return '';
	}
}
function po(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case At:
			return 'Fragment';
		case Bt:
			return 'Portal';
		case ao:
			return 'Profiler';
		case di:
			return 'StrictMode';
		case co:
			return 'Suspense';
		case fo:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Ds:
				return (e.displayName || 'Context') + '.Consumer';
			case Us:
				return (e._context.displayName || 'Context') + '.Provider';
			case pi:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case hi:
				return (
					(t = e.displayName || null), t !== null ? t : po(e.type) || 'Memo'
				);
			case be:
				(t = e._payload), (e = e._init);
				try {
					return po(e(t));
				} catch {}
		}
	return null;
}
function Tf(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return po(t);
		case 8:
			return t === di ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function mt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function Bs(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Lf(e) {
	var t = Bs(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var l = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (i) {
					(r = '' + i), o.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (i) {
					r = '' + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function hr(e) {
	e._valueTracker || (e._valueTracker = Lf(e));
}
function As(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = Bs(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ar(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function ho(e, t) {
	var n = t.checked;
	return V({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function au(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = mt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function Vs(e, t) {
	(t = t.checked), t != null && fi(e, 'checked', t, !1);
}
function mo(e, t) {
	Vs(e, t);
	var n = mt(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? vo(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && vo(e, t.type, mt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function cu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function vo(e, t, n) {
	(t !== 'number' || Ar(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nn = Array.isArray;
function qt(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + mt(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function go(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
	return V({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function fu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(k(92));
			if (Nn(n)) {
				if (1 < n.length) throw Error(k(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: mt(n) };
}
function Ws(e, t) {
	var n = mt(t.value),
		r = mt(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function du(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Hs(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function yo(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Hs(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var mr,
	Qs = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				mr = mr || document.createElement('div'),
					mr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = mr.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Bn(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Ln = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Rf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ln).forEach(function (e) {
	Rf.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ln[t] = Ln[e]);
	});
});
function Ks(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Ln.hasOwnProperty(e) && Ln[e])
		? ('' + t).trim()
		: t + 'px';
}
function Ys(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = Ks(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var zf = V(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function wo(e, t) {
	if (t) {
		if (zf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(k(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(k(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(k(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(k(62));
	}
}
function So(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var ko = null;
function mi(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var xo = null,
	bt = null,
	en = null;
function pu(e) {
	if ((e = ur(e))) {
		if (typeof xo != 'function') throw Error(k(280));
		var t = e.stateNode;
		t && ((t = yl(t)), xo(e.stateNode, e.type, t));
	}
}
function Xs(e) {
	bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function Gs() {
	if (bt) {
		var e = bt,
			t = en;
		if (((en = bt = null), pu(e), t)) for (e = 0; e < t.length; e++) pu(t[e]);
	}
}
function Js(e, t) {
	return e(t);
}
function Zs() {}
var Dl = !1;
function qs(e, t, n) {
	if (Dl) return e(t, n);
	Dl = !0;
	try {
		return Js(e, t, n);
	} finally {
		(Dl = !1), (bt !== null || en !== null) && (Zs(), Gs());
	}
}
function An(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = yl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
	return n;
}
var _o = !1;
if (Ye)
	try {
		var yn = {};
		Object.defineProperty(yn, 'passive', {
			get: function () {
				_o = !0;
			},
		}),
			window.addEventListener('test', yn, yn),
			window.removeEventListener('test', yn, yn);
	} catch {
		_o = !1;
	}
function Of(e, t, n, r, l, o, i, u, s) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, a);
	} catch (h) {
		this.onError(h);
	}
}
var Rn = !1,
	Vr = null,
	Wr = !1,
	Eo = null,
	If = {
		onError: function (e) {
			(Rn = !0), (Vr = e);
		},
	};
function Ff(e, t, n, r, l, o, i, u, s) {
	(Rn = !1), (Vr = null), Of.apply(If, arguments);
}
function Mf(e, t, n, r, l, o, i, u, s) {
	if ((Ff.apply(this, arguments), Rn)) {
		if (Rn) {
			var a = Vr;
			(Rn = !1), (Vr = null);
		} else throw Error(k(198));
		Wr || ((Wr = !0), (Eo = a));
	}
}
function Ft(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function bs(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function hu(e) {
	if (Ft(e) !== e) throw Error(k(188));
}
function Uf(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Ft(e)), t === null)) throw Error(k(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var o = l.alternate;
		if (o === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === o.child) {
			for (o = l.child; o; ) {
				if (o === n) return hu(l), e;
				if (o === r) return hu(l), t;
				o = o.sibling;
			}
			throw Error(k(188));
		}
		if (n.return !== r.return) (n = l), (r = o);
		else {
			for (var i = !1, u = l.child; u; ) {
				if (u === n) {
					(i = !0), (n = l), (r = o);
					break;
				}
				if (u === r) {
					(i = !0), (r = l), (n = o);
					break;
				}
				u = u.sibling;
			}
			if (!i) {
				for (u = o.child; u; ) {
					if (u === n) {
						(i = !0), (n = o), (r = l);
						break;
					}
					if (u === r) {
						(i = !0), (r = o), (n = l);
						break;
					}
					u = u.sibling;
				}
				if (!i) throw Error(k(189));
			}
		}
		if (n.alternate !== r) throw Error(k(190));
	}
	if (n.tag !== 3) throw Error(k(188));
	return n.stateNode.current === n ? e : t;
}
function ea(e) {
	return (e = Uf(e)), e !== null ? ta(e) : null;
}
function ta(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = ta(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var na = we.unstable_scheduleCallback,
	mu = we.unstable_cancelCallback,
	Df = we.unstable_shouldYield,
	$f = we.unstable_requestPaint,
	K = we.unstable_now,
	Bf = we.unstable_getCurrentPriorityLevel,
	vi = we.unstable_ImmediatePriority,
	ra = we.unstable_UserBlockingPriority,
	Hr = we.unstable_NormalPriority,
	Af = we.unstable_LowPriority,
	la = we.unstable_IdlePriority,
	hl = null,
	$e = null;
function Vf(e) {
	if ($e && typeof $e.onCommitFiberRoot == 'function')
		try {
			$e.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Qf,
	Wf = Math.log,
	Hf = Math.LN2;
function Qf(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Wf(e) / Hf) | 0)) | 0;
}
var vr = 64,
	gr = 4194304;
function Pn(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Qr(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		o = e.pingedLanes,
		i = n & 268435455;
	if (i !== 0) {
		var u = i & ~l;
		u !== 0 ? (r = Pn(u)) : ((o &= i), o !== 0 && (r = Pn(o)));
	} else (i = n & ~l), i !== 0 ? (r = Pn(i)) : o !== 0 && (r = Pn(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function Kf(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function Yf(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var i = 31 - Oe(o),
			u = 1 << i,
			s = l[i];
		s === -1
			? (!(u & n) || u & r) && (l[i] = Kf(u, t))
			: s <= t && (e.expiredLanes |= u),
			(o &= ~u);
	}
}
function Co(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function oa() {
	var e = vr;
	return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function $l(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function or(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Oe(t)),
		(e[t] = n);
}
function Xf(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var l = 31 - Oe(n),
			o = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
	}
}
function gi(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Oe(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var F = 0;
function ia(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ua,
	yi,
	sa,
	aa,
	ca,
	No = !1,
	yr = [],
	it = null,
	ut = null,
	st = null,
	Vn = new Map(),
	Wn = new Map(),
	tt = [],
	Gf =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function vu(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			it = null;
			break;
		case 'dragenter':
		case 'dragleave':
			ut = null;
			break;
		case 'mouseover':
		case 'mouseout':
			st = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Vn.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Wn.delete(t.pointerId);
	}
}
function wn(e, t, n, r, l, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [l],
		  }),
		  t !== null && ((t = ur(t)), t !== null && yi(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function Jf(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (it = wn(it, e, t, n, r, l)), !0;
		case 'dragenter':
			return (ut = wn(ut, e, t, n, r, l)), !0;
		case 'mouseover':
			return (st = wn(st, e, t, n, r, l)), !0;
		case 'pointerover':
			var o = l.pointerId;
			return Vn.set(o, wn(Vn.get(o) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(o = l.pointerId), Wn.set(o, wn(Wn.get(o) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function fa(e) {
	var t = Et(e.target);
	if (t !== null) {
		var n = Ft(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = bs(n)), t !== null)) {
					(e.blockedOn = t),
						ca(e.priority, function () {
							sa(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Rr(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ko = r), n.target.dispatchEvent(r), (ko = null);
		} else return (t = ur(n)), t !== null && yi(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function gu(e, t, n) {
	Rr(e) && n.delete(t);
}
function Zf() {
	(No = !1),
		it !== null && Rr(it) && (it = null),
		ut !== null && Rr(ut) && (ut = null),
		st !== null && Rr(st) && (st = null),
		Vn.forEach(gu),
		Wn.forEach(gu);
}
function Sn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		No ||
			((No = !0),
			we.unstable_scheduleCallback(we.unstable_NormalPriority, Zf)));
}
function Hn(e) {
	function t(l) {
		return Sn(l, e);
	}
	if (0 < yr.length) {
		Sn(yr[0], e);
		for (var n = 1; n < yr.length; n++) {
			var r = yr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		it !== null && Sn(it, e),
			ut !== null && Sn(ut, e),
			st !== null && Sn(st, e),
			Vn.forEach(t),
			Wn.forEach(t),
			n = 0;
		n < tt.length;
		n++
	)
		(r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
		fa(n), n.blockedOn === null && tt.shift();
}
var tn = Ze.ReactCurrentBatchConfig,
	Kr = !0;
function qf(e, t, n, r) {
	var l = F,
		o = tn.transition;
	tn.transition = null;
	try {
		(F = 1), wi(e, t, n, r);
	} finally {
		(F = l), (tn.transition = o);
	}
}
function bf(e, t, n, r) {
	var l = F,
		o = tn.transition;
	tn.transition = null;
	try {
		(F = 4), wi(e, t, n, r);
	} finally {
		(F = l), (tn.transition = o);
	}
}
function wi(e, t, n, r) {
	if (Kr) {
		var l = Po(e, t, n, r);
		if (l === null) Gl(e, t, r, Yr, n), vu(e, r);
		else if (Jf(l, e, t, n, r)) r.stopPropagation();
		else if ((vu(e, r), t & 4 && -1 < Gf.indexOf(e))) {
			for (; l !== null; ) {
				var o = ur(l);
				if (
					(o !== null && ua(o),
					(o = Po(e, t, n, r)),
					o === null && Gl(e, t, r, Yr, n),
					o === l)
				)
					break;
				l = o;
			}
			l !== null && r.stopPropagation();
		} else Gl(e, t, r, null, n);
	}
}
var Yr = null;
function Po(e, t, n, r) {
	if (((Yr = null), (e = mi(r)), (e = Et(e)), e !== null))
		if (((t = Ft(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = bs(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Yr = e), null;
}
function da(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (Bf()) {
				case vi:
					return 1;
				case ra:
					return 4;
				case Hr:
				case Af:
					return 16;
				case la:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var rt = null,
	Si = null,
	zr = null;
function pa() {
	if (zr) return zr;
	var e,
		t = Si,
		n = t.length,
		r,
		l = 'value' in rt ? rt.value : rt.textContent,
		o = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var i = n - e;
	for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
	return (zr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Or(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function wr() {
	return !0;
}
function yu() {
	return !1;
}
function ke(e) {
	function t(n, r, l, o, i) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null);
		for (var u in e)
			e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? wr
				: yu),
			(this.isPropagationStopped = yu),
			this
		);
	}
	return (
		V(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = wr));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = wr));
			},
			persist: function () {},
			isPersistent: wr,
		}),
		t
	);
}
var pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ki = ke(pn),
	ir = V({}, pn, { view: 0, detail: 0 }),
	ed = ke(ir),
	Bl,
	Al,
	kn,
	ml = V({}, ir, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: xi,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== kn &&
						(kn && e.type === 'mousemove'
							? ((Bl = e.screenX - kn.screenX), (Al = e.screenY - kn.screenY))
							: (Al = Bl = 0),
						(kn = e)),
				  Bl);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : Al;
		},
	}),
	wu = ke(ml),
	td = V({}, ml, { dataTransfer: 0 }),
	nd = ke(td),
	rd = V({}, ir, { relatedTarget: 0 }),
	Vl = ke(rd),
	ld = V({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	od = ke(ld),
	id = V({}, pn, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	ud = ke(id),
	sd = V({}, pn, { data: 0 }),
	Su = ke(sd),
	ad = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	cd = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	fd = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function dd(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = fd[e]) ? !!t[e] : !1;
}
function xi() {
	return dd;
}
var pd = V({}, ir, {
		key: function (e) {
			if (e.key) {
				var t = ad[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Or(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? cd[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: xi,
		charCode: function (e) {
			return e.type === 'keypress' ? Or(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? Or(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	hd = ke(pd),
	md = V({}, ml, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	ku = ke(md),
	vd = V({}, ir, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: xi,
	}),
	gd = ke(vd),
	yd = V({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	wd = ke(yd),
	Sd = V({}, ml, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	kd = ke(Sd),
	xd = [9, 13, 27, 32],
	_i = Ye && 'CompositionEvent' in window,
	zn = null;
Ye && 'documentMode' in document && (zn = document.documentMode);
var _d = Ye && 'TextEvent' in window && !zn,
	ha = Ye && (!_i || (zn && 8 < zn && 11 >= zn)),
	xu = ' ',
	_u = !1;
function ma(e, t) {
	switch (e) {
		case 'keyup':
			return xd.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function va(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Vt = !1;
function Ed(e, t) {
	switch (e) {
		case 'compositionend':
			return va(t);
		case 'keypress':
			return t.which !== 32 ? null : ((_u = !0), xu);
		case 'textInput':
			return (e = t.data), e === xu && _u ? null : e;
		default:
			return null;
	}
}
function Cd(e, t) {
	if (Vt)
		return e === 'compositionend' || (!_i && ma(e, t))
			? ((e = pa()), (zr = Si = rt = null), (Vt = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return ha && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Nd = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Eu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Nd[e.type] : t === 'textarea';
}
function ga(e, t, n, r) {
	Xs(r),
		(t = Xr(t, 'onChange')),
		0 < t.length &&
			((n = new ki('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var On = null,
	Qn = null;
function Pd(e) {
	ja(e, 0);
}
function vl(e) {
	var t = Qt(e);
	if (As(t)) return e;
}
function jd(e, t) {
	if (e === 'change') return t;
}
var ya = !1;
if (Ye) {
	var Wl;
	if (Ye) {
		var Hl = 'oninput' in document;
		if (!Hl) {
			var Cu = document.createElement('div');
			Cu.setAttribute('oninput', 'return;'),
				(Hl = typeof Cu.oninput == 'function');
		}
		Wl = Hl;
	} else Wl = !1;
	ya = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
	On && (On.detachEvent('onpropertychange', wa), (Qn = On = null));
}
function wa(e) {
	if (e.propertyName === 'value' && vl(Qn)) {
		var t = [];
		ga(t, Qn, e, mi(e)), qs(Pd, t);
	}
}
function Td(e, t, n) {
	e === 'focusin'
		? (Nu(), (On = t), (Qn = n), On.attachEvent('onpropertychange', wa))
		: e === 'focusout' && Nu();
}
function Ld(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return vl(Qn);
}
function Rd(e, t) {
	if (e === 'click') return vl(t);
}
function zd(e, t) {
	if (e === 'input' || e === 'change') return vl(t);
}
function Od(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == 'function' ? Object.is : Od;
function Kn(e, t) {
	if (Fe(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!so.call(t, l) || !Fe(e[l], t[l])) return !1;
	}
	return !0;
}
function Pu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function ju(e, t) {
	var n = Pu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Pu(n);
	}
}
function Sa(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Sa(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function ka() {
	for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ar(e.document);
	}
	return t;
}
function Ei(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function Id(e) {
	var t = ka(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Sa(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Ei(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var l = n.textContent.length,
					o = Math.min(r.start, l);
				(r = r.end === void 0 ? o : Math.min(r.end, l)),
					!e.extend && o > r && ((l = r), (r = o), (o = l)),
					(l = ju(n, o));
				var i = ju(n, r);
				l &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Fd = Ye && 'documentMode' in document && 11 >= document.documentMode,
	Wt = null,
	jo = null,
	In = null,
	To = !1;
function Tu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	To ||
		Wt == null ||
		Wt !== Ar(r) ||
		((r = Wt),
		'selectionStart' in r && Ei(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(In && Kn(In, r)) ||
			((In = r),
			(r = Xr(jo, 'onSelect')),
			0 < r.length &&
				((t = new ki('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Wt))));
}
function Sr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var Ht = {
		animationend: Sr('Animation', 'AnimationEnd'),
		animationiteration: Sr('Animation', 'AnimationIteration'),
		animationstart: Sr('Animation', 'AnimationStart'),
		transitionend: Sr('Transition', 'TransitionEnd'),
	},
	Ql = {},
	xa = {};
Ye &&
	((xa = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Ht.animationend.animation,
		delete Ht.animationiteration.animation,
		delete Ht.animationstart.animation),
	'TransitionEvent' in window || delete Ht.transitionend.transition);
function gl(e) {
	if (Ql[e]) return Ql[e];
	if (!Ht[e]) return e;
	var t = Ht[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in xa) return (Ql[e] = t[n]);
	return e;
}
var _a = gl('animationend'),
	Ea = gl('animationiteration'),
	Ca = gl('animationstart'),
	Na = gl('transitionend'),
	Pa = new Map(),
	Lu =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function gt(e, t) {
	Pa.set(e, t), It(t, [e]);
}
for (var Kl = 0; Kl < Lu.length; Kl++) {
	var Yl = Lu[Kl],
		Md = Yl.toLowerCase(),
		Ud = Yl[0].toUpperCase() + Yl.slice(1);
	gt(Md, 'on' + Ud);
}
gt(_a, 'onAnimationEnd');
gt(Ea, 'onAnimationIteration');
gt(Ca, 'onAnimationStart');
gt('dblclick', 'onDoubleClick');
gt('focusin', 'onFocus');
gt('focusout', 'onBlur');
gt(Na, 'onTransitionEnd');
ln('onMouseEnter', ['mouseout', 'mouseover']);
ln('onMouseLeave', ['mouseout', 'mouseover']);
ln('onPointerEnter', ['pointerout', 'pointerover']);
ln('onPointerLeave', ['pointerout', 'pointerover']);
It(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
It(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
It('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
It(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
It(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
It(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var jn =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	Dd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(jn));
function Ru(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), Mf(r, t, void 0, e), (e.currentTarget = null);
}
function ja(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var u = r[i],
						s = u.instance,
						a = u.currentTarget;
					if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
					Ru(l, u, a), (o = s);
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((u = r[i]),
						(s = u.instance),
						(a = u.currentTarget),
						(u = u.listener),
						s !== o && l.isPropagationStopped())
					)
						break e;
					Ru(l, u, a), (o = s);
				}
		}
	}
	if (Wr) throw ((e = Eo), (Wr = !1), (Eo = null), e);
}
function U(e, t) {
	var n = t[Io];
	n === void 0 && (n = t[Io] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Ta(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
	var r = 0;
	t && (r |= 4), Ta(n, e, r, t);
}
var kr = '_reactListening' + Math.random().toString(36).slice(2);
function Yn(e) {
	if (!e[kr]) {
		(e[kr] = !0),
			Ms.forEach(function (n) {
				n !== 'selectionchange' && (Dd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[kr] || ((t[kr] = !0), Xl('selectionchange', !1, t));
	}
}
function Ta(e, t, n, r) {
	switch (da(t)) {
		case 1:
			var l = qf;
			break;
		case 4:
			l = bf;
			break;
		default:
			l = wi;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!_o ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
			? e.addEventListener(t, n, { passive: l })
			: e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var i = r.tag;
			if (i === 3 || i === 4) {
				var u = r.stateNode.containerInfo;
				if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var s = i.tag;
						if (
							(s === 3 || s === 4) &&
							((s = i.stateNode.containerInfo),
							s === l || (s.nodeType === 8 && s.parentNode === l))
						)
							return;
						i = i.return;
					}
				for (; u !== null; ) {
					if (((i = Et(u)), i === null)) return;
					if (((s = i.tag), s === 5 || s === 6)) {
						r = o = i;
						continue e;
					}
					u = u.parentNode;
				}
			}
			r = r.return;
		}
	qs(function () {
		var a = o,
			h = mi(n),
			p = [];
		e: {
			var m = Pa.get(e);
			if (m !== void 0) {
				var y = ki,
					w = e;
				switch (e) {
					case 'keypress':
						if (Or(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						y = hd;
						break;
					case 'focusin':
						(w = 'focus'), (y = Vl);
						break;
					case 'focusout':
						(w = 'blur'), (y = Vl);
						break;
					case 'beforeblur':
					case 'afterblur':
						y = Vl;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						y = wu;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						y = nd;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						y = gd;
						break;
					case _a:
					case Ea:
					case Ca:
						y = od;
						break;
					case Na:
						y = wd;
						break;
					case 'scroll':
						y = ed;
						break;
					case 'wheel':
						y = kd;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						y = ud;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						y = ku;
				}
				var S = (t & 4) !== 0,
					_ = !S && e === 'scroll',
					f = S ? (m !== null ? m + 'Capture' : null) : m;
				S = [];
				for (var c = a, d; c !== null; ) {
					d = c;
					var g = d.stateNode;
					if (
						(d.tag === 5 &&
							g !== null &&
							((d = g),
							f !== null && ((g = An(c, f)), g != null && S.push(Xn(c, g, d)))),
						_)
					)
						break;
					c = c.return;
				}
				0 < S.length &&
					((m = new y(m, w, null, n, h)), p.push({ event: m, listeners: S }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === 'mouseover' || e === 'pointerover'),
					(y = e === 'mouseout' || e === 'pointerout'),
					m &&
						n !== ko &&
						(w = n.relatedTarget || n.fromElement) &&
						(Et(w) || w[Xe]))
				)
					break e;
				if (
					(y || m) &&
					((m =
						h.window === h
							? h
							: (m = h.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					y
						? ((w = n.relatedTarget || n.toElement),
						  (y = a),
						  (w = w ? Et(w) : null),
						  w !== null &&
								((_ = Ft(w)), w !== _ || (w.tag !== 5 && w.tag !== 6)) &&
								(w = null))
						: ((y = null), (w = a)),
					y !== w)
				) {
					if (
						((S = wu),
						(g = 'onMouseLeave'),
						(f = 'onMouseEnter'),
						(c = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((S = ku),
							(g = 'onPointerLeave'),
							(f = 'onPointerEnter'),
							(c = 'pointer')),
						(_ = y == null ? m : Qt(y)),
						(d = w == null ? m : Qt(w)),
						(m = new S(g, c + 'leave', y, n, h)),
						(m.target = _),
						(m.relatedTarget = d),
						(g = null),
						Et(h) === a &&
							((S = new S(f, c + 'enter', w, n, h)),
							(S.target = d),
							(S.relatedTarget = _),
							(g = S)),
						(_ = g),
						y && w)
					)
						t: {
							for (S = y, f = w, c = 0, d = S; d; d = $t(d)) c++;
							for (d = 0, g = f; g; g = $t(g)) d++;
							for (; 0 < c - d; ) (S = $t(S)), c--;
							for (; 0 < d - c; ) (f = $t(f)), d--;
							for (; c--; ) {
								if (S === f || (f !== null && S === f.alternate)) break t;
								(S = $t(S)), (f = $t(f));
							}
							S = null;
						}
					else S = null;
					y !== null && zu(p, m, y, S, !1),
						w !== null && _ !== null && zu(p, _, w, S, !0);
				}
			}
			e: {
				if (
					((m = a ? Qt(a) : window),
					(y = m.nodeName && m.nodeName.toLowerCase()),
					y === 'select' || (y === 'input' && m.type === 'file'))
				)
					var x = jd;
				else if (Eu(m))
					if (ya) x = zd;
					else {
						x = Ld;
						var P = Td;
					}
				else
					(y = m.nodeName) &&
						y.toLowerCase() === 'input' &&
						(m.type === 'checkbox' || m.type === 'radio') &&
						(x = Rd);
				if (x && (x = x(e, a))) {
					ga(p, x, n, h);
					break e;
				}
				P && P(e, m, a),
					e === 'focusout' &&
						(P = m._wrapperState) &&
						P.controlled &&
						m.type === 'number' &&
						vo(m, 'number', m.value);
			}
			switch (((P = a ? Qt(a) : window), e)) {
				case 'focusin':
					(Eu(P) || P.contentEditable === 'true') &&
						((Wt = P), (jo = a), (In = null));
					break;
				case 'focusout':
					In = jo = Wt = null;
					break;
				case 'mousedown':
					To = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(To = !1), Tu(p, n, h);
					break;
				case 'selectionchange':
					if (Fd) break;
				case 'keydown':
				case 'keyup':
					Tu(p, n, h);
			}
			var j;
			if (_i)
				e: {
					switch (e) {
						case 'compositionstart':
							var T = 'onCompositionStart';
							break e;
						case 'compositionend':
							T = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							T = 'onCompositionUpdate';
							break e;
					}
					T = void 0;
				}
			else
				Vt
					? ma(e, n) && (T = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
			T &&
				(ha &&
					n.locale !== 'ko' &&
					(Vt || T !== 'onCompositionStart'
						? T === 'onCompositionEnd' && Vt && (j = pa())
						: ((rt = h),
						  (Si = 'value' in rt ? rt.value : rt.textContent),
						  (Vt = !0))),
				(P = Xr(a, T)),
				0 < P.length &&
					((T = new Su(T, e, null, n, h)),
					p.push({ event: T, listeners: P }),
					j ? (T.data = j) : ((j = va(n)), j !== null && (T.data = j)))),
				(j = _d ? Ed(e, n) : Cd(e, n)) &&
					((a = Xr(a, 'onBeforeInput')),
					0 < a.length &&
						((h = new Su('onBeforeInput', 'beforeinput', null, n, h)),
						p.push({ event: h, listeners: a }),
						(h.data = j)));
		}
		ja(p, t);
	});
}
function Xn(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			o = l.stateNode;
		l.tag === 5 &&
			o !== null &&
			((l = o),
			(o = An(e, n)),
			o != null && r.unshift(Xn(e, o, l)),
			(o = An(e, t)),
			o != null && r.push(Xn(e, o, l))),
			(e = e.return);
	}
	return r;
}
function $t(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function zu(e, t, n, r, l) {
	for (var o = t._reactName, i = []; n !== null && n !== r; ) {
		var u = n,
			s = u.alternate,
			a = u.stateNode;
		if (s !== null && s === r) break;
		u.tag === 5 &&
			a !== null &&
			((u = a),
			l
				? ((s = An(n, o)), s != null && i.unshift(Xn(n, s, u)))
				: l || ((s = An(n, o)), s != null && i.push(Xn(n, s, u)))),
			(n = n.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var $d = /\r\n?/g,
	Bd = /\u0000|\uFFFD/g;
function Ou(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			$d,
			`
`
		)
		.replace(Bd, '');
}
function xr(e, t, n) {
	if (((t = Ou(t)), Ou(e) !== t && n)) throw Error(k(425));
}
function Gr() {}
var Lo = null,
	Ro = null;
function zo(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Oo = typeof setTimeout == 'function' ? setTimeout : void 0,
	Ad = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Iu = typeof Promise == 'function' ? Promise : void 0,
	Vd =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Iu < 'u'
			? function (e) {
					return Iu.resolve(null).then(e).catch(Wd);
			  }
			: Oo;
function Wd(e) {
	setTimeout(function () {
		throw e;
	});
}
function Jl(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), Hn(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	Hn(t);
}
function at(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function Fu(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var hn = Math.random().toString(36).slice(2),
	De = '__reactFiber$' + hn,
	Gn = '__reactProps$' + hn,
	Xe = '__reactContainer$' + hn,
	Io = '__reactEvents$' + hn,
	Hd = '__reactListeners$' + hn,
	Qd = '__reactHandles$' + hn;
function Et(e) {
	var t = e[De];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Xe] || n[De])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Fu(e); e !== null; ) {
					if ((n = e[De])) return n;
					e = Fu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ur(e) {
	return (
		(e = e[De] || e[Xe]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Qt(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(k(33));
}
function yl(e) {
	return e[Gn] || null;
}
var Fo = [],
	Kt = -1;
function yt(e) {
	return { current: e };
}
function D(e) {
	0 > Kt || ((e.current = Fo[Kt]), (Fo[Kt] = null), Kt--);
}
function M(e, t) {
	Kt++, (Fo[Kt] = e.current), (e.current = t);
}
var vt = {},
	ie = yt(vt),
	pe = yt(!1),
	Tt = vt;
function on(e, t) {
	var n = e.type.contextTypes;
	if (!n) return vt;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		o;
	for (o in n) l[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function he(e) {
	return (e = e.childContextTypes), e != null;
}
function Jr() {
	D(pe), D(ie);
}
function Mu(e, t, n) {
	if (ie.current !== vt) throw Error(k(168));
	M(ie, t), M(pe, n);
}
function La(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(k(108, Tf(e) || 'Unknown', l));
	return V({}, n, r);
}
function Zr(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
		(Tt = ie.current),
		M(ie, e),
		M(pe, pe.current),
		!0
	);
}
function Uu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(k(169));
	n
		? ((e = La(e, t, Tt)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  D(pe),
		  D(ie),
		  M(ie, e))
		: D(pe),
		M(pe, n);
}
var We = null,
	wl = !1,
	Zl = !1;
function Ra(e) {
	We === null ? (We = [e]) : We.push(e);
}
function Kd(e) {
	(wl = !0), Ra(e);
}
function wt() {
	if (!Zl && We !== null) {
		Zl = !0;
		var e = 0,
			t = F;
		try {
			var n = We;
			for (F = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(We = null), (wl = !1);
		} catch (l) {
			throw (We !== null && (We = We.slice(e + 1)), na(vi, wt), l);
		} finally {
			(F = t), (Zl = !1);
		}
	}
	return null;
}
var Yt = [],
	Xt = 0,
	qr = null,
	br = 0,
	xe = [],
	_e = 0,
	Lt = null,
	He = 1,
	Qe = '';
function xt(e, t) {
	(Yt[Xt++] = br), (Yt[Xt++] = qr), (qr = e), (br = t);
}
function za(e, t, n) {
	(xe[_e++] = He), (xe[_e++] = Qe), (xe[_e++] = Lt), (Lt = e);
	var r = He;
	e = Qe;
	var l = 32 - Oe(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var o = 32 - Oe(t) + l;
	if (30 < o) {
		var i = l - (l % 5);
		(o = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(l -= i),
			(He = (1 << (32 - Oe(t) + l)) | (n << l) | r),
			(Qe = o + e);
	} else (He = (1 << o) | (n << l) | r), (Qe = e);
}
function Ci(e) {
	e.return !== null && (xt(e, 1), za(e, 1, 0));
}
function Ni(e) {
	for (; e === qr; )
		(qr = Yt[--Xt]), (Yt[Xt] = null), (br = Yt[--Xt]), (Yt[Xt] = null);
	for (; e === Lt; )
		(Lt = xe[--_e]),
			(xe[_e] = null),
			(Qe = xe[--_e]),
			(xe[_e] = null),
			(He = xe[--_e]),
			(xe[_e] = null);
}
var ye = null,
	ge = null,
	$ = !1,
	ze = null;
function Oa(e, t) {
	var n = Ee(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Du(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (ye = e), (ge = at(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Lt !== null ? { id: He, overflow: Qe } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Ee(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (ye = e),
					  (ge = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Mo(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Uo(e) {
	if ($) {
		var t = ge;
		if (t) {
			var n = t;
			if (!Du(e, t)) {
				if (Mo(e)) throw Error(k(418));
				t = at(n.nextSibling);
				var r = ye;
				t && Du(e, t)
					? Oa(r, n)
					: ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
			}
		} else {
			if (Mo(e)) throw Error(k(418));
			(e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
		}
	}
}
function $u(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	ye = e;
}
function _r(e) {
	if (e !== ye) return !1;
	if (!$) return $u(e), ($ = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !zo(e.type, e.memoizedProps))),
		t && (t = ge))
	) {
		if (Mo(e)) throw (Ia(), Error(k(418)));
		for (; t; ) Oa(e, t), (t = at(t.nextSibling));
	}
	if (($u(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(k(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							ge = at(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			ge = null;
		}
	} else ge = ye ? at(e.stateNode.nextSibling) : null;
	return !0;
}
function Ia() {
	for (var e = ge; e; ) e = at(e.nextSibling);
}
function un() {
	(ge = ye = null), ($ = !1);
}
function Pi(e) {
	ze === null ? (ze = [e]) : ze.push(e);
}
var Yd = Ze.ReactCurrentBatchConfig;
function xn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(k(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(k(147, e));
			var l = r,
				o = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (i) {
						var u = l.refs;
						i === null ? delete u[o] : (u[o] = i);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != 'string') throw Error(k(284));
		if (!n._owner) throw Error(k(290, e));
	}
	return e;
}
function Er(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			k(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function Bu(e) {
	var t = e._init;
	return t(e._payload);
}
function Fa(e) {
	function t(f, c) {
		if (e) {
			var d = f.deletions;
			d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
		}
	}
	function n(f, c) {
		if (!e) return null;
		for (; c !== null; ) t(f, c), (c = c.sibling);
		return null;
	}
	function r(f, c) {
		for (f = new Map(); c !== null; )
			c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
		return f;
	}
	function l(f, c) {
		return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
	}
	function o(f, c, d) {
		return (
			(f.index = d),
			e
				? ((d = f.alternate),
				  d !== null
						? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
						: ((f.flags |= 2), c))
				: ((f.flags |= 1048576), c)
		);
	}
	function i(f) {
		return e && f.alternate === null && (f.flags |= 2), f;
	}
	function u(f, c, d, g) {
		return c === null || c.tag !== 6
			? ((c = lo(d, f.mode, g)), (c.return = f), c)
			: ((c = l(c, d)), (c.return = f), c);
	}
	function s(f, c, d, g) {
		var x = d.type;
		return x === At
			? h(f, c, d.props.children, g, d.key)
			: c !== null &&
			  (c.elementType === x ||
					(typeof x == 'object' &&
						x !== null &&
						x.$$typeof === be &&
						Bu(x) === c.type))
			? ((g = l(c, d.props)), (g.ref = xn(f, c, d)), (g.return = f), g)
			: ((g = Br(d.type, d.key, d.props, null, f.mode, g)),
			  (g.ref = xn(f, c, d)),
			  (g.return = f),
			  g);
	}
	function a(f, c, d, g) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== d.containerInfo ||
			c.stateNode.implementation !== d.implementation
			? ((c = oo(d, f.mode, g)), (c.return = f), c)
			: ((c = l(c, d.children || [])), (c.return = f), c);
	}
	function h(f, c, d, g, x) {
		return c === null || c.tag !== 7
			? ((c = jt(d, f.mode, g, x)), (c.return = f), c)
			: ((c = l(c, d)), (c.return = f), c);
	}
	function p(f, c, d) {
		if ((typeof c == 'string' && c !== '') || typeof c == 'number')
			return (c = lo('' + c, f.mode, d)), (c.return = f), c;
		if (typeof c == 'object' && c !== null) {
			switch (c.$$typeof) {
				case pr:
					return (
						(d = Br(c.type, c.key, c.props, null, f.mode, d)),
						(d.ref = xn(f, null, c)),
						(d.return = f),
						d
					);
				case Bt:
					return (c = oo(c, f.mode, d)), (c.return = f), c;
				case be:
					var g = c._init;
					return p(f, g(c._payload), d);
			}
			if (Nn(c) || gn(c))
				return (c = jt(c, f.mode, d, null)), (c.return = f), c;
			Er(f, c);
		}
		return null;
	}
	function m(f, c, d, g) {
		var x = c !== null ? c.key : null;
		if ((typeof d == 'string' && d !== '') || typeof d == 'number')
			return x !== null ? null : u(f, c, '' + d, g);
		if (typeof d == 'object' && d !== null) {
			switch (d.$$typeof) {
				case pr:
					return d.key === x ? s(f, c, d, g) : null;
				case Bt:
					return d.key === x ? a(f, c, d, g) : null;
				case be:
					return (x = d._init), m(f, c, x(d._payload), g);
			}
			if (Nn(d) || gn(d)) return x !== null ? null : h(f, c, d, g, null);
			Er(f, d);
		}
		return null;
	}
	function y(f, c, d, g, x) {
		if ((typeof g == 'string' && g !== '') || typeof g == 'number')
			return (f = f.get(d) || null), u(c, f, '' + g, x);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case pr:
					return (f = f.get(g.key === null ? d : g.key) || null), s(c, f, g, x);
				case Bt:
					return (f = f.get(g.key === null ? d : g.key) || null), a(c, f, g, x);
				case be:
					var P = g._init;
					return y(f, c, d, P(g._payload), x);
			}
			if (Nn(g) || gn(g)) return (f = f.get(d) || null), h(c, f, g, x, null);
			Er(c, g);
		}
		return null;
	}
	function w(f, c, d, g) {
		for (
			var x = null, P = null, j = c, T = (c = 0), H = null;
			j !== null && T < d.length;
			T++
		) {
			j.index > T ? ((H = j), (j = null)) : (H = j.sibling);
			var O = m(f, j, d[T], g);
			if (O === null) {
				j === null && (j = H);
				break;
			}
			e && j && O.alternate === null && t(f, j),
				(c = o(O, c, T)),
				P === null ? (x = O) : (P.sibling = O),
				(P = O),
				(j = H);
		}
		if (T === d.length) return n(f, j), $ && xt(f, T), x;
		if (j === null) {
			for (; T < d.length; T++)
				(j = p(f, d[T], g)),
					j !== null &&
						((c = o(j, c, T)), P === null ? (x = j) : (P.sibling = j), (P = j));
			return $ && xt(f, T), x;
		}
		for (j = r(f, j); T < d.length; T++)
			(H = y(j, f, T, d[T], g)),
				H !== null &&
					(e && H.alternate !== null && j.delete(H.key === null ? T : H.key),
					(c = o(H, c, T)),
					P === null ? (x = H) : (P.sibling = H),
					(P = H));
		return (
			e &&
				j.forEach(function (je) {
					return t(f, je);
				}),
			$ && xt(f, T),
			x
		);
	}
	function S(f, c, d, g) {
		var x = gn(d);
		if (typeof x != 'function') throw Error(k(150));
		if (((d = x.call(d)), d == null)) throw Error(k(151));
		for (
			var P = (x = null), j = c, T = (c = 0), H = null, O = d.next();
			j !== null && !O.done;
			T++, O = d.next()
		) {
			j.index > T ? ((H = j), (j = null)) : (H = j.sibling);
			var je = m(f, j, O.value, g);
			if (je === null) {
				j === null && (j = H);
				break;
			}
			e && j && je.alternate === null && t(f, j),
				(c = o(je, c, T)),
				P === null ? (x = je) : (P.sibling = je),
				(P = je),
				(j = H);
		}
		if (O.done) return n(f, j), $ && xt(f, T), x;
		if (j === null) {
			for (; !O.done; T++, O = d.next())
				(O = p(f, O.value, g)),
					O !== null &&
						((c = o(O, c, T)), P === null ? (x = O) : (P.sibling = O), (P = O));
			return $ && xt(f, T), x;
		}
		for (j = r(f, j); !O.done; T++, O = d.next())
			(O = y(j, f, T, O.value, g)),
				O !== null &&
					(e && O.alternate !== null && j.delete(O.key === null ? T : O.key),
					(c = o(O, c, T)),
					P === null ? (x = O) : (P.sibling = O),
					(P = O));
		return (
			e &&
				j.forEach(function (mn) {
					return t(f, mn);
				}),
			$ && xt(f, T),
			x
		);
	}
	function _(f, c, d, g) {
		if (
			(typeof d == 'object' &&
				d !== null &&
				d.type === At &&
				d.key === null &&
				(d = d.props.children),
			typeof d == 'object' && d !== null)
		) {
			switch (d.$$typeof) {
				case pr:
					e: {
						for (var x = d.key, P = c; P !== null; ) {
							if (P.key === x) {
								if (((x = d.type), x === At)) {
									if (P.tag === 7) {
										n(f, P.sibling),
											(c = l(P, d.props.children)),
											(c.return = f),
											(f = c);
										break e;
									}
								} else if (
									P.elementType === x ||
									(typeof x == 'object' &&
										x !== null &&
										x.$$typeof === be &&
										Bu(x) === P.type)
								) {
									n(f, P.sibling),
										(c = l(P, d.props)),
										(c.ref = xn(f, P, d)),
										(c.return = f),
										(f = c);
									break e;
								}
								n(f, P);
								break;
							} else t(f, P);
							P = P.sibling;
						}
						d.type === At
							? ((c = jt(d.props.children, f.mode, g, d.key)),
							  (c.return = f),
							  (f = c))
							: ((g = Br(d.type, d.key, d.props, null, f.mode, g)),
							  (g.ref = xn(f, c, d)),
							  (g.return = f),
							  (f = g));
					}
					return i(f);
				case Bt:
					e: {
						for (P = d.key; c !== null; ) {
							if (c.key === P)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo === d.containerInfo &&
									c.stateNode.implementation === d.implementation
								) {
									n(f, c.sibling),
										(c = l(c, d.children || [])),
										(c.return = f),
										(f = c);
									break e;
								} else {
									n(f, c);
									break;
								}
							else t(f, c);
							c = c.sibling;
						}
						(c = oo(d, f.mode, g)), (c.return = f), (f = c);
					}
					return i(f);
				case be:
					return (P = d._init), _(f, c, P(d._payload), g);
			}
			if (Nn(d)) return w(f, c, d, g);
			if (gn(d)) return S(f, c, d, g);
			Er(f, d);
		}
		return (typeof d == 'string' && d !== '') || typeof d == 'number'
			? ((d = '' + d),
			  c !== null && c.tag === 6
					? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
					: (n(f, c), (c = lo(d, f.mode, g)), (c.return = f), (f = c)),
			  i(f))
			: n(f, c);
	}
	return _;
}
var sn = Fa(!0),
	Ma = Fa(!1),
	el = yt(null),
	tl = null,
	Gt = null,
	ji = null;
function Ti() {
	ji = Gt = tl = null;
}
function Li(e) {
	var t = el.current;
	D(el), (e._currentValue = t);
}
function Do(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function nn(e, t) {
	(tl = e),
		(ji = Gt = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (de = !0), (e.firstContext = null));
}
function Ne(e) {
	var t = e._currentValue;
	if (ji !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
			if (tl === null) throw Error(k(308));
			(Gt = e), (tl.dependencies = { lanes: 0, firstContext: e });
		} else Gt = Gt.next = e;
	return t;
}
var Ct = null;
function Ri(e) {
	Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Ua(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), Ri(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Ge(e, r)
	);
}
function Ge(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function zi(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Da(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Ke(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function ct(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), I & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Ge(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), Ri(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Ge(e, n)
	);
}
function Ir(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), gi(e, n);
	}
}
function Au(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
			} while (n !== null);
			o === null ? (l = o = t) : (o = o.next = t);
		} else l = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
	var l = e.updateQueue;
	et = !1;
	var o = l.firstBaseUpdate,
		i = l.lastBaseUpdate,
		u = l.shared.pending;
	if (u !== null) {
		l.shared.pending = null;
		var s = u,
			a = s.next;
		(s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
		var h = e.alternate;
		h !== null &&
			((h = h.updateQueue),
			(u = h.lastBaseUpdate),
			u !== i &&
				(u === null ? (h.firstBaseUpdate = a) : (u.next = a),
				(h.lastBaseUpdate = s)));
	}
	if (o !== null) {
		var p = l.baseState;
		(i = 0), (h = a = s = null), (u = o);
		do {
			var m = u.lane,
				y = u.eventTime;
			if ((r & m) === m) {
				h !== null &&
					(h = h.next =
						{
							eventTime: y,
							lane: 0,
							tag: u.tag,
							payload: u.payload,
							callback: u.callback,
							next: null,
						});
				e: {
					var w = e,
						S = u;
					switch (((m = t), (y = n), S.tag)) {
						case 1:
							if (((w = S.payload), typeof w == 'function')) {
								p = w.call(y, p, m);
								break e;
							}
							p = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (
								((w = S.payload),
								(m = typeof w == 'function' ? w.call(y, p, m) : w),
								m == null)
							)
								break e;
							p = V({}, p, m);
							break e;
						case 2:
							et = !0;
					}
				}
				u.callback !== null &&
					u.lane !== 0 &&
					((e.flags |= 64),
					(m = l.effects),
					m === null ? (l.effects = [u]) : m.push(u));
			} else
				(y = {
					eventTime: y,
					lane: m,
					tag: u.tag,
					payload: u.payload,
					callback: u.callback,
					next: null,
				}),
					h === null ? ((a = h = y), (s = p)) : (h = h.next = y),
					(i |= m);
			if (((u = u.next), u === null)) {
				if (((u = l.shared.pending), u === null)) break;
				(m = u),
					(u = m.next),
					(m.next = null),
					(l.lastBaseUpdate = m),
					(l.shared.pending = null);
			}
		} while (!0);
		if (
			(h === null && (s = p),
			(l.baseState = s),
			(l.firstBaseUpdate = a),
			(l.lastBaseUpdate = h),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (i |= l.lane), (l = l.next);
			while (l !== t);
		} else o === null && (l.shared.lanes = 0);
		(zt |= i), (e.lanes = i), (e.memoizedState = p);
	}
}
function Vu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != 'function'))
					throw Error(k(191, l));
				l.call(r);
			}
		}
}
var sr = {},
	Be = yt(sr),
	Jn = yt(sr),
	Zn = yt(sr);
function Nt(e) {
	if (e === sr) throw Error(k(174));
	return e;
}
function Oi(e, t) {
	switch ((M(Zn, t), M(Jn, e), M(Be, sr), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : yo(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = yo(t, e));
	}
	D(Be), M(Be, t);
}
function an() {
	D(Be), D(Jn), D(Zn);
}
function $a(e) {
	Nt(Zn.current);
	var t = Nt(Be.current),
		n = yo(t, e.type);
	t !== n && (M(Jn, e), M(Be, n));
}
function Ii(e) {
	Jn.current === e && (D(Be), D(Jn));
}
var B = yt(0);
function rl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var ql = [];
function Fi() {
	for (var e = 0; e < ql.length; e++)
		ql[e]._workInProgressVersionPrimary = null;
	ql.length = 0;
}
var Fr = Ze.ReactCurrentDispatcher,
	bl = Ze.ReactCurrentBatchConfig,
	Rt = 0,
	A = null,
	G = null,
	q = null,
	ll = !1,
	Fn = !1,
	qn = 0,
	Xd = 0;
function re() {
	throw Error(k(321));
}
function Mi(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Fe(e[n], t[n])) return !1;
	return !0;
}
function Ui(e, t, n, r, l, o) {
	if (
		((Rt = o),
		(A = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Fr.current = e === null || e.memoizedState === null ? qd : bd),
		(e = n(r, l)),
		Fn)
	) {
		o = 0;
		do {
			if (((Fn = !1), (qn = 0), 25 <= o)) throw Error(k(301));
			(o += 1),
				(q = G = null),
				(t.updateQueue = null),
				(Fr.current = ep),
				(e = n(r, l));
		} while (Fn);
	}
	if (
		((Fr.current = ol),
		(t = G !== null && G.next !== null),
		(Rt = 0),
		(q = G = A = null),
		(ll = !1),
		t)
	)
		throw Error(k(300));
	return e;
}
function Di() {
	var e = qn !== 0;
	return (qn = 0), e;
}
function Ue() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Pe() {
	if (G === null) {
		var e = A.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = G.next;
	var t = q === null ? A.memoizedState : q.next;
	if (t !== null) (q = t), (G = e);
	else {
		if (e === null) throw Error(k(310));
		(G = e),
			(e = {
				memoizedState: G.memoizedState,
				baseState: G.baseState,
				baseQueue: G.baseQueue,
				queue: G.queue,
				next: null,
			}),
			q === null ? (A.memoizedState = q = e) : (q = q.next = e);
	}
	return q;
}
function bn(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function eo(e) {
	var t = Pe(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = G,
		l = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (l !== null) {
			var i = l.next;
			(l.next = o.next), (o.next = i);
		}
		(r.baseQueue = l = o), (n.pending = null);
	}
	if (l !== null) {
		(o = l.next), (r = r.baseState);
		var u = (i = null),
			s = null,
			a = o;
		do {
			var h = a.lane;
			if ((Rt & h) === h)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: a.action,
							hasEagerState: a.hasEagerState,
							eagerState: a.eagerState,
							next: null,
						}),
					(r = a.hasEagerState ? a.eagerState : e(r, a.action));
			else {
				var p = {
					lane: h,
					action: a.action,
					hasEagerState: a.hasEagerState,
					eagerState: a.eagerState,
					next: null,
				};
				s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
					(A.lanes |= h),
					(zt |= h);
			}
			a = a.next;
		} while (a !== null && a !== o);
		s === null ? (i = r) : (s.next = u),
			Fe(r, t.memoizedState) || (de = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (o = l.lane), (A.lanes |= o), (zt |= o), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function to(e) {
	var t = Pe(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		o = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var i = (l = l.next);
		do (o = e(o, i.action)), (i = i.next);
		while (i !== l);
		Fe(o, t.memoizedState) || (de = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function Ba() {}
function Aa(e, t) {
	var n = A,
		r = Pe(),
		l = t(),
		o = !Fe(r.memoizedState, l);
	if (
		(o && ((r.memoizedState = l), (de = !0)),
		(r = r.queue),
		$i(Ha.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			er(9, Wa.bind(null, n, r, l, t), void 0, null),
			b === null)
		)
			throw Error(k(349));
		Rt & 30 || Va(n, t, l);
	}
	return l;
}
function Va(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = A.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (A.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wa(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Qa(t) && Ka(e);
}
function Ha(e, t, n) {
	return n(function () {
		Qa(t) && Ka(e);
	});
}
function Qa(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Fe(e, n);
	} catch {
		return !0;
	}
}
function Ka(e) {
	var t = Ge(e, 1);
	t !== null && Ie(t, e, 1, -1);
}
function Wu(e) {
	var t = Ue();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: bn,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Zd.bind(null, A, e)),
		[t.memoizedState, e]
	);
}
function er(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = A.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (A.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Ya() {
	return Pe().memoizedState;
}
function Mr(e, t, n, r) {
	var l = Ue();
	(A.flags |= e),
		(l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function Sl(e, t, n, r) {
	var l = Pe();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (G !== null) {
		var i = G.memoizedState;
		if (((o = i.destroy), r !== null && Mi(r, i.deps))) {
			l.memoizedState = er(t, n, o, r);
			return;
		}
	}
	(A.flags |= e), (l.memoizedState = er(1 | t, n, o, r));
}
function Hu(e, t) {
	return Mr(8390656, 8, e, t);
}
function $i(e, t) {
	return Sl(2048, 8, e, t);
}
function Xa(e, t) {
	return Sl(4, 2, e, t);
}
function Ga(e, t) {
	return Sl(4, 4, e, t);
}
function Ja(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Za(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Sl(4, 4, Ja.bind(null, t, e), n)
	);
}
function Bi() {}
function qa(e, t) {
	var n = Pe();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Mi(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function ba(e, t) {
	var n = Pe();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Mi(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function ec(e, t, n) {
	return Rt & 21
		? (Fe(n, t) || ((n = oa()), (A.lanes |= n), (zt |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Gd(e, t) {
	var n = F;
	(F = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = bl.transition;
	bl.transition = {};
	try {
		e(!1), t();
	} finally {
		(F = n), (bl.transition = r);
	}
}
function tc() {
	return Pe().memoizedState;
}
function Jd(e, t, n) {
	var r = dt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		nc(e))
	)
		rc(t, n);
	else if (((n = Ua(e, t, n, r)), n !== null)) {
		var l = se();
		Ie(n, e, r, l), lc(n, t, r);
	}
}
function Zd(e, t, n) {
	var r = dt(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (nc(e)) rc(t, l);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var i = t.lastRenderedState,
					u = o(i, n);
				if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, i))) {
					var s = t.interleaved;
					s === null
						? ((l.next = l), Ri(t))
						: ((l.next = s.next), (s.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Ua(e, t, l, r)),
			n !== null && ((l = se()), Ie(n, e, r, l), lc(n, t, r));
	}
}
function nc(e) {
	var t = e.alternate;
	return e === A || (t !== null && t === A);
}
function rc(e, t) {
	Fn = ll = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function lc(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), gi(e, n);
	}
}
var ol = {
		readContext: Ne,
		useCallback: re,
		useContext: re,
		useEffect: re,
		useImperativeHandle: re,
		useInsertionEffect: re,
		useLayoutEffect: re,
		useMemo: re,
		useReducer: re,
		useRef: re,
		useState: re,
		useDebugValue: re,
		useDeferredValue: re,
		useTransition: re,
		useMutableSource: re,
		useSyncExternalStore: re,
		useId: re,
		unstable_isNewReconciler: !1,
	},
	qd = {
		readContext: Ne,
		useCallback: function (e, t) {
			return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Ne,
		useEffect: Hu,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Mr(4194308, 4, Ja.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Mr(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Mr(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Ue();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Ue();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Jd.bind(null, A, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Ue();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Wu,
		useDebugValue: Bi,
		useDeferredValue: function (e) {
			return (Ue().memoizedState = e);
		},
		useTransition: function () {
			var e = Wu(!1),
				t = e[0];
			return (e = Gd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = A,
				l = Ue();
			if ($) {
				if (n === void 0) throw Error(k(407));
				n = n();
			} else {
				if (((n = t()), b === null)) throw Error(k(349));
				Rt & 30 || Va(r, t, n);
			}
			l.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(l.queue = o),
				Hu(Ha.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				er(9, Wa.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Ue(),
				t = b.identifierPrefix;
			if ($) {
				var n = Qe,
					r = He;
				(n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = qn++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = Xd++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	bd = {
		readContext: Ne,
		useCallback: qa,
		useContext: Ne,
		useEffect: $i,
		useImperativeHandle: Za,
		useInsertionEffect: Xa,
		useLayoutEffect: Ga,
		useMemo: ba,
		useReducer: eo,
		useRef: Ya,
		useState: function () {
			return eo(bn);
		},
		useDebugValue: Bi,
		useDeferredValue: function (e) {
			var t = Pe();
			return ec(t, G.memoizedState, e);
		},
		useTransition: function () {
			var e = eo(bn)[0],
				t = Pe().memoizedState;
			return [e, t];
		},
		useMutableSource: Ba,
		useSyncExternalStore: Aa,
		useId: tc,
		unstable_isNewReconciler: !1,
	},
	ep = {
		readContext: Ne,
		useCallback: qa,
		useContext: Ne,
		useEffect: $i,
		useImperativeHandle: Za,
		useInsertionEffect: Xa,
		useLayoutEffect: Ga,
		useMemo: ba,
		useReducer: to,
		useRef: Ya,
		useState: function () {
			return to(bn);
		},
		useDebugValue: Bi,
		useDeferredValue: function (e) {
			var t = Pe();
			return G === null ? (t.memoizedState = e) : ec(t, G.memoizedState, e);
		},
		useTransition: function () {
			var e = to(bn)[0],
				t = Pe().memoizedState;
			return [e, t];
		},
		useMutableSource: Ba,
		useSyncExternalStore: Aa,
		useId: tc,
		unstable_isNewReconciler: !1,
	};
function Le(e, t) {
	if (e && e.defaultProps) {
		(t = V({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function $o(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : V({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Ft(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = se(),
			l = dt(e),
			o = Ke(r, l);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = ct(e, o, l)),
			t !== null && (Ie(t, e, l, r), Ir(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = se(),
			l = dt(e),
			o = Ke(r, l);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = ct(e, o, l)),
			t !== null && (Ie(t, e, l, r), Ir(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = se(),
			r = dt(e),
			l = Ke(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = ct(e, l, r)),
			t !== null && (Ie(t, e, r, n), Ir(t, e, r));
	},
};
function Qu(e, t, n, r, l, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, o, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !Kn(n, r) || !Kn(l, o)
			: !0
	);
}
function oc(e, t, n) {
	var r = !1,
		l = vt,
		o = t.contextType;
	return (
		typeof o == 'object' && o !== null
			? (o = Ne(o))
			: ((l = he(t) ? Tt : ie.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? on(e, l) : vt)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = kl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Ku(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Bo(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = {}), zi(e);
	var o = t.contextType;
	typeof o == 'object' && o !== null
		? (l.context = Ne(o))
		: ((o = he(t) ? Tt : ie.current), (l.context = on(e, o))),
		(l.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == 'function' && ($o(e, t, o, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && kl.enqueueReplaceState(l, l.state, null),
			nl(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function cn(e, t) {
	try {
		var n = '',
			r = t;
		do (n += jf(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (o) {
		l =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function no(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var tp = typeof WeakMap == 'function' ? WeakMap : Map;
function ic(e, t, n) {
	(n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ul || ((ul = !0), (Zo = r)), Ao(e, t);
		}),
		n
	);
}
function uc(e, t, n) {
	(n = Ke(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				Ao(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				Ao(e, t),
					typeof r != 'function' &&
						(ft === null ? (ft = new Set([this])) : ft.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : '',
				});
			}),
		n
	);
}
function Yu(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new tp();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = mp.bind(null, e, t, n)), t.then(e, e));
}
function Xu(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Gu(e, t, n, r, l) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = l), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var np = Ze.ReactCurrentOwner,
	de = !1;
function ue(e, t, n, r) {
	t.child = e === null ? Ma(t, null, n, r) : sn(t, e.child, n, r);
}
function Ju(e, t, n, r, l) {
	n = n.render;
	var o = t.ref;
	return (
		nn(t, l),
		(r = Ui(e, t, n, r, o, l)),
		(n = Di()),
		e !== null && !de
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Je(e, t, l))
			: ($ && n && Ci(t), (t.flags |= 1), ue(e, t, r, l), t.child)
	);
}
function Zu(e, t, n, r, l) {
	if (e === null) {
		var o = n.type;
		return typeof o == 'function' &&
			!Xi(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), sc(e, t, o, r, l))
			: ((e = Br(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & l))) {
		var i = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Kn), n(i, r) && e.ref === t.ref)
		)
			return Je(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = pt(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function sc(e, t, n, r, l) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Kn(o, r) && e.ref === t.ref)
			if (((de = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
				e.flags & 131072 && (de = !0);
			else return (t.lanes = e.lanes), Je(e, t, l);
	}
	return Vo(e, t, n, r, l);
}
function ac(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				M(Zt, ve),
				(ve |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					M(Zt, ve),
					(ve |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				M(Zt, ve),
				(ve |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			M(Zt, ve),
			(ve |= r);
	return ue(e, t, l, n), t.child;
}
function cc(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Vo(e, t, n, r, l) {
	var o = he(n) ? Tt : ie.current;
	return (
		(o = on(t, o)),
		nn(t, l),
		(n = Ui(e, t, n, r, o, l)),
		(r = Di()),
		e !== null && !de
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Je(e, t, l))
			: ($ && r && Ci(t), (t.flags |= 1), ue(e, t, n, l), t.child)
	);
}
function qu(e, t, n, r, l) {
	if (he(n)) {
		var o = !0;
		Zr(t);
	} else o = !1;
	if ((nn(t, l), t.stateNode === null))
		Ur(e, t), oc(t, n, r), Bo(t, n, r, l), (r = !0);
	else if (e === null) {
		var i = t.stateNode,
			u = t.memoizedProps;
		i.props = u;
		var s = i.context,
			a = n.contextType;
		typeof a == 'object' && a !== null
			? (a = Ne(a))
			: ((a = he(n) ? Tt : ie.current), (a = on(t, a)));
		var h = n.getDerivedStateFromProps,
			p =
				typeof h == 'function' ||
				typeof i.getSnapshotBeforeUpdate == 'function';
		p ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((u !== r || s !== a) && Ku(t, i, r, a)),
			(et = !1);
		var m = t.memoizedState;
		(i.state = m),
			nl(t, r, i, l),
			(s = t.memoizedState),
			u !== r || m !== s || pe.current || et
				? (typeof h == 'function' && ($o(t, n, h, r), (s = t.memoizedState)),
				  (u = et || Qu(t, n, u, r, m, s, a))
						? (p ||
								(typeof i.UNSAFE_componentWillMount != 'function' &&
									typeof i.componentWillMount != 'function') ||
								(typeof i.componentWillMount == 'function' &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == 'function' &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (i.props = r),
				  (i.state = s),
				  (i.context = a),
				  (r = u))
				: (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(i = t.stateNode),
			Da(e, t),
			(u = t.memoizedProps),
			(a = t.type === t.elementType ? u : Le(t.type, u)),
			(i.props = a),
			(p = t.pendingProps),
			(m = i.context),
			(s = n.contextType),
			typeof s == 'object' && s !== null
				? (s = Ne(s))
				: ((s = he(n) ? Tt : ie.current), (s = on(t, s)));
		var y = n.getDerivedStateFromProps;
		(h =
			typeof y == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function') ||
			(typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof i.componentWillReceiveProps != 'function') ||
			((u !== p || m !== s) && Ku(t, i, r, s)),
			(et = !1),
			(m = t.memoizedState),
			(i.state = m),
			nl(t, r, i, l);
		var w = t.memoizedState;
		u !== p || m !== w || pe.current || et
			? (typeof y == 'function' && ($o(t, n, y, r), (w = t.memoizedState)),
			  (a = et || Qu(t, n, a, r, m, w, s) || !1)
					? (h ||
							(typeof i.UNSAFE_componentWillUpdate != 'function' &&
								typeof i.componentWillUpdate != 'function') ||
							(typeof i.componentWillUpdate == 'function' &&
								i.componentWillUpdate(r, w, s),
							typeof i.UNSAFE_componentWillUpdate == 'function' &&
								i.UNSAFE_componentWillUpdate(r, w, s)),
					  typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != 'function' ||
							(u === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != 'function' ||
							(u === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = w)),
			  (i.props = r),
			  (i.state = w),
			  (i.context = s),
			  (r = a))
			: (typeof i.componentDidUpdate != 'function' ||
					(u === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != 'function' ||
					(u === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Wo(e, t, n, r, o, l);
}
function Wo(e, t, n, r, l, o) {
	cc(e, t);
	var i = (t.flags & 128) !== 0;
	if (!r && !i) return l && Uu(t, n, !1), Je(e, t, o);
	(r = t.stateNode), (np.current = t);
	var u =
		i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = sn(t, e.child, null, o)), (t.child = sn(t, null, u, o)))
			: ue(e, t, u, o),
		(t.memoizedState = r.state),
		l && Uu(t, n, !0),
		t.child
	);
}
function fc(e) {
	var t = e.stateNode;
	t.pendingContext
		? Mu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Mu(e, t.context, !1),
		Oi(e, t.containerInfo);
}
function bu(e, t, n, r, l) {
	return un(), Pi(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function dc(e, t, n) {
	var r = t.pendingProps,
		l = B.current,
		o = !1,
		i = (t.flags & 128) !== 0,
		u;
	if (
		((u = i) ||
			(u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		u
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		M(B, l & 1),
		e === null)
	)
		return (
			Uo(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((i = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (i = { mode: 'hidden', children: i }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = i))
								: (o = El(i, r, 0, null)),
						  (e = jt(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Qo(n)),
						  (t.memoizedState = Ho),
						  e)
						: Ai(t, i))
		);
	if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
		return rp(e, t, i, r, u, l, n);
	if (o) {
		(o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
		var s = { mode: 'hidden', children: r.children };
		return (
			!(i & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			u !== null ? (o = pt(u, o)) : ((o = jt(o, i, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? Qo(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions,
					  }),
			(o.memoizedState = i),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Ho),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = pt(o, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Ai(e, t) {
	return (
		(t = El({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Cr(e, t, n, r) {
	return (
		r !== null && Pi(r),
		sn(t, e.child, null, n),
		(e = Ai(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function rp(e, t, n, r, l, o, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = no(Error(k(422)))), Cr(e, t, i, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (l = t.mode),
			  (r = El({ mode: 'visible', children: r.children }, l, 0, null)),
			  (o = jt(o, l, i, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && sn(t, e.child, null, i),
			  (t.child.memoizedState = Qo(i)),
			  (t.memoizedState = Ho),
			  o);
	if (!(t.mode & 1)) return Cr(e, t, i, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
		return (r = u), (o = Error(k(419))), (r = no(o, r, void 0)), Cr(e, t, i, r);
	}
	if (((u = (i & e.childLanes) !== 0), de || u)) {
		if (((r = b), r !== null)) {
			switch (i & -i) {
				case 4:
					l = 2;
					break;
				case 16:
					l = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					l = 32;
					break;
				case 536870912:
					l = 268435456;
					break;
				default:
					l = 0;
			}
			(l = l & (r.suspendedLanes | i) ? 0 : l),
				l !== 0 &&
					l !== o.retryLane &&
					((o.retryLane = l), Ge(e, l), Ie(r, e, l, -1));
		}
		return Yi(), (r = no(Error(k(421)))), Cr(e, t, i, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = vp.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (ge = at(l.nextSibling)),
		  (ye = t),
		  ($ = !0),
		  (ze = null),
		  e !== null &&
				((xe[_e++] = He),
				(xe[_e++] = Qe),
				(xe[_e++] = Lt),
				(He = e.id),
				(Qe = e.overflow),
				(Lt = t)),
		  (t = Ai(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function es(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Do(e.return, t, n);
}
function ro(e, t, n, r, l) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = l));
}
function pc(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		o = r.tail;
	if ((ue(e, t, r.children, n), (r = B.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && es(e, n, t);
				else if (e.tag === 19) es(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((M(B, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (l) {
			case 'forwards':
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate),
						e !== null && rl(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					ro(t, !1, l, n, o);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && rl(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				ro(t, !0, n, null, o);
				break;
			case 'together':
				ro(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ur(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(zt |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(k(153));
	if (t.child !== null) {
		for (
			e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function lp(e, t, n) {
	switch (t.tag) {
		case 3:
			fc(t), un();
			break;
		case 5:
			$a(t);
			break;
		case 1:
			he(t.type) && Zr(t);
			break;
		case 4:
			Oi(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			M(el, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (M(B, B.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? dc(e, t, n)
					: (M(B, B.current & 1),
					  (e = Je(e, t, n)),
					  e !== null ? e.sibling : null);
			M(B, B.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return pc(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				M(B, B.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), ac(e, t, n);
	}
	return Je(e, t, n);
}
var hc, Ko, mc, vc;
hc = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Ko = function () {};
mc = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), Nt(Be.current);
		var o = null;
		switch (n) {
			case 'input':
				(l = ho(e, l)), (r = ho(e, r)), (o = []);
				break;
			case 'select':
				(l = V({}, l, { value: void 0 })),
					(r = V({}, r, { value: void 0 })),
					(o = []);
				break;
			case 'textarea':
				(l = go(e, l)), (r = go(e, r)), (o = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Gr);
		}
		wo(n, r);
		var i;
		n = null;
		for (a in l)
			if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
				if (a === 'style') {
					var u = l[a];
					for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
				} else
					a !== 'dangerouslySetInnerHTML' &&
						a !== 'children' &&
						a !== 'suppressContentEditableWarning' &&
						a !== 'suppressHydrationWarning' &&
						a !== 'autoFocus' &&
						($n.hasOwnProperty(a)
							? o || (o = [])
							: (o = o || []).push(a, null));
		for (a in r) {
			var s = r[a];
			if (
				((u = l != null ? l[a] : void 0),
				r.hasOwnProperty(a) && s !== u && (s != null || u != null))
			)
				if (a === 'style')
					if (u) {
						for (i in u)
							!u.hasOwnProperty(i) ||
								(s && s.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ''));
						for (i in s)
							s.hasOwnProperty(i) &&
								u[i] !== s[i] &&
								(n || (n = {}), (n[i] = s[i]));
					} else n || (o || (o = []), o.push(a, n)), (n = s);
				else
					a === 'dangerouslySetInnerHTML'
						? ((s = s ? s.__html : void 0),
						  (u = u ? u.__html : void 0),
						  s != null && u !== s && (o = o || []).push(a, s))
						: a === 'children'
						? (typeof s != 'string' && typeof s != 'number') ||
						  (o = o || []).push(a, '' + s)
						: a !== 'suppressContentEditableWarning' &&
						  a !== 'suppressHydrationWarning' &&
						  ($n.hasOwnProperty(a)
								? (s != null && a === 'onScroll' && U('scroll', e),
								  o || u === s || (o = []))
								: (o = o || []).push(a, s));
		}
		n && (o = o || []).push('style', n);
		var a = o;
		(t.updateQueue = a) && (t.flags |= 4);
	}
};
vc = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function _n(e, t) {
	if (!$)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function le(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags & 14680064),
				(r |= l.flags & 14680064),
				(l.return = e),
				(l = l.sibling);
	else
		for (l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags),
				(r |= l.flags),
				(l.return = e),
				(l = l.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function op(e, t, n) {
	var r = t.pendingProps;
	switch ((Ni(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return le(t), null;
		case 1:
			return he(t.type) && Jr(), le(t), null;
		case 3:
			return (
				(r = t.stateNode),
				an(),
				D(pe),
				D(ie),
				Fi(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(_r(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), ze !== null && (ei(ze), (ze = null)))),
				Ko(e, t),
				le(t),
				null
			);
		case 5:
			Ii(t);
			var l = Nt(Zn.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				mc(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(k(166));
					return le(t), null;
				}
				if (((e = Nt(Be.current)), _r(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[De] = t), (r[Gn] = o), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							U('cancel', r), U('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							U('load', r);
							break;
						case 'video':
						case 'audio':
							for (l = 0; l < jn.length; l++) U(jn[l], r);
							break;
						case 'source':
							U('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							U('error', r), U('load', r);
							break;
						case 'details':
							U('toggle', r);
							break;
						case 'input':
							au(r, o), U('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								U('invalid', r);
							break;
						case 'textarea':
							fu(r, o), U('invalid', r);
					}
					wo(n, o), (l = null);
					for (var i in o)
						if (o.hasOwnProperty(i)) {
							var u = o[i];
							i === 'children'
								? typeof u == 'string'
									? r.textContent !== u &&
									  (o.suppressHydrationWarning !== !0 &&
											xr(r.textContent, u, e),
									  (l = ['children', u]))
									: typeof u == 'number' &&
									  r.textContent !== '' + u &&
									  (o.suppressHydrationWarning !== !0 &&
											xr(r.textContent, u, e),
									  (l = ['children', '' + u]))
								: $n.hasOwnProperty(i) &&
								  u != null &&
								  i === 'onScroll' &&
								  U('scroll', r);
						}
					switch (n) {
						case 'input':
							hr(r), cu(r, o, !0);
							break;
						case 'textarea':
							hr(r), du(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof o.onClick == 'function' && (r.onclick = Gr);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(i = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Hs(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = i.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = i.createElement(n, { is: r.is }))
								: ((e = i.createElement(n)),
								  n === 'select' &&
										((i = e),
										r.multiple
											? (i.multiple = !0)
											: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[De] = t),
						(e[Gn] = r),
						hc(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = So(n, r)), n)) {
							case 'dialog':
								U('cancel', e), U('close', e), (l = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								U('load', e), (l = r);
								break;
							case 'video':
							case 'audio':
								for (l = 0; l < jn.length; l++) U(jn[l], e);
								l = r;
								break;
							case 'source':
								U('error', e), (l = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								U('error', e), U('load', e), (l = r);
								break;
							case 'details':
								U('toggle', e), (l = r);
								break;
							case 'input':
								au(e, r), (l = ho(e, r)), U('invalid', e);
								break;
							case 'option':
								l = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = V({}, r, { value: void 0 })),
									U('invalid', e);
								break;
							case 'textarea':
								fu(e, r), (l = go(e, r)), U('invalid', e);
								break;
							default:
								l = r;
						}
						wo(n, l), (u = l);
						for (o in u)
							if (u.hasOwnProperty(o)) {
								var s = u[o];
								o === 'style'
									? Ys(e, s)
									: o === 'dangerouslySetInnerHTML'
									? ((s = s ? s.__html : void 0), s != null && Qs(e, s))
									: o === 'children'
									? typeof s == 'string'
										? (n !== 'textarea' || s !== '') && Bn(e, s)
										: typeof s == 'number' && Bn(e, '' + s)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  ($n.hasOwnProperty(o)
											? s != null && o === 'onScroll' && U('scroll', e)
											: s != null && fi(e, o, s, i));
							}
						switch (n) {
							case 'input':
								hr(e), cu(e, r, !1);
								break;
							case 'textarea':
								hr(e), du(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + mt(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? qt(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  qt(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = Gr);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return le(t), null;
		case 6:
			if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
				if (((n = Nt(Zn.current)), Nt(Be.current), _r(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[De] = t),
						(o = r.nodeValue !== n) && ((e = ye), e !== null))
					)
						switch (e.tag) {
							case 3:
								xr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									xr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[De] = t),
						(t.stateNode = r);
			}
			return le(t), null;
		case 13:
			if (
				(D(B),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
					Ia(), un(), (t.flags |= 98560), (o = !1);
				else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(k(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(k(317));
						o[De] = t;
					} else
						un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					le(t), (o = !1);
				} else ze !== null && (ei(ze), (ze = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || B.current & 1 ? J === 0 && (J = 3) : Yi())),
				  t.updateQueue !== null && (t.flags |= 4),
				  le(t),
				  null);
		case 4:
			return (
				an(), Ko(e, t), e === null && Yn(t.stateNode.containerInfo), le(t), null
			);
		case 10:
			return Li(t.type._context), le(t), null;
		case 17:
			return he(t.type) && Jr(), le(t), null;
		case 19:
			if ((D(B), (o = t.memoizedState), o === null)) return le(t), null;
			if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
				if (r) _n(o, !1);
				else {
					if (J !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = rl(e)), i !== null)) {
								for (
									t.flags |= 128,
										_n(o, !1),
										r = i.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = i.childLanes),
											  (o.lanes = i.lanes),
											  (o.child = i.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = i.memoizedProps),
											  (o.memoizedState = i.memoizedState),
											  (o.updateQueue = i.updateQueue),
											  (o.type = i.type),
											  (e = i.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return M(B, (B.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						K() > fn &&
						((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = rl(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							_n(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !i.alternate && !$)
						)
							return le(t), null;
					} else
						2 * K() - o.renderingStartTime > fn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = o.last),
					  n !== null ? (n.sibling = i) : (t.child = i),
					  (o.last = i));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = K()),
				  (t.sibling = null),
				  (n = B.current),
				  M(B, r ? (n & 1) | 2 : n & 1),
				  t)
				: (le(t), null);
		case 22:
		case 23:
			return (
				Ki(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: le(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(k(156, t.tag));
}
function ip(e, t) {
	switch ((Ni(t), t.tag)) {
		case 1:
			return (
				he(t.type) && Jr(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				an(),
				D(pe),
				D(ie),
				Fi(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Ii(t), null;
		case 13:
			if ((D(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(k(340));
				un();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return D(B), null;
		case 4:
			return an(), null;
		case 10:
			return Li(t.type._context), null;
		case 22:
		case 23:
			return Ki(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Nr = !1,
	oe = !1,
	up = typeof WeakSet == 'function' ? WeakSet : Set,
	C = null;
function Jt(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				W(e, t, r);
			}
		else n.current = null;
}
function Yo(e, t, n) {
	try {
		n();
	} catch (r) {
		W(e, t, r);
	}
}
var ts = !1;
function sp(e, t) {
	if (((Lo = Kr), (e = ka()), Ei(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var i = 0,
						u = -1,
						s = -1,
						a = 0,
						h = 0,
						p = e,
						m = null;
					t: for (;;) {
						for (
							var y;
							p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
								p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
								p.nodeType === 3 && (i += p.nodeValue.length),
								(y = p.firstChild) !== null;

						)
							(m = p), (p = y);
						for (;;) {
							if (p === e) break t;
							if (
								(m === n && ++a === l && (u = i),
								m === o && ++h === r && (s = i),
								(y = p.nextSibling) !== null)
							)
								break;
							(p = m), (m = p.parentNode);
						}
						p = y;
					}
					n = u === -1 || s === -1 ? null : { start: u, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Ro = { focusedElem: e, selectionRange: n }, Kr = !1, C = t; C !== null; )
		if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (C = e);
		else
			for (; C !== null; ) {
				t = C;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var S = w.memoizedProps,
										_ = w.memoizedState,
										f = t.stateNode,
										c = f.getSnapshotBeforeUpdate(
											t.elementType === t.type ? S : Le(t.type, S),
											_
										);
									f.__reactInternalSnapshotBeforeUpdate = c;
								}
								break;
							case 3:
								var d = t.stateNode.containerInfo;
								d.nodeType === 1
									? (d.textContent = '')
									: d.nodeType === 9 &&
									  d.documentElement &&
									  d.removeChild(d.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(k(163));
						}
				} catch (g) {
					W(t, t.return, g);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (C = e);
					break;
				}
				C = t.return;
			}
	return (w = ts), (ts = !1), w;
}
function Mn(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var o = l.destroy;
				(l.destroy = void 0), o !== void 0 && Yo(t, n, o);
			}
			l = l.next;
		} while (l !== r);
	}
}
function xl(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Xo(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function gc(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), gc(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[De], delete t[Gn], delete t[Io], delete t[Hd], delete t[Qd])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function yc(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ns(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || yc(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Go(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Gr));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), (e = e.sibling);
}
function Jo(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), (e = e.sibling);
}
var ee = null,
	Re = !1;
function qe(e, t, n) {
	for (n = n.child; n !== null; ) wc(e, t, n), (n = n.sibling);
}
function wc(e, t, n) {
	if ($e && typeof $e.onCommitFiberUnmount == 'function')
		try {
			$e.onCommitFiberUnmount(hl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			oe || Jt(n, t);
		case 6:
			var r = ee,
				l = Re;
			(ee = null),
				qe(e, t, n),
				(ee = r),
				(Re = l),
				ee !== null &&
					(Re
						? ((e = ee),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ee.removeChild(n.stateNode));
			break;
		case 18:
			ee !== null &&
				(Re
					? ((e = ee),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Jl(e.parentNode, n)
							: e.nodeType === 1 && Jl(e, n),
					  Hn(e))
					: Jl(ee, n.stateNode));
			break;
		case 4:
			(r = ee),
				(l = Re),
				(ee = n.stateNode.containerInfo),
				(Re = !0),
				qe(e, t, n),
				(ee = r),
				(Re = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!oe &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var o = l,
						i = o.destroy;
					(o = o.tag),
						i !== void 0 && (o & 2 || o & 4) && Yo(n, t, i),
						(l = l.next);
				} while (l !== r);
			}
			qe(e, t, n);
			break;
		case 1:
			if (
				!oe &&
				(Jt(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (u) {
					W(n, t, u);
				}
			qe(e, t, n);
			break;
		case 21:
			qe(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((oe = (r = oe) || n.memoizedState !== null), qe(e, t, n), (oe = r))
				: qe(e, t, n);
			break;
		default:
			qe(e, t, n);
	}
}
function rs(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new up()),
			t.forEach(function (r) {
				var l = gp.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function Te(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var o = e,
					i = t,
					u = i;
				e: for (; u !== null; ) {
					switch (u.tag) {
						case 5:
							(ee = u.stateNode), (Re = !1);
							break e;
						case 3:
							(ee = u.stateNode.containerInfo), (Re = !0);
							break e;
						case 4:
							(ee = u.stateNode.containerInfo), (Re = !0);
							break e;
					}
					u = u.return;
				}
				if (ee === null) throw Error(k(160));
				wc(o, i, l), (ee = null), (Re = !1);
				var s = l.alternate;
				s !== null && (s.return = null), (l.return = null);
			} catch (a) {
				W(l, t, a);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Sc(t, e), (t = t.sibling);
}
function Sc(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Te(t, e), Me(e), r & 4)) {
				try {
					Mn(3, e, e.return), xl(3, e);
				} catch (S) {
					W(e, e.return, S);
				}
				try {
					Mn(5, e, e.return);
				} catch (S) {
					W(e, e.return, S);
				}
			}
			break;
		case 1:
			Te(t, e), Me(e), r & 512 && n !== null && Jt(n, n.return);
			break;
		case 5:
			if (
				(Te(t, e),
				Me(e),
				r & 512 && n !== null && Jt(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					Bn(l, '');
				} catch (S) {
					W(e, e.return, S);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var o = e.memoizedProps,
					i = n !== null ? n.memoizedProps : o,
					u = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						u === 'input' && o.type === 'radio' && o.name != null && Vs(l, o),
							So(u, i);
						var a = So(u, o);
						for (i = 0; i < s.length; i += 2) {
							var h = s[i],
								p = s[i + 1];
							h === 'style'
								? Ys(l, p)
								: h === 'dangerouslySetInnerHTML'
								? Qs(l, p)
								: h === 'children'
								? Bn(l, p)
								: fi(l, h, p, a);
						}
						switch (u) {
							case 'input':
								mo(l, o);
								break;
							case 'textarea':
								Ws(l, o);
								break;
							case 'select':
								var m = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!o.multiple;
								var y = o.value;
								y != null
									? qt(l, !!o.multiple, y, !1)
									: m !== !!o.multiple &&
									  (o.defaultValue != null
											? qt(l, !!o.multiple, o.defaultValue, !0)
											: qt(l, !!o.multiple, o.multiple ? [] : '', !1));
						}
						l[Gn] = o;
					} catch (S) {
						W(e, e.return, S);
					}
			}
			break;
		case 6:
			if ((Te(t, e), Me(e), r & 4)) {
				if (e.stateNode === null) throw Error(k(162));
				(l = e.stateNode), (o = e.memoizedProps);
				try {
					l.nodeValue = o;
				} catch (S) {
					W(e, e.return, S);
				}
			}
			break;
		case 3:
			if (
				(Te(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Hn(t.containerInfo);
				} catch (S) {
					W(e, e.return, S);
				}
			break;
		case 4:
			Te(t, e), Me(e);
			break;
		case 13:
			Te(t, e),
				Me(e),
				(l = e.child),
				l.flags & 8192 &&
					((o = l.memoizedState !== null),
					(l.stateNode.isHidden = o),
					!o ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(Hi = K())),
				r & 4 && rs(e);
			break;
		case 22:
			if (
				((h = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((oe = (a = oe) || h), Te(t, e), (oe = a)) : Te(t, e),
				Me(e),
				r & 8192)
			) {
				if (
					((a = e.memoizedState !== null),
					(e.stateNode.isHidden = a) && !h && e.mode & 1)
				)
					for (C = e, h = e.child; h !== null; ) {
						for (p = C = h; C !== null; ) {
							switch (((m = C), (y = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Mn(4, m, m.return);
									break;
								case 1:
									Jt(m, m.return);
									var w = m.stateNode;
									if (typeof w.componentWillUnmount == 'function') {
										(r = m), (n = m.return);
										try {
											(t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount();
										} catch (S) {
											W(r, n, S);
										}
									}
									break;
								case 5:
									Jt(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										os(p);
										continue;
									}
							}
							y !== null ? ((y.return = m), (C = y)) : os(p);
						}
						h = h.sibling;
					}
				e: for (h = null, p = e; ; ) {
					if (p.tag === 5) {
						if (h === null) {
							h = p;
							try {
								(l = p.stateNode),
									a
										? ((o = l.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((u = p.stateNode),
										  (s = p.memoizedProps.style),
										  (i =
												s != null && s.hasOwnProperty('display')
													? s.display
													: null),
										  (u.style.display = Ks('display', i)));
							} catch (S) {
								W(e, e.return, S);
							}
						}
					} else if (p.tag === 6) {
						if (h === null)
							try {
								p.stateNode.nodeValue = a ? '' : p.memoizedProps;
							} catch (S) {
								W(e, e.return, S);
							}
					} else if (
						((p.tag !== 22 && p.tag !== 23) ||
							p.memoizedState === null ||
							p === e) &&
						p.child !== null
					) {
						(p.child.return = p), (p = p.child);
						continue;
					}
					if (p === e) break e;
					for (; p.sibling === null; ) {
						if (p.return === null || p.return === e) break e;
						h === p && (h = null), (p = p.return);
					}
					h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
				}
			}
			break;
		case 19:
			Te(t, e), Me(e), r & 4 && rs(e);
			break;
		case 21:
			break;
		default:
			Te(t, e), Me(e);
	}
}
function Me(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (yc(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(k(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (Bn(l, ''), (r.flags &= -33));
					var o = ns(e);
					Jo(e, o, l);
					break;
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						u = ns(e);
					Go(e, u, i);
					break;
				default:
					throw Error(k(161));
			}
		} catch (s) {
			W(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function ap(e, t, n) {
	(C = e), kc(e);
}
function kc(e, t, n) {
	for (var r = (e.mode & 1) !== 0; C !== null; ) {
		var l = C,
			o = l.child;
		if (l.tag === 22 && r) {
			var i = l.memoizedState !== null || Nr;
			if (!i) {
				var u = l.alternate,
					s = (u !== null && u.memoizedState !== null) || oe;
				u = Nr;
				var a = oe;
				if (((Nr = i), (oe = s) && !a))
					for (C = l; C !== null; )
						(i = C),
							(s = i.child),
							i.tag === 22 && i.memoizedState !== null
								? is(l)
								: s !== null
								? ((s.return = i), (C = s))
								: is(l);
				for (; o !== null; ) (C = o), kc(o), (o = o.sibling);
				(C = l), (Nr = u), (oe = a);
			}
			ls(e);
		} else
			l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (C = o)) : ls(e);
	}
}
function ls(e) {
	for (; C !== null; ) {
		var t = C;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							oe || xl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !oe)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: Le(t.type, n.memoizedProps);
									r.componentDidUpdate(
										l,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && Vu(t, o, r);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Vu(t, i, n);
							}
							break;
						case 5:
							var u = t.stateNode;
							if (n === null && t.flags & 4) {
								n = u;
								var s = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus();
										break;
									case 'img':
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var a = t.alternate;
								if (a !== null) {
									var h = a.memoizedState;
									if (h !== null) {
										var p = h.dehydrated;
										p !== null && Hn(p);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(k(163));
					}
				oe || (t.flags & 512 && Xo(t));
			} catch (m) {
				W(t, t.return, m);
			}
		}
		if (t === e) {
			C = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (C = n);
			break;
		}
		C = t.return;
	}
}
function os(e) {
	for (; C !== null; ) {
		var t = C;
		if (t === e) {
			C = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (C = n);
			break;
		}
		C = t.return;
	}
}
function is(e) {
	for (; C !== null; ) {
		var t = C;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						xl(4, t);
					} catch (s) {
						W(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							W(t, l, s);
						}
					}
					var o = t.return;
					try {
						Xo(t);
					} catch (s) {
						W(t, o, s);
					}
					break;
				case 5:
					var i = t.return;
					try {
						Xo(t);
					} catch (s) {
						W(t, i, s);
					}
			}
		} catch (s) {
			W(t, t.return, s);
		}
		if (t === e) {
			C = null;
			break;
		}
		var u = t.sibling;
		if (u !== null) {
			(u.return = t.return), (C = u);
			break;
		}
		C = t.return;
	}
}
var cp = Math.ceil,
	il = Ze.ReactCurrentDispatcher,
	Vi = Ze.ReactCurrentOwner,
	Ce = Ze.ReactCurrentBatchConfig,
	I = 0,
	b = null,
	Y = null,
	te = 0,
	ve = 0,
	Zt = yt(0),
	J = 0,
	tr = null,
	zt = 0,
	_l = 0,
	Wi = 0,
	Un = null,
	fe = null,
	Hi = 0,
	fn = 1 / 0,
	Ae = null,
	ul = !1,
	Zo = null,
	ft = null,
	Pr = !1,
	lt = null,
	sl = 0,
	Dn = 0,
	qo = null,
	Dr = -1,
	$r = 0;
function se() {
	return I & 6 ? K() : Dr !== -1 ? Dr : (Dr = K());
}
function dt(e) {
	return e.mode & 1
		? I & 2 && te !== 0
			? te & -te
			: Yd.transition !== null
			? ($r === 0 && ($r = oa()), $r)
			: ((e = F),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : da(e.type))),
			  e)
		: 1;
}
function Ie(e, t, n, r) {
	if (50 < Dn) throw ((Dn = 0), (qo = null), Error(k(185)));
	or(e, n, r),
		(!(I & 2) || e !== b) &&
			(e === b && (!(I & 2) && (_l |= n), J === 4 && nt(e, te)),
			me(e, r),
			n === 1 && I === 0 && !(t.mode & 1) && ((fn = K() + 500), wl && wt()));
}
function me(e, t) {
	var n = e.callbackNode;
	Yf(e, t);
	var r = Qr(e, e === b ? te : 0);
	if (r === 0)
		n !== null && mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && mu(n), t === 1))
			e.tag === 0 ? Kd(us.bind(null, e)) : Ra(us.bind(null, e)),
				Vd(function () {
					!(I & 6) && wt();
				}),
				(n = null);
		else {
			switch (ia(r)) {
				case 1:
					n = vi;
					break;
				case 4:
					n = ra;
					break;
				case 16:
					n = Hr;
					break;
				case 536870912:
					n = la;
					break;
				default:
					n = Hr;
			}
			n = Tc(n, xc.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function xc(e, t) {
	if (((Dr = -1), ($r = 0), I & 6)) throw Error(k(327));
	var n = e.callbackNode;
	if (rn() && e.callbackNode !== n) return null;
	var r = Qr(e, e === b ? te : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
	else {
		t = r;
		var l = I;
		I |= 2;
		var o = Ec();
		(b !== e || te !== t) && ((Ae = null), (fn = K() + 500), Pt(e, t));
		do
			try {
				pp();
				break;
			} catch (u) {
				_c(e, u);
			}
		while (!0);
		Ti(),
			(il.current = o),
			(I = l),
			Y !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = Co(e)), l !== 0 && ((r = l), (t = bo(e, l)))), t === 1)
		)
			throw ((n = tr), Pt(e, 0), nt(e, r), me(e, K()), n);
		if (t === 6) nt(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!fp(l) &&
					((t = al(e, r)),
					t === 2 && ((o = Co(e)), o !== 0 && ((r = o), (t = bo(e, o)))),
					t === 1))
			)
				throw ((n = tr), Pt(e, 0), nt(e, r), me(e, K()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(k(345));
				case 2:
					_t(e, fe, Ae);
					break;
				case 3:
					if (
						(nt(e, r), (r & 130023424) === r && ((t = Hi + 500 - K()), 10 < t))
					) {
						if (Qr(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							se(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = Oo(_t.bind(null, e, fe, Ae), t);
						break;
					}
					_t(e, fe, Ae);
					break;
				case 4:
					if ((nt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var i = 31 - Oe(r);
						(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
					}
					if (
						((r = l),
						(r = K() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * cp(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Oo(_t.bind(null, e, fe, Ae), r);
						break;
					}
					_t(e, fe, Ae);
					break;
				case 5:
					_t(e, fe, Ae);
					break;
				default:
					throw Error(k(329));
			}
		}
	}
	return me(e, K()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function bo(e, t) {
	var n = Un;
	return (
		e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
		(e = al(e, t)),
		e !== 2 && ((t = fe), (fe = n), t !== null && ei(t)),
		e
	);
}
function ei(e) {
	fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function fp(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						o = l.getSnapshot;
					l = l.value;
					try {
						if (!Fe(o(), l)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function nt(e, t) {
	for (
		t &= ~Wi,
			t &= ~_l,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Oe(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function us(e) {
	if (I & 6) throw Error(k(327));
	rn();
	var t = Qr(e, 0);
	if (!(t & 1)) return me(e, K()), null;
	var n = al(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Co(e);
		r !== 0 && ((t = r), (n = bo(e, r)));
	}
	if (n === 1) throw ((n = tr), Pt(e, 0), nt(e, t), me(e, K()), n);
	if (n === 6) throw Error(k(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		_t(e, fe, Ae),
		me(e, K()),
		null
	);
}
function Qi(e, t) {
	var n = I;
	I |= 1;
	try {
		return e(t);
	} finally {
		(I = n), I === 0 && ((fn = K() + 500), wl && wt());
	}
}
function Ot(e) {
	lt !== null && lt.tag === 0 && !(I & 6) && rn();
	var t = I;
	I |= 1;
	var n = Ce.transition,
		r = F;
	try {
		if (((Ce.transition = null), (F = 1), e)) return e();
	} finally {
		(F = r), (Ce.transition = n), (I = t), !(I & 6) && wt();
	}
}
function Ki() {
	(ve = Zt.current), D(Zt);
}
function Pt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Ad(n)), Y !== null))
		for (n = Y.return; n !== null; ) {
			var r = n;
			switch ((Ni(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Jr();
					break;
				case 3:
					an(), D(pe), D(ie), Fi();
					break;
				case 5:
					Ii(r);
					break;
				case 4:
					an();
					break;
				case 13:
					D(B);
					break;
				case 19:
					D(B);
					break;
				case 10:
					Li(r.type._context);
					break;
				case 22:
				case 23:
					Ki();
			}
			n = n.return;
		}
	if (
		((b = e),
		(Y = e = pt(e.current, null)),
		(te = ve = t),
		(J = 0),
		(tr = null),
		(Wi = _l = zt = 0),
		(fe = Un = null),
		Ct !== null)
	) {
		for (t = 0; t < Ct.length; t++)
			if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					o = n.pending;
				if (o !== null) {
					var i = o.next;
					(o.next = l), (r.next = i);
				}
				n.pending = r;
			}
		Ct = null;
	}
	return e;
}
function _c(e, t) {
	do {
		var n = Y;
		try {
			if ((Ti(), (Fr.current = ol), ll)) {
				for (var r = A.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				ll = !1;
			}
			if (
				((Rt = 0),
				(q = G = A = null),
				(Fn = !1),
				(qn = 0),
				(Vi.current = null),
				n === null || n.return === null)
			) {
				(J = 1), (tr = t), (Y = null);
				break;
			}
			e: {
				var o = e,
					i = n.return,
					u = n,
					s = t;
				if (
					((t = te),
					(u.flags |= 32768),
					s !== null && typeof s == 'object' && typeof s.then == 'function')
				) {
					var a = s,
						h = u,
						p = h.tag;
					if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
						var m = h.alternate;
						m
							? ((h.updateQueue = m.updateQueue),
							  (h.memoizedState = m.memoizedState),
							  (h.lanes = m.lanes))
							: ((h.updateQueue = null), (h.memoizedState = null));
					}
					var y = Xu(i);
					if (y !== null) {
						(y.flags &= -257),
							Gu(y, i, u, o, t),
							y.mode & 1 && Yu(o, a, t),
							(t = y),
							(s = a);
						var w = t.updateQueue;
						if (w === null) {
							var S = new Set();
							S.add(s), (t.updateQueue = S);
						} else w.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Yu(o, a, t), Yi();
							break e;
						}
						s = Error(k(426));
					}
				} else if ($ && u.mode & 1) {
					var _ = Xu(i);
					if (_ !== null) {
						!(_.flags & 65536) && (_.flags |= 256),
							Gu(_, i, u, o, t),
							Pi(cn(s, u));
						break e;
					}
				}
				(o = s = cn(s, u)),
					J !== 4 && (J = 2),
					Un === null ? (Un = [o]) : Un.push(o),
					(o = i);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var f = ic(o, s, t);
							Au(o, f);
							break e;
						case 1:
							u = s;
							var c = o.type,
								d = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof c.getDerivedStateFromError == 'function' ||
									(d !== null &&
										typeof d.componentDidCatch == 'function' &&
										(ft === null || !ft.has(d))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var g = uc(o, u, t);
								Au(o, g);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			Nc(n);
		} catch (x) {
			(t = x), Y === n && n !== null && (Y = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function Ec() {
	var e = il.current;
	return (il.current = ol), e === null ? ol : e;
}
function Yi() {
	(J === 0 || J === 3 || J === 2) && (J = 4),
		b === null || (!(zt & 268435455) && !(_l & 268435455)) || nt(b, te);
}
function al(e, t) {
	var n = I;
	I |= 2;
	var r = Ec();
	(b !== e || te !== t) && ((Ae = null), Pt(e, t));
	do
		try {
			dp();
			break;
		} catch (l) {
			_c(e, l);
		}
	while (!0);
	if ((Ti(), (I = n), (il.current = r), Y !== null)) throw Error(k(261));
	return (b = null), (te = 0), J;
}
function dp() {
	for (; Y !== null; ) Cc(Y);
}
function pp() {
	for (; Y !== null && !Df(); ) Cc(Y);
}
function Cc(e) {
	var t = jc(e.alternate, e, ve);
	(e.memoizedProps = e.pendingProps),
		t === null ? Nc(e) : (Y = t),
		(Vi.current = null);
}
function Nc(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = ip(n, t)), n !== null)) {
				(n.flags &= 32767), (Y = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(J = 6), (Y = null);
				return;
			}
		} else if (((n = op(n, t, ve)), n !== null)) {
			Y = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Y = t;
			return;
		}
		Y = t = e;
	} while (t !== null);
	J === 0 && (J = 5);
}
function _t(e, t, n) {
	var r = F,
		l = Ce.transition;
	try {
		(Ce.transition = null), (F = 1), hp(e, t, n, r);
	} finally {
		(Ce.transition = l), (F = r);
	}
	return null;
}
function hp(e, t, n, r) {
	do rn();
	while (lt !== null);
	if (I & 6) throw Error(k(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(k(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(Xf(e, o),
		e === b && ((Y = b = null), (te = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Pr ||
			((Pr = !0),
			Tc(Hr, function () {
				return rn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = Ce.transition), (Ce.transition = null);
		var i = F;
		F = 1;
		var u = I;
		(I |= 4),
			(Vi.current = null),
			sp(e, n),
			Sc(n, e),
			Id(Ro),
			(Kr = !!Lo),
			(Ro = Lo = null),
			(e.current = n),
			ap(n),
			$f(),
			(I = u),
			(F = i),
			(Ce.transition = o);
	} else e.current = n;
	if (
		(Pr && ((Pr = !1), (lt = e), (sl = l)),
		(o = e.pendingLanes),
		o === 0 && (ft = null),
		Vf(n.stateNode),
		me(e, K()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (ul) throw ((ul = !1), (e = Zo), (Zo = null), e);
	return (
		sl & 1 && e.tag !== 0 && rn(),
		(o = e.pendingLanes),
		o & 1 ? (e === qo ? Dn++ : ((Dn = 0), (qo = e))) : (Dn = 0),
		wt(),
		null
	);
}
function rn() {
	if (lt !== null) {
		var e = ia(sl),
			t = Ce.transition,
			n = F;
		try {
			if (((Ce.transition = null), (F = 16 > e ? 16 : e), lt === null))
				var r = !1;
			else {
				if (((e = lt), (lt = null), (sl = 0), I & 6)) throw Error(k(331));
				var l = I;
				for (I |= 4, C = e.current; C !== null; ) {
					var o = C,
						i = o.child;
					if (C.flags & 16) {
						var u = o.deletions;
						if (u !== null) {
							for (var s = 0; s < u.length; s++) {
								var a = u[s];
								for (C = a; C !== null; ) {
									var h = C;
									switch (h.tag) {
										case 0:
										case 11:
										case 15:
											Mn(8, h, o);
									}
									var p = h.child;
									if (p !== null) (p.return = h), (C = p);
									else
										for (; C !== null; ) {
											h = C;
											var m = h.sibling,
												y = h.return;
											if ((gc(h), h === a)) {
												C = null;
												break;
											}
											if (m !== null) {
												(m.return = y), (C = m);
												break;
											}
											C = y;
										}
								}
							}
							var w = o.alternate;
							if (w !== null) {
								var S = w.child;
								if (S !== null) {
									w.child = null;
									do {
										var _ = S.sibling;
										(S.sibling = null), (S = _);
									} while (S !== null);
								}
							}
							C = o;
						}
					}
					if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (C = i);
					else
						e: for (; C !== null; ) {
							if (((o = C), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Mn(9, o, o.return);
								}
							var f = o.sibling;
							if (f !== null) {
								(f.return = o.return), (C = f);
								break e;
							}
							C = o.return;
						}
				}
				var c = e.current;
				for (C = c; C !== null; ) {
					i = C;
					var d = i.child;
					if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (C = d);
					else
						e: for (i = c; C !== null; ) {
							if (((u = C), u.flags & 2048))
								try {
									switch (u.tag) {
										case 0:
										case 11:
										case 15:
											xl(9, u);
									}
								} catch (x) {
									W(u, u.return, x);
								}
							if (u === i) {
								C = null;
								break e;
							}
							var g = u.sibling;
							if (g !== null) {
								(g.return = u.return), (C = g);
								break e;
							}
							C = u.return;
						}
				}
				if (
					((I = l), wt(), $e && typeof $e.onPostCommitFiberRoot == 'function')
				)
					try {
						$e.onPostCommitFiberRoot(hl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(F = n), (Ce.transition = t);
		}
	}
	return !1;
}
function ss(e, t, n) {
	(t = cn(n, t)),
		(t = ic(e, t, 1)),
		(e = ct(e, t, 1)),
		(t = se()),
		e !== null && (or(e, 1, t), me(e, t));
}
function W(e, t, n) {
	if (e.tag === 3) ss(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				ss(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(ft === null || !ft.has(r)))
				) {
					(e = cn(n, e)),
						(e = uc(t, e, 1)),
						(t = ct(t, e, 1)),
						(e = se()),
						t !== null && (or(t, 1, e), me(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function mp(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = se()),
		(e.pingedLanes |= e.suspendedLanes & n),
		b === e &&
			(te & n) === n &&
			(J === 4 || (J === 3 && (te & 130023424) === te && 500 > K() - Hi)
				? Pt(e, 0)
				: (Wi |= n)),
		me(e, t);
}
function Pc(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
			: (t = 1));
	var n = se();
	(e = Ge(e, t)), e !== null && (or(e, t, n), me(e, n));
}
function vp(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Pc(e, n);
}
function gp(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState;
			l !== null && (n = l.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(k(314));
	}
	r !== null && r.delete(t), Pc(e, n);
}
var jc;
jc = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), lp(e, t, n);
			de = !!(e.flags & 131072);
		}
	else (de = !1), $ && t.flags & 1048576 && za(t, br, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Ur(e, t), (e = t.pendingProps);
			var l = on(t, ie.current);
			nn(t, n), (l = Ui(null, t, r, e, l, n));
			var o = Di();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  he(r) ? ((o = !0), Zr(t)) : (o = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  zi(t),
					  (l.updater = kl),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  Bo(t, r, e, n),
					  (t = Wo(null, t, r, !0, o, n)))
					: ((t.tag = 0), $ && o && Ci(t), ue(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Ur(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = wp(r)),
					(e = Le(r, e)),
					l)
				) {
					case 0:
						t = Vo(null, t, r, e, n);
						break e;
					case 1:
						t = qu(null, t, r, e, n);
						break e;
					case 11:
						t = Ju(null, t, r, e, n);
						break e;
					case 14:
						t = Zu(null, t, r, Le(r.type, e), n);
						break e;
				}
				throw Error(k(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Le(r, l)),
				Vo(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Le(r, l)),
				qu(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((fc(t), e === null)) throw Error(k(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(l = o.element),
					Da(e, t),
					nl(t, r, null, n);
				var i = t.memoizedState;
				if (((r = i.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(l = cn(Error(k(423)), t)), (t = bu(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = cn(Error(k(424)), t)), (t = bu(e, t, r, n, l));
						break e;
					} else
						for (
							ge = at(t.stateNode.containerInfo.firstChild),
								ye = t,
								$ = !0,
								ze = null,
								n = Ma(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((un(), r === l)) {
						t = Je(e, t, n);
						break e;
					}
					ue(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				$a(t),
				e === null && Uo(t),
				(r = t.type),
				(l = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = l.children),
				zo(r, l) ? (i = null) : o !== null && zo(r, o) && (t.flags |= 32),
				cc(e, t),
				ue(e, t, i, n),
				t.child
			);
		case 6:
			return e === null && Uo(t), null;
		case 13:
			return dc(e, t, n);
		case 4:
			return (
				Oi(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = sn(t, null, r, n)) : ue(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Le(r, l)),
				Ju(e, t, r, l, n)
			);
		case 7:
			return ue(e, t, t.pendingProps, n), t.child;
		case 8:
			return ue(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ue(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(o = t.memoizedProps),
					(i = l.value),
					M(el, r._currentValue),
					(r._currentValue = i),
					o !== null)
				)
					if (Fe(o.value, i)) {
						if (o.children === l.children && !pe.current) {
							t = Je(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var u = o.dependencies;
							if (u !== null) {
								i = o.child;
								for (var s = u.firstContext; s !== null; ) {
									if (s.context === r) {
										if (o.tag === 1) {
											(s = Ke(-1, n & -n)), (s.tag = 2);
											var a = o.updateQueue;
											if (a !== null) {
												a = a.shared;
												var h = a.pending;
												h === null
													? (s.next = s)
													: ((s.next = h.next), (h.next = s)),
													(a.pending = s);
											}
										}
										(o.lanes |= n),
											(s = o.alternate),
											s !== null && (s.lanes |= n),
											Do(o.return, n, t),
											(u.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (o.tag === 10) i = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((i = o.return), i === null)) throw Error(k(341));
								(i.lanes |= n),
									(u = i.alternate),
									u !== null && (u.lanes |= n),
									Do(i, n, t),
									(i = o.sibling);
							} else i = o.child;
							if (i !== null) i.return = o;
							else
								for (i = o; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((o = i.sibling), o !== null)) {
										(o.return = i.return), (i = o);
										break;
									}
									i = i.return;
								}
							o = i;
						}
				ue(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				nn(t, n),
				(l = Ne(l)),
				(r = r(l)),
				(t.flags |= 1),
				ue(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = Le(r, t.pendingProps)),
				(l = Le(r.type, l)),
				Zu(e, t, r, l, n)
			);
		case 15:
			return sc(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Le(r, l)),
				Ur(e, t),
				(t.tag = 1),
				he(r) ? ((e = !0), Zr(t)) : (e = !1),
				nn(t, n),
				oc(t, r, l),
				Bo(t, r, l, n),
				Wo(null, t, r, !0, e, n)
			);
		case 19:
			return pc(e, t, n);
		case 22:
			return ac(e, t, n);
	}
	throw Error(k(156, t.tag));
};
function Tc(e, t) {
	return na(e, t);
}
function yp(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Ee(e, t, n, r) {
	return new yp(e, t, n, r);
}
function Xi(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wp(e) {
	if (typeof e == 'function') return Xi(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === pi)) return 11;
		if (e === hi) return 14;
	}
	return 2;
}
function pt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Ee(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Br(e, t, n, r, l, o) {
	var i = 2;
	if (((r = e), typeof e == 'function')) Xi(e) && (i = 1);
	else if (typeof e == 'string') i = 5;
	else
		e: switch (e) {
			case At:
				return jt(n.children, l, o, t);
			case di:
				(i = 8), (l |= 8);
				break;
			case ao:
				return (
					(e = Ee(12, n, t, l | 2)), (e.elementType = ao), (e.lanes = o), e
				);
			case co:
				return (e = Ee(13, n, t, l)), (e.elementType = co), (e.lanes = o), e;
			case fo:
				return (e = Ee(19, n, t, l)), (e.elementType = fo), (e.lanes = o), e;
			case $s:
				return El(n, l, o, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Us:
							i = 10;
							break e;
						case Ds:
							i = 9;
							break e;
						case pi:
							i = 11;
							break e;
						case hi:
							i = 14;
							break e;
						case be:
							(i = 16), (r = null);
							break e;
					}
				throw Error(k(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function jt(e, t, n, r) {
	return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function El(e, t, n, r) {
	return (
		(e = Ee(22, e, r, t)),
		(e.elementType = $s),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function lo(e, t, n) {
	return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function oo(e, t, n) {
	return (
		(t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Sp(e, t, n, r, l) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = $l(0)),
		(this.expirationTimes = $l(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = $l(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function Gi(e, t, n, r, l, o, i, u, s) {
	return (
		(e = new Sp(e, t, n, u, s)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Ee(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		zi(o),
		e
	);
}
function kp(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Bt,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Lc(e) {
	if (!e) return vt;
	e = e._reactInternals;
	e: {
		if (Ft(e) !== e || e.tag !== 1) throw Error(k(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (he(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(k(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (he(n)) return La(e, n, t);
	}
	return t;
}
function Rc(e, t, n, r, l, o, i, u, s) {
	return (
		(e = Gi(n, r, !0, e, l, o, i, u, s)),
		(e.context = Lc(null)),
		(n = e.current),
		(r = se()),
		(l = dt(n)),
		(o = Ke(r, l)),
		(o.callback = t ?? null),
		ct(n, o, l),
		(e.current.lanes = l),
		or(e, l, r),
		me(e, r),
		e
	);
}
function Cl(e, t, n, r) {
	var l = t.current,
		o = se(),
		i = dt(l);
	return (
		(n = Lc(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ke(o, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = ct(l, t, i)),
		e !== null && (Ie(e, l, i, o), Ir(e, l, i)),
		i
	);
}
function cl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function as(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Ji(e, t) {
	as(e, t), (e = e.alternate) && as(e, t);
}
function xp() {
	return null;
}
var zc =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Zi(e) {
	this._internalRoot = e;
}
Nl.prototype.render = Zi.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(k(409));
	Cl(e, t, null, null);
};
Nl.prototype.unmount = Zi.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Ot(function () {
			Cl(null, e, null, null);
		}),
			(t[Xe] = null);
	}
};
function Nl(e) {
	this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = aa();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
		tt.splice(n, 0, e), n === 0 && fa(e);
	}
};
function qi(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function cs() {}
function _p(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var o = r;
			r = function () {
				var a = cl(i);
				o.call(a);
			};
		}
		var i = Rc(t, r, e, 0, null, !1, !1, '', cs);
		return (
			(e._reactRootContainer = i),
			(e[Xe] = i.current),
			Yn(e.nodeType === 8 ? e.parentNode : e),
			Ot(),
			i
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var u = r;
		r = function () {
			var a = cl(s);
			u.call(a);
		};
	}
	var s = Gi(e, 0, !1, null, null, !1, !1, '', cs);
	return (
		(e._reactRootContainer = s),
		(e[Xe] = s.current),
		Yn(e.nodeType === 8 ? e.parentNode : e),
		Ot(function () {
			Cl(t, s, n, r);
		}),
		s
	);
}
function jl(e, t, n, r, l) {
	var o = n._reactRootContainer;
	if (o) {
		var i = o;
		if (typeof l == 'function') {
			var u = l;
			l = function () {
				var s = cl(i);
				u.call(s);
			};
		}
		Cl(t, i, e, l);
	} else i = _p(n, t, e, l, r);
	return cl(i);
}
ua = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Pn(t.pendingLanes);
				n !== 0 &&
					(gi(t, n | 1), me(t, K()), !(I & 6) && ((fn = K() + 500), wt()));
			}
			break;
		case 13:
			Ot(function () {
				var r = Ge(e, 1);
				if (r !== null) {
					var l = se();
					Ie(r, e, 1, l);
				}
			}),
				Ji(e, 1);
	}
};
yi = function (e) {
	if (e.tag === 13) {
		var t = Ge(e, 134217728);
		if (t !== null) {
			var n = se();
			Ie(t, e, 134217728, n);
		}
		Ji(e, 134217728);
	}
};
sa = function (e) {
	if (e.tag === 13) {
		var t = dt(e),
			n = Ge(e, t);
		if (n !== null) {
			var r = se();
			Ie(n, e, t, r);
		}
		Ji(e, t);
	}
};
aa = function () {
	return F;
};
ca = function (e, t) {
	var n = F;
	try {
		return (F = e), t();
	} finally {
		F = n;
	}
};
xo = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((mo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = yl(r);
						if (!l) throw Error(k(90));
						As(r), mo(r, l);
					}
				}
			}
			break;
		case 'textarea':
			Ws(e, n);
			break;
		case 'select':
			(t = n.value), t != null && qt(e, !!n.multiple, t, !1);
	}
};
Js = Qi;
Zs = Ot;
var Ep = { usingClientEntryPoint: !1, Events: [ur, Qt, yl, Xs, Gs, Qi] },
	En = {
		findFiberByHostInstance: Et,
		bundleType: 0,
		version: '18.3.1',
		rendererPackageName: 'react-dom',
	},
	Cp = {
		bundleType: En.bundleType,
		version: En.version,
		rendererPackageName: En.rendererPackageName,
		rendererConfig: En.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Ze.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = ea(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: En.findFiberByHostInstance || xp,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!jr.isDisabled && jr.supportsFiber)
		try {
			(hl = jr.inject(Cp)), ($e = jr);
		} catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ep;
Se.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!qi(t)) throw Error(k(200));
	return kp(e, t, null, n);
};
Se.createRoot = function (e, t) {
	if (!qi(e)) throw Error(k(299));
	var n = !1,
		r = '',
		l = zc;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = Gi(e, 1, !1, null, null, n, !1, r, l)),
		(e[Xe] = t.current),
		Yn(e.nodeType === 8 ? e.parentNode : e),
		new Zi(t)
	);
};
Se.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(k(188))
			: ((e = Object.keys(e).join(',')), Error(k(268, e)));
	return (e = ea(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
	return Ot(e);
};
Se.hydrate = function (e, t, n) {
	if (!Pl(t)) throw Error(k(200));
	return jl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
	if (!qi(e)) throw Error(k(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		o = '',
		i = zc;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = Rc(t, null, e, 1, n ?? null, l, !1, o, i)),
		(e[Xe] = t.current),
		Yn(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new Nl(t);
};
Se.render = function (e, t, n) {
	if (!Pl(t)) throw Error(k(200));
	return jl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
	if (!Pl(e)) throw Error(k(40));
	return e._reactRootContainer
		? (Ot(function () {
				jl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Xe] = null);
				});
		  }),
		  !0)
		: !1;
};
Se.unstable_batchedUpdates = Qi;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Pl(n)) throw Error(k(200));
	if (e == null || e._reactInternals === void 0) throw Error(k(38));
	return jl(e, t, n, !1, r);
};
Se.version = '18.3.1-next-f1338f8080-20240426';
function Oc() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc);
		} catch (e) {
			console.error(e);
		}
}
Oc(), (Os.exports = Se);
var Np = Os.exports,
	fs = Np;
(uo.createRoot = fs.createRoot), (uo.hydrateRoot = fs.hydrateRoot);
const Pp =
		"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M64%2096c0-35.3%2028.7-64%2064-64H512c35.3%200%2064%2028.7%2064%2064V352H512V96H128V352H64V96zM0%20403.2C0%20392.6%208.6%20384%2019.2%20384H620.8c10.6%200%2019.2%208.6%2019.2%2019.2c0%2042.4-34.4%2076.8-76.8%2076.8H76.8C34.4%20480%200%20445.6%200%20403.2zM281%20209l-31%2031%2031%2031c9.4%209.4%209.4%2024.6%200%2033.9s-24.6%209.4-33.9%200l-48-48c-9.4-9.4-9.4-24.6%200-33.9l48-48c9.4-9.4%2024.6-9.4%2033.9%200s9.4%2024.6%200%2033.9zM393%20175l48%2048c9.4%209.4%209.4%2024.6%200%2033.9l-48%2048c-9.4%209.4-24.6%209.4-33.9%200s-9.4-24.6%200-33.9l31-31-31-31c-9.4-9.4-9.4-24.6%200-33.9s24.6-9.4%2033.9%200z'/%3e%3c/svg%3e",
	Ic = '/assets/adalab_white-CbTQnYr8.png';
function jp() {
	return v.jsxs('header', {
		className: 'header',
		children: [
			v.jsxs('a', {
				className: 'header__brand',
				href: './',
				title: 'Haz click para volver a la página inicial',
				children: [
					v.jsx('img', {
						className: 'header__companyLogo',
						src: Pp,
						alt: 'Logo proyectos molones',
					}),
					v.jsx('h1', {
						className: 'header__title',
						children: 'Proyectos molones',
					}),
				],
			}),
			v.jsx('a', {
				href: 'https://adalab.es/',
				target: '_blank',
				children: v.jsx('img', {
					className: 'logoSponsor',
					src: Ic,
					alt: 'Logo Adalab',
				}),
			}),
		],
	});
}
var Fc = { exports: {} },
	Tp = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	Lp = Tp,
	Rp = Lp;
function Mc() {}
function Uc() {}
Uc.resetWarningCache = Mc;
var zp = function () {
	function e(r, l, o, i, u, s) {
		if (s !== Rp) {
			var a = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
			);
			throw ((a.name = 'Invariant Violation'), a);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: Uc,
		resetWarningCache: Mc,
	};
	return (n.PropTypes = n), n;
};
Fc.exports = zp();
var Op = Fc.exports;
const Ve = Ss(Op),
	Dc = ({ inputData: e }) =>
		v.jsxs('article', {
			className: 'card',
			children: [
				v.jsx('h2', {
					className: 'card__projectTitle',
					children: v.jsx('span', {
						className: 'card__projectTitle--text',
						children: 'Personal project card',
					}),
				}),
				v.jsxs('div', {
					className: 'card__author',
					children: [
						v.jsx('div', {
							className: 'card__authorPhoto',
							children:
								e.photo &&
								v.jsx('img', {
									className: 'card__authorPhoto--img',
									src: e.photo,
									alt: '',
								}),
						}),
						v.jsxs('p', {
							className: 'card__job',
							children: [' ', e.job || 'Full stack Developer'],
						}),
						v.jsx('h3', {
							className: 'card__name',
							children: e.autor || 'Emmelie Björklund',
						}),
					],
				}),
				v.jsxs('div', {
					className: 'card__project',
					children: [
						v.jsx('h3', {
							className: 'card__name',
							children: e.name || 'Elegant Workspace',
						}),
						v.jsx('p', {
							className: 'card__slogan',
							children: e.slogan || 'Diseños Exclusivos',
						}),
						v.jsx('h3', {
							className: 'card__descriptionTitle',
							children: 'Product description',
						}),
						v.jsx('p', {
							className: 'card__description',
							children:
								e.desc ||
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipiscivitae ratione',
						}),
						v.jsxs('div', {
							className: 'card__technicalInfo',
							children: [
								v.jsx('p', {
									className: 'card__technologies',
									children: e.technologies || 'React JS - HTML - CSS',
								}),
								v.jsx('a', {
									className: 'icon icon__www',
									href: e.demo,
									title: 'Haz click para ver el proyecto online',
									target: '_blank',
									children: 'Web link',
								}),
								v.jsx('a', {
									className: 'icon icon__github',
									href: e.repo,
									title: 'Haz click para ver el código del proyecto',
									target: '_blank',
									children: 'GitHub link',
								}),
							],
						}),
					],
				}),
			],
		});
Dc.propTypes = { inputData: Ve.object };
function $c({ inputData: e }) {
	return v.jsxs('section', {
		className: 'preview',
		children: [
			v.jsxs('div', {
				className: 'projectImage',
				children: [
					' ',
					e.image &&
						v.jsx('img', {
							className: 'projectImage--img',
							src: e.image,
							alt: '',
						}),
					' ',
				],
			}),
			v.jsx(Dc, { inputData: e }),
		],
	});
}
$c.propTypes = { inputData: Ve.object };
function ds(e) {
	const t = new FileReader(),
		n = Rs.createRef();
	let r = '';
	const l = i => {
			if (
				(console.log(i.target.id),
				(r = i.target.id),
				console.log('La usuaria ha abierto la ventana para elegir ficheros'),
				console.log(
					'La usuaria ha elegido los ficheros',
					i.currentTarget.files
				),
				console.log(
					'El primero de los ficheros elegidos es',
					i.currentTarget.files[0]
				),
				i.currentTarget.files.length > 0)
			) {
				const u = i.currentTarget.files[0];
				t.addEventListener('load', o), t.readAsDataURL(u);
			}
		},
		o = i => {
			console.log(n);
			const u = t.result;
			e.updateAvatar(u, r);
		};
	return v.jsxs('div', {
		children: [
			v.jsx('label', {
				htmlFor: e.btnOther,
				className: 'button',
				children: e.text,
			}),
			v.jsx('input', {
				className: 'addForm__hidden',
				ref: n,
				type: 'file',
				name: e.btnOther,
				id: e.btnOther,
				onChange: l,
			}),
		],
	});
}
function Bc({
	changeInputData: e,
	updateAvatar: t,
	inputData: n,
	createdCard: r,
	urlCard: l,
	hidden: o,
	setError: i,
}) {
	const u = h => (h.includes('https://') ? 'hidden' : ''),
		s = h => {
			const p = h.target.id,
				m = h.target.value;
			e(p, m), localStorage.setItem('project', JSON.stringify(n));
		},
		a = () => {
			n.name !== '' &&
			n.slogan !== '' &&
			n.technologies !== '' &&
			n.repo !== '' &&
			n.demo !== '' &&
			n.desc !== '' &&
			n.autor !== '' &&
			n.job !== '' &&
			n.image !== '' &&
			n.photo !== ''
				? (r(), localStorage.removeItem('project'))
				: i('Por favor, introduce todos los datos');
		};
	return v.jsxs('form', {
		className: 'addForm',
		onSubmit: h => {
			h.preventDefault();
		},
		children: [
			v.jsx('h2', { className: 'title', children: 'Información' }),
			v.jsxs('fieldset', {
				className: 'addForm__group',
				children: [
					v.jsx('legend', {
						className: 'addForm__title',
						children: 'Cuéntanos sobre el proyecto',
					}),
					v.jsx('input', {
						className: 'addForm__input',
						type: 'text',
						name: 'name',
						id: 'name',
						placeholder: 'Nombre del proyecto',
						onChange: s,
						value: n.name,
						required: !0,
					}),
					v.jsx('input', {
						className: 'addForm__input',
						type: 'text',
						name: 'slogan',
						id: 'slogan',
						placeholder: 'Slogan',
						onChange: s,
						value: n.slogan,
						required: !0,
					}),
					v.jsxs('div', {
						className: 'addForm__2col',
						children: [
							v.jsx('input', {
								className: 'addForm__input',
								type: 'url',
								name: 'repo',
								id: 'repo',
								placeholder: 'https://tu-repositorio',
								onChange: s,
								value: n.repo,
								required: !0,
							}),
							v.jsx('p', {
								className: `validation-text ${u(n.repo)}`,
								children: 'Introduce una URL válida',
							}),
							v.jsx('input', {
								className: 'addForm__input',
								type: 'url',
								name: 'demo',
								id: 'demo',
								placeholder: 'https://tu-demo',
								onChange: s,
								value: n.demo,
							}),
							v.jsx('p', {
								className: `validation-text ${u(n.demo)}`,
								children: 'Introduce una URL válida',
							}),
						],
					}),
					v.jsx('input', {
						className: 'addForm__input',
						type: 'text',
						name: 'technologies',
						id: 'technologies',
						placeholder: 'Tecnologías',
						onChange: s,
						value: n.technologies,
						required: !0,
					}),
					v.jsx('textarea', {
						className: 'addForm__input',
						type: 'text',
						name: 'desc',
						id: 'desc',
						placeholder: 'Descripción',
						rows: '5',
						onChange: s,
						value: n.desc,
						maxLength: '200',
						required: !0,
					}),
				],
			}),
			v.jsxs('fieldset', {
				className: 'addForm__group',
				children: [
					v.jsx('legend', {
						className: 'addForm__title',
						children: 'Cuéntanos sobre la autora',
					}),
					v.jsx('input', {
						className: 'addForm__input',
						type: 'text',
						name: 'autor',
						id: 'autor',
						placeholder: 'Nombre',
						onChange: s,
						value: n.autor,
						required: !0,
					}),
					v.jsx('input', {
						className: 'addForm__input',
						type: 'text',
						name: 'job',
						id: 'job',
						placeholder: 'Trabajo',
						onChange: s,
						value: n.job,
						required: !0,
					}),
				],
			}),
			v.jsxs('fieldset', {
				className: 'addForm__group--upload',
				children: [
					v.jsx(ds, {
						text: 'Subir foto del proyecto',
						btnOther: 'image',
						updateAvatar: t,
						required: !0,
					}),
					v.jsx(ds, {
						text: 'Subir foto de la autora',
						btnOther: 'photo',
						updateAvatar: t,
						required: !0,
					}),
					v.jsx('button', {
						className: 'button--large on',
						onClick: a,
						children: 'Guardar proyecto',
					}),
				],
			}),
			v.jsx('a', {
				href: l,
				className: `url--message ${o}`,
				target: '_blank',
				children: 'Mira tu tarjeta',
			}),
		],
	});
}
Bc.propTypes = {
	inputData: Ve.object,
	changeInputData: Ve.func,
	updateAvatar: Ve.func,
	createdCard: Ve.func,
	urlCard: Ve.string,
	hidden: Ve.string,
	setError: Ve.func,
};
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
	return (
		(nr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		nr.apply(this, arguments)
	);
}
var ot;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ot || (ot = {}));
const ps = 'popstate';
function Ip(e) {
	e === void 0 && (e = {});
	function t(l, o) {
		let {
			pathname: i = '/',
			search: u = '',
			hash: s = '',
		} = Mt(l.location.hash.substr(1));
		return (
			!i.startsWith('/') && !i.startsWith('.') && (i = '/' + i),
			ti(
				'',
				{ pathname: i, search: u, hash: s },
				(o.state && o.state.usr) || null,
				(o.state && o.state.key) || 'default'
			)
		);
	}
	function n(l, o) {
		let i = l.document.querySelector('base'),
			u = '';
		if (i && i.getAttribute('href')) {
			let s = l.location.href,
				a = s.indexOf('#');
			u = a === -1 ? s : s.slice(0, a);
		}
		return u + '#' + (typeof o == 'string' ? o : fl(o));
	}
	function r(l, o) {
		bi(
			l.pathname.charAt(0) === '/',
			'relative pathnames are not supported in hash history.push(' +
				JSON.stringify(o) +
				')'
		);
	}
	return Mp(t, n, r, e);
}
function X(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function bi(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Fp() {
	return Math.random().toString(36).substr(2, 8);
}
function hs(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function ti(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		nr(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? Mt(t) : t,
			{ state: n, key: (t && t.key) || r || Fp() }
		)
	);
}
function fl(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function Mt(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Mp(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: o = !1 } = r,
		i = l.history,
		u = ot.Pop,
		s = null,
		a = h();
	a == null && ((a = 0), i.replaceState(nr({}, i.state, { idx: a }), ''));
	function h() {
		return (i.state || { idx: null }).idx;
	}
	function p() {
		u = ot.Pop;
		let _ = h(),
			f = _ == null ? null : _ - a;
		(a = _), s && s({ action: u, location: S.location, delta: f });
	}
	function m(_, f) {
		u = ot.Push;
		let c = ti(S.location, _, f);
		n && n(c, _), (a = h() + 1);
		let d = hs(c, a),
			g = S.createHref(c);
		try {
			i.pushState(d, '', g);
		} catch (x) {
			if (x instanceof DOMException && x.name === 'DataCloneError') throw x;
			l.location.assign(g);
		}
		o && s && s({ action: u, location: S.location, delta: 1 });
	}
	function y(_, f) {
		u = ot.Replace;
		let c = ti(S.location, _, f);
		n && n(c, _), (a = h());
		let d = hs(c, a),
			g = S.createHref(c);
		i.replaceState(d, '', g),
			o && s && s({ action: u, location: S.location, delta: 0 });
	}
	function w(_) {
		let f = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			c = typeof _ == 'string' ? _ : fl(_);
		return (
			(c = c.replace(/ $/, '%20')),
			X(
				f,
				'No window.location.(origin|href) available to create URL for href: ' +
					c
			),
			new URL(c, f)
		);
	}
	let S = {
		get action() {
			return u;
		},
		get location() {
			return e(l, i);
		},
		listen(_) {
			if (s) throw new Error('A history only accepts one active listener');
			return (
				l.addEventListener(ps, p),
				(s = _),
				() => {
					l.removeEventListener(ps, p), (s = null);
				}
			);
		},
		createHref(_) {
			return t(l, _);
		},
		createURL: w,
		encodeLocation(_) {
			let f = w(_);
			return { pathname: f.pathname, search: f.search, hash: f.hash };
		},
		push: m,
		replace: y,
		go(_) {
			return i.go(_);
		},
	};
	return S;
}
var ms;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(ms || (ms = {}));
function Up(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? Mt(t) : t,
		l = eu(r.pathname || '/', n);
	if (l == null) return null;
	let o = Ac(e);
	Dp(o);
	let i = null;
	for (let u = 0; i == null && u < o.length; ++u) {
		let s = Jp(l);
		i = Yp(o[u], s);
	}
	return i;
}
function Ac(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let l = (o, i, u) => {
		let s = {
			relativePath: u === void 0 ? o.path || '' : u,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: i,
			route: o,
		};
		s.relativePath.startsWith('/') &&
			(X(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(s.relativePath = s.relativePath.slice(r.length)));
		let a = ht([r, s.relativePath]),
			h = n.concat(s);
		o.children &&
			o.children.length > 0 &&
			(X(
				o.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + a + '".')
			),
			Ac(o.children, t, h, a)),
			!(o.path == null && !o.index) &&
				t.push({ path: a, score: Qp(a, o.index), routesMeta: h });
	};
	return (
		e.forEach((o, i) => {
			var u;
			if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
			else for (let s of Vc(o.path)) l(o, i, s);
		}),
		t
	);
}
function Vc(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith('?'),
		o = n.replace(/\?$/, '');
	if (r.length === 0) return l ? [o, ''] : [o];
	let i = Vc(r.join('/')),
		u = [];
	return (
		u.push(...i.map(s => (s === '' ? o : [o, s].join('/')))),
		l && u.push(...i),
		u.map(s => (e.startsWith('/') && s === '' ? '/' : s))
	);
}
function Dp(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Kp(
					t.routesMeta.map(r => r.childrenIndex),
					n.routesMeta.map(r => r.childrenIndex)
			  )
	);
}
const $p = /^:[\w-]+$/,
	Bp = 3,
	Ap = 2,
	Vp = 1,
	Wp = 10,
	Hp = -2,
	vs = e => e === '*';
function Qp(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(vs) && (r += Hp),
		t && (r += Ap),
		n
			.filter(l => !vs(l))
			.reduce((l, o) => l + ($p.test(o) ? Bp : o === '' ? Vp : Wp), r)
	);
}
function Kp(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Yp(e, t) {
	let { routesMeta: n } = e,
		r = {},
		l = '/',
		o = [];
	for (let i = 0; i < n.length; ++i) {
		let u = n[i],
			s = i === n.length - 1,
			a = l === '/' ? t : t.slice(l.length) || '/',
			h = Xp(
				{ path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
				a
			);
		if (!h) return null;
		Object.assign(r, h.params);
		let p = u.route;
		o.push({
			params: r,
			pathname: ht([l, h.pathname]),
			pathnameBase: eh(ht([l, h.pathnameBase])),
			route: p,
		}),
			h.pathnameBase !== '/' && (l = ht([l, h.pathnameBase]));
	}
	return o;
}
function Xp(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Gp(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let o = l[0],
		i = o.replace(/(.)\/+$/, '$1'),
		u = l.slice(1);
	return {
		params: r.reduce((a, h, p) => {
			let { paramName: m, isOptional: y } = h;
			if (m === '*') {
				let S = u[p] || '';
				i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, '$1');
			}
			const w = u[p];
			return (
				y && !w ? (a[m] = void 0) : (a[m] = (w || '').replace(/%2F/g, '/')), a
			);
		}, {}),
		pathname: o,
		pathnameBase: i,
		pattern: e,
	};
}
function Gp(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		bi(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		);
	let r = [],
		l =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(i, u, s) => (
						r.push({ paramName: u, isOptional: s != null }),
						s ? '/?([^\\/]+)?' : '/([^\\/]+)'
					)
				);
	return (
		e.endsWith('*')
			? (r.push({ paramName: '*' }),
			  (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (l += '\\/*$')
			: e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
		[new RegExp(l, t ? void 0 : 'i'), r]
	);
}
function Jp(e) {
	try {
		return e
			.split('/')
			.map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/');
	} catch (t) {
		return (
			bi(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		);
	}
}
function eu(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function Zp(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: l = '',
	} = typeof e == 'string' ? Mt(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : qp(n, t)) : t,
		search: th(r),
		hash: nh(l),
	};
}
function qp(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach(l => {
			l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function io(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' +
			t +
			'` field [' +
			JSON.stringify(r) +
			'].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function bp(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Wc(e, t) {
	let n = bp(e);
	return t
		? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map(r => r.pathnameBase);
}
function Hc(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == 'string'
		? (l = Mt(e))
		: ((l = nr({}, e)),
		  X(
				!l.pathname || !l.pathname.includes('?'),
				io('?', 'pathname', 'search', l)
		  ),
		  X(
				!l.pathname || !l.pathname.includes('#'),
				io('#', 'pathname', 'hash', l)
		  ),
		  X(!l.search || !l.search.includes('#'), io('#', 'search', 'hash', l)));
	let o = e === '' || l.pathname === '',
		i = o ? '/' : l.pathname,
		u;
	if (i == null) u = n;
	else {
		let p = t.length - 1;
		if (!r && i.startsWith('..')) {
			let m = i.split('/');
			for (; m[0] === '..'; ) m.shift(), (p -= 1);
			l.pathname = m.join('/');
		}
		u = p >= 0 ? t[p] : '/';
	}
	let s = Zp(l, u),
		a = i && i !== '/' && i.endsWith('/'),
		h = (o || i === '.') && n.endsWith('/');
	return !s.pathname.endsWith('/') && (a || h) && (s.pathname += '/'), s;
}
const ht = e => e.join('/').replace(/\/\/+/g, '/'),
	eh = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	th = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	nh = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function rh(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const Qc = ['post', 'put', 'patch', 'delete'];
new Set(Qc);
const lh = ['get', ...Qc];
new Set(lh);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
	return (
		(rr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		rr.apply(this, arguments)
	);
}
const tu = E.createContext(null),
	oh = E.createContext(null),
	Ut = E.createContext(null),
	Tl = E.createContext(null),
	Dt = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Kc = E.createContext(null);
function ih(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	ar() || X(!1);
	let { basename: r, navigator: l } = E.useContext(Ut),
		{ hash: o, pathname: i, search: u } = Xc(e, { relative: n }),
		s = i;
	return (
		r !== '/' && (s = i === '/' ? r : ht([r, i])),
		l.createHref({ pathname: s, search: u, hash: o })
	);
}
function ar() {
	return E.useContext(Tl) != null;
}
function Ll() {
	return ar() || X(!1), E.useContext(Tl).location;
}
function Yc(e) {
	E.useContext(Ut).static || E.useLayoutEffect(e);
}
function uh() {
	let { isDataRoute: e } = E.useContext(Dt);
	return e ? Sh() : sh();
}
function sh() {
	ar() || X(!1);
	let e = E.useContext(tu),
		{ basename: t, future: n, navigator: r } = E.useContext(Ut),
		{ matches: l } = E.useContext(Dt),
		{ pathname: o } = Ll(),
		i = JSON.stringify(Wc(l, n.v7_relativeSplatPath)),
		u = E.useRef(!1);
	return (
		Yc(() => {
			u.current = !0;
		}),
		E.useCallback(
			function (a, h) {
				if ((h === void 0 && (h = {}), !u.current)) return;
				if (typeof a == 'number') {
					r.go(a);
					return;
				}
				let p = Hc(a, JSON.parse(i), o, h.relative === 'path');
				e == null &&
					t !== '/' &&
					(p.pathname = p.pathname === '/' ? t : ht([t, p.pathname])),
					(h.replace ? r.replace : r.push)(p, h.state, h);
			},
			[t, r, i, o, e]
		)
	);
}
function Xc(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = E.useContext(Ut),
		{ matches: l } = E.useContext(Dt),
		{ pathname: o } = Ll(),
		i = JSON.stringify(Wc(l, r.v7_relativeSplatPath));
	return E.useMemo(() => Hc(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function ah(e, t) {
	return ch(e, t);
}
function ch(e, t, n, r) {
	ar() || X(!1);
	let { navigator: l } = E.useContext(Ut),
		{ matches: o } = E.useContext(Dt),
		i = o[o.length - 1],
		u = i ? i.params : {};
	i && i.pathname;
	let s = i ? i.pathnameBase : '/';
	i && i.route;
	let a = Ll(),
		h;
	if (t) {
		var p;
		let _ = typeof t == 'string' ? Mt(t) : t;
		s === '/' || ((p = _.pathname) != null && p.startsWith(s)) || X(!1),
			(h = _);
	} else h = a;
	let m = h.pathname || '/',
		y = m;
	if (s !== '/') {
		let _ = s.replace(/^\//, '').split('/');
		y = '/' + m.replace(/^\//, '').split('/').slice(_.length).join('/');
	}
	let w = Up(e, { pathname: y }),
		S = mh(
			w &&
				w.map(_ =>
					Object.assign({}, _, {
						params: Object.assign({}, u, _.params),
						pathname: ht([
							s,
							l.encodeLocation
								? l.encodeLocation(_.pathname).pathname
								: _.pathname,
						]),
						pathnameBase:
							_.pathnameBase === '/'
								? s
								: ht([
										s,
										l.encodeLocation
											? l.encodeLocation(_.pathnameBase).pathname
											: _.pathnameBase,
								  ]),
					})
				),
			o,
			n,
			r
		);
	return t && S
		? E.createElement(
				Tl.Provider,
				{
					value: {
						location: rr(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							h
						),
						navigationType: ot.Pop,
					},
				},
				S
		  )
		: S;
}
function fh() {
	let e = wh(),
		t = rh(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
	return E.createElement(
		E.Fragment,
		null,
		E.createElement('h2', null, 'Unexpected Application Error!'),
		E.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? E.createElement('pre', { style: l }, n) : null,
		null
	);
}
const dh = E.createElement(fh, null);
class ph extends E.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			'React Router caught the following error during render',
			t,
			n
		);
	}
	render() {
		return this.state.error !== void 0
			? E.createElement(
					Dt.Provider,
					{ value: this.props.routeContext },
					E.createElement(Kc.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function hh(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = E.useContext(tu);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		E.createElement(Dt.Provider, { value: t }, r)
	);
}
function mh(e, t, n, r) {
	var l;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var o;
		if ((o = n) != null && o.errors) e = n.matches;
		else return null;
	}
	let i = e,
		u = (l = n) == null ? void 0 : l.errors;
	if (u != null) {
		let h = i.findIndex(
			p => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
		);
		h >= 0 || X(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
	}
	let s = !1,
		a = -1;
	if (n && r && r.v7_partialHydration)
		for (let h = 0; h < i.length; h++) {
			let p = i[h];
			if (
				((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
				p.route.id)
			) {
				let { loaderData: m, errors: y } = n,
					w =
						p.route.loader &&
						m[p.route.id] === void 0 &&
						(!y || y[p.route.id] === void 0);
				if (p.route.lazy || w) {
					(s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
					break;
				}
			}
		}
	return i.reduceRight((h, p, m) => {
		let y,
			w = !1,
			S = null,
			_ = null;
		n &&
			((y = u && p.route.id ? u[p.route.id] : void 0),
			(S = p.route.errorElement || dh),
			s &&
				(a < 0 && m === 0
					? ((w = !0), (_ = null))
					: a === m &&
					  ((w = !0), (_ = p.route.hydrateFallbackElement || null))));
		let f = t.concat(i.slice(0, m + 1)),
			c = () => {
				let d;
				return (
					y
						? (d = S)
						: w
						? (d = _)
						: p.route.Component
						? (d = E.createElement(p.route.Component, null))
						: p.route.element
						? (d = p.route.element)
						: (d = h),
					E.createElement(hh, {
						match: p,
						routeContext: { outlet: h, matches: f, isDataRoute: n != null },
						children: d,
					})
				);
			};
		return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
			? E.createElement(ph, {
					location: n.location,
					revalidation: n.revalidation,
					component: S,
					error: y,
					children: c(),
					routeContext: { outlet: null, matches: f, isDataRoute: !0 },
			  })
			: c();
	}, null);
}
var Gc = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			e
		);
	})(Gc || {}),
	dl = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseLoaderData = 'useLoaderData'),
			(e.UseActionData = 'useActionData'),
			(e.UseRouteError = 'useRouteError'),
			(e.UseNavigation = 'useNavigation'),
			(e.UseRouteLoaderData = 'useRouteLoaderData'),
			(e.UseMatches = 'useMatches'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			(e.UseRouteId = 'useRouteId'),
			e
		);
	})(dl || {});
function vh(e) {
	let t = E.useContext(tu);
	return t || X(!1), t;
}
function gh(e) {
	let t = E.useContext(oh);
	return t || X(!1), t;
}
function yh(e) {
	let t = E.useContext(Dt);
	return t || X(!1), t;
}
function Jc(e) {
	let t = yh(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || X(!1), n.route.id;
}
function wh() {
	var e;
	let t = E.useContext(Kc),
		n = gh(dl.UseRouteError),
		r = Jc(dl.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Sh() {
	let { router: e } = vh(Gc.UseNavigateStable),
		t = Jc(dl.UseNavigateStable),
		n = E.useRef(!1);
	return (
		Yc(() => {
			n.current = !0;
		}),
		E.useCallback(
			function (l, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof l == 'number'
							? e.navigate(l)
							: e.navigate(l, rr({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function Tn(e) {
	X(!1);
}
function kh(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = ot.Pop,
		navigator: o,
		static: i = !1,
		future: u,
	} = e;
	ar() && X(!1);
	let s = t.replace(/^\/*/, '/'),
		a = E.useMemo(
			() => ({
				basename: s,
				navigator: o,
				static: i,
				future: rr({ v7_relativeSplatPath: !1 }, u),
			}),
			[s, u, o, i]
		);
	typeof r == 'string' && (r = Mt(r));
	let {
			pathname: h = '/',
			search: p = '',
			hash: m = '',
			state: y = null,
			key: w = 'default',
		} = r,
		S = E.useMemo(() => {
			let _ = eu(h, s);
			return _ == null
				? null
				: {
						location: { pathname: _, search: p, hash: m, state: y, key: w },
						navigationType: l,
				  };
		}, [s, h, p, m, y, w, l]);
	return S == null
		? null
		: E.createElement(
				Ut.Provider,
				{ value: a },
				E.createElement(Tl.Provider, { children: n, value: S })
		  );
}
function xh(e) {
	let { children: t, location: n } = e;
	return ah(ni(t), n);
}
new Promise(() => {});
function ni(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		E.Children.forEach(e, (r, l) => {
			if (!E.isValidElement(r)) return;
			let o = [...t, l];
			if (r.type === E.Fragment) {
				n.push.apply(n, ni(r.props.children, o));
				return;
			}
			r.type !== Tn && X(!1), !r.props.index || !r.props.children || X(!1);
			let i = {
				id: r.props.id || o.join('-'),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (i.children = ni(r.props.children, o)), n.push(i);
		}),
		n
	);
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ri() {
	return (
		(ri = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		ri.apply(this, arguments)
	);
}
function _h(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		o;
	for (o = 0; o < r.length; o++)
		(l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function Eh(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ch(e, t) {
	return e.button === 0 && (!t || t === '_self') && !Eh(e);
}
const Nh = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
		'unstable_viewTransition',
	],
	Ph = '6';
try {
	window.__reactRouterVersion = Ph;
} catch {}
const jh = 'startTransition',
	gs = mf[jh];
function Th(e) {
	let { basename: t, children: n, future: r, window: l } = e,
		o = E.useRef();
	o.current == null && (o.current = Ip({ window: l, v5Compat: !0 }));
	let i = o.current,
		[u, s] = E.useState({ action: i.action, location: i.location }),
		{ v7_startTransition: a } = r || {},
		h = E.useCallback(
			p => {
				a && gs ? gs(() => s(p)) : s(p);
			},
			[s, a]
		);
	return (
		E.useLayoutEffect(() => i.listen(h), [i, h]),
		E.createElement(kh, {
			basename: t,
			children: n,
			location: u.location,
			navigationType: u.action,
			navigator: i,
			future: r,
		})
	);
}
const Lh =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	Rh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	li = E.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: l,
				reloadDocument: o,
				replace: i,
				state: u,
				target: s,
				to: a,
				preventScrollReset: h,
				unstable_viewTransition: p,
			} = t,
			m = _h(t, Nh),
			{ basename: y } = E.useContext(Ut),
			w,
			S = !1;
		if (typeof a == 'string' && Rh.test(a) && ((w = a), Lh))
			try {
				let d = new URL(window.location.href),
					g = a.startsWith('//') ? new URL(d.protocol + a) : new URL(a),
					x = eu(g.pathname, y);
				g.origin === d.origin && x != null
					? (a = x + g.search + g.hash)
					: (S = !0);
			} catch {}
		let _ = ih(a, { relative: l }),
			f = zh(a, {
				replace: i,
				state: u,
				target: s,
				preventScrollReset: h,
				relative: l,
				unstable_viewTransition: p,
			});
		function c(d) {
			r && r(d), d.defaultPrevented || f(d);
		}
		return E.createElement(
			'a',
			ri({}, m, { href: w || _, onClick: S || o ? r : c, ref: n, target: s })
		);
	});
var ys;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState');
})(ys || (ys = {}));
var ws;
(function (e) {
	(e.UseFetcher = 'useFetcher'),
		(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(ws || (ws = {}));
function zh(e, t) {
	let {
			target: n,
			replace: r,
			state: l,
			preventScrollReset: o,
			relative: i,
			unstable_viewTransition: u,
		} = t === void 0 ? {} : t,
		s = uh(),
		a = Ll(),
		h = Xc(e, { relative: i });
	return E.useCallback(
		p => {
			if (Ch(p, n)) {
				p.preventDefault();
				let m = r !== void 0 ? r : fl(a) === fl(h);
				s(e, {
					replace: m,
					state: l,
					preventScrollReset: o,
					relative: i,
					unstable_viewTransition: u,
				});
			}
		},
		[a, s, h, r, l, n, e, o, i, u]
	);
}
function Oh() {
	const [e, t] = E.useState({
			name: '',
			slogan: '',
			technologies: '',
			repo: '',
			demo: '',
			desc: '',
			autor: '',
			job: '',
			image: '',
			photo: '',
		}),
		[n, r] = E.useState(''),
		[l, o] = E.useState('hidden'),
		[i, u] = E.useState(''),
		s = (p, m) => {
			t({ ...e, [p]: m });
		},
		a = (p, m) => {
			t({ ...e, [m]: p });
		},
		h = () => {
			fetch(
				'https://project-promo-x-module-4-team-1-1.onrender.com/addProject',
				{
					method: 'POST',
					body: JSON.stringify(e),
					headers: { 'content-type': 'application/json' },
				}
			)
				.then(p => p.json())
				.then(p => {
					console.log(p),
						p.success
							? (r(p.cardUrl),
							  o(''),
							  u(''),
							  t({
									name: '',
									slogan: '',
									technologies: '',
									repo: '',
									demo: '',
									desc: '',
									autor: '',
									job: '',
									image: '',
									photo: '',
							  }))
							: u(p.error);
				});
		};
	return v.jsxs('main', {
		className: 'main',
		children: [
			v.jsxs('section', {
				className: 'hero',
				children: [
					v.jsx('h2', { className: 'title', children: 'Proyectos molones' }),
					v.jsx('p', {
						className: 'hero__text',
						children:
							'Escaparate en línea para recoger ideas a través de la tecnología',
					}),
					v.jsx(li, {
						to: '/catalogue',
						children: v.jsx('button', {
							className: 'button--link',
							children: 'Ver proyectos',
						}),
					}),
				],
			}),
			v.jsx($c, { inputData: e }),
			v.jsx(Bc, {
				changeInputData: s,
				updateAvatar: a,
				inputData: e,
				setInputData: t,
				createdCard: h,
				urlCard: n,
				hidden: l,
				setError: u,
			}),
			v.jsx('section', {
				className: i === '' ? 'hidden' : 'error',
				children: i,
			}),
		],
	});
}
const Ih = () =>
	v.jsx('footer', {
		className: 'footer',
		children: v.jsx('a', {
			href: 'https://adalab.es/',
			target: '_blank',
			children: v.jsx('img', {
				className: 'logoSponsor',
				src: Ic,
				alt: 'Logo Adalab',
			}),
		}),
	});
function Fh() {
	return v.jsx(v.Fragment, {
		children: v.jsxs('main', {
			className: 'main--landing',
			children: [
				v.jsx('h1', { className: 'title', children: 'Mis proyectos molones' }),
				v.jsx('p', {
					className: 'title--landing',
					children:
						'Escaparate en línea para recoger ideas a través de la tecnología.',
				}),
				v.jsxs('div', {
					className: 'button--landing',
					children: [
						v.jsx(li, {
							to: '/main',
							children: v.jsx('button', {
								className: 'button--link__landing',
								children: 'Nuevo proyecto',
							}),
						}),
						v.jsx(li, {
							to: '/catalogue',
							children: v.jsx('button', {
								className: 'button--link__landing',
								children: 'Catálogo de Proyectos',
							}),
						}),
					],
				}),
			],
		}),
	});
}
function Mh() {
	const [e, t] = E.useState([]);
	E.useEffect(() => {
		fetch('https://project-promo-x-module-4-team-1-1.onrender.com/list')
			.then(r => r.json())
			.then(r => {
				t(r.data);
			});
	}, []);
	const n = e.map((r, l) =>
		v.jsx(
			'a',
			{
				className: 'card__link',
				href: `https://project-promo-x-module-4-team-1-1.onrender.com/detailProject/${r.idUser}`,
				children: v.jsxs('article', {
					className: 'card__catalogue',
					children: [
						v.jsx('h2', {
							className: 'card__projectTitle',
							children: v.jsx('span', {
								className: 'card__projectTitle--text',
								children: 'Personal project card',
							}),
						}),
						v.jsxs('div', {
							className: 'card__author',
							children: [
								v.jsx('div', {
									className: 'card__authorPhoto',
									children:
										r.photo &&
										v.jsx('img', {
											className: 'card__authorPhoto--img',
											src: r.photo,
											alt: '',
										}),
								}),
								v.jsx('p', { className: 'card__job', children: r.job }),
								v.jsx('h3', { className: 'card__name', children: r.autor }),
							],
						}),
						v.jsxs('div', {
							className: 'card__project',
							children: [
								v.jsx('h3', { className: 'card__name', children: r.name }),
								v.jsx('p', { className: 'card__slogan', children: r.slogan }),
								v.jsx('h3', {
									className: 'card__descriptionTitle',
									children: 'Product description',
								}),
								v.jsx('p', {
									className: 'card__description',
									children: r.desc,
								}),
								v.jsxs('div', {
									className: 'card__technicalInfo',
									children: [
										v.jsx('p', {
											className: 'card__technologies',
											children: r.technologies,
										}),
										v.jsx('a', {
											className: 'icon icon__www',
											href: '#',
											title: 'Haz click para ver el proyecto online',
											children: r.demo,
										}),
										v.jsx('a', {
											className: 'icon icon__github',
											href: '#',
											title: 'Haz click para ver el código del proyecto',
											children: r.repo,
										}),
									],
								}),
							],
						}),
					],
				}),
			},
			l
		)
	);
	return v.jsxs('section', {
		className: 'catalogue',
		children: [
			v.jsx('h3', {
				className: 'title__catalogue',
				children: 'Catálogo de Proyectos',
			}),
			v.jsx('article', { className: 'card__container', children: n }),
		],
	});
}
function Uh() {
	return v.jsx(v.Fragment, {
		children: v.jsxs('div', {
			className: 'container',
			children: [
				v.jsx(jp, {}),
				v.jsxs(xh, {
					children: [
						v.jsx(Tn, { path: '/', element: v.jsx(Fh, {}) }),
						v.jsx(Tn, { path: '/main', element: v.jsx(Oh, {}) }),
						v.jsx(Tn, { path: '/catalogue', element: v.jsx(Mh, {}) }),
						v.jsx(Tn, {
							path: '*',
							element: v.jsx('p', { children: 'Página no encontrada' }),
						}),
					],
				}),
				v.jsx(Ih, {}),
			],
		}),
	});
}
uo.createRoot(document.getElementById('root')).render(
	v.jsx(Th, { children: v.jsx(Uh, {}) })
);
