(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    5137: function (e, t, r) {
      let n = r(959),
        i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t,
              },
              r
            ),
            e ? n.createElement("title", { id: t }, e) : null,
            n.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
            })
          );
        });
      e.exports = i;
    },
    8407: function (e, t, r) {
      let n = r(959),
        i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t,
              },
              r
            ),
            e ? n.createElement("title", { id: t }, e) : null,
            n.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
            })
          );
        });
      e.exports = i;
    },
    6610: function (e, t, r) {
      let n = r(959),
        i = n.forwardRef(function ({ title: e, titleId: t, ...r }, i) {
          return n.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t,
              },
              r
            ),
            e ? n.createElement("title", { id: t }, e) : null,
            n.createElement("path", {
              fillRule: "evenodd",
              d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
              clipRule: "evenodd",
            })
          );
        });
      e.exports = i;
    },
    4875: function (e, t) {
      var r;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var a = i.apply(null, r);
                  a && e.push(a);
                }
              } else if ("object" === o) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (var s in r) n.call(r, s) && r[s] && e.push(s);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (r = function () {
                return i;
              }.apply(t, [])) && (e.exports = r);
      })();
    },
    3886: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = r(9660),
        o = r(1689),
        a =
          (n = r(959)) && "object" == typeof n && "default" in n
            ? n
            : { default: n };
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var l = ["children", "locale", "now"];
      function u(e) {
        var t,
          r = e.children,
          n = e.locale,
          u = e.now,
          c = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              t.indexOf((r = o[n])) >= 0 || (i[r] = e[r]);
            return i;
          })(e, l);
        try {
          t = o.useRouter();
        } catch (e) {}
        if (
          (!n && t && (n = t.locale),
          "string" == typeof u && (u = new Date(u)),
          !n)
        )
          throw Error(void 0);
        return a.default.createElement(
          i.IntlProvider,
          s({ locale: n, now: u }, c),
          r
        );
      }
      (t.NextIntlClientProvider = u),
        (t.NextIntlProvider = u),
        Object.keys(i).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
    },
    9458: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(4621);
        },
      ]);
    },
    4621: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return q;
          },
        });
      var n = r(1527),
        i = r(9902),
        o = r(2826);
      let a = "undefined" == typeof window || "Deno" in window;
      function s() {}
      function l(e, t, r) {
        return b(e)
          ? "function" == typeof t
            ? { ...r, queryKey: e, queryFn: t }
            : { ...t, queryKey: e }
          : e;
      }
      function u(e, t, r) {
        return b(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
      }
      function c(e, t) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: o,
          queryKey: a,
          stale: s,
        } = e;
        if (b(a)) {
          if (n) {
            if (t.queryHash !== d(a, t.options)) return !1;
          } else {
            if (!p(t.queryKey, a)) return !1;
          }
        }
        if ("all" !== r) {
          let e = t.isActive();
          if (("active" === r && !e) || ("inactive" === r && e)) return !1;
        }
        return (
          ("boolean" != typeof s || t.isStale() === s) &&
          (void 0 === i || i === t.state.fetchStatus) &&
          (!o || !!o(t))
        );
      }
      function h(e, t) {
        let { exact: r, fetching: n, predicate: i, mutationKey: o } = e;
        if (b(o)) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (f(t.options.mutationKey) !== f(o)) return !1;
          } else {
            if (!p(t.options.mutationKey, o)) return !1;
          }
        }
        return (
          ("boolean" != typeof n || ("loading" === t.state.status) === n) &&
          (!i || !!i(t))
        );
      }
      function d(e, t) {
        let r = (null == t ? void 0 : t.queryKeyHashFn) || f;
        return r(e);
      }
      function f(e) {
        return JSON.stringify(e, (e, t) =>
          m(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function p(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((r) => !p(e[r], t[r])))
        );
      }
      function g(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function m(e) {
        if (!y(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return !!(y(r) && r.hasOwnProperty("isPrototypeOf"));
      }
      function y(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function b(e) {
        return Array.isArray(e);
      }
      function v(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function x(e) {
        v(0).then(e);
      }
      let w = console,
        C = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            n = (e) => {
              e();
            },
            i = (e) => {
              let r;
              t++;
              try {
                r = e();
              } finally {
                --t || s();
              }
              return r;
            },
            o = (n) => {
              t
                ? e.push(n)
                : x(() => {
                    r(n);
                  });
            },
            a =
              (e) =>
              (...t) => {
                o(() => {
                  e(...t);
                });
              },
            s = () => {
              let t = e;
              (e = []),
                t.length &&
                  x(() => {
                    n(() => {
                      t.forEach((e) => {
                        r(e);
                      });
                    });
                  });
            },
            l = (e) => {
              r = e;
            },
            u = (e) => {
              n = e;
            };
          return {
            batch: i,
            batchCalls: a,
            schedule: o,
            setNotifyFunction: l,
            setBatchNotifyFunction: u,
          };
        })();
      class k {
        constructor() {
          (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.push(e),
            this.onSubscribe(),
            () => {
              (this.listeners = this.listeners.filter((t) => t !== e)),
                this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.length > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
      let E = new (class extends k {
          constructor() {
            super(),
              (this.setup = (e) => {
                if (!a && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    window.addEventListener("focus", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t),
                        window.removeEventListener("focus", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              var e;
              null == (e = this.cleanup) || e.call(this),
                (this.cleanup = void 0);
            }
          }
          setEventListener(e) {
            var t;
            (this.setup = e),
              null == (t = this.cleanup) || t.call(this),
              (this.cleanup = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            (this.focused = e), e && this.onFocus();
          }
          onFocus() {
            this.listeners.forEach((e) => {
              e();
            });
          }
          isFocused() {
            return "boolean" == typeof this.focused
              ? this.focused
              : "undefined" == typeof document ||
                  [void 0, "visible", "prerender"].includes(
                    document.visibilityState
                  );
          }
        })(),
        T = new (class extends k {
          constructor() {
            super(),
              (this.setup = (e) => {
                if (!a && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", t, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              var e;
              null == (e = this.cleanup) || e.call(this),
                (this.cleanup = void 0);
            }
          }
          setEventListener(e) {
            var t;
            (this.setup = e),
              null == (t = this.cleanup) || t.call(this),
              (this.cleanup = e((e) => {
                "boolean" == typeof e ? this.setOnline(e) : this.onOnline();
              }));
          }
          setOnline(e) {
            (this.online = e), e && this.onOnline();
          }
          onOnline() {
            this.listeners.forEach((e) => {
              e();
            });
          }
          isOnline() {
            return "boolean" == typeof this.online
              ? this.online
              : "undefined" == typeof navigator ||
                  void 0 === navigator.onLine ||
                  navigator.onLine;
          }
        })();
      function S(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function P(e) {
        return (null != e ? e : "online") !== "online" || T.isOnline();
      }
      class A {
        constructor(e) {
          (this.revert = null == e ? void 0 : e.revert),
            (this.silent = null == e ? void 0 : e.silent);
        }
      }
      function N(e) {
        return e instanceof A;
      }
      function j(e) {
        let t,
          r,
          n,
          i = !1,
          o = 0,
          a = !1,
          s = new Promise((e, t) => {
            (r = e), (n = t);
          }),
          l = (t) => {
            a || (f(new A(t)), null == e.abort || e.abort());
          },
          u = () => {
            i = !0;
          },
          c = () => {
            i = !1;
          },
          h = () =>
            !E.isFocused() || ("always" !== e.networkMode && !T.isOnline()),
          d = (n) => {
            a ||
              ((a = !0),
              null == e.onSuccess || e.onSuccess(n),
              null == t || t(),
              r(n));
          },
          f = (r) => {
            a ||
              ((a = !0),
              null == e.onError || e.onError(r),
              null == t || t(),
              n(r));
          },
          p = () =>
            new Promise((r) => {
              (t = (e) => {
                let t = a || !h();
                return t && r(e), t;
              }),
                null == e.onPause || e.onPause();
            }).then(() => {
              (t = void 0), a || null == e.onContinue || e.onContinue();
            }),
          g = () => {
            let t;
            if (!a) {
              try {
                t = e.fn();
              } catch (e) {
                t = Promise.reject(e);
              }
              Promise.resolve(t)
                .then(d)
                .catch((t) => {
                  var r, n;
                  if (a) return;
                  let s = null != (r = e.retry) ? r : 3,
                    l = null != (n = e.retryDelay) ? n : S,
                    u = "function" == typeof l ? l(o, t) : l,
                    c =
                      !0 === s ||
                      ("number" == typeof s && o < s) ||
                      ("function" == typeof s && s(o, t));
                  if (i || !c) {
                    f(t);
                    return;
                  }
                  o++,
                    null == e.onFail || e.onFail(o, t),
                    v(u)
                      .then(() => {
                        if (h()) return p();
                      })
                      .then(() => {
                        i ? f(t) : g();
                      });
                });
            }
          };
        return (
          P(e.networkMode) ? g() : p().then(g),
          {
            promise: s,
            cancel: l,
            continue: () => {
              let e = null == t ? void 0 : t();
              return e ? s : Promise.resolve();
            },
            cancelRetry: u,
            continueRetry: c,
          }
        );
      }
      class R {
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          var e;
          this.clearGcTimeout(),
            "number" == typeof (e = this.cacheTime) &&
              e >= 0 &&
              e !== 1 / 0 &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.cacheTime));
        }
        updateCacheTime(e) {
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            null != e ? e : a ? 1 / 0 : 3e5
          );
        }
        clearGcTimeout() {
          this.gcTimeout &&
            (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
      }
      class L extends R {
        constructor(e) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.cache = e.cache),
            (this.logger = e.logger || w),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.initialState =
              e.state ||
              (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  n = r
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? (null != n ? n : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? "success" : "loading",
                  fetchStatus: "idle",
                };
              })(this.options)),
            (this.state = this.initialState),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        setOptions(e) {
          (this.options = { ...this.defaultOptions, ...e }),
            this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.cache.remove(this);
        }
        setData(e, t) {
          var r, n;
          let i =
            ((r = this.state.data),
            null != (n = this.options).isDataEqual && n.isDataEqual(r, e)
              ? r
              : "function" == typeof n.structuralSharing
              ? n.structuralSharing(r, e)
              : !1 !== n.structuralSharing
              ? (function e(t, r) {
                  if (t === r) return t;
                  let n = g(t) && g(r);
                  if (n || (m(t) && m(r))) {
                    let i = n ? t.length : Object.keys(t).length,
                      o = n ? r : Object.keys(r),
                      a = o.length,
                      s = n ? [] : {},
                      l = 0;
                    for (let i = 0; i < a; i++) {
                      let a = n ? i : o[i];
                      (s[a] = e(t[a], r[a])), s[a] === t[a] && l++;
                    }
                    return i === a && l === i ? t : s;
                  }
                  return r;
                })(r, e)
              : e);
          return (
            this.dispatch({
              data: i,
              type: "success",
              dataUpdatedAt: null == t ? void 0 : t.updatedAt,
              manual: null == t ? void 0 : t.manual,
            }),
            i
          );
        }
        setState(e, t) {
          this.dispatch({ type: "setState", state: e, setStateOptions: t });
        }
        cancel(e) {
          var t;
          let r = this.promise;
          return (
            null == (t = this.retryer) || t.cancel(e),
            r ? r.then(s).catch(s) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(this.initialState);
        }
        isActive() {
          return this.observers.some((e) => !1 !== e.options.enabled);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some((e) => e.getCurrentResult().isStale)
          );
        }
        isStaleByTime(e = 0) {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !Math.max(this.state.dataUpdatedAt + (e || 0) - Date.now(), 0)
          );
        }
        onFocus() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        onOnline() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnReconnect());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        addObserver(e) {
          -1 === this.observers.indexOf(e) &&
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.cache.notify({
              type: "observerAdded",
              query: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          -1 !== this.observers.indexOf(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.retryer &&
                (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
              this.scheduleGc()),
            this.cache.notify({
              type: "observerRemoved",
              query: this,
              observer: e,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: "invalidate" });
        }
        fetch(e, t) {
          var r, n, i, o;
          if ("idle" !== this.state.fetchStatus) {
            if (this.state.dataUpdatedAt && null != t && t.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.promise)
              return (
                null == (i = this.retryer) || i.continueRetry(), this.promise
              );
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          Array.isArray(this.options.queryKey);
          let a = (function () {
              if ("function" == typeof AbortController)
                return new AbortController();
            })(),
            s = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            l = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => {
                  if (a) return (this.abortSignalConsumed = !0), a.signal;
                },
              });
            };
          l(s);
          let u = () =>
              this.options.queryFn
                ? ((this.abortSignalConsumed = !1), this.options.queryFn(s))
                : Promise.reject("Missing queryFn"),
            c = {
              fetchOptions: t,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: u,
            };
          l(c),
            null == (r = this.options.behavior) || r.onFetch(c),
            (this.revertState = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !==
                (null == (n = c.fetchOptions) ? void 0 : n.meta)) &&
              this.dispatch({
                type: "fetch",
                meta: null == (o = c.fetchOptions) ? void 0 : o.meta,
              });
          let h = (e) => {
            if (
              ((N(e) && e.silent) || this.dispatch({ type: "error", error: e }),
              !N(e))
            ) {
              var t, r;
              null == (t = (r = this.cache.config).onError) ||
                t.call(r, e, this);
            }
            this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            (this.retryer = j({
              fn: c.fetchFn,
              abort: null == a ? void 0 : a.abort.bind(a),
              onSuccess: (e) => {
                var t, r;
                if (void 0 === e) {
                  h(Error("undefined"));
                  return;
                }
                this.setData(e),
                  null == (t = (r = this.cache.config).onSuccess) ||
                    t.call(r, e, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: h,
              onFail: (e, t) => {
                this.dispatch({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.dispatch({ type: "pause" });
              },
              onContinue: () => {
                this.dispatch({ type: "continue" });
              },
              retry: c.options.retry,
              retryDelay: c.options.retryDelay,
              networkMode: c.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          );
        }
        dispatch(e) {
          (this.state = ((t) => {
            var r, n;
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  fetchFailureCount: e.failureCount,
                  fetchFailureReason: e.error,
                };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...t,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null != (r = e.meta) ? r : null,
                  fetchStatus: P(this.options.networkMode)
                    ? "fetching"
                    : "paused",
                  ...(!t.dataUpdatedAt && { error: null, status: "loading" }),
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  dataUpdateCount: t.dataUpdateCount + 1,
                  dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
              case "error":
                let i = e.error;
                if (N(i) && i.revert && this.revertState)
                  return { ...this.revertState };
                return {
                  ...t,
                  error: i,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            C.batch(() => {
              this.observers.forEach((t) => {
                t.onQueryUpdate(e);
              }),
                this.cache.notify({ query: this, type: "updated", action: e });
            });
        }
      }
      class M extends k {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.queries = []),
            (this.queriesMap = {});
        }
        build(e, t, r) {
          var n;
          let i = t.queryKey,
            o = null != (n = t.queryHash) ? n : d(i, t),
            a = this.get(o);
          return (
            a ||
              ((a = new L({
                cache: this,
                logger: e.getLogger(),
                queryKey: i,
                queryHash: o,
                options: e.defaultQueryOptions(t),
                state: r,
                defaultOptions: e.getQueryDefaults(i),
              })),
              this.add(a)),
            a
          );
        }
        add(e) {
          this.queriesMap[e.queryHash] ||
            ((this.queriesMap[e.queryHash] = e),
            this.queries.push(e),
            this.notify({ type: "added", query: e }));
        }
        remove(e) {
          let t = this.queriesMap[e.queryHash];
          t &&
            (e.destroy(),
            (this.queries = this.queries.filter((t) => t !== e)),
            t === e && delete this.queriesMap[e.queryHash],
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          C.batch(() => {
            this.queries.forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.queriesMap[e];
        }
        getAll() {
          return this.queries;
        }
        find(e, t) {
          let [r] = u(e, t);
          return (
            void 0 === r.exact && (r.exact = !0),
            this.queries.find((e) => c(r, e))
          );
        }
        findAll(e, t) {
          let [r] = u(e, t);
          return Object.keys(r).length > 0
            ? this.queries.filter((e) => c(r, e))
            : this.queries;
        }
        notify(e) {
          C.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          C.batch(() => {
            this.queries.forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          C.batch(() => {
            this.queries.forEach((e) => {
              e.onOnline();
            });
          });
        }
      }
      class O extends R {
        constructor(e) {
          super(),
            (this.options = { ...e.defaultOptions, ...e.options }),
            (this.mutationId = e.mutationId),
            (this.mutationCache = e.mutationCache),
            (this.logger = e.logger || w),
            (this.observers = []),
            (this.state = e.state || {
              context: void 0,
              data: void 0,
              error: null,
              failureCount: 0,
              failureReason: null,
              isPaused: !1,
              status: "idle",
              variables: void 0,
            }),
            this.updateCacheTime(this.options.cacheTime),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        setState(e) {
          this.dispatch({ type: "setState", state: e });
        }
        addObserver(e) {
          -1 === this.observers.indexOf(e) &&
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.mutationCache.notify({
              type: "observerAdded",
              mutation: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          (this.observers = this.observers.filter((t) => t !== e)),
            this.scheduleGc(),
            this.mutationCache.notify({
              type: "observerRemoved",
              mutation: this,
              observer: e,
            });
        }
        optionalRemove() {
          this.observers.length ||
            ("loading" === this.state.status
              ? this.scheduleGc()
              : this.mutationCache.remove(this));
        }
        continue() {
          var e, t;
          return null !=
            (e = null == (t = this.retryer) ? void 0 : t.continue())
            ? e
            : this.execute();
        }
        async execute() {
          var e, t, r, n, i, o, a, s, l, u, c, h, d, f, p, g;
          let m = "loading" === this.state.status;
          try {
            if (!m) {
              this.dispatch({
                type: "loading",
                variables: this.options.variables,
              }),
                await (null == (a = (s = this.mutationCache.config).onMutate)
                  ? void 0
                  : a.call(s, this.state.variables, this));
              let e = await (null == (l = (u = this.options).onMutate)
                ? void 0
                : l.call(u, this.state.variables));
              e !== this.state.context &&
                this.dispatch({
                  type: "loading",
                  context: e,
                  variables: this.state.variables,
                });
            }
            let c = await (() => {
              var e;
              return (
                (this.retryer = j({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(this.state.variables)
                      : Promise.reject("No mutationFn found"),
                  onFail: (e, t) => {
                    this.dispatch({
                      type: "failed",
                      failureCount: e,
                      error: t,
                    });
                  },
                  onPause: () => {
                    this.dispatch({ type: "pause" });
                  },
                  onContinue: () => {
                    this.dispatch({ type: "continue" });
                  },
                  retry: null != (e = this.options.retry) ? e : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              );
            })();
            return (
              await (null == (e = (t = this.mutationCache.config).onSuccess)
                ? void 0
                : e.call(t, c, this.state.variables, this.state.context, this)),
              await (null == (r = (n = this.options).onSuccess)
                ? void 0
                : r.call(n, c, this.state.variables, this.state.context)),
              await (null == (i = (o = this.options).onSettled)
                ? void 0
                : i.call(o, c, null, this.state.variables, this.state.context)),
              this.dispatch({ type: "success", data: c }),
              c
            );
          } catch (e) {
            try {
              throw (
                (await (null == (c = (h = this.mutationCache.config).onError)
                  ? void 0
                  : c.call(
                      h,
                      e,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await (null == (d = (f = this.options).onError)
                  ? void 0
                  : d.call(f, e, this.state.variables, this.state.context)),
                await (null == (p = (g = this.options).onSettled)
                  ? void 0
                  : p.call(
                      g,
                      void 0,
                      e,
                      this.state.variables,
                      this.state.context
                    )),
                e)
              );
            } finally {
              this.dispatch({ type: "error", error: e });
            }
          }
        }
        dispatch(e) {
          (this.state = ((t) => {
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  failureCount: e.failureCount,
                  failureReason: e.error,
                };
              case "pause":
                return { ...t, isPaused: !0 };
              case "continue":
                return { ...t, isPaused: !1 };
              case "loading":
                return {
                  ...t,
                  context: e.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: !P(this.options.networkMode),
                  status: "loading",
                  variables: e.variables,
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...t,
                  data: void 0,
                  error: e.error,
                  failureCount: t.failureCount + 1,
                  failureReason: e.error,
                  isPaused: !1,
                  status: "error",
                };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            C.batch(() => {
              this.observers.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.mutationCache.notify({
                  mutation: this,
                  type: "updated",
                  action: e,
                });
            });
        }
      }
      class B extends k {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.mutations = []),
            (this.mutationId = 0);
        }
        build(e, t, r) {
          let n = new O({
            mutationCache: this,
            logger: e.getLogger(),
            mutationId: ++this.mutationId,
            options: e.defaultMutationOptions(t),
            state: r,
            defaultOptions: t.mutationKey
              ? e.getMutationDefaults(t.mutationKey)
              : void 0,
          });
          return this.add(n), n;
        }
        add(e) {
          this.mutations.push(e), this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          (this.mutations = this.mutations.filter((t) => t !== e)),
            this.notify({ type: "removed", mutation: e });
        }
        clear() {
          C.batch(() => {
            this.mutations.forEach((e) => {
              this.remove(e);
            });
          });
        }
        getAll() {
          return this.mutations;
        }
        find(e) {
          return (
            void 0 === e.exact && (e.exact = !0),
            this.mutations.find((t) => h(e, t))
          );
        }
        findAll(e) {
          return this.mutations.filter((t) => h(e, t));
        }
        notify(e) {
          C.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          var e;
          return (
            (this.resuming = (
              null != (e = this.resuming) ? e : Promise.resolve()
            )
              .then(() => {
                let e = this.mutations.filter((e) => e.state.isPaused);
                return C.batch(() =>
                  e.reduce(
                    (e, t) => e.then(() => t.continue().catch(s)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                this.resuming = void 0;
              })),
            this.resuming
          );
        }
      }
      function D(e, t) {
        return null == e.getNextPageParam
          ? void 0
          : e.getNextPageParam(t[t.length - 1], t);
      }
      var I = r(959);
      let F = I.createContext(void 0),
        _ = I.createContext(!1),
        H = ({
          client: e,
          children: t,
          context: r,
          contextSharing: n = !1,
        }) => {
          I.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          );
          let i =
            r ||
            (n && "undefined" != typeof window
              ? (window.ReactQueryClientContext ||
                  (window.ReactQueryClientContext = F),
                window.ReactQueryClientContext)
              : F);
          return I.createElement(
            _.Provider,
            { value: !r && n },
            I.createElement(i.Provider, { value: e }, t)
          );
        };
      var U = r(3886),
        V = r(1689);
      let G = new (class {
          constructor(e = {}) {
            (this.queryCache = e.queryCache || new M()),
              (this.mutationCache = e.mutationCache || new B()),
              (this.logger = e.logger || w),
              (this.defaultOptions = e.defaultOptions || {}),
              (this.queryDefaults = []),
              (this.mutationDefaults = []),
              (this.mountCount = 0);
          }
          mount() {
            this.mountCount++,
              1 === this.mountCount &&
                ((this.unsubscribeFocus = E.subscribe(() => {
                  E.isFocused() &&
                    (this.resumePausedMutations(), this.queryCache.onFocus());
                })),
                (this.unsubscribeOnline = T.subscribe(() => {
                  T.isOnline() &&
                    (this.resumePausedMutations(), this.queryCache.onOnline());
                })));
          }
          unmount() {
            var e, t;
            this.mountCount--,
              0 === this.mountCount &&
                (null == (e = this.unsubscribeFocus) || e.call(this),
                (this.unsubscribeFocus = void 0),
                null == (t = this.unsubscribeOnline) || t.call(this),
                (this.unsubscribeOnline = void 0));
          }
          isFetching(e, t) {
            let [r] = u(e, t);
            return (
              (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length
            );
          }
          isMutating(e) {
            return this.mutationCache.findAll({ ...e, fetching: !0 }).length;
          }
          getQueryData(e, t) {
            var r;
            return null == (r = this.queryCache.find(e, t))
              ? void 0
              : r.state.data;
          }
          ensureQueryData(e, t, r) {
            let n = l(e, t, r),
              i = this.getQueryData(n.queryKey);
            return i ? Promise.resolve(i) : this.fetchQuery(n);
          }
          getQueriesData(e) {
            return this.getQueryCache()
              .findAll(e)
              .map(({ queryKey: e, state: t }) => {
                let r = t.data;
                return [e, r];
              });
          }
          setQueryData(e, t, r) {
            let n = this.queryCache.find(e),
              i = null == n ? void 0 : n.state.data,
              o = "function" == typeof t ? t(i) : t;
            if (void 0 === o) return;
            let a = l(e),
              s = this.defaultQueryOptions(a);
            return this.queryCache
              .build(this, s)
              .setData(o, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return C.batch(() =>
              this.getQueryCache()
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
            );
          }
          getQueryState(e, t) {
            var r;
            return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state;
          }
          removeQueries(e, t) {
            let [r] = u(e, t),
              n = this.queryCache;
            C.batch(() => {
              n.findAll(r).forEach((e) => {
                n.remove(e);
              });
            });
          }
          resetQueries(e, t, r) {
            let [n, i] = u(e, t, r),
              o = this.queryCache,
              a = { type: "active", ...n };
            return C.batch(
              () => (
                o.findAll(n).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(a, i)
              )
            );
          }
          cancelQueries(e, t, r) {
            let [n, i = {}] = u(e, t, r);
            void 0 === i.revert && (i.revert = !0);
            let o = C.batch(() =>
              this.queryCache.findAll(n).map((e) => e.cancel(i))
            );
            return Promise.all(o).then(s).catch(s);
          }
          invalidateQueries(e, t, r) {
            let [n, i] = u(e, t, r);
            return C.batch(() => {
              var e, t;
              if (
                (this.queryCache.findAll(n).forEach((e) => {
                  e.invalidate();
                }),
                "none" === n.refetchType)
              )
                return Promise.resolve();
              let r = {
                ...n,
                type:
                  null != (e = null != (t = n.refetchType) ? t : n.type)
                    ? e
                    : "active",
              };
              return this.refetchQueries(r, i);
            });
          }
          refetchQueries(e, t, r) {
            let [n, i] = u(e, t, r),
              o = C.batch(() =>
                this.queryCache
                  .findAll(n)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    var t;
                    return e.fetch(void 0, {
                      ...i,
                      cancelRefetch:
                        null == (t = null == i ? void 0 : i.cancelRefetch) || t,
                      meta: { refetchPage: n.refetchPage },
                    });
                  })
              ),
              a = Promise.all(o).then(s);
            return (null != i && i.throwOnError) || (a = a.catch(s)), a;
          }
          fetchQuery(e, t, r) {
            let n = l(e, t, r),
              i = this.defaultQueryOptions(n);
            void 0 === i.retry && (i.retry = !1);
            let o = this.queryCache.build(this, i);
            return o.isStaleByTime(i.staleTime)
              ? o.fetch(i)
              : Promise.resolve(o.state.data);
          }
          prefetchQuery(e, t, r) {
            return this.fetchQuery(e, t, r).then(s).catch(s);
          }
          fetchInfiniteQuery(e, t, r) {
            let n = l(e, t, r);
            return (
              (n.behavior = {
                onFetch: (e) => {
                  e.fetchFn = () => {
                    var t, r, n, i, o, a, s;
                    let l;
                    let u =
                        null == (t = e.fetchOptions)
                          ? void 0
                          : null == (r = t.meta)
                          ? void 0
                          : r.refetchPage,
                      c =
                        null == (n = e.fetchOptions)
                          ? void 0
                          : null == (i = n.meta)
                          ? void 0
                          : i.fetchMore,
                      h = null == c ? void 0 : c.pageParam,
                      d = (null == c ? void 0 : c.direction) === "forward",
                      f = (null == c ? void 0 : c.direction) === "backward",
                      p = (null == (o = e.state.data) ? void 0 : o.pages) || [],
                      g =
                        (null == (a = e.state.data) ? void 0 : a.pageParams) ||
                        [],
                      m = g,
                      y = !1,
                      b = (t) => {
                        Object.defineProperty(t, "signal", {
                          enumerable: !0,
                          get: () => {
                            var t, r;
                            return (
                              null != (t = e.signal) && t.aborted
                                ? (y = !0)
                                : null == (r = e.signal) ||
                                  r.addEventListener("abort", () => {
                                    y = !0;
                                  }),
                              e.signal
                            );
                          },
                        });
                      },
                      v =
                        e.options.queryFn ||
                        (() => Promise.reject("Missing queryFn")),
                      x = (e, t, r, n) => (
                        (m = n ? [t, ...m] : [...m, t]),
                        n ? [r, ...e] : [...e, r]
                      ),
                      w = (t, r, n, i) => {
                        if (y) return Promise.reject("Cancelled");
                        if (void 0 === n && !r && t.length)
                          return Promise.resolve(t);
                        let o = {
                          queryKey: e.queryKey,
                          pageParam: n,
                          meta: e.options.meta,
                        };
                        b(o);
                        let a = v(o),
                          s = Promise.resolve(a).then((e) => x(t, n, e, i));
                        return s;
                      };
                    if (p.length) {
                      if (d) {
                        let t = void 0 !== h,
                          r = t ? h : D(e.options, p);
                        l = w(p, t, r);
                      } else if (f) {
                        let t = void 0 !== h,
                          r = t
                            ? h
                            : null == (s = e.options).getPreviousPageParam
                            ? void 0
                            : s.getPreviousPageParam(p[0], p);
                        l = w(p, t, r, !0);
                      } else {
                        m = [];
                        let t = void 0 === e.options.getNextPageParam,
                          r = !u || !p[0] || u(p[0], 0, p);
                        l = r
                          ? w([], t, g[0])
                          : Promise.resolve(x([], g[0], p[0]));
                        for (let r = 1; r < p.length; r++)
                          l = l.then((n) => {
                            let i = !u || !p[r] || u(p[r], r, p);
                            if (i) {
                              let i = t ? g[r] : D(e.options, n);
                              return w(n, t, i);
                            }
                            return Promise.resolve(x(n, g[r], p[r]));
                          });
                      }
                    } else l = w([]);
                    let C = l.then((e) => ({ pages: e, pageParams: m }));
                    return C;
                  };
                },
              }),
              this.fetchQuery(n)
            );
          }
          prefetchInfiniteQuery(e, t, r) {
            return this.fetchInfiniteQuery(e, t, r).then(s).catch(s);
          }
          resumePausedMutations() {
            return this.mutationCache.resumePausedMutations();
          }
          getQueryCache() {
            return this.queryCache;
          }
          getMutationCache() {
            return this.mutationCache;
          }
          getLogger() {
            return this.logger;
          }
          getDefaultOptions() {
            return this.defaultOptions;
          }
          setDefaultOptions(e) {
            this.defaultOptions = e;
          }
          setQueryDefaults(e, t) {
            let r = this.queryDefaults.find((t) => f(e) === f(t.queryKey));
            r
              ? (r.defaultOptions = t)
              : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            if (!e) return;
            let t = this.queryDefaults.find((t) => p(e, t.queryKey));
            return null == t ? void 0 : t.defaultOptions;
          }
          setMutationDefaults(e, t) {
            let r = this.mutationDefaults.find(
              (t) => f(e) === f(t.mutationKey)
            );
            r
              ? (r.defaultOptions = t)
              : this.mutationDefaults.push({
                  mutationKey: e,
                  defaultOptions: t,
                });
          }
          getMutationDefaults(e) {
            if (!e) return;
            let t = this.mutationDefaults.find((t) => p(e, t.mutationKey));
            return null == t ? void 0 : t.defaultOptions;
          }
          defaultQueryOptions(e) {
            if (null != e && e._defaulted) return e;
            let t = {
              ...this.defaultOptions.queries,
              ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              !t.queryHash && t.queryKey && (t.queryHash = d(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.useErrorBoundary &&
                (t.useErrorBoundary = !!t.suspense),
              t
            );
          }
          defaultMutationOptions(e) {
            return null != e && e._defaulted
              ? e
              : {
                  ...this.defaultOptions.mutations,
                  ...this.getMutationDefaults(
                    null == e ? void 0 : e.mutationKey
                  ),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.queryCache.clear(), this.mutationCache.clear();
          }
        })(),
        z = (e) => {
          var t, r;
          let { Component: a, pageProps: s } = e,
            l = (0, V.useRouter)();
          return (
            (0, i.oM)(
              "PDDIJNWG",
              ["pooltogether.com"],
              null === (t = l.events) || void 0 === t ? void 0 : t.on,
              null === (r = l.events) || void 0 === r ? void 0 : r.off
            ),
            (0, n.jsx)(o.Ok, {
              theme: { dark: !0 },
              children: (0, n.jsx)(H, {
                client: G,
                children: (0, n.jsxs)(U.NextIntlProvider, {
                  messages: s.messages,
                  children: [
                    (0, n.jsx)("div", { id: "modal-root" }),
                    (0, n.jsx)(a, { ...s }),
                  ],
                }),
              }),
            })
          );
        };
      function q(e) {
        return (0, n.jsx)(z, { ...e });
      }
      r(8862);
    },
    9902: function (e, t, r) {
      "use strict";
      r.d(t, {
        fm: function () {
          return w;
        },
        oM: function () {
          return f;
        },
        EV: function () {
          return m;
        },
        eI: function () {
          return v;
        },
      });
      var n = function (e) {
          (window.__fathomClientQueue = window.__fathomClientQueue || []),
            window.__fathomClientQueue.push(e);
        },
        i = function () {
          (window.__fathomClientQueue = window.__fathomClientQueue || []),
            window.__fathomClientQueue.forEach(function (e) {
              switch (e.type) {
                case "trackPageview":
                  s(e.opts);
                  return;
                case "trackGoal":
                  l(e.code, e.cents);
                  return;
                case "enableTrackingForMe":
                  c();
                  return;
                case "blockTrackingForMe":
                  u();
                  return;
                case "setSite":
                  h(e.id);
                  return;
              }
            }),
            (window.__fathomClientQueue = []);
        },
        o = function (e) {
          var t = /(https?)(?=:|\/|$)/;
          e.forEach(function (e) {
            null !== t.exec(e) &&
              console.warn(
                "The include domain ".concat(
                  e,
                  " might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string."
                )
              );
          });
        },
        a = function (e, t) {
          var r = document.createElement("script"),
            n =
              document.getElementsByTagName("script")[0] ||
              document.querySelector("body");
          (r.id = "fathom-script"),
            (r.async = !0),
            r.setAttribute("data-site", e),
            (r.src =
              t && t.url ? t.url : "https://cdn.usefathom.com/script.js"),
            t &&
              (void 0 !== t.auto &&
                r.setAttribute("data-auto", "".concat(t.auto)),
              void 0 !== t.honorDNT &&
                r.setAttribute("data-honor-dnt", "".concat(t.honorDNT)),
              void 0 !== t.canonical &&
                r.setAttribute("data-canonical", "".concat(t.canonical)),
              t.includedDomains &&
                (o(t.includedDomains),
                r.setAttribute(
                  "data-included-domains",
                  t.includedDomains.join(",")
                )),
              t.excludedDomains &&
                (o(t.excludedDomains),
                r.setAttribute(
                  "data-excluded-domains",
                  t.excludedDomains.join(",")
                )),
              t.spa && r.setAttribute("data-spa", t.spa)),
            (r.onload = i),
            n.parentNode.insertBefore(r, n);
        },
        s = function (e) {
          window.fathom
            ? e
              ? window.fathom.trackPageview(e)
              : window.fathom.trackPageview()
            : n({ type: "trackPageview", opts: e });
        },
        l = function (e, t) {
          window.fathom
            ? window.fathom.trackGoal(e, t)
            : n({ type: "trackGoal", code: e, cents: t });
        },
        u = function () {
          window.fathom
            ? window.fathom.blockTrackingForMe()
            : n({ type: "blockTrackingForMe" });
        },
        c = function () {
          window.fathom
            ? window.fathom.enableTrackingForMe()
            : n({ type: "enableTrackingForMe" });
        },
        h = function (e) {
          window.fathom
            ? window.fathom.setSite(e)
            : n({ type: "setSite", id: e });
        },
        d = r(959);
      let f = (e, t, r, n) => {
        (0, d.useEffect)(() => {
          if (e && r && n) {
            a(e, {
              url: "https://cdn.usefathom.com/script.js",
              includedDomains: t,
            });
            let i = () => {
              window.fathom && window.fathom.trackPageview();
            };
            return (
              r("routeChangeComplete", i),
              () => {
                n("routeChangeComplete", i);
              }
            );
          }
        }, []);
      };
      var p = r(2227);
      let g = (0, p.cn)({}),
        m = (e) => {
          let [t, r] = (0, p.KO)(g),
            n = !!t[e],
            i = (n) => {
              r({ ...t, [e]: n });
            };
          return { isModalOpen: n, setIsModalOpen: i };
        },
        y = Object.freeze({
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          "2xl": 1536,
        }),
        b = y.md,
        v = () => {
          let [e, t] = (0, d.useState)({ width: void 0, height: void 0 }),
            r = () => {
              t({ width: window.innerWidth, height: window.innerHeight });
            };
          (0, d.useEffect)(
            () => (
              window.addEventListener("resize", r),
              r(),
              () => window.removeEventListener("resize", r)
            ),
            []
          );
          let n = !!e.width && !!e.height,
            i = !!e.width && e.width < b,
            o = !!e.width && e.width >= b;
          return { ...e, isMobile: i, isDesktop: o, isFetched: n };
        };
      Object.freeze({
        coingeckoExchangeRates: "coingeckoExchangeRates",
        coingeckoSimpleTokenPrices: "coingeckoSimpleTokenPrices",
        coingeckoTokenData: "coingeckoTokenData",
        coingeckoTokenPrices: "coingeckoTokenPrices",
      });
      let x = Object.freeze({
          isTestnets: "isTestnets",
          selectedCurrency: "selectedCurrency",
          selectedLanguage: "selectedLanguage",
        }),
        w = Object.freeze({
          captcha: "captcha",
          deposit: "deposit",
          drawWinners: "drawWinners",
          settings: "settings",
          withdraw: "withdraw",
        }),
        C = Object.freeze({
          en: { name: "English", nativeName: "English" },
          es: { name: "Spanish", nativeName: "Espa\xf1ol" },
          de: { name: "German", nativeName: "Deutsch" },
          fr: { name: "French", nativeName: "Fran\xe7ais" },
          hi: { name: "Hindi", nativeName: "Hindī" },
          it: { name: "Italian", nativeName: "Italiana" },
          ko: { name: "Korean", nativeName: "한국어 (韓國語)" },
          pt: { name: "Portuguese", nativeName: "Portugu\xeas" },
          ru: { name: "Russian", nativeName: "Русский" },
          tr: { name: "Turkish", nativeName: "T\xfcrk\xe7e" },
          zh: { name: "Zhōngw\xe9n", nativeName: "中文" },
          sk: { name: "Slovak", nativeName: "Slovenčina" },
          fil: { name: "Filipino", nativeName: "Filipino" },
        });
      (0, p.cn)(
        (() => {
          let e = localStorage.getItem(x.selectedLanguage);
          return e && e in C ? e : "en";
        })()
      ),
        r(8518),
        Object.freeze({
          refetchInterval: !1,
          refetchIntervalInBackground: !1,
          refetchOnMount: !1,
          refetchOnReconnect: !1,
          refetchOnWindowFocus: !1,
        }),
        Object.freeze({
          aed: { name: "United Arab Emirates Dirham", symbol: "DH" },
          ars: { name: "Argentine Peso", symbol: "$" },
          aud: { name: "Australian Dollar", symbol: "A$" },
          bdt: { name: "Bangladeshi Taka", symbol: "৳" },
          bhd: { name: "Bahraini Dinar", symbol: "BD" },
          btc: { name: "Bitcoin", symbol: "₿" },
          brl: { name: "Brazil Real", symbol: "R$" },
          cad: { name: "Canadian Dollar", symbol: "CA$" },
          chf: { name: "Swiss Franc", symbol: "Fr." },
          clp: { name: "Chilean Peso", symbol: "CLP$" },
          cny: { name: "Chinese Yuan", symbol: "\xa5" },
          czk: { name: "Czech Koruna", symbol: "Kč" },
          dkk: { name: "Danish Krone", symbol: "kr." },
          eth: { name: "Ether", symbol: "Ξ" },
          eur: { name: "Euro", symbol: "€" },
          gbp: { name: "British Pound Sterling", symbol: "\xa3" },
          hkd: { name: "Hong Kong Dollar", symbol: "HK$" },
          huf: { name: "Hungarian Forint", symbol: "Ft" },
          idr: { name: "Indonesian Rupiah", symbol: "Rp" },
          ils: { name: "Israeli New Shekel", symbol: "₪" },
          inr: { name: "Indian Rupee", symbol: "₹" },
          jpy: { name: "Japanese Yen", symbol: "\xa5" },
          krw: { name: "South Korean Won", symbol: "₩" },
          kwd: { name: "Kuwaiti Dinar", symbol: "KD" },
          lkr: { name: "Sri Lankan Rupee", symbol: "Rs" },
          mmk: { name: "Burmese Kyat", symbol: "K" },
          mxn: { name: "Mexican Peso", symbol: "MX$" },
          myr: { name: "Malaysian Ringgit", symbol: "RM" },
          ngn: { name: "Nigerian Naira", symbol: "₦" },
          nok: { name: "Norwegian Krone", symbol: "kr" },
          nzd: { name: "New Zealand Dollar", symbol: "NZ$" },
          php: { name: "Philippine Peso", symbol: "₱" },
          pkr: { name: "Pakistani Rupee", symbol: "₨" },
          pln: { name: "Polish Zloty", symbol: "zł" },
          rub: { name: "Russian Ruble", symbol: "₽" },
          sar: { name: "Saudi Riyal", symbol: "SR" },
          sek: { name: "Swedish Krona", symbol: "kr" },
          sgd: { name: "Singapore Dollar", symbol: "S$" },
          thb: { name: "Thai Baht", symbol: "฿" },
          try: { name: "Turkish Lira", symbol: "₺" },
          twd: { name: "New Taiwan Dollar", symbol: "NT$" },
          uah: { name: "Ukrainian hryvnia", symbol: "₴" },
          usd: { name: "US Dollar", symbol: "$" },
          vef: { name: "Venezuelan bol\xedvar fuerte", symbol: "Bs.F" },
          vnd: { name: "Vietnamese đồng", symbol: "₫" },
          zar: { name: "South African Rand", symbol: "R" },
        });
    },
    2826: function (e, t, r) {
      "use strict";
      r.d(t, {
        zx: function () {
          return r3;
        },
        dL: function () {
          return lH;
        },
        Ok: function () {
          return tU;
        },
        $_: function () {
          return lU;
        },
        BA: function () {
          return l3;
        },
        u_: function () {
          return lL;
        },
        wp: function () {
          return lq;
        },
        QZ: function () {
          return l$;
        },
      });
      var n,
        i = {};
      r.r(i);
      var o = r(1527),
        a = r(4875),
        s = r.n(a),
        l = r(959),
        u = r.t(l, 2),
        c = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        h = l.createContext && l.createContext(c),
        d = function () {
          return (d =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        f = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, n = Object.getOwnPropertySymbols(e);
              i < n.length;
              i++
            )
              0 > t.indexOf(n[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]]);
          return r;
        };
      function p(e) {
        return function (t) {
          return l.createElement(
            g,
            d({ attr: d({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return l.createElement(
                    t.tag,
                    d({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function g(e) {
        var t = function (t) {
          var r,
            n = e.attr,
            i = e.size,
            o = e.title,
            a = f(e, ["attr", "size", "title"]),
            s = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            l.createElement(
              "svg",
              d(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                n,
                a,
                {
                  className: r,
                  style: d(d({ color: e.color || t.color }, t.style), e.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && l.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== h
          ? l.createElement(h.Consumer, null, function (e) {
              return t(e);
            })
          : t(c);
      }
      function m(e) {
        return p({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function y(e) {
        return p({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function b(e) {
        return p({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function v(e) {
        return p({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
              },
            },
          ],
        })(e);
      }
      function x(e) {
        return p({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
              },
            },
          ],
        })(e);
      }
      function w(e) {
        return p({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function C(e) {
        return p({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function k(e) {
        return p({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19 9l-7 7-7-7",
              },
            },
          ],
        })(e);
      }
      function E(e) {
        return p({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 19l-7-7 7-7",
              },
            },
          ],
        })(e);
      }
      function T(e) {
        return p({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 5l7 7-7 7",
              },
            },
          ],
        })(e);
      }
      function S(e) {
        return p({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18L18 6M6 6l12 12",
              },
            },
          ],
        })(e);
      }
      function P(e) {
        return null !== e && "object" == typeof e && e.constructor === Object;
      }
      function A(e) {
        if (!P(e)) return e;
        let t = { ...e };
        return (
          Object.keys(e).forEach((r) => {
            t[r] = A(e[r]);
          }),
          t
        );
      }
      function N(e, t) {
        if (P(t) && 0 === Object.keys(t).length) return A({ ...e, ...t });
        let r = { ...e, ...t };
        return (
          P(t) &&
            P(e) &&
            Object.keys(t).forEach((n) => {
              P(t[n]) && n in e && P(e[n])
                ? (r[n] = N(e[n], t[n]))
                : (r[n] = P(t[n]) ? A(t[n]) : t[n]);
            }),
          r
        );
      }
      let j = (0, l.createContext)(void 0);
      function R() {
        let e = (0, l.useContext)(j);
        if (!e)
          throw Error(
            "useAccordionContext should be used within the AccordionPanelContext provider!"
          );
        return e;
      }
      let L = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { isOpen: i } = R(),
            a = N(el().theme.accordion.content, r);
          return (0, o.jsx)("div", {
            className: s()(a.base, t),
            "data-testid": "flowbite-accordion-content",
            hidden: !i,
            ...n,
            children: e,
          });
        },
        M = ({ children: e, ...t }) => {
          let { alwaysOpen: r } = t,
            [n, i] = (0, l.useState)(t.isOpen),
            a = r ? { ...t, isOpen: n, setOpen: () => i(!n) } : t;
          return (0, o.jsx)(j.Provider, { value: a, children: e });
        },
        O = ({
          as: e = "h2",
          children: t,
          className: r,
          theme: n = {},
          ...i
        }) => {
          let { arrowIcon: a, flush: l, isOpen: u, setOpen: c } = R(),
            h = () => void 0 !== c && c(),
            d = N(el().theme.accordion.title, n);
          return (0, o.jsxs)("button", {
            className: s()(
              d.base,
              d.flush[l ? "on" : "off"],
              d.open[u ? "on" : "off"],
              r
            ),
            onClick: h,
            type: "button",
            ...i,
            children: [
              (0, o.jsx)(e, {
                className: d.heading,
                "data-testid": "flowbite-accordion-heading",
                children: t,
              }),
              a &&
                (0, o.jsx)(a, {
                  "aria-hidden": !0,
                  className: s()(d.arrow.base, d.arrow.open[u ? "on" : "off"]),
                  "data-testid": "flowbite-accordion-arrow",
                }),
            ],
          });
        },
        B = ({
          alwaysOpen: e = !1,
          arrowIcon: t = m,
          children: r,
          flush: n = !1,
          collapseAll: i = !1,
          className: a,
          theme: u = {},
          ...c
        }) => {
          let [h, d] = (0, l.useState)(i ? -1 : 0),
            f = (0, l.useMemo)(
              () =>
                l.Children.map(r, (r, i) =>
                  (0, l.cloneElement)(r, {
                    alwaysOpen: e,
                    arrowIcon: t,
                    flush: n,
                    isOpen: h === i,
                    setOpen: () => d(h === i ? -1 : i),
                  })
                ),
              [e, t, r, n, h]
            ),
            p = N(el().theme.accordion.root, u);
          return (0, o.jsx)("div", {
            className: s()(p.base, p.flush[n ? "on" : "off"], a),
            "data-testid": "flowbite-accordion",
            ...c,
            children: f,
          });
        };
      (B.displayName = "Accordion"),
        (M.displayName = "Accordion.Panel"),
        (O.displayName = "Accordion.Title"),
        (L.displayName = "Accordion.Content"),
        Object.assign(B, { Panel: M, Title: O, Content: L });
      let D = ({
        additionalContent: e,
        children: t,
        className: r,
        color: n = "info",
        icon: i,
        onDismiss: a,
        rounded: l = !0,
        theme: u = {},
        withBorderAccent: c,
        ...h
      }) => {
        let d = N(el().theme.alert, u);
        return (0, o.jsxs)("div", {
          className: s()(
            d.base,
            d.color[n],
            l && d.rounded,
            c && d.borderAccent,
            r
          ),
          role: "alert",
          ...h,
          children: [
            (0, o.jsxs)("div", {
              className: d.wrapper,
              "data-testid": "flowbite-alert-wrapper",
              children: [
                i &&
                  (0, o.jsx)(i, {
                    className: d.icon,
                    "data-testid": "flowbite-alert-icon",
                  }),
                (0, o.jsx)("div", { children: t }),
                "function" == typeof a &&
                  (0, o.jsx)("button", {
                    "aria-label": "Dismiss",
                    className: s()(d.closeButton.base, d.closeButton.color[n]),
                    onClick: a,
                    type: "button",
                    children: (0, o.jsx)(C, {
                      "aria-hidden": !0,
                      className: d.closeButton.icon,
                    }),
                  }),
              ],
            }),
            e && (0, o.jsx)("div", { children: e }),
          ],
        });
      };
      D.displayName = "Alert";
      let I = ({ children: e, className: t, theme: r = {}, ...n }) => {
        let i = N(el().theme.avatar.group, r);
        return (0, o.jsx)("div", {
          "data-testid": "avatar-group-element",
          className: s()(i.base, t),
          ...n,
          children: e,
        });
      };
      I.displayName = "Avatar.Group";
      let F = ({ className: e, href: t, theme: r = {}, total: n, ...i }) => {
        let a = N(el().theme.avatar.groupCounter, r);
        return (0, o.jsxs)("a", {
          href: t,
          className: s()(a.base, e),
          ...i,
          children: ["+", n],
        });
      };
      F.displayName = "Avatar.GroupCounter";
      let _ = ({
        alt: e = "",
        bordered: t = !1,
        children: r,
        className: n,
        color: i = "light",
        img: a,
        placeholderInitials: l = "",
        rounded: u = !1,
        size: c = "md",
        stacked: h = !1,
        status: d,
        statusPosition: f = "top-left",
        theme: p = {},
        ...g
      }) => {
        let m = N(el().theme.avatar, p),
          y = s()(
            t && m.root.bordered,
            t && m.root.color[i],
            u && m.root.rounded,
            h && m.root.stacked,
            m.root.img.on,
            m.root.size[c]
          ),
          b = {
            className: s()(y, m.root.img.on),
            "data-testid": "flowbite-avatar-img",
          };
        return (0, o.jsxs)("div", {
          className: s()(m.root.base, n),
          "data-testid": "flowbite-avatar",
          ...g,
          children: [
            (0, o.jsxs)("div", {
              className: "relative",
              children: [
                a
                  ? "string" == typeof a
                    ? (0, o.jsx)("img", { alt: e, src: a, ...b })
                    : a({ alt: e, ...b })
                  : l
                  ? (0, o.jsx)("div", {
                      className: s()(
                        m.root.img.off,
                        m.root.initials.base,
                        u && m.root.rounded,
                        h && m.root.stacked,
                        t && m.root.bordered,
                        t && m.root.color[i],
                        m.root.size[c]
                      ),
                      "data-testid": "flowbite-avatar-initials-placeholder",
                      children: (0, o.jsx)("span", {
                        className: s()(m.root.initials.text),
                        "data-testid":
                          "flowbite-avatar-initials-placeholder-text",
                        children: l,
                      }),
                    })
                  : (0, o.jsx)("div", {
                      className: s()(y, m.root.img.off),
                      "data-testid": "flowbite-avatar-img",
                      children: (0, o.jsx)("svg", {
                        className: m.root.img.placeholder,
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, o.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                          clipRule: "evenodd",
                        }),
                      }),
                    }),
                d &&
                  (0, o.jsx)("span", {
                    "data-testid": "flowbite-avatar-status",
                    className: s()(
                      m.root.status.base,
                      m.root.status[d],
                      m.root.statusPosition[f]
                    ),
                  }),
              ],
            }),
            r && (0, o.jsx)("div", { children: r }),
          ],
        });
      };
      (_.displayName = "Avatar"), Object.assign(_, { Group: I, Counter: F });
      let H = ({
        children: e,
        color: t = "info",
        href: r,
        icon: n,
        size: i = "xs",
        className: a,
        theme: l = {},
        ...u
      }) => {
        let c = N(el().theme.badge, l),
          h = () =>
            (0, o.jsxs)("span", {
              className: s()(
                c.root.base,
                c.root.color[t],
                c.icon[n ? "on" : "off"],
                c.root.size[i],
                a
              ),
              "data-testid": "flowbite-badge",
              ...u,
              children: [
                n &&
                  (0, o.jsx)(n, {
                    "aria-hidden": !0,
                    className: c.icon.size[i],
                    "data-testid": "flowbite-badge-icon",
                  }),
                e && (0, o.jsx)("span", { children: e }),
              ],
            });
        return r
          ? (0, o.jsx)("a", {
              className: c.root.href,
              href: r,
              children: (0, o.jsx)(h, {}),
            })
          : (0, o.jsx)(h, {});
      };
      H.displayName = "Badge";
      let U = (0, l.forwardRef)(
        (
          { children: e, className: t, href: r, icon: n, theme: i = {}, ...a },
          l
        ) => {
          let u = void 0 !== r,
            c = N(el().theme.breadcrumb.item, i);
          return (0, o.jsxs)("li", {
            className: s()(c.base, t),
            ...a,
            children: [
              (0, o.jsx)(T, {
                "aria-hidden": !0,
                className: c.chevron,
                "data-testid": "flowbite-breadcrumb-separator",
              }),
              (0, o.jsxs)(u ? "a" : "span", {
                ref: l,
                className: c.href[u ? "on" : "off"],
                "data-testid": "flowbite-breadcrumb-item",
                href: r,
                children: [
                  n && (0, o.jsx)(n, { "aria-hidden": !0, className: c.icon }),
                  e,
                ],
              }),
            ],
          });
        }
      );
      U.displayName = "Breadcrumb.Item";
      let V = ({ children: e, className: t, theme: r = {}, ...n }) => {
        let i = N(el().theme.breadcrumb.root, r);
        return (0, o.jsx)("nav", {
          "aria-label": "Breadcrumb",
          className: s()(i.base, t),
          ...n,
          children: (0, o.jsx)("ol", { className: i.list, children: e }),
        });
      };
      (V.displayName = "Breadcrumb"), Object.assign(V, { Item: U });
      let G = ({
        children: e,
        className: t,
        outline: r,
        pill: n,
        theme: i = {},
        ...a
      }) => {
        let u = (0, l.useMemo)(
            () =>
              l.Children.map(e, (t, i) =>
                (0, l.cloneElement)(t, {
                  outline: r,
                  pill: n,
                  positionInGroup:
                    0 === i ? "start" : i === e.length - 1 ? "end" : "middle",
                })
              ),
            [e, r, n]
          ),
          c = N(el().theme.buttonGroup, i);
        return (0, o.jsx)("div", {
          className: s()(c.base, t),
          role: "group",
          ...a,
          children: u,
        });
      };
      G.displayName = "Button.Group";
      let z = (0, l.forwardRef)(
        (
          {
            children: e,
            className: t,
            color: r = "info",
            disabled: n = !1,
            fullSized: i,
            isProcessing: a = !1,
            processingLabel: l = "Loading...",
            processingSpinner: u = (0, o.jsx)(rj, {}),
            gradientDuoTone: c,
            gradientMonochrome: h,
            href: d,
            label: f,
            outline: p = !1,
            pill: g = !1,
            positionInGroup: m = "none",
            size: y = "md",
            theme: b = {},
            ...v
          },
          x
        ) => {
          let { buttonGroup: w, button: C } = el().theme,
            k = N(C, b),
            E = void 0 !== d;
          return (0, o.jsx)(E ? "a" : "button", {
            disabled: n,
            href: d,
            type: E ? void 0 : "button",
            ref: x,
            className: s()(
              n && k.disabled,
              !c && !h && k.color[r],
              c && !h && k.gradientDuoTone[c],
              !c && h && k.gradient[h],
              w.position[m],
              p && (k.outline.color[r] ?? k.outline.color.default),
              k.base,
              k.pill[g ? "on" : "off"],
              i && k.fullSized,
              t
            ),
            ...v,
            children: (0, o.jsx)("span", {
              className: s()(
                k.inner.base,
                k.inner.position[m],
                k.outline[p ? "on" : "off"],
                k.outline.pill[p && g ? "on" : "off"],
                k.size[y],
                p && !k.outline.color[r] && k.inner.outline,
                a && k.isProcessing
              ),
              children: (0, o.jsxs)(o.Fragment, {
                children: [
                  a &&
                    (0, o.jsx)("span", {
                      className: k.spinnerSlot,
                      children: u,
                    }),
                  void 0 !== e
                    ? e
                    : (0, o.jsx)("span", {
                        "data-testid": "flowbite-button-label",
                        className: k.label,
                        children: a ? l : f,
                      }),
                ],
              }),
            }),
          });
        }
      );
      z.displayName = "Button";
      let q = Object.assign(z, { Group: G }),
        W = ({
          children: e,
          className: t,
          horizontal: r,
          href: n,
          imgAlt: i,
          imgSrc: a,
          theme: l = {},
          ...u
        }) => {
          let c = N(el().theme.card, l);
          return (0, o.jsxs)(void 0 === n ? "div" : "a", {
            "data-testid": "flowbite-card",
            href: n,
            className: s()(
              c.root.base,
              c.root.horizontal[r ? "on" : "off"],
              n && c.root.href,
              t
            ),
            ...u,
            children: [
              a &&
                (0, o.jsx)("img", {
                  alt: i ?? "",
                  src: a,
                  className: s()(
                    c.img.base,
                    c.img.horizontal[r ? "on" : "off"]
                  ),
                }),
              (0, o.jsx)("div", { className: c.root.children, children: e }),
            ],
          });
        };
      W.displayName = "Card";
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Z,
        $,
        K = function (e, t) {
          return (K =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        },
        X =
          ((Z = $ =
            {
              path: void 0,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(null == t && $.path);
              },
            }),
          $.exports,
          (function () {
            var e = {}.hasOwnProperty;
            function t() {
              for (var r = [], n = 0; n < arguments.length; n++) {
                var i = arguments[n];
                if (i) {
                  var o = typeof i;
                  if ("string" === o || "number" === o) r.push(i);
                  else if (Array.isArray(i) && i.length) {
                    var a = t.apply(null, i);
                    a && r.push(a);
                  } else if ("object" === o)
                    for (var s in i) e.call(i, s) && i[s] && r.push(s);
                }
              }
              return r.join(" ");
            }
            Z.exports
              ? ((t.default = t), (Z.exports = t))
              : (window.classNames = t);
          })(),
          $.exports);
      function Y(e, t, r) {
        function n() {
          var u = Date.now() - s;
          u < t && u >= 0
            ? (i = setTimeout(n, t - u))
            : ((i = null), r || ((l = e.apply(a, o)), (a = o = null)));
        }
        null == t && (t = 100);
        var i,
          o,
          a,
          s,
          l,
          u = function () {
            (a = this), (o = arguments), (s = Date.now());
            var u = r && !i;
            return (
              i || (i = setTimeout(n, t)),
              u && ((l = e.apply(a, o)), (a = o = null)),
              l
            );
          };
        return (
          (u.clear = function () {
            i && (clearTimeout(i), (i = null));
          }),
          (u.flush = function () {
            i &&
              ((l = e.apply(a, o)),
              (a = o = null),
              clearTimeout(i),
              (i = null));
          }),
          u
        );
      }
      (Y.debounce = Y),
        (function (e, t) {
          void 0 === t && (t = {});
          var r = t.insertAt;
          if (e && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
              i = document.createElement("style");
            (i.type = "text/css"),
              "top" === r && n.firstChild
                ? n.insertBefore(i, n.firstChild)
                : n.appendChild(i),
              i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
          }
        })(
          ".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n"
        );
      var Q,
        J =
          ((Q = "indiana-scroll-container"),
          function (e, t) {
            if (!e) return Q;
            "string" == typeof e ? (r = e) : (t = e);
            var r,
              n = Q;
            return (
              r && (n += "__" + r),
              n +
                (t
                  ? Object.keys(t).reduce(function (e, r) {
                      var i = t[r];
                      return (
                        i &&
                          (e +=
                            " " +
                            ("boolean" == typeof i
                              ? n + "--" + r
                              : n + "--" + r + "_" + i)),
                        e
                      );
                    }, "")
                  : "")
            );
          }),
        ee = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.onEndScroll = function () {
                (r.scrolling = !1), !r.pressed && r.started && r.processEnd();
              }),
              (r.onScroll = function (e) {
                var t = r.container.current;
                (t.scrollLeft === r.scrollLeft &&
                  t.scrollTop === r.scrollTop) ||
                  ((r.scrolling = !0), r.processScroll(e), r.onEndScroll());
              }),
              (r.onTouchStart = function (e) {
                var t = r.props.nativeMobileScroll;
                if (r.isDraggable(e.target)) {
                  if (((r.internal = !0), t && r.scrolling)) r.pressed = !0;
                  else {
                    var n = e.touches[0];
                    r.processClick(e, n.clientX, n.clientY),
                      !t && r.props.stopPropagation && e.stopPropagation();
                  }
                }
              }),
              (r.onTouchEnd = function (e) {
                var t = r.props.nativeMobileScroll;
                r.pressed &&
                  (!r.started || (r.scrolling && t)
                    ? (r.pressed = !1)
                    : r.processEnd(),
                  r.forceUpdate());
              }),
              (r.onTouchMove = function (e) {
                var t = r.props.nativeMobileScroll;
                if (r.pressed && (!t || !r.isMobile)) {
                  var n = e.touches[0];
                  n && r.processMove(e, n.clientX, n.clientY),
                    e.preventDefault(),
                    r.props.stopPropagation && e.stopPropagation();
                }
              }),
              (r.onMouseDown = function (e) {
                r.isDraggable(e.target) &&
                  r.isScrollable() &&
                  ((r.internal = !0),
                  -1 !== r.props.buttons.indexOf(e.button) &&
                    (r.processClick(e, e.clientX, e.clientY),
                    e.preventDefault(),
                    r.props.stopPropagation && e.stopPropagation()));
              }),
              (r.onMouseMove = function (e) {
                r.pressed &&
                  (r.processMove(e, e.clientX, e.clientY),
                  e.preventDefault(),
                  r.props.stopPropagation && e.stopPropagation());
              }),
              (r.onMouseUp = function (e) {
                r.pressed &&
                  (r.started
                    ? r.processEnd()
                    : ((r.internal = !1),
                      (r.pressed = !1),
                      r.forceUpdate(),
                      r.props.onClick && r.props.onClick(e)),
                  e.preventDefault(),
                  r.props.stopPropagation && e.stopPropagation());
              }),
              (r.container = l.createRef()),
              (r.onEndScroll = Y(r.onEndScroll, 300)),
              (r.scrolling = !1),
              (r.started = !1),
              (r.pressed = !1),
              (r.internal = !1),
              (r.getRef = r.getRef.bind(r)),
              r
            );
          }
          return (
            (function (e, t) {
              function r() {
                this.constructor = e;
              }
              K(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            })(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.nativeMobileScroll,
                t = this.container.current;
              window.addEventListener("mouseup", this.onMouseUp),
                window.addEventListener("mousemove", this.onMouseMove),
                window.addEventListener("touchmove", this.onTouchMove, {
                  passive: !1,
                }),
                window.addEventListener("touchend", this.onTouchEnd),
                t.addEventListener("touchstart", this.onTouchStart, {
                  passive: !1,
                }),
                t.addEventListener("mousedown", this.onMouseDown, {
                  passive: !1,
                }),
                e &&
                  ((this.isMobile = this.isMobileDevice()),
                  this.isMobile && this.forceUpdate());
            }),
            (t.prototype.componentWillUnmount = function () {
              window.removeEventListener("mouseup", this.onMouseUp),
                window.removeEventListener("mousemove", this.onMouseMove),
                window.removeEventListener("touchmove", this.onTouchMove),
                window.removeEventListener("touchend", this.onTouchEnd);
            }),
            (t.prototype.getElement = function () {
              return this.container.current;
            }),
            (t.prototype.isMobileDevice = function () {
              return (
                void 0 !== window.orientation ||
                -1 !== navigator.userAgent.indexOf("IEMobile")
              );
            }),
            (t.prototype.isDraggable = function (e) {
              var t = this.props.ignoreElements;
              if (t) {
                var r = e.closest(t);
                return null === r || r.contains(this.getElement());
              }
              return !0;
            }),
            (t.prototype.isScrollable = function () {
              var e = this.container.current;
              return (
                e &&
                (e.scrollWidth > e.clientWidth ||
                  e.scrollHeight > e.clientHeight)
              );
            }),
            (t.prototype.processClick = function (e, t, r) {
              var n = this.container.current;
              (this.scrollLeft = n.scrollLeft),
                (this.scrollTop = n.scrollTop),
                (this.clientX = t),
                (this.clientY = r),
                (this.pressed = !0);
            }),
            (t.prototype.processStart = function (e) {
              void 0 === e && (e = !0);
              var t = this.props.onStartScroll;
              (this.started = !0),
                e && document.body.classList.add("indiana-dragging"),
                t && t({ external: !this.internal }),
                this.forceUpdate();
            }),
            (t.prototype.processScroll = function (e) {
              if (this.started) {
                var t = this.props.onScroll;
                t && t({ external: !this.internal });
              } else this.processStart(!1);
            }),
            (t.prototype.processMove = function (e, t, r) {
              var n = this.props,
                i = n.horizontal,
                o = n.vertical,
                a = n.activationDistance,
                s = n.onScroll,
                l = this.container.current;
              this.started
                ? (i && (l.scrollLeft -= t - this.clientX),
                  o && (l.scrollTop -= r - this.clientY),
                  s && s({ external: !this.internal }),
                  (this.clientX = t),
                  (this.clientY = r),
                  (this.scrollLeft = l.scrollLeft),
                  (this.scrollTop = l.scrollTop))
                : ((i && Math.abs(t - this.clientX) > a) ||
                    (o && Math.abs(r - this.clientY) > a)) &&
                  ((this.clientX = t), (this.clientY = r), this.processStart());
            }),
            (t.prototype.processEnd = function () {
              var e = this.props.onEndScroll;
              this.container.current && e && e({ external: !this.internal }),
                (this.pressed = !1),
                (this.started = !1),
                (this.scrolling = !1),
                (this.internal = !1),
                document.body.classList.remove("indiana-dragging"),
                this.forceUpdate();
            }),
            (t.prototype.getRef = function (e) {
              [this.container, this.props.innerRef].forEach(function (t) {
                t && ("function" == typeof t ? t(e) : (t.current = e));
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                r = e.draggingClassName,
                n = e.className,
                i = e.style,
                o = e.hideScrollbars,
                a = e.component;
              return l.createElement(
                a,
                {
                  className: X(
                    n,
                    this.pressed && r,
                    J({
                      dragging: this.pressed,
                      "hide-scrollbars": o,
                      "native-scroll": this.isMobile,
                    })
                  ),
                  style: i,
                  ref: this.getRef,
                  onScroll: this.onScroll,
                },
                t
              );
            }),
            (t.defaultProps = {
              nativeMobileScroll: !0,
              hideScrollbars: !0,
              activationDistance: 10,
              vertical: !0,
              horizontal: !0,
              stopPropagation: !1,
              style: {},
              component: "div",
              buttons: [0],
            }),
            t
          );
        })(l.PureComponent);
      let et = () => "undefined" != typeof window,
        er = ({
          children: e,
          indicators: t = !0,
          leftControl: r,
          rightControl: n,
          slide: i = !0,
          slideInterval: a,
          className: u,
          theme: c = {},
          ...h
        }) => {
          let d = N(el().theme.carousel, c),
            f = et() && -1 !== navigator.userAgent.indexOf("IEMobile"),
            p = (0, l.useRef)(null),
            [g, m] = (0, l.useState)(0),
            [y, b] = (0, l.useState)(!1),
            v = (0, l.useMemo)(
              () =>
                l.Children.map(e, (e) =>
                  (0, l.cloneElement)(e, {
                    className: s()(d.item.base, e.props.className),
                  })
                ),
              [e, d.item.base]
            ),
            x = (0, l.useCallback)(
              (e) => () => {
                v &&
                  ((e = (e + v.length) % v.length),
                  p.current &&
                    (p.current.scrollLeft = p.current.clientWidth * e),
                  m(e));
              },
              [v]
            );
          (0, l.useEffect)(() => {
            p.current &&
              !y &&
              0 !== p.current.scrollLeft &&
              m(Math.round(p.current.scrollLeft / p.current.clientWidth));
          }, [y]),
            (0, l.useEffect)(() => {
              if (i) {
                let e = setInterval(() => !y && x(g + 1)(), a ?? 3e3);
                return () => clearInterval(e);
              }
            }, [g, y, x, i, a]);
          let w = (e) => () => b(e);
          return (0, o.jsxs)("div", {
            className: s()(d.root.base, u),
            "data-testid": "carousel",
            ...h,
            children: [
              (0, o.jsx)(ee, {
                className: s()(
                  d.scrollContainer.base,
                  (f || !y) && d.scrollContainer.snap
                ),
                draggingClassName: "cursor-grab",
                innerRef: p,
                onEndScroll: w(!1),
                onStartScroll: w(!0),
                vertical: !1,
                children: v?.map((e, t) =>
                  (0, o.jsx)(
                    "div",
                    {
                      className: d.item.wrapper,
                      "data-active": g === t,
                      "data-testid": "carousel-item",
                      children: e,
                    },
                    t
                  )
                ),
              }),
              t &&
                (0, o.jsx)("div", {
                  className: d.indicators.wrapper,
                  children: v?.map((e, t) =>
                    (0, o.jsx)(
                      "button",
                      {
                        className: s()(
                          d.indicators.base,
                          d.indicators.active[t === g ? "on" : "off"]
                        ),
                        onClick: x(t),
                        "data-testid": "carousel-indicator",
                        "aria-label": `Slide ${t + 1}`,
                      },
                      t
                    )
                  ),
                }),
              v &&
                (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", {
                      className: d.root.leftControl,
                      children: (0, o.jsx)("button", {
                        className: "group",
                        "data-testid": "carousel-left-control",
                        onClick: x(g - 1),
                        type: "button",
                        "aria-label": "Previous slide",
                        children: r || (0, o.jsx)(en, {}),
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className: d.root.rightControl,
                      children: (0, o.jsx)("button", {
                        className: "group",
                        "data-testid": "carousel-right-control",
                        onClick: x(g + 1),
                        type: "button",
                        "aria-label": "Next slide",
                        children: n || (0, o.jsx)(ei, {}),
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        en = () => {
          let e = el().theme.carousel;
          return (0, o.jsx)("span", {
            className: e.control.base,
            children: (0, o.jsx)(E, { className: e.control.icon }),
          });
        },
        ei = () => {
          let e = el().theme.carousel;
          return (0, o.jsx)("span", {
            className: e.control.base,
            children: (0, o.jsx)(T, { className: e.control.icon }),
          });
        };
      er.displayName = "Carousel";
      let eo = (0, l.forwardRef)(({ className: e, theme: t = {}, ...r }, n) => {
        let i = N(el().theme.checkbox, t);
        return (0, o.jsx)("input", {
          ref: n,
          type: "checkbox",
          className: s()(i.root.base, e),
          ...r,
        });
      });
      eo.displayName = "Checkbox";
      let ea = {
          accordion: {
            root: {
              base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
              flush: { off: "rounded-lg border", on: "border-b" },
            },
            content: {
              base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
            },
            title: {
              arrow: {
                base: "h-6 w-6 shrink-0",
                open: { off: "", on: "rotate-180" },
              },
              base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
              flush: {
                off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                on: "!bg-transparent dark:!bg-transparent",
              },
              heading: "",
              open: {
                off: "",
                on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white",
              },
            },
          },
          alert: {
            base: "flex flex-col gap-2 p-4 text-sm",
            borderAccent: "border-t-4",
            closeButton: {
              base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
              icon: "w-5 h-5",
              color: {
                info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
                failure:
                  "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                success:
                  "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                warning:
                  "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                green:
                  "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                yellow:
                  "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                blue: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
                lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
                dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
                indigo:
                  "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
                purple:
                  "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
                teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
                light:
                  "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
              },
            },
            color: {
              info: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
              gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
              failure:
                "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
              success:
                "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
              warning:
                "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
              red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
              green:
                "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
              yellow:
                "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
              blue: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
              cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
              pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
              lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
              dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
              indigo:
                "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
              purple:
                "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
              teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
              light:
                "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
            },
            icon: "mr-3 inline h-5 w-5 flex-shrink-0",
            rounded: "rounded-lg",
            wrapper: "flex items-center",
          },
          avatar: {
            root: {
              base: "flex justify-center items-center space-x-4",
              bordered: "p-1 ring-2",
              rounded: "!rounded-full",
              color: {
                dark: "ring-gray-800 dark:ring-gray-800",
                failure: "ring-red-500 dark:ring-red-700",
                gray: "ring-gray-500 dark:ring-gray-400",
                info: "ring-cyan-400 dark:ring-cyan-800",
                light: "ring-gray-300 dark:ring-gray-500",
                purple: "ring-purple-500 dark:ring-purple-600",
                success: "ring-green-500 dark:ring-green-500",
                warning: "ring-yellow-300 dark:ring-yellow-500",
                pink: "ring-pink-500 dark:ring-pink-500",
              },
              img: {
                off: "rounded relative overflow-hidden bg-gray-100 dark:bg-gray-600",
                on: "rounded",
                placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1",
              },
              size: {
                xs: "w-6 h-6",
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-20 h-20",
                xl: "w-36 h-36",
              },
              stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
              statusPosition: {
                "bottom-left": "-bottom-1 -left-1",
                "bottom-center": "-bottom-1 center",
                "bottom-right": "-bottom-1 -right-1",
                "top-left": "-top-1 -left-1",
                "top-center": "-top-1 center",
                "top-right": "-top-1 -right-1",
                "center-right": "center -right-1",
                center: "center center",
                "center-left": "center -left-1",
              },
              status: {
                away: "bg-yellow-400",
                base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
                busy: "bg-red-400",
                offline: "bg-gray-400",
                online: "bg-green-400",
              },
              initials: {
                text: "font-medium text-gray-600 dark:text-gray-300",
                base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600",
              },
            },
            group: { base: "flex -space-x-4" },
            groupCounter: {
              base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500",
            },
          },
          badge: {
            root: {
              base: "flex h-fit items-center gap-1 font-semibold",
              color: {
                info: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
                failure:
                  "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                success:
                  "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                warning:
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
                indigo:
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
                purple:
                  "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
                pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
                blue: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
                light:
                  "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
                green:
                  "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
                red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
                yellow:
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
              },
              href: "group",
              size: { xs: "p-1 text-xs", sm: "p-1.5 text-sm" },
            },
            icon: {
              off: "rounded px-2 py-0.5",
              on: "rounded-full p-1.5",
              size: { xs: "w-3 h-3", sm: "w-3.5 h-3.5" },
            },
          },
          breadcrumb: {
            root: { base: "", list: "flex items-center" },
            item: {
              base: "group flex items-center",
              chevron: "mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2",
              href: {
                off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
                on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
              },
              icon: "mr-2 h-4 w-4",
            },
          },
          button: {
            base: "group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10",
            fullSized: "w-full",
            color: {
              dark: "text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800",
              failure:
                "text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600",
              gray: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 disabled:hover:bg-white focus:ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800",
              info: "text-white bg-cyan-700 border border-transparent hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 dark:disabled:hover:bg-cyan-600",
              light:
                "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700",
              purple:
                "text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600",
              success:
                "text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600",
              warning:
                "text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400",
              blue: "text-cyan-900 bg-white border border-cyan-300 hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-white dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:hover:bg-cyan-700 dark:hover:border-cyan-700 dark:focus:ring-cyan-700",
              cyan: "text-cyan-900 bg-white border border-cyan-300 hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-white dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:hover:bg-cyan-700 dark:hover:border-cyan-700 dark:focus:ring-cyan-700",
              green:
                "text-green-900 bg-white border border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-green-300 disabled:hover:bg-white dark:bg-green-600 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-700 dark:focus:ring-green-700",
              indigo:
                "text-indigo-900 bg-white border border-indigo-300 hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 disabled:hover:bg-white dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:hover:bg-indigo-700 dark:hover:border-indigo-700 dark:focus:ring-indigo-700",
              lime: "text-lime-900 bg-white border border-lime-300 hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 disabled:hover:bg-white dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:hover:bg-lime-700 dark:hover:border-lime-700 dark:focus:ring-lime-700",
              pink: "text-pink-900 bg-white border border-pink-300 hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 disabled:hover:bg-white dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:hover:bg-pink-700 dark:hover:border-pink-700 dark:focus:ring-pink-700",
              red: "text-red-900 bg-white border border-red-300 hover:bg-red-100 focus:ring-4 focus:ring-red-300 disabled:hover:bg-white dark:bg-red-600 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:focus:ring-red-700",
              teal: "text-teal-900 bg-white border border-teal-300 hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 disabled:hover:bg-white dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:hover:bg-teal-700 dark:hover:border-teal-700 dark:focus:ring-teal-700",
              yellow:
                "text-yellow-900 bg-white border border-yellow-300 hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-white dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:hover:bg-yellow-700 dark:hover:border-yellow-700 dark:focus:ring-yellow-700",
            },
            disabled: "cursor-not-allowed opacity-50",
            isProcessing: "!cursor-wait",
            spinnerSlot: "mr-3",
            gradient: {
              cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              failure:
                "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
              info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
              lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
              pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
              purple:
                "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
              success:
                "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
              teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
            },
            gradientDuoTone: {
              cyanToBlue:
                "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              greenToBlue:
                "text-white bg-gradient-to-br from-green-400 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
              pinkToOrange:
                "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
              purpleToBlue:
                "text-white bg-gradient-to-br from-purple-600 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              purpleToPink:
                "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
              redToYellow:
                "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
              tealToLime:
                "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
            },
            inner: {
              base: "flex items-center",
              position: {
                none: "",
                start: "rounded-r-none",
                middle: "!rounded-none",
                end: "rounded-l-none",
              },
              outline: "border border-transparent",
            },
            label:
              "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
            outline: {
              color: {
                gray: "border border-gray-900 dark:border-white",
                default: "border-0",
                light: "",
              },
              off: "",
              on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
              pill: { off: "rounded-md", on: "rounded-full" },
            },
            pill: { off: "rounded-lg", on: "rounded-full" },
            size: {
              xs: "text-xs px-2 py-1",
              sm: "text-sm px-3 py-1.5",
              md: "text-sm px-4 py-2",
              lg: "text-base px-5 py-2.5",
              xl: "text-base px-6 py-3",
            },
          },
          buttonGroup: {
            base: "inline-flex",
            position: {
              none: "focus:!ring-2",
              start: "rounded-r-none",
              middle: "!rounded-none border-l-0 pl-0",
              end: "rounded-l-none border-l-0 pl-0",
            },
          },
          card: {
            root: {
              base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
              children: "flex h-full flex-col justify-center gap-4 p-6",
              horizontal: {
                off: "flex-col",
                on: "flex-col md:max-w-xl md:flex-row",
              },
              href: "hover:bg-gray-100 dark:hover:bg-gray-700",
            },
            img: {
              base: "",
              horizontal: {
                off: "rounded-t-lg",
                on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
              },
            },
          },
          carousel: {
            root: {
              base: "relative h-full w-full",
              leftControl:
                "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
              rightControl:
                "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
            },
            indicators: {
              active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-white dark:bg-gray-800",
              },
              base: "h-3 w-3 rounded-full",
              wrapper:
                "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
            },
            item: {
              base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
              wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
            },
            control: {
              base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
              icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
            },
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
              snap: "snap-x",
            },
          },
          checkbox: {
            root: {
              base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
            },
          },
          darkThemeToggle: {
            root: {
              base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
              icon: "h-5 w-5",
            },
          },
          dropdown: {
            arrowIcon: "ml-2 h-4 w-4",
            content: "py-1",
            floating: {
              animation: "transition-opacity",
              arrow: {
                base: "absolute z-10 h-2 w-2 rotate-45",
                style: {
                  dark: "bg-gray-900 dark:bg-gray-700",
                  light: "bg-white",
                  auto: "bg-white dark:bg-gray-700",
                },
                placement: "-4px",
              },
              base: "z-10 w-fit rounded divide-y divide-gray-100 shadow",
              content: "py-1 text-sm text-gray-700 dark:text-gray-200",
              divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
              header:
                "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
              hidden: "invisible opacity-0",
              item: {
                base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                icon: "mr-2 h-4 w-4",
              },
              style: {
                dark: "bg-gray-900 text-white dark:bg-gray-700",
                light: "border border-gray-200 bg-white text-gray-900",
                auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
              },
              target: "w-fit",
            },
            inlineWrapper: "flex items-center",
          },
          fileInput: {
            root: { base: "flex" },
            field: {
              base: "relative w-full",
              input: {
                base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-md" },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
              },
            },
          },
          footer: {
            root: {
              base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
              container: "w-full p-6",
              bgDark: "bg-gray-800",
            },
            groupLink: {
              base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
              link: { base: "last:mr-0 md:mr-6", href: "hover:underline" },
              col: "flex-col space-y-4",
            },
            icon: {
              base: "text-gray-500 dark:hover:text-white",
              size: "h-5 w-5",
            },
            title: {
              base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
            },
            divider: {
              base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
            },
            copyright: {
              base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
              href: "ml-1 hover:underline",
              span: "ml-1",
            },
            brand: {
              base: "mb-4 flex items-center sm:mb-0",
              img: "mr-3 h-8",
              span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
            },
          },
          helperText: {
            root: {
              base: "mt-2 text-sm",
              colors: {
                gray: "text-gray-500 dark:text-gray-400",
                info: "text-cyan-700 dark:text-cyan-800",
                success: "text-green-600 dark:text-green-500",
                failure: "text-red-600 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
              },
            },
          },
          label: {
            root: {
              base: "text-sm font-medium",
              disabled: "opacity-50",
              colors: {
                default: "text-gray-900 dark:text-gray-300",
                info: "text-cyan-500 dark:text-cyan-600",
                failure: "text-red-700 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
                success: "text-green-700 dark:text-green-500",
              },
            },
          },
          listGroup: {
            root: {
              base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left",
            },
            item: {
              base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
              link: {
                base: "flex w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
                active: {
                  off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
                  on: "bg-cyan-700 text-white dark:bg-gray-800",
                },
                href: { off: "", on: "" },
                icon: "mr-2 h-4 w-4 fill-current",
              },
            },
          },
          modal: {
            root: {
              base: "fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
              show: {
                on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
                off: "hidden",
              },
              sizes: {
                sm: "max-w-sm",
                md: "max-w-md",
                lg: "max-w-lg",
                xl: "max-w-xl",
                "2xl": "max-w-2xl",
                "3xl": "max-w-3xl",
                "4xl": "max-w-4xl",
                "5xl": "max-w-5xl",
                "6xl": "max-w-6xl",
                "7xl": "max-w-7xl",
              },
              positions: {
                "top-left": "items-start justify-start",
                "top-center": "items-start justify-center",
                "top-right": "items-start justify-end",
                "center-left": "items-center justify-start",
                center: "items-center justify-center",
                "center-right": "items-center justify-end",
                "bottom-right": "items-end justify-end",
                "bottom-center": "items-end justify-center",
                "bottom-left": "items-end justify-start",
              },
            },
            content: {
              base: "relative h-full w-full p-4 md:h-auto",
              inner:
                "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]",
            },
            body: { base: "p-6 flex-1 overflow-auto", popup: "pt-0" },
            header: {
              base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
              popup: "!p-2 !border-b-0",
              title: "text-xl font-medium text-gray-900 dark:text-white",
              close: {
                base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                icon: "h-5 w-5",
              },
            },
            footer: {
              base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
              popup: "border-t",
            },
          },
          navbar: {
            root: {
              base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
              rounded: { on: "rounded", off: "" },
              bordered: { on: "border", off: "" },
              inner: {
                base: "mx-auto flex flex-wrap items-center justify-between",
                fluid: { on: "", off: "container" },
              },
            },
            brand: { base: "flex items-center" },
            collapse: {
              base: "w-full md:block md:w-auto",
              list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
              hidden: { on: "hidden", off: "" },
            },
            link: {
              base: "block py-2 pr-4 pl-3 md:p-0",
              active: {
                on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
              disabled: {
                on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                off: "",
              },
            },
            toggle: {
              base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
              icon: "h-6 w-6 shrink-0",
            },
          },
          pagination: {
            base: "",
            layout: {
              table: {
                base: "text-sm text-gray-700 dark:text-gray-400",
                span: "font-semibold text-gray-900 dark:text-white",
              },
            },
            pages: {
              base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
              showIcon: "inline-flex",
              previous: {
                base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                icon: "h-5 w-5",
              },
              next: {
                base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                icon: "h-5 w-5",
              },
              selector: {
                base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                active:
                  "!bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:!bg-gray-700 dark:text-white",
                disabled: "opacity-50 cursor-normal",
              },
            },
          },
          progress: {
            base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
            label: "mb-1 flex justify-between font-medium dark:text-white",
            bar: "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2",
            color: {
              dark: "bg-gray-600 dark:bg-gray-300",
              blue: "bg-cyan-600",
              red: "bg-red-600 dark:bg-red-500",
              green: "bg-green-600 dark:bg-green-500",
              yellow: "bg-yellow-400",
              indigo: "bg-indigo-600 dark:bg-indigo-500",
              purple: "bg-purple-600 dark:bg-purple-500",
            },
            size: { sm: "h-1.5", md: "h-2.5", lg: "h-4", xl: "h-6" },
          },
          radio: {
            root: {
              base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600",
            },
          },
          rangeSlider: {
            root: { base: "flex" },
            field: {
              base: "relative w-full",
              input: {
                base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
                sizes: { sm: "h-1 range-sm", md: "h-2", lg: "h-3 range-lg" },
              },
            },
          },
          rating: {
            root: { base: "flex items-center" },
            advanced: {
              base: "flex items-center",
              label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
              progress: {
                base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
                fill: "h-5 rounded bg-yellow-400",
                label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
              },
            },
            star: {
              empty: "text-gray-300 dark:text-gray-500",
              filled: "text-yellow-400",
              sizes: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-10 h-10" },
            },
          },
          select: {
            base: "flex",
            addon:
              "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
            field: {
              base: "relative w-full",
              icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              select: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                withIcon: { on: "pl-10", off: "" },
                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
                sizes: {
                  sm: "p-2 sm:text-xs",
                  md: "p-2.5 text-sm",
                  lg: "sm:text-md p-4",
                },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
              },
            },
          },
          textInput: {
            base: "flex",
            addon:
              "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
            field: {
              base: "relative w-full",
              icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              rightIcon: {
                base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: {
                  sm: "p-2 sm:text-xs",
                  md: "p-2.5 text-sm",
                  lg: "sm:text-md p-4",
                },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
                withRightIcon: { on: "pr-10", off: "" },
                withIcon: { on: "pl-10", off: "" },
                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
              },
            },
          },
          textarea: {
            base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
            colors: {
              gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              failure:
                "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
              warning:
                "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
              success:
                "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            },
            withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
          },
          toggleSwitch: {
            root: {
              base: "group relative flex items-center rounded-lg focus:outline-none",
              active: {
                on: "cursor-pointer",
                off: "cursor-not-allowed opacity-50",
              },
              label:
                "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
            },
            toggle: {
              base: "toggle-bg h-6 w-11 rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
              checked: {
                on: "after:translate-x-full after:border-white",
                off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
                color: {
                  blue: " bg-cyan-700 border-cyan-700",
                  dark: "bg-dark-700 border-dark-900",
                  failure: "bg-red-700 border-red-900",
                  gray: "bg-gray-500 border-gray-600",
                  green: "bg-green-600 border-green-700",
                  light: "bg-light-700 border-light-900",
                  red: "bg-red-700 border-red-900",
                  purple: "bg-purple-700 border-purple-900",
                  success: "bg-green-500 border-green-500",
                  yellow: "bg-yellow-400 border-yellow-400",
                  warning: "bg-yellow-600 border-yellow-600",
                  cyan: "bg-cyan-500 border-cyan-500",
                  lime: "bg-lime-400 border-lime-400",
                  indigo: "bg-indigo-400 border-indigo-400",
                  teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
                  info: "bg-cyan-600 border-cyan-600",
                  pink: "bg-pink-600 border-pink-600",
                },
              },
            },
          },
          sidebar: {
            root: {
              base: "h-full",
              collapsed: { on: "w-16", off: "w-64" },
              inner:
                "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800",
            },
            collapse: {
              button:
                "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              icon: {
                base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                open: { off: "", on: "text-gray-900" },
              },
              label: {
                base: "ml-3 flex-1 whitespace-nowrap text-left",
                icon: "h-6 w-6",
              },
              list: "space-y-2 py-2",
            },
            cta: {
              base: "mt-6 rounded-lg p-4",
              color: {
                blue: "bg-cyan-50 dark:bg-cyan-900",
                dark: "bg-dark-50 dark:bg-dark-900",
                failure: "bg-red-50 dark:bg-red-900",
                gray: "bg-alternative-50 dark:bg-alternative-900",
                green: "bg-green-50 dark:bg-green-900",
                light: "bg-light-50 dark:bg-light-900",
                red: "bg-red-50 dark:bg-red-900",
                purple: "bg-purple-50 dark:bg-purple-900",
                success: "bg-green-50 dark:bg-green-900",
                yellow: "bg-yellow-50 dark:bg-yellow-900",
                warning: "bg-yellow-50 dark:bg-yellow-900",
              },
            },
            item: {
              base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              active: "bg-gray-100 dark:bg-gray-700",
              collapsed: {
                insideCollapse: "group w-full pl-8 transition duration-75",
                noIcon: "font-bold",
              },
              content: { base: "px-3 flex-1 whitespace-nowrap" },
              icon: {
                base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                active: "text-gray-700 dark:text-gray-100",
              },
              label: "",
            },
            items: "",
            itemGroup:
              "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
            logo: {
              base: "mb-5 flex items-center pl-2.5",
              collapsed: {
                on: "hidden",
                off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
              },
              img: "mr-3 h-6 sm:h-7",
            },
          },
          spinner: {
            base: "inline animate-spin text-gray-200",
            color: {
              failure: "fill-red-600",
              gray: "fill-gray-600",
              info: "fill-cyan-600",
              pink: "fill-pink-600",
              purple: "fill-purple-600",
              success: "fill-green-500",
              warning: "fill-yellow-400",
            },
            light: {
              off: {
                base: "dark:text-gray-600",
                color: {
                  failure: "",
                  gray: "dark:fill-gray-300",
                  info: "",
                  pink: "",
                  purple: "",
                  success: "",
                  warning: "",
                },
              },
              on: {
                base: "",
                color: {
                  failure: "",
                  gray: "",
                  info: "",
                  pink: "",
                  purple: "",
                  success: "",
                  warning: "",
                },
              },
            },
            size: {
              xs: "w-3 h-3",
              sm: "w-4 h-4",
              md: "w-6 h-6",
              lg: "w-8 h-8",
              xl: "w-10 h-10",
            },
          },
          tab: {
            base: "flex flex-col gap-2",
            tablist: {
              base: "flex text-center",
              styles: {
                default:
                  "flex-wrap border-b border-gray-200 dark:border-gray-700",
                underline:
                  "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
                pills:
                  "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
                fullWidth:
                  "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-cols-4 dark:divide-gray-700 dark:text-gray-400 rounded-none",
              },
              tabitem: {
                base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                styles: {
                  default: {
                    base: "rounded-t-lg",
                    active: {
                      on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                      off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
                    },
                  },
                  underline: {
                    base: "rounded-t-lg",
                    active: {
                      on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
                      off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
                    },
                  },
                  pills: {
                    base: "",
                    active: {
                      on: "rounded-lg bg-cyan-600 text-white",
                      off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
                    },
                  },
                  fullWidth: {
                    base: "ml-2 first:ml-0 w-full rounded-none inline-block",
                    active: {
                      on: "p-4 text-gray-900 bg-gray-100 focus:ring-4 focus:ring-cyan-300 active focus:outline-none dark:bg-gray-700 dark:text-white !rounded-none",
                      off: "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 !rounded-none",
                    },
                  },
                },
                icon: "mr-2 h-5 w-5",
              },
            },
            tabpanel: "py-3",
          },
          table: {
            root: {
              base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
              shadow:
                "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
              wrapper: "relative",
            },
            body: {
              base: "group/body",
              cell: {
                base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4",
              },
            },
            head: {
              base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
              cell: {
                base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3",
              },
            },
            row: {
              base: "group/row",
              hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
              striped:
                "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
            },
          },
          timeline: {
            root: {
              direction: {
                horizontal: "items-base sm:flex",
                vertical:
                  "relative border-l border-gray-200 dark:border-gray-700",
              },
            },
            item: {
              root: {
                horizontal: "relative mb-6 sm:mb-0",
                vertical: "mb-10 ml-6",
              },
              content: {
                root: { base: "mt-3 sm:pr-8" },
                body: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
                time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                title: "text-lg font-semibold text-gray-900 dark:text-white",
              },
              point: {
                horizontal: "flex items-center",
                line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
                marker: {
                  base: {
                    horizontal:
                      "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                    vertical:
                      "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                  },
                  icon: {
                    base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
                    wrapper:
                      "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900",
                  },
                },
                vertical: "",
              },
            },
          },
          toast: {
            root: {
              base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
              closed: "opacity-0 ease-out",
              removed: "hidden",
            },
            toggle: {
              base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
              icon: "h-5 w-5 shrink-0",
            },
          },
          tooltip: {
            target: "w-fit",
            animation: "transition-opacity",
            arrow: {
              base: "absolute z-10 h-2 w-2 rotate-45",
              style: {
                dark: "bg-gray-900 dark:bg-gray-700",
                light: "bg-white",
                auto: "bg-white dark:bg-gray-700",
              },
              placement: "-4px",
            },
            base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
            hidden: "invisible opacity-0",
            style: {
              dark: "bg-gray-900 text-white dark:bg-gray-700",
              light: "border border-gray-200 bg-white text-gray-900",
              auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
            },
            content: "relative z-20",
          },
        },
        es = (0, l.createContext)({ theme: ea }),
        el = () => (0, l.useContext)(es),
        eu = () =>
          et() && window.matchMedia?.("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        ec = () => {
          let e = () => {
              let e = "dark" === i ? "light" : "dark";
              t(e), o(e);
            },
            t = (0, l.useCallback)((e) => {
              et() &&
                ("dark" === e
                  ? document.documentElement.classList.add("dark")
                  : document.documentElement.classList.remove("dark"));
            }, []),
            { mode: r, toggleMode: n = e } = (0, l.useContext)(es),
            [i, o] = (0, l.useState)("light");
          return (
            (0, l.useEffect)(() => {
              r ? (t(r), o(r)) : o(eu());
            }, [r, t, o]),
            [i, o, n]
          );
        },
        eh = ({ className: e, theme: t = {}, ...r }) => {
          let n = N(el().theme.darkThemeToggle, t),
            { mode: i, toggleMode: a } = (0, l.useContext)(es);
          return (0, o.jsx)("button", {
            "aria-label": "Toggle dark mode",
            "data-testid": "dark-theme-toggle",
            onClick: a,
            type: "button",
            className: s()(n.root.base, e),
            ...r,
            children:
              "dark" === i
                ? (0, o.jsx)(w, {
                    "aria-label": "Currently dark mode",
                    className: n.root.icon,
                  })
                : (0, o.jsx)(v, {
                    "aria-label": "Currently light mode",
                    className: n.root.icon,
                  }),
          });
        };
      function ed(e) {
        return e.split("-")[1];
      }
      function ef(e) {
        return "y" === e ? "height" : "width";
      }
      function ep(e) {
        return e.split("-")[0];
      }
      function eg(e) {
        return ["top", "bottom"].includes(ep(e)) ? "x" : "y";
      }
      function em(e, t, r) {
        let n,
          { reference: i, floating: o } = e,
          a = i.x + i.width / 2 - o.width / 2,
          s = i.y + i.height / 2 - o.height / 2,
          l = eg(t),
          u = ef(l),
          c = i[u] / 2 - o[u] / 2,
          h = "x" === l;
        switch (ep(t)) {
          case "top":
            n = { x: a, y: i.y - o.height };
            break;
          case "bottom":
            n = { x: a, y: i.y + i.height };
            break;
          case "right":
            n = { x: i.x + i.width, y: s };
            break;
          case "left":
            n = { x: i.x - o.width, y: s };
            break;
          default:
            n = { x: i.x, y: i.y };
        }
        switch (ed(t)) {
          case "start":
            n[l] -= c * (r && h ? -1 : 1);
            break;
          case "end":
            n[l] += c * (r && h ? -1 : 1);
        }
        return n;
      }
      eh.displayName = "DarkThemeToggle";
      let ey = async (e, t, r) => {
        let {
            placement: n = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: a,
          } = r,
          s = o.filter(Boolean),
          l = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          u = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: c, y: h } = em(u, n, l),
          d = n,
          f = {},
          p = 0;
        for (let r = 0; r < s.length; r++) {
          let { name: o, fn: g } = s[r],
            {
              x: m,
              y: y,
              data: b,
              reset: v,
            } = await g({
              x: c,
              y: h,
              initialPlacement: n,
              placement: d,
              strategy: i,
              middlewareData: f,
              rects: u,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (c = null != m ? m : c),
            (h = null != y ? y : h),
            (f = { ...f, [o]: { ...f[o], ...b } }),
            v &&
              p <= 50 &&
              (p++,
              "object" == typeof v &&
                (v.placement && (d = v.placement),
                v.rects &&
                  (u =
                    !0 === v.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : v.rects),
                ({ x: c, y: h } = em(u, d, l))),
              (r = -1));
        }
        return { x: c, y: h, placement: d, strategy: i, middlewareData: f };
      };
      function eb(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function ev(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function ex(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      async function ew(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: i, platform: o, rects: a, elements: s, strategy: l } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: h = "floating",
            altBoundary: d = !1,
            padding: f = 0,
          } = eb(t, e),
          p = ev(f),
          g = s[d ? ("floating" === h ? "reference" : "floating") : h],
          m = ex(
            await o.getClippingRect({
              element:
                null ==
                  (r = await (null == o.isElement ? void 0 : o.isElement(g))) ||
                r
                  ? g
                  : g.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(s.floating))),
              boundary: u,
              rootBoundary: c,
              strategy: l,
            })
          ),
          y = "floating" === h ? { ...a.floating, x: n, y: i } : a.reference,
          b = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(s.floating)),
          v = ((await (null == o.isElement ? void 0 : o.isElement(b))) &&
            (await (null == o.getScale ? void 0 : o.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          x = ex(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: y,
                  offsetParent: b,
                  strategy: l,
                })
              : y
          );
        return {
          top: (m.top - x.top + p.top) / v.y,
          bottom: (x.bottom - m.bottom + p.bottom) / v.y,
          left: (m.left - x.left + p.left) / v.x,
          right: (x.right - m.right + p.right) / v.x,
        };
      }
      let eC = Math.min,
        ek = Math.max,
        eE = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: r,
                y: n,
                placement: i,
                rects: o,
                platform: a,
                elements: s,
              } = t,
              { element: l, padding: u = 0 } = eb(e, t) || {};
            if (null == l) return {};
            let c = ev(u),
              h = { x: r, y: n },
              d = eg(i),
              f = ef(d),
              p = await a.getDimensions(l),
              g = "y" === d,
              m = g ? "clientHeight" : "clientWidth",
              y = o.reference[f] + o.reference[d] - h[d] - o.floating[f],
              b = h[d] - o.reference[d],
              v = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(l)),
              x = v ? v[m] : 0;
            (x && (await (null == a.isElement ? void 0 : a.isElement(v)))) ||
              (x = s.floating[m] || o.floating[f]);
            let w = x / 2 - p[f] / 2 - 1,
              C = eC(c[g ? "top" : "left"], w),
              k = eC(c[g ? "bottom" : "right"], w),
              E = x - p[f] - k,
              T = x / 2 - p[f] / 2 + (y / 2 - b / 2),
              S = ek(C, eC(T, E)),
              P =
                null != ed(i) &&
                T != S &&
                o.reference[f] / 2 - (T < C ? C : k) - p[f] / 2 < 0
                  ? T < C
                    ? C - T
                    : E - T
                  : 0;
            return { [d]: h[d] - P, data: { [d]: S, centerOffset: T - S + P } };
          },
        }),
        eT = ["top", "right", "bottom", "left"].reduce(
          (e, t) => e.concat(t, t + "-start", t + "-end"),
          []
        ),
        eS = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function eP(e) {
        return e.replace(/left|right|bottom|top/g, (e) => eS[e]);
      }
      function eA(e, t, r) {
        void 0 === r && (r = !1);
        let n = ed(e),
          i = eg(e),
          o = ef(i),
          a =
            "x" === i
              ? n === (r ? "end" : "start")
                ? "right"
                : "left"
              : "start" === n
              ? "bottom"
              : "top";
        return (
          t.reference[o] > t.floating[o] && (a = eP(a)),
          { main: a, cross: eP(a) }
        );
      }
      let eN = { start: "end", end: "start" };
      function ej(e) {
        return e.replace(/start|end/g, (e) => eN[e]);
      }
      function eR(e) {
        var t;
        return (
          (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function eL(e) {
        return eR(e).getComputedStyle(e);
      }
      function eM(e) {
        return e instanceof eR(e).Node;
      }
      function eO(e) {
        return eM(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function eB(e) {
        return e instanceof eR(e).HTMLElement;
      }
      function eD(e) {
        return e instanceof eR(e).Element;
      }
      function eI(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof eR(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function eF(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: i } = eL(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !["inline", "contents"].includes(i)
        );
      }
      function e_(e) {
        let t = eH(),
          r = eL(e);
        return (
          "none" !== r.transform ||
          "none" !== r.perspective ||
          (!!r.containerType && "normal" !== r.containerType) ||
          (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!t && !!r.filter && "none" !== r.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (r.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (r.contain || "").includes(e)
          )
        );
      }
      function eH() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function eU(e) {
        return ["html", "body", "#document"].includes(eO(e));
      }
      let eV = Math.min,
        eG = Math.max,
        ez = Math.round,
        eq = Math.floor,
        eW = (e) => ({ x: e, y: e });
      function eZ(e) {
        let t = eL(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          i = eB(e),
          o = i ? e.offsetWidth : r,
          a = i ? e.offsetHeight : n,
          s = ez(r) !== o || ez(n) !== a;
        return s && ((r = o), (n = a)), { width: r, height: n, $: s };
      }
      function e$(e) {
        return eD(e) ? e : e.contextElement;
      }
      function eK(e) {
        let t = e$(e);
        if (!eB(t)) return eW(1);
        let r = t.getBoundingClientRect(),
          { width: n, height: i, $: o } = eZ(t),
          a = (o ? ez(r.width) : r.width) / n,
          s = (o ? ez(r.height) : r.height) / i;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: a, y: s }
        );
      }
      let eX = eW(0);
      function eY(e, t, r) {
        var n, i;
        if ((void 0 === t && (t = !0), !eH())) return eX;
        let o = e ? eR(e) : window;
        return !r || (t && r !== o)
          ? eX
          : {
              x: (null == (n = o.visualViewport) ? void 0 : n.offsetLeft) || 0,
              y: (null == (i = o.visualViewport) ? void 0 : i.offsetTop) || 0,
            };
      }
      function eQ(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let i = e.getBoundingClientRect(),
          o = e$(e),
          a = eW(1);
        t && (n ? eD(n) && (a = eK(n)) : (a = eK(e)));
        let s = eY(o, r, n),
          l = (i.left + s.x) / a.x,
          u = (i.top + s.y) / a.y,
          c = i.width / a.x,
          h = i.height / a.y;
        if (o) {
          let e = eR(o),
            t = n && eD(n) ? eR(n) : n,
            r = e.frameElement;
          for (; r && n && t !== e; ) {
            let e = eK(r),
              t = r.getBoundingClientRect(),
              n = getComputedStyle(r),
              i = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              o = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
            (l *= e.x),
              (u *= e.y),
              (c *= e.x),
              (h *= e.y),
              (l += i),
              (u += o),
              (r = eR(r).frameElement);
          }
        }
        return ex({ width: c, height: h, x: l, y: u });
      }
      function eJ(e) {
        return ((eM(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function e0(e) {
        return eD(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function e1(e) {
        return eQ(eJ(e)).left + e0(e).scrollLeft;
      }
      function e2(e) {
        if ("html" === eO(e)) return e;
        let t = e.assignedSlot || e.parentNode || (eI(e) && e.host) || eJ(e);
        return eI(t) ? t.host : t;
      }
      function e3(e, t) {
        var r;
        void 0 === t && (t = []);
        let n = (function e(t) {
            let r = e2(t);
            return eU(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eB(r) && eF(r)
              ? r
              : e(r);
          })(e),
          i = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          o = eR(n);
        return i
          ? t.concat(o, o.visualViewport || [], eF(n) ? n : [])
          : t.concat(n, e3(n));
      }
      function e5(e, t, r) {
        let n;
        if ("viewport" === t)
          n = (function (e, t) {
            let r = eR(e),
              n = eJ(e),
              i = r.visualViewport,
              o = n.clientWidth,
              a = n.clientHeight,
              s = 0,
              l = 0;
            if (i) {
              (o = i.width), (a = i.height);
              let e = eH();
              (!e || (e && "fixed" === t)) &&
                ((s = i.offsetLeft), (l = i.offsetTop));
            }
            return { width: o, height: a, x: s, y: l };
          })(e, r);
        else if ("document" === t)
          n = (function (e) {
            let t = eJ(e),
              r = e0(e),
              n = e.ownerDocument.body,
              i = eG(
                t.scrollWidth,
                t.clientWidth,
                n.scrollWidth,
                n.clientWidth
              ),
              o = eG(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              a = -r.scrollLeft + e1(e),
              s = -r.scrollTop;
            return (
              "rtl" === eL(n).direction &&
                (a += eG(t.clientWidth, n.clientWidth) - i),
              { width: i, height: o, x: a, y: s }
            );
          })(eJ(e));
        else if (eD(t))
          n = (function (e, t) {
            let r = eQ(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              i = r.left + e.clientLeft,
              o = eB(e) ? eK(e) : eW(1);
            return {
              width: e.clientWidth * o.x,
              height: e.clientHeight * o.y,
              x: i * o.x,
              y: n * o.y,
            };
          })(t, r);
        else {
          let r = eY(e);
          n = { ...t, x: t.x - r.x, y: t.y - r.y };
        }
        return ex(n);
      }
      function e8(e, t) {
        return eB(e) && "fixed" !== eL(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function e4(e, t) {
        let r = eR(e);
        if (!eB(e)) return r;
        let n = e8(e, t);
        for (
          ;
          n &&
          ["table", "td", "th"].includes(eO(n)) &&
          "static" === eL(n).position;

        )
          n = e8(n, t);
        return n &&
          ("html" === eO(n) ||
            ("body" === eO(n) && "static" === eL(n).position && !e_(n)))
          ? r
          : n ||
              (function (e) {
                let t = e2(e);
                for (; eB(t) && !eU(t); ) {
                  if (e_(t)) return t;
                  t = e2(t);
                }
                return null;
              })(e) ||
              r;
      }
      let e6 = {
          getClippingRect: function (e) {
            let { element: t, boundary: r, rootBoundary: n, strategy: i } = e,
              o =
                "clippingAncestors" === r
                  ? (function (e, t) {
                      let r = t.get(e);
                      if (r) return r;
                      let n = e3(e).filter((e) => eD(e) && "body" !== eO(e)),
                        i = null,
                        o = "fixed" === eL(e).position,
                        a = o ? e2(e) : e;
                      for (; eD(a) && !eU(a); ) {
                        let t = eL(a),
                          r = e_(a);
                        r || "fixed" !== t.position || (i = null),
                          (
                            o
                              ? !r && !i
                              : (!r &&
                                  "static" === t.position &&
                                  i &&
                                  ["absolute", "fixed"].includes(i.position)) ||
                                (eF(a) &&
                                  !r &&
                                  (function e(t, r) {
                                    let n = e2(t);
                                    return (
                                      !(n === r || !eD(n) || eU(n)) &&
                                      ("fixed" === eL(n).position || e(n, r))
                                    );
                                  })(e, a))
                          )
                            ? (n = n.filter((e) => e !== a))
                            : (i = t),
                          (a = e2(a));
                      }
                      return t.set(e, n), n;
                    })(t, this._c)
                  : [].concat(r),
              a = [...o, n],
              s = a[0],
              l = a.reduce((e, r) => {
                let n = e5(t, r, i);
                return (
                  (e.top = eG(n.top, e.top)),
                  (e.right = eV(n.right, e.right)),
                  (e.bottom = eV(n.bottom, e.bottom)),
                  (e.left = eG(n.left, e.left)),
                  e
                );
              }, e5(t, s, i));
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: r, strategy: n } = e,
              i = eB(r),
              o = eJ(r);
            if (r === o) return t;
            let a = { scrollLeft: 0, scrollTop: 0 },
              s = eW(1),
              l = eW(0);
            if (
              (i || (!i && "fixed" !== n)) &&
              (("body" !== eO(r) || eF(o)) && (a = e0(r)), eB(r))
            ) {
              let e = eQ(r);
              (s = eK(r)),
                (l.x = e.x + r.clientLeft),
                (l.y = e.y + r.clientTop);
            }
            return {
              width: t.width * s.x,
              height: t.height * s.y,
              x: t.x * s.x - a.scrollLeft * s.x + l.x,
              y: t.y * s.y - a.scrollTop * s.y + l.y,
            };
          },
          isElement: eD,
          getDimensions: function (e) {
            return eZ(e);
          },
          getOffsetParent: e4,
          getDocumentElement: eJ,
          getScale: eK,
          async getElementRects(e) {
            let { reference: t, floating: r, strategy: n } = e,
              i = this.getOffsetParent || e4,
              o = this.getDimensions;
            return {
              reference: (function (e, t, r) {
                let n = eB(t),
                  i = eJ(t),
                  o = "fixed" === r,
                  a = eQ(e, !0, o, t),
                  s = { scrollLeft: 0, scrollTop: 0 },
                  l = eW(0);
                if (n || (!n && !o)) {
                  if ((("body" !== eO(t) || eF(i)) && (s = e0(t)), eB(t))) {
                    let e = eQ(t, !0, o, t);
                    (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
                  } else i && (l.x = e1(i));
                }
                return {
                  x: a.left + s.scrollLeft - l.x,
                  y: a.top + s.scrollTop - l.y,
                  width: a.width,
                  height: a.height,
                };
              })(t, await i(r), n),
              floating: { x: 0, y: 0, ...(await o(r)) },
            };
          },
          getClientRects: (e) => Array.from(e.getClientRects()),
          isRTL: (e) => "rtl" === eL(e).direction,
        },
        e7 = (e, t, r) => {
          let n = new Map(),
            i = { platform: e6, ...r },
            o = { ...i.platform, _c: n };
          return ey(e, t, { ...i, platform: o });
        };
      var e9 = r(422);
      let te = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
          if (r && {}.hasOwnProperty.call(r, "current")) {
            if (null != r.current)
              return eE({ element: r.current, padding: n }).fn(t);
          } else if (r) return eE({ element: r, padding: n }).fn(t);
          return {};
        },
      });
      var tt = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
      function tr(e, t) {
        let r, n, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 != n--; ) if (!tr(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, i[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = i[n];
            if (("_owner" !== r || !e.$$typeof) && !tr(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function tn(e) {
        if ("undefined" == typeof window) return 1;
        let t = e.ownerDocument.defaultView || window;
        return t.devicePixelRatio || 1;
      }
      function ti(e, t) {
        let r = tn(e);
        return Math.round(t * r) / r;
      }
      function to(e) {
        let t = l.useRef(e);
        return (
          tt(() => {
            t.current = e;
          }),
          t
        );
      }
      var ta = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
      let ts = !1,
        tl = 0,
        tu = () => "floating-ui-" + tl++,
        tc = u["useId".toString()],
        th =
          tc ||
          function () {
            let [e, t] = l.useState(() => (ts ? tu() : void 0));
            return (
              ta(() => {
                null == e && t(tu());
              }, []),
              l.useEffect(() => {
                ts || (ts = !0);
              }, []),
              e
            );
          },
        td = l.createContext(null),
        tf = l.createContext(null),
        tp = () => {
          var e;
          return (null == (e = l.useContext(td)) ? void 0 : e.id) || null;
        },
        tg = () => l.useContext(tf);
      function tm(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function ty(e) {
        return tm(e).defaultView || window;
      }
      function tb(e) {
        return !!e && e instanceof ty(e).Element;
      }
      function tv(e) {
        return !!e && e instanceof ty(e).HTMLElement;
      }
      function tx(e, t) {
        let r = ["mouse", "pen"];
        return t || r.push("", void 0), r.includes(e);
      }
      function tw(e, t) {
        if (!e || !t) return !1;
        let r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (
          r &&
          (function (e) {
            if ("undefined" == typeof ShadowRoot) return !1;
            let t = ty(e).ShadowRoot;
            return e instanceof t || e instanceof ShadowRoot;
          })(r)
        ) {
          let r = t;
          for (; r; ) {
            if (e === r) return !0;
            r = r.parentNode || r.host;
          }
        }
        return !1;
      }
      function tC(e) {
        let t = (0, l.useRef)(e);
        return (
          ta(() => {
            t.current = e;
          }),
          t
        );
      }
      let tk = "data-floating-ui-safe-polygon";
      function tE(e, t, r) {
        return r && !tx(r)
          ? 0
          : "number" == typeof e
          ? e
          : null == e
          ? void 0
          : e[t];
      }
      function tT(e) {
        return tv(e.target) && "BUTTON" === e.target.tagName;
      }
      function tS(e) {
        return (
          tv(e) &&
          e.matches(
            "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])"
          )
        );
      }
      let tP = u["useInsertionEffect".toString()],
        tA = tP || ((e) => e());
      function tN(e, t, r) {
        let n = new Map();
        return {
          ...("floating" === r && { tabIndex: -1 }),
          ...e,
          ...t
            .map((e) => (e ? e[r] : null))
            .concat(e)
            .reduce(
              (e, t) => (
                t &&
                  Object.entries(t).forEach((t) => {
                    let [r, i] = t;
                    if (0 === r.indexOf("on")) {
                      if ((n.has(r) || n.set(r, []), "function" == typeof i)) {
                        var o;
                        null == (o = n.get(r)) || o.push(i),
                          (e[r] = function () {
                            for (
                              var e, t = arguments.length, i = Array(t), o = 0;
                              o < t;
                              o++
                            )
                              i[o] = arguments[o];
                            return null == (e = n.get(r))
                              ? void 0
                              : e.map((e) => e(...i)).find((e) => void 0 !== e);
                          });
                      }
                    } else e[r] = i;
                  }),
                e
              ),
              {}
            ),
        };
      }
      function tj(e, t) {
        let [r, n] = e,
          i = !1,
          o = t.length;
        for (let e = 0, a = o - 1; e < o; a = e++) {
          let [o, s] = t[e] || [0, 0],
            [l, u] = t[a] || [0, 0],
            c = s >= n != u >= n && r <= ((l - o) * (n - s)) / (u - s) + o;
          c && (i = !i);
        }
        return i;
      }
      let tR = ({ arrowRef: e, placement: t }) => {
          var r, n, i;
          let o = [];
          return (
            o.push({
              name: "offset",
              options: 8,
              async fn(e) {
                let { x: t, y: r } = e,
                  n = await (async function (e, t) {
                    let { placement: r, platform: n, elements: i } = e,
                      o = await (null == n.isRTL
                        ? void 0
                        : n.isRTL(i.floating)),
                      a = ep(r),
                      s = ed(r),
                      l = "x" === eg(r),
                      u = ["left", "top"].includes(a) ? -1 : 1,
                      c = o && l ? -1 : 1,
                      h = eb(8, e),
                      {
                        mainAxis: d,
                        crossAxis: f,
                        alignmentAxis: p,
                      } = "number" == typeof h
                        ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
                        : {
                            mainAxis: 0,
                            crossAxis: 0,
                            alignmentAxis: null,
                            ...h,
                          };
                    return (
                      s &&
                        "number" == typeof p &&
                        (f = "end" === s ? -1 * p : p),
                      l ? { x: f * c, y: d * u } : { x: d * u, y: f * c }
                    );
                  })(e, 0);
                return { x: t + n.x, y: r + n.y, data: n };
              },
            }),
            o.push(
              "auto" === t
                ? (void 0 === r && (r = {}),
                  {
                    name: "autoPlacement",
                    options: r,
                    async fn(e) {
                      var t, n, i, o;
                      let {
                          rects: a,
                          middlewareData: s,
                          placement: l,
                          platform: u,
                          elements: c,
                        } = e,
                        {
                          crossAxis: h = !1,
                          alignment: d,
                          allowedPlacements: f = eT,
                          autoAlignment: p = !0,
                          ...g
                        } = eb(r, e),
                        m =
                          void 0 !== d || f === eT
                            ? ((o = d || null)
                                ? [
                                    ...f.filter((e) => ed(e) === o),
                                    ...f.filter((e) => ed(e) !== o),
                                  ]
                                : f.filter((e) => ep(e) === e)
                              ).filter(
                                (e) => !o || ed(e) === o || (!!p && ej(e) !== e)
                              )
                            : f,
                        y = await ew(e, g),
                        b =
                          (null == (t = s.autoPlacement) ? void 0 : t.index) ||
                          0,
                        v = m[b];
                      if (null == v) return {};
                      let { main: x, cross: w } = eA(
                        v,
                        a,
                        await (null == u.isRTL ? void 0 : u.isRTL(c.floating))
                      );
                      if (l !== v) return { reset: { placement: m[0] } };
                      let C = [y[ep(v)], y[x], y[w]],
                        k = [
                          ...((null == (n = s.autoPlacement)
                            ? void 0
                            : n.overflows) || []),
                          { placement: v, overflows: C },
                        ],
                        E = m[b + 1];
                      if (E)
                        return {
                          data: { index: b + 1, overflows: k },
                          reset: { placement: E },
                        };
                      let T = k
                          .map((e) => {
                            let t = ed(e.placement);
                            return [
                              e.placement,
                              t && h
                                ? e.overflows
                                    .slice(0, 2)
                                    .reduce((e, t) => e + t, 0)
                                : e.overflows[0],
                              e.overflows,
                            ];
                          })
                          .sort((e, t) => e[1] - t[1]),
                        S =
                          (null ==
                          (i = T.filter((e) =>
                            e[2].slice(0, ed(e[0]) ? 2 : 3).every((e) => e <= 0)
                          )[0])
                            ? void 0
                            : i[0]) || T[0][0];
                      return S !== l
                        ? {
                            data: { index: b + 1, overflows: k },
                            reset: { placement: S },
                          }
                        : {};
                    },
                  })
                : (void 0 === n && (n = {}),
                  {
                    name: "flip",
                    options: n,
                    async fn(e) {
                      var t, r, i, o;
                      let {
                          placement: a,
                          middlewareData: s,
                          rects: l,
                          initialPlacement: u,
                          platform: c,
                          elements: h,
                        } = e,
                        {
                          mainAxis: d = !0,
                          crossAxis: f = !0,
                          fallbackPlacements: p,
                          fallbackStrategy: g = "bestFit",
                          fallbackAxisSideDirection: m = "none",
                          flipAlignment: y = !0,
                          ...b
                        } = eb(n, e),
                        v = ep(a),
                        x = ep(u) === u,
                        w = await (null == c.isRTL
                          ? void 0
                          : c.isRTL(h.floating)),
                        C =
                          p ||
                          (x || !y
                            ? [eP(u)]
                            : (function (e) {
                                let t = eP(e);
                                return [ej(e), t, ej(t)];
                              })(u));
                      p ||
                        "none" === m ||
                        C.push(
                          ...(function (e, t, r, n) {
                            let i = ed(e),
                              o = (function (e, t, r) {
                                let n = ["left", "right"],
                                  i = ["right", "left"];
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    return r ? (t ? i : n) : t ? n : i;
                                  case "left":
                                  case "right":
                                    return t
                                      ? ["top", "bottom"]
                                      : ["bottom", "top"];
                                  default:
                                    return [];
                                }
                              })(ep(e), "start" === r, n);
                            return (
                              i &&
                                ((o = o.map((e) => e + "-" + i)),
                                t && (o = o.concat(o.map(ej)))),
                              o
                            );
                          })(u, y, m, w)
                        );
                      let k = [u, ...C],
                        E = await ew(e, b),
                        T = [],
                        S = (null == (t = s.flip) ? void 0 : t.overflows) || [];
                      if ((d && T.push(E[v]), f)) {
                        let { main: e, cross: t } = eA(a, l, w);
                        T.push(E[e], E[t]);
                      }
                      if (
                        ((S = [...S, { placement: a, overflows: T }]),
                        !T.every((e) => e <= 0))
                      ) {
                        let e =
                            ((null == (r = s.flip) ? void 0 : r.index) || 0) +
                            1,
                          t = k[e];
                        if (t)
                          return {
                            data: { index: e, overflows: S },
                            reset: { placement: t },
                          };
                        let n =
                          null ==
                          (i = S.filter((e) => e.overflows[0] <= 0).sort(
                            (e, t) => e.overflows[1] - t.overflows[1]
                          )[0])
                            ? void 0
                            : i.placement;
                        if (!n)
                          switch (g) {
                            case "bestFit": {
                              let e =
                                null ==
                                (o = S.map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0),
                                ]).sort((e, t) => e[1] - t[1])[0])
                                  ? void 0
                                  : o[0];
                              e && (n = e);
                              break;
                            }
                            case "initialPlacement":
                              n = u;
                          }
                        if (a !== n) return { reset: { placement: n } };
                      }
                      return {};
                    },
                  })
            ),
            o.push({
              name: "shift",
              options: (i = { padding: 8 }),
              async fn(e) {
                let { x: t, y: r, placement: n } = e,
                  {
                    mainAxis: o = !0,
                    crossAxis: a = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: r } = e;
                        return { x: t, y: r };
                      },
                    },
                    ...l
                  } = eb(i, e),
                  u = { x: t, y: r },
                  c = await ew(e, l),
                  h = eg(ep(n)),
                  d = "x" === h ? "y" : "x",
                  f = u[h],
                  p = u[d];
                o &&
                  (f = ek(
                    f + c["y" === h ? "top" : "left"],
                    eC(f, f - c["y" === h ? "bottom" : "right"])
                  )),
                  a &&
                    (p = ek(
                      p + c["y" === d ? "top" : "left"],
                      eC(p, p - c["y" === d ? "bottom" : "right"])
                    ));
                let g = s.fn({ ...e, [h]: f, [d]: p });
                return { ...g, data: { x: g.x - t, y: g.y - r } };
              },
            }),
            e.current && o.push(te({ element: e.current })),
            o
          );
        },
        tL = ({ placement: e }) => ("auto" === e ? void 0 : e),
        tM = ({ placement: e }) =>
          ({ top: "bottom", right: "left", bottom: "top", left: "right" }[
            e.split("-")[0]
          ]),
        tO = ({
          animation: e = "duration-300",
          arrow: t = !0,
          children: r,
          className: n,
          closeRequestKey: i,
          content: a,
          placement: u = "top",
          style: c = "dark",
          theme: h,
          trigger: d = "hover",
          minWidth: f,
          ...p
        }) => {
          let g = (0, l.useRef)(null),
            [m, y] = (0, l.useState)(!1),
            b = (function (e) {
              var t;
              void 0 === e && (e = {});
              let { open: r = !1, onOpenChange: n, nodeId: i } = e,
                [o, a] = l.useState(null),
                s = (null == (t = e.elements) ? void 0 : t.reference) || o,
                u = (function (e) {
                  void 0 === e && (e = {});
                  let {
                      placement: t = "bottom",
                      strategy: r = "absolute",
                      middleware: n = [],
                      platform: i,
                      elements: { reference: o, floating: a } = {},
                      transform: s = !0,
                      whileElementsMounted: u,
                      open: c,
                    } = e,
                    [h, d] = l.useState({
                      x: 0,
                      y: 0,
                      strategy: r,
                      placement: t,
                      middlewareData: {},
                      isPositioned: !1,
                    }),
                    [f, p] = l.useState(n);
                  tr(f, n) || p(n);
                  let [g, m] = l.useState(null),
                    [y, b] = l.useState(null),
                    v = l.useCallback(
                      (e) => {
                        e != k.current && ((k.current = e), m(e));
                      },
                      [m]
                    ),
                    x = l.useCallback(
                      (e) => {
                        e !== E.current && ((E.current = e), b(e));
                      },
                      [b]
                    ),
                    w = o || g,
                    C = a || y,
                    k = l.useRef(null),
                    E = l.useRef(null),
                    T = l.useRef(h),
                    S = to(u),
                    P = to(i),
                    A = l.useCallback(() => {
                      if (!k.current || !E.current) return;
                      let e = { placement: t, strategy: r, middleware: f };
                      P.current && (e.platform = P.current),
                        e7(k.current, E.current, e).then((e) => {
                          let t = { ...e, isPositioned: !0 };
                          N.current &&
                            !tr(T.current, t) &&
                            ((T.current = t),
                            e9.flushSync(() => {
                              d(t);
                            }));
                        });
                    }, [f, t, r, P]);
                  tt(() => {
                    !1 === c &&
                      T.current.isPositioned &&
                      ((T.current.isPositioned = !1),
                      d((e) => ({ ...e, isPositioned: !1 })));
                  }, [c]);
                  let N = l.useRef(!1);
                  tt(
                    () => (
                      (N.current = !0),
                      () => {
                        N.current = !1;
                      }
                    ),
                    []
                  ),
                    tt(() => {
                      if (
                        (w && (k.current = w), C && (E.current = C), w && C)
                      ) {
                        if (S.current) return S.current(w, C, A);
                        A();
                      }
                    }, [w, C, A, S]);
                  let j = l.useMemo(
                      () => ({
                        reference: k,
                        floating: E,
                        setReference: v,
                        setFloating: x,
                      }),
                      [v, x]
                    ),
                    R = l.useMemo(
                      () => ({ reference: w, floating: C }),
                      [w, C]
                    ),
                    L = l.useMemo(() => {
                      let e = { position: r, left: 0, top: 0 };
                      if (!R.floating) return e;
                      let t = ti(R.floating, h.x),
                        n = ti(R.floating, h.y);
                      return s
                        ? {
                            ...e,
                            transform: "translate(" + t + "px, " + n + "px)",
                            ...(tn(R.floating) >= 1.5 && {
                              willChange: "transform",
                            }),
                          }
                        : { position: r, left: t, top: n };
                    }, [r, s, R.floating, h.x, h.y]);
                  return l.useMemo(
                    () => ({
                      ...h,
                      update: A,
                      refs: j,
                      elements: R,
                      floatingStyles: L,
                    }),
                    [h, A, j, R, L]
                  );
                })(e),
                c = tg(),
                h = (function (e) {
                  let t = l.useRef(() => {});
                  return (
                    tA(() => {
                      t.current = e;
                    }),
                    l.useCallback(function () {
                      for (
                        var e = arguments.length, r = Array(e), n = 0;
                        n < e;
                        n++
                      )
                        r[n] = arguments[n];
                      return null == t.current ? void 0 : t.current(...r);
                    }, [])
                  );
                })((e, t) => {
                  e && (f.current.openEvent = t), null == n || n(e, t);
                }),
                d = l.useRef(null),
                f = l.useRef({}),
                p = l.useState(() =>
                  (function () {
                    let e = new Map();
                    return {
                      emit(t, r) {
                        var n;
                        null == (n = e.get(t)) || n.forEach((e) => e(r));
                      },
                      on(t, r) {
                        e.set(t, [...(e.get(t) || []), r]);
                      },
                      off(t, r) {
                        var n;
                        e.set(
                          t,
                          (null == (n = e.get(t))
                            ? void 0
                            : n.filter((e) => e !== r)) || []
                        );
                      },
                    };
                  })()
                )[0],
                g = th(),
                m = l.useCallback(
                  (e) => {
                    let t = tb(e)
                      ? {
                          getBoundingClientRect: () =>
                            e.getBoundingClientRect(),
                          contextElement: e,
                        }
                      : e;
                    u.refs.setReference(t);
                  },
                  [u.refs]
                ),
                y = l.useCallback(
                  (e) => {
                    (tb(e) || null === e) && ((d.current = e), a(e)),
                      (tb(u.refs.reference.current) ||
                        null === u.refs.reference.current ||
                        (null !== e && !tb(e))) &&
                        u.refs.setReference(e);
                  },
                  [u.refs]
                ),
                b = l.useMemo(
                  () => ({
                    ...u.refs,
                    setReference: y,
                    setPositionReference: m,
                    domReference: d,
                  }),
                  [u.refs, y, m]
                ),
                v = l.useMemo(
                  () => ({ ...u.elements, domReference: s }),
                  [u.elements, s]
                ),
                x = l.useMemo(
                  () => ({
                    ...u,
                    refs: b,
                    elements: v,
                    dataRef: f,
                    nodeId: i,
                    floatingId: g,
                    events: p,
                    open: r,
                    onOpenChange: h,
                  }),
                  [u, i, g, p, r, h, b, v]
                );
              return (
                ta(() => {
                  let e =
                    null == c
                      ? void 0
                      : c.nodesRef.current.find((e) => e.id === i);
                  e && (e.context = x);
                }),
                l.useMemo(
                  () => ({ ...u, context: x, refs: b, elements: v }),
                  [u, b, v, x]
                )
              );
            })({
              middleware: tR({ arrowRef: g, placement: u }),
              onOpenChange: y,
              open: m,
              placement: tL({ placement: u }),
            }),
            {
              context: v,
              middlewareData: { arrow: { x: x, y: w } = {} },
              refs: C,
              strategy: k,
              update: E,
              x: T,
              y: S,
            } = b,
            { getFloatingProps: P, getReferenceProps: A } = (function (e) {
              void 0 === e && (e = []);
              let t = e,
                r = l.useCallback((t) => tN(t, e, "reference"), t),
                n = l.useCallback((t) => tN(t, e, "floating"), t),
                i = l.useCallback(
                  (t) => tN(t, e, "item"),
                  e.map((e) => (null == e ? void 0 : e.item))
                );
              return l.useMemo(
                () => ({
                  getReferenceProps: r,
                  getFloatingProps: n,
                  getItemProps: i,
                }),
                [r, n, i]
              );
            })([
              (function (e, t) {
                void 0 === t && (t = {});
                let {
                    open: r,
                    onOpenChange: n,
                    dataRef: i,
                    elements: { domReference: o },
                  } = e,
                  {
                    enabled: a = !0,
                    event: s = "click",
                    toggle: u = !0,
                    ignoreMouse: c = !1,
                    keyboardHandlers: h = !0,
                  } = t,
                  d = l.useRef(),
                  f = l.useRef(!1);
                return l.useMemo(
                  () =>
                    a
                      ? {
                          reference: {
                            onPointerDown(e) {
                              d.current = e.pointerType;
                            },
                            onMouseDown(e) {
                              0 !== e.button ||
                                (tx(d.current, !0) && c) ||
                                "click" === s ||
                                (r
                                  ? u &&
                                    (!i.current.openEvent ||
                                      "mousedown" ===
                                        i.current.openEvent.type) &&
                                    n(!1, e.nativeEvent)
                                  : (e.preventDefault(), n(!0, e.nativeEvent)));
                            },
                            onClick(e) {
                              if ("mousedown" === s && d.current) {
                                d.current = void 0;
                                return;
                              }
                              (tx(d.current, !0) && c) ||
                                (r
                                  ? u &&
                                    (!i.current.openEvent ||
                                      "click" === i.current.openEvent.type) &&
                                    n(!1, e.nativeEvent)
                                  : n(!0, e.nativeEvent));
                            },
                            onKeyDown(e) {
                              (d.current = void 0),
                                !(e.defaultPrevented || !h || tT(e)) &&
                                  (" " !== e.key ||
                                    tS(o) ||
                                    (e.preventDefault(), (f.current = !0)),
                                  "Enter" === e.key &&
                                    (r
                                      ? u && n(!1, e.nativeEvent)
                                      : n(!0, e.nativeEvent)));
                            },
                            onKeyUp(e) {
                              !(e.defaultPrevented || !h || tT(e) || tS(o)) &&
                                " " === e.key &&
                                f.current &&
                                ((f.current = !1),
                                r
                                  ? u && n(!1, e.nativeEvent)
                                  : n(!0, e.nativeEvent));
                            },
                          },
                        }
                      : {},
                  [a, i, s, c, h, o, u, r, n]
                );
              })(v, { enabled: "click" === d }),
              (function (e, t) {
                void 0 === t && (t = {});
                let {
                    open: r,
                    onOpenChange: n,
                    dataRef: i,
                    events: o,
                    refs: a,
                    elements: { floating: s, domReference: u },
                  } = e,
                  { enabled: c = !0, keyboardOnly: h = !0 } = t,
                  d = l.useRef(""),
                  f = l.useRef(!1),
                  p = l.useRef();
                return (
                  l.useEffect(() => {
                    if (!c) return;
                    let e = tm(s),
                      t = e.defaultView || window;
                    function n() {
                      !r &&
                        tv(u) &&
                        u ===
                          (function (e) {
                            let t = e.activeElement;
                            for (
                              ;
                              (null == (r = t)
                                ? void 0
                                : null == (n = r.shadowRoot)
                                ? void 0
                                : n.activeElement) != null;

                            ) {
                              var r, n;
                              t = t.shadowRoot.activeElement;
                            }
                            return t;
                          })(tm(u)) &&
                        (f.current = !0);
                    }
                    return (
                      t.addEventListener("blur", n),
                      () => {
                        t.removeEventListener("blur", n);
                      }
                    );
                  }, [s, u, r, c]),
                  l.useEffect(() => {
                    if (c)
                      return (
                        o.on("dismiss", e),
                        () => {
                          o.off("dismiss", e);
                        }
                      );
                    function e(e) {
                      ("referencePress" === e.type || "escapeKey" === e.type) &&
                        (f.current = !0);
                    }
                  }, [o, c]),
                  l.useEffect(
                    () => () => {
                      clearTimeout(p.current);
                    },
                    []
                  ),
                  l.useMemo(
                    () =>
                      c
                        ? {
                            reference: {
                              onPointerDown(e) {
                                let { pointerType: t } = e;
                                (d.current = t), (f.current = !!(t && h));
                              },
                              onMouseLeave() {
                                f.current = !1;
                              },
                              onFocus(e) {
                                var t, r;
                                !f.current &&
                                  (("focus" === e.type &&
                                    (null == (t = i.current.openEvent)
                                      ? void 0
                                      : t.type) === "mousedown" &&
                                    ((r = i.current.openEvent),
                                    null != u &&
                                      ("composedPath" in r
                                        ? r.composedPath().includes(u)
                                        : null != r.target &&
                                          u.contains(r.target)))) ||
                                    n(!0, e.nativeEvent));
                              },
                              onBlur(e) {
                                f.current = !1;
                                let t = e.relatedTarget,
                                  r =
                                    tb(t) &&
                                    t.hasAttribute(
                                      "data-floating-ui-focus-guard"
                                    ) &&
                                    "outside" === t.getAttribute("data-type");
                                p.current = setTimeout(() => {
                                  tw(a.floating.current, t) ||
                                    tw(u, t) ||
                                    r ||
                                    n(!1, e.nativeEvent);
                                });
                              },
                            },
                          }
                        : {},
                    [c, h, u, a, i, n]
                  )
                );
              })(v),
              (function (e, t) {
                void 0 === t && (t = {});
                let {
                    open: r,
                    onOpenChange: n,
                    dataRef: i,
                    events: o,
                    elements: { domReference: a, floating: s },
                    refs: u,
                  } = e,
                  {
                    enabled: c = !0,
                    delay: h = 0,
                    handleClose: d = null,
                    mouseOnly: f = !1,
                    restMs: p = 0,
                    move: g = !0,
                  } = t,
                  m = tg(),
                  y = tp(),
                  b = tC(d),
                  v = tC(h),
                  x = l.useRef(),
                  w = l.useRef(),
                  C = l.useRef(),
                  k = l.useRef(),
                  E = l.useRef(!0),
                  T = l.useRef(!1),
                  S = l.useRef(() => {}),
                  P = l.useCallback(() => {
                    var e;
                    let t = null == (e = i.current.openEvent) ? void 0 : e.type;
                    return (
                      (null == t ? void 0 : t.includes("mouse")) &&
                      "mousedown" !== t
                    );
                  }, [i]);
                l.useEffect(() => {
                  if (c)
                    return (
                      o.on("dismiss", e),
                      () => {
                        o.off("dismiss", e);
                      }
                    );
                  function e() {
                    clearTimeout(w.current),
                      clearTimeout(k.current),
                      (E.current = !0);
                  }
                }, [c, o]),
                  l.useEffect(() => {
                    if (!c || !b.current || !r) return;
                    function e(e) {
                      P() && n(!1, e);
                    }
                    let t = tm(s).documentElement;
                    return (
                      t.addEventListener("mouseleave", e),
                      () => {
                        t.removeEventListener("mouseleave", e);
                      }
                    );
                  }, [s, r, n, c, b, i, P]);
                let A = l.useCallback(
                    function (e, t) {
                      void 0 === t && (t = !0);
                      let r = tE(v.current, "close", x.current);
                      r && !C.current
                        ? (clearTimeout(w.current),
                          (w.current = setTimeout(() => n(!1, e), r)))
                        : t && (clearTimeout(w.current), n(!1, e));
                    },
                    [v, n]
                  ),
                  N = l.useCallback(() => {
                    S.current(), (C.current = void 0);
                  }, []),
                  j = l.useCallback(() => {
                    if (T.current) {
                      let e = tm(u.floating.current).body;
                      (e.style.pointerEvents = ""),
                        e.removeAttribute(tk),
                        (T.current = !1);
                    }
                  }, [u]);
                return (
                  l.useEffect(() => {
                    if (c && tb(a))
                      return (
                        r && a.addEventListener("mouseleave", u),
                        null == s || s.addEventListener("mouseleave", u),
                        g && a.addEventListener("mousemove", o, { once: !0 }),
                        a.addEventListener("mouseenter", o),
                        a.addEventListener("mouseleave", l),
                        () => {
                          r && a.removeEventListener("mouseleave", u),
                            null == s || s.removeEventListener("mouseleave", u),
                            g && a.removeEventListener("mousemove", o),
                            a.removeEventListener("mouseenter", o),
                            a.removeEventListener("mouseleave", l);
                        }
                      );
                    function t() {
                      return (
                        !!i.current.openEvent &&
                        ["click", "mousedown"].includes(
                          i.current.openEvent.type
                        )
                      );
                    }
                    function o(e) {
                      if (
                        (clearTimeout(w.current),
                        (E.current = !1),
                        (f && !tx(x.current)) ||
                          (p > 0 && 0 === tE(v.current, "open")))
                      )
                        return;
                      let t = tE(v.current, "open", x.current);
                      t
                        ? (w.current = setTimeout(() => {
                            n(!0, e);
                          }, t))
                        : n(!0, e);
                    }
                    function l(n) {
                      if (t()) return;
                      S.current();
                      let i = tm(s);
                      if ((clearTimeout(k.current), b.current)) {
                        r || clearTimeout(w.current),
                          (C.current = b.current({
                            ...e,
                            tree: m,
                            x: n.clientX,
                            y: n.clientY,
                            onClose() {
                              j(), N(), A(n);
                            },
                          }));
                        let t = C.current;
                        i.addEventListener("mousemove", t),
                          (S.current = () => {
                            i.removeEventListener("mousemove", t);
                          });
                        return;
                      }
                      let o = "touch" !== x.current || !tw(s, n.relatedTarget);
                      o && A(n);
                    }
                    function u(r) {
                      t() ||
                        null == b.current ||
                        b.current({
                          ...e,
                          tree: m,
                          x: r.clientX,
                          y: r.clientY,
                          onClose() {
                            j(), N(), A(r);
                          },
                        })(r);
                    }
                  }, [a, s, c, e, f, p, g, A, N, j, n, r, m, v, b, i]),
                  ta(() => {
                    var e, t, n;
                    if (
                      c &&
                      r &&
                      null != (e = b.current) &&
                      e.__options.blockPointerEvents &&
                      P()
                    ) {
                      let e = tm(s).body;
                      if (
                        (e.setAttribute(tk, ""),
                        (e.style.pointerEvents = "none"),
                        (T.current = !0),
                        tb(a) && s)
                      ) {
                        let e = a,
                          r =
                            null == m
                              ? void 0
                              : null ==
                                (t = m.nodesRef.current.find((e) => e.id === y))
                              ? void 0
                              : null == (n = t.context)
                              ? void 0
                              : n.elements.floating;
                        return (
                          r && (r.style.pointerEvents = ""),
                          (e.style.pointerEvents = "auto"),
                          (s.style.pointerEvents = "auto"),
                          () => {
                            (e.style.pointerEvents = ""),
                              (s.style.pointerEvents = "");
                          }
                        );
                      }
                    }
                  }, [c, r, y, s, a, m, b, i, P]),
                  ta(() => {
                    r || ((x.current = void 0), N(), j());
                  }, [r, N, j]),
                  l.useEffect(
                    () => () => {
                      N(),
                        clearTimeout(w.current),
                        clearTimeout(k.current),
                        j();
                    },
                    [c, N, j]
                  ),
                  l.useMemo(() => {
                    if (!c) return {};
                    function e(e) {
                      x.current = e.pointerType;
                    }
                    return {
                      reference: {
                        onPointerDown: e,
                        onPointerEnter: e,
                        onMouseMove(e) {
                          r ||
                            0 === p ||
                            (clearTimeout(k.current),
                            (k.current = setTimeout(() => {
                              E.current || n(!0, e.nativeEvent);
                            }, p)));
                        },
                      },
                      floating: {
                        onMouseEnter() {
                          clearTimeout(w.current);
                        },
                        onMouseLeave(e) {
                          o.emit("dismiss", {
                            type: "mouseLeave",
                            data: { returnFocus: !1 },
                          }),
                            A(e.nativeEvent, !1);
                        },
                      },
                    };
                  }, [o, c, p, r, n, A])
                );
              })(v, {
                enabled: "hover" === d,
                handleClose: (function (e) {
                  let t;
                  void 0 === e && (e = {});
                  let {
                      buffer: r = 0.5,
                      blockPointerEvents: n = !1,
                      requireIntent: i = !0,
                    } = e,
                    o = !1,
                    a = null,
                    s = null,
                    l = performance.now(),
                    u = (e) => {
                      let {
                        x: n,
                        y: u,
                        placement: c,
                        elements: h,
                        onClose: d,
                        nodeId: f,
                        tree: p,
                      } = e;
                      return function (e) {
                        var g;
                        function m() {
                          clearTimeout(t), d();
                        }
                        if (
                          (clearTimeout(t),
                          !h.domReference ||
                            !h.floating ||
                            null == c ||
                            null == n ||
                            null == u)
                        )
                          return;
                        let { clientX: y, clientY: b } = e,
                          v =
                            "composedPath" in e
                              ? e.composedPath()[0]
                              : e.target,
                          x = "mouseleave" === e.type,
                          w = tw(h.floating, v),
                          C = tw(h.domReference, v),
                          k = h.domReference.getBoundingClientRect(),
                          E = h.floating.getBoundingClientRect(),
                          T = c.split("-")[0],
                          S = n > E.right - E.width / 2,
                          P = u > E.bottom - E.height / 2,
                          A =
                            (g = [y, b])[0] >= k.x &&
                            g[0] <= k.x + k.width &&
                            g[1] >= k.y &&
                            g[1] <= k.y + k.height,
                          N = E.width > k.width,
                          j = E.height > k.height,
                          R = (N ? k : E).left,
                          L = (N ? k : E).right,
                          M = (j ? k : E).top,
                          O = (j ? k : E).bottom;
                        if (w && ((o = !0), !x)) return;
                        if ((C && (o = !1), C && !x)) {
                          o = !0;
                          return;
                        }
                        if (
                          (x &&
                            tb(e.relatedTarget) &&
                            tw(h.floating, e.relatedTarget)) ||
                          (p &&
                            (function (e, t) {
                              let r = e.filter((e) => {
                                  var r;
                                  return (
                                    e.parentId === t &&
                                    (null == (r = e.context) ? void 0 : r.open)
                                  );
                                }),
                                n = r;
                              for (; n.length; )
                                (n = e.filter((e) => {
                                  var t;
                                  return null == (t = n)
                                    ? void 0
                                    : t.some((t) => {
                                        var r;
                                        return (
                                          e.parentId === t.id &&
                                          (null == (r = e.context)
                                            ? void 0
                                            : r.open)
                                        );
                                      });
                                })),
                                  (r = r.concat(n));
                              return r;
                            })(p.nodesRef.current, f).some((e) => {
                              let { context: t } = e;
                              return null == t ? void 0 : t.open;
                            }))
                        )
                          return;
                        if (
                          ("top" === T && u >= k.bottom - 1) ||
                          ("bottom" === T && u <= k.top + 1) ||
                          ("left" === T && n >= k.right - 1) ||
                          ("right" === T && n <= k.left + 1)
                        )
                          return m();
                        let B = [];
                        switch (T) {
                          case "top":
                            B = [
                              [R, k.top + 1],
                              [R, E.bottom - 1],
                              [L, E.bottom - 1],
                              [L, k.top + 1],
                            ];
                            break;
                          case "bottom":
                            B = [
                              [R, E.top + 1],
                              [R, k.bottom - 1],
                              [L, k.bottom - 1],
                              [L, E.top + 1],
                            ];
                            break;
                          case "left":
                            B = [
                              [E.right - 1, O],
                              [E.right - 1, M],
                              [k.left + 1, M],
                              [k.left + 1, O],
                            ];
                            break;
                          case "right":
                            B = [
                              [k.right - 1, O],
                              [k.right - 1, M],
                              [E.left + 1, M],
                              [E.left + 1, O],
                            ];
                        }
                        if (!tj([y, b], B)) {
                          if (o && !A) return m();
                          if (!x && i) {
                            let t = (function (e, t) {
                              let r = performance.now(),
                                n = r - l;
                              if (null === a || null === s || 0 === n)
                                return (a = e), (s = t), (l = r), null;
                              let i = e - a,
                                o = t - s;
                              return (
                                (a = e),
                                (s = t),
                                (l = r),
                                Math.sqrt(i * i + o * o) / n
                              );
                            })(e.clientX, e.clientY);
                            if (null !== t && t < 0.1) return m();
                          }
                          tj(
                            [y, b],
                            (function (e) {
                              let [t, n] = e;
                              switch (T) {
                                case "top": {
                                  let e = [
                                    [
                                      E.left,
                                      S
                                        ? E.bottom - r
                                        : N
                                        ? E.bottom - r
                                        : E.top,
                                    ],
                                    [
                                      E.right,
                                      S
                                        ? N
                                          ? E.bottom - r
                                          : E.top
                                        : E.bottom - r,
                                    ],
                                  ];
                                  return [
                                    [
                                      N ? t + r / 2 : S ? t + 4 * r : t - 4 * r,
                                      n + r + 1,
                                    ],
                                    [
                                      N ? t - r / 2 : S ? t + 4 * r : t - 4 * r,
                                      n + r + 1,
                                    ],
                                    ...e,
                                  ];
                                }
                                case "bottom": {
                                  let e = [
                                    [
                                      E.left,
                                      S ? E.top + r : N ? E.top + r : E.bottom,
                                    ],
                                    [
                                      E.right,
                                      S
                                        ? N
                                          ? E.top + r
                                          : E.bottom
                                        : E.top + r,
                                    ],
                                  ];
                                  return [
                                    [
                                      N ? t + r / 2 : S ? t + 4 * r : t - 4 * r,
                                      n - r,
                                    ],
                                    [
                                      N ? t - r / 2 : S ? t + 4 * r : t - 4 * r,
                                      n - r,
                                    ],
                                    ...e,
                                  ];
                                }
                                case "left": {
                                  let e = [
                                    [
                                      P
                                        ? E.right - r
                                        : j
                                        ? E.right - r
                                        : E.left,
                                      E.top,
                                    ],
                                    [
                                      P
                                        ? j
                                          ? E.right - r
                                          : E.left
                                        : E.right - r,
                                      E.bottom,
                                    ],
                                  ];
                                  return [
                                    ...e,
                                    [
                                      t + r + 1,
                                      j ? n + r / 2 : P ? n + 4 * r : n - 4 * r,
                                    ],
                                    [
                                      t + r + 1,
                                      j ? n - r / 2 : P ? n + 4 * r : n - 4 * r,
                                    ],
                                  ];
                                }
                                case "right": {
                                  let e = [
                                    [
                                      P ? E.left + r : j ? E.left + r : E.right,
                                      E.top,
                                    ],
                                    [
                                      P
                                        ? j
                                          ? E.left + r
                                          : E.right
                                        : E.left + r,
                                      E.bottom,
                                    ],
                                  ];
                                  return [
                                    [
                                      t - r,
                                      j ? n + r / 2 : P ? n + 4 * r : n - 4 * r,
                                    ],
                                    [
                                      t - r,
                                      j ? n - r / 2 : P ? n + 4 * r : n - 4 * r,
                                    ],
                                    ...e,
                                  ];
                                }
                              }
                            })([n, u])
                          )
                            ? !o && i && (t = window.setTimeout(m, 40))
                            : m();
                        }
                      };
                    };
                  return (u.__options = { blockPointerEvents: n }), u;
                })(),
              }),
              (function (e, t) {
                void 0 === t && (t = {});
                let { open: r, floatingId: n } = e,
                  { enabled: i = !0, role: o = "dialog" } = t,
                  a = th();
                return l.useMemo(() => {
                  let e = { id: n, role: o };
                  return i
                    ? "tooltip" === o
                      ? {
                          reference: { "aria-describedby": r ? n : void 0 },
                          floating: e,
                        }
                      : {
                          reference: {
                            "aria-expanded": r ? "true" : "false",
                            "aria-haspopup": "alertdialog" === o ? "dialog" : o,
                            "aria-controls": r ? n : void 0,
                            ...("listbox" === o && { role: "combobox" }),
                            ...("menu" === o && { id: a }),
                          },
                          floating: {
                            ...e,
                            ...("menu" === o && { "aria-labelledby": a }),
                          },
                        }
                    : {};
                }, [i, o, r, n, a]);
              })(v, { role: "tooltip" }),
            ]);
          return (
            (0, l.useEffect)(() => {
              if (C.reference.current && C.floating.current && m)
                return (function (e, t, r, n) {
                  void 0 === n && (n = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: o = !0,
                      elementResize: a = "function" == typeof ResizeObserver,
                      layoutShift: s = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: l = !1,
                    } = n,
                    u = e$(e),
                    c = i || o ? [...(u ? e3(u) : []), ...e3(t)] : [];
                  c.forEach((e) => {
                    i && e.addEventListener("scroll", r, { passive: !0 }),
                      o && e.addEventListener("resize", r);
                  });
                  let h =
                      u && s
                        ? (function (e, t) {
                            let r,
                              n = null,
                              i = eJ(e);
                            function o() {
                              clearTimeout(r), n && n.disconnect(), (n = null);
                            }
                            return (
                              (function a(s, l) {
                                void 0 === s && (s = !1),
                                  void 0 === l && (l = 1),
                                  o();
                                let {
                                  left: u,
                                  top: c,
                                  width: h,
                                  height: d,
                                } = e.getBoundingClientRect();
                                if ((s || t(), !h || !d)) return;
                                let f = {
                                    rootMargin:
                                      -eq(c) +
                                      "px " +
                                      -eq(i.clientWidth - (u + h)) +
                                      "px " +
                                      -eq(i.clientHeight - (c + d)) +
                                      "px " +
                                      -eq(u) +
                                      "px",
                                    threshold: eG(0, eV(1, l)) || 1,
                                  },
                                  p = !0;
                                function g(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== l) {
                                    if (!p) return a();
                                    t
                                      ? a(!1, t)
                                      : (r = setTimeout(() => {
                                          a(!1, 1e-7);
                                        }, 100));
                                  }
                                  p = !1;
                                }
                                try {
                                  n = new IntersectionObserver(g, {
                                    ...f,
                                    root: i.ownerDocument,
                                  });
                                } catch (e) {
                                  n = new IntersectionObserver(g, f);
                                }
                                n.observe(e);
                              })(!0),
                              o
                            );
                          })(u, r)
                        : null,
                    d,
                    f = -1,
                    p = null;
                  a &&
                    ((p = new ResizeObserver((e) => {
                      let [n] = e;
                      n &&
                        n.target === u &&
                        p &&
                        (p.unobserve(t),
                        cancelAnimationFrame(f),
                        (f = requestAnimationFrame(() => {
                          p && p.observe(t);
                        }))),
                        r();
                    })),
                    u && !l && p.observe(u),
                    p.observe(t));
                  let g = l ? eQ(e) : null;
                  return (
                    l &&
                      (function t() {
                        let n = eQ(e);
                        g &&
                          (n.x !== g.x ||
                            n.y !== g.y ||
                            n.width !== g.width ||
                            n.height !== g.height) &&
                          r(),
                          (g = n),
                          (d = requestAnimationFrame(t));
                      })(),
                    r(),
                    () => {
                      c.forEach((e) => {
                        i && e.removeEventListener("scroll", r),
                          o && e.removeEventListener("resize", r);
                      }),
                        h && h(),
                        p && p.disconnect(),
                        (p = null),
                        l && cancelAnimationFrame(d);
                    }
                  );
                })(C.reference.current, C.floating.current, E);
            }, [m, C.floating, C.reference, E]),
            (0, l.useEffect)(() => {
              void 0 !== i && y(!1);
            }, [i]),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)("div", {
                  ref: C.setReference,
                  className: h.target,
                  "data-testid": "flowbite-tooltip-target",
                  ...A(),
                  children: r,
                }),
                (0, o.jsxs)("div", {
                  ref: C.setFloating,
                  "data-testid": "flowbite-tooltip",
                  ...P({
                    className: s()(
                      h.base,
                      e && `${h.animation} ${e}`,
                      !m && h.hidden,
                      h.style[c],
                      n
                    ),
                    style: {
                      position: k,
                      top: S ?? " ",
                      left: T ?? " ",
                      minWidth: f,
                    },
                    ...p,
                  }),
                  children: [
                    (0, o.jsx)("div", { className: h.content, children: a }),
                    t &&
                      (0, o.jsx)("div", {
                        className: s()(h.arrow.base, {
                          [h.arrow.style.dark]: "dark" === c,
                          [h.arrow.style.light]: "light" === c,
                          [h.arrow.style.auto]: "auto" === c,
                        }),
                        "data-testid": "flowbite-tooltip-arrow",
                        ref: g,
                        style: {
                          top: w ?? " ",
                          left: x ?? " ",
                          right: " ",
                          bottom: " ",
                          [tM({ placement: b.placement })]: h.arrow.placement,
                        },
                        children: "\xa0",
                      }),
                  ],
                }),
              ],
            })
          );
        },
        tB = ({ className: e, ...t }) => {
          let r = el().theme.dropdown.floating.divider;
          return (0, o.jsx)("div", { className: s()(r, e), ...t });
        },
        tD = ({ children: e, className: t, ...r }) => {
          let n = el().theme.dropdown.floating.header;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", { className: s()(n, t), ...r, children: e }),
              (0, o.jsx)(tB, {}),
            ],
          });
        },
        tI = ({
          children: e,
          className: t,
          icon: r,
          onClick: n,
          theme: i = {},
          ...a
        }) => {
          let l = N(el().theme.dropdown.floating.item, i);
          return (0, o.jsxs)("li", {
            className: s()(l.base, t),
            onClick: n,
            ...a,
            children: [r && (0, o.jsx)(r, { className: l.icon }), e],
          });
        },
        tF = {
          top: function (e) {
            return p({
              tag: "svg",
              attr: {
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                "aria-hidden": "true",
              },
              child: [
                {
                  tag: "path",
                  attr: {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5 15l7-7 7 7",
                  },
                },
              ],
            })(e);
          },
          right: T,
          bottom: k,
          left: E,
        },
        t_ = ({
          children: e,
          className: t,
          dismissOnClick: r = !0,
          theme: n = {},
          ...i
        }) => {
          let a = (0, l.useId)(),
            s = N(el().theme.dropdown, n),
            {
              placement: u = i.inline ? "bottom-start" : "bottom",
              trigger: c = "click",
              label: h,
              inline: d,
              floatingArrow: f = !1,
              arrowIcon: p = !0,
              ...g
            } = i,
            m = (0, l.useMemo)(() => {
              let [e] = u.split("-");
              return tF[e] ?? k;
            }, [u]),
            [y, b] = (0, l.useState)(void 0),
            [v, x] = (0, l.useState)(void 0),
            w = (0, l.useCallback)(
              (e) =>
                l.isValidElement(e)
                  ? e.type === tI
                    ? l.cloneElement(e, {
                        onClick: () => {
                          e.props.onClick?.(), r && b(a);
                        },
                      })
                    : e.props.children && "object" == typeof e.props.children
                    ? l.cloneElement(e, {
                        children: l.Children.map(e.props.children, w),
                      })
                    : e
                  : e,
              [r, a]
            ),
            C = (0, l.useMemo)(
              () =>
                (0, o.jsx)("ul", {
                  className: s.content,
                  children: l.Children.map(e, w),
                }),
              [w, e, s.content]
            ),
            E = ({ children: e, setButtonWidth: t }) => {
              let r = (0, l.useRef)(null);
              return (
                (0, l.useEffect)(() => {
                  r.current && t?.(r.current.clientWidth);
                }, [r]),
                d
                  ? (0, o.jsx)("button", {
                      type: "button",
                      ref: r,
                      className: s.inlineWrapper,
                      children: e,
                    })
                  : (0, o.jsx)(q, { type: "button", ref: r, ...g, children: e })
              );
            };
          return (0, o.jsx)(tO, {
            content: C,
            style: "auto",
            animation: "duration-100",
            placement: u,
            arrow: f,
            trigger: c,
            theme: s.floating,
            closeRequestKey: y,
            className: t,
            minWidth: v,
            children: (0, o.jsxs)(E, {
              setButtonWidth: x,
              children: [h, p && (0, o.jsx)(m, { className: s.arrowIcon })],
            }),
          });
        };
      (t_.displayName = "Dropdown"),
        (tI.displayName = "Dropdown.Item"),
        (tD.displayName = "Dropdown.Header"),
        (tB.displayName = "Dropdown.Divider"),
        Object.assign(t_, { Item: tI, Header: tD, Divider: tB });
      let tH = (0, l.forwardRef)(
        (
          {
            className: e,
            color: t = "gray",
            helperText: r,
            sizing: n = "md",
            theme: i = {},
            ...a
          },
          l
        ) => {
          let u = N(el().theme.fileInput, i);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", {
                className: s()(u.root.base, e),
                children: (0, o.jsx)("div", {
                  className: u.field.base,
                  children: (0, o.jsx)("input", {
                    className: s()(
                      u.field.input.base,
                      u.field.input.colors[t],
                      u.field.input.sizes[n]
                    ),
                    ...a,
                    type: "file",
                    ref: l,
                  }),
                }),
              }),
              r && (0, o.jsx)(tY, { color: t, children: r }),
            ],
          });
        }
      );
      tH.displayName = "FileInput";
      let tU = ({ children: e, theme: t = {} }) => {
        let { theme: r = {}, dark: n } = t,
          [i, a, s] = ec(),
          u = N(ea, r);
        (0, l.useEffect)(() => {
          n
            ? (a("dark"), document.documentElement.classList.add("dark"))
            : (a("light"), document.documentElement.classList.remove("dark"));
        }, [n, a]);
        let c = (0, l.useMemo)(
          () => ({ theme: u, mode: i, toggleMode: s }),
          [i, s, u]
        );
        return (0, o.jsx)(es.Provider, { value: c, children: e });
      };
      tU.displayName = "Flowbite";
      let tV = ({
          alt: e,
          className: t,
          children: r,
          href: n,
          name: i,
          src: a,
          theme: l = {},
          ...u
        }) => {
          let c = N(el().theme.footer.brand, l);
          return (0, o.jsx)("div", {
            children: n
              ? (0, o.jsxs)("a", {
                  "data-testid": "flowbite-footer-brand",
                  href: n,
                  className: s()(c.base, t),
                  ...u,
                  children: [
                    (0, o.jsx)("img", { alt: e, src: a, className: c.img }),
                    (0, o.jsx)("span", {
                      "data-testid": "flowbite-footer-brand-span",
                      className: c.span,
                      children: i,
                    }),
                    r,
                  ],
                })
              : (0, o.jsx)("img", {
                  alt: e,
                  "data-testid": "flowbite-footer-brand",
                  src: a,
                  className: s()(c.img, t),
                  ...u,
                }),
          });
        },
        tG = ({
          by: e,
          className: t,
          href: r,
          theme: n = {},
          year: i,
          ...a
        }) => {
          let l = N(el().theme.footer.copyright, n);
          return (0, o.jsxs)("div", {
            "data-testid": "flowbite-footer-copyright",
            className: s()(l.base, t),
            ...a,
            children: [
              "\xa9 ",
              i,
              r
                ? (0, o.jsx)("a", { href: r, className: l.href, children: e })
                : (0, o.jsx)("span", {
                    "data-testid": "flowbite-footer-copyright-span",
                    className: l.span,
                    children: e,
                  }),
            ],
          });
        },
        tz = ({ className: e, theme: t = {}, ...r }) => {
          let n = N(el().theme.footer.divider, t);
          return (0, o.jsx)("hr", {
            "data-testid": "footer-divider",
            className: s()(n.base, e),
            ...r,
          });
        },
        tq = ({
          ariaLabel: e,
          className: t,
          href: r,
          icon: n,
          theme: i = {},
          ...a
        }) => {
          let l = N(el().theme.footer.icon, i);
          return (0, o.jsx)("div", {
            children: r
              ? (0, o.jsx)("a", {
                  "aria-label": e,
                  "data-testid": "flowbite-footer-icon",
                  href: r,
                  className: s()(l.base, t),
                  ...a,
                  children: (0, o.jsx)(n, { className: l.size }),
                })
              : (0, o.jsx)(n, {
                  "data-testid": "flowbite-footer-icon",
                  className: l.size,
                  ...a,
                }),
          });
        },
        tW = ({
          as: e = "a",
          children: t,
          className: r,
          href: n,
          theme: i = {},
          ...a
        }) => {
          let l = N(el().theme.footer.groupLink.link, i);
          return (0, o.jsx)("li", {
            className: s()(l.base, r),
            children: (0, o.jsx)(e, {
              href: n,
              className: l.href,
              ...a,
              children: t,
            }),
          });
        },
        tZ = ({
          children: e,
          className: t,
          col: r = !1,
          theme: n = {},
          ...i
        }) => {
          let a = N(el().theme.footer.groupLink, n);
          return (0, o.jsx)("ul", {
            "data-testid": "footer-groupLink",
            className: s()(a.base, r && a.col, t),
            ...i,
            children: e,
          });
        },
        t$ = ({
          as: e = "h2",
          className: t,
          theme: r = {},
          title: n,
          ...i
        }) => {
          let a = N(el().theme.footer.title, r);
          return (0, o.jsx)(e, {
            "data-testid": "flowbite-footer-title",
            className: s()(a.base, t),
            ...i,
            children: n,
          });
        },
        tK = ({
          bgDark: e = !1,
          children: t,
          className: r,
          container: n = !1,
          theme: i = {},
          ...a
        }) => {
          let l = N(el().theme.footer, i);
          return (0, o.jsx)("footer", {
            "data-testid": "flowbite-footer",
            className: s()(
              l.root.base,
              e && l.root.bgDark,
              n && l.root.container,
              r
            ),
            ...a,
            children: t,
          });
        };
      (tK.displayName = "Footer"),
        (tG.displayName = "Footer.Copyright"),
        (tW.displayName = "Footer.Link"),
        (tV.displayName = "Footer.Brand"),
        (tZ.displayName = "Footer.LinkGroup"),
        (tq.displayName = "Footer.Icon"),
        (t$.displayName = "Footer.Title"),
        (tz.displayName = "Footer.Divider");
      let tX = Object.assign(tK, {
          Copyright: tG,
          Link: tW,
          LinkGroup: tZ,
          Brand: tV,
          Icon: tq,
          Title: t$,
          Divider: tz,
        }),
        tY = ({
          children: e,
          className: t,
          color: r = "default",
          theme: n = {},
          value: i,
          ...a
        }) => {
          let l = N(el().theme.helperText, n);
          return (0, o.jsx)("p", {
            className: s()(l.root.base, l.root.colors[r], t),
            ...a,
            children: i ?? e ?? "",
          });
        };
      tY.displayName = "HelperText";
      let tQ = ({
        children: e,
        className: t,
        color: r = "default",
        disabled: n = !1,
        theme: i = {},
        value: a,
        ...l
      }) => {
        let u = N(el().theme.label, i);
        return (0, o.jsx)("label", {
          className: s()(
            u.root.base,
            u.root.colors[r],
            n && u.root.disabled,
            t
          ),
          "data-testid": "flowbite-label",
          ...l,
          children: a ?? e ?? "",
        });
      };
      tQ.displayName = "Label";
      let tJ = ({
          active: e,
          children: t,
          className: r,
          href: n,
          icon: i,
          onClick: a,
          theme: l = {},
          ...u
        }) => {
          let c = N(el().theme.listGroup.item, l),
            h = void 0 !== n;
          return (0, o.jsx)("li", {
            className: s()(c.base, r),
            children: (0, o.jsxs)(h ? "a" : "button", {
              href: n,
              onClick: a,
              type: h ? void 0 : "button",
              className: s()(
                c.link.active[e ? "on" : "off"],
                c.link.base,
                c.link.href[h ? "on" : "off"]
              ),
              ...u,
              children: [
                i &&
                  (0, o.jsx)(i, {
                    "aria-hidden": !0,
                    "data-testid": "flowbite-list-group-item-icon",
                    className: c.link.icon,
                  }),
                t,
              ],
            }),
          });
        },
        t0 = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.listGroup, r);
          return (0, o.jsx)("ul", {
            className: s()(i.root.base, t),
            ...n,
            children: e,
          });
        };
      (t0.displayName = "ListGroup"),
        (tJ.displayName = "ListGroup.Item"),
        Object.assign(t0, { Item: tJ });
      let t1 = (0, l.createContext)(void 0);
      function t2() {
        let e = (0, l.useContext)(t1);
        if (!e)
          throw Error(
            "useModalContext should be used within the ModalContext provider!"
          );
        return e;
      }
      let t3 = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.modal.body, r),
            { popup: a } = t2();
          return (0, o.jsx)("div", {
            className: s()(i.base, { [i.popup]: a }, t),
            ...n,
            children: e,
          });
        },
        t5 = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.modal.footer, r),
            { popup: a } = t2();
          return (0, o.jsx)("div", {
            className: s()(i.base, { [i.popup]: !a }, t),
            ...n,
            children: e,
          });
        },
        t8 = ({
          as: e = "h3",
          children: t,
          className: r,
          theme: n = {},
          ...i
        }) => {
          let a = N(el().theme.modal.header, n),
            { popup: l, onClose: u } = t2();
          return (0, o.jsxs)("div", {
            className: s()(a.base, { [a.popup]: l }, r),
            ...i,
            children: [
              (0, o.jsx)(e, { className: a.title, children: t }),
              (0, o.jsx)("button", {
                "aria-label": "Close",
                className: a.close.base,
                type: "button",
                onClick: u,
                children: (0, o.jsx)(S, {
                  "aria-hidden": !0,
                  className: a.close.icon,
                }),
              }),
            ],
          });
        },
        t4 = ({
          children: e,
          className: t,
          dismissible: r = !1,
          onClose: n,
          popup: i,
          position: a = "center",
          root: u,
          show: c,
          size: h = "2xl",
          theme: d = {},
          ...f
        }) => {
          let p = N(el().theme.modal, d),
            [g, m] = (0, l.useState)(!1),
            y = (0, l.useRef)(null);
          if (
            ((0, l.useEffect)(
              () => (
                m(!0),
                () => {
                  let e = y.current;
                  e && (e.parentNode?.removeChild(e), (y.current = null));
                }
              ),
              []
            ),
            (0, l.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key && n && n();
              };
              return (
                document.addEventListener("keydown", e),
                () => {
                  document.removeEventListener("keydown", e);
                }
              );
            }, [n]),
            !g)
          )
            return null;
          y.current || (y.current = document.createElement("div")),
            et() &&
              y.current.parentNode !== u &&
              ((u ||= document.body).appendChild(y.current),
              (u.style.overflow = c ? "hidden" : ""));
          let b = (e) => {
            r && e.target === e.currentTarget && n && n();
          };
          return (0, e9.createPortal)(
            (0, o.jsx)(t1.Provider, {
              value: { popup: i, onClose: n },
              children: (0, o.jsx)("div", {
                "aria-hidden": !c,
                "data-testid": "modal",
                onClick: b,
                role: "dialog",
                className: s()(
                  p.root.base,
                  p.root.positions[a],
                  c ? p.root.show.on : p.root.show.off,
                  t
                ),
                ...f,
                children: (0, o.jsx)("div", {
                  className: s()(p.content.base, p.root.sizes[h]),
                  children: (0, o.jsx)("div", {
                    className: p.content.inner,
                    children: e,
                  }),
                }),
              }),
            }),
            y.current
          );
        };
      (t4.displayName = "Modal"),
        (t8.displayName = "Modal.Header"),
        (t3.displayName = "Modal.Body"),
        (t5.displayName = "Modal.Footer"),
        Object.assign(t4, { Header: t8, Body: t3, Footer: t5 });
      let t6 = ({
          as: e = "a",
          children: t,
          className: r,
          theme: n = {},
          ...i
        }) => {
          let a = N(el().theme.navbar.brand, n);
          return (0, o.jsx)(e, {
            className: s()(a.base, r),
            ...i,
            children: t,
          });
        },
        t7 = (0, l.createContext)(void 0);
      function t9() {
        let e = (0, l.useContext)(t7);
        if (!e)
          throw Error(
            "useNavBarContext should be used within the NavbarContext provider!"
          );
        return e;
      }
      let re = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { isOpen: i } = t9(),
            a = N(el().theme.navbar.collapse, r);
          return (0, o.jsx)("div", {
            "data-testid": "flowbite-navbar-collapse",
            className: s()(a.base, a.hidden[i ? "off" : "on"], t),
            ...n,
            children: (0, o.jsx)("ul", { className: a.list, children: e }),
          });
        },
        rt = ({
          active: e,
          as: t = "a",
          disabled: r,
          children: n,
          className: i,
          theme: a = {},
          ...l
        }) => {
          let u = N(el().theme.navbar.link, a);
          return (0, o.jsx)("li", {
            children: (0, o.jsx)(t, {
              className: s()(
                u.base,
                { [u.active.on]: e, [u.active.off]: !e && !r },
                u.disabled[r ? "on" : "off"],
                i
              ),
              ...l,
              children: n,
            }),
          });
        },
        rr = ({
          barIcon: e = i.GoThreeBars,
          className: t,
          theme: r = {},
          ...n
        }) => {
          let { isOpen: a, setIsOpen: l } = t9(),
            u = N(el().theme.navbar.toggle, r),
            c = () => {
              l(!a);
            };
          return (0, o.jsxs)("button", {
            "data-testid": "flowbite-navbar-toggle",
            onClick: c,
            className: s()(u.base, t),
            ...n,
            children: [
              (0, o.jsx)("span", {
                className: "sr-only",
                children: "Open main menu",
              }),
              (0, o.jsx)(e, { "aria-hidden": !0, className: u.icon }),
            ],
          });
        },
        rn = ({
          border: e,
          children: t,
          className: r,
          fluid: n = !1,
          menuOpen: i,
          rounded: a,
          theme: u = {},
          ...c
        }) => {
          let [h, d] = (0, l.useState)(i),
            f = N(el().theme.navbar.root, u);
          return (0, o.jsx)(t7.Provider, {
            value: { isOpen: h, setIsOpen: d },
            children: (0, o.jsx)("nav", {
              className: s()(
                f.base,
                f.bordered[e ? "on" : "off"],
                f.rounded[a ? "on" : "off"],
                r
              ),
              ...c,
              children: (0, o.jsx)("div", {
                className: s()(f.inner.base, f.inner.fluid[n ? "on" : "off"]),
                children: t,
              }),
            }),
          });
        };
      (rn.displayName = "Navbar"),
        (t6.displayName = "Navbar.Brand"),
        (re.displayName = "Navbar.Collapse"),
        (rt.displayName = "Navbar.Link"),
        (rr.displayName = "Navbar.Toggle");
      let ri = Object.assign(rn, {
          Brand: t6,
          Collapse: re,
          Link: rt,
          Toggle: rr,
        }),
        ro = (e, t) =>
          e >= t ? [] : [...Array(t - e + 1).keys()].map((t) => t + e),
        ra = ({
          active: e,
          children: t,
          className: r,
          onClick: n,
          theme: i = {},
          ...a
        }) => {
          let l = N(el().theme.pagination, i);
          return (0, o.jsx)("button", {
            className: s()({ [l.pages.selector.active]: e }, r),
            onClick: n,
            ...a,
            children: t,
          });
        };
      ra.displayName = "Pagination.Button";
      let rs = ({
        children: e,
        className: t,
        onClick: r,
        theme: n = {},
        disabled: i = !1,
        ...a
      }) => {
        let l = N(el().theme.pagination, n);
        return (0, o.jsx)("button", {
          className: s()({ [l.pages.selector.disabled]: i }, t),
          disabled: i,
          onClick: r,
          ...a,
          children: e,
        });
      };
      rs.displayName = "Pagination.Navigation";
      let rl = ({
        className: e,
        currentPage: t,
        layout: r = "pagination",
        nextLabel: n = "Next",
        onPageChange: i,
        previousLabel: a = "Previous",
        renderPaginationButton: l = (e) => (0, o.jsx)(ra, { ...e }),
        showIcons: u = !1,
        theme: c = {},
        totalPages: h,
        ...d
      }) => {
        let f = N(el().theme.pagination, c),
          p = Math.max(1, t - 3),
          g = Math.min(t + 3, h),
          m = () => {
            i(Math.min(t + 1, h));
          },
          v = () => {
            i(Math.max(t - 1, 1));
          };
        return (0, o.jsxs)("nav", {
          className: s()(f.base, e),
          ...d,
          children: [
            "table" === r &&
              (0, o.jsxs)("div", {
                className: f.layout.table.base,
                children: [
                  "Showing ",
                  (0, o.jsx)("span", {
                    className: f.layout.table.span,
                    children: p,
                  }),
                  " to\xa0",
                  (0, o.jsx)("span", {
                    className: f.layout.table.span,
                    children: g,
                  }),
                  " of\xa0",
                  (0, o.jsx)("span", {
                    className: f.layout.table.span,
                    children: h,
                  }),
                  " Entries",
                ],
              }),
            (0, o.jsxs)("ul", {
              className: f.pages.base,
              children: [
                (0, o.jsx)("li", {
                  children: (0, o.jsxs)(rs, {
                    className: s()(
                      f.pages.previous.base,
                      u && f.pages.showIcon
                    ),
                    onClick: v,
                    disabled: 1 === t,
                    children: [
                      u &&
                        (0, o.jsx)(y, {
                          "aria-hidden": !0,
                          className: f.pages.previous.icon,
                        }),
                      a,
                    ],
                  }),
                }),
                "pagination" === r &&
                  ro(p, g).map((e) =>
                    (0, o.jsx)(
                      "li",
                      {
                        "aria-current": e === t ? "page" : void 0,
                        children: l({
                          className: s()(f.pages.selector.base, {
                            [f.pages.selector.active]: t === e,
                          }),
                          active: e === t,
                          onClick: () => i(e),
                          children: e,
                        }),
                      },
                      e
                    )
                  ),
                (0, o.jsx)("li", {
                  children: (0, o.jsxs)(rs, {
                    className: s()(f.pages.next.base, u && f.pages.showIcon),
                    onClick: m,
                    disabled: t === h,
                    children: [
                      n,
                      u &&
                        (0, o.jsx)(b, {
                          "aria-hidden": !0,
                          className: f.pages.next.icon,
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      (rl.displayName = "Pagination"), Object.assign(rl, { Button: ra });
      let ru = ({
        className: e,
        color: t = "blue",
        labelProgress: r = !1,
        labelText: n = !1,
        progress: i,
        progressLabelPosition: a = "inside",
        size: u = "md",
        textLabel: c = "progressbar",
        textLabelPosition: h = "inside",
        theme: d = {},
        ...f
      }) => {
        let p = (0, l.useId)(),
          g = N(el().theme.progress, d);
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            id: p,
            "aria-label": c,
            "aria-valuenow": i,
            role: "progressbar",
            ...f,
            children: [
              ((c && n && "outside" === h) ||
                (i > 0 && r && "outside" === a)) &&
                (0, o.jsxs)("div", {
                  className: g.label,
                  "data-testid": "flowbite-progress-outer-label-container",
                  children: [
                    c &&
                      n &&
                      "outside" === h &&
                      (0, o.jsx)("span", {
                        "data-testid": "flowbite-progress-outer-text-label",
                        children: c,
                      }),
                    r &&
                      "outside" === a &&
                      (0, o.jsxs)("span", {
                        "data-testid": "flowbite-progress-outer-progress-label",
                        children: [i, "%"],
                      }),
                  ],
                }),
              (0, o.jsx)("div", {
                className: s()(g.base, g.size[u], e),
                children: (0, o.jsxs)("div", {
                  style: { width: `${i}%` },
                  className: s()(g.bar, g.color[t], g.size[u]),
                  children: [
                    c &&
                      n &&
                      "inside" === h &&
                      (0, o.jsx)("span", {
                        "data-testid": "flowbite-progress-inner-text-label",
                        children: c,
                      }),
                    i > 0 &&
                      r &&
                      "inside" === a &&
                      (0, o.jsxs)("span", {
                        "data-testid": "flowbite-progress-inner-progress-label",
                        children: [i, "%"],
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      ru.displayName = "Progress";
      let rc = (0, l.forwardRef)(({ className: e, theme: t = {}, ...r }, n) => {
        let i = N(el().theme.radio, t);
        return (0, o.jsx)("input", {
          ref: n,
          type: "radio",
          className: s()(i.root.base, e),
          ...r,
        });
      });
      rc.displayName = "Radio";
      let rh = (0, l.forwardRef)(
        ({ className: e, sizing: t = "md", theme: r = {}, ...n }, i) => {
          let a = N(el().theme.rangeSlider, r);
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)("div", {
              "data-testid": "flowbite-range-slider",
              className: s()(a.root.base, e),
              children: (0, o.jsx)("div", {
                className: a.field.base,
                children: (0, o.jsx)("input", {
                  ref: i,
                  type: "range",
                  className: s()(a.field.input.base, a.field.input.sizes[t]),
                  ...n,
                }),
              }),
            }),
          });
        }
      );
      rh.displayName = "RangeSlider";
      let rd = ({
          children: e,
          className: t,
          percentFilled: r = 0,
          theme: n = {},
          ...i
        }) => {
          let a = N(el().theme.rating.advanced, n);
          return (0, o.jsxs)("div", {
            className: s()(a.base, t),
            ...i,
            children: [
              (0, o.jsx)("span", { className: a.label, children: e }),
              (0, o.jsx)("div", {
                className: a.progress.base,
                children: (0, o.jsx)("div", {
                  className: a.progress.fill,
                  "data-testid": "flowbite-rating-fill",
                  style: { width: `${r}%` },
                }),
              }),
              (0, o.jsx)("span", {
                className: a.progress.label,
                children: `${r}%`,
              }),
            ],
          });
        },
        rf = (0, l.createContext)(void 0),
        rp = ({
          className: e,
          filled: t = !0,
          starIcon: r = x,
          theme: n = {},
          ...i
        }) => {
          let { size: a = "sm" } = (function () {
              let e = (0, l.useContext)(rf);
              if (!e)
                throw Error(
                  "useRatingContext should be used within the RatingContext provider!"
                );
              return e;
            })(),
            u = N(el().theme.rating.star, n);
          return (0, o.jsx)(r, {
            "data-testid": "flowbite-rating-star",
            className: s()(u.sizes[a], u[t ? "filled" : "empty"], e),
            ...i,
          });
        },
        rg = ({
          children: e,
          className: t,
          size: r = "sm",
          theme: n = {},
          ...i
        }) => {
          let a = N(el().theme.rating, n);
          return (0, o.jsx)(rf.Provider, {
            value: { size: r },
            children: (0, o.jsx)("div", {
              className: s()(a.root.base, t),
              ...i,
              children: e,
            }),
          });
        };
      (rg.displayName = "Rating"),
        (rp.displayName = "Rating.Star"),
        (rd.displayName = "Rating.Advanced"),
        Object.assign(rg, { Star: rp, Advanced: rd });
      let rm = (0, l.forwardRef)(
        (
          {
            addon: e,
            children: t,
            className: r,
            color: n = "gray",
            helperText: i,
            icon: a,
            shadow: l,
            sizing: u = "md",
            theme: c = {},
            ...h
          },
          d
        ) => {
          let f = N(el().theme.select, c);
          return (0, o.jsxs)("div", {
            className: s()(f.base, r),
            children: [
              e && (0, o.jsx)("span", { className: f.addon, children: e }),
              (0, o.jsxs)("div", {
                className: f.field.base,
                children: [
                  a &&
                    (0, o.jsx)("div", {
                      className: f.field.icon.base,
                      children: (0, o.jsx)(a, { className: f.field.icon.svg }),
                    }),
                  (0, o.jsx)("select", {
                    className: s()(
                      f.field.select.base,
                      f.field.select.colors[n],
                      f.field.select.withIcon[a ? "on" : "off"],
                      f.field.select.withAddon[e ? "on" : "off"],
                      f.field.select.withShadow[l ? "on" : "off"],
                      f.field.select.sizes[u]
                    ),
                    ...h,
                    ref: d,
                    children: t,
                  }),
                  i && (0, o.jsx)(tY, { color: n, children: i }),
                ],
              }),
            ],
          });
        }
      );
      rm.displayName = "Select";
      let ry = (0, l.createContext)(void 0);
      function rb() {
        let e = (0, l.useContext)(ry);
        if (!e)
          throw Error(
            "useSidebarContext should be used within the SidebarContext provider!"
          );
        return e;
      }
      let rv = ({
        children: e,
        color: t = "info",
        className: r,
        theme: n = {},
        ...i
      }) => {
        let { isCollapsed: a } = rb(),
          l = N(el().theme.sidebar.cta, n);
        return (0, o.jsx)("div", {
          "data-testid": "sidebar-cta",
          hidden: a,
          className: s()(l.base, l.color[t], r),
          ...i,
          children: e,
        });
      };
      rv.displayName = "Sidebar.CTA";
      let rx = (0, l.createContext)(void 0),
        rw = ({
          children: e,
          className: t,
          icon: r,
          label: n,
          open: i = !1,
          theme: a = {},
          ...u
        }) => {
          let c = (0, l.useId)(),
            { isCollapsed: h } = rb(),
            [d, f] = (0, l.useState)(i),
            p = N(el().theme.sidebar.collapse, a);
          (0, l.useEffect)(() => f(i), [i]);
          let g = ({ children: e }) =>
            (0, o.jsx)("li", {
              children:
                h && !d
                  ? (0, o.jsx)(r2, {
                      content: n,
                      placement: "right",
                      children: e,
                    })
                  : e,
            });
          return (0, o.jsxs)(g, {
            children: [
              (0, o.jsxs)("button", {
                id: `flowbite-sidebar-collapse-${c}`,
                onClick: () => f(!d),
                title: n,
                type: "button",
                className: s()(p.button, t),
                ...u,
                children: [
                  r &&
                    (0, o.jsx)(r, {
                      "aria-hidden": !0,
                      "data-testid": "flowbite-sidebar-collapse-icon",
                      className: s()(
                        p.icon.base,
                        p.icon.open[d ? "on" : "off"]
                      ),
                    }),
                  h
                    ? (0, o.jsx)("span", { className: "sr-only", children: n })
                    : (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)("span", {
                            "data-testid": "flowbite-sidebar-collapse-label",
                            className: p.label.base,
                            children: n,
                          }),
                          (0, o.jsx)(m, {
                            "aria-hidden": !0,
                            className: p.label.icon,
                          }),
                        ],
                      }),
                ],
              }),
              (0, o.jsx)("ul", {
                "aria-labelledby": `flowbite-sidebar-collapse-${c}`,
                hidden: !d,
                className: p.list,
                children: (0, o.jsx)(rx.Provider, {
                  value: { isInsideCollapse: !0 },
                  children: e,
                }),
              }),
            ],
          });
        };
      rw.displayName = "Sidebar.Collapse";
      let rC = ({ id: e, isCollapsed: t, tooltipChildren: r, children: n }) =>
          (0, o.jsx)("li", {
            children: t
              ? (0, o.jsx)(r2, {
                  content: (0, o.jsx)(rk, { id: e, children: r }),
                  placement: "right",
                  children: n,
                })
              : n,
          }),
        rk = ({ id: e, children: t }) => (0, o.jsx)(rE, { id: e, children: t }),
        rE = ({ id: e, children: t }) => {
          let r = el().theme.sidebar.item;
          return (0, o.jsx)("span", {
            "data-testid": "flowbite-sidebar-item-content",
            id: `flowbite-sidebar-item-${e}`,
            className: s()(r.content.base),
            children: t,
          });
        },
        rT = (0, l.forwardRef)(
          (
            {
              active: e,
              as: t = "a",
              children: r,
              className: n,
              icon: i,
              label: a,
              labelColor: u = "info",
              theme: c = {},
              ...h
            },
            d
          ) => {
            let f = (0, l.useId)(),
              { isCollapsed: p } = rb(),
              { isInsideCollapse: g } = (function () {
                let e = (0, l.useContext)(rx);
                if (!e)
                  throw Error(
                    "useSidebarItemContext should be used within the SidebarItemContext provider!"
                  );
                return e;
              })(),
              m = N(el().theme.sidebar.item, c);
            return (0, o.jsx)(rC, {
              id: f,
              isCollapsed: p,
              tooltipChildren: r,
              children: (0, o.jsxs)(t, {
                "aria-labelledby": `flowbite-sidebar-item-${f}`,
                ref: d,
                className: s()(
                  m.base,
                  e && m.active,
                  !p && g && m.collapsed?.insideCollapse,
                  n
                ),
                ...h,
                children: [
                  i &&
                    (0, o.jsx)(i, {
                      "aria-hidden": !0,
                      "data-testid": "flowbite-sidebar-item-icon",
                      className: s()(m.icon?.base, e && m.icon?.active),
                    }),
                  p &&
                    !i &&
                    (0, o.jsx)("span", {
                      className: m.collapsed?.noIcon,
                      children: r.charAt(0).toLocaleUpperCase() ?? "?",
                    }),
                  !p && (0, o.jsx)(rE, { id: f, children: r }),
                  !p &&
                    a &&
                    (0, o.jsx)(H, {
                      color: u,
                      "data-testid": "flowbite-sidebar-label",
                      hidden: p,
                      className: m.label,
                      children: a,
                    }),
                ],
              }),
            });
          }
        );
      rT.displayName = "Sidebar.Item";
      let rS = ({ children: e, className: t, ...r }) => {
        let n = el().theme.sidebar.itemGroup;
        return (0, o.jsx)("ul", {
          "data-testid": "flowbite-sidebar-item-group",
          className: s()(n, t),
          ...r,
          children: (0, o.jsx)(rx.Provider, {
            value: { isInsideCollapse: !1 },
            children: e,
          }),
        });
      };
      rS.displayName = "Sidebar.ItemGroup";
      let rP = ({ children: e, className: t, ...r }) => {
        let n = el().theme.sidebar.items;
        return (0, o.jsx)("div", {
          className: s()(n, t),
          "data-testid": "flowbite-sidebar-items",
          ...r,
          children: e,
        });
      };
      rP.displayName = "Sidebar.Items";
      let rA = ({
        children: e,
        className: t,
        href: r,
        img: n,
        imgAlt: i = "",
        theme: a = {},
        ...u
      }) => {
        let c = (0, l.useId)(),
          { isCollapsed: h } = rb(),
          d = N(el().theme.sidebar.logo, a);
        return (0, o.jsxs)("a", {
          "aria-labelledby": `flowbite-sidebar-logo-${c}`,
          href: r,
          className: s()(d.base, t),
          ...u,
          children: [
            (0, o.jsx)("img", { alt: i, src: n, className: d.img }),
            (0, o.jsx)("span", {
              className: d.collapsed[h ? "on" : "off"],
              id: `flowbite-sidebar-logo-${c}`,
              children: e,
            }),
          ],
        });
      };
      rA.displayName = "Sidebar.Logo";
      let rN = ({
        children: e,
        as: t = "nav",
        collapseBehavior: r = "collapse",
        collapsed: n = !1,
        theme: i = {},
        className: a,
        ...l
      }) => {
        let u = N(el().theme.sidebar, i);
        return (0, o.jsx)(ry.Provider, {
          value: { isCollapsed: n },
          children: (0, o.jsx)(t, {
            "aria-label": "Sidebar",
            hidden: n && "hide" === r,
            className: s()(u.root.base, u.root.collapsed[n ? "on" : "off"], a),
            ...l,
            children: (0, o.jsx)("div", {
              className: u.root.inner,
              children: e,
            }),
          }),
        });
      };
      (rN.displayName = "Sidebar"),
        Object.assign(rN, {
          Collapse: rw,
          CTA: rv,
          Item: rT,
          Items: rP,
          ItemGroup: rS,
          Logo: rA,
        });
      let rj = ({
        className: e,
        color: t = "info",
        light: r,
        size: n = "md",
        theme: i = {},
        ...a
      }) => {
        let l = N(el().theme.spinner, i);
        return (0, o.jsx)("span", {
          role: "status",
          ...a,
          children: (0, o.jsxs)("svg", {
            fill: "none",
            viewBox: "0 0 100 101",
            className: s()(
              l.base,
              l.color[t],
              l.light[r ? "on" : "off"].base,
              l.light[r ? "on" : "off"].color[t],
              l.size[n],
              e
            ),
            children: [
              (0, o.jsx)("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor",
              }),
              (0, o.jsx)("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill",
              }),
            ],
          }),
        });
      };
      rj.displayName = "Spinner";
      let rR = ({ children: e, className: t }) =>
        (0, o.jsx)("div", { className: t, children: e });
      rR.displayName = "Tabs.Item";
      let rL = (0, l.forwardRef)(
        (
          {
            children: e,
            className: t,
            onActiveTabChange: r,
            style: n = "default",
            theme: i = {},
            ...a
          },
          u
        ) => {
          let c = N(el().theme.tab, i),
            h = (0, l.useId)(),
            d = (0, l.useMemo)(
              () => l.Children.map(e, ({ props: e }) => e),
              [e]
            ),
            f = (0, l.useRef)([]),
            [p, g] = (0, l.useState)(
              Math.max(
                0,
                d.findIndex((e) => e.active)
              )
            ),
            [m, y] = (0, l.useState)(-1),
            b = (e) => {
              g(e), r && r(e);
            },
            v = ({ target: e }) => {
              b(e), y(e);
            },
            x = ({ event: e, target: t }) => {
              "ArrowLeft" === e.key && y(Math.max(0, m - 1)),
                "ArrowRight" === e.key && y(Math.min(d.length - 1, m + 1)),
                "Enter" === e.key && (b(t), y(t));
            },
            w = c.tablist.tabitem.styles[n];
          return (
            (0, l.useEffect)(() => {
              f.current[m]?.focus();
            }, [m]),
            (0, l.useImperativeHandle)(u, () => ({ setActiveTab: b })),
            (0, o.jsxs)("div", {
              className: s()(c.base, t),
              children: [
                (0, o.jsx)("div", {
                  "aria-label": "Tabs",
                  role: "tablist",
                  className: s()(c.tablist.base, c.tablist.styles[n], t),
                  ...a,
                  children: d.map((e, t) =>
                    (0, o.jsxs)(
                      "button",
                      {
                        type: "button",
                        "aria-controls": `${h}-tabpanel-${t}`,
                        "aria-selected": t === p,
                        className: s()(
                          c.tablist.tabitem.base,
                          { ...w },
                          {
                            [w.active.on]: t === p,
                            [w.active.off]: t !== p && !e.disabled,
                          }
                        ),
                        disabled: e.disabled,
                        id: `${h}-tab-${t}`,
                        onClick: () => v({ target: t }),
                        onKeyDown: (e) => x({ event: e, target: t }),
                        ref: (e) => (f.current[t] = e),
                        role: "tab",
                        tabIndex: t === m ? 0 : -1,
                        children: [
                          e.icon &&
                            (0, o.jsx)(e.icon, {
                              className: c.tablist.tabitem.icon,
                            }),
                          e.title,
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, o.jsx)("div", {
                  children: d.map((e, t) =>
                    (0, o.jsx)(
                      "div",
                      {
                        "aria-labelledby": `${h}-tab-${t}`,
                        className: c.tabpanel,
                        hidden: t !== p,
                        id: `${h}-tabpanel-${t}`,
                        role: "tabpanel",
                        tabIndex: 0,
                        children: e.children,
                      },
                      t
                    )
                  ),
                }),
              ],
            })
          );
        }
      );
      rL.displayName = "Tabs.Group";
      let rM = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.table.body, r);
          return (0, o.jsx)("tbody", {
            className: s()(i.base, t),
            ...n,
            children: e,
          });
        },
        rO = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.table.body.cell, r);
          return (0, o.jsx)("td", {
            className: s()(i.base, t),
            ...n,
            children: e,
          });
        },
        rB = (0, l.createContext)(void 0),
        rD = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.table, r);
          return (0, o.jsx)("thead", {
            className: s()(i.head.base, t),
            ...n,
            children: (0, o.jsx)("tr", { children: e }),
          });
        },
        rI = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.table.head.cell, r);
          return (0, o.jsx)("th", {
            className: s()(i.base, t),
            ...n,
            children: e,
          });
        },
        rF = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { hoverable: i, striped: a } = (function () {
              let e = (0, l.useContext)(rB);
              if (!e)
                throw Error(
                  "useTableContext should be used within the TableContext provider!"
                );
              return e;
            })(),
            u = N(el().theme.table.row, r);
          return (0, o.jsx)("tr", {
            "data-testid": "table-row-element",
            className: s()(u.base, a && u.striped, i && u.hovered, t),
            ...n,
            children: e,
          });
        },
        r_ = ({
          children: e,
          className: t,
          hoverable: r,
          striped: n,
          theme: i = {},
          ...a
        }) => {
          let l = N(el().theme.table, i);
          return (0, o.jsx)("div", {
            "data-testid": "table-element",
            className: s()(l.root.wrapper),
            children: (0, o.jsxs)(rB.Provider, {
              value: { striped: n, hoverable: r },
              children: [
                (0, o.jsx)("div", { className: s()(l.root.shadow, t) }),
                (0, o.jsx)("table", {
                  className: s()(l.root.base, t),
                  ...a,
                  children: e,
                }),
              ],
            }),
          });
        };
      (r_.displayName = "Table"),
        (rD.displayName = "Table.Head"),
        (rM.displayName = "Table.Body"),
        (rF.displayName = "Table.Row"),
        (rO.displayName = "Table.Cell"),
        (rI.displayName = "Table.HeadCell"),
        Object.assign(r_, {
          Head: rD,
          Body: rM,
          Row: rF,
          Cell: rO,
          HeadCell: rI,
        });
      let rH = (0, l.forwardRef)(
        (
          {
            addon: e,
            className: t,
            color: r = "gray",
            helperText: n,
            icon: i,
            rightIcon: a,
            shadow: l,
            sizing: u = "md",
            theme: c = {},
            ...h
          },
          d
        ) => {
          let f = N(el().theme.textInput, c);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)("div", {
                className: s()(f.base, t),
                children: [
                  e && (0, o.jsx)("span", { className: f.addon, children: e }),
                  (0, o.jsxs)("div", {
                    className: f.field.base,
                    children: [
                      i &&
                        (0, o.jsx)("div", {
                          className: f.field.icon.base,
                          children: (0, o.jsx)(i, {
                            className: f.field.icon.svg,
                          }),
                        }),
                      a &&
                        (0, o.jsx)("div", {
                          "data-testid": "right-icon",
                          className: f.field.rightIcon.base,
                          children: (0, o.jsx)(a, {
                            className: f.field.rightIcon.svg,
                          }),
                        }),
                      (0, o.jsx)("input", {
                        className: s()(
                          f.field.input.base,
                          f.field.input.colors[r],
                          f.field.input.withIcon[i ? "on" : "off"],
                          f.field.input.withAddon[e ? "on" : "off"],
                          f.field.input.withShadow[l ? "on" : "off"],
                          f.field.input.sizes[u]
                        ),
                        ...h,
                        ref: d,
                      }),
                    ],
                  }),
                ],
              }),
              n && (0, o.jsx)(tY, { color: r, children: n }),
            ],
          });
        }
      );
      rH.displayName = "TextInput";
      let rU = (0, l.forwardRef)(
        (
          {
            className: e,
            color: t = "gray",
            helperText: r,
            shadow: n,
            theme: i = {},
            ...a
          },
          l
        ) => {
          let u = N(el().theme.textarea, i);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("textarea", {
                ref: l,
                className: s()(
                  u.base,
                  u.colors[t],
                  u.withShadow[n ? "on" : "off"],
                  e
                ),
                ...a,
              }),
              r && (0, o.jsx)(tY, { color: t, children: r }),
            ],
          });
        }
      );
      rU.displayName = "Textarea";
      let rV = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.timeline.item.content, r).body;
          return (0, o.jsx)("div", { className: s()(i, t), ...n, children: e });
        },
        rG = (0, l.createContext)(void 0);
      function rz() {
        let e = (0, l.useContext)(rG);
        if (!e)
          throw Error(
            "useTimelineContext should be used within the TimelineContext providor!"
          );
        return e;
      }
      let rq = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.timeline.item.content, r),
            { horizontal: a } = rz();
          return (0, o.jsx)("div", {
            "data-testid": "timeline-content",
            className: s()(a && i.root.base, t),
            ...n,
            children: e,
          });
        },
        rW = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.timeline.item, r),
            { horizontal: a } = rz();
          return (0, o.jsx)("li", {
            "data-testid": "timeline-item",
            className: s()(a && i.root.horizontal, !a && i.root.vertical, t),
            ...n,
            children: e,
          });
        },
        rZ = ({ children: e, className: t, icon: r, theme: n = {}, ...i }) => {
          let a = N(el().theme.timeline.item.point, n),
            { horizontal: l } = rz();
          return (0, o.jsxs)("div", {
            "data-testid": "timeline-point",
            className: s()(l && a.horizontal, !l && a.vertical, t),
            ...i,
            children: [
              e,
              r
                ? (0, o.jsx)("span", {
                    className: s()(a.marker.icon.wrapper),
                    children: (0, o.jsx)(r, {
                      "aria-hidden": !0,
                      className: s()(a.marker.icon.base),
                    }),
                  })
                : (0, o.jsx)("div", {
                    className: s()(
                      l && a.marker.base.horizontal,
                      !l && a.marker.base.vertical
                    ),
                  }),
              l && (0, o.jsx)("div", { className: s()(a.line) }),
            ],
          });
        },
        r$ = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let i = N(el().theme.timeline.item.content, r).time;
          return (0, o.jsx)("time", {
            className: s()(i, t),
            ...n,
            children: e,
          });
        },
        rK = ({
          as: e = "h3",
          children: t,
          className: r,
          theme: n = {},
          ...i
        }) => {
          let a = N(el().theme.timeline.item.content, n).title;
          return (0, o.jsx)(e, { className: s()(a, r), ...i, children: t });
        },
        rX = ({
          children: e,
          className: t,
          horizontal: r,
          theme: n = {},
          ...i
        }) => {
          let a = N(el().theme.timeline, n);
          return (0, o.jsx)(rG.Provider, {
            value: { horizontal: r },
            children: (0, o.jsx)("ol", {
              "data-testid": "timeline-component",
              className: s()(
                r && a.root.direction.horizontal,
                !r && a.root.direction.vertical,
                t
              ),
              ...i,
              children: e,
            }),
          });
        };
      (rX.displayName = "Timeline"),
        (rW.displayName = "Timeline.Item"),
        (rZ.displayName = "Timeline.Point"),
        (rq.displayName = "Timeline.Content"),
        (r$.displayName = "Timeline.Time"),
        (rK.displayName = "Timeline.Title"),
        (rV.displayName = "Timeline.Body"),
        Object.assign(rX, {
          Item: rW,
          Point: rZ,
          Content: rq,
          Time: r$,
          Title: rK,
          Body: rV,
        });
      let rY = (0, l.createContext)(void 0),
        rQ = ({
          className: e,
          onClick: t,
          theme: r = {},
          xIcon: n = C,
          ...i
        }) => {
          let a = N(el().theme.toast.toggle, r),
            {
              duration: u,
              isClosed: c,
              isRemoved: h,
              setIsClosed: d,
              setIsRemoved: f,
            } = (function () {
              let e = (0, l.useContext)(rY);
              if (!e)
                throw Error(
                  "useToastContext should be used within the ToastContext provider!"
                );
              return e;
            })(),
            p = (e) => {
              t && t(e), d(!c), setTimeout(() => f(!h), u);
            };
          return (0, o.jsx)("button", {
            "aria-label": "Close",
            onClick: p,
            type: "button",
            className: s()(a.base, e),
            ...i,
            children: (0, o.jsx)(n, { "aria-hidden": !0, className: a.icon }),
          });
        },
        rJ = {
          75: "duration-75",
          100: "duration-100",
          150: "duration-150",
          200: "duration-200",
          300: "duration-300",
          500: "duration-500",
          700: "duration-700",
          1e3: "duration-1000",
        },
        r0 = ({
          children: e,
          className: t,
          duration: r = 300,
          theme: n = {},
          ...i
        }) => {
          let [a, u] = (0, l.useState)(!1),
            [c, h] = (0, l.useState)(!1),
            d = N(el().theme.toast, n);
          return (0, o.jsx)(rY.Provider, {
            value: {
              duration: r,
              isClosed: a,
              isRemoved: c,
              setIsClosed: u,
              setIsRemoved: h,
            },
            children: (0, o.jsx)("div", {
              "data-testid": "flowbite-toast",
              className: s()(
                d.root.base,
                rJ[r],
                { [d.root.closed]: a },
                { [d.root.removed]: c },
                t
              ),
              ...i,
              children: e,
            }),
          });
        };
      (r0.displayName = "Toast"),
        (rQ.displayName = "Toast.Toggle"),
        Object.assign(r0, { Toggle: rQ });
      let r1 = ({
        checked: e,
        className: t,
        color: r = "blue",
        disabled: n,
        label: i,
        name: a,
        onChange: u,
        theme: c = {},
        ...h
      }) => {
        let d = (0, l.useId)(),
          f = N(el().theme.toggleSwitch, c),
          p = () => u(!e),
          g = (e) => {
            e.preventDefault(), p();
          },
          m = (e) => {
            e.preventDefault();
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            a &&
              e &&
              (0, o.jsx)("input", {
                checked: e,
                hidden: !0,
                name: a,
                readOnly: !0,
                type: "checkbox",
                className: "sr-only",
              }),
            (0, o.jsxs)("button", {
              "aria-checked": e,
              "aria-labelledby": `${d}-flowbite-toggleswitch-label`,
              disabled: n,
              id: `${d}-flowbite-toggleswitch`,
              onClick: g,
              onKeyPress: m,
              role: "switch",
              tabIndex: 0,
              type: "button",
              className: s()(f.root.base, f.root.active[n ? "off" : "on"], t),
              ...h,
              children: [
                (0, o.jsx)("div", {
                  "data-testid": "flowbite-toggleswitch-toggle",
                  className: s()(
                    f.toggle.base,
                    f.toggle.checked[e ? "on" : "off"],
                    !n && e && f.toggle.checked.color[r]
                  ),
                }),
                (0, o.jsx)("span", {
                  "data-testid": "flowbite-toggleswitch-label",
                  id: `${d}-flowbite-toggleswitch-label`,
                  className: f.root.label,
                  children: i,
                }),
              ],
            }),
          ],
        });
      };
      r1.displayName = "ToggleSwitch";
      let r2 = ({
        animation: e = "duration-300",
        arrow: t = !0,
        children: r,
        className: n,
        content: i,
        placement: a = "top",
        style: s = "dark",
        theme: l = {},
        trigger: u = "hover",
        ...c
      }) => {
        let h = N(el().theme.tooltip, l);
        return (0, o.jsx)(tO, {
          animation: e,
          arrow: t,
          content: i,
          placement: a,
          style: s,
          theme: h,
          trigger: u,
          className: n,
          ...c,
          children: r,
        });
      };
      r2.displayName = "Tooltip";
      let r3 = (e) => {
        let { color: t, active: r, className: n, ...i } = e;
        return (0, o.jsx)(q, {
          theme: {
            base: "group flex h-min items-center justify-center p-0.5 text-center font-medium border focus:ring-4 focus:z-10",
            color: {
              teal: "text-pt-purple-800 bg-pt-teal border-pt-teal hover:bg-pt-teal-dark focus:ring-pt-teal-dark",
              purple:
                "text-pt-purple-700 bg-pt-purple-100 border-pt-purple-100 hover:bg-pt-purple-200 focus:ring-pt-purple-50",
              white:
                "text-gray-900 bg-white border-white hover:bg-gray-100 focus:ring-gray-100",
              transparent:
                "text-pt-purple-100 bg-pt-transparent border-pt-transparent hover:bg-pt-purple-50/20 focus:ring-pt-purple-50",
            },
            outline: {
              color: {
                teal: "!text-pt-teal border-pt-teal bg-opacity-0 hover:!text-pt-purple-800 hover:bg-opacity-100",
                purple:
                  "!text-pt-purple-100 border-pt-purple-100 bg-opacity-0 hover:!bg-pt-transparent hover:bg-opacity-100",
                white:
                  "!text-white border-white bg-opacity-0 hover:!text-gray-900 hover:bg-opacity-100",
                transparent:
                  "!text-pt-purple-50 border-pt-transparent bg-opacity-0 hover:!text-pt-purple-100 hover:bg-opacity-100",
              },
              on: "flex justify-center",
            },
            disabled: "cursor-not-allowed opacity-50 pointer-events-none",
          },
          color: null != t ? t : "teal",
          className: s()({ outline: r }, n),
          ...i,
        });
      };
      r(8518);
      var r5 = r(9902),
        r8 = r(6610),
        r4 = r(2533);
      let r6 = { delta: 0, timestamp: 0, isProcessing: !1 },
        r7 = !0,
        r9 = !1,
        ne = ["read", "update", "preRender", "render", "postRender"],
        nt = ne.reduce(
          (e, t) => (
            (e[t] = (function (e) {
              let t = [],
                r = [],
                n = 0,
                i = !1,
                o = !1,
                a = new WeakSet(),
                s = {
                  schedule: (e, o = !1, s = !1) => {
                    let l = s && i,
                      u = l ? t : r;
                    return (
                      o && a.add(e),
                      -1 === u.indexOf(e) &&
                        (u.push(e), l && i && (n = t.length)),
                      e
                    );
                  },
                  cancel: (e) => {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1), a.delete(e);
                  },
                  process: (l) => {
                    if (i) {
                      o = !0;
                      return;
                    }
                    if (
                      ((i = !0),
                      ([t, r] = [r, t]),
                      (r.length = 0),
                      (n = t.length))
                    )
                      for (let r = 0; r < n; r++) {
                        let n = t[r];
                        n(l), a.has(n) && (s.schedule(n), e());
                      }
                    (i = !1), o && ((o = !1), s.process(l));
                  },
                };
              return s;
            })(() => (r9 = !0))),
            e
          ),
          {}
        ),
        nr = (e) => nt[e].process(r6),
        nn = (e) => {
          (r9 = !1),
            (r6.delta = r7
              ? 1e3 / 60
              : Math.max(Math.min(e - r6.timestamp, 40), 1)),
            (r6.timestamp = e),
            (r6.isProcessing = !0),
            ne.forEach(nr),
            (r6.isProcessing = !1),
            r9 && ((r7 = !1), requestAnimationFrame(nn));
        },
        ni = () => {
          (r9 = !0), (r7 = !0), r6.isProcessing || requestAnimationFrame(nn);
        },
        no = ne.reduce((e, t) => {
          let r = nt[t];
          return (
            (e[t] = (e, t = !1, n = !1) => (r9 || ni(), r.schedule(e, t, n))), e
          );
        }, {});
      function na(e) {
        ne.forEach((t) => nt[t].cancel(e));
      }
      var ns = r(9603);
      let nl = ns.j ? l.useLayoutEffect : l.useEffect;
      function nu() {
        let e = (0, l.useRef)(!1);
        return (
          nl(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      let nc = (0, l.createContext)(null);
      function nh(e) {
        let t = (0, l.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
      class nd extends l.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function nf({ children: e, isPresent: t }) {
        let r = (0, l.useId)(),
          n = (0, l.useRef)(null),
          i = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, l.useInsertionEffect)(() => {
            let { width: e, height: o, top: a, left: s } = i.current;
            if (t || !n.current || !e || !o) return;
            n.current.dataset.motionPopId = r;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          l.createElement(
            nd,
            { isPresent: t, childRef: n, sizeRef: i },
            l.cloneElement(e, { ref: n })
          )
        );
      }
      let np = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: n,
        custom: i,
        presenceAffectsLayout: o,
        mode: a,
      }) => {
        let s = nh(ng),
          u = (0, l.useId)(),
          c = (0, l.useMemo)(
            () => ({
              id: u,
              initial: t,
              isPresent: r,
              custom: i,
              onExitComplete: (e) => {
                for (let t of (s.set(e, !0), s.values())) if (!t) return;
                n && n();
              },
              register: (e) => (s.set(e, !1), () => s.delete(e)),
            }),
            o ? void 0 : [r]
          );
        return (
          (0, l.useMemo)(() => {
            s.forEach((e, t) => s.set(t, !1));
          }, [r]),
          l.useEffect(() => {
            r || s.size || !n || n();
          }, [r]),
          "popLayout" === a && (e = l.createElement(nf, { isPresent: r }, e)),
          l.createElement(nc.Provider, { value: c }, e)
        );
      };
      function ng() {
        return new Map();
      }
      let nm = (0, l.createContext)({}),
        ny = (e) => e,
        nb = (e) => e.key || "",
        nv = ({
          children: e,
          custom: t,
          initial: r = !0,
          onExitComplete: n,
          exitBeforeEnter: i,
          presenceAffectsLayout: o = !0,
          mode: a = "sync",
        }) => {
          var s;
          ny(!i, "Replace exitBeforeEnter with mode='wait'");
          let u =
              (0, l.useContext)(nm).forceRender ||
              (function () {
                let e = nu(),
                  [t, r] = (0, l.useState)(0),
                  n = (0, l.useCallback)(() => {
                    e.current && r(t + 1);
                  }, [t]),
                  i = (0, l.useCallback)(() => no.postRender(n), [n]);
                return [i, t];
              })()[0],
            c = nu(),
            h = (function (e) {
              let t = [];
              return (
                l.Children.forEach(e, (e) => {
                  (0, l.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            d = h,
            f = (0, l.useRef)(new Map()).current,
            p = (0, l.useRef)(d),
            g = (0, l.useRef)(new Map()).current,
            m = (0, l.useRef)(!0);
          if (
            (nl(() => {
              (m.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let r = nb(e);
                    t.set(r, e);
                  });
                })(h, g),
                (p.current = d);
            }),
            (s = () => {
              (m.current = !0), g.clear(), f.clear();
            }),
            (0, l.useEffect)(() => () => s(), []),
            m.current)
          )
            return l.createElement(
              l.Fragment,
              null,
              d.map((e) =>
                l.createElement(
                  np,
                  {
                    key: nb(e),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: o,
                    mode: a,
                  },
                  e
                )
              )
            );
          d = [...d];
          let y = p.current.map(nb),
            b = h.map(nb),
            v = y.length;
          for (let e = 0; e < v; e++) {
            let t = y[e];
            -1 !== b.indexOf(t) || f.has(t) || f.set(t, void 0);
          }
          return (
            "wait" === a && f.size && (d = []),
            f.forEach((e, r) => {
              if (-1 !== b.indexOf(r)) return;
              let i = g.get(r);
              if (!i) return;
              let s = y.indexOf(r),
                m = e;
              if (!m) {
                let e = () => {
                  g.delete(r), f.delete(r);
                  let e = p.current.findIndex((e) => e.key === r);
                  if ((p.current.splice(e, 1), !f.size)) {
                    if (((p.current = h), !1 === c.current)) return;
                    u(), n && n();
                  }
                };
                (m = l.createElement(
                  np,
                  {
                    key: nb(i),
                    isPresent: !1,
                    onExitComplete: e,
                    custom: t,
                    presenceAffectsLayout: o,
                    mode: a,
                  },
                  i
                )),
                  f.set(r, m);
              }
              d.splice(s, 0, m);
            }),
            (d = d.map((e) => {
              let t = e.key;
              return f.has(t)
                ? e
                : l.createElement(
                    np,
                    {
                      key: nb(e),
                      isPresent: !0,
                      presenceAffectsLayout: o,
                      mode: a,
                    },
                    e
                  );
            })),
            l.createElement(
              l.Fragment,
              null,
              f.size ? d : d.map((e) => (0, l.cloneElement)(e))
            )
          );
        },
        nx = (0, l.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        nw = (0, l.createContext)({}),
        nC = (0, l.createContext)({ strict: !1 });
      function nk(e) {
        return (
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function nE(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function nT(e) {
        return "object" == typeof e && "function" == typeof e.start;
      }
      let nS = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        nP = ["initial", ...nS];
      function nA(e) {
        return nT(e.animate) || nP.some((t) => nE(e[t]));
      }
      function nN(e) {
        return !!(nA(e) || e.variants);
      }
      function nj(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let nR = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nL = {};
      for (let e in nR) nL[e] = { isEnabled: (t) => nR[e].some((e) => !!t[e]) };
      let nM = (0, l.createContext)({}),
        nO = Symbol.for("motionComponentSymbol"),
        nB = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function nD(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (nB.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      let nI = {},
        nF = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        n_ = new Set(nF);
      function nH(e, { layout: t, layoutId: r }) {
        return (
          n_.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!nI[e] || "opacity" === e))
        );
      }
      let nU = (e) => !!(e && e.getVelocity),
        nV = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        nG = nF.length,
        nz = (e) => (t) => "string" == typeof t && t.startsWith(e),
        nq = nz("--"),
        nW = nz("var(--"),
        nZ = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        n$ = (e, t, r) => Math.min(Math.max(r, e), t),
        nK = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        nX = { ...nK, transform: (e) => n$(0, 1, e) },
        nY = { ...nK, default: 1 },
        nQ = (e) => Math.round(1e5 * e) / 1e5,
        nJ = /(-)?([\d]*\.?[\d])+/g,
        n0 =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        n1 =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function n2(e) {
        return "string" == typeof e;
      }
      let n3 = (e) => ({
          test: (t) => n2(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        n5 = n3("deg"),
        n8 = n3("%"),
        n4 = n3("px"),
        n6 = n3("vh"),
        n7 = n3("vw"),
        n9 = {
          ...n8,
          parse: (e) => n8.parse(e) / 100,
          transform: (e) => n8.transform(100 * e),
        },
        ie = { ...nK, transform: Math.round },
        it = {
          borderWidth: n4,
          borderTopWidth: n4,
          borderRightWidth: n4,
          borderBottomWidth: n4,
          borderLeftWidth: n4,
          borderRadius: n4,
          radius: n4,
          borderTopLeftRadius: n4,
          borderTopRightRadius: n4,
          borderBottomRightRadius: n4,
          borderBottomLeftRadius: n4,
          width: n4,
          maxWidth: n4,
          height: n4,
          maxHeight: n4,
          size: n4,
          top: n4,
          right: n4,
          bottom: n4,
          left: n4,
          padding: n4,
          paddingTop: n4,
          paddingRight: n4,
          paddingBottom: n4,
          paddingLeft: n4,
          margin: n4,
          marginTop: n4,
          marginRight: n4,
          marginBottom: n4,
          marginLeft: n4,
          rotate: n5,
          rotateX: n5,
          rotateY: n5,
          rotateZ: n5,
          scale: nY,
          scaleX: nY,
          scaleY: nY,
          scaleZ: nY,
          skew: n5,
          skewX: n5,
          skewY: n5,
          distance: n4,
          translateX: n4,
          translateY: n4,
          translateZ: n4,
          x: n4,
          y: n4,
          z: n4,
          perspective: n4,
          transformPerspective: n4,
          opacity: nX,
          originX: n9,
          originY: n9,
          originZ: n4,
          zIndex: ie,
          fillOpacity: nX,
          strokeOpacity: nX,
          numOctaves: ie,
        };
      function ir(e, t, r, n) {
        let { style: i, vars: o, transform: a, transformOrigin: s } = e,
          l = !1,
          u = !1,
          c = !0;
        for (let e in t) {
          let r = t[e];
          if (nq(e)) {
            o[e] = r;
            continue;
          }
          let n = it[e],
            h = nZ(r, n);
          if (n_.has(e)) {
            if (((l = !0), (a[e] = h), !c)) continue;
            r !== (n.default || 0) && (c = !1);
          } else e.startsWith("origin") ? ((u = !0), (s[e] = h)) : (i[e] = h);
        }
        if (
          (!t.transform &&
            (l || n
              ? (i.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: r = !0,
                  },
                  n,
                  i
                ) {
                  let o = "";
                  for (let t = 0; t < nG; t++) {
                    let r = nF[t];
                    if (void 0 !== e[r]) {
                      let t = nV[r] || r;
                      o += `${t}(${e[r]}) `;
                    }
                  }
                  return (
                    t && !e.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    i ? (o = i(e, n ? "" : o)) : r && n && (o = "none"),
                    o
                  );
                })(e.transform, r, c, n))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = s;
          i.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let ii = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function io(e, t, r) {
        for (let n in t) nU(t[n]) || nH(n, r) || (e[n] = t[n]);
      }
      function ia(e, t, r) {
        let n = {},
          i = (function (e, t, r) {
            let n = e.style || {},
              i = {};
            return (
              io(i, n, e),
              Object.assign(
                i,
                (function ({ transformTemplate: e }, t, r) {
                  return (0, l.useMemo)(() => {
                    let n = ii();
                    return (
                      ir(n, t, { enableHardwareAcceleration: !r }, e),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [t]);
                })(e, t, r)
              ),
              e.transformValues ? e.transformValues(i) : i
            );
          })(e, t, r);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((n.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (n.tabIndex = 0),
          (n.style = i),
          n
        );
      }
      let is = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function il(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          is.has(e)
        );
      }
      let iu = (e) => !il(e);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (iu = (e) => (e.startsWith("on") ? !il(e) : n(e)));
      } catch (e) {}
      function ic(e, t, r) {
        return "string" == typeof e ? e : n4.transform(t + r * e);
      }
      let ih = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        id = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ip(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: a,
          pathSpacing: s = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        h,
        d
      ) {
        if ((ir(e, u, c, d), h)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: f, style: p, dimensions: g } = e;
        f.transform && (g && (p.transform = f.transform), delete f.transform),
          g &&
            (void 0 !== i || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (e, t, r) {
              let n = ic(t, e.x, e.width),
                i = ic(r, e.y, e.height);
              return `${n} ${i}`;
            })(g, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (f.x = t),
          void 0 !== r && (f.y = r),
          void 0 !== n && (f.scale = n),
          void 0 !== a &&
            (function (e, t, r = 1, n = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? ih : id;
              e[o.offset] = n4.transform(-n);
              let a = n4.transform(t),
                s = n4.transform(r);
              e[o.array] = `${a} ${s}`;
            })(f, a, s, l, !1);
      }
      let ig = () => ({ ...ii(), attrs: {} }),
        im = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function iy(e, t, r, n) {
        let i = (0, l.useMemo)(() => {
          let r = ig();
          return (
            ip(
              r,
              t,
              { enableHardwareAcceleration: !1 },
              im(n),
              e.transformTemplate
            ),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [t]);
        if (e.style) {
          let t = {};
          io(t, e.style, e), (i.style = { ...t, ...i.style });
        }
        return i;
      }
      let ib = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function iv(e, { style: t, vars: r }, n, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
      let ix = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function iw(e, t, r, n) {
        for (let r in (iv(e, t, void 0, n), t.attrs))
          e.setAttribute(ix.has(r) ? r : ib(r), t.attrs[r]);
      }
      function iC(e, t) {
        let { style: r } = e,
          n = {};
        for (let i in r)
          (nU(r[i]) || (t.style && nU(t.style[i])) || nH(i, e)) &&
            (n[i] = r[i]);
        return n;
      }
      function ik(e, t) {
        let r = iC(e, t);
        for (let n in e)
          if (nU(e[n]) || nU(t[n])) {
            let t =
              -1 !== nF.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n;
            r[t] = e[n];
          }
        return r;
      }
      function iE(e, t, r, n = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          t
        );
      }
      let iT = (e) => Array.isArray(e),
        iS = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        iP = (e) => (iT(e) ? e[e.length - 1] || 0 : e);
      function iA(e) {
        let t = nU(e) ? e.get() : e;
        return iS(t) ? t.toValue() : t;
      }
      let iN = (e) => (t, r) => {
          let n = (0, l.useContext)(nw),
            i = (0, l.useContext)(nc),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: r,
                },
                n,
                i,
                o
              ) {
                let a = {
                  latestValues: (function (e, t, r, n) {
                    let i = {},
                      o = n(e, {});
                    for (let e in o) i[e] = iA(o[e]);
                    let { initial: a, animate: s } = e,
                      l = nA(e),
                      u = nN(e);
                    t &&
                      u &&
                      !l &&
                      !1 !== e.inherit &&
                      (void 0 === a && (a = t.initial),
                      void 0 === s && (s = t.animate));
                    let c = !!r && !1 === r.initial;
                    c = c || !1 === a;
                    let h = c ? s : a;
                    if (h && "boolean" != typeof h && !nT(h)) {
                      let t = Array.isArray(h) ? h : [h];
                      t.forEach((t) => {
                        let r = iE(e, t);
                        if (!r) return;
                        let { transitionEnd: n, transition: o, ...a } = r;
                        for (let e in a) {
                          let t = a[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (i[e] = t);
                        }
                        for (let e in n) i[e] = n[e];
                      });
                    }
                    return i;
                  })(n, i, o, e),
                  renderState: t(),
                };
                return r && (a.mount = (e) => r(n, e, a)), a;
              })(e, t, n, i);
          return r ? o() : nh(o);
        },
        ij = {
          useVisualState: iN({
            scrapeMotionValuesFromProps: ik,
            createRenderState: ig,
            onMount: (e, t, { renderState: r, latestValues: n }) => {
              try {
                r.dimensions =
                  "function" == typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (e) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              ip(
                r,
                n,
                { enableHardwareAcceleration: !1 },
                im(t.tagName),
                e.transformTemplate
              ),
                iw(t, r);
            },
          }),
        },
        iR = {
          useVisualState: iN({
            scrapeMotionValuesFromProps: iC,
            createRenderState: ii,
          }),
        };
      function iL(e, t, r, n = { passive: !0 }) {
        return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
      }
      let iM = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function iO(e, t = "page") {
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      let iB = (e) => (t) => iM(t) && e(t, iO(t));
      function iD(e, t, r, n) {
        return iL(e, t, iB(r), n);
      }
      let iI = (e, t) => (r) => t(e(r)),
        iF = (...e) => e.reduce(iI);
      function i_(e) {
        let t = null;
        return () => {
          let r = () => {
            t = null;
          };
          return null === t && ((t = e), r);
        };
      }
      let iH = i_("dragHorizontal"),
        iU = i_("dragVertical");
      function iV(e) {
        let t = !1;
        if ("y" === e) t = iU();
        else if ("x" === e) t = iH();
        else {
          let e = iH(),
            r = iU();
          e && r
            ? (t = () => {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return t;
      }
      function iG() {
        let e = iV(!0);
        return !e || (e(), !1);
      }
      class iz {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function iq(e, t) {
        let r = "onHover" + (t ? "Start" : "End"),
          n = (n, i) => {
            if ("touch" === n.type || iG()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive("whileHover", t),
              o[r] && no.update(() => o[r](n, i));
          };
        return iD(e.current, "pointer" + (t ? "enter" : "leave"), n, {
          passive: !e.getProps()[r],
        });
      }
      let iW = (e, t) => !!t && (e === t || iW(e, t.parentElement));
      function iZ(e, t) {
        if (!t) return;
        let r = new PointerEvent("pointer" + e);
        t(r, iO(r));
      }
      let i$ = new WeakMap(),
        iK = new WeakMap(),
        iX = (e) => {
          let t = i$.get(e.target);
          t && t(e);
        },
        iY = (e) => {
          e.forEach(iX);
        },
        iQ = { some: 0, all: 1 };
      function iJ(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function i0(e, t, r) {
        let n = e.getProps();
        return iE(
          n,
          t,
          void 0 !== r ? r : n.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.getVelocity())), t;
          })(e)
        );
      }
      let i1 = "data-" + ib("framerAppearId"),
        i2 = (e) => 1e3 * e,
        i3 = (e) => e / 1e3,
        i5 = { current: !1 },
        i8 = (e) => Array.isArray(e) && "number" == typeof e[0],
        i4 = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
        i6 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: i4([0, 0.65, 0.55, 1]),
          circOut: i4([0.55, 0, 1, 0.45]),
          backIn: i4([0.31, 0.01, 0.66, -0.59]),
          backOut: i4([0.33, 1.53, 0.69, 0.99]),
        },
        i7 = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        i9 = {},
        oe = {};
      for (let e in i7)
        oe[e] = () => (void 0 === i9[e] && (i9[e] = i7[e]()), i9[e]);
      let ot = (e, t, r) =>
        (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function or(e, t, r, n) {
        if (e === t && r === n) return ny;
        let i = (t) =>
          (function (e, t, r, n, i) {
            let o, a;
            let s = 0;
            do
              (o = ot((a = t + (r - t) / 2), n, i) - e) > 0 ? (r = a) : (t = a);
            while (Math.abs(o) > 1e-7 && ++s < 12);
            return a;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : ot(i(e), t, n));
      }
      let on = or(0.42, 0, 1, 1),
        oi = or(0, 0, 0.58, 1),
        oo = or(0.42, 0, 0.58, 1),
        oa = (e) => Array.isArray(e) && "number" != typeof e[0],
        os = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        ol = (e) => (t) => 1 - e(1 - t),
        ou = (e) => 1 - Math.sin(Math.acos(e)),
        oc = ol(ou),
        oh = os(oc),
        od = or(0.33, 1.53, 0.69, 0.99),
        of = ol(od),
        op = os(of),
        og = (e) =>
          (e *= 2) < 1 ? 0.5 * of(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        om = {
          linear: ny,
          easeIn: on,
          easeInOut: oo,
          easeOut: oi,
          circIn: ou,
          circInOut: oh,
          circOut: oc,
          backIn: of,
          backInOut: op,
          backOut: od,
          anticipate: og,
        },
        oy = (e) => {
          if (Array.isArray(e)) {
            ny(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, n, i] = e;
            return or(t, r, n, i);
          }
          return "string" == typeof e
            ? (ny(void 0 !== om[e], `Invalid easing type '${e}'`), om[e])
            : e;
        },
        ob = (e, t) => (r) =>
          !!(
            (n2(r) && n1.test(r) && r.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(r, t))
          ),
        ov = (e, t, r) => (n) => {
          if (!n2(n)) return n;
          let [i, o, a, s] = n.match(nJ);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [r]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        ox = (e) => n$(0, 255, e),
        ow = { ...nK, transform: (e) => Math.round(ox(e)) },
        oC = {
          test: ob("rgb", "red"),
          parse: ov("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            ow.transform(e) +
            ", " +
            ow.transform(t) +
            ", " +
            ow.transform(r) +
            ", " +
            nQ(nX.transform(n)) +
            ")",
        },
        ok = {
          test: ob("#"),
          parse: function (e) {
            let t = "",
              r = "",
              n = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (n = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (n = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (n += n),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: oC.transform,
        },
        oE = {
          test: ob("hsl", "hue"),
          parse: ov("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            n8.transform(nQ(t)) +
            ", " +
            n8.transform(nQ(r)) +
            ", " +
            nQ(nX.transform(n)) +
            ")",
        },
        oT = {
          test: (e) => oC.test(e) || ok.test(e) || oE.test(e),
          parse: (e) =>
            oC.test(e) ? oC.parse(e) : oE.test(e) ? oE.parse(e) : ok.parse(e),
          transform: (e) =>
            n2(e)
              ? e
              : e.hasOwnProperty("red")
              ? oC.transform(e)
              : oE.transform(e),
        },
        oS = (e, t, r) => -r * e + r * t + e;
      function oP(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      let oA = (e, t, r) => {
          let n = e * e;
          return Math.sqrt(Math.max(0, r * (t * t - n) + n));
        },
        oN = [ok, oC, oE],
        oj = (e) => oN.find((t) => t.test(e));
      function oR(e) {
        let t = oj(e);
        ny(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = t.parse(e);
        return (
          t === oE &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
              (e /= 360), (r /= 100);
              let i = 0,
                o = 0,
                a = 0;
              if ((t /= 100)) {
                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  s = 2 * r - n;
                (i = oP(s, n, e + 1 / 3)),
                  (o = oP(s, n, e)),
                  (a = oP(s, n, e - 1 / 3));
              } else i = o = a = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let oL = (e, t) => {
          let r = oR(e),
            n = oR(t),
            i = { ...r };
          return (e) => (
            (i.red = oA(r.red, n.red, e)),
            (i.green = oA(r.green, n.green, e)),
            (i.blue = oA(r.blue, n.blue, e)),
            (i.alpha = oS(r.alpha, n.alpha, e)),
            oC.transform(i)
          );
        },
        oM = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: ny,
        },
        oO = { regex: n0, countKey: "Colors", token: "${c}", parse: oT.parse },
        oB = { regex: nJ, countKey: "Numbers", token: "${n}", parse: nK.parse };
      function oD(e, { regex: t, countKey: r, token: n, parse: i }) {
        let o = e.tokenised.match(t);
        o &&
          ((e["num" + r] = o.length),
          (e.tokenised = e.tokenised.replace(t, n)),
          e.values.push(...o.map(i)));
      }
      function oI(e) {
        let t = e.toString(),
          r = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return r.value.includes("var(--") && oD(r, oM), oD(r, oO), oD(r, oB), r;
      }
      function oF(e) {
        return oI(e).values;
      }
      function o_(e) {
        let { values: t, numColors: r, numVars: n, tokenised: i } = oI(e),
          o = t.length;
        return (e) => {
          let t = i;
          for (let i = 0; i < o; i++)
            t =
              i < n
                ? t.replace(oM.token, e[i])
                : i < n + r
                ? t.replace(oO.token, oT.transform(e[i]))
                : t.replace(oB.token, nQ(e[i]));
          return t;
        };
      }
      let oH = (e) => ("number" == typeof e ? 0 : e),
        oU = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              n2(e) &&
              ((null === (t = e.match(nJ)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(n0)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: oF,
          createTransformer: o_,
          getAnimatableNone: function (e) {
            let t = oF(e),
              r = o_(e);
            return r(t.map(oH));
          },
        },
        oV = (e, t) => (r) => `${r > 0 ? t : e}`;
      function oG(e, t) {
        return "number" == typeof e
          ? (r) => oS(e, t, r)
          : oT.test(e)
          ? oL(e, t)
          : e.startsWith("var(")
          ? oV(e, t)
          : oW(e, t);
      }
      let oz = (e, t) => {
          let r = [...e],
            n = r.length,
            i = e.map((e, r) => oG(e, t[r]));
          return (e) => {
            for (let t = 0; t < n; t++) r[t] = i[t](e);
            return r;
          };
        },
        oq = (e, t) => {
          let r = { ...e, ...t },
            n = {};
          for (let i in r)
            void 0 !== e[i] && void 0 !== t[i] && (n[i] = oG(e[i], t[i]));
          return (e) => {
            for (let t in n) r[t] = n[t](e);
            return r;
          };
        },
        oW = (e, t) => {
          let r = oU.createTransformer(t),
            n = oI(e),
            i = oI(t),
            o =
              n.numVars === i.numVars &&
              n.numColors === i.numColors &&
              n.numNumbers >= i.numNumbers;
          return o
            ? iF(oz(n.values, i.values), r)
            : (ny(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              oV(e, t));
        },
        oZ = (e, t, r) => {
          let n = t - e;
          return 0 === n ? 1 : (r - e) / n;
        },
        o$ = (e, t) => (r) => oS(e, t, r);
      function oK(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
        let o = e.length;
        if (
          (ny(
            o === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === o)
        )
          return () => t[0];
        e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let a = (function (e, t, r) {
            let n = [],
              i =
                r ||
                (function (e) {
                  if ("number" == typeof e);
                  else if ("string" == typeof e) return oT.test(e) ? oL : oW;
                  else if (Array.isArray(e)) return oz;
                  else if ("object" == typeof e) return oq;
                  return o$;
                })(e[0]),
              o = e.length - 1;
            for (let r = 0; r < o; r++) {
              let o = i(e[r], e[r + 1]);
              if (t) {
                let e = Array.isArray(t) ? t[r] || ny : t;
                o = iF(e, o);
              }
              n.push(o);
            }
            return n;
          })(t, n, i),
          s = a.length,
          l = (t) => {
            let r = 0;
            if (s > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
            let n = oZ(e[r], e[r + 1], t);
            return a[r](n);
          };
        return r ? (t) => l(n$(e[0], e[o - 1], t)) : l;
      }
      function oX({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = oa(n) ? n.map(oy) : oy(n),
          o = { done: !1, value: t[0] },
          a = (
            r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let n = 1; n <= t; n++) {
                        let i = oZ(0, t, n);
                        e.push(oS(r, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
          ).map((t) => t * e),
          s = oK(a, t, {
            ease: Array.isArray(i)
              ? i
              : t.map(() => i || oo).splice(0, t.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = s(t)), (o.done = t >= e), o),
        };
      }
      function oY(e, t, r) {
        var n, i;
        let o = Math.max(t - 5, 0);
        return (n = r - e(o)), (i = t - o) ? n * (1e3 / i) : 0;
      }
      function oQ(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let oJ = ["duration", "bounce"],
        o0 = ["stiffness", "damping", "mass"];
      function o1(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function o2({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
        let i;
        let o = e[0],
          a = e[e.length - 1],
          s = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: h,
            duration: d,
            isResolvedFromDuration: f,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!o1(e, o0) && o1(e, oJ)) {
              let r = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let i, o;
                ny(e <= i2(10), "Spring duration must be 10 seconds or less");
                let a = 1 - t;
                (a = n$(0.05, 1, a)),
                  (e = n$(0.01, 10, i3(e))),
                  a < 1
                    ? ((i = (t) => {
                        let n = t * a,
                          i = n * e,
                          o = oQ(t, a);
                        return 0.001 - ((n - r) / o) * Math.exp(-i);
                      }),
                      (o = (t) => {
                        let n = t * a,
                          o = n * e,
                          s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          l = oQ(Math.pow(t, 2), a),
                          u = -i(t) + 0.001 > 0 ? -1 : 1;
                        return (u * ((o * r + r - s) * Math.exp(-o))) / l;
                      }))
                    : ((i = (t) => {
                        let n = Math.exp(-t * e),
                          i = (t - r) * e + 1;
                        return -0.001 + n * i;
                      }),
                      (o = (t) => {
                        let n = Math.exp(-t * e),
                          i = (r - t) * (e * e);
                        return n * i;
                      }));
                let s = 5 / e,
                  l = (function (e, t, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                    return n;
                  })(i, o, s);
                if (((e = i2(e)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(l, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(n * t),
                    duration: e,
                  };
                }
              })(e);
              (t = {
                ...t,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return t;
          })(n),
          p = h ? -i3(h) : 0,
          g = u / (2 * Math.sqrt(l * c)),
          m = a - o,
          y = i3(Math.sqrt(l / c)),
          b = 5 > Math.abs(m);
        if ((r || (r = b ? 0.01 : 2), t || (t = b ? 0.005 : 0.5), g < 1)) {
          let e = oQ(y, g);
          i = (t) =>
            a -
            Math.exp(-g * y * t) *
              (((p + g * y * m) / e) * Math.sin(e * t) + m * Math.cos(e * t));
        } else if (1 === g)
          i = (e) => a - Math.exp(-y * e) * (m + (p + y * m) * e);
        else {
          let e = y * Math.sqrt(g * g - 1);
          i = (t) => {
            let r = Math.min(e * t, 300);
            return (
              a -
              (Math.exp(-g * y * t) *
                ((p + g * y * m) * Math.sinh(r) + e * m * Math.cosh(r))) /
                e
            );
          };
        }
        return {
          calculatedDuration: (f && d) || null,
          next: (e) => {
            let n = i(e);
            if (f) s.done = e >= d;
            else {
              let o = p;
              0 !== e && (o = g < 1 ? oY(i, e, n) : 0);
              let l = Math.abs(o) <= r,
                u = Math.abs(a - n) <= t;
              s.done = l && u;
            }
            return (s.value = s.done ? a : n), s;
          },
        };
      }
      function o3({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: a,
        min: s,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let h, d;
        let f = e[0],
          p = { done: !1, value: f },
          g = (e) => (void 0 !== s && e < s) || (void 0 !== l && e > l),
          m = (e) =>
            void 0 === s
              ? l
              : void 0 === l
              ? s
              : Math.abs(s - e) < Math.abs(l - e)
              ? s
              : l,
          y = r * t,
          b = f + y,
          v = void 0 === a ? b : a(b);
        v !== b && (y = v - f);
        let x = (e) => -y * Math.exp(-e / n),
          w = (e) => v + x(e),
          C = (e) => {
            let t = x(e),
              r = w(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? v : r);
          },
          k = (e) => {
            g(p.value) &&
              ((h = e),
              (d = o2({
                keyframes: [p.value, m(p.value)],
                velocity: oY(w, e, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          k(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (d || void 0 !== h || ((t = !0), C(e), k(e)),
              void 0 !== h && e > h)
                ? d.next(e - h)
                : (t || C(e), p);
            },
          }
        );
      }
      let o5 = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: () => no.update(t, !0),
          stop: () => na(t),
          now: () => (r6.isProcessing ? r6.timestamp : performance.now()),
        };
      };
      function o8(e) {
        let t = 0,
          r = e.next(t);
        for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let o4 = { decay: o3, inertia: o3, tween: oX, keyframes: oX, spring: o2 };
      function o6({
        autoplay: e = !0,
        delay: t = 0,
        driver: r = o5,
        keyframes: n,
        type: i = "keyframes",
        repeat: o = 0,
        repeatDelay: a = 0,
        repeatType: s = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: h,
        ...d
      }) {
        let f,
          p,
          g,
          m,
          y,
          b = 1,
          v = !1,
          x = () => {
            f && f(),
              (p = new Promise((e) => {
                f = e;
              }));
          };
        x();
        let w = o4[i] || oX;
        w !== oX &&
          "number" != typeof n[0] &&
          ((m = oK([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let C = w({ ...d, keyframes: n });
        "mirror" === s &&
          (y = w({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let k = "idle",
          E = null,
          T = null,
          S = null;
        null === C.calculatedDuration && o && (C.calculatedDuration = o8(C));
        let { calculatedDuration: P } = C,
          A = 1 / 0,
          N = 1 / 0;
        null !== P && (N = (A = P + a) * (o + 1) - a);
        let j = 0,
          R = (e) => {
            if (null === T) return;
            b > 0 && (T = Math.min(T, e)), (j = null !== E ? E : (e - T) * b);
            let r = j - t,
              i = r < 0;
            (j = Math.max(r, 0)), "finished" === k && null === E && (j = N);
            let l = j,
              u = C;
            if (o) {
              let e = j / A,
                t = Math.floor(e),
                r = e % 1;
              !r && e >= 1 && (r = 1), 1 === r && t--, (t = Math.min(t, o + 1));
              let n = !!(t % 2);
              n &&
                ("reverse" === s
                  ? ((r = 1 - r), a && (r -= a / A))
                  : "mirror" === s && (u = y));
              let i = n$(0, 1, r);
              j > N && (i = "reverse" === s && n ? 1 : 0), (l = i * A);
            }
            let c = i ? { done: !1, value: n[0] } : u.next(l);
            m && (c.value = m(c.value));
            let { done: d } = c;
            i || null === P || (d = j >= N);
            let f =
              null === E &&
              ("finished" === k || ("running" === k && d) || (b < 0 && j <= 0));
            return h && h(c.value), f && O(), c;
          },
          L = () => {
            g && g.stop(), (g = void 0);
          },
          M = () => {
            (k = "idle"), L(), x(), (T = S = null);
          },
          O = () => {
            (k = "finished"), c && c(), L(), x();
          },
          B = () => {
            if (v) return;
            g || (g = r(R));
            let e = g.now();
            l && l(),
              null !== E ? (T = e - E) : (T && "finished" !== k) || (T = e),
              (S = T),
              (E = null),
              (k = "running"),
              g.start();
          };
        e && B();
        let D = {
          then: (e, t) => p.then(e, t),
          get time() {
            return i3(j);
          },
          set time(newTime) {
            (j = newTime = i2(newTime)),
              null === E && g && 0 !== b
                ? (T = g.now() - newTime / b)
                : (E = newTime);
          },
          get duration() {
            let e =
              null === C.calculatedDuration ? o8(C) : C.calculatedDuration;
            return i3(e);
          },
          get speed() {
            return b;
          },
          set speed(newSpeed) {
            if (newSpeed === b || !g) return;
            (b = newSpeed), (D.time = i3(j));
          },
          get state() {
            return k;
          },
          play: B,
          pause: () => {
            (k = "paused"), (E = j);
          },
          stop: () => {
            (v = !0), "idle" !== k && ((k = "idle"), u && u(), M());
          },
          cancel: () => {
            null !== S && R(S), M();
          },
          complete: () => {
            k = "finished";
          },
          sample: (e) => ((T = 0), R(e)),
        };
        return D;
      }
      let o7 = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        o9 = (e, t) =>
          "spring" === t.type ||
          "backgroundColor" === e ||
          !(function e(t) {
            return !!(
              !t ||
              ("string" == typeof t && i6[t]) ||
              i8(t) ||
              (Array.isArray(t) && t.every(e))
            );
          })(t.ease),
        ae = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        at = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ar = { type: "keyframes", duration: 0.8 },
        an = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ai = (e, { keyframes: t }) =>
          t.length > 2
            ? ar
            : n_.has(e)
            ? e.startsWith("scale")
              ? at(t[1])
              : ae
            : an,
        ao = (e, t) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (oU.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        aa = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function as(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match(nJ) || [];
        if (!n) return e;
        let i = r.replace(n, ""),
          o = aa.has(t) ? 1 : 0;
        return n !== r && (o *= 100), t + "(" + o + i + ")";
      }
      let al = /([a-z-]*)\(.*?\)/g,
        au = {
          ...oU,
          getAnimatableNone: (e) => {
            let t = e.match(al);
            return t ? t.map(as).join(" ") : e;
          },
        },
        ac = {
          ...it,
          color: oT,
          backgroundColor: oT,
          outlineColor: oT,
          fill: oT,
          stroke: oT,
          borderColor: oT,
          borderTopColor: oT,
          borderRightColor: oT,
          borderBottomColor: oT,
          borderLeftColor: oT,
          filter: au,
          WebkitFilter: au,
        },
        ah = (e) => ac[e];
      function ad(e, t) {
        let r = ah(e);
        return (
          r !== au && (r = oU),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      let af = (e) => /^0[^.\s]+$/.test(e);
      function ap(e, t) {
        return e[t] || e.default || e;
      }
      let ag =
        (e, t, r, n = {}) =>
        (i) => {
          let o = ap(n, e) || {},
            a = o.delay || n.delay || 0,
            { elapsed: s = 0 } = n;
          s -= i2(a);
          let l = (function (e, t, r, n) {
              let i, o;
              let a = ao(t, r);
              i = Array.isArray(r) ? [...r] : [null, r];
              let s = void 0 !== n.from ? n.from : e.get(),
                l = [];
              for (let e = 0; e < i.length; e++) {
                var u;
                null === i[e] && (i[e] = 0 === e ? s : i[e - 1]),
                  ("number" == typeof (u = i[e])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || af(u)
                    : void 0) && l.push(e),
                  "string" == typeof i[e] &&
                    "none" !== i[e] &&
                    "0" !== i[e] &&
                    (o = i[e]);
              }
              if (a && l.length && o)
                for (let e = 0; e < l.length; e++) {
                  let r = l[e];
                  i[r] = ad(t, o);
                }
              return i;
            })(t, e, r, o),
            u = l[0],
            c = l[l.length - 1],
            h = ao(e, u),
            d = ao(e, c);
          ny(
            h === d,
            `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
          );
          let f = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...o,
            delay: -s,
            onUpdate: (e) => {
              t.set(e), o.onUpdate && o.onUpdate(e);
            },
            onComplete: () => {
              i(), o.onComplete && o.onComplete();
            },
          };
          if (
            (!(function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: o,
              repeatType: a,
              repeatDelay: s,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(o) && (f = { ...f, ...ai(e, f) }),
            f.duration && (f.duration = i2(f.duration)),
            f.repeatDelay && (f.repeatDelay = i2(f.repeatDelay)),
            !h || !d || i5.current || !1 === o.type)
          )
            return (function ({
              keyframes: e,
              delay: t,
              onUpdate: r,
              onComplete: n,
            }) {
              let i = () => (
                r && r(e[e.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: ny,
                  pause: ny,
                  stop: ny,
                  then: (e) => (e(), Promise.resolve()),
                  cancel: ny,
                  complete: ny,
                }
              );
              return t
                ? o6({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: t,
                    onComplete: i,
                  })
                : i();
            })(f);
          if (
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate
          ) {
            let r = (function (e, t, { onUpdate: r, onComplete: n, ...i }) {
              let o, a;
              let s =
                oe.waapi() &&
                o7.has(t) &&
                !i.repeatDelay &&
                "mirror" !== i.repeatType &&
                0 !== i.damping &&
                "inertia" !== i.type;
              if (!s) return !1;
              let l = !1,
                u = () => {
                  a = new Promise((e) => {
                    o = e;
                  });
                };
              u();
              let { keyframes: c, duration: h = 300, ease: d, times: f } = i;
              if (o9(t, i)) {
                let e = o6({ ...i, repeat: 0, delay: 0 }),
                  t = { done: !1, value: c[0] },
                  r = [],
                  n = 0;
                for (; !t.done && n < 2e4; )
                  r.push((t = e.sample(n)).value), (n += 10);
                (f = void 0), (c = r), (h = n - 10), (d = "linear");
              }
              let p = (function (
                  e,
                  t,
                  r,
                  {
                    delay: n = 0,
                    duration: i,
                    repeat: o = 0,
                    repeatType: a = "loop",
                    ease: s,
                    times: l,
                  } = {}
                ) {
                  let u = { [t]: r };
                  l && (u.offset = l);
                  let c = (function e(t) {
                    if (t)
                      return i8(t)
                        ? i4(t)
                        : Array.isArray(t)
                        ? t.map(e)
                        : i6[t];
                  })(s);
                  return (
                    Array.isArray(c) && (u.easing = c),
                    e.animate(u, {
                      delay: n,
                      duration: i,
                      easing: Array.isArray(c) ? "linear" : c,
                      fill: "both",
                      iterations: o + 1,
                      direction: "reverse" === a ? "alternate" : "normal",
                    })
                  );
                })(e.owner.current, t, c, {
                  ...i,
                  duration: h,
                  ease: d,
                  times: f,
                }),
                g = () => p.cancel(),
                m = () => {
                  no.update(g), o(), u();
                };
              return (
                (p.onfinish = () => {
                  e.set(
                    (function (e, { repeat: t, repeatType: r = "loop" }) {
                      let n =
                        t && "loop" !== r && t % 2 == 1 ? 0 : e.length - 1;
                      return e[n];
                    })(c, i)
                  ),
                    n && n(),
                    m();
                }),
                {
                  then: (e, t) => a.then(e, t),
                  get time() {
                    return i3(p.currentTime || 0);
                  },
                  set time(newTime) {
                    p.currentTime = i2(newTime);
                  },
                  get speed() {
                    return p.playbackRate;
                  },
                  set speed(newSpeed) {
                    p.playbackRate = newSpeed;
                  },
                  get duration() {
                    return i3(h);
                  },
                  play: () => {
                    l || (p.play(), na(g));
                  },
                  pause: () => p.pause(),
                  stop: () => {
                    if (((l = !0), "idle" === p.playState)) return;
                    let { currentTime: t } = p;
                    if (t) {
                      let r = o6({ ...i, autoplay: !1 });
                      e.setWithVelocity(
                        r.sample(t - 10).value,
                        r.sample(t).value,
                        10
                      );
                    }
                    m();
                  },
                  complete: () => p.finish(),
                  cancel: m,
                }
              );
            })(t, e, f);
            if (r) return r;
          }
          return o6(f);
        };
      function am(e) {
        return !!(nU(e) && e.add);
      }
      let ay = (e) => /^\-?\d*\.?\d+$/.test(e);
      function ab(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function av(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      class ax {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return ab(this.subscriptions, e), () => av(this.subscriptions, e);
        }
        notify(e, t, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let aw = (e) => !isNaN(parseFloat(e));
      class aC {
        constructor(e, t = {}) {
          (this.version = "10.12.16"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: r, timestamp: n } = r6;
              this.lastUpdated !== n &&
                ((this.timeDelta = r),
                (this.lastUpdated = n),
                no.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              no.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = aw(this.current)),
            (this.owner = t.owner);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new ax());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  no.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t), (this.prev = e), (this.timeDelta = r);
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e, t;
          return this.canTrackVelocity
            ? ((e = parseFloat(this.current) - parseFloat(this.prev)),
              (t = this.timeDelta) ? e * (1e3 / t) : 0)
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function ak(e, t) {
        return new aC(e, t);
      }
      let aE = (e) => (t) => t.test(e),
        aT = [
          nK,
          n4,
          n8,
          n5,
          n7,
          n6,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        aS = (e) => aT.find(aE(e)),
        aP = [...aT, oT, oU],
        aA = (e) => aP.find(aE(e));
      function aN(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        let {
            transition: o = e.getDefaultTransition(),
            transitionEnd: a,
            ...s
          } = e.makeTargetAnimatable(t),
          l = e.getValue("willChange");
        n && (o = n);
        let u = [],
          c = i && e.animationState && e.animationState.getState()[i];
        for (let t in s) {
          let n = e.getValue(t),
            i = s[t];
          if (
            !n ||
            void 0 === i ||
            (c &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let n = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), n;
              })(c, t))
          )
            continue;
          let a = { delay: r, elapsed: 0, ...o };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            let r = e.getProps()[i1];
            r && (a.elapsed = window.HandoffAppearAnimations(r, t, n, no));
          }
          n.start(
            ag(t, n, i, e.shouldReduceMotion && n_.has(t) ? { type: !1 } : a)
          );
          let h = n.animation;
          am(l) && (l.add(t), h.then(() => l.remove(t))), u.push(h);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              a &&
                (function (e, t) {
                  let r = i0(e, t),
                    {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...o
                    } = r ? e.makeTargetAnimatable(r, !1) : {};
                  for (let t in (o = { ...o, ...n })) {
                    var a;
                    let r = iP(o[t]);
                    (a = t),
                      e.hasValue(a)
                        ? e.getValue(a).set(r)
                        : e.addValue(a, ak(r));
                  }
                })(e, a);
            }),
          u
        );
      }
      function aj(e, t, r = {}) {
        let n = i0(e, t, r.custom),
          { transition: i = e.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (i = r.transitionOverride);
        let o = n ? () => Promise.all(aN(e, n, r)) : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: a,
                    staggerDirection: s,
                  } = i;
                  return (function (e, t, r = 0, n = 0, i = 1, o) {
                    let a = [],
                      s = (e.variantChildren.size - 1) * n,
                      l = 1 === i ? (e = 0) => e * n : (e = 0) => s - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(aR)
                        .forEach((e, n) => {
                          e.notify("AnimationStart", t),
                            a.push(
                              aj(e, t, { ...o, delay: r + l(n) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(e, t, o + n, a, s, r);
                }
              : () => Promise.resolve(),
          { when: s } = i;
        if (!s) return Promise.all([o(), a(r.delay)]);
        {
          let [e, t] = "beforeChildren" === s ? [o, a] : [a, o];
          return e().then(() => t());
        }
      }
      function aR(e, t) {
        return e.sortNodePosition(t);
      }
      let aL = [...nS].reverse(),
        aM = nS.length;
      function aO(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let aB = 0,
        aD = (e, t) => Math.abs(e - t);
      class aI {
        constructor(e, t, { transformPagePoint: r } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = aH(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                r =
                  (function (e, t) {
                    let r = aD(e.x, t.x),
                      n = aD(e.y, t.y);
                    return Math.sqrt(r ** 2 + n ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !r) return;
              let { point: n } = e,
                { timestamp: i } = r6;
              this.history.push({ ...n, timestamp: i });
              let { onStart: o, onMove: a } = this.handlers;
              t ||
                (o && o(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = aF(t, this.transformPagePoint)),
                no.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: r, onSessionEnd: n } = this.handlers,
                i = aH(
                  "pointercancel" === e.type
                    ? this.lastMoveEventInfo
                    : aF(t, this.transformPagePoint),
                  this.history
                );
              this.startEvent && r && r(e, i), n && n(e, i);
            }),
            !iM(e))
          )
            return;
          (this.handlers = t), (this.transformPagePoint = r);
          let n = iO(e),
            i = aF(n, this.transformPagePoint),
            { point: o } = i,
            { timestamp: a } = r6;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: s } = t;
          s && s(e, aH(i, this.history)),
            (this.removeListeners = iF(
              iD(window, "pointermove", this.handlePointerMove),
              iD(window, "pointerup", this.handlePointerUp),
              iD(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), na(this.updatePoint);
        }
      }
      function aF(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function a_(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function aH({ point: e }, t) {
        return {
          point: e,
          delta: a_(e, aU(t)),
          offset: a_(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              n = null,
              i = aU(e);
            for (
              ;
              r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > i2(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = i3(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let a = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(t, 0),
        };
      }
      function aU(e) {
        return e[e.length - 1];
      }
      function aV(e) {
        return e.max - e.min;
      }
      function aG(e, t = 0, r = 0.01) {
        return Math.abs(e - t) <= r;
      }
      function az(e, t, r, n = 0.5) {
        (e.origin = n),
          (e.originPoint = oS(t.min, t.max, e.origin)),
          (e.scale = aV(r) / aV(t)),
          (aG(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = oS(r.min, r.max, e.origin) - e.originPoint),
          (aG(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function aq(e, t, r, n) {
        az(e.x, t.x, r.x, n ? n.originX : void 0),
          az(e.y, t.y, r.y, n ? n.originY : void 0);
      }
      function aW(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + aV(t));
      }
      function aZ(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + aV(t));
      }
      function a$(e, t, r) {
        aZ(e.x, t.x, r.x), aZ(e.y, t.y, r.y);
      }
      function aK(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function aX(e, t) {
        let r = t.min - e.min,
          n = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function aY(e, t, r) {
        return { min: aQ(e, t), max: aQ(e, r) };
      }
      function aQ(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let aJ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        a0 = () => ({ x: aJ(), y: aJ() }),
        a1 = () => ({ min: 0, max: 0 }),
        a2 = () => ({ x: a1(), y: a1() });
      function a3(e) {
        return [e("x"), e("y")];
      }
      function a5({ top: e, left: t, right: r, bottom: n }) {
        return { x: { min: t, max: r }, y: { min: e, max: n } };
      }
      function a8(e) {
        return void 0 === e || 1 === e;
      }
      function a4({ scale: e, scaleX: t, scaleY: r }) {
        return !a8(e) || !a8(t) || !a8(r);
      }
      function a6(e) {
        return a4(e) || a7(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function a7(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function a9(e, t, r, n, i) {
        return void 0 !== i && (e = n + i * (e - n)), n + r * (e - n) + t;
      }
      function se(e, t = 0, r = 1, n, i) {
        (e.min = a9(e.min, t, r, n, i)), (e.max = a9(e.max, t, r, n, i));
      }
      function st(e, { x: t, y: r }) {
        se(e.x, t.translate, t.scale, t.originPoint),
          se(e.y, r.translate, r.scale, r.originPoint);
      }
      function sr(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function sn(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function si(e, t, [r, n, i]) {
        let o = void 0 !== t[i] ? t[i] : 0.5,
          a = oS(e.min, e.max, o);
        se(e, t[r], t[n], a, t.scale);
      }
      let so = ["x", "scaleX", "originX"],
        sa = ["y", "scaleY", "originY"];
      function ss(e, t) {
        si(e.x, t, so), si(e.y, t, sa);
      }
      function sl(e, t) {
        return a5(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              n = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let su = new WeakMap();
      class sc {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = a2()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let n = (e) => {
              this.stopAnimation(), t && this.snapToCursor(iO(e, "page").point);
            },
            i = (e, t) => {
              let {
                drag: r,
                dragPropagation: n,
                onDragStart: i,
              } = this.getProps();
              if (
                r &&
                !n &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = iV(r)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                a3((e) => {
                  let t = this.getAxisMotionValue(e).get() || 0;
                  if (n8.test(t)) {
                    let { projection: r } = this.visualElement;
                    if (r && r.layout) {
                      let n = r.layout.layoutBox[e];
                      if (n) {
                        let e = aV(n);
                        t = e * (parseFloat(t) / 100);
                      }
                    }
                  }
                  this.originPoint[e] = t;
                }),
                i && no.update(() => i(e, t), !1, !0);
              let { animationState: o } = this.visualElement;
              o && o.setActive("whileDrag", !0);
            },
            o = (e, t) => {
              let {
                dragPropagation: r,
                dragDirectionLock: n,
                onDirectionLock: i,
                onDrag: o,
              } = this.getProps();
              if (!r && !this.openGlobalLock) return;
              let { offset: a } = t;
              if (n && null === this.currentDirection) {
                (this.currentDirection = (function (e, t = 10) {
                  let r = null;
                  return (
                    Math.abs(e.y) > t
                      ? (r = "y")
                      : Math.abs(e.x) > t && (r = "x"),
                    r
                  );
                })(a)),
                  null !== this.currentDirection &&
                    i &&
                    i(this.currentDirection);
                return;
              }
              this.updateAxis("x", t.point, a),
                this.updateAxis("y", t.point, a),
                this.visualElement.render(),
                o && o(e, t);
            },
            a = (e, t) => this.stop(e, t);
          this.panSession = new aI(
            e,
            { onSessionStart: n, onStart: i, onMove: o, onSessionEnd: a },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(e, t) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = t;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && no.update(() => i(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, r) {
          let { drag: n } = this.getProps();
          if (!r || !sh(e, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + r[e];
          this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: r }, n) {
              return (
                void 0 !== t && e < t
                  ? (e = n ? oS(t, e, n.min) : Math.max(e, t))
                  : void 0 !== r &&
                    e > r &&
                    (e = n ? oS(r, e, n.max) : Math.min(e, r)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            i.set(o);
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            n = this.constraints;
          e && nk(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                e,
                { top: t, left: r, bottom: n, right: i }
              ) {
                return { x: aK(e.x, r, i), y: aK(e.y, t, n) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: aY(e, "left", "right"), y: aY(e, "top", "bottom") }
              );
            })(t)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              a3((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } =
            this.getProps();
          if (!t || !nk(t)) return !1;
          let n = t.current;
          ny(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (e, t, r) {
              let n = sl(e, r),
                { scroll: i } = t;
              return i && (sn(n.x, i.offset.x), sn(n.y, i.offset.y)), n;
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            a = { x: aX((e = i.layout.layoutBox).x, o.x), y: aX(e.y, o.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!e), e && (a = a5(e));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: a,
            } = this.getProps(),
            s = this.constraints || {},
            l = a3((a) => {
              if (!sh(a, t, this.currentDirection)) return;
              let l = (s && s[a]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? e[a] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(a, u);
            });
          return Promise.all(l).then(a);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return r.start(ag(e, r, 0, t));
        }
        stopAnimation() {
          a3((e) => this.getAxisMotionValue(e).stop());
        }
        getAxisMotionValue(e) {
          let t = "_drag" + e.toUpperCase(),
            r = this.visualElement.getProps(),
            n = r[t];
          return (
            n ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          a3((t) => {
            let { drag: r } = this.getProps();
            if (!sh(t, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (n && n.layout) {
              let { min: r, max: o } = n.layout.layoutBox[t];
              i.set(e[t] - oS(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!nk(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          a3((e) => {
            let t = this.getAxisMotionValue(e);
            if (t) {
              let r = t.get();
              n[e] = (function (e, t) {
                let r = 0.5,
                  n = aV(e),
                  i = aV(t);
                return (
                  i > n
                    ? (r = oZ(t.min, t.max - n, e.min))
                    : n > i && (r = oZ(e.min, e.max - i, t.min)),
                  n$(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            a3((t) => {
              if (!sh(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              r.set(oS(i, o, n[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          su.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = iD(e, "pointerdown", (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            r = () => {
              let { dragConstraints: e } = this.getProps();
              nk(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", r);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            r();
          let o = iL(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (a3((t) => {
                    let r = this.getAxisMotionValue(t);
                    r &&
                      ((this.originPoint[t] += e[t].translate),
                      r.set(r.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), t(), i(), a && a();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: a = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a,
          };
        }
      }
      function sh(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      let sd = (e) => (t, r) => {
          e && no.update(() => e(t, r));
        },
        sf = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function sp(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let sg = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!n4.test(e)) return e;
            e = parseFloat(e);
          }
          let r = sp(e, t.target.x),
            n = sp(e, t.target.y);
          return `${r}% ${n}%`;
        },
      };
      class sm extends l.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = e;
          Object.assign(nI, sb),
            i &&
              (t.group && t.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (sf.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = i),
              n || e.layoutDependency !== t || void 0 === t
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    no.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            queueMicrotask(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = e;
          n &&
            (n.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function sy(e) {
        let [t, r] = (function () {
            let e = (0, l.useContext)(nc);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: r, register: n } = e,
              i = (0, l.useId)();
            (0, l.useEffect)(() => n(i), []);
            let o = () => r && r(i);
            return !t && r ? [!1, o] : [!0];
          })(),
          n = (0, l.useContext)(nm);
        return l.createElement(sm, {
          ...e,
          layoutGroup: n,
          switchLayoutGroup: (0, l.useContext)(nM),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let sb = {
          borderRadius: {
            ...sg,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: sg,
          borderTopRightRadius: sg,
          borderBottomLeftRadius: sg,
          borderBottomRightRadius: sg,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let n = oU.parse(e);
              if (n.length > 5) return e;
              let i = oU.createTransformer(e),
                o = "number" != typeof n[0] ? 1 : 0,
                a = r.x.scale * t.x,
                s = r.y.scale * t.y;
              (n[0 + o] /= a), (n[1 + o] /= s);
              let l = oS(a, s, 0.5);
              return (
                "number" == typeof n[2 + o] && (n[2 + o] /= l),
                "number" == typeof n[3 + o] && (n[3 + o] /= l),
                i(n)
              );
            },
          },
        },
        sv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        sx = sv.length,
        sw = (e) => ("string" == typeof e ? parseFloat(e) : e),
        sC = (e) => "number" == typeof e || n4.test(e);
      function sk(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let sE = sS(0, 0.5, oc),
        sT = sS(0.5, 0.95, ny);
      function sS(e, t, r) {
        return (n) => (n < e ? 0 : n > t ? 1 : r(oZ(e, t, n)));
      }
      function sP(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function sA(e, t) {
        sP(e.x, t.x), sP(e.y, t.y);
      }
      function sN(e, t, r, n, i) {
        return (
          (e -= t),
          (e = n + (1 / r) * (e - n)),
          void 0 !== i && (e = n + (1 / i) * (e - n)),
          e
        );
      }
      function sj(e, t, [r, n, i], o, a) {
        !(function (e, t = 0, r = 1, n = 0.5, i, o = e, a = e) {
          if (n8.test(t)) {
            t = parseFloat(t);
            let e = oS(a.min, a.max, t / 100);
            t = e - a.min;
          }
          if ("number" != typeof t) return;
          let s = oS(o.min, o.max, n);
          e === o && (s -= t),
            (e.min = sN(e.min, t, r, s, i)),
            (e.max = sN(e.max, t, r, s, i));
        })(e, t[r], t[n], t[i], t.scale, o, a);
      }
      let sR = ["x", "scaleX", "originX"],
        sL = ["y", "scaleY", "originY"];
      function sM(e, t, r, n) {
        sj(e.x, t, sR, r ? r.x : void 0, n ? n.x : void 0),
          sj(e.y, t, sL, r ? r.y : void 0, n ? n.y : void 0);
      }
      function sO(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function sB(e) {
        return sO(e.x) && sO(e.y);
      }
      function sD(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      function sI(e) {
        return aV(e.x) / aV(e.y);
      }
      class sF {
        constructor() {
          this.members = [];
        }
        add(e) {
          ab(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (av(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: n } = e.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function s_(e, t, r) {
        let n = "",
          i = e.x.translate / t.x,
          o = e.y.translate / t.y;
        if (
          ((i || o) && (n = `translate3d(${i}px, ${o}px, 0) `),
          (1 !== t.x || 1 !== t.y) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
          r)
        ) {
          let { rotate: e, rotateX: t, rotateY: i } = r;
          e && (n += `rotate(${e}deg) `),
            t && (n += `rotateX(${t}deg) `),
            i && (n += `rotateY(${i}deg) `);
        }
        let a = e.x.scale * t.x,
          s = e.y.scale * t.y;
        return (1 !== a || 1 !== s) && (n += `scale(${a}, ${s})`), n || "none";
      }
      let sH = (e, t) => e.depth - t.depth;
      class sU {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          ab(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          av(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(sH),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      let sV = ["", "X", "Y", "Z"],
        sG = 0,
        sz = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function sq({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = sG++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (sz.totalNodes =
                  sz.resolvedTargetDeltas =
                  sz.recalculatedProjection =
                    0),
                  this.nodes.forEach(s$),
                  this.nodes.forEach(s1),
                  this.nodes.forEach(s2),
                  this.nodes.forEach(sK),
                  window.MotionDebug && window.MotionDebug.record(sz);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new sU());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new ax()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = performance.now(),
                      n = ({ timestamp: i }) => {
                        let o = i - r;
                        o >= t && (na(n), e(o - t));
                      };
                    return no.read(n, !0), () => na(n);
                  })(n, 250)),
                  sf.hasAnimatedSinceResize &&
                    ((sf.hasAnimatedSinceResize = !1), this.nodes.forEach(s0));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        s7,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: s,
                      } = o.getProps(),
                      l = !this.targetLayout || !sD(this.targetLayout, n) || r,
                      u = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...ap(i, "layout"), onPlay: a, onComplete: s };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || s0(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              na(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(s3),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let e = this.isUpdateBlocked();
            if (e) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(sY);
              return;
            }
            this.isUpdating || this.nodes.forEach(sQ),
              (this.isUpdating = !1),
              this.nodes.forEach(sJ),
              this.nodes.forEach(sW),
              this.nodes.forEach(sZ),
              this.clearAllSnapshots();
            let t = performance.now();
            (r6.delta = n$(0, 1e3 / 60, t - r6.timestamp)),
              (r6.timestamp = t),
              (r6.isProcessing = !0),
              nt.update.process(r6),
              nt.preRender.process(r6),
              nt.render.process(r6),
              (r6.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(sX), this.sharedNodes.forEach(s5);
          }
          scheduleUpdateProjection() {
            no.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            no.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let t = this.path[e];
                t.updateScroll();
              }
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = a2()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: n(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !sB(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            e &&
              (t || a6(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              e && (n = this.removeTransform(n)),
              s9((t = n).x),
              s9(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return a2();
            let t = e.measureViewportBox(),
              { scroll: r } = this.root;
            return r && (sn(t.x, r.offset.x), sn(t.y, r.offset.y)), t;
          }
          removeElementScroll(e) {
            let t = a2();
            sA(t, e);
            for (let r = 0; r < this.path.length; r++) {
              let n = this.path[r],
                { scroll: i, options: o } = n;
              if (n !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  sA(t, e);
                  let { scroll: r } = this.root;
                  r && (sn(t.x, -r.offset.x), sn(t.y, -r.offset.y));
                }
                sn(t.x, i.offset.x), sn(t.y, i.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let r = a2();
            sA(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              !t &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                ss(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                a6(n.latestValues) && ss(r, n.latestValues);
            }
            return a6(this.latestValues) && ss(r, this.latestValues), r;
          }
          removeTransform(e) {
            let t = a2();
            sA(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !a6(r.latestValues)) continue;
              a4(r.latestValues) && r.updateSnapshot();
              let n = a2(),
                i = r.measurePageBox();
              sA(n, i),
                sM(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return a6(this.latestValues) && sM(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== r6.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, n, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let a = !!this.resumingFrom || this !== o,
              s = !(
                e ||
                (a && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (s) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = r6.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = a2()),
                    (this.relativeTargetOrigin = a2()),
                    a$(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    sA(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = a2()), (this.targetWithTransforms = a2())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      aW(r.x, n.x, i.x),
                      aW(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : sA(this.target, this.layout.layoutBox),
                      st(this.target, this.targetDelta))
                    : sA(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = a2()),
                      (this.relativeTargetOrigin = a2()),
                      a$(this.relativeTargetOrigin, this.target, e.target),
                      sA(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                sz.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              a4(this.parent.latestValues) ||
              a7(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === r6.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            sA(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
              s = this.treeScale.y;
            !(function (e, t, r, n = !1) {
              let i, o;
              let a = r.length;
              if (a) {
                t.x = t.y = 1;
                for (let s = 0; s < a; s++) {
                  o = (i = r[s]).projectionDelta;
                  let a = i.instance;
                  (!a || !a.style || "contents" !== a.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      ss(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), st(e, o)),
                    n && a6(i.latestValues) && ss(e, i.latestValues));
                }
                (t.x = sr(t.x)), (t.y = sr(t.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (t.target = t.layout.layoutBox);
            let { target: l } = t;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = a0()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = a0()),
              (this.projectionDeltaWithTransform = a0()));
            let u = this.projectionTransform;
            aq(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = s_(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== a ||
                this.treeScale.y !== s) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              sz.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              a = a0();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let s = a2(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              c = l !== u,
              h = this.getStack(),
              d = !h || h.members.length <= 1,
              f = !!(
                c &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(s6)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                var n, l;
                let u = t / 1e3;
                s8(a.x, e.x, u),
                  s8(a.y, e.y, u),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (a$(
                      s,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (n = this.relativeTarget),
                    (l = this.relativeTargetOrigin),
                    s4(n.x, l.x, s.x, u),
                    s4(n.y, l.y, s.y, u),
                    r &&
                      sD(this.relativeTarget, r) &&
                      (this.isProjectionDirty = !1),
                    r || (r = a2()),
                    sA(r, this.relativeTarget)),
                  c &&
                    ((this.animationValues = o),
                    (function (e, t, r, n, i, o) {
                      i
                        ? ((e.opacity = oS(
                            0,
                            void 0 !== r.opacity ? r.opacity : 1,
                            sE(n)
                          )),
                          (e.opacityExit = oS(
                            void 0 !== t.opacity ? t.opacity : 1,
                            0,
                            sT(n)
                          )))
                        : o &&
                          (e.opacity = oS(
                            void 0 !== t.opacity ? t.opacity : 1,
                            void 0 !== r.opacity ? r.opacity : 1,
                            n
                          ));
                      for (let i = 0; i < sx; i++) {
                        let o = `border${sv[i]}Radius`,
                          a = sk(t, o),
                          s = sk(r, o);
                        if (void 0 === a && void 0 === s) continue;
                        a || (a = 0), s || (s = 0);
                        let l = 0 === a || 0 === s || sC(a) === sC(s);
                        l
                          ? ((e[o] = Math.max(oS(sw(a), sw(s), n), 0)),
                            (n8.test(s) || n8.test(a)) && (e[o] += "%"))
                          : (e[o] = s);
                      }
                      (t.rotate || r.rotate) &&
                        (e.rotate = oS(t.rotate || 0, r.rotate || 0, n));
                    })(o, i, this.latestValues, u, f, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = u);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (na(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = no.update(() => {
                (sf.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let n = nU(e) ? e : ak(e);
                    return n.start(ag("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: n,
                latestValues: i,
              } = e;
            if (t && r && n) {
              if (
                this !== e &&
                this.layout &&
                n &&
                le(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || a2();
                let t = aV(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                let n = aV(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + n);
              }
              sA(t, r),
                ss(t, i),
                aq(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new sF());
            let r = this.sharedNodes.get(e);
            r.add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (t = !0),
              !t)
            )
              return;
            let n = {};
            for (let t = 0; t < sV.length; t++) {
              let i = "rotate" + sV[t];
              r[i] && ((n[i] = r[i]), e.setStaticValue(i, 0));
            }
            for (let t in (e.render(), n)) e.setStaticValue(t, n[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e = {}) {
            var t, r;
            let n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return { visibility: "hidden" };
            n.visibility = "";
            let i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents = iA(e.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents = iA(e.pointerEvents) || "")),
                this.hasProjected &&
                  !a6(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = s_(
                this.projectionDeltaWithTransform,
                this.treeScale,
                a
              )),
              i && (n.transform = i(a, n.transform));
            let { x: s, y: l } = this.projectionDelta;
            for (let e in ((n.transformOrigin = `${100 * s.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (t = a.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            nI)) {
              if (void 0 === a[e]) continue;
              let { correct: t, applyTo: r } = nI[e],
                i = "none" === n.transform ? a[e] : t(a[e], o);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) n[r[t]] = i;
              } else n[e] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this ? iA(e.pointerEvents) || "" : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(sY),
              this.root.sharedNodes.clear();
          }
        };
      }
      function sW(e) {
        e.updateLayout();
      }
      function sZ(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: n } = e.layout,
            { animationType: i } = e.options,
            o = r.source !== e.layout.source;
          "size" === i
            ? a3((e) => {
                let n = o ? r.measuredBox[e] : r.layoutBox[e],
                  i = aV(n);
                (n.min = t[e].min), (n.max = n.min + i);
              })
            : le(i, r.layoutBox, t) &&
              a3((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  a = aV(t[n]);
                (i.max = i.min + a),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[n].max = e.relativeTarget[n].min + a));
              });
          let a = a0();
          aq(a, t, r.layoutBox);
          let s = a0();
          o
            ? aq(s, e.applyTransform(n, !0), r.measuredBox)
            : aq(s, t, r.layoutBox);
          let l = !sB(a),
            u = !1;
          if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let a = a2();
                a$(a, r.layoutBox, i.layoutBox);
                let s = a2();
                a$(s, t, o.layoutBox),
                  sD(a, s) || (u = !0),
                  n.options.layoutRoot &&
                    ((e.relativeTarget = s),
                    (e.relativeTargetOrigin = a),
                    (e.relativeParent = n));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: s,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function s$(e) {
        sz.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function sK(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function sX(e) {
        e.clearSnapshot();
      }
      function sY(e) {
        e.clearMeasurements();
      }
      function sQ(e) {
        e.isLayoutDirty = !1;
      }
      function sJ(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function s0(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function s1(e) {
        e.resolveTargetDelta();
      }
      function s2(e) {
        e.calcProjection();
      }
      function s3(e) {
        e.resetRotation();
      }
      function s5(e) {
        e.removeLeadSnapshot();
      }
      function s8(e, t, r) {
        (e.translate = oS(t.translate, 0, r)),
          (e.scale = oS(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function s4(e, t, r, n) {
        (e.min = oS(t.min, r.min, n)), (e.max = oS(t.max, r.max, n));
      }
      function s6(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let s7 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function s9(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function le(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !aG(sI(t), sI(r), 0.2))
        );
      }
      let lt = sq({
          attachResizeListener: (e, t) => iL(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        lr = { current: void 0 },
        ln = sq({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!lr.current) {
              let e = new lt({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (lr.current = e);
            }
            return lr.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        }),
        li = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function lo(e, t, r = 1) {
        ny(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [n, i] = (function (e) {
          let t = li.exec(e);
          if (!t) return [,];
          let [, r, n] = t;
          return [r, n];
        })(e);
        if (!n) return;
        let o = window.getComputedStyle(t).getPropertyValue(n);
        return o ? o.trim() : nW(i) ? lo(i, t, r + 1) : i;
      }
      let la = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        ls = (e) => la.has(e),
        ll = (e) => Object.keys(e).some(ls),
        lu = (e) => e === nK || e === n4,
        lc = (e, t) => parseFloat(e.split(", ")[t]),
        lh =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return lc(i[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/);
              return t ? lc(t[1], e) : 0;
            }
          },
        ld = new Set(["x", "y", "z"]),
        lf = nF.filter((e) => !ld.has(e)),
        lp = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: lh(4, 13),
          y: lh(5, 14),
        },
        lg = (e, t, r) => {
          let n = t.measureViewportBox(),
            i = t.current,
            o = getComputedStyle(i),
            { display: a } = o,
            s = {};
          "none" === a && t.setStaticValue("display", e.display || "block"),
            r.forEach((e) => {
              s[e] = lp[e](n, o);
            }),
            t.render();
          let l = t.measureViewportBox();
          return (
            r.forEach((r) => {
              let n = t.getValue(r);
              n && n.jump(s[r]), (e[r] = lp[r](l, o));
            }),
            e
          );
        },
        lm = (e, t, r = {}, n = {}) => {
          (t = { ...t }), (n = { ...n });
          let i = Object.keys(t).filter(ls),
            o = [],
            a = !1,
            s = [];
          if (
            (i.forEach((i) => {
              let l;
              let u = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = r[i],
                h = aS(c),
                d = t[i];
              if (iT(d)) {
                let e = d.length,
                  t = null === d[0] ? 1 : 0;
                h = aS((c = d[t]));
                for (let r = t; r < e && null !== d[r]; r++)
                  l
                    ? ny(
                        aS(d[r]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ny(
                        (l = aS(d[r])) === h || (lu(h) && lu(l)),
                        "Keyframes must be of the same dimension as the current value"
                      );
              } else l = aS(d);
              if (h !== l) {
                if (lu(h) && lu(l)) {
                  let e = u.get();
                  "string" == typeof e && u.set(parseFloat(e)),
                    "string" == typeof d
                      ? (t[i] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === n4 &&
                        (t[i] = d.map(parseFloat));
                } else
                  (null == h ? void 0 : h.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (t[i] = h.transform(d))
                    : (a ||
                        ((o = (function (e) {
                          let t = [];
                          return (
                            lf.forEach((r) => {
                              let n = e.getValue(r);
                              void 0 !== n &&
                                (t.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (a = !0)),
                      s.push(i),
                      (n[i] = void 0 !== n[i] ? n[i] : t[i]),
                      u.jump(d));
              }
            }),
            !s.length)
          )
            return { target: t, transitionEnd: n };
          {
            let r = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = lg(t, e, s);
            return (
              o.length &&
                o.forEach(([t, r]) => {
                  e.getValue(t).set(r);
                }),
              e.render(),
              ns.j && null !== r && window.scrollTo({ top: r }),
              { target: i, transitionEnd: n }
            );
          }
        },
        ly = (e, t, r, n) => {
          var i, o;
          let a = (function (e, { ...t }, r) {
            let n = e.current;
            if (!(n instanceof Element)) return { target: t, transitionEnd: r };
            for (let i in (r && (r = { ...r }),
            e.values.forEach((e) => {
              let t = e.get();
              if (!nW(t)) return;
              let r = lo(t, n);
              r && e.set(r);
            }),
            t)) {
              let e = t[i];
              if (!nW(e)) continue;
              let o = lo(e, n);
              o && ((t[i] = o), r || (r = {}), void 0 === r[i] && (r[i] = e));
            }
            return { target: t, transitionEnd: r };
          })(e, t, n);
          return (
            (t = a.target),
            (n = a.transitionEnd),
            (i = t),
            (o = n),
            ll(i) ? lm(e, i, r, o) : { target: i, transitionEnd: o }
          );
        };
      var lb = r(5654),
        lv = r(1163);
      let lx = new WeakMap(),
        lw = Object.keys(nL),
        lC = lw.length,
        lk = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        lE = nP.length;
      class lT {
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: n,
            visualState: i,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => no.render(this.render, !1, !0));
          let { latestValues: a, renderState: s } = i;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = s),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.isControllingVariants = nA(t)),
            (this.isVariantNode = nN(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {});
          for (let e in u) {
            let t = u[e];
            void 0 !== a[e] && nU(t) && (t.set(a[e], !1), am(l) && l.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {};
        }
        mount(e) {
          (this.current = e),
            lx.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            lv.O.current || (0, lb.A)(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || lv.n.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (lx.delete(this.current),
          this.projection && this.projection.unmount(),
          na(this.notifyUpdate),
          na(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r = n_.has(e),
            n = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && no.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            n(), i();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, r, n, i) {
          let o, a;
          for (let e = 0; e < lC; e++) {
            let r = lw[e],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: s,
                MeasureLayout: l,
              } = nL[r];
            s && (o = s),
              n(t) &&
                (!this.features[r] && i && (this.features[r] = new i(this)),
                l && (a = l));
          }
          if (!this.projection && o) {
            this.projection = new o(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: e,
              layout: r,
              drag: n,
              dragConstraints: a,
              layoutScroll: s,
              layoutRoot: l,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: !!n || (a && nk(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: i,
              layoutScroll: s,
              layoutRoot: l,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : a2();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t);
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < lk.length; t++) {
            let r = lk[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = e["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (e, t, r) {
            let { willChange: n } = t;
            for (let i in t) {
              let o = t[i],
                a = r[i];
              if (nU(o)) e.addValue(i, o), am(n) && n.add(i);
              else if (nU(a))
                e.addValue(i, ak(o, { owner: e })), am(n) && n.remove(i);
              else if (a !== o) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  t.hasAnimated || t.set(o);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, ak(void 0 !== t ? t : o, { owner: e }));
                }
              }
            }
            for (let n in r) void 0 === t[n] && e.removeValue(n);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < lE; e++) {
            let r = nP[e],
              n = this.props[r];
            (nE(n) || !1 === n) && (t[r] = n);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          t !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, t)),
            this.values.set(e, t),
            (this.latestValues[e] = t.get());
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = ak(t, { owner: this })), this.addValue(e, r)),
            r
          );
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current
            ? this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let { initial: r } = this.props,
            n =
              "string" == typeof r || "object" == typeof r
                ? null === (t = iE(this.props, r)) || void 0 === t
                  ? void 0
                  : t[e]
                : void 0;
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || nU(i)
            ? void 0 !== this.initialValues[e] && void 0 === n
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new ax()), this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class lS extends lT {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
        makeTargetAnimatableFromInstance(
          { transition: e, transitionEnd: t, ...r },
          { transformValues: n },
          i
        ) {
          let o = (function (e, t, r) {
            let n = {};
            for (let i in e) {
              let e = (function (e, t) {
                if (!t) return;
                let r = t[e] || t.default || t;
                return r.from;
              })(i, t);
              if (void 0 !== e) n[i] = e;
              else {
                let e = r.getValue(i);
                e && (n[i] = e.get());
              }
            }
            return n;
          })(r, e || {}, this);
          if ((n && (t && (t = n(t)), r && (r = n(r)), o && (o = n(o))), i)) {
            !(function (e, t, r) {
              var n, i;
              let o = Object.keys(t).filter((t) => !e.hasValue(t)),
                a = o.length;
              if (a)
                for (let s = 0; s < a; s++) {
                  let a = o[s],
                    l = t[a],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (i =
                            null !== (n = r[a]) && void 0 !== n
                              ? n
                              : e.readValue(a)) && void 0 !== i
                          ? i
                          : t[a]),
                    null != u &&
                      ("string" == typeof u && (ay(u) || af(u))
                        ? (u = parseFloat(u))
                        : !aA(u) && oU.test(l) && (u = ad(a, l)),
                      e.addValue(a, ak(u, { owner: e })),
                      void 0 === r[a] && (r[a] = u),
                      null !== u && e.setBaseTarget(a, u));
                }
            })(this, r, o);
            let e = ly(this, r, o, t);
            (t = e.transitionEnd), (r = e.target);
          }
          return { transition: e, transitionEnd: t, ...r };
        }
      }
      class lP extends lS {
        readValueFromInstance(e, t) {
          if (n_.has(t)) {
            let e = ah(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              n = (nq(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return sl(e, t);
        }
        build(e, t, r, n) {
          ir(e, t, r, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t) {
          return iC(e, t);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          nU(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, r, n) {
          iv(e, t, r, n);
        }
      }
      class lA extends lS {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (n_.has(t)) {
            let e = ah(t);
            return (e && e.default) || 0;
          }
          return (t = ix.has(t) ? t : ib(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return a2();
        }
        scrapeMotionValuesFromProps(e, t) {
          return ik(e, t);
        }
        build(e, t, r, n) {
          ip(e, t, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, r, n) {
          iw(e, t, r, n);
        }
        mount(e) {
          (this.isSVGTag = im(e.tagName)), super.mount(e);
        }
      }
      let lN = (e, t) =>
          nD(e)
            ? new lA(t, { enableHardwareAcceleration: !1 })
            : new lP(t, { enableHardwareAcceleration: !0 }),
        lj = {
          animation: {
            Feature: class extends iz {
              constructor(e) {
                super(e),
                  e.animationState ||
                    (e.animationState = (function (e) {
                      let t = (t) =>
                          Promise.all(
                            t.map(({ animation: t, options: r }) =>
                              (function (e, t, r = {}) {
                                let n;
                                if (
                                  (e.notify("AnimationStart", t),
                                  Array.isArray(t))
                                ) {
                                  let i = t.map((t) => aj(e, t, r));
                                  n = Promise.all(i);
                                } else if ("string" == typeof t)
                                  n = aj(e, t, r);
                                else {
                                  let i =
                                    "function" == typeof t
                                      ? i0(e, t, r.custom)
                                      : t;
                                  n = Promise.all(aN(e, i, r));
                                }
                                return n.then(() =>
                                  e.notify("AnimationComplete", t)
                                );
                              })(e, t, r)
                            )
                          ),
                        r = {
                          animate: aO(!0),
                          whileInView: aO(),
                          whileHover: aO(),
                          whileTap: aO(),
                          whileDrag: aO(),
                          whileFocus: aO(),
                          exit: aO(),
                        },
                        n = !0,
                        i = (t, r) => {
                          let n = i0(e, r);
                          if (n) {
                            let { transition: e, transitionEnd: r, ...i } = n;
                            t = { ...t, ...i, ...r };
                          }
                          return t;
                        };
                      function o(o, a) {
                        let s = e.getProps(),
                          l = e.getVariantContext(!0) || {},
                          u = [],
                          c = new Set(),
                          h = {},
                          d = 1 / 0;
                        for (let t = 0; t < aM; t++) {
                          var f;
                          let p = aL[t],
                            g = r[p],
                            m = void 0 !== s[p] ? s[p] : l[p],
                            y = nE(m),
                            b = p === a ? g.isActive : null;
                          !1 === b && (d = t);
                          let v = m === l[p] && m !== s[p] && y;
                          if (
                            (v && n && e.manuallyAnimateOnMount && (v = !1),
                            (g.protectedKeys = { ...h }),
                            (!g.isActive && null === b) ||
                              (!m && !g.prevProp) ||
                              nT(m) ||
                              "boolean" == typeof m)
                          )
                            continue;
                          let x =
                              ((f = g.prevProp),
                              "string" == typeof m
                                ? m !== f
                                : !!Array.isArray(m) && !iJ(m, f)),
                            w =
                              x ||
                              (p === a && g.isActive && !v && y) ||
                              (t > d && y),
                            C = Array.isArray(m) ? m : [m],
                            k = C.reduce(i, {});
                          !1 === b && (k = {});
                          let { prevResolvedValues: E = {} } = g,
                            T = { ...E, ...k },
                            S = (e) => {
                              (w = !0), c.delete(e), (g.needsAnimating[e] = !0);
                            };
                          for (let e in T) {
                            let t = k[e],
                              r = E[e];
                            h.hasOwnProperty(e) ||
                              (t !== r
                                ? iT(t) && iT(r)
                                  ? !iJ(t, r) || x
                                    ? S(e)
                                    : (g.protectedKeys[e] = !0)
                                  : void 0 !== t
                                  ? S(e)
                                  : c.add(e)
                                : void 0 !== t && c.has(e)
                                ? S(e)
                                : (g.protectedKeys[e] = !0));
                          }
                          (g.prevProp = m),
                            (g.prevResolvedValues = k),
                            g.isActive && (h = { ...h, ...k }),
                            n && e.blockInitialAnimation && (w = !1),
                            w &&
                              !v &&
                              u.push(
                                ...C.map((e) => ({
                                  animation: e,
                                  options: { type: p, ...o },
                                }))
                              );
                        }
                        if (c.size) {
                          let t = {};
                          c.forEach((r) => {
                            let n = e.getBaseTarget(r);
                            void 0 !== n && (t[r] = n);
                          }),
                            u.push({ animation: t });
                        }
                        let p = !!u.length;
                        return (
                          n &&
                            !1 === s.initial &&
                            !e.manuallyAnimateOnMount &&
                            (p = !1),
                          (n = !1),
                          p ? t(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: o,
                        setActive: function (t, n, i) {
                          var a;
                          if (r[t].isActive === n) return Promise.resolve();
                          null === (a = e.variantChildren) ||
                            void 0 === a ||
                            a.forEach((e) => {
                              var r;
                              return null === (r = e.animationState) ||
                                void 0 === r
                                ? void 0
                                : r.setActive(t, n);
                            }),
                            (r[t].isActive = n);
                          let s = o(i, t);
                          for (let e in r) r[e].protectedKeys = {};
                          return s;
                        },
                        setAnimateFunction: function (r) {
                          t = r(e);
                        },
                        getState: () => r,
                      };
                    })(e));
              }
              updateAnimationControlsSubscription() {
                let { animate: e } = this.node.getProps();
                this.unmount(),
                  nT(e) && (this.unmount = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends iz {
              constructor() {
                super(...arguments), (this.id = aB++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: e,
                    onExitComplete: t,
                    custom: r,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === n) return;
                let i = this.node.animationState.setActive("exit", !e, {
                  custom: null != r ? r : this.node.getProps().custom,
                });
                t && !e && i.then(() => t(this.id));
              }
              mount() {
                let { register: e } = this.node.presenceContext || {};
                e && (this.unmount = e(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends iz {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: e = {} } = this.node.getProps(),
                  { root: t, margin: r, amount: n = "some", once: i } = e,
                  o = {
                    root: t ? t.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof n ? n : iQ[n],
                  },
                  a = (e) => {
                    let { isIntersecting: t } = e;
                    if (
                      this.isInView === t ||
                      ((this.isInView = t), i && !t && this.hasEnteredView)
                    )
                      return;
                    t && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", t);
                    let { onViewportEnter: r, onViewportLeave: n } =
                        this.node.getProps(),
                      o = t ? r : n;
                    o && o(e);
                  };
                return (function (e, t, r) {
                  let n = (function ({ root: e, ...t }) {
                    let r = e || document;
                    iK.has(r) || iK.set(r, {});
                    let n = iK.get(r),
                      i = JSON.stringify(t);
                    return (
                      n[i] ||
                        (n[i] = new IntersectionObserver(iY, {
                          root: e,
                          ...t,
                        })),
                      n[i]
                    );
                  })(t);
                  return (
                    i$.set(e, r),
                    n.observe(e),
                    () => {
                      i$.delete(e), n.unobserve(e);
                    }
                  );
                })(this.node.current, o, a);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: e, prevProps: t } = this.node,
                  r = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: e = {} },
                      { viewport: t = {} } = {}
                    ) {
                      return (r) => e[r] !== t[r];
                    })(e, t)
                  );
                r && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends iz {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = ny),
                  (this.removeEndListeners = ny),
                  (this.removeAccessibleListeners = ny),
                  (this.startPointerPress = (e, t) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let r = this.node.getProps(),
                      n = (e, t) => {
                        if (!this.checkPressEnd()) return;
                        let { onTap: r, onTapCancel: n } = this.node.getProps();
                        no.update(() => {
                          iW(this.node.current, e.target)
                            ? r && r(e, t)
                            : n && n(e, t);
                        });
                      },
                      i = iD(window, "pointerup", n, {
                        passive: !(r.onTap || r.onPointerUp),
                      }),
                      o = iD(
                        window,
                        "pointercancel",
                        (e, t) => this.cancelPress(e, t),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                      );
                    (this.removeEndListeners = iF(i, o)), this.startPress(e, t);
                  }),
                  (this.startAccessiblePress = () => {
                    let e = (e) => {
                        if ("Enter" !== e.key || this.isPressing) return;
                        let t = (e) => {
                          "Enter" === e.key &&
                            this.checkPressEnd() &&
                            iZ("up", (e, t) => {
                              let { onTap: r } = this.node.getProps();
                              r && no.update(() => r(e, t));
                            });
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = iL(
                            this.node.current,
                            "keyup",
                            t
                          )),
                          iZ("down", (e, t) => {
                            this.startPress(e, t);
                          });
                      },
                      t = iL(this.node.current, "keydown", e),
                      r = () => {
                        this.isPressing &&
                          iZ("cancel", (e, t) => this.cancelPress(e, t));
                      },
                      n = iL(this.node.current, "blur", r);
                    this.removeAccessibleListeners = iF(t, n);
                  });
              }
              startPress(e, t) {
                this.isPressing = !0;
                let { onTapStart: r, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  r && no.update(() => r(e, t));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let e = this.node.getProps();
                return (
                  e.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !iG()
                );
              }
              cancelPress(e, t) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: r } = this.node.getProps();
                r && no.update(() => r(e, t));
              }
              mount() {
                let e = this.node.getProps(),
                  t = iD(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(e.onTapStart || e.onPointerStart) }
                  ),
                  r = iL(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = iF(t, r);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends iz {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (t) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = iF(
                  iL(this.node.current, "focus", () => this.onFocus()),
                  iL(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends iz {
              mount() {
                this.unmount = iF(iq(this.node, !0), iq(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends iz {
              constructor() {
                super(...arguments), (this.removePointerDownListener = ny);
              }
              onPointerDown(e) {
                this.session = new aI(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: r,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: sd(e),
                  onStart: sd(t),
                  onMove: r,
                  onEnd: (e, t) => {
                    delete this.session, n && no.update(() => n(e, t));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = iD(
                  this.node.current,
                  "pointerdown",
                  (e) => this.onPointerDown(e)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends iz {
              constructor(e) {
                super(e),
                  (this.removeGroupControls = ny),
                  (this.removeListeners = ny),
                  (this.controls = new sc(e));
              }
              mount() {
                let { dragControls: e } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || ny);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: ln,
            MeasureLayout: sy,
          },
          layout: { ProjectionNode: ln, MeasureLayout: sy },
        },
        lR = (function (e) {
          function t(t, r = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: r,
              useVisualState: n,
              Component: i,
            }) {
              e &&
                (function (e) {
                  for (let t in e) nL[t] = { ...nL[t], ...e[t] };
                })(e);
              let o = (0, l.forwardRef)(function (o, a) {
                var s, u;
                let c;
                let h = {
                    ...(0, l.useContext)(nx),
                    ...o,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, l.useContext)(nm).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(o),
                  },
                  { isStatic: d } = h,
                  f = (function (e) {
                    let { initial: t, animate: r } = (function (e, t) {
                      if (nA(e)) {
                        let { initial: t, animate: r } = e;
                        return {
                          initial: !1 === t || nE(t) ? t : void 0,
                          animate: nE(r) ? r : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, l.useContext)(nw));
                    return (0, l.useMemo)(
                      () => ({ initial: t, animate: r }),
                      [nj(t), nj(r)]
                    );
                  })(o),
                  p = n(o, d);
                if (!d && ns.j) {
                  f.visualElement = (function (e, t, r, n) {
                    let { visualElement: i } = (0, l.useContext)(nw),
                      o = (0, l.useContext)(nC),
                      a = (0, l.useContext)(nc),
                      s = (0, l.useContext)(nx).reducedMotion,
                      u = (0, l.useRef)();
                    (n = n || o.renderer),
                      !u.current &&
                        n &&
                        (u.current = n(e, {
                          visualState: t,
                          parent: i,
                          props: r,
                          presenceContext: a,
                          blockInitialAnimation: !!a && !1 === a.initial,
                          reducedMotionConfig: s,
                        }));
                    let c = u.current;
                    (0, l.useInsertionEffect)(() => {
                      c && c.update(r, a);
                    }),
                      nl(() => {
                        c && c.render();
                      }),
                      (0, l.useEffect)(() => {
                        c && c.updateFeatures();
                      });
                    let h = window.HandoffAppearAnimations ? nl : l.useEffect;
                    return (
                      h(() => {
                        c &&
                          c.animationState &&
                          c.animationState.animateChanges();
                      }),
                      c
                    );
                  })(i, p, h, t);
                  let r = (0, l.useContext)(nM),
                    n = (0, l.useContext)(nC).strict;
                  f.visualElement &&
                    (c = f.visualElement.loadFeatures(h, n, e, r));
                }
                return l.createElement(
                  nw.Provider,
                  { value: f },
                  c && f.visualElement
                    ? l.createElement(c, {
                        visualElement: f.visualElement,
                        ...h,
                      })
                    : null,
                  r(
                    i,
                    o,
                    ((s = f.visualElement),
                    (u = a),
                    (0, l.useCallback)(
                      (e) => {
                        e && p.mount && p.mount(e),
                          s && (e ? s.mount(e) : s.unmount()),
                          u &&
                            ("function" == typeof u
                              ? u(e)
                              : nk(u) && (u.current = e));
                      },
                      [s]
                    )),
                    p,
                    d,
                    f.visualElement
                  )
                );
              });
              return (o[nO] = i), o;
            })(e(t, r));
          }
          if ("undefined" == typeof Proxy) return t;
          let r = new Map();
          return new Proxy(t, {
            get: (e, n) => (r.has(n) || r.set(n, t(n)), r.get(n)),
          });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, r, n) {
            let i = nD(e) ? ij : iR;
            return {
              ...i,
              preloadedFeatures: r,
              useRender: (function (e = !1) {
                let t = (t, r, n, { latestValues: i }, o) => {
                  let a = nD(t) ? iy : ia,
                    s = a(r, i, o, t),
                    u = (function (e, t, r) {
                      let n = {};
                      for (let i in e)
                        ("values" !== i || "object" != typeof e.values) &&
                          (iu(i) ||
                            (!0 === r && il(i)) ||
                            (!t && !il(i)) ||
                            (e.draggable && i.startsWith("onDrag"))) &&
                          (n[i] = e[i]);
                      return n;
                    })(r, "string" == typeof t, e),
                    c = { ...u, ...s, ref: n },
                    { children: h } = r,
                    d = (0, l.useMemo)(() => (nU(h) ? h.get() : h), [h]);
                  return (0, l.createElement)(t, { ...c, children: d });
                };
                return t;
              })(t),
              createVisualElement: n,
              Component: e,
            };
          })(e, t, lj, lN)
        ),
        lL = (e) => {
          let { className: t, onClose: r, label: n, mobileStyle: i, ...a } = e,
            [u] = (0, l.useState)(document.createElement("div"));
          (0, l.useLayoutEffect)(() => {
            let e = document.getElementById("modal-root");
            if (e)
              return (
                e.appendChild(u),
                () => {
                  e.removeChild(u);
                }
              );
          }, []);
          let { isDesktop: c, isFetched: h } = (0, r5.eI)(),
            d = (0, r4.J)(),
            f = {
              desktop: {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: d ? 0 : 0.1, ease: "linear" },
              },
              tab: {
                initial: { y: "100%" },
                animate: { y: 0 },
                exit: { y: "100%" },
                transition: { duration: d ? 0 : 0.1, ease: "easeInOut" },
              },
              cover: {
                initial: { x: "100%" },
                animate: { x: 0 },
                exit: { x: "100%" },
                transition: { duration: d ? 0 : 0.1, ease: "easeInOut" },
              },
            },
            [p, g] = (0, l.useState)(!0);
          if (h) {
            let e = c ? f.desktop : "cover" === i ? f.cover : f.tab;
            return e9.createPortal(
              (0, o.jsx)(lM, {
                label: n,
                onClose: () => g(!1),
                children: (0, o.jsx)(nv, {
                  onExitComplete: r,
                  children:
                    p &&
                    (0, o.jsx)(
                      lR.div,
                      {
                        id: "modal-animation-wrapper",
                        ...e,
                        className: s()(
                          "flex flex-col relative items-center p-8 shadow-xl overflow-y-auto md:rounded-lg",
                          "bg-pt-purple-700 text-pt-purple-50",
                          "h-screen md:h-auto md:max-h-[90vh]",
                          "w-screen md:w-full md:max-w-lg",
                          {
                            "!h-auto max-h-[90vh] rounded-t-lg":
                              "tab" === i || !i,
                          },
                          t
                        ),
                        onClick: (e) => e.stopPropagation(),
                        children: (0, o.jsx)(lO, {
                          onClose: () => g(!1),
                          mobileStyle: i,
                          ...a,
                        }),
                      },
                      "modal-".concat(n)
                    ),
                }),
              }),
              u
            );
          }
          return (0, o.jsx)(o.Fragment, {});
        },
        lM = (e) => {
          let { label: t, onClose: r, children: n } = e;
          return (0, o.jsx)("div", {
            className:
              "fixed flex inset-0 items-end justify-center bg-black/70 z-[100] md:items-center",
            onClick: r,
            "aria-label": t,
            children: n,
          });
        },
        lO = (e) => {
          let {
            headerContent: t,
            bodyContent: r,
            footerContent: n,
            headerClassName: i,
            bodyClassName: a,
            footerClassName: s,
            onClose: l,
            hideHeader: u,
            mobileStyle: c,
          } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              "tab" === c && (0, o.jsx)(lF, {}),
              !u && (0, o.jsx)(lB, { className: i, onClose: l, children: t }),
              (0, o.jsx)(lD, { className: a, children: r }),
              !!n && (0, o.jsx)(lI, { className: s, children: n }),
            ],
          });
        },
        lB = (e) => {
          let { children: t, className: r, onClose: n } = e;
          return (0, o.jsxs)("div", {
            className: s()("w-full flex pb-4 text-pt-purple-50", r),
            children: [
              t,
              (0, o.jsx)(r8, {
                className: "h-6 w-6 ml-auto cursor-pointer",
                onClick: n,
              }),
            ],
          });
        },
        lD = (e) => {
          let { children: t, className: r } = e;
          return (0, o.jsx)("div", {
            className: s()("w-full max-w-xl md:max-w-none", r),
            children: t,
          });
        },
        lI = (e) => {
          let { children: t, className: r } = e;
          return (0, o.jsx)("div", {
            className: s()("w-full max-w-xl pt-4 md:max-w-none", r),
            children: t,
          });
        },
        lF = () =>
          (0, o.jsx)("hr", {
            className:
              "absolute top-2 left-1/2 -translate-x-1/2 w-8 rounded border-1 border-pt-purple-200 md:hidden",
          });
      var l_ = r(5137);
      let lH = (e) => {
          let { href: t, text: r, size: n, className: i, iconClassName: a } = e;
          return (0, o.jsxs)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            className: s()(
              "inline-flex items-center gap-1",
              { "text-xs": "xs" === n },
              { "text-sm": "sm" === n },
              { "text-base": "md" === n || !n },
              { "text-lg": "lg" === n },
              i
            ),
            children: [
              r,
              (0, o.jsx)(l_, {
                className: s()(
                  "text-inherit",
                  {
                    "h-4 w-4": "xs" === n || "sm" === n,
                    "h-5 w-5": "md" === n || !n,
                    "h-6 w-6": "lg" === n,
                  },
                  a
                ),
              }),
            ],
          });
        },
        lU = (e) => {
          let {
            items: t,
            containerClassName: r,
            titleClassName: n,
            itemClassName: i,
            className: a,
            ...l
          } = e;
          return (0, o.jsx)(tX, {
            theme: {
              root: {
                base: "w-full flex justify-center px-12 pt-12 pb-24 shadow z-40 md:px-16",
              },
            },
            className: s()(a),
            ...l,
            children: (0, o.jsx)("div", {
              className: s()(
                "w-full flex justify-between gap-16 text-sm flex-wrap md:text-base",
                r
              ),
              children: t.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: s()("w-24 grow", e.className),
                    children: [
                      (0, o.jsx)(tX.Title, {
                        theme: { base: "mb-6" },
                        title: e.title,
                        className: s()(n, e.titleClassName),
                      }),
                      (0, o.jsx)(tX.LinkGroup, {
                        theme: {
                          base: "flex flex-col gap-6 text-pt-purple-100",
                        },
                        children: e.content.map((t, r) =>
                          (0, o.jsx)(
                            lV,
                            { ...t, className: s()(i, e.itemClassName) },
                            "ft-item-"
                              .concat(
                                e.title.toLowerCase().replaceAll(" ", "-"),
                                "-"
                              )
                              .concat(r)
                          )
                        ),
                      }),
                    ],
                  },
                  "ft-".concat(e.title.toLowerCase().replaceAll(" ", "-"))
                )
              ),
            }),
          });
        },
        lV = (e) => {
          let {
              content: t,
              href: r,
              icon: n,
              onClick: i,
              disabled: a,
              className: l,
            } = e,
            u = "flex items-center gap-2 whitespace-nowrap";
          return a
            ? (0, o.jsxs)("span", {
                className: s()(u, "text-pt-purple-300", l),
                children: [n, t],
              })
            : r
            ? (0, o.jsx)(tX.Link, {
                theme: { base: "" },
                href: r,
                className: s()(l),
                children: (0, o.jsxs)("span", {
                  className: s()(u),
                  children: [n, t],
                }),
              })
            : (0, o.jsxs)("span", {
                className: s()(u, { "cursor-pointer": void 0 !== i }, l),
                onClick: i,
                children: [n, t],
              });
        },
        lG = (e) => {
          let { className: t, smLogoClassName: r, mdLogoClassName: n } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("svg", {
                className: s()("w-[21px] h-auto md:hidden", t, r),
                viewBox: "0 0 21 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, o.jsx)("path", {
                  d: "M10.4497 0C16.2141 0 20.8871 4.75102 20.8871 10.6117V16.7134C20.8871 22.5741 16.2141 27.3251 10.4497 27.3251C9.54422 27.3251 8.66568 27.2079 7.82796 26.9875L7.82806 27.7079C7.82806 31.9952 4.39307 35.4789 0.129455 35.5481L0 35.5492V12.2035L0.011963 12.2032L0.0122811 10.6117C0.0122811 4.75102 4.68527 0 10.4497 0ZM10.4497 7.95877C9.00859 7.95877 7.84034 9.14652 7.84034 10.6117V16.7134C7.84034 18.1786 9.00859 19.3663 10.4497 19.3663C11.8908 19.3663 13.0591 18.1786 13.0591 16.7134V10.6117C13.0591 9.14652 11.8908 7.95877 10.4497 7.95877Z",
                  fill: "white",
                }),
              }),


              (0, o.jsxs)("img", {
                className: s()("w-[101px] h-auto hidden md:block", t, n),
                viewBox: "0 0 101 40",
                fill: "none",
                src: "/graphics/ptCaptain.png",
              }),

            ],
          });
        };
      var lz = r(8407);
      let lq = (e) => {
          let {
            links: t,
            activePage: r,
            linksAs: n,
            append: i,
            onClickBrand: a,
            onClickSettings: l,
            sticky: u,
            className: c,
            linkClassName: h,
            mobileBottomClassName: d,
          } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(ri, {
                fluid: !0,
                theme: {
                  base: "font-averta bg-pt-bg-purple-darker text-pt-purple-50 px-8 py-4 border-b-2 border-b-pt-purple-700 border-opacity-0 isolate z-50",
                },
                className: s()({ "fixed w-full border-opacity-100": u }, c),
                children: [
                  (0, o.jsx)(ri.Brand, {
                    href: a ? void 0 : "/",
                    onClick: a,
                    className: "cursor-pointer z-30",
                    children: (0, o.jsx)(lG, {}),
                  }),
                  (0, o.jsx)("div", {
                    className:
                      "hidden grow pl-4 gap-8 z-10 md:flex lg:absolute lg:w-full lg:justify-center lg:pr-16 lg:pl-0",
                    children: (0, o.jsx)(lW, {
                      links: t,
                      activePage: r,
                      Component: n,
                      linkClassName: h,
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className: "flex gap-2 items-center z-20",
                    children: [
                      i,
                      !!l &&
                        (0, o.jsx)(lz, {
                          className:
                            "h-6 w-6 text-pt-purple-50 hover:text-pt-purple-200 cursor-pointer",
                          onClick: l,
                        }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(lZ, {
                className: s()("z-50", d),
                children: (0, o.jsx)(lW, {
                  links: [{ href: "/", name: "Home" }, ...t],
                  activePage: r,
                  Component: n,
                  linkClassName: h,
                }),
              }),
            ],
          });
        },
        lW = (e) => {
          let { links: t, activePage: r, Component: n, linkClassName: i } = e;
          return (0, o.jsx)(o.Fragment, {
            children: t.map((e, t) => {
              let a = "nav-".concat(t, "-").concat(e.name.toLowerCase()),
                l = e.href === r,
                u = "block text-base font-semibold",
                c = { "!text-pt-teal": l };
              return n
                ? (0, o.jsx)(
                    n,
                    { href: e.href, className: s()(u, c, i), children: e.name },
                    a
                  )
                : (0, o.jsx)(
                    "a",
                    { href: e.href, className: s()(u, c, i), children: e.name },
                    a
                  );
            }),
          });
        },
        lZ = (e) => {
          let { children: t, className: r } = e;
          return (0, o.jsx)("div", {
            className: s()(
              "fixed bottom-0 flex w-full h-[60px] justify-center items-center gap-6 md:hidden",
              "bg-pt-purple-600 border-t-2 border-pt-purple-500",
              r
            ),
            children: t,
          });
        },
        l$ = (e) => {
          let { platform: t, className: r } = e,
            n = {
              discord: { svgIcon: lK },
              farcaster: { svgIcon: lX },
              github: { svgIcon: lY },
              lens: { svgIcon: lQ },
              medium: { svgIcon: lJ },
              mirror: { svgIcon: l0 },
              twitter: { svgIcon: l1 },
            }[t].svgIcon;
          return (0, o.jsx)(n, { className: s()(r) });
        },
        lK = (e) =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 20",
            fill: "none",
            className: e.className,
            children: (0, o.jsx)("path", {
              d: "M20.3303 2.42863C18.7535 1.70672 17.0889 1.19458 15.3789 0.905273C15.1449 1.32356 14.9332 1.75392 14.7447 2.19456C12.9233 1.9201 11.071 1.9201 9.24963 2.19456C9.06097 1.75397 8.84926 1.32361 8.61537 0.905273C6.90435 1.19702 5.23861 1.71038 3.6602 2.43241C0.526645 7.06856 -0.322812 11.5896 0.101917 16.0464C1.937 17.4022 3.99099 18.4334 6.17459 19.095C6.66628 18.4337 7.10135 17.7321 7.47521 16.9978C6.76512 16.7326 6.07977 16.4054 5.42707 16.0199C5.59885 15.8954 5.76685 15.767 5.92919 15.6424C7.82839 16.5356 9.90126 16.9986 12 16.9986C14.0987 16.9986 16.1716 16.5356 18.0708 15.6424C18.235 15.7764 18.403 15.9048 18.5729 16.0199C17.9189 16.406 17.2323 16.7338 16.521 16.9997C16.8944 17.7337 17.3295 18.4346 17.8216 19.095C20.0071 18.436 22.0626 17.4054 23.898 16.0483C24.3964 10.8798 23.0467 6.40032 20.3303 2.42863ZM8.0132 13.3055C6.82962 13.3055 5.8518 12.2314 5.8518 10.91C5.8518 9.58861 6.79564 8.50508 8.00942 8.50508C9.2232 8.50508 10.1935 9.58861 10.1727 10.91C10.1519 12.2314 9.21943 13.3055 8.0132 13.3055ZM15.9868 13.3055C14.8013 13.3055 13.8273 12.2314 13.8273 10.91C13.8273 9.58861 14.7711 8.50508 15.9868 8.50508C17.2024 8.50508 18.1652 9.58861 18.1444 10.91C18.1236 12.2314 17.193 13.3055 15.9868 13.3055Z",
              fill: "#DECEFF",
            }),
          }),
        lX = (e) =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 16",
            fill: "none",
            className: e.className,
            children: (0, o.jsx)("path", {
              d: "M3 0H15V2H18L17.3125 4.31641H16.7344V13.6836C17.0312 13.6836 17.2656 13.918 17.2656 14.2109V14.8438H17.3672C17.6562 14.8438 17.8984 15.0781 17.8984 15.3672V16H15H13.2422H12V15.3672C12 15.0781 12.2344 14.8438 12.5234 14.8438H12.6328V14.2109C12.6328 13.918 12.8672 13.6836 13.1562 13.6836H13.2422V8.67188C13.0234 6.64453 11.2109 5.05859 9 5.05859C6.78906 5.05859 4.97656 6.64453 4.75781 8.67188V13.6836H4.84375C5.13281 13.6836 5.36719 13.918 5.36719 14.2109V14.8438H5.47656C5.59375 14.8438 5.69531 14.8828 5.78125 14.9453C5.91406 15.0391 6 15.1914 6 15.3672V16H4.75781H3H0.101562V15.3672C0.101562 15.0781 0.34375 14.8438 0.632812 14.8438H0.734375V14.2109C0.734375 14.0977 0.773438 13.9922 0.835938 13.9062C0.929688 13.7734 1.08594 13.6836 1.26562 13.6836V4.31641H0.6875L0 2H3V0Z",
              fill: "#DECEFF",
            }),
          }),
        lY = (e) =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 21 21",
            fill: "none",
            className: e.className,
            children: (0, o.jsx)("path", {
              d: "M7.26758 16.4961C7.26758 16.4141 7.18555 16.332 7.0625 16.332C6.93945 16.332 6.85742 16.4141 6.85742 16.4961C6.85742 16.5781 6.93945 16.6602 7.0625 16.6191C7.18555 16.6191 7.26758 16.5781 7.26758 16.4961ZM5.99609 16.291C5.99609 16.373 6.07812 16.4961 6.20117 16.4961C6.2832 16.5371 6.40625 16.4961 6.44727 16.4141C6.44727 16.332 6.40625 16.25 6.2832 16.209C6.16016 16.168 6.03711 16.209 5.99609 16.291ZM7.8418 16.25C7.71875 16.25 7.63672 16.332 7.63672 16.4551C7.63672 16.5371 7.75977 16.5781 7.88281 16.5371C8.00586 16.4961 8.08789 16.4551 8.04687 16.373C8.04687 16.291 7.92383 16.209 7.8418 16.25ZM10.5078 0.5C4.84766 0.5 0.5 4.84766 0.5 10.5078C0.5 15.0605 3.33008 18.957 7.43164 20.3516C7.96484 20.4336 8.12891 20.1055 8.12891 19.8594C8.12891 19.5723 8.12891 18.1777 8.12891 17.3164C8.12891 17.3164 5.25781 17.9316 4.64258 16.0859C4.64258 16.0859 4.19141 14.8965 3.53516 14.6094C3.53516 14.6094 2.5918 13.9531 3.57617 13.9531C3.57617 13.9531 4.60156 14.0352 5.17578 15.0195C6.07812 16.6191 7.55469 16.168 8.16992 15.8809C8.25195 15.2246 8.49805 14.7734 8.82617 14.4863C6.5293 14.2402 4.19141 13.9121 4.19141 9.97461C4.19141 8.82617 4.51953 8.29297 5.17578 7.55469C5.05273 7.26758 4.72461 6.20117 5.29883 4.76562C6.11914 4.51953 8.12891 5.87305 8.12891 5.87305C8.94922 5.62695 9.81055 5.54492 10.6719 5.54492C11.5742 5.54492 12.4355 5.62695 13.2559 5.87305C13.2559 5.87305 15.2246 4.47852 16.0859 4.76562C16.6602 6.20117 16.291 7.26758 16.209 7.55469C16.8652 8.29297 17.2754 8.82617 17.2754 9.97461C17.2754 13.9121 14.8555 14.2402 12.5586 14.4863C12.9277 14.8145 13.2559 15.4297 13.2559 16.4141C13.2559 17.7676 13.2148 19.4902 13.2148 19.8184C13.2148 20.1055 13.4199 20.4336 13.9531 20.3105C18.0547 18.957 20.8437 15.0605 20.8437 10.5078C20.8437 4.84766 16.209 0.5 10.5078 0.5ZM4.47852 14.6504C4.39648 14.6914 4.4375 14.8145 4.47852 14.8965C4.56055 14.9375 4.64258 14.9785 4.72461 14.9375C4.76562 14.8965 4.76562 14.7734 4.68359 14.6914C4.60156 14.6504 4.51953 14.6094 4.47852 14.6504ZM4.02734 14.3223C3.98633 14.4043 4.02734 14.4453 4.10937 14.4863C4.19141 14.5273 4.27344 14.5273 4.31445 14.4453C4.31445 14.4043 4.27344 14.3633 4.19141 14.3223C4.10937 14.2812 4.06836 14.2812 4.02734 14.3223ZM5.33984 15.7988C5.29883 15.8398 5.29883 15.9629 5.42187 16.0449C5.50391 16.127 5.62695 16.168 5.66797 16.0859C5.70898 16.0449 5.70898 15.9219 5.62695 15.8398C5.54492 15.7578 5.42187 15.7168 5.33984 15.7988ZM4.88867 15.1836C4.80664 15.2246 4.80664 15.3477 4.88867 15.4297C4.9707 15.5117 5.05273 15.5527 5.13477 15.5117C5.17578 15.4707 5.17578 15.3477 5.13477 15.2656C5.05273 15.1836 4.9707 15.1426 4.88867 15.1836Z",
              fill: "#DECEFF",
            }),
          }),
        lQ = (e) =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 16",
            fill: "none",
            className: e.className,
            children: (0, o.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.5219 4.21238C17.5057 3.34842 18.6032 3.01972 19.6558 3.10282C20.7786 3.19146 21.8175 3.74546 22.5936 4.55014C23.3695 5.35487 23.9026 6.43125 23.988 7.59289C24.0741 8.76513 23.7012 9.9929 22.7181 11.0704C22.6283 11.1696 22.5364 11.2675 22.4425 11.3642C17.9836 15.9878 12.0606 16 12 16H11.9997C11.9694 16 6.02769 15.9998 1.55722 11.3638L1.55626 11.3626C1.46396 11.2664 1.37307 11.1694 1.28355 11.072L1.28283 11.0711C0.299307 9.99452 -0.0739189 8.76706 0.0119163 7.59482C0.096969 6.43336 0.629706 5.35687 1.40546 4.55186C2.18115 3.74689 3.22007 3.19245 4.34306 3.10343C5.39557 3.02 6.49332 3.34831 7.47756 4.21184C7.5834 2.87995 8.13478 1.84336 8.93517 1.13073C9.78881 0.370659 10.9012 0 11.9998 0C13.0983 0 14.2107 0.370659 15.0643 1.13073C15.8647 1.84346 16.4162 2.88024 16.5219 4.21238ZM12.2039 15.5313L12.2037 15.5254H12.204L12.2039 15.5313ZM11.7957 15.5313L11.7955 15.5254H11.7959L11.7957 15.5313ZM15.3497 9.11115C15.2277 9.11115 15.1854 9.29386 15.2632 9.39064C15.4009 9.56205 15.4839 9.78259 15.4839 10.0232C15.4839 10.5692 15.0571 11.0118 14.5307 11.0118C14.0042 11.0118 13.5774 10.5692 13.5774 10.0232C13.5774 9.994 13.5407 9.97948 13.524 10.0032C13.3737 10.2173 13.2722 10.4577 13.2305 10.7101C13.207 10.8522 13.0956 10.9701 12.9556 10.9701H12.8783C12.6956 10.9701 12.5449 10.8164 12.5718 10.6303C12.7567 9.35475 13.9689 8.42965 15.3497 8.42965C16.7305 8.42965 17.9427 9.35475 18.1275 10.6303C18.1544 10.8164 18.0037 10.9701 17.8211 10.9701C17.6382 10.9701 17.4936 10.8156 17.4538 10.6319C17.2732 9.79586 16.4354 9.11115 15.3497 9.11115ZM6.88465 10.0232C6.88465 9.98468 6.8365 9.964 6.81384 9.99466C6.65312 10.2121 6.54361 10.4584 6.49725 10.718C6.46989 10.8713 6.34961 10.9988 6.19824 10.9988H6.14151C5.95879 10.9988 5.80807 10.8452 5.835 10.6591C6.01977 9.38285 7.23213 8.45842 8.61287 8.45842C9.99358 8.45842 11.2059 9.38285 11.3907 10.6591C11.4177 10.8452 11.2669 10.9988 11.0842 10.9988C10.9015 10.9988 10.7568 10.8445 10.7171 10.6607C10.5365 9.82414 9.69875 9.13993 8.61287 9.13993C8.51416 9.13993 8.47803 9.28365 8.54411 9.35915C8.69763 9.53463 8.79118 9.7676 8.79118 10.0232C8.79118 10.5692 8.36439 11.0118 7.83791 11.0118C7.31144 11.0118 6.88465 10.5692 6.88465 10.0232ZM13.0602 12.4073C13.1894 12.2741 13.3889 12.2094 13.5493 12.2995C13.7096 12.3899 13.7704 12.5993 13.6549 12.7452C13.2785 13.2198 12.6692 13.5207 11.9972 13.5207C11.3255 13.5207 10.7149 13.2231 10.3381 12.7447C10.2229 12.5986 10.2845 12.3892 10.4452 12.2995C10.6058 12.2099 10.8051 12.2755 10.934 12.4087C11.1824 12.6656 11.5593 12.8393 11.9972 12.8393C12.4339 12.8393 12.8113 12.6638 13.0602 12.4073Z",
              fill: "#DECEFF",
            }),
          }),
        lJ = (e) =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 14",
            fill: "none",
            className: e.className,
            children: (0, o.jsx)("path", {
              d: "M6.8 0.200195C5.90701 0.200195 5.02277 0.376083 4.19775 0.717815C3.37274 1.05955 2.62311 1.56043 1.99167 2.19187C1.36024 2.82331 0.859351 3.57293 0.517619 4.39795C0.175887 5.22296 0 6.10721 0 7.0002C0 7.89318 0.175887 8.77743 0.517619 9.60244C0.859351 10.4275 1.36024 11.1771 1.99167 11.8085C2.62311 12.44 3.37274 12.9408 4.19775 13.2826C5.02277 13.6243 5.90701 13.8002 6.8 13.8002C7.69299 13.8002 8.57723 13.6243 9.40225 13.2826C10.2273 12.9408 10.9769 12.44 11.6083 11.8085C12.2398 11.1771 12.7406 10.4275 13.0824 9.60244C13.4241 8.77743 13.6 7.89318 13.6 7.0002C13.6 6.10721 13.4241 5.22296 13.0824 4.39795C12.7406 3.57293 12.2398 2.82331 11.6083 2.19187C10.9769 1.56043 10.2273 1.05955 9.40225 0.717815C8.57723 0.376083 7.69299 0.200195 6.8 0.200195ZM17.6 1.0002C17.1798 1.0002 16.7637 1.15539 16.3754 1.45692C15.9872 1.75845 15.6344 2.2004 15.3373 2.75755C15.0401 3.31471 14.8044 3.97614 14.6436 4.70409C14.4828 5.43205 14.4 6.21226 14.4 7.0002C14.4 7.78813 14.4828 8.56834 14.6436 9.2963C14.8044 10.0242 15.0401 10.6857 15.3373 11.2428C15.6344 11.8 15.9872 12.2419 16.3754 12.5435C16.7637 12.845 17.1798 13.0002 17.6 13.0002C18.0202 13.0002 18.4363 12.845 18.8246 12.5435C19.2128 12.2419 19.5656 11.8 19.8627 11.2428C20.1599 10.6857 20.3956 10.0242 20.5564 9.2963C20.7172 8.56834 20.8 7.78813 20.8 7.0002C20.8 6.21226 20.7172 5.43205 20.5564 4.70409C20.3956 3.97614 20.1599 3.31471 19.8627 2.75755C19.5656 2.2004 19.2128 1.75845 18.8246 1.45692C18.4363 1.15539 18.0202 1.0002 17.6 1.0002ZM22.8 1.8002C22.4817 1.8002 22.1765 2.34805 21.9515 3.32324C21.7264 4.29843 21.6 5.62107 21.6 7.0002C21.6 8.37932 21.7264 9.70196 21.9515 10.6771C22.1765 11.6523 22.4817 12.2002 22.8 12.2002C23.1183 12.2002 23.4235 11.6523 23.6485 10.6771C23.8736 9.70196 24 8.37932 24 7.0002C24 5.62107 23.8736 4.29843 23.6485 3.32324C23.4235 2.34805 23.1183 1.8002 22.8 1.8002Z",
              fill: "#DECEFF",
            }),
          }),
        l0 = (e) =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 14 16",
            fill: "none",
            className: e.className,
            children: (0, o.jsx)("path", {
              d: "M0 6.19355C0 2.77295 3.134 0 6.99999 0C10.866 0 14 2.77295 14 6.19355V15.0589C14 15.5786 13.5238 16 12.9362 16H1.06373C0.476248 16 0 15.5786 0 15.0589V6.19355Z",
              fill: "#DECEFF",
            }),
          }),
        l1 = (e) =>
          (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 22 18",
            fill: "none",
            className: e.className,
            children: (0, o.jsx)("path", {
              d: "M19.3262 5.05664C20.1465 4.44141 20.8848 3.70312 21.459 2.8418C20.7207 3.16992 19.8594 3.41602 18.998 3.49805C19.9004 2.96484 20.5566 2.14453 20.8848 1.11914C20.0645 1.61133 19.1211 1.98047 18.1777 2.18555C17.3574 1.32422 16.25 0.832031 15.0195 0.832031C12.6406 0.832031 10.7129 2.75977 10.7129 5.13867C10.7129 5.4668 10.7539 5.79492 10.8359 6.12305C7.26758 5.91797 4.06836 4.19531 1.93555 1.61133C1.56641 2.22656 1.36133 2.96484 1.36133 3.78516C1.36133 5.26172 2.09961 6.57422 3.28906 7.35352C2.5918 7.3125 1.89453 7.14844 1.32031 6.82031V6.86133C1.32031 8.95312 2.79687 10.6758 4.76562 11.0859C4.4375 11.168 4.02734 11.25 3.6582 11.25C3.37109 11.25 3.125 11.209 2.83789 11.168C3.37109 12.8906 4.9707 14.1211 6.85742 14.1621C5.38086 15.3105 3.53516 16.0078 1.52539 16.0078C1.15625 16.0078 0.828125 15.9668 0.5 15.9258C2.38672 17.1562 4.64258 17.8535 7.10352 17.8535C15.0195 17.8535 19.3262 11.332 19.3262 5.63086C19.3262 5.42578 19.3262 5.26172 19.3262 5.05664Z",
              fill: "#DECEFF",
            }),
          }),
        l2 = Object.freeze({
          app: "https://app.DropTogether.com",
          landingPage: "https://DropTogether.com",
          app_v4: "https://app.DropTogether.com",
          landingPage_v4: "https://DropTogether.com",
          docs: "https://docs.DropTogether.com",
          docs_v4: "https://docs.DropTogether.com",
          devDocs: "https://drop-together-dev.vercel.app/",
          governance: "https://gov.DropTogether.com",
          poolExplorer: "https://poolexplorer.win",
          tools: "https://tools.DropTogether.com",
          notion: "https://DropTogetherdao.notion.site",
        }),
        l3 = Object.freeze({
          ...l2,
          termsOfService: "".concat(l2.app, "/terms"),
          protocolDisclaimer: "".concat(l2.app, "/protocol-disclaimer"),
          ecosystem: "".concat(l2.landingPage, "/ecosystem"),
          brandKit: "https://www.figma.com/community/file/1309277420331106706",
          DropTogetherUiKit:
            "https://www.figma.com/community/file/1312204004590586926",
          DropTogetherTokenBrandingGuidelines:
            "https://www.figma.com/community/file/1296919804512902494",
          gettingStarted: "".concat(l2.docs, "/welcome/getting-started"),
          faq: "".concat(l2.docs, "/welcome/faq"),
          guides: "".concat(l2.docs, "/DropTogether/guides"),
          audits: "".concat(l2.docs, "/security/audits"),
          devDocs_v4: "".concat(l2.devDocs, "/protocol/V4/introduction"),
          depositDelegator: "".concat(l2.tools, "/delegate"),
          prizeTierController: "".concat(l2.tools, "/prize-tier-controller"),
          communityCalendar: "".concat(
            l2.notion,
            "/Community-Calendar-4ce3024241dd464db96215e6729a78e0"
          ),
          twitter: "https://twitter.com/DropTogether_",
          github: "https://github.com/DropTogether",
          medium: "https://medium.com/DropTogether",
          tally: "https://www.tally.xyz/gov/DropTogether",
          treasury: "https://info.DropTogether.com/treasury",
          dune_v4: "https://dune.com/sarfang/DropTogetherV4",
          prizeCalc: "https://prizecalc.com",
          grants: "https://poolgrants.org",
          lens: "https://lenster.xyz/u/DropTogether",
          warpcast: "https://warpcast.com/DropTogether",
          farcaster: "https://warpcast.com/~/channel/pool-together",
          mirror: "https://DropTogether.mirror.xyz/",
          clientJs:
            "https://www.npmjs.com/package/@generationsoftware/hyperstructure-client-js",
          clientJs_v4:
            "https://www.npmjs.com/package/@DropTogether/v4-client-js",
          reactHooks:
            "https://www.npmjs.com/package/@generationsoftware/hyperstructure-react-hooks",
        });
    },
    8518: function (e, t, r) {
      "use strict";
      let n;
      function i(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      r.d(t, {
        Nk: function () {
          return to;
        },
        hh: function () {
          return ti;
        },
      }),
        ((en = ea || (ea = {}))[(en.mainnet = 1)] = "mainnet"),
        (en[(en.goerli = 5)] = "goerli"),
        (en[(en.sepolia = 11155111)] = "sepolia"),
        (en[(en.bsc = 56)] = "bsc"),
        (en[(en["bsc-testnet"] = 97)] = "bsc-testnet"),
        (en[(en.xdai = 100)] = "xdai"),
        (en[(en.polygon = 137)] = "polygon"),
        (en[(en.mumbai = 80001)] = "mumbai"),
        (en[(en.optimism = 10)] = "optimism"),
        (en[(en["optimism-goerli"] = 420)] = "optimism-goerli"),
        (en[(en.avalanche = 43114)] = "avalanche"),
        (en[(en.fuji = 43113)] = "fuji"),
        (en[(en.celo = 42220)] = "celo"),
        (en[(en["celo-testnet"] = 44787)] = "celo-testnet"),
        (en[(en.arbitrum = 42161)] = "arbitrum"),
        (en[(en["arbitrum-goerli"] = 421613)] = "arbitrum-goerli"),
        Object.freeze({
          [ea.mainnet]: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
          [ea.polygon]: "0x25788a1a171ec66Da6502f9975a15B609fF54CF6",
          [ea.optimism]: "0x395ae52bb17aef68c2888d941736a71dc6d4e125",
          [ea.sepolia]: "0x09f06F4BC026fB75E0064747edd49D371D20D434",
        }),
        ea.sepolia,
        Object.freeze({
          [ea.sepolia]:
            "https://api.studio.thegraph.com/query/41211/v5-prize-pool-eth-sepolia/v0.0.3",
        }),
        Object.freeze({
          [ea.mainnet]: "ethereum",
          [ea.bsc]: "binance-smart-chain",
          [ea.xdai]: "xdai",
          [ea.polygon]: "polygon-pos",
          [ea.optimism]: "optimistic-ethereum",
          [ea.avalanche]: "avalanche",
          [ea.celo]: "celo",
          [ea.arbitrum]: "arbitrum-one",
        }),
        Object.freeze({
          [ea.mainnet]: "ethereum",
          [ea.goerli]: "ethereum",
          [ea.sepolia]: "ethereum",
          [ea.bsc]: "binancecoin",
          [ea["bsc-testnet"]]: "binancecoin",
          [ea.xdai]: "xdai",
          [ea.polygon]: "matic-network",
          [ea.mumbai]: "matic-network",
          [ea.optimism]: "ethereum",
          [ea["optimism-goerli"]]: "ethereum",
          [ea.avalanche]: "avalanche-2",
          [ea.fuji]: "avalanche-2",
          [ea.celo]: "celo",
          [ea["celo-testnet"]]: "celo",
          [ea.arbitrum]: "ethereum",
          [ea["arbitrum-goerli"]]: "ethereum",
        }),
        Object.freeze({
          [ea.mainnet]: { name: "Etherscan", url: "https://etherscan.io/" },
          [ea.goerli]: {
            name: "Etherscan",
            url: "https://goerli.etherscan.io/",
          },
          [ea.sepolia]: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io/",
          },
          [ea.bsc]: { name: "BscScan", url: "https://bscscan.com/" },
          [ea["bsc-testnet"]]: {
            name: "BscScan",
            url: "https://testnet.bscscan.com/",
          },
          [ea.xdai]: { name: "GnosisScan", url: "https://gnosisscan.io/" },
          [ea.polygon]: {
            name: "PolygonScan",
            url: "https://polygonscan.com/",
          },
          [ea.mumbai]: {
            name: "PolygonScan",
            url: "https://mumbai.polygonscan.com/",
          },
          [ea.optimism]: {
            name: "Etherscan",
            url: "https://optimistic.etherscan.io/",
          },
          [ea["optimism-goerli"]]: {
            name: "Etherscan",
            url: "https://goerli-optimism.etherscan.io/",
          },
          [ea.avalanche]: { name: "Snowtrace", url: "https://snowtrace.io/" },
          [ea.fuji]: {
            name: "Snowtrace",
            url: "https://testnet.snowtrace.io/",
          },
          [ea.celo]: { name: "CeloScan", url: "https://celoscan.io/" },
          [ea["celo-testnet"]]: {
            name: "CeloScan",
            url: "https://alfajores.celoscan.io/",
          },
          [ea.arbitrum]: { name: "ArbiScan", url: "https://arbiscan.io/" },
          [ea["arbitrum-goerli"]]: {
            name: "ArbiScan",
            url: "https://goerli.arbiscan.io/",
          },
        }),
        ea.mainnet,
        ea.goerli,
        ea.sepolia,
        ea.bsc,
        ea["bsc-testnet"],
        ea.xdai,
        ea.polygon,
        ea.mumbai,
        ea.optimism,
        ea["optimism-goerli"],
        ea.avalanche,
        ea.fuji,
        ea.celo,
        ea["celo-testnet"],
        ea.arbitrum,
        ea["arbitrum-goerli"],
        Object.freeze({
          [ea.sepolia]: {
            "0xb20ff9fe4065cc1494dfa3a273a527a05871074f": { eth: 54086e-8 },
            "0x59d6b2e784f45568a76b9627de97e06fc237da83": { eth: 54048e-8 },
            "0x73b3f9fecf92b4f0eb6a20c977cbb30964858fd7": { eth: 54055e-8 },
            "0xf78de71cf358a92aee3370a7a3b743bf63c257d4": { eth: 14.381406 },
            "0x62739a657d3bb724694b46b35795532ec9b42b47": { eth: 0.99951637 },
            "0x09f06f4bc026fb75e0064747edd49d371d20d434": { eth: 36417e-8 },
          },
        });
      let { toString: o } = Object.prototype,
        { getPrototypeOf: a } = Object,
        s =
          ((ei = Object.create(null)),
          (e) => {
            let t = o.call(e);
            return ei[t] || (ei[t] = t.slice(8, -1).toLowerCase());
          }),
        l = (e) => ((e = e.toLowerCase()), (t) => s(t) === e),
        u = (e) => (t) => typeof t === e,
        { isArray: c } = Array,
        h = u("undefined"),
        d = l("ArrayBuffer"),
        f = u("string"),
        p = u("function"),
        g = u("number"),
        m = (e) => null !== e && "object" == typeof e,
        y = (e) => {
          if ("object" !== s(e)) return !1;
          let t = a(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        b = l("Date"),
        v = l("File"),
        x = l("Blob"),
        w = l("FileList"),
        C = (e) => m(e) && p(e.pipe),
        k = (e) => {
          let t;
          return (
            e &&
            (("function" == typeof FormData && e instanceof FormData) ||
              (p(e.append) &&
                ("formdata" === (t = s(e)) ||
                  ("object" === t &&
                    p(e.toString) &&
                    "[object FormData]" === e.toString()))))
          );
        },
        E = l("URLSearchParams"),
        T = (e) =>
          e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      function S(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != e) {
          if (("object" != typeof e && (e = [e]), c(e)))
            for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
          else {
            let i;
            let o = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = o.length;
            for (n = 0; n < a; n++) (i = o[n]), t.call(null, e[i], i, e);
          }
        }
      }
      function P(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          i = n.length;
        for (; i-- > 0; ) if (t === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let A =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        N = (e) => !h(e) && e !== A,
        j = (e, t, r, { allOwnKeys: n } = {}) => (
          S(
            t,
            (t, n) => {
              r && p(t) ? (e[n] = i(t, r)) : (e[n] = t);
            },
            { allOwnKeys: n }
          ),
          e
        ),
        R = (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        L = (e, t, r, n) => {
          (e.prototype = Object.create(t.prototype, n)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            r && Object.assign(e.prototype, r);
        },
        M = (e, t, r, n) => {
          let i, o, s;
          let l = {};
          if (((t = t || {}), null == e)) return t;
          do {
            for (o = (i = Object.getOwnPropertyNames(e)).length; o-- > 0; )
              (s = i[o]),
                (!n || n(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
            e = !1 !== r && a(e);
          } while (e && (!r || r(e, t)) && e !== Object.prototype);
          return t;
        },
        O = (e, t, r) => {
          (e = String(e)),
            (void 0 === r || r > e.length) && (r = e.length),
            (r -= t.length);
          let n = e.indexOf(t, r);
          return -1 !== n && n === r;
        },
        B = (e) => {
          if (!e) return null;
          if (c(e)) return e;
          let t = e.length;
          if (!g(t)) return null;
          let r = Array(t);
          for (; t-- > 0; ) r[t] = e[t];
          return r;
        },
        D =
          ((eo = "undefined" != typeof Uint8Array && a(Uint8Array)),
          (e) => eo && e instanceof eo),
        I = (e, t) => {
          let r;
          let n = e && e[Symbol.iterator],
            i = n.call(e);
          for (; (r = i.next()) && !r.done; ) {
            let n = r.value;
            t.call(e, n[0], n[1]);
          }
        },
        F = (e, t) => {
          let r;
          let n = [];
          for (; null !== (r = e.exec(t)); ) n.push(r);
          return n;
        },
        _ = l("HTMLFormElement"),
        H = (e) =>
          e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
            return t.toUpperCase() + r;
          }),
        U = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        V = l("RegExp"),
        G = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          S(r, (r, i) => {
            !1 !== t(r, i, e) && (n[i] = r);
          }),
            Object.defineProperties(e, n);
        },
        z = (e) => {
          G(e, (t, r) => {
            if (p(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
              return !1;
            let n = e[r];
            if (p(n)) {
              if (((t.enumerable = !1), "writable" in t)) {
                t.writable = !1;
                return;
              }
              t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + r + "'");
                });
            }
          });
        },
        q = (e, t) => {
          let r = {};
          return (
            ((e) => {
              e.forEach((e) => {
                r[e] = !0;
              });
            })(c(e) ? e : String(e).split(t)),
            r
          );
        },
        W = () => {},
        Z = (e, t) => (Number.isFinite((e = +e)) ? e : t),
        $ = "abcdefghijklmnopqrstuvwxyz",
        K = "0123456789",
        X = { DIGIT: K, ALPHA: $, ALPHA_DIGIT: $ + $.toUpperCase() + K },
        Y = (e = 16, t = X.ALPHA_DIGIT) => {
          let r = "",
            { length: n } = t;
          for (; e--; ) r += t[(Math.random() * n) | 0];
          return r;
        },
        Q = (e) => {
          let t = Array(10),
            r = (e, n) => {
              if (m(e)) {
                if (t.indexOf(e) >= 0) return;
                if (!("toJSON" in e)) {
                  t[n] = e;
                  let i = c(e) ? [] : {};
                  return (
                    S(e, (e, t) => {
                      let o = r(e, n + 1);
                      h(o) || (i[t] = o);
                    }),
                    (t[n] = void 0),
                    i
                  );
                }
              }
              return e;
            };
          return r(e, 0);
        },
        J = l("AsyncFunction"),
        ee = (e) => e && (m(e) || p(e)) && p(e.then) && p(e.catch);
      var et,
        er,
        en,
        ei,
        eo,
        ea,
        es,
        el,
        eu = {
          isArray: c,
          isArrayBuffer: d,
          isBuffer: function (e) {
            return (
              null !== e &&
              !h(e) &&
              null !== e.constructor &&
              !h(e.constructor) &&
              p(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: k,
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && d(e.buffer);
          },
          isString: f,
          isNumber: g,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: m,
          isPlainObject: y,
          isUndefined: h,
          isDate: b,
          isFile: v,
          isBlob: x,
          isRegExp: V,
          isFunction: p,
          isStream: C,
          isURLSearchParams: E,
          isTypedArray: D,
          isFileList: w,
          forEach: S,
          merge: function e() {
            let { caseless: t } = (N(this) && this) || {},
              r = {},
              n = (n, i) => {
                let o = (t && P(r, i)) || i;
                y(r[o]) && y(n)
                  ? (r[o] = e(r[o], n))
                  : y(n)
                  ? (r[o] = e({}, n))
                  : c(n)
                  ? (r[o] = n.slice())
                  : (r[o] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && S(arguments[e], n);
            return r;
          },
          extend: j,
          trim: T,
          stripBOM: R,
          inherits: L,
          toFlatObject: M,
          kindOf: s,
          kindOfTest: l,
          endsWith: O,
          toArray: B,
          forEachEntry: I,
          matchAll: F,
          isHTMLForm: _,
          hasOwnProperty: U,
          hasOwnProp: U,
          reduceDescriptors: G,
          freezeMethods: z,
          toObjectSet: q,
          toCamelCase: H,
          noop: W,
          toFiniteNumber: Z,
          findKey: P,
          global: A,
          isContextDefined: N,
          ALPHABET: X,
          generateString: Y,
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              p(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: Q,
          isAsyncFn: J,
          isThenable: ee,
        };
      function ec(e, t, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          i && (this.response = i);
      }
      eu.inherits(ec, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: eu.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      let eh = ec.prototype,
        ed = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        ed[e] = { value: e };
      }),
        Object.defineProperties(ec, ed),
        Object.defineProperty(eh, "isAxiosError", { value: !0 }),
        (ec.from = (e, t, r, n, i, o) => {
          let a = Object.create(eh);
          return (
            eu.toFlatObject(
              e,
              a,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            ec.call(a, e.message, t, r, n, i),
            (a.cause = e),
            (a.name = e.name),
            o && Object.assign(a, o),
            a
          );
        });
      var ef = r(4926).Buffer;
      function ep(e) {
        return eu.isPlainObject(e) || eu.isArray(e);
      }
      function eg(e) {
        return eu.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function em(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = eg(e)), !r && t ? "[" + e + "]" : e;
              })
              .join(r ? "." : "")
          : t;
      }
      let ey = eu.toFlatObject(eu, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var eb = function (e, t, r) {
        if (!eu.isObject(e)) throw TypeError("target must be an object");
        (t = t || new FormData()),
          (r = eu.toFlatObject(
            r,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !eu.isUndefined(t[e]);
            }
          ));
        let n = r.metaTokens,
          i = r.visitor || c,
          o = r.dots,
          a = r.indexes,
          s = r.Blob || ("undefined" != typeof Blob && Blob),
          l = s && eu.isSpecCompliantForm(t);
        if (!eu.isFunction(i)) throw TypeError("visitor must be a function");
        function u(e) {
          if (null === e) return "";
          if (eu.isDate(e)) return e.toISOString();
          if (!l && eu.isBlob(e))
            throw new ec("Blob is not supported. Use a Buffer instead.");
          return eu.isArrayBuffer(e) || eu.isTypedArray(e)
            ? l && "function" == typeof Blob
              ? new Blob([e])
              : ef.from(e)
            : e;
        }
        function c(e, r, i) {
          let s = e;
          if (e && !i && "object" == typeof e) {
            if (eu.endsWith(r, "{}"))
              (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
            else {
              var l;
              if (
                (eu.isArray(e) && ((l = e), eu.isArray(l) && !l.some(ep))) ||
                ((eu.isFileList(e) || eu.endsWith(r, "[]")) &&
                  (s = eu.toArray(e)))
              )
                return (
                  (r = eg(r)),
                  s.forEach(function (e, n) {
                    eu.isUndefined(e) ||
                      null === e ||
                      t.append(
                        !0 === a ? em([r], n, o) : null === a ? r : r + "[]",
                        u(e)
                      );
                  }),
                  !1
                );
            }
          }
          return !!ep(e) || (t.append(em(i, r, o), u(e)), !1);
        }
        let h = [],
          d = Object.assign(ey, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: ep,
          });
        if (!eu.isObject(e)) throw TypeError("data must be an object");
        return (
          !(function e(r, n) {
            if (!eu.isUndefined(r)) {
              if (-1 !== h.indexOf(r))
                throw Error("Circular reference detected in " + n.join("."));
              h.push(r),
                eu.forEach(r, function (r, o) {
                  let a =
                    !(eu.isUndefined(r) || null === r) &&
                    i.call(t, r, eu.isString(o) ? o.trim() : o, n, d);
                  !0 === a && e(r, n ? n.concat(o) : [o]);
                }),
                h.pop();
            }
          })(e),
          t
        );
      };
      function ev(e) {
        let t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\x00",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function ex(e, t) {
        (this._pairs = []), e && eb(e, this, t);
      }
      let ew = ex.prototype;
      function eC(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function ek(e, t, r) {
        let n;
        if (!t) return e;
        let i = (r && r.encode) || eC,
          o = r && r.serialize;
        if (
          (n = o
            ? o(t, r)
            : eu.isURLSearchParams(t)
            ? t.toString()
            : new ex(t, r).toString(i))
        ) {
          let t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
        }
        return e;
      }
      (ew.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ew.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, ev);
              }
            : ev;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var eE = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, r) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!r && r.synchronous,
                runWhen: r ? r.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            eu.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        eT = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        eS = "undefined" != typeof URLSearchParams ? URLSearchParams : ex,
        eP = "undefined" != typeof FormData ? FormData : null,
        eA = "undefined" != typeof Blob ? Blob : null;
      let eN =
          ("undefined" == typeof navigator ||
            ("ReactNative" !== (n = navigator.product) &&
              "NativeScript" !== n &&
              "NS" !== n)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document,
        ej =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts;
      var eR = {
          isBrowser: !0,
          classes: { URLSearchParams: eS, FormData: eP, Blob: eA },
          isStandardBrowserEnv: eN,
          isStandardBrowserWebWorkerEnv: ej,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        eL = function (e) {
          if (eu.isFormData(e) && eu.isFunction(e.entries)) {
            let t = {};
            return (
              eu.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, i) {
                  let o = t[i++],
                    a = Number.isFinite(+o),
                    s = i >= t.length;
                  if (((o = !o && eu.isArray(n) ? n.length : o), s))
                    return (
                      eu.hasOwnProp(n, o) ? (n[o] = [n[o], r]) : (n[o] = r), !a
                    );
                  (n[o] && eu.isObject(n[o])) || (n[o] = []);
                  let l = e(t, r, n[o], i);
                  return (
                    l &&
                      eu.isArray(n[o]) &&
                      (n[o] = (function (e) {
                        let t, r;
                        let n = {},
                          i = Object.keys(e),
                          o = i.length;
                        for (t = 0; t < o; t++) n[(r = i[t])] = e[r];
                        return n;
                      })(n[o])),
                    !a
                  );
                })(
                  eu
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0])),
                  r,
                  t,
                  0
                );
              }),
              t
            );
          }
          return null;
        };
      let eM = { "Content-Type": void 0 },
        eO = {
          transitional: eT,
          adapter: ["xhr", "http"],
          transformRequest: [
            function (e, t) {
              let r;
              let n = t.getContentType() || "",
                i = n.indexOf("application/json") > -1,
                o = eu.isObject(e);
              o && eu.isHTMLForm(e) && (e = new FormData(e));
              let a = eu.isFormData(e);
              if (a) return i && i ? JSON.stringify(eL(e)) : e;
              if (
                eu.isArrayBuffer(e) ||
                eu.isBuffer(e) ||
                eu.isStream(e) ||
                eu.isFile(e) ||
                eu.isBlob(e)
              )
                return e;
              if (eu.isArrayBufferView(e)) return e.buffer;
              if (eu.isURLSearchParams(e))
                return (
                  t.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  e.toString()
                );
              if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                  var s, l;
                  return ((s = e),
                  (l = this.formSerializer),
                  eb(
                    s,
                    new eR.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return eR.isNode && eu.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      l
                    )
                  )).toString();
                }
                if (
                  (r = eu.isFileList(e)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return eb(
                    r ? { "files[]": e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              return o || i
                ? (t.setContentType("application/json", !1),
                  (function (e, t, r) {
                    if (eu.isString(e))
                      try {
                        return (0, JSON.parse)(e), eu.trim(e);
                      } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              let t = this.transitional || eO.transitional,
                r = t && t.forcedJSONParsing,
                n = "json" === this.responseType;
              if (e && eu.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ("SyntaxError" === e.name)
                      throw ec.from(
                        e,
                        ec.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: eR.classes.FormData, Blob: eR.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      eu.forEach(["delete", "get", "head"], function (e) {
        eO.headers[e] = {};
      }),
        eu.forEach(["post", "put", "patch"], function (e) {
          eO.headers[e] = eu.merge(eM);
        });
      let eB = eu.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]);
      var eD = (e) => {
        let t, r, n;
        let i = {};
        return (
          e &&
            e.split("\n").forEach(function (e) {
              (n = e.indexOf(":")),
                (t = e.substring(0, n).trim().toLowerCase()),
                (r = e.substring(n + 1).trim()),
                !t ||
                  (i[t] && eB[t]) ||
                  ("set-cookie" === t
                    ? i[t]
                      ? i[t].push(r)
                      : (i[t] = [r])
                    : (i[t] = i[t] ? i[t] + ", " + r : r));
            }),
          i
        );
      };
      let eI = Symbol("internals");
      function eF(e) {
        return e && String(e).trim().toLowerCase();
      }
      function e_(e) {
        return !1 === e || null == e
          ? e
          : eu.isArray(e)
          ? e.map(e_)
          : String(e);
      }
      let eH = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function eU(e, t, r, n, i) {
        if (eu.isFunction(n)) return n.call(this, t, r);
        if ((i && (t = r), eu.isString(t))) {
          if (eu.isString(n)) return -1 !== t.indexOf(n);
          if (eu.isRegExp(n)) return n.test(t);
        }
      }
      class eV {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function i(e, t, r) {
            let i = eF(t);
            if (!i) throw Error("header name must be a non-empty string");
            let o = eu.findKey(n, i);
            (o &&
              void 0 !== n[o] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[o])) ||
              (n[o || t] = e_(e));
          }
          let o = (e, t) => eu.forEach(e, (e, r) => i(e, r, t));
          return (
            eu.isPlainObject(e) || e instanceof this.constructor
              ? o(e, t)
              : eu.isString(e) && (e = e.trim()) && !eH(e)
              ? o(eD(e), t)
              : null != e && i(t, e, r),
            this
          );
        }
        get(e, t) {
          if ((e = eF(e))) {
            let r = eu.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  let t;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                  return r;
                })(e);
              if (eu.isFunction(t)) return t.call(this, e, r);
              if (eu.isRegExp(t)) return t.exec(e);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = eF(e))) {
            let r = eu.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || eU(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function i(e) {
            if ((e = eF(e))) {
              let i = eu.findKey(r, e);
              i && (!t || eU(r, r[i], i, t)) && (delete r[i], (n = !0));
            }
          }
          return eu.isArray(e) ? e.forEach(i) : i(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let i = t[r];
            (!e || eU(this, this[i], i, e, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            eu.forEach(this, (n, i) => {
              let o = eu.findKey(r, i);
              if (o) {
                (t[o] = e_(n)), delete t[i];
                return;
              }
              let a = e
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, r) => t.toUpperCase() + r
                    )
                : String(i).trim();
              a !== i && delete t[i], (t[a] = e_(n)), (r[a] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            eu.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && eu.isArray(r) ? r.join(", ") : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ": " + t)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[eI] = this[eI] = { accessors: {} }),
            r = t.accessors,
            n = this.prototype;
          function i(e) {
            let t = eF(e);
            r[t] ||
              (!(function (e, t) {
                let r = eu.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((n) => {
                  Object.defineProperty(e, n + r, {
                    value: function (e, r, i) {
                      return this[n].call(this, t, e, r, i);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (r[t] = !0));
          }
          return eu.isArray(e) ? e.forEach(i) : i(e), this;
        }
      }
      function eG(e, t) {
        let r = this || eO,
          n = t || r,
          i = eV.from(n.headers),
          o = n.data;
        return (
          eu.forEach(e, function (e) {
            o = e.call(r, o, i.normalize(), t ? t.status : void 0);
          }),
          i.normalize(),
          o
        );
      }
      function ez(e) {
        return !!(e && e.__CANCEL__);
      }
      function eq(e, t, r) {
        ec.call(this, null == e ? "canceled" : e, ec.ERR_CANCELED, t, r),
          (this.name = "CanceledError");
      }
      eV.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        eu.freezeMethods(eV.prototype),
        eu.freezeMethods(eV),
        eu.inherits(eq, ec, { __CANCEL__: !0 });
      var eW = eR.isStandardBrowserEnv
        ? {
            write: function (e, t, r, n, i, o) {
              let a = [];
              a.push(e + "=" + encodeURIComponent(t)),
                eu.isNumber(r) &&
                  a.push("expires=" + new Date(r).toGMTString()),
                eu.isString(n) && a.push("path=" + n),
                eu.isString(i) && a.push("domain=" + i),
                !0 === o && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (e) {
              let t = document.cookie.match(
                RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function eZ(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? t
            ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
            : e
          : t;
      }
      var e$ = eR.isStandardBrowserEnv
          ? (function () {
              let e;
              let t = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a");
              function n(e) {
                let n = e;
                return (
                  t && (r.setAttribute("href", n), (n = r.href)),
                  r.setAttribute("href", n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname:
                      "/" === r.pathname.charAt(0)
                        ? r.pathname
                        : "/" + r.pathname,
                  }
                );
              }
              return (
                (e = n(window.location.href)),
                function (t) {
                  let r = eu.isString(t) ? n(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        eK = function (e, t) {
          let r;
          e = e || 10;
          let n = Array(e),
            i = Array(e),
            o = 0,
            a = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (s) {
              let l = Date.now(),
                u = i[a];
              r || (r = l), (n[o] = s), (i[o] = l);
              let c = a,
                h = 0;
              for (; c !== o; ) (h += n[c++]), (c %= e);
              if (((o = (o + 1) % e) === a && (a = (a + 1) % e), l - r < t))
                return;
              let d = u && l - u;
              return d ? Math.round((1e3 * h) / d) : void 0;
            }
          );
        };
      function eX(e, t) {
        let r = 0,
          n = eK(50, 250);
        return (i) => {
          let o = i.loaded,
            a = i.lengthComputable ? i.total : void 0,
            s = o - r,
            l = n(s);
          r = o;
          let u = {
            loaded: o,
            total: a,
            progress: a ? o / a : void 0,
            bytes: s,
            rate: l || void 0,
            estimated: l && a && o <= a ? (a - o) / l : void 0,
            event: i,
          };
          (u[t ? "download" : "upload"] = !0), e(u);
        };
      }
      let eY = "undefined" != typeof XMLHttpRequest;
      var eQ =
        eY &&
        function (e) {
          return new Promise(function (t, r) {
            let n,
              i = e.data,
              o = eV.from(e.headers).normalize(),
              a = e.responseType;
            function s() {
              e.cancelToken && e.cancelToken.unsubscribe(n),
                e.signal && e.signal.removeEventListener("abort", n);
            }
            eu.isFormData(i) &&
              (eR.isStandardBrowserEnv || eR.isStandardBrowserWebWorkerEnv
                ? o.setContentType(!1)
                : o.setContentType("multipart/form-data;", !1));
            let l = new XMLHttpRequest();
            if (e.auth) {
              let t = e.auth.username || "",
                r = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              o.set("Authorization", "Basic " + btoa(t + ":" + r));
            }
            let u = eZ(e.baseURL, e.url);
            function c() {
              if (!l) return;
              let n = eV.from(
                  "getAllResponseHeaders" in l && l.getAllResponseHeaders()
                ),
                i =
                  a && "text" !== a && "json" !== a
                    ? l.response
                    : l.responseText,
                o = {
                  data: i,
                  status: l.status,
                  statusText: l.statusText,
                  headers: n,
                  config: e,
                  request: l,
                };
              !(function (e, t, r) {
                let n = r.config.validateStatus;
                !r.status || !n || n(r.status)
                  ? e(r)
                  : t(
                      new ec(
                        "Request failed with status code " + r.status,
                        [ec.ERR_BAD_REQUEST, ec.ERR_BAD_RESPONSE][
                          Math.floor(r.status / 100) - 4
                        ],
                        r.config,
                        r.request,
                        r
                      )
                    );
              })(
                function (e) {
                  t(e), s();
                },
                function (e) {
                  r(e), s();
                },
                o
              ),
                (l = null);
            }
            if (
              (l.open(
                e.method.toUpperCase(),
                ek(u, e.params, e.paramsSerializer),
                !0
              ),
              (l.timeout = e.timeout),
              "onloadend" in l
                ? (l.onloadend = c)
                : (l.onreadystatechange = function () {
                    l &&
                      4 === l.readyState &&
                      (0 !== l.status ||
                        (l.responseURL &&
                          0 === l.responseURL.indexOf("file:"))) &&
                      setTimeout(c);
                  }),
              (l.onabort = function () {
                l &&
                  (r(new ec("Request aborted", ec.ECONNABORTED, e, l)),
                  (l = null));
              }),
              (l.onerror = function () {
                r(new ec("Network Error", ec.ERR_NETWORK, e, l)), (l = null);
              }),
              (l.ontimeout = function () {
                let t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded",
                  n = e.transitional || eT;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  r(
                    new ec(
                      t,
                      n.clarifyTimeoutError ? ec.ETIMEDOUT : ec.ECONNABORTED,
                      e,
                      l
                    )
                  ),
                  (l = null);
              }),
              eR.isStandardBrowserEnv)
            ) {
              let t =
                (e.withCredentials || e$(u)) &&
                e.xsrfCookieName &&
                eW.read(e.xsrfCookieName);
              t && o.set(e.xsrfHeaderName, t);
            }
            void 0 === i && o.setContentType(null),
              "setRequestHeader" in l &&
                eu.forEach(o.toJSON(), function (e, t) {
                  l.setRequestHeader(t, e);
                }),
              eu.isUndefined(e.withCredentials) ||
                (l.withCredentials = !!e.withCredentials),
              a && "json" !== a && (l.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                l.addEventListener("progress", eX(e.onDownloadProgress, !0)),
              "function" == typeof e.onUploadProgress &&
                l.upload &&
                l.upload.addEventListener("progress", eX(e.onUploadProgress)),
              (e.cancelToken || e.signal) &&
                ((n = (t) => {
                  l &&
                    (r(!t || t.type ? new eq(null, e, l) : t),
                    l.abort(),
                    (l = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(n),
                e.signal &&
                  (e.signal.aborted
                    ? n()
                    : e.signal.addEventListener("abort", n)));
            let h = (function (e) {
              let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
              return (t && t[1]) || "";
            })(u);
            if (h && -1 === eR.protocols.indexOf(h)) {
              r(
                new ec("Unsupported protocol " + h + ":", ec.ERR_BAD_REQUEST, e)
              );
              return;
            }
            l.send(i || null);
          });
        };
      let eJ = { http: null, xhr: eQ };
      eu.forEach(eJ, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      var e0 = {
        getAdapter: (e) => {
          let t, r;
          e = eu.isArray(e) ? e : [e];
          let { length: n } = e;
          for (
            let i = 0;
            i < n &&
            ((t = e[i]), !(r = eu.isString(t) ? eJ[t.toLowerCase()] : t));
            i++
          );
          if (!r) {
            if (!1 === r)
              throw new ec(
                `Adapter ${t} is not supported by the environment`,
                "ERR_NOT_SUPPORT"
              );
            throw Error(
              eu.hasOwnProp(eJ, t)
                ? `Adapter '${t}' is not available in the build`
                : `Unknown adapter '${t}'`
            );
          }
          if (!eu.isFunction(r)) throw TypeError("adapter is not a function");
          return r;
        },
        adapters: eJ,
      };
      function e1(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new eq(null, e);
      }
      function e2(e) {
        e1(e),
          (e.headers = eV.from(e.headers)),
          (e.data = eG.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        let t = e0.getAdapter(e.adapter || eO.adapter);
        return t(e).then(
          function (t) {
            return (
              e1(e),
              (t.data = eG.call(e, e.transformResponse, t)),
              (t.headers = eV.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              !ez(t) &&
                (e1(e),
                t &&
                  t.response &&
                  ((t.response.data = eG.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = eV.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      let e3 = (e) => (e instanceof eV ? e.toJSON() : e);
      function e5(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r) {
          return eu.isPlainObject(e) && eu.isPlainObject(t)
            ? eu.merge.call({ caseless: r }, e, t)
            : eu.isPlainObject(t)
            ? eu.merge({}, t)
            : eu.isArray(t)
            ? t.slice()
            : t;
        }
        function i(e, t, r) {
          return eu.isUndefined(t)
            ? eu.isUndefined(e)
              ? void 0
              : n(void 0, e, r)
            : n(e, t, r);
        }
        function o(e, t) {
          if (!eu.isUndefined(t)) return n(void 0, t);
        }
        function a(e, t) {
          return eu.isUndefined(t)
            ? eu.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, t);
        }
        function s(r, i, o) {
          return o in t ? n(r, i) : o in e ? n(void 0, r) : void 0;
        }
        let l = {
          url: o,
          method: o,
          data: o,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: s,
          headers: (e, t) => i(e3(e), e3(t), !0),
        };
        return (
          eu.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let o = l[n] || i,
              a = o(e[n], t[n], n);
            (eu.isUndefined(a) && o !== s) || (r[n] = a);
          }),
          r
        );
      }
      let e8 = "1.4.0",
        e4 = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          e4[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      let e6 = {};
      e4.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            "[Axios v" +
            e8 +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return (r, i, o) => {
          if (!1 === e)
            throw new ec(
              n(i, " has been removed" + (t ? " in " + t : "")),
              ec.ERR_DEPRECATED
            );
          return (
            t &&
              !e6[i] &&
              ((e6[i] = !0),
              console.warn(
                n(
                  i,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(r, i, o)
          );
        };
      };
      var e7 = {
        assertOptions: function (e, t, r) {
          if ("object" != typeof e)
            throw new ec("options must be an object", ec.ERR_BAD_OPTION_VALUE);
          let n = Object.keys(e),
            i = n.length;
          for (; i-- > 0; ) {
            let o = n[i],
              a = t[o];
            if (a) {
              let t = e[o],
                r = void 0 === t || a(t, o, e);
              if (!0 !== r)
                throw new ec(
                  "option " + o + " must be " + r,
                  ec.ERR_BAD_OPTION_VALUE
                );
              continue;
            }
            if (!0 !== r)
              throw new ec("Unknown option " + o, ec.ERR_BAD_OPTION);
          }
        },
        validators: e4,
      };
      let e9 = e7.validators;
      class te {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new eE(), response: new eE() });
        }
        request(e, t) {
          let r, n, i;
          "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = e5(this.defaults, t));
          let { transitional: o, paramsSerializer: a, headers: s } = t;
          void 0 !== o &&
            e7.assertOptions(
              o,
              {
                silentJSONParsing: e9.transitional(e9.boolean),
                forcedJSONParsing: e9.transitional(e9.boolean),
                clarifyTimeoutError: e9.transitional(e9.boolean),
              },
              !1
            ),
            null != a &&
              (eu.isFunction(a)
                ? (t.paramsSerializer = { serialize: a })
                : e7.assertOptions(
                    a,
                    { encode: e9.function, serialize: e9.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase()),
            (r = s && eu.merge(s.common, s[t.method])) &&
              eu.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (e) => {
                  delete s[e];
                }
              ),
            (t.headers = eV.concat(r, s));
          let l = [],
            u = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((u = u && e.synchronous), l.unshift(e.fulfilled, e.rejected));
          });
          let c = [];
          this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          });
          let h = 0;
          if (!u) {
            let e = [e2.bind(this), void 0];
            for (
              e.unshift.apply(e, l),
                e.push.apply(e, c),
                i = e.length,
                n = Promise.resolve(t);
              h < i;

            )
              n = n.then(e[h++], e[h++]);
            return n;
          }
          i = l.length;
          let d = t;
          for (h = 0; h < i; ) {
            let e = l[h++],
              t = l[h++];
            try {
              d = e(d);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            n = e2.call(this, d);
          } catch (e) {
            return Promise.reject(e);
          }
          for (h = 0, i = c.length; h < i; ) n = n.then(c[h++], c[h++]);
          return n;
        }
        getUri(e) {
          e = e5(this.defaults, e);
          let t = eZ(e.baseURL, e.url);
          return ek(t, e.params, e.paramsSerializer);
        }
      }
      eu.forEach(["delete", "get", "head", "options"], function (e) {
        te.prototype[e] = function (t, r) {
          return this.request(
            e5(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
        eu.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (r, n, i) {
              return this.request(
                e5(i || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (te.prototype[e] = t()), (te.prototype[e + "Form"] = t(!0));
        });
      class tt {
        constructor(e) {
          let t;
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (e) {
            t = e;
          });
          let r = this;
          this.promise.then((e) => {
            if (!r._listeners) return;
            let t = r._listeners.length;
            for (; t-- > 0; ) r._listeners[t](e);
            r._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              let n = new Promise((e) => {
                r.subscribe(e), (t = e);
              }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e, n, i) {
              r.reason || ((r.reason = new eq(e, n, i)), t(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          let t = new tt(function (t) {
            e = t;
          });
          return { token: t, cancel: e };
        }
      }
      let tr = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(tr).forEach(([e, t]) => {
        tr[t] = e;
      });
      let tn = (function e(t) {
        let r = new te(t),
          n = i(te.prototype.request, r);
        return (
          eu.extend(n, te.prototype, r, { allOwnKeys: !0 }),
          eu.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(e5(t, r));
          }),
          n
        );
      })(eO);
      (tn.Axios = te),
        (tn.CanceledError = eq),
        (tn.CancelToken = tt),
        (tn.isCancel = ez),
        (tn.VERSION = e8),
        (tn.toFormData = eb),
        (tn.AxiosError = ec),
        (tn.Cancel = tn.CanceledError),
        (tn.all = function (e) {
          return Promise.all(e);
        }),
        (tn.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (tn.isAxiosError = function (e) {
          return eu.isObject(e) && !0 === e.isAxiosError;
        }),
        (tn.mergeConfig = e5),
        (tn.AxiosHeaders = eV),
        (tn.formToJSON = (e) => eL(eu.isHTMLForm(e) ? new FormData(e) : e)),
        (tn.HttpStatusCode = tr),
        (tn.default = tn);
      let ti = async (e) => {
        if (e) {
          let t = new FormData();
          t.append("h-captcha-response", e);
          let r = await tn({
            method: "post",
            url: "https://discord-invite.DropTogether-api.workers.dev/generateInvite",
            data: t,
            headers: { "Content-Type": "multipart/form-data" },
          });
          if (200 === r.status) {
            let e = await r.data;
            window.location.href = "https://discord.com/invite/".concat(e);
          }
        }
      };
      ((et = es || (es = {})).deposit = "WNUT5OFV"),
        (et.withdrawal = "1HZEITIR");
      let to = function (e) {
        let t,
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { locale: "en" },
          { locale: n, round: i, hideZeroes: o, ...a } = r;
        if (null == e) return "";
        if ("number" == typeof e) t = e;
        else {
          if ("string" != typeof e && "bigint" != typeof e) return "";
          t = Number(e);
        }
        return (
          i && (t = Math.round(t)),
          t.toLocaleString(n || "en", {
            ...a,
            maximumFractionDigits: o
              ? t <= 1
                ? a.maximumFractionDigits
                : 0
              : a.maximumFractionDigits,
            minimumFractionDigits: o
              ? t <= 1
                ? a.minimumFractionDigits
                : 0
              : a.minimumFractionDigits,
          })
        );
      };
      ((er = el || (el = {})).second = "second"),
        (er.minute = "minute"),
        (er.hour = "hour"),
        (er.day = "day"),
        (er.week = "week"),
        (er.month = "month"),
        (er.year = "year");
    },
    4926: function (e) {
      !(function () {
        var t = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = l(e),
                  r = t[0],
                  n = t[1];
                return ((r + n) * 3) / 4 - n;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    r,
                    o = l(e),
                    a = o[0],
                    s = o[1],
                    u = new i(((a + s) * 3) / 4 - s),
                    c = 0,
                    h = s > 0 ? a - 4 : a;
                  for (r = 0; r < h; r += 4)
                    (t =
                      (n[e.charCodeAt(r)] << 18) |
                      (n[e.charCodeAt(r + 1)] << 12) |
                      (n[e.charCodeAt(r + 2)] << 6) |
                      n[e.charCodeAt(r + 3)]),
                      (u[c++] = (t >> 16) & 255),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t);
                  return (
                    2 === s &&
                      ((t =
                        (n[e.charCodeAt(r)] << 2) |
                        (n[e.charCodeAt(r + 1)] >> 4)),
                      (u[c++] = 255 & t)),
                    1 === s &&
                      ((t =
                        (n[e.charCodeAt(r)] << 10) |
                        (n[e.charCodeAt(r + 1)] << 4) |
                        (n[e.charCodeAt(r + 2)] >> 2)),
                      (u[c++] = (t >> 8) & 255),
                      (u[c++] = 255 & t)),
                    u
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i;
                    a < s;
                    a += 16383
                  )
                    o.push(
                      (function (e, t, n) {
                        for (var i, o = [], a = t; a < n; a += 3)
                          o.push(
                            r[
                              ((i =
                                ((e[a] << 16) & 16711680) +
                                ((e[a + 1] << 8) & 65280) +
                                (255 & e[a + 2])) >>
                                18) &
                                63
                            ] +
                              r[(i >> 12) & 63] +
                              r[(i >> 6) & 63] +
                              r[63 & i]
                          );
                        return o.join("");
                      })(e, a, a + 16383 > s ? s : a + 16383)
                    );
                  return (
                    1 === i
                      ? o.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
                      : 2 === i &&
                        o.push(
                          r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                            r[(t >> 4) & 63] +
                            r[(t << 2) & 63] +
                            "="
                        ),
                    o.join("")
                  );
                });
              for (
                var r = [],
                  n = [],
                  i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  o =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  a = 0,
                  s = o.length;
                a < s;
                ++a
              )
                (r[a] = o[a]), (n[o.charCodeAt(a)] = a);
              function l(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                -1 === r && (r = t);
                var n = r === t ? 0 : 4 - (r % 4);
                return [r, n];
              }
              (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
            },
            72: function (e, t, r) {
              "use strict";
              /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */ var n = r(675),
                i = r(783),
                o =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function a(e) {
                if (e > 2147483647)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, s.prototype), t;
              }
              function s(e, t, r) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return c(e);
                }
                return l(e, t, r);
              }
              function l(e, t, r) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if (
                      (("string" != typeof t || "" === t) && (t = "utf8"),
                      !s.isEncoding(t))
                    )
                      throw TypeError("Unknown encoding: " + t);
                    var r = 0 | f(e, t),
                      n = a(r),
                      i = n.write(e, t);
                    return i !== r && (n = n.slice(0, i)), n;
                  })(e, t);
                if (ArrayBuffer.isView(e)) return h(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (
                  N(e, ArrayBuffer) ||
                  (e && N(e.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (N(e, SharedArrayBuffer) ||
                      (e && N(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, r) {
                    var n;
                    if (t < 0 || e.byteLength < t)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (n =
                          void 0 === t && void 0 === r
                            ? new Uint8Array(e)
                            : void 0 === r
                            ? new Uint8Array(e, t)
                            : new Uint8Array(e, t, r)),
                        s.prototype
                      ),
                      n
                    );
                  })(e, t, r);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return s.from(n, t, r);
                var i = (function (e) {
                  if (s.isBuffer(e)) {
                    var t,
                      r = 0 | d(e.length),
                      n = a(r);
                    return 0 === n.length || e.copy(n, 0, 0, r), n;
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? a(0)
                      : h(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                    ? h(e.data)
                    : void 0;
                })(e);
                if (i) return i;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return s.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function u(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function c(e) {
                return u(e), a(e < 0 ? 0 : 0 | d(e));
              }
              function h(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | d(e.length), r = a(t), n = 0;
                  n < t;
                  n += 1
                )
                  r[n] = 255 & e[n];
                return r;
              }
              function d(e) {
                if (e >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | e;
              }
              function f(e, t) {
                if (s.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || N(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var r = e.length,
                  n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return T(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return P(e).length;
                    default:
                      if (i) return n ? -1 : T(e).length;
                      (t = ("" + t).toLowerCase()), (i = !0);
                  }
              }
              function p(e, t, r) {
                var i,
                  o,
                  a = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0 || (r >>>= 0) <= (t >>>= 0)))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, r) {
                        var n = e.length;
                        (!t || t < 0) && (t = 0),
                          (!r || r < 0 || r > n) && (r = n);
                        for (var i = "", o = t; o < r; ++o) i += j[e[o]];
                        return i;
                      })(this, t, r);
                    case "utf8":
                    case "utf-8":
                      return b(this, t, r);
                    case "ascii":
                      return (function (e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var i = t; i < r; ++i)
                          n += String.fromCharCode(127 & e[i]);
                        return n;
                      })(this, t, r);
                    case "latin1":
                    case "binary":
                      return (function (e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var i = t; i < r; ++i)
                          n += String.fromCharCode(e[i]);
                        return n;
                      })(this, t, r);
                    case "base64":
                      return (
                        (i = t),
                        (o = r),
                        0 === i && o === this.length
                          ? n.fromByteArray(this)
                          : n.fromByteArray(this.slice(i, o))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, r) {
                        for (
                          var n = e.slice(t, r), i = "", o = 0;
                          o < n.length;
                          o += 2
                        )
                          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i;
                      })(this, t, r);
                    default:
                      if (a) throw TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (a = !0);
                  }
              }
              function g(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
              }
              function m(e, t, r, n, i) {
                var o;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  (o = r = +r) != o && (r = i ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (i) return -1;
                  r = e.length - 1;
                } else if (r < 0) {
                  if (!i) return -1;
                  r = 0;
                }
                if (("string" == typeof t && (t = s.from(t, n)), s.isBuffer(t)))
                  return 0 === t.length ? -1 : y(e, t, r, n, i);
                if ("number" == typeof t)
                  return ((t &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? i
                      ? Uint8Array.prototype.indexOf.call(e, t, r)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                    : y(e, [t], r, n, i);
                throw TypeError("val must be string, number or Buffer");
              }
              function y(e, t, r, n, i) {
                var o,
                  a = 1,
                  s = e.length,
                  l = t.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (a = 2), (s /= 2), (l /= 2), (r /= 2);
                }
                function u(e, t) {
                  return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                if (i) {
                  var c = -1;
                  for (o = r; o < s; o++)
                    if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                      if ((-1 === c && (c = o), o - c + 1 === l)) return c * a;
                    } else -1 !== c && (o -= o - c), (c = -1);
                } else
                  for (r + l > s && (r = s - l), o = r; o >= 0; o--) {
                    for (var h = !0, d = 0; d < l; d++)
                      if (u(e, o + d) !== u(t, d)) {
                        h = !1;
                        break;
                      }
                    if (h) return o;
                  }
                return -1;
              }
              function b(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r; ) {
                  var o,
                    a,
                    s,
                    l,
                    u = e[i],
                    c = null,
                    h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + h <= r)
                    switch (h) {
                      case 1:
                        u < 128 && (c = u);
                        break;
                      case 2:
                        (192 & (o = e[i + 1])) == 128 &&
                          (l = ((31 & u) << 6) | (63 & o)) > 127 &&
                          (c = l);
                        break;
                      case 3:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          (192 & o) == 128 &&
                            (192 & a) == 128 &&
                            (l =
                              ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                              2047 &&
                            (l < 55296 || l > 57343) &&
                            (c = l);
                        break;
                      case 4:
                        (o = e[i + 1]),
                          (a = e[i + 2]),
                          (s = e[i + 3]),
                          (192 & o) == 128 &&
                            (192 & a) == 128 &&
                            (192 & s) == 128 &&
                            (l =
                              ((15 & u) << 18) |
                              ((63 & o) << 12) |
                              ((63 & a) << 6) |
                              (63 & s)) > 65535 &&
                            l < 1114112 &&
                            (c = l);
                    }
                  null === c
                    ? ((c = 65533), (h = 1))
                    : c > 65535 &&
                      ((c -= 65536),
                      n.push(((c >>> 10) & 1023) | 55296),
                      (c = 56320 | (1023 & c))),
                    n.push(c),
                    (i += h);
                }
                return (function (e) {
                  var t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  for (var r = "", n = 0; n < t; )
                    r += String.fromCharCode.apply(
                      String,
                      e.slice(n, (n += 4096))
                    );
                  return r;
                })(n);
              }
              function v(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function x(e, t, r, n, i, o) {
                if (!s.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > i || t < o)
                  throw RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw RangeError("Index out of range");
              }
              function w(e, t, r, n, i, o) {
                if (r + n > e.length || r < 0)
                  throw RangeError("Index out of range");
              }
              function C(e, t, r, n, o) {
                return (
                  (t = +t),
                  (r >>>= 0),
                  o ||
                    w(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(e, t, r, n, 23, 4),
                  r + 4
                );
              }
              function k(e, t, r, n, o) {
                return (
                  (t = +t),
                  (r >>>= 0),
                  o ||
                    w(
                      e,
                      t,
                      r,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  i.write(e, t, r, n, 52, 8),
                  r + 8
                );
              }
              (t.Buffer = s),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), s.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 2147483647),
                (s.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                s.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(s.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(s.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (s.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (s.poolSize = 8192),
                (s.from = function (e, t, r) {
                  return l(e, t, r);
                }),
                Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(s, Uint8Array),
                (s.alloc = function (e, t, r) {
                  return (u(e), e <= 0)
                    ? a(e)
                    : void 0 !== t
                    ? "string" == typeof r
                      ? a(e).fill(t, r)
                      : a(e).fill(t)
                    : a(e);
                }),
                (s.allocUnsafe = function (e) {
                  return c(e);
                }),
                (s.allocUnsafeSlow = function (e) {
                  return c(e);
                }),
                (s.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== s.prototype;
                }),
                (s.compare = function (e, t) {
                  if (
                    (N(e, Uint8Array) &&
                      (e = s.from(e, e.offset, e.byteLength)),
                    N(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
                    !s.isBuffer(e) || !s.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
                    i < o;
                    ++i
                  )
                    if (e[i] !== t[i]) {
                      (r = e[i]), (n = t[i]);
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (s.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
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
                      return !1;
                  }
                }),
                (s.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return s.alloc(0);
                  if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                  var r,
                    n = s.allocUnsafe(t),
                    i = 0;
                  for (r = 0; r < e.length; ++r) {
                    var o = e[r];
                    if ((N(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(n, i), (i += o.length);
                  }
                  return n;
                }),
                (s.byteLength = f),
                (s.prototype._isBuffer = !0),
                (s.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                  return this;
                }),
                (s.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    g(this, t, t + 3), g(this, t + 1, t + 2);
                  return this;
                }),
                (s.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    g(this, t, t + 7),
                      g(this, t + 1, t + 6),
                      g(this, t + 2, t + 5),
                      g(this, t + 3, t + 4);
                  return this;
                }),
                (s.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                    ? b(this, 0, e)
                    : p.apply(this, arguments);
                }),
                (s.prototype.toLocaleString = s.prototype.toString),
                (s.prototype.equals = function (e) {
                  if (!s.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === s.compare(this, e);
                }),
                (s.prototype.inspect = function () {
                  var e = "",
                    r = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                o && (s.prototype[o] = s.prototype.inspect),
                (s.prototype.compare = function (e, t, r, n, i) {
                  if (
                    (N(e, Uint8Array) &&
                      (e = s.from(e, e.offset, e.byteLength)),
                    !s.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || r > e.length || n < 0 || i > this.length)
                  )
                    throw RangeError("out of range index");
                  if (n >= i && t >= r) return 0;
                  if (n >= i) return -1;
                  if (t >= r) return 1;
                  if (
                    ((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var o = i - n,
                      a = r - t,
                      l = Math.min(o, a),
                      u = this.slice(n, i),
                      c = e.slice(t, r),
                      h = 0;
                    h < l;
                    ++h
                  )
                    if (u[h] !== c[h]) {
                      (o = u[h]), (a = c[h]);
                      break;
                    }
                  return o < a ? -1 : a < o ? 1 : 0;
                }),
                (s.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r);
                }),
                (s.prototype.indexOf = function (e, t, r) {
                  return m(this, e, t, r, !0);
                }),
                (s.prototype.lastIndexOf = function (e, t, r) {
                  return m(this, e, t, r, !1);
                }),
                (s.prototype.write = function (e, t, r, n) {
                  if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                  else if (void 0 === r && "string" == typeof t)
                    (n = t), (r = this.length), (t = 0);
                  else if (isFinite(t))
                    (t >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    h,
                    d,
                    f,
                    p,
                    g,
                    m = this.length - t;
                  if (
                    ((void 0 === r || r > m) && (r = m),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  n || (n = "utf8");
                  for (var y = !1; ; )
                    switch (n) {
                      case "hex":
                        return (function (e, t, r, n) {
                          r = Number(r) || 0;
                          var i = e.length - r;
                          n ? (n = Number(n)) > i && (n = i) : (n = i);
                          var o = t.length;
                          n > o / 2 && (n = o / 2);
                          for (var a = 0; a < n; ++a) {
                            var s = parseInt(t.substr(2 * a, 2), 16);
                            if (s != s) break;
                            e[r + a] = s;
                          }
                          return a;
                        })(this, e, t, r);
                      case "utf8":
                      case "utf-8":
                        return (
                          (l = t), (u = r), A(T(e, this.length - l), this, l, u)
                        );
                      case "ascii":
                        return (c = t), (h = r), A(S(e), this, c, h);
                      case "latin1":
                      case "binary":
                        return (
                          (i = this),
                          (o = e),
                          (a = t),
                          (s = r),
                          A(S(o), i, a, s)
                        );
                      case "base64":
                        return (d = t), (f = r), A(P(e), this, d, f);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (p = t),
                          (g = r),
                          A(
                            (function (e, t) {
                              for (
                                var r, n, i = [], o = 0;
                                o < e.length && !((t -= 2) < 0);
                                ++o
                              )
                                (n = (r = e.charCodeAt(o)) >> 8),
                                  i.push(r % 256),
                                  i.push(n);
                              return i;
                            })(e, this.length - p),
                            this,
                            p,
                            g
                          )
                        );
                      default:
                        if (y) throw TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (y = !0);
                    }
                }),
                (s.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (s.prototype.slice = function (e, t) {
                  var r = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? r : ~~t),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e);
                  var n = this.subarray(e, t);
                  return Object.setPrototypeOf(n, s.prototype), n;
                }),
                (s.prototype.readUIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    n += this[e + o] * i;
                  return n;
                }),
                (s.prototype.readUIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                    n += this[e + --t] * i;
                  return n;
                }),
                (s.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || v(e, 1, this.length), this[e];
                }),
                (s.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (s.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (s.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      16777216 * this[e + 3]
                  );
                }),
                (s.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    16777216 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (s.prototype.readIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    n += this[e + o] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
                }),
                (s.prototype.readIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (
                    var n = t, i = 1, o = this[e + --n];
                    n > 0 && (i *= 256);

                  )
                    o += this[e + --n] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (s.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || v(e, 1, this.length), 128 & this[e])
                    ? -((255 - this[e] + 1) * 1)
                    : this[e];
                }),
                (s.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || v(e, 2, this.length);
                  var r = this[e] | (this[e + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (s.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || v(e, 2, this.length);
                  var r = this[e + 1] | (this[e] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (s.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (s.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (s.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    i.read(this, e, !0, 23, 4)
                  );
                }),
                (s.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    i.read(this, e, !1, 23, 4)
                  );
                }),
                (s.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 8, this.length),
                    i.read(this, e, !0, 52, 8)
                  );
                }),
                (s.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 8, this.length),
                    i.read(this, e, !1, 52, 8)
                  );
                }),
                (s.prototype.writeUIntLE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    x(this, e, t, r, i, 0);
                  }
                  var o = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < r && (o *= 256); )
                    this[t + a] = (e / o) & 255;
                  return t + r;
                }),
                (s.prototype.writeUIntBE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    x(this, e, t, r, i, 0);
                  }
                  var o = r - 1,
                    a = 1;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    this[t + o] = (e / a) & 255;
                  return t + r;
                }),
                (s.prototype.writeUInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (s.prototype.writeUInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (s.prototype.writeUInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (s.prototype.writeUInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 4294967295, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeUInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 4294967295, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeIntLE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    x(this, e, t, r, i - 1, -i);
                  }
                  var o = 0,
                    a = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++o < r && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + r;
                }),
                (s.prototype.writeIntBE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    x(this, e, t, r, i - 1, -i);
                  }
                  var o = r - 1,
                    a = 1,
                    s = 0;
                  for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                      (this[t + o] = (((e / a) >> 0) - s) & 255);
                  return t + r;
                }),
                (s.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (s.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (s.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (s.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (s.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || x(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (s.prototype.writeFloatLE = function (e, t, r) {
                  return C(this, e, t, !0, r);
                }),
                (s.prototype.writeFloatBE = function (e, t, r) {
                  return C(this, e, t, !1, r);
                }),
                (s.prototype.writeDoubleLE = function (e, t, r) {
                  return k(this, e, t, !0, r);
                }),
                (s.prototype.writeDoubleBE = function (e, t, r) {
                  return k(this, e, t, !1, r);
                }),
                (s.prototype.copy = function (e, t, r, n) {
                  if (!s.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    n > 0 && n < r && (n = r),
                    n === r || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                  if (n < 0) throw RangeError("sourceEnd out of bounds");
                  n > this.length && (n = this.length),
                    e.length - t < n - r && (n = e.length - t + r);
                  var i = n - r;
                  if (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, r, n);
                  else if (this === e && r < t && t < n)
                    for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
                  else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                  return i;
                }),
                (s.prototype.fill = function (e, t, r, n) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !s.isEncoding(n))
                      throw TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                      var i,
                        o = e.charCodeAt(0);
                      (("utf8" === n && o < 128) || "latin1" === n) && (e = o);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < r)
                    throw RangeError("Out of range index");
                  if (r <= t) return this;
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (i = t; i < r; ++i) this[i] = e;
                  else {
                    var a = s.isBuffer(e) ? e : s.from(e, n),
                      l = a.length;
                    if (0 === l)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (i = 0; i < r - t; ++i) this[i + t] = a[i % l];
                  }
                  return this;
                });
              var E = /[^+/0-9A-Za-z-_]/g;
              function T(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                  if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319 || a + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                      continue;
                    }
                    r = (((i - 55296) << 10) | (r - 56320)) + 65536;
                  } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if ((t -= 1) < 0) break;
                    o.push(r);
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
                    o.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return o;
              }
              function S(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                  t.push(255 & e.charCodeAt(r));
                return t;
              }
              function P(e) {
                return n.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(E, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function A(e, t, r, n) {
                for (
                  var i = 0;
                  i < n && !(i + r >= t.length) && !(i >= e.length);
                  ++i
                )
                  t[i + r] = e[i];
                return i;
              }
              function N(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var j = (function () {
                for (
                  var e = "0123456789abcdef", t = Array(256), r = 0;
                  r < 16;
                  ++r
                )
                  for (var n = 16 * r, i = 0; i < 16; ++i)
                    t[n + i] = e[r] + e[i];
                return t;
              })();
            },
            783: function (e, t) {
              /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (t.read =
                function (e, t, r, n, i) {
                  var o,
                    a,
                    s = 8 * i - n - 1,
                    l = (1 << s) - 1,
                    u = l >> 1,
                    c = -7,
                    h = r ? i - 1 : 0,
                    d = r ? -1 : 1,
                    f = e[t + h];
                  for (
                    h += d, o = f & ((1 << -c) - 1), f >>= -c, c += s;
                    c > 0;
                    o = 256 * o + e[t + h], h += d, c -= 8
                  );
                  for (
                    a = o & ((1 << -c) - 1), o >>= -c, c += n;
                    c > 0;
                    a = 256 * a + e[t + h], h += d, c -= 8
                  );
                  if (0 === o) o = 1 - u;
                  else {
                    if (o === l) return a ? NaN : (f ? -1 : 1) * (1 / 0);
                    (a += Math.pow(2, n)), (o -= u);
                  }
                  return (f ? -1 : 1) * a * Math.pow(2, o - n);
                }),
                (t.write = function (e, t, r, n, i, o) {
                  var a,
                    s,
                    l,
                    u = 8 * o - i - 1,
                    c = (1 << u) - 1,
                    h = c >> 1,
                    d = 23 === i ? 5960464477539062e-23 : 0,
                    f = n ? 0 : o - 1,
                    p = n ? 1 : -1,
                    g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((s = isNaN(t) ? 1 : 0), (a = c))
                      : ((a = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                        a + h >= 1
                          ? (t += d / l)
                          : (t += d * Math.pow(2, 1 - h)),
                        t * l >= 2 && (a++, (l /= 2)),
                        a + h >= c
                          ? ((s = 0), (a = c))
                          : a + h >= 1
                          ? ((s = (t * l - 1) * Math.pow(2, i)), (a += h))
                          : ((s = t * Math.pow(2, h - 1) * Math.pow(2, i)),
                            (a = 0)));
                    i >= 8;
                    e[r + f] = 255 & s, f += p, s /= 256, i -= 8
                  );
                  for (
                    a = (a << i) | s, u += i;
                    u > 0;
                    e[r + f] = 255 & a, f += p, a /= 256, u -= 8
                  );
                  e[r + f - p] |= 128 * g;
                });
            },
          },
          r = {};
        function n(e) {
          var i = r[e];
          if (void 0 !== i) return i.exports;
          var o = (r[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, n), (a = !1);
          } finally {
            a && delete r[e];
          }
          return o.exports;
        }
        n.ab = "//";
        var i = n(72);
        e.exports = i;
      })();
    },
    8862: function () {},
    1689: function (e, t, r) {
      e.exports = r(6313);
    },
    9660: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, t) {
        return (o = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function a(e, t, r) {
        return (a = !(function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var i = new (Function.bind.apply(e, n))();
              return r && o(i, r.prototype), i;
            }
          : Reflect.construct.bind()).apply(null, arguments);
      }
      function s(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (s = function (e) {
          if (
            null === e ||
            -1 === Function.toString.call(e).indexOf("[native code]")
          )
            return e;
          if ("function" != typeof e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return a(e, arguments, i(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            o(r, e)
          );
        })(e);
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i;
      }
      r.r(t),
        r.d(t, {
          IntlError: function () {
            return k;
          },
          IntlErrorCode: function () {
            return g;
          },
          IntlProvider: function () {
            return e$;
          },
          createFormatter: function () {
            return eG;
          },
          createIntl: function () {
            return ez;
          },
          createTranslator: function () {
            return eU;
          },
          useFormatter: function () {
            return e2;
          },
          useIntl: function () {
            return e5;
          },
          useLocale: function () {
            return eY;
          },
          useMessages: function () {
            return e1;
          },
          useNow: function () {
            return eJ;
          },
          useTimeZone: function () {
            return e0;
          },
          useTranslations: function () {
            return eX;
          },
        }),
        ((p = g || (g = {})).MISSING_MESSAGE = "MISSING_MESSAGE"),
        (p.MISSING_FORMAT = "MISSING_FORMAT"),
        (p.INSUFFICIENT_PATH = "INSUFFICIENT_PATH"),
        (p.INVALID_MESSAGE = "INVALID_MESSAGE"),
        (p.INVALID_KEY = "INVALID_KEY"),
        (p.FORMATTING_ERROR = "FORMATTING_ERROR");
      var u,
        c,
        h,
        d,
        f,
        p,
        g,
        m,
        y,
        b,
        v,
        x,
        w,
        C,
        k = (function (e) {
          var t;
          function r(t, r) {
            var n,
              i = t;
            return (
              r && (i += ": " + r),
              ((n = e.call(this, i) || this).code = void 0),
              (n.originalMessage = void 0),
              (n.code = t),
              r && (n.originalMessage = r),
              n
            );
          }
          return (
            ((t = r).prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            o(t, e),
            r
          );
        })(s(Error)),
        E = function (e, t) {
          return (E =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            })(e, t);
        };
      function T(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        E(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var S = function () {
        return (S =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function P(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function A(e) {
        return e.type === y.literal;
      }
      function N(e) {
        return e.type === y.number;
      }
      function j(e) {
        return e.type === y.date;
      }
      function R(e) {
        return e.type === y.time;
      }
      function L(e) {
        return e.type === y.select;
      }
      function M(e) {
        return e.type === y.plural;
      }
      function O(e) {
        return e.type === y.tag;
      }
      function B(e) {
        return !!(e && "object" == typeof e && e.type === b.number);
      }
      function D(e) {
        return !!(e && "object" == typeof e && e.type === b.dateTime);
      }
      ((u = m || (m = {}))[(u.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
        "EXPECT_ARGUMENT_CLOSING_BRACE"),
        (u[(u.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
        (u[(u.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
        (u[(u.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
        (u[(u.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
        (u[(u.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
        (u[(u.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
        (u[(u.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
        (u[(u.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
        (u[(u.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
        (u[(u.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
          "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
        (u[(u.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
          "EXPECT_SELECT_ARGUMENT_OPTIONS"),
        (u[(u.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
          "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (u[(u.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
          "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (u[(u.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR"),
        (u[(u.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
        (u[(u.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
        (u[(u.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
        (u[(u.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
          "INVALID_PLURAL_ARGUMENT_SELECTOR"),
        (u[(u.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
          "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
        (u[(u.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
          "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
        (u[(u.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
        (u[(u.INVALID_TAG = 23)] = "INVALID_TAG"),
        (u[(u.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
        (u[(u.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
        (u[(u.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG"),
        ((c = y || (y = {}))[(c.literal = 0)] = "literal"),
        (c[(c.argument = 1)] = "argument"),
        (c[(c.number = 2)] = "number"),
        (c[(c.date = 3)] = "date"),
        (c[(c.time = 4)] = "time"),
        (c[(c.select = 5)] = "select"),
        (c[(c.plural = 6)] = "plural"),
        (c[(c.pound = 7)] = "pound"),
        (c[(c.tag = 8)] = "tag"),
        ((h = b || (b = {}))[(h.number = 0)] = "number"),
        (h[(h.dateTime = 1)] = "dateTime");
      var I = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        F =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        _ = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        H = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        U = /^(@+)?(\+|#+)?[rs]?$/g,
        V = /(\*)(0+)|(#+)(0+)|(0+)/g,
        G = /^(0+)$/;
      function z(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(U, function (e, r, n) {
            return (
              "string" != typeof n
                ? ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits = r.length))
                : "+" === n
                ? (t.minimumSignificantDigits = r.length)
                : "#" === r[0]
                ? (t.maximumSignificantDigits = r.length)
                : ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits =
                    r.length + ("string" == typeof n ? n.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function q(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function W(e) {
        return q(e) || {};
      }
      var Z = {
          AX: ["H"],
          BQ: ["H"],
          CP: ["H"],
          CZ: ["H"],
          DK: ["H"],
          FI: ["H"],
          ID: ["H"],
          IS: ["H"],
          ML: ["H"],
          NE: ["H"],
          RU: ["H"],
          SE: ["H"],
          SJ: ["H"],
          SK: ["H"],
          AS: ["h", "H"],
          BT: ["h", "H"],
          DJ: ["h", "H"],
          ER: ["h", "H"],
          GH: ["h", "H"],
          IN: ["h", "H"],
          LS: ["h", "H"],
          PG: ["h", "H"],
          PW: ["h", "H"],
          SO: ["h", "H"],
          TO: ["h", "H"],
          VU: ["h", "H"],
          WS: ["h", "H"],
          "001": ["H", "h"],
          AL: ["h", "H", "hB"],
          TD: ["h", "H", "hB"],
          "ca-ES": ["H", "h", "hB"],
          CF: ["H", "h", "hB"],
          CM: ["H", "h", "hB"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          LU: ["H", "h", "hB"],
          NP: ["H", "h", "hB"],
          PF: ["H", "h", "hB"],
          SC: ["H", "h", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          TF: ["H", "h", "hB"],
          VA: ["H", "h", "hB"],
          CY: ["h", "H", "hb", "hB"],
          GR: ["h", "H", "hb", "hB"],
          CO: ["h", "H", "hB", "hb"],
          DO: ["h", "H", "hB", "hb"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          NA: ["h", "H", "hB", "hb"],
          PA: ["h", "H", "hB", "hb"],
          PR: ["h", "H", "hB", "hb"],
          VE: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AI: ["H", "h", "hb", "hB"],
          BW: ["H", "h", "hb", "hB"],
          BZ: ["H", "h", "hb", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CX: ["H", "h", "hb", "hB"],
          DG: ["H", "h", "hb", "hB"],
          FK: ["H", "h", "hb", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GI: ["H", "h", "hb", "hB"],
          IE: ["H", "h", "hb", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IO: ["H", "h", "hb", "hB"],
          JE: ["H", "h", "hb", "hB"],
          LT: ["H", "h", "hb", "hB"],
          MK: ["H", "h", "hb", "hB"],
          MN: ["H", "h", "hb", "hB"],
          MS: ["H", "h", "hb", "hB"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          PN: ["H", "h", "hb", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SX: ["H", "h", "hb", "hB"],
          TA: ["H", "h", "hb", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          "af-ZA": ["H", "h", "hB", "hb"],
          AR: ["H", "h", "hB", "hb"],
          CL: ["H", "h", "hB", "hb"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          EA: ["H", "h", "hB", "hb"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          GT: ["H", "h", "hB", "hb"],
          HN: ["H", "h", "hB", "hb"],
          IC: ["H", "h", "hB", "hb"],
          KG: ["H", "h", "hB", "hb"],
          KM: ["H", "h", "hB", "hb"],
          LK: ["H", "h", "hB", "hb"],
          MA: ["H", "h", "hB", "hb"],
          MX: ["H", "h", "hB", "hb"],
          NI: ["H", "h", "hB", "hb"],
          PY: ["H", "h", "hB", "hb"],
          SV: ["H", "h", "hB", "hb"],
          UY: ["H", "h", "hB", "hb"],
          JP: ["H", "h", "K"],
          AD: ["H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AT: ["H", "hB"],
          AW: ["H", "hB"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BR: ["H", "hB"],
          CG: ["H", "hB"],
          CI: ["H", "hB"],
          CV: ["H", "hB"],
          DE: ["H", "hB"],
          EE: ["H", "hB"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GF: ["H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GW: ["H", "hB"],
          HR: ["H", "hB"],
          IL: ["H", "hB"],
          IT: ["H", "hB"],
          KZ: ["H", "hB"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          MF: ["H", "hB"],
          MQ: ["H", "hB"],
          MZ: ["H", "hB"],
          NC: ["H", "hB"],
          NL: ["H", "hB"],
          PM: ["H", "hB"],
          PT: ["H", "hB"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          SI: ["H", "hB"],
          SR: ["H", "hB"],
          ST: ["H", "hB"],
          TG: ["H", "hB"],
          TR: ["H", "hB"],
          WF: ["H", "hB"],
          YT: ["H", "hB"],
          BD: ["h", "hB", "H"],
          PK: ["h", "hB", "H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BG: ["H", "hB", "h"],
          CH: ["H", "hB", "h"],
          GE: ["H", "hB", "h"],
          LI: ["H", "hB", "h"],
          ME: ["H", "hB", "h"],
          RS: ["H", "hB", "h"],
          UA: ["H", "hB", "h"],
          UZ: ["H", "hB", "h"],
          XK: ["H", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          BB: ["h", "hb", "H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          CA: ["h", "hb", "H", "hB"],
          DM: ["h", "hb", "H", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          FJ: ["h", "hb", "H", "hB"],
          FM: ["h", "hb", "H", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GM: ["h", "hb", "H", "hB"],
          GU: ["h", "hb", "H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          JM: ["h", "hb", "H", "hB"],
          KI: ["h", "hb", "H", "hB"],
          KN: ["h", "hb", "H", "hB"],
          KY: ["h", "hb", "H", "hB"],
          LC: ["h", "hb", "H", "hB"],
          LR: ["h", "hb", "H", "hB"],
          MH: ["h", "hb", "H", "hB"],
          MP: ["h", "hb", "H", "hB"],
          MW: ["h", "hb", "H", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          SB: ["h", "hb", "H", "hB"],
          SG: ["h", "hb", "H", "hB"],
          SL: ["h", "hb", "H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          SZ: ["h", "hb", "H", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          BO: ["H", "hB", "h", "hb"],
          EC: ["H", "hB", "h", "hb"],
          ES: ["H", "hB", "h", "hb"],
          GQ: ["H", "hB", "h", "hb"],
          PE: ["H", "hB", "h", "hb"],
          AE: ["h", "hB", "hb", "H"],
          "ar-001": ["h", "hB", "hb", "H"],
          BH: ["h", "hB", "hb", "H"],
          DZ: ["h", "hB", "hb", "H"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          HK: ["h", "hB", "hb", "H"],
          IQ: ["h", "hB", "hb", "H"],
          JO: ["h", "hB", "hb", "H"],
          KW: ["h", "hB", "hb", "H"],
          LB: ["h", "hB", "hb", "H"],
          LY: ["h", "hB", "hb", "H"],
          MO: ["h", "hB", "hb", "H"],
          MR: ["h", "hB", "hb", "H"],
          OM: ["h", "hB", "hb", "H"],
          PH: ["h", "hB", "hb", "H"],
          PS: ["h", "hB", "hb", "H"],
          QA: ["h", "hB", "hb", "H"],
          SA: ["h", "hB", "hb", "H"],
          SD: ["h", "hB", "hb", "H"],
          SY: ["h", "hB", "hb", "H"],
          TN: ["h", "hB", "hb", "H"],
          YE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          LA: ["H", "hb", "hB", "h"],
          CN: ["H", "hB", "hb", "h"],
          LV: ["H", "hB", "hb", "h"],
          TL: ["H", "hB", "hb", "h"],
          "zu-ZA": ["H", "hB", "hb", "h"],
          CD: ["hB", "H"],
          IR: ["hB", "H"],
          "hi-IN": ["hB", "h", "H"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "te-IN": ["hB", "h", "H"],
          KH: ["hB", "h", "H", "hb"],
          "ta-IN": ["hB", "h", "hb", "H"],
          BN: ["hb", "hB", "h", "H"],
          MY: ["hb", "hB", "h", "H"],
          ET: ["hB", "hb", "h", "H"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          TW: ["hB", "hb", "h", "H"],
          KE: ["hB", "hb", "H", "h"],
          MM: ["hB", "hb", "H", "h"],
          TZ: ["hB", "hb", "H", "h"],
          UG: ["hB", "hb", "H", "h"],
        },
        $ = new RegExp("^".concat(I.source, "*")),
        K = new RegExp("".concat(I.source, "*$"));
      function X(e, t) {
        return { start: e, end: t };
      }
      var Y = !!String.prototype.startsWith,
        Q = !!String.fromCodePoint,
        J = !!Object.fromEntries,
        ee = !!String.prototype.codePointAt,
        et = !!String.prototype.trimStart,
        er = !!String.prototype.trimEnd,
        en = Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                9007199254740991 >= Math.abs(e)
              );
            },
        ei = !0;
      try {
        var eo = ed("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        ei =
          (null === (v = eo.exec("a")) || void 0 === v ? void 0 : v[0]) === "a";
      } catch (e) {
        ei = !1;
      }
      var ea = Y
          ? function (e, t, r) {
              return e.startsWith(t, r);
            }
          : function (e, t, r) {
              return e.slice(r, r + t.length) === t;
            },
        es = Q
          ? String.fromCodePoint
          : function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              for (var n = "", i = t.length, o = 0; i > o; ) {
                if ((e = t[o++]) > 1114111)
                  throw RangeError(e + " is not a valid code point");
                n +=
                  e < 65536
                    ? String.fromCharCode(e)
                    : String.fromCharCode(
                        ((e -= 65536) >> 10) + 55296,
                        (e % 1024) + 56320
                      );
              }
              return n;
            },
        el = J
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, r = 0; r < e.length; r++) {
                var n = e[r],
                  i = n[0],
                  o = n[1];
                t[i] = o;
              }
              return t;
            },
        eu = ee
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var r,
                n = e.length;
              if (!(t < 0) && !(t >= n)) {
                var i = e.charCodeAt(t);
                return i < 55296 ||
                  i > 56319 ||
                  t + 1 === n ||
                  (r = e.charCodeAt(t + 1)) < 56320 ||
                  r > 57343
                  ? i
                  : ((i - 55296) << 10) + (r - 56320) + 65536;
              }
            },
        ec = et
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace($, "");
            },
        eh = er
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(K, "");
            };
      function ed(e, t) {
        return new RegExp(e, t);
      }
      if (ei) {
        var ef = ed("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        x = function (e, t) {
          var r;
          return (
            (ef.lastIndex = t),
            null !== (r = ef.exec(e)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        x = function (e, t) {
          for (var r = []; ; ) {
            var n,
              i = eu(e, t);
            if (
              void 0 === i ||
              em(i) ||
              ((n = i) >= 33 && n <= 35) ||
              36 === n ||
              (n >= 37 && n <= 39) ||
              40 === n ||
              41 === n ||
              42 === n ||
              43 === n ||
              44 === n ||
              45 === n ||
              (n >= 46 && n <= 47) ||
              (n >= 58 && n <= 59) ||
              (n >= 60 && n <= 62) ||
              (n >= 63 && n <= 64) ||
              91 === n ||
              92 === n ||
              93 === n ||
              94 === n ||
              96 === n ||
              123 === n ||
              124 === n ||
              125 === n ||
              126 === n ||
              161 === n ||
              (n >= 162 && n <= 165) ||
              166 === n ||
              167 === n ||
              169 === n ||
              171 === n ||
              172 === n ||
              174 === n ||
              176 === n ||
              177 === n ||
              182 === n ||
              187 === n ||
              191 === n ||
              215 === n ||
              247 === n ||
              (n >= 8208 && n <= 8213) ||
              (n >= 8214 && n <= 8215) ||
              8216 === n ||
              8217 === n ||
              8218 === n ||
              (n >= 8219 && n <= 8220) ||
              8221 === n ||
              8222 === n ||
              8223 === n ||
              (n >= 8224 && n <= 8231) ||
              (n >= 8240 && n <= 8248) ||
              8249 === n ||
              8250 === n ||
              (n >= 8251 && n <= 8254) ||
              (n >= 8257 && n <= 8259) ||
              8260 === n ||
              8261 === n ||
              8262 === n ||
              (n >= 8263 && n <= 8273) ||
              8274 === n ||
              8275 === n ||
              (n >= 8277 && n <= 8286) ||
              (n >= 8592 && n <= 8596) ||
              (n >= 8597 && n <= 8601) ||
              (n >= 8602 && n <= 8603) ||
              (n >= 8604 && n <= 8607) ||
              8608 === n ||
              (n >= 8609 && n <= 8610) ||
              8611 === n ||
              (n >= 8612 && n <= 8613) ||
              8614 === n ||
              (n >= 8615 && n <= 8621) ||
              8622 === n ||
              (n >= 8623 && n <= 8653) ||
              (n >= 8654 && n <= 8655) ||
              (n >= 8656 && n <= 8657) ||
              8658 === n ||
              8659 === n ||
              8660 === n ||
              (n >= 8661 && n <= 8691) ||
              (n >= 8692 && n <= 8959) ||
              (n >= 8960 && n <= 8967) ||
              8968 === n ||
              8969 === n ||
              8970 === n ||
              8971 === n ||
              (n >= 8972 && n <= 8991) ||
              (n >= 8992 && n <= 8993) ||
              (n >= 8994 && n <= 9e3) ||
              9001 === n ||
              9002 === n ||
              (n >= 9003 && n <= 9083) ||
              9084 === n ||
              (n >= 9085 && n <= 9114) ||
              (n >= 9115 && n <= 9139) ||
              (n >= 9140 && n <= 9179) ||
              (n >= 9180 && n <= 9185) ||
              (n >= 9186 && n <= 9254) ||
              (n >= 9255 && n <= 9279) ||
              (n >= 9280 && n <= 9290) ||
              (n >= 9291 && n <= 9311) ||
              (n >= 9472 && n <= 9654) ||
              9655 === n ||
              (n >= 9656 && n <= 9664) ||
              9665 === n ||
              (n >= 9666 && n <= 9719) ||
              (n >= 9720 && n <= 9727) ||
              (n >= 9728 && n <= 9838) ||
              9839 === n ||
              (n >= 9840 && n <= 10087) ||
              10088 === n ||
              10089 === n ||
              10090 === n ||
              10091 === n ||
              10092 === n ||
              10093 === n ||
              10094 === n ||
              10095 === n ||
              10096 === n ||
              10097 === n ||
              10098 === n ||
              10099 === n ||
              10100 === n ||
              10101 === n ||
              (n >= 10132 && n <= 10175) ||
              (n >= 10176 && n <= 10180) ||
              10181 === n ||
              10182 === n ||
              (n >= 10183 && n <= 10213) ||
              10214 === n ||
              10215 === n ||
              10216 === n ||
              10217 === n ||
              10218 === n ||
              10219 === n ||
              10220 === n ||
              10221 === n ||
              10222 === n ||
              10223 === n ||
              (n >= 10224 && n <= 10239) ||
              (n >= 10240 && n <= 10495) ||
              (n >= 10496 && n <= 10626) ||
              10627 === n ||
              10628 === n ||
              10629 === n ||
              10630 === n ||
              10631 === n ||
              10632 === n ||
              10633 === n ||
              10634 === n ||
              10635 === n ||
              10636 === n ||
              10637 === n ||
              10638 === n ||
              10639 === n ||
              10640 === n ||
              10641 === n ||
              10642 === n ||
              10643 === n ||
              10644 === n ||
              10645 === n ||
              10646 === n ||
              10647 === n ||
              10648 === n ||
              (n >= 10649 && n <= 10711) ||
              10712 === n ||
              10713 === n ||
              10714 === n ||
              10715 === n ||
              (n >= 10716 && n <= 10747) ||
              10748 === n ||
              10749 === n ||
              (n >= 10750 && n <= 11007) ||
              (n >= 11008 && n <= 11055) ||
              (n >= 11056 && n <= 11076) ||
              (n >= 11077 && n <= 11078) ||
              (n >= 11079 && n <= 11084) ||
              (n >= 11085 && n <= 11123) ||
              (n >= 11124 && n <= 11125) ||
              (n >= 11126 && n <= 11157) ||
              11158 === n ||
              (n >= 11159 && n <= 11263) ||
              (n >= 11776 && n <= 11777) ||
              11778 === n ||
              11779 === n ||
              11780 === n ||
              11781 === n ||
              (n >= 11782 && n <= 11784) ||
              11785 === n ||
              11786 === n ||
              11787 === n ||
              11788 === n ||
              11789 === n ||
              (n >= 11790 && n <= 11798) ||
              11799 === n ||
              (n >= 11800 && n <= 11801) ||
              11802 === n ||
              11803 === n ||
              11804 === n ||
              11805 === n ||
              (n >= 11806 && n <= 11807) ||
              11808 === n ||
              11809 === n ||
              11810 === n ||
              11811 === n ||
              11812 === n ||
              11813 === n ||
              11814 === n ||
              11815 === n ||
              11816 === n ||
              11817 === n ||
              (n >= 11818 && n <= 11822) ||
              11823 === n ||
              (n >= 11824 && n <= 11833) ||
              (n >= 11834 && n <= 11835) ||
              (n >= 11836 && n <= 11839) ||
              11840 === n ||
              11841 === n ||
              11842 === n ||
              (n >= 11843 && n <= 11855) ||
              (n >= 11856 && n <= 11857) ||
              11858 === n ||
              (n >= 11859 && n <= 11903) ||
              (n >= 12289 && n <= 12291) ||
              12296 === n ||
              12297 === n ||
              12298 === n ||
              12299 === n ||
              12300 === n ||
              12301 === n ||
              12302 === n ||
              12303 === n ||
              12304 === n ||
              12305 === n ||
              (n >= 12306 && n <= 12307) ||
              12308 === n ||
              12309 === n ||
              12310 === n ||
              12311 === n ||
              12312 === n ||
              12313 === n ||
              12314 === n ||
              12315 === n ||
              12316 === n ||
              12317 === n ||
              (n >= 12318 && n <= 12319) ||
              12320 === n ||
              12336 === n ||
              64830 === n ||
              64831 === n ||
              (n >= 65093 && n <= 65094)
            )
              break;
            r.push(i), (t += i >= 65536 ? 2 : 1);
          }
          return es.apply(void 0, r);
        };
      var ep = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, r) {
            for (var n = []; !this.isEOF(); ) {
              var i = this.char();
              if (123 === i) {
                var o = this.parseArgument(e, r);
                if (o.err) return o;
                n.push(o.val);
              } else if (125 === i && e > 0) break;
              else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                var a = this.clonePosition();
                this.bump(),
                  n.push({
                    type: y.pound,
                    location: X(a, this.clonePosition()),
                  });
              } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                if (60 === i && !this.ignoreTag && eg(this.peek() || 0)) {
                  var o = this.parseTag(e, t);
                  if (o.err) return o;
                  n.push(o.val);
                } else {
                  var o = this.parseLiteral(e, t);
                  if (o.err) return o;
                  n.push(o.val);
                }
              } else {
                if (!r)
                  return this.error(
                    m.UNMATCHED_CLOSING_TAG,
                    X(this.clonePosition(), this.clonePosition())
                  );
                break;
              }
            }
            return { val: n, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var r = this.clonePosition();
            this.bump();
            var n = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: y.literal,
                  value: "<".concat(n, "/>"),
                  location: X(r, this.clonePosition()),
                },
                err: null,
              };
            if (!this.bumpIf(">"))
              return this.error(m.INVALID_TAG, X(r, this.clonePosition()));
            var i = this.parseMessage(e + 1, t, !0);
            if (i.err) return i;
            var o = i.val,
              a = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(m.UNCLOSED_TAG, X(r, this.clonePosition()));
            if (this.isEOF() || !eg(this.char()))
              return this.error(m.INVALID_TAG, X(a, this.clonePosition()));
            var s = this.clonePosition();
            return n !== this.parseTagName()
              ? this.error(m.UNMATCHED_CLOSING_TAG, X(s, this.clonePosition()))
              : (this.bumpSpace(), this.bumpIf(">"))
              ? {
                  val: {
                    type: y.tag,
                    value: n,
                    children: o,
                    location: X(r, this.clonePosition()),
                  },
                  err: null,
                }
              : this.error(m.INVALID_TAG, X(a, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e,
              t = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (45 === (e = this.char()) ||
                46 === e ||
                (e >= 48 && e <= 57) ||
                95 === e ||
                (e >= 97 && e <= 122) ||
                (e >= 65 && e <= 90) ||
                183 == e ||
                (e >= 192 && e <= 214) ||
                (e >= 216 && e <= 246) ||
                (e >= 248 && e <= 893) ||
                (e >= 895 && e <= 8191) ||
                (e >= 8204 && e <= 8205) ||
                (e >= 8255 && e <= 8256) ||
                (e >= 8304 && e <= 8591) ||
                (e >= 11264 && e <= 12271) ||
                (e >= 12289 && e <= 55295) ||
                (e >= 63744 && e <= 64975) ||
                (e >= 65008 && e <= 65533) ||
                (e >= 65536 && e <= 983039));

            )
              this.bump();
            return this.message.slice(t, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var r = this.clonePosition(), n = ""; ; ) {
              var i = this.tryParseQuote(t);
              if (i) {
                n += i;
                continue;
              }
              var o = this.tryParseUnquoted(e, t);
              if (o) {
                n += o;
                continue;
              }
              var a = this.tryParseLeftAngleBracket();
              if (a) {
                n += a;
                continue;
              }
              break;
            }
            var s = X(r, this.clonePosition());
            return {
              val: { type: y.literal, value: n, location: s },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            var e;
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && (eg((e = this.peek() || 0)) || 47 === e))
              ? null
              : (this.bump(), "<");
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 === this.peek()) t.push(39), this.bump();
                else {
                  this.bump();
                  break;
                }
              } else t.push(r);
              this.bump();
            }
            return es.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === t || "selectordinal" === t)) ||
              (125 === r && e > 0)
              ? null
              : (this.bump(), es(r));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                m.EXPECT_ARGUMENT_CLOSING_BRACE,
                X(r, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(m.EMPTY_ARGUMENT, X(r, this.clonePosition()))
              );
            var n = this.parseIdentifierIfPossible().value;
            if (!n)
              return this.error(
                m.MALFORMED_ARGUMENT,
                X(r, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                m.EXPECT_ARGUMENT_CLOSING_BRACE,
                X(r, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: y.argument,
                      value: n,
                      location: X(r, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                if ((this.bump(), this.bumpSpace(), this.isEOF()))
                  return this.error(
                    m.EXPECT_ARGUMENT_CLOSING_BRACE,
                    X(r, this.clonePosition())
                  );
                return this.parseArgumentOptions(e, t, n, r);
              default:
                return this.error(
                  m.MALFORMED_ARGUMENT,
                  X(r, this.clonePosition())
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              r = x(this.message, t),
              n = t + r.length;
            return (
              this.bumpTo(n), { value: r, location: X(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, r, n) {
            var i,
              o = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              s = this.clonePosition();
            switch (a) {
              case "":
                return this.error(m.EXPECT_ARGUMENT_TYPE, X(o, s));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var l = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var u = this.clonePosition(),
                    c = this.parseSimpleArgStyleIfPossible();
                  if (c.err) return c;
                  var h = eh(c.val);
                  if (0 === h.length)
                    return this.error(
                      m.EXPECT_ARGUMENT_STYLE,
                      X(this.clonePosition(), this.clonePosition())
                    );
                  l = { style: h, styleLocation: X(u, this.clonePosition()) };
                }
                var d = this.tryParseArgumentClose(n);
                if (d.err) return d;
                var f = X(n, this.clonePosition());
                if (l && ea(null == l ? void 0 : l.style, "::", 0)) {
                  var p,
                    g = ec(l.style.slice(2));
                  if ("number" === a) {
                    var c = this.parseNumberSkeletonFromString(
                      g,
                      l.styleLocation
                    );
                    if (c.err) return c;
                    return {
                      val: {
                        type: y.number,
                        value: r,
                        location: f,
                        style: c.val,
                      },
                      err: null,
                    };
                  }
                  if (0 === g.length)
                    return this.error(m.EXPECT_DATE_TIME_SKELETON, f);
                  var v = g;
                  this.locale &&
                    (v = (function (e, t) {
                      for (var r = "", n = 0; n < e.length; n++) {
                        var i = e.charAt(n);
                        if ("j" === i) {
                          for (
                            var o = 0;
                            n + 1 < e.length && e.charAt(n + 1) === i;

                          )
                            o++, n++;
                          var a = 1 + (1 & o),
                            s = o < 2 ? 1 : 3 + (o >> 1),
                            l = (function (e) {
                              var t,
                                r = e.hourCycle;
                              if (
                                (void 0 === r &&
                                  e.hourCycles &&
                                  e.hourCycles.length &&
                                  (r = e.hourCycles[0]),
                                r)
                              )
                                switch (r) {
                                  case "h24":
                                    return "k";
                                  case "h23":
                                    return "H";
                                  case "h12":
                                    return "h";
                                  case "h11":
                                    return "K";
                                  default:
                                    throw Error("Invalid hourCycle");
                                }
                              var n = e.language;
                              return (
                                "root" !== n && (t = e.maximize().region),
                                (Z[t || ""] ||
                                  Z[n || ""] ||
                                  Z["".concat(n, "-001")] ||
                                  Z["001"])[0]
                              );
                            })(t);
                          for (("H" == l || "k" == l) && (s = 0); s-- > 0; )
                            r += "a";
                          for (; a-- > 0; ) r = l + r;
                        } else "J" === i ? (r += "H") : (r += i);
                      }
                      return r;
                    })(g, this.locale));
                  var h = {
                    type: b.dateTime,
                    pattern: v,
                    location: l.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? ((p = {}),
                        v.replace(F, function (e) {
                          var t = e.length;
                          switch (e[0]) {
                            case "G":
                              p.era =
                                4 === t ? "long" : 5 === t ? "narrow" : "short";
                              break;
                            case "y":
                              p.year = 2 === t ? "2-digit" : "numeric";
                              break;
                            case "Y":
                            case "u":
                            case "U":
                            case "r":
                              throw RangeError(
                                "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                              );
                            case "q":
                            case "Q":
                              throw RangeError(
                                "`q/Q` (quarter) patterns are not supported"
                              );
                            case "M":
                            case "L":
                              p.month = [
                                "numeric",
                                "2-digit",
                                "short",
                                "long",
                                "narrow",
                              ][t - 1];
                              break;
                            case "w":
                            case "W":
                              throw RangeError(
                                "`w/W` (week) patterns are not supported"
                              );
                            case "d":
                              p.day = ["numeric", "2-digit"][t - 1];
                              break;
                            case "D":
                            case "F":
                            case "g":
                              throw RangeError(
                                "`D/F/g` (day) patterns are not supported, use `d` instead"
                              );
                            case "E":
                              p.weekday =
                                4 === t
                                  ? "short"
                                  : 5 === t
                                  ? "narrow"
                                  : "short";
                              break;
                            case "e":
                              if (t < 4)
                                throw RangeError(
                                  "`e..eee` (weekday) patterns are not supported"
                                );
                              p.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "c":
                              if (t < 4)
                                throw RangeError(
                                  "`c..ccc` (weekday) patterns are not supported"
                                );
                              p.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "a":
                              p.hour12 = !0;
                              break;
                            case "b":
                            case "B":
                              throw RangeError(
                                "`b/B` (period) patterns are not supported, use `a` instead"
                              );
                            case "h":
                              (p.hourCycle = "h12"),
                                (p.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "H":
                              (p.hourCycle = "h23"),
                                (p.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "K":
                              (p.hourCycle = "h11"),
                                (p.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "k":
                              (p.hourCycle = "h24"),
                                (p.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "j":
                            case "J":
                            case "C":
                              throw RangeError(
                                "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                              );
                            case "m":
                              p.minute = ["numeric", "2-digit"][t - 1];
                              break;
                            case "s":
                              p.second = ["numeric", "2-digit"][t - 1];
                              break;
                            case "S":
                            case "A":
                              throw RangeError(
                                "`S/A` (second) patterns are not supported, use `s` instead"
                              );
                            case "z":
                              p.timeZoneName = t < 4 ? "short" : "long";
                              break;
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                              throw RangeError(
                                "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
                              );
                          }
                          return "";
                        }),
                        p)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === a ? y.date : y.time,
                      value: r,
                      location: f,
                      style: h,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === a
                        ? y.number
                        : "date" === a
                        ? y.date
                        : y.time,
                    value: r,
                    location: f,
                    style:
                      null !== (i = null == l ? void 0 : l.style) &&
                      void 0 !== i
                        ? i
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var x = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    m.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    X(x, S({}, x))
                  );
                this.bumpSpace();
                var w = this.parseIdentifierIfPossible(),
                  C = 0;
                if ("select" !== a && "offset" === w.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      m.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      X(this.clonePosition(), this.clonePosition())
                    );
                  this.bumpSpace();
                  var c = this.tryParseDecimalInteger(
                    m.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    m.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                  );
                  if (c.err) return c;
                  this.bumpSpace(),
                    (w = this.parseIdentifierIfPossible()),
                    (C = c.val);
                }
                var k = this.tryParsePluralOrSelectOptions(e, a, t, w);
                if (k.err) return k;
                var d = this.tryParseArgumentClose(n);
                if (d.err) return d;
                var E = X(n, this.clonePosition());
                if ("select" === a)
                  return {
                    val: {
                      type: y.select,
                      value: r,
                      options: el(k.val),
                      location: E,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: y.plural,
                    value: r,
                    options: el(k.val),
                    offset: C,
                    pluralType: "plural" === a ? "cardinal" : "ordinal",
                    location: E,
                  },
                  err: null,
                };
              default:
                return this.error(m.INVALID_ARGUMENT_TYPE, X(o, s));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  m.EXPECT_ARGUMENT_CLOSING_BRACE,
                  X(e, this.clonePosition())
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      m.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      X(r, this.clonePosition())
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var r = [];
            try {
              r = (function (e) {
                if (0 === e.length)
                  throw Error("Number skeleton cannot be empty");
                for (
                  var t = e.split(_).filter(function (e) {
                      return e.length > 0;
                    }),
                    r = [],
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = t[n].split("/");
                  if (0 === i.length) throw Error("Invalid number skeleton");
                  for (var o = i[0], a = i.slice(1), s = 0; s < a.length; s++)
                    if (0 === a[s].length)
                      throw Error("Invalid number skeleton");
                  r.push({ stem: o, options: a });
                }
                return r;
              })(e);
            } catch (e) {
              return this.error(m.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: b.number,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons
                  ? (function (e) {
                      for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r];
                        switch (n.stem) {
                          case "percent":
                          case "%":
                            t.style = "percent";
                            continue;
                          case "%x100":
                            (t.style = "percent"), (t.scale = 100);
                            continue;
                          case "currency":
                            (t.style = "currency"), (t.currency = n.options[0]);
                            continue;
                          case "group-off":
                          case ",_":
                            t.useGrouping = !1;
                            continue;
                          case "precision-integer":
                          case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                          case "measure-unit":
                          case "unit":
                            (t.style = "unit"),
                              (t.unit = n.options[0].replace(/^(.*?)-/, ""));
                            continue;
                          case "compact-short":
                          case "K":
                            (t.notation = "compact"),
                              (t.compactDisplay = "short");
                            continue;
                          case "compact-long":
                          case "KK":
                            (t.notation = "compact"),
                              (t.compactDisplay = "long");
                            continue;
                          case "scientific":
                            t = S(
                              S(S({}, t), { notation: "scientific" }),
                              n.options.reduce(function (e, t) {
                                return S(S({}, e), q(t) || {});
                              }, {})
                            );
                            continue;
                          case "engineering":
                            t = S(
                              S(S({}, t), { notation: "engineering" }),
                              n.options.reduce(function (e, t) {
                                return S(S({}, e), q(t) || {});
                              }, {})
                            );
                            continue;
                          case "notation-simple":
                            t.notation = "standard";
                            continue;
                          case "unit-width-narrow":
                            (t.currencyDisplay = "narrowSymbol"),
                              (t.unitDisplay = "narrow");
                            continue;
                          case "unit-width-short":
                            (t.currencyDisplay = "code"),
                              (t.unitDisplay = "short");
                            continue;
                          case "unit-width-full-name":
                            (t.currencyDisplay = "name"),
                              (t.unitDisplay = "long");
                            continue;
                          case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                          case "scale":
                            t.scale = parseFloat(n.options[0]);
                            continue;
                          case "integer-width":
                            if (n.options.length > 1)
                              throw RangeError(
                                "integer-width stems only accept a single optional option"
                              );
                            n.options[0].replace(
                              V,
                              function (e, r, n, i, o, a) {
                                if (r) t.minimumIntegerDigits = n.length;
                                else if (i && o)
                                  throw Error(
                                    "We currently do not support maximum integer digits"
                                  );
                                else if (a)
                                  throw Error(
                                    "We currently do not support exact integer digits"
                                  );
                                return "";
                              }
                            );
                            continue;
                        }
                        if (G.test(n.stem)) {
                          t.minimumIntegerDigits = n.stem.length;
                          continue;
                        }
                        if (H.test(n.stem)) {
                          if (n.options.length > 1)
                            throw RangeError(
                              "Fraction-precision stems only accept a single optional option"
                            );
                          n.stem.replace(H, function (e, r, n, i, o, a) {
                            return (
                              "*" === n
                                ? (t.minimumFractionDigits = r.length)
                                : i && "#" === i[0]
                                ? (t.maximumFractionDigits = i.length)
                                : o && a
                                ? ((t.minimumFractionDigits = o.length),
                                  (t.maximumFractionDigits =
                                    o.length + a.length))
                                : ((t.minimumFractionDigits = r.length),
                                  (t.maximumFractionDigits = r.length)),
                              ""
                            );
                          });
                          var i = n.options[0];
                          "w" === i
                            ? (t = S(S({}, t), {
                                trailingZeroDisplay: "stripIfInteger",
                              }))
                            : i && (t = S(S({}, t), z(i)));
                          continue;
                        }
                        if (U.test(n.stem)) {
                          t = S(S({}, t), z(n.stem));
                          continue;
                        }
                        var o = q(n.stem);
                        o && (t = S(S({}, t), o));
                        var a = (function (e) {
                          var t;
                          if (
                            ("E" === e[0] && "E" === e[1]
                              ? ((t = { notation: "engineering" }),
                                (e = e.slice(2)))
                              : "E" === e[0] &&
                                ((t = { notation: "scientific" }),
                                (e = e.slice(1))),
                            t)
                          ) {
                            var r = e.slice(0, 2);
                            if (
                              ("+!" === r
                                ? ((t.signDisplay = "always"), (e = e.slice(2)))
                                : "+?" === r &&
                                  ((t.signDisplay = "exceptZero"),
                                  (e = e.slice(2))),
                              !G.test(e))
                            )
                              throw Error(
                                "Malformed concise eng/scientific notation"
                              );
                            t.minimumIntegerDigits = e.length;
                          }
                          return t;
                        })(n.stem);
                        a && (t = S(S({}, t), a));
                      }
                      return t;
                    })(r)
                  : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, n) {
            for (
              var i, o = !1, a = [], s = new Set(), l = n.value, u = n.location;
              ;

            ) {
              if (0 === l.length) {
                var c = this.clonePosition();
                if ("select" !== t && this.bumpIf("=")) {
                  var h = this.tryParseDecimalInteger(
                    m.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    m.INVALID_PLURAL_ARGUMENT_SELECTOR
                  );
                  if (h.err) return h;
                  (u = X(c, this.clonePosition())),
                    (l = this.message.slice(c.offset, this.offset()));
                } else break;
              }
              if (s.has(l))
                return this.error(
                  "select" === t
                    ? m.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : m.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  u
                );
              "other" === l && (o = !0), this.bumpSpace();
              var d = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? m.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : m.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  X(this.clonePosition(), this.clonePosition())
                );
              var f = this.parseMessage(e + 1, t, r);
              if (f.err) return f;
              var p = this.tryParseArgumentClose(d);
              if (p.err) return p;
              a.push([
                l,
                { value: f.val, location: X(d, this.clonePosition()) },
              ]),
                s.add(l),
                this.bumpSpace(),
                (l = (i = this.parseIdentifierIfPossible()).value),
                (u = i.location);
            }
            return 0 === a.length
              ? this.error(
                  "select" === t
                    ? m.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : m.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  X(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !o
              ? this.error(
                  m.MISSING_OTHER_CLAUSE,
                  X(this.clonePosition(), this.clonePosition())
                )
              : { val: a, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var r = 1,
              n = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
            for (var i = !1, o = 0; !this.isEOF(); ) {
              var a = this.char();
              if (a >= 48 && a <= 57)
                (i = !0), (o = 10 * o + (a - 48)), this.bump();
              else break;
            }
            var s = X(n, this.clonePosition());
            return i
              ? en((o *= r))
                ? { val: o, err: null }
                : this.error(t, s)
              : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = eu(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (ea(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              r = this.message.indexOf(e, t);
            return r >= 0
              ? (this.bumpTo(r), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset "
                  )
                  .concat(this.offset())
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary"
                  )
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && em(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != r ? r : null;
          }),
          e
        );
      })();
      function eg(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function em(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function ey(e, t) {
        void 0 === t && (t = {}),
          (t = S({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t));
        var r = new ep(e, t).parse();
        if (r.err) {
          var n = SyntaxError(m[r.err.kind]);
          throw (
            ((n.location = r.err.location),
            (n.originalMessage = r.err.message),
            n)
          );
        }
        return (
          (null == t ? void 0 : t.captureLocation) ||
            (function e(t) {
              t.forEach(function (t) {
                if ((delete t.location, L(t) || M(t)))
                  for (var r in t.options)
                    delete t.options[r].location, e(t.options[r].value);
                else
                  N(t) && B(t.style)
                    ? delete t.style.location
                    : (j(t) || R(t)) && D(t.style)
                    ? delete t.style.location
                    : O(t) && e(t.children);
              });
            })(r.val),
          r.val
        );
      }
      function eb(e, t) {
        var r = t && t.cache ? t.cache : eE,
          n = t && t.serializer ? t.serializer : eC;
        return (t && t.strategy ? t.strategy : ew)(e, {
          cache: r,
          serializer: n,
        });
      }
      function ev(e, t, r, n) {
        var i =
            null == n || "number" == typeof n || "boolean" == typeof n
              ? n
              : r(n),
          o = t.get(i);
        return void 0 === o && ((o = e.call(this, n)), t.set(i, o)), o;
      }
      function ex(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = t.get(i);
        return void 0 === o && ((o = e.apply(this, n)), t.set(i, o)), o;
      }
      function ew(e, t) {
        var r,
          n,
          i = 1 === e.length ? ev : ex;
        return (
          (r = t.cache.create()), (n = t.serializer), i.bind(this, e, r, n)
        );
      }
      var eC = function () {
        return JSON.stringify(arguments);
      };
      function ek() {
        this.cache = Object.create(null);
      }
      (ek.prototype.get = function (e) {
        return this.cache[e];
      }),
        (ek.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var eE = {
          create: function () {
            return new ek();
          },
        },
        eT = {
          variadic: function (e, t) {
            var r, n;
            return (
              (r = t.cache.create()), (n = t.serializer), ex.bind(this, e, r, n)
            );
          },
          monadic: function (e, t) {
            var r, n;
            return (
              (r = t.cache.create()), (n = t.serializer), ev.bind(this, e, r, n)
            );
          },
        };
      ((d = w || (w = {})).MISSING_VALUE = "MISSING_VALUE"),
        (d.INVALID_VALUE = "INVALID_VALUE"),
        (d.MISSING_INTL_API = "MISSING_INTL_API");
      var eS = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return (i.code = r), (i.originalMessage = n), i;
          }
          return (
            T(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        eP = (function (e) {
          function t(t, r, n, i) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                w.INVALID_VALUE,
                i
              ) || this
            );
          }
          return T(t, e), t;
        })(eS),
        eA = (function (e) {
          function t(t, r, n) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(r),
                w.INVALID_VALUE,
                n
              ) || this
            );
          }
          return T(t, e), t;
        })(eS),
        eN = (function (e) {
          function t(t, r) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(r, '"'),
                w.MISSING_VALUE,
                r
              ) || this
            );
          }
          return T(t, e), t;
        })(eS);
      function ej(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      ((f = C || (C = {}))[(f.literal = 0)] = "literal"),
        (f[(f.object = 1)] = "object");
      var eR = (function () {
          function e(t, r, n, i) {
            var o,
              a,
              s = this;
            if (
              (void 0 === r && (r = e.defaultLocale),
              (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {},
              }),
              (this.format = function (e) {
                var t = s.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var r = t.reduce(function (e, t) {
                  return (
                    e.length &&
                    t.type === C.literal &&
                    "string" == typeof e[e.length - 1]
                      ? (e[e.length - 1] += t.value)
                      : e.push(t.value),
                    e
                  );
                }, []);
                return r.length <= 1 ? r[0] || "" : r;
              }),
              (this.formatToParts = function (e) {
                return (function e(t, r, n, i, o, a, s) {
                  if (1 === t.length && A(t[0]))
                    return [{ type: C.literal, value: t[0].value }];
                  for (var l = [], u = 0; u < t.length; u++) {
                    var c = t[u];
                    if (A(c)) {
                      l.push({ type: C.literal, value: c.value });
                      continue;
                    }
                    if (c.type === y.pound) {
                      "number" == typeof a &&
                        l.push({
                          type: C.literal,
                          value: n.getNumberFormat(r).format(a),
                        });
                      continue;
                    }
                    var h = c.value;
                    if (!(o && h in o)) throw new eN(h, s);
                    var d = o[h];
                    if (c.type === y.argument) {
                      (d && "string" != typeof d && "number" != typeof d) ||
                        (d =
                          "string" == typeof d || "number" == typeof d
                            ? String(d)
                            : ""),
                        l.push({
                          type: "string" == typeof d ? C.literal : C.object,
                          value: d,
                        });
                      continue;
                    }
                    if (j(c)) {
                      var f =
                        "string" == typeof c.style
                          ? i.date[c.style]
                          : D(c.style)
                          ? c.style.parsedOptions
                          : void 0;
                      l.push({
                        type: C.literal,
                        value: n.getDateTimeFormat(r, f).format(d),
                      });
                      continue;
                    }
                    if (R(c)) {
                      var f =
                        "string" == typeof c.style
                          ? i.time[c.style]
                          : D(c.style)
                          ? c.style.parsedOptions
                          : i.time.medium;
                      l.push({
                        type: C.literal,
                        value: n.getDateTimeFormat(r, f).format(d),
                      });
                      continue;
                    }
                    if (N(c)) {
                      var f =
                        "string" == typeof c.style
                          ? i.number[c.style]
                          : B(c.style)
                          ? c.style.parsedOptions
                          : void 0;
                      f && f.scale && (d *= f.scale || 1),
                        l.push({
                          type: C.literal,
                          value: n.getNumberFormat(r, f).format(d),
                        });
                      continue;
                    }
                    if (O(c)) {
                      var p = c.children,
                        g = c.value,
                        m = o[g];
                      if ("function" != typeof m)
                        throw new eA(g, "function", s);
                      var b = m(
                        e(p, r, n, i, o, a).map(function (e) {
                          return e.value;
                        })
                      );
                      Array.isArray(b) || (b = [b]),
                        l.push.apply(
                          l,
                          b.map(function (e) {
                            return {
                              type: "string" == typeof e ? C.literal : C.object,
                              value: e,
                            };
                          })
                        );
                    }
                    if (L(c)) {
                      var v = c.options[d] || c.options.other;
                      if (!v)
                        throw new eP(c.value, d, Object.keys(c.options), s);
                      l.push.apply(l, e(v.value, r, n, i, o));
                      continue;
                    }
                    if (M(c)) {
                      var v = c.options["=".concat(d)];
                      if (!v) {
                        if (!Intl.PluralRules)
                          throw new eS(
                            'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                            w.MISSING_INTL_API,
                            s
                          );
                        var x = n
                          .getPluralRules(r, { type: c.pluralType })
                          .select(d - (c.offset || 0));
                        v = c.options[x] || c.options.other;
                      }
                      if (!v)
                        throw new eP(c.value, d, Object.keys(c.options), s);
                      l.push.apply(
                        l,
                        e(v.value, r, n, i, o, d - (c.offset || 0))
                      );
                      continue;
                    }
                  }
                  return l.length < 2
                    ? l
                    : l.reduce(function (e, t) {
                        var r = e[e.length - 1];
                        return (
                          r && r.type === C.literal && t.type === C.literal
                            ? (r.value += t.value)
                            : e.push(t),
                          e
                        );
                      }, []);
                })(
                  s.ast,
                  s.locales,
                  s.formatters,
                  s.formats,
                  e,
                  void 0,
                  s.message
                );
              }),
              (this.resolvedOptions = function () {
                return { locale: s.resolvedLocale.toString() };
              }),
              (this.getAst = function () {
                return s.ast;
              }),
              (this.locales = r),
              (this.resolvedLocale = e.resolveLocale(r)),
              "string" == typeof t)
            ) {
              if (((this.message = t), !e.__parse))
                throw TypeError(
                  "IntlMessageFormat.__parse must be set to process `message` of type `string`"
                );
              this.ast = e.__parse(t, {
                ignoreTag: null == i ? void 0 : i.ignoreTag,
                locale: this.resolvedLocale,
              });
            } else this.ast = t;
            if (!Array.isArray(this.ast))
              throw TypeError("A message must be provided as a String or AST.");
            (this.formats =
              ((o = e.formats),
              n
                ? Object.keys(o).reduce(function (e, t) {
                    var r, i;
                    return (
                      (e[t] =
                        ((r = o[t]),
                        (i = n[t])
                          ? S(
                              S(S({}, r || {}), i || {}),
                              Object.keys(r).reduce(function (e, t) {
                                return (e[t] = S(S({}, r[t]), i[t] || {})), e;
                              }, {})
                            )
                          : r)),
                      e
                    );
                  }, S({}, o))
                : o)),
              (this.formatters =
                (i && i.formatters) ||
                (void 0 === (a = this.formatterCache) &&
                  (a = { number: {}, dateTime: {}, pluralRules: {} }),
                {
                  getNumberFormat: eb(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.NumberFormat).bind.apply(
                        e,
                        P([void 0], t, !1)
                      ))();
                    },
                    { cache: ej(a.number), strategy: eT.variadic }
                  ),
                  getDateTimeFormat: eb(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.DateTimeFormat).bind.apply(
                        e,
                        P([void 0], t, !1)
                      ))();
                    },
                    { cache: ej(a.dateTime), strategy: eT.variadic }
                  ),
                  getPluralRules: eb(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.PluralRules).bind.apply(
                        e,
                        P([void 0], t, !1)
                      ))();
                    },
                    { cache: ej(a.pluralRules), strategy: eT.variadic }
                  ),
                }));
          }
          return (
            Object.defineProperty(e, "defaultLocale", {
              get: function () {
                return (
                  e.memoizedDefaultLocale ||
                    (e.memoizedDefaultLocale =
                      new Intl.NumberFormat().resolvedOptions().locale),
                  e.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.memoizedDefaultLocale = null),
            (e.resolveLocale = function (e) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return new Intl.Locale(
                t.length > 0 ? t[0] : "string" == typeof e ? e : e[0]
              );
            }),
            (e.__parse = ey),
            (e.formats = {
              number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: "currency" },
                percent: { style: "percent" },
              },
              date: {
                short: { month: "numeric", day: "numeric", year: "2-digit" },
                medium: { month: "short", day: "numeric", year: "numeric" },
                long: { month: "long", day: "numeric", year: "numeric" },
                full: {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                },
              },
              time: {
                short: { hour: "numeric", minute: "numeric" },
                medium: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                },
                long: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
                full: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
              },
            }),
            e
          );
        })(),
        eL = r(959);
      function eM(e) {
        return [e.namespace, e.key]
          .filter(function (e) {
            return null != e;
          })
          .join(".");
      }
      function eO(e) {
        console.error(e);
      }
      function eB(e, t, r) {
        if (!e) throw Error(void 0);
        var n = e;
        return (
          t.split(".").forEach(function (e) {
            var t = n[e];
            if (null == e || null == t) throw Error(void 0);
            n = t;
          }),
          n
        );
      }
      function eD(e) {
        var t = e.messages,
          r = e.namespace,
          n = e.onError;
        try {
          if (!t) throw Error(void 0);
          var i = r ? eB(t, r) : t;
          if (!i) throw Error(void 0);
          return i;
        } catch (e) {
          var o = new k(g.MISSING_MESSAGE, e.message);
          return (void 0 === n ? eO : n)(o), o;
        }
      }
      function eI(e) {
        var t = e.cachedFormatsByLocale,
          r = e.defaultTranslationValues,
          i = e.formats,
          o = e.getMessageFallback,
          a = void 0 === o ? eM : o,
          s = e.locale,
          l = e.messagesOrError,
          u = e.namespace,
          c = e.onError,
          h = e.timeZone;
        function d(e, t, r) {
          var n = new k(t, r);
          return c(n), a({ error: n, key: e, namespace: u });
        }
        function f(e, o, c) {
          if (l instanceof k) return a({ error: l, key: e, namespace: u });
          try {
            p = eB(l, e, u);
          } catch (t) {
            return d(e, g.MISSING_MESSAGE, t.message);
          }
          var f,
            p,
            m,
            y,
            b,
            v,
            x,
            w,
            C = [u, e, String(p)]
              .filter(function (e) {
                return null != e;
              })
              .join(".");
          if (null != t && null != (f = t[s]) && f[C])
            m = null == t ? void 0 : t[s][C];
          else {
            if ("object" == typeof p)
              return (
                (y = Array.isArray(p)
                  ? g.INVALID_MESSAGE
                  : g.INSUFFICIENT_PATH),
                d(e, y, b)
              );
            try {
              m = new eR(
                p,
                s,
                ((v = n({}, i, c)),
                (w = h
                  ? n({}, v, {
                      dateTime: (x = v.dateTime)
                        ? Object.keys(x).reduce(function (e, t) {
                            return (e[t] = n({ timeZone: h }, x[t])), e;
                          }, {})
                        : x,
                    })
                  : v),
                n({}, w, {
                  date: null == w ? void 0 : w.dateTime,
                  time: null == w ? void 0 : w.dateTime,
                }))
              );
            } catch (t) {
              return d(e, g.INVALID_MESSAGE, t.message);
            }
            t && (t[s] || (t[s] = {}), (t[s][C] = m));
          }
          try {
            var E = m.format(
              (function (e) {
                if (0 !== Object.keys(e).length) {
                  var t = {};
                  return (
                    Object.keys(e).forEach(function (r) {
                      var n,
                        i = 0,
                        o = e[r];
                      (n =
                        "function" == typeof o
                          ? function (e) {
                              var t = o(e);
                              return (0, eL.isValidElement)(t)
                                ? (0, eL.cloneElement)(t, { key: r + i++ })
                                : t;
                            }
                          : o),
                        (t[r] = n);
                    }),
                    t
                  );
                }
              })(n({}, r, o))
            );
            if (null == E) throw Error(void 0);
            return (0, eL.isValidElement)(E) ||
              Array.isArray(E) ||
              "string" == typeof E
              ? E
              : String(E);
          } catch (t) {
            return d(e, g.FORMATTING_ERROR, t.message);
          }
        }
        function p(e, t, r) {
          var n = f(e, t, r);
          return "string" != typeof n ? d(e, g.INVALID_MESSAGE, void 0) : n;
        }
        return (
          (p.rich = f),
          (p.raw = function (e) {
            if (l instanceof k) return a({ error: l, key: e, namespace: u });
            try {
              return eB(l, e, u);
            } catch (t) {
              return d(e, g.MISSING_MESSAGE, t.message);
            }
          }),
          p
        );
      }
      function eF(e, t) {
        return e === t ? void 0 : e.slice((t + ".").length);
      }
      var e_ = ["getMessageFallback", "messages", "namespace", "onError"],
        eH = ["getMessageFallback", "messages", "namespace", "onError"];
      function eU(e) {
        var t = e.getMessageFallback,
          r = e.messages,
          i = e.namespace,
          o = e.onError;
        return (function (e, t) {
          var r = e.getMessageFallback,
            i = e.messages,
            o = e.namespace,
            a = e.onError,
            s = eI(
              n({}, l(e, e_), {
                onError: a,
                getMessageFallback: r,
                messagesOrError: eD({
                  messages: (i = i[t]),
                  namespace: (o = eF(o, t)),
                  onError: a,
                }),
              })
            ),
            u = s.rich;
          function c() {
            return s.apply(void 0, arguments);
          }
          return (
            (c.rich = function (e, t, n) {
              var i = u(e, t, n);
              if ("string" != typeof i) {
                var s = new k(g.FORMATTING_ERROR, void 0);
                return a(s), r({ error: s, key: e, namespace: o });
              }
              return i;
            }),
            (c.raw = s.raw),
            c
          );
        })(
          n({}, l(e, eH), {
            onError: void 0 === o ? eO : o,
            getMessageFallback: void 0 === t ? eM : t,
            messages: { "!": r },
            namespace: i ? "!." + i : "!",
          }),
          "!"
        );
      }
      var eV = 86400 * (365 / 12);
      function eG(e) {
        var t = e.formats,
          r = e.locale,
          i = e.now,
          o = e.onError,
          a = void 0 === o ? eO : o,
          s = e.timeZone;
        function l(e, t, r, n) {
          var i;
          try {
            i = (function (e, t) {
              var r;
              if ("string" == typeof t) {
                if (!(r = null == e ? void 0 : e[t])) {
                  var n = new k(g.MISSING_FORMAT, void 0);
                  throw (a(n), n);
                }
              } else r = t;
              return r;
            })(r, t);
          } catch (t) {
            return String(e);
          }
          try {
            return n(i);
          } catch (t) {
            return a(new k(g.FORMATTING_ERROR, t.message)), String(e);
          }
        }
        return {
          dateTime: function (e, i) {
            return l(e, i, null == t ? void 0 : t.dateTime, function (t) {
              var i;
              return (
                s &&
                  !(null != (i = t) && i.timeZone) &&
                  (t = n({}, t, { timeZone: s })),
                new Intl.DateTimeFormat(r, t).format(e)
              );
            });
          },
          number: function (e, n) {
            return l(e, n, null == t ? void 0 : t.number, function (t) {
              return new Intl.NumberFormat(r, t).format(e);
            });
          },
          relativeTime: function (e, t) {
            try {
              if (!t) {
                if (i) t = i;
                else throw Error(void 0);
              }
              var n,
                o,
                s,
                l,
                u = e instanceof Date ? e : new Date(e),
                c = t instanceof Date ? t : new Date(t),
                h =
                  ((n = (u.getTime() - c.getTime()) / 1e3),
                  (l = Math.abs(n)) < 60
                    ? ((s = "second"), (o = Math.round(n)))
                    : l < 3600
                    ? ((s = "minute"), (o = Math.round(n / 60)))
                    : l < 86400
                    ? ((s = "hour"), (o = Math.round(n / 3600)))
                    : l < 604800
                    ? ((s = "day"), (o = Math.round(n / 86400)))
                    : l < eV
                    ? ((s = "week"), (o = Math.round(n / 604800)))
                    : l < 31536e3
                    ? ((s = "month"), (o = Math.round(n / eV)))
                    : ((s = "year"), (o = Math.round(n / 31536e3))),
                  { value: o, unit: s }),
                d = h.unit,
                f = h.value;
              return new Intl.RelativeTimeFormat(r, { numeric: "auto" }).format(
                f,
                d
              );
            } catch (t) {
              return a(new k(g.FORMATTING_ERROR, t.message)), String(e);
            }
          },
          list: function (e, n) {
            return l(e, n, null == t ? void 0 : t.list, function (t) {
              return new Intl.ListFormat(r, t).format(e);
            });
          },
        };
      }
      function ez() {
        var e = eG.apply(void 0, arguments);
        return {
          formatDateTime: e.dateTime,
          formatNumber: e.number,
          formatRelativeTime: e.relativeTime,
        };
      }
      var eq = (0, eL.createContext)(void 0),
        eW = ["getMessageFallback", "messages", "onError"],
        eZ = ["children"];
      function e$(e) {
        var t,
          r,
          i,
          o = e.children,
          a = l(e, eZ);
        return eL.createElement(
          eq.Provider,
          {
            value:
              ((t = a.getMessageFallback),
              (r = a.messages),
              (i = a.onError),
              n({}, l(a, eW), {
                messages: r,
                onError: i || eO,
                getMessageFallback: t || eM,
              })),
          },
          o
        );
      }
      function eK() {
        var e = (0, eL.useContext)(eq);
        if (!e) throw Error(void 0);
        return e;
      }
      function eX(e) {
        var t, r, n, i, o, a, s, l, u, c, h;
        return (
          (t = { "!": eK().messages }),
          (r = e ? "!." + e : "!"),
          (i = (n = eK()).defaultTranslationValues),
          (o = n.formats),
          (a = n.getMessageFallback),
          (s = n.locale),
          (l = n.onError),
          (u = n.timeZone),
          (t = t["!"]),
          (r = eF(r, "!")),
          (c = (0, eL.useRef)({})),
          (h = (0, eL.useMemo)(
            function () {
              return eD({ messages: t, namespace: r, onError: l });
            },
            [t, r, l]
          )),
          (0, eL.useMemo)(
            function () {
              return eI({
                cachedFormatsByLocale: c.current,
                getMessageFallback: a,
                messagesOrError: h,
                defaultTranslationValues: i,
                namespace: r,
                onError: l,
                formats: o,
                locale: s,
                timeZone: u,
              });
            },
            [a, h, i, r, l, o, s, u]
          )
        );
      }
      function eY() {
        return eK().locale;
      }
      function eQ() {
        return new Date();
      }
      function eJ(e) {
        var t = null == e ? void 0 : e.updateInterval,
          r = eK().now,
          n = (0, eL.useState)(r || eQ()),
          i = n[0],
          o = n[1];
        return (
          (0, eL.useEffect)(
            function () {
              if (t) {
                var e = setInterval(function () {
                  o(eQ());
                }, t);
                return function () {
                  clearInterval(e);
                };
              }
            },
            [r, t]
          ),
          i
        );
      }
      function e0() {
        return eK().timeZone;
      }
      function e1() {
        return eK().messages;
      }
      function e2() {
        var e = eK(),
          t = e.formats,
          r = e.locale,
          n = e.now,
          i = e.onError,
          o = e.timeZone;
        return (0, eL.useMemo)(
          function () {
            return eG({
              formats: t,
              locale: r,
              now: n,
              onError: i,
              timeZone: o,
            });
          },
          [t, n, r, i, o]
        );
      }
      var e3 = !1;
      function e5() {
        var e = eK(),
          t = e.formats,
          r = e.locale,
          n = e.now,
          i = e.onError,
          o = e.timeZone;
        return (
          e3 ||
            ((e3 = !0),
            console.warn(
              "`useIntl()` is deprecated and will be removed in the next major version. Please switch to `useFormatter()`."
            )),
          (0, eL.useMemo)(
            function () {
              return ez({
                formats: t,
                locale: r,
                now: n,
                onError: i,
                timeZone: o,
              });
            },
            [t, n, r, i, o]
          )
        );
      }
    },
    9603: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    5654: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return o;
        },
      });
      var n = r(9603),
        i = r(1163);
      function o() {
        if (((i.O.current = !0), n.j)) {
          if (window.matchMedia) {
            let e = window.matchMedia("(prefers-reduced-motion)"),
              t = () => (i.n.current = e.matches);
            e.addListener(t), t();
          } else i.n.current = !1;
        }
      }
    },
    1163: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return i;
        },
        n: function () {
          return n;
        },
      });
      let n = { current: null },
        i = { current: !1 };
    },
    2533: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return a;
        },
      });
      var n = r(959),
        i = r(5654),
        o = r(1163);
      function a() {
        o.O.current || (0, i.A)();
        let [e] = (0, n.useState)(o.n.current);
        return e;
      }
    },
    2227: function (e, t, r) {
      "use strict";
      r.d(t, {
        aQ: function () {
          return y;
        },
        cn: function () {
          return b;
        },
        KO: function () {
          return x;
        },
        Dv: function () {
          return v;
        },
      });
      var n = r(959);
      let i = 0;
      new WeakMap();
      let o = Symbol(),
        a = (e) => !!e[o],
        s = (e) => !e[o].c,
        l = (e) => {
          var t;
          let { b: r, c: n } = e[o];
          n && (n(), null == (t = d.get(r)) || t());
        },
        u = (e, t) => {
          let r = e[o].o,
            n = t[o].o;
          return r === n || e === n || (a(r) && u(r, t));
        },
        c = (e, t) => {
          let r = { b: e, o: t, c: null },
            n = new Promise((e) => {
              (r.c = () => {
                (r.c = null), e();
              }),
                t.finally(r.c);
            });
          return (n[o] = r), n;
        },
        h = (e) => c(e[o].b, e[o].o),
        d = new WeakMap(),
        f = (e) => "init" in e,
        p = (e) => {
          let t, r;
          let n = new WeakMap(),
            i = new WeakMap(),
            o = new Map();
          if (((t = new Set()), (r = new Set()), e))
            for (let [t, r] of e) {
              let e = { v: r, r: 0, y: !0, d: new Map() };
              Object.freeze(e),
                f(t) ||
                  console.warn(
                    "Found initial value for derived atom which can cause unexpected behavior",
                    t
                  ),
                n.set(t, e);
            }
          let d = new WeakMap(),
            p = (e, t, r) => {
              let n = d.get(t);
              n || ((n = new Map()), d.set(t, n)),
                r.then(() => {
                  n.get(e) !== r || (n.delete(e), n.size || d.delete(t));
                }),
                n.set(e, r);
            },
            g = (e) => {
              let t = new Set(),
                r = d.get(e);
              return (
                r &&
                  (d.delete(e),
                  r.forEach((e, r) => {
                    l(e), t.add(r);
                  })),
                t
              );
            },
            m = new WeakMap(),
            y = (e) => {
              let t = m.get(e);
              return t || ((t = new Map()), m.set(e, t)), t;
            },
            b = (e, t) => {
              if (e) {
                let r = y(e),
                  n = r.get(t);
                return (
                  !n &&
                    ((n = b(e.p, t)) && "p" in n && s(n.p) && (n = void 0),
                    n && r.set(t, n)),
                  n
                );
              }
              return n.get(t);
            },
            v = (e, t, r) => {
              if ((Object.freeze(r), e)) {
                let n = y(e);
                n.set(t, r);
              } else {
                let e = n.get(t);
                n.set(t, r), o.has(t) || o.set(t, e);
              }
            },
            x = (e, t = new Map(), r) => {
              if (!r) return t;
              let n = new Map(),
                i = !1;
              return (r.forEach((r) => {
                var o;
                let a = (null == (o = b(e, r)) ? void 0 : o.r) || 0;
                n.set(r, a), t.get(r) !== a && (i = !0);
              }),
              t.size !== n.size || i)
                ? n
                : t;
            },
            w = (e, t, r, n, i) => {
              let o = b(e, t);
              if (o) {
                if (i && (!("p" in o) || !u(o.p, i))) return o;
                "p" in o && l(o.p);
              }
              let a = {
                  v: r,
                  r: (null == o ? void 0 : o.r) || 0,
                  y: !0,
                  d: x(e, null == o ? void 0 : o.d, n),
                },
                s = !(null == o ? void 0 : o.y);
              return (o && "v" in o && Object.is(o.v, r)
                ? a.d === o.d ||
                  (a.d.size === o.d.size &&
                    Array.from(a.d.keys()).every((e) => o.d.has(e))) ||
                  ((s = !0),
                  Promise.resolve().then(() => {
                    F(e);
                  }))
                : ((s = !0),
                  ++a.r,
                  a.d.has(t) && (a.d = new Map(a.d).set(t, a.r))),
              o && !s)
                ? o
                : (v(e, t, a), a);
            },
            C = (e, t, r, n, i) => {
              let o = b(e, t);
              if (o) {
                if (i && (!("p" in o) || !u(o.p, i))) return o;
                "p" in o && l(o.p);
              }
              let a = {
                e: r,
                r: ((null == o ? void 0 : o.r) || 0) + 1,
                y: !0,
                d: x(e, null == o ? void 0 : o.d, n),
              };
              return v(e, t, a), a;
            },
            k = (e, t, r, n) => {
              let i = b(e, t);
              if (i && "p" in i) {
                if (u(i.p, r) && !s(i.p)) return i.y ? i : { ...i, y: !0 };
                l(i.p);
              }
              p(e, t, r);
              let o = {
                p: r,
                r: ((null == i ? void 0 : i.r) || 0) + 1,
                y: !0,
                d: x(e, null == i ? void 0 : i.d, n),
              };
              return v(e, t, o), o;
            },
            E = (e, t, r, n) => {
              if (r instanceof Promise) {
                let i = c(
                  r,
                  r
                    .then((r) => {
                      w(e, t, r, n, i);
                    })
                    .catch((r) => {
                      if (r instanceof Promise)
                        return a(r)
                          ? r.then(() => {
                              S(e, t, !0);
                            })
                          : r;
                      C(e, t, r, n, i);
                    })
                );
                return k(e, t, i, n);
              }
              return w(e, t, r, n);
            },
            T = (e, t) => {
              let r = b(e, t);
              if (r) {
                let n = { ...r, y: !1 };
                v(e, t, n);
              } else
                console.warn("[Bug] could not invalidate non existing atom", t);
            },
            S = (e, t, r) => {
              if (!r) {
                let r = b(e, t);
                if (r) {
                  if (r.y && "p" in r && !s(r.p)) return r;
                  if (
                    (r.d.forEach((r, n) => {
                      if (n !== t) {
                        if (i.has(n)) {
                          let t = b(e, n);
                          t && !t.y && S(e, n);
                        } else S(e, n);
                      }
                    }),
                    Array.from(r.d).every(([t, r]) => {
                      let n = b(e, t);
                      return n && !("p" in n) && n.r === r;
                    }))
                  )
                    return r.y ? r : { ...r, y: !0 };
                }
              }
              let n = new Set();
              try {
                let r = t.read((r) => {
                  n.add(r);
                  let i = r === t ? b(e, r) : S(e, r);
                  if (i) {
                    if ("e" in i) throw i.e;
                    if ("p" in i) throw i.p;
                    return i.v;
                  }
                  if (f(r)) return r.init;
                  throw Error("no atom init");
                });
                return E(e, t, r, n);
              } catch (r) {
                if (r instanceof Promise) {
                  let i = a(r) && s(r) ? h(r) : c(r, r);
                  return k(e, t, i, n);
                }
                return C(e, t, r, n);
              }
            },
            P = (e, t) => {
              let r = S(t, e);
              return r;
            },
            A = (e, t) => {
              let r = i.get(t);
              return r || (r = B(e, t)), r;
            },
            N = (e, t) =>
              !t.l.size && (!t.t.size || (1 === t.t.size && t.t.has(e))),
            j = (e, t) => {
              let r = i.get(t);
              r && N(t, r) && D(e, t);
            },
            R = (e, t) => {
              let r = i.get(t);
              null == r ||
                r.t.forEach((r) => {
                  r !== t && (T(e, r), R(e, r));
                });
            },
            L = (e, t, r) => {
              let n = !0,
                i = (t, r) => {
                  let n = S(e, t);
                  if ("e" in n) throw n.e;
                  if ("p" in n) {
                    if (null == r ? void 0 : r.unstable_promise)
                      return n.p.then(() => {
                        let o = b(e, t);
                        return o && "p" in o && o.p === n.p
                          ? new Promise((e) => setTimeout(e)).then(() =>
                              i(t, r)
                            )
                          : i(t, r);
                      });
                    throw (
                      (console.info(
                        "Reading pending atom state in write operation. We throw a promise for now.",
                        t
                      ),
                      n.p)
                    );
                  }
                  if ("v" in n) return n.v;
                  throw (
                    (console.warn(
                      "[Bug] no value found while reading atom in write operation. This is probably a bug.",
                      t
                    ),
                    Error("no value found"))
                  );
                },
                o = (r, i) => {
                  let o;
                  if (r === t) {
                    if (!f(r)) throw Error("atom not writable");
                    let t = g(r);
                    t.forEach((t) => {
                      t !== e && E(t, r, i);
                    });
                    let n = b(e, r),
                      o = E(e, r, i);
                    n !== o && R(e, r);
                  } else o = L(e, r, i);
                  return n || F(e), o;
                },
                a = t.write(i, o, r);
              return (n = !1), a;
            },
            M = (e, t, r) => {
              let n = L(r, e, t);
              return F(r), n;
            },
            O = (e) => !!e.write,
            B = (e, t, n) => {
              let o = { t: new Set(n && [n]), l: new Set() };
              i.set(t, o), r.add(t);
              let a = S(void 0, t);
              if (
                (a.d.forEach((r, n) => {
                  let o = i.get(n);
                  o ? o.t.add(t) : n !== t && B(e, n, t);
                }),
                O(t) && t.onMount)
              ) {
                let r = (r) => M(t, r, e),
                  n = t.onMount(r);
                (e = void 0), n && (o.u = n);
              }
              return o;
            },
            D = (e, t) => {
              var n;
              let o = null == (n = i.get(t)) ? void 0 : n.u;
              o && o(), i.delete(t), r.delete(t);
              let a = b(e, t);
              a
                ? ("p" in a && l(a.p),
                  a.d.forEach((r, n) => {
                    if (n !== t) {
                      let r = i.get(n);
                      r && (r.t.delete(t), N(n, r) && D(e, n));
                    }
                  }))
                : console.warn("[Bug] could not find atom state to unmount", t);
            },
            I = (e, t, r, n) => {
              let o = new Set(r.d.keys());
              null == n ||
                n.forEach((r, n) => {
                  if (o.has(n)) {
                    o.delete(n);
                    return;
                  }
                  let a = i.get(n);
                  a && (a.t.delete(t), N(n, a) && D(e, n));
                }),
                o.forEach((r) => {
                  let n = i.get(r);
                  n ? n.t.add(t) : i.has(t) && B(e, r, t);
                });
            },
            F = (e) => {
              if (e) {
                let t = y(e);
                t.forEach((t, r) => {
                  let o = n.get(r);
                  if (t !== o) {
                    let t = i.get(r);
                    null == t || t.l.forEach((t) => t(e));
                  }
                });
                return;
              }
              for (; o.size; ) {
                let e = Array.from(o);
                o.clear(),
                  e.forEach(([e, t]) => {
                    let r = b(void 0, e);
                    if (
                      (r &&
                        r.d !== (null == t ? void 0 : t.d) &&
                        I(void 0, e, r, null == t ? void 0 : t.d),
                      t && !t.y && (null == r ? void 0 : r.y))
                    )
                      return;
                    let n = i.get(e);
                    null == n || n.l.forEach((e) => e());
                  });
              }
              t.forEach((e) => e());
            },
            _ = (e) => {
              let t = y(e);
              t.forEach((t, r) => {
                let i = n.get(r);
                (!i ||
                  t.r > i.r ||
                  t.y !== i.y ||
                  (t.r === i.r && t.d !== i.d)) &&
                  (n.set(r, t),
                  t.d !== (null == i ? void 0 : i.d) &&
                    I(e, r, t, null == i ? void 0 : i.d));
              });
            },
            H = (e, t) => {
              t && _(t), F(void 0);
            },
            U = (e, t, r) => {
              let n = A(r, e),
                i = n.l;
              return (
                i.add(t),
                () => {
                  i.delete(t), j(r, e);
                }
              );
            },
            V = (e, t) => {
              for (let [r, n] of e) f(r) && (E(t, r, n), R(t, r));
              F(t);
            };
          return {
            r: P,
            w: M,
            c: H,
            s: U,
            h: V,
            n: (e) => (
              t.add(e),
              () => {
                t.delete(e);
              }
            ),
            l: () => r.values(),
            a: (e) => n.get(e),
            m: (e) => i.get(e),
          };
        },
        g = (e, t) => {
          let r = t ? t(e).SECRET_INTERNAL_store : p(e);
          return { s: r };
        },
        m = new Map(),
        y = (e) => (m.has(e) || m.set(e, (0, n.createContext)(g())), m.get(e));
      function b(e, t) {
        return (function (e, t) {
          let r = `atom${++i}`,
            n = { toString: () => r };
          return (
            "function" == typeof e
              ? (n.read = e)
              : ((n.init = e),
                (n.read = (e) => e(n)),
                (n.write = (e, t, r) =>
                  t(n, "function" == typeof r ? r(e(n)) : r))),
            t && (n.write = t),
            n
          );
        })(e, t);
      }
      function v(e, t) {
        let r = y(t),
          i = (0, n.useContext)(r),
          { s: o, v: a } = i,
          s = (t) => {
            let r = o.r(e, t);
            if (!r.y) throw Error("should not be invalidated");
            if ("e" in r) throw r.e;
            if ("p" in r) throw r.p;
            if ("v" in r) return r.v;
            throw Error("no atom value");
          },
          [[l, u, c], h] = (0, n.useReducer)(
            (t, r) => {
              let n = s(r);
              return Object.is(t[1], n) && t[2] === e ? t : [r, n, e];
            },
            a,
            (t) => {
              let r = s(t);
              return [t, r, e];
            }
          ),
          d = u;
        return (
          c !== e && (h(l), (d = s(l))),
          (0, n.useEffect)(() => {
            let { v: t } = i;
            t && o.c(e, t);
            let r = o.s(e, h, t);
            return h(t), r;
          }, [o, e, i]),
          (0, n.useEffect)(() => {
            o.c(e, l);
          }),
          (0, n.useDebugValue)(d),
          d
        );
      }
      function x(e, t) {
        return (
          "scope" in e &&
            (console.warn(
              "atom.scope is deprecated. Please do useAtom(atom, scope) instead."
            ),
            (t = e.scope)),
          [
            v(e, t),
            (function (e, t) {
              let r = y(t),
                { s: i, w: o } = (0, n.useContext)(r),
                a = (0, n.useCallback)(
                  (t) => {
                    if (!("write" in e)) throw Error("not writable atom");
                    let r = (r) => i.w(e, t, r);
                    return o ? o(r) : r();
                  },
                  [i, o, e]
                );
              return a;
            })(e, t),
          ]
        );
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(9458), t(6313);
    }),
      (_N_E = e.O());
  },
]);
