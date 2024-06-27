var Xt = Object.defineProperty
  , Qt = Object.defineProperties;
var Jt = Object.getOwnPropertyDescriptors;
var it = Object.getOwnPropertySymbols;
var Kt = Object.prototype.hasOwnProperty
  , es = Object.prototype.propertyIsEnumerable;
var Pe = (n,e,t)=>e in n ? Xt(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t
  , nt = (n,e)=>{
    for (var t in e || (e = {}))
        Kt.call(e, t) && Pe(n, t, e[t]);
    if (it)
        for (var t of it(e))
            es.call(e, t) && Pe(n, t, e[t]);
    return n
}
  , ot = (n,e)=>Qt(n, Jt(e));
var m = (n,e,t)=>(Pe(n, typeof e != "symbol" ? e + "" : e, t),
t);
import {E as ts, s as Me, i as ss, g as h, S as ne, l as rt, H as Se, d as at, a as lt, V as v, D as _e, P as is, b as ht, W as ns, M as Fe, c as fe, e as Ee, f as ke, T as os, O as rs, h as ze, R as ct, j as as, C as ls, F as Be, B as hs, k as cs, m as us, n as ds, o as ms} from "./vendor.js";
function fs() {
    return new Promise(n=>{
        document.readyState == "loading" ? document.addEventListener("DOMContentLoaded", n) : n()
    }
    )
}
var a = {
    app: null
};
const u = new ts;
var R = {
    dom: {
        body: document.body,
        scroll: document.querySelector(".js-site-wrap"),
        sh: document.querySelector(".js-sh"),
        pe: document.querySelector(".js-pe"),
        mask: document.querySelector(".js-mask")
    },
    bounds: {
        ww: window.innerWidth,
        wh: window.innerHeight,
        sw: document.querySelector("[data-router-wrapper]").getBoundingClientRect().width
    },
    flags: ot(nt({
        locked: !1,
        small: window.matchMedia("(max-width: 639px)").matches,
        hover: window.matchMedia("(hover: hover)").matches,
        windows: ["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform) !== -1
    }, Me.getInfos()), {
        isDevice: Me.isDevice || /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1
    }),
    addClasses: function() {
        Me.addClasses(this.dom.body),
        this.flags.windows && this.dom.body.classList.add("is-windows"),
        this.flags.isDevice && (this.dom.body.classList.remove("is-desktop"),
        this.dom.body.classList.add("is-device"))
    }
};
function ps(n, e, t) {
    return n * (1 - t) + e * t
}
const Re = (n,e=document)=>e.querySelector(n)
  , De = (n,e=document)=>e.querySelectorAll(n);
function gs(n) {
    return n.getBoundingClientRect()
}
function vs(n) {
    return n % 2 == 1
}
var C = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    lerp: ps,
    qs: Re,
    qsa: De,
    rect: gs,
    odd: vs
});
const pe = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
}
  , ys = "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch
  , xs = "onkeydown"in document
  , {flags: ws, bounds: bs} = R
  , {windows: ut, isFirefox: Ss} = ws;
class Es {
    constructor(e={}) {
        m(this, "wheel", e=>{
            const {mm: t, fm: s} = this.opts
              , i = this.event;
            i.deltaY = e.wheelDeltaY || e.deltaY * -1,
            Ss && e.deltaMode == 1 && (i.deltaY *= s),
            i.deltaY *= t,
            this.notify(e)
        }
        );
        m(this, "touchStart", e=>{
            const t = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStartY = t.pageY
        }
        );
        m(this, "touchMove", e=>{
            const {tm: t} = this.opts
              , s = this.event
              , i = e.targetTouches ? e.targetTouches[0] : e;
            s.deltaY = (i.pageY - this.touchStartY) * t,
            this.touchStartY = i.pageY,
            this.notify(e)
        }
        );
        m(this, "keyDown", e=>{
            const t = document.activeElement.nodeName;
            if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT")
                return;
            const s = this.event
              , {ks: i} = this.opts
              , o = bs.wh - 40;
            switch (s.deltaY = 0,
            e.keyCode) {
            case pe.LEFT:
            case pe.UP:
                s.deltaY = i;
                break;
            case pe.RIGHT:
            case pe.DOWN:
                s.deltaY = -i;
                break;
            case e.shiftKey:
                s.deltaY = o;
                break;
            case pe.SPACE:
                s.deltaY = -o;
                break;
            default:
                return
            }
            this.notify(e)
        }
        );
        this.el = window,
        this.opts = Object.assign({
            mm: ut ? 1.1 : .45,
            tm: 2.75,
            fm: ut ? 40 : 90,
            ks: 120
        }, e),
        this.event = {
            y: 0,
            deltaY: 0
        },
        this.touchStartY = null,
        this.init()
    }
    init() {
        this.notify(),
        this.addEvents()
    }
    addEvents() {
        u.on("wheel", this.el, this.wheel, {
            passive: !0
        }),
        ys && (u.on("touchstart", this.el, this.touchStart, {
            passive: !0
        }),
        u.on("touchmove", this.el, this.touchMove, {
            passive: !0
        })),
        xs && u.on("keydown", document, this.keyDown)
    }
    notify(e=null) {
        const t = this.event;
        t.y += t.deltaY,
        u.emit("vs", {
            y: t.y,
            deltaY: t.deltaY,
            originalEvent: e
        })
    }
}
var zs = new class {
    constructor() {
        this.isRunning = !1,
        this.el = Re(".js-pe")
    }
    run() {
        clearTimeout(this.timer),
        this.timer = setTimeout(()=>{
            this.isRunning = !1,
            this.togglePointers("none")
        }
        , 300),
        this.isRunning || (this.isRunning = !0,
        this.togglePointers("all"))
    }
    togglePointers(n) {
        this.el.style.pointerEvents = n
    }
}
;
function Cs(n) {
    if (n.length != 6)
        throw "Only six-digit hex colors are allowed.";
    const e = n.match(/.{1,2}/g);
    return {
        r: parseInt(e[0], 16),
        g: parseInt(e[1], 16),
        b: parseInt(e[2], 16)
    }
}
class Ts {
    constructor() {
        this.frames = [],
        this.render = e=>this.frame(e)
    }
    start() {
        this.stopped = !1,
        this.now = performance.now(),
        this.id = window.requestAnimationFrame(this.render)
    }
    stop(e=!1) {
        e && window.cancelAnimationFrame(this.id),
        this.stopped = !0
    }
    frame(e) {
        if (this.frames.length < 1)
            return !1;
        for (let t = 0; t < this.frames.length && this.frames.length > 0; t++)
            this.frames.length && this.frames[t].handler(e);
        this.stopped || (this.id = window.requestAnimationFrame(this.render))
    }
    add(e, t) {
        if (typeof e != "function")
            throw new Error("Expected function as handler");
        return typeof t == "undefined" && (t = `h_${++this.uidCounter}`),
        this.frames.push({
            id: t,
            handler: e
        }),
        this.frames.length === 1 && this.start(),
        t
    }
    moveToFirst(e) {
        if (typeof e == "undefined")
            throw new Error("Expected id");
        const t = this.frames.findIndex(s=>s.id === e);
        t < 0 || this.frames.unshift(this.frames.splice(t, 1)[0])
    }
    remove(e) {
        if (typeof e == "undefined")
            throw new Error("Expected id");
        const t = this.frames.findIndex(s=>s.id === e);
        t < 0 || (this.frames.splice(t, 1),
        this.frames.length <= 0 && this.stop())
    }
}
var r = {
    gl: null,
    loaded: null,
    trigger: !1,
    triggerTL: null,
    resolve: null,
    scroll: {
        offsetTop: 0
    },
    raf: new Ts,
    webp: !1,
    webgl2: ss(),
    isMobile: window.innerWidth < 650,
    mouse: window.innerWidth > 650,
    layout: null,
    smooth: !0,
    fonts: {},
    background: Cs("000000"),
    backgroundRender: null,
    pane: null,
    state: {}
};
function oe(n, e, t) {
    return (1 - t) * n + t * e
}
function dt(n, e, t) {
    return Math.min(Math.max(e, n), t)
}
const {flags: Is} = R;
new class {
    constructor() {
        m(this, "onVS", ({deltaY: n, originalEvent: e})=>{
            !Is.locked && zs.run(),
            u.emit("scroll", {
                y: dt(n, -300, 300) * -1,
                ogEvt: e
            })
        }
        );
        r.isMobile || (new Es,
        u.on("vs", this.onVS))
    }
}
;
h.registerPlugin(ne);
const {flags: mt, bounds: Oe, dom: Ce} = R
  , {isDevice: ft} = mt;
new class {
    constructor() {
        m(this, "tick", ()=>{
            if (ft)
                this.pos = Ce.scroll.scrollTop;
            else {
                const n = this.target - this.current;
                this.current += n * this.ease,
                this.pos = Math.round(this.current * 100) / 100
            }
            ne.update(),
            u.emit("tick", {
                pos: this.pos
            })
        }
        );
        m(this, "scroll", ({y: n})=>{
            mt.locked || (this.target += n,
            this.clamp())
        }
        );
        m(this, "reset", ()=>{
            this.target = this.current = this.pos = 0,
            Ce.scroll.scrollTop = 0,
            ne.refresh()
        }
        );
        m(this, "resize", ()=>{
            this.clamp(),
            this.pos = this.current = this.target
        }
        );
        this.target = 0,
        this.current = 0,
        this.pos = 0,
        this.ease = .11,
        ne.defaults({
            scroller: Ce.body
        }),
        ne.scrollerProxy(Ce.body, {
            scrollTop: ()=>this.pos,
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: Oe.ww,
                    height: Oe.wh
                }
            }
        }),
        this.addEvents()
    }
    clamp() {
        this.target = h.utils.clamp(0, Oe.scroll, this.target)
    }
    addEvents() {
        h.ticker.fps(-1),
        h.ticker.add(this.tick),
        ft || (u.on("scroll", this.scroll),
        u.on("resize:on-reset", this.resize)),
        u.on("scroll:on-reset", this.reset)
    }
}
;
const {dom: $e, bounds: ce, flags: As} = R
  , {isDevice: pt} = As;
