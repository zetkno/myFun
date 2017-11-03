/**
 * Created by mingyue on 2017/11/3.
 */
!function (a, b) {
    function c(a) {
        var b = oa[a] = {};
        return $.each(a.split(ba), function (a, c) {
            b[c] = !0
        }), b
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(qa, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : pa.test(d) ? $.parseJSON(d) : d
                } catch (f) {
                }
                $.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        var b;
        for (b in a)if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        return !0
    }

    function h(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function i(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function j(a, b, c) {
        if (b = b || 0, $.isFunction(b))return $.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return $.grep(a, function (a, d) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = $.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Ka.test(b))return $.filter(b, d, !c);
            b = $.filter(b, d)
        }
        return $.grep(a, function (a, d) {
            return $.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = Na.split("|"), c = a.createDocumentFragment();
        if (c.createElement)for (; b.length;)c.createElement(b.pop());
        return c
    }

    function l(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function m(a, b) {
        if (1 === b.nodeType && $.hasData(a)) {
            var c, d, e, f = $._data(a), g = $._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)$.event.add(b, c, h[c][d])
            }
            g.data && (g.data = $.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando))
    }

    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        Xa.test(a.type) && (a.defaultChecked = a.checked)
    }

    function q(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rb.length; e--;)if (b = rb[e] + c, b in a)return b;
        return d
    }

    function r(a, b) {
        return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
    }

    function s(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++)c = a[f], c.style && (e[f] = $._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cb(c, "display"), !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
        for (f = 0; g > f; f++)c = a[f], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
        return a
    }

    function t(a, b, c) {
        var d = kb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function u(a, b, c, d) {
        for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2)"margin" === c && (f += $.css(a, c + qb[e], !0)), d ? ("content" === c && (f -= parseFloat(cb(a, "padding" + qb[e])) || 0), "margin" !== c && (f -= parseFloat(cb(a, "border" + qb[e] + "Width")) || 0)) : (f += parseFloat(cb(a, "padding" + qb[e])) || 0, "padding" !== c && (f += parseFloat(cb(a, "border" + qb[e] + "Width")) || 0));
        return f
    }

    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight, e = !0,
            f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
        if (0 >= d || null == d) {
            if (d = cb(a, b), (0 > d || null == d) && (d = a.style[b]), lb.test(d))return d;
            e = f && ($.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function w(a) {
        if (nb[a])return nb[a];
        var b = $("<" + a + ">").appendTo(P.body), c = b.css("display");
        return b.remove(), ("none" === c || "" === c) && (db = P.body.appendChild(db || $.extend(P.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })), eb && db.createElement || (eb = (db.contentWindow || db.contentDocument).document, eb.write("<!doctype html><html><body>"), eb.close()), b = eb.body.appendChild(eb.createElement(a)), c = cb(b, "display"), P.body.removeChild(db)), nb[a] = c, c
    }

    function x(a, b, c, d) {
        var e;
        if ($.isArray(b)) $.each(b, function (b, e) {
            c || ub.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== $.type(b)) d(a, b); else for (e in b)x(a + "[" + e + "]", b[e], c, d)
    }

    function y(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(ba), h = 0, i = g.length;
            if ($.isFunction(c))for (; i > h; h++)d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function z(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Kb; k > j && (l || !h); j++)h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)), h
    }

    function A(a, c) {
        var d, e, f = $.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && $.extend(!0, a, e)
    }

    function B(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k)f in d && (c[k[f]] = d[f]);
        for (; "*" === j[0];)j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)for (f in i)if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0] in d) g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function C(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1])for (c in a.converters)i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)if ("*" !== e) {
            if ("*" !== h && h !== e) {
                if (c = i[h + " " + e] || i["* " + e], !c)for (d in i)if (f = d.split(" "), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                    break
                }
                if (c !== !0)if (c && a["throws"]) b = c(b); else try {
                    b = c(b)
                } catch (k) {
                    return {state: "parsererror", error: c ? k : "No conversion from " + h + " to " + e}
                }
            }
            h = e
        }
        return {state: "success", data: b}
    }

    function D() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function E() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function F() {
        return setTimeout(function () {
            Vb = b
        }, 0), Vb = $.now()
    }

    function G(a, b) {
        $.each(b, function (b, c) {
            for (var d = (_b[b] || []).concat(_b["*"]), e = 0, f = d.length; f > e; e++)if (d[e].call(a, b, c))return
        })
    }

    function H(a, b, c) {
        var d, e = 0, f = $b.length, g = $.Deferred().always(function () {
            delete h.elem
        }), h = function () {
            for (var b = Vb || F(), c = Math.max(0, i.startTime + i.duration - b), d = 1 - (c / i.duration || 0), e = 0, f = i.tweens.length; f > e; e++)i.tweens[e].run(d);
            return g.notifyWith(a, [i, d, c]), 1 > d && f ? c : (g.resolveWith(a, [i]), !1)
        }, i = g.promise({
            elem: a,
            props: $.extend({}, b),
            opts: $.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Vb || F(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c, d) {
                var e = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                return i.tweens.push(e), e
            },
            stop: function (b) {
                for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++)i.tweens[c].run(1);
                return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this
            }
        }), j = i.props;
        for (I(j, i.opts.specialEasing); f > e; e++)if (d = $b[e].call(i, a, j, i.opts))return d;
        return G(i, j), $.isFunction(i.opts.start) && i.opts.start.call(a, i), $.fx.timer($.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }

    function I(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function J(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = a.style, n = {}, o = [], p = a.nodeType && r(a);
        c.queue || (j = $._queueHooks(a, "fx"), null == j.unqueued && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function () {
            j.unqueued || k()
        }), j.unqueued++, l.always(function () {
            l.always(function () {
                j.unqueued--, $.queue(a, "fx").length || j.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? m.zoom = 1 : m.display = "inline-block")), c.overflow && (m.overflow = "hidden", $.support.shrinkWrapBlocks || l.done(function () {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)if (f = b[d], Xb.exec(f)) {
            if (delete b[d], f === (p ? "hide" : "show"))continue;
            o.push(d)
        }
        if (g = o.length)for (h = $._data(a, "fxshow") || $._data(a, "fxshow", {}), p ? $(a).show() : l.done(function () {
            $(a).hide()
        }), l.done(function () {
            var b;
            $.removeData(a, "fxshow", !0);
            for (b in n)$.style(a, b, n[b])
        }), d = 0; g > d; d++)e = o[d], i = l.createTween(e, p ? h[e] : 0), n[e] = h[e] || $.style(a, e), e in h || (h[e] = i.start, p && (i.end = i.start, i.start = "width" === e || "height" === e ? 1 : 0))
    }

    function K(a, b, c, d, e) {
        return new K.prototype.init(a, b, c, d, e)
    }

    function L(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = qb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function M(a) {
        return $.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var N, O, P = a.document, Q = a.location, R = a.navigator, S = a.jQuery, T = a.$, U = Array.prototype.push,
        V = Array.prototype.slice, W = Array.prototype.indexOf, X = Object.prototype.toString,
        Y = Object.prototype.hasOwnProperty, Z = String.prototype.trim, $ = function (a, b) {
            return new $.fn.init(a, b, N)
        }, _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, aa = /\S/, ba = /\s+/,
        ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fa = /^[\],:{}\s]*$/, ga = /(?:^|:|,)(?:\s*\[)+/g,
        ha = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ia = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ja = /^-ms-/, ka = /-([\da-z])/gi,
        la = function (a, b) {
            return (b + "").toUpperCase()
        }, ma = function () {
            P.addEventListener ? (P.removeEventListener("DOMContentLoaded", ma, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", ma), $.ready())
        }, na = {};
    $.fn = $.prototype = {
        constructor: $, init: function (a, c, d) {
            var e, f, g;
            if (!a)return this;
            if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : da.exec(a), e && (e[1] || !c)) {
                    if (e[1])return c = c instanceof $ ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : P, a = $.parseHTML(e[1], g, !0), ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
                    if (f = P.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2])return d.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = P, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
        }, selector: "", jquery: "1.8.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return V.call(this)
        }, get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = $.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }, each: function (a, b) {
            return $.each(this, a, b)
        }, ready: function (a) {
            return $.ready.promise().done(a), this
        }, eq: function (a) {
            return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack($.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: U, sort: [].sort, splice: [].splice
    }, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" != typeof h && !$.isFunction(h) && (h = {}), j === i && (h = this, --i); j > i; i++)if (null != (a = arguments[i]))for (c in a)d = h[c], e = a[c], h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {}, h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, $.extend({
        noConflict: function (b) {
            return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? $.readyWait++ : $.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--$.readyWait : !$.isReady) {
                if (!P.body)return setTimeout($.ready, 1);
                $.isReady = !0, a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"))
            }
        }, isFunction: function (a) {
            return "function" === $.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === $.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return null == a ? String(a) : na[X.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a))return !1;
            try {
                if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || Y.call(a, d)
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, error: function (a) {
            throw new Error(a)
        }, parseHTML: function (a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || P, (d = ea.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null
        }, parseJSON: function (b) {
            return b && "string" == typeof b ? (b = $.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : fa.test(b.replace(ha, "@").replace(ia, "]").replace(ga, "")) ? new Function("return " + b)() : void $.error("Invalid JSON: " + b)) : null
        }, parseXML: function (c) {
            var d, e;
            if (!c || "string" != typeof c)return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c), d
        }, noop: function () {
        }, globalEval: function (b) {
            b && aa.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(ja, "ms-").replace(ka, la)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, c, d) {
            var e, f = 0, g = a.length, h = g === b || $.isFunction(a);
            if (d)if (h) {
                for (e in a)if (c.apply(a[e], d) === !1)break
            } else for (; g > f && c.apply(a[f++], d) !== !1;); else if (h) {
                for (e in a)if (c.call(a[e], e, a[e]) === !1)break
            } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
            return a
        }, trim: Z && !Z.call("\ufeffÂ ") ? function (a) {
            return null == a ? "" : Z.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(ca, "")
        }, makeArray: function (a, b) {
            var c, d = b || [];
            return null != a && (c = $.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (W)return W.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d)for (; d > f; f++)a[e++] = c[f]; else for (; c[f] !== b;)a[e++] = c[f++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++)d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        }, map: function (a, c, d) {
            var e, f, g = [], h = 0, i = a.length,
                j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
            if (j)for (; i > h; h++)e = c(a[h], h, d), null != e && (g[g.length] = e); else for (f in a)e = c(a[f], f, d), null != e && (g[g.length] = e);
            return g.concat.apply([], g)
        }, guid: 1, proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), $.isFunction(a) ? (e = V.call(arguments, 2), f = function () {
                return a.apply(c, e.concat(V.call(arguments)))
            }, f.guid = a.guid = a.guid || $.guid++, f) : b
        }, access: function (a, c, d, e, f, g, h) {
            var i, j = null == d, k = 0, l = a.length;
            if (d && "object" == typeof d) {
                for (k in d)$.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                if (i = h === b && $.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
                        return i.call($(a), c)
                    }) : (c.call(a, e), c = null)), c)for (; l > k; k++)c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        }, now: function () {
            return (new Date).getTime()
        }
    }), $.ready.promise = function (b) {
        if (!O)if (O = $.Deferred(), "complete" === P.readyState) setTimeout($.ready, 1); else if (P.addEventListener) P.addEventListener("DOMContentLoaded", ma, !1), a.addEventListener("load", $.ready, !1); else {
            P.attachEvent("onreadystatechange", ma), a.attachEvent("onload", $.ready);
            var c = !1;
            try {
                c = null == a.frameElement && P.documentElement
            } catch (d) {
            }
            c && c.doScroll && function e() {
                if (!$.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    $.ready()
                }
            }()
        }
        return O.promise(b)
    }, $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        na["[object " + b + "]"] = b.toLowerCase()
    }), N = $(P);
    var oa = {};
    $.Callbacks = function (a) {
        a = "string" == typeof a ? oa[a] || c(a) : $.extend({}, a);
        var d, e, f, g, h, i, j = [], k = !a.once && [], l = function (b) {
            for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                d = !1;
                break
            }
            f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
        }, m = {
            add: function () {
                if (j) {
                    var b = j.length;
                    !function c(b) {
                        $.each(b, function (b, d) {
                            var e = $.type(d);
                            "function" !== e || a.unique && m.has(d) ? d && d.length && "string" !== e && c(d) : j.push(d)
                        })
                    }(arguments), f ? h = j.length : d && (g = b, l(d))
                }
                return this
            }, remove: function () {
                return j && $.each(arguments, function (a, b) {
                    for (var c; (c = $.inArray(b, j, c)) > -1;)j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                }), this
            }, has: function (a) {
                return $.inArray(a, j) > -1
            }, empty: function () {
                return j = [], this
            }, disable: function () {
                return j = k = d = b, this
            }, disabled: function () {
                return !j
            }, lock: function () {
                return k = b, d || m.disable(), this
            }, locked: function () {
                return !k
            }, fireWith: function (a, b) {
                return b = b || [], b = [a, b.slice ? b.slice() : b], j && (!e || k) && (f ? k.push(b) : l(b)), this
            }, fire: function () {
                return m.fireWith(this, arguments), this
            }, fired: function () {
                return !!e
            }
        };
        return m
    }, $.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return $.Deferred(function (c) {
                            $.each(b, function (b, d) {
                                var f = d[0], g = a[b];
                                e[d[1]]($.isFunction(g) ? function () {
                                    var a = g.apply(this, arguments);
                                    a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                } : c[f])
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? $.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, $.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = V.call(arguments), g = f.length,
                h = 1 !== g || a && $.isFunction(a.promise) ? g : 0, i = 1 === h ? a : $.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? V.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), $.support = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
        if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5", !c || !c.length)return {};
        e = P.createElement("select"), f = e.appendChild(P.createElement("option")), g = m.getElementsByTagName("input")[0], b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !!m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !!P.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === P.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (n) {
            b.deleteExpando = !1
        }
        if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function () {
                b.noCloneEvent = !1
            }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)for (j in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
        return $(function () {
            var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                h = P.getElementsByTagName("body")[0];
            h && (c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {width: "4px"}).width, f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
        }), h.removeChild(m), c = d = e = f = g = h = m = null, b
    }();
    var pa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, qa = /([A-Z])/g;
    $.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando], !!a && !e(a)
        },
        data: function (a, c, d, e) {
            if ($.acceptData(a)) {
                var f, g, h = $.expando, i = "string" == typeof c, j = a.nodeType, k = j ? $.cache : a,
                    l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b)return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = $.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[$.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[$.camelCase(c)])) : g = f, g
            }
        },
        removeData: function (a, b, c) {
            if ($.acceptData(a)) {
                var d, f, g, h = a.nodeType, i = h ? $.cache : a, j = h ? a[$.expando] : $.expando;
                if (i[j]) {
                    if (b && (d = c ? i[j] : i[j].data)) {
                        $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; g > f; f++)delete d[b[f]];
                        if (!(c ? e : $.isEmptyObject)(d))return
                    }
                    (c || (delete i[j].data, e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
                }
            }
        },
        _data: function (a, b, c) {
            return $.data(a, b, c, !0)
        },
        acceptData: function (a) {
            var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), $.fn.extend({
        data: function (a, c) {
            var e, f, g, h, i, j = this[0], k = 0, l = null;
            if (a === b) {
                if (this.length && (l = $.data(j), 1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
                    for (g = j.attributes, i = g.length; i > k; k++)h = g[k].name, h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
                    $._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function () {
                $.data(this, a)
            }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this, function (c) {
                return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, void this.each(function () {
                    var b = $(this);
                    b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e)
                }))
            }, null, c, arguments.length > 1, null, !1))
        }, removeData: function (a) {
            return this.each(function () {
                $.removeData(this, a)
            })
        }
    }), $.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = $.queue(a, b), d = c.length, e = c.shift(), f = $._queueHooks(a, b), g = function () {
                $.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return $._data(a, c) || $._data(a, c, {
                    empty: $.Callbacks("once memory").add(function () {
                        $.removeData(a, b + "queue", !0), $.removeData(a, c, !0)
                    })
                })
        }
    }), $.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                $.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            var d, e = 1, f = $.Deferred(), g = this, h = this.length, i = function () {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)d = $._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var ra, sa, ta, ua = /[\t\r\n]/g, va = /\r/g, wa = /^(?:button|input)$/i,
        xa = /^(?:button|input|object|select|textarea)$/i, ya = /^a(?:rea|)$/i,
        za = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Aa = $.support.getSetAttribute;
    $.fn.extend({
        attr: function (a, b) {
            return $.access(this, $.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                $.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return $.access(this, $.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = $.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, f, g, h;
            if ($.isFunction(a))return this.each(function (b) {
                $(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)for (b = a.split(ba), c = 0, d = this.length; d > c; c++)if (e = this[c], 1 === e.nodeType)if (e.className || 1 !== b.length) {
                for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                e.className = $.trim(f)
            } else e.className = a;
            return this
        }, removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if ($.isFunction(a))return this.each(function (b) {
                $(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)for (c = (a || "").split(ba), h = 0, i = this.length; i > h; h++)if (e = this[h], 1 === e.nodeType && e.className) {
                for (d = (" " + e.className + " ").replace(ua, " "), f = 0, g = c.length; g > f; f++)for (; d.indexOf(" " + c[f] + " ") >= 0;)d = d.replace(" " + c[f] + " ", " ");
                e.className = a ? $.trim(d) : ""
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return $.isFunction(a) ? this.each(function (c) {
                $(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)for (var e, f = 0, g = $(this), h = b, i = a.split(ba); e = i[f++];)h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e); else("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ua, " ").indexOf(b) >= 0)return !0;
            return !1
        }, val: function (a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length)return e = $.isFunction(a), this.each(function (d) {
                    var f, g = $(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function (a) {
                            return null == a ? "" : a + ""
                        })), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f)return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(va, "") : null == d ? "" : d)
            }
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = "select-one" === a.type;
                    if (0 > f)return null;
                    for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)if (e = h[c], e.selected && ($.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !$.nodeName(e.parentNode, "optgroup"))) {
                        if (b = $(e).val(), i)return b;
                        g.push(b)
                    }
                    return i && !g.length && h.length ? $(h[f]).val() : g
                }, set: function (a, b) {
                    var c = $.makeArray(b);
                    return $(a).find("option").each(function () {
                        this.selected = $.inArray($(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function (a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i)return e && $.isFunction($.fn[c]) ? $(a)[c](d) : "undefined" == typeof a.getAttribute ? $.prop(a, c, d) : (h = 1 !== i || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (za.test(c) ? sa : ra)), d !== b ? null === d ? void $.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
        },
        removeAttr: function (a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)for (d = b.split(ba); g < d.length; g++)e = d[g], e && (c = $.propFix[e] || e, f = za.test(e), f || $.attr(a, e, ""), a.removeAttribute(Aa ? e : c), f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (wa.test(a.nodeName) && a.parentNode) $.error("type property can't be changed"); else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }, value: {
                get: function (a, b) {
                    return ra && $.nodeName(a, "button") ? ra.get(a, b) : b in a ? a.value : null
                }, set: function (a, b, c) {
                    return ra && $.nodeName(a, "button") ? ra.set(a, b, c) : void(a.value = b)
                }
            }
        },
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
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h)return g = 1 !== h || !$.isXMLDoc(a), g && (c = $.propFix[c] || c, f = $.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : xa.test(a.nodeName) || ya.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), sa = {
        get: function (a, c) {
            var d, e = $.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Aa || (ta = {name: !0, id: !0, coords: !0}, ra = $.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (ta[c] ? "" !== d.value : d.specified) ? d.value : b
        }, set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = P.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, $.each(["width", "height"], function (a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), $.attrHooks.contenteditable = {
        get: ra.get, set: function (a, b, c) {
            "" === b && (b = "false"), ra.set(a, b, c)
        }
    }), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function (a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), $.support.style || ($.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    }), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = $.extend($.valHooks[this], {
            set: function (a, b) {
                return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Ba = /^(?:textarea|input|select)$/i, Ca = /^([^\.]*|)(?:\.(.+)|)$/, Da = /(?:^|\s)hover(\.\S+|)\b/, Ea = /^key/,
        Fa = /^(?:mouse|contextmenu)|click/, Ga = /^(?:focusinfocus|focusoutblur)$/, Ha = function (a) {
            return $.event.special.hover ? a : a.replace(Da, "mouseenter$1 mouseleave$1")
        };
    $.event = {
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
                for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
                    return "undefined" == typeof $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = $.trim(Ha(c)).split(" "), j = 0; j < c.length; j++)k = Ca.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = $.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = $.event.special[l] || {}, n = $.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && $.expr.match.needsContext.test(f),
                    namespace: m.join(".")
                }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), $.event.global[l] = !0;
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
            if (q && (m = q.events)) {
                for (b = $.trim(Ha(b || "")).split(" "), f = 0; f < b.length; f++)if (g = Ca.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                    for (n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++)p = o[l], (e || i === p.origType) && (!c || c.guid === p.guid) && (!j || j.test(p.namespace)) && (!d || d === p.selector || "**" === d && p.selector) && (o.splice(l--, 1), p.selector && o.delegateCount--, n.remove && n.remove.call(a, p));
                    0 === o.length && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle), delete m[h])
                } else for (h in m)$.event.remove(a, h + b[f], c, d, !0);
                $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
                if (Ga.test(q + $.event.triggered))return;
                if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || $.event.customEvent[q]) && !$.event.global[q])return;
                if (c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) {
                    g = $.cache;
                    for (i in g)g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
                    return
                }
                if (c.result = b, c.target || (c.target = e), d = null != d ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1)return;
                if (o = [[e, m.bindType || q]], !f && !m.noBubble && !$.isWindow(e)) {
                    for (p = m.delegateType || q, j = Ga.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode)o.push([j, p]), k = j;
                    k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
                }
                for (i = 0; i < o.length && !c.isPropagationStopped(); i++)j = o[i][0], c.type = o[i][1], n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
                return c.type = q, !f && !c.isDefaultPrevented() && (!m._default || m._default.apply(e.ownerDocument, d) === !1) && ("click" !== q || !$.nodeName(e, "a")) && $.acceptData(e) && l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !$.isWindow(e) && (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, k && (e[l] = k)), c.result
            }
        },
        dispatch: function (c) {
            c = $.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [], n = m.delegateCount,
                o = V.call(arguments), p = !c.exclusive && !c.namespace, q = $.event.special[c.type] || {}, r = [];
            if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
                if (n && (!c.button || "click" !== c.type))for (f = c.target; f != this; f = f.parentNode || this)if (f.disabled !== !0 || "click" !== c.type) {
                    for (h = {}, j = [], d = 0; n > d; d++)k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length), h[l] && j.push(k);
                    j.length && r.push({elem: f, matches: j})
                }
                for (m.length > n && r.push({
                    elem: this,
                    matches: m.slice(n)
                }), d = 0; d < r.length && !c.isPropagationStopped(); d++)for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++)k = i.matches[e], (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
                return q.postDispatch && q.postDispatch.call(this, c), c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[$.expando])return a;
            var b, c, d = a, e = $.event.fixHooks[a.type] || {}, f = e.props ? this.props.concat(e.props) : this.props;
            for (a = $.Event(d), b = f.length; b;)c = f[--b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || P), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    $.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = $.extend(new $.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, $.event.handle = $.event.dispatch, $.removeEvent = P.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, $.Event = function (a, b) {
        return this instanceof $.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0, void 0) : new $.Event(a, b)
    }, $.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = g;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = g;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }, isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f
    }, $.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        $.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                f.selector;
                return (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), $.support.submitBubbles || ($.event.special.submit = {
        setup: function () {
            return $.nodeName(this, "form") ? !1 : void $.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
                d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), $._data(d, "_submit_attached", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return $.nodeName(this, "form") ? !1 : void $.event.remove(this, "._submit")
        }
    }), $.support.changeBubbles || ($.event.special.change = {
        setup: function () {
            return Ba.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), $.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0)
            })), !1) : void $.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Ba.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
                }), $._data(b, "_change_attached", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return $.event.remove(this, "._change"), !Ba.test(this.nodeName)
        }
    }), $.support.focusinBubbles || $.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0)
        };
        $.event.special[b] = {
            setup: function () {
                0 === c++ && P.addEventListener(a, d, !0)
            }, teardown: function () {
                0 === --c && P.removeEventListener(a, d, !0)
            }
        }
    }), $.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a)this.on(i, c, d, a[i], g);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = f; else if (!e)return this;
            return 1 === g && (h = e, e = function (a) {
                return $().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = $.guid++)), this.each(function () {
                $.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            var e, g;
            if (a && a.preventDefault && a.handleObj)return e = a.handleObj, $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (g in a)this.off(g, c, a[g]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = f), this.each(function () {
                $.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            return $(this.context).on(a, this.selector, b, c), this
        }, die: function (a, b) {
            return $(this.context).off(a, this.selector || "**", b), this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }, trigger: function (a, b) {
            return this.each(function () {
                $.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0
        }, toggle: function (a) {
            var b = arguments, c = a.guid || $.guid++, d = 0, e = function (c) {
                var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
                return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
            };
            for (e.guid = c; d < b.length;)b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        $.fn[b] = function (a, c) {
            return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, Ea.test(b) && ($.event.fixHooks[b] = $.event.keyHooks), Fa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
    }), function (a, b) {
        function c(a, b, c, d) {
            c = c || [], b = b || F;
            var e, f, g, h, i = b.nodeType;
            if (!a || "string" != typeof a)return c;
            if (1 !== i && 9 !== i)return [];
            if (g = v(b), !g && !d && (e = ca.exec(a)))if (h = e[1]) {
                if (9 === i) {
                    if (f = b.getElementById(h), !f || !f.parentNode)return c;
                    if (f.id === h)return c.push(f), c
                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h)return c.push(f), c
            } else {
                if (e[2])return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
                if ((h = e[3]) && ma && b.getElementsByClassName)return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
            }
            return p(a.replace(Z, "$1"), b, c, d, g)
        }

        function d(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function e(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function f(a) {
            return N(function (b) {
                return b = +b, N(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function g(a, b, c) {
            if (a === b)return c;
            for (var d = a.nextSibling; d;) {
                if (d === b)return -1;
                d = d.nextSibling
            }
            return 1
        }

        function h(a, b) {
            var d, e, f, g, h, i, j, k = Q[D][a];
            if (k)return b ? 0 : k.slice(0);
            for (h = a, i = [], j = t.preFilter; h;) {
                (!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length)), i.push(f = [])), d = !1, (e = aa.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
                for (g in t.filter)(e = ha[g].exec(h)) && (!j[g] || (e = j[g](e, F, !0))) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
                if (!d)break
            }
            return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
        }

        function i(a, b, c) {
            var d = b.dir, e = c && "parentNode" === b.dir, f = I++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (e || 1 === b.nodeType)return a(b, c, f)
            } : function (b, c, g) {
                if (g) {
                    for (; b = b[d];)if ((e || 1 === b.nodeType) && a(b, c, g))return b
                } else for (var h, i = H + " " + f + " ", j = i + r; b = b[d];)if (e || 1 === b.nodeType) {
                    if ((h = b[D]) === j)return b.sizset;
                    if ("string" == typeof h && 0 === h.indexOf(i)) {
                        if (b.sizset)return b
                    } else {
                        if (b[D] = j, a(b, c, g))return b.sizset = !0, b;
                        b.sizset = !1
                    }
                }
            }
        }

        function j(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function k(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function l(a, b, c, d, e, f) {
            return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function (f, g, h, i) {
                if (!f || !e) {
                    var j, l, m, n = [], p = [], q = g.length, r = f || o(b || "*", h.nodeType ? [h] : h, [], f),
                        s = !a || !f && b ? r : k(r, n, a, h, i), t = c ? e || (f ? a : q || d) ? [] : g : s;
                    if (c && c(s, t, h, i), d)for (m = k(t, p), d(m, [], h, i), j = m.length; j--;)(l = m[j]) && (t[p[j]] = !(s[p[j]] = l));
                    if (f)for (j = a && t.length; j--;)(l = t[j]) && (f[n[j]] = !(g[n[j]] = l)); else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
                }
            })
        }

        function m(a) {
            for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function (a) {
                return a === b
            }, g, !0), n = i(function (a) {
                return M.call(b, a) > -1
            }, g, !0), o = [function (a, c, d) {
                return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
            }]; e > h; h++)if (c = t.relative[a[h].type]) o = [i(j(o), c)]; else {
                if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
                    for (d = ++h; e > d && !t.relative[a[d].type]; d++);
                    return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
                }
                o.push(c)
            }
            return j(o)
        }

        function n(a, b) {
            var d = b.length > 0, e = a.length > 0, f = function (g, h, i, j, l) {
                var m, n, o, p = [], q = 0, s = "0", u = g && [], v = null != l, w = A,
                    x = g || e && t.find.TAG("*", l && h.parentNode || h), y = H += null == w ? 1 : Math.E;
                for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
                    if (e && m) {
                        for (n = 0; o = a[n]; n++)if (o(m, h, i)) {
                            j.push(m);
                            break
                        }
                        v && (H = y, r = ++f.el)
                    }
                    d && ((m = !o && m) && q--, g && u.push(m))
                }
                if (q += s, d && s !== q) {
                    for (n = 0; o = b[n]; n++)o(u, p, h, i);
                    if (g) {
                        if (q > 0)for (; s--;)!u[s] && !p[s] && (p[s] = J.call(j));
                        p = k(p)
                    }
                    K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                }
                return v && (H = y, A = w), u
            };
            return f.el = 0, d ? N(f) : f
        }

        function o(a, b, d, e) {
            for (var f = 0, g = b.length; g > f; f++)c(a, b[f], d, e);
            return d
        }

        function p(a, b, c, d, e) {
            var f, g, i, j, k, l = h(a);
            l.length;
            if (!d && 1 === l.length) {
                if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                    if (b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0], !b)return c;
                    a = a.slice(g.shift().length)
                }
                for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--)if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
                    if (g.splice(f, 1), a = d.length && g.join(""), !a)return K.apply(c, L.call(d, 0)), c;
                    break
                }
            }
            return x(a, l)(d, b, e, c, da.test(a)), c
        }

        function q() {
        }

        var r, s, t, u, v, w, x, y, z, A, B = !0, C = "undefined", D = ("sizcache" + Math.random()).replace(".", ""),
            E = String, F = a.document, G = F.documentElement, H = 0, I = 0, J = [].pop, K = [].push, L = [].slice,
            M = [].indexOf || function (a) {
                    for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                    return -1
                }, N = function (a, b) {
                return a[D] = null == b || b, a
            }, O = function () {
                var a = {}, b = [];
                return N(function (c, d) {
                    return b.push(c) > t.cacheLength && delete a[b.shift()], a[c] = d
                }, a)
            }, P = O(), Q = O(), R = O(), S = "[\\x20\\t\\r\\n\\f]", T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            U = T.replace("w", "w#"), V = "([*^$|!~]?=)",
            W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]",
            X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
            Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)",
            Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
            _ = new RegExp("^" + S + "*," + S + "*"), aa = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"),
            ba = new RegExp(X), ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, da = /[\x20\t\r\n\f]*[+~]/, ea = /h\d/i,
            fa = /input|select|textarea|button/i, ga = /\\(?!\\)/g, ha = {
                ID: new RegExp("^#(" + T + ")"),
                CLASS: new RegExp("^\\.(" + T + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
                TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + X),
                POS: new RegExp(Y, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
                needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
            }, ia = function (a) {
                var b = F.createElement("div");
                try {
                    return a(b)
                } catch (c) {
                    return !1
                } finally {
                    b = null
                }
            }, ja = ia(function (a) {
                return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
            }), ka = ia(function (a) {
                return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
            }), la = ia(function (a) {
                a.innerHTML = "<select></select>";
                var b = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== b && "string" !== b
            }), ma = ia(function (a) {
                return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
            }), na = ia(function (a) {
                a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
                var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
                return s = !F.getElementById(D), G.removeChild(a), b
            });
        try {
            L.call(G.childNodes, 0)[0].nodeType
        } catch (oa) {
            L = function (a) {
                for (var b, c = []; b = this[a]; a++)c.push(b);
                return c
            }
        }
        c.matches = function (a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function (a, b) {
            return c(b, null, null, [a]).length > 0
        }, u = c.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += u(a)
                } else if (3 === e || 4 === e)return a.nodeValue
            } else for (; b = a[d]; d++)c += u(b);
            return c
        }, v = c.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, w = c.contains = G.contains ? function (a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
            return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
        } : G.compareDocumentPosition ? function (a, b) {
            return b && !!(16 & a.compareDocumentPosition(b))
        } : function (a, b) {
            for (; b = b.parentNode;)if (b === a)return !0;
            return !1
        }, c.attr = function (a, b) {
            var c, d = v(a);
            return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
        }, t = c.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: ha,
            attrHandle: ka ? {} : {
                href: function (a) {
                    return a.getAttribute("href", 2)
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: s ? function (a, b, c) {
                    if (typeof b.getElementById !== C && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                } : function (a, c, d) {
                    if (typeof c.getElementById !== C && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }, TAG: ja ? function (a, b) {
                    return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                } : function (a, b) {
                    var c = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (var d, e = [], f = 0; d = c[f]; f++)1 === d.nodeType && e.push(d);
                        return e
                    }
                    return c
                }, NAME: na && function (a, b) {
                    return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
                }, CLASS: ma && function (a, b, c) {
                    return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
                }
            },
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ga, ""), a[3] = (a[4] || a[5] || "").replace(ga, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c;
                    return ha.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
                }
            },
            filter: {
                ID: s ? function (a) {
                    return a = a.replace(ga, ""), function (b) {
                        return b.getAttribute("id") === a
                    }
                } : function (a) {
                    return a = a.replace(ga, ""), function (b) {
                        var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }, TAG: function (a) {
                    return "*" === a ? function () {
                        return !0
                    } : (a = a.replace(ga, "").toLowerCase(), function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    })
                }, CLASS: function (a) {
                    var b = P[D][a];
                    return b || (b = P(a, new RegExp("(^|" + S + ")" + a + "(" + S + "|$)"))), function (a) {
                        return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    }
                }, ATTR: function (a, b, d) {
                    return function (e, f) {
                        var g = c.attr(e, a);
                        return null == g ? "!=" === b : b ? (g += "", "=" === b ? g === d : "!=" === b ? g !== d : "^=" === b ? d && 0 === g.indexOf(d) : "*=" === b ? d && g.indexOf(d) > -1 : "$=" === b ? d && g.substr(g.length - d.length) === d : "~=" === b ? (" " + g + " ").indexOf(d) > -1 : "|=" === b ? g === d || g.substr(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d) {
                    return "nth" === a ? function (a) {
                        var b, e, f = a.parentNode;
                        if (1 === c && 0 === d)return !0;
                        if (f)for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
                        return e -= d, e === c || e % c === 0 && e / c >= 0
                    } : function (b) {
                        var c = b;
                        switch (a) {
                            case"only":
                            case"first":
                                for (; c = c.previousSibling;)if (1 === c.nodeType)return !1;
                                if ("first" === a)return !0;
                                c = b;
                            case"last":
                                for (; c = c.nextSibling;)if (1 === c.nodeType)return !1;
                                return !0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;)d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, d)
                    }) : e
                }
            },
            pseudos: {
                not: N(function (a) {
                    var b = [], c = [], d = x(a.replace(Z, "$1"));
                    return d[D] ? N(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: N(function (a) {
                    return function (b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: N(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                    }
                }),
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                parent: function (a) {
                    return !t.pseudos.empty(a)
                },
                empty: function (a) {
                    var b;
                    for (a = a.firstChild; a;) {
                        if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function (a) {
                    return ea.test(a.nodeName)
                },
                text: function (a) {
                    var b, c;
                    return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                },
                radio: d("radio"),
                checkbox: d("checkbox"),
                file: d("file"),
                password: d("password"),
                image: d("image"),
                submit: e("submit"),
                reset: e("reset"),
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function (a) {
                    return fa.test(a.nodeName)
                },
                focus: function (a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                },
                active: function (a) {
                    return a === a.ownerDocument.activeElement
                },
                first: f(function (a, b, c) {
                    return [0]
                }),
                last: f(function (a, b, c) {
                    return [b - 1]
                }),
                eq: f(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: f(function (a, b, c) {
                    for (var d = 0; b > d; d += 2)a.push(d);
                    return a
                }),
                odd: f(function (a, b, c) {
                    for (var d = 1; b > d; d += 2)a.push(d);
                    return a
                }),
                lt: f(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }),
                gt: f(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, y = G.compareDocumentPosition ? function (a, b) {
            return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
        } : function (a, b) {
            if (a === b)return z = !0, 0;
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)return g(a, b);
            if (!h)return -1;
            if (!i)return 1;
            for (; j;)e.unshift(j), j = j.parentNode;
            for (j = i; j;)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; c > k && d > k; k++)if (e[k] !== f[k])return g(e[k], f[k]);
            return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
        }, [0, 0].sort(y), B = !z, c.uniqueSort = function (a) {
            var b, c = 1;
            if (z = B, a.sort(y), z)for (; b = a[c]; c++)b === a[c - 1] && a.splice(c--, 1);
            return a
        }, c.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, x = c.compile = function (a, b) {
            var c, d = [], e = [], f = R[D][a];
            if (!f) {
                for (b || (b = h(a)), c = b.length; c--;)f = m(b[c]), f[D] ? d.push(f) : e.push(f);
                f = R(a, n(e, d))
            }
            return f
        }, F.querySelectorAll && function () {
            var a, b = p, d = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, f = [":focus"],
                g = [":active", ":focus"],
                i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
            ia(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
            }), ia(function (a) {
                a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
            }), f = new RegExp(f.join("|")), p = function (a, c, e, g, i) {
                if (!(g || i || f && f.test(a))) {
                    var j, k, l = !0, m = D, n = c, o = 9 === c.nodeType && a;
                    if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                        for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--;)j[k] = m + j[k].join("");
                        n = da.test(a) && c.parentNode || c, o = j.join(",")
                    }
                    if (o)try {
                        return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
                    } catch (p) {
                    } finally {
                        l || c.removeAttribute("id")
                    }
                }
                return b(a, c, e, g, i)
            }, i && (ia(function (b) {
                a = i.call(b, "div");
                try {
                    i.call(b, "[test!='']:sizzle"), g.push("!=", X)
                } catch (c) {
                }
            }), g = new RegExp(g.join("|")), c.matchesSelector = function (b, d) {
                if (d = d.replace(e, "='$1']"), !(v(b) || g.test(d) || f && f.test(d)))try {
                    var h = i.call(b, d);
                    if (h || a || b.document && 11 !== b.document.nodeType)return h
                } catch (j) {
                }
                return c(d, null, null, [b]).length > 0
            })
        }(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = $.attr, $.find = c, $.expr = c.selectors, $.expr[":"] = $.expr.pseudos, $.unique = c.uniqueSort, $.text = c.getText, $.isXMLDoc = c.isXML, $.contains = c.contains
    }(a);
    var Ia = /Until$/, Ja = /^(?:parents|prev(?:Until|All))/, Ka = /^.[^:#\[\.,]*$/, La = $.expr.match.needsContext,
        Ma = {children: !0, contents: !0, next: !0, prev: !0};
    $.fn.extend({
        find: function (a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a)return $(a).filter(function () {
                for (b = 0, c = h.length; c > b; b++)if ($.contains(h[b], this))return !0
            });
            for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++)if (d = g.length, $.find(a, this[b], g), b > 0)for (e = d; e < g.length; e++)for (f = 0; d > f; f++)if (g[f] === g[e]) {
                g.splice(e--, 1);
                break
            }
            return g
        }, has: function (a) {
            var b, c = $(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if ($.contains(this, c[b]))return !0
            })
        }, not: function (a) {
            return this.pushStack(j(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && ("string" == typeof a ? La.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = La.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
                    f.push(c);
                    break
                }
                c = c.parentNode
            }
            return f = f.length > 1 ? $.unique(f) : f, this.pushStack(f, "closest", a)
        }, index: function (a) {
            return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (a, b) {
            var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a), d = $.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), $.fn.andSelf = $.fn.addBack, $.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return $.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return $.dir(a, "parentNode", c)
        }, next: function (a) {
            return i(a, "nextSibling")
        }, prev: function (a) {
            return i(a, "previousSibling")
        }, nextAll: function (a) {
            return $.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return $.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return $.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return $.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return $.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return $.sibling(a.firstChild)
        }, contents: function (a) {
            return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
        }
    }, function (a, b) {
        $.fn[a] = function (c, d) {
            var e = $.map(this, b, c);
            return Ia.test(a) || (d = c), d && "string" == typeof d && (e = $.filter(d, e)), e = this.length > 1 && !Ma[a] ? $.unique(e) : e, this.length > 1 && Ja.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","))
        }
    }), $.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
        }, dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d));)1 === f.nodeType && e.push(f), f = f[c];
            return e
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Na = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oa = / jQuery\d+="(?:null|\d+)"/g, Pa = /^\s+/,
        Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ra = /<([\w:]+)/,
        Sa = /<tbody/i, Ta = /<|&#?\w+;/, Ua = /<(?:script|style|link)/i, Va = /<(?:script|object|embed|option|style)/i,
        Wa = new RegExp("<(?:" + Na + ")[\\s/>]", "i"), Xa = /^(?:checkbox|radio)$/,
        Ya = /checked\s*(?:[^=]|=\s*.checked.)/i, Za = /\/(java|ecma)script/i,
        $a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, _a = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, ab = k(P), bb = ab.appendChild(P.createElement("div"));
    _a.optgroup = _a.option, _a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead, _a.th = _a.td, $.support.htmlSerialize || (_a._default = [1, "X<div>", "</div>"]), $.fn.extend({
        text: function (a) {
            return $.access(this, function (a) {
                return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if ($.isFunction(a))return this.each(function (b) {
                $(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return $.isFunction(a) ? this.each(function (b) {
                $(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = $(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = $.isFunction(a);
            return this.each(function (c) {
                $(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(a, this), "before", this.selector)
            }
        }, after: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(this, a), "after", this.selector)
            }
        }, remove: function (a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || $.filter(a, [c]).length) && (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild;)a.removeChild(a.firstChild);
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return $.clone(this, a, b)
            })
        }, html: function (a) {
            return $.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b)return 1 === c.nodeType ? c.innerHTML.replace(Oa, "") : b;
                if ("string" == typeof a && !Ua.test(a) && ($.support.htmlSerialize || !Wa.test(a)) && ($.support.leadingWhitespace || !Pa.test(a)) && !_a[(Ra.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Qa, "<$1></$2>");
                    try {
                        for (; e > d; d++)c = this[d] || {}, 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (f) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function (b) {
                var c = $(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = $(a).detach()), this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                $(this).remove(), b ? $(b).before(a) : $(c).append(a)
            }))
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], m = this.length;
            if (!$.support.checkClone && m > 1 && "string" == typeof j && Ya.test(j))return this.each(function () {
                $(this).domManip(a, c, d)
            });
            if ($.isFunction(j))return this.each(function (e) {
                var f = $(this);
                a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f)for (c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1; m > i; i++)d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
                g = f = null, k.length && $.each(k, function (a, b) {
                    b.src ? $.ajax ? $.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($a, "")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), $.buildFragment = function (a, c, d) {
        var e, f, g, h = a[0];
        return c = c || P, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, 1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Va.test(h) && ($.support.checkClone || !Ya.test(h)) && ($.support.html5Clone || !Wa.test(h)) && (f = !0, e = $.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)), {
            fragment: e,
            cacheable: f
        }
    }, $.fragments = {}, $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        $.fn[a] = function (c) {
            var d, e = 0, f = [], g = $(c), h = g.length, i = 1 === this.length && this[0].parentNode;
            if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h)return g[b](this[0]), this;
            for (; h > e; e++)d = (e > 0 ? this.clone(!0) : this).get(), $(g[e])[b](d), f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }), $.extend({
        clone: function (a, b, c) {
            var d, e, f, g;
            if ($.support.html5Clone || $.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bb.innerHTML = a.outerHTML, bb.removeChild(g = bb.firstChild)), !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f)e[f] && n(d[f], e[f]);
            if (b && (m(a, g), c))for (d = o(a), e = o(g), f = 0; d[f]; ++f)m(d[f], e[f]);
            return d = e = null, g
        }, clean: function (a, b, c, d) {
            var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ab, s = [];
            for (b && "undefined" != typeof b.createDocumentFragment || (b = P), e = 0; null != (g = a[e]); e++)if ("number" == typeof g && (g += ""), g) {
                if ("string" == typeof g)if (Ta.test(g)) {
                    for (r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Qa, "<$1></$2>"), h = (Ra.exec(g) || ["", ""])[1].toLowerCase(), i = _a[h] || _a._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--;)l = l.lastChild;
                    if (!$.support.tbody)for (m = Sa.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes, f = n.length - 1; f >= 0; --f)$.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
                    !$.support.leadingWhitespace && Pa.test(g) && l.insertBefore(b.createTextNode(Pa.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l)
                } else g = b.createTextNode(g);
                g.nodeType ? s.push(g) : $.merge(s, g)
            }
            if (l && (g = l = r = null), !$.support.appendChecked)for (e = 0; null != (g = s[e]); e++)$.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
            if (c)for (o = function (a) {
                return !a.type || Za.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
            }, e = 0; null != (g = s[e]); e++)$.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length));
            return s
        }, cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null != (e = a[g]); g++)if ((b || $.acceptData(e)) && (d = e[h], c = d && i[d])) {
                if (c.events)for (f in c.events)k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
                i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d))
            }
        }
    }), function () {
        var a, b;
        $.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {browser: b[1] || "", version: b[2] || "0"}
        }, a = $.uaMatch(R.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), $.browser = b, $.sub = function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            $.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(P);
            return a
        }
    }();
    var cb, db, eb, fb = /alpha\([^)]*\)/i, gb = /opacity=([^)]*)/, hb = /^(top|right|bottom|left)$/,
        ib = /^(none|table(?!-c[ea]).+)/, jb = /^margin/, kb = new RegExp("^(" + _ + ")(.*)$", "i"),
        lb = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"), mb = new RegExp("^([-+])=(" + _ + ")", "i"), nb = {},
        ob = {position: "absolute", visibility: "hidden", display: "block"}, pb = {letterSpacing: 0, fontWeight: 400},
        qb = ["Top", "Right", "Bottom", "Left"], rb = ["Webkit", "O", "Moz", "ms"], sb = $.fn.toggle;
    $.fn.extend({
        css: function (a, c) {
            return $.access(this, function (a, c, d) {
                return d !== b ? $.style(a, c, d) : $.css(a, c)
            }, a, c, arguments.length > 1)
        }, show: function () {
            return s(this, !0)
        }, hide: function () {
            return s(this)
        }, toggle: function (a, b) {
            var c = "boolean" == typeof a;
            return $.isFunction(a) && $.isFunction(b) ? sb.apply(this, arguments) : this.each(function () {
                (c ? a : r(this)) ? $(this).show() : $(this).hide()
            })
        }
    }), $.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = cb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": $.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = $.camelCase(c), j = a.style;
                if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i], d === b)return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = mb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" === g && !$.cssNumber[i] && (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b)))try {
                    j[c] = d
                } catch (k) {
                }
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = $.camelCase(c);
            return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)), h = $.cssHooks[c] || $.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = cb(a, c)), "normal" === f && c in pb && (f = pb[c]), d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function (a, b, c) {
            var d, e, f = {};
            for (e in b)f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b)a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? cb = function (b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
        return h && (d = h[c], "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)), lb.test(d) && jb.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : P.documentElement.currentStyle && (cb = function (a, b) {
            var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
            return null == e && f && f[b] && (e = f[b]), lb.test(e) && !hb.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
        }), $.each(["height", "width"], function (a, b) {
        $.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && ib.test(cb(a, "display")) ? $.swap(a, ob, function () {
                    return v(a, b, d)
                }) : v(a, b, d) : void 0
            }, set: function (a, c, d) {
                return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
            }
        }
    }), $.support.opacity || ($.cssHooks.opacity = {
        get: function (a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === $.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }), $(function () {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function (a, b) {
                return $.swap(a, {display: "inline-block"}, function () {
                    return b ? cb(a, "marginRight") : void 0
                })
            }
        }), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function (a, b) {
            $.cssHooks[b] = {
                get: function (a, c) {
                    if (c) {
                        var d = cb(a, b);
                        return lb.test(d) ? $(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), $.expr && $.expr.filters && ($.expr.filters.hidden = function (a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cb(a, "display"))
    }, $.expr.filters.visible = function (a) {
        return !$.expr.filters.hidden(a)
    }), $.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        $.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
                for (d = 0; 4 > d; d++)f[a + qb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, jb.test(a) || ($.cssHooks[a + b].set = t)
    });
    var tb = /%20/g, ub = /\[\]$/, vb = /\r?\n/g,
        wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        xb = /^(?:select|textarea)/i;
    $.fn.extend({
        serialize: function () {
            return $.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? $.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || xb.test(this.nodeName) || wb.test(this.type))
            }).map(function (a, b) {
                var c = $(this).val();
                return null == c ? null : $.isArray(c) ? $.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(vb, "\r\n")}
                }) : {name: b.name, value: c.replace(vb, "\r\n")}
            }).get()
        }
    }), $.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = $.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a)) $.each(a, function () {
            f(this.name, this.value)
        }); else for (d in a)x(d, a[d], c, f);
        return e.join("&").replace(tb, "+")
    };
    var yb, zb, Ab = /#.*$/, Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//,
        Fb = /\?/, Gb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Hb = /([?&])_=[^&]*/,
        Ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Jb = $.fn.load, Kb = {}, Lb = {}, Mb = ["*/"] + ["*"];
    try {
        zb = Q.href
    } catch (Nb) {
        zb = P.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Ib.exec(zb.toLowerCase()) || [], $.fn.load = function (a, c, d) {
        if ("string" != typeof a && Jb)return Jb.apply(this, arguments);
        if (!this.length)return this;
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), $.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), $.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function (a) {
            g = arguments, h.html(e ? $("<div>").append(a.replace(Gb, "")).find(e) : a)
        }), this
    }, $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        $.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), $.each(["get", "post"], function (a, c) {
        $[c] = function (a, d, e, f) {
            return $.isFunction(d) && (f = f || e, e = d, d = b), $.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), $.extend({
        getScript: function (a, c) {
            return $.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return $.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings), A(a, b), a
        },
        ajaxSettings: {
            url: zb,
            isLocal: Cb.test(yb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Mb
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": $.parseJSON, "text xml": $.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: y(Kb),
        ajaxTransport: y(Lb),
        ajax: function (a, c) {
            function d(a, c, d, g) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (!x || a) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c), n = m.context || m,
                o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event, p = $.Deferred(),
                q = $.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                    readyState: 0, setRequestHeader: function (a, b) {
                        if (!u) {
                            var c = a.toLowerCase();
                            a = t[c] = t[c] || a, s[a] = b
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return 2 === u ? f : null
                    }, getResponseHeader: function (a) {
                        var c;
                        if (2 === u) {
                            if (!g)for (g = {}; c = Bb.exec(f);)g[c[1].toLowerCase()] = c[2];
                            c = g[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    }, overrideMimeType: function (a) {
                        return u || (m.mimeType = a), this
                    }, abort: function (a) {
                        return a = a || v, h && h.abort(a), d(0, a), this
                    }
                };
            if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function (a) {
                    if (a) {
                        var b;
                        if (2 > u)for (b in a)r[b] = [r[b], a[b]]; else b = a[w.status], w.always(b)
                    }
                    return this
                }, m.url = ((a || m.url) + "").replace(Ab, "").replace(Eb, yb[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(ba), null == m.crossDomain && (j = Ib.exec(m.url.toLowerCase()) || !1, m.crossDomain = j && j.join(":") + (j[3] ? "" : "http:" === j[1] ? 80 : 443) !== yb.join(":") + (yb[3] ? "" : "http:" === yb[1] ? 80 : 443)), m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)), z(Kb, m, c, w), 2 === u)return w;
            if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Db.test(m.type), k && 0 === $.active++ && $.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Fb.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
                var x = $.now(), y = m.url.replace(Hb, "$1_=" + x);
                m.url = y + (y === m.url ? (Fb.test(m.url) ? "&" : "?") + "_=" + x : "")
            }
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)w.setRequestHeader(l, m.headers[l]);
            if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && 2 !== u) {
                v = "abort";
                for (l in{success: 1, error: 1, complete: 1})w[l](m[l]);
                if (h = z(Lb, m, c, w)) {
                    w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, h.send(s, d)
                    } catch (A) {
                        if (!(2 > u))throw A;
                        d(-1, A)
                    }
                } else d(-1, "No Transport");
                return w
            }
            return w.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ob = [], Pb = /\?/, Qb = /(=)\?(?=&|$)|\?\?/, Rb = $.now();
    $.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Ob.pop() || $.expando + "_" + Rb++;
            return this[a] = !0, a
        }
    }), $.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && Qb.test(j),
            m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qb.test(i);
        return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qb, "$1" + f) : m ? c.data = i.replace(Qb, "$1" + f) : k && (c.url += (Pb.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || $.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ob.push(f)), h && $.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    }), $.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                return $.globalEval(a), a
            }
        }
    }), $.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), $.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function (e, f) {
                    c = P.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                }, abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Sb, Tb = a.ActiveXObject ? function () {
        for (var a in Sb)Sb[a](0, 1)
    } : !1, Ub = 0;
    $.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && D() || E()
    } : D, function (a) {
        $.extend($.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function (c) {
        if (!c.crossDomain || $.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)for (h in c.xhrFields)i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e)i.setRequestHeader(h, e[h])
                    } catch (j) {
                    }
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState))if (d = b, g && (i.onreadystatechange = $.noop, Tb && delete Sb[g]), e) 4 !== i.readyState && i.abort(); else {
                                h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                try {
                                    l.text = i.responseText
                                } catch (a) {
                                }
                                try {
                                    j = i.statusText
                                } catch (n) {
                                    j = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Ub, Tb && (Sb || (Sb = {}, $(a).unload(Tb)), Sb[g] = d), i.onreadystatechange = d) : d()
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var Vb, Wb, Xb = /^(?:toggle|show|hide)$/, Yb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
        Zb = /queueHooks$/, $b = [J], _b = {
            "*": [function (a, b) {
                var c, d, e = this.createTween(a, b), f = Yb.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
                if (f) {
                    if (c = +f[2], d = f[3] || ($.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                        h = $.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h /= i, $.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    $.Animation = $.extend(H, {
        tweener: function (a, b) {
            $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], _b[c] = _b[c] || [], _b[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? $b.unshift(a) : $b.push(a)
        }
    }), $.Tween = K, K.prototype = {
        constructor: K, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = K.propHooks[this.prop];
            return a && a.get ? a.get(this) : K.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = K.propHooks[this.prop];
            return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
        }
    }, K.prototype.init.prototype = K.prototype, K.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, $.each(["toggle", "show", "hide"], function (a, b) {
        var c = $.fn[b];
        $.fn[b] = function (d, e, f) {
            return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
        }
    }), $.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(r).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = $.isEmptyObject(a), f = $.speed(b, c, d), g = function () {
                var b = H(this, $.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, c = null != a && a + "queueHooks", f = $.timers, g = $._data(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g)g[c] && g[c].stop && Zb.test(c) && e(g[c]);
                for (c = f.length; c--;)f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && $.dequeue(this, a)
            })
        }
    }), $.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        $.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), $.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? $.extend({}, a) : {
            complete: c || !c && b || $.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !$.isFunction(b) && b
        };
        return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
        }, d
    }, $.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, $.timers = [], $.fx = K.prototype.init, $.fx.tick = function () {
        for (var a, b = $.timers, c = 0; c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || $.fx.stop()
    }, $.fx.timer = function (a) {
        a() && $.timers.push(a) && !Wb && (Wb = setInterval($.fx.tick, $.fx.interval))
    }, $.fx.interval = 13, $.fx.stop = function () {
        clearInterval(Wb), Wb = null
    }, $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function (a) {
        return $.grep($.timers, function (b) {
            return a === b.elem
        }).length
    });
    var ac = /^(?:body|html)$/i;
    $.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            $.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {top: 0, left: 0}, k = this[0], l = k && k.ownerDocument;
        if (l)return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    }, $.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        }, setOffset: function (a, b, c) {
            var d = $.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = $(a), h = g.offset(), i = $.css(a, "top"), j = $.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1, l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, $.fn.extend({
        position: function () {
            if (this[0]) {
                var a = this[0], b = this.offsetParent(), c = this.offset(),
                    d = ac.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
                return c.top -= parseFloat($.css(a, "marginTop")) || 0, c.left -= parseFloat($.css(a, "marginLeft")) || 0, d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || P.body; a && !ac.test(a.nodeName) && "static" === $.css(a, "position");)a = a.offsetParent;
                return a || P.body
            })
        }
    }), $.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        $.fn[a] = function (e) {
            return $.access(this, function (a, e, f) {
                var g = M(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null)
        }
    }), $.each({Height: "height", Width: "width"}, function (a, c) {
        $.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            $.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return $.access(this, function (c, d, e) {
                    var f;
                    return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = $, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return $
    })
}(window), function (a, b) {
    var c, d = a.jQuery || a.Cowboy || (a.Cowboy = {});
    d.throttle = c = function (a, c, e, f) {
        function g() {
            function d() {
                i = +new Date, e.apply(j, l)
            }

            function g() {
                h = b
            }

            var j = this, k = +new Date - i, l = arguments;
            f && !h && d(), h && clearTimeout(h), f === b && k > a ? d() : c !== !0 && (h = setTimeout(f ? g : d, f === b ? a - k : a))
        }

        var h, i = 0;
        return "boolean" != typeof c && (f = e, e = c, c = b), d.guid && (g.guid = e.guid = e.guid || d.guid++), g
    }, d.debounce = function (a, d, e) {
        return e === b ? c(a, d, !1) : c(a, e, d !== !1)
    }
}(this), function (a) {
    function b() {
        a.each(c, function () {
            this.refresh(!0)
        })
    }

    var c = [], d = /^url\(["']?([^"'\)]*)["']?\);?$/i, e = /\.png$/i, f = a.browser.msie && 6 == a.browser.version;
    a(window).resize(b), a.Poshytip = function (b, c) {
        this.$elm = a(b), this.opts = a.extend({}, a.fn.poshytip.defaults, c), this.$tip = a(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body), this.$arrow = this.$tip.find("div.tip-arrow"), this.$inner = this.$tip.find("div.tip-inner"), this.disabled = !1, this.content = null, this.init()
    }, a.Poshytip.prototype = {
        init: function () {
            c.push(this);
            var b = this.$elm.attr("title");
            if (this.$elm.data("title.poshytip", void 0 !== b ? b : null).data("poshytip", this), "none" != this.opts.showOn)switch (this.$elm.bind({
                "mouseenter.poshytip": a.proxy(this.mouseenter, this),
                "mouseleave.poshytip": a.proxy(this.mouseleave, this)
            }), this.opts.showOn) {
                case"hover":
                    "cursor" == this.opts.alignTo && this.$elm.bind("mousemove.poshytip", a.proxy(this.mousemove, this)), this.opts.allowTipHover && this.$tip.hover(a.proxy(this.clearTimeouts, this), a.proxy(this.mouseleave, this));
                    break;
                case"focus":
                    this.$elm.bind({
                        "focus.poshytip": a.proxy(this.show, this),
                        "blur.poshytip": a.proxy(this.hide, this)
                    })
            }
        }, mouseenter: function (b) {
            return this.disabled ? !0 : (this.$elm.attr("title", ""), "focus" == this.opts.showOn ? !0 : (this.clearTimeouts(), void(this.showTimeout = setTimeout(a.proxy(this.show, this), this.opts.showTimeout))))
        }, mouseleave: function (b) {
            if (this.disabled || this.asyncAnimating && (this.$tip[0] === b.relatedTarget || jQuery.contains(this.$tip[0], b.relatedTarget)))return !0;
            var c = this.$elm.data("title.poshytip");
            return null !== c && this.$elm.attr("title", c), "focus" == this.opts.showOn ? !0 : (this.clearTimeouts(), void(this.hideTimeout = setTimeout(a.proxy(this.hide, this), this.opts.hideTimeout)))
        }, mousemove: function (a) {
            return this.disabled ? !0 : (this.eventX = a.pageX, this.eventY = a.pageY, void(this.opts.followCursor && this.$tip.data("active") && (this.calcPos(), this.$tip.css({
                left: this.pos.l,
                top: this.pos.t
            }), this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow))))
        }, show: function () {
            this.disabled || this.$tip.data("active") || (this.reset(), this.update(), this.display(), this.opts.timeOnScreen && setTimeout(a.proxy(this.hide, this), this.opts.timeOnScreen))
        }, hide: function () {
            !this.disabled && this.$tip.data("active") && this.display(!0)
        }, reset: function () {
            this.$tip.queue([]).detach().css("visibility", "hidden").data("active", !1), this.$inner.find("*").poshytip("hide"), this.opts.fade && this.$tip.css("opacity", this.opacity), this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left", this.asyncAnimating = !1
        }, update: function (a, b) {
            if (!this.disabled) {
                var c = void 0 !== a;
                if (c) {
                    if (b || (this.opts.content = a), !this.$tip.data("active"))return
                } else a = this.opts.content;
                var d = this, e = "function" == typeof a ? a.call(this.$elm[0], function (a) {
                    d.update(a)
                }) : "[title]" == a ? this.$elm.data("title.poshytip") : a;
                this.content !== e && (this.$inner.empty().append(e), this.content = e), this.refresh(c)
            }
        }, refresh: function (b) {
            if (!this.disabled) {
                if (b) {
                    if (!this.$tip.data("active"))return;
                    var c = {left: this.$tip.css("left"), top: this.$tip.css("top")}
                }
                this.$tip.css({
                    left: 0,
                    top: 0
                }).appendTo(document.body), void 0 === this.opacity && (this.opacity = this.$tip.css("opacity"));
                var g = this.$tip.css("background-image").match(d), h = this.$arrow.css("background-image").match(d);
                if (g) {
                    var i = e.test(g[1]);
                    f && i ? (this.$tip.css("background-image", "none"), this.$inner.css({
                        margin: 0,
                        border: 0,
                        padding: 0
                    }), g = i = !1) : this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                        border: 0,
                        padding: 0,
                        "background-image": "none",
                        "background-color": "transparent"
                    }).find(".tip-bg-image").css("background-image", 'url("' + g[1] + '")').end().find("td").eq(3).append(this.$inner), i && !a.support.opacity && (this.opts.fade = !1)
                }
                h && !a.support.opacity && (f && e.test(h[1]) && (h = !1, this.$arrow.css("background-image", "none")), this.opts.fade = !1);
                var j = this.$tip.find("table");
                if (f) {
                    this.$tip[0].style.width = "", j.width("auto").find("td").eq(3).width("auto");
                    var k = this.$tip.width(), l = parseInt(this.$tip.css("min-width")),
                        m = parseInt(this.$tip.css("max-width"));
                    !isNaN(l) && l > k ? k = l : !isNaN(m) && k > m && (k = m), this.$tip.add(j).width(k).eq(0).find("td").eq(3).width("100%")
                } else j[0] && j.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%");
                if (this.tipOuterW = this.$tip.outerWidth(), this.tipOuterH = this.$tip.outerHeight(), this.calcPos(), h && this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow, this.$arrow.css("visibility", "inherit")), b) {
                    this.asyncAnimating = !0;
                    var n = this;
                    this.$tip.css(c).animate({left: this.pos.l, top: this.pos.t}, 200, function () {
                        n.asyncAnimating = !1
                    })
                } else this.$tip.css({left: this.pos.l, top: this.pos.t})
            }
        }, display: function (b) {
            var c = this.$tip.data("active");
            if (!(c && !b || !c && b)) {
                if (this.$tip.stop(), (this.opts.slide && this.pos.arrow || this.opts.fade) && (b && this.opts.hideAniDuration || !b && this.opts.showAniDuration)) {
                    var d = {}, e = {};
                    if (this.opts.slide && this.pos.arrow) {
                        var f, g;
                        "bottom" == this.pos.arrow || "top" == this.pos.arrow ? (f = "top", g = "bottom") : (f = "left", g = "right");
                        var h = parseInt(this.$tip.css(f));
                        d[f] = h + (b ? 0 : this.pos.arrow == g ? -this.opts.slideOffset : this.opts.slideOffset), e[f] = h + (b ? this.pos.arrow == g ? this.opts.slideOffset : -this.opts.slideOffset : 0) + "px"
                    }
                    this.opts.fade && (d.opacity = b ? this.$tip.css("opacity") : 0, e.opacity = b ? 0 : this.opacity), this.$tip.css(d).animate(e, this.opts[b ? "hideAniDuration" : "showAniDuration"])
                }
                b ? this.$tip.queue(a.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit"), this.$tip.data("active", !c)
            }
        }, disable: function () {
            this.reset(), this.disabled = !0
        }, enable: function () {
            this.disabled = !1
        }, destroy: function () {
            this.reset(), this.$tip.remove(), delete this.$tip, this.content = null, this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip"), c.splice(a.inArray(this, c), 1)
        }, clearTimeouts: function () {
            this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0), this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
        }, calcPos: function () {
            var b, c, d, e, f, g, h = {l: 0, t: 0, arrow: ""}, i = a(window),
                j = {l: i.scrollLeft(), t: i.scrollTop(), w: i.width(), h: i.height()};
            if ("cursor" == this.opts.alignTo) b = c = d = this.eventX, e = f = g = this.eventY; else {
                var k = this.$elm.offset(),
                    l = {l: k.left, t: k.top, w: this.$elm.outerWidth(), h: this.$elm.outerHeight()};
                b = l.l + ("inner-right" != this.opts.alignX ? 0 : l.w), c = b + Math.floor(l.w / 2), d = b + ("inner-left" != this.opts.alignX ? l.w : 0), e = l.t + ("inner-bottom" != this.opts.alignY ? 0 : l.h), f = e + Math.floor(l.h / 2), g = e + ("inner-top" != this.opts.alignY ? l.h : 0)
            }
            switch (this.opts.alignX) {
                case"right":
                case"inner-left":
                    h.l = d + this.opts.offsetX, h.l + this.tipOuterW > j.l + j.w && (h.l = j.l + j.w - this.tipOuterW), ("right" == this.opts.alignX || "center" == this.opts.alignY) && (h.arrow = "left");
                    break;
                case"center":
                    h.l = c - Math.floor(this.tipOuterW / 2), h.l + this.tipOuterW > j.l + j.w ? h.l = j.l + j.w - this.tipOuterW : h.l < j.l && (h.l = j.l);
                    break;
                default:
                    h.l = b - this.tipOuterW - this.opts.offsetX, h.l < j.l && (h.l = j.l), ("left" == this.opts.alignX || "center" == this.opts.alignY) && (h.arrow = "right")
            }
            switch (this.opts.alignY) {
                case"bottom":
                case"inner-top":
                    h.t = g + this.opts.offsetY, h.arrow && "cursor" != this.opts.alignTo || (h.arrow = "top"), h.t + this.tipOuterH > j.t + j.h && (h.t = e - this.tipOuterH - this.opts.offsetY, "top" == h.arrow && (h.arrow = "bottom"));
                    break;
                case"center":
                    h.t = f - Math.floor(this.tipOuterH / 2), h.t + this.tipOuterH > j.t + j.h ? h.t = j.t + j.h - this.tipOuterH : h.t < j.t && (h.t = j.t);
                    break;
                default:
                    h.t = e - this.tipOuterH - this.opts.offsetY, h.arrow && "cursor" != this.opts.alignTo || (h.arrow = "bottom"), h.t < j.t && (h.t = g + this.opts.offsetY, "bottom" == h.arrow && (h.arrow = "top"))
            }
            this.pos = h
        }
    }, a.fn.poshytip = function (b) {
        if ("string" == typeof b) {
            var c = arguments, d = b;
            return Array.prototype.shift.call(c), "destroy" == d && this.die("mouseenter.poshytip").die("focus.poshytip"), this.each(function () {
                var b = a(this).data("poshytip");
                b && b[d] && b[d].apply(b, c)
            })
        }
        var e = a.extend({}, a.fn.poshytip.defaults, b);
        if (a("#poshytip-css-" + e.className)[0] || a(['<style id="poshytip-css-', e.className, '" type="text/css">', "div.", e.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", e.className, " table, div.", e.className, " td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}", "div.", e.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", e.bgImageFrameSize, "px;width:", e.bgImageFrameSize, "px;overflow:hidden;}", "div.", e.className, " td.tip-right{background-position:100% 0;}", "div.", e.className, " td.tip-bottom{background-position:100% 100%;}", "div.", e.className, " td.tip-left{background-position:0 100%;}", "div.", e.className, " div.tip-inner{background-position:-", e.bgImageFrameSize, "px -", e.bgImageFrameSize, "px;}", "div.", e.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head"), e.liveEvents && "none" != e.showOn) {
            var f = a.extend({}, e, {liveEvents: !1});
            switch (e.showOn) {
                case"hover":
                    this.live("mouseenter.poshytip", function () {
                        var b = a(this);
                        b.data("poshytip") || b.poshytip(f).poshytip("mouseenter")
                    });
                    break;
                case"focus":
                    this.live("focus.poshytip", function () {
                        var b = a(this);
                        b.data("poshytip") || b.poshytip(f).poshytip("show")
                    })
            }
            return this
        }
        return this.each(function () {
            new a.Poshytip(this, e)
        })
    }, a.fn.poshytip.defaults = {
        content: "[title]",
        className: "tip-yellow",
        bgImageFrameSize: 10,
        showTimeout: 500,
        hideTimeout: 100,
        timeOnScreen: 0,
        showOn: "hover",
        liveEvents: !1,
        alignTo: "cursor",
        alignX: "right",
        alignY: "top",
        offsetX: -22,
        offsetY: 18,
        allowTipHover: !0,
        followCursor: !1,
        fade: !0,
        slide: !0,
        slideOffset: 8,
        showAniDuration: 300,
        hideAniDuration: 300
    }
}(jQuery), function (a) {
    function b(b) {
        this.input = b, "password" == b.attr("type") && this.handlePassword(), a(b[0].form).submit(function () {
            b.hasClass("placeholder") && b[0].value == b.attr("placeholder") && (b[0].value = "")
        })
    }

    b.prototype = {
        show: function (a) {
            if ("" === this.input[0].value || a && this.valueIsPlaceholder()) {
                if (this.isPassword)try {
                    this.input[0].setAttribute("type", "text")
                } catch (b) {
                    this.input.before(this.fakePassword.show()).hide()
                }
                this.input.addClass("placeholder"), this.input[0].value = this.input.attr("placeholder")
            }
        }, hide: function () {
            if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), this.input[0].value = "", this.isPassword)) {
                try {
                    this.input[0].setAttribute("type", "password")
                } catch (a) {
                }
                this.input.show(), this.input[0].focus()
            }
        }, valueIsPlaceholder: function () {
            return this.input[0].value == this.input.attr("placeholder")
        }, handlePassword: function () {
            var b = this.input;
            if (b.attr("realType", "password"), this.isPassword = !0, a.browser.msie && b[0].outerHTML) {
                var c = a(b[0].outerHTML.replace(/type=(['"])?password\1/gi, "type=$1text$1"));
                this.fakePassword = c.val(b.attr("placeholder")).addClass("placeholder").focus(function () {
                    b.trigger("focus"), a(this).hide()
                }), a(b[0].form).submit(function () {
                    c.remove(), b.show()
                })
            }
        }
    };
    var c = !!("placeholder" in document.createElement("input"));
    a.fn.placeholder = function () {
        return c ? this : this.each(function () {
            var c = a(this), d = new b(c);
            d.show(!0), c.focus(function () {
                d.hide()
            }), c.blur(function () {
                d.show(!1)
            }), a.browser.msie && (a(window).load(function () {
                c.val() && c.removeClass("placeholder"), d.show(!0)
            }), c.focus(function () {
                if ("" == this.value) {
                    var a = this.createTextRange();
                    a.collapse(!0), a.moveStart("character", 0), a.select()
                }
            }))
        })
    }
}(jQuery), function (a) {
    a.fn.lightbox_me = function (b) {
        return this.each(function () {
            function c() {
                var b = i[0].style;
                g.destroyOnClose ? i.add(h).remove() : i.add(h).hide(), g.parentLightbox && g.parentLightbox.fadeIn(200), j.remove(), i.undelegate(g.closeSelector, "click"), a(window).unbind("reposition", e), a(window).unbind("reposition", f), a(window).unbind("scroll", f), a(window).unbind("keyup.lightbox_me"), k && b.removeExpression("top"), g.onClose()
            }

            function d(a) {
                (27 == a.keyCode || 27 == a.DOM_VK_ESCAPE && 0 == a.which) && g.closeEsc && c()
            }

            function e() {
                a(window).height() < a(document).height() ? (h.css({height: a(document).height() + "px"}), j.css({height: a(document).height() + "px"})) : (h.css({height: "100%"}), k && (a("html,body").css("height", "100%"), j.css("height", "100%")))
            }

            function f() {
                var b = i[0].style;
                if (i.css({
                        left: "50%",
                        marginLeft: i.outerWidth() / 2 * -1,
                        zIndex: g.zIndex + 3
                    }), i.height() + 80 >= a(window).height() && ("absolute" != i.css("position") || k)) {
                    var c = a(document).scrollTop() + 40;
                    i.css({position: "absolute", top: c + "px", marginTop: 0}), k && b.removeExpression("top")
                } else if (i.height() + 80 < a(window).height())if (k)if (b.position = "absolute", g.centered) b.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), b.marginTop = 0; else {
                    var d = g.modalCSS && g.modalCSS.top ? parseInt(g.modalCSS.top) : 0;
                    b.setExpression("top", "((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + d + ') + "px"')
                } else g.centered ? i.css({
                    position: "fixed",
                    top: "50%",
                    marginTop: i.outerHeight() / 2 * -1
                }) : i.css({position: "fixed"}).css(g.modalCSS)
            }

            var g = a.extend({}, a.fn.lightbox_me.defaults, b), h = a(), i = a(this),
                j = a('<iframe id="foo" style="z-index: ' + (g.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
                k = a.browser.msie && a.browser.version < 7;
            if (g.showOverlay) {
                var l = a(".js_lb_overlay:visible");
                h = a(l.length > 0 ? '<div class="lb_overlay_clear js_lb_overlay"/>' : '<div class="' + g.classPrefix + '_overlay js_lb_overlay"/>')
            }
            if (k) {
                var m = /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank";
                j.attr("src", m), a("body").append(j)
            }
            a("body").append(i.hide()).append(h), g.showOverlay && (e(), h.css({
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: g.zIndex + 2,
                display: "none"
            }), h.hasClass("lb_overlay_clear") || h.css(g.overlayCSS)), g.showOverlay ? h.fadeIn(g.overlaySpeed, function () {
                f(), i[g.appearEffect](g.lightboxSpeed, function () {
                    e(), f(), g.onLoad()
                })
            }) : (f(), i[g.appearEffect](g.lightboxSpeed, function () {
                g.onLoad()
            })), g.parentLightbox && g.parentLightbox.fadeOut(200), a(window).resize(e).resize(f).scroll(f), a(window).bind("keyup.lightbox_me", d), g.closeClick && h.click(function (a) {
                c(), a.preventDefault
            }), i.delegate(g.closeSelector, "click", function (a) {
                c(), a.preventDefault()
            }), i.bind("close", c), i.bind("reposition", f)
        })
    }, a.fn.lightbox_me.defaults = {
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 0,
        lightboxSpeed: 0,
        closeSelector: "close",
        closeClick: !0,
        closeEsc: !0,
        destroyOnClose: !1,
        showOverlay: !0,
        parentLightbox: !1,
        onLoad: function () {
        },
        onClose: function () {
        },
        classPrefix: "lb",
        zIndex: 999,
        centered: !1,
        modalCSS: {top: "0px"},
        overlayCSS: {background: "black", opacity: .6}
    }
}(jQuery), function (a) {
    a.fn.autogrow = function (b) {
        return this.filter("textarea").each(function () {
            var b = this, c = a(b), d = c.height(),
                e = c.hasClass("autogrow-short") ? 0 : parseInt(c.css("lineHeight")) || 0, f = a("<div></div>").css({
                    position: "absolute",
                    top: -1e4,
                    left: -1e4,
                    width: c.width(),
                    fontSize: c.css("fontSize"),
                    fontFamily: c.css("fontFamily"),
                    fontWeight: c.css("fontWeight"),
                    lineHeight: c.css("lineHeight"),
                    resize: "none",
                    "word-wrap": "break-word"
                }).appendTo(document.body), g = function (a) {
                    var g = function (a, b) {
                            for (var c = 0, d = ""; b > c; c++)d += a;
                            return d
                        },
                        h = b.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function (a) {
                            return g("&nbsp;", a.length - 1) + " "
                        });
                    a && a.data && "keydown" === a.data.event && 13 === a.keyCode && (h += "<br />"), f.css("width", c.width()), f.html(h + (0 === e ? "..." : "")), c.height(Math.max(f.height() + e, d))
                };
            c.change(g).keyup(g).keydown({event: "keydown"}, g), a(window).resize(g), g()
        })
    }
}(jQuery), function (a) {
    a.setCookie = function (a, b, c) {
        if ("undefined" == typeof a || "undefined" == typeof b)return !1;
        var d = a + "=" + encodeURIComponent(b);
        if (c.domain && (d += "; domain=" + c.domain), c.path && (d += "; path=" + c.path), c.duration) {
            var e = new Date;
            e.setTime(e.getTime() + 24 * c.duration * 60 * 60 * 1e3), d += "; expires=" + e.toGMTString()
        }
        return c.secure && (d += "; secure"), document.cookie = d
    }, a.delCookie = function (b) {
        return a.setCookie(b, "", {duration: -1})
    }, a.readCookie = function (a) {
        var b = document.cookie.match("(?:^|;)\\s*" + a.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") + "=([^;]*)");
        return b ? decodeURIComponent(b[1]) : null
    }, a.CooQueryVersion = "v 2.0"
}(jQuery);
var _Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _utf8_encode: function (a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
        }
        return b
    },
    _utf8_decode: function (a) {
        for (var b = [], c = 0, d = a.length, e = 0, f = 0, g = 0; d > c;)e = a.charCodeAt(c), 128 > e ? (b.push(String.fromCharCode(e)), c++) : e > 191 && 224 > e ? (f = a.charCodeAt(c + 1), b.push(String.fromCharCode((31 & e) << 6 | 63 & f)), c += 2) : (f = a.charCodeAt(c + 1), g = a.charCodeAt(c + 2), b.push(String.fromCharCode((15 & e) << 12 | (63 & f) << 6 | 63 & g)), c += 3);
        return b.join("")
    },
    encode: function (a) {
        var b, c, d, e, f, g, h, i = "", j = 0;
        for (a = _Base64._utf8_encode(a); j < a.length;)b = a.charCodeAt(j++), c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = b >> 2, f = (3 & b) << 4 | c >> 4, g = (15 & c) << 2 | d >> 6, h = 63 & d, isNaN(c) ? g = h = 64 : isNaN(d) && (h = 64), i = i + this._keyStr.charAt(e) + this._keyStr.charAt(f) + this._keyStr.charAt(g) + this._keyStr.charAt(h);
        return i
    },
    decode: function (a) {
        var b, c, d, e, f, g, h, i = [], j = 0;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        for (var k = a.length; k > j;)e = this._keyStr.indexOf(a.charAt(j++)), f = this._keyStr.indexOf(a.charAt(j++)), g = this._keyStr.indexOf(a.charAt(j++)), h = this._keyStr.indexOf(a.charAt(j++)), b = e << 2 | f >> 4, c = (15 & f) << 4 | g >> 2, d = (3 & g) << 6 | h, i.push(String.fromCharCode(b)), 64 != g && i.push(String.fromCharCode(c)), 64 != h && i.push(String.fromCharCode(d));
        return this._utf8_decode(i.join(""))
    }
};
!function (a) {
    if ("undefined" != typeof define && define.amd) define(["jquery"], a); else if ("undefined" != typeof module && module.exports) {
        var b = require("jquery");
        module.exports = a(b)
    } else window.scrollMonitor = a(jQuery)
}(function (a) {
    function b() {
        if (h.viewportTop = i.scrollTop(), h.viewportBottom = h.viewportTop + h.viewportHeight, h.documentHeight = j.height(), h.documentHeight !== u) {
            for (w = k.length; w--;)k[w].recalculateLocation();
            u = h.documentHeight
        }
    }

    function c() {
        h.viewportHeight = i.height(), b(), e()
    }

    function d() {
        clearTimeout(x), x = setTimeout(c, 100)
    }

    function e() {
        for (y = k.length; y--;)k[y].update();
        for (y = k.length; y--;)k[y].triggerCallbacks()
    }

    function f(b, c) {
        function d(a) {
            if (0 !== a.length)for (w = a.length; w--;)x = a[w], x.callback.call(e, v), x.isOne && a.splice(w, 1)
        }

        var e = this;
        this.watchItem = b, c ? c === +c ? this.offsets = {
            top: c,
            bottom: c
        } : this.offsets = a.extend({}, t, c) : this.offsets = t, this.callbacks = {};
        for (var f = 0, g = s.length; g > f; f++)e.callbacks[s[f]] = [];
        this.locked = !1;
        var i, j, k, u, w, x;
        this.triggerCallbacks = function () {
            switch (this.isInViewport && !i && d(this.callbacks[m]), this.isFullyInViewport && !j && d(this.callbacks[n]), this.isAboveViewport !== k && this.isBelowViewport !== u && (d(this.callbacks[l]), j || this.isFullyInViewport || (d(this.callbacks[n]), d(this.callbacks[p])), i || this.isInViewport || (d(this.callbacks[m]), d(this.callbacks[o]))), !this.isFullyInViewport && j && d(this.callbacks[p]), !this.isInViewport && i && d(this.callbacks[o]), this.isInViewport !== i && d(this.callbacks[l]), !0) {
                case i !== this.isInViewport:
                case j !== this.isFullyInViewport:
                case k !== this.isAboveViewport:
                case u !== this.isBelowViewport:
                    d(this.callbacks[r])
            }
            i = this.isInViewport, j = this.isFullyInViewport, k = this.isAboveViewport, u = this.isBelowViewport
        }, this.recalculateLocation = function () {
            if (!this.locked) {
                var b = this.top, c = this.bottom;
                if (this.watchItem.nodeName) {
                    var e = this.watchItem.style.display;
                    "none" === e && (this.watchItem.style.display = "");
                    var f = a(this.watchItem).offset();
                    this.top = f.top, this.bottom = f.top + this.watchItem.offsetHeight, "none" === e && (this.watchItem.style.display = e)
                } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = h.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === b && void 0 === c || this.top === b && this.bottom === c || d(this.callbacks[q])
            }
        }, this.recalculateLocation(), this.update(), i = this.isInViewport, j = this.isFullyInViewport, k = this.isAboveViewport, u = this.isBelowViewport
    }

    function g(a) {
        v = a, b(), e()
    }

    var h = {}, i = a(window), j = a(document), k = [], l = "visibilityChange", m = "enterViewport",
        n = "fullyEnterViewport", o = "exitViewport", p = "partiallyExitViewport", q = "locationChange",
        r = "stateChange", s = [l, m, n, o, p, q, r], t = {top: 0, bottom: 0};
    h.viewportTop, h.viewportBottom, h.documentHeight, h.viewportHeight = i.height();
    var u, v, w, x, y;
    f.prototype = {
        on: function (a, b, c) {
            switch (!0) {
                case a === l && !this.isInViewport && this.isAboveViewport:
                case a === m && this.isInViewport:
                case a === n && this.isFullyInViewport:
                case a === o && this.isAboveViewport && !this.isInViewport:
                case a === p && this.isAboveViewport:
                    if (b(), c)return
            }
            if (!this.callbacks[a])throw new Error("Tried to add a scroll monitor listener of type " + a + ". Your options are: " + s.join(", "));
            this.callbacks[a].push({callback: b, isOne: c})
        }, off: function (a, b) {
            if (!this.callbacks[a])throw new Error("Tried to remove a scroll monitor listener of type " + a + ". Your options are: " + s.join(", "));
            for (var c, d = 0; c = this.callbacks[a][d]; d++)if (c.callback === b) {
                this.callbacks[a].splice(d, 1);
                break
            }
        }, one: function (a, b) {
            this.on(a, b, !0)
        }, recalculateSize: function () {
            this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
        }, update: function () {
            this.isAboveViewport = this.top < h.viewportTop, this.isBelowViewport = this.bottom > h.viewportBottom, this.isInViewport = this.top <= h.viewportBottom && this.bottom >= h.viewportTop, this.isFullyInViewport = this.top >= h.viewportTop && this.bottom <= h.viewportBottom || this.isAboveViewport && this.isBelowViewport
        }, destroy: function () {
            var a = k.indexOf(this), b = this;
            k.splice(a, 1);
            for (var c = 0, d = s.length; d > c; c++)b.callbacks[s[c]].length = 0
        }, lock: function () {
            this.locked = !0
        }, unlock: function () {
            this.locked = !1
        }
    };
    for (var z = function (a) {
        return function (b, c) {
            this.on.call(this, a, b, c)
        }
    }, A = 0, B = s.length; B > A; A++) {
        var C = s[A];
        f.prototype[C] = z(C)
    }
    return b(), i.on("scroll", g), i.on("resize", d), h.beget = h.create = function (b, c) {
        "string" == typeof b && (b = a(b)[0]), b instanceof a && (b = b[0]);
        var d = new f(b, c);
        return k.push(d), d.update(), d
    }, h.update = function () {
        v = null, b(), e()
    }, h.recalculateLocations = function () {
        h.documentHeight = 0, h.update()
    }, h
});
var qblib = function () {
    function a(a, b, c) {
        if ("undefined" == typeof b)return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(c || location.search) || [, ""])[1].replace(/\+/g, "%20")) || null;
        c = c || window.location.href, a = a.toString(), b = encodeURIComponent(b.toString());
        var d = new RegExp("(^|\\W)" + a + "=[^&]*", "g"), e = c.split("#");
        return e[0] = e[0].match(d) ? e[0].replace(d, "$1" + a + "=" + b) : e[0] + (-1 == e[0].indexOf("?") ? "?" : "&") + a + "=" + b, e.join("#")
    }

    var b = {};
    return b.setDownloadUrl = function (a, b) {
        if (a = a || $(".foot-download"), !/ipad|iphone|mac/i.test(navigator.userAgent)) {
            var c = b || "http://a.app.qq.com/o/simple.jsp?pkgname=qsbk.app&g_f=991851#opened";
            return a.attr("href", c), !1
        }
        a.attr("href", "https://itunes.apple.com/cn/app/qiu-shi-bai-ke-xiao-hua-nei/id422853458?mt=8")
    }, b.urlParam = window.urlParam = a, b.localstore = {
        get: function (a) {
            return window.localStorage ? window.localStorage.getItem(a) : $.readCookie(a)
        }, set: function (a, b) {
            return window.localStorage ? window.localStorage.setItem(a, b) : $.setCookie(a, b, {})
        }
    }, b
}();
!function () {
    function a(a) {
        return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y)
    }

    function b(a) {
        return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }

    function c(c, d) {
        function e(a) {
            return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a
        }

        function f(b) {
            var c = m;
            if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
                        return m++, "$line=" + m + ";"
                    })), 0 === b.indexOf("=")) {
                var e = l && !/^=[=#]/.test(b);
                if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
                    var f = b.replace(/\s*\([^\)]+\)/, "");
                    n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")")
                } else b = "$string(" + b + ")";
                b = s[1] + b + s[2]
            }
            return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) {
                if (a && !p[a]) {
                    var b;
                    b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0
                }
            }), b + "\n"
        }

        var g = d.debug, h = d.openTag, i = d.closeTag, j = d.parser, k = d.compress, l = d.escape, m = 1,
            p = {$data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1}, q = "".trim,
            s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            t = q ? "$out+=text;return $out;" : "$out.push(text);",
            u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
            v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
            w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""), x = s[0],
            y = "return new String(" + s[3] + ");";
        r(c.split(h), function (a) {
            a = a.split(i);
            var b = a[0], c = a[1];
            1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)))
        });
        var z = w + x + y;
        g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
            var A = new Function("$data", "$filename", z);
            return A.prototype = n, A
        } catch (B) {
            throw B.temp = "function anonymous($data,$filename) {" + z + "}", B
        }
    }

    var d = function (a, b) {
        return "string" == typeof b ? q(b, {filename: a}) : g(a, b)
    };
    d.version = "3.0.0", d.config = function (a, b) {
        e[a] = b
    };
    var e = d.defaults = {openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null},
        f = d.cache = {};
    d.render = function (a, b) {
        return q(a, b)
    };
    var g = d.renderFile = function (a, b) {
        var c = d.get(a) || p({filename: a, name: "Render Error", message: "Template not found"});
        return b ? c(b) : c
    };
    d.get = function (a) {
        var b;
        if (f[a]) b = f[a]; else if ("object" == typeof document) {
            var c = document.getElementById(a);
            if (c) {
                var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
                b = q(d, {filename: a})
            }
        }
        return b
    };
    var h = function (a, b) {
        return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a
    }, i = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, j = function (a) {
        return i[a]
    }, k = function (a) {
        return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j)
    }, l = Array.isArray || function (a) {
            return "[object Array]" === {}.toString.call(a)
        }, m = function (a, b) {
        var c, d;
        if (l(a))for (c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
    }, n = d.utils = {$helpers: {}, $include: g, $string: h, $escape: k, $each: m};
    d.helper = function (a, b) {
        o[a] = b
    };
    var o = d.helpers = n.$helpers;
    d.onerror = function (a) {
        var b = "Template Error\n\n";
        for (var c in a)b += "<" + c + ">\n" + a[c] + "\n\n";
        "object" == typeof console && console.error(b)
    };
    var p = function (a) {
            return d.onerror(a), function () {
                return "{Template Error}"
            }
        }, q = d.compile = function (a, b) {
            function d(c) {
                try {
                    return new i(c, h) + ""
                } catch (d) {
                    return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c))
                }
            }

            b = b || {};
            for (var g in e)void 0 === b[g] && (b[g] = e[g]);
            var h = b.filename;
            try {
                var i = c(a, b)
            } catch (j) {
                return j.filename = h || "anonymous", j.name = "Syntax Error", p(j)
            }
            return d.prototype = i.prototype, d.toString = function () {
                return i.toString()
            }, h && b.cache && (f[h] = d), d
        }, r = n.$each,
        s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
        t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        u = /[^\w$]+/g, v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        w = /^\d[^,]*|,\d[^,]*/g, x = /^,+|,+$/g, y = /^$|,+/;
    e.openTag = "{{", e.closeTag = "}}";
    var z = function (a, b) {
        var c = b.split(":"), d = c.shift(), e = c.join(":") || "";
        return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")"
    };
    e.parser = function (a) {
        a = a.replace(/^\s/, "");
        var b = a.split(" "), c = b.shift(), e = b.join(" ");
        switch (c) {
            case"if":
                a = "if(" + e + "){";
                break;
            case"else":
                b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{";
                break;
            case"/if":
                a = "}";
                break;
            case"each":
                var f = b[0] || "$data", g = b[1] || "as", h = b[2] || "$value", i = b[3] || "$index", j = h + "," + i;
                "as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";
                break;
            case"/each":
                a = "});";
                break;
            case"echo":
                a = "print(" + e + ");";
                break;
            case"print":
            case"include":
                a = c + "(" + b.join(",") + ");";
                break;
            default:
                if (/^\s*\|\s*[\w\$]/.test(e)) {
                    var k = !0;
                    0 === a.indexOf("#") && (a = a.substr(1), k = !1);
                    for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++)o = z(o, m[l]);
                    a = (k ? "=" : "=#") + o
                } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a
        }
        return a
    }, "function" == typeof define ? define(function () {
        return d
    }) : "undefined" != typeof exports ? module.exports = d : this.template = d
}();
