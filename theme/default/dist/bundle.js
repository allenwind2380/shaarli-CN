! function() {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t) {
        var e = {
            exports: {}
        };
        return t(e, e.exports), e.exports
    }
    function n(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')
    }
    var r = function(t) {
        return t && t.Math == Math && t
    }, o = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")(),
        i = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }, a = !i((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        s = {}.propertyIsEnumerable,
        u = Object.getOwnPropertyDescriptor,
        c = {
            f: u && !s.call({
                1: 2
            }, 1) ? function(t) {
                var e = u(this, t);
                return !!e && e.enumerable
            } : s
        }, l = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }, f = {}.toString,
        d = function(t) {
            return f.call(t).slice(8, -1)
        }, h = "".split,
        p = i((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == d(t) ? h.call(t, "") : Object(t)
        } : Object,
        g = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }, v = function(t) {
            return p(g(t))
        }, m = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }, y = function(t, e) {
            if (!m(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !m(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !m(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !m(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }, b = {}.hasOwnProperty,
        w = function(t, e) {
            return b.call(t, e)
        }, x = o.document,
        E = m(x) && m(x.createElement),
        T = function(t) {
            return E ? x.createElement(t) : {}
        }, C = !a && !i((function() {
            return 7 != Object.defineProperty(T("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        S = Object.getOwnPropertyDescriptor,
        A = {
            f: a ? S : function(t, e) {
                if (t = v(t), e = y(e, !0), C) try {
                        return S(t, e)
                } catch (t) {}
                if (w(t, e)) return l(!c.f.call(t, e), t[e])
            }
        }, k = function(t) {
            if (!m(t)) throw TypeError(String(t) + " is not an object");
            return t
        }, O = Object.defineProperty,
        L = {
            f: a ? O : function(t, e, n) {
                if (k(t), e = y(e, !0), k(n), C) try {
                        return O(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        }, N = a ? function(t, e, n) {
            return L.f(t, e, l(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }, D = function(t, e) {
            try {
                N(o, t, e)
            } catch (n) {
                o[t] = e
            }
            return e
        }, P = "__core-js_shared__",
        _ = o[P] || D(P, {}),
        j = Function.toString;
    "function" != typeof _.inspectSource && (_.inspectSource = function(t) {
        return j.call(t)
    });
    var I, R, M, B = _.inspectSource,
        F = o.WeakMap,
        H = "function" == typeof F && /native code/.test(B(F)),
        q = e((function(t) {
            (t.exports = function(t, e) {
                return _[t] || (_[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.8.3",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        })),
        U = 0,
        z = Math.random(),
        Y = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++U + z).toString(36)
        }, W = q("keys"),
        X = function(t) {
            return W[t] || (W[t] = Y(t))
        }, $ = {}, V = o.WeakMap;
    if (H) {
        var G = _.state || (_.state = new V),
            K = G.get,
            Q = G.has,
            J = G.set;
        I = function(t, e) {
            return e.facade = t, J.call(G, t, e), e
        }, R = function(t) {
            return K.call(G, t) || {}
        }, M = function(t) {
            return Q.call(G, t)
        }
    } else {
        var Z = X("state");
        $[Z] = !0, I = function(t, e) {
            return e.facade = t, N(t, Z, e), e
        }, R = function(t) {
            return w(t, Z) ? t[Z] : {}
        }, M = function(t) {
            return w(t, Z)
        }
    }
    var tt, et = {
            set: I,
            get: R,
            has: M,
            enforce: function(t) {
                return M(t) ? R(t) : I(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!m(e) || (n = R(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }, nt = e((function(t) {
            var e = et.get,
                n = et.enforce,
                r = String(String).split("String");
            (t.exports = function(t, e, i, a) {
                var s, u = !! a && !! a.unsafe,
                    c = !! a && !! a.enumerable,
                    l = !! a && !! a.noTargetGet;
                "function" == typeof i && ("string" != typeof e || w(i, "name") || N(i, "name", e), (s = n(i)).source || (s.source = r.join("string" == typeof e ? e : ""))), t !== o ? (u ? !l && t[e] && (c = !0) : delete t[e], c ? t[e] = i : N(t, e, i)) : c ? t[e] = i : D(e, i)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && e(this).source || B(this)
            }))
        })),
        rt = o,
        ot = function(t) {
            return "function" == typeof t ? t : void 0
        }, it = function(t, e) {
            return arguments.length < 2 ? ot(rt[t]) || ot(o[t]) : rt[t] && rt[t][e] || o[t] && o[t][e]
        }, at = Math.ceil,
        st = Math.floor,
        ut = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? st : at)(t)
        }, ct = Math.min,
        lt = function(t) {
            return t > 0 ? ct(ut(t), 9007199254740991) : 0
        }, ft = Math.max,
        dt = Math.min,
        ht = function(t) {
            return function(e, n, r) {
                var o, i = v(e),
                    a = lt(i.length),
                    s = function(t, e) {
                        var n = ut(t);
                        return n < 0 ? ft(n + e, 0) : dt(n, e)
                    }(r, a);
                if (t && n != n) {
                    for (; a > s;) if ((o = i[s++]) != o) return !0
                } else for (; a > s; s++) if ((t || s in i) && i[s] === n) return t || s || 0; return !t && -1
            }
        }, pt = {
            includes: ht(!0),
            indexOf: ht(!1)
        }.indexOf,
        gt = function(t, e) {
            var n, r = v(t),
                o = 0,
                i = [];
            for (n in r)!w($, n) && w(r, n) && i.push(n);
            for (; e.length > o;) w(r, n = e[o++]) && (~pt(i, n) || i.push(n));
            return i
        }, vt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        mt = vt.concat("length", "prototype"),
        yt = {
            f: Object.getOwnPropertyNames || function(t) {
                return gt(t, mt)
            }
        }, bt = {
            f: Object.getOwnPropertySymbols
        }, wt = it("Reflect", "ownKeys") || function(t) {
            var e = yt.f(k(t)),
                n = bt.f;
            return n ? e.concat(n(t)) : e
        }, xt = function(t, e) {
            for (var n = wt(e), r = L.f, o = A.f, i = 0; i < n.length; i++) {
                var a = n[i];
                w(t, a) || r(t, a, o(e, a))
            }
        }, Et = /#|\.prototype\./,
        Tt = function(t, e) {
            var n = St[Ct(t)];
            return n == kt || n != At && ("function" == typeof e ? i(e) : !! e)
        }, Ct = Tt.normalize = function(t) {
            return String(t).replace(Et, ".").toLowerCase()
        }, St = Tt.data = {}, At = Tt.NATIVE = "N",
        kt = Tt.POLYFILL = "P",
        Ot = Tt,
        Lt = A.f,
        Nt = function(t, e) {
            var n, r, i, a, s, u = t.target,
                c = t.global,
                l = t.stat;
            if (n = c ? o : l ? o[u] || D(u, {}) : (o[u] || {}).prototype) for (r in e) {
                    if (a = e[r], i = t.noTargetGet ? (s = Lt(n, r)) && s.value : n[r], !Ot(c ? r : u + (l ? "." : "#") + r, t.forced) && void 0 !== i) {
                        if (typeof a == typeof i) continue;
                        xt(a, i)
                    }(t.sham || i && i.sham) && N(a, "sham", !0), nt(n, r, a, t)
            }
        }, Dt = !i((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        Pt = X("IE_PROTO"),
        _t = Object.prototype,
        jt = Dt ? Object.getPrototypeOf : function(t) {
            return t = Object(g(t)), w(t, Pt) ? t[Pt] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? _t : null
        }, It = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {}
            return function(n, r) {
                return k(n),
                function(t) {
                    if (!m(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                }(r), e ? t.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        Rt = Object.keys || function(t) {
            return gt(t, vt)
        }, Mt = a ? Object.defineProperties : function(t, e) {
            k(t);
            for (var n, r = Rt(e), o = r.length, i = 0; o > i;) L.f(t, n = r[i++], e[n]);
            return t
        }, Bt = it("document", "documentElement"),
        Ft = X("IE_PROTO"),
        Ht = function() {}, qt = function(t) {
            return "<script>" + t + "</" + "script>"
        }, Ut = function() {
            try {
                tt = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            Ut = tt ? function(t) {
                t.write(qt("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(tt) : ((e = T("iframe")).style.display = "none", Bt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(qt("document.F=Object")), t.close(), t.F);
            for (var n = vt.length; n--;) delete Ut.prototype[vt[n]];
            return Ut()
        };
    $[Ft] = !0;
    var zt = Object.create || function(t, e) {
            var n;
            return null !== t ? (Ht.prototype = k(t), n = new Ht, Ht.prototype = null, n[Ft] = t) : n = Ut(), void 0 === e ? n : Mt(n, e)
        }, Yt = !! Object.getOwnPropertySymbols && !i((function() {
            return !String(Symbol())
        })),
        Wt = Yt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Xt = q("wks"),
        $t = o.Symbol,
        Vt = Wt ? $t : $t && $t.withoutSetter || Y,
        Gt = function(t) {
            return w(Xt, t) || (Yt && w($t, t) ? Xt[t] = $t[t] : Xt[t] = Vt("Symbol." + t)), Xt[t]
        }, Kt = {}, Qt = Gt("iterator"),
        Jt = Array.prototype,
        Zt = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        }, te = function(t, e, n) {
            if (Zt(t), void 0 === e) return t;
            switch (n) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }, ee = {};
    ee[Gt("toStringTag")] = "z";
    var ne = "[object z]" === String(ee),
        re = Gt("toStringTag"),
        oe = "Arguments" == d(function() {
            return arguments
        }()),
        ie = ne ? d : function(t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), re)) ? n : oe ? d(e) : "Object" == (r = d(e)) && "function" == typeof e.callee ? "Arguments" : r
        }, ae = Gt("iterator"),
        se = function(t) {
            var e = t.
            return;
            if (void 0 !== e) return k(e.call(t)).value
        }, ue = function(t, e) {
            this.stopped = t, this.result = e
        }, ce = function(t, e, n) {
            var r, o, i, a, s, u, c, l, f = n && n.that,
                d = !(!n || !n.AS_ENTRIES),
                h = !(!n || !n.IS_ITERATOR),
                p = !(!n || !n.INTERRUPTED),
                g = te(e, f, 1 + d + p),
                v = function(t) {
                    return r && se(r), new ue(!0, t)
                }, m = function(t) {
                    return d ? (k(t), p ? g(t[0], t[1], v) : g(t[0], t[1])) : p ? g(t, v) : g(t)
                };
            if (h) r = t;
            else {
                if ("function" != typeof(o = function(t) {
                    if (null != t) return t[ae] || t["@@iterator"] || Kt[ie(t)]
                }(t))) throw TypeError("Target is not iterable");
                if (void 0 !== (l = o) && (Kt.Array === l || Jt[Qt] === l)) {
                    for (i = 0, a = lt(t.length); a > i; i++) if ((s = m(t[i])) && s instanceof ue) return s;
                    return new ue(!1)
                }
                r = o.call(t)
            }
            for (u = r.next; !(c = u.call(r)).done;) {
                try {
                    s = m(c.value)
                } catch (t) {
                    throw se(r), t
                }
                if ("object" == typeof s && s && s instanceof ue) return s
            }
            return new ue(!1)
        }, le = function(t, e) {
            var n = this;
            if (!(n instanceof le)) return new le(t, e);
            It && (n = It(new Error(void 0), jt(n))), void 0 !== e && N(n, "message", String(e));
            var r = [];
            return ce(t, r.push, {
                that: r
            }), N(n, "errors", r), n
        };
    le.prototype = zt(Error.prototype, {
        constructor: l(5, le),
        message: l(5, ""),
        name: l(5, "AggregateError")
    }), Nt({
        global: !0
    }, {
        AggregateError: le
    });
    var fe = ne ? {}.toString : function() {
            return "[object " + ie(this) + "]"
        };
    ne || nt(Object.prototype, "toString", fe, {
        unsafe: !0
    });
    var de = o.Promise,
        he = L.f,
        pe = Gt("toStringTag"),
        ge = function(t, e, n) {
            t && !w(t = n ? t : t.prototype, pe) && he(t, pe, {
                configurable: !0,
                value: e
            })
        }, ve = Gt("species"),
        me = Gt("iterator"),
        ye = !1;
    try {
        var be = 0,
            we = {
                next: function() {
                    return {
                        done: !! be++
                    }
                },
                return : function() {
                    ye = !0
                }
            };
        we[me] = function() {
            return this
        }, Array.from(we, (function() {
            throw 2
        }))
    } catch (t) {}
    var xe, Ee, Te, Ce = Gt("species"),
        Se = function(t, e) {
            var n, r = k(t).constructor;
            return void 0 === r || null == (n = k(r)[Ce]) ? e : Zt(n)
        }, Ae = it("navigator", "userAgent") || "",
        ke = /(iphone|ipod|ipad).*applewebkit/i.test(Ae),
        Oe = "process" == d(o.process),
        Le = o.location,
        Ne = o.setImmediate,
        De = o.clearImmediate,
        Pe = o.process,
        _e = o.MessageChannel,
        je = o.Dispatch,
        Ie = 0,
        Re = {}, Me = "onreadystatechange",
        Be = function(t) {
            if (Re.hasOwnProperty(t)) {
                var e = Re[t];
                delete Re[t], e()
            }
        }, Fe = function(t) {
            return function() {
                Be(t)
            }
        }, He = function(t) {
            Be(t.data)
        }, qe = function(t) {
            o.postMessage(t + "", Le.protocol + "//" + Le.host)
        };
    Ne && De || (Ne = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return Re[++Ie] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, xe(Ie), Ie
    }, De = function(t) {
        delete Re[t]
    }, Oe ? xe = function(t) {
        Pe.nextTick(Fe(t))
    } : je && je.now ? xe = function(t) {
        je.now(Fe(t))
    } : _e && !ke ? (Te = (Ee = new _e).port2, Ee.port1.onmessage = He, xe = te(Te.postMessage, Te, 1)) : o.addEventListener && "function" == typeof postMessage && !o.importScripts && Le && "file:" !== Le.protocol && !i(qe) ? (xe = qe, o.addEventListener("message", He, !1)) : xe = Me in T("script") ? function(t) {
        Bt.appendChild(T("script")).onreadystatechange = function() {
            Bt.removeChild(this), Be(t)
        }
    } : function(t) {
        setTimeout(Fe(t), 0)
    });
    var Ue, ze, Ye, We, Xe, $e, Ve, Ge, Ke = {
            set: Ne,
            clear: De
        }, Qe = /web0s(?!.*chrome)/i.test(Ae),
        Je = A.f,
        Ze = Ke.set,
        tn = o.MutationObserver || o.WebKitMutationObserver,
        en = o.document,
        nn = o.process,
        rn = o.Promise,
        on = Je(o, "queueMicrotask"),
        an = on && on.value;
    an || (Ue = function() {
        var t, e;
        for (Oe && (t = nn.domain) && t.exit(); ze;) {
            e = ze.fn, ze = ze.next;
            try {
                e()
            } catch (t) {
                throw ze ? We() : Ye = void 0, t
            }
        }
        Ye = void 0, t && t.enter()
    }, ke || Oe || Qe || !tn || !en ? rn && rn.resolve ? (Ve = rn.resolve(void 0), Ge = Ve.then, We = function() {
        Ge.call(Ve, Ue)
    }) : We = Oe ? function() {
        nn.nextTick(Ue)
    } : function() {
        Ze.call(o, Ue)
    } : (Xe = !0, $e = en.createTextNode(""), new tn(Ue).observe($e, {
        characterData: !0
    }), We = function() {
        $e.data = Xe = !Xe
    }));
    var sn, un, cn = an || function(t) {
            var e = {
                fn: t,
                next: void 0
            };
            Ye && (Ye.next = e), ze || (ze = e, We()), Ye = e
        }, ln = function(t) {
            var e, n;
            this.promise = new t((function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            })), this.resolve = Zt(e), this.reject = Zt(n)
        }, fn = {
            f: function(t) {
                return new ln(t)
            }
        }, dn = function(t, e) {
            if (k(t), m(e) && e.constructor === t) return e;
            var n = fn.f(t);
            return (0, n.resolve)(e), n.promise
        }, hn = function(t) {
            try {
                return {
                    error: !1,
                    value: t()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        }, pn = o.process,
        gn = pn && pn.versions,
        vn = gn && gn.v8;
    vn ? un = (sn = vn.split("."))[0] + sn[1] : Ae && (!(sn = Ae.match(/Edge\/(\d+)/)) || sn[1] >= 74) && (sn = Ae.match(/Chrome\/(\d+)/)) && (un = sn[1]);
    var mn, yn, bn, wn, xn = un && +un,
        En = Ke.set,
        Tn = Gt("species"),
        Cn = "Promise",
        Sn = et.get,
        An = et.set,
        kn = et.getterFor(Cn),
        On = de,
        Ln = o.TypeError,
        Nn = o.document,
        Dn = o.process,
        Pn = it("fetch"),
        _n = fn.f,
        jn = _n,
        In = !! (Nn && Nn.createEvent && o.dispatchEvent),
        Rn = "function" == typeof PromiseRejectionEvent,
        Mn = "unhandledrejection",
        Bn = Ot(Cn, (function() {
            if (!(B(On) !== String(On))) {
                if (66 === xn) return !0;
                if (!Oe && !Rn) return !0
            }
            if (xn >= 51 && /native code/.test(On)) return !1;
            var t = On.resolve(1),
                e = function(t) {
                    t((function() {}), (function() {}))
                };
            return (t.constructor = {})[Tn] = e, !(t.then((function() {})) instanceof e)
        })),
        Fn = Bn || ! function(t, e) {
            if (!e && !ye) return !1;
            var n = !1;
            try {
                var r = {};
                r[me] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, t(r)
            } catch (t) {}
            return n
        }((function(t) {
            On.all(t).
            catch ((function() {}))
        })),
        Hn = function(t) {
            var e;
            return !(!m(t) || "function" != typeof(e = t.then)) && e
        }, qn = function(t, e) {
            if (!t.notified) {
                t.notified = !0;
                var n = t.reactions;
                cn((function() {
                    for (var r = t.value, o = 1 == t.state, i = 0; n.length > i;) {
                        var a, s, u, c = n[i++],
                            l = o ? c.ok : c.fail,
                            f = c.resolve,
                            d = c.reject,
                            h = c.domain;
                        try {
                            l ? (o || (2 === t.rejection && Wn(t), t.rejection = 1), !0 === l ? a = r : (h && h.enter(), a = l(r), h && (h.exit(), u = !0)), a === c.promise ? d(Ln("Promise-chain cycle")) : (s = Hn(a)) ? s.call(a, f, d) : f(a)) : d(r)
                        } catch (t) {
                            h && !u && h.exit(), d(t)
                        }
                    }
                    t.reactions = [], t.notified = !1, e && !t.rejection && zn(t)
                }))
            }
        }, Un = function(t, e, n) {
            var r, i;
            In ? ((r = Nn.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), o.dispatchEvent(r)) : r = {
                promise: e,
                reason: n
            }, !Rn && (i = o["on" + t]) ? i(r) : t === Mn && function(t, e) {
                var n = o.console;
                n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
            }("Unhandled promise rejection", n)
        }, zn = function(t) {
            En.call(o, (function() {
                var e, n = t.facade,
                    r = t.value;
                if (Yn(t) && (e = hn((function() {
                    Oe ? Dn.emit("unhandledRejection", r, n) : Un(Mn, n, r)
                })), t.rejection = Oe || Yn(t) ? 2 : 1, e.error)) throw e.value
            }))
        }, Yn = function(t) {
            return 1 !== t.rejection && !t.parent
        }, Wn = function(t) {
            En.call(o, (function() {
                var e = t.facade;
                Oe ? Dn.emit("rejectionHandled", e) : Un("rejectionhandled", e, t.value)
            }))
        }, Xn = function(t, e, n) {
            return function(r) {
                t(e, r, n)
            }
        }, $n = function(t, e, n) {
            t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, qn(t, !0))
        }, Vn = function(t, e, n) {
            if (!t.done) {
                t.done = !0, n && (t = n);
                try {
                    if (t.facade === e) throw Ln("Promise can't be resolved itself");
                    var r = Hn(e);
                    r ? cn((function() {
                        var n = {
                            done: !1
                        };
                        try {
                            r.call(e, Xn(Vn, n, t), Xn($n, n, t))
                        } catch (e) {
                            $n(n, e, t)
                        }
                    })) : (t.value = e, t.state = 1, qn(t, !1))
                } catch (e) {
                    $n({
                        done: !1
                    }, e, t)
                }
            }
        };
    Bn && (On = function(t) {
        ! function(t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation")
        }(this, On, Cn), Zt(t), mn.call(this);
        var e = Sn(this);
        try {
            t(Xn(Vn, e), Xn($n, e))
        } catch (t) {
            $n(e, t)
        }
    }, (mn = function(t) {
        An(this, {
            type: Cn,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = function(t, e, n) {
        for (var r in e) nt(t, r, e[r], n);
        return t
    }(On.prototype, {
        then: function(t, e) {
            var n = kn(this),
                r = _n(Se(this, On));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = Oe ? Dn.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && qn(n, !1), r.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), yn = function() {
        var t = new mn,
            e = Sn(t);
        this.promise = t, this.resolve = Xn(Vn, e), this.reject = Xn($n, e)
    }, fn.f = _n = function(t) {
        return t === On || t === bn ? new yn(t) : jn(t)
    }, "function" == typeof de && (wn = de.prototype.then, nt(de.prototype, "then", (function(t, e) {
        var n = this;
        return new On((function(t, e) {
            wn.call(n, t, e)
        })).then(t, e)
    }), {
        unsafe: !0
    }), "function" == typeof Pn && Nt({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return dn(On, Pn.apply(o, arguments))
        }
    }))), Nt({
        global: !0,
        wrap: !0,
        forced: Bn
    }, {
        Promise: On
    }), ge(On, Cn, !1),
    function(t) {
        var e = it(t),
            n = L.f;
        a && e && !e[ve] && n(e, ve, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }(Cn), bn = it(Cn), Nt({
        target: Cn,
        stat: !0,
        forced: Bn
    }, {
        reject: function(t) {
            var e = _n(this);
            return e.reject.call(void 0, t), e.promise
        }
    }), Nt({
        target: Cn,
        stat: !0,
        forced: Bn
    }, {
        resolve: function(t) {
            return dn(this, t)
        }
    }), Nt({
        target: Cn,
        stat: !0,
        forced: Fn
    }, {
        all: function(t) {
            var e = this,
                n = _n(e),
                r = n.resolve,
                o = n.reject,
                i = hn((function() {
                    var n = Zt(e.resolve),
                        i = [],
                        a = 0,
                        s = 1;
                    ce(t, (function(t) {
                        var u = a++,
                            c = !1;
                        i.push(void 0), s++, n.call(e, t).then((function(t) {
                            c || (c = !0, i[u] = t, --s || r(i))
                        }), o)
                    })), --s || r(i)
                }));
            return i.error && o(i.value), n.promise
        },
        race: function(t) {
            var e = this,
                n = _n(e),
                r = n.reject,
                o = hn((function() {
                    var o = Zt(e.resolve);
                    ce(t, (function(t) {
                        o.call(e, t).then(n.resolve, r)
                    }))
                }));
            return o.error && r(o.value), n.promise
        }
    }), Nt({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(t) {
            var e = this,
                n = fn.f(e),
                r = n.resolve,
                o = n.reject,
                i = hn((function() {
                    var n = Zt(e.resolve),
                        o = [],
                        i = 0,
                        a = 1;
                    ce(t, (function(t) {
                        var s = i++,
                            u = !1;
                        o.push(void 0), a++, n.call(e, t).then((function(t) {
                            u || (u = !0, o[s] = {
                                status: "fulfilled",
                                value: t
                            }, --a || r(o))
                        }), (function(t) {
                            u || (u = !0, o[s] = {
                                status: "rejected",
                                reason: t
                            }, --a || r(o))
                        }))
                    })), --a || r(o)
                }));
            return i.error && o(i.value), n.promise
        }
    });
    var Gn = "No one promise resolved";
    Nt({
        target: "Promise",
        stat: !0
    }, {
        any: function(t) {
            var e = this,
                n = fn.f(e),
                r = n.resolve,
                o = n.reject,
                i = hn((function() {
                    var n = Zt(e.resolve),
                        i = [],
                        a = 0,
                        s = 1,
                        u = !1;
                    ce(t, (function(t) {
                        var c = a++,
                            l = !1;
                        i.push(void 0), s++, n.call(e, t).then((function(t) {
                            l || u || (u = !0, r(t))
                        }), (function(t) {
                            l || u || (l = !0, i[c] = t, --s || o(new(it("AggregateError"))(i, Gn)))
                        }))
                    })), --s || o(new(it("AggregateError"))(i, Gn))
                }));
            return i.error && o(i.value), n.promise
        }
    });
    var Kn = !! de && i((function() {
        de.prototype.
        finally.call({
            then: function() {}
        }, (function() {}))
    }));
    Nt({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: Kn
    }, {
        finally: function(t) {
            var e = Se(this, it("Promise")),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return dn(e, t()).then((function() {
                    return n
                }))
            } : t, n ? function(n) {
                return dn(e, t()).then((function() {
                    throw n
                }))
            } : t)
        }
    }), "function" != typeof de || de.prototype.
    finally || nt(de.prototype, "finally", it("Promise").prototype.
    finally);
    var Qn, Jn, Zn, tr = function(t) {
            return function(e, n) {
                var r, o, i = String(g(e)),
                    a = ut(n),
                    s = i.length;
                return a < 0 || a >= s ? t ? "" : void 0 : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : r : t ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
            }
        }, er = {
            codeAt: tr(!1),
            charAt: tr(!0)
        }, nr = Gt("iterator"),
        rr = !1;
    [].keys && ("next" in (Zn = [].keys()) ? (Jn = jt(jt(Zn))) !== Object.prototype && (Qn = Jn) : rr = !0), (null == Qn || i((function() {
        var t = {};
        return Qn[nr].call(t) !== t
    }))) && (Qn = {}), w(Qn, nr) || N(Qn, nr, (function() {
        return this
    }));
    var or = {
        IteratorPrototype: Qn,
        BUGGY_SAFARI_ITERATORS: rr
    }, ir = or.IteratorPrototype,
        ar = function() {
            return this
        }, sr = or.IteratorPrototype,
        ur = or.BUGGY_SAFARI_ITERATORS,
        cr = Gt("iterator"),
        lr = "keys",
        fr = "values",
        dr = "entries",
        hr = function() {
            return this
        }, pr = function(t, e, n, r, o, i, a) {
            ! function(t, e, n) {
                var r = e + " Iterator";
                t.prototype = zt(ir, {
                    next: l(1, n)
                }), ge(t, r, !1), Kt[r] = ar
            }(n, e, r);
            var s, u, c, f = function(t) {
                    if (t === o && v) return v;
                    if (!ur && t in p) return p[t];
                    switch (t) {
                        case lr:
                        case fr:
                        case dr:
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                }, d = e + " Iterator",
                h = !1,
                p = t.prototype,
                g = p[cr] || p["@@iterator"] || o && p[o],
                v = !ur && g || f(o),
                m = "Array" == e && p.entries || g;
            if (m && (s = jt(m.call(new t)), sr !== Object.prototype && s.next && (jt(s) !== sr && (It ? It(s, sr) : "function" != typeof s[cr] && N(s, cr, hr)), ge(s, d, !0))), o == fr && g && g.name !== fr && (h = !0, v = function() {
                return g.call(this)
            }), p[cr] !== v && N(p, cr, v), Kt[e] = v, o) if (u = {
                    values: f(fr),
                    keys: i ? v : f(lr),
                    entries: f(dr)
                }, a) for (c in u)(ur || h || !(c in p)) && nt(p, c, u[c]);
                else Nt({
                        target: e,
                        proto: !0,
                        forced: ur || h
                    }, u);
            return u
        }, gr = er.charAt,
        vr = "String Iterator",
        mr = et.set,
        yr = et.getterFor(vr);
    pr(String, "String", (function(t) {
        mr(this, {
            type: vr,
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = yr(this),
            n = e.string,
            r = e.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (t = gr(n, r), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var br = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }, wr = Gt("unscopables"),
        xr = Array.prototype;
    null == xr[wr] && L.f(xr, wr, {
        configurable: !0,
        value: zt(null)
    });
    var Er = function(t) {
        xr[wr][t] = !0
    }, Tr = "Array Iterator",
        Cr = et.set,
        Sr = et.getterFor(Tr),
        Ar = pr(Array, "Array", (function(t, e) {
            Cr(this, {
                type: Tr,
                target: v(t),
                index: 0,
                kind: e
            })
        }), (function() {
            var t = Sr(this),
                e = t.target,
                n = t.kind,
                r = t.index++;
            return !e || r >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: e[r],
                done: !1
            } : {
                value: [r, e[r]],
                done: !1
            }
        }), "values");
    Kt.Arguments = Kt.Array, Er("keys"), Er("values"), Er("entries");
    var kr = Gt("iterator"),
        Or = Gt("toStringTag"),
        Lr = Ar.values;
    for (var Nr in br) {
        var Dr = o[Nr],
            Pr = Dr && Dr.prototype;
        if (Pr) {
            if (Pr[kr] !== Lr) try {
                    N(Pr, kr, Lr)
            } catch (t) {
                Pr[kr] = Lr
            }
            if (Pr[Or] || N(Pr, Or, Nr), br[Nr]) for (var _r in Ar) if (Pr[_r] !== Ar[_r]) try {
                            N(Pr, _r, Ar[_r])
                    } catch (t) {
                Pr[_r] = Ar[_r]
            }
        }
    }
    rt.Promise;
    var jr = e((function(t) {
        var e = function(t) {
            var e, n = Object.prototype,
                r = n.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                s = o.toStringTag || "@@toStringTag";

            function u(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, n) {
                    return t[e] = n
                }
            }
            function c(t, e, n, r) {
                var o = e && e.prototype instanceof v ? e : v,
                    i = Object.create(o.prototype),
                    a = new O(r || []);
                return i._invoke = function(t, e, n) {
                    var r = f;
                    return function(o, i) {
                        if (r === h) throw new Error("Generator is already running");
                        if (r === p) {
                            if ("throw" === o) throw i;
                            return N()
                        }
                        for (n.method = o, n.arg = i;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = S(a, n);
                                if (s) {
                                    if (s === g) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === f) throw r = p, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = h;
                            var u = l(t, e, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? p : d, u.arg === g) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = p, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, a), i
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = c;
            var f = "suspendedStart",
                d = "suspendedYield",
                h = "executing",
                p = "completed",
                g = {};

            function v() {}
            function m() {}
            function y() {}
            var b = {};
            b[i] = function() {
                return this
            };
            var w = Object.getPrototypeOf,
                x = w && w(w(L([])));
            x && x !== n && r.call(x, i) && (b = x);
            var E = y.prototype = v.prototype = Object.create(b);

            function T(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }
            function C(t, e) {
                function n(o, i, a, s) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var c = u.arg,
                            f = c.value;
                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            n("next", t, a, s)
                        }), (function(t) {
                            n("throw", t, a, s)
                        })) : e.resolve(f).then((function(t) {
                            c.value = t, a(c)
                        }), (function(t) {
                            return n("throw", t, a, s)
                        }))
                    }
                    s(u.arg)
                }
                var o;
                this._invoke = function(t, r) {
                    function i() {
                        return new e((function(e, o) {
                            n(t, r, e, o)
                        }))
                    }
                    return o = o ? o.then(i, i) : i()
                }
            }
            function S(t, n) {
                var r = t.iterator[n.method];
                if (r === e) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.
                        return &&(n.method = "return", n.arg = e, S(t, n), "throw" === n.method)) return g;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var o = l(r, t.iterator, n.arg);
                if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                var i = o.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, g) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
            }
            function A(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }
            function O(t) {
                this.tryEntries = [{
                        tryLoc: "root"
                    }
                ], t.forEach(A, this), this.reset(!0)
            }
            function L(t) {
                if (t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;) if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                return {
                    next: N
                }
            }
            function N() {
                return {
                    value: e,
                    done: !0
                }
            }
            return m.prototype = E.constructor = y, y.constructor = m, m.displayName = u(y, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, s, "GeneratorFunction")), t.prototype = Object.create(E), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, T(C.prototype), C.prototype[a] = function() {
                return this
            }, t.AsyncIterator = C, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new C(c(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }))
            }, T(E), u(E, s, "Generator"), E[i] = function() {
                return this
            }, E.toString = function() {
                return "[object Generator]"
            }, t.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
            }, t.values = L, O.prototype = {
                constructor: O,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !t) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !! o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            s = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                c = r.call(a, "finallyLoc");
                            if (u && c) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), g
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), g
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    })),
        Ir = e((function(e) {
            ! function(t, n) {
                e.exports = t.document ? n(t, !0) : function(t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return n(t)
                }
            }("undefined" != typeof window ? window : t, (function(t, e) {
                var n = [],
                    r = Object.getPrototypeOf,
                    o = n.slice,
                    i = n.flat ? function(t) {
                        return n.flat.call(t)
                    } : function(t) {
                        return n.concat.apply([], t)
                    }, a = n.push,
                    s = n.indexOf,
                    u = {}, c = u.toString,
                    l = u.hasOwnProperty,
                    f = l.toString,
                    d = f.call(Object),
                    h = {}, p = function(t) {
                        return "function" == typeof t && "number" != typeof t.nodeType
                    }, g = function(t) {
                        return null != t && t === t.window
                    }, v = t.document,
                    m = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function y(t, e, n) {
                    var r, o, i = (n = n || v).createElement("script");
                    if (i.text = t, e) for (r in m)(o = e[r] || e.getAttribute && e.getAttribute(r)) && i.setAttribute(r, o);
                    n.head.appendChild(i).parentNode.removeChild(i)
                }
                function b(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[c.call(t)] || "object" : typeof t
                }
                var w = "3.5.1",
                    x = function(t, e) {
                        return new x.fn.init(t, e)
                    };

                function E(t) {
                    var e = !! t && "length" in t && t.length,
                        n = b(t);
                    return !p(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }
                x.fn = x.prototype = {
                    jquery: w,
                    constructor: x,
                    length: 0,
                    toArray: function() {
                        return o.call(this)
                    },
                    get: function(t) {
                        return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
                    },
                    pushStack: function(t) {
                        var e = x.merge(this.constructor(), t);
                        return e.prevObject = this, e
                    },
                    each: function(t) {
                        return x.each(this, t)
                    },
                    map: function(t) {
                        return this.pushStack(x.map(this, (function(e, n) {
                            return t.call(e, n, e)
                        })))
                    },
                    slice: function() {
                        return this.pushStack(o.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(x.grep(this, (function(t, e) {
                            return (e + 1) % 2
                        })))
                    },
                    odd: function() {
                        return this.pushStack(x.grep(this, (function(t, e) {
                            return e % 2
                        })))
                    },
                    eq: function(t) {
                        var e = this.length,
                            n = +t + (t < 0 ? e : 0);
                        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: a,
                    sort: n.sort,
                    splice: n.splice
                }, x.extend = x.fn.extend = function() {
                    var t, e, n, r, o, i, a = arguments[0] || {}, s = 1,
                        u = arguments.length,
                        c = !1;
                    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (t = arguments[s])) for (e in t) r = t[e], "__proto__" !== e && a !== r && (c && r && (x.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[e], i = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}, o = !1, a[e] = x.extend(c, i, r)) : void 0 !== r && (a[e] = r));
                    return a
                }, x.extend({
                    expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) {
                        throw new Error(t)
                    },
                    noop: function() {},
                    isPlainObject: function(t) {
                        var e, n;
                        return !(!t || "[object Object]" !== c.call(t)) && (!(e = r(t)) || "function" == typeof(n = l.call(e, "constructor") && e.constructor) && f.call(n) === d)
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t) return !1;
                        return !0
                    },
                    globalEval: function(t, e, n) {
                        y(t, {
                            nonce: e && e.nonce
                        }, n)
                    },
                    each: function(t, e) {
                        var n, r = 0;
                        if (E(t)) for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
                        else for (r in t) if (!1 === e.call(t[r], r, t[r])) break; return t
                    },
                    makeArray: function(t, e) {
                        var n = e || [];
                        return null != t && (E(Object(t)) ? x.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
                    },
                    inArray: function(t, e, n) {
                        return null == e ? -1 : s.call(e, t, n)
                    },
                    merge: function(t, e) {
                        for (var n = +e.length, r = 0, o = t.length; r < n; r++) t[o++] = e[r];
                        return t.length = o, t
                    },
                    grep: function(t, e, n) {
                        for (var r = [], o = 0, i = t.length, a = !n; o < i; o++)!e(t[o], o) !== a && r.push(t[o]);
                        return r
                    },
                    map: function(t, e, n) {
                        var r, o, a = 0,
                            s = [];
                        if (E(t)) for (r = t.length; a < r; a++) null != (o = e(t[a], a, n)) && s.push(o);
                        else for (a in t) null != (o = e(t[a], a, n)) && s.push(o);
                        return i(s)
                    },
                    guid: 1,
                    support: h
                }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                    u["[object " + e + "]"] = e.toLowerCase()
                }));
                var T =
                /*!
                 * Sizzle CSS Selector Engine v2.3.5
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2020-03-14
                 */
                    function(t) {
                        var e, n, r, o, i, a, s, u, c, l, f, d, h, p, g, v, m, y, b, w = "sizzle" + 1 * new Date,
                            x = t.document,
                            E = 0,
                            T = 0,
                            C = ut(),
                            S = ut(),
                            A = ut(),
                            k = ut(),
                            O = function(t, e) {
                                return t === e && (f = !0), 0
                            }, L = {}.hasOwnProperty,
                            N = [],
                            D = N.pop,
                            P = N.push,
                            _ = N.push,
                            j = N.slice,
                            I = function(t, e) {
                                for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                                return -1
                            }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            M = "[\\x20\\t\\r\\n\\f]",
                            B = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            F = "\\[[\\x20\\t\\r\\n\\f]*(" + B + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + M + "*\\]",
                            H = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                            q = new RegExp(M + "+", "g"),
                            U = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            z = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            Y = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            W = new RegExp(M + "|>"),
                            X = new RegExp(H),
                            $ = new RegExp("^" + B + "$"),
                            V = {
                                ID: new RegExp("^#(" + B + ")"),
                                CLASS: new RegExp("^\\.(" + B + ")"),
                                TAG: new RegExp("^(" + B + "|[*])"),
                                ATTR: new RegExp("^" + F),
                                PSEUDO: new RegExp("^" + H),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                bool: new RegExp("^(?:" + R + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                            }, G = /HTML$/i,
                            K = /^(?:input|select|textarea|button)$/i,
                            Q = /^h\d$/i,
                            J = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            tt = /[+~]/,
                            et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            nt = function(t, e) {
                                var n = "0x" + t.slice(1) - 65536;
                                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            }, rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ot = function(t, e) {
                                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                            }, it = function() {
                                d()
                            }, at = wt((function(t) {
                                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            _.apply(N = j.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType
                        } catch (t) {
                            _ = {
                                apply: N.length ? function(t, e) {
                                    P.apply(t, j.call(e))
                                } : function(t, e) {
                                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                                    t.length = n - 1
                                }
                            }
                        }
                        function st(t, e, r, o) {
                            var i, s, c, l, f, p, m, y = e && e.ownerDocument,
                                x = e ? e.nodeType : 9;
                            if (r = r || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return r;
                            if (!o && (d(e), e = e || h, g)) {
                                if (11 !== x && (f = Z.exec(t))) if (i = f[1]) {
                                        if (9 === x) {
                                            if (!(c = e.getElementById(i))) return r;
                                            if (c.id === i) return r.push(c), r
                                        } else if (y && (c = y.getElementById(i)) && b(e, c) && c.id === i) return r.push(c), r
                                    } else {
                                        if (f[2]) return _.apply(r, e.getElementsByTagName(t)), r;
                                        if ((i = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return _.apply(r, e.getElementsByClassName(i)), r
                                    }
                                if (n.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                                    if (m = t, y = e, 1 === x && (W.test(t) || Y.test(t))) {
                                        for ((y = tt.test(t) && mt(e.parentNode) || e) === e && n.scope || ((l = e.getAttribute("id")) ? l = l.replace(rt, ot) : e.setAttribute("id", l = w)), s = (p = a(t)).length; s--;) p[s] = (l ? "#" + l : ":scope") + " " + bt(p[s]);
                                        m = p.join(",")
                                    }
                                    try {
                                        return _.apply(r, y.querySelectorAll(m)), r
                                    } catch (e) {
                                        k(t, !0)
                                    } finally {
                                        l === w && e.removeAttribute("id")
                                    }
                                }
                            }
                            return u(t.replace(U, "$1"), e, r, o)
                        }
                        function ut() {
                            var t = [];
                            return function e(n, o) {
                                return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = o
                            }
                        }
                        function ct(t) {
                            return t[w] = !0, t
                        }
                        function lt(t) {
                            var e = h.createElement("fieldset");
                            try {
                                return !!t(e)
                            } catch (t) {
                                return !1
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e), e = null
                            }
                        }
                        function ft(t, e) {
                            for (var n = t.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = e
                        }
                        function dt(t, e) {
                            var n = e && t,
                                r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                            if (r) return r;
                            if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                            return t ? 1 : -1
                        }
                        function ht(t) {
                            return function(e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t
                            }
                        }
                        function pt(t) {
                            return function(e) {
                                var n = e.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && e.type === t
                            }
                        }
                        function gt(t) {
                            return function(e) {
                                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                            }
                        }
                        function vt(t) {
                            return ct((function(e) {
                                return e = +e, ct((function(n, r) {
                                    for (var o, i = t([], n.length, e), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                                }))
                            }))
                        }
                        function mt(t) {
                            return t && void 0 !== t.getElementsByTagName && t
                        }
                        for (e in n = st.support = {}, i = st.isXML = function(t) {
                            var e = t.namespaceURI,
                                n = (t.ownerDocument || t).documentElement;
                            return !G.test(e || n && n.nodeName || "HTML")
                        }, d = st.setDocument = function(t) {
                            var e, o, a = t ? t.ownerDocument || t : x;
                            return a != h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !i(h), x != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.scope = lt((function(t) {
                                return p.appendChild(t).appendChild(h.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                            })), n.attributes = lt((function(t) {
                                return t.className = "i", !t.getAttribute("className")
                            })), n.getElementsByTagName = lt((function(t) {
                                return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                            })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = lt((function(t) {
                                return p.appendChild(t).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                            })), n.getById ? (r.filter.ID = function(t) {
                                var e = t.replace(et, nt);
                                return function(t) {
                                    return t.getAttribute("id") === e
                                }
                            }, r.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && g) {
                                    var n = e.getElementById(t);
                                    return n ? [n] : []
                                }
                            }) : (r.filter.ID = function(t) {
                                var e = t.replace(et, nt);
                                return function(t) {
                                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                            }, r.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && g) {
                                    var n, r, o, i = e.getElementById(t);
                                    if (i) {
                                        if ((n = i.getAttributeNode("id")) && n.value === t) return [i];
                                        for (o = e.getElementsByName(t), r = 0; i = o[r++];) if ((n = i.getAttributeNode("id")) && n.value === t) return [i]
                                    }
                                    return []
                                }
                            }), r.find.TAG = n.getElementsByTagName ? function(t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                            } : function(t, e) {
                                var n, r = [],
                                    o = 0,
                                    i = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return i
                            }, r.find.CLASS = n.getElementsByClassName && function(t, e) {
                                if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                            }, m = [], v = [], (n.qsa = J.test(h.querySelectorAll)) && (lt((function(t) {
                                var e;
                                p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"), t.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), (e = h.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]"), t.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                            })), lt((function(t) {
                                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var e = h.createElement("input");
                                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                            }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt((function(t) {
                                n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), m.push("!=", H)
                            })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = J.test(p.compareDocumentPosition), b = e || J.test(p.contains) ? function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t,
                                    r = e && e.parentNode;
                                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                            } : function(t, e) {
                                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                                return !1
                            }, O = e ? function(t, e) {
                                if (t === e) return f = !0, 0;
                                var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return r || (1 & (r = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t == h || t.ownerDocument == x && b(x, t) ? -1 : e == h || e.ownerDocument == x && b(x, e) ? 1 : l ? I(l, t) - I(l, e) : 0 : 4 & r ? -1 : 1)
                            } : function(t, e) {
                                if (t === e) return f = !0, 0;
                                var n, r = 0,
                                    o = t.parentNode,
                                    i = e.parentNode,
                                    a = [t],
                                    s = [e];
                                if (!o || !i) return t == h ? -1 : e == h ? 1 : o ? -1 : i ? 1 : l ? I(l, t) - I(l, e) : 0;
                                if (o === i) return dt(t, e);
                                for (n = t; n = n.parentNode;) a.unshift(n);
                                for (n = e; n = n.parentNode;) s.unshift(n);
                                for (; a[r] === s[r];) r++;
                                return r ? dt(a[r], s[r]) : a[r] == x ? -1 : s[r] == x ? 1 : 0
                            }, h) : h
                        }, st.matches = function(t, e) {
                            return st(t, null, null, e)
                        }, st.matchesSelector = function(t, e) {
                            if (d(t), n.matchesSelector && g && !k[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try {
                                    var r = y.call(t, e);
                                    if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                            } catch (t) {
                                k(e, !0)
                            }
                            return st(e, h, null, [t]).length > 0
                        }, st.contains = function(t, e) {
                            return (t.ownerDocument || t) != h && d(t), b(t, e)
                        }, st.attr = function(t, e) {
                            (t.ownerDocument || t) != h && d(t);
                            var o = r.attrHandle[e.toLowerCase()],
                                i = o && L.call(r.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                            return void 0 !== i ? i : n.attributes || !g ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                        }, st.escape = function(t) {
                            return (t + "").replace(rt, ot)
                        }, st.error = function(t) {
                            throw new Error("Syntax error, unrecognized expression: " + t)
                        }, st.uniqueSort = function(t) {
                            var e, r = [],
                                o = 0,
                                i = 0;
                            if (f = !n.detectDuplicates, l = !n.sortStable && t.slice(0), t.sort(O), f) {
                                for (; e = t[i++];) e === t[i] && (o = r.push(i));
                                for (; o--;) t.splice(r[o], 1)
                            }
                            return l = null, t
                        }, o = st.getText = function(t) {
                            var e, n = "",
                                r = 0,
                                i = t.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof t.textContent) return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                                } else if (3 === i || 4 === i) return t.nodeValue
                            } else for (; e = t[r++];) n += o(e);
                            return n
                        }, (r = st.selectors = {
                            cacheLength: 50,
                            createPseudo: ct,
                            match: V,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(t) {
                                    return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                },
                                CHILD: function(t) {
                                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                                },
                                PSEUDO: function(t) {
                                    var e, n = !t[6] && t[2];
                                    return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(t) {
                                    var e = t.replace(et, nt).toLowerCase();
                                    return "*" === t ? function() {
                                        return !0
                                    } : function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                                },
                                CLASS: function(t) {
                                    var e = C[t + " "];
                                    return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + M + "|$)")) && C(t, (function(t) {
                                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(t, e, n) {
                                    return function(r) {
                                        var o = st.attr(r, t);
                                        return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(t, e, n, r, o) {
                                    var i = "nth" !== t.slice(0, 3),
                                        a = "last" !== t.slice(-4),
                                        s = "of-type" === e;
                                    return 1 === r && 0 === o ? function(t) {
                                        return !!t.parentNode
                                    } : function(e, n, u) {
                                        var c, l, f, d, h, p, g = i !== a ? "nextSibling" : "previousSibling",
                                            v = e.parentNode,
                                            m = s && e.nodeName.toLowerCase(),
                                            y = !u && !s,
                                            b = !1;
                                        if (v) {
                                            if (i) {
                                                for (; g;) {
                                                    for (d = e; d = d[g];) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                                    p = g = "only" === t && !p && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (p = [a ? v.firstChild : v.lastChild], a && y) {
                                                for (b = (h = (c = (l = (f = (d = v)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === E && c[1]) && c[2], d = h && v.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();) if (1 === d.nodeType && ++b && d === e) {
                                                        l[t] = [E, h, b];
                                                        break
                                                    }
                                            } else if (y && (b = h = (c = (l = (f = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === E && c[1]), !1 === b) for (;
                                                (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((l = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [E, b]), d !== e)););
                                            return (b -= o) === r || b % r == 0 && b / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(t, e) {
                                    var n, o = r.pseudos[t] || r.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                                    return o[w] ? o(e) : o.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, n) {
                                        for (var r, i = o(t, e), a = i.length; a--;) t[r = I(t, i[a])] = !(n[r] = i[a])
                                    })) : function(t) {
                                        return o(t, 0, n)
                                    }) : o
                                }
                            },
                            pseudos: {
                                not: ct((function(t) {
                                    var e = [],
                                        n = [],
                                        r = s(t.replace(U, "$1"));
                                    return r[w] ? ct((function(t, e, n, o) {
                                        for (var i, a = r(t, null, o, []), s = t.length; s--;)(i = a[s]) && (t[s] = !(e[s] = i))
                                    })) : function(t, o, i) {
                                        return e[0] = t, r(e, null, i, n), e[0] = null, !n.pop()
                                    }
                                })),
                                has: ct((function(t) {
                                    return function(e) {
                                        return st(t, e).length > 0
                                    }
                                })),
                                contains: ct((function(t) {
                                    return t = t.replace(et, nt),
                                    function(e) {
                                        return (e.textContent || o(e)).indexOf(t) > -1
                                    }
                                })),
                                lang: ct((function(t) {
                                    return $.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                    function(e) {
                                        var n;
                                        do {
                                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                                })),
                                target: function(e) {
                                    var n = t.location && t.location.hash;
                                    return n && n.slice(1) === e.id
                                },
                                root: function(t) {
                                    return t === p
                                },
                                focus: function(t) {
                                    return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                                },
                                enabled: gt(!1),
                                disabled: gt(!0),
                                checked: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && !! t.checked || "option" === e && !! t.selected
                                },
                                selected: function(t) {
                                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                },
                                empty: function(t) {
                                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(t) {
                                    return !r.pseudos.empty(t)
                                },
                                header: function(t) {
                                    return Q.test(t.nodeName)
                                },
                                input: function(t) {
                                    return K.test(t.nodeName)
                                },
                                button: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && "button" === t.type || "button" === e
                                },
                                text: function(t) {
                                    var e;
                                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                },
                                first: vt((function() {
                                    return [0]
                                })),
                                last: vt((function(t, e) {
                                    return [e - 1]
                                })),
                                eq: vt((function(t, e, n) {
                                    return [n < 0 ? n + e : n]
                                })),
                                even: vt((function(t, e) {
                                    for (var n = 0; n < e; n += 2) t.push(n);
                                    return t
                                })),
                                odd: vt((function(t, e) {
                                    for (var n = 1; n < e; n += 2) t.push(n);
                                    return t
                                })),
                                lt: vt((function(t, e, n) {
                                    for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0;) t.push(r);
                                    return t
                                })),
                                gt: vt((function(t, e, n) {
                                    for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                                    return t
                                }))
                            }
                        }).pseudos.nth = r.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) r.pseudos[e] = ht(e);
                        for (e in {
                            submit: !0,
                            reset: !0
                        }) r.pseudos[e] = pt(e);

                        function yt() {}
                        function bt(t) {
                            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                            return r
                        }
                        function wt(t, e, n) {
                            var r = e.dir,
                                o = e.next,
                                i = o || r,
                                a = n && "parentNode" === i,
                                s = T++;
                            return e.first ? function(e, n, o) {
                                for (; e = e[r];) if (1 === e.nodeType || a) return t(e, n, o);
                                return !1
                            } : function(e, n, u) {
                                var c, l, f, d = [E, s];
                                if (u) {
                                    for (; e = e[r];) if ((1 === e.nodeType || a) && t(e, n, u)) return !0
                                } else for (; e = e[r];) if (1 === e.nodeType || a) if (l = (f = e[w] || (e[w] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[r] || e;
                                            else {
                                                if ((c = l[i]) && c[0] === E && c[1] === s) return d[2] = c[2];
                                                if (l[i] = d, d[2] = t(e, n, u)) return !0
                                            } return !1
                            }
                        }
                        function xt(t) {
                            return t.length > 1 ? function(e, n, r) {
                                for (var o = t.length; o--;) if (!t[o](e, n, r)) return !1;
                                return !0
                            } : t[0]
                        }
                        function Et(t, e, n, r, o) {
                            for (var i, a = [], s = 0, u = t.length, c = null != e; s < u; s++)(i = t[s]) && (n && !n(i, r, o) || (a.push(i), c && e.push(s)));
                            return a
                        }
                        function Tt(t, e, n, r, o, i) {
                            return r && !r[w] && (r = Tt(r)), o && !o[w] && (o = Tt(o, i)), ct((function(i, a, s, u) {
                                var c, l, f, d = [],
                                    h = [],
                                    p = a.length,
                                    g = i || function(t, e, n) {
                                        for (var r = 0, o = e.length; r < o; r++) st(t, e[r], n);
                                        return n
                                    }(e || "*", s.nodeType ? [s] : s, []),
                                    v = !t || !i && e ? g : Et(g, d, t, s, u),
                                    m = n ? o || (i ? t : p || r) ? [] : a : v;
                                if (n && n(v, m, s, u), r) for (c = Et(m, h), r(c, [], s, u), l = c.length; l--;)(f = c[l]) && (m[h[l]] = !(v[h[l]] = f));
                                if (i) {
                                    if (o || t) {
                                        if (o) {
                                            for (c = [], l = m.length; l--;)(f = m[l]) && c.push(v[l] = f);
                                            o(null, m = [], c, u)
                                        }
                                        for (l = m.length; l--;)(f = m[l]) && (c = o ? I(i, f) : d[l]) > -1 && (i[c] = !(a[c] = f))
                                    }
                                } else m = Et(m === a ? m.splice(p, m.length) : m), o ? o(null, a, m, u) : _.apply(a, m)
                            }))
                        }
                        function Ct(t) {
                            for (var e, n, o, i = t.length, a = r.relative[t[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = wt((function(t) {
                                    return t === e
                                }), s, !0), f = wt((function(t) {
                                    return I(e, t) > -1
                                }), s, !0), d = [function(t, n, r) {
                                        var o = !a && (r || n !== c) || ((e = n).nodeType ? l(t, n, r) : f(t, n, r));
                                        return e = null, o
                                    }
                                ]; u < i; u++) if (n = r.relative[t[u].type]) d = [wt(xt(d), n)];
                                else {
                                    if ((n = r.filter[t[u].type].apply(null, t[u].matches))[w]) {
                                        for (o = ++u; o < i && !r.relative[t[o].type]; o++);
                                        return Tt(u > 1 && xt(d), u > 1 && bt(t.slice(0, u - 1).concat({
                                            value: " " === t[u - 2].type ? "*" : ""
                                        })).replace(U, "$1"), n, u < o && Ct(t.slice(u, o)), o < i && Ct(t = t.slice(o)), o < i && bt(t))
                                    }
                                    d.push(n)
                                }
                            return xt(d)
                        }
                        return yt.prototype = r.filters = r.pseudos, r.setFilters = new yt, a = st.tokenize = function(t, e) {
                            var n, o, i, a, s, u, c, l = S[t + " "];
                            if (l) return e ? 0 : l.slice(0);
                            for (s = t, u = [], c = r.preFilter; s;) {
                                for (a in n && !(o = z.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = Y.exec(s)) && (n = o.shift(), i.push({
                                    value: n,
                                    type: o[0].replace(U, " ")
                                }), s = s.slice(n.length)), r.filter)!(o = V[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), i.push({
                                    value: n,
                                    type: a,
                                    matches: o
                                }), s = s.slice(n.length));
                                if (!n) break
                            }
                            return e ? s.length : s ? st.error(t) : S(t, u).slice(0)
                        }, s = st.compile = function(t, e) {
                            var n, o = [],
                                i = [],
                                s = A[t + " "];
                            if (!s) {
                                for (e || (e = a(t)), n = e.length; n--;)(s = Ct(e[n]))[w] ? o.push(s) : i.push(s);
                                (s = A(t, function(t, e) {
                                    var n = e.length > 0,
                                        o = t.length > 0,
                                        i = function(i, a, s, u, l) {
                                            var f, p, v, m = 0,
                                                y = "0",
                                                b = i && [],
                                                w = [],
                                                x = c,
                                                T = i || o && r.find.TAG("*", l),
                                                C = E += null == x ? 1 : Math.random() || .1,
                                                S = T.length;
                                            for (l && (c = a == h || a || l); y !== S && null != (f = T[y]); y++) {
                                                if (o && f) {
                                                    for (p = 0, a || f.ownerDocument == h || (d(f), s = !g); v = t[p++];) if (v(f, a || h, s)) {
                                                            u.push(f);
                                                            break
                                                        }
                                                    l && (E = C)
                                                }
                                                n && ((f = !v && f) && m--, i && b.push(f))
                                            }
                                            if (m += y, n && y !== m) {
                                                for (p = 0; v = e[p++];) v(b, w, a, s);
                                                if (i) {
                                                    if (m > 0) for (; y--;) b[y] || w[y] || (w[y] = D.call(u));
                                                    w = Et(w)
                                                }
                                                _.apply(u, w), l && !i && w.length > 0 && m + e.length > 1 && st.uniqueSort(u)
                                            }
                                            return l && (E = C, c = x), b
                                        };
                                    return n ? ct(i) : i
                                }(i, o))).selector = t
                            }
                            return s
                        }, u = st.select = function(t, e, n, o) {
                            var i, u, c, l, f, d = "function" == typeof t && t,
                                h = !o && a(t = d.selector || t);
                            if (n = n || [], 1 === h.length) {
                                if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === e.nodeType && g && r.relative[u[1].type]) {
                                    if (!(e = (r.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                                    d && (e = e.parentNode), t = t.slice(u.shift().value.length)
                                }
                                for (i = V.needsContext.test(t) ? 0 : u.length; i-- && (c = u[i], !r.relative[l = c.type]);) if ((f = r.find[l]) && (o = f(c.matches[0].replace(et, nt), tt.test(u[0].type) && mt(e.parentNode) || e))) {
                                        if (u.splice(i, 1), !(t = o.length && bt(u))) return _.apply(n, o), n;
                                        break
                                    }
                            }
                            return (d || s(t, h))(o, e, !g, n, !e || tt.test(t) && mt(e.parentNode) || e), n
                        }, n.sortStable = w.split("").sort(O).join("") === w, n.detectDuplicates = !! f, d(), n.sortDetached = lt((function(t) {
                            return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
                        })), lt((function(t) {
                            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                        })) || ft("type|href|height|width", (function(t, e, n) {
                            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                        })), n.attributes && lt((function(t) {
                            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                        })) || ft("value", (function(t, e, n) {
                            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                        })), lt((function(t) {
                            return null == t.getAttribute("disabled")
                        })) || ft(R, (function(t, e, n) {
                            var r;
                            if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                        })), st
                    }(t);
                x.find = T, x.expr = T.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = T.uniqueSort, x.text = T.getText, x.isXMLDoc = T.isXML, x.contains = T.contains, x.escapeSelector = T.escape;
                var C = function(t, e, n) {
                    for (var r = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                            if (o && x(t).is(n)) break;
                            r.push(t)
                        }
                    return r
                }, S = function(t, e) {
                        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                        return n
                    }, A = x.expr.match.needsContext;

                function k(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                }
                var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function L(t, e, n) {
                    return p(e) ? x.grep(t, (function(t, r) {
                        return !!e.call(t, r, t) !== n
                    })) : e.nodeType ? x.grep(t, (function(t) {
                        return t === e !== n
                    })) : "string" != typeof e ? x.grep(t, (function(t) {
                        return s.call(e, t) > -1 !== n
                    })) : x.filter(e, t, n)
                }
                x.filter = function(t, e, n) {
                    var r = e[0];
                    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? x.find.matchesSelector(r, t) ? [r] : [] : x.find.matches(t, x.grep(e, (function(t) {
                        return 1 === t.nodeType
                    })))
                }, x.fn.extend({
                    find: function(t) {
                        var e, n, r = this.length,
                            o = this;
                        if ("string" != typeof t) return this.pushStack(x(t).filter((function() {
                                for (e = 0; e < r; e++) if (x.contains(o[e], this)) return !0
                            })));
                        for (n = this.pushStack([]), e = 0; e < r; e++) x.find(t, o[e], n);
                        return r > 1 ? x.uniqueSort(n) : n
                    },
                    filter: function(t) {
                        return this.pushStack(L(this, t || [], !1))
                    },
                    not: function(t) {
                        return this.pushStack(L(this, t || [], !0))
                    },
                    is: function(t) {
                        return !!L(this, "string" == typeof t && A.test(t) ? x(t) : t || [], !1).length
                    }
                });
                var N, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (x.fn.init = function(t, e, n) {
                    var r, o;
                    if (!t) return this;
                    if (n = n || N, "string" == typeof t) {
                        if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                        if (r[1]) {
                            if (e = e instanceof x ? e[0] : e, x.merge(this, x.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : v, !0)), O.test(r[1]) && x.isPlainObject(e)) for (r in e) p(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                            return this
                        }
                        return (o = v.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                    }
                    return t.nodeType ? (this[0] = t, this.length = 1, this) : p(t) ? void 0 !== n.ready ? n.ready(t) : t(x) : x.makeArray(t, this)
                }).prototype = x.fn, N = x(v);
                var P = /^(?:parents|prev(?:Until|All))/,
                    _ = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function j(t, e) {
                    for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                    return t
                }
                x.fn.extend({
                    has: function(t) {
                        var e = x(t, this),
                            n = e.length;
                        return this.filter((function() {
                            for (var t = 0; t < n; t++) if (x.contains(this, e[t])) return !0
                        }))
                    },
                    closest: function(t, e) {
                        var n, r = 0,
                            o = this.length,
                            i = [],
                            a = "string" != typeof t && x(t);
                        if (!A.test(t)) for (; r < o; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, t))) {
                                        i.push(n);
                                        break
                                    }
                        return this.pushStack(i.length > 1 ? x.uniqueSort(i) : i)
                    },
                    index: function(t) {
                        return t ? "string" == typeof t ? s.call(x(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(t, e) {
                        return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))))
                    },
                    addBack: function(t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }
                }), x.each({
                    parent: function(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(t) {
                        return C(t, "parentNode")
                    },
                    parentsUntil: function(t, e, n) {
                        return C(t, "parentNode", n)
                    },
                    next: function(t) {
                        return j(t, "nextSibling")
                    },
                    prev: function(t) {
                        return j(t, "previousSibling")
                    },
                    nextAll: function(t) {
                        return C(t, "nextSibling")
                    },
                    prevAll: function(t) {
                        return C(t, "previousSibling")
                    },
                    nextUntil: function(t, e, n) {
                        return C(t, "nextSibling", n)
                    },
                    prevUntil: function(t, e, n) {
                        return C(t, "previousSibling", n)
                    },
                    siblings: function(t) {
                        return S((t.parentNode || {}).firstChild, t)
                    },
                    children: function(t) {
                        return S(t.firstChild)
                    },
                    contents: function(t) {
                        return null != t.contentDocument && r(t.contentDocument) ? t.contentDocument : (k(t, "template") && (t = t.content || t), x.merge([], t.childNodes))
                    }
                }, (function(t, e) {
                    x.fn[t] = function(n, r) {
                        var o = x.map(this, e, n);
                        return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (o = x.filter(r, o)), this.length > 1 && (_[t] || x.uniqueSort(o), P.test(t) && o.reverse()), this.pushStack(o)
                    }
                }));
                var I = /[^\x20\t\r\n\f]+/g;

                function R(t) {
                    return t
                }
                function M(t) {
                    throw t
                }
                function B(t, e, n, r) {
                    var o;
                    try {
                        t && p(o = t.promise) ? o.call(t).done(e).fail(n) : t && p(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(r))
                    } catch (t) {
                        n.apply(void 0, [t])
                    }
                }
                x.Callbacks = function(t) {
                    t = "string" == typeof t ? function(t) {
                        var e = {};
                        return x.each(t.match(I) || [], (function(t, n) {
                            e[n] = !0
                        })), e
                    }(t) : x.extend({}, t);
                    var e, n, r, o, i = [],
                        a = [],
                        s = -1,
                        u = function() {
                            for (o = o || t.once, r = e = !0; a.length; s = -1) for (n = a.shift(); ++s < i.length;)!1 === i[s].apply(n[0], n[1]) && t.stopOnFalse && (s = i.length, n = !1);
                            t.memory || (n = !1), e = !1, o && (i = n ? [] : "")
                        }, c = {
                            add: function() {
                                return i && (n && !e && (s = i.length - 1, a.push(n)), function e(n) {
                                    x.each(n, (function(n, r) {
                                        p(r) ? t.unique && c.has(r) || i.push(r) : r && r.length && "string" !== b(r) && e(r)
                                    }))
                                }(arguments), n && !e && u()), this
                            },
                            remove: function() {
                                return x.each(arguments, (function(t, e) {
                                    for (var n;
                                    (n = x.inArray(e, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                                })), this
                            },
                            has: function(t) {
                                return t ? x.inArray(t, i) > -1 : i.length > 0
                            },
                            empty: function() {
                                return i && (i = []), this
                            },
                            disable: function() {
                                return o = a = [], i = n = "", this
                            },
                            disabled: function() {
                                return !i
                            },
                            lock: function() {
                                return o = a = [], n || e || (i = n = ""), this
                            },
                            locked: function() {
                                return !!o
                            },
                            fireWith: function(t, n) {
                                return o || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || u()), this
                            },
                            fire: function() {
                                return c.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!r
                            }
                        };
                    return c
                }, x.extend({
                    Deferred: function(e) {
                        var n = [
                            ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                            ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                        ],
                            r = "pending",
                            o = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return i.done(arguments).fail(arguments), this
                                },
                                catch: function(t) {
                                    return o.then(null, t)
                                },
                                pipe: function() {
                                    var t = arguments;
                                    return x.Deferred((function(e) {
                                        x.each(n, (function(n, r) {
                                            var o = p(t[r[4]]) && t[r[4]];
                                            i[r[1]]((function() {
                                                var t = o && o.apply(this, arguments);
                                                t && p(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[r[0] + "With"](this, o ? [t] : arguments)
                                            }))
                                        })), t = null
                                    })).promise()
                                },
                                then: function(e, r, o) {
                                    var i = 0;

                                    function a(e, n, r, o) {
                                        return function() {
                                            var s = this,
                                                u = arguments,
                                                c = function() {
                                                    var t, c;
                                                    if (!(e < i)) {
                                                        if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                        c = t && ("object" == typeof t || "function" == typeof t) && t.then, p(c) ? o ? c.call(t, a(i, n, R, o), a(i, n, M, o)) : (i++, c.call(t, a(i, n, R, o), a(i, n, M, o), a(i, n, R, n.notifyWith))) : (r !== R && (s = void 0, u = [t]), (o || n.resolveWith)(s, u))
                                                    }
                                                }, l = o ? c : function() {
                                                    try {
                                                        c()
                                                    } catch (t) {
                                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(t, l.stackTrace), e + 1 >= i && (r !== M && (s = void 0, u = [t]), n.rejectWith(s, u))
                                                    }
                                                };
                                            e ? l() : (x.Deferred.getStackHook && (l.stackTrace = x.Deferred.getStackHook()), t.setTimeout(l))
                                        }
                                    }
                                    return x.Deferred((function(t) {
                                        n[0][3].add(a(0, t, p(o) ? o : R, t.notifyWith)), n[1][3].add(a(0, t, p(e) ? e : R)), n[2][3].add(a(0, t, p(r) ? r : M))
                                    })).promise()
                                },
                                promise: function(t) {
                                    return null != t ? x.extend(t, o) : o
                                }
                            }, i = {};
                        return x.each(n, (function(t, e) {
                            var a = e[2],
                                s = e[5];
                            o[e[1]] = a.add, s && a.add((function() {
                                r = s
                            }), n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), a.add(e[3].fire), i[e[0]] = function() {
                                return i[e[0] + "With"](this === i ? void 0 : this, arguments), this
                            }, i[e[0] + "With"] = a.fireWith
                        })), o.promise(i), e && e.call(i, i), i
                    },
                    when: function(t) {
                        var e = arguments.length,
                            n = e,
                            r = Array(n),
                            i = o.call(arguments),
                            a = x.Deferred(),
                            s = function(t) {
                                return function(n) {
                                    r[t] = this, i[t] = arguments.length > 1 ? o.call(arguments) : n, --e || a.resolveWith(r, i)
                                }
                            };
                        if (e <= 1 && (B(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || p(i[n] && i[n].then))) return a.then();
                        for (; n--;) B(i[n], s(n), a.reject);
                        return a.promise()
                    }
                });
                var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                x.Deferred.exceptionHook = function(e, n) {
                    t.console && t.console.warn && e && F.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
                }, x.readyException = function(e) {
                    t.setTimeout((function() {
                        throw e
                    }))
                };
                var H = x.Deferred();

                function q() {
                    v.removeEventListener("DOMContentLoaded", q), t.removeEventListener("load", q), x.ready()
                }
                x.fn.ready = function(t) {
                    return H.then(t).
                    catch ((function(t) {
                        x.readyException(t)
                    })), this
                }, x.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(t) {
                        (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== t && --x.readyWait > 0 || H.resolveWith(v, [x]))
                    }
                }), x.ready.then = H.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? t.setTimeout(x.ready) : (v.addEventListener("DOMContentLoaded", q), t.addEventListener("load", q));
                var U = function(t, e, n, r, o, i, a) {
                    var s = 0,
                        u = t.length,
                        c = null == n;
                    if ("object" === b(n)) for (s in o = !0, n) U(t, e, s, n[s], !0, i, a);
                    else if (void 0 !== r && (o = !0, p(r) || (a = !0), c && (a ? (e.call(t, r), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(x(t), n)
                    })), e)) for (; s < u; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                    return o ? t : c ? e.call(t) : u ? e(t[0], n) : i
                }, z = /^-ms-/,
                    Y = /-([a-z])/g;

                function W(t, e) {
                    return e.toUpperCase()
                }
                function X(t) {
                    return t.replace(z, "ms-").replace(Y, W)
                }
                var $ = function(t) {
                    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                };

                function V() {
                    this.expando = x.expando + V.uid++
                }
                V.uid = 1, V.prototype = {
                    cache: function(t) {
                        var e = t[this.expando];
                        return e || (e = {}, $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0
                        }))), e
                    },
                    set: function(t, e, n) {
                        var r, o = this.cache(t);
                        if ("string" == typeof e) o[X(e)] = n;
                        else for (r in e) o[X(r)] = e[r];
                        return o
                    },
                    get: function(t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
                    },
                    access: function(t, e, n) {
                        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                    },
                    remove: function(t, e) {
                        var n, r = t[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in r ? [e] : e.match(I) || []).length;
                                for (; n--;) delete r[e[n]]
                            }(void 0 === e || x.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !x.isEmptyObject(e)
                    }
                };
                var G = new V,
                    K = new V,
                    Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    J = /[A-Z]/g;

                function Z(t, e, n) {
                    var r;
                    if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                            try {
                                n = function(t) {
                                    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Q.test(t) ? JSON.parse(t) : t)
                                }(n)
                            } catch (t) {}
                            K.set(t, e, n)
                        } else n = void 0;
                    return n
                }
                x.extend({
                    hasData: function(t) {
                        return K.hasData(t) || G.hasData(t)
                    },
                    data: function(t, e, n) {
                        return K.access(t, e, n)
                    },
                    removeData: function(t, e) {
                        K.remove(t, e)
                    },
                    _data: function(t, e, n) {
                        return G.access(t, e, n)
                    },
                    _removeData: function(t, e) {
                        G.remove(t, e)
                    }
                }), x.fn.extend({
                    data: function(t, e) {
                        var n, r, o, i = this[0],
                            a = i && i.attributes;
                        if (void 0 === t) {
                            if (this.length && (o = K.get(i), 1 === i.nodeType && !G.get(i, "hasDataAttrs"))) {
                                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), Z(i, r, o[r]));
                                G.set(i, "hasDataAttrs", !0)
                            }
                            return o
                        }
                        return "object" == typeof t ? this.each((function() {
                            K.set(this, t)
                        })) : U(this, (function(e) {
                            var n;
                            if (i && void 0 === e) return void 0 !== (n = K.get(i, t)) || void 0 !== (n = Z(i, t)) ? n : void 0;
                            this.each((function() {
                                K.set(this, t, e)
                            }))
                        }), null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function(t) {
                        return this.each((function() {
                            K.remove(this, t)
                        }))
                    }
                }), x.extend({
                    queue: function(t, e, n) {
                        var r;
                        if (t) return e = (e || "fx") + "queue", r = G.get(t, e), n && (!r || Array.isArray(n) ? r = G.access(t, e, x.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var n = x.queue(t, e),
                            r = n.length,
                            o = n.shift(),
                            i = x._queueHooks(t, e);
                        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === e && n.unshift("inprogress"), delete i.stop, o.call(t, (function() {
                            x.dequeue(t, e)
                        }), i)), !r && i && i.empty.fire()
                    },
                    _queueHooks: function(t, e) {
                        var n = e + "queueHooks";
                        return G.get(t, n) || G.access(t, n, {
                            empty: x.Callbacks("once memory").add((function() {
                                G.remove(t, [e + "queue", n])
                            }))
                        })
                    }
                }), x.fn.extend({
                    queue: function(t, e) {
                        var n = 2;
                        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? x.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                            var n = x.queue(this, t, e);
                            x._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && x.dequeue(this, t)
                        }))
                    },
                    dequeue: function(t) {
                        return this.each((function() {
                            x.dequeue(this, t)
                        }))
                    },
                    clearQueue: function(t) {
                        return this.queue(t || "fx", [])
                    },
                    promise: function(t, e) {
                        var n, r = 1,
                            o = x.Deferred(),
                            i = this,
                            a = this.length,
                            s = function() {
                                --r || o.resolveWith(i, [i])
                            };
                        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = G.get(i[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), o.promise(e)
                    }
                });
                var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
                    nt = ["Top", "Right", "Bottom", "Left"],
                    rt = v.documentElement,
                    ot = function(t) {
                        return x.contains(t.ownerDocument, t)
                    }, it = {
                        composed: !0
                    };
                rt.getRootNode && (ot = function(t) {
                    return x.contains(t.ownerDocument, t) || t.getRootNode(it) === t.ownerDocument
                });
                var at = function(t, e) {
                    return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === x.css(t, "display")
                };

                function st(t, e, n, r) {
                    var o, i, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return x.css(t, e, "")
                        }, u = s(),
                        c = n && n[3] || (x.cssNumber[e] ? "" : "px"),
                        l = t.nodeType && (x.cssNumber[e] || "px" !== c && +u) && et.exec(x.css(t, e));
                    if (l && l[3] !== c) {
                        for (u /= 2, c = c || l[3], l = +u || 1; a--;) x.style(t, e, l + c), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), l /= i;
                        l *= 2, x.style(t, e, l + c), n = n || []
                    }
                    return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = o)), o
                }
                var ut = {};

                function ct(t) {
                    var e, n = t.ownerDocument,
                        r = t.nodeName,
                        o = ut[r];
                    return o || (e = n.body.appendChild(n.createElement(r)), o = x.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), ut[r] = o, o)
                }
                function lt(t, e) {
                    for (var n, r, o = [], i = 0, a = t.length; i < a; i++)(r = t[i]).style && (n = r.style.display, e ? ("none" === n && (o[i] = G.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && at(r) && (o[i] = ct(r))) : "none" !== n && (o[i] = "none", G.set(r, "display", n)));
                    for (i = 0; i < a; i++) null != o[i] && (t[i].style.display = o[i]);
                    return t
                }
                x.fn.extend({
                    show: function() {
                        return lt(this, !0)
                    },
                    hide: function() {
                        return lt(this)
                    },
                    toggle: function(t) {
                        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                            at(this) ? x(this).show() : x(this).hide()
                        }))
                    }
                });
                var ft, dt, ht = /^(?:checkbox|radio)$/i,
                    pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    gt = /^$|^module$|\/(?:java|ecma)script/i;
                ft = v.createDocumentFragment().appendChild(v.createElement("div")), (dt = v.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), ft.appendChild(dt), h.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !! ft.cloneNode(!0).lastChild.defaultValue, ft.innerHTML = "<option></option>", h.option = !! ft.lastChild;
                var vt = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

                function mt(t, e) {
                    var n;
                    return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && k(t, e) ? x.merge([t], n) : n
                }
                function yt(t, e) {
                    for (var n = 0, r = t.length; n < r; n++) G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"))
                }
                vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td, h.option || (vt.optgroup = vt.option = [1, "<select multiple='multiple'>", "</select>"]);
                var bt = /<|&#?\w+;/;

                function wt(t, e, n, r, o) {
                    for (var i, a, s, u, c, l, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++) if ((i = t[h]) || 0 === i) if ("object" === b(i)) x.merge(d, i.nodeType ? [i] : i);
                            else if (bt.test(i)) {
                        for (a = a || f.appendChild(e.createElement("div")), s = (pt.exec(i) || ["", ""])[1].toLowerCase(), u = vt[s] || vt._default, a.innerHTML = u[1] + x.htmlPrefilter(i) + u[2], l = u[0]; l--;) a = a.lastChild;
                        x.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
                    } else d.push(e.createTextNode(i));
                    for (f.textContent = "", h = 0; i = d[h++];) if (r && x.inArray(i, r) > -1) o && o.push(i);
                        else if (c = ot(i), a = mt(f.appendChild(i), "script"), c && yt(a), n) for (l = 0; i = a[l++];) gt.test(i.type || "") && n.push(i);
                    return f
                }
                var xt = /^key/,
                    Et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    Tt = /^([^.]*)(?:\.(.+)|)/;

                function Ct() {
                    return !0
                }
                function St() {
                    return !1
                }
                function At(t, e) {
                    return t === function() {
                        try {
                            return v.activeElement
                        } catch (t) {}
                    }() == ("focus" === e)
                }
                function kt(t, e, n, r, o, i) {
                    var a, s;
                    if ("object" == typeof e) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), e) kt(t, s, n, r, e[s], i);
                        return t
                    }
                    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = St;
                    else if (!o) return t;
                    return 1 === i && (a = o, (o = function(t) {
                        return x().off(t), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = x.guid++)), t.each((function() {
                        x.event.add(this, e, o, r, n)
                    }))
                }
                function Ot(t, e, n) {
                    n ? (G.set(t, e, !1), x.event.add(t, e, {
                        namespace: !1,
                        handler: function(t) {
                            var r, i, a = G.get(this, e);
                            if (1 & t.isTrigger && this[e]) {
                                if (a.length)(x.event.special[e] || {}).delegateType && t.stopPropagation();
                                else if (a = o.call(arguments), G.set(this, e, a), r = n(this, e), this[e](), a !== (i = G.get(this, e)) || r ? G.set(this, e, !1) : i = {}, a !== i) return t.stopImmediatePropagation(), t.preventDefault(), i.value
                            } else a.length && (G.set(this, e, {
                                    value: x.event.trigger(x.extend(a[0], x.Event.prototype), a.slice(1), this)
                                }), t.stopImmediatePropagation())
                        }
                    })) : void 0 === G.get(t, e) && x.event.add(t, e, Ct)
                }
                x.event = {
                    global: {},
                    add: function(t, e, n, r, o) {
                        var i, a, s, u, c, l, f, d, h, p, g, v = G.get(t);
                        if ($(t)) for (n.handler && (n = (i = n).handler, o = i.selector), o && x.find.matchesSelector(rt, o), n.guid || (n.guid = x.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                                return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                            }), c = (e = (e || "").match(I) || [""]).length; c--;) h = g = (s = Tt.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = x.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = x.event.special[h] || {}, l = x.extend({
                                    type: h,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: o,
                                    needsContext: o && x.expr.match.needsContext.test(o),
                                    namespace: p.join(".")
                                }, i), (d = u[h]) || ((d = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, l) : d.push(l), x.event.global[h] = !0)
                    },
                    remove: function(t, e, n, r, o) {
                        var i, a, s, u, c, l, f, d, h, p, g, v = G.hasData(t) && G.get(t);
                        if (v && (u = v.events)) {
                            for (c = (e = (e || "").match(I) || [""]).length; c--;) if (h = g = (s = Tt.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                                    for (f = x.event.special[h] || {}, d = u[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) l = d[i], !o && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(i, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(t, l));
                                    a && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, v.handle) || x.removeEvent(t, h, v.handle), delete u[h])
                                } else for (h in u) x.event.remove(t, h + e[c], n, r, !0);
                            x.isEmptyObject(u) && G.remove(t, "handle events")
                        }
                    },
                    dispatch: function(t) {
                        var e, n, r, o, i, a, s = new Array(arguments.length),
                            u = x.event.fix(t),
                            c = (G.get(this, "events") || Object.create(null))[u.type] || [],
                            l = x.event.special[u.type] || {};
                        for (s[0] = u, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                        if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                            for (a = x.event.handlers.call(this, u, c), e = 0;
                            (o = a[e++]) && !u.isPropagationStopped();) for (u.currentTarget = o.elem, n = 0;
                                (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, u), u.result
                        }
                    },
                    handlers: function(t, e) {
                        var n, r, o, i, a, s = [],
                            u = e.delegateCount,
                            c = t.target;
                        if (u && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                    for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = e[n]).selector + " "] && (a[o] = r.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length), a[o] && i.push(r);
                                    i.length && s.push({
                                        elem: c,
                                        handlers: i
                                    })
                                }
                        return c = this, u < e.length && s.push({
                            elem: c,
                            handlers: e.slice(u)
                        }), s
                    },
                    addProp: function(t, e) {
                        Object.defineProperty(x.Event.prototype, t, {
                            enumerable: !0,
                            configurable: !0,
                            get: p(e) ? function() {
                                if (this.originalEvent) return e(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[t]
                            },
                            set: function(e) {
                                Object.defineProperty(this, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                })
                            }
                        })
                    },
                    fix: function(t) {
                        return t[x.expando] ? t : new x.Event(t)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(t) {
                                var e = this || t;
                                return ht.test(e.type) && e.click && k(e, "input") && Ot(e, "click", Ct), !1
                            },
                            trigger: function(t) {
                                var e = this || t;
                                return ht.test(e.type) && e.click && k(e, "input") && Ot(e, "click"), !0
                            },
                            _default: function(t) {
                                var e = t.target;
                                return ht.test(e.type) && e.click && k(e, "input") && G.get(e, "click") || k(e, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(t) {
                                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                            }
                        }
                    }
                }, x.removeEvent = function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n)
                }, x.Event = function(t, e) {
                    if (!(this instanceof x.Event)) return new x.Event(t, e);
                    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && x.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[x.expando] = !0
                }, x.Event.prototype = {
                    constructor: x.Event,
                    isDefaultPrevented: St,
                    isPropagationStopped: St,
                    isImmediatePropagationStopped: St,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault()
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, x.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function(t) {
                        var e = t.button;
                        return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Et.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                    }
                }, x.event.addProp), x.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(t, e) {
                    x.event.special[t] = {
                        setup: function() {
                            return Ot(this, t, At), !1
                        },
                        trigger: function() {
                            return Ot(this, t), !0
                        },
                        delegateType: e
                    }
                })), x.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(t, e) {
                    x.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function(t) {
                            var n, r = this,
                                o = t.relatedTarget,
                                i = t.handleObj;
                            return o && (o === r || x.contains(r, o)) || (t.type = i.origType, n = i.handler.apply(this, arguments), t.type = e), n
                        }
                    }
                })), x.fn.extend({
                    on: function(t, e, n, r) {
                        return kt(this, t, e, n, r)
                    },
                    one: function(t, e, n, r) {
                        return kt(this, t, e, n, r, 1)
                    },
                    off: function(t, e, n) {
                        var r, o;
                        if (t && t.preventDefault && t.handleObj) return r = t.handleObj, x(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof t) {
                            for (o in t) this.off(o, e, t[o]);
                            return this
                        }
                        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each((function() {
                            x.event.remove(this, t, n, e)
                        }))
                    }
                });
                var Lt = /<script|<style|<link/i,
                    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function Pt(t, e) {
                    return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t
                }
                function _t(t) {
                    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                }
                function jt(t) {
                    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
                }
                function It(t, e) {
                    var n, r, o, i, a, s;
                    if (1 === e.nodeType) {
                        if (G.hasData(t) && (s = G.get(t).events)) for (o in G.remove(e, "handle events"), s) for (n = 0, r = s[o].length; n < r; n++) x.event.add(e, o, s[o][n]);
                        K.hasData(t) && (i = K.access(t), a = x.extend({}, i), K.set(e, a))
                    }
                }
                function Rt(t, e) {
                    var n = e.nodeName.toLowerCase();
                    "input" === n && ht.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }
                function Mt(t, e, n, r) {
                    e = i(e);
                    var o, a, s, u, c, l, f = 0,
                        d = t.length,
                        g = d - 1,
                        v = e[0],
                        m = p(v);
                    if (m || d > 1 && "string" == typeof v && !h.checkClone && Nt.test(v)) return t.each((function(o) {
                            var i = t.eq(o);
                            m && (e[0] = v.call(this, o, i.html())), Mt(i, e, n, r)
                        }));
                    if (d && (a = (o = wt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
                        for (u = (s = x.map(mt(o, "script"), _t)).length; f < d; f++) c = o, f !== g && (c = x.clone(c, !0, !0), u && x.merge(s, mt(c, "script"))), n.call(t[f], c, f);
                        if (u) for (l = s[s.length - 1].ownerDocument, x.map(s, jt), f = 0; f < u; f++) c = s[f], gt.test(c.type || "") && !G.access(c, "globalEval") && x.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, l) : y(c.textContent.replace(Dt, ""), c, l))
                    }
                    return t
                }
                function Bt(t, e, n) {
                    for (var r, o = e ? x.filter(e, t) : t, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || x.cleanData(mt(r)), r.parentNode && (n && ot(r) && yt(mt(r, "script")), r.parentNode.removeChild(r));
                    return t
                }
                x.extend({
                    htmlPrefilter: function(t) {
                        return t
                    },
                    clone: function(t, e, n) {
                        var r, o, i, a, s = t.cloneNode(!0),
                            u = ot(t);
                        if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t))) for (a = mt(s), r = 0, o = (i = mt(t)).length; r < o; r++) Rt(i[r], a[r]);
                        if (e) if (n) for (i = i || mt(t), a = a || mt(s), r = 0, o = i.length; r < o; r++) It(i[r], a[r]);
                            else It(t, s);
                        return (a = mt(s, "script")).length > 0 && yt(a, !u && mt(t, "script")), s
                    },
                    cleanData: function(t) {
                        for (var e, n, r, o = x.event.special, i = 0; void 0 !== (n = t[i]); i++) if ($(n)) {
                                if (e = n[G.expando]) {
                                    if (e.events) for (r in e.events) o[r] ? x.event.remove(n, r) : x.removeEvent(n, r, e.handle);
                                    n[G.expando] = void 0
                                }
                                n[K.expando] && (n[K.expando] = void 0)
                            }
                    }
                }), x.fn.extend({
                    detach: function(t) {
                        return Bt(this, t, !0)
                    },
                    remove: function(t) {
                        return Bt(this, t)
                    },
                    text: function(t) {
                        return U(this, (function(t) {
                            return void 0 === t ? x.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                            }))
                        }), null, t, arguments.length)
                    },
                    append: function() {
                        return Mt(this, arguments, (function(t) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pt(this, t).appendChild(t)
                        }))
                    },
                    prepend: function() {
                        return Mt(this, arguments, (function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = Pt(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        }))
                    },
                    before: function() {
                        return Mt(this, arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this)
                        }))
                    },
                    after: function() {
                        return Mt(this, arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                        }))
                    },
                    empty: function() {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.textContent = "");
                        return this
                    },
                    clone: function(t, e) {
                        return t = null != t && t, e = null == e ? t : e, this.map((function() {
                            return x.clone(this, t, e)
                        }))
                    },
                    html: function(t) {
                        return U(this, (function(t) {
                            var e = this[0] || {}, n = 0,
                                r = this.length;
                            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                            if ("string" == typeof t && !Lt.test(t) && !vt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = x.htmlPrefilter(t);
                                try {
                                    for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (x.cleanData(mt(e, !1)), e.innerHTML = t);
                                    e = 0
                                } catch (t) {}
                            }
                            e && this.empty().append(t)
                        }), null, t, arguments.length)
                    },
                    replaceWith: function() {
                        var t = [];
                        return Mt(this, arguments, (function(e) {
                            var n = this.parentNode;
                            x.inArray(this, t) < 0 && (x.cleanData(mt(this)), n && n.replaceChild(e, this))
                        }), t)
                    }
                }), x.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(t, e) {
                    x.fn[t] = function(t) {
                        for (var n, r = [], o = x(t), i = o.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), x(o[s])[e](n), a.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }));
                var Ft = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
                    Ht = function(e) {
                        var n = e.ownerDocument.defaultView;
                        return n && n.opener || (n = t), n.getComputedStyle(e)
                    }, qt = function(t, e, n) {
                        var r, o, i = {};
                        for (o in e) i[o] = t.style[o], t.style[o] = e[o];
                        for (o in r = n.call(t), e) t.style[o] = i[o];
                        return r
                    }, Ut = new RegExp(nt.join("|"), "i");

                function zt(t, e, n) {
                    var r, o, i, a, s = t.style;
                    return (n = n || Ht(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || ot(t) || (a = x.style(t, e)), !h.pixelBoxStyles() && Ft.test(a) && Ut.test(e) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
                }
                function Yt(t, e) {
                    return {
                        get: function() {
                            if (!t()) return (this.get = e).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function e() {
                        if (l) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(l);
                            var e = t.getComputedStyle(l);
                            r = "1%" !== e.top, u = 12 === n(e.marginLeft), l.style.right = "60%", a = 36 === n(e.right), o = 36 === n(e.width), l.style.position = "absolute", i = 12 === n(l.offsetWidth / 3), rt.removeChild(c), l = null
                        }
                    }
                    function n(t) {
                        return Math.round(parseFloat(t))
                    }
                    var r, o, i, a, s, u, c = v.createElement("div"),
                        l = v.createElement("div");
                    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === l.style.backgroundClip, x.extend(h, {
                        boxSizingReliable: function() {
                            return e(), o
                        },
                        pixelBoxStyles: function() {
                            return e(), a
                        },
                        pixelPosition: function() {
                            return e(), r
                        },
                        reliableMarginLeft: function() {
                            return e(), u
                        },
                        scrollboxSize: function() {
                            return e(), i
                        },
                        reliableTrDimensions: function() {
                            var e, n, r, o;
                            return null == s && (e = v.createElement("table"), n = v.createElement("tr"), r = v.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", rt.appendChild(e).appendChild(n).appendChild(r), o = t.getComputedStyle(n), s = parseInt(o.height) > 3, rt.removeChild(e)), s
                        }
                    }))
                }();
                var Wt = ["Webkit", "Moz", "ms"],
                    Xt = v.createElement("div").style,
                    $t = {};

                function Vt(t) {
                    var e = x.cssProps[t] || $t[t];
                    return e || (t in Xt ? t : $t[t] = function(t) {
                        for (var e = t[0].toUpperCase() + t.slice(1), n = Wt.length; n--;) if ((t = Wt[n] + e) in Xt) return t
                    }(t) || t)
                }
                var Gt = /^(none|table(?!-c[ea]).+)/,
                    Kt = /^--/,
                    Qt = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }, Jt = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function Zt(t, e, n) {
                    var r = et.exec(e);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
                }
                function te(t, e, n, r, o, i) {
                    var a = "width" === e ? 1 : 0,
                        s = 0,
                        u = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (u += x.css(t, n + nt[a], !0, o)), r ? ("content" === n && (u -= x.css(t, "padding" + nt[a], !0, o)), "margin" !== n && (u -= x.css(t, "border" + nt[a] + "Width", !0, o))) : (u += x.css(t, "padding" + nt[a], !0, o), "padding" !== n ? u += x.css(t, "border" + nt[a] + "Width", !0, o) : s += x.css(t, "border" + nt[a] + "Width", !0, o));
                    return !r && i >= 0 && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - i - u - s - .5)) || 0), u
                }
                function ee(t, e, n) {
                    var r = Ht(t),
                        o = (!h.boxSizingReliable() || n) && "border-box" === x.css(t, "boxSizing", !1, r),
                        i = o,
                        a = zt(t, e, r),
                        s = "offset" + e[0].toUpperCase() + e.slice(1);
                    if (Ft.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!h.boxSizingReliable() && o || !h.reliableTrDimensions() && k(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === x.css(t, "display", !1, r)) && t.getClientRects().length && (o = "border-box" === x.css(t, "boxSizing", !1, r), (i = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + te(t, e, n || (o ? "border" : "content"), i, r, a) + "px"
                }
                function ne(t, e, n, r, o) {
                    return new ne.prototype.init(t, e, n, r, o)
                }
                x.extend({
                    cssHooks: {
                        opacity: {
                            get: function(t, e) {
                                if (e) {
                                    var n = zt(t, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(t, e, n, r) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var o, i, a, s = X(e),
                                u = Kt.test(e),
                                c = t.style;
                            if (u || (e = Vt(s)), a = x.cssHooks[e] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, r)) ? o : c[e];
                            "string" === (i = typeof n) && (o = et.exec(n)) && o[1] && (n = st(t, e, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (x.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u ? c.setProperty(e, n) : c[e] = n))
                        }
                    },
                    css: function(t, e, n, r) {
                        var o, i, a, s = X(e);
                        return Kt.test(e) || (e = Vt(s)), (a = x.cssHooks[e] || x.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = zt(t, e, r)), "normal" === o && e in Jt && (o = Jt[e]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
                    }
                }), x.each(["height", "width"], (function(t, e) {
                    x.cssHooks[e] = {
                        get: function(t, n, r) {
                            if (n) return !Gt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, r) : qt(t, Qt, (function() {
                                    return ee(t, e, r)
                                }))
                        },
                        set: function(t, n, r) {
                            var o, i = Ht(t),
                                a = !h.scrollboxSize() && "absolute" === i.position,
                                s = (a || r) && "border-box" === x.css(t, "boxSizing", !1, i),
                                u = r ? te(t, e, r, s, i) : 0;
                            return s && a && (u -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(i[e]) - te(t, e, "border", !1, i) - .5)), u && (o = et.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = x.css(t, e)), Zt(0, n, u)
                        }
                    }
                })), x.cssHooks.marginLeft = Yt(h.reliableMarginLeft, (function(t, e) {
                    if (e) return (parseFloat(zt(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, {
                            marginLeft: 0
                        }, (function() {
                            return t.getBoundingClientRect().left
                        }))) + "px"
                })), x.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(t, e) {
                    x.cssHooks[t + e] = {
                        expand: function(n) {
                            for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[t + nt[r] + e] = i[r] || i[r - 2] || i[0];
                            return o
                        }
                    }, "margin" !== t && (x.cssHooks[t + e].set = Zt)
                })), x.fn.extend({
                    css: function(t, e) {
                        return U(this, (function(t, e, n) {
                            var r, o, i = {}, a = 0;
                            if (Array.isArray(e)) {
                                for (r = Ht(t), o = e.length; a < o; a++) i[e[a]] = x.css(t, e[a], !1, r);
                                return i
                            }
                            return void 0 !== n ? x.style(t, e, n) : x.css(t, e)
                        }), t, e, arguments.length > 1)
                    }
                }), x.Tween = ne, ne.prototype = {
                    constructor: ne,
                    init: function(t, e, n, r, o, i) {
                        this.elem = t, this.prop = n, this.easing = o || x.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = i || (x.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var t = ne.propHooks[this.prop];
                        return t && t.get ? t.get(this) : ne.propHooks._default.get(this)
                    },
                    run: function(t) {
                        var e, n = ne.propHooks[this.prop];
                        return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ne.propHooks._default.set(this), this
                    }
                }, ne.prototype.init.prototype = ne.prototype, ne.propHooks = {
                    _default: {
                        get: function(t) {
                            var e;
                            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                        },
                        set: function(t) {
                            x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !x.cssHooks[t.prop] && null == t.elem.style[Vt(t.prop)] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit)
                        }
                    }
                }, ne.propHooks.scrollTop = ne.propHooks.scrollLeft = {
                    set: function(t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                    }
                }, x.easing = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    _default: "swing"
                }, x.fx = ne.prototype.init, x.fx.step = {};
                var re, oe, ie = /^(?:toggle|show|hide)$/,
                    ae = /queueHooks$/;

                function se() {
                    oe && (!1 === v.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(se) : t.setTimeout(se, x.fx.interval), x.fx.tick())
                }
                function ue() {
                    return t.setTimeout((function() {
                        re = void 0
                    })), re = Date.now()
                }
                function ce(t, e) {
                    var n, r = 0,
                        o = {
                            height: t
                        };
                    for (e = e ? 1 : 0; r < 4; r += 2 - e) o["margin" + (n = nt[r])] = o["padding" + n] = t;
                    return e && (o.opacity = o.width = t), o
                }
                function le(t, e, n) {
                    for (var r, o = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), i = 0, a = o.length; i < a; i++) if (r = o[i].call(n, e, t)) return r
                }
                function fe(t, e, n) {
                    var r, o, i = 0,
                        a = fe.prefilters.length,
                        s = x.Deferred().always((function() {
                            delete u.elem
                        })),
                        u = function() {
                            if (o) return !1;
                            for (var e = re || ue(), n = Math.max(0, c.startTime + c.duration - e), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
                            return s.notifyWith(t, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
                        }, c = s.promise({
                            elem: t,
                            props: x.extend({}, e),
                            opts: x.extend(!0, {
                                specialEasing: {},
                                easing: x.easing._default
                            }, n),
                            originalProperties: e,
                            originalOptions: n,
                            startTime: re || ue(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(e, n) {
                                var r = x.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                                return c.tweens.push(r), r
                            },
                            stop: function(e) {
                                var n = 0,
                                    r = e ? c.tweens.length : 0;
                                if (o) return this;
                                for (o = !0; n < r; n++) c.tweens[n].run(1);
                                return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                            }
                        }),
                        l = c.props;
                    for (! function(t, e) {
                        var n, r, o, i, a;
                        for (n in t) if (o = e[r = X(n)], i = t[n], Array.isArray(i) && (o = i[1], i = t[n] = i[0]), n !== r && (t[r] = i, delete t[n]), (a = x.cssHooks[r]) && "expand" in a) for (n in i = a.expand(i), delete t[r], i) n in t || (t[n] = i[n], e[n] = o);
                            else e[r] = o
                    }(l, c.opts.specialEasing); i < a; i++) if (r = fe.prefilters[i].call(c, t, l, c.opts)) return p(r.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                    return x.map(l, le, c), p(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(u, {
                        elem: t,
                        anim: c,
                        queue: c.opts.queue
                    })), c
                }
                x.Animation = x.extend(fe, {
                    tweeners: {
                        "*": [function(t, e) {
                                var n = this.createTween(t, e);
                                return st(n.elem, t, et.exec(e), n), n
                            }
                        ]
                    },
                    tweener: function(t, e) {
                        p(t) ? (e = t, t = ["*"]) : t = t.match(I);
                        for (var n, r = 0, o = t.length; r < o; r++) n = t[r], fe.tweeners[n] = fe.tweeners[n] || [], fe.tweeners[n].unshift(e)
                    },
                    prefilters: [function(t, e, n) {
                            var r, o, i, a, s, u, c, l, f = "width" in e || "height" in e,
                                d = this,
                                h = {}, p = t.style,
                                g = t.nodeType && at(t),
                                v = G.get(t, "fxshow");
                            for (r in n.queue || (null == (a = x._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || s()
                            }), a.unqueued++, d.always((function() {
                                d.always((function() {
                                    a.unqueued--, x.queue(t, "fx").length || a.empty.fire()
                                }))
                            }))), e) if (o = e[r], ie.test(o)) {
                                    if (delete e[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                                        if ("show" !== o || !v || void 0 === v[r]) continue;
                                        g = !0
                                    }
                                    h[r] = v && v[r] || x.style(t, r)
                                }
                            if ((u = !x.isEmptyObject(e)) || !x.isEmptyObject(h)) for (r in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = G.get(t, "display")), "none" === (l = x.css(t, "display")) && (c ? l = c : (lt([t], !0), c = t.style.display || c, l = x.css(t, "display"), lt([t]))), ("inline" === l || "inline-block" === l && null != c) && "none" === x.css(t, "float") && (u || (d.done((function() {
                                    p.display = c
                                })), null == c && (l = p.display, c = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                }))), u = !1, h) u || (v ? "hidden" in v && (g = v.hidden) : v = G.access(t, "fxshow", {
                                        display: c
                                    }), i && (v.hidden = !g), g && lt([t], !0), d.done((function() {
                                        for (r in g || lt([t]), G.remove(t, "fxshow"), h) x.style(t, r, h[r])
                                    }))), u = le(g ? v[r] : 0, r, d), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                        }
                    ],
                    prefilter: function(t, e) {
                        e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
                    }
                }), x.speed = function(t, e, n) {
                    var r = t && "object" == typeof t ? x.extend({}, t) : {
                        complete: n || !n && e || p(t) && t,
                        duration: t,
                        easing: n && e || e && !p(e) && e
                    };
                    return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        p(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
                    }, r
                }, x.fn.extend({
                    fadeTo: function(t, e, n, r) {
                        return this.filter(at).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, n, r)
                    },
                    animate: function(t, e, n, r) {
                        var o = x.isEmptyObject(t),
                            i = x.speed(e, n, r),
                            a = function() {
                                var e = fe(this, x.extend({}, t), i);
                                (o || G.get(this, "finish")) && e.stop(!0)
                            };
                        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                    },
                    stop: function(t, e, n) {
                        var r = function(t) {
                            var e = t.stop;
                            delete t.stop, e(n)
                        };
                        return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                            var e = !0,
                                o = null != t && t + "queueHooks",
                                i = x.timers,
                                a = G.get(this);
                            if (o) a[o] && a[o].stop && r(a[o]);
                            else for (o in a) a[o] && a[o].stop && ae.test(o) && r(a[o]);
                            for (o = i.length; o--;) i[o].elem !== this || null != t && i[o].queue !== t || (i[o].anim.stop(n), e = !1, i.splice(o, 1));
                            !e && n || x.dequeue(this, t)
                        }))
                    },
                    finish: function(t) {
                        return !1 !== t && (t = t || "fx"), this.each((function() {
                            var e, n = G.get(this),
                                r = n[t + "queue"],
                                o = n[t + "queueHooks"],
                                i = x.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, x.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === t && (i[e].anim.stop(!0), i.splice(e, 1));
                            for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), x.each(["toggle", "show", "hide"], (function(t, e) {
                    var n = x.fn[e];
                    x.fn[e] = function(t, r, o) {
                        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ce(e, !0), t, r, o)
                    }
                })), x.each({
                    slideDown: ce("show"),
                    slideUp: ce("hide"),
                    slideToggle: ce("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(t, e) {
                    x.fn[t] = function(t, n, r) {
                        return this.animate(e, t, n, r)
                    }
                })), x.timers = [], x.fx.tick = function() {
                    var t, e = 0,
                        n = x.timers;
                    for (re = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                    n.length || x.fx.stop(), re = void 0
                }, x.fx.timer = function(t) {
                    x.timers.push(t), x.fx.start()
                }, x.fx.interval = 13, x.fx.start = function() {
                    oe || (oe = !0, se())
                }, x.fx.stop = function() {
                    oe = null
                }, x.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, x.fn.delay = function(e, n) {
                    return e = x.fx && x.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function(n, r) {
                        var o = t.setTimeout(n, e);
                        r.stop = function() {
                            t.clearTimeout(o)
                        }
                    }))
                },
                function() {
                    var t = v.createElement("input"),
                        e = v.createElement("select").appendChild(v.createElement("option"));
                    t.type = "checkbox", h.checkOn = "" !== t.value, h.optSelected = e.selected, (t = v.createElement("input")).value = "t", t.type = "radio", h.radioValue = "t" === t.value
                }();
                var de, he = x.expr.attrHandle;
                x.fn.extend({
                    attr: function(t, e) {
                        return U(this, x.attr, t, e, arguments.length > 1)
                    },
                    removeAttr: function(t) {
                        return this.each((function() {
                            x.removeAttr(this, t)
                        }))
                    }
                }), x.extend({
                    attr: function(t, e, n) {
                        var r, o, i = t.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return void 0 === t.getAttribute ? x.prop(t, e, n) : (1 === i && x.isXMLDoc(t) || (o = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void x.removeAttr(t, e) : o && "set" in o && void 0 !== (r = o.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (r = o.get(t, e)) ? r : null == (r = x.find.attr(t, e)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(t, e) {
                                if (!h.radioValue && "radio" === e && k(t, "input")) {
                                    var n = t.value;
                                    return t.setAttribute("type", e), n && (t.value = n), e
                                }
                            }
                        }
                    },
                    removeAttr: function(t, e) {
                        var n, r = 0,
                            o = e && e.match(I);
                        if (o && 1 === t.nodeType) for (; n = o[r++];) t.removeAttribute(n)
                    }
                }), de = {
                    set: function(t, e, n) {
                        return !1 === e ? x.removeAttr(t, n) : t.setAttribute(n, n), n
                    }
                }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                    var n = he[e] || x.find.attr;
                    he[e] = function(t, e, r) {
                        var o, i, a = e.toLowerCase();
                        return r || (i = he[a], he[a] = o, o = null != n(t, e, r) ? a : null, he[a] = i), o
                    }
                }));
                var pe = /^(?:input|select|textarea|button)$/i,
                    ge = /^(?:a|area)$/i;

                function ve(t) {
                    return (t.match(I) || []).join(" ")
                }
                function me(t) {
                    return t.getAttribute && t.getAttribute("class") || ""
                }
                function ye(t) {
                    return Array.isArray(t) ? t : "string" == typeof t && t.match(I) || []
                }
                x.fn.extend({
                    prop: function(t, e) {
                        return U(this, x.prop, t, e, arguments.length > 1)
                    },
                    removeProp: function(t) {
                        return this.each((function() {
                            delete this[x.propFix[t] || t]
                        }))
                    }
                }), x.extend({
                    prop: function(t, e, n) {
                        var r, o, i = t.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && x.isXMLDoc(t) || (e = x.propFix[e] || e, o = x.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(t, n, e)) ? r : t[e] = n : o && "get" in o && null !== (r = o.get(t, e)) ? r : t[e]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(t) {
                                var e = x.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : pe.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), h.optSelected || (x.propHooks.selected = {
                    get: function(t) {
                        var e = t.parentNode;
                        return e && e.parentNode && e.parentNode.selectedIndex, null
                    },
                    set: function(t) {
                        var e = t.parentNode;
                        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                    }
                }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    x.propFix[this.toLowerCase()] = this
                })), x.fn.extend({
                    addClass: function(t) {
                        var e, n, r, o, i, a, s, u = 0;
                        if (p(t)) return this.each((function(e) {
                                x(this).addClass(t.call(this, e, me(this)))
                            }));
                        if ((e = ye(t)).length) for (; n = this[u++];) if (o = me(n), r = 1 === n.nodeType && " " + ve(o) + " ") {
                                    for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                    o !== (s = ve(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    removeClass: function(t) {
                        var e, n, r, o, i, a, s, u = 0;
                        if (p(t)) return this.each((function(e) {
                                x(this).removeClass(t.call(this, e, me(this)))
                            }));
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = ye(t)).length) for (; n = this[u++];) if (o = me(n), r = 1 === n.nodeType && " " + ve(o) + " ") {
                                    for (a = 0; i = e[a++];) for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                    o !== (s = ve(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    toggleClass: function(t, e) {
                        var n = typeof t,
                            r = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : p(t) ? this.each((function(n) {
                            x(this).toggleClass(t.call(this, n, me(this), e), e)
                        })) : this.each((function() {
                            var e, o, i, a;
                            if (r) for (o = 0, i = x(this), a = ye(t); e = a[o++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                            else void 0 !== t && "boolean" !== n || ((e = me(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(t) {
                        var e, n, r = 0;
                        for (e = " " + t + " "; n = this[r++];) if (1 === n.nodeType && (" " + ve(me(n)) + " ").indexOf(e) > -1) return !0;
                        return !1
                    }
                });
                var be = /\r/g;
                x.fn.extend({
                    val: function(t) {
                        var e, n, r, o = this[0];
                        return arguments.length ? (r = p(t), this.each((function(n) {
                            var o;
                            1 === this.nodeType && (null == (o = r ? t.call(this, n, x(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, (function(t) {
                                return null == t ? "" : t + ""
                            }))), (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                        }))) : o ? (e = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(be, "") : null == n ? "" : n : void 0
                    }
                }), x.extend({
                    valHooks: {
                        option: {
                            get: function(t) {
                                var e = x.find.attr(t, "value");
                                return null != e ? e : ve(x.text(t))
                            }
                        },
                        select: {
                            get: function(t) {
                                var e, n, r, o = t.options,
                                    i = t.selectedIndex,
                                    a = "select-one" === t.type,
                                    s = a ? null : [],
                                    u = a ? i + 1 : o.length;
                                for (r = i < 0 ? u : a ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                                        if (e = x(n).val(), a) return e;
                                        s.push(e)
                                    }
                                return s
                            },
                            set: function(t, e) {
                                for (var n, r, o = t.options, i = x.makeArray(e), a = o.length; a--;)((r = o[a]).selected = x.inArray(x.valHooks.option.get(r), i) > -1) && (n = !0);
                                return n || (t.selectedIndex = -1), i
                            }
                        }
                    }
                }), x.each(["radio", "checkbox"], (function() {
                    x.valHooks[this] = {
                        set: function(t, e) {
                            if (Array.isArray(e)) return t.checked = x.inArray(x(t).val(), e) > -1
                        }
                    }, h.checkOn || (x.valHooks[this].get = function(t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    })
                })), h.focusin = "onfocusin" in t;
                var we = /^(?:focusinfocus|focusoutblur)$/,
                    xe = function(t) {
                        t.stopPropagation()
                    };
                x.extend(x.event, {
                    trigger: function(e, n, r, o) {
                        var i, a, s, u, c, f, d, h, m = [r || v],
                            y = l.call(e, "type") ? e.type : e,
                            b = l.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = h = s = r = r || v, 3 !== r.nodeType && 8 !== r.nodeType && !we.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[x.expando] ? e : new x.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : x.makeArray(n, [e]), d = x.event.special[y] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                            if (!o && !d.noBubble && !g(r)) {
                                for (u = d.delegateType || y, we.test(u + y) || (a = a.parentNode); a; a = a.parentNode) m.push(a), s = a;
                                s === (r.ownerDocument || v) && m.push(s.defaultView || s.parentWindow || t)
                            }
                            for (i = 0;
                            (a = m[i++]) && !e.isPropagationStopped();) h = a, e.type = i > 1 ? u : d.bindType || y, (f = (G.get(a, "events") || Object.create(null))[e.type] && G.get(a, "handle")) && f.apply(a, n), (f = c && a[c]) && f.apply && $(a) && (e.result = f.apply(a, n), !1 === e.result && e.preventDefault());
                            return e.type = y, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), n) || !$(r) || c && p(r[y]) && !g(r) && ((s = r[c]) && (r[c] = null), x.event.triggered = y, e.isPropagationStopped() && h.addEventListener(y, xe), r[y](), e.isPropagationStopped() && h.removeEventListener(y, xe), x.event.triggered = void 0, s && (r[c] = s)), e.result
                        }
                    },
                    simulate: function(t, e, n) {
                        var r = x.extend(new x.Event, n, {
                            type: t,
                            isSimulated: !0
                        });
                        x.event.trigger(r, null, e)
                    }
                }), x.fn.extend({
                    trigger: function(t, e) {
                        return this.each((function() {
                            x.event.trigger(t, e, this)
                        }))
                    },
                    triggerHandler: function(t, e) {
                        var n = this[0];
                        if (n) return x.event.trigger(t, e, n, !0)
                    }
                }), h.focusin || x.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(t, e) {
                    var n = function(t) {
                        x.event.simulate(e, t.target, x.event.fix(t))
                    };
                    x.event.special[e] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this,
                                o = G.access(r, e);
                            o || r.addEventListener(t, n, !0), G.access(r, e, (o || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this,
                                o = G.access(r, e) - 1;
                            o ? G.access(r, e, o) : (r.removeEventListener(t, n, !0), G.remove(r, e))
                        }
                    }
                }));
                var Ee = t.location,
                    Te = {
                        guid: Date.now()
                    }, Ce = /\?/;
                x.parseXML = function(e) {
                    var n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        n = (new t.DOMParser).parseFromString(e, "text/xml")
                    } catch (t) {
                        n = void 0
                    }
                    return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), n
                };
                var Se = /\[\]$/,
                    Ae = /\r?\n/g,
                    ke = /^(?:submit|button|image|reset|file)$/i,
                    Oe = /^(?:input|select|textarea|keygen)/i;

                function Le(t, e, n, r) {
                    var o;
                    if (Array.isArray(e)) x.each(e, (function(e, o) {
                            n || Se.test(t) ? r(t, o) : Le(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, r)
                        }));
                    else if (n || "object" !== b(e)) r(t, e);
                    else for (o in e) Le(t + "[" + o + "]", e[o], n, r)
                }
                x.param = function(t, e) {
                    var n, r = [],
                        o = function(t, e) {
                            var n = p(e) ? e() : e;
                            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == t) return "";
                    if (Array.isArray(t) || t.jquery && !x.isPlainObject(t)) x.each(t, (function() {
                            o(this.name, this.value)
                        }));
                    else for (n in t) Le(n, t[n], e, o);
                    return r.join("&")
                }, x.fn.extend({
                    serialize: function() {
                        return x.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var t = x.prop(this, "elements");
                            return t ? x.makeArray(t) : this
                        })).filter((function() {
                            var t = this.type;
                            return this.name && !x(this).is(":disabled") && Oe.test(this.nodeName) && !ke.test(t) && (this.checked || !ht.test(t))
                        })).map((function(t, e) {
                            var n = x(this).val();
                            return null == n ? null : Array.isArray(n) ? x.map(n, (function(t) {
                                return {
                                    name: e.name,
                                    value: t.replace(Ae, "\r\n")
                                }
                            })) : {
                                name: e.name,
                                value: n.replace(Ae, "\r\n")
                            }
                        })).get()
                    }
                });
                var Ne = /%20/g,
                    De = /#.*$/,
                    Pe = /([?&])_=[^&]*/,
                    _e = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    je = /^(?:GET|HEAD)$/,
                    Ie = /^\/\//,
                    Re = {}, Me = {}, Be = "*/".concat("*"),
                    Fe = v.createElement("a");

                function He(t) {
                    return function(e, n) {
                        "string" != typeof e && (n = e, e = "*");
                        var r, o = 0,
                            i = e.toLowerCase().match(I) || [];
                        if (p(n)) for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
                    }
                }
                function qe(t, e, n, r) {
                    var o = {}, i = t === Me;

                    function a(s) {
                        var u;
                        return o[s] = !0, x.each(t[s] || [], (function(t, s) {
                            var c = s(e, n, r);
                            return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1)
                        })), u
                    }
                    return a(e.dataTypes[0]) || !o["*"] && a("*")
                }
                function Ue(t, e) {
                    var n, r, o = x.ajaxSettings.flatOptions || {};
                    for (n in e) void 0 !== e[n] && ((o[n] ? t : r || (r = {}))[n] = e[n]);
                    return r && x.extend(!0, t, r), t
                }
                Fe.href = Ee.href, x.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Ee.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ee.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Be,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": x.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(t, e) {
                        return e ? Ue(Ue(t, x.ajaxSettings), e) : Ue(x.ajaxSettings, t)
                    },
                    ajaxPrefilter: He(Re),
                    ajaxTransport: He(Me),
                    ajax: function(e, n) {
                        "object" == typeof e && (n = e, e = void 0), n = n || {};
                        var r, o, i, a, s, u, c, l, f, d, h = x.ajaxSetup({}, n),
                            p = h.context || h,
                            g = h.context && (p.nodeType || p.jquery) ? x(p) : x.event,
                            m = x.Deferred(),
                            y = x.Callbacks("once memory"),
                            b = h.statusCode || {}, w = {}, E = {}, T = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function(t) {
                                    var e;
                                    if (c) {
                                        if (!a) for (a = {}; e = _e.exec(i);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                        e = a[t.toLowerCase() + " "]
                                    }
                                    return null == e ? null : e.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return c ? i : null
                                },
                                setRequestHeader: function(t, e) {
                                    return null == c && (t = E[t.toLowerCase()] = E[t.toLowerCase()] || t, w[t] = e), this
                                },
                                overrideMimeType: function(t) {
                                    return null == c && (h.mimeType = t), this
                                },
                                statusCode: function(t) {
                                    var e;
                                    if (t) if (c) C.always(t[C.status]);
                                        else for (e in t) b[e] = [b[e], t[e]];
                                    return this
                                },
                                abort: function(t) {
                                    var e = t || T;
                                    return r && r.abort(e), S(0, e), this
                                }
                            };
                        if (m.promise(C), h.url = ((e || h.url || Ee.href) + "").replace(Ie, Ee.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                            u = v.createElement("a");
                            try {
                                u.href = h.url, u.href = u.href, h.crossDomain = Fe.protocol + "//" + Fe.host != u.protocol + "//" + u.host
                            } catch (t) {
                                h.crossDomain = !0
                            }
                        }
                        if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), qe(Re, h, n, C), c) return C;
                        for (f in (l = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !je.test(h.type), o = h.url.replace(De, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ne, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ce.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Pe, "$1"), d = (Ce.test(o) ? "&" : "?") + "_=" + Te.guid+++d), h.url = o + d), h.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(f, h.headers[f]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(p, C, h) || c)) return C.abort();
                        if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = qe(Me, h, n, C)) {
                            if (C.readyState = 1, l && g.trigger("ajaxSend", [C, h]), c) return C;
                            h.async && h.timeout > 0 && (s = t.setTimeout((function() {
                                C.abort("timeout")
                            }), h.timeout));
                            try {
                                c = !1, r.send(w, S)
                            } catch (t) {
                                if (c) throw t;
                                S(-1, t)
                            }
                        } else S(-1, "No Transport");

                        function S(e, n, a, u) {
                            var f, d, v, w, E, T = n;
                            c || (c = !0, s && t.clearTimeout(s), r = void 0, i = u || "", C.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (w = function(t, e, n) {
                                for (var r, o, i, a, s = t.contents, u = t.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (r) for (o in s) if (s[o] && s[o].test(r)) {
                                            u.unshift(o);
                                            break
                                        }
                                if (u[0] in n) i = u[0];
                                else {
                                    for (o in n) {
                                        if (!u[0] || t.converters[o + " " + u[0]]) {
                                            i = o;
                                            break
                                        }
                                        a || (a = o)
                                    }
                                    i = i || a
                                } if (i) return i !== u[0] && u.unshift(i), n[i]
                            }(h, C, a)), !f && x.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function() {}), w = function(t, e, n, r) {
                                var o, i, a, s, u, c = {}, l = t.dataTypes.slice();
                                if (l[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                                for (i = l.shift(); i;) if (t.responseFields[i] && (n[t.responseFields[i]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = i, i = l.shift()) if ("*" === i) i = u;
                                        else if ("*" !== u && u !== i) {
                                    if (!(a = c[u + " " + i] || c["* " + i])) for (o in c) if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                                !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], l.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a) if (a && t.throws) e = a(e);
                                        else try {
                                                e = a(e)
                                        } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: a ? t : "No conversion from " + u + " to " + i
                                        }
                                    }
                                }
                                return {
                                    state: "success",
                                    data: e
                                }
                            }(h, w, C, f), f ? (h.ifModified && ((E = C.getResponseHeader("Last-Modified")) && (x.lastModified[o] = E), (E = C.getResponseHeader("etag")) && (x.etag[o] = E)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, d = w.data, f = !(v = w.error))) : (v = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || T) + "", f ? m.resolveWith(p, [d, T, C]) : m.rejectWith(p, [C, T, v]), C.statusCode(b), b = void 0, l && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : v]), y.fireWith(p, [C, T]), l && (g.trigger("ajaxComplete", [C, h]), --x.active || x.event.trigger("ajaxStop")))
                        }
                        return C
                    },
                    getJSON: function(t, e, n) {
                        return x.get(t, e, n, "json")
                    },
                    getScript: function(t, e) {
                        return x.get(t, void 0, e, "script")
                    }
                }), x.each(["get", "post"], (function(t, e) {
                    x[e] = function(t, n, r, o) {
                        return p(n) && (o = o || r, r = n, n = void 0), x.ajax(x.extend({
                            url: t,
                            type: e,
                            dataType: o,
                            data: n,
                            success: r
                        }, x.isPlainObject(t) && t))
                    }
                })), x.ajaxPrefilter((function(t) {
                    var e;
                    for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
                })), x._evalUrl = function(t, e, n) {
                    return x.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(t) {
                            x.globalEval(t, e, n)
                        }
                    })
                }, x.fn.extend({
                    wrapAll: function(t) {
                        var e;
                        return this[0] && (p(t) && (t = t.call(this[0])), e = x(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                            for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                            return t
                        })).append(this)), this
                    },
                    wrapInner: function(t) {
                        return p(t) ? this.each((function(e) {
                            x(this).wrapInner(t.call(this, e))
                        })) : this.each((function() {
                            var e = x(this),
                                n = e.contents();
                            n.length ? n.wrapAll(t) : e.append(t)
                        }))
                    },
                    wrap: function(t) {
                        var e = p(t);
                        return this.each((function(n) {
                            x(this).wrapAll(e ? t.call(this, n) : t)
                        }))
                    },
                    unwrap: function(t) {
                        return this.parent(t).not("body").each((function() {
                            x(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), x.expr.pseudos.hidden = function(t) {
                    return !x.expr.pseudos.visible(t)
                }, x.expr.pseudos.visible = function(t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                }, x.ajaxSettings.xhr = function() {
                    try {
                        return new t.XMLHttpRequest
                    } catch (t) {}
                };
                var ze = {
                    0: 200,
                    1223: 204
                }, Ye = x.ajaxSettings.xhr();
                h.cors = !! Ye && "withCredentials" in Ye, h.ajax = Ye = !! Ye, x.ajaxTransport((function(e) {
                    var n, r;
                    if (h.cors || Ye && !e.crossDomain) return {
                            send: function(o, i) {
                                var a, s = e.xhr();
                                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                                n = function(t) {
                                    return function() {
                                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(ze[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                    }
                                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                    4 === s.readyState && t.setTimeout((function() {
                                        n && r()
                                    }))
                                }, n = n("abort");
                                try {
                                    s.send(e.hasContent && e.data || null)
                                } catch (t) {
                                    if (n) throw t
                                }
                            },
                            abort: function() {
                                n && n()
                            }
                    }
                })), x.ajaxPrefilter((function(t) {
                    t.crossDomain && (t.contents.script = !1)
                })), x.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(t) {
                            return x.globalEval(t), t
                        }
                    }
                }), x.ajaxPrefilter("script", (function(t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                })), x.ajaxTransport("script", (function(t) {
                    var e, n;
                    if (t.crossDomain || t.scriptAttrs) return {
                            send: function(r, o) {
                                e = x("<script>").attr(t.scriptAttrs || {}).prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", n = function(t) {
                                    e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                                }), v.head.appendChild(e[0])
                            },
                            abort: function() {
                                n && n()
                            }
                    }
                }));
                var We, Xe = [],
                    $e = /(=)\?(?=&|$)|\?\?/;
                x.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var t = Xe.pop() || x.expando + "_" + Te.guid++;
                        return this[t] = !0, t
                    }
                }), x.ajaxPrefilter("json jsonp", (function(e, n, r) {
                    var o, i, a, s = !1 !== e.jsonp && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($e, "$1" + o) : !1 !== e.jsonp && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                            return a || x.error(o + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", i = t[o], t[o] = function() {
                        a = arguments
                    }, r.always((function() {
                        void 0 === i ? x(t).removeProp(o) : t[o] = i, e[o] && (e.jsonpCallback = n.jsonpCallback, Xe.push(o)), a && p(i) && i(a[0]), a = i = void 0
                    })), "script"
                })), h.createHTMLDocument = ((We = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === We.childNodes.length), x.parseHTML = function(t, e, n) {
                    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (h.createHTMLDocument ? ((r = (e = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, e.head.appendChild(r)) : e = v), i = !n && [], (o = O.exec(t)) ? [e.createElement(o[1])] : (o = wt([t], e, i), i && i.length && x(i).remove(), x.merge([], o.childNodes)));
                    var r, o, i
                }, x.fn.load = function(t, e, n) {
                    var r, o, i, a = this,
                        s = t.indexOf(" ");
                    return s > -1 && (r = ve(t.slice(s)), t = t.slice(0, s)), p(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && x.ajax({
                        url: t,
                        type: o || "GET",
                        dataType: "html",
                        data: e
                    }).done((function(t) {
                        i = arguments, a.html(r ? x("<div>").append(x.parseHTML(t)).find(r) : t)
                    })).always(n && function(t, e) {
                        a.each((function() {
                            n.apply(this, i || [t.responseText, e, t])
                        }))
                    }), this
                }, x.expr.pseudos.animated = function(t) {
                    return x.grep(x.timers, (function(e) {
                        return t === e.elem
                    })).length
                }, x.offset = {
                    setOffset: function(t, e, n) {
                        var r, o, i, a, s, u, c = x.css(t, "position"),
                            l = x(t),
                            f = {};
                        "static" === c && (t.style.position = "relative"), s = l.offset(), i = x.css(t, "top"), u = x.css(t, "left"), ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1 ? (a = (r = l.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), p(e) && (e = e.call(t, n, x.extend({}, s))), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + o), "using" in e ? e.using.call(t, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), l.css(f))
                    }
                }, x.fn.extend({
                    offset: function(t) {
                        if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                                x.offset.setOffset(this, t, e)
                            }));
                        var e, n, r = this[0];
                        return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                            top: e.top + n.pageYOffset,
                            left: e.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var t, e, n, r = this[0],
                                o = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === x.css(r, "position")) e = r.getBoundingClientRect();
                            else {
                                for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === x.css(t, "position");) t = t.parentNode;
                                t && t !== r && 1 === t.nodeType && ((o = x(t).offset()).top += x.css(t, "borderTopWidth", !0), o.left += x.css(t, "borderLeftWidth", !0))
                            }
                            return {
                                top: e.top - o.top - x.css(r, "marginTop", !0),
                                left: e.left - o.left - x.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var t = this.offsetParent; t && "static" === x.css(t, "position");) t = t.offsetParent;
                            return t || rt
                        }))
                    }
                }), x.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(t, e) {
                    var n = "pageYOffset" === e;
                    x.fn[t] = function(r) {
                        return U(this, (function(t, r, o) {
                            var i;
                            if (g(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === o) return i ? i[e] : t[r];
                            i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : t[r] = o
                        }), t, r, arguments.length)
                    }
                })), x.each(["top", "left"], (function(t, e) {
                    x.cssHooks[e] = Yt(h.pixelPosition, (function(t, n) {
                        if (n) return n = zt(t, e), Ft.test(n) ? x(t).position()[e] + "px" : n
                    }))
                })), x.each({
                    Height: "height",
                    Width: "width"
                }, (function(t, e) {
                    x.each({
                        padding: "inner" + t,
                        content: e,
                        "": "outer" + t
                    }, (function(n, r) {
                        x.fn[r] = function(o, i) {
                            var a = arguments.length && (n || "boolean" != typeof o),
                                s = n || (!0 === o || !0 === i ? "margin" : "border");
                            return U(this, (function(e, n, o) {
                                var i;
                                return g(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === o ? x.css(e, n, s) : x.style(e, n, o, s)
                            }), e, a ? o : void 0, a)
                        }
                    }))
                })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                    x.fn[e] = function(t) {
                        return this.on(e, t)
                    }
                })), x.fn.extend({
                    bind: function(t, e, n) {
                        return this.on(t, null, e, n)
                    },
                    unbind: function(t, e) {
                        return this.off(t, null, e)
                    },
                    delegate: function(t, e, n, r) {
                        return this.on(e, t, n, r)
                    },
                    undelegate: function(t, e, n) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                    },
                    hover: function(t, e) {
                        return this.mouseenter(t).mouseleave(e || t)
                    }
                }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
                    x.fn[e] = function(t, n) {
                        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                    }
                }));
                var Ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                x.proxy = function(t, e) {
                    var n, r, i;
                    if ("string" == typeof e && (n = t[e], e = t, t = n), p(t)) return r = o.call(arguments, 2), (i = function() {
                            return t.apply(e || this, r.concat(o.call(arguments)))
                        }).guid = t.guid = t.guid || x.guid++, i
                }, x.holdReady = function(t) {
                    t ? x.readyWait++ : x.ready(!0)
                }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = k, x.isFunction = p, x.isWindow = g, x.camelCase = X, x.type = b, x.now = Date.now, x.isNumeric = function(t) {
                    var e = x.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                }, x.trim = function(t) {
                    return null == t ? "" : (t + "").replace(Ve, "")
                };
                var Ge = t.jQuery,
                    Ke = t.$;
                return x.noConflict = function(e) {
                    return t.$ === x && (t.$ = Ke), e && t.jQuery === x && (t.jQuery = Ge), x
                }, void 0 === e && (t.jQuery = t.$ = x), x
            }))
        })),
        Rr = (e((function(t, e) {
            t.exports = (
            /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */window.matchMedia || (window.matchMedia = function() {
                var t = window.styleMedia || window.media;
                if (!t) {
                    var e = document.createElement("style"),
                        n = document.getElementsByTagName("script")[0],
                        r = null;
                    e.type = "text/css", e.id = "matchmediajs-test", n.parentNode.insertBefore(e, n), r = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                        matchMedium: function(t) {
                            var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                            return e.styleSheet ? e.styleSheet.cssText = n : e.textContent = n, "1px" === r.width
                        }
                    }
                }
                return function(e) {
                    return {
                        matches: t.matchMedium(e || "all"),
                        media: e || "all"
                    }
                }
            }())
            /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
            , function() {
                if (window.matchMedia && window.matchMedia("all").addListener) return !1;
                var t = window.matchMedia,
                    e = t("only all").matches,
                    n = !1,
                    r = 0,
                    o = [],
                    i = function(e) {
                        clearTimeout(r), r = setTimeout((function() {
                            for (var e = 0, n = o.length; e < n; e++) {
                                var r = o[e].mql,
                                    i = o[e].listeners || [],
                                    a = t(r.media).matches;
                                if (a !== r.matches) {
                                    r.matches = a;
                                    for (var s = 0, u = i.length; s < u; s++) i[s].call(window, r)
                                }
                            }
                        }), 30)
                    };
                window.matchMedia = function(r) {
                    var a = t(r),
                        s = [],
                        u = 0;
                    return a.addListener = function(t) {
                        e && (n || (n = !0, window.addEventListener("resize", i, !0)), 0 === u && (u = o.push({
                            mql: a,
                            listeners: s
                        })), s.push(t))
                    }, a.removeListener = function(t) {
                        for (var e = 0, n = s.length; e < n; e++) s[e] === t && s.splice(e, 1)
                    }, a
                }
            }(), function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
                    var r = (new Date).getTime(),
                        o = Math.max(0, 16 - (r - t)),
                        i = window.setTimeout((function() {
                            e(r + o)
                        }), o);
                    return t = r + o, i
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }(), "function" != typeof window.CustomEvent && function() {
                function t(t, e) {
                    e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
                }
                t.prototype = window.Event.prototype, window.CustomEvent = t
            }(), function(t, e, n) {
                var r = {}, o = [],
                    i = [],
                    a = [],
                    s = function(t, e, n) {
                        t.dataset ? t.dataset[e] = n : t.setAttribute("data-" + e, n)
                    };
                return r.obtainGridSettings = function(e) {
                    var n = t.getComputedStyle(e, ":before").getPropertyValue("content").slice(1, -1),
                        r = n.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),
                        o = 1,
                        i = [];
                    return r ? (o = r[1], i = (i = r[2]) ? i.split(".") : ["column"]) : (r = n.match(/^\s*\.(.+)\s+(\d+)\s*$/)) && (i = r[1], (o = r[2]) && (o = o.split("."))), {
                        numberOfColumns: o,
                        columnClasses: i
                    }
                }, r.addColumns = function(t, n) {
                    for (var o, i = r.obtainGridSettings(t), a = i.numberOfColumns, u = i.columnClasses, c = new Array(+a), l = e.createDocumentFragment(), f = a; 0 != f--;) o = "[data-columns] > *:nth-child(" + a + "n-" + f + ")", c.push(n.querySelectorAll(o));
                    c.forEach((function(t) {
                        var n = e.createElement("div"),
                            r = e.createDocumentFragment();
                        n.className = u.join(" "), Array.prototype.forEach.call(t, (function(t) {
                            r.appendChild(t)
                        })), n.appendChild(r), l.appendChild(n)
                    })), t.appendChild(l), s(t, "columns", a)
                }, r.removeColumns = function(n) {
                    var r = e.createRange();
                    r.selectNodeContents(n);
                    var o = Array.prototype.filter.call(r.extractContents().childNodes, (function(e) {
                        return e instanceof t.HTMLElement
                    })),
                        i = o.length,
                        a = o[0].childNodes.length,
                        u = new Array(a * i);
                    Array.prototype.forEach.call(o, (function(t, e) {
                        Array.prototype.forEach.call(t.children, (function(t, n) {
                            u[n * i + e] = t
                        }))
                    }));
                    var c = e.createElement("div");
                    return s(c, "columns", 0), u.filter((function(t) {
                        return !!t
                    })).forEach((function(t) {
                        c.appendChild(t)
                    })), c
                }, r.recreateColumns = function(e) {
                    t.requestAnimationFrame((function() {
                        r.addColumns(e, r.removeColumns(e));
                        var t = new CustomEvent("columnsChange");
                        e.dispatchEvent(t)
                    }))
                }, r.mediaQueryChange = function(t) {
                    t.matches && Array.prototype.forEach.call(o, r.recreateColumns)
                }, r.getCSSRules = function(t) {
                    var e;
                    try {
                        e = t.sheet.cssRules || t.sheet.rules
                    } catch (t) {
                        return []
                    }
                    return e || []
                }, r.getStylesheets = function() {
                    var t = Array.prototype.slice.call(e.querySelectorAll("style"));
                    return t.forEach((function(e, n) {
                        "text/css" !== e.type && "" !== e.type && t.splice(n, 1)
                    })), Array.prototype.concat.call(t, Array.prototype.slice.call(e.querySelectorAll("link[rel='stylesheet']")))
                }, r.mediaRuleHasColumnsSelector = function(t) {
                    var e, n;
                    try {
                        e = t.length
                    } catch (t) {
                        e = 0
                    }
                    for (; e--;) if ((n = t[e]).selectorText && n.selectorText.match(/\[data-columns\](.*)::?before$/)) return !0;
                    return !1
                }, r.scanMediaQueries = function() {
                    var e = [];
                    if (t.matchMedia) {
                        r.getStylesheets().forEach((function(t) {
                            Array.prototype.forEach.call(r.getCSSRules(t), (function(t) {
                                try {
                                    t.media && t.cssRules && r.mediaRuleHasColumnsSelector(t.cssRules) && e.push(t)
                                } catch (t) {}
                            }))
                        }));
                        var n = i.filter((function(t) {
                            return -1 === e.indexOf(t)
                        }));
                        a.filter((function(t) {
                            return -1 !== n.indexOf(t.rule)
                        })).forEach((function(t) {
                            t.mql.removeListener(r.mediaQueryChange)
                        })), a = a.filter((function(t) {
                            return -1 === n.indexOf(t.rule)
                        })), e.filter((function(t) {
                            return -1 == i.indexOf(t)
                        })).forEach((function(e) {
                            var n = t.matchMedia(e.media.mediaText);
                            n.addListener(r.mediaQueryChange), a.push({
                                rule: e,
                                mql: n
                            })
                        })), i.length = 0, i = e
                    }
                }, r.rescanMediaQueries = function() {
                    r.scanMediaQueries(), Array.prototype.forEach.call(o, r.recreateColumns)
                }, r.nextElementColumnIndex = function(t, e) {
                    var n, r, o = t.children,
                        i = o.length,
                        a = 0,
                        s = 0;
                    for (r = 0; r < i; r++) n = o[r].children.length + (e[r].children || e[r].childNodes).length, 0 === a && (a = n), n < a && (s = r, a = n);
                    return s
                }, r.createFragmentsList = function(t) {
                    for (var n = new Array(t), r = 0; r !== t;) n[r] = e.createDocumentFragment(), r++;
                    return n
                }, r.appendElements = function(t, e) {
                    var n = t.children,
                        o = n.length,
                        i = r.createFragmentsList(o);
                    Array.prototype.forEach.call(e, (function(e) {
                        var n = r.nextElementColumnIndex(t, i);
                        i[n].appendChild(e)
                    })), Array.prototype.forEach.call(n, (function(t, e) {
                        t.appendChild(i[e])
                    }))
                }, r.prependElements = function(t, n) {
                    var o = t.children,
                        i = o.length,
                        a = r.createFragmentsList(i),
                        s = i - 1;
                    n.forEach((function(t) {
                        var e = a[s];
                        e.insertBefore(t, e.firstChild), 0 === s ? s = i - 1 : s--
                    })), Array.prototype.forEach.call(o, (function(t, e) {
                        t.insertBefore(a[e], t.firstChild)
                    }));
                    for (var u = e.createDocumentFragment(), c = n.length % i; 0 != c--;) u.appendChild(t.lastChild);
                    t.insertBefore(u, t.firstChild)
                }, r.registerGrid = function(n) {
                    if ("none" !== t.getComputedStyle(n).display) {
                        var i = e.createRange();
                        i.selectNodeContents(n);
                        var a = e.createElement("div");
                        a.appendChild(i.extractContents()), s(a, "columns", 0), r.addColumns(n, a), o.push(n)
                    }
                }, r.init = function() {
                    var t = e.createElement("style");
                    t.innerHTML = "[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}", e.head.appendChild(t);
                    var n = e.querySelectorAll("[data-columns]");
                    Array.prototype.forEach.call(n, r.registerGrid), r.scanMediaQueries()
                }, r.init(), {
                    appendElements: r.appendElements,
                    prependElements: r.prependElements,
                    registerGrid: r.registerGrid,
                    recreateColumns: r.recreateColumns,
                    rescanMediaQueries: r.rescanMediaQueries,
                    init: r.init,
                    append_elements: r.appendElements,
                    prepend_elements: r.prependElements,
                    register_grid: r.registerGrid,
                    recreate_columns: r.recreateColumns,
                    rescan_media_queries: r.rescanMediaQueries
                }
            }(window, window.document))
        })), function(t) {
            return t && t.Math == Math && t
        }),
        Mr = Rr("object" == typeof globalThis && globalThis) || Rr("object" == typeof window && window) || Rr("object" == typeof self && self) || Rr("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")(),
        Br = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }, Fr = !Br((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        Hr = {}.propertyIsEnumerable,
        qr = Object.getOwnPropertyDescriptor,
        Ur = {
            f: qr && !Hr.call({
                1: 2
            }, 1) ? function(t) {
                var e = qr(this, t);
                return !!e && e.enumerable
            } : Hr
        }, zr = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }, Yr = {}.toString,
        Wr = function(t) {
            return Yr.call(t).slice(8, -1)
        }, Xr = "".split,
        $r = Br((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == Wr(t) ? Xr.call(t, "") : Object(t)
        } : Object,
        Vr = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }, Gr = function(t) {
            return $r(Vr(t))
        }, Kr = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }, Qr = function(t, e) {
            if (!Kr(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !Kr(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !Kr(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !Kr(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }, Jr = {}.hasOwnProperty,
        Zr = function(t, e) {
            return Jr.call(t, e)
        }, to = Mr.document,
        eo = Kr(to) && Kr(to.createElement),
        no = function(t) {
            return eo ? to.createElement(t) : {}
        }, ro = !Fr && !Br((function() {
            return 7 != Object.defineProperty(no("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        oo = Object.getOwnPropertyDescriptor,
        io = {
            f: Fr ? oo : function(t, e) {
                if (t = Gr(t), e = Qr(e, !0), ro) try {
                        return oo(t, e)
                } catch (t) {}
                if (Zr(t, e)) return zr(!Ur.f.call(t, e), t[e])
            }
        }, ao = /#|\.prototype\./,
        so = function(t, e) {
            var n = co[uo(t)];
            return n == fo || n != lo && ("function" == typeof e ? Br(e) : !! e)
        }, uo = so.normalize = function(t) {
            return String(t).replace(ao, ".").toLowerCase()
        }, co = so.data = {}, lo = so.NATIVE = "N",
        fo = so.POLYFILL = "P",
        ho = so,
        po = {}, go = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        }, vo = function(t, e, n) {
            if (go(t), void 0 === e) return t;
            switch (n) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }, mo = function(t) {
            if (!Kr(t)) throw TypeError(String(t) + " is not an object");
            return t
        }, yo = Object.defineProperty,
        bo = {
            f: Fr ? yo : function(t, e, n) {
                if (mo(t), e = Qr(e, !0), mo(n), ro) try {
                        return yo(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        }, wo = Fr ? function(t, e, n) {
            return bo.f(t, e, zr(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }, xo = io.f,
        Eo = function(t) {
            var e = function(e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                    }
                    return new t(e, n, r)
                }
                return t.apply(this, arguments)
            };
            return e.prototype = t.prototype, e
        }, To = function(t, e) {
            var n, r, o, i, a, s, u, c, l = t.target,
                f = t.global,
                d = t.stat,
                h = t.proto,
                p = f ? Mr : d ? Mr[l] : (Mr[l] || {}).prototype,
                g = f ? po : po[l] || (po[l] = {}),
                v = g.prototype;
            for (o in e) n = !ho(f ? o : l + (d ? "." : "#") + o, t.forced) && p && Zr(p, o), a = g[o], n && (s = t.noTargetGet ? (c = xo(p, o)) && c.value : p[o]), i = n && s ? s : e[o], n && typeof a == typeof i || (u = t.bind && n ? vo(i, Mr) : t.wrap && n ? Eo(i) : h && "function" == typeof i ? vo(Function.call, i) : i, (t.sham || i && i.sham || a && a.sham) && wo(u, "sham", !0), g[o] = u, h && (Zr(po, r = l + "Prototype") || wo(po, r, {}), po[r][o] = i, t.real && v && !v[o] && wo(v, o, i)))
        }, Co = function(t) {
            return Object(Vr(t))
        }, So = Math.ceil,
        Ao = Math.floor,
        ko = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? Ao : So)(t)
        }, Oo = Math.min,
        Lo = function(t) {
            return t > 0 ? Oo(ko(t), 9007199254740991) : 0
        }, No = Array.isArray || function(t) {
            return "Array" == Wr(t)
        }, Do = "__core-js_shared__",
        Po = Mr[Do] || function(t, e) {
            try {
                wo(Mr, t, e)
            } catch (n) {
                Mr[t] = e
            }
            return e
        }(Do, {}),
        _o = e((function(t) {
            (t.exports = function(t, e) {
                return Po[t] || (Po[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.8.3",
                mode: "pure",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        })),
        jo = 0,
        Io = Math.random(),
        Ro = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++jo + Io).toString(36)
        }, Mo = !! Object.getOwnPropertySymbols && !Br((function() {
            return !String(Symbol())
        })),
        Bo = Mo && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Fo = _o("wks"),
        Ho = Mr.Symbol,
        qo = Bo ? Ho : Ho && Ho.withoutSetter || Ro,
        Uo = function(t) {
            return Zr(Fo, t) || (Mo && Zr(Ho, t) ? Fo[t] = Ho[t] : Fo[t] = qo("Symbol." + t)), Fo[t]
        }, zo = Uo("species"),
        Yo = function(t, e) {
            var n;
            return No(t) && ("function" != typeof(n = t.constructor) || n !== Array && !No(n.prototype) ? Kr(n) && null === (n = n[zo]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
        }, Wo = [].push,
        Xo = function(t) {
            var e = 1 == t,
                n = 2 == t,
                r = 3 == t,
                o = 4 == t,
                i = 6 == t,
                a = 7 == t,
                s = 5 == t || i;
            return function(u, c, l, f) {
                for (var d, h, p = Co(u), g = $r(p), v = vo(c, l, 3), m = Lo(g.length), y = 0, b = f || Yo, w = e ? b(u, m) : n || a ? b(u, 0) : void 0; m > y; y++) if ((s || y in g) && (h = v(d = g[y], y, p), t)) if (e) w[y] = h;
                        else if (h) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return d;
                        case 6:
                            return y;
                        case 2:
                            Wo.call(w, d)
                } else switch (t) {
                        case 4:
                            return !1;
                        case 7:
                            Wo.call(w, d)
                }
                return i ? -1 : r || o ? o : w
            }
        }, $o = {
            forEach: Xo(0),
            map: Xo(1),
            filter: Xo(2),
            some: Xo(3),
            every: Xo(4),
            find: Xo(5),
            findIndex: Xo(6),
            filterOut: Xo(7)
        }, Vo = Object.defineProperty,
        Go = {}, Ko = function(t) {
            throw t
        }, Qo = function(t, e) {
            if (Zr(Go, t)) return Go[t];
            e || (e = {});
            var n = [][t],
                r = !! Zr(e, "ACCESSORS") && e.ACCESSORS,
                o = Zr(e, 0) ? e[0] : Ko,
                i = Zr(e, 1) ? e[1] : void 0;
            return Go[t] = !! n && !Br((function() {
                if (r && !Fr) return !0;
                var t = {
                    length: -1
                };
                r ? Vo(t, 1, {
                    enumerable: !0,
                    get: Ko
                }) : t[1] = 1, n.call(t, o, i)
            }))
        }, Jo = $o.find,
        Zo = "find",
        ti = !0,
        ei = Qo(Zo);
    Zo in [] && Array(1).find((function() {
        ti = !1
    })), To({
        target: "Array",
        proto: !0,
        forced: ti || !ei
    }, {
        find: function(t) {
            return Jo(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ni = function(t) {
        return po[t + "Prototype"]
    }, ri = ni("Array").find,
        oi = Array.prototype,
        ii = function(t) {
            var e = t.find;
            return t === oi || t instanceof Array && e === oi.find ? ri : e
        }, ai = "animationend",
        si = function() {
            if (void 0 !== si) return si;
            var t = !1,
                e = "animation",
                n = "Webkit Moz O ms Khtml".split(" "),
                r = document.createElement("div");
            if (void 0 !== r.style.animationName && (t = !0), !1 === t) for (var o = 0; o < n.length; o++) if (void 0 !== r.style[n[o] + "AnimationName"]) {
                        e = n[o] + "Animation", t = !0;
                        break
                    }
            return ai = e + "end", t
        }(),
        ui = {
            animation: function(t, e, n, r) {
                si ? (e.on(ai + "." + t, (function() {
                    Ir(this).off(ai + "." + t).removeClass((function(t, e) {
                        return (e.match(/animate-\S+/g) || []).join(" ")
                    })), "function" == typeof r && r()
                })), e.addClass("animate-" + t), "function" == typeof n && n()) : ("function" == typeof n && n(), "function" == typeof r && r())
            },
            fadeIn: function(t, e, n) {
                this.animation("fade-in", t, (function() {
                    t.removeClass("hidden"), "function" == typeof e && e()
                }), n)
            },
            fadeOut: function(t, e, n) {
                this.animation("fade-out", t, e, (function() {
                    t.addClass("hidden"), "function" == typeof n && n()
                }))
            },
            slideFromTop: function(t, e, n) {
                this.animation("slide-from-top", t, (function() {
                    t.removeClass("hidden"), "function" == typeof e && e()
                }), n)
            },
            slideFromRight: function(t, e, n) {
                this.animation("slide-from-right", t, (function() {
                    t.removeClass("hidden"), "function" == typeof e && e()
                }), n)
            },
            hideSlideToBottom: function(t, e, n) {
                this.animation("hide-slide-to-bottom", t, e, (function() {
                    t.addClass("hidden"), "function" == typeof n && n()
                }))
            },
            showSlideFromBottom: function(t, e, n) {
                this.animation("show-slide-from-bottom", t, (function() {
                    t.removeClass("hidden"), "function" == typeof e && e()
                }), n)
            },
            compressHeight: function(t, e, n) {
                this.animation("compress-height-50", t, e, (function() {
                    t.addClass("hidden"), "function" == typeof n && n()
                }))
            }
        }, ci = {
            listeners: {},
            element: void 0,
            init: function() {
                var t = this;
                this.get().on("click", (function(e) {
                    "overlay" === e.target.id && t.hide(), t.triggerEvent(e)
                }))
            },
            get: function() {
                return this.element || (this.element = Ir("#overlay").eq(0)), this.element
            },
            show: function() {
                ui.fadeIn(this.get())
            },
            hide: function() {
                ui.fadeOut(this.get())
            },
            addContent: function(t, e) {
                var n, r;
                0 === ii(n = this.get()).call(n, "#overlay-content-" + t).length ? this.get().html('<div id="overlay-content-' + t + '">' + e + "</div>") : ii(r = this.get()).call(r, "#overlay-content-" + t).html(e)
            },
            addListener: function(t, e) {
                this.listeners[t] = e
            },
            triggerEvent: function(t) {
                for (var e in this.listeners) "function" == typeof this.listeners[e] && this.listeners[e](t)
            }
        }, li = function() {
            Ir(".ripple, .button, .button-raised, .button-inverse").off("mousedown.tinymaterialripple").not("[disabled]").on("mousedown.tinymaterialripple", (function(t) {
                var e = this,
                    n = t.pageX - Ir(t.target).offset().left,
                    r = t.pageY - Ir(t.target).offset().top;
                ! function t(o) {
                    o !== e && o && (n += o.offsetLeft, r += o.offsetTop, t(o.offsetParent))
                }(t.target);
                var o = Ir(e),
                    i = Ir("<div/>");
                i.addClass("ripple-effect"), i.css({
                    top: r - 10 + "px",
                    left: n - 10 + "px",
                    background: o.data("ripple-color")
                }).appendTo(o), window.setTimeout((function() {
                    i.remove()
                }), 2e3)
            }))
        }, fi = Math.max,
        di = Math.min,
        hi = function(t, e) {
            var n = ko(t);
            return n < 0 ? fi(n + e, 0) : di(n, e)
        }, pi = function(t) {
            return function(e, n, r) {
                var o, i = Gr(e),
                    a = Lo(i.length),
                    s = hi(r, a);
                if (t && n != n) {
                    for (; a > s;) if ((o = i[s++]) != o) return !0
                } else for (; a > s; s++) if ((t || s in i) && i[s] === n) return t || s || 0; return !t && -1
            }
        }, gi = {
            includes: pi(!0),
            indexOf: pi(!1)
        }, vi = {}, mi = gi.indexOf,
        yi = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        bi = Object.keys || function(t) {
            return function(t, e) {
                var n, r = Gr(t),
                    o = 0,
                    i = [];
                for (n in r)!Zr(vi, n) && Zr(r, n) && i.push(n);
                for (; e.length > o;) Zr(r, n = e[o++]) && (~mi(i, n) || i.push(n));
                return i
            }(t, yi)
        }, wi = Br((function() {
            bi(1)
        }));
    To({
        target: "Object",
        stat: !0,
        forced: wi
    }, {
        keys: function(t) {
            return bi(Co(t))
        }
    });
    var xi = po.Object.keys;

    function Ei(t) {
        return (Ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    function Ti(t, e, n, r, o, i, a) {
        try {
            var s = t[i](a),
                u = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, o)
    }
    function Ci(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise((function(r, o) {
                var i = t.apply(e, n);

                function a(t) {
                    Ti(i, r, o, a, s, "next", t)
                }
                function s(t) {
                    Ti(i, r, o, a, s, "throw", t)
                }
                a(void 0)
            }))
        }
    }
    var Si, Ai, ki = function(t) {
            return Ir("<div/>").text(t).html()
        }, Oi = function(t) {
            return "object" !== Ei(t) ? 0 : xi(t).length
        }, Li = function(t, e, n, r, o) {
            var i = '<div class="container"><div id="modal-container" class="col-md-6 col-md-offset-3"><div class="modal animate-slide-from-top"><div class="modal-title">' + (t = (o = o || {}).noHtmlEscape ? t : ki(t)) + "</div>",
                a = "",
                s = "";
            switch (e && (a += "<p>" + (e = o.noHtmlEscape ? e : ki(e)) + "</p>"), n) {
                case "alert":
                    s += '<button class="button ripple pull-right modal-ok">' + (o && o.buttonLabelOk ? o.buttonLabelOk : "OK") + "</button>";
                    break;
                case "confirm":
                    s += '<button class="button ripple ' + (o && o.buttonClassesOk ? o.buttonClassesOk : "button-alert") + ' pull-right modal-ok">' + (o && o.buttonLabelOk ? o.buttonLabelOk : "OK") + '</button><button class="button ripple pull-right modal-cancel">取消</button>';
                    break;
                case "prompt":
                    a += '<input type="text" class="input-new-tag" placeholder="任意字符..." value="' + o.value + '"/>', s += '<button class="button ripple ' + (o && o.buttonClassesOk ? o.buttonClassesOk : "button-primary") + ' pull-right modal-ok">' + (o && o.buttonLabelOk ? o.buttonLabelOk : "OK") + '</button><button class="button ripple pull-right modal-cancel">取消</button>';
                    break;
                default:
                    return void console.log("Modal type must be alert, confirm or prompt. " + n + " isn't recognized.")
            }
            i += '<div class="modal-body">' + a + "</div>", i += '<div class="modal-footer clearfix">' + s + "</div></div>", ci.addContent("modal", i), ci.show(), "prompt" === n && Ir(".input-new-tag").focus(), ci.addListener("modal", (function(t) {
                var e = Ir(t.target);
                if (e.hasClass("modal-ok")) {
                    if ("function" == typeof r) {
                        var n = Ir("#modal-container input.input-new-tag").val();
                        r(!0, n)
                    }
                    ci.hide()
                } else(e.hasClass("modal-cancel") || e.hasClass("container") || "modal-container" === e.attr("id") || "overlay-modal" === e.attr("id")) && ("function" == typeof r && r(!1), ci.hide())
            })), li()
        }, Ni = function(t) {
            if ("object" === Ei(t)) {
                var e = function() {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                }(),
                    n = '<div id="' + e + '" class="hidden actionbar ' + t.classes + '"><div class="container"><div class="row"><div class="actionbar-label">' + t.label + '</div><div class="actionbar-selectall">- <a href="#" class="actionbar-selectall-link">全选</a></div><div class="actionbar-controls">';
                for (var r in t.displayCancel && (n += '<button type="button" class="button button-default" id="actionbar-cancel">取消</button>'), t.controls) {
                    var o = t.controls[r];
                    n += '<button type="button" class="' + o.classes + '" id="' + o.id + '">' + o.label + "</button>"
                }
                n += "</div></div></div></div>", Ir("body").append(n);
                var i = Ir("#" + e).eq(0);
                for (var a in "function" == typeof t.onCancel && Ir("#actionbar-cancel").on("click", (function() {
                    t.onCancel()
                })), t.controls) {
                    var s = t.controls[a];
                    Ir("#" + s.id).on("click", s.callback)
                }
                return ui.showSlideFromBottom(i), i
            }
            console.error("displayActionBar expects an object as options.")
        }, Di = {
            selectedLinks: {}
        }, Pi = !1,
        _i = Ir(".batch-trigger"),
        ji = null,
        Ii = {
            init: function() {
                var t = this;
                _i.on("click", (function() {
                    t.toggle()
                }))
            },
            toggle: function() {
                var t = this,
                    e = this;
                if (Pi) Pi = !1, _i.removeClass("filter-on"), Ir(".link-outer").off("click.batch"), Ir(".links-list").removeClass("is-selectable"), ui.hideSlideToBottom(Ir(".actionbar"), null, (function() {
                        Ir(".actionbar").remove()
                    })), ui.showSlideFromBottom(Ir(".button-floating"));
                else {
                    Pi = !0, _i.addClass("filter-on");
                    var n = "batchInformationViewed";
                    localStorage && !localStorage.getItem(n) && Li("链接多选", "单击批量选择几个链接, 并在底部栏中执行操作", "alert", (function(t) {
                        t && localStorage.setItem(n, !0)
                    }), {
                        buttonLabelOk: "知道了"
                    }), Ir(".links-list").addClass("is-selectable"), Ir(".link-outer").on("click.batch", (function(t) {
                        t.preventDefault(), t.stopPropagation();
                        var n = Ir(this),
                            r = n.attr("id");
                        n.hasClass("is-selected") ? (n.removeClass("is-selected"), delete Di.selectedLinks[r], e.refreshLabel()) : (n.addClass("is-selected"), Di.selectedLinks[r] = {
                            id: r,
                            title: ki(ii(n).call(n, ".link-title").text())
                        }, e.refreshLabel())
                    })), ui.hideSlideToBottom(Ir(".button-floating")), ji = Ni({
                        label: "",
                        classes: "actionbar-delete-links",
                        displayCancel: !0,
                        onCancel: function() {
                            t.toggle()
                        },
                        controls: [{
                                id: "delete-links-button",
                                label: "删除",
                                classes: "button button-alert",
                                callback: function(t) {
                                    var e, n = '<ul class="is-bordered">',
                                        r = [],
                                        o = Oi(Di.selectedLinks);
                                    for (var i in Di.selectedLinks) r.push(i), n += "<li>#<strong>" + i + "</strong>" + Di.selectedLinks[i].title + "</li>";
                                    n += "</ul>", e = r.join("+");
                                    var a = shaarli.basePath + "/admin/shaare/delete?id=" + e + "&token=" + encodeURIComponent(Ir("#token").val());
                                    Li("⚠️ 确定这么做? ", o+"个链接将<strong>永久</strong>删除: " + n, "confirm", (function(t) {
                                        t && (window.location.href = a)
                                    }), {
                                        noHtmlEscape: !0,
                                        buttonLabelOk: "删除"+ o +"个链接"
                                    })
                                }
                            }, {
                                id: "set-links-public-button",
                                label: "设为公共",
                                classes: "button button-primary",
                                callback: function(t) {
                                    var e, n = '<ul class="is-bordered">',
                                        r = [],
                                        o = Oi(Di.selectedLinks);
                                    for (var i in Di.selectedLinks) r.push(i), n += "<li>#<strong>" + i + "</strong>" + Di.selectedLinks[i].title + "</li>";
                                    n += "</ul>", e = r.join("+");
                                    var a = shaarli.basePath + "/admin/shaare/visibility?token=" + encodeURIComponent(Ir("#token").val()) + "&newVisibility=public&id=" + e;
                                    Li("确定这么做? ",o+"个链接将设为<strong>公共</strong>: " + n, "confirm", (function(t) {
                                        t && (window.location.href = a)
                                    }), {
                                        noHtmlEscape: !0,
                                        buttonLabelOk: "设为公共",
                                        buttonClassesOk: "button-primary"
                                    })
                                }
                            }, {
                                id: "set-links-private-button",
                                label: "设为私有",
                                classes: "button button-primary",
                                callback: function(t) {
                                    var e, n = '<ul class="is-bordered">',
                                        r = [],
                                        o = Oi(Di.selectedLinks);
                                    for (var i in Di.selectedLinks) r.push(i), n += "<li>#<strong>" + i + "</strong>" + Di.selectedLinks[i].title + "</li>";
                                    n += "</ul>", e = r.join("+");
                                    var a = shaarli.basePath + "/admin/shaare/visibility?token=" + encodeURIComponent(Ir("#token").val()) + "&newVisibility=private&id=" + e;
                                    Li("确定这么做? ",o+"个链接将设为<strong>私有</strong>: " + n, "confirm", (function(t) {
                                        t && (window.location.href = a)
                                    }), {
                                        noHtmlEscape: !0,
                                        buttonLabelOk: "设为私有",
                                        buttonClassesOk: "button-primary"
                                    })
                                }
                            }
                        ]
                    }), e.refreshLabel()
                }
            },
            toggleLink: function(t, e, n) {
                var r = this,
                    o = t.attr("id"),
                    i = function() {
                        t.addClass("is-selected"), Di.selectedLinks[o] = {
                            id: o,
                            title: ki(ii(t).call(t, ".link-title").text())
                        }, r.refreshLabel()
                    }, a = function() {
                        t.removeClass("is-selected"), delete Di.selectedLinks[o], r.refreshLabel()
                    };
                e ? i() : n || t.hasClass("is-selected") ? a() : i()
            },
            refreshLabel: function() {
                var t = Oi(Di.selectedLinks);
                ii(ji).call(ji, ".actionbar-label").text("已选择"+t+"条链接"), 0 === t ? ii(ji).call(ji, "button:not(#actionbar-cancel)").attr("disabled", "disabled") : ii(ji).call(ji, "button:not(#actionbar-cancel)").removeAttr("disabled")
            }
        }, Ri = function(t, e, n) {
            var r = Qr(e);
            r in t ? bo.f(t, r, zr(0, n)) : t[r] = n
        }, Mi = function(t) {
            return "function" == typeof t ? t : void 0
        }, Bi = function(t, e) {
            return arguments.length < 2 ? Mi(po[t]) || Mi(Mr[t]) : po[t] && po[t][e] || Mr[t] && Mr[t][e]
        }, Fi = Bi("navigator", "userAgent") || "",
        Hi = Mr.process,
        qi = Hi && Hi.versions,
        Ui = qi && qi.v8;
    Ui ? Ai = (Si = Ui.split("."))[0] + Si[1] : Fi && (!(Si = Fi.match(/Edge\/(\d+)/)) || Si[1] >= 74) && (Si = Fi.match(/Chrome\/(\d+)/)) && (Ai = Si[1]);
    var zi = Ai && +Ai,
        Yi = Uo("species"),
        Wi = function(t) {
            return zi >= 51 || !Br((function() {
                var e = [];
                return (e.constructor = {})[Yi] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        }, Xi = Uo("isConcatSpreadable"),
        $i = 9007199254740991,
        Vi = "Maximum allowed index exceeded",
        Gi = zi >= 51 || !Br((function() {
            var t = [];
            return t[Xi] = !1, t.concat()[0] !== t
        })),
        Ki = Wi("concat"),
        Qi = function(t) {
            if (!Kr(t)) return !1;
            var e = t[Xi];
            return void 0 !== e ? !! e : No(t)
        };
    To({
        target: "Array",
        proto: !0,
        forced: !Gi || !Ki
    }, {
        concat: function(t) {
            var e, n, r, o, i, a = Co(this),
                s = Yo(a, 0),
                u = 0;
            for (e = -1, r = arguments.length; e < r; e++) if (Qi(i = -1 === e ? a : arguments[e])) {
                    if (u + (o = Lo(i.length)) > $i) throw TypeError(Vi);
                    for (n = 0; n < o; n++, u++) n in i && Ri(s, u, i[n])
                } else {
                    if (u >= $i) throw TypeError(Vi);
                    Ri(s, u++, i)
                }
            return s.length = u, s
        }
    });
    var Ji = ni("Array").concat,
        Zi = Array.prototype,
        ta = function(t) {
            var e = t.concat;
            return t === Zi || t instanceof Array && e === Zi.concat ? Ji : e
        }, ea = [].slice,
        na = /MSIE .\./.test(Fi),
        ra = function(t) {
            return function(e, n) {
                var r = arguments.length > 2,
                    o = r ? ea.call(arguments, 2) : void 0;
                return t(r ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, o)
                } : e, n)
            }
        };
    To({
        global: !0,
        bind: !0,
        forced: na
    }, {
        setTimeout: ra(Mr.setTimeout),
        setInterval: ra(Mr.setInterval)
    });
    var oa, ia = po.setTimeout,
        aa = _o("keys"),
        sa = function(t) {
            return aa[t] || (aa[t] = Ro(t))
        }, ua = !Br((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        ca = sa("IE_PROTO"),
        la = Object.prototype,
        fa = ua ? Object.getPrototypeOf : function(t) {
            return t = Co(t), Zr(t, ca) ? t[ca] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? la : null
        }, da = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {}
            return function(n, r) {
                return mo(n),
                function(t) {
                    if (!Kr(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                }(r), e ? t.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        ha = Fr ? Object.defineProperties : function(t, e) {
            mo(t);
            for (var n, r = bi(e), o = r.length, i = 0; o > i;) bo.f(t, n = r[i++], e[n]);
            return t
        }, pa = Bi("document", "documentElement"),
        ga = sa("IE_PROTO"),
        va = function() {}, ma = function(t) {
            return "<script>" + t + "</" + "script>"
        }, ya = function() {
            try {
                oa = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            ya = oa ? function(t) {
                t.write(ma("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(oa) : ((e = no("iframe")).style.display = "none", pa.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(ma("document.F=Object")), t.close(), t.F);
            for (var n = yi.length; n--;) delete ya.prototype[yi[n]];
            return ya()
        };
    vi[ga] = !0;
    var ba = Object.create || function(t, e) {
            var n;
            return null !== t ? (va.prototype = mo(t), n = new va, va.prototype = null, n[ga] = t) : n = ya(), void 0 === e ? n : ha(n, e)
        }, wa = {}, xa = Uo("iterator"),
        Ea = Array.prototype,
        Ta = {};
    Ta[Uo("toStringTag")] = "z";
    var Ca = "[object z]" === String(Ta),
        Sa = Uo("toStringTag"),
        Aa = "Arguments" == Wr(function() {
            return arguments
        }()),
        ka = Ca ? Wr : function(t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), Sa)) ? n : Aa ? Wr(e) : "Object" == (r = Wr(e)) && "function" == typeof e.callee ? "Arguments" : r
        }, Oa = Uo("iterator"),
        La = function(t) {
            var e = t.
            return;
            if (void 0 !== e) return mo(e.call(t)).value
        }, Na = function(t, e) {
            this.stopped = t, this.result = e
        }, Da = function(t, e, n) {
            var r, o, i, a, s, u, c, l, f = n && n.that,
                d = !(!n || !n.AS_ENTRIES),
                h = !(!n || !n.IS_ITERATOR),
                p = !(!n || !n.INTERRUPTED),
                g = vo(e, f, 1 + d + p),
                v = function(t) {
                    return r && La(r), new Na(!0, t)
                }, m = function(t) {
                    return d ? (mo(t), p ? g(t[0], t[1], v) : g(t[0], t[1])) : p ? g(t, v) : g(t)
                };
            if (h) r = t;
            else {
                if ("function" != typeof(o = function(t) {
                    if (null != t) return t[Oa] || t["@@iterator"] || wa[ka(t)]
                }(t))) throw TypeError("Target is not iterable");
                if (void 0 !== (l = o) && (wa.Array === l || Ea[xa] === l)) {
                    for (i = 0, a = Lo(t.length); a > i; i++) if ((s = m(t[i])) && s instanceof Na) return s;
                    return new Na(!1)
                }
                r = o.call(t)
            }
            for (u = r.next; !(c = u.call(r)).done;) {
                try {
                    s = m(c.value)
                } catch (t) {
                    throw La(r), t
                }
                if ("object" == typeof s && s && s instanceof Na) return s
            }
            return new Na(!1)
        }, Pa = function(t, e) {
            var n = this;
            if (!(n instanceof Pa)) return new Pa(t, e);
            da && (n = da(new Error(void 0), fa(n))), void 0 !== e && wo(n, "message", String(e));
            var r = [];
            return Da(t, r.push, {
                that: r
            }), wo(n, "errors", r), n
        };
    Pa.prototype = ba(Error.prototype, {
        constructor: zr(5, Pa),
        message: zr(5, ""),
        name: zr(5, "AggregateError")
    }), To({
        global: !0
    }, {
        AggregateError: Pa
    });
    var _a = Mr.Promise,
        ja = function(t, e, n, r) {
            r && r.enumerable ? t[e] = n : wo(t, e, n)
        }, Ia = Ca ? {}.toString : function() {
            return "[object " + ka(this) + "]"
        }, Ra = bo.f,
        Ma = Uo("toStringTag"),
        Ba = function(t, e, n, r) {
            if (t) {
                var o = n ? t : t.prototype;
                Zr(o, Ma) || Ra(o, Ma, {
                    configurable: !0,
                    value: e
                }), r && !Ca && wo(o, "toString", Ia)
            }
        }, Fa = Uo("species"),
        Ha = Function.toString;
    "function" != typeof Po.inspectSource && (Po.inspectSource = function(t) {
        return Ha.call(t)
    });
    var qa = Po.inspectSource,
        Ua = Uo("iterator"),
        za = !1;
    try {
        var Ya = 0,
            Wa = {
                next: function() {
                    return {
                        done: !! Ya++
                    }
                },
                return : function() {
                    za = !0
                }
            };
        Wa[Ua] = function() {
            return this
        }, Array.from(Wa, (function() {
            throw 2
        }))
    } catch (t) {}
    var Xa, $a, Va, Ga = Uo("species"),
        Ka = function(t, e) {
            var n, r = mo(t).constructor;
            return void 0 === r || null == (n = mo(r)[Ga]) ? e : go(n)
        }, Qa = /(iphone|ipod|ipad).*applewebkit/i.test(Fi),
        Ja = "process" == Wr(Mr.process),
        Za = Mr.location,
        ts = Mr.setImmediate,
        es = Mr.clearImmediate,
        ns = Mr.process,
        rs = Mr.MessageChannel,
        os = Mr.Dispatch,
        is = 0,
        as = {}, ss = "onreadystatechange",
        us = function(t) {
            if (as.hasOwnProperty(t)) {
                var e = as[t];
                delete as[t], e()
            }
        }, cs = function(t) {
            return function() {
                us(t)
            }
        }, ls = function(t) {
            us(t.data)
        }, fs = function(t) {
            Mr.postMessage(t + "", Za.protocol + "//" + Za.host)
        };
    ts && es || (ts = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return as[++is] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, Xa(is), is
    }, es = function(t) {
        delete as[t]
    }, Ja ? Xa = function(t) {
        ns.nextTick(cs(t))
    } : os && os.now ? Xa = function(t) {
        os.now(cs(t))
    } : rs && !Qa ? (Va = ($a = new rs).port2, $a.port1.onmessage = ls, Xa = vo(Va.postMessage, Va, 1)) : Mr.addEventListener && "function" == typeof postMessage && !Mr.importScripts && Za && "file:" !== Za.protocol && !Br(fs) ? (Xa = fs, Mr.addEventListener("message", ls, !1)) : Xa = ss in no("script") ? function(t) {
        pa.appendChild(no("script")).onreadystatechange = function() {
            pa.removeChild(this), us(t)
        }
    } : function(t) {
        setTimeout(cs(t), 0)
    });
    var ds, hs, ps, gs, vs, ms, ys, bs, ws = {
            set: ts,
            clear: es
        }, xs = /web0s(?!.*chrome)/i.test(Fi),
        Es = io.f,
        Ts = ws.set,
        Cs = Mr.MutationObserver || Mr.WebKitMutationObserver,
        Ss = Mr.document,
        As = Mr.process,
        ks = Mr.Promise,
        Os = Es(Mr, "queueMicrotask"),
        Ls = Os && Os.value;
    Ls || (ds = function() {
        var t, e;
        for (Ja && (t = As.domain) && t.exit(); hs;) {
            e = hs.fn, hs = hs.next;
            try {
                e()
            } catch (t) {
                throw hs ? gs() : ps = void 0, t
            }
        }
        ps = void 0, t && t.enter()
    }, Qa || Ja || xs || !Cs || !Ss ? ks && ks.resolve ? (ys = ks.resolve(void 0), bs = ys.then, gs = function() {
        bs.call(ys, ds)
    }) : gs = Ja ? function() {
        As.nextTick(ds)
    } : function() {
        Ts.call(Mr, ds)
    } : (vs = !0, ms = Ss.createTextNode(""), new Cs(ds).observe(ms, {
        characterData: !0
    }), gs = function() {
        ms.data = vs = !vs
    }));
    var Ns, Ds, Ps, _s = Ls || function(t) {
            var e = {
                fn: t,
                next: void 0
            };
            ps && (ps.next = e), hs || (hs = e, gs()), ps = e
        }, js = function(t) {
            var e, n;
            this.promise = new t((function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            })), this.resolve = go(e), this.reject = go(n)
        }, Is = {
            f: function(t) {
                return new js(t)
            }
        }, Rs = function(t, e) {
            if (mo(t), Kr(e) && e.constructor === t) return e;
            var n = Is.f(t);
            return (0, n.resolve)(e), n.promise
        }, Ms = function(t) {
            try {
                return {
                    error: !1,
                    value: t()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        }, Bs = Mr.WeakMap,
        Fs = "function" == typeof Bs && /native code/.test(qa(Bs)),
        Hs = Mr.WeakMap;
    if (Fs) {
        var qs = Po.state || (Po.state = new Hs),
            Us = qs.get,
            zs = qs.has,
            Ys = qs.set;
        Ns = function(t, e) {
            return e.facade = t, Ys.call(qs, t, e), e
        }, Ds = function(t) {
            return Us.call(qs, t) || {}
        }, Ps = function(t) {
            return zs.call(qs, t)
        }
    } else {
        var Ws = sa("state");
        vi[Ws] = !0, Ns = function(t, e) {
            return e.facade = t, wo(t, Ws, e), e
        }, Ds = function(t) {
            return Zr(t, Ws) ? t[Ws] : {}
        }, Ps = function(t) {
            return Zr(t, Ws)
        }
    }
    var Xs, $s, Vs, Gs = {
            set: Ns,
            get: Ds,
            has: Ps,
            enforce: function(t) {
                return Ps(t) ? Ds(t) : Ns(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!Kr(e) || (n = Ds(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }, Ks = ws.set,
        Qs = Uo("species"),
        Js = "Promise",
        Zs = Gs.get,
        tu = Gs.set,
        eu = Gs.getterFor(Js),
        nu = _a,
        ru = Mr.TypeError,
        ou = Mr.document,
        iu = Mr.process,
        au = (Bi("fetch"), Is.f),
        su = au,
        uu = !! (ou && ou.createEvent && Mr.dispatchEvent),
        cu = "function" == typeof PromiseRejectionEvent,
        lu = "unhandledrejection",
        fu = ho(Js, (function() {
            if (!(qa(nu) !== String(nu))) {
                if (66 === zi) return !0;
                if (!Ja && !cu) return !0
            }
            if (!nu.prototype.
            finally) return !0;
            if (zi >= 51 && /native code/.test(nu)) return !1;
            var t = nu.resolve(1),
                e = function(t) {
                    t((function() {}), (function() {}))
                };
            return (t.constructor = {})[Qs] = e, !(t.then((function() {})) instanceof e)
        })),
        du = fu || ! function(t, e) {
            if (!e && !za) return !1;
            var n = !1;
            try {
                var r = {};
                r[Ua] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, t(r)
            } catch (t) {}
            return n
        }((function(t) {
            nu.all(t).
            catch ((function() {}))
        })),
        hu = function(t) {
            var e;
            return !(!Kr(t) || "function" != typeof(e = t.then)) && e
        }, pu = function(t, e) {
            if (!t.notified) {
                t.notified = !0;
                var n = t.reactions;
                _s((function() {
                    for (var r = t.value, o = 1 == t.state, i = 0; n.length > i;) {
                        var a, s, u, c = n[i++],
                            l = o ? c.ok : c.fail,
                            f = c.resolve,
                            d = c.reject,
                            h = c.domain;
                        try {
                            l ? (o || (2 === t.rejection && yu(t), t.rejection = 1), !0 === l ? a = r : (h && h.enter(), a = l(r), h && (h.exit(), u = !0)), a === c.promise ? d(ru("Promise-chain cycle")) : (s = hu(a)) ? s.call(a, f, d) : f(a)) : d(r)
                        } catch (t) {
                            h && !u && h.exit(), d(t)
                        }
                    }
                    t.reactions = [], t.notified = !1, e && !t.rejection && vu(t)
                }))
            }
        }, gu = function(t, e, n) {
            var r, o;
            uu ? ((r = ou.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), Mr.dispatchEvent(r)) : r = {
                promise: e,
                reason: n
            }, !cu && (o = Mr["on" + t]) ? o(r) : t === lu && function(t, e) {
                var n = Mr.console;
                n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
            }("Unhandled promise rejection", n)
        }, vu = function(t) {
            Ks.call(Mr, (function() {
                var e, n = t.facade,
                    r = t.value;
                if (mu(t) && (e = Ms((function() {
                    Ja ? iu.emit("unhandledRejection", r, n) : gu(lu, n, r)
                })), t.rejection = Ja || mu(t) ? 2 : 1, e.error)) throw e.value
            }))
        }, mu = function(t) {
            return 1 !== t.rejection && !t.parent
        }, yu = function(t) {
            Ks.call(Mr, (function() {
                var e = t.facade;
                Ja ? iu.emit("rejectionHandled", e) : gu("rejectionhandled", e, t.value)
            }))
        }, bu = function(t, e, n) {
            return function(r) {
                t(e, r, n)
            }
        }, wu = function(t, e, n) {
            t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, pu(t, !0))
        }, xu = function(t, e, n) {
            if (!t.done) {
                t.done = !0, n && (t = n);
                try {
                    if (t.facade === e) throw ru("Promise can't be resolved itself");
                    var r = hu(e);
                    r ? _s((function() {
                        var n = {
                            done: !1
                        };
                        try {
                            r.call(e, bu(xu, n, t), bu(wu, n, t))
                        } catch (e) {
                            wu(n, e, t)
                        }
                    })) : (t.value = e, t.state = 1, pu(t, !1))
                } catch (e) {
                    wu({
                        done: !1
                    }, e, t)
                }
            }
        };
    fu && (nu = function(t) {
        ! function(t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation")
        }(this, nu, Js), go(t), Xs.call(this);
        var e = Zs(this);
        try {
            t(bu(xu, e), bu(wu, e))
        } catch (t) {
            wu(e, t)
        }
    }, (Xs = function(t) {
        tu(this, {
            type: Js,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = function(t, e, n) {
        for (var r in e) n && n.unsafe && t[r] ? t[r] = e[r] : ja(t, r, e[r], n);
        return t
    }(nu.prototype, {
        then: function(t, e) {
            var n = eu(this),
                r = au(Ka(this, nu));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = Ja ? iu.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && pu(n, !1), r.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), $s = function() {
        var t = new Xs,
            e = Zs(t);
        this.promise = t, this.resolve = bu(xu, e), this.reject = bu(wu, e)
    }, Is.f = au = function(t) {
        return t === nu || t === Vs ? new $s(t) : su(t)
    }), To({
        global: !0,
        wrap: !0,
        forced: fu
    }, {
        Promise: nu
    }), Ba(nu, Js, !1, !0),
    function(t) {
        var e = Bi(t),
            n = bo.f;
        Fr && e && !e[Fa] && n(e, Fa, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }(Js), Vs = Bi(Js), To({
        target: Js,
        stat: !0,
        forced: fu
    }, {
        reject: function(t) {
            var e = au(this);
            return e.reject.call(void 0, t), e.promise
        }
    }), To({
        target: Js,
        stat: !0,
        forced: !0
    }, {
        resolve: function(t) {
            return Rs(this === Vs ? nu : this, t)
        }
    }), To({
        target: Js,
        stat: !0,
        forced: du
    }, {
        all: function(t) {
            var e = this,
                n = au(e),
                r = n.resolve,
                o = n.reject,
                i = Ms((function() {
                    var n = go(e.resolve),
                        i = [],
                        a = 0,
                        s = 1;
                    Da(t, (function(t) {
                        var u = a++,
                            c = !1;
                        i.push(void 0), s++, n.call(e, t).then((function(t) {
                            c || (c = !0, i[u] = t, --s || r(i))
                        }), o)
                    })), --s || r(i)
                }));
            return i.error && o(i.value), n.promise
        },
        race: function(t) {
            var e = this,
                n = au(e),
                r = n.reject,
                o = Ms((function() {
                    var o = go(e.resolve);
                    Da(t, (function(t) {
                        o.call(e, t).then(n.resolve, r)
                    }))
                }));
            return o.error && r(o.value), n.promise
        }
    }), To({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(t) {
            var e = this,
                n = Is.f(e),
                r = n.resolve,
                o = n.reject,
                i = Ms((function() {
                    var n = go(e.resolve),
                        o = [],
                        i = 0,
                        a = 1;
                    Da(t, (function(t) {
                        var s = i++,
                            u = !1;
                        o.push(void 0), a++, n.call(e, t).then((function(t) {
                            u || (u = !0, o[s] = {
                                status: "fulfilled",
                                value: t
                            }, --a || r(o))
                        }), (function(t) {
                            u || (u = !0, o[s] = {
                                status: "rejected",
                                reason: t
                            }, --a || r(o))
                        }))
                    })), --a || r(o)
                }));
            return i.error && o(i.value), n.promise
        }
    });
    var Eu = "No one promise resolved";
    To({
        target: "Promise",
        stat: !0
    }, {
        any: function(t) {
            var e = this,
                n = Is.f(e),
                r = n.resolve,
                o = n.reject,
                i = Ms((function() {
                    var n = go(e.resolve),
                        i = [],
                        a = 0,
                        s = 1,
                        u = !1;
                    Da(t, (function(t) {
                        var c = a++,
                            l = !1;
                        i.push(void 0), s++, n.call(e, t).then((function(t) {
                            l || u || (u = !0, r(t))
                        }), (function(t) {
                            l || u || (l = !0, i[c] = t, --s || o(new(Bi("AggregateError"))(i, Eu)))
                        }))
                    })), --s || o(new(Bi("AggregateError"))(i, Eu))
                }));
            return i.error && o(i.value), n.promise
        }
    });
    var Tu = !! _a && Br((function() {
        _a.prototype.
        finally.call({
            then: function() {}
        }, (function() {}))
    }));
    To({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: Tu
    }, {
        finally: function(t) {
            var e = Ka(this, Bi("Promise")),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return Rs(e, t()).then((function() {
                    return n
                }))
            } : t, n ? function(n) {
                return Rs(e, t()).then((function() {
                    throw n
                }))
            } : t)
        }
    });
    var Cu, Su, Au, ku = function(t) {
            return function(e, n) {
                var r, o, i = String(Vr(e)),
                    a = ko(n),
                    s = i.length;
                return a < 0 || a >= s ? t ? "" : void 0 : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : r : t ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
            }
        }, Ou = {
            codeAt: ku(!1),
            charAt: ku(!0)
        }, Lu = Uo("iterator"),
        Nu = !1;
    [].keys && ("next" in (Au = [].keys()) ? (Su = fa(fa(Au))) !== Object.prototype && (Cu = Su) : Nu = !0);
    var Du = null == Cu || Br((function() {
        var t = {};
        return Cu[Lu].call(t) !== t
    }));
    Du && (Cu = {}), Du && !Zr(Cu, Lu) && wo(Cu, Lu, (function() {
        return this
    }));
    var Pu = {
        IteratorPrototype: Cu,
        BUGGY_SAFARI_ITERATORS: Nu
    }, _u = Pu.IteratorPrototype,
        ju = function() {
            return this
        }, Iu = Pu.IteratorPrototype,
        Ru = Pu.BUGGY_SAFARI_ITERATORS,
        Mu = Uo("iterator"),
        Bu = "keys",
        Fu = "values",
        Hu = "entries",
        qu = function() {
            return this
        }, Uu = function(t, e, n, r, o, i, a) {
            ! function(t, e, n) {
                var r = e + " Iterator";
                t.prototype = ba(_u, {
                    next: zr(1, n)
                }), Ba(t, r, !1, !0), wa[r] = ju
            }(n, e, r);
            var s, u, c, l = function(t) {
                    if (t === o && g) return g;
                    if (!Ru && t in h) return h[t];
                    switch (t) {
                        case Bu:
                        case Fu:
                        case Hu:
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                }, f = e + " Iterator",
                d = !1,
                h = t.prototype,
                p = h[Mu] || h["@@iterator"] || o && h[o],
                g = !Ru && p || l(o),
                v = "Array" == e && h.entries || p;
            if (v && (s = fa(v.call(new t)), Iu !== Object.prototype && s.next && (Ba(s, f, !0, !0), wa[f] = qu)), o == Fu && p && p.name !== Fu && (d = !0, g = function() {
                return p.call(this)
            }), a && h[Mu] !== g && wo(h, Mu, g), wa[e] = g, o) if (u = {
                    values: l(Fu),
                    keys: i ? g : l(Bu),
                    entries: l(Hu)
                }, a) for (c in u)(Ru || d || !(c in h)) && ja(h, c, u[c]);
                else To({
                        target: e,
                        proto: !0,
                        forced: Ru || d
                    }, u);
            return u
        }, zu = Ou.charAt,
        Yu = "String Iterator",
        Wu = Gs.set,
        Xu = Gs.getterFor(Yu);
    Uu(String, "String", (function(t) {
        Wu(this, {
            type: Yu,
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = Xu(this),
            n = e.string,
            r = e.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (t = zu(n, r), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var $u = "Array Iterator",
        Vu = Gs.set,
        Gu = Gs.getterFor($u);
    Uu(Array, "Array", (function(t, e) {
        Vu(this, {
            type: $u,
            target: Gr(t),
            index: 0,
            kind: e
        })
    }), (function() {
        var t = Gu(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
        return !e || r >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: e[r],
            done: !1
        } : {
            value: [r, e[r]],
            done: !1
        }
    }), "values");
    wa.Arguments = wa.Array;
    var Ku = Uo("toStringTag");
    for (var Qu in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }) {
        var Ju = Mr[Qu],
            Zu = Ju && Ju.prototype;
        Zu && ka(Zu) !== Ku && wo(Zu, Ku, Qu), wa[Qu] = wa.Array
    }
    var tc = po.Promise,
        ec = jr,
        nc = function(t, e) {
            var n = [][t];
            return !!n && Br((function() {
                n.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        }, rc = $o.forEach,
        oc = nc("forEach"),
        ic = Qo("forEach"),
        ac = oc && ic ? [].forEach : function(t) {
            return rc(this, t, arguments.length > 1 ? arguments[1] : void 0)
        };
    To({
        target: "Array",
        proto: !0,
        forced: [].forEach != ac
    }, {
        forEach: ac
    });
    var sc, uc, cc, lc = ni("Array").forEach,
        fc = Array.prototype,
        dc = {
            DOMTokenList: !0,
            NodeList: !0
        }, hc = function(t) {
            var e = t.forEach;
            return t === fc || t instanceof Array && e === fc.forEach || dc.hasOwnProperty(ka(t)) ? lc : e
        }, pc = {
            createLink: (cc = Ci(ec.mark((function t(e) {
                var n, r, o;
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = [], hc(n = xi(e)).call(n, (function(t) {
                                    r.push([encodeURIComponent(t), encodeURIComponent(e[t])].join("="))
                                })), t.next = 4, Ir.ajax({
                                    url: "".concat(shaarli.basePath, "/admin/shaare"),
                                    method: "post",
                                    data: r.join("&")
                                });
                            case 4:
                                return o = t.sent, t.abrupt("return", o);
                            case 6:
                            case "end":
                                return t.stop()
                    }
                }), t)
            }))), function(t) {
                return cc.apply(this, arguments)
            }),
            deleteLinkByUrl: (uc = Ci(ec.mark((function t(e) {
                var n;
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Ir.ajax({
                                    url: "".concat(e, "&source=batch"),
                                    method: "get"
                                });
                            case 2:
                                return n = t.sent, t.abrupt("return", n);
                            case 4:
                            case "end":
                                return t.stop()
                    }
                }), t)
            }))), function(t) {
                return uc.apply(this, arguments)
            }),
            updateThumbnail: (sc = Ci(ec.mark((function t(e) {
                var n, r;
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Ir.ajax({
                                    method: "patch",
                                    url: ta(n = "".concat(shaarli.basePath, "/admin/shaare/")).call(n, e, "/update-thumbnail")
                                });
                            case 2:
                                return r = t.sent, t.abrupt("return", r);
                            case 4:
                            case "end":
                                return t.stop()
                    }
                }), t)
            }))), function(t) {
                return sc.apply(this, arguments)
            }),
            refreshToken: function(t) {
                Ir.ajax({
                    url: shaarli.basePath + "/admin/token",
                    method: "get",
                    success: function(e) {
                        Ir("#token").val(e), "function" == typeof t && t(e)
                    },
                    error: function(t) {
                        console.error("Failed to refresh token.", t)
                    }
                })
            }
        }, gc = function() {
            var t = Ci(ec.mark((function t(e) {
                var n, r;
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = {}, r = ii(e).call(e, '[name="lf_id"]').length > 0, ii(e).call(e, 'input[type="text"], textarea, input[type="checkbox"], input[type="hidden"]').each((function(t, e) {
                                    var r = Ir(e);
                                    "checkbox" !== r.attr("type") ? n[r.attr("name")] = r.val() : r.prop("checked") && (n[r.attr("name")] = "on")
                                })), t.prev = 3, wc(e), t.next = 7, pc.createLink(n);
                            case 7:
                                xc(e, r ? "updated" : "created", "success"), t.next = 15;
                                break;
                            case 10:
                                t.prev = 10, t.t0 = t.
                                catch (3), console.error(t.t0), Ec(e), Li("出错了", "保存链接发生错误", "alert");
                            case 15:
                            case "end":
                                return t.stop()
                    }
                }), t, null, [
                    [3, 10]
                ])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        vc = function() {
            var t = Ci(ec.mark((function t() {
                var e, n, r, o, i, a, s;
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                e = document.querySelectorAll('form[name="linkform"]'), n = e.length, r = Ir("#progress-overlay"), o = ii(r).call(r, ".progress-current"), i = ii(r).call(r, ".progress-total"), a = ii(r).call(r, ".progress-actual"), i.text(n), r.removeClass("hidden"), s = 0;
                            case 9:
                                if (!(s < n)) {
                                    t.next = 17;
                                    break
                                }
                                return t.next = 12, gc(Ir(e[s]));
                            case 12:
                                o.text(s + 1), a.css("width", "".concat(100 * (s + 1) / n, "%"));
                            case 14:
                                s++, t.next = 9;
                                break;
                            case 17:
                                r.addClass("hidden");
                            case 18:
                            case "end":
                                return t.stop()
                    }
                }), t)
            })));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        mc = function() {
            var t = Ci(ec.mark((function t(e) {
                var n, r;
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                n = e.attr("href"), r = e.closest("form"), Li("⚠️ 删除链接", "确定要删除该链接吗? ", "confirm", function() {
                                    var t = Ci(ec.mark((function t(e) {
                                        return ec.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (!e) {
                                                            t.next = 13;
                                                            break
                                                        }
                                                        return t.prev = 1, wc(r), t.next = 5, pc.deleteLinkByUrl(n);
                                                    case 5:
                                                        xc(r, "deleted", "danger"), t.next = 13;
                                                        break;
                                                    case 8:
                                                        t.prev = 8, t.t0 = t.
                                                        catch (1), console.error(t.t0), Ec(r), Li("出错了", "删除链接发生错误", "alert");
                                                    case 13:
                                                    case "end":
                                                        return t.stop()
                                            }
                                        }), t, null, [
                                            [1, 8]
                                        ])
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            case 3:
                            case "end":
                                return t.stop()
                    }
                }), t)
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        yc = function() {
            var t = Ci(ec.mark((function t(e) {
                var n;
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.closest("form"), wc(n), t.next = 4, new tc((function(t) {
                                    return ia(t, 100)
                                }));
                            case 4:
                                xc(n, "cancelled");
                            case 5:
                            case "end":
                                return t.stop()
                    }
                }), t)
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        bc = function() {
            0 === Ir('form[name="linkform"]').length && Ir('[name="save_edit_batch"]').attr("disabled", "disabled")
        }, wc = function(t) {
            t.append('<div class="card-overlay"></div>');
            var e = t.height();
            t.css("max-height", "".concat(e, "px"))
        }, xc = function(t, e, n) {
            var r, o, i = ii(t).call(t, '[name="lf_url"]').val(),
                a = n ? "is-".concat(n) : "";
            ii(t).call(t, ".card-overlay").html(ta(r = ta(o = '<div class="is-flex"><div class="nowrap">'.concat(i, '</div><div class="tag is-light ')).call(o, a, '">')).call(r, e, "</div></div>")), t.closest(".editlinkform").addClass("is-batch-done"), t.removeAttr("name")
        }, Ec = function(t) {
            ii(t).call(t, ".card-overlay").remove(), t.css("max-height", "none")
        }, Tc = function() {
            "addlink" === shaarli.pageName && Ir(".button-batch-addform").on("click", (function() {
                Ir(".batch-addform").removeClass("hidden"), Ir(this).remove()
            })), "editlinkbatch" === shaarli.pageName && (Ir('[name="save_edit"]').on("click", function() {
                var t = Ci(ec.mark((function t(e) {
                    return ec.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e.preventDefault(), t.next = 3, gc(Ir(this).closest("form"));
                                case 3:
                                    return bc(), t.abrupt("return", !1);
                                case 5:
                                case "end":
                                    return t.stop()
                        }
                    }), t, this)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()), Ir('[name="save_edit_batch"]').on("click", function() {
                var t = Ci(ec.mark((function t(e) {
                    return ec.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e.preventDefault(), t.next = 3, vc();
                                case 3:
                                    return bc(), t.abrupt("return", !1);
                                case 5:
                                case "end":
                                    return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()), Ir('[name="delete_link"]').off("click").on("click", function() {
                var t = Ci(ec.mark((function t(e) {
                    return ec.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e.preventDefault(), t.next = 3, mc(Ir(this));
                                case 3:
                                    return bc(), t.abrupt("return", !1);
                                case 5:
                                case "end":
                                    return t.stop()
                        }
                    }), t, this)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()), Ir('[name="cancel-batch-link"]').on("click", function() {
                var t = Ci(ec.mark((function t(e) {
                    return ec.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e.preventDefault(), t.next = 3, yc(Ir(this));
                                case 3:
                                    return bc(), t.abrupt("return", !1);
                                case 5:
                                case "end":
                                    return t.stop()
                        }
                    }), t, this)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()))
        }, Cc = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Sc = "[" + Cc + "]",
        Ac = RegExp("^" + Sc + Sc + "*"),
        kc = RegExp(Sc + Sc + "*$"),
        Oc = function(t) {
            return function(e) {
                var n = String(Vr(e));
                return 1 & t && (n = n.replace(Ac, "")), 2 & t && (n = n.replace(kc, "")), n
            }
        }, Lc = {
            start: Oc(1),
            end: Oc(2),
            trim: Oc(3)
        }, Nc = Lc.trim,
        Dc = Mr.parseInt,
        Pc = /^[+-]?0[Xx]/,
        _c = 8 !== Dc(Cc + "08") || 22 !== Dc(Cc + "0x16") ? function(t, e) {
            var n = Nc(String(t));
            return Dc(n, e >>> 0 || (Pc.test(n) ? 16 : 10))
        } : Dc;
    To({
        global: !0,
        forced: parseInt != _c
    }, {
        parseInt: _c
    });
    var jc = po.parseInt,
        Ic = e((function(t, e) {
            ! function(t, e) {
                var n = "function" == typeof Map ? new Map : function() {
                        var t = [],
                            e = [];
                        return {
                            has: function(e) {
                                return t.indexOf(e) > -1
                            },
                            get: function(n) {
                                return e[t.indexOf(n)]
                            },
                            set: function(n, r) {
                                -1 === t.indexOf(n) && (t.push(n), e.push(r))
                            },
                            delete: function(n) {
                                var r = t.indexOf(n);
                                r > -1 && (t.splice(r, 1), e.splice(r, 1))
                            }
                        }
                    }(),
                    r = function(t) {
                        return new Event(t, {
                            bubbles: !0
                        })
                    };
                try {
                    new Event("test")
                } catch (t) {
                    r = function(t) {
                        var e = document.createEvent("Event");
                        return e.initEvent(t, !0, !1), e
                    }
                }
                function o(t) {
                    if (t && t.nodeName && "TEXTAREA" === t.nodeName && !n.has(t)) {
                        var e = null,
                            o = null,
                            i = null,
                            a = function() {
                                t.clientWidth !== o && d()
                            }, s = function(e) {
                                window.removeEventListener("resize", a, !1), t.removeEventListener("input", d, !1), t.removeEventListener("keyup", d, !1), t.removeEventListener("autosize:destroy", s, !1), t.removeEventListener("autosize:update", d, !1), Object.keys(e).forEach((function(n) {
                                    t.style[n] = e[n]
                                })), n.delete(t)
                            }.bind(t, {
                                height: t.style.height,
                                resize: t.style.resize,
                                overflowY: t.style.overflowY,
                                overflowX: t.style.overflowX,
                                wordWrap: t.style.wordWrap
                            });
                        t.addEventListener("autosize:destroy", s, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", d, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", d, !1), t.addEventListener("autosize:update", d, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", n.set(t, {
                            destroy: s,
                            update: d
                        }), u()
                    }
                    function u() {
                        var n = window.getComputedStyle(t, null);
                        "vertical" === n.resize ? t.style.resize = "none" : "both" === n.resize && (t.style.resize = "horizontal"), e = "content-box" === n.boxSizing ? -(parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), isNaN(e) && (e = 0), d()
                    }
                    function c(e) {
                        var n = t.style.width;
                        t.style.width = "0px", t.offsetWidth, t.style.width = n, t.style.overflowY = e
                    }
                    function l(t) {
                        for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                node: t.parentNode,
                                scrollTop: t.parentNode.scrollTop
                            }), t = t.parentNode;
                        return e
                    }
                    function f() {
                        if (0 !== t.scrollHeight) {
                            var n = l(t),
                                r = document.documentElement && document.documentElement.scrollTop;
                            t.style.height = "", t.style.height = t.scrollHeight + e + "px", o = t.clientWidth, n.forEach((function(t) {
                                t.node.scrollTop = t.scrollTop
                            })), r && (document.documentElement.scrollTop = r)
                        }
                    }
                    function d() {
                        f();
                        var e = Math.round(parseFloat(t.style.height)),
                            n = window.getComputedStyle(t, null),
                            o = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : t.offsetHeight;
                        if (o < e ? "hidden" === n.overflowY && (c("scroll"), f(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), f(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), i !== o) {
                            i = o;
                            var a = r("autosize:resized");
                            try {
                                t.dispatchEvent(a)
                            } catch (t) {}
                        }
                    }
                }
                function i(t) {
                    var e = n.get(t);
                    e && e.destroy()
                }
                function a(t) {
                    var e = n.get(t);
                    e && e.update()
                }
                var s = null;
                "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((s = function(t) {
                    return t
                }).destroy = function(t) {
                    return t
                }, s.update = function(t) {
                    return t
                }) : ((s = function(t, e) {
                    return t && Array.prototype.forEach.call(t.length ? t : [t], (function(t) {
                        return o(t)
                    })), t
                }).destroy = function(t) {
                    return t && Array.prototype.forEach.call(t.length ? t : [t], i), t
                }, s.update = function(t) {
                    return t && Array.prototype.forEach.call(t.length ? t : [t], a), t
                }), e.
                default = s, t.exports = e.
                default
            }(t, e)
        })),
        Rc = function() {
            var t = Ci(ec.mark((function t() {
                return ec.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (("editlink" === shaarli.pageName || "editlinkbatch" === shaarli.pageName) && shaarli.asyncMetadata) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                Ir(".editlinkform").each(function() {
                                    var t = Ci(ec.mark((function t(e, n) {
                                        var r, o, i, a, s, u, c;
                                        return ec.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (r = Ir(n), o = ii(r).call(r, ".loading-wrapper"), i = ii(r).call(r, 'input[name="lf_title"]'), a = ii(r).call(r, 'textarea[name="lf_description"]'), s = ii(r).call(r, 'input[name="lf_tags"]'), u = ii(r).call(r, 'input[name="lf_url"]').val(), !(i.length > 0 && i.val().length > 0)) {
                                                            t.next = 8;
                                                            break
                                                        }
                                                        return t.abrupt("return");
                                                    case 8:
                                                        return o.addClass("is-loading"), t.prev = 9, t.next = 12, Ir.ajax({
                                                            url: shaarli.basePath + "/admin/metadata?url=" + encodeURIComponent(u),
                                                            method: "get"
                                                        });
                                                    case 12:
                                                        (c = t.sent).title && i && i.length > 0 && 0 === i.val().length && i.val(c.title), c.description && a && a.length > 0 && 0 === a.val().length && a.val(c.description), c.tags && s && s.length > 0 && 0 === s.val().length && s.val(c.tags), t.next = 22;
                                                        break;
                                                    case 18:
                                                        t.prev = 18, t.t0 = t.
                                                        catch (9), console.error("Failed to get link metadata."), Li("Error", "An error occurred while getting metadata for " + ki(u), "alert");
                                                    case 22:
                                                        o.removeClass("is-loading");
                                                    case 23:
                                                    case "end":
                                                        return t.stop()
                                            }
                                        }), t, null, [
                                            [9, 18]
                                        ])
                                    })));
                                    return function(e, n) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            case 3:
                            case "end":
                                return t.stop()
                    }
                }), t)
            })));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        Mc = {
            init: function() {
                var t = this;
                Ir(".button-expand").on("click", (function(e) {
                    t.toggleExpand(Ir(this))
                })).each((function() {
                    jc(localStorage.getItem("expand")) && t.toggleExpand(Ir(this))
                })), Ic(Ir("#lf_description")), Rc(), Ir("[name=delete_link]").on("click", (function(t) {
                    t.preventDefault();
                    var e = Ir(this).attr("href");
                    return Li("⚠️ 删除链接", "确定要删除该链接? ", "confirm", (function(t) {
                        t && (window.location.href = e)
                    })), !1
                }))
            },
            toggleExpand: function(t) {
                var e, n = t.closest(".card"),
                    r = n.toggleClass("is-expanded").hasClass("is-expanded") ? 1 : 0;
                ii(e = n.closest(".editlinkform-row").toggleClass("row")).call(e, ".editlinkform-col").toggleClass("col-md-6 col-md-offset-3"), localStorage.setItem("expand", r)
            }
        }, Bc = function() {
            Ir(".button-delete").on("click", (function(t) {
                t.preventDefault();
                var e = Ir(this).attr("href");
                return Li("⚠️ 删除链接", "确定要删除该链接吗? ", "confirm", (function(t) {
                    t && (window.location.href = e)
                })), !1
            })), shaarli.asyncMetadata && Ir("div[data-async-thumbnail]").each(function() {
                var t = Ci(ec.mark((function t(e, n) {
                    var r, o, i, a;
                    return ec.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = Ir(n), o = r.closest("[data-id]").data("id"), t.next = 4, pc.updateThumbnail(o);
                                case 4:
                                    !1 !== (i = t.sent).thumbnail && ((a = ii(r).call(r, "img")).attr("src", i.thumbnail), a.data("src", i.thumbnail), r.removeClass("hidden"));
                                case 6:
                                case "end":
                                    return t.stop()
                        }
                    }), t)
                })));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }())
        }, Fc = Lc.trim;
    To({
        target: "String",
        proto: !0,
        forced: function(t) {
            return Br((function() {
                return !!Cc[t]() || "​᠎" != "​᠎" [t]() || Cc[t].name !== t
            }))
        }("trim")
    }, {
        trim: function() {
            return Fc(this)
        }
    });
    var Hc = ni("String").trim,
        qc = String.prototype,
        Uc = function(t) {
            var e = t.trim;
            return "string" == typeof t || t === qc || t instanceof String && e === qc.trim ? Hc : e
        }, zc = function() {
            var t = function() {
                var t = Ir("#search-overlay");
                ui.fadeIn(t), ii(t).call(t, "#searchform_value").focus().select(), ui.slideFromTop(ii(t).call(t, ".content-fullscreen"))
            };
            Ir("#button-search").on("click", t), Ir("#search-overlay").on("click", (function(t) {
                0 === Ir(t.target).parents("#form-search").length && "form" !== t.target.nodeName.toLowerCase() && ui.fadeOut(Ir(this))
            })), Ir(document).on("keyup", (function(e) {
                var n = e.which || e.keyCode;
                if (27 === n) {
                    var r = Ir("#search-overlay");
                    ui.fadeOut(r)
                } else 83 === n && "INPUT" !== e.target.nodeName && "TEXTAREA" !== e.target.nodeName && "SELECT" !== e.target.nodeName && t()
            })), Ir("#button-filter").on("click", (function() {
                var t, e = Uc(t = Ir("#searchform_value").val()).call(t);
                return Ir("#tagfilter_value").val(e), Ir("#hidden-tag-form").submit(), !1
            }))
        }, Yc = {
            init: function() {
                var t = this;
                Ir("html").on("click", (function(e) {
                    Ir.inArray("popup-trigger", e.target.classList) > -1 || Ir(e.target).parents(".popup-trigger").length >= 1 || Ir.inArray("popup", e.target.classList) > -1 || Ir(e.target).parents(".popup").length >= 1 || t.hideAll(), Ir.inArray("actionbar-selectall-link", e.target.classList) > -1 && (e.preventDefault(), Ir(".link-outer").each((function() {
                        Ii.toggleLink(Ir(this), !0)
                    })))
                })), Ir(".popup-trigger").on("click", (function() {
                    t.hideAll();
                    var e = Ir("#" + Ir(this).data("popup"));
                    e.is(":visible") ? ui.fadeOut(e) : ui.slideFromTop(e)
                })), Ir(".popup-close").on("click", (function() {
                    t.hideAll()
                })), Ir(".filters-links-per-page a").on("click", (function(e) {
                    t.hideAll()
                })), Ir(".popup-filter .switch label").on("click", (function() {
                    var t = Ir(this).data("url");
                    window.location.href = t
                }))
            },
            hideAll: function() {
                Ir(".popup:visible").each((function() {
                    ui.fadeOut(Ir(this))
                }))
            }
        }, Wc = function() {
            if (0 !== Ir(".page-thumbnails").length) {
                var t = Ir(".thumbnail-placeholder"),
                    e = Ir(".thumbnail-link-title"),
                    n = Ir(".progress-current"),
                    r = Ir(".progress-actual"),
                    o = 0,
                    i = Ir('[name="ids"]').val().split(","),
                    a = i.length;
                ! function s(u) {
                    console.log("Updating thunmbnail #" + o + " with id " + u), Ir.ajax({
                        url: shaarli.basePath + "/admin/shaare/" + i[o] + "/update-thumbnail",
                        method: "patch",
                        dataType: "json",
                        success: function(u) {
                            o++, e.text(u.title), u.thumbnail ? t.html('<img title="Current thumbnail" src="' + u.thumbnail + '"/>') : t.empty(), n.text(o), r.css("width", 100 * o / i.length + "%"), o < a ? s(i[o]) : e.text("更新完毕!")
                        },
                        error: function(t) {
                            console.error("更新失败"), Li("Error", "An error occurred while downloading thumbnails. Return code: " + t.status, "alert")
                        }
                    })
                }(i[o])
            }
        }, Xc = function() {
            Ir("#button-delete").on("click", (function(t) {
                t.preventDefault();
                var e = Ir("#fromtag").val(),
                    n = Ir(this).closest("form");
                return Li('⚠️ 删除"' + e + '"标签', '确定要删除"' + e + '"标签吗? ', "confirm", (function(t) {
                    t && (n.append('<input type="hidden" name="deletetag">'), n.submit())
                })), !1
            })), Ir(".delete-tag").on("click", (function(t) {
                t.preventDefault();
                var e = Ir(this),
                    n = e.data("tag"),
                    r = Ir("#token").val();
                Li('⚠️ 删除"' + n + '"标签', '确定要删除"' + n + '"标签吗? ', "confirm", (function(t) {
                    t && Ir.ajax({
                        url: shaarli.basePath + "/admin/tags",
                        method: "post",
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            deletetag: 1,
                            fromtag: n,
                            token: r
                        },
                        success: function() {
                            var t = e.closest(".list-item-flex");
                            ui.compressHeight(t, null, (function() {
                                t.remove()
                            }))
                        },
                        error: function() {
                            Li("Error", "Oops! something went wrong...", "alert")
                        },
                        complete: function() {
                            pc.refreshToken()
                        }
                    })
                }))
            })), Ir(".rename-tag").on("click", (function(t) {
                t.preventDefault();
                var e = Ir(this),
                    n = e.closest(".list-item-flex"),
                    r = e.data("tag"),
                    o = Ir("#token").val(),
                    i = Ir("<span/>").addClass("text-feedback").text("重命名中...");
                Li('重命名标签 "' + r +'"', '写下新的标签名', 'prompt', (function(t, e) {
                    t && (ii(n).call(n, ".list-item-middle").append(i), Ir.ajax({
                        url: shaarli.basePath + "/admin/tags",
                        method: "post",
                        contentType: "application/x-www-form-urlencoded",
                        data: {
                            fromtag: r,
                            totag: e,
                            token: o,
                            renametag: "Rename tag"
                        },
                        success: function() {
                            ii(n).call(n, ".tag-link").attr("href", shaarli.basePath + "/?searchtags=" + encodeURIComponent(e)).text(e), ii(n).call(n, "[data-tag]").data("tag", e), ii(n).call(n, ".count").attr("href", shaarli.basePath + "/add-tag/" + encodeURIComponent(e)), ii(n).call(n, ".rename-tag").attr("href", shaarli.basePath + "/admin/tags?fromtag=" + encodeURIComponent(e)), i.addClass("text-success").text("重命名成功!")
                        },
                        error: function() {
                            i.addClass("text-error").text("something went wrong")
                        },
                        complete: function() {
                            pc.refreshToken(), ia((function() {
                                i.remove()
                            }), 5e3)
                        }
                    }))
                }), {
                    buttonLabelOk: "重命名",
                    value: r
                })
            }))
        }, $c = function() {
            Ir(".notification-close").on("click", (function() {
                var t = Ir(this).closest(".notification");
                t.addClass("animate-fade-out"), ia((function() {
                    t.remove()
                }), 250)
            }))
        }, Vc = gi.includes,
        Gc = Qo("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    To({
        target: "Array",
        proto: !0,
        forced: !Gc
    }, {
        includes: function(t) {
            return Vc(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Kc = ni("Array").includes,
        Qc = Uo("match"),
        Jc = function(t) {
            if (function(t) {
                var e;
                return Kr(t) && (void 0 !== (e = t[Qc]) ? !! e : "RegExp" == Wr(t))
            }(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
        }, Zc = Uo("match");
    To({
        target: "String",
        proto: !0,
        forced: ! function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[Zc] = !1, "/./" [t](e)
                } catch (t) {}
            }
            return !1
        }("includes")
    }, {
        includes: function(t) {
            return !!~String(Vr(this)).indexOf(Jc(t), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var tl = ni("String").includes,
        el = Array.prototype,
        nl = String.prototype,
        rl = function(t) {
            var e = t.includes;
            return t === el || t instanceof Array && e === el.includes ? Kc : "string" == typeof t || t === nl || t instanceof String && e === nl.includes ? tl : e
        }, ol = Wi("splice"),
        il = Qo("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        al = Math.max,
        sl = Math.min,
        ul = 9007199254740991,
        cl = "Maximum allowed length exceeded";
    To({
        target: "Array",
        proto: !0,
        forced: !ol || !il
    }, {
        splice: function(t, e) {
            var n, r, o, i, a, s, u = Co(this),
                c = Lo(u.length),
                l = hi(t, c),
                f = arguments.length;
            if (0 === f ? n = r = 0 : 1 === f ? (n = 0, r = c - l) : (n = f - 2, r = sl(al(ko(e), 0), c - l)), c + n - r > ul) throw TypeError(cl);
            for (o = Yo(u, r), i = 0; i < r; i++)(a = l + i) in u && Ri(o, i, u[a]);
            if (o.length = r, n < r) {
                for (i = l; i < c - r; i++) s = i + n, (a = i + r) in u ? u[s] = u[a] : delete u[s];
                for (i = c; i > c - r + n; i--) delete u[i - 1]
            } else if (n > r) for (i = c - r; i > l; i--) s = i + n - 1, (a = i + r - 1) in u ? u[s] = u[a] : delete u[s];
            for (i = 0; i < n; i++) u[i + l] = arguments[i + 2];
            return u.length = c - r + n, o
        }
    });
    var ll = ni("Array").splice,
        fl = Array.prototype,
        dl = function(t) {
            var e = t.splice;
            return t === fl || t instanceof Array && e === fl.splice ? ll : e
        }, hl = gi.indexOf,
        pl = [].indexOf,
        gl = !! pl && 1 / [1].indexOf(1, -0) < 0,
        vl = nc("indexOf"),
        ml = Qo("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    To({
        target: "Array",
        proto: !0,
        forced: gl || !vl || !ml
    }, {
        indexOf: function(t) {
            return gl ? pl.apply(this, arguments) || 0 : hl(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var yl = ni("Array").indexOf,
        bl = Array.prototype,
        wl = function(t) {
            var e = t.indexOf;
            return t === bl || t instanceof Array && e === bl.indexOf ? yl : e
        }, xl = e((function(t, e) {
            t.exports = function() {
                var t, e, n, r, o = "src",
                    i = "srcset";
                return function(o) {
                    if (!document.querySelectorAll) {
                        var i = document.createStyleSheet();
                        document.querySelectorAll = function(t, e, n, r, o) {
                            for (o = document.all, e = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
                                for (i.addRule(t[n], "k:v"), r = o.length; r--;) o[r].currentStyle.k && e.push(o[r]);
                                i.removeRule(0)
                            }
                            return e
                        }
                    }
                    var u = this,
                        c = u._util = {};
                    c.elements = [], c.destroyed = !0, u.options = o || {}, u.options.error = u.options.error || !1, u.options.offset = u.options.offset || 100, u.options.root = u.options.root || document, u.options.success = u.options.success || !1, u.options.selector = u.options.selector || ".b-lazy", u.options.separator = u.options.separator || "|", u.options.containerClass = u.options.container, u.options.container = !! u.options.containerClass && document.querySelectorAll(u.options.containerClass), u.options.errorClass = u.options.errorClass || "b-error", u.options.breakpoints = u.options.breakpoints || !1, u.options.loadInvisible = u.options.loadInvisible || !1, u.options.successClass = u.options.successClass || "b-loaded", u.options.validateDelay = u.options.validateDelay || 25, u.options.saveViewportOffsetDelay = u.options.saveViewportOffsetDelay || 50, u.options.srcset = u.options.srcset || "data-srcset", u.options.src = t = u.options.src || "data-src", r = Element.prototype.closest, n = window.devicePixelRatio > 1, (e = {}).top = 0 - u.options.offset, e.left = 0 - u.options.offset, u.revalidate = function() {
                        a(u)
                    }, u.load = function(t, e) {
                        var n = this.options;
                        t && void 0 === t.length ? l(t, e, n) : C(t, (function(t) {
                            l(t, e, n)
                        }))
                    }, u.destroy = function() {
                        var t = u._util;
                        u.options.container && C(u.options.container, (function(e) {
                            T(e, "scroll", t.validateT)
                        })), T(window, "scroll", t.validateT), T(window, "resize", t.validateT), T(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0
                    }, c.validateT = S((function() {
                        s(u)
                    }), u.options.validateDelay, u), c.saveViewportOffsetT = S((function() {
                        x(u.options.offset)
                    }), u.options.saveViewportOffsetDelay, u), x(u.options.offset), C(u.options.breakpoints, (function(e) {
                        if (e.width >= window.screen.width) return t = e.src, !1
                    })), setTimeout((function() {
                        a(u)
                    }))
                };

                function a(t) {
                    var e = t._util;
                    e.elements = w(t.options), e.count = e.elements.length, e.destroyed && (e.destroyed = !1, t.options.container && C(t.options.container, (function(t) {
                        E(t, "scroll", e.validateT)
                    })), E(window, "resize", e.saveViewportOffsetT), E(window, "resize", e.validateT), E(window, "scroll", e.validateT)), s(t)
                }
                function s(t) {
                    for (var e = t._util, n = 0; n < e.count; n++) {
                        var r = e.elements[n];
                        (u(r, t.options) || y(r, t.options.successClass)) && (t.load(r), e.elements.splice(n, 1), e.count--, n--)
                    }
                    0 === e.count && t.destroy()
                }
                function u(t, n) {
                    var o = t.getBoundingClientRect();
                    if (n.container && r) {
                        var i = t.closest(n.containerClass);
                        if (i) {
                            var a = i.getBoundingClientRect();
                            if (c(a, e)) {
                                var s = a.top - n.offset,
                                    u = a.right + n.offset,
                                    l = a.bottom + n.offset,
                                    f = a.left - n.offset;
                                return c(o, {
                                    top: s > e.top ? s : e.top,
                                    right: u < e.right ? u : e.right,
                                    bottom: l < e.bottom ? l : e.bottom,
                                    left: f > e.left ? f : e.left
                                })
                            }
                            return !1
                        }
                    }
                    return c(o, e)
                }
                function c(t, e) {
                    return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom
                }
                function l(e, r, a) {
                    if (!y(e, a.successClass) && (r || a.loadInvisible || e.offsetWidth > 0 && e.offsetHeight > 0)) {
                        var s = g(e, t) || g(e, a.src);
                        if (s) {
                            var u = s.split(a.separator),
                                c = u[n && u.length > 1 ? 1 : 0],
                                l = g(e, a.srcset),
                                p = m(e, "img"),
                                v = e.parentNode,
                                w = v && m(v, "picture");
                            if (p || void 0 === e.src) {
                                var x = new Image,
                                    S = function() {
                                        a.error && a.error(e, "invalid"), b(e, a.errorClass), T(x, "error", S), T(x, "load", A)
                                    }, A = function() {
                                        p ? w || h(e, c, l) : e.style.backgroundImage = 'url("' + c + '")', f(e, a), T(x, "load", A), T(x, "error", S)
                                    };
                                w && (x = e, C(v.getElementsByTagName("source"), (function(t) {
                                    d(t, i, a.srcset)
                                }))), E(x, "error", S), E(x, "load", A), h(x, c, l)
                            } else e.src = c, f(e, a)
                        } else m(e, "video") ? (C(e.getElementsByTagName("source"), (function(t) {
                                d(t, o, a.src)
                            })), e.load(), f(e, a)) : (a.error && a.error(e, "missing"), b(e, a.errorClass))
                    }
                }
                function f(t, e) {
                    b(t, e.successClass), e.success && e.success(t), v(t, e.src), v(t, e.srcset), C(e.breakpoints, (function(e) {
                        v(t, e.src)
                    }))
                }
                function d(t, e, n) {
                    var r = g(t, n);
                    r && (p(t, e, r), v(t, n))
                }
                function h(t, e, n) {
                    n && p(t, i, n), t.src = e
                }
                function p(t, e, n) {
                    t.setAttribute(e, n)
                }
                function g(t, e) {
                    return t.getAttribute(e)
                }
                function v(t, e) {
                    t.removeAttribute(e)
                }
                function m(t, e) {
                    return t.nodeName.toLowerCase() === e
                }
                function y(t, e) {
                    return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
                }
                function b(t, e) {
                    y(t, e) || (t.className += " " + e)
                }
                function w(t) {
                    for (var e = [], n = t.root.querySelectorAll(t.selector), r = n.length; r--; e.unshift(n[r]));
                    return e
                }
                function x(t) {
                    e.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, e.right = (window.innerWidth || document.documentElement.clientWidth) + t
                }
                function E(t, e, n) {
                    t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, n) : t.addEventListener(e, n, {
                        capture: !1,
                        passive: !0
                    })
                }
                function T(t, e, n) {
                    t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, n) : t.removeEventListener(e, n, {
                        capture: !1,
                        passive: !0
                    })
                }
                function C(t, e) {
                    if (t && e) for (var n = t.length, r = 0; r < n && !1 !== e(t[r], r); r++);
                }
                function S(t, e, n) {
                    var r = 0;
                    return function() {
                        var o = +new Date;
                        o - r < e || (r = o, t.apply(n, arguments))
                    }
                }
            }()
        })),
        El = e((function(t) {
            ! function() {
                var e = function(t, n) {
                    var r = this;
                    e.count = (e.count || 0) + 1, this.count = e.count, this.isOpened = !1, this.input = o(t), this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("aria-expanded", "false"), this.input.setAttribute("aria-owns", "awesomplete_list_" + this.count), this.input.setAttribute("role", "combobox"), this.options = n = n || {},
                    function(t, e, n) {
                        for (var r in e) {
                            var o = e[r],
                                i = t.input.getAttribute("data-" + r.toLowerCase());
                            t[r] = "number" == typeof o ? parseInt(i) : !1 === o ? null !== i : o instanceof Function ? null : i, t[r] || 0 === t[r] || (t[r] = r in n ? n[r] : o)
                        }
                    }(this, {
                        minChars: 2,
                        maxItems: 10,
                        autoFirst: !1,
                        data: e.DATA,
                        filter: e.FILTER_CONTAINS,
                        sort: !1 !== n.sort && e.SORT_BYLENGTH,
                        container: e.CONTAINER,
                        item: e.ITEM,
                        replace: e.REPLACE,
                        tabSelect: !1
                    }, n), this.index = -1, this.container = this.container(t), this.ul = o.create("ul", {
                        hidden: "hidden",
                        role: "listbox",
                        id: "awesomplete_list_" + this.count,
                        inside: this.container
                    }), this.status = o.create("span", {
                        className: "visually-hidden",
                        role: "status",
                        "aria-live": "assertive",
                        "aria-atomic": !0,
                        inside: this.container,
                        textContent: 0 != this.minChars ? "Type " + this.minChars + " or more characters for results." : "Begin typing for results."
                    }), this._events = {
                        input: {
                            input: this.evaluate.bind(this),
                            blur: this.close.bind(this, {
                                reason: "blur"
                            }),
                            keydown: function(t) {
                                var e = t.keyCode;
                                r.opened && (13 === e && r.selected ? (t.preventDefault(), r.select(void 0, void 0, t)) : 9 === e && r.selected && r.tabSelect ? r.select(void 0, void 0, t) : 27 === e ? r.close({
                                    reason: "esc"
                                }) : 38 !== e && 40 !== e || (t.preventDefault(), r[38 === e ? "previous" : "next"]()))
                            }
                        },
                        form: {
                            submit: this.close.bind(this, {
                                reason: "submit"
                            })
                        },
                        ul: {
                            mousedown: function(t) {
                                t.preventDefault()
                            },
                            click: function(t) {
                                var e = t.target;
                                if (e !== this) {
                                    for (; e && !/li/i.test(e.nodeName);) e = e.parentNode;
                                    e && 0 === t.button && (t.preventDefault(), r.select(e, t.target, t))
                                }
                            }
                        }
                    }, o.bind(this.input, this._events.input), o.bind(this.input.form, this._events.form), o.bind(this.ul, this._events.ul), this.input.hasAttribute("list") ? (this.list = "#" + this.input.getAttribute("list"), this.input.removeAttribute("list")) : this.list = this.input.getAttribute("data-list") || n.list || [], e.all.push(this)
                };

                function n(t) {
                    var e = Array.isArray(t) ? {
                        label: t[0],
                        value: t[1]
                    } : "object" == typeof t && "label" in t && "value" in t ? t : {
                        label: t,
                        value: t
                    };
                    this.label = e.label || e.value, this.value = e.value
                }
                e.prototype = {
                    set list(t) {
                        if (Array.isArray(t)) this._list = t;
                        else if ("string" == typeof t && t.indexOf(",") > -1) this._list = t.split(/\s*,\s*/);
                        else if ((t = o(t)) && t.children) {
                            var e = [];
                            r.apply(t.children).forEach((function(t) {
                                if (!t.disabled) {
                                    var n = t.textContent.trim(),
                                        r = t.value || n,
                                        o = t.label || n;
                                    "" !== r && e.push({
                                        label: o,
                                        value: r
                                    })
                                }
                            })), this._list = e
                        }
                        document.activeElement === this.input && this.evaluate()
                    }, get selected() {
                        return this.index > -1
                    }, get opened() {
                        return this.isOpened
                    }, close: function(t) {
                        this.opened && (this.input.setAttribute("aria-expanded", "false"), this.ul.setAttribute("hidden", ""), this.isOpened = !1, this.index = -1, this.status.setAttribute("hidden", ""), o.fire(this.input, "awesomplete-close", t || {}))
                    },
                    open: function() {
                        this.input.setAttribute("aria-expanded", "true"), this.ul.removeAttribute("hidden"), this.isOpened = !0, this.status.removeAttribute("hidden"), this.autoFirst && -1 === this.index && this.goto(0), o.fire(this.input, "awesomplete-open")
                    },
                    destroy: function() {
                        if (o.unbind(this.input, this._events.input), o.unbind(this.input.form, this._events.form), !this.options.container) {
                            var t = this.container.parentNode;
                            t.insertBefore(this.input, this.container), t.removeChild(this.container)
                        }
                        this.input.removeAttribute("autocomplete"), this.input.removeAttribute("aria-autocomplete");
                        var n = e.all.indexOf(this); - 1 !== n && e.all.splice(n, 1)
                    },
                    next: function() {
                        var t = this.ul.children.length;
                        this.goto(this.index < t - 1 ? this.index + 1 : t ? 0 : -1)
                    },
                    previous: function() {
                        var t = this.ul.children.length,
                            e = this.index - 1;
                        this.goto(this.selected && -1 !== e ? e : t - 1)
                    },
                    goto: function(t) {
                        var e = this.ul.children;
                        this.selected && e[this.index].setAttribute("aria-selected", "false"), this.index = t, t > -1 && e.length > 0 && (e[t].setAttribute("aria-selected", "true"), this.status.textContent = e[t].textContent + ", list item " + (t + 1) + " of " + e.length, this.input.setAttribute("aria-activedescendant", this.ul.id + "_item_" + this.index), this.ul.scrollTop = e[t].offsetTop - this.ul.clientHeight + e[t].clientHeight, o.fire(this.input, "awesomplete-highlight", {
                            text: this.suggestions[this.index]
                        }))
                    },
                    select: function(t, e, n) {
                        if (t ? this.index = o.siblingIndex(t) : t = this.ul.children[this.index], t) {
                            var r = this.suggestions[this.index];
                            o.fire(this.input, "awesomplete-select", {
                                text: r,
                                origin: e || t,
                                originalEvent: n
                            }) && (this.replace(r), this.close({
                                reason: "select"
                            }), o.fire(this.input, "awesomplete-selectcomplete", {
                                text: r,
                                originalEvent: n
                            }))
                        }
                    },
                    evaluate: function() {
                        var t = this,
                            e = this.input.value;
                        e.length >= this.minChars && this._list && this._list.length > 0 ? (this.index = -1, this.ul.innerHTML = "", this.suggestions = this._list.map((function(r) {
                            return new n(t.data(r, e))
                        })).filter((function(n) {
                            return t.filter(n, e)
                        })), !1 !== this.sort && (this.suggestions = this.suggestions.sort(this.sort)), this.suggestions = this.suggestions.slice(0, this.maxItems), this.suggestions.forEach((function(n, r) {
                            t.ul.appendChild(t.item(n, e, r))
                        })), 0 === this.ul.children.length ? (this.status.textContent = "No results found", this.close({
                            reason: "nomatches"
                        })) : (this.open(), this.status.textContent = this.ul.children.length + " results found")) : (this.close({
                            reason: "nomatches"
                        }), this.status.textContent = "No results found")
                    }
                }, e.all = [], e.FILTER_CONTAINS = function(t, e) {
                    return RegExp(o.regExpEscape(e.trim()), "i").test(t)
                }, e.FILTER_STARTSWITH = function(t, e) {
                    return RegExp("^" + o.regExpEscape(e.trim()), "i").test(t)
                }, e.SORT_BYLENGTH = function(t, e) {
                    return t.length !== e.length ? t.length - e.length : t < e ? -1 : 1
                }, e.CONTAINER = function(t) {
                    return o.create("div", {
                        className: "awesomplete",
                        around: t
                    })
                }, e.ITEM = function(t, e, n) {
                    var r = "" === e.trim() ? t : t.replace(RegExp(o.regExpEscape(e.trim()), "gi"), "<mark>$&</mark>");
                    return o.create("li", {
                        innerHTML: r,
                        role: "option",
                        "aria-selected": "false",
                        id: "awesomplete_list_" + this.count + "_item_" + n
                    })
                }, e.REPLACE = function(t) {
                    this.input.value = t.value
                }, e.DATA = function(t) {
                    return t
                }, Object.defineProperty(n.prototype = Object.create(String.prototype), "length", {
                    get: function() {
                        return this.label.length
                    }
                }), n.prototype.toString = n.prototype.valueOf = function() {
                    return "" + this.label
                };
                var r = Array.prototype.slice;

                function o(t, e) {
                    return "string" == typeof t ? (e || document).querySelector(t) : t || null
                }
                function i(t, e) {
                    return r.call((e || document).querySelectorAll(t))
                }
                function a() {
                    i("input.awesomplete").forEach((function(t) {
                        new e(t)
                    }))
                }
                o.create = function(t, e) {
                    var n = document.createElement(t);
                    for (var r in e) {
                        var i = e[r];
                        if ("inside" === r) o(i).appendChild(n);
                        else if ("around" === r) {
                            var a = o(i);
                            a.parentNode.insertBefore(n, a), n.appendChild(a), null != a.getAttribute("autofocus") && a.focus()
                        } else r in n ? n[r] = i : n.setAttribute(r, i)
                    }
                    return n
                }, o.bind = function(t, e) {
                    if (t) for (var n in e) {
                            var r = e[n];
                            n.split(/\s+/).forEach((function(e) {
                                t.addEventListener(e, r)
                            }))
                    }
                }, o.unbind = function(t, e) {
                    if (t) for (var n in e) {
                            var r = e[n];
                            n.split(/\s+/).forEach((function(e) {
                                t.removeEventListener(e, r)
                            }))
                    }
                }, o.fire = function(t, e, n) {
                    var r = document.createEvent("HTMLEvents");
                    for (var o in r.initEvent(e, !0, !0), n) r[o] = n[o];
                    return t.dispatchEvent(r)
                }, o.regExpEscape = function(t) {
                    return t.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
                }, o.siblingIndex = function(t) {
                    for (var e = 0; t = t.previousElementSibling; e++);
                    return e
                }, "undefined" != typeof self && (self.Awesomplete = e), "undefined" != typeof Document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a)), e.$ = o, e.$$ = i, t.exports && (t.exports = e)
            }()
        }));
    /**!
     * Sortable 1.13.0
     * @author	RubaXa   <trash@rubaxa.org>
     * @author	owenm    <owen23355@gmail.com>
     * @license MIT
     */
    function Tl(t) {
        return (Tl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    function Cl(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    function Sl() {
        return (Sl = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }).apply(this, arguments)
    }
    function Al(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            })))), r.forEach((function(e) {
                Cl(t, e, n[e])
            }))
        }
        return t
    }
    function kl(t, e) {
        if (null == t) return {};
        var n, r, o = function(t, e) {
                if (null == t) return {};
                var n, r, o = {}, i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }(t, e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
        }
        return o
    }
    function Ol(t) {
        if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t)
    }
    var Ll = Ol(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
        Nl = Ol(/Edge/i),
        Dl = Ol(/firefox/i),
        Pl = Ol(/safari/i) && !Ol(/chrome/i) && !Ol(/android/i),
        _l = Ol(/iP(ad|od|hone)/i),
        jl = Ol(/chrome/i) && Ol(/android/i),
        Il = {
            capture: !1,
            passive: !1
        };

    function Rl(t, e, n) {
        t.addEventListener(e, n, !Ll && Il)
    }
    function Ml(t, e, n) {
        t.removeEventListener(e, n, !Ll && Il)
    }
    function Bl(t, e) {
        if (e) {
            if (">" === e[0] && (e = e.substring(1)), t) try {
                    if (t.matches) return t.matches(e);
                    if (t.msMatchesSelector) return t.msMatchesSelector(e);
                    if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
            } catch (t) {
                return !1
            }
            return !1
        }
    }
    function Fl(t) {
        return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
    }
    function Hl(t, e, n, r) {
        if (t) {
            n = n || document;
            do {
                if (null != e && (">" === e[0] ? t.parentNode === n && Bl(t, e) : Bl(t, e)) || r && t === n) return t;
                if (t === n) break
            } while (t = Fl(t))
        }
        return null
    }
    var ql, Ul = /\s+/g;

    function zl(t, e, n) {
        if (t && e) if (t.classList) t.classList[n ? "add" : "remove"](e);
            else {
                var r = (" " + t.className + " ").replace(Ul, " ").replace(" " + e + " ", " ");
                t.className = (r + (n ? " " + e : "")).replace(Ul, " ")
            }
    }
    function Yl(t, e, n) {
        var r = t && t.style;
        if (r) {
            if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
            e in r || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), r[e] = n + ("string" == typeof n ? "" : "px")
        }
    }
    function Wl(t, e) {
        var n = "";
        if ("string" == typeof t) n = t;
        else do {
                var r = Yl(t, "transform");
                r && "none" !== r && (n = r + " " + n)
        }
        while (!e && (t = t.parentNode));
        var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return o && new o(n)
    }
    function Xl(t, e, n) {
        if (t) {
            var r = t.getElementsByTagName(e),
                o = 0,
                i = r.length;
            if (n) for (; o < i; o++) n(r[o], o);
            return r
        }
        return []
    }
    function $l() {
        var t = document.scrollingElement;
        return t || document.documentElement
    }
    function Vl(t, e, n, r, o) {
        if (t.getBoundingClientRect || t === window) {
            var i, a, s, u, c, l, f;
            if (t !== window && t.parentNode && t !== $l() ? (a = (i = t.getBoundingClientRect()).top, s = i.left, u = i.bottom, c = i.right, l = i.height, f = i.width) : (a = 0, s = 0, u = window.innerHeight, c = window.innerWidth, l = window.innerHeight, f = window.innerWidth), (e || n) && t !== window && (o = o || t.parentNode, !Ll)) do {
                    if (o && o.getBoundingClientRect && ("none" !== Yl(o, "transform") || n && "static" !== Yl(o, "position"))) {
                        var d = o.getBoundingClientRect();
                        a -= d.top + parseInt(Yl(o, "border-top-width")), s -= d.left + parseInt(Yl(o, "border-left-width")), u = a + i.height, c = s + i.width;
                        break
                    }
            }
            while (o = o.parentNode);
            if (r && t !== window) {
                var h = Wl(o || t),
                    p = h && h.a,
                    g = h && h.d;
                h && (u = (a /= g) + (l /= g), c = (s /= p) + (f /= p))
            }
            return {
                top: a,
                left: s,
                bottom: u,
                right: c,
                width: f,
                height: l
            }
        }
    }
    function Gl(t, e, n) {
        for (var r = tf(t, !0), o = Vl(t)[e]; r;) {
            var i = Vl(r)[n];
            if (!("top" === n || "left" === n ? o >= i : o <= i)) return r;
            if (r === $l()) break;
            r = tf(r, !1)
        }
        return !1
    }
    function Kl(t, e, n) {
        for (var r = 0, o = 0, i = t.children; o < i.length;) {
            if ("none" !== i[o].style.display && i[o] !== rd.ghost && i[o] !== rd.dragged && Hl(i[o], n.draggable, t, !1)) {
                if (r === e) return i[o];
                r++
            }
            o++
        }
        return null
    }
    function Ql(t, e) {
        for (var n = t.lastElementChild; n && (n === rd.ghost || "none" === Yl(n, "display") || e && !Bl(n, e));) n = n.previousElementSibling;
        return n || null
    }
    function Jl(t, e) {
        var n = 0;
        if (!t || !t.parentNode) return -1;
        for (; t = t.previousElementSibling;) "TEMPLATE" === t.nodeName.toUpperCase() || t === rd.clone || e && !Bl(t, e) || n++;
        return n
    }
    function Zl(t) {
        var e = 0,
            n = 0,
            r = $l();
        if (t) do {
                var o = Wl(t),
                    i = o.a,
                    a = o.d;
                e += t.scrollLeft * i, n += t.scrollTop * a
        }
        while (t !== r && (t = t.parentNode));
        return [e, n]
    }
    function tf(t, e) {
        if (!t || !t.getBoundingClientRect) return $l();
        var n = t,
            r = !1;
        do {
            if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                var o = Yl(n);
                if (n.clientWidth < n.scrollWidth && ("auto" == o.overflowX || "scroll" == o.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == o.overflowY || "scroll" == o.overflowY)) {
                    if (!n.getBoundingClientRect || n === document.body) return $l();
                    if (r || e) return n;
                    r = !0
                }
            }
        } while (n = n.parentNode);
        return $l()
    }
    function ef(t, e) {
        return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
    }
    function nf(t, e) {
        return function() {
            if (!ql) {
                var n = arguments,
                    r = this;
                1 === n.length ? t.call(r, n[0]) : t.apply(r, n), ql = setTimeout((function() {
                    ql = void 0
                }), e)
            }
        }
    }
    function rf(t, e, n) {
        t.scrollLeft += e, t.scrollTop += n
    }
    function of(t) {
        var e = window.Polymer,
            n = window.jQuery || window.Zepto;
        return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
    }
    var af = "Sortable" + (new Date).getTime();

    function sf() {
        var t, e = [];
        return {
            captureAnimationState: function() {
                (e = [], this.options.animation) && [].slice.call(this.el.children).forEach((function(t) {
                    if ("none" !== Yl(t, "display") && t !== rd.ghost) {
                        e.push({
                            target: t,
                            rect: Vl(t)
                        });
                        var n = Al({}, e[e.length - 1].rect);
                        if (t.thisAnimationDuration) {
                            var r = Wl(t, !0);
                            r && (n.top -= r.f, n.left -= r.e)
                        }
                        t.fromRect = n
                    }
                }))
            },
            addAnimationState: function(t) {
                e.push(t)
            },
            removeAnimationState: function(t) {
                e.splice(function(t, e) {
                    for (var n in t) if (t.hasOwnProperty(n)) for (var r in e) if (e.hasOwnProperty(r) && e[r] === t[n][r]) return Number(n);
                    return -1
                }(e, {
                    target: t
                }), 1)
            },
            animateAll: function(n) {
                var r = this;
                if (!this.options.animation) return clearTimeout(t), void("function" == typeof n && n());
                var o = !1,
                    i = 0;
                e.forEach((function(t) {
                    var e = 0,
                        n = t.target,
                        a = n.fromRect,
                        s = Vl(n),
                        u = n.prevFromRect,
                        c = n.prevToRect,
                        l = t.rect,
                        f = Wl(n, !0);
                    f && (s.top -= f.f, s.left -= f.e), n.toRect = s, n.thisAnimationDuration && ef(u, s) && !ef(a, s) && (l.top - s.top) / (l.left - s.left) == (a.top - s.top) / (a.left - s.left) && (e = function(t, e, n, r) {
                        return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation
                    }(l, u, c, r.options)), ef(s, a) || (n.prevFromRect = a, n.prevToRect = s, e || (e = r.options.animation), r.animate(n, l, s, e)), e && (o = !0, i = Math.max(i, e), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout((function() {
                        n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                    }), e), n.thisAnimationDuration = e)
                })), clearTimeout(t), o ? t = setTimeout((function() {
                    "function" == typeof n && n()
                }), i) : "function" == typeof n && n(), e = []
            },
            animate: function(t, e, n, r) {
                if (r) {
                    Yl(t, "transition", ""), Yl(t, "transform", "");
                    var o = Wl(this.el),
                        i = o && o.a,
                        a = o && o.d,
                        s = (e.left - n.left) / (i || 1),
                        u = (e.top - n.top) / (a || 1);
                    t.animatingX = !! s, t.animatingY = !! u, Yl(t, "transform", "translate3d(" + s + "px," + u + "px,0)"), this.forRepaintDummy = function(t) {
                        return t.offsetWidth
                    }(t), Yl(t, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), Yl(t, "transform", "translate3d(0,0,0)"), "number" == typeof t.animated && clearTimeout(t.animated), t.animated = setTimeout((function() {
                        Yl(t, "transition", ""), Yl(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1
                    }), r)
                }
            }
        }
    }
    var uf = [],
        cf = {
            initializeByDefault: !0
        }, lf = {
            mount: function(t) {
                for (var e in cf) cf.hasOwnProperty(e) && !(e in t) && (t[e] = cf[e]);
                uf.forEach((function(e) {
                    if (e.pluginName === t.pluginName) throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once")
                })), uf.push(t)
            },
            pluginEvent: function(t, e, n) {
                var r = this;
                this.eventCanceled = !1, n.cancel = function() {
                    r.eventCanceled = !0
                };
                var o = t + "Global";
                uf.forEach((function(r) {
                    e[r.pluginName] && (e[r.pluginName][o] && e[r.pluginName][o](Al({
                        sortable: e
                    }, n)), e.options[r.pluginName] && e[r.pluginName][t] && e[r.pluginName][t](Al({
                        sortable: e
                    }, n)))
                }))
            },
            initializePlugins: function(t, e, n, r) {
                for (var o in uf.forEach((function(r) {
                    var o = r.pluginName;
                    if (t.options[o] || r.initializeByDefault) {
                        var i = new r(t, e, t.options);
                        i.sortable = t, i.options = t.options, t[o] = i, Sl(n, i.defaults)
                    }
                })), t.options) if (t.options.hasOwnProperty(o)) {
                        var i = this.modifyOption(t, o, t.options[o]);
                        void 0 !== i && (t.options[o] = i)
                    }
            },
            getEventProperties: function(t, e) {
                var n = {};
                return uf.forEach((function(r) {
                    "function" == typeof r.eventProperties && Sl(n, r.eventProperties.call(e[r.pluginName], t))
                })), n
            },
            modifyOption: function(t, e, n) {
                var r;
                return uf.forEach((function(o) {
                    t[o.pluginName] && o.optionListeners && "function" == typeof o.optionListeners[e] && (r = o.optionListeners[e].call(t[o.pluginName], n))
                })), r
            }
        };
    var ff = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.evt,
            o = kl(n, ["evt"]);
        lf.pluginEvent.bind(rd)(t, e, Al({
            dragEl: hf,
            parentEl: pf,
            ghostEl: gf,
            rootEl: vf,
            nextEl: mf,
            lastDownEl: yf,
            cloneEl: bf,
            cloneHidden: wf,
            dragStarted: _f,
            putSortable: Af,
            activeSortable: rd.active,
            originalEvent: r,
            oldIndex: xf,
            oldDraggableIndex: Tf,
            newIndex: Ef,
            newDraggableIndex: Cf,
            hideGhostForTarget: Zf,
            unhideGhostForTarget: td,
            cloneNowHidden: function() {
                wf = !0
            },
            cloneNowShown: function() {
                wf = !1
            },
            dispatchSortableEvent: function(t) {
                df({
                    sortable: e,
                    name: t,
                    originalEvent: r
                })
            }
        }, o))
    };

    function df(t) {
        ! function(t) {
            var e = t.sortable,
                n = t.rootEl,
                r = t.name,
                o = t.targetEl,
                i = t.cloneEl,
                a = t.toEl,
                s = t.fromEl,
                u = t.oldIndex,
                c = t.newIndex,
                l = t.oldDraggableIndex,
                f = t.newDraggableIndex,
                d = t.originalEvent,
                h = t.putSortable,
                p = t.extraEventProperties;
            if (e = e || n && n[af]) {
                var g, v = e.options,
                    m = "on" + r.charAt(0).toUpperCase() + r.substr(1);
                !window.CustomEvent || Ll || Nl ? (g = document.createEvent("Event")).initEvent(r, !0, !0) : g = new CustomEvent(r, {
                    bubbles: !0,
                    cancelable: !0
                }), g.to = a || n, g.from = s || n, g.item = o || n, g.clone = i, g.oldIndex = u, g.newIndex = c, g.oldDraggableIndex = l, g.newDraggableIndex = f, g.originalEvent = d, g.pullMode = h ? h.lastPutMode : void 0;
                var y = Al({}, p, lf.getEventProperties(r, e));
                for (var b in y) g[b] = y[b];
                n && n.dispatchEvent(g), v[m] && v[m].call(e, g)
            }
        }(Al({
            putSortable: Af,
            cloneEl: bf,
            targetEl: hf,
            rootEl: vf,
            oldIndex: xf,
            oldDraggableIndex: Tf,
            newIndex: Ef,
            newDraggableIndex: Cf
        }, t))
    }
    var hf, pf, gf, vf, mf, yf, bf, wf, xf, Ef, Tf, Cf, Sf, Af, kf, Of, Lf, Nf, Df, Pf, _f, jf, If, Rf, Mf, Bf = !1,
        Ff = !1,
        Hf = [],
        qf = !1,
        Uf = !1,
        zf = [],
        Yf = !1,
        Wf = [],
        Xf = "undefined" != typeof document,
        $f = _l,
        Vf = Nl || Ll ? "cssFloat" : "float",
        Gf = Xf && !jl && !_l && "draggable" in document.createElement("div"),
        Kf = function() {
            if (Xf) {
                if (Ll) return !1;
                var t = document.createElement("x");
                return t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents
            }
        }(),
        Qf = function(t, e) {
            var n = Yl(t),
                r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                o = Kl(t, 0, e),
                i = Kl(t, 1, e),
                a = o && Yl(o),
                s = i && Yl(i),
                u = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + Vl(o).width,
                c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Vl(i).width;
            if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
            if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
            if (o && a.float && "none" !== a.float) {
                var l = "left" === a.float ? "left" : "right";
                return !i || "both" !== s.clear && s.clear !== l ? "horizontal" : "vertical"
            }
            return o && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || u >= r && "none" === n[Vf] || i && "none" === n[Vf] && u + c > r) ? "vertical" : "horizontal"
        }, Jf = function(t) {
            function e(t, n) {
                return function(r, o, i, a) {
                    var s = r.options.group.name && o.options.group.name && r.options.group.name === o.options.group.name;
                    if (null == t && (n || s)) return !0;
                    if (null == t || !1 === t) return !1;
                    if (n && "clone" === t) return t;
                    if ("function" == typeof t) return e(t(r, o, i, a), n)(r, o, i, a);
                    var u = (n ? r : o).options.group.name;
                    return !0 === t || "string" == typeof t && t === u || t.join && t.indexOf(u) > -1
                }
            }
            var n = {}, r = t.group;
            r && "object" == Tl(r) || (r = {
                name: r
            }), n.name = r.name, n.checkPull = e(r.pull, !0), n.checkPut = e(r.put), n.revertClone = r.revertClone, t.group = n
        }, Zf = function() {
            !Kf && gf && Yl(gf, "display", "none")
        }, td = function() {
            !Kf && gf && Yl(gf, "display", "")
        };
    Xf && document.addEventListener("click", (function(t) {
        if (Ff) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Ff = !1, !1
    }), !0);
    var ed = function(t) {
        if (hf) {
            t = t.touches ? t.touches[0] : t;
            var e = (o = t.clientX, i = t.clientY, Hf.some((function(t) {
                if (!Ql(t)) {
                    var e = Vl(t),
                        n = t[af].options.emptyInsertThreshold,
                        r = o >= e.left - n && o <= e.right + n,
                        s = i >= e.top - n && i <= e.bottom + n;
                    return n && r && s ? a = t : void 0
                }
            })), a);
            if (e) {
                var n = {};
                for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[af]._onDragOver(n)
            }
        }
        var o, i, a
    }, nd = function(t) {
            hf && hf.parentNode[af]._isOutsideThisEl(t.target)
        };

    function rd(t, e) {
        if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
        this.el = t, this.options = e = Sl({}, e), t[af] = this;
        var n = {
            group: null,
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
            swapThreshold: 1,
            invertSwap: !1,
            invertedSwapThreshold: null,
            removeCloneOnHide: !0,
            direction: function() {
                return Qf(t, this.options)
            },
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            ignore: "a, img",
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            easing: null,
            setData: function(t, e) {
                t.setData("Text", e.textContent)
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: "data-id",
            delay: 0,
            delayOnTouchOnly: !1,
            touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: !1,
            fallbackClass: "sortable-fallback",
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: {
                x: 0,
                y: 0
            },
            supportPointer: !1 !== rd.supportPointer && "PointerEvent" in window && !Pl,
            emptyInsertThreshold: 5
        };
        for (var r in lf.initializePlugins(this, t, n), n)!(r in e) && (e[r] = n[r]);
        for (var o in Jf(e), this) "_" === o.charAt(0) && "function" == typeof this[o] && (this[o] = this[o].bind(this));
        this.nativeDraggable = !e.forceFallback && Gf, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Rl(t, "pointerdown", this._onTapStart) : (Rl(t, "mousedown", this._onTapStart), Rl(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Rl(t, "dragover", this), Rl(t, "dragenter", this)), Hf.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Sl(this, sf())
    }
    function od(t, e, n, r, o, i, a, s) {
        var u, c, l = t[af],
            f = l.options.onMove;
        return !window.CustomEvent || Ll || Nl ? (u = document.createEvent("Event")).initEvent("move", !0, !0) : u = new CustomEvent("move", {
            bubbles: !0,
            cancelable: !0
        }), u.to = e, u.from = t, u.dragged = n, u.draggedRect = r, u.related = o || e, u.relatedRect = i || Vl(e), u.willInsertAfter = s, u.originalEvent = a, t.dispatchEvent(u), f && (c = f.call(l, u, a)), c
    }
    function id(t) {
        t.draggable = !1
    }
    function ad() {
        Yf = !1
    }
    function sd(t) {
        for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--;) r += e.charCodeAt(n);
        return r.toString(36)
    }
    function ud(t) {
        return setTimeout(t, 0)
    }
    function cd(t) {
        return clearTimeout(t)
    }
    rd.prototype = {
        constructor: rd,
        _isOutsideThisEl: function(t) {
            this.el.contains(t) || t === this.el || (jf = null)
        },
        _getDirection: function(t, e) {
            return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, hf) : this.options.direction
        },
        _onTapStart: function(t) {
            if (t.cancelable) {
                var e = this,
                    n = this.el,
                    r = this.options,
                    o = r.preventOnFilter,
                    i = t.type,
                    a = t.touches && t.touches[0] || t.pointerType && "touch" === t.pointerType && t,
                    s = (a || t).target,
                    u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s,
                    c = r.filter;
                if (function(t) {
                    Wf.length = 0;
                    var e = t.getElementsByTagName("input"),
                        n = e.length;
                    for (; n--;) {
                        var r = e[n];
                        r.checked && Wf.push(r)
                    }
                }(n), !hf && !(/mousedown|pointerdown/.test(i) && 0 !== t.button || r.disabled) && !u.isContentEditable && (this.nativeDraggable || !Pl || !s || "SELECT" !== s.tagName.toUpperCase()) && !((s = Hl(s, r.draggable, n, !1)) && s.animated || yf === s)) {
                    if (xf = Jl(s), Tf = Jl(s, r.draggable), "function" == typeof c) {
                        if (c.call(this, t, s, this)) return df({
                                sortable: e,
                                rootEl: u,
                                name: "filter",
                                targetEl: s,
                                toEl: n,
                                fromEl: n
                            }), ff("filter", e, {
                                evt: t
                            }), void(o && t.cancelable && t.preventDefault())
                    } else if (c && (c = c.split(",").some((function(r) {
                        if (r = Hl(u, r.trim(), n, !1)) return df({
                                sortable: e,
                                rootEl: r,
                                name: "filter",
                                targetEl: s,
                                fromEl: n,
                                toEl: n
                            }), ff("filter", e, {
                                evt: t
                            }), !0
                    })))) return void(o && t.cancelable && t.preventDefault());
                    r.handle && !Hl(u, r.handle, n, !1) || this._prepareDragStart(t, a, s)
                }
            }
        },
        _prepareDragStart: function(t, e, n) {
            var r, o = this,
                i = o.el,
                a = o.options,
                s = i.ownerDocument;
            if (n && !hf && n.parentNode === i) {
                var u = Vl(n);
                if (vf = i, pf = (hf = n).parentNode, mf = hf.nextSibling, yf = n, Sf = a.group, rd.dragged = hf, kf = {
                    target: hf,
                    clientX: (e || t).clientX,
                    clientY: (e || t).clientY
                }, Df = kf.clientX - u.left, Pf = kf.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, hf.style["will-change"] = "all", r = function() {
                    ff("delayEnded", o, {
                        evt: t
                    }), rd.eventCanceled ? o._onDrop() : (o._disableDelayedDragEvents(), !Dl && o.nativeDraggable && (hf.draggable = !0), o._triggerDragStart(t, e), df({
                        sortable: o,
                        name: "choose",
                        originalEvent: t
                    }), zl(hf, a.chosenClass, !0))
                }, a.ignore.split(",").forEach((function(t) {
                    Xl(hf, t.trim(), id)
                })), Rl(s, "dragover", ed), Rl(s, "mousemove", ed), Rl(s, "touchmove", ed), Rl(s, "mouseup", o._onDrop), Rl(s, "touchend", o._onDrop), Rl(s, "touchcancel", o._onDrop), Dl && this.nativeDraggable && (this.options.touchStartThreshold = 4, hf.draggable = !0), ff("delayStart", this, {
                    evt: t
                }), !a.delay || a.delayOnTouchOnly && !e || this.nativeDraggable && (Nl || Ll)) r();
                else {
                    if (rd.eventCanceled) return void this._onDrop();
                    Rl(s, "mouseup", o._disableDelayedDrag), Rl(s, "touchend", o._disableDelayedDrag), Rl(s, "touchcancel", o._disableDelayedDrag), Rl(s, "mousemove", o._delayedDragTouchMoveHandler), Rl(s, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && Rl(s, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(r, a.delay)
                }
            }
        },
        _delayedDragTouchMoveHandler: function(t) {
            var e = t.touches ? t.touches[0] : t;
            Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
        },
        _disableDelayedDrag: function() {
            hf && id(hf), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
        },
        _disableDelayedDragEvents: function() {
            var t = this.el.ownerDocument;
            Ml(t, "mouseup", this._disableDelayedDrag), Ml(t, "touchend", this._disableDelayedDrag), Ml(t, "touchcancel", this._disableDelayedDrag), Ml(t, "mousemove", this._delayedDragTouchMoveHandler), Ml(t, "touchmove", this._delayedDragTouchMoveHandler), Ml(t, "pointermove", this._delayedDragTouchMoveHandler)
        },
        _triggerDragStart: function(t, e) {
            e = e || "touch" == t.pointerType && t, !this.nativeDraggable || e ? this.options.supportPointer ? Rl(document, "pointermove", this._onTouchMove) : Rl(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (Rl(hf, "dragend", this), Rl(vf, "dragstart", this._onDragStart));
            try {
                document.selection ? ud((function() {
                    document.selection.empty()
                })) : window.getSelection().removeAllRanges()
            } catch (t) {}
        },
        _dragStarted: function(t, e) {
            if (Bf = !1, vf && hf) {
                ff("dragStarted", this, {
                    evt: e
                }), this.nativeDraggable && Rl(document, "dragover", nd);
                var n = this.options;
                !t && zl(hf, n.dragClass, !1), zl(hf, n.ghostClass, !0), rd.active = this, t && this._appendGhost(), df({
                    sortable: this,
                    name: "start",
                    originalEvent: e
                })
            } else this._nulling()
        },
        _emulateDragOver: function() {
            if (Of) {
                this._lastX = Of.clientX, this._lastY = Of.clientY, Zf();
                for (var t = document.elementFromPoint(Of.clientX, Of.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Of.clientX, Of.clientY)) !== e;) e = t;
                if (hf.parentNode[af]._isOutsideThisEl(t), e) do {
                        if (e[af]) {
                            if (e[af]._onDragOver({
                                clientX: Of.clientX,
                                clientY: Of.clientY,
                                target: t,
                                rootEl: e
                            }) && !this.options.dragoverBubble) break
                        }
                        t = e
                }
                while (e = e.parentNode);
                td()
            }
        },
        _onTouchMove: function(t) {
            if (kf) {
                var e = this.options,
                    n = e.fallbackTolerance,
                    r = e.fallbackOffset,
                    o = t.touches ? t.touches[0] : t,
                    i = gf && Wl(gf, !0),
                    a = gf && i && i.a,
                    s = gf && i && i.d,
                    u = $f && Mf && Zl(Mf),
                    c = (o.clientX - kf.clientX + r.x) / (a || 1) + (u ? u[0] - zf[0] : 0) / (a || 1),
                    l = (o.clientY - kf.clientY + r.y) / (s || 1) + (u ? u[1] - zf[1] : 0) / (s || 1);
                if (!rd.active && !Bf) {
                    if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n) return;
                    this._onDragStart(t, !0)
                }
                if (gf) {
                    i ? (i.e += c - (Lf || 0), i.f += l - (Nf || 0)) : i = {
                        a: 1,
                        b: 0,
                        c: 0,
                        d: 1,
                        e: c,
                        f: l
                    };
                    var f = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
                    Yl(gf, "webkitTransform", f), Yl(gf, "mozTransform", f), Yl(gf, "msTransform", f), Yl(gf, "transform", f), Lf = c, Nf = l, Of = o
                }
                t.cancelable && t.preventDefault()
            }
        },
        _appendGhost: function() {
            if (!gf) {
                var t = this.options.fallbackOnBody ? document.body : vf,
                    e = Vl(hf, !0, $f, !0, t),
                    n = this.options;
                if ($f) {
                    for (Mf = t;
                    "static" === Yl(Mf, "position") && "none" === Yl(Mf, "transform") && Mf !== document;) Mf = Mf.parentNode;
                    Mf !== document.body && Mf !== document.documentElement ? (Mf === document && (Mf = $l()), e.top += Mf.scrollTop, e.left += Mf.scrollLeft) : Mf = $l(), zf = Zl(Mf)
                }
                zl(gf = hf.cloneNode(!0), n.ghostClass, !1), zl(gf, n.fallbackClass, !0), zl(gf, n.dragClass, !0), Yl(gf, "transition", ""), Yl(gf, "transform", ""), Yl(gf, "box-sizing", "border-box"), Yl(gf, "margin", 0), Yl(gf, "top", e.top), Yl(gf, "left", e.left), Yl(gf, "width", e.width), Yl(gf, "height", e.height), Yl(gf, "opacity", "0.8"), Yl(gf, "position", $f ? "absolute" : "fixed"), Yl(gf, "zIndex", "100000"), Yl(gf, "pointerEvents", "none"), rd.ghost = gf, t.appendChild(gf), Yl(gf, "transform-origin", Df / parseInt(gf.style.width) * 100 + "% " + Pf / parseInt(gf.style.height) * 100 + "%")
            }
        },
        _onDragStart: function(t, e) {
            var n = this,
                r = t.dataTransfer,
                o = n.options;
            ff("dragStart", this, {
                evt: t
            }), rd.eventCanceled ? this._onDrop() : (ff("setupClone", this), rd.eventCanceled || ((bf = of(hf)).draggable = !1, bf.style["will-change"] = "", this._hideClone(), zl(bf, this.options.chosenClass, !1), rd.clone = bf), n.cloneId = ud((function() {
                ff("clone", n), rd.eventCanceled || (n.options.removeCloneOnHide || vf.insertBefore(bf, hf), n._hideClone(), df({
                    sortable: n,
                    name: "clone"
                }))
            })), !e && zl(hf, o.dragClass, !0), e ? (Ff = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (Ml(document, "mouseup", n._onDrop), Ml(document, "touchend", n._onDrop), Ml(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", o.setData && o.setData.call(n, r, hf)), Rl(document, "drop", n), Yl(hf, "transform", "translateZ(0)")), Bf = !0, n._dragStartId = ud(n._dragStarted.bind(n, e, t)), Rl(document, "selectstart", n), _f = !0, Pl && Yl(document.body, "user-select", "none"))
        },
        _onDragOver: function(t) {
            var e, n, r, o, i = this.el,
                a = t.target,
                s = this.options,
                u = s.group,
                c = rd.active,
                l = Sf === u,
                f = s.sort,
                d = Af || c,
                h = this,
                p = !1;
            if (!Yf) {
                if (void 0 !== t.preventDefault && t.cancelable && t.preventDefault(), a = Hl(a, s.draggable, i, !0), O("dragOver"), rd.eventCanceled) return p;
                if (hf.contains(t.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a) return N(!1);
                if (Ff = !1, c && !s.disabled && (l ? f || (r = !vf.contains(hf)) : Af === this || (this.lastPutMode = Sf.checkPull(this, c, hf, t)) && u.checkPut(this, c, hf, t))) {
                    if (o = "vertical" === this._getDirection(t, a), e = Vl(hf), O("dragOverValid"), rd.eventCanceled) return p;
                    if (r) return pf = vf, L(), this._hideClone(), O("revert"), rd.eventCanceled || (mf ? vf.insertBefore(hf, mf) : vf.appendChild(hf)), N(!0);
                    var g = Ql(i, s.draggable);
                    if (!g || function(t, e, n) {
                        var r = Vl(Ql(n.el, n.options.draggable)),
                            o = 10;
                        return e ? t.clientX > r.right + o || t.clientX <= r.right && t.clientY > r.bottom && t.clientX >= r.left : t.clientX > r.right && t.clientY > r.top || t.clientX <= r.right && t.clientY > r.bottom + o
                    }(t, o, this) && !g.animated) {
                        if (g === hf) return N(!1);
                        if (g && i === t.target && (a = g), a && (n = Vl(a)), !1 !== od(vf, i, hf, e, a, n, t, !! a)) return L(), i.appendChild(hf), pf = i, D(), N(!0)
                    } else if (a.parentNode === i) {
                        n = Vl(a);
                        var v, m, y, b = hf.parentNode !== i,
                            w = ! function(t, e, n) {
                                var r = n ? t.left : t.top,
                                    o = n ? t.right : t.bottom,
                                    i = n ? t.width : t.height,
                                    a = n ? e.left : e.top,
                                    s = n ? e.right : e.bottom,
                                    u = n ? e.width : e.height;
                                return r === a || o === s || r + i / 2 === a + u / 2
                            }(hf.animated && hf.toRect || e, a.animated && a.toRect || n, o),
                            x = o ? "top" : "left",
                            E = Gl(a, "top", "top") || Gl(hf, "top", "top"),
                            T = E ? E.scrollTop : void 0;
                        if (jf !== a && (m = n[x], qf = !1, Uf = !w && s.invertSwap || b), 0 !== (v = function(t, e, n, r, o, i, a, s) {
                            var u = r ? t.clientY : t.clientX,
                                c = r ? n.height : n.width,
                                l = r ? n.top : n.left,
                                f = r ? n.bottom : n.right,
                                d = !1;
                            if (!a) if (s && Rf < c * o) {
                                    if (!qf && (1 === If ? u > l + c * i / 2 : u < f - c * i / 2) && (qf = !0), qf) d = !0;
                                    else if (1 === If ? u < l + Rf : u > f - Rf) return -If
                                } else if (u > l + c * (1 - o) / 2 && u < f - c * (1 - o) / 2) return function(t) {
                                    return Jl(hf) < Jl(t) ? 1 : -1
                            }(e);
                            if ((d = d || a) && (u < l + c * i / 2 || u > f - c * i / 2)) return u > l + c / 2 ? 1 : -1;
                            return 0
                        }(t, a, n, o, w ? 1 : s.swapThreshold, null == s.invertedSwapThreshold ? s.swapThreshold : s.invertedSwapThreshold, Uf, jf === a))) {
                            var C = Jl(hf);
                            do {
                                C -= v, y = pf.children[C]
                            } while (y && ("none" === Yl(y, "display") || y === gf))
                        }
                        if (0 === v || y === a) return N(!1);
                        jf = a, If = v;
                        var S = a.nextElementSibling,
                            A = !1,
                            k = od(vf, i, hf, e, a, n, t, A = 1 === v);
                        if (!1 !== k) return 1 !== k && -1 !== k || (A = 1 === k), Yf = !0, setTimeout(ad, 30), L(), A && !S ? i.appendChild(hf) : a.parentNode.insertBefore(hf, A ? S : a), E && rf(E, 0, T - E.scrollTop), pf = hf.parentNode, void 0 === m || Uf || (Rf = Math.abs(m - Vl(a)[x])), D(), N(!0)
                    }
                    if (i.contains(hf)) return N(!1)
                }
                return !1
            }
            function O(s, u) {
                ff(s, h, Al({
                    evt: t,
                    isOwner: l,
                    axis: o ? "vertical" : "horizontal",
                    revert: r,
                    dragRect: e,
                    targetRect: n,
                    canSort: f,
                    fromSortable: d,
                    target: a,
                    completed: N,
                    onMove: function(n, r) {
                        return od(vf, i, hf, e, n, Vl(n), t, r)
                    },
                    changed: D
                }, u))
            }
            function L() {
                O("dragOverAnimationCapture"), h.captureAnimationState(), h !== d && d.captureAnimationState()
            }
            function N(e) {
                return O("dragOverCompleted", {
                    insertion: e
                }), e && (l ? c._hideClone() : c._showClone(h), h !== d && (zl(hf, Af ? Af.options.ghostClass : c.options.ghostClass, !1), zl(hf, s.ghostClass, !0)), Af !== h && h !== rd.active ? Af = h : h === rd.active && Af && (Af = null), d === h && (h._ignoreWhileAnimating = a), h.animateAll((function() {
                    O("dragOverAnimationComplete"), h._ignoreWhileAnimating = null
                })), h !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (a === hf && !hf.animated || a === i && !a.animated) && (jf = null), s.dragoverBubble || t.rootEl || a === document || (hf.parentNode[af]._isOutsideThisEl(t.target), !e && ed(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), p = !0
            }
            function D() {
                Ef = Jl(hf), Cf = Jl(hf, s.draggable), df({
                    sortable: h,
                    name: "change",
                    toEl: i,
                    newIndex: Ef,
                    newDraggableIndex: Cf,
                    originalEvent: t
                })
            }
        },
        _ignoreWhileAnimating: null,
        _offMoveEvents: function() {
            Ml(document, "mousemove", this._onTouchMove), Ml(document, "touchmove", this._onTouchMove), Ml(document, "pointermove", this._onTouchMove), Ml(document, "dragover", ed), Ml(document, "mousemove", ed), Ml(document, "touchmove", ed)
        },
        _offUpEvents: function() {
            var t = this.el.ownerDocument;
            Ml(t, "mouseup", this._onDrop), Ml(t, "touchend", this._onDrop), Ml(t, "pointerup", this._onDrop), Ml(t, "touchcancel", this._onDrop), Ml(document, "selectstart", this)
        },
        _onDrop: function(t) {
            var e = this.el,
                n = this.options;
            Ef = Jl(hf), Cf = Jl(hf, n.draggable), ff("drop", this, {
                evt: t
            }), pf = hf && hf.parentNode, Ef = Jl(hf), Cf = Jl(hf, n.draggable), rd.eventCanceled || (Bf = !1, Uf = !1, qf = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), cd(this.cloneId), cd(this._dragStartId), this.nativeDraggable && (Ml(document, "drop", this), Ml(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Pl && Yl(document.body, "user-select", ""), Yl(hf, "transform", ""), t && (_f && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), gf && gf.parentNode && gf.parentNode.removeChild(gf), (vf === pf || Af && "clone" !== Af.lastPutMode) && bf && bf.parentNode && bf.parentNode.removeChild(bf), hf && (this.nativeDraggable && Ml(hf, "dragend", this), id(hf), hf.style["will-change"] = "", _f && !Bf && zl(hf, Af ? Af.options.ghostClass : this.options.ghostClass, !1), zl(hf, this.options.chosenClass, !1), df({
                sortable: this,
                name: "unchoose",
                toEl: pf,
                newIndex: null,
                newDraggableIndex: null,
                originalEvent: t
            }), vf !== pf ? (Ef >= 0 && (df({
                rootEl: pf,
                name: "add",
                toEl: pf,
                fromEl: vf,
                originalEvent: t
            }), df({
                sortable: this,
                name: "remove",
                toEl: pf,
                originalEvent: t
            }), df({
                rootEl: pf,
                name: "sort",
                toEl: pf,
                fromEl: vf,
                originalEvent: t
            }), df({
                sortable: this,
                name: "sort",
                toEl: pf,
                originalEvent: t
            })), Af && Af.save()) : Ef !== xf && Ef >= 0 && (df({
                sortable: this,
                name: "update",
                toEl: pf,
                originalEvent: t
            }), df({
                sortable: this,
                name: "sort",
                toEl: pf,
                originalEvent: t
            })), rd.active && (null != Ef && -1 !== Ef || (Ef = xf, Cf = Tf), df({
                sortable: this,
                name: "end",
                toEl: pf,
                originalEvent: t
            }), this.save())))), this._nulling()
        },
        _nulling: function() {
            ff("nulling", this), vf = hf = pf = gf = mf = bf = yf = wf = kf = Of = _f = Ef = Cf = xf = Tf = jf = If = Af = Sf = rd.dragged = rd.ghost = rd.clone = rd.active = null, Wf.forEach((function(t) {
                t.checked = !0
            })), Wf.length = Lf = Nf = 0
        },
        handleEvent: function(t) {
            switch (t.type) {
                case "drop":
                case "dragend":
                    this._onDrop(t);
                    break;
                case "dragenter":
                case "dragover":
                    hf && (this._onDragOver(t), function(t) {
                        t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                        t.cancelable && t.preventDefault()
                    }(t));
                    break;
                case "selectstart":
                    t.preventDefault()
            }
        },
        toArray: function() {
            for (var t, e = [], n = this.el.children, r = 0, o = n.length, i = this.options; r < o; r++) Hl(t = n[r], i.draggable, this.el, !1) && e.push(t.getAttribute(i.dataIdAttr) || sd(t));
            return e
        },
        sort: function(t, e) {
            var n = {}, r = this.el;
            this.toArray().forEach((function(t, e) {
                var o = r.children[e];
                Hl(o, this.options.draggable, r, !1) && (n[t] = o)
            }), this), e && this.captureAnimationState(), t.forEach((function(t) {
                n[t] && (r.removeChild(n[t]), r.appendChild(n[t]))
            })), e && this.animateAll()
        },
        save: function() {
            var t = this.options.store;
            t && t.set && t.set(this)
        },
        closest: function(t, e) {
            return Hl(t, e || this.options.draggable, this.el, !1)
        },
        option: function(t, e) {
            var n = this.options;
            if (void 0 === e) return n[t];
            var r = lf.modifyOption(this, t, e);
            n[t] = void 0 !== r ? r : e, "group" === t && Jf(n)
        },
        destroy: function() {
            ff("destroy", this);
            var t = this.el;
            t[af] = null, Ml(t, "mousedown", this._onTapStart), Ml(t, "touchstart", this._onTapStart), Ml(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Ml(t, "dragover", this), Ml(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
                t.removeAttribute("draggable")
            })), this._onDrop(), this._disableDelayedDragEvents(), Hf.splice(Hf.indexOf(this.el), 1), this.el = t = null
        },
        _hideClone: function() {
            if (!wf) {
                if (ff("hideClone", this), rd.eventCanceled) return;
                Yl(bf, "display", "none"), this.options.removeCloneOnHide && bf.parentNode && bf.parentNode.removeChild(bf), wf = !0
            }
        },
        _showClone: function(t) {
            if ("clone" === t.lastPutMode) {
                if (wf) {
                    if (ff("showClone", this), rd.eventCanceled) return;
                    hf.parentNode != vf || this.options.group.revertClone ? mf ? vf.insertBefore(bf, mf) : vf.appendChild(bf) : vf.insertBefore(bf, hf), this.options.group.revertClone && this.animate(hf, bf), Yl(bf, "display", ""), wf = !1
                }
            } else this._hideClone()
        }
    }, Xf && Rl(document, "touchmove", (function(t) {
        (rd.active || Bf) && t.cancelable && t.preventDefault()
    })), rd.utils = {
        on: Rl,
        off: Ml,
        css: Yl,
        find: Xl,
        is: function(t, e) {
            return !!Hl(t, e, t, !1)
        },
        extend: function(t, e) {
            if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        },
        throttle: nf,
        closest: Hl,
        toggleClass: zl,
        clone: of,
        index: Jl,
        nextTick: ud,
        cancelNextTick: cd,
        detectDirection: Qf,
        getChild: Kl
    }, rd.get = function(t) {
        return t[af]
    }, rd.mount = function() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        e[0].constructor === Array && (e = e[0]), e.forEach((function(t) {
            if (!t.prototype || !t.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
            t.utils && (rd.utils = Al({}, rd.utils, t.utils)), lf.mount(t)
        }))
    }, rd.create = function(t, e) {
        return new rd(t, e)
    }, rd.version = "1.13.0";
    var ld, fd, dd, hd, pd, gd, vd = [],
        md = !1;

    function yd() {
        vd.forEach((function(t) {
            clearInterval(t.pid)
        })), vd = []
    }
    function bd() {
        clearInterval(gd)
    }
    var wd = nf((function(t, e, n, r) {
        if (e.scroll) {
            var o, i = (t.touches ? t.touches[0] : t).clientX,
                a = (t.touches ? t.touches[0] : t).clientY,
                s = e.scrollSensitivity,
                u = e.scrollSpeed,
                c = $l(),
                l = !1;
            fd !== n && (fd = n, yd(), ld = e.scroll, o = e.scrollFn, !0 === ld && (ld = tf(n, !0)));
            var f = 0,
                d = ld;
            do {
                var h = d,
                    p = Vl(h),
                    g = p.top,
                    v = p.bottom,
                    m = p.left,
                    y = p.right,
                    b = p.width,
                    w = p.height,
                    x = void 0,
                    E = void 0,
                    T = h.scrollWidth,
                    C = h.scrollHeight,
                    S = Yl(h),
                    A = h.scrollLeft,
                    k = h.scrollTop;
                h === c ? (x = b < T && ("auto" === S.overflowX || "scroll" === S.overflowX || "visible" === S.overflowX), E = w < C && ("auto" === S.overflowY || "scroll" === S.overflowY || "visible" === S.overflowY)) : (x = b < T && ("auto" === S.overflowX || "scroll" === S.overflowX), E = w < C && ("auto" === S.overflowY || "scroll" === S.overflowY));
                var O = x && (Math.abs(y - i) <= s && A + b < T) - (Math.abs(m - i) <= s && !! A),
                    L = E && (Math.abs(v - a) <= s && k + w < C) - (Math.abs(g - a) <= s && !! k);
                if (!vd[f]) for (var N = 0; N <= f; N++) vd[N] || (vd[N] = {});
                vd[f].vx == O && vd[f].vy == L && vd[f].el === h || (vd[f].el = h, vd[f].vx = O, vd[f].vy = L, clearInterval(vd[f].pid), 0 == O && 0 == L || (l = !0, vd[f].pid = setInterval(function() {
                    r && 0 === this.layer && rd.active._onTouchMove(pd);
                    var e = vd[this.layer].vy ? vd[this.layer].vy * u : 0,
                        n = vd[this.layer].vx ? vd[this.layer].vx * u : 0;
                    "function" == typeof o && "continue" !== o.call(rd.dragged.parentNode[af], n, e, t, pd, vd[this.layer].el) || rf(vd[this.layer].el, n, e)
                }.bind({
                    layer: f
                }), 24))), f++
            } while (e.bubbleScroll && d !== c && (d = tf(d, !1)));
            md = l
        }
    }), 30),
        xd = function(t) {
            var e = t.originalEvent,
                n = t.putSortable,
                r = t.dragEl,
                o = t.activeSortable,
                i = t.dispatchSortableEvent,
                a = t.hideGhostForTarget,
                s = t.unhideGhostForTarget;
            if (e) {
                var u = n || o;
                a();
                var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e,
                    l = document.elementFromPoint(c.clientX, c.clientY);
                s(), u && !u.el.contains(l) && (i("spill"), this.onSpill({
                    dragEl: r,
                    putSortable: n
                }))
            }
        };

    function Ed() {}
    function Td() {}
    Ed.prototype = {
        startIndex: null,
        dragStart: function(t) {
            var e = t.oldDraggableIndex;
            this.startIndex = e
        },
        onSpill: function(t) {
            var e = t.dragEl,
                n = t.putSortable;
            this.sortable.captureAnimationState(), n && n.captureAnimationState();
            var r = Kl(this.sortable.el, this.startIndex, this.options);
            r ? this.sortable.el.insertBefore(e, r) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll()
        },
        drop: xd
    }, Sl(Ed, {
        pluginName: "revertOnSpill"
    }), Td.prototype = {
        onSpill: function(t) {
            var e = t.dragEl,
                n = t.putSortable || this.sortable;
            n.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), n.animateAll()
        },
        drop: xd
    }, Sl(Td, {
        pluginName: "removeOnSpill"
    }), rd.mount(new function() {
        function t() {
            for (var t in this.defaults = {
                scroll: !0,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0
            }, this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this))
        }
        return t.prototype = {
            dragStarted: function(t) {
                var e = t.originalEvent;
                this.sortable.nativeDraggable ? Rl(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Rl(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? Rl(document, "touchmove", this._handleFallbackAutoScroll) : Rl(document, "mousemove", this._handleFallbackAutoScroll)
            },
            dragOverCompleted: function(t) {
                var e = t.originalEvent;
                this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e)
            },
            drop: function() {
                this.sortable.nativeDraggable ? Ml(document, "dragover", this._handleAutoScroll) : (Ml(document, "pointermove", this._handleFallbackAutoScroll), Ml(document, "touchmove", this._handleFallbackAutoScroll), Ml(document, "mousemove", this._handleFallbackAutoScroll)), bd(), yd(), clearTimeout(ql), ql = void 0
            },
            nulling: function() {
                pd = fd = ld = md = gd = dd = hd = null, vd.length = 0
            },
            _handleFallbackAutoScroll: function(t) {
                this._handleAutoScroll(t, !0)
            },
            _handleAutoScroll: function(t, e) {
                var n = this,
                    r = (t.touches ? t.touches[0] : t).clientX,
                    o = (t.touches ? t.touches[0] : t).clientY,
                    i = document.elementFromPoint(r, o);
                if (pd = t, e || Nl || Ll || Pl) {
                    wd(t, this.options, i, e);
                    var a = tf(i, !0);
                    !md || gd && r === dd && o === hd || (gd && bd(), gd = setInterval((function() {
                        var i = tf(document.elementFromPoint(r, o), !0);
                        i !== a && (a = i, yd()), wd(t, n.options, i, e)
                    }), 10), dd = r, hd = o)
                } else {
                    if (!this.options.bubbleScroll || tf(i, !0) === $l()) return void yd();
                    wd(t, this.options, tf(i, !1), !1)
                }
            }
        }, Sl(t, {
            pluginName: "scroll",
            initializeByDefault: !0
        })
    }), rd.mount(Td, Ed);
    var Cd = e((function(t, e) {
        t.exports = function() {
            function t(e, r, o) {
                function i(s, u) {
                    if (!r[s]) {
                        if (!e[s]) {
                            if (!u && n) return n(s);
                            if (a) return a(s, !0);
                            var c = new Error("Cannot find module '" + s + "'");
                            throw c.code = "MODULE_NOT_FOUND", c
                        }
                        var l = r[s] = {
                            exports: {}
                        };
                        e[s][0].call(l.exports, (function(t) {
                            return i(e[s][1][t] || t)
                        }), l, l.exports, t, e, r, o)
                    }
                    return r[s].exports
                }
                for (var a = n, s = 0; s < o.length; s++) i(o[s]);
                return i
            }
            return t
        }()({
            1: [function(t, e, n) {
                    e.exports = function() {
                        return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
                    }
                }, {}
            ],
            2: [function(t, e, n) {
                    var r = t("./utils").getSymbolSize;
                    n.getRowColCoords = function(t) {
                        if (1 === t) return [];
                        for (var e = Math.floor(t / 7) + 2, n = r(t), o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)), i = [n - 7], a = 1; a < e - 1; a++) i[a] = i[a - 1] - o;
                        return i.push(6), i.reverse()
                    }, n.getPositions = function(t) {
                        for (var e = [], r = n.getRowColCoords(t), o = r.length, i = 0; i < o; i++) for (var a = 0; a < o; a++) 0 === i && 0 === a || 0 === i && a === o - 1 || i === o - 1 && 0 === a || e.push([r[i], r[a]]);
                        return e
                    }
                }, {
                    "./utils": 21
                }
            ],
            3: [function(t, e, n) {
                    var r = t("./mode"),
                        o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

                    function i(t) {
                        this.mode = r.ALPHANUMERIC, this.data = t
                    }
                    i.getBitsLength = function(t) {
                        return 11 * Math.floor(t / 2) + t % 2 * 6
                    }, i.prototype.getLength = function() {
                        return this.data.length
                    }, i.prototype.getBitsLength = function() {
                        return i.getBitsLength(this.data.length)
                    }, i.prototype.write = function(t) {
                        var e;
                        for (e = 0; e + 2 <= this.data.length; e += 2) {
                            var n = 45 * o.indexOf(this.data[e]);
                            n += o.indexOf(this.data[e + 1]), t.put(n, 11)
                        }
                        this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
                    }, e.exports = i
                }, {
                    "./mode": 14
                }
            ],
            4: [function(t, e, n) {
                    function r() {
                        this.buffer = [], this.length = 0
                    }
                    r.prototype = {
                        get: function(t) {
                            var e = Math.floor(t / 8);
                            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                        },
                        put: function(t, e) {
                            for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
                        },
                        getLengthInBits: function() {
                            return this.length
                        },
                        putBit: function(t) {
                            var e = Math.floor(this.length / 8);
                            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                        }
                    }, e.exports = r
                }, {}
            ],
            5: [function(t, e, n) {
                    var r = t("../utils/buffer");

                    function o(t) {
                        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                        this.size = t, this.data = r.alloc(t * t), this.reservedBit = r.alloc(t * t)
                    }
                    o.prototype.set = function(t, e, n, r) {
                        var o = t * this.size + e;
                        this.data[o] = n, r && (this.reservedBit[o] = !0)
                    }, o.prototype.get = function(t, e) {
                        return this.data[t * this.size + e]
                    }, o.prototype.xor = function(t, e, n) {
                        this.data[t * this.size + e] ^= n
                    }, o.prototype.isReserved = function(t, e) {
                        return this.reservedBit[t * this.size + e]
                    }, e.exports = o
                }, {
                    "../utils/buffer": 28
                }
            ],
            6: [function(t, e, n) {
                    var r = t("../utils/buffer"),
                        o = t("./mode");

                    function i(t) {
                        this.mode = o.BYTE, this.data = r.from(t)
                    }
                    i.getBitsLength = function(t) {
                        return 8 * t
                    }, i.prototype.getLength = function() {
                        return this.data.length
                    }, i.prototype.getBitsLength = function() {
                        return i.getBitsLength(this.data.length)
                    }, i.prototype.write = function(t) {
                        for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
                    }, e.exports = i
                }, {
                    "../utils/buffer": 28,
                    "./mode": 14
                }
            ],
            7: [function(t, e, n) {
                    var r = t("./error-correction-level"),
                        o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                        i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
                    n.getBlocksCount = function(t, e) {
                        switch (e) {
                            case r.L:
                                return o[4 * (t - 1) + 0];
                            case r.M:
                                return o[4 * (t - 1) + 1];
                            case r.Q:
                                return o[4 * (t - 1) + 2];
                            case r.H:
                                return o[4 * (t - 1) + 3];
                            default:
                                return
                        }
                    }, n.getTotalCodewordsCount = function(t, e) {
                        switch (e) {
                            case r.L:
                                return i[4 * (t - 1) + 0];
                            case r.M:
                                return i[4 * (t - 1) + 1];
                            case r.Q:
                                return i[4 * (t - 1) + 2];
                            case r.H:
                                return i[4 * (t - 1) + 3];
                            default:
                                return
                        }
                    }
                }, {
                    "./error-correction-level": 8
                }
            ],
            8: [function(t, e, n) {
                    function r(t) {
                        if ("string" != typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "l":
                            case "low":
                                return n.L;
                            case "m":
                            case "medium":
                                return n.M;
                            case "q":
                            case "quartile":
                                return n.Q;
                            case "h":
                            case "high":
                                return n.H;
                            default:
                                throw new Error("Unknown EC Level: " + t)
                        }
                    }
                    n.L = {
                        bit: 1
                    }, n.M = {
                        bit: 0
                    }, n.Q = {
                        bit: 3
                    }, n.H = {
                        bit: 2
                    }, n.isValid = function(t) {
                        return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
                    }, n.from = function(t, e) {
                        if (n.isValid(t)) return t;
                        try {
                            return r(t)
                        } catch (t) {
                            return e
                        }
                    }
                }, {}
            ],
            9: [function(t, e, n) {
                    var r = t("./utils").getSymbolSize,
                        o = 7;
                    n.getPositions = function(t) {
                        var e = r(t);
                        return [[0, 0], [e - o, 0], [0, e - o]]
                    }
                }, {
                    "./utils": 21
                }
            ],
            10: [function(t, e, n) {
                    var r = t("./utils"),
                        o = 1335,
                        i = 21522,
                        a = r.getBCHDigit(o);
                    n.getEncodedBits = function(t, e) {
                        for (var n = t.bit << 3 | e, s = n << 10; r.getBCHDigit(s) - a >= 0;) s ^= o << r.getBCHDigit(s) - a;
                        return (n << 10 | s) ^ i
                    }
                }, {
                    "./utils": 21
                }
            ],
            11: [function(t, e, n) {
                    var r = t("../utils/buffer"),
                        o = r.alloc(512),
                        i = r.alloc(256);
                    ! function() {
                        for (var t = 1, e = 0; e < 255; e++) o[e] = t, i[t] = e, 256 & (t <<= 1) && (t ^= 285);
                        for (e = 255; e < 512; e++) o[e] = o[e - 255]
                    }(), n.log = function(t) {
                        if (t < 1) throw new Error("log(" + t + ")");
                        return i[t]
                    }, n.exp = function(t) {
                        return o[t]
                    }, n.mul = function(t, e) {
                        return 0 === t || 0 === e ? 0 : o[i[t] + i[e]]
                    }
                }, {
                    "../utils/buffer": 28
                }
            ],
            12: [function(t, e, n) {
                    var r = t("./mode"),
                        o = t("./utils");

                    function i(t) {
                        this.mode = r.KANJI, this.data = t
                    }
                    i.getBitsLength = function(t) {
                        return 13 * t
                    }, i.prototype.getLength = function() {
                        return this.data.length
                    }, i.prototype.getBitsLength = function() {
                        return i.getBitsLength(this.data.length)
                    }, i.prototype.write = function(t) {
                        var e;
                        for (e = 0; e < this.data.length; e++) {
                            var n = o.toSJIS(this.data[e]);
                            if (n >= 33088 && n <= 40956) n -= 33088;
                            else {
                                if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                                n -= 49472
                            }
                            n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13)
                        }
                    }, e.exports = i
                }, {
                    "./mode": 14,
                    "./utils": 21
                }
            ],
            13: [function(t, e, n) {
                    n.Patterns = {
                        PATTERN000: 0,
                        PATTERN001: 1,
                        PATTERN010: 2,
                        PATTERN011: 3,
                        PATTERN100: 4,
                        PATTERN101: 5,
                        PATTERN110: 6,
                        PATTERN111: 7
                    };
                    var r = {
                        N1: 3,
                        N2: 3,
                        N3: 40,
                        N4: 10
                    };

                    function o(t, e, r) {
                        switch (t) {
                            case n.Patterns.PATTERN000:
                                return (e + r) % 2 == 0;
                            case n.Patterns.PATTERN001:
                                return e % 2 == 0;
                            case n.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case n.Patterns.PATTERN011:
                                return (e + r) % 3 == 0;
                            case n.Patterns.PATTERN100:
                                return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
                            case n.Patterns.PATTERN101:
                                return e * r % 2 + e * r % 3 == 0;
                            case n.Patterns.PATTERN110:
                                return (e * r % 2 + e * r % 3) % 2 == 0;
                            case n.Patterns.PATTERN111:
                                return (e * r % 3 + (e + r) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:" + t)
                        }
                    }
                    n.isValid = function(t) {
                        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
                    }, n.from = function(t) {
                        return n.isValid(t) ? parseInt(t, 10) : void 0
                    }, n.getPenaltyN1 = function(t) {
                        for (var e = t.size, n = 0, o = 0, i = 0, a = null, s = null, u = 0; u < e; u++) {
                            o = i = 0, a = s = null;
                            for (var c = 0; c < e; c++) {
                                var l = t.get(u, c);
                                l === a ? o++ : (o >= 5 && (n += r.N1 + (o - 5)), a = l, o = 1), (l = t.get(c, u)) === s ? i++ : (i >= 5 && (n += r.N1 + (i - 5)), s = l, i = 1)
                            }
                            o >= 5 && (n += r.N1 + (o - 5)), i >= 5 && (n += r.N1 + (i - 5))
                        }
                        return n
                    }, n.getPenaltyN2 = function(t) {
                        for (var e = t.size, n = 0, o = 0; o < e - 1; o++) for (var i = 0; i < e - 1; i++) {
                                var a = t.get(o, i) + t.get(o, i + 1) + t.get(o + 1, i) + t.get(o + 1, i + 1);
                                4 !== a && 0 !== a || n++
                        }
                        return n * r.N2
                    }, n.getPenaltyN3 = function(t) {
                        for (var e = t.size, n = 0, o = 0, i = 0, a = 0; a < e; a++) {
                            o = i = 0;
                            for (var s = 0; s < e; s++) o = o << 1 & 2047 | t.get(a, s), s >= 10 && (1488 === o || 93 === o) && n++, i = i << 1 & 2047 | t.get(s, a), s >= 10 && (1488 === i || 93 === i) && n++
                        }
                        return n * r.N3
                    }, n.getPenaltyN4 = function(t) {
                        for (var e = 0, n = t.data.length, o = 0; o < n; o++) e += t.data[o];
                        return Math.abs(Math.ceil(100 * e / n / 5) - 10) * r.N4
                    }, n.applyMask = function(t, e) {
                        for (var n = e.size, r = 0; r < n; r++) for (var i = 0; i < n; i++) e.isReserved(i, r) || e.xor(i, r, o(t, i, r))
                    }, n.getBestMask = function(t, e) {
                        for (var r = Object.keys(n.Patterns).length, o = 0, i = 1 / 0, a = 0; a < r; a++) {
                            e(a), n.applyMask(a, t);
                            var s = n.getPenaltyN1(t) + n.getPenaltyN2(t) + n.getPenaltyN3(t) + n.getPenaltyN4(t);
                            n.applyMask(a, t), s < i && (i = s, o = a)
                        }
                        return o
                    }
                }, {}
            ],
            14: [function(t, e, n) {
                    var r = t("./version-check"),
                        o = t("./regex");

                    function i(t) {
                        if ("string" != typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "numeric":
                                return n.NUMERIC;
                            case "alphanumeric":
                                return n.ALPHANUMERIC;
                            case "kanji":
                                return n.KANJI;
                            case "byte":
                                return n.BYTE;
                            default:
                                throw new Error("Unknown mode: " + t)
                        }
                    }
                    n.NUMERIC = {
                        id: "Numeric",
                        bit: 1,
                        ccBits: [10, 12, 14]
                    }, n.ALPHANUMERIC = {
                        id: "Alphanumeric",
                        bit: 2,
                        ccBits: [9, 11, 13]
                    }, n.BYTE = {
                        id: "Byte",
                        bit: 4,
                        ccBits: [8, 16, 16]
                    }, n.KANJI = {
                        id: "Kanji",
                        bit: 8,
                        ccBits: [8, 10, 12]
                    }, n.MIXED = {
                        bit: -1
                    }, n.getCharCountIndicator = function(t, e) {
                        if (!t.ccBits) throw new Error("Invalid mode: " + t);
                        if (!r.isValid(e)) throw new Error("Invalid version: " + e);
                        return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
                    }, n.getBestModeForData = function(t) {
                        return o.testNumeric(t) ? n.NUMERIC : o.testAlphanumeric(t) ? n.ALPHANUMERIC : o.testKanji(t) ? n.KANJI : n.BYTE
                    }, n.toString = function(t) {
                        if (t && t.id) return t.id;
                        throw new Error("Invalid mode")
                    }, n.isValid = function(t) {
                        return t && t.bit && t.ccBits
                    }, n.from = function(t, e) {
                        if (n.isValid(t)) return t;
                        try {
                            return i(t)
                        } catch (t) {
                            return e
                        }
                    }
                }, {
                    "./regex": 19,
                    "./version-check": 22
                }
            ],
            15: [function(t, e, n) {
                    var r = t("./mode");

                    function o(t) {
                        this.mode = r.NUMERIC, this.data = t.toString()
                    }
                    o.getBitsLength = function(t) {
                        return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
                    }, o.prototype.getLength = function() {
                        return this.data.length
                    }, o.prototype.getBitsLength = function() {
                        return o.getBitsLength(this.data.length)
                    }, o.prototype.write = function(t) {
                        var e, n, r;
                        for (e = 0; e + 3 <= this.data.length; e += 3) n = this.data.substr(e, 3), r = parseInt(n, 10), t.put(r, 10);
                        var o = this.data.length - e;
                        o > 0 && (n = this.data.substr(e), r = parseInt(n, 10), t.put(r, 3 * o + 1))
                    }, e.exports = o
                }, {
                    "./mode": 14
                }
            ],
            16: [function(t, e, n) {
                    var r = t("../utils/buffer"),
                        o = t("./galois-field");
                    n.mul = function(t, e) {
                        for (var n = r.alloc(t.length + e.length - 1), i = 0; i < t.length; i++) for (var a = 0; a < e.length; a++) n[i + a] ^= o.mul(t[i], e[a]);
                        return n
                    }, n.mod = function(t, e) {
                        for (var n = r.from(t); n.length - e.length >= 0;) {
                            for (var i = n[0], a = 0; a < e.length; a++) n[a] ^= o.mul(e[a], i);
                            for (var s = 0; s < n.length && 0 === n[s];) s++;
                            n = n.slice(s)
                        }
                        return n
                    }, n.generateECPolynomial = function(t) {
                        for (var e = r.from([1]), i = 0; i < t; i++) e = n.mul(e, [1, o.exp(i)]);
                        return e
                    }
                }, {
                    "../utils/buffer": 28,
                    "./galois-field": 11
                }
            ],
            17: [function(t, e, n) {
                    var r = t("../utils/buffer"),
                        o = t("./utils"),
                        i = t("./error-correction-level"),
                        a = t("./bit-buffer"),
                        s = t("./bit-matrix"),
                        u = t("./alignment-pattern"),
                        c = t("./finder-pattern"),
                        l = t("./mask-pattern"),
                        f = t("./error-correction-code"),
                        d = t("./reed-solomon-encoder"),
                        h = t("./version"),
                        p = t("./format-info"),
                        g = t("./mode"),
                        v = t("./segments"),
                        m = t("isarray");

                    function y(t, e) {
                        for (var n = t.size, r = c.getPositions(e), o = 0; o < r.length; o++) for (var i = r[o][0], a = r[o][1], s = -1; s <= 7; s++) if (!(i + s <= -1 || n <= i + s)) for (var u = -1; u <= 7; u++) a + u <= -1 || n <= a + u || (s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? t.set(i + s, a + u, !0, !0) : t.set(i + s, a + u, !1, !0))
                    }
                    function b(t) {
                        for (var e = t.size, n = 8; n < e - 8; n++) {
                            var r = n % 2 == 0;
                            t.set(n, 6, r, !0), t.set(6, n, r, !0)
                        }
                    }
                    function w(t, e) {
                        for (var n = u.getPositions(e), r = 0; r < n.length; r++) for (var o = n[r][0], i = n[r][1], a = -2; a <= 2; a++) for (var s = -2; s <= 2; s++) - 2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? t.set(o + a, i + s, !0, !0) : t.set(o + a, i + s, !1, !0)
                    }
                    function x(t, e) {
                        for (var n, r, o, i = t.size, a = h.getEncodedBits(e), s = 0; s < 18; s++) n = Math.floor(s / 3), r = s % 3 + i - 8 - 3, o = 1 == (a >> s & 1), t.set(n, r, o, !0), t.set(r, n, o, !0)
                    }
                    function E(t, e, n) {
                        var r, o, i = t.size,
                            a = p.getEncodedBits(e, n);
                        for (r = 0; r < 15; r++) o = 1 == (a >> r & 1), r < 6 ? t.set(r, 8, o, !0) : r < 8 ? t.set(r + 1, 8, o, !0) : t.set(i - 15 + r, 8, o, !0), r < 8 ? t.set(8, i - r - 1, o, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, o, !0) : t.set(8, 15 - r - 1, o, !0);
                        t.set(i - 8, 8, 1, !0)
                    }
                    function T(t, e) {
                        for (var n = t.size, r = -1, o = n - 1, i = 7, a = 0, s = n - 1; s > 0; s -= 2) for (6 === s && s--;;) {
                                for (var u = 0; u < 2; u++) if (!t.isReserved(o, s - u)) {
                                        var c = !1;
                                        a < e.length && (c = 1 == (e[a] >>> i & 1)), t.set(o, s - u, c), -1 == --i && (a++, i = 7)
                                    }
                                if ((o += r) < 0 || n <= o) {
                                    o -= r, r = -r;
                                    break
                                }
                        }
                    }
                    function C(t, e, n) {
                        var r = new a;
                        n.forEach((function(e) {
                            r.put(e.mode.bit, 4), r.put(e.getLength(), g.getCharCountIndicator(e.mode, t)), e.write(r)
                        }));
                        var i = 8 * (o.getSymbolTotalCodewords(t) - f.getTotalCodewordsCount(t, e));
                        for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
                        for (var s = (i - r.getLengthInBits()) / 8, u = 0; u < s; u++) r.put(u % 2 ? 17 : 236, 8);
                        return S(r, t, e)
                    }
                    function S(t, e, n) {
                        for (var i = o.getSymbolTotalCodewords(e), a = i - f.getTotalCodewordsCount(e, n), s = f.getBlocksCount(e, n), u = s - i % s, c = Math.floor(i / s), l = Math.floor(a / s), h = l + 1, p = c - l, g = new d(p), v = 0, m = new Array(s), y = new Array(s), b = 0, w = r.from(t.buffer), x = 0; x < s; x++) {
                            var E = x < u ? l : h;
                            m[x] = w.slice(v, v + E), y[x] = g.encode(m[x]), v += E, b = Math.max(b, E)
                        }
                        var T, C, S = r.alloc(i),
                            A = 0;
                        for (T = 0; T < b; T++) for (C = 0; C < s; C++) T < m[C].length && (S[A++] = m[C][T]);
                        for (T = 0; T < p; T++) for (C = 0; C < s; C++) S[A++] = y[C][T];
                        return S
                    }
                    function A(t, e, n, r) {
                        var i;
                        if (m(t)) i = v.fromArray(t);
                        else {
                            if ("string" != typeof t) throw new Error("Invalid data");
                            var a = e;
                            if (!a) {
                                var u = v.rawSplit(t);
                                a = h.getBestVersionForData(u, n)
                            }
                            i = v.fromString(t, a || 40)
                        }
                        var c = h.getBestVersionForData(i, n);
                        if (!c) throw new Error("The amount of data is too big to be stored in a QR Code");
                        if (e) {
                            if (e < c) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + c + ".\n")
                        } else e = c;
                        var f = C(e, n, i),
                            d = o.getSymbolSize(e),
                            p = new s(d);
                        return y(p, e), b(p), w(p, e), E(p, n, 0), e >= 7 && x(p, e), T(p, f), isNaN(r) && (r = l.getBestMask(p, E.bind(null, p, n))), l.applyMask(r, p), E(p, n, r), {
                            modules: p,
                            version: e,
                            errorCorrectionLevel: n,
                            maskPattern: r,
                            segments: i
                        }
                    }
                    n.create = function(t, e) {
                        if (void 0 === t || "" === t) throw new Error("No input text");
                        var n, r, a = i.M;
                        return void 0 !== e && (a = i.from(e.errorCorrectionLevel, i.M), n = h.from(e.version), r = l.from(e.maskPattern), e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)), A(t, n, a, r)
                    }
                }, {
                    "../utils/buffer": 28,
                    "./alignment-pattern": 2,
                    "./bit-buffer": 4,
                    "./bit-matrix": 5,
                    "./error-correction-code": 7,
                    "./error-correction-level": 8,
                    "./finder-pattern": 9,
                    "./format-info": 10,
                    "./mask-pattern": 13,
                    "./mode": 14,
                    "./reed-solomon-encoder": 18,
                    "./segments": 20,
                    "./utils": 21,
                    "./version": 23,
                    isarray: 33
                }
            ],
            18: [function(t, e, n) {
                    var r = t("../utils/buffer"),
                        o = t("./polynomial"),
                        i = t("buffer").Buffer;

                    function a(t) {
                        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
                    }
                    a.prototype.initialize = function(t) {
                        this.degree = t, this.genPoly = o.generateECPolynomial(this.degree)
                    }, a.prototype.encode = function(t) {
                        if (!this.genPoly) throw new Error("Encoder not initialized");
                        var e = r.alloc(this.degree),
                            n = i.concat([t, e], t.length + this.degree),
                            a = o.mod(n, this.genPoly),
                            s = this.degree - a.length;
                        if (s > 0) {
                            var u = r.alloc(this.degree);
                            return a.copy(u, s), u
                        }
                        return a
                    }, e.exports = a
                }, {
                    "../utils/buffer": 28,
                    "./polynomial": 16,
                    buffer: 30
                }
            ],
            19: [function(t, e, n) {
                    var r = "[0-9]+",
                        o = "[A-Z $%*+\\-./:]+",
                        i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                        a = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (i = i.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
                    n.KANJI = new RegExp(i, "g"), n.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), n.BYTE = new RegExp(a, "g"), n.NUMERIC = new RegExp(r, "g"), n.ALPHANUMERIC = new RegExp(o, "g");
                    var s = new RegExp("^" + i + "$"),
                        u = new RegExp("^" + r + "$"),
                        c = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
                    n.testKanji = function(t) {
                        return s.test(t)
                    }, n.testNumeric = function(t) {
                        return u.test(t)
                    }, n.testAlphanumeric = function(t) {
                        return c.test(t)
                    }
                }, {}
            ],
            20: [function(t, e, n) {
                    var r = t("./mode"),
                        o = t("./numeric-data"),
                        i = t("./alphanumeric-data"),
                        a = t("./byte-data"),
                        s = t("./kanji-data"),
                        u = t("./regex"),
                        c = t("./utils"),
                        l = t("dijkstrajs");

                    function f(t) {
                        return unescape(encodeURIComponent(t)).length
                    }
                    function d(t, e, n) {
                        for (var r, o = []; null !== (r = t.exec(n));) o.push({
                                data: r[0],
                                index: r.index,
                                mode: e,
                                length: r[0].length
                            });
                        return o
                    }
                    function h(t) {
                        var e, n, o = d(u.NUMERIC, r.NUMERIC, t),
                            i = d(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
                        return c.isKanjiModeEnabled() ? (e = d(u.BYTE, r.BYTE, t), n = d(u.KANJI, r.KANJI, t)) : (e = d(u.BYTE_KANJI, r.BYTE, t), n = []), o.concat(i, e, n).sort((function(t, e) {
                            return t.index - e.index
                        })).map((function(t) {
                            return {
                                data: t.data,
                                mode: t.mode,
                                length: t.length
                            }
                        }))
                    }
                    function p(t, e) {
                        switch (e) {
                            case r.NUMERIC:
                                return o.getBitsLength(t);
                            case r.ALPHANUMERIC:
                                return i.getBitsLength(t);
                            case r.KANJI:
                                return s.getBitsLength(t);
                            case r.BYTE:
                                return a.getBitsLength(t)
                        }
                    }
                    function g(t) {
                        return t.reduce((function(t, e) {
                            var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                            return n && n.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
                        }), [])
                    }
                    function v(t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var o = t[n];
                            switch (o.mode) {
                                case r.NUMERIC:
                                    e.push([o, {
                                            data: o.data,
                                            mode: r.ALPHANUMERIC,
                                            length: o.length
                                        }, {
                                            data: o.data,
                                            mode: r.BYTE,
                                            length: o.length
                                        }
                                    ]);
                                    break;
                                case r.ALPHANUMERIC:
                                    e.push([o, {
                                            data: o.data,
                                            mode: r.BYTE,
                                            length: o.length
                                        }
                                    ]);
                                    break;
                                case r.KANJI:
                                    e.push([o, {
                                            data: o.data,
                                            mode: r.BYTE,
                                            length: f(o.data)
                                        }
                                    ]);
                                    break;
                                case r.BYTE:
                                    e.push([{
                                            data: o.data,
                                            mode: r.BYTE,
                                            length: f(o.data)
                                        }
                                    ])
                            }
                        }
                        return e
                    }
                    function m(t, e) {
                        for (var n = {}, o = {
                                start: {}
                            }, i = ["start"], a = 0; a < t.length; a++) {
                            for (var s = t[a], u = [], c = 0; c < s.length; c++) {
                                var l = s[c],
                                    f = "" + a + c;
                                u.push(f), n[f] = {
                                    node: l,
                                    lastCount: 0
                                }, o[f] = {};
                                for (var d = 0; d < i.length; d++) {
                                    var h = i[d];
                                    n[h] && n[h].node.mode === l.mode ? (o[h][f] = p(n[h].lastCount + l.length, l.mode) - p(n[h].lastCount, l.mode), n[h].lastCount += l.length) : (n[h] && (n[h].lastCount = l.length), o[h][f] = p(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, e))
                                }
                            }
                            i = u
                        }
                        for (d = 0; d < i.length; d++) o[i[d]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }
                    function y(t, e) {
                        var n, u = r.getBestModeForData(t);
                        if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
                        switch (n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n) {
                            case r.NUMERIC:
                                return new o(t);
                            case r.ALPHANUMERIC:
                                return new i(t);
                            case r.KANJI:
                                return new s(t);
                            case r.BYTE:
                                return new a(t)
                        }
                    }
                    n.fromArray = function(t) {
                        return t.reduce((function(t, e) {
                            return "string" == typeof e ? t.push(y(e, null)) : e.data && t.push(y(e.data, e.mode)), t
                        }), [])
                    }, n.fromString = function(t, e) {
                        for (var r = m(v(h(t, c.isKanjiModeEnabled())), e), o = l.find_path(r.map, "start", "end"), i = [], a = 1; a < o.length - 1; a++) i.push(r.table[o[a]].node);
                        return n.fromArray(g(i))
                    }, n.rawSplit = function(t) {
                        return n.fromArray(h(t, c.isKanjiModeEnabled()))
                    }
                }, {
                    "./alphanumeric-data": 3,
                    "./byte-data": 6,
                    "./kanji-data": 12,
                    "./mode": 14,
                    "./numeric-data": 15,
                    "./regex": 19,
                    "./utils": 21,
                    dijkstrajs: 31
                }
            ],
            21: [function(t, e, n) {
                    var r, o = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
                    n.getSymbolSize = function(t) {
                        if (!t) throw new Error('"version" cannot be null or undefined');
                        if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
                        return 4 * t + 17
                    }, n.getSymbolTotalCodewords = function(t) {
                        return o[t]
                    }, n.getBCHDigit = function(t) {
                        for (var e = 0; 0 !== t;) e++, t >>>= 1;
                        return e
                    }, n.setToSJISFunction = function(t) {
                        if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
                        r = t
                    }, n.isKanjiModeEnabled = function() {
                        return void 0 !== r
                    }, n.toSJIS = function(t) {
                        return r(t)
                    }
                }, {}
            ],
            22: [function(t, e, n) {
                    n.isValid = function(t) {
                        return !isNaN(t) && t >= 1 && t <= 40
                    }
                }, {}
            ],
            23: [function(t, e, n) {
                    var r = t("./utils"),
                        o = t("./error-correction-code"),
                        i = t("./error-correction-level"),
                        a = t("./mode"),
                        s = t("./version-check"),
                        u = t("isarray"),
                        c = 7973,
                        l = r.getBCHDigit(c);

                    function f(t, e, r) {
                        for (var o = 1; o <= 40; o++) if (e <= n.getCapacity(o, r, t)) return o
                    }
                    function d(t, e) {
                        return a.getCharCountIndicator(t, e) + 4
                    }
                    function h(t, e) {
                        var n = 0;
                        return t.forEach((function(t) {
                            var r = d(t.mode, e);
                            n += r + t.getBitsLength()
                        })), n
                    }
                    function p(t, e) {
                        for (var r = 1; r <= 40; r++) if (h(t, r) <= n.getCapacity(r, e, a.MIXED)) return r
                    }
                    n.from = function(t, e) {
                        return s.isValid(t) ? parseInt(t, 10) : e
                    }, n.getCapacity = function(t, e, n) {
                        if (!s.isValid(t)) throw new Error("Invalid QR Code version");
                        void 0 === n && (n = a.BYTE);
                        var i = 8 * (r.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e));
                        if (n === a.MIXED) return i;
                        var u = i - d(n, t);
                        switch (n) {
                            case a.NUMERIC:
                                return Math.floor(u / 10 * 3);
                            case a.ALPHANUMERIC:
                                return Math.floor(u / 11 * 2);
                            case a.KANJI:
                                return Math.floor(u / 13);
                            case a.BYTE:
                            default:
                                return Math.floor(u / 8)
                        }
                    }, n.getBestVersionForData = function(t, e) {
                        var n, r = i.from(e, i.M);
                        if (u(t)) {
                            if (t.length > 1) return p(t, r);
                            if (0 === t.length) return 1;
                            n = t[0]
                        } else n = t;
                        return f(n.mode, n.getLength(), r)
                    }, n.getEncodedBits = function(t) {
                        if (!s.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
                        for (var e = t << 12; r.getBCHDigit(e) - l >= 0;) e ^= c << r.getBCHDigit(e) - l;
                        return t << 12 | e
                    }
                }, {
                    "./error-correction-code": 7,
                    "./error-correction-level": 8,
                    "./mode": 14,
                    "./utils": 21,
                    "./version-check": 22,
                    isarray: 33
                }
            ],
            24: [function(t, e, n) {
                    var r = t("./can-promise"),
                        o = t("./core/qrcode"),
                        i = t("./renderer/canvas"),
                        a = t("./renderer/svg-tag.js");

                    function s(t, e, n, i, a) {
                        var s = [].slice.call(arguments, 1),
                            u = s.length,
                            c = "function" == typeof s[u - 1];
                        if (!c && !r()) throw new Error("Callback required as last argument");
                        if (!c) {
                            if (u < 1) throw new Error("Too few arguments provided");
                            return 1 === u ? (n = e, e = i = void 0) : 2 !== u || e.getContext || (i = n, n = e, e = void 0), new Promise((function(r, a) {
                                try {
                                    var s = o.create(n, i);
                                    r(t(s, e, i))
                                } catch (t) {
                                    a(t)
                                }
                            }))
                        }
                        if (u < 2) throw new Error("Too few arguments provided");
                        2 === u ? (a = n, n = e, e = i = void 0) : 3 === u && (e.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, n = e, e = void 0));
                        try {
                            var l = o.create(n, i);
                            a(null, t(l, e, i))
                        } catch (t) {
                            a(t)
                        }
                    }
                    n.create = o.create, n.toCanvas = s.bind(null, i.render), n.toDataURL = s.bind(null, i.renderToDataURL), n.toString = s.bind(null, (function(t, e, n) {
                        return a.render(t, n)
                    }))
                }, {
                    "./can-promise": 1,
                    "./core/qrcode": 17,
                    "./renderer/canvas": 25,
                    "./renderer/svg-tag.js": 26
                }
            ],
            25: [function(t, e, n) {
                    var r = t("./utils");

                    function o(t, e, n) {
                        t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = n, e.width = n, e.style.height = n + "px", e.style.width = n + "px"
                    }
                    function i() {
                        try {
                            return document.createElement("canvas")
                        } catch (t) {
                            throw new Error("You need to specify a canvas element")
                        }
                    }
                    n.render = function(t, e, n) {
                        var a = n,
                            s = e;
                        void 0 !== a || e && e.getContext || (a = e, e = void 0), e || (s = i()), a = r.getOptions(a);
                        var u = r.getImageWidth(t.modules.size, a),
                            c = s.getContext("2d"),
                            l = c.createImageData(u, u);
                        return r.qrToImageData(l.data, t, a), o(c, s, u), c.putImageData(l, 0, 0), s
                    }, n.renderToDataURL = function(t, e, r) {
                        var o = r;
                        void 0 !== o || e && e.getContext || (o = e, e = void 0), o || (o = {});
                        var i = n.render(t, e, o),
                            a = o.type || "image/png",
                            s = o.rendererOpts || {};
                        return i.toDataURL(a, s.quality)
                    }
                }, {
                    "./utils": 27
                }
            ],
            26: [function(t, e, n) {
                    var r = t("./utils");

                    function o(t, e) {
                        var n = t.a / 255,
                            r = e + '="' + t.hex + '"';
                        return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
                    }
                    function i(t, e, n) {
                        var r = t + e;
                        return void 0 !== n && (r += " " + n), r
                    }
                    function a(t, e, n) {
                        for (var r = "", o = 0, a = !1, s = 0, u = 0; u < t.length; u++) {
                            var c = Math.floor(u % e),
                                l = Math.floor(u / e);
                            c || a || (a = !0), t[u] ? (s++, u > 0 && c > 0 && t[u - 1] || (r += a ? i("M", c + n, .5 + l + n) : i("m", o, 0), o = 0, a = !1), c + 1 < e && t[u + 1] || (r += i("h", s), s = 0)) : o++
                        }
                        return r
                    }
                    n.render = function(t, e, n) {
                        var i = r.getOptions(e),
                            s = t.modules.size,
                            u = t.modules.data,
                            c = s + 2 * i.margin,
                            l = i.color.light.a ? "<path " + o(i.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
                            f = "<path " + o(i.color.dark, "stroke") + ' d="' + a(u, s, i.margin) + '"/>',
                            d = 'viewBox="0 0 ' + c + " " + c + '"',
                            h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + l + f + "</svg>\n";
                        return "function" == typeof n && n(null, h), h
                    }
                }, {
                    "./utils": 27
                }
            ],
            27: [function(t, e, n) {
                    function r(t) {
                        if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw new Error("Color should be defined as hex string");
                        var e = t.slice().replace("#", "").split("");
                        if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
                        3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
                            return [t, t]
                        })))), 6 === e.length && e.push("F", "F");
                        var n = parseInt(e.join(""), 16);
                        return {
                            r: n >> 24 & 255,
                            g: n >> 16 & 255,
                            b: n >> 8 & 255,
                            a: 255 & n,
                            hex: "#" + e.slice(0, 6).join("")
                        }
                    }
                    n.getOptions = function(t) {
                        t || (t = {}), t.color || (t.color = {});
                        var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                            n = t.width && t.width >= 21 ? t.width : void 0,
                            o = t.scale || 4;
                        return {
                            width: n,
                            scale: n ? 4 : o,
                            margin: e,
                            color: {
                                dark: r(t.color.dark || "#000000ff"),
                                light: r(t.color.light || "#ffffffff")
                            },
                            type: t.type,
                            rendererOpts: t.rendererOpts || {}
                        }
                    }, n.getScale = function(t, e) {
                        return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
                    }, n.getImageWidth = function(t, e) {
                        var r = n.getScale(t, e);
                        return Math.floor((t + 2 * e.margin) * r)
                    }, n.qrToImageData = function(t, e, r) {
                        for (var o = e.modules.size, i = e.modules.data, a = n.getScale(o, r), s = Math.floor((o + 2 * r.margin) * a), u = r.margin * a, c = [r.color.light, r.color.dark], l = 0; l < s; l++) for (var f = 0; f < s; f++) {
                                var d = 4 * (l * s + f),
                                    h = r.color.light;
                                l >= u && f >= u && l < s - u && f < s - u && (h = c[i[Math.floor((l - u) / a) * o + Math.floor((f - u) / a)] ? 1 : 0]), t[d++] = h.r, t[d++] = h.g, t[d++] = h.b, t[d] = h.a
                        }
                    }
                }, {}
            ],
            28: [function(t, e, n) {
                    var r = t("isarray");

                    function o() {
                        try {
                            var t = new Uint8Array(1);
                            return t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42
                                }
                            }, 42 === t.foo()
                        } catch (t) {
                            return !1
                        }
                    }
                    a.TYPED_ARRAY_SUPPORT = o();
                    var i = a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

                    function a(t, e, n) {
                        return a.TYPED_ARRAY_SUPPORT || this instanceof a ? "number" == typeof t ? l(this, t) : b(this, t, e, n) : new a(t, e, n)
                    }
                    function s(t) {
                        if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                        return 0 | t
                    }
                    function u(t) {
                        return t != t
                    }
                    function c(t, e) {
                        var n;
                        return a.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(e)).__proto__ = a.prototype : (null === (n = t) && (n = new a(e)), n.length = e), n
                    }
                    function l(t, e) {
                        var n = c(t, e < 0 ? 0 : 0 | s(e));
                        if (!a.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
                        return n
                    }
                    function f(t, e) {
                        var n = 0 | v(e),
                            r = c(t, n),
                            o = r.write(e);
                        return o !== n && (r = r.slice(0, o)), r
                    }
                    function d(t, e) {
                        for (var n = e.length < 0 ? 0 : 0 | s(e.length), r = c(t, n), o = 0; o < n; o += 1) r[o] = 255 & e[o];
                        return r
                    }
                    function h(t, e, n, r) {
                        if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        var o;
                        return o = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), a.TYPED_ARRAY_SUPPORT ? o.__proto__ = a.prototype : o = d(t, o), o
                    }
                    function p(t, e) {
                        if (a.isBuffer(e)) {
                            var n = 0 | s(e.length),
                                r = c(t, n);
                            return 0 === r.length || e.copy(r, 0, 0, n), r
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || u(e.length) ? c(t, 0) : d(t, e);
                            if ("Buffer" === e.type && Array.isArray(e.data)) return d(t, e.data)
                        }
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }
                    function g(t, e) {
                        var n;
                        e = e || 1 / 0;
                        for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
                            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                                if (!o) {
                                    if (n > 56319) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue
                                    }
                                    if (a + 1 === r) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue
                                    }
                                    o = n;
                                    continue
                                }
                                if (n < 56320) {
                                    (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                                    continue
                                }
                                n = 65536 + (o - 55296 << 10 | n - 56320)
                            } else o && (e -= 3) > -1 && i.push(239, 191, 189); if (o = null, n < 128) {
                                if ((e -= 1) < 0) break;
                                i.push(n)
                            } else if (n < 2048) {
                                if ((e -= 2) < 0) break;
                                i.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((e -= 3) < 0) break;
                                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            }
                        }
                        return i
                    }
                    function v(t) {
                        return a.isBuffer(t) ? t.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" != typeof t && (t = "" + t), 0 === t.length ? 0 : g(t).length)
                    }
                    function m(t, e, n, r) {
                        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                        return o
                    }
                    function y(t, e, n, r) {
                        return m(g(e, t.length - n), t, n, r)
                    }
                    function b(t, e, n, r) {
                        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? h(t, e, n, r) : "string" == typeof e ? f(t, e) : p(t, e)
                    }
                    a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
                        value: null,
                        configurable: !0,
                        enumerable: !1,
                        writable: !1
                    })), a.prototype.write = function(t, e, n) {
                        void 0 === e || void 0 === n && "string" == typeof e ? (n = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(n) ? n |= 0 : n = void 0);
                        var r = this.length - e;
                        if ((void 0 === n || n > r) && (n = r), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        return y(this, t, e, n)
                    }, a.prototype.slice = function(t, e) {
                        var n, r = this.length;
                        if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), a.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = a.prototype;
                        else {
                            var o = e - t;
                            n = new a(o, void 0);
                            for (var i = 0; i < o; ++i) n[i] = this[i + t]
                        }
                        return n
                    }, a.prototype.copy = function(t, e, n, r) {
                        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                        var o, i = r - n;
                        if (this === t && n < e && e < r) for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n];
                        else if (i < 1e3 || !a.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + n];
                        else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
                        return i
                    }, a.prototype.fill = function(t, e, n) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (e = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === t.length) {
                                var r = t.charCodeAt(0);
                                r < 256 && (t = r)
                            }
                        } else "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                        if (n <= e) return this;
                        var o;
                        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) this[o] = t;
                        else {
                            var i = a.isBuffer(t) ? t : new a(t),
                                s = i.length;
                            for (o = 0; o < n - e; ++o) this[o + e] = i[o % s]
                        }
                        return this
                    }, a.concat = function(t, e) {
                        if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return c(null, 0);
                        var n;
                        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                        var o = l(null, e),
                            i = 0;
                        for (n = 0; n < t.length; ++n) {
                            var s = t[n];
                            if (!a.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                            s.copy(o, i), i += s.length
                        }
                        return o
                    }, a.byteLength = v, a.prototype._isBuffer = !0, a.isBuffer = function(t) {
                        return !(null == t || !t._isBuffer)
                    }, e.exports.alloc = function(t) {
                        var e = new a(t);
                        return e.fill(0), e
                    }, e.exports.from = function(t) {
                        return new a(t)
                    }
                }, {
                    isarray: 33
                }
            ],
            29: [function(t, e, n) {
                    n.byteLength = l, n.toByteArray = d, n.fromByteArray = g;
                    for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) r[s] = a[s], o[a.charCodeAt(s)] = s;

                    function c(t) {
                        var e = t.length;
                        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        var n = t.indexOf("=");
                        return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
                    }
                    function l(t) {
                        var e = c(t),
                            n = e[0],
                            r = e[1];
                        return 3 * (n + r) / 4 - r
                    }
                    function f(t, e, n) {
                        return 3 * (e + n) / 4 - n
                    }
                    function d(t) {
                        var e, n, r = c(t),
                            a = r[0],
                            s = r[1],
                            u = new i(f(t, a, s)),
                            l = 0,
                            d = s > 0 ? a - 4 : a;
                        for (n = 0; n < d; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
                        return 2 === s && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, u[l++] = 255 & e), 1 === s && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e), u
                    }
                    function h(t) {
                        return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
                    }
                    function p(t, e, n) {
                        for (var r, o = [], i = e; i < n; i += 3) r = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(h(r));
                        return o.join("")
                    }
                    function g(t) {
                        for (var e, n = t.length, o = n % 3, i = [], a = 16383, s = 0, u = n - o; s < u; s += a) i.push(p(t, s, s + a > u ? u : s + a));
                        return 1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), i.join("")
                    }
                    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
                }, {}
            ],
            30: [function(t, e, n) {
                    var r = t("base64-js"),
                        o = t("ieee754"),
                        i = "function" == typeof Symbol && "function" == typeof Symbol.
                    for ? Symbol.
                    for ("nodejs.util.inspect.custom") : null;
                    n.Buffer = c, n.SlowBuffer = b, n.INSPECT_MAX_BYTES = 50;
                    var a = 2147483647;

                    function s() {
                        try {
                            var t = new Uint8Array(1),
                                e = {
                                    foo: function() {
                                        return 42
                                    }
                                };
                            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                        } catch (t) {
                            return !1
                        }
                    }
                    function u(t) {
                        if (t > a) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                        var e = new Uint8Array(t);
                        return Object.setPrototypeOf(e, c.prototype), e
                    }
                    function c(t, e, n) {
                        if ("number" == typeof t) {
                            if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                            return h(t)
                        }
                        return l(t, e, n)
                    }
                    function l(t, e, n) {
                        if ("string" == typeof t) return p(t, e);
                        if (ArrayBuffer.isView(t)) return g(t);
                        if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                        if (Q(t, ArrayBuffer) || t && Q(t.buffer, ArrayBuffer)) return v(t, e, n);
                        if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var r = t.valueOf && t.valueOf();
                        if (null != r && r !== t) return c.from(r, e, n);
                        var o = m(t);
                        if (o) return o;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return c.from(t[Symbol.toPrimitive]("string"), e, n);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                    }
                    function f(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
                    }
                    function d(t, e, n) {
                        return f(t), t <= 0 ? u(t) : void 0 !== e ? "string" == typeof n ? u(t).fill(e, n) : u(t).fill(e) : u(t)
                    }
                    function h(t) {
                        return f(t), u(t < 0 ? 0 : 0 | y(t))
                    }
                    function p(t, e) {
                        if ("string" == typeof e && "" !== e || (e = "utf8"), !c.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                        var n = 0 | w(t, e),
                            r = u(n),
                            o = r.write(t, e);
                        return o !== n && (r = r.slice(0, o)), r
                    }
                    function g(t) {
                        for (var e = t.length < 0 ? 0 : 0 | y(t.length), n = u(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
                        return n
                    }
                    function v(t, e, n) {
                        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                        var r;
                        return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n), Object.setPrototypeOf(r, c.prototype), r
                    }
                    function m(t) {
                        if (c.isBuffer(t)) {
                            var e = 0 | y(t.length),
                                n = u(e);
                            return 0 === n.length || t.copy(n, 0, 0, e), n
                        }
                        return void 0 !== t.length ? "number" != typeof t.length || J(t.length) ? u(0) : g(t) : "Buffer" === t.type && Array.isArray(t.data) ? g(t.data) : void 0
                    }
                    function y(t) {
                        if (t >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
                        return 0 | t
                    }
                    function b(t) {
                        return +t != t && (t = 0), c.alloc(+t)
                    }
                    function w(t, e) {
                        if (c.isBuffer(t)) return t.length;
                        if (ArrayBuffer.isView(t) || Q(t, ArrayBuffer)) return t.byteLength;
                        if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                        var n = t.length,
                            r = arguments.length > 2 && !0 === arguments[2];
                        if (!r && 0 === n) return 0;
                        for (var o = !1;;) switch (e) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return n;
                                case "utf8":
                                case "utf-8":
                                    return X(t).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * n;
                                case "hex":
                                    return n >>> 1;
                                case "base64":
                                    return G(t).length;
                                default:
                                    if (o) return r ? -1 : X(t).length;
                                    e = ("" + e).toLowerCase(), o = !0
                        }
                    }
                    function x(t, e, n) {
                        var r = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8");;) switch (t) {
                                case "hex":
                                    return M(this, e, n);
                                case "utf8":
                                case "utf-8":
                                    return P(this, e, n);
                                case "ascii":
                                    return I(this, e, n);
                                case "latin1":
                                case "binary":
                                    return R(this, e, n);
                                case "base64":
                                    return D(this, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return B(this, e, n);
                                default:
                                    if (r) throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(), r = !0
                        }
                    }
                    function E(t, e, n) {
                        var r = t[e];
                        t[e] = t[n], t[n] = r
                    }
                    function T(t, e, n, r, o) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), J(n = +n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                            if (o) return -1;
                            n = t.length - 1
                        } else if (n < 0) {
                            if (!o) return -1;
                            n = 0
                        }
                        if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : C(t, e, n, r, o);
                        if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : C(t, [e], n, r, o);
                        throw new TypeError("val must be string, number or Buffer")
                    }
                    function C(t, e, n, r, o) {
                        var i, a = 1,
                            s = t.length,
                            u = e.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (t.length < 2 || e.length < 2) return -1;
                            a = 2, s /= 2, u /= 2, n /= 2
                        }
                        function c(t, e) {
                            return 1 === a ? t[e] : t.readUInt16BE(e * a)
                        }
                        if (o) {
                            var l = -1;
                            for (i = n; i < s; i++) if (c(t, i) === c(e, -1 === l ? 0 : i - l)) {
                                    if (-1 === l && (l = i), i - l + 1 === u) return l * a
                                } else -1 !== l && (i -= i - l), l = -1
                        } else for (n + u > s && (n = s - u), i = n; i >= 0; i--) {
                                for (var f = !0, d = 0; d < u; d++) if (c(t, i + d) !== c(e, d)) {
                                        f = !1;
                                        break
                                    }
                                if (f) return i
                        }
                        return -1
                    }
                    function S(t, e, n, r) {
                        n = Number(n) || 0;
                        var o = t.length - n;
                        r ? (r = Number(r)) > o && (r = o) : r = o;
                        var i = e.length;
                        r > i / 2 && (r = i / 2);
                        for (var a = 0; a < r; ++a) {
                            var s = parseInt(e.substr(2 * a, 2), 16);
                            if (J(s)) return a;
                            t[n + a] = s
                        }
                        return a
                    }
                    function A(t, e, n, r) {
                        return K(X(e, t.length - n), t, n, r)
                    }
                    function k(t, e, n, r) {
                        return K($(e), t, n, r)
                    }
                    function O(t, e, n, r) {
                        return k(t, e, n, r)
                    }
                    function L(t, e, n, r) {
                        return K(G(e), t, n, r)
                    }
                    function N(t, e, n, r) {
                        return K(V(e, t.length - n), t, n, r)
                    }
                    function D(t, e, n) {
                        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                    }
                    function P(t, e, n) {
                        n = Math.min(t.length, n);
                        for (var r = [], o = e; o < n;) {
                            var i, a, s, u, c = t[o],
                                l = null,
                                f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                            if (o + f <= n) switch (f) {
                                    case 1:
                                        c < 128 && (l = c);
                                        break;
                                    case 2:
                                        128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
                                        break;
                                    case 3:
                                        i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                        break;
                                    case 4:
                                        i = t[o + 1], a = t[o + 2], s = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
                            }
                            null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += f
                        }
                        return j(r)
                    }
                    n.kMaxLength = a, c.TYPED_ARRAY_SUPPORT = s(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (c.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(c.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (c.isBuffer(this)) return this.byteOffset
                        }
                    }), "undefined" != typeof Symbol && null != Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                        value: null,
                        configurable: !0,
                        enumerable: !1,
                        writable: !1
                    }), c.poolSize = 8192, c.from = function(t, e, n) {
                        return l(t, e, n)
                    }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(t, e, n) {
                        return d(t, e, n)
                    }, c.allocUnsafe = function(t) {
                        return h(t)
                    }, c.allocUnsafeSlow = function(t) {
                        return h(t)
                    }, c.isBuffer = function(t) {
                        return null != t && !0 === t._isBuffer && t !== c.prototype
                    }, c.compare = function(t, e) {
                        if (Q(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), Q(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (t === e) return 0;
                        for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o) if (t[o] !== e[o]) {
                                n = t[o], r = e[o];
                                break
                            }
                        return n < r ? -1 : r < n ? 1 : 0
                    }, c.isEncoding = function(t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, c.concat = function(t, e) {
                        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return c.alloc(0);
                        var n;
                        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                        var r = c.allocUnsafe(e),
                            o = 0;
                        for (n = 0; n < t.length; ++n) {
                            var i = t[n];
                            if (Q(i, Uint8Array) && (i = c.from(i)), !c.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                            i.copy(r, o), o += i.length
                        }
                        return r
                    }, c.byteLength = w, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var e = 0; e < t; e += 2) E(this, e, e + 1);
                        return this
                    }, c.prototype.swap32 = function() {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var e = 0; e < t; e += 4) E(this, e, e + 3), E(this, e + 1, e + 2);
                        return this
                    }, c.prototype.swap64 = function() {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var e = 0; e < t; e += 8) E(this, e, e + 7), E(this, e + 1, e + 6), E(this, e + 2, e + 5), E(this, e + 3, e + 4);
                        return this
                    }, c.prototype.toString = function() {
                        var t = this.length;
                        return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : x.apply(this, arguments)
                    }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(t) {
                        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === c.compare(this, t)
                    }, c.prototype.inspect = function() {
                        var t = "",
                            e = n.INSPECT_MAX_BYTES;
                        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
                    }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function(t, e, n, r, o) {
                        if (Q(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                        if (r >= o && e >= n) return 0;
                        if (r >= o) return -1;
                        if (e >= n) return 1;
                        if (this === t) return 0;
                        for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (e >>>= 0), s = Math.min(i, a), u = this.slice(r, o), l = t.slice(e, n), f = 0; f < s; ++f) if (u[f] !== l[f]) {
                                i = u[f], a = l[f];
                                break
                            }
                        return i < a ? -1 : a < i ? 1 : 0
                    }, c.prototype.includes = function(t, e, n) {
                        return -1 !== this.indexOf(t, e, n)
                    }, c.prototype.indexOf = function(t, e, n) {
                        return T(this, t, e, n, !0)
                    }, c.prototype.lastIndexOf = function(t, e, n) {
                        return T(this, t, e, n, !1)
                    }, c.prototype.write = function(t, e, n, r) {
                        if (void 0 === e) r = "utf8", n = this.length, e = 0;
                        else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                        else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                        }
                        var o = this.length - e;
                        if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var i = !1;;) switch (r) {
                                case "hex":
                                    return S(this, t, e, n);
                                case "utf8":
                                case "utf-8":
                                    return A(this, t, e, n);
                                case "ascii":
                                    return k(this, t, e, n);
                                case "latin1":
                                case "binary":
                                    return O(this, t, e, n);
                                case "base64":
                                    return L(this, t, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return N(this, t, e, n);
                                default:
                                    if (i) throw new TypeError("Unknown encoding: " + r);
                                    r = ("" + r).toLowerCase(), i = !0
                        }
                    }, c.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    };
                    var _ = 4096;

                    function j(t) {
                        var e = t.length;
                        if (e <= _) return String.fromCharCode.apply(String, t);
                        for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += _));
                        return n
                    }
                    function I(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                        return r
                    }
                    function R(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                        return r
                    }
                    function M(t, e, n) {
                        var r = t.length;
                        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                        for (var o = "", i = e; i < n; ++i) o += Z[t[i]];
                        return o
                    }
                    function B(t, e, n) {
                        for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                        return o
                    }
                    function F(t, e, n) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                    }
                    function H(t, e, n, r, o, i) {
                        if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
                        if (n + r > t.length) throw new RangeError("Index out of range")
                    }
                    function q(t, e, n, r, o, i) {
                        if (n + r > t.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("Index out of range")
                    }
                    function U(t, e, n, r, i) {
                        return e = +e, n >>>= 0, i || q(t, e, n, 4), o.write(t, e, n, r, 23, 4), n + 4
                    }
                    function z(t, e, n, r, i) {
                        return e = +e, n >>>= 0, i || q(t, e, n, 8), o.write(t, e, n, r, 52, 8), n + 8
                    }
                    c.prototype.slice = function(t, e) {
                        var n = this.length;
                        (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
                        var r = this.subarray(t, e);
                        return Object.setPrototypeOf(r, c.prototype), r
                    }, c.prototype.readUIntLE = function(t, e, n) {
                        t >>>= 0, e >>>= 0, n || F(t, e, this.length);
                        for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                        return r
                    }, c.prototype.readUIntBE = function(t, e, n) {
                        t >>>= 0, e >>>= 0, n || F(t, e, this.length);
                        for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
                        return r
                    }, c.prototype.readUInt8 = function(t, e) {
                        return t >>>= 0, e || F(t, 1, this.length), this[t]
                    }, c.prototype.readUInt16LE = function(t, e) {
                        return t >>>= 0, e || F(t, 2, this.length), this[t] | this[t + 1] << 8
                    }, c.prototype.readUInt16BE = function(t, e) {
                        return t >>>= 0, e || F(t, 2, this.length), this[t] << 8 | this[t + 1]
                    }, c.prototype.readUInt32LE = function(t, e) {
                        return t >>>= 0, e || F(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                    }, c.prototype.readUInt32BE = function(t, e) {
                        return t >>>= 0, e || F(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                    }, c.prototype.readIntLE = function(t, e, n) {
                        t >>>= 0, e >>>= 0, n || F(t, e, this.length);
                        for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                        return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
                    }, c.prototype.readIntBE = function(t, e, n) {
                        t >>>= 0, e >>>= 0, n || F(t, e, this.length);
                        for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o;
                        return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
                    }, c.prototype.readInt8 = function(t, e) {
                        return t >>>= 0, e || F(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                    }, c.prototype.readInt16LE = function(t, e) {
                        t >>>= 0, e || F(t, 2, this.length);
                        var n = this[t] | this[t + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, c.prototype.readInt16BE = function(t, e) {
                        t >>>= 0, e || F(t, 2, this.length);
                        var n = this[t + 1] | this[t] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, c.prototype.readInt32LE = function(t, e) {
                        return t >>>= 0, e || F(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                    }, c.prototype.readInt32BE = function(t, e) {
                        return t >>>= 0, e || F(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                    }, c.prototype.readFloatLE = function(t, e) {
                        return t >>>= 0, e || F(t, 4, this.length), o.read(this, t, !0, 23, 4)
                    }, c.prototype.readFloatBE = function(t, e) {
                        return t >>>= 0, e || F(t, 4, this.length), o.read(this, t, !1, 23, 4)
                    }, c.prototype.readDoubleLE = function(t, e) {
                        return t >>>= 0, e || F(t, 8, this.length), o.read(this, t, !0, 52, 8)
                    }, c.prototype.readDoubleBE = function(t, e) {
                        return t >>>= 0, e || F(t, 8, this.length), o.read(this, t, !1, 52, 8)
                    }, c.prototype.writeUIntLE = function(t, e, n, r) {
                        t = +t, e >>>= 0, n >>>= 0, r || H(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = 1,
                            i = 0;
                        for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
                        return e + n
                    }, c.prototype.writeUIntBE = function(t, e, n, r) {
                        t = +t, e >>>= 0, n >>>= 0, r || H(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = n - 1,
                            i = 1;
                        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                        return e + n
                    }, c.prototype.writeUInt8 = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                    }, c.prototype.writeUInt16LE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                    }, c.prototype.writeUInt16BE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                    }, c.prototype.writeUInt32LE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                    }, c.prototype.writeUInt32BE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                    }, c.prototype.writeIntLE = function(t, e, n, r) {
                        if (t = +t, e >>>= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            H(this, t, e, n, o - 1, -o)
                        }
                        var i = 0,
                            a = 1,
                            s = 0;
                        for (this[e] = 255 & t; ++i < n && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
                        return e + n
                    }, c.prototype.writeIntBE = function(t, e, n, r) {
                        if (t = +t, e >>>= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            H(this, t, e, n, o - 1, -o)
                        }
                        var i = n - 1,
                            a = 1,
                            s = 0;
                        for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
                        return e + n
                    }, c.prototype.writeInt8 = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                    }, c.prototype.writeInt16LE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                    }, c.prototype.writeInt16BE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                    }, c.prototype.writeInt32LE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                    }, c.prototype.writeInt32BE = function(t, e, n) {
                        return t = +t, e >>>= 0, n || H(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                    }, c.prototype.writeFloatLE = function(t, e, n) {
                        return U(this, t, e, !0, n)
                    }, c.prototype.writeFloatBE = function(t, e, n) {
                        return U(this, t, e, !1, n)
                    }, c.prototype.writeDoubleLE = function(t, e, n) {
                        return z(this, t, e, !0, n)
                    }, c.prototype.writeDoubleBE = function(t, e, n) {
                        return z(this, t, e, !1, n)
                    }, c.prototype.copy = function(t, e, n, r) {
                        if (!c.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                        var o = r - n;
                        if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, n, r);
                        else if (this === t && n < e && e < r) for (var i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
                        else Uint8Array.prototype.set.call(t, this.subarray(n, r), e);
                        return o
                    }, c.prototype.fill = function(t, e, n, r) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                            if (1 === t.length) {
                                var o = t.charCodeAt(0);
                                ("utf8" === r && o < 128 || "latin1" === r) && (t = o)
                            }
                        } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t)); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                        if (n <= e) return this;
                        var i;
                        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < n; ++i) this[i] = t;
                        else {
                            var a = c.isBuffer(t) ? t : c.from(t, r),
                                s = a.length;
                            if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                            for (i = 0; i < n - e; ++i) this[i + e] = a[i % s]
                        }
                        return this
                    };
                    var Y = /[^+/0-9A-Za-z-_]/g;

                    function W(t) {
                        if ((t = (t = t.split("=")[0]).trim().replace(Y, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }
                    function X(t, e) {
                        var n;
                        e = e || 1 / 0;
                        for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
                            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                                if (!o) {
                                    if (n > 56319) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue
                                    }
                                    if (a + 1 === r) {
                                        (e -= 3) > -1 && i.push(239, 191, 189);
                                        continue
                                    }
                                    o = n;
                                    continue
                                }
                                if (n < 56320) {
                                    (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                                    continue
                                }
                                n = 65536 + (o - 55296 << 10 | n - 56320)
                            } else o && (e -= 3) > -1 && i.push(239, 191, 189); if (o = null, n < 128) {
                                if ((e -= 1) < 0) break;
                                i.push(n)
                            } else if (n < 2048) {
                                if ((e -= 2) < 0) break;
                                i.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((e -= 3) < 0) break;
                                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            }
                        }
                        return i
                    }
                    function $(t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                        return e
                    }
                    function V(t, e) {
                        for (var n, r, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) r = (n = t.charCodeAt(a)) >> 8, o = n % 256, i.push(o), i.push(r);
                        return i
                    }
                    function G(t) {
                        return r.toByteArray(W(t))
                    }
                    function K(t, e, n, r) {
                        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                        return o
                    }
                    function Q(t, e) {
                        return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                    }
                    function J(t) {
                        return t != t
                    }
                    var Z = function() {
                        for (var t = "0123456789abcdef", e = new Array(256), n = 0; n < 16; ++n) for (var r = 16 * n, o = 0; o < 16; ++o) e[r + o] = t[n] + t[o];
                        return e
                    }()
                }, {
                    "base64-js": 29,
                    ieee754: 32
                }
            ],
            31: [function(t, e, n) {
                    var r = {
                        single_source_shortest_paths: function(t, e, n) {
                            var o = {}, i = {};
                            i[e] = 0;
                            var a, s, u, c, l, f, d, h = r.PriorityQueue.make();
                            for (h.push(e, 0); !h.empty();) for (u in s = (a = h.pop()).value, c = a.cost, l = t[s] || {}) l.hasOwnProperty(u) && (f = c + l[u], d = i[u], (void 0 === i[u] || d > f) && (i[u] = f, h.push(u, f), o[u] = s));
                            if (void 0 !== n && void 0 === i[n]) {
                                var p = ["Could not find a path from ", e, " to ", n, "."].join("");
                                throw new Error(p)
                            }
                            return o
                        },
                        extract_shortest_path_from_predecessor_list: function(t, e) {
                            for (var n = [], r = e; r;) n.push(r), t[r], r = t[r];
                            return n.reverse(), n
                        },
                        find_path: function(t, e, n) {
                            var o = r.single_source_shortest_paths(t, e, n);
                            return r.extract_shortest_path_from_predecessor_list(o, n)
                        },
                        PriorityQueue: {
                            make: function(t) {
                                var e, n = r.PriorityQueue,
                                    o = {};
                                for (e in t = t || {}, n) n.hasOwnProperty(e) && (o[e] = n[e]);
                                return o.queue = [], o.sorter = t.sorter || n.default_sorter, o
                            },
                            default_sorter: function(t, e) {
                                return t.cost - e.cost
                            },
                            push: function(t, e) {
                                var n = {
                                    value: t,
                                    cost: e
                                };
                                this.queue.push(n), this.queue.sort(this.sorter)
                            },
                            pop: function() {
                                return this.queue.shift()
                            },
                            empty: function() {
                                return 0 === this.queue.length
                            }
                        }
                    };
                    void 0 !== e && (e.exports = r)
                }, {}
            ],
            32: [function(t, e, n) {
                    n.read = function(t, e, n, r, o) {
                        var i, a, s = 8 * o - r - 1,
                            u = (1 << s) - 1,
                            c = u >> 1,
                            l = -7,
                            f = n ? o - 1 : 0,
                            d = n ? -1 : 1,
                            h = t[e + f];
                        for (f += d, i = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; i = 256 * i + t[e + f], f += d, l -= 8);
                        for (a = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; a = 256 * a + t[e + f], f += d, l -= 8);
                        if (0 === i) i = 1 - c;
                        else {
                            if (i === u) return a ? NaN : 1 / 0 * (h ? -1 : 1);
                            a += Math.pow(2, r), i -= c
                        }
                        return (h ? -1 : 1) * a * Math.pow(2, i - r)
                    }, n.write = function(t, e, n, r, o, i) {
                        var a, s, u, c = 8 * i - o - 1,
                            l = (1 << c) - 1,
                            f = l >> 1,
                            d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            h = r ? 0 : i - 1,
                            p = r ? 1 : -1,
                            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (a++, u /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (e * u - 1) * Math.pow(2, o), a += f) : (s = e * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + h] = 255 & s, h += p, s /= 256, o -= 8);
                        for (a = a << o | s, c += o; c > 0; t[n + h] = 255 & a, h += p, a /= 256, c -= 8);
                        t[n + h - p] |= 128 * g
                    }
                }, {}
            ],
            33: [function(t, e, n) {
                    var r = {}.toString;
                    e.exports = Array.isArray || function(t) {
                        return "[object Array]" == r.call(t)
                    }
                }, {}
            ]
        }, {}, [24])(24)
    })),
        Sd = function() {
            var t;
            (new xl, function() {
                if (Ir("input[data-multiple]").length > 0) {
                    var t;
                    Ir("input[data-multiple]").each((function() {
                        t = new El(this, {
                            filter: function(t, e) {
                                return El.FILTER_CONTAINS(t, e.match(/[^ ]*$/)[0])
                            },
                            replace: function(t) {
                                var e = this.input.value.match(/^.+ \s*|/)[0];
                                this.input.value = e + t + " "
                            },
                            minChars: 1
                        }), Ir(this).on("click", (function() {
                            t.close()
                        }))
                    }));
                    var e = Ir("#lf_tags");
                    e.on("input", (function() {
                        for (var n, r = e.data("list").replace(/,/g, "").split(" "), o = /(\w+) /g; null !== (n = o.exec(e.val()));) {
                            var i = wl(r).call(r, n[1]); - 1 !== i && dl(r).call(r, i, 1)
                        }
                        t.list = r
                    }))
                }
            }(), Ir(".icon-qrcode, .qrcode").removeAttr("onclick").off("click").on("click", (function(t) {
                t.preventDefault();
                var e = Ir(this).data("permalink");
                return ci.addListener("qrcode", (function(t) {
                    ci.hide()
                })), ci.addContent("qrcode", '<div><canvas id="qrcode"/></div>'), Cd.toCanvas(document.getElementById("qrcode"), e, {
                    errorCorrectionLevel: "H",
                    width: 250
                }, (function(t) {
                    t && console.error(t)
                })), ci.show(), !1
            })), shaarli.isAuth) && ("pluginsadmin" === shaarli.pageName && Ir(".list-sortable").each((function() {
                rd.create(this, {
                    animation: 200,
                    draggable: ".list-item-sortable",
                    handle: ".list-sortable-handle",
                    forceFallback: !0,
                    onEnd: function(t) {
                        var e = 0,
                            n = Ir(t.target);
                        ii(n).call(n, ".list-item-sortable").each((function() {
                            var t;
                            ii(t = Ir(this).data("order", e)).call(t, "[type=hidden]").val(e), e++
                        }))
                    }
                })
            })), rl(t = ["editlink", "editlinkbatch"]).call(t, shaarli.pageName) && Ic(Ir('[name="lf_description"]')))
        };
    Ir(document).ready((function() {
        li(), ci.init(), zc(), Yc.init(), $c(), Ir(".icon-unfold").on("click", (function() {
            Ir(".header-main").toggleClass("unfold")
        })), Ir("[data-href]").on("click", (function() {
            var t = Ir(this).data("href");
            t && (document.location.href = t)
        })), Sd(), shaarli.isAuth && (Bc(), Mc.init(), Ii.init(), Tc(), Wc(), Xc(), Ir(".bookmarklet").on("click", (function(t) {
            return t.preventDefault(), Li("Information", "Drag this link to your bookmarks toolbar, or right-click it and choose Bookmark This Link.", "alert"), !1
        }))), Ir(".autofocus").each((function(t, e) {
            return Ir(e).focus(), !1
        }))
    }))
}();