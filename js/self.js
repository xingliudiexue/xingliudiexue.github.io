/* Copyright (C) 2013 Justin Windle sketch.min.js, http://soulwire.co.uk  鼠标点击效果
var Sketch = function () {
    "use strict";

    function e(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }

    function t(e) {
        return "function" == typeof e
    }

    function n(e) {
        return "number" == typeof e
    }

    function o(e) {
        return "string" == typeof e
    }

    function r(e) {
        return E[e] || String.fromCharCode(e)
    }

    function i(e, t, n) {
        for (var o in t)(n || !e.hasOwnProperty(o)) && (e[o] = t[o]);
        return e
    }

    function u(e, t) {
        return function () {
            e.apply(t, arguments)
        }
    }

    function a(e) {
        var n = {};
        for (var o in e) n[o] = t(e[o]) ? u(e[o], e) : e[o];
        return n
    }

    function c(e) {
        function n(n) {
            t(n) && n.apply(e, [].splice.call(arguments, 1))
        }

        function u(e) {
            for (_ = 0; _ < J.length; _++) G = J[_], o(G) ? O[(e ? "add" : "remove") + "EventListener"].call(O, G, k, !1) : t(G) ? k = G : O = G
        }

        function c() {
            L(T), T = I(c), U || (n(e.setup), U = t(e.setup), n(e.resize)), e.running && !j && (e.dt = (B = +new Date) - e.now, e.millis += e.dt, e.now = B, n(e.update), e.autoclear && K && e.clear(), n(e.draw)), j = ++j % e.interval
        }

        function l() {
            O = Y ? e.style : e.canvas, D = Y ? "px" : "", e.fullscreen && (e.height = w.innerHeight, e.width = w.innerWidth), O.height = e.height + D, O.width = e.width + D, e.retina && K && X && (O.height = e.height * X, O.width = e.width * X, O.style.height = e.height + "px", O.style.width = e.width + "px", e.scale(X, X)), U && n(e.resize)
        }

        function s(e, t) {
            return N = t.getBoundingClientRect(), e.x = e.pageX - N.left - w.scrollX, e.y = e.pageY - N.top - w.scrollY, e
        }

        function f(t, n) {
            return s(t, e.element), n = n || {}, n.ox = n.x || t.x, n.oy = n.y || t.y, n.x = t.x, n.y = t.y, n.dx = n.x - n.ox, n.dy = n.y - n.oy, n
        }

        function g(e) {
            if (e.preventDefault(), W = a(e), W.originalEvent = e, W.touches)
                for (M.length = W.touches.length, _ = 0; _ < W.touches.length; _++) M[_] = f(W.touches[_], M[_]);
            else M.length = 0, M[0] = f(W, V);
            return i(V, M[0], !0), W
        }

        function h(t) {
            for (t = g(t), q = (Q = J.indexOf(z = t.type)) - 1, e.dragging = /down|start/.test(z) ? !0 : /up|end/.test(z) ? !1 : e.dragging; q;) o(J[q]) ? n(e[J[q--]], t) : o(J[Q]) ? n(e[J[Q++]], t) : q = 0
        }

        function p(t) {
            F = t.keyCode, H = "keyup" == t.type, Z[F] = Z[r(F)] = !H, n(e[t.type], t)
        }

        function v(t) {
            e.autopause && ("blur" == t.type ? b : C)(), n(e[t.type], t)
        }

        function C() {
            e.now = +new Date, e.running = !0
        }

        function b() {
            e.running = !1
        }

        function P() {
            (e.running ? b : C)()
        }

        function A() {
            K && e.clearRect(0, 0, e.width, e.height)
        }

        function S() {
            R = e.element.parentNode, _ = x.indexOf(e), R && R.removeChild(e.element), ~_ && x.splice(_, 1), u(!1), b()
        }
        var T, k, O, R, N, _, D, B, G, W, z, F, H, q, Q, j = 0,
            M = [],
            U = !1,
            X = w.devicePixelRatio,
            Y = e.type == m,
            K = e.type == d,
            V = {
                x: 0,
                y: 0,
                ox: 0,
                oy: 0,
                dx: 0,
                dy: 0
            },
            J = [e.element, h, "mousedown", "touchstart", h, "mousemove", "touchmove", h, "mouseup", "touchend", h, "click", y, p, "keydown", "keyup", w, v, "focus", "blur", l, "resize"],
            Z = {};
        for (F in E) Z[E[F]] = !1;
        return i(e, {
            touches: M,
            mouse: V,
            keys: Z,
            dragging: !1,
            running: !1,
            millis: 0,
            now: 0 / 0,
            dt: 0 / 0,
            destroy: S,
            toggle: P,
            clear: A,
            start: C,
            stop: b
        }), x.push(e), e.autostart && C(), u(!0), l(), c(), e
    }
    for (var l, s, f = "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "), g = "__hasSketch", h = Math, d = "canvas", p = "webgl", m = "dom", y = document, w = window, x = [], v = {
            fullscreen: !0,
            autostart: !0,
            autoclear: !0,
            autopause: !0,
            container: y.body,
            interval: 1,
            globals: !0,
            retina: !1,
            type: d
        }, E = {
            8: "BACKSPACE",
            9: "TAB",
            13: "ENTER",
            16: "SHIFT",
            27: "ESCAPE",
            32: "SPACE",
            37: "LEFT",
            38: "UP",
            39: "RIGHT",
            40: "DOWN"
        }, C = {
            CANVAS: d,
            WEB_GL: p,
            WEBGL: p,
            DOM: m,
            instances: x,
            install: function (t) {
                if (!t[g]) {
                    for (var o = 0; o < f.length; o++) t[f[o]] = h[f[o]];
                    i(t, {
                        TWO_PI: 2 * h.PI,
                        HALF_PI: h.PI / 2,
                        QUATER_PI: h.PI / 4,
                        random: function (t, o) {
                            return e(t) ? t[~~(h.random() * t.length)] : (n(o) || (o = t || 1, t = 0), t + h.random() * (o - t))
                        },
                        lerp: function (e, t, n) {
                            return e + n * (t - e)
                        },
                        map: function (e, t, n, o, r) {
                            return (e - t) / (n - t) * (r - o) + o
                        }
                    }), t[g] = !0
                }
            },
            create: function (e) {
                return e = i(e || {}, v), e.globals && C.install(self), l = e.element = e.element || y.createElement(e.type === m ? "div" : "canvas"), s = e.context = e.context || function () {
                    switch (e.type) {
                        case d:
                            return l.getContext("2d", e);
                        case p:
                            return l.getContext("webgl", e) || l.getContext("experimental-webgl", e);
                        case m:
                            return l.canvas = l
                    }
                }(), e.container.appendChild(l), C.augment(s, e)
            },
            augment: function (e, t) {
                return t = i(t || {}, v), t.element = e.canvas || e, t.element.className += " sketch", i(e, t, !0), c(e)
            }
        }, b = ["ms", "moz", "webkit", "o"], P = self, A = 0, S = "AnimationFrame", T = "request" + S, k = "cancel" + S, I = P[T], L = P[k], O = 0; O < b.length && !I; O++) I = P[b[O] + "Request" + S], L = P[b[O] + "Cancel" + T];
    return P[T] = I = I || function (e) {
        var t = +new Date,
            n = h.max(0, 16 - (t - A)),
            o = setTimeout(function () {
                e(t + n)
            }, n);
        return A = t + n, o
    }, P[k] = L = L || function (e) {
        clearTimeout(e)
    }, C
}();

//---
if (document.getElementById("clickCanvas")) {
    function Particle(x, y, radius) {
        this.init(x, y, radius);
    }
    Particle.prototype = {
        init: function (x, y, radius) {
            this.alive = true;
            this.radius = radius || 10;
            this.wander = 0.15;
            this.theta = random(TWO_PI);
            this.drag = 0.92;
            this.color = '#ffeb3b';

            this.x = x || 0.0;
            this.y = y || 0.0;
            this.vx = 0.0;
            this.vy = 0.0;
        },
        move: function () {
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= this.drag;
            this.vy *= this.drag;
            this.theta += random(-0.5, 0.5) * this.wander;
            this.vx += sin(this.theta) * 0.1;
            this.vy += cos(this.theta) * 0.1;
            this.radius *= 0.96;
            this.alive = this.radius > 0.5;
        },
        draw: function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    var MAX_PARTICLES = 50;
    //圆点颜色库
    var COLOURS = ["#5ee4ff", "#f44033", "#ffeb3b", "#F38630", "#FA6900", "#f403e8", "#F9D423"];
    var particles = [];
    var pool = [];
    var clickparticle = Sketch.create({
        container: document.getElementById('clickCanvas')
    });
    clickparticle.spawn = function (x, y) {
        if (particles.length >= MAX_PARTICLES)
            pool.push(particles.shift());
        particle = pool.length ? pool.pop() : new Particle();
        particle.init(x, y, random(5, 20)); //圆点大小范围
        particle.wander = random(0.5, 2.0);
        particle.color = random(COLOURS);
        particle.drag = random(0.9, 0.99);
        theta = random(TWO_PI);
        force = random(1, 5);
        particle.vx = sin(theta) * force;
        particle.vy = cos(theta) * force;
        particles.push(particle);
    };
    clickparticle.update = function () {
        var i, particle;
        for (i = particles.length - 1; i >= 0; i--) {
            particle = particles[i];
            if (particle.alive)
                particle.move();
            else
                pool.push(particles.splice(i, 1)[0]);
        }
    };
    clickparticle.draw = function () {
        clickparticle.globalCompositeOperation = 'lighter';
        for (var i = particles.length - 1; i >= 0; i--) {
            particles[i].draw(clickparticle);
        }
    };
    //按下时显示效果，mousedown 或者 click
    document.addEventListener("click", function (e) {
        var max, j;
        //排除一些元素
        "TEXTAREA" !== e.target.nodeName && "INPUT" !== e.target.nodeName && "A" !== e.target.nodeName && "I" !== e.target.nodeName && "IMG" !== e.target.nodeName &&
            function () {
                for (max = random(15, 20), j = 0; j < max; j++)
                    clickparticle.spawn(e.clientX, e.clientY);
            }();
    });
}*/

