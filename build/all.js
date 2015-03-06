(function(e, t) {
  var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function(e, t) {
    return new b.fn.init(e, t, r);
  }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function(e, t) {
    return t.toUpperCase();
  }, H = function(e) {
    (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready());
  }, q = function() {
    o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)): (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H));
  };
  b.fn = b.prototype = {
    jquery: p,
    constructor: b,
    init: function(e, n, r) {
      var i, a;
      if (!e) return this;
      if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null]: N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e): this.constructor(n).find(e);
        if (i[1]) {
          if (n = n instanceof b ? n[0]: n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]): this.attr(i, n[i]);
          return this;
        }
        if (a = o.getElementById(i[2]), a && a.parentNode) {
          if (a.id !== i[2]) return r.find(e);
          this.length = 1, this[0] = a;
        }
        return this.context = o, this.selector = e, this;
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this): b.isFunction(e) ? r.ready(e): (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this));
    },
    selector: "",
    length: 0,
    size: function() {
      return this.length;
    },
    toArray: function() {
      return h.call(this);
    },
    get: function(e) {
      return null == e ? this.toArray(): 0 > e ? this[this.length + e]: this[e];
    },
    pushStack: function(e) {
      var t = b.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function(e, t) {
      return b.each(this, e, t);
    },
    ready: function(e) {
      return b.ready.promise().done(e), this;
    },
    slice: function() {
      return this.pushStack(h.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(- 1);
    },
    eq: function(e) {
      var t = this.length, n = + e + (0 > e ? t: 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]]: []);
    },
    map: function(e) {
      return this.pushStack(b.map(this, function(t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function() {
      return this.prevObject || this.constructor(null);
    },
    push: d,
    sort: [].sort,
    splice: [].splice
  }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
    var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
    for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e: []): a = e && b.isPlainObject(e) ? e: {}, s[i] = b.extend(c, a, r)): r !== t && (s[i] = r));
    return s;
  }, b.extend({
    noConflict: function(t) {
      return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? b.readyWait++: b.ready(!0);
    },
    ready: function(e) {
      if (e === !0 ? !--b.readyWait: !b.isReady) {
        if (!o.body) return setTimeout(b.ready);
        b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"));
      }
    },
    isFunction: function(e) {
      return "function" === b.type(e);
    },
    isArray: Array.isArray || function(e) {
      return "array" === b.type(e);
    },
    isWindow: function(e) {
      return null != e && e == e.window;
    },
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function(e) {
      return null == e ? e + "": "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object": typeof e;
    },
    isPlainObject: function(e) {
      if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
      try {
        if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }
      var r;
      for (r in e);
      return r === t || y.call(e, r);
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    error: function(e) {
      throw Error(e);
    },
    parseHTML: function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || o;
      var r = C.exec(e), i = !n && [];
      return r ? [t.createElement(r[1])]: (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes));
    },
    parseJSON: function(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n): null === n ? n: "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)(): (b.error("Invalid JSON: " + n), t);
    },
    parseXML: function(n) {
      var r, i;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")): (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (o) {
        r = t;
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r;
    },
    noop: function() {},
    globalEval: function(t) {
      t && b.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function(e) {
      return e.replace(j, "ms-").replace(D, L);
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function(e, t, n) {
      var r, i = 0, o = e.length, a = M(e);
      if (n) {
        if (a) {
          for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break;
        } else for (i in e) if (r = t.apply(e[i], n), r === !1) break;
      } else if (a) {
        for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break;
      } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
      return e;
    },
    trim: v && !v.call("\ufeff\u00a0") ? function(e) {
      return null == e ? "": v.call(e);
    }: function(e) {
      return null == e ? "": (e + "").replace(T, "");
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e]: e): d.call(n, e)), n;
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (g) return g.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n): n: 0; r > n; n++) if (n in t && t[n] === e) return n;
      }
      return - 1;
    },
    merge: function(e, n) {
      var r = n.length, i = e.length, o = 0;
      if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++];
      return e.length = i, e;
    },
    grep: function(e, t, n) {
      var r, i = [], o = 0, a = e.length;
      for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i;
    },
    map: function(e, t, n) {
      var r, i = 0, o = e.length, a = M(e), s = [];
      if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
      return f.apply([], s);
    },
    guid: 1,
    proxy: function(e, n) {
      var r, i, o;
      return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
        return e.apply(n || this, r.concat(h.call(arguments)));
      }, i.guid = e.guid = e.guid || b.guid++, i): t;
    },
    access: function(e, n, r, i, o, a, s) {
      var u = 0, l = e.length, c = null == r;
      if ("object" === b.type(r)) {
        o = !0;
        for (u in r) b.access(e, n, u, r[u], !0, a, s);
      } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null): (c = n, n = function(e, t, n) {
        return c.call(b(e), n);
      })), n)) for (; l > u; u++) n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)));
      return o ? e: c ? n.call(e): l ? n(e[0], r): a;
    },
    now: function() {
      return (new Date).getTime();
    }
  }), b.ready.promise = function(t) {
    if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1); else {
      o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
      var r = !1;
      try {
        r = null == e.frameElement && o.documentElement;
      } catch (i) {}
      r && r.doScroll && function a() {
        if (!b.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(a, 50);
          }
          q(), b.ready();
        }
      }();
    }
    return n.promise(t);
  }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });
  function M(e) {
    var t = e.length, n = b.type(e);
    return b.isWindow(e) ? !1: 1 === e.nodeType && t ? !0: "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  r = b(o);
  var _ = {};
  function F(e) {
    var t = _[e] = {};
    return b.each(e.match(w) || [], function(e, n) {
      t[n] = !0;
    }), t;
  }
  b.Callbacks = function(e) {
    e = "string" == typeof e ? _[e] || F(e): b.extend({}, e);
    var n, r, i, o, a, s, u = [], l = !e.once && [], c = function(t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        r = !1;
        break;
      }
      n = !1, u && (l ? l.length && c(l.shift()): r ? u = []: p.disable());
    }, p = {
      add: function() {
        if (u) {
          var t = u.length;
          (function i(t) {
            b.each(t, function(t, n) {
              var r = b.type(n);
              "function" === r ? e.unique && p.has(n) || u.push(n): n && n.length && "string" !== r && i(n);
            });
          })(arguments), n ? o = u.length: r && (s = t, c(r));
        }
        return this;
      },
      remove: function() {
        return u && b.each(arguments, function(e, t) {
          var r;
          while ((r = b.inArray(t, u, r)) > - 1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--);
        }), this;
      },
      has: function(e) {
        return e ? b.inArray(e, u) > - 1: !(!u || !u.length);
      },
      empty: function() {
        return u = [], this;
      },
      disable: function() {
        return u = l = r = t, this;
      },
      disabled: function() {
        return !u;
      },
      lock: function() {
        return l = t, r || p.disable(), this;
      },
      locked: function() {
        return !l;
      },
      fireWith: function(e, t) {
        return t = t || [], t = [e, t.slice ? t.slice(): t], !u || i && !l || (n ? l.push(t): c(t)), this;
      },
      fire: function() {
        return p.fireWith(this, arguments), this;
      },
      fired: function() {
        return !!i;
      }
    };
    return p;
  }, b.extend({
    Deferred: function(e) {
      var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], n = "pending", r = {
        state: function() {
          return n;
        },
        always: function() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function() {
          var e = arguments;
          return b.Deferred(function(n) {
            b.each(t, function(t, o) {
              var a = o[0], s = b.isFunction(e[t]) && e[t];
              i[o[1]](function() {
                var e = s && s.apply(this, arguments);
                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify): n[a + "With"](this === r ? n.promise(): this, s ? [e]: arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function(e) {
          return null != e ? b.extend(e, r): r;
        }
      }, i = {};
      return r.pipe = r.then, b.each(t, function(e, o) {
        var a = o[2], s = o[3];
        r[o[1]] = a.add, s && a.add(function() {
          n = s;
        }, t[1^e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r: this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function(e) {
      var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r: 0, o = 1 === i ? e: b.Deferred(), a = function(e, t, n) {
        return function(r) {
          t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments): r, n === s ? o.notifyWith(t, n): --i || o.resolveWith(t, n);
        };
      }, s, u, l;
      if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)): --i;
      return i || o.resolveWith(l, n), o.promise();
    }
  }), b.support = function() {
    var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
    if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
    s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
      getSetAttribute: "t" !== d.className,
      leadingWhitespace: 3 === d.firstChild.nodeType,
      tbody: !d.getElementsByTagName("tbody").length,
      htmlSerialize: !!d.getElementsByTagName("link").length,
      style: /top/.test(r.getAttribute("style")),
      hrefNormalized: "/a" === r.getAttribute("href"),
      opacity: /^0.5/.test(r.style.opacity),
      cssFloat: !!r.style.cssFloat,
      checkOn: !!a.value,
      optSelected: l.selected,
      enctype: !!o.createElement("form").enctype,
      html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
      boxModel: "CSS1Compat" === o.compatMode,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }
    a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());
    for (f in {
      submit: !0,
      change: !0,
      focusin: !0
    }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
    return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
      var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0];
      u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null);
    }), n = s = u = l = r = a = null, t;
  }();
  var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g;
  function P(e, n, r, i) {
    if (b.acceptData(e)) {
      var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache: e, f = l ? e[s]: e[s] && s;
      if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++: f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n): p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])): a = o, a;
    }
  }
  function R(e, t, n) {
    if (b.acceptData(e)) {
      var r, i, o, a = e.nodeType, s = a ? b.cache: e, u = a ? e[b.expando]: b.expando;
      if (s[u]) {
        if (t && (o = n ? s[u]: s[u].data)) {
          b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)): t in o ? t = [t]: (t = b.camelCase(t), t = t in o ? [t]: t.split(" "));
          for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
          if (!(n ? $: b.isEmptyObject)(o)) return;
        }
        (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0): b.support.deleteExpando || s != s.window ? delete s[u]: s[u] = null);
      }
    }
  }
  b.extend({
    cache: {},
    expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function(e) {
      return e = e.nodeType ? b.cache[e[b.expando]]: e[b.expando], !!e && !$(e);
    },
    data: function(e, t, n) {
      return P(e, t, n);
    },
    removeData: function(e, t) {
      return R(e, t);
    },
    _data: function(e, t, n) {
      return P(e, t, n, !0);
    },
    _removeData: function(e, t) {
      return R(e, t, !0);
    },
    acceptData: function(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), b.fn.extend({
    data: function(e, n) {
      var r, i, o = this[0], a = 0, s = null;
      if (e === t) {
        if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
          for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
          b._data(o, "parsedAttrs", !0);
        }
        return s;
      }
      return "object" == typeof e ? this.each(function() {
        b.data(this, e);
      }): b.access(this, function(n) {
        return n === t ? o ? W(o, e, b.data(o, e)): null: (this.each(function() {
          b.data(this, e, n);
        }), t);
      }, null, n, arguments.length > 1, null, !0);
    },
    removeData: function(e) {
      return this.each(function() {
        b.removeData(this, e);
      });
    }
  });
  function W(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(B, "-$1").toLowerCase();
      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0: "false" === r ? !1: "null" === r ? null: + r + "" === r ? + r: O.test(r) ? b.parseJSON(r): r;
        } catch (o) {}
        b.data(e, n, r);
      } else r = t;
    }
    return r;
  }
  function $(e) {
    var t;
    for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  b.extend({
    queue: function(e, n, r) {
      var i;
      return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)): i.push(r)), i || []): t;
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function() {
        b.dequeue(e, t);
      };
      "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return b._data(e, n) || b._data(e, n, {empty: b.Callbacks("once memory").add(function() {
          b._removeData(e, t + "queue"), b._removeData(e, n);
        })});
    }
  }), b.fn.extend({
    queue: function(e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e): n === t ? this: this.each(function() {
        var t = b.queue(this, e, n);
        b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e);
      });
    },
    dequeue: function(e) {
      return this.each(function() {
        b.dequeue(this, e);
      });
    },
    delay: function(e, t) {
      return e = b.fx ? b.fx.speeds[e] || e: e, t = t || "fx", this.queue(t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", []);
    },
    promise: function(e, n) {
      var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function() {
        --i || o.resolveWith(a, [a]);
      };
      "string" != typeof e && (n = e, e = t), e = e || "fx";
      while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
      return u(), o.promise(n);
    }
  });
  var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
  b.fn.extend({
    attr: function(e, t) {
      return b.access(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        b.removeAttr(this, e);
      });
    },
    prop: function(e, t) {
      return b.access(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return e = b.propFix[e] || e, this.each(function() {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    },
    addClass: function(e) {
      var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
      if (b.isFunction(e)) return this.each(function(t) {
        b(this).addClass(e.call(this, t, this.className));
      });
      if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " "): " ")) {
        o = 0;
        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
        n.className = b.trim(r);
      }
      return this;
    },
    removeClass: function(e) {
      var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
      if (b.isFunction(e)) return this.each(function(t) {
        b(this).removeClass(e.call(this, t, this.className));
      });
      if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " "): "")) {
        o = 0;
        while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
        n.className = e ? b.trim(r): "";
      }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e, r = "boolean" == typeof t;
      return b.isFunction(e) ? this.each(function(n) {
        b(this).toggleClass(e.call(this, n, this.className, t), t);
      }): this.each(function() {
        if ("string" === n) {
          var o, a = 0, s = b(this), u = t, l = e.match(w) || [];
          while (o = l[a++]) u = r ? u: !s.hasClass(o), s[u ? "addClass": "removeClass"](o);
        } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": b._data(this, "__className__") || "");
      });
    },
    hasClass: function(e) {
      var t = " " + e + " ", n = 0, r = this.length;
      for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
      return !1;
    },
    val: function(e) {
      var n, r, i, o = this[0];
      {
        if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
          var o, a = b(this);
          1 === this.nodeType && (o = i ? e.call(this, n, a.val()): e, null == o ? o = "": "number" == typeof o ? o += "": b.isArray(o) && (o = b.map(o, function(e) {
            return null == e ? "": e + "";
          })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o));
        });
        if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(U, ""): null == n ? "": n);
      }
    }
  }), b.extend({
    valHooks: {
      option: {get: function(e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value: e.text;
        }},
      select: {
        get: function(e) {
          var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null: [], s = o ? i + 1: r.length, u = 0 > i ? s: o ? i: 0;
          for (; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
            if (t = b(n).val(), o) return t;
            a.push(t);
          }
          return a;
        },
        set: function(e, t) {
          var n = b.makeArray(t);
          return b(e).find("option").each(function() {
            this.selected = b.inArray(b(this).val(), n) >= 0;
          }), n.length || (e.selectedIndex = - 1), n;
        }
      }
    },
    attr: function(e, n, r) {
      var o, a, s, u = e.nodeType;
      if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r): (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z: I)), r === t ? o && a && "get"in o && null !== (s = o.get(e, n)) ? s: (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t: s): null !== r ? o && a && "set"in o && (s = o.set(e, r, n)) !== t ? s: (e.setAttribute(n, r + ""), r): (b.removeAttr(e, n), t));
    },
    removeAttr: function(e, t) {
      var n, r, i = 0, o = t && t.match(w);
      if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1: e[r] = !1: b.attr(e, n, ""), e.removeAttribute(Q ? n: r);
    },
    attrHooks: {type: {set: function(e, t) {
          if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }}},
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function(e, n, r) {
      var i, o, a, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get"in o && null !== (i = o.get(e, n)) ? i: e[n];
    },
    propHooks: {tabIndex: {get: function(e) {
          var n = e.getAttributeNode("tabindex");
          return n && n.specified ? parseInt(n.value, 10): V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0: t;
        }}}
  }), z = {
    get: function(e, n) {
      var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? K && Q ? null != i: G.test(n) ? e[b.camelCase("default-" + n)]: !!i: e.getAttributeNode(n);
      return o && o.value !== !1 ? n.toLowerCase(): t;
    },
    set: function(e, t, n) {
      return t === !1 ? b.removeAttr(e, n): K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n): e[b.camelCase("default-" + n)] = e[n] = !0, n;
    }
  }, K && Q || (b.attrHooks.value = {
    get: function(e, n) {
      var r = e.getAttributeNode(n);
      return b.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t;
    },
    set: function(e, n, r) {
      return b.nodeName(e, "input") ? (e.defaultValue = n, t): I && I.set(e, n, r);
    }
  }), Q || (I = b.valHooks.button = {
    get: function(e, n) {
      var r = e.getAttributeNode(n);
      return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t;
    },
    set: function(e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n: t;
    }
  }, b.attrHooks.contenteditable = {
    get: I.get,
    set: function(e, t, n) {
      I.set(e, "" === t ? !1: t, n);
    }
  }, b.each(["width", "height"], function(e, n) {
    b.attrHooks[n] = b.extend(b.attrHooks[n], {set: function(e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r): t;
      }});
  })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
    b.attrHooks[n] = b.extend(b.attrHooks[n], {get: function(e) {
        var r = e.getAttribute(n, 2);
        return null == r ? t: r;
      }});
  }), b.each(["href", "src"], function(e, t) {
    b.propHooks[t] = {get: function(e) {
        return e.getAttribute(t, 4);
      }};
  })), b.support.style || (b.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || t;
    },
    set: function(e, t) {
      return e.style.cssText = t + "";
    }
  }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }})), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
    b.valHooks[this] = {get: function(e) {
        return null === e.getAttribute("value") ? "on": e.value;
      }};
  }), b.each(["radio", "checkbox"], function() {
    b.valHooks[this] = b.extend(b.valHooks[this], {set: function(e, n) {
        return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0: t;
      }});
  });
  var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
  function it() {
    return !0;
  }
  function ot() {
    return !1;
  }
  b.event = {
    global: {},
    add: function(e, n, r, o, a) {
      var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
          return typeof b === i || e && b.event.triggered === e.type ? t: b.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
        while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType: p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
          type: g,
          origType: y,
          data: o,
          handler: r,
          guid: r.guid,
          selector: a,
          needsContext: a && b.expr.match.needsContext.test(a),
          namespace: m.join(".")
        }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1): e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d): h.push(d), b.event.global[g] = !0;
        e = null;
      }
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
      if (m && (c = m.events)) {
        t = (t || "").match(w) || [""], l = t.length;
        while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
          p = b.event.special[d] || {}, d = (r ? p.delegateType: p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
          while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
          u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d]);
        } else for (d in c) b.event.remove(e, d + t[l], n, r, !0);
        b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"));
      }
    },
    trigger: function(n, r, i, a) {
      var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type: n, m = y.call(n, "namespace") ? n.namespace.split("."): [];
      if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n: new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"): null, n.result = t, n.target || (n.target = i), r = null == r ? [n]: b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!a && !p.noBubble && !b.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
          f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e);
        }
        d = 0;
        while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c: p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
        if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
          f = i[u], f && (i[u] = null), b.event.triggered = g;
          try {
            i[g]();
          } catch (v) {}
          b.event.triggered = t, f && (i[u] = f);
        }
        return n.result;
      }
    },
    dispatch: function(e) {
      e = b.event.fix(e);
      var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {};
      if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = b.event.handlers.call(this, e, l), n = 0;
        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;
          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, n) {
      var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
      if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
        for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0: b.find(r, this, null, [l]).length), o[r] && o.push(i);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return n.length > u && s.push({
        elem: this,
        handlers: n.slice(u)
      }), s;
    },
    fix: function(e) {
      if (e[b.expando]) return e;
      var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks: et.test(i) ? this.keyHooks: {}), r = s.props ? this.props.concat(s.props): this.props, e = new b.Event(a), t = r.length;
      while (t--) n = r[t], e[n] = a[n];
      return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a): e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, n) {
        var r, i, a, s = n.button, u = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement: u), e.which || s === t || (e.which = 1 & s ? 1: 2 & s ? 3: 4 & s ? 2: 0), e;
      }
    },
    special: {
      load: {noBubble: !0},
      click: {trigger: function() {
          return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1): t;
        }},
      focus: {
        trigger: function() {
          if (this !== o.activeElement && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === o.activeElement && this.blur ? (this.blur(), !1): t;
        },
        delegateType: "focusout"
      },
      beforeunload: {postDispatch: function(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        }}
    },
    simulate: function(e, t, n, r) {
      var i = b.extend(new b.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? b.event.trigger(i, null, t): b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, b.removeEvent = o.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }: function(e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
  }, b.Event = function(e, n) {
    return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it: ot): this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t): new b.Event(e, n);
  }, b.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault(): e.returnValue = !1);
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    }
  }, b.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    b.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), b.support.submitBubbles || (b.event.special.submit = {
    setup: function() {
      return b.nodeName(this, "form") ? !1: (b.event.add(this, "click._submit keypress._submit", function(e) {
        var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form: t;
        r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
          e._submit_bubble = !0;
        }), b._data(r, "submitBubbles", !0));
      }), t);
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function() {
      return b.nodeName(this, "form") ? !1: (b.event.remove(this, "._submit"), t);
    }
  }), b.support.changeBubbles || (b.event.special.change = {
    setup: function() {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
      }), b.event.add(this, "click._change", function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0);
      })), !1): (b.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0);
        }), b._data(t, "changeBubbles", !0));
      }), t);
    },
    handle: function(e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments): t;
    },
    teardown: function() {
      return b.event.remove(this, "._change"), !Z.test(this.nodeName);
    }
  }), b.support.focusinBubbles || b.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = 0, r = function(e) {
      b.event.simulate(t, e.target, b.event.fix(e), !0);
    };
    b.event.special[t] = {
      setup: function() {
        0 === n++ && o.addEventListener(e, r, !0);
      },
      teardown: function() {
        0 === --n && o.removeEventListener(e, r, !0);
      }
    };
  }), b.fn.extend({
    on: function(e, n, r, i, o) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);
        for (a in e) this.on(a, n, r, e[a], o);
        return this;
      }
      if (null == r && null == i ? (i = n, r = n = t): null == i && ("string" == typeof n ? (i = r, r = t): (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this;
      return 1 === o && (s = i, i = function(e) {
        return b().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
        b.event.add(this, e, i, r, n);
      });
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function(e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);
        return this;
      }
      return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
        b.event.remove(this, e, r, n);
      });
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function(e, t) {
      return this.off(e, null, t);
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**"): this.off(t, e || "**", n);
    },
    trigger: function(e, t) {
      return this.each(function() {
        b.event.trigger(e, t, this);
      });
    },
    triggerHandler: function(e, n) {
      var r = this[0];
      return r ? b.event.trigger(e, n, r, !0): t;
    }
  }), function(e, t) {
    var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + - new Date, w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function(e) {
      var t = 0, n = this.length;
      for (; n > t; t++) if (this[t] === e) return t;
      return - 1;
    }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
      ID: RegExp("^#(" + F + ")"),
      CLASS: RegExp("^\\.(" + F + ")"),
      NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
      TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
      ATTR: RegExp("^" + P),
      PSEUDO: RegExp("^" + R),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
      needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
    }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
      var n = "0x" + t - 65536;
      return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536): String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
    };
    try {
      q.call(w.documentElement.childNodes, 0)[0].nodeType;
    } catch (nt) {
      q = function(e) {
        var t, n = [];
        while (t = this[e++]) n.push(t);
        return n;
      };
    }
    function rt(e) {
      return Y.test(e + "");
    }
    function it() {
      var e, t = [];
      return e = function(n, r) {
        return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r;
      };
    }
    function ot(e) {
      return e[x] = !0, e;
    }
    function at(e) {
      var t = p.createElement("div");
      try {
        return e(t);
      } catch (n) {
        return !1;
      } finally {
        t = null;
      }
    }
    function st(e, t, n, r) {
      var i, o, a, s, u, l, f, g, m, v;
      if ((t ? t.ownerDocument || t: w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (!d && !r) {
        if (i = J.exec(e)) if (a = i[1]) {
          if (9 === s) {
            if (o = t.getElementById(a), !o || !o.parentNode) return n;
            if (o.id === a) return n.push(o), n;
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n;
        } else {
          if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
          if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n;
        }
        if (T.qsa && !h.test(e)) {
          if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&"): t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
            while (u--) l[u] = g + dt(l[u]);
            m = V.test(e) && t.parentNode || t, v = l.join(",");
          }
          if (v) try {
            return H.apply(n, q.call(m.querySelectorAll(v), 0)), n;
          } catch (b) {} finally {
            f || t.removeAttribute("id");
          }
        }
      }
      return wt(e.replace(W, "$1"), t, n, r);
    }
    a = st.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName: !1;
    }, c = st.setDocument = function(e) {
      var n = e ? e.ownerDocument || e: w;
      return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), T.attributes = at(function(e) {
        e.innerHTML = "<select></select>";
        var t = typeof e.lastChild.getAttribute("multiple");
        return "boolean" !== t && "string" !== t;
      }), T.getByClassName = at(function(e) {
        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length): !1;
      }), T.getByName = at(function(e) {
        e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
        var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
        return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t;
      }), i.attrHandle = at(function(e) {
        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href");
      }) ? {}: {
        href: function(e) {
          return e.getAttribute("href", 2);
        },
        type: function(e) {
          return e.getAttribute("type");
        }
      }, T.getIdNotName ? (i.find.ID = function(e, t) {
        if (typeof t.getElementById !== A && !d) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n]: [];
        }
      }, i.filter.ID = function(e) {
        var t = e.replace(et, tt);
        return function(e) {
          return e.getAttribute("id") === t;
        };
      }): (i.find.ID = function(e, n) {
        if (typeof n.getElementById !== A && !d) {
          var r = n.getElementById(e);
          return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r]: t: [];
        }
      }, i.filter.ID = function(e) {
        var t = e.replace(et, tt);
        return function(e) {
          var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), i.find.TAG = T.tagNameNoComments ? function(e, n) {
        return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e): t;
      }: function(e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, i.find.NAME = T.getByName && function(e, n) {
        return typeof n.getElementsByName !== A ? n.getElementsByName(name): t;
      }, i.find.CLASS = T.getByClassName && function(e, n) {
        return typeof n.getElementsByClassName === A || d ? t: n.getElementsByClassName(e);
      }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked");
      }), at(function(e) {
        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:");
      })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
        T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R);
      }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement: e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r): e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      }: function(e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, v = f.compareDocumentPosition ? function(e, t) {
        var r;
        return e === t ? (u = !0, 0): (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? - 1: t === n || y(w, t) ? 1: 0: 4 & r ? - 1: 1: e.compareDocumentPosition ? - 1: 1;
      }: function(e, t) {
        var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
        if (e === t) return u = !0, 0;
        if (!o || !a) return e === n ? - 1: t === n ? 1: o ? - 1: a ? 1: 0;
        if (o === a) return ut(e, t);
        r = e;
        while (r = r.parentNode) s.unshift(r);
        r = t;
        while (r = r.parentNode) l.unshift(r);
        while (s[i] === l[i]) i++;
        return i ? ut(s[i], l[i]): s[i] === w ? - 1: l[i] === w ? 1: 0;
      }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p): p;
    }, st.matches = function(e, t) {
      return st(e, null, null, t);
    }, st.matchesSelector = function(e, t) {
      if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
        var n = m.call(e, t);
        if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (r) {}
      return st(t, p, null, [e]).length > 0;
    }, st.contains = function(e, t) {
      return (e.ownerDocument || e) !== p && c(e), y(e, t);
    }, st.attr = function(e, t) {
      var n;
      return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e): d || T.attributes ? e.getAttribute(t): ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null;
    }, st.error = function(e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, st.uniqueSort = function(e) {
      var t, n = [], r = 1, i = 0;
      if (u = !T.detectDuplicates, e.sort(v), u) {
        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
        while (i--) e.splice(n[i], 1);
      }
      return e;
    };
    function ut(e, t) {
      var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return - 1;
      return e ? 1: - 1;
    }
    function lt(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    function ct(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function pt(e) {
      return ot(function(t) {
        return t = + t, ot(function(n, r) {
          var i, o = e([], n.length, t), a = o.length;
          while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    o = st.getText = function(e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) n += o(t);
      return n;
    }, i = st.selectors = {
      cacheLength: 50,
      createPseudo: ot,
      match: U,
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = + (e[4] ? e[5] + (e[6] || 1): 2 * ("even" === e[3] || "odd" === e[3])), e[5] = + (e[7] + e[8] || "odd" === e[3])): e[3] && st.error(e[0]), e;
        },
        PSEUDO: function(e) {
          var t, n = !e[5] && e[2];
          return U.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4]: n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          return "*" === e ? function() {
            return !0;
          }: (e = e.replace(et, tt).toLowerCase(), function(t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          });
        },
        CLASS: function(e) {
          var t = k[e + " "];
          return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "");
          });
        },
        ATTR: function(e, t, n) {
          return function(r) {
            var i = st.attr(r, e);
            return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n): "*=" === t ? n && i.indexOf(n) > - 1: "$=" === t ? n && i.slice(- n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > - 1: "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-": !1): !0;
          };
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(- 4), s = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode;
          }: function(t, n, u) {
            var l, c, p, f, d, h, g = o !== a ? "nextSibling": "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
            if (m) {
              if (o) {
                while (g) {
                  p = t;
                  while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y: 1 === p.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling";
                }
                return !0;
              }
              if (h = [a ? m.firstChild: m.lastChild], a && v) {
                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
                  c[e] = [N, d, f];
                  break;
                }
              } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y: 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function(e, t) {
          var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
          return r[x] ? r(t): r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
            var i, o = r(e, t), a = o.length;
            while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a]);
          }): function(e) {
            return r(e, 0, n);
          }): r;
        }
      },
      pseudos: {
        not: ot(function(e) {
          var t = [], n = [], r = s(e.replace(W, "$1"));
          return r[x] ? ot(function(e, t, n, i) {
            var o, a = r(e, null, i, []), s = e.length;
            while (s--)(o = a[s]) && (e[s] = !(t[s] = o));
          }): function(e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: ot(function(e) {
          return function(t) {
            return st(e, t).length > 0;
          };
        }),
        contains: ot(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > - 1;
          };
        }),
        lang: ot(function(e) {
          return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
            var n;
            do if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang"): t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === f;
        },
        focus: function(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function(e) {
          return e.disabled === !1;
        },
        disabled: function(e) {
          return e.disabled === !0;
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0;
        },
        parent: function(e) {
          return !i.pseudos.empty(e);
        },
        header: function(e) {
          return Q.test(e.nodeName);
        },
        input: function(e) {
          return G.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        },
        first: pt(function() {
          return [0];
        }),
        last: pt(function(e, t) {
          return [t - 1];
        }),
        eq: pt(function(e, t, n) {
          return [0 > n ? n + t: n];
        }),
        even: pt(function(e, t) {
          var n = 0;
          for (; t > n; n += 2) e.push(n);
          return e;
        }),
        odd: pt(function(e, t) {
          var n = 1;
          for (; t > n; n += 2) e.push(n);
          return e;
        }),
        lt: pt(function(e, t, n) {
          var r = 0 > n ? n + t: n;
          for (; --r >= 0;) e.push(r);
          return e;
        }),
        gt: pt(function(e, t, n) {
          var r = 0 > n ? n + t: n;
          for (; t > ++r;) e.push(r);
          return e;
        })
      }
    };
    for (n in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) i.pseudos[n] = lt(n);
    for (n in {
      submit: !0,
      reset: !0
    }) i.pseudos[n] = ct(n);
    function ft(e, t) {
      var n, r, o, a, s, u, l, c = E[e + " "];
      if (c) return t ? 0: c.slice(0);
      s = e, u = [], l = i.preFilter;
      while (s) {
        (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(W, " ")
        }), s = s.slice(n.length));
        for (a in i.filter)!(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
          value: n,
          type: a,
          matches: r
        }), s = s.slice(n.length));
        if (!n) break;
      }
      return t ? s.length: s ? st.error(e): E(e, u).slice(0);
    }
    function dt(e) {
      var t = 0, n = e.length, r = "";
      for (; n > t; t++) r += e[t].value;
      return r;
    }
    function ht(e, t, n) {
      var i = t.dir, o = n && "parentNode" === i, a = C++;
      return t.first ? function(t, n, r) {
        while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r);
      }: function(t, n, s) {
        var u, l, c, p = N + " " + a;
        if (s) {
          while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
        } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
          if ((u = l[1]) === !0 || u === r) return u === !0;
        } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0;
      };
    }
    function gt(e) {
      return e.length > 1 ? function(t, n, r) {
        var i = e.length;
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0;
      }: e[0];
    }
    function mt(e, t, n, r, i) {
      var o, a = [], s = 0, u = e.length, l = null != t;
      for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
      return a;
    }
    function yt(e, t, n, r, i, o) {
      return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
        var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s]: s, []), m = !e || !o && t ? g: mt(g, f, e, s, u), y = n ? i || (o ? e: h || r) ? []: a: m;
        if (n && n(m, y, s, u), r) {
          l = mt(y, d), r(l, [], s, u), c = l.length;
          while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p));
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;
              while (c--)(p = y[c]) && l.push(m[c] = p);
              i(null, y = [], l, u);
            }
            c = y.length;
            while (c--)(p = y[c]) && (l = i ? M.call(o, p): f[c]) > - 1 && (o[l] = !(a[l] = p));
          }
        } else y = mt(y === a ? y.splice(h, y.length): y), i ? i(null, a, y, u): H.apply(a, y);
      });
    }
    function vt(e) {
      var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1: 0, c = ht(function(e) {
        return e === t;
      }, s, !0), p = ht(function(e) {
        return M.call(t, e) > - 1;
      }, s, !0), f = [function(e, n, r) {
        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r): p(e, n, r));
      }];
      for (; o > u; u++) if (n = i.relative[e[u].type]) f = [ht(gt(f), n)]; else {
        if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
          for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break;
          return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e));
        }
        f.push(n);
      }
      return gt(f);
    }
    function bt(e, t) {
      var n = 0, o = t.length > 0, a = e.length > 0, s = function(s, u, c, f, d) {
        var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1: Math.random() || .1;
        for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
          if (a && h) {
            g = 0;
            while (m = e[g++]) if (m(h, u, c)) {
              f.push(h);
              break;
            }
            w && (N = k, r = ++n);
          }
          o && ((h = !m && h) && v--, s && x.push(h));
        }
        if (v += b, o && b !== v) {
          g = 0;
          while (m = t[g++]) m(x, y, u, c);
          if (s) {
            if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f));
            y = mt(y);
          }
          H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f);
        }
        return w && (N = k, l = T), x;
      };
      return o ? ot(s): s;
    }
    s = st.compile = function(e, t) {
      var n, r = [], i = [], o = S[e + " "];
      if (!o) {
        t || (t = ft(e)), n = t.length;
        while (n--) o = vt(t[n]), o[x] ? r.push(o): i.push(o);
        o = S(e, bt(i, r));
      }
      return o;
    };
    function xt(e, t, n) {
      var r = 0, i = t.length;
      for (; i > r; r++) st(e, t[r], n);
      return n;
    }
    function wt(e, t, n, r) {
      var o, a, u, l, c, p = ft(e);
      if (!r && 1 === p.length) {
        if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
          if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
          e = e.slice(a.shift().value.length);
        }
        o = U.needsContext.test(e) ? 0: a.length;
        while (o--) {
          if (u = a[o], i.relative[l = u.type]) break;
          if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
            if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
            break;
          }
        }
      }
      return s(e, p)(r, t, d, n, V.test(e)), n;
    }
    i.pseudos.nth = i.pseudos.eq;
    function Tt() {}
    i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains;
  }(e);
  var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext, ct = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  b.fn.extend({
    find: function(e) {
      var t, n, r, i = this.length;
      if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
        for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0;
      }));
      for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
      return n = this.pushStack(i > 1 ? b.unique(n): n), n.selector = (this.selector ? this.selector + " ": "") + e, n;
    },
    has: function(e) {
      var t, n = b(e, this), r = n.length;
      return this.filter(function() {
        for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0;
      });
    },
    not: function(e) {
      return this.pushStack(ft(this, e, !1));
    },
    filter: function(e) {
      return this.pushStack(ft(this, e, !0));
    },
    is: function(e) {
      return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0: b.filter(e, this).length > 0: this.filter(e).length > 0);
    },
    closest: function(e, t) {
      var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context): 0;
      for (; i > r; r++) {
        n = this[r];
        while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
          if (a ? a.index(n) > - 1: b.find.matchesSelector(n, e)) {
            o.push(n);
            break;
          }
          n = n.parentNode;
        }
      }
      return this.pushStack(o.length > 1 ? b.unique(o): o);
    },
    index: function(e) {
      return e ? "string" == typeof e ? b.inArray(this[0], b(e)): b.inArray(e.jquery ? e[0]: e, this): this[0] && this[0].parentNode ? this.first().prevAll().length: - 1;
    },
    add: function(e, t) {
      var n = "string" == typeof e ? b(e, t): b.makeArray(e && e.nodeType ? [e]: e), r = b.merge(this.get(), n);
      return this.pushStack(b.unique(r));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject: this.prevObject.filter(e));
    }
  }), b.fn.andSelf = b.fn.addBack;
  function pt(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e;
  }
  b.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t: null;
    },
    parents: function(e) {
      return b.dir(e, "parentNode");
    },
    parentsUntil: function(e, t, n) {
      return b.dir(e, "parentNode", n);
    },
    next: function(e) {
      return pt(e, "nextSibling");
    },
    prev: function(e) {
      return pt(e, "previousSibling");
    },
    nextAll: function(e) {
      return b.dir(e, "nextSibling");
    },
    prevAll: function(e) {
      return b.dir(e, "previousSibling");
    },
    nextUntil: function(e, t, n) {
      return b.dir(e, "nextSibling", n);
    },
    prevUntil: function(e, t, n) {
      return b.dir(e, "previousSibling", n);
    },
    siblings: function(e) {
      return b.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function(e) {
      return b.sibling(e.firstChild);
    },
    contents: function(e) {
      return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: b.merge([], e.childNodes);
    }
  }, function(e, t) {
    b.fn[e] = function(n, r) {
      var i = b.map(this, t, n);
      return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i): i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i);
    };
  }), b.extend({
    filter: function(e, t, n) {
      return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]]: []: b.find.matches(e, t);
    },
    dir: function(e, n, r) {
      var i = [], o = e[n];
      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
      return i;
    },
    sibling: function(e, t) {
      var n = [];
      for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  });
  function ft(e, t, n) {
    if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
      var i = !!t.call(e, r, e);
      return i === n;
    });
    if (t.nodeType) return b.grep(e, function(e) {
      return e === t === n;
    });
    if ("string" == typeof t) {
      var r = b.grep(e, function(e) {
        return 1 === e.nodeType;
      });
      if (ut.test(t)) return b.filter(t, r, !n);
      t = b.filter(t, r);
    }
    return b.grep(e, function(e) {
      return b.inArray(e, t) >= 0 === n;
    });
  }
  function dt(e) {
    var t = ht.split("|"), n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n;
  }
  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: b.support.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
  }, jt = dt(o), Dt = jt.appendChild(o.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
    text: function(e) {
      return b.access(this, function(e) {
        return e === t ? b.text(this): this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
      }, null, e, arguments.length);
    },
    wrapAll: function(e) {
      if (b.isFunction(e)) return this.each(function(t) {
        b(this).wrapAll(e.call(this, t));
      });
      if (this[0]) {
        var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          var e = this;
          while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(e) {
      return b.isFunction(e) ? this.each(function(t) {
        b(this).wrapInner(e.call(this, t));
      }): this.each(function() {
        var t = b(this), n = t.contents();
        n.length ? n.wrapAll(e): t.append(e);
      });
    },
    wrap: function(e) {
      var t = b.isFunction(e);
      return this.each(function(n) {
        b(this).wrapAll(t ? e.call(this, n): e);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
      }).end();
    },
    append: function() {
      return this.domManip(arguments, !0, function(e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
      });
    },
    prepend: function() {
      return this.domManip(arguments, !0, function(e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
      });
    },
    before: function() {
      return this.domManip(arguments, !1, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function() {
      return this.domManip(arguments, !1, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function(e, t) {
      var n, r = 0;
      for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
      return this;
    },
    empty: function() {
      var e, t = 0;
      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && b.cleanData(Ot(e, !1));
        while (e.firstChild) e.removeChild(e.firstChild);
        e.options && b.nodeName(e, "select") && (e.options.length = 0);
      }
      return this;
    },
    clone: function(e, t) {
      return e = null == e ? !1: e, t = null == t ? e: t, this.map(function() {
        return b.clone(this, e, t);
      });
    },
    html: function(e) {
      return b.access(this, function(e) {
        var n = this[0] || {}, r = 0, i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, ""): t;
        if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");
          try {
            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
            n = 0;
          } catch (o) {}
        }
        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function(e) {
      var t = b.isFunction(e);
      return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
        var t = this.nextSibling, n = this.parentNode;
        n && (b(this).remove(), n.insertBefore(e, t));
      });
    },
    detach: function(e) {
      return this.remove(e, !0);
    },
    domManip: function(e, n, r) {
      e = f.apply([], e);
      var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g);
      if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
        var o = d.eq(i);
        m && (e[0] = g.call(this, i, n ? o.html(): t)), o.domManip(e, n, r);
      });
      if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
        for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody"): this[c], o, c);
        if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
          url: o.src,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
        }): b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
        l = i = null;
      }
      return this;
    }
  });
  function Lt(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
  }
  function Ht(e) {
    var t = e.getAttributeNode("type");
    return e.type = (t && t.specified) + "/" + e.type, e;
  }
  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1]: e.removeAttribute("type"), e;
  }
  function Mt(e, t) {
    var n, r = 0;
    for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"));
  }
  function _t(e, t) {
    if (1 === t.nodeType && b.hasData(e)) {
      var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = b.extend({}, a.data));
    }
  }
  function Ft(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
        i = b._data(t);
        for (r in i.events) b.removeEvent(t, r, i.handle);
        t.removeAttribute(b.expando);
      }
      "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)): "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)): "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)): "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
  }
  b.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    b.fn[e] = function(e) {
      var n, r = 0, i = [], o = b(e), a = o.length - 1;
      for (; a >= r; r++) n = r === a ? this: this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
      return this.pushStack(i);
    };
  });
  function Ot(e, n) {
    var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*"): typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*"): t;
    if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || b.nodeName(o, n) ? s.push(o): b.merge(s, Ot(o, n));
    return n === t || n && b.nodeName(e, n) ? b.merge([e], s): s;
  }
  function Bt(e) {
    Nt.test(e.type) && (e.defaultChecked = e.checked);
  }
  b.extend({
    clone: function(e, t, n) {
      var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
      if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0): (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
      if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]); else _t(e, o);
      return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o;
    },
    buildFragment: function(e, t, n, r) {
      var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0;
      for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o]: o); else if (wt.test(o)) {
        s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
        while (i--) s = s.lastChild;
        if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
          o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0: s: s.firstChild, i = o && o.childNodes.length;
          while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
        }
        b.merge(d, s.childNodes), s.textContent = "";
        while (s.firstChild) s.removeChild(s.firstChild);
        s = f.lastChild;
      } else d.push(t.createTextNode(o));
      s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
      while (o = d[h++]) if ((!r || - 1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
        i = 0;
        while (o = s[i++]) kt.test(o.type || "") && n.push(o);
      }
      return s = null, f;
    },
    cleanData: function(e, t) {
      var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special;
      for (; null != (n = e[s]); s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
        if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r): b.removeEvent(n, r, a.handle);
        l[o] && (delete l[o], p ? delete n[u]: typeof n.removeAttribute !== i ? n.removeAttribute(u): n[u] = null, c.push(o));
      }
    }
  });
  var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = {BODY: "block"}, Qt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, Kt = {
    letterSpacing: 0,
    fontWeight: 400
  }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
    while (i--) if (t = en[i] + n, t in e) return t;
    return r;
  }
  function nn(e, t) {
    return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e);
  }
  function rn(e, t) {
    var n, r, i, o = [], a = 0, s = e.length;
    for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))): o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n: b.css(r, "display"))));
    for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
    return e;
  }
  b.fn.extend({
    css: function(e, n) {
      return b.access(this, function(e, n, r) {
        var i, o, a = {}, s = 0;
        if (b.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
          return a;
        }
        return r !== t ? b.style(e, n, r): b.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function() {
      return rn(this, !0);
    },
    hide: function() {
      return rn(this);
    },
    toggle: function(e) {
      var t = "boolean" == typeof e;
      return this.each(function() {
        (t ? e: nn(this)) ? b(this).show(): b(this).hide();
      });
    }
  }), b.extend({
    cssHooks: {opacity: {get: function(e, t) {
          if (t) {
            var n = Wt(e, "opacity");
            return "" === n ? "1": n;
          }
        }}},
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": b.support.cssFloat ? "cssFloat": "styleFloat"},
    style: function(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, a, s, u = b.camelCase(n), l = e.style;
        if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
        if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t))) try {
          l[n] = r;
        } catch (c) {}
      }
    },
    css: function(e, n, r, i) {
      var o, a, s, u = b.camelCase(n);
      return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0: a): a;
    },
    swap: function(e, t, n, r) {
      var i, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    }
  }), e.getComputedStyle ? (Rt = function(t) {
    return e.getComputedStyle(t, null);
  }, Wt = function(e, n, r) {
    var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n]: t, l = e.style;
    return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u;
  }): o.documentElement.currentStyle && (Rt = function(e) {
    return e.currentStyle;
  }, Wt = function(e, n, r) {
    var i, o, a, s = r || Rt(e), u = s ? s[n]: t, l = e.style;
    return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto": u;
  });
  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px"): t;
  }
  function an(e, t, n, r, i) {
    var o = n === (r ? "border": "content") ? 4: "width" === t ? 1: 0, a = 0;
    for (; 4 > o; o += 2)"margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))): (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
    return a;
  }
  function sn(e, t, n) {
    var r = !0, i = "width" === t ? e.offsetWidth: e.offsetHeight, o = Rt(e), a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
      r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }
    return i + an(e, t, n || (a ? "border": "content"), r, o) + "px";
  }
  function un(e) {
    var t = o, n = Gt[e];
    return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n;
  }
  function ln(e, t) {
    var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
    return n.remove(), r;
  }
  b.each(["height", "width"], function(e, n) {
    b.cssHooks[n] = {
      get: function(e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
          return sn(e, n, i);
        }): sn(e, n, i): t;
      },
      set: function(e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i): 0);
      }
    };
  }), b.support.opacity || (b.cssHooks.opacity = {
    get: function(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": "";
    },
    set: function(e, t) {
      var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "", o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i): o + " " + i);
    }
  }), b(function() {
    b.support.reliableMarginRight || (b.cssHooks.marginRight = {get: function(e, n) {
        return n ? b.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]): t;
      }}), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
      b.cssHooks[n] = {get: function(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px": r): t;
        }};
    });
  }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"));
  }, b.expr.filters.visible = function(e) {
    return !b.expr.filters.hidden(e);
  }), b.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    b.cssHooks[e + t] = {expand: function(n) {
        var r = 0, i = {}, o = "string" == typeof n ? n.split(" "): [n];
        for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }}, Ut.test(e) || (b.cssHooks[e + t].set = on);
  });
  var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
  b.fn.extend({
    serialize: function() {
      return b.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var e = b.prop(this, "elements");
        return e ? b.makeArray(e): this;
      }).filter(function() {
        var e = this.type;
        return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e));
      }).map(function(e, t) {
        var n = b(this).val();
        return null == n ? null: b.isArray(n) ? b.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(fn, "\r\n")
          };
        }): {
          name: t.name,
          value: n.replace(fn, "\r\n")
        };
      }).get();
    }
  }), b.param = function(e, n) {
    var r, i = [], o = function(e, t) {
      t = b.isFunction(t) ? t(): null == t ? "": t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };
    if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
      o(this.name, this.value);
    }); else for (r in e) gn(r, e[r], n, o);
    return i.join("&").replace(cn, "+");
  };
  function gn(e, t, n, r) {
    var i;
    if (b.isArray(t)) b.each(t, function(t, i) {
      n || pn.test(e) ? r(e, i): gn(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r);
    }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
  }
  b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    b.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n): this.trigger(t);
    };
  }), b.fn.hover = function(e, t) {
    return this.mouseenter(e).mouseleave(t || e);
  };
  var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
  try {
    yn = a.href;
  } catch (Ln) {
    yn = o.createElement("a"), yn.href = "", yn = yn.href;
  }
  mn = En.exec(yn.toLowerCase()) || [];
  function Hn(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0, o = t.toLowerCase().match(w) || [];
      if (b.isFunction(n)) while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)): (e[r] = e[r] || []).push(n);
    };
  }
  function qn(e, n, r, i) {
    var o = {}, a = e === jn;
    function s(u) {
      var l;
      return o[u] = !0, b.each(e[u] || [], function(e, u) {
        var c = u(n, r, i);
        return "string" != typeof c || a || o[c] ? a ? !(l = c): t: (n.dataTypes.unshift(c), s(c), !1);
      }), l;
    }
    return s(n.dataTypes[0]) || !o["*"] && s("*");
  }
  function Mn(e, n) {
    var r, i, o = b.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== t && ((o[i] ? e: r || (r = {}))[i] = n[i]);
    return r && b.extend(!0, e, r), e;
  }
  b.fn.load = function(e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i, o, a, s = this, u = e.indexOf(" ");
    return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t): n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function(e) {
      o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i): e);
    }).complete(r && function(e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    b.fn[t] = function(e) {
      return this.on(t, e);
    };
  }), b.each(["get", "post"], function(e, n) {
    b[n] = function(e, r, i, o) {
      return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      });
    };
  }), b.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: "GET",
      isLocal: Nn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Dn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": e.String,
        "text html": !0,
        "text json": b.parseJSON,
        "text xml": b.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? Mn(Mn(e, b.ajaxSettings), t): Mn(b.ajaxSettings, e);
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function(e, n) {
      "object" == typeof e && (n = e, e = t), n = n || {};
      var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f): b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = {
        readyState: 0,
        getResponseHeader: function(e) {
          var t;
          if (2 === x) {
            if (!c) {
              c = {};
              while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2];
            }
            t = c[e.toLowerCase()];
          }
          return null == t ? null: t;
        },
        getAllResponseHeaders: function() {
          return 2 === x ? a: null;
        },
        setRequestHeader: function(e, t) {
          var n = e.toLowerCase();
          return x || (e = v[n] = v[n] || e, y[e] = t), this;
        },
        overrideMimeType: function(e) {
          return x || (p.mimeType = e), this;
        },
        statusCode: function(e) {
          var t;
          if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]]; else N.always(e[N.status]);
          return this;
        },
        abort: function(e) {
          var t = e || T;
          return l && l.abort(t), k(0, t), this;
        }
      };
      if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80: 443)) == (mn[3] || ("http:" === mn[1] ? 80: 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
      u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++): o + (bn.test(o) ? "&": "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01": ""): p.accepts["*"]);
      for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
      if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
      T = "abort";
      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) N[i](p[i]);
      if (l = qn(jn, p, n, N)) {
        N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
          N.abort("timeout");
        }, p.timeout));
        try {
          x = 1, l.send(y, k);
        } catch (C) {
          if (!(2 > x)) throw C;
          k(- 1, C);
        }
      } else k(- 1, "No Transport");
      function k(e, n, r, i) {
        var c, y, v, w, T, C = n;
        2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4: 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent"): 304 === e ? (c = !0, C = "notmodified"): (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)): (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]): h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess": "ajaxError", [N, p, c ? y: v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")));
      }
      return N;
    },
    getScript: function(e, n) {
      return b.get(e, t, n, "script");
    },
    getJSON: function(e, t, n) {
      return b.get(e, t, n, "json");
    }
  });
  function _n(e, n, r) {
    var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
    for (s in c) s in r && (n[c[s]] = r[s]);
    while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    if (o) for (s in u) if (u[s] && u[s].test(o)) {
      l.unshift(s);
      break;
    }
    if (l[0]in r) a = l[0]; else {
      for (s in r) {
        if (!l[0] || e.converters[s + " " + l[0]]) {
          a = s;
          break;
        }
        i || (i = s);
      }
      a = a || i;
    }
    return a ? (a !== l[0] && l.unshift(a), r[a]): t;
  }
  function Fn(e, t) {
    var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
    for (; r = u[++s];) if ("*" !== r) {
      if ("*" !== l && l !== r) {
        if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
          i === !0 ? i = a[n]: a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
          break;
        }
        if (i !== !0) if (i && e["throws"]) t = i(t); else try {
          t = i(t);
        } catch (c) {
          return {
            state: "parsererror",
            error: i ? c: "No conversion from " + l + " to " + r
          };
        }
      }
      l = r;
    }
    return {
      state: "success",
      data: t
    };
  }
  b.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {"text script": function(e) {
        return b.globalEval(e), e;
      }}
  }), b.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), b.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, r = o.head || b("head")[0] || o.documentElement;
      return {
        send: function(t, i) {
          n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        },
        abort: function() {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var On = [], Bn = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = On.pop() || b.expando + "_" + vn++;
      return this[e] = !0, e;
    }
  }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
    var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
    return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback(): n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o): n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
      return s || b.error(o + " was not called"), s[0];
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
      s = arguments;
    }, i.always(function() {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t;
    }), "script"): t;
  });
  var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
    var e;
    for (e in Pn) Pn[e](t, !0);
  };
  function In() {
    try {
      return new e.XMLHttpRequest;
    } catch (t) {}
  }
  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  b.ajaxSettings.xhr = e.ActiveXObject ? function() {
    return !this.isLocal && In() || zn();
  }: In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials"in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n) {
    if (!n.crossDomain || b.support.cors) {
      var r;
      return {
        send: function(i, o) {
          var a, s, u = n.xhr();
          if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password): u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
          n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (s in i) u.setRequestHeader(s, i[s]);
          } catch (l) {}
          u.send(n.hasContent && n.data || null), r = function(e, i) {
            var s, l, c, p;
            try {
              if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort(); else {
                p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                try {
                  c = u.statusText;
                } catch (f) {
                  c = "";
                }
                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204): s = p.text ? 200: 404;
              }
            } catch (d) {
              i || o(- 1, d);
            }
            p && o(s, c, p, l);
          }, n.async ? 4 === u.readyState ? setTimeout(r): (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r): r();
        },
        abort: function() {
          r && r(t, !0);
        }
      };
    }
  });
  var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {"*": [function(e, t) {
      var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = + a || 0, u = 1, l = 20;
      if (o) {
        if (n = + o[2], r = o[3] || (b.cssNumber[e] ? "": "px"), "px" !== r && s) {
          s = b.css(i.elem, e, !0) || n || 1;
          do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l);
        }
        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n: n;
      }
      return i;
    }]};
  function Kn() {
    return setTimeout(function() {
      Xn = t;
    }), Xn = b.now();
  }
  function Zn(e, t) {
    b.each(t, function(t, n) {
      var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length;
      for (; o > i; i++) if (r[i].call(e, t, n)) return;
    });
  }
  function er(e, t, n) {
    var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function() {
      delete u.elem;
    }), u = function() {
      if (i) return !1;
      var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length;
      for (; u > a; a++) l.tweens[a].run(o);
      return s.notifyWith(e, [l, o, n]), 1 > o && u ? n: (s.resolveWith(e, [l]), !1);
    }, l = s.promise({
      elem: e,
      props: b.extend({}, t),
      opts: b.extend(!0, {specialEasing: {}}, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Xn || Kn(),
      duration: n.duration,
      tweens: [],
      createTween: function(t, n) {
        var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function(t) {
        var n = 0, r = t ? l.tweens.length: 0;
        if (i) return this;
        for (i = !0; r > n; n++) l.tweens[n].run(1);
        return t ? s.resolveWith(e, [l, t]): s.rejectWith(e, [l, t]), this;
      }
    }), c = l.props;
    for (tr(c, l.opts.specialEasing); a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r;
    return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function tr(e, t) {
    var n, r, i, o, a;
    for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand"in a) {
      n = a.expand(n), delete e[r];
      for (i in n) i in e || (e[i] = n[i], t[i] = o);
    } else t[r] = o;
  }
  b.Animation = b.extend(er, {
    tweener: function(e, t) {
      b.isFunction(e) ? (t = e, e = ["*"]): e = e.split(" ");
      var n, r = 0, i = e.length;
      for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
    },
    prefilter: function(e, t) {
      t ? Gn.unshift(e): Gn.push(e);
    }
  });
  function nr(e, t, n) {
    var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e);
    n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
      c.unqueued || p();
    }), c.unqueued++, f.always(function() {
      f.always(function() {
        c.unqueued--, b.queue(e, "fx").length || c.empty.fire();
      });
    })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1: d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
    }));
    for (i in t) if (a = t[i], Vn.exec(a)) {
      if (delete t[i], u = u || "toggle" === a, a === (m ? "hide": "show")) continue;
      g.push(i);
    }
    if (o = g.length) {
      s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden"in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show(): f.done(function() {
        b(e).hide();
      }), f.done(function() {
        var t;
        b._removeData(e, "fxshow");
        for (t in h) b.style(e, t, h[t]);
      });
      for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r]: 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1: 0));
    }
  }
  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }
  b.Tween = rr, rr.prototype = {
    constructor: rr,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "": "px");
    },
    cur: function() {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this): rr.propHooks._default.get(this);
    },
    run: function(e) {
      var t, n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration): e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this): rr.propHooks._default.set(this), this;
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0): e.elem[e.prop];
      },
      set: function(e) {
        b.fx.step[e.prop] ? b.fx.step[e.prop](e): e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit): e.elem[e.prop] = e.now;
      }
    }}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }}, b.each(["toggle", "show", "hide"], function(e, t) {
    var n = b.fn[t];
    b.fn[t] = function(e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments): this.animate(ir(t, !0), e, r, i);
    };
  }), b.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r);
    },
    animate: function(e, t, n, r) {
      var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function() {
        var t = er(this, b.extend({}, e), o);
        a.finish = function() {
          t.stop(!0);
        }, (i || b._data(this, "finish")) && t.stop(!0);
      };
      return a.finish = a, i || o.queue === !1 ? this.each(a): this.queue(o.queue, a);
    },
    stop: function(e, n, r) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop, t(r);
      };
      return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
        var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this);
        if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        (t || !r) && b.dequeue(this, e);
      });
    },
    finish: function(e) {
      return e !== !1 && (e = e || "fx"), this.each(function() {
        var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length: 0;
        for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  });
  function ir(e, t) {
    var n, r = {height: e}, i = 0;
    for (t = t ? 1: 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  b.each({
    slideDown: ir("show"),
    slideUp: ir("hide"),
    slideToggle: ir("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(e, t) {
    b.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), b.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? b.extend({}, e): {
      complete: n || !n && t || b.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !b.isFunction(t) && t
    };
    return r.duration = b.fx.off ? 0: "number" == typeof r.duration ? r.duration: r.duration in b.fx.speeds ? b.fx.speeds[r.duration]: b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
    }, r;
  }, b.easing = {
    linear: function(e) {
      return e;
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
    var e, n = b.timers, r = 0;
    for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    n.length || b.fx.stop(), Xn = t;
  }, b.fx.timer = function(e) {
    e() && b.timers.push(e) && b.fx.start();
  }, b.fx.interval = 13, b.fx.start = function() {
    Un || (Un = setInterval(b.fx.tick, b.fx.interval));
  }, b.fx.stop = function() {
    clearInterval(Un), Un = null;
  }, b.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
    return b.grep(b.timers, function(t) {
      return e === t.elem;
    }).length;
  }), b.fn.offset = function(e) {
    if (arguments.length) return e === t ? this: this.each(function(t) {
      b.offset.setOffset(this, e, t);
    });
    var n, r, o = {
      top: 0,
      left: 0
    }, a = this[0], s = a && a.ownerDocument;
    if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }): o;
  }, b.offset = {setOffset: function(e, t, n) {
      var r = b.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > - 1, l = {}, c = {}, p, f;
      u ? (c = i.position(), p = c.top, f = c.left): (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using"in t ? t.using.call(e, l): i.css(l);
    }}, b.fn.extend({
    position: function() {
      if (this[0]) {
        var e, t, n = {
          top: 0,
          left: 0
        }, r = this[0];
        return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect(): (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - b.css(r, "marginTop", !0),
          left: t.left - n.left - b.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this.offsetParent || o.documentElement;
        while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
        return e || o.documentElement;
      });
    }
  }), b.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, n) {
    var r = /Y/.test(n);
    b.fn[e] = function(i) {
      return b.access(this, function(e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n]: a.document.documentElement[i]: e[i]: (a ? a.scrollTo(r ? b(a).scrollLeft(): o, r ? o: b(a).scrollTop()): e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });
  function or(e) {
    return b.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1;
  }
  b.each({
    Height: "height",
    Width: "width"
  }, function(e, n) {
    b.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function(r, i) {
      b.fn[i] = function(i, o) {
        var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin": "border");
        return b.access(this, function(n, r, i) {
          var o;
          return b.isWindow(n) ? n.document.documentElement["client" + e]: 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])): i === t ? b.css(n, r, s): b.style(n, r, i, s);
        }, n, a ? i: t, a, null);
      };
    });
  }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return b;
  });
})(window);
(function() {
  var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, h = e.reduce, v = e.reduceRight, g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, w = Object.keys, _ = i.bind, j = function(n) {
    return n instanceof j ? n: this instanceof j ? (this._wrapped = n, void 0): new j(n);
  };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j): n._ = j, j.VERSION = "1.5.2";
  var A = j.each = j.forEach = function(n, t, e) {
    if (null != n) if (s && n.forEach === s) n.forEach(t, e); else if (n.length === + n.length) {
      for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return;
    } else for (var a = j.keys(n), u = 0, i = a.length; i > u; u++) if (t.call(e, n[a[u]], a[u], n) === r) return;
  };
  j.map = j.collect = function(n, t, r) {
    var e = [];
    return null == n ? e: p && n.map === p ? n.map(t, r): (A(n, function(n, u, i) {
      e.push(t.call(r, n, u, i));
    }), e);
  };
  var E = "Reduce of empty array with no initial value";
  j.reduce = j.foldl = j.inject = function(n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), u ? n.reduce(t, r): n.reduce(t);
    if (A(n, function(n, i, a) {
      u ? r = t.call(e, r, n, i, a): (r = n, u = !0);
    }), !u) throw new TypeError(E);
    return r;
  }, j.reduceRight = j.foldr = function(n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r): n.reduceRight(t);
    var i = n.length;
    if (i !== + i) {
      var a = j.keys(n);
      i = a.length;
    }
    if (A(n, function(o, c, l) {
      c = a ? a[--i]: --i, u ? r = t.call(e, r, n[c], c, l): (r = n[c], u = !0);
    }), !u) throw new TypeError(E);
    return r;
  }, j.find = j.detect = function(n, t, r) {
    var e;
    return O(n, function(n, u, i) {
      return t.call(r, n, u, i) ? (e = n, !0): void 0;
    }), e;
  }, j.filter = j.select = function(n, t, r) {
    var e = [];
    return null == n ? e: g && n.filter === g ? n.filter(t, r): (A(n, function(n, u, i) {
      t.call(r, n, u, i) && e.push(n);
    }), e);
  }, j.reject = function(n, t, r) {
    return j.filter(n, function(n, e, u) {
      return !t.call(r, n, e, u);
    }, r);
  }, j.every = j.all = function(n, t, e) {
    t || (t = j.identity);
    var u = !0;
    return null == n ? u: d && n.every === d ? n.every(t, e): (A(n, function(n, i, a) {
      return (u = u && t.call(e, n, i, a)) ? void 0: r;
    }), !!u);
  };
  var O = j.some = j.any = function(n, t, e) {
    t || (t = j.identity);
    var u = !1;
    return null == n ? u: m && n.some === m ? n.some(t, e): (A(n, function(n, i, a) {
      return u || (u = t.call(e, n, i, a)) ? r: void 0;
    }), !!u);
  };
  j.contains = j.include = function(n, t) {
    return null == n ? !1: y && n.indexOf === y ? n.indexOf(t) != - 1: O(n, function(n) {
      return n === t;
    });
  }, j.invoke = function(n, t) {
    var r = o.call(arguments, 2), e = j.isFunction(t);
    return j.map(n, function(n) {
      return (e ? t: n[t]).apply(n, r);
    });
  }, j.pluck = function(n, t) {
    return j.map(n, function(n) {
      return n[t];
    });
  }, j.where = function(n, t, r) {
    return j.isEmpty(t) ? r ? void 0: []: j[r ? "find": "filter"](n, function(n) {
      for (var r in t) if (t[r] !== n[r]) return !1;
      return !0;
    });
  }, j.findWhere = function(n, t) {
    return j.where(n, t, !0);
  }, j.max = function(n, t, r) {
    if (!t && j.isArray(n) && n[0] === + n[0] && n.length < 65535) return Math.max.apply(Math, n);
    if (!t && j.isEmpty(n)) return - 1 / 0;
    var e = {
      computed: - 1 / 0,
      value: - 1 / 0
    };
    return A(n, function(n, u, i) {
      var a = t ? t.call(r, n, u, i): n;
      a > e.computed && (e = {
        value: n,
        computed: a
      });
    }), e.value;
  }, j.min = function(n, t, r) {
    if (!t && j.isArray(n) && n[0] === + n[0] && n.length < 65535) return Math.min.apply(Math, n);
    if (!t && j.isEmpty(n)) return 1 / 0;
    var e = {
      computed: 1 / 0,
      value: 1 / 0
    };
    return A(n, function(n, u, i) {
      var a = t ? t.call(r, n, u, i): n;
      a < e.computed && (e = {
        value: n,
        computed: a
      });
    }), e.value;
  }, j.shuffle = function(n) {
    var t, r = 0, e = [];
    return A(n, function(n) {
      t = j.random(r++), e[r - 1] = e[t], e[t] = n;
    }), e;
  }, j.sample = function(n, t, r) {
    return arguments.length < 2 || r ? n[j.random(n.length - 1)]: j.shuffle(n).slice(0, Math.max(0, t));
  };
  var k = function(n) {
    return j.isFunction(n) ? n: function(t) {
      return t[n];
    };
  };
  j.sortBy = function(n, t, r) {
    var e = k(t);
    return j.pluck(j.map(n, function(n, t, u) {
      return {
        value: n,
        index: t,
        criteria: e.call(r, n, t, u)
      };
    }).sort(function(n, t) {
      var r = n.criteria, e = t.criteria;
      if (r !== e) {
        if (r > e || r === void 0) return 1;
        if (e > r || e === void 0) return - 1;
      }
      return n.index - t.index;
    }), "value");
  };
  var F = function(n) {
    return function(t, r, e) {
      var u = {}, i = null == r ? j.identity: k(r);
      return A(t, function(r, a) {
        var o = i.call(e, r, a, t);
        n(u, o, r);
      }), u;
    };
  };
  j.groupBy = F(function(n, t, r) {
    (j.has(n, t) ? n[t]: n[t] = []).push(r);
  }), j.indexBy = F(function(n, t, r) {
    n[t] = r;
  }), j.countBy = F(function(n, t) {
    j.has(n, t) ? n[t]++: n[t] = 1;
  }), j.sortedIndex = function(n, t, r, e) {
    r = null == r ? j.identity: k(r);
    for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
      var o = i + a >>> 1;
      r.call(e, n[o]) < u ? i = o + 1: a = o;
    }
    return i;
  }, j.toArray = function(n) {
    return n ? j.isArray(n) ? o.call(n): n.length === + n.length ? j.map(n, j.identity): j.values(n): [];
  }, j.size = function(n) {
    return null == n ? 0: n.length === + n.length ? n.length: j.keys(n).length;
  }, j.first = j.head = j.take = function(n, t, r) {
    return null == n ? void 0: null == t || r ? n[0]: o.call(n, 0, t);
  }, j.initial = function(n, t, r) {
    return o.call(n, 0, n.length - (null == t || r ? 1: t));
  }, j.last = function(n, t, r) {
    return null == n ? void 0: null == t || r ? n[n.length - 1]: o.call(n, Math.max(n.length - t, 0));
  }, j.rest = j.tail = j.drop = function(n, t, r) {
    return o.call(n, null == t || r ? 1: t);
  }, j.compact = function(n) {
    return j.filter(n, j.identity);
  };
  var M = function(n, t, r) {
    return t && j.every(n, j.isArray) ? c.apply(r, n): (A(n, function(n) {
      j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n): M(n, t, r): r.push(n);
    }), r);
  };
  j.flatten = function(n, t) {
    return M(n, t, []);
  }, j.without = function(n) {
    return j.difference(n, o.call(arguments, 1));
  }, j.uniq = j.unique = function(n, t, r, e) {
    j.isFunction(t) && (e = r, r = t, t = !1);
    var u = r ? j.map(n, r, e): n, i = [], a = [];
    return A(u, function(r, e) {
      (t ? e && a[a.length - 1] === r: j.contains(a, r)) || (a.push(r), i.push(n[e]));
    }), i;
  }, j.union = function() {
    return j.uniq(j.flatten(arguments, !0));
  }, j.intersection = function(n) {
    var t = o.call(arguments, 1);
    return j.filter(j.uniq(n), function(n) {
      return j.every(t, function(t) {
        return j.indexOf(t, n) >= 0;
      });
    });
  }, j.difference = function(n) {
    var t = c.apply(e, o.call(arguments, 1));
    return j.filter(n, function(n) {
      return !j.contains(t, n);
    });
  }, j.zip = function() {
    for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
    return t;
  }, j.object = function(n, t) {
    if (null == n) return {};
    for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e]: r[n[e][0]] = n[e][1];
    return r;
  }, j.indexOf = function(n, t, r) {
    if (null == n) return - 1;
    var e = 0, u = n.length;
    if (r) {
      if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e: - 1;
      e = 0 > r ? Math.max(0, u + r): r;
    }
    if (y && n.indexOf === y) return n.indexOf(t, r);
    for (; u > e; e++) if (n[e] === t) return e;
    return - 1;
  }, j.lastIndexOf = function(n, t, r) {
    if (null == n) return - 1;
    var e = null != r;
    if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r): n.lastIndexOf(t);
    for (var u = e ? r: n.length; u--;) if (n[u] === t) return u;
    return - 1;
  }, j.range = function(n, t, r) {
    arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
    for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
    return i;
  };
  var R = function() {};
  j.bind = function(n, t) {
    var r, e;
    if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
    if (!j.isFunction(n)) throw new TypeError;
    return r = o.call(arguments, 2), e = function() {
      if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
      R.prototype = n.prototype;
      var u = new R;
      R.prototype = null;
      var i = n.apply(u, r.concat(o.call(arguments)));
      return Object(i) === i ? i: u;
    };
  }, j.partial = function(n) {
    var t = o.call(arguments, 1);
    return function() {
      return n.apply(this, t.concat(o.call(arguments)));
    };
  }, j.bindAll = function(n) {
    var t = o.call(arguments, 1);
    if (0 === t.length) throw new Error("bindAll must be passed function names");
    return A(t, function(t) {
      n[t] = j.bind(n[t], n);
    }), n;
  }, j.memoize = function(n, t) {
    var r = {};
    return t || (t = j.identity), function() {
      var e = t.apply(this, arguments);
      return j.has(r, e) ? r[e]: r[e] = n.apply(this, arguments);
    };
  }, j.delay = function(n, t) {
    var r = o.call(arguments, 2);
    return setTimeout(function() {
      return n.apply(null, r);
    }, t);
  }, j.defer = function(n) {
    return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)));
  }, j.throttle = function(n, t, r) {
    var e, u, i, a = null, o = 0;
    r || (r = {});
    var c = function() {
      o = r.leading === !1 ? 0: new Date, a = null, i = n.apply(e, u);
    };
    return function() {
      var l = new Date;
      o || r.leading !== !1 || (o = l);
      var f = t - (l - o);
      return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)): a || r.trailing === !1 || (a = setTimeout(c, f)), i;
    };
  }, j.debounce = function(n, t, r) {
    var e, u, i, a, o;
    return function() {
      i = this, u = arguments, a = new Date;
      var c = function() {
        var l = new Date - a;
        t > l ? e = setTimeout(c, t - l): (e = null, r || (o = n.apply(i, u)));
      }, l = r && !e;
      return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o;
    };
  }, j.once = function(n) {
    var t, r = !1;
    return function() {
      return r ? t: (r = !0, t = n.apply(this, arguments), n = null, t);
    };
  }, j.wrap = function(n, t) {
    return function() {
      var r = [n];
      return a.apply(r, arguments), t.apply(this, r);
    };
  }, j.compose = function() {
    var n = arguments;
    return function() {
      for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
      return t[0];
    };
  }, j.after = function(n, t) {
    return function() {
      return --n < 1 ? t.apply(this, arguments): void 0;
    };
  }, j.keys = w || function(n) {
    if (n !== Object(n)) throw new TypeError("Invalid object");
    var t = [];
    for (var r in n) j.has(n, r) && t.push(r);
    return t;
  }, j.values = function(n) {
    for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
    return e;
  }, j.pairs = function(n) {
    for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
    return e;
  }, j.invert = function(n) {
    for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
    return t;
  }, j.functions = j.methods = function(n) {
    var t = [];
    for (var r in n) j.isFunction(n[r]) && t.push(r);
    return t.sort();
  }, j.extend = function(n) {
    return A(o.call(arguments, 1), function(t) {
      if (t) for (var r in t) n[r] = t[r];
    }), n;
  }, j.pick = function(n) {
    var t = {}, r = c.apply(e, o.call(arguments, 1));
    return A(r, function(r) {
      r in n && (t[r] = n[r]);
    }), t;
  }, j.omit = function(n) {
    var t = {}, r = c.apply(e, o.call(arguments, 1));
    for (var u in n) j.contains(r, u) || (t[u] = n[u]);
    return t;
  }, j.defaults = function(n) {
    return A(o.call(arguments, 1), function(t) {
      if (t) for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }), n;
  }, j.clone = function(n) {
    return j.isObject(n) ? j.isArray(n) ? n.slice(): j.extend({}, n): n;
  }, j.tap = function(n, t) {
    return t(n), n;
  };
  var S = function(n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n == 1 / t;
    if (null == n || null == t) return n === t;
    n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
    var u = l.call(n);
    if (u != l.call(t)) return !1;
    switch (u) {
      case "[object String]":
        return n == String(t);
      case "[object Number]":
        return n != + n ? t != + t: 0 == n ? 1 / n == 1 / t: n == + t;
      case "[object Date]":
      case "[object Boolean]":
        return + n == + t;
      case "[object RegExp]":
        return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase;
    }
    if ("object" != typeof n || "object" != typeof t) return !1;
    for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
    var a = n.constructor, o = t.constructor;
    if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o)) return !1;
    r.push(n), e.push(t);
    var c = 0, f = !0;
    if ("[object Array]" == u) {
      if (c = n.length, f = c == t.length) for (; c-- && (f = S(n[c], t[c], r, e)););
    } else {
      for (var s in n) if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
      if (f) {
        for (s in t) if (j.has(t, s) && !c--) break;
        f = !c;
      }
    }
    return r.pop(), e.pop(), f;
  };
  j.isEqual = function(n, t) {
    return S(n, t, [], []);
  }, j.isEmpty = function(n) {
    if (null == n) return !0;
    if (j.isArray(n) || j.isString(n)) return 0 === n.length;
    for (var t in n) if (j.has(n, t)) return !1;
    return !0;
  }, j.isElement = function(n) {
    return !(!n || 1 !== n.nodeType);
  }, j.isArray = x || function(n) {
    return "[object Array]" == l.call(n);
  }, j.isObject = function(n) {
    return n === Object(n);
  }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
    j["is" + n] = function(t) {
      return l.call(t) == "[object " + n + "]";
    };
  }), j.isArguments(arguments) || (j.isArguments = function(n) {
    return !(!n || !j.has(n, "callee"));
  }), "function" != typeof /./ && (j.isFunction = function(n) {
    return "function" == typeof n;
  }), j.isFinite = function(n) {
    return isFinite(n) && !isNaN(parseFloat(n));
  }, j.isNaN = function(n) {
    return j.isNumber(n) && n != + n;
  }, j.isBoolean = function(n) {
    return n === !0 || n === !1 || "[object Boolean]" == l.call(n);
  }, j.isNull = function(n) {
    return null === n;
  }, j.isUndefined = function(n) {
    return n === void 0;
  }, j.has = function(n, t) {
    return f.call(n, t);
  }, j.noConflict = function() {
    return n._ = t, this;
  }, j.identity = function(n) {
    return n;
  }, j.times = function(n, t, r) {
    for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
    return e;
  }, j.random = function(n, t) {
    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
  };
  var I = {escape: {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;"
    }};
  I.unescape = j.invert(I.escape);
  var T = {
    escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
    unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
  };
  j.each(["escape", "unescape"], function(n) {
    j[n] = function(t) {
      return null == t ? "": ("" + t).replace(T[n], function(t) {
        return I[n][t];
      });
    };
  }), j.result = function(n, t) {
    if (null == n) return void 0;
    var r = n[t];
    return j.isFunction(r) ? r.call(n): r;
  }, j.mixin = function(n) {
    A(j.functions(n), function(t) {
      var r = j[t] = n[t];
      j.prototype[t] = function() {
        var n = [this._wrapped];
        return a.apply(n, arguments), z.call(this, r.apply(j, n));
      };
    });
  };
  var N = 0;
  j.uniqueId = function(n) {
    var t = ++N + "";
    return n ? n + t: t;
  }, j.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var q = /(.)^/, B = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "	": "t",
    "\u2028": "u2028",
    "\u2029": "u2029"
  }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  j.template = function(n, t, r) {
    var e;
    r = j.defaults({}, r, j.templateSettings);
    var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), i = 0, a = "__p+='";
    n.replace(u, function(t, r, e, u, o) {
      return a += n.slice(i, o).replace(D, function(n) {
        return "\\" + B[n];
      }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t;
    }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
    try {
      e = new Function(r.variable || "obj", "_", a);
    } catch (o) {
      throw o.source = a, o;
    }
    if (t) return e(t, j);
    var c = function(n) {
      return e.call(this, n, j);
    };
    return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c;
  }, j.chain = function(n) {
    return j(n).chain();
  };
  var z = function(n) {
    return this._chain ? j(n).chain(): n;
  };
  j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
    var t = e[n];
    j.prototype[n] = function() {
      var r = this._wrapped;
      return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r);
    };
  }), A(["concat", "join", "slice"], function(n) {
    var t = e[n];
    j.prototype[n] = function() {
      return z.call(this, t.apply(this._wrapped, arguments));
    };
  }), j.extend(j.prototype, {
    chain: function() {
      return this._chain = !0, this;
    },
    value: function() {
      return this._wrapped;
    }
  });
}).call(this);
(function() {
  var t = this;
  var e = t.Backbone;
  var i = [];
  var r = i.push;
  var s = i.slice;
  var n = i.splice;
  var a;
  if (typeof exports !== "undefined") {
    a = exports;
  } else {
    a = t.Backbone = {};
  }
  a.VERSION = "1.1.0";
  var h = t._;
  if (!h && typeof require !== "undefined") h = require("underscore");
  a.$ = t.jQuery || t.Zepto || t.ender || t.$;
  a.noConflict = function() {
    t.Backbone = e;
    return this;
  };
  a.emulateHTTP = false;
  a.emulateJSON = false;
  var o = a.Events = {
    on: function(t, e, i) {
      if (!l(this, "on", t, [e, i]) || !e) return this;
      this._events || (this._events = {});
      var r = this._events[t] || (this._events[t] = []);
      r.push({
        callback: e,
        context: i,
        ctx: i || this
      });
      return this;
    },
    once: function(t, e, i) {
      if (!l(this, "once", t, [e, i]) || !e) return this;
      var r = this;
      var s = h.once(function() {
        r.off(t, s);
        e.apply(this, arguments);
      });
      s._callback = e;
      return this.on(t, s, i);
    },
    off: function(t, e, i) {
      var r, s, n, a, o, u, c, f;
      if (!this._events || !l(this, "off", t, [e, i])) return this;
      if (!t && !e && !i) {
        this._events = {};
        return this;
      }
      a = t ? [t]: h.keys(this._events);
      for (o = 0, u = a.length; o < u; o++) {
        t = a[o];
        if (n = this._events[t]) {
          this._events[t] = r = [];
          if (e || i) {
            for (c = 0, f = n.length; c < f; c++) {
              s = n[c];
              if (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) {
                r.push(s);
              }
            }
          }
          if (!r.length) delete this._events[t];
        }
      }
      return this;
    },
    trigger: function(t) {
      if (!this._events) return this;
      var e = s.call(arguments, 1);
      if (!l(this, "trigger", t, e)) return this;
      var i = this._events[t];
      var r = this._events.all;
      if (i) c(i, e);
      if (r) c(r, arguments);
      return this;
    },
    stopListening: function(t, e, i) {
      var r = this._listeningTo;
      if (!r) return this;
      var s = !e && !i;
      if (!i && typeof e === "object") i = this;
      if (t)(r = {})[t._listenId] = t;
      for (var n in r) {
        t = r[n];
        t.off(e, i, this);
        if (s || h.isEmpty(t._events)) delete this._listeningTo[n];
      }
      return this;
    }
  };
  var u = /\s+/;
  var l = function(t, e, i, r) {
    if (!i) return true;
    if (typeof i === "object") {
      for (var s in i) {
        t[e].apply(t, [s, i[s]].concat(r));
      }
      return false;
    }
    if (u.test(i)) {
      var n = i.split(u);
      for (var a = 0, h = n.length; a < h; a++) {
        t[e].apply(t, [n[a]].concat(r));
      }
      return false;
    }
    return true;
  };
  var c = function(t, e) {
    var i, r = - 1, s = t.length, n = e[0], a = e[1], h = e[2];
    switch (e.length) {
      case 0:
        while (++r < s)(i = t[r]).callback.call(i.ctx);
        return;
      case 1:
        while (++r < s)(i = t[r]).callback.call(i.ctx, n);
        return;
      case 2:
        while (++r < s)(i = t[r]).callback.call(i.ctx, n, a);
        return;
      case 3:
        while (++r < s)(i = t[r]).callback.call(i.ctx, n, a, h);
        return;
      default:
        while (++r < s)(i = t[r]).callback.apply(i.ctx, e);
    }
  };
  var f = {
    listenTo: "on",
    listenToOnce: "once"
  };
  h.each(f, function(t, e) {
    o[e] = function(e, i, r) {
      var s = this._listeningTo || (this._listeningTo = {});
      var n = e._listenId || (e._listenId = h.uniqueId("l"));
      s[n] = e;
      if (!r && typeof i === "object") r = this;
      e[t](i, r, this);
      return this;
    };
  });
  o.bind = o.on;
  o.unbind = o.off;
  h.extend(a, o);
  var d = a.Model = function(t, e) {
    var i = t || {};
    e || (e = {});
    this.cid = h.uniqueId("c");
    this.attributes = {};
    if (e.collection) this.collection = e.collection;
    if (e.parse) i = this.parse(i, e) || {};
    i = h.defaults({}, i, h.result(this, "defaults"));
    this.set(i, e);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };
  h.extend(d.prototype, o, {
    changed: null,
    validationError: null,
    idAttribute: "id",
    initialize: function() {},
    toJSON: function(t) {
      return h.clone(this.attributes);
    },
    sync: function() {
      return a.sync.apply(this, arguments);
    },
    get: function(t) {
      return this.attributes[t];
    },
    escape: function(t) {
      return h.escape(this.get(t));
    },
    has: function(t) {
      return this.get(t) != null;
    },
    set: function(t, e, i) {
      var r, s, n, a, o, u, l, c;
      if (t == null) return this;
      if (typeof t === "object") {
        s = t;
        i = e;
      } else {
        (s = {})[t] = e;
      }
      i || (i = {});
      if (!this._validate(s, i)) return false;
      n = i.unset;
      o = i.silent;
      a = [];
      u = this._changing;
      this._changing = true;
      if (!u) {
        this._previousAttributes = h.clone(this.attributes);
        this.changed = {};
      }
      c = this.attributes, l = this._previousAttributes;
      if (this.idAttribute in s) this.id = s[this.idAttribute];
      for (r in s) {
        e = s[r];
        if (!h.isEqual(c[r], e)) a.push(r);
        if (!h.isEqual(l[r], e)) {
          this.changed[r] = e;
        } else {
          delete this.changed[r];
        }
        n ? delete c[r]: c[r] = e;
      }
      if (!o) {
        if (a.length) this._pending = true;
        for (var f = 0, d = a.length; f < d; f++) {
          this.trigger("change:" + a[f], this, c[a[f]], i);
        }
      }
      if (u) return this;
      if (!o) {
        while (this._pending) {
          this._pending = false;
          this.trigger("change", this, i);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },
    unset: function(t, e) {
      return this.set(t, void 0, h.extend({}, e, {unset: true}));
    },
    clear: function(t) {
      var e = {};
      for (var i in this.attributes) e[i] = void 0;
      return this.set(e, h.extend({}, t, {unset: true}));
    },
    hasChanged: function(t) {
      if (t == null) return !h.isEmpty(this.changed);
      return h.has(this.changed, t);
    },
    changedAttributes: function(t) {
      if (!t) return this.hasChanged() ? h.clone(this.changed): false;
      var e, i = false;
      var r = this._changing ? this._previousAttributes: this.attributes;
      for (var s in t) {
        if (h.isEqual(r[s], e = t[s])) continue;
        (i || (i = {}))[s] = e;
      }
      return i;
    },
    previous: function(t) {
      if (t == null || !this._previousAttributes) return null;
      return this._previousAttributes[t];
    },
    previousAttributes: function() {
      return h.clone(this._previousAttributes);
    },
    fetch: function(t) {
      t = t ? h.clone(t): {};
      if (t.parse === void 0) t.parse = true;
      var e = this;
      var i = t.success;
      t.success = function(r) {
        if (!e.set(e.parse(r, t), t)) return false;
        if (i) i(e, r, t);
        e.trigger("sync", e, r, t);
      };
      M(this, t);
      return this.sync("read", this, t);
    },
    save: function(t, e, i) {
      var r, s, n, a = this.attributes;
      if (t == null || typeof t === "object") {
        r = t;
        i = e;
      } else {
        (r = {})[t] = e;
      }
      i = h.extend({validate: true}, i);
      if (r && !i.wait) {
        if (!this.set(r, i)) return false;
      } else {
        if (!this._validate(r, i)) return false;
      }
      if (r && i.wait) {
        this.attributes = h.extend({}, a, r);
      }
      if (i.parse === void 0) i.parse = true;
      var o = this;
      var u = i.success;
      i.success = function(t) {
        o.attributes = a;
        var e = o.parse(t, i);
        if (i.wait) e = h.extend(r || {}, e);
        if (h.isObject(e) && !o.set(e, i)) {
          return false;
        }
        if (u) u(o, t, i);
        o.trigger("sync", o, t, i);
      };
      M(this, i);
      s = this.isNew() ? "create": i.patch ? "patch": "update";
      if (s === "patch") i.attrs = r;
      n = this.sync(s, this, i);
      if (r && i.wait) this.attributes = a;
      return n;
    },
    destroy: function(t) {
      t = t ? h.clone(t): {};
      var e = this;
      var i = t.success;
      var r = function() {
        e.trigger("destroy", e, e.collection, t);
      };
      t.success = function(s) {
        if (t.wait || e.isNew()) r();
        if (i) i(e, s, t);
        if (!e.isNew()) e.trigger("sync", e, s, t);
      };
      if (this.isNew()) {
        t.success();
        return false;
      }
      M(this, t);
      var s = this.sync("delete", this, t);
      if (!t.wait) r();
      return s;
    },
    url: function() {
      var t = h.result(this, "urlRoot") || h.result(this.collection, "url") || U();
      if (this.isNew()) return t;
      return t + (t.charAt(t.length - 1) === "/" ? "": "/") + encodeURIComponent(this.id);
    },
    parse: function(t, e) {
      return t;
    },
    clone: function() {
      return new this.constructor(this.attributes);
    },
    isNew: function() {
      return this.id == null;
    },
    isValid: function(t) {
      return this._validate({}, h.extend(t || {}, {validate: true}));
    },
    _validate: function(t, e) {
      if (!e.validate || !this.validate) return true;
      t = h.extend({}, this.attributes, t);
      var i = this.validationError = this.validate(t, e) || null;
      if (!i) return true;
      this.trigger("invalid", this, i, h.extend(e, {validationError: i}));
      return false;
    }
  });
  var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
  h.each(p, function(t) {
    d.prototype[t] = function() {
      var e = s.call(arguments);
      e.unshift(this.attributes);
      return h[t].apply(h, e);
    };
  });
  var v = a.Collection = function(t, e) {
    e || (e = {});
    if (e.model) this.model = e.model;
    if (e.comparator !== void 0) this.comparator = e.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (t) this.reset(t, h.extend({silent: true}, e));
  };
  var g = {
    add: true,
    remove: true,
    merge: true
  };
  var m = {
    add: true,
    remove: false
  };
  h.extend(v.prototype, o, {
    model: d,
    initialize: function() {},
    toJSON: function(t) {
      return this.map(function(e) {
        return e.toJSON(t);
      });
    },
    sync: function() {
      return a.sync.apply(this, arguments);
    },
    add: function(t, e) {
      return this.set(t, h.extend({merge: false}, e, m));
    },
    remove: function(t, e) {
      var i = !h.isArray(t);
      t = i ? [t]: h.clone(t);
      e || (e = {});
      var r, s, n, a;
      for (r = 0, s = t.length; r < s; r++) {
        a = t[r] = this.get(t[r]);
        if (!a) continue;
        delete this._byId[a.id];
        delete this._byId[a.cid];
        n = this.indexOf(a);
        this.models.splice(n, 1);
        this.length--;
        if (!e.silent) {
          e.index = n;
          a.trigger("remove", a, this, e);
        }
        this._removeReference(a);
      }
      return i ? t[0]: t;
    },
    set: function(t, e) {
      e = h.defaults({}, e, g);
      if (e.parse) t = this.parse(t, e);
      var i = !h.isArray(t);
      t = i ? t ? [t]: []: h.clone(t);
      var r, s, n, a, o, u, l;
      var c = e.at;
      var f = this.model;
      var p = this.comparator && c == null && e.sort !== false;
      var v = h.isString(this.comparator) ? this.comparator: null;
      var m = [], y = [], _ = {};
      var w = e.add, b = e.merge, x = e.remove;
      var E = !p && w && x ? []: false;
      for (r = 0, s = t.length; r < s; r++) {
        o = t[r];
        if (o instanceof d) {
          n = a = o;
        } else {
          n = o[f.prototype.idAttribute];
        }
        if (u = this.get(n)) {
          if (x) _[u.cid] = true;
          if (b) {
            o = o === a ? a.attributes: o;
            if (e.parse) o = u.parse(o, e);
            u.set(o, e);
            if (p && !l && u.hasChanged(v)) l = true;
          }
          t[r] = u;
        } else if (w) {
          a = t[r] = this._prepareModel(o, e);
          if (!a) continue;
          m.push(a);
          a.on("all", this._onModelEvent, this);
          this._byId[a.cid] = a;
          if (a.id != null) this._byId[a.id] = a;
        }
        if (E) E.push(u || a);
      }
      if (x) {
        for (r = 0, s = this.length; r < s; ++r) {
          if (!_[(a = this.models[r]).cid]) y.push(a);
        }
        if (y.length) this.remove(y, e);
      }
      if (m.length || E && E.length) {
        if (p) l = true;
        this.length += m.length;
        if (c != null) {
          for (r = 0, s = m.length; r < s; r++) {
            this.models.splice(c + r, 0, m[r]);
          }
        } else {
          if (E) this.models.length = 0;
          var T = E || m;
          for (r = 0, s = T.length; r < s; r++) {
            this.models.push(T[r]);
          }
        }
      }
      if (l) this.sort({silent: true});
      if (!e.silent) {
        for (r = 0, s = m.length; r < s; r++) {
          (a = m[r]).trigger("add", a, this, e);
        }
        if (l || E && E.length) this.trigger("sort", this, e);
      }
      return i ? t[0]: t;
    },
    reset: function(t, e) {
      e || (e = {});
      for (var i = 0, r = this.models.length; i < r; i++) {
        this._removeReference(this.models[i]);
      }
      e.previousModels = this.models;
      this._reset();
      t = this.add(t, h.extend({silent: true}, e));
      if (!e.silent) this.trigger("reset", this, e);
      return t;
    },
    push: function(t, e) {
      return this.add(t, h.extend({at: this.length}, e));
    },
    pop: function(t) {
      var e = this.at(this.length - 1);
      this.remove(e, t);
      return e;
    },
    unshift: function(t, e) {
      return this.add(t, h.extend({at: 0}, e));
    },
    shift: function(t) {
      var e = this.at(0);
      this.remove(e, t);
      return e;
    },
    slice: function() {
      return s.apply(this.models, arguments);
    },
    get: function(t) {
      if (t == null) return void 0;
      return this._byId[t.id] || this._byId[t.cid] || this._byId[t];
    },
    at: function(t) {
      return this.models[t];
    },
    where: function(t, e) {
      if (h.isEmpty(t)) return e ? void 0: [];
      return this[e ? "find": "filter"](function(e) {
        for (var i in t) {
          if (t[i] !== e.get(i)) return false;
        }
        return true;
      });
    },
    findWhere: function(t) {
      return this.where(t, true);
    },
    sort: function(t) {
      if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
      t || (t = {});
      if (h.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(h.bind(this.comparator, this));
      }
      if (!t.silent) this.trigger("sort", this, t);
      return this;
    },
    pluck: function(t) {
      return h.invoke(this.models, "get", t);
    },
    fetch: function(t) {
      t = t ? h.clone(t): {};
      if (t.parse === void 0) t.parse = true;
      var e = t.success;
      var i = this;
      t.success = function(r) {
        var s = t.reset ? "reset": "set";
        i[s](r, t);
        if (e) e(i, r, t);
        i.trigger("sync", i, r, t);
      };
      M(this, t);
      return this.sync("read", this, t);
    },
    create: function(t, e) {
      e = e ? h.clone(e): {};
      if (!(t = this._prepareModel(t, e))) return false;
      if (!e.wait) this.add(t, e);
      var i = this;
      var r = e.success;
      e.success = function(t, e, s) {
        if (s.wait) i.add(t, s);
        if (r) r(t, e, s);
      };
      t.save(null, e);
      return t;
    },
    parse: function(t, e) {
      return t;
    },
    clone: function() {
      return new this.constructor(this.models);
    },
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId = {};
    },
    _prepareModel: function(t, e) {
      if (t instanceof d) {
        if (!t.collection) t.collection = this;
        return t;
      }
      e = e ? h.clone(e): {};
      e.collection = this;
      var i = new this.model(t, e);
      if (!i.validationError) return i;
      this.trigger("invalid", this, i.validationError, e);
      return false;
    },
    _removeReference: function(t) {
      if (this === t.collection) delete t.collection;
      t.off("all", this._onModelEvent, this);
    },
    _onModelEvent: function(t, e, i, r) {
      if ((t === "add" || t === "remove") && i !== this) return;
      if (t === "destroy") this.remove(e, r);
      if (e && t === "change:" + e.idAttribute) {
        delete this._byId[e.previous(e.idAttribute)];
        if (e.id != null) this._byId[e.id] = e;
      }
      this.trigger.apply(this, arguments);
    }
  });
  var y = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
  h.each(y, function(t) {
    v.prototype[t] = function() {
      var e = s.call(arguments);
      e.unshift(this.models);
      return h[t].apply(h, e);
    };
  });
  var _ = ["groupBy", "countBy", "sortBy"];
  h.each(_, function(t) {
    v.prototype[t] = function(e, i) {
      var r = h.isFunction(e) ? e: function(t) {
        return t.get(e);
      };
      return h[t](this.models, r, i);
    };
  });
  var w = a.View = function(t) {
    this.cid = h.uniqueId("view");
    t || (t = {});
    h.extend(this, h.pick(t, x));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };
  var b = /^(\S+)\s*(.*)$/;
  var x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
  h.extend(w.prototype, o, {
    tagName: "div",
    $: function(t) {
      return this.$el.find(t);
    },
    initialize: function() {},
    render: function() {
      return this;
    },
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },
    setElement: function(t, e) {
      if (this.$el) this.undelegateEvents();
      this.$el = t instanceof a.$ ? t: a.$(t);
      this.el = this.$el[0];
      if (e !== false) this.delegateEvents();
      return this;
    },
    delegateEvents: function(t) {
      if (!(t || (t = h.result(this, "events")))) return this;
      this.undelegateEvents();
      for (var e in t) {
        var i = t[e];
        if (!h.isFunction(i)) i = this[t[e]];
        if (!i) continue;
        var r = e.match(b);
        var s = r[1], n = r[2];
        i = h.bind(i, this);
        s += ".delegateEvents" + this.cid;
        if (n === "") {
          this.$el.on(s, i);
        } else {
          this.$el.on(s, n, i);
        }
      }
      return this;
    },
    undelegateEvents: function() {
      this.$el.off(".delegateEvents" + this.cid);
      return this;
    },
    _ensureElement: function() {
      if (!this.el) {
        var t = h.extend({}, h.result(this, "attributes"));
        if (this.id) t.id = h.result(this, "id");
        if (this.className) t["class"] = h.result(this, "className");
        var e = a.$("<" + h.result(this, "tagName") + ">").attr(t);
        this.setElement(e, false);
      } else {
        this.setElement(h.result(this, "el"), false);
      }
    }
  });
  a.sync = function(t, e, i) {
    var r = T[t];
    h.defaults(i || (i = {}), {
      emulateHTTP: a.emulateHTTP,
      emulateJSON: a.emulateJSON
    });
    var s = {
      type: r,
      dataType: "json"
    };
    if (!i.url) {
      s.url = h.result(e, "url") || U();
    }
    if (i.data == null && e && (t === "create" || t === "update" || t === "patch")) {
      s.contentType = "application/json";
      s.data = JSON.stringify(i.attrs || e.toJSON(i));
    }
    if (i.emulateJSON) {
      s.contentType = "application/x-www-form-urlencoded";
      s.data = s.data ? {model: s.data}: {};
    }
    if (i.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
      s.type = "POST";
      if (i.emulateJSON) s.data._method = r;
      var n = i.beforeSend;
      i.beforeSend = function(t) {
        t.setRequestHeader("X-HTTP-Method-Override", r);
        if (n) return n.apply(this, arguments);
      };
    }
    if (s.type !== "GET" && !i.emulateJSON) {
      s.processData = false;
    }
    if (s.type === "PATCH" && E) {
      s.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }
    var o = i.xhr = a.ajax(h.extend(s, i));
    e.trigger("request", e, o, i);
    return o;
  };
  var E = typeof window !== "undefined" && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
  var T = {
    create: "POST",
    update: "PUT",
    patch: "PATCH",
    "delete": "DELETE",
    read: "GET"
  };
  a.ajax = function() {
    return a.$.ajax.apply(a.$, arguments);
  };
  var k = a.Router = function(t) {
    t || (t = {});
    if (t.routes) this.routes = t.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };
  var S = /\((.*?)\)/g;
  var $ = /(\(\?)?:\w+/g;
  var H = /\*\w+/g;
  var A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  h.extend(k.prototype, o, {
    initialize: function() {},
    route: function(t, e, i) {
      if (!h.isRegExp(t)) t = this._routeToRegExp(t);
      if (h.isFunction(e)) {
        i = e;
        e = "";
      }
      if (!i) i = this[e];
      var r = this;
      a.history.route(t, function(s) {
        var n = r._extractParameters(t, s);
        i && i.apply(r, n);
        r.trigger.apply(r, ["route:" + e].concat(n));
        r.trigger("route", e, n);
        a.history.trigger("route", r, e, n);
      });
      return this;
    },
    navigate: function(t, e) {
      a.history.navigate(t, e);
      return this;
    },
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = h.result(this, "routes");
      var t, e = h.keys(this.routes);
      while ((t = e.pop()) != null) {
        this.route(t, this.routes[t]);
      }
    },
    _routeToRegExp: function(t) {
      t = t.replace(A, "\\$&").replace(S, "(?:$1)?").replace($, function(t, e) {
        return e ? t: "([^/]+)";
      }).replace(H, "(.*?)");
      return new RegExp("^" + t + "$");
    },
    _extractParameters: function(t, e) {
      var i = t.exec(e).slice(1);
      return h.map(i, function(t) {
        return t ? decodeURIComponent(t): null;
      });
    }
  });
  var I = a.History = function() {
    this.handlers = [];
    h.bindAll(this, "checkUrl");
    if (typeof window !== "undefined") {
      this.location = window.location;
      this.history = window.history;
    }
  };
  var N = /^[#\/]|\s+$/g;
  var O = /^\/+|\/+$/g;
  var P = /msie [\w.]+/;
  var C = /\/$/;
  var j = /[?#].*$/;
  I.started = false;
  h.extend(I.prototype, o, {
    interval: 50,
    getHash: function(t) {
      var e = (t || this).location.href.match(/#(.*)$/);
      return e ? e[1]: "";
    },
    getFragment: function(t, e) {
      if (t == null) {
        if (this._hasPushState || !this._wantsHashChange || e) {
          t = this.location.pathname;
          var i = this.root.replace(C, "");
          if (!t.indexOf(i)) t = t.slice(i.length);
        } else {
          t = this.getHash();
        }
      }
      return t.replace(N, "");
    },
    start: function(t) {
      if (I.started) throw new Error("Backbone.history has already been started");
      I.started = true;
      this.options = h.extend({root: "/"}, this.options, t);
      this.root = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
      var e = this.getFragment();
      var i = document.documentMode;
      var r = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
      this.root = ("/" + this.root + "/").replace(O, "/");
      if (r && this._wantsHashChange) {
        this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
        this.navigate(e);
      }
      if (this._hasPushState) {
        a.$(window).on("popstate", this.checkUrl);
      } else if (this._wantsHashChange && "onhashchange"in window && !r) {
        a.$(window).on("hashchange", this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }
      this.fragment = e;
      var s = this.location;
      var n = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
      if (this._wantsHashChange && this._wantsPushState) {
        if (!this._hasPushState && !n) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + this.location.search + "#" + this.fragment);
          return true;
        } else if (this._hasPushState && n && s.hash) {
          this.fragment = this.getHash().replace(N, "");
          this.history.replaceState({}, document.title, this.root + this.fragment + s.search);
        }
      }
      if (!this.options.silent) return this.loadUrl();
    },
    stop: function() {
      a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
      clearInterval(this._checkUrlInterval);
      I.started = false;
    },
    route: function(t, e) {
      this.handlers.unshift({
        route: t,
        callback: e
      });
    },
    checkUrl: function(t) {
      var e = this.getFragment();
      if (e === this.fragment && this.iframe) {
        e = this.getFragment(this.getHash(this.iframe));
      }
      if (e === this.fragment) return false;
      if (this.iframe) this.navigate(e);
      this.loadUrl();
    },
    loadUrl: function(t) {
      t = this.fragment = this.getFragment(t);
      return h.any(this.handlers, function(e) {
        if (e.route.test(t)) {
          e.callback(t);
          return true;
        }
      });
    },
    navigate: function(t, e) {
      if (!I.started) return false;
      if (!e || e === true) e = {trigger: !!e};
      var i = this.root + (t = this.getFragment(t || ""));
      t = t.replace(j, "");
      if (this.fragment === t) return;
      this.fragment = t;
      if (t === "" && i !== "/") i = i.slice(0, - 1);
      if (this._hasPushState) {
        this.history[e.replace ? "replaceState": "pushState"]({}, document.title, i);
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, t, e.replace);
        if (this.iframe && t !== this.getFragment(this.getHash(this.iframe))) {
          if (!e.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, t, e.replace);
        }
      } else {
        return this.location.assign(i);
      }
      if (e.trigger) return this.loadUrl(t);
    },
    _updateHash: function(t, e, i) {
      if (i) {
        var r = t.href.replace(/(javascript:|#).*$/, "");
        t.replace(r + "#" + e);
      } else {
        t.hash = "#" + e;
      }
    }
  });
  a.history = new I;
  var R = function(t, e) {
    var i = this;
    var r;
    if (t && h.has(t, "constructor")) {
      r = t.constructor;
    } else {
      r = function() {
        return i.apply(this, arguments);
      };
    }
    h.extend(r, i, e);
    var s = function() {
      this.constructor = r;
    };
    s.prototype = i.prototype;
    r.prototype = new s;
    if (t) h.extend(r.prototype, t);
    r.__super__ = i.prototype;
    return r;
  };
  d.extend = v.extend = k.extend = w.extend = I.extend = R;
  var U = function() {
    throw new Error('A "url" property or function must be specified');
  };
  var M = function(t, e) {
    var i = e.error;
    e.error = function(r) {
      if (i) i(t, r, e);
      t.trigger("error", t, r, e);
    };
  };
}).call(this);
window.JSZip = (function() {
  var JSZip = function(data, options) {
    this.files = {};
    this.root = "";
    if (data) {
      this.load(data, options);
    }
  };
  JSZip.signature = {
    LOCAL_FILE_HEADER: "\x50\x4b\x03\x04",
    CENTRAL_FILE_HEADER: "\x50\x4b\x01\x02",
    CENTRAL_DIRECTORY_END: "\x50\x4b\x05\x06",
    ZIP64_CENTRAL_DIRECTORY_LOCATOR: "\x50\x4b\x06\x07",
    ZIP64_CENTRAL_DIRECTORY_END: "\x50\x4b\x06\x06",
    DATA_DESCRIPTOR: "\x50\x4b\x07\x08"
  };
  JSZip.defaults = {
    base64: false,
    binary: false,
    dir: false,
    date: null,
    compression: null
  };
  JSZip.prototype = (function() {
    var ZipObject = function(name, data, options) {
      this.name = name;
      this.data = data;
      this.options = options;
    };
    ZipObject.prototype = {
      asText: function() {
        var result = this.data;
        if (result === null || typeof result === "undefined") {
          return "";
        }
        if (this.options.base64) {
          result = JSZipBase64.decode(result);
        }
        if (this.options.binary) {
          result = JSZip.prototype.utf8decode(result);
        }
        return result;
      },
      asBinary: function() {
        var result = this.data;
        if (result === null || typeof result === "undefined") {
          return "";
        }
        if (this.options.base64) {
          result = JSZipBase64.decode(result);
        }
        if (!this.options.binary) {
          result = JSZip.prototype.utf8encode(result);
        }
        return result;
      },
      asUint8Array: function() {
        return JSZip.utils.string2Uint8Array(this.asBinary());
      },
      asArrayBuffer: function() {
        return JSZip.utils.string2Uint8Array(this.asBinary()).buffer;
      }
    };
    var decToHex = function(dec, bytes) {
      var hex = "", i;
      for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
      }
      return hex;
    };
    var extend = function() {
      var result = {}, i, attr;
      for (i = 0; i < arguments.length; i++) {
        for (attr in arguments[i]) {
          if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
            result[attr] = arguments[i][attr];
          }
        }
      }
      return result;
    };
    var prepareFileAttrs = function(o) {
      o = o || {};
      if (o.base64 === true && o.binary == null) {
        o.binary = true;
      }
      o = extend(o, JSZip.defaults);
      o.date = o.date || new Date();
      if (o.compression !== null) o.compression = o.compression.toUpperCase();
      return o;
    };
    var fileAdd = function(name, data, o) {
      var parent = parentFolder(name);
      if (parent) {
        folderAdd.call(this, parent);
      }
      o = prepareFileAttrs(o);
      if (o.dir || data === null || typeof data === "undefined") {
        o.base64 = false;
        o.binary = false;
        data = null;
      } else if (JSZip.support.uint8array && data instanceof Uint8Array) {
        o.base64 = false;
        o.binary = true;
        data = JSZip.utils.uint8Array2String(data);
      } else if (JSZip.support.arraybuffer && data instanceof ArrayBuffer) {
        o.base64 = false;
        o.binary = true;
        var bufferView = new Uint8Array(data);
        data = JSZip.utils.uint8Array2String(bufferView);
      } else if (o.binary && !o.base64) {
        if (o.optimizedBinaryString !== true) {
          data = JSZip.utils.string2binary(data);
        }
        delete o.optimizedBinaryString;
      }
      return this.files[name] = new ZipObject(name, data, o);
    };
    var parentFolder = function(path) {
      if (path.slice(- 1) == '/') {
        path = path.substring(0, path.length - 1);
      }
      var lastSlash = path.lastIndexOf('/');
      return (lastSlash > 0) ? path.substring(0, lastSlash): "";
    };
    var folderAdd = function(name) {
      if (name.slice(- 1) != "/") {
        name += "/";
      }
      if (!this.files[name]) {
        var parent = parentFolder(name);
        if (parent) {
          folderAdd.call(this, parent);
        }
        fileAdd.call(this, name, null, {dir: true});
      }
      return this.files[name];
    };
    var prepareLocalHeaderData = function(file, utfEncodedFileName, compressionType) {
      var useUTF8 = utfEncodedFileName !== file.name, data = file.asBinary(), o = file.options, dosTime, dosDate;
      dosTime = o.date.getHours();
      dosTime = dosTime << 6;
      dosTime = dosTime | o.date.getMinutes();
      dosTime = dosTime << 5;
      dosTime = dosTime | o.date.getSeconds() / 2;
      dosDate = o.date.getFullYear() - 1980;
      dosDate = dosDate << 4;
      dosDate = dosDate | (o.date.getMonth() + 1);
      dosDate = dosDate << 5;
      dosDate = dosDate | o.date.getDate();
      var hasData = data !== null && data.length !== 0;
      compressionType = o.compression || compressionType;
      if (!JSZip.compressions[compressionType]) {
        throw compressionType + " is not a valid compression method !";
      }
      var compression = JSZip.compressions[compressionType];
      var compressedData = hasData ? compression.compress(data): '';
      var header = "";
      header += "\x0A\x00";
      header += useUTF8 ? "\x00\x08": "\x00\x00";
      header += hasData ? compression.magic: JSZip.compressions['STORE'].magic;
      header += decToHex(dosTime, 2);
      header += decToHex(dosDate, 2);
      header += hasData ? decToHex(this.crc32(data), 4): '\x00\x00\x00\x00';
      header += hasData ? decToHex(compressedData.length, 4): '\x00\x00\x00\x00';
      header += hasData ? decToHex(data.length, 4): '\x00\x00\x00\x00';
      header += decToHex(utfEncodedFileName.length, 2);
      header += "\x00\x00";
      return {
        header: header,
        compressedData: compressedData
      };
    };
    return {
      load: function(stream, options) {
        throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
      },
      filter: function(search) {
        var result = [], filename, relativePath, file, fileClone;
        for (filename in this.files) {
          if (!this.files.hasOwnProperty(filename)) {
            continue;
          }
          file = this.files[filename];
          fileClone = new ZipObject(file.name, file.data, extend(file.options));
          relativePath = filename.slice(this.root.length, filename.length);
          if (filename.slice(0, this.root.length) === this.root && search(relativePath, fileClone)) {
            result.push(fileClone);
          }
        }
        return result;
      },
      file: function(name, data, o) {
        if (arguments.length === 1) {
          if (name instanceof RegExp) {
            var regexp = name;
            return this.filter(function(relativePath, file) {
              return !file.options.dir && regexp.test(relativePath);
            });
          } else {
            return this.filter(function(relativePath, file) {
              return !file.options.dir && relativePath === name;
            })[0] || null;
          }
        } else {
          name = this.root + name;
          fileAdd.call(this, name, data, o);
        }
        return this;
      },
      folder: function(arg) {
        if (!arg) {
          return this;
        }
        if (arg instanceof RegExp) {
          return this.filter(function(relativePath, file) {
            return file.options.dir && arg.test(relativePath);
          });
        }
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
      },
      remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
          if (name.slice(- 1) != "/") {
            name += "/";
          }
          file = this.files[name];
        }
        if (file) {
          if (!file.options.dir) {
            delete this.files[name];
          } else {
            var kids = this.filter(function(relativePath, file) {
              return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i < kids.length; i++) {
              delete this.files[kids[i].name];
            }
          }
        }
        return this;
      },
      generate: function(options) {
        options = extend(options || {}, {
          base64: true,
          compression: "STORE",
          type: "base64"
        });
        var compression = options.compression.toUpperCase();
        if (!JSZip.compressions[compression]) {
          throw compression + " is not a valid compression method !";
        }
        var directory = [], files = [], fileOffset = 0;
        for (var name in this.files) {
          if (!this.files.hasOwnProperty(name)) {
            continue;
          }
          var file = this.files[name];
          var utfEncodedFileName = this.utf8encode(file.name);
          var fileRecord = "", dirRecord = "", data = prepareLocalHeaderData.call(this, file, utfEncodedFileName, compression);
          fileRecord = JSZip.signature.LOCAL_FILE_HEADER + data.header + utfEncodedFileName + data.compressedData;
          dirRecord = JSZip.signature.CENTRAL_FILE_HEADER + "\x14\x00" + data.header + "\x00\x00" + "\x00\x00" + "\x00\x00" + (this.files[name].options.dir === true ? "\x10\x00\x00\x00": "\x00\x00\x00\x00") + decToHex(fileOffset, 4) + utfEncodedFileName;
          fileOffset += fileRecord.length;
          files.push(fileRecord);
          directory.push(dirRecord);
        }
        var fileData = files.join("");
        var dirData = directory.join("");
        var dirEnd = "";
        dirEnd = JSZip.signature.CENTRAL_DIRECTORY_END + "\x00\x00" + "\x00\x00" + decToHex(files.length, 2) + decToHex(files.length, 2) + decToHex(dirData.length, 4) + decToHex(fileData.length, 4) + "\x00\x00";
        var zip = fileData + dirData + dirEnd;
        switch (options.type.toLowerCase()) {
          case "uint8array":
            return JSZip.utils.string2Uint8Array(zip);
          case "arraybuffer":
            return JSZip.utils.string2Uint8Array(zip).buffer;
          case "blob":
            return JSZip.utils.string2Blob(zip);
          case "base64":
            return (options.base64) ? JSZipBase64.encode(zip): zip;
          default:
            return zip;
        }
      },
      crc32: function(str, crc) {
        if (str === "" || typeof str === "undefined") {
          return 0;
        }
        var table = [0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D];
        if (typeof (crc) == "undefined") {
          crc = 0;
        }
        var x = 0;
        var y = 0;
        crc = crc^(- 1);
        for (var i = 0, iTop = str.length; i < iTop; i++) {
          y = (crc^str.charCodeAt(i)) & 0xFF;
          x = table[y];
          crc = (crc >>> 8)^x;
        }
        return crc^(- 1);
      },
      clone: function() {
        var newObj = new JSZip();
        for (var i in this) {
          if (typeof this[i] !== "function") {
            newObj[i] = this[i];
          }
        }
        return newObj;
      },
      utf8encode: function(string) {
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);
          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
          } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
          }
        }
        return utftext;
      },
      utf8decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = 0, c1 = 0, c2 = 0, c3 = 0;
        while (i < utftext.length) {
          c = utftext.charCodeAt(i);
          if (c < 128) {
            string += String.fromCharCode(c);
            i++;
          } else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
          } else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
          }
        }
        return string;
      }
    };
  }());
  JSZip.compressions = {"STORE": {
      magic: "\x00\x00",
      compress: function(content) {
        return content;
      },
      uncompress: function(content) {
        return content;
      }
    }};
  JSZip.support = {
    arraybuffer: (function() {
      return typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
    })(),
    uint8array: (function() {
      return typeof Uint8Array !== "undefined";
    })(),
    blob: (function() {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      var buffer = new ArrayBuffer(0);
      try {
        return new Blob([buffer], {type: "application/zip"}).size === 0;
      } catch (e) {}
      try {
        var builder = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
        builder.append(buffer);
        return builder.getBlob('application/zip').size === 0;
      } catch (e) {}
      return false;
    })()
  };
  JSZip.utils = {
    string2binary: function(str) {
      var result = "";
      for (var i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) & 0xff);
      }
      return result;
    },
    string2Uint8Array: function(str) {
      if (!JSZip.support.uint8array) {
        throw new Error("Uint8Array is not supported by this browser");
      }
      var buffer = new ArrayBuffer(str.length);
      var bufferView = new Uint8Array(buffer);
      for (var i = 0; i < str.length; i++) {
        bufferView[i] = str.charCodeAt(i);
      }
      return bufferView;
    },
    uint8Array2String: function(array) {
      if (!JSZip.support.uint8array) {
        throw new Error("Uint8Array is not supported by this browser");
      }
      var result = "";
      for (var i = 0; i < array.length; i++) {
        result += String.fromCharCode(array[i]);
      }
      return result;
    },
    string2Blob: function(str) {
      if (!JSZip.support.blob) {
        throw new Error("Blob is not supported by this browser");
      }
      var buffer = JSZip.utils.string2Uint8Array(str).buffer;
      try {
        return new Blob([buffer], {type: "application/zip"});
      } catch (e) {}
      try {
        var builder = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
        builder.append(buffer);
        return builder.getBlob('application/zip');
      } catch (e) {}
      throw new Error("Bug : can't construct the Blob.");
    }
  };
  var JSZipBase64 = (function() {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return {
      encode: function(input, utf8) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        while (i < input.length) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;
          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }
          output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
      },
      decode: function(input, utf8) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
          enc1 = _keyStr.indexOf(input.charAt(i++));
          enc2 = _keyStr.indexOf(input.charAt(i++));
          enc3 = _keyStr.indexOf(input.charAt(i++));
          enc4 = _keyStr.indexOf(input.charAt(i++));
          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;
          output = output + String.fromCharCode(chr1);
          if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
          }
        }
        return output;
      }
    };
  }());
  return JSZip;
}());
if (!JSZip) {
  throw "JSZip not defined";
}
(function() {
  var zip_fixed_bd;
  var zip_WSIZE = 32768;
  var zip_STORED_BLOCK = 0;
  var zip_STATIC_TREES = 1;
  var zip_DYN_TREES = 2;
  var zip_lbits = 9;
  var zip_dbits = 6;
  var zip_INBUFSIZ = 32768;
  var zip_INBUF_EXTRA = 64;
  var zip_slide;
  var zip_wp;
  var zip_fixed_tl = null;
  var zip_fixed_td;
  var zip_fixed_bl, fixed_bd;
  var zip_bit_buf;
  var zip_bit_len;
  var zip_method;
  var zip_eof;
  var zip_copy_leng;
  var zip_copy_dist;
  var zip_tl, zip_td;
  var zip_bl, zip_bd;
  var zip_inflate_data;
  var zip_inflate_pos;
  var zip_MASK_BITS = new Array(0x0000, 0x0001, 0x0003, 0x0007, 0x000f, 0x001f, 0x003f, 0x007f, 0x00ff, 0x01ff, 0x03ff, 0x07ff, 0x0fff, 0x1fff, 0x3fff, 0x7fff, 0xffff);
  var zip_cplens = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
  var zip_cplext = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99);
  var zip_cpdist = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577);
  var zip_cpdext = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
  var zip_border = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
  function zip_HuftList() {
    this.next = null;
    this.list = null;
  }
  function zip_HuftNode() {
    this.e = 0;
    this.b = 0;
    this.n = 0;
    this.t = null;
  }
  function zip_HuftBuild(b, n, s, d, e, mm) {
    this.BMAX = 16;
    this.N_MAX = 288;
    this.status = 0;
    this.root = null;
    this.m = 0;
    {
      var a;
      var c = new Array(this.BMAX + 1);
      var el;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k;
      var lx = new Array(this.BMAX + 1);
      var p;
      var pidx;
      var q;
      var r = new zip_HuftNode();
      var u = new Array(this.BMAX);
      var v = new Array(this.N_MAX);
      var w;
      var x = new Array(this.BMAX + 1);
      var xp;
      var y;
      var z;
      var o;
      var tail;
      tail = this.root = null;
      for (i = 0; i < c.length; i++) c[i] = 0;
      for (i = 0; i < lx.length; i++) lx[i] = 0;
      for (i = 0; i < u.length; i++) u[i] = null;
      for (i = 0; i < v.length; i++) v[i] = 0;
      for (i = 0; i < x.length; i++) x[i] = 0;
      el = n > 256 ? b[256]: this.BMAX;
      p = b;
      pidx = 0;
      i = n;
      do {
        c[p[pidx]]++;
        pidx++;
      } while (--i > 0);
      if (c[0] == n) {
        this.root = null;
        this.m = 0;
        this.status = 0;
        return;
      }
      for (j = 1; j <= this.BMAX; j++) if (c[j] != 0) break;
      k = j;
      if (mm < j) mm = j;
      for (i = this.BMAX; i != 0; i--) if (c[i] != 0) break;
      g = i;
      if (mm > i) mm = i;
      for (y = 1 << j; j < i; j++, y <<= 1) if ((y -= c[j]) < 0) {
        this.status = 2;
        this.m = mm;
        return;
      }
      if ((y -= c[i]) < 0) {
        this.status = 2;
        this.m = mm;
        return;
      }
      c[i] += y;
      x[1] = j = 0;
      p = c;
      pidx = 1;
      xp = 2;
      while (--i > 0) x[xp++] = (j += p[pidx++]);
      p = b;
      pidx = 0;
      i = 0;
      do {
        if ((j = p[pidx++]) != 0) v[x[j]++] = i;
      } while (++i < n);
      n = x[g];
      x[0] = i = 0;
      p = v;
      pidx = 0;
      h = - 1;
      w = lx[0] = 0;
      q = null;
      z = 0;
      for (; k <= g; k++) {
        a = c[k];
        while (a-- > 0) {
          while (k > w + lx[1 + h]) {
            w += lx[1 + h];
            h++;
            z = (z = g - w) > mm ? mm: z;
            if ((f = 1 << (j = k - w)) > a + 1) {
              f -= a + 1;
              xp = k;
              while (++j < z) {
                if ((f <<= 1) <= c[++xp]) break;
                f -= c[xp];
              }
            }
            if (w + j > el && w < el) j = el - w;
            z = 1 << j;
            lx[1 + h] = j;
            q = new Array(z);
            for (o = 0; o < z; o++) {
              q[o] = new zip_HuftNode();
            }
            if (tail == null) tail = this.root = new zip_HuftList(); else tail = tail.next = new zip_HuftList();
            tail.next = null;
            tail.list = q;
            u[h] = q;
            if (h > 0) {
              x[h] = i;
              r.b = lx[h];
              r.e = 16 + j;
              r.t = q;
              j = (i & ((1 << w) - 1)) >> (w - lx[h]);
              u[h - 1][j].e = r.e;
              u[h - 1][j].b = r.b;
              u[h - 1][j].n = r.n;
              u[h - 1][j].t = r.t;
            }
          }
          r.b = k - w;
          if (pidx >= n) r.e = 99; else if (p[pidx] < s) {
            r.e = (p[pidx] < 256 ? 16: 15);
            r.n = p[pidx++];
          } else {
            r.e = e[p[pidx] - s];
            r.n = d[p[pidx++] - s];
          }
          f = 1 << (k - w);
          for (j = i >> w; j < z; j += f) {
            q[j].e = r.e;
            q[j].b = r.b;
            q[j].n = r.n;
            q[j].t = r.t;
          }
          for (j = 1 << (k - 1); (i & j) != 0; j >>= 1) i ^= j;
          i ^= j;
          while ((i & ((1 << w) - 1)) != x[h]) {
            w -= lx[h];
            h--;
          }
        }
      }
      this.m = lx[1];
      this.status = ((y != 0 && g != 1) ? 1: 0);
    }
  }
  function zip_GET_BYTE() {
    if (zip_inflate_data.length == zip_inflate_pos) return - 1;
    return zip_inflate_data.charCodeAt(zip_inflate_pos++) & 0xff;
  }
  function zip_NEEDBITS(n) {
    while (zip_bit_len < n) {
      zip_bit_buf |= zip_GET_BYTE() << zip_bit_len;
      zip_bit_len += 8;
    }
  }
  function zip_GETBITS(n) {
    return zip_bit_buf & zip_MASK_BITS[n];
  }
  function zip_DUMPBITS(n) {
    zip_bit_buf >>= n;
    zip_bit_len -= n;
  }
  function zip_inflate_codes(buff, off, size) {
    var e;
    var t;
    var n;
    if (size == 0) return 0;
    n = 0;
    for (;;) {
      zip_NEEDBITS(zip_bl);
      t = zip_tl.list[zip_GETBITS(zip_bl)];
      e = t.e;
      while (e > 16) {
        if (e == 99) return - 1;
        zip_DUMPBITS(t.b);
        e -= 16;
        zip_NEEDBITS(e);
        t = t.t[zip_GETBITS(e)];
        e = t.e;
      }
      zip_DUMPBITS(t.b);
      if (e == 16) {
        zip_wp &= zip_WSIZE - 1;
        buff[off + n++] = zip_slide[zip_wp++] = t.n;
        if (n == size) return size;
        continue;
      }
      if (e == 15) break;
      zip_NEEDBITS(e);
      zip_copy_leng = t.n + zip_GETBITS(e);
      zip_DUMPBITS(e);
      zip_NEEDBITS(zip_bd);
      t = zip_td.list[zip_GETBITS(zip_bd)];
      e = t.e;
      while (e > 16) {
        if (e == 99) return - 1;
        zip_DUMPBITS(t.b);
        e -= 16;
        zip_NEEDBITS(e);
        t = t.t[zip_GETBITS(e)];
        e = t.e;
      }
      zip_DUMPBITS(t.b);
      zip_NEEDBITS(e);
      zip_copy_dist = zip_wp - t.n - zip_GETBITS(e);
      zip_DUMPBITS(e);
      while (zip_copy_leng > 0 && n < size) {
        zip_copy_leng--;
        zip_copy_dist &= zip_WSIZE - 1;
        zip_wp &= zip_WSIZE - 1;
        buff[off + n++] = zip_slide[zip_wp++] = zip_slide[zip_copy_dist++];
      }
      if (n == size) return size;
    }
    zip_method = - 1;
    return n;
  }
  function zip_inflate_stored(buff, off, size) {
    var n;
    n = zip_bit_len & 7;
    zip_DUMPBITS(n);
    zip_NEEDBITS(16);
    n = zip_GETBITS(16);
    zip_DUMPBITS(16);
    zip_NEEDBITS(16);
    if (n != ((~zip_bit_buf) & 0xffff)) return - 1;
    zip_DUMPBITS(16);
    zip_copy_leng = n;
    n = 0;
    while (zip_copy_leng > 0 && n < size) {
      zip_copy_leng--;
      zip_wp &= zip_WSIZE - 1;
      zip_NEEDBITS(8);
      buff[off + n++] = zip_slide[zip_wp++] = zip_GETBITS(8);
      zip_DUMPBITS(8);
    }
    if (zip_copy_leng == 0) zip_method = - 1;
    return n;
  }
  function zip_inflate_fixed(buff, off, size) {
    if (zip_fixed_tl == null) {
      var i;
      var l = new Array(288);
      var h;
      for (i = 0; i < 144; i++) l[i] = 8;
      for (; i < 256; i++) l[i] = 9;
      for (; i < 280; i++) l[i] = 7;
      for (; i < 288; i++) l[i] = 8;
      zip_fixed_bl = 7;
      h = new zip_HuftBuild(l, 288, 257, zip_cplens, zip_cplext, zip_fixed_bl);
      if (h.status != 0) {
        alert("HufBuild error: " + h.status);
        return - 1;
      }
      zip_fixed_tl = h.root;
      zip_fixed_bl = h.m;
      for (i = 0; i < 30; i++) l[i] = 5;
      zip_fixed_bd = 5;
      h = new zip_HuftBuild(l, 30, 0, zip_cpdist, zip_cpdext, zip_fixed_bd);
      if (h.status > 1) {
        zip_fixed_tl = null;
        alert("HufBuild error: " + h.status);
        return - 1;
      }
      zip_fixed_td = h.root;
      zip_fixed_bd = h.m;
    }
    zip_tl = zip_fixed_tl;
    zip_td = zip_fixed_td;
    zip_bl = zip_fixed_bl;
    zip_bd = zip_fixed_bd;
    return zip_inflate_codes(buff, off, size);
  }
  function zip_inflate_dynamic(buff, off, size) {
    var i;
    var j;
    var l;
    var n;
    var t;
    var nb;
    var nl;
    var nd;
    var ll = new Array(286 + 30);
    var h;
    for (i = 0; i < ll.length; i++) ll[i] = 0;
    zip_NEEDBITS(5);
    nl = 257 + zip_GETBITS(5);
    zip_DUMPBITS(5);
    zip_NEEDBITS(5);
    nd = 1 + zip_GETBITS(5);
    zip_DUMPBITS(5);
    zip_NEEDBITS(4);
    nb = 4 + zip_GETBITS(4);
    zip_DUMPBITS(4);
    if (nl > 286 || nd > 30) return - 1;
    for (j = 0; j < nb; j++) {
      zip_NEEDBITS(3);
      ll[zip_border[j]] = zip_GETBITS(3);
      zip_DUMPBITS(3);
    }
    for (; j < 19; j++) ll[zip_border[j]] = 0;
    zip_bl = 7;
    h = new zip_HuftBuild(ll, 19, 19, null, null, zip_bl);
    if (h.status != 0) return - 1;
    zip_tl = h.root;
    zip_bl = h.m;
    n = nl + nd;
    i = l = 0;
    while (i < n) {
      zip_NEEDBITS(zip_bl);
      t = zip_tl.list[zip_GETBITS(zip_bl)];
      j = t.b;
      zip_DUMPBITS(j);
      j = t.n;
      if (j < 16) ll[i++] = l = j; else if (j == 16) {
        zip_NEEDBITS(2);
        j = 3 + zip_GETBITS(2);
        zip_DUMPBITS(2);
        if (i + j > n) return - 1;
        while (j-- > 0) ll[i++] = l;
      } else if (j == 17) {
        zip_NEEDBITS(3);
        j = 3 + zip_GETBITS(3);
        zip_DUMPBITS(3);
        if (i + j > n) return - 1;
        while (j-- > 0) ll[i++] = 0;
        l = 0;
      } else {
        zip_NEEDBITS(7);
        j = 11 + zip_GETBITS(7);
        zip_DUMPBITS(7);
        if (i + j > n) return - 1;
        while (j-- > 0) ll[i++] = 0;
        l = 0;
      }
    }
    zip_bl = zip_lbits;
    h = new zip_HuftBuild(ll, nl, 257, zip_cplens, zip_cplext, zip_bl);
    if (zip_bl == 0) h.status = 1;
    if (h.status != 0) {
      if (h.status == 1);
      return - 1;
    }
    zip_tl = h.root;
    zip_bl = h.m;
    for (i = 0; i < nd; i++) ll[i] = ll[i + nl];
    zip_bd = zip_dbits;
    h = new zip_HuftBuild(ll, nd, 0, zip_cpdist, zip_cpdext, zip_bd);
    zip_td = h.root;
    zip_bd = h.m;
    if (zip_bd == 0 && nl > 257) {
      return - 1;
    }
    if (h.status == 1) {
      ;
    }
    if (h.status != 0) return - 1;
    return zip_inflate_codes(buff, off, size);
  }
  function zip_inflate_start() {
    var i;
    if (zip_slide == null) zip_slide = new Array(2 * zip_WSIZE);
    zip_wp = 0;
    zip_bit_buf = 0;
    zip_bit_len = 0;
    zip_method = - 1;
    zip_eof = false;
    zip_copy_leng = zip_copy_dist = 0;
    zip_tl = null;
  }
  function zip_inflate_internal(buff, off, size) {
    var n, i;
    n = 0;
    while (n < size) {
      if (zip_eof && zip_method == - 1) return n;
      if (zip_copy_leng > 0) {
        if (zip_method != zip_STORED_BLOCK) {
          while (zip_copy_leng > 0 && n < size) {
            zip_copy_leng--;
            zip_copy_dist &= zip_WSIZE - 1;
            zip_wp &= zip_WSIZE - 1;
            buff[off + n++] = zip_slide[zip_wp++] = zip_slide[zip_copy_dist++];
          }
        } else {
          while (zip_copy_leng > 0 && n < size) {
            zip_copy_leng--;
            zip_wp &= zip_WSIZE - 1;
            zip_NEEDBITS(8);
            buff[off + n++] = zip_slide[zip_wp++] = zip_GETBITS(8);
            zip_DUMPBITS(8);
          }
          if (zip_copy_leng == 0) zip_method = - 1;
        }
        if (n == size) return n;
      }
      if (zip_method == - 1) {
        if (zip_eof) break;
        zip_NEEDBITS(1);
        if (zip_GETBITS(1) != 0) zip_eof = true;
        zip_DUMPBITS(1);
        zip_NEEDBITS(2);
        zip_method = zip_GETBITS(2);
        zip_DUMPBITS(2);
        zip_tl = null;
        zip_copy_leng = 0;
      }
      switch (zip_method) {
        case 0:
          i = zip_inflate_stored(buff, off + n, size - n);
          break;
        case 1:
          if (zip_tl != null) i = zip_inflate_codes(buff, off + n, size - n); else i = zip_inflate_fixed(buff, off + n, size - n);
          break;
        case 2:
          if (zip_tl != null) i = zip_inflate_codes(buff, off + n, size - n); else i = zip_inflate_dynamic(buff, off + n, size - n);
          break;
        default:
          i = - 1;
          break;
      }
      if (i == - 1) {
        if (zip_eof) return 0;
        return - 1;
      }
      n += i;
    }
    return n;
  }
  function zip_inflate(str) {
    var out, buff;
    var i, j;
    zip_inflate_start();
    zip_inflate_data = str;
    zip_inflate_pos = 0;
    buff = new Array(1024);
    out = "";
    while ((i = zip_inflate_internal(buff, 0, buff.length)) > 0) {
      for (j = 0; j < i; j++) out += String.fromCharCode(buff[j]);
    }
    zip_inflate_data = null;
    return out;
  }
  if (!JSZip.compressions["DEFLATE"]) {
    JSZip.compressions["DEFLATE"] = {
      magic: "\x08\x00",
      uncompress: zip_inflate
    };
  } else {
    JSZip.compressions["DEFLATE"].uncompress = zip_inflate;
  }
})();
if (!JSZip) {
  throw "JSZip not defined";
}
(function() {
  var zip_WSIZE = 32768;
  var zip_STORED_BLOCK = 0;
  var zip_STATIC_TREES = 1;
  var zip_DYN_TREES = 2;
  var zip_DEFAULT_LEVEL = 6;
  var zip_FULL_SEARCH = true;
  var zip_INBUFSIZ = 32768;
  var zip_INBUF_EXTRA = 64;
  var zip_OUTBUFSIZ = 1024 * 8;
  var zip_window_size = 2 * zip_WSIZE;
  var zip_MIN_MATCH = 3;
  var zip_MAX_MATCH = 258;
  var zip_BITS = 16;
  var zip_LIT_BUFSIZE = 0x2000;
  var zip_HASH_BITS = 13;
  if (zip_LIT_BUFSIZE > zip_INBUFSIZ) alert("error: zip_INBUFSIZ is too small");
  if ((zip_WSIZE << 1) > (1 << zip_BITS)) alert("error: zip_WSIZE is too large");
  if (zip_HASH_BITS > zip_BITS - 1) alert("error: zip_HASH_BITS is too large");
  if (zip_HASH_BITS < 8 || zip_MAX_MATCH != 258) alert("error: Code too clever");
  var zip_DIST_BUFSIZE = zip_LIT_BUFSIZE;
  var zip_HASH_SIZE = 1 << zip_HASH_BITS;
  var zip_HASH_MASK = zip_HASH_SIZE - 1;
  var zip_WMASK = zip_WSIZE - 1;
  var zip_NIL = 0;
  var zip_TOO_FAR = 4096;
  var zip_MIN_LOOKAHEAD = zip_MAX_MATCH + zip_MIN_MATCH + 1;
  var zip_MAX_DIST = zip_WSIZE - zip_MIN_LOOKAHEAD;
  var zip_SMALLEST = 1;
  var zip_MAX_BITS = 15;
  var zip_MAX_BL_BITS = 7;
  var zip_LENGTH_CODES = 29;
  var zip_LITERALS = 256;
  var zip_END_BLOCK = 256;
  var zip_L_CODES = zip_LITERALS + 1 + zip_LENGTH_CODES;
  var zip_D_CODES = 30;
  var zip_BL_CODES = 19;
  var zip_REP_3_6 = 16;
  var zip_REPZ_3_10 = 17;
  var zip_REPZ_11_138 = 18;
  var zip_HEAP_SIZE = 2 * zip_L_CODES + 1;
  var zip_H_SHIFT = parseInt((zip_HASH_BITS + zip_MIN_MATCH - 1) / zip_MIN_MATCH);
  var zip_free_queue;
  var zip_qhead, zip_qtail;
  var zip_initflag;
  var zip_outbuf = null;
  var zip_outcnt, zip_outoff;
  var zip_complete;
  var zip_window;
  var zip_d_buf;
  var zip_l_buf;
  var zip_prev;
  var zip_bi_buf;
  var zip_bi_valid;
  var zip_block_start;
  var zip_ins_h;
  var zip_hash_head;
  var zip_prev_match;
  var zip_match_available;
  var zip_match_length;
  var zip_prev_length;
  var zip_strstart;
  var zip_match_start;
  var zip_eofile;
  var zip_lookahead;
  var zip_max_chain_length;
  var zip_max_lazy_match;
  var zip_compr_level;
  var zip_good_match;
  var zip_nice_match;
  var zip_dyn_ltree;
  var zip_dyn_dtree;
  var zip_static_ltree;
  var zip_static_dtree;
  var zip_bl_tree;
  var zip_l_desc;
  var zip_d_desc;
  var zip_bl_desc;
  var zip_bl_count;
  var zip_heap;
  var zip_heap_len;
  var zip_heap_max;
  var zip_depth;
  var zip_length_code;
  var zip_dist_code;
  var zip_base_length;
  var zip_base_dist;
  var zip_flag_buf;
  var zip_last_lit;
  var zip_last_dist;
  var zip_last_flags;
  var zip_flags;
  var zip_flag_bit;
  var zip_opt_len;
  var zip_static_len;
  var zip_deflate_data;
  var zip_deflate_pos;
  var zip_DeflateCT = function() {
    this.fc = 0;
    this.dl = 0;
  };
  var zip_DeflateTreeDesc = function() {
    this.dyn_tree = null;
    this.static_tree = null;
    this.extra_bits = null;
    this.extra_base = 0;
    this.elems = 0;
    this.max_length = 0;
    this.max_code = 0;
  };
  var zip_DeflateConfiguration = function(a, b, c, d) {
    this.good_length = a;
    this.max_lazy = b;
    this.nice_length = c;
    this.max_chain = d;
  };
  var zip_DeflateBuffer = function() {
    this.next = null;
    this.len = 0;
    this.ptr = new Array(zip_OUTBUFSIZ);
    this.off = 0;
  };
  var zip_extra_lbits = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0);
  var zip_extra_dbits = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
  var zip_extra_blbits = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7);
  var zip_bl_order = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
  var zip_configuration_table = new Array(new zip_DeflateConfiguration(0, 0, 0, 0), new zip_DeflateConfiguration(4, 4, 8, 4), new zip_DeflateConfiguration(4, 5, 16, 8), new zip_DeflateConfiguration(4, 6, 32, 32), new zip_DeflateConfiguration(4, 4, 16, 16), new zip_DeflateConfiguration(8, 16, 32, 32), new zip_DeflateConfiguration(8, 16, 128, 128), new zip_DeflateConfiguration(8, 32, 128, 256), new zip_DeflateConfiguration(32, 128, 258, 1024), new zip_DeflateConfiguration(32, 258, 258, 4096));
  var zip_deflate_start = function(level) {
    var i;
    if (!level) level = zip_DEFAULT_LEVEL; else if (level < 1) level = 1; else if (level > 9) level = 9;
    zip_compr_level = level;
    zip_initflag = false;
    zip_eofile = false;
    if (zip_outbuf != null) return;
    zip_free_queue = zip_qhead = zip_qtail = null;
    zip_outbuf = new Array(zip_OUTBUFSIZ);
    zip_window = new Array(zip_window_size);
    zip_d_buf = new Array(zip_DIST_BUFSIZE);
    zip_l_buf = new Array(zip_INBUFSIZ + zip_INBUF_EXTRA);
    zip_prev = new Array(1 << zip_BITS);
    zip_dyn_ltree = new Array(zip_HEAP_SIZE);
    for (i = 0; i < zip_HEAP_SIZE; i++) zip_dyn_ltree[i] = new zip_DeflateCT();
    zip_dyn_dtree = new Array(2 * zip_D_CODES + 1);
    for (i = 0; i < 2 * zip_D_CODES + 1; i++) zip_dyn_dtree[i] = new zip_DeflateCT();
    zip_static_ltree = new Array(zip_L_CODES + 2);
    for (i = 0; i < zip_L_CODES + 2; i++) zip_static_ltree[i] = new zip_DeflateCT();
    zip_static_dtree = new Array(zip_D_CODES);
    for (i = 0; i < zip_D_CODES; i++) zip_static_dtree[i] = new zip_DeflateCT();
    zip_bl_tree = new Array(2 * zip_BL_CODES + 1);
    for (i = 0; i < 2 * zip_BL_CODES + 1; i++) zip_bl_tree[i] = new zip_DeflateCT();
    zip_l_desc = new zip_DeflateTreeDesc();
    zip_d_desc = new zip_DeflateTreeDesc();
    zip_bl_desc = new zip_DeflateTreeDesc();
    zip_bl_count = new Array(zip_MAX_BITS + 1);
    zip_heap = new Array(2 * zip_L_CODES + 1);
    zip_depth = new Array(2 * zip_L_CODES + 1);
    zip_length_code = new Array(zip_MAX_MATCH - zip_MIN_MATCH + 1);
    zip_dist_code = new Array(512);
    zip_base_length = new Array(zip_LENGTH_CODES);
    zip_base_dist = new Array(zip_D_CODES);
    zip_flag_buf = new Array(parseInt(zip_LIT_BUFSIZE / 8));
  };
  var zip_deflate_end = function() {
    zip_free_queue = zip_qhead = zip_qtail = null;
    zip_outbuf = null;
    zip_window = null;
    zip_d_buf = null;
    zip_l_buf = null;
    zip_prev = null;
    zip_dyn_ltree = null;
    zip_dyn_dtree = null;
    zip_static_ltree = null;
    zip_static_dtree = null;
    zip_bl_tree = null;
    zip_l_desc = null;
    zip_d_desc = null;
    zip_bl_desc = null;
    zip_bl_count = null;
    zip_heap = null;
    zip_depth = null;
    zip_length_code = null;
    zip_dist_code = null;
    zip_base_length = null;
    zip_base_dist = null;
    zip_flag_buf = null;
  };
  var zip_reuse_queue = function(p) {
    p.next = zip_free_queue;
    zip_free_queue = p;
  };
  var zip_new_queue = function() {
    var p;
    if (zip_free_queue != null) {
      p = zip_free_queue;
      zip_free_queue = zip_free_queue.next;
    } else p = new zip_DeflateBuffer();
    p.next = null;
    p.len = p.off = 0;
    return p;
  };
  var zip_head1 = function(i) {
    return zip_prev[zip_WSIZE + i];
  };
  var zip_head2 = function(i, val) {
    return zip_prev[zip_WSIZE + i] = val;
  };
  var zip_put_byte = function(c) {
    zip_outbuf[zip_outoff + zip_outcnt++] = c;
    if (zip_outoff + zip_outcnt == zip_OUTBUFSIZ) zip_qoutbuf();
  };
  var zip_put_short = function(w) {
    w &= 0xffff;
    if (zip_outoff + zip_outcnt < zip_OUTBUFSIZ - 2) {
      zip_outbuf[zip_outoff + zip_outcnt++] = (w & 0xff);
      zip_outbuf[zip_outoff + zip_outcnt++] = (w >>> 8);
    } else {
      zip_put_byte(w & 0xff);
      zip_put_byte(w >>> 8);
    }
  };
  var zip_INSERT_STRING = function() {
    zip_ins_h = ((zip_ins_h << zip_H_SHIFT)^(zip_window[zip_strstart + zip_MIN_MATCH - 1] & 0xff)) & zip_HASH_MASK;
    zip_hash_head = zip_head1(zip_ins_h);
    zip_prev[zip_strstart & zip_WMASK] = zip_hash_head;
    zip_head2(zip_ins_h, zip_strstart);
  };
  var zip_SEND_CODE = function(c, tree) {
    zip_send_bits(tree[c].fc, tree[c].dl);
  };
  var zip_D_CODE = function(dist) {
    return (dist < 256 ? zip_dist_code[dist]: zip_dist_code[256 + (dist >> 7)]) & 0xff;
  };
  var zip_SMALLER = function(tree, n, m) {
    return tree[n].fc < tree[m].fc || (tree[n].fc == tree[m].fc && zip_depth[n] <= zip_depth[m]);
  };
  var zip_read_buff = function(buff, offset, n) {
    var i;
    for (i = 0; i < n && zip_deflate_pos < zip_deflate_data.length; i++) buff[offset + i] = zip_deflate_data.charCodeAt(zip_deflate_pos++) & 0xff;
    return i;
  };
  var zip_lm_init = function() {
    var j;
    for (j = 0; j < zip_HASH_SIZE; j++) zip_prev[zip_WSIZE + j] = 0;
    zip_max_lazy_match = zip_configuration_table[zip_compr_level].max_lazy;
    zip_good_match = zip_configuration_table[zip_compr_level].good_length;
    if (!zip_FULL_SEARCH) zip_nice_match = zip_configuration_table[zip_compr_level].nice_length;
    zip_max_chain_length = zip_configuration_table[zip_compr_level].max_chain;
    zip_strstart = 0;
    zip_block_start = 0;
    zip_lookahead = zip_read_buff(zip_window, 0, 2 * zip_WSIZE);
    if (zip_lookahead <= 0) {
      zip_eofile = true;
      zip_lookahead = 0;
      return;
    }
    zip_eofile = false;
    while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
    zip_ins_h = 0;
    for (j = 0; j < zip_MIN_MATCH - 1; j++) {
      zip_ins_h = ((zip_ins_h << zip_H_SHIFT)^(zip_window[j] & 0xff)) & zip_HASH_MASK;
    }
  };
  var zip_longest_match = function(cur_match) {
    var chain_length = zip_max_chain_length;
    var scanp = zip_strstart;
    var matchp;
    var len;
    var best_len = zip_prev_length;
    var limit = (zip_strstart > zip_MAX_DIST ? zip_strstart - zip_MAX_DIST: zip_NIL);
    var strendp = zip_strstart + zip_MAX_MATCH;
    var scan_end1 = zip_window[scanp + best_len - 1];
    var scan_end = zip_window[scanp + best_len];
    if (zip_prev_length >= zip_good_match) chain_length >>= 2;
    do {
      matchp = cur_match;
      if (zip_window[matchp + best_len] != scan_end || zip_window[matchp + best_len - 1] != scan_end1 || zip_window[matchp] != zip_window[scanp] || zip_window[++matchp] != zip_window[scanp + 1]) {
        continue;
      }
      scanp += 2;
      matchp++;
      do {} while (zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && scanp < strendp);
      len = zip_MAX_MATCH - (strendp - scanp);
      scanp = strendp - zip_MAX_MATCH;
      if (len > best_len) {
        zip_match_start = cur_match;
        best_len = len;
        if (zip_FULL_SEARCH) {
          if (len >= zip_MAX_MATCH) break;
        } else {
          if (len >= zip_nice_match) break;
        }
        scan_end1 = zip_window[scanp + best_len - 1];
        scan_end = zip_window[scanp + best_len];
      }
    } while ((cur_match = zip_prev[cur_match & zip_WMASK]) > limit && --chain_length != 0);
    return best_len;
  };
  var zip_fill_window = function() {
    var n, m;
    var more = zip_window_size - zip_lookahead - zip_strstart;
    if (more == - 1) {
      more--;
    } else if (zip_strstart >= zip_WSIZE + zip_MAX_DIST) {
      for (n = 0; n < zip_WSIZE; n++) zip_window[n] = zip_window[n + zip_WSIZE];
      zip_match_start -= zip_WSIZE;
      zip_strstart -= zip_WSIZE;
      zip_block_start -= zip_WSIZE;
      for (n = 0; n < zip_HASH_SIZE; n++) {
        m = zip_head1(n);
        zip_head2(n, m >= zip_WSIZE ? m - zip_WSIZE: zip_NIL);
      }
      for (n = 0; n < zip_WSIZE; n++) {
        m = zip_prev[n];
        zip_prev[n] = (m >= zip_WSIZE ? m - zip_WSIZE: zip_NIL);
      }
      more += zip_WSIZE;
    }
    if (!zip_eofile) {
      n = zip_read_buff(zip_window, zip_strstart + zip_lookahead, more);
      if (n <= 0) zip_eofile = true; else zip_lookahead += n;
    }
  };
  var zip_deflate_fast = function() {
    while (zip_lookahead != 0 && zip_qhead == null) {
      var flush;
      zip_INSERT_STRING();
      if (zip_hash_head != zip_NIL && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
        zip_match_length = zip_longest_match(zip_hash_head);
        if (zip_match_length > zip_lookahead) zip_match_length = zip_lookahead;
      }
      if (zip_match_length >= zip_MIN_MATCH) {
        flush = zip_ct_tally(zip_strstart - zip_match_start, zip_match_length - zip_MIN_MATCH);
        zip_lookahead -= zip_match_length;
        if (zip_match_length <= zip_max_lazy_match) {
          zip_match_length--;
          do {
            zip_strstart++;
            zip_INSERT_STRING();
          } while (--zip_match_length != 0);
          zip_strstart++;
        } else {
          zip_strstart += zip_match_length;
          zip_match_length = 0;
          zip_ins_h = zip_window[zip_strstart] & 0xff;
          zip_ins_h = ((zip_ins_h << zip_H_SHIFT)^(zip_window[zip_strstart + 1] & 0xff)) & zip_HASH_MASK;
        }
      } else {
        flush = zip_ct_tally(0, zip_window[zip_strstart] & 0xff);
        zip_lookahead--;
        zip_strstart++;
      }
      if (flush) {
        zip_flush_block(0);
        zip_block_start = zip_strstart;
      }
      while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
    }
  };
  var zip_deflate_better = function() {
    while (zip_lookahead != 0 && zip_qhead == null) {
      zip_INSERT_STRING();
      zip_prev_length = zip_match_length;
      zip_prev_match = zip_match_start;
      zip_match_length = zip_MIN_MATCH - 1;
      if (zip_hash_head != zip_NIL && zip_prev_length < zip_max_lazy_match && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
        zip_match_length = zip_longest_match(zip_hash_head);
        if (zip_match_length > zip_lookahead) zip_match_length = zip_lookahead;
        if (zip_match_length == zip_MIN_MATCH && zip_strstart - zip_match_start > zip_TOO_FAR) {
          zip_match_length--;
        }
      }
      if (zip_prev_length >= zip_MIN_MATCH && zip_match_length <= zip_prev_length) {
        var flush;
        flush = zip_ct_tally(zip_strstart - 1 - zip_prev_match, zip_prev_length - zip_MIN_MATCH);
        zip_lookahead -= zip_prev_length - 1;
        zip_prev_length -= 2;
        do {
          zip_strstart++;
          zip_INSERT_STRING();
        } while (--zip_prev_length != 0);
        zip_match_available = 0;
        zip_match_length = zip_MIN_MATCH - 1;
        zip_strstart++;
        if (flush) {
          zip_flush_block(0);
          zip_block_start = zip_strstart;
        }
      } else if (zip_match_available != 0) {
        if (zip_ct_tally(0, zip_window[zip_strstart - 1] & 0xff)) {
          zip_flush_block(0);
          zip_block_start = zip_strstart;
        }
        zip_strstart++;
        zip_lookahead--;
      } else {
        zip_match_available = 1;
        zip_strstart++;
        zip_lookahead--;
      }
      while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
    }
  };
  var zip_init_deflate = function() {
    if (zip_eofile) return;
    zip_bi_buf = 0;
    zip_bi_valid = 0;
    zip_ct_init();
    zip_lm_init();
    zip_qhead = null;
    zip_outcnt = 0;
    zip_outoff = 0;
    if (zip_compr_level <= 3) {
      zip_prev_length = zip_MIN_MATCH - 1;
      zip_match_length = 0;
    } else {
      zip_match_length = zip_MIN_MATCH - 1;
      zip_match_available = 0;
    }
    zip_complete = false;
  };
  var zip_deflate_internal = function(buff, off, buff_size) {
    var n;
    if (!zip_initflag) {
      zip_init_deflate();
      zip_initflag = true;
      if (zip_lookahead == 0) {
        zip_complete = true;
        return 0;
      }
    }
    if ((n = zip_qcopy(buff, off, buff_size)) == buff_size) return buff_size;
    if (zip_complete) return n;
    if (zip_compr_level <= 3) zip_deflate_fast(); else zip_deflate_better();
    if (zip_lookahead == 0) {
      if (zip_match_available != 0) zip_ct_tally(0, zip_window[zip_strstart - 1] & 0xff);
      zip_flush_block(1);
      zip_complete = true;
    }
    return n + zip_qcopy(buff, n + off, buff_size - n);
  };
  var zip_qcopy = function(buff, off, buff_size) {
    var n, i, j;
    n = 0;
    while (zip_qhead != null && n < buff_size) {
      i = buff_size - n;
      if (i > zip_qhead.len) i = zip_qhead.len;
      for (j = 0; j < i; j++) buff[off + n + j] = zip_qhead.ptr[zip_qhead.off + j];
      zip_qhead.off += i;
      zip_qhead.len -= i;
      n += i;
      if (zip_qhead.len == 0) {
        var p;
        p = zip_qhead;
        zip_qhead = zip_qhead.next;
        zip_reuse_queue(p);
      }
    }
    if (n == buff_size) return n;
    if (zip_outoff < zip_outcnt) {
      i = buff_size - n;
      if (i > zip_outcnt - zip_outoff) i = zip_outcnt - zip_outoff;
      for (j = 0; j < i; j++) buff[off + n + j] = zip_outbuf[zip_outoff + j];
      zip_outoff += i;
      n += i;
      if (zip_outcnt == zip_outoff) zip_outcnt = zip_outoff = 0;
    }
    return n;
  };
  var zip_ct_init = function() {
    var n;
    var bits;
    var length;
    var code;
    var dist;
    if (zip_static_dtree[0].dl != 0) return;
    zip_l_desc.dyn_tree = zip_dyn_ltree;
    zip_l_desc.static_tree = zip_static_ltree;
    zip_l_desc.extra_bits = zip_extra_lbits;
    zip_l_desc.extra_base = zip_LITERALS + 1;
    zip_l_desc.elems = zip_L_CODES;
    zip_l_desc.max_length = zip_MAX_BITS;
    zip_l_desc.max_code = 0;
    zip_d_desc.dyn_tree = zip_dyn_dtree;
    zip_d_desc.static_tree = zip_static_dtree;
    zip_d_desc.extra_bits = zip_extra_dbits;
    zip_d_desc.extra_base = 0;
    zip_d_desc.elems = zip_D_CODES;
    zip_d_desc.max_length = zip_MAX_BITS;
    zip_d_desc.max_code = 0;
    zip_bl_desc.dyn_tree = zip_bl_tree;
    zip_bl_desc.static_tree = null;
    zip_bl_desc.extra_bits = zip_extra_blbits;
    zip_bl_desc.extra_base = 0;
    zip_bl_desc.elems = zip_BL_CODES;
    zip_bl_desc.max_length = zip_MAX_BL_BITS;
    zip_bl_desc.max_code = 0;
    length = 0;
    for (code = 0; code < zip_LENGTH_CODES - 1; code++) {
      zip_base_length[code] = length;
      for (n = 0; n < (1 << zip_extra_lbits[code]); n++) zip_length_code[length++] = code;
    }
    zip_length_code[length - 1] = code;
    dist = 0;
    for (code = 0; code < 16; code++) {
      zip_base_dist[code] = dist;
      for (n = 0; n < (1 << zip_extra_dbits[code]); n++) {
        zip_dist_code[dist++] = code;
      }
    }
    dist >>= 7;
    for (; code < zip_D_CODES; code++) {
      zip_base_dist[code] = dist << 7;
      for (n = 0; n < (1 << (zip_extra_dbits[code] - 7)); n++) zip_dist_code[256 + dist++] = code;
    }
    for (bits = 0; bits <= zip_MAX_BITS; bits++) zip_bl_count[bits] = 0;
    n = 0;
    while (n <= 143) {
      zip_static_ltree[n++].dl = 8;
      zip_bl_count[8]++;
    }
    while (n <= 255) {
      zip_static_ltree[n++].dl = 9;
      zip_bl_count[9]++;
    }
    while (n <= 279) {
      zip_static_ltree[n++].dl = 7;
      zip_bl_count[7]++;
    }
    while (n <= 287) {
      zip_static_ltree[n++].dl = 8;
      zip_bl_count[8]++;
    }
    zip_gen_codes(zip_static_ltree, zip_L_CODES + 1);
    for (n = 0; n < zip_D_CODES; n++) {
      zip_static_dtree[n].dl = 5;
      zip_static_dtree[n].fc = zip_bi_reverse(n, 5);
    }
    zip_init_block();
  };
  var zip_init_block = function() {
    var n;
    for (n = 0; n < zip_L_CODES; n++) zip_dyn_ltree[n].fc = 0;
    for (n = 0; n < zip_D_CODES; n++) zip_dyn_dtree[n].fc = 0;
    for (n = 0; n < zip_BL_CODES; n++) zip_bl_tree[n].fc = 0;
    zip_dyn_ltree[zip_END_BLOCK].fc = 1;
    zip_opt_len = zip_static_len = 0;
    zip_last_lit = zip_last_dist = zip_last_flags = 0;
    zip_flags = 0;
    zip_flag_bit = 1;
  };
  var zip_pqdownheap = function(tree, k) {
    var v = zip_heap[k];
    var j = k << 1;
    while (j <= zip_heap_len) {
      if (j < zip_heap_len && zip_SMALLER(tree, zip_heap[j + 1], zip_heap[j])) j++;
      if (zip_SMALLER(tree, v, zip_heap[j])) break;
      zip_heap[k] = zip_heap[j];
      k = j;
      j <<= 1;
    }
    zip_heap[k] = v;
  };
  var zip_gen_bitlen = function(desc) {
    var tree = desc.dyn_tree;
    var extra = desc.extra_bits;
    var base = desc.extra_base;
    var max_code = desc.max_code;
    var max_length = desc.max_length;
    var stree = desc.static_tree;
    var h;
    var n, m;
    var bits;
    var xbits;
    var f;
    var overflow = 0;
    for (bits = 0; bits <= zip_MAX_BITS; bits++) zip_bl_count[bits] = 0;
    tree[zip_heap[zip_heap_max]].dl = 0;
    for (h = zip_heap_max + 1; h < zip_HEAP_SIZE; h++) {
      n = zip_heap[h];
      bits = tree[tree[n].dl].dl + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n].dl = bits;
      if (n > max_code) continue;
      zip_bl_count[bits]++;
      xbits = 0;
      if (n >= base) xbits = extra[n - base];
      f = tree[n].fc;
      zip_opt_len += f * (bits + xbits);
      if (stree != null) zip_static_len += f * (stree[n].dl + xbits);
    }
    if (overflow == 0) return;
    do {
      bits = max_length - 1;
      while (zip_bl_count[bits] == 0) bits--;
      zip_bl_count[bits]--;
      zip_bl_count[bits + 1] += 2;
      zip_bl_count[max_length]--;
      overflow -= 2;
    } while (overflow > 0);
    for (bits = max_length; bits != 0; bits--) {
      n = zip_bl_count[bits];
      while (n != 0) {
        m = zip_heap[--h];
        if (m > max_code) continue;
        if (tree[m].dl != bits) {
          zip_opt_len += (bits - tree[m].dl) * tree[m].fc;
          tree[m].fc = bits;
        }
        n--;
      }
    }
  };
  var zip_gen_codes = function(tree, max_code) {
    var next_code = new Array(zip_MAX_BITS + 1);
    var code = 0;
    var bits;
    var n;
    for (bits = 1; bits <= zip_MAX_BITS; bits++) {
      code = ((code + zip_bl_count[bits - 1]) << 1);
      next_code[bits] = code;
    }
    for (n = 0; n <= max_code; n++) {
      var len = tree[n].dl;
      if (len == 0) continue;
      tree[n].fc = zip_bi_reverse(next_code[len]++, len);
    }
  };
  var zip_build_tree = function(desc) {
    var tree = desc.dyn_tree;
    var stree = desc.static_tree;
    var elems = desc.elems;
    var n, m;
    var max_code = - 1;
    var node = elems;
    zip_heap_len = 0;
    zip_heap_max = zip_HEAP_SIZE;
    for (n = 0; n < elems; n++) {
      if (tree[n].fc != 0) {
        zip_heap[++zip_heap_len] = max_code = n;
        zip_depth[n] = 0;
      } else tree[n].dl = 0;
    }
    while (zip_heap_len < 2) {
      var xnew = zip_heap[++zip_heap_len] = (max_code < 2 ? ++max_code: 0);
      tree[xnew].fc = 1;
      zip_depth[xnew] = 0;
      zip_opt_len--;
      if (stree != null) zip_static_len -= stree[xnew].dl;
    }
    desc.max_code = max_code;
    for (n = zip_heap_len >> 1; n >= 1; n--) zip_pqdownheap(tree, n);
    do {
      n = zip_heap[zip_SMALLEST];
      zip_heap[zip_SMALLEST] = zip_heap[zip_heap_len--];
      zip_pqdownheap(tree, zip_SMALLEST);
      m = zip_heap[zip_SMALLEST];
      zip_heap[--zip_heap_max] = n;
      zip_heap[--zip_heap_max] = m;
      tree[node].fc = tree[n].fc + tree[m].fc;
      if (zip_depth[n] > zip_depth[m] + 1) zip_depth[node] = zip_depth[n]; else zip_depth[node] = zip_depth[m] + 1;
      tree[n].dl = tree[m].dl = node;
      zip_heap[zip_SMALLEST] = node++;
      zip_pqdownheap(tree, zip_SMALLEST);
    } while (zip_heap_len >= 2);
    zip_heap[--zip_heap_max] = zip_heap[zip_SMALLEST];
    zip_gen_bitlen(desc);
    zip_gen_codes(tree, max_code);
  };
  var zip_scan_tree = function(tree, max_code) {
    var n;
    var prevlen = - 1;
    var curlen;
    var nextlen = tree[0].dl;
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen == 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[max_code + 1].dl = 0xffff;
    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[n + 1].dl;
      if (++count < max_count && curlen == nextlen) continue; else if (count < min_count) zip_bl_tree[curlen].fc += count; else if (curlen != 0) {
        if (curlen != prevlen) zip_bl_tree[curlen].fc++;
        zip_bl_tree[zip_REP_3_6].fc++;
      } else if (count <= 10) zip_bl_tree[zip_REPZ_3_10].fc++; else zip_bl_tree[zip_REPZ_11_138].fc++;
      count = 0;
      prevlen = curlen;
      if (nextlen == 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };
  var zip_send_tree = function(tree, max_code) {
    var n;
    var prevlen = - 1;
    var curlen;
    var nextlen = tree[0].dl;
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen == 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[n + 1].dl;
      if (++count < max_count && curlen == nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          zip_SEND_CODE(curlen, zip_bl_tree);
        } while (--count != 0);
      } else if (curlen != 0) {
        if (curlen != prevlen) {
          zip_SEND_CODE(curlen, zip_bl_tree);
          count--;
        }
        zip_SEND_CODE(zip_REP_3_6, zip_bl_tree);
        zip_send_bits(count - 3, 2);
      } else if (count <= 10) {
        zip_SEND_CODE(zip_REPZ_3_10, zip_bl_tree);
        zip_send_bits(count - 3, 3);
      } else {
        zip_SEND_CODE(zip_REPZ_11_138, zip_bl_tree);
        zip_send_bits(count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen == 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };
  var zip_build_bl_tree = function() {
    var max_blindex;
    zip_scan_tree(zip_dyn_ltree, zip_l_desc.max_code);
    zip_scan_tree(zip_dyn_dtree, zip_d_desc.max_code);
    zip_build_tree(zip_bl_desc);
    for (max_blindex = zip_BL_CODES - 1; max_blindex >= 3; max_blindex--) {
      if (zip_bl_tree[zip_bl_order[max_blindex]].dl != 0) break;
    }
    zip_opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
  };
  var zip_send_all_trees = function(lcodes, dcodes, blcodes) {
    var rank;
    zip_send_bits(lcodes - 257, 5);
    zip_send_bits(dcodes - 1, 5);
    zip_send_bits(blcodes - 4, 4);
    for (rank = 0; rank < blcodes; rank++) {
      zip_send_bits(zip_bl_tree[zip_bl_order[rank]].dl, 3);
    }
    zip_send_tree(zip_dyn_ltree, lcodes - 1);
    zip_send_tree(zip_dyn_dtree, dcodes - 1);
  };
  var zip_flush_block = function(eof) {
    var opt_lenb, static_lenb;
    var max_blindex;
    var stored_len;
    stored_len = zip_strstart - zip_block_start;
    zip_flag_buf[zip_last_flags] = zip_flags;
    zip_build_tree(zip_l_desc);
    zip_build_tree(zip_d_desc);
    max_blindex = zip_build_bl_tree();
    opt_lenb = (zip_opt_len + 3 + 7) >> 3;
    static_lenb = (zip_static_len + 3 + 7) >> 3;
    if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    if (stored_len + 4 <= opt_lenb && zip_block_start >= 0) {
      var i;
      zip_send_bits((zip_STORED_BLOCK << 1) + eof, 3);
      zip_bi_windup();
      zip_put_short(stored_len);
      zip_put_short(~stored_len);
      for (i = 0; i < stored_len; i++) zip_put_byte(zip_window[zip_block_start + i]);
    } else if (static_lenb == opt_lenb) {
      zip_send_bits((zip_STATIC_TREES << 1) + eof, 3);
      zip_compress_block(zip_static_ltree, zip_static_dtree);
    } else {
      zip_send_bits((zip_DYN_TREES << 1) + eof, 3);
      zip_send_all_trees(zip_l_desc.max_code + 1, zip_d_desc.max_code + 1, max_blindex + 1);
      zip_compress_block(zip_dyn_ltree, zip_dyn_dtree);
    }
    zip_init_block();
    if (eof != 0) zip_bi_windup();
  };
  var zip_ct_tally = function(dist, lc) {
    zip_l_buf[zip_last_lit++] = lc;
    if (dist == 0) {
      zip_dyn_ltree[lc].fc++;
    } else {
      dist--;
      zip_dyn_ltree[zip_length_code[lc] + zip_LITERALS + 1].fc++;
      zip_dyn_dtree[zip_D_CODE(dist)].fc++;
      zip_d_buf[zip_last_dist++] = dist;
      zip_flags |= zip_flag_bit;
    }
    zip_flag_bit <<= 1;
    if ((zip_last_lit & 7) == 0) {
      zip_flag_buf[zip_last_flags++] = zip_flags;
      zip_flags = 0;
      zip_flag_bit = 1;
    }
    if (zip_compr_level > 2 && (zip_last_lit & 0xfff) == 0) {
      var out_length = zip_last_lit * 8;
      var in_length = zip_strstart - zip_block_start;
      var dcode;
      for (dcode = 0; dcode < zip_D_CODES; dcode++) {
        out_length += zip_dyn_dtree[dcode].fc * (5 + zip_extra_dbits[dcode]);
      }
      out_length >>= 3;
      if (zip_last_dist < parseInt(zip_last_lit / 2) && out_length < parseInt(in_length / 2)) return true;
    }
    return (zip_last_lit == zip_LIT_BUFSIZE - 1 || zip_last_dist == zip_DIST_BUFSIZE);
  };
  var zip_compress_block = function(ltree, dtree) {
    var dist;
    var lc;
    var lx = 0;
    var dx = 0;
    var fx = 0;
    var flag = 0;
    var code;
    var extra;
    if (zip_last_lit != 0) do {
      if ((lx & 7) == 0) flag = zip_flag_buf[fx++];
      lc = zip_l_buf[lx++] & 0xff;
      if ((flag & 1) == 0) {
        zip_SEND_CODE(lc, ltree);
      } else {
        code = zip_length_code[lc];
        zip_SEND_CODE(code + zip_LITERALS + 1, ltree);
        extra = zip_extra_lbits[code];
        if (extra != 0) {
          lc -= zip_base_length[code];
          zip_send_bits(lc, extra);
        }
        dist = zip_d_buf[dx++];
        code = zip_D_CODE(dist);
        zip_SEND_CODE(code, dtree);
        extra = zip_extra_dbits[code];
        if (extra != 0) {
          dist -= zip_base_dist[code];
          zip_send_bits(dist, extra);
        }
      }
      flag >>= 1;
    } while (lx < zip_last_lit);
    zip_SEND_CODE(zip_END_BLOCK, ltree);
  };
  var zip_Buf_size = 16;
  var zip_send_bits = function(value, length) {
    if (zip_bi_valid > zip_Buf_size - length) {
      zip_bi_buf |= (value << zip_bi_valid);
      zip_put_short(zip_bi_buf);
      zip_bi_buf = (value >> (zip_Buf_size - zip_bi_valid));
      zip_bi_valid += length - zip_Buf_size;
    } else {
      zip_bi_buf |= value << zip_bi_valid;
      zip_bi_valid += length;
    }
  };
  var zip_bi_reverse = function(code, len) {
    var res = 0;
    do {
      res |= code & 1;
      code >>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >> 1;
  };
  var zip_bi_windup = function() {
    if (zip_bi_valid > 8) {
      zip_put_short(zip_bi_buf);
    } else if (zip_bi_valid > 0) {
      zip_put_byte(zip_bi_buf);
    }
    zip_bi_buf = 0;
    zip_bi_valid = 0;
  };
  var zip_qoutbuf = function() {
    if (zip_outcnt != 0) {
      var q, i;
      q = zip_new_queue();
      if (zip_qhead == null) zip_qhead = zip_qtail = q; else zip_qtail = zip_qtail.next = q;
      q.len = zip_outcnt - zip_outoff;
      for (i = 0; i < q.len; i++) q.ptr[i] = zip_outbuf[zip_outoff + i];
      zip_outcnt = zip_outoff = 0;
    }
  };
  var zip_deflate = function(str, level) {
    var i, j;
    zip_deflate_data = str;
    zip_deflate_pos = 0;
    if (typeof level == "undefined") level = zip_DEFAULT_LEVEL;
    zip_deflate_start(level);
    var buff = new Array(1024);
    var aout = [];
    while ((i = zip_deflate_internal(buff, 0, buff.length)) > 0) {
      var cbuf = new Array(i);
      for (j = 0; j < i; j++) {
        cbuf[j] = String.fromCharCode(buff[j]);
      }
      aout[aout.length] = cbuf.join("");
    }
    zip_deflate_data = null;
    return aout.join("");
  };
  if (!JSZip.compressions["DEFLATE"]) {
    JSZip.compressions["DEFLATE"] = {
      magic: "\x08\x00",
      compress: zip_deflate
    };
  } else {
    JSZip.compressions["DEFLATE"].compress = zip_deflate;
  }
})();
(function() {
  var JSZip = window.JSZip;
  var MAX_VALUE_16BITS = 65535;
  var MAX_VALUE_32BITS = - 1;
  var pretty = function(str) {
    var res = '', code, i;
    for (i = 0; i < (str || "").length; i++) {
      code = str.charCodeAt(i);
      res += '\\x' + (code < 16 ? "0": "") + code.toString(16).toUpperCase();
    }
    return res;
  };
  var findCompression = function(compressionMethod) {
    for (var method in JSZip.compressions) {
      if (!JSZip.compressions.hasOwnProperty(method)) {
        continue;
      }
      if (JSZip.compressions[method].magic === compressionMethod) {
        return JSZip.compressions[method];
      }
    }
    return null;
  };
  function StreamReader(stream) {
    this.stream = "";
    if (JSZip.support.uint8array && stream instanceof Uint8Array) {
      this.stream = JSZip.utils.uint8Array2String(stream);
    } else if (JSZip.support.arraybuffer && stream instanceof ArrayBuffer) {
      var bufferView = new Uint8Array(stream);
      this.stream = JSZip.utils.uint8Array2String(bufferView);
    } else {
      this.stream = JSZip.utils.string2binary(stream);
    }
    this.index = 0;
  }
  StreamReader.prototype = {
    checkOffset: function(offset) {
      this.checkIndex(this.index + offset);
    },
    checkIndex: function(newIndex) {
      if (this.stream.length < newIndex || newIndex < 0) {
        throw new Error("End of stream reached (stream length = " + this.stream.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
      }
    },
    setIndex: function(newIndex) {
      this.checkIndex(newIndex);
      this.index = newIndex;
    },
    skip: function(n) {
      this.setIndex(this.index + n);
    },
    byteAt: function(i) {
      return this.stream.charCodeAt(i);
    },
    readInt: function(size) {
      var result = 0, i;
      this.checkOffset(size);
      for (i = this.index + size - 1; i >= this.index; i--) {
        result = (result << 8) + this.byteAt(i);
      }
      this.index += size;
      return result;
    },
    readString: function(size) {
      this.checkOffset(size);
      var result = this.stream.slice(this.index, this.index + size);
      this.index += size;
      return result;
    },
    readDate: function() {
      var dostime = this.readInt(4);
      return new Date(((dostime >> 25) & 0x7f) + 1980, ((dostime >> 21) & 0x0f) - 1, (dostime >> 16) & 0x1f, (dostime >> 11) & 0x1f, (dostime >> 5) & 0x3f, (dostime & 0x1f) << 1);
    }
  };
  function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
  }
  ZipEntry.prototype = {
    isEncrypted: function() {
      return (this.bitFlag & 0x0001) === 0x0001;
    },
    useUTF8: function() {
      return (this.bitFlag & 0x0800) === 0x0800;
    },
    readLocalPart: function(reader) {
      var compression, localExtraFieldsLength;
      reader.skip(22);
      this.fileNameLength = reader.readInt(2);
      localExtraFieldsLength = reader.readInt(2);
      this.fileName = reader.readString(this.fileNameLength);
      reader.skip(localExtraFieldsLength);
      if (this.compressedSize == - 1 || this.uncompressedSize == - 1) {
        throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
      }
      this.compressedFileData = reader.readString(this.compressedSize);
      compression = findCompression(this.compressionMethod);
      if (compression === null) {
        throw new Error("Corrupted zip : compression " + pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
      }
      this.uncompressedFileData = compression.uncompress(this.compressedFileData);
      if (this.uncompressedFileData.length !== this.uncompressedSize) {
        throw new Error("Bug : uncompressed data size mismatch");
      }
      if (this.loadOptions.checkCRC32 && JSZip.prototype.crc32(this.uncompressedFileData) !== this.crc32) {
        throw new Error("Corrupted zip : CRC32 mismatch");
      }
    },
    readCentralPart: function(reader) {
      this.versionMadeBy = reader.readString(2);
      this.versionNeeded = reader.readInt(2);
      this.bitFlag = reader.readInt(2);
      this.compressionMethod = reader.readString(2);
      this.date = reader.readDate();
      this.crc32 = reader.readInt(4);
      this.compressedSize = reader.readInt(4);
      this.uncompressedSize = reader.readInt(4);
      this.fileNameLength = reader.readInt(2);
      this.extraFieldsLength = reader.readInt(2);
      this.fileCommentLength = reader.readInt(2);
      this.diskNumberStart = reader.readInt(2);
      this.internalFileAttributes = reader.readInt(2);
      this.externalFileAttributes = reader.readInt(4);
      this.localHeaderOffset = reader.readInt(4);
      if (this.isEncrypted()) {
        throw new Error("Encrypted zip are not supported");
      }
      this.fileName = reader.readString(this.fileNameLength);
      this.readExtraFields(reader);
      this.parseZIP64ExtraField(reader);
      this.fileComment = reader.readString(this.fileCommentLength);
      this.dir = this.externalFileAttributes & 0x00000010 ? true: false;
    },
    parseZIP64ExtraField: function(reader) {
      if (!this.extraFields[0x0001]) {
        return;
      }
      var extraReader = new StreamReader(this.extraFields[0x0001].value);
      if (this.uncompressedSize === MAX_VALUE_32BITS) {
        this.uncompressedSize = extraReader.readInt(8);
      }
      if (this.compressedSize === MAX_VALUE_32BITS) {
        this.compressedSize = extraReader.readInt(8);
      }
      if (this.localHeaderOffset === MAX_VALUE_32BITS) {
        this.localHeaderOffset = extraReader.readInt(8);
      }
      if (this.diskNumberStart === MAX_VALUE_32BITS) {
        this.diskNumberStart = extraReader.readInt(4);
      }
    },
    readExtraFields: function(reader) {
      var start = reader.index, extraFieldId, extraFieldLength, extraFieldValue;
      this.extraFields = this.extraFields || {};
      while (reader.index < start + this.extraFieldsLength) {
        extraFieldId = reader.readInt(2);
        extraFieldLength = reader.readInt(2);
        extraFieldValue = reader.readString(extraFieldLength);
        this.extraFields[extraFieldId] = {
          id: extraFieldId,
          length: extraFieldLength,
          value: extraFieldValue
        };
      }
    },
    handleUTF8: function() {
      if (this.useUTF8()) {
        this.fileName = JSZip.prototype.utf8decode(this.fileName);
        this.fileComment = JSZip.prototype.utf8decode(this.fileComment);
      }
    }
  };
  function ZipEntries(data, loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
    if (data) {
      this.load(data);
    }
  }
  ZipEntries.prototype = {
    checkSignature: function(expectedSignature) {
      var signature = this.reader.readString(4);
      if (signature !== expectedSignature) {
        throw new Error("Corrupted zip or bug : unexpected signature " + "(" + pretty(signature) + ", expected " + pretty(expectedSignature) + ")");
      }
    },
    readBlockEndOfCentral: function() {
      this.diskNumber = this.reader.readInt(2);
      this.diskWithCentralDirStart = this.reader.readInt(2);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
      this.centralDirRecords = this.reader.readInt(2);
      this.centralDirSize = this.reader.readInt(4);
      this.centralDirOffset = this.reader.readInt(4);
      this.zipCommentLength = this.reader.readInt(2);
      this.zipComment = this.reader.readString(this.zipCommentLength);
    },
    readBlockZip64EndOfCentral: function() {
      this.zip64EndOfCentralSize = this.reader.readInt(8);
      this.versionMadeBy = this.reader.readString(2);
      this.versionNeeded = this.reader.readInt(2);
      this.diskNumber = this.reader.readInt(4);
      this.diskWithCentralDirStart = this.reader.readInt(4);
      this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
      this.centralDirRecords = this.reader.readInt(8);
      this.centralDirSize = this.reader.readInt(8);
      this.centralDirOffset = this.reader.readInt(8);
      this.zip64ExtensibleData = {};
      var extraDataSize = this.zip64EndOfCentralSize - 44, index = 0, extraFieldId, extraFieldLength, extraFieldValue;
      while (index < extraDataSize) {
        extraFieldId = this.reader.readInt(2);
        extraFieldLength = this.reader.readInt(4);
        extraFieldValue = this.reader.readString(extraFieldLength);
        this.zip64ExtensibleData[extraFieldId] = {
          id: extraFieldId,
          length: extraFieldLength,
          value: extraFieldValue
        };
      }
    },
    readBlockZip64EndOfCentralLocator: function() {
      this.diskWithZip64CentralDirStart = this.reader.readInt(4);
      this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
      this.disksCount = this.reader.readInt(4);
      if (this.disksCount > 1) {
        throw new Error("Multi-volumes zip are not supported");
      }
    },
    readLocalFiles: function() {
      var i, file;
      for (i = 0; i < this.files.length; i++) {
        file = this.files[i];
        this.reader.setIndex(file.localHeaderOffset);
        this.checkSignature(JSZip.signature.LOCAL_FILE_HEADER);
        file.readLocalPart(this.reader);
        file.handleUTF8();
      }
    },
    readCentralDir: function() {
      var file;
      this.reader.setIndex(this.centralDirOffset);
      while (this.reader.readString(4) === JSZip.signature.CENTRAL_FILE_HEADER) {
        file = new ZipEntry({zip64: this.zip64}, this.loadOptions);
        file.readCentralPart(this.reader);
        this.files.push(file);
      }
    },
    readEndOfCentral: function() {
      var offset = this.reader.stream.lastIndexOf(JSZip.signature.CENTRAL_DIRECTORY_END);
      if (offset === - 1) {
        throw new Error("Corrupted zip : can't find end of central directory");
      }
      this.reader.setIndex(offset);
      this.checkSignature(JSZip.signature.CENTRAL_DIRECTORY_END);
      this.readBlockEndOfCentral();
      if (this.diskNumber === MAX_VALUE_16BITS || this.diskWithCentralDirStart === MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === MAX_VALUE_16BITS || this.centralDirRecords === MAX_VALUE_16BITS || this.centralDirSize === MAX_VALUE_32BITS || this.centralDirOffset === MAX_VALUE_32BITS) {
        this.zip64 = true;
        offset = this.reader.stream.lastIndexOf(JSZip.signature.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        if (offset === - 1) {
          throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
        }
        this.reader.setIndex(offset);
        this.checkSignature(JSZip.signature.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
        this.readBlockZip64EndOfCentralLocator();
        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
        this.checkSignature(JSZip.signature.ZIP64_CENTRAL_DIRECTORY_END);
        this.readBlockZip64EndOfCentral();
      }
    },
    load: function(data) {
      this.reader = new StreamReader(data);
      this.readEndOfCentral();
      this.readCentralDir();
      this.readLocalFiles();
    }
  };
  JSZip.prototype.load = function(data, options) {
    var files, zipEntries, i, input;
    options = options || {};
    if (options.base64) {
      data = JSZipBase64.decode(data);
    }
    zipEntries = new ZipEntries(data, options);
    files = zipEntries.files;
    for (i = 0; i < files.length; i++) {
      input = files[i];
      this.file(input.fileName, input.uncompressedFileData, {
        binary: true,
        optimizedBinaryString: true,
        date: input.date,
        dir: input.dir
      });
    }
    return this;
  };
}());
var Markdown;
if (typeof exports === "object" && typeof require === "function") Markdown = exports; else Markdown = {};
(function() {
  function identity(x) {
    return x;
  }
  function returnFalse(x) {
    return false;
  }
  function HookCollection() {}
  HookCollection.prototype = {
    chain: function(hookname, func) {
      var original = this[hookname];
      if (!original) throw new Error("unknown hook " + hookname);
      if (original === identity) this[hookname] = func; else this[hookname] = function(text) {
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = original.apply(null, args);
        return func.apply(null, args);
      };
    },
    set: function(hookname, func) {
      if (!this[hookname]) throw new Error("unknown hook " + hookname);
      this[hookname] = func;
    },
    addNoop: function(hookname) {
      this[hookname] = identity;
    },
    addFalse: function(hookname) {
      this[hookname] = returnFalse;
    }
  };
  Markdown.HookCollection = HookCollection;
  function SaveHash() {}
  SaveHash.prototype = {
    set: function(key, value) {
      this["s_" + key] = value;
    },
    get: function(key) {
      return this["s_" + key];
    }
  };
  Markdown.Converter = function() {
    var pluginHooks = this.hooks = new HookCollection();
    pluginHooks.addNoop("plainLinkText");
    pluginHooks.addNoop("preConversion");
    pluginHooks.addNoop("postNormalization");
    pluginHooks.addNoop("preBlockGamut");
    pluginHooks.addNoop("postBlockGamut");
    pluginHooks.addNoop("preSpanGamut");
    pluginHooks.addNoop("postSpanGamut");
    pluginHooks.addNoop("postConversion");
    var g_urls;
    var g_titles;
    var g_html_blocks;
    var g_list_level;
    this.makeHtml = function(text) {
      if (g_urls) throw new Error("Recursive call to converter.makeHtml");
      g_urls = new SaveHash();
      g_titles = new SaveHash();
      g_html_blocks = [];
      g_list_level = 0;
      text = pluginHooks.preConversion(text);
      text = text.replace(/~/g, "~T");
      text = text.replace(/\$/g, "~D");
      text = text.replace(/\r\n/g, "\n");
      text = text.replace(/\r/g, "\n");
      text = "\n\n" + text + "\n\n";
      text = _Detab(text);
      text = text.replace(/^[ \t]+$/mg, "");
      text = pluginHooks.postNormalization(text);
      text = _HashHTMLBlocks(text);
      text = _StripLinkDefinitions(text);
      text = _RunBlockGamut(text);
      text = _UnescapeSpecialChars(text);
      text = text.replace(/~D/g, "$$");
      text = text.replace(/~T/g, "~");
      text = pluginHooks.postConversion(text);
      g_html_blocks = g_titles = g_urls = null;
      return text;
    };
    function _StripLinkDefinitions(text) {
      text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm, function(wholeMatch, m1, m2, m3, m4, m5) {
        m1 = m1.toLowerCase();
        g_urls.set(m1, _EncodeAmpsAndAngles(m2));
        if (m4) {
          return m3;
        } else if (m5) {
          g_titles.set(m1, m5.replace(/"/g, "&quot;"));
        }
        return "";
      });
      return text;
    }
    function _HashHTMLBlocks(text) {
      var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del";
      var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math";
      text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, hashElement);
      text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, hashElement);
      text = text.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, hashElement);
      text = text.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g, hashElement);
      text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, hashElement);
      return text;
    }
    function hashElement(wholeMatch, m1) {
      var blockText = m1;
      blockText = blockText.replace(/^\n+/, "");
      blockText = blockText.replace(/\n+$/g, "");
      blockText = "\n\n~K" + (g_html_blocks.push(blockText) - 1) + "K\n\n";
      return blockText;
    }
    var blockGamutHookCallback = function(t) {
      return _RunBlockGamut(t);
    };
    function _RunBlockGamut(text, doNotUnhash) {
      text = pluginHooks.preBlockGamut(text, blockGamutHookCallback);
      text = _DoHeaders(text);
      var replacement = "<hr />\n";
      text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, replacement);
      text = text.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, replacement);
      text = text.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, replacement);
      text = _DoLists(text);
      text = _DoCodeBlocks(text);
      text = _DoBlockQuotes(text);
      text = pluginHooks.postBlockGamut(text, blockGamutHookCallback);
      text = _HashHTMLBlocks(text);
      text = _FormParagraphs(text, doNotUnhash);
      return text;
    }
    function _RunSpanGamut(text) {
      text = pluginHooks.preSpanGamut(text);
      text = _DoCodeSpans(text);
      text = _EscapeSpecialCharsWithinTagAttributes(text);
      text = _EncodeBackslashEscapes(text);
      text = _DoImages(text);
      text = _DoAnchors(text);
      text = _DoAutoLinks(text);
      text = text.replace(/~P/g, "://");
      text = _EncodeAmpsAndAngles(text);
      text = _DoItalicsAndBold(text);
      text = text.replace(/  +\n/g, " <br>\n");
      text = pluginHooks.postSpanGamut(text);
      return text;
    }
    function _EscapeSpecialCharsWithinTagAttributes(text) {
      var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;
      text = text.replace(regex, function(wholeMatch) {
        var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`");
        tag = escapeCharacters(tag, wholeMatch.charAt(1) == "!" ? "\\`*_/": "\\`*_");
        return tag;
      });
      return text;
    }
    function _DoAnchors(text) {
      text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);
      text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);
      text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);
      return text;
    }
    function writeAnchorTag(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
      if (m7 == undefined) m7 = "";
      var whole_match = m1;
      var link_text = m2.replace(/:\/\//g, "~P");
      var link_id = m3.toLowerCase();
      var url = m4;
      var title = m7;
      if (url == "") {
        if (link_id == "") {
          link_id = link_text.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + link_id;
        if (g_urls.get(link_id) != undefined) {
          url = g_urls.get(link_id);
          if (g_titles.get(link_id) != undefined) {
            title = g_titles.get(link_id);
          }
        } else {
          if (whole_match.search(/\(\s*\)$/m) > - 1) {
            url = "";
          } else {
            return whole_match;
          }
        }
      }
      url = encodeProblemUrlChars(url);
      url = escapeCharacters(url, "*_");
      var result = "<a href=\"" + url + "\"";
      if (title != "") {
        title = attributeEncode(title);
        title = escapeCharacters(title, "*_");
        result += " title=\"" + title + "\"";
      }
      result += ">" + link_text + "</a>";
      return result;
    }
    function _DoImages(text) {
      text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeImageTag);
      text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeImageTag);
      return text;
    }
    function attributeEncode(text) {
      return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }
    function writeImageTag(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
      var whole_match = m1;
      var alt_text = m2;
      var link_id = m3.toLowerCase();
      var url = m4;
      var title = m7;
      if (!title) title = "";
      if (url == "") {
        if (link_id == "") {
          link_id = alt_text.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + link_id;
        if (g_urls.get(link_id) != undefined) {
          url = g_urls.get(link_id);
          if (g_titles.get(link_id) != undefined) {
            title = g_titles.get(link_id);
          }
        } else {
          return whole_match;
        }
      }
      alt_text = escapeCharacters(attributeEncode(alt_text), "*_[]()");
      url = escapeCharacters(url, "*_");
      var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";
      title = attributeEncode(title);
      title = escapeCharacters(title, "*_");
      result += " title=\"" + title + "\"";
      result += " />";
      return result;
    }
    function _DoHeaders(text) {
      text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(wholeMatch, m1) {
        return "<h1>" + _RunSpanGamut(m1) + "</h1>\n\n";
      });
      text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(matchFound, m1) {
        return "<h2>" + _RunSpanGamut(m1) + "</h2>\n\n";
      });
      text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(wholeMatch, m1, m2) {
        var h_level = m1.length;
        return "<h" + h_level + ">" + _RunSpanGamut(m2) + "</h" + h_level + ">\n\n";
      });
      return text;
    }
    function _DoLists(text, isInsideParagraphlessListItem) {
      text += "~0";
      var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
      if (g_list_level) {
        text = text.replace(whole_list, function(wholeMatch, m1, m2) {
          var list = m1;
          var list_type = (m2.search(/[*+-]/g) > - 1) ? "ul": "ol";
          var result = _ProcessListItems(list, list_type, isInsideParagraphlessListItem);
          result = result.replace(/\s+$/, "");
          result = "<" + list_type + ">" + result + "</" + list_type + ">\n";
          return result;
        });
      } else {
        whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
        text = text.replace(whole_list, function(wholeMatch, m1, m2, m3) {
          var runup = m1;
          var list = m2;
          var list_type = (m3.search(/[*+-]/g) > - 1) ? "ul": "ol";
          var result = _ProcessListItems(list, list_type);
          result = runup + "<" + list_type + ">\n" + result + "</" + list_type + ">\n";
          return result;
        });
      }
      text = text.replace(/~0/, "");
      return text;
    }
    var _listItemMarkers = {
      ol: "\\d+[.]",
      ul: "[*+-]"
    };
    function _ProcessListItems(list_str, list_type, isInsideParagraphlessListItem) {
      g_list_level++;
      list_str = list_str.replace(/\n{2,}$/, "\n");
      list_str += "~0";
      var marker = _listItemMarkers[list_type];
      var re = new RegExp("(^[ \\t]*)(" + marker + ")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(" + marker + ")[ \\t]+))", "gm");
      var last_item_had_a_double_newline = false;
      list_str = list_str.replace(re, function(wholeMatch, m1, m2, m3) {
        var item = m3;
        var leading_space = m1;
        var ends_with_double_newline = /\n\n$/.test(item);
        var contains_double_newline = ends_with_double_newline || item.search(/\n{2,}/) > - 1;
        if (contains_double_newline || last_item_had_a_double_newline) {
          item = _RunBlockGamut(_Outdent(item), true);
        } else {
          item = _DoLists(_Outdent(item), true);
          item = item.replace(/\n$/, "");
          if (!isInsideParagraphlessListItem) item = _RunSpanGamut(item);
        }
        last_item_had_a_double_newline = ends_with_double_newline;
        return "<li>" + item + "</li>\n";
      });
      list_str = list_str.replace(/~0/g, "");
      g_list_level--;
      return list_str;
    }
    function _DoCodeBlocks(text) {
      text += "~0";
      text = text.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(wholeMatch, m1, m2) {
        var codeblock = m1;
        var nextChar = m2;
        codeblock = _EncodeCode(_Outdent(codeblock));
        codeblock = _Detab(codeblock);
        codeblock = codeblock.replace(/^\n+/g, "");
        codeblock = codeblock.replace(/\n+$/g, "");
        codeblock = "<pre><code>" + codeblock + "\n</code></pre>";
        return "\n\n" + codeblock + "\n\n" + nextChar;
      });
      text = text.replace(/~0/, "");
      return text;
    }
    function hashBlock(text) {
      text = text.replace(/(^\n+|\n+$)/g, "");
      return "\n\n~K" + (g_html_blocks.push(text) - 1) + "K\n\n";
    }
    function _DoCodeSpans(text) {
      text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3, m4) {
        var c = m3;
        c = c.replace(/^([ \t]*)/g, "");
        c = c.replace(/[ \t]*$/g, "");
        c = _EncodeCode(c);
        c = c.replace(/:\/\//g, "~P");
        return m1 + "<code>" + c + "</code>";
      });
      return text;
    }
    function _EncodeCode(text) {
      text = text.replace(/&/g, "&amp;");
      text = text.replace(/</g, "&lt;");
      text = text.replace(/>/g, "&gt;");
      text = escapeCharacters(text, "\*_{}[]\\", false);
      return text;
    }
    function _DoItalicsAndBold(text) {
      text = text.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g, "$1<strong>$3</strong>$4");
      text = text.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g, "$1<em>$3</em>$4");
      return text;
    }
    function _DoBlockQuotes(text) {
      text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(wholeMatch, m1) {
        var bq = m1;
        bq = bq.replace(/^[ \t]*>[ \t]?/gm, "~0");
        bq = bq.replace(/~0/g, "");
        bq = bq.replace(/^[ \t]+$/gm, "");
        bq = _RunBlockGamut(bq);
        bq = bq.replace(/(^|\n)/g, "$1  ");
        bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
          var pre = m1;
          pre = pre.replace(/^  /mg, "~0");
          pre = pre.replace(/~0/g, "");
          return pre;
        });
        return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
      });
      return text;
    }
    function _FormParagraphs(text, doNotUnhash) {
      text = text.replace(/^\n+/g, "");
      text = text.replace(/\n+$/g, "");
      var grafs = text.split(/\n{2,}/g);
      var grafsOut = [];
      var markerRe = /~K(\d+)K/;
      var end = grafs.length;
      for (var i = 0; i < end; i++) {
        var str = grafs[i];
        if (markerRe.test(str)) {
          grafsOut.push(str);
        } else if (/\S/.test(str)) {
          str = _RunSpanGamut(str);
          str = str.replace(/^([ \t]*)/g, "<p>");
          str += "</p>";
          grafsOut.push(str);
        }
      }
      if (!doNotUnhash) {
        end = grafsOut.length;
        for (var i = 0; i < end; i++) {
          var foundAny = true;
          while (foundAny) {
            foundAny = false;
            grafsOut[i] = grafsOut[i].replace(/~K(\d+)K/g, function(wholeMatch, id) {
              foundAny = true;
              return g_html_blocks[id];
            });
          }
        }
      }
      return grafsOut.join("\n\n");
    }
    function _EncodeAmpsAndAngles(text) {
      text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
      text = text.replace(/<(?![a-z\/?!]|~D)/gi, "&lt;");
      return text;
    }
    function _EncodeBackslashEscapes(text) {
      text = text.replace(/\\(\\)/g, escapeCharacters_callback);
      text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, escapeCharacters_callback);
      return text;
    }
    var charInsideUrl = "[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]", charEndingUrl = "[-A-Z0-9+&@#/%=~_|[\\])]", autoLinkRegex = new RegExp("(=\"|<)?\\b(https?|ftp)(://" + charInsideUrl + "*" + charEndingUrl + ")(?=$|\\W)", "gi"), endCharRegex = new RegExp(charEndingUrl, "i");
    function handleTrailingParens(wholeMatch, lookbehind, protocol, link) {
      if (lookbehind) return wholeMatch;
      if (link.charAt(link.length - 1) !== ")") return "<" + protocol + link + ">";
      var parens = link.match(/[()]/g);
      var level = 0;
      for (var i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
          if (level <= 0) level = 1; else level++;
        } else {
          level--;
        }
      }
      var tail = "";
      if (level < 0) {
        var re = new RegExp("\\){1," + (- level) + "}$");
        link = link.replace(re, function(trailingParens) {
          tail = trailingParens;
          return "";
        });
      }
      if (tail) {
        var lastChar = link.charAt(link.length - 1);
        if (!endCharRegex.test(lastChar)) {
          tail = lastChar + tail;
          link = link.substr(0, link.length - 1);
        }
      }
      return "<" + protocol + link + ">" + tail;
    }
    function _DoAutoLinks(text) {
      text = text.replace(autoLinkRegex, handleTrailingParens);
      var replacer = function(wholematch, m1) {
        return "<a href=\"" + m1 + "\">" + pluginHooks.plainLinkText(m1) + "</a>";
      };
      text = text.replace(/<((https?|ftp):[^'">\s]+)>/gi, replacer);
      return text;
    }
    function _UnescapeSpecialChars(text) {
      text = text.replace(/~E(\d+)E/g, function(wholeMatch, m1) {
        var charCodeToReplace = parseInt(m1);
        return String.fromCharCode(charCodeToReplace);
      });
      return text;
    }
    function _Outdent(text) {
      text = text.replace(/^(\t|[ ]{1,4})/gm, "~0");
      text = text.replace(/~0/g, "");
      return text;
    }
    function _Detab(text) {
      if (!/\t/.test(text)) return text;
      var spaces = ["    ", "   ", "  ", " "], skew = 0, v;
      return text.replace(/[\n\t]/g, function(match, offset) {
        if (match === "\n") {
          skew = offset + 1;
          return match;
        }
        v = (offset - skew) % 4;
        skew = offset + 1;
        return spaces[v];
      });
    }
    var _problemUrlChars = /(?:["'*()[\]:]|~D)/g;
    function encodeProblemUrlChars(url) {
      if (!url) return "";
      var len = url.length;
      return url.replace(_problemUrlChars, function(match, offset) {
        if (match == "~D") return "%24";
        if (match == ":") {
          if (offset == len - 1 || /[0-9\/]/.test(url.charAt(offset + 1))) return ":";
        }
        return "%" + match.charCodeAt(0).toString(16);
      });
    }
    function escapeCharacters(text, charsToEscape, afterBackslash) {
      var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
      if (afterBackslash) {
        regexString = "\\\\" + regexString;
      }
      var regex = new RegExp(regexString, "g");
      text = text.replace(regex, escapeCharacters_callback);
      return text;
    }
    function escapeCharacters_callback(wholeMatch, m1) {
      var charCodeToEscape = m1.charCodeAt(0);
      return "~E" + charCodeToEscape + "E";
    }
  };
})();
function RecordRTC(mediaStream, config) {
  config = config || {};
  if (!mediaStream) throw 'MediaStream is mandatory.';
  if (!config.type) config.type = 'audio';
  function startRecording() {
    console.debug('started recording ' + config.type + ' stream.');
    var Recorder = IsChrome ? window.StereoRecorder: window.MediaStreamRecorder;
    if (config.type == 'video') Recorder = window.WhammyRecorder;
    if (config.type == 'gif') Recorder = window.GifRecorder;
    if (config.type == 'canvas') Recorder = window.CanvasRecorder;
    mediaRecorder = new Recorder(mediaStream);
    mediaRecorder = mergeProps(mediaRecorder, config);
    mediaRecorder.record();
    return this;
  }
  function stopRecording(callback) {
    if (!mediaRecorder) return console.warn(WARNING);
    console.warn('stopped recording ' + config.type + ' stream.');
    mediaRecorder.stop();
    if (callback && mediaRecorder) {
      var url = URL.createObjectURL(mediaRecorder.recordedBlob);
      callback(url);
    }
    if (config.autoWriteToDisk) {
      getDataURL(function(dataURL) {
        var parameter = {};
        parameter[config.type + 'Blob'] = dataURL;
        DiskStorage.Store(parameter);
      });
    }
  }
  function getDataURL(callback, _mediaRecorder) {
    if (!callback) throw 'Pass a callback function over getDataURL.';
    var reader = new FileReader();
    reader.readAsDataURL(_mediaRecorder ? _mediaRecorder.recordedBlob: mediaRecorder.recordedBlob);
    reader.onload = function(event) {
      callback(event.target.result);
    };
  }
  var WARNING = 'It seems that "startRecording" is not invoked for ' + config.type + ' recorder.';
  var mediaRecorder;
  return {
    startRecording: startRecording,
    stopRecording: stopRecording,
    getBlob: function() {
      if (!mediaRecorder) return console.warn(WARNING);
      return mediaRecorder.recordedBlob;
    },
    getDataURL: getDataURL,
    toURL: function() {
      if (!mediaRecorder) return console.warn(WARNING);
      return URL.createObjectURL(mediaRecorder.recordedBlob);
    },
    save: function() {
      if (!mediaRecorder) return console.warn(WARNING);
      console.log('saving recorded ' + config.type + ' stream to disk!');
      this.getDataURL(function(dataURL) {
        var hyperlink = document.createElement('a');
        hyperlink.href = dataURL;
        hyperlink.target = '_blank';
        hyperlink.download = (Math.round(Math.random() * 9999999999) + 888888888) + '.' + mediaRecorder.recordedBlob.type.split('/')[1];
        var evt = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        hyperlink.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(hyperlink.href);
      });
    },
    getFromDisk: function(callback) {
      if (!mediaRecorder) return console.warn(WARNING);
      RecordRTC.getFromDisk(config.type, callback);
    }
  };
}
RecordRTC.getFromDisk = function(type, callback) {
  if (!callback) throw 'callback is mandatory.';
  console.log('Getting recorded ' + (type == 'all' ? 'blobs': type + ' blob ') + ' from disk!');
  DiskStorage.Fetch(function(dataURL, _type) {
    if (type != 'all' && _type == type + 'Blob') {
      if (callback) callback(dataURL);
    }
    if (type == 'all') {
      if (callback) callback(dataURL, _type.replace('Blob', ''));
    }
  });
};
RecordRTC.writeToDisk = function(options) {
  console.log('Writing recorded blob(s) to disk!');
  options = options || {};
  if (options.audio && options.video && options.gif) {
    options.audio.getDataURL(function(audioDataURL) {
      options.video.getDataURL(function(videoDataURL) {
        options.gif.getDataURL(function(gifDataURL) {
          DiskStorage.Store({
            audioBlob: audioDataURL,
            videoBlob: videoDataURL,
            gifBlob: gifDataURL
          });
        });
      });
    });
  } else if (options.audio && options.video) {
    options.audio.getDataURL(function(audioDataURL) {
      options.video.getDataURL(function(videoDataURL) {
        DiskStorage.Store({
          audioBlob: audioDataURL,
          videoBlob: videoDataURL
        });
      });
    });
  } else if (options.audio && options.gif) {
    options.audio.getDataURL(function(audioDataURL) {
      options.gif.getDataURL(function(gifDataURL) {
        DiskStorage.Store({
          audioBlob: audioDataURL,
          gifBlob: gifDataURL
        });
      });
    });
  } else if (options.video && options.gif) {
    options.video.getDataURL(function(videoDataURL) {
      options.gif.getDataURL(function(gifDataURL) {
        DiskStorage.Store({
          videoBlob: videoDataURL,
          gifBlob: gifDataURL
        });
      });
    });
  } else if (options.audio) {
    options.audio.getDataURL(function(audioDataURL) {
      DiskStorage.Store({audioBlob: audioDataURL});
    });
  } else if (options.video) {
    options.video.getDataURL(function(videoDataURL) {
      DiskStorage.Store({videoBlob: videoDataURL});
    });
  } else if (options.gif) {
    options.gif.getDataURL(function(gifDataURL) {
      DiskStorage.Store({gifBlob: gifDataURL});
    });
  }
};
requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
AudioContext = window.webkitAudioContext || window.mozAudioContext;
URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
if (window.webkitMediaStream) window.MediaStream = window.webkitMediaStream;
IsChrome = !!navigator.webkitGetUserMedia;
function mergeProps(mergein, mergeto) {
  mergeto = reformatProps(mergeto);
  for (var t in mergeto) {
    if (typeof mergeto[t] !== 'function') {
      mergein[t] = mergeto[t];
    }
  }
  return mergein;
}
function reformatProps(obj) {
  var output = {};
  for (var o in obj) {
    if (o.indexOf('-') != - 1) {
      var splitted = o.split('-');
      var name = splitted[0] + splitted[1].split('')[0].toUpperCase() + splitted[1].substr(1);
      output[name] = obj[o];
    } else output[o] = obj[o];
  }
  return output;
}
function MediaStreamRecorder(mediaStream) {
  var self = this;
  this.record = function() {
    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.ondataavailable = function(e) {
      if (self.recordedBlob) self.recordedBlob = new Blob([self.recordedBlob, e.data], {type: 'audio/ogg'}); else self.recordedBlob = new Blob([e.data], {type: 'audio/ogg'});
    };
    mediaRecorder.start(0);
  };
  this.stop = function() {
    if (mediaRecorder.state == 'recording') {
      mediaRecorder.requestData();
      mediaRecorder.stop();
    }
  };
  var mediaRecorder;
}
function StereoRecorder(mediaStream) {
  this.record = function() {
    mediaRecorder = new StereoAudioRecorder(mediaStream, this);
    mediaRecorder.record();
  };
  this.stop = function() {
    if (mediaRecorder) mediaRecorder.stop();
    this.recordedBlob = mediaRecorder.recordedBlob;
  };
  var mediaRecorder;
}
var Storage = {AudioContext: window.AudioContext || window.webkitAudioContext};
var __stereoAudioRecorderJavacriptNode;
function StereoAudioRecorder(mediaStream, root) {
  var leftchannel = [];
  var rightchannel = [];
  var recording = false;
  var recordingLength = 0;
  this.record = function() {
    recording = true;
    leftchannel.length = rightchannel.length = 0;
    recordingLength = 0;
  };
  this.stop = function() {
    recording = false;
    var leftBuffer = mergeBuffers(leftchannel, recordingLength);
    var rightBuffer = mergeBuffers(rightchannel, recordingLength);
    var interleaved = interleave(leftBuffer, rightBuffer);
    var buffer = new ArrayBuffer(44 + interleaved.length * 2);
    var view = new DataView(buffer);
    writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 44 + interleaved.length * 2, true);
    writeUTFBytes(view, 8, 'WAVE');
    writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 2, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 4, true);
    view.setUint16(32, 4, true);
    view.setUint16(34, 16, true);
    writeUTFBytes(view, 36, 'data');
    view.setUint32(40, interleaved.length * 2, true);
    var lng = interleaved.length;
    var index = 44;
    volume = 1;
    for (var i = 0; i < lng; i++) {
      view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
      index += 2;
    }
    this.recordedBlob = new Blob([view], {type: 'audio/wav'});
    this.length = recordingLength;
  };
  function interleave(leftChannel, rightChannel) {
    var length = leftChannel.length + rightChannel.length;
    var result = new Float32Array(length);
    var inputIndex = 0;
    for (var index = 0; index < length;) {
      result[index++] = leftChannel[inputIndex];
      result[index++] = rightChannel[inputIndex];
      inputIndex++;
    }
    return result;
  }
  function mergeBuffers(channelBuffer, rLength) {
    var result = new Float32Array(rLength);
    var offset = 0;
    var lng = channelBuffer.length;
    for (var i = 0; i < lng; i++) {
      var buffer = channelBuffer[i];
      result.set(buffer, offset);
      offset += buffer.length;
    }
    return result;
  }
  function writeUTFBytes(view, offset, string) {
    var lng = string.length;
    for (var i = 0; i < lng; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
  var audioContext = Storage.AudioContext;
  if (!Storage.AudioContextConstructor) Storage.AudioContextConstructor = new audioContext();
  var context = Storage.AudioContextConstructor;
  if (!Storage.VolumeGainNode) Storage.VolumeGainNode = context.createGain();
  var volume = Storage.VolumeGainNode;
  if (!Storage.AudioInput) Storage.AudioInput = context.createMediaStreamSource(mediaStream);
  var audioInput = Storage.AudioInput;
  audioInput.connect(volume);
  var legalBufferValues = [256, 512, 1024, 2048, 4096, 8192, 16384];
  var bufferSize = root.bufferSize || 4096;
  if (legalBufferValues.indexOf(bufferSize) == - 1) {
    throw 'Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t');
  }
  var sampleRate = root.sampleRate || context.sampleRate || 44100;
  if (sampleRate < 22050 || sampleRate > 96000) {
    throw 'sample-rate must be under range 22050 and 96000.';
  }
  console.log('sample-rate', sampleRate);
  console.log('buffer-size', bufferSize);
  if (context.createJavaScriptNode) {
    __stereoAudioRecorderJavacriptNode = context.createJavaScriptNode(bufferSize, 2, 2);
  } else if (context.createScriptProcessor) {
    __stereoAudioRecorderJavacriptNode = context.createScriptProcessor(bufferSize, 2, 2);
  } else {
    throw 'WebAudio API has no support on this browser.';
  }
  __stereoAudioRecorderJavacriptNode.onaudioprocess = function(e) {
    if (!recording) return;
    var left = e.inputBuffer.getChannelData(0);
    var right = e.inputBuffer.getChannelData(1);
    leftchannel.push(new Float32Array(left));
    rightchannel.push(new Float32Array(right));
    recordingLength += bufferSize;
  };
  volume.connect(__stereoAudioRecorderJavacriptNode);
  __stereoAudioRecorderJavacriptNode.connect(context.destination);
}
var isWebPSupported;
(function(callback) {
  var img = new Image();
  img.addEventListener('load', function() {
    if (this.width === 2 && this.height === 1) {
      callback(true);
    } else callback(false);
  });
  img.addEventListener('error', function() {
    callback(false);
  });
  img.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
})(function(_isWebPSupported) {
  isWebPSupported = _isWebPSupported;
});
function WhammyRecorder(mediaStream) {
  if (!isWebPSupported) console.error('It seems that webp images are not supported in this browser. Please try chrome.');
  this.record = function() {
    if (!this.width) this.width = video.offsetWidth || 320;
    if (!this.height) this.height = video.offsetHeight || 240;
    if (!this.video) {
      this.video = {
        width: this.width,
        height: this.height
      };
    }
    if (!this.canvas) {
      this.canvas = {
        width: this.width,
        height: this.height
      };
    }
    canvas.width = this.canvas.width;
    canvas.height = this.canvas.height;
    video.width = this.video.width;
    video.height = this.video.height;
    startTime = Date.now();
    function drawVideoFrame(time) {
      lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
      if (typeof lastFrameTime === undefined) {
        lastFrameTime = time;
      }
      if (time - lastFrameTime < 90) return;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      whammy.add(canvas);
      lastFrameTime = time;
    }
    setTimeout(function() {
      lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
    }, 500);
  };
  this.stop = function() {
    if (lastAnimationFrame) cancelAnimationFrame(lastAnimationFrame);
    endTime = Date.now();
    this.recordedBlob = whammy.compile();
    whammy.frames = [];
  };
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var video = document.createElement('video');
  video.muted = true;
  video.volume = 0;
  video.autoplay = true;
  video.src = URL.createObjectURL(mediaStream);
  video.play();
  var lastAnimationFrame = null;
  var startTime, endTime, lastFrameTime;
  var whammy = new Whammy.Video();
}
function CanvasRecorder(htmlElement) {
  if (!window.html2canvas) throw 'Please link: //www.webrtc-experiment.com/screenshot.js';
  var isRecording;
  this.record = function() {
    isRecording = true;
    drawCanvasFrame();
  };
  this.stop = function() {
    isRecording = false;
    this.recordedBlob = whammy.compile();
    whammy.frames = [];
  };
  function drawCanvasFrame() {
    html2canvas(htmlElement, {onrendered: function(canvas) {
        whammy.add(canvas);
        if (isRecording) requestAnimationFrame(drawCanvasFrame);
      }});
  }
  var whammy = new Whammy.Video();
}
function GifRecorder(mediaStream) {
  this.record = function() {
    if (!this.width) this.width = video.offsetWidth || 320;
    if (!this.height) this.height = video.offsetHeight || 240;
    if (!this.video) {
      this.video = {
        width: this.width,
        height: this.height
      };
    }
    if (!this.canvas) {
      this.canvas = {
        width: this.width,
        height: this.height
      };
    }
    canvas.width = this.canvas.width;
    canvas.height = this.canvas.height;
    video.width = this.video.width;
    video.height = this.video.height;
    gifEncoder = new GIFEncoder();
    gifEncoder.setRepeat(0);
    gifEncoder.setDelay(this.frameRate || 200);
    gifEncoder.setQuality(this.quality || 10);
    gifEncoder.start();
    startTime = Date.now();
    function drawVideoFrame(time) {
      lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
      if (typeof lastFrameTime === undefined) {
        lastFrameTime = time;
      }
      if (time - lastFrameTime < 90) return;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      gifEncoder.addFrame(context);
      lastFrameTime = time;
    }
    lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
  };
  this.stop = function() {
    if (lastAnimationFrame) cancelAnimationFrame(lastAnimationFrame);
    endTime = Date.now();
    this.recordedBlob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {type: 'image/gif'});
    gifEncoder.stream().bin = [];
  };
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var video = document.createElement('video');
  video.muted = true;
  video.autoplay = true;
  video.src = URL.createObjectURL(mediaStream);
  video.play();
  var lastAnimationFrame = null;
  var startTime, endTime, lastFrameTime;
  var gifEncoder;
}
var Whammy = (function() {
  function toWebM(frames) {
    var info = checkFrames(frames);
    var CLUSTER_MAX_DURATION = 30000;
    var EBML = [{
      "id": 0x1a45dfa3,
      "data": [{
        "data": 1,
        "id": 0x4286
      }, {
        "data": 1,
        "id": 0x42f7
      }, {
        "data": 4,
        "id": 0x42f2
      }, {
        "data": 8,
        "id": 0x42f3
      }, {
        "data": "webm",
        "id": 0x4282
      }, {
        "data": 2,
        "id": 0x4287
      }, {
        "data": 2,
        "id": 0x4285
      }]
    }, {
      "id": 0x18538067,
      "data": [{
        "id": 0x1549a966,
        "data": [{
          "data": 1e6,
          "id": 0x2ad7b1
        }, {
          "data": "whammy",
          "id": 0x4d80
        }, {
          "data": "whammy",
          "id": 0x5741
        }, {
          "data": doubleToString(info.duration),
          "id": 0x4489
        }]
      }, {
        "id": 0x1654ae6b,
        "data": [{
          "id": 0xae,
          "data": [{
            "data": 1,
            "id": 0xd7
          }, {
            "data": 1,
            "id": 0x63c5
          }, {
            "data": 0,
            "id": 0x9c
          }, {
            "data": "und",
            "id": 0x22b59c
          }, {
            "data": "V_VP8",
            "id": 0x86
          }, {
            "data": "VP8",
            "id": 0x258688
          }, {
            "data": 1,
            "id": 0x83
          }, {
            "id": 0xe0,
            "data": [{
              "data": info.width,
              "id": 0xb0
            }, {
              "data": info.height,
              "id": 0xba
            }]
          }]
        }]
      }]
    }];
    var frameNumber = 0;
    var clusterTimecode = 0;
    while (frameNumber < frames.length) {
      var clusterFrames = [];
      var clusterDuration = 0;
      do {
        clusterFrames.push(frames[frameNumber]);
        clusterDuration += frames[frameNumber].duration;
        frameNumber++;
      } while (frameNumber < frames.length && clusterDuration < CLUSTER_MAX_DURATION);
      var clusterCounter = 0;
      var cluster = {
        "id": 0x1f43b675,
        "data": [{
          "data": clusterTimecode,
          "id": 0xe7
        }].concat(clusterFrames.map(function(webp) {
          var block = makeSimpleBlock({
            discardable: 0,
            frame: webp.data.slice(4),
            invisible: 0,
            keyframe: 1,
            lacing: 0,
            trackNum: 1,
            timecode: Math.round(clusterCounter)
          });
          clusterCounter += webp.duration;
          return {
            data: block,
            id: 0xa3
          };
        }))
      };
      EBML[1].data.push(cluster);
      clusterTimecode += clusterDuration;
    }
    return generateEBML(EBML);
  }
  function checkFrames(frames) {
    if (!frames[0]) {
      console.warn('Something went wrong. Maybe WebP format is not supported in the current browser.');
      return;
    }
    var width = frames[0].width, height = frames[0].height, duration = frames[0].duration;
    for (var i = 1; i < frames.length; i++) {
      duration += frames[i].duration;
    }
    return {
      duration: duration,
      width: width,
      height: height
    };
  }
  function numToBuffer(num) {
    var parts = [];
    while (num > 0) {
      parts.push(num & 0xff);
      num = num >> 8;
    }
    return new Uint8Array(parts.reverse());
  }
  function strToBuffer(str) {
    return new Uint8Array(str.split('').map(function(e) {
      return e.charCodeAt(0);
    }));
  }
  function bitsToBuffer(bits) {
    var data = [];
    var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0'): '';
    bits = pad + bits;
    for (var i = 0; i < bits.length; i += 8) {
      data.push(parseInt(bits.substr(i, 8), 2));
    }
    return new Uint8Array(data);
  }
  function generateEBML(json) {
    var ebml = [];
    for (var i = 0; i < json.length; i++) {
      var data = json[i].data;
      if (typeof data == 'object') data = generateEBML(data);
      if (typeof data == 'number') data = bitsToBuffer(data.toString(2));
      if (typeof data == 'string') data = strToBuffer(data);
      if (data.length) {
        var z = z;
      }
      var len = data.size || data.byteLength || data.length;
      var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
      var size_str = len.toString(2);
      var padded = (new Array((zeroes * 7 + 7 + 1) - size_str.length)).join('0') + size_str;
      var size = (new Array(zeroes)).join('0') + '1' + padded;
      ebml.push(numToBuffer(json[i].id));
      ebml.push(bitsToBuffer(size));
      ebml.push(data);
    }
    return new Blob(ebml, {type: "video/webm"});
  }
  function toBinStr_old(bits) {
    var data = '';
    var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0'): '';
    bits = pad + bits;
    for (var i = 0; i < bits.length; i += 8) {
      data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
    }
    return data;
  }
  function generateEBML_old(json) {
    var ebml = '';
    for (var i = 0; i < json.length; i++) {
      var data = json[i].data;
      if (typeof data == 'object') data = generateEBML_old(data);
      if (typeof data == 'number') data = toBinStr_old(data.toString(2));
      var len = data.length;
      var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
      var size_str = len.toString(2);
      var padded = (new Array((zeroes * 7 + 7 + 1) - size_str.length)).join('0') + size_str;
      var size = (new Array(zeroes)).join('0') + '1' + padded;
      ebml += toBinStr_old(json[i].id.toString(2)) + toBinStr_old(size) + data;
    }
    return ebml;
  }
  function makeSimpleBlock(data) {
    var flags = 0;
    if (data.keyframe) flags |= 128;
    if (data.invisible) flags |= 8;
    if (data.lacing) flags |= (data.lacing << 1);
    if (data.discardable) flags |= 1;
    if (data.trackNum > 127) {
      throw "TrackNumber > 127 not supported";
    }
    var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
      return String.fromCharCode(e);
    }).join('') + data.frame;
    return out;
  }
  function parseWebP(riff) {
    var VP8 = riff.RIFF[0].WEBP[0];
    var frame_start = VP8.indexOf('\x9d\x01\x2a');
    for (var i = 0, c = []; i < 4; i++) c[i] = VP8.charCodeAt(frame_start + 3 + i);
    var width, horizontal_scale, height, vertical_scale, tmp;
    tmp = (c[1] << 8) | c[0];
    width = tmp & 0x3FFF;
    horizontal_scale = tmp >> 14;
    tmp = (c[3] << 8) | c[2];
    height = tmp & 0x3FFF;
    vertical_scale = tmp >> 14;
    return {
      width: width,
      height: height,
      data: VP8,
      riff: riff
    };
  }
  function parseRIFF(string) {
    var offset = 0;
    var chunks = {};
    while (offset < string.length) {
      var id = string.substr(offset, 4);
      var len = parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
        var unpadded = i.charCodeAt(0).toString(2);
        return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
      }).join(''), 2);
      var data = string.substr(offset + 4 + 4, len);
      offset += 4 + 4 + len;
      chunks[id] = chunks[id] || [];
      if (id == 'RIFF' || id == 'LIST') {
        chunks[id].push(parseRIFF(data));
      } else {
        chunks[id].push(data);
      }
    }
    return chunks;
  }
  function doubleToString(num) {
    return [].slice.call(new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
      return String.fromCharCode(e);
    }).reverse().join('');
  }
  function WhammyVideo() {
    this.frames = [];
    this.duration = 130;
    this.quality = 0.8;
  }
  WhammyVideo.prototype.add = function(frame, duration) {
    if (typeof duration != 'undefined' && this.duration) throw "you can't pass a duration if the fps is set";
    if (typeof duration == 'undefined' && !this.duration) throw "if you don't have the fps set, you ned to have durations here.";
    if ('canvas'in frame) {
      frame = frame.canvas;
    }
    if ('toDataURL'in frame) {
      frame = frame.toDataURL('image/webp', this.quality);
    } else if (typeof frame != "string") {
      throw "frame must be a a HTMLCanvasElement, a CanvasRenderingContext2D or a DataURI formatted string";
    }
    if (!(/^data:image\/webp;base64,/ig).test(frame)) {
      throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
    }
    this.frames.push({
      image: frame,
      duration: duration || this.duration
    });
  };
  WhammyVideo.prototype.compile = function() {
    return new toWebM(this.frames.map(function(frame) {
      var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
      webp.duration = frame.duration;
      return webp;
    }));
  };
  return {
    Video: WhammyVideo,
    toWebM: toWebM
  };
})();
var DiskStorage = {
  init: function() {
    var self = this;
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB;
    var dbVersion = 1;
    var dbName = location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''), db;
    var request = indexedDB.open(dbName, dbVersion);
    function createObjectStore(dataBase) {
      dataBase.createObjectStore(self.dataStoreName);
    }
    function putInDB() {
      var transaction = db.transaction([self.dataStoreName], 'readwrite');
      if (self.videoBlob) {
        transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
      }
      if (self.gifBlob) {
        transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
      }
      if (self.audioBlob) {
        transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
      }
      function getFromStore(portionName) {
        transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
          if (self.callback) self.callback(event.target.result, portionName);
        };
      }
      getFromStore('audioBlob');
      getFromStore('videoBlob');
      getFromStore('gifBlob');
    }
    request.onerror = self.onError;
    request.onsuccess = function() {
      db = request.result;
      db.onerror = self.onError;
      if (db.setVersion) {
        if (db.version != dbVersion) {
          var setVersion = db.setVersion(dbVersion);
          setVersion.onsuccess = function() {
            createObjectStore(db);
            putInDB();
          };
        } else {
          putInDB();
        }
      } else {
        putInDB();
      }
    };
    request.onupgradeneeded = function(event) {
      createObjectStore(event.target.result);
    };
  },
  Fetch: function(callback) {
    this.callback = callback;
    this.init();
    return this;
  },
  Store: function(config) {
    this.audioBlob = config.audioBlob;
    this.videoBlob = config.videoBlob;
    this.gifBlob = config.gifBlob;
    this.init();
    return this;
  },
  onError: function(error) {
    console.error(JSON.stringify(error, null, '\t'));
  },
  dataStoreName: 'recordRTC'
};
function MRecordRTC(mediaStream) {
  this.addStream = function(_mediaStream) {
    if (_mediaStream) mediaStream = _mediaStream;
  };
  this.mediaType = {
    audio: true,
    video: true
  };
  this.startRecording = function() {
    if (this.mediaType.audio) {
      this.audioRecorder = RecordRTC(mediaStream, this).startRecording();
    }
    if (this.mediaType.video) {
      this.videoRecorder = RecordRTC(mediaStream, mergeProps(this, {type: 'video'})).startRecording();
    }
    if (this.mediaType.gif) {
      this.gifRecorder = RecordRTC(mediaStream, mergeProps(this, {type: 'gif'})).startRecording();
    }
  };
  this.stopRecording = function(callback) {
    callback = callback || function() {};
    if (this.audioRecorder) {
      this.audioRecorder.stopRecording(function(blobURL) {
        callback(blobURL, 'audio');
      });
    }
    if (this.videoRecorder) {
      this.videoRecorder.stopRecording(function(blobURL) {
        callback(blobURL, 'video');
      });
    }
    if (this.gifRecorder) {
      this.gifRecorder.stopRecording(function(blobURL) {
        callback(blobURL, 'gif');
      });
    }
  };
  this.getBlob = function(callback) {
    var output = {};
    if (this.audioRecorder) {
      output.audio = this.audioRecorder.getBlob();
    }
    if (this.videoRecorder) {
      output.video = this.videoRecorder.getBlob();
    }
    if (this.gifRecorder) {
      output.gif = this.gifRecorder.getBlob();
    }
    if (callback) callback(output);
  };
  this.writeToDisk = function() {
    RecordRTC.writeToDisk({
      audio: this.audioRecorder,
      video: this.videoRecorder,
      gif: this.gifRecorder
    });
  };
}
MRecordRTC.getFromDisk = RecordRTC.getFromDisk;
MRecordRTC.writeToDisk = RecordRTC.writeToDisk;
function encode64(n) {
  for (var o = "", f = 0, l = n.length, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s, i, r, c, h, e, t; f < l;) s = n.charCodeAt(f++), i = n.charCodeAt(f++), r = n.charCodeAt(f++), c = s >> 2, h = (s & 3) << 4 | i >> 4, e = (i & 15) << 2 | r >> 6, t = r & 63, isNaN(i) ? e = t = 64: isNaN(r) && (t = 64), o = o + u.charAt(c) + u.charAt(h) + u.charAt(e) + u.charAt(t);
  return o;
}
LZWEncoder = function() {
  var c = {}, it = - 1, st, ht, rt, l, w, et, ut = 12, ct = 5003, t, ft = ut, o, ot = 1 << ut, u = [], y = [], a = ct, s = 0, h = !1, v, f, p, i = 0, n = 0, vt = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], r, g = [], lt = c.LZWEncoder = function lt(n, t, i, r) {
    st = n, ht = t, rt = i, l = Math.max(2, r);
  }, nt = function(n, t) {
    g[r++] = n, r >= 254 && k(t);
  }, at = function(n) {
    tt(a), s = f + 2, h = !0, e(f, n);
  }, tt = function(n) {
    for (var t = 0; t < n; ++t) u[t] = - 1;
  }, yt = c.compress = function yt(n, i) {
    var w, c, nt, l, rt, g, k;
    for (v = n, h = !1, t = v, o = b(t), f = 1 << n - 1, p = f + 1, s = f + 2, r = 0, l = d(), k = 0, w = a; w < 65536; w *= 2)++k;
    k = 8 - k, g = a, tt(g), e(f, i);
    n: while ((nt = d()) != it) {
      if (w = (nt << ft) + l, c = nt << k^l, u[c] == w) {
        l = y[c];
        continue;
      } else if (u[c] >= 0) {
        rt = g - c, c == 0 && (rt = 1);
        do if ((c -= rt) < 0 && (c += g), u[c] == w) {
          l = y[c];
          continue n;
        } while (u[c] >= 0);
      }
      e(l, i), l = nt, s < ot ? (y[c] = s++, u[c] = w): at(i);
    }
    e(l, i), e(p, i);
  }, pt = c.encode = function(n) {
    n.writeByte(l), w = st * ht, et = 0, yt(l + 1, n), n.writeByte(0);
  }, k = function(n) {
    r > 0 && (n.writeByte(r), n.writeBytes(g, 0, r), r = 0);
  }, b = function(n) {
    return (1 << n) - 1;
  }, d = function() {
    if (w == 0) return it;
    --w;
    var n = rt[et++];
    return n & 255;
  }, e = function(r, u) {
    for (i &= vt[n], n > 0 ? i |= r << n: i = r, n += t; n >= 8;) nt(i & 255, u), i >>= 8, n -= 8;
    if ((s > o || h) && (h ? (o = b(t = v), h = !1): (++t, o = t == ft ? ot: b(t))), r == p) {
      while (n > 0) nt(i & 255, u), i >>= 8, n -= 8;
      k(u);
    }
  };
  return lt.apply(this, arguments), c;
}, NeuQuant = function() {
  var c = {}, t = 256, tt = 499, nt = 491, rt = 487, it = 503, g = 3 * it, b = t - 1, r = 4, pt = 100, ft = 16, y = 1 << ft, p = 10, ii = 1 << p, a = 10, gt = y >> a, dt = y << p - a, ni = t >> 3, l = 6, ti = 1 << l, wt = ni * ti, kt = 30, ut = 10, e = 1 << ut, et, k = 8, d = 1 << k, bt = ut + k, u = 1 << bt, w, i, h, n, f = [], o = [], s = [], v = [], ht = c.NeuQuant = function ht(u, f, e) {
    var c, l;
    for (w = u, i = f, h = e, n = new Array(t), c = 0; c < t; c++) n[c] = new Array(4), l = n[c], l[0] = l[1] = l[2] = (c << r + 8) / t, s[c] = y / t, o[c] = 0;
  }, ot = function() {
    for (var e = [], o = new Array(t), f, r, u, i = 0; i < t; i++) o[n[i][3]] = i;
    for (f = 0, r = 0; r < t; r++) u = o[r], e[f++] = n[u][0], e[f++] = n[u][1], e[f++] = n[u][2];
    return e;
  }, ct = function() {
    var e, i, c, s, u, r, o, h;
    for (o = 0, h = 0, e = 0; e < t; e++) {
      for (u = n[e], c = e, s = u[1], i = e + 1; i < t; i++) r = n[i], r[1] < s && (c = i, s = r[1]);
      if (r = n[c], e != c && (i = r[0], r[0] = u[0], u[0] = i, i = r[1], r[1] = u[1], u[1] = i, i = r[2], r[2] = u[2], u[2] = i, i = r[3], r[3] = u[3], u[3] = i), s != o) {
        for (f[o] = h + e >> 1, i = o + 1; i < s; i++) f[i] = e;
        o = s, h = e;
      }
    }
    for (f[o] = h + b >> 1, i = o + 1; i < 256; i++) f[i] = b;
  }, vt = function() {
    var t, u, k, b, p, c, n, s, o, y, ut, a, f, ft;
    for (i < g && (h = 1), et = 30 + (h - 1) / 3, a = w, f = 0, ft = i, ut = i / (3 * h), y = ut / pt | 0, s = e, c = wt, n = c >> l, n <= 1 && (n = 0), t = 0; t < n; t++) v[t] = s * ((n * n - t * t) * d / (n * n));
    for (o = i < g ? 3: i % tt != 0 ? 3 * tt: i % nt != 0 ? 3 * nt: i % rt != 0 ? 3 * rt: 3 * it, t = 0; t < ut;) if (k = (a[f + 0] & 255) << r, b = (a[f + 1] & 255) << r, p = (a[f + 2] & 255) << r, u = yt(k, b, p), at(s, u, k, b, p), n != 0 && lt(n, u, k, b, p), f += o, f >= ft && (f -= i), t++, y == 0 && (y = 1), t % y == 0) for (s -= s / et, c -= c / kt, n = c >> l, n <= 1 && (n = 0), u = 0; u < n; u++) v[u] = s * ((n * n - u * u) * d / (n * n));
  }, ri = c.map = function(i, r, u) {
    var c, l, e, o, h, s, a;
    for (h = 1e3, a = - 1, c = f[r], l = c - 1; c < t || l >= 0;) c < t && (s = n[c], e = s[1] - r, e >= h ? c = t: (c++, e < 0 && (e = - e), o = s[0] - i, o < 0 && (o = - o), e += o, e < h && (o = s[2] - u, o < 0 && (o = - o), e += o, e < h && (h = e, a = s[3])))), l >= 0 && (s = n[l], e = r - s[1], e >= h ? l = - 1: (l--, e < 0 && (e = - e), o = s[0] - i, o < 0 && (o = - o), e += o, e < h && (o = s[2] - u, o < 0 && (o = - o), e += o, e < h && (h = e, a = s[3]))));
    return a;
  }, ui = c.process = function() {
    return vt(), st(), ct(), ot();
  }, st = function() {
    for (var u, i = 0; i < t; i++) n[i][0] >>= r, n[i][1] >>= r, n[i][2] >>= r, n[i][3] = i;
  }, lt = function(i, r, f, e, o) {
    var a, y, l, c, h, p, s;
    for (l = r - i, l < - 1 && (l = - 1), c = r + i, c > t && (c = t), a = r + 1, y = r - 1, p = 1; a < c || y > l;) {
      if (h = v[p++], a < c) {
        s = n[a++];
        try {
          s[0] -= h * (s[0] - f) / u, s[1] -= h * (s[1] - e) / u, s[2] -= h * (s[2] - o) / u;
        } catch (w) {}
      }
      if (y > l) {
        s = n[y--];
        try {
          s[0] -= h * (s[0] - f) / u, s[1] -= h * (s[1] - e) / u, s[2] -= h * (s[2] - o) / u;
        } catch (w) {}
      }
    }
  }, at = function(t, i, r, u, f) {
    var o = n[i];
    o[0] -= t * (o[0] - r) / e, o[1] -= t * (o[1] - u) / e, o[2] -= t * (o[2] - f) / e;
  }, yt = function(i, u, f) {
    var h, c, e, b, d, l, k, v, w, y;
    for (v = 2147483647, w = v, l = - 1, k = l, h = 0; h < t; h++) y = n[h], c = y[0] - i, c < 0 && (c = - c), e = y[1] - u, e < 0 && (e = - e), c += e, e = y[2] - f, e < 0 && (e = - e), c += e, c < v && (v = c, l = h), b = c - (o[h] >> ft - r), b < w && (w = b, k = h), d = s[h] >> a, s[h] -= d, o[h] += d << p;
    return s[l] += gt, o[l] -= dt, k;
  };
  return ht.apply(this, arguments), c;
}, GIFEncoder = function() {
  function h() {
    this.bin = [];
  }
  for (var c = 0, w = {}; c < 256; c++) w[c] = String.fromCharCode(c);
  h.prototype.getData = function() {
    for (var t = "", i = this.bin.length, n = 0; n < i; n++) t += w[this.bin[n]];
    return t;
  }, h.prototype.writeByte = function(n) {
    this.bin.push(n);
  }, h.prototype.writeUTFBytes = function(n) {
    for (var i = n.length, t = 0; t < i; t++) this.writeByte(n.charCodeAt(t));
  }, h.prototype.writeBytes = function(n, t, i) {
    for (var u = i || n.length, r = t || 0; r < u; r++) this.writeByte(n[r]);
  };
  var t = {}, o, s, v = null, g, k = - 1, d = 0, f = !1, n, a, i, l, rt, r, ut = [], p = 7, y = - 1, b = !1, e = !0, ft = !1, it = 10, gt = t.setDelay = function(n) {
    d = Math.round(n / 10);
  }, ni = t.setDispose = function(n) {
    n >= 0 && (y = n);
  }, dt = t.setRepeat = function(n) {
    n >= 0 && (k = n);
  }, bt = t.setTransparent = function(n) {
    v = n;
  }, kt = t.addFrame = function(t, i) {
    if (t == null || !f || n == null) {
      throw new Error("Please call start method before calling addFrame");
      return !1;
    }
    var r = !0;
    try {
      i ? a = t: (a = t.getImageData(0, 0, t.canvas.width, t.canvas.height).data, ft || et(t.canvas.width, t.canvas.height)), ct(), ht(), e && (vt(), tt(), k >= 0 && lt()), st(), ot(), e || tt(), at(), e = !1;
    } catch (u) {
      r = !1;
    }
    return r;
  }, ui = t.finish = function() {
    if (!f) return !1;
    var t = !0;
    f = !1;
    try {
      n.writeByte(59);
    } catch (i) {
      t = !1;
    }
    return t;
  }, nt = function() {
    g = 0, a = null, i = null, l = null, r = null, b = !1, e = !0;
  }, fi = t.setFrameRate = function(n) {
    n != 15 && (d = Math.round(100 / n));
  }, ri = t.setQuality = function(n) {
    n < 1 && (n = 1), it = n;
  }, et = t.setSize = function et(n, t) {
    (!f || e) && (o = n, s = t, o < 1 && (o = 320), s < 1 && (s = 240), ft = !0);
  }, ti = t.start = function() {
    nt();
    var t = !0;
    b = !1, n = new h;
    try {
      n.writeUTFBytes("GIF89a");
    } catch (i) {
      t = !1;
    }
    return f = t;
  }, ii = t.cont = function() {
    nt();
    var t = !0;
    return b = !1, n = new h, f = t;
  }, ht = function() {
    var e = i.length, o = e / 3, f, n, t, u;
    for (l = [], f = new NeuQuant(i, e, it), r = f.process(), n = 0, t = 0; t < o; t++) u = f.map(i[n++] & 255, i[n++] & 255, i[n++] & 255), ut[u] = !0, l[t] = u;
    i = null, rt = 8, p = 7, v != null && (g = yt(v));
  }, yt = function(n) {
    var t;
    if (r == null) return - 1;
    var c = (n & 16711680) >> 16, v = (n & 65280) >> 8, a = n & 255, s = 0, h = 16777216, l = r.length;
    for (t = 0; t < l;) {
      var i = c - (r[t++] & 255), e = v - (r[t++] & 255), u = a - (r[t] & 255), f = i * i + e * e + u * u, o = t / 3;
      ut[o] && f < h && (h = f, s = o), t++;
    }
    return s;
  }, ct = function() {
    var e = o, h = s, f, u, t, r, n;
    for (i = [], f = a, u = 0, t = 0; t < h; t++) for (r = 0; r < e; r++) n = t * e * 4 + r * 4, i[u++] = f[n], i[u++] = f[n + 1], i[u++] = f[n + 2];
  }, st = function() {
    n.writeByte(33), n.writeByte(249), n.writeByte(4);
    var i, t;
    v == null ? (i = 0, t = 0): (i = 1, t = 2), y >= 0 && (t = y & 7), t <<= 2, n.writeByte(0 | t | 0 | i), u(d), n.writeByte(g), n.writeByte(0);
  }, ot = function() {
    n.writeByte(44), u(0), u(0), u(o), u(s), e ? n.writeByte(0): n.writeByte(128 | p);
  }, vt = function() {
    u(o), u(s), n.writeByte(240 | p), n.writeByte(0), n.writeByte(0);
  }, lt = function() {
    n.writeByte(33), n.writeByte(255), n.writeByte(11), n.writeUTFBytes("NETSCAPE2.0"), n.writeByte(3), n.writeByte(1), u(k), n.writeByte(0);
  }, tt = function() {
    var i, t;
    for (n.writeBytes(r), i = 768 - r.length, t = 0; t < i; t++) n.writeByte(0);
  }, u = function(t) {
    n.writeByte(t & 255), n.writeByte(t >> 8 & 255);
  }, at = function() {
    var t = new LZWEncoder(o, s, l, rt);
    t.encode(n);
  }, wt = t.stream = function() {
    return n;
  }, pt = t.setProperties = function(n, t) {
    f = n, e = t;
  };
  return t;
};
!function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(a): "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = a(): window.Sortable = a();
}(function() {
  "use strict";
  function a(a, c) {
    this.el = a, this.options = c = c || {}, c.group = c.group || Math.random(), c.handle = c.handle || null, c.draggable = c.draggable || a.children[0] && a.children[0].nodeName || "li", c.ghostClass = c.ghostClass || "sortable-ghost", c.onAdd = b(this, c.onAdd || A), c.onUpdate = b(this, c.onUpdate || A), c.onRemove = b(this, c.onRemove || A), a[u] = c.group;
    for (var d in this)"_" === d.charAt(0) && (this[d] = b(this, this[d]));
    e(a, "add", c.onAdd), e(a, "update", c.onUpdate), e(a, "remove", c.onRemove), e(a, "mousedown", this._onTapStart), e(a, "touchstart", this._onTapStart), e(a, "selectstart", this._onTapStart), e(a, "dragover", this._onDragOver), e(a, "dragenter", this._onDragOver), C.push(this._onDragOver);
  }
  function b(a, b) {
    var c = B.call(arguments, 2);
    return b.bind ? b.bind.apply(b, [a].concat(c)): function() {
      return b.apply(a, c.concat(B.call(arguments)));
    };
  }
  function c(a, b, c) {
    if (a) {
      c = c || w, b = b.split(".");
      var d = b.shift().toUpperCase(), e = new RegExp("\\s(" + b.join("|") + ")\\s", "g");
      do if (!("" !== d && a.nodeName != d || b.length && ((" " + a.className + " ").match(e) || []).length != b.length)) return a; while (a !== c && (a = a.parentNode));
    }
    return null;
  }
  function d(a) {
    a.dataTransfer.dropEffect = "move", a.preventDefault();
  }
  function e(a, b, c) {
    a.addEventListener(b, c, !1);
  }
  function f(a, b, c) {
    a.removeEventListener(b, c, !1);
  }
  function g(a, b, c) {
    if (a) if (a.classList) a.classList[c ? "add": "remove"](b); else {
      var d = (" " + a.className + " ").replace(/\s+/g, " ").replace(" " + b + " ", "");
      a.className = d + (c ? " " + b: "");
    }
  }
  function h(a, b, c) {
    if (a && a.style) {
      if (void 0 === c) return w.defaultView && w.defaultView.getComputedStyle ? c = w.defaultView.getComputedStyle(a, ""): a.currentStyle && (c = a.currentStyle), void 0 === b ? c: c[b];
      a.style[b] = c + ("string" == typeof c ? "": "px");
    }
  }
  function i(a, b, c) {
    if (a) {
      var d = a.getElementsByTagName(b), e = 0, f = d.length;
      if (c) for (; f > e; e++) c(d[e], e);
      return d;
    }
    return [];
  }
  function j(a) {
    return a.draggable = !1;
  }
  function k() {
    y = !1;
  }
  var l, m, n, o, p, q, r, s, t, u = "Sortable" + (new Date).getTime(), v = window, w = v.document, x = v.parseInt, y = !1, z = function(a, b) {
    var c = w.createEvent("Event");
    return c.initEvent(a, !0, !0), c.item = b, c;
  }, A = function() {}, B = [].slice, C = [];
  return a.prototype = {
    constructor: a,
    _applyEffects: function() {
      g(l, this.options.ghostClass, !0);
    },
    _onTapStart: function(a) {
      var b = a.touches && a.touches[0], f = (b || a).target, g = this.options, h = this.el;
      if (g.handle && (f = c(f, g.handle, h)), f = c(f, g.draggable, h), f && "selectstart" == a.type && "A" != f.tagName && "IMG" != f.tagName && f.dragDrop(), f && !l && f.parentNode === h) {
        s = a, f.draggable = !0, i(f, "a", j), i(f, "img", j), b && (s = {
          target: f,
          clientX: b.clientX,
          clientY: b.clientY
        }, this._onDragStart(s, !0), a.preventDefault()), e(this.el, "dragstart", this._onDragStart), e(this.el, "dragend", this._onDrop), e(w, "dragover", d);
        try {
          w.selection ? w.selection.empty(): window.getSelection().removeAllRanges();
        } catch (k) {}
      }
    },
    _emulateDragOver: function() {
      if (t) {
        h(m, "display", "none");
        var a = w.elementFromPoint(t.clientX, t.clientY), b = a, c = this.options.group, d = C.length;
        do {
          if (b[u] === c) {
            for (; d--;) C[d]({
              clientX: t.clientX,
              clientY: t.clientY,
              target: a,
              rootEl: b
            });
            break;
          }
          a = b;
        } while (b = b.parentNode);
        h(m, "display", "");
      }
    },
    _onTouchMove: function(a) {
      if (s) {
        var b = a.touches[0], c = b.clientX - s.clientX, d = b.clientY - s.clientY;
        t = b, h(m, "webkitTransform", "translate3d(" + c + "px," + d + "px,0)");
      }
    },
    _onDragStart: function(a, b) {
      var c = a.target, d = a.dataTransfer;
      if (n = this.el, l = c, o = c.nextSibling, r = this.options.group, b) {
        var f, g = c.getBoundingClientRect(), i = h(c);
        m = c.cloneNode(!0), h(m, "top", g.top - x(i.marginTop, 10)), h(m, "left", g.left - x(i.marginLeft, 10)), h(m, "width", g.width), h(m, "height", g.height), h(m, "opacity", "0.8"), h(m, "position", "fixed"), h(m, "zIndex", "100000"), n.appendChild(m), f = m.getBoundingClientRect(), h(m, "width", 2 * g.width - f.width), h(m, "height", 2 * g.height - f.height), e(w, "touchmove", this._onTouchMove), e(w, "touchend", this._onDrop), this._loopId = setInterval(this._emulateDragOver, 150);
      } else d.effectAllowed = "move", d.setData("Text", c.textContent), e(w, "drop", this._onDrop);
      setTimeout(this._applyEffects);
    },
    _onDragOver: function(a) {
      if (!y && r === this.options.group && (void 0 === a.rootEl || a.rootEl === this.el)) {
        var b = this.el, d = c(a.target, this.options.draggable, b);
        if (0 === b.children.length || b.children[0] === m) b.appendChild(l); else if (d && d !== l && void 0 !== d.parentNode[u]) {
          p !== d && (p = d, q = h(d));
          var e, f = d.getBoundingClientRect(), g = f.right - f.left, i = f.bottom - f.top, j = /left|right|inline/.test(q.cssFloat + q.display), n = (j ? (a.clientX - f.left) / g: (a.clientY - f.top) / i) > .5, o = d.offsetWidth > l.offsetWidth, s = d.offsetHeight > l.offsetHeight, t = d.nextSibling;
          y = !0, setTimeout(k, 30), e = j ? d.previousElementSibling === l && !o || n > .5 && o: d.nextElementSibling !== l && !s || n > .5 && s, e && !t ? b.appendChild(l): d.parentNode.insertBefore(l, e ? t: d);
        }
      }
    },
    _onDrop: function(a) {
      clearInterval(this._loopId), f(w, "drop", this._onDrop), f(w, "dragover", d), f(this.el, "dragend", this._onDrop), f(this.el, "dragstart", this._onDragStart), f(this.el, "selectstart", this._onTapStart), f(w, "touchmove", this._onTouchMove), f(w, "touchend", this._onDrop), a && (a.preventDefault(), a.stopPropagation(), m && m.parentNode.removeChild(m), l && (g(l, this.options.ghostClass, !1), n.contains(l) ? l.nextSibling !== o && l.dispatchEvent(z("update", l)): (n.dispatchEvent(z("remove", l)), l.dispatchEvent(z("add", l)))), n = l = m = o = s = t = p = q = r = null);
    },
    destroy: function() {
      var a = this.el, b = this.options;
      f(a, "add", b.onAdd), f(a, "update", b.onUpdate), f(a, "remove", b.onRemove), f(a, "mousedown", this._onTapStart), f(a, "touchstart", this._onTapStart), f(a, "selectstart", this._onTapStart), f(a, "dragover", this._onDragOver), f(a, "dragenter", this._onDragOver), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(a) {
        a.removeAttribute("draggable");
      }), C.splice(C.indexOf(this._onDragOver), 1), this._onDrop(), this.el = null;
    }
  }, a.utils = {
    on: e,
    off: f,
    css: h,
    find: i,
    bind: b,
    closest: c,
    toggleClass: g
  }, a.version = "0.1.6", a;
});
var base64ArrayBuffer = (function(chars) {
  "use strict";
  var base64ArrayBuffer = {};
  base64ArrayBuffer.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }
    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }
    return base64;
  };
  base64ArrayBuffer.decode = function(base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i + 1]);
      encoded3 = chars.indexOf(base64[i + 2]);
      encoded4 = chars.indexOf(base64[i + 3]);
      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
  };
  return base64ArrayBuffer;
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
var Base64 = (function() {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var obj = {
    encode: function(input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
      } while (i < input.length);
      return output;
    },
    decode: function(input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      } while (i < input.length);
      return output;
    }
  };
  return obj;
})();
if (typeof exports !== 'undefined') {
  module.exports = Base64;
} else {
  window.Base64 = Base64;
}
(function() {
  var XMLHttpRequest, Base64, _;
  if (typeof exports !== 'undefined') {
    XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    _ = require('underscore');
    Base64 = require('./lib/base64.js');
  } else {
    _ = window._;
    Base64 = window.Base64;
  }
  if (typeof window !== 'undefined' && typeof window.XMLHttpRequest !== 'undefined') {
    XMLHttpRequest = window.XMLHttpRequest;
  }
  var API_URL = 'https://api.github.com';
  var Github = function(options) {
    function _request(method, path, data, cb, raw, sync) {
      function getURL() {
        var url = path.indexOf('//') >= 0 ? path: API_URL + path;
        return url + ((/\?/).test(url) ? "&": "?") + (new Date()).getTime();
      }
      var xhr = new XMLHttpRequest();
      if (!raw) {
        xhr.dataType = "json";
      }
      xhr.open(method, getURL(), !sync);
      if (!sync) {
        xhr.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status >= 200 && this.status < 300 || this.status === 304) {
              cb(null, raw ? this.responseText: this.responseText ? JSON.parse(this.responseText): true, this);
            } else {
              cb({
                path: path,
                request: this,
                error: this.status
              });
            }
          }
        };
      }
      ;
      xhr.setRequestHeader('Accept', 'application/vnd.github.raw+json');
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      if ((options.token) || (options.username && options.password)) {
        xhr.setRequestHeader('Authorization', options.token ? 'token ' + options.token: 'Basic ' + Base64.encode(options.username + ':' + options.password));
      }
      data ? xhr.send(JSON.stringify(data)): xhr.send();
      if (sync) return xhr.response;
    }
    function _requestAllPages(path, cb) {
      var results = [];
      (function iterate() {
        _request("GET", path, null, function(err, res, xhr) {
          if (err) {
            return cb(err);
          }
          results.push.apply(results, res);
          var links = (xhr.getResponseHeader('link') || '').split(/\s*,\s*/g), next = _.find(links, function(link) {
            return /rel="next"/.test(link);
          });
          if (next) {
            next = (/<(.*)>/.exec(next) || [])[1];
          }
          if (!next) {
            cb(err, results);
          } else {
            path = next;
            iterate();
          }
        });
      })();
    }
    Github.User = function() {
      this.repos = function(cb) {
        _requestAllPages("/user/repos?type=all&per_page=1000&sort=updated", function(err, res) {
          cb(err, res);
        });
      };
      this.orgs = function(cb) {
        _request("GET", "/user/orgs", null, function(err, res) {
          cb(err, res);
        });
      };
      this.gists = function(cb) {
        _request("GET", "/gists", null, function(err, res) {
          cb(err, res);
        });
      };
      this.notifications = function(cb) {
        _request("GET", "/notifications", null, function(err, res) {
          cb(err, res);
        });
      };
      this.show = function(username, cb) {
        var command = username ? "/users/" + username: "/user";
        _request("GET", command, null, function(err, res) {
          cb(err, res);
        });
      };
      this.userRepos = function(username, cb) {
        _requestAllPages("/users/" + username + "/repos?type=all&per_page=1000&sort=updated", function(err, res) {
          cb(err, res);
        });
      };
      this.userGists = function(username, cb) {
        _request("GET", "/users/" + username + "/gists", null, function(err, res) {
          cb(err, res);
        });
      };
      this.orgRepos = function(orgname, cb) {
        _requestAllPages("/orgs/" + orgname + "/repos?type=all&&page_num=1000&sort=updated&direction=desc", function(err, res) {
          cb(err, res);
        });
      };
      this.follow = function(username, cb) {
        _request("PUT", "/user/following/" + username, null, function(err, res) {
          cb(err, res);
        });
      };
      this.unfollow = function(username, cb) {
        _request("DELETE", "/user/following/" + username, null, function(err, res) {
          cb(err, res);
        });
      };
    };
    Github.Repository = function(options) {
      var repo = options.name;
      var user = options.user;
      var that = this;
      var repoPath = "/repos/" + user + "/" + repo;
      var currentTree = {
        "branch": null,
        "sha": null
      };
      function updateTree(branch, cb) {
        if (branch === currentTree.branch && currentTree.sha) return cb(null, currentTree.sha);
        that.getRef("heads/" + branch, function(err, sha) {
          currentTree.branch = branch;
          currentTree.sha = sha;
          cb(err, sha);
        });
      }
      this.getRef = function(ref, cb) {
        _request("GET", repoPath + "/git/refs/" + ref, null, function(err, res) {
          if (err) return cb(err);
          cb(null, res.object.sha);
        });
      };
      this.createRef = function(options, cb) {
        _request("POST", repoPath + "/git/refs", options, cb);
      };
      this.deleteRef = function(ref, cb) {
        _request("DELETE", repoPath + "/git/refs/" + ref, options, cb);
      };
      this.createRepo = function(options, cb) {
        _request("POST", "/user/repos", options, cb);
      };
      this.deleteRepo = function(cb) {
        _request("DELETE", repoPath, options, cb);
      };
      this.listTags = function(cb) {
        _request("GET", repoPath + "/tags", null, function(err, tags) {
          if (err) return cb(err);
          cb(null, tags);
        });
      };
      this.listPulls = function(state, cb) {
        _request("GET", repoPath + "/pulls" + (state ? '?state=' + state: ''), null, function(err, pulls) {
          if (err) return cb(err);
          cb(null, pulls);
        });
      };
      this.getPull = function(number, cb) {
        _request("GET", repoPath + "/pulls/" + number, null, function(err, pull) {
          if (err) return cb(err);
          cb(null, pull);
        });
      };
      this.compare = function(base, head, cb) {
        _request("GET", repoPath + "/compare/" + base + "..." + head, null, function(err, diff) {
          if (err) return cb(err);
          cb(null, diff);
        });
      };
      this.listBranches = function(cb) {
        _request("GET", repoPath + "/git/refs/heads", null, function(err, heads) {
          if (err) return cb(err);
          cb(null, _.map(heads, function(head) {
            return _.last(head.ref.split('/'));
          }));
        });
      };
      this.getBlob = function(sha, cb) {
        _request("GET", repoPath + "/git/blobs/" + sha, null, cb, 'raw');
      };
      this.getSha = function(branch, path, cb) {
        if (path === "") return that.getRef("heads/" + branch, cb);
        that.getTree(branch + "?recursive=true", function(err, tree) {
          if (err) return cb(err);
          var file = _.select(tree, function(file) {
            return file.path === path;
          })[0];
          cb(null, file ? file.sha: null);
        });
      };
      this.getTree = function(tree, cb) {
        _request("GET", repoPath + "/git/trees/" + tree, null, function(err, res) {
          if (err) return cb(err);
          cb(null, res.tree);
        });
      };
      this.postBlob = function(content, cb) {
        if (typeof (content) === "string") {
          content = {
            "content": content,
            "encoding": "utf-8"
          };
        }
        _request("POST", repoPath + "/git/blobs", content, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };
      this.updateTree = function(baseTree, path, blob, cb) {
        var data = {
          "base_tree": baseTree,
          "tree": [{
            "path": path,
            "mode": "100644",
            "type": "blob",
            "sha": blob
          }]
        };
        _request("POST", repoPath + "/git/trees", data, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };
      this.postTree = function(tree, cb) {
        _request("POST", repoPath + "/git/trees", {"tree": tree}, function(err, res) {
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };
      this.commit = function(parent, tree, message, cb) {
        var data = {
          "message": message,
          "author": {"name": options.username},
          "parents": [parent],
          "tree": tree
        };
        _request("POST", repoPath + "/git/commits", data, function(err, res) {
          currentTree.sha = res.sha;
          if (err) return cb(err);
          cb(null, res.sha);
        });
      };
      this.updateHead = function(head, commit, cb) {
        _request("PATCH", repoPath + "/git/refs/heads/" + head, {"sha": commit}, function(err, res) {
          cb(err);
        });
      };
      this.show = function(cb) {
        _request("GET", repoPath, null, cb);
      };
      this.contents = function(branch, path, cb, sync) {
        return _request("GET", repoPath + "/contents?ref=" + branch + (path ? "&path=" + path: ""), null, cb, 'raw', sync);
      };
      this.fork = function(cb) {
        _request("POST", repoPath + "/forks", null, cb);
      };
      this.branch = function(oldBranch, newBranch, cb) {
        if (arguments.length === 2 && typeof arguments[1] === "function") {
          cb = newBranch;
          newBranch = oldBranch;
          oldBranch = "master";
        }
        this.getRef("heads/" + oldBranch, function(err, ref) {
          if (err && cb) return cb(err);
          that.createRef({
            ref: "refs/heads/" + newBranch,
            sha: ref
          }, cb);
        });
      };
      this.createPullRequest = function(options, cb) {
        _request("POST", repoPath + "/pulls", options, cb);
      };
      this.listHooks = function(cb) {
        _request("GET", repoPath + "/hooks", null, cb);
      };
      this.getHook = function(id, cb) {
        _request("GET", repoPath + "/hooks/" + id, null, cb);
      };
      this.createHook = function(options, cb) {
        _request("POST", repoPath + "/hooks", options, cb);
      };
      this.editHook = function(id, options, cb) {
        _request("PATCH", repoPath + "/hooks/" + id, options, cb);
      };
      this.deleteHook = function(id, cb) {
        _request("DELETE", repoPath + "/hooks/" + id, null, cb);
      };
      this.read = function(branch, path, cb) {
        that.getSha(branch, path, function(err, sha) {
          if (!sha) return cb("not found", null);
          that.getBlob(sha, function(err, content) {
            cb(err, content, sha);
          });
        });
      };
      this.readBase64 = function(branch, path, cb) {
        that.getSha(branch, path, function(err, sha) {
          if (!sha) return cb("not found", null);
          $.get(API_URL + repoPath + "/git/blobs/" + sha).fail(cb).done(function(resp) {
            cb(null, resp.content, sha);
          });
        });
      };
      this.remove = function(branch, path, cb) {
        updateTree(branch, function(err, latestCommit) {
          that.getTree(latestCommit + "?recursive=true", function(err, tree) {
            var newTree = _.reject(tree, function(ref) {
              return ref.path === path;
            });
            _.each(newTree, function(ref) {
              if (ref.type === "tree") delete ref.sha;
            });
            that.postTree(newTree, function(err, rootTree) {
              that.commit(latestCommit, rootTree, 'Deleted ' + path, function(err, commit) {
                that.updateHead(branch, commit, function(err) {
                  cb(err);
                });
              });
            });
          });
        });
      };
      this.delete = function(branch, path, cb) {
        that.getSha(branch, path, function(err, sha) {
          if (!sha) return cb("not found", null);
          var delPath = repoPath + "/contents/" + path;
          var params = {
            "message": "Deleted " + path,
            "sha": sha
          };
          delPath += "?message=" + encodeURIComponent(params.message);
          delPath += "&sha=" + encodeURIComponent(params.sha);
          _request("DELETE", delPath, null, cb);
        });
      };
      this.move = function(branch, path, newPath, cb) {
        updateTree(branch, function(err, latestCommit) {
          that.getTree(latestCommit + "?recursive=true", function(err, tree) {
            _.each(tree, function(ref) {
              if (ref.path === path) ref.path = newPath;
              if (ref.type === "tree") delete ref.sha;
            });
            that.postTree(tree, function(err, rootTree) {
              that.commit(latestCommit, rootTree, 'Deleted ' + path, function(err, commit) {
                that.updateHead(branch, commit, function(err) {
                  cb(err);
                });
              });
            });
          });
        });
      };
      this.write = function(branch, path, content, message, cb) {
        updateTree(branch, function(err, latestCommit) {
          if (err) return cb(err);
          that.postBlob(content, function(err, blob) {
            if (err) return cb(err);
            that.updateTree(latestCommit, path, blob, function(err, tree) {
              if (err) return cb(err);
              that.commit(latestCommit, tree, message, function(err, commit) {
                if (err) return cb(err);
                that.updateHead(branch, commit, cb);
              });
            });
          });
        });
      };
      this.batchWriter = function(branch) {
        var lastCommitDeferred = $.Deferred();
        var prevAction = lastCommitDeferred;
        var lastCommit;
        updateTree(branch, function(err, latestCommit) {
          if (err) {
            lastCommitDeferred.reject(err);
          } else {
            lastCommitDeferred.resolve(latestCommit);
            lastCommit = latestCommit;
          }
        });
        lastCommitDeferred.then(function(x) {
          console.log(x);
        });
        return {
          write: function(path, content) {
            var thisAction = $.Deferred();
            prevAction.done(function(tree) {
              console.log('writing ' + path);
              that.postBlob(content, function(err, blob) {
                if (err) return thisAction.reject(err);
                that.updateTree(tree, path, blob, function(err, tree) {
                  if (err) return thisAction.reject(err);
                  thisAction.resolve(tree);
                });
              });
            }).fail(thisAction.reject);
            prevAction = thisAction;
            return thisAction;
          },
          commit: function(message) {
            var def = $.Deferred();
            prevAction.done(function(tree) {
              that.commit(lastCommit, tree, message, function(err, commit) {
                if (err) {
                  def.reject(err);
                } else {
                  that.updateHead(branch, commit, function() {
                    if (err) {
                      def.reject(err);
                    } else {
                      def.resolve();
                    }
                  });
                }
              });
            });
            prevAction.fail(def.reject);
            prevAction = null;
            return def;
          }
        };
      };
      this.getCommits = function(options, cb) {
        options = options || {};
        var url = repoPath + "/commits";
        var params = [];
        if (options.sha) {
          params.push("sha=" + encodeURIComponent(options.sha));
        }
        if (options.path) {
          params.push("path=" + encodeURIComponent(options.path));
        }
        if (options.since) {
          var since = options.since;
          if (since.constructor === Date) {
            since = since.toISOString();
          }
          params.push("since=" + encodeURIComponent(since));
        }
        if (options.until) {
          var until = options.until;
          if (until.constructor === Date) {
            until = until.toISOString();
          }
          params.push("until=" + encodeURIComponent(until));
        }
        if (params.length > 0) {
          url += "?" + params.join("&");
        }
        _request("GET", url, null, cb);
      };
    };
    Github.Gist = function(options) {
      var id = options.id;
      var gistPath = "/gists/" + id;
      this.read = function(cb) {
        _request("GET", gistPath, null, function(err, gist) {
          cb(err, gist);
        });
      };
      this.create = function(options, cb) {
        _request("POST", "/gists", options, cb);
      };
      this.delete = function(cb) {
        _request("DELETE", gistPath, null, function(err, res) {
          cb(err, res);
        });
      };
      this.fork = function(cb) {
        _request("POST", gistPath + "/fork", null, function(err, res) {
          cb(err, res);
        });
      };
      this.update = function(options, cb) {
        _request("PATCH", gistPath, options, function(err, res) {
          cb(err, res);
        });
      };
      this.star = function(cb) {
        _request("PUT", gistPath + "/star", null, function(err, res) {
          cb(err, res);
        });
      };
      this.unstar = function(cb) {
        _request("DELETE", gistPath + "/star", null, function(err, res) {
          cb(err, res);
        });
      };
      this.isStarred = function(cb) {
        _request("GET", gistPath + "/star", null, function(err, res) {
          cb(err, res);
        });
      };
    };
    Github.Issue = function(options) {
      var path = "/repos/" + options.user + "/" + options.repo + "/issues";
      this.list = function(options, cb) {
        _request("GET", path, options, function(err, res) {
          cb(err, res);
        });
      };
    };
    this.getIssues = function(user, repo) {
      return new Github.Issue({
        user: user,
        repo: repo
      });
    };
    this.getRepo = function(user, repo) {
      return new Github.Repository({
        user: user,
        name: repo
      });
    };
    this.getUser = function() {
      return new Github.User();
    };
    this.getGist = function(id) {
      return new Github.Gist({id: id});
    };
  };
  if (typeof exports !== 'undefined') {
    module.exports = Github;
  } else {
    window.Github = Github;
  }
}).call(this);
var Handlebars = (function() {
  var __module4__ = (function() {
    "use strict";
    var __exports__;
    function SafeString(string) {
      this.string = string;
    }
    SafeString.prototype.toString = function() {
      return "" + this.string;
    };
    __exports__ = SafeString;
    return __exports__;
  })();
  var __module3__ = (function(__dependency1__) {
    "use strict";
    var __exports__ = {};
    var SafeString = __dependency1__;
    var escape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
    var badChars = /[&<>"'`]/g;
    var possible = /[&<>"'`]/;
    function escapeChar(chr) {
      return escape[chr] || "&amp;";
    }
    function extend(obj, value) {
      for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          obj[key] = value[key];
        }
      }
    }
    __exports__.extend = extend;
    var toString = Object.prototype.toString;
    __exports__.toString = toString;
    var isFunction = function(value) {
      return typeof value === 'function';
    };
    if (isFunction(/x/)) {
      isFunction = function(value) {
        return typeof value === 'function' && toString.call(value) === '[object Function]';
      };
    }
    var isFunction;
    __exports__.isFunction = isFunction;
    var isArray = Array.isArray || function(value) {
      return (value && typeof value === 'object') ? toString.call(value) === '[object Array]': false;
    };
    __exports__.isArray = isArray;
    function escapeExpression(string) {
      if (string instanceof SafeString) {
        return string.toString();
      } else if (!string && string !== 0) {
        return "";
      }
      string = "" + string;
      if (!possible.test(string)) {
        return string;
      }
      return string.replace(badChars, escapeChar);
    }
    __exports__.escapeExpression = escapeExpression;
    function isEmpty(value) {
      if (!value && value !== 0) {
        return true;
      } else if (isArray(value) && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    __exports__.isEmpty = isEmpty;
    return __exports__;
  })(__module4__);
  var __module5__ = (function() {
    "use strict";
    var __exports__;
    var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
    function Exception(message, node) {
      var line;
      if (node && node.firstLine) {
        line = node.firstLine;
        message += ' - ' + line + ':' + node.firstColumn;
      }
      var tmp = Error.prototype.constructor.call(this, message);
      for (var idx = 0; idx < errorProps.length; idx++) {
        this[errorProps[idx]] = tmp[errorProps[idx]];
      }
      if (line) {
        this.lineNumber = line;
        this.column = node.firstColumn;
      }
    }
    Exception.prototype = new Error();
    __exports__ = Exception;
    return __exports__;
  })();
  var __module2__ = (function(__dependency1__, __dependency2__) {
    "use strict";
    var __exports__ = {};
    var Utils = __dependency1__;
    var Exception = __dependency2__;
    var VERSION = "1.3.0";
    __exports__.VERSION = VERSION;
    var COMPILER_REVISION = 4;
    __exports__.COMPILER_REVISION = COMPILER_REVISION;
    var REVISION_CHANGES = {
      1: '<= 1.0.rc.2',
      2: '== 1.0.0-rc.3',
      3: '== 1.0.0-rc.4',
      4: '>= 1.0.0'
    };
    __exports__.REVISION_CHANGES = REVISION_CHANGES;
    var isArray = Utils.isArray, isFunction = Utils.isFunction, toString = Utils.toString, objectType = '[object Object]';
    function HandlebarsEnvironment(helpers, partials) {
      this.helpers = helpers || {};
      this.partials = partials || {};
      registerDefaultHelpers(this);
    }
    __exports__.HandlebarsEnvironment = HandlebarsEnvironment;
    HandlebarsEnvironment.prototype = {
      constructor: HandlebarsEnvironment,
      logger: logger,
      log: log,
      registerHelper: function(name, fn, inverse) {
        if (toString.call(name) === objectType) {
          if (inverse || fn) {
            throw new Exception('Arg not supported with multiple helpers');
          }
          Utils.extend(this.helpers, name);
        } else {
          if (inverse) {
            fn.not = inverse;
          }
          this.helpers[name] = fn;
        }
      },
      registerPartial: function(name, str) {
        if (toString.call(name) === objectType) {
          Utils.extend(this.partials, name);
        } else {
          this.partials[name] = str;
        }
      }
    };
    function registerDefaultHelpers(instance) {
      instance.registerHelper('helperMissing', function(arg) {
        if (arguments.length === 2) {
          return undefined;
        } else {
          throw new Exception("Missing helper: '" + arg + "'");
        }
      });
      instance.registerHelper('blockHelperMissing', function(context, options) {
        var inverse = options.inverse || function() {}, fn = options.fn;
        if (isFunction(context)) {
          context = context.call(this);
        }
        if (context === true) {
          return fn(this);
        } else if (context === false || context == null) {
          return inverse(this);
        } else if (isArray(context)) {
          if (context.length > 0) {
            return instance.helpers.each(context, options);
          } else {
            return inverse(this);
          }
        } else {
          return fn(context);
        }
      });
      instance.registerHelper('each', function(context, options) {
        var fn = options.fn, inverse = options.inverse;
        var i = 0, ret = "", data;
        if (isFunction(context)) {
          context = context.call(this);
        }
        if (options.data) {
          data = createFrame(options.data);
        }
        if (context && typeof context === 'object') {
          if (isArray(context)) {
            for (var j = context.length; i < j; i++) {
              if (data) {
                data.index = i;
                data.first = (i === 0);
                data.last = (i === (context.length - 1));
              }
              ret = ret + fn(context[i], {data: data});
            }
          } else {
            for (var key in context) {
              if (context.hasOwnProperty(key)) {
                if (data) {
                  data.key = key;
                  data.index = i;
                  data.first = (i === 0);
                }
                ret = ret + fn(context[key], {data: data});
                i++;
              }
            }
          }
        }
        if (i === 0) {
          ret = inverse(this);
        }
        return ret;
      });
      instance.registerHelper('if', function(conditional, options) {
        if (isFunction(conditional)) {
          conditional = conditional.call(this);
        }
        if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      });
      instance.registerHelper('unless', function(conditional, options) {
        return instance.helpers['if'].call(this, conditional, {
          fn: options.inverse,
          inverse: options.fn,
          hash: options.hash
        });
      });
      instance.registerHelper('with', function(context, options) {
        if (isFunction(context)) {
          context = context.call(this);
        }
        if (!Utils.isEmpty(context)) return options.fn(context);
      });
      instance.registerHelper('log', function(context, options) {
        var level = options.data && options.data.level != null ? parseInt(options.data.level, 10): 1;
        instance.log(level, context);
      });
    }
    var logger = {
      methodMap: {
        0: 'debug',
        1: 'info',
        2: 'warn',
        3: 'error'
      },
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      level: 3,
      log: function(level, obj) {
        if (logger.level <= level) {
          var method = logger.methodMap[level];
          if (typeof console !== 'undefined' && console[method]) {
            console[method].call(console, obj);
          }
        }
      }
    };
    __exports__.logger = logger;
    function log(level, obj) {
      logger.log(level, obj);
    }
    __exports__.log = log;
    var createFrame = function(object) {
      var obj = {};
      Utils.extend(obj, object);
      return obj;
    };
    __exports__.createFrame = createFrame;
    return __exports__;
  })(__module3__, __module5__);
  var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
    "use strict";
    var __exports__ = {};
    var Utils = __dependency1__;
    var Exception = __dependency2__;
    var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
    var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
    function checkRevision(compilerInfo) {
      var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = COMPILER_REVISION;
      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = REVISION_CHANGES[currentRevision], compilerVersions = REVISION_CHANGES[compilerRevision];
          throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. " + "Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
        } else {
          throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. " + "Please update your runtime to a newer version (" + compilerInfo[1] + ").");
        }
      }
    }
    __exports__.checkRevision = checkRevision;
    function template(templateSpec, env) {
      if (!env) {
        throw new Exception("No environment passed to template");
      }
      var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
        var result = env.VM.invokePartial.apply(this, arguments);
        if (result != null) {
          return result;
        }
        if (env.compile) {
          var options = {
            helpers: helpers,
            partials: partials,
            data: data
          };
          partials[name] = env.compile(partial, {data: data !== undefined}, env);
          return partials[name](context, options);
        } else {
          throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
        }
      };
      var container = {
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        programs: [],
        program: function(i, fn, data) {
          var programWrapper = this.programs[i];
          if (data) {
            programWrapper = program(i, fn, data);
          } else if (!programWrapper) {
            programWrapper = this.programs[i] = program(i, fn);
          }
          return programWrapper;
        },
        merge: function(param, common) {
          var ret = param || common;
          if (param && common && (param !== common)) {
            ret = {};
            Utils.extend(ret, common);
            Utils.extend(ret, param);
          }
          return ret;
        },
        programWithDepth: env.VM.programWithDepth,
        noop: env.VM.noop,
        compilerInfo: null
      };
      return function(context, options) {
        options = options || {};
        var namespace = options.partial ? options: env, helpers, partials;
        if (!options.partial) {
          helpers = options.helpers;
          partials = options.partials;
        }
        var result = templateSpec.call(container, namespace, context, helpers, partials, options.data);
        if (!options.partial) {
          env.VM.checkRevision(container.compilerInfo);
        }
        return result;
      };
    }
    __exports__.template = template;
    function programWithDepth(i, fn, data) {
      var args = Array.prototype.slice.call(arguments, 3);
      var prog = function(context, options) {
        options = options || {};
        return fn.apply(this, [context, options.data || data].concat(args));
      };
      prog.program = i;
      prog.depth = args.length;
      return prog;
    }
    __exports__.programWithDepth = programWithDepth;
    function program(i, fn, data) {
      var prog = function(context, options) {
        options = options || {};
        return fn(context, options.data || data);
      };
      prog.program = i;
      prog.depth = 0;
      return prog;
    }
    __exports__.program = program;
    function invokePartial(partial, name, context, helpers, partials, data) {
      var options = {
        partial: true,
        helpers: helpers,
        partials: partials,
        data: data
      };
      if (partial === undefined) {
        throw new Exception("The partial " + name + " could not be found");
      } else if (partial instanceof Function) {
        return partial(context, options);
      }
    }
    __exports__.invokePartial = invokePartial;
    function noop() {
      return "";
    }
    __exports__.noop = noop;
    return __exports__;
  })(__module3__, __module5__, __module2__);
  var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
    "use strict";
    var __exports__;
    var base = __dependency1__;
    var SafeString = __dependency2__;
    var Exception = __dependency3__;
    var Utils = __dependency4__;
    var runtime = __dependency5__;
    var create = function() {
      var hb = new base.HandlebarsEnvironment();
      Utils.extend(hb, base);
      hb.SafeString = SafeString;
      hb.Exception = Exception;
      hb.Utils = Utils;
      hb.VM = runtime;
      hb.template = function(spec) {
        return runtime.template(spec, hb);
      };
      return hb;
    };
    var Handlebars = create();
    Handlebars.create = create;
    __exports__ = Handlebars;
    return __exports__;
  })(__module2__, __module4__, __module5__, __module3__, __module6__);
  var __module7__ = (function(__dependency1__) {
    "use strict";
    var __exports__;
    var Exception = __dependency1__;
    function LocationInfo(locInfo) {
      locInfo = locInfo || {};
      this.firstLine = locInfo.first_line;
      this.firstColumn = locInfo.first_column;
      this.lastColumn = locInfo.last_column;
      this.lastLine = locInfo.last_line;
    }
    var AST = {
      ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
        var inverseLocationInfo, firstInverseNode;
        if (arguments.length === 3) {
          locInfo = inverse;
          inverse = null;
        } else if (arguments.length === 2) {
          locInfo = inverseStrip;
          inverseStrip = null;
        }
        LocationInfo.call(this, locInfo);
        this.type = "program";
        this.statements = statements;
        this.strip = {};
        if (inverse) {
          firstInverseNode = inverse[0];
          if (firstInverseNode) {
            inverseLocationInfo = {
              first_line: firstInverseNode.firstLine,
              last_line: firstInverseNode.lastLine,
              last_column: firstInverseNode.lastColumn,
              first_column: firstInverseNode.firstColumn
            };
            this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
          } else {
            this.inverse = new AST.ProgramNode(inverse, inverseStrip);
          }
          this.strip.right = inverseStrip.left;
        } else if (inverseStrip) {
          this.strip.left = inverseStrip.right;
        }
      },
      MustacheNode: function(rawParams, hash, open, strip, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "mustache";
        this.strip = strip;
        if (open != null && open.charAt) {
          var escapeFlag = open.charAt(3) || open.charAt(2);
          this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
        } else {
          this.escaped = !!open;
        }
        if (rawParams instanceof AST.SexprNode) {
          this.sexpr = rawParams;
        } else {
          this.sexpr = new AST.SexprNode(rawParams, hash);
        }
        this.sexpr.isRoot = true;
        this.id = this.sexpr.id;
        this.params = this.sexpr.params;
        this.hash = this.sexpr.hash;
        this.eligibleHelper = this.sexpr.eligibleHelper;
        this.isHelper = this.sexpr.isHelper;
      },
      SexprNode: function(rawParams, hash, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "sexpr";
        this.hash = hash;
        var id = this.id = rawParams[0];
        var params = this.params = rawParams.slice(1);
        var eligibleHelper = this.eligibleHelper = id.isSimple;
        this.isHelper = eligibleHelper && (params.length || hash);
      },
      PartialNode: function(partialName, context, strip, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "partial";
        this.partialName = partialName;
        this.context = context;
        this.strip = strip;
      },
      BlockNode: function(mustache, program, inverse, close, locInfo) {
        LocationInfo.call(this, locInfo);
        if (mustache.sexpr.id.original !== close.path.original) {
          throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
        }
        this.type = 'block';
        this.mustache = mustache;
        this.program = program;
        this.inverse = inverse;
        this.strip = {
          left: mustache.strip.left,
          right: close.strip.right
        };
        (program || inverse).strip.left = mustache.strip.right;
        (inverse || program).strip.right = close.strip.left;
        if (inverse && !program) {
          this.isInverse = true;
        }
      },
      ContentNode: function(string, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "content";
        this.string = string;
      },
      HashNode: function(pairs, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "hash";
        this.pairs = pairs;
      },
      IdNode: function(parts, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "ID";
        var original = "", dig = [], depth = 0;
        for (var i = 0, l = parts.length; i < l; i++) {
          var part = parts[i].part;
          original += (parts[i].separator || '') + part;
          if (part === ".." || part === "." || part === "this") {
            if (dig.length > 0) {
              throw new Exception("Invalid path: " + original, this);
            } else if (part === "..") {
              depth++;
            } else {
              this.isScoped = true;
            }
          } else {
            dig.push(part);
          }
        }
        this.original = original;
        this.parts = dig;
        this.string = dig.join('.');
        this.depth = depth;
        this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;
        this.stringModeValue = this.string;
      },
      PartialNameNode: function(name, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "PARTIAL_NAME";
        this.name = name.original;
      },
      DataNode: function(id, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "DATA";
        this.id = id;
      },
      StringNode: function(string, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "STRING";
        this.original = this.string = this.stringModeValue = string;
      },
      IntegerNode: function(integer, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "INTEGER";
        this.original = this.integer = integer;
        this.stringModeValue = Number(integer);
      },
      BooleanNode: function(bool, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "BOOLEAN";
        this.bool = bool;
        this.stringModeValue = bool === "true";
      },
      CommentNode: function(comment, locInfo) {
        LocationInfo.call(this, locInfo);
        this.type = "comment";
        this.comment = comment;
      }
    };
    __exports__ = AST;
    return __exports__;
  })(__module5__);
  var __module9__ = (function() {
    "use strict";
    var __exports__;
    var handlebars = (function() {
      var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
          "error": 2,
          "root": 3,
          "statements": 4,
          "EOF": 5,
          "program": 6,
          "simpleInverse": 7,
          "statement": 8,
          "openInverse": 9,
          "closeBlock": 10,
          "openBlock": 11,
          "mustache": 12,
          "partial": 13,
          "CONTENT": 14,
          "COMMENT": 15,
          "OPEN_BLOCK": 16,
          "sexpr": 17,
          "CLOSE": 18,
          "OPEN_INVERSE": 19,
          "OPEN_ENDBLOCK": 20,
          "path": 21,
          "OPEN": 22,
          "OPEN_UNESCAPED": 23,
          "CLOSE_UNESCAPED": 24,
          "OPEN_PARTIAL": 25,
          "partialName": 26,
          "partial_option0": 27,
          "sexpr_repetition0": 28,
          "sexpr_option0": 29,
          "dataName": 30,
          "param": 31,
          "STRING": 32,
          "INTEGER": 33,
          "BOOLEAN": 34,
          "OPEN_SEXPR": 35,
          "CLOSE_SEXPR": 36,
          "hash": 37,
          "hash_repetition_plus0": 38,
          "hashSegment": 39,
          "ID": 40,
          "EQUALS": 41,
          "DATA": 42,
          "pathSegments": 43,
          "SEP": 44,
          "$accept": 0,
          "$end": 1
        },
        terminals_: {
          2: "error",
          5: "EOF",
          14: "CONTENT",
          15: "COMMENT",
          16: "OPEN_BLOCK",
          18: "CLOSE",
          19: "OPEN_INVERSE",
          20: "OPEN_ENDBLOCK",
          22: "OPEN",
          23: "OPEN_UNESCAPED",
          24: "CLOSE_UNESCAPED",
          25: "OPEN_PARTIAL",
          32: "STRING",
          33: "INTEGER",
          34: "BOOLEAN",
          35: "OPEN_SEXPR",
          36: "CLOSE_SEXPR",
          40: "ID",
          41: "EQUALS",
          42: "DATA",
          44: "SEP"
        },
        productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
          var $0 = $$.length - 1;
          switch (yystate) {
            case 1:
              return new yy.ProgramNode($$[$0 - 1], this._$);
              break;
            case 2:
              return new yy.ProgramNode([], this._$);
              break;
            case 3:
              this.$ = new yy.ProgramNode([], $$[$0 - 1], $$[$0], this._$);
              break;
            case 4:
              this.$ = new yy.ProgramNode($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
              break;
            case 5:
              this.$ = new yy.ProgramNode($$[$0 - 1], $$[$0], [], this._$);
              break;
            case 6:
              this.$ = new yy.ProgramNode($$[$0], this._$);
              break;
            case 7:
              this.$ = new yy.ProgramNode([], this._$);
              break;
            case 8:
              this.$ = new yy.ProgramNode([], this._$);
              break;
            case 9:
              this.$ = [$$[$0]];
              break;
            case 10:
              $$[$0 - 1].push($$[$0]);
              this.$ = $$[$0 - 1];
              break;
            case 11:
              this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1].inverse, $$[$0 - 1], $$[$0], this._$);
              break;
            case 12:
              this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1], $$[$0 - 1].inverse, $$[$0], this._$);
              break;
            case 13:
              this.$ = $$[$0];
              break;
            case 14:
              this.$ = $$[$0];
              break;
            case 15:
              this.$ = new yy.ContentNode($$[$0], this._$);
              break;
            case 16:
              this.$ = new yy.CommentNode($$[$0], this._$);
              break;
            case 17:
              this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
              break;
            case 18:
              this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
              break;
            case 19:
              this.$ = {
                path: $$[$0 - 1],
                strip: stripFlags($$[$0 - 2], $$[$0])
              };
              break;
            case 20:
              this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
              break;
            case 21:
              this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
              break;
            case 22:
              this.$ = new yy.PartialNode($$[$0 - 2], $$[$0 - 1], stripFlags($$[$0 - 3], $$[$0]), this._$);
              break;
            case 23:
              this.$ = stripFlags($$[$0 - 1], $$[$0]);
              break;
            case 24:
              this.$ = new yy.SexprNode([$$[$0 - 2]].concat($$[$0 - 1]), $$[$0], this._$);
              break;
            case 25:
              this.$ = new yy.SexprNode([$$[$0]], null, this._$);
              break;
            case 26:
              this.$ = $$[$0];
              break;
            case 27:
              this.$ = new yy.StringNode($$[$0], this._$);
              break;
            case 28:
              this.$ = new yy.IntegerNode($$[$0], this._$);
              break;
            case 29:
              this.$ = new yy.BooleanNode($$[$0], this._$);
              break;
            case 30:
              this.$ = $$[$0];
              break;
            case 31:
              $$[$0 - 1].isHelper = true;
              this.$ = $$[$0 - 1];
              break;
            case 32:
              this.$ = new yy.HashNode($$[$0], this._$);
              break;
            case 33:
              this.$ = [$$[$0 - 2], $$[$0]];
              break;
            case 34:
              this.$ = new yy.PartialNameNode($$[$0], this._$);
              break;
            case 35:
              this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
              break;
            case 36:
              this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
              break;
            case 37:
              this.$ = new yy.DataNode($$[$0], this._$);
              break;
            case 38:
              this.$ = new yy.IdNode($$[$0], this._$);
              break;
            case 39:
              $$[$0 - 2].push({
                part: $$[$0],
                separator: $$[$0 - 1]
              });
              this.$ = $$[$0 - 2];
              break;
            case 40:
              this.$ = [{part: $$[$0]}];
              break;
            case 43:
              this.$ = [];
              break;
            case 44:
              $$[$0 - 1].push($$[$0]);
              break;
            case 47:
              this.$ = [$$[$0]];
              break;
            case 48:
              $$[$0 - 1].push($$[$0]);
              break;
          }
        },
        table: [{
          3: 1,
          4: 2,
          5: [1, 3],
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {1: [3]}, {
          5: [1, 16],
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {1: [2, 2]}, {
          5: [2, 9],
          14: [2, 9],
          15: [2, 9],
          16: [2, 9],
          19: [2, 9],
          20: [2, 9],
          22: [2, 9],
          23: [2, 9],
          25: [2, 9]
        }, {
          4: 20,
          6: 18,
          7: 19,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 21],
          20: [2, 8],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          4: 20,
          6: 22,
          7: 19,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 21],
          20: [2, 8],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          5: [2, 13],
          14: [2, 13],
          15: [2, 13],
          16: [2, 13],
          19: [2, 13],
          20: [2, 13],
          22: [2, 13],
          23: [2, 13],
          25: [2, 13]
        }, {
          5: [2, 14],
          14: [2, 14],
          15: [2, 14],
          16: [2, 14],
          19: [2, 14],
          20: [2, 14],
          22: [2, 14],
          23: [2, 14],
          25: [2, 14]
        }, {
          5: [2, 15],
          14: [2, 15],
          15: [2, 15],
          16: [2, 15],
          19: [2, 15],
          20: [2, 15],
          22: [2, 15],
          23: [2, 15],
          25: [2, 15]
        }, {
          5: [2, 16],
          14: [2, 16],
          15: [2, 16],
          16: [2, 16],
          19: [2, 16],
          20: [2, 16],
          22: [2, 16],
          23: [2, 16],
          25: [2, 16]
        }, {
          17: 23,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          17: 29,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          17: 30,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          17: 31,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          21: 33,
          26: 32,
          32: [1, 34],
          33: [1, 35],
          40: [1, 28],
          43: 26
        }, {1: [2, 1]}, {
          5: [2, 10],
          14: [2, 10],
          15: [2, 10],
          16: [2, 10],
          19: [2, 10],
          20: [2, 10],
          22: [2, 10],
          23: [2, 10],
          25: [2, 10]
        }, {
          10: 36,
          20: [1, 37]
        }, {
          4: 38,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 7],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          7: 39,
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 21],
          20: [2, 6],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          17: 23,
          18: [1, 40],
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          10: 41,
          20: [1, 37]
        }, {18: [1, 42]}, {
          18: [2, 43],
          24: [2, 43],
          28: 43,
          32: [2, 43],
          33: [2, 43],
          34: [2, 43],
          35: [2, 43],
          36: [2, 43],
          40: [2, 43],
          42: [2, 43]
        }, {
          18: [2, 25],
          24: [2, 25],
          36: [2, 25]
        }, {
          18: [2, 38],
          24: [2, 38],
          32: [2, 38],
          33: [2, 38],
          34: [2, 38],
          35: [2, 38],
          36: [2, 38],
          40: [2, 38],
          42: [2, 38],
          44: [1, 44]
        }, {
          21: 45,
          40: [1, 28],
          43: 26
        }, {
          18: [2, 40],
          24: [2, 40],
          32: [2, 40],
          33: [2, 40],
          34: [2, 40],
          35: [2, 40],
          36: [2, 40],
          40: [2, 40],
          42: [2, 40],
          44: [2, 40]
        }, {18: [1, 46]}, {18: [1, 47]}, {24: [1, 48]}, {
          18: [2, 41],
          21: 50,
          27: 49,
          40: [1, 28],
          43: 26
        }, {
          18: [2, 34],
          40: [2, 34]
        }, {
          18: [2, 35],
          40: [2, 35]
        }, {
          18: [2, 36],
          40: [2, 36]
        }, {
          5: [2, 11],
          14: [2, 11],
          15: [2, 11],
          16: [2, 11],
          19: [2, 11],
          20: [2, 11],
          22: [2, 11],
          23: [2, 11],
          25: [2, 11]
        }, {
          21: 51,
          40: [1, 28],
          43: 26
        }, {
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 3],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          4: 52,
          8: 4,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 5],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          14: [2, 23],
          15: [2, 23],
          16: [2, 23],
          19: [2, 23],
          20: [2, 23],
          22: [2, 23],
          23: [2, 23],
          25: [2, 23]
        }, {
          5: [2, 12],
          14: [2, 12],
          15: [2, 12],
          16: [2, 12],
          19: [2, 12],
          20: [2, 12],
          22: [2, 12],
          23: [2, 12],
          25: [2, 12]
        }, {
          14: [2, 18],
          15: [2, 18],
          16: [2, 18],
          19: [2, 18],
          20: [2, 18],
          22: [2, 18],
          23: [2, 18],
          25: [2, 18]
        }, {
          18: [2, 45],
          21: 56,
          24: [2, 45],
          29: 53,
          30: 60,
          31: 54,
          32: [1, 57],
          33: [1, 58],
          34: [1, 59],
          35: [1, 61],
          36: [2, 45],
          37: 55,
          38: 62,
          39: 63,
          40: [1, 64],
          42: [1, 27],
          43: 26
        }, {40: [1, 65]}, {
          18: [2, 37],
          24: [2, 37],
          32: [2, 37],
          33: [2, 37],
          34: [2, 37],
          35: [2, 37],
          36: [2, 37],
          40: [2, 37],
          42: [2, 37]
        }, {
          14: [2, 17],
          15: [2, 17],
          16: [2, 17],
          19: [2, 17],
          20: [2, 17],
          22: [2, 17],
          23: [2, 17],
          25: [2, 17]
        }, {
          5: [2, 20],
          14: [2, 20],
          15: [2, 20],
          16: [2, 20],
          19: [2, 20],
          20: [2, 20],
          22: [2, 20],
          23: [2, 20],
          25: [2, 20]
        }, {
          5: [2, 21],
          14: [2, 21],
          15: [2, 21],
          16: [2, 21],
          19: [2, 21],
          20: [2, 21],
          22: [2, 21],
          23: [2, 21],
          25: [2, 21]
        }, {18: [1, 66]}, {18: [2, 42]}, {18: [1, 67]}, {
          8: 17,
          9: 5,
          11: 6,
          12: 7,
          13: 8,
          14: [1, 9],
          15: [1, 10],
          16: [1, 12],
          19: [1, 11],
          20: [2, 4],
          22: [1, 13],
          23: [1, 14],
          25: [1, 15]
        }, {
          18: [2, 24],
          24: [2, 24],
          36: [2, 24]
        }, {
          18: [2, 44],
          24: [2, 44],
          32: [2, 44],
          33: [2, 44],
          34: [2, 44],
          35: [2, 44],
          36: [2, 44],
          40: [2, 44],
          42: [2, 44]
        }, {
          18: [2, 46],
          24: [2, 46],
          36: [2, 46]
        }, {
          18: [2, 26],
          24: [2, 26],
          32: [2, 26],
          33: [2, 26],
          34: [2, 26],
          35: [2, 26],
          36: [2, 26],
          40: [2, 26],
          42: [2, 26]
        }, {
          18: [2, 27],
          24: [2, 27],
          32: [2, 27],
          33: [2, 27],
          34: [2, 27],
          35: [2, 27],
          36: [2, 27],
          40: [2, 27],
          42: [2, 27]
        }, {
          18: [2, 28],
          24: [2, 28],
          32: [2, 28],
          33: [2, 28],
          34: [2, 28],
          35: [2, 28],
          36: [2, 28],
          40: [2, 28],
          42: [2, 28]
        }, {
          18: [2, 29],
          24: [2, 29],
          32: [2, 29],
          33: [2, 29],
          34: [2, 29],
          35: [2, 29],
          36: [2, 29],
          40: [2, 29],
          42: [2, 29]
        }, {
          18: [2, 30],
          24: [2, 30],
          32: [2, 30],
          33: [2, 30],
          34: [2, 30],
          35: [2, 30],
          36: [2, 30],
          40: [2, 30],
          42: [2, 30]
        }, {
          17: 68,
          21: 24,
          30: 25,
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          18: [2, 32],
          24: [2, 32],
          36: [2, 32],
          39: 69,
          40: [1, 70]
        }, {
          18: [2, 47],
          24: [2, 47],
          36: [2, 47],
          40: [2, 47]
        }, {
          18: [2, 40],
          24: [2, 40],
          32: [2, 40],
          33: [2, 40],
          34: [2, 40],
          35: [2, 40],
          36: [2, 40],
          40: [2, 40],
          41: [1, 71],
          42: [2, 40],
          44: [2, 40]
        }, {
          18: [2, 39],
          24: [2, 39],
          32: [2, 39],
          33: [2, 39],
          34: [2, 39],
          35: [2, 39],
          36: [2, 39],
          40: [2, 39],
          42: [2, 39],
          44: [2, 39]
        }, {
          5: [2, 22],
          14: [2, 22],
          15: [2, 22],
          16: [2, 22],
          19: [2, 22],
          20: [2, 22],
          22: [2, 22],
          23: [2, 22],
          25: [2, 22]
        }, {
          5: [2, 19],
          14: [2, 19],
          15: [2, 19],
          16: [2, 19],
          19: [2, 19],
          20: [2, 19],
          22: [2, 19],
          23: [2, 19],
          25: [2, 19]
        }, {36: [1, 72]}, {
          18: [2, 48],
          24: [2, 48],
          36: [2, 48],
          40: [2, 48]
        }, {41: [1, 71]}, {
          21: 56,
          30: 60,
          31: 73,
          32: [1, 57],
          33: [1, 58],
          34: [1, 59],
          35: [1, 61],
          40: [1, 28],
          42: [1, 27],
          43: 26
        }, {
          18: [2, 31],
          24: [2, 31],
          32: [2, 31],
          33: [2, 31],
          34: [2, 31],
          35: [2, 31],
          36: [2, 31],
          40: [2, 31],
          42: [2, 31]
        }, {
          18: [2, 33],
          24: [2, 33],
          36: [2, 33],
          40: [2, 33]
        }],
        defaultActions: {
          3: [2, 2],
          16: [2, 1],
          50: [2, 42]
        },
        parseError: function parseError(str, hash) {
          throw new Error(str);
        },
        parse: function parse(input) {
          var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
          this.lexer.setInput(input);
          this.lexer.yy = this.yy;
          this.yy.lexer = this.lexer;
          this.yy.parser = this;
          if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
          var yyloc = this.lexer.yylloc;
          lstack.push(yyloc);
          var ranges = this.lexer.options && this.lexer.options.ranges;
          if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
          function popStack(n) {
            stack.length = stack.length - 2 * n;
            vstack.length = vstack.length - n;
            lstack.length = lstack.length - n;
          }
          function lex() {
            var token;
            token = self.lexer.lex() || 1;
            if (typeof token !== "number") {
              token = self.symbols_[token] || token;
            }
            return token;
          }
          var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
          while (true) {
            state = stack[stack.length - 1];
            if (this.defaultActions[state]) {
              action = this.defaultActions[state];
            } else {
              if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
              }
              action = table[state] && table[state][symbol];
            }
            if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
                if (this.lexer.showPosition) {
                  errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                  errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input": "'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {
                  text: this.lexer.match,
                  token: this.terminals_[symbol] || symbol,
                  line: this.lexer.yylineno,
                  loc: yyloc,
                  expected: expected
                });
              }
            }
            if (action[0]instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
            }
            switch (action[0]) {
              case 1:
                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]);
                symbol = null;
                if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0) recovering--;
                } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
                }
                break;
              case 2:
                len = this.productions_[action[1]][1];
                yyval.$ = vstack[vstack.length - len];
                yyval._$ = {
                  first_line: lstack[lstack.length - (len || 1)].first_line,
                  last_line: lstack[lstack.length - 1].last_line,
                  first_column: lstack[lstack.length - (len || 1)].first_column,
                  last_column: lstack[lstack.length - 1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                if (typeof r !== "undefined") {
                  return r;
                }
                if (len) {
                  stack = stack.slice(0, - 1 * len * 2);
                  vstack = vstack.slice(0, - 1 * len);
                  lstack = lstack.slice(0, - 1 * len);
                }
                stack.push(this.productions_[action[1]][0]);
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                stack.push(newState);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }
      };
      function stripFlags(open, close) {
        return {
          left: open.charAt(2) === '~',
          right: close.charAt(0) === '~' || close.charAt(1) === '~'
        };
      }
      var lexer = (function() {
        var lexer = ({
          EOF: 1,
          parseError: function parseError(str, hash) {
            if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
            } else {
              throw new Error(str);
            }
          },
          setInput: function(input) {
            this._input = input;
            this._more = this._less = this.done = false;
            this.yylineno = this.yyleng = 0;
            this.yytext = this.matched = this.match = '';
            this.conditionStack = ['INITIAL'];
            this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
            };
            if (this.options.ranges) this.yylloc.range = [0, 0];
            this.offset = 0;
            return this;
          },
          input: function() {
            var ch = this._input[0];
            this.yytext += ch;
            this.yyleng++;
            this.offset++;
            this.match += ch;
            this.matched += ch;
            var lines = ch.match(/(?:\r\n?|\n).*/g);
            if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
            } else {
              this.yylloc.last_column++;
            }
            if (this.options.ranges) this.yylloc.range[1]++;
            this._input = this._input.slice(1);
            return ch;
          },
          unput: function(ch) {
            var len = ch.length;
            var lines = ch.split(/(?:\r\n?|\n)/g);
            this._input = ch + this._input;
            this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
            this.offset -= len;
            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1);
            this.matched = this.matched.substr(0, this.matched.length - 1);
            if (lines.length - 1) this.yylineno -= lines.length - 1;
            var r = this.yylloc.range;
            this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column: 0) + oldLines[oldLines.length - lines.length].length - lines[0].length: this.yylloc.first_column - len
            };
            if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
            }
            return this;
          },
          more: function() {
            this._more = true;
            return this;
          },
          less: function(n) {
            this.unput(this.match.slice(n));
          },
          pastInput: function() {
            var past = this.matched.substr(0, this.matched.length - this.match.length);
            return (past.length > 20 ? '...': '') + past.substr(- 20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var next = this.match;
            if (next.length < 20) {
              next += this._input.substr(0, 20 - next.length);
            }
            return (next.substr(0, 20) + (next.length > 20 ? '...': '')).replace(/\n/g, "");
          },
          showPosition: function() {
            var pre = this.pastInput();
            var c = new Array(pre.length + 1).join("-");
            return pre + this.upcomingInput() + "\n" + c + "^";
          },
          next: function() {
            if (this.done) {
              return this.EOF;
            }
            if (!this._input) this.done = true;
            var token, match, tempMatch, index, col, lines;
            if (!this._more) {
              this.yytext = '';
              this.match = '';
            }
            var rules = this._currentRules();
            for (var i = 0; i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
              }
            }
            if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length: this.yylloc.last_column + match[0].length
              };
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
              if (this.done && this._input) this.done = false;
              if (token) return token; else return;
            }
            if (this._input === "") {
              return this.EOF;
            } else {
              return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            }
          },
          lex: function lex() {
            var r = this.next();
            if (typeof r !== 'undefined') {
              return r;
            } else {
              return this.lex();
            }
          },
          begin: function begin(condition) {
            this.conditionStack.push(condition);
          },
          popState: function popState() {
            return this.conditionStack.pop();
          },
          _currentRules: function _currentRules() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function begin(condition) {
            this.begin(condition);
          }
        });
        lexer.options = {};
        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
          function strip(start, end) {
            return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
          }
          var YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0:
              if (yy_.yytext.slice(- 2) === "\\\\") {
                strip(0, 1);
                this.begin("mu");
              } else if (yy_.yytext.slice(- 1) === "\\") {
                strip(0, 1);
                this.begin("emu");
              } else {
                this.begin("mu");
              }
              if (yy_.yytext) return 14;
              break;
            case 1:
              return 14;
              break;
            case 2:
              this.popState();
              return 14;
              break;
            case 3:
              strip(0, 4);
              this.popState();
              return 15;
              break;
            case 4:
              return 35;
              break;
            case 5:
              return 36;
              break;
            case 6:
              return 25;
              break;
            case 7:
              return 16;
              break;
            case 8:
              return 20;
              break;
            case 9:
              return 19;
              break;
            case 10:
              return 19;
              break;
            case 11:
              return 23;
              break;
            case 12:
              return 22;
              break;
            case 13:
              this.popState();
              this.begin('com');
              break;
            case 14:
              strip(3, 5);
              this.popState();
              return 15;
              break;
            case 15:
              return 22;
              break;
            case 16:
              return 41;
              break;
            case 17:
              return 40;
              break;
            case 18:
              return 40;
              break;
            case 19:
              return 44;
              break;
            case 20:
              break;
            case 21:
              this.popState();
              return 24;
              break;
            case 22:
              this.popState();
              return 18;
              break;
            case 23:
              yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
              return 32;
              break;
            case 24:
              yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
              return 32;
              break;
            case 25:
              return 42;
              break;
            case 26:
              return 34;
              break;
            case 27:
              return 34;
              break;
            case 28:
              return 33;
              break;
            case 29:
              return 40;
              break;
            case 30:
              yy_.yytext = strip(1, 2);
              return 40;
              break;
            case 31:
              return 'INVALID';
              break;
            case 32:
              return 5;
              break;
          }
        };
        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
        lexer.conditions = {
          "mu": {
            "rules": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
            "inclusive": false
          },
          "emu": {
            "rules": [2],
            "inclusive": false
          },
          "com": {
            "rules": [3],
            "inclusive": false
          },
          "INITIAL": {
            "rules": [0, 1, 32],
            "inclusive": true
          }
        };
        return lexer;
      })();
      parser.lexer = lexer;
      function Parser() {
        this.yy = {};
      }
      Parser.prototype = parser;
      parser.Parser = Parser;
      return new Parser;
    })();
    __exports__ = handlebars;
    return __exports__;
  })();
  var __module8__ = (function(__dependency1__, __dependency2__) {
    "use strict";
    var __exports__ = {};
    var parser = __dependency1__;
    var AST = __dependency2__;
    __exports__.parser = parser;
    function parse(input) {
      if (input.constructor === AST.ProgramNode) {
        return input;
      }
      parser.yy = AST;
      return parser.parse(input);
    }
    __exports__.parse = parse;
    return __exports__;
  })(__module9__, __module7__);
  var __module10__ = (function(__dependency1__) {
    "use strict";
    var __exports__ = {};
    var Exception = __dependency1__;
    function Compiler() {}
    __exports__.Compiler = Compiler;
    Compiler.prototype = {
      compiler: Compiler,
      disassemble: function() {
        var opcodes = this.opcodes, opcode, out = [], params, param;
        for (var i = 0, l = opcodes.length; i < l; i++) {
          opcode = opcodes[i];
          if (opcode.opcode === 'DECLARE') {
            out.push("DECLARE " + opcode.name + "=" + opcode.value);
          } else {
            params = [];
            for (var j = 0; j < opcode.args.length; j++) {
              param = opcode.args[j];
              if (typeof param === "string") {
                param = "\"" + param.replace("\n", "\\n") + "\"";
              }
              params.push(param);
            }
            out.push(opcode.opcode + " " + params.join(" "));
          }
        }
        return out.join("\n");
      },
      equals: function(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) {
          return false;
        }
        for (var i = 0; i < len; i++) {
          var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
          if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
            return false;
          }
          for (var j = 0; j < opcode.args.length; j++) {
            if (opcode.args[j] !== otherOpcode.args[j]) {
              return false;
            }
          }
        }
        len = this.children.length;
        if (other.children.length !== len) {
          return false;
        }
        for (i = 0; i < len; i++) {
          if (!this.children[i].equals(other.children[i])) {
            return false;
          }
        }
        return true;
      },
      guid: 0,
      compile: function(program, options) {
        this.opcodes = [];
        this.children = [];
        this.depths = {list: []};
        this.options = options;
        var knownHelpers = this.options.knownHelpers;
        this.options.knownHelpers = {
          'helperMissing': true,
          'blockHelperMissing': true,
          'each': true,
          'if': true,
          'unless': true,
          'with': true,
          'log': true
        };
        if (knownHelpers) {
          for (var name in knownHelpers) {
            this.options.knownHelpers[name] = knownHelpers[name];
          }
        }
        return this.accept(program);
      },
      accept: function(node) {
        var strip = node.strip || {}, ret;
        if (strip.left) {
          this.opcode('strip');
        }
        ret = this[node.type](node);
        if (strip.right) {
          this.opcode('strip');
        }
        return ret;
      },
      program: function(program) {
        var statements = program.statements;
        for (var i = 0, l = statements.length; i < l; i++) {
          this.accept(statements[i]);
        }
        this.isSimple = l === 1;
        this.depths.list = this.depths.list.sort(function(a, b) {
          return a - b;
        });
        return this;
      },
      compileProgram: function(program) {
        var result = new this.compiler().compile(program, this.options);
        var guid = this.guid++, depth;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        for (var i = 0, l = result.depths.list.length; i < l; i++) {
          depth = result.depths.list[i];
          if (depth < 2) {
            continue;
          } else {
            this.addDepth(depth - 1);
          }
        }
        return guid;
      },
      block: function(block) {
        var mustache = block.mustache, program = block.program, inverse = block.inverse;
        if (program) {
          program = this.compileProgram(program);
        }
        if (inverse) {
          inverse = this.compileProgram(inverse);
        }
        var sexpr = mustache.sexpr;
        var type = this.classifySexpr(sexpr);
        if (type === "helper") {
          this.helperSexpr(sexpr, program, inverse);
        } else if (type === "simple") {
          this.simpleSexpr(sexpr);
          this.opcode('pushProgram', program);
          this.opcode('pushProgram', inverse);
          this.opcode('emptyHash');
          this.opcode('blockValue');
        } else {
          this.ambiguousSexpr(sexpr, program, inverse);
          this.opcode('pushProgram', program);
          this.opcode('pushProgram', inverse);
          this.opcode('emptyHash');
          this.opcode('ambiguousBlockValue');
        }
        this.opcode('append');
      },
      hash: function(hash) {
        var pairs = hash.pairs, pair, val;
        this.opcode('pushHash');
        for (var i = 0, l = pairs.length; i < l; i++) {
          pair = pairs[i];
          val = pair[1];
          if (this.options.stringParams) {
            if (val.depth) {
              this.addDepth(val.depth);
            }
            this.opcode('getContext', val.depth || 0);
            this.opcode('pushStringParam', val.stringModeValue, val.type);
            if (val.type === 'sexpr') {
              this.sexpr(val);
            }
          } else {
            this.accept(val);
          }
          this.opcode('assignToHash', pair[0]);
        }
        this.opcode('popHash');
      },
      partial: function(partial) {
        var partialName = partial.partialName;
        this.usePartial = true;
        if (partial.context) {
          this.ID(partial.context);
        } else {
          this.opcode('push', 'depth0');
        }
        this.opcode('invokePartial', partialName.name);
        this.opcode('append');
      },
      content: function(content) {
        this.opcode('appendContent', content.string);
      },
      mustache: function(mustache) {
        this.sexpr(mustache.sexpr);
        if (mustache.escaped && !this.options.noEscape) {
          this.opcode('appendEscaped');
        } else {
          this.opcode('append');
        }
      },
      ambiguousSexpr: function(sexpr, program, inverse) {
        var id = sexpr.id, name = id.parts[0], isBlock = program != null || inverse != null;
        this.opcode('getContext', id.depth);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('invokeAmbiguous', name, isBlock);
      },
      simpleSexpr: function(sexpr) {
        var id = sexpr.id;
        if (id.type === 'DATA') {
          this.DATA(id);
        } else if (id.parts.length) {
          this.ID(id);
        } else {
          this.addDepth(id.depth);
          this.opcode('getContext', id.depth);
          this.opcode('pushContext');
        }
        this.opcode('resolvePossibleLambda');
      },
      helperSexpr: function(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), name = sexpr.id.parts[0];
        if (this.options.knownHelpers[name]) {
          this.opcode('invokeKnownHelper', params.length, name);
        } else if (this.options.knownHelpersOnly) {
          throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
        } else {
          this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
        }
      },
      sexpr: function(sexpr) {
        var type = this.classifySexpr(sexpr);
        if (type === "simple") {
          this.simpleSexpr(sexpr);
        } else if (type === "helper") {
          this.helperSexpr(sexpr);
        } else {
          this.ambiguousSexpr(sexpr);
        }
      },
      ID: function(id) {
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        var name = id.parts[0];
        if (!name) {
          this.opcode('pushContext');
        } else {
          this.opcode('lookupOnContext', id.parts[0]);
        }
        for (var i = 1, l = id.parts.length; i < l; i++) {
          this.opcode('lookup', id.parts[i]);
        }
      },
      DATA: function(data) {
        this.options.data = true;
        if (data.id.isScoped || data.id.depth) {
          throw new Exception('Scoped data references are not supported: ' + data.original, data);
        }
        this.opcode('lookupData');
        var parts = data.id.parts;
        for (var i = 0, l = parts.length; i < l; i++) {
          this.opcode('lookup', parts[i]);
        }
      },
      STRING: function(string) {
        this.opcode('pushString', string.string);
      },
      INTEGER: function(integer) {
        this.opcode('pushLiteral', integer.integer);
      },
      BOOLEAN: function(bool) {
        this.opcode('pushLiteral', bool.bool);
      },
      comment: function() {},
      opcode: function(name) {
        this.opcodes.push({
          opcode: name,
          args: [].slice.call(arguments, 1)
        });
      },
      declare: function(name, value) {
        this.opcodes.push({
          opcode: 'DECLARE',
          name: name,
          value: value
        });
      },
      addDepth: function(depth) {
        if (depth === 0) {
          return;
        }
        if (!this.depths[depth]) {
          this.depths[depth] = true;
          this.depths.list.push(depth);
        }
      },
      classifySexpr: function(sexpr) {
        var isHelper = sexpr.isHelper;
        var isEligible = sexpr.eligibleHelper;
        var options = this.options;
        if (isEligible && !isHelper) {
          var name = sexpr.id.parts[0];
          if (options.knownHelpers[name]) {
            isHelper = true;
          } else if (options.knownHelpersOnly) {
            isEligible = false;
          }
        }
        if (isHelper) {
          return "helper";
        } else if (isEligible) {
          return "ambiguous";
        } else {
          return "simple";
        }
      },
      pushParams: function(params) {
        var i = params.length, param;
        while (i--) {
          param = params[i];
          if (this.options.stringParams) {
            if (param.depth) {
              this.addDepth(param.depth);
            }
            this.opcode('getContext', param.depth || 0);
            this.opcode('pushStringParam', param.stringModeValue, param.type);
            if (param.type === 'sexpr') {
              this.sexpr(param);
            }
          } else {
            this[param.type](param);
          }
        }
      },
      setupFullMustacheParams: function(sexpr, program, inverse) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        if (sexpr.hash) {
          this.hash(sexpr.hash);
        } else {
          this.opcode('emptyHash');
        }
        return params;
      }
    };
    function precompile(input, options, env) {
      if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
        throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
      }
      options = options || {};
      if (!('data'in options)) {
        options.data = true;
      }
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      return new env.JavaScriptCompiler().compile(environment, options);
    }
    __exports__.precompile = precompile;
    function compile(input, options, env) {
      if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
        throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
      }
      options = options || {};
      if (!('data'in options)) {
        options.data = true;
      }
      var compiled;
      function compileInput() {
        var ast = env.parse(input);
        var environment = new env.Compiler().compile(ast, options);
        var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
        return env.template(templateSpec);
      }
      return function(context, options) {
        if (!compiled) {
          compiled = compileInput();
        }
        return compiled.call(this, context, options);
      };
    }
    __exports__.compile = compile;
    return __exports__;
  })(__module5__);
  var __module11__ = (function(__dependency1__, __dependency2__) {
    "use strict";
    var __exports__;
    var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
    var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
    var log = __dependency1__.log;
    var Exception = __dependency2__;
    function Literal(value) {
      this.value = value;
    }
    function JavaScriptCompiler() {}
    JavaScriptCompiler.prototype = {
      nameLookup: function(parent, name) {
        var wrap, ret;
        if (parent.indexOf('depth') === 0) {
          wrap = true;
        }
        if (/^[0-9]+$/.test(name)) {
          ret = parent + "[" + name + "]";
        } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
          ret = parent + "." + name;
        } else {
          ret = parent + "['" + name + "']";
        }
        if (wrap) {
          return '(' + parent + ' && ' + ret + ')';
        } else {
          return ret;
        }
      },
      compilerInfo: function() {
        var revision = COMPILER_REVISION, versions = REVISION_CHANGES[revision];
        return "this.compilerInfo = [" + revision + ",'" + versions + "'];\n";
      },
      appendToBuffer: function(string) {
        if (this.environment.isSimple) {
          return "return " + string + ";";
        } else {
          return {
            appendToBuffer: true,
            content: string,
            toString: function() {
              return "buffer += " + string + ";";
            }
          };
        }
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      namespace: "Handlebars",
      compile: function(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options || {};
        log('debug', this.environment.disassemble() + "\n\n");
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
          programs: [],
          environments: [],
          aliases: {}
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.registers = {list: []};
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.compileChildren(environment, options);
        var opcodes = environment.opcodes, opcode;
        this.i = 0;
        for (var l = opcodes.length; this.i < l; this.i++) {
          opcode = opcodes[this.i];
          if (opcode.opcode === 'DECLARE') {
            this[opcode.name] = opcode.value;
          } else {
            this[opcode.opcode].apply(this, opcode.args);
          }
          if (opcode.opcode !== this.stripNext) {
            this.stripNext = false;
          }
        }
        this.pushSource('');
        if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
          throw new Exception('Compile completed with content left on stack');
        }
        return this.createFunctionContext(asObject);
      },
      preamble: function() {
        var out = [];
        if (!this.isChild) {
          var namespace = this.namespace;
          var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
          if (this.environment.usePartial) {
            copies = copies + " partials = this.merge(partials, " + namespace + ".partials);";
          }
          if (this.options.data) {
            copies = copies + " data = data || {};";
          }
          out.push(copies);
        } else {
          out.push('');
        }
        if (!this.environment.isSimple) {
          out.push(", buffer = " + this.initializeBuffer());
        } else {
          out.push("");
        }
        this.lastContext = 0;
        this.source = out;
      },
      createFunctionContext: function(asObject) {
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) {
          this.source[1] = this.source[1] + ", " + locals.join(", ");
        }
        if (!this.isChild) {
          for (var alias in this.context.aliases) {
            if (this.context.aliases.hasOwnProperty(alias)) {
              this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
            }
          }
        }
        if (this.source[1]) {
          this.source[1] = "var " + this.source[1].substring(2) + ";";
        }
        if (!this.isChild) {
          this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
        }
        if (!this.environment.isSimple) {
          this.pushSource("return buffer;");
        }
        var params = this.isChild ? ["depth0", "data"]: ["Handlebars", "depth0", "helpers", "partials", "data"];
        for (var i = 0, l = this.environment.depths.list.length; i < l; i++) {
          params.push("depth" + this.environment.depths.list[i]);
        }
        var source = this.mergeSource();
        if (!this.isChild) {
          source = this.compilerInfo() + source;
        }
        if (asObject) {
          params.push(source);
          return Function.apply(this, params);
        } else {
          var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
          log('debug', functionSource + "\n\n");
          return functionSource;
        }
      },
      mergeSource: function() {
        var source = '', buffer;
        for (var i = 0, len = this.source.length; i < len; i++) {
          var line = this.source[i];
          if (line.appendToBuffer) {
            if (buffer) {
              buffer = buffer + '\n    + ' + line.content;
            } else {
              buffer = line.content;
            }
          } else {
            if (buffer) {
              source += 'buffer += ' + buffer + ';\n  ';
              buffer = undefined;
            }
            source += line + '\n  ';
          }
        }
        return source;
      },
      blockValue: function() {
        this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
        var params = ["depth0"];
        this.setupParams(0, params);
        this.replaceStack(function(current) {
          params.splice(1, 0, current);
          return "blockHelperMissing.call(" + params.join(", ") + ")";
        });
      },
      ambiguousBlockValue: function() {
        this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
        var params = ["depth0"];
        this.setupParams(0, params);
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
      },
      appendContent: function(content) {
        if (this.pendingContent) {
          content = this.pendingContent + content;
        }
        if (this.stripNext) {
          content = content.replace(/^\s+/, '');
        }
        this.pendingContent = content;
      },
      strip: function() {
        if (this.pendingContent) {
          this.pendingContent = this.pendingContent.replace(/\s+$/, '');
        }
        this.stripNext = 'strip';
      },
      append: function() {
        this.flushInline();
        var local = this.popStack();
        this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
        if (this.environment.isSimple) {
          this.pushSource("else { " + this.appendToBuffer("''") + " }");
        }
      },
      appendEscaped: function() {
        this.context.aliases.escapeExpression = 'this.escapeExpression';
        this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
      },
      getContext: function(depth) {
        if (this.lastContext !== depth) {
          this.lastContext = depth;
        }
      },
      lookupOnContext: function(name) {
        this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
      },
      pushContext: function() {
        this.pushStackLiteral('depth' + this.lastContext);
      },
      resolvePossibleLambda: function() {
        this.context.aliases.functionType = '"function"';
        this.replaceStack(function(current) {
          return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
        });
      },
      lookup: function(name) {
        this.replaceStack(function(current) {
          return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
        });
      },
      lookupData: function() {
        this.pushStackLiteral('data');
      },
      pushStringParam: function(string, type) {
        this.pushStackLiteral('depth' + this.lastContext);
        this.pushString(type);
        if (type !== 'sexpr') {
          if (typeof string === 'string') {
            this.pushString(string);
          } else {
            this.pushStackLiteral(string);
          }
        }
      },
      emptyHash: function() {
        this.pushStackLiteral('{}');
        if (this.options.stringParams) {
          this.push('{}');
          this.push('{}');
        }
      },
      pushHash: function() {
        if (this.hash) {
          this.hashes.push(this.hash);
        }
        this.hash = {
          values: [],
          types: [],
          contexts: []
        };
      },
      popHash: function() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.options.stringParams) {
          this.push('{' + hash.contexts.join(',') + '}');
          this.push('{' + hash.types.join(',') + '}');
        }
        this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
      },
      pushString: function(string) {
        this.pushStackLiteral(this.quotedString(string));
      },
      push: function(expr) {
        this.inlineStack.push(expr);
        return expr;
      },
      pushLiteral: function(value) {
        this.pushStackLiteral(value);
      },
      pushProgram: function(guid) {
        if (guid != null) {
          this.pushStackLiteral(this.programExpression(guid));
        } else {
          this.pushStackLiteral(null);
        }
      },
      invokeHelper: function(paramSize, name, isRoot) {
        this.context.aliases.helperMissing = 'helpers.helperMissing';
        this.useRegister('helper');
        var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
        var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
        var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
        if (helper.paramsInit) {
          lookup += ',' + helper.paramsInit;
        }
        this.push('(' + lookup + ',helper ' + '? helper.call(' + helper.callParams + ') ' + ': helperMissing.call(' + helper.helperMissingParams + '))');
        if (!isRoot) {
          this.flushInline();
        }
      },
      invokeKnownHelper: function(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(helper.name + ".call(" + helper.callParams + ")");
      },
      invokeAmbiguous: function(name, helperCall) {
        this.context.aliases.functionType = '"function"';
        this.useRegister('helper');
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
        var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
        var nextStack = this.nextStack();
        if (helper.paramsInit) {
          this.pushSource(helper.paramsInit);
        }
        this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
        this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
      },
      invokePartial: function(name) {
        var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];
        if (this.options.data) {
          params.push("data");
        }
        this.context.aliases.self = "this";
        this.push("self.invokePartial(" + params.join(", ") + ")");
      },
      assignToHash: function(key) {
        var value = this.popStack(), context, type;
        if (this.options.stringParams) {
          type = this.popStack();
          context = this.popStack();
        }
        var hash = this.hash;
        if (context) {
          hash.contexts.push("'" + key + "': " + context);
        }
        if (type) {
          hash.types.push("'" + key + "': " + type);
        }
        hash.values.push("'" + key + "': (" + value + ")");
      },
      compiler: JavaScriptCompiler,
      compileChildren: function(environment, options) {
        var children = environment.children, child, compiler;
        for (var i = 0, l = children.length; i < l; i++) {
          child = children[i];
          compiler = new this.compiler();
          var index = this.matchExistingProgram(child);
          if (index == null) {
            this.context.programs.push('');
            index = this.context.programs.length;
            child.index = index;
            child.name = 'program' + index;
            this.context.programs[index] = compiler.compile(child, options, this.context);
            this.context.environments[index] = child;
          } else {
            child.index = index;
            child.name = 'program' + index;
          }
        }
      },
      matchExistingProgram: function(child) {
        for (var i = 0, len = this.context.environments.length; i < len; i++) {
          var environment = this.context.environments[i];
          if (environment && environment.equals(child)) {
            return i;
          }
        }
      },
      programExpression: function(guid) {
        this.context.aliases.self = "this";
        if (guid == null) {
          return "self.noop";
        }
        var child = this.environment.children[guid], depths = child.depths.list, depth;
        var programParams = [child.index, child.name, "data"];
        for (var i = 0, l = depths.length; i < l; i++) {
          depth = depths[i];
          if (depth === 1) {
            programParams.push("depth0");
          } else {
            programParams.push("depth" + (depth - 1));
          }
        }
        return (depths.length === 0 ? "self.program(": "self.programWithDepth(") + programParams.join(", ") + ")";
      },
      register: function(name, val) {
        this.useRegister(name);
        this.pushSource(name + " = " + val + ";");
      },
      useRegister: function(name) {
        if (!this.registers[name]) {
          this.registers[name] = true;
          this.registers.list.push(name);
        }
      },
      pushStackLiteral: function(item) {
        return this.push(new Literal(item));
      },
      pushSource: function(source) {
        if (this.pendingContent) {
          this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
          this.pendingContent = undefined;
        }
        if (source) {
          this.source.push(source);
        }
      },
      pushStack: function(item) {
        this.flushInline();
        var stack = this.incrStack();
        if (item) {
          this.pushSource(stack + " = " + item + ";");
        }
        this.compileStack.push(stack);
        return stack;
      },
      replaceStack: function(callback) {
        var prefix = '', inline = this.isInline(), stack, createdStack, usedLiteral;
        if (inline) {
          var top = this.popStack(true);
          if (top instanceof Literal) {
            stack = top.value;
            usedLiteral = true;
          } else {
            createdStack = !this.stackSlot;
            var name = !createdStack ? this.topStackName(): this.incrStack();
            prefix = '(' + this.push(name) + ' = ' + top + '),';
            stack = this.topStack();
          }
        } else {
          stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (inline) {
          if (!usedLiteral) {
            this.popStack();
          }
          if (createdStack) {
            this.stackSlot--;
          }
          this.push('(' + prefix + item + ')');
        } else {
          if (!/^stack/.test(stack)) {
            stack = this.nextStack();
          }
          this.pushSource(stack + " = (" + prefix + item + ");");
        }
        return stack;
      },
      nextStack: function() {
        return this.pushStack();
      },
      incrStack: function() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) {
          this.stackVars.push("stack" + this.stackSlot);
        }
        return this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var inlineStack = this.inlineStack;
        if (inlineStack.length) {
          this.inlineStack = [];
          for (var i = 0, len = inlineStack.length; i < len; i++) {
            var entry = inlineStack[i];
            if (entry instanceof Literal) {
              this.compileStack.push(entry);
            } else {
              this.pushStack(entry);
            }
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack: this.compileStack).pop();
        if (!wrapped && (item instanceof Literal)) {
          return item.value;
        } else {
          if (!inline) {
            if (!this.stackSlot) {
              throw new Exception('Invalid stack pop');
            }
            this.stackSlot--;
          }
          return item;
        }
      },
      topStack: function(wrapped) {
        var stack = (this.isInline() ? this.inlineStack: this.compileStack), item = stack[stack.length - 1];
        if (!wrapped && (item instanceof Literal)) {
          return item.value;
        } else {
          return item;
        }
      },
      quotedString: function(str) {
        return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029') + '"';
      },
      setupHelper: function(paramSize, name, missingParams) {
        var params = [], paramsInit = this.setupParams(paramSize, params, missingParams);
        var foundHelper = this.nameLookup('helpers', name, 'helper');
        return {
          params: params,
          paramsInit: paramsInit,
          name: foundHelper,
          callParams: ["depth0"].concat(params).join(", "),
          helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
        };
      },
      setupOptions: function(paramSize, params) {
        var options = [], contexts = [], types = [], param, inverse, program;
        options.push("hash:" + this.popStack());
        if (this.options.stringParams) {
          options.push("hashTypes:" + this.popStack());
          options.push("hashContexts:" + this.popStack());
        }
        inverse = this.popStack();
        program = this.popStack();
        if (program || inverse) {
          if (!program) {
            this.context.aliases.self = "this";
            program = "self.noop";
          }
          if (!inverse) {
            this.context.aliases.self = "this";
            inverse = "self.noop";
          }
          options.push("inverse:" + inverse);
          options.push("fn:" + program);
        }
        for (var i = 0; i < paramSize; i++) {
          param = this.popStack();
          params.push(param);
          if (this.options.stringParams) {
            types.push(this.popStack());
            contexts.push(this.popStack());
          }
        }
        if (this.options.stringParams) {
          options.push("contexts:[" + contexts.join(",") + "]");
          options.push("types:[" + types.join(",") + "]");
        }
        if (this.options.data) {
          options.push("data:data");
        }
        return options;
      },
      setupParams: function(paramSize, params, useRegister) {
        var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';
        if (useRegister) {
          this.useRegister('options');
          params.push('options');
          return 'options=' + options;
        } else {
          params.push(options);
          return '';
        }
      }
    };
    var reservedWords = ("break else new var" + " case finally return void" + " catch for switch while" + " continue function this with" + " default if throw" + " delete in try" + " do instanceof typeof" + " abstract enum int short" + " boolean export interface static" + " byte extends long super" + " char final native synchronized" + " class float package throws" + " const goto private transient" + " debugger implements protected volatile" + " double import public let yield").split(" ");
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    for (var i = 0, l = reservedWords.length; i < l; i++) {
      compilerWords[reservedWords[i]] = true;
    }
    JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
      if (!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
        return true;
      }
      return false;
    };
    __exports__ = JavaScriptCompiler;
    return __exports__;
  })(__module2__, __module5__);
  var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
    "use strict";
    var __exports__;
    var Handlebars = __dependency1__;
    var AST = __dependency2__;
    var Parser = __dependency3__.parser;
    var parse = __dependency3__.parse;
    var Compiler = __dependency4__.Compiler;
    var compile = __dependency4__.compile;
    var precompile = __dependency4__.precompile;
    var JavaScriptCompiler = __dependency5__;
    var _create = Handlebars.create;
    var create = function() {
      var hb = _create();
      hb.compile = function(input, options) {
        return compile(input, options, hb);
      };
      hb.precompile = function(input, options) {
        return precompile(input, options, hb);
      };
      hb.AST = AST;
      hb.Compiler = Compiler;
      hb.JavaScriptCompiler = JavaScriptCompiler;
      hb.Parser = Parser;
      hb.parse = parse;
      return hb;
    };
    Handlebars = create();
    Handlebars.create = create;
    __exports__ = Handlebars;
    return __exports__;
  })(__module1__, __module7__, __module8__, __module10__, __module11__);
  return __module0__;
})();
this["JST"] = this["JST"] || {};
this["JST"]["audio"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
  this.compilerInfo = [4, '>= 1.0.0'];
  helpers = this.merge(helpers, Handlebars.helpers);
  data = data || {};
  var buffer = "", stack1, helper, functionType = "function", escapeExpression = this.escapeExpression, self = this;
  function program1(depth0, data) {
    return "\n  <p class=\"audio-warning\">\n  So far the audio recorder only works in Desktop verions of Chrome.\n  </p>\n";
  }
  function program3(depth0, data) {
    var buffer = "", stack1;
    buffer += "\n  <a class=\"btn btn-info show-and-tell-audio-btn record ";
    stack1 = helpers['if'].call(depth0, (depth0 && depth0.recording), {
      hash: {},
      inverse: self.noop,
      fn: self.program(4, program4, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\">record</a>\n  <a class=\"btn btn-info show-and-tell-audio-btn stop\">stop</a>\n  ";
    stack1 = helpers['if'].call(depth0, (depth0 && depth0.recording), {
      hash: {},
      inverse: self.noop,
      fn: self.program(6, program6, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\n  <hr>\n  <div>\n  ";
    stack1 = helpers['if'].call(depth0, (depth0 && depth0.value), {
      hash: {},
      inverse: self.noop,
      fn: self.program(8, program8, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\n  </div>\n";
    return buffer;
  }
  function program4(depth0, data) {
    return "active";
  }
  function program6(depth0, data) {
    return "\n    <span class=\"recording\">Recording...</span>\n  ";
  }
  function program8(depth0, data) {
    var buffer = "", stack1;
    buffer += "\n    ";
    stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.value)), stack1 == null || stack1 === false ? stack1: stack1.converting), {
      hash: {},
      inverse: self.program(11, program11, data),
      fn: self.program(9, program9, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\n  ";
    return buffer;
  }
  function program9(depth0, data) {
    return "\n      <p>Converting from wav format...</p>\n    ";
  }
  function program11(depth0, data) {
    var buffer = "", stack1;
    buffer += "\n      ";
    stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.value)), stack1 == null || stack1 === false ? stack1: stack1.dataURL), {
      hash: {},
      inverse: self.noop,
      fn: self.program(12, program12, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\n    ";
    return buffer;
  }
  function program12(depth0, data) {
    var buffer = "", stack1;
    buffer += "\n        <audio controls=\"\" name=\"media\">\n          <source src=\"" + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)), stack1 == null || stack1 === false ? stack1: stack1.dataURL)), typeof stack1 === functionType ? stack1.apply(depth0): stack1)) + "\" type=\"audio/webm; codecs=vorbis\">\n        </audio>\n        <a class=\"clear transparent-btn btn\">clear</a>\n      ";
    return buffer;
  }
  function program14(depth0, data) {
    var buffer = "", stack1;
    buffer += "\n  ";
    stack1 = helpers['if'].call(depth0, (depth0 && depth0.wavConverterLoading), {
      hash: {},
      inverse: self.program(17, program17, data),
      fn: self.program(15, program15, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\n";
    return buffer;
  }
  function program15(depth0, data) {
    return "\n    <h3>Loading Wav converter...</h3>\n  ";
  }
  function program17(depth0, data) {
    return "\n    <p>To use the audio recorder you need to load a 20 megabyte script\n      that coverts your recordings to a smaller format.\n    </p>\n    <a class=\"btn btn-default enable-audio\">Okay, do it!</a>\n    &nbsp;&nbsp;<input type=\"checkbox\" id=\"rememberWavConverter\" checked /> Remember my decision\n  ";
  }
  buffer += "<h4 class=\"widget-head\">";
  if (helper = helpers.name) {
    stack1 = helper.call(depth0, {
      hash: {},
      data: data
    });
  } else {
    helper = (depth0 && depth0.name);
    stack1 = typeof helper === functionType ? helper.call(depth0, {
      hash: {},
      data: data
    }): helper;
  }
  buffer += escapeExpression(stack1) + "</h4>\n";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.audioCompatible), {
    hash: {},
    inverse: self.noop,
    fn: self.program(1, program1, data),
    data: data
  });
  if (stack1 || stack1 === 0) {
    buffer += stack1;
  }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.wavConverterLoaded), {
    hash: {},
    inverse: self.program(14, program14, data),
    fn: self.program(3, program3, data),
    data: data
  });
  if (stack1 || stack1 === 0) {
    buffer += stack1;
  }
  return buffer;
});
this["JST"]["image"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
  this.compilerInfo = [4, '>= 1.0.0'];
  helpers = this.merge(helpers, Handlebars.helpers);
  data = data || {};
  var buffer = "", stack1, helper, functionType = "function", escapeExpression = this.escapeExpression, self = this;
  function program1(depth0, data) {
    var buffer = "", stack1;
    buffer += "\n        <img src=\"" + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)), stack1 == null || stack1 === false ? stack1: stack1.dataURL)), typeof stack1 === functionType ? stack1.apply(depth0): stack1)) + "\" alt=\"" + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)), stack1 == null || stack1 === false ? stack1: stack1.name)), typeof stack1 === functionType ? stack1.apply(depth0): stack1)) + "\"></img>\n        <a class=\"clear btn\">clear</a>\n    ";
    return buffer;
  }
  buffer += "<h4 class=\"widget-head\">";
  if (helper = helpers.name) {
    stack1 = helper.call(depth0, {
      hash: {},
      data: data
    });
  } else {
    helper = (depth0 && depth0.name);
    stack1 = typeof helper === functionType ? helper.call(depth0, {
      hash: {},
      data: data
    }): helper;
  }
  buffer += escapeExpression(stack1) + "</h4>\n<span style=\"display:inline-block\">\n    <label>Upload image file:</label>\n    <input class=\"uploadfile\" type=\"file\" multiple></input>\n    \n    <label>Download from URL:</label>\n    <input class=\"url\"></input>\n</span>\n\n<hr>\n<div id=\"img-error\"></div>\n\n<div class=\"image-out\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.value), {
    hash: {},
    inverse: self.noop,
    fn: self.program(1, program1, data),
    data: data
  });
  if (stack1 || stack1 === 0) {
    buffer += stack1;
  }
  buffer += "\n</div>";
  return buffer;
});
this["JST"]["text"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
  this.compilerInfo = [4, '>= 1.0.0'];
  helpers = this.merge(helpers, Handlebars.helpers);
  data = data || {};
  var buffer = "", stack1, helper, functionType = "function", escapeExpression = this.escapeExpression;
  buffer += "<h4 class=\"widget-head\">";
  if (helper = helpers.name) {
    stack1 = helper.call(depth0, {
      hash: {},
      data: data
    });
  } else {
    helper = (depth0 && depth0.name);
    stack1 = typeof helper === functionType ? helper.call(depth0, {
      hash: {},
      data: data
    }): helper;
  }
  buffer += escapeExpression(stack1) + " <span class=\"aside\">(markdown suppported)</span></h4>\n<textarea>";
  if (helper = helpers.value) {
    stack1 = helper.call(depth0, {
      hash: {},
      data: data
    });
  } else {
    helper = (depth0 && depth0.value);
    stack1 = typeof helper === functionType ? helper.call(depth0, {
      hash: {},
      data: data
    }): helper;
  }
  buffer += escapeExpression(stack1) + "</textarea>";
  return buffer;
});
this["JST"]["cardStubs"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
  this.compilerInfo = [4, '>= 1.0.0'];
  helpers = this.merge(helpers, Handlebars.helpers);
  data = data || {};
  var stack1, functionType = "function", escapeExpression = this.escapeExpression, self = this, blockHelperMissing = helpers.blockHelperMissing;
  function program1(depth0, data) {
    var buffer = "", stack1, helper, options;
    buffer += "\n  <div\n    data-idx=\"" + escapeExpression(((stack1 = (data == null || data === false ? data: data.index)), typeof stack1 === functionType ? stack1.apply(depth0): stack1)) + "\"\n    class=\"card-label ";
    options = {
      hash: {},
      inverse: self.noop,
      fn: self.program(2, program2, data),
      data: data
    };
    if (helper = helpers.isCurrent) {
      stack1 = helper.call(depth0, options);
    } else {
      helper = (depth0 && depth0.isCurrent);
      stack1 = typeof helper === functionType ? helper.call(depth0, options): helper;
    }
    if (!helpers.isCurrent) {
      stack1 = blockHelperMissing.call(depth0, stack1, {
        hash: {},
        inverse: self.noop,
        fn: self.program(2, program2, data),
        data: data
      });
    }
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\">\n      ";
    stack1 = helpers['if'].call(depth0, (depth0 && depth0.previewImageURL), {
      hash: {},
      inverse: self.noop,
      fn: self.program(4, program4, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\n      ";
    stack1 = helpers['if'].call(depth0, (depth0 && depth0.text), {
      hash: {},
      inverse: self.noop,
      fn: self.program(6, program6, data),
      data: data
    });
    if (stack1 || stack1 === 0) {
      buffer += stack1;
    }
    buffer += "\n      <div class=\"label-handle\"></div>\n  </div>\n";
    return buffer;
  }
  function program2(depth0, data) {
    return "current";
  }
  function program4(depth0, data) {
    var buffer = "", stack1, helper;
    buffer += "\n          <img src=\"";
    if (helper = helpers.previewImageURL) {
      stack1 = helper.call(depth0, {
        hash: {},
        data: data
      });
    } else {
      helper = (depth0 && depth0.previewImageURL);
      stack1 = typeof helper === functionType ? helper.call(depth0, {
        hash: {},
        data: data
      }): helper;
    }
    buffer += escapeExpression(stack1) + "\"></img>\n      ";
    return buffer;
  }
  function program6(depth0, data) {
    var buffer = "", stack1, helper;
    buffer += "\n          <div class=\"label-text\">";
    if (helper = helpers.text) {
      stack1 = helper.call(depth0, {
        hash: {},
        data: data
      });
    } else {
      helper = (depth0 && depth0.text);
      stack1 = typeof helper === functionType ? helper.call(depth0, {
        hash: {},
        data: data
      }): helper;
    }
    buffer += escapeExpression(stack1) + "</div>\n      ";
    return buffer;
  }
  stack1 = helpers.each.call(depth0, (depth0 && depth0.cards), {
    hash: {},
    inverse: self.noop,
    fn: self.program(1, program1, data),
    data: data
  });
  if (stack1 || stack1 === 0) {
    return stack1;
  } else {
    return '';
  }
});
this["JST"]["choosePresentation"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
  this.compilerInfo = [4, '>= 1.0.0'];
  helpers = this.merge(helpers, Handlebars.helpers);
  data = data || {};
  var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression, self = this;
  function program1(depth0, data) {
    var buffer = "", stack1, helper;
    buffer += "\n        <a class=\"btn btn-primary btn-lg btn-block import-presentation\" data-path=\"";
    if (helper = helpers.path) {
      stack1 = helper.call(depth0, {
        hash: {},
        data: data
      });
    } else {
      helper = (depth0 && depth0.path);
      stack1 = typeof helper === functionType ? helper.call(depth0, {
        hash: {},
        data: data
      }): helper;
    }
    buffer += escapeExpression(stack1) + "\">";
    if (helper = helpers.path) {
      stack1 = helper.call(depth0, {
        hash: {},
        data: data
      });
    } else {
      helper = (depth0 && depth0.path);
      stack1 = typeof helper === functionType ? helper.call(depth0, {
        hash: {},
        data: data
      }): helper;
    }
    buffer += escapeExpression(stack1) + "</a>\n      ";
    return buffer;
  }
  buffer += "<div class=\"modal fade\" id=\"generalModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Choose a slide show to edit</h4>\n      </div>\n      <div class=\"modal-body\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.presentations), {
    hash: {},
    inverse: self.noop,
    fn: self.program(1, program1, data),
    data: data
  });
  if (stack1 || stack1 === 0) {
    buffer += stack1;
  }
  buffer += "\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
  return buffer;
});
this["JST"]["helpInfo"] = Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
  this.compilerInfo = [4, '>= 1.0.0'];
  helpers = this.merge(helpers, Handlebars.helpers);
  data = data || {};
  var buffer = "", stack1, self = this;
  function program1(depth0, data) {
    return "\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Tutorial</h4>\n        </div>\n      ";
  }
  function program3(depth0, data) {
    return "\n        <center>\n          <a href class=\"dismiss\" data-dismiss=\"modal\">End Tour</a>\n        </center>\n        ";
  }
  buffer += "<div class=\"modal fade\" id=\"helpModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.help), {
    hash: {},
    inverse: self.noop,
    fn: self.program(1, program1, data),
    data: data
  });
  if (stack1 || stack1 === 0) {
    buffer += stack1;
  }
  buffer += "\n      <div class=\"modal-body help-body\">\n        <iframe \n          src=\"http://showandtell.github.io/slide-shows/tutorial\"\n          onload=\"this.contentWindow.focus()\"\n          seamless=\"seamless\" \n          style=\"width:100%;height:380px\"></iframe>\n        <br />\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.help), {
    hash: {},
    inverse: self.noop,
    fn: self.program(3, program3, data),
    data: data
  });
  if (stack1 || stack1 === 0) {
    buffer += stack1;
  }
  buffer += "\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
  return buffer;
});
var _, schema, Backbone, mediaWidgets, exporters, importers, JST, Sortable;
var viewSchema;
var DeckModel = Backbone.Model.extend({
  addCard: function() {
    this.get('cards').push({});
  },
  toSmallJSON: function() {
    var json = this.toJSON();
    return _.extend({}, json, {cards: _.map(json.cards, function(card) {
        return _.extend(_.omit(card, ['isCurrent']), {
          image: _.omit(card.image, 'dataURL'),
          audio: _.omit(card.audio, 'dataURL')
        });
      })});
  }
});
var deck = new DeckModel({
  cards: [],
  name: "slide-show"
});
deck.addCard();
var currentCard = deck.get('cards')[0];
var initializeUI = function() {
  var renderCurrentCard = function() {
    if (!currentCard) {
      $('.card-container').hide();
    } else {
      $('.card-container').show();
      _.invoke(viewSchema, 'render');
    }
    renderDeck();
  };
  var renderDeck = function() {
    _.each(deck.get('cards'), function(card, idx) {
      card.isCurrent = (currentCard === card);
    });
    $('.cards').html(JST.cardStubs(deck.toJSON()));
    _.defer(function() {
      if (deck.deckSortable) return;
      var $container = $(".sortable");
      deck.deckSortable = new Sortable($container.get(0), {
        draggable: ".card-label",
        ghostClass: "invisible",
        handle: ".label-handle",
        onUpdate: function(evt) {
          var newCardArray = [];
          $container.children().each(function(idx, el) {
            console.log(el);
            var parsedNidx = parseInt($(el).data('idx'), 10);
            newCardArray[idx] = deck.get('cards')[parsedNidx];
          });
          deck.set('cards', newCardArray);
          renderDeck();
        }
      });
    });
  };
  if ("localStorage"in window) {
    if (!localStorage.getItem("returnUser")) {
      var modal = $(JST.helpInfo()).modal().on('hidden.bs.modal', function(e) {
        localStorage.setItem("returnUser", true);
        modal.remove();
      });
      $('.modal-backdrop').slice(1).remove();
    }
  }
  viewSchema = _.map(schema, function(widget, idx) {
    var currentView;
    var WidgetView = Backbone.View.extend({
      template: JST[widget.type],
      basicRender: function(renderContext) {
        this.$el.html(this.template(_.extend(renderContext || {}, {
          name: this.name,
          value: this.value.get()
        })));
        return this;
      },
      render: function(renderContext) {
        return this.basicRender(renderContext);
      },
      value: {
        get: function() {
          return currentCard[widget.name];
        },
        set: function(value) {
          currentCard[widget.name] = value;
          if (widget.name === 'text') {
            renderDeck();
          }
        }
      }
    }).extend(mediaWidgets[widget.type]).extend(widget);
    var $el = $('<div id="' + widget.name + '"></div>');
    $el.addClass('widget widget-' + (idx % 3) + ' ' + widget.type);
    $('.output').append($el);
    currentView = new WidgetView({el: $el});
    return currentView;
  });
  renderCurrentCard();
  $(document).on("click", ".card-label", function(event, ui) {
    var cardIdx = parseInt($(event.currentTarget).data('idx'), 10);
    currentCard = deck.get('cards')[cardIdx];
    console.assert(currentCard);
    $('textarea').blur();
    $('.card').addClass('card-animation');
    window.setTimeout(function() {
      window.setTimeout(function() {
        $('.card').removeClass('card-animation');
      }, 1000);
      renderCurrentCard();
      $('.deck').addClass("no-show");
    }, 100);
  });
  $(document).on('click', '.add-card', function(evt) {
    deck.addCard();
    renderDeck();
  });
  $(document).on('click', '.rm-card', function(evt) {
    var cards = deck.get('cards');
    var newIdx = 0;
    var newCards = cards.filter(function(card, idx) {
      if (card !== currentCard) {
        return true;
      } else {
        newIdx = idx;
        return false;
      }
    });
    deck.set('cards', newCards);
    currentCard = newCards[(newIdx % newCards.length)];
    renderDeck();
    renderCurrentCard();
  });
  $(document).on('change keypress', '#ss-title-input', function(evt) {
    deck.set('name', $(evt.currentTarget).val());
  });
  deck.on('change:name', function() {
    $('#ss-title-input').val(deck.get('name'));
  });
  deck.trigger('change:name');
  $(document).on('click', '.toggle-panel', function(evt) {
    $('.deck').toggleClass("no-show");
  });
  $(document).on('click', '.export-github', function(evt) {
    $('#exportModal').modal('hide');
    $('#outputModal').modal({show: true});
    $('#output').text("Publishing to github...");
    exporters.github(deck, function(err, pubURL) {
      if (err) {
        $('#output').html("<p>The presentation could not be published.</p>");
        console.log(err);
        return;
      }
      var $openBtn = $('<a class="btn btn-success">Open Presentation<a>');
      $openBtn.attr('href', pubURL).attr("target", "_blank");
      $('#output').empty().append("<p>It may take a few minutes before your presentation is updated on github.</p>").append($openBtn);
    });
  });
  $(document).on('click', '.export-zip', function(evt) {
    $('#download').text('generating zip...');
    $('#exportModal').modal('hide');
    $('#outputModal').modal({show: true});
    $('#output').text("Creating zip...");
    exporters.zip(deck, function(err, zipBlob) {
      var $downloadBtn = $('<a class="btn btn-primary">Download<a>');
      $downloadBtn.attr('href', window.URL.createObjectURL(zipBlob));
      $downloadBtn.attr('download', deck.get('name') + ".zip");
      $('#output').empty().append($downloadBtn);
    });
  });
  $(document).on('change', '.uploadzip', function(evt) {
    $('.uploadzip-status').empty();
    var files = evt.target.files;
    importers.zip(files[0]).fail(function(err) {
      $('.uploadzip-status').text("Error! See console for details.");
      console.log(err);
    }).done(function(deckJSON) {
      deck.set('cards', deckJSON.cards);
      deck.set('name', deckJSON.name);
      $('.uploadzip-status').text("Imported!");
      currentCard = deck.get('cards')[0];
      renderCurrentCard();
    });
    $('.uploadzip').val("");
    $('.uploadzip-status').text("importing...");
  });
  $(document).on('click', '.import-github', function(evt) {
    $('.modal').modal('hide');
    makeRepoPromise().fail(function(message) {
      alert("Couldn't get repo:\n" + message);
    }).done(function(repo) {
      repo.getTree('gh-pages', function(err, tree) {
        if (err) {
          alert("Couldn't get tree");
          return;
        }
        $(JST.choosePresentation({presentations: _.filter(tree, function(pres) {
            return pres.type === 'tree' && pres.path !== 'reveal.js';
          })})).modal();
        $('.modal-backdrop').slice(1).remove();
      });
    });
  });
  $(document).on('click', '.import-presentation', function(evt) {
    $('.modal').modal('hide');
    makeRepoPromise().fail(function(message) {
      alert("Couldn't get repo:\n" + message);
    }).done(function(repo) {
      importers.github(repo, $(evt.currentTarget).data('path')).fail(function(err) {
        alert("Error! See console for details.");
        console.log(err);
      }).done(function(deckJSON) {
        deck.set('cards', deckJSON.cards);
        deck.set('name', deckJSON.name);
        currentCard = deck.get('cards')[0];
        renderCurrentCard();
        alert("Imported!");
      });
    });
  });
  $(document).one('click', '.help', function(evt) {
    var modal = $(JST.helpInfo({help: true})).modal().on('hidden.bs.modal', function(e) {
      modal.remove();
    });
    $('.modal-backdrop').slice(1).remove();
  });
  $('.loading').remove();
};
var JSZip, _, Github, Markdown;
var stripPrefix = function(str) {
  return str.split(',')[1];
};
var getDataFile = function(path) {
  var def = $.Deferred();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = xhr.onerror = function(e) {
    if (xhr.status !== 200) {
      console.log(xhr);
      def.reject(xhr);
      return;
    } else {
      def.resolve(e.currentTarget.response);
    }
  };
  xhr.send();
  return def;
};
var makeRepoPromise = (function() {
  var repoName = "slide-shows";
  var repo;
  return function() {
    return $.Deferred(function(def) {
      if (repo) return def.resolve(repo);
      def.fail(function() {
        repo = null;
      });
      var github;
      var username = prompt("username");
      var password = prompt("password");
      if (!username || !password) {
        def.reject("Username/password was not provided.");
      } else {
        github = new Github({
          username: username,
          password: password,
          auth: "basic"
        });
        repo = github.getRepo(username, repoName);
        repo.show(function(err, info) {
          if (err) {
            if (err.error === 401) {
              def.reject("Incorrect username or password.");
            } else {
              if (!confirm("You don't have a slide-show repository,\n" + "can this application create one?")) {
                return def.reject("Could not create repo: User rejection");
              }
              github.getRepo("showandtell", repoName).fork(function(err) {
                repo = github.getRepo(username, repoName);
                repo.show(function(err, info) {
                  if (err) {
                    def.reject("Could not access the newly created repo, we might need to wait a minute...");
                  } else {
                    repo.ghPagesURL = 'http://' + username + ".github.com/" + repoName + '/';
                    def.resolve(repo);
                  }
                });
              });
            }
          } else {
            repo.ghPagesURL = 'http://' + username + ".github.com/" + repoName + '/';
            def.resolve(repo);
          }
        });
      }
    }).promise();
  };
}());
var exporters = {
  zip: function(deck, callback) {
    var zipPromise = getDataFile('reveal.js.zip');
    var mdConverter = new Markdown.Converter();
    var writeZipPromise = $.Deferred();
    zipPromise.done(function(zipFile) {
      var zip = new JSZip(zipFile, {base64: false});
      _.each(deck.get('cards'), function(card) {
        if (card.text) {
          card.formattedText = mdConverter.makeHtml(card.text);
        }
        if (card.image && card.image.dataURL) {
          card.image.path = 'media/' + card.image.name;
          zip.file('slideshow/' + card.image.path, stripPrefix(card.image.dataURL), {base64: true});
        }
        if (card.audio && card.audio.dataURL) {
          card.audio.path = 'media/' + card.audio.name;
          zip.file('slideshow/' + card.audio.path, stripPrefix(card.audio.dataURL), {base64: true});
        }
      });
      writeZipPromise.resolve(zip);
    });
    $.when(writeZipPromise, $.get('assets/revealIndex.html')).done(function(zip, revealIndex) {
      zip.file('slideshow/deck.js', "var deck=" + JSON.stringify(deck.toSmallJSON()));
      zip.file('slideshow/index.html', revealIndex[0]);
      var zipBlob = zip.generate({type: 'blob'});
      callback(null, zipBlob);
    }).fail(callback);
  },
  github: function(deck, callback) {
    $.when(makeRepoPromise(), $.get('assets/revealIndex.html')).fail(callback).done(function(repo, revealIndex) {
      var writer = repo.batchWriter('gh-pages');
      var presentationName = deck.get('name');
      var presDir = presentationName + '/';
      var mdConverter = new Markdown.Converter();
      _.each(deck.get('cards'), function(card) {
        if (card.text) {
          card.formattedText = mdConverter.makeHtml(card.text);
        }
        if (card.image && card.image.dataURL) {
          card.image.path = 'media/' + card.image.name;
          writer.write(presDir + card.image.path, {
            content: stripPrefix(card.image.dataURL),
            encoding: 'base64'
          });
        }
        if (card.audio && card.audio.dataURL) {
          card.audio.path = 'media/' + card.audio.name;
          writer.write(presDir + card.audio.path, {
            content: stripPrefix(card.audio.dataURL),
            encoding: 'base64'
          });
        }
      });
      writer.write(presDir + 'index.html', revealIndex[0]);
      writer.write(presDir + 'deck.js', "var deck=" + JSON.stringify(deck.toSmallJSON(), 0, 2));
      writer.commit("Show & Tell commit").done(function() {
        callback(null, repo.ghPagesURL + presentationName);
      }).fail(function(err) {
        callback(err);
      });
    });
  }
};
var _, JSZip, base64ArrayBuffer;
var getExt = function(path) {
  return path.split('.').unshift();
};
var importers = {
  zip: function(file) {
    var imported = $.Deferred();
    var loadExternalAssets = function(zip, deck) {
      var assetsLoaded = $.Deferred();
      assetsLoaded.resolve(deck);
      _.each(deck.cards, function(card) {
        if (card.image && card.image.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred) {
            _.defer(function() {
              var arrayBuffer = zip.file('slideshow/' + card.image.path).asArrayBuffer();
              card.image.dataURL = 'data:image/' + getExt(card.image.path) + ';base64,' + base64ArrayBuffer.encode(arrayBuffer);
              thisDeferred.resolve(deck);
            });
          }));
        }
        if (card.audio && card.audio.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred) {
            _.defer(function() {
              var arrayBuffer = zip.file('slideshow/' + card.audio.path).asArrayBuffer();
              card.audio.dataURL = 'data:audio/' + getExt(card.audio.path) + ';base64,' + base64ArrayBuffer.encode(arrayBuffer);
              thisDeferred.resolve(deck);
            });
          }));
        }
      });
      return $.Deferred(function(d) {
        assetsLoaded.done(function() {
          d.resolve(deck);
        });
        assetsLoaded.fail(d.reject);
      });
    };
    var reader = new FileReader();
    reader.onload = function(readEvent) {
      var zip = new JSZip(readEvent.target.result, {base64: false});
      var oldFormat = zip.file('deck.json');
      if (oldFormat) {
        imported.resolve({
          name: readEvent.target.name || "slideshow",
          cards: JSON.parse(zip.file('deck.json').asText())
        });
      } else {
        loadExternalAssets(zip, JSON.parse(zip.file('slideshow/deck.js').asText().slice(9))).done(imported.resolve).fail(imported.reject);
      }
    };
    reader.readAsArrayBuffer(file);
    return imported.promise();
  },
  github: function(repo, slideShowName) {
    var imported = $.Deferred();
    var loadExternalAssets = function(repo, deck) {
      var assetsLoaded = $.Deferred();
      assetsLoaded.resolve(deck);
      _.each(deck.cards, function(card) {
        if (card.image && card.image.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred) {
            repo.readBase64('gh-pages', slideShowName + '/' + card.image.path, function(err, data) {
              console.log(data);
              if (err) return thisDeferred.reject(err);
              card.image.dataURL = 'data:image/' + getExt(card.image.path) + ';base64,' + data;
              thisDeferred.resolve(deck);
            });
          }));
        }
        if (card.audio && card.audio.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred) {
            repo.readBase64('gh-pages', slideShowName + '/' + card.audio.path, function(err, data) {
              console.log(data);
              if (err) return thisDeferred.reject(err);
              card.audio.dataURL = 'data:audio/' + getExt(card.audio.path) + ';base64,' + data;
              thisDeferred.resolve(deck);
            });
          }));
        }
      });
      return $.Deferred(function(d) {
        assetsLoaded.done(function() {
          d.resolve(deck);
        });
        assetsLoaded.fail(d.reject);
      });
    };
    repo.read('gh-pages', slideShowName + '/deck.js', function(err, data) {
      if (err) return imported.reject(err);
      loadExternalAssets(repo, JSON.parse(data.slice(9))).done(imported.resolve).fail(imported.reject);
    });
    return imported.promise();
  }
};
var _, RecordRTC, base64ArrayBuffer, createWebWorker, convertStreams;
var blobToDataURL = function(blob, callback) {
  var reader = new FileReader();
  reader.onload = function(e) {
    callback(null, e.target.result);
  };
  reader.onerror = callback;
  reader.readAsDataURL(blob);
};
var mediaWidgets = {
  text: {
    updateValue: _.debounce(function(evt) {
      var value = $(evt.target).closest('textarea').val();
      this.value.set(value);
    }, 100),
    events: {
      'keypress textarea': 'updateValue',
      'paste textarea': 'updateValue',
      'cut textarea': 'updateValue'
    }
  },
  image: {
    urlChange: _.debounce(function(evt) {
      var img = this.$('.url').val();
      var that = this;
      if (!img || img === this.prevVal) return;
      this.$('#img-error').empty();
      this.prevVal = img;
      var match = img.match(/(\/([^.]+\.[^.]+))$/i);
      var ext = 'jpeg';
      var name = 'img.' + ext;
      if (match) {
        name = match[match.length - 1];
        ext = name.split('.')[1];
      }
      var xhr = new XMLHttpRequest();
      xhr.open('GET', img, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = xhr.onerror = function(e) {
        if (xhr.status !== 200) {
          console.log(xhr);
          if (!xhr.statusText) {
            that.$('#img-error').text("Could not load image: It may be hosted on a domain that doesn't allow CORs");
          } else {
            that.$('#img-error').text('Could not load image: ' + xhr.statusText);
          }
          return;
        }
        that.value.set({
          name: name,
          dataURL: 'data:image/' + ext + ';base64,' + base64ArrayBuffer.decode(e.currentTarget.response)
        });
        that.render();
      };
      xhr.send();
    }, 600),
    uploadfile: function(evt) {
      console.log('test');
      var that = this;
      this.$("#img-error").empty();
      var files = evt.target.files;
      var file = files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        that.value.set({
          name: file.name,
          dataURL: e.target.result
        });
        that.render();
      };
      try {
        reader.readAsDataURL(file);
      } catch (e) {
        $("#img-error").append("<p>Could not read file.</p>");
        throw e;
      }
      this.$('.uploadfile').val("");
    },
    clear: function() {
      this.value.set(null);
      this.render();
    },
    events: {
      'keypress .url': 'urlChange',
      'blur .url': 'urlChange',
      'paste .url': 'urlChange',
      'change .uploadfile': 'uploadfile',
      'click .clear': 'clear'
    }
  },
  audio: {
    initialize: function() {
      if (localStorage.getItem("downloadWavConverter") === "true") this.loadWavConverter();
    },
    recording: false,
    inChrome: navigator.userAgent.match('Chrome') ? true: false,
    loadWavConverter: function() {
      var that = this;
      this.wavConverterLoading = true;
      window.worker = createWebWorker();
      window.worker.onready = function(event) {
        that.wavConverterLoading = false;
        that.wavConverterLoaded = true;
        that.render();
      };
    },
    render: function() {
      return this.basicRender({
        recording: this.recording,
        wavConverterLoading: this.wavConverterLoading,
        wavConverterLoaded: this.wavConverterLoaded,
        audioCompatible: this.inChrome
      });
    },
    record: function(evt) {
      var that = this;
      if (this.recording) return;
      this.recording = true;
      navigator.getUserMedia({audio: true}, onMediaSuccess, onMediaError);
      function done() {
        that.recording = false;
        that.render();
      }
      function onMediaSuccess(stream) {
        var type = 'webm';
        try {
          var recordRTC = new RecordRTC(stream);
          recordRTC.startRecording();
          var startTime = new Date();
          var currentValue = that.value.get();
          if (!currentValue) {
            currentValue = {};
            that.value.set(currentValue);
          }
          that.render();
          $(document).one('click', '.stop, .record', function(evt) {
            recordRTC.stopRecording();
            currentValue.converting = true;
            done();
            var blob = recordRTC.getBlob();
            if (!blob) {
              alert("Could not get recordRTC blob.");
              currentValue.converting = false;
              this.render();
              return;
            }
            convertStreams(blob, function(err, vorbisBlob) {
              if (err) throw err;
              if (vorbisBlob.size === 0) {
                console.log("Empty blob");
                console.log(vorbisBlob);
              }
              blobToDataURL(vorbisBlob, function(err, dataURL) {
                if (err) {
                  alert("Error converting vorbisBlob to data url.");
                  console.log(err);
                }
                _.extend(currentValue, {
                  name: 'rec' + Number(startTime) + '.' + type,
                  startTime: startTime,
                  stopTime: new Date(),
                  dataURL: dataURL,
                  converting: false
                });
                if (that.value.get() === currentValue) {
                  that.render();
                  this.$('audio')[0].play();
                }
              });
            });
          });
        } catch (e) {
          onMediaError(e);
        }
      }
      function onMediaError(e) {
        console.error('media error: ' + JSON.stringify(e));
        done();
      }
    },
    clear: function() {
      this.value.set(null);
      this.render();
    },
    enable: function() {
      var that = this;
      localStorage.setItem("downloadWavConverter", $('#rememberWavConverter').prop('checked'));
      this.loadWavConverter();
      this.render();
    },
    events: {
      'click .record': 'record',
      'click .clear': 'clear',
      'click .enable-audio': 'enable'
    }
  }
};
function createWebWorker() {
  var workerPath = 'https://bgrins.github.io/videoconverter.js/build/ffmpeg.js';
  var blob = URL.createObjectURL(new Blob(['importScripts("' + workerPath + '");var now = Date.now;function print(text) {postMessage({"type" : "stdout","data" : text});};onmessage = function(event) {var message = event.data;if (message.type === "command") {var Module = {print: print,printErr: print,files: message.files || [],arguments: message.arguments || [],TOTAL_MEMORY: message.TOTAL_MEMORY || false};postMessage({"type" : "start","data" : Module.arguments.join(" ")});postMessage({"type" : "stdout","data" : "Received command: " +Module.arguments.join(" ") +((Module.TOTAL_MEMORY) ? ".  Processing with " + Module.TOTAL_MEMORY + " bits." : "")});var time = now();var result = ffmpeg_run(Module);var totalTime = now() - time;postMessage({"type" : "stdout","data" : "Finished processing (took " + totalTime + "ms)"});postMessage({"type" : "done","data" : result,"time" : totalTime});}};postMessage({"type" : "ready"});'], {type: 'application/javascript'}));
  var worker = new Worker(blob);
  URL.revokeObjectURL(blob);
  worker.onready = function() {};
  worker.onmessage = function(event) {
    var message = event.data;
    if (message.type == "ready") {
      worker.ready = true;
      worker.onready();
    }
  };
  return worker;
}
var worker;
function convertStreams(audioBlob, callback) {
  var aab;
  var buffersReady;
  var workerReady;
  var posted;
  var fileReader = new FileReader();
  fileReader.onload = function() {
    aab = this.result;
    postMessage();
  };
  fileReader.readAsArrayBuffer(audioBlob);
  if (!worker || !worker.ready) {
    throw Error("Worker is not ready");
  }
  worker.onmessage = function(event) {
    var message = event.data;
    if (message.type == "stdout") {
      console.log(message.data);
    } else if (message.type == "start") {
      console.log('<a href="https://googledrive.com/host/0B6GWd_dUUTT8OEtLRGdQb2pibDg/ffmpeg_asm.js" download="ffmpeg-asm.js">ffmpeg-asm.js</a> file received ffmpeg command.');
    } else if (message.type == "done") {
      var result = message.data[0];
      var blob = new Blob([result.data], {type: 'audio/webm'});
      callback(null, blob);
    }
  };
  var postMessage = function() {
    posted = true;
    worker.postMessage({
      type: 'command',
      arguments: ['-i', 'audio.wav', '-c:a', 'vorbis', '-b:a', '48k', '-strict', 'experimental', 'output.webm'],
      files: [{
        data: new Uint8Array(aab),
        name: "audio.wav"
      }]
    });
  };
}
if (!jQuery) throw new Error("Bootstrap requires jQuery");
+ function(a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"), b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var c in b) if (void 0 !== a.style[c]) return {end: b[c]};
  }
  a.fn.emulateTransitionEnd = function(b) {
    var c = !1, d = this;
    a(this).one(a.support.transition.end, function() {
      c = !0;
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end);
    };
    return setTimeout(e, b), this;
  }, a(function() {
    a.support.transition = b();
  });
}(window.jQuery), + function(a) {
  "use strict";
  var b = '[data-dismiss="alert"]', c = function(c) {
    a(c).on("click", b, this.close);
  };
  c.prototype.close = function(b) {
    function c() {
      f.trigger("closed.bs.alert").remove();
    }
    var d = a(this), e = d.attr("data-target");
    e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
    var f = a(e);
    b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d: d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150): c());
  };
  var d = a.fn.alert;
  a.fn.alert = function(b) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.alert");
      e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d);
    });
  }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
    return a.fn.alert = d, this;
  }, a(document).on("click.bs.alert.data-api", b, c.prototype.close);
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d);
  };
  b.DEFAULTS = {loadingText: "loading..."}, b.prototype.setState = function(a) {
    var b = "disabled", c = this.$element, d = c.is("input") ? "val": "html", e = c.data();
    a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function() {
      "loadingText" == a ? c.addClass(b).attr(b, b): c.removeClass(b).removeAttr(b);
    }, 0);
  }, b.prototype.toggle = function() {
    var a = this.$element.closest('[data-toggle="buttons"]');
    if (a.length) {
      var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
      "radio" === b.prop("type") && a.find(".active").removeClass("active");
    }
    this.$element.toggleClass("active");
  };
  var c = a.fn.button;
  a.fn.button = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
      e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle(): c && e.setState(c);
    });
  }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
    return a.fn.button = c, this;
  }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
    var c = a(b.target);
    c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault();
  });
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
  };
  b.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0
  }, b.prototype.cycle = function(b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, b.prototype.getActiveIndex = function() {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active);
  }, b.prototype.to = function(b) {
    var c = this, d = this.getActiveIndex();
    return b > this.$items.length - 1 || 0 > b ? void 0: this.sliding ? this.$element.one("slid", function() {
      c.to(b);
    }): d == b ? this.pause().cycle(): this.slide(b > d ? "next": "prev", a(this.$items[b]));
  }, b.prototype.pause = function(b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, b.prototype.next = function() {
    return this.sliding ? void 0: this.slide("next");
  }, b.prototype.prev = function() {
    return this.sliding ? void 0: this.slide("prev");
  }, b.prototype.slide = function(b, c) {
    var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left": "right", h = "next" == b ? "first": "last", i = this;
    if (!e.length) {
      if (!this.options.wrap) return;
      e = this.$element.find(".item")[h]();
    }
    this.sliding = !0, f && this.pause();
    var j = a.Event("slide.bs.carousel", {
      relatedTarget: e[0],
      direction: g
    });
    if (!e.hasClass("active")) {
      if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
        var b = a(i.$indicators.children()[i.getActiveIndex()]);
        b && b.addClass("active");
      })), a.support.transition && this.$element.hasClass("slide")) {
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
          e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
            i.$element.trigger("slid");
          }, 0);
        }).emulateTransitionEnd(600);
      } else {
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid");
      }
      return f && this.cycle(), this;
    }
  };
  var c = a.fn.carousel;
  a.fn.carousel = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c: f.slide;
      e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c): g ? e[g](): f.interval && e.pause().cycle();
    });
  }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = c, this;
  }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
    var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
    g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault();
  }), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var b = a(this);
      b.carousel(b.data());
    });
  });
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
  };
  b.DEFAULTS = {toggle: !0}, b.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width": "height";
  }, b.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b = a.Event("show.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.$parent && this.$parent.find("> .panel > .in");
        if (c && c.length) {
          var d = c.data("bs.collapse");
          if (d && d.transitioning) return;
          c.collapse("hide"), d || c.data("bs.collapse", null);
        }
        var e = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
        var f = function() {
          this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
        };
        if (!a.support.transition) return f.call(this);
        var g = a.camelCase(["scroll", e].join("-"));
        this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
      }
    }
  }, b.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
        var d = function() {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };
        return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0): d.call(this);
      }
    }
  }, b.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide": "show"]();
  };
  var c = a.fn.collapse;
  a.fn.collapse = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
      e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = c, this;
  }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
    var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle": d.data(), i = d.attr("data-parent"), j = i && a(i);
    g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass": "removeClass"]("collapsed")), f.collapse(h);
  });
}(window.jQuery), + function(a) {
  "use strict";
  function b() {
    a(d).remove(), a(e).each(function(b) {
      var d = c(a(this));
      d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"));
    });
  }
  function c(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d: b.parent();
  }
  var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };
  f.prototype.toggle = function(d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = c(e), g = f.hasClass("open");
      if (b(), !g) {
        if ("ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
        f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus();
      }
      return !1;
    }
  }, f.prototype.keydown = function(b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);
      if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var f = c(d), g = f.hasClass("open");
        if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
        var h = a("[role=menu] li:not(.divider):visible a", f);
        if (h.length) {
          var i = h.index(h.filter(":focus"));
          38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus();
        }
      }
    }
  };
  var g = a.fn.dropdown;
  a.fn.dropdown = function(b) {
    return this.each(function() {
      var c = a(this), d = c.data("dropdown");
      d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c);
    });
  }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = g, this;
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown);
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(b, c) {
    this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote);
  };
  b.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, b.prototype.toggle = function(a) {
    return this[this.isShown ? "hide": "show"](a);
  }, b.prototype.show = function(b) {
    var c = this, d = a.Event("show.bs.modal", {relatedTarget: b});
    this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
      var d = a.support.transition && c.$element.hasClass("fade");
      c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
      var e = a.Event("shown.bs.modal", {relatedTarget: b});
      d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
        c.$element.focus().trigger(e);
      }).emulateTransitionEnd(300): c.$element.focus().trigger(e);
    }));
  }, b.prototype.hide = function(b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300): this.hideModal());
  }, b.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
    }, this));
  }, b.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
      27 == a.which && this.hide();
    }, this)): this.isShown || this.$element.off("keyup.dismiss.bs.modal");
  }, b.prototype.hideModal = function() {
    var a = this;
    this.$element.hide(), this.backdrop(function() {
      a.removeBackdrop(), a.$element.trigger("hidden.bs.modal");
    });
  }, b.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, b.prototype.backdrop = function(b) {
    var c = this.$element.hasClass("fade") ? "fade": "";
    if (this.isShown && this.options.backdrop) {
      var d = a.support.transition && c;
      if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) {
        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]): this.hide.call(this));
      }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150): b();
    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150): b()): b && b();
  };
  var c = a.fn.modal;
  a.fn.modal = function(c, d) {
    return this.each(function() {
      var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
      f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d): g.show && f.show(d);
    });
  }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
    return a.fn.modal = c, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
    var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle": a.extend({remote: !/#/.test(d) && d}, e.data(), c.data());
    b.preventDefault(), e.modal(f, this).one("hide", function() {
      c.is(":visible") && c.focus();
    });
  }), a(document).on("show.bs.modal", ".modal", function() {
    a(document.body).addClass("modal-open");
  }).on("hidden.bs.modal", ".modal", function() {
    a(document.body).removeClass("modal-open");
  });
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
  };
  b.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  }, b.prototype.init = function(b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter": "focus", i = "hover" == g ? "mouseleave": "blur";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }): this.fixTitle();
  }, b.prototype.getDefaults = function() {
    return b.DEFAULTS;
  }, b.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, b.prototype.getDelegateOptions = function() {
    var b = {}, c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, b.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b: a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show), void 0): c.show();
  }, b.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b: a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide), void 0): c.hide();
  }, b.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(b), b.isDefaultPrevented()) return;
      var c = this.tip();
      this.setContent(), this.options.animation && c.addClass("fade");
      var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]): this.options.placement, e = /\s?auto?\s?/i, f = e.test(d);
      f && (d = d.replace(e, "") || "top"), c.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(d), this.options.container ? c.appendTo(this.options.container): c.insertAfter(this.$element);
      var g = this.getPosition(), h = c[0].offsetWidth, i = c[0].offsetHeight;
      if (f) {
        var j = this.$element.parent(), k = d, l = document.documentElement.scrollTop || document.body.scrollTop, m = "body" == this.options.container ? window.innerWidth: j.outerWidth(), n = "body" == this.options.container ? window.innerHeight: j.outerHeight(), o = "body" == this.options.container ? 0: j.offset().left;
        d = "bottom" == d && g.top + g.height + i - l > n ? "top": "top" == d && g.top - l - i < 0 ? "bottom": "right" == d && g.right + h > m ? "left": "left" == d && g.left - h < o ? "right": d, c.removeClass(k).addClass(d);
      }
      var p = this.getCalculatedOffset(d, g, h, i);
      this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type);
    }
  }, b.prototype.applyPlacement = function(a, b) {
    var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
    var i = d[0].offsetWidth, j = d[0].offsetHeight;
    if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
      var k = 0;
      a.left < 0 && (k = - 2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left");
    } else this.replaceArrow(j - f, j, "top");
    c && d.offset(a);
  }, b.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + "%": "");
  }, b.prototype.setContent = function() {
    var a = this.tip(), b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html": "text"](b), a.removeClass("fade in top bottom left right");
  }, b.prototype.hide = function() {
    function b() {
      "in" != c.hoverState && d.detach();
    }
    var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
    return this.$element.trigger(e), e.isDefaultPrevented() ? void 0: (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150): b(), this.$element.trigger("hidden.bs." + this.type), this);
  }, b.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, b.prototype.hasContent = function() {
    return this.getTitle();
  }, b.prototype.getPosition = function() {
    var b = this.$element[0];
    return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect(): {
      width: b.offsetWidth,
      height: b.offsetHeight
    }, this.$element.offset());
  }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    }: "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    }: "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    }: {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, b.prototype.getTitle = function() {
    var a, b = this.$element, c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]): c.title);
  }, b.prototype.tip = function() {
    return this.$tip = this.$tip || a(this.options.template);
  }, b.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, b.prototype.validate = function() {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  }, b.prototype.enable = function() {
    this.enabled = !0;
  }, b.prototype.disable = function() {
    this.enabled = !1;
  }, b.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled;
  }, b.prototype.toggle = function(b) {
    var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type): this;
    c.tip().hasClass("in") ? c.leave(c): c.enter(c);
  }, b.prototype.destroy = function() {
    this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };
  var c = a.fn.tooltip;
  a.fn.tooltip = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
      e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = c, this;
  };
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(a, b) {
    this.init("popover", a, b);
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
    return b.DEFAULTS;
  }, b.prototype.setContent = function() {
    var a = this.tip(), b = this.getTitle(), c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html": "text"](b), a.find(".popover-content")[this.options.html ? "html": "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, b.prototype.hasContent = function() {
    return this.getTitle() || this.getContent();
  }, b.prototype.getContent = function() {
    var a = this.$element, b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]): b.content);
  }, b.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, b.prototype.tip = function() {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };
  var c = a.fn.popover;
  a.fn.popover = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
      e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
    return a.fn.popover = c, this;
  };
}(window.jQuery), + function(a) {
  "use strict";
  function b(c, d) {
    var e, f = a.proxy(this.process, this);
    this.$element = a(c).is("body") ? a(window): a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process();
  }
  b.DEFAULTS = {offset: 10}, b.prototype.refresh = function() {
    var b = this.$element[0] == window ? "offset": "position";
    this.offsets = a([]), this.targets = a([]);
    var c = this;
    this.$body.find(this.selector).map(function() {
      var d = a(this), e = d.data("target") || d.attr("href"), f = /^#\w/.test(e) && a(e);
      return f && f.length && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null;
    }).sort(function(a, b) {
      return a[0] - b[0];
    }).each(function() {
      c.offsets.push(this[0]), c.targets.push(this[1]);
    });
  }, b.prototype.process = function() {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
    if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate");
  };
  var c = a.fn.scrollspy;
  a.fn.scrollspy = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = c, this;
  }, a(window).on("load", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      b.scrollspy(b.data());
    });
  });
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(b) {
    this.element = a(b);
  };
  b.prototype.show = function() {
    var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.attr("data-target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {relatedTarget: e});
      if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);
        this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
          b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e
          });
        });
      }
    }
  }, b.prototype.activate = function(b, c, d) {
    function e() {
      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")): b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
    }
    var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
    g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150): e(), f.removeClass("in");
  };
  var c = a.fn.tab;
  a.fn.tab = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.tab");
      e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]();
    });
  }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
    return a.fn.tab = c, this;
  }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
    b.preventDefault(), a(this).tab("show");
  });
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition();
  };
  b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {offset: 0}, b.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, b.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
      "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
      var i = null != this.unpin && d + this.unpin <= e.top ? !1: null != h && e.top + this.$element.height() >= c - h ? "bottom": null != g && g >= d ? "top": !1;
      this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d: null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i: "")), "bottom" == i && this.$element.offset({top: document.body.offsetHeight - h - this.$element.height()}));
    }
  };
  var c = a.fn.affix;
  a.fn.affix = function(c) {
    return this.each(function() {
      var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
      e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
    return a.fn.affix = c, this;
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var b = a(this), c = b.data();
      c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
    });
  });
}(window.jQuery);
