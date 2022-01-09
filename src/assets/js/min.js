function dropdownEffectData(e) {
	var t = null,
		n = null,
		i = $(e),
		o = $(".dropdown-menu", e),
		r = i.parents("ul.nav");
	return r.height > 0 && (t = r.data("dropdown-in") || null, n = r.data("dropdown-out") || null), {
		target: e,
		dropdown: i,
		dropdownMenu: o,
		effectIn: o.data("dropdown-in") || t,
		effectOut: o.data("dropdown-out") || n
	}
}

function dropdownEffectStart(e, t) {
	t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass("animated"), e.dropdownMenu.addClass(t))
}

function dropdownEffectEnd(e, t) {
	e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
		e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass("animated"), e.dropdownMenu.removeClass(e.effectIn), e.dropdownMenu.removeClass(e.effectOut), "function" == typeof t && t()
	})
}

function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function get_social_counts() {
	var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
	$.ajax({
		type: "GET",
		url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
		dataType: "json",
		success: function (e) {
			var t = document.getElementById("dom-target-fb"),
				n = t.textContent,
				i = (t = document.getElementById("dom-target-tw")).textContent,
				o = (t = document.getElementById("dom-target-gp")).textContent;
			n.valueOf(), e.facebook, i.valueOf(), e.twitter, o.valueOf(), e.gplus
		}
	}), fbShare > 0 ? $("#facebook-span").text(fbShare) : $("#facebook-span").hide(), $("#twitter-span").html(twShare), $("#gplus-span").html(gpShare)
}

function loadTemplatesBy(e, t) {
	$.post(ajax_object.ajaxurl, {
		action: "ajax_action",
		category: e
	}, function (t) {
		console.log(e), $("#products").html(t)
	})
}
if (function (e, t) {
		"use strict";
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function (e, t) {
		"use strict";

		function n(e, t) {
			var n = (t = t || ee).createElement("script");
			n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
		}

		function i(e) {
			var t = !!e && "length" in e && e.length,
				n = he.type(e);
			return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}

		function o(e, t, n) {
			return he.isFunction(t) ? he.grep(e, function (e, i) {
				return !!t.call(e, i, e) !== n
			}) : t.nodeType ? he.grep(e, function (e) {
				return e === t !== n
			}) : "string" != typeof t ? he.grep(e, function (e) {
				return re.call(t, e) > -1 !== n
			}) : Ce.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
				return re.call(t, e) > -1 !== n && 1 === e.nodeType
			}))
		}

		function r(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}

		function a(e) {
			var t = {};
			return he.each(e.match(Ee) || [], function (e, n) {
				t[n] = !0
			}), t
		}

		function s(e) {
			return e
		}

		function l(e) {
			throw e
		}

		function c(e, t, n) {
			var i;
			try {
				e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
			} catch (e) {
				n.call(void 0, e)
			}
		}

		function u() {
			ee.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()
		}

		function d() {
			this.expando = he.expando + d.uid++
		}

		function h(e) {
			return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Le.test(e) ? JSON.parse(e) : e)
		}

		function f(e, t, n) {
			var i;
			if (void 0 === n && 1 === e.nodeType)
				if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
					try {
						n = h(n)
					} catch (e) {}
					Me.set(e, t, n)
				} else n = void 0;
			return n
		}

		function p(e, t, n, i) {
			var o, r = 1,
				a = 20,
				s = i ? function () {
					return i.cur()
				} : function () {
					return he.css(e, t, "")
				},
				l = s(),
				c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
				u = (he.cssNumber[t] || "px" !== c && +l) && Re.exec(he.css(e, t));
			if (u && u[3] !== c) {
				c = c || u[3], n = n || [], u = +l || 1;
				do {
					u /= r = r || ".5", he.style(e, t, u + c)
				} while (r !== (r = s() / l) && 1 !== r && --a)
			}
			return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
		}

		function m(e) {
			var t, n = e.ownerDocument,
				i = e.nodeName,
				o = je[i];
			return o || (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), je[i] = o, o)
		}

		function g(e, t) {
			for (var n, i, o = [], r = 0, a = e.length; r < a; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Pe.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && He(i) && (o[r] = m(i))) : "none" !== n && (o[r] = "none", Pe.set(i, "display", n)));
			for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
			return e
		}

		function v(e, t) {
			var n;
			return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
		}

		function y(e, t) {
			for (var n = 0, i = e.length; n < i; n++) Pe.set(e[n], "globalEval", !t || Pe.get(t[n], "globalEval"))
		}

		function b(e, t, n, i, o) {
			for (var r, a, s, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
				if ((r = e[f]) || 0 === r)
					if ("object" === he.type(r)) he.merge(h, r.nodeType ? [r] : r);
					else if (Ye.test(r)) {
				for (a = a || d.appendChild(t.createElement("div")), s = (ze.exec(r) || ["", ""])[1].toLowerCase(), l = $e[s] || $e._default, a.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
				he.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
			} else h.push(t.createTextNode(r));
			for (d.textContent = "", f = 0; r = h[f++];)
				if (i && he.inArray(r, i) > -1) o && o.push(r);
				else if (c = he.contains(r.ownerDocument, r), a = v(d.appendChild(r), "script"), c && y(a), n)
				for (u = 0; r = a[u++];) qe.test(r.type || "") && n.push(r);
			return d
		}

		function x() {
			return !0
		}

		function w() {
			return !1
		}

		function C() {
			try {
				return ee.activeElement
			} catch (e) {}
		}

		function k(e, t, n, i, o, r) {
			var a, s;
			if ("object" == typeof t) {
				"string" != typeof n && (i = i || n, n = void 0);
				for (s in t) k(e, s, n, i, t[s], r);
				return e
			}
			if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = w;
			else if (!o) return e;
			return 1 === r && (a = o, (o = function (e) {
				return he().off(e), a.apply(this, arguments)
			}).guid = a.guid || (a.guid = he.guid++)), e.each(function () {
				he.event.add(this, t, o, i, n)
			})
		}

		function T(e, t) {
			return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
		}

		function _(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function S(e) {
			var t = et.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function E(e, t) {
			var n, i, o, r, a, s, l, c;
			if (1 === t.nodeType) {
				if (Pe.hasData(e) && (r = Pe.access(e), a = Pe.set(t, r), c = r.events)) {
					delete a.handle, a.events = {};
					for (o in c)
						for (n = 0, i = c[o].length; n < i; n++) he.event.add(t, o, c[o][n])
				}
				Me.hasData(e) && (s = Me.access(e), l = he.extend({}, s), Me.set(t, l))
			}
		}

		function A(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}

		function I(e, t, i, o) {
			t = ie.apply([], t);
			var r, a, s, l, c, u, d = 0,
				h = e.length,
				f = h - 1,
				p = t[0],
				m = he.isFunction(p);
			if (m || h > 1 && "string" == typeof p && !de.checkClone && Je.test(p)) return e.each(function (n) {
				var r = e.eq(n);
				m && (t[0] = p.call(this, n, r.html())), I(r, t, i, o)
			});
			if (h && (r = b(t, e[0].ownerDocument, !1, e, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
				for (l = (s = he.map(v(r, "script"), _)).length; d < h; d++) c = r, d !== f && (c = he.clone(c, !0, !0), l && he.merge(s, v(c, "script"))), i.call(e[d], c, d);
				if (l)
					for (u = s[s.length - 1].ownerDocument, he.map(s, S), d = 0; d < l; d++) c = s[d], qe.test(c.type || "") && !Pe.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(tt, ""), u))
			}
			return e
		}

		function D(e, t, n) {
			for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(v(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
			return e
		}

		function O(e, t, n) {
			var i, o, r, a, s = e.style;
			return (n = n || ot(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !de.pixelMarginRight() && it.test(a) && nt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
		}

		function P(e, t) {
			return {
				get: function () {
					if (!e()) return (this.get = t).apply(this, arguments);
					delete this.get
				}
			}
		}

		function M(e) {
			if (e in ct) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--;)
				if ((e = lt[n] + t) in ct) return e
		}

		function L(e, t, n) {
			var i = Re.exec(t);
			return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
		}

		function F(e, t, n, i, o) {
			var r, a = 0;
			for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += he.css(e, n + We[r], !0, o)), i ? ("content" === n && (a -= he.css(e, "padding" + We[r], !0, o)), "margin" !== n && (a -= he.css(e, "border" + We[r] + "Width", !0, o))) : (a += he.css(e, "padding" + We[r], !0, o), "padding" !== n && (a += he.css(e, "border" + We[r] + "Width", !0, o)));
			return a
		}

		function N(e, t, n) {
			var i, o = !0,
				r = ot(e),
				a = "border-box" === he.css(e, "boxSizing", !1, r);
			if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
				if (((i = O(e, t, r)) < 0 || null == i) && (i = e.style[t]), it.test(i)) return i;
				o = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
			}
			return i + F(e, t, n || (a ? "border" : "content"), o, r) + "px"
		}

		function R(e, t, n, i, o) {
			return new R.prototype.init(e, t, n, i, o)
		}

		function W() {
			dt && (e.requestAnimationFrame(W), he.fx.tick())
		}

		function H() {
			return e.setTimeout(function () {
				ut = void 0
			}), ut = he.now()
		}

		function V(e, t) {
			var n, i = 0,
				o = {
					height: e
				};
			for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = We[i])] = o["padding" + n] = e;
			return t && (o.opacity = o.width = e), o
		}

		function j(e, t, n) {
			for (var i, o = (z.tweeners[t] || []).concat(z.tweeners["*"]), r = 0, a = o.length; r < a; r++)
				if (i = o[r].call(n, t, e)) return i
		}

		function B(e, t) {
			var n, i, o, r, a;
			for (n in e)
				if (i = he.camelCase(n), o = t[i], r = e[n], he.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = he.cssHooks[i]) && "expand" in a) {
					r = a.expand(r), delete e[i];
					for (n in r) n in e || (e[n] = r[n], t[n] = o)
				} else t[i] = o
		}

		function z(e, t, n) {
			var i, o, r = 0,
				a = z.prefilters.length,
				s = he.Deferred().always(function () {
					delete l.elem
				}),
				l = function () {
					if (o) return !1;
					for (var t = ut || H(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(i);
					return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (s.resolveWith(e, [c]), !1)
				},
				c = s.promise({
					elem: e,
					props: he.extend({}, t),
					opts: he.extend(!0, {
						specialEasing: {},
						easing: he.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: ut || H(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n) {
						var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
						return c.tweens.push(i), i
					},
					stop: function (t) {
						var n = 0,
							i = t ? c.tweens.length : 0;
						if (o) return this;
						for (o = !0; n < i; n++) c.tweens[n].run(1);
						return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
					}
				}),
				u = c.props;
			for (B(u, c.opts.specialEasing); r < a; r++)
				if (i = z.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
			return he.map(u, j, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(l, {
				elem: e,
				anim: c,
				queue: c.opts.queue
			})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
		}

		function q(e) {
			return (e.match(Ee) || []).join(" ")
		}

		function $(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function Y(e, t, n, i) {
			var o;
			if (he.isArray(t)) he.each(t, function (t, o) {
				n || kt.test(e) ? i(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
			});
			else if (n || "object" !== he.type(t)) i(e, t);
			else
				for (o in t) Y(e + "[" + o + "]", t[o], n, i)
		}

		function X(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");
				var i, o = 0,
					r = t.toLowerCase().match(Ee) || [];
				if (he.isFunction(n))
					for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
			}
		}

		function U(e, t, n, i) {
			function o(s) {
				var l;
				return r[s] = !0, he.each(e[s] || [], function (e, s) {
					var c = s(t, n, i);
					return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
				}), l
			}
			var r = {},
				a = e === Ft;
			return o(t.dataTypes[0]) || !r["*"] && o("*")
		}

		function Q(e, t) {
			var n, i, o = he.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
			return i && he.extend(!0, e, i), e
		}

		function G(e, t, n) {
			for (var i, o, r, a, s = e.contents, l = e.dataTypes;
				"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i)
				for (o in s)
					if (s[o] && s[o].test(i)) {
						l.unshift(o);
						break
					}
			if (l[0] in n) r = l[0];
			else {
				for (o in n) {
					if (!l[0] || e.converters[o + " " + l[0]]) {
						r = o;
						break
					}
					a || (a = o)
				}
				r = r || a
			}
			if (r) return r !== l[0] && l.unshift(r), n[r]
		}

		function K(e, t, n, i) {
			var o, r, a, s, l, c = {},
				u = e.dataTypes.slice();
			if (u[1])
				for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
			for (r = u.shift(); r;)
				if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
					if ("*" === r) r = l;
					else if ("*" !== l && l !== r) {
				if (!(a = c[l + " " + r] || c["* " + r]))
					for (o in c)
						if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
							!0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
							break
						}
				if (!0 !== a)
					if (a && e.throws) t = a(t);
					else try {
						t = a(t)
					} catch (e) {
						return {
							state: "parsererror",
							error: a ? e : "No conversion from " + l + " to " + r
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function Z(e) {
			return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
		}
		var J = [],
			ee = e.document,
			te = Object.getPrototypeOf,
			ne = J.slice,
			ie = J.concat,
			oe = J.push,
			re = J.indexOf,
			ae = {},
			se = ae.toString,
			le = ae.hasOwnProperty,
			ce = le.toString,
			ue = ce.call(Object),
			de = {},
			he = function (e, t) {
				return new he.fn.init(e, t)
			},
			fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			pe = /^-ms-/,
			me = /-([a-z])/g,
			ge = function (e, t) {
				return t.toUpperCase()
			};
		he.fn = he.prototype = {
			jquery: "3.1.1",
			constructor: he,
			length: 0,
			toArray: function () {
				return ne.call(this)
			},
			get: function (e) {
				return null == e ? ne.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function (e) {
				var t = he.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function (e) {
				return he.each(this, e)
			},
			map: function (e) {
				return this.pushStack(he.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function () {
				return this.pushStack(ne.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: oe,
			sort: J.sort,
			splice: J.splice
		}, he.extend = he.fn.extend = function () {
			var e, t, n, i, o, r, a = arguments[0] || {},
				s = 1,
				l = arguments.length,
				c = !1;
			for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
				if (null != (e = arguments[s]))
					for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (he.isPlainObject(i) || (o = he.isArray(i))) ? (o ? (o = !1, r = n && he.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(c, r, i)) : void 0 !== i && (a[t] = i));
			return a
		}, he.extend({
			expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isFunction: function (e) {
				return "function" === he.type(e)
			},
			isArray: Array.isArray,
			isWindow: function (e) {
				return null != e && e === e.window
			},
			isNumeric: function (e) {
				var t = he.type(e);
				return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
			},
			isPlainObject: function (e) {
				var t, n;
				return !(!e || "[object Object]" !== se.call(e)) && (!(t = te(e)) || "function" == typeof (n = le.call(t, "constructor") && t.constructor) && ce.call(n) === ue)
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			type: function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[se.call(e)] || "object" : typeof e
			},
			globalEval: function (e) {
				n(e)
			},
			camelCase: function (e) {
				return e.replace(pe, "ms-").replace(me, ge)
			},
			nodeName: function (e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function (e, t) {
				var n, o = 0;
				if (i(e))
					for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
				else
					for (o in e)
						if (!1 === t.call(e[o], o, e[o])) break;
				return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(fe, "")
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : re.call(t, e, n)
			},
			merge: function (e, t) {
				for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
				return e.length = o, e
			},
			grep: function (e, t, n) {
				for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
				return i
			},
			map: function (e, t, n) {
				var o, r, a = 0,
					s = [];
				if (i(e))
					for (o = e.length; a < o; a++) null != (r = t(e[a], a, n)) && s.push(r);
				else
					for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
				return ie.apply([], s)
			},
			guid: 1,
			proxy: function (e, t) {
				var n, i, o;
				if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ne.call(arguments, 2), o = function () {
					return e.apply(t || this, i.concat(ne.call(arguments)))
				}, o.guid = e.guid = e.guid || he.guid++, o
			},
			now: Date.now,
			support: de
		}), "function" == typeof Symbol && (he.fn[Symbol.iterator] = J[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			ae["[object " + t + "]"] = t.toLowerCase()
		});
		var ve = function (e) {
			function t(e, t, n, i) {
				var o, r, a, s, l, u, h, f = t && t.ownerDocument,
					p = t ? t.nodeType : 9;
				if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
				if (!i && ((t ? t.ownerDocument || t : H) !== O && D(t), t = t || O, M)) {
					if (11 !== p && (l = me.exec(e)))
						if (o = l[1]) {
							if (9 === p) {
								if (!(a = t.getElementById(o))) return n;
								if (a.id === o) return n.push(a), n
							} else if (f && (a = f.getElementById(o)) && R(t, a) && a.id === o) return n.push(a), n
						} else {
							if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
							if ((o = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)), n
						}
					if (x.qsa && !q[e + " "] && (!L || !L.test(e))) {
						if (1 !== p) f = t, h = e;
						else if ("object" !== t.nodeName.toLowerCase()) {
							for ((s = t.getAttribute("id")) ? s = s.replace(be, xe) : t.setAttribute("id", s = W), r = (u = T(e)).length; r--;) u[r] = "#" + s + " " + d(u[r]);
							h = u.join(","), f = ge.test(e) && c(t.parentNode) || t
						}
						if (h) try {
							return G.apply(n, f.querySelectorAll(h)), n
						} catch (e) {} finally {
							s === W && t.removeAttribute("id")
						}
					}
				}
				return S(e.replace(re, "$1"), t, n, i)
			}

			function n() {
				function e(n, i) {
					return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
				}
				var t = [];
				return e
			}

			function i(e) {
				return e[W] = !0, e
			}

			function o(e) {
				var t = O.createElement("fieldset");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function r(e, t) {
				for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
			}

			function a(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function s(e) {
				return function (t) {
					return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
				}
			}

			function l(e) {
				return i(function (t) {
					return t = +t, i(function (n, i) {
						for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
					})
				})
			}

			function c(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}

			function u() {}

			function d(e) {
				for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
				return i
			}

			function h(e, t, n) {
				var i = t.dir,
					o = t.next,
					r = o || i,
					a = n && "parentNode" === r,
					s = j++;
				return t.first ? function (t, n, o) {
					for (; t = t[i];)
						if (1 === t.nodeType || a) return e(t, n, o);
					return !1
				} : function (t, n, l) {
					var c, u, d, h = [V, s];
					if (l) {
						for (; t = t[i];)
							if ((1 === t.nodeType || a) && e(t, n, l)) return !0
					} else
						for (; t = t[i];)
							if (1 === t.nodeType || a)
								if (d = t[W] || (t[W] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
								else {
									if ((c = u[r]) && c[0] === V && c[1] === s) return h[2] = c[2];
									if (u[r] = h, h[2] = e(t, n, l)) return !0
								} return !1
				}
			}

			function f(e) {
				return e.length > 1 ? function (t, n, i) {
					for (var o = e.length; o--;)
						if (!e[o](t, n, i)) return !1;
					return !0
				} : e[0]
			}

			function p(e, n, i) {
				for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
				return i
			}

			function m(e, t, n, i, o) {
				for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
				return a
			}

			function g(e, t, n, o, r, a) {
				return o && !o[W] && (o = g(o)), r && !r[W] && (r = g(r, a)), i(function (i, a, s, l) {
					var c, u, d, h = [],
						f = [],
						g = a.length,
						v = i || p(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !i && t ? v : m(v, h, e, s, l),
						b = n ? r || (i ? e : g || o) ? [] : a : y;
					if (n && n(y, b, s, l), o)
						for (c = m(b, f), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
					if (i) {
						if (r || e) {
							if (r) {
								for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
								r(null, b = [], c, l)
							}
							for (u = b.length; u--;)(d = b[u]) && (c = r ? Z(i, d) : h[u]) > -1 && (i[c] = !(a[c] = d))
						}
					} else b = m(b === a ? b.splice(g, b.length) : b), r ? r(null, a, b, l) : G.apply(a, b)
				})
			}

			function v(e) {
				for (var t, n, i, o = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = h(function (e) {
						return e === t
					}, a, !0), c = h(function (e) {
						return Z(t, e) > -1
					}, a, !0), u = [function (e, n, i) {
						var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
						return t = null, o
					}]; s < o; s++)
					if (n = w.relative[e[s].type]) u = [h(f(u), n)];
					else {
						if ((n = w.filter[e[s].type].apply(null, e[s].matches))[W]) {
							for (i = ++s; i < o && !w.relative[e[i].type]; i++);
							return g(s > 1 && f(u), s > 1 && d(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(re, "$1"), n, s < i && v(e.slice(s, i)), i < o && v(e = e.slice(i)), i < o && d(e))
						}
						u.push(n)
					}
				return f(u)
			}

			function y(e, n) {
				var o = n.length > 0,
					r = e.length > 0,
					a = function (i, a, s, l, c) {
						var u, d, h, f = 0,
							p = "0",
							g = i && [],
							v = [],
							y = E,
							b = i || r && w.find.TAG("*", c),
							x = V += null == y ? 1 : Math.random() || .1,
							C = b.length;
						for (c && (E = a === O || a || c); p !== C && null != (u = b[p]); p++) {
							if (r && u) {
								for (d = 0, a || u.ownerDocument === O || (D(u), s = !M); h = e[d++];)
									if (h(u, a || O, s)) {
										l.push(u);
										break
									}
								c && (V = x)
							}
							o && ((u = !h && u) && f--, i && g.push(u))
						}
						if (f += p, o && p !== f) {
							for (d = 0; h = n[d++];) h(g, v, a, s);
							if (i) {
								if (f > 0)
									for (; p--;) g[p] || v[p] || (v[p] = U.call(l));
								v = m(v)
							}
							G.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
						}
						return c && (V = x, E = y), g
					};
				return o ? i(a) : a
			}
			var b, x, w, C, k, T, _, S, E, A, I, D, O, P, M, L, F, N, R, W = "sizzle" + 1 * new Date,
				H = e.document,
				V = 0,
				j = 0,
				B = n(),
				z = n(),
				q = n(),
				$ = function (e, t) {
					return e === t && (I = !0), 0
				},
				Y = {}.hasOwnProperty,
				X = [],
				U = X.pop,
				Q = X.push,
				G = X.push,
				K = X.slice,
				Z = function (e, t) {
					for (var n = 0, i = e.length; n < i; n++)
						if (e[n] === t) return n;
					return -1
				},
				J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ee = "[\\x20\\t\\r\\n\\f]",
				te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
				ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
				ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
				oe = new RegExp(ee + "+", "g"),
				re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
				ae = new RegExp("^" + ee + "*," + ee + "*"),
				se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
				le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
				ce = new RegExp(ie),
				ue = new RegExp("^" + te + "$"),
				de = {
					ID: new RegExp("^#(" + te + ")"),
					CLASS: new RegExp("^\\.(" + te + ")"),
					TAG: new RegExp("^(" + te + "|[*])"),
					ATTR: new RegExp("^" + ne),
					PSEUDO: new RegExp("^" + ie),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + J + ")$", "i"),
					needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
				},
				he = /^(?:input|select|textarea|button)$/i,
				fe = /^h\d$/i,
				pe = /^[^{]+\{\s*\[native \w/,
				me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ge = /[+~]/,
				ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
				ye = function (e, t, n) {
					var i = "0x" + t - 65536;
					return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				xe = function (e, t) {
					return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
				},
				we = function () {
					D()
				},
				Ce = h(function (e) {
					return !0 === e.disabled && ("form" in e || "label" in e)
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				G.apply(X = K.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
			} catch (e) {
				G = {
					apply: X.length ? function (e, t) {
						Q.apply(e, K.call(t))
					} : function (e, t) {
						for (var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			x = t.support = {}, k = t.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, D = t.setDocument = function (e) {
				var t, n, i = e ? e.ownerDocument || e : H;
				return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, P = O.documentElement, M = !k(O), H !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = o(function (e) {
					return e.className = "i", !e.getAttribute("className")
				}), x.getElementsByTagName = o(function (e) {
					return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
				}), x.getElementsByClassName = pe.test(O.getElementsByClassName), x.getById = o(function (e) {
					return P.appendChild(e).id = W, !O.getElementsByName || !O.getElementsByName(W).length
				}), x.getById ? (w.filter.ID = function (e) {
					var t = e.replace(ve, ye);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}, w.find.ID = function (e, t) {
					if (void 0 !== t.getElementById && M) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (w.filter.ID = function (e) {
					var t = e.replace(ve, ye);
					return function (e) {
						var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}, w.find.ID = function (e, t) {
					if (void 0 !== t.getElementById && M) {
						var n, i, o, r = t.getElementById(e);
						if (r) {
							if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
							for (o = t.getElementsByName(e), i = 0; r = o[i++];)
								if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
						}
						return []
					}
				}), w.find.TAG = x.getElementsByTagName ? function (e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
				} : function (e, t) {
					var n, i = [],
						o = 0,
						r = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = r[o++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return r
				}, w.find.CLASS = x.getElementsByClassName && function (e, t) {
					if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
				}, F = [], L = [], (x.qsa = pe.test(O.querySelectorAll)) && (o(function (e) {
					P.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + W + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || L.push(".#.+[+~]")
				}), o(function (e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = O.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
				})), (x.matchesSelector = pe.test(N = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (e) {
					x.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), F.push("!=", ie)
				}), L = L.length && new RegExp(L.join("|")), F = F.length && new RegExp(F.join("|")), t = pe.test(P.compareDocumentPosition), R = t || pe.test(P.contains) ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function (e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, $ = t ? function (e, t) {
					if (e === t) return I = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === H && R(H, e) ? -1 : t === O || t.ownerDocument === H && R(H, t) ? 1 : A ? Z(A, e) - Z(A, t) : 0 : 4 & n ? -1 : 1)
				} : function (e, t) {
					if (e === t) return I = !0, 0;
					var n, i = 0,
						o = e.parentNode,
						r = t.parentNode,
						s = [e],
						l = [t];
					if (!o || !r) return e === O ? -1 : t === O ? 1 : o ? -1 : r ? 1 : A ? Z(A, e) - Z(A, t) : 0;
					if (o === r) return a(e, t);
					for (n = e; n = n.parentNode;) s.unshift(n);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (; s[i] === l[i];) i++;
					return i ? a(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
				}, O) : O
			}, t.matches = function (e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function (e, n) {
				if ((e.ownerDocument || e) !== O && D(e), n = n.replace(le, "='$1']"), x.matchesSelector && M && !q[n + " "] && (!F || !F.test(n)) && (!L || !L.test(n))) try {
					var i = N.call(e, n);
					if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
				} catch (e) {}
				return t(n, O, null, [e]).length > 0
			}, t.contains = function (e, t) {
				return (e.ownerDocument || e) !== O && D(e), R(e, t)
			}, t.attr = function (e, t) {
				(e.ownerDocument || e) !== O && D(e);
				var n = w.attrHandle[t.toLowerCase()],
					i = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
				return void 0 !== i ? i : x.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, t.escape = function (e) {
				return (e + "").replace(be, xe)
			}, t.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function (e) {
				var t, n = [],
					i = 0,
					o = 0;
				if (I = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort($), I) {
					for (; t = e[o++];) t === e[o] && (i = n.push(o));
					for (; i--;) e.splice(n[i], 1)
				}
				return A = null, e
			}, C = t.getText = function (e) {
				var t, n = "",
					i = 0,
					o = e.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
					} else if (3 === o || 4 === o) return e.nodeValue
				} else
					for (; t = e[i++];) n += C(t);
				return n
			}, (w = t.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: de,
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
					ATTR: function (e) {
						return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function (e) {
						var t, n = !e[6] && e[2];
						return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(ve, ye).toLowerCase();
						return "*" === e ? function () {
							return !0
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = B[e + " "];
						return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function (e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function (e, n, i) {
						return function (o) {
							var r = t.attr(o, e);
							return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function (e, t, n, i, o) {
						var r = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === i && 0 === o ? function (e) {
							return !!e.parentNode
						} : function (t, n, l) {
							var c, u, d, h, f, p, m = r !== a ? "nextSibling" : "previousSibling",
								g = t.parentNode,
								v = s && t.nodeName.toLowerCase(),
								y = !l && !s,
								b = !1;
							if (g) {
								if (r) {
									for (; m;) {
										for (h = t; h = h[m];)
											if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
										p = m = "only" === e && !p && "nextSibling"
									}
									return !0
								}
								if (p = [a ? g.firstChild : g.lastChild], a && y) {
									for (b = (f = (c = (u = (d = (h = g)[W] || (h[W] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === V && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop();)
										if (1 === h.nodeType && ++b && h === t) {
											u[e] = [V, f, b];
											break
										}
								} else if (y && (b = f = (c = (u = (d = (h = t)[W] || (h[W] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === V && c[1]), !1 === b)
									for (;
										(h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[W] || (h[W] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [V, b]), h !== t)););
								return (b -= o) === i || b % i == 0 && b / i >= 0
							}
						}
					},
					PSEUDO: function (e, n) {
						var o, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return r[W] ? r(n) : r.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
							for (var i, o = r(e, n), a = o.length; a--;) e[i = Z(e, o[a])] = !(t[i] = o[a])
						}) : function (e) {
							return r(e, 0, o)
						}) : r
					}
				},
				pseudos: {
					not: i(function (e) {
						var t = [],
							n = [],
							o = _(e.replace(re, "$1"));
						return o[W] ? i(function (e, t, n, i) {
							for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
						}) : function (e, i, r) {
							return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
						}
					}),
					has: i(function (e) {
						return function (n) {
							return t(e, n).length > 0
						}
					}),
					contains: i(function (e) {
						return e = e.replace(ve, ye),
							function (t) {
								return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
							}
					}),
					lang: i(function (e) {
						return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
							function (t) {
								var n;
								do {
									if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function (t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function (e) {
						return e === P
					},
					focus: function (e) {
						return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: s(!1),
					disabled: s(!0),
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function (e) {
						return !w.pseudos.empty(e)
					},
					header: function (e) {
						return fe.test(e.nodeName)
					},
					input: function (e) {
						return he.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: l(function () {
						return [0]
					}),
					last: l(function (e, t) {
						return [t - 1]
					}),
					eq: l(function (e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: l(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: l(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: l(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
						return e
					}),
					gt: l(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}).pseudos.nth = w.pseudos.eq;
			for (b in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) w.pseudos[b] = function (e) {
				return function (t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}(b);
			for (b in {
					submit: !0,
					reset: !0
				}) w.pseudos[b] = function (e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}(b);
			return u.prototype = w.filters = w.pseudos, w.setFilters = new u, T = t.tokenize = function (e, n) {
				var i, o, r, a, s, l, c, u = z[e + " "];
				if (u) return n ? 0 : u.slice(0);
				for (s = e, l = [], c = w.preFilter; s;) {
					i && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = se.exec(s)) && (i = o.shift(), r.push({
						value: i,
						type: o[0].replace(re, " ")
					}), s = s.slice(i.length));
					for (a in w.filter) !(o = de[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
						value: i,
						type: a,
						matches: o
					}), s = s.slice(i.length));
					if (!i) break
				}
				return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
			}, _ = t.compile = function (e, t) {
				var n, i = [],
					o = [],
					r = q[e + " "];
				if (!r) {
					for (t || (t = T(e)), n = t.length; n--;)(r = v(t[n]))[W] ? i.push(r) : o.push(r);
					(r = q(e, y(o, i))).selector = e
				}
				return r
			}, S = t.select = function (e, t, n, i) {
				var o, r, a, s, l, u = "function" == typeof e && e,
					h = !i && T(e = u.selector || e);
				if (n = n || [], 1 === h.length) {
					if ((r = h[0] = h[0].slice(0)).length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && M && w.relative[r[1].type]) {
						if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
						u && (t = t.parentNode), e = e.slice(r.shift().value.length)
					}
					for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);)
						if ((l = w.find[s]) && (i = l(a.matches[0].replace(ve, ye), ge.test(r[0].type) && c(t.parentNode) || t))) {
							if (r.splice(o, 1), !(e = i.length && d(r))) return G.apply(n, i), n;
							break
						}
				}
				return (u || _(e, h))(i, t, !M, n, !t || ge.test(e) && c(t.parentNode) || t), n
			}, x.sortStable = W.split("").sort($).join("") === W, x.detectDuplicates = !!I, D(), x.sortDetached = o(function (e) {
				return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
			}), o(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || r("type|href|height|width", function (e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), x.attributes && o(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || r("value", function (e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), o(function (e) {
				return null == e.getAttribute("disabled")
			}) || r(J, function (e, t, n) {
				var i;
				if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}), t
		}(e);
		he.find = ve, he.expr = ve.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ve.uniqueSort, he.text = ve.getText, he.isXMLDoc = ve.isXML, he.contains = ve.contains, he.escapeSelector = ve.escape;
		var ye = function (e, t, n) {
				for (var i = [], o = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (o && he(e).is(n)) break;
						i.push(e)
					}
				return i
			},
			be = function (e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			xe = he.expr.match.needsContext,
			we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
			Ce = /^.[^:#\[\.,]*$/;
		he.filter = function (e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, he.fn.extend({
			find: function (e) {
				var t, n, i = this.length,
					o = this;
				if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
					for (t = 0; t < i; t++)
						if (he.contains(o[t], this)) return !0
				}));
				for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, o[t], n);
				return i > 1 ? he.uniqueSort(n) : n
			},
			filter: function (e) {
				return this.pushStack(o(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(o(this, e || [], !0))
			},
			is: function (e) {
				return !!o(this, "string" == typeof e && xe.test(e) ? he(e) : e || [], !1).length
			}
		});
		var ke, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(he.fn.init = function (e, t, n) {
			var i, o;
			if (!e) return this;
			if (n = n || ke, "string" == typeof e) {
				if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (i[1]) {
					if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ee, !0)), we.test(i[1]) && he.isPlainObject(t))
						for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
					return this
				}
				return (o = ee.getElementById(i[2])) && (this[0] = o, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
		}).prototype = he.fn, ke = he(ee);
		var _e = /^(?:parents|prev(?:Until|All))/,
			Se = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		he.fn.extend({
			has: function (e) {
				var t = he(e, this),
					n = t.length;
				return this.filter(function () {
					for (var e = 0; e < n; e++)
						if (he.contains(this, t[e])) return !0
				})
			},
			closest: function (e, t) {
				var n, i = 0,
					o = this.length,
					r = [],
					a = "string" != typeof e && he(e);
				if (!xe.test(e))
					for (; i < o; i++)
						for (n = this[i]; n && n !== t; n = n.parentNode)
							if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
								r.push(n);
								break
							}
				return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
			},
			index: function (e) {
				return e ? "string" == typeof e ? re.call(he(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), he.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return ye(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return ye(e, "parentNode", n)
			},
			next: function (e) {
				return r(e, "nextSibling")
			},
			prev: function (e) {
				return r(e, "previousSibling")
			},
			nextAll: function (e) {
				return ye(e, "nextSibling")
			},
			prevAll: function (e) {
				return ye(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return ye(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return ye(e, "previousSibling", n)
			},
			siblings: function (e) {
				return be((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return be(e.firstChild)
			},
			contents: function (e) {
				return e.contentDocument || he.merge([], e.childNodes)
			}
		}, function (e, t) {
			he.fn[e] = function (n, i) {
				var o = he.map(this, t, n);
				return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && (Se[e] || he.uniqueSort(o), _e.test(e) && o.reverse()), this.pushStack(o)
			}
		});
		var Ee = /[^\x20\t\r\n\f]+/g;
		he.Callbacks = function (e) {
			e = "string" == typeof e ? a(e) : he.extend({}, e);
			var t, n, i, o, r = [],
				s = [],
				l = -1,
				c = function () {
					for (o = e.once, i = t = !0; s.length; l = -1)
						for (n = s.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
					e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
				},
				u = {
					add: function () {
						return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
							he.each(n, function (n, i) {
								he.isFunction(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== he.type(i) && t(i)
							})
						}(arguments), n && !t && c()), this
					},
					remove: function () {
						return he.each(arguments, function (e, t) {
							for (var n;
								(n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
						}), this
					},
					has: function (e) {
						return e ? he.inArray(e, r) > -1 : r.length > 0
					},
					empty: function () {
						return r && (r = []), this
					},
					disable: function () {
						return o = s = [], r = n = "", this
					},
					disabled: function () {
						return !r
					},
					lock: function () {
						return o = s = [], n || t || (r = n = ""), this
					},
					locked: function () {
						return !!o
					},
					fireWith: function (e, n) {
						return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || c()), this
					},
					fire: function () {
						return u.fireWith(this, arguments), this
					},
					fired: function () {
						return !!i
					}
				};
			return u
		}, he.extend({
			Deferred: function (t) {
				var n = [
						["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
						["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
					],
					i = "pending",
					o = {
						state: function () {
							return i
						},
						always: function () {
							return r.done(arguments).fail(arguments), this
						},
						catch: function (e) {
							return o.then(null, e)
						},
						pipe: function () {
							var e = arguments;
							return he.Deferred(function (t) {
								he.each(n, function (n, i) {
									var o = he.isFunction(e[i[4]]) && e[i[4]];
									r[i[1]](function () {
										var e = o && o.apply(this, arguments);
										e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						then: function (t, i, o) {
							function r(t, n, i, o) {
								return function () {
									var c = this,
										u = arguments,
										d = function () {
											var e, d;
											if (!(t < a)) {
												if ((e = i.apply(c, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
												d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? o ? d.call(e, r(a, n, s, o), r(a, n, l, o)) : (a++, d.call(e, r(a, n, s, o), r(a, n, l, o), r(a, n, s, n.notifyWith))) : (i !== s && (c = void 0, u = [e]), (o || n.resolveWith)(c, u))
											}
										},
										h = o ? d : function () {
											try {
												d()
											} catch (e) {
												he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= a && (i !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
											}
										};
									t ? h() : (he.Deferred.getStackHook && (h.stackTrace = he.Deferred.getStackHook()), e.setTimeout(h))
								}
							}
							var a = 0;
							return he.Deferred(function (e) {
								n[0][3].add(r(0, e, he.isFunction(o) ? o : s, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : s)), n[2][3].add(r(0, e, he.isFunction(i) ? i : l))
							}).promise()
						},
						promise: function (e) {
							return null != e ? he.extend(e, o) : o
						}
					},
					r = {};
				return he.each(n, function (e, t) {
					var a = t[2],
						s = t[5];
					o[t[1]] = a.add, s && a.add(function () {
						i = s
					}, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), r[t[0]] = function () {
						return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
					}, r[t[0] + "With"] = a.fireWith
				}), o.promise(r), t && t.call(r, r), r
			},
			when: function (e) {
				var t = arguments.length,
					n = t,
					i = Array(n),
					o = ne.call(arguments),
					r = he.Deferred(),
					a = function (e) {
						return function (n) {
							i[e] = this, o[e] = arguments.length > 1 ? ne.call(arguments) : n, --t || r.resolveWith(i, o)
						}
					};
				if (t <= 1 && (c(e, r.done(a(n)).resolve, r.reject), "pending" === r.state() || he.isFunction(o[n] && o[n].then))) return r.then();
				for (; n--;) c(o[n], a(n), r.reject);
				return r.promise()
			}
		});
		var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		he.Deferred.exceptionHook = function (t, n) {
			e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
		}, he.readyException = function (t) {
			e.setTimeout(function () {
				throw t
			})
		};
		var Ie = he.Deferred();
		he.fn.ready = function (e) {
			return Ie.then(e).catch(function (e) {
				he.readyException(e)
			}), this
		}, he.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (e) {
				e ? he.readyWait++ : he.ready(!0)
			},
			ready: function (e) {
				(!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Ie.resolveWith(ee, [he]))
			}
		}), he.ready.then = Ie.then, "complete" === ee.readyState || "loading" !== ee.readyState && !ee.documentElement.doScroll ? e.setTimeout(he.ready) : (ee.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
		var De = function (e, t, n, i, o, r, a) {
				var s = 0,
					l = e.length,
					c = null == n;
				if ("object" === he.type(n)) {
					o = !0;
					for (s in n) De(e, t, s, n[s], !0, r, a)
				} else if (void 0 !== i && (o = !0, he.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
						return c.call(he(e), n)
					})), t))
					for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
				return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
			},
			Oe = function (e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			};
		d.uid = 1, d.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t
			},
			set: function (e, t, n) {
				var i, o = this.cache(e);
				if ("string" == typeof t) o[he.camelCase(t)] = n;
				else
					for (i in t) o[he.camelCase(i)] = t[i];
				return o
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
			},
			access: function (e, t, n) {
				return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t) {
				var n, i = e[this.expando];
				if (void 0 !== i) {
					if (void 0 !== t) {
						n = (t = he.isArray(t) ? t.map(he.camelCase) : (t = he.camelCase(t)) in i ? [t] : t.match(Ee) || []).length;
						for (; n--;) delete i[t[n]]
					}(void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !he.isEmptyObject(t)
			}
		};
		var Pe = new d,
			Me = new d,
			Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Fe = /[A-Z]/g;
		he.extend({
			hasData: function (e) {
				return Me.hasData(e) || Pe.hasData(e)
			},
			data: function (e, t, n) {
				return Me.access(e, t, n)
			},
			removeData: function (e, t) {
				Me.remove(e, t)
			},
			_data: function (e, t, n) {
				return Pe.access(e, t, n)
			},
			_removeData: function (e, t) {
				Pe.remove(e, t)
			}
		}), he.fn.extend({
			data: function (e, t) {
				var n, i, o, r = this[0],
					a = r && r.attributes;
				if (void 0 === e) {
					if (this.length && (o = Me.get(r), 1 === r.nodeType && !Pe.get(r, "hasDataAttrs"))) {
						for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = he.camelCase(i.slice(5)), f(r, i, o[i]));
						Pe.set(r, "hasDataAttrs", !0)
					}
					return o
				}
				return "object" == typeof e ? this.each(function () {
					Me.set(this, e)
				}) : De(this, function (t) {
					var n;
					if (r && void 0 === t) {
						if (void 0 !== (n = Me.get(r, e))) return n;
						if (void 0 !== (n = f(r, e))) return n
					} else this.each(function () {
						Me.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function (e) {
				return this.each(function () {
					Me.remove(this, e)
				})
			}
		}), he.extend({
			queue: function (e, t, n) {
				var i;
				if (e) return t = (t || "fx") + "queue", i = Pe.get(e, t), n && (!i || he.isArray(n) ? i = Pe.access(e, t, he.makeArray(n)) : i.push(n)), i || []
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = he.queue(e, t),
					i = n.length,
					o = n.shift(),
					r = he._queueHooks(e, t);
				"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
					he.dequeue(e, t)
				}, r)), !i && r && r.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return Pe.get(e, n) || Pe.access(e, n, {
					empty: he.Callbacks("once memory").add(function () {
						Pe.remove(e, [t + "queue", n])
					})
				})
			}
		}), he.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
					var n = he.queue(this, e, t);
					he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					he.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var n, i = 1,
					o = he.Deferred(),
					r = this,
					a = this.length,
					s = function () {
						--i || o.resolveWith(r, [r])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Pe.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
				return s(), o.promise(t)
			}
		});
		var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Re = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
			We = ["Top", "Right", "Bottom", "Left"],
			He = function (e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
			},
			Ve = function (e, t, n, i) {
				var o, r, a = {};
				for (r in t) a[r] = e.style[r], e.style[r] = t[r];
				o = n.apply(e, i || []);
				for (r in t) e.style[r] = a[r];
				return o
			},
			je = {};
		he.fn.extend({
			show: function () {
				return g(this, !0)
			},
			hide: function () {
				return g(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					He(this) ? he(this).show() : he(this).hide()
				})
			}
		});
		var Be = /^(?:checkbox|radio)$/i,
			ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
			qe = /^$|\/(?:java|ecma)script/i,
			$e = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		$e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td;
		var Ye = /<|&#?\w+;/;
		! function () {
			var e = ee.createDocumentFragment().appendChild(ee.createElement("div")),
				t = ee.createElement("input");
			t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
		}();
		var Xe = ee.documentElement,
			Ue = /^key/,
			Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Ge = /^([^.]*)(?:\.(.+)|)/;
		he.event = {
			global: {},
			add: function (e, t, n, i, o) {
				var r, a, s, l, c, u, d, h, f, p, m, g = Pe.get(e);
				if (g)
					for (n.handler && (n = (r = n).handler, o = r.selector), o && he.find.matchesSelector(Xe, o), n.guid || (n.guid = he.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
							return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
						}), c = (t = (t || "").match(Ee) || [""]).length; c--;) f = m = (s = Ge.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = he.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = he.event.special[f] || {}, u = he.extend({
						type: f,
						origType: m,
						data: i,
						handler: n,
						guid: n.guid,
						selector: o,
						needsContext: o && he.expr.match.needsContext.test(o),
						namespace: p.join(".")
					}, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), he.event.global[f] = !0)
			},
			remove: function (e, t, n, i, o) {
				var r, a, s, l, c, u, d, h, f, p, m, g = Pe.hasData(e) && Pe.get(e);
				if (g && (l = g.events)) {
					for (c = (t = (t || "").match(Ee) || [""]).length; c--;)
						if (s = Ge.exec(t[c]) || [], f = m = s[1], p = (s[2] || "").split(".").sort(), f) {
							for (d = he.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
							a && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || he.removeEvent(e, f, g.handle), delete l[f])
						} else
							for (f in l) he.event.remove(e, f + t[c], n, i, !0);
					he.isEmptyObject(l) && Pe.remove(e, "handle events")
				}
			},
			dispatch: function (e) {
				var t, n, i, o, r, a, s = he.event.fix(e),
					l = new Array(arguments.length),
					c = (Pe.get(this, "events") || {})[s.type] || [],
					u = he.event.special[s.type] || {};
				for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
				if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
					for (a = he.event.handlers.call(this, s, c), t = 0;
						(o = a[t++]) && !s.isPropagationStopped();)
						for (s.currentTarget = o.elem, n = 0;
							(r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, s), s.result
				}
			},
			handlers: function (e, t) {
				var n, i, o, r, a, s = [],
					l = t.delegateCount,
					c = e.target;
				if (l && c.nodeType && !("click" === e.type && e.button >= 1))
					for (; c !== this; c = c.parentNode || this)
						if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
							for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length), a[o] && r.push(i);
							r.length && s.push({
								elem: c,
								handlers: r
							})
						}
				return c = this, l < t.length && s.push({
					elem: c,
					handlers: t.slice(l)
				}), s
			},
			addProp: function (e, t) {
				Object.defineProperty(he.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: he.isFunction(t) ? function () {
						if (this.originalEvent) return t(this.originalEvent)
					} : function () {
						if (this.originalEvent) return this.originalEvent[e]
					},
					set: function (t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			},
			fix: function (e) {
				return e[he.expando] ? e : new he.Event(e)
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== C() && this.focus) return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === C() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
					},
					_default: function (e) {
						return he.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, he.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		}, he.Event = function (e, t) {
			if (!(this instanceof he.Event)) return new he.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
		}, he.Event.prototype = {
			constructor: he.Event,
			isDefaultPrevented: w,
			isPropagationStopped: w,
			isImmediatePropagationStopped: w,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, he.each({
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
			which: function (e) {
				var t = e.button;
				return null == e.which && Ue.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, he.event.addProp), he.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t) {
			he.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n, i = this,
						o = e.relatedTarget,
						r = e.handleObj;
					return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), he.fn.extend({
			on: function (e, t, n, i) {
				return k(this, e, t, n, i)
			},
			one: function (e, t, n, i) {
				return k(this, e, t, n, i, 1)
			},
			off: function (e, t, n) {
				var i, o;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof e) {
					for (o in e) this.off(o, t, e[o]);
					return this
				}
				return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), this.each(function () {
					he.event.remove(this, e, n, t)
				})
			}
		});
		var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			Ze = /<script|<style|<link/i,
			Je = /checked\s*(?:[^=]|=\s*.checked.)/i,
			et = /^true\/(.*)/,
			tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		he.extend({
			htmlPrefilter: function (e) {
				return e.replace(Ke, "<$1></$2>")
			},
			clone: function (e, t, n) {
				var i, o, r, a, s = e.cloneNode(!0),
					l = he.contains(e.ownerDocument, e);
				if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
					for (a = v(s), i = 0, o = (r = v(e)).length; i < o; i++) A(r[i], a[i]);
				if (t)
					if (n)
						for (r = r || v(e), a = a || v(s), i = 0, o = r.length; i < o; i++) E(r[i], a[i]);
					else E(e, s);
				return (a = v(s, "script")).length > 0 && y(a, !l && v(e, "script")), s
			},
			cleanData: function (e) {
				for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++)
					if (Oe(n)) {
						if (t = n[Pe.expando]) {
							if (t.events)
								for (i in t.events) o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
							n[Pe.expando] = void 0
						}
						n[Me.expando] && (n[Me.expando] = void 0)
					}
			}
		}), he.fn.extend({
			detach: function (e) {
				return D(this, e, !0)
			},
			remove: function (e) {
				return D(this, e)
			},
			text: function (e) {
				return De(this, function (e) {
					return void 0 === e ? he.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function () {
				return I(this, arguments, function (e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, e).appendChild(e)
				})
			},
			prepend: function () {
				return I(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = T(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return I(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return I(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function () {
					return he.clone(this, e, t)
				})
			},
			html: function (e) {
				return De(this, function (e) {
					var t = this[0] || {},
						n = 0,
						i = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Ze.test(e) && !$e[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = he.htmlPrefilter(e);
						try {
							for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
							t = 0
						} catch (e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var e = [];
				return I(this, arguments, function (t) {
					var n = this.parentNode;
					he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), he.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t) {
			he.fn[e] = function (e) {
				for (var n, i = [], o = he(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), he(o[a])[t](n), oe.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var nt = /^margin/,
			it = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
			ot = function (t) {
				var n = t.ownerDocument.defaultView;
				return n && n.opener || (n = e), n.getComputedStyle(t)
			};
		! function () {
			function t() {
				if (s) {
					s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Xe.appendChild(a);
					var t = e.getComputedStyle(s);
					n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Xe.removeChild(a), s = null
				}
			}
			var n, i, o, r, a = ee.createElement("div"),
				s = ee.createElement("div");
			s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(de, {
				pixelPosition: function () {
					return t(), n
				},
				boxSizingReliable: function () {
					return t(), i
				},
				pixelMarginRight: function () {
					return t(), o
				},
				reliableMarginLeft: function () {
					return t(), r
				}
			}))
		}();
		var rt = /^(none|table(?!-c[ea]).+)/,
			at = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			st = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			lt = ["Webkit", "Moz", "ms"],
			ct = ee.createElement("div").style;
		he.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = O(e, "opacity");
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
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: "cssFloat"
			},
			style: function (e, t, n, i) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var o, r, a, s = he.camelCase(t),
						l = e.style;
					if (t = he.cssProps[s] || (he.cssProps[s] = M(s) || s), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
					"string" == (r = typeof n) && (o = Re.exec(n)) && o[1] && (n = p(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))
				}
			},
			css: function (e, t, n, i) {
				var o, r, a, s = he.camelCase(t);
				return t = he.cssProps[s] || (he.cssProps[s] = M(s) || s), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = O(e, t, i)), "normal" === o && t in st && (o = st[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
			}
		}), he.each(["height", "width"], function (e, t) {
			he.cssHooks[t] = {
				get: function (e, n, i) {
					if (n) return !rt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? N(e, t, i) : Ve(e, at, function () {
						return N(e, t, i)
					})
				},
				set: function (e, n, i) {
					var o, r = i && ot(e),
						a = i && F(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
					return a && (o = Re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), L(e, n, a)
				}
			}
		}), he.cssHooks.marginLeft = P(de.reliableMarginLeft, function (e, t) {
			if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Ve(e, {
				marginLeft: 0
			}, function () {
				return e.getBoundingClientRect().left
			})) + "px"
		}), he.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t) {
			he.cssHooks[e + t] = {
				expand: function (n) {
					for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + We[i] + t] = r[i] || r[i - 2] || r[0];
					return o
				}
			}, nt.test(e) || (he.cssHooks[e + t].set = L)
		}), he.fn.extend({
			css: function (e, t) {
				return De(this, function (e, t, n) {
					var i, o, r = {},
						a = 0;
					if (he.isArray(t)) {
						for (i = ot(e), o = t.length; a < o; a++) r[t[a]] = he.css(e, t[a], !1, i);
						return r
					}
					return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
				}, e, t, arguments.length > 1)
			}
		}), he.Tween = R, R.prototype = {
			constructor: R,
			init: function (e, t, n, i, o, r) {
				this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = R.propHooks[this.prop];
				return e && e.get ? e.get(this) : R.propHooks._default.get(this)
			},
			run: function (e) {
				var t, n = R.propHooks[this.prop];
				return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
			}
		}, R.prototype.init.prototype = R.prototype, R.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function (e) {
					he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, he.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, he.fx = R.prototype.init, he.fx.step = {};
		var ut, dt, ht = /^(?:toggle|show|hide)$/,
			ft = /queueHooks$/;
		he.Animation = he.extend(z, {
				tweeners: {
					"*": [function (e, t) {
						var n = this.createTween(e, t);
						return p(n.elem, e, Re.exec(t), n), n
					}]
				},
				tweener: function (e, t) {
					he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
					for (var n, i = 0, o = e.length; i < o; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
				},
				prefilters: [function (e, t, n) {
					var i, o, r, a, s, l, c, u, d = "width" in t || "height" in t,
						h = this,
						f = {},
						p = e.style,
						m = e.nodeType && He(e),
						v = Pe.get(e, "fxshow");
					n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
						a.unqueued || s()
					}), a.unqueued++, h.always(function () {
						h.always(function () {
							a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
						})
					}));
					for (i in t)
						if (o = t[i], ht.test(o)) {
							if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
								if ("show" !== o || !v || void 0 === v[i]) continue;
								m = !0
							}
							f[i] = v && v[i] || he.style(e, i)
						}
					if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) {
						d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = Pe.get(e, "display")), "none" === (u = he.css(e, "display")) && (c ? u = c : (g([e], !0), c = e.style.display || c, u = he.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (h.done(function () {
							p.display = c
						}), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
							p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
						})), l = !1;
						for (i in f) l || (v ? "hidden" in v && (m = v.hidden) : v = Pe.access(e, "fxshow", {
							display: c
						}), r && (v.hidden = !m), m && g([e], !0), h.done(function () {
							m || g([e]), Pe.remove(e, "fxshow");
							for (i in f) he.style(e, i, f[i])
						})), l = j(m ? v[i] : 0, i, h), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
					}
				}],
				prefilter: function (e, t) {
					t ? z.prefilters.unshift(e) : z.prefilters.push(e)
				}
			}), he.speed = function (e, t, n) {
				var i = e && "object" == typeof e ? he.extend({}, e) : {
					complete: n || !n && t || he.isFunction(e) && e,
					duration: e,
					easing: n && t || t && !he.isFunction(t) && t
				};
				return he.fx.off || ee.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
					he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
				}, i
			}, he.fn.extend({
				fadeTo: function (e, t, n, i) {
					return this.filter(He).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, i)
				},
				animate: function (e, t, n, i) {
					var o = he.isEmptyObject(e),
						r = he.speed(t, n, i),
						a = function () {
							var t = z(this, he.extend({}, e), r);
							(o || Pe.get(this, "finish")) && t.stop(!0)
						};
					return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
				},
				stop: function (e, t, n) {
					var i = function (e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
						var t = !0,
							o = null != e && e + "queueHooks",
							r = he.timers,
							a = Pe.get(this);
						if (o) a[o] && a[o].stop && i(a[o]);
						else
							for (o in a) a[o] && a[o].stop && ft.test(o) && i(a[o]);
						for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
						!t && n || he.dequeue(this, e)
					})
				},
				finish: function (e) {
					return !1 !== e && (e = e || "fx"), this.each(function () {
						var t, n = Pe.get(this),
							i = n[e + "queue"],
							o = n[e + "queueHooks"],
							r = he.timers,
							a = i ? i.length : 0;
						for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
						for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
						delete n.finish
					})
				}
			}), he.each(["toggle", "show", "hide"], function (e, t) {
				var n = he.fn[t];
				he.fn[t] = function (e, i, o) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, o)
				}
			}), he.each({
				slideDown: V("show"),
				slideUp: V("hide"),
				slideToggle: V("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (e, t) {
				he.fn[e] = function (e, n, i) {
					return this.animate(t, e, n, i)
				}
			}), he.timers = [], he.fx.tick = function () {
				var e, t = 0,
					n = he.timers;
				for (ut = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
				n.length || he.fx.stop(), ut = void 0
			}, he.fx.timer = function (e) {
				he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
			}, he.fx.interval = 13, he.fx.start = function () {
				dt || (dt = e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setInterval(he.fx.tick, he.fx.interval))
			}, he.fx.stop = function () {
				e.cancelAnimationFrame ? e.cancelAnimationFrame(dt) : e.clearInterval(dt), dt = null
			}, he.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, he.fn.delay = function (t, n) {
				return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
					var o = e.setTimeout(n, t);
					i.stop = function () {
						e.clearTimeout(o)
					}
				})
			},
			function () {
				var e = ee.createElement("input"),
					t = ee.createElement("select").appendChild(ee.createElement("option"));
				e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = t.selected, (e = ee.createElement("input")).value = "t", e.type = "radio", de.radioValue = "t" === e.value
			}();
		var pt, mt = he.expr.attrHandle;
		he.fn.extend({
			attr: function (e, t) {
				return De(this, he.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e) {
				return this.each(function () {
					he.removeAttr(this, e)
				})
			}
		}), he.extend({
			attr: function (e, t, n) {
				var i, o, r = e.nodeType;
				if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function (e, t) {
				var n, i = 0,
					o = t && t.match(Ee);
				if (o && 1 === e.nodeType)
					for (; n = o[i++];) e.removeAttribute(n)
			}
		}), pt = {
			set: function (e, t, n) {
				return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = mt[t] || he.find.attr;
			mt[t] = function (e, t, i) {
				var o, r, a = t.toLowerCase();
				return i || (r = mt[a], mt[a] = o, o = null != n(e, t, i) ? a : null, mt[a] = r), o
			}
		});
		var gt = /^(?:input|select|textarea|button)$/i,
			vt = /^(?:a|area)$/i;
		he.fn.extend({
			prop: function (e, t) {
				return De(this, he.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[he.propFix[e] || e]
				})
			}
		}), he.extend({
			prop: function (e, t, n) {
				var i, o, r = e.nodeType;
				if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = he.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), de.optSelected || (he.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function (e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			he.propFix[this.toLowerCase()] = this
		}), he.fn.extend({
			addClass: function (e) {
				var t, n, i, o, r, a, s, l = 0;
				if (he.isFunction(e)) return this.each(function (t) {
					he(this).addClass(e.call(this, t, $(this)))
				});
				if ("string" == typeof e && e)
					for (t = e.match(Ee) || []; n = this[l++];)
						if (o = $(n), i = 1 === n.nodeType && " " + q(o) + " ") {
							for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
							o !== (s = q(i)) && n.setAttribute("class", s)
						}
				return this
			},
			removeClass: function (e) {
				var t, n, i, o, r, a, s, l = 0;
				if (he.isFunction(e)) return this.each(function (t) {
					he(this).removeClass(e.call(this, t, $(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof e && e)
					for (t = e.match(Ee) || []; n = this[l++];)
						if (o = $(n), i = 1 === n.nodeType && " " + q(o) + " ") {
							for (a = 0; r = t[a++];)
								for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
							o !== (s = q(i)) && n.setAttribute("class", s)
						}
				return this
			},
			toggleClass: function (e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
					he(this).toggleClass(e.call(this, n, $(this), t), t)
				}) : this.each(function () {
					var t, i, o, r;
					if ("string" === n)
						for (i = 0, o = he(this), r = e.match(Ee) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
					else void 0 !== e && "boolean" !== n || ((t = $(this)) && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Pe.get(this, "__className__") || ""))
				})
			},
			hasClass: function (e) {
				var t, n, i = 0;
				for (t = " " + e + " "; n = this[i++];)
					if (1 === n.nodeType && (" " + q($(n)) + " ").indexOf(t) > -1) return !0;
				return !1
			}
		});
		var yt = /\r/g;
		he.fn.extend({
			val: function (e) {
				var t, n, i, o = this[0]; {
					if (arguments.length) return i = he.isFunction(e), this.each(function (n) {
						var o;
						1 === this.nodeType && (null == (o = i ? e.call(this, n, he(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : he.isArray(o) && (o = he.map(o, function (e) {
							return null == e ? "" : e + ""
						})), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
					});
					if (o) return (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(yt, "") : null == n ? "" : n)
				}
			}
		}), he.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = he.find.attr(e, "value");
						return null != t ? t : q(he.text(e))
					}
				},
				select: {
					get: function (e) {
						var t, n, i, o = e.options,
							r = e.selectedIndex,
							a = "select-one" === e.type,
							s = a ? null : [],
							l = a ? r + 1 : o.length;
						for (i = r < 0 ? l : a ? r : 0; i < l; i++)
							if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
								if (t = he(n).val(), a) return t;
								s.push(t)
							}
						return s
					},
					set: function (e, t) {
						for (var n, i, o = e.options, r = he.makeArray(t), a = o.length; a--;)((i = o[a]).selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
						return n || (e.selectedIndex = -1), r
					}
				}
			}
		}), he.each(["radio", "checkbox"], function () {
			he.valHooks[this] = {
				set: function (e, t) {
					if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
				}
			}, de.checkOn || (he.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var bt = /^(?:focusinfocus|focusoutblur)$/;
		he.extend(he.event, {
			trigger: function (t, n, i, o) {
				var r, a, s, l, c, u, d, h = [i || ee],
					f = le.call(t, "type") ? t.type : t,
					p = le.call(t, "namespace") ? t.namespace.split(".") : [];
				if (a = s = i = i || ee, 3 !== i.nodeType && 8 !== i.nodeType && !bt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (f = (p = f.split(".")).shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
					if (!o && !d.noBubble && !he.isWindow(i)) {
						for (l = d.delegateType || f, bt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
						s === (i.ownerDocument || ee) && h.push(s.defaultView || s.parentWindow || e)
					}
					for (r = 0;
						(a = h[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, (u = (Pe.get(a, "events") || {})[t.type] && Pe.get(a, "handle")) && u.apply(a, n), (u = c && a[c]) && u.apply && Oe(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
					return t.type = f, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !Oe(i) || c && he.isFunction(i[f]) && !he.isWindow(i) && ((s = i[c]) && (i[c] = null), he.event.triggered = f, i[f](), he.event.triggered = void 0, s && (i[c] = s)), t.result
				}
			},
			simulate: function (e, t, n) {
				var i = he.extend(new he.Event, n, {
					type: e,
					isSimulated: !0
				});
				he.event.trigger(i, null, t)
			}
		}), he.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					he.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return he.event.trigger(e, t, n, !0)
			}
		}), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
			he.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), he.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), de.focusin = "onfocusin" in e, de.focusin || he.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = function (e) {
				he.event.simulate(t, e.target, he.event.fix(e))
			};
			he.event.special[t] = {
				setup: function () {
					var i = this.ownerDocument || this,
						o = Pe.access(i, t);
					o || i.addEventListener(e, n, !0), Pe.access(i, t, (o || 0) + 1)
				},
				teardown: function () {
					var i = this.ownerDocument || this,
						o = Pe.access(i, t) - 1;
					o ? Pe.access(i, t, o) : (i.removeEventListener(e, n, !0), Pe.remove(i, t))
				}
			}
		});
		var xt = e.location,
			wt = he.now(),
			Ct = /\?/;
		he.parseXML = function (t) {
			var n;
			if (!t || "string" != typeof t) return null;
			try {
				n = (new e.DOMParser).parseFromString(t, "text/xml")
			} catch (e) {
				n = void 0
			}
			return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
		};
		var kt = /\[\]$/,
			Tt = /\r?\n/g,
			_t = /^(?:submit|button|image|reset|file)$/i,
			St = /^(?:input|select|textarea|keygen)/i;
		he.param = function (e, t) {
			var n, i = [],
				o = function (e, t) {
					var n = he.isFunction(t) ? t() : t;
					i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
				};
			if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
				o(this.name, this.value)
			});
			else
				for (n in e) Y(n, e[n], t, o);
			return i.join("&")
		}, he.fn.extend({
			serialize: function () {
				return he.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = he.prop(this, "elements");
					return e ? he.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !he(this).is(":disabled") && St.test(this.nodeName) && !_t.test(e) && (this.checked || !Be.test(e))
				}).map(function (e, t) {
					var n = he(this).val();
					return null == n ? null : he.isArray(n) ? he.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(Tt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Tt, "\r\n")
					}
				}).get()
			}
		});
		var Et = /%20/g,
			At = /#.*$/,
			It = /([?&])_=[^&]*/,
			Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Pt = /^(?:GET|HEAD)$/,
			Mt = /^\/\//,
			Lt = {},
			Ft = {},
			Nt = "*/".concat("*"),
			Rt = ee.createElement("a");
		Rt.href = xt.href, he.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: xt.href,
				type: "GET",
				isLocal: Ot.test(xt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Nt,
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
					"text xml": he.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e)
			},
			ajaxPrefilter: X(Lt),
			ajaxTransport: X(Ft),
			ajax: function (t, n) {
				function i(t, n, i, s) {
					var c, h, f, x, w, C = n;
					u || (u = !0, l && e.clearTimeout(l), o = void 0, a = s || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (x = G(p, k, i)), x = K(p, x, k, c), c ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (he.lastModified[r] = w), (w = k.getResponseHeader("etag")) && (he.etag[r] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, h = x.data, c = !(f = x.error))) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || C) + "", c ? v.resolveWith(m, [h, C, k]) : v.rejectWith(m, [k, C, f]), k.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, p, c ? h : f]), y.fireWith(m, [k, C]), d && (g.trigger("ajaxComplete", [k, p]), --he.active || he.event.trigger("ajaxStop")))
				}
				"object" == typeof t && (n = t, t = void 0), n = n || {};
				var o, r, a, s, l, c, u, d, h, f, p = he.ajaxSetup({}, n),
					m = p.context || p,
					g = p.context && (m.nodeType || m.jquery) ? he(m) : he.event,
					v = he.Deferred(),
					y = he.Callbacks("once memory"),
					b = p.statusCode || {},
					x = {},
					w = {},
					C = "canceled",
					k = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (u) {
								if (!s)
									for (s = {}; t = Dt.exec(a);) s[t[1].toLowerCase()] = t[2];
								t = s[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function () {
							return u ? a : null
						},
						setRequestHeader: function (e, t) {
							return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
						},
						overrideMimeType: function (e) {
							return null == u && (p.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (u) k.always(e[k.status]);
								else
									for (t in e) b[t] = [b[t], e[t]];
							return this
						},
						abort: function (e) {
							var t = e || C;
							return o && o.abort(t), i(0, t), this
						}
					};
				if (v.promise(k), p.url = ((t || p.url || xt.href) + "").replace(Mt, xt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ee) || [""], null == p.crossDomain) {
					c = ee.createElement("a");
					try {
						c.href = p.url, c.href = c.href, p.crossDomain = Rt.protocol + "//" + Rt.host != c.protocol + "//" + c.host
					} catch (e) {
						p.crossDomain = !0
					}
				}
				if (p.data && p.processData && "string" != typeof p.data && (p.data = he.param(p.data, p.traditional)), U(Lt, p, n, k), u) return k;
				(d = he.event && p.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pt.test(p.type), r = p.url.replace(At, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Et, "+")) : (f = p.url.slice(r.length), p.data && (r += (Ct.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(It, "$1"), f = (Ct.test(r) ? "&" : "?") + "_=" + wt++ + f), p.url = r + f), p.ifModified && (he.lastModified[r] && k.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && k.setRequestHeader("If-None-Match", he.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : p.accepts["*"]);
				for (h in p.headers) k.setRequestHeader(h, p.headers[h]);
				if (p.beforeSend && (!1 === p.beforeSend.call(m, k, p) || u)) return k.abort();
				if (C = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), o = U(Ft, p, n, k)) {
					if (k.readyState = 1, d && g.trigger("ajaxSend", [k, p]), u) return k;
					p.async && p.timeout > 0 && (l = e.setTimeout(function () {
						k.abort("timeout")
					}, p.timeout));
					try {
						u = !1, o.send(x, i)
					} catch (e) {
						if (u) throw e;
						i(-1, e)
					}
				} else i(-1, "No Transport");
				return k
			},
			getJSON: function (e, t, n) {
				return he.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return he.get(e, void 0, t, "script")
			}
		}), he.each(["get", "post"], function (e, t) {
			he[t] = function (e, n, i, o) {
				return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
					url: e,
					type: t,
					dataType: o,
					data: n,
					success: i
				}, he.isPlainObject(e) && e))
			}
		}), he._evalUrl = function (e) {
			return he.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		}, he.fn.extend({
			wrapAll: function (e) {
				var t;
				return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function (e) {
				return he.isFunction(e) ? this.each(function (t) {
					he(this).wrapInner(e.call(this, t))
				}) : this.each(function () {
					var t = he(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e) {
				var t = he.isFunction(e);
				return this.each(function (n) {
					he(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function (e) {
				return this.parent(e).not("body").each(function () {
					he(this).replaceWith(this.childNodes)
				}), this
			}
		}), he.expr.pseudos.hidden = function (e) {
			return !he.expr.pseudos.visible(e)
		}, he.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, he.ajaxSettings.xhr = function () {
			try {
				return new e.XMLHttpRequest
			} catch (e) {}
		};
		var Wt = {
				0: 200,
				1223: 204
			},
			Ht = he.ajaxSettings.xhr();
		de.cors = !!Ht && "withCredentials" in Ht, de.ajax = Ht = !!Ht, he.ajaxTransport(function (t) {
			var n, i;
			if (de.cors || Ht && !t.crossDomain) return {
				send: function (o, r) {
					var a, s = t.xhr();
					if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
						for (a in t.xhrFields) s[a] = t.xhrFields[a];
					t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
					for (a in o) s.setRequestHeader(a, o[a]);
					n = function (e) {
						return function () {
							n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
								binary: s.response
							} : {
								text: s.responseText
							}, s.getAllResponseHeaders()))
						}
					}, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
						4 === s.readyState && e.setTimeout(function () {
							n && i()
						})
					}, n = n("abort");
					try {
						s.send(t.hasContent && t.data || null)
					} catch (e) {
						if (n) throw e
					}
				},
				abort: function () {
					n && n()
				}
			}
		}), he.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1)
		}), he.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (e) {
					return he.globalEval(e), e
				}
			}
		}), he.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), he.ajaxTransport("script", function (e) {
			if (e.crossDomain) {
				var t, n;
				return {
					send: function (i, o) {
						t = he("<script>").prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function (e) {
							t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
						}), ee.head.appendChild(t[0])
					},
					abort: function () {
						n && n()
					}
				}
			}
		});
		var Vt = [],
			jt = /(=)\?(?=&|$)|\?\?/;
		he.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = Vt.pop() || he.expando + "_" + wt++;
				return this[e] = !0, e
			}
		}), he.ajaxPrefilter("json jsonp", function (t, n, i) {
			var o, r, a, s = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
			if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(jt, "$1" + o) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
				return a || he.error(o + " was not called"), a[0]
			}, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
				a = arguments
			}, i.always(function () {
				void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Vt.push(o)), a && he.isFunction(r) && r(a[0]), a = r = void 0
			}), "script"
		}), de.createHTMLDocument = function () {
			var e = ee.implementation.createHTMLDocument("").body;
			return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
		}(), he.parseHTML = function (e, t, n) {
			if ("string" != typeof e) return [];
			"boolean" == typeof t && (n = t, t = !1);
			var i, o, r;
			return t || (de.createHTMLDocument ? ((i = (t = ee.implementation.createHTMLDocument("")).createElement("base")).href = ee.location.href, t.head.appendChild(i)) : t = ee), o = we.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
		}, he.fn.load = function (e, t, n) {
			var i, o, r, a = this,
				s = e.indexOf(" ");
			return s > -1 && (i = q(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && he.ajax({
				url: e,
				type: o || "GET",
				dataType: "html",
				data: t
			}).done(function (e) {
				r = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
			}).always(n && function (e, t) {
				a.each(function () {
					n.apply(this, r || [e.responseText, t, e])
				})
			}), this
		}, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			he.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), he.expr.pseudos.animated = function (e) {
			return he.grep(he.timers, function (t) {
				return e === t.elem
			}).length
		}, he.offset = {
			setOffset: function (e, t, n) {
				var i, o, r, a, s, l, c = he.css(e, "position"),
					u = he(e),
					d = {};
				"static" === c && (e.style.position = "relative"), s = u.offset(), r = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
			}
		}, he.fn.extend({
			offset: function (e) {
				if (arguments.length) return void 0 === e ? this : this.each(function (t) {
					he.offset.setOffset(this, e, t)
				});
				var t, n, i, o, r = this[0];
				if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = Z(o), t = o.documentElement, {
					top: i.top + n.pageYOffset - t.clientTop,
					left: i.left + n.pageXOffset - t.clientLeft
				}) : i) : {
					top: 0,
					left: 0
				}
			},
			position: function () {
				if (this[0]) {
					var e, t, n = this[0],
						i = {
							top: 0,
							left: 0
						};
					return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = {
						top: i.top + he.css(e[0], "borderTopWidth", !0),
						left: i.left + he.css(e[0], "borderLeftWidth", !0)
					}), {
						top: t.top - i.top - he.css(n, "marginTop", !0),
						left: t.left - i.left - he.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
					return e || Xe
				})
			}
		}), he.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t) {
			var n = "pageYOffset" === t;
			he.fn[e] = function (i) {
				return De(this, function (e, i, o) {
					var r = Z(e);
					if (void 0 === o) return r ? r[t] : e[i];
					r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
				}, e, i, arguments.length)
			}
		}), he.each(["top", "left"], function (e, t) {
			he.cssHooks[t] = P(de.pixelPosition, function (e, n) {
				if (n) return n = O(e, t), it.test(n) ? he(e).position()[t] + "px" : n
			})
		}), he.each({
			Height: "height",
			Width: "width"
		}, function (e, t) {
			he.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, i) {
				he.fn[i] = function (o, r) {
					var a = arguments.length && (n || "boolean" != typeof o),
						s = n || (!0 === o || !0 === r ? "margin" : "border");
					return De(this, function (t, n, o) {
						var r;
						return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, s) : he.style(t, n, o, s)
					}, t, a ? o : void 0, a)
				}
			})
		}), he.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		}), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
			return he
		});
		var Bt = e.jQuery,
			zt = e.$;
		return he.noConflict = function (t) {
			return e.$ === he && (e.$ = zt), t && e.jQuery === he && (e.jQuery = Bt), he
		}, t || (e.jQuery = e.$ = he), he
	}), function (e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
	}(this, function () {
		"use strict";

		function e(e) {
			return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
		}

		function t(t, n) {
			Object.keys(n).forEach(function (i) {
				var o = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && e(n[i]) && (o = "px"), t.style[i] = n[i] + o
			})
		}

		function n(e) {
			var t = {};
			return e && "[object Function]" === t.toString.call(e)
		}

		function i(e, t) {
			if (1 !== e.nodeType) return [];
			var n = window.getComputedStyle(e, null);
			return t ? n[t] : n
		}

		function o(e) {
			return "HTML" === e.nodeName ? e : e.parentNode || e.host
		}

		function r(e) {
			if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
			var t = i(e),
				n = t.overflow,
				a = t.overflowX,
				s = t.overflowY;
			return /(auto|scroll)/.test(n + s + a) ? e : r(o(e))
		}

		function a(e) {
			var t = e.nodeName;
			return "BODY" !== t && ("HTML" === t || e.firstElementChild.offsetParent === e)
		}

		function s(e) {
			return null !== e.parentNode ? s(e.parentNode) : e
		}

		function l(e) {
			var t = e && e.offsetParent,
				n = t && t.nodeName;
			return n && "BODY" !== n && "HTML" !== n ? t : window.document.documentElement
		}

		function c(e, t) {
			if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
			var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
				i = n ? e : t,
				o = n ? t : e,
				r = document.createRange();
			r.setStart(i, 0), r.setEnd(o, 0);
			var u = r.commonAncestorContainer;
			if (e !== u && t !== u || i.contains(o)) return a(u) ? u : l(u);
			var d = s(e);
			return d.host ? c(d.host, t) : c(e, s(t).host)
		}

		function u(e) {
			var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
				n = e.nodeName;
			if ("BODY" === n || "HTML" === n) {
				var i = window.document.documentElement;
				return (window.document.scrollingElement || i)[t]
			}
			return e[t]
		}

		function d(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
				i = u(t, "top"),
				o = u(t, "left"),
				r = n ? -1 : 1;
			return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
		}

		function h(e, t) {
			var n = "x" === t ? "Left" : "Top",
				i = "Left" === n ? "Right" : "Bottom";
			return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
		}

		function f(e, t, n, i) {
			return Math.max(t["offset" + e], n["client" + e], n["offset" + e], Z() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
		}

		function p() {
			var e = window.document.body,
				t = window.document.documentElement,
				n = Z() && window.getComputedStyle(t);
			return {
				height: f("Height", e, t, n),
				width: f("Width", e, t, n)
			}
		}

		function m(e) {
			return ne({}, e, {
				right: e.left + e.width,
				bottom: e.top + e.height
			})
		}

		function g(e) {
			var t = {};
			if (Z()) try {
				t = e.getBoundingClientRect();
				var n = u(e, "top"),
					o = u(e, "left");
				t.top += n, t.left += o, t.bottom += n, t.right += o
			} catch (e) {} else t = e.getBoundingClientRect();
			var r = {
					left: t.left,
					top: t.top,
					width: t.right - t.left,
					height: t.bottom - t.top
				},
				a = "HTML" === e.nodeName ? p() : {},
				s = a.width || e.clientWidth || r.right - r.left,
				l = a.height || e.clientHeight || r.bottom - r.top,
				c = e.offsetWidth - s,
				d = e.offsetHeight - l;
			if (c || d) {
				var f = i(e);
				c -= h(f, "x"), d -= h(f, "y"), r.width -= c, r.height -= d
			}
			return m(r)
		}

		function v(e, t) {
			var n = Z(),
				o = "HTML" === t.nodeName,
				a = g(e),
				s = g(t),
				l = r(e),
				c = m({
					top: a.top - s.top,
					left: a.left - s.left,
					width: a.width,
					height: a.height
				});
			if (o || "BODY" === t.nodeName) {
				var u = i(t),
					h = n && o ? 0 : +u.borderTopWidth.split("px")[0],
					f = n && o ? 0 : +u.borderLeftWidth.split("px")[0],
					p = n && o ? 0 : +u.marginTop.split("px")[0],
					v = n && o ? 0 : +u.marginLeft.split("px")[0];
				c.top -= h - p, c.bottom -= h - p, c.left -= f - v, c.right -= f - v, c.marginTop = p, c.marginLeft = v
			}
			return (n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (c = d(c, t)), c
		}

		function y(e) {
			var t = window.document.documentElement,
				n = v(e, t),
				i = Math.max(t.clientWidth, window.innerWidth || 0),
				o = Math.max(t.clientHeight, window.innerHeight || 0),
				r = u(t),
				a = u(t, "left");
			return m({
				top: r - n.top + n.marginTop,
				left: a - n.left + n.marginLeft,
				width: i,
				height: o
			})
		}

		function b(e) {
			var t = e.nodeName;
			return "BODY" !== t && "HTML" !== t && ("fixed" === i(e, "position") || b(o(e)))
		}

		function x(e, t, n, i) {
			var a = {
					top: 0,
					left: 0
				},
				s = c(e, t);
			if ("viewport" === i) a = y(s);
			else {
				var l = void 0;
				"scrollParent" === i ? "BODY" === (l = r(o(e))).nodeName && (l = window.document.documentElement) : l = "window" === i ? window.document.documentElement : i;
				var u = v(l, s);
				if ("HTML" !== l.nodeName || b(s)) a = u;
				else {
					var d = p(),
						h = d.height,
						f = d.width;
					a.top += u.top - u.marginTop, a.bottom = h + u.top, a.left += u.left - u.marginLeft, a.right = f + u.left
				}
			}
			return a.left += n, a.top += n, a.right -= n, a.bottom -= n, a
		}

		function w(e) {
			return e.width * e.height
		}

		function C(e, t, n, i, o) {
			var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
			if (-1 === e.indexOf("auto")) return e;
			var a = x(n, i, r, o),
				s = {
					top: {
						width: a.width,
						height: t.top - a.top
					},
					right: {
						width: a.right - t.right,
						height: a.height
					},
					bottom: {
						width: a.width,
						height: a.bottom - t.bottom
					},
					left: {
						width: t.left - a.left,
						height: a.height
					}
				},
				l = Object.keys(s).map(function (e) {
					return ne({
						key: e
					}, s[e], {
						area: w(s[e])
					})
				}).sort(function (e, t) {
					return t.area - e.area
				}),
				c = l.filter(function (e) {
					var t = e.width,
						i = e.height;
					return t >= n.clientWidth && i >= n.clientHeight
				}),
				u = c.length > 0 ? c[0].key : l[0].key,
				d = e.split("-")[1];
			return u + (d ? "-" + d : "")
		}

		function k(e, t, n) {
			return v(n, c(t, n))
		}

		function T(e) {
			var t = window.getComputedStyle(e),
				n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
				i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
			return {
				width: e.offsetWidth + i,
				height: e.offsetHeight + n
			}
		}

		function _(e) {
			var t = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};
			return e.replace(/left|right|bottom|top/g, function (e) {
				return t[e]
			})
		}

		function S(e, t, n) {
			n = n.split("-")[0];
			var i = T(e),
				o = {
					width: i.width,
					height: i.height
				},
				r = -1 !== ["right", "left"].indexOf(n),
				a = r ? "top" : "left",
				s = r ? "left" : "top",
				l = r ? "height" : "width",
				c = r ? "width" : "height";
			return o[a] = t[a] + t[l] / 2 - i[l] / 2, o[s] = n === s ? t[s] - i[c] : t[_(s)], o
		}

		function E(e, t) {
			return Array.prototype.find ? e.find(t) : e.filter(t)[0]
		}

		function A(e, t, n) {
			if (Array.prototype.findIndex) return e.findIndex(function (e) {
				return e[t] === n
			});
			var i = E(e, function (e) {
				return e[t] === n
			});
			return e.indexOf(i)
		}

		function I(e, t, i) {
			return (void 0 === i ? e : e.slice(0, A(e, "name", i))).forEach(function (e) {
				e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
				var i = e.function || e.fn;
				e.enabled && n(i) && (t = i(t, e))
			}), t
		}

		function D() {
			if (!this.state.isDestroyed) {
				var e = {
					instance: this,
					styles: {},
					attributes: {},
					flipped: !1,
					offsets: {}
				};
				e.offsets.reference = k(this.state, this.popper, this.reference), e.placement = C(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
			}
		}

		function O(e, t) {
			return e.some(function (e) {
				var n = e.name;
				return e.enabled && n === t
			})
		}

		function P(e) {
			for (var t = [!1, "ms", "webkit", "moz", "o"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
				var o = t[i],
					r = o ? "" + o + n : e;
				if (void 0 !== window.document.body.style[r]) return r
			}
			return null
		}

		function M() {
			return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[P("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
		}

		function L(e, t, n, i) {
			var o = "BODY" === e.nodeName,
				a = o ? window : e;
			a.addEventListener(t, n, {
				passive: !0
			}), o || L(r(a.parentNode), t, n, i), i.push(a)
		}

		function F(e, t, n, i) {
			n.updateBound = i, window.addEventListener("resize", n.updateBound, {
				passive: !0
			});
			var o = r(e);
			return L(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
		}

		function N() {
			this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
		}

		function R(e, t) {
			return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
				e.removeEventListener("scroll", t.updateBound)
			}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
		}

		function W() {
			this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
		}

		function H(e, t) {
			Object.keys(t).forEach(function (n) {
				!1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
			})
		}

		function V(e, t, n) {
			var i = E(e, function (e) {
					return e.name === t
				}),
				o = !!i && e.some(function (e) {
					return e.name === n && e.enabled && e.order < i.order
				});
			if (!o) {
				var r = "`" + t + "`",
					a = "`" + n + "`";
				console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
			}
			return o
		}

		function j(e) {
			return "end" === e ? "start" : "start" === e ? "end" : e
		}

		function B(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				n = oe.indexOf(e),
				i = oe.slice(n + 1).concat(oe.slice(0, n));
			return t ? i.reverse() : i
		}

		function z(e, t, n, i) {
			var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
				r = +o[1],
				a = o[2];
			if (!r) return e;
			if (0 === a.indexOf("%")) {
				var s = void 0;
				switch (a) {
					case "%p":
						s = n;
						break;
					case "%":
					case "%r":
					default:
						s = i
				}
				return m(s)[t] / 100 * r
			}
			if ("vh" === a || "vw" === a) {
				return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
			}
			return r
		}

		function q(t, n, i, o) {
			var r = [0, 0],
				a = -1 !== ["right", "left"].indexOf(o),
				s = t.split(/(\+|\-)/).map(function (e) {
					return e.trim()
				}),
				l = s.indexOf(E(s, function (e) {
					return -1 !== e.search(/,|\s/)
				}));
			s[l] && -1 === s[l].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
			var c = /\s*,\s*|\s+/,
				u = -1 !== l ? [s.slice(0, l).concat([s[l].split(c)[0]]), [s[l].split(c)[1]].concat(s.slice(l + 1))] : [s];
			return (u = u.map(function (e, t) {
				var o = (1 === t ? !a : a) ? "height" : "width",
					r = !1;
				return e.reduce(function (e, t) {
					return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, r = !0, e) : r ? (e[e.length - 1] += t, r = !1, e) : e.concat(t)
				}, []).map(function (e) {
					return z(e, o, n, i)
				})
			})).forEach(function (t, n) {
				t.forEach(function (i, o) {
					e(i) && (r[n] += i * ("-" === t[o - 1] ? -1 : 1))
				})
			}), r
		}
		for (var $ = ["native code", "[object MutationObserverConstructor]"], Y = "undefined" != typeof window, X = ["Edge", "Trident", "Firefox"], U = 0, Q = 0; Q < X.length; Q += 1)
			if (Y && navigator.userAgent.indexOf(X[Q]) >= 0) {
				U = 1;
				break
			}
		var G = Y && function (e) {
				return $.some(function (t) {
					return (e || "").toString().indexOf(t) > -1
				})
			}(window.MutationObserver) ? function (e) {
				var t = !1,
					n = 0,
					i = document.createElement("span");
				return new MutationObserver(function () {
						e(), t = !1
					}).observe(i, {
						attributes: !0
					}),
					function () {
						t || (t = !0, i.setAttribute("x-index", n), n += 1)
					}
			} : function (e) {
				var t = !1;
				return function () {
					t || (t = !0, setTimeout(function () {
						t = !1, e()
					}, U))
				}
			},
			K = void 0,
			Z = function () {
				return void 0 === K && (K = -1 !== navigator.appVersion.indexOf("MSIE 10")), K
			},
			J = function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			},
			ee = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			te = function (e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			},
			ne = Object.assign || function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
				}
				return e
			},
			ie = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
			oe = ie.slice(3),
			re = {
				FLIP: "flip",
				CLOCKWISE: "clockwise",
				COUNTERCLOCKWISE: "counterclockwise"
			},
			ae = {
				placement: "bottom",
				eventsEnabled: !0,
				removeOnDestroy: !1,
				onCreate: function () {},
				onUpdate: function () {},
				modifiers: {
					shift: {
						order: 100,
						enabled: !0,
						fn: function (e) {
							var t = e.placement,
								n = t.split("-")[0],
								i = t.split("-")[1];
							if (i) {
								var o = e.offsets.reference,
									r = m(e.offsets.popper),
									a = -1 !== ["bottom", "top"].indexOf(n),
									s = a ? "left" : "top",
									l = a ? "width" : "height",
									c = {
										start: te({}, s, o[s]),
										end: te({}, s, o[s] + o[l] - r[l])
									};
								e.offsets.popper = ne({}, r, c[i])
							}
							return e
						}
					},
					offset: {
						order: 200,
						enabled: !0,
						fn: function (t, n) {
							var i = n.offset,
								o = t.placement,
								r = t.offsets,
								a = r.popper,
								s = r.reference,
								l = o.split("-")[0],
								c = void 0;
							return c = e(+i) ? [+i, 0] : q(i, a, s, l), "left" === l ? (a.top += c[0], a.left -= c[1]) : "right" === l ? (a.top += c[0], a.left += c[1]) : "top" === l ? (a.left += c[0], a.top -= c[1]) : "bottom" === l && (a.left += c[0], a.top += c[1]), t.popper = a, t
						},
						offset: 0
					},
					preventOverflow: {
						order: 300,
						enabled: !0,
						fn: function (e, t) {
							var n = t.boundariesElement || l(e.instance.popper),
								i = x(e.instance.popper, e.instance.reference, t.padding, n);
							t.boundaries = i;
							var o = t.priority,
								r = m(e.offsets.popper),
								a = {
									primary: function (e) {
										var n = r[e];
										return r[e] < i[e] && !t.escapeWithReference && (n = Math.max(r[e], i[e])), te({}, e, n)
									},
									secondary: function (e) {
										var n = "right" === e ? "left" : "top",
											o = r[n];
										return r[e] > i[e] && !t.escapeWithReference && (o = Math.min(r[n], i[e] - ("right" === e ? r.width : r.height))), te({}, n, o)
									}
								};
							return o.forEach(function (e) {
								var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
								r = ne({}, r, a[t](e))
							}), e.offsets.popper = r, e
						},
						priority: ["left", "right", "top", "bottom"],
						padding: 5,
						boundariesElement: "scrollParent"
					},
					keepTogether: {
						order: 400,
						enabled: !0,
						fn: function (e) {
							var t = m(e.offsets.popper),
								n = e.offsets.reference,
								i = e.placement.split("-")[0],
								o = Math.floor,
								r = -1 !== ["top", "bottom"].indexOf(i),
								a = r ? "right" : "bottom",
								s = r ? "left" : "top",
								l = r ? "width" : "height";
							return t[a] < o(n[s]) && (e.offsets.popper[s] = o(n[s]) - t[l]), t[s] > o(n[a]) && (e.offsets.popper[s] = o(n[a])), e
						}
					},
					arrow: {
						order: 500,
						enabled: !0,
						fn: function (e, t) {
							if (!V(e.instance.modifiers, "arrow", "keepTogether")) return e;
							var n = t.element;
							if ("string" == typeof n) {
								if (!(n = e.instance.popper.querySelector(n))) return e
							} else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
							var i = e.placement.split("-")[0],
								o = m(e.offsets.popper),
								r = e.offsets.reference,
								a = -1 !== ["left", "right"].indexOf(i),
								s = a ? "height" : "width",
								l = a ? "top" : "left",
								c = a ? "left" : "top",
								u = a ? "bottom" : "right",
								d = T(n)[s];
							r[u] - d < o[l] && (e.offsets.popper[l] -= o[l] - (r[u] - d)), r[l] + d > o[u] && (e.offsets.popper[l] += r[l] + d - o[u]);
							var h = r[l] + r[s] / 2 - d / 2 - m(e.offsets.popper)[l];
							return h = Math.max(Math.min(o[s] - d, h), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[l] = Math.floor(h), e.offsets.arrow[c] = "", e
						},
						element: "[x-arrow]"
					},
					flip: {
						order: 600,
						enabled: !0,
						fn: function (e, t) {
							if (O(e.instance.modifiers, "inner")) return e;
							if (e.flipped && e.placement === e.originalPlacement) return e;
							var n = x(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
								i = e.placement.split("-")[0],
								o = _(i),
								r = e.placement.split("-")[1] || "",
								a = [];
							switch (t.behavior) {
								case re.FLIP:
									a = [i, o];
									break;
								case re.CLOCKWISE:
									a = B(i);
									break;
								case re.COUNTERCLOCKWISE:
									a = B(i, !0);
									break;
								default:
									a = t.behavior
							}
							return a.forEach(function (s, l) {
								if (i !== s || a.length === l + 1) return e;
								i = e.placement.split("-")[0], o = _(i);
								var c = m(e.offsets.popper),
									u = e.offsets.reference,
									d = Math.floor,
									h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
									f = d(c.left) < d(n.left),
									p = d(c.right) > d(n.right),
									g = d(c.top) < d(n.top),
									v = d(c.bottom) > d(n.bottom),
									y = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && v,
									b = -1 !== ["top", "bottom"].indexOf(i),
									x = !!t.flipVariations && (b && "start" === r && f || b && "end" === r && p || !b && "start" === r && g || !b && "end" === r && v);
								(h || y || x) && (e.flipped = !0, (h || y) && (i = a[l + 1]), x && (r = j(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = ne({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = I(e.instance.modifiers, e, "flip"))
							}), e
						},
						behavior: "flip",
						padding: 5,
						boundariesElement: "viewport"
					},
					inner: {
						order: 700,
						enabled: !1,
						fn: function (e) {
							var t = e.placement,
								n = t.split("-")[0],
								i = m(e.offsets.popper),
								o = m(e.offsets.reference),
								r = -1 !== ["left", "right"].indexOf(n),
								a = -1 === ["top", "left"].indexOf(n);
							return i[r ? "left" : "top"] = o[t] - (a ? i[r ? "width" : "height"] : 0), e.placement = _(t), e.offsets.popper = m(i), e
						}
					},
					hide: {
						order: 800,
						enabled: !0,
						fn: function (e) {
							if (!V(e.instance.modifiers, "hide", "preventOverflow")) return e;
							var t = e.offsets.reference,
								n = E(e.instance.modifiers, function (e) {
									return "preventOverflow" === e.name
								}).boundaries;
							if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
								if (!0 === e.hide) return e;
								e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
							} else {
								if (!1 === e.hide) return e;
								e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
							}
							return e
						}
					},
					applyStyle: {
						order: 900,
						enabled: !0,
						fn: function (e, n) {
							var i = {
									position: e.offsets.popper.position
								},
								o = {
									"x-placement": e.placement
								},
								r = Math.round(e.offsets.popper.left),
								a = Math.round(e.offsets.popper.top),
								s = P("transform");
							return n.gpuAcceleration && s ? (i[s] = "translate3d(" + r + "px, " + a + "px, 0)", i.top = 0, i.left = 0, i.willChange = "transform") : (i.left = r, i.top = a, i.willChange = "top, left"), t(e.instance.popper, ne({}, i, e.styles)), H(e.instance.popper, ne({}, o, e.attributes)), e.offsets.arrow && t(e.arrowElement, e.offsets.arrow), e
						},
						onLoad: function (e, t, n, i, o) {
							var r = k(o, t, e),
								a = C(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
							return t.setAttribute("x-placement", a), n
						},
						gpuAcceleration: !0
					}
				}
			},
			se = function () {
				function e(i, o) {
					var r = this,
						a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					J(this, e), this.scheduleUpdate = function () {
						return requestAnimationFrame(r.update)
					}, this.update = G(this.update.bind(this)), this.options = ne({}, e.Defaults, a), this.state = {
						isDestroyed: !1,
						isCreated: !1,
						scrollParents: []
					}, this.reference = i.jquery ? i[0] : i, this.popper = o.jquery ? o[0] : o, t(this.popper, {
						position: "absolute"
					}), this.options.modifiers = {}, Object.keys(ne({}, e.Defaults.modifiers, a.modifiers)).forEach(function (t) {
						r.options.modifiers[t] = ne({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {})
					}), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
						return ne({
							name: e
						}, r.options.modifiers[e])
					}).sort(function (e, t) {
						return e.order - t.order
					}), this.modifiers.forEach(function (e) {
						e.enabled && n(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
					}), this.update();
					var s = this.options.eventsEnabled;
					s && this.enableEventListeners(), this.state.eventsEnabled = s
				}
				return ee(e, [{
					key: "update",
					value: function () {
						return D.call(this)
					}
				}, {
					key: "destroy",
					value: function () {
						return M.call(this)
					}
				}, {
					key: "enableEventListeners",
					value: function () {
						return N.call(this)
					}
				}, {
					key: "disableEventListeners",
					value: function () {
						return W.call(this)
					}
				}]), e
			}();
		return se.Utils = ("undefined" != typeof window ? window : global).PopperUtils, se.placements = ie, se.Defaults = ae, se
	}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
! function (e) {
	var t = e.fn.jquery.split(" ")[0].split(".");
	if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(),
function () {
	function e(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function t(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function n(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function (t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		r = function (e) {
			function t(e) {
				return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
			}

			function n(e) {
				return (e[0] || e).nodeType
			}

			function i() {
				return {
					bindType: a.end,
					delegateType: a.end,
					handle: function (t) {
						if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
					}
				}
			}

			function o() {
				if (window.QUnit) return !1;
				var e = document.createElement("bootstrap");
				for (var t in s)
					if (void 0 !== e.style[t]) return {
						end: s[t]
					};
				return !1
			}

			function r(t) {
				var n = this,
					i = !1;
				return e(this).one(l.TRANSITION_END, function () {
					i = !0
				}), setTimeout(function () {
					i || l.triggerTransitionEnd(n)
				}, t), this
			}
			var a = !1,
				s = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd otransitionend",
					transition: "transitionend"
				},
				l = {
					TRANSITION_END: "bsTransitionEnd",
					getUID: function (e) {
						do {
							e += ~~(1e6 * Math.random())
						} while (document.getElementById(e));
						return e
					},
					getSelectorFromElement: function (t) {
						var n = t.getAttribute("data-target");
						n && "#" !== n || (n = t.getAttribute("href") || "");
						try {
							return e(n).length > 0 ? n : null
						} catch (e) {
							return null
						}
					},
					reflow: function (e) {
						return e.offsetHeight
					},
					triggerTransitionEnd: function (t) {
						e(t).trigger(a.end)
					},
					supportsTransitionEnd: function () {
						return Boolean(a)
					},
					typeCheckConfig: function (e, i, o) {
						for (var r in o)
							if (o.hasOwnProperty(r)) {
								var a = o[r],
									s = i[r],
									l = s && n(s) ? "element" : t(s);
								if (!new RegExp(a).test(l)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + a + '".')
							}
					}
				};
			return a = o(), e.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (e.event.special[l.TRANSITION_END] = i()), l
		}(),
		a = (function (e) {
			var t = "alert",
				i = e.fn[t],
				a = {
					DISMISS: '[data-dismiss="alert"]'
				},
				s = {
					CLOSE: "close.bs.alert",
					CLOSED: "closed.bs.alert",
					CLICK_DATA_API: "click.bs.alert.data-api"
				},
				l = {
					ALERT: "alert",
					FADE: "fade",
					SHOW: "show"
				},
				c = function () {
					function t(e) {
						n(this, t), this._element = e
					}
					return t.prototype.close = function (e) {
						e = e || this._element;
						var t = this._getRootElement(e);
						this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
					}, t.prototype.dispose = function () {
						e.removeData(this._element, "bs.alert"), this._element = null
					}, t.prototype._getRootElement = function (t) {
						var n = r.getSelectorFromElement(t),
							i = !1;
						return n && (i = e(n)[0]), i || (i = e(t).closest("." + l.ALERT)[0]), i
					}, t.prototype._triggerCloseEvent = function (t) {
						var n = e.Event(s.CLOSE);
						return e(t).trigger(n), n
					}, t.prototype._removeElement = function (t) {
						var n = this;
						e(t).removeClass(l.SHOW), r.supportsTransitionEnd() && e(t).hasClass(l.FADE) ? e(t).one(r.TRANSITION_END, function (e) {
							return n._destroyElement(t, e)
						}).emulateTransitionEnd(150) : this._destroyElement(t)
					}, t.prototype._destroyElement = function (t) {
						e(t).detach().trigger(s.CLOSED).remove()
					}, t._jQueryInterface = function (n) {
						return this.each(function () {
							var i = e(this),
								o = i.data("bs.alert");
							o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this)
						})
					}, t._handleDismiss = function (e) {
						return function (t) {
							t && t.preventDefault(), e.close(this)
						}
					}, o(t, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}]), t
				}();
			e(document).on(s.CLICK_DATA_API, a.DISMISS, c._handleDismiss(new c)), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function () {
				return e.fn[t] = i, c._jQueryInterface
			}
		}(), function (e) {
			var t = "button",
				i = e.fn[t],
				r = {
					ACTIVE: "active",
					BUTTON: "btn",
					FOCUS: "focus"
				},
				a = {
					DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
					DATA_TOGGLE: '[data-toggle="buttons"]',
					INPUT: "input",
					ACTIVE: ".active",
					BUTTON: ".btn"
				},
				s = {
					CLICK_DATA_API: "click.bs.button.data-api",
					FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
				},
				l = function () {
					function t(e) {
						n(this, t), this._element = e
					}
					return t.prototype.toggle = function () {
						var t = !0,
							n = !0,
							i = e(this._element).closest(a.DATA_TOGGLE)[0];
						if (i) {
							var o = e(this._element).find(a.INPUT)[0];
							if (o) {
								if ("radio" === o.type)
									if (o.checked && e(this._element).hasClass(r.ACTIVE)) t = !1;
									else {
										var s = e(i).find(a.ACTIVE)[0];
										s && e(s).removeClass(r.ACTIVE)
									}
								if (t) {
									if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
									o.checked = !e(this._element).hasClass(r.ACTIVE), e(o).trigger("change")
								}
								o.focus(), n = !1
							}
						}
						n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(r.ACTIVE)), t && e(this._element).toggleClass(r.ACTIVE)
					}, t.prototype.dispose = function () {
						e.removeData(this._element, "bs.button"), this._element = null
					}, t._jQueryInterface = function (n) {
						return this.each(function () {
							var i = e(this).data("bs.button");
							i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
						})
					}, o(t, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}]), t
				}();
			e(document).on(s.CLICK_DATA_API, a.DATA_TOGGLE_CARROT, function (t) {
				t.preventDefault();
				var n = t.target;
				e(n).hasClass(r.BUTTON) || (n = e(n).closest(a.BUTTON)), l._jQueryInterface.call(e(n), "toggle")
			}).on(s.FOCUS_BLUR_DATA_API, a.DATA_TOGGLE_CARROT, function (t) {
				var n = e(t.target).closest(a.BUTTON)[0];
				e(n).toggleClass(r.FOCUS, /^focus(in)?$/.test(t.type))
			}), e.fn[t] = l._jQueryInterface, e.fn[t].Constructor = l, e.fn[t].noConflict = function () {
				return e.fn[t] = i, l._jQueryInterface
			}
		}(), function (e) {
			var t = "carousel",
				a = "bs.carousel",
				s = "." + a,
				l = e.fn[t],
				c = {
					interval: 5e3,
					keyboard: !0,
					slide: !1,
					pause: "hover",
					wrap: !0
				},
				u = {
					interval: "(number|boolean)",
					keyboard: "boolean",
					slide: "(boolean|string)",
					pause: "(string|boolean)",
					wrap: "boolean"
				},
				d = {
					NEXT: "next",
					PREV: "prev",
					LEFT: "left",
					RIGHT: "right"
				},
				h = {
					SLIDE: "slide" + s,
					SLID: "slid" + s,
					KEYDOWN: "keydown" + s,
					MOUSEENTER: "mouseenter" + s,
					MOUSELEAVE: "mouseleave" + s,
					TOUCHEND: "touchend" + s,
					LOAD_DATA_API: "load.bs.carousel.data-api",
					CLICK_DATA_API: "click.bs.carousel.data-api"
				},
				f = {
					CAROUSEL: "carousel",
					ACTIVE: "active",
					SLIDE: "slide",
					RIGHT: "carousel-item-right",
					LEFT: "carousel-item-left",
					NEXT: "carousel-item-next",
					PREV: "carousel-item-prev",
					ITEM: "carousel-item"
				},
				p = {
					ACTIVE: ".active",
					ACTIVE_ITEM: ".active.carousel-item",
					ITEM: ".carousel-item",
					NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
					INDICATORS: ".carousel-indicators",
					DATA_SLIDE: "[data-slide], [data-slide-to]",
					DATA_RIDE: '[data-ride="carousel"]'
				},
				m = function () {
					function l(t, i) {
						n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(p.INDICATORS)[0], this._addEventListeners()
					}
					return l.prototype.next = function () {
						this._isSliding || this._slide(d.NEXT)
					}, l.prototype.nextWhenVisible = function () {
						document.hidden || this.next()
					}, l.prototype.prev = function () {
						this._isSliding || this._slide(d.PREV)
					}, l.prototype.pause = function (t) {
						t || (this._isPaused = !0), e(this._element).find(p.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
					}, l.prototype.cycle = function (e) {
						e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
					}, l.prototype.to = function (t) {
						var n = this;
						this._activeElement = e(this._element).find(p.ACTIVE_ITEM)[0];
						var i = this._getItemIndex(this._activeElement);
						if (!(t > this._items.length - 1 || t < 0))
							if (this._isSliding) e(this._element).one(h.SLID, function () {
								return n.to(t)
							});
							else {
								if (i === t) return this.pause(), void this.cycle();
								var o = t > i ? d.NEXT : d.PREV;
								this._slide(o, this._items[t])
							}
					}, l.prototype.dispose = function () {
						e(this._element).off(s), e.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
					}, l.prototype._getConfig = function (n) {
						return n = e.extend({}, c, n), r.typeCheckConfig(t, n, u), n
					}, l.prototype._addEventListeners = function () {
						var t = this;
						this._config.keyboard && e(this._element).on(h.KEYDOWN, function (e) {
							return t._keydown(e)
						}), "hover" === this._config.pause && (e(this._element).on(h.MOUSEENTER, function (e) {
							return t.pause(e)
						}).on(h.MOUSELEAVE, function (e) {
							return t.cycle(e)
						}), "ontouchstart" in document.documentElement && e(this._element).on(h.TOUCHEND, function () {
							t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
								return t.cycle(e)
							}, 500 + t._config.interval)
						}))
					}, l.prototype._keydown = function (e) {
						if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
							case 37:
								e.preventDefault(), this.prev();
								break;
							case 39:
								e.preventDefault(), this.next();
								break;
							default:
								return
						}
					}, l.prototype._getItemIndex = function (t) {
						return this._items = e.makeArray(e(t).parent().find(p.ITEM)), this._items.indexOf(t)
					}, l.prototype._getItemByDirection = function (e, t) {
						var n = e === d.NEXT,
							i = e === d.PREV,
							o = this._getItemIndex(t),
							r = this._items.length - 1;
						if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
						var a = (o + (e === d.PREV ? -1 : 1)) % this._items.length;
						return -1 === a ? this._items[this._items.length - 1] : this._items[a]
					}, l.prototype._triggerSlideEvent = function (t, n) {
						var i = this._getItemIndex(t),
							o = this._getItemIndex(e(this._element).find(p.ACTIVE_ITEM)[0]),
							r = e.Event(h.SLIDE, {
								relatedTarget: t,
								direction: n,
								from: o,
								to: i
							});
						return e(this._element).trigger(r), r
					}, l.prototype._setActiveIndicatorElement = function (t) {
						if (this._indicatorsElement) {
							e(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);
							var n = this._indicatorsElement.children[this._getItemIndex(t)];
							n && e(n).addClass(f.ACTIVE)
						}
					}, l.prototype._slide = function (t, n) {
						var i = this,
							o = e(this._element).find(p.ACTIVE_ITEM)[0],
							a = this._getItemIndex(o),
							s = n || o && this._getItemByDirection(t, o),
							l = this._getItemIndex(s),
							c = Boolean(this._interval),
							u = void 0,
							m = void 0,
							g = void 0;
						if (t === d.NEXT ? (u = f.LEFT, m = f.NEXT, g = d.LEFT) : (u = f.RIGHT, m = f.PREV, g = d.RIGHT), s && e(s).hasClass(f.ACTIVE)) this._isSliding = !1;
						else if (!this._triggerSlideEvent(s, g).isDefaultPrevented() && o && s) {
							this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(s);
							var v = e.Event(h.SLID, {
								relatedTarget: s,
								direction: g,
								from: a,
								to: l
							});
							r.supportsTransitionEnd() && e(this._element).hasClass(f.SLIDE) ? (e(s).addClass(m), r.reflow(s), e(o).addClass(u), e(s).addClass(u), e(o).one(r.TRANSITION_END, function () {
								e(s).removeClass(u + " " + m).addClass(f.ACTIVE), e(o).removeClass(f.ACTIVE + " " + m + " " + u), i._isSliding = !1, setTimeout(function () {
									return e(i._element).trigger(v)
								}, 0)
							}).emulateTransitionEnd(600)) : (e(o).removeClass(f.ACTIVE), e(s).addClass(f.ACTIVE), this._isSliding = !1, e(this._element).trigger(v)), c && this.cycle()
						}
					}, l._jQueryInterface = function (t) {
						return this.each(function () {
							var n = e(this).data(a),
								o = e.extend({}, c, e(this).data());
							"object" === (void 0 === t ? "undefined" : i(t)) && e.extend(o, t);
							var r = "string" == typeof t ? t : o.slide;
							if (n || (n = new l(this, o), e(this).data(a, n)), "number" == typeof t) n.to(t);
							else if ("string" == typeof r) {
								if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
								n[r]()
							} else o.interval && (n.pause(), n.cycle())
						})
					}, l._dataApiClickHandler = function (t) {
						var n = r.getSelectorFromElement(this);
						if (n) {
							var i = e(n)[0];
							if (i && e(i).hasClass(f.CAROUSEL)) {
								var o = e.extend({}, e(i).data(), e(this).data()),
									s = this.getAttribute("data-slide-to");
								s && (o.interval = !1), l._jQueryInterface.call(e(i), o), s && e(i).data(a).to(s), t.preventDefault()
							}
						}
					}, o(l, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}, {
						key: "Default",
						get: function () {
							return c
						}
					}]), l
				}();
			e(document).on(h.CLICK_DATA_API, p.DATA_SLIDE, m._dataApiClickHandler), e(window).on(h.LOAD_DATA_API, function () {
				e(p.DATA_RIDE).each(function () {
					var t = e(this);
					m._jQueryInterface.call(t, t.data())
				})
			}), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
				return e.fn[t] = l, m._jQueryInterface
			}
		}(), function (e) {
			var t = "collapse",
				a = "bs.collapse",
				s = e.fn[t],
				l = {
					toggle: !0,
					parent: ""
				},
				c = {
					toggle: "boolean",
					parent: "string"
				},
				u = {
					SHOW: "show.bs.collapse",
					SHOWN: "shown.bs.collapse",
					HIDE: "hide.bs.collapse",
					HIDDEN: "hidden.bs.collapse",
					CLICK_DATA_API: "click.bs.collapse.data-api"
				},
				d = {
					SHOW: "show",
					COLLAPSE: "collapse",
					COLLAPSING: "collapsing",
					COLLAPSED: "collapsed"
				},
				h = {
					WIDTH: "width",
					HEIGHT: "height"
				},
				f = {
					ACTIVES: ".show, .collapsing",
					DATA_TOGGLE: '[data-toggle="collapse"]'
				},
				p = function () {
					function s(t, i) {
						n(this, s), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
						for (var o = e(f.DATA_TOGGLE), a = 0; a < o.length; a++) {
							var l = o[a],
								c = r.getSelectorFromElement(l);
							null !== c && e(c).filter(t).length > 0 && this._triggerArray.push(l)
						}
						this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
					}
					return s.prototype.toggle = function () {
						e(this._element).hasClass(d.SHOW) ? this.hide() : this.show()
					}, s.prototype.show = function () {
						var t = this;
						if (!this._isTransitioning && !e(this._element).hasClass(d.SHOW)) {
							var n = void 0,
								i = void 0;
							if (this._parent && ((n = e.makeArray(e(this._parent).children().children(f.ACTIVES))).length || (n = null)), !(n && (i = e(n).data(a)) && i._isTransitioning)) {
								var o = e.Event(u.SHOW);
								if (e(this._element).trigger(o), !o.isDefaultPrevented()) {
									n && (s._jQueryInterface.call(e(n), "hide"), i || e(n).data(a, null));
									var l = this._getDimension();
									e(this._element).removeClass(d.COLLAPSE).addClass(d.COLLAPSING), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(d.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
									var c = function () {
										e(t._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).addClass(d.SHOW), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(u.SHOWN)
									};
									if (r.supportsTransitionEnd()) {
										var h = "scroll" + (l[0].toUpperCase() + l.slice(1));
										e(this._element).one(r.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[h] + "px"
									} else c()
								}
							}
						}
					}, s.prototype.hide = function () {
						var t = this;
						if (!this._isTransitioning && e(this._element).hasClass(d.SHOW)) {
							var n = e.Event(u.HIDE);
							if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
								var i = this._getDimension();
								if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", r.reflow(this._element), e(this._element).addClass(d.COLLAPSING).removeClass(d.COLLAPSE).removeClass(d.SHOW), this._triggerArray.length)
									for (var o = 0; o < this._triggerArray.length; o++) {
										var a = this._triggerArray[o],
											s = r.getSelectorFromElement(a);
										null !== s && (e(s).hasClass(d.SHOW) || e(a).addClass(d.COLLAPSED).attr("aria-expanded", !1))
									}
								this.setTransitioning(!0);
								var l = function () {
									t.setTransitioning(!1), e(t._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).trigger(u.HIDDEN)
								};
								this._element.style[i] = "", r.supportsTransitionEnd() ? e(this._element).one(r.TRANSITION_END, l).emulateTransitionEnd(600) : l()
							}
						}
					}, s.prototype.setTransitioning = function (e) {
						this._isTransitioning = e
					}, s.prototype.dispose = function () {
						e.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
					}, s.prototype._getConfig = function (n) {
						return n = e.extend({}, l, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(t, n, c), n
					}, s.prototype._getDimension = function () {
						return e(this._element).hasClass(h.WIDTH) ? h.WIDTH : h.HEIGHT
					}, s.prototype._getParent = function () {
						var t = this,
							n = e(this._config.parent)[0],
							i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
						return e(n).find(i).each(function (e, n) {
							t._addAriaAndCollapsedClass(s._getTargetFromElement(n), [n])
						}), n
					}, s.prototype._addAriaAndCollapsedClass = function (t, n) {
						if (t) {
							var i = e(t).hasClass(d.SHOW);
							n.length && e(n).toggleClass(d.COLLAPSED, !i).attr("aria-expanded", i)
						}
					}, s._getTargetFromElement = function (t) {
						var n = r.getSelectorFromElement(t);
						return n ? e(n)[0] : null
					}, s._jQueryInterface = function (t) {
						return this.each(function () {
							var n = e(this),
								o = n.data(a),
								r = e.extend({}, l, n.data(), "object" === (void 0 === t ? "undefined" : i(t)) && t);
							if (!o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || (o = new s(this, r), n.data(a, o)), "string" == typeof t) {
								if (void 0 === o[t]) throw new Error('No method named "' + t + '"');
								o[t]()
							}
						})
					}, o(s, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}, {
						key: "Default",
						get: function () {
							return l
						}
					}]), s
				}();
			e(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (t) {
				/input|textarea/i.test(t.target.tagName) || t.preventDefault();
				var n = e(this),
					i = r.getSelectorFromElement(this);
				e(i).each(function () {
					var t = e(this),
						i = t.data(a) ? "toggle" : n.data();
					p._jQueryInterface.call(t, i)
				})
			}), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
				return e.fn[t] = s, p._jQueryInterface
			}
		}(), function (e) {
			if ("undefined" == typeof Popper) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
			var t = "dropdown",
				a = "bs.dropdown",
				s = "." + a,
				l = e.fn[t],
				c = new RegExp("38|40|27"),
				u = {
					HIDE: "hide" + s,
					HIDDEN: "hidden" + s,
					SHOW: "show" + s,
					SHOWN: "shown" + s,
					CLICK: "click" + s,
					CLICK_DATA_API: "click.bs.dropdown.data-api",
					KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
					KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
				},
				d = {
					DISABLED: "disabled",
					SHOW: "show",
					DROPUP: "dropup",
					MENURIGHT: "dropdown-menu-right",
					MENULEFT: "dropdown-menu-left"
				},
				h = {
					DATA_TOGGLE: '[data-toggle="dropdown"]',
					FORM_CHILD: ".dropdown form",
					MENU: ".dropdown-menu",
					NAVBAR_NAV: ".navbar-nav",
					VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
				},
				f = {
					TOP: "top-start",
					TOPEND: "top-end",
					BOTTOM: "bottom-start",
					BOTTOMEND: "bottom-end"
				},
				p = {
					placement: f.BOTTOM,
					offset: 0,
					flip: !0
				},
				m = {
					placement: "string",
					offset: "(number|string)",
					flip: "boolean"
				},
				g = function () {
					function l(e, t) {
						n(this, l), this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
					}
					return l.prototype.toggle = function () {
						if (!this._element.disabled && !e(this._element).hasClass(d.DISABLED)) {
							var t = l._getParentFromElement(this._element),
								n = e(this._menu).hasClass(d.SHOW);
							if (l._clearMenus(), !n) {
								var i = {
										relatedTarget: this._element
									},
									o = e.Event(u.SHOW, i);
								if (e(t).trigger(o), !o.isDefaultPrevented()) {
									var r = this._element;
									e(t).hasClass(d.DROPUP) && (e(this._menu).hasClass(d.MENULEFT) || e(this._menu).hasClass(d.MENURIGHT)) && (r = t), this._popper = new Popper(r, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !e(t).closest(h.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(d.SHOW), e(t).toggleClass(d.SHOW).trigger(e.Event(u.SHOWN, i))
								}
							}
						}
					}, l.prototype.dispose = function () {
						e.removeData(this._element, a), e(this._element).off(s), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
					}, l.prototype.update = function () {
						this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
					}, l.prototype._addEventListeners = function () {
						var t = this;
						e(this._element).on(u.CLICK, function (e) {
							e.preventDefault(), e.stopPropagation(), t.toggle()
						})
					}, l.prototype._getConfig = function (n) {
						var i = e(this._element).data();
						return void 0 !== i.placement && (i.placement = f[i.placement.toUpperCase()]), n = e.extend({}, this.constructor.Default, e(this._element).data(), n), r.typeCheckConfig(t, n, this.constructor.DefaultType), n
					}, l.prototype._getMenuElement = function () {
						if (!this._menu) {
							var t = l._getParentFromElement(this._element);
							this._menu = e(t).find(h.MENU)[0]
						}
						return this._menu
					}, l.prototype._getPlacement = function () {
						var t = e(this._element).parent(),
							n = this._config.placement;
						return t.hasClass(d.DROPUP) || this._config.placement === f.TOP ? (n = f.TOP, e(this._menu).hasClass(d.MENURIGHT) && (n = f.TOPEND)) : e(this._menu).hasClass(d.MENURIGHT) && (n = f.BOTTOMEND), n
					}, l.prototype._detectNavbar = function () {
						return e(this._element).closest(".navbar").length > 0
					}, l.prototype._getPopperConfig = function () {
						var e = {
							placement: this._getPlacement(),
							modifiers: {
								offset: {
									offset: this._config.offset
								},
								flip: {
									enabled: this._config.flip
								}
							}
						};
						return this._inNavbar && (e.modifiers.applyStyle = {
							enabled: !this._inNavbar
						}), e
					}, l._jQueryInterface = function (t) {
						return this.each(function () {
							var n = e(this).data(a),
								o = "object" === (void 0 === t ? "undefined" : i(t)) ? t : null;
							if (n || (n = new l(this, o), e(this).data(a, n)), "string" == typeof t) {
								if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
								n[t]()
							}
						})
					}, l._clearMenus = function (t) {
						if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
							for (var n = e.makeArray(e(h.DATA_TOGGLE)), i = 0; i < n.length; i++) {
								var o = l._getParentFromElement(n[i]),
									r = e(n[i]).data(a),
									s = {
										relatedTarget: n[i]
									};
								if (r) {
									var c = r._menu;
									if (e(o).hasClass(d.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
										var f = e.Event(u.HIDE, s);
										e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[i].setAttribute("aria-expanded", "false"), e(c).removeClass(d.SHOW), e(o).removeClass(d.SHOW).trigger(e.Event(u.HIDDEN, s)))
									}
								}
							}
					}, l._getParentFromElement = function (t) {
						var n = void 0,
							i = r.getSelectorFromElement(t);
						return i && (n = e(i)[0]), n || t.parentNode
					}, l._dataApiKeydownHandler = function (t) {
						if (!(!c.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(d.DISABLED)))) {
							var n = l._getParentFromElement(this),
								i = e(n).hasClass(d.SHOW);
							if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
								var o = e(n).find(h.VISIBLE_ITEMS).get();
								if (o.length) {
									var r = o.indexOf(t.target);
									38 === t.which && r > 0 && r--, 40 === t.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus()
								}
							} else {
								if (27 === t.which) {
									var a = e(n).find(h.DATA_TOGGLE)[0];
									e(a).trigger("focus")
								}
								e(this).trigger("click")
							}
						}
					}, o(l, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}, {
						key: "Default",
						get: function () {
							return p
						}
					}, {
						key: "DefaultType",
						get: function () {
							return m
						}
					}]), l
				}();
			e(document).on(u.KEYDOWN_DATA_API, h.DATA_TOGGLE, g._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, h.MENU, g._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, g._clearMenus).on(u.CLICK_DATA_API, h.DATA_TOGGLE, function (t) {
				t.preventDefault(), t.stopPropagation(), g._jQueryInterface.call(e(this), "toggle")
			}).on(u.CLICK_DATA_API, h.FORM_CHILD, function (e) {
				e.stopPropagation()
			}), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
				return e.fn[t] = l, g._jQueryInterface
			}
		}(), function (e) {
			var t = "modal",
				a = ".bs.modal",
				s = e.fn[t],
				l = {
					backdrop: !0,
					keyboard: !0,
					focus: !0,
					show: !0
				},
				c = {
					backdrop: "(boolean|string)",
					keyboard: "boolean",
					focus: "boolean",
					show: "boolean"
				},
				u = {
					HIDE: "hide.bs.modal",
					HIDDEN: "hidden.bs.modal",
					SHOW: "show.bs.modal",
					SHOWN: "shown.bs.modal",
					FOCUSIN: "focusin.bs.modal",
					RESIZE: "resize.bs.modal",
					CLICK_DISMISS: "click.dismiss.bs.modal",
					KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
					MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
					MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
					CLICK_DATA_API: "click.bs.modal.data-api"
				},
				d = {
					SCROLLBAR_MEASURER: "modal-scrollbar-measure",
					BACKDROP: "modal-backdrop",
					OPEN: "modal-open",
					FADE: "fade",
					SHOW: "show"
				},
				h = {
					DIALOG: ".modal-dialog",
					DATA_TOGGLE: '[data-toggle="modal"]',
					DATA_DISMISS: '[data-dismiss="modal"]',
					FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
					NAVBAR_TOGGLER: ".navbar-toggler"
				},
				f = function () {
					function s(t, i) {
						n(this, s), this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(h.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
					}
					return s.prototype.toggle = function (e) {
						return this._isShown ? this.hide() : this.show(e)
					}, s.prototype.show = function (t) {
						var n = this;
						if (!this._isTransitioning) {
							r.supportsTransitionEnd() && e(this._element).hasClass(d.FADE) && (this._isTransitioning = !0);
							var i = e.Event(u.SHOW, {
								relatedTarget: t
							});
							e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), e(document.body).addClass(d.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(u.CLICK_DISMISS, h.DATA_DISMISS, function (e) {
								return n.hide(e)
							}), e(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
								e(n._element).one(u.MOUSEUP_DISMISS, function (t) {
									e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
								})
							}), this._showBackdrop(function () {
								return n._showElement(t)
							}))
						}
					}, s.prototype.hide = function (t) {
						var n = this;
						if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
							var i = r.supportsTransitionEnd() && e(this._element).hasClass(d.FADE);
							i && (this._isTransitioning = !0);
							var o = e.Event(u.HIDE);
							e(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), e(document).off(u.FOCUSIN), e(this._element).removeClass(d.SHOW), e(this._element).off(u.CLICK_DISMISS), e(this._dialog).off(u.MOUSEDOWN_DISMISS), i ? e(this._element).one(r.TRANSITION_END, function (e) {
								return n._hideModal(e)
							}).emulateTransitionEnd(300) : this._hideModal())
						}
					}, s.prototype.dispose = function () {
						e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
					}, s.prototype.handleUpdate = function () {
						this._adjustDialog()
					}, s.prototype._getConfig = function (n) {
						return n = e.extend({}, l, n), r.typeCheckConfig(t, n, c), n
					}, s.prototype._showElement = function (t) {
						var n = this,
							i = r.supportsTransitionEnd() && e(this._element).hasClass(d.FADE);
						this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), e(this._element).addClass(d.SHOW), this._config.focus && this._enforceFocus();
						var o = e.Event(u.SHOWN, {
								relatedTarget: t
							}),
							a = function () {
								n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o)
							};
						i ? e(this._dialog).one(r.TRANSITION_END, a).emulateTransitionEnd(300) : a()
					}, s.prototype._enforceFocus = function () {
						var t = this;
						e(document).off(u.FOCUSIN).on(u.FOCUSIN, function (n) {
							document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
						})
					}, s.prototype._setEscapeEvent = function () {
						var t = this;
						this._isShown && this._config.keyboard ? e(this._element).on(u.KEYDOWN_DISMISS, function (e) {
							27 === e.which && (e.preventDefault(), t.hide())
						}) : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS)
					}, s.prototype._setResizeEvent = function () {
						var t = this;
						this._isShown ? e(window).on(u.RESIZE, function (e) {
							return t.handleUpdate(e)
						}) : e(window).off(u.RESIZE)
					}, s.prototype._hideModal = function () {
						var t = this;
						this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
							e(document.body).removeClass(d.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(u.HIDDEN)
						})
					}, s.prototype._removeBackdrop = function () {
						this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
					}, s.prototype._showBackdrop = function (t) {
						var n = this,
							i = e(this._element).hasClass(d.FADE) ? d.FADE : "";
						if (this._isShown && this._config.backdrop) {
							var o = r.supportsTransitionEnd() && i;
							if (this._backdrop = document.createElement("div"), this._backdrop.className = d.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(u.CLICK_DISMISS, function (e) {
									n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
								}), o && r.reflow(this._backdrop), e(this._backdrop).addClass(d.SHOW), !t) return;
							if (!o) return void t();
							e(this._backdrop).one(r.TRANSITION_END, t).emulateTransitionEnd(150)
						} else if (!this._isShown && this._backdrop) {
							e(this._backdrop).removeClass(d.SHOW);
							var a = function () {
								n._removeBackdrop(), t && t()
							};
							r.supportsTransitionEnd() && e(this._element).hasClass(d.FADE) ? e(this._backdrop).one(r.TRANSITION_END, a).emulateTransitionEnd(150) : a()
						} else t && t()
					}, s.prototype._adjustDialog = function () {
						var e = this._element.scrollHeight > document.documentElement.clientHeight;
						!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
					}, s.prototype._resetAdjustments = function () {
						this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
					}, s.prototype._checkScrollbar = function () {
						this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
					}, s.prototype._setScrollbar = function () {
						var t = this;
						if (this._isBodyOverflowing) {
							e(h.FIXED_CONTENT).each(function (n, i) {
								var o = e(i)[0].style.paddingRight,
									r = e(i).css("padding-right");
								e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
							}), e(h.NAVBAR_TOGGLER).each(function (n, i) {
								var o = e(i)[0].style.marginRight,
									r = e(i).css("margin-right");
								e(i).data("margin-right", o).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px")
							});
							var n = document.body.style.paddingRight,
								i = e("body").css("padding-right");
							e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
						}
					}, s.prototype._resetScrollbar = function () {
						e(h.FIXED_CONTENT).each(function (t, n) {
							var i = e(n).data("padding-right");
							void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
						}), e(h.NAVBAR_TOGGLER).each(function (t, n) {
							var i = e(n).data("margin-right");
							void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
						});
						var t = e("body").data("padding-right");
						void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
					}, s.prototype._getScrollbarWidth = function () {
						var e = document.createElement("div");
						e.className = d.SCROLLBAR_MEASURER, document.body.appendChild(e);
						var t = e.getBoundingClientRect().width - e.clientWidth;
						return document.body.removeChild(e), t
					}, s._jQueryInterface = function (t, n) {
						return this.each(function () {
							var o = e(this).data("bs.modal"),
								r = e.extend({}, s.Default, e(this).data(), "object" === (void 0 === t ? "undefined" : i(t)) && t);
							if (o || (o = new s(this, r), e(this).data("bs.modal", o)), "string" == typeof t) {
								if (void 0 === o[t]) throw new Error('No method named "' + t + '"');
								o[t](n)
							} else r.show && o.show(n)
						})
					}, o(s, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}, {
						key: "Default",
						get: function () {
							return l
						}
					}]), s
				}();
			e(document).on(u.CLICK_DATA_API, h.DATA_TOGGLE, function (t) {
				var n = this,
					i = void 0,
					o = r.getSelectorFromElement(this);
				o && (i = e(o)[0]);
				var a = e(i).data("bs.modal") ? "toggle" : e.extend({}, e(i).data(), e(this).data());
				"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
				var s = e(i).one(u.SHOW, function (t) {
					t.isDefaultPrevented() || s.one(u.HIDDEN, function () {
						e(n).is(":visible") && n.focus()
					})
				});
				f._jQueryInterface.call(e(i), a, this)
			}), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
				return e.fn[t] = s, f._jQueryInterface
			}
		}(), function (e) {
			var t = "scrollspy",
				a = e.fn[t],
				s = {
					offset: 10,
					method: "auto",
					target: ""
				},
				l = {
					offset: "number",
					method: "string",
					target: "(string|element)"
				},
				c = {
					ACTIVATE: "activate.bs.scrollspy",
					SCROLL: "scroll.bs.scrollspy",
					LOAD_DATA_API: "load.bs.scrollspy.data-api"
				},
				u = {
					DROPDOWN_ITEM: "dropdown-item",
					DROPDOWN_MENU: "dropdown-menu",
					ACTIVE: "active"
				},
				d = {
					DATA_SPY: '[data-spy="scroll"]',
					ACTIVE: ".active",
					NAV_LIST_GROUP: ".nav, .list-group",
					NAV_LINKS: ".nav-link",
					LIST_ITEMS: ".list-group-item",
					DROPDOWN: ".dropdown",
					DROPDOWN_ITEMS: ".dropdown-item",
					DROPDOWN_TOGGLE: ".dropdown-toggle"
				},
				h = {
					OFFSET: "offset",
					POSITION: "position"
				},
				f = function () {
					function a(t, i) {
						var o = this;
						n(this, a), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(c.SCROLL, function (e) {
							return o._process(e)
						}), this.refresh(), this._process()
					}
					return a.prototype.refresh = function () {
						var t = this,
							n = this._scrollElement !== this._scrollElement.window ? h.POSITION : h.OFFSET,
							i = "auto" === this._config.method ? n : this._config.method,
							o = i === h.POSITION ? this._getScrollTop() : 0;
						this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
							var n = void 0,
								a = r.getSelectorFromElement(t);
							if (a && (n = e(a)[0]), n) {
								var s = n.getBoundingClientRect();
								if (s.width || s.height) return [e(n)[i]().top + o, a]
							}
							return null
						}).filter(function (e) {
							return e
						}).sort(function (e, t) {
							return e[0] - t[0]
						}).forEach(function (e) {
							t._offsets.push(e[0]), t._targets.push(e[1])
						})
					}, a.prototype.dispose = function () {
						e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
					}, a.prototype._getConfig = function (n) {
						if ("string" != typeof (n = e.extend({}, s, n)).target) {
							var i = e(n.target).attr("id");
							i || (i = r.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
						}
						return r.typeCheckConfig(t, n, l), n
					}, a.prototype._getScrollTop = function () {
						return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
					}, a.prototype._getScrollHeight = function () {
						return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
					}, a.prototype._getOffsetHeight = function () {
						return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
					}, a.prototype._process = function () {
						var e = this._getScrollTop() + this._config.offset,
							t = this._getScrollHeight(),
							n = this._config.offset + t - this._getOffsetHeight();
						if (this._scrollHeight !== t && this.refresh(), e >= n) {
							var i = this._targets[this._targets.length - 1];
							this._activeTarget !== i && this._activate(i)
						} else {
							if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
							for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
						}
					}, a.prototype._activate = function (t) {
						this._activeTarget = t, this._clear();
						var n = this._selector.split(",");
						n = n.map(function (e) {
							return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
						});
						var i = e(n.join(","));
						i.hasClass(u.DROPDOWN_ITEM) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u.ACTIVE), i.addClass(u.ACTIVE)) : (i.addClass(u.ACTIVE), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u.ACTIVE)), e(this._scrollElement).trigger(c.ACTIVATE, {
							relatedTarget: t
						})
					}, a.prototype._clear = function () {
						e(this._selector).filter(d.ACTIVE).removeClass(u.ACTIVE)
					}, a._jQueryInterface = function (t) {
						return this.each(function () {
							var n = e(this).data("bs.scrollspy"),
								o = "object" === (void 0 === t ? "undefined" : i(t)) && t;
							if (n || (n = new a(this, o), e(this).data("bs.scrollspy", n)), "string" == typeof t) {
								if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
								n[t]()
							}
						})
					}, o(a, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}, {
						key: "Default",
						get: function () {
							return s
						}
					}]), a
				}();
			e(window).on(c.LOAD_DATA_API, function () {
				for (var t = e.makeArray(e(d.DATA_SPY)), n = t.length; n--;) {
					var i = e(t[n]);
					f._jQueryInterface.call(i, i.data())
				}
			}), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
				return e.fn[t] = a, f._jQueryInterface
			}
		}(), function (e) {
			var t = e.fn.tab,
				i = {
					HIDE: "hide.bs.tab",
					HIDDEN: "hidden.bs.tab",
					SHOW: "show.bs.tab",
					SHOWN: "shown.bs.tab",
					CLICK_DATA_API: "click.bs.tab.data-api"
				},
				a = {
					DROPDOWN_MENU: "dropdown-menu",
					ACTIVE: "active",
					DISABLED: "disabled",
					FADE: "fade",
					SHOW: "show"
				},
				s = {
					DROPDOWN: ".dropdown",
					NAV_LIST_GROUP: ".nav, .list-group",
					ACTIVE: ".active",
					DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
					DROPDOWN_TOGGLE: ".dropdown-toggle",
					DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
				},
				l = function () {
					function t(e) {
						n(this, t), this._element = e
					}
					return t.prototype.show = function () {
						var t = this;
						if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(a.ACTIVE) || e(this._element).hasClass(a.DISABLED))) {
							var n = void 0,
								o = void 0,
								l = e(this._element).closest(s.NAV_LIST_GROUP)[0],
								c = r.getSelectorFromElement(this._element);
							l && (o = e.makeArray(e(l).find(s.ACTIVE)), o = o[o.length - 1]);
							var u = e.Event(i.HIDE, {
									relatedTarget: this._element
								}),
								d = e.Event(i.SHOW, {
									relatedTarget: o
								});
							if (o && e(o).trigger(u), e(this._element).trigger(d), !d.isDefaultPrevented() && !u.isDefaultPrevented()) {
								c && (n = e(c)[0]), this._activate(this._element, l);
								var h = function () {
									var n = e.Event(i.HIDDEN, {
											relatedTarget: t._element
										}),
										r = e.Event(i.SHOWN, {
											relatedTarget: o
										});
									e(o).trigger(n), e(t._element).trigger(r)
								};
								n ? this._activate(n, n.parentNode, h) : h()
							}
						}
					}, t.prototype.dispose = function () {
						e.removeData(this._element, "bs.tab"), this._element = null
					}, t.prototype._activate = function (t, n, i) {
						var o = this,
							l = e(n).find(s.ACTIVE)[0],
							c = i && r.supportsTransitionEnd() && l && e(l).hasClass(a.FADE),
							u = function () {
								return o._transitionComplete(t, l, c, i)
							};
						l && c ? e(l).one(r.TRANSITION_END, u).emulateTransitionEnd(150) : u(), l && e(l).removeClass(a.SHOW)
					}, t.prototype._transitionComplete = function (t, n, i, o) {
						if (n) {
							e(n).removeClass(a.ACTIVE);
							var l = e(n.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
							l && e(l).removeClass(a.ACTIVE), n.setAttribute("aria-expanded", !1)
						}
						if (e(t).addClass(a.ACTIVE), t.setAttribute("aria-expanded", !0), i ? (r.reflow(t), e(t).addClass(a.SHOW)) : e(t).removeClass(a.FADE), t.parentNode && e(t.parentNode).hasClass(a.DROPDOWN_MENU)) {
							var c = e(t).closest(s.DROPDOWN)[0];
							c && e(c).find(s.DROPDOWN_TOGGLE).addClass(a.ACTIVE), t.setAttribute("aria-expanded", !0)
						}
						o && o()
					}, t._jQueryInterface = function (n) {
						return this.each(function () {
							var i = e(this),
								o = i.data("bs.tab");
							if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
								if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
								o[n]()
							}
						})
					}, o(t, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}]), t
				}();
			e(document).on(i.CLICK_DATA_API, s.DATA_TOGGLE, function (t) {
				t.preventDefault(), l._jQueryInterface.call(e(this), "show")
			}), e.fn.tab = l._jQueryInterface, e.fn.tab.Constructor = l, e.fn.tab.noConflict = function () {
				return e.fn.tab = t, l._jQueryInterface
			}
		}(), function (e) {
			if ("undefined" == typeof Popper) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
			var t = "tooltip",
				a = ".bs.tooltip",
				s = e.fn[t],
				l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
				c = {
					animation: "boolean",
					template: "string",
					title: "(string|element|function)",
					trigger: "string",
					delay: "(number|object)",
					html: "boolean",
					selector: "(string|boolean)",
					placement: "(string|function)",
					offset: "(number|string)",
					container: "(string|element|boolean)",
					fallbackPlacement: "(string|array)"
				},
				u = {
					AUTO: "auto",
					TOP: "top",
					RIGHT: "right",
					BOTTOM: "bottom",
					LEFT: "left"
				},
				d = {
					animation: !0,
					template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
					trigger: "hover focus",
					title: "",
					delay: 0,
					html: !1,
					selector: !1,
					placement: "top",
					offset: 0,
					container: !1,
					fallbackPlacement: "flip"
				},
				h = {
					SHOW: "show",
					OUT: "out"
				},
				f = {
					HIDE: "hide" + a,
					HIDDEN: "hidden" + a,
					SHOW: "show" + a,
					SHOWN: "shown" + a,
					INSERTED: "inserted" + a,
					CLICK: "click" + a,
					FOCUSIN: "focusin" + a,
					FOCUSOUT: "focusout" + a,
					MOUSEENTER: "mouseenter" + a,
					MOUSELEAVE: "mouseleave" + a
				},
				p = {
					FADE: "fade",
					SHOW: "show"
				},
				m = {
					TOOLTIP: ".tooltip",
					TOOLTIP_INNER: ".tooltip-inner",
					ARROW: ".arrow"
				},
				g = {
					HOVER: "hover",
					FOCUS: "focus",
					CLICK: "click",
					MANUAL: "manual"
				},
				v = function () {
					function s(e, t) {
						n(this, s), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
					}
					return s.prototype.enable = function () {
						this._isEnabled = !0
					}, s.prototype.disable = function () {
						this._isEnabled = !1
					}, s.prototype.toggleEnabled = function () {
						this._isEnabled = !this._isEnabled
					}, s.prototype.toggle = function (t) {
						if (t) {
							var n = this.constructor.DATA_KEY,
								i = e(t.currentTarget).data(n);
							i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
						} else {
							if (e(this.getTipElement()).hasClass(p.SHOW)) return void this._leave(null, this);
							this._enter(null, this)
						}
					}, s.prototype.dispose = function () {
						clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
					}, s.prototype.show = function () {
						var t = this;
						if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
						var n = e.Event(this.constructor.Event.SHOW);
						if (this.isWithContent() && this._isEnabled) {
							e(this.element).trigger(n);
							var i = e.contains(this.element.ownerDocument.documentElement, this.element);
							if (n.isDefaultPrevented() || !i) return;
							var o = this.getTipElement(),
								a = r.getUID(this.constructor.NAME);
							o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(o).addClass(p.FADE);
							var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
								c = this._getAttachment(l);
							this.addAttachmentClass(c);
							var u = !1 === this.config.container ? document.body : e(this.config.container);
							e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, o, {
								placement: c,
								modifiers: {
									offset: {
										offset: this.config.offset
									},
									flip: {
										behavior: this.config.fallbackPlacement
									},
									arrow: {
										element: m.ARROW
									}
								},
								onCreate: function (e) {
									e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
								},
								onUpdate: function (e) {
									t._handlePopperPlacementChange(e)
								}
							}), e(o).addClass(p.SHOW), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
							var d = function () {
								t.config.animation && t._fixTransition();
								var n = t._hoverState;
								t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === h.OUT && t._leave(null, t)
							};
							r.supportsTransitionEnd() && e(this.tip).hasClass(p.FADE) ? e(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(s._TRANSITION_DURATION) : d()
						}
					}, s.prototype.hide = function (t) {
						var n = this,
							i = this.getTipElement(),
							o = e.Event(this.constructor.Event.HIDE),
							a = function () {
								n._hoverState !== h.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
							};
						e(this.element).trigger(o), o.isDefaultPrevented() || (e(i).removeClass(p.SHOW), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, r.supportsTransitionEnd() && e(this.tip).hasClass(p.FADE) ? e(i).one(r.TRANSITION_END, a).emulateTransitionEnd(150) : a(), this._hoverState = "")
					}, s.prototype.update = function () {
						null !== this._popper && this._popper.scheduleUpdate()
					}, s.prototype.isWithContent = function () {
						return Boolean(this.getTitle())
					}, s.prototype.addAttachmentClass = function (t) {
						e(this.getTipElement()).addClass("bs-tooltip-" + t)
					}, s.prototype.getTipElement = function () {
						return this.tip = this.tip || e(this.config.template)[0]
					}, s.prototype.setContent = function () {
						var t = e(this.getTipElement());
						this.setElementContent(t.find(m.TOOLTIP_INNER), this.getTitle()), t.removeClass(p.FADE + " " + p.SHOW)
					}, s.prototype.setElementContent = function (t, n) {
						var o = this.config.html;
						"object" === (void 0 === n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()): t[o ? "html" : "text"](n)
					}, s.prototype.getTitle = function () {
						var e = this.element.getAttribute("data-original-title");
						return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
					}, s.prototype._getAttachment = function (e) {
						return u[e.toUpperCase()]
					}, s.prototype._setListeners = function () {
						var t = this;
						this.config.trigger.split(" ").forEach(function (n) {
							if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
								return t.toggle(e)
							});
							else if (n !== g.MANUAL) {
								var i = n === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
									o = n === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
								e(t.element).on(i, t.config.selector, function (e) {
									return t._enter(e)
								}).on(o, t.config.selector, function (e) {
									return t._leave(e)
								})
							}
							e(t.element).closest(".modal").on("hide.bs.modal", function () {
								return t.hide()
							})
						}), this.config.selector ? this.config = e.extend({}, this.config, {
							trigger: "manual",
							selector: ""
						}) : this._fixTitle()
					}, s.prototype._fixTitle = function () {
						var e = i(this.element.getAttribute("data-original-title"));
						(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
					}, s.prototype._enter = function (t, n) {
						var i = this.constructor.DATA_KEY;
						(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] = !0), e(n.getTipElement()).hasClass(p.SHOW) || n._hoverState === h.SHOW ? n._hoverState = h.SHOW : (clearTimeout(n._timeout), n._hoverState = h.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
							n._hoverState === h.SHOW && n.show()
						}, n.config.delay.show) : n.show())
					}, s.prototype._leave = function (t, n) {
						var i = this.constructor.DATA_KEY;
						(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = h.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
							n._hoverState === h.OUT && n.hide()
						}, n.config.delay.hide) : n.hide())
					}, s.prototype._isWithActiveTrigger = function () {
						for (var e in this._activeTrigger)
							if (this._activeTrigger[e]) return !0;
						return !1
					}, s.prototype._getConfig = function (n) {
						return (n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && "number" == typeof n.delay && (n.delay = {
							show: n.delay,
							hide: n.delay
						}), n.title && "number" == typeof n.title && (n.title = n.title.toString()), n.content && "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(t, n, this.constructor.DefaultType), n
					}, s.prototype._getDelegateConfig = function () {
						var e = {};
						if (this.config)
							for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
						return e
					}, s.prototype._cleanTipClass = function () {
						var t = e(this.getTipElement()),
							n = t.attr("class").match(l);
						null !== n && n.length > 0 && t.removeClass(n.join(""))
					}, s.prototype._handlePopperPlacementChange = function (e) {
						this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
					}, s.prototype._fixTransition = function () {
						var t = this.getTipElement(),
							n = this.config.animation;
						null === t.getAttribute("x-placement") && (e(t).removeClass(p.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
					}, s._jQueryInterface = function (t) {
						return this.each(function () {
							var n = e(this).data("bs.tooltip"),
								o = "object" === (void 0 === t ? "undefined" : i(t)) && t;
							if ((n || !/dispose|hide/.test(t)) && (n || (n = new s(this, o), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
								if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
								n[t]()
							}
						})
					}, o(s, null, [{
						key: "VERSION",
						get: function () {
							return "4.0.0-alpha.6"
						}
					}, {
						key: "Default",
						get: function () {
							return d
						}
					}, {
						key: "NAME",
						get: function () {
							return t
						}
					}, {
						key: "DATA_KEY",
						get: function () {
							return "bs.tooltip"
						}
					}, {
						key: "Event",
						get: function () {
							return f
						}
					}, {
						key: "EVENT_KEY",
						get: function () {
							return a
						}
					}, {
						key: "DefaultType",
						get: function () {
							return c
						}
					}]), s
				}();
			return e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
				return e.fn[t] = s, v._jQueryInterface
			}, v
		}());
	! function (r) {
		var s = "popover",
			l = ".bs.popover",
			c = r.fn[s],
			u = new RegExp("(^|\\s)bs-popover\\S+", "g"),
			d = r.extend({}, a.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
			}),
			h = r.extend({}, a.DefaultType, {
				content: "(string|element|function)"
			}),
			f = {
				FADE: "fade",
				SHOW: "show"
			},
			p = {
				TITLE: ".popover-header",
				CONTENT: ".popover-body"
			},
			m = {
				HIDE: "hide" + l,
				HIDDEN: "hidden" + l,
				SHOW: "show" + l,
				SHOWN: "shown" + l,
				INSERTED: "inserted" + l,
				CLICK: "click" + l,
				FOCUSIN: "focusin" + l,
				FOCUSOUT: "focusout" + l,
				MOUSEENTER: "mouseenter" + l,
				MOUSELEAVE: "mouseleave" + l
			},
			g = function (a) {
				function c() {
					return n(this, c), e(this, a.apply(this, arguments))
				}
				return t(c, a), c.prototype.isWithContent = function () {
					return this.getTitle() || this._getContent()
				}, c.prototype.addAttachmentClass = function (e) {
					r(this.getTipElement()).addClass("bs-popover-" + e)
				}, c.prototype.getTipElement = function () {
					return this.tip = this.tip || r(this.config.template)[0]
				}, c.prototype.setContent = function () {
					var e = r(this.getTipElement());
					this.setElementContent(e.find(p.TITLE), this.getTitle()), this.setElementContent(e.find(p.CONTENT), this._getContent()), e.removeClass(f.FADE + " " + f.SHOW)
				}, c.prototype._getContent = function () {
					return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
				}, c.prototype._cleanTipClass = function () {
					var e = r(this.getTipElement()),
						t = e.attr("class").match(u);
					null !== t && t.length > 0 && e.removeClass(t.join(""))
				}, c._jQueryInterface = function (e) {
					return this.each(function () {
						var t = r(this).data("bs.popover"),
							n = "object" === (void 0 === e ? "undefined" : i(e)) ? e : null;
						if ((t || !/destroy|hide/.test(e)) && (t || (t = new c(this, n), r(this).data("bs.popover", t)), "string" == typeof e)) {
							if (void 0 === t[e]) throw new Error('No method named "' + e + '"');
							t[e]()
						}
					})
				}, o(c, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0-alpha.6"
					}
				}, {
					key: "Default",
					get: function () {
						return d
					}
				}, {
					key: "NAME",
					get: function () {
						return s
					}
				}, {
					key: "DATA_KEY",
					get: function () {
						return "bs.popover"
					}
				}, {
					key: "Event",
					get: function () {
						return m
					}
				}, {
					key: "EVENT_KEY",
					get: function () {
						return l
					}
				}, {
					key: "DefaultType",
					get: function () {
						return h
					}
				}]), c
			}(a);
		r.fn[s] = g._jQueryInterface, r.fn[s].Constructor = g, r.fn[s].noConflict = function () {
			return r.fn[s] = c, g._jQueryInterface
		}
	}()
}(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function (e, t, n, i, o) {
			return jQuery.easing[jQuery.easing.def](e, t, n, i, o)
		},
		easeInQuad: function (e, t, n, i, o) {
			return i * (t /= o) * t + n
		},
		easeOutQuad: function (e, t, n, i, o) {
			return -i * (t /= o) * (t - 2) + n
		},
		easeInOutQuad: function (e, t, n, i, o) {
			return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
		},
		easeInCubic: function (e, t, n, i, o) {
			return i * (t /= o) * t * t + n
		},
		easeOutCubic: function (e, t, n, i, o) {
			return i * ((t = t / o - 1) * t * t + 1) + n
		},
		easeInOutCubic: function (e, t, n, i, o) {
			return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
		},
		easeInQuart: function (e, t, n, i, o) {
			return i * (t /= o) * t * t * t + n
		},
		easeOutQuart: function (e, t, n, i, o) {
			return -i * ((t = t / o - 1) * t * t * t - 1) + n
		},
		easeInOutQuart: function (e, t, n, i, o) {
			return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
		},
		easeInQuint: function (e, t, n, i, o) {
			return i * (t /= o) * t * t * t * t + n
		},
		easeOutQuint: function (e, t, n, i, o) {
			return i * ((t = t / o - 1) * t * t * t * t + 1) + n
		},
		easeInOutQuint: function (e, t, n, i, o) {
			return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
		},
		easeInSine: function (e, t, n, i, o) {
			return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
		},
		easeOutSine: function (e, t, n, i, o) {
			return i * Math.sin(t / o * (Math.PI / 2)) + n
		},
		easeInOutSine: function (e, t, n, i, o) {
			return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
		},
		easeInExpo: function (e, t, n, i, o) {
			return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
		},
		easeOutExpo: function (e, t, n, i, o) {
			return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
		},
		easeInOutExpo: function (e, t, n, i, o) {
			return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
		},
		easeInCirc: function (e, t, n, i, o) {
			return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
		},
		easeOutCirc: function (e, t, n, i, o) {
			return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
		},
		easeInOutCirc: function (e, t, n, i, o) {
			return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
		},
		easeInElastic: function (e, t, n, i, o) {
			var r = 1.70158,
				a = 0,
				s = i;
			if (0 == t) return n;
			if (1 == (t /= o)) return n + i;
			if (a || (a = .3 * o), s < Math.abs(i)) {
				s = i;
				r = a / 4
			} else r = a / (2 * Math.PI) * Math.asin(i / s);
			return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) + n
		},
		easeOutElastic: function (e, t, n, i, o) {
			var r = 1.70158,
				a = 0,
				s = i;
			if (0 == t) return n;
			if (1 == (t /= o)) return n + i;
			if (a || (a = .3 * o), s < Math.abs(i)) {
				s = i;
				r = a / 4
			} else r = a / (2 * Math.PI) * Math.asin(i / s);
			return s * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / a) + i + n
		},
		easeInOutElastic: function (e, t, n, i, o) {
			var r = 1.70158,
				a = 0,
				s = i;
			if (0 == t) return n;
			if (2 == (t /= o / 2)) return n + i;
			if (a || (a = o * (.3 * 1.5)), s < Math.abs(i)) {
				s = i;
				r = a / 4
			} else r = a / (2 * Math.PI) * Math.asin(i / s);
			return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * .5 + i + n
		},
		easeInBack: function (e, t, n, i, o, r) {
			return void 0 == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n
		},
		easeOutBack: function (e, t, n, i, o, r) {
			return void 0 == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n
		},
		easeInOutBack: function (e, t, n, i, o, r) {
			return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
		},
		easeInBounce: function (e, t, n, i, o) {
			return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n
		},
		easeOutBounce: function (e, t, n, i, o) {
			return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
		},
		easeInOutBounce: function (e, t, n, i, o) {
			return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
		}
	}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (e) {
		function t(e) {
			var t = e.length,
				i = n.type(e);
			return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
		}
		if (!e.jQuery) {
			var n = function (e, t) {
				return new n.fn.init(e, t)
			};
			n.isWindow = function (e) {
				return null != e && e == e.window
			}, n.type = function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e
			}, n.isArray = Array.isArray || function (e) {
				return "array" === n.type(e)
			}, n.isPlainObject = function (e) {
				var t;
				if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
				try {
					if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (e) {
					return !1
				}
				for (t in e);
				return void 0 === t || r.call(e, t)
			}, n.each = function (e, n, i) {
				var o = 0,
					r = e.length,
					a = t(e);
				if (i) {
					if (a)
						for (; r > o && !1 !== n.apply(e[o], i); o++);
					else
						for (o in e)
							if (!1 === n.apply(e[o], i)) break
				} else if (a)
					for (; r > o && !1 !== n.call(e[o], o, e[o]); o++);
				else
					for (o in e)
						if (!1 === n.call(e[o], o, e[o])) break;
				return e
			}, n.data = function (e, t, o) {
				if (void 0 === o) {
					var r = (a = e[n.expando]) && i[a];
					if (void 0 === t) return r;
					if (r && t in r) return r[t]
				} else if (void 0 !== t) {
					var a = e[n.expando] || (e[n.expando] = ++n.uuid);
					return i[a] = i[a] || {}, i[a][t] = o, o
				}
			}, n.removeData = function (e, t) {
				var o = e[n.expando],
					r = o && i[o];
				r && n.each(t, function (e, t) {
					delete r[t]
				})
			}, n.extend = function () {
				var e, t, i, o, r, a, s = arguments[0] || {},
					l = 1,
					c = arguments.length,
					u = !1;
				for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
					if (null != (r = arguments[l]))
						for (o in r) e = s[o], i = r[o], s !== i && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[o] = n.extend(u, a, i)) : void 0 !== i && (s[o] = i));
				return s
			}, n.queue = function (e, i, o) {
				if (e) {
					i = (i || "fx") + "queue";
					var r = n.data(e, i);
					return o ? (!r || n.isArray(o) ? r = n.data(e, i, function (e, n) {
						var i = n || [];
						return null != e && (t(Object(e)) ? function (e, t) {
							for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
							if (n !== n)
								for (; void 0 !== t[i];) e[o++] = t[i++];
							e.length = o
						}(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
					}(o)) : r.push(o), r) : r || []
				}
			}, n.dequeue = function (e, t) {
				n.each(e.nodeType ? [e] : e, function (e, i) {
					t = t || "fx";
					var o = n.queue(i, t),
						r = o.shift();
					"inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(i, function () {
						n.dequeue(i, t)
					}))
				})
			}, n.fn = n.prototype = {
				init: function (e) {
					if (e.nodeType) return this[0] = e, this;
					throw new Error("Not a DOM node.")
				},
				offset: function () {
					var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
						top: 0,
						left: 0
					};
					return {
						top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
						left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
					}
				},
				position: function () {
					function e() {
						for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
						return e || document
					}
					var t = this[0],
						e = e.apply(t),
						i = this.offset(),
						o = /^(?:body|html)$/i.test(e.nodeName) ? {
							top: 0,
							left: 0
						} : n(e).offset();
					return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
						top: i.top - o.top,
						left: i.left - o.left
					}
				}
			};
			var i = {};
			n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
			for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
			n.fn.init.prototype = n.fn, e.Velocity = {
				Utilities: n
			}
		}
	}(window), function (e) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
	}(function () {
		return function (e, t, n, i) {
			function o(e) {
				for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
					var o = e[t];
					o && i.push(o)
				}
				return i
			}

			function r(e) {
				return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
			}

			function a(e) {
				var t = h.data(e, "velocity");
				return null === t ? i : t
			}

			function s(e) {
				return function (t) {
					return Math.round(t * e) * (1 / e)
				}
			}

			function l(e, n, i, o) {
				function r(e, t) {
					return 1 - 3 * t + 3 * e
				}

				function a(e, t) {
					return 3 * t - 6 * e
				}

				function s(e) {
					return 3 * e
				}

				function l(e, t, n) {
					return ((r(t, n) * e + a(t, n)) * e + s(t)) * e
				}

				function c(e, t, n) {
					return 3 * r(t, n) * e * e + 2 * a(t, n) * e + s(t)
				}

				function u(t, n) {
					for (var o = 0; m > o; ++o) {
						var r = c(n, e, i);
						if (0 === r) return n;
						n -= (l(n, e, i) - t) / r
					}
					return n
				}

				function d() {
					for (var t = 0; b > t; ++t) k[t] = l(t * x, e, i)
				}

				function h(t, n, o) {
					var r, a, s = 0;
					do {
						a = n + (o - n) / 2, r = l(a, e, i) - t, r > 0 ? o = a : n = a
					} while (Math.abs(r) > v && ++s < y);
					return a
				}

				function f(t) {
					for (var n = 0, o = 1, r = b - 1; o != r && k[o] <= t; ++o) n += x;
					var a = n + (t - k[--o]) / (k[o + 1] - k[o]) * x,
						s = c(a, e, i);
					return s >= g ? u(t, a) : 0 == s ? a : h(t, n, n + x)
				}

				function p() {
					T = !0, (e != n || i != o) && d()
				}
				var m = 4,
					g = .001,
					v = 1e-7,
					y = 10,
					b = 11,
					x = 1 / (b - 1),
					w = "Float32Array" in t;
				if (4 !== arguments.length) return !1;
				for (var C = 0; 4 > C; ++C)
					if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
				e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
				var k = w ? new Float32Array(b) : new Array(b),
					T = !1,
					_ = function (t) {
						return T || p(), e === n && i === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), n, o)
					};
				_.getControlPoints = function () {
					return [{
						x: e,
						y: n
					}, {
						x: i,
						y: o
					}]
				};
				var S = "generateBezier(" + [e, n, i, o] + ")";
				return _.toString = function () {
					return S
				}, _
			}

			function c(e, t) {
				var n = e;
				return m.isString(e) ? b.Easings[e] || (n = !1) : n = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === n && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
			}

			function u(e) {
				if (e) {
					var t = (new Date).getTime(),
						n = b.State.calls.length;
					n > 1e4 && (b.State.calls = o(b.State.calls));
					for (var r = 0; n > r; r++)
						if (b.State.calls[r]) {
							var s = b.State.calls[r],
								l = s[0],
								c = s[2],
								f = s[3],
								p = !!f,
								g = null;
							f || (f = b.State.calls[r][3] = t - 16);
							for (var v = Math.min((t - f) / c.duration, 1), y = 0, x = l.length; x > y; y++) {
								var C = l[y],
									T = C.element;
								if (a(T)) {
									var _ = !1;
									if (c.display !== i && null !== c.display && "none" !== c.display) {
										if ("flex" === c.display) {
											var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
											h.each(S, function (e, t) {
												w.setPropertyValue(T, "display", t)
											})
										}
										w.setPropertyValue(T, "display", c.display)
									}
									c.visibility !== i && "hidden" !== c.visibility && w.setPropertyValue(T, "visibility", c.visibility);
									for (var E in C)
										if ("element" !== E) {
											var A, I = C[E],
												D = m.isString(I.easing) ? b.Easings[I.easing] : I.easing;
											if (1 === v) A = I.endValue;
											else {
												var O = I.endValue - I.startValue;
												if (A = I.startValue + O * D(v, c, O), !p && A === I.currentValue) continue
											}
											if (I.currentValue = A, "tween" === E) g = A;
											else {
												if (w.Hooks.registered[E]) {
													var P = w.Hooks.getRoot(E),
														M = a(T).rootPropertyValueCache[P];
													M && (I.rootPropertyValue = M)
												}
												var L = w.setPropertyValue(T, E, I.currentValue + (0 === parseFloat(A) ? "" : I.unitType), I.rootPropertyValue, I.scrollData);
												w.Hooks.registered[E] && (a(T).rootPropertyValueCache[P] = w.Normalizations.registered[P] ? w.Normalizations.registered[P]("extract", null, L[1]) : L[1]), "transform" === L[0] && (_ = !0)
											}
										}
									c.mobileHA && a(T).transformCache.translate3d === i && (a(T).transformCache.translate3d = "(0px, 0px, 0px)", _ = !0), _ && w.flushTransformCache(T)
								}
							}
							c.display !== i && "none" !== c.display && (b.State.calls[r][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[r][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], v, Math.max(0, f + c.duration - t), f, g), 1 === v && d(r)
						}
				}
				b.State.isTicking && k(u)
			}

			function d(e, t) {
				if (!b.State.calls[e]) return !1;
				for (var n = b.State.calls[e][0], o = b.State.calls[e][1], r = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, c = 0, u = n.length; u > c; c++) {
					var d = n[c].element;
					if (t || r.loop || ("none" === r.display && w.setPropertyValue(d, "display", r.display), "hidden" === r.visibility && w.setPropertyValue(d, "visibility", r.visibility)), !0 !== r.loop && (h.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(h.queue(d)[1])) && a(d)) {
						a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
						var f = !1;
						h.each(w.Lists.transforms3D, function (e, t) {
							var n = /^scale/.test(t) ? 1 : 0,
								o = a(d).transformCache[t];
							a(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && (f = !0, delete a(d).transformCache[t])
						}), r.mobileHA && (f = !0, delete a(d).transformCache.translate3d), f && w.flushTransformCache(d), w.Values.removeClass(d, "velocity-animating")
					}
					if (!t && r.complete && !r.loop && c === u - 1) try {
						r.complete.call(o, o)
					} catch (e) {
						setTimeout(function () {
							throw e
						}, 1)
					}
					s && !0 !== r.loop && s(o), a(d) && !0 === r.loop && !t && (h.each(a(d).tweensContainer, function (e, t) {
						/^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
					}), b(d, "reverse", {
						loop: !0,
						delay: r.delay
					})), !1 !== r.queue && h.dequeue(d, r.queue)
				}
				b.State.calls[e] = !1;
				for (var p = 0, m = b.State.calls.length; m > p; p++)
					if (!1 !== b.State.calls[p]) {
						l = !0;
						break
					}!1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
			}
			var h, f = function () {
					if (n.documentMode) return n.documentMode;
					for (var e = 7; e > 4; e--) {
						var t = n.createElement("div");
						if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
					}
					return i
				}(),
				p = function () {
					var e = 0;
					return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
						var n, i = (new Date).getTime();
						return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function () {
							t(i + n)
						}, n)
					}
				}(),
				m = {
					isString: function (e) {
						return "string" == typeof e
					},
					isArray: Array.isArray || function (e) {
						return "[object Array]" === Object.prototype.toString.call(e)
					},
					isFunction: function (e) {
						return "[object Function]" === Object.prototype.toString.call(e)
					},
					isNode: function (e) {
						return e && e.nodeType
					},
					isNodeList: function (e) {
						return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
					},
					isWrapped: function (e) {
						return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
					},
					isSVG: function (e) {
						return t.SVGElement && e instanceof t.SVGElement
					},
					isEmptyObject: function (e) {
						for (var t in e) return !1;
						return !0
					}
				},
				g = !1;
			if (e.fn && e.fn.jquery ? (h = e, g = !0) : h = t.Velocity.Utilities, 8 >= f && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity."); {
				if (!(7 >= f)) {
					var v = 400,
						y = "swing",
						b = {
							State: {
								isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
								isAndroid: /Android/i.test(navigator.userAgent),
								isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
								isChrome: t.chrome,
								isFirefox: /Firefox/i.test(navigator.userAgent),
								prefixElement: n.createElement("div"),
								prefixMatches: {},
								scrollAnchor: null,
								scrollPropertyLeft: null,
								scrollPropertyTop: null,
								isTicking: !1,
								calls: []
							},
							CSS: {},
							Utilities: h,
							Redirects: {},
							Easings: {},
							Promise: t.Promise,
							defaults: {
								queue: "",
								duration: v,
								easing: y,
								begin: i,
								complete: i,
								progress: i,
								display: i,
								visibility: i,
								loop: !1,
								delay: !1,
								mobileHA: !0,
								_cacheValues: !0
							},
							init: function (e) {
								h.data(e, "velocity", {
									isSVG: m.isSVG(e),
									isAnimating: !1,
									computedStyle: null,
									tweensContainer: null,
									rootPropertyValueCache: {},
									transformCache: {}
								})
							},
							hook: null,
							mock: !1,
							version: {
								major: 1,
								minor: 2,
								patch: 2
							},
							debug: !1
						};
					t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
					var x = function () {
						function e(e) {
							return -e.tension * e.x - e.friction * e.v
						}

						function t(t, n, i) {
							var o = {
								x: t.x + i.dx * n,
								v: t.v + i.dv * n,
								tension: t.tension,
								friction: t.friction
							};
							return {
								dx: o.v,
								dv: e(o)
							}
						}

						function n(n, i) {
							var o = {
									dx: n.v,
									dv: e(n)
								},
								r = t(n, .5 * i, o),
								a = t(n, .5 * i, r),
								s = t(n, i, a),
								l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx),
								c = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
							return n.x = n.x + l * i, n.v = n.v + c * i, n
						}
						return function e(t, i, o) {
							var r, a, s, l = {
									x: -1,
									v: 0,
									tension: null,
									friction: null
								},
								c = [0],
								u = 0;
							for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, o = o || null, l.tension = t, l.friction = i, (r = null !== o) ? (u = e(t, i), a = u / o * .016) : a = .016; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
							return r ? function (e) {
								return c[e * (c.length - 1) | 0]
							} : u
						}
					}();
					b.Easings = {
						linear: function (e) {
							return e
						},
						swing: function (e) {
							return .5 - Math.cos(e * Math.PI) / 2
						},
						spring: function (e) {
							return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
						}
					}, h.each([
						["ease", [.25, .1, .25, 1]],
						["ease-in", [.42, 0, 1, 1]],
						["ease-out", [0, 0, .58, 1]],
						["ease-in-out", [.42, 0, .58, 1]],
						["easeInSine", [.47, 0, .745, .715]],
						["easeOutSine", [.39, .575, .565, 1]],
						["easeInOutSine", [.445, .05, .55, .95]],
						["easeInQuad", [.55, .085, .68, .53]],
						["easeOutQuad", [.25, .46, .45, .94]],
						["easeInOutQuad", [.455, .03, .515, .955]],
						["easeInCubic", [.55, .055, .675, .19]],
						["easeOutCubic", [.215, .61, .355, 1]],
						["easeInOutCubic", [.645, .045, .355, 1]],
						["easeInQuart", [.895, .03, .685, .22]],
						["easeOutQuart", [.165, .84, .44, 1]],
						["easeInOutQuart", [.77, 0, .175, 1]],
						["easeInQuint", [.755, .05, .855, .06]],
						["easeOutQuint", [.23, 1, .32, 1]],
						["easeInOutQuint", [.86, 0, .07, 1]],
						["easeInExpo", [.95, .05, .795, .035]],
						["easeOutExpo", [.19, 1, .22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [.6, .04, .98, .335]],
						["easeOutCirc", [.075, .82, .165, 1]],
						["easeInOutCirc", [.785, .135, .15, .86]]
					], function (e, t) {
						b.Easings[t[0]] = l.apply(null, t[1])
					});
					var w = b.CSS = {
						RegEx: {
							isHex: /^#([A-f\d]{3}){1,2}$/i,
							valueUnwrap: /^[A-z]+\((.*)\)$/i,
							wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
							valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
						},
						Lists: {
							colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
							transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
							transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
						},
						Hooks: {
							templates: {
								textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
								boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
								clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
								backgroundPosition: ["X Y", "0% 0%"],
								transformOrigin: ["X Y Z", "50% 50% 0px"],
								perspectiveOrigin: ["X Y", "50% 50%"]
							},
							registered: {},
							register: function () {
								for (r = 0; r < w.Lists.colors.length; r++) {
									var e = "color" === w.Lists.colors[r] ? "0 0 0 1" : "255 255 255 1";
									w.Hooks.templates[w.Lists.colors[r]] = ["Red Green Blue Alpha", e]
								}
								var t, n, i;
								if (f)
									for (t in w.Hooks.templates) {
										i = (n = w.Hooks.templates[t])[0].split(" ");
										var o = n[1].match(w.RegEx.valueSplit);
										"Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), w.Hooks.templates[t] = [i.join(" "), o.join(" ")])
									}
								for (t in w.Hooks.templates) {
									i = (n = w.Hooks.templates[t])[0].split(" ");
									for (var r in i) {
										var a = t + i[r],
											s = r;
										w.Hooks.registered[a] = [t, s]
									}
								}
							},
							getRoot: function (e) {
								var t = w.Hooks.registered[e];
								return t ? t[0] : e
							},
							cleanRootPropertyValue: function (e, t) {
								return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
							},
							extractValue: function (e, t) {
								var n = w.Hooks.registered[e];
								if (n) {
									var i = n[0],
										o = n[1];
									return (t = w.Hooks.cleanRootPropertyValue(i, t)).toString().match(w.RegEx.valueSplit)[o]
								}
								return t
							},
							injectValue: function (e, t, n) {
								var i = w.Hooks.registered[e];
								if (i) {
									var o, r = i[0],
										a = i[1];
									return n = w.Hooks.cleanRootPropertyValue(r, n), o = n.toString().match(w.RegEx.valueSplit), o[a] = t, o.join(" ")
								}
								return n
							}
						},
						Normalizations: {
							registered: {
								clip: function (e, t, n) {
									switch (e) {
										case "name":
											return "clip";
										case "extract":
											var i;
											return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(w.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
										case "inject":
											return "rect(" + n + ")"
									}
								},
								blur: function (e, t, n) {
									switch (e) {
										case "name":
											return b.State.isFirefox ? "filter" : "-webkit-filter";
										case "extract":
											var i = parseFloat(n);
											if (!i && 0 !== i) {
												var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
												i = o ? o[1] : 0
											}
											return i;
										case "inject":
											return parseFloat(n) ? "blur(" + n + ")" : "none"
									}
								},
								opacity: function (e, t, n) {
									if (8 >= f) switch (e) {
										case "name":
											return "filter";
										case "extract":
											var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
											return n = i ? i[1] / 100 : 1;
										case "inject":
											return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
									} else switch (e) {
										case "name":
											return "opacity";
										case "extract":
										case "inject":
											return n
									}
								}
							},
							register: function () {
								9 >= f || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
								for (e = 0; e < w.Lists.transformsBase.length; e++) ! function () {
									var t = w.Lists.transformsBase[e];
									w.Normalizations.registered[t] = function (e, n, o) {
										switch (e) {
											case "name":
												return "transform";
											case "extract":
												return a(n) === i || a(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
											case "inject":
												var r = !1;
												switch (t.substr(0, t.length - 1)) {
													case "translate":
														r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
														break;
													case "scal":
													case "scale":
														b.State.isAndroid && a(n).transformCache[t] === i && 1 > o && (o = 1), r = !/(\d)$/i.test(o);
														break;
													case "skew":
														r = !/(deg|\d)$/i.test(o);
														break;
													case "rotate":
														r = !/(deg|\d)$/i.test(o)
												}
												return r || (a(n).transformCache[t] = "(" + o + ")"), a(n).transformCache[t]
										}
									}
								}();
								for (var e = 0; e < w.Lists.colors.length; e++) ! function () {
									var t = w.Lists.colors[e];
									w.Normalizations.registered[t] = function (e, n, o) {
										switch (e) {
											case "name":
												return t;
											case "extract":
												var r;
												if (w.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
												else {
													var a, s = {
														black: "rgb(0, 0, 0)",
														blue: "rgb(0, 0, 255)",
														gray: "rgb(128, 128, 128)",
														green: "rgb(0, 128, 0)",
														red: "rgb(255, 0, 0)",
														white: "rgb(255, 255, 255)"
													};
													/^[A-z]+$/i.test(o) ? a = s[o] !== i ? s[o] : s.black : w.RegEx.isHex.test(o) ? a = "rgb(" + w.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
												}
												return 8 >= f || 3 !== r.split(" ").length || (r += " 1"), r;
											case "inject":
												return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
										}
									}
								}()
							}
						},
						Names: {
							camelCase: function (e) {
								return e.replace(/-(\w)/g, function (e, t) {
									return t.toUpperCase()
								})
							},
							SVGAttribute: function (e) {
								var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
								return (f || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
							},
							prefixCheck: function (e) {
								if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
								for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
									var o;
									if (o = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
											return e.toUpperCase()
										}), m.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[e] = o, [o, !0]
								}
								return [e, !1]
							}
						},
						Values: {
							hexToRgb: function (e) {
								var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
									i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
								return e = e.replace(n, function (e, t, n, i) {
									return t + t + n + n + i + i
								}), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
							},
							isCSSNullValue: function (e) {
								return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
							},
							getUnitType: function (e) {
								return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
							},
							getDisplayType: function (e) {
								var t = e && e.tagName.toString().toLowerCase();
								return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
							},
							addClass: function (e, t) {
								e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
							},
							removeClass: function (e, t) {
								e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
							}
						},
						getPropertyValue: function (e, n, o, r) {
							function s(e, n) {
								function o() {
									c && w.setPropertyValue(e, "display", "none")
								}
								var l = 0;
								if (8 >= f) l = h.css(e, n);
								else {
									var c = !1;
									if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(e, "display") && (c = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !r) {
										if ("height" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
											var u = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
											return o(), u
										}
										if ("width" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
											var d = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
											return o(), d
										}
									}
									var p;
									p = a(e) === i ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === f && "filter" === n ? p.getPropertyValue(n) : p[n]) || null === l) && (l = e.style[n]), o()
								}
								if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
									var m = s(e, "position");
									("fixed" === m || "absolute" === m && /top|left/i.test(n)) && (l = h(e).position()[n] + "px")
								}
								return l
							}
							var l;
							if (w.Hooks.registered[n]) {
								var c = n,
									u = w.Hooks.getRoot(c);
								o === i && (o = w.getPropertyValue(e, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (o = w.Normalizations.registered[u]("extract", e, o)), l = w.Hooks.extractValue(c, o)
							} else if (w.Normalizations.registered[n]) {
								var d, p;
								"transform" !== (d = w.Normalizations.registered[n]("name", e)) && (p = s(e, w.Names.prefixCheck(d)[0]), w.Values.isCSSNullValue(p) && w.Hooks.templates[n] && (p = w.Hooks.templates[n][1])), l = w.Normalizations.registered[n]("extract", e, p)
							}
							if (!/^[\d-]/.test(l))
								if (a(e) && a(e).isSVG && w.Names.SVGAttribute(n))
									if (/^(height|width)$/i.test(n)) try {
										l = e.getBBox()[n]
									} catch (e) {
										l = 0
									} else l = e.getAttribute(n);
									else l = s(e, w.Names.prefixCheck(n)[0]);
							return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
						},
						setPropertyValue: function (e, n, i, o, r) {
							var s = n;
							if ("scroll" === n) r.container ? r.container["scroll" + r.direction] = i : "Left" === r.direction ? t.scrollTo(i, r.alternateValue) : t.scrollTo(r.alternateValue, i);
							else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", e)) w.Normalizations.registered[n]("inject", e, i), s = "transform", i = a(e).transformCache[n];
							else {
								if (w.Hooks.registered[n]) {
									var l = n,
										c = w.Hooks.getRoot(n);
									o = o || w.getPropertyValue(e, c), i = w.Hooks.injectValue(l, i, o), n = c
								}
								if (w.Normalizations.registered[n] && (i = w.Normalizations.registered[n]("inject", e, i), n = w.Normalizations.registered[n]("name", e)), s = w.Names.prefixCheck(n)[0], 8 >= f) try {
									e.style[s] = i
								} catch (e) {
									b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
								} else a(e) && a(e).isSVG && w.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
								b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
							}
							return [s, i]
						},
						flushTransformCache: function (e) {
							function t(t) {
								return parseFloat(w.getPropertyValue(e, t))
							}
							var n = "";
							if ((f || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
								var i = {
									translate: [t("translateX"), t("translateY")],
									skewX: [t("skewX")],
									skewY: [t("skewY")],
									scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
									rotate: [t("rotateZ"), 0, 0]
								};
								h.each(a(e).transformCache, function (e) {
									/^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
								})
							} else {
								var o, r;
								h.each(a(e).transformCache, function (t) {
									return o = a(e).transformCache[t], "transformPerspective" === t ? (r = o, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(n += t + o + " "))
								}), r && (n = "perspective" + r + " " + n)
							}
							w.setPropertyValue(e, "transform", n)
						}
					};
					w.Hooks.register(), w.Normalizations.register(), b.hook = function (e, t, n) {
						var o = i;
						return e = r(e), h.each(e, function (e, r) {
							if (a(r) === i && b.init(r), n === i) o === i && (o = b.CSS.getPropertyValue(r, t));
							else {
								var s = b.CSS.setPropertyValue(r, t, n);
								"transform" === s[0] && b.CSS.flushTransformCache(r), o = s
							}
						}), o
					};
					var C = function () {
						function e() {
							return s ? S.promise || null : l
						}

						function o() {
							function e(e) {
								function d(e, t) {
									var n = i,
										o = i,
										a = i;
									return m.isArray(e) ? (n = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (m.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (o = t ? e[1] : c(e[1], s.duration), e[2] !== i && (a = e[2]))) : n = e, t || (o = o || s.easing), m.isFunction(n) && (n = n.call(r, T, k)), m.isFunction(a) && (a = a.call(r, T, k)), [n || 0, o, a]
								}

								function f(e, t) {
									var n, i;
									return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
										return n = e, ""
									}), n || (n = w.Values.getUnitType(e)), [i, n]
								}
								if (s.begin && 0 === T) try {
									s.begin.call(p, p)
								} catch (e) {
									setTimeout(function () {
										throw e
									}, 1)
								}
								if ("scroll" === E) {
									var v, x, C, _ = /^x$/i.test(s.axis) ? "Left" : "Top",
										A = parseFloat(s.offset) || 0;
									s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, v = s.container["scroll" + _], C = v + h(r).position()[_.toLowerCase()] + A) : s.container = null : (v = b.State.scrollAnchor[b.State["scrollProperty" + _]], x = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === _ ? "Top" : "Left")]], C = h(r).offset()[_.toLowerCase()] + A), l = {
										scroll: {
											rootPropertyValue: !1,
											startValue: v,
											currentValue: v,
											endValue: C,
											unitType: "",
											easing: s.easing,
											scrollData: {
												container: s.container,
												direction: _,
												alternateValue: x
											}
										},
										element: r
									}, b.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
								} else if ("reverse" === E) {
									if (!a(r).tweensContainer) return void h.dequeue(r, s.queue);
									"none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = h.extend({}, a(r).opts, s);
									O = h.extend(!0, {}, a(r).tweensContainer);
									for (var I in O)
										if ("element" !== I) {
											var D = O[I].startValue;
											O[I].startValue = O[I].currentValue = O[I].endValue, O[I].endValue = D, m.isEmptyObject(y) || (O[I].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + I + "): " + JSON.stringify(O[I]), r)
										}
									l = O
								} else if ("start" === E) {
									var O;
									a(r).tweensContainer && !0 === a(r).isAnimating && (O = a(r).tweensContainer), h.each(g, function (e, t) {
										if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
											var n = d(t, !0),
												o = n[0],
												r = n[1],
												a = n[2];
											if (w.RegEx.isHex.test(o)) {
												for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(o), c = a ? w.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
													var h = [l[u]];
													r && h.push(r), c !== i && h.push(c[u]), g[e + s[u]] = h
												}
												delete g[e]
											}
										}
									});
									for (var L in g) {
										var F = d(g[L]),
											N = F[0],
											R = F[1],
											W = F[2];
										L = w.Names.camelCase(L);
										var H = w.Hooks.getRoot(L),
											V = !1;
										if (a(r).isSVG || "tween" === H || !1 !== w.Names.prefixCheck(H)[1] || w.Normalizations.registered[H] !== i) {
											(s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(L) && !W && 0 !== N && (W = 0), s._cacheValues && O && O[L] ? (W === i && (W = O[L].endValue + O[L].unitType), V = a(r).rootPropertyValueCache[H]) : w.Hooks.registered[L] ? W === i ? (V = w.getPropertyValue(r, H), W = w.getPropertyValue(r, L, V)) : V = w.Hooks.templates[H][1] : W === i && (W = w.getPropertyValue(r, L));
											var j, B, z, q = !1;
											if (j = f(L, W), W = j[0], z = j[1], j = f(L, N), N = j[0].replace(/^([+-\/*])=/, function (e, t) {
													return q = t, ""
												}), B = j[1], W = parseFloat(W) || 0, N = parseFloat(N) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test(L) ? (N /= 100, B = "em") : /^scale/.test(L) ? (N /= 100, B = "") : /(Red|Green|Blue)$/i.test(L) && (N = N / 100 * 255, B = "")), /[\/*]/.test(q)) B = z;
											else if (z !== B && 0 !== W)
												if (0 === N) B = z;
												else {
													o = o || function () {
														var e = {
																myParent: r.parentNode || n.body,
																position: w.getPropertyValue(r, "position"),
																fontSize: w.getPropertyValue(r, "fontSize")
															},
															i = e.position === P.lastPosition && e.myParent === P.lastParent,
															o = e.fontSize === P.lastFontSize;
														P.lastParent = e.myParent, P.lastPosition = e.position, P.lastFontSize = e.fontSize;
														var s = 100,
															l = {};
														if (o && i) l.emToPx = P.lastEmToPx, l.percentToPxWidth = P.lastPercentToPxWidth, l.percentToPxHeight = P.lastPercentToPxHeight;
														else {
															var c = a(r).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
															b.init(c), e.myParent.appendChild(c), h.each(["overflow", "overflowX", "overflowY"], function (e, t) {
																b.CSS.setPropertyValue(c, t, "hidden")
															}), b.CSS.setPropertyValue(c, "position", e.position), b.CSS.setPropertyValue(c, "fontSize", e.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
																b.CSS.setPropertyValue(c, t, s + "%")
															}), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = P.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = P.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = P.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
														}
														return null === P.remToPx && (P.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16), null === P.vwToPx && (P.vwToPx = parseFloat(t.innerWidth) / 100, P.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = P.remToPx, l.vwToPx = P.vwToPx, l.vhToPx = P.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
													}();
													var $ = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
													switch (z) {
														case "%":
															W *= "x" === $ ? o.percentToPxWidth : o.percentToPxHeight;
															break;
														case "px":
															break;
														default:
															W *= o[z + "ToPx"]
													}
													switch (B) {
														case "%":
															W *= 1 / ("x" === $ ? o.percentToPxWidth : o.percentToPxHeight);
															break;
														case "px":
															break;
														default:
															W *= 1 / o[B + "ToPx"]
													}
												}
											switch (q) {
												case "+":
													N = W + N;
													break;
												case "-":
													N = W - N;
													break;
												case "*":
													N *= W;
													break;
												case "/":
													N = W / N
											}
											l[L] = {
												rootPropertyValue: V,
												startValue: W,
												currentValue: W,
												endValue: N,
												unitType: B,
												easing: R
											}, b.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(l[L]), r)
										} else b.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
									}
									l.element = r
								}
								l.element && (w.Values.addClass(r, "velocity-animating"), M.push(l), "" === s.queue && (a(r).tweensContainer = l, a(r).opts = s), a(r).isAnimating = !0, T === k - 1 ? (b.State.calls.push([M, p, s, null, S.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, u())) : T++)
							}
							var o, r = this,
								s = h.extend({}, b.defaults, y),
								l = {};
							switch (a(r) === i && b.init(r), parseFloat(s.delay) && !1 !== s.queue && h.queue(r, s.queue, function (e) {
								b.velocityQueueEntryFlag = !0, a(r).delayTimer = {
									setTimeout: setTimeout(e, parseFloat(s.delay)),
									next: e
								}
							}), s.duration.toString().toLowerCase()) {
								case "fast":
									s.duration = 200;
									break;
								case "normal":
									s.duration = v;
									break;
								case "slow":
									s.duration = 600;
									break;
								default:
									s.duration = parseFloat(s.duration) || 1
							}!1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(r))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(e, s.delay) : e() : h.queue(r, s.queue, function (t, n) {
								return !0 === n ? (S.promise && S.resolver(p), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
							}), "" !== s.queue && "fx" !== s.queue || "inprogress" === h.queue(r)[0] || h.dequeue(r)
						}
						var s, l, f, p, g, y, x = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
						if (m.isWrapped(this) ? (s = !1, f = 0, p = this, l = this) : (s = !0, f = 1, p = x ? arguments[0].elements || arguments[0].e : arguments[0]), p = r(p)) {
							x ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[f], y = arguments[f + 1]);
							var k = p.length,
								T = 0;
							if (!/^(stop|finish)$/i.test(g) && !h.isPlainObject(y)) {
								y = {};
								for (var _ = f + 1; _ < arguments.length; _++) m.isArray(arguments[_]) || !/^(fast|normal|slow)$/i.test(arguments[_]) && !/^\d/.test(arguments[_]) ? m.isString(arguments[_]) || m.isArray(arguments[_]) ? y.easing = arguments[_] : m.isFunction(arguments[_]) && (y.complete = arguments[_]) : y.duration = arguments[_]
							}
							var S = {
								promise: null,
								resolver: null,
								rejecter: null
							};
							s && b.Promise && (S.promise = new b.Promise(function (e, t) {
								S.resolver = e, S.rejecter = t
							}));
							var E;
							switch (g) {
								case "scroll":
									E = "scroll";
									break;
								case "reverse":
									E = "reverse";
									break;
								case "finish":
								case "stop":
									h.each(p, function (e, t) {
										a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
									});
									var A = [];
									return h.each(b.State.calls, function (e, t) {
										t && h.each(t[1], function (n, o) {
											var r = y === i ? "" : y;
											return !0 !== r && t[2].queue !== r && (y !== i || !1 !== t[2].queue) || void h.each(p, function (n, i) {
												i === o && ((!0 === y || m.isString(y)) && (h.each(h.queue(i, m.isString(y) ? y : ""), function (e, t) {
													m.isFunction(t) && t(null, !0)
												}), h.queue(i, m.isString(y) ? y : "", [])), "stop" === g ? (a(i) && a(i).tweensContainer && !1 !== r && h.each(a(i).tweensContainer, function (e, t) {
													t.endValue = t.currentValue
												}), A.push(e)) : "finish" === g && (t[2].duration = 1))
											})
										})
									}), "stop" === g && (h.each(A, function (e, t) {
										d(t, !0)
									}), S.promise && S.resolver(p)), e();
								default:
									if (!h.isPlainObject(g) || m.isEmptyObject(g)) {
										if (m.isString(g) && b.Redirects[g]) {
											var I = (F = h.extend({}, y)).duration,
												D = F.delay || 0;
											return !0 === F.backwards && (p = h.extend(!0, [], p).reverse()), h.each(p, function (e, t) {
												parseFloat(F.stagger) ? F.delay = D + parseFloat(F.stagger) * e : m.isFunction(F.stagger) && (F.delay = D + F.stagger.call(t, e, k)), F.drag && (F.duration = parseFloat(I) || (/^(callout|transition)/.test(g) ? 1e3 : v), F.duration = Math.max(F.duration * (F.backwards ? 1 - e / k : (e + 1) / k), .75 * F.duration, 200)), b.Redirects[g].call(t, t, F || {}, e, k, p, S.promise ? S : i)
											}), e()
										}
										var O = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
										return S.promise ? S.rejecter(new Error(O)) : console.log(O), e()
									}
									E = "start"
							}
							var P = {
									lastParent: null,
									lastPosition: null,
									lastFontSize: null,
									lastPercentToPxWidth: null,
									lastPercentToPxHeight: null,
									lastEmToPx: null,
									remToPx: null,
									vwToPx: null,
									vhToPx: null
								},
								M = [];
							h.each(p, function (e, t) {
								m.isNode(t) && o.call(t)
							});
							var L, F = h.extend({}, b.defaults, y);
							if (F.loop = parseInt(F.loop), L = 2 * F.loop - 1, F.loop)
								for (var N = 0; L > N; N++) {
									var R = {
										delay: F.delay,
										progress: F.progress
									};
									N === L - 1 && (R.display = F.display, R.visibility = F.visibility, R.complete = F.complete), C(p, "reverse", R)
								}
							return e()
						}
					};
					(b = h.extend(C, b)).animate = C;
					var k = t.requestAnimationFrame || p;
					return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
						n.hidden ? (k = function (e) {
							return setTimeout(function () {
								e(!0)
							}, 16)
						}, u()) : k = t.requestAnimationFrame || p
					}), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), h.each(["Down", "Up"], function (e, t) {
						b.Redirects["slide" + t] = function (e, n, o, r, a, s) {
							var l = h.extend({}, n),
								c = l.begin,
								u = l.complete,
								d = {
									height: "",
									marginTop: "",
									marginBottom: "",
									paddingTop: "",
									paddingBottom: ""
								},
								f = {};
							l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
								c && c.call(a, a);
								for (var n in d) {
									f[n] = e.style[n];
									var i = b.CSS.getPropertyValue(e, n);
									d[n] = "Down" === t ? [i, 0] : [0, i]
								}
								f.overflow = e.style.overflow, e.style.overflow = "hidden"
							}, l.complete = function () {
								for (var t in f) e.style[t] = f[t];
								u && u.call(a, a), s && s.resolver(a)
							}, b(e, d, l)
						}
					}), h.each(["In", "Out"], function (e, t) {
						b.Redirects["fade" + t] = function (e, n, o, r, a, s) {
							var l = h.extend({}, n),
								c = {
									opacity: "In" === t ? 1 : 0
								},
								u = l.complete;
							l.complete = o !== r - 1 ? l.begin = null : function () {
								u && u.call(a, a), s && s.resolver(a)
							}, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, c, l)
						}
					}), b
				}
				jQuery.fn.velocity = jQuery.fn.animate
			}
		}(window.jQuery || window.Zepto || window, window, document)
	})),
	function (e) {
		if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
		else if ("function" == typeof define && define.amd) define([], e);
		else {
			("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = e()
		}
	}(function () {
		return function e(t, n, i) {
			function o(a, s) {
				if (!n[a]) {
					if (!t[a]) {
						var l = "function" == typeof require && require;
						if (!s && l) return l(a, !0);
						if (r) return r(a, !0);
						var c = new Error("Cannot find module '" + a + "'");
						throw c.code = "MODULE_NOT_FOUND", c
					}
					var u = n[a] = {
						exports: {}
					};
					t[a][0].call(u.exports, function (e) {
						var n = t[a][1][e];
						return o(n || e)
					}, u, u.exports, e, t, n, i)
				}
				return n[a].exports
			}
			for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
			return o
		}({
			1: [function (e, t, n) {}, {}],
			2: [function (e, t, n) {
				function i(e) {
					if (e) {
						var t = /^#([a-fA-F0-9]{3})$/,
							n = /^#([a-fA-F0-9]{6})$/,
							i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
							o = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
							r = /(\w+)/,
							a = [0, 0, 0],
							s = 1,
							l = e.match(t);
						if (l) {
							l = l[1];
							for (u = 0; u < a.length; u++) a[u] = parseInt(l[u] + l[u], 16)
						} else if (l = e.match(n)) {
							l = l[1];
							for (u = 0; u < a.length; u++) a[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16)
						} else if (l = e.match(i)) {
							for (u = 0; u < a.length; u++) a[u] = parseInt(l[u + 1]);
							s = parseFloat(l[4])
						} else if (l = e.match(o)) {
							for (u = 0; u < a.length; u++) a[u] = Math.round(2.55 * parseFloat(l[u + 1]));
							s = parseFloat(l[4])
						} else if (l = e.match(r)) {
							if ("transparent" == l[1]) return [0, 0, 0, 0];
							if (!(a = d[l[1]])) return
						}
						for (var u = 0; u < a.length; u++) a[u] = c(a[u], 0, 255);
						return s = s || 0 == s ? c(s, 0, 1) : 1, a[3] = s, a
					}
				}

				function o(e) {
					if (e) {
						var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
							n = e.match(t);
						if (n) {
							var i = parseFloat(n[4]);
							return [c(parseInt(n[1]), 0, 360), c(parseFloat(n[2]), 0, 100), c(parseFloat(n[3]), 0, 100), c(isNaN(i) ? 1 : i, 0, 1)]
						}
					}
				}

				function r(e) {
					if (e) {
						var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
							n = e.match(t);
						if (n) {
							var i = parseFloat(n[4]);
							return [c(parseInt(n[1]), 0, 360), c(parseFloat(n[2]), 0, 100), c(parseFloat(n[3]), 0, 100), c(isNaN(i) ? 1 : i, 0, 1)]
						}
					}
				}

				function a(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
				}

				function s(e, t) {
					return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
				}

				function l(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
				}

				function c(e, t, n) {
					return Math.min(Math.max(t, e), n)
				}

				function u(e) {
					var t = e.toString(16).toUpperCase();
					return t.length < 2 ? "0" + t : t
				}
				var d = e(6);
				t.exports = {
					getRgba: i,
					getHsla: o,
					getRgb: function (e) {
						var t = i(e);
						return t && t.slice(0, 3)
					},
					getHsl: function (e) {
						var t = o(e);
						return t && t.slice(0, 3)
					},
					getHwb: r,
					getAlpha: function (e) {
						var t = i(e);
						return t ? t[3] : (t = o(e)) ? t[3] : (t = r(e)) ? t[3] : void 0
					},
					hexString: function (e) {
						return "#" + u(e[0]) + u(e[1]) + u(e[2])
					},
					rgbString: function (e, t) {
						return t < 1 || e[3] && e[3] < 1 ? a(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
					},
					rgbaString: a,
					percentString: function (e, t) {
						return t < 1 || e[3] && e[3] < 1 ? s(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)"
					},
					percentaString: s,
					hslString: function (e, t) {
						return t < 1 || e[3] && e[3] < 1 ? l(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
					},
					hslaString: l,
					hwbString: function (e, t) {
						return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
					},
					keyword: function (e) {
						return h[e.slice(0, 3)]
					}
				};
				var h = {};
				for (var f in d) h[d[f]] = f
			}, {
				6: 6
			}],
			3: [function (e, t, n) {
				var i = e(5),
					o = e(2),
					r = function (e) {
						if (e instanceof r) return e;
						if (!(this instanceof r)) return new r(e);
						this.valid = !1, this.values = {
							rgb: [0, 0, 0],
							hsl: [0, 0, 0],
							hsv: [0, 0, 0],
							hwb: [0, 0, 0],
							cmyk: [0, 0, 0, 0],
							alpha: 1
						};
						var t;
						"string" == typeof e ? (t = o.getRgba(e)) ? this.setValues("rgb", t) : (t = o.getHsla(e)) ? this.setValues("hsl", t) : (t = o.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t))
					};
				r.prototype = {
					isValid: function () {
						return this.valid
					},
					rgb: function () {
						return this.setSpace("rgb", arguments)
					},
					hsl: function () {
						return this.setSpace("hsl", arguments)
					},
					hsv: function () {
						return this.setSpace("hsv", arguments)
					},
					hwb: function () {
						return this.setSpace("hwb", arguments)
					},
					cmyk: function () {
						return this.setSpace("cmyk", arguments)
					},
					rgbArray: function () {
						return this.values.rgb
					},
					hslArray: function () {
						return this.values.hsl
					},
					hsvArray: function () {
						return this.values.hsv
					},
					hwbArray: function () {
						var e = this.values;
						return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
					},
					cmykArray: function () {
						return this.values.cmyk
					},
					rgbaArray: function () {
						var e = this.values;
						return e.rgb.concat([e.alpha])
					},
					hslaArray: function () {
						var e = this.values;
						return e.hsl.concat([e.alpha])
					},
					alpha: function (e) {
						return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
					},
					red: function (e) {
						return this.setChannel("rgb", 0, e)
					},
					green: function (e) {
						return this.setChannel("rgb", 1, e)
					},
					blue: function (e) {
						return this.setChannel("rgb", 2, e)
					},
					hue: function (e) {
						return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
					},
					saturation: function (e) {
						return this.setChannel("hsl", 1, e)
					},
					lightness: function (e) {
						return this.setChannel("hsl", 2, e)
					},
					saturationv: function (e) {
						return this.setChannel("hsv", 1, e)
					},
					whiteness: function (e) {
						return this.setChannel("hwb", 1, e)
					},
					blackness: function (e) {
						return this.setChannel("hwb", 2, e)
					},
					value: function (e) {
						return this.setChannel("hsv", 2, e)
					},
					cyan: function (e) {
						return this.setChannel("cmyk", 0, e)
					},
					magenta: function (e) {
						return this.setChannel("cmyk", 1, e)
					},
					yellow: function (e) {
						return this.setChannel("cmyk", 2, e)
					},
					black: function (e) {
						return this.setChannel("cmyk", 3, e)
					},
					hexString: function () {
						return o.hexString(this.values.rgb)
					},
					rgbString: function () {
						return o.rgbString(this.values.rgb, this.values.alpha)
					},
					rgbaString: function () {
						return o.rgbaString(this.values.rgb, this.values.alpha)
					},
					percentString: function () {
						return o.percentString(this.values.rgb, this.values.alpha)
					},
					hslString: function () {
						return o.hslString(this.values.hsl, this.values.alpha)
					},
					hslaString: function () {
						return o.hslaString(this.values.hsl, this.values.alpha)
					},
					hwbString: function () {
						return o.hwbString(this.values.hwb, this.values.alpha)
					},
					keyword: function () {
						return o.keyword(this.values.rgb, this.values.alpha)
					},
					rgbNumber: function () {
						var e = this.values.rgb;
						return e[0] << 16 | e[1] << 8 | e[2]
					},
					luminosity: function () {
						for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
							var i = e[n] / 255;
							t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
						}
						return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
					},
					contrast: function (e) {
						var t = this.luminosity(),
							n = e.luminosity();
						return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
					},
					level: function (e) {
						var t = this.contrast(e);
						return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
					},
					dark: function () {
						var e = this.values.rgb;
						return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
					},
					light: function () {
						return !this.dark()
					},
					negate: function () {
						for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
						return this.setValues("rgb", e), this
					},
					lighten: function (e) {
						var t = this.values.hsl;
						return t[2] += t[2] * e, this.setValues("hsl", t), this
					},
					darken: function (e) {
						var t = this.values.hsl;
						return t[2] -= t[2] * e, this.setValues("hsl", t), this
					},
					saturate: function (e) {
						var t = this.values.hsl;
						return t[1] += t[1] * e, this.setValues("hsl", t), this
					},
					desaturate: function (e) {
						var t = this.values.hsl;
						return t[1] -= t[1] * e, this.setValues("hsl", t), this
					},
					whiten: function (e) {
						var t = this.values.hwb;
						return t[1] += t[1] * e, this.setValues("hwb", t), this
					},
					blacken: function (e) {
						var t = this.values.hwb;
						return t[2] += t[2] * e, this.setValues("hwb", t), this
					},
					greyscale: function () {
						var e = this.values.rgb,
							t = .3 * e[0] + .59 * e[1] + .11 * e[2];
						return this.setValues("rgb", [t, t, t]), this
					},
					clearer: function (e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t - t * e), this
					},
					opaquer: function (e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t + t * e), this
					},
					rotate: function (e) {
						var t = this.values.hsl,
							n = (t[0] + e) % 360;
						return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
					},
					mix: function (e, t) {
						var n = this,
							i = e,
							o = void 0 === t ? .5 : t,
							r = 2 * o - 1,
							a = n.alpha() - i.alpha(),
							s = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
							l = 1 - s;
						return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * o + i.alpha() * (1 - o))
					},
					toJSON: function () {
						return this.rgb()
					},
					clone: function () {
						var e, t, n = new r,
							i = this.values,
							o = n.values;
						for (var a in i) i.hasOwnProperty(a) && (e = i[a], "[object Array]" === (t = {}.toString.call(e)) ? o[a] = e.slice(0) : "[object Number]" === t ? o[a] = e : console.error("unexpected color value:", e));
						return n
					}
				}, r.prototype.spaces = {
					rgb: ["red", "green", "blue"],
					hsl: ["hue", "saturation", "lightness"],
					hsv: ["hue", "saturation", "value"],
					hwb: ["hue", "whiteness", "blackness"],
					cmyk: ["cyan", "magenta", "yellow", "black"]
				}, r.prototype.maxes = {
					rgb: [255, 255, 255],
					hsl: [360, 100, 100],
					hsv: [360, 100, 100],
					hwb: [360, 100, 100],
					cmyk: [100, 100, 100, 100]
				}, r.prototype.getValues = function (e) {
					for (var t = this.values, n = {}, i = 0; i < e.length; i++) n[e.charAt(i)] = t[e][i];
					return 1 !== t.alpha && (n.a = t.alpha), n
				}, r.prototype.setValues = function (e, t) {
					var n, o = this.values,
						r = this.spaces,
						a = this.maxes,
						s = 1;
					if (this.valid = !0, "alpha" === e) s = t;
					else if (t.length) o[e] = t.slice(0, e.length), s = t[e.length];
					else if (void 0 !== t[e.charAt(0)]) {
						for (n = 0; n < e.length; n++) o[e][n] = t[e.charAt(n)];
						s = t.a
					} else if (void 0 !== t[r[e][0]]) {
						var l = r[e];
						for (n = 0; n < e.length; n++) o[e][n] = t[l[n]];
						s = t.alpha
					}
					if (o.alpha = Math.max(0, Math.min(1, void 0 === s ? o.alpha : s)), "alpha" === e) return !1;
					var c;
					for (n = 0; n < e.length; n++) c = Math.max(0, Math.min(a[e][n], o[e][n])), o[e][n] = Math.round(c);
					for (var u in r) u !== e && (o[u] = i[e][u](o[e]));
					return !0
				}, r.prototype.setSpace = function (e, t) {
					var n = t[0];
					return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
				}, r.prototype.setChannel = function (e, t, n) {
					var i = this.values[e];
					return void 0 === n ? i[t] : n === i[t] ? this : (i[t] = n, this.setValues(e, i), this)
				}, "undefined" != typeof window && (window.Color = r), t.exports = r
			}, {
				2: 2,
				5: 5
			}],
			4: [function (e, t, n) {
				function i(e) {
					var t, n, i, o = e[0] / 255,
						r = e[1] / 255,
						a = e[2] / 255,
						s = Math.min(o, r, a),
						l = Math.max(o, r, a),
						c = l - s;
					return l == s ? t = 0 : o == l ? t = (r - a) / c : r == l ? t = 2 + (a - o) / c : a == l && (t = 4 + (o - r) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), i = (s + l) / 2, n = l == s ? 0 : i <= .5 ? c / (l + s) : c / (2 - l - s), [t, 100 * n, 100 * i]
				}

				function o(e) {
					var t, n, i, o = e[0],
						r = e[1],
						a = e[2],
						s = Math.min(o, r, a),
						l = Math.max(o, r, a),
						c = l - s;
					return n = 0 == l ? 0 : c / l * 1e3 / 10, l == s ? t = 0 : o == l ? t = (r - a) / c : r == l ? t = 2 + (a - o) / c : a == l && (t = 4 + (o - r) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), i = l / 255 * 1e3 / 10, [t, n, i]
				}

				function a(e) {
					var t = e[0],
						n = e[1],
						o = e[2];
					return [i(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))]
				}

				function s(e) {
					var t, n, i, o, r = e[0] / 255,
						a = e[1] / 255,
						s = e[2] / 255;
					return o = Math.min(1 - r, 1 - a, 1 - s), t = (1 - r - o) / (1 - o) || 0, n = (1 - a - o) / (1 - o) || 0, i = (1 - s - o) / (1 - o) || 0, [100 * t, 100 * n, 100 * i, 100 * o]
				}

				function l(e) {
					return _[JSON.stringify(e)]
				}

				function c(e) {
					var t = e[0] / 255,
						n = e[1] / 255,
						i = e[2] / 255;
					return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * i), 100 * (.0193 * t + .1192 * n + .9505 * i)]
				}

				function u(e) {
					var t, n, i, o = c(e),
						r = o[0],
						a = o[1],
						s = o[2];
					return r /= 95.047, a /= 100, s /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * a - 16, n = 500 * (r - a), i = 200 * (a - s), [t, n, i]
				}

				function d(e) {
					var t, n, i, o, r, a = e[0] / 360,
						s = e[1] / 100,
						l = e[2] / 100;
					if (0 == s) return r = 255 * l, [r, r, r];
					t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
					for (var c = 0; c < 3; c++)(i = a + 1 / 3 * -(c - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, o[c] = 255 * r;
					return o
				}

				function h(e) {
					var t = e[0] / 60,
						n = e[1] / 100,
						i = e[2] / 100,
						o = Math.floor(t) % 6,
						r = t - Math.floor(t),
						a = 255 * i * (1 - n),
						s = 255 * i * (1 - n * r),
						l = 255 * i * (1 - n * (1 - r)),
						i = 255 * i;
					switch (o) {
						case 0:
							return [i, l, a];
						case 1:
							return [s, i, a];
						case 2:
							return [a, i, l];
						case 3:
							return [a, s, i];
						case 4:
							return [l, a, i];
						case 5:
							return [i, a, s]
					}
				}

				function f(e) {
					var t, n, i, o, a = e[0] / 360,
						s = e[1] / 100,
						l = e[2] / 100,
						c = s + l;
					switch (c > 1 && (s /= c, l /= c), t = Math.floor(6 * a), n = 1 - l, i = 6 * a - t, 0 != (1 & t) && (i = 1 - i), o = s + i * (n - s), t) {
						default:
							case 6:
							case 0:
							r = n,
						g = o,
						b = s;
						break;
						case 1:
								r = o,
							g = n,
							b = s;
							break;
						case 2:
								r = s,
							g = n,
							b = o;
							break;
						case 3:
								r = s,
							g = o,
							b = n;
							break;
						case 4:
								r = o,
							g = s,
							b = n;
							break;
						case 5:
								r = n,
							g = s,
							b = o
					}
					return [255 * r, 255 * g, 255 * b]
				}

				function p(e) {
					var t, n, i, o = e[0] / 100,
						r = e[1] / 100,
						a = e[2] / 100,
						s = e[3] / 100;
					return t = 1 - Math.min(1, o * (1 - s) + s), n = 1 - Math.min(1, r * (1 - s) + s), i = 1 - Math.min(1, a * (1 - s) + s), [255 * t, 255 * n, 255 * i]
				}

				function m(e) {
					var t, n, i, o = e[0] / 100,
						r = e[1] / 100,
						a = e[2] / 100;
					return t = 3.2406 * o + -1.5372 * r + -.4986 * a, n = -.9689 * o + 1.8758 * r + .0415 * a, i = .0557 * o + -.204 * r + 1.057 * a, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, t = Math.min(Math.max(0, t), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * t, 255 * n, 255 * i]
				}

				function v(e) {
					var t, n, i, o = e[0],
						r = e[1],
						a = e[2];
					return o /= 95.047, r /= 100, a /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, t = 116 * r - 16, n = 500 * (o - r), i = 200 * (r - a), [t, n, i]
				}

				function y(e) {
					var t, n, i, o, r = e[0],
						a = e[1],
						s = e[2];
					return r <= 8 ? o = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), o = Math.pow(n / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3), [t, n, i]
				}

				function x(e) {
					var t, n, i, o = e[0],
						r = e[1],
						a = e[2];
					return t = Math.atan2(a, r), (n = 360 * t / 2 / Math.PI) < 0 && (n += 360), i = Math.sqrt(r * r + a * a), [o, i, n]
				}

				function w(e) {
					return m(y(e))
				}

				function C(e) {
					var t, n, i, o = e[0],
						r = e[1];
					return i = e[2] / 360 * 2 * Math.PI, t = r * Math.cos(i), n = r * Math.sin(i), [o, t, n]
				}

				function k(e) {
					return T[e]
				}
				t.exports = {
					rgb2hsl: i,
					rgb2hsv: o,
					rgb2hwb: a,
					rgb2cmyk: s,
					rgb2keyword: l,
					rgb2xyz: c,
					rgb2lab: u,
					rgb2lch: function (e) {
						return x(u(e))
					},
					hsl2rgb: d,
					hsl2hsv: function (e) {
						var t, n, i = e[0],
							o = e[1] / 100,
							r = e[2] / 100;
						return 0 === r ? [0, 0, 0] : (r *= 2, o *= r <= 1 ? r : 2 - r, n = (r + o) / 2, t = 2 * o / (r + o), [i, 100 * t, 100 * n])
					},
					hsl2hwb: function (e) {
						return a(d(e))
					},
					hsl2cmyk: function (e) {
						return s(d(e))
					},
					hsl2keyword: function (e) {
						return l(d(e))
					},
					hsv2rgb: h,
					hsv2hsl: function (e) {
						var t, n, i = e[0],
							o = e[1] / 100,
							r = e[2] / 100;
						return n = (2 - o) * r, t = o * r, t /= n <= 1 ? n : 2 - n, t = t || 0, n /= 2, [i, 100 * t, 100 * n]
					},
					hsv2hwb: function (e) {
						return a(h(e))
					},
					hsv2cmyk: function (e) {
						return s(h(e))
					},
					hsv2keyword: function (e) {
						return l(h(e))
					},
					hwb2rgb: f,
					hwb2hsl: function (e) {
						return i(f(e))
					},
					hwb2hsv: function (e) {
						return o(f(e))
					},
					hwb2cmyk: function (e) {
						return s(f(e))
					},
					hwb2keyword: function (e) {
						return l(f(e))
					},
					cmyk2rgb: p,
					cmyk2hsl: function (e) {
						return i(p(e))
					},
					cmyk2hsv: function (e) {
						return o(p(e))
					},
					cmyk2hwb: function (e) {
						return a(p(e))
					},
					cmyk2keyword: function (e) {
						return l(p(e))
					},
					keyword2rgb: k,
					keyword2hsl: function (e) {
						return i(k(e))
					},
					keyword2hsv: function (e) {
						return o(k(e))
					},
					keyword2hwb: function (e) {
						return a(k(e))
					},
					keyword2cmyk: function (e) {
						return s(k(e))
					},
					keyword2lab: function (e) {
						return u(k(e))
					},
					keyword2xyz: function (e) {
						return c(k(e))
					},
					xyz2rgb: m,
					xyz2lab: v,
					xyz2lch: function (e) {
						return x(v(e))
					},
					lab2xyz: y,
					lab2rgb: w,
					lab2lch: x,
					lch2lab: C,
					lch2xyz: function (e) {
						return y(C(e))
					},
					lch2rgb: function (e) {
						return w(C(e))
					}
				};
				var T = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					_ = {};
				for (var S in T) _[JSON.stringify(T[S])] = S
			}, {}],
			5: [function (e, t, n) {
				var i = e(4),
					o = function () {
						return new c
					};
				for (var r in i) {
					o[r + "Raw"] = function (e) {
						return function (t) {
							return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), i[e](t)
						}
					}(r);
					var a = /(\w+)2(\w+)/.exec(r),
						s = a[1],
						l = a[2];
					(o[s] = o[s] || {})[l] = o[r] = function (e) {
						return function (t) {
							"number" == typeof t && (t = Array.prototype.slice.call(arguments));
							var n = i[e](t);
							if ("string" == typeof n || void 0 === n) return n;
							for (var o = 0; o < n.length; o++) n[o] = Math.round(n[o]);
							return n
						}
					}(r)
				}
				var c = function () {
					this.convs = {}
				};
				c.prototype.routeSpace = function (e, t) {
					var n = t[0];
					return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n))
				}, c.prototype.setValues = function (e, t) {
					return this.space = e, this.convs = {}, this.convs[e] = t, this
				}, c.prototype.getValues = function (e) {
					var t = this.convs[e];
					if (!t) {
						var n = this.space,
							i = this.convs[n];
						t = o[n][e](i), this.convs[e] = t
					}
					return t
				}, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
					c.prototype[e] = function (t) {
						return this.routeSpace(e, arguments)
					}
				}), t.exports = o
			}, {
				4: 4
			}],
			6: [function (e, t, n) {
				t.exports = {
					aliceblue: [240, 248, 255],
					antiquewhite: [250, 235, 215],
					aqua: [0, 255, 255],
					aquamarine: [127, 255, 212],
					azure: [240, 255, 255],
					beige: [245, 245, 220],
					bisque: [255, 228, 196],
					black: [0, 0, 0],
					blanchedalmond: [255, 235, 205],
					blue: [0, 0, 255],
					blueviolet: [138, 43, 226],
					brown: [165, 42, 42],
					burlywood: [222, 184, 135],
					cadetblue: [95, 158, 160],
					chartreuse: [127, 255, 0],
					chocolate: [210, 105, 30],
					coral: [255, 127, 80],
					cornflowerblue: [100, 149, 237],
					cornsilk: [255, 248, 220],
					crimson: [220, 20, 60],
					cyan: [0, 255, 255],
					darkblue: [0, 0, 139],
					darkcyan: [0, 139, 139],
					darkgoldenrod: [184, 134, 11],
					darkgray: [169, 169, 169],
					darkgreen: [0, 100, 0],
					darkgrey: [169, 169, 169],
					darkkhaki: [189, 183, 107],
					darkmagenta: [139, 0, 139],
					darkolivegreen: [85, 107, 47],
					darkorange: [255, 140, 0],
					darkorchid: [153, 50, 204],
					darkred: [139, 0, 0],
					darksalmon: [233, 150, 122],
					darkseagreen: [143, 188, 143],
					darkslateblue: [72, 61, 139],
					darkslategray: [47, 79, 79],
					darkslategrey: [47, 79, 79],
					darkturquoise: [0, 206, 209],
					darkviolet: [148, 0, 211],
					deeppink: [255, 20, 147],
					deepskyblue: [0, 191, 255],
					dimgray: [105, 105, 105],
					dimgrey: [105, 105, 105],
					dodgerblue: [30, 144, 255],
					firebrick: [178, 34, 34],
					floralwhite: [255, 250, 240],
					forestgreen: [34, 139, 34],
					fuchsia: [255, 0, 255],
					gainsboro: [220, 220, 220],
					ghostwhite: [248, 248, 255],
					gold: [255, 215, 0],
					goldenrod: [218, 165, 32],
					gray: [128, 128, 128],
					green: [0, 128, 0],
					greenyellow: [173, 255, 47],
					grey: [128, 128, 128],
					honeydew: [240, 255, 240],
					hotpink: [255, 105, 180],
					indianred: [205, 92, 92],
					indigo: [75, 0, 130],
					ivory: [255, 255, 240],
					khaki: [240, 230, 140],
					lavender: [230, 230, 250],
					lavenderblush: [255, 240, 245],
					lawngreen: [124, 252, 0],
					lemonchiffon: [255, 250, 205],
					lightblue: [173, 216, 230],
					lightcoral: [240, 128, 128],
					lightcyan: [224, 255, 255],
					lightgoldenrodyellow: [250, 250, 210],
					lightgray: [211, 211, 211],
					lightgreen: [144, 238, 144],
					lightgrey: [211, 211, 211],
					lightpink: [255, 182, 193],
					lightsalmon: [255, 160, 122],
					lightseagreen: [32, 178, 170],
					lightskyblue: [135, 206, 250],
					lightslategray: [119, 136, 153],
					lightslategrey: [119, 136, 153],
					lightsteelblue: [176, 196, 222],
					lightyellow: [255, 255, 224],
					lime: [0, 255, 0],
					limegreen: [50, 205, 50],
					linen: [250, 240, 230],
					magenta: [255, 0, 255],
					maroon: [128, 0, 0],
					mediumaquamarine: [102, 205, 170],
					mediumblue: [0, 0, 205],
					mediumorchid: [186, 85, 211],
					mediumpurple: [147, 112, 219],
					mediumseagreen: [60, 179, 113],
					mediumslateblue: [123, 104, 238],
					mediumspringgreen: [0, 250, 154],
					mediumturquoise: [72, 209, 204],
					mediumvioletred: [199, 21, 133],
					midnightblue: [25, 25, 112],
					mintcream: [245, 255, 250],
					mistyrose: [255, 228, 225],
					moccasin: [255, 228, 181],
					navajowhite: [255, 222, 173],
					navy: [0, 0, 128],
					oldlace: [253, 245, 230],
					olive: [128, 128, 0],
					olivedrab: [107, 142, 35],
					orange: [255, 165, 0],
					orangered: [255, 69, 0],
					orchid: [218, 112, 214],
					palegoldenrod: [238, 232, 170],
					palegreen: [152, 251, 152],
					paleturquoise: [175, 238, 238],
					palevioletred: [219, 112, 147],
					papayawhip: [255, 239, 213],
					peachpuff: [255, 218, 185],
					peru: [205, 133, 63],
					pink: [255, 192, 203],
					plum: [221, 160, 221],
					powderblue: [176, 224, 230],
					purple: [128, 0, 128],
					rebeccapurple: [102, 51, 153],
					red: [255, 0, 0],
					rosybrown: [188, 143, 143],
					royalblue: [65, 105, 225],
					saddlebrown: [139, 69, 19],
					salmon: [250, 128, 114],
					sandybrown: [244, 164, 96],
					seagreen: [46, 139, 87],
					seashell: [255, 245, 238],
					sienna: [160, 82, 45],
					silver: [192, 192, 192],
					skyblue: [135, 206, 235],
					slateblue: [106, 90, 205],
					slategray: [112, 128, 144],
					slategrey: [112, 128, 144],
					snow: [255, 250, 250],
					springgreen: [0, 255, 127],
					steelblue: [70, 130, 180],
					tan: [210, 180, 140],
					teal: [0, 128, 128],
					thistle: [216, 191, 216],
					tomato: [255, 99, 71],
					turquoise: [64, 224, 208],
					violet: [238, 130, 238],
					wheat: [245, 222, 179],
					white: [255, 255, 255],
					whitesmoke: [245, 245, 245],
					yellow: [255, 255, 0],
					yellowgreen: [154, 205, 50]
				}
			}, {}],
			7: [function (e, t, n) {
				var i = e(28)();
				e(26)(i), e(40)(i), e(22)(i), e(25)(i), e(30)(i), e(21)(i), e(23)(i), e(24)(i), e(29)(i), e(32)(i), e(33)(i), e(31)(i), e(27)(i), e(34)(i), e(35)(i), e(36)(i), e(37)(i), e(38)(i), e(46)(i), e(44)(i), e(45)(i), e(47)(i), e(48)(i), e(49)(i), e(15)(i), e(16)(i), e(17)(i), e(18)(i), e(19)(i), e(20)(i), e(8)(i), e(9)(i), e(10)(i), e(11)(i), e(12)(i), e(13)(i), e(14)(i);
				var o = [];
				o.push(e(41)(i), e(42)(i), e(43)(i)), i.plugins.register(o), t.exports = i, "undefined" != typeof window && (window.Chart = i)
			}, {
				10: 10,
				11: 11,
				12: 12,
				13: 13,
				14: 14,
				15: 15,
				16: 16,
				17: 17,
				18: 18,
				19: 19,
				20: 20,
				21: 21,
				22: 22,
				23: 23,
				24: 24,
				25: 25,
				26: 26,
				27: 27,
				28: 28,
				29: 29,
				30: 30,
				31: 31,
				32: 32,
				33: 33,
				34: 34,
				35: 35,
				36: 36,
				37: 37,
				38: 38,
				40: 40,
				41: 41,
				42: 42,
				43: 43,
				44: 44,
				45: 45,
				46: 46,
				47: 47,
				48: 48,
				49: 49,
				8: 8,
				9: 9
			}],
			8: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					e.Bar = function (t, n) {
						return n.type = "bar", new e(t, n)
					}
				}
			}, {}],
			9: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					e.Bubble = function (t, n) {
						return n.type = "bubble", new e(t, n)
					}
				}
			}, {}],
			10: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					e.Doughnut = function (t, n) {
						return n.type = "doughnut", new e(t, n)
					}
				}
			}, {}],
			11: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					e.Line = function (t, n) {
						return n.type = "line", new e(t, n)
					}
				}
			}, {}],
			12: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					e.PolarArea = function (t, n) {
						return n.type = "polarArea", new e(t, n)
					}
				}
			}, {}],
			13: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					e.Radar = function (t, n) {
						return n.type = "radar", new e(t, n)
					}
				}
			}, {}],
			14: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = {
						hover: {
							mode: "single"
						},
						scales: {
							xAxes: [{
								type: "linear",
								position: "bottom",
								id: "x-axis-1"
							}],
							yAxes: [{
								type: "linear",
								position: "left",
								id: "y-axis-1"
							}]
						},
						tooltips: {
							callbacks: {
								title: function () {
									return ""
								},
								label: function (e) {
									return "(" + e.xLabel + ", " + e.yLabel + ")"
								}
							}
						}
					};
					e.defaults.scatter = t, e.controllers.scatter = e.controllers.line, e.Scatter = function (t, n) {
						return n.type = "scatter", new e(t, n)
					}
				}
			}, {}],
			15: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.defaults.bar = {
						hover: {
							mode: "label"
						},
						scales: {
							xAxes: [{
								type: "category",
								categoryPercentage: .8,
								barPercentage: .9,
								gridLines: {
									offsetGridLines: !0
								}
							}],
							yAxes: [{
								type: "linear"
							}]
						}
					}, e.controllers.bar = e.DatasetController.extend({
						dataElementType: e.elements.Rectangle,
						initialize: function () {
							var t, n = this;
							e.DatasetController.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0
						},
						update: function (e) {
							var t, n, i = this,
								o = i.getMeta().data;
							for (i._ruler = i.getRuler(), t = 0, n = o.length; t < n; ++t) i.updateElement(o[t], t, e)
						},
						updateElement: function (e, n, i) {
							var o = this,
								r = o.chart,
								a = o.getMeta(),
								s = o.getDataset(),
								l = e.custom || {},
								c = r.options.elements.rectangle;
							e._xScale = o.getScaleForId(a.xAxisID), e._yScale = o.getScaleForId(a.yAxisID), e._datasetIndex = o.index, e._index = n, e._model = {
								datasetLabel: s.label,
								label: r.data.labels[n],
								borderSkipped: l.borderSkipped ? l.borderSkipped : c.borderSkipped,
								backgroundColor: l.backgroundColor ? l.backgroundColor : t.getValueAtIndexOrDefault(s.backgroundColor, n, c.backgroundColor),
								borderColor: l.borderColor ? l.borderColor : t.getValueAtIndexOrDefault(s.borderColor, n, c.borderColor),
								borderWidth: l.borderWidth ? l.borderWidth : t.getValueAtIndexOrDefault(s.borderWidth, n, c.borderWidth)
							}, o.updateElementGeometry(e, n, i), e.pivot()
						},
						updateElementGeometry: function (e, t, n) {
							var i = this,
								o = e._model,
								r = i.getValueScale(),
								a = r.getBasePixel(),
								s = r.isHorizontal(),
								l = i._ruler || i.getRuler(),
								c = i.calculateBarValuePixels(i.index, t),
								u = i.calculateBarIndexPixels(i.index, t, l);
							o.horizontal = s, o.base = n ? a : c.base, o.x = s ? n ? a : c.head : u.center, o.y = s ? u.center : n ? a : c.head, o.height = s ? u.size : void 0, o.width = s ? void 0 : u.size
						},
						getValueScaleId: function () {
							return this.getMeta().yAxisID
						},
						getIndexScaleId: function () {
							return this.getMeta().xAxisID
						},
						getValueScale: function () {
							return this.getScaleForId(this.getValueScaleId())
						},
						getIndexScale: function () {
							return this.getScaleForId(this.getIndexScaleId())
						},
						getStackCount: function (e) {
							var t, n, i = this,
								o = i.chart,
								r = i.getIndexScale().options.stacked,
								a = void 0 === e ? o.data.datasets.length : e + 1,
								s = [];
							for (t = 0; t < a; ++t)(n = o.getDatasetMeta(t)).bar && o.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === s.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === s.indexOf(n.stack))) && s.push(n.stack);
							return s.length
						},
						getStackIndex: function (e) {
							return this.getStackCount(e) - 1
						},
						getRuler: function () {
							var e = this,
								n = e.getIndexScale(),
								i = n.options,
								o = e.getStackCount(),
								r = (n.isHorizontal() ? n.width : n.height) / n.ticks.length,
								a = r * i.categoryPercentage,
								s = a / o,
								l = s * i.barPercentage;
							return l = Math.min(t.getValueOrDefault(i.barThickness, l), t.getValueOrDefault(i.maxBarThickness, 1 / 0)), {
								stackCount: o,
								tickSize: r,
								categorySize: a,
								categorySpacing: r - a,
								fullBarSize: s,
								barSize: l,
								barSpacing: s - l,
								scale: n
							}
						},
						calculateBarValuePixels: function (e, t) {
							var n, i, o, r, a, s, l = this,
								c = l.chart,
								u = l.getMeta(),
								d = l.getValueScale(),
								h = c.data.datasets,
								f = Number(h[e].data[t]),
								p = d.options.stacked,
								m = u.stack,
								g = 0;
							if (p || void 0 === p && void 0 !== m)
								for (n = 0; n < e; ++n)(i = c.getDatasetMeta(n)).bar && i.stack === m && i.controller.getValueScaleId() === d.id && c.isDatasetVisible(n) && (o = Number(h[n].data[t]), (f < 0 && o < 0 || f >= 0 && o > 0) && (g += o));
							return r = d.getPixelForValue(g), a = d.getPixelForValue(g + f), s = (a - r) / 2, {
								size: s,
								base: r,
								head: a,
								center: a + s / 2
							}
						},
						calculateBarIndexPixels: function (e, t, n) {
							var i = this,
								o = n.scale,
								r = i.chart.isCombo,
								a = i.getStackIndex(e),
								s = o.getPixelForValue(null, t, e, r),
								l = n.barSize;
							return s -= r ? n.tickSize / 2 : 0, s += n.fullBarSize * a, s += n.categorySpacing / 2, s += n.barSpacing / 2, {
								size: l,
								base: s,
								head: s + l,
								center: s + l / 2
							}
						},
						draw: function () {
							var e, n = this,
								i = n.chart,
								o = n.getMeta().data,
								r = n.getDataset(),
								a = o.length,
								s = 0;
							for (t.canvas.clipArea(i.ctx, i.chartArea); s < a; ++s) null === (e = r.data[s]) || void 0 === e || isNaN(e) || o[s].draw();
							t.canvas.unclipArea(i.ctx)
						},
						setHoverStyle: function (e) {
							var n = this.chart.data.datasets[e._datasetIndex],
								i = e._index,
								o = e.custom || {},
								r = e._model;
							r.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : t.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, t.getHoverColor(r.backgroundColor)), r.borderColor = o.hoverBorderColor ? o.hoverBorderColor : t.getValueAtIndexOrDefault(n.hoverBorderColor, i, t.getHoverColor(r.borderColor)), r.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : t.getValueAtIndexOrDefault(n.hoverBorderWidth, i, r.borderWidth)
						},
						removeHoverStyle: function (e) {
							var n = this.chart.data.datasets[e._datasetIndex],
								i = e._index,
								o = e.custom || {},
								r = e._model,
								a = this.chart.options.elements.rectangle;
							r.backgroundColor = o.backgroundColor ? o.backgroundColor : t.getValueAtIndexOrDefault(n.backgroundColor, i, a.backgroundColor), r.borderColor = o.borderColor ? o.borderColor : t.getValueAtIndexOrDefault(n.borderColor, i, a.borderColor), r.borderWidth = o.borderWidth ? o.borderWidth : t.getValueAtIndexOrDefault(n.borderWidth, i, a.borderWidth)
						}
					}), e.defaults.horizontalBar = {
						hover: {
							mode: "label"
						},
						scales: {
							xAxes: [{
								type: "linear",
								position: "bottom"
							}],
							yAxes: [{
								position: "left",
								type: "category",
								categoryPercentage: .8,
								barPercentage: .9,
								gridLines: {
									offsetGridLines: !0
								}
							}]
						},
						elements: {
							rectangle: {
								borderSkipped: "left"
							}
						},
						tooltips: {
							callbacks: {
								title: function (e, t) {
									var n = "";
									return e.length > 0 && (e[0].yLabel ? n = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (n = t.labels[e[0].index])), n
								},
								label: function (e, t) {
									return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
								}
							}
						}
					}, e.controllers.horizontalBar = e.controllers.bar.extend({
						getValueScaleId: function () {
							return this.getMeta().xAxisID
						},
						getIndexScaleId: function () {
							return this.getMeta().yAxisID
						}
					})
				}
			}, {}],
			16: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.defaults.bubble = {
						hover: {
							mode: "single"
						},
						scales: {
							xAxes: [{
								type: "linear",
								position: "bottom",
								id: "x-axis-0"
							}],
							yAxes: [{
								type: "linear",
								position: "left",
								id: "y-axis-0"
							}]
						},
						tooltips: {
							callbacks: {
								title: function () {
									return ""
								},
								label: function (e, t) {
									var n = t.datasets[e.datasetIndex].label || "",
										i = t.datasets[e.datasetIndex].data[e.index];
									return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + i.r + ")"
								}
							}
						}
					}, e.controllers.bubble = e.DatasetController.extend({
						dataElementType: e.elements.Point,
						update: function (e) {
							var n = this,
								i = n.getMeta().data;
							t.each(i, function (t, i) {
								n.updateElement(t, i, e)
							})
						},
						updateElement: function (n, i, o) {
							var r = this,
								a = r.getMeta(),
								s = r.getScaleForId(a.xAxisID),
								l = r.getScaleForId(a.yAxisID),
								c = n.custom || {},
								u = r.getDataset(),
								d = u.data[i],
								h = r.chart.options.elements.point,
								f = r.index;
							t.extend(n, {
								_xScale: s,
								_yScale: l,
								_datasetIndex: f,
								_index: i,
								_model: {
									x: o ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof d ? d : NaN, i, f, r.chart.isCombo),
									y: o ? l.getBasePixel() : l.getPixelForValue(d, i, f),
									radius: o ? 0 : c.radius ? c.radius : r.getRadius(d),
									hitRadius: c.hitRadius ? c.hitRadius : t.getValueAtIndexOrDefault(u.hitRadius, i, h.hitRadius)
								}
							}), e.DatasetController.prototype.removeHoverStyle.call(r, n, h);
							var p = n._model;
							p.skip = c.skip ? c.skip : isNaN(p.x) || isNaN(p.y), n.pivot()
						},
						getRadius: function (e) {
							return e.r || this.chart.options.elements.point.radius
						},
						setHoverStyle: function (n) {
							var i = this;
							e.DatasetController.prototype.setHoverStyle.call(i, n);
							var o = i.chart.data.datasets[n._datasetIndex],
								r = n._index,
								a = n.custom || {};
							n._model.radius = a.hoverRadius ? a.hoverRadius : t.getValueAtIndexOrDefault(o.hoverRadius, r, i.chart.options.elements.point.hoverRadius) + i.getRadius(o.data[r])
						},
						removeHoverStyle: function (t) {
							var n = this;
							e.DatasetController.prototype.removeHoverStyle.call(n, t, n.chart.options.elements.point);
							var i = n.chart.data.datasets[t._datasetIndex].data[t._index],
								o = t.custom || {};
							t._model.radius = o.radius ? o.radius : n.getRadius(i)
						}
					})
				}
			}, {}],
			17: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers,
						n = e.defaults;
					n.doughnut = {
						animation: {
							animateRotate: !0,
							animateScale: !1
						},
						aspectRatio: 1,
						hover: {
							mode: "single"
						},
						legendCallback: function (e) {
							var t = [];
							t.push('<ul class="' + e.id + '-legend">');
							var n = e.data,
								i = n.datasets,
								o = n.labels;
							if (i.length)
								for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && t.push(o[r]), t.push("</li>");
							return t.push("</ul>"), t.join("")
						},
						legend: {
							labels: {
								generateLabels: function (e) {
									var n = e.data;
									return n.labels.length && n.datasets.length ? n.labels.map(function (i, o) {
										var r = e.getDatasetMeta(0),
											a = n.datasets[0],
											s = r.data[o],
											l = s && s.custom || {},
											c = t.getValueAtIndexOrDefault,
											u = e.options.elements.arc;
										return {
											text: i,
											fillStyle: l.backgroundColor ? l.backgroundColor : c(a.backgroundColor, o, u.backgroundColor),
											strokeStyle: l.borderColor ? l.borderColor : c(a.borderColor, o, u.borderColor),
											lineWidth: l.borderWidth ? l.borderWidth : c(a.borderWidth, o, u.borderWidth),
											hidden: isNaN(a.data[o]) || r.data[o].hidden,
											index: o
										}
									}) : []
								}
							},
							onClick: function (e, t) {
								var n, i, o, r = t.index,
									a = this.chart;
								for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(o = a.getDatasetMeta(n)).data[r] && (o.data[r].hidden = !o.data[r].hidden);
								a.update()
							}
						},
						cutoutPercentage: 50,
						rotation: -.5 * Math.PI,
						circumference: 2 * Math.PI,
						tooltips: {
							callbacks: {
								title: function () {
									return ""
								},
								label: function (e, n) {
									var i = n.labels[e.index],
										o = ": " + n.datasets[e.datasetIndex].data[e.index];
									return t.isArray(i) ? (i = i.slice())[0] += o : i += o, i
								}
							}
						}
					}, n.pie = t.clone(n.doughnut), t.extend(n.pie, {
						cutoutPercentage: 0
					}), e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
						dataElementType: e.elements.Arc,
						linkScales: t.noop,
						getRingIndex: function (e) {
							for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
							return t
						},
						update: function (e) {
							var n = this,
								i = n.chart,
								o = i.chartArea,
								r = i.options,
								a = r.elements.arc,
								s = o.right - o.left - a.borderWidth,
								l = o.bottom - o.top - a.borderWidth,
								c = Math.min(s, l),
								u = {
									x: 0,
									y: 0
								},
								d = n.getMeta(),
								h = r.cutoutPercentage,
								f = r.circumference;
							if (f < 2 * Math.PI) {
								var p = r.rotation % (2 * Math.PI),
									m = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
									g = {
										x: Math.cos(p),
										y: Math.sin(p)
									},
									v = {
										x: Math.cos(m),
										y: Math.sin(m)
									},
									y = p <= 0 && 0 <= m || p <= 2 * Math.PI && 2 * Math.PI <= m,
									b = p <= .5 * Math.PI && .5 * Math.PI <= m || p <= 2.5 * Math.PI && 2.5 * Math.PI <= m,
									x = p <= -Math.PI && -Math.PI <= m || p <= Math.PI && Math.PI <= m,
									w = p <= .5 * -Math.PI && .5 * -Math.PI <= m || p <= 1.5 * Math.PI && 1.5 * Math.PI <= m,
									C = h / 100,
									k = {
										x: x ? -1 : Math.min(g.x * (g.x < 0 ? 1 : C), v.x * (v.x < 0 ? 1 : C)),
										y: w ? -1 : Math.min(g.y * (g.y < 0 ? 1 : C), v.y * (v.y < 0 ? 1 : C))
									},
									T = {
										x: y ? 1 : Math.max(g.x * (g.x > 0 ? 1 : C), v.x * (v.x > 0 ? 1 : C)),
										y: b ? 1 : Math.max(g.y * (g.y > 0 ? 1 : C), v.y * (v.y > 0 ? 1 : C))
									},
									_ = {
										width: .5 * (T.x - k.x),
										height: .5 * (T.y - k.y)
									};
								c = Math.min(s / _.width, l / _.height), u = {
									x: -.5 * (T.x + k.x),
									y: -.5 * (T.y + k.y)
								}
							}
							i.borderWidth = n.getMaxBorderWidth(d.data), i.outerRadius = Math.max((c - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, d.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - i.radiusLength, 0), t.each(d.data, function (t, i) {
								n.updateElement(t, i, e)
							})
						},
						updateElement: function (e, n, i) {
							var o = this,
								r = o.chart,
								a = r.chartArea,
								s = r.options,
								l = s.animation,
								c = (a.left + a.right) / 2,
								u = (a.top + a.bottom) / 2,
								d = s.rotation,
								h = s.rotation,
								f = o.getDataset(),
								p = i && l.animateRotate ? 0 : e.hidden ? 0 : o.calculateCircumference(f.data[n]) * (s.circumference / (2 * Math.PI)),
								m = i && l.animateScale ? 0 : o.innerRadius,
								g = i && l.animateScale ? 0 : o.outerRadius,
								v = t.getValueAtIndexOrDefault;
							t.extend(e, {
								_datasetIndex: o.index,
								_index: n,
								_model: {
									x: c + r.offsetX,
									y: u + r.offsetY,
									startAngle: d,
									endAngle: h,
									circumference: p,
									outerRadius: g,
									innerRadius: m,
									label: v(f.label, n, r.data.labels[n])
								}
							});
							var y = e._model;
							this.removeHoverStyle(e), i && l.animateRotate || (y.startAngle = 0 === n ? s.rotation : o.getMeta().data[n - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
						},
						removeHoverStyle: function (t) {
							e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
						},
						calculateTotal: function () {
							var e, n = this.getDataset(),
								i = this.getMeta(),
								o = 0;
							return t.each(i.data, function (t, i) {
								e = n.data[i], isNaN(e) || t.hidden || (o += Math.abs(e))
							}), o
						},
						calculateCircumference: function (e) {
							var t = this.getMeta().total;
							return t > 0 && !isNaN(e) ? 2 * Math.PI * (e / t) : 0
						},
						getMaxBorderWidth: function (e) {
							for (var t, n, i = 0, o = this.index, r = e.length, a = 0; a < r; a++) t = e[a]._model ? e[a]._model.borderWidth : 0, i = (n = e[a]._chart ? e[a]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (i = t > i ? t : i) ? n : i;
							return i
						}
					})
				}
			}, {}],
			18: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t) {
						return n.getValueOrDefault(e.showLine, t.showLines)
					}
					var n = e.helpers;
					e.defaults.line = {
						showLines: !0,
						spanGaps: !1,
						hover: {
							mode: "label"
						},
						scales: {
							xAxes: [{
								type: "category",
								id: "x-axis-0"
							}],
							yAxes: [{
								type: "linear",
								id: "y-axis-0"
							}]
						}
					}, e.controllers.line = e.DatasetController.extend({
						datasetElementType: e.elements.Line,
						dataElementType: e.elements.Point,
						update: function (e) {
							var i, o, r, a = this,
								s = a.getMeta(),
								l = s.dataset,
								c = s.data || [],
								u = a.chart.options,
								d = u.elements.line,
								h = a.getScaleForId(s.yAxisID),
								f = a.getDataset(),
								p = t(f, u);
							for (p && (r = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = a.index, l._children = c, l._model = {
									spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
									tension: r.tension ? r.tension : n.getValueOrDefault(f.lineTension, d.tension),
									backgroundColor: r.backgroundColor ? r.backgroundColor : f.backgroundColor || d.backgroundColor,
									borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || d.borderWidth,
									borderColor: r.borderColor ? r.borderColor : f.borderColor || d.borderColor,
									borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
									borderDash: r.borderDash ? r.borderDash : f.borderDash || d.borderDash,
									borderDashOffset: r.borderDashOffset ? r.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
									borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
									fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : d.fill,
									steppedLine: r.steppedLine ? r.steppedLine : n.getValueOrDefault(f.steppedLine, d.stepped),
									cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : n.getValueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
								}, l.pivot()), i = 0, o = c.length; i < o; ++i) a.updateElement(c[i], i, e);
							for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), i = 0, o = c.length; i < o; ++i) c[i].pivot()
						},
						getPointBackgroundColor: function (e, t) {
							var i = this.chart.options.elements.point.backgroundColor,
								o = this.getDataset(),
								r = e.custom || {};
							return r.backgroundColor ? i = r.backgroundColor : o.pointBackgroundColor ? i = n.getValueAtIndexOrDefault(o.pointBackgroundColor, t, i) : o.backgroundColor && (i = o.backgroundColor), i
						},
						getPointBorderColor: function (e, t) {
							var i = this.chart.options.elements.point.borderColor,
								o = this.getDataset(),
								r = e.custom || {};
							return r.borderColor ? i = r.borderColor : o.pointBorderColor ? i = n.getValueAtIndexOrDefault(o.pointBorderColor, t, i) : o.borderColor && (i = o.borderColor), i
						},
						getPointBorderWidth: function (e, t) {
							var i = this.chart.options.elements.point.borderWidth,
								o = this.getDataset(),
								r = e.custom || {};
							return isNaN(r.borderWidth) ? isNaN(o.pointBorderWidth) ? isNaN(o.borderWidth) || (i = o.borderWidth) : i = n.getValueAtIndexOrDefault(o.pointBorderWidth, t, i) : i = r.borderWidth, i
						},
						updateElement: function (e, t, i) {
							var o, r, a = this,
								s = a.getMeta(),
								l = e.custom || {},
								c = a.getDataset(),
								u = a.index,
								d = c.data[t],
								h = a.getScaleForId(s.yAxisID),
								f = a.getScaleForId(s.xAxisID),
								p = a.chart.options.elements.point,
								m = 1 === (a.chart.data.labels || []).length || 1 === c.data.length || a.chart.isCombo;
							void 0 !== c.radius && void 0 === c.pointRadius && (c.pointRadius = c.radius), void 0 !== c.hitRadius && void 0 === c.pointHitRadius && (c.pointHitRadius = c.hitRadius), o = f.getPixelForValue("object" == typeof d ? d : NaN, t, u, m), r = i ? h.getBasePixel() : a.calculatePointY(d, t, u), e._xScale = f, e._yScale = h, e._datasetIndex = u, e._index = t, e._model = {
								x: o,
								y: r,
								skip: l.skip || isNaN(o) || isNaN(r),
								radius: l.radius || n.getValueAtIndexOrDefault(c.pointRadius, t, p.radius),
								pointStyle: l.pointStyle || n.getValueAtIndexOrDefault(c.pointStyle, t, p.pointStyle),
								backgroundColor: a.getPointBackgroundColor(e, t),
								borderColor: a.getPointBorderColor(e, t),
								borderWidth: a.getPointBorderWidth(e, t),
								tension: s.dataset._model ? s.dataset._model.tension : 0,
								steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
								hitRadius: l.hitRadius || n.getValueAtIndexOrDefault(c.pointHitRadius, t, p.hitRadius)
							}
						},
						calculatePointY: function (e, t, n) {
							var i, o, r, a = this,
								s = a.chart,
								l = a.getMeta(),
								c = a.getScaleForId(l.yAxisID),
								u = 0,
								d = 0;
							if (c.options.stacked) {
								for (i = 0; i < n; i++)
									if (o = s.data.datasets[i], "line" === (r = s.getDatasetMeta(i)).type && r.yAxisID === c.id && s.isDatasetVisible(i)) {
										var h = Number(c.getRightValue(o.data[t]));
										h < 0 ? d += h || 0 : u += h || 0
									}
								var f = Number(c.getRightValue(e));
								return f < 0 ? c.getPixelForValue(d + f) : c.getPixelForValue(u + f)
							}
							return c.getPixelForValue(e)
						},
						updateBezierControlPoints: function () {
							function e(e, t, n) {
								return Math.max(Math.min(e, n), t)
							}
							var t, i, o, r, a = this,
								s = a.getMeta(),
								l = a.chart.chartArea,
								c = s.data || [];
							if (s.dataset._model.spanGaps && (c = c.filter(function (e) {
									return !e._model.skip
								})), "monotone" === s.dataset._model.cubicInterpolationMode) n.splineCurveMonotone(c);
							else
								for (t = 0, i = c.length; t < i; ++t) o = c[t]._model, r = n.splineCurve(n.previousItem(c, t)._model, o, n.nextItem(c, t)._model, s.dataset._model.tension), o.controlPointPreviousX = r.previous.x, o.controlPointPreviousY = r.previous.y, o.controlPointNextX = r.next.x, o.controlPointNextY = r.next.y;
							if (a.chart.options.elements.line.capBezierPoints)
								for (t = 0, i = c.length; t < i; ++t)(o = c[t]._model).controlPointPreviousX = e(o.controlPointPreviousX, l.left, l.right), o.controlPointPreviousY = e(o.controlPointPreviousY, l.top, l.bottom), o.controlPointNextX = e(o.controlPointNextX, l.left, l.right), o.controlPointNextY = e(o.controlPointNextY, l.top, l.bottom)
						},
						draw: function () {
							var n = this,
								i = n.chart,
								o = n.getMeta(),
								r = o.data || [],
								a = i.chartArea,
								s = r.length,
								l = 0;
							for (e.canvasHelpers.clipArea(i.ctx, a), t(n.getDataset(), i.options) && o.dataset.draw(), e.canvasHelpers.unclipArea(i.ctx); l < s; ++l) r[l].draw(a)
						},
						setHoverStyle: function (e) {
							var t = this.chart.data.datasets[e._datasetIndex],
								i = e._index,
								o = e.custom || {},
								r = e._model;
							r.radius = o.hoverRadius || n.getValueAtIndexOrDefault(t.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = o.hoverBackgroundColor || n.getValueAtIndexOrDefault(t.pointHoverBackgroundColor, i, n.getHoverColor(r.backgroundColor)), r.borderColor = o.hoverBorderColor || n.getValueAtIndexOrDefault(t.pointHoverBorderColor, i, n.getHoverColor(r.borderColor)), r.borderWidth = o.hoverBorderWidth || n.getValueAtIndexOrDefault(t.pointHoverBorderWidth, i, r.borderWidth)
						},
						removeHoverStyle: function (e) {
							var t = this,
								i = t.chart.data.datasets[e._datasetIndex],
								o = e._index,
								r = e.custom || {},
								a = e._model;
							void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), a.radius = r.radius || n.getValueAtIndexOrDefault(i.pointRadius, o, t.chart.options.elements.point.radius), a.backgroundColor = t.getPointBackgroundColor(e, o), a.borderColor = t.getPointBorderColor(e, o), a.borderWidth = t.getPointBorderWidth(e, o)
						}
					})
				}
			}, {}],
			19: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.defaults.polarArea = {
						scale: {
							type: "radialLinear",
							angleLines: {
								display: !1
							},
							gridLines: {
								circular: !0
							},
							pointLabels: {
								display: !1
							},
							ticks: {
								beginAtZero: !0
							}
						},
						animation: {
							animateRotate: !0,
							animateScale: !0
						},
						startAngle: -.5 * Math.PI,
						aspectRatio: 1,
						legendCallback: function (e) {
							var t = [];
							t.push('<ul class="' + e.id + '-legend">');
							var n = e.data,
								i = n.datasets,
								o = n.labels;
							if (i.length)
								for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && t.push(o[r]), t.push("</li>");
							return t.push("</ul>"), t.join("")
						},
						legend: {
							labels: {
								generateLabels: function (e) {
									var n = e.data;
									return n.labels.length && n.datasets.length ? n.labels.map(function (i, o) {
										var r = e.getDatasetMeta(0),
											a = n.datasets[0],
											s = r.data[o].custom || {},
											l = t.getValueAtIndexOrDefault,
											c = e.options.elements.arc;
										return {
											text: i,
											fillStyle: s.backgroundColor ? s.backgroundColor : l(a.backgroundColor, o, c.backgroundColor),
											strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, o, c.borderColor),
											lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, o, c.borderWidth),
											hidden: isNaN(a.data[o]) || r.data[o].hidden,
											index: o
										}
									}) : []
								}
							},
							onClick: function (e, t) {
								var n, i, o, r = t.index,
									a = this.chart;
								for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(o = a.getDatasetMeta(n)).data[r].hidden = !o.data[r].hidden;
								a.update()
							}
						},
						tooltips: {
							callbacks: {
								title: function () {
									return ""
								},
								label: function (e, t) {
									return t.labels[e.index] + ": " + e.yLabel
								}
							}
						}
					}, e.controllers.polarArea = e.DatasetController.extend({
						dataElementType: e.elements.Arc,
						linkScales: t.noop,
						update: function (e) {
							var n = this,
								i = n.chart,
								o = i.chartArea,
								r = n.getMeta(),
								a = i.options,
								s = a.elements.arc,
								l = Math.min(o.right - o.left, o.bottom - o.top);
							i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(a.cutoutPercentage ? i.outerRadius / 100 * a.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, r.count = n.countVisibleElements(), t.each(r.data, function (t, i) {
								n.updateElement(t, i, e)
							})
						},
						updateElement: function (e, n, i) {
							for (var o = this, r = o.chart, a = o.getDataset(), s = r.options, l = s.animation, c = r.scale, u = t.getValueAtIndexOrDefault, d = r.data.labels, h = o.calculateCircumference(a.data[n]), f = c.xCenter, p = c.yCenter, m = 0, g = o.getMeta(), v = 0; v < n; ++v) isNaN(a.data[v]) || g.data[v].hidden || ++m;
							var y = s.startAngle,
								b = e.hidden ? 0 : c.getDistanceFromCenterForValue(a.data[n]),
								x = y + h * m,
								w = x + (e.hidden ? 0 : h),
								C = l.animateScale ? 0 : c.getDistanceFromCenterForValue(a.data[n]);
							t.extend(e, {
								_datasetIndex: o.index,
								_index: n,
								_scale: c,
								_model: {
									x: f,
									y: p,
									innerRadius: 0,
									outerRadius: i ? C : b,
									startAngle: i && l.animateRotate ? y : x,
									endAngle: i && l.animateRotate ? y : w,
									label: u(d, n, d[n])
								}
							}), o.removeHoverStyle(e), e.pivot()
						},
						removeHoverStyle: function (t) {
							e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
						},
						countVisibleElements: function () {
							var e = this.getDataset(),
								n = this.getMeta(),
								i = 0;
							return t.each(n.data, function (t, n) {
								isNaN(e.data[n]) || t.hidden || i++
							}), i
						},
						calculateCircumference: function (e) {
							var t = this.getMeta().count;
							return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
						}
					})
				}
			}, {}],
			20: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.defaults.radar = {
						aspectRatio: 1,
						scale: {
							type: "radialLinear"
						},
						elements: {
							line: {
								tension: 0
							}
						}
					}, e.controllers.radar = e.DatasetController.extend({
						datasetElementType: e.elements.Line,
						dataElementType: e.elements.Point,
						linkScales: t.noop,
						update: function (e) {
							var n = this,
								i = n.getMeta(),
								o = i.dataset,
								r = i.data,
								a = o.custom || {},
								s = n.getDataset(),
								l = n.chart.options.elements.line,
								c = n.chart.scale;
							void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), t.extend(i.dataset, {
								_datasetIndex: n.index,
								_scale: c,
								_children: r,
								_loop: !0,
								_model: {
									tension: a.tension ? a.tension : t.getValueOrDefault(s.lineTension, l.tension),
									backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
									borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
									borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
									fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
									borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
									borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
									borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
									borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
								}
							}), i.dataset.pivot(), t.each(r, function (t, i) {
								n.updateElement(t, i, e)
							}, n), n.updateBezierControlPoints()
						},
						updateElement: function (e, n, i) {
							var o = this,
								r = e.custom || {},
								a = o.getDataset(),
								s = o.chart.scale,
								l = o.chart.options.elements.point,
								c = s.getPointPositionForValue(n, a.data[n]);
							void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), t.extend(e, {
								_datasetIndex: o.index,
								_index: n,
								_scale: s,
								_model: {
									x: i ? s.xCenter : c.x,
									y: i ? s.yCenter : c.y,
									tension: r.tension ? r.tension : t.getValueOrDefault(a.lineTension, o.chart.options.elements.line.tension),
									radius: r.radius ? r.radius : t.getValueAtIndexOrDefault(a.pointRadius, n, l.radius),
									backgroundColor: r.backgroundColor ? r.backgroundColor : t.getValueAtIndexOrDefault(a.pointBackgroundColor, n, l.backgroundColor),
									borderColor: r.borderColor ? r.borderColor : t.getValueAtIndexOrDefault(a.pointBorderColor, n, l.borderColor),
									borderWidth: r.borderWidth ? r.borderWidth : t.getValueAtIndexOrDefault(a.pointBorderWidth, n, l.borderWidth),
									pointStyle: r.pointStyle ? r.pointStyle : t.getValueAtIndexOrDefault(a.pointStyle, n, l.pointStyle),
									hitRadius: r.hitRadius ? r.hitRadius : t.getValueAtIndexOrDefault(a.pointHitRadius, n, l.hitRadius)
								}
							}), e._model.skip = r.skip ? r.skip : isNaN(e._model.x) || isNaN(e._model.y)
						},
						updateBezierControlPoints: function () {
							var e = this.chart.chartArea,
								n = this.getMeta();
							t.each(n.data, function (i, o) {
								var r = i._model,
									a = t.splineCurve(t.previousItem(n.data, o, !0)._model, r, t.nextItem(n.data, o, !0)._model, r.tension);
								r.controlPointPreviousX = Math.max(Math.min(a.previous.x, e.right), e.left), r.controlPointPreviousY = Math.max(Math.min(a.previous.y, e.bottom), e.top), r.controlPointNextX = Math.max(Math.min(a.next.x, e.right), e.left), r.controlPointNextY = Math.max(Math.min(a.next.y, e.bottom), e.top), i.pivot()
							})
						},
						setHoverStyle: function (e) {
							var n = this.chart.data.datasets[e._datasetIndex],
								i = e.custom || {},
								o = e._index,
								r = e._model;
							r.radius = i.hoverRadius ? i.hoverRadius : t.getValueAtIndexOrDefault(n.pointHoverRadius, o, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : t.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, o, t.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : t.getValueAtIndexOrDefault(n.pointHoverBorderColor, o, t.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : t.getValueAtIndexOrDefault(n.pointHoverBorderWidth, o, r.borderWidth)
						},
						removeHoverStyle: function (e) {
							var n = this.chart.data.datasets[e._datasetIndex],
								i = e.custom || {},
								o = e._index,
								r = e._model,
								a = this.chart.options.elements.point;
							r.radius = i.radius ? i.radius : t.getValueAtIndexOrDefault(n.pointRadius, o, a.radius), r.backgroundColor = i.backgroundColor ? i.backgroundColor : t.getValueAtIndexOrDefault(n.pointBackgroundColor, o, a.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : t.getValueAtIndexOrDefault(n.pointBorderColor, o, a.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : t.getValueAtIndexOrDefault(n.pointBorderWidth, o, a.borderWidth)
						}
					})
				}
			}, {}],
			21: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.defaults.global.animation = {
						duration: 1e3,
						easing: "easeOutQuart",
						onProgress: t.noop,
						onComplete: t.noop
					}, e.Animation = e.Element.extend({
						chart: null,
						currentStep: 0,
						numSteps: 60,
						easing: "",
						render: null,
						onAnimationProgress: null,
						onAnimationComplete: null
					}), e.animationService = {
						frameDuration: 17,
						animations: [],
						dropFrames: 0,
						request: null,
						addAnimation: function (e, t, n, i) {
							var o, r, a = this.animations;
							for (t.chart = e, i || (e.animating = !0), o = 0, r = a.length; o < r; ++o)
								if (a[o].chart === e) return void(a[o] = t);
							a.push(t), 1 === a.length && this.requestAnimationFrame()
						},
						cancelAnimation: function (e) {
							var n = t.findIndex(this.animations, function (t) {
								return t.chart === e
							}); - 1 !== n && (this.animations.splice(n, 1), e.animating = !1)
						},
						requestAnimationFrame: function () {
							var e = this;
							null === e.request && (e.request = t.requestAnimFrame.call(window, function () {
								e.request = null, e.startDigest()
							}))
						},
						startDigest: function () {
							var e = this,
								t = Date.now(),
								n = 0;
							e.dropFrames > 1 && (n = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + n);
							var i = Date.now();
							e.dropFrames += (i - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
						},
						advance: function (e) {
							for (var n, i, o = this.animations, r = 0; r < o.length;) i = (n = o[r]).chart, n.currentStep = (n.currentStep || 0) + e, n.currentStep = Math.min(n.currentStep, n.numSteps), t.callback(n.render, [i, n], i), t.callback(n.onAnimationProgress, [n], i), n.currentStep >= n.numSteps ? (t.callback(n.onAnimationComplete, [n], i), i.animating = !1, o.splice(r, 1)) : ++r
						}
					}, Object.defineProperty(e.Animation.prototype, "animationObject", {
						get: function () {
							return this
						}
					}), Object.defineProperty(e.Animation.prototype, "chartInstance", {
						get: function () {
							return this.chart
						},
						set: function (e) {
							this.chart = e
						}
					})
				}
			}, {}],
			22: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.canvasHelpers = {};
					t.drawPoint = function (t, n, i, o, r) {
						var a, s, l, c, u, d;
						if ("object" != typeof n || "[object HTMLImageElement]" !== (a = n.toString()) && "[object HTMLCanvasElement]" !== a) {
							if (!(isNaN(i) || i <= 0)) {
								switch (n) {
									default: t.beginPath(),
									t.arc(o, r, i, 0, 2 * Math.PI),
									t.closePath(),
									t.fill();
									break;
									case "triangle":
											t.beginPath(),
										u = (s = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2,
										t.moveTo(o - s / 2, r + u / 3),
										t.lineTo(o + s / 2, r + u / 3),
										t.lineTo(o, r - 2 * u / 3),
										t.closePath(),
										t.fill();
										break;
									case "rect":
											d = 1 / Math.SQRT2 * i,
										t.beginPath(),
										t.fillRect(o - d, r - d, 2 * d, 2 * d),
										t.strokeRect(o - d, r - d, 2 * d, 2 * d);
										break;
									case "rectRounded":
											var h = i / Math.SQRT2,
											f = o - h,
											p = r - h,
											m = Math.SQRT2 * i;e.helpers.drawRoundedRectangle(t, f, p, m, m, i / 2),
										t.fill();
										break;
									case "rectRot":
											d = 1 / Math.SQRT2 * i,
										t.beginPath(),
										t.moveTo(o - d, r),
										t.lineTo(o, r + d),
										t.lineTo(o + d, r),
										t.lineTo(o, r - d),
										t.closePath(),
										t.fill();
										break;
									case "cross":
											t.beginPath(),
										t.moveTo(o, r + i),
										t.lineTo(o, r - i),
										t.moveTo(o - i, r),
										t.lineTo(o + i, r),
										t.closePath();
										break;
									case "crossRot":
											t.beginPath(),
										l = Math.cos(Math.PI / 4) * i,
										c = Math.sin(Math.PI / 4) * i,
										t.moveTo(o - l, r - c),
										t.lineTo(o + l, r + c),
										t.moveTo(o - l, r + c),
										t.lineTo(o + l, r - c),
										t.closePath();
										break;
									case "star":
											t.beginPath(),
										t.moveTo(o, r + i),
										t.lineTo(o, r - i),
										t.moveTo(o - i, r),
										t.lineTo(o + i, r),
										l = Math.cos(Math.PI / 4) * i,
										c = Math.sin(Math.PI / 4) * i,
										t.moveTo(o - l, r - c),
										t.lineTo(o + l, r + c),
										t.moveTo(o - l, r + c),
										t.lineTo(o + l, r - c),
										t.closePath();
										break;
									case "line":
											t.beginPath(),
										t.moveTo(o - i, r),
										t.lineTo(o + i, r),
										t.closePath();
										break;
									case "dash":
											t.beginPath(),
										t.moveTo(o, r),
										t.lineTo(o + i, r),
										t.closePath()
								}
								t.stroke()
							}
						} else t.drawImage(n, o - n.width / 2, r - n.height / 2, n.width, n.height)
					}, t.clipArea = function (e, t) {
						e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
					}, t.unclipArea = function (e) {
						e.restore()
					}, t.lineTo = function (e, t, n, i) {
						if (n.steppedLine) return "after" === n.steppedLine ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y), void e.lineTo(n.x, n.y);
						n.tension ? e.bezierCurveTo(i ? t.controlPointPreviousX : t.controlPointNextX, i ? t.controlPointPreviousY : t.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
					}, e.helpers.canvas = t
				}
			}, {}],
			23: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(t) {
						var n = (t = t || {}).data = t.data || {};
						return n.datasets = n.datasets || [], n.labels = n.labels || [], t.options = o.configMerge(e.defaults.global, e.defaults[t.type], t.options || {}), t
					}

					function n(e) {
						var t = e.options;
						t.scale ? e.scale.options = t.scale : t.scales && t.scales.xAxes.concat(t.scales.yAxes).forEach(function (t) {
							e.scales[t.id].options = t
						}), e.tooltip._options = t.tooltips
					}

					function i(e) {
						return "top" === e || "bottom" === e
					}
					var o = e.helpers,
						r = e.plugins,
						a = e.platform;
					e.types = {}, e.instances = {}, e.controllers = {}, o.extend(e.prototype, {
						construct: function (n, i) {
							var r = this;
							i = t(i);
							var s = a.acquireContext(n, i),
								l = s && s.canvas,
								c = l && l.height,
								u = l && l.width;
							r.id = o.uid(), r.ctx = s, r.canvas = l, r.config = i, r.width = u, r.height = c, r.aspectRatio = c ? u / c : null, r.options = i.options, r._bufferedRender = !1, r.chart = r, r.controller = r, e.instances[r.id] = r, Object.defineProperty(r, "data", {
								get: function () {
									return r.config.data
								},
								set: function (e) {
									r.config.data = e
								}
							}), s && l ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item")
						},
						initialize: function () {
							var e = this;
							return r.notify(e, "beforeInit"), o.retinaScale(e), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildScales(), e.initToolTip(), r.notify(e, "afterInit"), e
						},
						clear: function () {
							return o.clear(this), this
						},
						stop: function () {
							return e.animationService.cancelAnimation(this), this
						},
						resize: function (e) {
							var t = this,
								n = t.options,
								i = t.canvas,
								a = n.maintainAspectRatio && t.aspectRatio || null,
								s = Math.floor(o.getMaximumWidth(i)),
								l = Math.floor(a ? s / a : o.getMaximumHeight(i));
							if ((t.width !== s || t.height !== l) && (i.width = t.width = s, i.height = t.height = l, i.style.width = s + "px", i.style.height = l + "px", o.retinaScale(t), !e)) {
								var c = {
									width: s,
									height: l
								};
								r.notify(t, "resize", [c]), t.options.onResize && t.options.onResize(t, c), t.stop(), t.update(t.options.responsiveAnimationDuration)
							}
						},
						ensureScalesHaveIDs: function () {
							var e = this.options,
								t = e.scales || {},
								n = e.scale;
							o.each(t.xAxes, function (e, t) {
								e.id = e.id || "x-axis-" + t
							}), o.each(t.yAxes, function (e, t) {
								e.id = e.id || "y-axis-" + t
							}), n && (n.id = n.id || "scale")
						},
						buildScales: function () {
							var t = this,
								n = t.options,
								r = t.scales = {},
								a = [];
							n.scales && (a = a.concat((n.scales.xAxes || []).map(function (e) {
								return {
									options: e,
									dtype: "category",
									dposition: "bottom"
								}
							}), (n.scales.yAxes || []).map(function (e) {
								return {
									options: e,
									dtype: "linear",
									dposition: "left"
								}
							}))), n.scale && a.push({
								options: n.scale,
								dtype: "radialLinear",
								isDefault: !0,
								dposition: "chartArea"
							}), o.each(a, function (n) {
								var a = n.options,
									s = o.getValueOrDefault(a.type, n.dtype),
									l = e.scaleService.getScaleConstructor(s);
								if (l) {
									i(a.position) !== i(n.dposition) && (a.position = n.dposition);
									var c = new l({
										id: a.id,
										options: a,
										ctx: t.ctx,
										chart: t
									});
									r[c.id] = c, n.isDefault && (t.scale = c)
								}
							}), e.scaleService.addScalesToLayout(this)
						},
						buildOrUpdateControllers: function () {
							var t = this,
								n = [],
								i = [];
							if (o.each(t.data.datasets, function (o, r) {
									var a = t.getDatasetMeta(r);
									if (a.type || (a.type = o.type || t.config.type), n.push(a.type), a.controller) a.controller.updateIndex(r);
									else {
										var s = e.controllers[a.type];
										if (void 0 === s) throw new Error('"' + a.type + '" is not a chart type.');
										a.controller = new s(t, r), i.push(a.controller)
									}
								}, t), n.length > 1)
								for (var r = 1; r < n.length; r++)
									if (n[r] !== n[r - 1]) {
										t.isCombo = !0;
										break
									}
							return i
						},
						resetElements: function () {
							var e = this;
							o.each(e.data.datasets, function (t, n) {
								e.getDatasetMeta(n).controller.reset()
							}, e)
						},
						reset: function () {
							this.resetElements(), this.tooltip.initialize()
						},
						update: function (e, t) {
							var i = this;
							if (n(i), !1 !== r.notify(i, "beforeUpdate")) {
								i.tooltip._data = i.data;
								var a = i.buildOrUpdateControllers();
								o.each(i.data.datasets, function (e, t) {
									i.getDatasetMeta(t).controller.buildOrUpdateElements()
								}, i), i.updateLayout(), o.each(a, function (e) {
									e.reset()
								}), i.updateDatasets(), r.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {
									lazy: t,
									duration: e
								} : i.render(e, t)
							}
						},
						updateLayout: function () {
							var t = this;
							!1 !== r.notify(t, "beforeLayout") && (e.layoutService.update(this, this.width, this.height), r.notify(t, "afterScaleUpdate"), r.notify(t, "afterLayout"))
						},
						updateDatasets: function () {
							var e = this;
							if (!1 !== r.notify(e, "beforeDatasetsUpdate")) {
								for (var t = 0, n = e.data.datasets.length; t < n; ++t) e.updateDataset(t);
								r.notify(e, "afterDatasetsUpdate")
							}
						},
						updateDataset: function (e) {
							var t = this,
								n = t.getDatasetMeta(e),
								i = {
									meta: n,
									index: e
								};
							!1 !== r.notify(t, "beforeDatasetUpdate", [i]) && (n.controller.update(), r.notify(t, "afterDatasetUpdate", [i]))
						},
						render: function (t, n) {
							var i = this;
							if (!1 !== r.notify(i, "beforeRender")) {
								var a = i.options.animation,
									s = function (e) {
										r.notify(i, "afterRender"), o.callback(a && a.onComplete, [e], i)
									};
								if (a && (void 0 !== t && 0 !== t || void 0 === t && 0 !== a.duration)) {
									var l = new e.Animation({
										numSteps: (t || a.duration) / 16.66,
										easing: a.easing,
										render: function (e, t) {
											var n = o.easingEffects[t.easing],
												i = t.currentStep,
												r = i / t.numSteps;
											e.draw(n(r), r, i)
										},
										onAnimationProgress: a.onProgress,
										onAnimationComplete: s
									});
									e.animationService.addAnimation(i, l, t, n)
								} else i.draw(), s(new e.Animation({
									numSteps: 0,
									chart: i
								}));
								return i
							}
						},
						draw: function (e) {
							var t = this;
							t.clear(), void 0 !== e && null !== e || (e = 1), t.transition(e), !1 !== r.notify(t, "beforeDraw", [e]) && (o.each(t.boxes, function (e) {
								e.draw(t.chartArea)
							}, t), t.scale && t.scale.draw(), t.drawDatasets(e), t.tooltip.draw(), r.notify(t, "afterDraw", [e]))
						},
						transition: function (e) {
							for (var t = this, n = 0, i = (t.data.datasets || []).length; n < i; ++n) t.isDatasetVisible(n) && t.getDatasetMeta(n).controller.transition(e);
							t.tooltip.transition(e)
						},
						drawDatasets: function (e) {
							var t = this;
							if (!1 !== r.notify(t, "beforeDatasetsDraw", [e])) {
								for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
								r.notify(t, "afterDatasetsDraw", [e])
							}
						},
						drawDataset: function (e, t) {
							var n = this,
								i = n.getDatasetMeta(e),
								o = {
									meta: i,
									index: e,
									easingValue: t
								};
							!1 !== r.notify(n, "beforeDatasetDraw", [o]) && (i.controller.draw(t), r.notify(n, "afterDatasetDraw", [o]))
						},
						getElementAtEvent: function (t) {
							return e.Interaction.modes.single(this, t)
						},
						getElementsAtEvent: function (t) {
							return e.Interaction.modes.label(this, t, {
								intersect: !0
							})
						},
						getElementsAtXAxis: function (t) {
							return e.Interaction.modes["x-axis"](this, t, {
								intersect: !0
							})
						},
						getElementsAtEventForMode: function (t, n, i) {
							var o = e.Interaction.modes[n];
							return "function" == typeof o ? o(this, t, i) : []
						},
						getDatasetAtEvent: function (t) {
							return e.Interaction.modes.dataset(this, t, {
								intersect: !0
							})
						},
						getDatasetMeta: function (e) {
							var t = this,
								n = t.data.datasets[e];
							n._meta || (n._meta = {});
							var i = n._meta[t.id];
							return i || (i = n._meta[t.id] = {
								type: null,
								data: [],
								dataset: null,
								controller: null,
								hidden: null,
								xAxisID: null,
								yAxisID: null
							}), i
						},
						getVisibleDatasetCount: function () {
							for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
							return e
						},
						isDatasetVisible: function (e) {
							var t = this.getDatasetMeta(e);
							return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
						},
						generateLegend: function () {
							return this.options.legendCallback(this)
						},
						destroy: function () {
							var t, n, i, s = this,
								l = s.canvas;
							for (s.stop(), n = 0, i = s.data.datasets.length; n < i; ++n)(t = s.getDatasetMeta(n)).controller && (t.controller.destroy(), t.controller = null);
							l && (s.unbindEvents(), o.clear(s), a.releaseContext(s.ctx), s.canvas = null, s.ctx = null), r.notify(s, "destroy"), delete e.instances[s.id]
						},
						toBase64Image: function () {
							return this.canvas.toDataURL.apply(this.canvas, arguments)
						},
						initToolTip: function () {
							var t = this;
							t.tooltip = new e.Tooltip({
								_chart: t,
								_chartInstance: t,
								_data: t.data,
								_options: t.options.tooltips
							}, t), t.tooltip.initialize()
						},
						bindEvents: function () {
							var e = this,
								t = e._listeners = {},
								n = function () {
									e.eventHandler.apply(e, arguments)
								};
							o.each(e.options.events, function (i) {
								a.addEventListener(e, i, n), t[i] = n
							}), e.options.responsive && (n = function () {
								e.resize()
							}, a.addEventListener(e, "resize", n), t.resize = n)
						},
						unbindEvents: function () {
							var e = this,
								t = e._listeners;
							t && (delete e._listeners, o.each(t, function (t, n) {
								a.removeEventListener(e, n, t)
							}))
						},
						updateHoverStyle: function (e, t, n) {
							var i, o, r, a = n ? "setHoverStyle" : "removeHoverStyle";
							for (o = 0, r = e.length; o < r; ++o)(i = e[o]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
						},
						eventHandler: function (e) {
							var t = this,
								n = t.tooltip;
							if (!1 !== r.notify(t, "beforeEvent", [e])) {
								t._bufferedRender = !0, t._bufferedRequest = null;
								var i = t.handleEvent(e);
								i |= n && n.handleEvent(e), r.notify(t, "afterEvent", [e]);
								var o = t._bufferedRequest;
								return o ? t.render(o.duration, o.lazy) : i && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
							}
						},
						handleEvent: function (e) {
							var t = this,
								n = t.options || {},
								i = n.hover,
								r = !1;
							return t.lastActive = t.lastActive || [], "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, i.mode, i), i.onHover && i.onHover.call(t, e.native, t.active), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, i.mode, !1), t.active.length && i.mode && t.updateHoverStyle(t.active, i.mode, !0), r = !o.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, r
						}
					}), e.Controller = e
				}
			}, {}],
			24: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t) {
						e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
							configurable: !0,
							enumerable: !1,
							value: {
								listeners: [t]
							}
						}), o.forEach(function (t) {
							var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
								o = e[t];
							Object.defineProperty(e, t, {
								configurable: !0,
								enumerable: !1,
								value: function () {
									var t = Array.prototype.slice.call(arguments),
										r = o.apply(this, t);
									return i.each(e._chartjs.listeners, function (e) {
										"function" == typeof e[n] && e[n].apply(e, t)
									}), r
								}
							})
						}))
					}

					function n(e, t) {
						var n = e._chartjs;
						if (n) {
							var i = n.listeners,
								r = i.indexOf(t); - 1 !== r && i.splice(r, 1), i.length > 0 || (o.forEach(function (t) {
								delete e[t]
							}), delete e._chartjs)
						}
					}
					var i = e.helpers,
						o = ["push", "pop", "shift", "splice", "unshift"];
					e.DatasetController = function (e, t) {
						this.initialize(e, t)
					}, i.extend(e.DatasetController.prototype, {
						datasetElementType: null,
						dataElementType: null,
						initialize: function (e, t) {
							var n = this;
							n.chart = e, n.index = t, n.linkScales(), n.addElements()
						},
						updateIndex: function (e) {
							this.index = e
						},
						linkScales: function () {
							var e = this,
								t = e.getMeta(),
								n = e.getDataset();
							null === t.xAxisID && (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
						},
						getDataset: function () {
							return this.chart.data.datasets[this.index]
						},
						getMeta: function () {
							return this.chart.getDatasetMeta(this.index)
						},
						getScaleForId: function (e) {
							return this.chart.scales[e]
						},
						reset: function () {
							this.update(!0)
						},
						destroy: function () {
							this._data && n(this._data, this)
						},
						createMetaDataset: function () {
							var e = this,
								t = e.datasetElementType;
							return t && new t({
								_chart: e.chart,
								_datasetIndex: e.index
							})
						},
						createMetaData: function (e) {
							var t = this,
								n = t.dataElementType;
							return n && new n({
								_chart: t.chart,
								_datasetIndex: t.index,
								_index: e
							})
						},
						addElements: function () {
							var e, t, n = this,
								i = n.getMeta(),
								o = n.getDataset().data || [],
								r = i.data;
							for (e = 0, t = o.length; e < t; ++e) r[e] = r[e] || n.createMetaData(e);
							i.dataset = i.dataset || n.createMetaDataset()
						},
						addElementAndReset: function (e) {
							var t = this.createMetaData(e);
							this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
						},
						buildOrUpdateElements: function () {
							var e = this,
								i = e.getDataset(),
								o = i.data || (i.data = []);
							e._data !== o && (e._data && n(e._data, e), t(o, e), e._data = o), e.resyncElements()
						},
						update: i.noop,
						transition: function (e) {
							for (var t = this.getMeta(), n = t.data || [], i = n.length, o = 0; o < i; ++o) n[o].transition(e);
							t.dataset && t.dataset.transition(e)
						},
						draw: function () {
							var e = this.getMeta(),
								t = e.data || [],
								n = t.length,
								i = 0;
							for (e.dataset && e.dataset.draw(); i < n; ++i) t[i].draw()
						},
						removeHoverStyle: function (e, t) {
							var n = this.chart.data.datasets[e._datasetIndex],
								o = e._index,
								r = e.custom || {},
								a = i.getValueAtIndexOrDefault,
								s = e._model;
							s.backgroundColor = r.backgroundColor ? r.backgroundColor : a(n.backgroundColor, o, t.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : a(n.borderColor, o, t.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : a(n.borderWidth, o, t.borderWidth)
						},
						setHoverStyle: function (e) {
							var t = this.chart.data.datasets[e._datasetIndex],
								n = e._index,
								o = e.custom || {},
								r = i.getValueAtIndexOrDefault,
								a = i.getHoverColor,
								s = e._model;
							s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : r(t.hoverBackgroundColor, n, a(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : r(t.hoverBorderColor, n, a(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : r(t.hoverBorderWidth, n, s.borderWidth)
						},
						resyncElements: function () {
							var e = this,
								t = e.getMeta(),
								n = e.getDataset().data,
								i = t.data.length,
								o = n.length;
							o < i ? t.data.splice(o, i - o) : o > i && e.insertElements(i, o - i)
						},
						insertElements: function (e, t) {
							for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
						},
						onDataPush: function () {
							this.insertElements(this.getDataset().data.length - 1, arguments.length)
						},
						onDataPop: function () {
							this.getMeta().data.pop()
						},
						onDataShift: function () {
							this.getMeta().data.shift()
						},
						onDataSplice: function (e, t) {
							this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
						},
						onDataUnshift: function () {
							this.insertElements(0, arguments.length)
						}
					}), e.DatasetController.extend = i.inherits
				}
			}, {}],
			25: [function (e, t, n) {
				"use strict";
				var i = e(3);
				t.exports = function (e) {
					function t(e, t, n, o) {
						var r, a, s, l, c, u, d, h, f, p = Object.keys(n);
						for (r = 0, a = p.length; r < a; ++r)
							if (s = p[r], u = n[s], t.hasOwnProperty(s) || (t[s] = u), (l = t[s]) !== u && "_" !== s[0]) {
								if (e.hasOwnProperty(s) || (e[s] = l), c = e[s], (d = typeof u) === typeof c)
									if ("string" === d) {
										if ((h = i(c)).valid && (f = i(u)).valid) {
											t[s] = f.mix(h, o).rgbString();
											continue
										}
									} else if ("number" === d && isFinite(c) && isFinite(u)) {
									t[s] = c + (u - c) * o;
									continue
								}
								t[s] = u
							}
					}
					var n = e.helpers;
					e.elements = {}, e.Element = function (e) {
						n.extend(this, e), this.initialize.apply(this, arguments)
					}, n.extend(e.Element.prototype, {
						initialize: function () {
							this.hidden = !1
						},
						pivot: function () {
							var e = this;
							return e._view || (e._view = n.clone(e._model)), e._start = {}, e
						},
						transition: function (e) {
							var n = this,
								i = n._model,
								o = n._start,
								r = n._view;
							return i && 1 !== e ? (r || (r = n._view = {}), o || (o = n._start = {}), t(o, r, i, e), n) : (n._view = i, n._start = null, n)
						},
						tooltipPosition: function () {
							return {
								x: this._model.x,
								y: this._model.y
							}
						},
						hasValue: function () {
							return n.isNumber(this._model.x) && n.isNumber(this._model.y)
						}
					}), e.Element.extend = n.inherits
				}
			}, {
				3: 3
			}],
			26: [function (e, t, n) {
				"use strict";
				var i = e(3);
				t.exports = function (e) {
					function t(e, t, n) {
						var i;
						return "string" == typeof e ? (i = parseInt(e, 10), -1 !== e.indexOf("%") && (i = i / 100 * t.parentNode[n])) : i = e, i
					}

					function n(e) {
						return void 0 !== e && null !== e && "none" !== e
					}

					function o(e, i, o) {
						var r = document.defaultView,
							a = e.parentNode,
							s = r.getComputedStyle(e)[i],
							l = r.getComputedStyle(a)[i],
							c = n(s),
							u = n(l),
							d = Number.POSITIVE_INFINITY;
						return c || u ? Math.min(c ? t(s, e, o) : d, u ? t(l, a, o) : d) : "none"
					}
					var r = e.helpers = {};
					r.each = function (e, t, n, i) {
						var o, a;
						if (r.isArray(e))
							if (a = e.length, i)
								for (o = a - 1; o >= 0; o--) t.call(n, e[o], o);
							else
								for (o = 0; o < a; o++) t.call(n, e[o], o);
						else if ("object" == typeof e) {
							var s = Object.keys(e);
							for (a = s.length, o = 0; o < a; o++) t.call(n, e[s[o]], s[o])
						}
					}, r.clone = function (e) {
						var t = {};
						return r.each(e, function (e, n) {
							r.isArray(e) ? t[n] = e.slice(0) : t[n] = "object" == typeof e && null !== e ? r.clone(e) : e
						}), t
					}, r.extend = function (e) {
						for (var t = 1, n = arguments.length; t < n; t++) r.each(arguments[t], function (t, n) {
							e[n] = t
						});
						return e
					}, r.configMerge = function (t) {
						var n = r.clone(t);
						return r.each(Array.prototype.slice.call(arguments, 1), function (t) {
							r.each(t, function (t, i) {
								var o = n.hasOwnProperty(i),
									a = o ? n[i] : {};
								"scales" === i ? n[i] = r.scaleMerge(a, t) : "scale" === i ? n[i] = r.configMerge(a, e.scaleService.getScaleDefaults(t.type), t) : !o || "object" != typeof a || r.isArray(a) || null === a || "object" != typeof t || r.isArray(t) ? n[i] = t : n[i] = r.configMerge(a, t)
							})
						}), n
					}, r.scaleMerge = function (t, n) {
						var i = r.clone(t);
						return r.each(n, function (t, n) {
							"xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? r.each(t, function (t, o) {
								var a = r.getValueOrDefault(t.type, "xAxes" === n ? "category" : "linear"),
									s = e.scaleService.getScaleDefaults(a);
								o >= i[n].length || !i[n][o].type ? i[n].push(r.configMerge(s, t)) : t.type && t.type !== i[n][o].type ? i[n][o] = r.configMerge(i[n][o], s, t) : i[n][o] = r.configMerge(i[n][o], t)
							}) : (i[n] = [], r.each(t, function (t) {
								var o = r.getValueOrDefault(t.type, "xAxes" === n ? "category" : "linear");
								i[n].push(r.configMerge(e.scaleService.getScaleDefaults(o), t))
							})) : i.hasOwnProperty(n) && "object" == typeof i[n] && null !== i[n] && "object" == typeof t ? i[n] = r.configMerge(i[n], t) : i[n] = t
						}), i
					}, r.getValueAtIndexOrDefault = function (e, t, n) {
						return void 0 === e || null === e ? n : r.isArray(e) ? t < e.length ? e[t] : n : e
					}, r.getValueOrDefault = function (e, t) {
						return void 0 === e ? t : e
					}, r.indexOf = Array.prototype.indexOf ? function (e, t) {
						return e.indexOf(t)
					} : function (e, t) {
						for (var n = 0, i = e.length; n < i; ++n)
							if (e[n] === t) return n;
						return -1
					}, r.where = function (e, t) {
						if (r.isArray(e) && Array.prototype.filter) return e.filter(t);
						var n = [];
						return r.each(e, function (e) {
							t(e) && n.push(e)
						}), n
					}, r.findIndex = Array.prototype.findIndex ? function (e, t, n) {
						return e.findIndex(t, n)
					} : function (e, t, n) {
						n = void 0 === n ? e : n;
						for (var i = 0, o = e.length; i < o; ++i)
							if (t.call(n, e[i], i, e)) return i;
						return -1
					}, r.findNextWhere = function (e, t, n) {
						void 0 !== n && null !== n || (n = -1);
						for (var i = n + 1; i < e.length; i++) {
							var o = e[i];
							if (t(o)) return o
						}
					}, r.findPreviousWhere = function (e, t, n) {
						void 0 !== n && null !== n || (n = e.length);
						for (var i = n - 1; i >= 0; i--) {
							var o = e[i];
							if (t(o)) return o
						}
					}, r.inherits = function (e) {
						var t = this,
							n = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
								return t.apply(this, arguments)
							},
							i = function () {
								this.constructor = n
							};
						return i.prototype = t.prototype, n.prototype = new i, n.extend = r.inherits, e && r.extend(n.prototype, e), n.__super__ = t.prototype, n
					}, r.noop = function () {}, r.uid = function () {
						var e = 0;
						return function () {
							return e++
						}
					}(), r.isNumber = function (e) {
						return !isNaN(parseFloat(e)) && isFinite(e)
					}, r.almostEquals = function (e, t, n) {
						return Math.abs(e - t) < n
					}, r.almostWhole = function (e, t) {
						var n = Math.round(e);
						return n - t < e && n + t > e
					}, r.max = function (e) {
						return e.reduce(function (e, t) {
							return isNaN(t) ? e : Math.max(e, t)
						}, Number.NEGATIVE_INFINITY)
					}, r.min = function (e) {
						return e.reduce(function (e, t) {
							return isNaN(t) ? e : Math.min(e, t)
						}, Number.POSITIVE_INFINITY)
					}, r.sign = Math.sign ? function (e) {
						return Math.sign(e)
					} : function (e) {
						return e = +e, 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
					}, r.log10 = Math.log10 ? function (e) {
						return Math.log10(e)
					} : function (e) {
						return Math.log(e) / Math.LN10
					}, r.toRadians = function (e) {
						return e * (Math.PI / 180)
					}, r.toDegrees = function (e) {
						return e * (180 / Math.PI)
					}, r.getAngleFromPoint = function (e, t) {
						var n = t.x - e.x,
							i = t.y - e.y,
							o = Math.sqrt(n * n + i * i),
							r = Math.atan2(i, n);
						return r < -.5 * Math.PI && (r += 2 * Math.PI), {
							angle: r,
							distance: o
						}
					}, r.distanceBetweenPoints = function (e, t) {
						return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
					}, r.aliasPixel = function (e) {
						return e % 2 == 0 ? 0 : .5
					}, r.splineCurve = function (e, t, n, i) {
						var o = e.skip ? t : e,
							r = t,
							a = n.skip ? t : n,
							s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
							l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
							c = s / (s + l),
							u = l / (s + l),
							d = i * (c = isNaN(c) ? 0 : c),
							h = i * (u = isNaN(u) ? 0 : u);
						return {
							previous: {
								x: r.x - d * (a.x - o.x),
								y: r.y - d * (a.y - o.y)
							},
							next: {
								x: r.x + h * (a.x - o.x),
								y: r.y + h * (a.y - o.y)
							}
						}
					}, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (e) {
						var t, n, i, o, a = (e || []).map(function (e) {
								return {
									model: e._model,
									deltaK: 0,
									mK: 0
								}
							}),
							s = a.length;
						for (t = 0; t < s; ++t)
							if (!(i = a[t]).model.skip) {
								if (n = t > 0 ? a[t - 1] : null, (o = t < s - 1 ? a[t + 1] : null) && !o.model.skip) {
									var l = o.model.x - i.model.x;
									i.deltaK = 0 !== l ? (o.model.y - i.model.y) / l : 0
								}!n || n.model.skip ? i.mK = i.deltaK : !o || o.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
							}
						var c, u, d, h;
						for (t = 0; t < s - 1; ++t) i = a[t], o = a[t + 1], i.model.skip || o.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = o.mK = 0 : (c = i.mK / i.deltaK, u = o.mK / i.deltaK, (h = Math.pow(c, 2) + Math.pow(u, 2)) <= 9 || (d = 3 / Math.sqrt(h), i.mK = c * d * i.deltaK, o.mK = u * d * i.deltaK)));
						var f;
						for (t = 0; t < s; ++t)(i = a[t]).model.skip || (n = t > 0 ? a[t - 1] : null, o = t < s - 1 ? a[t + 1] : null, n && !n.model.skip && (f = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), o && !o.model.skip && (f = (o.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK))
					}, r.nextItem = function (e, t, n) {
						return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
					}, r.previousItem = function (e, t, n) {
						return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
					}, r.niceNum = function (e, t) {
						var n = Math.floor(r.log10(e)),
							i = e / Math.pow(10, n);
						return (t ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
					};
					var a = r.easingEffects = {
						linear: function (e) {
							return e
						},
						easeInQuad: function (e) {
							return e * e
						},
						easeOutQuad: function (e) {
							return -1 * e * (e - 2)
						},
						easeInOutQuad: function (e) {
							return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
						},
						easeInCubic: function (e) {
							return e * e * e
						},
						easeOutCubic: function (e) {
							return 1 * ((e = e / 1 - 1) * e * e + 1)
						},
						easeInOutCubic: function (e) {
							return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
						},
						easeInQuart: function (e) {
							return e * e * e * e
						},
						easeOutQuart: function (e) {
							return -1 * ((e = e / 1 - 1) * e * e * e - 1)
						},
						easeInOutQuart: function (e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
						},
						easeInQuint: function (e) {
							return 1 * (e /= 1) * e * e * e * e
						},
						easeOutQuint: function (e) {
							return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
						},
						easeInOutQuint: function (e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
						},
						easeInSine: function (e) {
							return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
						},
						easeOutSine: function (e) {
							return 1 * Math.sin(e / 1 * (Math.PI / 2))
						},
						easeInOutSine: function (e) {
							return -.5 * (Math.cos(Math.PI * e / 1) - 1)
						},
						easeInExpo: function (e) {
							return 0 === e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
						},
						easeOutExpo: function (e) {
							return 1 === e ? 1 : 1 * (1 - Math.pow(2, -10 * e / 1))
						},
						easeInOutExpo: function (e) {
							return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
						},
						easeInCirc: function (e) {
							return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
						},
						easeOutCirc: function (e) {
							return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
						},
						easeInOutCirc: function (e) {
							return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
						},
						easeInElastic: function (e) {
							var t = 1.70158,
								n = 0,
								i = 1;
							return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / n))
						},
						easeOutElastic: function (e) {
							var t = 1.70158,
								n = 0,
								i = 1;
							return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin((1 * e - t) * (2 * Math.PI) / n) + 1)
						},
						easeInOutElastic: function (e) {
							var t = 1.70158,
								n = 0,
								i = 1;
							return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5 * 1), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1 ? i * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / n) * .5 + 1)
						},
						easeInBack: function (e) {
							var t = 1.70158;
							return 1 * (e /= 1) * e * ((t + 1) * e - t)
						},
						easeOutBack: function (e) {
							var t = 1.70158;
							return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1)
						},
						easeInOutBack: function (e) {
							var t = 1.70158;
							return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
						},
						easeInBounce: function (e) {
							return 1 - a.easeOutBounce(1 - e)
						},
						easeOutBounce: function (e) {
							return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e * 1 : e < 2 / 2.75 ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
						},
						easeInOutBounce: function (e) {
							return e < .5 ? .5 * a.easeInBounce(2 * e) : .5 * a.easeOutBounce(2 * e - 1) + .5
						}
					};
					r.requestAnimFrame = "undefined" == typeof window ? function (e) {
						e()
					} : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
						return window.setTimeout(e, 1e3 / 60)
					}, r.getRelativePosition = function (e, t) {
						var n, i, o = e.originalEvent || e,
							a = e.currentTarget || e.srcElement,
							s = a.getBoundingClientRect(),
							l = o.touches;
						l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = o.clientX, i = o.clientY);
						var c = parseFloat(r.getStyle(a, "padding-left")),
							u = parseFloat(r.getStyle(a, "padding-top")),
							d = parseFloat(r.getStyle(a, "padding-right")),
							h = parseFloat(r.getStyle(a, "padding-bottom")),
							f = s.right - s.left - c - d,
							p = s.bottom - s.top - u - h;
						return n = Math.round((n - s.left - c) / f * a.width / t.currentDevicePixelRatio), i = Math.round((i - s.top - u) / p * a.height / t.currentDevicePixelRatio), {
							x: n,
							y: i
						}
					}, r.addEvent = function (e, t, n) {
						e.addEventListener ? e.addEventListener(t, n) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
					}, r.removeEvent = function (e, t, n) {
						e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = r.noop
					}, r.getConstraintWidth = function (e) {
						return o(e, "max-width", "clientWidth")
					}, r.getConstraintHeight = function (e) {
						return o(e, "max-height", "clientHeight")
					}, r.getMaximumWidth = function (e) {
						var t = e.parentNode,
							n = parseInt(r.getStyle(t, "padding-left"), 10),
							i = parseInt(r.getStyle(t, "padding-right"), 10),
							o = t.clientWidth - n - i,
							a = r.getConstraintWidth(e);
						return isNaN(a) ? o : Math.min(o, a)
					}, r.getMaximumHeight = function (e) {
						var t = e.parentNode,
							n = parseInt(r.getStyle(t, "padding-top"), 10),
							i = parseInt(r.getStyle(t, "padding-bottom"), 10),
							o = t.clientHeight - n - i,
							a = r.getConstraintHeight(e);
						return isNaN(a) ? o : Math.min(o, a)
					}, r.getStyle = function (e, t) {
						return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
					}, r.retinaScale = function (e) {
						var t = e.currentDevicePixelRatio = window.devicePixelRatio || 1;
						if (1 !== t) {
							var n = e.canvas,
								i = e.height,
								o = e.width;
							n.height = i * t, n.width = o * t, e.ctx.scale(t, t), n.style.height = i + "px", n.style.width = o + "px"
						}
					}, r.clear = function (e) {
						e.ctx.clearRect(0, 0, e.width, e.height)
					}, r.fontString = function (e, t, n) {
						return t + " " + e + "px " + n
					}, r.longestText = function (e, t, n, i) {
						var o = (i = i || {}).data = i.data || {},
							a = i.garbageCollect = i.garbageCollect || [];
						i.font !== t && (o = i.data = {}, a = i.garbageCollect = [], i.font = t), e.font = t;
						var s = 0;
						r.each(n, function (t) {
							void 0 !== t && null !== t && !0 !== r.isArray(t) ? s = r.measureText(e, o, a, s, t) : r.isArray(t) && r.each(t, function (t) {
								void 0 === t || null === t || r.isArray(t) || (s = r.measureText(e, o, a, s, t))
							})
						});
						var l = a.length / 2;
						if (l > n.length) {
							for (var c = 0; c < l; c++) delete o[a[c]];
							a.splice(0, l)
						}
						return s
					}, r.measureText = function (e, t, n, i, o) {
						var r = t[o];
						return r || (r = t[o] = e.measureText(o).width, n.push(o)), r > i && (i = r), i
					}, r.numberOfLabelLines = function (e) {
						var t = 1;
						return r.each(e, function (e) {
							r.isArray(e) && e.length > t && (t = e.length)
						}), t
					}, r.drawRoundedRectangle = function (e, t, n, i, o, r) {
						e.beginPath(), e.moveTo(t + r, n), e.lineTo(t + i - r, n), e.quadraticCurveTo(t + i, n, t + i, n + r), e.lineTo(t + i, n + o - r), e.quadraticCurveTo(t + i, n + o, t + i - r, n + o), e.lineTo(t + r, n + o), e.quadraticCurveTo(t, n + o, t, n + o - r), e.lineTo(t, n + r), e.quadraticCurveTo(t, n, t + r, n), e.closePath()
					}, r.color = i ? function (t) {
						return t instanceof CanvasGradient && (t = e.defaults.global.defaultColor), i(t)
					} : function (e) {
						return console.error("Color.js not found!"), e
					}, r.isArray = Array.isArray ? function (e) {
						return Array.isArray(e)
					} : function (e) {
						return "[object Array]" === Object.prototype.toString.call(e)
					}, r.arrayEquals = function (e, t) {
						var n, i, o, a;
						if (!e || !t || e.length !== t.length) return !1;
						for (n = 0, i = e.length; n < i; ++n)
							if (o = e[n], a = t[n], o instanceof Array && a instanceof Array) {
								if (!r.arrayEquals(o, a)) return !1
							} else if (o !== a) return !1;
						return !0
					}, r.callback = function (e, t, n) {
						e && "function" == typeof e.call && e.apply(n, t)
					}, r.getHoverColor = function (e) {
						return e instanceof CanvasPattern ? e : r.color(e).saturate(.5).darken(.1).rgbString()
					}, r.callCallback = r.callback
				}
			}, {
				3: 3
			}],
			27: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t) {
						return e.native ? {
							x: e.x,
							y: e.y
						} : a.getRelativePosition(e, t)
					}

					function n(e, t) {
						var n, i, o, r, a;
						for (i = 0, r = e.data.datasets.length; i < r; ++i)
							if (e.isDatasetVisible(i))
								for (o = 0, a = (n = e.getDatasetMeta(i)).data.length; o < a; ++o) {
									var s = n.data[o];
									s._view.skip || t(s)
								}
					}

					function i(e, t) {
						var i = [];
						return n(e, function (e) {
							e.inRange(t.x, t.y) && i.push(e)
						}), i
					}

					function o(e, t, i, o) {
						var r = Number.POSITIVE_INFINITY,
							s = [];
						return o || (o = a.distanceBetweenPoints), n(e, function (e) {
							if (!i || e.inRange(t.x, t.y)) {
								var n = e.getCenterPoint(),
									a = o(t, n);
								a < r ? (s = [e], r = a) : a === r && s.push(e)
							}
						}), s
					}

					function r(e, n, r) {
						var a = t(n, e),
							s = r.intersect ? i(e, a) : o(e, a, !1, function (e, t) {
								return Math.abs(e.x - t.x)
							}),
							l = [];
						return s.length ? (e.data.datasets.forEach(function (t, n) {
							if (e.isDatasetVisible(n)) {
								var i = e.getDatasetMeta(n).data[s[0]._index];
								i && !i._view.skip && l.push(i)
							}
						}), l) : []
					}
					var a = e.helpers;
					e.Interaction = {
						modes: {
							single: function (e, i) {
								var o = t(i, e),
									r = [];
								return n(e, function (e) {
									if (e.inRange(o.x, o.y)) return r.push(e), r
								}), r.slice(0, 1)
							},
							label: r,
							index: r,
							dataset: function (e, n, r) {
								var a = t(n, e),
									s = r.intersect ? i(e, a) : o(e, a, !1);
								return s.length > 0 && (s = e.getDatasetMeta(s[0]._datasetIndex).data), s
							},
							"x-axis": function (e, t) {
								return r(e, t, !0)
							},
							point: function (e, n) {
								return i(e, t(n, e))
							},
							nearest: function (e, n, i) {
								var r = o(e, t(n, e), i.intersect);
								return r.length > 1 && r.sort(function (e, t) {
									var n = e.getArea() - t.getArea();
									return 0 === n && (n = e._datasetIndex - t._datasetIndex), n
								}), r.slice(0, 1)
							},
							x: function (e, i, o) {
								var r = t(i, e),
									a = [],
									s = !1;
								return n(e, function (e) {
									e.inXRange(r.x) && a.push(e), e.inRange(r.x, r.y) && (s = !0)
								}), o.intersect && !s && (a = []), a
							},
							y: function (e, i, o) {
								var r = t(i, e),
									a = [],
									s = !1;
								return n(e, function (e) {
									e.inYRange(r.y) && a.push(e), e.inRange(r.x, r.y) && (s = !0)
								}), o.intersect && !s && (a = []), a
							}
						}
					}
				}
			}, {}],
			28: [function (e, t, n) {
				"use strict";
				t.exports = function () {
					var e = function (e, t) {
						return this.construct(e, t), this
					};
					return e.defaults = {
						global: {
							responsive: !0,
							responsiveAnimationDuration: 0,
							maintainAspectRatio: !0,
							events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
							hover: {
								onHover: null,
								mode: "nearest",
								intersect: !0,
								animationDuration: 400
							},
							onClick: null,
							defaultColor: "rgba(0,0,0,0.1)",
							defaultFontColor: "#666",
							defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
							defaultFontSize: 12,
							defaultFontStyle: "normal",
							showLines: !0,
							elements: {},
							legendCallback: function (e) {
								var t = [];
								t.push('<ul class="' + e.id + '-legend">');
								for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
								return t.push("</ul>"), t.join("")
							}
						}
					}, e.Chart = e, e
				}
			}, {}],
			29: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t) {
						return i.where(e, function (e) {
							return e.position === t
						})
					}

					function n(e, t) {
						e.forEach(function (e, t) {
							return e._tmpIndex_ = t, e
						}), e.sort(function (e, n) {
							var i = t ? n : e,
								o = t ? e : n;
							return i.weight === o.weight ? i._tmpIndex_ - o._tmpIndex_ : i.weight - o.weight
						}), e.forEach(function (e) {
							delete e._tmpIndex_
						})
					}
					var i = e.helpers;
					e.layoutService = {
						defaults: {},
						addBox: function (e, t) {
							e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
						},
						removeBox: function (e, t) {
							var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1)
						},
						configure: function (e, t, n) {
							for (var i, o = ["fullWidth", "position", "weight"], r = o.length, a = 0; a < r; ++a) i = o[a], n.hasOwnProperty(i) && (t[i] = n[i])
						},
						update: function (e, o, r) {
							function a(e) {
								var t = i.findNextWhere(S, function (t) {
									return t.box === e
								});
								if (t)
									if (e.isHorizontal()) {
										var n = {
											left: Math.max(O, E),
											right: Math.max(P, A),
											top: 0,
											bottom: 0
										};
										e.update(e.fullWidth ? b : T, x / 2, n)
									} else e.update(t.minSize.width, _)
							}

							function s(e) {
								e.isHorizontal() ? (e.left = e.fullWidth ? u : O, e.right = e.fullWidth ? o - d : O + T, e.top = V, e.bottom = V + e.height, V = e.bottom) : (e.left = H, e.right = H + e.width, e.top = M, e.bottom = M + _, H = e.right)
							}
							if (e) {
								var l = e.options.layout,
									c = l ? l.padding : null,
									u = 0,
									d = 0,
									h = 0,
									f = 0;
								isNaN(c) ? (u = c.left || 0, d = c.right || 0, h = c.top || 0, f = c.bottom || 0) : (u = c, d = c, h = c, f = c);
								var p = t(e.boxes, "left"),
									m = t(e.boxes, "right"),
									g = t(e.boxes, "top"),
									v = t(e.boxes, "bottom"),
									y = t(e.boxes, "chartArea");
								n(p, !0), n(m, !1), n(g, !0), n(v, !1);
								var b = o - u - d,
									x = r - h - f,
									w = x / 2,
									C = (o - b / 2) / (p.length + m.length),
									k = (r - w) / (g.length + v.length),
									T = b,
									_ = x,
									S = [];
								i.each(p.concat(m, g, v), function (e) {
									var t, n = e.isHorizontal();
									n ? (t = e.update(e.fullWidth ? b : T, k), _ -= t.height) : (t = e.update(C, w), T -= t.width), S.push({
										horizontal: n,
										minSize: t,
										box: e
									})
								});
								var E = 0,
									A = 0,
									I = 0,
									D = 0;
								i.each(g.concat(v), function (e) {
									if (e.getPadding) {
										var t = e.getPadding();
										E = Math.max(E, t.left), A = Math.max(A, t.right)
									}
								}), i.each(p.concat(m), function (e) {
									if (e.getPadding) {
										var t = e.getPadding();
										I = Math.max(I, t.top), D = Math.max(D, t.bottom)
									}
								});
								var O = u,
									P = d,
									M = h,
									L = f;
								i.each(p.concat(m), a), i.each(p, function (e) {
									O += e.width
								}), i.each(m, function (e) {
									P += e.width
								}), i.each(g.concat(v), a), i.each(g, function (e) {
									M += e.height
								}), i.each(v, function (e) {
									L += e.height
								}), i.each(p.concat(m), function (e) {
									var t = i.findNextWhere(S, function (t) {
											return t.box === e
										}),
										n = {
											left: 0,
											right: 0,
											top: M,
											bottom: L
										};
									t && e.update(t.minSize.width, _, n)
								}), O = u, P = d, M = h, L = f, i.each(p, function (e) {
									O += e.width
								}), i.each(m, function (e) {
									P += e.width
								}), i.each(g, function (e) {
									M += e.height
								}), i.each(v, function (e) {
									L += e.height
								});
								var F = Math.max(E - O, 0);
								O += F, P += Math.max(A - P, 0);
								var N = Math.max(I - M, 0);
								M += N, L += Math.max(D - L, 0);
								var R = r - M - L,
									W = o - O - P;
								W === T && R === _ || (i.each(p, function (e) {
									e.height = R
								}), i.each(m, function (e) {
									e.height = R
								}), i.each(g, function (e) {
									e.fullWidth || (e.width = W)
								}), i.each(v, function (e) {
									e.fullWidth || (e.width = W)
								}), _ = R, T = W);
								var H = u + F,
									V = h + N;
								i.each(p.concat(g), s), H += T, V += _, i.each(m, s), i.each(v, s), e.chartArea = {
									left: O,
									top: M,
									right: O + T,
									bottom: M + _
								}, i.each(y, function (t) {
									t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(T, _)
								})
							}
						}
					}
				}
			}, {}],
			30: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.defaults.global.plugins = {}, e.plugins = {
						_plugins: [],
						_cacheId: 0,
						register: function (e) {
							var t = this._plugins;
							[].concat(e).forEach(function (e) {
								-1 === t.indexOf(e) && t.push(e)
							}), this._cacheId++
						},
						unregister: function (e) {
							var t = this._plugins;
							[].concat(e).forEach(function (e) {
								var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
							}), this._cacheId++
						},
						clear: function () {
							this._plugins = [], this._cacheId++
						},
						count: function () {
							return this._plugins.length
						},
						getAll: function () {
							return this._plugins
						},
						notify: function (e, t, n) {
							var i, o, r, a, s, l = this.descriptors(e),
								c = l.length;
							for (i = 0; i < c; ++i)
								if (o = l[i], r = o.plugin, "function" == typeof (s = r[t]) && ((a = [e].concat(n || [])).push(o.options), !1 === s.apply(r, a))) return !1;
							return !0
						},
						descriptors: function (n) {
							var i = n._plugins || (n._plugins = {});
							if (i.id === this._cacheId) return i.descriptors;
							var o = [],
								r = [],
								a = n && n.config || {},
								s = e.defaults.global.plugins,
								l = a.options && a.options.plugins || {};
							return this._plugins.concat(a.plugins || []).forEach(function (e) {
								if (-1 === o.indexOf(e)) {
									var n = e.id,
										i = l[n];
									!1 !== i && (!0 === i && (i = t.clone(s[n])), o.push(e), r.push({
										plugin: e,
										options: i || {}
									}))
								}
							}), i.descriptors = r, i.id = this._cacheId, r
						}
					}, e.pluginService = e.plugins, e.PluginBase = e.Element.extend({})
				}
			}, {}],
			31: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t, n) {
						return i.isArray(t) ? i.longestText(e, n, t) : e.measureText(t).width
					}

					function n(t) {
						var n = i.getValueOrDefault,
							o = e.defaults.global,
							r = n(t.fontSize, o.defaultFontSize),
							a = n(t.fontStyle, o.defaultFontStyle),
							s = n(t.fontFamily, o.defaultFontFamily);
						return {
							size: r,
							style: a,
							family: s,
							font: i.fontString(r, a, s)
						}
					}
					var i = e.helpers;
					e.defaults.scale = {
						display: !0,
						position: "left",
						gridLines: {
							display: !0,
							color: "rgba(0, 0, 0, 0.1)",
							lineWidth: 1,
							drawBorder: !0,
							drawOnChartArea: !0,
							drawTicks: !0,
							tickMarkLength: 10,
							zeroLineWidth: 1,
							zeroLineColor: "rgba(0,0,0,0.25)",
							zeroLineBorderDash: [],
							zeroLineBorderDashOffset: 0,
							offsetGridLines: !1,
							borderDash: [],
							borderDashOffset: 0
						},
						scaleLabel: {
							labelString: "",
							display: !1
						},
						ticks: {
							beginAtZero: !1,
							minRotation: 0,
							maxRotation: 50,
							mirror: !1,
							padding: 0,
							reverse: !1,
							display: !0,
							autoSkip: !0,
							autoSkipPadding: 0,
							labelOffset: 0,
							callback: e.Ticks.formatters.values
						}
					}, e.Scale = e.Element.extend({
						getPadding: function () {
							var e = this;
							return {
								left: e.paddingLeft || 0,
								top: e.paddingTop || 0,
								right: e.paddingRight || 0,
								bottom: e.paddingBottom || 0
							}
						},
						beforeUpdate: function () {
							i.callback(this.options.beforeUpdate, [this])
						},
						update: function (e, t, n) {
							var o = this;
							return o.beforeUpdate(), o.maxWidth = e, o.maxHeight = t, o.margins = i.extend({
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}, n), o.longestTextCache = o.longestTextCache || {}, o.beforeSetDimensions(), o.setDimensions(), o.afterSetDimensions(), o.beforeDataLimits(), o.determineDataLimits(), o.afterDataLimits(), o.beforeBuildTicks(), o.buildTicks(), o.afterBuildTicks(), o.beforeTickToLabelConversion(), o.convertTicksToLabels(), o.afterTickToLabelConversion(), o.beforeCalculateTickRotation(), o.calculateTickRotation(), o.afterCalculateTickRotation(), o.beforeFit(), o.fit(), o.afterFit(), o.afterUpdate(), o.minSize
						},
						afterUpdate: function () {
							i.callback(this.options.afterUpdate, [this])
						},
						beforeSetDimensions: function () {
							i.callback(this.options.beforeSetDimensions, [this])
						},
						setDimensions: function () {
							var e = this;
							e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
						},
						afterSetDimensions: function () {
							i.callback(this.options.afterSetDimensions, [this])
						},
						beforeDataLimits: function () {
							i.callback(this.options.beforeDataLimits, [this])
						},
						determineDataLimits: i.noop,
						afterDataLimits: function () {
							i.callback(this.options.afterDataLimits, [this])
						},
						beforeBuildTicks: function () {
							i.callback(this.options.beforeBuildTicks, [this])
						},
						buildTicks: i.noop,
						afterBuildTicks: function () {
							i.callback(this.options.afterBuildTicks, [this])
						},
						beforeTickToLabelConversion: function () {
							i.callback(this.options.beforeTickToLabelConversion, [this])
						},
						convertTicksToLabels: function () {
							var e = this,
								t = e.options.ticks;
							e.ticks = e.ticks.map(t.userCallback || t.callback)
						},
						afterTickToLabelConversion: function () {
							i.callback(this.options.afterTickToLabelConversion, [this])
						},
						beforeCalculateTickRotation: function () {
							i.callback(this.options.beforeCalculateTickRotation, [this])
						},
						calculateTickRotation: function () {
							var e = this,
								t = e.ctx,
								o = e.options.ticks,
								r = n(o);
							t.font = r.font;
							var a = o.minRotation || 0;
							if (e.options.display && e.isHorizontal())
								for (var s, l = i.longestText(t, r.font, e.ticks, e.longestTextCache), c = l, u = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > u && a < o.maxRotation;) {
									var d = i.toRadians(a);
									if (s = Math.cos(d), Math.sin(d) * l > e.maxHeight) {
										a--;
										break
									}
									a++, c = s * l
								}
							e.labelRotation = a
						},
						afterCalculateTickRotation: function () {
							i.callback(this.options.afterCalculateTickRotation, [this])
						},
						beforeFit: function () {
							i.callback(this.options.beforeFit, [this])
						},
						fit: function () {
							var e = this,
								o = e.minSize = {
									width: 0,
									height: 0
								},
								r = e.options,
								a = r.ticks,
								s = r.scaleLabel,
								l = r.gridLines,
								c = r.display,
								u = e.isHorizontal(),
								d = n(a),
								h = 1.5 * n(s).size,
								f = r.gridLines.tickMarkLength;
							if (o.width = u ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : c && l.drawTicks ? f : 0, o.height = u ? c && l.drawTicks ? f : 0 : e.maxHeight, s.display && c && (u ? o.height += h : o.width += h), a.display && c) {
								var p = i.longestText(e.ctx, d.font, e.ticks, e.longestTextCache),
									m = i.numberOfLabelLines(e.ticks),
									g = .5 * d.size;
								if (u) {
									e.longestLabelWidth = p;
									var v = i.toRadians(e.labelRotation),
										y = Math.cos(v),
										b = Math.sin(v) * p + d.size * m + g * m;
									o.height = Math.min(e.maxHeight, o.height + b), e.ctx.font = d.font;
									var x = e.ticks[0],
										w = t(e.ctx, x, d.font),
										C = e.ticks[e.ticks.length - 1],
										k = t(e.ctx, C, d.font);
									0 !== e.labelRotation ? (e.paddingLeft = "bottom" === r.position ? y * w + 3 : y * g + 3, e.paddingRight = "bottom" === r.position ? y * g + 3 : y * k + 3) : (e.paddingLeft = w / 2 + 3, e.paddingRight = k / 2 + 3)
								} else a.mirror ? p = 0 : p += e.options.ticks.padding, o.width = Math.min(e.maxWidth, o.width + p), e.paddingTop = d.size / 2, e.paddingBottom = d.size / 2
							}
							e.handleMargins(), e.width = o.width, e.height = o.height
						},
						handleMargins: function () {
							var e = this;
							e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
						},
						afterFit: function () {
							i.callback(this.options.afterFit, [this])
						},
						isHorizontal: function () {
							return "top" === this.options.position || "bottom" === this.options.position
						},
						isFullWidth: function () {
							return this.options.fullWidth
						},
						getRightValue: function (e) {
							return null === e || void 0 === e ? NaN : "number" != typeof e || isFinite(e) ? "object" == typeof e ? e instanceof Date || e.isValid ? e : this.getRightValue(this.isHorizontal() ? e.x : e.y) : e : NaN
						},
						getLabelForIndex: i.noop,
						getPixelForValue: i.noop,
						getValueForPixel: i.noop,
						getPixelForTick: function (e, t) {
							var n = this;
							if (n.isHorizontal()) {
								var i = (n.width - (n.paddingLeft + n.paddingRight)) / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
									o = i * e + n.paddingLeft;
								t && (o += i / 2);
								var r = n.left + Math.round(o);
								return r += n.isFullWidth() ? n.margins.left : 0
							}
							var a = n.height - (n.paddingTop + n.paddingBottom);
							return n.top + e * (a / (n.ticks.length - 1))
						},
						getPixelForDecimal: function (e) {
							var t = this;
							if (t.isHorizontal()) {
								var n = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
									i = t.left + Math.round(n);
								return i += t.isFullWidth() ? t.margins.left : 0
							}
							return t.top + e * t.height
						},
						getBasePixel: function () {
							return this.getPixelForValue(this.getBaseValue())
						},
						getBaseValue: function () {
							var e = this,
								t = e.min,
								n = e.max;
							return e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
						},
						draw: function (t) {
							var o = this,
								r = o.options;
							if (r.display) {
								var a, s, l = o.ctx,
									c = e.defaults.global,
									u = r.ticks,
									d = r.gridLines,
									h = r.scaleLabel,
									f = 0 !== o.labelRotation,
									p = u.autoSkip,
									m = o.isHorizontal();
								u.maxTicksLimit && (s = u.maxTicksLimit);
								var g = i.getValueOrDefault(u.fontColor, c.defaultFontColor),
									v = n(u),
									y = d.drawTicks ? d.tickMarkLength : 0,
									b = i.getValueOrDefault(h.fontColor, c.defaultFontColor),
									x = n(h),
									w = i.toRadians(o.labelRotation),
									C = Math.cos(w),
									k = o.longestLabelWidth * C;
								l.fillStyle = g;
								var T = [];
								if (m) {
									if (a = !1, (k + u.autoSkipPadding) * o.ticks.length > o.width - (o.paddingLeft + o.paddingRight) && (a = 1 + Math.floor((k + u.autoSkipPadding) * o.ticks.length / (o.width - (o.paddingLeft + o.paddingRight)))), s && o.ticks.length > s)
										for (; !a || o.ticks.length / (a || 1) > s;) a || (a = 1), a += 1;
									p || (a = !1)
								}
								var _ = "right" === r.position ? o.left : o.right - y,
									S = "right" === r.position ? o.left + y : o.right,
									E = "bottom" === r.position ? o.top : o.bottom - y,
									A = "bottom" === r.position ? o.top + y : o.bottom;
								if (i.each(o.ticks, function (e, n) {
										if (void 0 !== e && null !== e) {
											var s = o.ticks.length === n + 1;
											if ((!(a > 1 && n % a > 0 || n % a == 0 && n + a >= o.ticks.length) || s) && void 0 !== e && null !== e) {
												var l, h, p, g;
												n === (void 0 !== o.zeroLineIndex ? o.zeroLineIndex : 0) ? (l = d.zeroLineWidth, h = d.zeroLineColor, p = d.zeroLineBorderDash, g = d.zeroLineBorderDashOffset) : (l = i.getValueAtIndexOrDefault(d.lineWidth, n), h = i.getValueAtIndexOrDefault(d.color, n), p = i.getValueOrDefault(d.borderDash, c.borderDash), g = i.getValueOrDefault(d.borderDashOffset, c.borderDashOffset));
												var v, b, x, C, k, I, D, O, P, M, L = "middle",
													F = "middle";
												if (m) {
													"bottom" === r.position ? (F = f ? "middle" : "top", L = f ? "right" : "center", M = o.top + y) : (F = f ? "middle" : "bottom", L = f ? "left" : "center", M = o.bottom - y);
													var N = o.getPixelForTick(n) + i.aliasPixel(l);
													P = o.getPixelForTick(n, d.offsetGridLines) + u.labelOffset, v = x = k = D = N, b = E, C = A, I = t.top, O = t.bottom
												} else {
													var R, W = "left" === r.position,
														H = u.padding;
													u.mirror ? (L = W ? "left" : "right", R = H) : (L = W ? "right" : "left", R = y + H), P = W ? o.right - R : o.left + R;
													var V = o.getPixelForTick(n);
													V += i.aliasPixel(l), M = o.getPixelForTick(n, d.offsetGridLines), v = _, x = S, k = t.left, D = t.right, b = C = I = O = V
												}
												T.push({
													tx1: v,
													ty1: b,
													tx2: x,
													ty2: C,
													x1: k,
													y1: I,
													x2: D,
													y2: O,
													labelX: P,
													labelY: M,
													glWidth: l,
													glColor: h,
													glBorderDash: p,
													glBorderDashOffset: g,
													rotation: -1 * w,
													label: e,
													textBaseline: F,
													textAlign: L
												})
											}
										}
									}), i.each(T, function (e) {
										if (d.display && (l.save(), l.lineWidth = e.glWidth, l.strokeStyle = e.glColor, l.setLineDash && (l.setLineDash(e.glBorderDash), l.lineDashOffset = e.glBorderDashOffset), l.beginPath(), d.drawTicks && (l.moveTo(e.tx1, e.ty1), l.lineTo(e.tx2, e.ty2)), d.drawOnChartArea && (l.moveTo(e.x1, e.y1), l.lineTo(e.x2, e.y2)), l.stroke(), l.restore()), u.display) {
											l.save(), l.translate(e.labelX, e.labelY), l.rotate(e.rotation), l.font = v.font, l.textBaseline = e.textBaseline, l.textAlign = e.textAlign;
											var t = e.label;
											if (i.isArray(t))
												for (var n = 0, o = 0; n < t.length; ++n) l.fillText("" + t[n], 0, o), o += 1.5 * v.size;
											else l.fillText(t, 0, 0);
											l.restore()
										}
									}), h.display) {
									var I, D, O = 0;
									if (m) I = o.left + (o.right - o.left) / 2, D = "bottom" === r.position ? o.bottom - x.size / 2 : o.top + x.size / 2;
									else {
										var P = "left" === r.position;
										I = P ? o.left + x.size / 2 : o.right - x.size / 2, D = o.top + (o.bottom - o.top) / 2, O = P ? -.5 * Math.PI : .5 * Math.PI
									}
									l.save(), l.translate(I, D), l.rotate(O), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = b, l.font = x.font, l.fillText(h.labelString, 0, 0), l.restore()
								}
								if (d.drawBorder) {
									l.lineWidth = i.getValueAtIndexOrDefault(d.lineWidth, 0), l.strokeStyle = i.getValueAtIndexOrDefault(d.color, 0);
									var M = o.left,
										L = o.right,
										F = o.top,
										N = o.bottom,
										R = i.aliasPixel(l.lineWidth);
									m ? (F = N = "top" === r.position ? o.bottom : o.top, F += R, N += R) : (M = L = "left" === r.position ? o.right : o.left, M += R, L += R), l.beginPath(), l.moveTo(M, F), l.lineTo(L, N), l.stroke()
								}
							}
						}
					})
				}
			}, {}],
			32: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.scaleService = {
						constructors: {},
						defaults: {},
						registerScaleType: function (e, n, i) {
							this.constructors[e] = n, this.defaults[e] = t.clone(i)
						},
						getScaleConstructor: function (e) {
							return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
						},
						getScaleDefaults: function (n) {
							return this.defaults.hasOwnProperty(n) ? t.scaleMerge(e.defaults.scale, this.defaults[n]) : {}
						},
						updateScaleDefaults: function (e, n) {
							var i = this.defaults;
							i.hasOwnProperty(e) && (i[e] = t.extend(i[e], n))
						},
						addScalesToLayout: function (n) {
							t.each(n.scales, function (t) {
								t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, e.layoutService.addBox(n, t)
							})
						}
					}
				}
			}, {}],
			33: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers;
					e.Ticks = {
						generators: {
							linear: function (e, n) {
								var i, o = [];
								if (e.stepSize && e.stepSize > 0) i = e.stepSize;
								else {
									var r = t.niceNum(n.max - n.min, !1);
									i = t.niceNum(r / (e.maxTicks - 1), !0)
								}
								var a = Math.floor(n.min / i) * i,
									s = Math.ceil(n.max / i) * i;
								e.min && e.max && e.stepSize && t.almostWhole((e.max - e.min) / e.stepSize, i / 1e3) && (a = e.min, s = e.max);
								var l = (s - a) / i;
								l = t.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l), o.push(void 0 !== e.min ? e.min : a);
								for (var c = 1; c < l; ++c) o.push(a + c * i);
								return o.push(void 0 !== e.max ? e.max : s), o
							},
							logarithmic: function (e, n) {
								var i, o, r = [],
									a = t.getValueOrDefault,
									s = a(e.min, Math.pow(10, Math.floor(t.log10(n.min)))),
									l = Math.floor(t.log10(n.max)),
									c = Math.ceil(n.max / Math.pow(10, l));
								0 === s ? (i = Math.floor(t.log10(n.minNotZero)), o = Math.floor(n.minNotZero / Math.pow(10, i)), r.push(s), s = o * Math.pow(10, i)) : (i = Math.floor(t.log10(s)), o = Math.floor(s / Math.pow(10, i)));
								do {
									r.push(s), 10 === ++o && (o = 1, ++i), s = o * Math.pow(10, i)
								} while (i < l || i === l && o < c);
								var u = a(e.max, s);
								return r.push(u), r
							}
						},
						formatters: {
							values: function (e) {
								return t.isArray(e) ? e : "" + e
							},
							linear: function (e, n, i) {
								var o = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
								Math.abs(o) > 1 && e !== Math.floor(e) && (o = e - Math.floor(e));
								var r = t.log10(Math.abs(o)),
									a = "";
								if (0 !== e) {
									var s = -1 * Math.floor(r);
									s = Math.max(Math.min(s, 20), 0), a = e.toFixed(s)
								} else a = "0";
								return a
							},
							logarithmic: function (e, n, i) {
								var o = e / Math.pow(10, Math.floor(t.log10(e)));
								return 0 === e ? "0" : 1 === o || 2 === o || 5 === o || 0 === n || n === i.length - 1 ? e.toExponential() : ""
							}
						}
					}
				}
			}, {}],
			34: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t) {
						var n = l.color(e);
						return n.alpha(t * n.alpha()).rgbaString()
					}

					function n(e, t) {
						return t && (l.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
					}

					function i(e) {
						var t = e._xScale,
							n = e._yScale || e._scale,
							i = e._index,
							o = e._datasetIndex;
						return {
							xLabel: t ? t.getLabelForIndex(i, o) : "",
							yLabel: n ? n.getLabelForIndex(i, o) : "",
							index: i,
							datasetIndex: o,
							x: e._model.x,
							y: e._model.y
						}
					}

					function o(t) {
						var n = e.defaults.global,
							i = l.getValueOrDefault;
						return {
							xPadding: t.xPadding,
							yPadding: t.yPadding,
							xAlign: t.xAlign,
							yAlign: t.yAlign,
							bodyFontColor: t.bodyFontColor,
							_bodyFontFamily: i(t.bodyFontFamily, n.defaultFontFamily),
							_bodyFontStyle: i(t.bodyFontStyle, n.defaultFontStyle),
							_bodyAlign: t.bodyAlign,
							bodyFontSize: i(t.bodyFontSize, n.defaultFontSize),
							bodySpacing: t.bodySpacing,
							titleFontColor: t.titleFontColor,
							_titleFontFamily: i(t.titleFontFamily, n.defaultFontFamily),
							_titleFontStyle: i(t.titleFontStyle, n.defaultFontStyle),
							titleFontSize: i(t.titleFontSize, n.defaultFontSize),
							_titleAlign: t.titleAlign,
							titleSpacing: t.titleSpacing,
							titleMarginBottom: t.titleMarginBottom,
							footerFontColor: t.footerFontColor,
							_footerFontFamily: i(t.footerFontFamily, n.defaultFontFamily),
							_footerFontStyle: i(t.footerFontStyle, n.defaultFontStyle),
							footerFontSize: i(t.footerFontSize, n.defaultFontSize),
							_footerAlign: t.footerAlign,
							footerSpacing: t.footerSpacing,
							footerMarginTop: t.footerMarginTop,
							caretSize: t.caretSize,
							cornerRadius: t.cornerRadius,
							backgroundColor: t.backgroundColor,
							opacity: 0,
							legendColorBackground: t.multiKeyBackground,
							displayColors: t.displayColors,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth
						}
					}

					function r(e, t) {
						var n = e._chart.ctx,
							i = 2 * t.yPadding,
							o = 0,
							r = t.body,
							a = r.reduce(function (e, t) {
								return e + t.before.length + t.lines.length + t.after.length
							}, 0);
						a += t.beforeBody.length + t.afterBody.length;
						var s = t.title.length,
							c = t.footer.length,
							u = t.titleFontSize,
							d = t.bodyFontSize,
							h = t.footerFontSize;
						i += s * u, i += s ? (s - 1) * t.titleSpacing : 0, i += s ? t.titleMarginBottom : 0, i += a * d, i += a ? (a - 1) * t.bodySpacing : 0, i += c ? t.footerMarginTop : 0, i += c * h, i += c ? (c - 1) * t.footerSpacing : 0;
						var f = 0,
							p = function (e) {
								o = Math.max(o, n.measureText(e).width + f)
							};
						return n.font = l.fontString(u, t._titleFontStyle, t._titleFontFamily), l.each(t.title, p), n.font = l.fontString(d, t._bodyFontStyle, t._bodyFontFamily), l.each(t.beforeBody.concat(t.afterBody), p), f = t.displayColors ? d + 2 : 0, l.each(r, function (e) {
							l.each(e.before, p), l.each(e.lines, p), l.each(e.after, p)
						}), f = 0, n.font = l.fontString(h, t._footerFontStyle, t._footerFontFamily), l.each(t.footer, p), o += 2 * t.xPadding, {
							width: o,
							height: i
						}
					}

					function a(e, t) {
						var n = e._model,
							i = e._chart,
							o = e._chart.chartArea,
							r = "center",
							a = "center";
						n.y < t.height ? a = "top" : n.y > i.height - t.height && (a = "bottom");
						var s, l, c, u, d, h = (o.left + o.right) / 2,
							f = (o.top + o.bottom) / 2;
						"center" === a ? (s = function (e) {
							return e <= h
						}, l = function (e) {
							return e > h
						}) : (s = function (e) {
							return e <= t.width / 2
						}, l = function (e) {
							return e >= i.width - t.width / 2
						}), c = function (e) {
							return e + t.width > i.width
						}, u = function (e) {
							return e - t.width < 0
						}, d = function (e) {
							return e <= f ? "top" : "bottom"
						}, s(n.x) ? (r = "left", c(n.x) && (r = "center", a = d(n.y))) : l(n.x) && (r = "right", u(n.x) && (r = "center", a = d(n.y)));
						var p = e._options;
						return {
							xAlign: p.xAlign ? p.xAlign : r,
							yAlign: p.yAlign ? p.yAlign : a
						}
					}

					function s(e, t, n) {
						var i = e.x,
							o = e.y,
							r = e.caretSize,
							a = e.caretPadding,
							s = e.cornerRadius,
							l = n.xAlign,
							c = n.yAlign,
							u = r + a,
							d = s + a;
						return "right" === l ? i -= t.width : "center" === l && (i -= t.width / 2), "top" === c ? o += u : o -= "bottom" === c ? t.height + u : t.height / 2, "center" === c ? "left" === l ? i += u : "right" === l && (i -= u) : "left" === l ? i -= d : "right" === l && (i += d), {
							x: i,
							y: o
						}
					}
					var l = e.helpers;
					e.defaults.global.tooltips = {
						enabled: !0,
						custom: null,
						mode: "nearest",
						position: "average",
						intersect: !0,
						backgroundColor: "rgba(0,0,0,0.8)",
						titleFontStyle: "bold",
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleFontColor: "#fff",
						titleAlign: "left",
						bodySpacing: 2,
						bodyFontColor: "#fff",
						bodyAlign: "left",
						footerFontStyle: "bold",
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFontColor: "#fff",
						footerAlign: "left",
						yPadding: 6,
						xPadding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						multiKeyBackground: "#fff",
						displayColors: !0,
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						callbacks: {
							beforeTitle: l.noop,
							title: function (e, t) {
								var n = "",
									i = t.labels,
									o = i ? i.length : 0;
								if (e.length > 0) {
									var r = e[0];
									r.xLabel ? n = r.xLabel : o > 0 && r.index < o && (n = i[r.index])
								}
								return n
							},
							afterTitle: l.noop,
							beforeBody: l.noop,
							beforeLabel: l.noop,
							label: function (e, t) {
								var n = t.datasets[e.datasetIndex].label || "";
								return n && (n += ": "), n += e.yLabel
							},
							labelColor: function (e, t) {
								var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
								return {
									borderColor: n.borderColor,
									backgroundColor: n.backgroundColor
								}
							},
							afterLabel: l.noop,
							afterBody: l.noop,
							beforeFooter: l.noop,
							footer: l.noop,
							afterFooter: l.noop
						}
					}, e.Tooltip = e.Element.extend({
						initialize: function () {
							this._model = o(this._options)
						},
						getTitle: function () {
							var e = this,
								t = e._options.callbacks,
								i = t.beforeTitle.apply(e, arguments),
								o = t.title.apply(e, arguments),
								r = t.afterTitle.apply(e, arguments),
								a = [];
							return a = n(a, i), a = n(a, o), a = n(a, r)
						},
						getBeforeBody: function () {
							var e = this._options.callbacks.beforeBody.apply(this, arguments);
							return l.isArray(e) ? e : void 0 !== e ? [e] : []
						},
						getBody: function (e, t) {
							var i = this,
								o = i._options.callbacks,
								r = [];
							return l.each(e, function (e) {
								var a = {
									before: [],
									lines: [],
									after: []
								};
								n(a.before, o.beforeLabel.call(i, e, t)), n(a.lines, o.label.call(i, e, t)), n(a.after, o.afterLabel.call(i, e, t)), r.push(a)
							}), r
						},
						getAfterBody: function () {
							var e = this._options.callbacks.afterBody.apply(this, arguments);
							return l.isArray(e) ? e : void 0 !== e ? [e] : []
						},
						getFooter: function () {
							var e = this,
								t = e._options.callbacks,
								i = t.beforeFooter.apply(e, arguments),
								o = t.footer.apply(e, arguments),
								r = t.afterFooter.apply(e, arguments),
								a = [];
							return a = n(a, i), a = n(a, o), a = n(a, r)
						},
						update: function (t) {
							var n, c, u = this,
								d = u._options,
								h = u._model,
								f = u._model = o(d),
								p = u._active,
								m = u._data,
								g = {
									xAlign: h.xAlign,
									yAlign: h.yAlign
								},
								v = {
									x: h.x,
									y: h.y
								},
								y = {
									width: h.width,
									height: h.height
								},
								b = {
									x: h.caretX,
									y: h.caretY
								};
							if (p.length) {
								f.opacity = 1;
								var x = [];
								b = e.Tooltip.positioners[d.position](p, u._eventPosition);
								var w = [];
								for (n = 0, c = p.length; n < c; ++n) w.push(i(p[n]));
								d.filter && (w = w.filter(function (e) {
									return d.filter(e, m)
								})), d.itemSort && (w = w.sort(function (e, t) {
									return d.itemSort(e, t, m)
								})), l.each(w, function (e) {
									x.push(d.callbacks.labelColor.call(u, e, u._chart))
								}), f.title = u.getTitle(w, m), f.beforeBody = u.getBeforeBody(w, m), f.body = u.getBody(w, m), f.afterBody = u.getAfterBody(w, m), f.footer = u.getFooter(w, m), f.x = Math.round(b.x), f.y = Math.round(b.y), f.caretPadding = d.caretPadding, f.labelColors = x, f.dataPoints = w, v = s(f, y = r(this, f), g = a(this, y))
							} else f.opacity = 0;
							return f.xAlign = g.xAlign, f.yAlign = g.yAlign, f.x = v.x, f.y = v.y, f.width = y.width, f.height = y.height, f.caretX = b.x, f.caretY = b.y, u._model = f, t && d.custom && d.custom.call(u, f), u
						},
						drawCaret: function (e, t) {
							var n = this._chart.ctx,
								i = this._view,
								o = this.getCaretPosition(e, t, i);
							n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
						},
						getCaretPosition: function (e, t, n) {
							var i, o, r, a, s, l, c = n.caretSize,
								u = n.cornerRadius,
								d = n.xAlign,
								h = n.yAlign,
								f = e.x,
								p = e.y,
								m = t.width,
								g = t.height;
							if ("center" === h) s = p + g / 2, "left" === d ? (o = (i = f) - c, r = i, a = s + c, l = s - c) : (o = (i = f + m) + c, r = i, a = s - c, l = s + c);
							else if ("left" === d ? (i = (o = f + u + c) - c, r = o + c) : "right" === d ? (i = (o = f + m - u - c) - c, r = o + c) : (i = (o = f + m / 2) - c, r = o + c), "top" === h) s = (a = p) - c, l = a;
							else {
								s = (a = p + g) + c, l = a;
								var v = r;
								r = i, i = v
							}
							return {
								x1: i,
								x2: o,
								x3: r,
								y1: a,
								y2: s,
								y3: l
							}
						},
						drawTitle: function (e, n, i, o) {
							var r = n.title;
							if (r.length) {
								i.textAlign = n._titleAlign, i.textBaseline = "top";
								var a = n.titleFontSize,
									s = n.titleSpacing;
								i.fillStyle = t(n.titleFontColor, o), i.font = l.fontString(a, n._titleFontStyle, n._titleFontFamily);
								var c, u;
								for (c = 0, u = r.length; c < u; ++c) i.fillText(r[c], e.x, e.y), e.y += a + s, c + 1 === r.length && (e.y += n.titleMarginBottom - s)
							}
						},
						drawBody: function (e, n, i, o) {
							var r = n.bodyFontSize,
								a = n.bodySpacing,
								s = n.body;
							i.textAlign = n._bodyAlign, i.textBaseline = "top";
							var c = t(n.bodyFontColor, o);
							i.fillStyle = c, i.font = l.fontString(r, n._bodyFontStyle, n._bodyFontFamily);
							var u = 0,
								d = function (t) {
									i.fillText(t, e.x + u, e.y), e.y += r + a
								};
							l.each(n.beforeBody, d);
							var h = n.displayColors;
							u = h ? r + 2 : 0, l.each(s, function (a, s) {
								l.each(a.before, d), l.each(a.lines, function (a) {
									h && (i.fillStyle = t(n.legendColorBackground, o), i.fillRect(e.x, e.y, r, r), i.strokeStyle = t(n.labelColors[s].borderColor, o), i.strokeRect(e.x, e.y, r, r), i.fillStyle = t(n.labelColors[s].backgroundColor, o), i.fillRect(e.x + 1, e.y + 1, r - 2, r - 2), i.fillStyle = c), d(a)
								}), l.each(a.after, d)
							}), u = 0, l.each(n.afterBody, d), e.y -= a
						},
						drawFooter: function (e, n, i, o) {
							var r = n.footer;
							r.length && (e.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = t(n.footerFontColor, o), i.font = l.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), l.each(r, function (t) {
								i.fillText(t, e.x, e.y), e.y += n.footerFontSize + n.footerSpacing
							}))
						},
						drawBackground: function (e, n, i, o, r) {
							i.fillStyle = t(n.backgroundColor, r), i.strokeStyle = t(n.borderColor, r), i.lineWidth = n.borderWidth;
							var a = n.xAlign,
								s = n.yAlign,
								l = e.x,
								c = e.y,
								u = o.width,
								d = o.height,
								h = n.cornerRadius;
							i.beginPath(), i.moveTo(l + h, c), "top" === s && this.drawCaret(e, o), i.lineTo(l + u - h, c), i.quadraticCurveTo(l + u, c, l + u, c + h), "center" === s && "right" === a && this.drawCaret(e, o), i.lineTo(l + u, c + d - h), i.quadraticCurveTo(l + u, c + d, l + u - h, c + d), "bottom" === s && this.drawCaret(e, o), i.lineTo(l + h, c + d), i.quadraticCurveTo(l, c + d, l, c + d - h), "center" === s && "left" === a && this.drawCaret(e, o), i.lineTo(l, c + h), i.quadraticCurveTo(l, c, l + h, c), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
						},
						draw: function () {
							var e = this._chart.ctx,
								t = this._view;
							if (0 !== t.opacity) {
								var n = {
										width: t.width,
										height: t.height
									},
									i = {
										x: t.x,
										y: t.y
									},
									o = Math.abs(t.opacity < .001) ? 0 : t.opacity,
									r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
								this._options.enabled && r && (this.drawBackground(i, t, e, n, o), i.x += t.xPadding, i.y += t.yPadding, this.drawTitle(i, t, e, o), this.drawBody(i, t, e, o), this.drawFooter(i, t, e, o))
							}
						},
						handleEvent: function (e) {
							var t = this,
								n = t._options,
								i = !1;
							if (t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : t._active = t._chart.getElementsAtEventForMode(e, n.mode, n), !(i = !l.arrayEquals(t._active, t._lastActive))) return !1;
							if (t._lastActive = t._active, n.enabled || n.custom) {
								t._eventPosition = {
									x: e.x,
									y: e.y
								};
								var o = t._model;
								t.update(!0), t.pivot(), i |= o.x !== t._model.x || o.y !== t._model.y
							}
							return i
						}
					}), e.Tooltip.positioners = {
						average: function (e) {
							if (!e.length) return !1;
							var t, n, i = 0,
								o = 0,
								r = 0;
							for (t = 0, n = e.length; t < n; ++t) {
								var a = e[t];
								if (a && a.hasValue()) {
									var s = a.tooltipPosition();
									i += s.x, o += s.y, ++r
								}
							}
							return {
								x: Math.round(i / r),
								y: Math.round(o / r)
							}
						},
						nearest: function (e, t) {
							var n, i, o, r = t.x,
								a = t.y,
								s = Number.POSITIVE_INFINITY;
							for (i = 0, o = e.length; i < o; ++i) {
								var c = e[i];
								if (c && c.hasValue()) {
									var u = c.getCenterPoint(),
										d = l.distanceBetweenPoints(t, u);
									d < s && (s = d, n = c)
								}
							}
							if (n) {
								var h = n.tooltipPosition();
								r = h.x, a = h.y
							}
							return {
								x: r,
								y: a
							}
						}
					}
				}
			}, {}],
			35: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers,
						n = e.defaults.global;
					n.elements.arc = {
						backgroundColor: n.defaultColor,
						borderColor: "#fff",
						borderWidth: 2
					}, e.elements.Arc = e.Element.extend({
						inLabelRange: function (e) {
							var t = this._view;
							return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
						},
						inRange: function (e, n) {
							var i = this._view;
							if (i) {
								for (var o = t.getAngleFromPoint(i, {
										x: e,
										y: n
									}), r = o.angle, a = o.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
								for (; r > l;) r -= 2 * Math.PI;
								for (; r < s;) r += 2 * Math.PI;
								var c = r >= s && r <= l,
									u = a >= i.innerRadius && a <= i.outerRadius;
								return c && u
							}
							return !1
						},
						getCenterPoint: function () {
							var e = this._view,
								t = (e.startAngle + e.endAngle) / 2,
								n = (e.innerRadius + e.outerRadius) / 2;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						getArea: function () {
							var e = this._view;
							return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
						},
						tooltipPosition: function () {
							var e = this._view,
								t = e.startAngle + (e.endAngle - e.startAngle) / 2,
								n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						draw: function () {
							var e = this._chart.ctx,
								t = this._view,
								n = t.startAngle,
								i = t.endAngle;
							e.beginPath(), e.arc(t.x, t.y, t.outerRadius, n, i), e.arc(t.x, t.y, t.innerRadius, i, n, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
						}
					})
				}
			}, {}],
			36: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers,
						n = e.defaults.global;
					e.defaults.global.elements.line = {
						tension: .4,
						backgroundColor: n.defaultColor,
						borderWidth: 3,
						borderColor: n.defaultColor,
						borderCapStyle: "butt",
						borderDash: [],
						borderDashOffset: 0,
						borderJoinStyle: "miter",
						capBezierPoints: !0,
						fill: !0
					}, e.elements.Line = e.Element.extend({
						draw: function () {
							var e, i, o, r, a = this,
								s = a._view,
								l = a._chart.ctx,
								c = s.spanGaps,
								u = a._children.slice(),
								d = n.elements.line,
								h = -1;
							for (a._loop && u.length && u.push(u[0]), l.save(), l.lineCap = s.borderCapStyle || d.borderCapStyle, l.setLineDash && l.setLineDash(s.borderDash || d.borderDash), l.lineDashOffset = s.borderDashOffset || d.borderDashOffset, l.lineJoin = s.borderJoinStyle || d.borderJoinStyle, l.lineWidth = s.borderWidth || d.borderWidth, l.strokeStyle = s.borderColor || n.defaultColor, l.beginPath(), h = -1, e = 0; e < u.length; ++e) i = u[e], o = t.previousItem(u, e), r = i._view, 0 === e ? r.skip || (l.moveTo(r.x, r.y), h = e) : (o = -1 === h ? o : u[h], r.skip || (h !== e - 1 && !c || -1 === h ? l.moveTo(r.x, r.y) : t.canvas.lineTo(l, o._view, i._view), h = e));
							l.stroke(), l.restore()
						}
					})
				}
			}, {}],
			37: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e) {
						var t = this._view;
						return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hitRadius, 2)
					}
					var n = e.helpers,
						i = e.defaults.global,
						o = i.defaultColor;
					i.elements.point = {
						radius: 3,
						pointStyle: "circle",
						backgroundColor: o,
						borderWidth: 1,
						borderColor: o,
						hitRadius: 1,
						hoverRadius: 4,
						hoverBorderWidth: 1
					}, e.elements.Point = e.Element.extend({
						inRange: function (e, t) {
							var n = this._view;
							return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
						},
						inLabelRange: t,
						inXRange: t,
						inYRange: function (e) {
							var t = this._view;
							return !!t && Math.pow(e - t.y, 2) < Math.pow(t.radius + t.hitRadius, 2)
						},
						getCenterPoint: function () {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						},
						getArea: function () {
							return Math.PI * Math.pow(this._view.radius, 2)
						},
						tooltipPosition: function () {
							var e = this._view;
							return {
								x: e.x,
								y: e.y,
								padding: e.radius + e.borderWidth
							}
						},
						draw: function (t) {
							var r = this._view,
								a = this._model,
								s = this._chart.ctx,
								l = r.pointStyle,
								c = r.radius,
								u = r.x,
								d = r.y,
								h = e.helpers.color,
								f = 0;
							r.skip || (s.strokeStyle = r.borderColor || o, s.lineWidth = n.getValueOrDefault(r.borderWidth, i.elements.point.borderWidth), s.fillStyle = r.backgroundColor || o, void 0 !== t && (a.x < t.left || 1.01 * t.right < a.x || a.y < t.top || 1.01 * t.bottom < a.y) && (a.x < t.left ? f = (u - a.x) / (t.left - a.x) : 1.01 * t.right < a.x ? f = (a.x - u) / (a.x - t.right) : a.y < t.top ? f = (d - a.y) / (t.top - a.y) : 1.01 * t.bottom < a.y && (f = (a.y - d) / (a.y - t.bottom)), f = Math.round(100 * f) / 100, s.strokeStyle = h(s.strokeStyle).alpha(f).rgbString(), s.fillStyle = h(s.fillStyle).alpha(f).rgbString()), e.canvasHelpers.drawPoint(s, l, c, u, d))
						}
					})
				}
			}, {}],
			38: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e) {
						return void 0 !== e._view.width
					}

					function n(e) {
						var n, i, o, r, a = e._view;
						if (t(e)) {
							var s = a.width / 2;
							n = a.x - s, i = a.x + s, o = Math.min(a.y, a.base), r = Math.max(a.y, a.base)
						} else {
							var l = a.height / 2;
							n = Math.min(a.x, a.base), i = Math.max(a.x, a.base), o = a.y - l, r = a.y + l
						}
						return {
							left: n,
							top: o,
							right: i,
							bottom: r
						}
					}
					var i = e.defaults.global;
					i.elements.rectangle = {
						backgroundColor: i.defaultColor,
						borderWidth: 0,
						borderColor: i.defaultColor,
						borderSkipped: "bottom"
					}, e.elements.Rectangle = e.Element.extend({
						draw: function () {
							function e(e) {
								return v[(y + e) % 4]
							}
							var t, n, i, o, r, a, s, l = this._chart.ctx,
								c = this._view,
								u = c.borderWidth;
							if (c.horizontal ? (t = c.base, n = c.x, i = c.y - c.height / 2, o = c.y + c.height / 2, r = n > t ? 1 : -1, a = 1, s = c.borderSkipped || "left") : (t = c.x - c.width / 2, n = c.x + c.width / 2, i = c.y, r = 1, a = (o = c.base) > i ? 1 : -1, s = c.borderSkipped || "bottom"), u) {
								var d = Math.min(Math.abs(t - n), Math.abs(i - o)),
									h = (u = u > d ? d : u) / 2,
									f = t + ("left" !== s ? h * r : 0),
									p = n + ("right" !== s ? -h * r : 0),
									m = i + ("top" !== s ? h * a : 0),
									g = o + ("bottom" !== s ? -h * a : 0);
								f !== p && (i = m, o = g), m !== g && (t = f, n = p)
							}
							l.beginPath(), l.fillStyle = c.backgroundColor, l.strokeStyle = c.borderColor, l.lineWidth = u;
							var v = [
									[t, o],
									[t, i],
									[n, i],
									[n, o]
								],
								y = ["bottom", "left", "top", "right"].indexOf(s, 0); - 1 === y && (y = 0);
							var b = e(0);
							l.moveTo(b[0], b[1]);
							for (var x = 1; x < 4; x++) b = e(x), l.lineTo(b[0], b[1]);
							l.fill(), u && l.stroke()
						},
						height: function () {
							var e = this._view;
							return e.base - e.y
						},
						inRange: function (e, t) {
							var i = !1;
							if (this._view) {
								var o = n(this);
								i = e >= o.left && e <= o.right && t >= o.top && t <= o.bottom
							}
							return i
						},
						inLabelRange: function (e, i) {
							var o = this;
							if (!o._view) return !1;
							var r = n(o);
							return t(o) ? e >= r.left && e <= r.right : i >= r.top && i <= r.bottom
						},
						inXRange: function (e) {
							var t = n(this);
							return e >= t.left && e <= t.right
						},
						inYRange: function (e) {
							var t = n(this);
							return e >= t.top && e <= t.bottom
						},
						getCenterPoint: function () {
							var e, n, i = this._view;
							return t(this) ? (e = i.x, n = (i.y + i.base) / 2) : (e = (i.x + i.base) / 2, n = i.y), {
								x: e,
								y: n
							}
						},
						getArea: function () {
							var e = this._view;
							return e.width * Math.abs(e.y - e.base)
						},
						tooltipPosition: function () {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						}
					})
				}
			}, {}],
			39: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t) {
						var n = l.getStyle(e, t),
							i = n && n.match(/^(\d+)(\.\d+)?px$/);
						return i ? Number(i[1]) : void 0
					}

					function n(e, n) {
						var i = e.style,
							o = e.getAttribute("height"),
							r = e.getAttribute("width");
						if (e._chartjs = {
								initial: {
									height: o,
									width: r,
									style: {
										display: i.display,
										height: i.height,
										width: i.width
									}
								}
							}, i.display = i.display || "block", null === r || "" === r) {
							var a = t(e, "width");
							void 0 !== a && (e.width = a)
						}
						if (null === o || "" === o)
							if ("" === e.style.height) e.height = e.width / (n.options.aspectRatio || 2);
							else {
								var s = t(e, "height");
								void 0 !== a && (e.height = s)
							}
						return e
					}

					function i(e, t, n, i, o) {
						return {
							type: e,
							chart: t,
							native: o || null,
							x: void 0 !== n ? n : null,
							y: void 0 !== i ? i : null
						}
					}

					function o(e, t) {
						var n = c[e.type] || e.type,
							o = l.getRelativePosition(e, t);
						return i(n, t, o.x, o.y, e)
					}

					function r(e) {
						var t = document.createElement("iframe");
						return t.className = "chartjs-hidden-iframe", t.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", t.tabIndex = -1, l.addEvent(t, "load", function () {
							l.addEvent(t.contentWindow || t, "resize", e), e()
						}), t
					}

					function a(e, t, n) {
						var o = e._chartjs = {
							ticking: !1
						};
						o.resizer = r(function () {
							o.ticking || (o.ticking = !0, l.requestAnimFrame.call(window, function () {
								if (o.resizer) return o.ticking = !1, t(i("resize", n))
							}))
						}), e.insertBefore(o.resizer, e.firstChild)
					}

					function s(e) {
						if (e && e._chartjs) {
							var t = e._chartjs.resizer;
							t && (t.parentNode.removeChild(t), e._chartjs.resizer = null), delete e._chartjs
						}
					}
					var l = e.helpers,
						c = {
							touchstart: "mousedown",
							touchmove: "mousemove",
							touchend: "mouseup",
							pointerenter: "mouseenter",
							pointerdown: "mousedown",
							pointermove: "mousemove",
							pointerup: "mouseup",
							pointerleave: "mouseout",
							pointerout: "mouseout"
						};
					return {
						acquireContext: function (e, t) {
							"string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
							var i = e && e.getContext && e.getContext("2d");
							return i && i.canvas === e ? (n(e, t), i) : null
						},
						releaseContext: function (e) {
							var t = e.canvas;
							if (t._chartjs) {
								var n = t._chartjs.initial;
								["height", "width"].forEach(function (e) {
									var i = n[e];
									void 0 === i || null === i ? t.removeAttribute(e) : t.setAttribute(e, i)
								}), l.each(n.style || {}, function (e, n) {
									t.style[n] = e
								}), t.width = t.width, delete t._chartjs
							}
						},
						addEventListener: function (e, t, n) {
							var i = e.canvas;
							if ("resize" !== t) {
								var r = n._chartjs || (n._chartjs = {}),
									s = (r.proxies || (r.proxies = {}))[e.id + "_" + t] = function (t) {
										n(o(t, e))
									};
								l.addEvent(i, t, s)
							} else a(i.parentNode, n, e)
						},
						removeEventListener: function (e, t, n) {
							var i = e.canvas;
							if ("resize" !== t) {
								var o = ((n._chartjs || {}).proxies || {})[e.id + "_" + t];
								o && l.removeEvent(i, t, o)
							} else s(i.parentNode)
						}
					}
				}
			}, {}],
			40: [function (e, t, n) {
				"use strict";
				var i = e(39);
				t.exports = function (e) {
					e.platform = {
						acquireContext: function () {},
						releaseContext: function () {},
						addEventListener: function () {},
						removeEventListener: function () {}
					}, e.helpers.extend(e.platform, i(e))
				}
			}, {
				39: 39
			}],
			41: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t, n) {
						var i, o = e._model || {},
							r = o.fill;
						if (void 0 === r && (r = !!o.backgroundColor), !1 === r || null === r) return !1;
						if (!0 === r) return "origin";
						if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = t + i), !(i === t || i < 0 || i >= n) && i;
						switch (r) {
							case "bottom":
								return "start";
							case "top":
								return "end";
							case "zero":
								return "origin";
							case "origin":
							case "start":
							case "end":
								return r;
							default:
								return !1
						}
					}

					function n(e) {
						var t, n = e.el._model || {},
							i = e.el._scale || {},
							o = e.fill,
							r = null;
						if (isFinite(o)) return null;
						if ("start" === o ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === o ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), void 0 !== r && null !== r) {
							if (void 0 !== r.x && void 0 !== r.y) return r;
							if ("number" == typeof r && isFinite(r)) return t = i.isHorizontal(), {
								x: t ? r : null,
								y: t ? null : r
							}
						}
						return null
					}

					function i(e, t, n) {
						var i, o = e[t].fill,
							r = [t];
						if (!n) return o;
						for (; !1 !== o && -1 === r.indexOf(o);) {
							if (!isFinite(o)) return o;
							if (!(i = e[o])) return !1;
							if (i.visible) return o;
							r.push(o), o = i.fill
						}
						return !1
					}

					function o(e) {
						var t = e.fill,
							n = "dataset";
						return !1 === t ? null : (isFinite(t) || (n = "boundary"), u[n](e))
					}

					function r(e) {
						return e && !e.skip
					}

					function a(e, t, n, i, o) {
						var r;
						if (i && o) {
							for (e.moveTo(t[0].x, t[0].y), r = 1; r < i; ++r) c.canvas.lineTo(e, t[r - 1], t[r]);
							for (e.lineTo(n[o - 1].x, n[o - 1].y), r = o - 1; r > 0; --r) c.canvas.lineTo(e, n[r], n[r - 1], !0)
						}
					}

					function s(e, t, n, i, o, s) {
						var l, c, u, d, h, f, p, m = t.length,
							g = i.spanGaps,
							v = [],
							y = [],
							b = 0,
							x = 0;
						for (e.beginPath(), l = 0, c = m + !!s; l < c; ++l) h = n(d = t[u = l % m]._view, u, i), f = r(d), p = r(h), f && p ? (b = v.push(d), x = y.push(h)) : b && x && (g ? (f && v.push(d), p && y.push(h)) : (a(e, v, y, b, x), b = x = 0, v = [], y = []));
						a(e, v, y, b, x), e.closePath(), e.fillStyle = o, e.fill()
					}
					e.defaults.global.plugins.filler = {
						propagate: !0
					};
					var l = e.defaults,
						c = e.helpers,
						u = {
							dataset: function (e) {
								var t = e.fill,
									n = e.chart,
									i = n.getDatasetMeta(t),
									o = i && n.isDatasetVisible(t) && i.dataset._children || [];
								return o.length ? function (e, t) {
									return o[t]._view || null
								} : null
							},
							boundary: function (e) {
								var t = e.boundary,
									n = t ? t.x : null,
									i = t ? t.y : null;
								return function (e) {
									return {
										x: null === n ? e.x : n,
										y: null === i ? e.y : i
									}
								}
							}
						};
					return {
						id: "filler",
						afterDatasetsUpdate: function (r, a) {
							var s, l, c, u, d = (r.data.datasets || []).length,
								h = a.propagate,
								f = [];
							for (l = 0; l < d; ++l) u = null, (c = (s = r.getDatasetMeta(l)).dataset) && c._model && c instanceof e.elements.Line && (u = {
								visible: r.isDatasetVisible(l),
								fill: t(c, l, d),
								chart: r,
								el: c
							}), s.$filler = u, f.push(u);
							for (l = 0; l < d; ++l)(u = f[l]) && (u.fill = i(f, l, h), u.boundary = n(u), u.mapper = o(u))
						},
						beforeDatasetDraw: function (e, t) {
							var n = t.meta.$filler;
							if (n) {
								var i = n.el,
									o = i._view,
									r = i._children || [],
									a = n.mapper,
									c = o.backgroundColor || l.global.defaultColor;
								a && c && r.length && s(e.ctx, r, a, o, c, i._loop)
							}
						}
					}
				}
			}, {}],
			42: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e, t) {
						return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
					}

					function n(t, n) {
						var i = new e.Legend({
							ctx: t.ctx,
							options: n,
							chart: t
						});
						o.configure(t, i, n), o.addBox(t, i), t.legend = i
					}
					var i = e.helpers,
						o = e.layoutService,
						r = i.noop;
					return e.defaults.global.legend = {
						display: !0,
						position: "top",
						fullWidth: !0,
						reverse: !1,
						weight: 1e3,
						onClick: function (e, t) {
							var n = t.datasetIndex,
								i = this.chart,
								o = i.getDatasetMeta(n);
							o.hidden = null === o.hidden ? !i.data.datasets[n].hidden : null, i.update()
						},
						onHover: null,
						labels: {
							boxWidth: 40,
							padding: 10,
							generateLabels: function (e) {
								var t = e.data;
								return i.isArray(t.datasets) ? t.datasets.map(function (t, n) {
									return {
										text: t.label,
										fillStyle: i.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
										hidden: !e.isDatasetVisible(n),
										lineCap: t.borderCapStyle,
										lineDash: t.borderDash,
										lineDashOffset: t.borderDashOffset,
										lineJoin: t.borderJoinStyle,
										lineWidth: t.borderWidth,
										strokeStyle: t.borderColor,
										pointStyle: t.pointStyle,
										datasetIndex: n
									}
								}, this) : []
							}
						}
					}, e.Legend = e.Element.extend({
						initialize: function (e) {
							i.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
						},
						beforeUpdate: r,
						update: function (e, t, n) {
							var i = this;
							return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
						},
						afterUpdate: r,
						beforeSetDimensions: r,
						setDimensions: function () {
							var e = this;
							e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
								width: 0,
								height: 0
							}
						},
						afterSetDimensions: r,
						beforeBuildLabels: r,
						buildLabels: function () {
							var e = this,
								t = e.options.labels,
								n = t.generateLabels.call(e, e.chart);
							t.filter && (n = n.filter(function (n) {
								return t.filter(n, e.chart.data)
							})), e.options.reverse && n.reverse(), e.legendItems = n
						},
						afterBuildLabels: r,
						beforeFit: r,
						fit: function () {
							var n = this,
								o = n.options,
								r = o.labels,
								a = o.display,
								s = n.ctx,
								l = e.defaults.global,
								c = i.getValueOrDefault,
								u = c(r.fontSize, l.defaultFontSize),
								d = c(r.fontStyle, l.defaultFontStyle),
								h = c(r.fontFamily, l.defaultFontFamily),
								f = i.fontString(u, d, h),
								p = n.legendHitBoxes = [],
								m = n.minSize,
								g = n.isHorizontal();
							if (g ? (m.width = n.maxWidth, m.height = a ? 10 : 0) : (m.width = a ? 10 : 0, m.height = n.maxHeight), a)
								if (s.font = f, g) {
									var v = n.lineWidths = [0],
										y = n.legendItems.length ? u + r.padding : 0;
									s.textAlign = "left", s.textBaseline = "top", i.each(n.legendItems, function (e, i) {
										var o = t(r, u) + u / 2 + s.measureText(e.text).width;
										v[v.length - 1] + o + r.padding >= n.width && (y += u + r.padding, v[v.length] = n.left), p[i] = {
											left: 0,
											top: 0,
											width: o,
											height: u
										}, v[v.length - 1] += o + r.padding
									}), m.height += y
								} else {
									var b = r.padding,
										x = n.columnWidths = [],
										w = r.padding,
										C = 0,
										k = 0,
										T = u + b;
									i.each(n.legendItems, function (e, n) {
										var i = t(r, u) + u / 2 + s.measureText(e.text).width;
										k + T > m.height && (w += C + r.padding, x.push(C), C = 0, k = 0), C = Math.max(C, i), k += T, p[n] = {
											left: 0,
											top: 0,
											width: i,
											height: u
										}
									}), w += C, x.push(C), m.width += w
								}
							n.width = m.width, n.height = m.height
						},
						afterFit: r,
						isHorizontal: function () {
							return "top" === this.options.position || "bottom" === this.options.position
						},
						draw: function () {
							var n = this,
								o = n.options,
								r = o.labels,
								a = e.defaults.global,
								s = a.elements.line,
								l = n.width,
								c = n.lineWidths;
							if (o.display) {
								var u, d = n.ctx,
									h = i.getValueOrDefault,
									f = h(r.fontColor, a.defaultFontColor),
									p = h(r.fontSize, a.defaultFontSize),
									m = h(r.fontStyle, a.defaultFontStyle),
									g = h(r.fontFamily, a.defaultFontFamily),
									v = i.fontString(p, m, g);
								d.textAlign = "left", d.textBaseline = "top", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = v;
								var y = t(r, p),
									b = n.legendHitBoxes,
									x = function (t, n, i) {
										if (!(isNaN(y) || y <= 0)) {
											d.save(), d.fillStyle = h(i.fillStyle, a.defaultColor), d.lineCap = h(i.lineCap, s.borderCapStyle), d.lineDashOffset = h(i.lineDashOffset, s.borderDashOffset), d.lineJoin = h(i.lineJoin, s.borderJoinStyle), d.lineWidth = h(i.lineWidth, s.borderWidth), d.strokeStyle = h(i.strokeStyle, a.defaultColor);
											var r = 0 === h(i.lineWidth, s.borderWidth);
											if (d.setLineDash && d.setLineDash(h(i.lineDash, s.borderDash)), o.labels && o.labels.usePointStyle) {
												var l = p * Math.SQRT2 / 2,
													c = l / Math.SQRT2,
													u = t + c,
													f = n + c;
												e.canvasHelpers.drawPoint(d, i.pointStyle, l, u, f)
											} else r || d.strokeRect(t, n, y, p), d.fillRect(t, n, y, p);
											d.restore()
										}
									},
									w = function (e, t, n, i) {
										d.fillText(n.text, y + p / 2 + e, t), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(y + p / 2 + e, t + p / 2), d.lineTo(y + p / 2 + e + i, t + p / 2), d.stroke())
									},
									C = n.isHorizontal();
								u = C ? {
									x: n.left + (l - c[0]) / 2,
									y: n.top + r.padding,
									line: 0
								} : {
									x: n.left + r.padding,
									y: n.top + r.padding,
									line: 0
								};
								var k = p + r.padding;
								i.each(n.legendItems, function (e, t) {
									var i = d.measureText(e.text).width,
										o = y + p / 2 + i,
										a = u.x,
										s = u.y;
									C ? a + o >= l && (s = u.y += k, u.line++, a = u.x = n.left + (l - c[u.line]) / 2) : s + k > n.bottom && (a = u.x = a + n.columnWidths[u.line] + r.padding, s = u.y = n.top + r.padding, u.line++), x(a, s, e), b[t].left = a, b[t].top = s, w(a, s, e, i), C ? u.x += o + r.padding : u.y += k
								})
							}
						},
						handleEvent: function (e) {
							var t = this,
								n = t.options,
								i = "mouseup" === e.type ? "click" : e.type,
								o = !1;
							if ("mousemove" === i) {
								if (!n.onHover) return
							} else {
								if ("click" !== i) return;
								if (!n.onClick) return
							}
							var r = e.x,
								a = e.y;
							if (r >= t.left && r <= t.right && a >= t.top && a <= t.bottom)
								for (var s = t.legendHitBoxes, l = 0; l < s.length; ++l) {
									var c = s[l];
									if (r >= c.left && r <= c.left + c.width && a >= c.top && a <= c.top + c.height) {
										if ("click" === i) {
											n.onClick.call(t, e.native, t.legendItems[l]), o = !0;
											break
										}
										if ("mousemove" === i) {
											n.onHover.call(t, e.native, t.legendItems[l]), o = !0;
											break
										}
									}
								}
							return o
						}
					}), {
						id: "legend",
						beforeInit: function (e) {
							var t = e.options.legend;
							t && n(e, t)
						},
						beforeUpdate: function (t) {
							var r = t.options.legend,
								a = t.legend;
							r ? (r = i.configMerge(e.defaults.global.legend, r), a ? (o.configure(t, a, r), a.options = r) : n(t, r)) : a && (o.removeBox(t, a), delete t.legend)
						},
						afterEvent: function (e, t) {
							var n = e.legend;
							n && n.handleEvent(t)
						}
					}
				}
			}, {}],
			43: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(t, n) {
						var o = new e.Title({
							ctx: t.ctx,
							options: n,
							chart: t
						});
						i.configure(t, o, n), i.addBox(t, o), t.titleBlock = o
					}
					var n = e.helpers,
						i = e.layoutService,
						o = n.noop;
					return e.defaults.global.title = {
						display: !1,
						position: "top",
						fullWidth: !0,
						weight: 2e3,
						fontStyle: "bold",
						padding: 10,
						text: ""
					}, e.Title = e.Element.extend({
						initialize: function (e) {
							var t = this;
							n.extend(t, e), t.legendHitBoxes = []
						},
						beforeUpdate: o,
						update: function (e, t, n) {
							var i = this;
							return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
						},
						afterUpdate: o,
						beforeSetDimensions: o,
						setDimensions: function () {
							var e = this;
							e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
								width: 0,
								height: 0
							}
						},
						afterSetDimensions: o,
						beforeBuildLabels: o,
						buildLabels: o,
						afterBuildLabels: o,
						beforeFit: o,
						fit: function () {
							var t = this,
								i = n.getValueOrDefault,
								o = t.options,
								r = e.defaults.global,
								a = o.display,
								s = i(o.fontSize, r.defaultFontSize),
								l = t.minSize;
							t.isHorizontal() ? (l.width = t.maxWidth, l.height = a ? s + 2 * o.padding : 0) : (l.width = a ? s + 2 * o.padding : 0, l.height = t.maxHeight), t.width = l.width, t.height = l.height
						},
						afterFit: o,
						isHorizontal: function () {
							var e = this.options.position;
							return "top" === e || "bottom" === e
						},
						draw: function () {
							var t = this,
								i = t.ctx,
								o = n.getValueOrDefault,
								r = t.options,
								a = e.defaults.global;
							if (r.display) {
								var s, l, c, u = o(r.fontSize, a.defaultFontSize),
									d = o(r.fontStyle, a.defaultFontStyle),
									h = o(r.fontFamily, a.defaultFontFamily),
									f = n.fontString(u, d, h),
									p = 0,
									m = t.top,
									g = t.left,
									v = t.bottom,
									y = t.right;
								i.fillStyle = o(r.fontColor, a.defaultFontColor), i.font = f, t.isHorizontal() ? (s = g + (y - g) / 2, l = m + (v - m) / 2, c = y - g) : (s = "left" === r.position ? g + u / 2 : y - u / 2, l = m + (v - m) / 2, c = v - m, p = Math.PI * ("left" === r.position ? -.5 : .5)), i.save(), i.translate(s, l), i.rotate(p), i.textAlign = "center", i.textBaseline = "middle", i.fillText(r.text, 0, 0, c), i.restore()
							}
						}
					}), {
						id: "title",
						beforeInit: function (e) {
							var n = e.options.title;
							n && t(e, n)
						},
						beforeUpdate: function (o) {
							var r = o.options.title,
								a = o.titleBlock;
							r ? (r = n.configMerge(e.defaults.global.title, r), a ? (i.configure(o, a, r), a.options = r) : t(o, r)) : a && (e.layoutService.removeBox(o, a), delete o.titleBlock)
						}
					}
				}
			}, {}],
			44: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers,
						n = {
							position: "bottom"
						},
						i = e.Scale.extend({
							getLabels: function () {
								var e = this.chart.data;
								return (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
							},
							determineDataLimits: function () {
								var e = this,
									n = e.getLabels();
								e.minIndex = 0, e.maxIndex = n.length - 1;
								var i;
								void 0 !== e.options.ticks.min && (i = t.indexOf(n, e.options.ticks.min), e.minIndex = -1 !== i ? i : e.minIndex), void 0 !== e.options.ticks.max && (i = t.indexOf(n, e.options.ticks.max), e.maxIndex = -1 !== i ? i : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
							},
							buildTicks: function () {
								var e = this,
									t = e.getLabels();
								e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
							},
							getLabelForIndex: function (e, t) {
								var n = this,
									i = n.chart.data,
									o = n.isHorizontal();
								return i.yLabels && !o ? n.getRightValue(i.datasets[t].data[e]) : n.ticks[e - n.minIndex]
							},
							getPixelForValue: function (e, t, n, i) {
								var o, r = this,
									a = Math.max(r.maxIndex + 1 - r.minIndex - (r.options.gridLines.offsetGridLines ? 0 : 1), 1);
								if (void 0 !== e && null !== e && (o = r.isHorizontal() ? e.x : e.y), void 0 !== o || void 0 !== e && isNaN(t)) {
									var s = r.getLabels();
									e = o || e;
									var l = s.indexOf(e);
									t = -1 !== l ? l : t
								}
								if (r.isHorizontal()) {
									var c = r.width / a,
										u = c * (t - r.minIndex);
									return (r.options.gridLines.offsetGridLines && i || r.maxIndex === r.minIndex && i) && (u += c / 2), r.left + Math.round(u)
								}
								var d = r.height / a,
									h = d * (t - r.minIndex);
								return r.options.gridLines.offsetGridLines && i && (h += d / 2), r.top + Math.round(h)
							},
							getPixelForTick: function (e, t) {
								return this.getPixelForValue(this.ticks[e], e + this.minIndex, null, t)
							},
							getValueForPixel: function (e) {
								var t = this,
									n = Math.max(t.ticks.length - (t.options.gridLines.offsetGridLines ? 0 : 1), 1),
									i = t.isHorizontal(),
									o = (i ? t.width : t.height) / n;
								return e -= i ? t.left : t.top, t.options.gridLines.offsetGridLines && (e -= o / 2), e <= 0 ? 0 : Math.round(e / o)
							},
							getBasePixel: function () {
								return this.bottom
							}
						});
					e.scaleService.registerScaleType("category", i, n)
				}
			}, {}],
			45: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers,
						n = {
							position: "left",
							ticks: {
								callback: e.Ticks.formatters.linear
							}
						},
						i = e.LinearScaleBase.extend({
							determineDataLimits: function () {
								function e(e) {
									return a ? e.xAxisID === n.id : e.yAxisID === n.id
								}
								var n = this,
									i = n.options,
									o = n.chart,
									r = o.data.datasets,
									a = n.isHorizontal();
								n.min = null, n.max = null;
								var s = i.stacked;
								if (void 0 === s && t.each(r, function (t, n) {
										if (!s) {
											var i = o.getDatasetMeta(n);
											o.isDatasetVisible(n) && e(i) && void 0 !== i.stack && (s = !0)
										}
									}), i.stacked || s) {
									var l = {};
									t.each(r, function (r, a) {
										var s = o.getDatasetMeta(a),
											c = [s.type, void 0 === i.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
										void 0 === l[c] && (l[c] = {
											positiveValues: [],
											negativeValues: []
										});
										var u = l[c].positiveValues,
											d = l[c].negativeValues;
										o.isDatasetVisible(a) && e(s) && t.each(r.data, function (e, t) {
											var o = +n.getRightValue(e);
											isNaN(o) || s.data[t].hidden || (u[t] = u[t] || 0, d[t] = d[t] || 0, i.relativePoints ? u[t] = 100 : o < 0 ? d[t] += o : u[t] += o)
										})
									}), t.each(l, function (e) {
										var i = e.positiveValues.concat(e.negativeValues),
											o = t.min(i),
											r = t.max(i);
										n.min = null === n.min ? o : Math.min(n.min, o), n.max = null === n.max ? r : Math.max(n.max, r)
									})
								} else t.each(r, function (i, r) {
									var a = o.getDatasetMeta(r);
									o.isDatasetVisible(r) && e(a) && t.each(i.data, function (e, t) {
										var i = +n.getRightValue(e);
										isNaN(i) || a.data[t].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i))
									})
								});
								n.min = isFinite(n.min) ? n.min : 0, n.max = isFinite(n.max) ? n.max : 1, this.handleTickRangeOptions()
							},
							getTickLimit: function () {
								var n, i = this,
									o = i.options.ticks;
								if (i.isHorizontal()) n = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(i.width / 50));
								else {
									var r = t.getValueOrDefault(o.fontSize, e.defaults.global.defaultFontSize);
									n = Math.min(o.maxTicksLimit ? o.maxTicksLimit : 11, Math.ceil(i.height / (2 * r)))
								}
								return n
							},
							handleDirectionalChanges: function () {
								this.isHorizontal() || this.ticks.reverse()
							},
							getLabelForIndex: function (e, t) {
								return +this.getRightValue(this.chart.data.datasets[t].data[e])
							},
							getPixelForValue: function (e) {
								var t, n = this,
									i = n.start,
									o = +n.getRightValue(e),
									r = n.end - i;
								return n.isHorizontal() ? (t = n.left + n.width / r * (o - i), Math.round(t)) : (t = n.bottom - n.height / r * (o - i), Math.round(t))
							},
							getValueForPixel: function (e) {
								var t = this,
									n = t.isHorizontal(),
									i = n ? t.width : t.height,
									o = (n ? e - t.left : t.bottom - e) / i;
								return t.start + (t.end - t.start) * o
							},
							getPixelForTick: function (e) {
								return this.getPixelForValue(this.ticksAsNumbers[e])
							}
						});
					e.scaleService.registerScaleType("linear", i, n)
				}
			}, {}],
			46: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers,
						n = t.noop;
					e.LinearScaleBase = e.Scale.extend({
						handleTickRangeOptions: function () {
							var e = this,
								n = e.options.ticks;
							if (n.beginAtZero) {
								var i = t.sign(e.min),
									o = t.sign(e.max);
								i < 0 && o < 0 ? e.max = 0 : i > 0 && o > 0 && (e.min = 0)
							}
							void 0 !== n.min ? e.min = n.min : void 0 !== n.suggestedMin && (null === e.min ? e.min = n.suggestedMin : e.min = Math.min(e.min, n.suggestedMin)), void 0 !== n.max ? e.max = n.max : void 0 !== n.suggestedMax && (null === e.max ? e.max = n.suggestedMax : e.max = Math.max(e.max, n.suggestedMax)), e.min === e.max && (e.max++, n.beginAtZero || e.min--)
						},
						getTickLimit: n,
						handleDirectionalChanges: n,
						buildTicks: function () {
							var n = this,
								i = n.options.ticks,
								o = n.getTickLimit(),
								r = {
									maxTicks: o = Math.max(2, o),
									min: i.min,
									max: i.max,
									stepSize: t.getValueOrDefault(i.fixedStepSize, i.stepSize)
								},
								a = n.ticks = e.Ticks.generators.linear(r, n);
							n.handleDirectionalChanges(), n.max = t.max(a), n.min = t.min(a), i.reverse ? (a.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
						},
						convertTicksToLabels: function () {
							var t = this;
							t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
						}
					})
				}
			}, {}],
			47: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					var t = e.helpers,
						n = {
							position: "left",
							ticks: {
								callback: e.Ticks.formatters.logarithmic
							}
						},
						i = e.Scale.extend({
							determineDataLimits: function () {
								function e(e) {
									return l ? e.xAxisID === n.id : e.yAxisID === n.id
								}
								var n = this,
									i = n.options,
									o = i.ticks,
									r = n.chart,
									a = r.data.datasets,
									s = t.getValueOrDefault,
									l = n.isHorizontal();
								n.min = null, n.max = null, n.minNotZero = null;
								var c = i.stacked;
								if (void 0 === c && t.each(a, function (t, n) {
										if (!c) {
											var i = r.getDatasetMeta(n);
											r.isDatasetVisible(n) && e(i) && void 0 !== i.stack && (c = !0)
										}
									}), i.stacked || c) {
									var u = {};
									t.each(a, function (o, a) {
										var s = r.getDatasetMeta(a),
											l = [s.type, void 0 === i.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
										r.isDatasetVisible(a) && e(s) && (void 0 === u[l] && (u[l] = []), t.each(o.data, function (e, t) {
											var o = u[l],
												r = +n.getRightValue(e);
											isNaN(r) || s.data[t].hidden || (o[t] = o[t] || 0, i.relativePoints ? o[t] = 100 : o[t] += r)
										}))
									}), t.each(u, function (e) {
										var i = t.min(e),
											o = t.max(e);
										n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? o : Math.max(n.max, o)
									})
								} else t.each(a, function (i, o) {
									var a = r.getDatasetMeta(o);
									r.isDatasetVisible(o) && e(a) && t.each(i.data, function (e, t) {
										var i = +n.getRightValue(e);
										isNaN(i) || a.data[t].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i), 0 !== i && (null === n.minNotZero || i < n.minNotZero) && (n.minNotZero = i))
									})
								});
								n.min = s(o.min, n.min), n.max = s(o.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(t.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(t.log10(n.max)) + 1)) : (n.min = 1, n.max = 10))
							},
							buildTicks: function () {
								var n = this,
									i = n.options.ticks,
									o = {
										min: i.min,
										max: i.max
									},
									r = n.ticks = e.Ticks.generators.logarithmic(o, n);
								n.isHorizontal() || r.reverse(), n.max = t.max(r), n.min = t.min(r), i.reverse ? (r.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
							},
							convertTicksToLabels: function () {
								this.tickValues = this.ticks.slice(), e.Scale.prototype.convertTicksToLabels.call(this)
							},
							getLabelForIndex: function (e, t) {
								return +this.getRightValue(this.chart.data.datasets[t].data[e])
							},
							getPixelForTick: function (e) {
								return this.getPixelForValue(this.tickValues[e])
							},
							getPixelForValue: function (e) {
								var n, i, o, r = this,
									a = r.start,
									s = +r.getRightValue(e),
									l = r.options.ticks;
								return r.isHorizontal() ? (o = t.log10(r.end) - t.log10(a), 0 === s ? i = r.left : (n = r.width, i = r.left + n / o * (t.log10(s) - t.log10(a)))) : (n = r.height, 0 !== a || l.reverse ? 0 === r.end && l.reverse ? (o = t.log10(r.start) - t.log10(r.minNotZero), i = s === r.end ? r.top : s === r.minNotZero ? r.top + .02 * n : r.top + .02 * n + .98 * n / o * (t.log10(s) - t.log10(r.minNotZero))) : 0 === s ? i = l.reverse ? r.top : r.bottom : (o = t.log10(r.end) - t.log10(a), n = r.height, i = r.bottom - n / o * (t.log10(s) - t.log10(a))) : (o = t.log10(r.end) - t.log10(r.minNotZero), i = s === a ? r.bottom : s === r.minNotZero ? r.bottom - .02 * n : r.bottom - .02 * n - .98 * n / o * (t.log10(s) - t.log10(r.minNotZero)))), i
							},
							getValueForPixel: function (e) {
								var n, i, o = this,
									r = t.log10(o.end) - t.log10(o.start);
								return o.isHorizontal() ? (i = o.width, n = o.start * Math.pow(10, (e - o.left) * r / i)) : (i = o.height, n = Math.pow(10, (o.bottom - e) * r / i) / o.start), n
							}
						});
					e.scaleService.registerScaleType("logarithmic", i, n)
				}
			}, {}],
			48: [function (e, t, n) {
				"use strict";
				t.exports = function (e) {
					function t(e) {
						var t = e.options;
						return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
					}

					function n(e) {
						var t = e.options.pointLabels,
							n = f.getValueOrDefault(t.fontSize, p.defaultFontSize),
							i = f.getValueOrDefault(t.fontStyle, p.defaultFontStyle),
							o = f.getValueOrDefault(t.fontFamily, p.defaultFontFamily);
						return {
							size: n,
							style: i,
							family: o,
							font: f.fontString(n, i, o)
						}
					}

					function i(e, t, n) {
						return f.isArray(n) ? {
							w: f.longestText(e, e.font, n),
							h: n.length * t + 1.5 * (n.length - 1) * t
						} : {
							w: e.measureText(n).width,
							h: t
						}
					}

					function o(e, t, n, i, o) {
						return e === i || e === o ? {
							start: t - n / 2,
							end: t + n / 2
						} : e < i || e > o ? {
							start: t - n - 5,
							end: t
						} : {
							start: t,
							end: t + n + 5
						}
					}

					function r(e) {
						var r, a, s, l = n(e),
							c = Math.min(e.height / 2, e.width / 2),
							u = {
								r: e.width,
								l: 0,
								t: e.height,
								b: 0
							},
							d = {};
						e.ctx.font = l.font, e._pointLabelSizes = [];
						var h = t(e);
						for (r = 0; r < h; r++) {
							s = e.getPointPosition(r, c), a = i(e.ctx, l.size, e.pointLabels[r] || ""), e._pointLabelSizes[r] = a;
							var p = e.getIndexAngle(r),
								m = f.toDegrees(p) % 360,
								g = o(m, s.x, a.w, 0, 180),
								v = o(m, s.y, a.h, 90, 270);
							g.start < u.l && (u.l = g.start, d.l = p), g.end > u.r && (u.r = g.end, d.r = p), v.start < u.t && (u.t = v.start, d.t = p), v.end > u.b && (u.b = v.end, d.b = p)
						}
						e.setReductions(c, u, d)
					}

					function a(e) {
						var t = Math.min(e.height / 2, e.width / 2);
						e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0)
					}

					function s(e) {
						return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
					}

					function l(e, t, n, i) {
						if (f.isArray(t))
							for (var o = n.y, r = 1.5 * i, a = 0; a < t.length; ++a) e.fillText(t[a], n.x, o), o += r;
						else e.fillText(t, n.x, n.y)
					}

					function c(e, t, n) {
						90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
					}

					function u(e) {
						var i = e.ctx,
							o = f.getValueOrDefault,
							r = e.options,
							a = r.angleLines,
							u = r.pointLabels;
						i.lineWidth = a.lineWidth, i.strokeStyle = a.color;
						var d = e.getDistanceFromCenterForValue(r.reverse ? e.min : e.max),
							h = n(e);
						i.textBaseline = "top";
						for (var m = t(e) - 1; m >= 0; m--) {
							if (a.display) {
								var g = e.getPointPosition(m, d);
								i.beginPath(), i.moveTo(e.xCenter, e.yCenter), i.lineTo(g.x, g.y), i.stroke(), i.closePath()
							}
							if (u.display) {
								var v = e.getPointPosition(m, d + 5),
									y = o(u.fontColor, p.defaultFontColor);
								i.font = h.font, i.fillStyle = y;
								var b = e.getIndexAngle(m),
									x = f.toDegrees(b);
								i.textAlign = s(x), c(x, e._pointLabelSizes[m], v), l(i, e.pointLabels[m] || "", v, h.size)
							}
						}
					}

					function d(e, n, i, o) {
						var r = e.ctx;
						if (r.strokeStyle = f.getValueAtIndexOrDefault(n.color, o - 1), r.lineWidth = f.getValueAtIndexOrDefault(n.lineWidth, o - 1), e.options.gridLines.circular) r.beginPath(), r.arc(e.xCenter, e.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke();
						else {
							var a = t(e);
							if (0 === a) return;
							r.beginPath();
							var s = e.getPointPosition(0, i);
							r.moveTo(s.x, s.y);
							for (var l = 1; l < a; l++) s = e.getPointPosition(l, i), r.lineTo(s.x, s.y);
							r.closePath(), r.stroke()
						}
					}

					function h(e) {
						return f.isNumber(e) ? e : 0
					}
					var f = e.helpers,
						p = e.defaults.global,
						m = {
							display: !0,
							animate: !0,
							position: "chartArea",
							angleLines: {
								display: !0,
								color: "rgba(0, 0, 0, 0.1)",
								lineWidth: 1
							},
							gridLines: {
								circular: !1
							},
							ticks: {
								showLabelBackdrop: !0,
								backdropColor: "rgba(255,255,255,0.75)",
								backdropPaddingY: 2,
								backdropPaddingX: 2,
								callback: e.Ticks.formatters.linear
							},
							pointLabels: {
								display: !0,
								fontSize: 10,
								callback: function (e) {
									return e
								}
							}
						},
						g = e.LinearScaleBase.extend({
							setDimensions: function () {
								var e = this,
									t = e.options,
									n = t.ticks;
								e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
								var i = f.min([e.height, e.width]),
									o = f.getValueOrDefault(n.fontSize, p.defaultFontSize);
								e.drawingArea = t.display ? i / 2 - (o / 2 + n.backdropPaddingY) : i / 2
							},
							determineDataLimits: function () {
								var e = this,
									t = e.chart,
									n = Number.POSITIVE_INFINITY,
									i = Number.NEGATIVE_INFINITY;
								f.each(t.data.datasets, function (o, r) {
									if (t.isDatasetVisible(r)) {
										var a = t.getDatasetMeta(r);
										f.each(o.data, function (t, o) {
											var r = +e.getRightValue(t);
											isNaN(r) || a.data[o].hidden || (n = Math.min(r, n), i = Math.max(r, i))
										})
									}
								}), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = i === Number.NEGATIVE_INFINITY ? 0 : i, e.handleTickRangeOptions()
							},
							getTickLimit: function () {
								var e = this.options.ticks,
									t = f.getValueOrDefault(e.fontSize, p.defaultFontSize);
								return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)))
							},
							convertTicksToLabels: function () {
								var t = this;
								e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
							},
							getLabelForIndex: function (e, t) {
								return +this.getRightValue(this.chart.data.datasets[t].data[e])
							},
							fit: function () {
								this.options.pointLabels.display ? r(this) : a(this)
							},
							setReductions: function (e, t, n) {
								var i = this,
									o = t.l / Math.sin(n.l),
									r = Math.max(t.r - i.width, 0) / Math.sin(n.r),
									a = -t.t / Math.cos(n.t),
									s = -Math.max(t.b - i.height, 0) / Math.cos(n.b);
								o = h(o), r = h(r), a = h(a), s = h(s), i.drawingArea = Math.min(Math.round(e - (o + r) / 2), Math.round(e - (a + s) / 2)), i.setCenterPoint(o, r, a, s)
							},
							setCenterPoint: function (e, t, n, i) {
								var o = this,
									r = o.width - t - o.drawingArea,
									a = e + o.drawingArea,
									s = n + o.drawingArea,
									l = o.height - i - o.drawingArea;
								o.xCenter = Math.round((a + r) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
							},
							getIndexAngle: function (e) {
								return e * (2 * Math.PI / t(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
							},
							getDistanceFromCenterForValue: function (e) {
								var t = this;
								if (null === e) return 0;
								var n = t.drawingArea / (t.max - t.min);
								return t.options.reverse ? (t.max - e) * n : (e - t.min) * n
							},
							getPointPosition: function (e, t) {
								var n = this,
									i = n.getIndexAngle(e) - Math.PI / 2;
								return {
									x: Math.round(Math.cos(i) * t) + n.xCenter,
									y: Math.round(Math.sin(i) * t) + n.yCenter
								}
							},
							getPointPositionForValue: function (e, t) {
								return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
							},
							getBasePosition: function () {
								var e = this,
									t = e.min,
									n = e.max;
								return e.getPointPositionForValue(0, e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0)
							},
							draw: function () {
								var e = this,
									t = e.options,
									n = t.gridLines,
									i = t.ticks,
									o = f.getValueOrDefault;
								if (t.display) {
									var r = e.ctx,
										a = o(i.fontSize, p.defaultFontSize),
										s = o(i.fontStyle, p.defaultFontStyle),
										l = o(i.fontFamily, p.defaultFontFamily),
										c = f.fontString(a, s, l);
									f.each(e.ticks, function (s, l) {
										if (l > 0 || t.reverse) {
											var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[l]),
												h = e.yCenter - u;
											if (n.display && 0 !== l && d(e, n, u, l), i.display) {
												var f = o(i.fontColor, p.defaultFontColor);
												if (r.font = c, i.showLabelBackdrop) {
													var m = r.measureText(s).width;
													r.fillStyle = i.backdropColor, r.fillRect(e.xCenter - m / 2 - i.backdropPaddingX, h - a / 2 - i.backdropPaddingY, m + 2 * i.backdropPaddingX, a + 2 * i.backdropPaddingY)
												}
												r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = f, r.fillText(s, e.xCenter, h)
											}
										}
									}), (t.angleLines.display || t.pointLabels.display) && u(e)
								}
							}
						});
					e.scaleService.registerScaleType("radialLinear", g, m)
				}
			}, {}],
			49: [function (e, t, n) {
				"use strict";
				var i = e(1);
				i = "function" == typeof i ? i : window.moment, t.exports = function (e) {
					function t(e, t) {
						var n = e.options.time;
						if ("string" == typeof n.parser) return i(t, n.parser);
						if ("function" == typeof n.parser) return n.parser(t);
						if ("function" == typeof t.getMonth || "number" == typeof t) return i(t);
						if (t.isValid && t.isValid()) return t;
						var o = n.format;
						return "string" != typeof o && o.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser."), o(t)) : i(t, o)
					}

					function n(e, t, n, i) {
						for (var o, r = Object.keys(s), a = r.length, l = r.indexOf(e); l < a; l++) {
							o = r[l];
							var c = s[o],
								u = c.steps && c.steps[c.steps.length - 1] || c.maxStep;
							if (void 0 === u || Math.ceil((n - t) / (u * c.size)) <= i) break
						}
						return o
					}

					function o(e, t, n, i) {
						var o = s[n],
							r = o.size,
							a = Math.ceil((t - e) / r),
							l = 1,
							c = t - e;
						if (o.steps)
							for (var u = o.steps.length, d = 0; d < u && a > i; d++) l = o.steps[d], a = Math.ceil(c / (r * l));
						else
							for (; a > i && i > 0;) ++l, a = Math.ceil(c / (r * l));
						return l
					}

					function r(e, t, n) {
						var o = [];
						if (e.maxTicks) {
							var r = e.stepSize;
							o.push(void 0 !== e.min ? e.min : n.min);
							for (var a = i(n.min); a.add(r, e.unit).valueOf() < n.max;) o.push(a.valueOf());
							var s = e.max || n.max;
							o[o.length - 1] !== s && o.push(s)
						}
						return o
					}
					var a = e.helpers,
						s = {
							millisecond: {
								size: 1,
								steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
							},
							second: {
								size: 1e3,
								steps: [1, 2, 5, 10, 30]
							},
							minute: {
								size: 6e4,
								steps: [1, 2, 5, 10, 30]
							},
							hour: {
								size: 36e5,
								steps: [1, 2, 3, 6, 12]
							},
							day: {
								size: 864e5,
								steps: [1, 2, 5]
							},
							week: {
								size: 6048e5,
								maxStep: 4
							},
							month: {
								size: 2628e6,
								maxStep: 3
							},
							quarter: {
								size: 7884e6,
								maxStep: 4
							},
							year: {
								size: 3154e7,
								maxStep: !1
							}
						},
						l = {
							position: "bottom",
							time: {
								parser: !1,
								format: !1,
								unit: !1,
								round: !1,
								displayFormat: !1,
								isoWeekday: !1,
								minUnit: "millisecond",
								displayFormats: {
									millisecond: "h:mm:ss.SSS a",
									second: "h:mm:ss a",
									minute: "h:mm:ss a",
									hour: "MMM D, hA",
									day: "ll",
									week: "ll",
									month: "MMM YYYY",
									quarter: "[Q]Q - YYYY",
									year: "YYYY"
								}
							},
							ticks: {
								autoSkip: !1
							}
						};
					e.Ticks.generators.time = function (e, t) {
						var n, o, a = e.isoWeekday;
						return "week" === e.unit && !1 !== a ? (n = i(t.min).startOf("isoWeek").isoWeekday(a).valueOf(), o = i(t.max).startOf("isoWeek").isoWeekday(a), t.max - o > 0 && o.add(1, "week"), o = o.valueOf()) : (n = i(t.min).startOf(e.unit).valueOf(), o = i(t.max).startOf(e.unit), t.max - o > 0 && o.add(1, e.unit), o = o.valueOf()), r(e, t, {
							min: n,
							max: o
						})
					};
					var c = e.Scale.extend({
						initialize: function () {
							if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
							e.Scale.prototype.initialize.call(this)
						},
						determineDataLimits: function () {
							var e, n = this,
								i = n.options.time,
								o = Number.MAX_SAFE_INTEGER,
								r = Number.MIN_SAFE_INTEGER,
								s = n.chart.data,
								l = {
									labels: [],
									datasets: []
								};
							a.each(s.labels, function (a, s) {
								var c = t(n, a);
								c.isValid() && (i.round && c.startOf(i.round), e = c.valueOf(), o = Math.min(e, o), r = Math.max(e, r), l.labels[s] = e)
							}), a.each(s.datasets, function (s, c) {
								var u = [];
								"object" == typeof s.data[0] && null !== s.data[0] && n.chart.isDatasetVisible(c) ? a.each(s.data, function (a, s) {
									var l = t(n, n.getRightValue(a));
									l.isValid() && (i.round && l.startOf(i.round), e = l.valueOf(), o = Math.min(e, o), r = Math.max(e, r), u[s] = e)
								}) : u = l.labels.slice(), l.datasets[c] = u
							}), n.dataMin = o, n.dataMax = r, n._parsedData = l
						},
						buildTicks: function () {
							var i, r, s = this,
								l = s.options.time,
								c = s.dataMin,
								u = s.dataMax;
							if (l.min) {
								var d = t(s, l.min);
								l.round && d.round(l.round), i = d.valueOf()
							}
							l.max && (r = t(s, l.max).valueOf());
							var h = s.getLabelCapacity(i || c),
								f = l.unit || n(l.minUnit, i || c, r || u, h);
							s.displayFormat = l.displayFormats[f];
							var p = l.stepSize || o(i || c, r || u, f, h);
							s.ticks = e.Ticks.generators.time({
								maxTicks: h,
								min: i,
								max: r,
								stepSize: p,
								unit: f,
								isoWeekday: l.isoWeekday
							}, {
								min: c,
								max: u
							}), s.max = a.max(s.ticks), s.min = a.min(s.ticks)
						},
						getLabelForIndex: function (e, n) {
							var i = this,
								o = i.chart.data.labels && e < i.chart.data.labels.length ? i.chart.data.labels[e] : "",
								r = i.chart.data.datasets[n].data[e];
							return null !== r && "object" == typeof r && (o = i.getRightValue(r)), i.options.time.tooltipFormat && (o = t(i, o).format(i.options.time.tooltipFormat)), o
						},
						tickFormatFunction: function (e, t, n) {
							var i = e.format(this.displayFormat),
								o = this.options.ticks,
								r = a.getValueOrDefault(o.callback, o.userCallback);
							return r ? r(i, t, n) : i
						},
						convertTicksToLabels: function () {
							var e = this;
							e.ticksAsTimestamps = e.ticks, e.ticks = e.ticks.map(function (e) {
								return i(e)
							}).map(e.tickFormatFunction, e)
						},
						getPixelForOffset: function (e) {
							var t = this,
								n = t.max - t.min,
								i = n ? (e - t.min) / n : 0;
							if (t.isHorizontal()) {
								var o = t.width * i;
								return t.left + Math.round(o)
							}
							var r = t.height * i;
							return t.top + Math.round(r)
						},
						getPixelForValue: function (e, n, i) {
							var o = this,
								r = null;
							if (void 0 !== n && void 0 !== i && (r = o._parsedData.datasets[i][n]), null === r && (e && e.isValid || (e = t(o, o.getRightValue(e))), e && e.isValid && e.isValid() && (r = e.valueOf())), null !== r) return o.getPixelForOffset(r)
						},
						getPixelForTick: function (e) {
							return this.getPixelForOffset(this.ticksAsTimestamps[e])
						},
						getValueForPixel: function (e) {
							var t = this,
								n = t.isHorizontal() ? t.width : t.height,
								o = (e - (t.isHorizontal() ? t.left : t.top)) / n;
							return i(t.min + o * (t.max - t.min))
						},
						getLabelWidth: function (t) {
							var n = this,
								i = n.options.ticks,
								o = n.ctx.measureText(t).width,
								r = Math.cos(a.toRadians(i.maxRotation)),
								s = Math.sin(a.toRadians(i.maxRotation));
							return o * r + a.getValueOrDefault(i.fontSize, e.defaults.global.defaultFontSize) * s
						},
						getLabelCapacity: function (e) {
							var t = this;
							t.displayFormat = t.options.time.displayFormats.millisecond;
							var n = t.tickFormatFunction(i(e), 0, []),
								o = t.getLabelWidth(n);
							return (t.isHorizontal() ? t.width : t.height) / o
						}
					});
					e.scaleService.registerScaleType("time", c, l)
				}
			}, {
				1: 1
			}]
		}, {}, [7])(7)
	});
var WOW = function (e) {
	var t = e || {};
	this._boxClass = t.boxClass || "wow", this._animateClass = t.animateClass || "animated", this._offset = t.offset || 0, this._mobile = void 0 === t.mobile, this._live = void 0 === t.live, this._seoFixEnabled = void 0 === t.seoFixEnabled, this._animationDuration = t.animationDuration || "1s", this._animationDelay = t.animationDelay || "0s", this._initStorageVariables()
};
WOW.prototype._initStorageVariables = function () {
	this._animation = [], this._boxes = [], this._cleanupBoxListener = [], this._cleanupBoxVisibleListener = []
}, WOW.prototype.init = function () {
	!this._mobile && this._isMobile() || (this._eachBoxInit(this._prepareBox.bind(this)), this._startWow())
}, WOW.prototype._isMobile = function () {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}, WOW.prototype._eachBoxInit = function (e) {
	for (var t = document.getElementsByClassName(this._boxClass), n = 0; n < t.length; n++) ! function (n) {
		e(t[n], n)
	}(n)
}, WOW.prototype._prepareBox = function (e) {
	var t = this._boxes.push(e) - 1;
	this._animation[t] = {
		animationName: e.style.animationName || window.getComputedStyle(e, null).animationName
	}, e.style.animationName = "none", e.style.visibility = "hidden"
}, WOW.prototype._startWow = function () {
	this._live && this._checkForChanges(), 0 === window.scrollY && this._seoFixEnabled && this._seoFix(), this._appearInView(), this._scrollHandler()
}, WOW.prototype._seoFix = function () {
	this._showNotInView()
}, WOW.prototype._appear = function (e, t) {
	e.style.animationPlayState || e.style.WebkitAnimationPlayState; - 1 === e.className.indexOf(this._animateClass) && (delete this._boxes[t], this._onStartAnimation(e, t), this._onStopAnimation(e, t), this._animate(e, t, this._getAnimationConfig(e)))
}, WOW.prototype._onStartAnimation = function (e, t) {
	this._cleanupBoxVisibleListener[t] = this._boxVisible.bind(this, e, t), e.addEventListener("animationstart", this._cleanupBoxVisibleListener[t]), e.addEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[t])
}, WOW.prototype._onStopAnimation = function (e, t) {
	this._cleanupBoxListener[t] = this._cleanupBox.bind(this, e, t), e.addEventListener("animationend", this._cleanupBoxListener[t]), e.addEventListener("webkitAnimationEnd", this._cleanupBoxListener[t])
}, WOW.prototype._getAnimationConfig = function (e) {
	return {
		delay: this._getDelay(e),
		duration: this._getDuration(e),
		iterations: this._getIterations(e)
	}
}, WOW.prototype._getDelay = function (e) {
	return e.getAttribute("data-wow-delay") || this._animationDelay
}, WOW.prototype._getDuration = function (e) {
	return e.getAttribute("data-wow-duration") || this._animationDuration
}, WOW.prototype._getIterations = function (e) {
	return e.getAttribute("data-wow-iteration") || e.style.animationIterationCount || window.getComputedStyle(e, null).animationIterationCount || 1
}, WOW.prototype._animate = function (e, t, n) {
	e.style.animationDelay = n.delay, e.style.animationDuration = n.duration, e.style.animationIterationCount = n.iterations, e.style.animationName = this._animation[t].animationName, e.className += " " + this._animateClass
}, WOW.prototype._boxVisible = function (e, t) {
	e.style.visibility = "visible", e.removeEventListener("animationstart", this._cleanupBoxVisibleListener[t]), e.removeEventListener("webkitAnimationStart", this._cleanupBoxVisibleListener[t]), delete this._cleanupBoxVisibleListener[t]
}, WOW.prototype._cleanupBox = function (e, t) {
	e.style.animationDelay = "", e.style.animationDuration = "", e.style.animationIterationCount = "", e.style.animationName = "none", this._cleanupClass(e), e.removeEventListener("animationend", this._cleanupBoxListener[t]), e.removeEventListener("webkitAnimationEnd", this._cleanupBoxListener[t]), delete this._cleanupBoxListener[t]
}, WOW.prototype._cleanupClass = function (e) {
	var t = e.className.split(" "),
		n = t.indexOf(this._animateClass); - 1 !== n && (t.splice(n, 1), e.className = t.join(" "))
}, WOW.prototype._eachBox = function (e) {
	for (var t = 0; t < this._boxes.length; t++) this._boxes[t] && function (t) {
		e(this._boxes[t], t)
	}.bind(this)(t)
}, WOW.prototype._scrollHandler = function () {
	this._hideSeoFixListener = this._hideSeoFix.bind(this), window.addEventListener("scroll", this._hideSeoFixListener), window.addEventListener("scroll", this._appearInView.bind(this)), window.addEventListener("resize", this._appearInView.bind(this))
}, WOW.prototype._hideSeoFix = function () {
	window.removeEventListener("scroll", this._hideSeoFixListener), delete this._hideSeoFixListener, this._eachBox(function (e, t) {
		this._isInView(e) || (e.style.visibility = "hidden")
	}.bind(this))
}, WOW.prototype._appearInView = function () {
	this._eachBox(function (e, t) {
		this._animateBox(e, t)
	}.bind(this))
}, WOW.prototype._animateBox = function (e, t) {
	this._isInView(e) && (delete this._boxes[t], this._appear(e, t))
}, WOW.prototype._showNotInView = function () {
	this._eachBox(function (e, t) {
		this._makeVisible(e, t)
	}.bind(this))
}, WOW.prototype._makeVisible = function (e, t) {
	this._isInView(e) || (this._boxes[t].style.visibility = "visible")
}, WOW.prototype._isInView = function (e) {
	var t = e.getAttribute("data-wow-offset") || this._offset,
		n = this._getElementOffset(e) + ~~t;
	return n <= window.innerHeight + window.scrollY && (0 === n ? 10 : n) >= window.scrollY
}, WOW.prototype._getElementOffset = function (e) {
	var t = e.getBoundingClientRect(),
		n = document.body,
		i = window.pageYOffset || document.documentElement.scrollTop || n.scrollTop,
		o = document.documentElement.clientTop || n.clientTop || 0,
		r = t.top + i - o;
	return Math.round(r)
}, WOW.prototype._checkForChanges = function () {
	var e = {
		childList: !0,
		subtree: !0
	};
	new(window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(this._mutations.bind(this)).observe(document.body, e)
}, WOW.prototype._mutations = function (e) {
	e.forEach(function (e) {
		for (var t = 0; t < e.addedNodes.length; t++) this.doSync(e.addedNodes[t])
	}.bind(this))
}, WOW.prototype.doSync = function (e) {
	e.className && -1 !== e.className.split(" ").indexOf(this._boxClass) && this._prepareBox(e)
};
var OFFSET_TOP = 50,
	TRANSITION_DURATION = 1500;
$(window).scroll(function () {
		$(".navbar").length && ($(".navbar").offset().top > OFFSET_TOP ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
	}),
	function (e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define([], function () {
			return t.apply(e)
		}) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
	}("object" == typeof global ? global : this, function () {
		"use strict";

		function e(e) {
			return null !== e && e === e.window
		}

		function t(t) {
			return e(t) ? t : 9 === t.nodeType && t.defaultView
		}

		function n(e) {
			var t = typeof e;
			return "function" === t || "object" === t && !!e
		}

		function i(e) {
			return n(e) && e.nodeType > 0
		}

		function o(e) {
			var t = h.call(e);
			return "[object String]" === t ? d(e) : n(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t) && e.hasOwnProperty("length") ? e : i(e) ? [e] : []
		}

		function r(e) {
			var n, i, o = {
					top: 0,
					left: 0
				},
				r = e && e.ownerDocument;
			return n = r.documentElement, void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()), i = t(r), {
				top: o.top + i.pageYOffset - n.clientTop,
				left: o.left + i.pageXOffset - n.clientLeft
			}
		}

		function a(e) {
			var t = "";
			for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
			return t
		}

		function s(e, t, n) {
			if (n) {
				n.classList.remove("waves-rippling");
				var i = n.getAttribute("data-x"),
					o = n.getAttribute("data-y"),
					r = n.getAttribute("data-scale"),
					s = n.getAttribute("data-translate"),
					l = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
				l < 0 && (l = 0), "mousemove" === e.type && (l = 150);
				var c = "mousemove" === e.type ? 2500 : p.duration;
				setTimeout(function () {
					var e = {
						top: o + "px",
						left: i + "px",
						opacity: "0",
						"-webkit-transition-duration": c + "ms",
						"-moz-transition-duration": c + "ms",
						"-o-transition-duration": c + "ms",
						"transition-duration": c + "ms",
						"-webkit-transform": r + " " + s,
						"-moz-transform": r + " " + s,
						"-ms-transform": r + " " + s,
						"-o-transform": r + " " + s,
						transform: r + " " + s
					};
					n.setAttribute("style", a(e)), setTimeout(function () {
						try {
							t.removeChild(n)
						} catch (e) {
							return !1
						}
					}, c)
				}, l)
			}
		}

		function l(e) {
			if (!1 === g.allowEvent(e)) return null;
			for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
				if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
					t = n;
					break
				}
				n = n.parentElement
			}
			return t
		}

		function c(e) {
			var t = l(e);
			if (null !== t) {
				if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
				if (g.registerEvent(e), "touchstart" === e.type && p.delay) {
					var n = !1,
						i = setTimeout(function () {
							i = null, p.show(e, t)
						}, p.delay),
						o = function (o) {
							i && (clearTimeout(i), i = null, p.show(e, t)), n || (n = !0, p.hide(o, t))
						};
					t.addEventListener("touchmove", function (e) {
						i && (clearTimeout(i), i = null), o(e)
					}, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", o, !1)
				} else p.show(e, t), f && (t.addEventListener("touchend", p.hide, !1), t.addEventListener("touchcancel", p.hide, !1)), t.addEventListener("mouseup", p.hide, !1), t.addEventListener("mouseleave", p.hide, !1)
			}
		}
		var u = u || {},
			d = document.querySelectorAll.bind(document),
			h = Object.prototype.toString,
			f = "ontouchstart" in window,
			p = {
				duration: 750,
				delay: 200,
				show: function (e, t, n) {
					if (2 === e.button) return !1;
					t = t || this;
					var i = document.createElement("div");
					i.className = "waves-ripple waves-rippling", t.appendChild(i);
					var o = r(t),
						s = 0,
						l = 0;
					"touches" in e && e.touches.length ? (s = e.touches[0].pageY - o.top, l = e.touches[0].pageX - o.left) : (s = e.pageY - o.top, l = e.pageX - o.left), l = l >= 0 ? l : 0, s = s >= 0 ? s : 0;
					var c = "scale(" + t.clientWidth / 100 * 3 + ")",
						u = "translate(0,0)";
					n && (u = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", l), i.setAttribute("data-y", s), i.setAttribute("data-scale", c), i.setAttribute("data-translate", u);
					var d = {
						top: s + "px",
						left: l + "px"
					};
					i.classList.add("waves-notransition"), i.setAttribute("style", a(d)), i.classList.remove("waves-notransition"), d["-webkit-transform"] = c + " " + u, d["-moz-transform"] = c + " " + u, d["-ms-transform"] = c + " " + u, d["-o-transform"] = c + " " + u, d.transform = c + " " + u, d.opacity = "1";
					var h = "mousemove" === e.type ? 2500 : p.duration;
					d["-webkit-transition-duration"] = h + "ms", d["-moz-transition-duration"] = h + "ms", d["-o-transition-duration"] = h + "ms", d["transition-duration"] = h + "ms", i.setAttribute("style", a(d))
				},
				hide: function (e, t) {
					for (var n = (t = t || this).getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++) s(e, t, n[i])
				}
			},
			m = {
				input: function (e) {
					var t = e.parentNode,
						n = document.createElement("div");
					n.className = "waves-input-wrapper", t.replaceChild(n, e), n.appendChild(e)
				},
				img: function (e) {
					var t = e.parentNode;
					if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
						var n = document.createElement("i");
						t.replaceChild(n, e), n.appendChild(e)
					}
				}
			},
			g = {
				touches: 0,
				allowEvent: function (e) {
					var t = !0;
					return /^(mousedown|mousemove)$/.test(e.type) && g.touches && (t = !1), t
				},
				registerEvent: function (e) {
					var t = e.type;
					"touchstart" === t ? g.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function () {
						g.touches && (g.touches -= 1)
					}, 500)
				}
			};
		return u.init = function (e) {
			var t = document.body;
			"duration" in (e = e || {}) && (p.duration = e.duration), "delay" in e && (p.delay = e.delay), f && (t.addEventListener("touchstart", c, !1), t.addEventListener("touchcancel", g.registerEvent, !1), t.addEventListener("touchend", g.registerEvent, !1)), t.addEventListener("mousedown", c, !1)
		}, u.attach = function (e, t) {
			e = o(e), "[object Array]" === h.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
			for (var n, i, r = 0, a = e.length; r < a; r++) i = (n = e[r]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(i) && (m[i](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
		}, u.ripple = function (e, t) {
			var n = (e = o(e)).length;
			if (t = t || {}, t.wait = t.wait || 0, t.position = t.position || null, n)
				for (var i, a, s, l = {}, c = 0, u = {
						type: "mousedown",
						button: 1
					}; c < n; c++)
					if (i = e[c], a = t.position || {
							x: i.clientWidth / 2,
							y: i.clientHeight / 2
						}, s = r(i), l.x = s.left + a.x, l.y = s.top + a.y, u.pageX = l.x, u.pageY = l.y, p.show(u, i), t.wait >= 0 && null !== t.wait) {
						var d = {
							type: "mouseup",
							button: 1
						};
						setTimeout(function (e, t) {
							return function () {
								p.hide(e, t)
							}
						}(d, i), t.wait)
					}
		}, u.calm = function (e) {
			for (var t = {
					type: "mouseup",
					button: 1
				}, n = 0, i = (e = o(e)).length; n < i; n++) p.hide(t, e[n])
		}, u.displayEffect = function (e) {
			console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(e)
		}, u
	}), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".view .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".waves-effect", ["waves-effect"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(),
	function (e) {
		e(document).ready(function () {
			var t = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (e) {
					return "input[type=" + e + "]"
				}).join(", ") + ", textarea",
				n = function (e) {
					var t = e.siblings("label, i"),
						n = e.val().length,
						i = e.attr("placeholder");
					t[(n || i ? "add" : "remove") + "Class"]("active")
				},
				i = function (e) {
					if (e.hasClass("validate")) {
						var t = e.val(),
							n = !t.length,
							i = !e[0].validity.badInput;
						if (n && i) e.removeClass("valid").removeClass("invalid");
						else {
							var o = e.is(":valid"),
								r = +e.attr("length") || 0;
							o && (!r || r > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
						}
					}
				},
				o = function () {
					var t = e(void 0);
					if (t.val().length) {
						var n = e(".hiddendiv"),
							i = t.css("font-family"),
							o = t.css("font-size");
						o && hiddenDiv.css("font-size", o), i && hiddenDiv.css("font-family", i), "off" === t.attr("wrap") && hiddenDiv.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(t.val() + "\n");
						var r = hiddenDiv.html().replace(/\n/g, "<br>");
						n.html(r), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
					}
				};
			e(t).each(function (t, i) {
				var o = e(i),
					r = o.siblings("label, i");
				n(o), i.validity.badInput && r.addClass("active")
			}), e(document).on("focus", t, function (t) {
				e(t.target).siblings("label, i").addClass("active")
			}), e(document).on("blur", t, function (t) {
				var n = e(t.target),
					o = !n.val(),
					r = !t.target.validity.badInput,
					a = void 0 === n.attr("placeholder");
				o && r && a && n.siblings("label, i").removeClass("active"), i(n)
			}), e(document).on("change", t, function (t) {
				var o = e(t.target);
				n(o), i(o)
			}), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function (n) {
				var i = e(n.target);
				i.is("form") && (i.find(t).removeClass("valid").removeClass("invalid").each(function (t, n) {
					var i = e(n),
						o = !i.val(),
						r = !i.attr("placeholder");
					o && r && i.siblings("label, i").removeClass("active")
				}), i.find("select.initialized").each(function (t, n) {
					var i = e(n),
						o = i.siblings("input.select-dropdown"),
						r = i.children("[selected]").val();
					i.val(r), o.val(r)
				}))
			}), e(".hiddendiv").first().length || ($hiddenDiv = e('<div class="hiddendiv common"></div>'), e("body").append($hiddenDiv)), e(".materialize-textarea").each(o), e("body").on("keyup keydown", ".materialize-textarea", o)
		})
	}(), $(document).ready(function () {
		$("#preloader-markup").load("mdb-addons/preloader.html", function () {
			$("#mdb-preloader").fadeOut("slow")
		})
	}),
	function (e) {
		e(document).ready(function () {
			e(document).on("click.card", ".card", function (t) {
				var n = e(this);
				if (n.find(".card-reveal").length) {
					var i = e(t.target),
						o = i.is(".card-reveal .card-title"),
						r = i.is(".card-reveal .card-title i"),
						a = i.is(".card .activator"),
						s = i.is(".card .activator i");
					o || r ? n.find(".card-reveal").velocity({
						translateY: 0
					}, {
						duration: 225,
						queue: !1,
						easing: "easeInOutQuad",
						complete: function () {
							e(this).css({
								display: "none"
							})
						}
					}) : (a || s) && n.find(".card-reveal").css({
						display: "block"
					}).velocity("stop", !1).velocity({
						translateY: "-100%"
					}, {
						duration: 300,
						queue: !1,
						easing: "easeInOutQuad"
					})
				}
			}), e(".rotate-btn").on("click", function () {
				var t = e(this).attr("data-card");
				e("#" + t).toggleClass("flipped")
			})
		})
	}(), $(document).ready(function (e) {
		e(".card-share > a").on("click", function (t) {
			t.preventDefault(), e(this).parent().find("div").toggleClass("social-reveal-active"), e(this).toggleClass("share-expanded")
		})
	}),
	function (e) {
		function t() {
			var t = +e(this).attr("length"),
				n = +e(this).val().length,
				i = n <= t;
			e(this).parent().find('span[class="character-counter"]').html(n + "/" + t), o(i, e(this))
		}

		function n(t) {
			var n = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
			t.parent().append(n)
		}

		function i() {
			e(this).parent().find('span[class="character-counter"]').html("")
		}

		function o(e, t) {
			var n = t.hasClass("invalid");
			e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
		}
		e.fn.characterCounter = function () {
			return this.each(function () {
				void 0 !== e(this).attr("length") && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", i), n(e(this)))
			})
		}, e(document).ready(function () {
			e("input, textarea").characterCounter()
		})
	}(),
	function (e) {
		e(["jquery"], function (e) {
			return function () {
				function t(t, n) {
					return t || (t = l()), (u = e("#" + t.containerId)).length ? u : (n && (u = o(t)), u)
				}

				function n(t) {
					for (var n = u.children(), o = n.length - 1; o >= 0; o--) i(e(n[o]), t)
				}

				function i(t, n, i) {
					var o = !(!i || !i.force) && i.force;
					return !(!t || !o && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
						duration: n.hideDuration,
						easing: n.hideEasing,
						complete: function () {
							c(t)
						}
					}), !0)
				}

				function o(t) {
					return (u = e("<div/>").attr("id", t.containerId).addClass(t.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(t.target)), u
				}

				function r() {
					return {
						tapToDismiss: !0,
						toastClass: "toast",
						containerId: "toast-container",
						debug: !1,
						showMethod: "fadeIn",
						showDuration: 300,
						showEasing: "swing",
						onShown: void 0,
						hideMethod: "fadeOut",
						hideDuration: 1e3,
						hideEasing: "swing",
						onHidden: void 0,
						extendedTimeOut: 1e3,
						iconClasses: {
							error: "toast-error",
							info: "toast-info",
							success: "toast-success",
							warning: "toast-warning"
						},
						iconClass: "toast-info",
						positionClass: "toast-top-right",
						timeOut: 5e3,
						titleClass: "toast-title",
						messageClass: "toast-message",
						target: "body",
						closeHtml: '<button type="button">&times;</button>',
						newestOnTop: !0,
						preventDuplicates: !1,
						progressBar: !1
					}
				}

				function a(e) {
					d && d(e)
				}

				function s(n) {
					function i() {
						n.iconClass && C.addClass(b.toastClass).addClass(x)
					}

					function o() {
						b.newestOnTop ? u.prepend(C) : u.append(C)
					}

					function r() {
						n.title && (k.append(n.title).addClass(b.titleClass), C.append(k))
					}

					function s() {
						n.message && (T.append(n.message).addClass(b.messageClass), C.append(T))
					}

					function d() {
						b.closeButton && (S.addClass("toast-close-button").attr("role", "button"), C.prepend(S))
					}

					function p() {
						b.progressBar && (_.addClass("toast-progress"), C.prepend(_))
					}

					function m(t) {
						if (!e(":focus", C).length || t) return clearTimeout(E.intervalId), C[b.hideMethod]({
							duration: b.hideDuration,
							easing: b.hideEasing,
							complete: function () {
								c(C), b.onHidden && "hidden" !== A.state && b.onHidden(), A.state = "hidden", A.endTime = new Date, a(A)
							}
						})
					}

					function g() {
						(b.timeOut > 0 || b.extendedTimeOut > 0) && (w = setTimeout(m, b.extendedTimeOut), E.maxHideTime = parseFloat(b.extendedTimeOut), E.hideEta = (new Date).getTime() + E.maxHideTime)
					}

					function v() {
						clearTimeout(w), E.hideEta = 0, C.stop(!0, !0)[b.showMethod]({
							duration: b.showDuration,
							easing: b.showEasing
						})
					}

					function y() {
						var e = (E.hideEta - (new Date).getTime()) / E.maxHideTime * 100;
						_.width(e + "%")
					}
					var b = l(),
						x = n.iconClass || b.iconClass;
					if (void 0 !== n.optionsOverride && (b = e.extend(b, n.optionsOverride), x = n.optionsOverride.iconClass || x), ! function (e, t) {
							if (e.preventDuplicates) {
								if (t.message === h) return !0;
								h = t.message
							}
							return !1
						}(b, n)) {
						f++, u = t(b, !0);
						var w = null,
							C = e("<div/>"),
							k = e("<div/>"),
							T = e("<div/>"),
							_ = e("<div/>"),
							S = e(b.closeHtml),
							E = {
								intervalId: null,
								hideEta: null,
								maxHideTime: null
							},
							A = {
								toastId: f,
								state: "visible",
								startTime: new Date,
								options: b,
								map: n
							};
						return i(), r(), s(), d(), p(), o(), C.hide(), C[b.showMethod]({
							duration: b.showDuration,
							easing: b.showEasing,
							complete: b.onShown
						}), b.timeOut > 0 && (w = setTimeout(m, b.timeOut), E.maxHideTime = parseFloat(b.timeOut), E.hideEta = (new Date).getTime() + E.maxHideTime, b.progressBar && (E.intervalId = setInterval(y, 10))), C.hover(v, g), !b.onclick && b.tapToDismiss && C.click(m), b.closeButton && S && S.click(function (e) {
							e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), m(!0)
						}), b.onclick && C.click(function () {
							b.onclick(), m()
						}), a(A), b.debug && console && console.log(A), C
					}
				}

				function l() {
					return e.extend({}, r(), m.options)
				}

				function c(e) {
					u || (u = t()), e.is(":visible") || (e.remove(), e = null, 0 === u.children().length && (u.remove(), h = void 0))
				}
				var u, d, h, f = 0,
					p = {
						error: "error",
						info: "info",
						success: "success",
						warning: "warning"
					},
					m = {
						clear: function (e, o) {
							var r = l();
							u || t(r), i(e, r, o) || n(r)
						},
						remove: function (n) {
							var i = l();
							u || t(i), n && 0 === e(":focus", n).length ? c(n) : u.children().length && u.remove()
						},
						error: function (e, t, n) {
							return s({
								type: p.error,
								iconClass: l().iconClasses.error,
								message: e,
								optionsOverride: n,
								title: t
							})
						},
						getContainer: t,
						info: function (e, t, n) {
							return s({
								type: p.info,
								iconClass: l().iconClasses.info,
								message: e,
								optionsOverride: n,
								title: t
							})
						},
						options: {},
						subscribe: function (e) {
							d = e
						},
						success: function (e, t, n) {
							return s({
								type: p.success,
								iconClass: l().iconClasses.success,
								message: e,
								optionsOverride: n,
								title: t
							})
						},
						version: "2.1.1",
						warning: function (e, t, n) {
							return s({
								type: p.warning,
								iconClass: l().iconClasses.warning,
								message: e,
								optionsOverride: n,
								title: t
							})
						}
					};
				return m
			}()
		})
	}("function" == typeof define && define.amd ? define : function (e, t) {
		"undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
	}), $(".smooth-scroll").on("click", "a", function (e) {
		e.preventDefault();
		var t = $(this).attr("href"),
			n = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
			i = $(this).closest("ul").attr("data-allow-hashes");
		$("body,html").animate({
			scrollTop: $(t).offset().top - n
		}, 700), void 0 !== i && !1 !== i && history.replaceState(null, null, t)
	}),
	function (e) {
		e.fn.scrollTo = function (t) {
			return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
		}, e.fn.dropdown = function (t) {
			var n = {
				inDuration: 300,
				outDuration: 225,
				constrain_width: !0,
				hover: !0,
				gutter: 0,
				belowOrigin: !1,
				alignment: "left"
			};
			this.each(function () {
				function i() {
					void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"))
				}

				function o(t) {
					"focus" === t && (l = !0), i(), c.addClass("active"), a.addClass("active"), !0 === s.constrain_width ? c.css("width", a.outerWidth()) : c.css("white-space", "nowrap");
					var n = window.innerHeight,
						o = a.innerHeight(),
						r = a.offset().left,
						u = a.offset().top - e(window).scrollTop(),
						d = s.alignment,
						h = 0,
						f = 0,
						p = 0;
					!0 === s.belowOrigin && (p = o);
					var m = 0,
						g = a.parent();
					if (!g.is("body") && g[0].scrollHeight > g[0].clientHeight && (m = g[0].scrollTop), r + c.innerWidth() > e(window).width() ? d = "right" : r - c.innerWidth() + a.innerWidth() < 0 && (d = "left"), u + c.innerHeight() > n)
						if (u + o - c.innerHeight() < 0) {
							var v = n - u - p;
							c.css("max-height", v)
						} else p || (p += o), p -= c.innerHeight();
					"left" === d ? (h = s.gutter, f = a.position().left + h) : "right" === d && (f = a.position().left + a.outerWidth() - c.outerWidth() + (h = -s.gutter)), c.css({
						position: "absolute",
						top: a.position().top + p + m,
						left: f
					}), c.stop(!0, !0).css("opacity", 0).slideDown({
						queue: !1,
						duration: s.inDuration,
						easing: "easeOutCubic",
						complete: function () {
							e(this).css("height", "")
						}
					}).animate({
						opacity: 1
					}, {
						queue: !1,
						duration: s.inDuration,
						easing: "easeOutSine"
					})
				}

				function r() {
					l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), a.removeClass("active"), setTimeout(function () {
						c.css("max-height", "")
					}, s.outDuration)
				}
				var a = e(this),
					s = e.extend({}, n, t),
					l = !1,
					c = e("#" + a.attr("data-activates"));
				if (i(), a.after(c), s.hover) {
					var u = !1;
					a.unbind("click." + a.attr("id")), a.on("mouseenter", function (e) {
						!1 === u && (o(), u = !0)
					}), a.on("mouseleave", function (t) {
						var n = t.toElement || t.relatedTarget;
						e(n).closest(".dropdown-content").is(c) || (c.stop(!0, !0), r(), u = !1)
					}), c.on("mouseleave", function (t) {
						var n = t.toElement || t.relatedTarget;
						e(n).closest(".dropdown-button").is(a) || (c.stop(!0, !0), r(), u = !1)
					})
				} else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function (t) {
					l || (a[0] != t.currentTarget || a.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? a.hasClass("active") && (r(), e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (t.preventDefault(), o("click")), c.hasClass("active") && e(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function (t) {
						c.is(t.target) || a.is(t.target) || a.find(t.target).length || (r(), e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
					}))
				});
				a.on("open", function (e, t) {
					o(t)
				}), a.on("close", r)
			})
		}, e(document).ready(function () {
			e(".dropdown-button").dropdown()
		})
	}();
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
		"show.bs.dropdown": function () {
			$(this).find(".dropdown-menu").first().stop(!0, !0).fadeIn();
			var e = dropdownEffectData(this);
			dropdownEffectStart(e, e.effectIn)
		},
		"shown.bs.dropdown": function () {
			var e = dropdownEffectData(this);
			e.effectIn && e.effectOut && dropdownEffectEnd(e, function () {})
		},
		"hide.bs.dropdown": function (e) {
			$(this).find(".dropdown-menu").first().stop(!0, !0).fadeOut();
			var t = dropdownEffectData(this);
			t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function () {
				t.dropdown.removeClass("open"), t.dropdown.removeClass("show")
			}))
		}
	}),
	function (e) {
		function t(t) {
			if ($this = t, !1 === $this.hasClass("active")) {
				$this.addClass("active"), $this.find("ul .btn-floating").velocity({
					scaleY: ".4",
					scaleX: ".4",
					translateY: "40px"
				}, {
					duration: 0
				});
				n = 0;
				$this.find("ul .btn-floating").reverse().each(function () {
					e(this).velocity({
						opacity: "1",
						scaleX: "1",
						scaleY: "1",
						translateY: "0"
					}, {
						duration: 80,
						delay: n
					}), n += 40
				})
			} else {
				$this.removeClass("active");
				var n = 0;
				$this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
					opacity: "0",
					scaleX: ".4",
					scaleY: ".4",
					translateY: "40px"
				}, {
					duration: 80
				})
			}
		}
		e(document).ready(function () {
			e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (t) {
				var i = e(this);
				n(i)
			}), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (t) {
				var n = e(this);
				i(n)
			}), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function (t) {
				var o = e(this).parent();
				o.hasClass("active") ? i(o) : n(o)
			})
		}), e.fn.extend({
			openFAB: function () {
				n(e(this))
			},
			closeFAB: function () {
				i(e(this))
			}
		});
		var n = function (t) {
				if ($this = t, !1 === $this.hasClass("active")) {
					var n, i;
					!0 === $this.hasClass("horizontal") ? i = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
						scaleY: ".4",
						scaleX: ".4",
						translateY: n + "px",
						translateX: i + "px"
					}, {
						duration: 0
					});
					var o = 0;
					$this.find("ul .btn-floating").reverse().each(function () {
						e(this).velocity({
							opacity: "1",
							scaleX: "1",
							scaleY: "1",
							translateY: "0",
							translateX: "0"
						}, {
							duration: 80,
							delay: o
						}), o += 40
					})
				}
			},
			i = function (e) {
				$this = e;
				var t, n;
				!0 === $this.hasClass("horizontal") ? n = 40 : t = 40, $this.removeClass("active");
				$this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
					opacity: "0",
					scaleX: ".4",
					scaleY: ".4",
					translateY: t + "px",
					translateX: n + "px"
				}, {
					duration: 80
				})
			};
		e(".fixed-action-btn").on({
			click: function (n) {
				return n.preventDefault(), t(e(".fixed-action-btn")), !1
			}
		})
	}(),
	function (e, t, n, i) {
		"use strict";

		function o(e, t, n) {
			return setTimeout(c(e, n), t)
		}

		function r(e, t, n) {
			return !!Array.isArray(e) && (a(e, n[t], n), !0)
		}

		function a(e, t, n) {
			var o;
			if (e)
				if (e.forEach) e.forEach(t, n);
				else if (e.length !== i)
				for (o = 0; o < e.length;) t.call(n, e[o], o, e), o++;
			else
				for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
		}

		function s(t, n, i) {
			var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
			return function () {
				var n = new Error("get-stack-trace"),
					i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
					r = e.console && (e.console.warn || e.console.log);
				return r && r.call(e.console, o, i), t.apply(this, arguments)
			}
		}

		function l(e, t, n) {
			var i, o = t.prototype;
			(i = e.prototype = Object.create(o)).constructor = e, i._super = o, n && ue(i, n)
		}

		function c(e, t) {
			return function () {
				return e.apply(t, arguments)
			}
		}

		function u(e, t) {
			return typeof e == fe ? e.apply(t ? t[0] || i : i, t) : e
		}

		function d(e, t) {
			return e === i ? t : e
		}

		function h(e, t, n) {
			a(g(t), function (t) {
				e.addEventListener(t, n, !1)
			})
		}

		function f(e, t, n) {
			a(g(t), function (t) {
				e.removeEventListener(t, n, !1)
			})
		}

		function p(e, t) {
			for (; e;) {
				if (e == t) return !0;
				e = e.parentNode
			}
			return !1
		}

		function m(e, t) {
			return e.indexOf(t) > -1
		}

		function g(e) {
			return e.trim().split(/\s+/g)
		}

		function v(e, t, n) {
			if (e.indexOf && !n) return e.indexOf(t);
			for (var i = 0; i < e.length;) {
				if (n && e[i][n] == t || !n && e[i] === t) return i;
				i++
			}
			return -1
		}

		function y(e) {
			return Array.prototype.slice.call(e, 0)
		}

		function b(e, t, n) {
			for (var i = [], o = [], r = 0; r < e.length;) {
				var a = t ? e[r][t] : e[r];
				v(o, a) < 0 && i.push(e[r]), o[r] = a, r++
			}
			return n && (i = t ? i.sort(function (e, n) {
				return e[t] > n[t]
			}) : i.sort()), i
		}

		function x(e, t) {
			for (var n, o, r = t[0].toUpperCase() + t.slice(1), a = 0; a < de.length;) {
				if (n = de[a], (o = n ? n + r : t) in e) return o;
				a++
			}
			return i
		}

		function w() {
			return be++
		}

		function C(t) {
			var n = t.ownerDocument || t;
			return n.defaultView || n.parentWindow || e
		}

		function k(e, t) {
			var n = this;
			this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
				u(e.options.enable, [e]) && n.handler(t)
			}, this.init()
		}

		function T(e) {
			var t = e.options.inputClass;
			return new(t || (Ce ? W : ke ? j : we ? z : R))(e, _)
		}

		function _(e, t, n) {
			var i = n.pointers.length,
				o = n.changedPointers.length,
				r = t & _e && i - o == 0,
				a = t & (Ee | Ae) && i - o == 0;
			n.isFirst = !!r, n.isFinal = !!a, r && (e.session = {}), n.eventType = t, S(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
		}

		function S(e, t) {
			var n = e.session,
				i = t.pointers,
				o = i.length;
			n.firstInput || (n.firstInput = I(t)), o > 1 && !n.firstMultiple ? n.firstMultiple = I(t) : 1 === o && (n.firstMultiple = !1);
			var r = n.firstInput,
				a = n.firstMultiple,
				s = a ? a.center : r.center,
				l = t.center = D(i);
			t.timeStamp = ge(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = L(s, l), t.distance = M(s, l), E(n, t), t.offsetDirection = P(t.deltaX, t.deltaY);
			var c = O(t.deltaTime, t.deltaX, t.deltaY);
			t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = me(c.x) > me(c.y) ? c.x : c.y, t.scale = a ? N(a.pointers, i) : 1, t.rotation = a ? F(a.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, A(n, t);
			var u = e.element;
			p(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
		}

		function E(e, t) {
			var n = t.center,
				i = e.offsetDelta || {},
				o = e.prevDelta || {},
				r = e.prevInput || {};
			t.eventType !== _e && r.eventType !== Ee || (o = e.prevDelta = {
				x: r.deltaX || 0,
				y: r.deltaY || 0
			}, i = e.offsetDelta = {
				x: n.x,
				y: n.y
			}), t.deltaX = o.x + (n.x - i.x), t.deltaY = o.y + (n.y - i.y)
		}

		function A(e, t) {
			var n, o, r, a, s = e.lastInterval || t,
				l = t.timeStamp - s.timeStamp;
			if (t.eventType != Ae && (l > Te || s.velocity === i)) {
				var c = t.deltaX - s.deltaX,
					u = t.deltaY - s.deltaY,
					d = O(l, c, u);
				o = d.x, r = d.y, n = me(d.x) > me(d.y) ? d.x : d.y, a = P(c, u), e.lastInterval = t
			} else n = s.velocity, o = s.velocityX, r = s.velocityY, a = s.direction;
			t.velocity = n, t.velocityX = o, t.velocityY = r, t.direction = a
		}

		function I(e) {
			for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
				clientX: pe(e.pointers[n].clientX),
				clientY: pe(e.pointers[n].clientY)
			}, n++;
			return {
				timeStamp: ge(),
				pointers: t,
				center: D(t),
				deltaX: e.deltaX,
				deltaY: e.deltaY
			}
		}

		function D(e) {
			var t = e.length;
			if (1 === t) return {
				x: pe(e[0].clientX),
				y: pe(e[0].clientY)
			};
			for (var n = 0, i = 0, o = 0; o < t;) n += e[o].clientX, i += e[o].clientY, o++;
			return {
				x: pe(n / t),
				y: pe(i / t)
			}
		}

		function O(e, t, n) {
			return {
				x: t / e || 0,
				y: n / e || 0
			}
		}

		function P(e, t) {
			return e === t ? Ie : me(e) >= me(t) ? e < 0 ? De : Oe : t < 0 ? Pe : Me
		}

		function M(e, t, n) {
			n || (n = Re);
			var i = t[n[0]] - e[n[0]],
				o = t[n[1]] - e[n[1]];
			return Math.sqrt(i * i + o * o)
		}

		function L(e, t, n) {
			n || (n = Re);
			var i = t[n[0]] - e[n[0]],
				o = t[n[1]] - e[n[1]];
			return 180 * Math.atan2(o, i) / Math.PI
		}

		function F(e, t) {
			return L(t[1], t[0], We) + L(e[1], e[0], We)
		}

		function N(e, t) {
			return M(t[0], t[1], We) / M(e[0], e[1], We)
		}

		function R() {
			this.evEl = Ve, this.evWin = je, this.pressed = !1, k.apply(this, arguments)
		}

		function W() {
			this.evEl = qe, this.evWin = $e, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
		}

		function H() {
			this.evTarget = Xe, this.evWin = Ue, this.started = !1, k.apply(this, arguments)
		}

		function V(e, t) {
			var n = y(e.touches),
				i = y(e.changedTouches);
			return t & (Ee | Ae) && (n = b(n.concat(i), "identifier", !0)), [n, i]
		}

		function j() {
			this.evTarget = Ge, this.targetIds = {}, k.apply(this, arguments)
		}

		function B(e, t) {
			var n = y(e.touches),
				i = this.targetIds;
			if (t & (_e | Se) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
			var o, r, a = y(e.changedTouches),
				s = [],
				l = this.target;
			if (r = n.filter(function (e) {
					return p(e.target, l)
				}), t === _e)
				for (o = 0; o < r.length;) i[r[o].identifier] = !0, o++;
			for (o = 0; o < a.length;) i[a[o].identifier] && s.push(a[o]), t & (Ee | Ae) && delete i[a[o].identifier], o++;
			return s.length ? [b(r.concat(s), "identifier", !0), s] : void 0
		}

		function z() {
			k.apply(this, arguments);
			var e = c(this.handler, this);
			this.touch = new j(this.manager, e), this.mouse = new R(this.manager, e), this.primaryTouch = null, this.lastTouches = []
		}

		function q(e, t) {
			e & _e ? (this.primaryTouch = t.changedPointers[0].identifier, $.call(this, t)) : e & (Ee | Ae) && $.call(this, t)
		}

		function $(e) {
			var t = e.changedPointers[0];
			if (t.identifier === this.primaryTouch) {
				var n = {
					x: t.clientX,
					y: t.clientY
				};
				this.lastTouches.push(n);
				var i = this.lastTouches;
				setTimeout(function () {
					var e = i.indexOf(n);
					e > -1 && i.splice(e, 1)
				}, Ke)
			}
		}

		function Y(e) {
			for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
				var o = this.lastTouches[i],
					r = Math.abs(t - o.x),
					a = Math.abs(n - o.y);
				if (r <= Ze && a <= Ze) return !0
			}
			return !1
		}

		function X(e, t) {
			this.manager = e, this.set(t)
		}

		function U(e) {
			if (m(e, it)) return it;
			var t = m(e, ot),
				n = m(e, rt);
			return t && n ? it : t || n ? t ? ot : rt : m(e, nt) ? nt : tt
		}

		function Q(e) {
			this.options = ue({}, this.defaults, e || {}), this.id = w(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = st, this.simultaneous = {}, this.requireFail = []
		}

		function G(e) {
			return e & ht ? "cancel" : e & ut ? "end" : e & ct ? "move" : e & lt ? "start" : ""
		}

		function K(e) {
			return e == Me ? "down" : e == Pe ? "up" : e == De ? "left" : e == Oe ? "right" : ""
		}

		function Z(e, t) {
			var n = t.manager;
			return n ? n.get(e) : e
		}

		function J() {
			Q.apply(this, arguments)
		}

		function ee() {
			J.apply(this, arguments), this.pX = null, this.pY = null
		}

		function te() {
			J.apply(this, arguments)
		}

		function ne() {
			Q.apply(this, arguments), this._timer = null, this._input = null
		}

		function ie() {
			J.apply(this, arguments)
		}

		function oe() {
			J.apply(this, arguments)
		}

		function re() {
			Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
		}

		function ae(e, t) {
			return t = t || {}, t.recognizers = d(t.recognizers, ae.defaults.preset), new se(e, t)
		}

		function se(e, t) {
			this.options = ue({}, ae.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = T(this), this.touchAction = new X(this, this.options.touchAction), le(this, !0), a(this.options.recognizers, function (e) {
				var t = this.add(new e[0](e[1]));
				e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
			}, this)
		}

		function le(e, t) {
			var n = e.element;
			if (n.style) {
				var i;
				a(e.options.cssProps, function (o, r) {
					i = x(n.style, r), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = e.oldCssProps[i] || ""
				}), t || (e.oldCssProps = {})
			}
		}

		function ce(e, n) {
			var i = t.createEvent("Event");
			i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
		}
		var ue, de = ["", "webkit", "Moz", "MS", "ms", "o"],
			he = t.createElement("div"),
			fe = "function",
			pe = Math.round,
			me = Math.abs,
			ge = Date.now;
		ue = "function" != typeof Object.assign ? function (e) {
			if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
			for (var t = Object(e), n = 1; n < arguments.length; n++) {
				var o = arguments[n];
				if (o !== i && null !== o)
					for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
			}
			return t
		} : Object.assign;
		var ve = s(function (e, t, n) {
				for (var o = Object.keys(t), r = 0; r < o.length;)(!n || n && e[o[r]] === i) && (e[o[r]] = t[o[r]]), r++;
				return e
			}, "extend", "Use `assign`."),
			ye = s(function (e, t) {
				return ve(e, t, !0)
			}, "merge", "Use `assign`."),
			be = 1,
			xe = /mobile|tablet|ip(ad|hone|od)|android/i,
			we = "ontouchstart" in e,
			Ce = x(e, "PointerEvent") !== i,
			ke = we && xe.test(navigator.userAgent),
			Te = 25,
			_e = 1,
			Se = 2,
			Ee = 4,
			Ae = 8,
			Ie = 1,
			De = 2,
			Oe = 4,
			Pe = 8,
			Me = 16,
			Le = De | Oe,
			Fe = Pe | Me,
			Ne = Le | Fe,
			Re = ["x", "y"],
			We = ["clientX", "clientY"];
		k.prototype = {
			handler: function () {},
			init: function () {
				this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(C(this.element), this.evWin, this.domHandler)
			},
			destroy: function () {
				this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(C(this.element), this.evWin, this.domHandler)
			}
		};
		var He = {
				mousedown: _e,
				mousemove: Se,
				mouseup: Ee
			},
			Ve = "mousedown",
			je = "mousemove mouseup";
		l(R, k, {
			handler: function (e) {
				var t = He[e.type];
				t & _e && 0 === e.button && (this.pressed = !0), t & Se && 1 !== e.which && (t = Ee), this.pressed && (t & Ee && (this.pressed = !1), this.callback(this.manager, t, {
					pointers: [e],
					changedPointers: [e],
					pointerType: "mouse",
					srcEvent: e
				}))
			}
		});
		var Be = {
				pointerdown: _e,
				pointermove: Se,
				pointerup: Ee,
				pointercancel: Ae,
				pointerout: Ae
			},
			ze = {
				2: "touch",
				3: "pen",
				4: "mouse",
				5: "kinect"
			},
			qe = "pointerdown",
			$e = "pointermove pointerup pointercancel";
		e.MSPointerEvent && !e.PointerEvent && (qe = "MSPointerDown", $e = "MSPointerMove MSPointerUp MSPointerCancel"), l(W, k, {
			handler: function (e) {
				var t = this.store,
					n = !1,
					i = e.type.toLowerCase().replace("ms", ""),
					o = Be[i],
					r = ze[e.pointerType] || e.pointerType,
					a = "touch" == r,
					s = v(t, e.pointerId, "pointerId");
				o & _e && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : o & (Ee | Ae) && (n = !0), s < 0 || (t[s] = e, this.callback(this.manager, o, {
					pointers: t,
					changedPointers: [e],
					pointerType: r,
					srcEvent: e
				}), n && t.splice(s, 1))
			}
		});
		var Ye = {
				touchstart: _e,
				touchmove: Se,
				touchend: Ee,
				touchcancel: Ae
			},
			Xe = "touchstart",
			Ue = "touchstart touchmove touchend touchcancel";
		l(H, k, {
			handler: function (e) {
				var t = Ye[e.type];
				if (t === _e && (this.started = !0), this.started) {
					var n = V.call(this, e, t);
					t & (Ee | Ae) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
						pointers: n[0],
						changedPointers: n[1],
						pointerType: "touch",
						srcEvent: e
					})
				}
			}
		});
		var Qe = {
				touchstart: _e,
				touchmove: Se,
				touchend: Ee,
				touchcancel: Ae
			},
			Ge = "touchstart touchmove touchend touchcancel";
		l(j, k, {
			handler: function (e) {
				var t = Qe[e.type],
					n = B.call(this, e, t);
				n && this.callback(this.manager, t, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: "touch",
					srcEvent: e
				})
			}
		});
		var Ke = 2500,
			Ze = 25;
		l(z, k, {
			handler: function (e, t, n) {
				var i = "touch" == n.pointerType,
					o = "mouse" == n.pointerType;
				if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
					if (i) q.call(this, t, n);
					else if (o && Y.call(this, n)) return;
					this.callback(e, t, n)
				}
			},
			destroy: function () {
				this.touch.destroy(), this.mouse.destroy()
			}
		});
		var Je = x(he.style, "touchAction"),
			et = Je !== i,
			tt = "auto",
			nt = "manipulation",
			it = "none",
			ot = "pan-x",
			rt = "pan-y",
			at = function () {
				if (!et) return !1;
				var t = {},
					n = e.CSS && e.CSS.supports;
				return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
					t[i] = !n || e.CSS.supports("touch-action", i)
				}), t
			}();
		X.prototype = {
			set: function (e) {
				"compute" == e && (e = this.compute()), et && this.manager.element.style && at[e] && (this.manager.element.style[Je] = e), this.actions = e.toLowerCase().trim()
			},
			update: function () {
				this.set(this.manager.options.touchAction)
			},
			compute: function () {
				var e = [];
				return a(this.manager.recognizers, function (t) {
					u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
				}), U(e.join(" "))
			},
			preventDefaults: function (e) {
				var t = e.srcEvent,
					n = e.offsetDirection;
				if (this.manager.session.prevented) t.preventDefault();
				else {
					var i = this.actions,
						o = m(i, it) && !at[it],
						r = m(i, rt) && !at[rt],
						a = m(i, ot) && !at[ot];
					if (o) {
						var s = 1 === e.pointers.length,
							l = e.distance < 2,
							c = e.deltaTime < 250;
						if (s && l && c) return
					}
					if (!a || !r) return o || r && n & Le || a && n & Fe ? this.preventSrc(t) : void 0
				}
			},
			preventSrc: function (e) {
				this.manager.session.prevented = !0, e.preventDefault()
			}
		};
		var st = 1,
			lt = 2,
			ct = 4,
			ut = 8,
			dt = ut,
			ht = 16;
		Q.prototype = {
			defaults: {},
			set: function (e) {
				return ue(this.options, e), this.manager && this.manager.touchAction.update(), this
			},
			recognizeWith: function (e) {
				if (r(e, "recognizeWith", this)) return this;
				var t = this.simultaneous;
				return e = Z(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
			},
			dropRecognizeWith: function (e) {
				return r(e, "dropRecognizeWith", this) ? this : (e = Z(e, this), delete this.simultaneous[e.id], this)
			},
			requireFailure: function (e) {
				if (r(e, "requireFailure", this)) return this;
				var t = this.requireFail;
				return e = Z(e, this), -1 === v(t, e) && (t.push(e), e.requireFailure(this)), this
			},
			dropRequireFailure: function (e) {
				if (r(e, "dropRequireFailure", this)) return this;
				e = Z(e, this);
				var t = v(this.requireFail, e);
				return t > -1 && this.requireFail.splice(t, 1), this
			},
			hasRequireFailures: function () {
				return this.requireFail.length > 0
			},
			canRecognizeWith: function (e) {
				return !!this.simultaneous[e.id]
			},
			emit: function (e) {
				function t(t) {
					n.manager.emit(t, e)
				}
				var n = this,
					i = this.state;
				i < ut && t(n.options.event + G(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= ut && t(n.options.event + G(i))
			},
			tryEmit: function (e) {
				if (this.canEmit()) return this.emit(e);
				this.state = 32
			},
			canEmit: function () {
				for (var e = 0; e < this.requireFail.length;) {
					if (!(this.requireFail[e].state & (32 | st))) return !1;
					e++
				}
				return !0
			},
			recognize: function (e) {
				var t = ue({}, e);
				if (!u(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
				this.state & (dt | ht | 32) && (this.state = st), this.state = this.process(t), this.state & (lt | ct | ut | ht) && this.tryEmit(t)
			},
			process: function (e) {},
			getTouchAction: function () {},
			reset: function () {}
		}, l(J, Q, {
			defaults: {
				pointers: 1
			},
			attrTest: function (e) {
				var t = this.options.pointers;
				return 0 === t || e.pointers.length === t
			},
			process: function (e) {
				var t = this.state,
					n = e.eventType,
					i = t & (lt | ct),
					o = this.attrTest(e);
				return i && (n & Ae || !o) ? t | ht : i || o ? n & Ee ? t | ut : t & lt ? t | ct : lt : 32
			}
		}), l(ee, J, {
			defaults: {
				event: "pan",
				threshold: 10,
				pointers: 1,
				direction: Ne
			},
			getTouchAction: function () {
				var e = this.options.direction,
					t = [];
				return e & Le && t.push(rt), e & Fe && t.push(ot), t
			},
			directionTest: function (e) {
				var t = this.options,
					n = !0,
					i = e.distance,
					o = e.direction,
					r = e.deltaX,
					a = e.deltaY;
				return o & t.direction || (t.direction & Le ? (o = 0 === r ? Ie : r < 0 ? De : Oe, n = r != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === a ? Ie : a < 0 ? Pe : Me, n = a != this.pY, i = Math.abs(e.deltaY))), e.direction = o, n && i > t.threshold && o & t.direction
			},
			attrTest: function (e) {
				return J.prototype.attrTest.call(this, e) && (this.state & lt || !(this.state & lt) && this.directionTest(e))
			},
			emit: function (e) {
				this.pX = e.deltaX, this.pY = e.deltaY;
				var t = K(e.direction);
				t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
			}
		}), l(te, J, {
			defaults: {
				event: "pinch",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function () {
				return [it]
			},
			attrTest: function (e) {
				return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & lt)
			},
			emit: function (e) {
				if (1 !== e.scale) {
					var t = e.scale < 1 ? "in" : "out";
					e.additionalEvent = this.options.event + t
				}
				this._super.emit.call(this, e)
			}
		}), l(ne, Q, {
			defaults: {
				event: "press",
				pointers: 1,
				time: 251,
				threshold: 9
			},
			getTouchAction: function () {
				return [tt]
			},
			process: function (e) {
				var t = this.options,
					n = e.pointers.length === t.pointers,
					i = e.distance < t.threshold,
					r = e.deltaTime > t.time;
				if (this._input = e, !i || !n || e.eventType & (Ee | Ae) && !r) this.reset();
				else if (e.eventType & _e) this.reset(), this._timer = o(function () {
					this.state = dt, this.tryEmit()
				}, t.time, this);
				else if (e.eventType & Ee) return dt;
				return 32
			},
			reset: function () {
				clearTimeout(this._timer)
			},
			emit: function (e) {
				this.state === dt && (e && e.eventType & Ee ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ge(), this.manager.emit(this.options.event, this._input)))
			}
		}), l(ie, J, {
			defaults: {
				event: "rotate",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function () {
				return [it]
			},
			attrTest: function (e) {
				return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & lt)
			}
		}), l(oe, J, {
			defaults: {
				event: "swipe",
				threshold: 10,
				velocity: .3,
				direction: Le | Fe,
				pointers: 1
			},
			getTouchAction: function () {
				return ee.prototype.getTouchAction.call(this)
			},
			attrTest: function (e) {
				var t, n = this.options.direction;
				return n & (Le | Fe) ? t = e.overallVelocity : n & Le ? t = e.overallVelocityX : n & Fe && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && me(t) > this.options.velocity && e.eventType & Ee
			},
			emit: function (e) {
				var t = K(e.offsetDirection);
				t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
			}
		}), l(re, Q, {
			defaults: {
				event: "tap",
				pointers: 1,
				taps: 1,
				interval: 300,
				time: 250,
				threshold: 9,
				posThreshold: 10
			},
			getTouchAction: function () {
				return [nt]
			},
			process: function (e) {
				var t = this.options,
					n = e.pointers.length === t.pointers,
					i = e.distance < t.threshold,
					r = e.deltaTime < t.time;
				if (this.reset(), e.eventType & _e && 0 === this.count) return this.failTimeout();
				if (i && r && n) {
					if (e.eventType != Ee) return this.failTimeout();
					var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
						s = !this.pCenter || M(this.pCenter, e.center) < t.posThreshold;
					if (this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = o(function () {
						this.state = dt, this.tryEmit()
					}, t.interval, this), lt) : dt
				}
				return 32
			},
			failTimeout: function () {
				return this._timer = o(function () {
					this.state = 32
				}, this.options.interval, this), 32
			},
			reset: function () {
				clearTimeout(this._timer)
			},
			emit: function () {
				this.state == dt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}
		}), ae.VERSION = "2.0.7", ae.defaults = {
			domEvents: !1,
			touchAction: "compute",
			enable: !0,
			inputTarget: null,
			inputClass: null,
			preset: [
				[ie, {
					enable: !1
				}],
				[te, {
						enable: !1
					},
					["rotate"]
				],
				[oe, {
					direction: Le
				}],
				[ee, {
						direction: Le
					},
					["swipe"]
				],
				[re],
				[re, {
						event: "doubletap",
						taps: 2
					},
					["tap"]
				],
				[ne]
			],
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		};
		se.prototype = {
			set: function (e) {
				return ue(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
			},
			stop: function (e) {
				this.session.stopped = e ? 2 : 1
			},
			recognize: function (e) {
				var t = this.session;
				if (!t.stopped) {
					this.touchAction.preventDefaults(e);
					var n, i = this.recognizers,
						o = t.curRecognizer;
					(!o || o && o.state & dt) && (o = t.curRecognizer = null);
					for (var r = 0; r < i.length;) n = i[r], 2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (lt | ct | ut) && (o = t.curRecognizer = n), r++
				}
			},
			get: function (e) {
				if (e instanceof Q) return e;
				for (var t = this.recognizers, n = 0; n < t.length; n++)
					if (t[n].options.event == e) return t[n];
				return null
			},
			add: function (e) {
				if (r(e, "add", this)) return this;
				var t = this.get(e.options.event);
				return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
			},
			remove: function (e) {
				if (r(e, "remove", this)) return this;
				if (e = this.get(e)) {
					var t = this.recognizers,
						n = v(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
				}
				return this
			},
			on: function (e, t) {
				if (e !== i && t !== i) {
					var n = this.handlers;
					return a(g(e), function (e) {
						n[e] = n[e] || [], n[e].push(t)
					}), this
				}
			},
			off: function (e, t) {
				if (e !== i) {
					var n = this.handlers;
					return a(g(e), function (e) {
						t ? n[e] && n[e].splice(v(n[e], t), 1) : delete n[e]
					}), this
				}
			},
			emit: function (e, t) {
				this.options.domEvents && ce(e, t);
				var n = this.handlers[e] && this.handlers[e].slice();
				if (n && n.length) {
					t.type = e, t.preventDefault = function () {
						t.srcEvent.preventDefault()
					};
					for (var i = 0; i < n.length;) n[i](t), i++
				}
			},
			destroy: function () {
				this.element && le(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}
		}, ue(ae, {
			INPUT_START: _e,
			INPUT_MOVE: Se,
			INPUT_END: Ee,
			INPUT_CANCEL: Ae,
			STATE_POSSIBLE: st,
			STATE_BEGAN: lt,
			STATE_CHANGED: ct,
			STATE_ENDED: ut,
			STATE_RECOGNIZED: dt,
			STATE_CANCELLED: ht,
			STATE_FAILED: 32,
			DIRECTION_NONE: Ie,
			DIRECTION_LEFT: De,
			DIRECTION_RIGHT: Oe,
			DIRECTION_UP: Pe,
			DIRECTION_DOWN: Me,
			DIRECTION_HORIZONTAL: Le,
			DIRECTION_VERTICAL: Fe,
			DIRECTION_ALL: Ne,
			Manager: se,
			Input: k,
			TouchAction: X,
			TouchInput: j,
			MouseInput: R,
			PointerEventInput: W,
			TouchMouseInput: z,
			SingleTouchInput: H,
			Recognizer: Q,
			AttrRecognizer: J,
			Tap: re,
			Pan: ee,
			Swipe: oe,
			Pinch: te,
			Rotate: ie,
			Press: ne,
			on: h,
			off: f,
			each: a,
			merge: ye,
			extend: ve,
			assign: ue,
			inherit: l,
			bindFn: c,
			prefixed: x
		}), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = ae, "function" == typeof define && define.amd ? define(function () {
			return ae
		}) : "undefined" != typeof module && module.exports ? module.exports = ae : e.Hammer = ae
	}(window, document),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
	}(function (e, t) {
		function n(n, i) {
			var o = e(n);
			o.data("hammer") || o.data("hammer", new t(o[0], i))
		}
		e.fn.hammer = function (e) {
			return this.each(function () {
				n(this, e)
			})
		}, t.Manager.prototype.emit = function (t) {
			return function (n, i) {
				t.call(this, n, i), e(this.element).trigger({
					type: n,
					gesture: i
				})
			}
		}(t.Manager.prototype.emit)
	});
var _createClass = function () {
	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	return function (t, n, i) {
		return n && e(t.prototype, n), i && e(t, i), t
	}
}();
! function (e) {
	var t = 240,
		n = 1440,
		i = function () {
			function i(o, r) {
				var a = this;
				_classCallCheck(this, i);
				var s = !1,
					l = {
						menuWidth: t,
						edge: "left",
						closeOnClick: !1
					};
				r = e.extend(l, r), this.options = r;
				var c = o;
				this.menu_id = e("#" + c.attr("data-activates"));
				var u = e("#" + this.menu_id.attr("id") + "> .sidenav-bg");
				r.menuWidth != t && (this.menu_id.css("width", r.menuWidth), u.css("width", r.menuWidth));
				var d = e('<div class="drag-target"></div>');
				e("body").append(d), "left" == r.edge ? (this.menu_id.css("transform", "translateX(-100%)"), d.css({
					left: 0
				})) : (this.menu_id.addClass("right-aligned").css("transform", "translateX(100%)"), d.css({
					right: 0
				})), this.menu_id.hasClass("fixed") && (window.innerWidth > n && this.menu_id.css("transform", "translateX(0)"), e(window).resize(function () {
					window.innerWidth > n ? e("#sidenav-overlay").length ? a.removeMenu(!0) : a.menu_id.css("transform", "translateX(0%)") : !1 === s && ("left" === r.edge ? a.menu_id.css("transform", "translateX(-100%)") : a.menu_id.css("transform", "translateX(100%)"))
				})), !0 === this.options.closeOnClick && this.menu_id.on("click", "a:not(.collapsible-header)", function () {
					sn.removeMenu()
				}), c.click(function (t) {
					if (t.preventDefault(), !0 === s) s = !1, a.removeMenu();
					else {
						var n = e("body"),
							i = e('<div id="sidenav-overlay"></div>');
						n.append(i), "left" === a.options.edge ? a.menu_id.velocity({
							translateX: [0, -1 * r.menuWidth]
						}, {
							duration: 300,
							queue: !1,
							easing: "easeOutQuad"
						}) : a.menu_id.velocity({
							translateX: [0, r.menuWidth]
						}, {
							duration: 300,
							queue: !1,
							easing: "easeOutQuad"
						}), i.click(function () {
							a.removeMenu()
						})
					}
				}), d.click(function (e) {
					a.removeMenu()
				}), d.hammer({
					prevent_default: !1
				}).bind("pan", function (t) {
					if ("touch" == t.gesture.pointerType) {
						t.gesture.direction;
						var n = t.gesture.center.x,
							i = (t.gesture.center.y, t.gesture.velocityX, e("body")),
							o = i.innerWidth();
						if (i.css("overflow", "hidden"), i.width(o), 0 === e("#sidenav-overlay").length) {
							var l = e('<div id="sidenav-overlay"></div>');
							l.css("opacity", 0).click(function (e) {
								a.removeMenu()
							}), e("body").append(l)
						}
						if ("left" === r.edge && (n > r.menuWidth ? n = r.menuWidth : n < 0 && (n = 0)), "left" === r.edge) n < r.menuWidth / 2 ? s = !1 : n >= r.menuWidth / 2 && (s = !0), a.menu_id.css("transform", "translateX(" + (n - r.menuWidth) + "px)");
						else {
							n < window.innerWidth - r.menuWidth / 2 ? s = !0 : n >= window.innerWidth - r.menuWidth / 2 && (s = !1);
							var c = n - r.menuWidth / 2;
							c < 0 && (c = 0), a.menu_id.css("transform", "translateX(" + c + "px)")
						}
						var u;
						"left" === r.edge ? (u = n / r.menuWidth, e("#sidenav-overlay").velocity({
							opacity: u
						}, {
							duration: 10,
							queue: !1,
							easing: "easeOutQuad"
						})) : (u = Math.abs((n - window.innerWidth) / r.menuWidth), e("#sidenav-overlay").velocity({
							opacity: u
						}, {
							duration: 10,
							queue: !1,
							easing: "easeOutQuad"
						}))
					}
				}).bind("panend", function (t) {
					if ("touch" == t.gesture.pointerType) {
						var n = t.gesture.velocityX,
							i = t.gesture.center.x,
							o = i - r.menuWidth,
							l = i - r.menuWidth / 2;
						o > 0 && (o = 0), l < 0 && (l = 0), "left" === r.edge ? s && n <= .3 || n < -.5 ? (0 != o && a.menu_id.velocity({
							translateX: [0, o]
						}, {
							duration: 300,
							queue: !1,
							easing: "easeOutQuad"
						}), e("#sidenav-overlay").velocity({
							opacity: 1
						}, {
							duration: 50,
							queue: !1,
							easing: "easeOutQuad"
						}), d.css({
							width: "10px",
							right: "",
							left: 0
						})) : (!s || n > .3) && (e("body").css({
							overflow: "",
							width: ""
						}), a.menu_id.velocity({
							translateX: [-1 * r.menuWidth - 10, o]
						}, {
							duration: 200,
							queue: !1,
							easing: "easeOutQuad"
						}), e("#sidenav-overlay").velocity({
							opacity: 0
						}, {
							duration: 200,
							queue: !1,
							easing: "easeOutQuad",
							complete: function () {
								e(this).remove()
							}
						}), d.css({
							width: "10px",
							right: "",
							left: 0
						})) : s && n >= -.3 || n > .5 ? (a.menu_id.velocity({
							translateX: [0, l]
						}, {
							duration: 300,
							queue: !1,
							easing: "easeOutQuad"
						}), e("#sidenav-overlay").velocity({
							opacity: 1
						}, {
							duration: 50,
							queue: !1,
							easing: "easeOutQuad"
						}), d.css({
							width: "50%",
							right: "",
							left: 0
						})) : (!s || n < -.3) && (e("body").css({
							overflow: "",
							width: ""
						}), a.menu_id.velocity({
							translateX: [r.menuWidth + 10, l]
						}, {
							duration: 200,
							queue: !1,
							easing: "easeOutQuad"
						}), e("#sidenav-overlay").velocity({
							opacity: 0
						}, {
							duration: 200,
							queue: !1,
							easing: "easeOutQuad",
							complete: function () {
								e(a).remove()
							}
						}), d.css({
							width: "10px",
							right: 0,
							left: ""
						}))
					}
				})
			}
			return _createClass(i, [{
				key: "removeMenu",
				value: function (t) {
					var n = this;
					this.options.menuWidth, window.innerWidth;
					e("body").css({
						overflow: "",
						width: ""
					}), "left" === this.options.edge ? this.menu_id.velocity({
						translateX: "-100%"
					}, {
						duration: 200,
						queue: !1,
						easing: "easeOutCubic",
						complete: function () {
							!0 === t && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.menuWidth))
						}
					}) : this.menu_id.velocity({
						translateX: "100%"
					}, {
						duration: 200,
						queue: !1,
						easing: "easeOutCubic",
						complete: function () {
							!0 === t && (n.menu_id.removeAttr("style"), n.menu_id.css("width", n.options.menuWidth))
						}
					}), e("#sidenav-overlay").velocity({
						opacity: 0
					}, {
						duration: 200,
						queue: !1,
						easing: "easeOutQuad",
						complete: function () {
							e("#sidenav-overlay").remove()
						}
					})
				}
			}, {
				key: "show",
				value: function () {
					this.trigger("click")
				}
			}, {
				key: "hide",
				value: function () {
					e("#sidenav-overlay").trigger("click")
				}
			}]), i
		}();
	e.fn.sideNav = function (t) {
		return this.each(function () {
			new i(e(this), t)
		})
	}
}(),
function (e) {
	e.fn.collapsible = function (t) {
		var n = {
			accordion: void 0
		};
		return t = e.extend(n, t), this.each(function () {
			function n(t) {
				s = a.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1,
					complete: function () {
						e(this).css("height", "")
					}
				}) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1,
					complete: function () {
						e(this).css("height", "")
					}
				}), s.not(t).removeClass("active").parent().removeClass("active"), s.not(t).parent().children(".collapsible-body").stop(!0, !1).slideUp({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1,
					complete: function () {
						e(this).css("height", "")
					}
				})
			}

			function i(t) {
				t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1,
					complete: function () {
						e(this).css("height", "")
					}
				}) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
					duration: 350,
					easing: "easeOutQuart",
					queue: !1,
					complete: function () {
						e(this).css("height", "")
					}
				})
			}

			function o(e) {
				return r(e).length > 0
			}

			function r(e) {
				return e.closest("li > .collapsible-header")
			}
			var a = e(this),
				s = e(this).find("> li > .collapsible-header"),
				l = a.data("collapsible");
			a.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((s = a.find("> li > .collapsible-header")).on("click.collapse", function (t) {
				var i = e(t.target);
				o(i) && (i = r(i)), i.toggleClass("active"), n(i)
			}), n(s.filter(".active").first())) : s.each(function () {
				e(this).on("click.collapse", function (t) {
					var n = e(t.target);
					o(n) && (n = r(n)), n.toggleClass("active"), i(n)
				}), e(this).hasClass("active") && i(e(this))
			})
		})
	}, e(document).ready(function () {
		e(".collapsible").collapsible()
	})
}(),
function (e, t) {
	"function" == typeof define && define.amd ? define(["jquery"], function (e) {
		return t(e)
	}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
	var t = function (e, t) {
			var n, i = document.createElement("canvas");
			e.appendChild(i), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
			var o = i.getContext("2d");
			i.width = i.height = t.size;
			var r = 1;
			window.devicePixelRatio > 1 && (r = window.devicePixelRatio, i.style.width = i.style.height = [t.size, "px"].join(""), i.width = i.height = t.size * r, o.scale(r, r)), o.translate(t.size / 2, t.size / 2), o.rotate((t.rotate / 180 - .5) * Math.PI);
			var a = (t.size - t.lineWidth) / 2;
			t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function () {
				return +new Date
			};
			var s = function (e, t, n) {
					var i = (n = Math.min(Math.max(-1, n || 0), 1)) <= 0;
					o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * n, i), o.strokeStyle = e, o.lineWidth = t, o.stroke()
				},
				l = function () {
					var e, n;
					o.lineWidth = 1, o.fillStyle = t.scaleColor, o.save();
					for (var i = 24; i > 0; --i) i % 6 == 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), o.fillRect(-t.size / 2 + e, 0, n, 1), o.rotate(Math.PI / 12);
					o.restore()
				},
				c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
					window.setTimeout(e, 1e3 / 60)
				},
				u = function () {
					t.scaleColor && l(), t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1)
				};
			this.getCanvas = function () {
				return i
			}, this.getCtx = function () {
				return o
			}, this.clear = function () {
				o.clearRect(t.size / -2, t.size / -2, t.size, t.size)
			}, this.draw = function (e) {
				t.scaleColor || t.trackColor ? o.getImageData && o.putImageData ? n ? o.putImageData(n, 0, 0) : (u(), n = o.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), u()) : this.clear(), o.lineCap = t.lineCap;
				var i;
				i = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(i, t.lineWidth, e / 100)
			}.bind(this), this.animate = function (e, n) {
				var i = Date.now();
				t.onStart(e, n);
				var o = function () {
					var r = Math.min(Date.now() - i, t.animate.duration),
						a = t.easing(this, r, e, n - e, t.animate.duration);
					this.draw(a), t.onStep(e, n, a), r >= t.animate.duration ? t.onStop(e, n) : c(o)
				}.bind(this);
				c(o)
			}.bind(this)
		},
		n = function (e, n) {
			var i = {
				barColor: "#ef1e25",
				trackColor: "#f9f9f9",
				scaleColor: "#dfe0e0",
				scaleLength: 5,
				lineCap: "round",
				lineWidth: 3,
				trackWidth: void 0,
				size: 110,
				rotate: 0,
				animate: {
					duration: 1e3,
					enabled: !0
				},
				easing: function (e, t, n, i, o) {
					return t /= o / 2, t < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
				},
				onStart: function (e, t) {},
				onStep: function (e, t, n) {},
				onStop: function (e, t) {}
			};
			if (void 0 !== t) i.renderer = t;
			else {
				if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
				i.renderer = SVGRenderer
			}
			var o = {},
				r = 0,
				a = function () {
					this.el = e, this.options = o;
					for (var t in i) i.hasOwnProperty(t) && (o[t] = n && void 0 !== n[t] ? n[t] : i[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
					"string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = i.easing, "number" == typeof o.animate && (o.animate = {
						duration: o.animate,
						enabled: !0
					}), "boolean" != typeof o.animate || o.animate || (o.animate = {
						duration: 1e3,
						enabled: o.animate
					}), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
				}.bind(this);
			this.update = function (e) {
				return e = parseFloat(e), o.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
			}.bind(this), this.disableAnimation = function () {
				return o.animate.enabled = !1, this
			}, this.enableAnimation = function () {
				return o.animate.enabled = !0, this
			}, a()
		};
	e.fn.easyPieChart = function (t) {
		return this.each(function () {
			var i;
			e.data(this, "easyPieChart") || (i = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new n(this, i)))
		})
	}
}),
function (e) {
	var t = "input[type=range]",
		n = !1,
		i = void 0,
		o = function () {
			var t = e('<span class="thumb"><span class="value"></span></span>');
			e(this).after(t)
		};
	e(t).each(o), e(document).on("change", t, function (t) {
		var n = e(this);
		n.siblings(".thumb").find(".value").html(n.val())
	}), e(document).on("input mousedown touchstart", t, function (t) {
		var r = e(this),
			a = r.siblings(".thumb"),
			s = (a.find(".value"), r.outerWidth());
		if (!a.length && o(), a.find(".value").html(r.val()), n = !0, r.addClass("active"), a.hasClass("active") || a.velocity({
				height: "30px",
				width: "30px",
				top: "-20px",
				marginLeft: "-15px"
			}, {
				duration: 300,
				easing: "easeOutExpo"
			}), "input" !== t.type) {
			var l = void 0 === t.pageX || null === t.pageX;
			(i = l ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left) < 0 ? i = 0 : i > s && (i = s), a.addClass("active").css("left", i)
		}
		a.find(".value").html(r.val())
	}), e(document).on("mouseup touchend", ".range-field", function (t) {
		n = !1, e(this).removeClass("active")
	}), e(document).on("mousemove touchmove", ".range-field", function (i) {
		var o = e(this).children(".thumb"),
			r = void 0;
		if (n) {
			o.hasClass("active") || o.velocity({
				height: "30px",
				width: "30px",
				top: "-20px",
				marginLeft: "-15px"
			}, {
				duration: 300,
				easing: "easeOutExpo"
			}), r = void 0 === i.pageX || null === i.pageX ? i.originalEvent.touches[0].pageX - e(this).offset().left : i.pageX - e(this).offset().left;
			var a = e(this).outerWidth();
			r < 0 ? r = 0 : r > a && (r = a), o.addClass("active").css("left", r), o.find(".value").html(o.siblings(t).val())
		}
	}), e(document).on("mouseout touchleave", ".range-field", function (t) {
		if (!n) {
			var i = e(this).children(".thumb");
			i.hasClass("active") && i.velocity({
				height: "0",
				width: "0",
				top: "10px",
				marginLeft: "-6px"
			}, {
				duration: 100
			}), i.removeClass("active")
		}
	})
}(),
function (e) {
	e(document).on("change", '.file-field input[type="file"]', function (t) {
		for (var n = e(t.target), i = n.closest(".file-field").find("input.file-path"), o = n[0].files, r = [], a = 0; a < o.length; a++) {
			var s = o[a].name;
			r.push(s)
		}
		i.val(r.join(", ")), i.trigger("change")
	})
}(),
function (e) {
	e.fn.material_select = function (t) {
		function n(e, t, n) {
			var o = e.indexOf(t),
				r = -1 === o;
			return r ? e.push(t) : e.splice(o, 1), n.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"), n.find("option").eq(t).prop("selected", r), i(e, n), r
		}

		function i(e, t) {
			for (var n = "", i = 0, o = e.length; i < o; i++) {
				var r = t.find("option").eq(e[i]).text();
				n += 0 === i ? r : ", " + r
			}
			"" === n && (n = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(n)
		}

		function o() {
			var e = (new Date).getTime();
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
				var n = (e + 16 * Math.random()) % 16 | 0;
				return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
			})
		}
		e(this).each(function () {
			var i = e(this);
			if (!i.hasClass("browser-default")) {
				var r = !!i.attr("multiple"),
					a = !1,
					s = !1,
					l = i.data("select-id");
				if (l && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), e("ul#select-options-" + l).remove()), "destroy" !== t) {
					var c = o();
					i.data("select-id", c);
					var u = e('<div class="select-wrapper"></div>');
					u.addClass(i.attr("class"));
					var d = e('<ul id="select-options-' + c + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
						h = i.children("option, optgroup"),
						f = [],
						p = !1,
						m = i.find("option:selected").html() || i.find("option:first").html() || "",
						g = function () {
							var t = e(this).closest("ul"),
								n = e(this).val();
							t.find("li").find("span.filtrable").each(function () {
								"string" == typeof this.outerText && (this.outerText.toLowerCase().startsWith(n.toLowerCase()) ? (e(this).show(), e(this).parent().show()) : (e(this).hide(), e(this).parent().hide()))
							})
						},
						v = !!i.attr("searchable");
					v && function () {
						var t = i.attr("searchable"),
							n = e('<span class="search-wrap"><input type="text" class="search" placeholder="' + t + '"></span>');
						d.append(n), n.find(".search").keyup(g)
					}();
					var y = function (t, n, i) {
						s = t.attr("searchable");
						var o = n.is(":disabled") ? "disabled " : "",
							r = "optgroup-option" === i ? "optgroup-option " : "";
						"" !== r && (i = "multiple" === t.attr("multiple") ? "multiple" : i, a = !0);
						var l = n.data("icon"),
							c = n.attr("class");
						if (l) {
							var u = "";
							return c && (u = ' class="' + c + '"'), "multiple" === i ? d.append(e('<li class="' + o + '"><img alt="" src="' + l + '"' + u + '><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : d.append(e('<li class="' + o + r + '"><img alt="" src="' + l + '"' + u + '><span class="filtrable">' + n.html() + "</span></li>")), !0
						}
						"multiple" === i ? d.append(e('<li class="' + o + '"><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + n.html() + "</span></li>")) : d.append(e('<li class="' + o + r + '"><span class="filtrable">' + n.html() + "</span></li>"))
					};
					h.length && h.each(function () {
						if (e(this).is("option")) r ? y(i, e(this), "multiple") : y(i, e(this));
						else if (e(this).is("optgroup")) {
							var t = e(this).children("option");
							d.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function () {
								y(i, e(this), "optgroup-option")
							})
						}
					}), d.find("li:not(.optgroup)").each(function (o) {
						e(this).click(function (l) {
							if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
								var c = !0;
								r && a ? (e('input[type="checkbox"]', this).prop("checked", function (e, t) {
									return !t
								}), c = n(f, e(this).index(), i)) : r && s ? (e('input[type="checkbox"]', this).prop("checked", function (e, t) {
									return !t
								}), c = n(f, e(this).index() - 1, i), w.trigger("focus")) : r ? (e('input[type="checkbox"]', this).prop("checked", function (e, t) {
									return !t
								}), c = n(f, e(this).index(), i), w.trigger("focus")) : (d.find("li").removeClass("active"), e(this).toggleClass("active"), w.val(e(this).text())), C(d, e(this)), i.find("option").eq(o).prop("selected", c), i.trigger("change"), void 0 !== t && t()
							}
							l.stopPropagation()
						})
					}), i.wrap(u);
					var b = e('<span class="caret">&#9660;</span>');
					i.is(":disabled") && b.addClass("disabled");
					var x = m.replace(/"/g, "&quot;"),
						w = e('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + c + '" value="' + x + '"/>');
					i.before(w), w.before(b), w.after(d), i.is(":disabled") || w.dropdown({
						hover: !1,
						closeOnClick: !1
					}), i.attr("tabindex") && e(w[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), w.on({
						focus: function () {
							if (e("ul.select-dropdown").not(d[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !d.is(":visible")) {
								e(this).trigger("open", ["focus"]);
								var t = e(this).val(),
									n = d.find("li").filter(function () {
										return e(this).text().toLowerCase() === t.toLowerCase()
									})[0];
								C(d, n)
							}
						},
						click: function (e) {
							e.stopPropagation()
						}
					}), w.on("blur", function () {
						r || v || e(this).trigger("close"), d.find("li.selected").removeClass("selected")
					}), !r && v && d.find("li").on("click", function () {
						w.trigger("close")
					}), d.hover(function () {
						p = !0
					}, function () {
						p = !1
					}), e(window).on({
						click: function () {
							(r || v) && (p || w.trigger("close"))
						}
					}), r && i.find("option:selected:not(:disabled)").each(function () {
						var t = e(this).index();
						n(f, t, i), d.find("li").eq(t).find(":checkbox").prop("checked", !0)
					});
					var C = function (t, n) {
							if (n) {
								t.find("li.selected").removeClass("selected");
								var i = e(n);
								i.addClass("selected"), d.scrollTo(i)
							}
						},
						k = [];
					w.on("keydown", function (t) {
						if (9 != t.which)
							if (40 != t.which || d.is(":visible")) {
								if (13 != t.which || d.is(":visible")) {
									t.preventDefault();
									var n = String.fromCharCode(t.which).toLowerCase(),
										i = [9, 13, 27, 38, 40];
									if (n && -1 === i.indexOf(t.which)) {
										k.push(n);
										var o = k.join(""),
											a = d.find("li").filter(function () {
												return 0 === e(this).text().toLowerCase().indexOf(o)
											})[0];
										a && C(d, a)
									}
									if (13 == t.which) {
										var s = d.find("li.selected:not(.disabled)")[0];
										s && (e(s).trigger("click"), r || w.trigger("close"))
									}
									40 == t.which && (a = d.find("li.selected").length ? d.find("li.selected").next("li:not(.disabled)")[0] : d.find("li:not(.disabled)")[0], C(d, a)), 27 == t.which && w.trigger("close"), 38 == t.which && (a = d.find("li.selected").prev("li:not(.disabled)")[0]) && C(d, a), setTimeout(function () {
										k = []
									}, 1e3)
								}
							} else w.trigger("open");
						else w.trigger("close")
					})
				} else i.data("select-id", null).removeClass("initialized")
			}
		})
	}
}(), jQuery("select").siblings("input.select-dropdown").on("mousedown", function (e) {
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
	}),
	function (e) {
		"function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
	}(function (e) {
		function t(r, s, d, h) {
			function f() {
				return t._.node("div", t._.node("div", t._.node("div", t._.node("div", E.component.nodes(C.open), T.box), T.wrap), T.frame), T.holder, 'tabindex="-1"')
			}

			function p() {
				_.data(s, E).addClass(T.input).val(_.data("value") ? E.get("select", k.format) : r.value), k.editable || _.on("focus." + C.id + " click." + C.id, function (e) {
					e.preventDefault(), E.open()
				}).on("keydown." + C.id, x), o(r, {
					haspopup: !0,
					expanded: !1,
					readonly: !1,
					owns: r.id + "_root"
				})
			}

			function m() {
				o(E.$root[0], "hidden", !0)
			}

			function g() {
				E.$holder.on({
					keydown: x,
					"focus.toOpen": b,
					blur: function () {
						_.removeClass(T.target)
					},
					focusin: function (e) {
						E.$root.removeClass(T.focused), e.stopPropagation()
					},
					"mousedown click": function (t) {
						var n = t.target;
						n != E.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), E.$holder[0].focus()))
					}
				}).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
					var t = e(this),
						n = t.data(),
						i = t.hasClass(T.navDisabled) || t.hasClass(T.disabled),
						o = a();
					o = o && (o.type || o.href), (i || o && !e.contains(E.$root[0], o)) && E.$holder[0].focus(), !i && n.nav ? E.set("highlight", E.component.item.highlight, {
						nav: n.nav
					}) : !i && "pick" in n ? (E.set("select", n.pick), k.closeOnSelect && E.close(!0)) : n.clear ? (E.clear(), k.closeOnClear && E.close(!0)) : n.close && E.close(!0)
				})
			}

			function v() {
				var t;
				!0 === k.hiddenName ? (t = r.name, r.name = "") : t = (t = ["string" == typeof k.hiddenPrefix ? k.hiddenPrefix : "", "string" == typeof k.hiddenSuffix ? k.hiddenSuffix : "_submit"])[0] + r.name + t[1], E._hidden = e('<input type=hidden name="' + t + '"' + (_.data("value") || r.value ? ' value="' + E.get("select", k.formatSubmit) + '"' : "") + ">")[0], _.on("change." + C.id, function () {
					E._hidden.value = r.value ? E.get("select", k.formatSubmit) : ""
				})
			}

			function y() {
				w && u ? E.$holder.find("." + T.frame).one("transitionend", function () {
					E.$holder[0].focus()
				}) : E.$holder[0].focus()
			}

			function b(e) {
				e.stopPropagation(), _.addClass(T.target), E.$root.addClass(T.focused), E.open()
			}

			function x(e) {
				var t = e.keyCode,
					n = /^(8|46)$/.test(t);
				if (27 == t) return E.close(!0), !1;
				(32 == t || n || !C.open && E.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? E.clear().close() : E.open())
			}
			if (!r) return t;
			var w = !1,
				C = {
					id: r.id || "P" + Math.abs(~~(Math.random() * new Date))
				},
				k = d ? e.extend(!0, {}, d.defaults, h) : h || {},
				T = e.extend({}, t.klasses(), k.klass),
				_ = e(r),
				S = function () {
					return this.start()
				},
				E = S.prototype = {
					constructor: S,
					$node: _,
					start: function () {
						return C && C.start ? E : (C.methods = {}, C.start = !0, C.open = !1, C.type = r.type, r.autofocus = r == a(), r.readOnly = !k.editable, r.id = r.id || C.id, "text" != r.type && (r.type = "text"), E.component = new d(E, k), E.$root = e('<div class="' + T.picker + '" id="' + r.id + '_root" />'), m(), E.$holder = e(f()).appendTo(E.$root), g(), k.formatSubmit && v(), p(), k.containerHidden ? e(k.containerHidden).append(E._hidden) : _.after(E._hidden), k.container ? e(k.container).append(E.$root) : _.after(E.$root), E.on({
							start: E.component.onStart,
							render: E.component.onRender,
							stop: E.component.onStop,
							open: E.component.onOpen,
							close: E.component.onClose,
							set: E.component.onSet
						}).on({
							start: k.onStart,
							render: k.onRender,
							stop: k.onStop,
							open: k.onOpen,
							close: k.onClose,
							set: k.onSet
						}), w = n(E.$holder[0]), r.autofocus && E.open(), E.trigger("start").trigger("render"))
					},
					render: function (t) {
						return t ? (E.$holder = e(f()), g(), E.$root.html(E.$holder)) : E.$root.find("." + T.box).html(E.component.nodes(C.open)), E.trigger("render")
					},
					stop: function () {
						return C.start ? (E.close(), E._hidden && E._hidden.parentNode.removeChild(E._hidden), E.$root.remove(), _.removeClass(T.input).removeData(s), setTimeout(function () {
							_.off("." + C.id)
						}, 0), r.type = C.type, r.readOnly = !1, E.trigger("stop"), C.methods = {}, C.start = !1, E) : E
					},
					open: function (n) {
						return C.open ? E : (_.addClass(T.active), o(r, "expanded", !0), setTimeout(function () {
							E.$root.addClass(T.opened), o(E.$root[0], "hidden", !1)
						}, 0), !1 !== n && (C.open = !0, w && c.css("overflow", "hidden").css("padding-right", "+=" + i()), y(), l.on("click." + C.id + " focusin." + C.id, function (e) {
							var t = e.target;
							t != r && t != document && 3 != e.which && E.close(t === E.$holder[0])
						}).on("keydown." + C.id, function (n) {
							var i = n.keyCode,
								o = E.component.key[i],
								r = n.target;
							27 == i ? E.close(!0) : r != E.$holder[0] || !o && 13 != i ? e.contains(E.$root[0], r) && 13 == i && (n.preventDefault(), r.click()) : (n.preventDefault(), o ? t._.trigger(E.component.key.go, E, [t._.trigger(o)]) : E.$root.find("." + T.highlighted).hasClass(T.disabled) || (E.set("select", E.component.item.highlight), k.closeOnSelect && E.close(!0)))
						})), E.trigger("open"))
					},
					close: function (e) {
						return e && (k.editable ? r.focus() : (E.$holder.off("focus.toOpen").focus(), setTimeout(function () {
							E.$holder.on("focus.toOpen", b)
						}, 0))), _.removeClass(T.active), o(r, "expanded", !1), setTimeout(function () {
							E.$root.removeClass(T.opened + " " + T.focused), o(E.$root[0], "hidden", !0)
						}, 0), C.open ? (C.open = !1, w && c.css("overflow", "").css("padding-right", "-=" + i()), l.off("." + C.id), E.trigger("close")) : E
					},
					clear: function (e) {
						return E.set("clear", null, e)
					},
					set: function (t, n, i) {
						var o, r, a = e.isPlainObject(t),
							s = a ? t : {};
						if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
							a || (s[t] = n);
							for (o in s) r = s[o], o in E.component.item && (void 0 === r && (r = null), E.component.set(o, r, i)), "select" != o && "clear" != o || _.val("clear" == o ? "" : E.get(o, k.format)).trigger("change");
							E.render()
						}
						return i.muted ? E : E.trigger("set", s)
					},
					get: function (e, n) {
						if (e = e || "value", null != C[e]) return C[e];
						if ("valueSubmit" == e) {
							if (E._hidden) return E._hidden.value;
							e = "value"
						}
						if ("value" == e) return r.value;
						if (e in E.component.item) {
							if ("string" == typeof n) {
								var i = E.component.get(e);
								return i ? t._.trigger(E.component.formats.toString, E.component, [n, i]) : ""
							}
							return E.component.get(e)
						}
					},
					on: function (t, n, i) {
						var o, r, a = e.isPlainObject(t),
							s = a ? t : {};
						if (t) {
							a || (s[t] = n);
							for (o in s) r = s[o], i && (o = "_" + o), C.methods[o] = C.methods[o] || [], C.methods[o].push(r)
						}
						return E
					},
					off: function () {
						var e, t, n = arguments;
						for (e = 0, namesCount = n.length; e < namesCount; e += 1)(t = n[e]) in C.methods && delete C.methods[t];
						return E
					},
					trigger: function (e, n) {
						var i = function (e) {
							var i = C.methods[e];
							i && i.map(function (e) {
								t._.trigger(e, E, [n])
							})
						};
						return i("_" + e), i(e), E
					}
				};
			return new S
		}

		function n(e) {
			var t;
			return e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position), "fixed" == t
		}

		function i() {
			if (c.height() <= s.height()) return 0;
			var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
				n = t[0].offsetWidth;
			t.css("overflow", "scroll");
			var i = e('<div style="width:100%" />').appendTo(t)[0].offsetWidth;
			return t.remove(), n - i
		}

		function o(t, n, i) {
			if (e.isPlainObject(n))
				for (var o in n) r(t, o, n[o]);
			else r(t, n, i)
		}

		function r(e, t, n) {
			e.setAttribute(("role" == t ? "" : "aria-") + t, n)
		}

		function a() {
			try {
				return document.activeElement
			} catch (e) {}
		}
		var s = e(window),
			l = e(document),
			c = e(document.documentElement),
			u = null != document.documentElement.style.transition;
		return t.klasses = function (e) {
			return e = e || "picker", {
				picker: e,
				opened: e + "--opened",
				focused: e + "--focused",
				input: e + "__input",
				active: e + "__input--active",
				target: e + "__input--target",
				holder: e + "__holder",
				frame: e + "__frame",
				wrap: e + "__wrap",
				box: e + "__box"
			}
		}, t._ = {
			group: function (e) {
				for (var n, i = "", o = t._.trigger(e.min, e); o <= t._.trigger(e.max, e, [o]); o += e.i) n = t._.trigger(e.item, e, [o]), i += t._.node(e.node, n[0], n[1], n[2]);
				return i
			},
			node: function (t, n, i, o) {
				return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", o = o ? " " + o : "", "<" + t + i + o + ">" + n + "</" + t + ">") : ""
			},
			lead: function (e) {
				return (e < 10 ? "0" : "") + e
			},
			trigger: function (e, t, n) {
				return "function" == typeof e ? e.apply(t, n || []) : e
			},
			digits: function (e) {
				return /\d/.test(e[1]) ? 2 : 1
			},
			isDate: function (e) {
				return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
			},
			isInteger: function (e) {
				return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
			},
			ariaAttr: function (t, n) {
				e.isPlainObject(t) || (t = {
					attribute: n
				}), n = "";
				for (var i in t) {
					var o = ("role" == i ? "" : "aria-") + i;
					n += null == t[i] ? "" : o + '="' + t[i] + '"'
				}
				return n
			}
		}, t.extend = function (n, i) {
			e.fn[n] = function (o, r) {
				var a = this.data(n);
				return "picker" == o ? a : a && "string" == typeof o ? t._.trigger(a[o], a, [r]) : this.each(function () {
					e(this).data(n) || new t(this, n, i, o)
				})
			}, e.fn[n].defaults = i.defaults
		}, t
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
	}(function (e, t) {
		function n(e, t) {
			var n = this,
				i = e.$node[0],
				o = i.value,
				r = e.$node.data("value"),
				a = r || o,
				s = r ? t.formatSubmit : t.format,
				l = function () {
					return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
				};
			n.settings = t, n.$node = e.$node, n.queue = {
				min: "measure create",
				max: "measure create",
				now: "now create",
				select: "parse create validate",
				highlight: "parse navigate create validate",
				view: "parse create validate viewset",
				disable: "deactivate",
				enable: "activate"
			}, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = - function (e) {
				return !0 === e[0] ? e.shift() : -1
			}(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), a ? n.set("select", a, {
				format: s,
				defaultValue: !0
			}) : n.set("select", null).set("highlight", n.item.now), n.key = {
				40: 7,
				38: -7,
				39: function () {
					return l() ? -1 : 1
				},
				37: function () {
					return l() ? 1 : -1
				},
				go: function (e) {
					var t = n.item.highlight,
						i = new Date(t.year, t.month, t.date + e);
					n.set("highlight", i, {
						interval: e
					}), this.render()
				}
			}, e.on("render", function () {
				e.$root.find("." + t.klass.selectMonth).on("change", function () {
					var n = this.value;
					n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
				}), e.$root.find("." + t.klass.selectYear).on("change", function () {
					var n = this.value;
					n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
				})
			}, 1).on("open", function () {
				var i = "";
				n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
			}, 1).on("close", function () {
				e.$root.find("button, select").attr("disabled", !0)
			}, 1)
		}
		var i = e._;
		n.prototype.set = function (e, t, n) {
			var i = this,
				o = i.item;
			return null === t ? ("clear" == e && (e = "select"), o[e] = t, i) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function (o) {
				return t = i[o](e, t, n)
			}).pop(), "select" == e ? i.set("highlight", o.select, n) : "highlight" == e ? i.set("view", o.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
		}, n.prototype.get = function (e) {
			return this.item[e]
		}, n.prototype.create = function (e, n, o) {
			var r, a = this;
			return n = void 0 === n ? e : n, n == -1 / 0 || n == 1 / 0 ? r = n : t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : a.create().obj) : n = i.isInteger(n) || i.isDate(n) ? a.normalize(new Date(n), o) : a.now(e, n, o), {
				year: r || n.getFullYear(),
				month: r || n.getMonth(),
				date: r || n.getDate(),
				day: r || n.getDay(),
				obj: r || n,
				pick: r || n.getTime()
			}
		}, n.prototype.createRange = function (e, n) {
			var o = this,
				r = function (e) {
					return !0 === e || t.isArray(e) || i.isDate(e) ? o.create(e) : e
				};
			return i.isInteger(e) || (e = r(e)), i.isInteger(n) || (n = r(n)), i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
				from: r(e),
				to: r(n)
			}
		}, n.prototype.withinRange = function (e, t) {
			return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
		}, n.prototype.overlapRanges = function (e, t) {
			var n = this;
			return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
		}, n.prototype.now = function (e, t, n) {
			return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
		}, n.prototype.navigate = function (e, n, i) {
			var o, r, a, s, l = t.isArray(n),
				c = t.isPlainObject(n),
				u = this.item.view;
			if (l || c) {
				for (c ? (r = n.year, a = n.month, s = n.date) : (r = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (r = u.year, a = u.month), r = (o = new Date(r, a + (i && i.nav ? i.nav : 0), 1)).getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
				n = [r, a, s]
			}
			return n
		}, n.prototype.normalize = function (e) {
			return e.setHours(0, 0, 0, 0), e
		}, n.prototype.measure = function (e, t) {
			var n = this;
			return t ? "string" == typeof t ? t = n.parse(e, t) : i.isInteger(t) && (t = n.now(e, t, {
				rel: t
			})) : t = "min" == e ? -1 / 0 : 1 / 0, t
		}, n.prototype.viewset = function (e, t) {
			return this.create([t.year, t.month, 1])
		}, n.prototype.validate = function (e, n, o) {
			var r, a, s, l, c = this,
				u = n,
				d = o && o.interval ? o.interval : 1,
				h = -1 === c.item.enable,
				f = c.item.min,
				p = c.item.max,
				m = h && c.item.disable.filter(function (e) {
					if (t.isArray(e)) {
						var o = c.create(e).pick;
						o < n.pick ? r = !0 : o > n.pick && (a = !0)
					}
					return i.isInteger(e)
				}).length;
			if ((!o || !o.nav && !o.defaultValue) && (!h && c.disabled(n) || h && c.disabled(n) && (m || r || a) || !h && (n.pick <= f.pick || n.pick >= p.pick)))
				for (h && !m && (!a && d > 0 || !r && d < 0) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, d = 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= p.pick && (l = !0, d = -1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : 1)])), !s || !l);) n = c.create([n.year, n.month, n.date + d]);
			return n
		}, n.prototype.disabled = function (e) {
			var n = this,
				o = n.item.disable.filter(function (o) {
					return i.isInteger(o) ? e.day === (n.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || i.isDate(o) ? e.pick === n.create(o).pick : t.isPlainObject(o) ? n.withinRange(o, e) : void 0
				});
			return o = o.length && !o.filter(function (e) {
				return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
			}).length, -1 === n.item.enable ? !o : o || e.pick < n.item.min.pick || e.pick > n.item.max.pick
		}, n.prototype.parse = function (e, t, n) {
			var o = this,
				r = {};
			return t && "string" == typeof t ? (n && n.format || ((n = n || {}).format = o.settings.format), o.formats.toArray(n.format).map(function (e) {
				var n = o.formats[e],
					a = n ? i.trigger(n, o, [t, r]) : e.replace(/^!/, "").length;
				n && (r[e] = t.substr(0, a)), t = t.substr(a)
			}), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
		}, n.prototype.formats = function () {
			function e(e, t, n) {
				var i = e.match(/[^\x00-\x7F]+|\w+/)[0];
				return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
			}

			function t(e) {
				return e.match(/\w+/)[0].length
			}
			return {
				d: function (e, t) {
					return e ? i.digits(e) : t.date
				},
				dd: function (e, t) {
					return e ? 2 : i.lead(t.date)
				},
				ddd: function (e, n) {
					return e ? t(e) : this.settings.weekdaysShort[n.day]
				},
				dddd: function (e, n) {
					return e ? t(e) : this.settings.weekdaysFull[n.day]
				},
				m: function (e, t) {
					return e ? i.digits(e) : t.month + 1
				},
				mm: function (e, t) {
					return e ? 2 : i.lead(t.month + 1)
				},
				mmm: function (t, n) {
					var i = this.settings.monthsShort;
					return t ? e(t, i, n) : i[n.month]
				},
				mmmm: function (t, n) {
					var i = this.settings.monthsFull;
					return t ? e(t, i, n) : i[n.month]
				},
				yy: function (e, t) {
					return e ? 2 : ("" + t.year).slice(2)
				},
				yyyy: function (e, t) {
					return e ? 4 : t.year
				},
				toArray: function (e) {
					return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
				},
				toString: function (e, t) {
					var n = this;
					return n.formats.toArray(e).map(function (e) {
						return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
					}).join("")
				}
			}
		}(), n.prototype.isDateExact = function (e, n) {
			var o = this;
			return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? o.create(e).pick === o.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (o.isDateExact(e.from, n.from) && o.isDateExact(e.to, n.to))
		}, n.prototype.isDateOverlap = function (e, n) {
			var o = this,
				r = o.settings.firstDay ? 1 : 0;
			return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + r) === o.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + r) === o.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && o.overlapRanges(e, n)
		}, n.prototype.flipEnable = function (e) {
			var t = this.item;
			t.enable = e || (-1 == t.enable ? 1 : -1)
		}, n.prototype.deactivate = function (e, n) {
			var o = this,
				r = o.item.disable.slice(0);
			return "flip" == n ? o.flipEnable() : !1 === n ? (o.flipEnable(1), r = []) : !0 === n ? (o.flipEnable(-1), r = []) : n.map(function (e) {
				for (var n, a = 0; a < r.length; a += 1)
					if (o.isDateExact(e, r[a])) {
						n = !0;
						break
					}
				n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
			}), r
		}, n.prototype.activate = function (e, n) {
			var o = this,
				r = o.item.disable,
				a = r.length;
			return "flip" == n ? o.flipEnable() : !0 === n ? (o.flipEnable(1), r = []) : !1 === n ? (o.flipEnable(-1), r = []) : n.map(function (e) {
				var n, s, l, c;
				for (l = 0; l < a; l += 1) {
					if (s = r[l], o.isDateExact(s, e)) {
						n = r[l] = null, c = !0;
						break
					}
					if (o.isDateOverlap(s, e)) {
						t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e)[3] || n.push("inverted") : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
						break
					}
				}
				if (n)
					for (l = 0; l < a; l += 1)
						if (o.isDateExact(r[l], e)) {
							r[l] = null;
							break
						}
				if (c)
					for (l = 0; l < a; l += 1)
						if (o.isDateOverlap(r[l], e)) {
							r[l] = null;
							break
						}
				n && r.push(n)
			}), r.filter(function (e) {
				return null != e
			})
		}, n.prototype.nodes = function (e) {
			var t = this,
				n = t.settings,
				o = t.item,
				r = o.now,
				a = o.select,
				s = o.highlight,
				l = o.view,
				c = o.disable,
				u = o.min,
				d = o.max,
				h = function (e, t) {
					return n.firstDay && (e.push(e.shift()), t.push(t.shift())), i.node("thead", i.node("tr", i.group({
						min: 0,
						max: 6,
						i: 1,
						node: "th",
						item: function (i) {
							return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
						}
					})))
				}((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysShort).slice(0), n.weekdaysFull.slice(0)),
				f = function (e) {
					return i.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && l.year >= d.year && l.month >= d.month || !e && l.year <= u.year && l.month <= u.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
						role: "button",
						controls: t.$node[0].id + "_table"
					}) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
				},
				p = function () {
					var o = n.showMonthsShort ? n.monthsShort : n.monthsFull;
					return n.selectMonths ? i.node("select", i.group({
						min: 0,
						max: 11,
						i: 1,
						node: "option",
						item: function (e) {
							return [o[e], 0, "value=" + e + (l.month == e ? " selected" : "") + (l.year == u.year && e < u.month || l.year == d.year && e > d.month ? " disabled" : "")]
						}
					}), n.klass.selectMonth, (e ? "" : "disabled") + " " + i.ariaAttr({
						controls: t.$node[0].id + "_table"
					}) + ' title="' + n.labelMonthSelect + '"') : i.node("div", o[l.month], n.klass.month)
				},
				m = function () {
					var o = l.year,
						r = !0 === n.selectYears ? 5 : ~~(n.selectYears / 2);
					if (r) {
						var a = u.year,
							s = d.year,
							c = o - r,
							h = o + r;
						if (a > c && (h += a - c, c = a), s < h) {
							var f = c - a,
								p = h - s;
							c -= f > p ? p : f, h = s
						}
						return i.node("select", i.group({
							min: c,
							max: h,
							i: 1,
							node: "option",
							item: function (e) {
								return [e, 0, "value=" + e + (o == e ? " selected" : "")]
							}
						}), n.klass.selectYear, (e ? "" : "disabled") + " " + i.ariaAttr({
							controls: t.$node[0].id + "_table"
						}) + ' title="' + n.labelYearSelect + '"')
					}
					return i.node("div", o, n.klass.year)
				};
			return i.node("div", (n.selectYears ? m() + p() : p() + m()) + f() + f(1), n.klass.header) + i.node("table", h + i.node("tbody", i.group({
				min: 0,
				max: 5,
				i: 1,
				node: "tr",
				item: function (e) {
					var o = n.firstDay && 0 === t.create([l.year, l.month, 1]).day ? -7 : 0;
					return [i.group({
						min: 7 * e - l.day + o + 1,
						max: function () {
							return this.min + 7 - 1
						},
						i: 1,
						node: "td",
						item: function (e) {
							e = t.create([l.year, l.month, e + (n.firstDay ? 1 : 0)]);
							var o = a && a.pick == e.pick,
								h = s && s.pick == e.pick,
								f = c && t.disabled(e) || e.pick < u.pick || e.pick > d.pick,
								p = i.trigger(t.formats.toString, t, [n.format, e]);
							return [i.node("div", e.date, function (t) {
								return t.push(l.month == e.month ? n.klass.infocus : n.klass.outfocus), r.pick == e.pick && t.push(n.klass.now), o && t.push(n.klass.selected), h && t.push(n.klass.highlighted), f && t.push(n.klass.disabled), t.join(" ")
							}([n.klass.day]), "data-pick=" + e.pick + " " + i.ariaAttr({
								role: "gridcell",
								label: p,
								selected: !(!o || t.$node.val() !== p) || null,
								activedescendant: !!h || null,
								disabled: !!f || null
							})), "", i.ariaAttr({
								role: "presentation"
							})]
						}
					})]
				}
			})), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + i.ariaAttr({
				role: "grid",
				controls: t.$node[0].id,
				readonly: !0
			})) + i.node("div", i.node("button", n.today, n.klass.buttonToday, "type=button data-pick=" + r.pick + (e && !t.disabled(r) ? "" : " disabled") + " " + i.ariaAttr({
				controls: t.$node[0].id
			})) + i.node("button", n.clear, n.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + i.ariaAttr({
				controls: t.$node[0].id
			})) + i.node("button", n.close, n.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + i.ariaAttr({
				controls: t.$node[0].id
			})), n.klass.footer)
		}, n.defaults = function (e) {
			return {
				labelMonthNext: "Next month",
				labelMonthPrev: "Previous month",
				labelMonthSelect: "Select a month",
				labelYearSelect: "Select a year",
				monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				today: "Today",
				clear: "Clear",
				close: "Close",
				closeOnSelect: !0,
				closeOnClear: !0,
				format: "d mmmm, yyyy",
				klass: {
					table: e + "table",
					header: e + "header",
					navPrev: e + "nav--prev",
					navNext: e + "nav--next",
					navDisabled: e + "nav--disabled",
					month: e + "month",
					year: e + "year",
					selectMonth: e + "select--month",
					selectYear: e + "select--year",
					weekdays: e + "weekday",
					day: e + "day",
					disabled: e + "day--disabled",
					selected: e + "day--selected",
					highlighted: e + "day--highlighted",
					now: e + "day--today",
					infocus: e + "day--infocus",
					outfocus: e + "day--outfocus",
					footer: e + "footer",
					buttonClear: e + "button--clear",
					buttonToday: e + "button--today",
					buttonClose: e + "button--close"
				}
			}
		}(e.klasses().picker + "__"), e.extend("pickadate", n)
	}), $.extend($.fn.pickadate.defaults, {
		selectMonths: !0,
		selectYears: 15,
		onRender: function () {
			var e = this.$root,
				t = this.get("highlight", "yyyy"),
				n = this.get("highlight", "dd"),
				i = this.get("highlight", "mmm"),
				o = this.get("highlight", "dddd");
			e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + i + '</div></div><div class="picker__day-display"><div>' + n + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
		}
	}),
	function () {
		function e(e) {
			return document.createElementNS(l, e)
		}

		function t(e) {
			return (e < 10 ? "0" : "") + e
		}

		function n(e) {
			var t = ++g + "";
			return e ? e + t : t
		}

		function i(i, a) {
			function l(e, t) {
				var n = d.offset(),
					i = /^touch/.test(e.type),
					o = n.left + v,
					r = n.top + v,
					l = (i ? e.originalEvent.touches[0] : e).pageX - o,
					u = (i ? e.originalEvent.touches[0] : e).pageY - r,
					h = Math.sqrt(l * l + u * u),
					m = !1;
				if (!t || !(h < y - x || h > y + x)) {
					e.preventDefault();
					var g = setTimeout(function () {
						I.popover.addClass("clockpicker-moving")
					}, 200);
					c && d.append(I.canvas), I.setHand(l, u, !t, !0), s.off(f).on(f, function (e) {
						e.preventDefault();
						var t = /^touch/.test(e.type),
							n = (t ? e.originalEvent.touches[0] : e).pageX - o,
							i = (t ? e.originalEvent.touches[0] : e).pageY - r;
						(m || n !== l || i !== u) && (m = !0, I.setHand(n, i, !1, !0))
					}), s.off(p).on(p, function (e) {
						s.off(p), e.preventDefault();
						var n = /^touch/.test(e.type),
							i = (n ? e.originalEvent.changedTouches[0] : e).pageX - o,
							c = (n ? e.originalEvent.changedTouches[0] : e).pageY - r;
						(t || m) && i === l && c === u && I.setHand(i, c), "hours" === I.currentView ? I.toggleView("minutes", C / 2) : a.autoclose && (I.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
							I.done()
						}, C / 2)), d.prepend(R), clearTimeout(g), I.popover.removeClass("clockpicker-moving"), s.off(f)
					})
				}
			}
			var u = r(k),
				d = u.find(".clockpicker-plate"),
				m = u.find(".picker__holder"),
				g = u.find(".clockpicker-hours"),
				T = u.find(".clockpicker-minutes"),
				_ = u.find(".clockpicker-am-pm-block"),
				S = "INPUT" === i.prop("tagName"),
				E = S ? i : i.find("input"),
				A = r("label[for=" + E.attr("id") + "]"),
				I = this;
			if (this.id = n("cp"), this.element = i, this.holder = m, this.options = a, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = S, this.input = E, this.label = A, this.popover = u, this.plate = d, this.hoursView = g, this.minutesView = T, this.amPmBlock = _, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", a.twelvehour) {
				var D = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
				r(D);
				a.ampmclickable ? (this.spanAmPm.empty(), r('<div id="click-am">AM</div>').on("click", function () {
					I.spanAmPm.children("#click-am").addClass("text-primary"), I.spanAmPm.children("#click-pm").removeClass("text-primary"), I.amOrPm = "AM"
				}).appendTo(this.spanAmPm), r('<div id="click-pm">PM</div>').on("click", function () {
					I.spanAmPm.children("#click-pm").addClass("text-primary"), I.spanAmPm.children("#click-am").removeClass("text-primary"), I.amOrPm = "PM"
				}).appendTo(this.spanAmPm)) : (r('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
					I.amOrPm = "AM", I.amPmBlock.children(".pm-button").removeClass("active"), I.amPmBlock.children(".am-button").addClass("active"), I.spanAmPm.empty().append("AM")
				}).appendTo(this.amPmBlock), r('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
					I.amOrPm = "PM", I.amPmBlock.children(".am-button").removeClass("active"), I.amPmBlock.children(".pm-button").addClass("active"), I.spanAmPm.empty().append("PM")
				}).appendTo(this.amPmBlock))
			}
			a.darktheme && u.addClass("darktheme"), r('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (a.twelvehour ? "3" : "1") + '">' + a.donetext + "</button>").click(r.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(r.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(r.proxy(this.toggleView, this, "minutes")), E.on("focus.clockpicker click.clockpicker", r.proxy(this.show, this));
			var O, P, M, L, F = r('<div class="clockpicker-tick"></div>');
			if (a.twelvehour)
				for (O = 1; O < 13; O += 1) P = F.clone(), M = O / 6 * Math.PI, L = y, P.css("font-size", "140%"), P.css({
					left: v + Math.sin(M) * L - x,
					top: v - Math.cos(M) * L - x
				}), P.html(0 === O ? "00" : O), g.append(P), P.on(h, l);
			else
				for (O = 0; O < 24; O += 1) {
					P = F.clone(), M = O / 6 * Math.PI;
					var N = O > 0 && O < 13;
					L = N ? b : y, P.css({
						left: v + Math.sin(M) * L - x,
						top: v - Math.cos(M) * L - x
					}), N && P.css("font-size", "120%"), P.html(0 === O ? "00" : O), g.append(P), P.on(h, l)
				}
			for (O = 0; O < 60; O += 5) P = F.clone(), M = O / 30 * Math.PI, P.css({
				left: v + Math.sin(M) * y - x,
				top: v - Math.cos(M) * y - x
			}), P.css("font-size", "140%"), P.html(t(O)), T.append(P), P.on(h, l);
			if (d.on(h, function (e) {
					0 === r(e.target).closest(".clockpicker-tick").length && l(e, !0)
				}), c) {
				var R = u.find(".clockpicker-canvas"),
					W = e("svg");
				W.setAttribute("class", "clockpicker-svg"), W.setAttribute("width", w), W.setAttribute("height", w);
				var H = e("g");
				H.setAttribute("transform", "translate(" + v + "," + v + ")");
				var V = e("circle");
				V.setAttribute("class", "clockpicker-canvas-bearing"), V.setAttribute("cx", 0), V.setAttribute("cy", 0), V.setAttribute("r", 2);
				var j = e("line");
				j.setAttribute("x1", 0), j.setAttribute("y1", 0);
				var B = e("circle");
				B.setAttribute("class", "clockpicker-canvas-bg"), B.setAttribute("r", x);
				var z = e("circle");
				z.setAttribute("class", "clockpicker-canvas-fg"), z.setAttribute("r", 5), H.appendChild(j), H.appendChild(B), H.appendChild(z), H.appendChild(V), W.appendChild(H), R.append(W), this.hand = j, this.bg = B, this.fg = z, this.bearing = V, this.g = H, this.canvas = R
			}
			o(this.options.init)
		}

		function o(e) {
			e && "function" == typeof e && e()
		}
		var r = window.jQuery,
			a = r(window),
			s = r(document),
			l = "http://www.w3.org/2000/svg",
			c = "SVGAngle" in window && function () {
				var e, t = document.createElement("div");
				return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == l, t.innerHTML = "", e
			}(),
			u = function () {
				var e = document.createElement("div").style;
				return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "OTransition" in e
			}(),
			d = "ontouchstart" in window,
			h = "mousedown" + (d ? " touchstart" : ""),
			f = "mousemove.clockpicker" + (d ? " touchmove.clockpicker" : ""),
			p = "mouseup.clockpicker" + (d ? " touchend.clockpicker" : ""),
			m = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
			g = 0,
			v = 135,
			y = 110,
			b = 80,
			x = 20,
			w = 2 * v,
			C = u ? 350 : 1,
			k = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
		i.DEFAULTS = {
			default: "",
			fromnow: 0,
			donetext: "Done",
			autoclose: !1,
			ampmclickable: !1,
			darktheme: !1,
			twelvehour: !0,
			vibrate: !0
		}, i.prototype.toggle = function () {
			this[this.isShown ? "hide" : "show"]()
		}, i.prototype.locate = function () {
			var e = this.element,
				t = this.popover;
			e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
			t.show()
		}, i.prototype.show = function (e) {
			if (!this.isShown) {
				o(this.options.beforeShow), r(":input").each(function () {
					r(this).attr("tabindex", -1)
				});
				var n = this;
				this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), r(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), a.on("resize.clockpicker" + this.id, function () {
					n.isShown && n.locate()
				}), this.isAppended = !0);
				var i = ((this.input.prop("value") || this.options.default || "") + "").split(":");
				if (this.options.twelvehour && void 0 !== i[1] && (i[1] = i[1].replace("AM", "").replace("PM", "")), "now" === i[0]) {
					var l = new Date(+new Date + this.options.fromnow);
					i = [l.getHours(), l.getMinutes()]
				}
				this.hours = +i[0] || 0, this.minutes = +i[1] || 0, this.spanHours.html(t(this.hours)), this.spanMinutes.html(t(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, s.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (e) {
					var t = r(e.target);
					0 === t.closest(n.popover.find(".picker__wrap")).length && 0 === t.closest(n.input).length && n.hide()
				}), s.on("keyup.clockpicker." + this.id, function (e) {
					27 === e.keyCode && n.hide()
				}), o(this.options.afterShow)
			}
		}, i.prototype.hide = function () {
			o(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), r(document.body).css("overflow", "visible"), this.isShown = !1, r(":input").each(function (e) {
				r(this).attr("tabindex", e + 1)
			}), s.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), s.off("keyup.clockpicker." + this.id), this.popover.hide(), o(this.options.afterHide)
		}, i.prototype.toggleView = function (e, t) {
			var n = !1;
			"minutes" === e && "visible" === r(this.hoursView).css("visibility") && (o(this.options.beforeHourSelect), n = !0);
			var i = "hours" === e,
				a = i ? this.hoursView : this.minutesView,
				s = i ? this.minutesView : this.hoursView;
			this.currentView = e, this.spanHours.toggleClass("text-primary", i), this.spanMinutes.toggleClass("text-primary", !i), s.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
				s.css("visibility", "hidden")
			}, C), n && o(this.options.afterHourSelect)
		}, i.prototype.resetClock = function (e) {
			var t = this.currentView,
				n = this[t],
				i = "hours" === t,
				o = n * (Math.PI / (i ? 6 : 30)),
				r = i && n > 0 && n < 13 ? b : y,
				a = Math.sin(o) * r,
				s = -Math.cos(o) * r,
				l = this;
			c && e ? (l.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
				l.canvas.removeClass("clockpicker-canvas-out"), l.setHand(a, s)
			}, e)) : this.setHand(a, s)
		}, i.prototype.setHand = function (e, n, i, o) {
			var a, s = Math.atan2(e, -n),
				l = "hours" === this.currentView,
				u = Math.PI / (l || i ? 6 : 30),
				d = Math.sqrt(e * e + n * n),
				h = this.options,
				f = l && d < (y + b) / 2,
				p = f ? b : y;
			if (h.twelvehour && (p = y), s < 0 && (s = 2 * Math.PI + s), a = Math.round(s / u), s = a * u, h.twelvehour ? l ? 0 === a && (a = 12) : (i && (a *= 5), 60 === a && (a = 0)) : l ? (12 === a && (a = 0), a = f ? 0 === a ? 12 : a : 0 === a ? 0 : a + 12) : (i && (a *= 5), 60 === a && (a = 0)), l ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && m && this.options.vibrate && (this.vibrateTimer || (navigator[m](10), this.vibrateTimer = setTimeout(r.proxy(function () {
					this.vibrateTimer = null
				}, this), 100))), this[this.currentView] = a, this[l ? "spanHours" : "spanMinutes"].html(t(a)), c) {
				o || !l && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
				var g = Math.sin(s) * (p - x),
					v = -Math.cos(s) * (p - x),
					w = Math.sin(s) * p,
					C = -Math.cos(s) * p;
				this.hand.setAttribute("x2", g), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", w), this.bg.setAttribute("cy", C), this.fg.setAttribute("cx", w), this.fg.setAttribute("cy", C)
			} else this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
				var e = r(this);
				e.toggleClass("active", a === +e.html())
			})
		}, i.prototype.done = function () {
			o(this.options.beforeDone), this.hide(), this.label.addClass("active");
			var e = this.input.prop("value"),
				n = t(this.hours) + ":" + t(this.minutes);
			this.options.twelvehour && (n += this.amOrPm), this.input.prop("value", n), n !== e && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), o(this.options.afterDone)
		}, i.prototype.remove = function () {
			this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (a.off("resize.clockpicker" + this.id), this.popover.remove())
		}, r.fn.pickatime = function (e) {
			var t = Array.prototype.slice.call(arguments, 1);
			return this.each(function () {
				var n = r(this),
					o = n.data("clockpicker");
				if (o) "function" == typeof o[e] && o[e].apply(o, t);
				else {
					var a = r.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
					n.data("clockpicker", new i(n, a))
				}
			})
		}
	}(),
	function (e, t) {
		"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
	}(this, function () {
		"use strict";
		return function (e, t, n, i) {
			var o = {
				features: null,
				bind: function (e, t, n, i) {
					var o = (i ? "remove" : "add") + "EventListener";
					t = t.split(" ");
					for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
				},
				isArray: function (e) {
					return e instanceof Array
				},
				createEl: function (e, t) {
					var n = document.createElement(t || "div");
					return e && (n.className = e), n
				},
				getScrollY: function () {
					var e = window.pageYOffset;
					return void 0 !== e ? e : document.documentElement.scrollTop
				},
				unbind: function (e, t, n) {
					o.bind(e, t, n, !0)
				},
				removeClass: function (e, t) {
					var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
					e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
				},
				addClass: function (e, t) {
					o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
				},
				hasClass: function (e, t) {
					return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
				},
				getChildByClass: function (e, t) {
					for (var n = e.firstChild; n;) {
						if (o.hasClass(n, t)) return n;
						n = n.nextSibling
					}
				},
				arraySearch: function (e, t, n) {
					for (var i = e.length; i--;)
						if (e[i][n] === t) return i;
					return -1
				},
				extend: function (e, t, n) {
					for (var i in t)
						if (t.hasOwnProperty(i)) {
							if (n && e.hasOwnProperty(i)) continue;
							e[i] = t[i]
						}
				},
				easing: {
					sine: {
						out: function (e) {
							return Math.sin(e * (Math.PI / 2))
						},
						inOut: function (e) {
							return -(Math.cos(Math.PI * e) - 1) / 2
						}
					},
					cubic: {
						out: function (e) {
							return --e * e * e + 1
						}
					}
				},
				detectFeatures: function () {
					if (o.features) return o.features;
					var e = o.createEl().style,
						t = "",
						n = {};
					if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
						var i = navigator.userAgent;
						if (/iP(hone|od)/.test(navigator.platform)) {
							var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
							r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && 8 > r && (n.isOldIOSPhone = !0)
						}
						var a = i.match(/Android\s([0-9\.]*)/),
							s = a ? a[1] : 0;
						(s = parseFloat(s)) >= 1 && (4.4 > s && (n.isOldAndroid = !0), n.androidVersion = s), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
					}
					for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
						t = d[h];
						for (var f = 0; 3 > f; f++) l = u[f], c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !n[l] && c in e && (n[l] = c);
						t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
					}
					if (!n.raf) {
						var p = 0;
						n.raf = function (e) {
							var t = (new Date).getTime(),
								n = Math.max(0, 16 - (t - p)),
								i = window.setTimeout(function () {
									e(t + n)
								}, n);
							return p = t + n, i
						}, n.caf = function (e) {
							clearTimeout(e)
						}
					}
					return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
				}
			};
			o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
				t = t.split(" ");
				for (var o, r = (i ? "detach" : "attach") + "Event", a = 0; a < t.length; a++)
					if (o = t[a])
						if ("object" == typeof n && n.handleEvent) {
							if (i) {
								if (!n["oldIE" + o]) return !1
							} else n["oldIE" + o] = function () {
								n.handleEvent.call(n)
							};
							e[r]("on" + o, n["oldIE" + o])
						} else e[r]("on" + o, n)
			});
			var r = this,
				a = {
					allowPanToNext: !0,
					spacing: .12,
					bgOpacity: 1,
					mouseUsed: !1,
					loop: !0,
					pinchToClose: !0,
					closeOnScroll: !0,
					closeOnVerticalDrag: !0,
					verticalDragRange: .75,
					hideAnimationDuration: 333,
					showAnimationDuration: 333,
					showHideOpacity: !1,
					focus: !0,
					escKey: !0,
					arrowKeys: !0,
					mainScrollEndFriction: .35,
					panEndFriction: .35,
					isClickableElement: function (e) {
						return "A" === e.tagName
					},
					getDoubleTapZoom: function (e, t) {
						return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
					},
					maxSpreadZoom: 1.33,
					modal: !0,
					scaleMode: "fit"
				};
			o.extend(a, i);
			var s, l, c, u, d, h, f, p, m, g, v, y, b, x, w, C, k, T, _, S, E, A, I, D, O, P, M, L, F, N, R, W, H, V, j, B, z, q, $, Y, X, U, Q, G, K, Z, J, ee, te, ne, ie, oe, re, ae, se, le, ce = {
					x: 0,
					y: 0
				},
				ue = {
					x: 0,
					y: 0
				},
				de = {
					x: 0,
					y: 0
				},
				he = {},
				fe = 0,
				pe = {},
				me = {
					x: 0,
					y: 0
				},
				ge = 0,
				ve = !0,
				ye = [],
				be = {},
				xe = !1,
				we = function (e, t) {
					o.extend(r, t.publicMethods), ye.push(e)
				},
				Ce = function (e) {
					var t = Ut();
					return e > t - 1 ? e - t : 0 > e ? t + e : e
				},
				ke = {},
				Te = function (e, t) {
					return ke[e] || (ke[e] = []), ke[e].push(t)
				},
				_e = function (e) {
					var t = ke[e];
					if (t) {
						var n = Array.prototype.slice.call(arguments);
						n.shift();
						for (var i = 0; i < t.length; i++) t[i].apply(r, n)
					}
				},
				Se = function () {
					return (new Date).getTime()
				},
				Ee = function (e) {
					ae = e, r.bg.style.opacity = e * a.bgOpacity
				},
				Ae = function (e, t, n, i, o) {
					(!xe || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[A] = y + t + "px, " + n + "px" + b + " scale(" + i + ")"
				},
				Ie = function (e) {
					te && (e && (g > r.currItem.fitRatio ? xe || (an(r.currItem, !1, !0), xe = !0) : xe && (an(r.currItem), xe = !1)), Ae(te, de.x, de.y, g))
				},
				De = function (e) {
					e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
				},
				Oe = function (e, t) {
					t[A] = y + e + "px, 0px" + b
				},
				Pe = function (e, t) {
					if (!a.loop && t) {
						var n = u + (me.x * fe - e) / me.x,
							i = Math.round(e - ft.x);
						(0 > n && i > 0 || n >= Ut() - 1 && 0 > i) && (e = ft.x + i * a.mainScrollEndFriction)
					}
					ft.x = e, Oe(e, d)
				},
				Me = function (e, t) {
					var n = pt[e] - pe[e];
					return ue[e] + ce[e] + n - n * (t / v)
				},
				Le = function (e, t) {
					e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
				},
				Fe = function (e) {
					e.x = Math.round(e.x), e.y = Math.round(e.y)
				},
				Ne = null,
				Re = function () {
					Ne && (o.unbind(document, "mousemove", Re), o.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, _e("mouseUsed")), Ne = setTimeout(function () {
						Ne = null
					}, 100)
				},
				We = function () {
					o.bind(document, "keydown", r), R.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", Re), o.bind(window, "resize scroll", r), _e("bindEvents")
				},
				He = function () {
					o.unbind(window, "resize", r), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", Re), R.transform && o.unbind(r.scrollWrap, "click", r), q && o.unbind(window, f, r), _e("unbindEvents")
				},
				Ve = function (e, t) {
					var n = tn(r.currItem, he, e);
					return t && (ee = n), n
				},
				je = function (e) {
					return e || (e = r.currItem), e.initialZoomLevel
				},
				Be = function (e) {
					return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1
				},
				ze = function (e, t, n, i) {
					return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Me(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
				},
				qe = function () {
					if (A) {
						var t = R.perspective && !D;
						return y = "translate" + (t ? "3d(" : "("), void(b = R.perspective ? ", 0px)" : ")")
					}
					A = "left", o.addClass(e, "pswp--ie"), Oe = function (e, t) {
						t.left = e + "px"
					}, De = function (e) {
						var t = e.fitRatio > 1 ? 1 : e.fitRatio,
							n = e.container.style,
							i = t * e.w,
							o = t * e.h;
						n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
					}, Ie = function () {
						if (te) {
							var e = te,
								t = r.currItem,
								n = t.fitRatio > 1 ? 1 : t.fitRatio,
								i = n * t.w,
								o = n * t.h;
							e.width = i + "px", e.height = o + "px", e.left = de.x + "px", e.top = de.y + "px"
						}
					}
				},
				$e = function (e) {
					var t = "";
					a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
				},
				Ye = function (e) {
					e && (X || Y || ne || B) && (e.preventDefault(), e.stopPropagation())
				},
				Xe = function () {
					r.setScrollOffset(0, o.getScrollY())
				},
				Ue = {},
				Qe = 0,
				Ge = function (e) {
					Ue[e] && (Ue[e].raf && P(Ue[e].raf), Qe--, delete Ue[e])
				},
				Ke = function (e) {
					Ue[e] && Ge(e), Ue[e] || (Qe++, Ue[e] = {})
				},
				Ze = function () {
					for (var e in Ue) Ue.hasOwnProperty(e) && Ge(e)
				},
				Je = function (e, t, n, i, o, r, a) {
					var s, l = Se();
					Ke(e);
					var c = function () {
						if (Ue[e]) {
							if ((s = Se() - l) >= i) return Ge(e), r(n), void(a && a());
							r((n - t) * o(s / i) + t), Ue[e].raf = O(c)
						}
					};
					c()
				},
				et = {
					shout: _e,
					listen: Te,
					viewportSize: he,
					options: a,
					isMainScrollAnimating: function () {
						return ne
					},
					getZoomLevel: function () {
						return g
					},
					getCurrentIndex: function () {
						return u
					},
					isDragging: function () {
						return q
					},
					isZooming: function () {
						return K
					},
					setScrollOffset: function (e, t) {
						pe.x = e, N = pe.y = t, _e("updateScrollOffset", pe)
					},
					applyZoomPan: function (e, t, n, i) {
						de.x = t, de.y = n, g = e, Ie(i)
					},
					init: function () {
						if (!s && !l) {
							var n;
							r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), M = e.className, s = !0, R = o.detectFeatures(), O = R.raf, P = R.caf, A = R.transform, F = R.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = C = [{
								el: r.container.children[0],
								wrap: 0,
								index: -1
							}, {
								el: r.container.children[1],
								wrap: 0,
								index: -1
							}, {
								el: r.container.children[2],
								wrap: 0,
								index: -1
							}], C[0].el.style.display = C[2].el.style.display = "none", qe(), m = {
								resize: r.updateSize,
								scroll: Xe,
								keydown: $e,
								click: Ye
							};
							var i = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
							for (R.animationName && R.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < ye.length; n++) r["init" + ye[n]]();
							t && (r.ui = new t(r, o)).init(), _e("firstUpdate"), u = u || a.index || 0, (isNaN(u) || 0 > u || u >= Ut()) && (u = 0), r.currItem = Xt(u), (R.isOldIOSPhone || R.isOldAndroid) && (ve = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ve ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === N && (_e("initialLayout"), N = L = o.getScrollY());
							var c = "pswp--open ";
							for (a.mainClass && (c += a.mainClass + " "), a.showHideOpacity && (c += "pswp--animate_opacity "), c += D ? "pswp--touch" : "pswp--notouch", c += R.animationName ? " pswp--css_animation" : "", c += R.svg ? " pswp--svg" : "", o.addClass(e, c), r.updateSize(), h = -1, ge = null, n = 0; 3 > n; n++) Oe((n + h) * me.x, C[n].el.style);
							F || o.bind(r.scrollWrap, p, r), Te("initialZoomInEnd", function () {
								r.setContent(C[0], u - 1), r.setContent(C[2], u + 1), C[0].el.style.display = C[2].el.style.display = "block", a.focus && e.focus(), We()
							}), r.setContent(C[1], u), r.updateCurrItem(), _e("afterInit"), ve || (x = setInterval(function () {
								Qe || q || K || g !== r.currItem.initialZoomLevel || r.updateSize()
							}, 1e3)), o.addClass(e, "pswp--visible")
						}
					},
					close: function () {
						s && (s = !1, l = !0, _e("close"), He(), Gt(r.currItem, null, !0, r.destroy))
					},
					destroy: function () {
						_e("destroy"), zt && clearTimeout(zt), e.setAttribute("aria-hidden", "true"), e.className = M, x && clearInterval(x), o.unbind(r.scrollWrap, p, r), o.unbind(window, "scroll", r), bt(), Ze(), ke = null
					},
					panTo: function (e, t, n) {
						n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, Ie()
					},
					handleEvent: function (e) {
						e = e || window.event, m[e.type] && m[e.type](e)
					},
					goTo: function (e) {
						var t = (e = Ce(e)) - u;
						ge = t, u = e, r.currItem = Xt(u), fe -= t, Pe(me.x * fe), Ze(), ne = !1, r.updateCurrItem()
					},
					next: function () {
						r.goTo(u + 1)
					},
					prev: function () {
						r.goTo(u - 1)
					},
					updateCurrZoomItem: function (e) {
						if (e && _e("beforeChange", 0), C[1].el.children.length) {
							var t = C[1].el.children[0];
							te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
						} else te = null;
						ee = r.currItem.bounds, v = g = r.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && _e("afterChange")
					},
					invalidateCurrItems: function () {
						w = !0;
						for (var e = 0; 3 > e; e++) C[e].item && (C[e].item.needsUpdate = !0)
					},
					updateCurrItem: function (e) {
						if (0 !== ge) {
							var t, n = Math.abs(ge);
							if (!(e && 2 > n)) {
								r.currItem = Xt(u), xe = !1, _e("beforeChange", ge), n >= 3 && (h += ge + (ge > 0 ? -3 : 3), n = 3);
								for (var i = 0; n > i; i++) ge > 0 ? (t = C.shift(), C[2] = t, h++, Oe((h + 2) * me.x, t.el.style), r.setContent(t, u - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), h--, Oe(h * me.x, t.el.style), r.setContent(t, u + n - i - 1 - 1));
								if (te && 1 === Math.abs(ge)) {
									var o = Xt(k);
									o.initialZoomLevel !== g && (tn(o, he), an(o), De(o))
								}
								ge = 0, r.updateCurrZoomItem(), k = u, _e("afterChange")
							}
						}
					},
					updateSize: function (t) {
						if (!ve && a.modal) {
							var n = o.getScrollY();
							if (N !== n && (e.style.top = n + "px", N = n), !t && be.x === window.innerWidth && be.y === window.innerHeight) return;
							be.x = window.innerWidth, be.y = window.innerHeight, e.style.height = be.y + "px"
						}
						if (he.x = r.scrollWrap.clientWidth, he.y = r.scrollWrap.clientHeight, Xe(), me.x = he.x + Math.round(he.x * a.spacing), me.y = he.y, Pe(me.x * fe), _e("beforeResize"), void 0 !== h) {
							for (var i, s, l, c = 0; 3 > c; c++) i = C[c], Oe((c + h) * me.x, i.el.style), l = u + c - 1, a.loop && Ut() > 2 && (l = Ce(l)), s = Xt(l), s && (w || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, l), 1 === c && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l), s && s.container && (tn(s, he), an(s), De(s));
							w = !1
						}
						v = g = r.currItem.initialZoomLevel, (ee = r.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Ie(!0)), _e("resize")
					},
					zoomTo: function (e, t, n, i, r) {
						t && (v = g, pt.x = Math.abs(t.x) - de.x, pt.y = Math.abs(t.y) - de.y, Le(ue, de));
						var a = Ve(e, !1),
							s = {};
						ze("x", a, s, e), ze("y", a, s, e);
						var l = g,
							c = {
								x: de.x,
								y: de.y
							};
						Fe(s);
						var u = function (t) {
							1 === t ? (g = e, de.x = s.x, de.y = s.y) : (g = (e - l) * t + l, de.x = (s.x - c.x) * t + c.x, de.y = (s.y - c.y) * t + c.y), r && r(t), Ie(1 === t)
						};
						n ? Je("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
					}
				},
				tt = {},
				nt = {},
				it = {},
				ot = {},
				rt = {},
				at = [],
				st = {},
				lt = [],
				ct = {},
				ut = 0,
				dt = {
					x: 0,
					y: 0
				},
				ht = 0,
				ft = {
					x: 0,
					y: 0
				},
				pt = {
					x: 0,
					y: 0
				},
				mt = {
					x: 0,
					y: 0
				},
				gt = function (e, t) {
					return e.x === t.x && e.y === t.y
				},
				vt = function (e, t) {
					return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
				},
				yt = function (e, t) {
					return ct.x = Math.abs(e.x - t.x), ct.y = Math.abs(e.y - t.y), Math.sqrt(ct.x * ct.x + ct.y * ct.y)
				},
				bt = function () {
					U && (P(U), U = null)
				},
				xt = function () {
					q && (U = O(xt), Nt())
				},
				wt = function () {
					return !("fit" === a.scaleMode && g === r.currItem.initialZoomLevel)
				},
				Ct = function (e, t) {
					return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Ct(e.parentNode, t)))
				},
				kt = {},
				Tt = function (e, t) {
					return kt.prevent = !Ct(e.target, a.isClickableElement), _e("preventDragEvent", e, t, kt), kt.prevent
				},
				_t = function (e, t) {
					return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
				},
				St = function (e, t, n) {
					n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
				},
				Et = function (e, t, n) {
					if (e - H > 50) {
						var i = lt.length > 2 ? lt.shift() : {};
						i.x = t, i.y = n, lt.push(i), H = e
					}
				},
				At = function () {
					var e = de.y - r.currItem.initialPosition.y;
					return 1 - Math.abs(e / (he.y / 2))
				},
				It = {},
				Dt = {},
				Ot = [],
				Pt = function (e) {
					for (; Ot.length > 0;) Ot.pop();
					return I ? (le = 0, at.forEach(function (e) {
						0 === le ? Ot[0] = e : 1 === le && (Ot[1] = e), le++
					})) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ot[0] = _t(e.touches[0], It), e.touches.length > 1 && (Ot[1] = _t(e.touches[1], Dt))) : (It.x = e.pageX, It.y = e.pageY, It.id = "", Ot[0] = It), Ot
				},
				Mt = function (e, t) {
					var n, i, o, s, l = de[e] + t[e],
						c = t[e] > 0,
						u = ft.x + t.x,
						d = ft.x - st.x;
					return n = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1, l = de[e] + t[e] * n, !a.allowPanToNext && g !== r.currItem.initialZoomLevel || (te ? "h" !== ie || "x" !== e || Y || (c ? (l > ee.min[e] && (n = a.panEndFriction, ee.min[e] - l, i = ee.min[e] - ue[e]), (0 >= i || 0 > d) && Ut() > 1 ? (s = u, 0 > d && u > st.x && (s = st.x)) : ee.min.x !== ee.max.x && (o = l)) : (l < ee.max[e] && (n = a.panEndFriction, l - ee.max[e], i = ue[e] - ee.max[e]), (0 >= i || d > 0) && Ut() > 1 ? (s = u, d > 0 && u < st.x && (s = st.x)) : ee.min.x !== ee.max.x && (o = l))) : s = u, "x" !== e) ? void(ne || Q || g > r.currItem.fitRatio && (de[e] += t[e] * n)) : (void 0 !== s && (Pe(s, !0), Q = s !== st.x), ee.min.x !== ee.max.x && (void 0 !== o ? de.x = o : Q || (de.x += t.x * n)), void 0 !== s)
				},
				Lt = function (e) {
					if (!("mousedown" === e.type && e.button > 0)) {
						if (Yt) return void e.preventDefault();
						if (!z || "mousedown" !== e.type) {
							if (Tt(e, !0) && e.preventDefault(), _e("pointerDown"), I) {
								var t = o.arraySearch(at, e.pointerId, "id");
								0 > t && (t = at.length), at[t] = {
									x: e.pageX,
									y: e.pageY,
									id: e.pointerId
								}
							}
							var n = Pt(e),
								i = n.length;
							G = null, Ze(), q && 1 !== i || (q = oe = !0, o.bind(window, f, r), j = se = re = B = Q = X = $ = Y = !1, ie = null, _e("firstTouchStart", n), Le(ue, de), ce.x = ce.y = 0, Le(ot, n[0]), Le(rt, ot), st.x = me.x * fe, lt = [{
								x: ot.x,
								y: ot.y
							}], H = W = Se(), Ve(g, !0), bt(), xt()), !K && i > 1 && !ne && !Q && (v = g, Y = !1, K = $ = !0, ce.y = ce.x = 0, Le(ue, de), Le(tt, n[0]), Le(nt, n[1]), St(tt, nt, mt), pt.x = Math.abs(mt.x) - de.x, pt.y = Math.abs(mt.y) - de.y, Z = J = yt(tt, nt))
						}
					}
				},
				Ft = function (e) {
					if (e.preventDefault(), I) {
						var t = o.arraySearch(at, e.pointerId, "id");
						if (t > -1) {
							var n = at[t];
							n.x = e.pageX, n.y = e.pageY
						}
					}
					if (q) {
						var i = Pt(e);
						if (ie || X || K) G = i;
						else if (ft.x !== me.x * fe) ie = "h";
						else {
							var r = Math.abs(i[0].x - ot.x) - Math.abs(i[0].y - ot.y);
							Math.abs(r) >= 10 && (ie = r > 0 ? "h" : "v", G = i)
						}
					}
				},
				Nt = function () {
					if (G) {
						var e = G.length;
						if (0 !== e)
							if (Le(tt, G[0]), it.x = tt.x - ot.x, it.y = tt.y - ot.y, K && e > 1) {
								if (ot.x = tt.x, ot.y = tt.y, !it.x && !it.y && gt(G[1], nt)) return;
								Le(nt, G[1]), Y || (Y = !0, _e("zoomGestureStarted"));
								var t = yt(tt, nt),
									n = jt(t);
								n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (se = !0);
								var i = 1,
									o = je(),
									s = Be();
								if (o > n)
									if (a.pinchToClose && !se && v <= r.currItem.initialZoomLevel) {
										var l = 1 - (o - n) / (o / 1.2);
										Ee(l), _e("onPinchClose", l), re = !0
									} else(i = (o - n) / o) > 1 && (i = 1), n = o - i * (o / 3);
								else n > s && ((i = (n - s) / (6 * o)) > 1 && (i = 1), n = s + i * o);
								0 > i && (i = 0), Z = t, St(tt, nt, dt), ce.x += dt.x - mt.x, ce.y += dt.y - mt.y, Le(mt, dt), de.x = Me("x", n), de.y = Me("y", n), j = n > g, g = n, Ie()
							} else {
								if (!ie) return;
								if (oe && (oe = !1, Math.abs(it.x) >= 10 && (it.x -= G[0].x - rt.x), Math.abs(it.y) >= 10 && (it.y -= G[0].y - rt.y)), ot.x = tt.x, ot.y = tt.y, 0 === it.x && 0 === it.y) return;
								if ("v" === ie && a.closeOnVerticalDrag && !wt()) {
									ce.y += it.y, de.y += it.y;
									var c = At();
									return B = !0, _e("onVerticalDrag", c), Ee(c), void Ie()
								}
								Et(Se(), tt.x, tt.y), X = !0, ee = r.currItem.bounds, Mt("x", it) || (Mt("y", it), Fe(de), Ie())
							}
					}
				},
				Rt = function (e) {
					if (R.isOldAndroid) {
						if (z && "mouseup" === e.type) return;
						e.type.indexOf("touch") > -1 && (clearTimeout(z), z = setTimeout(function () {
							z = 0
						}, 600))
					}
					_e("pointerUp"), Tt(e, !1) && e.preventDefault();
					var t;
					if (I) {
						var n = o.arraySearch(at, e.pointerId, "id");
						if (n > -1)
							if (t = at.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
							else {
								var i = {
									4: "mouse",
									2: "touch",
									3: "pen"
								};
								t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
							}
					}
					var s, l = Pt(e),
						c = l.length;
					if ("mouseup" === e.type && (c = 0), 2 === c) return G = null, !0;
					1 === c && Le(rt, l[0]), 0 !== c || ie || ne || (t || ("mouseup" === e.type ? t = {
						x: e.pageX,
						y: e.pageY,
						type: "mouse"
					} : e.changedTouches && e.changedTouches[0] && (t = {
						x: e.changedTouches[0].pageX,
						y: e.changedTouches[0].pageY,
						type: "touch"
					})), _e("touchRelease", e, t));
					var u = -1;
					if (0 === c && (q = !1, o.unbind(window, f, r), bt(), K ? u = 0 : -1 !== ht && (u = Se() - ht)), ht = 1 === c ? Se() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", K && 2 > c && (K = !1, 1 === c && (s = "zoomPointerUp"), _e("zoomGestureEnded")), G = null, X || Y || ne || B)
						if (Ze(), V || (V = Wt()), V.calculateSwipeSpeed("x"), B)
							if (At() < a.verticalDragRange) r.close();
							else {
								var d = de.y,
									h = ae;
								Je("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
									de.y = (r.currItem.initialPosition.y - d) * e + d, Ee((1 - h) * e + h), Ie()
								}), _e("onVerticalDrag", 1)
							}
					else {
						if ((Q || ne) && 0 === c) {
							if (Vt(s, V)) return;
							s = "zoomPointerUp"
						}
						if (!ne) return "swipe" !== s ? void Bt() : void(!Q && g > r.currItem.fitRatio && Ht(V))
					}
				},
				Wt = function () {
					var e, t, n = {
						lastFlickOffset: {},
						lastFlickDist: {},
						lastFlickSpeed: {},
						slowDownRatio: {},
						slowDownRatioReverse: {},
						speedDecelerationRatio: {},
						speedDecelerationRatioAbs: {},
						distanceOffset: {},
						backAnimDestination: {},
						backAnimStarted: {},
						calculateSwipeSpeed: function (i) {
							lt.length > 1 ? (e = Se() - H + 50, t = lt[lt.length - 2][i]) : (e = Se() - W, t = rt[i]), n.lastFlickOffset[i] = ot[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
						},
						calculateOverBoundsAnimOffset: function (e, t) {
							n.backAnimStarted[e] || (de[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, Je("bounceZoomPan" + e, de[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
								de[e] = t, Ie()
							}))))
						},
						calculateAnimOffset: function (e) {
							n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, de[e] += n.distanceOffset[e])
						},
						panAnimLoop: function () {
							return Ue.zoomPan && (Ue.zoomPan.raf = O(n.panAnimLoop), n.now = Se(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ie(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (de.x = Math.round(de.x), de.y = Math.round(de.y), Ie(), void Ge("zoomPan")) : void 0
						}
					};
					return n
				},
				Ht = function (e) {
					return e.calculateSwipeSpeed("y"), ee = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Ke("zoomPan"), e.lastNow = Se(), void e.panAnimLoop())
				},
				Vt = function (e, t) {
					var n;
					ne || (ut = u);
					var i;
					if ("swipe" === e) {
						var s = ot.x - rt.x,
							l = t.lastFlickDist.x < 10;
						s > 30 && (l || t.lastFlickOffset.x > 20) ? i = -1 : -30 > s && (l || t.lastFlickOffset.x < -20) && (i = 1)
					}
					var c;
					i && (u += i, 0 > u ? (u = a.loop ? Ut() - 1 : 0, c = !0) : u >= Ut() && (u = a.loop ? 0 : Ut() - 1, c = !0), (!c || a.loop) && (ge += i, fe -= i, n = !0));
					var d, h = me.x * fe,
						f = Math.abs(h - ft.x);
					return n || h > ft.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ut === u && (n = !1), ne = !0, _e("mainScrollAnimStart"), Je("mainScroll", ft.x, h, d, o.easing.cubic.out, Pe, function () {
						Ze(), ne = !1, ut = -1, (n || ut !== u) && r.updateCurrItem(), _e("mainScrollAnimComplete")
					}), n && r.updateCurrItem(!0), n
				},
				jt = function (e) {
					return 1 / J * e * v
				},
				Bt = function () {
					var e = g,
						t = je(),
						n = Be();
					t > g ? e = t : g > n && (e = n);
					var i, a = ae;
					return re && !j && !se && t > g ? (r.close(), !0) : (re && (i = function (e) {
						Ee((1 - a) * e + a)
					}), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
				};
			we("Gestures", {
				publicMethods: {
					initGestures: function () {
						var e = function (e, t, n, i, o) {
							T = e + t, _ = e + n, S = e + i, E = o ? e + o : ""
						};
						(I = R.pointerEvent) && R.touch && (R.touch = !1), I ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"), D = !0) : e("mouse", "down", "move", "up"), f = _ + " " + S + " " + E, p = T, I && !D && (D = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = D, m[T] = Lt, m[_] = Ft, m[S] = Rt, E && (m[E] = m[S]), R.touch && (p += " mousedown", f += " mousemove mouseup", m.mousedown = m[T], m.mousemove = m[_], m.mouseup = m[S]), D || (a.allowPanToNext = !1)
					}
				}
			});
			var zt, qt, $t, Yt, Xt, Ut, Qt, Gt = function (t, n, i, s) {
					zt && clearTimeout(zt), Yt = !0, $t = !0;
					var l;
					t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
					var d = i ? a.hideAnimationDuration : a.showAnimationDuration,
						h = function () {
							Ge("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Ee(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), _e("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Yt = !1
						};
					if (!d || !l || void 0 === l.x) return _e("initialZoom" + (i ? "Out" : "In")), g = t.initialZoomLevel, Le(de, t.initialPosition), Ie(), e.style.opacity = i ? 0 : 1, Ee(1), void(d ? setTimeout(function () {
						h()
					}, d) : h());
					! function () {
						var n = c,
							s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
						t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (g = l.w / t.w, de.x = l.x, de.y = l.y - L, r[s ? "template" : "bg"].style.opacity = .001, Ie()), Ke("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
							o.addClass(e, "pswp--animate_opacity")
						}, 30)), zt = setTimeout(function () {
							if (_e("initialZoom" + (i ? "Out" : "In")), i) {
								var r = l.w / t.w,
									a = {
										x: de.x,
										y: de.y
									},
									c = g,
									u = ae,
									f = function (t) {
										1 === t ? (g = r, de.x = l.x, de.y = l.y - N) : (g = (r - c) * t + c, de.x = (l.x - a.x) * t + a.x, de.y = (l.y - N - a.y) * t + a.y), Ie(), s ? e.style.opacity = 1 - t : Ee(u - t * u)
									};
								n ? Je("initialZoom", 0, 1, d, o.easing.cubic.out, f, h) : (f(1), zt = setTimeout(h, d + 20))
							} else g = t.initialZoomLevel, Le(de, t.initialPosition), Ie(), Ee(1), s ? e.style.opacity = 1 : Ee(1), zt = setTimeout(h, d + 20)
						}, i ? 25 : 90)
					}()
				},
				Kt = {},
				Zt = [],
				Jt = {
					index: 0,
					errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
					forceProgressiveLoading: !1,
					preload: [1, 1],
					getNumItemsFn: function () {
						return qt.length
					}
				},
				en = function (e, t, n) {
					var i = e.bounds;
					i.center.x = Math.round((Kt.x - t) / 2), i.center.y = Math.round((Kt.y - n) / 2) + e.vGap.top, i.max.x = t > Kt.x ? Math.round(Kt.x - t) : i.center.x, i.max.y = n > Kt.y ? Math.round(Kt.y - n) + e.vGap.top : i.center.y, i.min.x = t > Kt.x ? 0 : i.center.x, i.min.y = n > Kt.y ? e.vGap.top : i.center.y
				},
				tn = function (e, t, n) {
					if (e.src && !e.loadError) {
						var i = !n;
						if (i && (e.vGap || (e.vGap = {
								top: 0,
								bottom: 0
							}), _e("parseVerticalMargin", e)), Kt.x = t.x, Kt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
							var o = Kt.x / e.w,
								r = Kt.y / e.h;
							e.fitRatio = r > o ? o : r;
							var s = a.scaleMode;
							"orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
								center: {
									x: 0,
									y: 0
								},
								max: {
									x: 0,
									y: 0
								},
								min: {
									x: 0,
									y: 0
								}
							})
						}
						if (!n) return;
						return en(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
					}
					return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
						center: {
							x: 0,
							y: 0
						},
						max: {
							x: 0,
							y: 0
						},
						min: {
							x: 0,
							y: 0
						}
					}, e.initialPosition = e.bounds.center, e.bounds
				},
				nn = function (e, t, n, i, o, a) {
					t.loadError || i && (t.imageAppended = !0, an(t, i, t === r.currItem && xe), n.appendChild(i), a && setTimeout(function () {
						t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
					}, 500))
				},
				on = function (e) {
					e.loading = !0, e.loaded = !1;
					var t = e.img = o.createEl("pswp__img", "img"),
						n = function () {
							e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
						};
					return t.onload = n, t.onerror = function () {
						e.loadError = !0, n()
					}, t.src = e.src, t
				},
				rn = function (e, t) {
					return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0) : void 0
				},
				an = function (e, t, n) {
					if (e.src) {
						t || (t = e.container.lastChild);
						var i = n ? e.w : Math.round(e.w * e.fitRatio),
							o = n ? e.h : Math.round(e.h * e.fitRatio);
						e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
					}
				},
				sn = function () {
					if (Zt.length) {
						for (var e, t = 0; t < Zt.length; t++)(e = Zt[t]).holder.index === e.index && nn(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
						Zt = []
					}
				};
			we("Controller", {
				publicMethods: {
					lazyLoadItem: function (e) {
						e = Ce(e);
						var t = Xt(e);
						t && (!t.loaded && !t.loading || w) && (_e("gettingData", e, t), t.src && on(t))
					},
					initController: function () {
						o.extend(a, Jt, !0), r.items = qt = n, Xt = r.getItemAt, Ut = a.getNumItemsFn, Qt = a.loop, Ut() < 3 && (a.loop = !1), Te("beforeChange", function (e) {
							var t, n = a.preload,
								i = null === e || e >= 0,
								o = Math.min(n[0], Ut()),
								s = Math.min(n[1], Ut());
							for (t = 1;
								(i ? s : o) >= t; t++) r.lazyLoadItem(u + t);
							for (t = 1;
								(i ? o : s) >= t; t++) r.lazyLoadItem(u - t)
						}), Te("initialLayout", function () {
							r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
						}), Te("mainScrollAnimComplete", sn), Te("initialZoomInEnd", sn), Te("destroy", function () {
							for (var e, t = 0; t < qt.length; t++)(e = qt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
							Zt = null
						})
					},
					getItemAt: function (e) {
						return e >= 0 && void 0 !== qt[e] && qt[e]
					},
					allowProgressiveImg: function () {
						return a.forceProgressiveLoading || !D || a.mouseUsed || screen.width > 1200
					},
					setContent: function (e, t) {
						a.loop && (t = Ce(t));
						var n = r.getItemAt(e.index);
						n && (n.container = null);
						var i, l = r.getItemAt(t);
						if (l) {
							_e("gettingData", t, l), e.index = t, e.item = l;
							var c = l.container = o.createEl("pswp__zoom-wrap");
							if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), rn(l), tn(l, he), !l.src || l.loadError || l.loaded) l.src && !l.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = l.src, an(l, i), nn(0, l, c, i));
							else {
								if (l.loadComplete = function (n) {
										if (s) {
											if (e && e.index === t) {
												if (rn(n, !0)) return n.loadComplete = n.img = null, tn(n, he), De(n), void(e.index === u && r.updateCurrZoomItem());
												n.imageAppended ? !Yt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : R.transform && (ne || Yt) ? Zt.push({
													item: n,
													baseDiv: c,
													img: n.img,
													index: t,
													holder: e,
													clearPlaceholder: !0
												}) : nn(0, n, c, n.img, 0, !0)
											}
											n.loadComplete = null, n.img = null, _e("imageLoadComplete", t, n)
										}
									}, o.features.transform) {
									var d = "pswp__img pswp__img--placeholder";
									d += l.msrc ? "" : " pswp__img--placeholder--blank";
									var h = o.createEl(d, l.msrc ? "img" : "");
									l.msrc && (h.src = l.msrc), an(l, h), c.appendChild(h), l.placeholder = h
								}
								l.loading || on(l), r.allowProgressiveImg() && (!$t && R.transform ? Zt.push({
									item: l,
									baseDiv: c,
									img: l.img,
									index: t,
									holder: e
								}) : nn(0, l, c, l.img, 0, !0))
							}
							$t || t !== u ? De(l) : (te = c.style, Gt(l, i || l.img)), e.el.innerHTML = "", e.el.appendChild(c)
						} else e.el.innerHTML = ""
					},
					cleanSlide: function (e) {
						e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
					}
				}
			});
			var ln, cn = {},
				un = function (e, t, n) {
					var i = document.createEvent("CustomEvent"),
						o = {
							origEvent: e,
							target: e.target,
							releasePoint: t,
							pointerType: n || "touch"
						};
					i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
				};
			we("Tap", {
				publicMethods: {
					initTap: function () {
						Te("firstTouchStart", r.onTapStart), Te("touchRelease", r.onTapRelease), Te("destroy", function () {
							cn = {}, ln = null
						})
					},
					onTapStart: function (e) {
						e.length > 1 && (clearTimeout(ln), ln = null)
					},
					onTapRelease: function (e, t) {
						if (t && !X && !$ && !Qe) {
							var n = t;
							if (ln && (clearTimeout(ln), ln = null, vt(n, cn))) return void _e("doubleTap", n);
							if ("mouse" === t.type) return void un(e, t, "mouse");
							if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void un(e, t);
							Le(cn, n), ln = setTimeout(function () {
								un(e, t), ln = null
							}, 300)
						}
					}
				}
			});
			var dn;
			we("DesktopZoom", {
				publicMethods: {
					initDesktopZoom: function () {
						F || (D ? Te("mouseUsed", function () {
							r.setupDesktopZoom()
						}) : r.setupDesktopZoom(!0))
					},
					setupDesktopZoom: function (t) {
						dn = {};
						var n = "wheel mousewheel DOMMouseScroll";
						Te("bindEvents", function () {
							o.bind(e, n, r.handleMouseWheel)
						}), Te("unbindEvents", function () {
							dn && o.unbind(e, n, r.handleMouseWheel)
						}), r.mouseZoomedIn = !1;
						var i, a = function () {
								r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > g ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
							},
							s = function () {
								i && (o.removeClass(e, "pswp--dragging"), i = !1)
							};
						Te("resize", a), Te("afterChange", a), Te("pointerDown", function () {
							r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
						}), Te("pointerUp", s), t || a()
					},
					handleMouseWheel: function (e) {
						if (g <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || Qe || q ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (c = !0, r.close())), !0;
						if (e.stopPropagation(), dn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (dn.x = 18 * e.deltaX, dn.y = 18 * e.deltaY) : (dn.x = e.deltaX, dn.y = e.deltaY);
						else if ("wheelDelta" in e) e.wheelDeltaX && (dn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? dn.y = -.16 * e.wheelDeltaY : dn.y = -.16 * e.wheelDelta;
						else {
							if (!("detail" in e)) return;
							dn.y = e.detail
						}
						Ve(g, !0);
						var t = de.x - dn.x,
							n = de.y - dn.y;
						(a.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), r.panTo(t, n)
					},
					toggleDesktopZoom: function (t) {
						t = t || {
							x: he.x / 2 + pe.x,
							y: he.y / 2 + pe.y
						};
						var n = a.getDoubleTapZoom(!0, r.currItem),
							i = g === n;
						r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
					}
				}
			});
			var hn, fn, pn, mn, gn, vn, yn, bn, xn, wn, Cn, kn, Tn = {
					history: !0,
					galleryUID: 1
				},
				_n = function () {
					return Cn.hash.substring(1)
				},
				Sn = function () {
					hn && clearTimeout(hn), pn && clearTimeout(pn)
				},
				En = function () {
					var e = _n(),
						t = {};
					if (e.length < 5) return t;
					var n, i = e.split("&");
					for (n = 0; n < i.length; n++)
						if (i[n]) {
							var o = i[n].split("=");
							o.length < 2 || (t[o[0]] = o[1])
						}
					if (a.galleryPIDs) {
						var r = t.pid;
						for (t.pid = 0, n = 0; n < qt.length; n++)
							if (qt[n].pid === r) {
								t.pid = n;
								break
							}
					} else t.pid = parseInt(t.pid, 10) - 1;
					return t.pid < 0 && (t.pid = 0), t
				},
				An = function () {
					if (pn && clearTimeout(pn), Qe || q) pn = setTimeout(An, 500);
					else {
						mn ? clearTimeout(fn) : mn = !0;
						var e = u + 1,
							t = Xt(u);
						t.hasOwnProperty("pid") && (e = t.pid);
						var n = yn + "&gid=" + a.galleryUID + "&pid=" + e;
						bn || -1 === Cn.hash.indexOf(n) && (wn = !0);
						var i = Cn.href.split("#")[0] + "#" + n;
						kn ? "#" + n !== window.location.hash && history[bn ? "replaceState" : "pushState"]("", document.title, i) : bn ? Cn.replace(i) : Cn.hash = n, bn = !0, fn = setTimeout(function () {
							mn = !1
						}, 60)
					}
				};
			we("History", {
				publicMethods: {
					initHistory: function () {
						if (o.extend(a, Tn, !0), a.history) {
							Cn = window.location, wn = !1, xn = !1, bn = !1, yn = _n(), kn = "pushState" in history, yn.indexOf("gid=") > -1 && (yn = yn.split("&gid=")[0], yn = yn.split("?gid=")[0]), Te("afterChange", r.updateURL), Te("unbindEvents", function () {
								o.unbind(window, "hashchange", r.onHashChange)
							});
							var e = function () {
								vn = !0, xn || (wn ? history.back() : yn ? Cn.hash = yn : kn ? history.pushState("", document.title, Cn.pathname + Cn.search) : Cn.hash = ""), Sn()
							};
							Te("unbindEvents", function () {
								c && e()
							}), Te("destroy", function () {
								vn || e()
							}), Te("firstUpdate", function () {
								u = En().pid
							});
							var t = yn.indexOf("pid=");
							t > -1 && "&" === (yn = yn.substring(0, t)).slice(-1) && (yn = yn.slice(0, -1)), setTimeout(function () {
								s && o.bind(window, "hashchange", r.onHashChange)
							}, 40)
						}
					},
					onHashChange: function () {
						return _n() === yn ? (xn = !0, void r.close()) : void(mn || (gn = !0, r.goTo(En().pid), gn = !1))
					},
					updateURL: function () {
						Sn(), gn || (bn ? hn = setTimeout(An, 800) : An())
					}
				}
			}), o.extend(r, et)
		}
	}),
	function (e, t) {
		"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
	}(this, function () {
		"use strict";
		return function (e, t) {
			var n, i, o, r, a, s, l, c, u, d, h, f, p, m, g, v, y, b, x, w = this,
				C = !1,
				k = !0,
				T = !0,
				_ = {
					barsSize: {
						top: 44,
						bottom: "auto"
					},
					closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
					timeToIdle: 4e3,
					timeToIdleOutside: 1e3,
					loadingIndicatorDelay: 1e3,
					addCaptionHTMLFn: function (e, t) {
						return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
					},
					closeEl: !0,
					captionEl: !0,
					fullscreenEl: !0,
					zoomEl: !0,
					shareEl: !0,
					counterEl: !0,
					arrowEl: !0,
					preloaderEl: !0,
					tapToClose: !1,
					tapToToggleControls: !0,
					clickToCloseNonZoomable: !0,
					shareButtons: [{
						id: "facebook",
						label: "Share on Facebook",
						url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
					}, {
						id: "twitter",
						label: "Tweet",
						url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
					}, {
						id: "pinterest",
						label: "Pin it",
						url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
					}, {
						id: "download",
						label: "Download image",
						url: "{{raw_image_url}}",
						download: !0
					}],
					getImageURLForShare: function () {
						return e.currItem.src || ""
					},
					getPageURLForShare: function () {
						return window.location.href
					},
					getTextForShare: function () {
						return e.currItem.title || ""
					},
					indexIndicatorSep: " / ",
					fitControlsWidth: 1200
				},
				S = function (e) {
					if (v) return !0;
					e = e || window.event, g.timeToIdle && g.mouseUsed && !u && N();
					for (var n, i, o = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < q.length; r++)(n = q[r]).onTap && o.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
					if (i) {
						e.stopPropagation && e.stopPropagation(), v = !0;
						var a = t.features.isOldAndroid ? 600 : 30;
						y = setTimeout(function () {
							v = !1
						}, a)
					}
				},
				E = function () {
					return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
				},
				A = function (e, n, i) {
					t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
				},
				I = function () {
					var e = 1 === g.getNumItemsFn();
					e !== m && (A(i, "ui--one-slide", e), m = e)
				},
				D = function () {
					A(l, "share-modal--hidden", T)
				},
				O = function () {
					return T = !T, T ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
						T && D()
					}, 300)) : (D(), setTimeout(function () {
						T || t.addClass(l, "pswp__share-modal--fade-in")
					}, 30)), T || M(), !1
				},
				P = function (t) {
					var n = (t = t || window.event).target || t.srcElement;
					return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), T || O(), !1))
				},
				M = function () {
					for (var e, t, n, i, o, r = "", a = 0; a < g.shareButtons.length; a++) e = g.shareButtons[a], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
					l.children[0].innerHTML = r, l.children[0].onclick = P
				},
				L = function (e) {
					for (var n = 0; n < g.closeElClasses.length; n++)
						if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0
				},
				F = 0,
				N = function () {
					clearTimeout(x), F = 0, u && w.setIdle(!1)
				},
				R = function (e) {
					var t = (e = e || window.event).relatedTarget || e.toElement;
					t && "HTML" !== t.nodeName || (clearTimeout(x), x = setTimeout(function () {
						w.setIdle(!0)
					}, g.timeToIdleOutside))
				},
				W = function () {
					g.fullscreenEl && !t.features.isOldAndroid && (n || (n = w.getFullscreenAPI()), n ? (t.bind(document, n.eventK, w.updateFullscreen), w.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
				},
				H = function () {
					g.preloaderEl && (V(!0), d("beforeChange", function () {
						clearTimeout(p), p = setTimeout(function () {
							e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && V(!1) : V(!0)
						}, g.loadingIndicatorDelay)
					}), d("imageLoadComplete", function (t, n) {
						e.currItem === n && V(!0)
					}))
				},
				V = function (e) {
					f !== e && (A(h, "preloader--active", !e), f = e)
				},
				j = function (e) {
					var n = e.vGap;
					if (E()) {
						var a = g.barsSize;
						if (g.captionEl && "auto" === a.bottom)
							if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(e, r, !0)) {
								var s = r.clientHeight;
								n.bottom = parseInt(s, 10) || 44
							} else n.bottom = a.top;
						else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
						n.top = a.top
					} else n.top = n.bottom = 0
				},
				B = function () {
					g.timeToIdle && d("mouseUsed", function () {
						t.bind(document, "mousemove", N), t.bind(document, "mouseout", R), b = setInterval(function () {
							2 == ++F && w.setIdle(!0)
						}, g.timeToIdle / 2)
					})
				},
				z = function () {
					d("onVerticalDrag", function (e) {
						k && .95 > e ? w.hideControls() : !k && e >= .95 && w.showControls()
					});
					var e;
					d("onPinchClose", function (t) {
						k && .9 > t ? (w.hideControls(), e = !0) : e && !k && t > .9 && w.showControls()
					}), d("zoomGestureEnded", function () {
						(e = !1) && !k && w.showControls()
					})
				},
				q = [{
					name: "caption",
					option: "captionEl",
					onInit: function (e) {
						o = e
					}
				}, {
					name: "share-modal",
					option: "shareEl",
					onInit: function (e) {
						l = e
					},
					onTap: function () {
						O()
					}
				}, {
					name: "button--share",
					option: "shareEl",
					onInit: function (e) {
						s = e
					},
					onTap: function () {
						O()
					}
				}, {
					name: "button--zoom",
					option: "zoomEl",
					onTap: e.toggleDesktopZoom
				}, {
					name: "counter",
					option: "counterEl",
					onInit: function (e) {
						a = e
					}
				}, {
					name: "button--close",
					option: "closeEl",
					onTap: e.close
				}, {
					name: "button--arrow--left",
					option: "arrowEl",
					onTap: e.prev
				}, {
					name: "button--arrow--right",
					option: "arrowEl",
					onTap: e.next
				}, {
					name: "button--fs",
					option: "fullscreenEl",
					onTap: function () {
						n.isFullscreen() ? n.exit() : n.enter()
					}
				}, {
					name: "preloader",
					option: "preloaderEl",
					onInit: function (e) {
						h = e
					}
				}],
				$ = function () {
					var e, n, o, r = function (i) {
						if (i)
							for (var r = i.length, a = 0; r > a; a++) {
								e = i[a], n = e.className;
								for (var s = 0; s < q.length; s++) o = q[s], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
							}
					};
					r(i.children);
					var a = t.getChildByClass(i, "pswp__top-bar");
					a && r(a.children)
				};
			w.init = function () {
				t.extend(e.options, _, !0), g = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, z(), d("beforeChange", w.update), d("doubleTap", function (t) {
					var n = e.currItem.initialZoomLevel;
					e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
				}), d("preventDragEvent", function (e, t, n) {
					var i = e.target || e.srcElement;
					i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
				}), d("bindEvents", function () {
					t.bind(i, "pswpTap click", S), t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
				}), d("unbindEvents", function () {
					T || O(), b && clearInterval(b), t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", N), t.unbind(i, "pswpTap click", S), t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", w.onMouseOver), n && (t.unbind(document, n.eventK, w.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
				}), d("destroy", function () {
					g.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), w.setIdle(!1)
				}), g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
					g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
				}), d("initialZoomOut", function () {
					t.addClass(i, "pswp__ui--hidden")
				}), d("parseVerticalMargin", j), $(), g.shareEl && s && l && (T = !0), I(), B(), W(), H()
			}, w.setIdle = function (e) {
				u = e, A(i, "ui--idle", e)
			}, w.update = function () {
				k && e.currItem ? (w.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, o), A(o, "caption--empty", !e.currItem.title)), C = !0) : C = !1, T || O(), I()
			}, w.updateFullscreen = function (i) {
				i && setTimeout(function () {
					e.setScrollOffset(0, t.getScrollY())
				}, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
			}, w.updateIndexIndicator = function () {
				g.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
			}, w.onGlobalTap = function (n) {
				var i = (n = n || window.event).target || n.srcElement;
				if (!v)
					if (n.detail && "mouse" === n.detail.pointerType) {
						if (L(i)) return void e.close();
						t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
					} else if (g.tapToToggleControls && (k ? w.hideControls() : w.showControls()), g.tapToClose && (t.hasClass(i, "pswp__img") || L(i))) return void e.close()
			}, w.onMouseOver = function (e) {
				var t = (e = e || window.event).target || e.srcElement;
				A(i, "ui--over-close", L(t))
			}, w.hideControls = function () {
				t.addClass(i, "pswp__ui--hidden"), k = !1
			}, w.showControls = function () {
				k = !0, C || w.update(), t.removeClass(i, "pswp__ui--hidden")
			}, w.supportsFullscreen = function () {
				var e = document;
				return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
			}, w.getFullscreenAPI = function () {
				var t, n = document.documentElement,
					i = "fullscreenchange";
				return n.requestFullscreen ? t = {
					enterK: "requestFullscreen",
					exitK: "exitFullscreen",
					elementK: "fullscreenElement",
					eventK: i
				} : n.mozRequestFullScreen ? t = {
					enterK: "mozRequestFullScreen",
					exitK: "mozCancelFullScreen",
					elementK: "mozFullScreenElement",
					eventK: "moz" + i
				} : n.webkitRequestFullscreen ? t = {
					enterK: "webkitRequestFullscreen",
					exitK: "webkitExitFullscreen",
					elementK: "webkitFullscreenElement",
					eventK: "webkit" + i
				} : n.msRequestFullscreen && (t = {
					enterK: "msRequestFullscreen",
					exitK: "msExitFullscreen",
					elementK: "msFullscreenElement",
					eventK: "MSFullscreenChange"
				}), t && (t.enter = function () {
					return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
				}, t.exit = function () {
					return g.closeOnScroll = c, document[this.exitK]()
				}, t.isFullscreen = function () {
					return document[this.elementK]
				}), t
			}
		}
	});
var initPhotoSwipeFromDOM = function (e) {
	for (var t = function (e) {
			for (var t, n, i, o, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++) 1 === (t = r[l]).nodeType && (i = (n = t.children[0]).getAttribute("data-size").split("x"), o = {
				src: n.getAttribute("href"),
				w: parseInt(i[0], 10),
				h: parseInt(i[1], 10)
			}, t.children.length > 1 && (o.title = t.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = t, s.push(o));
			return s
		}, n = function e(t, n) {
			return t && (n(t) ? t : e(t.parentNode, n))
		}, i = function (e, n, i, o) {
			var r, a, s = document.querySelectorAll(".pswp")[0];
			if (a = t(n), r = {
					galleryUID: n.getAttribute("data-pswp-uid"),
					getThumbBoundsFn: function (e) {
						var t = a[e].el.getElementsByTagName("img")[0],
							n = window.pageYOffset || document.documentElement.scrollTop,
							i = t.getBoundingClientRect();
						return {
							x: i.left,
							y: i.top + n,
							w: i.width
						}
					}
				}, o)
				if (r.galleryPIDs) {
					for (var l = 0; l < a.length; l++)
						if (a[l].pid == e) {
							r.index = l;
							break
						}
				} else r.index = parseInt(e, 10) - 1;
			else r.index = parseInt(e, 10);
			isNaN(r.index) || (i && (r.showAnimationDuration = 0), new PhotoSwipe(s, PhotoSwipeUI_Default, a, r).init())
		}, o = document.querySelectorAll(e), r = 0, a = o.length; r < a; r++) o[r].setAttribute("data-pswp-uid", r + 1), o[r].onclick = function (e) {
		(e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
		var t = e.target || e.srcElement,
			o = n(t, function (e) {
				return e.tagName && "FIGURE" === e.tagName.toUpperCase()
			});
		if (o) {
			for (var r, a = o.parentNode, s = o.parentNode.childNodes, l = s.length, c = 0, u = 0; u < l; u++)
				if (1 === s[u].nodeType) {
					if (s[u] === o) {
						r = c;
						break
					}
					c++
				}
			return r >= 0 && i(r, a), !1
		}
	};
	var s = function () {
		var e = window.location.hash.substring(1),
			t = {};
		if (e.length < 5) return t;
		for (var n = e.split("&"), i = 0; i < n.length; i++)
			if (n[i]) {
				var o = n[i].split("=");
				o.length < 2 || (t[o[0]] = o[1])
			}
		return t.gid && (t.gid = parseInt(t.gid, 10)), t
	}();
	s.pid && s.gid && i(s.pid, o[s.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"),
	function (e) {
		e.fn.sticky = function (t) {
			var n = {
					topSpacing: 0,
					zIndex: "",
					stopper: ".sticky-stopper",
					stickyClass: !1
				},
				i = e.extend({}, n, t),
				o = "number" == typeof i.zIndex,
				r = 0 < e(i.stopper).length || "number" == typeof i.stopper;
			return this.each(function () {
				function t() {
					var t = f.scrollTop(),
						s = h,
						p = n.parent().width();
					if (d.width(p), r && "string" == typeof h && (s = e(h).offset().top - a - l), u < t) {
						if (i.stickyClass && n.addClass(i.stickyClass), n.after(d).css({
								position: "fixed",
								top: l,
								width: p
							}), o && n.css({
								zIndex: c
							}), r && s < t) {
							var m = s - t + l;
							n.css({
								top: m
							})
						}
					} else i.stickyClass && n.removeClass(i.stickyClass), n.css({
						position: "static",
						top: null,
						left: null,
						width: "auto"
					}), d.remove()
				}
				var n = e(this),
					a = n.outerHeight(),
					s = n.outerWidth(),
					l = i.topSpacing,
					c = i.zIndex,
					u = n.offset().top - l,
					d = e("<div></div>").width(s).height(a).addClass("sticky-placeholder"),
					h = i.stopper,
					f = e(window);
				f.innerHeight() > a && (f.bind("scroll", t), f.bind("load", t), f.bind("resize", t))
			})
		}
	}(),
	function e(t, n, i) {
		function o(a, s) {
			if (!n[a]) {
				if (!t[a]) {
					var l = "function" == typeof require && require;
					if (!s && l) return l(a, !0);
					if (r) return r(a, !0);
					var c = new Error("Cannot find module '" + a + "'");
					throw c.code = "MODULE_NOT_FOUND", c
				}
				var u = n[a] = {
					exports: {}
				};
				t[a][0].call(u.exports, function (e) {
					var n = t[a][1][e];
					return o(n || e)
				}, u, u.exports, e, t, n, i)
			}
			return n[a].exports
		}
		for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
		return o
	}({
		1: [function (e, t, n) {
			"use strict";
			var i = e("../main");
			"function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, void 0 === window.Ps && (window.Ps = i))
		}, {
			"../main": 7
		}],
		2: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				var n = e.className.split(" ");
				n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
			}

			function o(e, t) {
				var n = e.className.split(" "),
					i = n.indexOf(t);
				i >= 0 && n.splice(i, 1), e.className = n.join(" ")
			}
			n.add = function (e, t) {
				e.classList ? e.classList.add(t) : i(e, t)
			}, n.remove = function (e, t) {
				e.classList ? e.classList.remove(t) : o(e, t)
			}, n.list = function (e) {
				return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
			}
		}, {}],
		3: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				return window.getComputedStyle(e)[t]
			}

			function o(e, t, n) {
				return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
			}

			function r(e, t) {
				for (var n in t) {
					var i = t[n];
					"number" == typeof i && (i = i.toString() + "px"), e.style[n] = i
				}
				return e
			}
			var a = {};
			a.e = function (e, t) {
				var n = document.createElement(e);
				return n.className = t, n
			}, a.appendTo = function (e, t) {
				return t.appendChild(e), e
			}, a.css = function (e, t, n) {
				return "object" == typeof t ? r(e, t) : void 0 === n ? i(e, t) : o(e, t, n)
			}, a.matches = function (e, t) {
				return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
			}, a.remove = function (e) {
				void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
			}, a.queryChildren = function (e, t) {
				return Array.prototype.filter.call(e.childNodes, function (e) {
					return a.matches(e, t)
				})
			}, t.exports = a
		}, {}],
		4: [function (e, t, n) {
			"use strict";
			var i = function (e) {
				this.element = e, this.events = {}
			};
			i.prototype.bind = function (e, t) {
				void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
			}, i.prototype.unbind = function (e, t) {
				var n = void 0 !== t;
				this.events[e] = this.events[e].filter(function (i) {
					return !(!n || i === t) || (this.element.removeEventListener(e, i, !1), !1)
				}, this)
			}, i.prototype.unbindAll = function () {
				for (var e in this.events) this.unbind(e)
			};
			var o = function () {
				this.eventElements = []
			};
			o.prototype.eventElement = function (e) {
				var t = this.eventElements.filter(function (t) {
					return t.element === e
				})[0];
				return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
			}, o.prototype.bind = function (e, t, n) {
				this.eventElement(e).bind(t, n)
			}, o.prototype.unbind = function (e, t, n) {
				this.eventElement(e).unbind(t, n)
			}, o.prototype.unbindAll = function () {
				for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
			}, o.prototype.once = function (e, t, n) {
				var i = this.eventElement(e),
					o = function (e) {
						i.unbind(t, o), n(e)
					};
				i.bind(t, o)
			}, t.exports = o
		}, {}],
		5: [function (e, t, n) {
			"use strict";
			t.exports = function () {
				function e() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
				}
				return function () {
					return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
				}
			}()
		}, {}],
		6: [function (e, t, n) {
			"use strict";

			function i(e) {
				return function (t, n) {
					e(t, "ps--in-scrolling"), void 0 !== n ? e(t, "ps--" + n) : (e(t, "ps--x"), e(t, "ps--y"))
				}
			}
			var o = e("./class"),
				r = e("./dom"),
				a = n.toInt = function (e) {
					return parseInt(e, 10) || 0
				},
				s = n.clone = function (e) {
					if (e) {
						if (Array.isArray(e)) return e.map(s);
						if ("object" == typeof e) {
							var t = {};
							for (var n in e) t[n] = s(e[n]);
							return t
						}
						return e
					}
					return null
				};
			n.extend = function (e, t) {
				var n = s(e);
				for (var i in t) n[i] = s(t[i]);
				return n
			}, n.isEditable = function (e) {
				return r.matches(e, "input,[contenteditable]") || r.matches(e, "select,[contenteditable]") || r.matches(e, "textarea,[contenteditable]") || r.matches(e, "button,[contenteditable]")
			}, n.removePsClasses = function (e) {
				for (var t = o.list(e), n = 0; n < t.length; n++) {
					var i = t[n];
					0 === i.indexOf("ps-") && o.remove(e, i)
				}
			}, n.outerWidth = function (e) {
				return a(r.css(e, "width")) + a(r.css(e, "paddingLeft")) + a(r.css(e, "paddingRight")) + a(r.css(e, "borderLeftWidth")) + a(r.css(e, "borderRightWidth"))
			}, n.startScrolling = i(o.add), n.stopScrolling = i(o.remove), n.env = {
				isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
				supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
				supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
			}
		}, {
			"./class": 2,
			"./dom": 3
		}],
		7: [function (e, t, n) {
			"use strict";
			var i = e("./plugin/destroy"),
				o = e("./plugin/initialize"),
				r = e("./plugin/update");
			t.exports = {
				initialize: o,
				update: r,
				destroy: i
			}
		}, {
			"./plugin/destroy": 9,
			"./plugin/initialize": 17,
			"./plugin/update": 21
		}],
		8: [function (e, t, n) {
			"use strict";
			t.exports = {
				handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
				maxScrollbarLength: null,
				minScrollbarLength: null,
				scrollXMarginOffset: 0,
				scrollYMarginOffset: 0,
				suppressScrollX: !1,
				suppressScrollY: !1,
				swipePropagation: !0,
				swipeEasing: !0,
				useBothWheelAxes: !1,
				wheelPropagation: !1,
				wheelSpeed: 1,
				theme: "default"
			}
		}, {}],
		9: [function (e, t, n) {
			"use strict";
			var i = e("../lib/helper"),
				o = e("../lib/dom"),
				r = e("./instances");
			t.exports = function (e) {
				var t = r.get(e);
				t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), i.removePsClasses(e), r.remove(e))
			}
		}, {
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18
		}],
		10: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				function n(e) {
					return e.getBoundingClientRect()
				}
				var i = function (e) {
					e.stopPropagation()
				};
				t.event.bind(t.scrollbarY, "click", i), t.event.bind(t.scrollbarYRail, "click", function (i) {
					var o = i.pageY - window.pageYOffset - n(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
					a(e, "top", e.scrollTop + o * t.containerHeight), r(e), i.stopPropagation()
				}), t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function (i) {
					var o = i.pageX - window.pageXOffset - n(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
					a(e, "left", e.scrollLeft + o * t.containerWidth), r(e), i.stopPropagation()
				})
			}
			var o = e("../instances"),
				r = e("../update-geometry"),
				a = e("../update-scroll");
			t.exports = function (e) {
				i(e, o.get(e))
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		11: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				function n(n) {
					var o = i + n * t.railXRatio,
						a = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
					t.scrollbarXLeft = o < 0 ? 0 : o > a ? a : o;
					var s = r.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
					c(e, "left", s)
				}
				var i = null,
					o = null,
					s = function (t) {
						n(t.pageX - o), l(e), t.stopPropagation(), t.preventDefault()
					},
					u = function () {
						r.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", s)
					};
				t.event.bind(t.scrollbarX, "mousedown", function (n) {
					o = n.pageX, i = r.toInt(a.css(t.scrollbarX, "left")) * t.railXRatio, r.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
				})
			}

			function o(e, t) {
				function n(n) {
					var o = i + n * t.railYRatio,
						a = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
					t.scrollbarYTop = o < 0 ? 0 : o > a ? a : o;
					var s = r.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
					c(e, "top", s)
				}
				var i = null,
					o = null,
					s = function (t) {
						n(t.pageY - o), l(e), t.stopPropagation(), t.preventDefault()
					},
					u = function () {
						r.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", s)
					};
				t.event.bind(t.scrollbarY, "mousedown", function (n) {
					o = n.pageY, i = r.toInt(a.css(t.scrollbarY, "top")) * t.railYRatio, r.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", s), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
				})
			}
			var r = e("../../lib/helper"),
				a = e("../../lib/dom"),
				s = e("../instances"),
				l = e("../update-geometry"),
				c = e("../update-scroll");
			t.exports = function (e) {
				var t = s.get(e);
				i(e, t), o(e, t)
			}
		}, {
			"../../lib/dom": 3,
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		12: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				function n(n, i) {
					var o = e.scrollTop;
					if (0 === n) {
						if (!t.scrollbarYActive) return !1;
						if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
					}
					var r = e.scrollLeft;
					if (0 === i) {
						if (!t.scrollbarXActive) return !1;
						if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
					}
					return !0
				}
				var i = !1;
				t.event.bind(e, "mouseenter", function () {
					i = !0
				}), t.event.bind(e, "mouseleave", function () {
					i = !1
				});
				var a = !1;
				t.event.bind(t.ownerDocument, "keydown", function (c) {
					if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
						var u = r.matches(t.scrollbarX, ":focus") || r.matches(t.scrollbarY, ":focus");
						if (i || u) {
							var d = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
							if (d) {
								if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
								else
									for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
								if (o.isEditable(d)) return
							}
							var h = 0,
								f = 0;
							switch (c.which) {
								case 37:
									h = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
									break;
								case 38:
									f = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
									break;
								case 39:
									h = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
									break;
								case 40:
									f = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
									break;
								case 33:
									f = 90;
									break;
								case 32:
									f = c.shiftKey ? 90 : -90;
									break;
								case 34:
									f = -90;
									break;
								case 35:
									f = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
									break;
								case 36:
									f = c.ctrlKey ? e.scrollTop : t.containerHeight;
									break;
								default:
									return
							}
							l(e, "top", e.scrollTop - f), l(e, "left", e.scrollLeft + h), s(e), (a = n(h, f)) && c.preventDefault()
						}
					}
				})
			}
			var o = e("../../lib/helper"),
				r = e("../../lib/dom"),
				a = e("../instances"),
				s = e("../update-geometry"),
				l = e("../update-scroll");
			t.exports = function (e) {
				i(e, a.get(e))
			}
		}, {
			"../../lib/dom": 3,
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		13: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				function n(n, i) {
					var o = e.scrollTop;
					if (0 === n) {
						if (!t.scrollbarYActive) return !1;
						if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
					}
					var r = e.scrollLeft;
					if (0 === i) {
						if (!t.scrollbarXActive) return !1;
						if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
					}
					return !0
				}

				function i(e) {
					var t = e.deltaX,
						n = -1 * e.deltaY;
					return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
				}

				function o(t, n) {
					var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
					if (i) {
						var o = window.getComputedStyle(i);
						if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) return !1;
						var r = i.scrollHeight - i.clientHeight;
						if (r > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === r && n < 0)) return !0;
						var a = i.scrollLeft - i.clientWidth;
						if (a > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === a && t > 0)) return !0
					}
					return !1
				}

				function s(s) {
					var c = i(s),
						u = c[0],
						d = c[1];
					o(u, d) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (d ? a(e, "top", e.scrollTop - d * t.settings.wheelSpeed) : a(e, "top", e.scrollTop + u * t.settings.wheelSpeed), l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (u ? a(e, "left", e.scrollLeft + u * t.settings.wheelSpeed) : a(e, "left", e.scrollLeft - d * t.settings.wheelSpeed), l = !0) : (a(e, "top", e.scrollTop - d * t.settings.wheelSpeed), a(e, "left", e.scrollLeft + u * t.settings.wheelSpeed)), r(e), (l = l || n(u, d)) && (s.stopPropagation(), s.preventDefault()))
				}
				var l = !1;
				void 0 !== window.onwheel ? t.event.bind(e, "wheel", s) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", s)
			}
			var o = e("../instances"),
				r = e("../update-geometry"),
				a = e("../update-scroll");
			t.exports = function (e) {
				i(e, o.get(e))
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		14: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				t.event.bind(e, "scroll", function () {
					r(e)
				})
			}
			var o = e("../instances"),
				r = e("../update-geometry");
			t.exports = function (e) {
				i(e, o.get(e))
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19
		}],
		15: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				function n() {
					var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
					return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
				}

				function i() {
					c || (c = setInterval(function () {
						return r.get(e) ? (s(e, "top", e.scrollTop + u.top), s(e, "left", e.scrollLeft + u.left), void a(e)) : void clearInterval(c)
					}, 50))
				}

				function l() {
					c && (clearInterval(c), c = null), o.stopScrolling(e)
				}
				var c = null,
					u = {
						top: 0,
						left: 0
					},
					d = !1;
				t.event.bind(t.ownerDocument, "selectionchange", function () {
					e.contains(n()) ? d = !0 : (d = !1, l())
				}), t.event.bind(window, "mouseup", function () {
					d && (d = !1, l())
				}), t.event.bind(window, "keyup", function () {
					d && (d = !1, l())
				}), t.event.bind(window, "mousemove", function (t) {
					if (d) {
						var n = {
								x: t.pageX,
								y: t.pageY
							},
							r = {
								left: e.offsetLeft,
								right: e.offsetLeft + e.offsetWidth,
								top: e.offsetTop,
								bottom: e.offsetTop + e.offsetHeight
							};
						n.x < r.left + 3 ? (u.left = -5, o.startScrolling(e, "x")) : n.x > r.right - 3 ? (u.left = 5, o.startScrolling(e, "x")) : u.left = 0, n.y < r.top + 3 ? (u.top = r.top + 3 - n.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : n.y > r.bottom - 3 ? (u.top = n.y - r.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
					}
				})
			}
			var o = e("../../lib/helper"),
				r = e("../instances"),
				a = e("../update-geometry"),
				s = e("../update-scroll");
			t.exports = function (e) {
				i(e, r.get(e))
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		16: [function (e, t, n) {
			"use strict";

			function i(e, t, n, i) {
				function o(n, i) {
					var o = e.scrollTop,
						r = e.scrollLeft,
						a = Math.abs(n),
						s = Math.abs(i);
					if (s > a) {
						if (i < 0 && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o) return !t.settings.swipePropagation
					} else if (a > s && (n < 0 && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r)) return !t.settings.swipePropagation;
					return !0
				}

				function l(t, n) {
					s(e, "top", e.scrollTop - n), s(e, "left", e.scrollLeft - t), a(e)
				}

				function c() {
					x = !0
				}

				function u() {
					x = !1
				}

				function d(e) {
					return e.targetTouches ? e.targetTouches[0] : e
				}

				function h(e) {
					return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
				}

				function f(e) {
					if (h(e)) {
						w = !0;
						var t = d(e);
						g.pageX = t.pageX, g.pageY = t.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
					}
				}

				function p(e) {
					if (!w && t.settings.swipePropagation && f(e), !x && w && h(e)) {
						var n = d(e),
							i = {
								pageX: n.pageX,
								pageY: n.pageY
							},
							r = i.pageX - g.pageX,
							a = i.pageY - g.pageY;
						l(r, a), g = i;
						var s = (new Date).getTime(),
							c = s - v;
						c > 0 && (y.x = r / c, y.y = a / c, v = s), o(r, a) && (e.stopPropagation(), e.preventDefault())
					}
				}

				function m() {
					!x && w && (w = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function () {
						return r.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
					}, 10)))
				}
				var g = {},
					v = 0,
					y = {},
					b = null,
					x = !1,
					w = !1;
				n ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", p), t.event.bind(e, "touchend", m)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", p), t.event.bind(e, "pointerup", m)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", p), t.event.bind(e, "MSPointerUp", m)))
			}
			var o = e("../../lib/helper"),
				r = e("../instances"),
				a = e("../update-geometry"),
				s = e("../update-scroll");
			t.exports = function (e) {
				(o.env.supportsTouch || o.env.supportsIePointer) && i(e, r.get(e), o.env.supportsTouch, o.env.supportsIePointer)
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		17: [function (e, t, n) {
			"use strict";
			var i = e("../lib/helper"),
				o = e("../lib/class"),
				r = e("./instances"),
				a = e("./update-geometry"),
				s = {
					"click-rail": e("./handler/click-rail"),
					"drag-scrollbar": e("./handler/drag-scrollbar"),
					keyboard: e("./handler/keyboard"),
					wheel: e("./handler/mouse-wheel"),
					touch: e("./handler/touch"),
					selection: e("./handler/selection")
				},
				l = e("./handler/native-scroll");
			t.exports = function (e, t) {
				t = "object" == typeof t ? t : {}, o.add(e, "ps");
				var n = r.add(e);
				n.settings = i.extend(n.settings, t), o.add(e, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function (t) {
					s[t](e)
				}), l(e), a(e)
			}
		}, {
			"../lib/class": 2,
			"../lib/helper": 6,
			"./handler/click-rail": 10,
			"./handler/drag-scrollbar": 11,
			"./handler/keyboard": 12,
			"./handler/mouse-wheel": 13,
			"./handler/native-scroll": 14,
			"./handler/selection": 15,
			"./handler/touch": 16,
			"./instances": 18,
			"./update-geometry": 19
		}],
		18: [function (e, t, n) {
			"use strict";

			function i(e) {
				function t() {
					l.add(e, "ps--focus")
				}

				function n() {
					l.remove(e, "ps--focus")
				}
				var i = this;
				i.settings = s.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(e, "direction"), i.isNegativeScroll = function () {
					var t = e.scrollLeft,
						n = null;
					return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
				}(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new d, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps__scrollbar-x-rail"), e), i.scrollbarX = u.appendTo(u.e("div", "ps__scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = s.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : s.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = s.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = s.toInt(u.css(i.scrollbarXRail, "marginLeft")) + s.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps__scrollbar-y-rail"), e), i.scrollbarY = u.appendTo(u.e("div", "ps__scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = s.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : s.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? s.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = s.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = s.toInt(u.css(i.scrollbarYRail, "marginTop")) + s.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
			}

			function o(e) {
				return e.getAttribute("data-ps-id")
			}

			function r(e, t) {
				e.setAttribute("data-ps-id", t)
			}

			function a(e) {
				e.removeAttribute("data-ps-id")
			}
			var s = e("../lib/helper"),
				l = e("../lib/class"),
				c = e("./default-setting"),
				u = e("../lib/dom"),
				d = e("../lib/event-manager"),
				h = e("../lib/guid"),
				f = {};
			n.add = function (e) {
				var t = h();
				return r(e, t), f[t] = new i(e), f[t]
			}, n.remove = function (e) {
				delete f[o(e)], a(e)
			}, n.get = function (e) {
				return f[o(e)]
			}
		}, {
			"../lib/class": 2,
			"../lib/dom": 3,
			"../lib/event-manager": 4,
			"../lib/guid": 5,
			"../lib/helper": 6,
			"./default-setting": 8
		}],
		19: [function (e, t, n) {
			"use strict";

			function i(e, t) {
				return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
			}

			function o(e, t) {
				var n = {
					width: t.railXWidth
				};
				t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, s.css(t.scrollbarXRail, n);
				var i = {
					top: e.scrollTop,
					height: t.railYHeight
				};
				t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, s.css(t.scrollbarYRail, i), s.css(t.scrollbarX, {
					left: t.scrollbarXLeft,
					width: t.scrollbarXWidth - t.railBorderXWidth
				}), s.css(t.scrollbarY, {
					top: t.scrollbarYTop,
					height: t.scrollbarYHeight - t.railBorderYWidth
				})
			}
			var r = e("../lib/helper"),
				a = e("../lib/class"),
				s = e("../lib/dom"),
				l = e("./instances"),
				c = e("./update-scroll");
			t.exports = function (e) {
				var t = l.get(e);
				t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
				var n;
				e.contains(t.scrollbarXRail) || ((n = s.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && n.forEach(function (e) {
					s.remove(e)
				}), s.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || ((n = s.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && n.forEach(function (e) {
					s.remove(e)
				}), s.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = i(t, r.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = r.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = i(t, r.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = r.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), t.scrollbarXActive ? a.add(e, "ps--active-x") : (a.remove(e, "ps--active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? a.add(e, "ps--active-y") : (a.remove(e, "ps--active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
			}
		}, {
			"../lib/class": 2,
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18,
			"./update-scroll": 20
		}],
		20: [function (e, t, n) {
			"use strict";
			var i = e("./instances"),
				o = function (e) {
					var t = document.createEvent("Event");
					return t.initEvent(e, !0, !0), t
				};
			t.exports = function (e, t, n) {
				if (void 0 === e) throw "You must provide an element to the update-scroll function";
				if (void 0 === t) throw "You must provide an axis to the update-scroll function";
				if (void 0 === n) throw "You must provide a value to the update-scroll function";
				"top" === t && n <= 0 && (e.scrollTop = n = 0, e.dispatchEvent(o("ps-y-reach-start"))), "left" === t && n <= 0 && (e.scrollLeft = n = 0, e.dispatchEvent(o("ps-x-reach-start")));
				var r = i.get(e);
				"top" === t && n >= r.contentHeight - r.containerHeight && (n = r.contentHeight - r.containerHeight, n - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, e.dispatchEvent(o("ps-y-reach-end"))), "left" === t && n >= r.contentWidth - r.containerWidth && (n = r.contentWidth - r.containerWidth, n - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, e.dispatchEvent(o("ps-x-reach-end"))), void 0 === r.lastTop && (r.lastTop = e.scrollTop), void 0 === r.lastLeft && (r.lastLeft = e.scrollLeft), "top" === t && n < r.lastTop && e.dispatchEvent(o("ps-scroll-up")), "top" === t && n > r.lastTop && e.dispatchEvent(o("ps-scroll-down")), "left" === t && n < r.lastLeft && e.dispatchEvent(o("ps-scroll-left")), "left" === t && n > r.lastLeft && e.dispatchEvent(o("ps-scroll-right")), "top" === t && n !== r.lastTop && (e.scrollTop = r.lastTop = n, e.dispatchEvent(o("ps-scroll-y"))), "left" === t && n !== r.lastLeft && (e.scrollLeft = r.lastLeft = n, e.dispatchEvent(o("ps-scroll-x")))
			}
		}, {
			"./instances": 18
		}],
		21: [function (e, t, n) {
			"use strict";
			var i = e("../lib/helper"),
				o = e("../lib/dom"),
				r = e("./instances"),
				a = e("./update-geometry"),
				s = e("./update-scroll");
			t.exports = function (e) {
				var t = r.get(e);
				t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(o.css(t.scrollbarXRail, "marginLeft")) + i.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(o.css(t.scrollbarYRail, "marginTop")) + i.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), a(e), s(e, "top", e.scrollTop), s(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
			}
		}, {
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18,
			"./update-geometry": 19,
			"./update-scroll": 20
		}]
	}, {}, [1]),
	function (e) {
		var t = !1,
			n = {
				data: [],
				placeholder: "",
				secondaryPlaceholder: ""
			};
		e(document).ready(function () {
			e(document).on("click", ".chip .close", function (t) {
				var n = e(this);
				n.closest(".chips").data("initialized") || n.closest(".chip").remove()
			})
		}), e.fn.material_chip = function (i) {
			var o = this;
			return this.$el = e(this), this.$document = e(document), this.SELS = {
				CHIPS: ".chips",
				CHIP: ".chip",
				INPUT: "input",
				DELETE: ".fa",
				SELECTED_CHIP: ".selected"
			}, "data" === i ? this.$el.data("chips") : "options" === i ? this.$el.data("options") : (this.$el.data("options", e.extend({}, n, i)), this.init = function () {
				var t = 0;
				o.$el.each(function () {
					var n = e(this);
					if (!n.data("initialized")) {
						var i = n.data("options");
						(!i.data || !i.data instanceof Array) && (i.data = []), n.data("chips", i.data), n.data("index", t), n.data("initialized", !0), n.hasClass(o.SELS.CHIPS) || n.addClass("chips"), o.chips(n), t++
					}
				})
			}, this.handleEvents = function () {
				var t = o.SELS;
				o.$document.on("click", t.CHIPS, function (n) {
					e(n.target).find(t.INPUT).focus()
				}), o.$document.on("click", t.CHIP, function (n) {
					e(t.CHIP).removeClass("selected"), e(this).toggleClass("selected")
				}), o.$document.on("keydown", function (n) {
					if (!e(n.target).is("input, textarea")) {
						var i, r = o.$document.find(t.CHIP + t.SELECTED_CHIP),
							a = r.closest(t.CHIPS),
							s = r.siblings(t.CHIP).length;
						if (r.length) {
							var l = 8 === n.which || 46 === n.which,
								c = 37 === n.which,
								u = 39 === n.which;
							if (l) {
								n.preventDefault();
								var d = a.data("index");
								i = r.index(), o.deleteChip(d, i, a);
								var h = null;
								i + 1 < s ? h = i : i !== s && i + 1 !== s || (h = s - 1), h < 0 && (h = null), null !== h && o.selectChip(d, h, a), s || a.find("input").focus()
							} else if (c) {
								if ((i = r.index() - 1) < 0) return;
								e(t.CHIP).removeClass("selected"), o.selectChip(a.data("index"), i, a)
							} else if (u) {
								if (i = r.index() + 1, e(t.CHIP).removeClass("selected"), i > s) return void a.find("input").focus();
								o.selectChip(a.data("index"), i, a)
							}
						}
					}
				}), o.$document.on("focusin", t.CHIPS + " " + t.INPUT, function (n) {
					e(n.target).closest(t.CHIPS).addClass("focus"), e(t.CHIP).removeClass("selected")
				}), o.$document.on("focusout", t.CHIPS + " " + t.INPUT, function (n) {
					e(n.target).closest(t.CHIPS).removeClass("focus")
				}), o.$document.on("keydown", t.CHIPS + " " + t.INPUT, function (n) {
					var i = e(n.target),
						r = i.closest(t.CHIPS),
						a = r.data("index"),
						s = r.children(t.CHIP).length;
					if (13 === n.which) return n.preventDefault(), o.addChip(a, {
						tag: i.val()
					}, r), void i.val("");
					var l = 8 === n.keyCode || 37 === n.keyCode,
						c = "" === i.val();
					return l && c && s ? (o.selectChip(a, s - 1, r), void i.blur()) : void 0
				}), o.$document.on("click", t.CHIPS + " " + t.DELETE, function (n) {
					var i = e(n.target),
						r = i.closest(t.CHIPS),
						a = i.closest(t.CHIP);
					n.stopPropagation(), o.deleteChip(r.data("index"), a.index(), r), r.find("input").focus()
				})
			}, this.chips = function (e) {
				var t = "";
				e.data("options");
				e.data("chips").forEach(function (e) {
					t += o.renderChip(e)
				}), t += '<input class="input" placeholder="">', e.html(t), o.setPlaceholder(e)
			}, this.renderChip = function (e) {
				if (e.tag) {
					var t = '<div class="chip">' + e.tag;
					return e.image && (t += ' <img src="' + e.image + '"> '), t += '<i class="close fa fa-times"></i>', t += "</div>"
				}
			}, this.setPlaceholder = function (e) {
				var t = e.data("options");
				e.data("chips").length && t.placeholder ? e.find("input").prop("placeholder", t.placeholder) : !e.data("chips").length && t.secondaryPlaceholder && e.find("input").prop("placeholder", t.secondaryPlaceholder)
			}, this.isValid = function (e, t) {
				for (var n = e.data("chips"), i = !1, o = 0; o < n.length; o++)
					if (n[o].tag === t.tag) return void(i = !0);
				return "" !== t.tag && !i
			}, this.addChip = function (t, n, i) {
				if (o.isValid(i, n)) {
					i.data("options");
					var r = o.renderChip(n);
					i.data("chips").push(n), e(r).insertBefore(i.find("input")), i.trigger("chip.add", n), o.setPlaceholder(i)
				}
			}, this.deleteChip = function (e, t, n) {
				var i = n.data("chips")[t];
				n.find(".chip").eq(t).remove(), n.data("chips").splice(t, 1), n.trigger("chip.delete", i), o.setPlaceholder(n)
			}, this.selectChip = function (e, t, n) {
				var i = n.find(".chip").eq(t);
				i && !1 === i.hasClass("selected") && (i.addClass("selected"), n.trigger("chip.select", n.data("chips")[t]))
			}, this.getChipsElement = function (e, t) {
				return t.eq(e)
			}, this.init(), void(t || (this.handleEvents(), t = !0)))
		}
	}(),
	function (e) {
		"use strict";

		function t(e) {
			var t = ["O", "Moz", "ms", "Ms", "Webkit"],
				n = t.length;
			if (void 0 !== s.style[e]) return !0;
			for (e = e.charAt(0).toUpperCase() + e.substr(1); --n > -1 && void 0 === s.style[t[n] + e];);
			return n >= 0
		}

		function n() {
			r = e.innerWidth || document.documentElement.clientWidth, a = e.innerHeight || document.documentElement.clientHeight
		}

		function i(e, t, n) {
			e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function () {
				n.call(e)
			})
		}

		function o(t) {
			e.requestAnimationFrame(function () {
				"scroll" !== t.type && n();
				for (var e = 0, i = g.length; e < i; e++) "scroll" !== t.type && (g[e].coverImage(), g[e].clipContainer()), g[e].onScroll()
			})
		}
		Date.now || (Date.now = function () {
			return (new Date).getTime()
		}), e.requestAnimationFrame || function () {
			for (var t = ["webkit", "moz"], n = 0; n < t.length && !e.requestAnimationFrame; ++n) {
				var i = t[n];
				e.requestAnimationFrame = e[i + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i + "CancelAnimationFrame"] || e[i + "CancelRequestAnimationFrame"]
			}
			if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
				var o = 0;
				e.requestAnimationFrame = function (e) {
					var t = Date.now(),
						n = Math.max(o + 16, t);
					return setTimeout(function () {
						e(o = n)
					}, n - t)
				}, e.cancelAnimationFrame = clearTimeout
			}
		}();
		var r, a, s = document.createElement("div"),
			l = t("transform"),
			c = t("perspective"),
			u = navigator.userAgent,
			d = u.toLowerCase().indexOf("android") > -1,
			h = /iPad|iPhone|iPod/.test(u) && !e.MSStream,
			f = u.toLowerCase().indexOf("firefox") > -1,
			p = u.indexOf("MSIE ") > -1 || u.indexOf("Trident/") > -1 || u.indexOf("Edge/") > -1,
			m = document.all && !e.atob;
		n();
		var g = [],
			v = function () {
				var e = 0;
				return function (t, n) {
					var i, o = this;
					if (o.$item = t, o.defaults = {
							type: "scroll",
							speed: .5,
							imgSrc: null,
							imgWidth: null,
							imgHeight: null,
							elementInViewport: null,
							zIndex: -100,
							noAndroid: !1,
							noIos: !0,
							onScroll: null,
							onInit: null,
							onDestroy: null,
							onCoverImage: null
						}, i = JSON.parse(o.$item.getAttribute("data-jarallax") || "{}"), o.options = o.extend({}, o.defaults, i, n), !(!l || d && o.options.noAndroid || h && o.options.noIos)) {
						o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
						var r = o.options.elementInViewport;
						r && "object" == typeof r && void 0 !== r.length && (r = r[0]), !r instanceof Element && (r = null), o.options.elementInViewport = r, o.instanceID = e++, o.image = {
							src: o.options.imgSrc || null,
							$container: null,
							$item: null,
							width: o.options.imgWidth || null,
							height: o.options.imgHeight || null,
							useImgTag: h || d || p,
							position: !c || f ? "absolute" : "fixed"
						}, o.initImg() && o.init()
					}
				}
			}();
		v.prototype.css = function (t, n) {
			if ("string" == typeof n) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(n) : t.style[n];
			n.transform && (c && (n.transform += " translateZ(0)"), n.WebkitTransform = n.MozTransform = n.msTransform = n.OTransform = n.transform);
			for (var i in n) t.style[i] = n[i];
			return t
		}, v.prototype.extend = function (e) {
			e = e || {};
			for (var t = 1; t < arguments.length; t++)
				if (arguments[t])
					for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
			return e
		}, v.prototype.initImg = function () {
			var e = this;
			return null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)
		}, v.prototype.init = function () {
			function e() {
				t.coverImage(), t.clipContainer(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), setTimeout(function () {
					t.$item && t.css(t.$item, {
						"background-image": "none",
						"background-attachment": "scroll",
						"background-size": "auto"
					})
				}, 0)
			}
			var t = this,
				n = {
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					overflow: "hidden",
					pointerEvents: "none"
				},
				i = {};
			t.$item.setAttribute("data-jarallax-original-styles", t.$item.getAttribute("style")), "static" === t.css(t.$item, "position") && t.css(t.$item, {
				position: "relative"
			}), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {
				zIndex: 0
			}), t.image.$container = document.createElement("div"), t.css(t.image.$container, n), t.css(t.image.$container, {
				visibility: "hidden",
				"z-index": t.options.zIndex
			}), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag ? (t.image.$item = document.createElement("img"), t.image.$item.setAttribute("src", t.image.src), i = t.extend({
				"max-width": "none"
			}, n, i)) : (t.image.$item = document.createElement("div"), i = t.extend({
				"background-position": "50% 50%",
				"background-size": "100% auto",
				"background-repeat": "no-repeat no-repeat",
				"background-image": 'url("' + t.image.src + '")'
			}, n, i));
			for (var o = 0, r = t.$item; null !== r && r !== document && 0 === o;) {
				var a = t.css(r, "-webkit-transform") || t.css(r, "-moz-transform") || t.css(r, "transform");
				a && "none" !== a && (o = 1, t.css(t.image.$container, {
					transform: "translateX(0) translateY(0)"
				})), r = r.parentNode
			}(o || "opacity" === t.options.type || "scale" === t.options.type || "scale-opacity" === t.options.type) && (t.image.position = "absolute"), i.position = t.image.position, t.css(t.image.$item, i), t.image.$container.appendChild(t.image.$item), t.image.width && t.image.height ? e() : t.getImageSize(t.image.src, function (n, i) {
				t.image.width = n, t.image.height = i, e()
			}), g.push(t)
		}, v.prototype.destroy = function () {
			for (var e = this, t = 0, n = g.length; t < n; t++)
				if (g[t].instanceID === e.instanceID) {
					g.splice(t, 1);
					break
				}
			var i = e.$item.getAttribute("data-jarallax-original-styles");
			e.$item.removeAttribute("data-jarallax-original-styles"), "null" === i ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", i), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
			for (var o in e) delete e[o]
		}, v.prototype.getImageSize = function (e, t) {
			if (e && t) {
				var n = new Image;
				n.onload = function () {
					t(n.width, n.height)
				}, n.src = e
			}
		}, v.prototype.clipContainer = function () {
			if (!m) {
				var e = this,
					t = e.image.$container.getBoundingClientRect(),
					n = t.width,
					i = t.height;
				e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));
				var o = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + n + "px " + i + "px 0);", "   clip: rect(0, " + n + "px, " + i + "px, 0);", "}"].join("\n");
				e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = o : e.$clipStyles.innerHTML = o
			}
		}, v.prototype.coverImage = function () {
			var e = this;
			if (e.image.width && e.image.height) {
				var t = e.image.$container.getBoundingClientRect(),
					n = t.width,
					i = t.height,
					o = t.left,
					r = e.image.width,
					s = e.image.height,
					l = e.options.speed,
					c = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
					u = 0,
					d = 0,
					h = i,
					f = 0,
					p = 0;
				c && (u = l < 0 ? l * Math.max(i, a) : l * (i + a), l > 1 ? h = Math.abs(u - a) : l < 0 ? h = u / l + Math.abs(u) : h += Math.abs(a - i) * (1 - l), u /= 2), (d = h * r / s) < n && (h = (d = n) * s / r), c ? (f = o + (n - d) / 2, p = (a - h) / 2) : (f = (n - d) / 2, p = (i - h) / 2), "absolute" === e.image.position && (f -= o), e.parallaxScrollDistance = u, e.css(e.image.$item, {
					width: d + "px",
					height: h + "px",
					marginLeft: f + "px",
					marginTop: p + "px"
				}), e.options.onCoverImage && e.options.onCoverImage.call(e)
			}
		}, v.prototype.isVisible = function () {
			return this.isElementInViewport || !1
		}, v.prototype.onScroll = function (e) {
			var t = this;
			if (t.image.width && t.image.height) {
				var n = t.$item.getBoundingClientRect(),
					i = n.top,
					o = n.height,
					s = {
						visibility: "visible",
						backgroundPosition: "50% 50%"
					},
					l = n;
				if (t.options.elementInViewport && (l = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = l.bottom >= 0 && l.right >= 0 && l.top <= a && l.left <= r, e || t.isElementInViewport) {
					var c = Math.max(0, i),
						u = Math.max(0, o + i),
						d = Math.max(0, -i),
						h = Math.max(0, i + o - a),
						f = Math.max(0, o - (i + o - a)),
						p = Math.max(0, -i + a - o),
						m = 1 - 2 * (a - i) / (a + o),
						g = 1;
					if (o < a ? g = 1 - (d || h) / o : u <= a ? g = u / a : f <= a && (g = f / a), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "", s.opacity = g), "scale" === t.options.type || "scale-opacity" === t.options.type) {
						var v = 1;
						t.options.speed < 0 ? v -= t.options.speed * g : v += t.options.speed * (1 - g), s.transform = "scale(" + v + ")"
					}
					if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
						var y = t.parallaxScrollDistance * m;
						"absolute" === t.image.position && (y -= i), s.transform = "translateY(" + y + "px)"
					}
					t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
						section: n,
						beforeTop: c,
						beforeTopEnd: u,
						afterTop: d,
						beforeBottom: h,
						beforeBottomEnd: f,
						afterBottom: p,
						visiblePercent: g,
						fromViewportCenter: m
					})
				}
			}
		}, i(e, "scroll", o), i(e, "resize", o), i(e, "orientationchange", o), i(e, "load", o);
		var y = function (e) {
			("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
			var t, n = arguments[1],
				i = Array.prototype.slice.call(arguments, 2),
				o = e.length,
				r = 0;
			for (r; r < o; r++)
				if ("object" == typeof n || void 0 === n ? e[r].jarallax || (e[r].jarallax = new v(e[r], n)) : e[r].jarallax && (t = e[r].jarallax[n].apply(e[r].jarallax, i)), void 0 !== t) return t;
			return e
		};
		y.constructor = v;
		var b = e.jarallax;
		if (e.jarallax = y, e.jarallax.noConflict = function () {
				return e.jarallax = b, this
			}, "undefined" != typeof jQuery) {
			var x = function () {
				var t = arguments || [];
				Array.prototype.unshift.call(t, this);
				var n = y.apply(e, t);
				return "object" != typeof n ? n : this
			};
			x.constructor = v;
			var w = jQuery.fn.jarallax;
			jQuery.fn.jarallax = x, jQuery.fn.jarallax.noConflict = function () {
				return jQuery.fn.jarallax = w, this
			}
		}
		i(e, "DOMContentLoaded", function () {
			y(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
		})
	}(window),
	function (e) {
		"use strict";

		function t(e) {
			e = e || {};
			for (var t = 1; t < arguments.length; t++)
				if (arguments[t])
					for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
			return e
		}

		function n() {
			this._done = [], this._fail = []
		}

		function i(e, t, n) {
			e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function () {
				n.call(e)
			})
		}
		n.prototype = {
			execute: function (e, t) {
				var n = e.length;
				for (t = Array.prototype.slice.call(t); n--;) e[n].apply(null, t)
			},
			resolve: function () {
				this.execute(this._done, arguments)
			},
			reject: function () {
				this.execute(this._fail, arguments)
			},
			done: function (e) {
				this._done.push(e)
			},
			fail: function (e) {
				this._fail.push(e)
			}
		};
		var o = function () {
			var e = 0;
			return function (n, i) {
				var o = this;
				o.url = n, o.options_default = {
					autoplay: 1,
					loop: 1,
					mute: 1,
					controls: 0,
					startTime: 0,
					endTime: 0
				}, o.options = t({}, o.options_default, i), o.videoID = o.parseURL(n), o.videoID && (o.ID = e++, o.loadAPI(), o.init())
			}
		}();
		o.prototype.parseURL = function (e) {
			var t = function (e) {
					var t = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
						n = e.match(t);
					return !(!n || 11 !== n[1].length) && n[1]
				}(e),
				n = function (e) {
					var t = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
						n = e.match(t);
					return !(!n || !n[3]) && n[3]
				}(e),
				i = function (e) {
					for (var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {}, i = 0, o = 0; o < t.length; o++) {
						var r = t[o].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
						r && r[1] && r[2] && (n["ogv" === r[1] ? "ogg" : r[1]] = r[2], i = 1)
					}
					return !!i && n
				}(e);
			return t ? (this.type = "youtube", t) : n ? (this.type = "vimeo", n) : !!i && (this.type = "local", i)
		}, o.prototype.isValid = function () {
			return !!this.videoID
		}, o.prototype.on = function (e, t) {
			this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
		}, o.prototype.off = function (e, t) {
			if (this.userEventsList && this.userEventsList[e])
				if (t)
					for (var n = 0; n < this.userEventsList[e].length; n++) this.userEventsList[e][n] === t && (this.userEventsList[e][n] = !1);
				else delete this.userEventsList[e]
		}, o.prototype.fire = function (e) {
			var t = [].slice.call(arguments, 1);
			if (this.userEventsList && void 0 !== this.userEventsList[e])
				for (var n in this.userEventsList[e]) this.userEventsList[e][n] && this.userEventsList[e][n].apply(this, t)
		}, o.prototype.play = function (e) {
			var t = this;
			t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function (e) {
				e && t.player.play()
			})), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.play()))
		}, o.prototype.pause = function () {
			this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
		}, o.prototype.getImageURL = function (e) {
			var t = this;
			if (t.videoImage) e(t.videoImage);
			else {
				if ("youtube" === t.type) {
					var n = ["maxresdefault", "sddefault", "hqdefault", "0"],
						i = 0,
						o = new Image;
					o.onload = function () {
						120 !== (this.naturalWidth || this.width) || i === n.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg", e(t.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg")
					}, o.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg"
				}
				if ("vimeo" === t.type) {
					var r = new XMLHttpRequest;
					r.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), r.onreadystatechange = function () {
						if (4 === this.readyState && this.status >= 200 && this.status < 400) {
							var n = JSON.parse(this.responseText);
							t.videoImage = n[0].thumbnail_large, e(t.videoImage)
						}
					}, r.send(), r = null
				}
			}
		}, o.prototype.getIframe = function (t) {
			var n = this;
			n.$iframe ? t(n.$iframe) : n.onAPIready(function () {
				var o;
				if (n.$iframe || ((o = document.createElement("div")).style.display = "none"), "youtube" === n.type) {
					n.playerOptions = {}, n.playerOptions.videoId = n.videoID, n.playerOptions.playerVars = {
						autohide: 1,
						rel: 0,
						autoplay: 0
					}, n.options.controls || (n.playerOptions.playerVars.iv_load_policy = 3, n.playerOptions.playerVars.modestbranding = 1, n.playerOptions.playerVars.controls = 0, n.playerOptions.playerVars.showinfo = 0, n.playerOptions.playerVars.disablekb = 1);
					var r, a;
					n.playerOptions.events = {
						onReady: function (e) {
							n.options.mute && e.target.mute(), n.options.autoplay && n.play(n.options.startTime), n.fire("ready", e)
						},
						onStateChange: function (e) {
							n.options.loop && e.data === YT.PlayerState.ENDED && n.play(n.options.startTime), r || e.data !== YT.PlayerState.PLAYING || (r = 1, n.fire("started", e)), e.data === YT.PlayerState.PLAYING && n.fire("play", e), e.data === YT.PlayerState.PAUSED && n.fire("pause", e), e.data === YT.PlayerState.ENDED && n.fire("end", e), n.options.endTime && (e.data === YT.PlayerState.PLAYING ? a = setInterval(function () {
								n.options.endTime && n.player.getCurrentTime() >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
							}, 150) : clearInterval(a))
						}
					};
					var s = !n.$iframe;
					if (s) {
						var l = document.createElement("div");
						l.setAttribute("id", n.playerID), o.appendChild(l), document.body.appendChild(o)
					}
					n.player = n.player || new e.YT.Player(n.playerID, n.playerOptions), s && (n.$iframe = document.getElementById(n.playerID), n.videoWidth = parseInt(n.$iframe.getAttribute("width"), 10) || 1280, n.videoHeight = parseInt(n.$iframe.getAttribute("height"), 10) || 720)
				}
				if ("vimeo" === n.type) {
					n.playerOptions = "", n.playerOptions += "player_id=" + n.playerID, n.playerOptions += "&autopause=0", n.options.controls || (n.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), n.playerOptions += "&autoplay=" + (n.options.autoplay ? "1" : "0"), n.playerOptions += "&loop=" + (n.options.loop ? 1 : 0), n.$iframe || (n.$iframe = document.createElement("iframe"), n.$iframe.setAttribute("id", n.playerID), n.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + n.videoID + "?" + n.playerOptions), n.$iframe.setAttribute("frameborder", "0"), o.appendChild(n.$iframe), document.body.appendChild(o)), n.player = n.player || new Vimeo.Player(n.$iframe), n.player.getVideoWidth().then(function (e) {
						n.videoWidth = e || 1280
					}), n.player.getVideoHeight().then(function (e) {
						n.videoHeight = e || 720
					}), n.player.setVolume(n.options.mute ? 0 : 100);
					var c;
					n.player.on("timeupdate", function (e) {
						c || n.fire("started", e), c = 1, n.options.endTime && n.options.endTime && e.seconds >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
					}), n.player.on("play", function (e) {
						n.fire("play", e), n.options.startTime && 0 === e.seconds && n.play(n.options.startTime)
					}), n.player.on("pause", function (e) {
						n.fire("pause", e)
					}), n.player.on("ended", function (e) {
						n.fire("end", e)
					}), n.player.on("loaded", function (e) {
						n.fire("ready", e)
					})
				}
				if ("local" === n.type) {
					if (!n.$iframe) {
						n.$iframe = document.createElement("video"), n.options.mute && (n.$iframe.muted = !0), n.options.loop && (n.$iframe.loop = !0), n.$iframe.setAttribute("id", n.playerID), o.appendChild(n.$iframe), document.body.appendChild(o);
						for (var u in n.videoID) ! function (e, t, n) {
							var i = document.createElement("source");
							i.src = t, i.type = n, e.appendChild(i)
						}(n.$iframe, n.videoID[u], "video/" + u)
					}
					n.player = n.player || n.$iframe;
					var d;
					i(n.player, "playing", function (e) {
						d || n.fire("started", e), d = 1
					}), i(n.player, "timeupdate", function () {
						n.options.endTime && n.options.endTime && this.currentTime >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
					}), i(n.player, "play", function (e) {
						n.fire("play", e)
					}), i(n.player, "pause", function (e) {
						n.fire("pause", e)
					}), i(n.player, "ended", function (e) {
						n.fire("end", e)
					}), i(n.player, "loadedmetadata", function () {
						n.videoWidth = this.videoWidth || 1280, n.videoHeight = this.videoHeight || 720, n.fire("ready"), n.options.autoplay && n.play(n.options.startTime)
					})
				}
				t(n.$iframe)
			})
		}, o.prototype.init = function () {
			var e = this;
			e.playerID = "VideoWorker-" + e.ID
		};
		var r = 0,
			a = 0;
		o.prototype.loadAPI = function () {
			var t = this;
			if (!r || !a) {
				var n = "";
				if ("youtube" !== t.type || r || (r = 1, n = "//www.youtube.com/iframe_api"), "vimeo" !== t.type || a || (a = 1, n = "//player.vimeo.com/api/player.js"), n) {
					"file://" === e.location.origin && (n = "http:" + n);
					var i = document.createElement("script"),
						o = document.getElementsByTagName("head")[0];
					i.src = n, o.appendChild(i), o = null, i = null
				}
			}
		};
		var s = 0,
			l = 0,
			c = new n,
			u = new n;
		o.prototype.onAPIready = function (t) {
			var n = this;
			if ("youtube" === n.type && ("undefined" != typeof YT && 0 !== YT.loaded || s ? "object" == typeof YT && 1 === YT.loaded ? t() : c.done(function () {
					t()
				}) : (s = 1, e.onYouTubeIframeAPIReady = function () {
					e.onYouTubeIframeAPIReady = null, c.resolve("done"), t()
				})), "vimeo" === n.type)
				if ("undefined" != typeof Vimeo || l) "undefined" != typeof Vimeo ? t() : u.done(function () {
					t()
				});
				else {
					l = 1;
					var i = setInterval(function () {
						"undefined" != typeof Vimeo && (clearInterval(i), u.resolve("done"), t())
					}, 20)
				}
			"local" === n.type && t()
		}, e.VideoWorker = o
	}(window),
	function () {
		"use strict";
		if ("undefined" != typeof jarallax) {
			var e = jarallax.constructor,
				t = e.prototype.init;
			e.prototype.init = function () {
				var e = this;
				t.apply(e), e.video && e.video.getIframe(function (t) {
					var n = t.parentNode;
					e.css(t, {
						position: e.image.position,
						top: "0px",
						left: "0px",
						right: "0px",
						bottom: "0px",
						width: "100%",
						height: "100%",
						maxWidth: "none",
						maxHeight: "none",
						visibility: "hidden",
						margin: 0,
						zIndex: -1
					}), e.$video = t, e.image.$container.appendChild(t), n.parentNode.removeChild(n)
				})
			};
			var n = e.prototype.coverImage;
			e.prototype.coverImage = function () {
				var e = this;
				n.apply(e), e.video && "IFRAME" === e.image.$item.nodeName && e.css(e.image.$item, {
					height: e.image.$item.getBoundingClientRect().height + 400 + "px",
					marginTop: -200 + parseFloat(e.css(e.image.$item, "margin-top")) + "px"
				})
			};
			var i = e.prototype.initImg;
			e.prototype.initImg = function () {
				var e = this,
					t = i.apply(e);
				if (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || !1), e.options.videoSrc) {
					var n = new VideoWorker(e.options.videoSrc, {
						startTime: e.options.videoStartTime || 0,
						endTime: e.options.videoEndTime || 0
					});
					if (n.isValid() && (e.image.useImgTag = !0, n.on("ready", function () {
							var t = e.onScroll;
							e.onScroll = function () {
								t.apply(e), e.isVisible() ? n.play() : n.pause()
							}
						}), n.on("started", function () {
							e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.options.imgWidth = e.video.videoWidth || 1280, e.image.height = e.options.imgHeight = e.video.videoHeight || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
						}), e.video = n, "local" !== n.type && n.getImageURL(function (t) {
							e.image.src = t, e.init()
						})), "local" !== n.type) return !1;
					if (!t) return e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0
				}
				return t
			};
			var o = e.prototype.destroy;
			e.prototype.destroy = function () {
				var e = this;
				o.apply(e)
			}
		}
	}(), $.fn.mdb_autocomplete = function (e) {
		var t = {
			data: {}
		};
		return e = $.extend(t, e), this.each(function () {
			var t = $(this),
				n = e.data;
			if (Object.keys(n).length) {
				var i = $('<ul class="mdb-autocomplete-wrap"></ul>');
				i.insertAfter($(this))
			}
			t.on("keyup", function (e) {
				var o = t.val();
				if (i.empty(), o.length)
					for (var r in n)
						if (-1 !== n[r].toLowerCase().indexOf(o.toLowerCase())) {
							var a = $("<li>" + n[r] + "</li>");
							i.append(a)
						}
				13 == e.which && (i.children(":first").trigger("click"), i.empty()), 0 == o.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible")
			}), i.on("click", "li", function () {
				t.val($(this).text()), i.empty()
			}), $(".mdb-autocomplete-clear").on("click", function (e) {
				e.preventDefault(), t.val(""), $(this).css("visibility", "hidden"), i.empty(), $(this).parent().find("label").removeClass("active")
			})
		})
	};
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	Prism = function () {
		var e = /\blang(?:uage)?-(\w+)\b/i,
			t = 0,
			n = _self.Prism = {
				util: {
					encode: function (e) {
						return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
					},
					type: function (e) {
						return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
					},
					objId: function (e) {
						return e.__id || Object.defineProperty(e, "__id", {
							value: ++t
						}), e.__id
					},
					clone: function (e) {
						switch (n.util.type(e)) {
							case "Object":
								var t = {};
								for (var i in e) e.hasOwnProperty(i) && (t[i] = n.util.clone(e[i]));
								return t;
							case "Array":
								return e.map && e.map(function (e) {
									return n.util.clone(e)
								})
						}
						return e
					}
				},
				languages: {
					extend: function (e, t) {
						var i = n.util.clone(n.languages[e]);
						for (var o in t) i[o] = t[o];
						return i
					},
					insertBefore: function (e, t, i, o) {
						var r = (o = o || n.languages)[e];
						if (2 == arguments.length) {
							i = arguments[1];
							for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
							return r
						}
						var s = {};
						for (var l in r)
							if (r.hasOwnProperty(l)) {
								if (l == t)
									for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
								s[l] = r[l]
							}
						return n.languages.DFS(n.languages, function (t, n) {
							n === o[e] && t != e && (this[t] = s)
						}), o[e] = s
					},
					DFS: function (e, t, i, o) {
						o = o || {};
						for (var r in e) e.hasOwnProperty(r) && (t.call(e, r, e[r], i || r), "Object" !== n.util.type(e[r]) || o[n.util.objId(e[r])] ? "Array" !== n.util.type(e[r]) || o[n.util.objId(e[r])] || (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, r, o)) : (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, null, o)))
					}
				},
				plugins: {},
				highlightAll: function (e, t) {
					var i = {
						callback: t,
						selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};
					n.hooks.run("before-highlightall", i);
					for (var o, r = i.elements || document.querySelectorAll(i.selector), a = 0; o = r[a++];) n.highlightElement(o, !0 === e, i.callback)
				},
				highlightElement: function (t, i, o) {
					for (var r, a, s = t; s && !e.test(s.className);) s = s.parentNode;
					s && (r = (s.className.match(e) || [, ""])[1], a = n.languages[r]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r, s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r);
					var l = t.textContent,
						c = {
							element: t,
							language: r,
							grammar: a,
							code: l
						};
					if (l && a)
						if (n.hooks.run("before-highlight", c), i && _self.Worker) {
							var u = new Worker(n.filename);
							u.onmessage = function (e) {
								c.highlightedCode = e.data, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
							}, u.postMessage(JSON.stringify({
								language: c.language,
								code: c.code,
								immediateClose: !0
							}))
						} else c.highlightedCode = n.highlight(c.code, c.grammar, c.language), n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(t), n.hooks.run("after-highlight", c), n.hooks.run("complete", c);
					else n.hooks.run("complete", c)
				},
				highlight: function (e, t, o) {
					var r = n.tokenize(e, t);
					return i.stringify(n.util.encode(r), o)
				},
				tokenize: function (e, t) {
					var i = n.Token,
						o = [e],
						r = t.rest;
					if (r) {
						for (var a in r) t[a] = r[a];
						delete t.rest
					}
					e: for (var a in t)
						if (t.hasOwnProperty(a) && t[a]) {
							var s = t[a];
							s = "Array" === n.util.type(s) ? s : [s];
							for (var l = 0; l < s.length; ++l) {
								var c = s[l],
									u = c.inside,
									d = !!c.lookbehind,
									h = !!c.greedy,
									f = 0,
									p = c.alias;
								c = c.pattern || c;
								for (var m = 0; m < o.length; m++) {
									var g = o[m];
									if (o.length > e.length) break e;
									if (!(g instanceof i)) {
										c.lastIndex = 0;
										var v = c.exec(g),
											y = 1;
										if (!v && h && m != o.length - 1) {
											var b = o[m + 1].matchedStr || o[m + 1],
												x = g + b;
											if (m < o.length - 2 && (x += o[m + 2].matchedStr || o[m + 2]), c.lastIndex = 0, !(v = c.exec(x))) continue;
											if ((k = v.index + (d ? v[1].length : 0)) >= g.length) continue;
											var w = v.index + v[0].length,
												C = g.length + b.length;
											if (y = 3, C >= w) {
												if (o[m + 1].greedy) continue;
												y = 2, x = x.slice(0, C)
											}
											g = x
										}
										if (v) {
											d && (f = v[1].length);
											var k = v.index + f,
												w = k + (v = v[0].slice(f)).length,
												T = g.slice(0, k),
												_ = g.slice(w),
												S = [m, y];
											T && S.push(T);
											var E = new i(a, u ? n.tokenize(v, u) : v, p, v, h);
											S.push(E), _ && S.push(_), Array.prototype.splice.apply(o, S)
										}
									}
								}
							}
						}
					return o
				},
				hooks: {
					all: {},
					add: function (e, t) {
						var i = n.hooks.all;
						i[e] = i[e] || [], i[e].push(t)
					},
					run: function (e, t) {
						var i = n.hooks.all[e];
						if (i && i.length)
							for (var o, r = 0; o = i[r++];) o(t)
					}
				}
			},
			i = n.Token = function (e, t, n, i, o) {
				this.type = e, this.content = t, this.alias = n, this.matchedStr = i || null, this.greedy = !!o
			};
		if (i.stringify = function (e, t, o) {
				if ("string" == typeof e) return e;
				if ("Array" === n.util.type(e)) return e.map(function (n) {
					return i.stringify(n, t, e)
				}).join("");
				var r = {
					type: e.type,
					content: i.stringify(e.content, t, o),
					tag: "span",
					classes: ["token", e.type],
					attributes: {},
					language: t,
					parent: o
				};
				if ("comment" == r.type && (r.attributes.spellcheck = "true"), e.alias) {
					var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
					Array.prototype.push.apply(r.classes, a)
				}
				n.hooks.run("wrap", r);
				var s = "";
				for (var l in r.attributes) s += (s ? " " : "") + l + '="' + (r.attributes[l] || "") + '"';
				return "<" + r.tag + ' class="' + r.classes.join(" ") + '" ' + s + ">" + r.content + "</" + r.tag + ">"
			}, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
			var t = JSON.parse(e.data),
				i = t.language,
				o = t.code,
				r = t.immediateClose;
			_self.postMessage(n.highlight(o, n.languages[i], i)), r && _self.close()
		}, !1), _self.Prism) : _self.Prism;
		var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
		return o && (n.filename = o.src, document.addEventListener && !o.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), _self.Prism
	}();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
		comment: /<!--[\w\W]*?-->/,
		prolog: /<\?[\w\W]+?\?>/,
		doctype: /<!DOCTYPE[\w\W]+?>/,
		cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
		tag: {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				tag: {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						punctuation: /^<\/?/,
						namespace: /^[^\s>\/:]+:/
					}
				},
				"attr-value": {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						punctuation: /[=>"']/
					}
				},
				punctuation: /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: {
						namespace: /^[^\s>\/:]+:/
					}
				}
			}
		},
		entity: /&#?[\da-z]{1,8};/i
	}, Prism.hooks.add("wrap", function (e) {
		"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
	}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
		comment: /\/\*[\w\W]*?\*\//,
		atrule: {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				rule: /@[\w-]+/
			}
		},
		url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		property: /(\b|\B)[\w-]+(?=\s*:)/i,
		important: /\B!important\b/i,
		function: /[-a-z0-9]+(?=\()/i,
		punctuation: /[(){};:]/
	}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
		style: {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: !0,
			inside: Prism.languages.css,
			alias: "language-css"
		}
	}), Prism.languages.insertBefore("inside", "attr-value", {
		"style-attr": {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				"attr-name": {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				punctuation: /^\s*=\s*['"]|['"]\s*$/,
				"attr-value": {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: "language-css"
		}
	}, Prism.languages.markup.tag)), Prism.languages.clike = {
		comment: [{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0
		}],
		string: {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		"class-name": {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: !0,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		boolean: /\b(true|false)\b/,
		function: /[a-z0-9_]+(?=\()/i,
		number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		punctuation: /[{}[\];(),.:]/
	}, Prism.languages.javascript = Prism.languages.extend("clike", {
		keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	}), Prism.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: !0,
			greedy: !0
		}
	}), Prism.languages.insertBefore("javascript", "class-name", {
		"template-string": {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: !0,
			inside: {
				interpolation: {
					pattern: /\$\{[^}]+\}/,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation"
						},
						rest: Prism.languages.javascript
					}
				},
				string: /[\s\S]+/
			}
		}
	}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
		script: {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: !0,
			inside: Prism.languages.javascript,
			alias: "language-javascript"
		}
	}), Prism.languages.js = Prism.languages.javascript, self.Prism && Prism.hooks.add("after-highlight", function (e) {
		var t = e.element.parentNode;
		if (t && /pre/i.test(t.nodeName) && -1 !== t.className.indexOf("code-toolbar")) {
			var n = document.createElement("div");
			if (n.setAttribute("class", "toolbar"), window.ZeroClipboard) {
				var i = document.createElement("a");
				i.innerHTML = "Copy";
				var o = new ZeroClipboard(i);
				o.on("ready", function (e) {
					o.on("copy", function (e) {
						var t = e.target.parentNode.parentNode.getElementsByTagName("code")[0];
						e.clipboardData.setData("text/plain", t.textContent || t.innerText)
					}), o.on("aftercopy", function (e) {
						e.target.parentNode.parentNode.getElementsByTagName("code")[0].focus()
					})
				}), n.appendChild(i)
			}
			t.appendChild(n)
		}
	}),
	function (e, t) {
		"use strict";
		var n, i, o, r = e,
			a = r.document,
			s = r.navigator,
			l = r.setTimeout,
			c = r.clearTimeout,
			u = r.setInterval,
			d = r.clearInterval,
			h = r.getComputedStyle,
			f = r.encodeURIComponent,
			p = r.ActiveXObject,
			m = r.Error,
			g = r.Number.parseInt || r.parseInt,
			v = r.Number.parseFloat || r.parseFloat,
			y = r.Number.isNaN || r.isNaN,
			b = r.Date.now,
			x = r.Object.keys,
			w = r.Object.defineProperty,
			C = r.Object.prototype.hasOwnProperty,
			k = r.Array.prototype.slice,
			T = function () {
				var e = function (e) {
					return e
				};
				if ("function" == typeof r.wrap && "function" == typeof r.unwrap) try {
					var t = a.createElement("div"),
						n = r.unwrap(t);
					1 === t.nodeType && n && 1 === n.nodeType && (e = r.unwrap)
				} catch (e) {}
				return e
			}(),
			_ = function (e) {
				return k.call(e, 0)
			},
			S = function () {
				var e, n, i, o, r, a = _(arguments),
					s = a[0] || {};
				for (e = 1, n = a.length; n > e; e++)
					if (null != (i = a[e]))
						for (o in i) C.call(i, o) && (s[o], r = i[o], s !== r && r !== t && (s[o] = r));
				return s
			},
			E = function (e) {
				var t, n, i, o;
				if ("object" != typeof e || null == e || "number" == typeof e.nodeType) t = e;
				else if ("number" == typeof e.length)
					for (t = [], n = 0, i = e.length; i > n; n++) C.call(e, n) && (t[n] = E(e[n]));
				else {
					t = {};
					for (o in e) C.call(e, o) && (t[o] = E(e[o]))
				}
				return t
			},
			A = function (e, t) {
				for (var n = {}, i = 0, o = t.length; o > i; i++) t[i] in e && (n[t[i]] = e[t[i]]);
				return n
			},
			I = function (e, t) {
				var n = {};
				for (var i in e) - 1 === t.indexOf(i) && (n[i] = e[i]);
				return n
			},
			D = function (e) {
				if (e)
					for (var t in e) C.call(e, t) && delete e[t];
				return e
			},
			O = function (e, t) {
				if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))
					do {
						if (e === t) return !0;
						e = e.parentNode
					} while (e);
				return !1
			},
			P = function (e) {
				var t;
				return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t
			},
			M = function (e) {
				var t, n;
				return "string" == typeof e && e && (n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)) && n[1] && (t = n[1])), t
			},
			L = function () {
				var e, t;
				try {
					throw new m
				} catch (e) {
					t = e
				}
				return t && (e = t.sourceURL || t.fileName || M(t.stack)), e
			},
			F = function () {
				var e, n, i;
				if (a.currentScript && (e = a.currentScript.src)) return e;
				if (1 === (n = a.getElementsByTagName("script")).length) return n[0].src || t;
				if ("readyState" in n[0])
					for (i = n.length; i--;)
						if ("interactive" === n[i].readyState && (e = n[i].src)) return e;
				return "loading" === a.readyState && (e = n[n.length - 1].src) ? e : (e = L()) ? e : t
			},
			N = function () {
				var e, n, i, o = a.getElementsByTagName("script");
				for (e = o.length; e--;) {
					if (!(i = o[e].src)) {
						n = null;
						break
					}
					if (i = P(i), null == n) n = i;
					else if (n !== i) {
						n = null;
						break
					}
				}
				return n || t
			},
			R = function () {
				var e = /win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;
				return !!s && (e.test(s.appVersion || "") || e.test(s.platform || "") || -1 !== (s.userAgent || "").indexOf("Windows"))
			},
			W = null == e.opener && (!!e.top && e != e.top || !!e.parent && e != e.parent),
			H = {
				bridge: null,
				version: "0.0.0",
				pluginType: "unknown",
				disabled: null,
				outdated: null,
				sandboxed: null,
				unavailable: null,
				degraded: null,
				deactivated: null,
				overdue: null,
				ready: null
			},
			V = "11.0.0",
			j = {},
			B = {},
			z = null,
			q = 0,
			$ = 0,
			Y = {
				ready: "Flash communication is established",
				error: {
					"flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
					"flash-outdated": "Flash is too outdated to support ZeroClipboard",
					"flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
					"flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
					"flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
					"flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
					"flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
					"version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
					"clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
					"config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
					"swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
				}
			},
			X = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
			U = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
			Q = new RegExp("^flash-(" + U.map(function (e) {
				return e.replace(/^flash-/, "")
			}).join("|") + ")$"),
			G = new RegExp("^flash-(" + U.slice(1).map(function (e) {
				return e.replace(/^flash-/, "")
			}).join("|") + ")$"),
			K = {
				swfPath: (P(F()) || N() || "") + "ZeroClipboard.swf",
				trustedDomains: e.location.host ? [e.location.host] : [],
				cacheBust: !0,
				forceEnhancedClipboard: !1,
				flashLoadTimeout: 3e4,
				autoActivate: !0,
				bubbleEvents: !0,
				fixLineEndings: !0,
				containerId: "global-zeroclipboard-html-bridge",
				containerClass: "global-zeroclipboard-container",
				swfObjectId: "global-zeroclipboard-flash-bridge",
				hoverClass: "zeroclipboard-is-hover",
				activeClass: "zeroclipboard-is-active",
				forceHandCursor: !1,
				title: null,
				zIndex: 999999999
			},
			Z = function (e) {
				if ("object" == typeof e && null !== e)
					for (var t in e)
						if (C.call(e, t))
							if (/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(t)) K[t] = e[t];
							else if (null == H.bridge)
					if ("containerId" === t || "swfObjectId" === t) {
						if (!fe(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
						K[t] = e[t]
					} else K[t] = e[t];
				return "string" == typeof e && e ? C.call(K, e) ? K[e] : void 0 : E(K)
			},
			J = function () {
				return Ye(), {
					browser: A(s, ["userAgent", "platform", "appName", "appVersion"]),
					flash: I(H, ["bridge"]),
					zeroclipboard: {
						version: Ue.version,
						config: Ue.config()
					}
				}
			},
			ee = function () {
				return !!(H.disabled || H.outdated || H.sandboxed || H.unavailable || H.degraded || H.deactivated)
			},
			te = function (e, i) {
				var o, r, a, s = {};
				if ("string" == typeof e && e) a = e.toLowerCase().split(/\s+/);
				else if ("object" == typeof e && e && void 0 === i)
					for (o in e) C.call(e, o) && "string" == typeof o && o && "function" == typeof e[o] && Ue.on(o, e[o]);
				if (a && a.length) {
					for (o = 0, r = a.length; r > o; o++) e = a[o].replace(/^on/, ""), s[e] = !0, j[e] || (j[e] = []), j[e].push(i);
					if (s.ready && H.ready && Ue.emit({
							type: "ready"
						}), s.error) {
						for (o = 0, r = U.length; r > o; o++)
							if (!0 === H[U[o].replace(/^flash-/, "")]) {
								Ue.emit({
									type: "error",
									name: U[o]
								});
								break
							}
						n !== t && Ue.version !== n && Ue.emit({
							type: "error",
							name: "version-mismatch",
							jsVersion: Ue.version,
							swfVersion: n
						})
					}
				}
				return Ue
			},
			ne = function (e, t) {
				var n, i, o, r, a;
				if (0 === arguments.length) r = x(j);
				else if ("string" == typeof e && e) r = e.split(/\s+/);
				else if ("object" == typeof e && e && void 0 === t)
					for (n in e) C.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Ue.off(n, e[n]);
				if (r && r.length)
					for (n = 0, i = r.length; i > n; n++)
						if (e = r[n].toLowerCase().replace(/^on/, ""), (a = j[e]) && a.length)
							if (t)
								for (o = a.indexOf(t); - 1 !== o;) a.splice(o, 1), o = a.indexOf(t, o);
							else a.length = 0;
				return Ue
			},
			ie = function (e) {
				return "string" == typeof e && e ? E(j[e]) || null : E(j)
			},
			oe = function (e) {
				var t, n, i;
				return e = pe(e), e && !we(e) ? "ready" === e.type && !0 === H.overdue ? Ue.emit({
					type: "error",
					name: "flash-overdue"
				}) : (t = S({}, e), be.call(this, t), "copy" === e.type && (i = Ie(B), n = i.data, z = i.formatMap), n) : void 0
			},
			re = function () {
				var e = H.sandboxed;
				if (Ye(), "boolean" != typeof H.ready && (H.ready = !1), H.sandboxed !== e && !0 === H.sandboxed) H.ready = !1, Ue.emit({
					type: "error",
					name: "flash-sandboxed"
				});
				else if (!Ue.isFlashUnusable() && null === H.bridge) {
					var t = K.flashLoadTimeout;
					"number" == typeof t && t >= 0 && (q = l(function () {
						"boolean" != typeof H.deactivated && (H.deactivated = !0), !0 === H.deactivated && Ue.emit({
							type: "error",
							name: "flash-deactivated"
						})
					}, t)), H.overdue = !1, Ee()
				}
			},
			ae = function () {
				Ue.clearData(), Ue.blur(), Ue.emit("destroy"), Ae(), Ue.off()
			},
			se = function (e, t) {
				var n;
				if ("object" == typeof e && e && void 0 === t) n = e, Ue.clearData();
				else {
					if ("string" != typeof e || !e) return;
					(n = {})[e] = t
				}
				for (var i in n) "string" == typeof i && i && C.call(n, i) && "string" == typeof n[i] && n[i] && (B[i] = $e(n[i]))
			},
			le = function (e) {
				void 0 === e ? (D(B), z = null) : "string" == typeof e && C.call(B, e) && delete B[e]
			},
			ce = function (e) {
				return void 0 === e ? E(B) : "string" == typeof e && C.call(B, e) ? B[e] : void 0
			},
			ue = function (e) {
				if (e && 1 === e.nodeType) {
					i && (Re(i, K.activeClass), i !== e && Re(i, K.hoverClass)), i = e, Ne(e, K.hoverClass);
					var t = e.getAttribute("title") || K.title;
					if ("string" == typeof t && t) {
						var n = Se(H.bridge);
						n && n.setAttribute("title", t)
					}
					var o = !0 === K.forceHandCursor || "pointer" === We(e, "cursor");
					ze(o), Be()
				}
			},
			de = function () {
				var e = Se(H.bridge);
				e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px"), i && (Re(i, K.hoverClass), Re(i, K.activeClass), i = null)
			},
			he = function () {
				return i || null
			},
			fe = function (e) {
				return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
			},
			pe = function (e) {
				var t;
				if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
					t = t.toLowerCase(), !e.target && (/^(copy|aftercopy|_click)$/.test(t) || "error" === t && "clipboard-error" === e.name) && (e.target = o), S(e, {
						type: t,
						target: e.target || i || null,
						relatedTarget: e.relatedTarget || null,
						currentTarget: H && H.bridge || null,
						timeStamp: e.timeStamp || b() || null
					});
					var n = Y[e.type];
					return "error" === e.type && e.name && n && (n = n[e.name]), n && (e.message = n), "ready" === e.type && S(e, {
						target: null,
						version: H.version
					}), "error" === e.type && (Q.test(e.name) && S(e, {
						target: null,
						minimumVersion: V
					}), G.test(e.name) && S(e, {
						version: H.version
					})), "copy" === e.type && (e.clipboardData = {
						setData: Ue.setData,
						clearData: Ue.clearData
					}), "aftercopy" === e.type && (e = De(e, z)), e.target && !e.relatedTarget && (e.relatedTarget = me(e.target)), ge(e)
				}
			},
			me = function (e) {
				var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
				return t ? a.getElementById(t) : null
			},
			ge = function (e) {
				if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
					var n = e.target,
						i = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t,
						o = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t,
						s = He(n),
						l = r.screenLeft || r.screenX || 0,
						c = r.screenTop || r.screenY || 0,
						u = a.body.scrollLeft + a.documentElement.scrollLeft,
						d = a.body.scrollTop + a.documentElement.scrollTop,
						h = s.left + ("number" == typeof e._stageX ? e._stageX : 0),
						f = s.top + ("number" == typeof e._stageY ? e._stageY : 0),
						p = h - u,
						m = f - d,
						g = l + p,
						v = c + m,
						y = "number" == typeof e.movementX ? e.movementX : 0,
						b = "number" == typeof e.movementY ? e.movementY : 0;
					delete e._stageX, delete e._stageY, S(e, {
						srcElement: n,
						fromElement: i,
						toElement: o,
						screenX: g,
						screenY: v,
						pageX: h,
						pageY: f,
						clientX: p,
						clientY: m,
						x: p,
						y: m,
						movementX: y,
						movementY: b,
						offsetX: 0,
						offsetY: 0,
						layerX: 0,
						layerY: 0
					})
				}
				return e
			},
			ve = function (e) {
				var t = e && "string" == typeof e.type && e.type || "";
				return !/^(?:(?:before)?copy|destroy)$/.test(t)
			},
			ye = function (e, t, n, i) {
				i ? l(function () {
					e.apply(t, n)
				}, 0) : e.apply(t, n)
			},
			be = function (e) {
				if ("object" == typeof e && e && e.type) {
					var t = ve(e),
						n = j["*"] || [],
						i = j[e.type] || [],
						o = n.concat(i);
					if (o && o.length) {
						var a, s, l, c, u, d = this;
						for (a = 0, s = o.length; s > a; a++) l = o[a], c = d, "string" == typeof l && "function" == typeof r[l] && (l = r[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = S({}, e), ye(l, c, [u], t))
					}
					return this
				}
			},
			xe = function (e) {
				var t = null;
				return (!1 === W || e && "error" === e.type && e.name && -1 !== X.indexOf(e.name)) && (t = !1), t
			},
			we = function (e) {
				var t = e.target || i || null,
					r = "swf" === e._source;
				switch (delete e._source, e.type) {
					case "error":
						var a = "flash-sandboxed" === e.name || xe(e);
						"boolean" == typeof a && (H.sandboxed = a), -1 !== U.indexOf(e.name) ? S(H, {
							disabled: "flash-disabled" === e.name,
							outdated: "flash-outdated" === e.name,
							unavailable: "flash-unavailable" === e.name,
							degraded: "flash-degraded" === e.name,
							deactivated: "flash-deactivated" === e.name,
							overdue: "flash-overdue" === e.name,
							ready: !1
						}) : "version-mismatch" === e.name && (n = e.swfVersion, S(H, {
							disabled: !1,
							outdated: !1,
							unavailable: !1,
							degraded: !1,
							deactivated: !1,
							overdue: !1,
							ready: !1
						})), je();
						break;
					case "ready":
						n = e.swfVersion;
						var s = !0 === H.deactivated;
						S(H, {
							disabled: !1,
							outdated: !1,
							sandboxed: !1,
							unavailable: !1,
							degraded: !1,
							deactivated: !1,
							overdue: s,
							ready: !s
						}), je();
						break;
					case "beforecopy":
						o = t;
						break;
					case "copy":
						var l, c, u = e.relatedTarget;
						!B["text/html"] && !B["text/plain"] && u && (c = u.value || u.outerHTML || u.innerHTML) && (l = u.value || u.textContent || u.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l), c !== l && e.clipboardData.setData("text/html", c)) : !B["text/plain"] && e.target && (l = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", l));
						break;
					case "aftercopy":
						Ce(e), Ue.clearData(), t && t !== Fe() && t.focus && t.focus();
						break;
					case "_mouseover":
						Ue.focus(t), !0 === K.bubbleEvents && r && (t && t !== e.relatedTarget && !O(e.relatedTarget, t) && ke(S({}, e, {
							type: "mouseenter",
							bubbles: !1,
							cancelable: !1
						})), ke(S({}, e, {
							type: "mouseover"
						})));
						break;
					case "_mouseout":
						Ue.blur(), !0 === K.bubbleEvents && r && (t && t !== e.relatedTarget && !O(e.relatedTarget, t) && ke(S({}, e, {
							type: "mouseleave",
							bubbles: !1,
							cancelable: !1
						})), ke(S({}, e, {
							type: "mouseout"
						})));
						break;
					case "_mousedown":
						Ne(t, K.activeClass), !0 === K.bubbleEvents && r && ke(S({}, e, {
							type: e.type.slice(1)
						}));
						break;
					case "_mouseup":
						Re(t, K.activeClass), !0 === K.bubbleEvents && r && ke(S({}, e, {
							type: e.type.slice(1)
						}));
						break;
					case "_click":
						o = null, !0 === K.bubbleEvents && r && ke(S({}, e, {
							type: e.type.slice(1)
						}));
						break;
					case "_mousemove":
						!0 === K.bubbleEvents && r && ke(S({}, e, {
							type: e.type.slice(1)
						}))
				}
				return !!/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) || void 0
			},
			Ce = function (e) {
				if (e.errors && e.errors.length > 0) {
					var t = E(e);
					S(t, {
						type: "error",
						name: "clipboard-error"
					}), delete t.success, l(function () {
						Ue.emit(t)
					}, 0)
				}
			},
			ke = function (e) {
				if (e && "string" == typeof e.type && e) {
					var t, n = e.target || null,
						i = n && n.ownerDocument || a,
						o = {
							view: i.defaultView || r,
							canBubble: !0,
							cancelable: !0,
							detail: "click" === e.type ? 1 : 0,
							button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : i.createEvent ? 0 : 1
						},
						s = S(o, e);
					n && i.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], (t = i.createEvent("MouseEvents")).initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
				}
			},
			Te = function () {
				var e = K.flashLoadTimeout;
				if ("number" == typeof e && e >= 0) {
					var t = Math.min(1e3, e / 10),
						n = K.swfObjectId + "_fallbackContent";
					$ = u(function () {
						var e = a.getElementById(n);
						Ve(e) && (je(), H.deactivated = null, Ue.emit({
							type: "error",
							name: "swf-not-found"
						}))
					}, t)
				}
			},
			_e = function () {
				var e = a.createElement("div");
				return e.id = K.containerId, e.className = K.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + qe(K.zIndex), e
			},
			Se = function (e) {
				for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
				return t || null
			},
			Ee = function () {
				var e, t = H.bridge,
					n = Se(t);
				if (!t) {
					var i = Le(r.location.host, K),
						o = "never" === i ? "none" : "all",
						s = Pe(S({
							jsVersion: Ue.version
						}, K)),
						l = K.swfPath + Oe(K.swfPath, K);
					n = _e();
					var c = a.createElement("div");
					n.appendChild(c), a.body.appendChild(n);
					var u = a.createElement("div"),
						d = "activex" === H.pluginType;
					u.innerHTML = '<object id="' + K.swfObjectId + '" name="' + K.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (d ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + i + '"/><param name="allowNetworking" value="' + o + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/><div id="' + K.swfObjectId + '_fallbackContent">&nbsp;</div></object>', t = u.firstChild, u = null, T(t).ZeroClipboard = Ue, n.replaceChild(t, c), Te()
				}
				return t || ((t = a[K.swfObjectId]) && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), H.bridge = t || null, t
			},
			Ae = function () {
				var e = H.bridge;
				if (e) {
					var i = Se(e);
					i && ("activex" === H.pluginType && "readyState" in e ? (e.style.display = "none", function t() {
						if (4 === e.readyState) {
							for (var n in e) "function" == typeof e[n] && (e[n] = null);
							e.parentNode && e.parentNode.removeChild(e), i.parentNode && i.parentNode.removeChild(i)
						} else l(t, 10)
					}()) : (e.parentNode && e.parentNode.removeChild(e), i.parentNode && i.parentNode.removeChild(i))), je(), H.ready = null, H.bridge = null, H.deactivated = null, n = t
				}
			},
			Ie = function (e) {
				var t = {},
					n = {};
				if ("object" == typeof e && e) {
					for (var i in e)
						if (i && C.call(e, i) && "string" == typeof e[i] && e[i]) switch (i.toLowerCase()) {
							case "text/plain":
							case "text":
							case "air:text":
							case "flash:text":
								t.text = e[i], n.text = i;
								break;
							case "text/html":
							case "html":
							case "air:html":
							case "flash:html":
								t.html = e[i], n.html = i;
								break;
							case "application/rtf":
							case "text/rtf":
							case "rtf":
							case "richtext":
							case "air:rtf":
							case "flash:rtf":
								t.rtf = e[i], n.rtf = i
						}
					return {
						data: t,
						formatMap: n
					}
				}
			},
			De = function (e, t) {
				if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
				var n = {};
				for (var i in e)
					if (C.call(e, i))
						if ("errors" === i) {
							n[i] = e[i] ? e[i].slice() : [];
							for (var o = 0, r = n[i].length; r > o; o++) n[i][o].format = t[n[i][o].format]
						} else if ("success" !== i && "data" !== i) n[i] = e[i];
				else {
					n[i] = {};
					var a = e[i];
					for (var s in a) s && C.call(a, s) && C.call(t, s) && (n[i][t[s]] = a[s])
				}
				return n
			},
			Oe = function (e, t) {
				return null == t || t && !0 === t.cacheBust ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + b() : ""
			},
			Pe = function (e) {
				var t, n, i, o, a = "",
					s = [];
				if (e.trustedDomains && ("string" == typeof e.trustedDomains ? o = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (o = e.trustedDomains)), o && o.length)
					for (t = 0, n = o.length; n > t; t++)
						if (C.call(o, t) && o[t] && "string" == typeof o[t]) {
							if (!(i = Me(o[t]))) continue;
							if ("*" === i) {
								s.length = 0, s.push(i);
								break
							}
							s.push.apply(s, [i, "//" + i, r.location.protocol + "//" + i])
						}
				return s.length && (a += "trustedOrigins=" + f(s.join(","))), !0 === e.forceEnhancedClipboard && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + f(e.swfObjectId)), "string" == typeof e.jsVersion && e.jsVersion && (a += (a ? "&" : "") + "jsVersion=" + f(e.jsVersion)), a
			},
			Me = function (e) {
				if (null == e || "" === e) return null;
				if ("" === (e = e.replace(/^\s+|\s+$/g, ""))) return null;
				var t = e.indexOf("//"),
					n = (e = -1 === t ? e : e.slice(t + 2)).indexOf("/");
				return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
			},
			Le = function () {
				var e = function (e) {
					var t, n, i, o = [];
					if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return o;
					for (t = 0, n = e.length; n > t; t++)
						if (C.call(e, t) && (i = Me(e[t]))) {
							if ("*" === i) {
								o.length = 0, o.push("*");
								break
							} - 1 === o.indexOf(i) && o.push(i)
						}
					return o
				};
				return function (t, n) {
					var i = Me(n.swfPath);
					null === i && (i = t);
					var o = e(n.trustedDomains),
						r = o.length;
					if (r > 0) {
						if (1 === r && "*" === o[0]) return "always";
						if (-1 !== o.indexOf(t)) return 1 === r && t === i ? "sameDomain" : "always"
					}
					return "never"
				}
			}(),
			Fe = function () {
				try {
					return a.activeElement
				} catch (e) {
					return null
				}
			},
			Ne = function (e, t) {
				var n, i, o, r = [];
				if ("string" == typeof t && t && (r = t.split(/\s+/)), e && 1 === e.nodeType && r.length > 0) {
					for (o = (" " + (e.className || "") + " ").replace(/[\t\r\n\f]/g, " "), n = 0, i = r.length; i > n; n++) - 1 === o.indexOf(" " + r[n] + " ") && (o += r[n] + " ");
					(o = o.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = o)
				}
				return e
			},
			Re = function (e, t) {
				var n, i, o, r = [];
				if ("string" == typeof t && t && (r = t.split(/\s+/)), e && 1 === e.nodeType && r.length > 0 && e.className) {
					for (o = (" " + e.className + " ").replace(/[\t\r\n\f]/g, " "), n = 0, i = r.length; i > n; n++) o = o.replace(" " + r[n] + " ", " ");
					(o = o.replace(/^\s+|\s+$/g, "")) !== e.className && (e.className = o)
				}
				return e
			},
			We = function (e, t) {
				var n = h(e, null).getPropertyValue(t);
				return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
			},
			He = function (e) {
				var t = {
					left: 0,
					top: 0,
					width: 0,
					height: 0
				};
				if (e.getBoundingClientRect) {
					var n = e.getBoundingClientRect(),
						i = r.pageXOffset,
						o = r.pageYOffset,
						s = a.documentElement.clientLeft || 0,
						l = a.documentElement.clientTop || 0,
						c = 0,
						u = 0;
					if ("relative" === We(a.body, "position")) {
						var d = a.body.getBoundingClientRect(),
							h = a.documentElement.getBoundingClientRect();
						c = d.left - h.left || 0, u = d.top - h.top || 0
					}
					t.left = n.left + i - s - c, t.top = n.top + o - l - u, t.width = "width" in n ? n.width : n.right - n.left, t.height = "height" in n ? n.height : n.bottom - n.top
				}
				return t
			},
			Ve = function (e) {
				if (!e) return !1;
				var t = h(e, null);
				if (!t) return !1;
				var n = v(t.height) > 0,
					i = v(t.width) > 0,
					o = v(t.top) >= 0,
					r = v(t.left) >= 0,
					a = n && i && o && r,
					s = a ? null : He(e);
				return "none" !== t.display && "collapse" !== t.visibility && (a || !!s && (n || s.height > 0) && (i || s.width > 0) && (o || s.top >= 0) && (r || s.left >= 0))
			},
			je = function () {
				c(q), q = 0, d($), $ = 0
			},
			Be = function () {
				var e;
				if (i && (e = Se(H.bridge))) {
					var t = He(i);
					S(e.style, {
						width: t.width + "px",
						height: t.height + "px",
						top: t.top + "px",
						left: t.left + "px",
						zIndex: "" + qe(K.zIndex)
					})
				}
			},
			ze = function (e) {
				!0 === H.ready && (H.bridge && "function" == typeof H.bridge.setHandCursor ? H.bridge.setHandCursor(e) : H.ready = !1)
			},
			qe = function (e) {
				if (/^(?:auto|inherit)$/.test(e)) return e;
				var t;
				return "number" != typeof e || y(e) ? "string" == typeof e && (t = qe(g(e, 10))) : t = e, "number" == typeof t ? t : "auto"
			},
			$e = function (e) {
				var t = /(\r\n|\r|\n)/g;
				return "string" == typeof e && !0 === K.fixLineEndings && (R() ? /((^|[^\r])\n|\r([^\n]|$))/.test(e) && (e = e.replace(t, "\r\n")) : /\r/.test(e) && (e = e.replace(t, "\n"))), e
			},
			Ye = function (t) {
				var n, i, o, r = H.sandboxed,
					a = null;
				if (t = !0 === t, !1 === W) a = !1;
				else {
					try {
						i = e.frameElement || null
					} catch (e) {
						o = {
							name: e.name,
							message: e.message
						}
					}
					if (i && 1 === i.nodeType && "IFRAME" === i.nodeName) try {
						a = i.hasAttribute("sandbox")
					} catch (e) {
						a = null
					} else {
						try {
							n = document.domain || null
						} catch (e) {
							n = null
						}(null === n || o && "SecurityError" === o.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(o.message.toLowerCase())) && (a = !0)
					}
				}
				return H.sandboxed = a, r === a || t || Xe(p), a
			},
			Xe = function (e) {
				function t(e) {
					var t = e.match(/[\d]+/g);
					return t.length = 3, t.join(".")
				}

				function n(e) {
					return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
				}

				function i(e) {
					e && (l = !0, e.version && (d = t(e.version)), !d && e.description && (d = t(e.description)), e.filename && (u = n(e.filename)))
				}
				var o, r, a, l = !1,
					c = !1,
					u = !1,
					d = "";
				if (s.plugins && s.plugins.length) o = s.plugins["Shockwave Flash"], i(o), s.plugins["Shockwave Flash 2.0"] && (l = !0, d = "2.0.0.11");
				else if (s.mimeTypes && s.mimeTypes.length) a = s.mimeTypes["application/x-shockwave-flash"], o = a && a.enabledPlugin, i(o);
				else if (void 0 !== e) {
					c = !0;
					try {
						r = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, d = t(r.GetVariable("$version"))
					} catch (n) {
						try {
							r = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, d = "6.0.21"
						} catch (n) {
							try {
								r = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, d = t(r.GetVariable("$version"))
							} catch (e) {
								c = !1
							}
						}
					}
				}
				H.disabled = !0 !== l, H.outdated = d && v(d) < v(V), H.version = d || "0.0.0", H.pluginType = u ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
			};
		Xe(p), Ye(!0);
		var Ue = function () {
			return this instanceof Ue ? void("function" == typeof Ue._createClient && Ue._createClient.apply(this, _(arguments))) : new Ue
		};
		w(Ue, "version", {
			value: "2.3.0-beta.1",
			writable: !1,
			configurable: !0,
			enumerable: !0
		}), Ue.config = function () {
			return Z.apply(this, _(arguments))
		}, Ue.state = function () {
			return J.apply(this, _(arguments))
		}, Ue.isFlashUnusable = function () {
			return ee.apply(this, _(arguments))
		}, Ue.on = function () {
			return te.apply(this, _(arguments))
		}, Ue.off = function () {
			return ne.apply(this, _(arguments))
		}, Ue.handlers = function () {
			return ie.apply(this, _(arguments))
		}, Ue.emit = function () {
			return oe.apply(this, _(arguments))
		}, Ue.create = function () {
			return re.apply(this, _(arguments))
		}, Ue.destroy = function () {
			return ae.apply(this, _(arguments))
		}, Ue.setData = function () {
			return se.apply(this, _(arguments))
		}, Ue.clearData = function () {
			return le.apply(this, _(arguments))
		}, Ue.getData = function () {
			return ce.apply(this, _(arguments))
		}, Ue.focus = Ue.activate = function () {
			return ue.apply(this, _(arguments))
		}, Ue.blur = Ue.deactivate = function () {
			return de.apply(this, _(arguments))
		}, Ue.activeElement = function () {
			return he.apply(this, _(arguments))
		};
		var Qe = 0,
			Ge = {},
			Ke = 0,
			Ze = {},
			Je = {};
		S(K, {
			autoActivate: !0
		});
		var et = function (e) {
				var t = this;
				t.id = "" + Qe++, Ge[t.id] = {
					instance: t,
					elements: [],
					handlers: {}
				}, e && t.clip(e), Ue.on("*", function (e) {
					return t.emit(e)
				}), Ue.on("destroy", function () {
					t.destroy()
				}), Ue.create()
			},
			tt = function (e, i) {
				var o, r, a, s = {},
					l = Ge[this.id],
					c = l && l.handlers;
				if (!l) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
				if ("string" == typeof e && e) a = e.toLowerCase().split(/\s+/);
				else if ("object" == typeof e && e && void 0 === i)
					for (o in e) C.call(e, o) && "string" == typeof o && o && "function" == typeof e[o] && this.on(o, e[o]);
				if (a && a.length) {
					for (o = 0, r = a.length; r > o; o++) e = a[o].replace(/^on/, ""), s[e] = !0, c[e] || (c[e] = []), c[e].push(i);
					if (s.ready && H.ready && this.emit({
							type: "ready",
							client: this
						}), s.error) {
						for (o = 0, r = U.length; r > o; o++)
							if (H[U[o].replace(/^flash-/, "")]) {
								this.emit({
									type: "error",
									name: U[o],
									client: this
								});
								break
							}
						n !== t && Ue.version !== n && this.emit({
							type: "error",
							name: "version-mismatch",
							jsVersion: Ue.version,
							swfVersion: n
						})
					}
				}
				return this
			},
			nt = function (e, t) {
				var n, i, o, r, a, s = Ge[this.id],
					l = s && s.handlers;
				if (!l) return this;
				if (0 === arguments.length) r = x(l);
				else if ("string" == typeof e && e) r = e.split(/\s+/);
				else if ("object" == typeof e && e && void 0 === t)
					for (n in e) C.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
				if (r && r.length)
					for (n = 0, i = r.length; i > n; n++)
						if (e = r[n].toLowerCase().replace(/^on/, ""), (a = l[e]) && a.length)
							if (t)
								for (o = a.indexOf(t); - 1 !== o;) a.splice(o, 1), o = a.indexOf(t, o);
							else a.length = 0;
				return this
			},
			it = function (e) {
				var t = null,
					n = Ge[this.id] && Ge[this.id].handlers;
				return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : E(n)), t
			},
			ot = function (e) {
				if (ct.call(this, e)) {
					"object" == typeof e && e && "string" == typeof e.type && e.type && (e = S({}, e));
					var t = S({}, pe(e), {
						client: this
					});
					ut.call(this, t)
				}
				return this
			},
			rt = function (e) {
				if (!Ge[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
				e = dt(e);
				for (var t = 0; t < e.length; t++)
					if (C.call(e, t) && e[t] && 1 === e[t].nodeType) {
						e[t].zcClippingId ? -1 === Ze[e[t].zcClippingId].indexOf(this.id) && Ze[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Ke++, Ze[e[t].zcClippingId] = [this.id], !0 === K.autoActivate && ht(e[t]));
						var n = Ge[this.id] && Ge[this.id].elements; - 1 === n.indexOf(e[t]) && n.push(e[t])
					}
				return this
			},
			at = function (e) {
				var t = Ge[this.id];
				if (!t) return this;
				for (var n, i = t.elements, o = (e = void 0 === e ? i.slice(0) : dt(e)).length; o--;)
					if (C.call(e, o) && e[o] && 1 === e[o].nodeType) {
						for (n = 0; - 1 !== (n = i.indexOf(e[o], n));) i.splice(n, 1);
						var r = Ze[e[o].zcClippingId];
						if (r) {
							for (n = 0; - 1 !== (n = r.indexOf(this.id, n));) r.splice(n, 1);
							0 === r.length && (!0 === K.autoActivate && ft(e[o]), delete e[o].zcClippingId)
						}
					}
				return this
			},
			st = function () {
				var e = Ge[this.id];
				return e && e.elements ? e.elements.slice(0) : []
			},
			lt = function () {
				Ge[this.id] && (this.unclip(), this.off(), delete Ge[this.id])
			},
			ct = function (e) {
				if (!e || !e.type) return !1;
				if (e.client && e.client !== this) return !1;
				var t = Ge[this.id],
					n = t && t.elements,
					i = !!n && n.length > 0,
					o = !e.target || i && -1 !== n.indexOf(e.target),
					r = e.relatedTarget && i && -1 !== n.indexOf(e.relatedTarget),
					a = e.client && e.client === this;
				return !(!t || !(o || r || a))
			},
			ut = function (e) {
				var t = Ge[this.id];
				if ("object" == typeof e && e && e.type && t) {
					var n = ve(e),
						i = t && t.handlers["*"] || [],
						o = t && t.handlers[e.type] || [],
						a = i.concat(o);
					if (a && a.length) {
						var s, l, c, u, d, h = this;
						for (s = 0, l = a.length; l > s; s++) c = a[s], u = h, "string" == typeof c && "function" == typeof r[c] && (c = r[c]), "object" == typeof c && c && "function" == typeof c.handleEvent && (u = c, c = c.handleEvent), "function" == typeof c && (d = S({}, e), ye(c, u, [d], n))
					}
				}
			},
			dt = function (e) {
				return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
			},
			ht = function (e) {
				if (e && 1 === e.nodeType) {
					var t = function (e) {
							(e || (e = r.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
						},
						n = function (n) {
							(n || (n = r.event)) && (t(n), Ue.focus(e))
						};
					e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Je[e.zcClippingId] = {
						mouseover: n,
						mouseout: t,
						mouseenter: t,
						mouseleave: t,
						mousemove: t
					}
				}
			},
			ft = function (e) {
				if (e && 1 === e.nodeType) {
					var t = Je[e.zcClippingId];
					if ("object" == typeof t && t) {
						for (var n, i, o = ["move", "leave", "enter", "out", "over"], r = 0, a = o.length; a > r; r++) n = "mouse" + o[r], "function" == typeof (i = t[n]) && e.removeEventListener(n, i, !1);
						delete Je[e.zcClippingId]
					}
				}
			};
		Ue._createClient = function () {
			et.apply(this, _(arguments))
		}, Ue.prototype.on = function () {
			return tt.apply(this, _(arguments))
		}, Ue.prototype.off = function () {
			return nt.apply(this, _(arguments))
		}, Ue.prototype.handlers = function () {
			return it.apply(this, _(arguments))
		}, Ue.prototype.emit = function () {
			return ot.apply(this, _(arguments))
		}, Ue.prototype.clip = function () {
			return rt.apply(this, _(arguments))
		}, Ue.prototype.unclip = function () {
			return at.apply(this, _(arguments))
		}, Ue.prototype.elements = function () {
			return st.apply(this, _(arguments))
		}, Ue.prototype.destroy = function () {
			return lt.apply(this, _(arguments))
		}, Ue.prototype.setText = function (e) {
			if (!Ge[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
			return Ue.setData("text/plain", e), this
		}, Ue.prototype.setHtml = function (e) {
			if (!Ge[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
			return Ue.setData("text/html", e), this
		}, Ue.prototype.setRichText = function (e) {
			if (!Ge[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
			return Ue.setData("application/rtf", e), this
		}, Ue.prototype.setData = function () {
			if (!Ge[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
			return Ue.setData.apply(this, _(arguments)), this
		}, Ue.prototype.clearData = function () {
			if (!Ge[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
			return Ue.clearData.apply(this, _(arguments)), this
		}, Ue.prototype.getData = function () {
			if (!Ge[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
			return Ue.getData.apply(this, _(arguments))
		}, "function" == typeof define && define.amd ? define(function () {
			return Ue
		}) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Ue : e.ZeroClipboard = Ue
	}(function () {
		return this || window
	}()),
	function (e) {
		e.extend(e.fn, {
			validate: function (t) {
				if (this.length) {
					var n = e.data(this[0], "validator");
					return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
						n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
					}), this.submit(function (t) {
						function i() {
							var i;
							return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), !1)
						}
						return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
					})), n)
				}
				t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
			},
			valid: function () {
				var t, n;
				return e(this[0]).is("form") ? t = this.validate().form() : (t = !0, n = e(this[0].form).validate(), this.each(function () {
					t = n.element(this) && t
				})), t
			},
			removeAttrs: function (t) {
				var n = {},
					i = this;
				return e.each(t.split(/\s/), function (e, t) {
					n[t] = i.attr(t), i.removeAttr(t)
				}), n
			},
			rules: function (t, n) {
				var i, o, r, a, s, l, c = this[0];
				if (t) switch (i = e.data(c.form, "validator").settings, o = i.rules, r = e.validator.staticRules(c), t) {
					case "add":
						e.extend(r, e.validator.normalizeRule(n)), delete r.messages, o[c.name] = r, n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
						break;
					case "remove":
						return n ? (l = {}, e.each(n.split(/\s/), function (t, n) {
							l[n] = r[n], delete r[n], "required" === n && e(c).removeAttr("aria-required")
						}), l) : (delete o[c.name], r)
				}
				return (a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c)).required && (s = a.required, delete a.required, a = e.extend({
					required: s
				}, a), e(c).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, {
					remote: s
				})), a
			}
		}), e.extend(e.expr[":"], {
			blank: function (t) {
				return !e.trim("" + e(t).val())
			},
			filled: function (t) {
				return !!e.trim("" + e(t).val())
			},
			unchecked: function (t) {
				return !e(t).prop("checked")
			}
		}), e.validator = function (t, n) {
			this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
		}, e.validator.format = function (t, n) {
			return 1 === arguments.length ? function () {
				var n = e.makeArray(arguments);
				return n.unshift(t), e.validator.format.apply(this, n)
			} : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
				t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
					return n
				})
			}), t)
		}, e.extend(e.validator, {
			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: "error",
				validClass: "valid",
				errorElement: "label",
				focusInvalid: !0,
				errorContainer: e([]),
				errorLabelContainer: e([]),
				onsubmit: !0,
				ignore: ":hidden",
				ignoreTitle: !1,
				onfocusin: function (e) {
					this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
				},
				onfocusout: function (e) {
					this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
				},
				onkeyup: function (e, t) {
					9 === t.which && "" === this.elementValue(e) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
				},
				onclick: function (e) {
					e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
				},
				highlight: function (t, n, i) {
					"radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
				},
				unhighlight: function (t, n, i) {
					"radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
				}
			},
			setDefaults: function (t) {
				e.extend(e.validator.defaults, t)
			},
			messages: {
				required: "This field is required.",
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				maxlength: e.validator.format("Please enter no more than {0} characters."),
				minlength: e.validator.format("Please enter at least {0} characters."),
				rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
				range: e.validator.format("Please enter a value between {0} and {1}."),
				max: e.validator.format("Please enter a value less than or equal to {0}."),
				min: e.validator.format("Please enter a value greater than or equal to {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
				init: function () {
					function t(t) {
						var n = e.data(this[0].form, "validator"),
							i = "on" + t.type.replace(/^validate/, ""),
							o = n.settings;
						o[i] && !this.is(o.ignore) && o[i].call(n, this[0], t)
					}
					this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
					var n, i = this.groups = {};
					e.each(this.settings.groups, function (t, n) {
						"string" == typeof n && (n = n.split(/\s/)), e.each(n, function (e, n) {
							i[n] = t
						})
					}), n = this.settings.rules, e.each(n, function (t, i) {
						n[t] = e.validator.normalizeRule(i)
					}), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
				},
				form: function () {
					return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
				},
				checkForm: function () {
					this.prepareForm();
					for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
					return this.valid()
				},
				element: function (t) {
					var n = this.clean(t),
						i = this.validationTargetFor(n),
						o = !0;
					return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = e(i), (o = !1 !== this.check(i)) ? delete this.invalid[i.name] : this.invalid[i.name] = !0), e(t).attr("aria-invalid", !o), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), o
				},
				showErrors: function (t) {
					if (t) {
						e.extend(this.errorMap, t), this.errorList = [];
						for (var n in t) this.errorList.push({
							message: t[n],
							element: this.findByName(n)[0]
						});
						this.successList = e.grep(this.successList, function (e) {
							return !(e.name in t)
						})
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
				},
				resetForm: function () {
					e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
				},
				numberOfInvalids: function () {
					return this.objectLength(this.invalid)
				},
				objectLength: function (e) {
					var t, n = 0;
					for (t in e) n++;
					return n
				},
				hideErrors: function () {
					this.addWrapper(this.toHide).hide()
				},
				valid: function () {
					return 0 === this.size()
				},
				size: function () {
					return this.errorList.length
				},
				focusInvalid: function () {
					if (this.settings.focusInvalid) try {
						e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch (e) {}
				},
				findLastActive: function () {
					var t = this.lastActive;
					return t && 1 === e.grep(this.errorList, function (e) {
						return e.element.name === t.name
					}).length && t
				},
				elements: function () {
					var t = this,
						n = {};
					return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
						return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in n || !t.objectLength(e(this).rules())) && (n[this.name] = !0, !0)
					})
				},
				clean: function (t) {
					return e(t)[0]
				},
				errors: function () {
					var t = this.settings.errorClass.split(" ").join(".");
					return e(this.settings.errorElement + "." + t, this.errorContext)
				},
				reset: function () {
					this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
				},
				prepareForm: function () {
					this.reset(), this.toHide = this.errors().add(this.containers)
				},
				prepareElement: function (e) {
					this.reset(), this.toHide = this.errorsFor(e)
				},
				elementValue: function (t) {
					var n, i = e(t),
						o = i.attr("type");
					return "radio" === o || "checkbox" === o ? e("input[name='" + i.attr("name") + "']:checked").val() : (n = i.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
				},
				check: function (t) {
					t = this.validationTargetFor(this.clean(t));
					var n, i, o, r = e(t).rules(),
						a = e.map(r, function (e, t) {
							return t
						}).length,
						s = !1,
						l = this.elementValue(t);
					for (i in r) {
						o = {
							method: i,
							parameters: r[i]
						};
						try {
							if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, o.parameters)) && 1 === a) {
								s = !0;
								continue
							}
							if (s = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
							if (!n) return this.formatAndAdd(t, o), !1
						} catch (e) {
							throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", e), e
						}
					}
					if (!s) return this.objectLength(r) && this.successList.push(t), !0
				},
				customDataMessage: function (t, n) {
					return e(t).data("msg" + n[0].toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
				},
				customMessage: function (e, t) {
					var n = this.settings.messages[e];
					return n && (n.constructor === String ? n : n[t])
				},
				findDefined: function () {
					for (var e = 0; e < arguments.length; e++)
						if (void 0 !== arguments[e]) return arguments[e]
				},
				defaultMessage: function (t, n) {
					return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
				},
				formatAndAdd: function (t, n) {
					var i = this.defaultMessage(t, n.method),
						o = /\$?\{(\d+)\}/g;
					"function" == typeof i ? i = i.call(this, n.parameters, t) : o.test(i) && (i = e.validator.format(i.replace(o, "{$1}"), n.parameters)), this.errorList.push({
						message: i,
						element: t,
						method: n.method
					}), this.errorMap[t.name] = i, this.submitted[t.name] = i
				},
				addWrapper: function (e) {
					return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
				},
				defaultShowErrors: function () {
					var e, t, n;
					for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
					if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
						for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
					if (this.settings.unhighlight)
						for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
				},
				validElements: function () {
					return this.currentElements.not(this.invalidElements())
				},
				invalidElements: function () {
					return e(this.errorList).map(function () {
						return this.element
					})
				},
				showLabel: function (t, n) {
					var i = this.errorsFor(t);
					i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
				},
				errorsFor: function (t) {
					var n = this.idOrName(t);
					return this.errors().filter(function () {
						return e(this).attr("for") === n
					})
				},
				idOrName: function (e) {
					return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
				},
				validationTargetFor: function (e) {
					return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
				},
				checkable: function (e) {
					return /radio|checkbox/i.test(e.type)
				},
				findByName: function (t) {
					return e(this.currentForm).find("[name='" + t + "']")
				},
				getLength: function (t, n) {
					switch (n.nodeName.toLowerCase()) {
						case "select":
							return e("option:selected", n).length;
						case "input":
							if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
					}
					return t.length
				},
				depend: function (e, t) {
					return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
				},
				dependTypes: {
					boolean: function (e) {
						return e
					},
					string: function (t, n) {
						return !!e(t, n.form).length
					},
					function: function (e, t) {
						return e(t)
					}
				},
				optional: function (t) {
					var n = this.elementValue(t);
					return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
				},
				startRequest: function (e) {
					this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
				},
				stopRequest: function (t, n) {
					--this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
				},
				previousValue: function (t) {
					return e.data(t, "previousValue") || e.data(t, "previousValue", {
						old: null,
						valid: !0,
						message: this.defaultMessage(t, "remote")
					})
				}
			},
			classRuleSettings: {
				required: {
					required: !0
				},
				email: {
					email: !0
				},
				url: {
					url: !0
				},
				date: {
					date: !0
				},
				dateISO: {
					dateISO: !0
				},
				number: {
					number: !0
				},
				digits: {
					digits: !0
				},
				creditcard: {
					creditcard: !0
				}
			},
			addClassRules: function (t, n) {
				t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
			},
			classRules: function (t) {
				var n = {},
					i = e(t).attr("class");
				return i && e.each(i.split(" "), function () {
					this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
				}), n
			},
			attributeRules: function (t) {
				var n, i, o = {},
					r = e(t),
					a = t.getAttribute("type");
				for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = r.attr(n), /min|max/.test(n) && (null === a || /number|range|text/.test(a)) && (i = Number(i)), i || 0 === i ? o[n] = i : a === n && "range" !== a && (o[n] = !0);
				return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
			},
			dataRules: function (t) {
				var n, i, o = {},
					r = e(t);
				for (n in e.validator.methods) void 0 !== (i = r.data("rule" + n[0].toUpperCase() + n.substring(1).toLowerCase())) && (o[n] = i);
				return o
			},
			staticRules: function (t) {
				var n = {},
					i = e.data(t.form, "validator");
				return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
			},
			normalizeRules: function (t, n) {
				return e.each(t, function (i, o) {
					if (!1 !== o) {
						if (o.param || o.depends) {
							var r = !0;
							switch (typeof o.depends) {
								case "string":
									r = !!e(o.depends, n.form).length;
									break;
								case "function":
									r = o.depends.call(n, n)
							}
							r ? t[i] = void 0 === o.param || o.param : delete t[i]
						}
					} else delete t[i]
				}), e.each(t, function (i, o) {
					t[i] = e.isFunction(o) ? o(n) : o
				}), e.each(["minlength", "maxlength"], function () {
					t[this] && (t[this] = Number(t[this]))
				}), e.each(["rangelength", "range"], function () {
					var n;
					t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
				}), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
			},
			normalizeRule: function (t) {
				if ("string" == typeof t) {
					var n = {};
					e.each(t.split(/\s/), function () {
						n[this] = !0
					}), t = n
				}
				return t
			},
			addMethod: function (t, n, i) {
				e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
			},
			methods: {
				required: function (t, n, i) {
					if (!this.depend(i, n)) return "dependency-mismatch";
					if ("select" === n.nodeName.toLowerCase()) {
						var o = e(n).val();
						return o && o.length > 0
					}
					return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
				},
				email: function (e, t) {
					return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
				},
				url: function (e, t) {
					return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
				},
				date: function (e, t) {
					return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
				},
				dateISO: function (e, t) {
					return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
				},
				number: function (e, t) {
					return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
				},
				digits: function (e, t) {
					return this.optional(t) || /^\d+$/.test(e)
				},
				creditcard: function (e, t) {
					if (this.optional(t)) return "dependency-mismatch";
					if (/[^0-9 \-]+/.test(e)) return !1;
					var n, i, o = 0,
						r = 0,
						a = !1;
					if ((e = e.replace(/\D/g, "")).length < 13 || e.length > 19) return !1;
					for (n = e.length - 1; n >= 0; n--) i = e.charAt(n), r = parseInt(i, 10), a && (r *= 2) > 9 && (r -= 9), o += r, a = !a;
					return o % 10 == 0
				},
				minlength: function (t, n, i) {
					var o = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
					return this.optional(n) || o >= i
				},
				maxlength: function (t, n, i) {
					var o = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
					return this.optional(n) || o <= i
				},
				rangelength: function (t, n, i) {
					var o = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
					return this.optional(n) || o >= i[0] && o <= i[1]
				},
				min: function (e, t, n) {
					return this.optional(t) || e >= n
				},
				max: function (e, t, n) {
					return this.optional(t) || e <= n
				},
				range: function (e, t, n) {
					return this.optional(t) || e >= n[0] && e <= n[1]
				},
				equalTo: function (t, n, i) {
					var o = e(i);
					return this.settings.onfocusout && o.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
						e(n).valid()
					}), t === o.val()
				},
				remote: function (t, n, i) {
					if (this.optional(n)) return "dependency-mismatch";
					var o, r, a = this.previousValue(n);
					return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, i = "string" == typeof i && {
						url: i
					} || i, a.old === t ? a.valid : (a.old = t, o = this, this.startRequest(n), r = {}, r[n.name] = t, e.ajax(e.extend(!0, {
						url: i,
						mode: "abort",
						port: "validate" + n.name,
						dataType: "json",
						data: r,
						context: o.currentForm,
						success: function (i) {
							var r, s, l, c = !0 === i || "true" === i;
							o.settings.messages[n.name].remote = a.originalMessage, c ? (l = o.formSubmitted, o.prepareElement(n), o.formSubmitted = l, o.successList.push(n), delete o.invalid[n.name], o.showErrors()) : (r = {}, s = i || o.defaultMessage(n, "remote"), r[n.name] = a.message = e.isFunction(s) ? s(t) : s, o.invalid[n.name] = !0, o.showErrors(r)), a.valid = c, o.stopRequest(n, c)
						}
					}, i)), "pending")
				}
			}
		}), e.format = function () {
			throw "$.format has been deprecated. Please use $.validator.format instead."
		}
	}(),
	function (e) {
		var t, n = {};
		e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, i) {
			var o = e.port;
			"abort" === e.mode && (n[o] && n[o].abort(), n[o] = i)
		}) : (t = e.ajax, e.ajax = function (i) {
			var o = ("mode" in i ? i : e.ajaxSettings).mode,
				r = ("port" in i ? i : e.ajaxSettings).port;
			return "abort" === o ? (n[r] && n[r].abort(), n[r] = t.apply(this, arguments), n[r]) : t.apply(this, arguments)
		})
	}(),
	function (e) {
		e.extend(e.fn, {
			validateDelegate: function (t, n, i) {
				return this.bind(n, function (n) {
					var o = e(n.target);
					if (o.is(t)) return i.apply(o, arguments)
				})
			}
		})
	}();