/* 泡泡效果*/
/*
(function() {
	var canvas, ctx, width, height, bubbles, animateHeader = true;
	initHeader();
	function initHeader() {
		canvas = document.getElementById('header_canvas');
		window_resize();
		ctx = canvas.getContext('2d');
		//建立泡泡
		bubbles = [];
		var num = width * 0.04;//气泡数量
		for (var i = 0; i < num; i++) {
			var c = new Bubble();
			bubbles.push(c);
		}
		animate();
	}
	function animate() {
		if (animateHeader) {
			ctx.clearRect(0, 0, width, height);
			for (var i in bubbles) {
				bubbles[i].draw();
			}
		}
		requestAnimationFrame(animate);
	}
	function window_resize() {
		//canvas铺满窗口
		//width = window.innerWidth;
		//height = window.innerHeight;

        //如果需要铺满内容可以换下面这个
        var panel = document.getElementById('thumbnail_canvas');
		width=panel.offsetWidth;
		height=panel.offsetHeight;

		canvas.width = width;
		canvas.height = height;
	}
    window.onresize = function(){
        window_resize();
    }
	function Bubble() {
		var _this = this;
		(function() {
			_this.pos = {};
			init();
		})();
		function init() {
			_this.pos.x = Math.random() * width;
			_this.pos.y = height + Math.random() * 100;
			_this.alpha = 0.1 + Math.random() * 0.3;//气泡透明度
			_this.alpha_change = 0.0002 + Math.random() * 0.0005;//气泡透明度变化速度
			_this.scale = 0.2 + Math.random() * 0.5;//气泡大小
			_this.scale_change = Math.random() * 0.002;//气泡大小变化速度
			_this.speed = 0.1 + Math.random() * 0.4;//气泡上升速度
		}
		//气泡
		this.draw = function() {
			if (_this.alpha <= 0) {
				init();
			}
			_this.pos.y -= _this.speed;
			_this.alpha -= _this.alpha_change;
			_this.scale += _this.scale_change;
			ctx.beginPath();
			ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
			ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
			ctx.fill();
		}; 
	}
})();*/