new class {
    constructor() {
        m(this, "resize", ()=>{
            const n = window.innerWidth;
            pt && n === ce.ww || (ce.ww = n,
            ce.wh = window.innerHeight,
            this.setOrientation($e, ce),
            this.setVh(),
            u.emit("resize"),
            pt && u.emit("resize:on-reset"))
        }
        );
        this.setOrientation($e, ce),
        this.setVh(),
        u.on("resize", window, rt(this.resize, 200)),
        u.on("orientationchange", window, this.resize)
    }
    setOrientation({body: n}, {wh: e, ww: t}) {
        t < e ? n.classList.add("is-portrait") : n.classList.remove("is-portrait")
    }
    setVh() {
        $e.body.style.setProperty("--vh", `${ce.wh / 100}px`)
    }
}
;
const {isDevice: qe} = R.flags;
new class {
    constructor() {
        m(this, "onMove", n=>{
            const {x: e, y: t, target: s} = this.getPos(n);
            u.emit("mousemove", {
                x: e,
                y: t,
                target: s,
                e: n
            })
        }
        );
        m(this, "onDown", n=>{
            const {x: e, y: t, target: s} = this.getPos(n);
            this.on = e,
            u.emit("mousedown", {
                x: e,
                y: t,
                target: s
            })
        }
        );
        m(this, "onUp", n=>{
            const {x: e, target: t} = this.getPos(n);
            this.off = e;
            const s = Math.abs(this.off - this.on) < 10;
            u.emit("mouseup", {
                x: e,
                target: t,
                click: s
            })
        }
        );
        this.on = 0,
        this.off = 0,
        this.events = {
            move: qe ? "touchmove" : "mousemove",
            down: qe ? "touchstart" : "mousedown",
            up: qe ? "touchend" : "mouseup"
        },
        this.addEvents()
    }
    addEvents() {
        const {move: n, down: e, up: t} = this.events;
        u.on(n, window, this.onMove),
        u.on(e, window, this.onDown),
        u.on(t, window, this.onUp),
        u.on("click", window, s=>u.emit("click", s))
    }
    getPos(n) {
        const e = n.changedTouches ? n.changedTouches[0].clientX : n.clientX
          , t = n.changedTouches ? n.changedTouches[0].clientY : n.clientY
          , s = n.target;
        return {
            x: e,
            y: t,
            target: s
        }
    }
}
;
function U(n=0) {
    return new Promise(function(e) {
        setTimeout(e, n)
    }
    )
}
class Ls {
    constructor() {}
    on(e, t, s) {
        const i = this.e || (this.e = {});
        return (i[e] || (i[e] = [])).push({
            fn: t,
            ctx: s
        }),
        this
    }
    once(e, t, s) {
        const i = this;
        function o() {
            i.off(e, o),
            t.apply(s, arguments)
        }
        return o._ = t,
        this.on(e, o, s)
    }
    emit(e) {
        const t = [].slice.call(arguments, 1)
          , s = ((this.e || (this.e = {}))[e] || []).slice();
        let i = 0;
        const o = s.length;
        for (i; i < o; i++)
            s[i].fn.apply(s[i].ctx, t);
        return this
    }
    off(e, t) {
        const s = this.e || (this.e = {})
          , i = s[e]
          , o = [];
        if (i && t)
            for (let c = 0, f = i.length; c < f; c++)
                i[c].fn !== t && i[c].fn._ !== t && o.push(i[c]);
        return o.length ? s[e] = o : delete s[e],
        this
    }
}
const x = new Ls;
function gt(n) {
    var e = n.nodeType
      , t = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof n.textContent == "string")
            return n.textContent;
        for (n = n.firstChild; n; n = n.nextSibling)
            t += gt(n)
    } else if (e === 3 || e === 4)
        return n.nodeValue;
    return t
}
/*!
 * SplitText: 3.0.0
 * https://greensock.com
 *
 * @license Copyright 2008-2019, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var le, vt, yt, Ps = /(?:\r|\n|\t\t)/g, Ms = /(?:\s\s+)/g, _s = function() {
    le = document,
    vt = window,
    yt = 1
}, xt = function(e) {
    return vt.getComputedStyle(e)
}, Fs = Array.isArray, wt = [].slice, He = function(e, t) {
    var s;
    return Fs(e) ? e : (s = typeof e) === "string" && !t && e ? wt.call(le.querySelectorAll(e), 0) : e && s === "object" && "length"in e ? wt.call(e, 0) : e ? [e] : []
}, Ge = function(e) {
    return e.position === "absolute" || e.absolute === !0
}, ks = function(e, t) {
    for (var s = t.length, i; --s > -1; )
        if (i = t[s],
        e.substr(0, i.length) === i)
            return i.length
}, Bs = " style='position:relative;display:inline-block;'", bt = function(e, t) {
    e === void 0 && (e = "");
    var s = ~e.indexOf("++")
      , i = 1;
    return s && (e = e.split("++").join("")),
    function() {
        return "<" + t + Bs + (e ? " class='" + e + (s ? i++ : "") + "'>" : ">")
    }
}, St = function n(e, t, s) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            n(e, t, s);
    else
        (i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(t).join(s))
}, Ue = function(e, t) {
    for (var s = t.length; --s > -1; )
        e.push(t[s])
}, Et = function(e, t, s) {
    for (var i; e && e !== t; ) {
        if (i = e._next || e.nextSibling,
        i)
            return i.textContent.charAt(0) === s;
        e = e.parentNode || e._parent
    }
}, Rs = function n(e) {
    var t = He(e.childNodes), s = t.length, i, o;
    for (i = 0; i < s; i++)
        o = t[i],
        o._isSplit ? n(o) : (i && o.previousSibling.nodeType === 3 ? o.previousSibling.nodeValue += o.nodeType === 3 ? o.nodeValue : o.firstChild.nodeValue : o.nodeType !== 3 && e.insertBefore(o.firstChild, o),
        e.removeChild(o))
}, Q = function(e, t) {
    return parseFloat(t[e]) || 0
}, Ds = function(e, t, s, i, o, c, f) {
    var d = xt(e), z = Q("paddingLeft", d), G = -999, W = Q("borderBottomWidth", d) + Q("borderTopWidth", d), K = Q("borderLeftWidth", d) + Q("borderRightWidth", d), $ = Q("paddingTop", d) + Q("paddingBottom", d), I = Q("paddingLeft", d) + Q("paddingRight", d), k = Q("fontSize", d) * .2, T = d.textAlign, N = [], ee = [], _ = [], te = t.wordDelimiter || " ", E = t.tag ? t.tag : t.span ? "span" : "div", b = t.type || t.split || "chars,words,lines", p = o && ~b.indexOf("lines") ? [] : null, y = ~b.indexOf("words"), S = ~b.indexOf("chars"), L = Ge(t), q = t.linesClass, V = ~(q || "").indexOf("++"), A = [], g, P, F, l, se, O, Z, tt, ie, M, st, X;
    for (V && (q = q.split("++").join("")),
    P = e.getElementsByTagName("*"),
    F = P.length,
    se = [],
    g = 0; g < F; g++)
        se[g] = P[g];
    if (p || L)
        for (g = 0; g < F; g++)
            l = se[g],
            O = l.parentNode === e,
            (O || L || S && !y) && (X = l.offsetTop,
            p && O && Math.abs(X - G) > k && (l.nodeName !== "BR" || g === 0) && (Z = [],
            p.push(Z),
            G = X),
            L && (l._x = l.offsetLeft,
            l._y = X,
            l._w = l.offsetWidth,
            l._h = l.offsetHeight),
            p && ((l._isSplit && O || !S && O || y && O || !y && l.parentNode.parentNode === e && !l.parentNode._isSplit) && (Z.push(l),
            l._x -= z,
            Et(l, e, te) && (l._wordEnd = !0)),
            l.nodeName === "BR" && (l.nextSibling && l.nextSibling.nodeName === "BR" || g === 0) && p.push([])));
    for (g = 0; g < F; g++) {
        if (l = se[g],
        O = l.parentNode === e,
        l.nodeName === "BR") {
            p || L ? (l.parentNode && l.parentNode.removeChild(l),
            se.splice(g--, 1),
            F--) : y || e.appendChild(l);
            continue
        }
        L && (ie = l.style,
        !y && !O && (l._x += l.parentNode._x,
        l._y += l.parentNode._y),
        ie.left = l._x + "px",
        ie.top = l._y + "px",
        ie.position = "absolute",
        ie.display = "block",
        ie.width = l._w + 1 + "px",
        ie.height = l._h + "px"),
        !y && S ? l._isSplit ? (l._next = l.nextSibling,
        l.parentNode.appendChild(l)) : l.parentNode._isSplit ? (l._parent = l.parentNode,
        !l.previousSibling && l.firstChild && (l.firstChild._isFirst = !0),
        l.nextSibling && l.nextSibling.textContent === " " && !l.nextSibling.nextSibling && A.push(l.nextSibling),
        l._next = l.nextSibling && l.nextSibling._isFirst ? null : l.nextSibling,
        l.parentNode.removeChild(l),
        se.splice(g--, 1),
        F--) : O || (X = !l.nextSibling && Et(l.parentNode, e, te),
        l.parentNode._parent && l.parentNode._parent.appendChild(l),
        X && l.parentNode.appendChild(le.createTextNode(" ")),
        E === "span" && (l.style.display = "inline"),
        N.push(l)) : l.parentNode._isSplit && !l._isSplit && l.innerHTML !== "" ? ee.push(l) : S && !l._isSplit && (E === "span" && (l.style.display = "inline"),
        N.push(l))
    }
    for (g = A.length; --g > -1; )
        A[g].parentNode.removeChild(A[g]);
    if (p) {
        for (L && (M = le.createElement(E),
        e.appendChild(M),
        st = M.offsetWidth + "px",
        X = M.offsetParent === e ? 0 : e.offsetLeft,
        e.removeChild(M)),
        ie = e.style.cssText,
        e.style.cssText = "display:none;"; e.firstChild; )
            e.removeChild(e.firstChild);
        for (tt = te === " " && (!L || !y && !S),
        g = 0; g < p.length; g++) {
            for (Z = p[g],
            M = le.createElement(E),
            M.style.cssText = "display:block;text-align:" + T + ";position:" + (L ? "absolute;" : "relative;"),
            q && (M.className = q + (V ? g + 1 : "")),
            _.push(M),
            F = Z.length,
            P = 0; P < F; P++)
                Z[P].nodeName !== "BR" && (l = Z[P],
                M.appendChild(l),
                tt && l._wordEnd && M.appendChild(le.createTextNode(" ")),
                L && (P === 0 && (M.style.top = l._y + "px",
                M.style.left = z + X + "px"),
                l.style.top = "0px",
                X && (l.style.left = l._x - X + "px")));
            F === 0 ? M.innerHTML = "&nbsp;" : !y && !S && (Rs(M),
            St(M, String.fromCharCode(160), " ")),
            L && (M.style.width = st,
            M.style.height = l._h + "px"),
            e.appendChild(M)
        }
        e.style.cssText = ie
    }
    L && (f > e.clientHeight && (e.style.height = f - $ + "px",
    e.clientHeight < f && (e.style.height = f + W + "px")),
    c > e.clientWidth && (e.style.width = c - I + "px",
    e.clientWidth < c && (e.style.width = c + K + "px"))),
    Ue(s, N),
    y && Ue(i, ee),
    Ue(o, _)
}, Os = function(e, t, s, i) {
    var o = t.tag ? t.tag : t.span ? "span" : "div", c = t.type || t.split || "chars,words,lines", f = ~c.indexOf("chars"), d = Ge(t), z = t.wordDelimiter || " ", G = z !== " " ? "" : d ? "&#173; " : " ", W = "</" + o + ">", K = 1, $ = t.specialChars ? typeof t.specialChars == "function" ? t.specialChars : ks : null, I, k, T, N, ee, _, te, E, b = le.createElement("div"), p = e.parentNode;
    for (p.insertBefore(b, e),
    b.textContent = e.nodeValue,
    p.removeChild(e),
    e = b,
    I = gt(e),
    te = I.indexOf("<") !== -1,
    t.reduceWhiteSpace !== !1 && (I = I.replace(Ms, " ").replace(Ps, "")),
    te && (I = I.split("<").join("{{LT}}")),
    ee = I.length,
    k = (I.charAt(0) === " " ? G : "") + s(),
    T = 0; T < ee; T++)
        if (_ = I.charAt(T),
        $ && (E = $(I.substr(T), t.specialChars)))
            _ = I.substr(T, E || 1),
            k += f && _ !== " " ? i() + _ + "</" + o + ">" : _,
            T += E - 1;
        else if (_ === z && I.charAt(T - 1) !== z && T) {
            for (k += K ? W : "",
            K = 0; I.charAt(T + 1) === z; )
                k += G,
                T++;
            T === ee - 1 ? k += G : I.charAt(T + 1) !== ")" && (k += G + s(),
            K = 1)
        } else
            _ === "{" && I.substr(T, 6) === "{{LT}}" ? (k += f ? i() + "{{LT}}</" + o + ">" : "{{LT}}",
            T += 5) : _.charCodeAt(0) >= 55296 && _.charCodeAt(0) <= 56319 || I.charCodeAt(T + 1) >= 65024 && I.charCodeAt(T + 1) <= 65039 ? (N = ((I.substr(T, 12) || [])[1] || "").length || 2,
            k += f && _ !== " " ? i() + I.substr(T, N) + "</" + o + ">" : I.substr(T, N),
            T += N - 1) : k += f && _ !== " " ? i() + _ + "</" + o + ">" : _;
    e.outerHTML = k + (K ? W : ""),
    te && St(p, "{{LT}}", "<")
}, $s = function n(e, t, s, i) {
    var o = He(e.childNodes), c = o.length, f = Ge(t), d, z;
    if (e.nodeType !== 3 || c > 1) {
        for (t.absolute = !1,
        d = 0; d < c; d++)
            z = o[d],
            (z.nodeType !== 3 || /\S+/.test(z.nodeValue)) && (f && z.nodeType !== 3 && xt(z).display === "inline" && (z.style.display = "inline-block",
            z.style.position = "relative"),
            z._isSplit = !0,
            n(z, t, s, i));
        t.absolute = f,
        e._isSplit = !0;
        return
    }
    Os(e, t, s, i)
};
function H(n, e) {
    yt || _s(),
    this.elements = He(n),
    this.chars = [],
    this.words = [],
    this.lines = [],
    this._originals = [],
    this.vars = e || {},
    this.split(e)
}
var zt = H.prototype;
zt.split = function(e) {
    this.isSplit && this.revert(),
    this.vars = e = e || this.vars,
    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
    for (var t = this.elements.length, s = e.tag ? e.tag : e.span ? "span" : "div", i = bt(e.wordsClass, s), o = bt(e.charsClass, s), c, f, d; --t > -1; )
        d = this.elements[t],
        this._originals[t] = d.innerHTML,
        c = d.clientHeight,
        f = d.clientWidth,
        $s(d, e, i, o),
        Ds(d, e, this.chars, this.words, this.lines, f, c);
    return this.chars.reverse(),
    this.words.reverse(),
    this.lines.reverse(),
    this.isSplit = !0,
    this
}
;
zt.revert = function() {
    var e = this._originals;
    if (!e)
        throw "revert() call wasn't scoped properly.";
    return this.elements.forEach(function(t, s) {
        return t.innerHTML = e[s]
    }),
    this.chars = [],
    this.words = [],
    this.lines = [],
    this.isSplit = !1,
    this
}
;
H.create = function(e, t) {
    return new H(e,t)
}
;
const {qs: We, qsa: qs} = C
  , {dom: Ct, flags: Tt} = R;
let j = null;
class Ne extends Se.Transition {
    in({from: e, to: t, trigger: s, done: i}) {
        e.remove(),
        s === "popstate" && (a.gl.hoverImages.instances.forEach(o=>{
            o.keep = !1
        }
        ),
        a.gl.texts && a.gl.texts.destroy(),
        a.gl.hoverImages && a.gl.hoverImages.destroy(),
        a.gl.planes && a.gl.planes.destroy(),
        a.gl.blob && a.gl.blob.removeScrollEvents()),
        this.animateIn(t),
        i(),
        Ct.body.classList.remove("is-loading")
    }
    async out({from: e, trigger: t, done: s}) {
        Ct.body.classList.add("is-loading"),
        t === "popstate" ? (this.animateOut(e, s),
        s()) : (await this.animateOut(e, s),
        s())
    }
    async animateIn(e) {
        u.emit("scroll:on-reset"),
        u.emit("menu:close"),
        window.scrollTo(0, 0),
        Tt.locked = !1;
        const t = We(".js-t-chars", e)
          , s = qs(".js-t-lines p", e)
          , i = We("#gl");
        if (j && j.kill(),
        j = h.timeline({
            paused: !0,
            defaults: {
                immediateRender: !0
            }
        }).fromTo(e, {
            opacity: 0,
            y: "-50px"
        }, {
            opacity: 1,
            y: "0",
            duration: .5,
            ease: "expo.out",
            onComplete: ()=>{
                e.style = "",
                i.style.zIndex = ""
            }
        }),
        t) {
            const o = new H(t,{
                type: "words, chars"
            }).chars;
            j.from(o, {
                yPercent: 100,
                duration: 1.5,
                stagger: .075,
                ease: "expo"
            }, .15)
        }
        if (s.length) {
            let o = [];
            s.forEach(c=>{
                const f = new H(c,{
                    type: "lines"
                }).lines
                  , d = new H(f,{
                    type: "lines"
                }).lines;
                j.set(f, {
                    overflow: "hidden"
                }, 0),
                o = [...o, d]
            }
            ),
            j.from(o, {
                yPercent: 100,
                duration: 1.5,
                stagger: .1,
                ease: "expo"
            }, .25)
        }
        j.play(),
        await U(500),
        r.isMobile && x.emit("MOBILE_TEXT_IN")
    }
    async animateOut(e) {
        a.gl.blob.mouse.active = !1,
        Tt.locked = !0;
        const t = We("#gl");
        t.style.zIndex = -1,
        j && j.kill(),
        j = h.timeline().to(e, {
            autoAlpha: 0,
            y: "-50px",
            duration: .5,
            ease: "expo.inOut"
        }),
        await j
    }
}
const {qs: Hs, qsa: Gs, odd: cn} = C
  , {dom: It, flags: un} = R;
let he = null, At;
class Us extends Se.Transition {
    in({from: e, to: t, done: s}) {
        e.remove();
        const i = Hs(".js-t-chars", t)
          , o = Gs(".js-t-lines p", t);
        if (u.emit("scroll:on-reset"),
        u.emit("menu:close"),
        window.scrollTo(0, 0),
        s(),
        he && he.kill(),
        he = h.timeline({
            paused: !0
        }),
        i && (At = new H(i,{
            type: "words, chars"
        }).chars,
        he.from(At, {
            yPercent: 100,
            duration: 1.5,
            stagger: .05,
            ease: "expo"
        }, .5)),
        o.length) {
            let c = [];
            o.forEach(f=>{
                const d = new H(f,{
                    type: "lines"
                }).lines
                  , z = new H(d,{
                    type: "lines"
                }).lines;
                he.set(d, {
                    overflow: "hidden"
                }, 0),
                c = [...c, z]
            }
            ),
            he.from(c, {
                yPercent: 100,
                duration: 1.5,
                stagger: .1,
                ease: "expo"
            }, 1)
        }
        he.play(),
        It.body.classList.remove("is-loading")
    }
    out({from: e, done: t}) {
        It.body.classList.add("is-loading"),
        t()
    }
}
const {dom: Lt} = R
  , {qs: Ws, qsa: dn} = C;
class Ns extends Ne {
    async in({from: e, to: t, done: s}) {
        e.remove(),
        this.animateIn(t),
        s(),
        Lt.body.classList.remove("is-loading")
    }
    async out({from: e, trigger: t, done: s}) {
        Lt.body.classList.add("is-loading"),
        t === "popstate" ? (this.animateOut(e, s),
        s()) : (this.snapPoint = Ws("[data-gl-case]"),
        a.gl.blob.snapToPoint(this.snapPoint),
        await this.animateOut(e, s),
        a.gl.hoverImages.instances.forEach(i=>{
            i.keep = i.active
        }
        ),
        s(),
        await U(1e3),
        a.gl.hoverImages.instances.forEach(i=>{
            i.keep = !1
        }
        ))
    }
}
const {dom: Pt} = R
  , {qs: Vs, qsa: mn} = C;
class js extends Ne {
    async in({from: e, to: t, done: s}) {
        e.remove(),
        this.animateIn(t),
        s(),
        Pt.body.classList.remove("is-loading")
    }
    async out({from: e, trigger: t, done: s}) {
        Pt.body.classList.add("is-loading"),
        t !== "popstate" ? (a.gl.blob.snapToCenter(),
        a.gl.blob.setZoom(5, .5, "expo.in"),
        this.gl = Vs("#gl > canvas"),
        setTimeout(()=>{
            this.gl.style.opacity = ""
        }
        , 400),
        a.gl.hoverImages.instances.forEach(i=>{
            i.active && i.plane.setSize(1.75, .5, "expo.in")
        }
        ),
        await this.animateOut(e, s),
        s()) : (this.animateOut(e, s),
        s())
    }
}
function B() {
    return new Promise(function(n) {
        setTimeout(n, 0)
    }
    )
}
const {flags: fn, bounds: Ve} = R
  , {rect: Ys, qsa: Mt} = C;
class Zs {
    constructor(e=Mt("[data-smooth-item]")) {
        m(this, "run", ({pos: e})=>{
            !this.resizing && this.transformSections(),
            this.current = e,
            r.scroll.offsetTop = this.current
        }
        );
        m(this, "resize", ()=>{
            this.resizing = !0,
            this.getSections(),
            u.emit("resize:on-reset"),
            this.transformSections(),
            this.resizing = !1
        }
        );
        this.elems = [...Mt("[data-smooth-item-o]"), ...e],
        this.current = 0,
        this.resizing = !1,
        this.offset = 300,
        this.init()
    }
    init() {
        this.getSections(),
        this.addEvents()
    }
    addEvents() {
        r.isMobile ? window.addEventListener("scroll", this.onScroll, {
            passive: !0
        }) : (u.on("tick", this.run),
        u.on("resize", this.resize))
    }
    copyGlSections() {
        this.elems.forEach(e=>{
            e.hasAttribute("data-smooth-gl") && console.dir(e)
        }
        )
    }
    getSections() {
        if (!this.elems)
            return;
        const e = this.elems.length - 1
          , {wh: t} = Ve;
        this.copyGlSections(),
        this.sections = this.elems.map((s,i)=>{
            s.style.transform = "translate3d(0, 0, 0)";
            const {top: o, bottom: c} = Ys(s);
            return i === e && (Ve.scroll = c - t),
            {
                el: s,
                start: o - Ve.wh - this.offset,
                end: c + this.offset,
                out: !0
            }
        }
        )
    }
    onScroll() {
        r.scroll.offsetTop = window.scrollY
    }
    transformSections() {
        this.sections.length > 0 && this.sections.forEach(e=>{
            this.visible(e) || this.resizing ? (e.out && (e.out = !1),
            this.transform(e.el)) : e.out || (e.out = !0,
            this.transform(e.el))
        }
        )
    }
    transform(e) {
        e.style.transform = `translate3d(0, ${-this.current}px, 0)`
    }
    visible({start: e, end: t}, s=this.current) {
        return s > e && s < t
    }
    removeEvents() {
        r.isMobile ? window.removeEventListener("scroll", this.onScroll, {
            passive: !0
        }) : (u.off("tick", this.run),
        u.off("resize", this.resize))
    }
    destroy() {
        this.removeEvents(),
        this.sections = this.elems = null,
        u.emit("scroll:on-reset")
    }
}
class Xs {
    constructor(e) {
        this.el = e,
        this.tweens()
    }
    tweens() {}
}
const {flags: pn, bounds: _t} = R
  , {rect: Ft, qsa: Qs, qs: Js} = C;
class Ks {
    constructor(e) {
        m(this, "down", ({x: e, y: t, target: s})=>{
            if (!this.el.contains(s))
                return;
            const i = this.state;
            i.dragging = !0,
            i.cancel.x = e,
            i.cancel.y = t,
            i.on = i.target + e * this.opts.speed
        }
        );
        m(this, "move", ({x: e, y: t, e: s})=>{
            const i = this.state;
            if (!i.dragging)
                return;
            const {cancel: o} = i;
            Math.abs(e - o.x) > Math.abs(t - o.y) && s.cancelable && (s.preventDefault(),
            s.stopPropagation()),
            i.target = i.on - e * this.opts.speed,
            this.clamp()
        }
        );
        m(this, "up", ()=>{
            !this.state.dragging || (this.state.dragging = !1)
        }
        );
        m(this, "run", ()=>{
            const e = this.state;
            !e.visible || (e.current += (e.target - e.current) * this.opts.ease,
            e.pos = Math.round(e.current * 100) / 100,
            e.diff = (e.target - e.current) * .0075,
            e.diff = Math.round(e.diff * 100) / 100,
            !e.resizing && this.transformSections())
        }
        );
        m(this, "resize", ()=>{
            this.getCache()
        }
        );
        this.el = e,
        this.container = Js(".js-slides", this.el),
        this.slides = [...Qs(".js-slide", this.el)],
        this.state = {
            target: 0,
            current: 0,
            pos: 0,
            diff: 0,
            on: 0,
            cancel: {
                x: 0,
                y: 0
            },
            max: 0,
            dragging: !1,
            resizing: !1
        },
        this.opts = {
            speed: 2,
            ease: .075
        },
        this.total = this.slides.length - 1,
        this.getCache(),
        this.addEvents(),
        ne.create({
            trigger: this.el,
            onToggle: t=>{
                t.isActive ? this.state.visible = !0 : this.state.visible = !1
            }
        })
    }
    addEvents() {
        u.on("mouseup", this.up),
        u.on("mousedown", this.down),
        u.on("mousemove", this.move),
        u.on("tick", this.run),
        u.on("resize:on-reset", this.resize)
    }
    getCache() {
        const {ww: e} = _t;
        this.snaps = [],
        this.cache = this.slides.map((t,s)=>{
            t.style.transform = "translate3d(0, 0, 0)";
            const {left: i, right: o, width: c} = Ft(t);
            return s === this.total && (this.state.max = o - e + Ft(this.container).left),
            this.snaps.push(i),
            {
                el: t,
                left: i,
                width: c,
                start: i - e - 100,
                end: o + 100,
                out: !0
            }
        }
        )
    }
    clamp() {
        const e = this.state;
        e.target = h.utils.clamp(0, e.max, e.target)
    }
    visible({start: e, end: t, width: s, left: i}, o) {
        const c = o > e && o < t;
        let f = 0;
        return c && (f = h.utils.clamp(0, 1, 1 + (o - i - s) / (_t.ww + s))),
        {
            visible: c,
            progress: f
        }
    }
    transformSections() {
        const e = this.state
          , t = e.pos;
        this.cache.length && this.cache.forEach(s=>{
            const {visible: i, progress: o} = this.visible(s, t);
            i || e.resizing ? (s.out && (s.out = !1),
            this.transform(s.el, o, t)) : s.out || (s.out = !0,
            this.transform(s.el, o, t))
        }
        )
    }
    transform(e, t, s, i=this.state.diff) {
        const o = h.utils.clamp(-100, 100, (-25 * t + 25) * i)
          , c = -(s + o);
        e.style.transform = `translate3d(${c}px, 0, 0)`
    }
    removeEvents() {
        u.off("mouseup", this.up),
        u.off("mousedown", this.down),
        u.off("mousemove", this.move),
        u.off("tick", this.run),
        u.off("resize:on-reset", this.resize)
    }
    destroy() {
        this.removeEvents(),
        this.cache = null
    }
}
const {flags: re, bounds: gn} = R
  , {rect: vn, qsa: yn, qs: je} = C;
class ei {
    constructor() {
        m(this, "toggle", ()=>{
            re.menu ? this.close() : this.open()
        }
        );
        m(this, "open", ()=>{
            if (this.tl.isActive())
                return;
            this.btn.classList.add("is-active"),
            document.body.classList.add("menu-is-open"),
            re.menu = !0,
            re.locked = !0,
            r.isMobile && at.on();
            const {uProgress: e, uForce: t} = a.menu.bg.material.uniforms;
            this.tl.clear().set(this.el, {
                autoAlpha: 1
            }).fromTo(this.bend(t), {
                progress: 0
            }, {
                progress: 1,
                duration: 1,
                ease: "power3.inOut"
            }, 0).fromTo(e, {
                value: 0
            }, {
                value: 1,
                duration: 1,
                ease: "power3.inOut",
                onStart: ()=>{
                    a.menu.active = !0
                }
                ,
                onComplete: ()=>{
                    a.menu.active = !1
                }
            }, 0).fromTo(".js-m-reveal", {
                yPercent: 100
            }, {
                yPercent: 0,
                duration: 1.15,
                stagger: .1,
                ease: "expo"
            }, .5).fromTo(".js-m-fade", {
                alpha: 0
            }, {
                alpha: 1,
                duration: 1,
                ease: "power1"
            }, .5),
            re.small || this.tl.to(".js-sh-item", {
                autoAlpha: 0,
                duration: .35,
                ease: "power1"
            }, 0),
            this.tl.restart()
        }
        );
        m(this, "close", ()=>{
            re.menu = !1,
            re.locked = !1,
            this.btn.classList.remove("is-active");
            const {uProgress: e, uForce: t} = a.menu.bg.material.uniforms;
            r.isMobile && at.off(),
            this.tl.clear().fromTo(this.bend(t), {
                progress: 0
            }, {
                progress: 1.1,
                duration: 1,
                ease: "power3.inOut"
            }, 0).to(e, {
                value: 0,
                duration: 1.1,
                ease: "power3.inOut",
                onStart: ()=>{
                    a.menu.active = !0
                }
                ,
                onComplete: ()=>{
                    a.menu.active = !1,
                    document.body.classList.remove("menu-is-open")
                }
            }, 0).to(".js-m-reveal", {
                yPercent: -100,
                duration: .45,
                stagger: .025,
                ease: "power2.inOut"
            }, 0).to(".js-m-fade", {
                alpha: 0,
                duration: .35,
                ease: "power1"
            }, 0).set(this.el, {
                autoAlpha: 0
            }),
            re.small || this.tl.to(".js-sh-item", {
                autoAlpha: 1,
                duration: .35,
                ease: "power1"
            }, .5),
            this.tl.restart()
        }
        );
        m(this, "redirect", ()=>{
            re.page === "home" ? this.close() : a.router.redirect(location.origin, "menu")
        }
        );
        this.el = je(".js-menu"),
        this.inner = je(".js-menu-inner"),
        this.btn = je(".js-menu-toggle"),
        u.on("click", this.btn, this.toggle),
        u.on("click", ".js-menu-logo", this.redirect),
        u.on("menu:close", this.close),
        this.tl = h.timeline({
            paused: !0
        })
    }
    bend(e) {
        return h.timeline({
            paused: !0,
            defaults: {
                duration: .5,
                ease: "none"
            }
        }).to(e, {
            value: 1
        }).to(e, {
            value: 0
        })
    }
}
class ti {
    constructor(e=De("[data-lazy-src]")) {
        this.elems = e,
        this.handle()
    }
    handle() {
        this.elems.forEach(e=>{
            const t = e.dataset.src || e.dataset.lazySrc || e.dataset.lazySrcM;
            if (!t)
                return;
            const s = t.split(".").pop();
            if (!e.classList.contains("img-fill") && e.classList.add("img-fill"),
            s === "mp4") {
                this.createVid(e, t);
                return
            }
            ne.create({
                trigger: e,
                start: "-50% bottom",
                once: !0,
                onEnter: ()=>this.load(e, t)
            })
        }
        )
    }
    createVid(e, t) {
        const s = document.createElement("video");
        s.src = t,
        e.dataset.srcPoster && (s.poster = e.dataset.srcPoster),
        s.setAttribute("muted", !0),
        s.setAttribute("playsinline", !0),
        s.setAttribute("loop", !0),
        e.appendChild(s),
        ne.create({
            trigger: s,
            onToggle: i=>{
                i.isActive ? s.play() : s.pause()
            }
        })
    }
    load(e, t) {
        const s = new Image
          , i = document.createDocumentFragment()
          , o = document.createElement("div");
        o.classList.add("loader"),
        i.appendChild(o),
        i.appendChild(s),
        s.src = t,
        s.alt = "",
        e.appendChild(i),
        s.decode().then(()=>{
            e.removeChild(o),
            e.classList.add("is-loaded")
        }
        )
    }
    destroy() {
        this.elems = null
    }
}
const {qsa: Ye, qs: xn} = C;
class si {
    constructor(e) {
        this.el = e,
        this.slides = [...Ye(".js-sel-item", this.el)],
        this.links = [...Ye(".js-sel-link", this.el)],
        this.bullets = Ye(".js-sel-bullet", this.el),
        this.total = this.slides.length - 1,
        this.state = {
            last: -1,
            current: 0,
            animating: !1,
            z: this.links.length
        },
        this.init()
    }
    init() {
        this.setCache()
    }
    setCache() {}
    destroy() {
        this.cache = null,
        this.state = null
    }
}
const {rect: wn, qsa: ii, qs: Te} = C;
class ni {
    constructor(e) {
        m(this, "toPrev", ()=>{
            this.animating || (this.last = this.current,
            this.current = h.utils.wrap(0, this.total, this.current - 1),
            this.animate())
        }
        );
        m(this, "toNext", ()=>{
            this.animating || (this.last = this.current,
            this.current = h.utils.wrap(0, this.total, this.current + 1),
            this.animate())
        }
        );
        this.el = e,
        this.elems = [...ii(".js-slide", this.el)],
        this.prev = Te(".js-prev", this.el),
        this.next = Te(".js-next", this.el),
        this.display = Te(".js-current", this.el),
        this.last = -1,
        this.current = 0,
        this.total = this.elems.length,
        this.z = this.total + 1,
        this.tl = h.timeline({
            paused: !0,
            defaults: {
                duration: 1,
                ease: "power3.inOut"
            }
        }),
        this.init()
    }
    init() {
        this.addEvents(),
        this.getCache()
    }
    addEvents() {
        u.on("click", this.prev, this.toPrev),
        u.on("click", this.next, this.toNext)
    }
    getCache() {
        this.cache = this.elems.map((e,t)=>{
            const s = Te("img", e);
            return {
                el: e,
                img: s
            }
        }
        )
    }
    animate() {
        this.animating = !0;
        const e = this.cache[this.last]
          , t = this.cache[this.current];
        this.z += 1,
        this.display.innerText = (this.current + 1).toString().padStart(2, "0"),
        this.tl.clear().set(t.el, {
            autoAlpha: 1,
            zIndex: this.z
        }).fromTo([t.el, t.img], {
            xPercent: h.utils.wrap([100, -100])
        }, {
            xPercent: 0
        }, 0).fromTo(t.img, {
            scale: 1.25
        }, {
            scale: 1
        }, 0).set(e.el, {
            autoAlpha: 0
        }).add(()=>{
            this.animating = !1
        }
        ).play()
    }
}
const {qs: ge, qsa: bn} = C;
class ve {
    constructor(e) {
        m(this, "openDialog", ()=>{
            this.input.click()
        }
        );
        m(this, "selectFile", e=>{
            const t = e.target.files[0];
            this.label.innerText = t.name,
            this.actions.classList.remove("dn")
        }
        );
        m(this, "clearFile", ()=>{
            this.label.innerText = "",
            this.input.value = "",
            this.actions.classList.add("dn")
        }
        );
        this.el = e,
        this.trigger = ge(".file-input-trigger", this.el),
        this.input = ge("input[type=file]", this.el),
        this.label = ge(".file-input-label", this.el),
        this.clear = ge(".file-input-clear", this.el),
        this.actions = ge(".label-w-remove", this.el),
        this.init()
    }
    init() {
        this.addEvents()
    }
    addEvents() {
        u.on("click", this.trigger, this.openDialog),
        u.on("input", this.input, this.selectFile),
        u.on("click", this.clear, this.clearFile)
    }
}
const {dom: Sn, flags: kt} = R
  , {isDevice: oi} = kt
  , {qs: ri, qsa: D} = C;
class J extends Se.Renderer {
    constructor() {
        super(...arguments);
        m(this, "handleSubmitSubscriptionForm", e=>{
            e.preventDefault(),
            fetch(e.target.action, {
                method: "POST",
                body: new FormData(e.target)
            }).then(t=>{
                if (t.ok)
                    return t.json().then(s=>{
                        s && "redirect"in s && (location.href = s.redirect)
                    }
                    )
            }
            )
        }
        )
    }
    async initial() {
        R.addClasses(),
        this.onEnter(),
        this.load()
    }
    async onEnter() {
        this.leaving = !1,
        document.body.dataset.page = this.properties.slug,
        this.onGlText = this.onGlText.bind(this),
        this.el = this.wrap.lastElementChild,
        kt.page = this.el.id,
        x.on("GL_TEXT_IN", this.onGlText),
        this.handleActive(),
        await U(200),
        !this.leaving && (this.handleSections(),
        this.handleGl(),
        u.emit("resize"))
    }
    handleSections() {
        this.sections = [],
        this.subscriptionForm = ri("#footer-newsletter-form"),
        this.subscriptionForm && this.subscriptionForm.addEventListener("submit", this.handleSubmitSubscriptionForm)
    }
    onLeave() {
        this.leaving = !0,
        a.gl.snapSections && a.gl.snapSections.destroy(),
        a.gl.sizeSections && a.gl.sizeSections.destroy(),
        a.gl.planes && a.gl.planes.animateOut(),
        a.gl.texts && a.gl.texts.animateOut(),
        x.off("GL_TEXT_IN", this.onGlText),
        this.subscriptionForm && this.subscriptionForm.removeEventListener("submit", this.handleSubmitSubscriptionForm),
        this.sections.forEach(e=>{
            e.destroy()
        }
        )
    }
    onEnterCompleted() {
        this.handleLazy(),
        this.handleScroll(),
        this.handleDraggable(),
        this.handleGllry(),
        this.handleTextarea(),
        this.triggered = new Xs
    }
    loadCaptcha() {
        try {
            document.getElementsByClassName("g-recaptcha").length > 0 && (console.info("loadCaptcha called."),
            grecaptcha.reset(),
            grecaptcha.render("recaptcha", {
                sitekey: "facto",
                callback: function() {
                    console.info("recaptcha callback")
                }
            }))
        } catch {
            return
        }
    }
    onLeaveCompleted() {
        if (this.scroll && this.scroll.destroy(),
        a.gl.texts && a.gl.texts.destroy(),
        a.gl.hoverImages && a.gl.hoverImages.destroy(),
        a.gl.planes && a.gl.planes.destroy(),
        this.draggable)
            for (const t of this.draggable)
                t.destroy();
        const e = D("textarea", this.el);
        lt.destroy(e),
        ne.getAll().forEach(t=>t.kill())
    }
    setup() {
        this.initial()
    }
    onGlText() {
        const e = D("[data-gl-opacity]", this.el);
        e.length && h.to(e, {
            opacity: 1,
            duration: .5,
            ease: "linear"
        })
    }
    load() {
        new ei,
        this.onEnterCompleted()
    }
    async handleGl() {
        const e = D("[data-gl-text]", this.el)
          , t = D("[data-gl-snap]", this.el)
          , s = D("[data-gl-size]", this.el)
          , i = D("[data-gl-img]", this.el)
          , o = D("[data-gl-hover-img]", this.el);
        await a.loaded,
        o.length && a.gl.hoverImages && a.gl.hoverImages.add(o),
        t.length && a.gl.snapSections && a.gl.snapSections.add(t),
        s.length && a.gl.sizeSections && a.gl.sizeSections.add(s),
        e.length && a.gl.texts && a.gl.texts.add(e, "textElements"),
        i.length && a.gl.planes && a.gl.planes.addImages(i, "imgElements"),
        await B(),
        this.afterGl()
    }
    afterGl() {
        const e = a.gl.blob;
        e && (e.material.uniforms.uOpacity.value = 0,
        e.snapToCenter(),
        e.setZoom(),
        a.gl.active = !0)
    }
    handleLazy() {
        const e = oi ? [...D("[data-lazy-src-m]", this.el), ...D("[data-lazy-src]", this.el)] : D("[data-lazy-src]", this.el);
        e.length && (this.lazy = new ti(e))
    }
    handleScroll() {
        const e = D("[data-smooth-item]", this.el);
        if (e.length && (this.scroll = new Zs(e),
        this.el.id === "blog-single")) {
            const t = o=>new Promise(c=>{
                const f = new Image;
                f.onload = ()=>c({
                    path: o,
                    status: "ok"
                }),
                f.onerror = ()=>c({
                    path: o,
                    status: "error"
                }),
                f.src = o
            }
            )
              , s = [...D("img", this.el)].map(o=>o.src || o.currentSrc);
            ((...o)=>Promise.all(o.map(t)))(s).then(()=>{
                u.emit("resize")
            }
            )
        }
    }
    handleDraggable() {
        const e = [...D(".js-slider", this.el)];
        e.length && (this.draggable = e.map(t=>new Ks(t)))
    }
    handleGllry() {
        const e = [...D(".js-gllry", this.el)];
        e.length && (this.gllry = e.map(t=>new ni(t)))
    }
    handleTextarea() {
        const e = D("textarea", this.el);
        e && lt(e)
    }
    handleActive() {
        De(".js-site-link").forEach(e=>{
            e.href === location.href ? e.classList.add("is-active") : e.classList.remove("is-active")
        }
        )
    }
}
class ue {
    constructor(e) {
        this.el = e,
        this.inViewEl = e,
        this.inViewParams = {
            threshold: .15,
            rootMargin: "0% 0% -40% 0%"
        },
        this.init(),
        this.activeObserver && this.observe()
    }
    init() {
        this.sectionViewed = !1,
        this.lastViewed = !1,
        this.inView = this.inView.bind(this),
        this.animateIn = this.animateIn.bind(this),
        this.animateOut = this.animateOut.bind(this),
        this.observe = this.observe.bind(this),
        this.activeObserver = !1
    }
    observe() {
        this.observer = new IntersectionObserver(this.inView,this.inViewParams),
        this.observer.observe(this.inViewEl)
    }
    unobserve() {
        this.activeObserver && this.observer.unobserve(this.inViewEl)
    }
    destroy() {
        this.unobserve()
    }
    animateIn() {}
    animateOut() {}
    inView(e) {
        e.forEach(t=>{
            const {isIntersecting: s, target: i} = t;
            if (s)
                if (this.isIntersecting = !0,
                i === this.inViewEl) {
                    if (this.sectionViewed)
                        return;
                    this.animateIn(),
                    this.sectionViewed = !0
                } else {
                    if (this.lastViewed)
                        return;
                    this.lastViewed = !0
                }
        }
        )
    }
}
const {qs: Bt, qsa: Ie} = C;
class ai extends ue {
    init() {
        super.init(),
        this.inViewEl = Bt(".h-contact-viewer", this.el),
        this.autoAnimation = !1,
        this.activeObserver = !0,
        this.textBlocks = Ie(".text-anim", this.el),
        this.textBlocksInner = Ie(".text-anim-inner", this.el),
        this.arrow = Bt(".arrow", this.el),
        this.colsOuter = Ie(".col-outer", this.el),
        this.colsInner = Ie(".col-inner", this.el),
        h.set([this.textBlocks, this.colsOuter], {
            overflow: "hidden"
        }),
        h.set(this.textBlocksInner, {
            yPercent: 100,
            opacity: 0
        }),
        h.set(this.colsInner, {
            xPercent: -100
        }),
        h.set(this.arrow, {
            x: "4rem"
        })
    }
    animateIn() {
        super.animateIn(),
        h.fromTo(this.textBlocksInner, {
            yPercent: 100
        }, {
            yPercent: 0,
            opacity: 1,
            stagger: .15,
            duration: 2,
            ease: "expo.out"
        }),
        h.fromTo(this.arrow, {
            x: "4rem"
        }, {
            x: 0,
            delay: .25,
            duration: 2,
            ease: "expo.out"
        }),
        h.fromTo(this.colsInner, {
            xPercent: -100
        }, {
            xPercent: 0,
            delay: .25,
            stagger: .1,
            duration: 2,
            ease: "expo.out"
        })
    }
}
const {qs: Rt, qsa: Dt} = C;
class li extends ue {
    init() {
        super.init(),
        this.autoAnimation = !1,
        this.activeObserver = !1,
        this.textBlocks = Dt(".text-anim", this.el),
        this.textBlocksInner = Dt(".text-anim-inner", this.el),
        this.heroSubtitle = Rt(".hero__subtitle", this.el),
        this.heroTitle = Rt(".hero__title", this.el),
        h.set(this.textBlocks, {
            overflow: "hidden"
        }),
        h.set(this.textBlocksInner, {
            yPercent: 100
        }),
        x.on("GL_TEXT_IN", this.animateIn),
        x.on("MOBILE_TEXT_IN", this.animateIn)
    }
    destroy() {
        super.destroy(),
        x.off("GL_TEXT_IN", this.animateIn),
        x.off("MOBILE_TEXT_IN", this.animateIn)
    }
    animateIn() {
        super.animateIn(),
        this.heroSubtitle.style = "",
        this.heroTitle.style = "",
        h.fromTo(this.textBlocksInner[0], {
            yPercent: 100
        }, {
            yPercent: 0,
            duration: 2,
            ease: "expo.out"
        }),
        h.fromTo([this.textBlocksInner[1], this.textBlocksInner[2]], {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: .15,
            duration: 2,
            ease: "expo.out"
        })
    }
}
const {qs: de, qsa: Ot} = C;
class hi extends ue {
    async init() {
        super.init(),
        this.autoAnimation = !1,
        this.activeObserver = !0,
        this.inViewEl = de(".h-about__text", this.el),
        this.arrow = de(".arrow", this.el),
        h.set(this.inViewEl, {
            overflow: "hidden"
        }),
        this.inViewParams = {
            threshold: .15,
            rootMargin: "0% 0% 0% 0%"
        },
        this.splitTexts(),
        await B(),
        this.textBlocks = Ot(".text-anim", this.el),
        this.textBlocksInner = Ot(".text-anim-inner", this.el),
        this.linkWrap = de(".h-about-link", this.el),
        this.linkInner = de(".h-about-link-inner", this.el),
        h.set(this.textBlocksInner, {
            xPercent: -100
        }),
        h.set(this.linkWrap, {
            overflow: "hidden"
        }),
        h.set(this.linkInner, {
            xPercent: -120
        }),
        h.set(this.arrow, {
            x: "4rem"
        })
    }
    splitTexts() {
        de(".js-sel-item-subtitle", this.el);
        const e = new H(de(".h-about__text p", this.el),{
            type: "lines",
            linesClass: "text-anim"
        }).lines
          , t = new H(e,{
            type: "lines",
            linesClass: "text-anim-inner"
        }).lines;
        e.forEach(s=>{
            s.dataset.glText = ""
        }
        ),
        t.forEach(s=>{
            s.dataset.glTextInner = ""
        }
        ),
        h.set(e, {
            overflow: "hidden"
        })
    }
    animateIn() {
        super.animateIn(),
        h.fromTo(this.arrow, {
            x: "4rem"
        }, {
            x: 0,
            duration: 2,
            ease: "expo.out"
        }),
        this.textBlocksInner.forEach((e,t)=>{
            e.animate([{
                transform: "translate3D(-100%, 0, 0)"
            }, {
                transform: "translate3D(0, 0, 0)"
            }], {
                duration: 3e3,
                delay: 250 + t * 100,
                fill: "both",
                easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)"
            })
        }
        ),
        h.fromTo(this.linkInner, {
            xPercent: -100
        }, {
            xPercent: 0,
            delay: .75,
            duration: 2,
            ease: "expo.out"
        })
    }
}
const {qs: Ae, qsa: $t} = C;
class ci extends ue {
    async init() {
        super.init(),
        this.inViewParams = {
            threshold: 0,
            rootMargin: "-50% 0% -50% 0%"
        },
        this.autoAnimation = !1,
        this.activeObserver = !0,
        this.splitTexts(),
        await B(),
        this.textBlocks = $t(".text-anim", this.el),
        this.textBlocksInner = $t(".text-anim-inner", this.el),
        this.linkWrap = Ae(".sel-item-link", this.el),
        this.linkInner = Ae(".js-sel-link", this.el),
        h.set(this.textBlocks, {
            overflow: "hidden"
        }),
        h.set(this.textBlocksInner, {
            yPercent: 100
        }),
        h.set(this.linkWrap, {
            overflow: "hidden"
        }),
        h.set(this.linkInner, {
            xPercent: -100
        })
    }
    splitTexts() {
        Ae(".js-sel-item-subtitle", this.el);
        const e = new H(Ae(".js-sel-item-title", this.el),{
            type: "words",
            wordsClass: "text-anim"
        }).words;
        new H(e,{
            type: "words",
            wordsClass: "text-anim-inner"
        }).words,
        h.set(e, {
            overflow: "hidden"
        })
    }
    animateIn() {
        super.animateIn(),
        h.fromTo(this.textBlocksInner, {
            yPercent: 100
        }, {
            yPercent: 0,
            delay: .2,
            stagger: .15,
            duration: 2,
            ease: "expo.out"
        }),
        h.fromTo(this.linkInner, {
            xPercent: -100
        }, {
            xPercent: 0,
            delay: .75,
            duration: 2,
            ease: "expo.out"
        })
    }
}
const {qs: Le, qsa: ye} = C;
class ui extends ue {
    async init() {
        super.init(),
        this.inViewParams = {
            threshold: 0,
            rootMargin: "0% 0% 0% 0%"
        },
        this.inViewEl = Le(".caps__view", this.el),
        this.capsGl = Le(".caps__gl", this.el),
        this.autoAnimation = !1,
        this.activeObserver = !0,
        this.capsInner = ye(".caps-item__inner", this.inViewEl),
        this.capsGlInner = ye(".caps-item__inner", this.capsGl),
        this.caps = ye(".caps-item", this.inViewEl),
        this.capsGl = ye(".caps-item", this.capsGl),
        this.arrow = Le(".arrow", this.el),
        this.title = Le(".caps-title-inner", this.el),
        this.capsGlContainers = ye("[data-gl-img]", this.el),
        this.capsGlInstances = [],
        this.getGlPlanes = this.getGlPlanes.bind(this),
        x.on("GL_IMAGES_IN", this.getGlPlanes),
        h.set([this.caps, this.capsGl], {
            perspective: 2e3
        }),
        h.set([this.capsInner, this.capsGlInner], {
            rotationY: 60,
            y: 300,
            opacity: 0
        }),
        h.set(this.title, {
            xPercent: -100
        }),
        h.set(this.arrow, {
            x: "4rem"
        })
    }
    destroy() {
        super.destroy(),
        x.off("GL_IMAGES_IN", this.getGlPlanes)
    }
    getGlPlanes() {
        r.gl.planes.children.forEach(e=>{
            this.capsGlContainers.forEach(t=>{
                e.el === t && this.capsGlInstances.push(e)
            }
            )
        }
        )
    }
    animateIn() {
        super.animateIn(),
        h.fromTo(this.arrow, {
            x: "4rem"
        }, {
            x: 0,
            duration: 2,
            ease: "expo.out"
        }),
        h.fromTo(this.title, {
            xPercent: -100
        }, {
            xPercent: 0,
            duration: 2,
            delay: .3,
            ease: "expo.out"
        }),
        h.fromTo(this.capsInner, {
            rotationY: 60,
            opacity: 0,
            y: 300
        }, {
            rotationY: 0,
            opacity: 1,
            y: 0,
            delay: .25,
            stagger: .1,
            duration: 2,
            ease: "expo.out",
            transformOrigin: "center",
            transformStyle: "preserve-3d",
            onUpdate: ()=>{
                this.capsGlInstances.forEach((e,t)=>{
                    e.material.uniforms.opacity.value = this.capsInner[t].style.opacity
                }
                )
            }
        }),
        h.fromTo(this.capsGlInner, {
            rotationY: 60,
            opacity: 0,
            y: 300
        }, {
            rotationY: 0,
            y: 0,
            opacity: 1,
            delay: .25,
            stagger: .1,
            duration: 2,
            ease: "expo.out",
            transformOrigin: "center",
            transformStyle: "preserve-3d"
        })
    }
}
const {qs: xe, qsa: qt} = C;
class di extends ue {
    async init() {
        super.init(),
        this.autoAnimation = !1,
        this.activeObserver = !0,
        this.inViewParams = {
            threshold: .15,
            rootMargin: "0% 0% 0% 0%"
        },
        this.newsItems = qt(".news-item", this.el),
        this.newsHeader = xe(".news-header", this.el),
        this.newsItemsCache = [],
        this.newsItems.forEach(e=>{
            const t = qt(".news-item__inner", e)
              , s = xe(".news-item-b", e);
            h.set(t, {
                y: 300,
                opacity: 0
            }),
            h.set(s, {
                scaleX: 0
            }),
            this.newsItemsCache.push({
                inner: t,
                line: s
            })
        }
        ),
        this.newsHeaderArrow = xe(".arrow", this.newsHeader),
        this.newsHeaderTitleInner = xe(".news-header-title-inner", this.newsHeader),
        this.newsHeaderLinkInner = xe(".news-header-link-inner", this.newsHeader),
        h.set([this.newsHeaderTitleInner, this.newsHeaderLinkInner], {
            xPercent: -100
        }),
        h.set(this.newsHeaderArrow, {
            x: "4rem"
        })
    }
    animateIn() {
        super.animateIn(),
        h.fromTo(this.newsHeaderArrow, {
            x: "4rem"
        }, {
            x: 0,
            duration: 2,
            ease: "expo.out"
        }),
        h.fromTo([this.newsHeaderTitleInner, this.newsHeaderLinkInner], {
            xPercent: -100
        }, {
            xPercent: 0,
            duration: 2,
            delay: .3,
            ease: "expo.out"
        }),
        this.newsItemsCache.forEach(({inner: e, line: t},s)=>{
            h.fromTo(t, {
                scaleX: 0
            }, {
                scaleX: 1,
                delay: .5 * s,
                duration: 2,
                ease: "expo.out"
            }),
            h.fromTo(e, {
                opacity: 0,
                y: 300
            }, {
                opacity: 1,
                y: 0,
                delay: .5 * s,
                stagger: .075,
                duration: 2,
                ease: "expo.out"
            })
        }
        )
    }
}
const {qs: me, qsa: mi} = C;
class fi extends J {
    onEnter() {
        super.onEnter()
    }
    onLeave() {
        super.onLeave()
    }
    async afterGl() {
        super.afterGl(),
        a.gl.blob.material.uniforms.uOpacity.value = 1,
        a.gl.blob.mouse.active = r.mouse
    }
    handleSections() {
        super.handleSections(),
        this.contactSectionEl = me(".h-contact", this.el),
        this.homeIntroEl = me(".hero", this.el),
        this.homeAboutEl = me(".h-about", this.el),
        this.homeProjectEls = mi(".sel-item", this.el),
        this.homeCapsEl = me(".caps", this.el),
        this.homeBlogItemsEl = me(".news-list", this.el),
        this.contactSectionEl && this.sections.push(new ai(this.contactSectionEl)),
        this.homeIntroEl && this.sections.push(new li(this.homeIntroEl)),
        this.homeAboutEl && this.sections.push(new hi(this.homeAboutEl)),
        this.homeCapsEl && this.sections.push(new ui(this.homeCapsEl)),
        this.homeBlogItemsEl && this.sections.push(new di(this.homeBlogItemsEl)),
        this.homeProjectEls.length && this.homeProjectEls.forEach(e=>{
            this.sections.push(new ci(e))
        }
        )
    }
    onEnterCompleted() {
        super.onEnterCompleted(),
        this.selected = new si(me(".js-sel"))
    }
    onLeaveCompleted() {
        super.onLeaveCompleted(),
        this.selected && this.selected.destroy()
    }
}
const {qs: ae} = C;
class pi extends J {
    constructor() {
        super(...arguments);
        m(this, "currentForm", "contact-form-1");
        m(this, "fileUploadCode", `
  <span class="file-error"></span>
  <div class="row mt30 s:mt30">
    <div class="col12">
        <div class="file-input">
            <button type="button" class="file-input-trigger link">Attach an RFP</button>
            <input type="file" id="upload-file" name="file" accept=".pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
            <div class="dn label-w-remove">
                <span class="file-input-label"></span>
                <button type="button" class="file-input-clear ml2">x</button>
            </div>
        </div>
    </div>
</div>
<button type="submit" id="submit" hidden></button>
`);
        m(this, "recaptcha", "");
        m(this, "switchContactType", e=>{
            const t = e.target.dataset.type;
            for (const s of [1, 2, 3])
                document.getElementById("contact-form-" + s).style = "display: none",
                document.getElementById("add-file-here-" + s).innerHTML = "",
                document.getElementById("recaptcha-" + s).innerHTML = "";
            switch (t) {
            case "press":
                this.updateDomElements(2);
                break;
            case "partnership":
                this.updateDomElements(3);
                break;
            default:
                this.updateDomElements(1);
                break
            }
            this.handleFileInput(),
            this.transitionUnderline(e.target),
            this.loadCaptcha()
        }
        );
        m(this, "handleSubmitForm", e=>{
            e.preventDefault();
            let t = document.getElementById(this.currentForm);
            const s = t.getElementsByClassName("file-error")[0];
            let i = document.getElementById("upload-file");
            if (i && i.files.length) {
                let o = i.dataset.maxSize;
                if (i.files[0].size > o)
                    return s.innerHTML = this.createErrorElement("File size is too big. Max size is 8 MB."),
                    !1
            }
            fetch("/", {
                method: "POST",
                body: new FormData(e.target),
                redirect: "manual"
            }).then(o=>{
                o && (o.ok ? (t.reset(),
                location.href = document.getElementsByClassName("returnUrl")[0].value) : s.innerHTML = this.createErrorElement(o.statusText))
            }
            ).catch(o=>{
                console.error("err", o),
                this.setErrors(o)
            }
            )
        }
        )
    }
    onEnter() {
        try {
            super.onEnter(),
            this.el = this.wrap.lastElementChild,
            this.form = ae("#contact-form-1", this.el),
            this.selector = ae(".inquiry-selector", this.el),
            this.selector && (this.underline = ae(".underline", this.selector)),
            this.containerErrors = ae(".container-errors", this.el),
            this.ulErrors = ae(".list-errors", this.containerErrors),
            this.addFormUrl(),
            this.loadCaptcha()
        } catch (e) {
            console.error(e)
        }
    }
    addFormUrl() {
        try {
            const e = document.getElementsByClassName("blog-form-url");
            for (let t of e)
                t.setAttribute("value", location.href)
        } catch (e) {
            console.debug(e)
        }
    }
    onLeave() {
        super.onLeave()
    }
    async handleGl() {
        super.handleGl(),
        await U(100),
        a.gl.blob.material.uniforms.uOpacity.value = 0
    }
    onEnterCompleted() {
        super.onEnterCompleted(),
        this.addEvents(),
        this.selector && this.handleInquirySelector(),
        this.handleFileInput(),
        this.loadCaptcha()
    }
    onLeaveCompleted() {
        super.onLeaveCompleted(),
        this.removeEvents()
    }
    addEvents() {
        this.selector && this.selector.addEventListener("input", this.switchContactType),
        this.form.addEventListener("submit", this.handleSubmitForm),
        document.getElementById("add-file-here-1").innerHTML = this.fileUploadCode,
        document.getElementById("recaptcha-1").innerHTML = this.recaptcha
    }
    removeEvents() {
        this.selector && this.selector.removeEventListener("input", this.switchContactType),
        this.form.removeEventListener("submit", this.handleSubmitForm)
    }
    handleInquirySelector() {
        this.selector && this.transitionUnderline(ae("label:first-child input", this.selector))
    }
    handleFileInput() {
        const e = ae(".file-input", this.el);
        e && (this.fileinput = new ve(e))
    }
    updateDomElements(e) {
        document.getElementById("add-file-here-" + e).innerHTML = this.fileUploadCode,
        this.currentForm = "contact-form-" + e,
        this.form = ae("#contact-form-" + e, this.el),
        this.form.addEventListener("submit", this.handleSubmitForm),
        document.getElementById("contact-form-" + e).style = "display: block",
        document.getElementById("recaptcha-" + e).innerHTML = this.recaptcha
    }
    transitionUnderline(e) {
        const t = e.nextElementSibling;
        this.underline.style.transform = "translateX(" + t.offsetLeft + "px) scaleX(" + t.offsetWidth + ")"
    }
    setErrors(e) {
        if (!e) {
            this.containerErrors.classList.add("dn");
            return
        }
        this.ulErrors.innerHtml = "";
        const t = e && Object.keys(e).length > 0;
        for (const s in e)
            if (Object.hasOwnProperty.call(e, s)) {
                const i = e[s]
                  , o = document.createElement("li");
                o.innerText = `${s}: ${i}`,
                this.ulErrors.appendChild(o)
            }
        t ? this.containerErrors.classList.remove("dn") : this.containerErrors.classList.add("dn")
    }
    createErrorElement(e) {
        return `<span style='color: red;padding: 3px;border-radius: 25px;'>${e}</span>`
    }
}
const {qs: Ht} = C;
class gi extends J {
    constructor() {
        super(...arguments);
        m(this, "_handleCategoryChange", ()=>{
            a.router.redirect(`${this.baseUrl.href}${this.categories.value}`)
        }
        )
    }
    onEnter() {
        super.onEnter(),
        this.baseUrl = Ht(".categories-url", this.el),
        this.categories = Ht("#categories", this.el)
    }
    onLeave() {
        super.onLeave()
    }
    onEnterCompleted() {
        super.onEnterCompleted(),
        this.addEvents()
    }
    onLeaveCompleted() {
        super.onLeaveCompleted(),
        this.removeEvents()
    }
    async afterGl() {
        super.afterGl(),
        a.gl.blob.material.uniforms.uOpacity.value = 1,
        a.gl.blob.mouse.active = !1,
        a.gl.snapSections && (a.gl.snapSections.instances[0].keep = !0,
        a.gl.snapSections.instances[a.gl.snapSections.instances.length - 1].keep = !0,
        a.gl.snapSections.instances[0].hoverInstance.show(),
        a.gl.snapSections.instances[0].isIntersecting = !0),
        setTimeout(()=>{
            a.gl.blob.setSize(.23)
        }
        , 500)
    }
    addEvents() {
        this.categories && this.categories.addEventListener("input", this._handleCategoryChange)
    }
    removeEvents() {
        this.categories && this.categories.removeEventListener("input", this._handleCategoryChange)
    }
}
const {qs: Ze, qsa: vi} = C;
class yi extends J {
    constructor() {
        super(...arguments);
        m(this, "handleSubmitForm", e=>{
            e.preventDefault(),
            document.getElementById("file-error").innerHTML = "";
            let t = document.getElementById("apply-form");
            fetch("/", {
                method: "POST",
                body: new FormData(e.target),
                redirect: "manual"
            }).then(s=>{
                s && (s.ok ? (t.reset(),
                location.href = document.getElementById("returnUrl").value) : document.getElementById("file-error").innerHTML = this.createErrorElement(s.statusText))
            }
            ).catch(s=>{
                this.setErrors(s)
            }
            )
        }
        )
    }
    onEnter() {
        super.onEnter(),
        this.el = this.wrap.lastElementChild,
        this.form = Ze("#apply-form", this.el),
        this.containerErrors = Ze(".container-errors", this.el),
        this.ulErrors = Ze(".list-errors", this.containerErrors)
    }
    onLeave() {
        super.onLeave()
    }
    onEnterCompleted() {
        super.onEnterCompleted(),
        this.addEvents(),
        this.handleFileInput(),
        this.addFormUrl(),
        this.loadCaptcha()
    }
    onLeaveCompleted() {
        super.onLeaveCompleted(),
        this.removeEvents()
    }
    addEvents() {
        this.form.addEventListener("submit", this.handleSubmitForm)
    }
    removeEvents() {
        this.form.removeEventListener("submit", this.handleSubmitForm)
    }
    handleFileInput() {
        const e = vi(".file-input", this.el);
        e && (this.fileinputs = Array.from(e).map(t=>new ve(t)))
    }
    addFormUrl() {
        document.getElementById("page-url").value = location.href
    }
    setErrors(e) {
        if (!e) {
            this.containerErrors.classList.add("dn");
            return
        }
        this.ulErrors.innerHtml = "";
        const t = e && Object.keys(e).length > 0;
        for (const s in e)
            if (Object.hasOwnProperty.call(e, s)) {
                const i = e[s]
                  , o = document.createElement("li");
                o.innerText = `${s}: ${i}`,
                this.ulErrors.appendChild(o)
            }
        t ? this.containerErrors.classList.remove("dn") : this.containerErrors.classList.add("dn")
    }
    createErrorElement(e) {
        return `<span style='color: red;padding: 3px;border-radius: 25px;'>${e}</span>`
    }
}
const {qs: En, qsa: xi} = C;
class wi extends J {
    constructor() {
        super(...arguments);
        m(this, "_handleCategoryChange", ()=>{
            a.router.redirect(`${this.baseUrl.href}${this.categories.value}`)
        }
        );
        m(this, "_handleInput", rt(()=>{
            this._submit(this.search)
        }
        , 62.5));
        m(this, "_handleSearch", e=>{
            e.preventDefault(),
            this._submit(e.target)
        }
        )
    }
    onEnter() {
        super.onEnter()
    }
    onLeave() {
        super.onLeave()
    }
    onEnterCompleted() {
        super.onEnterCompleted(),
        this.addEvents()
    }
    onLeaveCompleted() {
        super.onLeaveCompleted(),
        this.removeEvents()
    }
    addEvents() {
        this.categories && this.categories.addEventListener("input", this._handleCategoryChange),
        this.search && this.search.addEventListener("submit", this._handleSearch),
        this.input && this.input.addEventListener("input", this._handleInput)
    }
    removeEvents() {
        this.categories && this.categories.removeEventListener("input", this._handleCategoryChange),
        this.search && this.search.removeEventListener("submit", this._handleSearch),
        this.input && this.input.removeEventListener("input", this._handleInput),
        a.gl && a.gl.clearBackground()
    }
    afterGl() {
        super.afterGl(),
        a.gl.blob.material.uniforms.uOpacity.value = r.isMobile ? 0 : 1,
        a.gl.blob.mouse.active = !0,
        a.gl.setBackground(),
        setTimeout(()=>{
            a.gl.blob.setSize(.23)
        }
        , 500)
    }
    _submit(e) {
        this.controller && this.controller.abort(),
        this.controller = new AbortController;
        const t = new URLSearchParams(new FormData(e))
          , s = xi("[data-uid]", this.el);
        if (t.get("q")) {
            const i = e.action + "?" + t.toString()
              , o = {
                method: "get",
                signal: this.controller.signal
            };
            fetch(i, o).then(c=>c.json()).then(c=>{
                const f = new Set(c);
                for (const d of s)
                    f.has(d.dataset.uid) ? d.style.display = "block" : d.style.display = "none";
                this.messageInner.innerText = t.get("q"),
                this.message.style.display = c.length ? "none" : "block",
                u.emit("resize"),
                x.emit("FORCE_RESIZE")
            }
            ).catch(c=>{
                if (c.name !== "AbortError")
                    throw c
            }
            )
        } else {
            this.message.style.display = "none";
            for (const i of s)
                i.style.display = "block";
            u.emit("resize")
        }
    }
}
const {qs: Gt} = C;
class bi extends J {
    async onEnter() {
        super.onEnter(),
        this.leaving = !1,
        this.resize = this.resize.bind(this),
        await U(300),
        !this.leaving && (this.snapPoint = Gt("[data-gl-case]"),
        this.heroCase = Gt(".hero-case"),
        await a.loaded,
        !this.leaving && (a.gl.blob.material.uniforms.uOpacity.value = 1,
        a.gl.blob.animating || a.gl.blob.snapToPoint(this.snapPoint),
        a.gl.blob.addScrollEvents(),
        this.coverImage = a.gl.hoverImages.get(this.heroCase),
        a.gl.hoverImages.instances.length === 1 && this.coverImage.show(),
        this.coverImage.hover = !1,
        u.on("resize:on-reset", this.resize)))
    }
    onEnterCompleted() {
        super.onEnterCompleted()
    }
    async afterGl() {
        await a.loaded,
        a.gl.blob.material.uniforms.uOpacity.value = 1
    }
    onLeave() {
        super.onLeave(),
        this.leaving = !0,
        u.on("resize:on-reset", this.resize),
        a.gl.blob.removeScrollEvents()
    }
    resize() {
        a.gl.blob.snapToPoint(this.snapPoint)
    }
}
const {qs: Y} = C;
class Si extends J {
    constructor() {
        super(...arguments);
        m(this, "validateEmail", e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
        m(this, "handleSubmitForm", e=>{
            e.preventDefault(),
            document.getElementById("file-error").innerHTML = "";
            let t = document.getElementById("blog-form")
              , s = document.getElementById("upload-file")
              , i = s.dataset.maxSize;
            if (s.files.length && s.files[0].size > i)
                return document.getElementById("file-error").innerHTML = "<span style='color: red;padding: 3px;border-radius: 25px;'>File size is too big. Max size is 8 MB.</span>",
                !1;
            fetch("/", {
                method: "POST",
                body: new FormData(e.target),
                redirect: "manual"
            }).then(o=>{
                o && (o.ok ? (t.reset(),
                location.href = document.getElementById("returnUrl").value) : document.getElementById("file-error").innerHTML = "<span style='color: red;padding: 3px;border-radius: 25px;'>" + o.statusText + "</span>")
            }
            ).catch(o=>{
                console.error("err", o),
                this.setErrors(o)
            }
            )
        }
        )
    }
    addFormUrl() {
        try {
            document.getElementById("blog-form-url").value = location.href
        } catch (e) {
            console.debug(e)
        }
    }
    onEnter() {
        try {
            super.onEnter(),
            this.heroImage = Y(".bp-hero__top__img", this.el),
            this.heroText = Y(".bp-hero__text", this.el),
            this.heroBg = Y(".bp-hero__figure", this.el),
            h.fromTo([this.heroImage, this.heroBg], {
                scale: 1.25,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 2,
                ease: "expo.out"
            }),
            h.fromTo(this.heroText, {
                scale: 1.15,
                opacity: 0
            }, {
                scale: .99,
                opacity: 1,
                duration: 2.5,
                ease: "expo.out"
            }),
            this.el = this.wrap.lastElementChild,
            this.form = Y("#blog-form", this.el),
            this.selector = Y(".inquiry-selector", this.el),
            this.containerErrors = Y(".container-errors", this.el),
            this.ulErrors = Y(".list-errors", this.containerErrors),
            this.addFormUrl()
        } catch (e) {
            console.debug(e)
        }
    }
    handleInquirySelector() {
        this.selector && this.transitionUnderline(Y("label:first-child input", this.selector))
    }
    handleFileInput() {
        const e = Y(".file-input", this.el);
        e && (this.fileinput = new ve(e))
    }
    loadSumoScripts() {
        let e = {};
        var t = document.getElementsByClassName("sumo-data");
        for (let i of t)
            if (i && i.dataset && i.dataset.sumo) {
                let o = i.dataset.sumo;
                if (!e[o]) {
                    e[o] = !0;
                    var s = document.createElement("script");
                    s.type = "text/javascript",
                    s.async = !0,
                    s.src = o,
                    s.onload = function() {
                        console.info("loaded", o)
                    }
                    ,
                    document.head.appendChild(s)
                }
            }
    }
    async onEnterCompleted() {
        try {
            super.onEnterCompleted(),
            this.addEvents(),
            await U(1e3),
            this.handleFileInput(),
            a.gl.blob && a.gl.blob.setZoom(),
            this.loadCaptcha()
        } catch (e) {
            console.debug(e)
        }
    }
    onLeaveCompleted() {
        try {
            super.onLeaveCompleted(),
            this.removeEvents()
        } catch (e) {
            console.debug(e)
        }
    }
    addEvents() {
        this.selector && this.selector.addEventListener("input", this.switchContactType),
        this.form.addEventListener("submit", this.handleSubmitForm)
    }
    removeEvents() {
        this.selector && this.selector.removeEventListener("input", this.switchContactType),
        this.form.removeEventListener("submit", this.handleSubmitForm)
    }
    afterGl() {
        const e = a.gl.blob;
        e && (e.material.uniforms.uOpacity.value = 0,
        e.setSize(),
        setTimeout(()=>{
            a.gl.active = !1
        }
        , 1e3)),
        this.gl = Y("#gl > canvas"),
        this.gl.style.opacity = 0
    }
    onLeave() {
        this.gl = Y("#gl > canvas"),
        this.gl.style.opacity = "",
        super.onLeave()
    }
    setErrors(e) {
        if (!e) {
            this.containerErrors.classList.add("dn");
            return
        }
        this.ulErrors.innerHtml = "";
        const t = e && Object.keys(e).length > 0;
        for (const s in e)
            if (Object.hasOwnProperty.call(e, s)) {
                const i = e[s]
                  , o = document.createElement("li");
                o.innerText = `${s}: ${i}`,
                this.ulErrors.appendChild(o)
            }
        t ? this.containerErrors.classList.remove("dn") : this.containerErrors.classList.add("dn")
    }
}
const {qs: Xe} = C;
class Ei extends J {
    constructor() {
        super(...arguments);
        m(this, "validateEmail", e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
        m(this, "handleSubmitForm", e=>{
            grecaptcha.execute(),
            e.preventDefault(),
            document.getElementById("file-error").innerHTML = "";
            let t = document.getElementById("blog-form")
              , s = document.getElementById("upload-file")
              , i = s.dataset.maxSize;
            if (s.files.length && s.files[0].size > i)
                return document.getElementById("file-error").innerHTML = "<span style='color: red;padding: 3px;border-radius: 25px;'>File size is too big. Max size is 8 MB.</span>",
                !1;
            fetch("/", {
                method: "POST",
                body: new FormData(e.target),
                redirect: "manual"
            }).then(o=>{
                o && (o.ok ? (t.reset(),
                location.href = document.getElementById("returnUrl").value) : document.getElementById("file-error").innerHTML = "<span style='color: red;padding: 3px;border-radius: 25px;'>" + o.statusText + "</span>")
            }
            ).catch(o=>{
                this.setErrors(o)
            }
            )
        }
        )
    }
    onEnter() {
        try {
            super.onEnter(),
            this.el = this.wrap.lastElementChild,
            this.careerContactForm = Xe("#blog-form", this.el),
            this.selector = Xe(".inquiry-selector", this.el)
        } catch (e) {
            console.debug(e)
        }
    }
    async onEnterCompleted() {
        try {
            super.onEnterCompleted(),
            this.addEvents(),
            this.selector && this.handleInquirySelector(),
            this.handleFileInput(),
            this.addFormUrl(),
            this.loadCaptcha()
        } catch (e) {
            console.debug(e)
        }
    }
    handleFileInput() {
        const e = Xe(".file-input", this.el);
        e && (this.fileinput = new ve(e))
    }
    onLeaveCompleted() {
        try {
            super.onLeaveCompleted(),
            this.removeEvents()
        } catch (e) {
            console.debug(e)
        }
    }
    addEvents() {
        this.selector && this.selector.addEventListener("input", this.switchContactType),
        this.careerContactForm.addEventListener("submit", this.handleSubmitForm)
    }
    removeEvents() {
        this.selector && this.selector.removeEventListener("input", this.switchContactType),
        this.careerContactForm.removeEventListener("submit", this.handleSubmitForm)
    }
    addFormUrl() {
        try {
            document.getElementById("blog-form-url").value = location.href
        } catch (e) {
            console.debug(e)
        }
    }
    onLeave() {
        super.onLeave()
    }
}
const {qs: Qe} = C;
class zi extends J {
    constructor() {
        super(...arguments);
        m(this, "validateEmail", e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
        m(this, "handleSubmitForm", e=>{
            e.preventDefault(),
            document.getElementById("file-error").innerHTML = "";
            let t = document.getElementById("blog-form")
              , s = document.getElementById("upload-file")
              , i = s.dataset.maxSize;
            if (s.files.length && s.files[0].size > i)
                return document.getElementById("file-error").innerHTML = "<span style='color: red;padding: 3px;border-radius: 25px;'>File size is too big. Max size is 8 MB.</span>",
                !1;
            fetch("/", {
                method: "POST",
                body: new FormData(e.target),
                redirect: "manual"
            }).then(o=>{
                o && (o.ok ? (t.reset(),
                location.href = document.getElementById("returnUrl").value) : document.getElementById("file-error").innerHTML = "<span style='color: red;padding: 3px;border-radius: 25px;'>" + o.statusText + "</span>")
            }
            ).catch(o=>{
                this.setErrors(o)
            }
            )
        }
        )
    }
    onEnter() {
        try {
            super.onEnter(),
            this.el = this.wrap.lastElementChild,
            this.capabilitiesContactForm = Qe("#blog-form", this.el),
            this.selector = Qe(".inquiry-selector", this.el)
        } catch (e) {
            console.error(e)
        }
    }
    getParameterByName(e, t) {
        e = e.replace(/[\[\]]/g, "\\$&");
        var s = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)")
          , i = s.exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }
    async onEnterCompleted() {
        try {
            super.onEnterCompleted(),
            this.addEvents(),
            this.selector && this.handleInquirySelector(),
            this.handleFileInput(),
            this.addFormUrl(),
            this.loadCaptcha(),
            this.replaceInnerHTMLText()
        } catch (e) {
            console.error(e)
        }
    }
    replaceInnerHTMLText() {
        let e = this.getParameterByName("dt", window.location.href)
          , t = document.getElementById("defaultText").innerHTML;
        e = e || t;
        const s = document.getElementsByClassName("dp");
        for (const i in s)
            s[i].innerHTML && (s[i].innerHTML = s[i].innerHTML.replace("{{default_text}}", e));
        if (t) {
            const i = document.getElementsByClassName("dp-title");
            let o = "";
            e.split(" ").forEach(c=>{
                c && (o += `<span class="db lhfix3 oh txt--uc">${c}</span>`)
            }
            ),
            i[0].innerHTML = o
        }
    }
    handleFileInput() {
        const e = Qe(".file-input", this.el);
        e && (this.fileinput = new ve(e))
    }
    onLeaveCompleted() {
        try {
            super.onLeaveCompleted(),
            this.removeEvents()
        } catch (e) {
            console.error(e)
        }
    }
    addEvents() {
        this.selector && this.selector.addEventListener("input", this.switchContactType),
        this.capabilitiesContactForm.addEventListener("submit", this.handleSubmitForm)
    }
    removeEvents() {
        this.selector && this.selector.removeEventListener("input", this.switchContactType),
        this.capabilitiesContactForm.removeEventListener("submit", this.handleSubmitForm)
    }
    addFormUrl() {
        try {
            document.getElementById("blog-form-url").value = location.href
        } catch (e) {
            console.error(e)
        }
    }
    onLeave() {
        super.onLeave()
    }
}
const Ci = new Se.Core({
    renderers: {
        default: J,
        capabilities: zi,
        home: fi,
        contact: pi,
        blog: gi,
        apply: yi,
        cases: wi,
        case: bi,
        "blog-single": Si,
        career: Ei
    },
    transitions: {
        default: Ne,
        contextual: {
            menu: Us,
            case: Ns,
            zoom: js
        }
    }
});
"ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch;
const Ti = ()=>{
    const n = window.matchMedia("(pointer:coarse)");
    return n && n.matches
}
;
navigator.userAgent.indexOf("Firefox") > -1;
!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
const Ii = /constructor/i.test(window.HTMLElement) || function(n) {
    return n.toString() === "[object SafariRemoteNotification]"
}(!window.safari || typeof safari != "undefined" && safari.pushNotification);
!!window.chrome && (!!window.chrome.webstore || window.chrome.runtime);
class Ai extends v {
    constructor(e) {
        super(e.clientWidth, e.clientHeight);
        this.container = e,
        this.resize = this.resize.bind(this),
        this.onMouseMove = this.onMouseMove.bind(this),
        this.onWheel = this.onWheel.bind(this),
        window.addEventListener("resize", this.resize, {
            passive: !0
        }),
        window.addEventListener("mousemove", this.onMouseMove, {
            passive: !0
        }),
        window.addEventListener("wheel", this.onWheel, {
            passive: !0
        }),
        x.on("FORCE_RESIZE", this.resize),
        this.mouse = new v(this.container.clientWidth / 2,this.container.clientHeight / 2),
        this.dpr = Ii && !Ti() ? .5 : 1,
        this.resize()
    }
    onWheel() {
        x.emit("GL_MOUSEMOVE", {
            x: this.mouse.x,
            y: this.mouse.y
        })
    }
    onMouseMove({clientX: e, clientY: t}) {
        this.mouse.x = e,
        this.mouse.y = t,
        x.emit("GL_MOUSEMOVE", {
            x: e,
            y: t
        })
    }
    async resize() {
        clearTimeout(this.timeOutResize),
        await B();
        const {clientWidth: e, clientHeight: t} = this.container;
        this.set(e, t),
        x.emit("GL_RESIZE", {
            w: e,
            h: t,
            dpr: this.dpr
        }),
        this.timeOutResize = setTimeout(()=>{
            x.emit("GL_RESIZE", {
                w: e,
                h: t,
                dpr: this.dpr
            })
        }
        , 400)
    }
}
function Li(n) {
    return new Promise((e,t)=>{
        var s = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        }
          , i = new Image;
        i.onload = function() {
            i.width > 0 && i.height > 0 ? e(n) : t(n)
        }
        ,
        i.onerror = function() {
            t(n)
        }
        ,
        i.src = "data:image/webp;base64," + s[n]
    }
    )
}
class Pi {
    constructor() {
        this.items = 0,
        this.isLoading = !1,
        this.init()
    }
    add(e, t) {
        return this.items++,
        new Promise((s,i)=>{
            const o = new Image;
            o.src = t,
            _e.itemStart(t),
            f();
            function c() {
                d(),
                _e.itemEnd(t),
                s()
            }
            function f() {
                o.addEventListener("load", c, !1),
                o.addEventListener("error", c, !1)
            }
            function d() {
                o.removeEventListener("load", c, !1),
                o.removeEventListener("error", c, !1)
            }
        }
        )
    }
    async init() {
        this.isLoaded = !1,
        this.progress = 0,
        await U(200),
        _e.onProgress = (e,t,s)=>{
            this.isLoaded || (this.isLoading = !0,
            setTimeout(()=>{
                const i = Math.floor(t / s * 100);
                i > this.progress && (this.progress = i),
                x.emit("LOADPROGRESS", this.progress),
                this.progress === 100 && (x.emit("LOADPROGRESS", 100),
                setTimeout(()=>{
                    this.isLoaded = !0,
                    x.emit("GL_LOADED")
                }
                , 2e3))
            }
            , 2 * t))
        }
        ,
        await U(0),
        this.isLoading || x.emit("GL_LOADED")
    }
}
const Je = 3500;
class Ke extends is {
    constructor() {
        super();
        this.position.set(0, 0, Je),
        this.distance = Je,
        this.near = .01,
        this.far = 4e3
    }
    calcFov(e, t) {
        return 2 * Math.atan(e / t / (2 * Je)) * (180 / Math.PI)
    }
    resize(e, t) {
        this.aspect = e / t,
        this.fov = this.calcFov(e, e / t),
        this.updateProjectionMatrix()
    }
}
class we extends ht {
    constructor() {
        super()
    }
}
class Ut extends ns {
    constructor(e) {
        super({
            alpha: !0,
            antialias: !0
        });
        e.appendChild(this.domElement),
        this.setSize(r.layout.w, r.layout.h),
        this.setPixelRatio(r.layout.dpr)
    }
    resize(e, t) {
        this.setSize(e, t)
    }
}
var Mi = `#define GLSLIFY 1
uniform sampler2D imgTexture;uniform vec2 imgSize;uniform vec2 containerSize;uniform float scale;uniform float opacity;varying vec2 vUv;vec4 bgCover(sampler2D tex,vec2 imgSize,vec2 ouv,vec2 containerSize){vec2 s=containerSize;vec2 i=imgSize;float rs=s.x/s.y;float ri=i.x/i.y;vec2 new=rs<ri ? vec2(i.x*s.y/i.y,s.y): vec2(s.x,i.y*s.x/i.x);vec2 newOffset=(rs<ri ? vec2((new.x-s.x)/2.0,0.0): vec2(0.0,(new.y-s.y)/2.0))/new;vec2 uv=ouv*s/new+newOffset;return texture2D(tex,uv);}void main(){vec2 coords=vUv;coords-=0.5;coords/=scale;coords+=0.5;vec4 img=bgCover(imgTexture,imgSize,coords,containerSize);if(opacity<0.01){discard;}gl_FragColor=vec4(img.rgb,opacity);}`
  , _i = `precision highp float;
#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=uv;vec3 p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`;
class be extends Fe {
    constructor(e, t) {
        super(e, t);
        this.init()
    }
    init() {
        this.offset = new v,
        this.size = 1
    }
    calculateUnitSize(e=0) {
        const t = r.gl.camera.fov * Math.PI / 180
          , s = 2 * Math.tan(t / 2) * e;
        return {
            width: s * r.gl.camera.aspect,
            height: s
        }
    }
    updateSize({width: e, height: t}) {
        this.camUnit = this.calculateUnitSize(r.gl.camera.position.z - this.position.z);
        const s = e / r.layout.x
          , i = t / r.layout.y;
        this.scale.x = this.camUnit.width * s * this.size,
        this.scale.y = this.camUnit.height * i * this.size
    }
    async resize(e, t) {
        let s = this.el.getBoundingClientRect();
        await B(),
        this.updateSize(s),
        this.calculatePosition(e, t, s)
    }
    calculatePosition(e, t, {width: s, height: i, top: o, left: c}) {
        this.top = o + r.scroll.offsetTop,
        this.offset.set(-e / 2 + s / 2 + c, t / 2 - i / 2 - this.top)
    }
    update(e=r.scroll.offsetTop) {
        this.position.y = this.offset.y + e,
        this.position.x = this.offset.x
    }
}
class Fi extends be {
    constructor(e, t) {
        const {clientWidth: s, clientHeight: i} = e
          , o = new fe(1,1,1,1)
          , c = new Ee({
            side: ke,
            uniforms: {
                opacity: {
                    value: 0
                },
                scale: {
                    value: 1
                },
                imgTexture: {
                    value: null
                },
                containerSize: {
                    value: new v(s,i)
                },
                imgSize: {
                    value: new v(1,1)
                }
            },
            vertexShader: _i,
            fragmentShader: Mi,
            transparent: !0
        });
        super(o, c);
        this.name = t,
        this.el = e,
        this.animateOnPageLoad = this.el.dataset.glOpacity === void 0,
        this.bounds = new v,
        this.init()
    }
    async init() {
        super.init(),
        this.resize = this.resize.bind(this),
        this.load = this.load.bind(this),
        await B(),
        x.emit("FORCE_RESIZE")
    }
    animateOut() {
        h.to(this.material.uniforms.opacity, {
            value: 0,
            duration: .5,
            ease: "none"
        })
    }
    animateIn() {
        this.animateOnPageLoad && h.to(this.material.uniforms.opacity, {
            value: 1,
            duration: .5,
            ease: "none"
        })
    }
    updatePosition(e) {
        let t = e.getBoundingClientRect();
        this.updateSize(t),
        this.calculatePosition(r.layout.x, r.layout.y, t)
    }
    update(e=r.scroll.offsetTop) {
        this.updatePosition(this.el),
        this.position.y = this.offset.y + e,
        this.position.x = this.offset.x
    }
    load(e) {
        const {naturalHeight: t, naturalWidth: s} = e.image;
        this.material.uniforms.imgTexture.value = e,
        this.material.uniforms.imgSize.value = new v(s,t)
    }
}
const ki = new os;
function et(n) {
    return new Promise(e=>{
        ki.load(n, t=>{
            t.needsUpdate = !0,
            e(t)
        }
        )
    }
    )
}
class Bi extends rs {
    async init() {
        this.instances = []
    }
    async addImages(e=[], t) {
        this.promises = [],
        e.forEach((s,i)=>{
            const o = new Fi(s,`IMG ${i}`);
            this.add(o),
            this.promises.push(et(s.dataset.glImg)),
            this.instances.push(o)
        }
        ),
        this.loaded = !0,
        this.resize(),
        Promise.all(this.promises).then(s=>{
            setTimeout(()=>{
                this.load(s),
                this.animateIn(),
                x.emit("GL_IMAGES_IN")
            }
            , 300)
        }
        )
    }
    async load(e) {
        this.instances.forEach((t,s)=>{
            t.load(e[s])
        }
        )
    }
    animateIn() {
        this.instances.forEach(e=>{
            e.animateIn()
        }
        )
    }
    animateOut() {
        this.instances.forEach(e=>{
            e.animateOut()
        }
        )
    }
    get(e) {
        let t;
        return t
    }
    destroy() {
        this.instances.forEach((e,t)=>{
            this.remove(this.instances[t])
        }
        ),
        this.instances = []
    }
    resize(e, t) {
        for (let s = 0; s < this.instances.length; s++)
            this.instances[s].resize(e, t)
    }
    update() {
        if (!!this.loaded)
            for (let e = 0; e < this.instances.length; e++)
                this.instances[e].update()
    }
}
function Wt(n) {
    return parseInt(n, 10)
}
function Ri({font: n, text: e, width: t=1 / 0, align: s="left", size: i=1, letterSpacing: o=0, lineHeight: c=1.4, wordSpacing: f=0, wordBreak: d=!1}) {
    const z = this;
    let G, W, K, $;
    const I = /\n/
      , k = /\s/;
    T(),
    N();
    function T() {
        G = {},
        n.chars.forEach(E=>G[E.char] = E)
    }
    function N() {
        n.common.lineHeight,
        K = n.common.base,
        $ = i / K;
        let b = e.replace(/[ \n]/g, "").length;
        W = {
            position: new Float32Array(b * 4 * 3),
            uv: new Float32Array(b * 4 * 2),
            id: new Float32Array(b * 4),
            index: new Uint16Array(b * 6)
        };
        for (let p = 0; p < b; p++)
            W.id[p] = p,
            W.index.set([p * 4, p * 4 + 2, p * 4 + 1, p * 4 + 1, p * 4 + 2, p * 4 + 3], p * 6);
        ee()
    }
    function ee() {
        const E = [];
        let b = 0
          , p = 0
          , y = 0
          , S = L();
        function L() {
            const A = {
                width: 0,
                glyphs: []
            };
            return E.push(A),
            p = b,
            y = 0,
            A
        }
        let q = 100
          , V = 0;
        for (; b < e.length && V < q; ) {
            V++;
            const A = e[b];
            if (!S.width && k.test(A)) {
                b++,
                p = b,
                y = 0;
                continue
            }
            if (I.test(A)) {
                b++,
                S = L();
                continue
            }
            const g = G[A] || G[" "];
            if (S.glyphs.length) {
                const F = S.glyphs[S.glyphs.length - 1][0];
                let l = te(g.id, F.id) * $;
                S.width += l,
                y += l
            }
            S.glyphs.push([g, S.width]);
            let P = 0;
            if (k.test(A) ? (p = b,
            y = 0,
            P += f * i) : P += o * i,
            P += g.xadvance * $,
            S.width += P,
            y += P,
            S.width > t) {
                if (d && S.glyphs.length > 1) {
                    S.width -= P,
                    S.glyphs.pop(),
                    S = L();
                    continue
                } else if (!d && y !== S.width) {
                    let F = b - p + 1;
                    S.glyphs.splice(-F, F),
                    b = p,
                    S.width -= y,
                    S = L();
                    continue
                }
            }
            b++,
            V = 0
        }
        S.width || E.pop(),
        _(E)
    }
    function _(E) {
        const b = n.common.scaleW
          , p = n.common.scaleH;
        let y = .07 * i
          , S = 0;
        for (let L = 0; L < E.length; L++) {
            let q = E[L];
            for (let V = 0; V < q.glyphs.length; V++) {
                const A = q.glyphs[V][0];
                let g = q.glyphs[V][1];
                if (s === "center" ? g -= q.width * .5 : s === "right" && (g -= q.width),
                k.test(A.char))
                    continue;
                g += A.xoffset * $,
                y -= A.yoffset * $;
                let P = A.width * $
                  , F = A.height * $;
                W.position.set([g, y - F, 0, g, y, 0, g + P, y - F, 0, g + P, y, 0], S * 4 * 3);
                let l = A.x / b
                  , se = A.width / b
                  , O = 1 - A.y / p
                  , Z = A.height / p;
                W.uv.set([l, O - Z, l, O, l + se, O - Z, l + se, O], S * 4 * 2),
                y += A.yoffset * $,
                S++
            }
            y -= i * c
        }
        z.buffers = W,
        z.numLines = E.length,
        z.height = z.numLines * i * c,
        z.width = Math.max(...E.map(L=>L.width))
    }
    function te(E, b) {
        for (let p = 0; p < n.kernings.length; p++) {
            let y = n.kernings[p];
            if (!(y.first < E) && !(y.second < b))
                return y.first > E || y.first === E && y.second > b ? 0 : y.amount
        }
        return 0
    }
    this.resize = function(E) {
        ({width: t} = E),
        ee()
    }
    ,
    this.update = function(E) {
        ({text: e} = E),
        N()
    }
}
var Nt = `#define GLSLIFY 1
attribute vec2 uv;attribute vec3 position;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;varying vec2 vUv;void main(){vUv=uv;vec3 vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(vPosition,1.0);}`
  , Vt = `#define GLSLIFY 1
uniform sampler2D tMap;uniform float fReveal;uniform float uOpacity;uniform vec3 uColor;varying vec2 vUv;void main(){vec2 newUv=vUv;newUv.y+=fReveal;vec3 tex=texture2D(tMap,newUv).rgb;float signedDist=max(min(tex.r,tex.g),min(max(tex.r,tex.g),tex.b))-0.5;float d=fwidth(signedDist);float alpha=smoothstep(-d,d,signedDist);if(alpha<0.1)discard;gl_FragColor.rgb=uColor;gl_FragColor.a=alpha*uOpacity;}`
  , jt = `#define GLSLIFY 1
attribute vec3 position;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`
  , Yt = `#define GLSLIFY 1
uniform sampler2D tRender;uniform vec2 uResolution;void main(){vec2 screenUv=gl_FragCoord.xy/uResolution.xy;vec4 renderTexture=texture2D(tRender,screenUv.xy);gl_FragColor.rgb=renderTexture.rgb;gl_FragColor.a=1.0;}`;
class Di extends be {
    constructor(e) {
        super();
        this.elInner = e.querySelector("[data-gl-text-inner]"),
        this.el = this.elInner === null ? e : this.elInner,
        this.elWrap = e,
        this.el.style.opacity = 0,
        this.elWrap.style.opacity = 0,
        this.animateIn = this.animateIn.bind(this),
        this.loaded = !1,
        this.debug = e.dataset.glDebug !== void 0,
        this.offset = new v,
        this.offsetWrap = new v,
        this.bounds = new v,
        this.fix = new v,
        this.renderTarget = new ze(r.layout.x,r.layout.y),
        this.scene = new ht,
        this.calculateStyles(this.el),
        this.textCreated = new Promise(t=>{
            this.resolveTextCreated = t
        }
        ),
        this.promise = new Promise(t=>{
            this.resolve = t
        }
        )
    }
    async init() {
        await B(),
        this.addEvents(),
        r.fonts[`${this.fontFile}`] === void 0 ? (await this.loadFont(),
        this.create()) : this.create()
    }
    addEvents() {}
    animateIn() {
        h.to([this.el, this.elWrap], {
            opacity: 1,
            duration: .5,
            ease: "none"
        }),
        h.to(this.material.uniforms.uOpacity, {
            value: 1,
            duration: .5,
            ease: "none"
        })
    }
    animateOut() {
        h.to(this.el, {
            opacity: 0,
            duration: .5,
            ease: "none"
        }),
        h.to(this.material.uniforms.uOpacity, {
            value: 0,
            duration: .5,
            ease: "none"
        })
    }
    destroy() {
        x.off("GL_LOADED", this.onLoad),
        r.gl.rtScene.remove(this.textPlaneMesh),
        this.scene.remove(this.mesh)
    }
    async loadFont() {
        const e = r.webp ? "webp" : "png"
          , t = await fetch(`/static/fonts/${this.fontFile}.json`)
          , s = await et(`/static/fonts/${this.fontFile}.${e}`);
        r.fonts[`${this.fontFile}`] === void 0 && (r.fonts[`${this.fontFile}`] = {
            font: await t.json(),
            texture: s
        })
    }
    async create() {
        this.font = r.fonts[`${this.fontFile}`].font,
        this.texture = r.fonts[`${this.fontFile}`].texture,
        this.createText(this.font),
        await this.textCreated,
        this.createGeometry(),
        this.createMaterial(),
        this.createMesh(),
        this.loaded = !0,
        this.mesh.position.y = this.text.height * .5,
        r.gl.rtScene.add(this.textPlaneMesh),
        this.scene.add(this.mesh),
        await B(),
        this.resolve()
    }
    calculateStyles(e) {
        const t = getComputedStyle(e);
        let {width: s, height: i} = e.getBoundingClientRect();
        this.params = {
            width: s,
            height: i,
            fontFamily: t.getPropertyValue("font-family").replace(/["]+/g, ""),
            textColor: t.getPropertyValue("color"),
            textAlign: t.getPropertyValue("text-align"),
            fontWeight: t.getPropertyValue("font-weight"),
            letterSpacing: t.getPropertyValue("letter-spacing") === "normal" ? 0 : t.getPropertyValue("letter-spacing"),
            fontSize: Wt(t.getPropertyValue("font-size")),
            lineHeight: Wt(t.getPropertyValue("line-height")),
            baseHeight: 0
        },
        this.params.fontWeight === "normal" && (this.params.fontWeight = 400),
        this.params.fontFamily === "facto" && (this.params.letterSpacing = -.025),
		this.params.fontFamily === "factozh" && (this.params.letterSpacing = -.025),
        this.params.fontFamily === "factoblack" && (this.params.fontSize *= .805),
        this.params.fontFamily === "factoblack" && (this.fix.y = r.layout.x < 1200 ? 20 : 31),
        this.params.fontFamily === "facto" && (this.fix.y = e.dataset.glTextYFix === void 0 ? 4 : e.dataset.glTextYFix),
		this.params.fontFamily === "factozh" && (this.fix.y = e.dataset.glTextYFix === void 0 ? 4 : e.dataset.glTextYFix),
        this.params.fontFamily === "factoblack" && (this.params.baseHeight = 243),
        this.params.fontFamily === "facto" && (this.params.baseHeight = 343),
		this.params.fontFamily === "factozh" && (this.params.baseHeight = 343),
        this.fontFile = `${this.params.fontFamily}-${this.params.fontWeight}`
    }
    async createText(e, t=!0) {
        const s = {
            font: e,
            text: this.el.innerText,
            width: this.params.width,
            align: this.params.textAlign,
            size: this.params.fontSize,
            lineHeight: this.params.lineHeight / this.params.fontSize,
            letterSpacing: this.params.letterSpacing,
			wordBreak: 'break-all'
        }
          , i = this;
        i.text = new Ri(s),
        i.resolveTextCreated()
    }
    createMaterial() {
        const e = `
            ` + Nt
          , t = `
        #extension GL_OES_standard_derivatives : enable
        precision highp float;
    ` + Vt
          , s = `#version 300 es
        #define attribute in
        #define varying out
    ` + Nt
          , i = `#version 300 es
        precision highp float;
        #define varying in
        #define texture2D texture
        #define gl_FragColor FragColor
        out vec4 FragColor;
    ` + Vt
          , o = `
            ` + jt
          , c = `#version 300 es
        #define attribute in
        #define varying out
    ` + jt
          , f = `
        #extension GL_OES_standard_derivatives : enable
        precision highp float;
    ` + Yt
          , d = `#version 300 es
        precision highp float;
        #define varying in
        #define texture2D texture
        #define gl_FragColor FragColor
        out vec4 FragColor;
    ` + Yt;
        this.material = new ct({
            side: ke,
            vertexShader: r.webgl2 ? s : e,
            fragmentShader: r.webgl2 ? i : t,
            uniforms: {
                tMap: {
                    value: this.texture
                },
                fReveal: {
                    value: 0
                },
                uOpacity: {
                    value: 0
                },
                uLimits: {
                    value: new v
                },
                uBounds: {
                    value: new as(this.params.baseHeight / 2048,this.params.baseHeight / 2048)
                },
                uColor: {
                    value: new ls(this.params.textColor)
                }
            },
            transparent: !0
        }),
        this.textPlaneMaterial = new ct({
            vertexShader: r.webgl2 ? c : o,
            fragmentShader: r.webgl2 ? d : f,
            uniforms: {
                tRender: {
                    value: this.renderTarget.texture
                },
                uBounds: {
                    value: new v
                },
                uPosition: {
                    value: new v
                },
                uResolution: {
                    value: new v
                }
            },
            transparent: !0
        }),
        this.params.fontFamily === "facto" && this.material.uniforms.uLimits.value.set(.006, .069),
		this.params.fontFamily === "factozh" && this.material.uniforms.uLimits.value.set(.006, .069),
        this.params.fontFamily === "factoblack" && this.material.uniforms.uLimits.value.set(.0135, .069)
    }
    render() {
        r.gl.renderer.setRenderTarget(this.renderTarget),
        r.gl.renderer.render(this.scene, r.gl.camera),
        r.gl.renderer.setRenderTarget(null)
    }
    updateGeometry() {
        this.geometry.setAttribute("position", new Be(this.text.buffers.position,3)),
        this.geometry.setAttribute("uv", new Be(this.text.buffers.uv,2)),
        this.geometry.setAttribute("id", new Be(this.text.buffers.id,1)),
        this.geometry.setIndex(new hs(this.text.buffers.index,1))
    }
    createGeometry() {
        this.geometry = new cs,
        this.textPlane = new fe(1,1,1,1),
        this.updateGeometry()
    }
    updatePosition(e) {
        const {clientWidth: t, clientHeight: s} = e;
        this.calculatePosition(e, t, s),
        this.calculateStyles(this.el)
    }
    async resize(e) {
        if (!this.loaded)
            return;
        this.updatePosition(e);
        let t = this.elWrap.getBoundingClientRect();
        await B(),
        this.updateSize(t);
        const {x: s, y: i, dpr: o} = r.layout;
        this.renderTarget.setSize(s * o, i * o, !1),
        this.text && (this.createText(this.font, !1),
        this.updateGeometry()),
        this.textPlaneMaterial.uniforms.uBounds.value.set(t.width * o, t.height * o),
        this.textPlaneMaterial.uniforms.uPosition.value.set(t.left * o, t.top * o),
        this.textPlaneMaterial.uniforms.uResolution.value.set(s * o, i * o)
    }
    calculatePosition(e, t, s) {
        let {top: i, left: o} = this.elWrap.getBoundingClientRect()
          , {top: c, left: f} = e.getBoundingClientRect();
        const {x: d, y: z} = r.layout;
        this.top = c + r.scroll.offsetTop,
        this.topWrap = i + r.scroll.offsetTop,
        this.bounds.set(t, s),
        this.offset.set(-d / 2 + t / 2 + f, z / 2 - s / 2 - this.top),
        this.offsetWrap.set(-d / 2 + t / 2 + o, z / 2 - s / 2 - this.topWrap)
    }
    updateSize({width: e, height: t}) {
        this.camUnit = this.calculateUnitSize(r.gl.camera.position.z - this.position.z);
        const s = e / r.layout.x
          , i = t / r.layout.y;
        this.textPlaneMesh.scale.x = this.camUnit.width * s,
        this.textPlaneMesh.scale.y = this.camUnit.height * i
    }
    createMesh() {
        this.mesh = new Fe(this.geometry,this.material),
        this.textPlaneMesh = new Fe(this.textPlane,this.textPlaneMaterial)
    }
    update(e) {
        !this.loaded || (this.updatePosition(this.el),
        this.mesh.position.set(this.offset.x - this.bounds.x / 2 + this.fix.x, this.offset.y + e + this.bounds.y / 2 + this.fix.y, 1),
        this.textPlaneMesh.position.y = this.offsetWrap.y + e,
        this.textPlaneMesh.position.x = this.offsetWrap.x)
    }
}
class Oi {
    constructor(e) {
        this.instance = e,
        this.gl = e.renderer.gl,
        this.scene = e.scene,
        this.instances = []
    }
    async add(e=[], t) {
        this.promises = [],
        e.forEach((c,f)=>{
            const d = new Di(c);
            this.promises.push(d.promise),
            this.instances.push(d)
        }
        ),
        this.loaded = !0,
        this.resize();
        const {x: s, y: i, dpr: o} = r.layout;
        Promise.all(this.promises).then(c=>{
            setTimeout(()=>{
                this.resize(s, i, o),
                this.animateIn(),
                x.emit("GL_TEXT_IN")
            }
            , 300)
        }
        )
    }
    destroy() {
        this.instances.forEach(e=>{
            e.destroy()
        }
        ),
        this.instances = []
    }
    animateIn() {
        this.instances.forEach(e=>{
            e.animateIn()
        }
        )
    }
    animateOut() {
        this.instances.forEach(e=>{
            e.animateOut()
        }
        )
    }
    render() {
        for (let e = 0; e < this.instances.length; e++)
            this.instances[e].render()
    }
    update() {
        for (let e = 0; e < this.instances.length; e++)
            this.instances[e].update(r.scroll.offsetTop)
    }
    resize(e, t, s) {
        for (let i = 0; i < this.instances.length; i++)
            this.instances[i].resize(this.instances[i].el, e, t, s)
    }
}
var w = {
    BlobSizeInitial: 1,
    BlobSizeHover: .89,
    uFresnelOffset: -1.4,
    uFresnelOffsetS: -1.367,
    uFresnelMultiplier: 1.435,
    uFresnelPower: 1.239,
    uRefraction: .03,
    uRefractionColorShift: .75,
    uDistortionFrequency: 2.174,
    uDistortionStrength: 1.6300000000000001,
    uDisplacementFrequency: .186,
    uDisplacementStrength: .042,
    uDisplacementScale: .675,
    uDisplacementSpeed: .315,
    uColorMix1Opacity: .11,
    uColorMix1Smooth: .12,
    uHueShift: 0,
    uSaturation: .978,
    uRedSaturation: 1.891,
    uRedHue: 0,
    uGreenSaturation: 1,
    uGreenHue: 0,
    uBlueSaturation: 1.5,
    uBlueHue: 0,
    mouseLamda: .065,
    mouseDelta: 1.25,
    mouseFollow: !0,
    uSizeDefault: .275
}
  , $i = `#define GLSLIFY 1
uniform sampler2D imgTexture;uniform vec2 imgSize;uniform vec2 containerSize;uniform float scale;uniform float opacity;varying vec2 vUv;vec4 bgCover(sampler2D tex,vec2 imgSize,vec2 ouv,vec2 containerSize){vec2 s=containerSize;vec2 i=imgSize;float rs=s.x/s.y;float ri=i.x/i.y;vec2 new=rs<ri ? vec2(i.x*s.y/i.y,s.y): vec2(s.x,i.y*s.x/i.x);vec2 newOffset=(rs<ri ? vec2((new.x-s.x)/2.0,0.0): vec2(0.0,(new.y-s.y)/2.0))/new;vec2 uv=ouv*s/new+newOffset;return texture2D(tex,uv);}vec3 applyVignette(vec3 color,vec2 vUv){float dist=length(vUv-.5);float radius=0.75;float softness=0.5;float vignette=smoothstep(radius,radius-softness,dist);color.rgb=color.rgb-(1.0-vignette);return color;}void main(){vec2 coords=vUv;coords-=0.5;coords/=scale;coords+=0.5;vec2 p=vUv*2.0-1.0;vec4 img=bgCover(imgTexture,imgSize,coords,containerSize);if(opacity<0.01){discard;}gl_FragColor=vec4(applyVignette(img.rgb,vUv),opacity);}`
  , qi = `precision highp float;
#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=uv;vec3 p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`;
class Hi extends be {
    constructor(e, t) {
        const s = new fe(1,1,20,20)
          , i = new Ee({
            side: ke,
            uniforms: {
                opacity: {
                    value: 0
                },
                scale: {
                    value: 1.5
                },
                imgTexture: {
                    value: null
                },
                containerSize: {
                    value: new v(1,1)
                },
                imgSize: {
                    value: new v(1,1)
                }
            },
            vertexShader: qi,
            fragmentShader: $i,
            transparent: !0
        });
        super(s, i);
        this.name = t,
        this.bounds = new v,
        this.el = e,
        this.size = 1
    }
    async init() {
        super.init(),
        this.resize = this.resize.bind(this),
        await B(),
        x.emit("FORCE_RESIZE")
    }
    async resize(e, t) {
        if (!r.gl.blob)
            return;
        let s = r.gl.blob.el.getBoundingClientRect();
        await B(),
        this.updateSize(s),
        this.calculatePosition(e, t, s)
    }
    setSize(e=1, t=1, s="expo.out") {
        h.to(this, {
            size: e,
            duration: t,
            ease: s
        })
    }
    updateSize({width: e, height: t}) {
        this.camUnit = this.calculateUnitSize(r.gl.camera.position.z - this.position.z);
        const s = e / r.layout.x
          , i = t / r.layout.y;
        this.bounds.x = this.camUnit.width * s,
        this.bounds.y = this.camUnit.height * i
    }
    update() {
        !r.gl.blob || (this.scale.x = this.bounds.x * this.size,
        this.scale.y = this.bounds.y * this.size,
        r.gl.blob.mouse1 && (this.position.y = r.gl.blob.mouse1.y * r.layout.y,
        this.position.x = r.gl.blob.mouse1.x * r.layout.x))
    }
    load(e) {
        const {naturalHeight: t, naturalWidth: s} = e.image;
        this.material.uniforms.imgTexture.value = e,
        this.material.uniforms.imgSize.value = new v(s,t)
    }
}
class Gi {
    constructor(e) {
        this.el = e,
        this.hover = !0,
        this.keep = !1,
        this.onMouseenter = this.onMouseenter.bind(this),
        this.onMouseleave = this.onMouseleave.bind(this),
        this.init()
    }
    async init() {
        await this.loadImage(),
        this.addEvents()
    }
    async loadImage() {
        this.plane = new Hi(this.el,"IMG hover"),
        this.image = await et(this.el.dataset.glHoverImg),
        this.plane.load(this.image),
        r.gl.rtSceneHover.add(this.plane)
    }
    addEvents() {
        this.el.addEventListener("mouseenter", this.onMouseenter),
        this.el.addEventListener("mouseleave", this.onMouseleave)
    }
    destroy() {
        this.keep || (this.el.removeEventListener("mouseenter", this.onMouseenter),
        this.el.removeEventListener("mouseleave", this.onMouseleave),
        this.hide(),
        setTimeout(()=>{
            r.gl.rtSceneHover.remove(this.plane)
        }
        , 500))
    }
    resize(e, t) {
        this.plane && this.plane.resize(e, t)
    }
    update() {
        this.plane && this.plane.update()
    }
    show() {
        this.active || (r.gl.hoverImages.hide(),
        this.active = !0,
        r.gl.blob && (h.to(r.gl.blob, {
            size: w.BlobSizeHover,
            duration: 4,
            ease: "expo.out"
        }),
        h.to(this.plane.material.uniforms.opacity, {
            value: 1,
            duration: .5
        }),
        h.fromTo(this.plane.material.uniforms.scale, {
            value: 1.5
        }, {
            value: 1,
            duration: 2,
            ease: "expo.out"
        }),
        h.to(r.gl.blob.material.uniforms.uRenderHoverOpacity, {
            value: 1,
            duration: .5
        })))
    }
    hide() {
        !this.active || (this.active = !1,
        r.gl.blob && (h.to(r.gl.blob, {
            size: w.BlobSizeInitial,
            duration: 4,
            ease: "expo.out"
        }),
        h.to(this.plane.material.uniforms.opacity, {
            value: 0,
            duration: .5
        }),
        h.to(r.gl.blob.material.uniforms.uRenderHoverOpacity, {
            value: 0,
            duration: .5
        })))
    }
    onMouseenter() {
        this.hover && this.show()
    }
    onMouseleave() {
        this.hover && this.hide()
    }
}
class Ui {
    constructor(e) {
        this.get = this.get.bind(this),
        this.instances = [],
        this.instance = e
    }
    add(e=document.querySelectorAll("[data-gl-hover-img]")) {
        this.els = e,
        this.els.forEach(t=>{
            const s = new Gi(t);
            this.instances.push(s)
        }
        )
    }
    resize(e, t) {
        for (let s = 0; s < this.instances.length; s++)
            this.instances[s].resize(e, t)
    }
    update() {
        for (let e = 0; e < this.instances.length; e++)
            this.instances[e].update && this.instances[e].update()
    }
    hide() {
        for (let e = 0; e < this.instances.length; e++)
            this.instances[e].hide && this.instances[e].hide()
    }
    get(e) {
        let t;
        return this.instances.forEach(s=>{
            s.el === e && (t = s)
        }
        ),
        t
    }
    destroy() {
        this.instances.forEach(e=>{
            e.destroy()
        }
        ),
        this.instances = this.instances.filter(e=>e.keep)
    }
}
function Zt(n="") {
    return n + "_" + Math.random().toString(36).substr(2, 9)
}
class Wi {
    constructor(e) {
        this.inView = this.inView.bind(this),
        this.update = this.update.bind(this),
        this.onClick = this.onClick.bind(this),
        this.id = Zt("snap"),
        this.el = e,
        this.snapPoint = this.el.querySelector("[data-gl-snap-point]"),
        this.active = !1,
        this.initial = !0,
        this.isIntersecting = !1,
        this.observer = new IntersectionObserver(this.inView,{
            threshold: 0,
            rootMargin: "-50% 0% -50% 0%"
        }),
        this.init()
    }
    async init() {
        await B(),
        this.el.hasAttribute("data-gl-hover-img") && (this.hoverInstance = r.gl.hoverImages.get(this.el),
        this.hoverInstance.hover = !1),
        await B(),
        this.addEvents()
    }
    addEvents() {
        this.observer.observe(this.el),
        this.el.tagName === "A" && this.el.addEventListener("click", this.onClick),
        r.raf.add(this.update, this.id)
    }
    destroy() {
        this.observer.unobserve(this.el),
        this.el.tagName === "A" && this.el.addEventListener("click", this.onClick),
        r.raf.remove(this.id)
    }
    onClick() {
        this.active || (r.gl.snapSections.instances.forEach(e=>{
            e.active = !1
        }
        ),
        this.active = !0,
        this.hoverInstance.show())
    }
    inView(e) {
        e.forEach(t=>{
            const {isIntersecting: s} = t;
            if (this.isIntersecting = s,
            s)
                this.initial = !1,
                r.gl.blob.mouse.active = !1,
                r.gl.snapSections.current === this && (this.active = !0,
                this.hoverInstance && this.hoverInstance.show());
            else {
                if (this.initial || this.keep)
                    return;
                this.active = !1,
                setTimeout(()=>{
                    this.hoverInstance && r.gl.snapSections.current === null && (this.hoverInstance.hide(),
                    a.gl.blob && (r.gl.blob.mouse.active = r.mouse,
                    r.mouse || a.gl.blob.snapToCenter()))
                }
                , 100)
            }
        }
        )
    }
    update() {
        if (!this.isIntersecting)
            return;
        const {top: e, left: t, width: s, height: i} = this.snapPoint.getBoundingClientRect();
        r.gl.blob.mouse.set((t + s / 2) / r.layout.x - .5, (-e - i / 2) / r.layout.y + .5),
        r.gl.blob.mouse.speed = 0,
        r.gl.snapSections.current === this && this.hoverInstance && this.hoverInstance.show()
    }
}
class Ni {
    constructor(e) {
        this.instance = e,
        this.instances = [],
        this.current = null,
        this.get = this.get.bind(this),
        this.update = this.update.bind(this)
    }
    add(e=document.querySelectorAll("[data-gl-snap]")) {
        this.els = e,
        this.els.forEach(t=>{
            const s = new Wi(t);
            this.instances.push(s)
        }
        ),
        this.addEvents()
    }
    addEvents() {
        r.raf.add(this.update, "snapsections")
    }
    destroy() {
        this.instances.forEach(e=>{
            e.destroy()
        }
        ),
        this.instances = []
    }
    update() {
        let e = !1;
        for (let t = 0; t < this.instances.length; t++)
            this.instances[t].isIntersecting && (e = !0,
            this.current = this.instances[t]);
        e || (this.current = null)
    }
    get(e) {
        let t;
        return this.instances.forEach(s=>{
            s.el === e && (t = s)
        }
        ),
        t
    }
}
class Vi {
    constructor(e) {
        this.inView = this.inView.bind(this),
        this.update = this.update.bind(this),
        this.id = Zt("size"),
        this.el = e,
        this.isIntersecting = !1,
        this.size = parseFloat(this.el.dataset.glSize) / 10,
        this.top = 0,
        this.observer = new IntersectionObserver(this.inView,{
            threshold: 0,
            rootMargin: "-50% 0% -50% 0%"
        }),
        this.init()
    }
    async init() {
        this.calcBounds(),
        await U(200),
        this.addEvents()
    }
    addEvents() {
        this.observer.observe(this.el),
        r.raf.add(this.update, this.id)
    }
    destroy() {
        this.observer.unobserve(this.el),
        r.raf.remove(this.id)
    }
    calcBounds() {
        const {top: e, height: t} = this.el.getBoundingClientRect();
        this.top = e - t
    }
    update() {
        !this.isIntersecting || (r.scroll.offsetTop > this.top ? r.gl.blob.setSize(this.size) : r.gl.blob.setSize(w.uSizeDefault))
    }
    inView(e) {
        e.forEach(t=>{
            const {isIntersecting: s} = t;
            this.isIntersecting = s
        }
        )
    }
}
class ji {
    constructor(e) {
        this.instance = e,
        this.instances = []
    }
    add(e=document.querySelectorAll("[data-gl-size]")) {
        this.els = e,
        this.els.forEach(t=>{
            const s = new Vi(t);
            this.instances.push(s)
        }
        )
    }
    destroy() {
        this.instances.forEach(e=>{
            e.destroy()
        }
        ),
        this.instances = []
    }
}
var Yi = `#define GLSLIFY 1
varying vec2 vUv;uniform float uZoom;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position*uZoom,1.0);vUv=uv;}`
  , Zi = `#define GLSLIFY 1
mat4 rotationMatrix(vec3 axis,float angle){axis=normalize(axis);float s=sin(angle);float c=cos(angle);float oc=1.0-c;return mat4(oc*axis.x*axis.x+c,oc*axis.x*axis.y-axis.z*s,oc*axis.z*axis.x+axis.y*s,0.0,oc*axis.x*axis.y+axis.z*s,oc*axis.y*axis.y+c,oc*axis.y*axis.z-axis.x*s,0.0,oc*axis.z*axis.x-axis.y*s,oc*axis.y*axis.z+axis.x*s,oc*axis.z*axis.z+c,0.0,0.0,0.0,0.0,1.0);}vec3 rotate(vec3 v,vec3 axis,float angle){mat4 m=rotationMatrix(axis,angle);return(m*vec4(v,1.0)).xyz;}vec3 screen(vec3 a,vec3 b){return 1.-(1.-a)*(1.-b);}vec3 saturation(vec3 rgb,float adjustment){const vec3 W=vec3(0.2125,0.7154,0.0721);vec3 intensity=vec3(dot(rgb,W));return mix(intensity,rgb,adjustment);}vec3 hue_0(vec3 color,float hue){const vec3 k=vec3(0.57735,0.57735,0.57735);float cosAngle=cos(hue);return vec3(color*cosAngle+cross(k,color)*sin(hue)+k*dot(k,color)*(1.0-cosAngle));}vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}
#define DISTANCE 2.0
varying vec2 vUv;uniform vec4 uResolution;uniform float uTime;uniform vec2 uMouse1;uniform vec2 uMouse2;uniform float uOpacity;uniform sampler2D tRender;uniform samplerCube tMap;uniform sampler2D tRenderHover;uniform float uRenderHoverOpacity;uniform float uDistortionFrequency;uniform float uDistortionStrength;uniform float uDisplacementFrequency;uniform float uDisplacementScale;uniform float uDisplacementStrength;uniform float uRefraction;uniform float uRefractionColorShift;uniform float uFresnelOffset;uniform float uFresnelMultiplier;uniform float uFresnelPower;uniform float uColorMix1Opacity;uniform float uColorMix1Smooth;uniform float uHueShift;uniform float uSaturation;uniform float uRedSaturation;uniform float uGreenSaturation;uniform float uBlueSaturation;uniform float uRedHue;uniform float uGreenHue;uniform float uBlueHue;uniform float uSize;float sdSphere(vec3 p,float r){return length(p)-r;}float smin(float a,float b,float k){float h=clamp(0.5+0.5*(b-a)/k,0.0,1.0);return mix(b,a,h)-k*h*(1.0-h);}float sdf(vec3 p){float sphere1=sdSphere(p-vec3(uMouse1*uResolution.zw*2.,0.0),uSize-0.045);float sphere2=sdSphere(p-vec3(uMouse2*uResolution.zw*2.,0.0),uSize);return smin(sphere1,sphere2,0.2);}vec3 orthogonal(vec3 v){return normalize(abs(v.x)>abs(v.z)? vec3(-v.y,v.x,0.0): vec3(0.0,-v.z,v.y));}vec3 getDisplacedPosition(vec3 _position){vec3 distoredPosition=_position;float strength=uDistortionStrength;distoredPosition+=cnoise(vec3(distoredPosition*(uDistortionFrequency/uDisplacementScale)*strength+uTime));float perlinStrength=cnoise(vec3((distoredPosition)*(uDisplacementFrequency/uDisplacementScale)*strength));vec3 displacedPosition=_position;displacedPosition+=((_position/2.)*perlinStrength*uDisplacementStrength*4.);return displacedPosition;}vec3 calcNormal(vec3 pos){vec2 eps=vec2(0.01,0.);return normalize(vec3(sdf(pos+eps.xyy)-sdf(pos-eps.xyy),sdf(pos+eps.yxy)-sdf(pos-eps.yxy),sdf(pos+eps.yyx)-sdf(pos-eps.yyx)));}float mapTo(float x,float a,float b,float c,float d){return((x-a)*(d-c))/(b-a)+c;}void main(){float uGlow=.005;vec4 finalColor=vec4(0.0);vec3 camPos=vec3(0.0,0.0,DISTANCE);vec3 coords=vec3(uMouse1*uResolution.xy,0.0);vec3 ray=normalize(vec3((vUv-vec2(.5))*uResolution.zw,-1.0));float distanceMouse=distance(uMouse1,vec2(0.0))*.1;float t=0.0;float tMax=2.15;for(int i=0;i<4;++i){vec3 pos=camPos+t*ray;float h=sdf(getDisplacedPosition(pos));if(h<0.001||t>(tMax+uGlow))break;t+=h;}vec3 vNormal=vec3(0.0);vec2 screenUv=gl_FragCoord.xy/uResolution.xy;if(t<tMax){vec3 pos=camPos+t*ray;float tangentFactor=0.005;vec3 normal=calcNormal(pos);vec3 distortedPosition=getDisplacedPosition(pos);vec3 tangent1=orthogonal(normal);vec3 tangent2=normalize(cross(normal,tangent1));vec3 nearby1=pos+tangent1*tangentFactor;vec3 nearby2=pos+tangent2*tangentFactor;vec3 distorted1=getDisplacedPosition(nearby1);vec3 distorted2=getDisplacedPosition(nearby2);vNormal=normalize(cross(distorted1-distortedPosition,distorted2-distortedPosition));vec3 viewDirection=normalize(vec3(0.0,0.0,0.0)-vec3(coords.x/(uResolution.x*.25),coords.y/(uResolution.y*.25),-2.));vec3 nViewDirection=normalize(vNormal.xyz-viewDirection);float fresnel=uFresnelOffset*(1.-distanceMouse*2.0)+(1.0+dot(nViewDirection,vNormal))*uFresnelMultiplier;float fresnel2=uFresnelOffset*(1.-distanceMouse*2.0)+(2.+dot(ray,vNormal))*uFresnelMultiplier;fresnel=pow(max(0.0,fresnel),uFresnelPower);float fresnelFactor=pow(fresnel+fresnel2,uFresnelPower);vec3 vFresnelColor=mix(vec3(0.0),vec3(1.0),clamp(pow(max(0.0,fresnel-0.8),3.0),0.0,1.0));vec3 vFresnelColor2=vec3(max((t-2.1)*1.0,0.0));vFresnelColor=vFresnelColor+vFresnelColor2;vec3 refracted=refract(vec3(0.0,0.0,-2.0),vNormal,1.0/2.);screenUv+=refracted.xy*uRefraction*0.35;vec3 cubeTex=textureCube(tMap,vec3(screenUv,0.0)).rgb;vec3 texCube=screen(saturation(cubeTex,5.),vec3(0.0,0.0,0.0));vec3 texCubeFresnel=screen(mix(vec3(0.0,0.0,0.0),texCube,vFresnelColor),vFresnelColor);float offset=(0.01*vNormal.x*.15+.002)*uRefractionColorShift;float red=texture2D(tRender,vec2(screenUv.x,screenUv.y+offset)).r;float green=texture2D(tRender,vec2(screenUv.x,screenUv.y)).g;float blue=texture2D(tRender,vec2(screenUv.x,screenUv.y-offset)).b;vec3 refractedColor=vec3(red,green,blue);vec3 mixed1;mixed1.r=smoothstep(0.0,.25,texCubeFresnel.r);mixed1.g=smoothstep(0.0,.25,texCubeFresnel.r);mixed1.b=smoothstep(0.0,.25,texCubeFresnel.r);vec3 mixed2;float sign=smoothstep(uColorMix1Smooth*0.1,uColorMix1Smooth*0.01,texCubeFresnel.r);vec3 black=vec3(0.0,0.0,0.0);float invertFresnelFactor=min(1.-fresnelFactor+.2*10.,20.);mixed2=max(vec3(invertFresnelFactor,invertFresnelFactor,invertFresnelFactor),0.5);mixed2=mix(black,mix(black,mixed2,sign),uColorMix1Opacity);vec3 mixed3;mixed3.r=smoothstep(texCubeFresnel.r*10.0,-0.01,.5);mixed3.g=smoothstep(texCubeFresnel.g*10.0,-0.01,.5);mixed3.b=smoothstep(texCubeFresnel.b*10.0,-0.01,.5);vec3 mixed=screen(screen(mixed1,mixed3),mixed2);vec3 bw=saturation(mixed,0.0);vec3 shifted=hue_0(mixed,1.0);mixed=hue_0(mixed,uHueShift);mixed.r=mix(mix(bw.r,mixed.r,uRedSaturation),mix(bw.r,shifted.r,uRedSaturation),uRedHue);mixed.g=mix(mix(bw.g,mixed.g,uGreenSaturation),mix(bw.g,shifted.g,uGreenSaturation),uGreenHue);mixed.b=mix(mix(bw.b,mixed.b,uBlueSaturation),mix(bw.b,shifted.b,uBlueSaturation),uBlueHue);mixed=saturation(mixed,uSaturation);vec4 toImg=texture2D(tRenderHover,screenUv);vec3 background=mix(refractedColor,toImg.rgb,uRenderHoverOpacity);vec3 extraFresnel=max(vec3((t-2.135)*30.),vec3(0.0));vec3 mixedBackground=screen(mixed+extraFresnel,background);finalColor.rgb=mixedBackground;finalColor.a=1.0;}else{finalColor.a=0.0;}if(t>tMax&&t<(tMax+uGlow)){float mappedT=mapTo(t,tMax,tMax+uGlow,1.0,0.0);finalColor.rgb=vec3(1.0);finalColor.a=mappedT;}gl_FragColor=finalColor;gl_FragColor.a*=uOpacity;}`;
const Xi = new us;
var Qi = (n,e="webp")=>new Promise((s,i)=>{
    const o = [`${n}/px.${e}`, `${n}/nx.${e}`, `${n}/ny.${e}`, `${n}/py.${e}`, `${n}/pz.${e}`, `${n}/nz.${e}`];
    Xi.load(o, c=>{
        s(c)
    }
    )
}
);
class Ji extends be {
    constructor(e) {
        const t = new fe(1,1,1)
          , s = new Ee({
            vertexShader: Yi,
            fragmentShader: Zi,
            transparent: !0,
            uniforms: {
                uTime: {
                    value: 1
                },
                uDistortionFrequency: {
                    value: w.uDistortionFrequency
                },
                uDistortionStrength: {
                    value: w.uDistortionStrength
                },
                uDisplacementFrequency: {
                    value: w.uDisplacementFrequency
                },
                uDisplacementStrength: {
                    value: w.uDisplacementStrength
                },
                uDisplacementScale: {
                    value: w.uDisplacementScale
                },
                uFresnelOffset: {
                    value: r.isMobile ? w.uFresnelOffsetS : w.uFresnelOffset
                },
                uFresnelPower: {
                    value: w.uFresnelPower
                },
                uFresnelMultiplier: {
                    value: w.uFresnelMultiplier
                },
                uRefraction: {
                    value: w.uRefraction
                },
                uRefractionColorShift: {
                    value: w.uRefractionColorShift
                },
                tRender: {
                    value: null
                },
                tMap: {
                    value: null
                },
                tRenderHover: {
                    value: null
                },
                uRenderHoverOpacity: {
                    value: 0
                },
                uColorMix1Opacity: {
                    value: w.uColorMix1Opacity
                },
                uColorMix1Smooth: {
                    value: w.uColorMix1Smooth
                },
                uColorNormalShift: {
                    value: w.uColorNormalShift
                },
                uHueShift: {
                    value: w.uHueShift
                },
                uSaturation: {
                    value: w.uSaturation
                },
                uRedSaturation: {
                    value: w.uRedSaturation
                },
                uGreenSaturation: {
                    value: w.uGreenSaturation
                },
                uBlueSaturation: {
                    value: w.uBlueSaturation
                },
                uRedHue: {
                    value: w.uRedHue
                },
                uGreenHue: {
                    value: w.uGreenHue
                },
                uBlueHue: {
                    value: w.uBlueHue
                },
                uMouse1: {
                    value: new v
                },
                uMouse2: {
                    value: new v
                },
                uResolution: {
                    value: new ds
                },
                uSize: {
                    value: w.uSizeDefault
                },
                uOpacity: {
                    value: 0
                },
                uZoom: {
                    value: .5
                }
            }
        });
        super(t, s);
        this.gl = e,
        this.update = this.update.bind(this),
        this.onMouseMove = this.onMouseMove.bind(this),
        this.onScroll = this.onScroll.bind(this),
        this.el = document.querySelector(".gl-blob"),
        this.mouse = new v(window.innerWidth / 2 / window.innerWidth - .5,-window.innerHeight / 2 / window.innerHeight + .5),
        this.mouseAlways = new v(window.innerWidth / 2 / window.innerWidth - .5,-window.innerHeight / 2 / window.innerHeight + .5),
        this.mouse1 = new v(this.mouse.x,this.mouse.y),
        this.mouse2 = new v(this.mouse.x,this.mouse.y),
        this.mouse3 = new v(this.mouse.x,this.mouse.y),
        this.setDefaultSettings(),
        this.mouse.speed = 0,
        this.animating = !1,
        this.mouse.active = r.mouse,
        this.zoom = 1,
        this.scroll = new v,
        this.position1 = new v,
        this.position2 = new v,
        this.uSizeInitial = this.calcBlobSize(w.uSizeDefault),
        this.uSize = this.uSizeInitial,
        this.uSizeLerp = this.uSizeInitial,
        this.settings = {
            mouseLamda: w.mouseLamda,
            mouseDelta: w.mouseDelta
        },
        this.uDisplacementSpeed = w.uDisplacementSpeed,
        x.on("GL_MOUSEMOVE", this.onMouseMove),
        this.gl = e,
        this.load()
    }
    async load() {
        const e = r.webp ? "webp" : "png"
          , t = await Qi("/static/cubemaps/01", e);
        this.gl.scene.environment = t,
        this.material.uniforms.tMap.value = t,
        this.material.uniforms.tRender.value = this.gl.renderTarget.texture,
        this.material.uniforms.tRenderHover.value = this.gl.renderTargetHover.texture,
        this.gl.scene.add(this),
        this.resize(window.innerWidth, window.innerHeight),
        a.resolve()
    }
    setSize(e) {
        this.uSize = this.calcBlobSize(e)
    }
    setDefaultSettings() {
        this.mouse1.lerp = .05,
        this.mouse2.lerp = .075
    }
    setZoom(e=1, t=1, s="expo.out") {
        h.to(this, {
            zoom: e,
            duration: t,
            ease: s
        })
    }
    calcBlobSize(e=w.uSizeDefault) {
        return dt(window.innerWidth, 800, 2e3) / Math.max(window.innerWidth, 1e3) * e
    }
    update(e) {
        this.material.uniforms.uOpacity.value < .001 || (this.mouse1.x = oe(this.mouse1.x, this.mouse.x, this.mouse1.lerp),
        this.mouse1.y = oe(this.mouse1.y, this.mouse.y, this.mouse1.lerp),
        this.mouse2.x = oe(this.mouse2.x, this.mouse1.x, this.mouse2.lerp),
        this.mouse2.y = oe(this.mouse2.y, this.mouse1.y, this.mouse2.lerp),
        this.position1 = this.mouse1,
        this.position2 = this.mouse2,
        this.material.uniforms.uMouse1.value.copy(this.position1),
        this.material.uniforms.uMouse2.value.copy(this.position2),
        this.uSizeLerp = oe(this.uSizeLerp, this.uSize, .05),
        this.material.uniforms.uSize.value = this.uSizeLerp,
        this.material.uniforms.uZoom.value = this.zoom,
        this.material.uniforms.uTime.value = e * this.uDisplacementSpeed)
    }
    updateSize({width: e, height: t}) {
        this.camUnit = this.calculateUnitSize(r.gl.camera.position.z - this.position.z);
        const s = e / r.layout.x
          , i = t / r.layout.y;
        this.scale.x = this.camUnit.width * s,
        this.scale.y = this.camUnit.height * i
    }
    async resize(e, t) {
        this.updateSize({
            width: e,
            height: t
        }),
        this.calculatePosition(e, t, {
            width: e,
            height: t
        }),
        this.uSize = this.calcBlobSize();
        const {dpr: s} = r.layout;
        this.imageAspect = 1;
        let i, o;
        t / e > this.imageAspect ? (i = e / t * this.imageAspect,
        o = 1) : (i = 1,
        o = t / e / this.imageAspect),
        this.material.uniforms.uResolution.value.set(e * s, t * s, i, o)
    }
    onMouseMove({x: e=window.innerWidth / 2, y: t=window.innerHeight / 2}) {
        this.mouse.active && this.setMousePos(e, t),
        this.setMousePosAlways(e, t)
    }
    getMouseCoords(e, t) {
        return {
            x: (e / window.innerWidth - .5) / this.zoom,
            y: (-t / window.innerHeight + .5) / this.zoom
        }
    }
    setMousePosAlways(e, t) {
        const {x: s, y: i} = this.getMouseCoords(e, t);
        this.mouseAlways.set(s, i)
    }
    setMousePos(e, t) {
        const {x: s, y: i} = this.getMouseCoords(e, t);
        this.mouse.set(s, i)
    }
    snapToCenter() {
        this.uSize = this.uSizeInitial,
        this.setMousePos(window.innerWidth / 2, window.innerHeight / 2)
    }
    async snapToPoint(e, t=!1) {
        this.animating = !0;
        let s, i;
        if (t)
            s = e.x,
            i = e.y;
        else {
            const {top: o, left: c, height: f, width: d} = e.getBoundingClientRect();
            s = c + d / 2,
            i = o + f / 2
        }
        this.scroll.set(s, i),
        this.setMousePos(this.scroll.x, this.scroll.y),
        await U(2e3),
        this.animating = !1
    }
    async addScrollEvents() {
        r.isMobile ? (window.addEventListener("scroll", this.onScroll, {
            passive: !0
        }),
        this.onScroll()) : r.raf.add(this.onScroll, "scroll_blob"),
        this.mouse.active = !1,
        await U(500),
        this.adjustToScrollSettings()
    }
    removeScrollEvents() {
        this.setDefaultSettings(),
        this.mouse.active = !0,
        r.isMobile ? window.removeEventListener("scroll", this.onScroll, {
            passive: !0
        }) : r.raf.remove("scroll_blob")
    }
    adjustToScrollSettings() {
        r.gl.blob.mouse.speed = 0,
        r.gl.blob.mouse1.lerp = .2,
        r.gl.blob.mouse2.lerp = .15
    }
    onScroll() {
        this.setMousePos(this.scroll.x, this.scroll.y - r.scroll.offsetTop)
    }
    setCurrentPosition(e, t) {
        this.scroll.set(e, t)
    }
}
class Ki {
    constructor(e) {
        r.container = document.querySelector(e),
        r.layout = new Ai(r.container),
        r.gl = this,
        this.resize = this.resize.bind(this),
        this.update = this.update.bind(this),
        this.render = this.render.bind(this),
        this.load = this.load.bind(this)
    }
    async init() {
        await Li("lossy").then(()=>{
            r.webp = !0
        }
        ).catch(()=>{
            r.webp = !1
        }
        ),
        this.Manager = new Pi,
        this.clock = new ms,
        this.scene = new we,
        this.textScene = new we,
        this.rtScene = new we,
        this.rtSceneHover = new we,
        this.camera = new Ke,
        this.rtCamera = new Ke,
        this.renderer = new Ut(r.container),
        r.isMobile ? (await U(500),
        x.emit("MOBILE_TEXT_IN")) : (this.texts = new Oi(this),
        this.planes = new Bi),
        this.renderTarget = new ze(r.layout.x,r.layout.y),
        this.renderTargetHover = new ze(r.layout.x,r.layout.y),
        this.renderTargetText = new ze(r.layout.x,r.layout.y),
        x.on("GL_RESIZE", this.resize),
        x.on("GL_LOADED", this.load),
        this.blob = new Ji(this),
        this.hoverImages = new Ui(this),
        this.snapSections = new Ni(this),
        this.sizeSections = new ji(this),
        await B,
        this.in(document.body),
        r.raf.add(this.render, "render")
    }
    load() {
        h.to(r.container, {
            opacity: 1,
            delay: .5,
            duration: .5,
            ease: "linear"
        })
    }
    async in(e) {
        x.emit("GL_LOADED"),
        this.active = !0,
        this.planes && this.createPlanes(),
        await B,
        r.layout.resize(),
        a.resolve()
    }
    out() {
        this.planes && this.planes.destroy()
    }
    destroy() {
        this.renderer.dispose(),
        x.off("GL_RESIZE", this.resize)
    }
    createPlanes() {
        this.planes.init(),
        this.rtScene.add(this.planes)
    }
    update(e) {
        this.hoverImages && this.hoverImages.update(),
        this.texts && this.texts.update(),
        this.planes && this.planes.update(),
        this.blob && this.blob.update(e),
        this.blob && (this.blob.visible = !1),
        this.renderer.setRenderTarget(this.renderTargetHover),
        this.renderer.render(this.rtSceneHover, this.camera),
        this.renderer.setRenderTarget(null),
        this.texts && this.texts.render(),
        this.renderer.setRenderTarget(this.renderTarget),
        this.renderer.render(this.rtScene, this.camera),
        this.renderer.setRenderTarget(null),
        this.blob && (this.blob.visible = !0)
    }
    setBackground() {
        this.scene.background = this.renderTarget.texture
    }
    clearBackground() {
        this.scene.background = null
    }
    render(e) {
        !this.active || (this.delta = this.clock.getDelta(),
        this.time = this.clock.getElapsedTime(),
        this.update(this.time),
        this.renderer.render(this.scene, this.camera))
    }
    resize({w: e, h: t, dpr: s}) {
        this.blob && this.blob.resize(e, t),
        this.texts && this.texts.resize(e, t, s),
        this.planes && this.planes.resize(e, t),
        this.hoverImages && this.hoverImages.resize(e, t),
        this.renderTarget.setSize(e * s, t * s, !1),
        this.renderTargetHover.setSize(e * s, t * s, !1),
        this.renderTargetText.setSize(e * s, t * s, !1),
        this.renderer.resize(e, t),
        this.camera.resize(e, t)
    }
}
var en = `#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}float snoise(vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}uniform float uProgress;uniform vec2 uMouse;uniform vec2 uResolution;
#define M_PI 3.1415926535897932384626433832795
float circle(vec2 _st,float _radius,float blurriness){vec2 dist=_st;return 1.-smoothstep(_radius-(_radius*blurriness),_radius+(_radius*blurriness),dot(dist,dist)*4.0);}varying vec2 vUv;void main(){vec2 newUv=vUv;vec2 coords=uMouse.xy/uResolution.xy;vec2 circlePos=newUv-coords;float ratio=uResolution.y/uResolution.x;circlePos.y*=ratio;float offx=newUv.x;float offy=newUv.y;float c=circle(circlePos,uProgress*10.*ratio,.3)*3.0;float n=snoise(vec2(offx,offy)*2.5)-1.;float finalMask=smoothstep(0.499,0.5,n+c);vec4 color=mix(vec4(0.0),vec4(1.0),finalMask);if(uProgress==1.0){color=vec4(1.);}gl_FragColor=color;}`
  , tn = `precision highp float;
#define GLSLIFY 1
varying vec2 vUv;void main(){vUv=uv;vec3 p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`;
class sn extends be {
    constructor(e) {
        const t = new fe(1,1,1,1)
          , s = new Ee({
            uniforms: {
                uProgress: {
                    value: 0
                },
                uForce: {
                    value: 0
                },
                uMouse: {
                    value: new v
                },
                uResolution: {
                    value: new v
                }
            },
            vertexShader: tn,
            fragmentShader: en,
            transparent: !0
        });
        super(t, s);
        this.el = e,
        this.mouse1 = new v,
        this.mouse2 = new v
    }
    async init() {
        super.init(),
        this.resize = this.resize.bind(this),
        await B(),
        x.emit("FORCE_RESIZE")
    }
    update(e, t) {
        !r.gl.blob || (this.mouse1.x = oe(this.mouse1.x, e.x, r.gl.blob.mouse1.lerp),
        this.mouse1.y = oe(this.mouse1.y, e.y, r.gl.blob.mouse1.lerp),
        this.mouse2.x = oe(this.mouse2.x, this.mouse1.x, r.gl.blob.mouse2.lerp),
        this.mouse2.y = oe(this.mouse2.y, this.mouse1.y, r.gl.blob.mouse2.lerp),
        this.material.uniforms.uMouse.value = this.mouse2)
    }
    updateSize({width: e, height: t}) {
        this.camUnit = this.calculateUnitSize(r.gl.camera.position.z - this.position.z);
        const s = e / r.layout.x
          , i = t / r.layout.y;
        this.scale.x = this.camUnit.width * s,
        this.scale.y = this.camUnit.height * i
    }
    async resize(e, t, s) {
        this.updateSize({
            width: e,
            height: t
        }),
        this.calculatePosition(e, t, {
            width: e,
            height: t
        }),
        this.material.uniforms.uResolution.value.set(e, t)
    }
}
class nn {
    constructor(e) {
        this.el = e,
        this.camera = new Ke,
        this.renderer = new Ut(this.el),
        this.scene = new we,
        this.active = !1,
        this.bg = new sn,
        this.resize = this.resize.bind(this),
        this.render = this.render.bind(this),
        this.scene.add(this.bg),
        this.renderer.render(this.scene, this.camera),
        x.on("GL_RESIZE", this.resize),
        r.raf.add(this.render, "render menu")
    }
    render() {
        this.bg.update(r.layout.mouse, r.gl.time),
        !!this.active && this.renderer.render(this.scene, this.camera)
    }
    resize({w: e, h: t, dpr: s}) {
        this.bg && this.bg.resize(e, t, s),
        this.renderer.resize(e, t),
        this.camera.resize(e, t),
        this.renderer.render(this.scene, this.camera)
    }
}
const {dom: on, flags: zn} = R
  , {qs: rn} = C;
class an {
    constructor() {
        this.init()
    }
    async init() {
        a.loaded = new Promise(t=>{
            a.resolve = t
        }
        ),
        await fs(),
        await document.fonts.ready,
        a.app = this,
        a.router = Ci;
        const e = rn("[data-router-wrapper]");
        e.style.visibility = "",
        h.timeline().to(on.mask, {
            autoAlpha: 0,
            duration: 1,
            delay: .7,
            ease: "power1"
        }),
        a.gl = new Ki("#gl"),
        a.gl.init(),
        a.menu = new nn(Re(".js-menu")),
        "scrollRestoration"in history && (history.scrollRestoration = "manual"),
        u.delegate("click", "a", t=>{
            a.menu.el.contains(t.target) && t.currentTarget.href === location.href && u.emit("menu:close")
        }
        )
    }
}
new an;
