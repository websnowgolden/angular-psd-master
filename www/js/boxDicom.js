(function () {
    var g, aa = aa || {},
        n = this;

    function q(a) {
        return void 0 !== a
    }
	 
    function ba() {}

    function da(a) {
        a.ha = function () {
            return a.$e ? a.$e : a.$e = new a
        }
    }

    function ea(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function fa(a) {
        return "array" == ea(a)
    }

    function ga(a) {
        var b = ea(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function u(a) {
        return "string" == typeof a
    }

    function ha(a) {
        return "number" == typeof a
    }

    function ia(a) {
        return "function" == ea(a)
    }

    function ja(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ka(a) {
        return a[la] || (a[la] = ++ma)
    }
    var la = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ma = 0;

    function na(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function oa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function pa(a, b, c) {
        pa = Function.prototype.bind && -1 != Function.prototype.bind.toString()
            .indexOf("native code") ? na : oa;
        return pa.apply(null, arguments)
    }

    function qa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var ra = Date.now || function () {
        return +new Date
    };

    function ta(a, b) {
        var c = a.split("."),
            d = n;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && q(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
    }

    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.A = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Di = function (a, c, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    };
    var ua;

    function va(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, va);
        else {
            var b = Error()
                .stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    v(va, Error);
    va.prototype.name = "CustomError";

    function wa(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    }
    wa.prototype.a = null;
    var xa = 0;
    wa.prototype.reset = function (a, b, c, d, e) {
        "number" == typeof e || xa++;
        d || ra();
        this.b = b;
        delete this.a
    };

    function ya() {
        0 != za && (Aa[ka(this)] = this);
        this.Ga = this.Ga;
        this.Ib = this.Ib
    }
    var za = 0,
        Aa = {};
    ya.prototype.Ga = !1;
    ya.prototype.Y = function () {
        if (!this.Ga && (this.Ga = !0, this.M(), 0 != za)) {
            var a = ka(this);
            delete Aa[a]
        }
    };

    function Ba(a, b) {
        a.Ga ? b.call(void 0) : (a.Ib || (a.Ib = []), a.Ib.push(q(void 0) ? pa(b, void 0) : b))
    }
    ya.prototype.M = function () {
        if (this.Ib)
            for (; this.Ib.length;) this.Ib.shift()()
    };

    function Ca(a) {
        a && "function" == typeof a.Y && a.Y()
    }

    function Da(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            ga(d) ? Da.apply(null, d) : Ca(d)
        }
    };
    var Ea;

    function Fa(a, b) {
        this.type = a;
        this.j = this.target = b;
        this.w = !1;
        this.tf = !0
    }
    Fa.prototype.h = function () {
        this.w = !0
    };
    Fa.prototype.b = function () {
        this.tf = !1
    };
    var Ga = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: "space",
        33: "pg-up",
        34: "pg-down",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "delete",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: "semicolon",
        61: "equals",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        93: "context",
        96: "num-0",
        97: "num-1",
        98: "num-2",
        99: "num-3",
        100: "num-4",
        101: "num-5",
        102: "num-6",
        103: "num-7",
        104: "num-8",
        105: "num-9",
        106: "num-multiply",
        107: "num-plus",
        109: "num-minus",
        110: "num-period",
        111: "num-division",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        186: "semicolon",
        187: "equals",
        189: "dash",
        188: ",",
        190: ".",
        191: "/",
        192: "`",
        219: "open-square-bracket",
        220: "\\",
        221: "close-square-bracket",
        222: "single-quote",
        224: "win"
    };
    var Ha = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Ia(a) {
        return !(!a || !a[Ha])
    }
    var Ja = 0;

    function Ka(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.tc = !!d;
        this.Oc = e;
        this.key = ++Ja;
        this.Zb = this.sc = !1
    }

    function La(a) {
        a.Zb = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Oc = null
    };

    function Ma() {
        return null
    };
    var Na;
    Na = {
        Ef: ["BC", "AD"],
        Df: ["Before Christ", "Anno Domini"],
        Gf: "JFMAMJJASOND".split(""),
        Mf: "JFMAMJJASOND".split(""),
        Ff: "January February March April May June July August September October November December".split(" "),
        Lf: "January February March April May June July August September October November December".split(" "),
        If: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        Of: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        Sf: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Qf: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Kf: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Pf: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        a: "SMTWTFS".split(""),
        Nf: "SMTWTFS".split(""),
        Jf: ["Q1", "Q2", "Q3", "Q4"],
        Hf: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        Af: ["AM", "PM"],
        $d: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        de: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        Bf: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        ae: 6,
        b: [5, 6],
        be: 5
    };

    function Oa(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]")
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function Pa(a) {
        var b = [];
        Qa(new Ra, a, b);
        return b.join("")
    }

    function Ra() {}

    function Qa(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (fa(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Qa(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Sa(d, c), c.push(":"), Qa(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Sa(b, c);
                break;
            case "number":
                c.push(isFinite(b) &&
                    !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Ta = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Ua = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Sa(a, b) {
        b.push('"', a.replace(Ua, function (a) {
            var b = Ta[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536)
                .toString(16)
                .substr(1), Ta[a] = b);
            return b
        }), '"')
    };

    function Va(a, b) {
        this.width = a;
        this.height = b
    }

    function Wa(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    g = Va.prototype;
    g.clone = function () {
        return new Va(this.width, this.height)
    };
    g.toString = function () {
        return "(" + this.width + " x " + this.height + ")"
    };
    g.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Xa() {}
    Xa.prototype.a = null;

    function Ya(a) {
        var b;
        (b = a.a) || (b = {}, Za(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };

    function $a(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function ab(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function bb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function cb(a, b) {
        return null !== a && b in a
    }

    function db() {
        var a = eb,
            b;
        for (b in a) return !1;
        return !0
    }

    function fb(a, b) {
        b in a && delete a[b]
    }

    function gb(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }

    function w(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }

    function hb(a) {
        var b = {},
            c;
        for (c in a) b[a[c]] = c;
        return b
    }
    var ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function jb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ib.length; f++) c = ib[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function kb(a) {
        var b = arguments.length;
        if (1 == b && fa(arguments[0])) return kb.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    }

    function lb(a) {
        var b = arguments.length;
        if (1 == b && fa(arguments[0])) return lb.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };

    function mb() {}
    mb.prototype.a = function () {};

    function nb(a) {
        nb[" "](a);
        return a
    }
    nb[" "] = ba;

    function ob(a, b) {
        try {
            return nb(a[b]), !0
        } catch (c) {}
        return !1
    };

    function pb() {};

    function rb(a) {
        this.a = a
    }

    function sb(a, b, c) {
        if (q(c)) {
            a = a.a;
            c = Pa(c);
            try {
                a.a.setItem(b, c)
            } catch (d) {
                if (0 == a.a.length) throw "Storage mechanism: Storage disabled";
                throw "Storage mechanism: Quota exceeded";
            }
        } else a.a.a.removeItem(b)
    }

    function tb(a, b) {
        var c;
        try {
            var d = a.a.a.getItem(b);
            if (!u(d) && null !== d) throw "Storage mechanism: Invalid value was encountered";
            c = d
        } catch (e) {
            return
        }
        if (null !== c) try {
            return Oa(c)
        } catch (e) {
            throw "Storage: Invalid value was encountered";
        }
    };

    function ub(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }

    function vb(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    }

    function wb(a) {
        return a.replace(/[\t\r\n ]+/g, " ")
            .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }
    var xb = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function z(a) {
        return encodeURIComponent(String(a))
    }

    function yb(a) {
        if (!zb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ab, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Bb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Cb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Db, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Eb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Fb, "&#0;"));
        return a
    }
    var Ab = /&/g,
        Bb = /</g,
        Cb = />/g,
        Db = /"/g,
        Eb = /'/g,
        Fb = /\x00/g,
        zb = /[\x00&<>"']/,
        Gb = String.prototype.repeat ? function (a, b) {
            return a.repeat(b)
        } : function (a, b) {
            return Array(b + 1)
                .join(a)
        };

    function A(a, b) {
        var c = q(void 0) ? a.toFixed(void 0) : String(a),
            d = c.indexOf("."); - 1 == d && (d = c.length);
        return Gb("0", Math.max(0, b - d)) + c
    }

    function Hb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function Ib(a) {
        return String(a)
            .replace(/\-([a-z])/g, function (a, c) {
                return c.toUpperCase()
            })
    }

    function Jb(a) {
        var b = u(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
            .replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function Kb(a, b) {
        b.unshift(a);
        va.call(this, vb.apply(null, b));
        b.shift()
    }
    v(Kb, va);
    Kb.prototype.name = "AssertionError";

    function Lb(a, b) {
        throw new Kb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var Mb = Array.prototype.indexOf ? function (a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Nb = Array.prototype.forEach ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ob = Array.prototype.filter ? function (a, b, c) {
            return Array.prototype.filter.call(a,
                b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], f = 0, h = u(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        },
        Pb = Array.prototype.map ? function (a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        },
        Qb = Array.prototype.every ? function (a, b, c) {
            return Array.prototype.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in
                    e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };

    function Rb(a) {
        var b;
        a: {
            b = Sb;
            for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : u(a) ? a.charAt(b) : a[b]
    }

    function Tb(a, b) {
        return 0 <= Mb(a, b)
    }

    function Ub(a, b) {
        var c = Mb(a, b),
            d;
        (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return d
    }

    function Vb(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function Wb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Xb(a, b, c, d) {
        Array.prototype.splice.apply(a, Yb(arguments, 1))
    }

    function Yb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var Zb = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/,
        $b = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/,
        ac = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;

    function bc(a, b, c, d, e, f) {
        u(a) ? (this.j = a == cc ? b : 0, this.g = a == dc ? b : 0, this.a = a == ec ? b : 0, this.b = a == fc ? b : 0, this.c = a == gc ? b : 0, this.h = a == hc ? b : 0) : (this.j = a || 0, this.g = b || 0, this.a = c || 0, this.b = d || 0, this.c = e || 0, this.h = f || 0)
    }
    bc.prototype.clone = function () {
        return new bc(this.j, this.g, this.a, this.b, this.c, this.h)
    };
    var cc = "y",
        dc = "m",
        ec = "d",
        fc = "h",
        gc = "n",
        hc = "s";

    function ic(a, b, c) {
        ha(a) ? (this.a = jc(a, b || 0, c || 1), kc(this, c || 1)) : ja(a) ? (this.a = jc(a.getFullYear(), a.getMonth(), a.getDate()), kc(this, a.getDate())) : (this.a = new Date(ra()), a = this.a.getDate(), this.a.setHours(0), this.a.setMinutes(0), this.a.setSeconds(0), this.a.setMilliseconds(0), kc(this, a))
    }

    function jc(a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    }
    g = ic.prototype;
    g.wc = Na.ae;
    g.xc = Na.be;
    g.clone = function () {
        var a = new ic(this.a);
        a.wc = this.wc;
        a.xc = this.xc;
        return a
    };
    g.getFullYear = function () {
        return this.a.getFullYear()
    };
    g.getMonth = function () {
        return this.a.getMonth()
    };
    g.getDate = function () {
        return this.a.getDate()
    };
    g.getTime = function () {
        return this.a.getTime()
    };
    g.getDay = function () {
        return this.a.getDay()
    };
    g.getUTCFullYear = function () {
        return this.a.getUTCFullYear()
    };
    g.getUTCMonth = function () {
        return this.a.getUTCMonth()
    };
    g.getUTCDate = function () {
        return this.a.getUTCDate()
    };
    g.getUTCHours = function () {
        return this.a.getUTCHours()
    };
    g.getUTCMinutes = function () {
        return this.a.getUTCMinutes()
    };
    g.getTimezoneOffset = function () {
        return this.a.getTimezoneOffset()
    };

    function lc(a) {
        a = a.getTimezoneOffset();
        if (0 == a) a = "Z";
        else {
            var b = Math.abs(a) / 60,
                c = Math.floor(b),
                b = 60 * (b - c);
            a = (0 < a ? "-" : "+") + A(c, 2) + ":" + A(b, 2)
        }
        return a
    }
    g.Bc = function (a) {
        if (a.j || a.g) {
            var b = this.getMonth() + a.g + 12 * a.j,
                c = this.getFullYear() + Math.floor(b / 12),
                b = b % 12;
            0 > b && (b += 12);
            var d;
            a: {
                switch (b) {
                case 1:
                    d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                    break a;
                case 5:
                case 8:
                case 10:
                case 3:
                    d = 30;
                    break a
                }
                d = 31
            }
            d = Math.min(d, this.getDate());
            this.a.setDate(1);
            this.a.setFullYear(c);
            this.a.setMonth(b);
            this.a.setDate(d)
        }
        a.a && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12))
                .getTime() + 864E5 * a.a), this.a.setDate(1), this.a.setFullYear(a.getFullYear()), this.a.setMonth(a.getMonth()),
            this.a.setDate(a.getDate()), kc(this, a.getDate()))
    };
    g.Cc = function (a, b) {
        return [this.getFullYear(), A(this.getMonth() + 1, 2), A(this.getDate(), 2)].join(a ? "-" : "") + (b ? lc(this) : "")
    };
    g.toString = function () {
        return this.Cc()
    };

    function kc(a, b) {
        a.getDate() != b && a.a.setUTCHours(a.a.getUTCHours() + (a.getDate() < b ? 1 : -1))
    }
    g.valueOf = function () {
        return this.a.valueOf()
    };

    function mc(a, b, c, d, e, f, h) {
        this.a = ha(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, h || 0) : new Date(a && a.getTime ? a.getTime() : ra())
    }
    v(mc, ic);
    g = mc.prototype;
    g.getHours = function () {
        return this.a.getHours()
    };
    g.getMinutes = function () {
        return this.a.getMinutes()
    };
    g.getSeconds = function () {
        return this.a.getSeconds()
    };
    g.getUTCHours = function () {
        return this.a.getUTCHours()
    };
    g.getUTCMinutes = function () {
        return this.a.getUTCMinutes()
    };
    g.Bc = function (a) {
        ic.prototype.Bc.call(this, a);
        a.b && this.a.setUTCHours(this.a.getUTCHours() + a.b);
        a.c && this.a.setUTCMinutes(this.a.getUTCMinutes() + a.c);
        a.h && this.a.setUTCSeconds(this.a.getUTCSeconds() + a.h)
    };
    g.Cc = function (a, b) {
        var c = ic.prototype.Cc.call(this, a);
        return a ? c + " " + A(this.getHours(), 2) + ":" + A(this.getMinutes(), 2) + ":" + A(this.getSeconds(), 2) + (b ? lc(this) : "") : c + "T" + A(this.getHours(), 2) + A(this.getMinutes(), 2) + A(this.getSeconds(), 2) + (b ? lc(this) : "")
    };
    g.toString = function () {
        return this.Cc()
    };
    g.clone = function () {
        var a = new mc(this.a);
        a.wc = this.wc;
        a.xc = this.xc;
        return a
    };

    function nc(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return u(a) && a.match(/\S+/g) || []
    }

    function oc(a, b) {
        return a.classList ? a.classList.contains(b) : Tb(nc(a), b)
    }

    function pc(a, b) {
        a.classList ? a.classList.add(b) : oc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }

    function qc(a, b) {
        if (a.classList) Nb(b, function (b) {
            pc(a, b)
        });
        else {
            var c = {};
            Nb(nc(a), function (a) {
                c[a] = !0
            });
            Nb(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    }

    function rc(a, b) {
        a.classList ? a.classList.remove(b) : oc(a, b) && (a.className = Ob(nc(a), function (a) {
                return a != b
            })
            .join(" "))
    }

    function sc(a, b) {
        a.classList ? Nb(b, function (b) {
                rc(a, b)
            }) : a.className = Ob(nc(a), function (a) {
                return !Tb(b, a)
            })
            .join(" ")
    }

    function uc(a, b, c) {
        c ? pc(a, b) : rc(a, b)
    };

    function vc(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }

    function wc(a, b, c, d, e, f) {
        var h = b.toString();
        b = a.a[h];
        b || (b = a.a[h] = [], a.b++);
        var k = xc(b, c, e, f); - 1 < k ? (a = b[k], d || (a.sc = !1)) : (a = new Ka(c, a.src, h, !!e, f), a.sc = d, b.push(a));
        return a
    }

    function yc(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Ub(a.a[c], b);
        d && (La(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    }

    function zc(a) {
        var b = 0,
            c;
        for (c in a.a) {
            for (var d = a.a[c], e = 0; e < d.length; e++) ++b, La(d[e]);
            delete a.a[c];
            a.b--
        }
    }

    function Ac(a, b, c, d, e) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = xc(a, c, d, e));
        return -1 < b ? a[b] : null
    }

    function xc(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Zb && f.listener == b && f.tc == !!c && f.Oc == d) return e
        }
        return -1
    };

    function Bc() {}

    function Cc(a) {
        if ("number" == typeof a) {
            var b = new Bc;
            b.c = a;
            var c;
            c = a;
            if (0 == c) c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", A(c, 2));
                c = d.join("")
            }
            b.g = c;
            c = a;
            0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
            a = Dc(a);
            b.h = [c, c];
            b.a = {
                Ci: a,
                ce: a
            };
            b.b = [];
            return b
        }
        b = new Bc;
        b.g = a.id;
        b.c = -a.std_offset;
        b.h = a.names;
        b.a = a.names_ext;
        b.b = a.transitions;
        return b
    }

    function Dc(a) {
        var b = ["GMT"];
        b.push(0 >= a ? "+" : "-");
        a = Math.abs(a);
        b.push(A(Math.floor(a / 60) % 100, 2), ":", A(a % 60, 2));
        return b.join("")
    }

    function Ec(a, b) {
        for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.b.length && c >= a.b[d];) d += 2;
        return 0 == d ? 0 : a.b[d - 1]
    };

    function Fc() {
        this.b = [];
        this.a = Na;
        Gc(this, 2)
    }
    var Hc = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/];

    function Ic(a) {
        return a.getHours ? a.getHours() : 0
    }

    function Gc(a, b) {
        var c;
        if (4 > b) c = a.a.$d[b];
        else if (8 > b) c = a.a.de[b - 4];
        else if (12 > b) c = a.a.Bf[b - 8], c = c.replace("{1}", a.a.$d[b - 8]), c = c.replace("{0}", a.a.de[b - 8]);
        else {
            Gc(a, 10);
            return
        }
        for (Jc && (c = c.replace(/\u200f/g, "")); c;)
            for (var d = 0; d < Hc.length; ++d) {
                var e = c.match(Hc[d]);
                if (e) {
                    e = e[0];
                    c = c.substring(e.length);
                    0 == d && ("''" == e ? e = "'" : (e = e.substring(1, e.length - 1), e = e.replace(/\'\'/, "'")));
                    a.b.push({
                        text: e,
                        type: d
                    });
                    break
                }
            }
    }

    function Kc(a, b) {
        var c;
        c = String(b);
        var d = a.a || Na;
        if (void 0 !== d.Tf) {
            for (var e = [], f = 0; f < c.length; f++) {
                var h = c.charCodeAt(f);
                e.push(48 <= h && 57 >= h ? String.fromCharCode(d.Tf + h - 48) : c.charAt(f))
            }
            c = e.join("")
        }
        return c
    }
    var Jc = !1;

    function Lc(a) {
        if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
    }

    function Mc(a, b, c, d, e) {
        var f = b.length;
        switch (b.charAt(0)) {
        case "G":
            return c = 0 < d.getFullYear() ? 1 : 0, 4 <= f ? a.a.Df[c] : a.a.Ef[c];
        case "y":
            return c = d.getFullYear(), 0 > c && (c = -c), 2 == f && (c %= 100), Kc(a, A(c, f));
        case "M":
            a: switch (c = d.getMonth(), f) {
            case 5:
                f = a.a.Gf[c];
                break a;
            case 4:
                f = a.a.Ff[c];
                break a;
            case 3:
                f = a.a.If[c];
                break a;
            default:
                f = Kc(a, A(c + 1, f))
            }
            return f;
        case "k":
            return Lc(e), Kc(a, A(Ic(e) || 24, f));
        case "S":
            return Kc(a, (e.getTime() % 1E3 / 1E3)
                .toFixed(Math.min(3, f))
                .substr(2) + (3 < f ? A(0, f - 3) : ""));
        case "E":
            return c =
                d.getDay(), 4 <= f ? a.a.Sf[c] : a.a.Kf[c];
        case "a":
            return Lc(e), f = Ic(e), a.a.Af[12 <= f && 24 > f ? 1 : 0];
        case "h":
            return Lc(e), Kc(a, A(Ic(e) % 12 || 12, f));
        case "K":
            return Lc(e), Kc(a, A(Ic(e) % 12, f));
        case "H":
            return Lc(e), Kc(a, A(Ic(e), f));
        case "c":
            a: switch (c = d.getDay(), f) {
            case 5:
                f = a.a.Nf[c];
                break a;
            case 4:
                f = a.a.Qf[c];
                break a;
            case 3:
                f = a.a.Pf[c];
                break a;
            default:
                f = Kc(a, A(c, 1))
            }
            return f;
        case "L":
            a: switch (c = d.getMonth(), f) {
            case 5:
                f = a.a.Mf[c];
                break a;
            case 4:
                f = a.a.Lf[c];
                break a;
            case 3:
                f = a.a.Of[c];
                break a;
            default:
                f = Kc(a, A(c + 1,
                    f))
            }
            return f;
        case "Q":
            return c = Math.floor(d.getMonth() / 3), 4 > f ? a.a.Jf[c] : a.a.Hf[c];
        case "d":
            return Kc(a, A(d.getDate(), f));
        case "m":
            return Lc(e), Kc(a, A(e.getMinutes(), f));
        case "s":
            return Lc(e), Kc(a, A(e.getSeconds(), f));
        case "v":
            return f = Cc(c.getTimezoneOffset()), f.g;
        case "V":
            return a = Cc(c.getTimezoneOffset()), 2 >= f ? a.g : 0 < Ec(a, c) ? q(a.a.Cf) ? a.a.Cf : a.a.DST_GENERIC_LOCATION : q(a.a.ce) ? a.a.ce : a.a.STD_GENERIC_LOCATION;
        case "w":
            return c = a.a.be, e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), b = a.a.ae || 0,
                c = e.valueOf() + 864E5 * (((q(c) ? c : 3) - b + 7) % 7 - ((e.getDay() + 6) % 7 - b + 7) % 7), Kc(a, A(Math.floor(Math.round((c - (new Date((new Date(c))
                        .getFullYear(), 0, 1))
                    .valueOf()) / 864E5) / 7) + 1, f));
        case "z":
            return a = Cc(c.getTimezoneOffset()), 4 > f ? a.h[0 < Ec(a, c) ? 2 : 0] : a.h[0 < Ec(a, c) ? 3 : 1];
        case "Z":
            return e = Cc(c.getTimezoneOffset()), 4 > f ? (f = -(e.c - Ec(e, c)), a = [0 > f ? "-" : "+"], f = Math.abs(f), a.push(A(Math.floor(f / 60) % 100, 2), A(f % 60, 2)), f = a.join("")) : f = Kc(a, Dc(e.c - Ec(e, c))), f;
        default:
            return ""
        }
    };
    var Nc;
    a: {
        var Oc = n.navigator;
        if (Oc) {
            var Pc = Oc.userAgent;
            if (Pc) {
                Nc = Pc;
                break a
            }
        }
        Nc = ""
    }

    function B(a) {
        return -1 != Nc.indexOf(a)
    };

    function Qc() {
        return B("Opera") || B("OPR")
    };

    function Rc() {
        return B("iPhone") && !B("iPod") && !B("iPad")
    };
    var Sc = Math.sign || function (a) {
        return 0 < a ? 1 : 0 > a ? -1 : a
    };
    var Tc = "StopIteration" in n ? n.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Uc() {}
    Uc.prototype.next = function () {
        throw Tc;
    };
    Uc.prototype.ac = function () {
        return this
    };

    function Vc(a) {
        if (a instanceof Uc) return a;
        if ("function" == typeof a.ac) return a.ac(!1);
        if (ga(a)) {
            var b = 0,
                c = new Uc;
            c.next = function () {
                for (;;) {
                    if (b >= a.length) throw Tc;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Wc(a, b) {
        if (ga(a)) try {
            Nb(a, b, void 0)
        } catch (c) {
            if (c !== Tc) throw c;
        } else {
            a = Vc(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Tc) throw c;
            }
        }
    }

    function Xc(a) {
        if (ga(a)) return Wb(a);
        a = Vc(a);
        var b = [];
        Wc(a, function (a) {
            b.push(a)
        });
        return b
    };

    function C(a, b) {
        this.x = q(a) ? a : 0;
        this.y = q(b) ? b : 0
    }
    g = C.prototype;
    g.clone = function () {
        return new C(this.x, this.y)
    };
    g.toString = function () {
        return "(" + this.x + ", " + this.y + ")"
    };

    function Yc(a, b) {
        return new C(a.x - b.x, a.y - b.y)
    }
    g.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    g.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    g.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Zc(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    g = Zc.prototype;
    g.clone = function () {
        return new Zc(this.top, this.right, this.bottom, this.left)
    };
    g.toString = function () {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    g.contains = function (a) {
        return this && a ? a instanceof Zc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    g.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    g.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    g.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function $c(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    g = $c.prototype;
    g.clone = function () {
        return new $c(this.left, this.top, this.width, this.height)
    };
    g.toString = function () {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    };
    g.contains = function (a) {
        return a instanceof $c ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    g.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var ad;

    function bd() {}
    v(bd, Xa);

    function cd(a) {
        return (a = Za(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function Za(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    ad = new bd;

    function dd() {}
    v(dd, pb);
    dd.prototype.clear = function () {
        var a = Xc(this.ac(!0)),
            b = this;
        Nb(a, function (a) {
            b.a.removeItem(a)
        })
    };

    function ed(a) {
        this.a = a
    }
    v(ed, dd);
    ed.prototype.ac = function (a) {
        var b = 0,
            c = this.a,
            d = new Uc;
        d.next = function () {
            if (b >= c.length) throw Tc;
            var d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!u(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    ed.prototype.clear = function () {
        this.a.clear()
    };
    ed.prototype.key = function (a) {
        return this.a.key(a)
    };

    function fd() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.a = a
    }
    v(fd, ed);

    function gd(a, b) {
        var c = Array.prototype.slice.call(arguments),
            d = c.shift();
        if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, k, l, p, m, r) {
            if ("%" == p) return "%";
            var t = c.shift();
            if ("undefined" == typeof t) throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = t;
            return hd[p].apply(null, arguments)
        })
    }
    var hd = {
        s: function (a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Gb(" ", Number(c) - a.length) : Gb(" ", Number(c) - a.length) + a
        },
        f: function (a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a)
                .toFixed(e));
            var f;
            f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c)) return d;
            d = isNaN(e) ? Math.abs(Number(a))
                .toString() : Math.abs(Number(a))
                .toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ?
                f + d + Gb(" ", a) : f + Gb(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function (a, b, c, d, e, f, h, k) {
            return hd.f(parseInt(a, 10), b, c, d, 0, f, h, k)
        }
    };
    hd.i = hd.d;
    hd.u = hd.d;

    function id() {
        this.a = "";
        this.b = jd
    }
    id.prototype.Ze = !0;
    id.prototype.De = function () {
        return this.a
    };
    id.prototype.toString = function () {
        return "SafeUrl{" + this.a + "}"
    };

    function kd(a) {
        if (a instanceof id && a.constructor === id && a.b === jd) return a.a;
        Lb("expected object of type SafeUrl, got '" + a + "' of type " + ea(a));
        return "type_error:SafeUrl"
    }
    var ld = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;

    function md(a) {
        if (a instanceof id) return a;
        a = a.Ze ? a.De() : String(a);
        ld.test(a) || (a = "about:invalid#zClosurez");
        return nd(a)
    }
    var jd = {};

    function nd(a) {
        var b = new id;
        b.a = a;
        return b
    }
    nd("about:blank");

    function od() {
        this.a = "";
        this.b = pd
    }
    od.prototype.Ze = !0;
    od.prototype.De = function () {
        return this.a
    };
    od.prototype.toString = function () {
        return "SafeHtml{" + this.a + "}"
    };

    function qd(a) {
        if (a instanceof od && a.constructor === od && a.b === pd) return a.a;
        Lb("expected object of type SafeHtml, got '" + a + "' of type " + ea(a));
        return "type_error:SafeHtml"
    }
    var pd = {};

    function rd(a) {
        var b = new od;
        b.a = a;
        return b
    }
    rd("<!DOCTYPE html>");
    var sd = rd("");
    rd("<br>");

    function td(a, b) {
        this.b = {};
        this.a = [];
        this.g = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.Ua(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof td ? (c = a.jb(), d = a.Da()) : (c = bb(a), d = ab(a));
            for (var e = 0; e < c.length; e++) this.Ua(c[e], d[e])
        }
    }
    g = td.prototype;
    g.Da = function () {
        ud(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    g.jb = function () {
        ud(this);
        return this.a.concat()
    };
    g.clear = function () {
        this.b = {};
        this.g = this.c = this.a.length = 0
    };

    function ud(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                vd(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], vd(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }

    function wd(a, b) {
        return vd(a.b, b) ? a.b[b] : void 0
    }
    g.Ua = function (a, b) {
        vd(this.b, a) || (this.c++, this.a.push(a), this.g++);
        this.b[a] = b
    };
    g.forEach = function (a, b) {
        for (var c = this.jb(), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, wd(this, e), e, this)
        }
    };
    g.clone = function () {
        return new td(this)
    };
    g.ac = function (a) {
        ud(this);
        var b = 0,
            c = this.g,
            d = this,
            e = new Uc;
        e.next = function () {
            if (c != d.g) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw Tc;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };

    function vd(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function xd(a) {
        if (a.Da && "function" == typeof a.Da) return a.Da();
        if (u(a)) return a.split("");
        if (ga(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return ab(a)
    }

    function yd(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (ga(a) || u(a)) Nb(a, b, void 0);
        else {
            var c;
            if (a.jb && "function" == typeof a.jb) c = a.jb();
            else if (a.Da && "function" == typeof a.Da) c = void 0;
            else if (ga(a) || u(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = bb(a);
            for (var d = xd(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };

    function zd() {}
    da(zd);
    zd.prototype.a = 0;

    function Ad(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!ia(b)) throw Error("Invalid decorator function " + b);
        Bd[a] = b
    }
    var Cd = {},
        Bd = {};
    var Dd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function Ed(a, b) {
        if (a)
            for (var c = a.split("&"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("="),
                    f = null,
                    h = null;
                0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
                b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
            }
    }
    var Fd = /#|$/;

    function Gd(a, b) {
        this.c = this.w = this.h = "";
        this.m = null;
        this.j = this.b = "";
        this.g = !1;
        var c;
        a instanceof Gd ? (this.g = q(b) ? b : a.g, Hd(this, a.h), this.w = a.w, this.c = a.c, Id(this, a.m), this.b = a.b, Jd(this, a.a.clone()), this.j = a.j) : a && (c = String(a)
            .match(Dd)) ? (this.g = !!b, Hd(this, c[1] || "", !0), this.w = Kd(c[2] || ""), this.c = Kd(c[3] || "", !0), Id(this, c[4]), this.b = Kd(c[5] || "", !0), Jd(this, c[6] || "", !0), this.j = Kd(c[7] || "")) : (this.g = !!b, this.a = new Ld(null, 0, this.g))
    }
    Gd.prototype.toString = function () {
        var a = [],
            b = this.h;
        b && a.push(Md(b, Nd, !0), ":");
        var c = this.c;
        if (c || "file" == b) a.push("//"), (b = this.w) && a.push(Md(b, Nd, !0), "@"), a.push(z(c)
            .replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
        if (c = this.b) this.c && "/" != c.charAt(0) && a.push("/"), a.push(Md(c, "/" == c.charAt(0) ? Od : Pd, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.j) && a.push("#", Md(c, Qd));
        return a.join("")
    };
    Gd.prototype.clone = function () {
        return new Gd(this)
    };

    function Hd(a, b, c) {
        a.h = c ? Kd(b, !0) : b;
        a.h && (a.h = a.h.replace(/:$/, ""))
    }

    function Id(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.m = b
        } else a.m = null
    }

    function Jd(a, b, c) {
        b instanceof Ld ? (a.a = b, Rd(a.a, a.g)) : (c || (b = Md(b, Sd)), a.a = new Ld(b, 0, a.g))
    }

    function Td(a, b, c) {
        a = a.a;
        Ud(a);
        a.c = null;
        b = Vd(a, b);
        Wd(a, b) && (a.b = a.b - wd(a.a, b)
            .length);
        a.a.Ua(b, [c]);
        a.b = a.b + 1
    }

    function D(a, b) {
        var c = b ? a.a.Da(b) : [];
        return 0 < c.length ? String(c[0]) : void 0
    }

    function Xd(a, b) {
        return a instanceof Gd ? a.clone() : new Gd(a, b)
    }

    function Kd(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function Md(a, b, c) {
        return u(a) ? (a = encodeURI(a)
            .replace(b, Yd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Yd(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15)
            .toString(16) + (a & 15)
            .toString(16)
    }
    var Nd = /[#\/\?@]/g,
        Pd = /[\#\?:]/g,
        Od = /[\#\?]/g,
        Sd = /[\#\?@]/g,
        Qd = /#/g;

    function Ld(a, b, c) {
        this.b = this.a = null;
        this.c = a || null;
        this.g = !!c
    }

    function Ud(a) {
        a.a || (a.a = new td, a.b = 0, a.c && Ed(a.c, function (b, c) {
            var d = decodeURIComponent(b.replace(/\+/g, " "));
            Ud(a);
            a.c = null;
            var d = Vd(a, d),
                e = wd(a.a, d);
            e || a.a.Ua(d, e = []);
            e.push(c);
            a.b = a.b + 1
        }))
    }

    function Zd(a, b) {
        Ud(a);
        b = Vd(a, b);
        if (vd(a.a.b, b)) {
            a.c = null;
            a.b = a.b - wd(a.a, b)
                .length;
            var c = a.a;
            vd(c.b, b) && (delete c.b[b], c.c--, c.g++, c.a.length > 2 * c.c && ud(c))
        }
    }
    g = Ld.prototype;
    g.clear = function () {
        this.a = this.c = null;
        this.b = 0
    };

    function Wd(a, b) {
        Ud(a);
        b = Vd(a, b);
        return vd(a.a.b, b)
    }
    g.jb = function () {
        Ud(this);
        for (var a = this.a.Da(), b = this.a.jb(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.Da = function (a) {
        Ud(this);
        var b = [];
        if (u(a)) Wd(this, a) && (b = Vb(b, wd(this.a, Vd(this, a))));
        else {
            a = this.a.Da();
            for (var c = 0; c < a.length; c++) b = Vb(b, a[c])
        }
        return b
    };
    g.toString = function () {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.jb(), c = 0; c < b.length; c++)
            for (var d = b[c], e = z(d), d = this.Da(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + z(d[f]));
                a.push(h)
            }
        return this.c = a.join("&")
    };
    g.clone = function () {
        var a = new Ld;
        a.c = this.c;
        this.a && (a.a = this.a.clone(), a.b = this.b);
        return a
    };

    function Vd(a, b) {
        var c = String(b);
        a.g && (c = c.toLowerCase());
        return c
    }

    function Rd(a, b) {
        b && !a.g && (Ud(a), a.c = null, a.a.forEach(function (a, b) {
            var e = b.toLowerCase();
            b != e && (Zd(this, b), Zd(this, e), 0 < a.length && (this.c = null, this.a.Ua(Vd(this, e), Wb(a)), this.b = this.b + a.length))
        }, a));
        a.g = b
    };
    var $d = Qc(),
        F = B("Trident") || B("MSIE"),
        ae = B("Edge"),
        be = ae || F,
        ce = B("Gecko") && !(-1 != Nc.toLowerCase()
            .indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
        G = -1 != Nc.toLowerCase()
        .indexOf("webkit") && !B("Edge"),
        de = B("Macintosh"),
        ee = B("Windows"),
        fe = B("Linux") || B("CrOS");

    function ge() {
        var a = n.document;
        return a ? a.documentMode : void 0
    }
    var he;
    a: {
        var ie = "",
            je = function () {
                var a = Nc;
                if (ce) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (ae) return /Edge\/([\d\.]+)/.exec(a);
                if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (G) return /WebKit\/(\S+)/.exec(a);
                if ($d) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();je && (ie = je ? je[1] : "");
        if (F) {
            var ke = ge();
            if (null != ke && ke > parseFloat(ie)) {
                he = String(ke);
                break a
            }
        }
        he = ie
    }
    var le = {};

    function H(a) {
        var b;
        if (!(b = le[a])) {
            b = 0;
            for (var c = xb(String(he))
                    .split("."), d = xb(String(a))
                    .split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var h = c[f] || "",
                    k = d[f] || "",
                    l = RegExp("(\\d*)(\\D*)", "g"),
                    p = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var m = l.exec(h) || ["", "", ""],
                        r = p.exec(k) || ["", "", ""];
                    if (0 == m[0].length && 0 == r[0].length) break;
                    b = Hb(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || Hb(0 == m[2].length, 0 == r[2].length) || Hb(m[2], r[2])
                } while (0 == b)
            }
            b = le[a] = 0 <= b
        }
        return b
    }

    function me(a) {
        return Number(ne) >= a
    }
    var oe = n.document,
        ne = oe && F ? ge() || ("CSS1Compat" == oe.compatMode ? parseInt(he, 10) : 5) : void 0;

    function pe(a) {
        this.g = a;
        this.b = this.c = this.a = null
    }

    function qe(a, b) {
        this.name = a;
        this.value = b
    }
    qe.prototype.toString = function () {
        return this.name
    };
    var re = new qe("SEVERE", 1E3),
        se = new qe("CONFIG", 700),
        te = new qe("FINE", 500);

    function ue(a) {
        if (a.c) return a.c;
        if (a.a) return ue(a.a);
        Lb("Root logger has no level set.");
        return null
    }
    pe.prototype.log = function (a, b, c) {
        if (a.value >= ue(this)
            .value)
            for (ia(b) && (b = b()), a = new wa(a, String(b), this.g), c && (a.a = c), c = "log:" + a.b, n.console && (n.console.timeStamp ? n.console.timeStamp(c) : n.console.markTimeline && n.console.markTimeline(c)), n.msWriteProfilerMark && n.msWriteProfilerMark(c), c = this; c;) c = c.a
    };
    var ve = {},
        we = null;

    function xe(a) {
        we || (we = new pe(""), ve[""] = we, we.c = se);
        var b;
        if (!(b = ve[a])) {
            b = new pe(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1),
                c = xe(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            ve[a] = b
        }
        return b
    };
    var ye = !F || me(9),
        ze = !ce && !F || F && me(9) || ce && H("1.9.1"),
        Ae = F && !H("9");

    function Be(a) {
        return a ? new Ce(De(a)) : Ea || (Ea = new Ce)
    }

    function Ee(a, b) {
        return u(b) ? a.getElementById(b) : b
    }

    function Fe(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++) b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++) b = h.className, "function" == typeof b.split && Tb(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }

    function Ge(a, b) {
        $a(b, function (b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : He.hasOwnProperty(d) ? a.setAttribute(He[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var He = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Ie(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Va(a.clientWidth, a.clientHeight)
    }

    function Je(a) {
        return a.scrollingElement ? a.scrollingElement : G || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }

    function Ke(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Le(a, b, c) {
        return Me(document, arguments)
    }

    function Me(a, b) {
        var c = b[0],
            d = b[1];
        if (!ye && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', yb(d.name), '"');
            if (d.type) {
                c.push(' type="', yb(d.type), '"');
                var e = {};
                jb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (u(d) ? c.className = d : fa(d) ? c.className = d.join(" ") : Ge(c, d));
        2 < b.length && Ne(a, c, b, 2);
        return c
    }

    function Ne(a, b, c, d) {
        function e(c) {
            c && b.appendChild(u(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !ga(f) || ja(f) && 0 < f.nodeType ? e(f) : Nb(Oe(f) ? Wb(f) : f, e)
        }
    }

    function Pe(a, b) {
        Ne(De(a), a, arguments, 1)
    }

    function Qe(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function Re(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Se(a) {
        if (q(a.firstElementChild)) a = a.firstElementChild;
        else
            for (a = a.firstChild; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    }

    function Te(a) {
        return ja(a) && 1 == a.nodeType
    }

    function Ue(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function De(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Ve(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else Qe(a), a.appendChild(De(a)
            .createTextNode(String(b)))
    }
    var We = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Xe = {
            IMG: " ",
            BR: "\n"
        };

    function Ye(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }

    function Ze(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }

    function $e(a) {
        a = a.tabIndex;
        return ha(a) && 0 <= a && 32768 > a
    }

    function af(a) {
        if (Ae && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            bf(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ")
            .replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Ae || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function cf(a) {
        var b = [];
        bf(a, b, !1);
        return b.join("")
    }

    function bf(a, b, c) {
        if (!(a.nodeName in We))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue)
                .replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Xe) b.push(Xe[a.nodeName]);
        else
            for (a = a.firstChild; a;) bf(a, b, c), a = a.nextSibling
    }

    function Oe(a) {
        if (a && "number" == typeof a.length) {
            if (ja(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (ia(a)) return "function" == typeof a.item
        }
        return !1
    }

    function Ce(a) {
        this.a = a || n.document || document
    }
    g = Ce.prototype;
    g.l = function (a) {
        return Ee(this.a, a)
    };
    g.F = function (a, b, c) {
        return Me(this.a, arguments)
    };

    function df(a, b) {
        return a.a.createElement(b)
    }

    function ef(a) {
        return "CSS1Compat" == a.a.compatMode
    }

    function ff(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    }

    function gf(a) {
        var b = a.a;
        a = Je(b);
        b = b.parentWindow || b.defaultView;
        return F && H("10") && b.pageYOffset != a.scrollTop ? new C(a.scrollLeft, a.scrollTop) : new C(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }
    g.Fg = function (a, b) {
        a.appendChild(b)
    };
    g.xd = Qe;
    g.Ee = Re;

    function hf(a) {
        return ze && void 0 != a.children ? a.children : Ob(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    }
    g.Be = Se;
    g.contains = Ue;
    g.Fe = Ve;

    function jf(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }

    function I(a, b, c) {
        fa(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (ua || (ua = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = ua, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }

    function kf(a, b) {
        var c = a.getAttribute("aria-" + b);
        return null == c || void 0 == c ? "" : String(c)
    }

    function lf(a, b) {
        var c = "";
        b && (c = b.id);
        I(a, "activedescendant", c)
    };
    var mf = F ? 'javascript:""' : "about:blank";
    var nf = !F || me(9),
        of = !F || me(9),
        pf = F && !H("9");
    !G || H("528");
    ce && H("1.9b") || F && H("8") || $d && H("9.5") || G && H("528");
    ce && !H("8") || F && H("9");

    function qf(a, b) {
        Fa.call(this, a ? a.type : "");
        this.K = this.j = this.target = null;
        this.keyCode = this.m = this.clientY = this.clientX = this.a = this.c = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.I = !1;
        this.g = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.j = b;
            var e = a.relatedTarget;
            e ? ce && (ob(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
            this.K = e;
            null === d ? (this.c = G || void 0 !==
                a.offsetX ? a.offsetX : a.layerX, this.a = G || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY);
            this.m = a.button;
            this.keyCode = a.keyCode || 0;
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.I = de ? a.metaKey : a.ctrlKey;
            this.state = a.state;
            this.g = a;
            a.defaultPrevented && this.b()
        }
    }
    v(qf, Fa);
    var rf = [1, 4, 2];

    function sf(a) {
        return (nf ? 0 == a.g.button : "click" == a.type ? !0 : !!(a.g.button & rf[0])) && !(G && de && a.ctrlKey)
    }
    qf.prototype.h = function () {
        qf.A.h.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    qf.prototype.b = function () {
        qf.A.b.call(this);
        var a = this.g;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, pf) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var tf = "closure_lm_" + (1E6 * Math.random() | 0),
        uf = {},
        vf = 0;

    function J(a, b, c, d, e) {
        if (fa(b)) {
            for (var f = 0; f < b.length; f++) J(a, b[f], c, d, e);
            return null
        }
        c = wf(c);
        return Ia(a) ? a.J(b, c, d, e) : xf(a, b, c, !1, d, e)
    }

    function xf(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = !!e,
            k = yf(a);
        k || (a[tf] = k = new vc(a));
        c = wc(k, b, c, d, e, f);
        if (c.a) return c;
        d = zf();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, h);
        else if (a.attachEvent) a.attachEvent(Af(b.toString()), d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        vf++;
        return c
    }

    function zf() {
        var a = Bf,
            b = of ? function (c) {
                return a.call(b.src, b.listener, c)
            } : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function Cf(a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++) Cf(a, b[f], c, d, e);
        else c = wf(c), Ia(a) ? wc(a.Ta, String(b), c, !0, d, e) : xf(a, b, c, !0, d, e)
    }

    function Df(a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++) Df(a, b[f], c, d, e);
        else c = wf(c), Ia(a) ? a.da(b, c, d, e) : a && (a = yf(a)) && (b = Ac(a, b, c, !!d, e)) && Ef(b)
    }

    function Ef(a) {
        if (ha(a) || !a || a.Zb) return !1;
        var b = a.src;
        if (Ia(b)) return yc(b.Ta, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.tc) : b.detachEvent && b.detachEvent(Af(c), d);
        vf--;
        (c = yf(b)) ? (yc(c, a), 0 == c.b && (c.src = null, b[tf] = null)) : La(a);
        return !0
    }

    function Ff(a) {
        if (a)
            if (Ia(a)) a.Ta && zc(a.Ta);
            else if (a = yf(a)) {
            var b = 0,
                c;
            for (c in a.a)
                for (var d = a.a[c].concat(), e = 0; e < d.length; ++e) Ef(d[e]) && ++b
        }
    }

    function Af(a) {
        return a in uf ? uf[a] : uf[a] = "on" + a
    }

    function Gf(a, b, c, d) {
        var e = !0;
        if (a = yf(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.tc == c && !f.Zb && (f = Hf(f, d), e = e && !1 !== f)
                }
        return e
    }

    function Hf(a, b) {
        var c = a.listener,
            d = a.Oc || a.src;
        a.sc && Ef(a);
        return c.call(d, b)
    }

    function Bf(a, b) {
        if (a.Zb) return !0;
        if (!of) {
            var c;
            if (!(c = b)) a: {
                c = ["window", "event"];
                for (var d = n, e; e = c.shift();)
                    if (null != d[e]) d = d[e];
                    else {
                        c = null;
                        break a
                    }
                c = d
            }
            e = c;
            c = new qf(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (l) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.j; f; f = f.parentNode) e.push(f);
                for (var f = a.type, h = e.length - 1; !c.w && 0 <= h; h--) {
                    c.j = e[h];
                    var k = Gf(e[h], f, !0, c),
                        d = d && k
                }
                for (h = 0; !c.w && h < e.length; h++) c.j = e[h],
                k = Gf(e[h],
                    f, !1, c),
                d = d && k
            }
            return d
        }
        return Hf(a, new qf(b, this))
    }

    function yf(a) {
        a = a[tf];
        return a instanceof vc ? a : null
    }
    var If = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function wf(a) {
        if (ia(a)) return a;
        a[If] || (a[If] = function (b) {
            return a.handleEvent(b)
        });
        return a[If]
    };

    function Jf(a) {
        ya.call(this);
        this.b = a;
        this.a = {}
    }
    v(Jf, ya);
    var Kf = [];
    Jf.prototype.J = function (a, b, c, d) {
        fa(b) || (b && (Kf[0] = b.toString()), b = Kf);
        for (var e = 0; e < b.length; e++) {
            var f = J(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f) break;
            this.a[f.key] = f
        }
        return this
    };
    Jf.prototype.da = function (a, b, c, d, e) {
        if (fa(b))
            for (var f = 0; f < b.length; f++) this.da(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.b || this, c = wf(c), d = !!d, b = Ia(a) ? Ac(a.Ta, String(b), c, d, e) : a ? (a = yf(a)) ? Ac(a, b, c, d, e) : null : null, b && (Ef(b), delete this.a[b.key]);
        return this
    };

    function Lf(a) {
        $a(a.a, function (a, c) {
            this.a.hasOwnProperty(c) && Ef(a)
        }, a);
        a.a = {}
    }
    Jf.prototype.M = function () {
        Jf.A.M.call(this);
        Lf(this)
    };
    Jf.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function K() {
        ya.call(this);
        this.Ta = new vc(this);
        this.Th = this;
        this.gd = null
    }
    v(K, ya);
    K.prototype[Ha] = !0;
    g = K.prototype;
    g.Sb = function () {
        return this.gd
    };
    g.Td = function (a) {
        this.gd = a
    };
    g.removeEventListener = function (a, b, c, d) {
        Df(this, a, b, c, d)
    };

    function L(a, b) {
        var c, d = a.Sb();
        if (d)
            for (c = []; d; d = d.Sb()) c.push(d);
        var d = a.Th,
            e = b,
            f = e.type || e;
        if (u(e)) e = new Fa(e, d);
        else if (e instanceof Fa) e.target = e.target || d;
        else {
            var h = e,
                e = new Fa(f, d);
            jb(e, h)
        }
        var h = !0,
            k;
        if (c)
            for (var l = c.length - 1; !e.w && 0 <= l; l--) k = e.j = c[l], h = Mf(k, f, !0, e) && h;
        e.w || (k = e.j = d, h = Mf(k, f, !0, e) && h, e.w || (h = Mf(k, f, !1, e) && h));
        if (c)
            for (l = 0; !e.w && l < c.length; l++) k = e.j = c[l], h = Mf(k, f, !1, e) && h;
        return h
    }
    g.M = function () {
        K.A.M.call(this);
        this.Ta && zc(this.Ta);
        this.gd = null
    };
    g.J = function (a, b, c, d) {
        return wc(this.Ta, String(a), b, !1, c, d)
    };
    g.da = function (a, b, c, d) {
        var e;
        e = this.Ta;
        a = String(a)
            .toString();
        if (a in e.a) {
            var f = e.a[a];
            b = xc(f, b, c, d); - 1 < b ? (La(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
        } else e = !1;
        return e
    };

    function Mf(a, b, c, d) {
        b = a.Ta.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.Zb && h.tc == c) {
                var k = h.listener,
                    l = h.Oc || h.src;
                h.sc && yc(a.Ta, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.tf
    };

    function Nf(a) {
        K.call(this);
        this.a = a || window;
        this.c = J(this.a, "resize", this.g, !1, this);
        this.b = Ie(this.a || window)
    }
    v(Nf, K);
    Nf.prototype.M = function () {
        Nf.A.M.call(this);
        this.c && (Ef(this.c), this.c = null);
        this.b = this.a = null
    };
    Nf.prototype.g = function () {
        var a = Ie(this.a || window);
        Wa(a, this.b) || (this.b = a, L(this, "resize"))
    };

    function Of(a) {
        K.call(this);
        this.D = a;
        a = F ? "focusout" : "blur";
        this.a = J(this.D, F ? "focusin" : "focus", this, !F);
        this.b = J(this.D, a, this, !F)
    }
    v(Of, K);
    Of.prototype.handleEvent = function (a) {
        var b = new qf(a.g);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        L(this, b)
    };
    Of.prototype.M = function () {
        Of.A.M.call(this);
        Ef(this.a);
        Ef(this.b);
        delete this.D
    };

    function Pf(a, b, c, d, e) {
        if (!(F || ae || G && H("525"))) return !0;
        if (de && e) return Qf(a);
        if (e && !d) return !1;
        ha(b) && (b = Rf(b));
        if (!c && (17 == b || 18 == b || de && 91 == b)) return !1;
        if ((G || ae) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
        }
        if (F && d && b == a) return !1;
        switch (a) {
        case 13:
            return !0;
        case 27:
            return !(G || ae)
        }
        return Qf(a)
    }

    function Qf(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (G || ae) && 0 == a) return !0;
        switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    }

    function Rf(a) {
        if (ce) a = Sf(a);
        else if (de && G) a: switch (a) {
        case 93:
            a = 91;
            break a
        }
        return a
    }

    function Sf(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };

    function Tf(a, b) {
        K.call(this);
        a && Uf(this, a, b)
    }
    v(Tf, K);
    g = Tf.prototype;
    g.D = null;
    g.Rc = null;
    g.Kd = null;
    g.Sc = null;
    g.Xa = -1;
    g.Gb = -1;
    g.ed = !1;
    var Vf = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Wf = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Xf = F || ae || G && H("525"),
        Yf = de && ce;
    g = Tf.prototype;
    g.Gg = function (a) {
        if (G || ae)
            if (17 == this.Xa && !a.ctrlKey || 18 == this.Xa && !a.altKey || de && 91 == this.Xa && !a.metaKey) this.Gb = this.Xa = -1; - 1 == this.Xa && (a.ctrlKey && 17 != a.keyCode ? this.Xa = 17 : a.altKey && 18 != a.keyCode ? this.Xa = 18 : a.metaKey && 91 != a.keyCode && (this.Xa = 91));
        Xf && !Pf(a.keyCode, this.Xa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Gb = Rf(a.keyCode), Yf && (this.ed = a.altKey))
    };
    g.mh = function (a) {
        this.Gb = this.Xa = -1;
        this.ed = a.altKey
    };
    g.handleEvent = function (a) {
        var b = a.g,
            c, d, e = b.altKey;
        F && "keypress" == a.type ? c = this.Gb : (G || ae) && "keypress" == a.type ? c = this.Gb : $d && !G ? c = this.Gb : (c = b.keyCode || this.Gb, d = b.charCode || 0, Yf && (e = this.ed), de && 63 == d && 224 == c && (c = 191));
        d = c = Rf(c);
        var f = b.keyIdentifier;
        c ? 63232 <= c && c in Vf ? d = Vf[c] : 25 == c && a.shiftKey && (d = 9) : f && f in Wf && (d = Wf[f]);
        this.Xa = d;
        a = new Zf(d, 0, 0, b);
        a.altKey = e;
        L(this, a)
    };
    g.l = function () {
        return this.D
    };

    function Uf(a, b, c) {
        a.Sc && $f(a);
        a.D = b;
        a.Rc = J(a.D, "keypress", a, c);
        a.Kd = J(a.D, "keydown", a.Gg, c, a);
        a.Sc = J(a.D, "keyup", a.mh, c, a)
    }

    function $f(a) {
        a.Rc && (Ef(a.Rc), Ef(a.Kd), Ef(a.Sc), a.Rc = null, a.Kd = null, a.Sc = null);
        a.D = null;
        a.Xa = -1;
        a.Gb = -1
    }
    g.M = function () {
        Tf.A.M.call(this);
        $f(this)
    };

    function Zf(a, b, c, d) {
        qf.call(this, d);
        this.type = "key";
        this.keyCode = a
    }
    v(Zf, qf);

    function ag() {
        K.call(this);
        this.a = bg;
        this.I = this.m = null
    }
    v(ag, K);
    var bg = 0;
    ag.prototype.j = function () {
        this.Ra("begin")
    };
    ag.prototype.g = function () {
        this.Ra("end")
    };
    ag.prototype.Ra = function (a) {
        L(this, a)
    };

    function cg() {
        ag.call(this);
        this.b = []
    }
    v(cg, ag);

    function dg(a, b) {
        Tb(a.b, b) || (a.b.push(b), J(b, "finish", a.h, !1, a))
    }
    cg.prototype.M = function () {
        Nb(this.b, function (a) {
            a.Y()
        });
        this.b.length = 0;
        cg.A.M.call(this)
    };

    function eg() {
        cg.call(this);
        this.c = 0
    }
    v(eg, cg);
    eg.prototype.sb = function (a) {
        if (0 == this.b.length) return !1;
        if (a || this.a == bg) this.c = 0, this.j();
        else if (1 == this.a) return !1;
        this.Ra("play"); - 1 == this.a && this.Ra("resume");
        var b = -1 == this.a && !a;
        this.m = ra();
        this.I = null;
        this.a = 1;
        Nb(this.b, function (c) {
            b && -1 != c.a || c.sb(a)
        });
        return !0
    };
    eg.prototype.kb = function (a) {
        Nb(this.b, function (b) {
            b.a == bg || b.kb(a)
        });
        this.a = bg;
        this.I = ra();
        this.Ra("stop");
        this.g()
    };
    eg.prototype.h = function () {
        this.c++;
        this.c == this.b.length && (this.I = ra(), this.a = bg, this.Ra("finish"), this.g())
    };

    function fg(a, b) {
        a && a.log(te, b, void 0)
    };

    function gg(a, b, c) {
        var d = hg[c];
        if (!d) {
            var e = Ib(c),
                d = e;
            void 0 === a.style[e] && (e = (G ? "Webkit" : ce ? "Moz" : F ? "ms" : $d ? "O" : null) + Jb(e), void 0 !== a.style[e] && (d = e));
            hg[c] = d
        }(c = d) && (a.style[c] = b)
    }
    var hg = {};

    function ig(a, b) {
        var c = De(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }

    function jg(a, b) {
        return ig(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function kg(a) {
        return jg(a, "position")
    }

    function lg(a, b, c) {
        var d;
        b instanceof C ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = mg(d, !1);
        a.style.top = mg(b, !1)
    }

    function ng(a) {
        a = a ? De(a) : document;
        return !F || me(9) || ef(Be(a)) ? a.documentElement : a.body
    }

    function og(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function pg(a) {
        if (F && !me(8)) return a.offsetParent;
        var b = De(a),
            c = jg(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = jg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function qg(a) {
        for (var b = new Zc(0, Infinity, Infinity, 0), c = Be(a), d = c.a.body, e = c.a.documentElement, f = Je(c.a); a = pg(a);)
            if (!(F && 0 == a.clientWidth || G && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != jg(a, "overflow")) {
                var h = rg(a),
                    k = new C(a.clientLeft, a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c =
            Ie(ff(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function rg(a) {
        var b = De(a),
            c = new C(0, 0),
            d = ng(b);
        if (a == d) return c;
        a = og(a);
        b = gf(Be(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function sg(a) {
        a = og(a);
        return new C(a.left, a.top)
    }

    function tg(a) {
        if (1 == a.nodeType) return sg(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new C(a.clientX, a.clientY)
    }

    function ug(a, b, c) {
        if (b instanceof Va) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = mg(b, !0);
        a.style.height = mg(c, !0)
    }

    function mg(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function vg(a, b) {
        if ("none" != jg(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        var h = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return h
    }

    function wg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = G && !b && !c;
        return q(b) && !d || !a.getBoundingClientRect ? new Va(b, c) : (a = og(a), new Va(a.right - a.left, a.bottom - a.top))
    }

    function xg(a) {
        var b = rg(a);
        a = vg(wg, a);
        return new $c(b.x, b.y, a.width, a.height)
    }

    function yg(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    }

    function M(a, b) {
        a.style.display = b ? "" : "none"
    }

    function zg(a) {
        return "rtl" == jg(a, "direction")
    }
    var Ag = ce ? "MozUserSelect" : G || ae ? "WebkitUserSelect" : null;

    function Bg(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (Ag) {
            if (b = b ? "none" : "", a.style && (a.style[Ag] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[Ag] = b)
            }
        } else if (F || $d)
            if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    }

    function Cg(a) {
        return new Va(a.offsetWidth, a.offsetHeight)
    }

    function Dg(a, b) {
        var c = ef(Be(De(a)));
        if (!F || H("10") || c && H("8")) {
            var d = a.style;
            ce ? d.MozBoxSizing = "border-box" : G ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box";
            d.width = Math.max(b.width, 0) + "px";
            d.height = Math.max(b.height, 0) + "px"
        } else if (d = a.style, c) {
            var c = Eg(a, "padding"),
                e = Fg(a);
            d.pixelWidth = b.width - e.left - c.left - c.right - e.right;
            d.pixelHeight = b.height - e.top - c.top - c.bottom - e.bottom
        } else d.pixelWidth = b.width, d.pixelHeight = b.height
    }

    function Gg(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return b
    }

    function Hg(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? Gg(a, c, "left", "pixelLeft") : 0
    }

    function Eg(a, b) {
        if (F) {
            var c = Hg(a, b + "Left"),
                d = Hg(a, b + "Right"),
                e = Hg(a, b + "Top"),
                f = Hg(a, b + "Bottom");
            return new Zc(e, d, f, c)
        }
        c = ig(a, b + "Left");
        d = ig(a, b + "Right");
        e = ig(a, b + "Top");
        f = ig(a, b + "Bottom");
        return new Zc(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
    }
    var Ig = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Jg(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in Ig ? Ig[c] : Gg(a, c, "left", "pixelLeft")
    }

    function Fg(a) {
        if (F && !me(9)) {
            var b = Jg(a, "borderLeft"),
                c = Jg(a, "borderRight"),
                d = Jg(a, "borderTop");
            a = Jg(a, "borderBottom");
            return new Zc(d, c, a, b)
        }
        b = ig(a, "borderLeftWidth");
        c = ig(a, "borderRightWidth");
        d = ig(a, "borderTopWidth");
        a = ig(a, "borderBottomWidth");
        return new Zc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };

    function Kg(a, b) {
        K.call(this);
        this.D = a;
        var c = Te(this.D) ? this.D : this.D ? this.D.body : null;
        c && zg(c);
        this.a = J(this.D, ce ? "DOMMouseScroll" : "mousewheel", this, b)
    }
    v(Kg, K);
    Kg.prototype.handleEvent = function (a) {
        var b = 0,
            c = 0;
        a = a.g;
        if ("mousewheel" == a.type) {
            b = 1;
            if (F || G && (ee || H("532.0"))) b = 40;
            c = Lg(-a.wheelDelta, b);
            b = q(a.wheelDeltaX) ? Lg(-a.wheelDeltaY, b) : c
        } else c = a.detail, 100 < c ? c = 3 : -100 > c && (c = -3), q(a.axis) && a.axis === a.HORIZONTAL_AXIS || (b = c);
        ha(this.b) && (b = Math.min(Math.max(b, -this.b), this.b));
        c = new Mg(c, a, 0, b);
        L(this, c)
    };

    function Lg(a, b) {
        return G && (de || fe) && 0 != a % b ? a : a / b
    }
    Kg.prototype.M = function () {
        Kg.A.M.call(this);
        Ef(this.a);
        this.a = null
    };

    function Mg(a, b, c, d) {
        qf.call(this, b);
        this.type = "mousewheel";
        this.detail = a;
        this.O = d
    }
    v(Mg, qf);

    function Ng(a, b, c) {
        K.call(this);
        this.target = a;
        this.handle = b || a;
        this.m = c || new $c(NaN, NaN, NaN, NaN);
        this.j = De(a);
        this.a = new Jf(this);
        Ba(this, qa(Ca, this.a));
        this.g = this.c = this.C = this.B = this.clientY = this.clientX = 0;
        this.w = !0;
        this.h = this.b = !1;
        J(this.handle, ["touchstart", "mousedown"], this.yd, !1, this)
    }
    v(Ng, K);
    var Og = n.document && n.document.documentElement && !!n.document.documentElement.setCapture;
    g = Ng.prototype;
    g.nb = function (a) {
        this.w = a
    };
    g.M = function () {
        Ng.A.M.call(this);
        Df(this.handle, ["touchstart", "mousedown"], this.yd, !1, this);
        Lf(this.a);
        Og && this.j.releaseCapture();
        this.handle = this.target = null
    };

    function Pg(a) {
        q(a.I) || (a.I = zg(a.target));
        return a.I
    }
    g.yd = function (a) {
        var b = "mousedown" == a.type;
        if (!this.w || this.b || b && !sf(a)) L(this, "earlycancel");
        else if (L(this, new Qg("start", this, a.clientX, a.clientY))) {
            this.b = !0;
            b && a.b();
            var b = this.j,
                c = b.documentElement,
                d = !Og;
            this.a.J(b, ["touchmove", "mousemove"], this.rh, d);
            this.a.J(b, ["touchend", "mouseup"], this.Dc, d);
            Og ? (c.setCapture(!1), this.a.J(c, "losecapture", this.Dc)) : this.a.J(Ke(b), "blur", this.Dc);
            this.O && this.a.J(this.O, "scroll", this.nf, d);
            this.clientX = this.B = a.clientX;
            this.clientY = this.C = a.clientY;
            this.h ?
                (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != kg(a) || (c = De(a)
                    .documentElement), c ? (ce ? (d = Fg(c), b += d.left) : me(8) && !me(9) && (d = Fg(c), b -= d.left), a = zg(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
            this.c = a;
            this.g = this.target.offsetTop;
            this.K = gf(Be(this.j))
        }
    };
    g.Dc = function (a, b) {
        Lf(this.a);
        Og && this.j.releaseCapture();
        this.b ? (this.b = !1, L(this, new Qg("end", this, a.clientX, a.clientY, 0, Rg(this, this.c), Sg(this, this.g), b || "touchcancel" == a.type))) : L(this, "earlycancel")
    };
    g.rh = function (a) {
        if (this.w) {
            var b = (this.h && Pg(this) ? -1 : 1) * (a.clientX - this.clientX),
                c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            if (!this.b) {
                var d = this.B - this.clientX,
                    e = this.C - this.clientY;
                if (0 < d * d + e * e)
                    if (L(this, new Qg("start", this, a.clientX, a.clientY))) this.b = !0;
                    else {
                        this.Ga || this.Dc(a);
                        return
                    }
            }
            c = Tg(this, b, c);
            b = c.x;
            c = c.y;
            this.b && L(this, new Qg("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && (Ug(this, a, b, c), a.b())
        }
    };

    function Tg(a, b, c) {
        var d = gf(Be(a.j));
        b += d.x - a.K.x;
        c += d.y - a.K.y;
        a.K = d;
        a.c += b;
        a.g += c;
        return new C(Rg(a, a.c), Sg(a, a.g))
    }
    g.nf = function (a) {
        var b = Tg(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        Ug(this, a, b.x, b.y)
    };

    function Ug(a, b, c, d) {
        a.qd(c, d);
        L(a, new Qg("drag", a, b.clientX, b.clientY, 0, c, d))
    }

    function Rg(a, b) {
        var c = a.m,
            d = isNaN(c.left) ? null : c.left,
            c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }

    function Sg(a, b) {
        var c = a.m,
            d = isNaN(c.top) ? null : c.top,
            c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }
    g.qd = function (a, b) {
        this.h && Pg(this) ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
        this.target.style.top = b + "px"
    };

    function Qg(a, b, c, d, e, f, h, k) {
        Fa.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = q(f) ? f : b.c;
        this.top = q(h) ? h : b.g;
        this.a = b;
        this.c = !!k
    }
    v(Qg, Fa);

    function Vg() {
        K.call(this);
        this.h = [];
        this.ua = [];
        this.K = [];
        this.O = this.C = this.B = !1
    }
    v(Vg, K);

    function Wg(a, b) {
        a.B && (J(b.a, "mousedown", b.j, !1, b), a.G && pc(b.a, a.G));
        a.C && a.N && pc(b.a, a.N)
    }

    function Xg(a, b) {
        a.B && (Df(b.a, "mousedown", b.j, !1, b), a.G && rc(b.a, a.G));
        a.C && a.N && rc(b.a, a.N);
        b.Y()
    }
    g = Vg.prototype;
    g.Ge = function (a) {
        var b = a.c ? null : this.j;
        if (b && b.c) {
            var c = a.clientX;
            a = a.clientY;
            var d = gf(Be(this.m)),
                e = c + d.x,
                d = a + d.y,
                f;
            this.I && (f = this.I(b.b, b.a, e, d));
            L(this, new Yg("drag", 0, this.a, 0, b.b, 0, c, a));
            L(b.c, new Yg("drop", 0, this.a, 0, b.b, 0, c, a, 0, 0, f))
        }
        L(this, new Yg("dragend", 0, this.a, 0, b ? b.b : void 0));
        Df(this.c, "drag", this.gf, !1, this);
        Df(this.c, "end", this.Ge, !1, this);
        Df(De(this.a.b)
            .body, "selectstart", this.uf);
        for (b = 0; c = this.K[b]; b++) Df(c.D, "scroll", this.ke, !1, this), c.a = [];
        this.c.Y();
        Re(this.m);
        delete this.a;
        delete this.m;
        delete this.c;
        delete this.w;
        delete this.j
    };
    g.gf = function (a) {
        var b, c = gf(Be(this.m));
        b = new C(a.clientX + c.x, a.clientY + c.y);
        var c = b.x,
            d = b.y,
            e = this.j;
        L(this, new Yg("drag", 0, this.a, 0, e ? e.b : void 0, 0, a.clientX, a.clientY));
        var f;
        if (e) {
            this.I && e.c && (f = this.I(e.b, e.a, c, d));
            if (e.a.contains(b) && f == this.S) return;
            e.c && (L(this, new Yg("dragout", 0, this.a, 0, e.b)), L(e.c, new Yg("dragout", 0, this.a, 0, e.b, 0, void 0, void 0, 0, 0, this.S)));
            this.S = f;
            this.j = null
        }
        if (this.g.contains(b)) {
            a: {
                for (var h = 0; e = this.w[h]; h++)
                    if (e.a.contains(b))
                        if (e.g) {
                            if (e.g.b.contains(b)) {
                                b = e;
                                break a
                            }
                        } else {
                            b =
                                e;
                            break a
                        }
                b = null
            }
            if ((e = this.j = b) && e.c) this.I && (f = this.I(e.b, e.a, c, d)),
            c = new Yg("dragover", 0, this.a, 0, e.b),
            c.m = f,
            L(this, c),
            L(e.c, new Yg("dragover", 0, this.a, 0, e.b, 0, a.clientX, a.clientY, 0, 0, f));
            else if (!e) {
                this.b || (this.b = new Zg(this.g.clone()));
                a = this.b.a;
                a.top = this.g.top;
                a.right = this.g.right;
                a.bottom = this.g.bottom;
                a.left = this.g.left;
                for (f = 0; e = this.w[f]; f++) b = e.a, e.g && (e = e.g.b, b = new Zc(Math.max(b.top, e.top), Math.min(b.right, e.right), Math.min(b.bottom, e.bottom), Math.max(b.left, e.left))), e = null, c >= b.right ?
                    e = b.right > a.left ? b.right : a.left : c < b.left && (e = b.left < a.right ? b.left : a.right), h = null, d >= b.bottom ? h = b.bottom > a.top ? b.bottom : a.top : d < b.top && (h = b.top < a.bottom ? b.top : a.bottom), null === e || null === h || (Math.abs(e - c) > Math.abs(h - d) ? h = null : e = null), null !== e ? e <= c ? a.left = e : a.right = e : null !== h && (h <= d ? a.top = h : a.bottom = h);
                this.j = 10 <= (a.right - a.left) * (a.bottom - a.top) ? this.b : null
            }
        }
    };
    g.uf = function () {
        return !1
    };
    g.ke = function (a) {
        for (var b = 0, c; c = this.K[b]; b++)
            if (a.target == c.D) {
                var d = c.g - c.D.scrollTop,
                    e = c.c - c.D.scrollLeft;
                c.g = c.D.scrollTop;
                c.c = c.D.scrollLeft;
                this.b && this.j == this.b && (0 < d ? this.b.a.top += d : this.b.a.bottom += d, 0 < e ? this.b.a.left += e : this.b.a.right += e);
                for (var f = 0, h; h = c.a[f]; f++) h = h.a, h.top += d, h.left += e, h.bottom += d, h.right += e, $g(this, h)
            }
        this.c.nf(a)
    };

    function $g(a, b) {
        if (1 == a.w.length) a.g = new Zc(b.top, b.right, b.bottom, b.left);
        else {
            var c = a.g;
            c.left = Math.min(b.left, c.left);
            c.right = Math.max(b.right, c.right);
            c.top = Math.min(b.top, c.top);
            c.bottom = Math.max(b.bottom, c.bottom)
        }
    }
    g.M = function () {
        Vg.A.M.call(this);
        for (var a, b = 0; a = this.h[b]; b++) Xg(this, a);
        this.h.length = 0
    };

    function Yg(a, b, c, d, e, f, h, k, l, p, m) {
        Fa.call(this, a);
        this.a = c;
        this.c = e;
        this.clientX = h;
        this.clientY = k;
        this.m = m
    }
    v(Yg, Fa);

    function ah(a, b) {
        K.call(this);
        this.a = Ee(document, a);
        this.data = b;
        this.g = null;
        this.c = new Jf(this);
        Ba(this, qa(Ca, this.c));
        this.b = null;
        if (!this.a) throw Error("Invalid argument");
    }
    v(ah, K);
    ah.prototype.j = function (a) {
        if (sf(a)) {
            var b = a.target;
            b && (this.c.J(b, "mousemove", this.m, !1)
                .J(b, "mouseout", this.m, !1), this.c.J(De(b), "mouseup", this.w, !0), this.b = b, this.h = new C(a.clientX, a.clientY))
        }
    };
    ah.prototype.m = function (a) {
        var b = this.b,
            b = "mouseout" == a.type && a.target == b;
        if (5 < Math.abs(a.clientX - this.h.x) + Math.abs(a.clientY - this.h.y) || b)
            if (Lf(this.c), b = this.g, !b.a)
                if (b.a = this, 0 == L(b, new Yg("dragstart", 0, b.a))) b.a = null;
                else {
                    var c = this.b,
                        d;
                    a: {
                        d = c.cloneNode(!0);
                        for (var e = c.getElementsByTagName("TEXTAREA"), f = d.getElementsByTagName("TEXTAREA"), h = 0; h < e.length; h++) f[h].value = e[h].value;
                        switch (c.tagName) {
                        case "TR":
                            d = Le("TABLE", null, Le("TBODY", null, d));
                            break a;
                        case "TD":
                        case "TH":
                            d = Le("TABLE", null, Le("TBODY",
                                null, Le("TR", null, d)));
                            break a;
                        case "TEXTAREA":
                            d.value = c.value
                        }
                    }
                    b.W && pc(d, b.W);
                    b.m = d;
                    d = De(c);
                    d.body.appendChild(b.m);
                    e = b.m;
                    f = rg(c);
                    c = Eg(c, "margin");
                    f.x -= 2 * (c.left || 0);
                    f.y -= 2 * (c.top || 0);
                    e.style.position = "absolute";
                    e.style.left = f.x + "px";
                    e.style.top = f.y + "px";
                    c = new Ng(e);
                    b.c = c;
                    b.c.O = b.aa;
                    J(b.c, "drag", b.gf, !1, b);
                    J(b.c, "end", b.Ge, !1, b);
                    J(d.body, "selectstart", b.uf);
                    b.w = [];
                    for (d = 0; c = b.ua[d]; d++)
                        for (var k, e = 0; k = c.h[e]; e++)
                            for (var f = b, h = c, l = [k.a], p = 0; p < l.length; p++) {
                                var m = l[p],
                                    r, t = m;
                                r = rg(t);
                                t = vg(wg, t);
                                r = new Zc(r.y,
                                    r.x + t.width, r.y + t.height, r.x);
                                f.w.push(new Zg(r, h, k, m));
                                $g(f, r)
                            }
                    b.g || (b.g = new Zc(0, 0, 0, 0));
                    for (d = 0; c = b.K[d]; d++) c.a = [], c.c = c.D.scrollLeft, c.g = c.D.scrollTop, e = rg(c.D), f = vg(wg, c.D), c.b = new Zc(e.y, e.x + f.width, e.y + f.height, e.x);
                    for (d = 0; f = b.w[d]; d++)
                        for (e = 0; c = b.K[e]; e++) Ue(c.D, f.D) && (c.a.push(f), f.g = c);
                    b.j = null;
                    for (d = 0; c = b.K[d]; d++) J(c.D, "scroll", b.ke, !1, b);
                    b.c.yd(a);
                    a.b()
                }
        a.b()
    };
    ah.prototype.w = function () {
        Lf(this.c);
        delete this.h;
        this.b = null
    };

    function Zg(a, b, c, d) {
        this.a = a;
        this.c = b;
        this.b = c;
        this.D = d || null;
        this.g = null
    };

    function bh(a, b) {
        Vg.call(this);
        var c = new ah(a, b);
        c.g = this;
        this.h.push(c)
    }
    v(bh, Vg);

    function ch() {
        Vg.call(this)
    }
    v(ch, Vg);
    ch.prototype.removeItem = function (a) {
        a = Ee(document, a);
        for (var b, c = 0; b = this.h[c]; c++)
            if (b.a == a) {
                this.h.splice(c, 1);
                Xg(this, b);
                break
            }
    };

    function dh(a, b, c, d, e, f, h, k, l) {
        var p = eh(c),
            m = xg(a),
            r = qg(a);
        if (r) {
            var t = new $c(r.left, r.top, r.right - r.left, r.bottom - r.top),
                r = Math.max(m.left, t.left),
                x = Math.min(m.left + m.width, t.left + t.width);
            if (r <= x) {
                var y = Math.max(m.top, t.top),
                    t = Math.min(m.top + m.height, t.top + t.height);
                y <= t && (m.left = r, m.top = y, m.width = x - r, m.height = t - y)
            }
        }
        r = Be(a);
        y = Be(c);
        if (r.a != y.a) {
            x = r.a.body;
            var y = ff(y),
                t = new C(0, 0),
                E = Ke(De(x));
            if (ob(E, "parent")) {
                var ca = x;
                do {
                    var qb = E == y ? rg(ca) : sg(ca);
                    t.x += qb.x;
                    t.y += qb.y
                } while (E && E != y && E != E.parent &&
                    (ca = E.frameElement) && (E = E.parent))
            }
            x = Yc(t, rg(x));
            !F || me(9) || ef(r) || (x = Yc(x, gf(r)));
            m.left += x.x;
            m.top += x.y
        }
        a = fh(a, b);
        b = m.left;
        a & 4 ? b += m.width : a & 2 && (b += m.width / 2);
        m = new C(b, m.top + (a & 1 ? m.height : 0));
        m = Yc(m, p);
        e && (m.x += (a & 4 ? -1 : 1) * e.x, m.y += (a & 1 ? -1 : 1) * e.y);
        var sa;
        if (h)
            if (l) sa = l;
            else if (sa = qg(c)) sa.top -= p.y, sa.right -= p.x, sa.bottom -= p.y, sa.left -= p.x;
        return gh(m, c, d, f, sa, h, k)
    }

    function eh(a) {
        var b;
        if (a = a.offsetParent) {
            var c = "HTML" == a.tagName || "BODY" == a.tagName;
            c && "static" == kg(a) || (b = rg(a), c || (c = (c = zg(a)) && ce ? -a.scrollLeft : !c || be && H("8") || "visible" == jg(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = Yc(b, new C(c, a.scrollTop))))
        }
        return b || new C
    }

    function gh(a, b, c, d, e, f, h) {
        a = a.clone();
        var k = fh(b, c);
        c = vg(wg, b);
        h = h ? h.clone() : c.clone();
        a = a.clone();
        h = h.clone();
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                if (f & 16) {
                    var p = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x,
                        p + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                f & 2 && (l = l | (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                f & 32 && (p = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, p + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                f & 8 && (l = l | (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l
            } else e =
                256;
            l = e
        }
        e = new $c(0, 0, 0, 0);
        e.left = a.x;
        e.top = a.y;
        e.width = h.width;
        e.height = h.height;
        a = l;
        if (a & 496) return a;
        lg(b, new C(e.left, e.top));
        h = new Va(e.width, e.height);
        Wa(c, h) || Dg(b, h);
        return a
    }

    function fh(a, b) {
        return (b & 8 && zg(a) ? b ^ 4 : b) & -9
    };

    function hh(a, b, c) {
        this.b = a;
        this.c = b;
        this.w = c
    }
    v(hh, mb);
    hh.prototype.a = function (a, b, c) {
        dh(this.b, this.c, a, b, void 0, c, this.w)
    };

    function ih(a, b, c, d) {
        hh.call(this, a, b);
        this.g = c ? 5 : 0;
        this.j = d || void 0
    }
    v(ih, hh);
    ih.prototype.m = function () {
        return this.g
    };
    ih.prototype.h = function (a) {
        this.g = a
    };
    ih.prototype.a = function (a, b, c, d) {
        var e = dh(this.b, this.c, a, b, null, c, 10, d, this.j);
        if (e & 496) {
            var f = jh(e, this.c);
            b = jh(e, b);
            e = dh(this.b, f, a, b, null, c, 10, d, this.j);
            e & 496 && (f = jh(e, f), b = jh(e, b), dh(this.b, f, a, b, null, c, this.g, d, this.j))
        }
    };

    function jh(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };

    function kh(a, b) {
        this.b = a instanceof C ? a : new C(a, b)
    }
    v(kh, mb);
    kh.prototype.a = function (a, b, c, d) {
        var e;
        e = De(a);
        var f = e.body;
        e = e.documentElement;
        e = new C(f.scrollLeft || e.scrollLeft, f.scrollTop || e.scrollTop);
        f = this.b.x + e.x;
        e = this.b.y + e.y;
        var h = eh(a),
            f = f - h.x;
        e -= h.y;
        gh(new C(f, e), a, b, c, null, null, d)
    };

    function lh(a, b, c, d) {
        ih.call(this, a, b, c || d);
        (c || d) && this.h(65 | (d ? 32 : 132))
    }
    v(lh, ih);

    function mh(a, b) {
        kh.call(this, a, b)
    }
    v(mh, kh);
    mh.prototype.c = 0;
    mh.prototype.h = function (a) {
        this.c = a
    };
    mh.prototype.a = function (a, b, c, d) {
        var e = ng(a),
            e = qg(e),
            f;
        f = Be(a);
        f = Je(f.a);
        f = new C(this.b.x + f.scrollLeft, this.b.y + f.scrollTop);
        var h = b,
            k = gh(f, a, h, c, e, 10, d);
        if (0 != (k & 496)) {
            if (k & 16 || k & 32) h ^= 4;
            if (k & 64 || k & 128) h ^= 1;
            k = gh(f, a, h, c, e, 10, d);
            0 != (k & 496) && gh(f, a, b, c, e, this.c, d)
        }
    };

    function nh(a, b) {
        K.call(this);
        this.c = a || 1;
        this.b = b || n;
        this.g = pa(this.j, this);
        this.h = ra()
    }
    v(nh, K);
    nh.prototype.enabled = !1;
    nh.prototype.a = null;
    nh.prototype.j = function () {
        if (this.enabled) {
            var a = ra() - this.h;
            0 < a && a < .8 * this.c ? this.a = this.b.setTimeout(this.g, this.c - a) : (this.a && (this.b.clearTimeout(this.a), this.a = null), L(this, "tick"), this.enabled && (this.a = this.b.setTimeout(this.g, this.c), this.h = ra()))
        }
    };

    function oh(a) {
        a.enabled = !0;
        a.a || (a.a = a.b.setTimeout(a.g, a.c), a.h = ra())
    }

    function ph(a) {
        a.enabled = !1;
        a.a && (a.b.clearTimeout(a.a), a.a = null)
    }
    nh.prototype.M = function () {
        nh.A.M.call(this);
        ph(this);
        delete this.b
    };

    function qh(a, b, c) {
        if (ia(a)) c && (a = pa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = pa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
    };

    function rh(a, b, c) {
        ya.call(this);
        this.b = a;
        this.h = b || 0;
        this.c = c;
        this.g = pa(this.j, this)
    }
    v(rh, ya);
    rh.prototype.a = 0;
    rh.prototype.M = function () {
        rh.A.M.call(this);
        sh(this);
        delete this.b;
        delete this.c
    };

    function th(a) {
        sh(a);
        a.a = qh(a.g, q(void 0) ? void 0 : a.h)
    }

    function sh(a) {
        a.Wa() && n.clearTimeout(a.a);
        a.a = 0
    }
    rh.prototype.Wa = function () {
        return 0 != this.a
    };
    rh.prototype.j = function () {
        this.a = 0;
        this.b && this.b.call(this.c)
    };
    var eb = {},
        uh = null;

    function vh(a) {
        a = ka(a);
        delete eb[a];
        db() && uh && sh(uh)
    }

    function wh() {
        uh || (uh = new rh(function () {
            xh()
        }, 20));
        var a = uh;
        a.Wa() || th(a)
    }

    function xh() {
        var a = ra();
        $a(eb, function (b) {
            yh(b, a)
        });
        db() || wh()
    };

    function zh(a, b, c, d) {
        ag.call(this);
        if (!fa(a) || !fa(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.O = a;
        this.N = b;
        this.G = c;
        this.C = d;
        this.b = [];
        this.K = !1;
        this.c = 0
    }
    v(zh, ag);
    g = zh.prototype;
    g.sb = function (a) {
        if (a || this.a == bg) this.c = 0, this.b = this.O;
        else if (1 == this.a) return !1;
        vh(this);
        this.m = a = ra(); - 1 == this.a && (this.m -= this.G * this.c);
        this.I = this.m + this.G;
        this.c || this.j();
        this.Ra("play"); - 1 == this.a && this.Ra("resume");
        this.a = 1;
        var b = ka(this);
        b in eb || (eb[b] = this);
        wh();
        yh(this, a);
        return !0
    };
    g.kb = function (a) {
        vh(this);
        this.a = bg;
        a && (this.c = 1);
        Ah(this, this.c);
        this.Ra("stop");
        this.g()
    };
    g.M = function () {
        this.a == bg || this.kb(!1);
        this.Ra("destroy");
        zh.A.M.call(this)
    };

    function yh(a, b) {
        a.c = (b - a.m) / (a.I - a.m);
        1 <= a.c && (a.c = 1);
        Ah(a, a.c);
        1 == a.c ? (a.a = bg, vh(a), a.Ra("finish"), a.g()) : 1 == a.a && a.Od()
    }

    function Ah(a, b) {
        ia(a.C) && (b = a.C(b));
        a.b = Array(a.O.length);
        for (var c = 0; c < a.O.length; c++) a.b[c] = (a.N[c] - a.O[c]) * b + a.O[c]
    }
    g.Od = function () {
        this.Ra("animate")
    };
    g.Ra = function (a) {
        L(this, new Bh(a, this))
    };

    function Bh(a, b) {
        Fa.call(this, a);
        this.x = b.b[0];
        this.y = b.b[1];
        this.state = b.a
    }
    v(Bh, Fa);

    function Ch(a, b, c, d, e) {
        zh.call(this, b, c, d, e);
        this.h = a
    }
    v(Ch, zh);
    Ch.prototype.w = ba;
    Ch.prototype.Od = function () {
        this.w();
        Ch.A.Od.call(this)
    };
    Ch.prototype.g = function () {
        this.w();
        Ch.A.g.call(this)
    };
    Ch.prototype.j = function () {
        this.w();
        Ch.A.j.call(this)
    };

    function Dh(a, b, c, d, e) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        Ch.apply(this, arguments)
    }
    v(Dh, Ch);
    Dh.prototype.w = function () {
        var a;
        if (a = this.K) q(this.B) || (this.B = zg(this.h)), a = this.B;
        this.h.style[a ? "right" : "left"] = Math.round(this.b[0]) + "px";
        this.h.style.top = Math.round(this.b[1]) + "px"
    };

    function Eh(a, b, c, d, e) {
        Ch.call(this, a, [b], [c], d, e)
    }
    v(Eh, Ch);
    Eh.prototype.w = function () {
        this.h.style.width = Math.round(this.b[0]) + "px"
    };

    function Fh(a, b, c, d, e) {
        Ch.call(this, a, [b], [c], d, e)
    }
    v(Fh, Ch);
    Fh.prototype.w = function () {
        this.h.style.height = Math.round(this.b[0]) + "px"
    };

    function Gh(a, b, c, d, e) {
        ha(b) && (b = [b]);
        ha(c) && (c = [c]);
        Ch.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.B = Hh
    }
    v(Gh, Ch);
    var Ih = 1 / 1024,
        Hh = -1;
    Gh.prototype.w = function () {
        var a = this.b[0];
        Math.abs(a - this.B) >= Ih && (yg(this.h, a), this.B = a)
    };
    Gh.prototype.j = function () {
        this.B = Hh;
        Gh.A.j.call(this)
    };
    Gh.prototype.g = function () {
        this.B = Hh;
        Gh.A.g.call(this)
    };

    function Jh(a, b, c) {
        Gh.call(this, a, 1, 0, b, c)
    }
    v(Jh, Gh);
    Jh.prototype.j = function () {
        this.h.style.display = "";
        Jh.A.j.call(this)
    };
    Jh.prototype.g = function () {
        this.h.style.display = "none";
        Jh.A.g.call(this)
    };

    function Kh(a) {
        K.call(this);
        this.W = new td;
        this.C = a || null;
        this.b = !1;
        this.B = this.a = null;
        this.Hb = this.S = this.K = "";
        this.c = this.N = this.w = this.G = !1;
        this.j = 0;
        this.I = null;
        this.m = Lh;
        this.O = this.g = !1
    }
    v(Kh, K);
    var Lh = "",
        Mh = Kh.prototype,
        Nh = xe("goog.net.XhrIo");
    Mh.Ia = Nh;
    var Oh = /^https?$/i,
        Ph = ["POST", "PUT"],
        Qh = [];

    function Rh(a, b, c, d, e, f, h) {
        var k = new Kh;
        Qh.push(k);
        b && k.J("complete", b);
        wc(k.Ta, "ready", k.zg, !0, void 0, void 0);
        f && (k.j = Math.max(0, f));
        h && (k.g = h);
        Sh(k, a, c, d, e)
    }
    g = Kh.prototype;
    g.zg = function () {
        this.Y();
        Ub(Qh, this)
    };

    function Sh(a, b, c, d, e) {

        if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.K + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.K = b;
        a.Hb = "";
        a.S = c;
        a.G = !1;
        a.b = !0;
        a.a = a.qe();
        a.B = a.C ? Ya(a.C) : Ya(ad);
        a.a.onreadystatechange = pa(a.mf, a);
        try {
            fg(a.Ia, Th(a, "Opening Xhr")), a.N = !0, a.a.open(c, String(b), !0), a.N = !1
        } catch (h) {
            fg(a.Ia, Th(a, "Error opening Xhr: " + h.message));
            Uh(a, h);
            return
        }
        b = d || "";
        var f = a.W.clone();
        e && yd(e, function (a, b) {
            f.Ua(b, a)
        });
        e = Rb(f.jb());
        d = n.FormData && b instanceof n.FormData;
        !Tb(Ph, c) || e || d || f.Ua("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function (a, b) {
            this.a.setRequestHeader(b, a)
        }, a);
        a.m && (a.a.responseType = a.m);
        cb(a.a, "withCredentials") && (a.a.withCredentials = a.g);
        
        
        try {
			console.log(a);
            Vh(a), 0 < a.j && (a.O = Wh(a.a), fg(a.Ia, Th(a, "Will abort after " + a.j + "ms if incomplete, xhr2 " + a.O)), a.O ? (a.a.timeout = a.j, a.a.ontimeout = pa(a.wf, a)) : a.I = qh(a.wf, a.j, a)), fg(a.Ia, Th(a, "Sending request")), a.w = !0, a.a.send(b), a.w = !1
        } catch (h) {
			fg(a.Ia, Th(a, "Send error: " + h.message)), Uh(a,
                h)
        }
    }

    function Wh(a) {
        return F && H(9) && ha(a.timeout) && q(a.ontimeout)
    }

    function Sb(a) {
        return "content-type" == a.toLowerCase()
    }
    g.qe = function () {
        return this.C ? cd(this.C) : cd(ad)
    };
    g.wf = function () {
        "undefined" != typeof aa && this.a && (this.Hb = "Timed out after " + this.j + "ms, aborting", fg(this.Ia, Th(this, this.Hb)), L(this, "timeout"), this.a && this.b && (fg(this.Ia, Th(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, L(this, "complete"), L(this, "abort"), Xh(this)))
    };

    function Uh(a, b) {
        a.b = !1;
        a.a && (a.c = !0, a.a.abort(), a.c = !1);
        a.Hb = b;
        Yh(a);
        Xh(a)
    }

    function Yh(a) {
        a.G || (a.G = !0, L(a, "complete"), L(a, "error"))
    }
    g.M = function () {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Xh(this, !0));
        Kh.A.M.call(this)
    };
    g.mf = function () {
        this.Ga || (this.N || this.w || this.c ? Zh(this) : this.fi())
    };
    g.fi = function () {
        Zh(this)
    };

    function Zh(a) {
        if (a.b && "undefined" != typeof aa)
            if (a.B[1] && 4 == $h(a) && 2 == ai(a)) fg(a.Ia, Th(a, "Local request error detected and ignored"));
            else if (a.w && 4 == $h(a)) qh(a.mf, 0, a);
        else if (L(a, "readystatechange"), 4 == $h(a)) {
            fg(a.Ia, Th(a, "Request complete"));
            a.b = !1;
            try {
                var b = ai(a),
                    c;
                a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c = !0;
                    break a;
                default:
                    c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.K)
                            .match(Dd)[1] || null;
                        if (!f && n.self && n.self.location) var h = n.self.location.protocol,
                            f = h.substr(0, h.length - 1);
                        e = !Oh.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) L(a, "complete"), L(a, "success");
                else {
                    var k;
                    try {
                        k = 2 < $h(a) ? a.a.statusText : ""
                    } catch (l) {
                        fg(a.Ia, "Can not get status: " + l.message), k = ""
                    }
                    a.Hb = k + " [" + ai(a) + "]";
                    Yh(a)
                }
            } finally {
                Xh(a)
            }
        }
    }

    function Xh(a, b) {
        if (a.a) {
            Vh(a);
            var c = a.a,
                d = a.B[0] ? ba : null;
            a.a = null;
            a.B = null;
            b || L(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (c = a.Ia) && c.log(re, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
            }
        }
    }

    function Vh(a) {
        a.a && a.O && (a.a.ontimeout = null);
        ha(a.I) && (n.clearTimeout(a.I), a.I = null)
    }
    g.Wa = function () {
        return !!this.a
    };

    function $h(a) {
        return a.a ? a.a.readyState : 0
    }

    function ai(a) {
        try {
            return 2 < $h(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    }

    function bi(a) {
        try {
            return a.a ? a.a.responseText : ""
        } catch (b) {
            return fg(a.Ia, "Can not get responseText: " + b.message), ""
        }
    }

    function ci(a) {
        if (a.a) return Oa(a.a.responseText)
    }

    function di(a) {
        try {
            if (!a.a) return null;
            if ("response" in a.a) return a.a.response;
            switch (a.m) {
            case Lh:
            case "text":
                return a.a.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer" in a.a) return a.a.mozResponseArrayBuffer
            }
            var b = a.Ia;
            b && b.log(re, "Response type " + a.m + " is not supported on this browser", void 0);
            return null
        } catch (c) {
            return fg(a.Ia, "Can not get response: " + c.message), null
        }
    }

    function Th(a, b) {
        return b + " [" + a.S + " " + a.K + " " + ai(a) + "]"
    };

    function N(a) {
        K.call(this);
        this.a = a || Be();
        this.ad = ei;
        this.Qb = null;
        this.Z = !1;
        this.D = null;
        this.ua = void 0;
        this.O = this.K = this.I = this.cd = null;
        this.cf = !1
    }
    v(N, K);
    N.prototype.Xh = zd.ha();
    var ei = null;

    function fi(a, b) {
        switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }
    g = N.prototype;
    g.na = function () {
        return this.Qb || (this.Qb = ":" + (this.Xh.a++)
            .toString(36))
    };

    function gi(a, b) {
        a.I && a.I.O && (fb(a.I.O, a.Qb), gb(a.I.O, b, a));
        a.Qb = b
    }
    g.l = function () {
        return this.D
    };

    function O(a) {
        a.ua || (a.ua = new Jf(a));
        return a.ua
    }

    function hi(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        if (b && a.I && a.Qb && ii(a.I, a.Qb) && a.I != b) throw Error("Unable to set parent component");
        a.I = b;
        N.A.Td.call(a, b)
    }
    g.Ba = function () {
        return this.I
    };
    g.Td = function (a) {
        if (this.I && this.I != a) throw Error("Method not supported");
        N.A.Td.call(this, a)
    };
    g.ba = function () {
        this.D = df(this.a, "DIV")
    };

    function P(a, b, c) {
        if (a.Z) throw Error("Component already rendered");
        a.D || a.ba();
        b ? b.insertBefore(a.D, c || null) : a.a.a.body.appendChild(a.D);
        a.I && !a.I.Z || a.P()
    }

    function ji(a, b) {
        if (a.Z) throw Error("Component already rendered");
        if (b && a.hc(b)) {
            a.cf = !0;
            var c = De(b);
            a.a && a.a.a == c || (a.a = Be(b));
            a.R(b);
            a.P()
        } else throw Error("Invalid element to decorate");
    }
    g.hc = function () {
        return !0
    };
    g.R = function (a) {
        this.D = a
    };
    g.P = function () {
        this.Z = !0;
        ki(this, function (a) {
            !a.Z && a.l() && a.P()
        })
    };
    g.ga = function () {
        ki(this, function (a) {
            a.Z && a.ga()
        });
        this.ua && Lf(this.ua);
        this.Z = !1
    };
    g.M = function () {
        this.Z && this.ga();
        this.ua && (this.ua.Y(), delete this.ua);
        ki(this, function (a) {
            a.Y()
        });
        !this.cf && this.D && Re(this.D);
        this.I = this.cd = this.D = this.O = this.K = null;
        N.A.M.call(this)
    };
    g.H = function (a, b) {
        this.dd(a, li(this), b)
    };
    g.dd = function (a, b, c) {
        if (a.Z && (c || !this.Z)) throw Error("Component already rendered");
        if (0 > b || b > li(this)) throw Error("Child component index out of bounds");
        this.O && this.K || (this.O = {}, this.K = []);
        if (a.Ba() == this) {
            var d = a.na();
            this.O[d] = a;
            Ub(this.K, a)
        } else gb(this.O, a.na(), a);
        hi(a, this);
        Xb(this.K, b, 0, a);
        a.Z && this.Z && a.Ba() == this ? (c = this.Ea(), b = c.childNodes[b] || null, b != a.l() && c.insertBefore(a.l(), b)) : c ? (this.D || this.ba(), b = mi(this, b + 1), P(a, this.Ea(), b ? b.D : null)) : this.Z && !a.Z && a.D && a.D.parentNode && 1 == a.D.parentNode.nodeType &&
            a.P()
    };
    g.Ea = function () {
        return this.D
    };

    function ni(a) {
        null == a.ad && (a.ad = zg(a.Z ? a.D : a.a.a.body));
        return a.ad
    }

    function li(a) {
        return a.K ? a.K.length : 0
    }

    function ii(a, b) {
        return a.O && b ? w(a.O, b) || null : null
    }

    function mi(a, b) {
        return a.K ? a.K[b] || null : null
    }

    function ki(a, b, c) {
        a.K && Nb(a.K, b, c)
    }

    function oi(a, b) {
        return a.K && b ? Mb(a.K, b) : -1
    }
    g.removeChild = function (a, b) {
        if (a) {
            var c = u(a) ? a : a.na();
            a = ii(this, c);
            c && a && (fb(this.O, c), Ub(this.K, a), b && (a.ga(), a.D && Re(a.D)), hi(a, null))
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };

    function pi(a) {
        this.a = a
    }
    da(pi);

    function qi(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    }
    g = pi.prototype;
    g.zd = function (a) {
        return "DIV" == a.tagName
    };

    function ri(a, b, c) {
        c.id && gi(b, c.id);
        var d = a.V(),
            e = !1,
            f = nc(c);
        f && Nb(f, function (a) {
            a == d ? e = !0 : a && this.Ud(b, a, d)
        }, a);
        e || pc(c, d);
        si(a, b, c);
        return c
    }
    g.Ud = function (a, b, c) {
        b == c + "-disabled" ? a.nb(!1) : b == c + "-horizontal" ? ti(a, ui) : b == c + "-vertical" && ti(a, vi)
    };

    function si(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c;) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var f = a.fc(d);
                    f && (f.D = d, b.isEnabled() || f.nb(!1), b.H(f), ji(f, d))
                } else d.nodeValue && "" != xb(d.nodeValue) || c.removeChild(d);
                d = e
            }
    }
    g.fc = function (a) {
        a: {
            var b;a = nc(a);
            for (var c = 0, d = a.length; c < d; c++)
                if (b = a[c], b = b in Bd ? Bd[b]() : null) {
                    a = b;
                    break a
                }
            a = null
        }
        return a
    };
    g.Bd = function (a) {
        a = a.l();
        Bg(a, !0, ce);
        F && (a.hideFocus = !0);
        var b = this.a;
        b && jf(a, b)
    };
    g.V = function () {
        return "goog-container"
    };
    g.Ad = function (a) {
        var b = this.V(),
            c = [b, a.Cb == ui ? b + "-horizontal" : b + "-vertical"];
        a.isEnabled() || c.push(b + "-disabled");
        return c
    };
    g.ye = function () {
        return vi
    };

    function wi() {}
    var xi;
    da(wi);
    var yi = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    g = wi.prototype;
    g.Tb = function () {};
    g.Sa = function (a) {
        return a.a.F("DIV", zi(this, a)
            .join(" "), a.ub)
    };
    g.tb = function (a) {
        return a
    };

    function Ai(a, b, c) {
        if (a = a.l ? a.l() : a) {
            var d = [b];
            F && !H("7") && (d = Bi(nc(a), b), d.push(b));
            (c ? qc : sc)(a, d)
        }
    }
    g.Dd = function () {
        return !0
    };
    g.ta = function (a, b) {
        b.id && gi(a, b.id);
        var c = this.tb(b);
        c && c.firstChild ? Ci(a, c.firstChild.nextSibling ? Wb(c.childNodes) : c.firstChild) : a.ub = null;
        var d = 0,
            e = this.V(),
            f = this.V(),
            h = !1,
            k = !1,
            l = !1,
            p = Wb(nc(b));
        Nb(p, function (a) {
            h || a != e ? k || a != f ? d |= this.Ac(a) : k = !0 : (h = !0, f == e && (k = !0));
            1 == this.Ac(a) && Ze(c) && $e(c) && Ye(c, !1)
        }, this);
        a.Db = d;
        h || (p.push(e), f == e && (k = !0));
        k || p.push(f);
        var m = a.sd;
        m && p.push.apply(p, m);
        if (F && !H("7")) {
            var r = Bi(p);
            0 < r.length && (p.push.apply(p, r), l = !0)
        }
        if (!h || !k || m || l) b.className = p.join(" ");
        return b
    };
    g.Fc = function (a) {
        ni(a) && this.Je(a.l(), !0);
        a.isEnabled() && this.jc(a, a.xa)
    };

    function Di(a, b, c) {
        if (a = c || a.Tb()) c = b.getAttribute("role") || null, a != c && jf(b, a)
    }

    function Ei(a, b, c) {
        b.xa || I(c, "hidden", !b.xa);
        b.isEnabled() || a.ob(c, 1, !b.isEnabled());
        Fi(b, 8) && a.ob(c, 8, Gi(b, 8));
        Fi(b, 16) && a.ob(c, 16, Gi(b, 16));
        Fi(b, 64) && a.ob(c, 64, Gi(b, 64))
    }
    g.Ed = function (a, b) {
        Bg(a, !b, !F && !$d)
    };
    g.Je = function (a, b) {
        Ai(a, this.V() + "-rtl", b)
    };
    g.Ie = function (a) {
        var b;
        return Fi(a, 32) && (b = a.l()) ? Ze(b) && $e(b) : !1
    };
    g.jc = function (a, b) {
        var c;
        if (Fi(a, 32) && (c = a.l())) {
            if (!b && Gi(a, 32)) {
                try {
                    c.blur()
                } catch (d) {}
                Gi(a, 32) && a.Gc(null)
            }(Ze(c) && $e(c)) != b && Ye(c, b)
        }
    };
    g.L = function (a, b) {
        M(a, b);
        a && I(a, "hidden", !b)
    };
    g.Fd = function (a, b, c) {
        var d = a.l();
        if (d) {
            var e = this.ec(b);
            e && Ai(a, e, c);
            this.ob(d, b, c)
        }
    };
    g.ob = function (a, b, c) {
        xi || (xi = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        b = xi[b];
        var d = a.getAttribute("role") || null;
        d && (d = yi[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && I(a, b, c)
    };
    g.V = function () {
        return "goog-control"
    };

    function zi(a, b) {
        var c = a.V(),
            d = [c],
            e = a.V();
        e != c && d.push(e);
        c = b.Db;
        for (e = []; c;) {
            var f = c & -c;
            e.push(a.ec(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (c = b.sd) && d.push.apply(d, c);
        F && !H("7") && d.push.apply(d, Bi(d));
        return d
    }

    function Bi(a, b) {
        var c = [];
        b && (a = Vb(a, [b]));
        Nb([], function (d) {
            !Qb(d, qa(Tb, a)) || b && !Tb(d, b) || c.push(d.join("_"))
        });
        return c
    }
    g.ec = function (a) {
        this.a || Hi(this);
        return this.a[a]
    };
    g.Ac = function (a) {
        this.c || (this.a || Hi(this), this.c = hb(this.a));
        a = parseInt(this.c[a], 10);
        return isNaN(a) ? 0 : a
    };

    function Hi(a) {
        var b = a.V();
        b.replace(/\xa0|\s/g, " ");
        a.a = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };

    function Ii() {}
    v(Ii, wi);
    da(Ii);
    g = Ii.prototype;
    g.Tb = function () {
        return "button"
    };
    g.ob = function (a, b, c) {
        switch (b) {
        case 8:
        case 16:
            I(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            Ii.A.ob.call(this, a, b, c)
        }
    };
    g.Sa = function (a) {
        var b = Ii.A.Sa.call(this, a);
        this.$a(b, a.rb());
        var c = a.U();
        c && this.He(b, c);
        Fi(a, 16) && this.ob(b, 16, Gi(a, 16));
        return b
    };
    g.ta = function (a, b) {
        b = Ii.A.ta.call(this, a, b);
        var c = this.U(b);
        a.G = c;
        a.Uc(this.rb(b));
        Fi(a, 16) && this.ob(b, 16, Gi(a, 16));
        return b
    };
    g.U = ba;
    g.He = ba;
    g.rb = function (a) {
        return a.title
    };
    g.$a = function (a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    };
    g.V = function () {
        return "goog-button"
    };

    function Ji(a, b, c) {
        N.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = ka(b);
                if (d = Cd[d]) break;
                b = b.A ? b.A.constructor : null
            }
            b = d ? ia(d.ha) ? d.ha() : new d : null
        }
        this.c = b;
        this.ub = q(a) ? a : null
    }
    v(Ji, N);
    g = Ji.prototype;
    g.ub = null;
    g.Db = 0;
    g.oc = 39;
    g.Jb = 255;
    g.Pb = 0;
    g.xa = !0;
    g.sd = null;
    g.Id = !0;

    function Ki(a, b) {
        a.Z && b != a.Id && Li(a, b);
        a.Id = b
    }
    g.ba = function () {
        var a = this.c.Sa(this);
        this.D = a;
        Di(this.c, a, this.kc());
        this.c.Ed(a, !1);
        this.xa || this.c.L(a, !1)
    };
    g.kc = function () {
        return null
    };
    g.Ea = function () {
        return this.c.tb(this.l())
    };
    g.hc = function (a) {
        return this.c.Dd(a)
    };
    g.R = function (a) {
        this.D = a = this.c.ta(this, a);
        Di(this.c, a, this.kc());
        this.c.Ed(a, !1);
        this.xa = "none" != a.style.display
    };
    g.P = function () {
        Ji.A.P.call(this);
        Ei(this.c, this, this.D);
        this.c.Fc(this);
        if (this.oc & -2 && (this.Id && Li(this, !0), Fi(this, 32))) {
            var a = this.l();
            if (a) {
                var b = this.g || (this.g = new Tf);
                Uf(b, a);
                O(this)
                    .J(b, "key", this.Va)
                    .J(a, "focus", this.Lg)
                    .J(a, "blur", this.Gc)
            }
        }
    };

    function Li(a, b) {
        var c = O(a),
            d = a.l();
        b ? (c.J(d, "mouseover", a.mc)
            .J(d, "mousedown", a.Vb)
            .J(d, "mouseup", a.Fb)
            .J(d, "mouseout", a.Jd), a.lc != ba && c.J(d, "contextmenu", a.lc), F && (H(9) || c.J(d, "dblclick", a.Ne), a.h || (a.h = new Mi(a), Ba(a, qa(Ca, a.h))))) : (c.da(d, "mouseover", a.mc)
            .da(d, "mousedown", a.Vb)
            .da(d, "mouseup", a.Fb)
            .da(d, "mouseout", a.Jd), a.lc != ba && c.da(d, "contextmenu", a.lc), F && (H(9) || c.da(d, "dblclick", a.Ne), Ca(a.h), a.h = null))
    }
    g.ga = function () {
        Ji.A.ga.call(this);
        this.g && $f(this.g);
        this.xa && this.isEnabled() && this.c.jc(this, !1)
    };
    g.M = function () {
        Ji.A.M.call(this);
        this.g && (this.g.Y(), delete this.g);
        delete this.c;
        this.h = this.sd = this.ub = null
    };

    function Ci(a, b) {
        a.ub = b
    }
    g.zc = function () {
        var a = this.ub;
        if (!a) return "";
        a = u(a) ? a : fa(a) ? Pb(a, cf)
            .join("") : af(a);
        return wb(a)
    };
    g.L = function (a, b) {
        if (b || this.xa != a && L(this, a ? "show" : "hide")) {
            var c = this.l();
            c && this.c.L(c, a);
            this.isEnabled() && this.c.jc(this, a);
            this.xa = a;
            return !0
        }
        return !1
    };
    g.isEnabled = function () {
        return !Gi(this, 1)
    };
    g.nb = function (a) {
        var b = this.Ba();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !Ni(this, 1, !a) || (a || (Oi(this, !1), this.bb(!1)), this.xa && this.c.jc(this, a), Pi(this, 1, !a, !0))
    };
    g.bb = function (a) {
        Ni(this, 2, a) && Pi(this, 2, a)
    };
    g.Wa = function () {
        return Gi(this, 4)
    };

    function Oi(a, b) {
        Ni(a, 4, b) && Pi(a, 4, b)
    }

    function Qi(a, b) {
        Ni(a, 8, b) && Pi(a, 8, b)
    }

    function Ri(a, b) {
        Ni(a, 16, b) && Pi(a, 16, b)
    }
    g.pa = function (a) {
        Ni(this, 64, a) && Pi(this, 64, a)
    };

    function Gi(a, b) {
        return !!(a.Db & b)
    }

    function Pi(a, b, c, d) {
        d || 1 != b ? Fi(a, b) && c != Gi(a, b) && (a.c.Fd(a, b, c), a.Db = c ? a.Db | b : a.Db & ~b) : a.nb(!c)
    }

    function Fi(a, b) {
        return !!(a.oc & b)
    }
    g.ya = function (a, b) {
        if (this.Z && Gi(this, a) && !b) throw Error("Component already rendered");
        !b && Gi(this, a) && Pi(this, a, !1);
        this.oc = b ? this.oc | a : this.oc & ~a
    };

    function Si(a, b) {
        return !!(a.Jb & b) && Fi(a, b)
    }

    function Ni(a, b, c) {
        return Fi(a, b) && Gi(a, b) != c && (!(a.Pb & b) || L(a, fi(b, c))) && !a.Ga
    }
    g.mc = function (a) {
        (!a.K || !Ue(this.l(), a.K)) && L(this, "enter") && this.isEnabled() && Si(this, 2) && this.bb(!0)
    };
    g.Jd = function (a) {
        a.K && Ue(this.l(), a.K) || !L(this, "leave") || (Si(this, 4) && Oi(this, !1), Si(this, 2) && this.bb(!1))
    };
    g.lc = ba;
    g.Vb = function (a) {
        this.isEnabled() && (Si(this, 2) && this.bb(!0), sf(a) && (Si(this, 4) && Oi(this, !0), this.c && this.c.Ie(this) && this.l()
            .focus()));
        sf(a) && a.b()
    };
    g.Fb = function (a) {
        this.isEnabled() && (Si(this, 2) && this.bb(!0), this.Wa() && this.wb(a) && Si(this, 4) && Oi(this, !1))
    };
    g.Ne = function (a) {
        this.isEnabled() && this.wb(a)
    };
    g.wb = function (a) {
        Si(this, 16) && Ri(this, !Gi(this, 16));
        Si(this, 8) && Qi(this, !0);
        Si(this, 64) && this.pa(!Gi(this, 64));
        var b = new Fa("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.I = a.I);
        return L(this, b)
    };
    g.Lg = function () {
        Si(this, 32) && Ni(this, 32, !0) && Pi(this, 32, !0)
    };
    g.Gc = function () {
        Si(this, 4) && Oi(this, !1);
        Si(this, 32) && Ni(this, 32, !1) && Pi(this, 32, !1)
    };
    g.Va = function (a) {
        return this.xa && this.isEnabled() && this.Ub(a) ? (a.b(), a.h(), !0) : !1
    };
    g.Ub = function (a) {
        return 13 == a.keyCode && this.wb(a)
    };
    if (!ia(Ji)) throw Error("Invalid component class " + Ji);
    if (!ia(wi)) throw Error("Invalid renderer class " + wi);
    var Ti = ka(Ji);
    Cd[Ti] = wi;
    Ad("goog-control", function () {
        return new Ji(null)
    });

    function Mi(a) {
        ya.call(this);
        this.b = a;
        this.a = !1;
        this.c = new Jf(this);
        Ba(this, qa(Ca, this.c));
        a = this.b.D;
        this.c.J(a, "mousedown", this.h)
            .J(a, "mouseup", this.j)
            .J(a, "click", this.g)
    }
    v(Mi, ya);
    var Ui = !F || me(9);
    Mi.prototype.h = function () {
        this.a = !1
    };
    Mi.prototype.j = function () {
        this.a = !0
    };

    function Vi(a, b) {
        if (!Ui) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }
    Mi.prototype.g = function (a) {
        if (this.a) this.a = !1;
        else {
            var b = a.g,
                c = b.button,
                d = b.type,
                e = Vi(b, "mousedown");
            this.b.Vb(new qf(e, a.j));
            e = Vi(b, "mouseup");
            this.b.Fb(new qf(e, a.j));
            Ui || (b.button = c, b.type = d)
        }
    };
    Mi.prototype.M = function () {
        this.b = null;
        Mi.A.M.call(this)
    };

    function Wi(a, b, c) {
        N.call(this, c);
        this.lb = b || pi.ha();
        this.Cb = a || this.lb.ye()
    }
    v(Wi, N);
    var ui = "horizontal",
        vi = "vertical";
    g = Wi.prototype;
    g.Ld = null;
    g.Mb = null;
    g.lb = null;
    g.Cb = null;
    g.ja = !0;
    g.Lb = !0;
    g.Rb = !0;
    g.la = -1;
    g.oa = null;
    g.eb = !1;
    g.pb = null;

    function Xi(a) {
        return a.Ld || a.l()
    }
    g.ba = function () {
        this.D = this.a.F("DIV", this.lb.Ad(this)
            .join(" "))
    };
    g.Ea = function () {
        return this.l()
    };
    g.hc = function (a) {
        return this.lb.zd(a)
    };
    g.R = function (a) {
        this.D = ri(this.lb, this, a);
        "none" == a.style.display && (this.ja = !1)
    };
    g.P = function () {
        Wi.A.P.call(this);
        ki(this, function (a) {
            a.Z && Yi(this, a)
        }, this);
        var a = this.l();
        this.lb.Bd(this);
        this.L(this.ja, !0);
        O(this)
            .J(this, "enter", this.Hd)
            .J(this, "highlight", this.Ig)
            .J(this, "unhighlight", this.Kg)
            .J(this, "open", this.uh)
            .J(this, "close", this.Hg)
            .J(a, "mousedown", this.Jg)
            .J(De(a), "mouseup", this.$g)
            .J(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.Tg);
        this.Rb && Zi(this, !0)
    };

    function Zi(a, b) {
        var c = O(a),
            d = Xi(a);
        b ? c.J(d, "focus", a.ic)
            .J(d, "blur", a.Ec)
            .J(a.Mb || (a.Mb = new Tf(Xi(a))), "key", a.Va) : c.da(d, "focus", a.ic)
            .da(d, "blur", a.Ec)
            .da(a.Mb || (a.Mb = new Tf(Xi(a))), "key", a.Va)
    }
    g.ga = function () {
        this.Za(-1);
        this.oa && this.oa.pa(!1);
        this.eb = !1;
        Wi.A.ga.call(this)
    };
    g.M = function () {
        Wi.A.M.call(this);
        this.Mb && (this.Mb.Y(), this.Mb = null);
        this.lb = this.oa = this.pb = this.Ld = null
    };
    g.Hd = function () {
        return !0
    };
    g.Ig = function (a) {
        var b = oi(this, a.target);
        if (-1 < b && b != this.la) {
            var c = $i(this);
            c && c.bb(!1);
            this.la = b;
            c = $i(this);
            this.eb && Oi(c, !0);
            this.oa && c != this.oa && (Fi(c, 64) ? c.pa(!0) : this.oa.pa(!1))
        }
        b = this.l();
        null != a.target.l() && I(b, "activedescendant", a.target.l()
            .id)
    };
    g.Kg = function (a) {
        a.target == $i(this) && (this.la = -1);
        this.l()
            .removeAttribute("aria-activedescendant")
    };
    g.uh = function (a) {
        (a = a.target) && a != this.oa && a.Ba() == this && (this.oa && this.oa.pa(!1), this.oa = a)
    };
    g.Hg = function (a) {
        a.target == this.oa && (this.oa = null);
        var b = this.l(),
            c = a.target.l();
        b && Gi(a.target, 2) && c && lf(b, c)
    };
    g.Jg = function (a) {
        this.Lb && (this.eb = !0);
        var b = Xi(this);
        b && Ze(b) && $e(b) ? b.focus() : a.b()
    };
    g.$g = function () {
        this.eb = !1
    };
    g.Tg = function (a) {
        var b;
        a: {
            b = a.target;
            if (this.pb)
                for (var c = this.l(); b && b !== c;) {
                    var d = b.id;
                    if (d in this.pb) {
                        b = this.pb[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b) switch (a.type) {
        case "mousedown":
            b.Vb(a);
            break;
        case "mouseup":
            b.Fb(a);
            break;
        case "mouseover":
            b.mc(a);
            break;
        case "mouseout":
            b.Jd(a);
            break;
        case "contextmenu":
            b.lc(a)
        }
    };
    g.ic = function () {};
    g.Ec = function () {
        this.Za(-1);
        this.eb = !1;
        this.oa && this.oa.pa(!1)
    };
    g.Va = function (a) {
        return this.isEnabled() && this.ja && (0 != li(this) || this.Ld) && this.Cd(a) ? (a.b(), a.h(), !0) : !1
    };
    g.Cd = function (a) {
        var b = $i(this);
        if (b && "function" == typeof b.Va && b.Va(a) || this.oa && this.oa != b && "function" == typeof this.oa.Va && this.oa.Va(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
        case 27:
            if (this.Rb) Xi(this)
                .blur();
            else return !1;
            break;
        case 36:
            aj(this);
            break;
        case 35:
            bj(this);
            break;
        case 38:
            if (this.Cb == vi) cj(this);
            else return !1;
            break;
        case 37:
            if (this.Cb == ui) ni(this) ? dj(this) : cj(this);
            else return !1;
            break;
        case 40:
            if (this.Cb == vi) dj(this);
            else return !1;
            break;
        case 39:
            if (this.Cb ==
                ui) ni(this) ? cj(this) : dj(this);
            else return !1;
            break;
        default:
            return !1
        }
        return !0
    };

    function Yi(a, b) {
        var c = b.l(),
            c = c.id || (c.id = b.na());
        a.pb || (a.pb = {});
        a.pb[c] = b
    }
    g.H = function (a, b) {
        Wi.A.H.call(this, a, b)
    };
    g.dd = function (a, b, c) {
        a.Pb |= 2;
        a.Pb |= 64;
        a.ya(32, !1);
        Ki(a, !1);
        var d = a.Ba() == this ? oi(this, a) : -1;
        Wi.A.dd.call(this, a, b, c);
        a.Z && this.Z && Yi(this, a);
        a = d; - 1 == a && (a = li(this));
        a == this.la ? this.la = Math.min(li(this) - 1, b) : a > this.la && b <= this.la ? this.la++ : a < this.la && b > this.la && this.la--
    };
    g.removeChild = function (a, b) {
        if (a = u(a) ? ii(this, a) : a) {
            var c = oi(this, a); - 1 != c && (c == this.la ? (a.bb(!1), this.la = -1) : c < this.la && this.la--);
            (c = a.l()) && c.id && this.pb && fb(this.pb, c.id)
        }
        a = Wi.A.removeChild.call(this, a, b);
        Ki(a, !0);
        return a
    };

    function ti(a, b) {
        if (a.l()) throw Error("Component already rendered");
        a.Cb = b
    }
    g.L = function (a, b) {
        if (b || this.ja != a && L(this, a ? "show" : "hide")) {
            this.ja = a;
            var c = this.l();
            c && (M(c, a), this.Rb && qi(Xi(this), this.Lb && this.ja), b || L(this, this.ja ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    g.isEnabled = function () {
        return this.Lb
    };
    g.nb = function (a) {
        this.Lb != a && L(this, a ? "enable" : "disable") && (a ? (this.Lb = !0, ki(this, function (a) {
            a.zf ? delete a.zf : a.nb(!0)
        })) : (ki(this, function (a) {
            a.isEnabled() ? a.nb(!1) : a.zf = !0
        }), this.eb = this.Lb = !1), this.Rb && qi(Xi(this), a && this.ja))
    };

    function ej(a, b) {
        b != a.Rb && a.Z && Zi(a, b);
        a.Rb = b;
        a.Lb && a.ja && qi(Xi(a), b)
    }
    g.Za = function (a) {
        (a = mi(this, a)) ? a.bb(!0): -1 < this.la && $i(this)
            .bb(!1)
    };

    function $i(a) {
        return mi(a, a.la)
    }

    function aj(a) {
        fj(a, function (a, c) {
            return (a + 1) % c
        }, li(a) - 1)
    }

    function bj(a) {
        fj(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    }

    function dj(a) {
        fj(a, function (a, c) {
            return (a + 1) % c
        }, a.la)
    }

    function cj(a) {
        fj(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.la)
    }

    function fj(a, b, c) {
        c = 0 > c ? oi(a, a.oa) : c;
        var d = li(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var f = mi(a, c);
            if (f && a.je(f)) {
                a.Sd(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }
    g.je = function (a) {
        return a.xa && a.isEnabled() && Fi(a, 2)
    };
    g.Sd = function (a) {
        this.Za(a)
    };

    function gj() {}
    v(gj, Ii);
    da(gj);
    g = gj.prototype;
    g.Sa = function (a) {
        var b = zi(this, a),
            b = a.a.F("DIV", {
                "class": "goog-inline-block " + b.join(" ")
            }, this.uc(a.ub, a.a));
        this.$a(b, a.rb());
        return b
    };
    g.Tb = function () {
        return "button"
    };
    g.tb = function (a) {
        return a && a.firstChild && a.firstChild.firstChild
    };
    g.uc = function (a, b) {
        return b.F("DIV", "goog-inline-block " + (this.V() + "-outer-box"), b.F("DIV", "goog-inline-block " + (this.V() + "-inner-box"), a))
    };
    g.Dd = function (a) {
        return "DIV" == a.tagName
    };
    g.ta = function (a, b) {
        hj(b, !0);
        hj(b, !1);
        var c;
        a: {
            c = a.a.Be(b);
            var d = this.V() + "-outer-box";
            if (c && oc(c, d) && (c = a.a.Be(c), d = this.V() + "-inner-box", c && oc(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(this.uc(b.childNodes, a.a));
        qc(b, ["goog-inline-block", this.V()]);
        return gj.A.ta.call(this, a, b)
    };
    g.V = function () {
        return "goog-custom-button"
    };

    function hj(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var e = c.nodeValue;
                    if ("" == xb(e)) a.removeChild(c);
                    else {
                        c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                        break
                    }
                } else break;
                c = d
            }
    };

    function ij(a) {
        K.call(this);
        this.b = this.c = {};
        this.g = 0;
        this.O = lb(jj);
        this.B = lb(kj);
        this.m = !0;
        this.j = this.w = !1;
        this.h = null;
        this.a = a;
        J(this.a, "keydown", this.Hc, !1, this);
        ce && J(this.a, "keyup", this.Qe, !1, this);
        ee && !ce && (J(this.a, "keypress", this.Ue, !1, this), J(this.a, "keyup", this.Ve, !1, this))
    }
    var lj;
    v(ij, K);

    function mj(a) {
        this.a = a || null;
        this.next = a ? null : {}
    }
    var jj = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
        kj = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
    g = ij.prototype;
    g.$ = function (a, b) {
        nj(this.c, oj(arguments), a)
    };

    function oj(a) {
        if (u(a[1])) a = Pb(pj(a[1]), function (a) {
            return a.keyCode & 255 | a.Wh << 8
        });
        else {
            var b = a,
                c = 1;
            fa(a[1]) && (b = a[1], c = 0);
            for (a = []; c < b.length; c += 2) a.push(b[c] & 255 | b[c + 1] << 8)
        }
        return a
    }
    g.M = function () {
        ij.A.M.call(this);
        this.c = {};
        Df(this.a, "keydown", this.Hc, !1, this);
        ce && Df(this.a, "keyup", this.Qe, !1, this);
        ee && !ce && (Df(this.a, "keypress", this.Ue, !1, this), Df(this.a, "keyup", this.Ve, !1, this));
        this.a = null
    };

    function pj(a) {
        a = a.replace(/[ +]*\+[ +]*/g, "+")
            .replace(/[ ]+/g, " ")
            .toLowerCase();
        a = a.split(" ");
        for (var b = [], c, d = 0; c = a[d]; d++) {
            var e = c.split("+"),
                f = null;
            c = 0;
            for (var h, k = 0; h = e[k]; k++) {
                switch (h) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
                }
                null === f || Lb("At most one non-modifier key can be in a stroke.");
                e = h;
                if (!lj) {
                    f = {};
                    h = void 0;
                    for (h in Ga) f[Ga[h]] = Rf(parseInt(h, 10));
                    lj = f
                }
                f = lj[e];
                break
            }
            b.push({
                keyCode: f,
                Wh: c
            })
        }
        return b
    }
    g.Qe = function (a) {
        if (de) {
            if (224 == a.keyCode) {
                this.I = !0;
                qh(function () {
                    this.I = !1
                }, 400, this);
                return
            }
            var b = a.metaKey || this.I;
            67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b, this.Hc(a))
        }
        32 == this.h && 32 == a.keyCode && a.b();
        this.h = null
    };
    g.Ue = function (a) {
        32 < a.keyCode && ee && !ce && a.ctrlKey && a.altKey && (this.K = !0)
    };
    g.Ve = function (a) {
        !this.K && ee && !ce && a.ctrlKey && a.altKey && this.Hc(a)
    };

    function nj(a, b, c) {
        var d = b.shift(),
            e = a[d];
        if (e && (0 == b.length || e.a)) throw Error("Keyboard shortcut conflicts with existing shortcut");
        b.length ? (d = d.toString(), e = new mj, e = d in a ? a[d] : a[d] = e, nj(e.next, b, c)) : a[d] = new mj(c)
    }
    g.Hc = function (a) {
        var b;
        b = a.keyCode;
        if (16 == b || 17 == b || 18 == b) b = !1;
        else {
            var c = a.target,
                d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
                e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
            b = !d && !e || this.O[b] || this.j ? !0 : e ? !1 : a.altKey || a.ctrlKey || a.metaKey ? !0 : "INPUT" == c.tagName && this.B[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? 32 != b : !1
        }
        if (b)
            if ("keydown" == a.type && ee && !ce && a.ctrlKey && a.altKey) this.K = !1;
            else {
                b = Rf(a.keyCode);
                c = b & 255 |
                    ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
                if (!this.b[c] || 1500 <= ra() - this.g) this.b = this.c, this.g = ra();
                if (c = this.b[c]) c.next ? (this.b = c.next, this.g = ra(), a.b()) : (this.b = this.c, this.g = ra(), this.m && a.b(), this.w && a.h(), c = c.a, d = a.target, e = L(this, new qj("shortcut", c, d)), (e &= L(this, new qj("shortcut_" + c, c, d))) || a.b(), ce && (this.h = b))
            }
    };

    function qj(a, b, c) {
        Fa.call(this, a, c);
        this.a = b
    }
    v(qj, Fa);

    function rj() {}
    v(rj, wi);
    da(rj);
    rj.prototype.V = function () {
        return "goog-menuheader"
    };

    function sj(a, b, c) {
        Ji.call(this, a, c || rj.ha(), b);
        this.ya(1, !1);
        this.ya(2, !1);
        this.ya(4, !1);
        this.ya(32, !1);
        this.Db = 1
    }
    v(sj, Ji);
    Ad("goog-menuheader", function () {
        return new sj(null)
    });

    function tj() {
        this.b = []
    }
    v(tj, wi);
    da(tj);

    function uj(a, b) {
        var c = a.b[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.V() + "-highlight";
                break;
            case 1:
                c = a.V() + "-checkbox";
                break;
            case 2:
                c = a.V() + "-content"
            }
            a.b[b] = c
        }
        return c
    }
    g = tj.prototype;
    g.Tb = function () {
        return "menuitem"
    };
    g.Sa = function (a) {
        var b = a.a.F("DIV", zi(this, a)
            .join(" "), vj(this, a.ub, a.a));
        wj(this, a, b, Fi(a, 8) || Fi(a, 16));
        return b
    };
    g.tb = function (a) {
        return a && a.firstChild
    };
    g.ta = function (a, b) {
        var c = Se(b),
            d = uj(this, 2);
        c && oc(c, d) || b.appendChild(vj(this, b.childNodes, a.a));
        oc(b, "goog-option") && (a.ya(16, !0), a && b && wj(this, a, b, !0));
        return tj.A.ta.call(this, a, b)
    };

    function vj(a, b, c) {
        a = uj(a, 2);
        return c.F("DIV", a, b)
    }

    function wj(a, b, c, d) {
        Di(a, c, b.kc());
        Ei(a, b, c);
        var e;
        if (e = a.tb(c)) {
            e = e.firstChild;
            var f = uj(a, 1);
            e = !!e && Te(e) && oc(e, f)
        } else e = !1;
        d != e && (uc(c, "goog-option", d), c = a.tb(c), d ? (a = uj(a, 1), c.insertBefore(b.a.F("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }
    g.ec = function (a) {
        switch (a) {
        case 2:
            return uj(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return tj.A.ec.call(this, a)
        }
    };
    g.Ac = function (a) {
        var b = uj(this, 0);
        switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return tj.A.Ac.call(this, a)
        }
    };
    g.V = function () {
        return "goog-menuitem"
    };

    function Q(a, b, c, d) {
        Ji.call(this, a, d || tj.ha(), c);
        this.cd = b
    }
    v(Q, Ji);
    g = Q.prototype;
    g.U = function () {
        var a = this.cd;
        return null != a ? a : this.zc()
    };
    g.ya = function (a, b) {
        Q.A.ya.call(this, a, b);
        switch (a) {
        case 8:
            Gi(this, 16) && !b && Ri(this, !1);
            var c = this.l();
            c && this && c && wj(this.c, this, c, b);
            break;
        case 16:
            (c = this.l()) && this && c && wj(this.c, this, c, b)
        }
    };
    g.zc = function () {
        var a = this.ub;
        return fa(a) ? (a = Pb(a, function (a) {
                return Te(a) && (oc(a, "goog-menuitem-accel") || oc(a, "goog-menuitem-mnemonic-separator")) ? "" : cf(a)
            })
            .join(""), wb(a)) : Q.A.zc.call(this)
    };
    g.Fb = function (a) {
        var b = this.Ba();
        if (b) {
            var c = b.h;
            b.h = null;
            if (b = c && ha(a.clientX)) b = new C(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return
        }
        Q.A.Fb.call(this, a)
    };
    g.Ub = function (a) {
        return a.keyCode == this.Nd && this.wb(a) ? !0 : Q.A.Ub.call(this, a)
    };
    g.Dg = function () {
        return this.Nd
    };
    Ad("goog-menuitem", function () {
        return new Q(null)
    });
    Q.prototype.kc = function () {
        return Fi(this, 16) ? "menuitemcheckbox" : Fi(this, 8) ? "menuitemradio" : Q.A.kc.call(this)
    };
    Q.prototype.Ba = function () {
        return Ji.prototype.Ba.call(this)
    };
    Q.prototype.Sb = function () {
        return Ji.prototype.Sb.call(this)
    };

    function xj() {}
    v(xj, wi);
    da(xj);
    xj.prototype.Sa = function (a) {
        return a.a.F("DIV", this.V())
    };
    xj.prototype.ta = function (a, b) {
        b.id && gi(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.Sa(a);
            c.parentNode && c.parentNode.insertBefore(b, c);
            Re(c)
        } else pc(b, this.V());
        return b
    };
    xj.prototype.V = function () {
        return "goog-menuseparator"
    };

    function yj(a, b) {
        this.D = a;
        this.b = b
    };

    function zj() {}
    v(zj, Ii);
    da(zj);
    g = zj.prototype;
    g.Tb = function () {};
    g.Sa = function (a) {
        Ki(a, !1);
        a.Jb &= -256;
        a.ya(32, !1);
        return a.a.F("BUTTON", {
            "class": zi(this, a)
                .join(" "),
            disabled: !a.isEnabled(),
            title: a.rb() || "",
            value: a.U() || ""
        }, a.zc() || "")
    };
    g.Dd = function (a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    g.ta = function (a, b) {
        Ki(a, !1);
        a.Jb &= -256;
        a.ya(32, !1);
        if (b.disabled) {
            var c = this.ec(1);
            pc(b, c)
        }
        return zj.A.ta.call(this, a, b)
    };
    g.Fc = function (a) {
        O(a)
            .J(a.l(), "click", a.wb)
    };
    g.Ed = ba;
    g.Je = ba;
    g.Ie = function (a) {
        return a.isEnabled()
    };
    g.jc = ba;
    g.Fd = function (a, b, c) {
        zj.A.Fd.call(this, a, b, c);
        (a = a.l()) && 1 == b && (a.disabled = c)
    };
    g.U = function (a) {
        return a.value
    };
    g.He = function (a, b) {
        a && (a.value = b)
    };
    g.ob = ba;

    function Aj(a, b, c) {
        Ji.call(this, a, b || zj.ha(), c)
    }
    v(Aj, Ji);
    g = Aj.prototype;
    g.U = function () {
        return this.G
    };
    g.rb = function () {
        return this.B
    };
    g.$a = function (a) {
        this.B = a;
        this.c.$a(this.l(), a)
    };
    g.Uc = function (a) {
        this.B = a
    };
    g.M = function () {
        Aj.A.M.call(this);
        delete this.G;
        delete this.B
    };
    g.P = function () {
        Aj.A.P.call(this);
        if (Fi(this, 32)) {
            var a = this.l();
            a && O(this)
                .J(a, "keyup", this.Ub)
        }
    };
    g.Ub = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.wb(a) : 32 == a.keyCode
    };
    Ad("goog-button", function () {
        return new Aj(null)
    });

    function Bj(a, b) {
        N.call(this, b);
        this.xb = !!a;
        this.j = null
    }
    v(Bj, N);
    g = Bj.prototype;
    g.td = null;
    g.Nb = !1;
    g.Qa = null;
    g.za = null;
    g.gb = null;
    g.hd = !1;
    g.V = function () {
        return "goog-modalpopup"
    };
    g.yc = function () {
        return this.Qa
    };
    g.ba = function () {
        Bj.A.ba.call(this);
        var a = this.l(),
            b = xb(this.V())
            .split(" ");
        qc(a, b);
        Ye(a, !0);
        M(a, !1);
        Cj(this);
        Dj(this)
    };

    function Cj(a) {
        if (a.xb && !a.za) {
            var b;
            b = a.a.F("iframe", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                src: mf
            });
            a.za = b;
            a.za.className = a.V() + "-bg";
            M(a.za, !1);
            yg(a.za, 0)
        }
        a.Qa || (a.Qa = a.a.F("DIV", a.V() + "-bg"), M(a.Qa, !1))
    }

    function Dj(a) {
        a.gb || (a.gb = df(a.a, "SPAN"), M(a.gb, !1), Ye(a.gb, !0), a.gb.style.position = "absolute")
    }
    g.sf = function () {
        this.hd = !1
    };
    g.hc = function (a) {
        return !!a && "DIV" == a.tagName
    };
    g.R = function (a) {
        Bj.A.R.call(this, a);
        a = xb(this.V())
            .split(" ");
        qc(this.l(), a);
        Cj(this);
        Dj(this);
        Ye(this.l(), !0);
        M(this.l(), !1)
    };
    g.P = function () {
        if (this.za) {
            var a = this.l();
            a.parentNode && a.parentNode.insertBefore(this.za, a)
        }
        a = this.l();
        a.parentNode && a.parentNode.insertBefore(this.Qa, a);
        Bj.A.P.call(this);
        a = this.l();
        a.parentNode && a.parentNode.insertBefore(this.gb, a.nextSibling);
        this.td = new Of(this.a.a);
        O(this)
            .J(this.td, "focusin", this.bi);
        Ej(this, !1)
    };
    g.ga = function () {
        this.Nb && this.L(!1);
        Ca(this.td);
        Bj.A.ga.call(this);
        Re(this.za);
        Re(this.Qa);
        Re(this.gb)
    };
    g.L = function (a) {
        if (a != this.Nb)
            if (this.w && this.w.kb(), this.C && this.C.kb(), this.m && this.m.kb(), this.B && this.B.kb(), this.Z && Ej(this, a), a) {
                if (L(this, "beforeshow")) {
                    try {
                        this.j = this.a.a.activeElement
                    } catch (e) {}
                    this.Qd();
                    var b = Ke(this.a.a) || window;
                    if ("fixed" == kg(this.l())) var c = a = 0;
                    else c = gf(this.a), a = c.x, c = c.y;
                    var d = vg(wg, this.l()),
                        b = Ie(b || window);
                    a = Math.max(a + b.width / 2 - d.width / 2, 0);
                    c = Math.max(c + b.height / 2 - d.height / 2, 0);
                    lg(this.l(), a, c);
                    lg(this.gb, a, c);
                    O(this)
                        .J(ff(this.a), "resize", this.Qd);
                    Fj(this, !0);
                    this.we();
                    this.Nb = !0;
                    this.w && this.C ? (Cf(this.w, "end", this.Jc, !1, this), this.C.sb(), this.w.sb()) : this.Jc()
                }
            } else if (L(this, "beforehide")) {
            O(this)
                .da(ff(this.a), "resize", this.Qd);
            this.Nb = !1;
            this.m && this.B ? (Cf(this.m, "end", this.Ic, !1, this), this.B.sb(), this.m.sb()) : this.Ic();
            a: {
                try {
                    c = this.a;
                    d = c.a.body;
                    b = c.a.activeElement || d;
                    if (!this.j || this.j == d) {
                        this.j = null;
                        break a
                    }(b == d || c.contains(this.l(), b)) && this.j.focus()
                } catch (e) {}
                this.j = null
            }
        }
    };

    function Ej(a, b) {
        a.fa || (a.fa = new yj(a.D, a.a));
        var c = a.fa;
        if (b) {
            c.a || (c.a = []);
            for (var d = hf(c.b.a.body), e = 0; e < d.length; e++) {
                var f = d[e];
                f == c.D || kf(f, "hidden") || (I(f, "hidden", !0), c.a.push(f))
            }
        } else if (c.a) {
            for (e = 0; e < c.a.length; e++) c.a[e].removeAttribute("aria-hidden");
            c.a = null
        }
    }

    function Fj(a, b) {
        a.za && M(a.za, b);
        a.Qa && M(a.Qa, b);
        M(a.l(), b);
        M(a.gb, b)
    }
    g.Jc = function () {
        L(this, "show")
    };
    g.Ic = function () {
        Fj(this, !1);
        L(this, "hide")
    };
    g.Qd = function () {
        this.za && M(this.za, !1);
        this.Qa && M(this.Qa, !1);
        var a = this.a.a,
            b = Ie(Ke(a) || window || window),
            c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
            a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.za && (M(this.za, !0), ug(this.za, c, a));
        this.Qa && (M(this.Qa, !0), ug(this.Qa, c, a))
    };
    g.bi = function (a) {
        this.hd ? this.sf() : a.target == this.gb && qh(this.we, 0, this)
    };
    g.we = function () {
        try {
            F && this.a.a.body.focus(), this.l()
                .focus()
        } catch (a) {}
    };
    g.M = function () {
        Ca(this.w);
        this.w = null;
        Ca(this.m);
        this.m = null;
        Ca(this.C);
        this.C = null;
        Ca(this.B);
        this.B = null;
        Bj.A.M.call(this)
    };

    function Gj(a, b, c) {
        Bj.call(this, b, c);
        this.g = a || "modal-dialog";
        this.b = Hj(Hj(new Ij, Jj, !0), Kj, !1, !0)
    }
    v(Gj, Bj);
    g = Gj.prototype;
    g.ef = !0;
    g.qc = .5;
    g.Zd = "";
    g.Eb = null;
    g.Pa = null;
    g.Fa = null;
    g.Vc = null;
    g.Oa = null;
    g.Kb = null;
    g.va = null;
    g.V = function () {
        return this.g
    };

    function Lj(a, b) {
        a.Zd = b;
        a.Fa && Ve(a.Fa, b)
    }
    g.Ea = function () {
        this.l() || P(this, void 0);
        return this.Kb
    };

    function Mj(a) {
        a.l() || P(a, void 0);
        return a.l()
    }
    g.yc = function () {
        this.l() || P(this, void 0);
        return Gj.A.yc.call(this)
    };

    function Nj(a, b) {
        a.qc = b;
        if (a.l()) {
            var c = a.yc();
            c && yg(c, a.qc)
        }
    }

    function Oj(a, b) {
        var c = xb(a.g + "-title-draggable")
            .split(" ");
        a.l() && (b ? qc(a.Pa, c) : sc(a.Pa, c));
        b && !a.Eb ? (a.Eb = new Ng(a.l(), a.Pa), qc(a.Pa, c), J(a.Eb, "start", a.ri, !1, a)) : !b && a.Eb && (a.Eb.Y(), a.Eb = null)
    }
    g.ba = function () {
        Gj.A.ba.call(this);
        var a = this.l(),
            b = this.a;
        this.Pa = b.F("DIV", this.g + "-title", this.Fa = b.F("SPAN", {
            className: this.g + "-title-text",
            id: this.na()
        }, this.Zd), this.Oa = b.F("SPAN", this.g + "-title-close"));
        Pe(a, this.Pa, this.Kb = b.F("DIV", this.g + "-content"), this.va = b.F("DIV", this.g + "-buttons"));
        jf(this.Fa, "heading");
        jf(this.Oa, "button");
        Ye(this.Oa, !0);
        I(this.Oa, "label", Pj);
        this.Vc = this.Fa.id;
        jf(a, "dialog");
        I(a, "labelledby", this.Vc || "");
        M(this.Oa, !0);
        this.b && (a = this.b, a.D = this.va, Qj(a));
        M(this.va, !!this.b);
        Nj(this, this.qc)
    };
    g.R = function (a) {
        Gj.A.R.call(this, a);
        a = this.l();
        var b = this.g + "-content";
        this.Kb = Fe(document, null, b, a)[0];
        this.Kb || (this.Kb = this.a.F("DIV", b), a.appendChild(this.Kb));
        var b = this.g + "-title",
            c = this.g + "-title-text",
            d = this.g + "-title-close";
        (this.Pa = Fe(document, null, b, a)[0]) ? (this.Fa = Fe(document, null, c, this.Pa)[0], this.Oa = Fe(document, null, d, this.Pa)[0]) : (this.Pa = this.a.F("DIV", b), a.insertBefore(this.Pa, this.Kb));
        this.Fa ? (this.Zd = af(this.Fa), this.Fa.id || (this.Fa.id = this.na())) : (this.Fa = Le("SPAN", {
            className: c,
            id: this.na()
        }), this.Pa.appendChild(this.Fa));
        this.Vc = this.Fa.id;
        I(a, "labelledby", this.Vc || "");
        this.Oa || (this.Oa = this.a.F("SPAN", d), this.Pa.appendChild(this.Oa));
        M(this.Oa, !0);
        b = this.g + "-buttons";
        if (this.va = Fe(document, null, b, a)[0]) {
            if (a = this.b = new Ij(this.a), (b = this.va) && 1 == b.nodeType) {
                a.D = b;
                for (var b = a.D.getElementsByTagName("BUTTON"), c = 0, e, f; d = b[c]; c++)
                    if (e = d.name || d.id, f = af(d) || d.value, e) {
                        var h = 0 == c;
                        a.Ua(e, f, h, d.name == Rj);
                        h && pc(d, "goog-buttonset-default")
                    }
            }
        } else this.va = this.a.F("DIV", b), a.appendChild(this.va),
            this.b && (a = this.b, a.D = this.va, Qj(a)), M(this.va, !!this.b);
        Nj(this, this.qc)
    };
    g.P = function () {
        Gj.A.P.call(this);
        O(this)
            .J(this.l(), "keydown", this.kf)
            .J(this.l(), "keypress", this.kf);
        O(this)
            .J(this.va, "click", this.$h);
        Oj(this, !0);
        O(this)
            .J(this.Oa, "click", this.ki);
        var a = this.l();
        jf(a, "dialog");
        "" !== this.Fa.id && I(a, "labelledby", this.Fa.id);
        if (!this.ef) {
            this.ef = !1;
            if (this.Z) {
                var a = this.a,
                    b = this.yc();
                a.Ee(this.za);
                a.Ee(b)
            }
            this.Nb && Ej(this, !1)
        }
    };
    g.ga = function () {
        this.Nb && this.L(!1);
        Oj(this, !1);
        Gj.A.ga.call(this)
    };
    g.L = function (a) {
        a != this.Nb && (this.Z || P(this, void 0), Gj.A.L.call(this, a))
    };
    g.Jc = function () {
        Gj.A.Jc.call(this);
        L(this, Sj)
    };
    g.Ic = function () {
        Gj.A.Ic.call(this);
        L(this, Tj)
    };
    g.ri = function () {
        var a = this.a.a,
            b = Ie(Ke(a) || window || window),
            c = Math.max(a.body.scrollWidth, b.width),
            a = Math.max(a.body.scrollHeight, b.height),
            d = vg(wg, this.l());
        "fixed" == kg(this.l()) ? this.Eb.m = new $c(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.Eb.m = new $c(0, 0, c - d.width, a - d.height)
    };
    g.ki = function () {
        Uj(this)
    };

    function Uj(a) {
        var b = a.b,
            c = b && b.nd;
        c ? L(a, new Vj(c, wd(b, c))) && a.L(!1) : a.L(!1)
    }
    g.M = function () {
        this.va = this.Oa = null;
        Gj.A.M.call(this)
    };

    function Wj(a) {
        var b = Hj(new Ij, Jj, !0, !0);
        a.b = b;
        a.va && (a.b ? (b = a.b, b.D = a.va, Qj(b)) : a.va.innerHTML = qd(sd), M(a.va, !!a.b))
    }
    g.$h = function (a) {
        a: {
            for (a = a.target; null != a && a != this.va;) {
                if ("BUTTON" == a.tagName) break a;
                a = a.parentNode
            }
            a = null
        }
        a && !a.disabled && (a = a.name, L(this, new Vj(a, wd(this.b, a))) && this.L(!1))
    };
    g.kf = function (a) {
        var b = !1,
            c = !1,
            d = this.b,
            e = a.target;
        if ("keydown" == a.type)
            if (27 == a.keyCode) {
                var f = d && d.nd,
                    e = "SELECT" == e.tagName && !e.disabled;
                f && !e ? (c = !0, b = L(this, new Vj(f, wd(d, f)))) : e || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && e == this.l()) {
                    this.hd = !0;
                    try {
                        this.gb.focus()
                    } catch (m) {}
                    qh(this.sf, 0, this)
                }
            }
        else if (13 == a.keyCode) {
            if ("BUTTON" == e.tagName && !e.disabled) f = e.name;
            else if (e == this.Oa) Uj(this);
            else if (d) {
                var h = d.rd,
                    k;
                if (k = h) a: {
                    k = d.D.getElementsByTagName("BUTTON");
                    for (var l = 0, p; p = k[l]; l++)
                        if (p.name ==
                            h || p.id == h) {
                            k = p;
                            break a
                        }
                    k = null
                }
                e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
                !k || k.disabled || e || (f = h)
            }
            f && d && (c = !0, b = L(this, new Vj(f, String(wd(d, f)))))
        } else e == this.Oa && 32 == a.keyCode && Uj(this);
        if (b || c) a.h(), a.b();
        b && this.L(!1)
    };

    function Vj(a, b) {
        this.type = Xj;
        this.key = a;
        this.caption = b
    }
    v(Vj, Fa);
    var Xj = "dialogselect",
        Tj = "afterhide",
        Sj = "aftershow";

    function Ij(a) {
        a || Be();
        td.call(this)
    }
    v(Ij, td);
    g = Ij.prototype;
    g.rd = null;
    g.D = null;
    g.nd = null;
    g.Ua = function (a, b, c, d) {
        td.prototype.Ua.call(this, a, b);
        c && (this.rd = a);
        d && (this.nd = a);
        return this
    };

    function Hj(a, b, c, d) {
        return a.Ua(b.key, b.caption, c, d)
    }

    function Qj(a) {
        if (a.D) {
            a.D.innerHTML = qd(sd);
            var b = Be(a.D);
            a.forEach(function (a, d) {
                var e = b.F("BUTTON", {
                    name: d
                }, a);
                d == this.rd && (e.className = "goog-buttonset-default");
                this.D.appendChild(e)
            }, a)
        }
    }
    g.l = function () {
        return this.D
    };
    var Rj = "cancel",
        Pj = "Close",
        Jj = {
            key: "ok",
            caption: "OK"
        },
        Kj = {
            key: Rj,
            caption: "Cancel"
        },
        Yj = {
            key: "yes",
            caption: "Yes"
        },
        Zj = {
            key: "no",
            caption: "No"
        },
        ak = {
            key: "save",
            caption: "Save"
        },
        bk = {
            key: "continue",
            caption: "Continue"
        };
    "undefined" != typeof document && (Hj(new Ij, Jj, !0, !0), Hj(Hj(new Ij, Jj, !0), Kj, !1, !0), Hj(Hj(new Ij, Yj, !0), Zj, !1, !0), Hj(Hj(Hj(new Ij, Yj), Zj, !0), Kj, !1, !0), Hj(Hj(Hj(new Ij, bk), ak), Kj, !0, !0));

    function ck() {
        K.call(this)
    }
    v(ck, K);
    g = ck.prototype;
    g.Ob = 0;
    g.cb = 0;
    g.Ya = 100;
    g.sa = 0;
    g.mb = !1;
    g.Wb = !1;

    function dk(a, b) {
        b = ek(a, b);
        a.Ob != b && (a.Ob = b + a.sa > a.Ya ? a.Ya - a.sa : b < a.cb ? a.cb : b, a.mb || a.Wb || L(a, "change"))
    }
    g.U = function () {
        return ek(this, this.Ob)
    };

    function fk(a, b) {
        b = ek(a, b);
        a.sa != b && (a.sa = 0 > b ? 0 : a.Ob + b > a.Ya ? a.Ya - a.Ob : b, a.mb || a.Wb || L(a, "change"))
    }

    function gk(a, b) {
        if (a.cb != b) {
            var c = a.mb;
            a.mb = !0;
            a.cb = b;
            b + a.sa > a.Ya && (a.sa = a.Ya - a.cb);
            b > a.Ob && dk(a, b);
            b > a.Ya && (a.sa = 0, hk(a, b), dk(a, b));
            a.mb = c;
            a.mb || a.Wb || L(a, "change")
        }
    }

    function ik(a) {
        return ek(a, a.cb)
    }

    function hk(a, b) {
        b = ek(a, b);
        if (a.Ya != b) {
            var c = a.mb;
            a.mb = !0;
            a.Ya = b;
            b < a.Ob + a.sa && dk(a, b - a.sa);
            b < a.cb && (a.sa = 0, gk(a, b), dk(a, a.Ya));
            b < a.cb + a.sa && (a.sa = a.Ya - a.cb);
            a.mb = c;
            a.mb || a.Wb || L(a, "change")
        }
    }

    function jk(a) {
        return ek(a, a.Ya)
    }

    function ek(a, b) {
        return a.cb + 1 * Math.round((b - a.cb) / 1)
    }

    function kk(a) {
        return 1 * Math.round(a / 1)
    };

    function lk(a) {
        N.call(this, a);
        this.b = new ck;
        J(this.b, "change", this.Pg, !1, this)
    }
    v(lk, N);
    var mk = {
        vertical: "progress-bar-vertical",
        horizontal: "progress-bar-horizontal"
    };
    g = lk.prototype;
    g.ba = function () {
        this.c = this.a.F("DIV", "progress-bar-thumb");
        this.D = this.a.F("DIV", mk.horizontal, this.c);
        nk(this);
        I(this.l(), "valuemin", ik(this.b));
        I(this.l(), "valuemax", jk(this.b))
    };
    g.P = function () {
        lk.A.P.call(this);
        F && 7 > he && J(this.l(), "resize", this.Kc, !1, this);
        this.Kc();
        var a = this.l();
        jf(a, "progressbar");
        I(a, "live", "polite")
    };
    g.ga = function () {
        lk.A.ga.call(this);
        ok(this)
    };

    function ok(a) {
        F && 7 > he && Df(a.l(), "resize", a.Kc, !1, a)
    }
    g.R = function (a) {
        lk.A.R.call(this, a);
        pc(this.l(), mk.horizontal);
        a = Fe(document, null, "progress-bar-thumb", this.l())[0];
        a || (a = this.a.F("DIV", "progress-bar-thumb"), this.l()
            .appendChild(a));
        this.c = a
    };
    g.U = function () {
        return this.b.U()
    };

    function pk(a, b) {
        dk(a.b, b);
        a.l() && nk(a)
    }

    function nk(a) {
        I(a.l(), "valuenow", a.U())
    }

    function qk(a, b) {
        hk(a.b, b);
        a.l() && I(a.l(), "valuemax", jk(a.b))
    }
    g.Pg = function () {
        this.Kc();
        L(this, "change")
    };
    g.Kc = function () {
        if (this.c) {
            var a = ik(this.b),
                b = jk(this.b),
                a = (this.U() - a) / (b - a);
            this.c.style.width = Math.round(100 * a) + "%"
        }
    };
    g.M = function () {
        ok(this);
        lk.A.M.call(this);
        this.c = null;
        this.b.Y()
    };

    function rk(a, b) {
        Ji.call(this, null, a || xj.ha(), b);
        this.ya(1, !1);
        this.ya(2, !1);
        this.ya(4, !1);
        this.ya(32, !1);
        this.Db = 1
    }
    v(rk, Ji);
    rk.prototype.P = function () {
        rk.A.P.call(this);
        jf(this.l(), "separator")
    };
    Ad("goog-menuseparator", function () {
        return new rk
    });

    function sk(a) {
        this.a = a || "menu"
    }
    v(sk, pi);
    da(sk);
    g = sk.prototype;
    g.zd = function (a) {
        return "UL" == a.tagName || sk.A.zd.call(this, a)
    };
    g.fc = function (a) {
        return "HR" == a.tagName ? new rk : sk.A.fc.call(this, a)
    };
    g.ib = function (a, b) {
        return Ue(a.l(), b)
    };
    g.V = function () {
        return "goog-menu"
    };
    g.Bd = function (a) {
        sk.A.Bd.call(this, a);
        I(a.l(), "haspopup", "true")
    };

    function tk(a) {
        rk.call(this, xj.ha(), a)
    }
    v(tk, rk);
    Ad("goog-menuseparator", function () {
        return new rk
    });

    function uk(a, b) {
        Wi.call(this, vi, b || sk.ha(), a);
        ej(this, !1)
    }
    v(uk, Wi);
    g = uk.prototype;
    g.bc = !0;
    g.V = function () {
        return this.lb.V()
    };
    g.ib = function (a) {
        if (this.lb.ib(this, a)) return !0;
        for (var b = 0, c = li(this); b < c; b++) {
            var d = mi(this, b);
            if ("function" == typeof d.ib && d.ib(a)) return !0
        }
        return !1
    };
    g.removeItem = function (a) {
        (a = this.removeChild(a, !0)) && a.Y()
    };
    g.L = function (a, b, c) {
        (b = uk.A.L.call(this, a, b)) && a && this.Z && this.bc && Xi(this)
            .focus();
        a && c && ha(c.clientX) ? this.h = new C(c.clientX, c.clientY) : this.h = null;
        return b
    };
    g.Hd = function (a) {
        this.bc && Xi(this)
            .focus();
        return uk.A.Hd.call(this, a)
    };
    g.je = function (a) {
        return a.isEnabled() && a.xa && Fi(a, 2)
    };
    g.R = function (a) {
        for (var b = this.lb, c = Fe(this.a.a, "DIV", b.V() + "-content", a), d = c.length, e = 0; e < d; e++) si(b, this, c[e]);
        uk.A.R.call(this, a)
    };
    g.Cd = function (a) {
        var b = uk.A.Cd.call(this, a);
        b || ki(this, function (c) {
            !b && c.Dg && c.Nd == a.keyCode && (this.isEnabled() && this.Za(oi(this, c)), b = c.Va(a))
        }, this);
        return b
    };
    g.Za = function (a) {
        uk.A.Za.call(this, a);
        var b = mi(this, a);
        if (b) {
            a = this.l() || Je(document);
            var b = b.l(),
                c = a || Je(document),
                d = rg(b),
                e = rg(c),
                f = Fg(c);
            if (c == Je(document)) {
                var h = d.x - c.scrollLeft,
                    d = d.y - c.scrollTop;
                F && !me(10) && (h += f.left, d += f.top)
            } else h = d.x - e.x - f.left, d = d.y - e.y - f.top;
            var f = c.clientHeight - b.offsetHeight,
                e = c.scrollLeft,
                k = c.scrollTop,
                e = e + Math.min(h, Math.max(h - (c.clientWidth - b.offsetWidth), 0)),
                k = k + Math.min(d, Math.max(d - f, 0)),
                b = new C(e, k);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    };

    function vk() {}
    v(vk, gj);
    da(vk);
    vk.prototype.tb = function (a) {
        return vk.A.tb.call(this, a && a.firstChild)
    };
    vk.prototype.ta = function (a, b) {
        var c = Fe(document, "*", "goog-menu", b)[0];
        if (c) {
            M(c, !1);
            De(c)
                .body.appendChild(c);
            var d = new uk;
            ji(d, c);
            wk(a, d)
        }
        return vk.A.ta.call(this, a, b)
    };
    vk.prototype.uc = function (a, b) {
        return vk.A.uc.call(this, [b.F("DIV", "goog-inline-block " + (this.V() + "-caption"), a), b.F("DIV", "goog-inline-block " + (this.V() + "-dropdown"), "\u00a0")], b)
    };
    vk.prototype.V = function () {
        return "goog-menu-button"
    };

    function xk(a, b) {
        uk.call(this, a, b);
        this.bc = !0;
        ej(this, !0);
        this.L(!1, !0);
        this.c = new td
    }
    v(xk, uk);
    g = xk.prototype;
    g.Wc = !1;
    g.df = 0;
    g.R = function (a) {
        xk.A.R.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && yk(this, this.a.l(a), 1)
    };
    g.P = function () {
        xk.A.P.call(this);
        this.c.forEach(this.fe, this);
        var a = O(this);
        a.J(this, "action", this.Yh);
        a.J(this.a.a, "mousedown", this.jf, !0);
        G && a.J(this.a.a, "contextmenu", this.jf, !0)
    };

    function yk(a, b, c, d, e) {
        var f;
        (f = !b) || (f = ka(b), f = !vd(a.c.b, f));
        f && (b ? (c = {
                D: b,
                vf: c,
                Vh: d,
                ue: e ? "contextmenu" : "mousedown",
                Uh: void 0
            }, a.c.Ua(ka(b), c)) : c = null, a.Z && a.fe(c), b = qa(a.ci, b), a.l() && O(a)
            .J(a.l(), "keydown", b))
    }
    g.ci = function (a, b) {
        if (27 == b.keyCode) a.focus();
        else {
            var c = mi(this, this.la);
            if (c) {
                var c = c.l(),
                    d = new qf(b.g, c);
                d.target = c;
                if (32 == b.keyCode || 13 == b.keyCode) Ia(c) ? Mf(c, "keydown", !1, d) : Gf(c, "keydown", !1, d);
                32 == b.keyCode && zk(this)
            }
        }
    };
    g.fe = function (a) {
        O(this)
            .J(a.D, a.ue, this.hi);
        "contextmenu" != a.ue && O(this)
            .J(a.D, "keydown", this.ii)
    };

    function Ak(a, b, c, d) {
        var e = a.ja,
            f;
        (f = a.ja) || (f = 150 > ra() - a.df);
        f && a.Wc ? zk(a) : L(a, "beforeshow") && (c = "undefined" != typeof c ? c : 8, e || (a.l()
            .style.visibility = "hidden"), M(a.l(), !0), b.a(a.l(), c, d), e || (a.l()
            .style.visibility = "visible"), a.Za(-1), a.L(!0))
    }

    function zk(a) {
        a.ja && (a.L(!1), a.ja || (a.df = ra()))
    }
    g.Yh = function () {
        zk(this)
    };
    g.hi = function (a) {
        Ck(this, a)
    };
    g.ii = function (a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Ck(this, a);
        40 == a.keyCode && aj(this)
    };

    function Ck(a, b) {
        for (var c = a.c.jb(), d = 0; d < c.length; d++) {
            var e = wd(a.c, c[d]);
            if (e.D == b.j) {
                c = a;
                d = q(e.vf) ? new ih(e.D, e.vf, !0) : new mh(b.clientX, b.clientY);
                d.h && d.h(5);
                Ak(c, d, e.Vh, e.Uh);
                b.b();
                b.h();
                break
            }
        }
    }
    g.jf = function (a) {
        this.ja && !this.ib(a.target) && zk(this)
    };
    g.Ec = function (a) {
        xk.A.Ec.call(this, a);
        zk(this)
    };
    g.M = function () {
        xk.A.M.call(this);
        this.c && (this.c.clear(), delete this.c)
    };

    function Dk(a, b) {
        N.call(this, a);
        this.c = new ck;
        this.aa = b || Ma;
        J(this.c, "change", this.Re, !1, this)
    }
    v(Dk, N);
    g = Dk.prototype;
    g.Ja = "horizontal";
    g.Pc = !1;
    g.hf = !1;
    g.ff = 0;
    g.Gd = !0;
    g.ba = function () {
        Dk.A.ba.call(this);
        var a = this.a.F("DIV", this.V(this.Ja));
        this.R(a)
    };
    g.R = function (a) {
        Dk.A.R.call(this, a);
        pc(a, this.V(this.Ja));
        a = this.l();
        var b = Fe(document, null, "goog-slider-thumb", a)[0];
        b || (b = this.a.F("DIV", "goog-slider-thumb"), jf(b, "button"), a.appendChild(b));
        this.b = this.h = b;
        jf(this.l(), "slider");
        Ek(this)
    };
    g.P = function () {
        Dk.A.P.call(this);
        this.j = new Ng(this.b);
        this.w = new Ng(this.h);
        this.j.h = !1;
        this.w.h = !1;
        this.j.qd = this.w.qd = ba;
        this.G = new Tf(this.l());
        Fk(this, !0);
        this.l()
            .tabIndex = 0;
        Gk(this)
    };

    function Fk(a, b) {
        b ? (O(a)
            .J(a.j, "beforedrag", a.Lc)
            .J(a.w, "beforedrag", a.Lc)
            .J(a.j, ["start", "end"], a.Nc)
            .J(a.w, ["start", "end"], a.Nc)
            .J(a.G, "key", a.Ke)
            .J(a.l(), "click", a.Mc)
            .J(a.l(), "mousedown", a.Mc), Hk(a, !0)) : (O(a)
            .da(a.j, "beforedrag", a.Lc)
            .da(a.w, "beforedrag", a.Lc)
            .da(a.j, ["start", "end"], a.Nc)
            .da(a.w, ["start", "end"], a.Nc)
            .da(a.G, "key", a.Ke)
            .da(a.l(), "click", a.Mc)
            .da(a.l(), "mousedown", a.Mc), Hk(a, !1))
    }
    g.ga = function () {
        Dk.A.ga.call(this);
        Da(this.j, this.w, this.G, this.C)
    };
    g.Lc = function (a) {
        var b = a.a == this.j ? this.b : this.h,
            c;
        "vertical" == this.Ja ? (c = this.l()
            .clientHeight - b.offsetHeight, c = (c - a.top) / c * (Ik(this) - Jk(this)) + Jk(this)) : c = a.left / (this.l()
            .clientWidth - b.offsetWidth) * (Ik(this) - Jk(this)) + Jk(this);
        c = a.a == this.j ? Math.min(Math.max(c, Jk(this)), this.U() + kk(this.c.sa)) : Math.min(Math.max(c, this.U()), Ik(this));
        Kk(this, b, c)
    };
    g.Nc = function (a) {
        var b = "start" == a.type;
        uc(this.l(), "goog-slider-dragging", b);
        uc(a.target.handle, "goog-slider-thumb-dragging", b);
        a = a.a == this.j;
        b ? (L(this, "e"), L(this, a ? "a" : "c")) : (L(this, "f"), L(this, a ? "b" : "d"))
    };
    g.Ke = function (a) {
        var b = !0;
        switch (a.keyCode) {
        case 36:
            Lk(this, Jk(this));
            break;
        case 35:
            Lk(this, Ik(this));
            break;
        case 33:
            Mk(this, 10);
            break;
        case 34:
            Mk(this, -10);
            break;
        case 37:
            var c = -1;
            Mk(this, a.shiftKey ? 10 * c : 1 * c);
            break;
        case 40:
            Mk(this, a.shiftKey ? -10 : -1);
            break;
        case 39:
            c = 1;
            Mk(this, a.shiftKey ? 10 * c : 1 * c);
            break;
        case 38:
            Mk(this, a.shiftKey ? 10 : 1);
            break;
        default:
            b = !1
        }
        b && a.b()
    };
    g.Mc = function (a) {
        this.l()
            .focus && this.l()
            .focus();
        var b = a.target;
        Ue(this.b, b) || Ue(this.h, b) || (b = "click" == a.type, b && ra() < this.ff + 1E3 || (b || (this.ff = ra()), this.hf ? Lk(this, Nk(this, a)) : (this.Yd(a), this.m = Ok(this, Nk(this, a)), this.W = "vertical" == this.Ja ? this.S < this.m.offsetTop : this.S > this.m.offsetLeft + this.m.offsetWidth, a = De(this.l()), O(this)
            .J(a, "mouseup", this.Xd, !0)
            .J(this.l(), "mousemove", this.Yd), this.B || (this.B = new nh(200), O(this)
                .J(this.B, "tick", this.Te)), this.Te(), oh(this.B))))
    };
    g.Le = function (a) {
        Mk(this, 1 * (0 < a.detail ? -1 : 1));
        a.b()
    };
    g.Te = function () {
        var a;
        if ("vertical" == this.Ja) {
            var b = this.S,
                c = this.m.offsetTop;
            this.W ? b < c && (a = Pk(this, this.m) + 10) : b > c + this.m.offsetHeight && (a = Pk(this, this.m) - 10)
        } else b = this.S, c = this.m.offsetLeft, this.W ? b > c + this.m.offsetWidth && (a = Pk(this, this.m) + 10) : b < c && (a = Pk(this, this.m) - 10);
        q(a) && Kk(this, this.m, a)
    };
    g.Xd = function () {
        this.B && ph(this.B);
        var a = De(this.l());
        O(this)
            .da(a, "mouseup", this.Xd, !0)
            .da(this.l(), "mousemove", this.Yd)
    };

    function Qk(a, b) {
        var c, d = a.l();
        c = tg(b);
        d = tg(d);
        c = new C(c.x - d.x, c.y - d.y);
        return "vertical" == a.Ja ? c.y : c.x
    }
    g.Yd = function (a) {
        this.S = Qk(this, a)
    };

    function Nk(a, b) {
        var c = Jk(a),
            d = Ik(a);
        if ("vertical" == a.Ja) {
            var e = a.b.offsetHeight,
                f = a.l()
                .clientHeight - e,
                e = Qk(a, b) - e / 2;
            return (d - c) * (f - e) / f + c
        }
        e = a.b.offsetWidth;
        f = a.l()
            .clientWidth - e;
        e = Qk(a, b) - e / 2;
        return (d - c) * e / f + c
    }

    function Pk(a, b) {
        if (b == a.b) return a.c.U();
        if (b == a.h) return a.c.U() + kk(a.c.sa);
        throw Error("Illegal thumb element. Neither minThumb nor maxThumb");
    }

    function Mk(a, b) {
        1 > Math.abs(b) && (b = 1 * Sc(b));
        var c = Pk(a, a.b) + b,
            d = Pk(a, a.h) + b,
            c = Math.min(Math.max(c, Jk(a)), Ik(a) - 0),
            d = Math.min(Math.max(d, Jk(a) + 0), Ik(a));
        Rk(a, c, d - c)
    }

    function Kk(a, b, c) {
        var d = ek(a.c, c);
        c = b == a.b ? d : a.c.U();
        b = b == a.h ? d : a.c.U() + kk(a.c.sa);
        c >= Jk(a) && b >= c + 0 && Ik(a) >= b && Rk(a, c, b - c)
    }

    function Rk(a, b, c) {
        Jk(a) <= b && b <= Ik(a) - c && 0 <= c && c <= Ik(a) - b && (b != a.U() || c != kk(a.c.sa)) && (a.c.Wb = !0, fk(a.c, 0), dk(a.c, b), fk(a.c, c), a.c.Wb = !1, a.Re())
    }

    function Jk(a) {
        return ik(a.c)
    }

    function Ik(a) {
        return jk(a.c)
    }

    function Ok(a, b) {
        return b <= a.c.U() + kk(a.c.sa) / 2 ? a.b : a.h
    }
    g.Re = function () {
        Gk(this);
        Ek(this);
        L(this, "change")
    };

    function Gk(a) {
        if (a.b && !a.Pc) {
            var b = Sk(a, Pk(a, a.b)),
                c = Sk(a, Pk(a, a.h));
            "vertical" == a.Ja ? (a.b.style.top = b.y + "px", a.h.style.top = c.y + "px", a.g && (b = Tk(c.y, b.y, a.b.offsetHeight), a.g.style.top = b.offset + "px", a.g.style.height = b.size + "px")) : (a.b.style.left = b.x + "px", a.h.style.left = c.x + "px", a.g && (b = Tk(b.x, c.x, a.b.offsetWidth), a.g.style.left = b.offset + "px", a.g.style.width = b.size + "px"))
        }
    }

    function Tk(a, b, c) {
        var d = Math.ceil(c / 2);
        return {
            offset: a + d,
            size: Math.max(b - a + c - 2 * d, 0)
        }
    }

    function Sk(a, b) {
        var c = new C;
        if (a.b) {
            var d = Jk(a),
                e = Ik(a),
                e = b == d && d == e ? 0 : (b - d) / (e - d);
            "vertical" == a.Ja ? (d = a.l()
                .clientHeight - a.b.offsetHeight, e = Math.round(e * d), c.x = a.b.offsetLeft, c.y = d - e) : (c.x = Math.round(e * (a.l()
                .clientWidth - a.b.offsetWidth)), c.y = a.b.offsetTop)
        }
        return c
    }

    function Lk(a, b) {
        b = Math.min(Math.max(b, Jk(a)), Ik(a));
        a.Pc && (a.N.kb(!0), a.N.Y());
        var c = new eg,
            d = Ok(a, b),
            e = a.U(),
            f = kk(a.c.sa),
            h = Pk(a, d),
            k = Sk(a, h);
        1 > Math.abs(b - h) && (b = Math.min(Math.max(h + (b > h ? 1 : -1), Jk(a)), Ik(a)));
        Kk(a, d, b);
        h = Sk(a, Pk(a, d));
        k = new Dh(d, [k.x, k.y], "vertical" == a.Ja ? [d.offsetLeft, h.y] : [h.x, d.offsetTop], 100);
        k.K = !1;
        dg(c, k);
        if (a.g) {
            var k = Sk(a, e),
                l = Sk(a, e + f),
                e = k,
                f = l;
            d == a.b ? e = h : f = h;
            "vertical" == a.Ja ? (d = Tk(l.y, k.y, a.b.offsetHeight), e = Tk(f.y, e.y, a.b.offsetHeight), h = new Dh(a.g, [a.g.offsetLeft, d.offset], [a.g.offsetLeft, e.offset], 100), d = new Fh(a.g, d.size, e.size, 100), h.K = !1, d.K = !1, dg(c, h), dg(c, d)) : (d = Tk(k.x, l.x, a.b.offsetWidth), e = Tk(e.x, f.x, a.b.offsetWidth), h = new Dh(a.g, [d.offset, a.g.offsetTop], [e.offset, a.g.offsetTop], 100), d = new Eh(a.g, d.size, e.size, 100), h.K = !1, d.K = !1, dg(c, h), dg(c, d))
        }
        a.N = c;
        O(a)
            .J(c, "end", a.Ag);
        a.Pc = !0;
        c.sb(!1)
    }
    g.Ag = function () {
        this.Pc = !1
    };
    g.M = function () {
        Dk.A.M.call(this);
        this.B && this.B.Y();
        delete this.B;
        this.N && this.N.Y();
        delete this.N;
        delete this.b;
        delete this.h;
        this.g && delete this.g;
        this.c.Y();
        delete this.c;
        this.G && (this.G.Y(), delete this.G);
        this.C && (this.C.Y(), delete this.C);
        this.j && (this.j.Y(), delete this.j);
        this.w && (this.w.Y(), delete this.w)
    };
    g.U = function () {
        return this.c.U()
    };
    g.L = function (a) {
        M(this.l(), a);
        a && Gk(this)
    };

    function Ek(a) {
        var b = a.l();
        b && (I(b, "valuemin", Jk(a)), I(b, "valuemax", Ik(a)), I(b, "valuenow", a.U()), I(b, "valuetext", a.aa(a.U()) || ""))
    }

    function Hk(a, b) {
        b ? (a.C || (a.C = new Kg(a.l())), O(a)
                .J(a.C, "mousewheel", a.Le)) : O(a)
            .da(a.C, "mousewheel", a.Le)
    }
    g.nb = function (a) {
        this.Gd != a && L(this, a ? "enable" : "disable") && (this.Gd = a, Fk(this, a), a || this.Xd(), uc(this.l(), "goog-slider-disabled", !a))
    };
    g.isEnabled = function () {
        return this.Gd
    };

    function Uk(a, b) {
        Dk.call(this, a, b);
        fk(this.c, 0)
    }
    v(Uk, Dk);
    var Vk = {
        Rf: "vertical",
        Bi: "horizontal"
    };
    Uk.prototype.V = function (a) {
        return "vertical" == a ? "goog-slider-vertical" : "goog-slider-horizontal"
    };

    function Wk() {
        this.b = []
    }
    v(Wk, tj);
    da(Wk);
    Wk.prototype.Sa = function (a) {
        var b = Wk.A.Sa.call(this, a);
        pc(b, "goog-submenu");
        Xk(this, a, b);
        return b
    };
    Wk.prototype.ta = function (a, b) {
        b = Wk.A.ta.call(this, a, b);
        pc(b, "goog-submenu");
        Xk(this, a, b);
        var c = Fe(document, "DIV", "goog-menu", b);
        if (c.length) {
            var d = new uk(a.a),
                c = c[0];
            M(c, !1);
            a.a.a.body.appendChild(c);
            ji(d, c);
            Yk(a, d, !0)
        }
        return b
    };
    Wk.prototype.Fc = function (a) {
        Wk.A.Fc.call(this, a);
        var b = a.Ea(),
            c = Fe(a.a.a, "SPAN", "goog-submenu-arrow", b)[0];
        Zk(a, c);
        c != b.lastChild && b.appendChild(c);
        I(a.l(), "haspopup", "true")
    };

    function Xk(a, b, c) {
        var d = b.a.F("SPAN");
        d.className = "goog-submenu-arrow";
        Zk(b, d);
        a.tb(c)
            .appendChild(d)
    }

    function Zk(a, b) {
        ni(a) ? (pc(b, "goog-submenu-arrow-rtl"), Ve(b, "\u25c4")) : (rc(b, "goog-submenu-arrow-rtl"), Ve(b, "\u25ba"))
    };

    function $k(a, b, c, d) {
        Q.call(this, a, b, c, d || Wk.ha())
    }
    v($k, Q);
    g = $k.prototype;
    g.dc = null;
    g.Wd = null;
    g.Md = !1;
    g.qa = null;
    g.vc = !1;
    g.P = function () {
        $k.A.P.call(this);
        O(this)
            .J(this.Ba(), "hide", this.lf);
        this.qa && al(this, this.qa, !0)
    };
    g.ga = function () {
        O(this)
            .da(this.Ba(), "hide", this.lf);
        this.qa && (al(this, this.qa, !1), this.vc || (this.qa.ga(), Re(this.qa.l())));
        $k.A.ga.call(this)
    };
    g.M = function () {
        this.qa && !this.vc && this.qa.Y();
        this.qa = null;
        $k.A.M.call(this)
    };
    g.bb = function (a, b) {
        $k.A.bb.call(this, a);
        b && (bl(this)
            .eb = !0);
        a || (this.dc && n.clearTimeout(this.dc), this.dc = qh(this.qb, 218, this))
    };
    g.Vd = function () {
        var a = this.Ba();
        a && $i(a) == this && (cl(this, !0), dl(this))
    };
    g.qb = function () {
        var a = this.qa;
        a && a.Ba() == this && (cl(this, !1), ki(a, function (a) {
            "function" == typeof a.qb && a.qb()
        }))
    };

    function el(a) {
        a.dc && n.clearTimeout(a.dc);
        a.Wd && n.clearTimeout(a.Wd)
    }
    g.L = function (a, b) {
        var c = $k.A.L.call(this, a, b);
        c && !this.xa && this.qb();
        return c
    };

    function dl(a) {
        ki(a.Ba(), function (a) {
            a != this && "function" == typeof a.qb && (a.qb(), el(a))
        }, a)
    }
    g.Va = function (a) {
        var b = a.keyCode,
            c = ni(this) ? 37 : 39,
            d = ni(this) ? 39 : 37;
        if (!this.Md) {
            if (!this.isEnabled() || b != c && b != this.Nd) return !1;
            this.Vd();
            aj(bl(this));
            el(this)
        } else if (!bl(this)
            .Va(a))
            if (b == d) this.qb();
            else return !1;
        a.b();
        return !0
    };
    g.ai = function () {
        if (this.qa.Ba() == this) {
            el(this);
            var a = this.Sb();
            a.Za(oi(a, this));
            dl(this)
        }
    };
    g.lf = function (a) {
        a.target == this.Sb() && (this.qb(), el(this))
    };
    g.mc = function (a) {
        this.isEnabled() && (el(this), this.Wd = qh(this.Vd, 218, this));
        $k.A.mc.call(this, a)
    };
    g.wb = function (a) {
        el(this);
        if (Fi(this, 8) || Fi(this, 16)) return $k.A.wb.call(this, a);
        this.Vd();
        return !0
    };

    function cl(a, b) {
        !b && bl(a) && bl(a)
            .Za(-1);
        L(a, fi(64, b));
        var c = bl(a);
        b != a.Md && uc(a.l(), "goog-submenu-open", b);
        if (b != c.ja && (b && (c.Z || P(c, void 0), c.Za(-1)), c.L(b), b)) {
            var c = new ih(a.l(), 12, !1),
                d = bl(a),
                e = d.l();
            d.ja || (e.style.visibility = "hidden", M(e, !0));
            c.a(e, 8);
            d.ja || (M(e, !1), e.style.visibility = "visible")
        }
        a.Md = b
    }

    function al(a, b, c) {
        var d = O(a);
        (c ? d.J : d.da)
        .call(d, b, "enter", a.ai)
    }

    function fl(a, b) {
        bl(a)
            .H(b, !0)
    }
    g.removeItem = function (a) {
        (a = bl(this)
            .removeChild(a, !0)) && a.Y()
    };

    function bl(a) {
        a.qa ? a.vc && a.qa.Ba() != a && hi(a.qa, a) : Yk(a, new uk(a.a), !0);
        a.qa.l() || a.qa.ba();
        return a.qa
    }

    function Yk(a, b, c) {
        var d = a.qa;
        b != d && (d && (a.qb(), a.Z && al(a, d, !1)), a.qa = b, a.vc = !c, b && (hi(b, a), b.L(!1, !0), b.bc = !1, ej(b, !1), a.Z && al(a, b, !0)))
    }
    g.ib = function (a) {
        return bl(this)
            .ib(a)
    };
    Ad("goog-submenu", function () {
        return new $k(null)
    });

    function gl() {
        this.a = "tablist"
    }
    v(gl, pi);
    da(gl);
    gl.prototype.V = function () {
        return "goog-tab-bar"
    };
    gl.prototype.Ud = function (a, b, c) {
        this.c || (this.b || hl(this), this.c = hb(this.b));
        var d = this.c[b];
        d ? (ti(a, d == il || d == jl ? vi : ui), a.j = d) : gl.A.Ud.call(this, a, b, c)
    };
    gl.prototype.Ad = function (a) {
        var b = gl.A.Ad.call(this, a);
        this.b || hl(this);
        b.push(this.b[a.j]);
        return b
    };

    function hl(a) {
        var b = a.V();
        a.b = kb(kl, b + "-top", ll, b + "-bottom", il, b + "-start", jl, b + "-end")
    };

    function ml() {}
    v(ml, wi);
    da(ml);
    g = ml.prototype;
    g.V = function () {
        return "goog-tab"
    };
    g.Tb = function () {
        return "tab"
    };
    g.Sa = function (a) {
        var b = ml.A.Sa.call(this, a);
        (a = a.rb()) && this.$a(b, a);
        return b
    };
    g.ta = function (a, b) {
        b = ml.A.ta.call(this, a, b);
        var c = this.rb(b);
        c && a.Uc(c);
        Gi(a, 8) && (c = a.Ba()) && ia(c.$b) && (Pi(a, 8, !1), c.$b(a));
        return b
    };
    g.rb = function (a) {
        return a.title || ""
    };
    g.$a = function (a, b) {
        a && (a.title = b || "")
    };

    function nl(a, b, c) {
        Ji.call(this, a, b || ml.ha(), c);
        this.ya(8, !0);
        this.Pb |= 9
    }
    v(nl, Ji);
    nl.prototype.rb = function () {
        return this.b
    };
    nl.prototype.$a = function (a) {
        this.c.$a(this.l(), a);
        this.Uc(a)
    };
    nl.prototype.Uc = function (a) {
        this.b = a
    };
    Ad("goog-tab", function () {
        return new nl(null)
    });

    function ol(a, b, c) {
        a = a || kl;
        ti(this, a == il || a == jl ? vi : ui);
        this.j = a;
        Wi.call(this, this.Cb, b || gl.ha(), c);
        pl(this)
    }
    v(ol, Wi);
    var kl = "top",
        ll = "bottom",
        il = "start",
        jl = "end";
    g = ol.prototype;
    g.fb = null;
    g.P = function () {
        ol.A.P.call(this);
        pl(this)
    };
    g.M = function () {
        ol.A.M.call(this);
        this.fb = null
    };
    g.removeChild = function (a, b) {
        ql(this, a);
        return ol.A.removeChild.call(this, a, b)
    };
    g.Sd = function (a) {
        ol.A.Sd.call(this, a);
        this.$b(mi(this, a))
    };
    g.$b = function (a) {
        a ? Qi(a, !0) : this.fb && Qi(this.fb, !1)
    };

    function ql(a, b) {
        if (b && b == a.fb) {
            for (var c = oi(a, b), d = c - 1; b = mi(a, d); d--)
                if (b.xa && b.isEnabled()) {
                    a.$b(b);
                    return
                }
            for (c += 1; b = mi(a, c); c++)
                if (b.xa && b.isEnabled()) {
                    a.$b(b);
                    return
                }
            a.$b(null)
        }
    }
    g.Hh = function (a) {
        this.fb && this.fb != a.target && Qi(this.fb, !1);
        this.fb = a.target
    };
    g.Jh = function (a) {
        a.target == this.fb && (this.fb = null)
    };
    g.Fh = function (a) {
        ql(this, a.target)
    };
    g.Gh = function (a) {
        ql(this, a.target)
    };
    g.ic = function () {
        $i(this) || this.Za(oi(this, this.fb || mi(this, 0)))
    };

    function pl(a) {
        O(a)
            .J(a, "select", a.Hh)
            .J(a, "unselect", a.Jh)
            .J(a, "disable", a.Fh)
            .J(a, "hide", a.Gh)
    }
    Ad("goog-tab-bar", function () {
        return new ol
    });

    function rl(a, b, c) {
        Aj.call(this, a, b || gj.ha(), c);
        this.ya(16, !0)
    }
    v(rl, Aj);
    Ad("goog-toggle-button", function () {
        return new rl(null)
    });

    function sl() {}
    v(sl, gj);
    da(sl);
    sl.prototype.V = function () {
        return "goog-toolbar-button"
    };

    function tl(a, b, c) {
        Aj.call(this, a, b || sl.ha(), c)
    }
    v(tl, Aj);
    Ad("goog-toolbar-button", function () {
        return new tl(null)
    });

    function ul() {}
    v(ul, vk);
    da(ul);
    ul.prototype.V = function () {
        return "goog-toolbar-menu-button"
    };

    function vl() {}
    v(vl, xj);
    da(vl);
    vl.prototype.Sa = function (a) {
        return a.a.F("DIV", zi(this, a)
            .join(" ") + " goog-inline-block", "\u00a0")
    };
    vl.prototype.ta = function (a, b) {
        b = vl.A.ta.call(this, a, b);
        pc(b, "goog-inline-block");
        return b
    };
    vl.prototype.V = function () {
        return "goog-toolbar-separator"
    };

    function wl() {
        this.a = "toolbar"
    }
    v(wl, pi);
    da(wl);
    wl.prototype.fc = function (a) {
        return "HR" == a.tagName ? new rk(vl.ha()) : wl.A.fc.call(this, a)
    };
    wl.prototype.V = function () {
        return "goog-toolbar"
    };
    wl.prototype.ye = function () {
        return ui
    };

    function xl(a, b, c) {
        Wi.call(this, b, a || wl.ha(), c)
    }
    v(xl, Wi);
    xl.prototype.ic = function (a) {
        xl.A.ic.call(this, a);
        this.eb || aj(this)
    };

    function yl(a, b) {
        rk.call(this, a || vl.ha(), b)
    }
    v(yl, rk);
    Ad("goog-toolbar-separator", function () {
        return new yl
    });

    function zl(a, b, c) {
        rl.call(this, a, b || sl.ha(), c)
    }
    v(zl, rl);
    Ad("goog-toolbar-toggle-button", function () {
        return new zl(null)
    });
    var Al = Rc() || B("iPod"),
        Bl = B("iPad"),
        Cl = B("Android") && !((B("Chrome") || B("CriOS")) && !Qc() && !B("Edge") || B("Firefox") || Qc() || B("Silk"));
    var Dl = !F;

    function El(a, b) {
        return Dl && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b)
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase())
    };

    function Fl(a, b, c, d, e) {
        Aj.call(this, a, c || vk.ha(), d);
        this.ya(64, !0);
        this.m = new lh(null, 9);
        b && wk(this, b);
        this.j = new nh(500);
        !Al && !Bl || H("533.17.9") || (this.Qc = !0);
        this.S = e || sk.ha()
    }
    v(Fl, Aj);
    g = Fl.prototype;
    g.Qc = !1;
    g.P = function () {
        Fl.A.P.call(this);
        Gl(this, !0);
        this.b && Hl(this, this.b, !0);
        I(this.D, "haspopup", !!this.b)
    };
    g.ga = function () {
        Fl.A.ga.call(this);
        Gl(this, !1);
        if (this.b) {
            this.pa(!1);
            this.b.ga();
            Hl(this, this.b, !1);
            var a = this.b.l();
            a && Re(a)
        }
    };
    g.M = function () {
        Fl.A.M.call(this);
        this.b && (this.b.Y(), delete this.b);
        delete this.W;
        this.j.Y()
    };
    g.Vb = function (a) {
        Fl.A.Vb.call(this, a);
        this.Wa() && (this.pa(!Gi(this, 64), a), this.b && (this.b.eb = Gi(this, 64)))
    };
    g.Fb = function (a) {
        Fl.A.Fb.call(this, a);
        this.b && !this.Wa() && (this.b.eb = !1)
    };
    g.wb = function () {
        Oi(this, !1);
        return !0
    };
    g.Zg = function (a) {
        this.b && this.b.ja && !this.ib(a.target) && this.pa(!1)
    };
    g.ib = function (a) {
        return a && Ue(this.l(), a) || this.b && this.b.ib(a) || !1
    };
    g.Ub = function (a) {
        if (32 == a.keyCode) {
            if (a.b(), "keyup" != a.type) return !0
        } else if ("key" != a.type) return !1;
        if (this.b && this.b.ja) {
            var b = 13 == a.keyCode || 32 == a.keyCode,
                c = this.b.Va(a);
            return 27 == a.keyCode || b ? (this.pa(!1), !0) : c
        }
        return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.pa(!0, a), !0) : !1
    };
    g.nh = function () {
        this.pa(!1)
    };
    g.oh = function () {
        this.Wa() || this.pa(!1)
    };
    g.Gc = function (a) {
        this.Qc || this.pa(!1);
        Fl.A.Gc.call(this, a)
    };

    function wk(a, b) {
        var c = a.b;
        b != c && (c && (a.pa(!1), a.Z && Hl(a, c, !1), delete a.b), a.Z && I(a.D, "haspopup", !!b), b && (a.b = b, hi(b, a), b.L(!1), c = a.Qc, (b.bc = c) && ej(b, !0), a.Z && Hl(a, b, !0)))
    }
    g.removeItem = function (a) {
        this.b || wk(this, new uk(this.a, this.S));
        (a = (this.b || null)
            .removeChild(a, !0)) && a.Y()
    };
    g.L = function (a, b) {
        var c = Fl.A.L.call(this, a, b);
        c && !this.xa && this.pa(!1);
        return c
    };
    g.nb = function (a) {
        Fl.A.nb.call(this, a);
        this.isEnabled() || this.pa(!1)
    };
    g.pa = function (a, b) {
        Fl.A.pa.call(this, a);
        if (this.b && Gi(this, 64) == a) {
            if (a) this.b.Z || P(this.b, void 0), this.N = qg(this.l()), this.C = xg(this.l()), Il(this), !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.Za(-1) : aj(this.b);
            else {
                Oi(this, !1);
                this.b.eb = !1;
                var c = this.l();
                c && (I(c, "activedescendant", ""), I(c, "owns", ""));
                null != this.w && (this.w = void 0, (c = this.b.l()) && ug(c, "", ""))
            }
            this.b.L(a, !1, b);
            if (!this.Ga) {
                var c = O(this),
                    d = a ? c.J : c.da;
                d.call(c, this.a.a, "mousedown", this.Zg, !0);
                this.Qc && d.call(c, this.b, "blur", this.oh);
                d.call(c,
                    this.j, "tick", this.ji);
                a ? oh(this.j) : ph(this.j)
            }
        }
        this.b && this.b.l() && this.b.D.removeAttribute("aria-hidden")
    };

    function Il(a) {
        if (a.b.Z) {
            var b = a.m;
            a.m.b = a.W || a.l();
            var c = a.b.l();
            a.b.ja || (c.style.visibility = "hidden", M(c, !0));
            !a.w && a.m.m && a.m.g & 32 && (a.w = vg(wg, c));
            b.a(c, b.c ^ 1, null, a.w);
            a.b.ja || (M(c, !1), c.style.visibility = "visible")
        }
    }
    g.ji = function () {
        var a = xg(this.l()),
            b = qg(this.l()),
            c;
        c = this.C;
        (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.N, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
        c && (this.C = a, this.N = b, Il(this))
    };

    function Hl(a, b, c) {
        var d = O(a);
        c = c ? d.J : d.da;
        c.call(d, b, "action", a.nh);
        c.call(d, b, "close", a.Mg);
        c.call(d, b, "highlight", a.Ng);
        c.call(d, b, "unhighlight", a.Og)
    }

    function Gl(a, b) {
        var c = O(a);
        (b ? c.J : c.da)
        .call(c, a.l(), "keydown", a.kh)
    }
    g.Ng = function (a) {
        (a = a.target.l()) && Jl(this, a)
    };
    g.kh = function (a) {
        Fi(this, 32) && this.l() && this.b && this.b.ja && a.h()
    };
    g.Og = function () {
        if (!$i(this.b)) {
            var a = this.l();
            I(a, "activedescendant", "");
            I(a, "owns", "")
        }
    };
    g.Mg = function (a) {
        if (Gi(this, 64) && a.target instanceof Q) {
            a = a.target;
            var b = a.l();
            a.xa && Gi(a, 2) && null != b && Jl(this, b)
        }
    };

    function Jl(a, b) {
        var c = a.l(),
            d = kf(b, "activedescendant"),
            d = De(b)
            .getElementById(d) || b;
        if (!d.id) {
            var e = zd.ha();
            d.id = ":" + (e.a++)
                .toString(36)
        }
        lf(c, d);
        I(c, "owns", d.id)
    }
    Ad("goog-menu-button", function () {
        return new Fl(null)
    });

    function Kl(a, b, c, d) {
        Fl.call(this, a, b, c || ul.ha(), d)
    }
    v(Kl, Fl);
    Ad("goog-toolbar-menu-button", function () {
        return new Kl(null)
    });

    function Ll(a, b) {
        b || (b = {});
        var c = window,
            d;
        d = a instanceof id ? a : md("undefined" != typeof a.href ? a.href : String(a));
        var e = b.target || a.target,
            f = [],
            h;
        for (h in b) switch (h) {
        case "width":
        case "height":
        case "top":
        case "left":
            f.push(h + "=" + b[h]);
            break;
        case "target":
        case "noreferrer":
            break;
        default:
            f.push(h + "=" + (b[h] ? 1 : 0))
        }
        f = f.join(",");
        (Rc() || B("iPad") || B("iPod")) && c.navigator && c.navigator.standalone && e && "_self" != e ? (f = c.document.createElement("A"), d = d instanceof id ? d : md(d), f.href = kd(d), f.setAttribute("target", e),
            b.noreferrer && f.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(d), c = {}) : b.noreferrer ? (c = c.open("", e, f), d = kd(d), c && (be && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), c.opener = null, d = '<META HTTP-EQUIV="refresh" content="0; url=' + yb(d) + '">', d = rd(d), c.document.write(qd(d)), c.document.close())) : c = c.open(kd(d), e, f);
        return c
    };

    function Ml(a, b, c) {
        this.a = a || null;
        this.c = q(b) ? b : null;
        this.b = q(c) ? c : null
    }

    function Nl(a) {
        return {
            referenceUid: a.a,
            objectUid: a.c,
            frame: a.b
        }
    };

    function Ol(a) {
        this.h = this.j = this.g = this.K = null;
        this.w = !1;
        if (a)
            if (a instanceof Ol) this.K = a.K, this.g = a.g, this.j = a.j, this.h = a.h;
            else if (a instanceof Ml) this.g = a;
        else {
            var b = a.view;
            this.g = new Ml(b.referenceUid, b.objectUid, b.frame);
            this.j = a.fontSize;
            this.h = a.color
        }
    }
    Ol.prototype.na = function () {
        return this.K
    };
    Ol.prototype.clone = function () {
        return null
    };
    Ol.prototype.Aa = function (a) {
        var b = this.h || "#71c181";
        a.font = "normal " + (this.j || "11pt") + " sans-serif";
        a.fillStyle = b;
        a.strokeStyle = b
    };

    function Pl(a, b) {
        var c;
        if (!b || a.w) c = !1;
        else {
            c = a.g;
            var d = Ql(b),
                e = Rl(b);
            c = null !== c.a && c.a !== d || null !== c.c && c.c !== e || null !== c.b && c.b !== Sl(b) ? !1 : !0
        }
        return c
    }
    Ol.prototype.vb = function () {
        return !1
    };

    function Tl(a, b, c, d, e) {
        var f = d / 2 * .5522848,
            h = e / 2 * .5522848,
            k = b + d,
            l = c + e;
        d = b + d / 2;
        e = c + e / 2;
        a.beginPath();
        a.moveTo(b, e);
        a.bezierCurveTo(b, e - h, d - f, c, d, c);
        a.bezierCurveTo(d + f, c, k, e - h, k, e);
        a.bezierCurveTo(k, e + h, d + f, l, d, l);
        a.bezierCurveTo(d - f, l, b, e + h, b, e);
        a.closePath();
        a.stroke()
    }

    function Ul(a, b) {
        var c = a.strokeStyle;
        a.strokeStyle = "black";
        a.translate(1, 1);
        Vl(a, b);
        a.translate(-1, -1);
        a.strokeStyle = c;
        Vl(a, b)
    }

    function Vl(a, b) {
        for (var c = 0; c < b.length; c++) a.beginPath(), a.moveTo(b[c].a.v(), b[c].a.o()), a.lineTo(b[c].b.v(), b[c].b.o()), a.stroke()
    }

    function Wl(a, b, c) {
        var d = a.strokeStyle;
        b = Math.floor(b) + .5;
        c = Math.floor(c) + .5;
        a.lineWidth = 1;
        a.strokeStyle = "black";
        a.strokeRect(b - 1, c - 1, 4, 4);
        a.strokeStyle = d;
        a.strokeRect(b - 2, c - 2, 4, 4)
    };

    function Xl() {
        K.call(this)
    }
    v(Xl, K);

    function Yl(a, b) {
        this.c = a;
        this.a = b || null;
        this.b = null
    }
    Yl.prototype.na = function () {
        return this.c
    };
    Yl.prototype.gc = function () {
        return this.a
    };
    Yl.prototype.Ce = function () {
        return this.b
    };

    function Zl(a) {
        this.b = a;
        this.a = null
    }
    Zl.prototype.na = function () {
        return this.b
    };
    Zl.prototype.Ce = function () {
        return this.a
    };

    function $l(a) {
        K.call(this);
        this.a = a;
        this.b = "https://api.box.com/2.0/";
        this.c = "https://dl.boxcloud.com/api/2.0/internal_files/";
        this.g = "https://upload.box.com/api/2.0/"
    }
    v($l, Xl);
    g = $l.prototype;
    g.Ab = function (a, b, c, d, e, f) {
        e = e || {};
        e.Authorization = "Bearer " + this.a;
        Rh(a, b, c, d, e, f)
    };
    g.Ae = function (a, b) {
        var c = this.b + "files/" + z(a);
        this.Ab(c + "?fields=file_version,name,representations", b)
    };
    g.pd = function (a, b, c) {
        var d = b,
            e = null,
            f = b.indexOf("/"); - 1 !== f && (d = b.substring(0, f), e = b.substring(f + 1));
        var h = this;
        am(this, a, d, function (b) {
            b = ci(b.target);
            if ("error" === b.type && 409 !== b.status && c) c(null, b);
            else {
                var d = null;
                if(409 === b.status)
                {
					angular.element(document.getElementById('patient-details-page'))
                                    .scope()
                                    .showDicomUploadWarning("File already Exists");
                    return false;
				}
                409 === b.status ? d = b.context_info.conflicts[0].id : "folder" === b.type && (d = b.id);
                null !== e ? h.pd(d, e, c) : c && (b = new Zl(d), b.a = a, c(b))
            }
        })
    };

    function am(a, b, c, d) {
		var e = a.b + "folders";
        b = {
            parent: {
                id: b
            },
            name: c
        };
        a = {
            Authorization: "Bearer " + a.a,
            "Content-Type": "application/json"
        };
        c = new Kh;
        d && J(c, "complete", d, !1, void 0);
        Sh(c, e, "POST", Pa(b), a)
    }
    g.Xc = function (a, b, c, d) {
        var e = this.g + "files/content",
            f = null;
        c instanceof ArrayBuffer ? f = new Blob([c]) : f = c;
        c = {
            parent: {
                id: a
            },
            name: b
        };
        var h = new FormData;
        h.append("attributes", Pa(c));
        h.append("file", f, b);
        
                
        this.Ab(e, function (b) {
            var c = ci(b.target);
            if ("error" === c.type && 409 !== c.status && d) {
				d(null, c);
            } else {
                //to save the uploaded image in database
				if (undefined === c.status) {
					
                    var current_patient_id = angular.element(document.getElementById('patient-details-page'))
                        .scope()
                        .currentPatientId;
                    var api_url = angular.element(document.getElementById('patient-details-page'))
                        .scope()
                        .apiUrl;
                    function getCookie(name)
					{
						var re = new RegExp(name + "=([^;]+)");
						var value = re.exec(document.cookie);
						return (value != null) ? unescape(value[1]) : null;
					}
					var token = getCookie("token");
                    var data = {};
                    data.dicom_id = c.entries[0].id;
                    data.file_id = c.entries[0].file_version.id;
                    data.file_name = c.entries[0].name;
                    data.file_type = 'dcm';
                    data.patient_id = current_patient_id;
							
                    if (data.file_name != 'study.boxdicom') {
                        $.ajax({
                            url: api_url + 'api/v1/dicom/saveFile',
                            type: 'POST',
                            headers: { 'auth_token': token },
                            data: data,
                            success: function (data) {
								angular.element(document.getElementById('patient-details-page'))
                                    .scope()
                                    .refreshPatientFiles();
                                    angular.element(document.getElementById('my-container')).scope().showDicomLoader = false;
                            },
                            error: function (err) {
								console.log(err);
                            }
                        });
                    }
                }
                var e = b = null;
                "error" === c.type || 409 === c.status ? (e = c.context_info.conflicts, b = e.id, e = e.file_version.id) : c.entries && (e = c.entries[0], b = e.id, e = e.file_version.id);
                d && (b = new Yl(b), b.a = e, b.b = a, d(b))
            }
        }, "POST", h)
    };
    g.pe = function () {};
    g.oe = function () {};
    g.yf = function () {};
    g.xf = function () {};
    g.ne = function () {};
    g.qf = function () {};
    g.se = function () {};
    g.ie = function (a) {
        a = this.b + "files/" + z(a) + "/thumbnail.png";
        a += "?min_width=" + z((160)
            .toString());
        a += "&min_height=" + z((160)
            .toString());
        return a += "&access_token=" + z(this.a)
    };
    g.vd = function (a, b, c, d) {
        var e = d || {};
        "png" === c && (c = "png_2048x2048");
        d = this.c;
        d += z(a);
        d = d + "/versions/" + z(b);
        d += "/representations/";
        d += z(c);
        d += "/content/?access_token=";
        d += z(this.a);
        (a = w(e, "frameIndex", 0)) && (d += "&frameIndex=" + z(a));
        (a = w(e, "dimensions")) && (d += "&dimensions=" + z(a));
        return d
    };
    g.We = function () {
        return !1
    };
    g.ze = function () {
        throw Error("BoxApiClient does not support DICOM search");
    };

    function bm(a, b, c) {
        K.call(this);
        this.a = a;
        this.b = b;
        this.c = c
    }
    v(bm, Xl);
    g = bm.prototype;
    g.Ab = function (a, b, c, d, e, f) {
        a = cm(this, a);
        Rh(a, b, c, d, e, f, !0)
    };
    g.Ae = function (a, b) {
        this.Ab("/index.php?rm=box_dicom_file_info&fileId=" + z(a), b)
    };
    g.pd = function (a, b, c) {
        var d = new FormData;
        b = b.split("/");
        for (var e = 0; e < b.length; e++) d.append("relative_folder_path[]", b[e]);
        d.append("parent_folder_id", a);
        d.append("last_modified_date", (new Date)
            .toString());
        d.append("upload_type", "html5");
        d.append("request_token", this.a);
        d.append("realtime_subscriber_id", "");
        this.Ab("/index.php?rm=box_create_subfolder_path", function (a) {
            a = ci(a.target);
            if ("success" !== a.status) c && c(null, a);
            else if (c) {
                var b = new Zl(a.subfolder_id.toString());
                b.a = a.parent_folder_id.toString();
                c(b)
            }
        }, "POST", d)
    };
    g.Xc = function (a, b, c, d) {
        var e = new FormData;
        e.append("request_token", this.a);
        e.append("folder_id", a);
        e.append("name", b);
        e.append("created_date", "0");
        e.append("last_modified_date", (new Date)
            .toString());
        e.append("upload_type", "html5");
        e.append("realtime_subscriber_id", "");
        var f = this;
        this.Ab("/index.php?rm=box_start_upload", function (e) {
            e = ci(e.target);
            "success" !== e.status ? d && d(null, e) : dm(f, a, b, c, e, d)
        }, "POST", e)
    };

    function dm(a, b, c, d, e, f) {
        var h = new Gd(e.url_options.html5_upload_url);
        Td(h, "upload_session_id", e.upload_session_id);
        Td(h, "folder_id", b);
        Td(h, "upload_type", "html5");
        Td(h, "last_modified_date", (new Date)
            .toString());
        Td(h, "realtime_subscriber_id", "");
        Td(h, "request_token", a.a);
        b = 0;
        d instanceof ArrayBuffer ? b = d.byteLength : d instanceof Blob && (b = d.size);
        a.Ab(h.toString(), function (a) {
                a = ci(a.target);
                if ("success" !== a.status) f && f(null, a);
                else if (f) {
                    var b = new Yl(a.id.toString());
                    b.a = a.version.toString();
                    f(b)
                }
            },
            "POST", d, {
                "Content-Type": "application/octet-stream",
                "X-File-Name": c,
                "X-File-Size": b
            })
    }
    g.pe = function (a, b, c, d) {
        em(this, "d_" + a, c, d)
    };
    g.oe = function (a, b, c, d) {
        em(this, "f_" + a, c, d)
    };

    function em(a, b, c, d) {
        var e = new FormData;
        e.append("itemTypedId", b);
        e.append("request_token", a.a);
        a = new Kh;
        a.g = !0;
        c && J(a, "success", c, !1, d);
        Sh(a, "/index.php?rm=box_share_item_by_typed_id", "POST", e)
    }
    g.yf = function (a, b, c, d) {
        fm(this, "d_" + a, b, c, d)
    };
    g.xf = function (a, b, c, d) {
        fm(this, "f_" + a, b, c, d)
    };

    function fm(a, b, c, d, e) {
        var f = new FormData;
        f.append("itemTypedId", b);
        f.append("accessLevel", c);
        f.append("request_token", a.a);
        a = new Kh;
        a.g = !0;
        d && J(a, "success", d, !1, e);
        Sh(a, "/index.php?rm=box_share_item_change_access_level", "POST", f)
    }
    g.ne = function (a, b, c, d) {
        var e = null,
            e = u(b) ? b : Pa(b);
        b = new Gd("/index.php");
        Td(b, "rm", "box_annotations_create");
        a = "request_token=" + z(this.a) + "&fileId=" + z(a) + "&location=" + z(e);
        e = new Kh;
        e.g = !0;
        c && J(e, "success", c, !1, d);
        Sh(e, b.toString(), "POST", a, {
            "Content-Type": "application/x-www-form-urlencoded"
        })
    };
    g.qf = function (a, b, c) {
        var d = new Gd("/index.php");
        Td(d, "rm", "box_annotations_get");
        Td(d, "request_token", this.a);
        Td(d, "fileId", a);
        a = new Kh;
        a.g = !0;
        b && J(a, "success", b, !1, c);
        Sh(a, d.toString(), "GET")
    };
    g.se = function (a, b, c, d) {
        var e = new Gd("/index.php");
        Td(e, "rm", "box_annotations_delete");
        a = "request_token=" + z(this.a) + "&fileId=" + z(a) + "&annotationId=" + z(b);
        b = new Kh;
        b.g = !0;
        c && J(b, "success", c, !1, d);
        Sh(b, e.toString(), "POST", a, {
            "Content-Type": "application/x-www-form-urlencoded"
        })
    };
    g.ie = function (a, b) {
        var c;
        c = "/representation/file_version_" + z(b);
        return cm(this, c + "/thumb_160.jpg", !0)
    };
    g.vd = function (a, b, c, d) {
        if ("original" === c) return cm(this, "/index.php?rm=box_dicom_file_contents&fileId=" + a);
        d = d || {};
        var e = w(d, "frameIndex", 0),
            f = null,
            h = null;
        switch (c) {
        case "dicom":
            f = "dicom";
            h = "dcm";
            break;
        case "png":
            f = "image_2048", h = "png"
        }
        if (b) return a = "/representation/file_version_" + z(b), a += "/" + z(f), q(d.frameIndex) && (a += "/" + (1 + parseInt(e, 10))
            .toString()), a += "." + z(h), cm(this, a, !0);
        a = "/index.php?rm=box_dicom_file_representation&fileId=" + z(a);
        a += "&rep=" + z(f);
        a += "&frame=" + parseInt(e, 10)
            .toString();
        return cm(this,
            a)
    };
    g.We = function () {
        return !0
    };
    g.ze = function (a) {
        return cm(this, "/index.php?rm=box_dicom_file_list&fileId=" + z(a))
    };

    function cm(a, b, c) {
        if (!a.b && !a.c) return b;
        b = Xd(b);
        a.b && Td(b, c ? "shared_name" : "sharedName", a.b);
        a.c && Td(b, c ? "vanity_name" : "vanityName", a.c);
        return b.toString()
    };
    var gm = {
        "ISO_IR 100": "ISO-8859-1",
        "ISO_IR 101": "ISO-8859-2",
        "ISO_IR 109": "ISO-8859-3",
        "ISO_IR 110": "ISO-8859-4",
        "ISO_IR 144": "ISO-8859-5",
        "ISO_IR 127": "ISO-8859-6",
        "ISO_IR 126": "ISO-8859-7",
        "ISO_IR 138": "ISO-8859-8",
        "ISO_IR 148": "ISO-8859-9",
        "ISO_IR 13": "SJIS",
        "ISO_IR 166": "TIS-620",
        "ISO 2022 IR 6": "US-ASCII",
        "ISO 2022 IR 100": "ISO-8859-1",
        "ISO 2022 IR 101": "ISO-8859-2",
        "ISO 2022 IR 109": "ISO-8859-3",
        "ISO 2022 IR 110": "ISO-8859-4",
        "ISO 2022 IR 144": "ISO-8859-5",
        "ISO 2022 IR 127": "ISO-8859-6",
        "ISO 2022 IR 126": "ISO-8859-7",
        "ISO 2022 IR 138": "ISO-8859-8",
        "ISO 2022 IR 148": "ISO-8859-9",
        "ISO 2022 IR 13": "SJIS",
        "ISO 2022 IR 166": "TIS-620",
        "ISO 2022 IR 87": "ISO-2022-JP",
        "ISO 2022 IR 159": "EUC-JP",
        "ISO 2022 IR 149": "ISO-2022-KR",
        "ISO_IR 192": "UTF-8",
        GB18030: "GB18030"
    };

    function hm(a, b, c, d, e, f) {
        this.a = a;
        this.c = d;
        this.b = f
    }
    hm.prototype.U = function () {
        return this.c
    };

    function im(a) {
        Fa.call(this, a);
        this.m = this.a = this.K = this.c = null
    }
    v(im, Fa);

    function jm(a) {
        var b = a;
        a instanceof qf && (b = b.g);
        return b
    };

    function km(a) {
        this.a = a
    }

    function lm(a, b, c, d) {
        for (var e = Array(d), f = 0; f < d; f++) e[f] = a.Yb(b, c), b += c;
        return e
    }

    function mm(a, b, c, d) {
        a = a.a.subarray(b, b + c);
        if (1024 < a.length) return "<binary>";
        d = (d = d || null) && "TextDecoder" in window ? (new TextDecoder(d))
            .decode(a) : String.fromCharCode.apply(null, a);
        return d = d.replace(/\0/g, "")
    };

    function nm(a) {
        this.a = a
    }
    v(nm, km);
    g = nm.prototype;
    g.Yb = function (a, b) {
        for (var c = 0, d = a; d < a + b; ++d) c = 256 * c + this.a[d];
        return c
    };
    g.ud = function (a, b) {
        return a >> 8 - (b << 3) & 255
    };
    g.wd = function (a, b) {
        return 256 * a + b
    };
    g.rf = function (a, b) {
        for (var c = new Uint16Array(b), d = a, e = 0; d < a + b; d += 2, e++) c[e] = this.wd(this.a[d], this.a[d + 1]);
        return c
    };
    g.le = function (a) {
        for (var b = new Uint8Array(2 * a.length), c = a.length, d = 0, e = 0; d < c; d++, e += 2) b[e] = this.ud(a[d], 0), b[e + 1] = this.ud(a[d], 1);
        return b
    };
    g.me = function (a) {
        for (var b = new Uint16Array(a.length / 2), c = a.length, d = 0, e = 0; d < c; d++, e += 2) b[d] = this.wd(a[e], a[e + 1]);
        return b
    };

    function om(a, b, c) {
        K.call(this);
        this.a = a;
        this.Xb = b;
        this.Ye = !!c
    }
    v(om, K);

    function pm(a) {
        this.b = a;
        this.a = Array(a);
        this.clear()
    }
    pm.prototype.clear = function () {
        for (var a = 0; a < this.b; a++) this.a[a] = []
    };

    function qm(a, b) {
        rm(a, b.Xb);
        a.a[b.Xb].push(b)
    }

    function rm(a, b) {
        if (0 > b || b >= a.b) throw {
            name: "Out of Range Exception",
            message: "The priority is out of range (" + b + ")."
        };
    };

    function sm(a) {
        Kh.call(this, a);
        this.m = "blob";
        this.h = null
    }
    v(sm, Kh);
    sm.prototype.qe = function () {
        var a = cd(ad);
        a.overrideMimeType && a.overrideMimeType("application/x-gzip");
        var b = this;
        a.onprogress = function (a) {
            var d = new im("dicomprogress");
            jm(d)
                .c = b.h.a;
            jm(d)
                .m = a.loaded;
            L(b.h, d)
        };
        return a
    };
    var tm = {
        "0000": {
            "0000": "UL",
            "0001": "UL",
            "0002": "UI",
            "0003": "UI",
            "0010": "CS",
            "0100": "US",
            "0110": "US",
            "0120": "US",
            "0200": "AE",
            "0300": "AE",
            "0400": "AE",
            "0600": "AE",
            "0700": "US",
            "0800": "US",
            "0850": "US",
            "0860": "US",
            "0900": "US",
            "0901": "AT",
            "0902": "LO",
            "0903": "US",
            1E3: "UI",
            1001: "UI",
            1002: "US",
            1005: "AT",
            1008: "US",
            1020: "US",
            1021: "US",
            1022: "US",
            1023: "US",
            1030: "AE",
            1031: "US",
            4E3: "AT",
            4010: "AT",
            5010: "SH",
            5020: "SH",
            5110: "AT",
            5120: "AT",
            5130: "CS",
            5140: "CS",
            5150: "CS",
            5160: "CS",
            5170: "IS",
            5180: "CS",
            5190: "CS",
            "51A0": "CS",
            "51B0": "US"
        },
        "0002": {
            "0000": "UL",
            "0001": "OB",
            "0002": "UI",
            "0003": "UI",
            "0010": "UI",
            "0012": "UI",
            "0013": "SH",
            "0016": "AE",
            "0100": "UI",
            "0102": "OB"
        },
        "0004": {
            1130: "CS",
            1141: "CS",
            1142: "CS",
            1200: "UL",
            1202: "UL",
            1212: "US",
            1220: "SQ",
            1400: "UL",
            1410: "US",
            1420: "UL",
            1430: "CS",
            1432: "UI",
            1500: "CS",
            1504: "UL",
            1510: "UI",
            1511: "UI",
            1512: "UI",
            "151A": "UI",
            1600: "UL"
        },
        "0008": {
            "0001": "UL",
            "0005": "CS",
            "0006": "SQ",
            "0008": "CS",
            "0010": "SH",
            "0012": "DA",
            "0013": "TM",
            "0014": "UI",
            "0016": "UI",
            "0018": "UI",
            "001A": "UI",
            "001B": "UI",
            "0020": "DA",
            "0021": "DA",
            "0022": "DA",
            "0023": "DA",
            "0024": "DA",
            "0025": "DA",
            "002A": "DT",
            "0030": "TM",
            "0031": "TM",
            "0032": "TM",
            "0033": "TM",
            "0034": "TM",
            "0035": "TM",
            "0040": "US",
            "0041": "LO",
            "0042": "CS",
            "0050": "SH",
            "0051": "SQ",
            "0052": "CS",
            "0054": "AE",
            "0056": "CS",
            "0058": "UI",
            "0060": "CS",
            "0061": "CS",
            "0062": "UI",
            "0064": "CS",
            "0068": "CS",
            "0070": "LO",
            "0080": "LO",
            "0081": "ST",
            "0082": "SQ",
            "0090": "PN",
            "0092": "ST",
            "0094": "SH",
            "0096": "SQ",
            "0100": "SH",
            "0102": "SH",
            "0103": "SH",
            "0104": "LO",
            "0105": "CS",
            "0106": "DT",
            "0107": "DT",
            "010B": "CS",
            "010C": "UI",
            "010D": "UI",
            "010F": "CS",
            "0110": "SQ",
            "0112": "LO",
            "0114": "ST",
            "0115": "ST",
            "0116": "ST",
            "0117": "UI",
            "0201": "SH",
            1E3: "AE",
            1010: "SH",
            1030: "LO",
            1032: "SQ",
            "103E": "LO",
            "103F": "SQ",
            1040: "LO",
            1048: "PN",
            1049: "SQ",
            1050: "PN",
            1052: "SQ",
            1060: "PN",
            1062: "SQ",
            1070: "PN",
            1072: "SQ",
            1080: "LO",
            1084: "SQ",
            1090: "LO",
            1100: "SQ",
            1110: "SQ",
            1111: "SQ",
            1115: "SQ",
            1120: "SQ",
            1125: "SQ",
            1130: "SQ",
            1134: "SQ",
            "113A": "SQ",
            1140: "SQ",
            1145: "SQ",
            "114A": "SQ",
            "114B": "SQ",
            1150: "UI",
            1155: "UI",
            "115A": "UI",
            1160: "IS",
            1161: "UL",
            1162: "UL",
            1163: "FD",
            1164: "SQ",
            1167: "UI",
            1195: "UI",
            1197: "US",
            1198: "SQ",
            1199: "SQ",
            1200: "SQ",
            1250: "SQ",
            2110: "CS",
            2111: "ST",
            2112: "SQ",
            2120: "SH",
            2122: "IS",
            2124: "IS",
            2127: "SH",
            2128: "IS",
            2129: "IS",
            "212A": "IS",
            2130: "DS",
            2132: "LO",
            2133: "SQ",
            2134: "FD",
            2135: "SQ",
            2142: "IS",
            2143: "IS",
            2144: "IS",
            2200: "CS",
            2204: "CS",
            2208: "CS",
            2218: "SQ",
            2220: "SQ",
            2228: "SQ",
            2229: "SQ",
            2230: "SQ",
            2240: "SQ",
            2242: "SQ",
            2244: "SQ",
            2246: "SQ",
            2251: "SQ",
            2253: "SQ",
            2255: "SQ",
            2256: "ST",
            2257: "SQ",
            2258: "ST",
            2259: "SQ",
            "225A": "SQ",
            "225C": "SQ",
            3001: "SQ",
            3010: "UI",
            4E3: "LT",
            9007: "CS",
            9092: "SQ",
            9121: "SQ",
            9123: "UI",
            9124: "SQ",
            9154: "SQ",
            9205: "CS",
            9206: "CS",
            9207: "CS",
            9208: "CS",
            9209: "CS",
            9215: "SQ",
            9237: "SQ",
            9410: "SQ",
            9458: "SQ",
            9459: "FL",
            9460: "CS"
        },
        "0010": {
            "0010": "PN",
            "0020": "LO",
            "0021": "LO",
            "0022": "CS",
            "0024": "SQ",
            "0030": "DA",
            "0032": "TM",
            "0040": "CS",
            "0050": "SQ",
            "0101": "SQ",
            "0102": "SQ",
            1E3: "LO",
            1001: "PN",
            1002: "SQ",
            1005: "PN",
            1010: "AS",
            1020: "DS",
            1021: "SQ",
            1030: "DS",
            1040: "LO",
            1050: "LO",
            1060: "PN",
            1080: "LO",
            1081: "LO",
            1090: "LO",
            2E3: "LO",
            2110: "LO",
            2150: "LO",
            2152: "LO",
            2154: "SH",
            2160: "SH",
            2180: "SH",
            "21A0": "CS",
            "21B0": "LT",
            "21C0": "US",
            "21D0": "DA",
            "21F0": "LO",
            2201: "LO",
            2202: "SQ",
            2203: "CS",
            2210: "CS",
            2292: "LO",
            2293: "SQ",
            2294: "SQ",
            2295: "LO",
            2296: "SQ",
            2297: "PN",
            2298: "CS",
            2299: "LO",
            4E3: "LT",
            9431: "FL"
        },
        "0012": {
            "0010": "LO",
            "0020": "LO",
            "0021": "LO",
            "0030": "LO",
            "0031": "LO",
            "0040": "LO",
            "0042": "LO",
            "0050": "LO",
            "0051": "ST",
            "0060": "LO",
            "0062": "CS",
            "0063": "LO",
            "0064": "SQ",
            "0071": "LO",
            "0072": "LO",
            "0081": "LO",
            "0082": "LO",
            "0083": "SQ",
            "0084": "CS",
            "0085": "CS"
        },
        "0014": {
            "0023": "ST",
            "0024": "ST",
            "0025": "ST",
            "0028": "ST",
            "0030": "DS",
            "0032": "DS",
            "0034": "DS",
            "0042": "ST",
            "0044": "ST",
            "0045": "ST",
            "0046": "LT",
            "0050": "CS",
            "0052": "CS",
            "0054": "DS",
            "0056": "DS",
            1010: "ST",
            1020: "DA",
            1040: "ST",
            2002: "SQ",
            2004: "IS",
            2006: "PN",
            2008: "IS",
            2012: "SQ",
            2014: "IS",
            2016: "SH",
            2018: "ST",
            "201A": "CS",
            "201C": "CS",
            "201E": "SQ",
            2030: "SQ",
            2032: "SH",
            2202: "IS",
            2204: "SQ",
            2206: "ST",
            2208: "CS",
            "220A": "IS",
            "220C": "CS",
            "220E": "CS",
            2210: "OB",
            2220: "SQ",
            2222: "ST",
            2224: "IS",
            2226: "IS",
            2228: "CS",
            "222A": "DS",
            "222C": "DS",
            3011: "DS",
            3012: "DS",
            3020: "SQ",
            3022: "DS",
            3024: "DS",
            3026: "DS",
            3028: "DS",
            3040: "SQ",
            3050: "OB",
            3060: "SQ",
            3070: "OB",
            3071: "DS",
            3072: "DS",
            3073: "DS",
            3074: "LO",
            3075: "DS",
            3076: "DA",
            3077: "TM",
            3080: "OB",
            3099: "LT",
            4002: "SQ",
            4004: "CS",
            4006: "LT",
            4008: "SQ",
            "400A": "CS",
            "400C": "LT",
            "400E": "SQ",
            "400F": "LT",
            4010: "SQ",
            4011: "SQ",
            4012: "US",
            4013: "CS",
            4014: "DS",
            4015: "DS",
            4016: "DS",
            4017: "DS",
            4018: "DS",
            4019: "DS",
            "401A": "DS",
            "401B": "DS",
            "401C": "DS",
            4020: "SQ",
            4022: "DS",
            4024: "DS",
            4026: "CS",
            4028: "DS",
            4030: "SQ",
            4031: "DS",
            4032: "CS",
            4033: "IS",
            4034: "DS",
            4035: "SQ",
            4036: "CS",
            4038: "DS",
            "403A": "DS",
            "403C": "DS",
            4040: "SQ",
            4050: "SQ",
            4051: "SQ",
            4052: "DS",
            4054: "ST",
            4056: "ST",
            4057: "DS",
            4058: "DS",
            4059: "DS",
            "405A": "DS",
            "405C": "ST",
            4060: "SQ",
            4062: "DS",
            4064: "DS",
            4070: "SQ",
            4072: "ST",
            4074: "SH",
            4076: "DA",
            4078: "DA",
            "407A": "DA",
            "407C": "TM",
            "407E": "DA",
            5002: "IS",
            5004: "IS"
        },
        "0018": {
            "0010": "LO",
            "0012": "SQ",
            "0014": "SQ",
            "0015": "CS",
            "0020": "CS",
            "0021": "CS",
            "0022": "CS",
            "0023": "CS",
            "0024": "SH",
            "0025": "CS",
            "0026": "SQ",
            "0027": "TM",
            "0028": "DS",
            "0029": "SQ",
            "002A": "SQ",
            "0030": "LO",
            "0031": "LO",
            "0032": "DS",
            "0033": "DS",
            "0034": "LO",
            "0035": "TM",
            "0036": "SQ",
            "0037": "CS",
            "0038": "CS",
            "0039": "CS",
            "003A": "ST",
            "0040": "IS",
            "0042": "CS",
            "0050": "DS",
            "0060": "DS",
            "0070": "IS",
            "0071": "CS",
            "0072": "DS",
            "0073": "CS",
            "0074": "IS",
            "0075": "IS",
            "0080": "DS",
            "0081": "DS",
            "0082": "DS",
            "0083": "DS",
            "0084": "DS",
            "0085": "SH",
            "0086": "IS",
            "0087": "DS",
            "0088": "DS",
            "0089": "IS",
            "0090": "DS",
            "0091": "IS",
            "0093": "DS",
            "0094": "DS",
            "0095": "DS",
            1E3: "LO",
            1002: "UI",
            1003: "LO",
            1004: "LO",
            1005: "LO",
            1006: "LO",
            1007: "LO",
            1008: "LO",
            1010: "LO",
            1011: "LO",
            1012: "DA",
            1014: "TM",
            1016: "LO",
            1017: "LO",
            1018: "LO",
            1019: "LO",
            "101A": "LO",
            "101B": "LO",
            1020: "LO",
            1022: "SH",
            1023: "LO",
            1030: "LO",
            1040: "LO",
            1041: "DS",
            1042: "TM",
            1043: "TM",
            1044: "DS",
            1045: "IS",
            1046: "DS",
            1047: "DS",
            1048: "CS",
            1049: "DS",
            1050: "DS",
            1060: "DS",
            1061: "LO",
            1062: "IS",
            1063: "DS",
            1064: "LO",
            1065: "DS",
            1066: "DS",
            1067: "DS",
            1068: "DS",
            1069: "DS",
            "106A": "CS",
            "106C": "US",
            "106E": "UL",
            1070: "LO",
            1071: "DS",
            1072: "TM",
            1073: "TM",
            1074: "DS",
            1075: "DS",
            1076: "DS",
            1077: "DS",
            1078: "DT",
            1079: "DT",
            1080: "CS",
            1081: "IS",
            1082: "IS",
            1083: "IS",
            1084: "IS",
            1085: "LO",
            1086: "IS",
            1088: "IS",
            1090: "IS",
            1094: "IS",
            1100: "DS",
            1110: "DS",
            1111: "DS",
            1114: "DS",
            1120: "DS",
            1121: "DS",
            1130: "DS",
            1131: "DS",
            1134: "CS",
            1135: "DS",
            1136: "DS",
            1137: "DS",
            1138: "DS",
            "113A": "CS",
            1140: "CS",
            1141: "DS",
            1142: "DS",
            1143: "DS",
            1144: "DS",
            1145: "DS",
            1146: "DS",
            1147: "CS",
            1149: "IS",
            1150: "IS",
            1151: "IS",
            1152: "IS",
            1153: "IS",
            1154: "DS",
            1155: "CS",
            1156: "CS",
            "115A": "CS",
            "115E": "DS",
            1160: "SH",
            1161: "LO",
            1162: "DS",
            1164: "DS",
            1166: "CS",
            1170: "IS",
            1180: "SH",
            1181: "CS",
            1182: "IS",
            1183: "DS",
            1184: "DS",
            1190: "DS",
            1191: "CS",
            "11A0": "DS",
            "11A2": "DS",
            1200: "DA",
            1201: "TM",
            1210: "SH",
            1240: "IS",
            1242: "IS",
            1243: "IS",
            1244: "US",
            1250: "SH",
            1251: "SH",
            1260: "SH",
            1261: "LO",
            1300: "DS",
            1301: "CS",
            1302: "IS",
            1310: "US",
            1312: "CS",
            1314: "DS",
            1315: "CS",
            1316: "DS",
            1318: "DS",
            1400: "LO",
            1401: "LO",
            1402: "CS",
            1403: "CS",
            1404: "US",
            1405: "IS",
            1411: "DS",
            1412: "DS",
            1413: "DS",
            1450: "DS",
            1460: "DS",
            1470: "DS",
            1480: "DS",
            1490: "CS",
            1491: "CS",
            1495: "IS",
            1500: "CS",
            1508: "CS",
            1510: "DS",
            1511: "DS",
            1520: "DS",
            1521: "DS",
            1530: "DS",
            1531: "DS",
            1600: "CS",
            1602: "IS",
            1604: "IS",
            1606: "IS",
            1608: "IS",
            1610: "IS",
            1612: "IS",
            1620: "IS",
            1622: "US",
            1623: "US",
            1624: "US",
            1700: "CS",
            1702: "IS",
            1704: "IS",
            1706: "IS",
            1708: "IS",
            1710: "IS",
            1712: "IS",
            1720: "IS",
            1800: "CS",
            1801: "SH",
            1802: "CS",
            1803: "LO",
            2001: "IS",
            2002: "SH",
            2003: "DS",
            2004: "DS",
            2005: "DS",
            2006: "SH",
            2010: "DS",
            2020: "CS",
            2030: "DS",
            3100: "CS",
            3101: "DS",
            3102: "DS",
            3103: "IS",
            3104: "IS",
            3105: "IS",
            4E3: "LT",
            5E3: "SH",
            5010: "LO",
            5012: "DS",
            5020: "LO",
            5021: "LO",
            5022: "DS",
            5024: "DS",
            5026: "DS",
            5027: "DS",
            5028: "DS",
            5029: "DS",
            5030: "DS",
            5040: "DS",
            5050: "IS",
            5100: "CS",
            5101: "CS",
            5104: "SQ",
            5210: "DS",
            5212: "DS",
            6E3: "DS",
            6011: "SQ",
            6012: "US",
            6014: "US",
            6016: "UL",
            6018: "UL",
            "601A": "UL",
            "601C": "UL",
            "601E": "UL",
            6020: "SL",
            6022: "SL",
            6024: "US",
            6026: "US",
            6028: "FD",
            "602A": "FD",
            "602C": "FD",
            "602E": "FD",
            6030: "UL",
            6031: "CS",
            6032: "UL",
            6034: "FD",
            6036: "FD",
            6038: "UL",
            6039: "SL",
            "603A": "UL",
            "603B": "SL",
            "603C": "UL",
            "603D": "SL",
            "603E": "UL",
            "603F": "SL",
            6040: "UL",
            6041: "SL",
            6042: "UL",
            6043: "SL",
            6044: "US",
            6046: "UL",
            6048: "UL",
            "604A": "UL",
            "604C": "US",
            "604E": "US",
            6050: "UL",
            6052: "UL",
            6054: "FD",
            6056: "UL",
            6058: "UL",
            "605A": "FL",
            6060: "FL",
            7E3: "CS",
            7001: "DS",
            7004: "CS",
            7005: "CS",
            7006: "LT",
            7008: "LT",
            "700A": "SH",
            "700C": "DA",
            "700E": "TM",
            7010: "IS",
            7011: "IS",
            7012: "DS",
            7014: "DS",
            7016: "DS",
            "701A": "DS",
            7020: "DS",
            7022: "DS",
            7024: "CS",
            7026: "DS",
            7028: "DS",
            "702A": "LO",
            "702B": "LO",
            7030: "DS",
            7032: "DS",
            7034: "CS",
            7036: "FL",
            7038: "FL",
            7040: "LT",
            7041: "LT",
            7042: "DS",
            7044: "DS",
            7046: "IS",
            7048: "DS",
            "704C": "DS",
            7050: "CS",
            7052: "DS",
            7054: "DS",
            7056: "FL",
            7058: "FL",
            7060: "CS",
            7062: "LT",
            7064: "CS",
            7065: "DS",
            8150: "DS",
            8151: "DS",
            9004: "CS",
            9005: "SH",
            9006: "SQ",
            9008: "CS",
            9009: "CS",
            9010: "CS",
            9011: "CS",
            9012: "CS",
            9014: "CS",
            9015: "CS",
            9016: "CS",
            9017: "CS",
            9018: "CS",
            9019: "FD",
            9020: "CS",
            9021: "CS",
            9022: "CS",
            9024: "CS",
            9025: "CS",
            9026: "CS",
            9027: "CS",
            9028: "CS",
            9029: "CS",
            9030: "FD",
            9032: "CS",
            9033: "CS",
            9034: "CS",
            9035: "FD",
            9036: "CS",
            9037: "CS",
            9041: "LO",
            9042: "SQ",
            9043: "CS",
            9044: "CS",
            9045: "SQ",
            9046: "LO",
            9047: "SH",
            9048: "CS",
            9049: "SQ",
            9050: "LO",
            9051: "CS",
            9052: "FD",
            9053: "FD",
            9054: "CS",
            9058: "US",
            9059: "CS",
            9060: "CS",
            9061: "FD",
            9062: "CS",
            9063: "FD",
            9064: "CS",
            9065: "CS",
            9066: "US",
            9067: "CS",
            9069: "FD",
            9070: "FD",
            9073: "FD",
            9074: "DT",
            9075: "CS",
            9076: "SQ",
            9077: "CS",
            9078: "CS",
            9079: "FD",
            9080: "ST",
            9081: "CS",
            9082: "FD",
            9083: "SQ",
            9084: "SQ",
            9085: "CS",
            9087: "FD",
            9089: "FD",
            9090: "FD",
            9091: "FD",
            9092: "SQ",
            9093: "US",
            9094: "CS",
            9095: "UL",
            9096: "FD",
            9098: "FD",
            9100: "CS",
            9101: "CS",
            9103: "SQ",
            9104: "FD",
            9105: "FD",
            9106: "FD",
            9107: "SQ",
            9112: "SQ",
            9114: "SQ",
            9115: "SQ",
            9117: "SQ",
            9118: "SQ",
            9119: "SQ",
            9125: "SQ",
            9126: "SQ",
            9127: "UL",
            9147: "CS",
            9151: "DT",
            9152: "SQ",
            9155: "FD",
            9159: "UL",
            9166: "CS",
            9168: "FD",
            9169: "CS",
            9170: "CS",
            9171: "CS",
            9172: "CS",
            9173: "CS",
            9174: "CS",
            9175: "LO",
            9176: "SQ",
            9177: "CS",
            9178: "CS",
            9179: "CS",
            9180: "CS",
            9181: "FD",
            9182: "FD",
            9183: "CS",
            9184: "FD",
            9185: "ST",
            9186: "SH",
            9195: "FD",
            9196: "FD",
            9197: "SQ",
            9198: "CS",
            9199: "CS",
            9200: "CS",
            9214: "CS",
            9217: "FD",
            9218: "FD",
            9219: "SS",
            9220: "FD",
            9226: "SQ",
            9227: "SQ",
            9231: "US",
            9232: "US",
            9234: "UL",
            9236: "CS",
            9239: "SQ",
            9240: "US",
            9241: "US",
            9250: "CS",
            9251: "SQ",
            9252: "LO",
            9253: "US",
            9254: "FD",
            9255: "FD",
            9256: "FD",
            9257: "CS",
            9258: "UL",
            9259: "CS",
            "925A": "FD",
            "925B": "LO",
            "925C": "CS",
            "925D": "SQ",
            "925E": "LO",
            "925F": "UL",
            9260: "SQ",
            9295: "FD",
            9296: "FD",
            9301: "SQ",
            9302: "CS",
            9303: "FD",
            9304: "SQ",
            9305: "FD",
            9306: "FD",
            9307: "FD",
            9308: "SQ",
            9309: "FD",
            9310: "FD",
            9311: "FD",
            9312: "SQ",
            9313: "FD",
            9314: "SQ",
            9315: "CS",
            9316: "CS",
            9317: "FD",
            9318: "FD",
            9319: "FD",
            9320: "SH",
            9321: "SQ",
            9322: "FD",
            9323: "CS",
            9324: "FD",
            9325: "SQ",
            9326: "SQ",
            9327: "FD",
            9328: "FD",
            9329: "SQ",
            9330: "FD",
            9332: "FD",
            9333: "CS",
            9334: "CS",
            9335: "FD",
            9337: "US",
            9338: "SQ",
            9340: "SQ",
            9341: "SQ",
            9342: "CS",
            9343: "CS",
            9344: "CS",
            9345: "FD",
            9346: "SQ",
            9351: "FL",
            9352: "FL",
            9353: "FL",
            9360: "SQ",
            9401: "SQ",
            9402: "FL",
            9403: "FL",
            9404: "FL",
            9405: "SQ",
            9406: "SQ",
            9407: "SQ",
            9410: "CS",
            9412: "SQ",
            9417: "SQ",
            9420: "CS",
            9423: "LO",
            9424: "LT",
            9425: "CS",
            9426: "FL",
            9427: "CS",
            9428: "FL",
            9429: "FL",
            9430: "FL",
            9432: "SQ",
            9433: "LO",
            9434: "SQ",
            9435: "CS",
            9436: "SS",
            9437: "SS",
            9438: "SS",
            9439: "SS",
            9440: "SS",
            9441: "US",
            9442: "SS",
            9447: "FL",
            9449: "FL",
            9451: "SQ",
            9452: "FL",
            9455: "SQ",
            9456: "SQ",
            9457: "CS",
            9461: "FL",
            9462: "SQ",
            9463: "FL",
            9464: "FL",
            9465: "FL",
            9466: "FL",
            9467: "FL",
            9468: "FL",
            9469: "FL",
            9470: "FL",
            9471: "FL",
            9472: "SQ",
            9473: "FL",
            9474: "CS",
            9476: "SQ",
            9477: "SQ",
            9504: "SQ",
            9506: "SQ",
            9507: "SQ",
            9508: "FL",
            9509: "FL",
            9510: "FL",
            9511: "FL",
            9514: "FL",
            9515: "FL",
            9516: "DT",
            9517: "DT",
            9524: "LO",
            9525: "LO",
            9526: "LO",
            9527: "CS",
            9528: "LO",
            9530: "SQ",
            9531: "LO",
            9538: "SQ",
            9601: "SQ",
            9602: "FD",
            9603: "FD",
            9604: "FD",
            9605: "FD",
            9606: "FD",
            9607: "FD",
            9701: "DT",
            9715: "FD",
            9716: "FD",
            9717: "FD",
            9718: "FD",
            9719: "FD",
            9720: "FD",
            9721: "FD",
            9722: "FD",
            9723: "FD",
            9724: "FD",
            9725: "CS",
            9726: "FD",
            9727: "FD",
            9729: "US",
            9732: "SQ",
            9733: "SQ",
            9734: "SQ",
            9735: "SQ",
            9736: "SQ",
            9737: "SQ",
            9738: "CS",
            9739: "US",
            9740: "US",
            9749: "SQ",
            9751: "SQ",
            9755: "CS",
            9756: "CS",
            9758: "CS",
            9759: "CS",
            9760: "CS",
            9761: "CS",
            9762: "CS",
            9763: "CS",
            9764: "CS",
            9765: "CS",
            9766: "CS",
            9767: "CS",
            9768: "CS",
            9769: "CS",
            9770: "CS",
            9771: "SQ",
            9772: "SQ",
            9801: "FD",
            9803: "SQ",
            9804: "DT",
            9805: "FD",
            9806: "SQ",
            9807: "SQ",
            9808: "CS",
            9809: "SQ",
            "980B": "CS",
            "980C": "CS",
            "980D": "SQ",
            "980E": "SQ",
            "980F": "SQ",
            A001: "SQ",
            A002: "DT",
            A003: "ST"
        },
        "0020": {
            "000D": "UI",
            "000E": "UI",
            "0010": "SH",
            "0011": "IS",
            "0012": "IS",
            "0013": "IS",
            "0014": "IS",
            "0015": "IS",
            "0016": "IS",
            "0017": "IS",
            "0018": "IS",
            "0019": "IS",
            "0020": "CS",
            "0022": "IS",
            "0024": "IS",
            "0026": "IS",
            "0030": "DS",
            "0032": "DS",
            "0035": "DS",
            "0037": "DS",
            "0050": "DS",
            "0052": "UI",
            "0060": "CS",
            "0062": "CS",
            "0070": "LO",
            "0080": "CS",
            "00AA": "IS",
            "0100": "IS",
            "0105": "IS",
            "0110": "DS",
            "0200": "UI",
            "0242": "UI",
            1E3: "IS",
            1001: "IS",
            1002: "IS",
            1003: "IS",
            1004: "IS",
            1005: "IS",
            1020: "LO",
            1040: "LO",
            1041: "DS",
            1070: "IS",
            1200: "IS",
            1202: "IS",
            1204: "IS",
            1206: "IS",
            1208: "IS",
            1209: "IS",
            3100: "CS",
            3401: "CS",
            3402: "CS",
            3403: "DA",
            3404: "LO",
            3405: "TM",
            3406: "LO",
            4E3: "LT",
            5E3: "AT",
            5002: "LO",
            9056: "SH",
            9057: "UL",
            9071: "SQ",
            9072: "CS",
            9111: "SQ",
            9113: "SQ",
            9116: "SQ",
            9128: "UL",
            9153: "FD",
            9154: "FL",
            9155: "FL",
            9156: "US",
            9157: "UL",
            9158: "LT",
            9161: "UI",
            9162: "US",
            9163: "US",
            9164: "UI",
            9165: "AT",
            9167: "AT",
            9213: "LO",
            9221: "SQ",
            9222: "SQ",
            9228: "UL",
            9238: "LO",
            9241: "FL",
            9245: "FL",
            9246: "FL",
            9247: "CS",
            9248: "FL",
            9249: "CS",
            9250: "CS",
            9251: "FD",
            9252: "FD",
            9253: "SQ",
            9254: "FD",
            9255: "FD",
            9256: "FD",
            9257: "FD",
            9301: "FD",
            9302: "FD",
            9307: "CS",
            9308: "FD",
            9309: "FD",
            "930A": "FD",
            "930C": "CS",
            "930D": "FD",
            "930E": "SQ",
            "930F": "SQ",
            9310: "SQ",
            9311: "CS",
            9312: "UI",
            9313: "UI",
            9421: "LO",
            9450: "SQ",
            9453: "LO",
            9518: "US",
            9529: "SQ",
            9536: "US"
        },
        "0022": {
            "0001": "US",
            "0002": "US",
            "0003": "US",
            "0004": "US",
            "0005": "CS",
            "0006": "SQ",
            "0007": "FL",
            "0008": "FL",
            "0009": "FL",
            "000A": "FL",
            "000B": "FL",
            "000C": "FL",
            "000D": "CS",
            "000E": "FL",
            "0010": "FL",
            "0011": "FL",
            "0012": "FL",
            "0013": "FL",
            "0014": "FL",
            "0015": "SQ",
            "0016": "SQ",
            "0017": "SQ",
            "0018": "SQ",
            "0019": "SQ",
            "001A": "SQ",
            "001B": "SQ",
            "001C": "SQ",
            "001D": "SQ",
            "001E": "FL",
            "0020": "SQ",
            "0021": "SQ",
            "0022": "SQ",
            "0030": "FL",
            "0031": "SQ",
            "0032": "FL",
            "0035": "FL",
            "0036": "FL",
            "0037": "FL",
            "0038": "FL",
            "0039": "CS",
            "0041": "FL",
            "0042": "SQ",
            "0048": "FL",
            "0049": "FL",
            "004E": "DS",
            "0055": "FL",
            "0056": "FL",
            "0057": "FL",
            "0058": "SQ",
            1007: "SQ",
            1008: "SQ",
            1010: "CS",
            1019: "FL",
            1024: "SQ",
            1025: "SQ",
            1028: "SQ",
            1029: "LO",
            1033: "FL",
            1035: "SQ",
            1037: "FL",
            1039: "CS",
            1040: "SQ",
            1044: "SQ",
            1050: "SQ",
            1053: "FL",
            1054: "FL",
            1059: "FL",
            1065: "LO",
            1066: "LO",
            1090: "SQ",
            1092: "SQ",
            1093: "LO",
            1094: "LO",
            1096: "SQ",
            1100: "SQ",
            1101: "SQ",
            1103: "SQ",
            1121: "FL",
            1122: "FL",
            1125: "SQ",
            1130: "FL",
            1131: "FL",
            1132: "SQ",
            1133: "SQ",
            1135: "SQ",
            1140: "CS",
            1150: "SQ",
            1153: "SQ",
            1155: "FL",
            1159: "LO",
            1210: "SQ",
            1211: "SQ",
            1212: "SQ",
            1220: "SQ",
            1225: "SQ",
            1230: "SQ",
            1250: "SQ",
            1255: "SQ",
            1257: "SQ",
            1260: "SQ",
            1262: "SQ",
            1273: "LO",
            1300: "SQ",
            1310: "SQ",
            1330: "SQ"
        },
        "0024": {
            "0010": "FL",
            "0011": "FL",
            "0012": "CS",
            "0016": "SQ",
            "0018": "FL",
            "0020": "FL",
            "0021": "SQ",
            "0024": "SQ",
            "0025": "FL",
            "0028": "FL",
            "0032": "SQ",
            "0033": "SQ",
            "0034": "SQ",
            "0035": "US",
            "0036": "US",
            "0037": "CS",
            "0038": "US",
            "0039": "CS",
            "0040": "CS",
            "0042": "US",
            "0044": "LT",
            "0045": "CS",
            "0046": "FL",
            "0048": "US",
            "0050": "US",
            "0051": "CS",
            "0052": "CS",
            "0053": "CS",
            "0054": "FL",
            "0055": "CS",
            "0056": "US",
            "0057": "CS",
            "0058": "SQ",
            "0059": "CS",
            "0060": "US",
            "0061": "CS",
            "0062": "CS",
            "0063": "CS",
            "0064": "SQ",
            "0065": "SQ",
            "0066": "FL",
            "0067": "SQ",
            "0068": "FL",
            "0069": "LO",
            "0070": "FL",
            "0071": "FL",
            "0072": "CS",
            "0073": "FL",
            "0074": "CS",
            "0075": "FL",
            "0076": "CS",
            "0077": "FL",
            "0078": "CS",
            "0079": "FL",
            "0080": "CS",
            "0081": "FL",
            "0083": "SQ",
            "0085": "SQ",
            "0086": "CS",
            "0087": "FL",
            "0088": "FL",
            "0089": "SQ",
            "0090": "FL",
            "0091": "FL",
            "0092": "FL",
            "0093": "CS",
            "0094": "FL",
            "0095": "CS",
            "0096": "FL",
            "0097": "SQ",
            "0098": "FL",
            "0100": "FL",
            "0102": "CS",
            "0103": "FL",
            "0104": "FL",
            "0105": "FL",
            "0106": "CS",
            "0107": "FL",
            "0108": "FL",
            "0110": "SQ",
            "0112": "SQ",
            "0113": "CS",
            "0114": "SQ",
            "0115": "SQ",
            "0117": "CS",
            "0118": "FL",
            "0120": "CS",
            "0122": "SQ",
            "0124": "CS",
            "0126": "FL",
            "0202": "LO",
            "0306": "LO",
            "0307": "LO",
            "0308": "LO",
            "0309": "LO",
            "0317": "SQ",
            "0320": "SQ",
            "0325": "SQ",
            "0338": "CS",
            "0341": "FL",
            "0344": "SQ"
        },
        "0028": {
            "0002": "US",
            "0003": "US",
            "0004": "CS",
            "0005": "US",
            "0006": "US",
            "0008": "IS",
            "0009": "AT",
            "000A": "AT",
            "0010": "US",
            "0011": "US",
            "0012": "US",
            "0014": "US",
            "0030": "DS",
            "0031": "DS",
            "0032": "DS",
            "0034": "IS",
            "0040": "CS",
            "0050": "LO",
            "0051": "CS",
            "005F": "LO",
            "0060": "CS",
            "0061": "SH",
            "0062": "LO",
            "0063": "SH",
            "0065": "CS",
            "0066": "AT",
            "0068": "US",
            "0069": "US",
            "0070": "US",
            "0071": "US",
            "0080": "US",
            "0081": "US",
            "0082": "US",
            "0090": "CS",
            "0091": "US",
            "0092": "US",
            "0093": "US",
            "0094": "US",
            "0100": "US",
            "0101": "US",
            "0102": "US",
            "0103": "US",
            "0104": "US",
            "0105": "US",
            "0106": "US",
            "0107": "US",
            "0108": "US",
            "0109": "US",
            "0110": "US",
            "0111": "US",
            "0120": "US",
            "0121": "US",
            "0200": "US",
            "0300": "CS",
            "0301": "CS",
            "0302": "CS",
            "0303": "CS",
            "0400": "US",
            "0401": "US",
            "0402": "LO",
            "0403": "AT",
            "0404": "AT",
            "0700": "LO",
            "0701": "CS",
            "0702": "AT",
            "0710": "US",
            "0720": "US",
            "0721": "AT",
            "0722": "US",
            "0730": "US",
            "0740": "US",
            "0800": "CS",
            "0802": "US",
            "0803": "AT",
            "0804": "US",
            "0808": "AT",
            "0A02": "CS",
            "0A04": "LO",
            1040: "CS",
            1041: "SS",
            1050: "DS",
            1051: "DS",
            1052: "DS",
            1053: "DS",
            1054: "LO",
            1055: "LO",
            1056: "CS",
            1080: "CS",
            1090: "CS",
            1100: "US",
            1101: "US",
            1102: "US",
            1103: "US",
            1104: "US",
            1111: "US",
            1112: "US",
            1113: "US",
            1199: "UI",
            1200: "OW",
            1201: "OW",
            1202: "OW",
            1203: "OW",
            1204: "OW",
            1211: "OW",
            1212: "OW",
            1213: "OW",
            1214: "UI",
            1221: "OW",
            1222: "OW",
            1223: "OW",
            1300: "CS",
            1350: "CS",
            1351: "ST",
            1352: "SQ",
            "135A": "CS",
            1401: "SQ",
            1402: "CS",
            1403: "US",
            1404: "SQ",
            1405: "CS",
            1406: "FD",
            1407: "US",
            1408: "OW",
            "140B": "SQ",
            "140C": "SQ",
            "140D": "CS",
            "140E": "CS",
            "140F": "CS",
            1410: "CS",
            2E3: "OB",
            2110: "CS",
            2112: "DS",
            2114: "CS",
            3E3: "SQ",
            3002: "US",
            3003: "LO",
            3004: "LO",
            3006: "US",
            3010: "SQ",
            3110: "SQ",
            4E3: "LT",
            5E3: "SQ",
            6010: "US",
            6020: "US",
            6022: "LO",
            6023: "CS",
            6030: "US",
            6040: "US",
            6100: "SQ",
            6101: "CS",
            6102: "US",
            6110: "US",
            6112: "US",
            6114: "FL",
            6120: "SS",
            6190: "ST",
            "7FE0": "UT",
            9001: "UL",
            9002: "UL",
            9003: "CS",
            9099: "US",
            9108: "CS",
            9110: "SQ",
            9132: "SQ",
            9145: "SQ",
            9235: "CS",
            9411: "FL",
            9415: "SQ",
            9416: "US",
            9422: "SQ",
            9443: "SQ",
            9444: "CS",
            9445: "FL",
            9446: "CS",
            9454: "CS",
            9474: "CS",
            9478: "FL",
            9501: "SQ",
            9502: "SQ",
            9503: "SS",
            9505: "SQ",
            9506: "US",
            9507: "US",
            9520: "DS",
            9537: "CS"
        },
        "0032": {
            "000A": "CS",
            "000C": "CS",
            "0012": "LO",
            "0032": "DA",
            "0033": "TM",
            "0034": "DA",
            "0035": "TM",
            1E3: "DA",
            1001: "TM",
            1010: "DA",
            1011: "TM",
            1020: "LO",
            1021: "AE",
            1030: "LO",
            1031: "SQ",
            1032: "PN",
            1033: "LO",
            1034: "SQ",
            1040: "DA",
            1041: "TM",
            1050: "DA",
            1051: "TM",
            1055: "CS",
            1060: "LO",
            1064: "SQ",
            1070: "LO",
            4E3: "LT"
        },
        "0038": {
            "0004": "SQ",
            "0008": "CS",
            "0010": "LO",
            "0011": "LO",
            "0014": "SQ",
            "0016": "LO",
            "001A": "DA",
            "001B": "TM",
            "001C": "DA",
            "001D": "TM",
            "001E": "LO",
            "0020": "DA",
            "0021": "TM",
            "0030": "DA",
            "0032": "TM",
            "0040": "LO",
            "0044": "SQ",
            "0050": "LO",
            "0060": "LO",
            "0061": "LO",
            "0062": "LO",
            "0064": "SQ",
            "0100": "SQ",
            "0300": "LO",
            "0400": "LO",
            "0500": "LO",
            "0502": "SQ",
            4E3: "LT"
        },
        "003A": {
            "0004": "CS",
            "0005": "US",
            "0010": "UL",
            "001A": "DS",
            "0020": "SH",
            "0200": "SQ",
            "0202": "IS",
            "0203": "SH",
            "0205": "CS",
            "0208": "SQ",
            "0209": "SQ",
            "020A": "SQ",
            "020C": "LO",
            "0210": "DS",
            "0211": "SQ",
            "0212": "DS",
            "0213": "DS",
            "0214": "DS",
            "0215": "DS",
            "0218": "DS",
            "021A": "US",
            "0220": "DS",
            "0221": "DS",
            "0222": "DS",
            "0223": "DS",
            "0230": "FL",
            "0231": "US",
            "0240": "SQ",
            "0241": "US",
            "0242": "SQ",
            "0244": "US",
            "0245": "FL",
            "0246": "CS",
            "0247": "FL",
            "0248": "FL",
            "0300": "SQ",
            "0301": "IS",
            "0302": "CS"
        },
        "0040": {
            "0001": "AE",
            "0002": "DA",
            "0003": "TM",
            "0004": "DA",
            "0005": "TM",
            "0006": "PN",
            "0007": "LO",
            "0008": "SQ",
            "0009": "SH",
            "000A": "SQ",
            "000B": "SQ",
            "0010": "SH",
            "0011": "SH",
            "0012": "LO",
            "0020": "CS",
            "0026": "SQ",
            "0027": "SQ",
            "0031": "UT",
            "0032": "UT",
            "0033": "CS",
            "0035": "CS",
            "0036": "SQ",
            "0039": "SQ",
            "003A": "SQ",
            "0100": "SQ",
            "0220": "SQ",
            "0241": "AE",
            "0242": "SH",
            "0243": "SH",
            "0244": "DA",
            "0245": "TM",
            "0250": "DA",
            "0251": "TM",
            "0252": "CS",
            "0253": "SH",
            "0254": "LO",
            "0255": "LO",
            "0260": "SQ",
            "0261": "CS",
            "0270": "SQ",
            "0275": "SQ",
            "0280": "ST",
            "0281": "SQ",
            "0293": "SQ",
            "0294": "DS",
            "0295": "SQ",
            "0296": "SQ",
            "0300": "US",
            "0301": "US",
            "0302": "US",
            "0303": "US",
            "0306": "DS",
            "0307": "DS",
            "030E": "SQ",
            "0310": "ST",
            "0312": "DS",
            "0314": "DS",
            "0316": "DS",
            "0318": "CS",
            "0320": "SQ",
            "0321": "SQ",
            "0324": "SQ",
            "0330": "SQ",
            "0340": "SQ",
            "0400": "LT",
            "0440": "SQ",
            "0441": "SQ",
            "0500": "SQ",
            "050A": "LO",
            "0512": "LO",
            "0513": "SQ",
            "0515": "SQ",
            "0518": "SQ",
            "051A": "LO",
            "0520": "SQ",
            "0550": "SQ",
            "0551": "LO",
            "0552": "SQ",
            "0553": "ST",
            "0554": "UI",
            "0555": "SQ",
            "0556": "ST",
            "0560": "SQ",
            "0562": "SQ",
            "059A": "SQ",
            "0600": "LO",
            "0602": "UT",
            "0610": "SQ",
            "0612": "SQ",
            "0620": "SQ",
            "06FA": "LO",
            "071A": "SQ",
            "072A": "DS",
            "073A": "DS",
            "074A": "DS",
            "08D8": "SQ",
            "08DA": "SQ",
            "08EA": "SQ",
            "09F8": "SQ",
            1001: "SH",
            1002: "LO",
            1003: "SH",
            1004: "LO",
            1005: "LO",
            1006: "SH",
            1007: "SH",
            1008: "LO",
            1009: "SH",
            "100A": "SQ",
            1010: "PN",
            1011: "SQ",
            1012: "SQ",
            1060: "LO",
            1101: "SQ",
            1102: "ST",
            1103: "LO",
            1400: "LT",
            2001: "LO",
            2004: "DA",
            2005: "TM",
            2006: "SH",
            2007: "SH",
            2008: "PN",
            2009: "SH",
            2010: "SH",
            2016: "LO",
            2017: "LO",
            2400: "LT",
            3001: "LO",
            4001: "CS",
            4002: "CS",
            4003: "CS",
            4004: "SQ",
            4005: "DT",
            4006: "CS",
            4007: "SQ",
            4009: "SQ",
            4010: "DT",
            4011: "DT",
            4015: "SQ",
            4016: "SQ",
            4018: "SQ",
            4019: "SQ",
            4020: "CS",
            4021: "SQ",
            4022: "SQ",
            4023: "UI",
            4025: "SQ",
            4026: "SQ",
            4027: "SQ",
            4028: "SQ",
            4029: "SQ",
            4030: "SQ",
            4031: "SQ",
            4032: "SQ",
            4033: "SQ",
            4034: "SQ",
            4035: "SQ",
            4036: "LO",
            4037: "PN",
            4040: "CS",
            4041: "CS",
            4050: "DT",
            4051: "DT",
            4052: "DT",
            8302: "DS",
            9094: "SQ",
            9096: "SQ",
            9098: "SQ",
            9210: "SH",
            9211: "US",
            9212: "FD",
            9216: "US",
            9224: "FD",
            9225: "FD",
            A007: "CS",
            A010: "CS",
            A020: "SQ",
            A021: "UI",
            A022: "UI",
            A023: "DA",
            A024: "TM",
            A026: "SQ",
            A027: "LO",
            A028: "SQ",
            A030: "DT",
            A032: "DT",
            A040: "CS",
            A043: "SQ",
            A047: "LO",
            A050: "CS",
            A057: "CS",
            A060: "LO",
            A066: "SQ",
            A067: "PN",
            A068: "SQ",
            A070: "SQ",
            A073: "SQ",
            A074: "OB",
            A075: "PN",
            A076: "SQ",
            A078: "SQ",
            A07A: "SQ",
            A07C: "SQ",
            A080: "CS",
            A082: "DT",
            A084: "CS",
            A085: "SQ",
            A088: "SQ",
            A089: "OB",
            A090: "SQ",
            A0B0: "US",
            A110: "DA",
            A112: "TM",
            A120: "DT",
            A121: "DA",
            A122: "TM",
            A123: "PN",
            A124: "UI",
            A125: "CS",
            A130: "CS",
            A132: "UL",
            A136: "US",
            A138: "DS",
            A13A: "DT",
            A160: "UT",
            A167: "SQ",
            A168: "SQ",
            A16A: "ST",
            A170: "SQ",
            A171: "UI",
            A172: "UI",
            A173: "CS",
            A174: "CS",
            A180: "US",
            A192: "DA",
            A193: "TM",
            A194: "CS",
            A195: "SQ",
            A224: "ST",
            A290: "CS",
            A296: "SQ",
            A297: "ST",
            A29A: "SL",
            A300: "SQ",
            A301: "SQ",
            A307: "PN",
            A30A: "DS",
            A313: "SQ",
            A33A: "ST",
            A340: "SQ",
            A352: "PN",
            A353: "ST",
            A354: "LO",
            A358: "SQ",
            A360: "SQ",
            A370: "SQ",
            A372: "SQ",
            A375: "SQ",
            A380: "SQ",
            A385: "SQ",
            A390: "SQ",
            A402: "UI",
            A403: "CS",
            A404: "SQ",
            A491: "CS",
            A492: "LO",
            A493: "CS",
            A494: "CS",
            A496: "CS",
            A504: "SQ",
            A525: "SQ",
            A600: "CS",
            A601: "CS",
            A603: "CS",
            A730: "SQ",
            A731: "SQ",
            A732: "SQ",
            A744: "SQ",
            A992: "ST",
            B020: "SQ",
            DB00: "CS",
            DB06: "DT",
            DB07: "DT",
            DB0B: "CS",
            DB0C: "UI",
            DB0D: "UI",
            DB73: "UL",
            E001: "ST",
            E004: "DT",
            E006: "SQ",
            E008: "SQ",
            E010: "UT",
            E011: "UI",
            E020: "CS",
            E021: "SQ",
            E022: "SQ",
            E023: "SQ",
            E024: "SQ",
            E030: "UI",
            E031: "UI"
        },
        "0042": {
            "0010": "ST",
            "0011": "OB",
            "0012": "LO",
            "0013": "SQ",
            "0014": "LO"
        },
        "0044": {
            "0001": "ST",
            "0002": "CS",
            "0003": "LT",
            "0004": "DT",
            "0007": "SQ",
            "0008": "LO",
            "0009": "LT",
            "000A": "LO",
            "000B": "DT",
            "0010": "DT",
            "0011": "LO",
            "0012": "LO",
            "0013": "SQ",
            "0019": "SQ"
        },
        "0046": {
            "0012": "LO",
            "0014": "SQ",
            "0015": "SQ",
            "0016": "SQ",
            "0018": "SQ",
            "0028": "SQ",
            "0030": "FD",
            "0032": "CS",
            "0034": "FD",
            "0036": "CS",
            "0038": "CS",
            "0040": "FD",
            "0042": "FD",
            "0044": "FD",
            "0046": "FD",
            "0050": "SQ",
            "0052": "SQ",
            "0060": "FD",
            "0062": "FD",
            "0063": "FD",
            "0064": "FD",
            "0070": "SQ",
            "0071": "SQ",
            "0074": "SQ",
            "0075": "FD",
            "0076": "FD",
            "0077": "FD",
            "0080": "SQ",
            "0092": "CS",
            "0094": "CS",
            "0095": "CS",
            "0097": "SQ",
            "0098": "SQ",
            "0100": "SQ",
            "0101": "SQ",
            "0102": "SQ",
            "0104": "FD",
            "0106": "FD",
            "0121": "SQ",
            "0122": "SQ",
            "0123": "SQ",
            "0124": "SQ",
            "0125": "CS",
            "0135": "SS",
            "0137": "FD",
            "0139": "LO",
            "0145": "SQ",
            "0146": "FD",
            "0147": "FD"
        },
        "0048": {
            "0001": "FL",
            "0002": "FL",
            "0003": "FL",
            "0006": "UL",
            "0007": "UL",
            "0008": "SQ",
            "0010": "CS",
            "0011": "CS",
            "0012": "CS",
            "0013": "US",
            "0014": "FL",
            "0015": "US",
            "0100": "SQ",
            "0102": "DS",
            "0105": "SQ",
            "0106": "SH",
            "0107": "ST",
            "0108": "SQ",
            "0110": "SQ",
            "0111": "DS",
            "0112": "DS",
            "0113": "DS",
            "0120": "SQ",
            "0200": "SQ",
            "0201": "US",
            "0202": "US",
            "0207": "SQ",
            "021A": "SQ",
            "021E": "SL",
            "021F": "SL",
            "0301": "CS"
        },
        "0050": {
            "0004": "CS",
            "0010": "SQ",
            "0012": "SQ",
            "0013": "FD",
            "0014": "DS",
            "0015": "FD",
            "0016": "DS",
            "0017": "CS",
            "0018": "DS",
            "0019": "DS",
            "001A": "CS",
            "001B": "LO",
            "001C": "FD",
            "001D": "FD",
            "001E": "LO",
            "0020": "LO"
        },
        "0052": {
            "0001": "FL",
            "0002": "FD",
            "0003": "FD",
            "0004": "FD",
            "0006": "CS",
            "0007": "FD",
            "0008": "FD",
            "0009": "FD",
            "0011": "FD",
            "0012": "US",
            "0013": "FD",
            "0014": "FD",
            "0016": "SQ",
            "0025": "SQ",
            "0026": "CS",
            "0027": "SQ",
            "0028": "FD",
            "0029": "SQ",
            "0030": "SS",
            "0031": "CS",
            "0033": "FD",
            "0034": "FD",
            "0036": "US",
            "0038": "US",
            "0039": "CS",
            "003A": "CS"
        },
        "0054": {
            "0011": "US",
            "0012": "SQ",
            "0013": "SQ",
            "0014": "DS",
            "0015": "DS",
            "0016": "SQ",
            "0017": "IS",
            "0018": "SH",
            "0020": "US",
            "0021": "US",
            "0022": "SQ",
            "0030": "US",
            "0031": "US",
            "0032": "SQ",
            "0033": "US",
            "0036": "IS",
            "0038": "IS",
            "0039": "CS",
            "0050": "US",
            "0051": "US",
            "0052": "SQ",
            "0053": "US",
            "0060": "US",
            "0061": "US",
            "0062": "SQ",
            "0063": "SQ",
            "0070": "US",
            "0071": "US",
            "0072": "SQ",
            "0073": "DS",
            "0080": "US",
            "0081": "US",
            "0090": "US",
            "0100": "US",
            "0101": "US",
            "0200": "DS",
            "0202": "CS",
            "0210": "IS",
            "0211": "US",
            "0220": "SQ",
            "0222": "SQ",
            "0300": "SQ",
            "0302": "SQ",
            "0304": "SQ",
            "0306": "SQ",
            "0308": "US",
            "0400": "SH",
            "0410": "SQ",
            "0412": "SQ",
            "0414": "SQ",
            "0500": "CS",
            1E3: "CS",
            1001: "CS",
            1002: "CS",
            1004: "CS",
            1006: "CS",
            1100: "CS",
            1101: "LO",
            1102: "CS",
            1103: "LO",
            1104: "LO",
            1105: "LO",
            1200: "DS",
            1201: "IS",
            1202: "IS",
            1203: "DS",
            1210: "DS",
            1220: "CS",
            1300: "DS",
            1310: "IS",
            1311: "IS",
            1320: "DS",
            1321: "DS",
            1322: "DS",
            1323: "DS",
            1324: "DS",
            1330: "US",
            1400: "CS",
            1401: "CS"
        },
        "0060": {
            3E3: "SQ",
            3002: "US",
            3004: "US",
            3006: "US",
            3008: "US",
            3010: "LO",
            3020: "UL"
        },
        "0062": {
            "0001": "CS",
            "0002": "SQ",
            "0003": "SQ",
            "0004": "US",
            "0005": "LO",
            "0006": "ST",
            "0008": "CS",
            "0009": "LO",
            "000A": "SQ",
            "000B": "US",
            "000C": "US",
            "000D": "US",
            "000E": "US",
            "000F": "SQ",
            "0010": "CS"
        },
        "0064": {
            "0002": "SQ",
            "0003": "UI",
            "0005": "SQ",
            "0007": "UL",
            "0008": "FD",
            "0009": "OF",
            "000F": "SQ",
            "0010": "SQ"
        },
        "0066": {
            "0001": "UL",
            "0002": "SQ",
            "0003": "UL",
            "0004": "LT",
            "0009": "CS",
            "000A": "FL",
            "000B": "LO",
            "000C": "FL",
            "000D": "CS",
            "000E": "CS",
            "0010": "CS",
            "0011": "SQ",
            "0012": "SQ",
            "0013": "SQ",
            "0015": "UL",
            "0016": "OF",
            "0017": "FL",
            "0018": "FL",
            "0019": "FL",
            "001A": "FL",
            "001B": "FL",
            "001C": "FL",
            "001E": "UL",
            "001F": "US",
            "0020": "FL",
            "0021": "OF",
            "0023": "OW",
            "0024": "OW",
            "0025": "OW",
            "0026": "SQ",
            "0027": "SQ",
            "0028": "SQ",
            "0029": "OW",
            "002A": "UL",
            "002B": "SQ",
            "002C": "UL",
            "002D": "SQ",
            "002E": "SQ",
            "002F": "SQ",
            "0030": "SQ",
            "0031": "LO",
            "0032": "LT",
            "0034": "SQ",
            "0035": "SQ",
            "0036": "LO"
        },
        "0068": {
            6210: "LO",
            6221: "LO",
            6222: "SQ",
            6223: "CS",
            6224: "SQ",
            6225: "SQ",
            6226: "DT",
            6230: "SQ",
            6260: "SQ",
            6265: "SQ",
            6270: "DT",
            6280: "ST",
            "62A0": "SQ",
            "62A5": "FD",
            "62C0": "SQ",
            "62D0": "US",
            "62D5": "LO",
            "62E0": "SQ",
            "62F0": "FD",
            "62F2": "FD",
            6300: "OB",
            6310: "US",
            6320: "SQ",
            6330: "US",
            6340: "LO",
            6345: "ST",
            6346: "FD",
            6347: "FD",
            6350: "US",
            6360: "SQ",
            6380: "LO",
            6390: "FD",
            "63A0": "SQ",
            "63A4": "SQ",
            "63A8": "SQ",
            "63AC": "SQ",
            "63B0": "SQ",
            "63C0": "US",
            "63D0": "LO",
            "63E0": "SQ",
            "63F0": "US",
            6400: "SQ",
            6410: "US",
            6420: "CS",
            6430: "SQ",
            6440: "US",
            6450: "FD",
            6460: "FD",
            6470: "SQ",
            6490: "FD",
            "64A0": "FD",
            "64C0": "FD",
            "64D0": "FD",
            "64F0": "FD",
            6500: "SQ",
            6510: "SQ",
            6520: "SQ",
            6530: "US",
            6540: "LO",
            6545: "SQ",
            6550: "SQ",
            6560: "FD",
            6590: "FD",
            "65A0": "SQ",
            "65B0": "FD",
            "65D0": "FD",
            "65E0": "SQ",
            "65F0": "FD",
            6610: "FD",
            6620: "FD"
        },
        "0070": {
            "0001": "SQ",
            "0002": "CS",
            "0003": "CS",
            "0004": "CS",
            "0005": "CS",
            "0006": "ST",
            "0008": "SQ",
            "0009": "SQ",
            "0010": "FL",
            "0011": "FL",
            "0012": "CS",
            "0014": "FL",
            "0015": "CS",
            "0020": "US",
            "0021": "US",
            "0022": "FL",
            "0023": "CS",
            "0024": "CS",
            "0040": "IS",
            "0041": "CS",
            "0042": "US",
            "0050": "US",
            "0051": "US",
            "0052": "SL",
            "0053": "SL",
            "005A": "SQ",
            "0060": "SQ",
            "0062": "IS",
            "0066": "US",
            "0067": "US",
            "0068": "LO",
            "0080": "CS",
            "0081": "LO",
            "0082": "DA",
            "0083": "TM",
            "0084": "PN",
            "0086": "SQ",
            "0087": "SQ",
            "0100": "CS",
            "0101": "DS",
            "0102": "IS",
            "0103": "FL",
            "0207": "LO",
            "0208": "ST",
            "0209": "SQ",
            "0226": "UL",
            "0227": "LO",
            "0228": "CS",
            "0229": "LO",
            "0230": "FD",
            "0231": "SQ",
            "0232": "SQ",
            "0233": "SQ",
            "0234": "SQ",
            "0241": "US",
            "0242": "CS",
            "0243": "CS",
            "0244": "CS",
            "0245": "FL",
            "0246": "FL",
            "0247": "US",
            "0248": "CS",
            "0249": "CS",
            "0250": "CS",
            "0251": "US",
            "0252": "US",
            "0253": "FL",
            "0254": "CS",
            "0255": "UL",
            "0256": "OB",
            "0257": "CS",
            "0258": "FL",
            "0261": "FL",
            "0262": "FL",
            "0273": "FL",
            "0274": "CS",
            "0278": "CS",
            "0279": "CS",
            "0282": "CS",
            "0284": "FL",
            "0285": "FL",
            "0287": "SQ",
            "0288": "FL",
            "0289": "SH",
            "0294": "CS",
            "0295": "UL",
            "0306": "CS",
            "0308": "SQ",
            "0309": "SQ",
            "030A": "SQ",
            "030C": "CS",
            "030D": "SQ",
            "030F": "ST",
            "0310": "SH",
            "0311": "SQ",
            "0312": "FD",
            "0314": "SQ",
            "0318": "SQ",
            "031A": "UI",
            "031C": "SQ",
            "031E": "SQ",
            "0401": "US",
            "0402": "SQ",
            "0403": "FL",
            "0404": "SQ",
            "0405": "CS"
        },
        "0072": {
            "0002": "SH",
            "0004": "LO",
            "0006": "CS",
            "0008": "LO",
            "000A": "DT",
            "000C": "SQ",
            "000E": "SQ",
            "0010": "LO",
            "0012": "SQ",
            "0014": "US",
            "0020": "SQ",
            "0022": "SQ",
            "0024": "CS",
            "0026": "AT",
            "0028": "US",
            "0030": "SQ",
            "0032": "US",
            "0034": "CS",
            "0038": "US",
            "003A": "CS",
            "003C": "SS",
            "003E": "SQ",
            "0040": "LO",
            "0050": "CS",
            "0052": "AT",
            "0054": "LO",
            "0056": "LO",
            "0060": "AT",
            "0062": "CS",
            "0064": "IS",
            "0066": "LO",
            "0068": "LT",
            "006A": "PN",
            "006C": "SH",
            "006E": "ST",
            "0070": "UT",
            "0072": "DS",
            "0074": "FD",
            "0076": "FL",
            "0078": "UL",
            "007A": "US",
            "007C": "SL",
            "007E": "SS",
            "0080": "SQ",
            "0100": "US",
            "0102": "SQ",
            "0104": "US",
            "0106": "US",
            "0108": "FD",
            "010A": "US",
            "010C": "US",
            "010E": "US",
            "0200": "SQ",
            "0202": "US",
            "0203": "LO",
            "0204": "US",
            "0206": "LO",
            "0208": "CS",
            "0210": "SQ",
            "0212": "US",
            "0214": "SQ",
            "0216": "US",
            "0218": "US",
            "0300": "SQ",
            "0302": "US",
            "0304": "CS",
            "0306": "US",
            "0308": "US",
            "0310": "CS",
            "0312": "CS",
            "0314": "US",
            "0316": "CS",
            "0318": "US",
            "0320": "US",
            "0330": "FD",
            "0400": "SQ",
            "0402": "CS",
            "0404": "CS",
            "0406": "CS",
            "0420": "US",
            "0421": "US",
            "0422": "SQ",
            "0424": "SQ",
            "0427": "SQ",
            "0430": "SQ",
            "0432": "US",
            "0434": "CS",
            "0500": "CS",
            "0510": "CS",
            "0512": "FD",
            "0514": "FD",
            "0516": "CS",
            "0520": "CS",
            "0600": "SQ",
            "0602": "CS",
            "0604": "CS",
            "0700": "CS",
            "0702": "CS",
            "0704": "CS",
            "0705": "SQ",
            "0706": "CS",
            "0710": "CS",
            "0712": "CS",
            "0714": "CS",
            "0716": "CS",
            "0717": "CS",
            "0718": "CS"
        },
        "0074": {
            "0120": "FD",
            "0121": "FD",
            1E3: "CS",
            1002: "SQ",
            1004: "DS",
            1006: "ST",
            1008: "SQ",
            "100A": "ST",
            "100C": "LO",
            "100E": "SQ",
            1020: "SQ",
            1022: "CS",
            1024: "IS",
            1026: "FD",
            1027: "FD",
            1028: "FD",
            "102A": "FD",
            "102B": "FD",
            "102C": "FD",
            "102D": "FD",
            1030: "SQ",
            1032: "CS",
            1034: "CS",
            1036: "CS",
            1038: "DS",
            "103A": "DS",
            1040: "SQ",
            1042: "SQ",
            1044: "SQ",
            1046: "SQ",
            1048: "SQ",
            "104A": "SQ",
            "104C": "SQ",
            "104E": "SQ",
            1050: "SQ",
            1052: "AT",
            1054: "UL",
            1056: "LO",
            1057: "IS",
            1200: "CS",
            1202: "LO",
            1204: "LO",
            1210: "SQ",
            1212: "SQ",
            1216: "SQ",
            1220: "SQ",
            1222: "LO",
            1224: "SQ",
            1230: "LO",
            1234: "AE",
            1236: "AE",
            1238: "LT",
            1242: "CS",
            1244: "CS",
            1246: "CS",
            1324: "UL",
            1338: "FD",
            "133A": "FD"
        },
        "0076": {
            "0001": "LO",
            "0003": "LO",
            "0006": "LO",
            "0008": "SQ",
            "000A": "CS",
            "000C": "SQ",
            "000E": "SQ",
            "0010": "SQ",
            "0020": "SQ",
            "0030": "LO",
            "0032": "SQ",
            "0034": "CS",
            "0036": "CS",
            "0038": "CS",
            "0040": "SQ",
            "0055": "US",
            "0060": "SQ",
            "0070": "US",
            "0080": "US",
            "0090": "US",
            "00A0": "US",
            "00B0": "US",
            "00C0": "US"
        },
        "0078": {
            "0001": "LO",
            "0010": "ST",
            "0020": "LO",
            "0024": "LO",
            "0026": "SQ",
            "0028": "SQ",
            "002A": "SQ",
            "002E": "US",
            "0050": "FD",
            "0060": "FD",
            "0070": "SQ",
            "0090": "FD",
            "00A0": "FD",
            "00B0": "SQ",
            "00B2": "LO",
            "00B4": "SQ",
            "00B6": "US",
            "00B8": "US"
        },
        "0088": {
            "0130": "SH",
            "0140": "UI",
            "0200": "SQ",
            "0904": "LO",
            "0906": "ST",
            "0910": "LO",
            "0912": "LO"
        },
        "0100": {
            "0410": "CS",
            "0420": "DT",
            "0424": "LT",
            "0426": "LO"
        },
        "0400": {
            "0005": "US",
            "0010": "UI",
            "0015": "CS",
            "0020": "AT",
            "0100": "UI",
            "0105": "DT",
            "0110": "CS",
            "0115": "OB",
            "0120": "OB",
            "0305": "CS",
            "0310": "OB",
            "0401": "SQ",
            "0402": "SQ",
            "0403": "SQ",
            "0404": "OB",
            "0500": "SQ",
            "0510": "UI",
            "0520": "OB",
            "0550": "SQ",
            "0561": "SQ",
            "0562": "DT",
            "0563": "LO",
            "0564": "LO",
            "0565": "CS"
        },
        1E3: {
            "0000": "UL",
            "0001": "US",
            "0002": "US",
            "0003": "US",
            "0004": "US",
            "0005": "US"
        },
        1010: {
            "0000": "UL"
        },
        2E3: {
            "0010": "IS",
            "001E": "SQ",
            "0020": "CS",
            "0030": "CS",
            "0040": "CS",
            "0050": "LO",
            "0060": "IS",
            "0061": "IS",
            "0062": "CS",
            "0063": "CS",
            "0065": "CS",
            "0067": "CS",
            "0069": "CS",
            "006A": "CS",
            "00A0": "US",
            "00A1": "US",
            "00A2": "SQ",
            "00A4": "SQ",
            "00A8": "SQ",
            "0500": "SQ",
            "0510": "SQ"
        },
        2010: {
            "0010": "ST",
            "0030": "CS",
            "0040": "CS",
            "0050": "CS",
            "0052": "CS",
            "0054": "CS",
            "0060": "CS",
            "0080": "CS",
            "00A6": "CS",
            "00A7": "CS",
            "00A8": "CS",
            "00A9": "CS",
            "0100": "CS",
            "0110": "CS",
            "0120": "US",
            "0130": "US",
            "0140": "CS",
            "0150": "ST",
            "0152": "LT",
            "0154": "IS",
            "015E": "US",
            "0160": "US",
            "0376": "DS",
            "0500": "SQ",
            "0510": "SQ",
            "0520": "SQ"
        },
        2020: {
            "0010": "US",
            "0020": "CS",
            "0030": "DS",
            "0040": "CS",
            "0050": "CS",
            "00A0": "CS",
            "00A2": "CS",
            "0110": "SQ",
            "0111": "SQ",
            "0130": "SQ",
            "0140": "SQ"
        },
        2030: {
            "0010": "US",
            "0020": "LO"
        },
        2040: {
            "0010": "SQ",
            "0011": "US",
            "0020": "SQ",
            "0060": "CS",
            "0070": "CS",
            "0072": "CS",
            "0074": "US",
            "0080": "CS",
            "0082": "CS",
            "0090": "CS",
            "0100": "CS",
            "0500": "SQ"
        },
        2050: {
            "0010": "SQ",
            "0020": "CS",
            "0500": "SQ"
        },
        2100: {
            "0010": "SH",
            "0020": "CS",
            "0030": "CS",
            "0040": "DA",
            "0050": "TM",
            "0070": "AE",
            "0140": "AE",
            "0160": "SH",
            "0170": "IS",
            "0500": "SQ"
        },
        2110: {
            "0010": "CS",
            "0020": "CS",
            "0030": "LO",
            "0099": "SH"
        },
        2120: {
            "0010": "CS",
            "0050": "SQ",
            "0070": "SQ"
        },
        2130: {
            "0010": "SQ",
            "0015": "SQ",
            "0030": "SQ",
            "0040": "SQ",
            "0050": "SQ",
            "0060": "SQ",
            "0080": "SQ",
            "00A0": "SQ",
            "00C0": "SQ"
        },
        2200: {
            "0001": "CS",
            "0002": "UT",
            "0003": "CS",
            "0004": "LT",
            "0005": "LT",
            "0006": "CS",
            "0007": "CS",
            "0008": "CS",
            "0009": "CS",
            "000A": "CS",
            "000B": "US",
            "000C": "LO",
            "000D": "SQ",
            "000E": "AT",
            "000F": "CS",
            "0020": "CS"
        },
        3002: {
            "0002": "SH",
            "0003": "LO",
            "0004": "ST",
            "000A": "CS",
            "000C": "CS",
            "000D": "DS",
            "000E": "DS",
            "0010": "DS",
            "0011": "DS",
            "0012": "DS",
            "0020": "SH",
            "0022": "DS",
            "0024": "DS",
            "0026": "DS",
            "0028": "DS",
            "0029": "IS",
            "0030": "SQ",
            "0032": "DS",
            "0034": "DS",
            "0040": "SQ",
            "0041": "CS",
            "0042": "DS",
            "0050": "SQ",
            "0051": "CS",
            "0052": "SH"
        },
        3004: {
            "0001": "CS",
            "0002": "CS",
            "0004": "CS",
            "0006": "LO",
            "0008": "DS",
            "000A": "CS",
            "000C": "DS",
            "000E": "DS",
            "0010": "SQ",
            "0012": "DS",
            "0014": "CS",
            "0040": "DS",
            "0042": "DS",
            "0050": "SQ",
            "0052": "DS",
            "0054": "CS",
            "0056": "IS",
            "0058": "DS",
            "0060": "SQ",
            "0062": "CS",
            "0070": "DS",
            "0072": "DS",
            "0074": "DS"
        },
        3006: {
            "0002": "SH",
            "0004": "LO",
            "0006": "ST",
            "0008": "DA",
            "0009": "TM",
            "0010": "SQ",
            "0012": "SQ",
            "0014": "SQ",
            "0016": "SQ",
            "0020": "SQ",
            "0022": "IS",
            "0024": "UI",
            "0026": "LO",
            "0028": "ST",
            "002A": "IS",
            "002C": "DS",
            "0030": "SQ",
            "0033": "CS",
            "0036": "CS",
            "0038": "LO",
            "0039": "SQ",
            "0040": "SQ",
            "0042": "CS",
            "0044": "DS",
            "0045": "DS",
            "0046": "IS",
            "0048": "IS",
            "0049": "IS",
            "0050": "DS",
            "0080": "SQ",
            "0082": "IS",
            "0084": "IS",
            "0085": "SH",
            "0086": "SQ",
            "0088": "ST",
            "00A0": "SQ",
            "00A4": "CS",
            "00A6": "PN",
            "00B0": "SQ",
            "00B2": "CS",
            "00B4": "DS",
            "00B6": "SQ",
            "00B7": "US",
            "00B8": "FL",
            "00C0": "SQ",
            "00C2": "UI",
            "00C4": "CS",
            "00C6": "DS",
            "00C8": "LO"
        },
        3008: {
            "0010": "SQ",
            "0012": "ST",
            "0014": "CS",
            "0016": "DS",
            "0020": "SQ",
            "0021": "SQ",
            "0022": "IS",
            "0024": "DA",
            "0025": "TM",
            "002A": "CS",
            "002B": "SH",
            "002C": "CS",
            "0030": "SQ",
            "0032": "DS",
            "0033": "DS",
            "0036": "DS",
            "0037": "DS",
            "003A": "DS",
            "003B": "DS",
            "0040": "SQ",
            "0041": "SQ",
            "0042": "DS",
            "0044": "DS",
            "0045": "FL",
            "0046": "FL",
            "0047": "FL",
            "0048": "DS",
            "0050": "SQ",
            "0052": "DS",
            "0054": "DA",
            "0056": "DA",
            "005A": "IS",
            "0060": "SQ",
            "0061": "AT",
            "0062": "AT",
            "0063": "IS",
            "0064": "IS",
            "0065": "AT",
            "0066": "ST",
            "0068": "SQ",
            "006A": "FL",
            "0070": "SQ",
            "0072": "IS",
            "0074": "ST",
            "0076": "DS",
            "0078": "DS",
            "007A": "DS",
            "0080": "SQ",
            "0082": "IS",
            "0090": "SQ",
            "0092": "IS",
            "00A0": "SQ",
            "00B0": "SQ",
            "00C0": "SQ",
            "00D0": "SQ",
            "00E0": "SQ",
            "00F0": "SQ",
            "00F2": "SQ",
            "00F4": "SQ",
            "00F6": "SQ",
            "0100": "SQ",
            "0105": "LO",
            "0110": "SQ",
            "0116": "CS",
            "0120": "SQ",
            "0122": "IS",
            "0130": "SQ",
            "0132": "DS",
            "0134": "DS",
            "0136": "IS",
            "0138": "IS",
            "013A": "DS",
            "013C": "DS",
            "0140": "SQ",
            "0142": "IS",
            "0150": "SQ",
            "0152": "IS",
            "0160": "SQ",
            "0162": "DA",
            "0164": "TM",
            "0166": "DA",
            "0168": "TM",
            "0200": "CS",
            "0202": "ST",
            "0220": "SQ",
            "0223": "IS",
            "0224": "CS",
            "0230": "CS",
            "0240": "SQ",
            "0250": "DA",
            "0251": "TM"
        },
        "300A": {
            "0002": "SH",
            "0003": "LO",
            "0004": "ST",
            "0006": "DA",
            "0007": "TM",
            "0009": "LO",
            "000A": "CS",
            "000B": "LO",
            "000C": "CS",
            "000E": "ST",
            "0010": "SQ",
            "0012": "IS",
            "0013": "UI",
            "0014": "CS",
            "0015": "CS",
            "0016": "LO",
            "0018": "DS",
            "001A": "DS",
            "0020": "CS",
            "0021": "DS",
            "0022": "DS",
            "0023": "DS",
            "0025": "DS",
            "0026": "DS",
            "0027": "DS",
            "0028": "DS",
            "002A": "DS",
            "002B": "DS",
            "002C": "DS",
            "002D": "DS",
            "0040": "SQ",
            "0042": "IS",
            "0043": "SH",
            "0044": "DS",
            "0046": "DS",
            "0048": "SQ",
            "004A": "DS",
            "004B": "FL",
            "004C": "DS",
            "004E": "DS",
            "004F": "FL",
            "0050": "FL",
            "0051": "DS",
            "0052": "DS",
            "0053": "DS",
            "0055": "CS",
            "0070": "SQ",
            "0071": "IS",
            "0072": "LO",
            "0078": "IS",
            "0079": "IS",
            "007A": "IS",
            "007B": "LT",
            "0080": "IS",
            "0082": "DS",
            "0084": "DS",
            "0086": "DS",
            "0088": "FL",
            "0089": "FL",
            "008A": "FL",
            "00A0": "IS",
            "00A2": "DS",
            "00A4": "DS",
            "00B0": "SQ",
            "00B2": "SH",
            "00B3": "CS",
            "00B4": "DS",
            "00B6": "SQ",
            "00B8": "CS",
            "00BA": "DS",
            "00BB": "FL",
            "00BC": "IS",
            "00BE": "DS",
            "00C0": "IS",
            "00C2": "LO",
            "00C3": "ST",
            "00C4": "CS",
            "00C6": "CS",
            "00C7": "CS",
            "00C8": "IS",
            "00CA": "SQ",
            "00CC": "LO",
            "00CE": "CS",
            "00D0": "IS",
            "00D1": "SQ",
            "00D2": "IS",
            "00D3": "CS",
            "00D4": "SH",
            "00D5": "IS",
            "00D6": "DS",
            "00D7": "FL",
            "00D8": "DS",
            "00D9": "FL",
            "00DA": "DS",
            "00DB": "FL",
            "00DC": "SH",
            "00DD": "ST",
            "00E0": "IS",
            "00E1": "SH",
            "00E2": "DS",
            "00E3": "SQ",
            "00E4": "IS",
            "00E5": "SH",
            "00E6": "DS",
            "00E7": "IS",
            "00E8": "IS",
            "00E9": "DS",
            "00EA": "DS",
            "00EB": "DS",
            "00EC": "DS",
            "00ED": "IS",
            "00EE": "CS",
            "00F0": "IS",
            "00F2": "DS",
            "00F3": "FL",
            "00F4": "SQ",
            "00F5": "SH",
            "00F6": "DS",
            "00F7": "FL",
            "00F8": "CS",
            "00F9": "LO",
            "00FA": "CS",
            "00FB": "CS",
            "00FC": "IS",
            "00FE": "LO",
            "0100": "DS",
            "0102": "DS",
            "0104": "IS",
            "0106": "DS",
            "0107": "SQ",
            "0108": "SH",
            "0109": "CS",
            "010A": "LO",
            "010C": "DS",
            "010E": "DS",
            "0110": "IS",
            "0111": "SQ",
            "0112": "IS",
            "0114": "DS",
            "0115": "DS",
            "0116": "SQ",
            "0118": "CS",
            "011A": "SQ",
            "011C": "DS",
            "011E": "DS",
            "011F": "CS",
            "0120": "DS",
            "0121": "CS",
            "0122": "DS",
            "0123": "CS",
            "0124": "DS",
            "0125": "DS",
            "0126": "CS",
            "0128": "DS",
            "0129": "DS",
            "012A": "DS",
            "012C": "DS",
            "012E": "DS",
            "0130": "DS",
            "0134": "DS",
            "0140": "FL",
            "0142": "CS",
            "0144": "FL",
            "0146": "CS",
            "0148": "FL",
            "014A": "FL",
            "014C": "CS",
            "014E": "FL",
            "0180": "SQ",
            "0182": "IS",
            "0183": "LO",
            "0184": "LO",
            "0190": "SQ",
            "0192": "CS",
            "0194": "SH",
            "0196": "ST",
            "0198": "SH",
            "0199": "FL",
            "019A": "FL",
            "01A0": "SQ",
            "01A2": "CS",
            "01A4": "SH",
            "01A6": "ST",
            "01A8": "SH",
            "01B0": "CS",
            "01B2": "ST",
            "01B4": "SQ",
            "01B6": "CS",
            "01B8": "SH",
            "01BA": "ST",
            "01BC": "DS",
            "01D0": "ST",
            "01D2": "DS",
            "01D4": "DS",
            "01D6": "DS",
            "0200": "CS",
            "0202": "CS",
            "0206": "SQ",
            "0210": "SQ",
            "0212": "IS",
            "0214": "CS",
            "0216": "LO",
            "0218": "DS",
            "021A": "DS",
            "0222": "DS",
            "0224": "DS",
            "0226": "LO",
            "0228": "DS",
            "0229": "CS",
            "022A": "DS",
            "022B": "DS",
            "022C": "DA",
            "022E": "TM",
            "0230": "SQ",
            "0232": "CS",
            "0234": "IS",
            "0236": "LO",
            "0238": "LO",
            "0240": "IS",
            "0242": "SH",
            "0244": "LO",
            "0250": "DS",
            "0260": "SQ",
            "0262": "IS",
            "0263": "SH",
            "0264": "CS",
            "0266": "LO",
            "026A": "DS",
            "026C": "DS",
            "0280": "SQ",
            "0282": "IS",
            "0284": "DS",
            "0286": "DS",
            "0288": "CS",
            "028A": "IS",
            "028C": "DS",
            "0290": "IS",
            "0291": "SH",
            "0292": "CS",
            "0294": "LO",
            "0296": "DS",
            "0298": "LO",
            "029C": "DS",
            "029E": "DS",
            "02A0": "DS",
            "02A2": "IS",
            "02A4": "DS",
            "02B0": "SQ",
            "02B2": "IS",
            "02B3": "SH",
            "02B4": "LO",
            "02B8": "DS",
            "02BA": "DS",
            "02C8": "DS",
            "02D0": "SQ",
            "02D2": "DS",
            "02D4": "DS",
            "02D6": "DS",
            "02E0": "CS",
            "02E1": "CS",
            "02E2": "DS",
            "02E3": "FL",
            "02E4": "FL",
            "02E5": "FL",
            "02E6": "FL",
            "02E7": "FL",
            "02E8": "FL",
            "02EA": "SQ",
            "02EB": "LT",
            "0302": "IS",
            "0304": "IS",
            "0306": "SS",
            "0308": "CS",
            "030A": "FL",
            "030C": "SQ",
            "030D": "FL",
            "030F": "SH",
            "0312": "IS",
            "0314": "SQ",
            "0316": "IS",
            "0318": "SH",
            "0320": "CS",
            "0322": "LO",
            "0330": "IS",
            "0332": "SQ",
            "0334": "IS",
            "0336": "SH",
            "0338": "CS",
            "033A": "LO",
            "033C": "FL",
            "0340": "IS",
            "0342": "SQ",
            "0344": "IS",
            "0346": "SH",
            "0348": "CS",
            "034A": "LO",
            "034C": "SH",
            "0350": "CS",
            "0352": "SH",
            "0354": "LO",
            "0356": "FL",
            "0358": "FL",
            "035A": "FL",
            "0360": "SQ",
            "0362": "LO",
            "0364": "FL",
            "0366": "FL",
            "0370": "SQ",
            "0372": "LO",
            "0374": "FL",
            "0380": "SQ",
            "0382": "FL",
            "0384": "FL",
            "0386": "FL",
            "0388": "FL",
            "038A": "FL",
            "0390": "SH",
            "0392": "IS",
            "0394": "FL",
            "0396": "FL",
            "0398": "FL",
            "039A": "IS",
            "03A0": "SQ",
            "03A2": "SQ",
            "03A4": "SQ",
            "03A6": "SQ",
            "03A8": "SQ",
            "03AA": "SQ",
            "03AC": "SQ",
            "0401": "SQ",
            "0402": "ST",
            "0410": "SQ",
            "0412": "FL",
            "0420": "SQ",
            "0421": "SH",
            "0422": "ST",
            "0423": "CS",
            "0424": "IS",
            "0431": "SQ",
            "0432": "CS",
            "0433": "FL",
            "0434": "FL",
            "0435": "FL",
            "0436": "FL"
        },
        "300C": {
            "0002": "SQ",
            "0004": "SQ",
            "0006": "IS",
            "0007": "IS",
            "0008": "DS",
            "0009": "DS",
            "000A": "SQ",
            "000C": "IS",
            "000E": "IS",
            "0020": "SQ",
            "0022": "IS",
            "0040": "SQ",
            "0042": "SQ",
            "0050": "SQ",
            "0051": "IS",
            "0055": "SQ",
            "0060": "SQ",
            "006A": "IS",
            "0080": "SQ",
            "00A0": "IS",
            "00B0": "SQ",
            "00C0": "IS",
            "00D0": "IS",
            "00E0": "IS",
            "00F0": "IS",
            "00F2": "SQ",
            "00F4": "IS",
            "00F6": "IS",
            "0100": "IS",
            "0102": "IS",
            "0104": "IS"
        },
        "300E": {
            "0002": "CS",
            "0004": "DA",
            "0005": "TM",
            "0008": "PN"
        },
        4E3: {
            "0010": "LT",
            4E3: "LT"
        },
        4008: {
            "0040": "SH",
            "0042": "LO",
            "0050": "SQ",
            "00FF": "CS",
            "0100": "DA",
            "0101": "TM",
            "0102": "PN",
            "0103": "LO",
            "0108": "DA",
            "0109": "TM",
            "010A": "PN",
            "010B": "ST",
            "010C": "PN",
            "0111": "SQ",
            "0112": "DA",
            "0113": "TM",
            "0114": "PN",
            "0115": "LT",
            "0117": "SQ",
            "0118": "SQ",
            "0119": "PN",
            "011A": "LO",
            "0200": "SH",
            "0202": "LO",
            "0210": "CS",
            "0212": "CS",
            "0300": "ST",
            4E3: "ST"
        },
        4010: {
            "0001": "CS",
            "0002": "CS",
            "0004": "SQ",
            1001: "SQ",
            1004: "FL",
            1005: "FL",
            1006: "OB",
            1007: "SH",
            1008: "CS",
            1009: "CS",
            "100A": "SQ",
            1010: "US",
            1011: "SQ",
            1012: "CS",
            1013: "LT",
            1014: "CS",
            1015: "CS",
            1016: "FL",
            1017: "FL",
            1018: "FL",
            1019: "FL",
            "101A": "SH",
            "101B": "FL",
            "101C": "FL",
            "101D": "FL",
            "101E": "SH",
            "101F": "SH",
            1020: "CS",
            1021: "CS",
            1023: "FL",
            1024: "CS",
            1025: "DT",
            1026: "DT",
            1027: "CS",
            1028: "CS",
            1029: "LO",
            "102A": "SH",
            "102B": "DT",
            1031: "CS",
            1033: "US",
            1034: "US",
            1037: "SQ",
            1038: "SQ",
            1039: "CS",
            "103A": "CS",
            1041: "DT",
            1042: "CS",
            1043: "FL",
            1044: "CS",
            1045: "SQ",
            1046: "CS",
            1047: "SQ",
            1048: "CS",
            1051: "LO",
            1052: "SH",
            1053: "LO",
            1054: "SH",
            1055: "SH",
            1056: "CS",
            1058: "SH",
            1059: "CS",
            1060: "FL",
            1061: "FL",
            1062: "FL",
            1064: "SQ",
            1067: "CS",
            1068: "LT",
            1069: "FL",
            "106C": "OB"
        },
        "4FFE": {
            "0001": "SQ"
        },
        5E3: {
            "0005": "US",
            "0010": "US",
            "0020": "CS",
            "0022": "LO",
            "0030": "SH",
            "0040": "SH",
            "0103": "US",
            "0104": "US",
            "0105": "US",
            "0106": "SH",
            "0110": "US",
            "0112": "US",
            "0114": "US",
            1001: "CS",
            2E3: "US",
            2002: "US",
            2004: "US",
            2006: "UL",
            2008: "UL",
            "200A": "UL",
            "200C": "OW",
            "200E": "LT",
            2500: "LO",
            2600: "SQ",
            2610: "US",
            3E3: "OW"
        },
        5200: {
            9229: "SQ",
            9230: "SQ"
        },
        5400: {
            "0100": "SQ",
            "0110": "OB",
            "0112": "OB",
            1004: "US",
            1006: "CS",
            "100A": "OB",
            1010: "OB"
        },
        5600: {
            "0010": "OF",
            "0020": "OF"
        },
        6E3: {
            "0010": "US",
            "0011": "US",
            "0012": "US",
            "0015": "IS",
            "0022": "LO",
            "0040": "CS",
            "0045": "LO",
            "0050": "SS",
            "0051": "US",
            "0052": "US",
            "0060": "CS",
            "0061": "SH",
            "0062": "SH",
            "0063": "CS",
            "0066": "AT",
            "0068": "US",
            "0069": "US",
            "0100": "US",
            "0102": "US",
            "0110": "CS",
            "0200": "US",
            "0800": "CS",
            "0802": "US",
            "0803": "AT",
            "0804": "US",
            1001: "CS",
            1100: "US",
            1101: "US",
            1102: "US",
            1103: "US",
            1200: "US",
            1201: "US",
            1202: "US",
            1203: "US",
            1301: "IS",
            1302: "DS",
            1303: "DS",
            1500: "LO",
            3E3: "OB",
            4E3: "LT"
        },
        "7F00": {
            "0010": "OW",
            "0011": "US",
            "0020": "OW",
            "0030": "OW",
            "0040": "OW"
        },
        "7FE0": {
            "0010": "OW",
            "0020": "OW",
            "0030": "OW",
            "0040": "OW"
        },
        FFFA: {
            FFFA: "SQ"
        },
        FFFC: {
            FFFC: "OB"
        },
        FFFE: {
            E000: "UN",
            E00D: "UN",
            E0DD: "UN"
        }
    };

    function um(a, b) {
        this.a = a;
        this.b = b
    }

    function vm(a) {
        return a.a
    }

    function wm(a) {
        return a.b
    }

    function xm(a) {
        return a.a * a.b
    };

    function ym(a, b) {
        this.b = a;
        this.a = b
    };

    function zm(a) {
        this.a = a
    }
    v(zm, km);
    g = zm.prototype;
    g.Yb = function (a, b) {
        for (var c = 0, d = a + b; d > a; d--) c = 256 * c + this.a[d - 1];
        return c
    };
    g.ud = function (a, b) {
        return a >> (b << 3) & 255
    };
    g.wd = function (a, b) {
        return a + 256 * b
    };
    g.rf = function (a, b) {
        var c = this.a;
        return new Uint16Array(c.buffer, c.byteOffset + a, b / 2)
    };
    g.le = function (a) {
        return new Uint8Array(a.buffer, a.byteOffset, 2 * a.length)
    };
    g.me = function (a) {
        return new Uint16Array(a.buffer, a.byteOffset, a.length / 2)
    };

    function Am(a, b, c) {
        this.c = a;
        this.b = b;
        this.a = c
    };
    ta("box.dicom.core.Tag", {
        AdditionalPatientHistory: "001021B0",
        BitsAllocated: "00280100",
        BitsStored: "00280101",
        BluePaletteColorLookupTableData: "00281203",
        BluePaletteColorLookupTableDescriptor: "00281103",
        BodyPartExamined: "00180015",
        Columns: "00280011",
        CompensatorPixelSpacing: "300A00E9",
        GreenPaletteColorLookupTableData: "00281202",
        GreenPaletteColorLookupTableDescriptor: "00281102",
        FrameOfReferenceUID: "00200052",
        HighBit: "00280102",
        ImageOrientationPatient: "00200037",
        ImagePlanePixelSpacing: "30020011",
        ImagePositionPatient: "00200032",
        ImagerPixelSpacing: "00181164",
        InstanceNumber: "00200013",
        InstitutionName: "00080080",
        Item: "FFFEE000",
        ItemDelimitationItem: "FFFEE00D",
        ModalitiesInStudy: "00080061",
        Modality: "00080060",
        NumberOfFrames: "00280008",
        OverlayColumns: "60000011",
        OverlayData: "60003000",
        OverlayRows: "60000010",
        PatientAge: "00101010",
        PatientBirthDate: "00100030",
        PatientName: "00100010",
        PatientID: "00100020",
        PatientSex: "00100040",
        PhotometricInterpretation: "00280004",
        PixelData: "7FE00010",
        PixelRepresentation: "00280103",
        PixelSpacing: "00280030",
        PresentationPixelSpacing: "00700101",
        PrinterPixelSpacing: "20100376",
        ProtocolName: "00181030",
        RedPaletteColorLookupTableData: "00281201",
        RedPaletteColorLookupTableDescriptor: "00281101",
        ReferringPhysicianName: "00080090",
        RescaleIntercept: "00281052",
        RescaleSlope: "00281053",
        Rows: "00280010",
        SequenceDelimitationItem: "FFFEE0DD",
        SeriesDescription: "0008103E",
        SeriesInstanceUID: "0020000E",
        SeriesNumber: "00200011",
        SOPInstanceUID: "00080018",
        SpecificCharacterSet: "00080005",
        StudyDate: "00080020",
        StudyDescription: "00081030",
        StudyInstanceUID: "0020000D",
        TransferSyntaxUID: "00020010",
        WindowCenter: "00281050",
        WindowCenterWidthExplanation: "00281055",
        WindowWidth: "00281051"
    });

    function Bm(a, b) {
        var c = {};
        if (!a) return c;
        for (var d = bb(a), e = 0; e < d.length; e++) {
            var f = d[e],
                h = b[f];
            h ? c[h] = a[f] : c[f] = a[f]
        }
        return c
    }
    var Cm = {
            StudyInstanceUID: "0020000D",
            PatientName: "00100010",
            Modality: "00080060",
            InstitutionName: "00080080",
            StudyDescription: "00081030",
            StudyDate: "00080020",
            SeriesInstanceUID: "0020000E",
            SeriesNumber: "00200011",
            SeriesDescription: "0008103E",
            SOPInstanceUID: "00080018",
            InstanceNumber: "00200013",
            Columns: "00280011",
            Rows: "00280010",
            FrameOfReferenceUID: "00200052",
            PixelSpacing: "00280030",
            ImageOrientationPatient: "00200037",
            ImagePositionPatient: "00200032"
        },
        Dm = hb(Cm);

    function Em(a) {
        K.call(this);
        this.a = a;
        this.c = {};
        this.b = {};
        this.ca = [];
        this.g = 0
    }
    v(Em, K);

    function Fm(a) {
        return a.T("0020000E")
    }
    Em.prototype.T = function (a) {
        return cb(this.b, a) ? w(this.b, a) : this.a.T(a)
    };
    Em.prototype.ia = function (a, b) {
        return cb(this.b, a) ? parseInt(this.T(a), 10) : this.a.ia(a, b)
    };

    function Gm(a, b) {
        var c = {},
            d;
        for (d in a) c[d] = a[d];
        c.ca = [a.ca[b]];
        return c
    }

    function Hm(a, b) {
        return a.c[b] || a.a.g[b]
    }

    function Im(a) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
            for (var d = c, e = a[c], f = e.c, h = Bm(e.b, Dm), e = e.ca, k = Array(e.length), l = 0; l < e.length; l++) {
                var p = l,
                    m = e[l],
                    r = {};
                r["00080018"] = Jm(m);
                r["00200013"] = Km(m);
                r["00200052"] = m.T("00200052");
                var t = Lm(m);
                t && (r["00280011"] = t.a, r["00280010"] = t.b);
                (t = Mm(m)) && (r["00280030"] = [t.b, t.a]);
                var x = m,
                    t = Nm(x),
                    x = Om(x);
                if (t && x) {
                    for (var y = Array(6), E = 0; 3 > E; E++) y[E] = R(t, E, 0), y[E + 3] = R(x, E, 0);
                    t = y
                } else t = null;
                t && (r["00200037"] = t);
                if (t = Pm(m)) {
                    x = Array(t.c * t.b);
                    for (E = y = 0; E < t.c; E++)
                        for (var ca =
                                0; ca < t.b; ca++) x[y++] = t.a[E][ca];
                    r["00200032"] = x
                }
                k[p] = {
                    meta: m.g,
                    dicomMetadata: Bm(r, Dm)
                }
            }
            b[d] = {
                meta: f,
                dicomMetadata: h,
                objects: k
            }
        }
        return b
    };
    var Qm = "001021B0 00280011 00080080 00080060 00101010 00100030 00100020 00100040 00181030 00280010 0008103E 00080020 00081030".split(" "),
        Rm = {
            "00280011": "Columns",
            "00080080": "Institution Name",
            "00080060": "Modality",
            "00101010": "Patient Age",
            "00100030": "Patient Birth Date",
            "001021B0": "History",
            "00100020": "Patient ID",
            "00100040": "Patient Sex",
            "00181030": "Protocol Name",
            "00280010": "Rows",
            "0008103E": "Series Description",
            "00080020": "Study Date",
            "00081030": "Study Description"
        };

    function S(a, b, c, d, e) {
        this.b = a;
        this.g = b;
        this.a = !!c;
        this.c = d || null;
        this.h = e || null
    }
    S.prototype.clone = function () {
        return new S(this.b, this.g, this.a, this.c, this.h)
    };

    function Sm(a, b) {
        a.b = b.b;
        a.g = b.g;
        a.a = b.a;
        a.c = b.c;
        a.h = b.h
    };

    function Tm(a, b, c, d) {
        this.a = a;
        this.h = b;
        this.g = c;
        this.c = Math.floor(Math.pow(2, d));
        this.b = Array(this.c)
    }
    Tm.prototype.Da = function () {
        return this.b
    };
    Tm.prototype.U = function (a) {
        return this.b[a]
    };

    function Um(a, b, c) {
        this.a = b || {};
        this.ea = c || null;
        this.b = null;
        a && Vm(this, a)
    }
    ta("box.dicom.core.DicomObjectData", Um);

    function Wm(a, b) {
        return a.a ? a.a.hasOwnProperty(b) : !1
    }
    Um.prototype.l = function (a) {
        return this.a ? this.a[a] : null
    };
    Um.prototype.T = function (a) {
        return Wm(this, a) ? this.a[a].U()[0] : null
    };
    Um.prototype.getString = Um.prototype.T;
    Um.prototype.ia = function (a, b) {
        if (!Wm(this, a)) return null;
        var c = b || 0;
        return parseInt(this.a[a].U()[c], 10)
    };
    Um.prototype.getInt = Um.prototype.ia;

    function Xm(a, b, c) {
        if (!Wm(a, b)) return null;
        c = c || 0;
        return parseFloat(a.a[b].U()[c])
    }

    function Ym(a) {
        return a.ea ? a.ea instanceof Uint16Array ? 2 * a.ea.length : a.ea instanceof Uint8Array ? a.ea.length : 0 : 0
    }

    function Zm(a, b) {
        a.a[b.a] = b;
        if ("00080005" === b.a) {
            var c = b.U();
            a.b = c && 0 !== c.length ? gm[c[0]] : null
        }
    }

    function $m(a, b) {
        var c = a.Yb(b, 2)
            .toString(16)
            .toUpperCase();
        return Gb("0", 4 - c.length) + c
    }

    function an(a, b, c, d) {
        var e;
        e = $m(b, c);
        var f = $m(b, c + 2);
        e = e + f;
        var h = e.substr(0, 4),
            k = e.substr(4, 4),
            f = "UN",
            l = 0,
            p = 0,
            m = 0;
        "FFFE" === h || d ? (tm[h] && tm[h][k] && (f = tm[h][k][0]), l = b.Yb(c + 4, 4), m = 4) : (f = mm(b, c + 4, 2), p = 2, "OB" === f || "OF" === f || "SQ" === f || "OW" === f || "UN" === f || "UT" === f ? (l = b.Yb(c + 4 + p + 2, 4), m = 6) : (l = b.Yb(c + 4 + p, 2), m = 2));
        4294967295 === l && (l = 0);
        d = 4 + p + m + l;
        c = c + 4 + p + m;
        p = null;
        "US" === f || "SS" === f || "XS" === f ? p = lm(b, c, 2, l / 2) : "UL" === f ? p = lm(b, c, 4, l / 4) : "OX" === f || "OW" === f ? p = b.rf(c, l) : "OB" === f || "UN" === f ? p = b.a.subarray(c, c + l) : (p = mm(b,
            c, l, a.b), p = p.split("\\"));
        return new hm(e, 0, 0, p, 0, d)
    }

    function Vm(a, b, c) {
        var d = !1,
            e = "1.2.840.10008.1.2",
            f = new zm(b),
            h = new zm(b),
            k = 128;
        if ("DICM" !== mm(f, k, 4)) throw Error("Not a DICOM file");
        for (var k = k + 4, l = an(a, f, k, !1), p = parseInt(l.U(), 10), k = k + l.b, p = k + p; k < p;) l = an(a, f, k, !1), "00020010" === l.a && (e = l.U()[0], e = e.replace(/[\u200B-\u200D\uFEFF]/g, ""), "1.2.840.10008.1.2" === e ? d = !0 : "1.2.840.10008.1.2.2" === e && (h = new nm(b))), Zm(a, l), k += l.b;
        f = h;
        b = b.length;
        for (var l = !1, k = 0, m = !1; p < b;) {
            var r = an(a, f, p, d);
            if (q(c) && c === r.a && 0 === k) break;
            "FFFEE000" === r.a ? (k++, m = !1) : "FFFEE00D" ===
                r.a ? (k--, m = !0) : "FFFEE0DD" === r.a ? m || k-- : m = !1;
            if (l)
                if ("FFFEE000" === r.a) {
                    if (0 !== r.U()
                        .length) {
                        var t = a,
                            x;
                        x = a.ea;
                        var y = r.U();
                        if (x) {
                            if (y) {
                                var E = x.length + y.length,
                                    ca = null;
                                y instanceof Uint8Array ? ca = new Uint8Array(E) : ca = new Uint16Array(E);
                                ca.set(x, 0);
                                ca.set(y, x.length);
                                x = ca
                            }
                        } else x = y;
                        t.ea = x
                    }
                } else if ("FFFEE0DD" === r.a) l = !1;
            else throw Error("Unexpected tag in encapsulated pixel data: " + r.a);
            "7FE00010" === r.a ? 0 !== r.U()
                .length ? a.ea = r.U() : l = !0 : 0 === k && Zm(a, r);
            p += r.b
        }
        if ("7FE00010" !== c) {
            c = e;
            "1.2.840.10008.1.2.1.99" ===
            c && bn("Deflated Explicit VR", c);
            (c.match(/1.2.840.10008.1.2.4.5/) || c.match(/1.2.840.10008.1.2.4.6/) || c.match(/1.2.840.10008.1.2.4.7/) || c.match(/1.2.840.10008.1.2.4.8/)) && bn("JPEG", c);
            c.match(/1.2.840.10008.1.2.4.9/) && bn("JPEG 2000", c);
            "1.2.840.10008.1.2.4.100" === c && bn("MPEG2", c);
            "1.2.840.10008.1.2.4.5" === c && bn("RLE", c);
            c = a.ia("00280100");
            a.ea instanceof Uint16Array && 8 >= c ? a.ea = h.le(a.ea) : a.ea instanceof Uint8Array && 8 < c && (a.ea = h.me(a.ea));
            if (Wm(a, "60000010") && Wm(a, "60000011") && Wm(a, "60003000"))
                for (a.ia("00280010"),
                    h = a.ia("00280011"), c = a.ia("60000010"), e = a.ia("60000011"), f = a.l("60003000")
                    .U(), b = f instanceof Uint8Array ? 8 : 16, d = (1 << a.ia("00280102")) - 1, k = l = 0; k < c; k++)
                    for (p = 0; p < e; p++) f[Math.floor(l / b)] >>> l % b & 1 && (a.ea[k * h + p] = d), l++;
            if (Wm(a, "00280103") && 0 !== a.ia("00280103"))
                for (h = 2 << (a.ia("00280101") || 12) - 2, c = Xm(a, "00281053") || 1, c = [(Xm(a, "00281052") || 0) - h * c], Zm(a, new hm("00281052", 0, 0, c, 0, 0)), c = 0; c < a.ea.length; c++) a.ea[c] = a.ea[c] >= h ? a.ea[c] - h : a.ea[c] + h
        }
    }

    function cn(a) {
        var b = !1;
        if (a = a.T("00280004"))
            if (a = xb(a), "RGB" === a || "PALETTE COLOR" === a) b = !0;
        return b
    }

    function dn(a) {
        var b = a.T("00280004");
        return b && "PALETTE COLOR" === xb(b) ? new Am(en(a.l("00281101"), a.l("00281201")), en(a.l("00281102"), a.l("00281202")), en(a.l("00281103"), a.l("00281203"))) : null
    }

    function en(a, b) {
        a.U();
        a.U();
        for (var c = a.U()[2] - 8, d = [], e = 0; e < b.U()
            .length; e++) {
            var f = b.U()[e] >>> c;
            d.push(f)
        }
        return d
    }

    function bn(a, b) {
        throw Error("Unsupported DICOM transfer syntax (" + a + "): " + b);
    };

    function fn(a) {
        this.h = a;
        this.g = {};
        this.b = this.a = null;
        this.c = 0;
        this.clear()
    }
    fn.prototype.clear = function () {
        gn(this, 0);
        this.g = {};
        this.b = this.a = null;
        this.c = 0
    };
    fn.prototype.size = function () {
        return this.c
    };

    function hn(a, b, c) {
        if (null == b) throw Error("key");
        if (null == c) throw Error("value");
        var d = new jn(b, c);
        a.g.hasOwnProperty(b) || (a.c += Ym(c));
        gn(a, a.h);
        a.g[b] = d;
        kn(a, d)
    }

    function gn(a, b) {
        for (; a.c > b && a.b;) {
            var c = a.b,
                d = c.value;
            a.c -= Ym(d);
            delete a.g[a.b.key];
            ln(a, a.b);
            d.a = null;
            delete d.a;
            d.ea = null;
            delete d.ea;
            c.value = null;
            delete c.value;
            c.next = null;
            delete c.next;
            c.a = null;
            delete c.a
        }
    }

    function kn(a, b) {
        null == a.a ? (a.a = b, a.b = b) : (a.a.a = b, b.next = a.a, a.a = b)
    }

    function ln(a, b) {
        a.a === b && a.b === b ? (a.a = null, a.b = null) : a.a === b ? (a.a = a.a.next, a.a.a = null) : a.b === b ? (a.b = a.b.a, a.b.next = null) : (b.a.next = b.next, b.next.a = b.a);
        b.next = null;
        b.a = null
    }

    function jn(a, b) {
        this.key = a;
        this.value = b;
        this.a = this.next = null
    };

    function mn(a) {
        this.a = a || {
            CT: [new S(40, 350, !1, "Abdomen/Pelvis", "CT"), new S(480, 2500, !1, "Bone", "CT"), new S(40, 80, !1, "Brain", "CT"), new S(40, 4E3, !1, "Chest", "CT"), new S(50, 700, !1, "Kidney", "CT"), new S(50, 120, !1, "Liver", "CT"), new S(-500, 1500, !1, "Lung", "CT"), new S(110, 880, !1, "Myelogram", "CT"), new S(20, 350, !1, "Neck", "CT"), new S(100, 2E3, !1, "Sinus", "CT"), new S(40, 50, !1, "Stroke", "CT"), new S(90, 350, !1, "Subdural", "CT")],
            MR: [new S(800, 1200, !1, "Brain", "MR"), new S(225, 480, !1, "T1", "MR"), new S(300, 350, !1, "T2", "MR"),
new S(170, 800, !1, "Flair", "MR"), new S(950, 1900, !1, "PD", "MR")]
        }
    }

    function nn(a, b) {
        var c = b.h || "OT",
            d = a.a[c];
        d || (d = [], a.a[c] = d);
        d.push(b)
    }

    function on(a) {
        for (var b = {}, c = bb(a.a), d = 0; d < c.length; d++) {
            var e = c[d];
            b[e] = [];
            for (var f = a.a[e], h = 0; h < f.length; h++) {
                var k = f[h];
                b[e].push({
                    center: k.b,
                    width: k.g,
                    inverted: k.a,
                    name: k.c,
                    modality: k.h
                })
            }
        }
        return b
    };

    function pn(a, b, c, d, e, f) {
        this.key = a;
        this.c = b;
        this.a = c;
        this.b = d;
        this.length = e;
        this.g = f
    };

    function qn(a, b, c) {
        b = c || 8;
        this.g = new fn(1048576 * (a || 100));
        this.b = {};
        this.c = new pm(5);
        this.j = [];
        this.a = 0;
        this.h = !1;
        this.m = [];
        this.w = b;
        if (this.h)
            for (a = 0; a < this.w; a++) b = new Worker(rn), J(b, "message", this.Mh, !1, this), c = new ArrayBuffer(1), b.postMessage(c, [c]), c.byteLength && (console.log("Transferables are not supported in browser."), this.h = !1), this.m.push(b);
        console.log("WebWorker: " + this.h)
    }
    var sn = null;

    function tn(a) {
        var b = sn;
        !b && a && (sn = b = new qn);
        return b
    }
    var un = document.getElementsByTagName("script"),
        rn = un[un.length - 1].src.replace(".min.js", "-worker.min.js");

    function vn(a, b, c, d, e, f, h) {
        e = q(e) ? e : 2;
        var k;
        k = a.g;
        if (null == b) throw Error("key");
        var l = k.g[b],
            p = null;
        null != l && (p = l.value, ln(k, l), kn(k, l));
        if (k = p) e = new om(b, e), J(e, "dicomload", c, !1, d), a = new im("dicomload"), jm(a)
            .c = b, jm(a)
            .a = k, L(e, a);
        else {
            k = q(f) ? f : !1;
            f = w(a.b, b);
            if (!f) f = new om(b, e, k), a.b[b] = f, qm(a.c, f);
            else if (e < f.Xb) {
                f.Ye = k;
                b = a.c;
                k = f;
                rm(b, e);
                for (var l = b.a[k.Xb], p = !1, m = 0; m < l.length; m++)
                    if (l[m].a === k.a) {
                        l.splice(m, 1);
                        p = !0;
                        break
                    }
                p && (k.Xb = e, qm(b, k))
            }
            e = f;
            h && J(e, "dicomprogress", h, !1, d);
            J(e, "dicomload", c, !1,
                d);
            wn(a)
        }
    }

    function wn(a) {
        if (!(8 <= a.a)) {
            var b;
            a: {
                b = a.c;
                for (var c = 0; c < b.b; c++) {
                    var d = b.a[c];
                    if (0 < d.length) {
                        b = d.shift();
                        break a
                    }
                }
                b = null
            }
            if (null != b) {
                a.a++;
                c = null;
                0 < a.j.length ? c = a.j.shift() : (c = new sm, J(c, "success", a.Qh, !1, a), J(c, ["timeout", "error", "abort"], a.Oh, !1, a), J(c, "complete", a.Nh, !1, a), J(c, "ready", a.Ph, !1, a));
                c.h = b;
                try {
                    Sh(c, b.a)
                } catch (e) {
                    b.Xb = 0, qm(a.c, b), c.h = null, a.a--, wn(a)
                }
            }
        }
    }
    g = qn.prototype;
    g.Qh = function (a) {
        var b = a.target;
        a = b.h;
        a.Ye ? xn(this, a, null) : (b = di(b), yn(this, a, b))
    };

    function yn(a, b, c) {
        if (c) {
            var d = new FileReader;
            d.onerror = function (a) {
                console.log("reader error: " + a.target.error.code)
            };
            d.onload = function (c) {
                var d = c.target.result;
                c = b.a;
                a.h ? (c = new pn(c, null, d, 0, 0, !1), c = {
                    key: c.key,
                    elements: c.c,
                    buffer: c.a,
                    byteOffset: c.b,
                    length: c.length,
                    isuint8: c.g
                }, d = a.m.shift(), d.postMessage(c, [c.buffer]), a.m.push(d)) : (d = new Uint8Array(d), d = new Um(d, null, null), hn(a.g, c, d), xn(a, b, d))
            };
            d.readAsArrayBuffer(c)
        } else console.log("FATAL: response blob is null")
    }
    g.Oh = function (a) {
        var b = a.target;
        console.log("ERROR: error in XHR");
        console.log("e.type = " + a.type);
        console.log("xhr.status = " + ai(b))
    };
    g.Nh = function () {};
    g.Ph = function (a) {
        a = a.target;
        a.h = null;
        this.j.push(a);
        this.a--;
        wn(this)
    };
    g.Mh = function (a) {
        var b;
        if (b = (a = a.g.data) ? new pn(a.key, a.elements, a.buffer, a.byteOffset, a.length, a.isuint8) : null)
            if (a = b.key) {
                var c = null;
                b.g ? c = new Uint8Array(b.a, b.b, b.length) : c = new Uint16Array(b.a, b.b, b.length);
                b = new Um(void 0, b.c, c);
                hn(this.g, a, b);
                xn(this, w(this.b, a), b)
            } else console.log("DicomWorkerMessage did not have a key");
        else console.log("DicomWorkerMessage could not be parsed")
    };

    function xn(a, b, c) {
        fb(a.b, b.a);
        a = new im("dicomload");
        jm(a)
            .c = b.a;
        jm(a)
            .a = c;
        L(b, a)
    };

    function zn(a, b, c, d) {
        this.c = a;
        this.g = b;
        this.b = c;
        this.a = d
    }
    zn.prototype.v = function () {
        return this.c
    };
    zn.prototype.o = function () {
        return this.g
    };
    zn.prototype.clone = function () {
        return new zn(this.c, this.g, this.b, this.a)
    };

    function An(a, b) {
        this.a = a;
        this.b = b
    }

    function Bn(a) {
        return new An(Cn(a.start), Cn(a.end))
    }

    function Dn(a, b, c) {
        var d = a.a.v(),
            e = a.a.o(),
            f = a.b.v(),
            h = a.b.o();
        if (d === f && e === h) return En(a.a, b, c);
        var k = f - d,
            l = h - e,
            p = ((b - d) * k + (c - e) * l) / (k * k + l * l),
            m = 0;
        a = 0;
        0 > p ? (m = d, a = e) : 1 < p ? (m = f, a = h) : (m = d + p * k, a = e + p * l);
        b -= m;
        c -= a;
        return Math.sqrt(b * b + c * c)
    }
    An.prototype.clone = function () {
        return new An(this.a.clone(), this.b.clone())
    };

    function Fn(a) {
        return {
            start: Gn(a.a),
            end: Gn(a.b)
        }
    };

    function Hn(a, b) {
        this.a = a;
        this.b = b
    }

    function Cn(a) {
        return new Hn(a.x, a.y)
    }
    Hn.prototype.v = function () {
        return this.a
    };
    Hn.prototype.o = function () {
        return this.b
    };

    function In(a, b, c) {
        a.a = b;
        a.b = c
    }
    Hn.prototype.toString = function () {
        return "(" + this.v() + ", " + this.o() + ")"
    };
    Hn.prototype.clone = function () {
        return new Hn(this.a, this.b)
    };

    function Gn(a) {
        return {
            x: a.a,
            y: a.b
        }
    }

    function En(a, b, c) {
        b -= a.a;
        a = c - a.b;
        return Math.sqrt(b * b + a * a)
    };

    function Jn(a, b, c, d) {
        Ol.call(this, a);
        this.c = b;
        this.a = c;
        this.b = d;
        this.B = new An(b, c);
        this.C = new An(c, d);
        this.O = this.I = this.m = 0
    }
    v(Jn, Ol);
    g = Jn.prototype;
    g.clone = function () {
        return new Jn(this, this.c.clone(), this.a.clone(), this.b.clone())
    };
    g.zb = function () {
        return {
            annotationType: "angle",
            fontSize: this.j,
            color: this.h,
            view: Nl(this.g),
            start: Gn(this.c),
            mid: Gn(this.a),
            end: Gn(this.b)
        }
    };
    g.Aa = function (a, b, c) {
        Jn.A.Aa.call(this, a, b, c);
        c = Kn(b, this.c.v(), this.c.o());
        var d = Kn(b, this.a.v(), this.a.o());
        b = Kn(b, this.b.v(), this.b.o());
        if (c && d && b) {
            a.lineWidth = 2;
            Ul(a, [new An(c, d), new An(d, b)]);
            var e = (c.v() + b.v()) / 2,
                f = (c.o() + b.o()) / 2,
                h = Math.abs(180 * (Math.atan2(this.c.o() - this.a.o(), this.c.v() - this.a.v()) - Math.atan2(this.b.o() - this.a.o(), this.b.v() - this.a.v())) / Math.PI);
            180 < h && (h = 360 - h);
            h = h.toFixed(1) + "deg";
            a.textBaseline = "middle";
            a.textAlign = "center";
            T(a, h, e + 10, f);
            Wl(a, c.v(), c.o());
            Wl(a, d.v(),
                d.o());
            Wl(a, b.v(), b.o())
        }
    };
    g.vb = function (a, b) {
        return 5 > Dn(this.B, a, b) || 5 > Dn(this.C, a, b)
    };
    g.yb = function (a) {
        5 > En(this.c, a.v(), a.o()) ? this.m = 1 : 5 > En(this.a, a.v(), a.o()) ? this.m = 2 : 5 > En(this.b, a.v(), a.o()) ? this.m = 3 : (this.m = 4, this.I = a.v(), this.O = a.o())
    };
    g.Bb = function (a) {
        if (1 == this.m) this.c.a = a.v(), this.c.b = a.o();
        else if (2 == this.m) this.a.a = a.v(), this.a.b = a.o();
        else if (3 == this.m) this.b.a = a.v(), this.b.b = a.o();
        else if (4 == this.m) {
            var b = a.v() - this.I,
                c = a.o() - this.O;
            this.c.a = this.c.v() + b;
            this.c.b = this.c.o() + c;
            this.a.a = this.a.v() + b;
            this.a.b = this.a.o() + c;
            this.b.a = this.b.v() + b;
            this.b.b = this.b.o() + c;
            this.I = a.v();
            this.O = a.o()
        }
    };

    function Ln(a, b) {
        Ol.call(this, a);
        this.a = b;
        this.I = this.O = this.m = this.c = this.b = 0
    }
    v(Ln, Ol);
    g = Ln.prototype;
    g.clone = function () {
        return new Ln(this, this.a.clone())
    };
    g.zb = function () {
        return {
            annotationType: "arrow",
            fontSize: this.j,
            color: this.h,
            view: Nl(this.g),
            line: Fn(this.a)
        }
    };
    g.Aa = function (a, b, c) {
        Ln.A.Aa.call(this, a, b, c);
        var d = this.a;
        c = Kn(b, d.a.v(), d.a.o());
        b = Kn(b, d.b.v(), d.b.o());
        if (c && b) {
            a.lineWidth = 2;
            var d = c.v() - b.v(),
                e = c.o() - b.o(),
                f = Math.sqrt(d * d + e * e),
                d = 20 * d / f,
                e = 20 * e / f,
                f = -e;
            Ul(a, [new An(b, c), new An(b, new Hn(b.v() + d + f, b.o() + e + d)), new An(b, new Hn(b.v() + d - f, b.o() + e - d))]);
            Wl(a, c.v(), c.o());
            Wl(a, b.v(), b.o())
        }
    };
    g.vb = function (a, b) {
        return 5 > Dn(this.a, a, b)
    };
    g.yb = function (a) {
        var b = this.a;
        5 > En(b.a, a.v(), a.o()) ? (this.b = 1, this.c = b.a.v() - a.v(), this.m = b.a.o() - a.o()) : 5 > En(b.b, a.v(), a.o()) ? (this.b = 2, this.c = b.b.v() - a.v(), this.m = b.b.o() - a.o()) : (this.b = 3, this.c = b.a.v() - a.v(), this.m = b.a.o() - a.o(), this.O = b.b.v() - b.a.v(), this.I = b.b.o() - b.a.o())
    };
    g.Bb = function (a) {
        var b = this.a;
        1 == this.b ? (b.a.a = a.v() + this.c, b.a.b = a.o() + this.m) : 2 == this.b ? (b.b.a = a.v() + this.c, b.b.b = a.o() + this.m) : 3 == this.b && (b.a.a = a.v() + this.c, b.a.b = a.o() + this.m, b.b.a = b.a.v() + this.O, b.b.b = b.a.o() + this.I)
    };

    function Mn(a, b) {
        Ol.call(this, a);
        this.a = b;
        this.m = this.c = this.b = 0
    }
    v(Mn, Ol);

    function Nn(a, b, c, d) {
        switch (b) {
        case 1:
        case 2:
            var e = a.a[2].a.v(),
                f = a.a[2].a.o();
            b = e - c;
            var h = f - d;
            In(a.a[0].a, e - b, f - h);
            In(a.a[0].b, e + b, f + h);
            break;
        case 3:
        case 4:
            e = a.a[2].b.v();
            f = a.a[2].b.o();
            b = e - c;
            h = f - d;
            In(a.a[1].a, e - b, f - h);
            In(a.a[1].b, e + b, f + h);
            break;
        case 5:
            e = a.a[0].a;
            f = a.a[0].b;
            a = a.a[2].a;
            b = a.v() - e.v();
            h = a.o() - e.o();
            In(e, c - b, d - h);
            In(f, c + b, d + h);
            In(a, c, d);
            break;
        case 6:
            e = a.a[1].a;
            f = a.a[1].b;
            a = a.a[2].b;
            b = a.v() - e.v();
            h = a.o() - e.o();
            In(e, c - b, d - h);
            In(f, c + b, d + h);
            In(a, c, d);
            break;
        case 7:
            b = c - a.c;
            h = d - a.m;
            for (e = 0; 3 >
                e; e++) f = a.a[e], In(f.a, f.a.v() + b, f.a.o() + h), In(f.b, f.b.v() + b, f.b.o() + h);
            a.c = c;
            a.m = d
        }
    }
    g = Mn.prototype;
    g.clone = function () {
        for (var a = Array(3), b = 0; 3 > b; b++) a[b] = this.a[b].clone();
        return new Mn(this, a)
    };
    g.zb = function () {
        for (var a = Array(3), b = 0; 3 > b; b++) a[b] = Fn(this.a[b]);
        return {
            annotationType: "cobbAngle",
            fontSize: this.j,
            color: this.h,
            view: Nl(this.g),
            lines: a
        }
    };
    g.Aa = function (a, b, c) {
        Mn.A.Aa.call(this, a, b, c);
        c = Array(6);
        for (var d = Array(3), e = 0; 3 > e; e++) {
            var f = this.a[e];
            c[2 * e] = Kn(b, f.a.v(), f.a.o());
            if (!c[2 * e]) return;
            c[2 * e + 1] = Kn(b, f.b.v(), f.b.o());
            if (!c[2 * e + 1]) return;
            d[e] = new An(c[2 * e], c[2 * e + 1])
        }
        a.lineWidth = 2;
        Ul(a, d);
        for (e = 0; 6 > e; e++) Wl(a, c[e].v(), c[e].o());
        b = (c[4].v() + c[5].v()) / 2;
        c = (c[4].o() + c[5].o()) / 2;
        for (d = Math.abs(180 * (Math.atan2(this.a[0].b.o() - this.a[0].a.o(), this.a[0].b.v() - this.a[0].a.v()) - Math.atan2(this.a[1].b.o() - this.a[1].a.o(), this.a[1].b.v() - this.a[1].a.v())) /
                Math.PI); 180 <= d;) d -= 180;
        90 <= d && (d = Math.abs(180 - d));
        d = d.toFixed(1) + "deg";
        a.textBaseline = "middle";
        a.textAlign = "left";
        T(a, d, b + 10, c)
    };
    g.vb = function (a, b) {
        for (var c = 0; 3 > c; c++)
            if (5 > Dn(this.a[c], a, b)) return !0;
        return !1
    };
    g.yb = function (a) {
        5 > En(this.a[0].a, a.v(), a.o()) ? this.b = 1 : 5 > En(this.a[0].b, a.v(), a.o()) ? this.b = 2 : 5 > En(this.a[1].a, a.v(), a.o()) ? this.b = 3 : 5 > En(this.a[1].b, a.v(), a.o()) ? this.b = 4 : 5 > En(this.a[2].a, a.v(), a.o()) ? this.b = 5 : 5 > En(this.a[2].b, a.v(), a.o()) ? this.b = 6 : (this.b = 7, this.c = a.v(), this.m = a.o())
    };
    g.Bb = function (a) {
        Nn(this, this.b, a.v(), a.o())
    };

    function On(a, b) {
        Ol.call(this, a);
        this.a = b;
        this.O = Pn;
        this.C = this.B = this.m = this.I = this.c = this.b = 0
    }
    v(On, Ol);
    var Pn = 0;
    g = On.prototype;
    g.clone = function () {
        return new On(this, this.a.clone())
    };
    g.zb = function () {
        var a = this.a;
        return {
            annotationType: "ellipse",
            fontSize: this.j,
            color: this.h,
            view: Nl(this.g),
            ellipse: {
                x: a.c,
                y: a.g,
                width: a.b,
                height: a.a
            }
        }
    };
    g.Aa = function (a, b, c) {
        On.A.Aa.call(this, a, b, c);
        var d = this.a,
            e = Kn(b, d.v(), d.o()),
            f = Kn(b, d.v() + d.b, d.o() + d.a);
        if (e && f) {
            var h = Mm(c);
            if (h) {
                a.lineWidth = 2;
                var k = Math.min(e.v(), f.v());
                b = Math.min(e.o(), f.o());
                var l = Math.abs(e.v() - f.v()),
                    e = Math.abs(e.o() - f.o()),
                    f = a.strokeStyle;
                a.strokeStyle = "black";
                Tl(a, k + 1, b + 1, l, e);
                a.strokeStyle = f;
                Tl(a, k, b, l, e);
                Wl(a, k + .5 * l, b);
                Wl(a, k + .5 * l, b + e);
                Wl(a, k, b + .5 * e);
                Wl(a, k + l, b + .5 * e);
                h = .5 * Math.PI * Math.abs(d.b) * h.b * .5 * Math.abs(d.a) * h.a;
                var p = d.v(),
                    m = d.o(),
                    r = d.b,
                    t = d.a;
                if (Qn(c) && 0 !== r &&
                    0 !== t) {
                    for (var p = Math.round(p), m = Math.round(m), d = Math.round(.5 * Math.abs(r)), f = Math.round(.5 * Math.abs(t)), p = Math.round(p + .5 * r), m = Math.round(m + .5 * t), r = f * f, t = d * d, x = r * t, y = vm(Lm(c)), E = wm(Lm(c)), ca = 0, qb = 0, sa = -f; sa <= f; sa++) {
                        var Bk = m - sa;
                        if (!(0 > Bk || Bk >= E)) {
                            for (var tc = d; tc * tc * r + sa * sa * t > x;) tc--;
                            for (var qt = Math.min(y - 1, p + tc), tc = Math.max(0, p - tc); tc <= qt; tc++) {
                                var rt = Rn(c, Bk * y + tc),
                                    ca = ca + rt;
                                qb++
                            }
                        }
                    }
                    c = 0 < qb ? ca / qb : 0
                } else c = Number.NaN;
                k += .5 * l;
                b += e;
                l = "Area" + h.toFixed(0) + "mm2";
                c = "Avg" + c.toFixed(2);
                a.textBaseline = "top";
                a.textAlign = "center";
                T(a, l, k, b + 10);
                T(a, c, k, b + 30)
            }
        }
    };
    g.vb = function (a, b) {
        var c = this.a,
            d, e;
        d = c.c + .5 * c.b;
        e = c.g + .5 * c.a;
        var f = Math.abs(c.c - d),
            h = Math.abs(c.g - e);
        d = Math.abs(a - d);
        e = Math.abs(b - e);
        return 5 > .25 * Math.abs(Math.sqrt(d * d / (f * f) + e * e / (h * h)) - 1) * (Math.abs(c.b) + Math.abs(c.a))
    };
    g.yb = function (a) {
        var b = this.a,
            c = b.v(),
            d = b.o(),
            e = b.b,
            b = b.a;
        this.b = c;
        this.c = d;
        this.I = e;
        this.m = b;
        this.B = a.v() - c;
        this.C = a.o() - d;
        this.O = 5 > En(a, c + .5 * e, d) ? 1 : 5 > En(a, c + e, d + .5 * b) ? 2 : 5 > En(a, c + .5 * e, d + b) ? 3 : 5 > En(a, c, d + .5 * b) ? 4 : 5
    };
    g.Bb = function (a) {
        var b = this.a;
        switch (this.O) {
        case 1:
            a = this.c - a.o();
            b.g = this.c - a;
            b.a = this.m + 2 * a;
            break;
        case 2:
            a = this.b + this.I - a.v();
            b.c = this.b + a;
            b.b = this.I - 2 * a;
            break;
        case 3:
            a = this.c + this.m - a.o();
            b.g = this.c + a;
            b.a = this.m - 2 * a;
            break;
        case 4:
            a = this.b - a.v();
            b.c = this.b - a;
            b.b = this.I + 2 * a;
            break;
        case 5:
            b.c = a.v() - this.B, b.g = a.o() - this.C
        }
    };

    function Sn(a, b) {
        Ol.call(this, a);
        this.a = b || [];
        this.b = b ? b.length : 0;
        this.c = 0
    }
    v(Sn, Ol);

    function Tn(a, b) {
        0 > b && (b = 0);
        b > a.a.length && (b = a.a.length);
        a.b = b
    }
    g = Sn.prototype;
    g.clone = function () {
        return new Sn(this, this.a)
    };
    g.zb = function () {
        for (var a = Math.min(this.a.length, this.b), b = Array(a), c = 0; c < a; c++) b[c] = Gn(this.a[c]);
        return {
            annotationType: "gonstead",
            view: Nl(this.g),
            points: b
        }
    };
    g.Aa = function (a, b, c) {
        var d = Mm(c),
            e = this.a,
            f = Math.min(e.length, this.b);
        c = Array(f);
        for (var h = 0; h < f; h++) c[h] = Kn(b, e[h].v(), e[h].o());
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.fillStyle = "#f00";
        a.strokeStyle = "#f00";
        var k = 0,
            l = 0,
            p = 0,
            m = 0,
            r = 0,
            t = h = 0,
            x = null;
        2 <= f && (a.beginPath(), a.moveTo(c[0].v(), c[0].o()), a.lineTo(c[1].v(), c[1].o()), a.stroke(), k = e[1].v() - e[0].v(), l = e[1].o() - e[0].o(), p = l / k, m = (c[1].o() - c[0].o()) / (c[1].v() - c[0].v()), r = 80, h = Math.round(r * m), t = (e[1].o() - e[0].o()) * d.a, x = 0 > t ? new Hn(c[0].v(), c[1].o()) :
            new Hn(c[1].v(), c[0].o()), a.beginPath(), a.moveTo(x.v() - 60, x.o()), a.lineTo(x.v() + 60, x.o()), a.stroke(), a.font = "bold 14pt sans-serif", T(a, Math.abs(t)
                .toFixed(0) + " MD", x.v(), x.o() - 10));
        3 <= f && (a.beginPath(), a.moveTo(c[2].v() - r, c[2].o() - h), a.lineTo(c[2].v() + r, c[2].o() + h), a.stroke());
        4 <= f && (a.beginPath(), a.moveTo(c[3].v() - r, c[3].o() - h), a.lineTo(c[3].v() + r, c[3].o() + h), a.stroke());
        5 <= f && (a.beginPath(), a.moveTo(c[4].v() - r, c[4].o() - h), a.lineTo(c[4].v() + r, c[4].o() + h), a.stroke());
        6 <= f && (a.beginPath(), a.moveTo(c[5].v() -
            r, c[5].o() - h), a.lineTo(c[5].v() + r, c[5].o() + h), a.stroke());
        for (h = 0; 5 >= h && h < f; h++) Wl(a, c[h].v(), c[h].o());
        a.fillStyle = "#0ff";
        a.strokeStyle = "#0ff";
        for (h = 6; 7 >= h && h < f; h++) Wl(a, c[h].v(), c[h].o());
        a.fillStyle = "#00f";
        a.strokeStyle = "#00f";
        var y = h = x = x = r = 0,
            E = null;
        10 <= f && (a.beginPath(), a.moveTo(c[8].v(), c[8].o()), a.lineTo(c[9].v(), c[9].o()), a.stroke(), r = (e[9].o() - e[8].o()) / (e[9].v() - e[8].v()), x = (c[9].o() - c[8].o()) / (c[9].v() - c[8].v()), h = 30, x = -Math.round(h * x), y = (e[9].o() - e[8].o()) * d.a, E = 0 > y ? new Hn(c[8].v(), c[9].o()) :
            new Hn(c[9].v(), c[8].o()), a.beginPath(), a.moveTo(E.v() - 60, E.o()), a.lineTo(E.v() + 60, E.o()), a.stroke(), a.font = "bold 12pt sans-serif", T(a, Math.abs(y)
                .toFixed(0) + " MD", E.v(), E.o() - 10));
        11 <= f && (a.beginPath(), a.moveTo(c[10].v() - x, c[10].o() - h), a.lineTo(c[10].v() + x, c[10].o() + h), a.stroke());
        12 <= f && (a.beginPath(), a.moveTo(c[11].v() - x, c[11].o() - h), a.lineTo(c[11].v() + x, c[11].o() + h), a.stroke());
        for (h = 8; 11 >= h && h < f; h++) Wl(a, c[h].v(), c[h].o());
        12 <= f && (a.font = "normal 10pt sans-serif", a.fillStyle = "#0f0", a.strokeStyle =
            "#0f0", f = Un(d, p, e[2], e[4]), T(a, f.toFixed(0), c[4].v() - 80, c[4].o() - 50), p = Un(d, p, e[3], e[5]), T(a, p.toFixed(0), c[5].v() + 80, c[5].o() - 50), a.fillStyle = "#ff0", a.strokeStyle = "#ff0", k = new Hn(e[7].v() + (e[6].o() - e[7].o()) / -k * l, e[6].o()), l = Kn(b, k.v(), k.o()), b = 40 / (-1 / m), a.beginPath(), a.moveTo(l.v() - b, l.o() - 40), a.lineTo(l.v() + b, l.o() + 40), a.stroke(), a.fillStyle = "#0f0", a.strokeStyle = "#0f0", m = e[6], b = (k.v() - m.v()) * d.b, m = (k.o() - m.o()) * d.a, b = Math.sqrt(b * b + m * m), k.v() < e[6].v() && (b = -b), T(a, Math.abs(b)
                .toFixed(0), .5 * (c[6].v() +
                    l.v()), c[6].o() - 10), m = Un(d, -1 / r, e[7], e[10]), T(a, m.toFixed(0), .5 * (c[7].v() + c[10].v()), .5 * (c[7].o() + c[10].o())), d = Un(d, -1 / r, e[7], e[11]), T(a, d.toFixed(0), .5 * (c[7].v() + c[11].v()), .5 * (c[7].o() + c[11].o())), e = Math.abs(m - d), k = r = null, m > d ? (r = "P" + e.toFixed(0) + "-L", k = new Hn(.5 * (c[7].v() + c[10].v()), .5 * (c[7].o() + c[10].o()) + 40)) : (r = "P" + e.toFixed(0) + "-R", k = new Hn(.5 * (c[7].v() + c[11].v()), .5 * (c[7].o() + c[11].o()) + 40)), a.font = "bold 14pt sans-serif", T(a, r, k.v(), k.o()), d = p - f, e = b, T(a, (0 > d ? "PI" : "AS") + " " + Math.abs(d)
                .toFixed(0) +
                " " + (0 > e ? "Ex" : "In") + " " + Math.abs(e)
                .toFixed(0), c[2].v() - 50, c[2].o() + 50), T(a, (0 > d ? "AS" : "PI") + " " + Math.abs(d)
                .toFixed(0) + " " + (0 > e ? "In" : "Ex") + " " + Math.abs(e)
                .toFixed(0), c[3].v() + 50, c[3].o() + 50), t -= .4 * (d + e), d = null, d = 0 > t ? new Hn(c[0].v(), c[1].o()) : new Hn(c[1].v(), c[0].o()), a.font = "bold 14pt sans-serif", T(a, Math.abs(t)
                .toFixed(0) + " AD", d.v(), d.o() - 40));
        a.fillStyle = "#0f0";
        a.strokeStyle = "#0f0";
        a.font = "normal 11pt sans-serif"
    };

    function Un(a, b, c, d) {
        var e = c.v() * a.b;
        c = c.o() * a.a;
        var f = d.v() * a.b;
        a = d.o() * a.a;
        return isFinite(b) ? 0 === b ? Math.abs(a - c) : Math.abs(a - b * f - (c - b * e)) / Math.sqrt(b * b + 1) : Math.abs(f - e)
    }
    g.vb = function (a, b) {
        for (var c = Math.min(this.a.length, this.b), d = 0; d < c; d++)
            if (10 > En(this.a[d], a, b)) return !0;
        return !1
    };
    g.yb = function (a) {
        for (var b = Math.min(this.a.length, this.b), c = 0, d = 10, e = 0; e < b; e++) {
            var f = En(this.a[e], a.v(), a.o());
            f < d && (c = e, d = f)
        }
        this.c = c
    };
    g.Bb = function (a) {
        a && (this.a[this.c] = a)
    };

    function Vn(a, b) {
        Ol.call(this, a);
        this.a = b;
        this.I = this.O = this.m = this.c = this.b = 0
    }
    v(Vn, Ol);
    g = Vn.prototype;
    g.clone = function () {
        return new Vn(this, this.a.clone())
    };
    g.zb = function () {
        return {
            annotationType: "line",
            fontSize: this.j,
            color: this.h,
            view: Nl(this.g),
            line: Fn(this.a)
        }
    };
    g.Aa = function (a, b, c) {
        Vn.A.Aa.call(this, a, b, c);
        var d = this.a,
            e = Kn(b, d.a.v(), d.a.o());
        b = Kn(b, d.b.v(), d.b.o());
        if (e && b) {
            a.lineWidth = 2;
            Ul(a, [new An(e, b)]);
            var f = Mm(c);
            f && (c = (d.b.v() - d.a.v()) * f.b, d = (d.b.o() - d.a.o()) * f.a, d = Math.sqrt(c * c + d * d), d = 10 >= d ? d.toFixed(1) : d.toFixed(0), a.textBaseline = "top", a.textAlign = "left", T(a, d + "mm", b.v() + 10, b.o() + 10));
            Wl(a, e.v(), e.o());
            Wl(a, b.v(), b.o())
        }
    };
    g.vb = function (a, b) {
        return 5 > Dn(this.a, a, b)
    };
    g.yb = function (a) {
        var b = this.a;
        5 > En(b.a, a.v(), a.o()) ? (this.b = 1, this.c = b.a.v() - a.v(), this.m = b.a.o() - a.o()) : 5 > En(b.b, a.v(), a.o()) ? (this.b = 2, this.c = b.b.v() - a.v(), this.m = b.b.o() - a.o()) : (this.b = 3, this.c = b.a.v() - a.v(), this.m = b.a.o() - a.o(), this.O = b.b.v() - b.a.v(), this.I = b.b.o() - b.a.o())
    };
    g.Bb = function (a) {
        var b = this.a;
        1 == this.b ? (b.a.a = a.v() + this.c, b.a.b = a.o() + this.m) : 2 == this.b ? (b.b.a = a.v() + this.c, b.b.b = a.o() + this.m) : 3 == this.b && (b.a.a = a.v() + this.c, b.a.b = a.o() + this.m, b.b.a = b.a.v() + this.O, b.b.b = b.a.o() + this.I)
    };

    function Wn(a, b, c) {
        this.c = a;
        this.b = b;
        this.a = [];
        for (var d = 0; d < a; d++) {
            this.a[d] = [];
            for (var e = 0; e < b; e++) this.a[d][e] = 0
        }
        if (c)
            for (c = 0; c < a && c < b; c++) this.a[c][c] = 1
    }
    g = Wn.prototype;
    g.rows = function () {
        return this.c
    };

    function R(a, b, c) {
        return a.a[b][c]
    }

    function U(a, b, c, d) {
        a.a[b][c] = d
    }
    g.v = function () {
        return R(this, 0, 0)
    };
    g.o = function () {
        return R(this, 1, 0)
    };

    function Xn(a) {
        return R(a, 2, 0)
    }

    function Yn(a, b) {
        a.c = b.c;
        a.b = b.b;
        for (var c = 0; c < a.c; c++)
            for (var d = 0; d < a.b; d++) a.a[c][d] = b.a[c][d]
    }
    g.clone = function () {
        var a = new Wn(this.c, this.b);
        Yn(a, this);
        return a
    };

    function Zn(a, b) {
        if (a.c != b.c || a.b != b.b) throw {
            name: "Matrix Error",
            message: "Matrix dimension mismatch."
        };
        for (var c = new Wn(a.c, a.b), d = 0; d < c.c; d++)
            for (var e = 0; e < c.b; e++) c.a[d][e] = a.a[d][e] + b.a[d][e];
        return c
    }

    function $n(a, b) {
        if (a.c != b.c || a.b != b.b) throw {
            name: "Matrix Error",
            message: "Matrix dimension mismatch."
        };
        for (var c = new Wn(a.c, a.b), d = 0; d < c.c; d++)
            for (var e = 0; e < c.b; e++) c.a[d][e] = a.a[d][e] - b.a[d][e];
        return c
    }

    function ao(a, b) {
        if (null === b || void 0 === b) throw {
            name: "Null Matrix Error",
            message: "Cannot multiply by a null matrix"
        };
        var c;
        if ("number" === typeof b) c = bo(a, b);
        else {
            if (0 >= b.b || 0 >= b.c) throw {
                name: "Matrix Error",
                message: "Invalid dimensions."
            };
            if (a.b != b.c) throw {
                name: "Matrix Error",
                message: "Matrix dimension mismatch."
            };
            c = new Wn(a.c, b.b);
            for (var d = 0; d < c.c; d++)
                for (var e = 0; e < c.b; e++)
                    for (var f = 0; f < a.b; f++) c.a[d][e] += a.a[d][f] * b.a[f][e]
        }
        return c
    }

    function bo(a, b) {
        for (var c = new Wn(a.c, a.b), d = 0; d < a.c; d++)
            for (var e = 0; e < a.b; e++) c.a[d][e] = a.a[d][e] * b;
        return c
    }

    function co(a) {
        for (var b = 0, c = 0; c < a.c; c++)
            for (var d = 0; d < a.b; d++) var e = a.a[c][d],
                b = b + e * e;
        return Math.sqrt(b)
    }

    function eo(a) {
        return bo(a, 1 / co(a))
    }

    function fo(a, b) {
        if (4 != a.c || 4 != b.c || 1 != a.b || 1 != b.b) throw {
            name: "Matrix Error",
            message: "Invalid dimensions."
        };
        var c = new Wn(4, 1);
        c.a[0][0] = a.a[1][0] * b.a[2][0] - a.a[2][0] * b.a[1][0];
        c.a[1][0] = a.a[2][0] * b.a[0][0] - a.a[0][0] * b.a[2][0];
        c.a[2][0] = a.a[0][0] * b.a[1][0] - a.a[1][0] * b.a[0][0];
        return c
    }

    function go(a, b) {
        if (4 != a.c || 4 != b.c || 1 != a.b || 1 != b.b) throw {
            name: "Matrix Error",
            message: "Invalid dimensions."
        };
        var c;
        c = 0 + a.a[0][0] * b.a[0][0];
        c += a.a[1][0] * b.a[1][0];
        return c += a.a[2][0] * b.a[2][0]
    }

    function ho(a, b, c) {
        U(a, 0, 2, R(a, 0, 2) + b);
        U(a, 1, 2, R(a, 1, 2) + c);
        return a
    }

    function io(a) {
        var b = R(a, 0, 0),
            c = R(a, 0, 1),
            d = R(a, 1, 0),
            e = R(a, 1, 1),
            f = R(a, 0, 2),
            h = R(a, 1, 2),
            k = b * e - c * d;
        if (1E-6 >= Math.abs(k)) throw {
            name: "Determinant Error",
            message: "Cannot calculate inverse of zero determinant matrix."
        };
        a = e / k;
        var l = -c / k,
            p = -d / k,
            m = b / k,
            c = (c * h - e * f) / k,
            b = (d * f - b * h) / k,
            d = new Wn(3, 3, !0);
        U(d, 0, 0, a);
        U(d, 0, 1, l);
        U(d, 1, 0, p);
        U(d, 1, 1, m);
        U(d, 0, 2, c);
        U(d, 1, 2, b);
        return d
    }

    function jo(a) {
        return new Hn(a.a[0][0], a.a[1][0])
    }
    g.toString = function () {
        for (var a = "", b = 0; b < this.c; b++) {
            for (var a = a + "[", c = 0; c < this.b; c++) a += "[" + this.a[b][c].toFixed(6) + "]";
            a += "]\n"
        }
        return a
    };

    function ko(a) {
        K.call(this);
        this.b = a;
        this.g = {};
        this.h = {};
        this.C = this.c = this.S = this.W = this.I = this.B = this.O = this.w = this.K = null;
        this.N = this.G = !1;
        this.ua = this.j = this.m = this.a = null;
        this.aa = !1
    }
    v(ko, K);

    function lo(a) {
        return a.g.fileId
    }
    g = ko.prototype;
    g.gc = function () {
        return this.g.fileVersionId
    };

    function mo(a) {
        return no(a, "dicomUrl") || a.b.a.h.vd(lo(a), a.gc(), "dicom", void 0)
    }

    function oo(a, b) {
        var c = b || 0,
            d = {
                dimensions: "2048x2048",
                frameIndex: c
            };
        return no(a, "imageUrl", c) || a.b.a.h.vd(lo(a), a.gc(), "png", d)
    }

    function no(a, b, c) {
        if (b = a.g[b] || Hm(a.b, b)) {
            var d = a.b;
            c = c || 0;
            a = b.replace(/__STUDYUID__/g, po(d.a))
                .replace(/__SERIESUID__/g, Fm(d))
                .replace(/__INSTANCEUID__/g, Jm(a))
                .replace(/__FRAME__/g, c.toString())
        } else a = null;
        return a
    }

    function Jm(a) {
        return a.T("00080018")
    }

    function Km(a) {
        return a.ia("00200013")
    }

    function Lm(a) {
        if (!a.K) {
            var b = a.ia("00280010"),
                c = a.ia("00280011");
            b && c && (a.K = new um(c, b))
        }
        return a.K
    }

    function Mm(a) {
        if (a.w) return a.w;
        for (var b = "00280030 00181164 30020011 300A00E9 00700101 20100376".split(" "), c = 0; c < b.length; c++) {
            var d = b[c];
            if (qo(a, d)) {
                var e = ro(a, d, 0);
                if (e && (d = ro(a, d, 1))) {
                    a.w = new ym(e, d);
                    break
                }
            }
        }
        return a.w
    }

    function so(a) {
        return Qn(a) ? a.a.ea : null
    }

    function to(a, b, c) {
        Qn(a) ? uo(a, "dicomload") : vn(b, mo(a), a.Wf, a, c, void 0, a.Xf)
    }
    g.Xf = function (a) {
        this.m = jm(a)
            .m;
        uo(this, "dicomprogress")
    };
    g.Wf = function (a) {
        this.a = jm(a)
            .a;
        this.m = null;
        if (this.a) {
            var b = this.a;
            a = Xm(b, "00281053") || 1;
            var c = Xm(b, "00281052") || 0,
                d = b.ia("00280101") || 12,
                e = b.l("00281050"),
                b = b.l("00281051"),
                f = [];
            if (e && b)
                for (var h = 0; h < e.U()
                    .length; ++h) f.push(new S(parseFloat(e.U()[h]), parseFloat(b.U()[h]), !1, "Preset " + (h + 1)
                    .toString()));
            this.c = new Tm(f, a, c, d);
            this.C = dn(this.a);
            a = !1;
            (c = this.a.T("00280004")) && "MONOCHROME1" === xb(c) && (a = !0);
            this.G = a;
            this.N = cn(this.a);
            a = this.c;
            c = a.h;
            d = a.g;
            for (e = 0; e < a.c; e++) a.b[e] = e * c + d;
            this.b.ca.sort(vo);
            uo(this, "dicomload")
        }
    };

    function uo(a, b) {
        var c = new im(b),
            d = mo(a);
        jm(c)
            .c = d;
        jm(c)
            .K = a;
        jm(c)
            .a = a.a;
        jm(c)
            .m = a.m;
        L(a, c)
    }

    function Rn(a, b) {
        return Qn(a) ? a.c.U(so(a)[b]) : Number.NaN
    }
    g.l = function (a) {
        return this.a ? this.a.l(a) : null
    };

    function qo(a, b) {
        var c;
        cb(a.h, b) || a.a && Wm(a.a, b) ? c = !0 : (c = a.b, cb(c.b, b) ? c = !0 : (c = c.a, c = c.b ? cb(c.b, b) : !1));
        return c
    }
    g.T = function (a) {
        return cb(this.h, a) ? w(this.h, a) : this.a && Wm(this.a, a) ? this.a.T(a) : this.b.T(a)
    };
    g.ia = function (a, b) {
        return cb(this.h, a) ? parseInt(this.T(a), 10) : this.a && Wm(this.a, a) ? this.a.ia(a, b) : this.b.ia(a, b)
    };

    function ro(a, b, c) {
        cb(a.h, b) ? b = q(c) ? a.h[b][c] : parseFloat(a.T(b)) : a.a && Wm(a.a, b) ? b = Xm(a.a, b, c) : (a = a.b, cb(a.b, b) ? b = parseFloat(a.T(b)) : (a = a.a, b = a.b ? parseFloat(a.T(b)) : 0));
        return b
    }
    g.U = function (a, b, c) {
        if (!Qn(this)) return Number.NaN;
        var d = Lm(this);
        a = Math.floor(a);
        if (0 > a || a >= d.a) return 0;
        b = Math.floor(b);
        return 0 > b || b >= d.b ? 0 : Rn(this, a + b * d.a + (c || 0) * xm(d))
    };

    function wo(a) {
        if (!Qn(a)) return null;
        var b = a.a;
        if (!b || !b.ea) return null;
        for (var b = 0 * xm(Lm(a)), c = 1 * xm(Lm(a)) - b, d = Number.POSITIVE_INFINITY, e = Number.NEGATIVE_INFINITY, f = 0; f < c; f++) {
            var h = Rn(a, b + f);
            isFinite(h) && (d = Math.min(d, h), e = Math.max(e, h))
        }
        return new S(Math.round((d + e) / 2), Math.max(1, Math.ceil(e - d)), !1)
    }

    function Qn(a) {
        return !(!a.a || !a.a.ea)
    }

    function Pm(a) {
        a.O || (a.O = xo(a, "00200032", 0));
        return a.O
    }

    function Nm(a) {
        a.B || (a.B = xo(a, "00200037", 0));
        return a.B
    }

    function Om(a) {
        a.I || (a.I = xo(a, "00200037", 3));
        return a.I
    }

    function xo(a, b, c) {
        for (var d = new Wn(4, 1), e = 0; 3 > e; e++) U(d, e, 0, ro(a, b, c + e) || 0);
        for (e = 3; 4 > e; e++) U(d, e, 0, 1);
        return d
    }

    function yo(a, b) {
        if (!b) return null;
        var c = Pm(a);
        if (!c) return null;
        var d = Nm(a);
        if (!d) return null;
        var e = Om(a);
        if (!e) return null;
        d = Zn(c, d);
        e = Zn(c, e);
        if (!c || !d || !e) return null;
        e = eo(fo($n(d, c), $n(e, c)));
        if (!e) return null;
        c = -go(e, $n(b, c));
        if (isNaN(c) || 0 === c) return null;
        d = go(e, e);
        if (isNaN(d) || 0 === d) return null;
        c = Zn(b, ao(e, c / d));
        return co($n(b, c))
    }

    function vo(a, b) {
        return Km(a) < Km(b) ? -1 : Km(a) > Km(b) ? 1 : 0
    };

    function zo(a, b, c, d) {
        return R(a, c, 0) * R(b, d, 0) - R(a, d, 0) * R(b, c, 0)
    }

    function Ao(a) {
        return eo(fo($n(a[1], a[0]), $n(a[3], a[0])))
    };

    function Bo(a, b) {
        this.b = a;
        this.a = b
    }
    Bo.prototype.contains = function (a, b) {
        var c = Math.min(this.b.o(), this.a.o()),
            d = Math.max(this.b.v(), this.a.v()),
            e = Math.max(this.b.o(), this.a.o());
        return a >= Math.min(this.b.v(), this.a.v()) && b >= c && a <= d && b <= e
    };

    function Co(a, b, c) {
        Ol.call(this, a);
        this.a = b;
        this.b = c || "";
        this.c = null
    }
    v(Co, Ol);
    g = Co.prototype;
    g.clone = function () {
        return new Co(this, this.a.clone(), this.b)
    };
    g.zb = function () {
        var a = this.j,
            b = this.h,
            c = Nl(this.g),
            d = this.a,
            e = d.clone();
        return {
            annotationType: "spine",
            fontSize: a,
            color: b,
            view: c,
            point: {
                rows: d.c,
                columns: d.b,
                data: e.a
            },
            text: this.b
        }
    };
    g.Aa = function (a, b, c) {
        Co.A.Aa.call(this, a, b, c);
        if (c = Do(b, this.a)) a.textBaseline = "middle", a.textAlign = "left", T(a, this.b, c.v() + 10, c.o()), Wl(a, c.v(), c.o()), a = a.measureText(this.b)
            .width, this.c = new Bo(Eo(b, c.v() - 5, c.o() - 10), Eo(b, c.v() + 15 + a, c.o() + 10))
    };
    g.vb = function (a, b) {
        return this.c ? this.c.contains(a, b) : !1
    };
    g.yb = function () {};
    g.Bb = function () {};

    function Fo(a, b, c) {
        Ol.call(this, a);
        this.a = b;
        this.b = c || "";
        this.c = null;
        this.I = this.m = 0
    }
    v(Fo, Ol);
    g = Fo.prototype;
    g.clone = function () {
        return new Fo(this, this.a.clone(), this.b)
    };
    g.zb = function () {
        return {
            annotationType: "text",
            fontSize: this.j,
            color: this.h,
            view: Nl(this.g),
            point: Gn(this.a),
            text: this.b
        }
    };
    g.Aa = function (a, b, c) {
        Fo.A.Aa.call(this, a, b, c);
        if (c = Kn(b, this.a.v(), this.a.o())) a.textBaseline = "middle", a.textAlign = "left", T(a, this.b, c.v() + 10, c.o()), Wl(a, c.v(), c.o()), a = a.measureText(this.b)
            .width, this.c = new Bo(Eo(b, c.v() - 5, c.o() - 10), Eo(b, c.v() + 15 + a, c.o() + 10))
    };
    g.vb = function (a, b) {
        return this.c ? this.c.contains(a, b) : !1
    };
    g.yb = function (a) {
        this.m = a.v() - this.a.v();
        this.I = a.o() - this.a.o()
    };
    g.Bb = function (a) {
        In(this.a, a.v() - this.m, a.o() - this.I)
    };

    function Go(a) {
        u(a) && (a = Oa(a));
        switch (a.annotationType) {
        case "ellipse":
            if (a) {
                var b;
                a = (b = (b = a.ellipse) ? new zn(b.x, b.y, b.width, b.height) : null) ? new On(a, b) : null
            } else a = null;
            return a;
        case "line":
            return new Vn(a, Bn(a.line));
        case "angle":
            return new Jn(a, Cn(a.start), Cn(a.mid), Cn(a.end));
        case "cobbAngle":
            if ((b = a.lines) && 3 === b.length) {
                for (var c = Array(3), d = 0; d < b.length; d++) c[d] = Bn(b[d]);
                a = new Mn(a, c)
            } else a = null;
            return a;
        case "text":
            return new Fo(a, Cn(a.point), a.text);
        case "spine":
            return (b = a.point) ? (c = new Wn(b.rows,
                b.columns), c.a = b.data, b = c) : b = null, new Co(a, b, a.text);
        case "arrow":
            return new Ln(a, Bn(a.line));
        case "gonstead":
            b = void 0;
            if (a.points)
                for (c = a.points, b = Array(c.length), d = 0; d < c.length; d++) b[d] = Cn(c[d]);
            return new Sn(a, b)
        }
        return null
    };

    function Ho(a) {
        this.h = this.g = this.c = this.b = this.a = "";
        a ? (this.clear(), a && (a = a.split(/\^/), null != a && (0 < a.length && (this.a = Io(a[0])), 1 < a.length && (this.b = Io(a[1])), 2 < a.length && (this.c = Io(a[2])), 3 < a.length && (this.g = Io(a[3])), 4 < a.length && (this.h = Io(a[4]))))) : this.clear()
    }
    Ho.prototype.clear = function () {
        this.a = Io(null);
        this.b = Io(null);
        this.c = Io(null);
        this.g = Io(null);
        this.h = Io(null)
    };

    function Jo(a) {
        a = gd("%s %s %s %s %s", a.g, a.b, a.c, a.a, a.h);
        a = a.replace(/[\s\n\r]+/g, " ");
        return a = xb(a)
    }

    function Io(a) {
        if (!a) return "";
        a = a.replace(/[\^\%\~]+/g, "");
        a = xb(a);
        return a = a.replace(/[\s\n\r]+/g, " ")
    };

    function Ko(a) {
        K.call(this);
        this.h = a;
        this.g = {};
        this.b = {};
        this.a = [];
        this.c = [];
        this.w = this.m = this.j = null
    }
    v(Ko, K);

    function Lo(a, b) {
        var c = new Ko(a);
        c.g = b.meta || {};
        c.b = Bm(b.dicomMetadata, Cm);
        if (b.series)
            for (var d = 0; d < b.series.length; d++) {
                var e = b.series[d],
                    f = new Em(c);
                f.c = e.meta || {};
                f.b = Bm(e.dicomMetadata, Cm);
                if (e.objects) {
                    for (var h = 0; h < e.objects.length; h++) {
                        var k;
                        k = e.objects[h];
                        var l = new ko(f);
                        l.g = k.meta || {};
                        l.h = Bm(k.dicomMetadata, Cm);
                        k = l;
                        mo(k) || lo(k) ? f.ca.push(k) : console.log("Ignoring object due to missing required fields")
                    }
                    f.ca.sort(vo)
                }
                c.a.push(f)
            }
        if (b.annotations) {
            e = Array(b.annotations.length);
            for (d = 0; d < b.annotations.length; d++) e[d] =
                Go(b.annotations[d]);
            c.c = e
        }
        return c
    }

    function po(a) {
        return a.T("0020000D")
    }

    function Mo(a) {
        return a.g.fileId
    }

    function No(a) {
        return a.g.folderId
    }

    function Oo(a) {
        var b = 0;
        if (a.a)
            for (var c = 0; c < a.a.length; c++) b += a.a[c].ca.length;
        return b
    }

    function Po(a) {
        var b = 0;
        if (a.a)
            for (var c = 0; c < a.a.length; c++) {
                for (var d = a.a[c], e = 0, f = 0; f < d.ca.length; f++) d.ca[f].aa && e++;
                b += e
            }
        return b
    }

    function Qo(a) {
        !a.j && a.b && cb(a.b, "00100010") && (a.j = new Ho(a.T("00100010")));
        return a.j
    }

    function Ro(a) {
        if (!a.w) {
            var b = a.T("00080020"),
                c;
            if (b) {
                c = new mc(2E3);
                var b = xb(b),
                    b = b.split(-1 == b.indexOf("T") ? " " : "T"),
                    d;
                var e = b[0].match(Zb);
                if (e) {
                    var f = Number(e[2]),
                        h = Number(e[3]),
                        k = Number(e[4]);
                    d = Number(e[5]);
                    var l = Number(e[6]) || 1;
                    c.a.setFullYear(Number(e[1]));
                    k ? (c.a.setDate(1), c.a.setMonth(0), c.Bc(new bc(ec, k - 1))) : d ? (c.a.setMonth(0), c.a.setDate(1), e = c.getDay() || 7, c.Bc(new bc(ec, (4 >= e ? 1 - e : 8 - e) + (Number(l) + 7 * (Number(d) - 1)) - 1))) : (f && (c.a.setDate(1), c.a.setMonth(f - 1)), h && c.a.setDate(h));
                    d = !0
                } else d = !1;
                d && !(d = 2 > b.length) && (b = b[1], d = b.match(ac), l = 0, d && ("Z" != d[0] && (l = 60 * Number(d[2]) + Number(d[3]), l *= "-" == d[1] ? 1 : -1), l -= c.getTimezoneOffset(), b = b.substr(0, b.length - d[0].length)), (d = b.match($b)) ? (c.a.setHours(Number(d[1])), c.a.setMinutes(Number(d[2]) || 0), c.a.setSeconds(Number(d[3]) || 0), c.a.setMilliseconds(d[4] ? 1E3 * Number(d[4]) : 0), 0 != l && c.a.setTime(c.getTime() + 6E4 * l), d = !0) : d = !1);
                c = d ? c : null
            } else c = null;
            a.w = c
        }
        return a.w
    }

    function So(a) {
        return a.T("00080060")
    }
    Ko.prototype.T = function (a) {
        return this.b ? w(this.b, a) : null
    };
    Ko.prototype.ia = function (a) {
        return this.b ? parseInt(this.T(a), 10) : 0
    };

    function To(a, b, c) {
        N.call(this, c);
        this.j = a;
        this.W = b || {};
        this.C = this.W.folderId || null;
        this.w = this.B = this.G = this.N = this.b = null;
        this.S = !1;
        this.m = this.g = 0;
        this.c = [];
        this.h = []
    }
    v(To, N);

    function Uo(a, b) {
        a.S = b;
        var c = a.b;
        c && uc(c, "hovering", b)
    }
    g = To.prototype;
    g.R = function (a) {
        this.D = a;
        a.innerHTML = '<p>Imported DICOM images will be automatically sorted by study and available to view in the Box DICOM Viewer or selected Box folder.</p><div class="drop-zone"><div class="drop-zone-icon"></div><div class="drop-zone-helper">Drag and drop images to import or <a href="javascript:void(0)" class="file-link">choose files</a> <a href="javascript:void(0)" class="directory-link"></a>.</div><input class="file-input hidden-button" type="file" multiple><input class="directory-input hidden-button" type="file" multiple webkitdirectory></div><div id="box-dicom-import-unsupported" class="alert alert-block" style="display:none; padding:10px; color: #a94442; background-color: #f2dede; border-color: #a94442;"><h4>Warning!</h4><p>Your browser has limited support for the DICOM uploader. You will not be able to upload "directories". You can only upload "files".</p><p>For the best upload experience, we recommend <a href="https://www.google.com/intl/en/chrome/browser/">Google Chrome</a>.</p></div><div class="studies"><h1>Studies</h1><div class="studies-list"></div></div>'.toString();
        pc(a,
            "box-dicom-import-main");
        this.b = a.querySelector(".drop-zone");
        this.N = this.b.querySelector(".file-link");
        this.G = this.b.querySelector(".directory-link");
        this.B = this.b.querySelector(".file-input");
        this.w = this.b.querySelector(".directory-input")
    };
    g.P = function () {
        To.A.P.call(this);
        J(this.N, "click", this.fh, !1, this);
        J(this.G, "click", this.Xg, !1, this);
        J(this.B, "change", this.gh, !1, this);
        J(this.w, "change", this.Yg, !1, this);
        J(this.b, "dragenter", this.bh, !0, this);
        J(this.b, "dragleave", this.dh, !0, this);
        J(this.b, "dragover", this.Oe, !1, this);
        J(this.b, "drop", this.Pe, !1, this);
        J(document.body, "dragover", this.Oe, !1, this);
        J(document.body, "drop", this.Pe, !1, this);
        var a = this;
        window.onbeforeunload = function () {
            var b;
            b = a.m < a.g ? "Uploads still active!" : void 0;
            return b
        }
    };
    g.fh = function (a) {
        a.h();
        a.b();
        this.B.click()
    };
    g.Xg = function (a) {
        a.h();
        a.b();
        this.w.click()
    };
    g.gh = function (a) {
		angular.element(document.getElementById('my-container')).scope().showDicomLoader = true;
        a = a.target.files;
        for (var b = 0; b < a.length; b++) Vo(this, a[b])
    };
    g.Yg = function (a) {
		angular.element(document.getElementById('my-container')).scope().showDicomLoader = true;
        a = a.target.files;
        for (var b = 0; b < a.length; b++) Vo(this, a[b])
    };
    g.bh = function (a) {
        this.S || (a.b(), Uo(this, !0))
    };
    g.dh = function (a) {
        var b = xg(this.b),
            c = a.clientX,
            d = a.clientY;
        if (c >= b.left + b.width || c <= b.left || d >= b.top + b.height || d <= b.top) a.b(), Uo(this, !1)
    };
    g.Oe = function (a) {
        a.b()
    };
    g.Pe = function (a) {
        a.h();
        a.b();
        var b = a.g.dataTransfer;
        a = b.items;
        var c = b.files;
        if (a && a.length)
            for (b = 0; b < a.length; b++)(c = a[b].webkitGetAsEntry()) && Wo(this, c);
        else if (c && c.length)
            for (b = 0; b < c.length; b++) Vo(this, c[b]);
        Uo(this, !1)
    };

    function Wo(a, b) {
        if (b.isFile) b.file(function (b) {
            Vo(a, b)
        });
        else if (b.isDirectory) {
            var c = b.createReader();
            c.readEntries(function (b) {
                Xo(a, c, b)
            })
        }
    }

    function Xo(a, b, c) {
        if (null !== c && 0 !== c.length) {
            for (var d = 0; d < c.length; d++) Wo(a, c[d]);
            b.readEntries(function (c) {
                Xo(a, b, c)
            })
        }
    }

    function Vo(a, b) {
        if (b) {
			angular.element(document.getElementById('my-container')).scope().showDicomLoader = true;
			var ext = b.name.split('.').pop();
			if(ext != "dcm" ) {
				angular.element(document.getElementById('patient-details-page'))
				.scope()
				.showFileTypeAlert();
				return false;
			}
            var c = b.name;
            if (c && ".DS_Store" !== c) {
                var d = new FileReader;
                d.onload = function () {
                    a: {
                        var b = d.result,
                            c = new Uint8Array(b),
                            h = new Um;
                        try {
                            Vm(h, c, "7FE00010")
                        } catch (m) {
                            break a
                        }
                        if (h.T("0020000D")) {
                            b: {
                                for (var c = h.T("0020000D"), k = null, l = 0; l < a.c.length; l++)
                                    if (k = a.c[l], po(k) === c) {
                                        c = k;
                                        break b
                                    }
                                c = new Ko(a.j.h);c.g = {};c.b = {};k = "0020000D 00080020 00081030 00080080 00080090 00100010 00100020 00100030 00080060 00080061 00180015 00181030".split(" ");
                                for (l = 0; l < k.length; l++) c.b[k[l]] = h.T(k[l]);k = c;a.c.push(k);
                                c = k
                            }
                            k = h.T("0020000E");
                            if (!k) throw "No series UID!";b: {
                                if (c.a)
                                    for (l = 0; l < c.a.length; l++)
                                        if (Fm(c.a[l]) === k) {
                                            k = c.a[l];
                                            break b
                                        }
                                k = null
                            }
                            if (!k) {
                                for (var k = new Em(c), l = ["0020000E", "00200011", "0008103E"], p = 0; p < l.length; p++) k.b[l[p]] = h.T(l[p]);
                                c.a.push(k)
                            }
                            c = k;k = h.T("00080018");
                            if (!k) throw "No SOP instance UID!";b: {
                                if (c.ca)
                                    for (l = 0; l < c.ca.length; l++)
                                        if (p = c.ca[l], Jm(p) === k) {
                                            k = p;
                                            break b
                                        }
                                k = null
                            }
                            k || (k = new ko(c), k.g.dicomUrl = "", k.a = h, c.ca.push(k));k.ua = b;Yo(a);a.h.push(k);Zo(a)
                        }
                    }
                };
                d.readAsArrayBuffer(b)
            }
        }
    }

    function Yo(a) {
        var b = document.querySelector(".studies");
        if (b) {
            var c = document.querySelector(".studies-list");
            if (c) {
                for (var d = Xd(window.location, !0), e = ["<div>"], f = 0; f < a.c.length; f++) {
                    var h = a.c[f],
                        k = Jo(Qo(h));
                    k || (k = "[No Patient Name]");
                    e.push('<div class="study">');
                    e.push("<table>");
                    e.push('<col width="393"><col width="170"><col width="223">');
                    e.push('<tr><td colspan="3" class="patient-name">');
                    e.push(yb(k));
                    e.push("</td></tr>");
                    var l = Oo(h) + 1,
                        k = "";
                    if (0 < l) {
                        var k = Po(h) + (Mo(h) ? 1 : 0),
                            p = k / l;
                        e.push('<tr><td colspan="2" class="fat-row">');
                        e.push('<div class="progress-container">');
                        e.push('<div class="progress-bar" style="width:' + (100 * p)
                            .toFixed(4) + '%">');
                        e.push("</div>");
                        e.push("</div>");
                        e.push('</td><td class="fat-row right">');
                        k < l ? k = "Uploading " + k + " of " + l + " file(s)." : (k = "Finished uploading " + l + " file(s).", l = Mo(h), p = No(h), l && p && ($o(d.c) ? (e.push('<a href="/files/0/f/' + p + '" target="_blank" class="folder-button">Go to folder</a>'), l = "/dicom_viewer/" + l + "/study.boxdicom") : l = "https://cloud.app.box.com/dicom_viewer/" + l + "/study.boxdicom?accessToken=" +
                            z(a.W.accessToken), e.push('<a href="' + l + '" target="_blank" class="viewer-button">View study</a>')));
                        e.push("</td></tr>")
                    }
                    e.push('<tr><td class="study-description fat-row">');
                    (l = h.T("00081030")) && e.push(yb(l));
                    (l = h.T("00080060")) && e.push(" / Modality: " + yb(l));
                    (h = h.T("00180015")) && e.push(" / Body Part: " + yb(h));
                    e.push('</td><td colspan="2" class="progress-description fat-row">');
                    e.push(yb(k));
                    e.push("</td></tr></table></div>")
                }
                e.push('<div style="clear:both"></div>');
                e.push("</div>");
                c.innerHTML = e.join("");
                0 < a.c.length && (b.style.display = "block")
            }
        }
    }

    function Zo(a) {
        if (a.h && 0 !== a.h.length) {
            var b = a.g - a.m;
            if (!(4 <= b)) {
                a.g++;
                var c = a.h.pop(),
                    d = c.b,
                    e = d.a,
                    b = No(e),
                    f = d.c.folderId;
                po(e);
                Fm(d);
                if (b && "-1" !== b && f && "-1" !== f) b = Jm(c) + ".dcm", a.j.h.Xc(f, b, c.ua, function (b, d) {
                    if (d) console.log("Upload error!"), console.log(d);
                    else {
                        var f = b.na();
                        c.g.fileId = f;
                        c.g.fileVersionId = b.gc();
                        c.aa = !0;
                        Po(e) === Oo(e) && ap(a, e);
                        a.m++;
                        Zo(a);
                        Yo(a)
                    }
                }), b = a.g - a.m, 4 > b && Zo(a);
                else if (a.h.push(c), a.g--, "-1" !== b && "-1" !== f) {
                    var h = f = null;
                    b ? (f = b, h = bp(d), d.c.folderId = "-1") : (a.C ? (f = a.C, h = cp(e)) :
                        (f = "0", h = "DICOM/" + cp(e)), e.g.folderId = "-1");
                    a.j.h.pd(f, h, function (b) {
                        b.Ce() === a.C ? (b = b.na(), e.g.folderId = b) : (b = b.na(), d.c.folderId = b);
                        Zo(a)
                    })
                }
            }
        }
    }

    function ap(a, b) {
        var c = No(b);
        if (c) {
            var d = {
                    study: {
                        meta: b.g,
                        dicomMetadata: Bm(b.b, Dm),
                        series: Im(b.a)
                    }
                },
                d = Pa(d),
                d = dp(d);
            a.j.h.Xc(c, "study.boxdicom", d, function (c, d) {
                if (d) console.log("Upload error!"), console.log(d);
                else {
                    var h = c.na();
                    b.g.fileId = h;
                    Yo(a)
                }
            })
        }
    }

    function dp(a) {
        for (var b = a.length, c = new ArrayBuffer(b), d = new Uint8Array(c), e = 0; e < b; e++) d[e] = a.charCodeAt(e);
        return c
    }

    function cp(a) {
        var b = a.T("00100020"),
            c;
        c = (c = a.T("00080020")) && 8 === c.length ? c.substr(0, 4) + "-" + c.substr(4, 2) + "-" + c.substr(6, 2) : "";
        a = a.T("00081030");
        return ep(b + " - " + c + " - " + a)
    }

    function bp(a) {
        var b = a.ia("00200011");
        a = a.T("0008103E");
        b = "000000000" + b;
        b = b.substr(b.length - 8);
        return ep(b + " - " + a)
    }

    function ep(a) {
        return xb(a.replace(/[\<\>\:\/\\\|\?\^\*]/g, ""))
    };

    function fp() {
        this.m = 0;
        this.j = "";
        this.g = this.h = this.b = this.c = null;
        this.a = []
    }
    fp.prototype.na = function () {
        return this.m
    };

    function gp(a) {
        var b = new fp;
        b.m = a.id;
        b.j = a.name;
        for (var c = a.viewers, d = [], e = 0; e < c.length; e++) d.push(hp(c[e]));
        b.a = d;
        a.modality && (b.c = a.modality);
        a.body_part && (b.b = a.body_part);
        a.study_description && (b.h = a.study_description);
        a.institution_name && (b.g = a.institution_name);
        return b
    }

    function ip(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(gp(a[c]));
        return b
    }

    function jp() {
        this.b = this.c = this.g = 0;
        this.a = []
    }

    function kp(a) {
        for (var b = {
                index: a.g,
                rows: a.c,
                columns: a.b,
                controls: []
            }, c = 0; c < a.a.length; c++) b.controls.push(a.a[c] ? lp(a.a[c]) : null);
        return b
    }

    function hp(a) {
        var b = new jp;
        b.g = a.index;
        b.c = a.rows;
        b.b = a.columns;
        a = a.controls;
        for (var c = [], d = 0; d < a.length; d++) c.push(mp(a[d]));
        b.a = c;
        return b
    }

    function np() {
        this.od = this.Rd = 0;
        this.m = this.j = this.g = this.h = this.a = this.b = this.c = null
    }

    function lp(a) {
        var b = {
            row: a.Rd,
            column: a.od
        };
        a.c && (b.series_description = a.c);
        a.b && (b.window_width = a.b.toFixed());
        a.a && (b.window_center = a.a.toFixed());
        a.h && (b.inverted = a.h);
        a.g && (b.zoom = a.g);
        a.j && (b.horizontal_flip = a.j);
        a.m && (b.vertical_flip = a.m);
        return b
    }

    function mp(a) {
        if (!a) return null;
        var b = new np;
        b.Rd = a.row;
        b.od = a.column;
        a.series_description && (b.c = a.series_description);
        a.window_width && (b.b = parseInt(a.window_width, 10));
        a.window_center && (b.a = parseInt(a.window_center, 10));
        a.inverted && (b.h = !!a.inverted);
        a.zoom && (b.g = parseFloat(a.zoom));
        a.horizontal_flip && (b.j = !!a.horizontal_flip);
        a.vertical_flip && (b.m = !!a.vertical_flip);
        return b
    }

    function op(a, b) {
        return q(a) && null !== a ? q(b) && null !== b ? xb(a) === xb(b) : !1 : !0
    };

    function pp() {
        this.b = new fd;
        this.a = new rb(this.b)
    }

    function qp(a) {
        return rp(a, "overlaysVisible")
    }

    function sp(a, b) {
        sb(a.a, "overlaysVisible", b)
    }

    function tp(a) {
        return rp(a, "localizersVisible")
    }

    function up(a) {
        return rp(a, "syncedSeries")
    }

    function vp(a) {
        return !!tb(a.a, "prefetchEnabled")
    }

    function wp(a) {
        (a = tb(a.a, "windowRects")) || (a = {});
        return a
    }

    function xp(a) {
        a = tb(a.a, "windowLevelPresets");
        var b = null;
        if (a)
            if (a)
                for (var b = new mn({}), c = bb(a), d = 0; d < c.length; d++)
                    for (var e = a[c[d]], f = 0; f < e.length; f++) {
                        var h;
                        (h = (h = e[f]) ? new S(h.center, h.width, h.inverted, h.name, h.modality) : null) && nn(b, h)
                    } else b = null;
        return b || new mn
    }

    function yp(a) {
        return zp(a, "localizerColor", "#26c281")
    }

    function Ap(a, b) {
        for (var c = Array(b.length), d = 0; d < c.length; d++) {
            var e = d,
                f = b[d],
                h = {
                    id: f.m,
                    name: f.j,
                    viewers: []
                };
            f.c && (h.modality = f.c);
            f.b && (h.body_part = f.b);
            f.h && (h.study_description = f.h);
            f.g && (h.institution_name = f.g);
            for (var k = 0; k < f.a.length; k++) h.viewers.push(kp(f.a[k]));
            c[e] = h
        }
        sb(a.a, "hangingProtocols", Pa(c))
    }

    function Bp(a) {
        return Cp(a, "overlays", "00100020 00080020 001021B0 00101010 00100040 00081030 0008103E 00080060".split(" "))
    }

    function zp(a, b, c) {
        a = tb(a.a, b);
        return q(a) && null !== a ? a.toString() : c
    }

    function Dp(a, b, c, d, e) {
        a = tb(a.a, b);
        if (!q(a) || null === a) return c;
        u(a) && (a = parseInt(a, 10));
        if (!isFinite(a)) return c;
        q(d) && (a = Math.max(a, d));
        q(e) && (a = Math.min(a, e));
        return a
    }

    function rp(a, b) {
        var c = tb(a.a, b);
        return q(c) && null !== c ? u(c) ? "true" === c : !!c : !0
    }

    function Cp(a, b, c) {
        a = tb(a.a, b);
        return q(a) && null !== a ? u(a) ? JSON.parse(a) : a : c
    };

    function Ep(a) {
        this.b = a;
        this.a = null
    }
    g = Ep.prototype;
    g.ra = function () {
        return "angle"
    };
    g.wa = function () {
        return this.a ? "move" : "angle"
    };
    g.La = function (a) {
        var b = this.b.a,
            c = new Ml(Ql(b), Rl(b), Sl(b)),
            d = Eo(b, a.c + 100, a.a);
        a = Eo(b, a.c, a.a);
        b = a.clone();
        this.a = new Jn(c, d, a, b);
        Fp(this.b.a, this.a);
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        a = Eo(this.b.a, a.c, a.a);
        In(this.a.b, a.v(), a.o());
        V(this.b.a);
        return !1
    };
    g.Ca = function () {
        this.a && (this.a = null, Gp(this.b.g, "select"), V(this.b.a));
        return !1
    };
    g.Ka = function () {};

    function Hp(a) {
        this.b = a;
        this.a = null
    }
    g = Hp.prototype;
    g.ra = function () {
        return "arrow"
    };
    g.wa = function () {
        return this.a ? "move" : "arrow"
    };
    g.La = function (a) {
        var b = this.b.a,
            c = new Ml(Ql(b), Rl(b), Sl(b));
        a = Eo(b, a.c, a.a);
        b = a.clone();
        this.a = new Ln(c, new An(a, b));
        Fp(this.b.a, this.a);
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        a = Eo(this.b.a, a.c, a.a);
        In(this.a.a.b, a.v(), a.o());
        V(this.b.a);
        return !1
    };
    g.Ca = function () {
        this.a && (this.a = null, V(this.b.a));
        return !1
    };
    g.Ka = function () {};

    function Ip(a) {
        this.b = a;
        this.a = null
    }
    g = Ip.prototype;
    g.ra = function () {
        return "cobbAngle"
    };
    g.wa = function () {
        return this.a ? "move" : null
    };
    g.La = function (a) {
        var b = this.b.a,
            c = new Ml(Ql(b), Rl(b), Sl(b)),
            d = Eo(b, a.c - 100, a.a),
            e = Eo(b, a.c, a.a);
        a = Eo(b, a.c + 100, a.a);
        b = Array(3);
        b[0] = new An(d, a);
        b[1] = new An(d.clone(), a.clone());
        b[2] = new An(e, e.clone());
        this.a = new Mn(c, b);
        Fp(this.b.a, this.a);
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        a = Eo(this.b.a, a.c, a.a);
        Nn(this.a, 6, a.v(), a.o());
        V(this.b.a);
        return !1
    };
    g.Ca = function () {
        this.a && (this.a = null, Gp(this.b.g, "select"), V(this.b.a));
        return !1
    };
    g.Ka = function () {};

    function Jp(a) {
        this.b = a;
        this.a = null
    }
    g = Jp.prototype;
    g.ra = function () {
        return "ellipse"
    };
    g.wa = function () {
        return "ellipse"
    };
    g.La = function (a) {
        var b = this.b.a,
            c = new Ml(Ql(b), Rl(b), Sl(b));
        a = Eo(b, a.c, a.a);
        this.a = new On(c, new zn(a.v() - 1, a.o() - 1, 2, 2));
        Fp(this.b.a, this.a);
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        var b = Eo(this.b.a, a.c, a.a);
        a = this.a.a;
        var c = a.v() + .5 * a.b,
            d = a.o() + .5 * a.a,
            e = Math.abs(c - b.v()),
            b = Math.abs(d - b.o());
        a.c = c - e;
        a.g = d - b;
        a.b = 2 * e;
        a.a = 2 * b;
        V(this.b.a);
        return !1
    };
    g.Ca = function () {
        this.a && (this.a = null, V(this.b.a));
        return !1
    };
    g.Ka = function () {};

    function Kp(a) {
        K.call(this);
        this.b = a;
        this.a = null;
        this.c = !1
    }
    v(Kp, K);
    g = Kp.prototype;
    g.ra = function () {
        return "gonstead"
    };
    g.wa = function () {
        return null
    };

    function Lp(a) {
        return a.a ? a.a.b : 0
    }

    function Mp(a, b) {
        a.a && (Tn(a.a, b), V(a.b.a), L(a, "gonstead_action_event"))
    }
    g.La = function (a) {
        this.c = !0;
        var b = this.b.a,
            c = new Ml(Ql(b), Rl(b), Sl(b));
        a = Eo(b, a.c, a.a);
        if (!a) return !1;
        this.a || (this.a = new Sn(c), Fp(this.b.a, this.a));
        this.a.a[this.a.b] = a;
        L(this, "gonstead_action_event");
        return !1
    };
    g.Ma = function (a) {
        if (this.a && this.c) {
            a = Eo(this.b.a, a.c, a.a);
            if (!a) return !1;
            this.a.a[this.a.b] = a;
            V(this.b.a)
        }
        return !1
    };
    g.Ca = function () {
        this.a && this.c && (Tn(this.a, this.a.b + 1), this.c = !1, V(this.b.a), L(this, "gonstead_action_event"));
        return !1
    };
    g.Ka = function () {};

    function Np(a) {
        this.b = a;
        this.a = null
    }
    g = Np.prototype;
    g.ra = function () {
        return "line"
    };
    g.wa = function () {
        return this.a ? "move" : "line"
    };
    g.La = function (a) {
        var b = this.b.a,
            c = new Ml(Ql(b), Rl(b), Sl(b));
        a = Eo(b, a.c, a.a);
        b = a.clone();
        this.a = new Vn(c, new An(a, b));
        Fp(this.b.a, this.a);
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        a = Eo(this.b.a, a.c, a.a);
        In(this.a.a.b, a.v(), a.o());
        V(this.b.a);
        return !1
    };
    g.Ca = function () {
        this.a && (this.a = null, V(this.b.a));
        return !1
    };
    g.Ka = function () {};

    function Op(a) {
        this.a = a;
        this.b = !1
    }
    g = Op.prototype;
    g.ra = function () {
        return "magicX"
    };
    g.wa = function () {
        return null
    };
    g.La = function (a) {
        this.b = !0;
        var b = this.a.a;
        if (!b) return !1;
        Pp(this.a, b, a.c, a.a);
        return !1
    };
    g.Ma = function (a) {
        if (!this.b) return !1;
        var b = this.a.a;
        if (!b) return !1;
        Pp(this.a, b, a.c, a.a);
        return !1
    };
    g.Ca = function () {
        if (this.b) {
            var a = this.a;
            a.m.b = null;
            Qp(a);
            this.b = !1
        }
        return !1
    };
    g.Ka = function () {};

    function Rp(a) {
        this.g = a;
        this.a = !1;
        this.c = this.b = 0
    }
    g = Rp.prototype;
    g.ra = function () {
        return "pan"
    };
    g.wa = function () {
        return "pan"
    };
    g.La = function (a) {
        this.a = !0;
        this.b = a.c;
        this.c = a.a;
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        Sp(this.g.a, a.c - this.b, a.a - this.c);
        this.b = a.c;
        this.c = a.a;
        return !1
    };
    g.Ca = function () {
        return this.a = !1
    };
    g.Ka = function () {};

    function Tp(a) {
        this.b = a;
        this.j = this.h = this.a = null
    }
    g = Tp.prototype;
    g.ra = function () {
        return "select"
    };
    g.wa = function () {
        return "pointer"
    };
    g.La = function (a) {
        a = Up(this, a);
        if (!a) return !1;
        if (this.a = Vp(this, a)) this.a.yb(a), this.h = this.a, this.j = this.b.a;
        return !1
    };
    g.Ma = function (a) {
        a = Up(this, a);
        if (!a) return !1;
        this.a ? (this.a.Bb(a), Wp(this.b.a, "move"), V(this.b.a)) : Vp(this, a) && Wp(this.b.a, "move");
        return !1
    };
    g.Ca = function () {
        this.a && (this.a = null, V(this.b.a));
        return !1
    };
    g.Ka = function () {};

    function Up(a, b) {
        var c = a.b.a;
        return c ? Eo(c, b.c, b.a) : null
    }

    function Vp(a, b) {
        var c = a.b.a;
        return c ? Xp(c, b) : null
    };

    function Yp(a) {
        K.call(this);
        this.c = a;
        this.g = [];
        this.a = 0;
        this.m = 1;
        this.b = null;
        Zp(this, "C", 7);
        Zp(this, "T", 12);
        Zp(this, "L", 5)
    }
    v(Yp, K);

    function Zp(a, b, c) {
        for (var d = 1; d <= c; d++) a.g.push(b + d)
    }
    g = Yp.prototype;
    g.ra = function () {
        return "spine"
    };
    g.wa = function () {
        return null
    };
    g.Da = function () {
        return this.g
    };
    g.next = function () {
        var a = this.g[this.a];
        this.a += this.m;
        0 > this.a ? this.a = this.g.length - 1 : this.a >= this.g.length && (this.a = 0);
        L(this, "spine_action_event");
        return a
    };
    g.La = function (a) {
        var b = this.c.a,
            c = new Ml(Ql(b), null, null);
        a = $p(b, a.c, a.a);
        this.b = new Co(c, a, this.next());
        Fp(this.c.a, this.b);
        return !1
    };
    g.Ma = function (a) {
        if (!this.b) return !1;
        a = $p(this.c.a, a.c, a.a);
        Yn(this.b.a, a);
        V(this.c.a);
        return !1
    };
    g.Ca = function () {
        this.b && (this.b = null, V(this.c.a));
        return !1
    };
    g.Ka = function () {};

    function aq(a) {
        this.a = a;
        this.b = !1;
        this.c = 0
    }
    g = aq.prototype;
    g.ra = function () {
        return "stack"
    };
    g.wa = function () {
        return "stack"
    };
    g.La = function (a) {
        this.b = !0;
        this.c = a.a;
        return !1
    };
    g.Ma = function (a) {
        if (!this.b) return !1;
        var b = this.a.a;
        if (!b) return !1;
        bq(b, b.S + .2 * (a.a - this.c));
        cq(b);
        dq(this.a, b);
        this.c = a.a;
        return !1
    };
    g.Ca = function () {
        this.b && (this.b = !1);
        return !1
    };
    g.Ka = function (a, b) {
        if (b) {
            var c = this.a.a;
            c && (bq(c, c.S + b[1] / 4), cq(c), dq(this.a, c))
        }
    };

    function eq(a) {
        this.b = a;
        this.a = null
    }
    g = eq.prototype;
    g.ra = function () {
        return "text"
    };
    g.wa = function () {
        return "text"
    };
    g.La = function (a) {
        var b = this.b.a,
            c = new Ml(Ql(b), Rl(b), Sl(b));
        a = Eo(b, a.c, a.a);
        this.a = new Fo(c, a);
        Fp(this.b.a, this.a);
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        a = Eo(this.b.a, a.c, a.a);
        In(this.a.a, a.v(), a.o());
        V(this.b.a);
        return !1
    };
    g.Ca = function () {
        if (this.a) {
            var a = this.b.a.g.h.prompt("Enter text annotation", "sample text");
            this.a.b = a || "";
            this.a = null;
            V(this.b.a)
        }
        return !1
    };
    g.Ka = function () {};

    function fq(a) {
        this.g = a;
        this.a = !1;
        this.c = this.b = 0
    }
    g = fq.prototype;
    g.ra = function () {
        return "windowLevel"
    };
    g.wa = function () {
        return "windowlevel"
    };
    g.La = function (a) {
        this.a = !0;
        this.b = a.c;
        this.c = a.a;
        return !1
    };
    g.Ma = function (a) {
        if (!this.a) return !1;
        var b = this.g.a;
        if (!b) return !1;
        var c = b.j;
        if (!c) return !1;
        var d = Math.max(2, Math.floor(.005 * Math.abs(c.b))),
            e = d * (this.c - a.a);
        c.b += d * (a.c - this.b);
        c.g = Math.max(1, c.g + e);
        cq(b);
        this.b = a.c;
        this.c = a.a;
        return !1
    };
    g.Ca = function () {
        this.a && (this.a = !1);
        return !1
    };
    g.Ka = function () {};

    function gq(a) {
        this.a = a;
        this.b = !1;
        this.c = this.m = this.g = 0
    }
    g = gq.prototype;
    g.ra = function () {
        return "zoom"
    };
    g.wa = function () {
        return "zoom"
    };
    g.La = function (a) {
        this.b = !0;
        this.g = a.c;
        this.c = this.m = a.a;
        return !1
    };
    g.Ma = function (a) {
        if (!this.b) return !1;
        var b = Math.pow(1.01, -(a.a - this.c));
        hq(this.a.a, b, b, this.g, this.m);
        this.c = a.a;
        return !1
    };
    g.Ca = function () {
        return this.b = !1
    };
    g.Ka = function (a, b) {
        if (b && this.a.a) {
            var c = Math.pow(1.01, -b[1]);
            hq(this.a.a, c, c, void 0, void 0)
        }
    };

    function iq(a) {
        this.c = a;
        this.b = null;
        this.a = {};
        this.g = [];
        jq(this, new Ep(a));
        jq(this, new Hp(a));
        jq(this, new Ip(a));
        jq(this, new Jp(a));
        jq(this, new Kp(a));
        jq(this, new Np(a));
        jq(this, new Op(a));
        jq(this, new Rp(a));
        jq(this, new Tp(a));
        jq(this, new Yp(a));
        jq(this, new aq(a));
        jq(this, new eq(a));
        jq(this, new fq(a));
        jq(this, new gq(a));
        Gp(this, "stack")
    }

    function jq(a, b) {
        gb(a.a, b.ra(), b)
    }

    function Gp(a, b) {
        if ("spine" === b) {
            var c = a.c;
            c.B || (c.B = new kq(c), P(c.B, c.c[0].l()));
            c.B.L(!0)
        } else c = a.c, c.B && c.B.L(!1);
        "gonstead" === b ? (c = a.c, c.K || (c.K = new lq(c), P(c.K, c.c[0].l())), c.K.L(!0)) : (c = a.c, c.K && c.K.L(!1));
        a.b = w(a.a, b) || null;
        if (c = a.c.a) {
            var d = a.b;
            Wp(c, d && d.wa())
        }
        for (c = 0; c < a.g.length; c++) d = a.g[c], Ri(d.item, d.command === b)
    }

    function mq(a, b) {
        for (var c in a.a) a.a.hasOwnProperty(c) && a.a[c].Ca && a.a[c].Ca(b)
    }

    function nq(a, b, c) {
        a.g.push({
            item: b,
            command: c
        });
        Ri(b, c === a.b.ra())
    };

    function oq(a) {
        xk.call(this, a.a);
        this.g = a;
        this.b = null;
        a = new $k("Color");
        for (var b = "Green #71c181 Blue #718da5 Yellow #f2d43b Purple #8a59b2 Red #cd3a56 Orange #de9b2a".split(" "), c = 0; c < b.length; c += 2) pq(this, a, b[c], b[c + 1]);
        for (var b = new $k("Font Size"), d = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32], c = 0; c < d.length; c++) qq(this, b, d[c]);
        c = new Q("Delete");
        J(c, "action", this.m, !1, this);
        this.H(a, !0);
        this.H(b, !0);
        this.H(new tk, !0);
        this.H(c, !0);
        P(this, this.g.g.h.document.body)
    }
    v(oq, xk);

    function pq(a, b, c, d) {
        c = a.g.g.a.F("div", {
            style: "color:" + d
        }, c);
        c = new Q(c);
        J(c, "action", function () {
            a.b && (a.b.h = d, V(a.g))
        });
        fl(b, c)
    }

    function qq(a, b, c) {
        c = c.toString();
        var d = c + "pt";
        c = new Q(c);
        J(c, "action", function () {
            a.b && (a.b.j = d, V(a.g))
        });
        fl(b, c)
    }
    oq.prototype.m = function () {
        this.b.w = !0;
        V(this.g)
    };

    function rq(a) {
        uk.call(this, a.a);
        this.b = a;
        a = [["arrow", "Arrow", "Draws an arrow on the image", "Q"], ["line", "Distance", "Measure the distance between two points", "D"], ["ellipse", "Ellipse", "Measure the area and average value of a circular region", "E"], ["angle", "Angle", "Measure the angle between two lines", "A"], ["cobbAngle", "Cobb Angle", "Measure the Cobb angle between two lines", "C"], ["text", "Text", "Add a text annotation to the image", "T"], ["spine", "Spine", "Label the spine", null], ["gonstead", "Gonstead",
"Add Gonstead markings", null]];
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                c = sq(this, c[1], c[0], c[3]);
            this.H(c, !0)
        }
        a = new Q("Save annotations");
        J(a, "action", this.c, !1, this);
        this.H(new tk, !0);
        this.H(a, !0)
    }
    v(rq, uk);

    function sq(a, b, c, d) {
        var e = a.b.b;
        a = tq(b, d, null, a.b.a);
        J(a, "action", function () {
            Gp(e.g, c)
        });
        return a
    }
    rq.prototype.c = function () {
        var a = this.b.b,
            b = uq(a);
        b && vq(a, b)
    };

    function wq(a, b) {
        N.call(this, b);
        this.b = a
    }
    v(wq, N);
    wq.prototype.ba = function () {
        this.R(df(this.a, "div"))
    };
    wq.prototype.R = function (a) {
        wq.A.R.call(this, a);
        a = this.l();
        var b = this.a.F("iframe", {
            src: this.b,
            width: "100%",
            height: "100%",
            frameborder: "0",
            style: "width:100%;height:100%"
        });
        a.appendChild(b)
    };
    wq.prototype.Na = function (a, b) {
        this.Z && (isNaN(a) || isNaN(b) || 0 > a || 0 > b || ug(this.l(), a, b))
    };
    wq.prototype.nc = function () {};

    function lq(a, b) {
        N.call(this, b);
        this.b = w(a.g.a, "gonstead") || null;
        this.g = this.h = this.c = this.j = null
    }
    v(lq, N);
    var xq = "Click on the crest of the <strong>left femural head</strong>;Click on the crest of the <strong>right femural head</strong>;Select the <strong>left Iliac crest</strong>;Select the <strong>right Iliac crest</strong>;Click the lowest point of the <strong>left Ischial Tuberosity</strong>;Click the lowest point of the <strong>right Ischial Tuberosity</strong>;Select the <strong>center</strong> of the <strong>Pubic Symphysis</strong>;Select the first <strong>sacral tubercle</strong>;Click on the <strong>left</strong> base point of the <strong>sacrum</strong>;Click on the <strong>right</strong> base point of the <strong>sacrum</strong>;Select the <strong>left</strong> side of the <strong>sacrum</strong>;Select the <strong>right</strong> side of the <strong>sacrum</strong>;Done!".split(";");
    g = lq.prototype;
    g.ba = function () {
        this.R(document.createElement("div"))
    };
    g.R = function (a) {
        this.D = a;
        a.className = "box-dicom-gonstead-dialog";
        var b = this.a,
            c = b.F("div", "box-dicom-gonstead-dialog-background");
        a.appendChild(c);
        c = b.F("div", "box-dicom-gonstead-dialog-title", "Gonstead");
        a.appendChild(c);
        var d = b.F("div", "box-dicom-gonstead-dialog-contents");
        a.appendChild(d);
        d.appendChild(document.createElement("BR"));
        this.j = b.F("button", "box-dicom-gonstead-button", "<<");
        d.appendChild(this.j);
        this.c = b.F("div", "box-dicom-gonstead-stage");
        d.appendChild(this.c);
        this.h = b.F("button", "box-dicom-gonstead-button",
            ">>");
        d.appendChild(this.h);
        this.g = b.F("div", "box-dicom-gonstead-help");
        d.appendChild(this.g);
        b = Ie(window);
        new Ng(a, c, new $c(0, 0, b.width, b.height));
        yq(this)
    };
    g.P = function () {
        lq.A.P.call(this);
        J(this.b, "gonstead_action_event", this.hh, !1, this);
        J(this.j, "click", this.xh, !1, this);
        J(this.h, "click", this.th, !1, this)
    };
    g.hh = function () {
        yq(this)
    };
    g.xh = function () {
        Mp(this.b, Lp(this.b) - 1)
    };
    g.th = function () {
        Mp(this.b, Lp(this.b) + 1)
    };

    function yq(a) {
        var b = Lp(a.b);
        a.c.innerHTML = (b + 1)
            .toString();
        var c = "";
        0 <= b && b < xq.length && (c = xq[b]);
        a.g.innerHTML = c
    }
    g.L = function (a) {
        M(this.l(), a)
    };

    function zq(a) {
        N.call(this, a);
        this.h = "";
        this.b = this.g = this.c = null
    }
    v(zq, N);
    zq.prototype.ba = function () {
        this.R(document.createElement("div"))
    };
    zq.prototype.R = function (a) {
        this.D = a;
        var b = this.a;
        a.className = "box-dicom-notification-container";
        b.xd(a);
        this.c = df(b, "div");
        this.c.className = "box-dicom-notification-content";
        b.Fe(a, this.h);
        a.appendChild(this.c);
        this.L(!1)
    };
    zq.prototype.L = function (a, b, c) {
        Aq(this);
        yg(this.l(), 1);
        M(this.l(), a);
        uc(this.c, "error", !!c);
        a && Bq(this, b)
    };

    function Bq(a, b) {
        Cq(a);
        a.g = window.setTimeout(function () {
            Cq(a);
            Aq(a);
            a.b = new Jh(a.l(), 400);
            a.b.sb()
        }, b || 8E3)
    }

    function Cq(a) {
        a.g && (window.clearTimeout(a.g), a.g = null)
    }

    function Aq(a) {
        a.b && (a.b.kb(), a.b.Y(), a.b = null)
    }
    var Dq = null;

    function W(a, b, c, d) {
        Dq || (Dq = new zq(b), P(Dq, void 0));
        b = Dq;
        b.h = a;
        b.c && b.a.Fe(b.c, a);
        Dq.L(!0, c, d)
    }
    ta("box.dicom.viewer.Notification.show", W);

    function Eq(a, b) {
        W(a, b, 3E5, !0)
    }
    ta("box.dicom.viewer.Notification.showError", Eq);

    function Fq(a) {
        xk.call(this, a.a);
        this.b = a;
        a = xp(a.b.b);
        var b = tq("Default", "~", void 0, this.a);
        J(b, "action", this.b.ee, !1, this.b);
        var c = tq("Auto", "0", void 0, this.a);
        J(c, "action", this.b.ge, !1, this.b);
        var d = new Q("Add current...");
        J(d, "action", this.m, !1, this);
        this.H(b, !0);
        this.H(c, !0);
        this.H(new tk, !0);
        b = bb(a.a);
        for (c = 0; c < b.length; c++) {
            var e = b[c],
                f = a.a[e];
            f && this.H(Gq(this, e, f), !0)
        }
        this.H(new tk, !0);
        this.H(d, !0)
    }
    v(Fq, xk);

    function Gq(a, b, c) {
        b = new $k(b);
        for (var d = 0; d < c.length; d++) {
            var e = a,
                f = c[d],
                f = tq(f.c || "Unknown", 8 >= d ? (d + 1)
                    .toString() : null, f, e.a);
            J(f, "action", e.g, !1, e);
            fl(b, f)
        }
        return b
    }
    Fq.prototype.g = function (a) {
        if (a.shiftKey) {
            a = a.target.U();
            var b = this.b.b.b,
                c = xp(b),
                d = c.a[a.h || "OT"];
            if (d)
                for (var e = 0; e < d.length; e++)
                    if (a.c === d[e].c) {
                        d.splice(e, 1);
                        break
                    }
            sb(b.a, "windowLevelPresets", on(c));
            W('Deleted "' + a.c + '"', this.a)
        } else a = a.target.U(), Sm(this.b.j, a), cq(this.b), W('Selected "' + a.c + '"', this.a)
    };
    Fq.prototype.m = function () {
        var a = Hq(this.b);
        if (a) {
            var b = So(a),
                a = prompt("Give a name for this window/level.  To remove a preset from the menu, simply select it while holding down the shift key."),
                c = this.b.j.clone();
            c.c = a;
            c.h = b;
            var b = this.b.b.b,
                d = xp(b);
            nn(d, c);
            sb(b.a, "windowLevelPresets", on(d));
            W('Created "' + a + '"', this.a)
        }
    };

    function Iq(a, b) {
        N.call(this, b);
        this.g = this.B = null;
        this.j = a;
        this.H(a);
        this.b = new Uk;
        this.w = this.C = this.m = this.c = 0;
        this.h = !0
    }
    v(Iq, N);
    g = Iq.prototype;
    g.ba = function () {
        var a = this.a,
            b = a.F("div", "box-dicom-scrollpane-outer"),
            a = a.F("div", "box-dicom-scrollpane-inner");
        b.appendChild(a);
        this.R(b)
    };
    g.R = function (a) {
        var b = this.a;
        this.B = this.D = a;
        this.g = hf(a)[0];
        this.j.l() || this.j.ba();
        b.Fg(this.g, this.j.l());
        a = this.b;
        var c = Vk.Rf;
        if (a.Ja != c) {
            var b = a.V(a.Ja),
                d = a.V(c);
            a.Ja = c;
            a.l() && (c = a.l(), oc(c, b) && (rc(c, b), pc(c, d)), a.b.style.left = a.b.style.top = "", a.h.style.left = a.h.style.top = "", a.g && (a.g.style.left = a.g.style.top = "", a.g.style.width = a.g.style.height = ""), Gk(a))
        }
        gk(this.b.c, 0);
        hk(this.b.c, 1E3);
        a = this.b;
        Kk(a, a.b, 1E3);
        this.b.hf = !0;
        P(this.b, this.B)
    };
    g.P = function () {
        Iq.A.P.call(this);
        var a = new Kg(this.g);
        J(a, "mousewheel", this.gg, !1, this);
        J(this.b, "change", this.Bh, !1, this);
        J(this.j, "resize", this.hg, !1, this);
        Jq(this);
        Kq(this, 0)
    };
    g.Na = function (a) {
        Dg(this.l(), a);
        Jq(this)
    };

    function Jq(a) {
        var b = Cg(a.B);
        if (b && b.height) {
            var c = Cg(a.g);
            c && c.height && (a.w = c.height + 10, a.C = b.height, a.m = -(a.w - a.C), a.b.b.style.height = b.height / c.height * b.height + "px")
        }
    }
    g.gg = function (a) {
        a.b();
        a.h();
        Kq(this, this.c + 30 * -Math.floor(a.O / 3))
    };
    g.Bh = function () {
        var a = (1 - this.b.U() / 1E3) * this.m;
        this.c = Math.round(a);
        lg(this.g, 0, this.c)
    };
    g.hg = function () {
        Jq(this)
    };

    function Kq(a, b) {
        if (!(a.C >= a.w) && (b = Math.min(b, 0), b = Math.max(b, a.m), b !== a.c)) {
            a.c = Math.round(b);
            lg(a.g, 0, a.c);
            var c = b,
                c = Math.round(1E3 * (1 - a.c / a.m));
            if (c !== a.b.U()) {
                var d = a.b;
                Kk(d, d.b, c)
            }
        }
    }
    g.L = function (a) {
        this.h = a;
        M(this.l(), this.h)
    };

    function Lq(a, b) {
        this.b = a;
        this.a = new ij(b);
        this.a.j = !0;
        this.a.m = !0;
        this.a.w = !0;
        this.a.$(Mq, 38);
        this.a.$(Nq, 40);
        this.a.$(Oq, 37);
        this.a.$(Pq, 39);
        this.a.$(Qq, 38, 1);
        this.a.$(Rq, 40, 1);
        this.a.$(Sq, 37, 1);
        this.a.$(Tq, 39, 1);
        this.a.$(Uq, 9);
        this.a.$(Vq, 9, 1);
        this.a.$(Wq, 192);
        this.a.$(Xq, "0");
        this.a.$(Xq, 96);
        this.a.$(Yq, 46);
        this.a.$(Yq, 8);
        for (var c = 1; 9 >= c; c++) {
            var d = "Preset #" + c,
                e = 97 + c - 1;
            this.a.$(d, String.fromCharCode(48 + c));
            this.a.$(d, e)
        }
        this.a.$(Zq, "meta+k");
        this.a.$($q, "alt+n");
        this.a.$(ar, "s");
        this.a.$(br,
            "w");
        this.a.$(cr, "p");
        this.a.$(dr, "z");
        this.a.$(er, "q");
        this.a.$(fr, "d");
        this.a.$(gr, "e");
        this.a.$(hr, "a");
        this.a.$(ir, "c");
        this.a.$(jr, "t");
        this.a.$(kr, "meta+o");
        this.a.$(lr, "meta+l");
        this.a.$(mr, "meta+s");
        J(this.a, "shortcut", this.c, !1, this)
    }
    var Mq = "Up",
        Nq = "Down",
        Oq = "Left",
        Pq = "Right",
        Qq = "Shift Up",
        Rq = "Shift Down",
        Sq = "Shift Left",
        Tq = "Shift Right",
        Uq = "Tab",
        Vq = "Shift Tab",
        Wq = "Default Window/Level",
        Xq = "Auto Window/Level",
        Yq = "Delete Annotation",
        Zq = "Key Image",
        $q = "Next Study",
        ar = "Stack Tool",
        br = "Window Tool",
        cr = "Pan Tool",
        dr = "Zoom Tool",
        er = "Arrow Tool",
        fr = "Distance Tool",
        gr = "Ellipse Tool",
        hr = "Angle Tool",
        ir = "Cobb Angle Tool",
        jr = "Text Tool",
        kr = "Toggle Overlays",
        lr = "Toggle Localizers",
        mr = "Toggle Synced Series";
    Lq.prototype.c = function (a) {
        switch (a.a) {
        case Mq:
        case Oq:
            nr(this, -1);
            break;
        case Nq:
        case Pq:
            nr(this, 1);
            break;
        case Qq:
            or(this, 0, -1);
            break;
        case Rq:
            or(this, 0, 1);
            break;
        case Sq:
            or(this, -1, 0);
            break;
        case Tq:
            or(this, 1, 0);
            break;
        case Uq:
            or(this, 1, 0, 2);
            break;
        case Vq:
            or(this, -1, 0, 2);
            break;
        case Wq:
            if (a = this.b.b.a) a.ee(), W("Default Window/Level", this.b.a);
            break;
        case Xq:
            if (a = this.b.b.a) a.ge(), W("Auto Window/Level", this.b.a);
            break;
        case "Preset #1":
            pr(this, 0);
            break;
        case "Preset #2":
            pr(this, 1);
            break;
        case "Preset #3":
            pr(this,
                2);
            break;
        case "Preset #4":
            pr(this, 3);
            break;
        case "Preset #5":
            pr(this, 4);
            break;
        case "Preset #6":
            pr(this, 5);
            break;
        case "Preset #7":
            pr(this, 6);
            break;
        case "Preset #8":
            pr(this, 7);
            break;
        case "Preset #9":
            pr(this, 8);
            break;
        case Yq:
            if (a = this.b.b) {
                var b = a.g.b;
                "select" === b.ra() ? b.h && b.j && (b.h.w = !0, V(b.j), b.h = null, b.j = null) : a.he()
            }
            break;
        case Zq:
            this.b.b.fd();
            break;
        case "Mic Toggle":
            a = qr(this.b);
            a.L("none" == a.l()
                .style.display);
            break;
        case "Mic Record":
            qr(this.b)
                .L(!0);
            rr(qr(this.b));
            break;
        case "Mic Play/Stop":
            qr(this.b)
                .L(!0);
            sr(qr(this.b));
            break;
        case "Mic Upload":
            qr(this.b)
                .L(!0);
            tr(qr(this.b));
            break;
        case $q:
            a = this.b.b;
            if (b = uq(a))
                for (var c = 0; c < a.c.length; c++) {
                    var d = a.c[c].m;
                    if (b) {
                        var e = void 0;
                        a: {
                            for (var e = po(b), f = 0; f < d.c.length; f++)
                                if (po(d.c[f].c) === e) {
                                    e = f;
                                    break a
                                }
                            e = -1
                        }
                        0 <= e && (f = d.c[e], d.c.splice(e, 1), d.removeChild(f, !0))
                    }
                }
            for (b = 0; b < a.c.length; b++) c = a.c[b].m, (c = c.c && 0 !== c.c.length ? c.c[0] : null) && c.Tc();
            break;
        case ar:
            Gp(this.b.b.g, "stack");
            break;
        case br:
            Gp(this.b.b.g, "windowLevel");
            break;
        case cr:
            Gp(this.b.b.g, "pan");
            break;
        case dr:
            Gp(this.b.b.g, "zoom");
            break;
        case er:
            Gp(this.b.b.g, "arrow");
            break;
        case fr:
            Gp(this.b.b.g, "line");
            break;
        case gr:
            Gp(this.b.b.g, "ellipse");
            break;
        case hr:
            Gp(this.b.b.g, "angle");
            break;
        case ir:
            Gp(this.b.b.g, "cobbAngle");
            break;
        case jr:
            Gp(this.b.b.g, "text");
            break;
        case kr:
            this.b.b.rc();
            break;
        case lr:
            a = this.b.b;
            b = a.b;
            c = !tp(b);
            sb(b.a, "localizersVisible", c);
            Qp(a);
            ur("Localizer lines", tp(a.b));
            break;
        case mr:
            a = this.b.b, b = a.b, c = !up(b), sb(b.a, "syncedSeries", c), Qp(a), ur("Synced series", up(a.b))
        }
    };

    function nr(a, b) {
        var c = a.b.b.a;
        c && (bq(c, c.S + b), cq(c))
    }

    function or(a, b, c, d) {
        (a = a.b.c) && vr(a, b, c, d)
    }

    function pr(a, b) {
        var c = a.b.b;
        if (c) {
            var d = c.a;
            if (d && d.j) {
                var e = Hq(d);
                e && (e = So(e)) && (c = xp(c.b)
                    .a[e], !c || 0 > b || b >= c.length || (c = c[b], Sm(d.j, c), cq(d), W('Selected "' + c.c + '"', a.b.a)))
            }
        }
    }
    Lq.prototype.Y = function () {
        this.a && (this.a.Y(), delete this.a)
    };

    function kq(a, b) {
        N.call(this, b);
        this.g = w(a.g.a, "spine") || null;
        this.b = this.c = null
    }
    v(kq, N);
    g = kq.prototype;
    g.ba = function () {
        this.R(document.createElement("div"))
    };
    g.R = function (a) {
        this.D = a;
        a.className = "box-dicom-spine-dialog";
        var b = this.a,
            c = b.F("div", "box-dicom-spine-dialog-background");
        a.appendChild(c);
        c = b.F("div", "box-dicom-spine-dialog-title", "Spine");
        a.appendChild(c);
        var d = b.F("div");
        d.className = "box-dicom-spine-dialog-contents";
        a.appendChild(d);
        d.appendChild(b.a.createTextNode("Next"));
        d.appendChild(df(b, "BR"));
        this.c = df(b, "select");
        for (var e = this.g.Da(), f = 0; f < e.length; f++) wr(this.c, f.toString(), e[f]);
        d.appendChild(this.c);
        d.appendChild(df(b, "BR"));
        d.appendChild(b.a.createTextNode("Order"));
        d.appendChild(df(b, "BR"));
        this.b = df(b, "select");
        wr(this.b, (1)
            .toString(), "Forward");
        wr(this.b, (-1)
            .toString(), "Backward");
        d.appendChild(this.b);
        b = Ie(window);
        new Ng(a, c, new $c(0, 0, b.width, b.height))
    };
    g.P = function () {
        kq.A.P.call(this);
        J(this.c, "change", this.Sg, !1, this);
        J(this.b, "change", this.Rg, !1, this);
        J(this.g, "spine_action_event", this.Ch, !1, this)
    };
    g.Sg = function () {
        var a = xr(this.c);
        a && (this.g.a = parseInt(a, 10))
    };
    g.Rg = function () {
        var a = xr(this.b);
        a && (this.g.m = parseInt(a, 10))
    };
    g.Ch = function () {
        yr(this.c, this.g.a.toString())
    };
    g.L = function (a) {
        M(this.l(), a)
    };

    function zr(a, b, c) {
        N.call(this, c);
        this.B = a;
        this.H(a);
        this.C = b;
        this.H(b);
        this.b = this.g = this.c = null;
        this.h = 220;
        this.m = null;
        this.j = !1
    }
    v(zr, N);
    zr.prototype.ba = function () {
        var a = this.a,
            b = a.F("div", "box-dicom-splitpane");
        this.c = a.F("div", "box-dicom-splitpane-left");
        P(this.B, this.c);
        b.appendChild(this.c);
        this.g = a.F("div", "box-dicom-splitpane-right");
        P(this.C, this.g);
        b.appendChild(this.g);
        this.b = a.F("div", "box-dicom-splitpane-handle");
        b.appendChild(this.b);
        this.R(b)
    };
    zr.prototype.R = function (a) {
        this.D = a
    };
    zr.prototype.P = function () {
        zr.A.P.call(this);
        this.m = new Ng(this.b, this.b, new $c(NaN, 0, NaN, 0));
        this.m.h = !0;
        J(this.m, "drag", this.w, !1, this)
    };
    zr.prototype.w = function (a) {
        var b = this.l();
        b && (b.getBoundingClientRect ? (b = vg(og, b), b = new Va(b.right - b.left, b.bottom - b.top)) : b = null, this.h = Math.max(150, Math.min(480, b.width - a.clientX)), Ar(this), L(this, a))
    };

    function Ar(a) {
        a.j ? a.c && (a.c.style.right = "0px") : (a.c && (a.c.style.right = a.h + 8 + "px"), a.g && (a.g.style.width = a.h - 8 + "px"), a.b && (a.b.style.right = a.h - 8 + "px"))
    };

    function Br(a) {
        a = Ee(document, a);
        a.innerHTML = ""
    }

    function wr(a, b, c) {
        var d = document.createElement("option");
        d.value = b;
        d.text = c;
        a.appendChild(d)
    }

    function xr(a) {
        if (a) {
            var b = a.selectedIndex;
            a = 0 > b ? null : a.options[b]
        } else a = null;
        return a ? a.value : null
    }

    function Cr(a) {
        for (var b = [], c = 0; c < a.options.length; c++) b[c] = [], b[c][0] = a.options[c].text, b[c][1] = a.options[c].value;
        for (b.sort(); 0 < a.options.length;) a.options[0] = null;
        for (c = 0; c < b.length; c++) {
            var d = new Option(b[c][0], b[c][1]);
            a.options[c] = d
        }
    }

    function yr(a, b) {
        for (var c = 0; c < a.options.length; c++)
            if (a.options[c].value == b) {
                a.options[c].selected = !0;
                break
            }
    }

    function Dr(a, b, c) {
        for (var d = !1, e = "", f = a.length - 1; 0 <= f; f--) a.options[f].value == c && (d = !0, e = a.options[f].text, a.remove(f));
        d && wr(b, c, e)
    }

    function Er(a, b, c) {
        var d = a.options[b].value,
            e = a.options[b].text;
        a.options[b].value = a.options[c].value;
        a.options[b].text = a.options[c].text;
        a.options[c].value = d;
        a.options[c].text = e
    }

    function Fr(a, b) {
        var c = a.F("canvas", {
            width: 512,
            height: 512
        });
        b && (c.style.position = "absolute", c.style.top = "0", c.style.left = "0");
        return c
    }

    function Gr(a) {
        return (window.devicePixelRatio || 1) / (a.h || a.b || a.c || a.g || a.a || 1)
    }

    function Hr(a) {
        a = window.atob(a.split(",")[1]);
        for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
        return new Blob([b], {
            type: "image/png"
        })
    }

    function tq(a, b, c, d) {
        d = d || Be();
        var e = a;
        b && (e = [d.F("div", "goog-menuitem-accel", b), d.a.createTextNode(String(a))]);
        return new Q(e, c)
    }
    ta("box.dicom.viewer.util.escapeFrames", function () {
        try {
            var a;
            if (!(a = window.top.location === window.location)) {
                var b = Xd(window.top.location.toString()),
                    c = b.b;
                a = !($o(b.c) && 0 == c.lastIndexOf("/services/", 0))
            }
            if (a) return !1;
            var d = window.top.location,
                e = Xd(window.document.location.href),
                f = e.b,
                h = D(e, "box_file_id") || D(e, "fileId"),
                k = D(e, "box_file_name") || D(e, "fileName");
            "/index.php" === f && h && (Zd(e.a, "rm"), Zd(e.a, "box_file_id"), Zd(e.a, "box_file_name"), Zd(e.a, "fileId"), Zd(e.a, "fileName"), e.b = k ? "/dicom_viewer/" + z(h) +
                "/" + z(k) : "/dicom_viewer/" + z(h));
            d.href = e.toString();
            return !0
        } catch (l) {
            return !1
        }
    });

    function $o(a) {
        return ub(a, ".box.com") || ub(a, ".inside-box.net")
    };

    function Ir(a) {
        Gj.call(this);
        this.c = a;
        this.G = this.h = null;
        P(this, a.l());
        Mj(this)
            .style.width = "800px";
        Lj(this, "Hanging Protocol Manager");
        Wj(this);
        a = this.Ea();
        a.innerHTML = '<div class="box-dicom-hpd-container"><table class="box-dicom-hpd-table"><tbody><tr><td class="box-dicom-hpd-left" valign="top" align="center"><select class="box-dicom-hpd-select" size="27"><option>Default</option></select></td><td class="box-dicom-hpd-right" valign="top" align="center"><div class="box-dicom-hpd-form"><table><tr><td>Name</td><td>&nbsp;</td><td><input type="text" id="box-dicom-hpd-name"></td></tr><tr><td>Modality</td><td><input type="checkbox" id="box-dicom-hpd-modality-enabled"></td><td><input type="text" id="box-dicom-hpd-modality"></td></tr><tr><td>Body Part</td><td><input type="checkbox" id="box-dicom-hpd-body-part-enabled"></td><td><input type="text" id="box-dicom-hpd-body-part"></td></tr><tr><td>Study Description</td><td><input type="checkbox" id="box-dicom-hpd-study-description-enabled"></td><td><input type="text" id="box-dicom-hpd-study-description"></td></tr><tr><td>Institution</td><td><input type="checkbox" id="box-dicom-hpd-institution-name-enabled"></td><td><input type="text" id="box-dicom-hpd-institution-name"></td></tr><tr><td colspan="3"><div class="box-dicom-hpd-viewers"></div></td></tr><tr><td>Series Description</td><td><input type="checkbox" id="box-dicom-hpd-series-description-enabled"></td><td><input type="text" id="box-dicom-hpd-series-description"></td></tr><tr><td>Window Width</td><td><input type="checkbox" id="box-dicom-hpd-window-width-enabled"></td><td><input type="text" id="box-dicom-hpd-window-width"></td></tr><tr><td>Window Center</td><td><input type="checkbox" id="box-dicom-hpd-window-center-enabled"></td><td><input type="text" id="box-dicom-hpd-window-center"></td></tr><tr><td>Zoom</td><td><input type="checkbox" id="box-dicom-hpd-zoom-enabled"></td><td><input type="text" id="box-dicom-hpd-zoom"></td></tr><tr><td>Inverted</td><td><input type="checkbox" id="box-dicom-hpd-inverted-enabled"></td><td>&nbsp;</td></tr><tr><td>Horizontal Flip</td><td><input type="checkbox" id="box-dicom-hpd-horizontal-flip-enabled"></td><td>&nbsp;</td></tr><tr><td>Vertical Flip</td><td><input type="checkbox" id="box-dicom-hpd-vertical-flip-enabled"></td><td>&nbsp;</td></tr></table></div></td></tr><tr><td valign="top" align="center"><input class="box-dicom-hpd-button box-dicom-hpd-button-up" type="button" value="Up"><input class="box-dicom-hpd-button box-dicom-hpd-button-down" type="button" value="Down"><input class="box-dicom-hpd-button box-dicom-hpd-button-capture" type="button" value="Capture"></td><td valign="top" align="right" style="padding-right:20px;"><input class="box-dicom-hpd-button box-dicom-hpd-button-save" type="button" value="Save"><input class="box-dicom-hpd-button box-dicom-hpd-button-delete" type="button" value="Delete"></td></tr></tbody></table></div>'.toString();
        a.style.padding = "0";
        a.style.height = "600px";
        Jr(this);
        J(a.querySelector(".box-dicom-hpd-select"), "change", this.ag, !1, this);
        J(a.querySelector(".box-dicom-hpd-select"), "dblclick", this.cg, !1, this);
        J(a.querySelector(".box-dicom-hpd-button-capture"), "click", this.Qg, !1, this);
        J(a.querySelector(".box-dicom-hpd-viewers"), "click", this.Lh, !1, this);
        J(a.querySelector(".box-dicom-hpd-button-save"), "click", this.zh, !1, this);
        J(a.querySelector(".box-dicom-hpd-button-delete"), "click", this.bg, !1, this)
    }
    v(Ir, Gj);

    function Jr(a) {
        var b = Y(a, ".box-dicom-hpd-select");
        Br(b);
        a = Kr(a.c.b);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            wr(b, d.na()
                .toString(), d.j + " (" + d.na() + ")")
        }
    }
    g = Ir.prototype;
    g.ag = function () {
        var a = Y(this, ".box-dicom-hpd-select");
        this.h = Lr(this.c.b, parseInt(xr(a), 10));
        this.G = null;
        Mr(this)
    };
    g.cg = function () {
        var a = Y(this, ".box-dicom-hpd-select"),
            b = this.c.b;
        if (a = Lr(b, parseInt(xr(a), 10))) this.L(!1), Nr(b, a)
    };
    g.Qg = function () {
        this.h = this.c.b.cc();
        Mr(this)
    };
    g.Lh = function (a) {
        Or(this);
        var b = this.h;
        if (b) {
            a = a.target;
            var c = parseInt(El(a, "viewer"), 10);
            0 > c || c >= b.a.length || !(b = b.a[c]) || (a = parseInt(El(a, "index"), 10), 0 > a || a >= b.a.length || !(b = b.a[a])) || (Pr(this, "#box-dicom-hpd-series-description-enabled", null !== b.c), Pr(this, "#box-dicom-hpd-window-width-enabled", null !== b.b), Pr(this, "#box-dicom-hpd-window-center-enabled", null !== b.a), Pr(this, "#box-dicom-hpd-zoom-enabled", null !== b.g), Pr(this, "#box-dicom-hpd-inverted-enabled", !!b.h), Pr(this, "#box-dicom-hpd-horizontal-flip-enabled", !!b.j), Pr(this, "#box-dicom-hpd-vertical-flip-enabled", !!b.m), Qr(this, "#box-dicom-hpd-series-description", b.c), Qr(this, "#box-dicom-hpd-window-width", b.b ? b.b.toFixed() : ""), Qr(this, "#box-dicom-hpd-window-center", b.a ? b.a.toFixed() : ""), Qr(this, "#box-dicom-hpd-zoom", b.g ? b.g.toFixed(4) : ""), this.G = b)
        }
    };
    g.zh = function () {
        if (this.h) {
            var a = Y(this, "#box-dicom-hpd-name")
                .value;
            if (a) {
                var b = this.h;
                b.j = a;
                Y(this, "#box-dicom-hpd-modality-enabled")
                    .checked ? (a = Y(this, "#box-dicom-hpd-modality")
                        .value, b.c = a) : b.c = null;
                Y(this, "#box-dicom-hpd-body-part-enabled")
                    .checked ? (a = Y(this, "#box-dicom-hpd-body-part")
                        .value, b.b = a) : b.b = null;
                Y(this, "#box-dicom-hpd-study-description-enabled")
                    .checked ? (a = Y(this, "#box-dicom-hpd-study-description")
                        .value, b.h = a) : b.h = null;
                Y(this, "#box-dicom-hpd-institution-name-enabled")
                    .checked ? (a =
                        Y(this, "#box-dicom-hpd-institution-name")
                        .value, b.g = a) : b.g = null;
                if (a = this.G) {
                    if (Y(this, "#box-dicom-hpd-series-description-enabled")
                        .checked) {
                        var c = Y(this, "#box-dicom-hpd-series-description")
                            .value;
                        a.c = c
                    } else a.c = null;
                    Y(this, "#box-dicom-hpd-window-width-enabled")
                        .checked ? (c = Rr(this, "#box-dicom-hpd-window-width"), a.b = c) : a.b = null;
                    Y(this, "#box-dicom-hpd-window-center-enabled")
                        .checked ? (c = Rr(this, "#box-dicom-hpd-window-center"), a.a = c) : a.a = null;
                    Y(this, "#box-dicom-hpd-zoom-enabled")
                        .checked ? (c = Rr(this, "#box-dicom-hpd-zoom"),
                            a.g = c) : a.g = null;
                    c = Y(this, "#box-dicom-hpd-inverted-enabled")
                        .checked;
                    a.h = c;
                    c = Y(this, "#box-dicom-hpd-horizontal-flip-enabled")
                        .checked;
                    a.j = c;
                    c = Y(this, "#box-dicom-hpd-vertical-flip-enabled")
                        .checked;
                    a.m = c
                }
                a = this.c.b;
                c = Kr(a);
                b.m = c.length + 1;
                c.push(b);
                Ap(a.b, c);
                a.w = c;
                Jr(this)
            } else W("Please enter a Name", this.c.a)
        } else W("Please select a hanging protocol.", this.c.a)
    };
    g.bg = function () {
        if (this.h) {
            var a = this.c.b,
                b = this.h,
                c = Kr(a);
            Ub(c, b);
            Ap(a.b, c);
            a.w = c;
            Jr(this)
        } else W("Please select a hanging protocol.", this.c.a)
    };

    function Sr(a) {
        Pr(a, "#box-dicom-hpd-modality-enabled", !1);
        Pr(a, "#box-dicom-hpd-body-part-enabled", !1);
        Pr(a, "#box-dicom-hpd-study-description-enabled", !1);
        Pr(a, "#box-dicom-hpd-institution-name-enabled", !1);
        Qr(a, "#box-dicom-hpd-modality", "");
        Qr(a, "#box-dicom-hpd-body-part", "");
        Qr(a, "#box-dicom-hpd-study-description", "");
        Qr(a, "#box-dicom-hpd-institution-name", "");
        Y(a, ".box-dicom-hpd-viewers")
            .innerHTML = "";
        Or(a)
    }

    function Or(a) {
        Pr(a, "#box-dicom-hpd-series-description-enabled", !1);
        Pr(a, "#box-dicom-hpd-window-width-enabled", !1);
        Pr(a, "#box-dicom-hpd-window-center-enabled", !1);
        Pr(a, "#box-dicom-hpd-zoom-enabled", !1);
        Pr(a, "#box-dicom-hpd-inverted-enabled", !1);
        Pr(a, "#box-dicom-hpd-horizontal-flip-enabled", !1);
        Pr(a, "#box-dicom-hpd-vertical-flip-enabled", !1);
        Qr(a, "#box-dicom-hpd-series-description", "");
        Qr(a, "#box-dicom-hpd-window-width", "");
        Qr(a, "#box-dicom-hpd-window-center", "");
        Qr(a, "#box-dicom-hpd-zoom", "")
    }

    function Mr(a) {
        Sr(a);
        var b = a.h;
        if (b && (Pr(a, "#box-dicom-hpd-modality-enabled", null !== b.c), Pr(a, "#box-dicom-hpd-body-part-enabled", null !== b.b), Pr(a, "#box-dicom-hpd-study-description-enabled", null !== b.h), Pr(a, "#box-dicom-hpd-institution-name-enabled", null !== b.g), Qr(a, "#box-dicom-hpd-name", b.j), Qr(a, "#box-dicom-hpd-modality", b.c), Qr(a, "#box-dicom-hpd-body-part", b.b), Qr(a, "#box-dicom-hpd-study-description", b.h), Qr(a, "#box-dicom-hpd-institution-name", b.g), b = a.h)) {
            for (var c = ["<table><tr>"], d = 0; d < b.a.length; d++) {
                c.push('<td class="box-dicom-hpd-viewers-monitor"><table>');
                for (var e = b.a[d], f = 0, h = 0; h < e.c; h++) {
                    c.push("<tr>");
                    for (var k = 0; k < e.b; k++) c.push('<td class="box-dicom-hpd-viewers-control"'), c.push(' data-viewer="' + d + '"'), c.push(' data-row="' + h + '"'), c.push(' data-column="' + k + '"'), c.push(' data-index="' + f + '">'), c.push((f + 1)
                        .toString()), c.push("</td>"), f++;
                    c.push("</tr>")
                }
                c.push("</table></td>")
            }
            c.push("</tr></table>");
            Y(a, ".box-dicom-hpd-viewers")
                .innerHTML = c.join("")
        }
    }

    function Qr(a, b, c) {
        Y(a, b)
            .value = c || ""
    }

    function Rr(a, b) {
        var c = Y(a, b)
            .value;
        return c ? parseFloat(c) : null
    }

    function Pr(a, b, c) {
        Y(a, b)
            .checked = c
    }

    function Y(a, b) {
        return a.Ea()
            .querySelector(b)
    }
    g.L = function (a) {
        Sr(this);
        Ir.A.L.call(this, a)
    };

    function Tr(a) {
        var b = a.a;
        this.a = a;
        this.b = Fr(b, !0);
        this.bd = this.b.getContext("2d");
        this.g = this.c = 512;
        this.h = Gr(this.bd);
        this.j = !1
    }
    Tr.prototype.L = function (a) {
        M(this.b, a)
    };
    Tr.prototype.Na = function (a, b) {
        this.c = a;
        this.g = b;
        this.b.width = this.h * a;
        this.b.height = this.h * b;
        this.b.style.width = a + "px";
        this.b.style.height = b + "px"
    };

    function Ur(a, b, c) {
        a.j && (c.fillStyle = "rgba(255, 255, 255, 0.75)", c.fillRect(0, 0, b.width, b.height));
        a: if (!a.a.Wa() && tp(a.a.b.b) && (b = Vr(a.a))) {
            var d = a.a.b.m;
            if (d && Wr(d, Z(a.a))) {
                var e = d.c;
                if (e) {
                    for (d = 0; 4 > d; d++)
                        if (!e[d]) break a;
                    var d = Ao(e),
                        f = Ao(b),
                        h = fo(d, f),
                        k = Math.abs(h.v()),
                        l = Math.abs(h.o()),
                        p = Math.abs(Xn(h));
                    if (isNaN(k) || isNaN(l) || isNaN(p) || 1E-8 > k + l + p) d = null;
                    else {
                        var m = 0,
                            m = k > l ? k > p ? 1 : 3 : l > p ? 2 : 3,
                            k = -go(d, e[0]),
                            l = -go(f, b[0]),
                            e = new Wn(4, 1);
                        U(e, 3, 0, 1);
                        switch (m) {
                        case 1:
                            U(e, 1, 0, (l * Xn(d) - k * Xn(f)) / h.v());
                            U(e,
                                2, 0, (k * f.o() - l * d.o()) / h.v());
                            break;
                        case 2:
                            U(e, 0, 0, (k * Xn(f) - l * Xn(d)) / h.o());
                            U(e, 2, 0, (l * d.v() - k * f.v()) / h.o());
                            break;
                        case 3:
                            U(e, 0, 0, (l * d.o() - k * f.o()) / Xn(h)), U(e, 1, 0, (k * f.v() - l * d.v()) / Xn(h))
                        }
                        d = [e, Zn(e, h)];
                        f = [];
                        for (h = 0; 4 > h; h++) {
                            var m = d,
                                l = [b[h], b[(h + 1) % 4]],
                                e = $n(m[1], m[0]),
                                k = $n(l[1], l[0]),
                                l = $n(m[0], l[0]),
                                r = Math.abs(e.v()) + Math.abs(k.v()),
                                t = Math.abs(e.o()) + Math.abs(k.o()),
                                x = Math.abs(Xn(e)) + Math.abs(Xn(k)),
                                y = p = 0;
                            r < t ? r < x ? (p = 1, y = 2) : (p = 0, y = 1) : t < x ? (p = 0, y = 2) : (p = 0, y = 1);
                            r = zo(e, k, p, y);
                            1E-8 > Math.abs(r) ? e = null : (t = zo(e,
                                l, p, y) / r, e = 0 > t || 1 < t ? null : Zn(m[0], ao(e, zo(k, l, p, y) / r)));
                            e && f.push(e)
                        }
                        d = 2 === f.length ? f : null
                    }
                    d && 2 === d.length && (b = Do(a.a, d[0])) && (d = Do(a.a, d[1])) && (c.strokeStyle = yp(a.a.b.b), c.lineWidth = 2, c.beginPath(), c.moveTo(b.v(), b.o()), c.lineTo(d.v(), d.o()), c.closePath(), c.stroke())
                }
            }
        }(b = a.a.b.m) && (d = b.b) && Wr(b, Z(a.a)) && (b = Do(a.a, d)) && (c.strokeStyle = yp(a.a.b.b), c.lineWidth = 4, c.beginPath(), c.moveTo(b.v() - 8, b.o() - 8), c.lineTo(b.v() + 8, b.o() + 8), c.stroke(), c.closePath(), c.beginPath(), c.moveTo(b.v() + 8, b.o() - 8), c.lineTo(b.v() -
            8, b.o() + 8), c.stroke(), c.closePath());
        if (d = Hq(a.a))
            if (b = Z(a.a))
                for (d = d.c, f = 0; f < d.length; f++) Pl(d[f], a.a) && d[f].Aa(c, a.a, b);
        if (qp(a.a.b.b) && (f = Z(a.a))) {
            d = b = 5;
            c.fillStyle = zp(a.a.b.b, "overlayColor", "#bbb");
            c.textBaseline = "top";
            c.textAlign = "left";
            c.font = 'normal 12px Lato, "Helvetica Neue", Helvetica, Arial, sans-serif';
            e = (h = (h = f.T("00100010")) ? new Ho(h) : null) ? Jo(h) : "";
            h = Bp(a.a.b.b);
            m = [];
            m.push(e);
            m.push("\n");
            for (e = 0; e < h.length; e++) k = h[e], m.push(Rm[k]), m.push(": "), m.push(f.T(k)), m.push("\n");
            T(c, m.join(""),
                b, d);
            c.textBaseline = "top";
            c.textAlign = "right";
            b = a.c - 5;
            d = 5;
            (f = a.a.j) && (d += T(c, "W " + Math.round(f.g) + " / C " + Math.round(f.b), b, d));
            d += T(c, "Frame: " + (Xr(a.a) + 1)
                .toString() + " / " + a.a.B.toString(), b, d);
            d += T(c, a.a.C.ld(), b, d);
            if (f = a.a.g)(h = f.ka) && (h = h.hands) && 0 < h.length && (d += T(c, h[0].grabStrength.toFixed(4), b, d)), (f = f.G) && T(c, f[0].toFixed(1) + ", " + f[1].toFixed(1) + ", " + f[2].toFixed(1), b, d)
        }
        b = a.c;
        d = a.g;
        f = Math.max(5, .04 * b);
        h = Math.max(5, .04 * d);
        m = $p(a.a, 0, 0);
        e = $p(a.a, b, 0);
        k = $p(a.a, 0, d);
        m && e && k && (c.fillStyle = zp(a.a.b.b,
            "orientationColor", "#888"), c.font = 'normal 13px Lato, "Helvetica Neue", Helvetica, Arial, sans-serif', c.textBaseline = "top", c.textAlign = "center", T(c, Yr($n(m, k)), b / 2, h), c.textBaseline = "top", c.textAlign = "left", T(c, Yr($n(m, e)), f, d / 2), c.textBaseline = "top", c.textAlign = "right", T(c, Yr($n(e, m)), b - f, d / 2), c.textBaseline = "bottom", c.textAlign = "center", T(c, Yr($n(k, m)), b / 2, d - h));
        if (!(0 >= a.a.B)) {
            d = a.c - 6;
            h = 2;
            b = a.g - 4 - 2;
            m = d / a.a.B;
            f = Math.max(1, Math.ceil(m));
            c.lineWidth = 1;
            c.fillStyle = "#000";
            c.fillRect(3, b, d, 4);
            for (e = 0; e <
                a.a.B; e++)(h = Z(a.a, e)) && Qn(h) && (h = 3 + Math.floor(e * m), c.fillStyle = "#3b3b3b", c.fillRect(h, b, f, 4));
            h = 3 + Math.floor(Xr(a.a) * m);
            m = Math.max(3, h - 1);
            d = Math.min(3 + d, h + f + 1);
            c.fillStyle = "#22a7f0";
            d = d - m;
            c.beginPath();
            c.moveTo(m + 3, b);
            c.lineTo(m + d - 3, b);
            c.quadraticCurveTo(m + d, b, m + d, b + 3);
            c.lineTo(m + d, b + 4 - 3);
            c.quadraticCurveTo(m + d, b + 4, m + d - 3, b + 4);
            c.lineTo(m + 3, b + 4);
            c.quadraticCurveTo(m, b + 4, m, b + 4 - 3);
            c.lineTo(m, b + 3);
            c.quadraticCurveTo(m, b, m + 3, b);
            c.closePath();
            c.fill()
        }(h = Z(a.a)) && !Qn(h) && (b = h.m, null === b ? b = null : (d = Lm(h)) ?
            (f = h.ia("00280008") || 1, h = "US" === h.T("00080060") ? 3 : 2, b = b / (d.a * d.b * f * h)) : b = null, null !== b && (c.fillStyle = "#fff", c.font = "normal 100px sans-serif", c.textBaseline = "middle", c.textAlign = "center", c.fillText(Math.min(Math.round(100 * b), 99) + "%", a.c / 2, a.g / 2)));
        !Zr() && a.a.Wa() && (c.strokeStyle = "#22A7F0", c.lineWidth = 3, c.strokeRect(0, 0, a.c, a.g))
    }

    function T(a, b, c, d) {
        b = b.split("\n");
        for (var e = a.fillStyle, f = 0; f < b.length; f++) a.fillStyle = "#000", a.fillText(b[f], c + 1, d + 1), a.fillStyle = e, a.fillText(b[f], c, d), d += 18;
        return 18
    }

    function Yr(a) {
        var b = R(a, 0, 0),
            c = R(a, 1, 0),
            d = R(a, 2, 0);
        a = Math.sqrt(b * b + c * c + d * d);
        if (1E-4 > a) return "";
        b /= a;
        c /= a;
        d /= a;
        a = 0 > b ? "R" : "L";
        for (var e = 0 > c ? "A" : "P", f = 0 > d ? "F" : "H", b = Math.abs(b), c = Math.abs(c), d = Math.abs(d), h = "", k = 0; 3 > k; k++)
            if (.25 < b && b > c && b > d) h += a, b = 0;
            else if (.25 < c && c > b && c > d) h += e, c = 0;
        else if (.25 < d && d > b && d > c) h += f, d = 0;
        else break;
        return h
    };

    function $r(a) {
        xk.call(this, a.a);
        this.b = a;
        as(this)
    }
    v($r, xk);

    function as(a) {
        var b = a.b.b,
            c = tq("Stack", "S");
        J(c, "action", function () {
            Gp(b.g, "stack")
        });
        a.H(c, !0);
        c = tq("Window", "W");
        J(c, "action", function () {
            Gp(b.g, "windowLevel")
        });
        a.H(c, !0);
        c = tq("Pan", "P");
        J(c, "action", function () {
            Gp(b.g, "pan")
        });
        a.H(c, !0);
        c = tq("Zoom", "Z");
        J(c, "action", function () {
            Gp(b.g, "zoom")
        });
        a.H(c, !0);
        if (c = a.b.g) {
            var d = new $k("Annotate");
            Yk(d, new rq(c));
            a.H(d, !0)
        }
        a.H(new tk, !0);
        c = new Q("Key Image");
        J(c, "action", a.b.b.fd, !1, a.b.b);
        a.H(c, !0);
        c = new Q("Key Image (all views)");
        J(c, "action", a.b.b.Uf, !1, a.b.b);
        a.H(c, !0);
        a.H(new tk, !0);
        c = new Q("Actual Size (1:1)");
        J(c, "action", a.b.zi, !1, a.b);
        d = new Q("Scale To Fit");
        J(d, "action", a.b.Ai, !1, a.b);
        var e = new Q("Overlays");
        J(e, "action", a.b.b.rc, !1, a.b.b);
        var f = new Q("Localizer Override");
        J(f, "action", a.b.b.Vf, !1, a.b.b);
        var h = new Q("Remove last annotation");
        J(h, "action", a.b.b.he, !1, a.b.b);
        var k = new Q("Remove all annotations");
        J(k, "action", a.b.b.ni, !1, a.b.b);
        var l = new Q("Print to console");
        J(l, "action", a.b.mi, !1, a.b);
        a.H(c, !0);
        a.H(d, !0);
        a.H(new tk, !0);
        a.H(e, !0);
        a.H(f, !0);
        a.H(new tk, !0);
        a.H(h, !0);
        a.H(k, !0);
        a.H(new tk, !0);
        a.H(l, !0);
        a.b.g ? P(a, a.b.g.l()) : P(a, void 0)
    };

    function bs() {
        K.call(this)
    }
    v(bs, K);

    function cs() {
        K.call(this);
        this.xb = this.m = this.aa = this.hb = this.W = null;
        this.c = this.g = 512;
        this.b = 1;
        this.a = [];
        this.w = this.j = 0;
        this.h = !1
    }
    v(cs, bs);
    g = cs.prototype;
    g.ld = function () {
        return "Binary"
    };
    g.jd = function (a, b) {
        this.W = Fr(a);
        this.hb = this.W.getContext("2d");
        this.aa = null;
        this.m = Fr(a, !0);
        this.xb = this.m.getContext("2d");
        b.appendChild(this.m);
        this.b = Gr(this.xb)
    };
    g.Na = function (a, b) {
        this.g = a;
        this.c = b;
        this.m && (this.m.width = this.b * a, this.m.height = this.b * b, this.m.style.width = a + "px", this.m.style.height = b + "px")
    };
    g.L = function (a) {
        this.m && M(this.m, a)
    };
    g.Pd = function (a, b) {
        Qn(a) || (J(a, "dicomprogress", this.Zf, !1, this), J(a, "dicomload", this.Yf, !1, this), J(a, "dicomunload", this.$f, !1, this), to(a, tn(), b))
    };
    g.kd = function (a, b, c, d) {
        var e = this.m,
            f = this.xb;
        if (e && f)
            if (a && Qn(a) && c) {
                var h = Lm(a);
                if (h) {
                    e = h.a;
                    h = h.b;
                    if (this.W.width !== e || this.W.height !== h) this.W.width = e, this.W.height = h, this.aa = null;
                    null === this.aa && (this.aa = this.hb.getImageData(0, 0, e, h));
                    var e = Math.round(c.b - .5),
                        h = Math.round(c.g - 1),
                        k = a.c.Da(),
                        l = k.length;
                    if (!this.a || this.a.length !== l || this.j !== e || this.w !== h || this.h !== c.a) {
                        this.a && this.a.length === l || (this.a = Array(l));
                        for (var p = e - .5 * h, m = e + .5 * h, r = 0; r < l; r++) {
                            var t = k[r];
                            this.a[r] = t <= p ? 0 : t > m ? 255 : Math.floor(255 *
                                ((t - e) / h + .5) + 0)
                        }
                        if (c.a)
                            for (r = 0; r < this.a.length; r++) this.a[r] = 255 - this.a[r];
                        this.j = e;
                        this.w = h;
                        this.h = c.a
                    }
                    c = this.aa;
                    if (a.C)
                        for (e = so(a), h = xm(Lm(a)), b *= h, h = b + h, k = 0, c = c.data, l = 0, k = a.C, a = k.c, p = k.b, m = k.a; b < h; b++) k = e[b], c[l++] = this.a[a[k]], c[l++] = this.a[p[k]], c[l++] = this.a[m[k]], c[l++] = 255;
                    else if (a.N)
                        for (e = so(a), a = 3 * xm(Lm(a)), b *= a, a = b + a, c = c.data, h = 0; b < a;) c[h++] = this.a[e[b++]], c[h++] = this.a[e[b++]], c[h++] = this.a[e[b++]], c[h++] = 255;
                    else if (e = so(a), h = xm(Lm(a)), a = b * h, b = a + h, h = 0, c = c.data, k = 0, this.G)
                        for (; a < b; a++) h =
                            255 - this.a[e[a]], c[k++] = h, c[k++] = h, c[k++] = h, c[k++] = 255;
                    else
                        for (; a < b; a++) h = this.a[e[a]], c[k++] = h, c[k++] = h, c[k++] = h, c[k++] = 255;
                    this.hb.putImageData(this.aa, 0, 0);
                    f.save();
                    f.scale(this.b, this.b);
                    f.clearRect(0, 0, this.g, this.c);
                    f.setTransform(R(d, 0, 0) * this.b, R(d, 1, 0) * this.b, R(d, 0, 1) * this.b, R(d, 1, 1) * this.b, R(d, 0, 2) * this.b, R(d, 1, 2) * this.b);
                    f.drawImage(this.W, 0, 0);
                    f.restore()
                }
            } else f.clearRect(0, 0, e.width, e.height)
    };
    g.Zf = function (a) {
        L(this, a)
    };
    g.Yf = function (a) {
        L(this, a)
    };
    g.$f = function (a) {
        L(this, a)
    };

    function ds() {
        K.call(this);
        this.b = this.a = null
    }
    v(ds, bs);
    g = ds.prototype;
    g.ld = function () {
        return "Simple"
    };
    g.jd = function (a, b) {
        this.a = df(a, "div");
        this.a.style.position = "absolute";
        this.a.style.top = "0";
        this.a.style.left = "0";
        b.appendChild(this.a)
    };
    g.Na = function () {};
    g.L = function (a) {
        this.a && M(this.a, a)
    };
    g.Pd = function (a) {
        if (!a.j) {
            for (var b = a.ia("00280008") || 1, c = Array(b), d = 0; d < b; d++) {
                var e = document.createElement("img");
                e.style.position = "absolute";
                e.style.top = "0px";
                e.style.left = "0px";
                e.style.display = "none";
                e.style.maxWidth = "none";
                e.style.maxHeight = "none";
                J(e, "load", this.ig, !1, this);
                e.src = oo(a, d);
                this.a.appendChild(e);
                c[d] = e
            }
            a.j = c
        }
    };
    g.kd = function (a, b, c, d) {
        this.b && (this.b.style.display = "none", this.b = null);
        if ((b = a.j ? a.j[b || 0] : null) && b.complete) {
            var e = c = 0;
            Lm(a) ? (c = vm(Lm(a)), e = wm(Lm(a))) : (c = b.naturalWidth, e = b.naturalHeight);
            a = es(d, 0, 0);
            c = es(d, c, e);
            a && c && (d = c.v() - a.v(), c = c.o() - a.o(), b.style.left = Math.round(a.v()) + "px", b.style.top = Math.round(a.o()) + "px", b.style.width = Math.round(d) + "px", b.style.height = Math.round(c) + "px", b.style.display = "block", this.b = b)
        }
    };

    function es(a, b, c) {
        if (!a) return null;
        var d = new Wn(3, 1, !1);
        U(d, 0, 0, b);
        U(d, 1, 0, c);
        U(d, 2, 0, 1);
        return jo(ao(a, d))
    }
    g.ig = function () {
        L(this, new im("dicomload"))
    };

    function fs(a, b) {
        N.call(this, b ? b.a : null);
        this.b = a;
        this.g = b
    }
    v(fs, N);
    fs.prototype.M = function () {
        this.g = this.b = null;
        fs.A.M.call(this)
    };

    function gs(a) {
        fs.call(this, a.b, a);
        this.c = null
    }
    v(gs, fs);
    gs.prototype.ba = function () {
        this.R(this.a.F("div", {
            style: "display:none"
        }))
    };
    gs.prototype.R = function (a) {
        this.D = a;
        a.id = "box-dicom-grid-menu";
        this.c = Array(4);
        for (var b = 0; 4 > b; b++) {
            this.c[b] = Array(4);
            for (var c = 0; 4 > c; c++) {
                var d = hs(this, c, b);
                a.appendChild(d);
                this.c[b][c] = d
            }
        }
        is(this, 1, 1)
    };

    function hs(a, b, c) {
        var d = a.a.F("div", {
                id: "box-dicom-grid-menu-" + b + "-" + c,
                "class": "box-dicom-grid-cell",
                style: "left:" + (3 + 30 * b) + "px;top:" + (3 + 30 * c) + "px;"
            }),
            e = c + 1,
            f = b + 1;
        J(d, "mousemove", function () {
            is(a, f, e)
        }, !1, a);
        J(d, "click", function () {
            is(a, f, e);
            var b = a.g;
            b.c && js(b.c, e, f);
            a.L(!1)
        }, !1, a);
        return d
    }

    function is(a, b, c) {
        1 <= b ? 4 < b && (b = 4) : b = 1;
        1 <= c ? 4 < c && (c = 4) : c = 1;
        for (var d = 0; 4 > d; d++)
            for (var e = 0; 4 > e; e++) uc(a.c[d][e], "selected", e < b && d < c)
    }
    gs.prototype.L = function (a) {
        M(this.l(), a)
    };

    function ks(a) {
        fs.call(this, a.b, a);
        this.j = this.C = this.w = this.h = this.m = null;
        this.G = [];
        this.B = null;
        this.N = this.c = !1
    }
    v(ks, fs);
    g = ks.prototype;
    g.ba = function () {
        this.R(df(this.a, "div"))
    };
    g.R = function (a) {
        this.D = a;
        a.id = "box-dicom-mic-dialog";
        var b = this.a,
            c = df(b, "div");
        c.id = "box-dicom-mic-dialog-background";
        a.appendChild(c);
        c = df(b, "div");
        c.id = "box-dicom-mic-dialog-title";
        c.innerHTML = "Microphone";
        a.appendChild(c);
        var d = df(b, "div");
        d.id = "box-dicom-mic-dialog-contents";
        a.appendChild(d);
        this.m = b.F("button", null, "Record");
        d.appendChild(this.m);
        this.h = b.F("button", null, "Play");
        d.appendChild(this.h);
        this.w = b.F("button", null, "Stop");
        d.appendChild(this.w);
        this.C = b.F("button", null, "Upload");
        d.appendChild(this.C);
        this.j = b.F("button", null, "Negative");
        d.appendChild(this.j);
        this.G = [this.m, this.h, this.w, this.C, this.j];
        this.B = b.F("span", {
            id: "box-dicom-mic-clock"
        }, "0:00");
        d.appendChild(this.B);
        b = Ie(ff(b) || window);
        new Ng(a, c, new $c(0, 0, b.width, b.height))
    };
    g.P = function () {
        ks.A.P.call(this);
        J(this.m, "click", this.yh, !1, this);
        J(this.h, "click", this.wh, !1, this);
        J(this.w, "click", this.Eh, !1, this);
        J(this.C, "click", this.Kh, !1, this);
        J(this.j, "click", this.sh, !1, this);
        var a = this;
        Recorder.initialize({
            swfSrc: "/static/ext/recorder.js-swf/recorder.swf",
            initialized: function () {
                a.c = !0;
                a.N && rr(a)
            }
        })
    };
    g.yh = function () {
        rr(this)
    };

    function rr(a) {
        if (a.c) {
            var b = a.B;
            ls(a);
            Recorder.record({
                start: function () {},
                progress: function (a) {
                    b.innerHTML = ms(a)
                }
            })
        } else a.N = !0
    }
    g.wh = function () {
        sr(this)
    };

    function sr(a) {
        if (a.c) {
            var b = a.B;
            ls(a);
            Recorder.play({
                progress: function (a) {
                    b.innerHTML = ms(a)
                }
            })
        }
    }
    g.Eh = function () {
        ls(this)
    };

    function ls(a) {
        if (a.c) try {
            Recorder.stop()
        } catch (b) {}
    }
    g.Kh = function () {
        tr(this)
    };

    function tr(a) {
        if (a.c) {
            ls(a);
            var b = a.b.a;
            b ? (b = b.w) ? (W("Uploading...", void 0, 6E5), ns(a, !1), b = "/api/attachments/" + po(b.a), Recorder.upload({
                url: b,
                audioParam: "attachments",
                params: {
                    status: "Dictated"
                },
                success: function () {
                    W("Recording saved successfully.");
                    ns(a, !0)
                }
            })) : W("No active study (Hint: click on the study that you want)") : W("No active study (Hint: click on the study that you want)")
        }
    }
    g.sh = function () {
        var a = this.b.a;
        if (a)
            if (a = a.w) {
                ns(this, !1);
                var a = "/api/negative/" + po(a.a),
                    b = this;
                Rh(a, function (a) {
                    a = a.target;
                    ci(a)
                        .ok ? W("Negative saved successfully.") : W("Error: " + bi(a));
                    ns(b, !0)
                }, "POST")
            } else W("No active study (Hint: click on the study that you want)");
        else W("No active study (Hint: click on the study that you want)")
    };

    function ns(a, b) {
        for (var c = 0; c < a.G.length; c++) {
            var d = a.G[c];
            d.enabled = b;
            d.style.color = b ? "#000" : "#888"
        }
    }

    function ms(a) {
        var b = Math.floor(a / 36E5),
            c = Math.floor(a / 6E4 % 60);
        a = Math.floor(a / 1E3 % 60);
        var d = [];
        0 < b && d.push(b);
        d.push(10 > c && 0 < b ? "0" + c : c);
        d.push(10 > a ? "0" + a : a);
        return d.join(":")
    }
    g.L = function (a) {
        M(this.l(), a)
    };

    function os(a, b) {
        fs.call(this, a.b, a);
        this.c = b || null;
        this.h = !0;
        this.j = new gs(a)
    }
    v(os, fs);
    ta("box.dicom.viewer.Toolbar.Buttons", {
        Annotate: 10,
        Grid: 20,
        Logo: 30,
        More: 40,
        Overlays: 50,
        Pan: 60,
        Separator: 70,
        Share: 80,
        Stack: 90,
        ThreeDCursor: 100,
        WindowLevel: 110,
        Worklist: 120,
        Zoom: 130
    });
    g = os.prototype;
    g.ba = function () {
        this.R(this.a.F("div"))
    };
    g.R = function (a) {
        os.A.R.call(this, a);
        rc(a, "goog-toolbar");
        pc(a, "box-dicom-viewer-toolbar");
        this.c || (this.c = Zr() ? [30, 70, 90, 110, 10] : [30, 70, 90, 110, 130, 60, 100, 10, 70, 20, 50, 40]);
        for (a = 0; a < this.c.length; a++) switch (this.c[a]) {
        case 10:
            var b = this.g,
                c = new rq(b);
            P(c, b.l());
            b = ps(this, "box-dicom-toolbar-icon box-dicom-toolbar-icon-annotate", "Annotate");
            c = new Kl(b, c, void 0, this.a);
            c.$a("Opens the annotations menu");
            this.H(c, !0);
            break;
        case 20:
            P(this.j, this.g.l());
            c = qs(this, "box-dicom-toolbar-icon box-dicom-toolbar-icon-grid",
                "Grid", "Open the grid menu");
            J(c, "action", this.ih, !1, this);
            break;
        case 30:
            var c = this.a,
                d = this.b,
                b = new Q("Back to folder");
            J(b, "action", d.Eg, !1, d);
            d = new uk;
            d.H(b, !0);
            c = c.F("div", "box-dicom-toolbar-logo");
            c = new Kl(c, d, void 0, this.a);
            c.$a("Box DICOM");
            this.H(c, !0);
            break;
        case 40:
            var e = this.b,
                f = this.g,
                c = new $k("View Mode");
            rs(this, c, "Auto", "");
            rs(this, c, "Binary", "binary");
            rs(this, c, "Simple", "simple");
            rs(this, c, "WebGL", "webgl");
            b = new Q("MultiMon");
            J(b, "action", e.li, !1, e);
            d = new Q("Full Screen");
            J(d, "action",
                f.xb, !1, f);
            var h = new Q("Hanging Protocol Manager");
            J(h, "action", f.si, !1, f);
            var k = new Q("Settings...");
            J(k, "action", f.vi, !1, f);
            f = new Q("Help");
            J(f, "action", e.Sh, !1, e);
            e = new uk;
            e.H(c, !0);
            e.H(b, !0);
            e.H(d, !0);
            e.H(h, !0);
            e.H(new tk, !0);
            e.H(k, !0);
            e.H(new tk, !0);
            e.H(f, !0);
            P(e, this.g.l());
            c = bl(c);
            P(c, this.g.l());
            c = ps(this, "box-dicom-toolbar-icon box-dicom-toolbar-icon-more", "More");
            c = new Kl(c, e, void 0, this.a);
            this.H(c, !0);
            break;
        case 50:
            c = qs(this, "box-dicom-toolbar-icon box-dicom-toolbar-icon-info", "Overlays",
                "Toggles the overlays");
            J(c, "action", this.vh, !1, this);
            break;
        case 60:
            ss(this, "pan", "Pan", "Pan the image");
            break;
        case 70:
            this.H(new yl, !0);
            break;
        case 90:
            ss(this, "stack", "Stack", "Browse the stack of images");
            break;
        case 100:
            ss(this, "magicX", "3D", "3D Cursor correlates the same point in different images");
            break;
        case 110:
            ss(this, "windowLevel", "Window", "Adjust the window/level contrast");
            break;
        case 130:
            ss(this, "zoom", "Zoom", "Zoom the image")
        }
        a = this.g;
        c = new Wi;
        this.H(c, !0);
        b = c.l();
        rc(b, "goog-container");
        rc(b,
            "goog-container-vertical");
        pc(b, "box-dicom-viewer-toolbar-right");
        Zr() || (b = new Aj("Share"), J(b, "action", a.wi, !1, a), c.H(b, !0));
        b = this.a.F("span");
        b.innerHTML = "&#8677;";
        b = new Aj(b);
        J(b, "action", a.vg, !1, a);
        c.H(b, !0);
        this.L(this.h)
    };

    function ss(a, b, c, d) {
        c = ts(a, "box-dicom-toolbar-icon box-dicom-toolbar-icon-" + b, c, d);
        var e = a.b;
        nq(e.g, c, b);
        J(c, "action", function () {
            Gp(e.g, b)
        })
    }
    g.ih = function (a) {
        if (a.target) {
            var b = this.j,
                c = a.target;
            a = b.l();
            c && (c = xg(c.l()), lg(a, c.left, c.top + c.height));
            b.L("none" == a.style.display)
        }
    };
    g.vh = function () {
        this.b.rc()
    };

    function qs(a, b, c, d) {
        b = ps(a, b, c);
        b = new tl(b);
        b.$a(d);
        a.H(b, !0);
        return b
    }

    function ts(a, b, c, d) {
        b = ps(a, b, c);
        b = new zl(b);
        b.$a(d);
        b.Jb &= -17;
        a.H(b, !0);
        return b
    }

    function ps(a, b, c) {
        a = a.a;
        return a.F("div", {
            "class": "box-dicom-toolbar-button"
        }, a.F("div", {
            "class": b
        }), a.F("div", {
            "class": "box-dicom-toolbar-caption"
        }, c))
    }
    g.M = function () {
        os.A.M.call(this)
    };
    g.P = function () {
        os.A.P.call(this)
    };
    g.ga = function () {
        os.A.ga.call(this)
    };

    function rs(a, b, c, d) {
        var e = a.b;
        a = new Q(c);
        J(a, "action", function () {
            if ("webgl" !== d || confirm("Are you sure you want to enable WebGL? WebGL can dramatically improve performance.  However, it is an experimental feature  and may not work on all browsers or images.")) {
                var a = Xd(window.location);
                D(a, "binary") && Zd(a.a, "binary");
                D(a, "simple") && Zd(a.a, "simple");
                D(a, "webgl") && Zd(a.a, "webgl");
                D(a, "viewmode") && Zd(a.a, "viewmode");
                e.j = d;
                Td(a, "viewmode", d);
                window.location.href = a.toString()
            }
        });
        fl(b, a)
    }
    g.L = function (a) {
        this.h = a;
        var b = this.l();
        b && (b.style.display = a ? "block" : "none")
    };

    function us(a, b) {
        fs.call(this, a, b);
        this.c = null
    }
    v(us, fs);

    function vs(a, b) {
        a.c && a.removeChild(a.c, !0);
        a.c = b;
        a.c && (a.H(a.c, !0), a.c.Na(a.l()
            .offsetWidth, a.l()
            .offsetHeight))
    }
    g = us.prototype;
    g.ba = function () {
        var a = Le("div", "box-dicom-viewcontrol-slot");
        this.R(a)
    };
    g.R = function (a) {
        this.D = a
    };
    g.P = function () {
        us.A.P.call(this)
    };

    function ws(a) {
        var b = a.g.c;
        b.C = b.C ? null : a;
        xs(b)
    }
    g.Na = function (a, b) {
        !this.Z || isNaN(a) || isNaN(b) || 0 > a || 0 > b || (ug(this.l(), a, b), this.c && this.c.Na(a, b))
    };
    g.nc = function (a) {
        M(this.l(), a);
        this.c && this.c.nc(a)
    };
    g.M = function () {
        this.c && (this.removeChild(this.c, !0), this.c = null);
        var a = this.l();
        a && (Ff(a), Qe(a));
        us.A.M.call(this)
    };

    function ys(a, b) {
        fs.call(this, a.b, a.g);
        this.h = b;
        this.j = null;
        this.c = new lk;
        this.w = null;
        this.B = this.m = 0
    }
    v(ys, fs);
    g = ys.prototype;
    g.ba = function () {
        var a = this.a.F("div", "box-dicom-worklist-series");
        this.R(a)
    };
    g.R = function (a) {
        this.D = a;
        var b = this.a.F("div", "box-dicom-worklist-series-container");
        a.appendChild(b);
        this.j = new Image;
        this.j.width = 80;
        this.j.height = 80;
        var c;
        c = this.h;
        var d = Hm(c, "thumbnailUrl");
        !d && c.ca && 0 < c.ca.length && (c = c.ca[Math.floor(c.ca.length / 2)], d = no(c, "thumbnailUrl") || c.b.a.h.ie(lo(c), c.gc()));
        (c = d) ? this.j.src = c: this.Se();
        b.appendChild(this.j);
        P(this.c, a);
        pk(this.c, 0);
        qk(this.c, 100);
        this.w = this.a.F("div", "progress-bar-caption");
        this.c.l()
            .appendChild(this.w)
    };
    g.P = function () {
        ys.A.P.call(this);
        J(this.l(), "click", this.rg, !1, this);
        J(this.j, "error", this.Se, !1, this);
        var a = this.g.S,
            b = new ah(this.l(), this.h);
        b.g = a;
        a.h.push(b);
        a.O && Wg(a, b);
        if (a = this.h.ca)
            if (vp(this.b.b))
                for (this.m = a.length, this.B = 0, qk(this.c, this.m), zs(this), b = 0; b < a.length; b++) {
                    var c = a[b];
                    vn(tn(), mo(c), this.jh, this, 4, !0)
                } else {
                    if (this.h)
                        if (a = this.h.ca) {
                            for (c = b = 0; c < a.length; c++) b += a[c].NumberOfFrames || 1;
                            a = b
                        } else a = 0;
                    else a = 0;
                    this.B = this.m = a;
                    pk(this.c, this.m);
                    qk(this.c, this.m);
                    zs(this)
                }
    };
    g.rg = function () {
        Zr() && As(this.g, !1);
        var a = this.g,
            b = this.h,
            c = Bs(a.c, 0, 0),
            a = Cs(a.b, b, a, c);
        vs(c, a);
        Ds(a, b)
    };
    g.Se = function () {
        this.j.style.display = "none"
    };
    g.jh = function () {
        this.Ga || (this.B++, zs(this))
    };

    function zs(a) {
        var b = a.B,
            c = a.m;
        vp(a.b.b) ? (pk(a.c, b), a.w.innerHTML = b < c ? b + " / " + c : c.toString()) : (pk(a.c, c), a.w.innerHTML = c.toString())
    };

    function Es(a) {
        Gj.call(this, void 0, !1, a.a);
        P(this, a.l());
        Mj(this)
            .style.width = "470px";
        Lj(this, "Settings");
        Wj(this);
        var b = this.Ea();
        b.innerHTML = '<div><div id="box-dicom-tabbar" class="goog-tab-bar goog-tab-bar-top"><div id="box-dicom-tab-1" class="goog-tab goog-tab-selected">Preferences</div><div id="box-dicom-tab-2" class="goog-tab">Overlays</div></div><div class="goog-tab-bar-clear"></div><div class="goog-tab-content"><div id="box-dicom-tab-1-content" class="box-dicom-tab-content" style="text-align:left"><table class="table table-bordered table-striped" style="width:100%"><tr><td>Number of windows</td><td><input id="box-dicom-settings-window-count" type="text" value="" size="4" style="width:50px;"></td></tr><tr><td>Max cache size (MB)</td><td><input id="box-dicom-settings-cache-size" type="text" value="" size="4" style="width:50px;"></td></tr><tr><td>Show overlays</td><td><input id="box-dicom-settings-overlays" type="checkbox"></td></tr><tr><td>Show localizer lines</td><td><input id="box-dicom-settings-localizer-lines" type="checkbox"></td></tr><tr><td>Enabled synced series</td><td><input id="box-dicom-settings-synced-series" type="checkbox"></td></tr><tr><td>Enable prefetch</td><td><input id="box-dicom-settings-prefetch" type="checkbox"></td></tr><tr><td>Overlay color</td><td><input id="box-dicom-settings-overlay-color" type="text" value="" size="7" style="width:50px;"></td></tr><tr><td>Orientation color</td><td><input id="box-dicom-settings-orientation-color" type="text" value="" size="7" style="width:50px;"></td></tr><tr><td>Localizer color</td><td><input id="box-dicom-settings-localizer-color" type="text" value="" size="7" style="width:50px;"></td></tr></table></div><div id="box-dicom-tab-2-content" class="box-dicom-tab-content" style="display:none"><table style="width:100%; margin:auto"><thead><tr><th colspan="2" align="center">Available</th><th colspan="2" align="center">Selected</th></tr></thead><tbody><tr><td colspan="2" align="center"><select id="fields_available_list" name="fields_available_list" size="15" style="width:200px;"></select></td><td colspan="2" align="center"><select id="fields_selected_list" name="fields_selected_list" size="15" style="width:200px;"></select></td></tr></tbody><tfoot><tr><td align="center"><button id="box-dicom-worklist-add-field-button">Add</button></td><td align="center"><button id="box-dicom-worklist-remove-field-button">Remove</button></td><td align="center"><button id="box-dicom-worklist-move-up-button">Up</button></td><td align="center"><button id="box-dicom-worklist-move-down-button">Down</button></td></tr></tfoot></table></div></div></div>'.toString();
        b.style.padding = "0";
        b.style.height = "360px";
        var b = this.a,
            c = new ol;
        ji(c, b.l("box-dicom-tabbar"));
        J(c, "select", this.Ih, !1, this);
        J(this, Xj, this.Vg, !1, this);
        this.G = a.b;
        this.ka = b.l("box-dicom-settings-window-count");
        this.S = b.l("box-dicom-settings-cache-size");
        this.ab = b.l("box-dicom-settings-overlays");
        this.aa = b.l("box-dicom-settings-localizer-lines");
        this.hb = b.l("box-dicom-settings-synced-series");
        this.N = b.l("box-dicom-settings-prefetch");
        this.Ha = b.l("box-dicom-settings-overlay-color");
        this.ma = b.l("box-dicom-settings-orientation-color");
        this.W = b.l("box-dicom-settings-localizer-color");
        this.h = b.l("fields_available_list");
        this.c = b.l("fields_selected_list");
        Br(this.h);
        Br(this.c);
        a = Bp(this.G.b);
        for (b = 0; b < Qm.length; b++)
            if (c = Qm[b], !Tb(a, c)) {
                var d = Rm[c];
                wr(this.h, c, d)
            }
        for (b = 0; b < a.length; b++) c = a[b], d = Rm[c], wr(this.c, c, d);
        Cr(this.h);
        Fs(this);
        J(document.getElementById("box-dicom-worklist-add-field-button"), "click", this.Zh, !1, this);
        J(document.getElementById("box-dicom-worklist-remove-field-button"), "click", this.gi, !1, this);
        J(document.getElementById("box-dicom-worklist-move-up-button"),
            "click", this.ei, !1, this);
        J(document.getElementById("box-dicom-worklist-move-down-button"), "click", this.di, !1, this)
    }
    v(Es, Gj);
    g = Es.prototype;
    g.Ih = function (a) {
        a = a.target.l()
            .id + "-content";
        for (var b = 1; 2 >= b; b++) {
            var c = "box-dicom-tab-" + b + "-content";
            (c = Ee(document, c)) && M(c, !1)
        }(a = Ee(document, a)) && M(a, !0)
    };
    g.Zh = function () {
        var a = this.h.value;
        a && 0 < a.length && Dr(this.h, this.c, a)
    };
    g.gi = function () {
        var a = this.c.value;
        a && 0 < a.length && Dr(this.c, this.h, a);
        Cr(this.h)
    };
    g.ei = function () {
        var a = this.c.value;
        if (a && 0 < a.length) {
            for (var b = this.c, c = 1; c < b.length; c++) b.options[c].value == a && Er(b, c, c - 1);
            this.c.selectedIndex--
        }
    };
    g.di = function () {
        var a = this.c.value;
        if (a && 0 < a.length) {
            for (var b = this.c, c = b.length - 2; 0 <= c; c--) b.options[c].value == a && Er(b, c, c + 1);
            this.c.selectedIndex++
        }
    };
    g.Vg = function (a) {
        if ("ok" == a.key) {
            a = this.G.b;
            sb(a.a, "preferredViewerCount", Math.max(1, parseInt(this.ka.value, 10)));
            sb(a.a, "maxCacheSize", Math.max(1, parseInt(this.S.value, 10)));
            sp(a, this.ab.checked);
            sb(a.a, "localizersVisible", this.aa.checked);
            sb(a.a, "syncedSeries", this.hb.checked);
            sb(a.a, "prefetchEnabled", this.N.checked);
            sb(a.a, "overlayColor", this.Ha.value);
            sb(a.a, "orientationColor", this.ma.value);
            sb(a.a, "localizerColor", this.W.value);
            for (var b = [], c = 0; c < this.c.length; c++) b.push(this.c.options[c].value);
            sb(a.a, "overlays", Pa(b));
            Qp(this.G)
        }
    };
    g.L = function (a) {
        Es.A.L.call(this, a);
        a && Fs(this)
    };

    function Fs(a) {
        var b = a.G.b;
        a.ka.value = Dp(b, "preferredViewerCount", 1, 1, 4)
            .toString();
        a.S.value = Dp(b, "maxCacheSize", 400, 50)
            .toString();
        a.ab.checked = qp(b);
        a.aa.checked = tp(b);
        a.hb.checked = up(b);
        a.N.checked = vp(b);
        a.Ha.value = zp(b, "overlayColor", "#bbb");
        a.ma.value = zp(b, "orientationColor", "#888");
        a.W.value = yp(b)
    };

    function Gs(a, b) {
        Gj.call(this, void 0, !1, a.a);
        this.h = a.b;
        this.c = b;
        P(this, a.l());
        Mj(this)
            .style.width = "470px";
        Lj(this, "Share");
        Wj(this);
        var c = this.Ea();
        c.innerHTML = '<div style="margin:10px; padding:10px; text-align:left;"><p style="margin:0;padding:5px;color:#666;font-weight:bold;">Link:</p><input type="text" style="margin:5px 0; padding:5px; width:400px;"><select style="margin:5px 0; padding: 5px; width:400px;"><option value="0">People with this link</option><option value="1">People in your company</option><option value="2">People in this folder</option></select></div>'.toString();
        c.style.padding = "0";
        c.style.height = "100px";
        J(this.Ea()
            .querySelector("input"), "focus", this.S, !1, this);
        J(this.Ea()
            .querySelector("select"), "change", this.N, !1, this)
    }
    v(Gs, Gj);

    function Hs(a, b) {
        W(b, a.a);
        a.L(!1)
    }
    Gs.prototype.G = function (a) {
        a = a.target;
        var b = u(a.Hb) ? a.Hb : String(a.Hb);
        if (b) Hs(this, "Error: " + b);
        else if (a = ci(a), "error" === a.error) Hs(this, "Error: " + a.errormessage);
        else {
            if (a)
                if (b = a.shared_link) var c = b.lastIndexOf("/"),
                    b = 0 > c ? null : b.substring(c + 1);
                else b = null;
            else b = null;
            if (b) {
                if (c = Xd(window.location), Td(c, "sharedName", b), b = c.toString(), this.Ea()
                    .querySelector("input")
                    .value = b, a = a.shared_access_status) a = a.toString(), b = this.Ea()
                    .querySelector("select"), yr(b, a)
            } else Hs(this, "Invalid share token")
        }
    };
    Gs.prototype.S = function (a) {
        a.j.select()
    };
    Gs.prototype.N = function () {
        var a = No(this.c) || Mo(this.c);
        if (a) {
            var b = this.Ea()
                .querySelector("select");
            (b = xr(b)) && (No(this.c) ? this.h.h.yf(a, b) : this.h.h.xf(a, b))
        }
    };

    function Is(a, b, c) {
        fs.call(this, a.b, a.g);
        this.c = b;
        this.h = [];
        this.aa = this.W = this.G = this.ka = this.B = this.j = this.fa = this.S = this.C = this.N = this.m = null;
        this.Ha = !!c;
        this.ma = this.w = !1
    }
    v(Is, fs);
    g = Is.prototype;
    g.ba = function () {
        this.R(df(this.a, "div"))
    };
    g.R = function (a) {
        a.className = "box-dicom-worklist-study";
        this.D = a;
        var b = this.a;
        this.B = b.F("div", "menu-button");
        this.B.innerHTML = "&#8964;";
        this.N = b.F("div", "patient-name");
        this.C = b.F("div", "institution");
        this.S = b.F("div", "referring-user");
        this.fa = b.F("div", "study-datetime");
        this.m = b.F("div", "box-dicom-worklist-study-header", this.N, this.C, this.S, this.fa, this.B);
        this.j = b.F("div", "box-dicom-worklist-study-contents");
        a.appendChild(this.m);
        a.appendChild(this.j);
        this.w = "US" === So(this.c) && !1;
        (a = Qo(this.c)) &&
        Js(this.N, Jo(a)
            .toUpperCase());
        a = this.c.T("00080080") || "";
        Js(this.C, a);
        a = this.c;
        !a.m && a.b && cb(a.b, "00080090") && (a.m = new Ho(a.T("00080090")));
        (a = a.m) && Js(this.S, Jo(a));
        a = "";
        if (Ro(this.c)) {
            a = Ro(this.c);
            b = new Fc;
            if (!a) throw Error("The date to format must be non-null.");
            for (var c = [], d = 0; d < b.b.length; ++d) {
                var e = b.b[d].text;
                1 == b.b[d].type ? c.push(Mc(b, e, a, a, a)) : c.push(e)
            }
            a = c.join("")
        }
        Js(this.fa, a);
        Ks(this);
        J(this.m, ["click", "mousedown", "mouseup"], this.sg, !1, this);
        J(this.m, "dblclick", this.tg, !1, this);
        J(this.B,
            "click", this.ti, !1, this);
        this.G = new Q("Show Default View");
        J(this.G, "action", this.Tc, !1, this);
        this.W = new Q("Write Report");
        J(this.W, "action", this.pf, !1, this);
        this.aa = new Q("Show study by objects");
        J(this.aa, "action", this.Ah, !1, this);
        a = new xk;
        a.Wc = !0;
        a.H(this.G, !0);
        a.H(this.W, !0);
        a.H(this.aa, !0);
        P(a, this.g.l());
        yk(a, this.m, 5, 4, !0);
        this.ka = a
    };
    g.P = function () {
        Is.A.P.call(this)
    };
    g.sg = function (a) {
        a.b();
        a.h()
    };
    g.tg = function (a) {
        a.b();
        a.h();
        this.Tc()
    };
    g.ti = function (a) {
        Ak(this.ka, new mh(a.clientX, a.clientY), 4)
    };
    g.Tc = function () {
        if (this.c) {
            var a = this.b,
                b = this.c,
                c = this.w,
                d;
            a: {
                if (d = Kr(a))
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e],
                            h = f,
                            k = b;
                        if (op(h.c, So(k)) && op(h.b, k.T("00180015")) && op(h.h, k.T("00081030")) && op(h.g, k.T("00080080"))) {
                            d = f;
                            break a
                        }
                    }
                d = null
            }
            if (d) Nr(a, d, b);
            else {
                d = a.c[0];
                e = null;
                if (c)
                    if (b.a)
                        for (e = [], c = 0; c < b.a.length; c++)
                            for (f = b.a[c], h = f.ca, k = 0; k < h.length; k++) e.push(Gm(f, k));
                    else e = null;
                else e = b.a;
                var h = Math.max(1, Math.floor(d.c.B / 250)),
                    k = Math.max(1, Math.floor(d.c.w / 250)),
                    c = e.length,
                    l = f = 1;
                Zr() ? l = f = 1 : 5 <= c ? (f =
                    Math.min(h, 3), l = Math.min(k, 2)) : 3 <= c ? (f = Math.min(h, 2), l = Math.min(k, 2)) : (f = 2 <= c ? Math.min(h, 2) : 1, l = 1);
                d.c && js(d.c, l, f);
                c = Math.min(c, f * l);
                for (h = 0; h < c; h++)
                    if ((k = e[h]) && k.ca && 0 !== k.ca.length) {
                        var l = Bs(d.c, h % f, Math.floor(h / f)),
                            p = Cs(d.b, k, d, l);
                        vs(l, p);
                        Ds(p, k)
                    }
            }
            Ls(a, b)
        }
    };
    g.pf = function () {
        this.c && Ms(this.b, this.c)
    };
    g.Ah = function () {
        this.c && (this.w = !this.w, Ks(this))
    };

    function Js(a, b) {
        Ve(a, b);
        M(a, !!b)
    }

    function Ks(a) {
        a.a.xd(a.j);
        for (var b = 0; b < a.h.length; b++) a.h[b].Y(), a.h[b] = null;
        a.h = [];
        for (b = 0; b < a.c.a.length; b++) {
            var c = a.c.a[b];
            if (c && c.ca && 0 !== c.ca.length) {
                var d = null;
                if (a.w)
                    for (var e = 0; e < c.ca.length; e++) {
                        if (d = Gm(c, e)) d = new ys(a, d), P(d, a.j), a.h.push(d)
                    } else d = new ys(a, c), P(d, a.j), a.h.push(d)
            }
        }
        L(a, "resize");
        !a.ma && 0 < a.c.a.length && (a.ma = !0, a.Ha && (th(new rh(a.Tc, 100, a)), tb(a.b.b.a, "autoEditorEnabled") && a.pf()))
    };

    function Ns(a) {
        fs.call(this, a.b, a);
        this.h = !1;
        this.c = []
    }
    v(Ns, fs);
    Ns.prototype.ba = function () {
        this.R(df(this.a, "div"))
    };
    Ns.prototype.R = function (a) {
        this.D = a;
        a.id = "box-dicom-viewer-worklist"
    };
    Ns.prototype.j = function () {
        L(this, "resize")
    };

    function Os(a, b) {
        var c = new Is(a, b, !a.h);
        J(c, "resize", a.j, !1, a);
        a.H(c, !0);
        a.c.push(c);
        L(a, "resize");
        a.h = !0
    };

    function Ps(a) {
        xk.call(this, a.a);
        this.b = a;
        a = new Q("Flip the image horizontally");
        J(a, "action", this.Bg, !1, this);
        var b = new Q("Flip the image vertically");
        J(b, "action", this.Cg, !1, this);
        var c = new Q("Rotate the image clockwise");
        J(c, "action", this.oi, !1, this);
        var d = new Q("Rotate the image counter clockwise");
        J(d, "action", this.pi, !1, this);
        var e = new Q("Invert the image");
        J(e, "action", this.Rh, !1, this);
        this.H(a, !0);
        this.H(b, !0);
        this.H(new tk, !0);
        this.H(c, !0);
        this.H(d, !0);
        this.H(new tk, !0);
        this.H(e, !0)
    }
    v(Ps, xk);
    g = Ps.prototype;
    g.Bg = function () {
        hq(this.b, -1, 1)
    };
    g.Cg = function () {
        hq(this.b, 1, -1)
    };
    g.oi = function () {
        Qs(this.b, Math.PI / 2)
    };
    g.pi = function () {
        Qs(this.b, -Math.PI / 2)
    };
    g.Rh = function () {
        var a = this.b.j;
        a && (a.a = !a.a, cq(this.b))
    };

    function Rs(a) {
        N.call(this, a.a);
        this.b = a;
        this.c = this.j = this.m = this.B = this.C = this.G = this.h = this.g = this.w = null
    }
    v(Rs, N);
    g = Rs.prototype;
    g.ba = function () {
        this.R(document.createElement("div"))
    };
    g.R = function (a) {
        this.D = a;
        var b = this.a;
        a.className = "box-dicom-hover-menu-container";
        b.xd(a);
        this.w = b.F("div", "box-dicom-hover-menu-content");
        a.appendChild(this.w);
        this.g = new xl;
        this.h = Ss(this, "view");
        this.g.H(this.h, !0);
        this.G = Ss(this, "presets");
        this.g.H(this.G, !0);
        this.C = Ss(this, "keyimage");
        this.g.H(this.C, !0);
        this.B = Ss(this, "play");
        this.g.H(this.B, !0);
        a = (a = this.b.g) ? a.l() : window.document.body;
        this.m = new Ps(this.b);
        this.m.Wc = !0;
        P(this.m, a);
        this.j = new Fq(this.b);
        this.j.Wc = !0;
        P(this.j, a);
        P(this.g, this.w);
        this.L(!1)
    };

    function Ss(a, b) {
        var c = a.a,
            c = c.F("div", "box-dicom-hover-menu-button", c.F("div", "box-dicom-hover-menu-icon box-dicom-hover-menu-icon-" + b));
        return new tl(c)
    }
    g.P = function () {
        Rs.A.P.call(this);
        J(this.h, "action", this.xi, !1, this);
        J(this.G, "action", this.ui, !1, this);
        J(this.C, "action", this.lh, !1, this);
        J(this.B, "action", this.b.yi, !1, this.b)
    };
    g.xi = function () {
        Ak(this.m, new lh(this.h.l(), 0, !0), 1, null)
    };
    g.ui = function () {
        Ak(this.j, new lh(this.h.l(), 0, !0), 1, null)
    };
    g.lh = function () {
        this.b.b.fd(this.b)
    };
    g.L = function (a) {
        Ts(this);
        yg(this.l(), 1);
        M(this.l(), a)
    };

    function Ts(a) {
        a.c && (a.c.kb(), a.c.Y(), a.c = null)
    };

    function Us(a, b, c, d) {
        fs.call(this, a, b);
        this.pc = c;
        this.C = d;
        this.w = null;
        this.B = 0;
        this.Yc = this.h = this.ma = this.Ha = null;
        this.re = !0;
        this.S = 0;
        this.j = null;
        this.N = [!1, !1, !1];
        this.$c = !1;
        this.ab = this.Xe = this.G = this.c = null;
        this.fa = new nh(100);
        this.Zc = !1;
        this.te = this.ve = this.af = this.bf = this.xe = 0
    }
    v(Us, fs);

    function Hq(a) {
        return a.w ? a.w.a : null
    }

    function Z(a, b) {
        if (!a.w) return null;
        var c = a.w.ca;
        if (c && 0 !== c.length) var d = q(b) ? b : Xr(a),
            c = c[a.Ha && 0 != a.Ha.length ? a.Ha[q(d) ? d : Xr(a)] : 0];
        else c = null;
        return c
    }

    function Rl(a) {
        return (a = Z(a, void 0)) ? Jm(a) : null
    }
    g = Us.prototype;
    g.Wa = function () {
        return this.b.a === this
    };
    g.pg = function (a) {
        jm(a)
            .K === Z(this) && (Vs(this, !1), V(this))
    };
    g.og = function () {
        Vs(this, !1);
        Ws(this);
        cq(this);
        V(this)
    };
    g.qg = function () {};

    function Ws(a) {
        a.Ha = Array(a.B);
        a.ma = Array(a.B);
        for (var b = a.w.ca, c = 0, d = 0; d < b.length; d++)
            for (var e = b[d], f = 0; f < (e.ia("00280008") || 1); f++) a.Ha[c] = d, a.ma[c] = f, c++;
        a.B = c
    }

    function Xs(a) {
        var b = vg(wg, a.l()),
            c = document.createElement("canvas");
        c.width = b.width;
        c.height = b.height;
        var d = c.getContext("2d");
        d.fillStyle = "black";
        d.fillRect(0, 0, b.width, b.height);
        b = a.C;
        d.drawImage(b.m, 0, 0, b.m.width, b.m.height, 0, 0, c.width, c.height);
        Ur(a.h, c, d);
        return c.toDataURL()
    }
    g.cc = function () {
        var a = this.w;
        if (!a) return null;
        a = a.a;
        if (!a || !po(a)) return null;
        var b = uq(this.g.b);
        if (!b || po(b) !== po(a)) return null;
        a = new np;
        b = Z(this)
            .T("0008103E");
        a.c = b;
        this.j && (a.b = this.j.g, a.a = this.j.b, a.h = this.j.a);
        a.g = this.c ? Math.abs(R(this.c, 0, 0)) : null;
        a.j = this.c ? 0 > R(this.c, 0, 0) : !1;
        a.m = this.c ? 0 > R(this.c, 1, 1) : !1;
        return a
    };

    function Xr(a) {
        var b = Math.floor(a.S),
            b = Math.min(b, a.B - 1);
        return b = Math.max(b, 0)
    }

    function bq(a, b) {
        b = Math.min(b, a.B - 1);
        b = Math.max(b, 0);
        a.S = b;
        Ys(a)
    }

    function Ys(a) {
        for (var b = Math.floor(a.S), c = 0, d = 0; 50 > d; d++) {
            var e = Z(a, b + d);
            if (!e) break;
            a.C.Pd(e, c);
            c = 1
        }
    }

    function Zs(a) {
        return (a = a.w.ca) ? a.length : 0
    }

    function Sl(a) {
        return a.ma && 0 != a.ma.length ? a.ma[Xr(a)] : 0
    }

    function Ql(a) {
        return (a = Z(a)) && qo(a, "00200052") ? a.T("00200052") : null
    }

    function $s(a, b) {
        var c = Eo(a, b.c, b.a);
        return Xp(a, c)
    }

    function Xp(a, b) {
        if (!b) return null;
        var c;
        c = (c = Hq(a)) ? c.c : [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (Pl(e, a) && e.vb(b.v(), b.o())) return e
        }
        return null
    }

    function Fp(a, b) {
        var c = Hq(a);
        c && c.c.push(b)
    }
    g.ba = function () {
        var a = Le("div");
        this.R(a)
    };
    g.R = function (a) {
        this.D = a;
        a.className = "box-dicom-viewcontrol";
        var b = this.a;
        this.C.jd(b, a);
        this.h = new Tr(this);
        a.appendChild(this.h.b);
        this.Yc = b.F("div", "box-dicom-viewcontrol-loading");
        a.appendChild(this.Yc);
        this.Xe = new $r(this)
    };
    g.P = function () {
        Us.A.P.call(this);
        J(this.C, "dicomprogress", this.pg, !1, this);
        J(this.C, "dicomload", this.og, !1, this);
        J(this.C, "dicomunload", this.qg, !1, this);
        J(this.l(), "mouseover", this.qh, !1, this);
        J(this.l(), "mouseout", this.ph, !1, this);
        J(this.h.b, ["mousedown", "touchstart"], this.kg, !1, this);
        J(this.h.b, ["mouseup", "touchend"], this.mg, !1, this);
        J(this.h.b, ["mousemove", "touchmove"], this.lg, !1, this);
        J(this.h.b, "dblclick", this.jg, !1, this);
        var a = new Kg(this.h.b);
        J(a, "mousewheel", this.ng, !1, this);
        J(this.fa, "tick",
            this.Ug, !1, this);
        oh(this.fa)
    };
    g.qh = function () {
        this.ka || (this.ka = new Rs(this), P(this.ka, this.l()));
        this.ka.L(!0)
    };
    g.ph = function () {
        if (this.ka) {
            var a = this.ka;
            Ts(a);
            a.c = new Jh(a.l(), 200);
            a.c.sb()
        }
    };
    g.kg = function (a) {
        a.b();
        a.h();
        if ("touchstart" === a.type) {
            var b = a.g;
            if (b.touches && 2 === b.touches.length) {
                at(this, a);
                return
            }
            bt(this, a);
            this.ve = ct()
        }
        0 === a.m && (this.xe = ct());
        2 === a.m && (this.bf = ct());
        dt(this.b, this);
        this.N[a.m] = !0;
        mq(this.b.g, a);
        1 === a.m && ("stack" === this.b.g.b.ra() ? Gp(this.b.g, "pan") : Gp(this.b.g, "stack"));
        $s(this, a) && (this.$c = !0);
        (b = et(this, a)) ? (Wp(this, b.wa()), b.La(a)) : Wp(this, null)
    };
    g.mg = function (a) {
        a.b();
        a.h();
        dt(this.b, this);
        this.N[a.m] = !1;
        mq(this.b.g, a);
        this.$c = !1;
        if ("touchend" === a.type) {
            var b = ct() - this.ve,
                c = ct() - this.te;
            if (300 > c && b < c) {
                this.pc && ws(this.pc);
                return
            }
            this.te = ct()
        }
        if (2 === a.m && (this.af = ct(), 250 < ct() - this.xe && 250 > ct() - this.bf)) {
            var b = a.clientX,
                c = a.clientY,
                d = 0,
                e = this.Xe;
            if (a = $s(this, a)) this.ab || (this.ab = new oq(this)), this.ab.b = a, e = this.ab;
            a = vg(wg, e.l());
            var f = Ie(ff(this.a) || window);
            b + a.width >= f.width && (d |= 4, b++);
            c + a.height >= f.height && (d |= 1, c++);
            Ak(e, new mh(b, c), d);
            return
        }(b = et(this, a)) ? (Wp(this, b.wa()), b.Ca(a)) : Wp(this, null)
    };

    function ct() {
        return (new Date)
            .getTime()
    }
    g.lg = function (a) {
        if (this.N[0] || this.N[2]) a.b(), a.h();
        if ("touchmove" === a.type) {
            var b = a.g;
            if (b.touches && 2 === b.touches.length) {
                at(this, a);
                return
            }
            bt(this, a)
        }(b = et(this, a)) ? (Wp(this, b.wa()), b.Ma(a)) : Wp(this, null)
    };

    function et(a, b) {
        return a.N[0] && a.N[2] ? w(a.b.g.a, "zoom") || null : a.N[2] ? w(a.b.g.a, "windowLevel") || null : a.$c || $s(a, b) ? w(a.b.g.a, "select") || null : a.b.g.b
    }
    g.jg = function () {
        500 > ct() - this.af || this.N[2] || this.pc && ws(this.pc)
    };

    function at(a, b) {
        var c = b.g;
        if (c.touches && 2 === c.touches.length)
            if ("touchstart" === b.type) a.md = ft(c), a.Me = gt(c);
            else if ("touchmove" === b.type) {
            var d = ft(c),
                c = gt(c),
                e = c / a.Me;
            hq(a, e, e, void 0, void 0);
            Sp(a, d.v() - a.md.v(), d.o() - a.md.o());
            a.md = d;
            a.Me = c
        }
    }

    function ft(a) {
        return new Hn((a.touches[0].clientX + a.touches[1].clientX) / 2, (a.touches[0].clientY + a.touches[1].clientY) / 2)
    }

    function bt(a, b) {
        var c = b.g;
        c.touches && 1 === c.touches.length && (b.clientX = c.touches[0].clientX, b.clientY = c.touches[0].clientY);
        c = tg(a.h.b);
        b.c = b.clientX - c.x;
        b.a = b.clientY - c.y
    }

    function gt(a) {
        var b = a.touches[0].clientX - a.touches[1].clientX;
        a = a.touches[0].clientY - a.touches[1].clientY;
        return Math.sqrt(b * b + a * a)
    }
    g.ng = function (a) {
        a.b();
        a.h();
        var b = w(this.b.g.a, "stack") || null,
            c = b.a.a;
        c && (bq(c, c.S + Math.floor(a.O / 3)), cq(c), dq(b.a, c))
    };

    function Wp(a, b) {
        b || (b = "pointer");
        a.h.b.className = "box-dicom-viewer-cursor-" + b
    }
    g.clear = function () {
        this.w = null;
        this.B = this.S = 0;
        this.G = this.c = this.j = null;
        cq(this)
    };

    function Ds(a, b, c) {
        c || a.clear();
        a.w = b;
        Ws(a);
        (b = Z(a)) && Qn(b) ? cq(a) : Vs(a, !0);
        Ys(a);
        dt(a.b, a)
    }
    g.Na = function (a, b) {
        !this.Z || isNaN(a) || isNaN(b) || 0 > a || 0 > b || (ug(this.l(), a, b), this.C && this.C.Na(a, b), this.h && this.h.Na(a, b), ht(this), this.re && cq(this))
    };
    g.nc = function (a) {
        this.re = a;
        this.h && this.h.L(a)
    };

    function cq(a) {
        if (a.Z) {
            var b = Z(a);
            b && Qn(b) && Vs(a, !1);
            if (b = Z(a)) {
                if (!a.j) {
                    var c;
                    if (b.N) c = new S(127, 255);
                    else {
                        if (c = b.c) c = b.c, c = !!(c.a && 0 < c.a.length);
                        c ? (c = b.c, c = c.a && 0 < c.a.length ? c.a[0].clone() : null) : c = wo(b)
                    }
                    a.j = c
                }
                c = a.c;
                c || (ht(a), c = a.c);
                a.C.kd(b, Sl(a), a.j, c)
            }
            it(a.b)
        }
    }
    g.ee = function () {
        this.j = null;
        cq(this)
    };
    g.ge = function () {
        var a = Z(this);
        a && (a = wo(a)) && (Sm(this.j, a), cq(this))
    };

    function ht(a) {
        var b = Z(a);
        if (b && Lm(b)) {
            var c = vm(Lm(b)),
                d = wm(Lm(b)),
                e = a.l()
                .offsetWidth,
                f = a.l()
                .offsetHeight,
                b = Math.min((e - 0) / c, (f - 0) / d),
                c = e / 2 - b * c / 2,
                d = f / 2 - b * d / 2;
            a.c = new Wn(3, 3, !0);
            U(a.c, 0, 0, b);
            U(a.c, 1, 1, b);
            U(a.c, 0, 2, c);
            U(a.c, 1, 2, d);
            a.G = io(a.c)
        }
    }
    g.zi = function () {
        if (this.c) {
            var a = 1 / (this.c ? Math.abs(R(this.c, 0, 0)) : 0);
            hq(this, a, a, void 0, void 0)
        }
        cq(this)
    };
    g.Ai = function () {
        ht(this);
        cq(this)
    };

    function hq(a, b, c, d, e) {
        if (a.c) {
            var f = .5 * a.l()
                .offsetWidth,
                h = .5 * a.l()
                .offsetHeight;
            q(d) && q(e) && (f = d, h = e);
            a.c = ho(a.c, -f, -h);
            d = a.c;
            U(d, 0, 0, R(d, 0, 0) * b);
            U(d, 0, 1, R(d, 0, 1) * b);
            U(d, 0, 2, R(d, 0, 2) * b);
            U(d, 1, 0, R(d, 1, 0) * c);
            U(d, 1, 1, R(d, 1, 1) * c);
            U(d, 1, 2, R(d, 1, 2) * c);
            a.c = d;
            a.c = ho(a.c, f, h);
            a.G = io(a.c);
            cq(a)
        }
    }

    function Qs(a, b) {
        if (a.c) {
            var c = .5 * a.l()
                .offsetWidth,
                d = .5 * a.l()
                .offsetHeight;
            a.c = ho(a.c, -c, -d);
            var e = a.c,
                f = Math.sin(b),
                h = Math.cos(b),
                k = R(e, 0, 0),
                l = R(e, 1, 0),
                p = R(e, 0, 1),
                m = R(e, 1, 1),
                r = R(e, 0, 2),
                t = R(e, 1, 2);
            U(e, 0, 0, h * k - f * l);
            U(e, 0, 1, h * p - f * m);
            U(e, 1, 0, f * k + h * l);
            U(e, 1, 1, f * p + h * m);
            U(e, 0, 2, h * r - f * t);
            U(e, 1, 2, f * r + h * t);
            a.c = e;
            a.c = ho(a.c, c, d);
            a.G = io(a.c);
            cq(a)
        }
    }

    function Sp(a, b, c) {
        a.c && (a.c = ho(a.c, b, c), a.G = io(a.c), cq(a))
    }

    function jt(a, b) {
        a.h.j = b;
        V(a)
    }

    function V(a) {
        a = a.h;
        var b = a.b,
            c = a.bd;
        b && c && (c.save(), c.scale(a.h, a.h), c.clearRect(0, 0, a.c, a.g), Ur(a, b, c), c.restore())
    }

    function Eo(a, b, c) {
        if (!a.c || !a.G || !Z(a)) return null;
        var d = new Wn(3, 1, !1);
        U(d, 0, 0, b);
        U(d, 1, 0, c);
        U(d, 2, 0, 1);
        return jo(ao(a.G, d))
    }

    function Kn(a, b, c) {
        if (!a.c || !a.G || !Z(a)) return null;
        var d = new Wn(3, 1, !1);
        U(d, 0, 0, b);
        U(d, 1, 0, c);
        U(d, 2, 0, 1);
        return jo(ao(a.c, d))
    }

    function $p(a, b, c) {
        var d = Z(a);
        if (!d) return null;
        if (a = Eo(a, b, c))
            if (a) {
                if (!d.S && (b = Mm(d))) {
                    var e = Pm(d);
                    if (e) {
                        var f = Nm(d);
                        if (f) {
                            var h = Om(d);
                            h && (c = new Wn(4, 4, !0), U(c, 0, 3, R(e, 0, 0)), U(c, 1, 3, R(e, 1, 0)), U(c, 2, 3, R(e, 2, 0)), e = new Wn(4, 4, !0), U(e, 0, 0, R(f, 0, 0)), U(e, 1, 0, R(f, 1, 0)), U(e, 2, 0, R(f, 2, 0)), U(e, 0, 1, R(h, 0, 0)), U(e, 1, 1, R(h, 1, 0)), U(e, 2, 1, R(h, 2, 0)), f = fo(f, h), U(e, 0, 2, R(f, 0, 0)), U(e, 1, 2, R(f, 1, 0)), U(e, 2, 2, R(f, 2, 0)), f = new Wn(4, 4, !0), U(f, 0, 0, b.b), U(f, 1, 1, b.a), d.S = ao(ao(c, e), f))
                        }
                    }
                }(d = d.S) ? (b = new Wn(4, 1), U(b, 0, 0, a.v()),
                    U(b, 1, 0, a.o()), U(b, 2, 0, 0), U(b, 3, 0, 1), d = ao(d, b)) : d = null
            } else d = null;
        else d = null;
        return d
    }

    function Do(a, b) {
        var c = Z(a);
        if (!c) return null;
        if (b) {
            if (!c.W) {
                var d = Mm(c);
                if (d) {
                    var e = Pm(c);
                    if (e) {
                        var f = Nm(c);
                        if (f) {
                            var h = Om(c);
                            if (h) {
                                var k = new Wn(4, 4, !0);
                                U(k, 0, 3, -R(e, 0, 0));
                                U(k, 1, 3, -R(e, 1, 0));
                                U(k, 2, 3, -R(e, 2, 0));
                                e = new Wn(4, 4, !0);
                                U(e, 0, 0, R(f, 0, 0));
                                U(e, 0, 1, R(f, 1, 0));
                                U(e, 0, 2, R(f, 2, 0));
                                U(e, 1, 0, R(h, 0, 0));
                                U(e, 1, 1, R(h, 1, 0));
                                U(e, 1, 2, R(h, 2, 0));
                                f = fo(f, h);
                                U(e, 2, 0, R(f, 0, 0));
                                U(e, 2, 1, R(f, 1, 0));
                                U(e, 2, 2, R(f, 2, 0));
                                f = new Wn(4, 4, !0);
                                U(f, 0, 0, 1 / d.b);
                                U(f, 1, 1, 1 / d.a);
                                c.W = ao(ao(f, e), k)
                            }
                        }
                    }
                }
            }
            c = (c = c.W) ? ao(c, b) : null
        } else c = null;
        return c ? Kn(a, c.v(), c.o()) : null
    }

    function Vr(a) {
        var b = a.l(),
            c = b.offsetWidth - 2,
            b = b.offsetHeight - 2,
            d = Array(4);
        d[0] = $p(a, 1, 1);
        if (!d[0]) return null;
        d[1] = $p(a, c, 1);
        d[2] = $p(a, c, b);
        d[3] = $p(a, 1, b);
        return d
    }

    function kt(a) {
        var b = Vr(a);
        if (!b) return null;
        a = $n(b[1], b[0]);
        b = $n(b[3], b[0]);
        return eo(fo(a, b))
    }

    function lt(a, b) {
        if (b) {
            for (var c = -1, d = Number.MAX_VALUE, e = 0; e < Zs(a); e++) {
                var f = Z(a, e);
                f && (f = yo(f, b), null !== f && f < d && (c = e, d = f))
            }
            bq(a, c);
            cq(a)
        }
    }
    g.yi = function () {
        this.Zc = !this.Zc
    };
    g.Ug = function () {
        if (this.Zc) {
            var a = Z(this);
            if (!a || Qn(a)) Xr(this) >= this.B - 1 ? bq(this, 0) : bq(this, this.S + 1), cq(this), dq(this.g.b, this)
        }
    };

    function Vs(a, b) {
        a.Yc.style.display = b ? "block" : "none"
    }
    g.mi = function () {
        console.log("Study UID:   " + po(this.w.a));
        console.log("Series UID:  " + Fm(this.w));
        console.log("Object UID:  " + Jm(Z(this)));
        console.log("File ID:     " + lo(Z(this)));
        console.log("Reference:   " + Ql(this));
        console.log("Number:      " + Km(Z(this)));
        console.log("Image URL:   " + oo(Z(this)));
        console.log("DICOM URL:   " + mo(Z(this)))
    };
    g.M = function () {
        this.h && (Ff(this.h.b), this.h = null);
        this.m && (Ff(this.m), this.m = null);
        this.fa && (Ff(this.fa), ph(this.fa), this.fa.Y(), this.fa = null);
        var a = this.l();
        a && Qe(a);
        this.G = this.c = this.N = this.bd = this.xb = this.aa = this.hb = this.W = this.w = null;
        Us.A.M.call(this)
    };

    function mt(a, b) {
        fs.call(this, a.b, a);
        this.ka = this.fa = 0;
        this.w = this.B = 512;
        this.h = b;
        this.m = [];
        this.ma = "default";
        this.aa = !1;
        this.c = [];
        this.j = [];
        this.W = this.S = !1;
        this.N = this.G = -1;
        this.C = null
    }
    v(mt, fs);
    g = mt.prototype;
    g.ba = function () {
        var a = Le("div", {
            id: "lightbox",
            "class": "box-dicom-lightbox"
        });
        this.D = a;
        this.R(a)
    };

    function js(a, b, c) {
        if (1 > b || 4 < b) throw Error("rows out of range");
        if (1 > c || 4 < c) throw Error("columns out of range");
        a.C = null;
        for (var d = 0; d < a.rows(); d++)
            for (var e = 0; e < a.c.length + 1; e++)
                if (e >= c || d >= b) {
                    var f = Bs(a, e, d);
                    f && (a.removeChild(f, !0), nt(a, e, d, null))
                }
        for (d = 0; d < b; d++)
            for (e = 0; e < c; e++)
                if (f = Bs(a, e, d), !f) {
                    f = new us(a.b, a.g);
                    a.H(f, !0);
                    nt(a, e, d, f);
                    var h = a.g.S,
                        f = new bh(f.l(), f);
                    h.ua.push(f);
                    f.C = !0;
                    h.B = !0
                }
        a.c = Array(c - 1);
        for (e = 0; e < c - 1; e++) a.c[e] = 1 / c * (e + 1);
        a.j = Array(b - 1);
        for (d = 0; d < b - 1; d++) a.j[d] = 1 / b * (d + 1);
        xs(a)
    }
    g.hc = function () {
        return !1
    };
    g.R = function (a) {
        mt.A.R.call(this, a);
        a = this.l();
        a.style.width = "100%";
        a.style.height = "100%";
        xs(this)
    };
    g.P = function () {
        mt.A.P.call(this);
        var a = this.l();
        J(a, ["touchstart", "mousedown"], this.dg, !1, this);
        J(a, ["touchmove", "mousemove"], this.eg, !1, this);
        J(a, ["touchend", "mouseup"], this.fg, !1, this);
        ot(this);
        js(this, 1, 1)
    };
    g.eg = function (a) {
        a.b();
        if (this.aa) {
            if (0 <= this.G) {
                var b = this.G,
                    c = a.clientX - this.fa - this.h.left,
                    c = c / this.B,
                    d = 200 / this.B,
                    e = 0 == b ? d : this.c[b - 1] + d,
                    d = b == this.c.length - 1 ? 1 - d : this.c[b + 1] - d;
                e <= d && (c = Math.max(c, e), c = Math.min(c, d), this.c[b] = c)
            }
            0 <= this.N && (b = this.N, a = a.clientY - this.ka - this.h.top, a /= this.w, e = 200 / this.w, c = 0 == b ? e : this.j[b - 1] + e, e = b == this.j.length - 1 ? 1 - e : this.j[b + 1] - e, c <= e && (a = Math.max(a, c), a = Math.min(a, e), this.j[b] = a));
            xs(this)
        } else {
            c = a.clientX - this.fa - this.h.left;
            a = a.clientY - this.ka - this.h.top;
            this.W =
                this.S = !1;
            this.N = this.G = -1;
            for (e = 0; e < this.c.length; e++) 20 > Math.abs(c - this.B * this.c[e]) && (this.S = !0, this.G = e);
            for (e = 0; e < this.j.length; e++) 20 > Math.abs(a - this.w * this.j[e]) && (this.W = !0, this.N = e);
            a = this.S && this.W ? "move" : this.S ? "ew-resize" : this.W ? "ns-resize" : "default";
            if (a !== this.ma) {
                c = this.l();
                if (u("cursor")) gg(c, a, "cursor");
                else
                    for (b in "cursor") gg(c, "cursor" [b], b);
                this.ma = a
            }
        }
    };
    g.dg = function (a) {
        a.b();
        this.aa = !0
    };
    g.fg = function (a) {
        a.b();
        this.aa = !1;
        pt(this, !0)
    };

    function st(a) {
        ot(a);
        xs(a)
    }

    function ot(a) {
        var b = a.l(),
            c = tg(b);
        a.fa = c.x;
        a.ka = c.y;
        var d = De(b);
        (c = F && b.currentStyle) && ef(Be(d)) && "auto" != c.width && "auto" != c.height && !c.boxSizing ? (d = Gg(b, c.width, "width", "pixelWidth"), b = Gg(b, c.height, "height", "pixelHeight"), b = new Va(d, b)) : (c = Cg(b), d = Eg(b, "padding"), b = Fg(b), b = new Va(c.width - b.left - d.left - d.right - b.right, c.height - b.top - d.top - d.bottom - b.bottom));
        a.B = b.width - a.h.left - a.h.right;
        a.w = b.height - a.h.top - a.h.bottom
    }

    function pt(a, b) {
        for (var c = 0; c < a.rows(); c++)
            for (var d = 0; d < a.c.length + 1; d++) {
                var e = Bs(a, d, c);
                e && e.nc(b)
            }
    }

    function xs(a) {
        if (a.C) {
            pt(a, !1);
            var b = a.h.left,
                c = a.h.top,
                d = tt(a, a.c.length + 1 - 1),
                e = ut(a, a.rows() - 1),
                f = a.C.l();
            f.style.left = b + "px";
            f.style.top = c + "px";
            f.style.zIndex = 20;
            a.C.nc(!0);
            a.C.Na(d - b, e - c)
        } else {
            pt(a, !0);
            for (var h = 0; h < a.rows(); h++)
                for (var k = 0; k < a.c.length + 1; k++) {
                    var l = Bs(a, k, h);
                    l && (b = 0 == k ? a.h.left : a.h.left + a.B * a.c[k - 1] + 2, c = 0 == h ? a.h.top : a.h.top + a.w * a.j[h - 1] + 2, d = tt(a, k), e = ut(a, h), f = l.l(), f.style.left = b + "px", f.style.top = c + "px", f.style.zIndex = 1, l.Na(d - b, e - c))
                }
        }
        it(a.b)
    }

    function vt(a, b, c) {
        return (a = Bs(a, b, c)) ? a.c : null
    }

    function Bs(a, b, c) {
        return 0 > c || c >= a.m.length || 0 > b || b >= a.m[c].length ? null : a.m[c][b]
    }

    function nt(a, b, c, d) {
        for (; a.m.length <= c;) a.m.push([]);
        for (; a.m[c].length <= b;) a.m[c].push(null);
        a.m[c][b] = d
    }
    g.rows = function () {
        return this.j.length + 1
    };

    function tt(a, b) {
        return b >= a.c.length ? a.h.left + a.B - 1 : a.h.left + a.B * a.c[b] - 2
    }

    function ut(a, b) {
        return b >= a.j.length ? a.h.top + a.w - 1 : a.h.top + a.w * a.j[b] - 2
    }

    function vr(a, b, c, d) {
        var e = a.m[0].length,
            f = a.m.length,
            h = 0,
            k = 0;
        d = q(d) ? d : 0;
        for (var l = 0; l < f; l++)
            for (var p = 0; p < e; p++) {
                var m = vt(a, p, l);
                if (m && m.Wa()) {
                    h = p;
                    k = l;
                    break
                }
            }
        for (l = 0; 16 > l;) {
            h += b;
            k += c;
            0 > h ? 0 === d ? h = 0 : (h = e - 1, 2 === d && k--) : h >= e && (0 === d ? h = e - 1 : (h = 0, 2 === d && k++));
            0 > k ? k = 0 === d ? 0 : f - 1 : k >= f && (k = 0 === d ? f - 1 : 0);
            if (m = vt(a, h, k)) {
                dt(a.b, m);
                break
            }
            l++
        }
    }
    g.M = function () {
        mt.A.M.call(this)
    };

    function wt(a) {
        this.h = a;
        this.b = this.c = this.a = this.g = null;
        xt(this)
    }

    function xt(a) {
        a.g = null;
        a.a = null;
        a.c = null;
        a.b = null
    }

    function Wr(a, b) {
        if (!b) return !1;
        if (tb(a.h.b.a, "studyLocalizerOverride")) {
            var c = po(b.b.a);
            return a.g === c
        }
        return qo(b, "00200052") ? a.a === b.T("00200052") : !1
    };

    function yt(a) {
        for (var b = ["webgl", "experimental-webgl"], c = null, d = 0; d < b.length; ++d) {
            try {
                c = a.getContext(b[d])
            } catch (e) {}
            if (c) break
        }
        return c
    }

    function zt(a, b, c) {
        var d = alert;
        c = a.createShader(c);
        a.shaderSource(c, b);
        a.compileShader(c);
        return a.getShaderParameter(c, a.COMPILE_STATUS) ? c : (d("*** Error compiling shader " + c + ": " + a.getShaderInfoLog(c)), a.deleteShader(c), null)
    };

    function At() {
        K.call(this);
        this.a = null;
        this.B = this.C = 512;
        this.j = 1;
        this.b = this.w = null;
        this.h = 0;
        this.I = {};
        this.c = this.K = this.g = this.m = this.N = this.W = this.O = this.G = this.S = this.ua = null
    }
    v(At, bs);
    g = At.prototype;
    g.ld = function () {
        return "WebGL"
    };
    g.jd = function (a, b) {
        this.a = Fr(a, !0);
        b.appendChild(this.a);
        var c;
        c = this.a;
        window.WebGLRenderingContext ? (c = yt(c)) || alert("Unknown error initializing WebGL.") : (alert("This page requires a browser that supports WebGL."), c = null);
        if (c) {
            this.w = c;
            var d = zt(c, "attribute vec2 a_position;attribute vec2 a_texCoord;uniform mat3 u_matrix;varying vec2 v_texCoord;void main() {gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);v_texCoord = a_texCoord;}", c.VERTEX_SHADER),
                e = zt(c, "precision mediump float;uniform sampler2D u_image;uniform float u_windowLevel[2];uniform float u_rescale[2];uniform vec4 u_redTransform;uniform vec4 u_blueTransform;uniform vec4 u_greenTransform;varying vec2 v_texCoord;void main() {vec4 tmp_raw = texture2D(u_image, v_texCoord).rgba;float tmp_r = dot(tmp_raw, u_redTransform);float tmp_g = dot(tmp_raw, u_greenTransform);float tmp_b = dot(tmp_raw, u_blueTransform);float tmp_center = u_windowLevel[0];float tmp_width = u_windowLevel[1];float out_r = (((tmp_r * u_rescale[0] + u_rescale[1]) - tmp_center) / tmp_width) + 0.5;float out_g = (((tmp_g * u_rescale[0] + u_rescale[1]) - tmp_center) / tmp_width) + 0.5;float out_b = (((tmp_b * u_rescale[0] + u_rescale[1]) - tmp_center) / tmp_width) + 0.5;vec4 tmp_output = vec4(out_r, out_g, out_b, 1.0);gl_FragColor.rgba = tmp_output;}",
                    c.FRAGMENT_SHADER),
                f;
            f = c;
            for (var d = [d, e], e = f.createProgram(), h = 0; h < d.length; ++h) f.attachShader(e, d[h]);
            f.linkProgram(e);
            f.getProgramParameter(e, f.LINK_STATUS) ? f = e : (alert("Error in program linking:" + f.getProgramInfoLog(e)), f.deleteProgram(e), f = null);
            this.b = f;
            c.useProgram(this.b);
            this.h = c.getAttribLocation(this.b, "a_position");
            c.enableVertexAttribArray(this.h);
            f = c.getAttribLocation(this.b, "a_texCoord");
            d = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, d);
            c.bufferData(c.ARRAY_BUFFER, Bt(1, 1), c.STATIC_DRAW);
            c.enableVertexAttribArray(f);
            c.vertexAttribPointer(f, 2, c.FLOAT, !1, 0, 0);
            this.ua = c.getUniformLocation(this.b, "u_windowLevel[0]");
            this.S = c.getUniformLocation(this.b, "u_redTransform");
            this.G = c.getUniformLocation(this.b, "u_greenTransform");
            this.O = c.getUniformLocation(this.b, "u_blueTransform");
            this.W = c.getUniformLocation(this.b, "u_rescale[0]");
            this.N = c.getUniformLocation(this.b, "u_matrix");
            this.g = Bt(1E3, 1E3);
            this.m = c.createBuffer();
            c.bindBuffer(c.ARRAY_BUFFER, this.m);
            c.vertexAttribPointer(this.h, 2, c.FLOAT, !1, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, this.g, c.DYNAMIC_DRAW);
            this.K = c.createBuffer();
            this.c = Bt(1E3, 1E3);
            c.bindBuffer(c.ARRAY_BUFFER, this.K);
            c.vertexAttribPointer(this.h, 2, c.FLOAT, !1, 0, 0);
            c.bufferData(c.ARRAY_BUFFER, this.c, c.DYNAMIC_DRAW);
            this.j = Gr(c)
        }
    };
    g.Na = function (a, b) {
        this.C = a;
        this.B = b;
        this.a && (this.a.width = this.j * a, this.a.height = this.j * b, this.a.style.width = a + "px", this.a.style.height = b + "px")
    };
    g.L = function (a) {
        this.a && M(this.a, a)
    };
    g.Pd = function (a, b) {
        Qn(a) ? Ct(this, a) : (J(a, "dicomprogress", this.xg, !1, this), J(a, "dicomload", this.wg, !1, this), J(a, "dicomunload", this.yg, !1, this), to(a, tn(), b))
    };
    g.xg = function (a) {
        L(this, a)
    };
    g.wg = function (a) {
        Ct(this, jm(a)
            .K);
        L(this, a)
    };
    g.yg = function (a) {
        L(this, a)
    };

    function Ct(a, b) {
        var c = b.a,
            d = Jm(b);
        if (!cb(a.I, d)) {
            var e = vm(Lm(b)),
                f = wm(Lm(b)),
                h = new ArrayBuffer(4 * e * f),
                k = c.ea,
                l = dn(c),
                h = new Uint8Array(h),
                p = 0,
                m = 0;
            if (l)
                for (var c = l.c, r = l.b, l = l.a, t = 0; t < f; t++)
                    for (var x = 0; x < e; x++) {
                        var y = k[p++];
                        h[m++] = c[y];
                        h[m++] = r[y];
                        h[m++] = l[y];
                        h[m++] = 255
                    } else if (cn(c))
                        for (t = 0; t < f; t++)
                            for (x = 0; x < e; x++) h[m++] = k[p++], h[m++] = k[p++], h[m++] = k[p++], h[m++] = 255;
                    else
                        for (t = 0; t < f; t++)
                            for (x = 0; x < e; x++) y = k[p++], h[m++] = y / 256, h[m++] = y % 256, h[m++] = 0, h[m++] = 255;
            if (k = a.w) p = k.createTexture(), k.bindTexture(k.TEXTURE_2D,
                p), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.LINEAR), k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, e, f, 0, k.RGBA, k.UNSIGNED_BYTE, h), a.I[d] = p
        }
    }
    g.kd = function (a, b, c, d) {
        if (b = this.a) {
            var e = this.w;
            if (e && this.c) {
                var f = a.a;
                if (f) {
                    var h = [1, 1];
                    c && (a.G === c.a ? (h[0] = c.b, h[1] = c.g) : (h[0] = c.b, h[1] = -c.g));
                    var k = c = null,
                        l = null;
                    cn(f) ? (c = [255, 0, 0, 0], k = [0, 255, 0, 0], l = [0, 0, 255, 0]) : (c = [65280, 255, 0, 0], k = [65280, 255, 0, 0], l = [65280, 255, 0, 0]);
                    var p = vm(Lm(a)),
                        m = wm(Lm(a)),
                        f = [1, 0];
                    a.c && (f[0] = a.c.h, f[1] = a.c.g);
                    a = Jm(a) || "";
                    if (a = w(this.I, a)) {
                        Dt(this.g, p, m);
                        Dt(this.c, p, m);
                        e.bindBuffer(e.ARRAY_BUFFER, this.m);
                        e.bufferSubData(e.ARRAY_BUFFER, 0, this.g);
                        e.bindTexture(e.TEXTURE_2D,
                            a);
                        e.bindBuffer(e.ARRAY_BUFFER, this.K);
                        e.bufferSubData(e.ARRAY_BUFFER, 0, this.c);
                        a = new Wn(3, 3);
                        U(a, 0, 0, 2 / this.C);
                        U(a, 1, 1, -2 / this.B);
                        U(a, 0, 2, -1);
                        U(a, 1, 2, 1);
                        U(a, 2, 2, 1);
                        d = ao(a, d);
                        a = Array(d.c * d.b);
                        for (m = p = 0; m < d.b; m++)
                            for (var r = 0; r < d.c; r++) a[p++] = d.a[r][m];
                        e.uniformMatrix3fv(this.N, !1, a);
                        e.bindFramebuffer(e.FRAMEBUFFER, null);
                        e.viewport(0, 0, b.width, b.height);
                        e.uniform1fv(this.ua, h);
                        e.uniform4fv(this.S, c);
                        e.uniform4fv(this.G, k);
                        e.uniform4fv(this.O, l);
                        e.uniform1fv(this.W, f);
                        e.drawArrays(e.TRIANGLES, 0, 6)
                    }
                }
            }
        }
    };

    function Bt(a, b) {
        var c = new Float32Array(12);
        Dt(c, a, b);
        return c
    }

    function Dt(a, b, c) {
        b = 0 + b;
        c = 0 + c;
        a[0] = 0;
        a[1] = 0;
        a[2] = b;
        a[3] = 0;
        a[4] = 0;
        a[5] = c;
        a[6] = 0;
        a[7] = c;
        a[8] = b;
        a[9] = 0;
        a[10] = b;
        a[11] = c
    };

    function Et(a) {
        this.b = new pp;
        this.g = new iq(this);
        this.h = a;
        this.c = [];
        this.a = null;
        this.C = [];
        this.m = new wt(this);
        this.Ga = this.O = !1;
        this.I = 0;
        this.G = this.w = this.j = null;
        sn = new qn(Dp(this.b, "maxCacheSize", 400, 50), !!tb(this.b.a, "webWorkerEnabled"), Dp(this.b, "webWorkerCount", 8, 1, 20));
        this.Ga = Ft(this);
        this.O = !!window.FileReader;
        a = Xd(window.location, !0);
        if ("true" === D(a, "simple") || "simple" === D(a, "viewmode")) console.log("Forcing simple mode."), this.j = "simple";
        else if ("true" === D(a, "binary") || "binary" === D(a, "viewmode")) console.log("Forcing binary mode."),
            this.j = "binary";
        else if ("true" === D(a, "webgl") || "webgl" === D(a, "viewmode")) console.log("Using experimental webgl."), this.j = "webgl";
        console.log("User Agent:  " + Nc);
        console.log("WebGL:       " + this.Ga);
        console.log("FileReader:  " + this.O);
        console.log("Forced Mode: " + this.j);
        this.N = "true" === D(Xd(window.location, !0), "prefetch");
        console.log("Prefetch: " + this.N)
    }

    function dt(a, b) {
        a.a = b;
        var c = b.w;
        if (c)
            for (var d = 0; d < a.c.length; d++) {
                var e = a.c[d];
                if (e.m)
                    for (var e = e.m, f = c, h = 0; h < e.c.length; h++) {
                        var k = e.c[h],
                            l = f;
                        po(l.a) === po(k.c) ? pc(k.l(), "active") : rc(k.l(), "active");
                        for (var p = 0; p < k.h.length; p++) {
                            var m = k.h[p],
                                r = l,
                                r = Fm(m.h) === Fm(r);
                            m.l()
                                .style.borderColor = r ? "#1e70bd" : "#252525"
                        }
                    }
            }
        it(a)
    }

    function uq(a) {
        return a.a ? Hq(a.a) : null
    }

    function Cs(a, b, c, d) {
        var e = So(b.a);
        e && (e = e.toUpperCase());
        e = "CR" === e || "DX" === e || "XR" === e || "MG" === e;
        c = c || null;
        d = d || null;
        var f = null;
        if ("webgl" === a.j) f = new At;
        else if ("simple" === a.j) f = new ds;
        else if ("binary" === a.j) f = new cs;
        else {
            var h;
            if (h = e) h = a.Ga ? (b = b.ca) && 0 !== b.length ? (b = Lm(b[0])) ? b.a <= a.I && b.b <= a.I : !0 : !1 : !1;
            h ? f = new At : e ? f = new ds : a.O ? f = new cs : f = new ds
        }
        e = new Us(a, c, d, f);
        a.C.push(e);
        return e
    }

    function it(a) {
        if (a.a) {
            var b = a.m,
                c = a.a;
            if (c) {
                var d = c.w;
                d ? (d = d.a) ? (b.g = po(d), b.a = Ql(c), b.a ? b.c = Vr(c) : xt(b)) : xt(b) : xt(b)
            } else xt(b);
            Qp(a)
        }
    }

    function Pp(a, b, c, d) {
        var e = a.m;
        b ? (e.a = Ql(b), e.a ? e.b = $p(b, c, d) : xt(e)) : xt(e);
        for (e = 0; e < a.c.length; e++) {
            var f = a.c[e].c;
            for (d = 0; d < f.rows(); d++)
                for (c = 0; c < f.c.length + 1; c++) {
                    var h = vt(f, c, d);
                    h && h !== b && h instanceof Us && Wr(a.m, Z(h)) && lt(h, a.m.b)
                }
        }
    }

    function dq(a, b) {
        if (up(a.b))
            for (var c = $p(b, b.l()
                    .offsetWidth / 2, b.l()
                    .offsetHeight / 2), d = 0; d < a.c.length; d++)
                for (var e = a.c[d].c, f = 0; f < e.rows(); f++)
                    for (var h = 0; h < e.c.length + 1; h++) {
                        var k = vt(e, h, f);
                        k && k instanceof Us && Gt(b, k) && lt(k, c)
                    }
    }

    function Gt(a, b) {
        if (!(b && b !== a && b instanceof Us) || Ql(b) !== Ql(a)) return !1;
        var c = kt(a);
        if (!c) return !1;
        var d = kt(b);
        if (!d) return !1;
        c = go(c, d);
        return .9 <= Math.abs(c)
    }
    g = Et.prototype;
    g.rc = function () {
        var a = this.b;
        sp(a, !qp(a));
        Qp(this)
    };

    function Ht(a) {
        var b;
        if (b = !!a.c && 1 <= a.c.length) a = a.c[0], b = Zr() ? a.g.h : !a.j.j;
        return b
    }

    function It(a, b) {
        if (a.c)
            for (var c = 0; c < a.c.length; c++) As(a.c[c], b)
    }

    function ur(a, b) {
        W(a + " now " + (b ? "enabled" : "disabled"))
    }

    function Qp(a) {
        for (var b = 0; b < a.C.length; b++) V(a.C[b])
    }

    function Jt(a, b, c) {
        c = q(c) ? parseInt(c, 10) : 0;
        var d = 0 <= c ? "box-dicom-viewer-" + c : "box-dicom-viewer-stat";
        console.log('Opening window "' + d + '"');
        D(Xd(window.location, !0), "src") && (b += "&src=true");
        if (Cl) a = null;
        else {
            c = {
                target: d,
                width: 950,
                height: 600,
                location: !1,
                menubar: !1,
                resizable: !0,
                scrollbars: !1,
                status: !1,
                toolbar: !1
            };
            if (a = w(wp(a), d)) c.left = Math.max(0, a.left), c.top = Math.max(0, a.top), c.width = a.width, c.height = a.height;
            a = c
        }(b = Ll(b, a)) && b.focus();
        return b
    }
    g.li = function () {
        if (F) return alert("MultiMon is not available in Internet Explorer."), null;
        if (0 === this.c.length) return null;
        var a;
        a: if (this.c && 0 !== this.c.length) {
                for (a = 0; a < this.c.length; a++)
                    if (!this.c[a] || this.c[a].h.closed) break a;
                a = this.c.length
            } else a = 0;
        sb(this.b.a, "preferredViewerCount", a + 1);
        return Jt(this.b, this.c[0].h.location.href.toString(), a)
    };

    function Ms(a, b) {
        var c = a.G;
        if (c) {
            var d = b && b instanceof Ko ? b : uq(a);
            if (d && (d = No(d))) {
                var e = new Gd("/document/boxnote/new");
                Td(e, "folder_id", d);
                Td(e, "file_name", "Report.boxnote");
                Td(e, "description", "Radiology Report");
                Td(e, "overwrite", "0");
                Td(e, "asct", c);
                Rh(e, function (a) {
                    a = ci(a.target);
                    var b = null,
                        b = a.params.success ? a.params.new_item.id : a.db[a.params.conflict.unidb].id;
                    (a = Ll("/notes/" + b)) && a.focus()
                })
            }
        }
    }
    g.Sh = function () {
        var a = this.c[0],
            b = a.c;
        js(b, 1, 2);
        vs(Bs(b, 1, 0), new wq("/docs/help/viewer?header=false", a.a))
    };
    g.fd = function (a) {
        (a = q(a) ? a : this.a) && Kt(this, a)
    };
    g.Uf = function () {
        for (var a = 0, b = 0; b < this.c.length; b++)
            for (var c = this.c[b].c, d = c.rows(), e = c.c.length + 1, f = 0; f < d; f++)
                for (var h = 0; h < e; h++) {
                    var k = vt(c, h, f);
                    k && k instanceof Us && (Lt(this, k, a), a += 500)
                }
    };

    function Lt(a, b, c) {
        window.setTimeout(function () {
            Kt(a, b)
        }, c)
    }

    function Kt(a, b) {
        var c = No(Hq(b));
        if (c) {
            var d = Xs(b);
            if (d) {
                var d = Hr(d),
                    e = "KeyImage-" + (new Date)
                    .getTime() + ".png";
                jt(b, !0);
                a.h.Xc(c, e, d, function (a, b) {
                    b ? W(b) : W("Key image uploaded.")
                });
                window.setTimeout(function () {
                    jt(b, !1)
                }, 200)
            }
        }
    }

    function vq(a, b) {
        var c = Mo(b);
        if (c)
            for (var d = Wb(b.c), e = 0; e < d.length; e++) {
                var f = d[e],
                    h = f.na();
                h || f.w ? h && f.w && a.h.se(c, h, function () {
                    Ub(b.c, f)
                }) : a.h.ne(c, f.zb(), function (a) {
                    a = ci(a.target);
                    f.K = a.id
                })
            }
    }

    function Ls(a, b) {
        var c = Mo(b);
        c && a.h.qf(c, function (a) {
            a = ci(a.target);
            for (var c = Array(a.length), f = 0; f < a.length; f++) {
                var h = Go(a[f].location);
                h.K = a[f].id;
                c[f] = h
            }
            b.c = c || []
        })
    }

    function Ft(a) {
        a.I = 0;
        if (!window.WebGLRenderingContext) return !1;
        var b = null;
        try {
            b = document.createElement("canvas")
        } catch (c) {}
        if (!b) return !1;
        b = yt(b);
        if (!b) return !1;
        a.I = b.getParameter(b.MAX_TEXTURE_SIZE);
        return !0
    }

    function Zr() {
        return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i) ? !0 : !1
    }

    function Mt() {
        return navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Mobile/i) ? !0 : !1
    }
    g.Vf = function () {
        var a = this.b,
            b = !tb(a.a, "studyLocalizerOverride");
        sb(a.a, "studyLocalizerOverride", b);
        Qp(this)
    };
    g.he = function () {
        var a = uq(this);
        if (a) {
            for (var b = a.c.length - 1; 0 <= b;)
                if (a.c[b].w) b--;
                else {
                    a.c[b].w = !0;
                    break
                }
            Qp(this)
        }
    };
    g.ni = function () {
        var a = uq(this);
        if (a) {
            for (var b = 0; b < a.c.length; b++) a.c[b].w = !0;
            Qp(this)
        }
    };

    function Kr(a) {
        a.w || (a.w = ip(Cp(a.b, "hangingProtocols", [])));
        return a.w
    }

    function Lr(a, b) {
        for (var c = Kr(a), d = 0; d < c.length; d++)
            if (c[d].na() === b) return c[d];
        return null
    }
    g.cc = function () {
        var a = uq(this);
        if (!a) return null;
        var b = new fp,
            c = So(a);
        b.c = c;
        c = a.T("00080080");
        b.g = c;
        c = a.T("00180015");
        b.b = c;
        a = a.T("00081030");
        b.h = a;
        for (c = a = 0; c < this.c.length; c++) {
            var d = this.c[c];
            if (d.h && !d.h.closed) {
                var d = d.cc(),
                    e = a++;
                d.g = e;
                b.a.push(d)
            }
        }
        return b
    };

    function Nr(a, b, c) {
        var d = null;
        q(c) ? d = c : d = uq(a);
        if (d) {
            W(b.j);
            c = d;
            if (c.a)
                for (var e = 0; e < c.a.length; e++) c.a[e] && (c.a[e].g = 0);
            c = Math.min(a.c.length, b.a.length);
            for (e = 0; e < c; e++) {
                var f = a.c[e],
                    h = d,
                    k = b.a[e],
                    l = f.b,
                    p = k.c,
                    m = k.b;
                f.c && js(f.c, p, m);
                for (var r = 0, t = 0; t < p; t++)
                    for (var x = 0; x < m; x++) {
                        var y = Bs(f.c, x, t),
                            E = k.a[r],
                            ca = Nt(h, E);
                        if (E && ca) {
                            var qb = Cs(l, ca, f, y);
                            vs(y, qb);
                            y = qb;
                            y.clear();
                            var qb = E.b,
                                sa = E.a;
                            null !== qb && null !== sa && (y.j = new S(sa, qb), y.j.a = !!E.h);
                            Ds(y, ca, !0);
                            ht(y);
                            E.j && hq(y, -1, 1);
                            E.m && hq(y, 1, -1);
                            ca.g += 1
                        } else vs(y,
                            null);
                        r++
                    }
            }
        }
    }
    g.Eg = function () {
        var a = uq(this);
        a ? (a = No(a)) ? window.top.location.href = "/files/0/f/" + a : W("Study is not in a Box folder.") : W("Please select a study first.")
    };
    var Ot = null;

    function Pt(a) {
        if (!Ot && (Ot = Qt(), !Ot)) {
            a = a || {};
            var b = Xd(window.location),
                c = w(a, "accessToken") || D(b, "accessToken");
            if (c) b = new $l(c), "baseUrl" in a && (b.b = a.baseUrl), "baseDownloadUrl" in a && (b.c = a.baseDownloadUrl), "baseUploadUrl" in a && (b.g = a.baseUploadUrl), a = b;
            else {
                var c = w(a, "requestToken"),
                    d = w(a, "sharedName") || D(b, "sharedName");
                a = w(a, "vanityName") || D(b, "vanityName");
                a = new bm(c, d, a)
            }
            Ot = new Et(a)
        }
        return Ot
    }
    ta("box.dicom.Application.getInstance", Pt);

    function Qt() {
        try {
            var a = window.opener;
            if (!a) return console.log("Window does not have an opener"), null;
            if (!(a && a.rio && a.rio.Application && a.rio.Application.getInstance)) return console.log("Opener does not have an application"), null;
            var b = a.rio.Application.getInstance(!0);
            if (!b) return console.log("Opener does not have an application instance"), null;
            console.log("Connected to the opener!");
            return b
        } catch (c) {
            return console.log("Error accessing the window opener:"), console.log(c), null
        }
    }
    ta("box.dicom.Application.launchViewer", function (a, b) {
        var c = Jt(new pp, a, b);
        c && (c.opener = null)
    });
    ta("box.dicom.Application.decorateViewControl", function (a, b) {
        a = Ee(document, a);
        var c = Pt(),
            d = Lo(c.h, {
                study_uid: "foo",
                series: [{
                    series_uid: "bar",
                    objects: [{
                        meta: {
                            dicomUrl: b
                        }
                    }]
                }]
            }),
            c = Cs(c, d.a[0]);
        ji(c, a);
        Ds(c, d.a[0]);
        d = vg(wg, a);
        c.Na(d.width, d.height);
        return c
    });
    ta("box.dicom.Application.getSelectedTool", function () {
        return Pt()
            .g.b.ra()
    });
    ta("box.dicom.Application.setSelectedTool", function (a) {
        var b = Pt();
        Gp(b.g, a)
    });
    ta("box.dicom.Application.toggleOverlays", function () {
        Pt()
            .rc()
    });
    ta("box.dicom.Application.isWorklistVisible", function () {
        return Ht(Pt())
    });
    ta("box.dicom.Application.setWorklistVisible", function (a) {
        It(Pt(), a)
    });
    ta("box.dicom.Application.toggleWorklist", function () {
        var a = Pt();
        It(a, !Ht(a))
    });

    function Rt(a, b) {
        N.call(this, new Ce(b.document));
        this.b = a;
        this.h = b
    }
    v(Rt, N);
    Rt.prototype.xb = function () {
        var a = this.h.document.documentElement;
        a.requestFullScreen ? a.requestFullScreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullScreen && a.webkitRequestFullScreen()
    };

    function St(a, b, c) {
        Rt.call(this, a, b);
        this.S = new ch;
        this.W = this.Ha = this.C = this.B = null;
        this.N = new os(this, c);
        this.hb = this.j = this.g = this.c = this.m = this.w = null;
        this.ab = 268;
        this.aa = null;
        this.fa = new nh(1E3);
        this.G = this.ka = this.ma = null;
        this.S.W = "box-dicom-worklist-series-dragging";
        a = this.S;
        if (!a.O) {
            for (c = 0; b = a.h[c]; c++) Wg(a, b);
            a.O = !0
        }
        J(this.S, "dragstart", this.eh, !1, this);
        J(this.S, "dragend", this.ah, !1, this)
    }
    v(St, Rt);

    function Tt(a, b) {
        a.N.L(b);
        a.w && (a.w.style.top = b ? "80px" : "0px")
    }

    function As(a, b) {
        if (Zr()) a.g.L(b), Jq(a.g);
        else {
            var c = a.j,
                d = !b;
            c.j = d;
            c.g && (c.g.style.display = d ? "none" : "block");
            c.b && (c.b.style.display = d ? "none" : "block");
            Ar(c);
            st(a.c)
        }
    }
    g = St.prototype;
    g.vg = function () {
        As(this, !(Zr() ? this.g.h : !this.j.j))
    };
    g.ba = function () {
        this.R(df(this.a, "div"))
    };
    g.R = function (a) {
        this.D = a;
        a.className = "box-dicom-viewer-main";
        this.m = new Ns(this);
        this.c = new mt(this, new Zc(0, 0, 0, 0));
        this.g = new Iq(this.m);
        P(this.N, a);
        this.w = this.a.F("div", "box-dicom-viewer-stage");
        a.appendChild(this.w);
        if (Zr() || Mt()) {
            this.w.style.bottom = "20px";
            var b = this.a.F("div", "box-dicom-viewer-notice", "For informational use only and not intended for diagnostic use.");
            a.appendChild(b)
        }
        Zr() ? (P(this.g, this.w), this.g.L(!1), pc(this.g.l(), "box-dicom-viewer-scrollpane-mobile"), P(this.c, this.w)) : (a =
            this.j = new zr(this.c, this.g), a.h = Math.max(150, Math.min(480, this.ab)), Ar(a), P(this.j, this.w));
        Tt(this, this.N.h)
    };
    g.P = function () {
        St.A.P.call(this);
        this.hb = new Nf;
        J(this.hb, "resize", this.ug, !1, this);
        J(document.body, "contextmenu", this.Wg, !1, this);
        var a = this;
        this.h.onbeforeunload = function () {
            if (a.h.top === a.h.self) {
                var b = a.h,
                    c = b.document,
                    d = a.b.b,
                    e = a.h.name,
                    b = new $c(q(b.screenX) ? b.screenX : b.screenLeft, q(b.screenY) ? b.screenY : b.screenTop, q(b.outerWidth) ? b.outerWidth : c.documentElement.clientWidth, q(b.outerHeight) ? b.outerHeight : c.documentElement.clientHeight - 22),
                    c = wp(d);
                c[e] = b;
                sb(d.a, "windowRects", c)
            }
            d = tn();
            d.g.clear();
            d.b = {};
            d.c.clear();
            d.j = [];
            d.a = 0
        };
        this.ma = new Lq(this, this.h.document);
        this.j && J(this.j, "drag", this.Dh, !1, this);
        window.Leap && Leap.loop({
            enableGestures: !0
        }, function (b) {
            var c = a.ka;
            c && c.valid ? a.G = b.translation(c) : a.G = null;
            var c = b.hands,
                d = null;
            c && 0 < c.length ? (a.ka = b, d = c[0]) : a.ka = null;
            a.G && d && .5 < d.pinchStrength ? vr(a.c, Math.round(a.G[0] / 5), Math.round(a.G[2] / 5)) : a.b.g.b.Ka(b, a.G)
        });
        this.j && Ar(this.j);
        this.c && st(this.c);
        this.g && Jq(this.g)
    };
    g.eh = function (a) {
        yg(a.a.a, .75)
    };
    g.ah = function (a) {
        yg(a.a.a, 1);
        if (a.a && a.c && a.a.data instanceof Em && a.c.data instanceof us) {
            var b = a.a.data;
            a = a.c.data;
            var c = Cs(this.b, b, this, a);
            vs(a, c);
            Ds(c, b)
        }
    };
    g.Dh = function () {
        this.c && st(this.c);
        this.g && Jq(this.g)
    };
    g.ug = function () {
        this.c && st(this.c);
        this.g && Jq(this.g)
    };
    g.Wg = function (a) {
        a.b();
        a.h();
        return !1
    };

    function qr(a) {
        a.C || (a.C = new ks(a), P(a.C, void 0), a.C.L(!1));
        return a.C
    }
    g.si = function () {
        this.W || (this.W = new Ir(this));
        this.W.L(!0)
    };
    g.vi = function () {
        this.aa || (this.aa = new Es(this));
        this.aa.L(!0)
    };
    g.wi = function () {
        var a = uq(this.b);
        if (a) {
            a = new Gs(this, a);
            a.L(!0);
            var b = No(a.c) || Mo(a.c);
            b ? No(a.c) ? a.h.h.pe(b, null, a.G, a) : a.h.h.oe(b, null, a.G, a) : Hs(a, "No Box ID")
        }
    };

    function Ut(a, b) {
        var c = a.b.h;
        c.Ae(b, function (d) {
            d = ci(d.target);
            var e = d.file_version.id,
                f = d.name,
                h = f ? f.split(".")
                .pop()
                .toLowerCase() : "";
            if ("dcm" === h || "dicm" === h || "dicom" === h) c.We() ? Vt(a, c.ze(b), b) : (d = Lo(c, {
                meta: {
                    fileId: b
                },
                series: [{
                    objects: [{
                        meta: {
                            fileId: b,
                            fileVersionId: e
                        }
                    }]
                }]
            }), Os(a.m, d));
            else if ("boxdicom" === h || "medxt" === h || "clariso" === h) {
                e = null;
                d = d.representations.entries;
                for (f = 0; f < d.length; f++) "original" === d[f].representation && (e = d[f].links.content.url);
                Vt(a, e, b)
            } else console.log("ERROR: Unknown Box file type (" +
                f + ")")
        })
    }

    function Vt(a, b, c) {
        var d = a.b.h;
        d.Ab(b, function (b) {
            b = b.target;
            400 === ai(b) ? Eq(bi(b)) : (b = ci(b), "error" === b.error && "session expired" === b.errormessage ? Wt() : "fatal" === b.status ? Wt() : "error" === b.status ? Eq(b.message) : b.study ? (b = Lo(d, b.study), c && (b.g.fileId = c), Os(a.m, b)) : Eq("The file does not have a DICOM study."))
        })
    }
    g.cc = function () {
        var a = new jp,
            b = this.c.rows();
        a.c = b;
        a.b = this.c.c.length + 1;
        for (b = 0; b < a.c; b++)
            for (var c = 0; c < a.b; c++) {
                var d = vt(this.c, c, b),
                    e = null;
                d && (e = d.cc(), e.Rd = b, e.od = c);
                a.a.push(e)
            }
        return a
    };

    function Nt(a, b) {
        if (!b) return null;
        var c = a.a;
        if (!c || 0 === c.length) return null;
        for (var d = 0; 16 > d; d++)
            for (var e = 0; e < c.length; e++) {
                var f = c[e];
                if (!(f.g > d) && op(b.c, f.T("0008103E"))) return f
            }
        return null
    }
    g.M = function () {
        this.B && (this.B.Y(), delete this.B);
        this.C && (this.C.Y(), delete this.C);
        this.Ha && (this.Ha.Y(), delete this.Ha);
        this.W && (this.W.Y(), delete this.W);
        this.N && (this.N.Y(), delete this.N);
        this.m && (this.m.Y(), delete this.m);
        this.c && (this.c.Y(), delete this.c);
        this.g && (this.g.Y(), delete this.g);
        this.j && (this.j.Y(), delete this.j);
        this.aa && (this.aa.Y(), delete this.aa);
        this.ma && (this.ma.Y(), delete this.ma);
        this.fa && (ph(this.fa), this.fa.Y(), delete this.fa);
        this.w && delete this.w;
        var a = this.l();
        a && Qe(a);
        St.A.M.call(this)
    };
    g.Y = function () {
        St.A.Y.call(this)
    };
    St.prototype.dispose = St.prototype.Y;

    function Wt() {
        var a = Xd(window.location),
            b = new Gd("/login"),
            c = D(a, "login_token");
        q(c) && (Zd(a.a, "login_token"), Td(b, "login_token", c));
        Td(b, "redirect_url", a);
        window.top.location.href = b.toString()
    }
    ta("box.dicom.viewer.Viewer.launch", function (a) {
        var b = window.name,
            c = 0;
        "box-dicom-viewer-stat" !== b && (0 == b.lastIndexOf("box-dicom-viewer-", 0) ? c = parseInt(b.substring(17), 10) : window.name = "box-dicom-viewer-0");
        var b = Pt(),
            d = window,
            e = d.name;
        e && (e = w(wp(b.b), e)) && (d.moveTo(e.left, e.top), d.resizeTo(e.width, e.height));
        a && (a = ip(a), Ap(b.b, a), b.w = a);
        a = Xd(window.location, !0);
        e = a.b;
        d = D(a, "box_file_id") || D(a, "fileId");
        (e = e.match(/^\/dicom_viewer\/([0-9]+)\/(.+)$/)) && 3 === e.length && (d = e[1]);
        if (d && D(a, "login_token")) Wt();
        else {
            var f = "true" === D(a, "worklist_hide"),
                h = D(a, "overlays");
            D(a, "priors");
            var k = "true" === D(a, "embedded"),
                e = new St(b, window);
            k && Tt(e, !1);
            u(h) && sp(b.b, "true" === h);
            Zr() && (e.ab = 10, e.c && js(e.c, 1, 1), sp(b.b, !1));
            Mt() && sp(b.b, !1);
            P(e, void 0);
            b.c[c] = e;
            f && As(e, !1);
            d && Ut(e, d);
            (a = D(a, "manifest_url")) && Vt(e, a);
            if (0 === c)
                for (c = b.b, b = Dp(c, "preferredViewerCount", 1, 1, 4), a = window.location.toString(), d = 1; d < b; d++) Jt(c, a, d)
        }
    });
    ta("box.dicom.createViewer", function (a, b) {
        a = Ee(document, a);
        if (!a) return null;
        var c = b || {},
            d = c.overlays || {},
            e = c.toolbar || {},
            f = c.worklist || {},
            h = Pt(c),
            k = new St(h, window, e.buttons);
        "visible" in d && sp(h.b, d.visible);
        "fields" in d && sb(h.b.a, "overlays", Pa(d.fields));
        "visible" in e && Tt(k, e.visible);
        "boxNotesToken" in c && (h.G = c.boxNotesToken);
        P(k, a);
        h.c[0] = k;
        "visible" in f && As(k, f.visible);
        "width" in f && (k.ab = f.width);
        if (c = c.studies)
            for (h = h.h, d = 0; d < c.length; d++) e = c[d], "fileId" in e ? Ut(k, e.fileId) : "manifestUrl" in e ?
                Vt(k, e.manifestUrl) : "series" in e && (e = Lo(h, e), Os(k.m, e));
        return k
    });
    ta("box.dicom.createImportWidget", function (a, b) {
        a = Ee(document, a);
        if (!a) return null;
        var c = Pt(b || {}),
            c = new To(c, b);
        ji(c, a);
        return c
    });
    ta("box.dicom.readDicomFile", function (a, b) {
        var c = b || {},
            d = w(c, "scope", null),
            e = w(c, "success", ba),
            f = w(c, "error", ba);
        if (a) {
            var h = new FileReader;
            h.onload = function () {
                var a = new Uint8Array(h.result),
                    b = new Um;
                try {
                    Vm(b, a, "7FE00010"), e.call(d, b)
                } catch (c) {
                    f.call(d, c)
                }
            };
            h.readAsArrayBuffer(a)
        } else f.call(d, "Null file")
    });
    ta("box.dicom.readDicomUrl", function (a, b) {
        var c = b || {},
            d = w(c, "scope", null),
            c = w(c, "success", ba);
        vn(tn(!0), a, c, d)
    });
    ta("box.dicom.getParam", function (a) {
        var b = window.location.toString(),
            c = b.search(Fd),
            d;
        b: {
            d = 0;
            for (var e = a.length; 0 <= (d = b.indexOf(a, d)) && d < c;) {
                var f = b.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = b.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break b;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) a = null;
        else {
            e = b.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += a.length + 1;
            a = decodeURIComponent(b.substr(d, e - d)
                .replace(/\+/g, " "))
        }
        return a
    });
})
.call(window);