// 添加图片，背景图片会在这里随机选取一个设置为banner
/*xiaokang.bannerList = [
    "/img/custom/beachDowry.webp",
    "/img/custom/blueMiku.webp",
    "/img/custom/umbrella.webp",
    "/img/custom/weaponMaster.webp",
    "/img/custom/magician.webp",
    "/img/custom/lookBack.webp",
    "/img/custom/ferrisWheel.webp",
    "/img/custom/TopRoofGirl.webp",
];
xiaokang.randomBanner(); // true为使用滤镜，不写或者false为不使用滤镜
/*
! function (u) {
    /*function c(e, t) {
        return new c.prototype.init(e, t)
    }
    c.prototype.extend({
        changeBanner: function (e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            return null != e && -1 != e.search("http") ? c.setBanner(e, n) : "transparent" == e && $(".full_page").css({
                background: "transparent"
            }), this
        },
        randomBanner: function (e, t, n, a, i) {
            var o, r, s = 4 < arguments.length && void 0 !== i && i;
            return (arguments.length = 1 == e) && (s = !0), arguments.length < 4 ? (o = this.bannerList.length, r = c.randomNum(0, o), console.log(this.bannerList[r], r), c.setBanner(this.bannerList[r], s)) : (r = c.randomNum(n, a + 1), c.setBanner(e + r + t, s)), c
        },
        /*mobileSidebar: function () {
            for (var e = document.getElementById("mobile-sidebar-menus"), t = e.getElementsByClassName("menus_item_child"), n = e.getElementsByClassName("menus-expand"), a = 0; a < t.length; a++) t[a].style.display = "none", n[a].className += " menus-closed";
            return this
        },
        bgPage: function () {
            var e = document.getElementById("web_bg"),
                t = document.getElementById("content-inner"),
                n = Cookies.get("opacity") ? Cookies.get("opacity") : .5,
                a = Cookies.get("bg"),
                i = Cookies.get("animation"),
                o = Cookies.get("type");
            return a && (e.style.background = a, e.setAttribute("data-type", o), i && (e.style.animation = i)), c.setColor(t, n), this
        },
        /*randomBg: function (e, t, n, a) {
            var i, o;
            return arguments.length < 4 ? (i = this.imgList.length, o = c.randomNum(0, i), c.setBg(this.imgList[o])) : (o = c.randomNum(n, a + 1), c.setBg(e + o + t)), c
        }
    }), */
