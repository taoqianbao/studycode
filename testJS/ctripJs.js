/**
 * Ctrip JavaScript Code
 * http://www.ctrip.com/
 * Copyright(C) 2008 - 2015, Ctrip All rights reserved.
 * Version: 151217
 * Date: 2015-12-17
 */
;window.replace = function() {
	return ''
};
window.replace = function() {
	return ""
};
! function() {
	
	window.replace = function() {
		return ""
	};
	
	(function() {
		
		var h = document,
			c = function(a) {
				return h.getElementById(a)
			},
			k = null,
			l = null,
			m = 0,
			d = [c("cui_nav_destination"), c("cui_nav_hotel"), c("cui_nav_vac"), c("cui_nav_flight"), c("cui_nav_more"), c("cui_nav_car"), c("cui_nav_trains"), c("cui_nav_tuan"), c("cui_nav_lpk"), c("cui_nav_ticket"), c("cui_nav_sl"), c("cui_nav_g")],
			g = {
				onmouseenter: function(a, b) {
					(h.all ? a.onmouseenter = b : a.onmouseover = function(a) {
						(null == a.relatedTarget ? b() : this !== a.relatedTarget && 20 != this.compareDocumentPosition(a.relatedTarget) &&
							b())
					})
				},
				onmouseout: function(a, b) {
					(h.all ? a.onmouseleave = b : a.onmouseout = function(a) {
						(null == a.relatedTarget ? b() : this !== a.relatedTarget && 20 != this.compareDocumentPosition(a.relatedTarget) && b())
					})
				},
				addEvent: function(a, b, f) {
					(a.addEventListener ? a.addEventListener(b, f, !1) : (a.attachEvent ? a.attachEvent("on" + b, f) : a["on" + b] = f))
				}
			},
			e = {
				setTime: function() {
					g.onmouseenter(c("cui_nav"), function() {
						setTimeout(function() {
							m = 150
						}, 30)
					});
					g.onmouseout(c("cui_nav"), function() {
						m = 0
					})
				},
				initEvent: function() {
					for (var a = 0, b = d.length; b > a; a++)(function() {
						var b =
							a;
						g.onmouseenter(d[b], function() {
							e.interFn(d[b])
						});
						g.onmouseout(d[b], function() {
							e.outerFn(d[b])
						})
					})(a)
				},
				reset: function() {
					for (var a = 0, b = d.length; b > a; a++) d[a].className = (-1 < d[a].className.indexOf("cui_nav_current") ? "cui_nav_current" : "")
				},
				padReset: function(a) {
					for (var b = 0, f = d.length; f > b; b++)(-1 < d[b].className.indexOf("cui_nav_current") ? d[b].className = "cui_nav_current" : b !== a && (d[b].className = ""))
				},
				interFn: function(a) {
					for (var b = document.getElementById("cui_nav").getElementsByTagName("li"), f = "", d = 0; d < b.length; d++) b[d].className.match((/cui_nav_current/)) &&
						(f = b[d]);
					null != l && (clearTimeout(l), l = null);
					k = setTimeout(function() {
						e.reset();
						(-1 < a.className.indexOf("cui_nav_current") ? f.className = "cui_nav_current" : (a.className = "cui_nav_o", f.className = "cui_nav_current cui_nav_unhover"))
					}, m)
				},
				outerFn: function(a) {
					for (var b = document.getElementById("cui_nav").getElementsByTagName("li"), d = "", c = 0; c < b.length; c++) b[c].className.match((/cui_nav_current/)) && (d = b[c]);
					null != k && (clearTimeout(k), k = null);
					l = setTimeout(function() {
						e.reset();
						(-1 < a.className.indexOf("cui_nav_current") ?
							d.className = "cui_nav_current" : (a.className = "", d.className = "cui_nav_current"))
					}, 250)
				},
				initMobile: function() {
					for (var a = 0, b = d.length; b > a; a++)(function() {
						var b = a,
							c = d[b].getElementsByTagName("A")[0];
						c.href = "###";
						c.onmousedown = function() {
							e.padReset(b); - 1 === d[b].className.indexOf("cui_nav_current") && ((-1 < d[b].className.indexOf("cui_nav_o") ? (d[b].className = "", document.getElementsByClassName("cui_nav_current")[0].className = "cui_nav_current", c.style.visibility = "hidden", setTimeout(function() {
								c.style.visibility =
									"visible"
							}, 10)) : (d[b].className = "cui_nav_o", document.getElementsByClassName("cui_nav_current")[0].className = "cui_nav_current", document.getElementsByClassName("cui_nav_current")[0].className += " cui_nav_unhover")))
						}
					})(a)
				},
				contains: function(a) {
					for (var b = 0, c = d.length; c > b; b++)
						if (0 < d[b].compareDocumentPosition(a) - 19) return !0;
					return !1
				}
			};
		c("headStyleId") && c("headStyleId").parentNode.removeChild(c("headStyleId"));
		((/ip(hone|od)|ipad/i).test(navigator.userAgent) ? (e.initMobile(), g.addEvent(h.body, "click", function(a) {
			e.contains(a.target ||
				a.srcElement) || e.reset()
		})) : (e.setTime(), e.initEvent()))
	})()
}();