/*xkTool
    }), /*c.prototype.init.prototype = c.prototype, u.self = c
}(window);

! function () {
    prototype.extend({
        changeBanner: function (e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            return null != e && -1 != e.search("http") ? c.setBanner(e, n) : "transparent" == e && $(".full_page").css({
                background: "transparent"
            }), this
        },
        randomBanner: function (e, t, n, a, i) {
            var o, r, s = 4 < arguments.length && void 0 !== i && i;
            return (arguments.length = 1 == e) && (s = !0), arguments.length < 4 ? (o = this.bannerList.length, r = c.randomNum(0, o), console.log(this.bannerList[r], r), c.setBanner(this.bannerList[r], s)) : (r = c.randomNum(n, a + 1), c.setBanner(e + r + t, s)), c
        },
        bgPage: function () {
            var e = document.getElementById("web_bg"),
                t = document.getElementById("content-inner"),
                n = Cookies.get("opacity") ? Cookies.get("opacity") : .5,
                a = Cookies.get("bg"),
                i = Cookies.get("animation"),
                o = Cookies.get("type");
            return a && (e.style.background = a, e.setAttribute("data-type", o), i && (e.style.animation = i)), c.setColor(t, n), this
        },
    });
    // 添加图片，背景图片会在这里随机选取一个设置为banner
    modify.bannerList('#theme.index_img');
    modify.randomBanner(); // true为使用滤镜，不写或者false为不使用滤镜
}(window);*/