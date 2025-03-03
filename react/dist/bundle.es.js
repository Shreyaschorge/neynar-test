import * as rn from "react";
import te, { useState as oe, createContext as wi, useEffect as ue, useMemo as gt, useContext as ki, useRef as Ce, useCallback as be, useLayoutEffect as xo, useDebugValue as Eo, memo as wr } from "react";
/**
  * @pigment-css/react v0.0.9
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var To = Object.defineProperty, vo = Object.defineProperties, So = Object.getOwnPropertyDescriptors, ms = Object.getOwnPropertySymbols, kr = Object.prototype.hasOwnProperty, Pr = Object.prototype.propertyIsEnumerable, an = (n, e, t) => e in n ? To(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, St = (n, e) => {
  for (var t in e || (e = {}))
    kr.call(e, t) && an(n, t, e[t]);
  if (ms)
    for (var t of ms(e))
      Pr.call(e, t) && an(n, t, e[t]);
  return n;
}, Ao = (n, e) => vo(n, So(e)), Lo = (n, e) => {
  var t = {};
  for (var s in n)
    kr.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && ms)
    for (var s of ms(n))
      e.indexOf(s) < 0 && Pr.call(n, s) && (t[s] = n[s]);
  return t;
};
function Or(n) {
  var e, t, s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = Or(n[e])) && (s && (s += " "), s += t);
  } else for (t in n) n[t] && (s && (s += " "), s += t);
  return s;
}
function Co() {
  for (var n, e, t = 0, s = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = Or(n)) && (s && (s += " "), s += e);
  return s;
}
function Ro(n) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return e[t] === void 0 && (e[t] = n(t)), e[t];
  };
}
var _o = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bo = /* @__PURE__ */ Ro(
  function(n) {
    return _o.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
/**
  * @pigment-css/react v0.0.9
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
function Io(n, e) {
  const { ownerState: t = {} } = n;
  return e.filter(
    ({ props: i }) => typeof i == "function" ? i(St(St({}, n), n.ownerState)) : Object.entries(i).every(([r, a]) => t[r] === a || n[r] === a)
  ).map(({ className: i }) => i);
}
function Do(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96;
}
var Fr = (n) => n !== "sx" && n !== "as" && n !== "ownerState", wo = (n) => Fr(n) && n !== "classes";
function K(n, e = {}) {
  const { name: t, slot: s, shouldForwardProp: i } = e;
  let r = i;
  i || (Do(n) ? r = bo : s === "Root" || s === "root" ? r = wo : r = Fr);
  const a = !r("as");
  function o(l = {}) {
    const { displayName: c, classes: d = [], vars: h = {}, variants: u = [] } = l, f = rn.forwardRef(function(p, x) {
      const S = p, { as: T, className: C, sx: E, style: L, ownerState: _ } = S, I = Lo(S, ["as", "className", "sx", "style", "ownerState"]), P = a && T || n, b = Object.entries(h).reduce(
        (U, [N, [H, V]]) => {
          const M = H(I);
          return typeof M > "u" || (typeof M == "string" || V ? U[`--${N}`] = M : U[`--${N}`] = `${M}px`), U;
        },
        {}
      ), w = typeof E == "string" ? E : E == null ? void 0 : E.className, G = E && typeof E != "string" ? E.vars : void 0;
      G && Object.entries(G).forEach(([U, [N, H]]) => {
        typeof N == "string" || H ? b[`--${U}`] = N : b[`--${U}`] = `${N}px`;
      });
      const O = Co(
        d,
        w,
        C,
        Io(p, u)
      ), F = {};
      for (const U in I)
        a && U === "as" || r(U) && (F[U] = I[U]);
      return /* @__PURE__ */ rn.createElement(
        P,
        Ao(St(St({}, F), P.__styled_by_pigment_css && { ownerState: _ }), {
          ref: x,
          className: O,
          style: St(St({}, b), L)
        })
      );
    });
    let g = c;
    return !g && t && (g = `${t}${s ? `-${s}` : ""}`), f.displayName = `Styled(${g})`, f.__styled_by_pigment_css = !0, f;
  }
  return o;
}
const Ge = {
  vars: {
    colors: {
      primary: "var(--colors-primary)"
    },
    typography: {
      fonts: {
        base: "var(--typography-fonts-base)"
      },
      fontWeights: {
        regular: "var(--typography-fontWeights-regular)",
        bold: "var(--typography-fontWeights-bold)"
      },
      fontSizes: {
        large: "var(--typography-fontSizes-large)",
        medium: "var(--typography-fontSizes-medium)",
        small: "var(--typography-fontSizes-small)"
      }
    },
    palette: {
      background: "var(--palette-background)",
      border: "var(--palette-border)",
      text: "var(--palette-text)",
      textMuted: "var(--palette-textMuted)"
    }
  }
};
var Mr = { exports: {} }, Mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function ko() {
  if (on) return Mt;
  on = 1;
  var n = te, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, l, c) {
    var d, h = {}, u = null, f = null;
    c !== void 0 && (u = "" + c), l.key !== void 0 && (u = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (d in l) s.call(l, d) && !r.hasOwnProperty(d) && (h[d] = l[d]);
    if (o && o.defaultProps) for (d in l = o.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: e, type: o, key: u, ref: f, props: h, _owner: i.current };
  }
  return Mt.Fragment = t, Mt.jsx = a, Mt.jsxs = a, Mt;
}
Mr.exports = ko();
var v = Mr.exports, Nr = /* @__PURE__ */ ((n) => (n.Light = "light", n.Dark = "dark", n))(Nr || {}), st = /* @__PURE__ */ ((n) => (n.FARCASTER = "farcaster", n.NEYNAR = "neynar", n.WARPCAST = "warpcast", n))(st || {});
function Pi(n, e = "", {
  serialize: t = JSON.stringify,
  deserialize: s = JSON.parse
} = {}) {
  const [i, r] = oe(() => {
    if (typeof window > "u")
      return e;
    try {
      const l = window.localStorage.getItem(n);
      return l ? s(l) : e;
    } catch (l) {
      return console.error("Error reading from localStorage", l), e;
    }
  });
  return [i, (l) => {
    try {
      const c = l instanceof Function ? l(i) : l;
      r(c), typeof window < "u" && window.localStorage.setItem(n, t(c));
    } catch (c) {
      console.error("Error writing to localStorage", c);
    }
  }, () => {
    try {
      window.localStorage.removeItem(n), r(e);
    } catch (l) {
      console.error("Error removing from localStorage", l);
    }
  }];
}
var wt = /* @__PURE__ */ ((n) => (n.NEYNAR_AUTHENTICATED_USER = "neynar_authenticated_user", n))(wt || {});
const Ur = wi(void 0), Po = ({
  children: n,
  _setIsAuthenticated: e,
  _setUser: t,
  _onAuthSuccess: s,
  _onSignout: i
}) => {
  const {
    isAuthenticated: r
  } = it(), [a, o] = oe(!1), [l, c] = oe(null), [d] = Pi(wt.NEYNAR_AUTHENTICATED_USER);
  ue(() => {
    e(a);
  }, [a]), ue(() => {
    o(r);
  }, [r]), ue(() => {
    d ? (c(d), o(!0)) : (c(null), o(!1));
  }, []), ue(() => {
    t(l);
  }, [l]);
  const h = (g) => {
    s && s(g);
  }, u = (g) => {
    i && i(g);
  }, f = gt(() => ({
    isAuthenticated: a,
    user: l,
    setIsAuthenticated: o,
    setUser: c,
    onAuthSuccess: h,
    onSignout: u
  }), [a, l]);
  return /* @__PURE__ */ v.jsx(Ur.Provider, {
    value: f,
    children: n
  });
}, Oo = () => {
  const n = ki(Ur);
  if (!n)
    throw new Error("useAuth must be used within a AuthContextProvider");
  return n;
}, Fo = /* @__PURE__ */ K("div")({
  classes: ["tbaom7c"]
}), Mo = /* @__PURE__ */ K("div")({
  classes: ["t1ff44zi"],
  variants: [{
    props: {
      type: "success"
    },
    className: "t1ff44zi-1"
  }, {
    props: {
      type: "error"
    },
    className: "t1ff44zi-2"
  }, {
    props: {
      type: "warning"
    },
    className: "t1ff44zi-3"
  }, {
    props: {
      type: "info"
    },
    className: "t1ff44zi-4"
  }]
});
var Br = /* @__PURE__ */ ((n) => (n.Success = "success", n.Error = "error", n.Warning = "warning", n.Info = "info", n))(Br || {});
const $r = wi(void 0), _0 = ({
  children: n,
  settings: {
    clientId: e,
    defaultTheme: t = Nr.Light,
    eventsCallbacks: s
  }
}) => {
  const [i] = oe(e), [r, a] = oe(!1), [o, l] = oe(t), [c, d] = oe([]), [h, u] = oe(null), f = (T, C) => {
    const E = {
      type: T,
      message: C
    };
    d((L) => [...L, E]), setTimeout(() => g(E), 5e3);
  }, g = (T) => {
    d((C) => C.filter((E) => E !== T));
  };
  ue(() => {
    const T = document.querySelector(":root");
    T && (o === "light" ? (T.classList.add("theme-light"), T.classList.remove("theme-dark")) : o === "dark" && (T.classList.add("theme-dark"), T.classList.remove("theme-light")));
  }, [o]);
  const m = (T) => {
    a(T);
  }, p = (T) => {
    u(T);
  }, x = () => {
    if (h) {
      const {
        signer_uuid: T,
        ...C
      } = h;
      u(null), a(!1), localStorage.removeItem(wt.NEYNAR_AUTHENTICATED_USER), s != null && s.onSignout && s.onSignout(C);
    }
  }, S = gt(() => ({
    client_id: i,
    theme: o,
    isAuthenticated: r,
    user: h,
    setTheme: l,
    showToast: f,
    logoutUser: x
  }), [i, o, r, h, l, f, x]);
  return /* @__PURE__ */ v.jsx($r.Provider, {
    value: S,
    children: /* @__PURE__ */ v.jsxs(Po, {
      _setIsAuthenticated: m,
      _setUser: p,
      _onAuthSuccess: s == null ? void 0 : s.onAuthSuccess,
      _onSignout: s == null ? void 0 : s.onSignout,
      children: [n, /* @__PURE__ */ v.jsx(Fo, {
        children: c.map((T, C) => /* @__PURE__ */ v.jsx(Mo, {
          type: T.type,
          children: T.message
        }, C))
      })]
    })
  });
}, it = () => {
  const n = ki($r);
  if (!n)
    throw new Error("useNeynarContext must be used within a NeynarContextProvider");
  return n;
}, No = () => /* @__PURE__ */ v.jsxs("svg", {
  width: "18",
  height: "17",
  viewBox: "0 0 18 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ v.jsx("path", {
    d: "M13.7222 0H4.27778C2.19137 0 0.5 1.69137 0.5 3.77778V13.2222C0.5 15.3086 2.19137 17 4.27778 17H13.7222C15.8086 17 17.5 15.3086 17.5 13.2222V3.77778C17.5 1.69137 15.8086 0 13.7222 0Z",
    fill: "#855DCD"
  }), /* @__PURE__ */ v.jsx("path", {
    d: "M4.88281 2.64453H13.1184V14.3556H11.9095V8.9912H11.8976C11.764 7.50859 10.518 6.34675 9.00059 6.34675C7.4832 6.34675 6.23717 7.50859 6.10356 8.9912H6.0917V14.3556H4.88281V2.64453Z",
    fill: "white"
  }), /* @__PURE__ */ v.jsx("path", {
    d: "M2.69141 4.30664L3.18252 5.96886H3.59807V12.6933C3.38943 12.6933 3.2203 12.8625 3.2203 13.0711V13.5244H3.14474C2.9361 13.5244 2.76696 13.6936 2.76696 13.9022V14.3555H6.99807V13.9022C6.99807 13.6936 6.82893 13.5244 6.6203 13.5244H6.54474V13.0711C6.54474 12.8625 6.3756 12.6933 6.16696 12.6933H5.71363V4.30664H2.69141Z",
    fill: "white"
  }), /* @__PURE__ */ v.jsx("path", {
    d: "M11.9854 12.6933C11.7768 12.6933 11.6076 12.8625 11.6076 13.0711V13.5244H11.5321C11.3235 13.5244 11.1543 13.6936 11.1543 13.9022V14.3555H15.3854V13.9022C15.3854 13.6936 15.2162 13.5244 15.0076 13.5244H14.9321V13.0711C14.9321 12.8625 14.7629 12.6933 14.5543 12.6933V5.96886H14.9699L15.461 4.30664H12.4387V12.6933H11.9854Z",
    fill: "white"
  })]
}), ln = () => /* @__PURE__ */ v.jsxs("svg", {
  width: "32",
  height: "17",
  viewBox: "0 0 50 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ v.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M38.3744 13.7311C38.3744 16.1209 37.7639 18.368 36.6904 20.3252C32.5685 19.8525 27.847 18.9503 22.8999 17.6247C20.4058 16.9564 18.0151 16.2236 15.7697 15.4495L15.7693 15.4486C15.7579 15.445 15.7465 15.4413 15.7351 15.4376C15.6448 15.4064 15.5547 15.3752 15.4649 15.3439C12.8978 14.399 11.2356 12.2056 11.4168 10.0315L11.4482 10.0399L11.4215 10.0133C13.0427 4.23612 18.3483 0 24.6434 0C32.2268 0 38.3744 6.14762 38.3744 13.7311Z",
    fill: "black"
  }), /* @__PURE__ */ v.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.3804 17.2987C12.4882 16.5313 13.9658 16.1804 15.5002 16.3953C17.7731 17.156 20.1682 17.8782 22.6535 18.5441C27.397 19.8151 31.9584 20.7444 36.0833 21.3275C33.623 25.0252 29.4177 27.4619 24.6434 27.4619C18.294 27.4619 12.9511 23.1524 11.3804 17.2987Z",
    fill: "black"
  }), /* @__PURE__ */ v.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M43.0917 13.4458C41.6461 12.6648 39.9756 11.8759 38.1233 11.1029C38.0363 10.6544 37.9275 10.2136 37.7981 9.78174C39.9806 10.6648 41.9403 11.5752 43.6139 12.4794C45.7007 13.6069 47.3703 14.7394 48.4714 15.816C49.5356 16.8566 50.2295 18.0063 49.93 19.1241C49.6304 20.2419 48.4547 20.8906 47.0128 21.2597C45.5209 21.6415 43.5087 21.7875 41.1377 21.7206C39.6046 21.6773 37.9082 21.5444 36.0864 21.3234C36.3086 20.9891 36.5165 20.6446 36.7094 20.2906C38.3134 20.4733 39.8091 20.5841 41.1687 20.6225C43.4946 20.6882 45.3908 20.5409 46.7404 20.1955C48.14 19.8373 48.7389 19.3249 48.8689 18.8398C48.9989 18.3547 48.7364 17.6115 47.7034 16.6015C46.7073 15.6275 45.1388 14.5519 43.0917 13.4458ZM8.86229 3.16772C10.7583 3.22128 12.9038 3.41177 15.2278 3.73661C14.8974 4.04803 14.5824 4.37566 14.2841 4.71822C12.3016 4.46314 10.4678 4.312 8.83127 4.26577C6.50541 4.20006 4.6092 4.34737 3.25958 4.69279C1.86001 5.05099 1.26107 5.56342 1.13109 6.04849C1.00112 6.53356 1.2636 7.27681 2.29657 8.2868C3.29267 9.26075 4.86118 10.3364 6.90828 11.4425C6.94181 11.4606 6.97546 11.4787 7.00923 11.4968C6.84251 11.5938 6.72574 11.7161 6.66353 11.8645C6.57791 12.0688 6.60013 12.3121 6.72013 12.5874C6.60757 12.5279 6.49623 12.4684 6.38612 12.4089C4.29926 11.2814 2.62971 10.1489 1.5286 9.07223C0.464367 8.03166 -0.229485 6.882 0.0700354 5.76418C0.369556 4.64635 1.54528 3.99764 2.98722 3.6286C4.47911 3.24677 6.49126 3.10074 8.86229 3.16772Z",
    fill: "black"
  }), /* @__PURE__ */ v.jsx("ellipse", {
    cx: "5.94866",
    cy: "11.5309",
    rx: "3.76009",
    ry: "0.575832",
    transform: "rotate(29.2824 5.94866 11.5309)",
    fill: "black"
  })]
}), Uo = () => /* @__PURE__ */ v.jsxs("svg", {
  width: "17",
  height: "17",
  viewBox: "0 0 17 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ v.jsx("mask", {
    id: "mask0_875_48",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "17",
    height: "17",
    children: /* @__PURE__ */ v.jsx("path", {
      d: "M16.9947 0H0V16.9947H16.9947V0Z",
      fill: "white"
    })
  }), /* @__PURE__ */ v.jsxs("g", {
    mask: "url(#mask0_875_48)",
    children: [/* @__PURE__ */ v.jsx("path", {
      d: "M12.7871 16.9947H4.20765C1.88755 16.9947 0 15.1073 0 12.7871V4.20771C0 1.88756 1.88755 0 4.20765 0H12.7871C15.1072 0 16.9947 1.88756 16.9947 4.20771V12.7871C16.9947 15.1073 15.1072 16.9947 12.7871 16.9947Z",
      fill: "#472A91"
    }), /* @__PURE__ */ v.jsx("path", {
      d: "M11.1523 5.37891L10.3143 8.52601L9.47364 5.37891H7.53893L6.69017 8.54919L5.84419 5.37891H3.64062L5.68823 12.3371H7.58931L8.49835 9.10599L9.40736 12.3371H11.3125L13.3557 5.37891H11.1523Z",
      fill: "white"
    })]
  })]
});
var Bo = {
  NVM_INC: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/include/node",
  npm_package_devDependencies__storybook_test: "^8.2.9",
  npm_package_devDependencies__storybook_addon_links: "^8.2.9",
  TERM_PROGRAM: "vscode",
  NODE: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin/node",
  INIT_CWD: "/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react",
  ANDROID_HOME: "/Users/shreyaschorge/Library/Android/sdk",
  NVM_CD_FLAGS: "-q",
  npm_package_devDependencies_typescript: "^5.4.5",
  npm_config_version_git_tag: "true",
  TERM: "xterm-256color",
  SHELL: "/bin/zsh",
  npm_package_devDependencies_vite: "^5.2.10",
  npm_package_devDependencies__storybook_addon_essentials: "^8.2.9",
  HOMEBREW_REPOSITORY: "/opt/homebrew",
  TMPDIR: "/var/folders/32/91zw5j9s2dngfbj1ltrp5gnh0000gn/T/",
  npm_package_devDependencies__pigment_css_vite_plugin: "^0.0.9",
  npm_config_init_license: "MIT",
  TERM_PROGRAM_VERSION: "1.96.2",
  npm_package_devDependencies__vitejs_plugin_react: "^4.2.1",
  npm_package_devDependencies_hls_js: "^1.5.13",
  ZDOTDIR: "/Users/shreyaschorge",
  ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
  MallocNanoZone: "0",
  npm_package_devDependencies__storybook_blocks: "^8.2.9",
  npm_package_devDependencies__storybook_addon_interactions: "^8.2.9",
  npm_config_registry: "https://registry.yarnpkg.com",
  npm_package_peerDependencies_react_dom: "^18.3.0",
  npm_package_readmeFilename: "README.md",
  NVM_DIR: "/Users/shreyaschorge/.nvm",
  USER: "shreyaschorge",
  npm_package_description: "Farcaster frontend component library powered by Neynar",
  npm_package_devDependencies_dotenv: "^16.4.5",
  npm_package_devDependencies__types_react: "^18.3.0",
  npm_package_license: "MIT",
  COMMAND_MODE: "unix2003",
  npm_package_scripts_build_storybook: "storybook build",
  npm_package_devDependencies_vite_tsconfig_paths: "^4.3.2",
  npm_package_devDependencies__babel_core: "^7.24.4",
  SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.eHn0HChl6E/Listeners",
  npm_package_devDependencies_eslint_plugin_storybook: "^0.8.0",
  __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0",
  npm_execpath: "/opt/homebrew/Cellar/yarn/1.22.22/libexec/bin/yarn.js",
  npm_package_dependencies_storybook_source_link: "^4.0.1",
  npm_package_module: "dist/bundle.es.js",
  npm_package_author_name: "Neynar",
  npm_package_devDependencies__types_react_dom: "^18.3.0",
  npm_package_peerDependencies_swr: "^2.2.5",
  npm_package_peerDependencies__pigment_css_react: "^0.0.9",
  PATH: "/var/folders/32/91zw5j9s2dngfbj1ltrp5gnh0000gn/T/yarn--1736423021668-0.9448083458265:/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react/node_modules/.bin:/Users/shreyaschorge/.config/yarn/link/node_modules/.bin:/Users/shreyaschorge/Desktop/frontend-monorepo/node_modules/.bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/lib/node_modules/npm/bin/node-gyp-bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin/node_modules/npm/bin/node-gyp-bin:/opt/homebrew/opt/openjdk/bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Applications/Postgres.app/Contents/Versions/latest/bin:/opt/homebrew/opt/openjdk/bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin:/Users/shreyaschorge/.orbstack/bin:/Users/shreyaschorge/Library/Android/sdk/emulator:/Users/shreyaschorge/Library/Android/sdk/platform-tools:/Users/shreyaschorge/Library/Application Support/Code/User/globalStorage/github.copilot-chat/debugCommand:/Users/shreyaschorge/.orbstack/bin:/Users/shreyaschorge/Library/Android/sdk/emulator:/Users/shreyaschorge/Library/Android/sdk/platform-tools",
  npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build"]}',
  _: "/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react/node_modules/.bin/vite",
  USER_ZDOTDIR: "/Users/shreyaschorge",
  __CFBundleIdentifier: "com.microsoft.VSCode",
  PWD: "/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react",
  npm_package_devDependencies__storybook_addon_onboarding: "^8.2.9",
  npm_lifecycle_event: "build",
  npm_package_devDependencies__storybook_addon_themes: "^8.2.9",
  LANG: "en_US.UTF-8",
  npm_package_devDependencies_storybook: "^8.2.9",
  npm_package_types: "dist/index.d.ts",
  npm_package_name: "@neynar/react",
  npm_package_devDependencies__pigment_css_react: "^0.0.9",
  npm_package_devDependencies__babel_preset_react: "^7.24.1",
  npm_package_devDependencies__babel_preset_env: "^7.24.4",
  npm_package_scripts_build: "tsc && vite build",
  npm_config_version_commit_hooks: "true",
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
  XPC_FLAGS: "0x0",
  npm_package_devDependencies__chromatic_com_storybook: "^1.3.3",
  npm_config_bin_links: "true",
  npm_package_devDependencies__storybook_react: "^8.2.9",
  npm_package_dependencies_next: "14.2.16",
  npm_package_devDependencies_vite_plugin_dts: "^4.3.0",
  npm_package_main: "dist/bundle.cjs.js",
  XPC_SERVICE_NAME: "0",
  npm_package_version: "0.9.7",
  VSCODE_INJECTION: "1",
  SHLVL: "6",
  HOME: "/Users/shreyaschorge",
  VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
  npm_package_peerDependencies_hls_js: "^1.5.13",
  npm_package_scripts_storybook: "storybook dev -p 6006",
  npm_config_save_prefix: "^",
  npm_config_strict_ssl: "true",
  HOMEBREW_PREFIX: "/opt/homebrew",
  npm_config_version_git_message: "v%s",
  LOGNAME: "shreyaschorge",
  YARN_WRAP_OUTPUT: "false",
  PREFIX: "/opt/homebrew",
  npm_lifecycle_script: "tsc && vite build",
  VSCODE_GIT_IPC_HANDLE: "/var/folders/32/91zw5j9s2dngfbj1ltrp5gnh0000gn/T/vscode-git-5dbc6eb4e3.sock",
  npm_package_devDependencies__storybook_react_vite: "^8.2.9",
  npm_package_peerDependencies_react: "^18.3.0",
  npm_package_eslintConfig_extends_1: "plugin:storybook/recommended",
  NVM_BIN: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin",
  npm_package_eslintConfig_extends_0: "react-app",
  npm_config_version_git_sign: "",
  npm_config_ignore_scripts: "",
  npm_config_user_agent: "yarn/1.22.22 npm/? node/v22.9.0 darwin arm64",
  VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",
  GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
  HOMEBREW_CELLAR: "/opt/homebrew/Cellar",
  INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:/opt/homebrew/share/info:/opt/homebrew/share/info:",
  npm_package_devDependencies_axios: "^1.6.8",
  npm_package_devDependencies_swr: "^2.2.5",
  npm_config_init_version: "1.0.0",
  npm_config_ignore_optional: "",
  COLORTERM: "truecolor",
  npm_node_execpath: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin/node",
  npm_config_version_tag_prefix: "v",
  NODE_ENV: "production",
  SDK_VERSION: '"0.9.7"'
};
const li = /* @__PURE__ */ K("img")({
  classes: ["ippfsqr"]
}), $o = /* @__PURE__ */ K("button")({
  classes: ["b1yzssjb"]
}), Go = /* @__PURE__ */ K("div")({
  classes: ["m1xn8b2e"]
}), Vo = /* @__PURE__ */ K("button")({
  classes: ["mwuiqyg"]
}), Ho = (n, e) => {
  if (e)
    return e;
  switch (n) {
    case st.FARCASTER:
      return "Sign in with Farcaster";
    case st.NEYNAR:
      return "Sign in with Neynar";
    case st.WARPCAST:
      return "Sign in with Warpcast";
    default:
      return "Sign in with Neynar";
  }
}, Ko = (n, e, t) => {
  if (e)
    return e;
  if (t)
    return /* @__PURE__ */ v.jsx(li, {
      src: t,
      alt: "Custom logo"
    });
  switch (n) {
    case st.FARCASTER:
      return /* @__PURE__ */ v.jsx(No, {});
    case st.NEYNAR:
      return /* @__PURE__ */ v.jsx(ln, {});
    case st.WARPCAST:
      return /* @__PURE__ */ v.jsx(Uo, {});
    default:
      return /* @__PURE__ */ v.jsx(ln, {});
  }
}, jo = ({
  children: n,
  label: e,
  variant: t = st.NEYNAR,
  icon: s,
  customLogoUrl: i,
  modalStyle: r = {},
  modalButtonStyle: a = {},
  ...o
}) => {
  const {
    client_id: l,
    user: c,
    isAuthenticated: d
  } = it(), {
    setIsAuthenticated: h,
    setUser: u,
    onAuthSuccess: f,
    onSignout: g
  } = Oo(), [m, p, x] = Pi(wt.NEYNAR_AUTHENTICATED_USER), [S, T] = oe(!1), C = Ce(null), E = `${Bo.NEYNAR_LOGIN_URL ?? "https://app.neynar.com/login"}?client_id=${l}`, L = new URL(E).origin, _ = Ce(null), I = be(async (F) => {
    var U;
    if (F.origin === L && F.data && F.data.is_authenticated) {
      h(!0), (U = C.current) == null || U.close(), window.removeEventListener("message", I);
      const N = {
        signer_uuid: F.data.signer_uuid,
        ...F.data.user
      };
      p(N), u(N), f({
        user: N
      });
    }
  }, [l, h]), P = be(() => {
    const N = window.screen.width / 2 - 300, V = `width=600,height=700,top=${window.screen.height / 2 - 700 / 2},left=${N}`;
    if (C.current = window.open(E, "_blank", V), !C.current) {
      console.error("Failed to open the authentication window. Please check your pop-up blocker settings.");
      return;
    }
    window.addEventListener("message", I, !1);
  }, [l, I]), b = () => {
    if (c) {
      const F = c;
      x(), h(!1), G();
      const {
        signer_uuid: U,
        ...N
      } = F;
      g(N);
    }
  }, w = () => T(!0), G = () => T(!1);
  ue(() => () => {
    window.removeEventListener("message", I);
  }, [I]);
  const O = be((F) => {
    _.current && !_.current.contains(F.target) && G();
  }, []);
  return ue(() => (S ? document.addEventListener("mousedown", O) : document.removeEventListener("mousedown", O), () => {
    document.removeEventListener("mousedown", O);
  }), [S, O]), /* @__PURE__ */ v.jsxs(v.Fragment, {
    children: [S && /* @__PURE__ */ v.jsxs(Go, {
      style: r,
      ref: _,
      children: [/* @__PURE__ */ v.jsx(li, {
        src: c == null ? void 0 : c.pfp_url,
        alt: c == null ? void 0 : c.username
      }), /* @__PURE__ */ v.jsxs("span", {
        children: ["@", c == null ? void 0 : c.username]
      }), /* @__PURE__ */ v.jsx(Vo, {
        style: a,
        onClick: b,
        children: "Sign out"
      })]
    }), /* @__PURE__ */ v.jsx($o, {
      onClick: d ? w : P,
      ...o,
      children: d ? /* @__PURE__ */ v.jsxs(v.Fragment, {
        children: [/* @__PURE__ */ v.jsx(li, {
          src: c == null ? void 0 : c.pfp_url,
          alt: `${c == null ? void 0 : c.username} profile picture`
        }), /* @__PURE__ */ v.jsxs("span", {
          style: {
            marginLeft: "10px"
          },
          children: ["@", c == null ? void 0 : c.username]
        })]
      }) : /* @__PURE__ */ v.jsxs(v.Fragment, {
        children: [Ko(t, s, i), /* @__PURE__ */ v.jsx("span", {
          style: {
            marginLeft: "5px"
          },
          children: Ho(t, e)
        })]
      })
    })]
  });
}, Gr = /* @__PURE__ */ K("img")({
  classes: ["a11pt0xp"],
  vars: {
    "a11pt0xp-0": [(n, e = Ge) => n.width || "45px", !1],
    "a11pt0xp-1": [(n, e = Ge) => n.width || "45px", !1]
  }
}), cn = "https://warpcast.com", Vr = /(^|\s)\/\w+/g, Hr = /@\w+(\.eth)?/g, Kr = /((https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?)/g, dn = new RegExp(`(${Vr.source})|(${Hr.source})|(${Kr.source})`, "g"), Wo = (n) => Vr.test(n) ? `${cn}/~/channel${n.trim()}` : Hr.test(n) ? `${cn}/${n.substring(1)}` : Kr.test(n) ? n.startsWith("http") ? n : `http://${n}` : "", Yo = /* @__PURE__ */ K("a")({
  classes: ["s4xymqs"]
}), qo = (n) => n.filter((e) => e.url).map((e) => e.url), zo = (n, e) => {
  if (!n) return [];
  const t = qo(e), s = [];
  let i = 0, r;
  for (; (r = dn.exec(n)) !== null; ) {
    const a = r.index;
    i < a && s.push(n.slice(i, a));
    const o = r[0].trim();
    if (t.includes(o))
      s.push(o);
    else {
      const l = Wo(o);
      s.push(/* @__PURE__ */ v.jsx(Yo, {
        href: l,
        target: "_blank",
        children: o
      }, a));
    }
    i = dn.lastIndex;
  }
  return i < n.length && s.push(n.slice(i)), s;
}, Ie = /* @__PURE__ */ K("div")({
  classes: ["be87m0m"],
  vars: {
    "be87m0m-0": [(n, e = Ge) => n.alignItems || "flex-start", !1],
    "be87m0m-1": [(n, e = Ge) => n.justifyContent || "flex-start", !1],
    "be87m0m-2": [(n, e = Ge) => n.flexGrow || "initial", !0],
    "be87m0m-3": [(n, e = Ge) => n.flexShrink || "initial", !0],
    "be87m0m-4": [(n, e = Ge) => n.spacing ?? n.spacingVertical ?? n.spacingTop ?? "0px", !1],
    "be87m0m-5": [(n, e = Ge) => n.spacing ?? n.spacingHorizontal ?? n.spacingRight ?? "0px", !1],
    "be87m0m-6": [(n, e = Ge) => n.spacing ?? n.spacingVertical ?? n.spacingBottom ?? "0px", !1],
    "be87m0m-7": [(n, e = Ge) => n.spacing ?? n.spacingHorizontal ?? n.spacingLeft ?? "0px", !1]
  }
}), Xo = () => Ie, jr = /* @__PURE__ */ K(Xo())({
  classes: ["v1lr8cv7"]
}), Zo = () => Ie, Me = /* @__PURE__ */ K(Zo())({
  classes: ["ha1dvpi"]
}), Wr = () => /* @__PURE__ */ v.jsxs("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ v.jsx("rect", {
    width: "18",
    height: "18",
    rx: "9",
    fill: "#8A63D2"
  }), /* @__PURE__ */ v.jsx("path", {
    d: "M13.375 7.19002H10.25V3.58541C10.25 3.40518 10.125 3.22495 10 3.10479C9.75 2.92456 9.3125 2.98464 9.125 3.22495L4.125 9.83339C4.0625 9.95355 4 10.0737 4 10.1939C4 10.5543 4.25 10.7946 4.625 10.7946H7.75V14.3992C7.75 14.7597 8 15 8.375 15C8.5625 15 8.75 14.8798 8.875 14.7597L13.875 8.15125C13.9375 8.03109 14 7.91094 14 7.79078C14 7.43032 13.75 7.19002 13.375 7.19002Z",
    fill: "white"
  })]
});
function Qo(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Yr = { exports: {} };
(function(n, e) {
  (function(t) {
    var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
      // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
      // E.g
      // With opts.alwaysNormalize = false (default, spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
      // With opts.alwaysNormalize = true (not spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
      buildAbsoluteURL: function(l, c, d) {
        if (d = d || {}, l = l.trim(), c = c.trim(), !c) {
          if (!d.alwaysNormalize)
            return l;
          var h = o.parseURL(l);
          if (!h)
            throw new Error("Error trying to parse base URL.");
          return h.path = o.normalizePath(
            h.path
          ), o.buildURLFromParts(h);
        }
        var u = o.parseURL(c);
        if (!u)
          throw new Error("Error trying to parse relative URL.");
        if (u.scheme)
          return d.alwaysNormalize ? (u.path = o.normalizePath(u.path), o.buildURLFromParts(u)) : c;
        var f = o.parseURL(l);
        if (!f)
          throw new Error("Error trying to parse base URL.");
        if (!f.netLoc && f.path && f.path[0] !== "/") {
          var g = i.exec(f.path);
          f.netLoc = g[1], f.path = g[2];
        }
        f.netLoc && !f.path && (f.path = "/");
        var m = {
          // 2c) Otherwise, the embedded URL inherits the scheme of
          // the base URL.
          scheme: f.scheme,
          netLoc: u.netLoc,
          path: null,
          params: u.params,
          query: u.query,
          fragment: u.fragment
        };
        if (!u.netLoc && (m.netLoc = f.netLoc, u.path[0] !== "/"))
          if (!u.path)
            m.path = f.path, u.params || (m.params = f.params, u.query || (m.query = f.query));
          else {
            var p = f.path, x = p.substring(0, p.lastIndexOf("/") + 1) + u.path;
            m.path = o.normalizePath(x);
          }
        return m.path === null && (m.path = d.alwaysNormalize ? o.normalizePath(u.path) : u.path), o.buildURLFromParts(m);
      },
      parseURL: function(l) {
        var c = s.exec(l);
        return c ? {
          scheme: c[1] || "",
          netLoc: c[2] || "",
          path: c[3] || "",
          params: c[4] || "",
          query: c[5] || "",
          fragment: c[6] || ""
        } : null;
      },
      normalizePath: function(l) {
        for (l = l.split("").reverse().join("").replace(r, ""); l.length !== (l = l.replace(a, "")).length; )
          ;
        return l.split("").reverse().join("");
      },
      buildURLFromParts: function(l) {
        return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment;
      }
    };
    n.exports = o;
  })();
})(Yr);
var Oi = Yr.exports;
function hn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function ye(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hn(Object(t), !0).forEach(function(s) {
      tl(n, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : hn(Object(t)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return n;
}
function Jo(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(n, e || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function el(n) {
  var e = Jo(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
function tl(n, e, t) {
  return e = el(e), e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s]);
    }
    return n;
  }, fe.apply(this, arguments);
}
const $ = Number.isFinite || function(n) {
  return typeof n == "number" && isFinite(n);
}, sl = Number.isSafeInteger || function(n) {
  return typeof n == "number" && Math.abs(n) <= il;
}, il = Number.MAX_SAFE_INTEGER || 9007199254740991;
let y = /* @__PURE__ */ function(n) {
  return n.MEDIA_ATTACHING = "hlsMediaAttaching", n.MEDIA_ATTACHED = "hlsMediaAttached", n.MEDIA_DETACHING = "hlsMediaDetaching", n.MEDIA_DETACHED = "hlsMediaDetached", n.BUFFER_RESET = "hlsBufferReset", n.BUFFER_CODECS = "hlsBufferCodecs", n.BUFFER_CREATED = "hlsBufferCreated", n.BUFFER_APPENDING = "hlsBufferAppending", n.BUFFER_APPENDED = "hlsBufferAppended", n.BUFFER_EOS = "hlsBufferEos", n.BUFFER_FLUSHING = "hlsBufferFlushing", n.BUFFER_FLUSHED = "hlsBufferFlushed", n.MANIFEST_LOADING = "hlsManifestLoading", n.MANIFEST_LOADED = "hlsManifestLoaded", n.MANIFEST_PARSED = "hlsManifestParsed", n.LEVEL_SWITCHING = "hlsLevelSwitching", n.LEVEL_SWITCHED = "hlsLevelSwitched", n.LEVEL_LOADING = "hlsLevelLoading", n.LEVEL_LOADED = "hlsLevelLoaded", n.LEVEL_UPDATED = "hlsLevelUpdated", n.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", n.LEVELS_UPDATED = "hlsLevelsUpdated", n.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", n.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", n.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", n.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", n.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", n.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", n.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", n.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", n.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", n.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", n.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", n.CUES_PARSED = "hlsCuesParsed", n.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", n.INIT_PTS_FOUND = "hlsInitPtsFound", n.FRAG_LOADING = "hlsFragLoading", n.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", n.FRAG_LOADED = "hlsFragLoaded", n.FRAG_DECRYPTED = "hlsFragDecrypted", n.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", n.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", n.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", n.FRAG_PARSED = "hlsFragParsed", n.FRAG_BUFFERED = "hlsFragBuffered", n.FRAG_CHANGED = "hlsFragChanged", n.FPS_DROP = "hlsFpsDrop", n.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", n.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", n.ERROR = "hlsError", n.DESTROYING = "hlsDestroying", n.KEY_LOADING = "hlsKeyLoading", n.KEY_LOADED = "hlsKeyLoaded", n.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", n.BACK_BUFFER_REACHED = "hlsBackBufferReached", n.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", n;
}({}), q = /* @__PURE__ */ function(n) {
  return n.NETWORK_ERROR = "networkError", n.MEDIA_ERROR = "mediaError", n.KEY_SYSTEM_ERROR = "keySystemError", n.MUX_ERROR = "muxError", n.OTHER_ERROR = "otherError", n;
}({}), D = /* @__PURE__ */ function(n) {
  return n.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", n.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", n.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", n.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", n.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", n.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", n.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", n.MANIFEST_LOAD_ERROR = "manifestLoadError", n.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", n.MANIFEST_PARSING_ERROR = "manifestParsingError", n.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", n.LEVEL_EMPTY_ERROR = "levelEmptyError", n.LEVEL_LOAD_ERROR = "levelLoadError", n.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", n.LEVEL_PARSING_ERROR = "levelParsingError", n.LEVEL_SWITCH_ERROR = "levelSwitchError", n.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", n.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", n.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", n.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", n.FRAG_LOAD_ERROR = "fragLoadError", n.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", n.FRAG_DECRYPT_ERROR = "fragDecryptError", n.FRAG_PARSING_ERROR = "fragParsingError", n.FRAG_GAP = "fragGap", n.REMUX_ALLOC_ERROR = "remuxAllocError", n.KEY_LOAD_ERROR = "keyLoadError", n.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", n.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", n.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", n.BUFFER_APPEND_ERROR = "bufferAppendError", n.BUFFER_APPENDING_ERROR = "bufferAppendingError", n.BUFFER_STALLED_ERROR = "bufferStalledError", n.BUFFER_FULL_ERROR = "bufferFullError", n.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", n.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", n.INTERNAL_EXCEPTION = "internalException", n.INTERNAL_ABORTED = "aborted", n.UNKNOWN = "unknown", n;
}({});
const ht = function() {
}, ci = {
  trace: ht,
  debug: ht,
  log: ht,
  warn: ht,
  info: ht,
  error: ht
};
let $t = ci;
function nl(n) {
  const e = self.console[n];
  return e ? e.bind(self.console, `[${n}] >`) : ht;
}
function rl(n, ...e) {
  e.forEach(function(t) {
    $t[t] = n[t] ? n[t].bind(n) : nl(t);
  });
}
function al(n, e) {
  if (typeof console == "object" && n === !0 || typeof n == "object") {
    rl(
      n,
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    );
    try {
      $t.log(`Debug logs enabled for "${e}" in hls.js version 1.5.17`);
    } catch {
      $t = ci;
    }
  } else
    $t = ci;
}
const A = $t, ol = /^(\d+)x(\d+)$/, un = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class ce {
  constructor(e) {
    typeof e == "string" && (e = ce.parseAttrList(e)), fe(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const s = new Uint8Array(t.length / 2);
      for (let i = 0; i < t.length / 2; i++)
        s[i] = parseInt(t.slice(i * 2, i * 2 + 2), 16);
      return s;
    } else
      return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const s = this[e];
    return s ? parseFloat(s) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = ol.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e) {
    let t;
    const s = {}, i = '"';
    for (un.lastIndex = 0; (t = un.exec(e)) !== null; ) {
      let r = t[2];
      r.indexOf(i) === 0 && r.lastIndexOf(i) === r.length - 1 && (r = r.slice(1, -1));
      const a = t[1].trim();
      s[a] = r;
    }
    return s;
  }
}
function ll(n) {
  return n !== "ID" && n !== "CLASS" && n !== "START-DATE" && n !== "DURATION" && n !== "END-DATE" && n !== "END-ON-NEXT";
}
function cl(n) {
  return n === "SCTE35-OUT" || n === "SCTE35-IN";
}
class qr {
  constructor(e, t) {
    if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t) {
      const s = t.attr;
      for (const i in s)
        if (Object.prototype.hasOwnProperty.call(e, i) && e[i] !== s[i]) {
          A.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = i;
          break;
        }
      e = fe(new ce({}), s, e);
    }
    if (this.attr = e, this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const s = new Date(this.attr["END-DATE"]);
      $(s.getTime()) && (this._endDate = s);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    if (this._endDate)
      return this._endDate;
    const e = this.duration;
    return e !== null ? new Date(this._startDate.getTime() + e * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if ($(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && $(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class);
  }
}
class bs {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var ee = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class zr {
  constructor(e) {
    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
      [ee.AUDIO]: null,
      [ee.VIDEO]: null,
      [ee.AUDIOVIDEO]: null
    }, this.baseurl = e;
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const s = e.split("@", 2);
    let i;
    s.length === 1 ? i = (t == null ? void 0 : t.byteRangeEndOffset) || 0 : i = parseInt(s[1]), this._byteRange = [i, parseInt(s[0]) + i];
  }
  get byteRange() {
    return this._byteRange ? this._byteRange : [];
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = Oi.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
}
class Ps extends zr {
  constructor(e, t) {
    super(t), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new bs(), this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get decryptdata() {
    const {
      levelkeys: e
    } = this;
    if (!e && !this._decryptdata)
      return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      const t = this.levelkeys.identity;
      if (t)
        this._decryptdata = t.getDecryptData(this.sn);
      else {
        const s = Object.keys(this.levelkeys);
        if (s.length === 1)
          return this._decryptdata = this.levelkeys[s[0]].getDecryptData(this.sn);
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null || !$(this.programDateTime))
      return null;
    const e = $(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return !0;
    if (this.levelkeys) {
      const t = Object.keys(this.levelkeys), s = t.length;
      if (s > 1 || s === 1 && this.levelkeys[t[0]].encrypted)
        return !0;
    }
    return !1;
  }
  setKeyFormat(e) {
    if (this.levelkeys) {
      const t = this.levelkeys[e];
      t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, s, i, r, a = !1) {
    const {
      elementaryStreams: o
    } = this, l = o[e];
    if (!l) {
      o[e] = {
        startPTS: t,
        endPTS: s,
        startDTS: i,
        endDTS: r,
        partial: a
      };
      return;
    }
    l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, s), l.startDTS = Math.min(l.startDTS, i), l.endDTS = Math.max(l.endDTS, r);
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[ee.AUDIO] = null, e[ee.VIDEO] = null, e[ee.AUDIOVIDEO] = null;
  }
}
class dl extends zr {
  constructor(e, t, s, i, r) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new bs(), this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = i;
    const a = e.enumeratedString("BYTERANGE");
    a && this.setByteRange(a, r), r && (this.fragOffset = r.fragOffset + r.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
const hl = 10;
class ul {
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay;
  }
  get hasProgramDateTime() {
    return this.fragments.length ? $(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || hl;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    var e;
    return (e = this.fragments) != null && e.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
}
function Fi(n) {
  return Uint8Array.from(atob(n), (e) => e.charCodeAt(0));
}
function fl(n) {
  const e = di(n).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function gl(n) {
  const e = function(s, i, r) {
    const a = s[i];
    s[i] = s[r], s[r] = a;
  };
  e(n, 0, 3), e(n, 1, 2), e(n, 4, 5), e(n, 6, 7);
}
function ml(n) {
  const e = n.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), i = s[s.length - 1].split(",");
    if (i.length === 2) {
      const r = i[0] === "base64", a = i[1];
      r ? (s.splice(-1, 1), t = Fi(a)) : t = fl(a);
    }
  }
  return t;
}
function di(n) {
  return Uint8Array.from(unescape(encodeURIComponent(n)), (e) => e.charCodeAt(0));
}
const Rt = typeof self < "u" ? self : void 0;
var ne = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, _e = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function fn(n) {
  switch (n) {
    case _e.FAIRPLAY:
      return ne.FAIRPLAY;
    case _e.PLAYREADY:
      return ne.PLAYREADY;
    case _e.WIDEVINE:
      return ne.WIDEVINE;
    case _e.CLEARKEY:
      return ne.CLEARKEY;
  }
}
var Bt = {
  CENC: "1077efecc0b24d02ace33c1e52e2fb4b",
  CLEARKEY: "e2719d58a985b3c9781ab030af78d30e",
  FAIRPLAY: "94ce86fb07ff4f43adb893d2fa968ca2",
  PLAYREADY: "9a04f07998404286ab92e65be0885f95",
  WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
};
function gn(n) {
  if (n === Bt.WIDEVINE)
    return ne.WIDEVINE;
  if (n === Bt.PLAYREADY)
    return ne.PLAYREADY;
  if (n === Bt.CENC || n === Bt.CLEARKEY)
    return ne.CLEARKEY;
}
function mn(n) {
  switch (n) {
    case ne.FAIRPLAY:
      return _e.FAIRPLAY;
    case ne.PLAYREADY:
      return _e.PLAYREADY;
    case ne.WIDEVINE:
      return _e.WIDEVINE;
    case ne.CLEARKEY:
      return _e.CLEARKEY;
  }
}
function Os(n) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = n, s = e ? [ne.FAIRPLAY, ne.WIDEVINE, ne.PLAYREADY, ne.CLEARKEY].filter((i) => !!e[i]) : [];
  return !s[ne.WIDEVINE] && t && s.push(ne.WIDEVINE), s;
}
const Xr = function(n) {
  return Rt != null && (n = Rt.navigator) != null && n.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}();
function pl(n, e, t, s) {
  let i;
  switch (n) {
    case ne.FAIRPLAY:
      i = ["cenc", "sinf"];
      break;
    case ne.WIDEVINE:
    case ne.PLAYREADY:
      i = ["cenc"];
      break;
    case ne.CLEARKEY:
      i = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${n}`);
  }
  return yl(i, e, t, s);
}
function yl(n, e, t, s) {
  return [{
    initDataTypes: n,
    persistentState: s.persistentState || "optional",
    distinctiveIdentifier: s.distinctiveIdentifier || "optional",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: e.map((r) => ({
      contentType: `audio/mp4; codecs="${r}"`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((r) => ({
      contentType: `video/mp4; codecs="${r}"`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function ft(n, e, t) {
  return Uint8Array.prototype.slice ? n.slice(e, t) : new Uint8Array(Array.prototype.slice.call(n, e, t));
}
const Mi = (n, e) => e + 10 <= n.length && n[e] === 73 && n[e + 1] === 68 && n[e + 2] === 51 && n[e + 3] < 255 && n[e + 4] < 255 && n[e + 6] < 128 && n[e + 7] < 128 && n[e + 8] < 128 && n[e + 9] < 128, Zr = (n, e) => e + 10 <= n.length && n[e] === 51 && n[e + 1] === 68 && n[e + 2] === 73 && n[e + 3] < 255 && n[e + 4] < 255 && n[e + 6] < 128 && n[e + 7] < 128 && n[e + 8] < 128 && n[e + 9] < 128, Gt = (n, e) => {
  const t = e;
  let s = 0;
  for (; Mi(n, e); ) {
    s += 10;
    const i = Is(n, e + 6);
    s += i, Zr(n, e + 10) && (s += 10), e += s;
  }
  if (s > 0)
    return n.subarray(t, t + s);
}, Is = (n, e) => {
  let t = 0;
  return t = (n[e] & 127) << 21, t |= (n[e + 1] & 127) << 14, t |= (n[e + 2] & 127) << 7, t |= n[e + 3] & 127, t;
}, xl = (n, e) => Mi(n, e) && Is(n, e + 6) + 10 <= n.length - e, Ni = (n) => {
  const e = Jr(n);
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (Qr(s))
      return Ll(s);
  }
}, Qr = (n) => n && n.key === "PRIV" && n.info === "com.apple.streaming.transportStreamTimestamp", El = (n) => {
  const e = String.fromCharCode(n[0], n[1], n[2], n[3]), t = Is(n, 4), s = 10;
  return {
    type: e,
    size: t,
    data: n.subarray(s, s + t)
  };
}, Jr = (n) => {
  let e = 0;
  const t = [];
  for (; Mi(n, e); ) {
    const s = Is(n, e + 6);
    e += 10;
    const i = e + s;
    for (; e + 8 < i; ) {
      const r = El(n.subarray(e)), a = Tl(r);
      a && t.push(a), e += r.size + 10;
    }
    Zr(n, e) && (e += 10);
  }
  return t;
}, Tl = (n) => n.type === "PRIV" ? vl(n) : n.type[0] === "W" ? Al(n) : Sl(n), vl = (n) => {
  if (n.size < 2)
    return;
  const e = Ye(n.data, !0), t = new Uint8Array(n.data.subarray(e.length + 1));
  return {
    key: n.type,
    info: e,
    data: t.buffer
  };
}, Sl = (n) => {
  if (n.size < 2)
    return;
  if (n.type === "TXXX") {
    let t = 1;
    const s = Ye(n.data.subarray(t), !0);
    t += s.length + 1;
    const i = Ye(n.data.subarray(t));
    return {
      key: n.type,
      info: s,
      data: i
    };
  }
  const e = Ye(n.data.subarray(1));
  return {
    key: n.type,
    data: e
  };
}, Al = (n) => {
  if (n.type === "WXXX") {
    if (n.size < 2)
      return;
    let t = 1;
    const s = Ye(n.data.subarray(t), !0);
    t += s.length + 1;
    const i = Ye(n.data.subarray(t));
    return {
      key: n.type,
      info: s,
      data: i
    };
  }
  const e = Ye(n.data);
  return {
    key: n.type,
    data: e
  };
}, Ll = (n) => {
  if (n.data.byteLength === 8) {
    const e = new Uint8Array(n.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
  }
}, Ye = (n, e = !1) => {
  const t = Cl();
  if (t) {
    const c = t.decode(n);
    if (e) {
      const d = c.indexOf("\0");
      return d !== -1 ? c.substring(0, d) : c;
    }
    return c.replace(/\0/g, "");
  }
  const s = n.length;
  let i, r, a, o = "", l = 0;
  for (; l < s; ) {
    if (i = n[l++], i === 0 && e)
      return o;
    if (i === 0 || i === 3)
      continue;
    switch (i >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        o += String.fromCharCode(i);
        break;
      case 12:
      case 13:
        r = n[l++], o += String.fromCharCode((i & 31) << 6 | r & 63);
        break;
      case 14:
        r = n[l++], a = n[l++], o += String.fromCharCode((i & 15) << 12 | (r & 63) << 6 | (a & 63) << 0);
        break;
    }
  }
  return o;
};
let Fs;
function Cl() {
  if (!navigator.userAgent.includes("PlayStation 4"))
    return !Fs && typeof self.TextDecoder < "u" && (Fs = new self.TextDecoder("utf-8")), Fs;
}
const Ve = {
  hexDump: function(n) {
    let e = "";
    for (let t = 0; t < n.length; t++) {
      let s = n[t].toString(16);
      s.length < 2 && (s = "0" + s), e += s;
    }
    return e;
  }
}, ps = Math.pow(2, 32) - 1, Rl = [].push, ea = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function ge(n) {
  return String.fromCharCode.apply(null, n);
}
function ta(n, e) {
  const t = n[e] << 8 | n[e + 1];
  return t < 0 ? 65536 + t : t;
}
function W(n, e) {
  const t = sa(n, e);
  return t < 0 ? 4294967296 + t : t;
}
function pn(n, e) {
  let t = W(n, e);
  return t *= Math.pow(2, 32), t += W(n, e + 4), t;
}
function sa(n, e) {
  return n[e] << 24 | n[e + 1] << 16 | n[e + 2] << 8 | n[e + 3];
}
function Ms(n, e, t) {
  n[e] = t >> 24, n[e + 1] = t >> 16 & 255, n[e + 2] = t >> 8 & 255, n[e + 3] = t & 255;
}
function _l(n) {
  const e = n.byteLength;
  for (let t = 0; t < e; ) {
    const s = W(n, t);
    if (s > 8 && n[t + 4] === 109 && n[t + 5] === 111 && n[t + 6] === 111 && n[t + 7] === 102)
      return !0;
    t = s > 1 ? t + s : e;
  }
  return !1;
}
function z(n, e) {
  const t = [];
  if (!e.length)
    return t;
  const s = n.byteLength;
  for (let i = 0; i < s; ) {
    const r = W(n, i), a = ge(n.subarray(i + 4, i + 8)), o = r > 1 ? i + r : s;
    if (a === e[0])
      if (e.length === 1)
        t.push(n.subarray(i + 8, o));
      else {
        const l = z(n.subarray(i + 8, o), e.slice(1));
        l.length && Rl.apply(t, l);
      }
    i = o;
  }
  return t;
}
function bl(n) {
  const e = [], t = n[0];
  let s = 8;
  const i = W(n, s);
  s += 4;
  let r = 0, a = 0;
  t === 0 ? (r = W(n, s), a = W(n, s + 4), s += 8) : (r = pn(n, s), a = pn(n, s + 8), s += 16), s += 2;
  let o = n.length + a;
  const l = ta(n, s);
  s += 2;
  for (let c = 0; c < l; c++) {
    let d = s;
    const h = W(n, d);
    d += 4;
    const u = h & 2147483647;
    if ((h & 2147483648) >>> 31 === 1)
      return A.warn("SIDX has hierarchical references (not supported)"), null;
    const g = W(n, d);
    d += 4, e.push({
      referenceSize: u,
      subsegmentDuration: g,
      // unscaled
      info: {
        duration: g / i,
        start: o,
        end: o + u - 1
      }
    }), o += u, d += 4, s = d;
  }
  return {
    earliestPresentationTime: r,
    timescale: i,
    version: t,
    referencesCount: l,
    references: e
  };
}
function ia(n) {
  const e = [], t = z(n, ["moov", "trak"]);
  for (let i = 0; i < t.length; i++) {
    const r = t[i], a = z(r, ["tkhd"])[0];
    if (a) {
      let o = a[0];
      const l = W(a, o === 0 ? 12 : 20), c = z(r, ["mdia", "mdhd"])[0];
      if (c) {
        o = c[0];
        const d = W(c, o === 0 ? 12 : 20), h = z(r, ["mdia", "hdlr"])[0];
        if (h) {
          const u = ge(h.subarray(8, 12)), f = {
            soun: ee.AUDIO,
            vide: ee.VIDEO
          }[u];
          if (f) {
            const g = z(r, ["mdia", "minf", "stbl", "stsd"])[0], m = Il(g);
            e[l] = {
              timescale: d,
              type: f
            }, e[f] = ye({
              timescale: d,
              id: l
            }, m);
          }
        }
      }
    }
  }
  return z(n, ["moov", "mvex", "trex"]).forEach((i) => {
    const r = W(i, 4), a = e[r];
    a && (a.default = {
      duration: W(i, 12),
      flags: W(i, 20)
    });
  }), e;
}
function Il(n) {
  const e = n.subarray(8), t = e.subarray(86), s = ge(e.subarray(4, 8));
  let i = s;
  const r = s === "enca" || s === "encv";
  if (r) {
    const o = z(e, [s])[0].subarray(s === "enca" ? 28 : 78);
    z(o, ["sinf"]).forEach((c) => {
      const d = z(c, ["schm"])[0];
      if (d) {
        const h = ge(d.subarray(4, 8));
        if (h === "cbcs" || h === "cenc") {
          const u = z(c, ["frma"])[0];
          u && (i = ge(u));
        }
      }
    });
  }
  switch (i) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const a = z(t, ["avcC"])[0];
      i += "." + Wt(a[1]) + Wt(a[2]) + Wt(a[3]);
      break;
    }
    case "mp4a": {
      const a = z(e, [s])[0], o = z(a.subarray(28), ["esds"])[0];
      if (o && o.length > 12) {
        let l = 4;
        if (o[l++] !== 3)
          break;
        l = Ns(o, l), l += 2;
        const c = o[l++];
        if (c & 128 && (l += 2), c & 64 && (l += o[l++]), o[l++] !== 4)
          break;
        l = Ns(o, l);
        const d = o[l++];
        if (d === 64)
          i += "." + Wt(d);
        else
          break;
        if (l += 12, o[l++] !== 5)
          break;
        l = Ns(o, l);
        const h = o[l++];
        let u = (h & 248) >> 3;
        u === 31 && (u += 1 + ((h & 7) << 3) + ((o[l] & 224) >> 5)), i += "." + u;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const a = z(t, ["hvcC"])[0], o = a[1], l = ["", "A", "B", "C"][o >> 6], c = o & 31, d = W(a, 2), h = (o & 32) >> 5 ? "H" : "L", u = a[12], f = a.subarray(6, 12);
      i += "." + l + c, i += "." + d.toString(16).toUpperCase(), i += "." + h + u;
      let g = "";
      for (let m = f.length; m--; ) {
        const p = f[m];
        (p || g) && (g = "." + p.toString(16).toUpperCase() + g);
      }
      i += g;
      break;
    }
    case "dvh1":
    case "dvhe": {
      const a = z(t, ["dvcC"])[0], o = a[2] >> 1 & 127, l = a[2] << 5 & 32 | a[3] >> 3 & 31;
      i += "." + $e(o) + "." + $e(l);
      break;
    }
    case "vp09": {
      const a = z(t, ["vpcC"])[0], o = a[4], l = a[5], c = a[6] >> 4 & 15;
      i += "." + $e(o) + "." + $e(l) + "." + $e(c);
      break;
    }
    case "av01": {
      const a = z(t, ["av1C"])[0], o = a[1] >>> 5, l = a[1] & 31, c = a[2] >>> 7 ? "H" : "M", d = (a[2] & 64) >> 6, h = (a[2] & 32) >> 5, u = o === 2 && d ? h ? 12 : 10 : d ? 10 : 8, f = (a[2] & 16) >> 4, g = (a[2] & 8) >> 3, m = (a[2] & 4) >> 2, p = a[2] & 3;
      i += "." + o + "." + $e(l) + c + "." + $e(u) + "." + f + "." + g + m + p + "." + $e(1) + "." + $e(1) + "." + $e(1) + "." + 0;
      break;
    }
  }
  return {
    codec: i,
    encrypted: r
  };
}
function Ns(n, e) {
  const t = e + 5;
  for (; n[e++] & 128 && e < t; )
    ;
  return e;
}
function Wt(n) {
  return ("0" + n.toString(16).toUpperCase()).slice(-2);
}
function $e(n) {
  return (n < 10 ? "0" : "") + n;
}
function Dl(n, e) {
  if (!n || !e)
    return n;
  const t = e.keyId;
  return t && e.isCommonEncryption && z(n, ["moov", "trak"]).forEach((i) => {
    const a = z(i, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
    let o = z(a, ["enca"]);
    const l = o.length > 0;
    l || (o = z(a, ["encv"])), o.forEach((c) => {
      const d = l ? c.subarray(28) : c.subarray(78);
      z(d, ["sinf"]).forEach((u) => {
        const f = na(u);
        if (f) {
          const g = f.subarray(8, 24);
          g.some((m) => m !== 0) || (A.log(`[eme] Patching keyId in 'enc${l ? "a" : "v"}>sinf>>tenc' box: ${Ve.hexDump(g)} -> ${Ve.hexDump(t)}`), f.set(t, 8));
        }
      });
    });
  }), n;
}
function na(n) {
  const e = z(n, ["schm"])[0];
  if (e) {
    const t = ge(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc")
      return z(n, ["schi", "tenc"])[0];
  }
  return null;
}
function wl(n, e) {
  return z(e, ["moof", "traf"]).reduce((t, s) => {
    const i = z(s, ["tfdt"])[0], r = i[0], a = z(s, ["tfhd"]).reduce((o, l) => {
      const c = W(l, 4), d = n[c];
      if (d) {
        let h = W(i, 4);
        if (r === 1) {
          if (h === ps)
            return A.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
          h *= ps + 1, h += W(i, 8);
        }
        const u = d.timescale || 9e4, f = h / u;
        if ($(f) && (o === null || f < o))
          return f;
      }
      return o;
    }, null);
    return a !== null && $(a) && (t === null || a < t) ? a : t;
  }, null);
}
function kl(n, e) {
  let t = 0, s = 0, i = 0;
  const r = z(n, ["moof", "traf"]);
  for (let a = 0; a < r.length; a++) {
    const o = r[a], l = z(o, ["tfhd"])[0], c = W(l, 4), d = e[c];
    if (!d)
      continue;
    const h = d.default, u = W(l, 0) | (h == null ? void 0 : h.flags);
    let f = h == null ? void 0 : h.duration;
    u & 8 && (u & 2 ? f = W(l, 12) : f = W(l, 8));
    const g = d.timescale || 9e4, m = z(o, ["trun"]);
    for (let p = 0; p < m.length; p++) {
      if (t = Pl(m[p]), !t && f) {
        const x = W(m[p], 4);
        t = f * x;
      }
      d.type === ee.VIDEO ? s += t / g : d.type === ee.AUDIO && (i += t / g);
    }
  }
  if (s === 0 && i === 0) {
    let a = 1 / 0, o = 0, l = 0;
    const c = z(n, ["sidx"]);
    for (let d = 0; d < c.length; d++) {
      const h = bl(c[d]);
      if (h != null && h.references) {
        a = Math.min(a, h.earliestPresentationTime / h.timescale);
        const u = h.references.reduce((f, g) => f + g.info.duration || 0, 0);
        o = Math.max(o, u + h.earliestPresentationTime / h.timescale), l = o - a;
      }
    }
    if (l && $(l))
      return l;
  }
  return s || i;
}
function Pl(n) {
  const e = W(n, 0);
  let t = 8;
  e & 1 && (t += 4), e & 4 && (t += 4);
  let s = 0;
  const i = W(n, 4);
  for (let r = 0; r < i; r++) {
    if (e & 256) {
      const a = W(n, t);
      s += a, t += 4;
    }
    e & 512 && (t += 4), e & 1024 && (t += 4), e & 2048 && (t += 4);
  }
  return s;
}
function Ol(n, e, t) {
  z(e, ["moof", "traf"]).forEach((s) => {
    z(s, ["tfhd"]).forEach((i) => {
      const r = W(i, 4), a = n[r];
      if (!a)
        return;
      const o = a.timescale || 9e4;
      z(s, ["tfdt"]).forEach((l) => {
        const c = l[0], d = t * o;
        if (d) {
          let h = W(l, 4);
          if (c === 0)
            h -= d, h = Math.max(h, 0), Ms(l, 4, h);
          else {
            h *= Math.pow(2, 32), h += W(l, 8), h -= d, h = Math.max(h, 0);
            const u = Math.floor(h / (ps + 1)), f = Math.floor(h % (ps + 1));
            Ms(l, 4, u), Ms(l, 8, f);
          }
        }
      });
    });
  });
}
function Fl(n) {
  const e = {
    valid: null,
    remainder: null
  }, t = z(n, ["moof"]);
  if (t.length < 2)
    return e.remainder = n, e;
  const s = t[t.length - 1];
  return e.valid = ft(n, 0, s.byteOffset - 8), e.remainder = ft(n, s.byteOffset - 8), e;
}
function Pe(n, e) {
  const t = new Uint8Array(n.length + e.length);
  return t.set(n), t.set(e, n.length), t;
}
function yn(n, e) {
  const t = [], s = e.samples, i = e.timescale, r = e.id;
  let a = !1;
  return z(s, ["moof"]).map((l) => {
    const c = l.byteOffset - 8;
    z(l, ["traf"]).map((h) => {
      const u = z(h, ["tfdt"]).map((f) => {
        const g = f[0];
        let m = W(f, 4);
        return g === 1 && (m *= Math.pow(2, 32), m += W(f, 8)), m / i;
      })[0];
      return u !== void 0 && (n = u), z(h, ["tfhd"]).map((f) => {
        const g = W(f, 4), m = W(f, 0) & 16777215, p = (m & 1) !== 0, x = (m & 2) !== 0, S = (m & 8) !== 0;
        let T = 0;
        const C = (m & 16) !== 0;
        let E = 0;
        const L = (m & 32) !== 0;
        let _ = 8;
        g === r && (p && (_ += 8), x && (_ += 4), S && (T = W(f, _), _ += 4), C && (E = W(f, _), _ += 4), L && (_ += 4), e.type === "video" && (a = Ml(e.codec)), z(h, ["trun"]).map((I) => {
          const P = I[0], b = W(I, 0) & 16777215, w = (b & 1) !== 0;
          let G = 0;
          const O = (b & 4) !== 0, F = (b & 256) !== 0;
          let U = 0;
          const N = (b & 512) !== 0;
          let H = 0;
          const V = (b & 1024) !== 0, M = (b & 2048) !== 0;
          let B = 0;
          const X = W(I, 4);
          let j = 8;
          w && (G = W(I, j), j += 4), O && (j += 4);
          let Q = G + c;
          for (let se = 0; se < X; se++) {
            if (F ? (U = W(I, j), j += 4) : U = T, N ? (H = W(I, j), j += 4) : H = E, V && (j += 4), M && (P === 0 ? B = W(I, j) : B = sa(I, j), j += 4), e.type === ee.VIDEO) {
              let le = 0;
              for (; le < H; ) {
                const de = W(s, Q);
                if (Q += 4, Nl(a, s[Q])) {
                  const Ae = s.subarray(Q, Q + de);
                  ra(Ae, a ? 2 : 1, n + B / i, t);
                }
                Q += de, le += de + 4;
              }
            }
            n += U / i;
          }
        }));
      });
    });
  }), t;
}
function Ml(n) {
  if (!n)
    return !1;
  const e = n.indexOf("."), t = e < 0 ? n : n.substring(0, e);
  return t === "hvc1" || t === "hev1" || // Dolby Vision
  t === "dvh1" || t === "dvhe";
}
function Nl(n, e) {
  if (n) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function ra(n, e, t, s) {
  const i = aa(n);
  let r = 0;
  r += e;
  let a = 0, o = 0, l = 0;
  for (; r < i.length; ) {
    a = 0;
    do {
      if (r >= i.length)
        break;
      l = i[r++], a += l;
    } while (l === 255);
    o = 0;
    do {
      if (r >= i.length)
        break;
      l = i[r++], o += l;
    } while (l === 255);
    const c = i.length - r;
    let d = r;
    if (o < c)
      r += o;
    else if (o > c) {
      A.error(`Malformed SEI payload. ${o} is too small, only ${c} bytes left to parse.`);
      break;
    }
    if (a === 4) {
      if (i[d++] === 181) {
        const u = ta(i, d);
        if (d += 2, u === 49) {
          const f = W(i, d);
          if (d += 4, f === 1195456820) {
            const g = i[d++];
            if (g === 3) {
              const m = i[d++], p = 31 & m, x = 64 & m, S = x ? 2 + p * 3 : 0, T = new Uint8Array(S);
              if (x) {
                T[0] = m;
                for (let C = 1; C < S; C++)
                  T[C] = i[d++];
              }
              s.push({
                type: g,
                payloadType: a,
                pts: t,
                bytes: T
              });
            }
          }
        }
      }
    } else if (a === 5 && o > 16) {
      const h = [];
      for (let g = 0; g < 16; g++) {
        const m = i[d++].toString(16);
        h.push(m.length == 1 ? "0" + m : m), (g === 3 || g === 5 || g === 7 || g === 9) && h.push("-");
      }
      const u = o - 16, f = new Uint8Array(u);
      for (let g = 0; g < u; g++)
        f[g] = i[d++];
      s.push({
        payloadType: a,
        pts: t,
        uuid: h.join(""),
        userData: Ye(f),
        userDataBytes: f
      });
    }
  }
}
function aa(n) {
  const e = n.byteLength, t = [];
  let s = 1;
  for (; s < e - 2; )
    n[s] === 0 && n[s + 1] === 0 && n[s + 2] === 3 ? (t.push(s + 2), s += 2) : s++;
  if (t.length === 0)
    return n;
  const i = e - t.length, r = new Uint8Array(i);
  let a = 0;
  for (s = 0; s < i; a++, s++)
    a === t[0] && (a++, t.shift()), r[s] = n[a];
  return r;
}
function Ul(n) {
  const e = n[0];
  let t = "", s = "", i = 0, r = 0, a = 0, o = 0, l = 0, c = 0;
  if (e === 0) {
    for (; ge(n.subarray(c, c + 1)) !== "\0"; )
      t += ge(n.subarray(c, c + 1)), c += 1;
    for (t += ge(n.subarray(c, c + 1)), c += 1; ge(n.subarray(c, c + 1)) !== "\0"; )
      s += ge(n.subarray(c, c + 1)), c += 1;
    s += ge(n.subarray(c, c + 1)), c += 1, i = W(n, 12), r = W(n, 16), o = W(n, 20), l = W(n, 24), c = 28;
  } else if (e === 1) {
    c += 4, i = W(n, c), c += 4;
    const h = W(n, c);
    c += 4;
    const u = W(n, c);
    for (c += 4, a = 2 ** 32 * h + u, sl(a) || (a = Number.MAX_SAFE_INTEGER, A.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = W(n, c), c += 4, l = W(n, c), c += 4; ge(n.subarray(c, c + 1)) !== "\0"; )
      t += ge(n.subarray(c, c + 1)), c += 1;
    for (t += ge(n.subarray(c, c + 1)), c += 1; ge(n.subarray(c, c + 1)) !== "\0"; )
      s += ge(n.subarray(c, c + 1)), c += 1;
    s += ge(n.subarray(c, c + 1)), c += 1;
  }
  const d = n.subarray(c, n.byteLength);
  return {
    schemeIdUri: t,
    value: s,
    timeScale: i,
    presentationTime: a,
    presentationTimeDelta: r,
    eventDuration: o,
    id: l,
    payload: d
  };
}
function Bl(n, ...e) {
  const t = e.length;
  let s = 8, i = t;
  for (; i--; )
    s += e[i].byteLength;
  const r = new Uint8Array(s);
  for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(n, 4), i = 0, s = 8; i < t; i++)
    r.set(e[i], s), s += e[i].byteLength;
  return r;
}
function $l(n, e, t) {
  if (n.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, i;
  s = 0, i = new Uint8Array();
  let r;
  s > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array();
  const a = new Uint8Array(4);
  return t && t.byteLength > 0 && new DataView(a.buffer).setUint32(0, t.byteLength, !1), Bl(
    [112, 115, 115, 104],
    new Uint8Array([
      s,
      0,
      0,
      0
      // Flags
    ]),
    n,
    // 16 bytes
    r,
    i,
    a,
    t || new Uint8Array()
  );
}
function Gl(n) {
  const e = [];
  if (n instanceof ArrayBuffer) {
    const t = n.byteLength;
    let s = 0;
    for (; s + 32 < t; ) {
      const i = new DataView(n, s), r = Vl(i);
      e.push(r), s += r.size;
    }
  }
  return e;
}
function Vl(n) {
  const e = n.getUint32(0), t = n.byteOffset, s = n.byteLength;
  if (s < e)
    return {
      offset: t,
      size: s
    };
  if (n.getUint32(4) !== 1886614376)
    return {
      offset: t,
      size: e
    };
  const r = n.getUint32(8) >>> 24;
  if (r !== 0 && r !== 1)
    return {
      offset: t,
      size: e
    };
  const a = n.buffer, o = Ve.hexDump(new Uint8Array(a, t + 12, 16)), l = n.getUint32(28);
  let c = null, d = null;
  if (r === 0) {
    if (e - 32 < l || l < 22)
      return {
        offset: t,
        size: e
      };
    d = new Uint8Array(a, t + 32, l);
  } else if (r === 1) {
    if (!l || s < t + 32 + l * 16 + 16)
      return {
        offset: t,
        size: e
      };
    c = [];
    for (let h = 0; h < l; h++)
      c.push(new Uint8Array(a, t + 32 + h * 16, 16));
  }
  return {
    version: r,
    systemId: o,
    kids: c,
    data: d,
    offset: t,
    size: e
  };
}
let Yt = {};
class Vt {
  static clearKeyUriToKeyIdMap() {
    Yt = {};
  }
  constructor(e, t, s, i = [1], r = null) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = i, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && e !== "AES-128";
  }
  isSupported() {
    if (this.method) {
      if (this.method === "AES-128" || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case _e.FAIRPLAY:
        case _e.WIDEVINE:
        case _e.PLAYREADY:
        case _e.CLEARKEY:
          return ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri)
      return null;
    if (this.method === "AES-128" && this.uri && !this.iv) {
      typeof e != "number" && (this.method === "AES-128" && !this.iv && A.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
      const s = Hl(e);
      return new Vt(this.method, this.uri, "identity", this.keyFormatVersions, s);
    }
    const t = ml(this.uri);
    if (t)
      switch (this.keyFormat) {
        case _e.WIDEVINE:
          this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
          break;
        case _e.PLAYREADY: {
          const s = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = $l(s, null, t);
          const i = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2), r = String.fromCharCode.apply(null, Array.from(i)), a = r.substring(r.indexOf("<"), r.length), c = new DOMParser().parseFromString(a, "text/xml").getElementsByTagName("KID")[0];
          if (c) {
            const d = c.childNodes[0] ? c.childNodes[0].nodeValue : c.getAttribute("VALUE");
            if (d) {
              const h = Fi(d).subarray(0, 16);
              gl(h), this.keyId = h;
            }
          }
          break;
        }
        default: {
          let s = t.subarray(0, 16);
          if (s.length !== 16) {
            const i = new Uint8Array(16);
            i.set(s, 16 - s.length), s = i;
          }
          this.keyId = s;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let s = Yt[this.uri];
      if (!s) {
        const i = Object.keys(Yt).length % Number.MAX_SAFE_INTEGER;
        s = new Uint8Array(16), new DataView(s.buffer, 12, 4).setUint32(0, i), Yt[this.uri] = s;
      }
      this.keyId = s;
    }
    return this;
  }
}
function Hl(n) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = n >> 8 * (15 - t) & 255;
  return e;
}
const oa = /\{\$([a-zA-Z0-9-_]+)\}/g;
function xn(n) {
  return oa.test(n);
}
function Re(n, e, t) {
  if (n.variableList !== null || n.hasVariableRefs)
    for (let s = t.length; s--; ) {
      const i = t[s], r = e[i];
      r && (e[i] = hi(n, r));
    }
}
function hi(n, e) {
  if (n.variableList !== null || n.hasVariableRefs) {
    const t = n.variableList;
    return e.replace(oa, (s) => {
      const i = s.substring(2, s.length - 1), r = t == null ? void 0 : t[i];
      return r === void 0 ? (n.playlistParsingError || (n.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), s) : r;
    });
  }
  return e;
}
function En(n, e, t) {
  let s = n.variableList;
  s || (n.variableList = s = {});
  let i, r;
  if ("QUERYPARAM" in e) {
    i = e.QUERYPARAM;
    try {
      const a = new self.URL(t).searchParams;
      if (a.has(i))
        r = a.get(i);
      else
        throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`);
    } catch (a) {
      n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`));
    }
  } else
    i = e.NAME, r = e.VALUE;
  i in s ? n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : s[i] = r || "";
}
function Kl(n, e, t) {
  const s = e.IMPORT;
  if (t && s in t) {
    let i = n.variableList;
    i || (n.variableList = i = {}), i[s] = t[s];
  } else
    n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
function mt(n = !0) {
  return typeof self > "u" ? void 0 : (n || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function jl(n) {
  return typeof self < "u" && n === self.ManagedMediaSource;
}
const ys = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function Wl(n, e) {
  const t = ys[e];
  return !!t && !!t[n.slice(0, 4)];
}
function Us(n, e, t = !0) {
  return !n.split(",").some((s) => !la(s, e, t));
}
function la(n, e, t = !0) {
  var s;
  const i = mt(t);
  return (s = i == null ? void 0 : i.isTypeSupported(Ht(n, e))) != null ? s : !1;
}
function Ht(n, e) {
  return `${e}/mp4;codecs="${n}"`;
}
function Tn(n) {
  if (n) {
    const e = n.substring(0, 4);
    return ys.video[e];
  }
  return 2;
}
function xs(n) {
  return n.split(",").reduce((e, t) => {
    const s = ys.video[t];
    return s ? (s * 2 + e) / (e ? 3 : 2) : (ys.audio[t] + e) / (e ? 2 : 1);
  }, 0);
}
const Bs = {};
function Yl(n, e = !0) {
  if (Bs[n])
    return Bs[n];
  const t = {
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"]
  }[n];
  for (let s = 0; s < t.length; s++)
    if (la(t[s], "audio", e))
      return Bs[n] = t[s], t[s];
  return n;
}
const ql = /flac|opus/i;
function Es(n, e = !0) {
  return n.replace(ql, (t) => Yl(t.toLowerCase(), e));
}
function vn(n, e) {
  return n && n !== "mp4a" ? n : e && e.split(",")[0];
}
function zl(n) {
  const e = n.split(",");
  for (let t = 0; t < e.length; t++) {
    const s = e[t].split(".");
    if (s.length > 2) {
      let i = s.shift() + ".";
      i += parseInt(s.shift()).toString(16), i += ("000" + parseInt(s.shift()).toString(16)).slice(-4), e[t] = i;
    }
  }
  return e.join(",");
}
const Sn = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, An = /#EXT-X-MEDIA:(.*)/g, Xl = /^#EXT(?:INF|-X-TARGETDURATION):/m, Ln = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#EXT-X-BYTERANGE:*(.+)/.source,
  // next segment's byterange, group 4 => range spec (x@y)
  /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
  // next segment's program date/time group 5 => the datetime spec
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), Zl = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class je {
  static findGroup(e, t) {
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (i.id === t)
        return i;
    }
  }
  static resolve(e, t) {
    return Oi.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return Xl.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = xn(e), i = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, r = [];
    Sn.lastIndex = 0;
    let a;
    for (; (a = Sn.exec(e)) != null; )
      if (a[1]) {
        var o;
        const c = new ce(a[1]);
        Re(i, c, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
        const d = hi(i, a[2]), h = {
          attrs: c,
          bitrate: c.decimalInteger("BANDWIDTH") || c.decimalInteger("AVERAGE-BANDWIDTH"),
          name: c.NAME,
          url: je.resolve(d, t)
        }, u = c.decimalResolution("RESOLUTION");
        u && (h.width = u.width, h.height = u.height), Ql(c.CODECS, h), (o = h.unknownCodecs) != null && o.length || r.push(h), i.levels.push(h);
      } else if (a[3]) {
        const c = a[3], d = a[4];
        switch (c) {
          case "SESSION-DATA": {
            const h = new ce(d);
            Re(i, h, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
            const u = h["DATA-ID"];
            u && (i.sessionData === null && (i.sessionData = {}), i.sessionData[u] = h);
            break;
          }
          case "SESSION-KEY": {
            const h = Cn(d, t, i);
            h.encrypted && h.isSupported() ? (i.sessionKeys === null && (i.sessionKeys = []), i.sessionKeys.push(h)) : A.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);
            break;
          }
          case "DEFINE": {
            {
              const h = new ce(d);
              Re(i, h, ["NAME", "VALUE", "QUERYPARAM"]), En(i, h, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const h = new ce(d);
            Re(i, h, ["SERVER-URI", "PATHWAY-ID"]), i.contentSteering = {
              uri: je.resolve(h["SERVER-URI"], t),
              pathwayId: h["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            i.startTimeOffset = Rn(d);
            break;
          }
        }
      }
    const l = r.length > 0 && r.length < i.levels.length;
    return i.levels = l ? r : i.levels, i.levels.length === 0 && (i.playlistParsingError = new Error("no levels found in manifest")), i;
  }
  static parseMasterPlaylistMedia(e, t, s) {
    let i;
    const r = {}, a = s.levels, o = {
      AUDIO: a.map((c) => ({
        id: c.attrs.AUDIO,
        audioCodec: c.audioCodec
      })),
      SUBTITLES: a.map((c) => ({
        id: c.attrs.SUBTITLES,
        textCodec: c.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let l = 0;
    for (An.lastIndex = 0; (i = An.exec(e)) !== null; ) {
      const c = new ce(i[1]), d = c.TYPE;
      if (d) {
        const h = o[d], u = r[d] || [];
        r[d] = u, Re(s, c, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
        const f = c.LANGUAGE, g = c["ASSOC-LANGUAGE"], m = c.CHANNELS, p = c.CHARACTERISTICS, x = c["INSTREAM-ID"], S = {
          attrs: c,
          bitrate: 0,
          id: l++,
          groupId: c["GROUP-ID"] || "",
          name: c.NAME || f || "",
          type: d,
          default: c.bool("DEFAULT"),
          autoselect: c.bool("AUTOSELECT"),
          forced: c.bool("FORCED"),
          lang: f,
          url: c.URI ? je.resolve(c.URI, t) : ""
        };
        if (g && (S.assocLang = g), m && (S.channels = m), p && (S.characteristics = p), x && (S.instreamId = x), h != null && h.length) {
          const T = je.findGroup(h, S.groupId) || h[0];
          _n(S, T, "audioCodec"), _n(S, T, "textCodec");
        }
        u.push(S);
      }
    }
    return r;
  }
  static parseLevelPlaylist(e, t, s, i, r, a) {
    const o = new ul(t), l = o.fragments;
    let c = null, d = 0, h = 0, u = 0, f = 0, g = null, m = new Ps(i, t), p, x, S, T = -1, C = !1, E = null;
    for (Ln.lastIndex = 0, o.m3u8 = e, o.hasVariableRefs = xn(e); (p = Ln.exec(e)) !== null; ) {
      C && (C = !1, m = new Ps(i, t), m.start = u, m.sn = d, m.cc = f, m.level = s, c && (m.initSegment = c, m.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null, E && (m.setByteRange(E), E = null)));
      const P = p[1];
      if (P) {
        m.duration = parseFloat(P);
        const b = (" " + p[2]).slice(1);
        m.title = b || null, m.tagList.push(b ? ["INF", P, b] : ["INF", P]);
      } else if (p[3]) {
        if ($(m.duration)) {
          m.start = u, S && Dn(m, S, o), m.sn = d, m.level = s, m.cc = f, l.push(m);
          const b = (" " + p[3]).slice(1);
          m.relurl = hi(o, b), bn(m, g), g = m, u += m.duration, d++, h = 0, C = !0;
        }
      } else if (p[4]) {
        const b = (" " + p[4]).slice(1);
        g ? m.setByteRange(b, g) : m.setByteRange(b);
      } else if (p[5])
        m.rawProgramDateTime = (" " + p[5]).slice(1), m.tagList.push(["PROGRAM-DATE-TIME", m.rawProgramDateTime]), T === -1 && (T = l.length);
      else {
        if (p = p[0].match(Zl), !p) {
          A.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (x = 1; x < p.length && !(typeof p[x] < "u"); x++)
          ;
        const b = (" " + p[x]).slice(1), w = (" " + p[x + 1]).slice(1), G = p[x + 2] ? (" " + p[x + 2]).slice(1) : "";
        switch (b) {
          case "PLAYLIST-TYPE":
            o.type = w.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            d = o.startSN = parseInt(w);
            break;
          case "SKIP": {
            const O = new ce(w);
            Re(o, O, ["RECENTLY-REMOVED-DATERANGES"]);
            const F = O.decimalInteger("SKIPPED-SEGMENTS");
            if ($(F)) {
              o.skippedSegments = F;
              for (let N = F; N--; )
                l.unshift(null);
              d += F;
            }
            const U = O.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            U && (o.recentlyRemovedDateranges = U.split("	"));
            break;
          }
          case "TARGETDURATION":
            o.targetduration = Math.max(parseInt(w), 1);
            break;
          case "VERSION":
            o.version = parseInt(w);
            break;
          case "INDEPENDENT-SEGMENTS":
          case "EXTM3U":
            break;
          case "ENDLIST":
            o.live = !1;
            break;
          case "#":
            (w || G) && m.tagList.push(G ? [w, G] : [w]);
            break;
          case "DISCONTINUITY":
            f++, m.tagList.push(["DIS"]);
            break;
          case "GAP":
            m.gap = !0, m.tagList.push([b]);
            break;
          case "BITRATE":
            m.tagList.push([b, w]);
            break;
          case "DATERANGE": {
            const O = new ce(w);
            Re(o, O, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), Re(o, O, O.clientAttrs);
            const F = new qr(O, o.dateRanges[O.ID]);
            F.isValid || o.skippedSegments ? o.dateRanges[F.id] = F : A.warn(`Ignoring invalid DATERANGE tag: "${w}"`), m.tagList.push(["EXT-X-DATERANGE", w]);
            break;
          }
          case "DEFINE": {
            {
              const O = new ce(w);
              Re(o, O, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in O ? Kl(o, O, a) : En(o, O, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            f = parseInt(w);
            break;
          case "KEY": {
            const O = Cn(w, t, o);
            if (O.isSupported()) {
              if (O.method === "NONE") {
                S = void 0;
                break;
              }
              S || (S = {}), S[O.keyFormat] && (S = fe({}, S)), S[O.keyFormat] = O;
            } else
              A.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${w}"`);
            break;
          }
          case "START":
            o.startTimeOffset = Rn(w);
            break;
          case "MAP": {
            const O = new ce(w);
            if (Re(o, O, ["BYTERANGE", "URI"]), m.duration) {
              const F = new Ps(i, t);
              In(F, O, s, S), c = F, m.initSegment = c, c.rawProgramDateTime && !m.rawProgramDateTime && (m.rawProgramDateTime = c.rawProgramDateTime);
            } else {
              const F = m.byteRangeEndOffset;
              if (F) {
                const U = m.byteRangeStartOffset;
                E = `${F - U}@${U}`;
              } else
                E = null;
              In(m, O, s, S), c = m, C = !0;
            }
            break;
          }
          case "SERVER-CONTROL": {
            const O = new ce(w);
            o.canBlockReload = O.bool("CAN-BLOCK-RELOAD"), o.canSkipUntil = O.optionalFloat("CAN-SKIP-UNTIL", 0), o.canSkipDateRanges = o.canSkipUntil > 0 && O.bool("CAN-SKIP-DATERANGES"), o.partHoldBack = O.optionalFloat("PART-HOLD-BACK", 0), o.holdBack = O.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            const O = new ce(w);
            o.partTarget = O.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let O = o.partList;
            O || (O = o.partList = []);
            const F = h > 0 ? O[O.length - 1] : void 0, U = h++, N = new ce(w);
            Re(o, N, ["BYTERANGE", "URI"]);
            const H = new dl(N, m, t, U, F);
            O.push(H), m.duration += H.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const O = new ce(w);
            Re(o, O, ["URI"]), o.preloadHint = O;
            break;
          }
          case "RENDITION-REPORT": {
            const O = new ce(w);
            Re(o, O, ["URI"]), o.renditionReports = o.renditionReports || [], o.renditionReports.push(O);
            break;
          }
          default:
            A.warn(`line parsed but not handled: ${p}`);
            break;
        }
      }
    }
    g && !g.relurl ? (l.pop(), u -= g.duration, o.partList && (o.fragmentHint = g)) : o.partList && (bn(m, g), m.cc = f, o.fragmentHint = m, S && Dn(m, S, o));
    const L = l.length, _ = l[0], I = l[L - 1];
    if (u += o.skippedSegments * o.targetduration, u > 0 && L && I) {
      o.averagetargetduration = u / L;
      const P = I.sn;
      o.endSN = P !== "initSegment" ? P : 0, o.live || (I.endList = !0), _ && (o.startCC = _.cc);
    } else
      o.endSN = 0, o.startCC = 0;
    return o.fragmentHint && (u += o.fragmentHint.duration), o.totalduration = u, o.endCC = f, T > 0 && Jl(l, T), o;
  }
}
function Cn(n, e, t) {
  var s, i;
  const r = new ce(n);
  Re(t, r, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
  const a = (s = r.METHOD) != null ? s : "", o = r.URI, l = r.hexadecimalInteger("IV"), c = r.KEYFORMATVERSIONS, d = (i = r.KEYFORMAT) != null ? i : "identity";
  o && r.IV && !l && A.error(`Invalid IV: ${r.IV}`);
  const h = o ? je.resolve(o, e) : "", u = (c || "1").split("/").map(Number).filter(Number.isFinite);
  return new Vt(a, h, d, u, l);
}
function Rn(n) {
  const t = new ce(n).decimalFloatingPoint("TIME-OFFSET");
  return $(t) ? t : null;
}
function Ql(n, e) {
  let t = (n || "").split(/[ ,]+/).filter((s) => s);
  ["video", "audio", "text"].forEach((s) => {
    const i = t.filter((r) => Wl(r, s));
    i.length && (e[`${s}Codec`] = i.join(","), t = t.filter((r) => i.indexOf(r) === -1));
  }), e.unknownCodecs = t;
}
function _n(n, e, t) {
  const s = e[t];
  s && (n[t] = s);
}
function Jl(n, e) {
  let t = n[e];
  for (let s = e; s--; ) {
    const i = n[s];
    if (!i)
      return;
    i.programDateTime = t.programDateTime - i.duration * 1e3, t = i;
  }
}
function bn(n, e) {
  n.rawProgramDateTime ? n.programDateTime = Date.parse(n.rawProgramDateTime) : e != null && e.programDateTime && (n.programDateTime = e.endProgramDateTime), $(n.programDateTime) || (n.programDateTime = null, n.rawProgramDateTime = null);
}
function In(n, e, t, s) {
  n.relurl = e.URI, e.BYTERANGE && n.setByteRange(e.BYTERANGE), n.level = t, n.sn = "initSegment", s && (n.levelkeys = s), n.initSegment = null;
}
function Dn(n, e, t) {
  n.levelkeys = e;
  const {
    encryptedFragments: s
  } = t;
  (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some((i) => e[i].isCommonEncryption) && s.push(n);
}
var J = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, Y = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
function wn(n) {
  const {
    type: e
  } = n;
  switch (e) {
    case J.AUDIO_TRACK:
      return Y.AUDIO;
    case J.SUBTITLE_TRACK:
      return Y.SUBTITLE;
    default:
      return Y.MAIN;
  }
}
function $s(n, e) {
  let t = n.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class ec {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_LOADING, this.onLevelLoading, this), e.off(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, s = t.pLoader, i = t.loader, r = s || i, a = new r(t);
    return this.loaders[e.type] = a, a;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: s
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: J.MANIFEST,
      url: s,
      deliveryDirectives: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: s,
      level: i,
      pathwayId: r,
      url: a,
      deliveryDirectives: o
    } = t;
    this.load({
      id: s,
      level: i,
      pathwayId: r,
      responseType: "text",
      type: J.LEVEL,
      url: a,
      deliveryDirectives: o
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: a
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: J.AUDIO_TRACK,
      url: r,
      deliveryDirectives: a
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: a
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: J.SUBTITLE_TRACK,
      url: r,
      deliveryDirectives: a
    });
  }
  load(e) {
    var t;
    const s = this.hls.config;
    let i = this.getInternalLoader(e);
    if (i) {
      const c = i.context;
      if (c && c.url === e.url && c.level === e.level) {
        A.trace("[playlist-loader]: playlist request ongoing");
        return;
      }
      A.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), i.abort();
    }
    let r;
    if (e.type === J.MANIFEST ? r = s.manifestLoadPolicy.default : r = fe({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), i = this.createInternalLoader(e), $((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let c;
      if (e.type === J.LEVEL && e.level !== null ? c = this.hls.levels[e.level].details : e.type === J.AUDIO_TRACK && e.id !== null ? c = this.hls.audioTracks[e.id].details : e.type === J.SUBTITLE_TRACK && e.id !== null && (c = this.hls.subtitleTracks[e.id].details), c) {
        const d = c.partTarget, h = c.targetduration;
        if (d && h) {
          const u = Math.max(d * 3, h * 0.8) * 1e3;
          r = fe({}, r, {
            maxTimeToFirstByteMs: Math.min(u, r.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(u, r.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const a = r.errorRetry || r.timeoutRetry || {}, o = {
      loadPolicy: r,
      timeout: r.maxLoadTimeMs,
      maxRetry: a.maxNumRetry || 0,
      retryDelay: a.retryDelayMs || 0,
      maxRetryDelay: a.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (c, d, h, u) => {
        const f = this.getInternalLoader(h);
        this.resetInternalLoader(h.type);
        const g = c.data;
        if (g.indexOf("#EXTM3U") !== 0) {
          this.handleManifestParsingError(c, h, new Error("no EXTM3U delimiter"), u || null, d);
          return;
        }
        d.parsing.start = performance.now(), je.isMediaPlaylist(g) ? this.handleTrackOrLevelPlaylist(c, d, h, u || null, f) : this.handleMasterPlaylist(c, d, h, u);
      },
      onError: (c, d, h, u) => {
        this.handleNetworkError(d, h, !1, c, u);
      },
      onTimeout: (c, d, h) => {
        this.handleNetworkError(d, h, !0, void 0, c);
      }
    };
    i.load(e, o, l);
  }
  handleMasterPlaylist(e, t, s, i) {
    const r = this.hls, a = e.data, o = $s(e, s), l = je.parseMasterPlaylist(a, o);
    if (l.playlistParsingError) {
      this.handleManifestParsingError(e, s, l.playlistParsingError, i, t);
      return;
    }
    const {
      contentSteering: c,
      levels: d,
      sessionData: h,
      sessionKeys: u,
      startTimeOffset: f,
      variableList: g
    } = l;
    this.variableList = g;
    const {
      AUDIO: m = [],
      SUBTITLES: p,
      "CLOSED-CAPTIONS": x
    } = je.parseMasterPlaylistMedia(a, o, l);
    m.length && !m.some((T) => !T.url) && d[0].audioCodec && !d[0].attrs.AUDIO && (A.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new ce({}),
      bitrate: 0,
      url: ""
    })), r.trigger(y.MANIFEST_LOADED, {
      levels: d,
      audioTracks: m,
      subtitles: p,
      captions: x,
      contentSteering: c,
      url: o,
      stats: t,
      networkDetails: i,
      sessionData: h,
      sessionKeys: u,
      startTimeOffset: f,
      variableList: g
    });
  }
  handleTrackOrLevelPlaylist(e, t, s, i, r) {
    const a = this.hls, {
      id: o,
      level: l,
      type: c
    } = s, d = $s(e, s), h = 0, u = $(l) ? l : $(o) ? o : 0, f = wn(s), g = je.parseLevelPlaylist(e.data, d, u, f, h, this.variableList);
    if (c === J.MANIFEST) {
      const m = {
        attrs: new ce({}),
        bitrate: 0,
        details: g,
        name: "",
        url: d
      };
      a.trigger(y.MANIFEST_LOADED, {
        levels: [m],
        audioTracks: [],
        url: d,
        stats: t,
        networkDetails: i,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), s.levelDetails = g, this.handlePlaylistLoaded(g, e, t, s, i, r);
  }
  handleManifestParsingError(e, t, s, i, r) {
    this.hls.trigger(y.ERROR, {
      type: q.NETWORK_ERROR,
      details: D.MANIFEST_PARSING_ERROR,
      fatal: t.type === J.MANIFEST,
      url: e.url,
      err: s,
      error: s,
      reason: s.message,
      response: e,
      context: t,
      networkDetails: i,
      stats: r
    });
  }
  handleNetworkError(e, t, s = !1, i, r) {
    let a = `A network ${s ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === J.LEVEL ? a += `: ${e.level} id: ${e.id}` : (e.type === J.AUDIO_TRACK || e.type === J.SUBTITLE_TRACK) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(a);
    A.warn(`[playlist-loader]: ${a}`);
    let l = D.UNKNOWN, c = !1;
    const d = this.getInternalLoader(e);
    switch (e.type) {
      case J.MANIFEST:
        l = s ? D.MANIFEST_LOAD_TIMEOUT : D.MANIFEST_LOAD_ERROR, c = !0;
        break;
      case J.LEVEL:
        l = s ? D.LEVEL_LOAD_TIMEOUT : D.LEVEL_LOAD_ERROR, c = !1;
        break;
      case J.AUDIO_TRACK:
        l = s ? D.AUDIO_TRACK_LOAD_TIMEOUT : D.AUDIO_TRACK_LOAD_ERROR, c = !1;
        break;
      case J.SUBTITLE_TRACK:
        l = s ? D.SUBTITLE_TRACK_LOAD_TIMEOUT : D.SUBTITLE_LOAD_ERROR, c = !1;
        break;
    }
    d && this.resetInternalLoader(e.type);
    const h = {
      type: q.NETWORK_ERROR,
      details: l,
      fatal: c,
      url: e.url,
      loader: d,
      context: e,
      error: o,
      networkDetails: t,
      stats: r
    };
    if (i) {
      const u = (t == null ? void 0 : t.url) || e.url;
      h.response = ye({
        url: u,
        data: void 0
      }, i);
    }
    this.hls.trigger(y.ERROR, h);
  }
  handlePlaylistLoaded(e, t, s, i, r, a) {
    const o = this.hls, {
      type: l,
      level: c,
      id: d,
      groupId: h,
      deliveryDirectives: u
    } = i, f = $s(t, i), g = wn(i), m = typeof i.level == "number" && g === Y.MAIN ? c : void 0;
    if (!e.fragments.length) {
      const x = new Error("No Segments found in Playlist");
      o.trigger(y.ERROR, {
        type: q.NETWORK_ERROR,
        details: D.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: f,
        error: x,
        reason: x.message,
        response: t,
        context: i,
        level: m,
        parent: g,
        networkDetails: r,
        stats: s
      });
      return;
    }
    e.targetduration || (e.playlistParsingError = new Error("Missing Target Duration"));
    const p = e.playlistParsingError;
    if (p) {
      o.trigger(y.ERROR, {
        type: q.NETWORK_ERROR,
        details: D.LEVEL_PARSING_ERROR,
        fatal: !1,
        url: f,
        error: p,
        reason: p.message,
        response: t,
        context: i,
        level: m,
        parent: g,
        networkDetails: r,
        stats: s
      });
      return;
    }
    switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), l) {
      case J.MANIFEST:
      case J.LEVEL:
        o.trigger(y.LEVEL_LOADED, {
          details: e,
          level: m || 0,
          id: d || 0,
          stats: s,
          networkDetails: r,
          deliveryDirectives: u
        });
        break;
      case J.AUDIO_TRACK:
        o.trigger(y.AUDIO_TRACK_LOADED, {
          details: e,
          id: d || 0,
          groupId: h || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: u
        });
        break;
      case J.SUBTITLE_TRACK:
        o.trigger(y.SUBTITLE_TRACK_LOADED, {
          details: e,
          id: d || 0,
          groupId: h || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: u
        });
        break;
    }
  }
}
function ca(n, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = n, e.dispatchEvent(t);
}
function da(n, e) {
  const t = n.mode;
  if (t === "disabled" && (n.mode = "hidden"), n.cues && !n.cues.getCueById(e.id))
    try {
      if (n.addCue(e), !n.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (s) {
      A.debug(`[texttrack-utils]: ${s}`);
      try {
        const i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        i.id = e.id, n.addCue(i);
      } catch (i) {
        A.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`);
      }
    }
  t === "disabled" && (n.mode = t);
}
function At(n) {
  const e = n.mode;
  if (e === "disabled" && (n.mode = "hidden"), n.cues)
    for (let t = n.cues.length; t--; )
      n.removeCue(n.cues[t]);
  e === "disabled" && (n.mode = e);
}
function ui(n, e, t, s) {
  const i = n.mode;
  if (i === "disabled" && (n.mode = "hidden"), n.cues && n.cues.length > 0) {
    const r = sc(n.cues, e, t);
    for (let a = 0; a < r.length; a++)
      (!s || s(r[a])) && n.removeCue(r[a]);
  }
  i === "disabled" && (n.mode = i);
}
function tc(n, e) {
  if (e < n[0].startTime)
    return 0;
  const t = n.length - 1;
  if (e > n[t].endTime)
    return -1;
  let s = 0, i = t;
  for (; s <= i; ) {
    const r = Math.floor((i + s) / 2);
    if (e < n[r].startTime)
      i = r - 1;
    else if (e > n[r].startTime && s < t)
      s = r + 1;
    else
      return r;
  }
  return n[s].startTime - e < e - n[i].startTime ? s : i;
}
function sc(n, e, t) {
  const s = [], i = tc(n, e);
  if (i > -1)
    for (let r = i, a = n.length; r < a; r++) {
      const o = n[r];
      if (o.startTime >= e && o.endTime <= t)
        s.push(o);
      else if (o.startTime > t)
        return s;
    }
  return s;
}
function as(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const s = n[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(n[t]);
  }
  return e;
}
var Ne = {
  audioId3: "org.id3",
  dateRange: "com.apple.quicktime.HLS",
  emsg: "https://aomedia.org/emsg/ID3"
};
const ic = 0.25;
function fi() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function kn(n, e, t, s, i) {
  let r = new n(e, t, "");
  try {
    r.value = s, i && (r.type = i);
  } catch {
    r = new n(e, t, JSON.stringify(i ? ye({
      type: i
    }, s) : s));
  }
  return r;
}
const qt = (() => {
  const n = fi();
  try {
    n && new n(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function Gs(n, e) {
  return n.getTime() / 1e3 - e;
}
function nc(n) {
  return Uint8Array.from(n.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
class rc {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  // Add ID3 metatadata text track.
  onMediaAttached(e, t) {
    this.media = t.media;
  }
  onMediaDetaching() {
    this.id3Track && (At(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (s.kind === "metadata" && s.label === "id3")
          return ca(s, this.media), s;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media)
      return;
    const {
      hls: {
        config: {
          enableEmsgMetadataCues: s,
          enableID3MetadataCues: i
        }
      }
    } = this;
    if (!s && !i)
      return;
    const {
      samples: r
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const a = fi();
    if (a)
      for (let o = 0; o < r.length; o++) {
        const l = r[o].type;
        if (l === Ne.emsg && !s || !i)
          continue;
        const c = Jr(r[o].data);
        if (c) {
          const d = r[o].pts;
          let h = d + r[o].duration;
          h > qt && (h = qt), h - d <= 0 && (h = d + ic);
          for (let f = 0; f < c.length; f++) {
            const g = c[f];
            if (!Qr(g)) {
              this.updateId3CueEnds(d, l);
              const m = kn(a, d, h, g, l);
              m && this.id3Track.addCue(m);
            }
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var s;
    const i = (s = this.id3Track) == null ? void 0 : s.cues;
    if (i)
      for (let r = i.length; r--; ) {
        const a = i[r];
        a.type === t && a.startTime < e && a.endTime === qt && (a.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    type: i
  }) {
    const {
      id3Track: r,
      hls: a
    } = this;
    if (!a)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: l
      }
    } = a;
    if (r && (o || l)) {
      let c;
      i === "audio" ? c = (d) => d.type === Ne.audioId3 && l : i === "video" ? c = (d) => d.type === Ne.emsg && o : c = (d) => d.type === Ne.audioId3 && l || d.type === Ne.emsg && o, ui(r, t, s, c);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    if (!this.media || !t.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues)
      return;
    const {
      dateRangeCuesAppended: s,
      id3Track: i
    } = this, {
      dateRanges: r
    } = t, a = Object.keys(r);
    if (i) {
      const d = Object.keys(s).filter((h) => !a.includes(h));
      for (let h = d.length; h--; ) {
        const u = d[h];
        Object.keys(s[u].cues).forEach((f) => {
          i.removeCue(s[u].cues[f]);
        }), delete s[u];
      }
    }
    const o = t.fragments[t.fragments.length - 1];
    if (a.length === 0 || !$(o == null ? void 0 : o.programDateTime))
      return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = o.programDateTime / 1e3 - o.start, c = fi();
    for (let d = 0; d < a.length; d++) {
      const h = a[d], u = r[h], f = Gs(u.startDate, l), g = s[h], m = (g == null ? void 0 : g.cues) || {};
      let p = (g == null ? void 0 : g.durationKnown) || !1, x = qt;
      const S = u.endDate;
      if (S)
        x = Gs(S, l), p = !0;
      else if (u.endOnNext && !p) {
        const C = a.reduce((E, L) => {
          if (L !== u.id) {
            const _ = r[L];
            if (_.class === u.class && _.startDate > u.startDate && (!E || u.startDate < E.startDate))
              return _;
          }
          return E;
        }, null);
        C && (x = Gs(C.startDate, l), p = !0);
      }
      const T = Object.keys(u.attr);
      for (let C = 0; C < T.length; C++) {
        const E = T[C];
        if (!ll(E))
          continue;
        const L = m[E];
        if (L)
          p && !g.durationKnown && (L.endTime = x);
        else if (c) {
          let _ = u.attr[E];
          cl(E) && (_ = nc(_));
          const I = kn(c, f, x, {
            key: E,
            data: _
          }, Ne.dateRange);
          I && (I.id = h, this.id3Track.addCue(I), m[E] = I);
        }
      }
      s[h] = {
        cues: m,
        dateRange: u,
        durationKnown: p
      };
    }
  }
}
class ac {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = e, this.config = e.config, this.registerListeners();
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e,
      levelDetails: t
    } = this;
    return e.liveMaxLatencyDuration !== void 0 ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: s,
      targetduration: i
    } = e, {
      liveSyncDuration: r,
      liveSyncDurationCount: a,
      lowLatencyMode: o
    } = this.config, l = this.hls.userConfig;
    let c = o && s || t;
    (l.liveSyncDuration || l.liveSyncDurationCount || c === 0) && (c = r !== void 0 ? r : a * i);
    const d = i;
    return c + Math.min(this.stallCount * 1, d);
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency, s = this.levelDetails;
    if (e === null || t === null || s === null)
      return null;
    const i = s.edge, r = e - t - this.edgeStalled, a = i - s.totalduration, o = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(a, r), o);
  }
  get drift() {
    const {
      levelDetails: e
    } = this;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return 0;
    const s = e.buffered.length;
    return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(y.ERROR, this.onError, this);
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
  }
  onManifestLoading() {
    this.levelDetails = null, this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.levelDetails = t, t.advanced && this.timeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
  }
  onError(e, t) {
    var s;
    t.details === D.BUFFER_STALLED_ERROR && (this.stallCount++, (s = this.levelDetails) != null && s.live && A.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
  }
  timeupdate() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return;
    this.currentTime = e.currentTime;
    const s = this.computeLatency();
    if (s === null)
      return;
    this._latency = s;
    const {
      lowLatencyMode: i,
      maxLiveSyncPlaybackRate: r
    } = this.config;
    if (!i || r === 1 || !t.live)
      return;
    const a = this.targetLatency;
    if (a === null)
      return;
    const o = s - a, l = Math.min(this.maxLatency, a + t.targetduration);
    if (o < l && o > 0.05 && this.forwardBufferLength > 1) {
      const d = Math.min(2, Math.max(1, r)), h = Math.round(2 / (1 + Math.exp(-0.75 * o - this.edgeStalled)) * 20) / 20;
      e.playbackRate = Math.min(d, Math.max(1, h));
    } else e.playbackRate !== 1 && e.playbackRate !== 0 && (e.playbackRate = 1);
  }
  estimateLiveEdge() {
    const {
      levelDetails: e
    } = this;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
const gi = ["NONE", "TYPE-0", "TYPE-1", null];
function oc(n) {
  return gi.indexOf(n) > -1;
}
const Ts = ["SDR", "PQ", "HLG"];
function lc(n) {
  return !!n && Ts.indexOf(n) > -1;
}
var os = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function Pn(n) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: s
  } = n, i = s < e / 2;
  return e && i ? t ? os.v2 : os.Yes : os.No;
}
class On {
  constructor(e, t, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class _t {
  constructor(e) {
    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((t) => !!t).map((t) => t.substring(0, 4)).join(","), this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return Fn(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return Fn(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let s = this._audioGroups;
        s || (s = this._audioGroups = []), s.indexOf(t) === -1 && s.push(t);
      } else if (e === "text") {
        let s = this._subtitleGroups;
        s || (s = this._subtitleGroups = []), s.indexOf(t) === -1 && s.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function Fn(n, e) {
  return !e || !n ? !1 : n.indexOf(e) !== -1;
}
function Vs(n, e) {
  const t = e.startPTS;
  if ($(t)) {
    let s = 0, i;
    e.sn > n.sn ? (s = t - n.start, i = n) : (s = n.start - t, i = e), i.duration !== s && (i.duration = s);
  } else e.sn > n.sn ? n.cc === e.cc && n.minEndPTS ? e.start = n.start + (n.minEndPTS - n.start) : e.start = n.start + n.duration : e.start = Math.max(n.start - e.duration, 0);
}
function ha(n, e, t, s, i, r) {
  s - t <= 0 && (A.warn("Fragment should have a positive duration", e), s = t + e.duration, r = i + e.duration);
  let o = t, l = s;
  const c = e.startPTS, d = e.endPTS;
  if ($(c)) {
    const p = Math.abs(c - t);
    $(e.deltaPTS) ? e.deltaPTS = Math.max(p, e.deltaPTS) : e.deltaPTS = p, o = Math.max(t, c), t = Math.min(t, c), i = Math.min(i, e.startDTS), l = Math.min(s, d), s = Math.max(s, d), r = Math.max(r, e.endDTS);
  }
  const h = t - e.start;
  e.start !== 0 && (e.start = t), e.duration = s - e.start, e.startPTS = t, e.maxStartPTS = o, e.startDTS = i, e.endPTS = s, e.minEndPTS = l, e.endDTS = r;
  const u = e.sn;
  if (!n || u < n.startSN || u > n.endSN)
    return 0;
  let f;
  const g = u - n.startSN, m = n.fragments;
  for (m[g] = e, f = g; f > 0; f--)
    Vs(m[f], m[f - 1]);
  for (f = g; f < m.length - 1; f++)
    Vs(m[f], m[f + 1]);
  return n.fragmentHint && Vs(m[m.length - 1], n.fragmentHint), n.PTSKnown = n.alignedSliding = !0, h;
}
function cc(n, e) {
  let t = null;
  const s = n.fragments;
  for (let l = s.length - 1; l >= 0; l--) {
    const c = s[l].initSegment;
    if (c) {
      t = c;
      break;
    }
  }
  n.fragmentHint && delete n.fragmentHint.endPTS;
  let i = 0, r;
  if (uc(n, e, (l, c) => {
    l.relurl && (i = l.cc - c.cc), $(l.startPTS) && $(l.endPTS) && (c.start = c.startPTS = l.startPTS, c.startDTS = l.startDTS, c.maxStartPTS = l.maxStartPTS, c.endPTS = l.endPTS, c.endDTS = l.endDTS, c.minEndPTS = l.minEndPTS, c.duration = l.endPTS - l.startPTS, c.duration && (r = c), e.PTSKnown = e.alignedSliding = !0), c.elementaryStreams = l.elementaryStreams, c.loader = l.loader, c.stats = l.stats, l.initSegment && (c.initSegment = l.initSegment, t = l.initSegment);
  }), t && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((c) => {
    var d;
    c && (!c.initSegment || c.initSegment.relurl === ((d = t) == null ? void 0 : d.relurl)) && (c.initSegment = t);
  }), e.skippedSegments)
    if (e.deltaUpdateFailed = e.fragments.some((l) => !l), e.deltaUpdateFailed) {
      A.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let l = e.skippedSegments; l--; )
        e.fragments.shift();
      e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc;
    } else e.canSkipDateRanges && (e.dateRanges = dc(n.dateRanges, e.dateRanges, e.recentlyRemovedDateranges));
  const a = e.fragments;
  if (i) {
    A.warn("discontinuity sliding from playlist, take drift into account");
    for (let l = 0; l < a.length; l++)
      a[l].cc += i;
  }
  e.skippedSegments && (e.startCC = e.fragments[0].cc), hc(n.partList, e.partList, (l, c) => {
    c.elementaryStreams = l.elementaryStreams, c.stats = l.stats;
  }), r ? ha(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : ua(n, e), a.length && (e.totalduration = e.edge - a[0].start), e.driftStartTime = n.driftStartTime, e.driftStart = n.driftStart;
  const o = e.advancedDateTime;
  if (e.advanced && o) {
    const l = e.edge;
    e.driftStart || (e.driftStartTime = o, e.driftStart = l), e.driftEndTime = o, e.driftEnd = l;
  } else
    e.driftEndTime = n.driftEndTime, e.driftEnd = n.driftEnd, e.advancedDateTime = n.advancedDateTime;
}
function dc(n, e, t) {
  const s = fe({}, n);
  return t && t.forEach((i) => {
    delete s[i];
  }), Object.keys(e).forEach((i) => {
    const r = new qr(e[i].attr, s[i]);
    r.isValid ? s[i] = r : A.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`);
  }), s;
}
function hc(n, e, t) {
  if (n && e) {
    let s = 0;
    for (let i = 0, r = n.length; i <= r; i++) {
      const a = n[i], o = e[i + s];
      a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? t(a, o) : s--;
    }
  }
}
function uc(n, e, t) {
  const s = e.skippedSegments, i = Math.max(n.startSN, e.startSN) - e.startSN, r = (n.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(n.endSN, e.endSN)) - e.startSN, a = e.startSN - n.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = n.fragmentHint ? n.fragments.concat(n.fragmentHint) : n.fragments;
  for (let c = i; c <= r; c++) {
    const d = l[a + c];
    let h = o[c];
    s && !h && c < s && (h = e.fragments[c] = d), d && h && t(d, h);
  }
}
function ua(n, e) {
  const t = e.startSN + e.skippedSegments - n.startSN, s = n.fragments;
  t < 0 || t >= s.length || mi(e, s[t].start);
}
function mi(n, e) {
  if (e) {
    const t = n.fragments;
    for (let s = n.skippedSegments; s < t.length; s++)
      t[s].start += e;
    n.fragmentHint && (n.fragmentHint.start += e);
  }
}
function fc(n, e = 1 / 0) {
  let t = 1e3 * n.targetduration;
  if (n.updated) {
    const s = n.fragments;
    if (s.length && t * 4 > e) {
      const r = s[s.length - 1].duration * 1e3;
      r < t && (t = r);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function gc(n, e, t) {
  if (!(n != null && n.details))
    return null;
  const s = n.details;
  let i = s.fragments[e - s.startSN];
  return i || (i = s.fragmentHint, i && i.sn === e) ? i : e < s.startSN && t && t.sn === e ? t : null;
}
function Mn(n, e, t) {
  var s;
  return n != null && n.details ? fa((s = n.details) == null ? void 0 : s.partList, e, t) : null;
}
function fa(n, e, t) {
  if (n)
    for (let s = n.length; s--; ) {
      const i = n[s];
      if (i.index === t && i.fragment.sn === e)
        return i;
    }
  return null;
}
function ga(n) {
  n.forEach((e, t) => {
    const {
      details: s
    } = e;
    s != null && s.fragments && s.fragments.forEach((i) => {
      i.level = t;
    });
  });
}
function vs(n) {
  switch (n.details) {
    case D.FRAG_LOAD_TIMEOUT:
    case D.KEY_LOAD_TIMEOUT:
    case D.LEVEL_LOAD_TIMEOUT:
    case D.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function Nn(n, e) {
  const t = vs(e);
  return n.default[`${t ? "timeout" : "error"}Retry`];
}
function Ui(n, e) {
  const t = n.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * n.retryDelayMs, n.maxRetryDelayMs);
}
function Un(n) {
  return ye(ye({}, n), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function Ss(n, e, t, s) {
  if (!n)
    return !1;
  const i = s == null ? void 0 : s.code, r = e < n.maxNumRetry && (mc(i) || !!t);
  return n.shouldRetry ? n.shouldRetry(n, e, t, s, r) : r;
}
function mc(n) {
  return n === 0 && navigator.onLine === !1 || !!n && (n < 400 || n > 499);
}
const ma = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(n, e) {
    let t = 0, s = n.length - 1, i = null, r = null;
    for (; t <= s; ) {
      i = (t + s) / 2 | 0, r = n[i];
      const a = e(r);
      if (a > 0)
        t = i + 1;
      else if (a < 0)
        s = i - 1;
      else
        return r;
    }
    return null;
  }
};
function pc(n, e, t) {
  if (e === null || !Array.isArray(n) || !n.length || !$(e))
    return null;
  const s = n[0].programDateTime;
  if (e < (s || 0))
    return null;
  const i = n[n.length - 1].endProgramDateTime;
  if (e >= (i || 0))
    return null;
  t = t || 0;
  for (let r = 0; r < n.length; ++r) {
    const a = n[r];
    if (xc(e, t, a))
      return a;
  }
  return null;
}
function As(n, e, t = 0, s = 0, i = 5e-3) {
  let r = null;
  if (n) {
    r = e[n.sn - e[0].sn + 1] || null;
    const o = n.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7);
  } else t === 0 && e[0].start === 0 && (r = e[0]);
  if (r && ((!n || n.level === r.level) && pi(t, s, r) === 0 || yc(r, n, Math.min(i, s))))
    return r;
  const a = ma.search(e, pi.bind(null, t, s));
  return a && (a !== n || !r) ? a : r;
}
function yc(n, e, t) {
  if (e && e.start === 0 && e.level < n.level && (e.endPTS || 0) > 0) {
    const s = e.tagList.reduce((i, r) => (r[0] === "INF" && (i += parseFloat(r[1])), i), t);
    return n.start <= s;
  }
  return !1;
}
function pi(n = 0, e = 0, t) {
  if (t.start <= n && t.start + t.duration > n)
    return 0;
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - s <= n ? 1 : t.start - s > n && t.start ? -1 : 0;
}
function xc(n, e, t) {
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - s > n;
}
function Ec(n, e) {
  return ma.search(n, (t) => t.cc < e ? 1 : t.cc > e ? -1 : 0);
}
var Ee = {
  DoNothing: 0,
  SendEndCallback: 1,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  InsertDiscontinuity: 4,
  RetryRequest: 5
}, Oe = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2,
  SwitchToSDR: 4
};
class Tc {
  constructor(e) {
    this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = e, this.log = A.log.bind(A, "[info]:"), this.warn = A.warn.bind(A, "[warning]:"), this.error = A.error.bind(A, "[error]:"), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.ERROR, this.onError, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(y.ERROR, this.onError, this), e.off(y.ERROR, this.onErrorOut, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === Y.MAIN ? e.level : this.hls.loadLevel;
  }
  onManifestLoading() {
    this.playlistError = 0, this.penalizedRenditions = {};
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var s, i;
    if (t.fatal)
      return;
    const r = this.hls, a = t.context;
    switch (t.details) {
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case D.FRAG_PARSING_ERROR:
        if ((s = t.frag) != null && s.gap) {
          t.errorAction = {
            action: Ee.DoNothing,
            flags: Oe.None
          };
          return;
        }
      case D.FRAG_GAP:
      case D.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = Ee.SendAlternateToPenaltyBox;
        return;
      }
      case D.LEVEL_EMPTY_ERROR:
      case D.LEVEL_PARSING_ERROR:
        {
          var o, l;
          const c = t.parent === Y.MAIN ? t.level : r.loadLevel;
          t.details === D.LEVEL_EMPTY_ERROR && ((o = t.context) != null && (l = o.levelDetails) != null && l.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, c) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c));
        }
        return;
      case D.LEVEL_LOAD_ERROR:
      case D.LEVEL_LOAD_TIMEOUT:
        typeof (a == null ? void 0 : a.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, a.level));
        return;
      case D.AUDIO_TRACK_LOAD_ERROR:
      case D.AUDIO_TRACK_LOAD_TIMEOUT:
      case D.SUBTITLE_LOAD_ERROR:
      case D.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (a) {
          const c = r.levels[r.loadLevel];
          if (c && (a.type === J.AUDIO_TRACK && c.hasAudioGroup(a.groupId) || a.type === J.SUBTITLE_TRACK && c.hasSubtitleGroup(a.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.loadLevel), t.errorAction.action = Ee.SendAlternateToPenaltyBox, t.errorAction.flags = Oe.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const c = r.levels[r.loadLevel], d = c == null ? void 0 : c.attrs["HDCP-LEVEL"];
          d ? t.errorAction = {
            action: Ee.SendAlternateToPenaltyBox,
            flags: Oe.MoveAllAlternatesMatchingHDCP,
            hdcpLevel: d
          } : this.keySystemError(t);
        }
        return;
      case D.BUFFER_ADD_CODEC_ERROR:
      case D.REMUX_ALLOC_ERROR:
      case D.BUFFER_APPEND_ERROR:
        t.errorAction = this.getLevelSwitchAction(t, (i = t.level) != null ? i : r.loadLevel);
        return;
      case D.INTERNAL_EXCEPTION:
      case D.BUFFER_APPENDING_ERROR:
      case D.BUFFER_FULL_ERROR:
      case D.LEVEL_SWITCH_ERROR:
      case D.BUFFER_STALLED_ERROR:
      case D.BUFFER_SEEK_OVER_HOLE:
      case D.BUFFER_NUDGE_ON_STALL:
        t.errorAction = {
          action: Ee.DoNothing,
          flags: Oe.None
        };
        return;
    }
    t.type === q.KEY_SYSTEM_ERROR && this.keySystemError(t);
  }
  keySystemError(e) {
    const t = this.getVariantLevelIndex(e.frag);
    e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, t);
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const s = this.hls, i = Nn(s.config.playlistLoadPolicy, e), r = this.playlistError++;
    if (Ss(i, r, vs(e), e.response))
      return {
        action: Ee.RetryRequest,
        flags: Oe.None,
        retryConfig: i,
        retryCount: r
      };
    const o = this.getLevelSwitchAction(e, t);
    return i && (o.retryConfig = i, o.retryCount = r), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, s = this.getVariantLevelIndex(e.frag), i = t.levels[s], {
      fragLoadPolicy: r,
      keyLoadPolicy: a
    } = t.config, o = Nn(e.details.startsWith("key") ? a : r, e), l = t.levels.reduce((d, h) => d + h.fragmentError, 0);
    if (i && (e.details !== D.FRAG_GAP && i.fragmentError++, Ss(o, l, vs(e), e.response)))
      return {
        action: Ee.RetryRequest,
        flags: Oe.None,
        retryConfig: o,
        retryCount: l
      };
    const c = this.getLevelSwitchAction(e, s);
    return o && (c.retryConfig = o, c.retryCount = l), c;
  }
  getLevelSwitchAction(e, t) {
    const s = this.hls;
    t == null && (t = s.loadLevel);
    const i = this.hls.levels[t];
    if (i) {
      var r, a;
      const c = e.details;
      i.loadError++, c === D.BUFFER_APPEND_ERROR && i.fragmentError++;
      let d = -1;
      const {
        levels: h,
        loadLevel: u,
        minAutoLevel: f,
        maxAutoLevel: g
      } = s;
      s.autoLevelEnabled || (s.loadLevel = -1);
      const m = (r = e.frag) == null ? void 0 : r.type, x = (m === Y.AUDIO && c === D.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (c === D.BUFFER_ADD_CODEC_ERROR || c === D.BUFFER_APPEND_ERROR)) && h.some(({
        audioCodec: L
      }) => i.audioCodec !== L), T = e.sourceBufferName === "video" && (c === D.BUFFER_ADD_CODEC_ERROR || c === D.BUFFER_APPEND_ERROR) && h.some(({
        codecSet: L,
        audioCodec: _
      }) => i.codecSet !== L && i.audioCodec === _), {
        type: C,
        groupId: E
      } = (a = e.context) != null ? a : {};
      for (let L = h.length; L--; ) {
        const _ = (L + u) % h.length;
        if (_ !== u && _ >= f && _ <= g && h[_].loadError === 0) {
          var o, l;
          const I = h[_];
          if (c === D.FRAG_GAP && m === Y.MAIN && e.frag) {
            const P = h[_].details;
            if (P) {
              const b = As(e.frag, P.fragments, e.frag.start);
              if (b != null && b.gap)
                continue;
            }
          } else {
            if (C === J.AUDIO_TRACK && I.hasAudioGroup(E) || C === J.SUBTITLE_TRACK && I.hasSubtitleGroup(E))
              continue;
            if (m === Y.AUDIO && (o = i.audioGroups) != null && o.some((P) => I.hasAudioGroup(P)) || m === Y.SUBTITLE && (l = i.subtitleGroups) != null && l.some((P) => I.hasSubtitleGroup(P)) || x && i.audioCodec === I.audioCodec || !x && i.audioCodec !== I.audioCodec || T && i.codecSet === I.codecSet)
              continue;
          }
          d = _;
          break;
        }
      }
      if (d > -1 && s.loadLevel !== d)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: Ee.SendAlternateToPenaltyBox,
          flags: Oe.None,
          nextAutoLevel: d
        };
    }
    return {
      action: Ee.SendAlternateToPenaltyBox,
      flags: Oe.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var s;
    switch ((s = t.errorAction) == null ? void 0 : s.action) {
      case Ee.DoNothing:
        break;
      case Ee.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== D.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, s = e.errorAction;
    if (!s)
      return;
    const {
      flags: i,
      hdcpLevel: r,
      nextAutoLevel: a
    } = s;
    switch (i) {
      case Oe.None:
        this.switchLevel(e, a);
        break;
      case Oe.MoveAllAlternatesMatchingHDCP:
        r && (t.maxHdcpLevel = gi[gi.indexOf(r) - 1], s.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
        break;
    }
    s.resolved || this.switchLevel(e, a);
  }
  switchLevel(e, t) {
    t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
  }
}
class Bi {
  constructor(e, t) {
    this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = A.log.bind(A, `${t}:`), this.warn = A.warn.bind(A, `${t}:`), this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t, s) {
    const i = t == null ? void 0 : t.renditionReports;
    if (i) {
      let r = -1;
      for (let a = 0; a < i.length; a++) {
        const o = i[a];
        let l;
        try {
          l = new self.URL(o.URI, t.url).href;
        } catch (c) {
          A.warn(`Could not construct new URL for Rendition Report: ${c}`), l = o.URI || "";
        }
        if (l === e) {
          r = a;
          break;
        } else l === e.substring(0, l.length) && (r = a);
      }
      if (r !== -1) {
        const a = i[r], o = parseInt(a["LAST-MSN"]) || (t == null ? void 0 : t.lastPartSn);
        let l = parseInt(a["LAST-PART"]) || (t == null ? void 0 : t.lastPartIndex);
        if (this.hls.config.lowLatencyMode) {
          const d = Math.min(t.age - t.partTarget, t.targetduration);
          l >= 0 && d > t.partTarget && (l += 1);
        }
        const c = s && Pn(s);
        return new On(o, l >= 0 ? l : void 0, c);
      }
    }
  }
  loadPlaylist(e) {
    this.requestScheduled === -1 && (this.requestScheduled = self.performance.now());
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  shouldReloadPlaylist(e) {
    return this.timer === -1 && this.requestScheduled === -1 && this.shouldLoadPlaylist(e);
  }
  playlistLoaded(e, t, s) {
    const {
      details: i,
      stats: r
    } = t, a = self.performance.now(), o = r.loading.first ? Math.max(0, a - r.loading.first) : 0;
    if (i.advancedDateTime = Date.now() - o, i.live || s != null && s.live) {
      if (i.reloaded(s), s && this.log(`live playlist ${e} ${i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : i.updated ? "UPDATED" : "MISSED"}`), s && i.fragments.length > 0 && cc(s, i), !this.canLoad || !i.live)
        return;
      let l, c, d;
      if (i.canBlockReload && i.endSN && i.advanced) {
        const p = this.hls.config.lowLatencyMode, x = i.lastPartSn, S = i.endSN, T = i.lastPartIndex, C = T !== -1, E = x === S, L = p ? 0 : T;
        C ? (c = E ? S + 1 : x, d = E ? L : T + 1) : c = S + 1;
        const _ = i.age, I = _ + i.ageHeader;
        let P = Math.min(I - i.partTarget, i.targetduration * 1.5);
        if (P > 0) {
          if (s && P > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${P} with playlist age: ${i.age}`), P = 0;
          else {
            const b = Math.floor(P / i.targetduration);
            if (c += b, d !== void 0) {
              const w = Math.round(P % i.targetduration / i.partTarget);
              d += w;
            }
            this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${_.toFixed(2)}s goal: ${P} skip sn ${b} to part ${d}`);
          }
          i.tuneInGoal = P;
        }
        if (l = this.getDeliveryDirectives(i, t.deliveryDirectives, c, d), p || !E) {
          this.loadPlaylist(l);
          return;
        }
      } else (i.canBlockReload || i.canSkipUntil) && (l = this.getDeliveryDirectives(i, t.deliveryDirectives, c, d));
      const h = this.hls.mainForwardBufferInfo, u = h ? h.end - h.len : 0, f = (i.edge - u) * 1e3, g = fc(i, f);
      i.updated && a > this.requestScheduled + g && (this.requestScheduled = r.loading.start), c !== void 0 && i.canBlockReload ? this.requestScheduled = r.loading.first + g - (i.partTarget * 1e3 || 1e3) : this.requestScheduled === -1 || this.requestScheduled + g < a ? this.requestScheduled = a : this.requestScheduled - a <= 0 && (this.requestScheduled += g);
      let m = this.requestScheduled - a;
      m = Math.max(0, m), this.log(`reload live playlist ${e} in ${Math.round(m)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(l), m);
    } else
      this.clearTimer();
  }
  getDeliveryDirectives(e, t, s, i) {
    let r = Pn(e);
    return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, i = t.part, r = os.No), new On(s, i, r);
  }
  checkRetry(e) {
    const t = e.details, s = vs(e), i = e.errorAction, {
      action: r,
      retryCount: a = 0,
      retryConfig: o
    } = i || {}, l = !!i && !!o && (r === Ee.RetryRequest || !i.resolved && r === Ee.SendAlternateToPenaltyBox);
    if (l) {
      var c;
      if (this.requestScheduled = -1, a >= o.maxNumRetry)
        return !1;
      if (s && (c = e.context) != null && c.deliveryDirectives)
        this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const d = Ui(o, a);
        this.timer = self.setTimeout(() => this.loadPlaylist(), d), this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" in ${d}ms`);
      }
      e.levelRetry = !0, i.resolved = !0;
    }
    return l;
  }
}
class yt {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, s = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = s;
  }
  sample(e, t) {
    const s = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - s) + s * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class vc {
  constructor(e, t, s, i = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new yt(e), this.fast_ = new yt(t), this.defaultTTFB_ = i, this.ttfb_ = new yt(e);
  }
  update(e, t) {
    const {
      slow_: s,
      fast_: i,
      ttfb_: r
    } = this;
    s.halfLife !== e && (this.slow_ = new yt(e, s.getEstimate(), s.getTotalWeight())), i.halfLife !== t && (this.fast_ = new yt(t, i.getEstimate(), i.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new yt(e, r.getEstimate(), r.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const s = 8 * t, i = e / 1e3, r = s / i;
    this.fast_.sample(i, r), this.slow_.sample(i, r);
  }
  sampleTTFB(e) {
    const t = e / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(s, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  destroy() {
  }
}
const pa = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [{
    supported: !0,
    powerEfficient: !0,
    smooth: !0
  }]
}, Bn = {};
function Sc(n, e, t, s, i, r) {
  const a = n.audioCodec ? n.audioGroups : null, o = r == null ? void 0 : r.audioCodec, l = r == null ? void 0 : r.channels, c = l ? parseInt(l) : o ? 1 / 0 : 2;
  let d = null;
  if (a != null && a.length)
    try {
      a.length === 1 && a[0] ? d = e.groups[a[0]].channels : d = a.reduce((h, u) => {
        if (u) {
          const f = e.groups[u];
          if (!f)
            throw new Error(`Audio track group ${u} not found`);
          Object.keys(f.channels).forEach((g) => {
            h[g] = (h[g] || 0) + f.channels[g];
          });
        }
        return h;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return n.videoCodec !== void 0 && (n.width > 1920 && n.height > 1088 || n.height > 1920 && n.width > 1088 || n.frameRate > Math.max(s, 30) || n.videoRange !== "SDR" && n.videoRange !== t || n.bitrate > Math.max(i, 8e6)) || !!d && $(c) && Object.keys(d).some((h) => parseInt(h) > c);
}
function Ac(n, e, t) {
  const s = n.videoCodec, i = n.audioCodec;
  if (!s || !i || !t)
    return Promise.resolve(pa);
  const r = {
    width: n.width,
    height: n.height,
    bitrate: Math.ceil(Math.max(n.bitrate * 0.9, n.averageBitrate)),
    // Assume a framerate of 30fps since MediaCapabilities will not accept Level default of 0.
    framerate: n.frameRate || 30
  }, a = n.videoRange;
  a !== "SDR" && (r.transferFunction = a.toLowerCase());
  const o = s.split(",").map((l) => ({
    type: "media-source",
    video: ye(ye({}, r), {}, {
      contentType: Ht(l, "video")
    })
  }));
  return i && n.audioGroups && n.audioGroups.forEach((l) => {
    var c;
    l && ((c = e.groups[l]) == null || c.tracks.forEach((d) => {
      if (d.groupId === l) {
        const h = d.channels || "", u = parseFloat(h);
        $(u) && u > 2 && o.push.apply(o, i.split(",").map((f) => ({
          type: "media-source",
          audio: {
            contentType: Ht(f, "audio"),
            channels: "" + u
            // spatialRendering:
            //   audioCodec === 'ec-3' && channels.indexOf('JOC'),
          }
        })));
      }
    }));
  }), Promise.all(o.map((l) => {
    const c = Lc(l);
    return Bn[c] || (Bn[c] = t.decodingInfo(l));
  })).then((l) => ({
    supported: !l.some((c) => !c.supported),
    configurations: o,
    decodingInfoResults: l
  })).catch((l) => ({
    supported: !1,
    configurations: o,
    decodingInfoResults: [],
    error: l
  }));
}
function Lc(n) {
  const {
    audio: e,
    video: t
  } = n, s = t || e;
  if (s) {
    const i = s.contentType.split('"')[1];
    if (t)
      return `r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction || "sd"}_${i}_${Math.ceil(t.bitrate / 1e5)}`;
    if (e)
      return `c${e.channels}${e.spatialRendering ? "s" : "n"}_${i}`;
  }
  return "";
}
function Cc() {
  if (typeof matchMedia == "function") {
    const n = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (n.media !== e.media)
      return n.matches === !0;
  }
  return !1;
}
function Rc(n, e) {
  let t = !1, s = [];
  return n && (t = n !== "SDR", s = [n]), e && (s = e.allowedVideoRanges || Ts.slice(0), t = e.preferHDR !== void 0 ? e.preferHDR : Cc(), t ? s = s.filter((i) => i !== "SDR") : s = ["SDR"]), {
    preferHDR: t,
    allowedVideoRanges: s
  };
}
function _c(n, e, t, s, i) {
  const r = Object.keys(n), a = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, l = a && parseInt(a) === 2;
  let c = !0, d = !1, h = 1 / 0, u = 1 / 0, f = 1 / 0, g = 0, m = [];
  const {
    preferHDR: p,
    allowedVideoRanges: x
  } = Rc(e, i);
  for (let E = r.length; E--; ) {
    const L = n[r[E]];
    c = L.channels[2] > 0, h = Math.min(h, L.minHeight), u = Math.min(u, L.minFramerate), f = Math.min(f, L.minBitrate);
    const _ = x.filter((I) => L.videoRanges[I] > 0);
    _.length > 0 && (d = !0, m = _);
  }
  h = $(h) ? h : 0, u = $(u) ? u : 0;
  const S = Math.max(1080, h), T = Math.max(30, u);
  return f = $(f) ? f : t, t = Math.max(f, t), d || (e = void 0, m = []), {
    codecSet: r.reduce((E, L) => {
      const _ = n[L];
      if (L === E)
        return E;
      if (_.minBitrate > t)
        return Ze(L, `min bitrate of ${_.minBitrate} > current estimate of ${t}`), E;
      if (!_.hasDefaultAudio)
        return Ze(L, "no renditions with default or auto-select sound found"), E;
      if (o && L.indexOf(o.substring(0, 4)) % 5 !== 0)
        return Ze(L, `audio codec preference "${o}" not found`), E;
      if (a && !l) {
        if (!_.channels[a])
          return Ze(L, `no renditions with ${a} channel sound found (channels options: ${Object.keys(_.channels)})`), E;
      } else if ((!o || l) && c && _.channels[2] === 0)
        return Ze(L, "no renditions with stereo sound found"), E;
      return _.minHeight > S ? (Ze(L, `min resolution of ${_.minHeight} > maximum of ${S}`), E) : _.minFramerate > T ? (Ze(L, `min framerate of ${_.minFramerate} > maximum of ${T}`), E) : m.some((I) => _.videoRanges[I] > 0) ? _.maxScore < g ? (Ze(L, `max score of ${_.maxScore} < selected max of ${g}`), E) : E && (xs(L) >= xs(E) || _.fragmentError > n[E].fragmentError) ? E : (g = _.maxScore, L) : (Ze(L, `no variants with VIDEO-RANGE of ${JSON.stringify(m)} found`), E);
    }, void 0),
    videoRanges: m,
    preferHDR: p,
    minFramerate: u,
    minBitrate: f
  };
}
function Ze(n, e) {
  A.log(`[abr] start candidates with "${n}" ignored because ${e}`);
}
function bc(n) {
  return n.reduce((e, t) => {
    let s = e.groups[t.groupId];
    s || (s = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), s.tracks.push(t);
    const i = t.channels || "2";
    return s.channels[i] = (s.channels[i] || 0) + 1, s.hasDefault = s.hasDefault || t.default, s.hasAutoSelect = s.hasAutoSelect || t.autoselect, s.hasDefault && (e.hasDefaultAudio = !0), s.hasAutoSelect && (e.hasAutoSelectAudio = !0), e;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function Ic(n, e, t, s) {
  return n.slice(t, s + 1).reduce((i, r) => {
    if (!r.codecSet)
      return i;
    const a = r.audioGroups;
    let o = i[r.codecSet];
    o || (i[r.codecSet] = o = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !a,
      fragmentError: 0
    }), o.minBitrate = Math.min(o.minBitrate, r.bitrate);
    const l = Math.min(r.height, r.width);
    return o.minHeight = Math.min(o.minHeight, l), o.minFramerate = Math.min(o.minFramerate, r.frameRate), o.maxScore = Math.max(o.maxScore, r.score), o.fragmentError += r.fragmentError, o.videoRanges[r.videoRange] = (o.videoRanges[r.videoRange] || 0) + 1, a && a.forEach((c) => {
      if (!c)
        return;
      const d = e.groups[c];
      d && (o.hasDefaultAudio = o.hasDefaultAudio || e.hasDefaultAudio ? d.hasDefault : d.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(d.channels).forEach((h) => {
        o.channels[h] = (o.channels[h] || 0) + d.channels[h];
      }));
    }), i;
  }, {});
}
function We(n, e, t) {
  if ("attrs" in n) {
    const s = e.indexOf(n);
    if (s !== -1)
      return s;
  }
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (Lt(n, i, t))
      return s;
  }
  return -1;
}
function Lt(n, e, t) {
  const {
    groupId: s,
    name: i,
    lang: r,
    assocLang: a,
    characteristics: o,
    default: l
  } = n, c = n.forced;
  return (s === void 0 || e.groupId === s) && (i === void 0 || e.name === i) && (r === void 0 || e.lang === r) && (r === void 0 || e.assocLang === a) && (l === void 0 || e.default === l) && (c === void 0 || e.forced === c) && (o === void 0 || Dc(o, e.characteristics)) && (t === void 0 || t(n, e));
}
function Dc(n, e = "") {
  const t = n.split(","), s = e.split(",");
  return t.length === s.length && !t.some((i) => s.indexOf(i) === -1);
}
function xt(n, e) {
  const {
    audioCodec: t,
    channels: s
  } = n;
  return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (s === void 0 || s === (e.channels || "2"));
}
function wc(n, e, t, s, i) {
  const r = e[s], o = e.reduce((u, f, g) => {
    const m = f.uri;
    return (u[m] || (u[m] = [])).push(g), u;
  }, {})[r.uri];
  o.length > 1 && (s = Math.max.apply(Math, o));
  const l = r.videoRange, c = r.frameRate, d = r.codecSet.substring(0, 4), h = $n(e, s, (u) => {
    if (u.videoRange !== l || u.frameRate !== c || u.codecSet.substring(0, 4) !== d)
      return !1;
    const f = u.audioGroups, g = t.filter((m) => !f || f.indexOf(m.groupId) !== -1);
    return We(n, g, i) > -1;
  });
  return h > -1 ? h : $n(e, s, (u) => {
    const f = u.audioGroups, g = t.filter((m) => !f || f.indexOf(m.groupId) !== -1);
    return We(n, g, i) > -1;
  });
}
function $n(n, e, t) {
  for (let s = e; s > -1; s--)
    if (t(n[s]))
      return s;
  for (let s = e + 1; s < n.length; s++)
    if (t(n[s]))
      return s;
  return -1;
}
class kc {
  constructor(e) {
    this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = () => {
      const {
        fragCurrent: t,
        partCurrent: s,
        hls: i
      } = this, {
        autoLevelEnabled: r,
        media: a
      } = i;
      if (!t || !a)
        return;
      const o = performance.now(), l = s ? s.stats : t.stats, c = s ? s.duration : t.duration, d = o - l.loading.start, h = i.minAutoLevel;
      if (l.aborted || l.loaded && l.loaded === l.total || t.level <= h) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!r || a.paused || !a.playbackRate || !a.readyState)
        return;
      const u = i.mainForwardBufferInfo;
      if (u === null)
        return;
      const f = this.bwEstimator.getEstimateTTFB(), g = Math.abs(a.playbackRate);
      if (d <= Math.max(f, 1e3 * (c / (g * 2))))
        return;
      const m = u.len / g, p = l.loading.first ? l.loading.first - l.loading.start : -1, x = l.loaded && p > -1, S = this.getBwEstimate(), T = i.levels, C = T[t.level], E = l.total || Math.max(l.loaded, Math.round(c * C.averageBitrate / 8));
      let L = x ? d - p : d;
      L < 1 && x && (L = Math.min(d, l.loaded * 8 / S));
      const _ = x ? l.loaded * 1e3 / L : 0, I = _ ? (E - l.loaded) / _ : E * 8 / S + f / 1e3;
      if (I <= m)
        return;
      const P = _ ? _ * 8 : S;
      let b = Number.POSITIVE_INFINITY, w;
      for (w = t.level - 1; w > h; w--) {
        const O = T[w].maxBitrate;
        if (b = this.getTimeToLoadFrag(f / 1e3, P, c * O, !T[w].details), b < m)
          break;
      }
      if (b >= I || b > c * 10)
        return;
      i.nextLoadLevel = i.nextAutoLevel = w, x ? this.bwEstimator.sample(d - Math.min(f, p), l.loaded) : this.bwEstimator.sampleTTFB(d);
      const G = T[w].maxBitrate;
      this.getBwEstimate() * this.hls.config.abrBandWidthUpFactor > G && this.resetEstimator(G), this.clearTimer(), A.warn(`[abr] Fragment ${t.sn}${s ? " part " + s.index : ""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${m.toFixed(3)} s
      Estimated load time for current fragment: ${I.toFixed(3)} s
      Estimated load time for down switch fragment: ${b.toFixed(3)} s
      TTFB estimate: ${p | 0} ms
      Current BW estimate: ${$(S) ? S | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${w} @ ${G | 0} bps`), i.trigger(y.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: t,
        part: s,
        stats: l
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (A.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new vc(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.FRAG_LOADING, this.onFragLoading, this), e.on(y.FRAG_LOADED, this.onFragLoaded, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.FRAG_LOADING, this.onFragLoading, this), e.off(y.FRAG_LOADED, this.onFragLoaded, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(y.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const s = t.frag;
    if (!this.ignoreFragment(s)) {
      if (!s.bitrateTest) {
        var i;
        this.fragCurrent = s, this.partCurrent = (i = t.part) != null ? i : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case D.BUFFER_ADD_CODEC_ERROR:
        case D.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case D.FRAG_LOAD_TIMEOUT: {
          const s = t.frag, {
            fragCurrent: i,
            partCurrent: r
          } = this;
          if (s && i && s.sn === i.sn && s.level === i.level) {
            const a = performance.now(), o = r ? r.stats : s.stats, l = a - o.loading.start, c = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && c > -1) {
              const h = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(l - Math.min(h, c), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(l);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, s, i) {
    const r = e + s / t, a = i ? this.lastLevelLoadSec : 0;
    return r + a;
  }
  onLevelLoaded(e, t) {
    const s = this.hls.config, {
      loading: i
    } = t.stats, r = i.end - i.start;
    $(r) && (this.lastLevelLoadSec = r / 1e3), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD);
  }
  onFragLoaded(e, {
    frag: t,
    part: s
  }) {
    const i = s ? s.stats : t.stats;
    if (t.type === Y.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const r = s ? s.duration : t.duration, a = this.hls.levels[t.level], o = (a.loaded ? a.loaded.bytes : 0) + i.loaded, l = (a.loaded ? a.loaded.duration : 0) + r;
        a.loaded = {
          bytes: o,
          duration: l
        }, a.realBitrate = Math.round(8 * o / l);
      }
      if (t.bitrateTest) {
        const r = {
          stats: i,
          frag: t,
          part: s,
          id: t.type
        };
        this.onFragBuffered(y.FRAG_BUFFERED, r), t.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = i != null && i.stats.loaded ? i.stats : s.stats;
    if (r.aborted || this.ignoreFragment(s))
      return;
    const a = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(a, r.loaded), r.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== Y.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, s = this.getBwEstimate(), i = this.hls.config.maxStarvationDelay, r = this.findBestLevel(s, t, e, 0, i, 1, 1);
    if (r > -1)
      return r;
    const a = this.hls.firstLevel, o = Math.min(Math.max(a, t), e);
    return A.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, s = this.bwEstimator.canEstimate(), i = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!s || !i || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const r = s && i ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const a = this.hls.levels;
      if (a.length > Math.max(e, r) && a[e].loadError <= a[r].loadError)
        return e;
    }
    return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this, {
      maxAutoLevel: i,
      config: r,
      minAutoLevel: a
    } = s, o = t ? t.duration : e ? e.duration : 0, l = this.getBwEstimate(), c = this.getStarvationDelay();
    let d = r.abrBandWidthFactor, h = r.abrBandWidthUpFactor;
    if (c) {
      const p = this.findBestLevel(l, a, i, c, 0, d, h);
      if (p >= 0)
        return p;
    }
    let u = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay;
    if (!c) {
      const p = this.bitrateTestDelay;
      p && (u = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - p, A.info(`[abr] bitrate test took ${Math.round(1e3 * p)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * u)} ms`), d = h = 1);
    }
    const f = this.findBestLevel(l, a, i, c, u, d, h);
    if (A.info(`[abr] ${c ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f}`), f > -1)
      return f;
    const g = s.levels[a], m = s.levels[s.loadLevel];
    return (g == null ? void 0 : g.bitrate) < (m == null ? void 0 : m.bitrate) ? a : s.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const s = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, i = e.mainForwardBufferInfo;
    return (i ? i.len : 0) / s;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, s, i, r, a, o) {
    var l;
    const c = i + r, d = this.lastLoadedFragLevel, h = d === -1 ? this.hls.firstLevel : d, {
      fragCurrent: u,
      partCurrent: f
    } = this, {
      levels: g,
      allAudioTracks: m,
      loadLevel: p,
      config: x
    } = this.hls;
    if (g.length === 1)
      return 0;
    const S = g[h], T = !!(S != null && (l = S.details) != null && l.live), C = p === -1 || d === -1;
    let E, L = "SDR", _ = (S == null ? void 0 : S.frameRate) || 0;
    const {
      audioPreference: I,
      videoPreference: P
    } = x, b = this.audioTracksByGroup || (this.audioTracksByGroup = bc(m));
    if (C) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const U = this.codecTiers || (this.codecTiers = Ic(g, b, t, s)), N = _c(U, L, e, I, P), {
        codecSet: H,
        videoRanges: V,
        minFramerate: M,
        minBitrate: B,
        preferHDR: X
      } = N;
      E = H, L = X ? V[V.length - 1] : V[0], _ = M, e = Math.max(e, B), A.log(`[abr] picked start tier ${JSON.stringify(N)}`);
    } else
      E = S == null ? void 0 : S.codecSet, L = S == null ? void 0 : S.videoRange;
    const w = f ? f.duration : u ? u.duration : 0, G = this.bwEstimator.getEstimateTTFB() / 1e3, O = [];
    for (let U = s; U >= t; U--) {
      var F;
      const N = g[U], H = U > h;
      if (!N)
        continue;
      if (x.useMediaCapabilities && !N.supportedResult && !N.supportedPromise) {
        const se = navigator.mediaCapabilities;
        typeof (se == null ? void 0 : se.decodingInfo) == "function" && Sc(N, b, L, _, e, I) ? (N.supportedPromise = Ac(N, b, se), N.supportedPromise.then((le) => {
          if (!this.hls)
            return;
          N.supportedResult = le;
          const de = this.hls.levels, Ae = de.indexOf(N);
          le.error ? A.warn(`[abr] MediaCapabilities decodingInfo error: "${le.error}" for level ${Ae} ${JSON.stringify(le)}`) : le.supported || (A.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${Ae} ${JSON.stringify(le)}`), Ae > -1 && de.length > 1 && (A.log(`[abr] Removing unsupported level ${Ae}`), this.hls.removeLevel(Ae)));
        })) : N.supportedResult = pa;
      }
      if (E && N.codecSet !== E || L && N.videoRange !== L || H && _ > N.frameRate || !H && _ > 0 && _ < N.frameRate || N.supportedResult && !((F = N.supportedResult.decodingInfoResults) != null && F[0].smooth)) {
        O.push(U);
        continue;
      }
      const V = N.details, M = (f ? V == null ? void 0 : V.partTarget : V == null ? void 0 : V.averagetargetduration) || w;
      let B;
      H ? B = o * e : B = a * e;
      const X = w && i >= w * 2 && r === 0 ? g[U].averageBitrate : g[U].maxBitrate, j = this.getTimeToLoadFrag(G, B, X * M, V === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        B >= X && // no level change, or new level has no error history
        (U === d || N.loadError === 0 && N.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (j <= G || !$(j) || T && !this.bitrateTestDelay || j < c)
      ) {
        const se = this.forcedAutoLevel;
        return U !== p && (se === -1 || se !== p) && (O.length && A.trace(`[abr] Skipped level(s) ${O.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${g[O[0]].codecs}" ${g[O[0]].videoRange}; not compatible with "${S.codecs}" ${L}`), A.info(`[abr] switch candidate:${h}->${U} adjustedbw(${Math.round(B)})-bitrate=${Math.round(B - X)} ttfb:${G.toFixed(1)} avgDuration:${M.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${j.toFixed(1)} firstSelection:${C} codecSet:${E} videoRange:${L} hls.loadLevel:${p}`)), C && (this.firstSelection = U), U;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: s
    } = this.hls, i = Math.min(Math.max(e, s), t);
    this._nextAutoLevel !== i && (this.nextAutoLevelKey = "", this._nextAutoLevel = i);
  }
}
class Pc {
  constructor() {
    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
var pe = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class Oc {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.BUFFER_APPENDED, this.onBufferAppended, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e.on(y.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.BUFFER_APPENDED, this.onBufferAppended, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e.off(y.FRAG_LOADED, this.onFragLoaded, this);
  }
  destroy() {
    this._unregisterListeners(), this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const s = this.activePartLists[t];
    if (s)
      for (let i = s.length; i--; ) {
        const r = s[i];
        if (!r)
          break;
        const a = r.end;
        if (r.start <= e && a !== null && e <= a)
          return r;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    const {
      fragments: s
    } = this, i = Object.keys(s);
    for (let r = i.length; r--; ) {
      const a = s[i[r]];
      if ((a == null ? void 0 : a.body.type) === t && a.buffered) {
        const o = a.body;
        if (o.start <= e && e <= o.end)
          return o;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, s, i) {
    this.timeRanges && (this.timeRanges[e] = t);
    const r = (i == null ? void 0 : i.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o || r >= o.body.sn)
        return;
      if (!o.buffered && !o.loaded) {
        o.body.type === s && this.removeFragment(o.body);
        return;
      }
      const l = o.range[e];
      l && l.time.some((c) => {
        const d = !this.isTimeBuffered(c.startPTS, c.endPTS, t);
        return d && this.removeFragment(o.body), d;
      });
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges, {
      frag: s,
      part: i
    } = e;
    if (!t || s.sn === "initSegment")
      return;
    const r = Et(s), a = this.fragments[r];
    if (!a || a.buffered && s.gap)
      return;
    const o = !s.relurl;
    Object.keys(t).forEach((l) => {
      const c = s.elementaryStreams[l];
      if (!c)
        return;
      const d = t[l], h = o || c.partial === !0;
      a.range[l] = this.getBufferedTimes(s, i, h, d);
    }), a.loaded = null, Object.keys(a.range).length ? (a.buffered = !0, (a.body.endList = s.endList || a.body.endList) && (this.endListFragments[a.body.type] = a), zt(a) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(a.body);
  }
  removeParts(e, t) {
    const s = this.activePartLists[t];
    s && (this.activePartLists[t] = s.filter((i) => i.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const s = Et(e);
    let i = this.fragments[s];
    !i && t && (i = this.fragments[s] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0);
  }
  getBufferedTimes(e, t, s, i) {
    const r = {
      time: [],
      partial: s
    }, a = e.start, o = e.end, l = e.minEndPTS || o, c = e.maxStartPTS || a;
    for (let d = 0; d < i.length; d++) {
      const h = i.start(d) - this.bufferPadding, u = i.end(d) + this.bufferPadding;
      if (c >= h && l <= u) {
        r.time.push({
          startPTS: Math.max(a, i.start(d)),
          endPTS: Math.min(o, i.end(d))
        });
        break;
      } else if (a < u && o > h) {
        const f = Math.max(a, i.start(d)), g = Math.min(o, i.end(d));
        g > f && (r.partial = !0, r.time.push({
          startPTS: f,
          endPTS: g
        }));
      } else if (o <= h)
        break;
    }
    return r;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, s, i, r, a = 0;
    const {
      bufferPadding: o,
      fragments: l
    } = this;
    return Object.keys(l).forEach((c) => {
      const d = l[c];
      d && zt(d) && (i = d.body.start - o, r = d.body.end + o, e >= i && e <= r && (s = Math.min(e - i, r - e), a <= s && (t = d.body, a = s)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || zt(t));
  }
  getState(e) {
    const t = Et(e), s = this.fragments[t];
    return s ? s.buffered ? zt(s) ? pe.PARTIAL : pe.OK : pe.APPENDING : pe.NOT_LOADED;
  }
  isTimeBuffered(e, t, s) {
    let i, r;
    for (let a = 0; a < s.length; a++) {
      if (i = s.start(a) - this.bufferPadding, r = s.end(a) + this.bufferPadding, e >= i && t <= r)
        return !0;
      if (t <= i)
        return !1;
    }
    return !1;
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.sn === "initSegment" || s.bitrateTest)
      return;
    const r = i ? null : t, a = Et(s);
    this.fragments[a] = {
      body: s,
      appendedPTS: null,
      loaded: r,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: s,
      part: i,
      timeRanges: r
    } = t;
    if (s.sn === "initSegment")
      return;
    const a = s.type;
    if (i) {
      let o = this.activePartLists[a];
      o || (this.activePartLists[a] = o = []), o.push(i);
    }
    this.timeRanges = r, Object.keys(r).forEach((o) => {
      const l = r[o];
      this.detectEvictedFragments(o, l, a, i);
    });
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = Et(e);
    return !!this.fragments[t];
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, s, i, r) {
    i && !this.hasGaps || Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o)
        return;
      const l = o.body;
      l.type !== s || i && !l.gap || l.start < t && l.end > e && (o.buffered || r) && this.removeFragment(l);
    });
  }
  removeFragment(e) {
    const t = Et(e);
    e.stats.loaded = 0, e.clearElementaryStreamInfo();
    const s = this.activePartLists[e.type];
    if (s) {
      const i = e.sn;
      this.activePartLists[e.type] = s.filter((r) => r.fragment.sn !== i);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
  }
}
function zt(n) {
  var e, t, s;
  return n.buffered && (n.body.gap || ((e = n.range.video) == null ? void 0 : e.partial) || ((t = n.range.audio) == null ? void 0 : t.partial) || ((s = n.range.audiovideo) == null ? void 0 : s.partial));
}
function Et(n) {
  return `${n.type}_${n.level}_${n.sn}`;
}
const Fc = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class ie {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    try {
      if (e) {
        const s = ie.getBuffered(e);
        for (let i = 0; i < s.length; i++)
          if (t >= s.start(i) && t <= s.end(i))
            return !0;
      }
    } catch {
    }
    return !1;
  }
  static bufferInfo(e, t, s) {
    try {
      if (e) {
        const i = ie.getBuffered(e), r = [];
        let a;
        for (a = 0; a < i.length; a++)
          r.push({
            start: i.start(a),
            end: i.end(a)
          });
        return this.bufferedInfo(r, t, s);
      }
    } catch {
    }
    return {
      len: 0,
      start: t,
      end: t,
      nextStart: void 0
    };
  }
  static bufferedInfo(e, t, s) {
    t = Math.max(0, t), e.sort(function(c, d) {
      const h = c.start - d.start;
      return h || d.end - c.end;
    });
    let i = [];
    if (s)
      for (let c = 0; c < e.length; c++) {
        const d = i.length;
        if (d) {
          const h = i[d - 1].end;
          e[c].start - h < s ? e[c].end > h && (i[d - 1].end = e[c].end) : i.push(e[c]);
        } else
          i.push(e[c]);
      }
    else
      i = e;
    let r = 0, a, o = t, l = t;
    for (let c = 0; c < i.length; c++) {
      const d = i[c].start, h = i[c].end;
      if (t + s >= d && t < h)
        o = d, l = h, r = l - t;
      else if (t + s < d) {
        a = d;
        break;
      }
    }
    return {
      len: r,
      start: o || 0,
      end: l || 0,
      nextStart: a
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered;
    } catch (t) {
      return A.log("failed to get media.buffered", t), Fc;
    }
  }
}
class $i {
  constructor(e, t, s, i = 0, r = -1, a = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Xt(), this.buffering = {
      audio: Xt(),
      video: Xt(),
      audiovideo: Xt()
    }, this.level = e, this.sn = t, this.id = s, this.size = i, this.part = r, this.partial = a;
  }
}
function Xt() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
function ls(n, e) {
  for (let s = 0, i = n.length; s < i; s++) {
    var t;
    if (((t = n[s]) == null ? void 0 : t.cc) === e)
      return n[s];
  }
  return null;
}
function Mc(n, e, t) {
  return !!(e && (t.endCC > t.startCC || n && n.cc < t.startCC));
}
function Nc(n, e) {
  const t = n.fragments, s = e.fragments;
  if (!s.length || !t.length) {
    A.log("No fragments to align");
    return;
  }
  const i = ls(t, s[0].cc);
  if (!i || i && !i.startPTS) {
    A.log("No frag in previous level to align on");
    return;
  }
  return i;
}
function Gn(n, e) {
  if (n) {
    const t = n.start + e;
    n.start = n.startPTS = t, n.endPTS = t + n.duration;
  }
}
function ya(n, e) {
  const t = e.fragments;
  for (let s = 0, i = t.length; s < i; s++)
    Gn(t[s], n);
  e.fragmentHint && Gn(e.fragmentHint, n), e.alignedSliding = !0;
}
function Uc(n, e, t) {
  e && (Bc(n, t, e), !t.alignedSliding && e && Ls(t, e), !t.alignedSliding && e && !t.skippedSegments && ua(e, t));
}
function Bc(n, e, t) {
  if (Mc(n, t, e)) {
    const s = Nc(t, e);
    s && $(s.start) && (A.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`), ya(s.start, e));
  }
}
function Ls(n, e) {
  if (!n.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = n.fragments, s = e.fragments;
  if (!t.length || !s.length)
    return;
  let i, r;
  const a = Math.min(e.endCC, n.endCC);
  e.startCC < a && n.startCC < a && (i = ls(s, a), r = ls(t, a)), (!i || !r) && (i = s[Math.floor(s.length / 2)], r = ls(t, i.cc) || t[Math.floor(t.length / 2)]);
  const o = i.programDateTime, l = r.programDateTime;
  if (!o || !l)
    return;
  const c = (l - o) / 1e3 - (r.start - i.start);
  ya(c, n);
}
const Vn = Math.pow(2, 17);
class $c {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const s = e.url;
    if (!s)
      return Promise.reject(new Je({
        type: q.NETWORK_ERROR,
        details: D.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const i = this.config, r = i.fLoader, a = i.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((f) => f[0] === "GAP")) {
          l(Kn(e));
          return;
        } else
          e.gap = !1;
      const c = this.loader = e.loader = r ? new r(i) : new a(i), d = Hn(e), h = Un(i.fragLoadPolicy.default), u = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : Vn
      };
      e.stats = c.stats, c.load(d, u, {
        onSuccess: (f, g, m, p) => {
          this.resetLoader(e, c);
          let x = f.data;
          m.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(x.slice(0, 16)), x = x.slice(16)), o({
            frag: e,
            part: null,
            payload: x,
            networkDetails: p
          });
        },
        onError: (f, g, m, p) => {
          this.resetLoader(e, c), l(new Je({
            type: q.NETWORK_ERROR,
            details: D.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: ye({
              url: s,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: m,
            stats: p
          }));
        },
        onAbort: (f, g, m) => {
          this.resetLoader(e, c), l(new Je({
            type: q.NETWORK_ERROR,
            details: D.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: f
          }));
        },
        onTimeout: (f, g, m) => {
          this.resetLoader(e, c), l(new Je({
            type: q.NETWORK_ERROR,
            details: D.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${u.timeout}ms`),
            networkDetails: m,
            stats: f
          }));
        },
        onProgress: (f, g, m, p) => {
          t && t({
            frag: e,
            part: null,
            payload: m,
            networkDetails: p
          });
        }
      });
    });
  }
  loadPart(e, t, s) {
    this.abort();
    const i = this.config, r = i.fLoader, a = i.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        l(Kn(e, t));
        return;
      }
      const c = this.loader = e.loader = r ? new r(i) : new a(i), d = Hn(e, t), h = Un(i.fragLoadPolicy.default), u = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: Vn
      };
      t.stats = c.stats, c.load(d, u, {
        onSuccess: (f, g, m, p) => {
          this.resetLoader(e, c), this.updateStatsFromPart(e, t);
          const x = {
            frag: e,
            part: t,
            payload: f.data,
            networkDetails: p
          };
          s(x), o(x);
        },
        onError: (f, g, m, p) => {
          this.resetLoader(e, c), l(new Je({
            type: q.NETWORK_ERROR,
            details: D.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: ye({
              url: d.url,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: m,
            stats: p
          }));
        },
        onAbort: (f, g, m) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, c), l(new Je({
            type: q.NETWORK_ERROR,
            details: D.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: f
          }));
        },
        onTimeout: (f, g, m) => {
          this.resetLoader(e, c), l(new Je({
            type: q.NETWORK_ERROR,
            details: D.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${u.timeout}ms`),
            networkDetails: m,
            stats: f
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const s = e.stats, i = t.stats, r = i.total;
    if (s.loaded += i.loaded, r) {
      const l = Math.round(e.duration / t.duration), c = Math.min(Math.round(s.loaded / r), l), h = (l - c) * Math.round(s.loaded / c);
      s.total = s.loaded + h;
    } else
      s.total = Math.max(s.loaded, s.total);
    const a = s.loading, o = i.loading;
    a.start ? a.first += o.first - o.start : (a.start = o.start, a.first = o.first), a.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function Hn(n, e = null) {
  const t = e || n, s = {
    frag: n,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, i = t.byteRangeStartOffset, r = t.byteRangeEndOffset;
  if ($(i) && $(r)) {
    var a;
    let o = i, l = r;
    if (n.sn === "initSegment" && ((a = n.decryptdata) == null ? void 0 : a.method) === "AES-128") {
      const c = r - i;
      c % 16 && (l = r + (16 - c % 16)), i !== 0 && (s.resetIV = !0, o = i - 16);
    }
    s.rangeStart = o, s.rangeEnd = l;
  }
  return s;
}
function Kn(n, e) {
  const t = new Error(`GAP ${n.gap ? "tag" : "attribute"} found`), s = {
    type: q.MEDIA_ERROR,
    details: D.FRAG_GAP,
    fatal: !1,
    frag: n,
    error: t,
    networkDetails: null
  };
  return e && (s.part = e), (e || n).stats.aborted = !0, new Je(s);
}
class Je extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class Gc {
  constructor(e, t) {
    this.subtle = void 0, this.aesIV = void 0, this.subtle = e, this.aesIV = t;
  }
  decrypt(e, t) {
    return this.subtle.decrypt({
      name: "AES-CBC",
      iv: this.aesIV
    }, t, e);
  }
}
class Vc {
  constructor(e, t) {
    this.subtle = void 0, this.key = void 0, this.subtle = e, this.key = t;
  }
  expandKey() {
    return this.subtle.importKey("raw", this.key, {
      name: "AES-CBC"
    }, !1, ["encrypt", "decrypt"]);
  }
}
function Hc(n) {
  const e = n.byteLength, t = e && new DataView(n.buffer).getUint8(e - 1);
  return t ? ft(n, 0, e - t) : n;
}
class Kc {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), s = new Uint32Array(4);
    for (let i = 0; i < 4; i++)
      s[i] = t.getUint32(i * 4);
    return s;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, s = this.subMix, i = s[0], r = s[1], a = s[2], o = s[3], l = this.invSubMix, c = l[0], d = l[1], h = l[2], u = l[3], f = new Uint32Array(256);
    let g = 0, m = 0, p = 0;
    for (p = 0; p < 256; p++)
      p < 128 ? f[p] = p << 1 : f[p] = p << 1 ^ 283;
    for (p = 0; p < 256; p++) {
      let x = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
      x = x >>> 8 ^ x & 255 ^ 99, e[g] = x, t[x] = g;
      const S = f[g], T = f[S], C = f[T];
      let E = f[x] * 257 ^ x * 16843008;
      i[g] = E << 24 | E >>> 8, r[g] = E << 16 | E >>> 16, a[g] = E << 8 | E >>> 24, o[g] = E, E = C * 16843009 ^ T * 65537 ^ S * 257 ^ g * 16843008, c[x] = E << 24 | E >>> 8, d[x] = E << 16 | E >>> 16, h[x] = E << 8 | E >>> 24, u[x] = E, g ? (g = S ^ f[f[f[C ^ S]]], m ^= f[f[m]]) : g = m = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let s = !0, i = 0;
    for (; i < t.length && s; )
      s = t[i] === this.key[i], i++;
    if (s)
      return;
    this.key = t;
    const r = this.keySize = t.length;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("Invalid aes key size=" + r);
    const a = this.ksRows = (r + 6 + 1) * 4;
    let o, l;
    const c = this.keySchedule = new Uint32Array(a), d = this.invKeySchedule = new Uint32Array(a), h = this.sBox, u = this.rcon, f = this.invSubMix, g = f[0], m = f[1], p = f[2], x = f[3];
    let S, T;
    for (o = 0; o < a; o++) {
      if (o < r) {
        S = c[o] = t[o];
        continue;
      }
      T = S, o % r === 0 ? (T = T << 8 | T >>> 24, T = h[T >>> 24] << 24 | h[T >>> 16 & 255] << 16 | h[T >>> 8 & 255] << 8 | h[T & 255], T ^= u[o / r | 0] << 24) : r > 6 && o % r === 4 && (T = h[T >>> 24] << 24 | h[T >>> 16 & 255] << 16 | h[T >>> 8 & 255] << 8 | h[T & 255]), c[o] = S = (c[o - r] ^ T) >>> 0;
    }
    for (l = 0; l < a; l++)
      o = a - l, l & 3 ? T = c[o] : T = c[o - 4], l < 4 || o <= 4 ? d[l] = T : d[l] = g[h[T >>> 24]] ^ m[h[T >>> 16 & 255]] ^ p[h[T >>> 8 & 255]] ^ x[h[T & 255]], d[l] = d[l] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, s) {
    const i = this.keySize + 6, r = this.invKeySchedule, a = this.invSBox, o = this.invSubMix, l = o[0], c = o[1], d = o[2], h = o[3], u = this.uint8ArrayToUint32Array_(s);
    let f = u[0], g = u[1], m = u[2], p = u[3];
    const x = new Int32Array(e), S = new Int32Array(x.length);
    let T, C, E, L, _, I, P, b, w, G, O, F, U, N;
    const H = this.networkToHostOrderSwap;
    for (; t < x.length; ) {
      for (w = H(x[t]), G = H(x[t + 1]), O = H(x[t + 2]), F = H(x[t + 3]), _ = w ^ r[0], I = F ^ r[1], P = O ^ r[2], b = G ^ r[3], U = 4, N = 1; N < i; N++)
        T = l[_ >>> 24] ^ c[I >> 16 & 255] ^ d[P >> 8 & 255] ^ h[b & 255] ^ r[U], C = l[I >>> 24] ^ c[P >> 16 & 255] ^ d[b >> 8 & 255] ^ h[_ & 255] ^ r[U + 1], E = l[P >>> 24] ^ c[b >> 16 & 255] ^ d[_ >> 8 & 255] ^ h[I & 255] ^ r[U + 2], L = l[b >>> 24] ^ c[_ >> 16 & 255] ^ d[I >> 8 & 255] ^ h[P & 255] ^ r[U + 3], _ = T, I = C, P = E, b = L, U = U + 4;
      T = a[_ >>> 24] << 24 ^ a[I >> 16 & 255] << 16 ^ a[P >> 8 & 255] << 8 ^ a[b & 255] ^ r[U], C = a[I >>> 24] << 24 ^ a[P >> 16 & 255] << 16 ^ a[b >> 8 & 255] << 8 ^ a[_ & 255] ^ r[U + 1], E = a[P >>> 24] << 24 ^ a[b >> 16 & 255] << 16 ^ a[_ >> 8 & 255] << 8 ^ a[I & 255] ^ r[U + 2], L = a[b >>> 24] << 24 ^ a[_ >> 16 & 255] << 16 ^ a[I >> 8 & 255] << 8 ^ a[P & 255] ^ r[U + 3], S[t] = H(T ^ f), S[t + 1] = H(L ^ g), S[t + 2] = H(E ^ m), S[t + 3] = H(C ^ p), f = w, g = G, m = O, p = F, t = t + 4;
    }
    return S.buffer;
  }
}
const jc = 16;
class Gi {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const s = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? Hc(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, s) {
    return this.useSoftware ? new Promise((i, r) => {
      this.softwareDecrypt(new Uint8Array(e), t, s);
      const a = this.flush();
      a ? i(a.buffer) : r(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, s);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, s) {
    const {
      currentIV: i,
      currentResult: r,
      remainderData: a
    } = this;
    this.logOnce("JS AES decrypt"), a && (e = Pe(a, e), this.remainderData = null);
    const o = this.getValidChunk(e);
    if (!o.length)
      return null;
    i && (s = i);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new Kc()), l.expandKey(t);
    const c = r;
    return this.currentResult = l.decrypt(o.buffer, 0, s), this.currentIV = ft(o, -16).buffer, c || null;
  }
  webCryptoDecrypt(e, t, s) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, s));
      this.key = t, this.fastAesKey = new Vc(this.subtle, t);
    }
    return this.fastAesKey.expandKey().then((i) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new Gc(this.subtle, new Uint8Array(s)).decrypt(e.buffer, i)) : Promise.reject(new Error("web crypto not initialized"))).catch((i) => (A.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`), this.onWebCryptoError(e, t, s)));
  }
  onWebCryptoError(e, t, s) {
    this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s);
    const i = this.flush();
    if (i)
      return i.buffer;
    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const s = e.length - e.length % jc;
    return s !== e.length && (t = ft(e, 0, s), this.remainderData = ft(e, s)), t;
  }
  logOnce(e) {
    this.logEnabled && (A.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const Wc = {
  toString: function(n) {
    let e = "";
    const t = n.length;
    for (let s = 0; s < t; s++)
      e += `[${n.start(s).toFixed(3)}-${n.end(s).toFixed(3)}]`;
    return e;
  }
}, k = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class Vi extends Pc {
  constructor(e, t, s, i, r) {
    super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = k.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = r, this.logPrefix = i, this.log = A.log.bind(A, `${i}:`), this.warn = A.warn.bind(A, `${i}:`), this.hls = e, this.fragmentLoader = new $c(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new Gi(e.config), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startLoad(e) {
  }
  stopLoad() {
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = k.STOPPED;
  }
  _streamEnded(e, t) {
    if (t.live || e.nextStart || !e.end || !this.media)
      return !1;
    const s = t.partList;
    if (s != null && s.length) {
      const r = s[s.length - 1];
      return ie.isBuffered(this.media, r.start + r.duration / 2);
    }
    const i = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(i);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var e;
      return (e = this.levelLastLoaded) == null ? void 0 : e.details;
    }
  }
  onMediaAttached(e, t) {
    const s = this.media = this.mediaBuffer = t.media;
    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), s.addEventListener("seeking", this.onvseeking), s.addEventListener("ended", this.onvended);
    const i = this.config;
    this.levels && i.autoStartLoad && this.state === k.STOPPED && this.startLoad(i.startPosition);
  }
  onMediaDetaching() {
    const e = this.media;
    e != null && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && this.onvseeking && this.onvended && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
  }
  onMediaSeeking() {
    const {
      config: e,
      fragCurrent: t,
      media: s,
      mediaBuffer: i,
      state: r
    } = this, a = s ? s.currentTime : 0, o = ie.bufferInfo(i || s, a, e.maxBufferHole);
    if (this.log(`media seeking to ${$(a) ? a.toFixed(3) : a}, state: ${r}`), this.state === k.ENDED)
      this.resetLoadingState();
    else if (t) {
      const l = e.maxFragLookUpTolerance, c = t.start - l, d = t.start + t.duration + l;
      if (!o.len || d < o.start || c > o.end) {
        const h = a > d;
        (a < c || h) && (h && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
      }
    }
    s && (this.fragmentTracker.removeFragmentsInRange(a, 1 / 0, this.playlistType, !0), this.lastCurrentTime = a), !this.loadedmetadata && !o.len && (this.nextLoadPosition = this.startPosition = a), this.tickImmediate();
  }
  onMediaEnded() {
    this.startPosition = this.lastCurrentTime = 0;
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset, this.initPTS = [];
  }
  onHandlerDestroying() {
    this.hls.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), super.onHandlerDestroying(), this.hls = null;
  }
  onHandlerDestroyed() {
    this.state = k.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, s) {
    this._loadFragForPlayback(e, t, s);
  }
  _loadFragForPlayback(e, t, s) {
    const i = (r) => {
      if (this.fragContextChanged(e)) {
        this.warn(`Fragment ${e.sn}${r.part ? " p: " + r.part.index : ""} of level ${e.level} was dropped during download.`), this.fragmentTracker.removeFragment(e);
        return;
      }
      e.stats.chunkCount++, this._handleFragmentLoadProgress(r);
    };
    this._doFragLoad(e, t, s, i).then((r) => {
      if (!r)
        return;
      const a = this.state;
      if (this.fragContextChanged(e)) {
        (a === k.FRAG_LOADING || !this.fragCurrent && a === k.PARSING) && (this.fragmentTracker.removeFragment(e), this.state = k.IDLE);
        return;
      }
      "payload" in r && (this.log(`Loaded fragment ${e.sn} of level ${e.level}`), this.hls.trigger(y.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r);
    }).catch((r) => {
      this.state === k.STOPPED || this.state === k.ERROR || (this.warn(`Frag error: ${(r == null ? void 0 : r.message) || r}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(e) === pe.APPENDING) {
      const r = e.type, a = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, a ? a.len : this.config.maxBufferLength), l = this.backtrackFragment;
      ((l ? e.sn - l.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && s.removeFragment(e);
    } else ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), s.getState(e) === pe.PARTIAL && s.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = !0);
  }
  flushMainBuffer(e, t, s = null) {
    if (!(e - t))
      return;
    const i = {
      startOffset: e,
      endOffset: t,
      type: s
    };
    this.hls.trigger(y.BUFFER_FLUSHING, i);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((s) => {
      if (!s || this.fragContextChanged(e) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: i
      } = this, {
        payload: r
      } = s, a = e.decryptdata;
      if (r && r.byteLength > 0 && a != null && a.key && a.iv && a.method === "AES-128") {
        const o = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(r), a.key.buffer, a.iv.buffer).catch((l) => {
          throw i.trigger(y.ERROR, {
            type: q.MEDIA_ERROR,
            details: D.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: e
          }), l;
        }).then((l) => {
          const c = self.performance.now();
          return i.trigger(y.FRAG_DECRYPTED, {
            frag: e,
            payload: l,
            stats: {
              tstart: o,
              tdecrypt: c
            }
          }), s.payload = l, this.completeInitSegmentLoad(s);
        });
      }
      return this.completeInitSegmentLoad(s);
    }).catch((s) => {
      this.state === k.STOPPED || this.state === k.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const s = e.frag.stats;
    this.state = k.IDLE, e.frag.data = new Uint8Array(e.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick();
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    var s, i, r, a;
    const o = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.playlistType === Y.MAIN ? "level" : "track"} ${e.level} (frag:[${((s = e.startPTS) != null ? s : NaN).toFixed(3)}-${((i = e.endPTS) != null ? i : NaN).toFixed(3)}] > buffer:${o ? Wc.toString(ie.getBuffered(o)) : "(detached)"})`), e.sn !== "initSegment") {
      var l;
      if (e.type !== Y.SUBTITLE) {
        const d = e.elementaryStreams;
        if (!Object.keys(d).some((h) => !!d[h])) {
          this.state = k.IDLE;
          return;
        }
      }
      const c = (l = this.levels) == null ? void 0 : l[e.level];
      c != null && c.fragmentError && (this.log(`Resetting level fragment error count of ${c.fragmentError} on frag buffered`), c.fragmentError = 0);
    }
    this.state = k.IDLE, o && (!this.loadedmetadata && e.type == Y.MAIN && o.buffered.length && ((r = this.fragCurrent) == null ? void 0 : r.sn) === ((a = this.fragPrevious) == null ? void 0 : a.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick());
  }
  seekToStartPos() {
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: s,
      part: i,
      partsLoaded: r
    } = e, a = !r || r.length === 0 || r.some((l) => !l), o = new $i(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
    t.flush(o);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, s = null, i) {
    var r;
    const a = t == null ? void 0 : t.details;
    if (!this.levels || !a)
      throw new Error(`frag load aborted, missing level${a ? "" : " detail"}s`);
    let o = null;
    if (e.encrypted && !((r = e.decryptdata) != null && r.key) ? (this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.logPrefix === "[stream-controller]" ? "level" : "track"} ${e.level}`), this.state = k.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((d) => {
      if (!this.fragContextChanged(d.frag))
        return this.hls.trigger(y.KEY_LOADED, d), this.state === k.KEY_LOADING && (this.state = k.IDLE), d;
    }), this.hls.trigger(y.KEY_LOADING, {
      frag: e
    }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && a.encryptedFragments.length && this.keyLoader.loadClear(e, a.encryptedFragments), s = Math.max(e.start, s || 0), this.config.lowLatencyMode && e.sn !== "initSegment") {
      const d = a.partList;
      if (d && i) {
        s > e.end && a.fragmentHint && (e = a.fragmentHint);
        const h = this.getNextPart(d, e, s);
        if (h > -1) {
          const u = d[h];
          this.log(`Loading part sn: ${e.sn} p: ${u.index} cc: ${e.cc} of playlist [${a.startSN}-${a.endSN}] parts [0-${h}-${d.length - 1}] ${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = u.start + u.duration, this.state = k.FRAG_LOADING;
          let f;
          return o ? f = o.then((g) => !g || this.fragContextChanged(g.frag) ? null : this.doFragPartsLoad(e, u, t, i)).catch((g) => this.handleFragLoadError(g)) : f = this.doFragPartsLoad(e, u, t, i).catch((g) => this.handleFragLoadError(g)), this.hls.trigger(y.FRAG_LOADING, {
            frag: e,
            part: u,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : f;
        } else if (!e.url || this.loadedEndOfParts(d, s))
          return Promise.resolve(null);
      }
    }
    this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${a ? "of [" + a.startSN + "-" + a.endSN + "] " : ""}${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(s.toFixed(3))}`), $(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = k.FRAG_LOADING;
    const l = this.config.progressive;
    let c;
    return l && o ? c = o.then((d) => !d || this.fragContextChanged(d == null ? void 0 : d.frag) ? null : this.fragmentLoader.load(e, i)).catch((d) => this.handleFragLoadError(d)) : c = Promise.all([this.fragmentLoader.load(e, l ? i : void 0), o]).then(([d]) => (!l && d && i && i(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(y.FRAG_LOADING, {
      frag: e,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c;
  }
  doFragPartsLoad(e, t, s, i) {
    return new Promise((r, a) => {
      var o;
      const l = [], c = (o = s.details) == null ? void 0 : o.partList, d = (h) => {
        this.fragmentLoader.loadPart(e, h, i).then((u) => {
          l[h.index] = u;
          const f = u.part;
          this.hls.trigger(y.FRAG_LOADED, u);
          const g = Mn(s, e.sn, h.index + 1) || fa(c, e.sn, h.index + 1);
          if (g)
            d(g);
          else
            return r({
              frag: e,
              part: f,
              partsLoaded: l
            });
        }).catch(a);
      };
      d(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      e.data && t.details === D.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(y.ERROR, t);
    } else
      this.hls.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: D.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== k.PARSING) {
      !this.fragCurrent && this.state !== k.STOPPED && this.state !== k.ERROR && (this.state = k.IDLE);
      return;
    }
    const {
      frag: s,
      part: i,
      level: r
    } = t, a = self.performance.now();
    s.stats.parsing.end = a, i && (i.stats.parsing.end = a), this.updateLevelTiming(s, i, r, e.partial);
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: s
    } = this, {
      level: i,
      sn: r,
      part: a
    } = e;
    if (!(t != null && t[i]))
      return this.warn(`Levels object was unset while buffering fragment ${r} of level ${i}. The current chunk will not be buffered.`), null;
    const o = t[i], l = a > -1 ? Mn(o, r, a) : null, c = l ? l.fragment : gc(o, r, s);
    return c ? (s && s !== c && (c.stats = s.stats), {
      frag: c,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, s, i, r) {
    var a;
    if (!e || this.state !== k.PARSING)
      return;
    const {
      data1: o,
      data2: l
    } = e;
    let c = o;
    if (o && l && (c = Pe(o, l)), !((a = c) != null && a.length))
      return;
    const d = {
      type: e.type,
      frag: t,
      part: s,
      chunkMeta: i,
      parent: t.type,
      data: c
    };
    if (this.hls.trigger(y.BUFFER_APPENDING, d), e.dropped && e.independent && !s) {
      if (r)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!ie.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const s = t.currentTime, i = ie.bufferInfo(t, s, 0), r = e.duration, a = Math.min(this.config.maxFragLookUpTolerance * 2, r * 0.25), o = Math.max(Math.min(e.start - a, i.end - a), s + a);
    e.start - o > a && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    const s = this.getLoadPosition();
    return $(s) ? this.getFwdBufferInfoAtPos(e, s, t) : null;
  }
  getFwdBufferInfoAtPos(e, t, s) {
    const {
      config: {
        maxBufferHole: i
      }
    } = this, r = ie.bufferInfo(e, t, i);
    if (r.len === 0 && r.nextStart !== void 0) {
      const a = this.fragmentTracker.getBufferedFrag(t, s);
      if (a && r.nextStart < a.end)
        return ie.bufferInfo(e, t, Math.max(r.nextStart, i));
    }
    return r;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let s;
    return e ? s = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : s = t.maxBufferLength, Math.min(s, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const s = this.config, i = Math.max(Math.min(e - t, s.maxBufferLength), t), r = Math.max(e - t * 3, s.maxMaxBufferLength / 2, i);
    return r >= i ? (s.maxMaxBufferLength = r, this.warn(`Reduce max buffer length to ${r}s`), !0) : !1;
  }
  getAppendedFrag(e, t = Y.MAIN) {
    const s = this.fragmentTracker.getAppendedFrag(e, Y.MAIN);
    return s && "fragment" in s ? s.fragment : s;
  }
  getNextFragment(e, t) {
    const s = t.fragments, i = s.length;
    if (!i)
      return null;
    const {
      config: r
    } = this, a = s[0].start;
    let o;
    if (t.live) {
      const l = r.initialLiveManifestSize;
      if (i < l)
        return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`), null;
      (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < a) && (o = this.getInitialLiveFragment(t, s), this.startPosition = this.nextLoadPosition = o ? this.hls.liveSyncPosition || o.start : e);
    } else e <= a && (o = s[0]);
    if (!o) {
      const l = r.lowLatencyMode ? t.partEnd : t.fragmentEnd;
      o = this.getFragmentAtPosition(e, l, t);
    }
    return this.mapToInitFragWhenRequired(o);
  }
  isLoopLoading(e, t) {
    const s = this.fragmentTracker.getState(e);
    return (s === pe.OK || s === pe.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, s, i, r) {
    const a = e.gap, o = this.getNextFragment(this.nextLoadPosition, t);
    if (o === null)
      return o;
    if (e = o, a && e && !e.gap && s.nextStart) {
      const l = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i);
      if (l !== null && s.len + l.len >= r)
        return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`), null;
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !(e != null && e.initSegment.data) && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, s) {
    let i = -1, r = !1, a = !0;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      if (a = a && !c.independent, i > -1 && s < c.start)
        break;
      const d = c.loaded;
      d ? i = -1 : (r || c.independent || a) && c.fragment === t && (i = o), r = d;
    }
    return i;
  }
  loadedEndOfParts(e, t) {
    const s = e[e.length - 1];
    return s && t > s.start && s.loaded;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e, t) {
    const s = this.fragPrevious;
    let i = null;
    if (s) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = pc(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
        const r = s.sn + 1;
        if (r >= e.startSN && r <= e.endSN) {
          const a = t[r - e.startSN];
          s.cc === a.cc && (i = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`));
        }
        i || (i = Ec(t, s.cc), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`));
      }
    } else {
      const r = this.hls.liveSyncPosition;
      r !== null && (i = this.getFragmentAtPosition(r, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return i;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, s) {
    const {
      config: i
    } = this;
    let {
      fragPrevious: r
    } = this, {
      fragments: a,
      endSN: o
    } = s;
    const {
      fragmentHint: l
    } = s, {
      maxFragLookUpTolerance: c
    } = i, d = s.partList, h = !!(i.lowLatencyMode && d != null && d.length && l);
    h && l && !this.bitrateTest && (a = a.concat(l), o = l.sn);
    let u;
    if (e < t) {
      const f = e > t - c ? 0 : c;
      u = As(r, a, e, f);
    } else
      u = a[a.length - 1];
    if (u) {
      const f = u.sn - s.startSN, g = this.fragmentTracker.getState(u);
      if ((g === pe.OK || g === pe.PARTIAL && u.gap) && (r = u), r && u.sn === r.sn && (!h || d[0].fragment.sn > u.sn) && r && u.level === r.level) {
        const p = a[f + 1];
        u.sn < o && this.fragmentTracker.getState(p) !== pe.OK ? u = p : u = null;
      }
    }
    return u;
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: s
    } = this;
    if (!s)
      return;
    const i = this.hls.liveSyncPosition, r = s.currentTime, a = e.fragments[0].start, o = e.edge, l = r >= a - t.maxFragLookUpTolerance && r <= o;
    if (i !== null && s.duration > i && (r < i || !l)) {
      const c = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      (!l && s.readyState < 4 || r < o - c) && (this.loadedmetadata || (this.nextLoadPosition = i), s.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`), s.currentTime = i));
    }
  }
  alignPlaylists(e, t, s) {
    const i = e.fragments.length;
    if (!i)
      return this.warn("No fragments in live playlist"), 0;
    const r = e.fragments[0].start, a = !t, o = e.alignedSliding && $(r);
    if (a || !o && !r) {
      const {
        fragPrevious: l
      } = this;
      Uc(l, s, e);
      const c = e.fragments[0].start;
      return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} prev-sn: ${l ? l.sn : "na"} fragments: ${i}`), c;
    }
    return r;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let s = this.startPosition;
    if (s < t && (s = -1), s === -1 || this.lastCurrentTime === -1) {
      const i = this.startTimeOffset !== null, r = i ? this.startTimeOffset : e.startTimeOffset;
      r !== null && $(r) ? (s = t + r, r < 0 && (s += e.totalduration), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Start time offset ${r} found in ${i ? "multivariant" : "media"} playlist, adjust startPosition to ${s}`), this.startPosition = s) : e.live ? s = this.hls.liveSyncPosition || t : this.startPosition = s = 0, this.lastCurrentTime = s;
    }
    this.nextLoadPosition = s;
  }
  getLoadPosition() {
    const {
      media: e
    } = this;
    let t = 0;
    return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.sn !== "initSegment" && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== k.FRAG_LOADING_WAITING_RETRY) && (this.state = k.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      const d = this.getCurrentContext(t.chunkMeta);
      d && (t.frag = d.frag);
    }
    const s = t.frag;
    if (!s || s.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(s)) {
      var i;
      this.warn(`Frag load error must match current frag to retry ${s.url} > ${(i = this.fragCurrent) == null ? void 0 : i.url}`);
      return;
    }
    const r = t.details === D.FRAG_GAP;
    r && this.fragmentTracker.fragBuffered(s, !0);
    const a = t.errorAction, {
      action: o,
      retryCount: l = 0,
      retryConfig: c
    } = a || {};
    if (a && o === Ee.RetryRequest && c) {
      this.resetStartWhenNotLoaded(this.levelLastLoaded);
      const d = Ui(c, l);
      this.warn(`Fragment ${s.sn} of ${e} ${s.level} errored with ${t.details}, retrying loading ${l + 1}/${c.maxNumRetry} in ${d}ms`), a.resolved = !0, this.retryDate = self.performance.now() + d, this.state = k.FRAG_LOADING_WAITING_RETRY;
    } else if (c && a)
      if (this.resetFragmentErrors(e), l < c.maxNumRetry)
        !r && o !== Ee.RemoveAlternatePermanently && (a.resolved = !0);
      else {
        A.warn(`${t.details} reached or exceeded max retry (${l})`);
        return;
      }
    else (a == null ? void 0 : a.action) === Ee.SendAlternateToPenaltyBox ? this.state = k.WAITING_LEVEL : this.state = k.ERROR;
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === k.PARSING || this.state === k.PARSED) {
      const t = e.frag, s = e.parent, i = this.getFwdBufferInfo(this.mediaBuffer, s), r = i && i.len > 0.5;
      r && this.reduceMaxBufferLength(i.len, (t == null ? void 0 : t.duration) || 10);
      const a = !r;
      return a && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${s} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), a;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === Y.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== k.STOPPED && (this.state = k.IDLE);
  }
  afterBufferFlushed(e, t, s) {
    if (!e)
      return;
    const i = ie.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, i, s), this.state === k.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = k.IDLE;
  }
  resetStartWhenNotLoaded(e) {
    if (!this.loadedmetadata) {
      this.startFragRequested = !1;
      const t = e ? e.details : null;
      t != null && t.live ? (this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, s, i) {
    var r;
    const a = s.details;
    if (!a) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((l, c) => {
      const d = e.elementaryStreams[c];
      if (d) {
        const h = d.endPTS - d.startPTS;
        if (h <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${h})`), l || !1;
        const u = i ? 0 : ha(a, e, d.startPTS, d.endPTS, d.startDTS, d.endDTS);
        return this.hls.trigger(y.LEVEL_PTS_UPDATED, {
          details: a,
          level: s,
          drift: u,
          type: c,
          frag: e,
          start: d.startPTS,
          end: d.endPTS
        }), !0;
      }
      return l;
    }, !1) && ((r = this.transmuxer) == null ? void 0 : r.error) === null) {
      const l = new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);
      if (s.fragmentError === 0 && (s.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0)), this.warn(l.message), this.hls.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: D.FRAG_PARSING_ERROR,
        fatal: !1,
        error: l,
        frag: e,
        reason: `Found no media in msn ${e.sn} of level "${s.url}"`
      }), !this.hls)
        return;
      this.resetTransmuxer();
    }
    this.state = k.PARSED, this.hls.trigger(y.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  resetTransmuxer() {
    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
class xa {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let s;
    if (e.length)
      e.length === 1 ? s = e[0] : s = Yc(e, t);
    else return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function Yc(n, e) {
  const t = new Uint8Array(e);
  let s = 0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    t.set(r, s), s += r.length;
  }
  return t;
}
function qc() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function zc() {
  const n = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), e = self.URL.createObjectURL(n);
  return {
    worker: new self.Worker(e),
    objectURL: e
  };
}
function Xc(n) {
  const e = new self.URL(n, self.location.href).href;
  return {
    worker: new self.Worker(e),
    scriptURL: e
  };
}
function He(n = "", e = 9e4) {
  return {
    type: n,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class Hi {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, s, i) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, s) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = Pe(this.cachedData, e), this.cachedData = null);
    let s = Gt(e, 0), i = s ? s.length : 0, r;
    const a = this._audioTrack, o = this._id3Track, l = s ? Ni(s) : void 0, c = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && $(l)) && (this.basePTS = Zc(l, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: Ne.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); i < c; ) {
      if (this.canParse(e, i)) {
        const d = this.appendFrame(a, e, i);
        d ? (this.frameIndex++, this.lastPTS = d.sample.pts, i += d.length, r = i) : i = c;
      } else xl(e, i) ? (s = Gt(e, i), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: s,
        type: Ne.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), i += s.length, r = i) : i++;
      if (i === c && r !== c) {
        const d = ft(e, r);
        this.cachedData ? this.cachedData = Pe(this.cachedData, d) : this.cachedData = d;
      }
    }
    return {
      audioTrack: a,
      videoTrack: He(),
      id3Track: o,
      textTrack: He()
    };
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: He(),
      id3Track: this._id3Track,
      textTrack: He()
    };
  }
  destroy() {
  }
}
const Zc = (n, e, t) => {
  if ($(n))
    return n * 90;
  const s = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + s;
};
function Qc(n, e, t, s) {
  let i, r, a, o;
  const l = navigator.userAgent.toLowerCase(), c = s, d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  i = ((e[t + 2] & 192) >>> 6) + 1;
  const h = (e[t + 2] & 60) >>> 2;
  if (h > d.length - 1) {
    const u = new Error(`invalid ADTS sampling index:${h}`);
    n.emit(y.ERROR, y.ERROR, {
      type: q.MEDIA_ERROR,
      details: D.FRAG_PARSING_ERROR,
      fatal: !0,
      error: u,
      reason: u.message
    });
    return;
  }
  return a = (e[t + 2] & 1) << 2, a |= (e[t + 3] & 192) >>> 6, A.log(`manifest codec:${s}, ADTS type:${i}, samplingIndex:${h}`), /firefox/i.test(l) ? h >= 6 ? (i = 5, o = new Array(4), r = h - 3) : (i = 2, o = new Array(2), r = h) : l.indexOf("android") !== -1 ? (i = 2, o = new Array(2), r = h) : (i = 5, o = new Array(4), s && (s.indexOf("mp4a.40.29") !== -1 || s.indexOf("mp4a.40.5") !== -1) || !s && h >= 6 ? r = h - 3 : ((s && s.indexOf("mp4a.40.2") !== -1 && (h >= 6 && a === 1 || /vivaldi/i.test(l)) || !s && a === 1) && (i = 2, o = new Array(2)), r = h)), o[0] = i << 3, o[0] |= (h & 14) >> 1, o[1] |= (h & 1) << 7, o[1] |= a << 3, i === 5 && (o[1] |= (r & 14) >> 1, o[2] = (r & 1) << 7, o[2] |= 8, o[3] = 0), {
    config: o,
    samplerate: d[h],
    channelCount: a,
    codec: "mp4a.40." + i,
    manifestCodec: c
  };
}
function Ea(n, e) {
  return n[e] === 255 && (n[e + 1] & 246) === 240;
}
function Ta(n, e) {
  return n[e + 1] & 1 ? 7 : 9;
}
function Ki(n, e) {
  return (n[e + 3] & 3) << 11 | n[e + 4] << 3 | (n[e + 5] & 224) >>> 5;
}
function Jc(n, e) {
  return e + 5 < n.length;
}
function Cs(n, e) {
  return e + 1 < n.length && Ea(n, e);
}
function ed(n, e) {
  return Jc(n, e) && Ea(n, e) && Ki(n, e) <= n.length - e;
}
function td(n, e) {
  if (Cs(n, e)) {
    const t = Ta(n, e);
    if (e + t >= n.length)
      return !1;
    const s = Ki(n, e);
    if (s <= t)
      return !1;
    const i = e + s;
    return i === n.length || Cs(n, i);
  }
  return !1;
}
function va(n, e, t, s, i) {
  if (!n.samplerate) {
    const r = Qc(e, t, s, i);
    if (!r)
      return;
    n.config = r.config, n.samplerate = r.samplerate, n.channelCount = r.channelCount, n.codec = r.codec, n.manifestCodec = r.manifestCodec, A.log(`parsed codec:${n.codec}, rate:${r.samplerate}, channels:${r.channelCount}`);
  }
}
function Sa(n) {
  return 1024 * 9e4 / n;
}
function sd(n, e) {
  const t = Ta(n, e);
  if (e + t <= n.length) {
    const s = Ki(n, e) - t;
    if (s > 0)
      return {
        headerLength: t,
        frameLength: s
      };
  }
}
function Aa(n, e, t, s, i) {
  const r = Sa(n.samplerate), a = s + i * r, o = sd(e, t);
  let l;
  if (o) {
    const {
      frameLength: h,
      headerLength: u
    } = o, f = u + h, g = Math.max(0, t + f - e.length);
    g ? (l = new Uint8Array(f - u), l.set(e.subarray(t + u, e.length), 0)) : l = e.subarray(t + u, t + f);
    const m = {
      unit: l,
      pts: a
    };
    return g || n.samples.push(m), {
      sample: m,
      length: f,
      missing: g
    };
  }
  const c = e.length - t;
  return l = new Uint8Array(c), l.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: l,
      pts: a
    },
    length: c,
    missing: -1
  };
}
let Zt = null;
const id = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], nd = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], rd = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], ad = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function La(n, e, t, s, i) {
  if (t + 24 > e.length)
    return;
  const r = Ca(e, t);
  if (r && t + r.frameLength <= e.length) {
    const a = r.samplesPerFrame * 9e4 / r.sampleRate, o = s + i * a, l = {
      unit: e.subarray(t, t + r.frameLength),
      pts: o,
      dts: o
    };
    return n.config = [], n.channelCount = r.channelCount, n.samplerate = r.sampleRate, n.samples.push(l), {
      sample: l,
      length: r.frameLength,
      missing: 0
    };
  }
}
function Ca(n, e) {
  const t = n[e + 1] >> 3 & 3, s = n[e + 1] >> 1 & 3, i = n[e + 2] >> 4 & 15, r = n[e + 2] >> 2 & 3;
  if (t !== 1 && i !== 0 && i !== 15 && r !== 3) {
    const a = n[e + 2] >> 1 & 1, o = n[e + 3] >> 6, l = t === 3 ? 3 - s : s === 3 ? 3 : 4, c = id[l * 14 + i - 1] * 1e3, h = nd[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], u = o === 3 ? 1 : 2, f = rd[t][s], g = ad[s], m = f * 8 * g, p = Math.floor(f * c / h + a) * g;
    if (Zt === null) {
      const T = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      Zt = T ? parseInt(T[1]) : 0;
    }
    return !!Zt && Zt <= 87 && s === 2 && c >= 224e3 && o === 0 && (n[e + 3] = n[e + 3] | 128), {
      sampleRate: h,
      channelCount: u,
      frameLength: p,
      samplesPerFrame: m
    };
  }
}
function ji(n, e) {
  return n[e] === 255 && (n[e + 1] & 224) === 224 && (n[e + 1] & 6) !== 0;
}
function Ra(n, e) {
  return e + 1 < n.length && ji(n, e);
}
function od(n, e) {
  return ji(n, e) && 4 <= n.length - e;
}
function _a(n, e) {
  if (e + 1 < n.length && ji(n, e)) {
    const s = Ca(n, e);
    let i = 4;
    s != null && s.frameLength && (i = s.frameLength);
    const r = e + i;
    return r === n.length || Ra(n, r);
  }
  return !1;
}
class ld extends Hi {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e) {
    if (!e)
      return !1;
    const t = Gt(e, 0);
    let s = (t == null ? void 0 : t.length) || 0;
    if (_a(e, s))
      return !1;
    for (let i = e.length; s < i; s++)
      if (td(e, s))
        return A.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return ed(e, t);
  }
  appendFrame(e, t, s) {
    va(e, this.observer, t, s, e.manifestCodec);
    const i = Aa(e, t, s, this.basePTS, this.frameIndex);
    if (i && i.missing === 0)
      return i;
  }
}
const cd = /\/emsg[-/]ID3/i;
class dd {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, s, i) {
    const r = this.videoTrack = He("video", 1), a = this.audioTrack = He("audio", 1), o = this.txtTrack = He("text", 1);
    if (this.id3Track = He("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const l = ia(e);
    if (l.video) {
      const {
        id: c,
        timescale: d,
        codec: h
      } = l.video;
      r.id = c, r.timescale = o.timescale = d, r.codec = h;
    }
    if (l.audio) {
      const {
        id: c,
        timescale: d,
        codec: h
      } = l.audio;
      a.id = c, a.timescale = d, a.codec = h;
    }
    o.id = ea.text, r.sampleDuration = 0, r.duration = a.duration = i;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return _l(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let s = e;
    const i = this.videoTrack, r = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = Pe(this.remainderData, e));
      const o = Fl(s);
      this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array();
    } else
      i.samples = s;
    const a = this.extractID3Track(i, t);
    return r.samples = yn(t, i), {
      videoTrack: i,
      audioTrack: this.audioTrack,
      id3Track: a,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, s = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const i = this.extractID3Track(t, this.timeOffset);
    return s.samples = yn(e, t), {
      videoTrack: t,
      audioTrack: He(),
      id3Track: i,
      textTrack: He()
    };
  }
  extractID3Track(e, t) {
    const s = this.id3Track;
    if (e.samples.length) {
      const i = z(e.samples, ["emsg"]);
      i && i.forEach((r) => {
        const a = Ul(r);
        if (cd.test(a.schemeIdUri)) {
          const o = $(a.presentationTime) ? a.presentationTime / a.timeScale : t + a.presentationTimeDelta / a.timeScale;
          let l = a.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : a.eventDuration / a.timeScale;
          l <= 1e-3 && (l = Number.POSITIVE_INFINITY);
          const c = a.payload;
          s.samples.push({
            data: c,
            len: c.byteLength,
            dts: o,
            pts: o,
            type: Ne.emsg,
            duration: l
          });
        }
      });
    }
    return s;
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
  }
}
const ba = (n, e) => {
  let t = 0, s = 5;
  e += s;
  const i = new Uint32Array(1), r = new Uint32Array(1), a = new Uint8Array(1);
  for (; s > 0; ) {
    a[0] = n[e];
    const o = Math.min(s, 8), l = 8 - o;
    r[0] = 4278190080 >>> 24 + l << l, i[0] = (a[0] & r[0]) >> l, t = t ? t << o | i[0] : i[0], e += 1, s -= o;
  }
  return t;
};
class hd extends Hi {
  constructor(e) {
    super(), this.observer = void 0, this.observer = e;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(e, t) {
    return t + 64 < e.length;
  }
  appendFrame(e, t, s) {
    const i = Ia(e, t, s, this.basePTS, this.frameIndex);
    if (i !== -1)
      return {
        sample: e.samples[e.samples.length - 1],
        length: i,
        missing: 0
      };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = Gt(e, 0);
    if (!t)
      return !1;
    const s = t.length;
    return e[s] === 11 && e[s + 1] === 119 && Ni(t) !== void 0 && // check the bsid to confirm ac-3
    ba(e, s) < 16;
  }
}
function Ia(n, e, t, s, i) {
  if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1;
  const r = e[t + 4] >> 6;
  if (r >= 3)
    return -1;
  const o = [48e3, 44100, 32e3][r], l = e[t + 4] & 63, d = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][l * 3 + r] * 2;
  if (t + d > e.length)
    return -1;
  const h = e[t + 6] >> 5;
  let u = 0;
  h === 2 ? u += 2 : (h & 1 && h !== 1 && (u += 2), h & 4 && (u += 2));
  const f = (e[t + 6] << 8 | e[t + 7]) >> 12 - u & 1, m = [2, 1, 2, 3, 3, 4, 4, 5][h] + f, p = e[t + 5] >> 3, x = e[t + 5] & 7, S = new Uint8Array([r << 6 | p << 1 | x >> 2, (x & 3) << 6 | h << 3 | f << 2 | l >> 4, l << 4 & 224]), T = 1536 / o * 9e4, C = s + i * T, E = e.subarray(t, t + d);
  return n.config = S, n.channelCount = m, n.samplerate = o, n.samples.push({
    unit: E,
    pts: C
  }), d;
}
class ud {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, s, i) {
    return {
      key: e,
      frame: !1,
      pts: t,
      dts: s,
      units: [],
      debug: i,
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let s = this.VideoSample, i;
    if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
      const r = s.units;
      i = r[r.length - 1];
    }
    return i;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const s = t.samples, i = s.length;
        if (i) {
          const r = s[i - 1];
          e.pts = r.pts, e.dts = r.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
    e.debug.length && A.log(e.pts + "/" + e.dts + ":" + e.debug);
  }
}
class jn {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, s = e.byteLength - t, i = new Uint8Array(4), r = Math.min(4, t);
    if (r === 0)
      throw new Error("no bytes available");
    i.set(e.subarray(s, s + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const s = this.word >>> 32 - t;
    if (e > 32 && A.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? s << t | this.readBits(t) : s;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if (this.word & 2147483648 >>> e)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
  /**
   * Advance the ExpGolomb decoder past a scaling list. The scaling
   * list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e) {
    let t = 8, s = 8, i;
    for (let r = 0; r < e; r++)
      s !== 0 && (i = this.readEG(), s = (t + i + 256) % 256), t = s === 0 ? t : s;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS() {
    let e = 0, t = 0, s = 0, i = 0, r, a, o;
    const l = this.readUByte.bind(this), c = this.readBits.bind(this), d = this.readUEG.bind(this), h = this.readBoolean.bind(this), u = this.skipBits.bind(this), f = this.skipEG.bind(this), g = this.skipUEG.bind(this), m = this.skipScalingList.bind(this);
    l();
    const p = l();
    if (c(5), u(3), l(), g(), p === 100 || p === 110 || p === 122 || p === 244 || p === 44 || p === 83 || p === 86 || p === 118 || p === 128) {
      const L = d();
      if (L === 3 && u(1), g(), g(), u(1), h())
        for (a = L !== 3 ? 8 : 12, o = 0; o < a; o++)
          h() && (o < 6 ? m(16) : m(64));
    }
    g();
    const x = d();
    if (x === 0)
      d();
    else if (x === 1)
      for (u(1), f(), f(), r = d(), o = 0; o < r; o++)
        f();
    g(), u(1);
    const S = d(), T = d(), C = c(1);
    C === 0 && u(1), u(1), h() && (e = d(), t = d(), s = d(), i = d());
    let E = [1, 1];
    if (h() && h())
      switch (l()) {
        case 1:
          E = [1, 1];
          break;
        case 2:
          E = [12, 11];
          break;
        case 3:
          E = [10, 11];
          break;
        case 4:
          E = [16, 11];
          break;
        case 5:
          E = [40, 33];
          break;
        case 6:
          E = [24, 11];
          break;
        case 7:
          E = [20, 11];
          break;
        case 8:
          E = [32, 11];
          break;
        case 9:
          E = [80, 33];
          break;
        case 10:
          E = [18, 11];
          break;
        case 11:
          E = [15, 11];
          break;
        case 12:
          E = [64, 33];
          break;
        case 13:
          E = [160, 99];
          break;
        case 14:
          E = [4, 3];
          break;
        case 15:
          E = [3, 2];
          break;
        case 16:
          E = [2, 1];
          break;
        case 255: {
          E = [l() << 8 | l(), l() << 8 | l()];
          break;
        }
      }
    return {
      width: Math.ceil((S + 1) * 16 - e * 2 - t * 2),
      height: (2 - C) * (T + 1) * 16 - (C ? 2 : 4) * (s + i),
      pixelRatio: E
    };
  }
  readSliceType() {
    return this.readUByte(), this.readUEG(), this.readUEG();
  }
}
class fd extends ud {
  parseAVCPES(e, t, s, i, r) {
    const a = this.parseAVCNALu(e, s.data);
    let o = this.VideoSample, l, c = !1;
    s.data = null, o && a.length && !e.audFound && (this.pushAccessUnit(o, e), o = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts, "")), a.forEach((d) => {
      var h;
      switch (d.type) {
        case 1: {
          let m = !1;
          l = !0;
          const p = d.data;
          if (c && p.length > 4) {
            const x = new jn(p).readSliceType();
            (x === 2 || x === 4 || x === 7 || x === 9) && (m = !0);
          }
          if (m) {
            var u;
            (u = o) != null && u.frame && !o.key && (this.pushAccessUnit(o, e), o = this.VideoSample = null);
          }
          o || (o = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts, "")), o.frame = !0, o.key = m;
          break;
        }
        case 5:
          l = !0, (h = o) != null && h.frame && !o.key && (this.pushAccessUnit(o, e), o = this.VideoSample = null), o || (o = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts, "")), o.key = !0, o.frame = !0;
          break;
        case 6: {
          l = !0, ra(d.data, 1, s.pts, t.samples);
          break;
        }
        case 7: {
          var f, g;
          l = !0, c = !0;
          const m = d.data, x = new jn(m).readSPS();
          if (!e.sps || e.width !== x.width || e.height !== x.height || ((f = e.pixelRatio) == null ? void 0 : f[0]) !== x.pixelRatio[0] || ((g = e.pixelRatio) == null ? void 0 : g[1]) !== x.pixelRatio[1]) {
            e.width = x.width, e.height = x.height, e.pixelRatio = x.pixelRatio, e.sps = [m], e.duration = r;
            const S = m.subarray(1, 4);
            let T = "avc1.";
            for (let C = 0; C < 3; C++) {
              let E = S[C].toString(16);
              E.length < 2 && (E = "0" + E), T += E;
            }
            e.codec = T;
          }
          break;
        }
        case 8:
          l = !0, e.pps = [d.data];
          break;
        case 9:
          l = !0, e.audFound = !0, o && this.pushAccessUnit(o, e), o = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts, "");
          break;
        case 12:
          l = !0;
          break;
        default:
          l = !1, o && (o.debug += "unknown NAL " + d.type + " ");
          break;
      }
      o && l && o.units.push(d);
    }), i && o && (this.pushAccessUnit(o, e), this.VideoSample = null);
  }
  parseAVCNALu(e, t) {
    const s = t.byteLength;
    let i = e.naluState || 0;
    const r = i, a = [];
    let o = 0, l, c, d, h = -1, u = 0;
    for (i === -1 && (h = 0, u = t[0] & 31, i = 0, o = 1); o < s; ) {
      if (l = t[o++], !i) {
        i = l ? 0 : 1;
        continue;
      }
      if (i === 1) {
        i = l ? 0 : 2;
        continue;
      }
      if (!l)
        i = 3;
      else if (l === 1) {
        if (c = o - i - 1, h >= 0) {
          const f = {
            data: t.subarray(h, c),
            type: u
          };
          a.push(f);
        } else {
          const f = this.getLastNalUnit(e.samples);
          f && (r && o <= 4 - r && f.state && (f.data = f.data.subarray(0, f.data.byteLength - r)), c > 0 && (f.data = Pe(f.data, t.subarray(0, c)), f.state = 0));
        }
        o < s ? (d = t[o] & 31, h = o, u = d, i = 0) : i = -1;
      } else
        i = 0;
    }
    if (h >= 0 && i >= 0) {
      const f = {
        data: t.subarray(h, s),
        type: u,
        state: i
      };
      a.push(f);
    }
    if (a.length === 0) {
      const f = this.getLastNalUnit(e.samples);
      f && (f.data = Pe(f.data, t));
    }
    return e.naluState = i, a;
  }
}
class gd {
  constructor(e, t, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new Gi(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, s) {
    const i = e[t].unit;
    if (i.length <= 16)
      return;
    const r = i.subarray(16, i.length - i.length % 16), a = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
    this.decryptBuffer(a).then((o) => {
      const l = new Uint8Array(o);
      i.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s);
    });
  }
  decryptAacSamples(e, t, s) {
    for (; ; t++) {
      if (t >= e.length) {
        s();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, s), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, s = new Int8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      s.set(e.subarray(r, r + 16), i);
    return s;
  }
  getAvcDecryptedUnit(e, t) {
    const s = new Uint8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      e.set(s.subarray(i, i + 16), r);
    return e;
  }
  decryptAvcSample(e, t, s, i, r) {
    const a = aa(r.data), o = this.getAvcEncryptedData(a);
    this.decryptBuffer(o.buffer).then((l) => {
      r.data = this.getAvcDecryptedUnit(a, l), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, i);
    });
  }
  decryptAvcSamples(e, t, s, i) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, s = 0) {
      if (t >= e.length) {
        i();
        return;
      }
      const r = e[t].units;
      for (; !(s >= r.length); s++) {
        const a = r[s];
        if (!(a.data.length <= 48 || a.type !== 1 && a.type !== 5) && (this.decryptAvcSample(e, t, s, i, a), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
const me = 188;
class rt {
  constructor(e, t, s) {
    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.videoParser = new fd();
  }
  static probe(e) {
    const t = rt.syncOffset(e);
    return t > 0 && A.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`), t !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let s = Math.min(me * 5, t - me) + 1, i = 0;
    for (; i < s; ) {
      let r = !1, a = -1, o = 0;
      for (let l = i; l < t; l += me)
        if (e[l] === 71 && (t - l === me || e[l + me] === 71)) {
          if (o++, a === -1 && (a = l, a !== 0 && (s = Math.min(a + me * 99, e.length - me) + 1)), r || (r = yi(e, l) === 0), r && o > 1 && (a === 0 && o > 2 || l + me > s))
            return a;
        } else {
          if (o)
            return -1;
          break;
        }
      i++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: ea[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, s, i) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = rt.createTrack("video"), this._audioTrack = rt.createTrack("audio", i), this._id3Track = rt.createTrack("id3"), this._txtTrack = rt.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s, this._duration = i;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: s
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, s = !1, i = !1) {
    s || (this.sampleAes = null);
    let r;
    const a = this._videoTrack, o = this._audioTrack, l = this._id3Track, c = this._txtTrack;
    let d = a.pid, h = a.pesData, u = o.pid, f = l.pid, g = o.pesData, m = l.pesData, p = null, x = this.pmtParsed, S = this._pmtId, T = e.length;
    if (this.remainderData && (e = Pe(this.remainderData, e), T = e.length, this.remainderData = null), T < me && !i)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: a,
        id3Track: l,
        textTrack: c
      };
    const C = Math.max(0, rt.syncOffset(e));
    T -= (T - C) % me, T < e.byteLength && !i && (this.remainderData = new Uint8Array(e.buffer, T, e.buffer.byteLength - T));
    let E = 0;
    for (let _ = C; _ < T; _ += me)
      if (e[_] === 71) {
        const I = !!(e[_ + 1] & 64), P = yi(e, _), b = (e[_ + 3] & 48) >> 4;
        let w;
        if (b > 1) {
          if (w = _ + 5 + e[_ + 4], w === _ + me)
            continue;
        } else
          w = _ + 4;
        switch (P) {
          case d:
            I && (h && (r = Tt(h)) && this.videoParser.parseAVCPES(a, c, r, !1, this._duration), h = {
              data: [],
              size: 0
            }), h && (h.data.push(e.subarray(w, _ + me)), h.size += _ + me - w);
            break;
          case u:
            if (I) {
              if (g && (r = Tt(g)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, r);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, r);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, r);
                    break;
                }
              g = {
                data: [],
                size: 0
              };
            }
            g && (g.data.push(e.subarray(w, _ + me)), g.size += _ + me - w);
            break;
          case f:
            I && (m && (r = Tt(m)) && this.parseID3PES(l, r), m = {
              data: [],
              size: 0
            }), m && (m.data.push(e.subarray(w, _ + me)), m.size += _ + me - w);
            break;
          case 0:
            I && (w += e[w] + 1), S = this._pmtId = md(e, w);
            break;
          case S: {
            I && (w += e[w] + 1);
            const G = pd(e, w, this.typeSupported, s, this.observer);
            d = G.videoPid, d > 0 && (a.pid = d, a.segmentCodec = G.segmentVideoCodec), u = G.audioPid, u > 0 && (o.pid = u, o.segmentCodec = G.segmentAudioCodec), f = G.id3Pid, f > 0 && (l.pid = f), p !== null && !x && (A.warn(`MPEG-TS PMT found at ${_} after unknown PID '${p}'. Backtracking to sync byte @${C} to parse all TS packets.`), p = null, _ = C - 188), x = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            p = P;
            break;
        }
      } else
        E++;
    E > 0 && Rs(this.observer, new Error(`Found ${E} TS packet/s that do not start with 0x47`)), a.pesData = h, o.pesData = g, l.pesData = m;
    const L = {
      audioTrack: o,
      videoTrack: a,
      id3Track: l,
      textTrack: c
    };
    return i && this.extractRemainingSamples(L), L;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: s,
      id3Track: i,
      textTrack: r
    } = e, a = s.pesData, o = t.pesData, l = i.pesData;
    let c;
    if (a && (c = Tt(a)) ? (this.videoParser.parseAVCPES(s, r, c, !0, this._duration), s.pesData = null) : s.pesData = a, o && (c = Tt(o))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, c);
          break;
        case "mp3":
          this.parseMPEGPES(t, c);
          break;
        case "ac3":
          this.parseAC3PES(t, c);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && A.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    l && (c = Tt(l)) ? (this.parseID3PES(i, c), i.pesData = null) : i.pesData = l;
  }
  demuxSampleAes(e, t, s) {
    const i = this.demux(e, s, !0, !this.config.progressive), r = this.sampleAes = new gd(this.observer, this.config, t);
    return this.decrypt(i, r);
  }
  decrypt(e, t) {
    return new Promise((s) => {
      const {
        audioTrack: i,
        videoTrack: r
      } = e;
      i.samples && i.segmentCodec === "aac" ? t.decryptAacSamples(i.samples, 0, () => {
        r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => {
          s(e);
        }) : s(e);
      }) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => {
        s(e);
      });
    });
  }
  destroy() {
    this._duration = 0;
  }
  parseAACPES(e, t) {
    let s = 0;
    const i = this.aacOverFlow;
    let r = t.data;
    if (i) {
      this.aacOverFlow = null;
      const h = i.missing, u = i.sample.unit.byteLength;
      if (h === -1)
        r = Pe(i.sample.unit, r);
      else {
        const f = u - h;
        i.sample.unit.set(r.subarray(0, h), f), e.samples.push(i.sample), s = i.missing;
      }
    }
    let a, o;
    for (a = s, o = r.length; a < o - 1 && !Cs(r, a); a++)
      ;
    if (a !== s) {
      let h;
      const u = a < o - 1;
      if (u ? h = `AAC PES did not start with ADTS header,offset:${a}` : h = "No ADTS header found in AAC PES", Rs(this.observer, new Error(h), u), !u)
        return;
    }
    va(e, this.observer, r, a, this.audioCodec);
    let l;
    if (t.pts !== void 0)
      l = t.pts;
    else if (i) {
      const h = Sa(e.samplerate);
      l = i.sample.pts + h;
    } else {
      A.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let c = 0, d;
    for (; a < o; )
      if (d = Aa(e, r, a, l, c), a += d.length, d.missing) {
        this.aacOverFlow = d;
        break;
      } else
        for (c++; a < o - 1 && !Cs(r, a); a++)
          ;
  }
  parseMPEGPES(e, t) {
    const s = t.data, i = s.length;
    let r = 0, a = 0;
    const o = t.pts;
    if (o === void 0) {
      A.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; a < i; )
      if (Ra(s, a)) {
        const l = La(e, s, a, o, r);
        if (l)
          a += l.length, r++;
        else
          break;
      } else
        a++;
  }
  parseAC3PES(e, t) {
    {
      const s = t.data, i = t.pts;
      if (i === void 0) {
        A.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const r = s.length;
      let a = 0, o = 0, l;
      for (; o < r && (l = Ia(e, s, o, i, a++)) > 0; )
        o += l;
    }
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      A.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = fe({}, t, {
      type: this._videoTrack ? Ne.emsg : Ne.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(s);
  }
}
function yi(n, e) {
  return ((n[e + 1] & 31) << 8) + n[e + 2];
}
function md(n, e) {
  return (n[e + 10] & 31) << 8 | n[e + 11];
}
function pd(n, e, t, s, i) {
  const r = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, a = (n[e + 1] & 15) << 8 | n[e + 2], o = e + 3 + a - 4, l = (n[e + 10] & 15) << 8 | n[e + 11];
  for (e += 12 + l; e < o; ) {
    const c = yi(n, e), d = (n[e + 3] & 15) << 8 | n[e + 4];
    switch (n[e]) {
      case 207:
        if (!s) {
          Hs("ADTS AAC");
          break;
        }
      case 15:
        r.audioPid === -1 && (r.audioPid = c);
        break;
      case 21:
        r.id3Pid === -1 && (r.id3Pid = c);
        break;
      case 219:
        if (!s) {
          Hs("H.264");
          break;
        }
      case 27:
        r.videoPid === -1 && (r.videoPid = c, r.segmentVideoCodec = "avc");
        break;
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? A.log("MPEG audio found, not supported in this browser") : r.audioPid === -1 && (r.audioPid = c, r.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!s) {
          Hs("AC-3");
          break;
        }
      case 129:
        t.ac3 ? r.audioPid === -1 && (r.audioPid = c, r.segmentAudioCodec = "ac3") : A.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (r.audioPid === -1 && d > 0) {
          let h = e + 5, u = d;
          for (; u > 2; ) {
            switch (n[h]) {
              case 106:
                t.ac3 !== !0 ? A.log("AC-3 audio found, not supported in this browser for now") : (r.audioPid = c, r.segmentAudioCodec = "ac3");
                break;
            }
            const g = n[h + 1] + 2;
            h += g, u -= g;
          }
        }
        break;
      case 194:
      case 135:
        return Rs(i, new Error("Unsupported EC-3 in M2TS found")), r;
      case 36:
        return Rs(i, new Error("Unsupported HEVC in M2TS found")), r;
    }
    e += d + 5;
  }
  return r;
}
function Rs(n, e, t) {
  A.warn(`parsing error: ${e.message}`), n.emit(y.ERROR, y.ERROR, {
    type: q.MEDIA_ERROR,
    details: D.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function Hs(n) {
  A.log(`${n} with AES-128-CBC encryption found in unencrypted stream`);
}
function Tt(n) {
  let e = 0, t, s, i, r, a;
  const o = n.data;
  if (!n || n.size === 0)
    return null;
  for (; o[0].length < 19 && o.length > 1; )
    o[0] = Pe(o[0], o[1]), o.splice(1, 1);
  if (t = o[0], (t[0] << 16) + (t[1] << 8) + t[2] === 1) {
    if (s = (t[4] << 8) + t[5], s && s > n.size - 6)
      return null;
    const c = t[7];
    c & 192 && (r = (t[9] & 14) * 536870912 + // 1 << 29
    (t[10] & 255) * 4194304 + // 1 << 22
    (t[11] & 254) * 16384 + // 1 << 14
    (t[12] & 255) * 128 + // 1 << 7
    (t[13] & 254) / 2, c & 64 ? (a = (t[14] & 14) * 536870912 + // 1 << 29
    (t[15] & 255) * 4194304 + // 1 << 22
    (t[16] & 254) * 16384 + // 1 << 14
    (t[17] & 255) * 128 + // 1 << 7
    (t[18] & 254) / 2, r - a > 60 * 9e4 && (A.warn(`${Math.round((r - a) / 9e4)}s delta between PTS and DTS, align them`), r = a)) : a = r), i = t[8];
    let d = i + 9;
    if (n.size <= d)
      return null;
    n.size -= d;
    const h = new Uint8Array(n.size);
    for (let u = 0, f = o.length; u < f; u++) {
      t = o[u];
      let g = t.byteLength;
      if (d)
        if (d > g) {
          d -= g;
          continue;
        } else
          t = t.subarray(d), g -= d, d = 0;
      h.set(t, e), e += g;
    }
    return s && (s -= i + 3), {
      data: h,
      pts: r,
      dts: a,
      len: s
    };
  }
  return null;
}
class yd extends Hi {
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = Gt(e, 0);
    let s = (t == null ? void 0 : t.length) || 0;
    if (t && e[s] === 11 && e[s + 1] === 119 && Ni(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    ba(e, s) <= 16)
      return !1;
    for (let i = e.length; s < i; s++)
      if (_a(e, s))
        return A.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return od(e, t);
  }
  appendFrame(e, t, s) {
    if (this.basePTS !== null)
      return La(e, t, s, this.basePTS, this.frameIndex);
  }
}
class Wn {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const nt = Math.pow(2, 32) - 1;
class R {
  static init() {
    R.types = {
      avc1: [],
      // codingname
      avcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in R.types)
      R.types.hasOwnProperty(e) && (R.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    R.HDLR_TYPES = {
      video: t,
      audio: s
    };
    const i = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), r = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    R.STTS = R.STSC = R.STCO = r, R.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), R.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), R.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), R.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
    R.FTYP = R.box(R.types.ftyp, a, l, a, o), R.DINF = R.box(R.types.dinf, R.box(R.types.dref, i));
  }
  static box(e, ...t) {
    let s = 8, i = t.length;
    const r = i;
    for (; i--; )
      s += t[i].byteLength;
    const a = new Uint8Array(s);
    for (a[0] = s >> 24 & 255, a[1] = s >> 16 & 255, a[2] = s >> 8 & 255, a[3] = s & 255, a.set(e, 4), i = 0, s = 8; i < r; i++)
      a.set(t[i], s), s += t[i].byteLength;
    return a;
  }
  static hdlr(e) {
    return R.box(R.types.hdlr, R.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return R.box(R.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const s = Math.floor(t / (nt + 1)), i = Math.floor(t % (nt + 1));
    return R.box(R.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return R.box(R.types.mdia, R.mdhd(e.timescale, e.duration), R.hdlr(e.type), R.minf(e));
  }
  static mfhd(e) {
    return R.box(R.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? R.box(R.types.minf, R.box(R.types.smhd, R.SMHD), R.DINF, R.stbl(e)) : R.box(R.types.minf, R.box(R.types.vmhd, R.VMHD), R.DINF, R.stbl(e));
  }
  static moof(e, t, s) {
    return R.box(R.types.moof, R.mfhd(e), R.traf(s, t));
  }
  static moov(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = R.trak(e[t]);
    return R.box.apply(null, [R.types.moov, R.mvhd(e[0].timescale, e[0].duration)].concat(s).concat(R.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = R.trex(e[t]);
    return R.box.apply(null, [R.types.mvex, ...s]);
  }
  static mvhd(e, t) {
    t *= e;
    const s = Math.floor(t / (nt + 1)), i = Math.floor(t % (nt + 1)), r = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return R.box(R.types.mvhd, r);
  }
  static sdtp(e) {
    const t = e.samples || [], s = new Uint8Array(4 + t.length);
    let i, r;
    for (i = 0; i < t.length; i++)
      r = t[i].flags, s[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
    return R.box(R.types.sdtp, s);
  }
  static stbl(e) {
    return R.box(R.types.stbl, R.stsd(e), R.box(R.types.stts, R.STTS), R.box(R.types.stsc, R.STSC), R.box(R.types.stsz, R.STSZ), R.box(R.types.stco, R.STCO));
  }
  static avc1(e) {
    let t = [], s = [], i, r, a;
    for (i = 0; i < e.sps.length; i++)
      r = e.sps[i], a = r.byteLength, t.push(a >>> 8 & 255), t.push(a & 255), t = t.concat(Array.prototype.slice.call(r));
    for (i = 0; i < e.pps.length; i++)
      r = e.pps[i], a = r.byteLength, s.push(a >>> 8 & 255), s.push(a & 255), s = s.concat(Array.prototype.slice.call(r));
    const o = R.box(R.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(s))), l = e.width, c = e.height, d = e.pixelRatio[0], h = e.pixelRatio[1];
    return R.box(
      R.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        l >> 8 & 255,
        l & 255,
        // width
        c >> 8 & 255,
        c & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      R.box(R.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      R.box(R.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        h >> 24,
        // vSpacing
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config.length;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      23 + t,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      15 + t,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5
      // descriptor_type
    ].concat([t]).concat(e.config).concat([6, 1, 2]));
  }
  static audioStsd(e) {
    const t = e.samplerate;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return R.box(R.types.mp4a, R.audioStsd(e), R.box(R.types.esds, R.esds(e)));
  }
  static mp3(e) {
    return R.box(R.types[".mp3"], R.audioStsd(e));
  }
  static ac3(e) {
    return R.box(R.types["ac-3"], R.audioStsd(e), R.box(R.types.dac3, e.config));
  }
  static stsd(e) {
    return e.type === "audio" ? e.segmentCodec === "mp3" && e.codec === "mp3" ? R.box(R.types.stsd, R.STSD, R.mp3(e)) : e.segmentCodec === "ac3" ? R.box(R.types.stsd, R.STSD, R.ac3(e)) : R.box(R.types.stsd, R.STSD, R.mp4a(e)) : R.box(R.types.stsd, R.STSD, R.avc1(e));
  }
  static tkhd(e) {
    const t = e.id, s = e.duration * e.timescale, i = e.width, r = e.height, a = Math.floor(s / (nt + 1)), o = Math.floor(s % (nt + 1));
    return R.box(R.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      a >> 24,
      a >> 16 & 255,
      a >> 8 & 255,
      a & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      i >> 8 & 255,
      i & 255,
      0,
      0,
      // width
      r >> 8 & 255,
      r & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const s = R.sdtp(e), i = e.id, r = Math.floor(t / (nt + 1)), a = Math.floor(t % (nt + 1));
    return R.box(
      R.types.traf,
      R.box(R.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        i >> 24,
        i >> 16 & 255,
        i >> 8 & 255,
        i & 255
        // track_ID
      ])),
      R.box(R.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255,
        a >> 24,
        a >> 16 & 255,
        a >> 8 & 255,
        a & 255
      ])),
      R.trun(e, s.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      s
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, R.box(R.types.trak, R.tkhd(e), R.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return R.box(R.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const s = e.samples || [], i = s.length, r = 12 + 16 * i, a = new Uint8Array(r);
    let o, l, c, d, h, u;
    for (t += 8 + r, a.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      i >>> 24 & 255,
      i >>> 16 & 255,
      i >>> 8 & 255,
      i & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < i; o++)
      l = s[o], c = l.duration, d = l.size, h = l.flags, u = l.cts, a.set([
        c >>> 24 & 255,
        c >>> 16 & 255,
        c >>> 8 & 255,
        c & 255,
        // sample_duration
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255,
        // sample_size
        h.isLeading << 2 | h.dependsOn,
        h.isDependedOn << 6 | h.hasRedundancy << 4 | h.paddingValue << 1 | h.isNonSync,
        h.degradPrio & 61440,
        h.degradPrio & 15,
        // sample_flags
        u >>> 24 & 255,
        u >>> 16 & 255,
        u >>> 8 & 255,
        u & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return R.box(R.types.trun, a);
  }
  static initSegment(e) {
    R.types || R.init();
    const t = R.moov(e);
    return Pe(R.FTYP, t);
  }
}
R.types = void 0;
R.HDLR_TYPES = void 0;
R.STTS = void 0;
R.STSC = void 0;
R.STCO = void 0;
R.STSZ = void 0;
R.VMHD = void 0;
R.SMHD = void 0;
R.STSD = void 0;
R.FTYP = void 0;
R.DINF = void 0;
const Da = 9e4;
function Wi(n, e, t = 1, s = !1) {
  const i = n * e * t;
  return s ? Math.round(i) : i;
}
function xd(n, e, t = 1, s = !1) {
  return Wi(n, e, 1 / t, s);
}
function Nt(n, e = !1) {
  return Wi(n, 1e3, 1 / Da, e);
}
function Ed(n, e = 1) {
  return Wi(n, Da, 1 / e);
}
const Td = 10 * 1e3, Yn = 1024, vd = 1152, Sd = 1536;
let vt = null, Ks = null;
class cs {
  constructor(e, t, s, i = "") {
    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.ISGenerated = !1, vt === null) {
      const a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      vt = a ? parseInt(a[1]) : 0;
    }
    if (Ks === null) {
      const r = navigator.userAgent.match(/Safari\/(\d+)/i);
      Ks = r ? parseInt(r[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    A.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    A.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    A.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = !1;
    const s = e.reduce((i, r) => {
      const a = r.pts - i;
      return a < -4294967296 ? (t = !0, ke(i, r.pts)) : a > 0 ? i : r.pts;
    }, e[0].pts);
    return t && A.debug("PTS rollover detected"), s;
  }
  remux(e, t, s, i, r, a, o, l) {
    let c, d, h, u, f, g, m = r, p = r;
    const x = e.pid > -1, S = t.pid > -1, T = t.samples.length, C = e.samples.length > 0, E = o && T > 0 || T > 1;
    if ((!x || C) && (!S || E) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var _, I, P, b;
        const F = this.videoTrackConfig;
        F && (t.width !== F.width || t.height !== F.height || ((_ = t.pixelRatio) == null ? void 0 : _[0]) !== ((I = F.pixelRatio) == null ? void 0 : I[0]) || ((P = t.pixelRatio) == null ? void 0 : P[1]) !== ((b = F.pixelRatio) == null ? void 0 : b[1])) && this.resetInitSegment();
      } else
        h = this.generateIS(e, t, r, a);
      const w = this.isVideoContiguous;
      let G = -1, O;
      if (E && (G = Ad(t.samples), !w && this.config.forceKeyFrameOnDiscontinuity))
        if (g = !0, G > 0) {
          A.warn(`[mp4-remuxer]: Dropped ${G} out of ${T} video samples due to a missing keyframe`);
          const F = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(G), t.dropped += G, p += (t.samples[0].pts - F) / t.inputTimeScale, O = p;
        } else G === -1 && (A.warn(`[mp4-remuxer]: No keyframe found out of ${T} video samples`), g = !1);
      if (this.ISGenerated) {
        if (C && E) {
          const F = this.getVideoStartPts(t.samples), N = (ke(e.samples[0].pts, F) - F) / t.inputTimeScale;
          m += Math.max(0, N), p += Math.max(0, -N);
        }
        if (C) {
          if (e.samplerate || (A.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h = this.generateIS(e, t, r, a)), d = this.remuxAudio(e, m, this.isAudioContiguous, a, S || E || l === Y.AUDIO ? p : void 0), E) {
            const F = d ? d.endPTS - d.startPTS : 0;
            t.inputTimeScale || (A.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h = this.generateIS(e, t, r, a)), c = this.remuxVideo(t, p, w, F);
          }
        } else E && (c = this.remuxVideo(t, p, w, 0));
        c && (c.firstKeyFrame = G, c.independent = G !== -1, c.firstKeyFramePTS = O);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (f = wa(s, r, this._initPTS, this._initDTS)), i.samples.length && (u = ka(i, r, this._initPTS))), {
      audio: d,
      video: c,
      initSegment: h,
      independent: g,
      text: u,
      id3: f
    };
  }
  generateIS(e, t, s, i) {
    const r = e.samples, a = t.samples, o = this.typeSupported, l = {}, c = this._initPTS;
    let d = !c || i, h = "audio/mp4", u, f, g;
    if (d && (u = f = 1 / 0), e.config && r.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (h = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      l.audio = {
        id: "audio",
        container: h,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : R.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, d && (g = e.inputTimeScale, !c || g !== c.timescale ? u = f = r[0].pts - Math.round(g * s) : d = !1);
    }
    if (t.sps && t.pps && a.length) {
      if (t.timescale = t.inputTimeScale, l.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: R.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, d)
        if (g = t.inputTimeScale, !c || g !== c.timescale) {
          const m = this.getVideoStartPts(a), p = Math.round(g * s);
          f = Math.min(f, ke(a[0].dts, m) - p), u = Math.min(u, m - p);
        } else
          d = !1;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(l).length)
      return this.ISGenerated = !0, d ? (this._initPTS = {
        baseTime: u,
        timescale: g
      }, this._initDTS = {
        baseTime: f,
        timescale: g
      }) : u = g = void 0, {
        tracks: l,
        initPTS: u,
        timescale: g
      };
  }
  remuxVideo(e, t, s, i) {
    const r = e.inputTimeScale, a = e.samples, o = [], l = a.length, c = this._initPTS;
    let d = this.nextAvcDts, h = 8, u = this.videoSampleDuration, f, g, m = Number.POSITIVE_INFINITY, p = Number.NEGATIVE_INFINITY, x = !1;
    if (!s || d === null) {
      const M = t * r, B = a[0].pts - ke(a[0].dts, a[0].pts);
      vt && d !== null && Math.abs(M - B - d) < 15e3 ? s = !0 : d = M - B;
    }
    const S = c.baseTime * r / c.timescale;
    for (let M = 0; M < l; M++) {
      const B = a[M];
      B.pts = ke(B.pts - S, d), B.dts = ke(B.dts - S, d), B.dts < a[M > 0 ? M - 1 : M].dts && (x = !0);
    }
    x && a.sort(function(M, B) {
      const X = M.dts - B.dts, j = M.pts - B.pts;
      return X || j;
    }), f = a[0].dts, g = a[a.length - 1].dts;
    const T = g - f, C = T ? Math.round(T / (l - 1)) : u || e.inputTimeScale / 30;
    if (s) {
      const M = f - d, B = M > C, X = M < -1;
      if ((B || X) && (B ? A.warn(`AVC: ${Nt(M, !0)} ms (${M}dts) hole between fragments detected at ${t.toFixed(3)}`) : A.warn(`AVC: ${Nt(-M, !0)} ms (${M}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !X || d >= a[0].pts || vt)) {
        f = d;
        const j = a[0].pts - M;
        if (B)
          a[0].dts = f, a[0].pts = j;
        else
          for (let Q = 0; Q < a.length && !(a[Q].dts > j); Q++)
            a[Q].dts -= M, a[Q].pts -= M;
        A.log(`Video: Initial PTS/DTS adjusted: ${Nt(j, !0)}/${Nt(f, !0)}, delta: ${Nt(M, !0)} ms`);
      }
    }
    f = Math.max(0, f);
    let E = 0, L = 0, _ = f;
    for (let M = 0; M < l; M++) {
      const B = a[M], X = B.units, j = X.length;
      let Q = 0;
      for (let se = 0; se < j; se++)
        Q += X[se].data.length;
      L += Q, E += j, B.length = Q, B.dts < _ ? (B.dts = _, _ += C / 4 | 0 || 1) : _ = B.dts, m = Math.min(B.pts, m), p = Math.max(B.pts, p);
    }
    g = a[l - 1].dts;
    const I = L + 4 * E + 8;
    let P;
    try {
      P = new Uint8Array(I);
    } catch (M) {
      this.observer.emit(y.ERROR, y.ERROR, {
        type: q.MUX_ERROR,
        details: D.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: M,
        bytes: I,
        reason: `fail allocating video mdat ${I}`
      });
      return;
    }
    const b = new DataView(P.buffer);
    b.setUint32(0, I), P.set(R.types.mdat, 4);
    let w = !1, G = Number.POSITIVE_INFINITY, O = Number.POSITIVE_INFINITY, F = Number.NEGATIVE_INFINITY, U = Number.NEGATIVE_INFINITY;
    for (let M = 0; M < l; M++) {
      const B = a[M], X = B.units;
      let j = 0;
      for (let le = 0, de = X.length; le < de; le++) {
        const Ae = X[le], ct = Ae.data, Ot = Ae.data.byteLength;
        b.setUint32(h, Ot), h += 4, P.set(ct, h), h += Ot, j += 4 + Ot;
      }
      let Q;
      if (M < l - 1)
        u = a[M + 1].dts - B.dts, Q = a[M + 1].pts - B.pts;
      else {
        const le = this.config, de = M > 0 ? B.dts - a[M - 1].dts : C;
        if (Q = M > 0 ? B.pts - a[M - 1].pts : C, le.stretchShortVideoTrack && this.nextAudioPts !== null) {
          const Ae = Math.floor(le.maxBufferHole * r), ct = (i ? m + i * r : this.nextAudioPts) - B.pts;
          ct > Ae ? (u = ct - de, u < 0 ? u = de : w = !0, A.log(`[mp4-remuxer]: It is approximately ${ct / 90} ms to the next segment; using duration ${u / 90} ms for the last video frame.`)) : u = de;
        } else
          u = de;
      }
      const se = Math.round(B.pts - B.dts);
      G = Math.min(G, u), F = Math.max(F, u), O = Math.min(O, Q), U = Math.max(U, Q), o.push(new qn(B.key, u, j, se));
    }
    if (o.length) {
      if (vt) {
        if (vt < 70) {
          const M = o[0].flags;
          M.dependsOn = 2, M.isNonSync = 0;
        }
      } else if (Ks && U - O < F - G && C / F < 0.025 && o[0].cts === 0) {
        A.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let M = f;
        for (let B = 0, X = o.length; B < X; B++) {
          const j = M + o[B].duration, Q = M + o[B].cts;
          if (B < X - 1) {
            const se = j + o[B + 1].cts;
            o[B].duration = se - Q;
          } else
            o[B].duration = B ? o[B - 1].duration : C;
          o[B].cts = 0, M = j;
        }
      }
    }
    u = w || !u ? C : u, this.nextAvcDts = d = g + u, this.videoSampleDuration = u, this.isVideoContiguous = !0;
    const V = {
      data1: R.moof(e.sequenceNumber++, f, fe({}, e, {
        samples: o
      })),
      data2: P,
      startPTS: m / r,
      endPTS: (p + u) / r,
      startDTS: f / r,
      endDTS: d / r,
      type: "video",
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, V;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return vd;
      case "ac3":
        return Sd;
      default:
        return Yn;
    }
  }
  remuxAudio(e, t, s, i, r) {
    const a = e.inputTimeScale, o = e.samplerate ? e.samplerate : a, l = a / o, c = this.getSamplesPerFrame(e), d = c * l, h = this._initPTS, u = e.segmentCodec === "mp3" && this.typeSupported.mpeg, f = [], g = r !== void 0;
    let m = e.samples, p = u ? 0 : 8, x = this.nextAudioPts || -1;
    const S = t * a, T = h.baseTime * a / h.timescale;
    if (this.isAudioContiguous = s = s || m.length && x > 0 && (i && Math.abs(S - x) < 9e3 || Math.abs(ke(m[0].pts - T, S) - x) < 20 * d), m.forEach(function(N) {
      N.pts = ke(N.pts - T, S);
    }), !s || x < 0) {
      if (m = m.filter((N) => N.pts >= 0), !m.length)
        return;
      r === 0 ? x = 0 : i && !g ? x = Math.max(0, S) : x = m[0].pts;
    }
    if (e.segmentCodec === "aac") {
      const N = this.config.maxAudioFramesDrift;
      for (let H = 0, V = x; H < m.length; H++) {
        const M = m[H], B = M.pts, X = B - V, j = Math.abs(1e3 * X / a);
        if (X <= -N * d && g)
          H === 0 && (A.warn(`Audio frame @ ${(B / a).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3 * X / a)} ms.`), this.nextAudioPts = x = V = B);
        else if (X >= N * d && j < Td && g) {
          let Q = Math.round(X / d);
          V = B - Q * d, V < 0 && (Q--, V += d), H === 0 && (this.nextAudioPts = x = V), A.warn(`[mp4-remuxer]: Injecting ${Q} audio frame @ ${(V / a).toFixed(3)}s due to ${Math.round(1e3 * X / a)} ms gap.`);
          for (let se = 0; se < Q; se++) {
            const le = Math.max(V, 0);
            let de = Wn.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
            de || (A.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), de = M.unit.subarray()), m.splice(H, 0, {
              unit: de,
              pts: le
            }), V += d, H++;
          }
        }
        M.pts = V, V += d;
      }
    }
    let C = null, E = null, L, _ = 0, I = m.length;
    for (; I--; )
      _ += m[I].unit.byteLength;
    for (let N = 0, H = m.length; N < H; N++) {
      const V = m[N], M = V.unit;
      let B = V.pts;
      if (E !== null) {
        const j = f[N - 1];
        j.duration = Math.round((B - E) / l);
      } else if (s && e.segmentCodec === "aac" && (B = x), C = B, _ > 0) {
        _ += p;
        try {
          L = new Uint8Array(_);
        } catch (j) {
          this.observer.emit(y.ERROR, y.ERROR, {
            type: q.MUX_ERROR,
            details: D.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: j,
            bytes: _,
            reason: `fail allocating audio mdat ${_}`
          });
          return;
        }
        u || (new DataView(L.buffer).setUint32(0, _), L.set(R.types.mdat, 4));
      } else
        return;
      L.set(M, p);
      const X = M.byteLength;
      p += X, f.push(new qn(!0, c, X, 0)), E = B;
    }
    const P = f.length;
    if (!P)
      return;
    const b = f[f.length - 1];
    this.nextAudioPts = x = E + l * b.duration;
    const w = u ? new Uint8Array(0) : R.moof(e.sequenceNumber++, C / l, fe({}, e, {
      samples: f
    }));
    e.samples = [];
    const G = C / a, O = x / a, U = {
      data1: w,
      data2: L,
      startPTS: G,
      endPTS: O,
      startDTS: G,
      endDTS: O,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: P
    };
    return this.isAudioContiguous = !0, U;
  }
  remuxEmptyAudio(e, t, s, i) {
    const r = e.inputTimeScale, a = e.samplerate ? e.samplerate : r, o = r / a, l = this.nextAudioPts, c = this._initDTS, d = c.baseTime * 9e4 / c.timescale, h = (l !== null ? l : i.startDTS * r) + d, u = i.endDTS * r + d, f = o * Yn, g = Math.ceil((u - h) / f), m = Wn.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
    if (A.warn("[mp4-remuxer]: remux empty Audio"), !m) {
      A.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
      return;
    }
    const p = [];
    for (let x = 0; x < g; x++) {
      const S = h + x * f;
      p.push({
        unit: m,
        pts: S,
        dts: S
      });
    }
    return e.samples = p, this.remuxAudio(e, t, s, !1);
  }
}
function ke(n, e) {
  let t;
  if (e === null)
    return n;
  for (e < n ? t = -8589934592 : t = 8589934592; Math.abs(n - e) > 4294967296; )
    n += t;
  return n;
}
function Ad(n) {
  for (let e = 0; e < n.length; e++)
    if (n[e].key)
      return e;
  return -1;
}
function wa(n, e, t, s) {
  const i = n.samples.length;
  if (!i)
    return;
  const r = n.inputTimeScale;
  for (let o = 0; o < i; o++) {
    const l = n.samples[o];
    l.pts = ke(l.pts - t.baseTime * r / t.timescale, e * r) / r, l.dts = ke(l.dts - s.baseTime * r / s.timescale, e * r) / r;
  }
  const a = n.samples;
  return n.samples = [], {
    samples: a
  };
}
function ka(n, e, t) {
  const s = n.samples.length;
  if (!s)
    return;
  const i = n.inputTimeScale;
  for (let a = 0; a < s; a++) {
    const o = n.samples[a];
    o.pts = ke(o.pts - t.baseTime * i / t.timescale, e * i) / i;
  }
  n.samples.sort((a, o) => a.pts - o.pts);
  const r = n.samples;
  return n.samples = [], {
    samples: r
  };
}
class qn {
  constructor(e, t, s, i) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = s, this.cts = i, this.flags = {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: e ? 2 : 1,
      isNonSync: e ? 0 : 1
    };
  }
}
class Ld {
  constructor() {
    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.lastEndTime = null;
  }
  resetNextTimestamp() {
    this.lastEndTime = null;
  }
  resetInitSegment(e, t, s, i) {
    this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(Dl(e, i)), this.emitInitSegment = !0;
  }
  generateInitSegment(e) {
    let {
      audioCodec: t,
      videoCodec: s
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const i = this.initData = ia(e);
    i.audio && (t = zn(i.audio, ee.AUDIO)), i.video && (s = zn(i.video, ee.VIDEO));
    const r = {};
    i.audio && i.video ? r.audiovideo = {
      container: "video/mp4",
      codec: t + "," + s,
      initSegment: e,
      id: "main"
    } : i.audio ? r.audio = {
      container: "audio/mp4",
      codec: t,
      initSegment: e,
      id: "audio"
    } : i.video ? r.video = {
      container: "video/mp4",
      codec: s,
      initSegment: e,
      id: "main"
    } : A.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = r;
  }
  remux(e, t, s, i, r, a) {
    var o, l;
    let {
      initPTS: c,
      lastEndTime: d
    } = this;
    const h = {
      audio: void 0,
      video: void 0,
      text: i,
      id3: s,
      initSegment: void 0
    };
    $(d) || (d = this.lastEndTime = r || 0);
    const u = t.samples;
    if (!(u != null && u.length))
      return h;
    const f = {
      initPTS: void 0,
      timescale: 1
    };
    let g = this.initData;
    if ((o = g) != null && o.length || (this.generateInitSegment(u), g = this.initData), !((l = g) != null && l.length))
      return A.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h;
    this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1);
    const m = kl(u, g), p = wl(g, u), x = p === null ? r : p;
    (Cd(c, x, r, m) || f.timescale !== c.timescale && a) && (f.initPTS = x - r, c && c.timescale === 1 && A.warn(`Adjusting initPTS by ${f.initPTS - c.baseTime}`), this.initPTS = c = {
      baseTime: f.initPTS,
      timescale: 1
    });
    const S = e ? x - c.baseTime / c.timescale : d, T = S + m;
    Ol(g, u, c.baseTime / c.timescale), m > 0 ? this.lastEndTime = T : (A.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const C = !!g.audio, E = !!g.video;
    let L = "";
    C && (L += "audio"), E && (L += "video");
    const _ = {
      data1: u,
      startPTS: S,
      startDTS: S,
      endPTS: T,
      endDTS: T,
      type: L,
      hasAudio: C,
      hasVideo: E,
      nb: 1,
      dropped: 0
    };
    return h.audio = _.type === "audio" ? _ : void 0, h.video = _.type !== "audio" ? _ : void 0, h.initSegment = f, h.id3 = wa(s, r, c, c), i.samples.length && (h.text = ka(i, r, c)), h;
  }
}
function Cd(n, e, t, s) {
  if (n === null)
    return !0;
  const i = Math.max(s, 1), r = e - n.baseTime / n.timescale;
  return Math.abs(r - t) > i;
}
function zn(n, e) {
  const t = n == null ? void 0 : n.codec;
  if (t && t.length > 4)
    return t;
  if (e === ee.AUDIO) {
    if (t === "ec-3" || t === "ac-3" || t === "alac")
      return t;
    if (t === "fLaC" || t === "Opus")
      return Es(t, !1);
    const s = "mp4a.40.5";
    return A.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${s}"`), s;
  }
  return A.warn(`Unhandled video codec "${t}"`), t === "hvc1" || t === "hev1" ? "hvc1.1.6.L120.90" : t === "av01" ? "av01.0.04M.08" : "avc1.42e01e";
}
let et;
try {
  et = self.performance.now.bind(self.performance);
} catch {
  A.debug("Unable to use Performance API on this environment"), et = Rt == null ? void 0 : Rt.Date.now;
}
const ds = [{
  demux: dd,
  remux: Ld
}, {
  demux: rt,
  remux: cs
}, {
  demux: ld,
  remux: cs
}, {
  demux: yd,
  remux: cs
}];
ds.splice(2, 0, {
  demux: hd,
  remux: cs
});
class Xn {
  constructor(e, t, s, i, r) {
    this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.vendor = i, this.id = r;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, s, i) {
    const r = s.transmuxing;
    r.executeStart = et();
    let a = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: l
    } = this;
    i && (this.currentTransmuxState = i);
    const {
      contiguous: c,
      discontinuity: d,
      trackSwitch: h,
      accurateTimeOffset: u,
      timeOffset: f,
      initSegmentChange: g
    } = i || o, {
      audioCodec: m,
      videoCodec: p,
      defaultInitPts: x,
      duration: S,
      initSegmentData: T
    } = l, C = Rd(a, t);
    if (C && C.method === "AES-128") {
      const I = this.getDecrypter();
      if (I.isSync()) {
        let P = I.softwareDecrypt(a, C.key.buffer, C.iv.buffer);
        if (s.part > -1 && (P = I.flush()), !P)
          return r.executeEnd = et(), js(s);
        a = new Uint8Array(P);
      } else
        return this.decryptionPromise = I.webCryptoDecrypt(a, C.key.buffer, C.iv.buffer).then((P) => {
          const b = this.push(P, null, s);
          return this.decryptionPromise = null, b;
        }), this.decryptionPromise;
    }
    const E = this.needsProbing(d, h);
    if (E) {
      const I = this.configureTransmuxer(a);
      if (I)
        return A.warn(`[transmuxer] ${I.message}`), this.observer.emit(y.ERROR, y.ERROR, {
          type: q.MEDIA_ERROR,
          details: D.FRAG_PARSING_ERROR,
          fatal: !1,
          error: I,
          reason: I.message
        }), r.executeEnd = et(), js(s);
    }
    (d || h || g || E) && this.resetInitSegment(T, m, p, S, t), (d || g || E) && this.resetInitialTimestamp(x), c || this.resetContiguity();
    const L = this.transmux(a, C, f, u, s), _ = this.currentTransmuxState;
    return _.contiguous = !0, _.discontinuity = !1, _.trackSwitch = !1, r.executeEnd = et(), L;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = et();
    const {
      decrypter: s,
      currentTransmuxState: i,
      decryptionPromise: r
    } = this;
    if (r)
      return r.then(() => this.flush(e));
    const a = [], {
      timeOffset: o
    } = i;
    if (s) {
      const h = s.flush();
      h && a.push(this.push(h, null, e));
    }
    const {
      demuxer: l,
      remuxer: c
    } = this;
    if (!l || !c)
      return t.executeEnd = et(), [js(e)];
    const d = l.flush(o);
    return hs(d) ? d.then((h) => (this.flushRemux(a, h, e), a)) : (this.flushRemux(a, d, e), a);
  }
  flushRemux(e, t, s) {
    const {
      audioTrack: i,
      videoTrack: r,
      id3Track: a,
      textTrack: o
    } = t, {
      accurateTimeOffset: l,
      timeOffset: c
    } = this.currentTransmuxState;
    A.log(`[transmuxer.ts]: Flushed fragment ${s.sn}${s.part > -1 ? " p: " + s.part : ""} of level ${s.level}`);
    const d = this.remuxer.remux(i, r, a, o, c, l, !0, this.id);
    e.push({
      remuxResult: d,
      chunkMeta: s
    }), s.transmuxing.executeEnd = et();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: s
    } = this;
    !t || !s || (t.resetTimeStamp(e), s.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, s, i, r) {
    const {
      demuxer: a,
      remuxer: o
    } = this;
    !a || !o || (a.resetInitSegment(e, t, s, i), o.resetInitSegment(e, t, s, r));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, s, i, r) {
    let a;
    return t && t.method === "SAMPLE-AES" ? a = this.transmuxSampleAes(e, t, s, i, r) : a = this.transmuxUnencrypted(e, s, i, r), a;
  }
  transmuxUnencrypted(e, t, s, i) {
    const {
      audioTrack: r,
      videoTrack: a,
      id3Track: o,
      textTrack: l
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(r, a, o, l, t, s, !1, this.id),
      chunkMeta: i
    };
  }
  transmuxSampleAes(e, t, s, i, r) {
    return this.demuxer.demuxSampleAes(e, t, s).then((a) => ({
      remuxResult: this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, s, i, !1, this.id),
      chunkMeta: r
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: s,
      typeSupported: i,
      vendor: r
    } = this;
    let a;
    for (let u = 0, f = ds.length; u < f; u++) {
      var o;
      if ((o = ds[u].demux) != null && o.probe(e)) {
        a = ds[u];
        break;
      }
    }
    if (!a)
      return new Error("Failed to find demuxer by probing fragment data");
    const l = this.demuxer, c = this.remuxer, d = a.remux, h = a.demux;
    (!c || !(c instanceof d)) && (this.remuxer = new d(s, t, i, r)), (!l || !(l instanceof h)) && (this.demuxer = new h(s, t, i), this.probe = h.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new Gi(this.config)), e;
  }
}
function Rd(n, e) {
  let t = null;
  return n.byteLength > 0 && (e == null ? void 0 : e.key) != null && e.iv !== null && e.method != null && (t = e), t;
}
const js = (n) => ({
  remuxResult: {},
  chunkMeta: n
});
function hs(n) {
  return "then" in n && n.then instanceof Function;
}
class _d {
  constructor(e, t, s, i, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = i, this.defaultInitPts = r || null;
  }
}
class bd {
  constructor(e, t, s, i, r, a) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = r, this.initSegmentChange = a;
  }
}
var Pa = { exports: {} };
(function(n) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (t = !1));
  function i(l, c, d) {
    this.fn = l, this.context = c, this.once = d || !1;
  }
  function r(l, c, d, h, u) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var f = new i(d, h || l, u), g = t ? t + c : c;
    return l._events[g] ? l._events[g].fn ? l._events[g] = [l._events[g], f] : l._events[g].push(f) : (l._events[g] = f, l._eventsCount++), l;
  }
  function a(l, c) {
    --l._eventsCount === 0 ? l._events = new s() : delete l._events[c];
  }
  function o() {
    this._events = new s(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var c = [], d, h;
    if (this._eventsCount === 0) return c;
    for (h in d = this._events)
      e.call(d, h) && c.push(t ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(d)) : c;
  }, o.prototype.listeners = function(c) {
    var d = t ? t + c : c, h = this._events[d];
    if (!h) return [];
    if (h.fn) return [h.fn];
    for (var u = 0, f = h.length, g = new Array(f); u < f; u++)
      g[u] = h[u].fn;
    return g;
  }, o.prototype.listenerCount = function(c) {
    var d = t ? t + c : c, h = this._events[d];
    return h ? h.fn ? 1 : h.length : 0;
  }, o.prototype.emit = function(c, d, h, u, f, g) {
    var m = t ? t + c : c;
    if (!this._events[m]) return !1;
    var p = this._events[m], x = arguments.length, S, T;
    if (p.fn) {
      switch (p.once && this.removeListener(c, p.fn, void 0, !0), x) {
        case 1:
          return p.fn.call(p.context), !0;
        case 2:
          return p.fn.call(p.context, d), !0;
        case 3:
          return p.fn.call(p.context, d, h), !0;
        case 4:
          return p.fn.call(p.context, d, h, u), !0;
        case 5:
          return p.fn.call(p.context, d, h, u, f), !0;
        case 6:
          return p.fn.call(p.context, d, h, u, f, g), !0;
      }
      for (T = 1, S = new Array(x - 1); T < x; T++)
        S[T - 1] = arguments[T];
      p.fn.apply(p.context, S);
    } else {
      var C = p.length, E;
      for (T = 0; T < C; T++)
        switch (p[T].once && this.removeListener(c, p[T].fn, void 0, !0), x) {
          case 1:
            p[T].fn.call(p[T].context);
            break;
          case 2:
            p[T].fn.call(p[T].context, d);
            break;
          case 3:
            p[T].fn.call(p[T].context, d, h);
            break;
          case 4:
            p[T].fn.call(p[T].context, d, h, u);
            break;
          default:
            if (!S) for (E = 1, S = new Array(x - 1); E < x; E++)
              S[E - 1] = arguments[E];
            p[T].fn.apply(p[T].context, S);
        }
    }
    return !0;
  }, o.prototype.on = function(c, d, h) {
    return r(this, c, d, h, !1);
  }, o.prototype.once = function(c, d, h) {
    return r(this, c, d, h, !0);
  }, o.prototype.removeListener = function(c, d, h, u) {
    var f = t ? t + c : c;
    if (!this._events[f]) return this;
    if (!d)
      return a(this, f), this;
    var g = this._events[f];
    if (g.fn)
      g.fn === d && (!u || g.once) && (!h || g.context === h) && a(this, f);
    else {
      for (var m = 0, p = [], x = g.length; m < x; m++)
        (g[m].fn !== d || u && !g[m].once || h && g[m].context !== h) && p.push(g[m]);
      p.length ? this._events[f] = p.length === 1 ? p[0] : p : a(this, f);
    }
    return this;
  }, o.prototype.removeAllListeners = function(c) {
    var d;
    return c ? (d = t ? t + c : c, this._events[d] && a(this, d)) : (this._events = new s(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, n.exports = o;
})(Pa);
var Id = Pa.exports, Yi = /* @__PURE__ */ Qo(Id);
class Oa {
  constructor(e, t, s, i) {
    this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
    const r = e.config;
    this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
    const a = (c, d) => {
      d = d || {}, d.frag = this.frag, d.id = this.id, c === y.ERROR && (this.error = d.error), this.hls.trigger(c, d);
    };
    this.observer = new Yi(), this.observer.on(y.FRAG_DECRYPTED, a), this.observer.on(y.ERROR, a);
    const o = mt(r.preferManagedMediaSource) || {
      isTypeSupported: () => !1
    }, l = {
      mpeg: o.isTypeSupported("audio/mpeg"),
      mp3: o.isTypeSupported('audio/mp4; codecs="mp3"'),
      ac3: o.isTypeSupported('audio/mp4; codecs="ac-3"')
    };
    if (this.useWorker && typeof Worker < "u" && (r.workerPath || qc())) {
      try {
        r.workerPath ? (A.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = Xc(r.workerPath)) : (A.log(`injecting Web Worker for "${t}"`), this.workerContext = zc()), this.onwmsg = (h) => this.onWorkerMessage(h);
        const {
          worker: d
        } = this.workerContext;
        d.addEventListener("message", this.onwmsg), d.onerror = (h) => {
          const u = new Error(`${h.message}  (${h.filename}:${h.lineno})`);
          r.enableWorker = !1, A.warn(`Error in "${t}" Web Worker, fallback to inline`), this.hls.trigger(y.ERROR, {
            type: q.OTHER_ERROR,
            details: D.INTERNAL_EXCEPTION,
            fatal: !1,
            event: "demuxerWorker",
            error: u
          });
        }, d.postMessage({
          cmd: "init",
          typeSupported: l,
          vendor: "",
          id: t,
          config: JSON.stringify(r)
        });
      } catch (d) {
        A.warn(`Error setting up "${t}" Web Worker, fallback to inline`, d), this.resetWorker(), this.error = null, this.transmuxer = new Xn(this.observer, l, r, "", t);
      }
      return;
    }
    this.transmuxer = new Xn(this.observer, l, r, "", t);
  }
  resetWorker() {
    if (this.workerContext) {
      const {
        worker: e,
        objectURL: t
      } = this.workerContext;
      t && self.URL.revokeObjectURL(t), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null;
    }
  }
  destroy() {
    if (this.workerContext)
      this.resetWorker(), this.onwmsg = void 0;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
  }
  push(e, t, s, i, r, a, o, l, c, d) {
    var h, u;
    c.transmuxing.start = self.performance.now();
    const {
      transmuxer: f
    } = this, g = a ? a.start : r.start, m = r.decryptdata, p = this.frag, x = !(p && r.cc === p.cc), S = !(p && c.level === p.level), T = p ? c.sn - p.sn : -1, C = this.part ? c.part - this.part.index : -1, E = T === 0 && c.id > 1 && c.id === (p == null ? void 0 : p.stats.chunkCount), L = !S && (T === 1 || T === 0 && (C === 1 || E && C <= 0)), _ = self.performance.now();
    (S || T || r.stats.parsing.start === 0) && (r.stats.parsing.start = _), a && (C || !L) && (a.stats.parsing.start = _);
    const I = !(p && ((h = r.initSegment) == null ? void 0 : h.url) === ((u = p.initSegment) == null ? void 0 : u.url)), P = new bd(x, L, l, S, g, I);
    if (!L || x || I) {
      A.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${x}
        trackSwitch: ${S}
        contiguous: ${L}
        accurateTimeOffset: ${l}
        timeOffset: ${g}
        initSegmentChange: ${I}`);
      const b = new _d(s, i, t, o, d);
      this.configureTransmuxer(b);
    }
    if (this.frag = r, this.part = a, this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "demux",
        data: e,
        decryptdata: m,
        chunkMeta: c,
        state: P
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (f) {
      const b = f.push(e, m, c, P);
      hs(b) ? (f.async = !0, b.then((w) => {
        this.handleTransmuxComplete(w);
      }).catch((w) => {
        this.transmuxerError(w, c, "transmuxer-interface push error");
      })) : (f.async = !1, this.handleTransmuxComplete(b));
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      transmuxer: t
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "flush",
        chunkMeta: e
      });
    else if (t) {
      let s = t.flush(e);
      hs(s) || t.async ? (hs(s) || (s = Promise.resolve(s)), s.then((r) => {
        this.handleFlushResult(r, e);
      }).catch((r) => {
        this.transmuxerError(r, e, "transmuxer-interface flush error");
      })) : this.handleFlushResult(s, e);
    }
  }
  transmuxerError(e, t, s) {
    this.hls && (this.error = e, this.hls.trigger(y.ERROR, {
      type: q.MEDIA_ERROR,
      details: D.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      fatal: !1,
      error: e,
      err: e,
      reason: s
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((s) => {
      this.handleTransmuxComplete(s);
    }), this.onFlush(t);
  }
  onWorkerMessage(e) {
    const t = e.data;
    if (!(t != null && t.event)) {
      A.warn(`worker message received with no ${t ? "event name" : "data"}`);
      return;
    }
    const s = this.hls;
    if (this.hls)
      switch (t.event) {
        case "init": {
          var i;
          const r = (i = this.workerContext) == null ? void 0 : i.objectURL;
          r && self.URL.revokeObjectURL(r);
          break;
        }
        case "transmuxComplete": {
          this.handleTransmuxComplete(t.data);
          break;
        }
        case "flush": {
          this.onFlush(t.data);
          break;
        }
        case "workerLog":
          A[t.data.logType] && A[t.data.logType](t.data.message);
          break;
        default: {
          t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, s.trigger(t.event, t.data);
          break;
        }
      }
  }
  configureTransmuxer(e) {
    const {
      transmuxer: t
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      cmd: "configure",
      config: e
    }) : t && t.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
function Fa(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!bt(n[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function bt(n, e, t) {
  const s = n["STABLE-RENDITION-ID"];
  return s && !t ? s === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((i) => n[i] !== e[i]);
}
function xi(n, e) {
  return e.label.toLowerCase() === n.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (n.lang || "").toLowerCase());
}
const Zn = 100;
class Dd extends Vi {
  constructor(e, t, s) {
    super(e, t, s, "[audio-stream-controller]", Y.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(y.ERROR, this.onError, this), e.on(y.BUFFER_RESET, this.onBufferReset, this), e.on(y.BUFFER_CREATED, this.onBufferCreated, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(y.ERROR, this.onError, this), e.off(y.BUFFER_RESET, this.onBufferReset, this), e.off(y.BUFFER_CREATED, this.onBufferCreated, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r
  }) {
    if (s === "main") {
      const a = t.cc;
      this.initPTS[t.cc] = {
        baseTime: i,
        timescale: r
      }, this.log(`InitPTS for cc: ${a} found from main: ${i}`), this.videoTrackCC = a, this.state === k.WAITING_INIT_PTS && this.tick();
    }
  }
  startLoad(e) {
    if (!this.levels) {
      this.startPosition = e, this.state = k.STOPPED;
      return;
    }
    const t = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(Zn), t > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t, this.state = k.IDLE) : (this.loadedmetadata = !1, this.state = k.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case k.IDLE:
        this.doTickIdle();
        break;
      case k.WAITING_TRACK: {
        var e;
        const {
          levels: s,
          trackId: i
        } = this, r = s == null || (e = s[i]) == null ? void 0 : e.details;
        if (r) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = k.WAITING_INIT_PTS;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY: {
        var t;
        const s = performance.now(), i = this.retryDate;
        if (!i || s >= i || (t = this.media) != null && t.seeking) {
          const {
            levels: r,
            trackId: a
          } = this;
          this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((r == null ? void 0 : r[a]) || null), this.state = k.IDLE;
        }
        break;
      }
      case k.WAITING_INIT_PTS: {
        const s = this.waitingData;
        if (s) {
          const {
            frag: i,
            part: r,
            cache: a,
            complete: o
          } = s;
          if (this.initPTS[i.cc] !== void 0) {
            this.waitingData = null, this.waitingVideoCC = -1, this.state = k.FRAG_LOADING;
            const l = a.flush(), c = {
              frag: i,
              part: r,
              payload: l,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(c), o && super._handleFragmentLoadComplete(c);
          } else if (this.videoTrackCC !== this.waitingVideoCC)
            this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
          else {
            const l = this.getLoadPosition(), c = ie.bufferInfo(this.mediaBuffer, l, this.config.maxBufferHole);
            pi(c.end, this.config.maxFragLookUpTolerance, i) < 0 && (this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${c.end} is needed`), this.clearWaitingFragment());
          }
        } else
          this.state = k.IDLE;
      }
    }
    this.onTickEnd();
  }
  clearWaitingFragment() {
    const e = this.waitingData;
    e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = k.IDLE);
  }
  resetLoadingState() {
    this.clearWaitingFragment(), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: e
    } = this;
    e != null && e.readyState && (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    const {
      hls: e,
      levels: t,
      media: s,
      trackId: i
    } = this, r = e.config;
    if (!s && (this.startFragRequested || !r.startFragPrefetch) || !(t != null && t[i]))
      return;
    const a = t[i], o = a.details;
    if (!o || o.live && this.levelLastLoaded !== a || this.waitForCdnTuneIn(o)) {
      this.state = k.WAITING_TRACK;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, ee.AUDIO, Y.AUDIO));
    const c = this.getFwdBufferInfo(l, Y.AUDIO);
    if (c === null)
      return;
    const {
      bufferedTrack: d,
      switchingTrack: h
    } = this;
    if (!h && this._streamEnded(c, o)) {
      e.trigger(y.BUFFER_EOS, {
        type: "audio"
      }), this.state = k.ENDED;
      return;
    }
    const u = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, Y.MAIN), f = c.len, g = this.getMaxBufferLength(u == null ? void 0 : u.len), m = o.fragments, p = m[0].start;
    let x = this.flushing ? this.getLoadPosition() : c.end;
    if (h && s) {
      const E = this.getLoadPosition();
      d && !bt(h.attrs, d.attrs) && (x = E), o.PTSKnown && E < p && (c.end > p || c.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), s.currentTime = p + 0.05);
    }
    if (f >= g && !h && x < m[m.length - 1].start)
      return;
    let S = this.getNextFragment(x, o), T = !1;
    if (S && this.isLoopLoading(S, x) && (T = !!S.gap, S = this.getNextFragmentLoopLoading(S, o, c, Y.MAIN, g)), !S) {
      this.bufferFlushed = !0;
      return;
    }
    const C = u && S.start > u.end + o.targetduration;
    if (C || // Or wait for main buffer after buffing some audio
    !(u != null && u.len) && c.len) {
      const E = this.getAppendedFrag(S.start, Y.MAIN);
      if (E === null || (T || (T = !!E.gap || !!C && u.len === 0), C && !T || T && c.nextStart && c.nextStart < E.end))
        return;
    }
    this.loadFragment(S, a, x);
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.min(Math.max(t, e), this.config.maxMaxBufferLength) : t;
  }
  onMediaDetaching() {
    this.videoBuffer = null, this.bufferFlushed = this.flushing = !1, super.onMediaDetaching();
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((s) => new _t(s));
  }
  onAudioTrackSwitching(e, t) {
    const s = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: i
    } = this;
    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? this.setInterval(Zn) : this.resetTransmuxer(), s ? (this.switchingTrack = t, this.state = k.IDLE, this.flushAudioIfNeeded(t)) : (this.switchingTrack = null, this.bufferedTrack = t, this.state = k.STOPPED), this.tick();
  }
  onManifestLoading() {
    this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = this.flushing = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details, this.cachedTrackLoadedData !== null && (this.hls.trigger(y.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
  }
  onAudioTrackLoaded(e, t) {
    var s;
    if (this.mainDetails == null) {
      this.cachedTrackLoadedData = t;
      return;
    }
    const {
      levels: i
    } = this, {
      details: r,
      id: a
    } = t;
    if (!i) {
      this.warn(`Audio tracks were reset while loading level ${a}`);
      return;
    }
    this.log(`Audio track ${a} loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`);
    const o = i[a];
    let l = 0;
    if (r.live || (s = o.details) != null && s.live) {
      this.checkLiveUpdate(r);
      const d = this.mainDetails;
      if (r.deltaUpdateFailed || !d)
        return;
      if (!o.details && r.hasProgramDateTime && d.hasProgramDateTime)
        Ls(r, d), l = r.fragments[0].start;
      else {
        var c;
        l = this.alignPlaylists(r, o.details, (c = this.levelLastLoaded) == null ? void 0 : c.details);
      }
    }
    o.details = r, this.levelLastLoaded = o, !this.startFragRequested && (this.mainDetails || !r.live) && this.setStartPosition(this.mainDetails || r, l), this.state === k.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = k.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const {
      frag: s,
      part: i,
      payload: r
    } = e, {
      config: a,
      trackId: o,
      levels: l
    } = this;
    if (!l) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const c = l[o];
    if (!c) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const d = c.details;
    if (!d) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const h = a.defaultAudioCodec || c.audioCodec || "mp4a.40.2";
    let u = this.transmuxer;
    u || (u = this.transmuxer = new Oa(this.hls, Y.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const f = this.initPTS[s.cc], g = (t = s.initSegment) == null ? void 0 : t.data;
    if (f !== void 0) {
      const p = i ? i.index : -1, x = p !== -1, S = new $i(s.level, s.sn, s.stats.chunkCount, r.byteLength, p, x);
      u.push(r, g, h, "", s, i, d.totalduration, !1, S, f);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${d.startSN} ,${d.endSN}],track ${o}`);
      const {
        cache: m
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: i,
        cache: new xa(),
        complete: !1
      };
      m.push(new Uint8Array(r)), this.waitingVideoCC = this.videoTrackCC, this.state = k.WAITING_INIT_PTS;
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1;
  }
  onBufferCreated(e, t) {
    const s = t.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer || null);
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.type !== Y.AUDIO) {
      if (!this.loadedmetadata && s.type === Y.MAIN) {
        const r = this.videoBuffer || this.media;
        r && ie.getBuffered(r).length && (this.loadedmetadata = !0);
      }
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (s.sn !== "initSegment") {
      this.fragPrevious = s;
      const r = this.switchingTrack;
      r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(y.AUDIO_TRACK_SWITCHED, ye({}, r)));
    }
    this.fragBufferedComplete(s, i);
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (t.details) {
      case D.FRAG_GAP:
      case D.FRAG_PARSING_ERROR:
      case D.FRAG_DECRYPT_ERROR:
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(Y.AUDIO, t);
        break;
      case D.AUDIO_TRACK_LOAD_ERROR:
      case D.AUDIO_TRACK_LOAD_TIMEOUT:
      case D.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === k.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === J.AUDIO_TRACK && (this.state = k.IDLE);
        break;
      case D.BUFFER_APPEND_ERROR:
      case D.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "audio")
          return;
        if (t.details === D.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case D.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushing(e, {
    type: t
  }) {
    t !== ee.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ee.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === k.ENDED && (this.state = k.IDLE);
      const s = this.mediaBuffer || this.media;
      s && (this.afterBufferFlushed(s, t, Y.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "audio", {
      hls: i
    } = this, {
      remuxResult: r,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: c,
      level: d
    } = o, {
      details: h
    } = d, {
      audio: u,
      text: f,
      id3: g,
      initSegment: m
    } = r;
    if (this.fragContextChanged(l) || !h) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = k.PARSING, this.switchingTrack && u && this.completeAudioSwitch(this.switchingTrack), m != null && m.tracks) {
      const p = l.initSegment || l;
      this._bufferInitSegment(d, m.tracks, p, a), i.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
        frag: p,
        id: s,
        tracks: m.tracks
      });
    }
    if (u) {
      const {
        startPTS: p,
        endPTS: x,
        startDTS: S,
        endDTS: T
      } = u;
      c && (c.elementaryStreams[ee.AUDIO] = {
        startPTS: p,
        endPTS: x,
        startDTS: S,
        endDTS: T
      }), l.setElementaryStreamInfo(ee.AUDIO, p, x, S, T), this.bufferFragmentData(u, l, c, a);
    }
    if (g != null && (t = g.samples) != null && t.length) {
      const p = fe({
        id: s,
        frag: l,
        details: h
      }, g);
      i.trigger(y.FRAG_PARSING_METADATA, p);
    }
    if (f) {
      const p = fe({
        id: s,
        frag: l,
        details: h
      }, f);
      i.trigger(y.FRAG_PARSING_USERDATA, p);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== k.PARSING)
      return;
    t.video && delete t.video;
    const r = t.audio;
    if (!r)
      return;
    r.id = "audio";
    const a = e.audioCodec;
    this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${a}/${r.codec}]`), a && a.split(",").length === 1 && (r.levelCodec = a), this.hls.trigger(y.BUFFER_CODECS, t);
    const o = r.initSegment;
    if (o != null && o.byteLength) {
      const l = {
        type: "audio",
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type,
        data: o
      };
      this.hls.trigger(y.BUFFER_APPENDING, l);
    }
    this.tickImmediate();
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    if (this.fragCurrent = e, this.switchingTrack || i === pe.NOT_LOADED || i === pe.PARTIAL) {
      var r;
      if (e.sn === "initSegment")
        this._loadInitSegment(e, t);
      else if ((r = t.details) != null && r.live && !this.initPTS[e.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = k.WAITING_INIT_PTS;
        const a = this.mainDetails;
        a && a.fragments[0].start !== t.details.fragments[0].start && Ls(t.details, a);
      } else
        this.startFragRequested = !0, super.loadFragment(e, t, s);
    } else
      this.clearTrackerIfNeeded(e);
  }
  flushAudioIfNeeded(e) {
    const {
      media: t,
      bufferedTrack: s
    } = this, i = s == null ? void 0 : s.attrs, r = e.attrs;
    t && i && (i.CHANNELS !== r.CHANNELS || s.name !== e.name || s.lang !== e.lang) && (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null);
  }
  completeAudioSwitch(e) {
    const {
      hls: t
    } = this;
    this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(y.AUDIO_TRACK_SWITCHED, ye({}, e));
  }
}
class wd extends Bi {
  constructor(e) {
    super(e, "[audio-track-controller]"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVEL_LOADING, this.onLevelLoading, this), e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(y.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== i) {
      this.warn(`Audio track with id:${s} and group:${i} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Audio track ${s} "${a.name}" lang:${a.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.audioGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((o) => (i == null ? void 0 : i.indexOf(o)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((u) => !s || s.indexOf(u.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((u) => u.default) && (this.selectDefaultTrack = !1), o.forEach((u, f) => {
          u.id = f;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const l = this.hls.config.audioPreference;
      if (!r && l) {
        const u = We(l, o, xt);
        if (u > -1)
          r = o[u];
        else {
          const f = We(l, this.tracks);
          r = this.tracks[f];
        }
      }
      let c = this.findTrackId(r);
      c === -1 && r && (c = this.findTrackId(null));
      const d = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(y.AUDIO_TRACKS_UPDATED, d);
      const h = this.trackId;
      if (c !== -1 && h === -1)
        this.setAudioTrack(c);
      else if (o.length && h === -1) {
        var a;
        const u = new Error(`No audio track selected for current audio group-ID(s): ${(a = this.groupIds) == null ? void 0 : a.join(",")} track count: ${o.length}`);
        this.warn(u.message), this.hls.trigger(y.ERROR, {
          type: q.MEDIA_ERROR,
          details: D.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: u
        });
      }
    } else this.shouldReloadPlaylist(r) && this.setAudioTrack(this.trackId);
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === J.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && (this.requestScheduled = -1, this.checkRetry(t));
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    this.selectDefaultTrack = !1, this.setAudioTrack(e);
  }
  setAudioOption(e) {
    const t = this.hls;
    if (t.config.audioPreference = e, e) {
      const s = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, s.length) {
        const i = this.currentTrack;
        if (i && Lt(e, i, xt))
          return i;
        const r = We(e, this.tracksInGroup, xt);
        if (r > -1) {
          const a = this.tracksInGroup[r];
          return this.setAudioTrack(r), a;
        } else if (i) {
          let a = t.loadLevel;
          a === -1 && (a = t.firstAutoLevel);
          const o = wc(e, t.levels, s, a, xt);
          if (o === -1)
            return null;
          t.nextLoadLevel = o;
        }
        if (e.channels || e.audioCodec) {
          const a = We(e, s);
          if (a > -1)
            return s[a];
        }
      }
    }
    return null;
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn(`Invalid audio track id: ${e}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e], r = i.details && !i.details.live;
    if (e === this.trackId && i === s && r || (this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`), this.trackId = e, this.currentTrack = i, this.hls.trigger(y.AUDIO_TRACK_SWITCHING, ye({}, i)), r))
      return;
    const a = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(a);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if (!(this.selectDefaultTrack && !i.default) && (!e || Lt(e, i, xt)))
        return s;
    }
    if (e) {
      const {
        name: s,
        lang: i,
        assocLang: r,
        characteristics: a,
        audioCodec: o,
        channels: l
      } = e;
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (Lt({
          name: s,
          lang: i,
          assocLang: r,
          characteristics: a,
          audioCodec: o,
          channels: l
        }, d, xt))
          return c;
      }
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (bt(e.attrs, d.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return c;
      }
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (bt(e.attrs, d.attrs, ["LANGUAGE"]))
          return c;
      }
    }
    return -1;
  }
  loadPlaylist(e) {
    const t = this.currentTrack;
    if (this.shouldLoadPlaylist(t) && t) {
      super.loadPlaylist();
      const s = t.id, i = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`loading audio-track playlist ${s} "${t.name}" lang:${t.lang} group:${i}`), this.clearTimer(), this.hls.trigger(y.AUDIO_TRACK_LOADING, {
        url: r,
        id: s,
        groupId: i,
        deliveryDirectives: e || null
      });
    }
  }
}
const Qn = 500;
class kd extends Vi {
  constructor(e, t, s) {
    super(e, t, s, "[subtitle-stream-controller]", Y.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.ERROR, this.onError, this), e.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.ERROR, this.onError, this), e.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  startLoad(e) {
    this.stopLoad(), this.state = k.IDLE, this.setInterval(Qn), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  onManifestLoading() {
    this.mainDetails = null, this.fragmentTracker.removeAllFragments();
  }
  onMediaDetaching() {
    this.tracksBuffered = [], super.onMediaDetaching();
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: s,
      success: i
    } = t;
    if (this.fragPrevious = s, this.state = k.IDLE, !i)
      return;
    const r = this.tracksBuffered[this.currentTrackId];
    if (!r)
      return;
    let a;
    const o = s.start;
    for (let c = 0; c < r.length; c++)
      if (o >= r[c].start && o <= r[c].end) {
        a = r[c];
        break;
      }
    const l = s.start + s.duration;
    a ? a.end = l : (a = {
      start: o,
      end: l
    }, r.push(a)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null);
  }
  onBufferFlushing(e, t) {
    const {
      startOffset: s,
      endOffset: i
    } = t;
    if (s === 0 && i !== Number.POSITIVE_INFINITY) {
      const r = i - 1;
      if (r <= 0)
        return;
      t.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach((a) => {
        for (let o = 0; o < a.length; ) {
          if (a[o].end <= r) {
            a.shift();
            continue;
          } else if (a[o].start < r)
            a[o].start = r;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(s, r, Y.SUBTITLE);
    }
  }
  onFragBuffered(e, t) {
    if (!this.loadedmetadata && t.frag.type === Y.MAIN) {
      var s;
      (s = this.media) != null && s.buffered.length && (this.loadedmetadata = !0);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const s = t.frag;
    (s == null ? void 0 : s.type) === Y.SUBTITLE && (t.details === D.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== k.STOPPED && (this.state = k.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (this.levels && Fa(this.levels, t)) {
      this.levels = t.map((s) => new _t(s));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((s) => {
      const i = new _t(s);
      return this.tracksBuffered[i.id] = [], i;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, Y.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    var s;
    if (this.currentTrackId = t.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const i = this.levels[this.currentTrackId];
    i != null && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.setInterval(Qn);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var s;
    const {
      currentTrackId: i,
      levels: r
    } = this, {
      details: a,
      id: o
    } = t;
    if (!r) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const l = r[o];
    if (o >= r.length || !l)
      return;
    this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let c = 0;
    if (a.live || (s = l.details) != null && s.live) {
      const h = this.mainDetails;
      if (a.deltaUpdateFailed || !h)
        return;
      const u = h.fragments[0];
      if (!l.details)
        a.hasProgramDateTime && h.hasProgramDateTime ? (Ls(a, h), c = a.fragments[0].start) : u && (c = u.start, mi(a, c));
      else {
        var d;
        c = this.alignPlaylists(a, l.details, (d = this.levelLastLoaded) == null ? void 0 : d.details), c === 0 && u && (c = u.start, mi(a, c));
      }
    }
    l.details = a, this.levelLastLoaded = l, o === i && (!this.startFragRequested && (this.mainDetails || !a.live) && this.setStartPosition(this.mainDetails || a, c), this.tick(), a.live && !this.fragCurrent && this.media && this.state === k.IDLE && (As(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: s
    } = e, i = t.decryptdata, r = this.hls;
    if (!this.fragContextChanged(t) && s && s.byteLength > 0 && i != null && i.key && i.iv && i.method === "AES-128") {
      const a = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer).catch((o) => {
        throw r.trigger(y.ERROR, {
          type: q.MEDIA_ERROR,
          details: D.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const l = performance.now();
        r.trigger(y.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: a,
            tdecrypt: l
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = k.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = k.IDLE;
      return;
    }
    if (this.state === k.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, s = t == null ? void 0 : t[e];
      if (!s || !t.length || !s.details)
        return;
      const {
        config: i
      } = this, r = this.getLoadPosition(), a = ie.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, i.maxBufferHole), {
        end: o,
        len: l
      } = a, c = this.getFwdBufferInfo(this.media, Y.MAIN), d = s.details, h = this.getMaxBufferLength(c == null ? void 0 : c.len) + d.levelTargetDuration;
      if (l > h)
        return;
      const u = d.fragments, f = u.length, g = d.edge;
      let m = null;
      const p = this.fragPrevious;
      if (o < g) {
        const x = i.maxFragLookUpTolerance, S = o > g - x ? 0 : x;
        m = As(p, u, Math.max(u[0].start, o), S), !m && p && p.start < u[0].start && (m = u[0]);
      } else
        m = u[f - 1];
      if (!m)
        return;
      if (m = this.mapToInitFragWhenRequired(m), m.sn !== "initSegment") {
        const x = m.sn - d.startSN, S = u[x - 1];
        S && S.cc === m.cc && this.fragmentTracker.getState(S) === pe.NOT_LOADED && (m = S);
      }
      this.fragmentTracker.getState(m) === pe.NOT_LOADED && this.loadFragment(m, s, o);
    }
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.max(t, e) : t;
  }
  loadFragment(e, t, s) {
    this.fragCurrent = e, e.sn === "initSegment" ? this._loadInitSegment(e, t) : (this.startFragRequested = !0, super.loadFragment(e, t, s));
  }
  get mediaBufferTimeRanges() {
    return new Pd(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class Pd {
  constructor(e) {
    this.buffered = void 0;
    const t = (s, i, r) => {
      if (i = i >>> 0, i > r - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);
      return e[i][s];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(s) {
        return t("end", s, e.length);
      },
      start(s) {
        return t("start", s, e.length);
      }
    };
  }
}
class Od extends Bi {
  constructor(e) {
    super(e, "[subtitle-track-controller]"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let t = null;
      const s = as(this.media.textTracks);
      for (let r = 0; r < s.length; r++)
        if (s[r].mode === "hidden")
          t = s[r];
        else if (s[r].mode === "showing") {
          t = s[r];
          break;
        }
      const i = this.findTrackForTextTrack(t);
      this.subtitleTrack !== i && this.setSubtitleTrack(i);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVEL_LOADING, this.onLevelLoading, this), e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(y.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(e, t) {
    this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e);
  }
  onMediaDetaching() {
    if (!this.media)
      return;
    self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), as(this.media.textTracks).forEach((t) => {
      At(t);
    }), this.subtitleTrack = -1, this.media = null;
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== i) {
      this.warn(`Subtitle track with id:${s} and group:${i} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Subtitle track ${s} "${a.name}" lang:${a.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.subtitleGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((a) => (i == null ? void 0 : i.indexOf(a)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const a = this.tracks.filter((d) => !s || s.indexOf(d.groupId) !== -1);
      if (a.length)
        this.selectDefaultTrack && !a.some((d) => d.default) && (this.selectDefaultTrack = !1), a.forEach((d, h) => {
          d.id = h;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = a;
      const o = this.hls.config.subtitlePreference;
      if (!r && o) {
        this.selectDefaultTrack = !1;
        const d = We(o, a);
        if (d > -1)
          r = a[d];
        else {
          const h = We(o, this.tracks);
          r = this.tracks[h];
        }
      }
      let l = this.findTrackId(r);
      l === -1 && r && (l = this.findTrackId(null));
      const c = {
        subtitleTracks: a
      };
      this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(y.SUBTITLE_TRACKS_UPDATED, c), l !== -1 && this.trackId === -1 && this.setSubtitleTrack(l);
    } else this.shouldReloadPlaylist(r) && this.setSubtitleTrack(this.trackId);
  }
  findTrackId(e) {
    const t = this.tracksInGroup, s = this.selectDefaultTrack;
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (!(s && !r.default || !s && !e) && (!e || Lt(r, e)))
        return i;
    }
    if (e) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (bt(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return i;
      }
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (bt(e.attrs, r.attrs, ["LANGUAGE"]))
          return i;
      }
    }
    return -1;
  }
  findTrackForTextTrack(e) {
    if (e) {
      const t = this.tracksInGroup;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        if (xi(i, e))
          return s;
      }
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === J.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(e);
  }
  setSubtitleOption(e) {
    if (this.hls.config.subtitlePreference = e, e) {
      const t = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, t.length) {
        const s = this.currentTrack;
        if (s && Lt(e, s))
          return s;
        const i = We(e, this.tracksInGroup);
        if (i > -1) {
          const r = this.tracksInGroup[i];
          return this.setSubtitleTrack(i), r;
        } else {
          if (s)
            return null;
          {
            const r = We(e, t);
            if (r > -1)
              return t[r];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentTrack;
    if (this.shouldLoadPlaylist(t) && t) {
      const s = t.id, i = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`Loading subtitle playlist for id ${s}`), this.hls.trigger(y.SUBTITLE_TRACK_LOADING, {
        url: r,
        id: s,
        groupId: i,
        deliveryDirectives: e || null
      });
    }
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = as(e.textTracks), s = this.currentTrack;
    let i;
    if (s && (i = t.filter((r) => xi(s, r))[0], i || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(t).forEach((r) => {
      r.mode !== "disabled" && r !== i && (r.mode = "disabled");
    }), i) {
      const r = this.subtitleDisplay ? "showing" : "hidden";
      i.mode !== r && (i.mode = r);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e) {
    const t = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (e < -1 || e >= t.length || !$(e)) {
      this.warn(`Invalid subtitle track id: ${e}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e] || null;
    if (this.trackId = e, this.currentTrack = i, this.toggleTrackModes(), !i) {
      this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      return;
    }
    const r = !!i.details && !i.details.live;
    if (e === this.trackId && i === s && r)
      return;
    this.log(`Switching to subtitle-track ${e}` + (i ? ` "${i.name}" lang:${i.lang} group:${i.groupId}` : ""));
    const {
      id: a,
      groupId: o = "",
      name: l,
      type: c,
      url: d
    } = i;
    this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, {
      id: a,
      groupId: o,
      name: l,
      type: c,
      url: d
    });
    const h = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(h);
  }
}
class Fd {
  constructor(e) {
    this.buffers = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.buffers = e;
  }
  append(e, t, s) {
    const i = this.queues[t];
    i.push(e), i.length === 1 && !s && this.executeNext(t);
  }
  insertAbort(e, t) {
    this.queues[t].unshift(e), this.executeNext(t);
  }
  appendBlocker(e) {
    let t;
    const s = new Promise((r) => {
      t = r;
    }), i = {
      execute: t,
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: () => {
      }
    };
    return this.append(i, e), s;
  }
  executeNext(e) {
    const t = this.queues[e];
    if (t.length) {
      const s = t[0];
      try {
        s.execute();
      } catch (i) {
        A.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`), s.onError(i);
        const r = this.buffers[e];
        r != null && r.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues[e].shift(), this.executeNext(e);
  }
  current(e) {
    return this.queues[e][0];
  }
}
const Jn = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;
class Md {
  constructor(e) {
    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = (s) => {
      this.hls && this.hls.pauseBuffering();
    }, this._onStartStreaming = (s) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = () => {
      const {
        media: s,
        mediaSource: i
      } = this;
      this.log("Media source opened"), s && (s.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(y.MEDIA_ATTACHED, {
        media: s,
        mediaSource: i
      })), i && i.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks();
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: s,
        _objectUrl: i
      } = this;
      s !== i && A.error(`Media element src was set while attaching MediaSource (${i} > ${s})`);
    }, this.hls = e;
    const t = "[buffer-controller]";
    this.appendSource = jl(mt(e.config.preferManagedMediaSource)), this.log = A.log.bind(A, t), this.warn = A.warn.bind(A, t), this.error = A.error.bind(A, t), this._initSourceBuffer(), this.registerListeners();
  }
  hasSourceTypes() {
    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.BUFFER_RESET, this.onBufferReset, this), e.on(y.BUFFER_APPENDING, this.onBufferAppending, this), e.on(y.BUFFER_CODECS, this.onBufferCodecs, this), e.on(y.BUFFER_EOS, this.onBufferEos, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(y.FRAG_PARSED, this.onFragParsed, this), e.on(y.FRAG_CHANGED, this.onFragChanged, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.BUFFER_RESET, this.onBufferReset, this), e.off(y.BUFFER_APPENDING, this.onBufferAppending, this), e.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e.off(y.BUFFER_EOS, this.onBufferEos, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(y.FRAG_PARSED, this.onFragParsed, this), e.off(y.FRAG_CHANGED, this.onFragChanged, this);
  }
  _initSourceBuffer() {
    this.sourceBuffer = {}, this.operationQueue = new Fd(this.sourceBuffer), this.listeners = {
      audio: [],
      video: [],
      audiovideo: []
    }, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.lastMpegAudioChunk = null;
  }
  onManifestLoading() {
    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    let s = 2;
    (t.audio && !t.video || !t.altAudio) && (s = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = s, this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`);
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media, i = mt(this.appendSource);
    if (s && i) {
      var r;
      const a = this.mediaSource = new i();
      this.log(`created media source: ${(r = a.constructor) == null ? void 0 : r.name}`), a.addEventListener("sourceopen", this._onMediaSourceOpen), a.addEventListener("sourceended", this._onMediaSourceEnded), a.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (a.addEventListener("startstreaming", this._onStartStreaming), a.addEventListener("endstreaming", this._onEndStreaming));
      const o = this._objectUrl = self.URL.createObjectURL(a);
      if (this.appendSource)
        try {
          s.removeAttribute("src");
          const l = self.ManagedMediaSource;
          s.disableRemotePlayback = s.disableRemotePlayback || l && a instanceof l, er(s), Nd(s, o), s.load();
        } catch {
          s.src = o;
        }
      else
        s.src = o;
      s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  onMediaDetaching() {
    const {
      media: e,
      mediaSource: t,
      _objectUrl: s
    } = this;
    if (t) {
      if (this.log("media source detaching"), t.readyState === "open")
        try {
          t.endOfStream();
        } catch (i) {
          this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`);
        }
      this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (t.removeEventListener("startstreaming", this._onStartStreaming), t.removeEventListener("endstreaming", this._onEndStreaming)), e && (e.removeEventListener("emptied", this._onMediaEmptied), s && self.URL.revokeObjectURL(s), this.mediaSrc === s ? (e.removeAttribute("src"), this.appendSource && er(e), e.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
    }
    this.hls.trigger(y.MEDIA_DETACHED, void 0);
  }
  onBufferReset() {
    this.getSourceBufferTypes().forEach((e) => {
      this.resetBuffer(e);
    }), this._initSourceBuffer();
  }
  resetBuffer(e) {
    const t = this.sourceBuffer[e];
    try {
      if (t) {
        var s;
        this.removeBufferListeners(e), this.sourceBuffer[e] = void 0, (s = this.mediaSource) != null && s.sourceBuffers.length && this.mediaSource.removeSourceBuffer(t);
      }
    } catch (i) {
      this.warn(`onBufferReset ${e}`, i);
    }
  }
  onBufferCodecs(e, t) {
    const s = this.getSourceBufferTypes().length, i = Object.keys(t);
    if (i.forEach((a) => {
      if (s) {
        const l = this.tracks[a];
        if (l && typeof l.buffer.changeType == "function") {
          var o;
          const {
            id: c,
            codec: d,
            levelCodec: h,
            container: u,
            metadata: f
          } = t[a], g = vn(l.codec, l.levelCodec), m = g == null ? void 0 : g.replace(Jn, "$1");
          let p = vn(d, h);
          const x = (o = p) == null ? void 0 : o.replace(Jn, "$1");
          if (p && m !== x) {
            a.slice(0, 5) === "audio" && (p = Es(p, this.appendSource));
            const S = `${u};codecs=${p}`;
            this.appendChangeType(a, S), this.log(`switching codec ${g} to ${p}`), this.tracks[a] = {
              buffer: l.buffer,
              codec: d,
              container: u,
              levelCodec: h,
              metadata: f,
              id: c
            };
          }
        }
      } else
        this.pendingTracks[a] = t[a];
    }), s)
      return;
    const r = Math.max(this.bufferCodecEventsExpected - 1, 0);
    this.bufferCodecEventsExpected !== r && (this.log(`${r} bufferCodec event(s) expected ${i.join(",")}`), this.bufferCodecEventsExpected = r), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks();
  }
  appendChangeType(e, t) {
    const {
      operationQueue: s
    } = this, i = {
      execute: () => {
        const r = this.sourceBuffer[e];
        r && (this.log(`changing ${e} sourceBuffer type to ${t}`), r.changeType(t)), s.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (r) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, r);
      }
    };
    s.append(i, e, !!this.pendingTracks[e]);
  }
  onBufferAppending(e, t) {
    const {
      hls: s,
      operationQueue: i,
      tracks: r
    } = this, {
      data: a,
      type: o,
      frag: l,
      part: c,
      chunkMeta: d
    } = t, h = d.buffering[o], u = self.performance.now();
    h.start = u;
    const f = l.stats.buffering, g = c ? c.stats.buffering : null;
    f.start === 0 && (f.start = u), g && g.start === 0 && (g.start = u);
    const m = r.audio;
    let p = !1;
    o === "audio" && (m == null ? void 0 : m.container) === "audio/mpeg" && (p = !this.lastMpegAudioChunk || d.id === 1 || this.lastMpegAudioChunk.sn !== d.sn, this.lastMpegAudioChunk = d);
    const x = l.start, S = {
      execute: () => {
        if (h.executeStart = self.performance.now(), p) {
          const T = this.sourceBuffer[o];
          if (T) {
            const C = x - T.timestampOffset;
            Math.abs(C) >= 0.1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${x} (delta: ${C}) sn: ${l.sn})`), T.timestampOffset = x);
          }
        }
        this.appendExecutor(a, o);
      },
      onStart: () => {
      },
      onComplete: () => {
        const T = self.performance.now();
        h.executeEnd = h.end = T, f.first === 0 && (f.first = T), g && g.first === 0 && (g.first = T);
        const {
          sourceBuffer: C
        } = this, E = {};
        for (const L in C)
          E[L] = ie.getBuffered(C[L]);
        this.appendErrors[o] = 0, o === "audio" || o === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(y.BUFFER_APPENDED, {
          type: o,
          frag: l,
          part: c,
          chunkMeta: d,
          parent: l.type,
          timeRanges: E
        });
      },
      onError: (T) => {
        const C = {
          type: q.MEDIA_ERROR,
          parent: l.type,
          details: D.BUFFER_APPEND_ERROR,
          sourceBufferName: o,
          frag: l,
          part: c,
          chunkMeta: d,
          error: T,
          err: T,
          fatal: !1
        };
        if (T.code === DOMException.QUOTA_EXCEEDED_ERR)
          C.details = D.BUFFER_FULL_ERROR;
        else {
          const E = ++this.appendErrors[o];
          C.details = D.BUFFER_APPEND_ERROR, this.warn(`Failed ${E}/${s.config.appendErrorMaxRetry} times to append segment in "${o}" sourceBuffer`), E >= s.config.appendErrorMaxRetry && (C.fatal = !0);
        }
        s.trigger(y.ERROR, C);
      }
    };
    i.append(S, o, !!this.pendingTracks[o]);
  }
  onBufferFlushing(e, t) {
    const {
      operationQueue: s
    } = this, i = (r) => ({
      execute: this.removeExecutor.bind(this, r, t.startOffset, t.endOffset),
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(y.BUFFER_FLUSHED, {
          type: r
        });
      },
      onError: (a) => {
        this.warn(`Failed to remove from ${r} SourceBuffer`, a);
      }
    });
    t.type ? s.append(i(t.type), t.type) : this.getSourceBufferTypes().forEach((r) => {
      s.append(i(r), r);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = [], a = i ? i.elementaryStreams : s.elementaryStreams;
    a[ee.AUDIOVIDEO] ? r.push("audiovideo") : (a[ee.AUDIO] && r.push("audio"), a[ee.VIDEO] && r.push("video"));
    const o = () => {
      const l = self.performance.now();
      s.stats.buffering.end = l, i && (i.stats.buffering.end = l);
      const c = i ? i.stats : s.stats;
      this.hls.trigger(y.FRAG_BUFFERED, {
        frag: s,
        part: i,
        stats: c,
        id: s.type
      });
    };
    r.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r);
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    this.getSourceBufferTypes().reduce((i, r) => {
      const a = this.sourceBuffer[r];
      return a && (!t.type || t.type === r) && (a.ending = !0, a.ended || (a.ended = !0, this.log(`${r} sourceBuffer now EOS`))), i && !!(!a || a.ended);
    }, !0) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
      this.getSourceBufferTypes().forEach((r) => {
        const a = this.sourceBuffer[r];
        a && (a.ending = !1);
      });
      const {
        mediaSource: i
      } = this;
      if (!i || i.readyState !== "open") {
        i && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), i.endOfStream();
    }));
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: s
    } = this;
    if (!s || t === null || !this.getSourceBufferTypes().length)
      return;
    const r = e.config, a = s.currentTime, o = t.levelTargetDuration, l = t.live && r.liveBackBufferLength !== null ? r.liveBackBufferLength : r.backBufferLength;
    if ($(l) && l > 0) {
      const c = Math.max(l, o), d = Math.floor(a / o) * o - c;
      this.flushBackBuffer(a, o, d);
    }
    if ($(r.frontBufferFlushThreshold) && r.frontBufferFlushThreshold > 0) {
      const c = Math.max(r.maxBufferLength, r.frontBufferFlushThreshold), d = Math.max(c, o), h = Math.floor(a / o) * o + d;
      this.flushFrontBuffer(a, o, h);
    }
  }
  flushBackBuffer(e, t, s) {
    const {
      details: i,
      sourceBuffer: r
    } = this;
    this.getSourceBufferTypes().forEach((o) => {
      const l = r[o];
      if (l) {
        const c = ie.getBuffered(l);
        if (c.length > 0 && s > c.start(0)) {
          if (this.hls.trigger(y.BACK_BUFFER_REACHED, {
            bufferEnd: s
          }), i != null && i.live)
            this.hls.trigger(y.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: s
            });
          else if (l.ended && c.end(c.length - 1) - e < t * 2) {
            this.log(`Cannot flush ${o} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(y.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: s,
            type: o
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, s) {
    const {
      sourceBuffer: i
    } = this;
    this.getSourceBufferTypes().forEach((a) => {
      const o = i[a];
      if (o) {
        const l = ie.getBuffered(o), c = l.length;
        if (c < 2)
          return;
        const d = l.start(c - 1), h = l.end(c - 1);
        if (s > d || e >= d && e <= h)
          return;
        if (o.ended && e - h < 2 * t) {
          this.log(`Cannot flush ${a} front buffer while SourceBuffer is in ended state`);
          return;
        }
        this.hls.trigger(y.BUFFER_FLUSHING, {
          startOffset: d,
          endOffset: 1 / 0,
          type: a
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  updateMediaElementDuration() {
    if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")
      return;
    const {
      details: e,
      hls: t,
      media: s,
      mediaSource: i
    } = this, r = e.fragments[0].start + e.totalduration, a = s.duration, o = $(i.duration) ? i.duration : 0;
    e.live && t.config.liveDurationInfinity ? (i.duration = 1 / 0, this.updateSeekableRange(e)) : (r > o && r > a || !$(a)) && (this.log(`Updating Media Source duration to ${r.toFixed(3)}`), i.duration = r);
  }
  updateSeekableRange(e) {
    const t = this.mediaSource, s = e.fragments;
    if (s.length && e.live && t != null && t.setLiveSeekableRange) {
      const r = Math.max(0, s[0].start), a = Math.max(r, r + e.totalduration);
      this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${r}-${a}.`), t.setLiveSeekableRange(r, a);
    }
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsExpected: e,
      operationQueue: t,
      pendingTracks: s
    } = this, i = Object.keys(s).length;
    if (i && (!e || i === 2 || "audiovideo" in s)) {
      this.createSourceBuffers(s), this.pendingTracks = {};
      const r = this.getSourceBufferTypes();
      if (r.length)
        this.hls.trigger(y.BUFFER_CREATED, {
          tracks: this.tracks
        }), r.forEach((a) => {
          t.executeNext(a);
        });
      else {
        const a = new Error("could not create source buffer for media codec(s)");
        this.hls.trigger(y.ERROR, {
          type: q.MEDIA_ERROR,
          details: D.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: !0,
          error: a,
          reason: a.message
        });
      }
    }
  }
  createSourceBuffers(e) {
    const {
      sourceBuffer: t,
      mediaSource: s
    } = this;
    if (!s)
      throw Error("createSourceBuffers called when mediaSource was null");
    for (const r in e)
      if (!t[r]) {
        var i;
        const a = e[r];
        if (!a)
          throw Error(`source buffer exists for track ${r}, however track does not`);
        let o = ((i = a.levelCodec) == null ? void 0 : i.indexOf(",")) === -1 ? a.levelCodec : a.codec;
        o && r.slice(0, 5) === "audio" && (o = Es(o, this.appendSource));
        const l = `${a.container};codecs=${o}`;
        this.log(`creating sourceBuffer(${l})`);
        try {
          const c = t[r] = s.addSourceBuffer(l), d = r;
          this.addBufferListener(d, "updatestart", this._onSBUpdateStart), this.addBufferListener(d, "updateend", this._onSBUpdateEnd), this.addBufferListener(d, "error", this._onSBUpdateError), this.appendSource && this.addBufferListener(d, "bufferedchange", (h, u) => {
            const f = u.removedRanges;
            f != null && f.length && this.hls.trigger(y.BUFFER_FLUSHED, {
              type: r
            });
          }), this.tracks[r] = {
            buffer: c,
            codec: o,
            container: a.container,
            levelCodec: a.levelCodec,
            metadata: a.metadata,
            id: a.id
          };
        } catch (c) {
          this.error(`error while trying to add sourceBuffer: ${c.message}`), this.hls.trigger(y.ERROR, {
            type: q.MEDIA_ERROR,
            details: D.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: c,
            sourceBufferName: r,
            mimeType: l
          });
        }
      }
  }
  get mediaSrc() {
    var e, t;
    const s = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media;
    return s == null ? void 0 : s.src;
  }
  _onSBUpdateStart(e) {
    const {
      operationQueue: t
    } = this;
    t.current(e).onStart();
  }
  _onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const {
      operationQueue: s
    } = this;
    s.current(e).onComplete(), s.shiftAndExecuteNext(e);
  }
  _onSBUpdateError(e, t) {
    var s;
    const i = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`);
    this.error(`${i}`, t), this.hls.trigger(y.ERROR, {
      type: q.MEDIA_ERROR,
      details: D.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: i,
      fatal: !1
    });
    const r = this.operationQueue.current(e);
    r && r.onError(i);
  }
  // This method must result in an updateend event; if remove is not called, _onSBUpdateEnd must be called manually
  removeExecutor(e, t, s) {
    const {
      media: i,
      mediaSource: r,
      operationQueue: a,
      sourceBuffer: o
    } = this, l = o[e];
    if (!i || !r || !l) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), a.shiftAndExecuteNext(e);
      return;
    }
    const c = $(i.duration) ? i.duration : 1 / 0, d = $(r.duration) ? r.duration : 1 / 0, h = Math.max(0, t), u = Math.min(s, c, d);
    u > h && (!l.ending || l.ended) ? (l.ended = !1, this.log(`Removing [${h},${u}] from the ${e} SourceBuffer`), l.remove(h, u)) : a.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, _onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const s = this.sourceBuffer[t];
    if (!s) {
      if (!this.pendingTracks[t])
        throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
      return;
    }
    s.ended = !1, s.appendBuffer(e);
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.getSourceBufferTypes()) {
    if (!t.length) {
      this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
      return;
    }
    const {
      operationQueue: s
    } = this, i = t.map((r) => s.appendBlocker(r));
    Promise.all(i).then(() => {
      e(), t.forEach((r) => {
        const a = this.sourceBuffer[r];
        a != null && a.updating || s.shiftAndExecuteNext(r);
      });
    });
  }
  getSourceBufferTypes() {
    return Object.keys(this.sourceBuffer);
  }
  addBufferListener(e, t, s) {
    const i = this.sourceBuffer[e];
    if (!i)
      return;
    const r = s.bind(this, e);
    this.listeners[e].push({
      event: t,
      listener: r
    }), i.addEventListener(t, r);
  }
  removeBufferListeners(e) {
    const t = this.sourceBuffer[e];
    t && this.listeners[e].forEach((s) => {
      t.removeEventListener(s.event, s.listener);
    });
  }
}
function er(n) {
  const e = n.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    n.removeChild(t);
  });
}
function Nd(n, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, n.appendChild(t);
}
const Ud = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, Ma = (n) => String.fromCharCode(Ud[n] || n), Fe = 15, Qe = 100, Bd = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, $d = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, Gd = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, Vd = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, Hd = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class Kd {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const s = typeof t == "function" ? t() : t;
      A.log(`${this.time} [${e}] ${s}`);
    }
  }
}
const dt = function(e) {
  const t = [];
  for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16));
  return t;
};
class Na {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      e.hasOwnProperty(i) && (this[i] = e[i]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class jd {
  constructor() {
    this.uchar = " ", this.penState = new Na();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class Wd {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new Na(), this.cueStartTime = null, this.logger = void 0;
    for (let t = 0; t < Qe; t++)
      this.chars.push(new jd());
    this.logger = e;
  }
  equals(e) {
    for (let t = 0; t < Qe; t++)
      if (!this.chars[t].equals(e.chars[t]))
        return !1;
    return !0;
  }
  copy(e) {
    for (let t = 0; t < Qe; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Qe; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Qe && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Qe);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let s = this.pos + 1; s < t + 1; s++)
        this.chars[s].setPenState(this.currPenState);
    this.setCursor(t);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = Ma(e);
    if (this.pos >= Qe) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < Qe; t++)
      this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let s = 0; s < Qe; s++) {
      const i = this.chars[s].uchar;
      i !== " " && (t = !1), e.push(i);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class Ws {
  constructor(e) {
    this.rows = [], this.currRow = Fe - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let t = 0; t < Fe; t++)
      this.rows.push(new Wd(e));
    this.logger = e;
  }
  reset() {
    for (let e = 0; e < Fe; e++)
      this.rows[e].clear();
    this.currRow = Fe - 1;
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < Fe; s++)
      if (!this.rows[s].equals(e.rows[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < Fe; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Fe; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + JSON.stringify(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < Fe; o++)
        this.rows[o].clear();
      const r = this.currRow + 1 - this.nrRollUpRows, a = this.lastOutputScreen;
      if (a) {
        const o = a.rows[r].cueStartTime, l = this.logger.time;
        if (o !== null && l !== null && o < l)
          for (let c = 0; c < this.nrRollUpRows; c++)
            this.rows[t - this.nrRollUpRows + c + 1].copy(a.rows[r + c]);
      }
    }
    this.currRow = t;
    const s = this.rows[this.currRow];
    if (e.indent !== null) {
      const r = e.indent, a = Math.max(r - 1, 0);
      s.setCursor(e.indent), e.color = s.chars[a].penState.foreground;
    }
    const i = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1
    };
    this.setPen(i);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let s = "", i = -1;
    for (let r = 0; r < Fe; r++) {
      const a = this.rows[r].getTextString();
      a && (i = r + 1, e ? t.push("Row " + i + ": '" + a + "'") : t.push(a.trim()));
    }
    return t.length > 0 && (e ? s = "[" + t.join(" | ") + "]" : s = t.join(`
`)), s;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class tr {
  constructor(e, t, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Ws(s), this.nonDisplayedMemory = new Ws(s), this.lastOutputScreen = new Ws(s), this.currRollUpRow = this.displayedMemory.rows[Fe - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Fe - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);
  }
  insertChars(e) {
    for (let s = 0; s < e.length; s++)
      this.writeScreen.insertChar(e[s]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = {
      flash: !1
    };
    if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
      t.foreground = "white";
    else {
      const s = Math.floor(e / 2) - 16, i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = i[s];
    }
    this.logger.log(2, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class sr {
  constructor(e, t, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = qd(), this.logger = void 0;
    const i = this.logger = new Kd();
    this.channels = [null, new tr(e, t, i), new tr(e + 1, s, i)];
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(e, t) {
    this.logger.time = e;
    for (let s = 0; s < t.length; s += 2) {
      const i = t[s] & 127, r = t[s + 1] & 127;
      let a = !1, o = null;
      if (i === 0 && r === 0)
        continue;
      this.logger.log(3, () => "[" + dt([t[s], t[s + 1]]) + "] -> (" + dt([i, r]) + ")");
      const l = this.cmdHistory;
      if (i >= 16 && i <= 31) {
        if (Yd(i, r, l)) {
          Qt(null, null, l), this.logger.log(3, () => "Repeated command (" + dt([i, r]) + ") is dropped");
          continue;
        }
        Qt(i, r, this.cmdHistory), a = this.parseCmd(i, r), a || (a = this.parseMidrow(i, r)), a || (a = this.parsePAC(i, r)), a || (a = this.parseBackgroundAttributes(i, r));
      } else
        Qt(null, null, l);
      if (!a && (o = this.parseChars(i, r), o)) {
        const d = this.currentChannel;
        d && d > 0 ? this.channels[d].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !a && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + dt([i, r]) + " orig: " + dt([t[s], t[s + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const s = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(s || i))
      return !1;
    const r = e === 20 || e === 21 || e === 23 ? 1 : 2, a = this.channels[r];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? a.ccRCL() : t === 33 ? a.ccBS() : t === 34 ? a.ccAOF() : t === 35 ? a.ccAON() : t === 36 ? a.ccDER() : t === 37 ? a.ccRU(2) : t === 38 ? a.ccRU(3) : t === 39 ? a.ccRU(4) : t === 40 ? a.ccFON() : t === 41 ? a.ccRDC() : t === 42 ? a.ccTR() : t === 43 ? a.ccRTD() : t === 44 ? a.ccEDM() : t === 45 ? a.ccCR() : t === 46 ? a.ccENM() : t === 47 && a.ccEOC() : a.ccTO(t - 32), this.currentChannel = r, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(e, t) {
    let s = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if (e === 17 ? s = 1 : s = 2, s !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const i = this.channels[s];
      return i ? (i.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + dt([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let s;
    const i = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, r = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(i || r))
      return !1;
    const a = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? s = a === 1 ? Bd[e] : Gd[e] : s = a === 1 ? $d[e] : Vd[e];
    const o = this.channels[a];
    return o ? (o.setPAC(this.interpretPAC(s, t)), this.currentChannel = a, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(e, t) {
    let s;
    const i = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: e
    };
    return t > 95 ? s = t - 96 : s = t - 64, i.underline = (s & 1) === 1, s <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (i.italics = !0, i.color = "white") : i.indent = Math.floor((s - 16) / 2) * 4, i;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(e, t) {
    let s, i = null, r = null;
    if (e >= 25 ? (s = 2, r = e - 8) : (s = 1, r = e), r >= 17 && r <= 19) {
      let a;
      r === 17 ? a = t + 80 : r === 18 ? a = t + 112 : a = t + 144, this.logger.log(2, () => "Special char '" + Ma(a) + "' in channel " + s), i = [a];
    } else e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]);
    return i && this.logger.log(3, () => "Char codes =  " + dt(i).join(",")), i;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(e, t) {
    const s = (e === 16 || e === 24) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(s || i))
      return !1;
    let r;
    const a = {};
    e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), a.background = Hd[r], t % 2 === 1 && (a.background = a.background + "_semi")) : t === 45 ? a.background = "transparent" : (a.foreground = "black", t === 47 && (a.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(a), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    Qt(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const s = this.channels[t];
      s && s.cueSplitAtTime(e);
    }
  }
}
function Qt(n, e, t) {
  t.a = n, t.b = e;
}
function Yd(n, e, t) {
  return t.a === n && t.b === e;
}
function qd() {
  return {
    a: null,
    b: null
  };
}
class Jt {
  constructor(e, t) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(e, t, s) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
var qi = function() {
  if (Rt != null && Rt.VTTCue)
    return self.VTTCue;
  const n = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, l) {
    if (typeof l != "string" || !Array.isArray(o))
      return !1;
    const c = l.toLowerCase();
    return ~o.indexOf(c) ? c : !1;
  }
  function s(o) {
    return t(n, o);
  }
  function i(o) {
    return t(e, o);
  }
  function r(o, ...l) {
    let c = 1;
    for (; c < arguments.length; c++) {
      const d = arguments[c];
      for (const h in d)
        o[h] = d[h];
    }
    return o;
  }
  function a(o, l, c) {
    const d = this, h = {
      enumerable: !0
    };
    d.hasBeenReset = !1;
    let u = "", f = !1, g = o, m = l, p = c, x = null, S = "", T = !0, C = "auto", E = "start", L = 50, _ = "middle", I = 50, P = "middle";
    Object.defineProperty(d, "id", r({}, h, {
      get: function() {
        return u;
      },
      set: function(b) {
        u = "" + b;
      }
    })), Object.defineProperty(d, "pauseOnExit", r({}, h, {
      get: function() {
        return f;
      },
      set: function(b) {
        f = !!b;
      }
    })), Object.defineProperty(d, "startTime", r({}, h, {
      get: function() {
        return g;
      },
      set: function(b) {
        if (typeof b != "number")
          throw new TypeError("Start time must be set to a number.");
        g = b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "endTime", r({}, h, {
      get: function() {
        return m;
      },
      set: function(b) {
        if (typeof b != "number")
          throw new TypeError("End time must be set to a number.");
        m = b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "text", r({}, h, {
      get: function() {
        return p;
      },
      set: function(b) {
        p = "" + b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "region", r({}, h, {
      get: function() {
        return x;
      },
      set: function(b) {
        x = b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "vertical", r({}, h, {
      get: function() {
        return S;
      },
      set: function(b) {
        const w = s(b);
        if (w === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        S = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "snapToLines", r({}, h, {
      get: function() {
        return T;
      },
      set: function(b) {
        T = !!b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "line", r({}, h, {
      get: function() {
        return C;
      },
      set: function(b) {
        if (typeof b != "number" && b !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        C = b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "lineAlign", r({}, h, {
      get: function() {
        return E;
      },
      set: function(b) {
        const w = i(b);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        E = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "position", r({}, h, {
      get: function() {
        return L;
      },
      set: function(b) {
        if (b < 0 || b > 100)
          throw new Error("Position must be between 0 and 100.");
        L = b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "positionAlign", r({}, h, {
      get: function() {
        return _;
      },
      set: function(b) {
        const w = i(b);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        _ = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "size", r({}, h, {
      get: function() {
        return I;
      },
      set: function(b) {
        if (b < 0 || b > 100)
          throw new Error("Size must be between 0 and 100.");
        I = b, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "align", r({}, h, {
      get: function() {
        return P;
      },
      set: function(b) {
        const w = i(b);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        P = w, this.hasBeenReset = !0;
      }
    })), d.displayState = void 0;
  }
  return a.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, a;
}();
class zd {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function Ua(n) {
  function e(s, i, r, a) {
    return (s | 0) * 3600 + (i | 0) * 60 + (r | 0) + parseFloat(a || 0);
  }
  const t = n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class Xd {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(e, t, s) {
    return s ? this.has(e) ? this.values[e] : t[s] : this.has(e) ? this.values[e] : t;
  }
  // Check whether we have a value for a key.
  has(e) {
    return e in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(e, t, s) {
    for (let i = 0; i < s.length; ++i)
      if (t === s[i]) {
        this.set(e, t);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const s = parseFloat(t);
      if (s >= 0 && s <= 100)
        return this.set(e, s), !0;
    }
    return !1;
  }
}
function Ba(n, e, t, s) {
  const i = s ? n.split(s) : [n];
  for (const r in i) {
    if (typeof i[r] != "string")
      continue;
    const a = i[r].split(t);
    if (a.length !== 2)
      continue;
    const o = a[0], l = a[1];
    e(o, l);
  }
}
const Ei = new qi(0, 0, ""), es = Ei.align === "middle" ? "middle" : "center";
function Zd(n, e, t) {
  const s = n;
  function i() {
    const o = Ua(n);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return n = n.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function r(o, l) {
    const c = new Xd();
    Ba(o, function(u, f) {
      let g;
      switch (u) {
        case "region":
          for (let m = t.length - 1; m >= 0; m--)
            if (t[m].id === f) {
              c.set(u, t[m].region);
              break;
            }
          break;
        case "vertical":
          c.alt(u, f, ["rl", "lr"]);
          break;
        case "line":
          g = f.split(","), c.integer(u, g[0]), c.percent(u, g[0]) && c.set("snapToLines", !1), c.alt(u, g[0], ["auto"]), g.length === 2 && c.alt("lineAlign", g[1], ["start", es, "end"]);
          break;
        case "position":
          g = f.split(","), c.percent(u, g[0]), g.length === 2 && c.alt("positionAlign", g[1], ["start", es, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          c.percent(u, f);
          break;
        case "align":
          c.alt(u, f, ["start", es, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), l.region = c.get("region", null), l.vertical = c.get("vertical", "");
    let d = c.get("line", "auto");
    d === "auto" && Ei.line === -1 && (d = -1), l.line = d, l.lineAlign = c.get("lineAlign", "start"), l.snapToLines = c.get("snapToLines", !0), l.size = c.get("size", 100), l.align = c.get("align", es);
    let h = c.get("position", "auto");
    h === "auto" && Ei.position === 50 && (h = l.align === "start" || l.align === "left" ? 0 : l.align === "end" || l.align === "right" ? 100 : 50), l.position = h;
  }
  function a() {
    n = n.replace(/^\s+/, "");
  }
  if (a(), e.startTime = i(), a(), n.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  n = n.slice(3), a(), e.endTime = i(), a(), r(n, e);
}
function $a(n) {
  return n.replace(/<br(?: \/)?>/gi, `
`);
}
class Qd {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new zd(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function s() {
      let r = t.buffer, a = 0;
      for (r = $a(r); a < r.length && r[a] !== "\r" && r[a] !== `
`; )
        ++a;
      const o = r.slice(0, a);
      return r[a] === "\r" && ++a, r[a] === `
` && ++a, t.buffer = r.slice(a), o;
    }
    function i(r) {
      Ba(r, function(a, o) {
      }, /:/);
    }
    try {
      let r = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        r = s();
        const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let a = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (a ? a = !1 : r = s(), t.state) {
          case "HEADER":
            /:/.test(r) ? i(r) : r || (t.state = "ID");
            continue;
          case "NOTE":
            r || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(r)) {
              t.state = "NOTE";
              break;
            }
            if (!r)
              continue;
            if (t.cue = new qi(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
              t.cue.id = r;
              continue;
            }
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              Zd(r, t.cue, t.regionList);
            } catch {
              t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = r.indexOf("-->") !== -1;
              if (!r || o && (a = !0)) {
                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                continue;
              }
              if (t.cue === null)
                continue;
              t.cue.text && (t.cue.text += `
`), t.cue.text += r;
            }
            continue;
          case "BADCUE":
            r || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
const Jd = /\r\n|\n\r|\n|\r/g, Ys = function(e, t, s = 0) {
  return e.slice(s, s + t.length) === t;
}, eh = function(e) {
  let t = parseInt(e.slice(-3));
  const s = parseInt(e.slice(-6, -4)), i = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!$(t) || !$(s) || !$(i) || !$(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * s, t += 60 * 1e3 * i, t += 60 * 60 * 1e3 * r, t;
}, qs = function(e) {
  let t = 5381, s = e.length;
  for (; s; )
    t = t * 33 ^ e.charCodeAt(--s);
  return (t >>> 0).toString();
};
function zi(n, e, t) {
  return qs(n.toString()) + qs(e.toString()) + qs(t);
}
const th = function(e, t, s) {
  let i = e[t], r = e[i.prevCC];
  if (!r || !r.new && i.new) {
    e.ccOffset = e.presentationOffset = i.start, i.new = !1;
    return;
  }
  for (; (a = r) != null && a.new; ) {
    var a;
    e.ccOffset += i.start - r.start, i.new = !1, i = r, r = e[i.prevCC];
  }
  e.presentationOffset = s;
};
function sh(n, e, t, s, i, r, a) {
  const o = new Qd(), l = Ye(new Uint8Array(n)).trim().replace(Jd, `
`).split(`
`), c = [], d = e ? Ed(e.baseTime, e.timescale) : 0;
  let h = "00:00.000", u = 0, f = 0, g, m = !0;
  o.oncue = function(p) {
    const x = t[s];
    let S = t.ccOffset;
    const T = (u - d) / 9e4;
    if (x != null && x.new && (f !== void 0 ? S = t.ccOffset = x.start : th(t, s, T)), T) {
      if (!e) {
        g = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      S = T - t.presentationOffset;
    }
    const C = p.endTime - p.startTime, E = ke((p.startTime + S - f) * 9e4, i * 9e4) / 9e4;
    p.startTime = Math.max(E, 0), p.endTime = Math.max(E + C, 0);
    const L = p.text.trim();
    p.text = decodeURIComponent(encodeURIComponent(L)), p.id || (p.id = zi(p.startTime, p.endTime, L)), p.endTime > 0 && c.push(p);
  }, o.onparsingerror = function(p) {
    g = p;
  }, o.onflush = function() {
    if (g) {
      a(g);
      return;
    }
    r(c);
  }, l.forEach((p) => {
    if (m)
      if (Ys(p, "X-TIMESTAMP-MAP=")) {
        m = !1, p.slice(16).split(",").forEach((x) => {
          Ys(x, "LOCAL:") ? h = x.slice(6) : Ys(x, "MPEGTS:") && (u = parseInt(x.slice(7)));
        });
        try {
          f = eh(h) / 1e3;
        } catch (x) {
          g = x;
        }
        return;
      } else p === "" && (m = !1);
    o.parse(p + `
`);
  }), o.flush();
}
const zs = "stpp.ttml.im1t", Ga = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, Va = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, ih = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function ir(n, e, t, s) {
  const i = z(new Uint8Array(n), ["mdat"]);
  if (i.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const r = i.map((o) => Ye(o)), a = xd(e.baseTime, 1, e.timescale);
  try {
    r.forEach((o) => t(nh(o, a)));
  } catch (o) {
    s(o);
  }
}
function nh(n, e) {
  const i = new DOMParser().parseFromString(n, "text/xml").getElementsByTagName("tt")[0];
  if (!i)
    throw new Error("Invalid ttml");
  const r = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, a = Object.keys(r).reduce((h, u) => (h[u] = i.getAttribute(`ttp:${u}`) || r[u], h), {}), o = i.getAttribute("xml:space") !== "preserve", l = nr(Xs(i, "styling", "style")), c = nr(Xs(i, "layout", "region")), d = Xs(i, "body", "[begin]");
  return [].map.call(d, (h) => {
    const u = Ha(h, o);
    if (!u || !h.hasAttribute("begin"))
      return null;
    const f = Qs(h.getAttribute("begin"), a), g = Qs(h.getAttribute("dur"), a);
    let m = Qs(h.getAttribute("end"), a);
    if (f === null)
      throw rr(h);
    if (m === null) {
      if (g === null)
        throw rr(h);
      m = f + g;
    }
    const p = new qi(f - e, m - e, u);
    p.id = zi(p.startTime, p.endTime, p.text);
    const x = c[h.getAttribute("region")], S = l[h.getAttribute("style")], T = rh(x, S, l), {
      textAlign: C
    } = T;
    if (C) {
      const E = ih[C];
      E && (p.lineAlign = E), p.align = C;
    }
    return fe(p, T), p;
  }).filter((h) => h !== null);
}
function Xs(n, e, t) {
  const s = n.getElementsByTagName(e)[0];
  return s ? [].slice.call(s.querySelectorAll(t)) : [];
}
function nr(n) {
  return n.reduce((e, t) => {
    const s = t.getAttribute("xml:id");
    return s && (e[s] = t), e;
  }, {});
}
function Ha(n, e) {
  return [].slice.call(n.childNodes).reduce((t, s, i) => {
    var r;
    return s.nodeName === "br" && i ? t + `
` : (r = s.childNodes) != null && r.length ? Ha(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
  }, "");
}
function rh(n, e, t) {
  const s = "http://www.w3.org/ns/ttml#styling";
  let i = null;
  const r = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], a = n != null && n.hasAttribute("style") ? n.getAttribute("style") : null;
  return a && t.hasOwnProperty(a) && (i = t[a]), r.reduce((o, l) => {
    const c = Zs(e, s, l) || Zs(n, s, l) || Zs(i, s, l);
    return c && (o[l] = c), o;
  }, {});
}
function Zs(n, e, t) {
  return n && n.hasAttributeNS(e, t) ? n.getAttributeNS(e, t) : null;
}
function rr(n) {
  return new Error(`Could not parse ttml timestamp ${n}`);
}
function Qs(n, e) {
  if (!n)
    return null;
  let t = Ua(n);
  return t === null && (Ga.test(n) ? t = ah(n, e) : Va.test(n) && (t = oh(n, e))), t;
}
function ah(n, e) {
  const t = Ga.exec(n), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate;
}
function oh(n, e) {
  const t = Va.exec(n), s = Number(t[1]);
  switch (t[2]) {
    case "h":
      return s * 3600;
    case "m":
      return s * 60;
    case "ms":
      return s * 1e3;
    case "f":
      return s / e.frameRate;
    case "t":
      return s / e.tickRate;
  }
  return s;
}
class lh {
  constructor(e) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = or(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(y.FRAG_LOADING, this.onFragLoading, this), e.on(y.FRAG_LOADED, this.onFragLoaded, this), e.on(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(y.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(y.FRAG_LOADING, this.onFragLoading, this), e.off(y.FRAG_LOADED, this.onFragLoaded, this), e.off(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(y.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    if (this.config.enableCEA708Captions && (!this.cea608Parser1 || !this.cea608Parser2)) {
      const e = new Jt(this, "textTrack1"), t = new Jt(this, "textTrack2"), s = new Jt(this, "textTrack3"), i = new Jt(this, "textTrack4");
      this.cea608Parser1 = new sr(1, e, t), this.cea608Parser2 = new sr(3, s, i);
    }
  }
  addCues(e, t, s, i, r) {
    let a = !1;
    for (let o = r.length; o--; ) {
      const l = r[o], c = ch(l[0], l[1], t, s);
      if (c >= 0 && (l[0] = Math.min(l[0], t), l[1] = Math.max(l[1], s), a = !0, c / (s - t) > 0.5))
        return;
    }
    if (a || r.push([t, s]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[e];
      this.Cues.newCue(o, t, s, i);
    } else {
      const o = this.Cues.newCue(null, t, s, i);
      this.hls.trigger(y.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: e
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r
  }) {
    const {
      unparsedVttFrags: a
    } = this;
    s === "main" && (this.initPTS[t.cc] = {
      baseTime: i,
      timescale: r
    }), a.length && (this.unparsedVttFrags = [], a.forEach((o) => {
      this.onFragLoaded(y.FRAG_LOADED, o);
    }));
  }
  getExistingTrack(e, t) {
    const {
      media: s
    } = this;
    if (s)
      for (let i = 0; i < s.textTracks.length; i++) {
        const r = s.textTracks[i];
        if (ar(r, {
          name: e,
          lang: t,
          attrs: {}
        }))
          return r;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e])
      return;
    const {
      captionsProperties: t,
      captionsTracks: s,
      media: i
    } = this, {
      label: r,
      languageCode: a
    } = t[e], o = this.getExistingTrack(r, a);
    if (o)
      s[e] = o, At(s[e]), ca(s[e], i);
    else {
      const l = this.createTextTrack("captions", r, a);
      l && (l[e] = !0, s[e] = l);
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e])
      return;
    const t = this.captionsProperties[e];
    if (!t)
      return;
    const s = t.label, i = {
      _id: e,
      label: s,
      kind: "captions",
      default: t.media ? !!t.media.default : !1,
      closedCaptions: t.media
    };
    this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [i]
    });
  }
  createTextTrack(e, t, s) {
    const i = this.media;
    if (i)
      return i.addTextTrack(e, t, s);
  }
  onMediaAttaching(e, t) {
    this.media = t.media, this._cleanTracks();
  }
  onMediaDetaching() {
    const {
      captionsTracks: e
    } = this;
    Object.keys(e).forEach((t) => {
      At(e[t]), delete e[t];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = or(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.textTracks;
    if (t)
      for (let s = 0; s < t.length; s++)
        At(t[s]);
  }
  onSubtitleTracksUpdated(e, t) {
    const s = t.subtitleTracks || [], i = s.some((r) => r.textCodec === zs);
    if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
      if (Fa(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const a = this.media, o = a ? as(a.textTracks) : null;
        if (this.tracks.forEach((l, c) => {
          let d;
          if (o) {
            let h = null;
            for (let u = 0; u < o.length; u++)
              if (o[u] && ar(o[u], l)) {
                h = o[u], o[u] = null;
                break;
              }
            h && (d = h);
          }
          if (d)
            At(d);
          else {
            const h = Ka(l);
            d = this.createTextTrack(h, l.name, l.lang), d && (d.mode = "disabled");
          }
          d && this.textTracks.push(d);
        }), o != null && o.length) {
          const l = o.filter((c) => c !== null).map((c) => c.label);
          l.length && A.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const a = this.tracks.map((o) => ({
          label: o.name,
          kind: o.type.toLowerCase(),
          default: o.default,
          subtitleTrack: o
        }));
        this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: a
        });
      }
    }
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions && t.captions && t.captions.forEach((s) => {
      const i = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if (!i)
        return;
      const r = `textTrack${i[1]}`, a = this.captionsProperties[r];
      a && (a.label = s.name, s.lang && (a.languageCode = s.lang), a.media = s);
    });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    if (this.enabled && t.frag.type === Y.MAIN) {
      var s, i;
      const {
        cea608Parser1: r,
        cea608Parser2: a,
        lastSn: o
      } = this, {
        cc: l,
        sn: c
      } = t.frag, d = (s = (i = t.part) == null ? void 0 : i.index) != null ? s : -1;
      r && a && (c !== o + 1 || c === o && d !== this.lastPartIndex + 1 || l !== this.lastCc) && (r.reset(), a.reset()), this.lastCc = l, this.lastSn = c, this.lastPartIndex = d;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      payload: i
    } = t;
    if (s.type === Y.SUBTITLE)
      if (i.byteLength) {
        const r = s.decryptdata, a = "stats" in t;
        if (r == null || !r.encrypted || a) {
          const o = this.tracks[s.level], l = this.vttCCs;
          l[s.cc] || (l[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === zs ? this._parseIMSC1(s, i) : this._parseVTTs(t);
        }
      } else
        this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: s,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(e, t) {
    const s = this.hls;
    ir(t, this.initPTS[e.cc], (i) => {
      this._appendCues(i, e.level), s.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (i) => {
      A.log(`Failed to parse IMSC1: ${i}`), s.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: e,
        error: i
      });
    });
  }
  _parseVTTs(e) {
    var t;
    const {
      frag: s,
      payload: i
    } = e, {
      initPTS: r,
      unparsedVttFrags: a
    } = this, o = r.length - 1;
    if (!r[s.cc] && o === -1) {
      a.push(e);
      return;
    }
    const l = this.hls, c = (t = s.initSegment) != null && t.data ? Pe(s.initSegment.data, new Uint8Array(i)) : i;
    sh(c, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (d) => {
      this._appendCues(d, s.level), l.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (d) => {
      const h = d.message === "Missing initPTS for VTT MPEGTS";
      h ? a.push(e) : this._fallbackToIMSC1(s, i), A.log(`Failed to parse VTT cue: ${d}`), !(h && o > s.cc) && l.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: d
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const s = this.tracks[e.level];
    s.textCodec || ir(t, this.initPTS[e.cc], () => {
      s.textCodec = zs, this._parseIMSC1(e, t);
    }, () => {
      s.textCodec = "wvtt";
    });
  }
  _appendCues(e, t) {
    const s = this.hls;
    if (this.config.renderTextTracksNatively) {
      const i = this.textTracks[t];
      if (!i || i.mode === "disabled")
        return;
      e.forEach((r) => da(i, r));
    } else {
      const i = this.tracks[t];
      if (!i)
        return;
      const r = i.default ? "default" : "subtitles" + t;
      s.trigger(y.CUES_PARSED, {
        type: "subtitles",
        cues: e,
        track: r
      });
    }
  }
  onFragDecrypted(e, t) {
    const {
      frag: s
    } = t;
    s.type === Y.SUBTITLE && this.onFragLoaded(y.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    this.initCea608Parsers();
    const {
      cea608Parser1: s,
      cea608Parser2: i
    } = this;
    if (!this.enabled || !s || !i)
      return;
    const {
      frag: r,
      samples: a
    } = t;
    if (!(r.type === Y.MAIN && this.closedCaptionsForLevel(r) === "NONE"))
      for (let o = 0; o < a.length; o++) {
        const l = a[o].bytes;
        if (l) {
          const c = this.extractCea608Data(l);
          s.addData(a[o].pts, c[0]), i.addData(a[o].pts, c[1]);
        }
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    endOffsetSubtitles: i,
    type: r
  }) {
    const {
      media: a
    } = this;
    if (!(!a || a.currentTime < s)) {
      if (!r || r === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((l) => ui(o[l], t, s));
      }
      if (this.config.renderTextTracksNatively && t === 0 && i !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((l) => ui(o[l], t, i));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], s = e[0] & 31;
    let i = 2;
    for (let r = 0; r < s; r++) {
      const a = e[i++], o = 127 & e[i++], l = 127 & e[i++];
      if (o === 0 && l === 0)
        continue;
      if ((4 & a) !== 0) {
        const d = 3 & a;
        (d === 0 || d === 1) && (t[d].push(o), t[d].push(l));
      }
    }
    return t;
  }
}
function Ka(n) {
  return n.characteristics && /transcribes-spoken-dialog/gi.test(n.characteristics) && /describes-music-and-sound/gi.test(n.characteristics) ? "captions" : "subtitles";
}
function ar(n, e) {
  return !!n && n.kind === Ka(e) && xi(e, n);
}
function ch(n, e, t, s) {
  return Math.min(e, s) - Math.max(n, t);
}
function or() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
class Xi {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.BUFFER_CODECS, this.onBufferCodecs, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const s = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(s) && this.restrictedLevels.push({
      bitrate: s.bitrate,
      height: s.height,
      width: s.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && $(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping();
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, s = this.getMaxLevel(e.length - 1);
        s !== this.autoLevelCapping && A.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = s, t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const s = t.filter((i, r) => this.isLevelAllowed(i) && r <= e);
    return this.clientRect = null, Xi.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const s = e.getBoundingClientRect();
      t.width = s.width, t.height = s.height, !t.width && !t.height && (t.width = s.right - s.left || e.width || 0, t.height = s.bottom - s.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return e;
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((s) => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height);
  }
  static getMaxLevelByMediaSize(e, t, s) {
    if (!(e != null && e.length))
      return -1;
    const i = (o, l) => l ? o.width !== l.width || o.height !== l.height : !0;
    let r = e.length - 1;
    const a = Math.max(t, s);
    for (let o = 0; o < e.length; o += 1) {
      const l = e[o];
      if ((l.width >= a || l.height >= a) && i(l, e[o + 1])) {
        r = o;
        break;
      }
    }
    return r;
  }
}
class dh {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(e, t) {
    const s = this.hls.config;
    if (s.capLevelOnFPSDrop) {
      const i = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = i, i && typeof i.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    }
  }
  checkFPS(e, t, s) {
    const i = performance.now();
    if (t) {
      if (this.lastTime) {
        const r = i - this.lastTime, a = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, l = 1e3 * a / r, c = this.hls;
        if (c.trigger(y.FPS_DROP, {
          currentDropped: a,
          currentDecoded: o,
          totalDroppedFrames: s
        }), l > 0 && a > c.config.fpsDroppedMonitoringThreshold * o) {
          let d = c.currentLevel;
          A.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (c.autoLevelCapping === -1 || c.autoLevelCapping >= d) && (d = d - 1, c.trigger(y.FPS_DROP_LEVEL_CAPPING, {
            level: d,
            droppedLevel: c.currentLevel
          }), c.autoLevelCapping = d, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = i, this.lastDroppedFrames = s, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
const ts = "[eme]";
class Ct {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = Ct.CDMCleanupPromise ? [Ct.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = A.debug.bind(A, ts), this.log = A.log.bind(A, ts), this.warn = A.warn.bind(A, ts), this.error = A.error.bind(A, ts), this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached();
    const e = this.config;
    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null;
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(y.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(y.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  getLicenseServerUrl(e) {
    const {
      drmSystems: t,
      widevineLicenseUrl: s
    } = this.config, i = t[e];
    if (i)
      return i.licenseUrl;
    if (e === ne.WIDEVINE && s)
      return s;
    throw new Error(`no license server URL configured for key-system "${e}"`);
  }
  getServerCertificateUrl(e) {
    const {
      drmSystems: t
    } = this.config, s = t[e];
    if (s)
      return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels, s = (a, o, l) => !!a && l.indexOf(a) === o, i = t.map((a) => a.audioCodec).filter(s), r = t.map((a) => a.videoCodec).filter(s);
    return i.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((a, o) => {
      const l = (c) => {
        const d = c.shift();
        this.getMediaKeysPromise(d, i, r).then((h) => a({
          keySystem: d,
          mediaKeys: h
        })).catch((h) => {
          c.length ? l(c) : h instanceof we ? o(h) : o(new we({
            type: q.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_NO_ACCESS,
            error: h,
            fatal: !0
          }, h.message));
        });
      };
      l(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let i = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return Xr === null && self.location.protocol === "http:" && (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(i));
    }
    return s(e, t);
  }
  getMediaKeysPromise(e, t, s) {
    const i = pl(e, t, s, this.config.drmSystemOptions), r = this.keySystemAccessPromises[e];
    let a = r == null ? void 0 : r.keySystemAccess;
    if (!a) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`), a = this.requestMediaKeySystemAccess(e, i);
      const o = this.keySystemAccessPromises[e] = {
        keySystemAccess: a
      };
      return a.catch((l) => {
        this.log(`Failed to obtain access to key-system "${e}": ${l}`);
      }), a.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const c = this.fetchServerCertificate(e);
        return this.log(`Create media-keys for "${e}"`), o.mediaKeys = l.createMediaKeys().then((d) => (this.log(`Media-keys created for "${e}"`), c.then((h) => h ? this.setMediaKeysServerCertificate(d, e, h) : d))), o.mediaKeys.catch((d) => {
          this.error(`Failed to create media-keys for "${e}"}: ${d}`);
        }), o.mediaKeys;
      });
    }
    return a.then(() => r.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: s
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${Ve.hexDump(e.keyId || [])}`);
    const i = s.createSession(), r = {
      decryptdata: e,
      keySystem: t,
      mediaKeys: s,
      mediaKeysSession: i,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(r), r;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const s = this.createMediaKeySessionContext(e), i = this.getKeyIdString(t), r = "cenc";
      this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, r, t.pssh, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  getKeyIdString(e) {
    if (!e)
      throw new Error("Could not read keyId of undefined decryptdata");
    if (e.keyId === null)
      throw new Error("keyId is null");
    return Ve.hexDump(e.keyId);
  }
  updateKeySession(e, t) {
    var s;
    const i = e.mediaKeysSession;
    return this.log(`Updating key-session "${i.sessionId}" for keyID ${Ve.hexDump(((s = e.decryptdata) == null ? void 0 : s.keyId) || [])}
      } (data length: ${t && t.byteLength})`), i.update(t);
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    return new Promise((t, s) => {
      const i = Os(this.config), r = e.map(fn).filter((a) => !!a && i.indexOf(a) !== -1);
      return this.getKeySystemSelectionPromise(r).then(({
        keySystem: a
      }) => {
        const o = mn(a);
        o ? t(o) : s(new Error(`Unable to find format for key-system "${a}"`));
      }).catch(s);
    });
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, s = this.getKeyIdString(t), i = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${i}`);
    let r = this.keyIdToKeySessionPromise[s];
    return r || (r = this.keyIdToKeySessionPromise[s] = this.getKeySystemForKeyPromise(t).then(({
      keySystem: a,
      mediaKeys: o
    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`), this.attemptSetMediaKeys(a, o).then(() => {
      this.throwIfDestroyed();
      const l = this.createMediaKeySessionContext({
        keySystem: a,
        mediaKeys: o,
        decryptdata: t
      });
      return this.generateRequestWithPreferredKeySession(l, "cenc", t.pssh, "playlist-key");
    }))), r.catch((a) => this.handleError(a))), r;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e) {
    this.hls && (this.error(e.message), e instanceof we ? this.hls.trigger(y.ERROR, e.data) : this.hls.trigger(y.ERROR, {
      type: q.KEY_SYSTEM_ERROR,
      details: D.KEY_SYSTEM_NO_KEYS,
      error: e,
      fatal: !0
    }));
  }
  getKeySystemForKeyPromise(e) {
    const t = this.getKeyIdString(e), s = this.keyIdToKeySessionPromise[t];
    if (!s) {
      const i = fn(e.keyFormat), r = i ? [i] : Os(this.config);
      return this.attemptKeySystemAccess(r);
    }
    return s;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = Os(this.config)), e.length === 0)
      throw new we({
        type: q.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${JSON.stringify({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  _onMediaEncrypted(e) {
    const {
      initDataType: t,
      initData: s
    } = e, i = `"${e.type}" event: init data type: "${t}"`;
    if (this.debug(i), s === null)
      return;
    let r, a;
    if (t === "sinf" && this.config.drmSystems[ne.FAIRPLAY]) {
      const h = ge(new Uint8Array(s));
      try {
        const u = Fi(JSON.parse(h).sinf), f = na(new Uint8Array(u));
        if (!f)
          throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
        r = f.subarray(8, 24), a = ne.FAIRPLAY;
      } catch (u) {
        this.warn(`${i} Failed to parse sinf: ${u}`);
        return;
      }
    } else {
      const h = Gl(s), u = h.filter((f) => f.systemId === Bt.WIDEVINE)[0];
      if (!u) {
        h.length === 0 || h.some((f) => !f.systemId) ? this.warn(`${i} contains incomplete or invalid pssh data`) : this.log(`ignoring ${i} for ${h.map((f) => gn(f.systemId)).join(",")} pssh data in favor of playlist keys`);
        return;
      }
      if (a = gn(u.systemId), u.version === 0 && u.data) {
        const f = u.data.length - 22;
        r = u.data.subarray(f, f + 16);
      }
    }
    if (!a || !r)
      return;
    const o = Ve.hexDump(r), {
      keyIdToKeySessionPromise: l,
      mediaKeySessions: c
    } = this;
    let d = l[o];
    for (let h = 0; h < c.length; h++) {
      const u = c[h], f = u.decryptdata;
      if (!f.keyId)
        continue;
      const g = Ve.hexDump(f.keyId);
      if (o === g || f.uri.replace(/-/g, "").indexOf(o) !== -1) {
        if (d = l[g], f.pssh)
          break;
        delete l[g], f.pssh = new Uint8Array(s), f.keyId = r, d = l[o] = d.then(() => this.generateRequestWithPreferredKeySession(u, t, s, "encrypted-event-key-match"));
        break;
      }
    }
    d || (d = l[o] = this.getKeySystemSelectionPromise([a]).then(({
      keySystem: h,
      mediaKeys: u
    }) => {
      var f;
      this.throwIfDestroyed();
      const g = new Vt("ISO-23001-7", o, (f = mn(h)) != null ? f : "");
      return g.pssh = new Uint8Array(s), g.keyId = r, this.attemptSetMediaKeys(h, u).then(() => {
        this.throwIfDestroyed();
        const m = this.createMediaKeySessionContext({
          decryptdata: g,
          keySystem: h,
          mediaKeys: u
        });
        return this.generateRequestWithPreferredKeySession(m, t, s, "encrypted-event-no-match");
      });
    })), d.catch((h) => this.handleError(h));
  }
  _onWaitingForKey(e) {
    this.log(`"${e.type}" event`);
  }
  attemptSetMediaKeys(e, t) {
    const s = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const i = Promise.all(s).then(() => {
      if (!this.media)
        throw new Error("Attempted to set mediaKeys without media element attached");
      return this.media.setMediaKeys(t);
    });
    return this.setMediaKeysQueue.push(i), i.then(() => {
      this.log(`Media-keys set for "${e}"`), s.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((r) => s.indexOf(r) === -1);
    });
  }
  generateRequestWithPreferredKeySession(e, t, s, i) {
    var r, a;
    const o = (r = this.config.drmSystems) == null || (a = r[e.keySystem]) == null ? void 0 : a.generateRequest;
    if (o)
      try {
        const g = o.call(this.hls, t, s, e);
        if (!g)
          throw new Error("Invalid response from configured generateRequest filter");
        t = g.initDataType, s = e.decryptdata.pssh = g.initData ? new Uint8Array(g.initData) : null;
      } catch (g) {
        var l;
        if (this.warn(g.message), (l = this.hls) != null && l.config.debug)
          throw g;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
    const c = this.getKeyIdString(e.decryptdata);
    this.log(`Generating key-session request for "${i}": ${c} (init data type: ${t} length: ${s ? s.byteLength : null})`);
    const d = new Yi(), h = e._onmessage = (g) => {
      const m = e.mediaKeysSession;
      if (!m) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: p,
        message: x
      } = g;
      this.log(`"${p}" message event for session "${m.sessionId}" message size: ${x.byteLength}`), p === "license-request" || p === "license-renewal" ? this.renewLicense(e, x).catch((S) => {
        this.handleError(S), d.emit("error", S);
      }) : p === "license-release" ? e.keySystem === ne.FAIRPLAY && (this.updateKeySession(e, di("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${p}"`);
    }, u = e._onkeystatuseschange = (g) => {
      if (!e.mediaKeysSession) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      this.onKeyStatusChange(e);
      const p = e.keyStatus;
      d.emit("keyStatus", p), p === "expired" && (this.warn(`${e.keySystem} expired for key ${c}`), this.renewKeySession(e));
    };
    e.mediaKeysSession.addEventListener("message", h), e.mediaKeysSession.addEventListener("keystatuseschange", u);
    const f = new Promise((g, m) => {
      d.on("error", m), d.on("keyStatus", (p) => {
        p.startsWith("usable") ? g() : p === "output-restricted" ? m(new we({
          type: q.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
          fatal: !1
        }, "HDCP level output restricted")) : p === "internal-error" ? m(new we({
          type: q.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
          fatal: !0
        }, `key status changed to "${p}"`)) : p === "expired" ? m(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${p}"`);
      });
    });
    return e.mediaKeysSession.generateRequest(t, s).then(() => {
      var g;
      this.log(`Request generated for key-session "${(g = e.mediaKeysSession) == null ? void 0 : g.sessionId}" keyId: ${c}`);
    }).catch((g) => {
      throw new we({
        type: q.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_NO_SESSION,
        error: g,
        fatal: !1
      }, `Error generating key-session request: ${g}`);
    }).then(() => f).catch((g) => {
      throw d.removeAllListeners(), this.removeSession(e), g;
    }).then(() => (d.removeAllListeners(), e));
  }
  onKeyStatusChange(e) {
    e.mediaKeysSession.keyStatuses.forEach((t, s) => {
      this.log(`key status change "${t}" for keyStatuses keyId: ${Ve.hexDump("buffer" in s ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : new Uint8Array(s))} session keyId: ${Ve.hexDump(new Uint8Array(e.decryptdata.keyId || []))} uri: ${e.decryptdata.uri}`), e.keyStatus = t;
    });
  }
  fetchServerCertificate(e) {
    const t = this.config, s = t.loader, i = new s(t), r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((a, o) => {
      const l = {
        responseType: "arraybuffer",
        url: r
      }, c = t.certLoadPolicy.default, d = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (u, f, g, m) => {
          a(u.data);
        },
        onError: (u, f, g, m) => {
          o(new we({
            type: q.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: ye({
              url: l.url,
              data: void 0
            }, u)
          }, `"${e}" certificate request failed (${r}). Status: ${u.code} (${u.text})`));
        },
        onTimeout: (u, f, g) => {
          o(new we({
            type: q.KEY_SYSTEM_ERROR,
            details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: {
              url: l.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${r})`));
        },
        onAbort: (u, f, g) => {
          o(new Error("aborted"));
        }
      };
      i.load(l, d, h);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, s) {
    return new Promise((i, r) => {
      e.setServerCertificate(s).then((a) => {
        this.log(`setServerCertificate ${a ? "success" : "not supported by CDM"} (${s == null ? void 0 : s.byteLength}) on "${t}"`), i(e);
      }).catch((a) => {
        r(new we({
          type: q.KEY_SYSTEM_ERROR,
          details: D.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: a,
          fatal: !0
        }, a.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((s) => this.updateKeySession(e, new Uint8Array(s)).catch((i) => {
      throw new we({
        type: q.KEY_SYSTEM_ERROR,
        details: D.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        error: i,
        fatal: !0
      }, i.message);
    }));
  }
  unpackPlayReadyKeyMessage(e, t) {
    const s = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!s.includes("PlayReadyKeyMessage"))
      return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const i = new DOMParser().parseFromString(s, "application/xml"), r = i.querySelectorAll("HttpHeader");
    if (r.length > 0) {
      let d;
      for (let h = 0, u = r.length; h < u; h++) {
        var a, o;
        d = r[h];
        const f = (a = d.querySelector("name")) == null ? void 0 : a.textContent, g = (o = d.querySelector("value")) == null ? void 0 : o.textContent;
        f && g && e.setRequestHeader(f, g);
      }
    }
    const l = i.querySelector("Challenge"), c = l == null ? void 0 : l.textContent;
    if (!c)
      throw new Error("Cannot find <Challenge> in key message");
    return di(atob(c));
  }
  setupLicenseXHR(e, t, s, i) {
    const r = this.config.licenseXhrSetup;
    return r ? Promise.resolve().then(() => {
      if (!s.decryptdata)
        throw new Error("Key removed");
      return r.call(this.hls, e, t, s, i);
    }).catch((a) => {
      if (!s.decryptdata)
        throw a;
      return e.open("POST", t, !0), r.call(this.hls, e, t, s, i);
    }).then((a) => (e.readyState || e.open("POST", t, !0), {
      xhr: e,
      licenseChallenge: a || i
    })) : (e.open("POST", t, !0), Promise.resolve({
      xhr: e,
      licenseChallenge: i
    }));
  }
  requestLicense(e, t) {
    const s = this.config.keyLoadPolicy.default;
    return new Promise((i, r) => {
      const a = this.getLicenseServerUrl(e.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return r(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let l = o.response;
            this.log(`License received ${l instanceof ArrayBuffer ? l.byteLength : l}`);
            const c = this.config.licenseResponseCallback;
            if (c)
              try {
                l = c.call(this.hls, o, a, e);
              } catch (d) {
                this.error(d);
              }
            i(l);
          } else {
            const l = s.errorRetry, c = l ? l.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > c || o.status >= 400 && o.status < 500)
              r(new we({
                type: q.KEY_SYSTEM_ERROR,
                details: D.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: a,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
            else {
              const d = c - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${d} attempts left`), this.requestLicense(e, t).then(i, r);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, a, e, t).then(({
        xhr: l,
        licenseChallenge: c
      }) => {
        e.keySystem == ne.PLAYREADY && (c = this.unpackPlayReadyKeyMessage(l, c)), l.send(c);
      });
    });
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const s = t.media;
    this.media = s, s.addEventListener("encrypted", this.onMediaEncrypted), s.addEventListener("waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const e = this.media, t = this.mediaKeySessions;
    e && (e.removeEventListener("encrypted", this.onMediaEncrypted), e.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, Vt.clearKeyUriToKeyIdMap();
    const s = t.length;
    Ct.CDMCleanupPromise = Promise.all(t.map((i) => this.removeSession(i)).concat(e == null ? void 0 : e.setMediaKeys(null).catch((i) => {
      this.log(`Could not clear media keys: ${i}`);
    }))).then(() => {
      s && (this.log("finished closing key sessions and clearing media keys"), t.length = 0);
    }).catch((i) => {
      this.log(`Could not close sessions and clear media keys: ${i}`);
    });
  }
  onManifestLoading() {
    this.keyFormatPromise = null;
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const s = t.reduce((i, r) => (i.indexOf(r.keyFormat) === -1 && i.push(r.keyFormat), i), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    }
  }
  removeSession(e) {
    const {
      mediaKeysSession: t,
      licenseXhr: s
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session ${t.sessionId}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const i = this.mediaKeySessions.indexOf(e);
      return i > -1 && this.mediaKeySessions.splice(i, 1), t.remove().catch((r) => {
        this.log(`Could not remove session: ${r}`);
      }).then(() => t.close()).catch((r) => {
        this.log(`Could not close session: ${r}`);
      });
    }
  }
}
Ct.CDMCleanupPromise = void 0;
class we extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
var Se;
(function(n) {
  n.MANIFEST = "m", n.AUDIO = "a", n.VIDEO = "v", n.MUXED = "av", n.INIT = "i", n.CAPTION = "c", n.TIMED_TEXT = "tt", n.KEY = "k", n.OTHER = "o";
})(Se || (Se = {}));
var Ti;
(function(n) {
  n.DASH = "d", n.HLS = "h", n.SMOOTH = "s", n.OTHER = "o";
})(Ti || (Ti = {}));
var ut;
(function(n) {
  n.OBJECT = "CMCD-Object", n.REQUEST = "CMCD-Request", n.SESSION = "CMCD-Session", n.STATUS = "CMCD-Status";
})(ut || (ut = {}));
const hh = {
  [ut.OBJECT]: ["br", "d", "ot", "tb"],
  [ut.REQUEST]: ["bl", "dl", "mtp", "nor", "nrr", "su"],
  [ut.SESSION]: ["cid", "pr", "sf", "sid", "st", "v"],
  [ut.STATUS]: ["bs", "rtp"]
};
class It {
  constructor(e, t) {
    this.value = void 0, this.params = void 0, Array.isArray(e) && (e = e.map((s) => s instanceof It ? s : new It(s))), this.value = e, this.params = t;
  }
}
class ja {
  constructor(e) {
    this.description = void 0, this.description = e;
  }
}
const uh = "Dict";
function fh(n) {
  return Array.isArray(n) ? JSON.stringify(n) : n instanceof Map ? "Map{}" : n instanceof Set ? "Set{}" : typeof n == "object" ? JSON.stringify(n) : String(n);
}
function gh(n, e, t, s) {
  return new Error(`failed to ${n} "${fh(e)}" as ${t}`, {
    cause: s
  });
}
const lr = "Bare Item", mh = "Boolean", ph = "Byte Sequence", yh = "Decimal", xh = "Integer";
function Eh(n) {
  return n < -999999999999999 || 999999999999999 < n;
}
const Th = /[\x00-\x1f\x7f]+/, vh = "Token", Sh = "Key";
function qe(n, e, t) {
  return gh("serialize", n, e, t);
}
function Ah(n) {
  if (typeof n != "boolean")
    throw qe(n, mh);
  return n ? "?1" : "?0";
}
function Lh(n) {
  return btoa(String.fromCharCode(...n));
}
function Ch(n) {
  if (ArrayBuffer.isView(n) === !1)
    throw qe(n, ph);
  return `:${Lh(n)}:`;
}
function Wa(n) {
  if (Eh(n))
    throw qe(n, xh);
  return n.toString();
}
function Rh(n) {
  return `@${Wa(n.getTime() / 1e3)}`;
}
function Ya(n, e) {
  if (n < 0)
    return -Ya(-n, e);
  const t = Math.pow(10, e);
  if (Math.abs(n * t % 1 - 0.5) < Number.EPSILON) {
    const i = Math.floor(n * t);
    return (i % 2 === 0 ? i : i + 1) / t;
  } else
    return Math.round(n * t) / t;
}
function _h(n) {
  const e = Ya(n, 3);
  if (Math.floor(Math.abs(e)).toString().length > 12)
    throw qe(n, yh);
  const t = e.toString();
  return t.includes(".") ? t : `${t}.0`;
}
const bh = "String";
function Ih(n) {
  if (Th.test(n))
    throw qe(n, bh);
  return `"${n.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function Dh(n) {
  return n.description || n.toString().slice(7, -1);
}
function cr(n) {
  const e = Dh(n);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw qe(e, vh);
  return e;
}
function vi(n) {
  switch (typeof n) {
    case "number":
      if (!$(n))
        throw qe(n, lr);
      return Number.isInteger(n) ? Wa(n) : _h(n);
    case "string":
      return Ih(n);
    case "symbol":
      return cr(n);
    case "boolean":
      return Ah(n);
    case "object":
      if (n instanceof Date)
        return Rh(n);
      if (n instanceof Uint8Array)
        return Ch(n);
      if (n instanceof ja)
        return cr(n);
    default:
      throw qe(n, lr);
  }
}
function Si(n) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(n) === !1)
    throw qe(n, Sh);
  return n;
}
function Zi(n) {
  return n == null ? "" : Object.entries(n).map(([e, t]) => t === !0 ? `;${Si(e)}` : `;${Si(e)}=${vi(t)}`).join("");
}
function qa(n) {
  return n instanceof It ? `${vi(n.value)}${Zi(n.params)}` : vi(n);
}
function wh(n) {
  return `(${n.value.map(qa).join(" ")})${Zi(n.params)}`;
}
function kh(n, e = {
  whitespace: !0
}) {
  if (typeof n != "object")
    throw qe(n, uh);
  const t = n instanceof Map ? n.entries() : Object.entries(n), s = e != null && e.whitespace ? " " : "";
  return Array.from(t).map(([i, r]) => {
    r instanceof It || (r = new It(r));
    let a = Si(i);
    return r.value === !0 ? a += Zi(r.params) : (a += "=", Array.isArray(r.value) ? a += wh(r) : a += qa(r)), a;
  }).join(`,${s}`);
}
function Ph(n, e) {
  return kh(n, e);
}
const Oh = (n) => n === "ot" || n === "sf" || n === "st", Fh = (n) => typeof n == "number" ? $(n) : n != null && n !== "" && n !== !1;
function Mh(n, e) {
  const t = new URL(n), s = new URL(e);
  if (t.origin !== s.origin)
    return n;
  const i = t.pathname.split("/").slice(1), r = s.pathname.split("/").slice(1, -1);
  for (; i[0] === r[0]; )
    i.shift(), r.shift();
  for (; r.length; )
    r.shift(), i.unshift("..");
  return i.join("/");
}
function Nh() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const e = URL.createObjectURL(new Blob()), t = e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
        const r = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16), (i == "x" ? r : r & 3 | 8).toString(16);
      });
    }
  }
}
const us = (n) => Math.round(n), Uh = (n, e) => (e != null && e.baseUrl && (n = Mh(n, e.baseUrl)), encodeURIComponent(n)), ss = (n) => us(n / 100) * 100, Bh = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: us,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: us,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: ss,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: ss,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: ss,
  /**
   * Next Object Request URL encoded
   */
  nor: Uh,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: ss,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: us
};
function $h(n, e) {
  const t = {};
  if (n == null || typeof n != "object")
    return t;
  const s = Object.keys(n).sort(), i = fe({}, Bh, e == null ? void 0 : e.formatters), r = e == null ? void 0 : e.filter;
  return s.forEach((a) => {
    if (r != null && r(a))
      return;
    let o = n[a];
    const l = i[a];
    l && (o = l(o, e)), !(a === "v" && o === 1) && (a == "pr" && o === 1 || Fh(o) && (Oh(a) && typeof o == "string" && (o = new ja(o)), t[a] = o));
  }), t;
}
function za(n, e = {}) {
  return n ? Ph($h(n, e), fe({
    whitespace: !1
  }, e)) : "";
}
function Gh(n, e = {}) {
  if (!n)
    return {};
  const t = Object.entries(n), s = Object.entries(hh).concat(Object.entries((e == null ? void 0 : e.customHeaderMap) || {})), i = t.reduce((r, a) => {
    var o, l;
    const [c, d] = a, h = ((o = s.find((u) => u[1].includes(c))) == null ? void 0 : o[0]) || ut.REQUEST;
    return (l = r[h]) != null || (r[h] = {}), r[h][c] = d, r;
  }, {});
  return Object.entries(i).reduce((r, [a, o]) => (r[a] = za(o, e), r), {});
}
function Vh(n, e, t) {
  return fe(n, Gh(e, t));
}
const Hh = "CMCD";
function Kh(n, e = {}) {
  if (!n)
    return "";
  const t = za(n, e);
  return `${Hh}=${encodeURIComponent(t)}`;
}
const dr = /CMCD=[^&#]+/;
function jh(n, e, t) {
  const s = Kh(e, t);
  if (!s)
    return n;
  if (dr.test(n))
    return n.replace(dr, s);
  const i = n.includes("?") ? "&" : "?";
  return `${n}${i}${s}`;
}
class Wh {
  // eslint-disable-line no-restricted-globals
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (i) => {
      try {
        this.apply(i, {
          ot: Se.MANIFEST,
          su: !this.initialized
        });
      } catch (r) {
        A.warn("Could not generate manifest CMCD data.", r);
      }
    }, this.applyFragmentData = (i) => {
      try {
        const r = i.frag, a = this.hls.levels[r.level], o = this.getObjectType(r), l = {
          d: r.duration * 1e3,
          ot: o
        };
        (o === Se.VIDEO || o === Se.AUDIO || o == Se.MUXED) && (l.br = a.bitrate / 1e3, l.tb = this.getTopBandwidth(o) / 1e3, l.bl = this.getBufferLength(o)), this.apply(i, l);
      } catch (r) {
        A.warn("Could not generate segment CMCD data.", r);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: s
    } = t;
    s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || Nh(), this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHED, this.onMediaDetached, this), e.on(y.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHED, this.onMediaDetached, this), e.off(y.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = null;
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(e, t) {
    var s, i;
    this.audioBuffer = (s = t.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (i = t.tracks.video) == null ? void 0 : i.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var e;
    return {
      v: 1,
      sf: Ti.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(e, t = {}) {
    fe(t, this.createData());
    const s = t.ot === Se.INIT || t.ot === Se.VIDEO || t.ot === Se.MUXED;
    this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering);
    const {
      includeKeys: i
    } = this;
    i && (t = Object.keys(t).reduce((r, a) => (i.includes(a) && (r[a] = t[a]), r), {})), this.useHeaders ? (e.headers || (e.headers = {}), Vh(e.headers, t)) : e.url = jh(e.url, t);
  }
  /**
   * The CMCD object type.
   */
  getObjectType(e) {
    const {
      type: t
    } = e;
    if (t === "subtitle")
      return Se.TIMED_TEXT;
    if (e.sn === "initSegment")
      return Se.INIT;
    if (t === "audio")
      return Se.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? Se.VIDEO : Se.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, s;
    const i = this.hls;
    if (e === Se.AUDIO)
      s = i.audioTracks;
    else {
      const r = i.maxAutoLevel, a = r > -1 ? r + 1 : i.levels.length;
      s = i.levels.slice(0, a);
    }
    for (const r of s)
      r.bitrate > t && (t = r.bitrate);
    return t > 0 ? t : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(e) {
    const t = this.hls.media, s = e === Se.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !t ? NaN : ie.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: e
    } = this.config, t = this.applyPlaylistData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: e
    } = this.config, t = this.applyFragmentData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
}
const Yh = 3e5;
class qh {
  constructor(e) {
    this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.log = A.log.bind(A, "[content-steering]:"), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.ERROR, this.onError, this));
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((s) => s !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: s
    } = t;
    s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: s
    } = t;
    if ((s == null ? void 0 : s.action) === Ee.SendAlternateToPenaltyBox && s.flags === Oe.MoveAllAlternatesMatchingHost) {
      const i = this.levels;
      let r = this.pathwayPriority, a = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: l,
          type: c
        } = t.context;
        o && i ? a = this.getPathwayForGroupId(o, c, a) : l && (a = l);
      }
      a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !r && i && (r = i.reduce((o, l) => (o.indexOf(l.pathwayId) === -1 && o.push(l.pathwayId), o), [])), r && r.length > 1 && (this.updatePathwayPriority(r), s.resolved = this.pathwayId !== a), s.resolved || A.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${a} levels: ${i && i.length} priorities: ${JSON.stringify(r)} penalized: ${JSON.stringify(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const s = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this.pathwayPriority = e;
    let t;
    const s = this.penalizedPathways, i = performance.now();
    Object.keys(s).forEach((r) => {
      i - s[r] > Yh && delete s[r];
    });
    for (let r = 0; r < e.length; r++) {
      const a = e[r];
      if (a in s)
        continue;
      if (a === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, l = this.hls.levels[o];
      if (t = this.getLevelsForPathway(a), t.length > 0) {
        this.log(`Setting Pathway to "${a}"`), this.pathwayId = a, ga(t), this.hls.trigger(y.LEVELS_UPDATED, {
          levels: t
        });
        const c = this.hls.levels[o];
        l && c && this.levels && (c.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && c.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, s) {
    const i = this.getLevelsForPathway(s).concat(this.levels || []);
    for (let r = 0; r < i.length; r++)
      if (t === J.AUDIO_TRACK && i[r].hasAudioGroup(e) || t === J.SUBTITLE_TRACK && i[r].hasSubtitleGroup(e))
        return i[r].pathwayId;
    return s;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const s = {}, i = {};
    e.forEach((r) => {
      const {
        ID: a,
        "BASE-ID": o,
        "URI-REPLACEMENT": l
      } = r;
      if (t.some((d) => d.pathwayId === a))
        return;
      const c = this.getLevelsForPathway(o).map((d) => {
        const h = new ce(d.attrs);
        h["PATHWAY-ID"] = a;
        const u = h.AUDIO && `${h.AUDIO}_clone_${a}`, f = h.SUBTITLES && `${h.SUBTITLES}_clone_${a}`;
        u && (s[h.AUDIO] = u, h.AUDIO = u), f && (i[h.SUBTITLES] = f, h.SUBTITLES = f);
        const g = Xa(d.uri, h["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l), m = new _t({
          attrs: h,
          audioCodec: d.audioCodec,
          bitrate: d.bitrate,
          height: d.height,
          name: d.name,
          url: g,
          videoCodec: d.videoCodec,
          width: d.width
        });
        if (d.audioGroups)
          for (let p = 1; p < d.audioGroups.length; p++)
            m.addGroupId("audio", `${d.audioGroups[p]}_clone_${a}`);
        if (d.subtitleGroups)
          for (let p = 1; p < d.subtitleGroups.length; p++)
            m.addGroupId("text", `${d.subtitleGroups[p]}_clone_${a}`);
        return m;
      });
      t.push(...c), hr(this.audioTracks, s, l, a), hr(this.subtitleTracks, i, l, a);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, s = t.loader;
    this.loader && this.loader.destroy(), this.loader = new s(t);
    let i;
    try {
      i = new self.URL(e);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (i.protocol !== "data:") {
      const d = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      i.searchParams.set("_HLS_pathway", this.pathwayId), i.searchParams.set("_HLS_throughput", "" + d);
    }
    const r = {
      responseType: "json",
      url: i.href
    }, a = t.steeringManifestLoadPolicy.default, o = a.errorRetry || a.timeoutRetry || {}, l = {
      loadPolicy: a,
      timeout: a.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (d, h, u, f) => {
        this.log(`Loaded steering manifest: "${i}"`);
        const g = d.data;
        if (g.VERSION !== 1) {
          this.log(`Steering VERSION ${g.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = g.TTL;
        const {
          "RELOAD-URI": m,
          "PATHWAY-CLONES": p,
          "PATHWAY-PRIORITY": x
        } = g;
        if (m)
          try {
            this.uri = new self.URL(m, i).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${m}`);
            return;
          }
        this.scheduleRefresh(this.uri || u.url), p && this.clonePathways(p);
        const S = {
          steeringManifest: g,
          url: i.toString()
        };
        this.hls.trigger(y.STEERING_MANIFEST_LOADED, S), x && this.updatePathwayPriority(x);
      },
      onError: (d, h, u, f) => {
        if (this.log(`Error loading steering manifest: ${d.code} ${d.text} (${h.url})`), this.stopLoad(), d.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${h.url} no longer available`);
          return;
        }
        let g = this.timeToLoad * 1e3;
        if (d.code === 429) {
          const m = this.loader;
          if (typeof (m == null ? void 0 : m.getResponseHeader) == "function") {
            const p = m.getResponseHeader("Retry-After");
            p && (g = parseFloat(p) * 1e3);
          }
          this.log(`Steering manifest ${h.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || h.url, g);
      },
      onTimeout: (d, h, u) => {
        this.log(`Timeout loading steering manifest (${h.url})`), this.scheduleRefresh(this.uri || h.url);
      }
    };
    this.log(`Requesting steering manifest: ${i}`), this.loader.load(r, l, c);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var s;
      const i = (s = this.hls) == null ? void 0 : s.media;
      if (i && !i.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function hr(n, e, t, s) {
  n && Object.keys(e).forEach((i) => {
    const r = n.filter((a) => a.groupId === i).map((a) => {
      const o = fe({}, a);
      return o.details = void 0, o.attrs = new ce(o.attrs), o.url = o.attrs.URI = Xa(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[i], o.attrs["PATHWAY-ID"] = s, o;
    });
    n.push(...r);
  });
}
function Xa(n, e, t, s) {
  const {
    HOST: i,
    PARAMS: r,
    [t]: a
  } = s;
  let o;
  e && (o = a == null ? void 0 : a[e], o && (n = o));
  const l = new self.URL(n);
  return i && !o && (l.host = i), r && Object.keys(r).sort().forEach((c) => {
    c && l.searchParams.set(c, r[c]);
  }), l.href;
}
const zh = /^age:\s*[\d.]+\s*$/im;
class Za {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new bs(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, s) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = s, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const s = this.loader = new self.XMLHttpRequest(), i = this.stats;
    i.loading.first = 0, i.loaded = 0, i.aborted = !1;
    const r = this.xhrSetup;
    r ? Promise.resolve().then(() => {
      if (!(this.loader !== s || this.stats.aborted))
        return r(s, t.url);
    }).catch((a) => {
      if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", t.url, !0), r(s, t.url);
    }).then(() => {
      this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, t, e);
    }).catch((a) => {
      this.callbacks.onError({
        code: s.status,
        text: a.message
      }, t, s, i);
    }) : this.openAndSendXhr(s, t, e);
  }
  openAndSendXhr(e, t, s) {
    e.readyState || e.open("GET", t.url, !0);
    const i = t.headers, {
      maxTimeToFirstByteMs: r,
      maxLoadTimeMs: a
    } = s.loadPolicy;
    if (i)
      for (const o in i)
        e.setRequestHeader(o, i[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && $(r) ? r : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: s
    } = this;
    if (!e || !t)
      return;
    const i = t.readyState, r = this.config;
    if (!s.aborted && i >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), i === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const a = t.status, o = t.responseType !== "text";
      if (a >= 200 && a < 300 && (o && t.response || t.responseText !== null)) {
        s.loading.end = Math.max(self.performance.now(), s.loading.first);
        const l = o ? t.response : t.responseText, c = t.responseType === "arraybuffer" ? l.byteLength : l.length;
        if (s.loaded = s.total = c, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first), !this.callbacks)
          return;
        const d = this.callbacks.onProgress;
        if (d && d(s, e, l, t), !this.callbacks)
          return;
        const h = {
          url: t.responseURL,
          data: l,
          code: a
        };
        this.callbacks.onSuccess(h, s, e, t);
      } else {
        const l = r.loadPolicy.errorRetry, c = s.retry, d = {
          url: e.url,
          data: void 0,
          code: a
        };
        Ss(l, c, !1, d) ? this.retry(l) : (A.error(`${a} while loading ${e.url}`), this.callbacks.onError({
          code: a,
          text: t.statusText
        }, e, t, s));
      }
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (Ss(e, t, !0))
      this.retry(e);
    else {
      var s;
      A.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
      const i = this.callbacks;
      i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: s
    } = this;
    this.retryDelay = Ui(e, s.retry), s.retry++, A.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t == null ? void 0 : t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && zh.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
function Xh() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const Zh = /(\d+)-(\d+)\/(\d+)/;
class ur {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || tu, this.controller = new self.AbortController(), this.stats = new bs();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, s) {
    const i = this.stats;
    if (i.loading.start)
      throw new Error("Loader can only be used once.");
    i.loading.start = self.performance.now();
    const r = Qh(e, this.controller.signal), a = s.onProgress, o = e.responseType === "arraybuffer", l = o ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: d
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = c && $(c) ? c : d, this.requestTimeout = self.setTimeout(() => {
      this.abortInternal(), s.onTimeout(i, e, this.response);
    }, t.timeout), self.fetch(this.request).then((h) => {
      this.response = this.loader = h;
      const u = Math.max(self.performance.now(), i.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = d, this.requestTimeout = self.setTimeout(() => {
        this.abortInternal(), s.onTimeout(i, e, this.response);
      }, d - (u - i.loading.start)), !h.ok) {
        const {
          status: f,
          statusText: g
        } = h;
        throw new su(g || "fetch, bad network response", f, h);
      }
      return i.loading.first = u, i.total = eu(h.headers) || i.total, a && $(t.highWaterMark) ? this.loadProgressively(h, i, e, t.highWaterMark, a) : o ? h.arrayBuffer() : e.responseType === "json" ? h.json() : h.text();
    }).then((h) => {
      const u = this.response;
      if (!u)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
      const f = h[l];
      f && (i.loaded = i.total = f);
      const g = {
        url: u.url,
        data: h,
        code: u.status
      };
      a && !$(t.highWaterMark) && a(i, e, h, u), s.onSuccess(g, i, e, u);
    }).catch((h) => {
      if (self.clearTimeout(this.requestTimeout), i.aborted)
        return;
      const u = h && h.code || 0, f = h ? h.message : null;
      s.onError({
        code: u,
        text: f
      }, e, h ? h.details : null, i);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, s, i = 0, r) {
    const a = new xa(), o = e.body.getReader(), l = () => o.read().then((c) => {
      if (c.done)
        return a.dataLength && r(t, s, a.flush(), e), Promise.resolve(new ArrayBuffer(0));
      const d = c.value, h = d.length;
      return t.loaded += h, h < i || a.dataLength ? (a.push(d), a.dataLength >= i && r(t, s, a.flush(), e)) : r(t, s, d, e), l();
    }).catch(() => Promise.reject());
    return l();
  }
}
function Qh(n, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(fe({}, n.headers))
  };
  return n.rangeEnd && t.headers.set("Range", "bytes=" + n.rangeStart + "-" + String(n.rangeEnd - 1)), t;
}
function Jh(n) {
  const e = Zh.exec(n);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function eu(n) {
  const e = n.get("Content-Range");
  if (e) {
    const s = Jh(e);
    if ($(s))
      return s;
  }
  const t = n.get("Content-Length");
  if (t)
    return parseInt(t);
}
function tu(n, e) {
  return new self.Request(n.url, e);
}
class su extends Error {
  constructor(e, t, s) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s;
  }
}
const iu = /\s/, nu = {
  newCue(n, e, t, s) {
    const i = [];
    let r, a, o, l, c;
    const d = self.VTTCue || self.TextTrackCue;
    for (let u = 0; u < s.rows.length; u++)
      if (r = s.rows[u], o = !0, l = 0, c = "", !r.isEmpty()) {
        var h;
        for (let m = 0; m < r.chars.length; m++)
          iu.test(r.chars[m].uchar) && o ? l++ : (c += r.chars[m].uchar, o = !1);
        r.cueStartTime = e, e === t && (t += 1e-4), l >= 16 ? l-- : l++;
        const f = $a(c.trim()), g = zi(e, t, f);
        n != null && (h = n.cues) != null && h.getCueById(g) || (a = new d(e, t, f), a.id = g, a.line = u + 1, a.align = "left", a.position = 10 + Math.min(80, Math.floor(l * 8 / 32) * 10), i.push(a));
      }
    return n && i.length && (i.sort((u, f) => u.line === "auto" || f.line === "auto" ? 0 : u.line > 8 && f.line > 8 ? f.line - u.line : u.line - f.line), i.forEach((u) => da(n, u))), i;
  }
}, ru = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, Qa = ye(ye({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller
  highBufferWatchdogPeriod: 2,
  // used by stream-controller
  nudgeOffset: 0.1,
  // used by stream-controller
  nudgeMaxRetry: 3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  loader: Za,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: kc,
  bufferController: Md,
  capLevelController: Xi,
  errorController: Tc,
  fpsController: dh,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: Xr,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableID3MetadataCues: !0,
  useMediaCapabilities: !0,
  certLoadPolicy: {
    default: ru
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, au()), {}, {
  subtitleStreamController: kd,
  subtitleTrackController: Od,
  timelineController: lh,
  audioStreamController: Dd,
  audioTrackController: wd,
  emeController: Ct,
  cmcdController: Wh,
  contentSteeringController: qh
});
function au() {
  return {
    cueHandler: nu,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function ou(n, e) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const t = Ai(n), s = ["manifest", "level", "frag"], i = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return s.forEach((r) => {
    const a = `${r === "level" ? "playlist" : r}LoadPolicy`, o = e[a] === void 0, l = [];
    i.forEach((c) => {
      const d = `${r}Loading${c}`, h = e[d];
      if (h !== void 0 && o) {
        l.push(d);
        const u = t[a].default;
        switch (e[a] = {
          default: u
        }, c) {
          case "TimeOut":
            u.maxLoadTimeMs = h, u.maxTimeToFirstByteMs = h;
            break;
          case "MaxRetry":
            u.errorRetry.maxNumRetry = h, u.timeoutRetry.maxNumRetry = h;
            break;
          case "RetryDelay":
            u.errorRetry.retryDelayMs = h, u.timeoutRetry.retryDelayMs = h;
            break;
          case "MaxRetryTimeout":
            u.errorRetry.maxRetryDelayMs = h, u.timeoutRetry.maxRetryDelayMs = h;
            break;
        }
      }
    }), l.length && A.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${a}": ${JSON.stringify(e[a])}`);
  }), ye(ye({}, t), e);
}
function Ai(n) {
  return n && typeof n == "object" ? Array.isArray(n) ? n.map(Ai) : Object.keys(n).reduce((e, t) => (e[t] = Ai(n[t]), e), {}) : n;
}
function lu(n) {
  const e = n.loader;
  e !== ur && e !== Za ? (A.log("[config]: Custom loader detected, cannot enable progressive streaming"), n.progressive = !1) : Xh() && (n.loader = ur, n.progressive = !0, n.enableSoftwareAES = !0, A.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
let Js;
class cu extends Bi {
  constructor(e, t) {
    super(e, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e.on(y.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e.off(y.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const s = this.hls.config.preferManagedMediaSource, i = [], r = {}, a = {};
    let o = !1, l = !1, c = !1;
    t.levels.forEach((d) => {
      var h, u;
      const f = d.attrs;
      let {
        audioCodec: g,
        videoCodec: m
      } = d;
      ((h = g) == null ? void 0 : h.indexOf("mp4a.40.34")) !== -1 && (Js || (Js = /chrome|firefox/i.test(navigator.userAgent)), Js && (d.audioCodec = g = void 0)), g && (d.audioCodec = g = Es(g, s)), ((u = m) == null ? void 0 : u.indexOf("avc1")) === 0 && (m = d.videoCodec = zl(m));
      const {
        width: p,
        height: x,
        unknownCodecs: S
      } = d;
      if (o || (o = !!(p && x)), l || (l = !!m), c || (c = !!g), S != null && S.length || g && !Us(g, "audio", s) || m && !Us(m, "video", s))
        return;
      const {
        CODECS: T,
        "FRAME-RATE": C,
        "HDCP-LEVEL": E,
        "PATHWAY-ID": L,
        RESOLUTION: _,
        "VIDEO-RANGE": I
      } = f, b = `${`${L || "."}-`}${d.bitrate}-${_}-${C}-${T}-${I}-${E}`;
      if (r[b])
        if (r[b].uri !== d.url && !d.attrs["PATHWAY-ID"]) {
          const w = a[b] += 1;
          d.attrs["PATHWAY-ID"] = new Array(w + 1).join(".");
          const G = new _t(d);
          r[b] = G, i.push(G);
        } else
          r[b].addGroupId("audio", f.AUDIO), r[b].addGroupId("text", f.SUBTITLES);
      else {
        const w = new _t(d);
        r[b] = w, a[b] = 1, i.push(w);
      }
    }), this.filterAndSortMediaOptions(i, t, o, l, c);
  }
  filterAndSortMediaOptions(e, t, s, i, r) {
    let a = [], o = [], l = e;
    if ((s || i) && r && (l = l.filter(({
      videoCodec: g,
      videoRange: m,
      width: p,
      height: x
    }) => (!!g || !!(p && x)) && lc(m))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          t.levels.length && this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);
          const g = new Error("no level with compatible codecs found in manifest");
          this.hls.trigger(y.ERROR, {
            type: q.MEDIA_ERROR,
            details: D.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: g,
            reason: g.message
          });
        }
      });
      return;
    }
    if (t.audioTracks) {
      const {
        preferManagedMediaSource: g
      } = this.hls.config;
      a = t.audioTracks.filter((m) => !m.audioCodec || Us(m.audioCodec, "audio", g)), fr(a);
    }
    t.subtitles && (o = t.subtitles, fr(o));
    const c = l.slice(0);
    l.sort((g, m) => {
      if (g.attrs["HDCP-LEVEL"] !== m.attrs["HDCP-LEVEL"])
        return (g.attrs["HDCP-LEVEL"] || "") > (m.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (s && g.height !== m.height)
        return g.height - m.height;
      if (g.frameRate !== m.frameRate)
        return g.frameRate - m.frameRate;
      if (g.videoRange !== m.videoRange)
        return Ts.indexOf(g.videoRange) - Ts.indexOf(m.videoRange);
      if (g.videoCodec !== m.videoCodec) {
        const p = Tn(g.videoCodec), x = Tn(m.videoCodec);
        if (p !== x)
          return x - p;
      }
      if (g.uri === m.uri && g.codecSet !== m.codecSet) {
        const p = xs(g.codecSet), x = xs(m.codecSet);
        if (p !== x)
          return x - p;
      }
      return g.averageBitrate !== m.averageBitrate ? g.averageBitrate - m.averageBitrate : 0;
    });
    let d = c[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== c.length)) {
      for (let g = 0; g < c.length; g++)
        if (c[g].pathwayId === l[0].pathwayId) {
          d = c[g];
          break;
        }
    }
    this._levels = l;
    for (let g = 0; g < l.length; g++)
      if (l[g] === d) {
        var h;
        this._firstLevel = g;
        const m = d.bitrate, p = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${m}`), ((h = this.hls.userConfig) == null ? void 0 : h.abrEwmaDefaultEstimate) === void 0) {
          const x = Math.min(m, this.hls.config.abrEwmaDefaultEstimateMax);
          x > p && p === Qa.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = x);
        }
        break;
      }
    const u = r && !i, f = {
      levels: l,
      audioTracks: a,
      subtitleTracks: o,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: r,
      video: i,
      altAudio: !u && a.some((g) => !!g.url)
    };
    this.hls.trigger(y.MANIFEST_PARSED, f), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const d = new Error("invalid level idx"), h = e < 0;
      if (this.hls.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: D.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: h,
        error: d,
        reason: d.message
      }), h)
        return;
      e = Math.min(e, t.length - 1);
    }
    const s = this.currentLevelIndex, i = this.currentLevel, r = i ? i.attrs["PATHWAY-ID"] : void 0, a = t[e], o = a.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = a, s === e && a.details && i && r === o)
      return;
    this.log(`Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${r ? " with Pathway " + r : ""}`);
    const l = {
      level: e,
      attrs: a.attrs,
      details: a.details,
      bitrate: a.bitrate,
      averageBitrate: a.averageBitrate,
      maxBitrate: a.maxBitrate,
      realBitrate: a.realBitrate,
      width: a.width,
      height: a.height,
      codecSet: a.codecSet,
      audioCodec: a.audioCodec,
      videoCodec: a.videoCodec,
      audioGroups: a.audioGroups,
      subtitleGroups: a.subtitleGroups,
      loaded: a.loaded,
      loadError: a.loadError,
      fragmentError: a.fragmentError,
      name: a.name,
      id: a.id,
      uri: a.uri,
      url: a.url,
      urlId: 0,
      audioGroupIds: a.audioGroupIds,
      textGroupIds: a.textGroupIds
    };
    this.hls.trigger(y.LEVEL_SWITCHING, l);
    const c = a.details;
    if (!c || c.live) {
      const d = this.switchParams(a.uri, i == null ? void 0 : i.details, c);
      this.loadPlaylist(d);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === J.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === Y.MAIN) {
      const s = t.elementaryStreams;
      if (!Object.keys(s).some((r) => !!s[r]))
        return;
      const i = this._levels[t.level];
      i != null && i.loadError && (this.log(`Resetting level error count of ${i.loadError} on frag buffered`), i.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      level: i,
      details: r
    } = t, a = this._levels[i];
    if (!a) {
      var o;
      this.warn(`Invalid level index ${i}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
      return;
    }
    i === this.currentLevelIndex ? (a.fragmentError === 0 && (a.loadError = 0), this.playlistLoaded(i, t, a.details)) : (s = t.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0);
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentLevelIndex, s = this.currentLevel;
    if (s && this.shouldLoadPlaylist(s)) {
      let i = s.uri;
      if (e)
        try {
          i = e.addDirectives(i);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      const r = s.attrs["PATHWAY-ID"];
      this.log(`Loading level index ${t}${(e == null ? void 0 : e.msn) !== void 0 ? " at sn " + e.msn + " part " + e.part : ""} with${r ? " Pathway " + r : ""} ${i}`), this.clearTimer(), this.hls.trigger(y.LEVEL_LOADING, {
        url: i,
        level: t,
        pathwayId: s.attrs["PATHWAY-ID"],
        id: 0,
        // Deprecated Level urlId
        deliveryDirectives: e || null
      });
    }
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    const s = this._levels.filter((i, r) => r !== e ? !0 : (this.steering && this.steering.removeLevel(i), i === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, i.details && i.details.fragments.forEach((a) => a.level = -1)), !1));
    ga(s), this._levels = s, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(y.LEVELS_UPDATED, {
      levels: s
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: s
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(y.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: s
    }));
  }
}
function fr(n) {
  const e = {};
  n.forEach((t) => {
    const s = t.groupId || "";
    t.id = e[s] = e[s] || 0, e[s]++;
  });
}
class du {
  constructor(e) {
    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const s in this.keyUriToKeyInfo) {
      const i = this.keyUriToKeyInfo[s].loader;
      if (i) {
        var t;
        if (e && e !== ((t = i.context) == null ? void 0 : t.frag.type))
          return;
        i.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyUriToKeyInfo = {};
  }
  createKeyLoadError(e, t = D.KEY_LOAD_ERROR, s, i, r) {
    return new Je({
      type: q.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: r,
      error: s,
      networkDetails: i
    });
  }
  loadClear(e, t) {
    if (this.emeController && this.config.emeEnabled) {
      const {
        sn: s,
        cc: i
      } = e;
      for (let r = 0; r < t.length; r++) {
        const a = t[r];
        if (i <= a.cc && (s === "initSegment" || a.sn === "initSegment" || s < a.sn)) {
          this.emeController.selectKeySystemFormat(a).then((o) => {
            a.setKeyFormat(o);
          });
          break;
        }
      }
    }
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var s, i;
    t && e.setKeyFormat(t);
    const r = e.decryptdata;
    if (!r) {
      const c = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(e, D.KEY_LOAD_ERROR, c));
    }
    const a = r.uri;
    if (!a)
      return Promise.reject(this.createKeyLoadError(e, D.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`)));
    let o = this.keyUriToKeyInfo[a];
    if ((s = o) != null && s.decryptdata.key)
      return r.key = o.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: o
      });
    if ((i = o) != null && i.keyLoadPromise) {
      var l;
      switch ((l = o.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return o.keyLoadPromise.then((c) => (r.key = c.keyInfo.decryptdata.key, {
            frag: e,
            keyInfo: o
          }));
      }
    }
    switch (o = this.keyUriToKeyInfo[a] = {
      decryptdata: r,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, r.method) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return r.keyFormat === "identity" ? this.loadKeyHTTP(o, e) : this.loadKeyEME(o, e);
      case "AES-128":
        return this.loadKeyHTTP(o, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, D.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const s = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      const i = this.emeController.loadKey(s);
      if (i)
        return (e.keyLoadPromise = i.then((r) => (e.mediaKeySessionContext = r, s))).catch((r) => {
          throw e.keyLoadPromise = null, r;
        });
    }
    return Promise.resolve(s);
  }
  loadKeyHTTP(e, t) {
    const s = this.config, i = s.loader, r = new i(s);
    return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((a, o) => {
      const l = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, c = s.keyLoadPolicy.default, d = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (u, f, g, m) => {
          const {
            frag: p,
            keyInfo: x,
            url: S
          } = g;
          if (!p.decryptdata || x !== this.keyUriToKeyInfo[S])
            return o(this.createKeyLoadError(p, D.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), m));
          x.decryptdata.key = p.decryptdata.key = new Uint8Array(u.data), p.keyLoader = null, x.loader = null, a({
            frag: p,
            keyInfo: x
          });
        },
        onError: (u, f, g, m) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, D.KEY_LOAD_ERROR, new Error(`HTTP Error ${u.code} loading key ${u.text}`), g, ye({
            url: l.url,
            data: void 0
          }, u)));
        },
        onTimeout: (u, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, D.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g));
        },
        onAbort: (u, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, D.INTERNAL_ABORTED, new Error("key loading aborted"), g));
        }
      };
      r.load(l, d, h);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: s,
      url: i
    } = e, r = s.loader;
    t.keyLoader === r && (t.keyLoader = null, s.loader = null), delete this.keyUriToKeyInfo[i], r && r.destroy();
  }
}
function Ja() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function eo() {
  if (!mt())
    return !1;
  const e = Ja();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function hu() {
  if (!eo())
    return !1;
  const n = mt();
  return typeof (n == null ? void 0 : n.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => n.isTypeSupported(Ht(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => n.isTypeSupported(Ht(e, "audio"))));
}
function uu() {
  var n;
  const e = Ja();
  return typeof (e == null || (n = e.prototype) == null ? void 0 : n.changeType) == "function";
}
const fu = 250, fs = 2, gu = 0.1, mu = 0.05;
class pu {
  constructor(e, t, s, i) {
    this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = e, this.media = t, this.fragmentTracker = s, this.hls = i;
  }
  destroy() {
    this.media = null, this.hls = this.fragmentTracker = null;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    const {
      config: s,
      media: i,
      stalled: r
    } = this;
    if (i === null)
      return;
    const {
      currentTime: a,
      seeking: o
    } = i, l = this.seeking && !o, c = !this.seeking && o;
    if (this.seeking = o, a !== e) {
      if (this.moved = !0, o || (this.nudgeRetry = 0), r !== null) {
        if (this.stallReported) {
          const p = self.performance.now() - r;
          A.warn(`playback not stuck anymore @${a}, after ${Math.round(p)}ms`), this.stallReported = !1;
        }
        this.stalled = null;
      }
      return;
    }
    if (c || l) {
      this.stalled = null;
      return;
    }
    if (i.paused && !o || i.ended || i.playbackRate === 0 || !ie.getBuffered(i).length) {
      this.nudgeRetry = 0;
      return;
    }
    const d = ie.bufferInfo(i, a, 0), h = d.nextStart || 0;
    if (o) {
      const p = d.len > fs, x = !h || t && t.start <= a || h - a > fs && !this.fragmentTracker.getPartialFragment(a);
      if (p || x)
        return;
      this.moved = !1;
    }
    if (!this.moved && this.stalled !== null) {
      var u;
      if (!(d.len > 0) && !h)
        return;
      const x = Math.max(h, d.start || 0) - a, S = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, C = (S == null || (u = S.details) == null ? void 0 : u.live) ? S.details.targetduration * 2 : fs, E = this.fragmentTracker.getPartialFragment(a);
      if (x > 0 && (x <= C || E)) {
        i.paused || this._trySkipBufferHole(E);
        return;
      }
    }
    const f = self.performance.now();
    if (r === null) {
      this.stalled = f;
      return;
    }
    const g = f - r;
    if (!o && g >= fu && (this._reportStall(d), !this.media))
      return;
    const m = ie.bufferInfo(i, a, s.maxBufferHole);
    this._tryFixBufferStall(m, g);
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t) {
    const {
      config: s,
      fragmentTracker: i,
      media: r
    } = this;
    if (r === null)
      return;
    const a = r.currentTime, o = i.getPartialFragment(a);
    o && (this._trySkipBufferHole(o) || !this.media) || (e.len > s.maxBufferHole || e.nextStart && e.nextStart - a < s.maxBufferHole) && t > s.highBufferWatchdogPeriod * 1e3 && (A.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: s,
      stallReported: i
    } = this;
    if (!i && s) {
      this.stallReported = !0;
      const r = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${JSON.stringify(e)})`);
      A.warn(r.message), t.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: D.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: r,
        buffer: e.len
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param partial - The partial fragment found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    const {
      config: t,
      hls: s,
      media: i
    } = this;
    if (i === null)
      return 0;
    const r = i.currentTime, a = ie.bufferInfo(i, r, 0), o = r < a.start ? a.start : a.nextStart;
    if (o) {
      const l = a.len <= t.maxBufferHole, c = a.len > 0 && a.len < 1 && i.readyState < 3, d = o - r;
      if (d > 0 && (l || c)) {
        if (d > t.maxBufferHole) {
          const {
            fragmentTracker: u
          } = this;
          let f = !1;
          if (r === 0) {
            const g = u.getAppendedFrag(0, Y.MAIN);
            g && o < g.end && (f = !0);
          }
          if (!f) {
            const g = e || u.getAppendedFrag(r, Y.MAIN);
            if (g) {
              let m = !1, p = g.end;
              for (; p < o; ) {
                const x = u.getPartialFragment(p);
                if (x)
                  p += x.duration;
                else {
                  m = !0;
                  break;
                }
              }
              if (m)
                return 0;
            }
          }
        }
        const h = Math.max(o + mu, r + gu);
        if (A.warn(`skipping hole, adjusting currentTime from ${r} to ${h}`), this.moved = !0, this.stalled = null, i.currentTime = h, e && !e.gap) {
          const u = new Error(`fragment loaded with buffer holes, seeking from ${r} to ${h}`);
          s.trigger(y.ERROR, {
            type: q.MEDIA_ERROR,
            details: D.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: u,
            reason: u.message,
            frag: e
          });
        }
        return h;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer() {
    const {
      config: e,
      hls: t,
      media: s,
      nudgeRetry: i
    } = this;
    if (s === null)
      return;
    const r = s.currentTime;
    if (this.nudgeRetry++, i < e.nudgeMaxRetry) {
      const a = r + (i + 1) * e.nudgeOffset, o = new Error(`Nudging 'currentTime' from ${r} to ${a}`);
      A.warn(o.message), s.currentTime = a, t.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: D.BUFFER_NUDGE_ON_STALL,
        error: o,
        fatal: !1
      });
    } else {
      const a = new Error(`Playhead still not moving while enough data buffered @${r} after ${e.nudgeMaxRetry} nudges`);
      A.error(a.message), t.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: D.BUFFER_STALLED_ERROR,
        error: a,
        fatal: !0
      });
    }
  }
}
const yu = 100;
class xu extends Vi {
  constructor(e, t, s) {
    super(e, t, s, "[stream-controller]", Y.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(y.ERROR, this.onError, this), e.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(y.BUFFER_CREATED, this.onBufferCreated, this), e.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(y.ERROR, this.onError, this), e.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(y.BUFFER_CREATED, this.onBufferCreated, this), e.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e) {
    if (this.levels) {
      const {
        lastCurrentTime: t,
        hls: s
      } = this;
      if (this.stopLoad(), this.setInterval(yu), this.level = -1, !this.startFragRequested) {
        let i = s.startLevel;
        i === -1 && (s.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = s.firstAutoLevel), s.nextLoadLevel = i, this.level = s.loadLevel, this.loadedmetadata = !1;
      }
      t > 0 && e === -1 && (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = k.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = k.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case k.WAITING_LEVEL: {
        const {
          levels: t,
          level: s
        } = this, i = t == null ? void 0 : t[s], r = i == null ? void 0 : i.details;
        if (r && (!r.live || this.levelLastLoaded === i)) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = k.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = k.IDLE;
          break;
        }
        break;
      }
      case k.FRAG_LOADING_WAITING_RETRY:
        {
          var e;
          const t = self.performance.now(), s = this.retryDate;
          if (!s || t >= s || (e = this.media) != null && e.seeking) {
            const {
              levels: i,
              level: r
            } = this, a = i == null ? void 0 : i[r];
            this.resetStartWhenNotLoaded(a || null), this.state = k.IDLE;
          }
        }
        break;
    }
    this.state === k.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: s,
      media: i
    } = this;
    if (t === null || !i && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const r = e.nextLoadLevel;
    if (!(s != null && s[r]))
      return;
    const a = s[r], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const l = this.getLevelDetails();
    if (l && this._streamEnded(o, l)) {
      const m = {};
      this.altAudio && (m.type = "video"), this.hls.trigger(y.BUFFER_EOS, m), this.state = k.ENDED;
      return;
    }
    e.loadLevel !== r && e.manualLevel === -1 && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = e.nextLoadLevel = r;
    const c = a.details;
    if (!c || this.state === k.WAITING_LEVEL || c.live && this.levelLastLoaded !== a) {
      this.level = r, this.state = k.WAITING_LEVEL;
      return;
    }
    const d = o.len, h = this.getMaxBufferLength(a.maxBitrate);
    if (d >= h)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const u = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let f = this.getNextFragment(u, c);
    if (this.couldBacktrack && !this.fragPrevious && f && f.sn !== "initSegment" && this.fragmentTracker.getState(f) !== pe.OK) {
      var g;
      const p = ((g = this.backtrackFragment) != null ? g : f).sn - c.startSN, x = c.fragments[p - 1];
      x && f.cc === x.cc && (f = x, this.fragmentTracker.removeFragment(x));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (f && this.isLoopLoading(f, u)) {
      if (!f.gap) {
        const p = this.audioOnly && !this.altAudio ? ee.AUDIO : ee.VIDEO, x = (p === ee.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        x && this.afterBufferFlushed(x, p, Y.MAIN);
      }
      f = this.getNextFragmentLoopLoading(f, c, o, Y.MAIN, h);
    }
    f && (f.initSegment && !f.initSegment.data && !this.bitrateTest && (f = f.initSegment), this.loadFragment(f, a, u));
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    this.fragCurrent = e, i === pe.NOT_LOADED || i === pe.PARTIAL ? e.sn === "initSegment" ? this._loadInitSegment(e, t) : this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : (this.startFragRequested = !0, super.loadFragment(e, t, s)) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, Y.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let s;
      const i = this.getAppendedFrag(t.currentTime);
      i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
      const r = this.getLevelDetails();
      if (r != null && r.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < r.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, l = e[o], c = this.fragLastKbps;
        c && this.fragCurrent ? s = this.fragCurrent.duration * l.maxBitrate / (1e3 * c) + 1 : s = 0;
      } else
        s = 0;
      const a = this.getBufferedFrag(t.currentTime + s);
      if (a) {
        const o = this.followingBufferedFrag(a);
        if (o) {
          this.abortCurrentFrag();
          const l = o.maxStartPTS ? o.maxStartPTS : o.start, c = o.duration, d = Math.max(a.end, l + Math.min(Math.max(c - this.config.maxFragLookUpTolerance, c * (this.couldBacktrack ? 0.5 : 0.125)), c * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(d, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case k.KEY_LOADING:
      case k.FRAG_LOADING:
      case k.FRAG_LOADING_WAITING_RETRY:
      case k.PARSING:
      case k.PARSED:
        this.state = k.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const s = t.media;
    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), s.addEventListener("playing", this.onvplaying), s.addEventListener("seeked", this.onvseeked), this.gapController = new pu(this.config, s, this.fragmentTracker, this.hls);
  }
  onMediaDetaching() {
    const {
      media: e
    } = this;
    e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching();
  }
  onMediaPlaying() {
    this.tick();
  }
  onMediaSeeked() {
    const e = this.media, t = e ? e.currentTime : null;
    $(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
    const s = this.getMainFwdBufferInfo();
    if (s === null || s.len === 0) {
      this.warn(`Main forward buffer length on "seeked" event ${s ? s.len : "empty"})`);
      return;
    }
    this.tick();
  }
  onManifestLoading() {
    this.log("Trigger BUFFER_RESET"), this.hls.trigger(y.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = !1;
  }
  onManifestParsed(e, t) {
    let s = !1, i = !1;
    t.levels.forEach((r) => {
      const a = r.audioCodec;
      a && (s = s || a.indexOf("mp4a.40.2") !== -1, i = i || a.indexOf("mp4a.40.5") !== -1);
    }), this.audioCodecSwitch = s && i && !uu(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== k.IDLE)
      return;
    const i = s[t.level];
    (!i.details || i.details.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(i.details)) && (this.state = k.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      levels: i
    } = this, r = t.level, a = t.details, o = a.totalduration;
    if (!i) {
      this.warn(`Levels were reset while loading level ${r}`);
      return;
    }
    this.log(`Level ${r} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""}, cc [${a.startCC}, ${a.endCC}] duration:${o}`);
    const l = i[r], c = this.fragCurrent;
    c && (this.state === k.FRAG_LOADING || this.state === k.FRAG_LOADING_WAITING_RETRY) && c.level !== t.level && c.loader && this.abortCurrentFrag();
    let d = 0;
    if (a.live || (s = l.details) != null && s.live) {
      var h;
      if (this.checkLiveUpdate(a), a.deltaUpdateFailed)
        return;
      d = this.alignPlaylists(a, l.details, (h = this.levelLastLoaded) == null ? void 0 : h.details);
    }
    if (l.details = a, this.levelLastLoaded = l, this.hls.trigger(y.LEVEL_UPDATED, {
      details: a,
      level: r
    }), this.state === k.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(a))
        return;
      this.state = k.IDLE;
    }
    this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, d), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const {
      frag: s,
      part: i,
      payload: r
    } = e, {
      levels: a
    } = this;
    if (!a) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = a[s.level], l = o.details;
    if (!l) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const c = o.videoCodec, d = l.PTSKnown || !l.live, h = (t = s.initSegment) == null ? void 0 : t.data, u = this._getAudioCodec(o), f = this.transmuxer = this.transmuxer || new Oa(this.hls, Y.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), g = i ? i.index : -1, m = g !== -1, p = new $i(s.level, s.sn, s.stats.chunkCount, r.byteLength, g, m), x = this.initPTS[s.cc];
    f.push(r, h, u, c, s, i, l.totalduration, d, p, x);
  }
  onAudioTrackSwitching(e, t) {
    const s = this.altAudio;
    if (!!!t.url) {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const a = this.fragCurrent;
        a && (this.log("Switching to main audio track, cancel main fragment load"), a.abortRequests(), this.fragmentTracker.removeFragment(a)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      const r = this.hls;
      s && (r.trigger(y.BUFFER_FLUSHING, {
        startOffset: 0,
        endOffset: Number.POSITIVE_INFINITY,
        type: null
      }), this.fragmentTracker.removeAllFragments()), r.trigger(y.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const s = t.id, i = !!this.hls.audioTracks[s].url;
    if (i) {
      const r = this.videoBuffer;
      r && this.mediaBuffer !== r && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = r);
    }
    this.altAudio = i, this.tick();
  }
  onBufferCreated(e, t) {
    const s = t.tracks;
    let i, r, a = !1;
    for (const o in s) {
      const l = s[o];
      if (l.id === "main") {
        if (r = o, i = l, o === "video") {
          const c = s[o];
          c && (this.videoBuffer = c.buffer);
        }
      } else
        a = !0;
    }
    a && i ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s && s.type !== Y.MAIN)
      return;
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === k.PARSED && (this.state = k.IDLE);
      return;
    }
    const r = i ? i.stats : s.stats;
    this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)), s.sn !== "initSegment" && (this.fragPrevious = s), this.fragBufferedComplete(s, i);
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = k.ERROR;
      return;
    }
    switch (t.details) {
      case D.FRAG_GAP:
      case D.FRAG_PARSING_ERROR:
      case D.FRAG_DECRYPT_ERROR:
      case D.FRAG_LOAD_ERROR:
      case D.FRAG_LOAD_TIMEOUT:
      case D.KEY_LOAD_ERROR:
      case D.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(Y.MAIN, t);
        break;
      case D.LEVEL_LOAD_ERROR:
      case D.LEVEL_LOAD_TIMEOUT:
      case D.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === k.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === J.LEVEL && (this.state = k.IDLE);
        break;
      case D.BUFFER_APPEND_ERROR:
      case D.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "main")
          return;
        if (t.details === D.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case D.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  // Checks the health of the buffer and attempts to resolve playback stalls.
  checkBuffer() {
    const {
      media: e,
      gapController: t
    } = this;
    if (!(!e || !t || !e.readyState)) {
      if (this.loadedmetadata || !ie.getBuffered(e).length) {
        const s = this.state !== k.IDLE ? this.fragCurrent : null;
        t.poll(this.lastCurrentTime, s);
      }
      this.lastCurrentTime = e.currentTime;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = k.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ee.AUDIO || this.audioOnly && !this.altAudio) {
      const s = (t === ee.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      this.afterBufferFlushed(s, t, Y.MAIN), this.tick();
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let s = this.startPosition;
    if (s >= 0 && t < s) {
      if (e.seeking) {
        this.log(`could not seek to ${s}, already seeking at ${t}`);
        return;
      }
      const i = ie.getBuffered(e), a = (i.length ? i.start(0) : 0) - s;
      a > 0 && (a < this.config.maxBufferHole || a < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${a} to match buffer start`), s += a, this.startPosition = s), this.log(`seek to target start position ${s} from current time ${t}`), e.currentTime = s;
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = !0, this._doFragLoad(e, t).then((s) => {
      const {
        hls: i
      } = this;
      if (!s || this.fragContextChanged(e))
        return;
      t.fragmentError = 0, this.state = k.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const r = e.stats;
      r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now(), i.trigger(y.FRAG_LOADED, s), e.bitrateTest = !1;
    });
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "main", {
      hls: i
    } = this, {
      remuxResult: r,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: c,
      level: d
    } = o, {
      video: h,
      text: u,
      id3: f,
      initSegment: g
    } = r, {
      details: m
    } = d, p = this.altAudio ? void 0 : r.audio;
    if (this.fragContextChanged(l)) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = k.PARSING, g) {
      if (g != null && g.tracks) {
        const T = l.initSegment || l;
        this._bufferInitSegment(d, g.tracks, T, a), i.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
          frag: T,
          id: s,
          tracks: g.tracks
        });
      }
      const x = g.initPTS, S = g.timescale;
      $(x) && (this.initPTS[l.cc] = {
        baseTime: x,
        timescale: S
      }, i.trigger(y.INIT_PTS_FOUND, {
        frag: l,
        id: s,
        initPTS: x,
        timescale: S
      }));
    }
    if (h && m && l.sn !== "initSegment") {
      const x = m.fragments[l.sn - 1 - m.startSN], S = l.sn === m.startSN, T = !x || l.cc > x.cc;
      if (r.independent !== !1) {
        const {
          startPTS: C,
          endPTS: E,
          startDTS: L,
          endDTS: _
        } = h;
        if (c)
          c.elementaryStreams[h.type] = {
            startPTS: C,
            endPTS: E,
            startDTS: L,
            endDTS: _
          };
        else if (h.firstKeyFrame && h.independent && a.id === 1 && !T && (this.couldBacktrack = !0), h.dropped && h.independent) {
          const I = this.getMainFwdBufferInfo(), P = (I ? I.end : this.getLoadPosition()) + this.config.maxBufferHole, b = h.firstKeyFramePTS ? h.firstKeyFramePTS : C;
          if (!S && P < b - this.config.maxBufferHole && !T) {
            this.backtrack(l);
            return;
          } else T && (l.gap = !0);
          l.setElementaryStreamInfo(h.type, l.start, E, l.start, _, !0);
        } else S && C > fs && (l.gap = !0);
        l.setElementaryStreamInfo(h.type, C, E, L, _), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(h, l, c, a, S || T);
      } else if (S || T)
        l.gap = !0;
      else {
        this.backtrack(l);
        return;
      }
    }
    if (p) {
      const {
        startPTS: x,
        endPTS: S,
        startDTS: T,
        endDTS: C
      } = p;
      c && (c.elementaryStreams[ee.AUDIO] = {
        startPTS: x,
        endPTS: S,
        startDTS: T,
        endDTS: C
      }), l.setElementaryStreamInfo(ee.AUDIO, x, S, T, C), this.bufferFragmentData(p, l, c, a);
    }
    if (m && f != null && (t = f.samples) != null && t.length) {
      const x = {
        id: s,
        frag: l,
        details: m,
        samples: f.samples
      };
      i.trigger(y.FRAG_PARSING_METADATA, x);
    }
    if (m && u) {
      const x = {
        id: s,
        frag: l,
        details: m,
        samples: u.samples
      };
      i.trigger(y.FRAG_PARSING_USERDATA, x);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== k.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
    const {
      audio: r,
      video: a,
      audiovideo: o
    } = t;
    if (r) {
      let l = e.audioCodec;
      const c = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        l && (l.indexOf("mp4a.40.5") !== -1 ? l = "mp4a.40.2" : l = "mp4a.40.5");
        const d = r.metadata;
        d && "channelCount" in d && (d.channelCount || 1) !== 1 && c.indexOf("firefox") === -1 && (l = "mp4a.40.5");
      }
      l && l.indexOf("mp4a.40.5") !== -1 && c.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (l = "mp4a.40.2", this.log(`Android: force audio codec to ${l}`)), e.audioCodec && e.audioCodec !== l && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`), r.levelCodec = l, r.id = "main", this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l || ""}/${e.audioCodec || ""}/${r.codec}]`);
    }
    a && (a.levelCodec = e.videoCodec, a.id = "main", this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${a.codec}]`)), o && this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), this.hls.trigger(y.BUFFER_CODECS, t), Object.keys(t).forEach((l) => {
      const d = t[l].initSegment;
      d != null && d.byteLength && this.hls.trigger(y.BUFFER_APPENDING, {
        type: l,
        data: d,
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type
      });
    }), this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, Y.MAIN);
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = k.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const s = e.currentTime;
      if (ie.isBuffered(e, s) ? t = this.getAppendedFrag(s) : ie.isBuffered(e, s + 0.1) && (t = this.getAppendedFrag(s + 0.1)), t) {
        this.backtrackFragment = null;
        const i = this.fragPlaying, r = t.level;
        (!i || t.sn !== i.sn || i.level !== r) && (this.fragPlaying = t, this.hls.trigger(y.FRAG_CHANGED, {
          frag: t
        }), (!i || i.level !== r) && this.hls.trigger(y.LEVEL_SWITCHED, {
          level: r
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    const e = this.media;
    return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null;
  }
  get currentProgramDateTime() {
    const e = this.media;
    if (e) {
      const t = e.currentTime, s = this.currentFrag;
      if (s && $(t) && $(s.programDateTime)) {
        const i = s.programDateTime + (t - s.start) * 1e3;
        return new Date(i);
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class tt {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return "1.5.17";
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return eo();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return hu();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return mt();
  }
  static get Events() {
    return y;
  }
  static get ErrorTypes() {
    return q;
  }
  static get ErrorDetails() {
    return D;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return tt.defaultConfig ? tt.defaultConfig : Qa;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    tt.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = !1, this._emitter = new Yi(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, al(e.debug || !1, "Hls instance");
    const t = this.config = ou(tt.DefaultConfig, e);
    this.userConfig = e, t.progressive && lu(t);
    const {
      abrController: s,
      bufferController: i,
      capLevelController: r,
      errorController: a,
      fpsController: o
    } = t, l = new a(this), c = this.abrController = new s(this), d = this.bufferController = new i(this), h = this.capLevelController = new r(this), u = new o(this), f = new ec(this), g = new rc(this), m = t.contentSteeringController, p = m ? new m(this) : null, x = this.levelController = new cu(this, p), S = new Oc(this), T = new du(this.config), C = this.streamController = new xu(this, S, T);
    h.setStreamController(C), u.setStreamController(C);
    const E = [f, x, C];
    p && E.splice(1, 0, p), this.networkControllers = E;
    const L = [c, d, h, u, g, S];
    this.audioTrackController = this.createController(t.audioTrackController, E);
    const _ = t.audioStreamController;
    _ && E.push(new _(this, S, T)), this.subtitleTrackController = this.createController(t.subtitleTrackController, E);
    const I = t.subtitleStreamController;
    I && E.push(new I(this, S, T)), this.createController(t.timelineController, L), T.emeController = this.emeController = this.createController(t.emeController, L), this.cmcdController = this.createController(t.cmcdController, L), this.latencyController = this.createController(ac, L), this.coreComponents = L, E.push(l);
    const P = l.onErrorOut;
    typeof P == "function" && this.on(y.ERROR, P, l);
  }
  createController(e, t) {
    if (e) {
      const s = new e(this);
      return t && t.push(s), s;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, s = this) {
    this._emitter.on(e, t, s);
  }
  once(e, t, s = this) {
    this._emitter.once(e, t, s);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, s = this, i) {
    this._emitter.off(e, t, s, i);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, s) {
    return this._emitter.emit(e, t, s);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (s) {
      if (A.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
        this.triggeringException = !0;
        const i = e === y.ERROR;
        this.trigger(y.ERROR, {
          type: q.OTHER_ERROR,
          details: D.INTERNAL_EXCEPTION,
          fatal: i,
          event: e,
          error: s
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    A.log("destroy"), this.trigger(y.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    A.log("attachMedia"), this._media = e, this.trigger(y.MEDIA_ATTACHING, {
      media: e
    });
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    A.log("detachMedia"), this.trigger(y.MEDIA_DETACHING, void 0), this._media = null;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, s = this.url, i = this.url = Oi.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, A.log(`loadSource:${i}`), t && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(y.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1) {
    A.log(`startLoad(${e})`), this.started = !0, this.networkControllers.forEach((t) => {
      t.startLoad(e);
    });
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    A.log("stopLoad"), this.started = !1, this.networkControllers.forEach((e) => {
      e.stopLoad();
    });
  }
  /**
   * Resumes stream controller segment loading if previously started.
   */
  resumeBuffering() {
    this.started && this.networkControllers.forEach((e) => {
      "fragmentLoader" in e && e.startLoad(-1);
    });
  }
  /**
   * Stops stream controller segment loading without changing 'started' state like stopLoad().
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    this.networkControllers.forEach((e) => {
      "fragmentLoader" in e && e.stopLoad();
    });
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    A.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    A.log("recoverMediaError");
    const e = this._media;
    this.detachMedia(), e && this.attachMedia(e);
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    A.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    A.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    A.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    A.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    A.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (A.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    oc(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e) return 0;
    const s = e.length;
    for (let i = 0; i < s; i++)
      if (e[i].maxBitrate >= t)
        return i;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: s
    } = this;
    let i;
    if (t === -1 && e != null && e.length ? i = e.length - 1 : i = t, s)
      for (let r = i; r--; ) {
        const a = e[r].attrs["HDCP-LEVEL"];
        if (a && a <= s)
          return r;
      }
    return i;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return (t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e);
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return (t = this.subtitleTrackController) == null || t.setSubtitleOption(e), null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
}
tt.defaultConfig = void 0;
const kt = "https://sdk-api.neynar.com", Eu = "https://api.allorigins.win/get", Li = "https://i.imgur.com/gxH8azy.png";
var Tu = {
  NVM_INC: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/include/node",
  npm_package_devDependencies__storybook_test: "^8.2.9",
  npm_package_devDependencies__storybook_addon_links: "^8.2.9",
  TERM_PROGRAM: "vscode",
  NODE: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin/node",
  INIT_CWD: "/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react",
  ANDROID_HOME: "/Users/shreyaschorge/Library/Android/sdk",
  NVM_CD_FLAGS: "-q",
  npm_package_devDependencies_typescript: "^5.4.5",
  npm_config_version_git_tag: "true",
  TERM: "xterm-256color",
  SHELL: "/bin/zsh",
  npm_package_devDependencies_vite: "^5.2.10",
  npm_package_devDependencies__storybook_addon_essentials: "^8.2.9",
  HOMEBREW_REPOSITORY: "/opt/homebrew",
  TMPDIR: "/var/folders/32/91zw5j9s2dngfbj1ltrp5gnh0000gn/T/",
  npm_package_devDependencies__pigment_css_vite_plugin: "^0.0.9",
  npm_config_init_license: "MIT",
  TERM_PROGRAM_VERSION: "1.96.2",
  npm_package_devDependencies__vitejs_plugin_react: "^4.2.1",
  npm_package_devDependencies_hls_js: "^1.5.13",
  ZDOTDIR: "/Users/shreyaschorge",
  ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
  MallocNanoZone: "0",
  npm_package_devDependencies__storybook_blocks: "^8.2.9",
  npm_package_devDependencies__storybook_addon_interactions: "^8.2.9",
  npm_config_registry: "https://registry.yarnpkg.com",
  npm_package_peerDependencies_react_dom: "^18.3.0",
  npm_package_readmeFilename: "README.md",
  NVM_DIR: "/Users/shreyaschorge/.nvm",
  USER: "shreyaschorge",
  npm_package_description: "Farcaster frontend component library powered by Neynar",
  npm_package_devDependencies_dotenv: "^16.4.5",
  npm_package_devDependencies__types_react: "^18.3.0",
  npm_package_license: "MIT",
  COMMAND_MODE: "unix2003",
  npm_package_scripts_build_storybook: "storybook build",
  npm_package_devDependencies_vite_tsconfig_paths: "^4.3.2",
  npm_package_devDependencies__babel_core: "^7.24.4",
  SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.eHn0HChl6E/Listeners",
  npm_package_devDependencies_eslint_plugin_storybook: "^0.8.0",
  __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0",
  npm_execpath: "/opt/homebrew/Cellar/yarn/1.22.22/libexec/bin/yarn.js",
  npm_package_dependencies_storybook_source_link: "^4.0.1",
  npm_package_module: "dist/bundle.es.js",
  npm_package_author_name: "Neynar",
  npm_package_devDependencies__types_react_dom: "^18.3.0",
  npm_package_peerDependencies_swr: "^2.2.5",
  npm_package_peerDependencies__pigment_css_react: "^0.0.9",
  PATH: "/var/folders/32/91zw5j9s2dngfbj1ltrp5gnh0000gn/T/yarn--1736423021668-0.9448083458265:/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react/node_modules/.bin:/Users/shreyaschorge/.config/yarn/link/node_modules/.bin:/Users/shreyaschorge/Desktop/frontend-monorepo/node_modules/.bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/lib/node_modules/npm/bin/node-gyp-bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin/node_modules/npm/bin/node-gyp-bin:/opt/homebrew/opt/openjdk/bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Applications/Postgres.app/Contents/Versions/latest/bin:/opt/homebrew/opt/openjdk/bin:/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin:/Users/shreyaschorge/.orbstack/bin:/Users/shreyaschorge/Library/Android/sdk/emulator:/Users/shreyaschorge/Library/Android/sdk/platform-tools:/Users/shreyaschorge/Library/Application Support/Code/User/globalStorage/github.copilot-chat/debugCommand:/Users/shreyaschorge/.orbstack/bin:/Users/shreyaschorge/Library/Android/sdk/emulator:/Users/shreyaschorge/Library/Android/sdk/platform-tools",
  npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build"]}',
  _: "/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react/node_modules/.bin/vite",
  USER_ZDOTDIR: "/Users/shreyaschorge",
  __CFBundleIdentifier: "com.microsoft.VSCode",
  PWD: "/Users/shreyaschorge/Desktop/frontend-monorepo/packages/react",
  npm_package_devDependencies__storybook_addon_onboarding: "^8.2.9",
  npm_lifecycle_event: "build",
  npm_package_devDependencies__storybook_addon_themes: "^8.2.9",
  LANG: "en_US.UTF-8",
  npm_package_devDependencies_storybook: "^8.2.9",
  npm_package_types: "dist/index.d.ts",
  npm_package_name: "@neynar/react",
  npm_package_devDependencies__pigment_css_react: "^0.0.9",
  npm_package_devDependencies__babel_preset_react: "^7.24.1",
  npm_package_devDependencies__babel_preset_env: "^7.24.4",
  npm_package_scripts_build: "tsc && vite build",
  npm_config_version_commit_hooks: "true",
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
  XPC_FLAGS: "0x0",
  npm_package_devDependencies__chromatic_com_storybook: "^1.3.3",
  npm_config_bin_links: "true",
  npm_package_devDependencies__storybook_react: "^8.2.9",
  npm_package_dependencies_next: "14.2.16",
  npm_package_devDependencies_vite_plugin_dts: "^4.3.0",
  npm_package_main: "dist/bundle.cjs.js",
  XPC_SERVICE_NAME: "0",
  npm_package_version: "0.9.7",
  VSCODE_INJECTION: "1",
  SHLVL: "6",
  HOME: "/Users/shreyaschorge",
  VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
  npm_package_peerDependencies_hls_js: "^1.5.13",
  npm_package_scripts_storybook: "storybook dev -p 6006",
  npm_config_save_prefix: "^",
  npm_config_strict_ssl: "true",
  HOMEBREW_PREFIX: "/opt/homebrew",
  npm_config_version_git_message: "v%s",
  LOGNAME: "shreyaschorge",
  YARN_WRAP_OUTPUT: "false",
  PREFIX: "/opt/homebrew",
  npm_lifecycle_script: "tsc && vite build",
  VSCODE_GIT_IPC_HANDLE: "/var/folders/32/91zw5j9s2dngfbj1ltrp5gnh0000gn/T/vscode-git-5dbc6eb4e3.sock",
  npm_package_devDependencies__storybook_react_vite: "^8.2.9",
  npm_package_peerDependencies_react: "^18.3.0",
  npm_package_eslintConfig_extends_1: "plugin:storybook/recommended",
  NVM_BIN: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin",
  npm_package_eslintConfig_extends_0: "react-app",
  npm_config_version_git_sign: "",
  npm_config_ignore_scripts: "",
  npm_config_user_agent: "yarn/1.22.22 npm/? node/v22.9.0 darwin arm64",
  VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",
  GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
  HOMEBREW_CELLAR: "/opt/homebrew/Cellar",
  INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:/opt/homebrew/share/info:/opt/homebrew/share/info:",
  npm_package_devDependencies_axios: "^1.6.8",
  npm_package_devDependencies_swr: "^2.2.5",
  npm_config_init_version: "1.0.0",
  npm_config_ignore_optional: "",
  COLORTERM: "truecolor",
  npm_node_execpath: "/Users/shreyaschorge/.nvm/versions/node/v22.9.0/bin/node",
  npm_config_version_tag_prefix: "v",
  NODE_ENV: "production",
  SDK_VERSION: '"0.9.7"'
};
const vu = Tu.SDK_VERSION, Pt = async (n, e = {}) => (e.headers = {
  ...e.headers,
  "x-sdk": "react",
  "x-sdk-version": vu
}, fetch(n, e));
async function Su({
  type: n,
  identifier: e,
  viewerFid: t,
  client_id: s
}) {
  try {
    let i = `${kt}/v2/farcaster/cast?type=${n}&identifier=${e}${t ? `&viewer_fid=${t}` : ""}&client_id=${s}`;
    const a = await (await Pt(i)).json();
    return (a == null ? void 0 : a.cast) || null;
  } catch (i) {
    return console.error("Error fetching cast by identifier", i), null;
  }
}
const Au = ({
  type: n,
  identifier: e,
  viewerFid: t,
  allowReactions: s = !1,
  renderEmbeds: i = !0,
  renderFrames: r = !1,
  onLikeBtnPress: a,
  onRecastBtnPress: o,
  onCommentBtnPress: l,
  onFrameBtnPress: c,
  containerStyles: d,
  textStyles: h
}) => {
  const {
    client_id: u
  } = it(), [f, g] = te.useState(null), [m, p] = te.useState(!0), [x, S] = te.useState(null), T = (f == null ? void 0 : f.author.fid) === t;
  return te.useEffect(() => {
    n && e && (p(!0), S(null), Su({
      type: n,
      identifier: e,
      viewerFid: t,
      client_id: u
    }).then((C) => {
      g(C);
    }).catch((C) => {
      S(C);
    }).finally(() => {
      p(!1);
    }));
  }, [n, e, t, u]), m ? /* @__PURE__ */ v.jsx("div", {
    children: "Loading..."
  }) : !f || x ? /* @__PURE__ */ v.jsx("div", {
    children: "Error: could not fetch cast data"
  }) : r && !c ? /* @__PURE__ */ v.jsx("div", {
    children: "Error: onFrameBtnPress must be provided when renderEmbeds is true."
  }) : /* @__PURE__ */ v.jsx(_s, {
    username: f.author.username,
    displayName: f.author.display_name,
    avatarImgUrl: f.author.pfp_url,
    text: f.text,
    hash: f.hash,
    reactions: f.reactions,
    replies: f.replies.count,
    embeds: f.embeds ?? [],
    frames: f.frames ?? [],
    renderEmbeds: i,
    renderFrames: r,
    channel: f.channel ? {
      id: f.channel.id,
      name: f.channel.name,
      url: f.parent_url
    } : void 0,
    viewerFid: t,
    allowReactions: s,
    hasPowerBadge: f.author.power_badge,
    isOwnProfile: T,
    containerStyles: d,
    textStyles: h,
    onLikeBtnPress: a,
    onRecastBtnPress: o,
    onCommentBtnPress: l,
    onFrameBtnPress: c
  });
}, Lu = /* @__PURE__ */ K("a")({
  classes: ["s1uo4lx4"]
}), ei = /* @__PURE__ */ new Map(), is = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), mr = (n) => new Promise((e) => setTimeout(e, n)), to = async (n, e = 0) => {
  const t = new URL(n).hostname;
  if (gr.get(t))
    return {
      ogImage: "",
      ogTitle: "",
      ogDescription: ""
    };
  if (ei.has(n))
    return ei.get(n);
  if (is.has(n))
    return is.get(n);
  const s = (async () => {
    try {
      await mr(100);
      const i = await fetch(`${Eu}?url=${encodeURIComponent(n)}`, {
        method: "GET"
      });
      if (!i.ok) {
        if (i.status === 429 && e < 5) {
          const p = Math.pow(2, e) * 1e3;
          return await mr(p), to(n, e + 1);
        }
        throw gr.set(t, !0), new Error(`Failed to fetch Open Graph data: ${i.statusText}`);
      }
      const r = await i.json(), o = new DOMParser().parseFromString(r.contents, "text/html"), l = o.querySelector('meta[property="og:image"]'), c = o.querySelector('meta[property="og:title"]'), d = o.querySelector('meta[property="og:description"]'), h = o.querySelector("title"), u = l && l.getAttribute("content") || "", f = c ? c.getAttribute("content") || "" : h ? h.innerText : "", g = d && d.getAttribute("content") || "", m = {
        ogImage: u,
        ogTitle: f,
        ogDescription: g
      };
      return ei.set(n, m), m;
    } catch (i) {
      return console.error("Error fetching Open Graph data", i), {
        ogImage: "",
        ogTitle: "",
        ogDescription: ""
      };
    } finally {
      is.delete(n);
    }
  })();
  return is.set(n, s), s;
}, Ci = [];
let ti = 0;
const Cu = 5, Ru = (n) => {
  Ci.push(n), so();
}, so = async () => {
  if (ti >= Cu || Ci.length === 0)
    return;
  ti++;
  const n = Ci.shift();
  n && await n(), ti--, so();
}, _u = ({
  src: n,
  alt: e,
  style: t
}) => /* @__PURE__ */ v.jsx("img", {
  src: n,
  alt: e,
  style: {
    display: "block",
    height: "auto",
    maxHeight: "150px",
    width: "auto",
    maxWidth: "100%",
    objectFit: "cover",
    border: "1px solid grey",
    borderRadius: "10px",
    margin: "10px 0",
    ...t
  }
}), bu = ({
  url: n
}) => {
  const e = te.useRef(null);
  return te.useEffect(() => {
    if (e.current)
      if (tt.isSupported() && n.endsWith(".m3u8")) {
        const t = new tt();
        t.loadSource(n), t.attachMedia(e.current), t.on(tt.Events.MANIFEST_PARSED, () => {
          e.current.play();
        });
      } else
        e.current.src = n, e.current.addEventListener("loadedmetadata", () => {
          e.current.play();
        });
  }, [n]), /* @__PURE__ */ v.jsx("video", {
    ref: e,
    controls: !0,
    muted: !0,
    style: {
      width: "auto",
      maxWidth: "100%",
      maxHeight: "400px",
      borderRadius: "10px",
      margin: "10px 0",
      objectFit: "contain"
    }
  });
}, Iu = (n) => /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/.test(n) || n.startsWith("https://imagedelivery.net"), Du = (n, e, t) => {
  const [s, i] = te.useState([]), r = te.useCallback(async (a) => (await Promise.all(a.map(async (l) => {
    if (l.url) {
      const c = l.url;
      return Iu(c) ? /* @__PURE__ */ v.jsx(_u, {
        src: c,
        alt: "Embedded image"
      }, c) : c.endsWith(".m3u8") || c.endsWith(".mp4") ? /* @__PURE__ */ v.jsx(bu, {
        url: c
      }, c) : new Promise((d) => {
        Ru(async () => {
          const {
            ogImage: h,
            ogTitle: u
          } = await to(c), f = new URL(c).hostname.replace("www.", "");
          d(/* @__PURE__ */ v.jsxs(Lu, {
            href: c,
            target: "_blank",
            rel: "noreferrer",
            children: [h && /* @__PURE__ */ v.jsx("img", {
              src: h,
              alt: u,
              style: {
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "5px"
              }
            }), /* @__PURE__ */ v.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: [/* @__PURE__ */ v.jsx("p", {
                style: {
                  margin: 0
                },
                children: u || c
              }), /* @__PURE__ */ v.jsx("p", {
                style: {
                  margin: 0,
                  color: "grey",
                  fontSize: "12px"
                },
                children: f
              })]
            })]
          }, c));
        });
      });
    } else if (l.cast_id)
      return /* @__PURE__ */ v.jsx("div", {
        style: {
          maxWidth: "85%"
        },
        children: /* @__PURE__ */ v.jsx(Au, {
          type: "hash",
          identifier: l.cast_id.hash,
          viewerFid: t,
          allowReactions: e,
          renderEmbeds: !1
        }, l.cast_id.fid)
      }, `cast-${l.cast_id.hash}`);
    return null;
  }))).filter((l) => l !== null), [e, t]);
  return te.useEffect(() => {
    r(n).then(i);
  }, [n, r]), s;
}, wu = ({
  onClick: n
}) => /* @__PURE__ */ v.jsx("svg", {
  width: "18",
  height: "17",
  viewBox: "0 0 18 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: (e) => n ? n(e) : void 0,
  style: {
    cursor: "pointer"
  },
  children: /* @__PURE__ */ v.jsx("path", {
    d: "M6.22857 12.6828H7.01285C7.01285 12.2496 6.66172 11.8985 6.22857 11.8985V12.6828ZM6.22857 15.8199H5.4443C5.4443 16.1137 5.60848 16.3828 5.8697 16.5172C6.13092 16.6517 6.44537 16.6288 6.68443 16.4581L6.22857 15.8199ZM10.6205 12.6828V11.8985C10.4571 11.8985 10.2977 11.9496 10.1647 12.0446L10.6205 12.6828ZM1.78428 3.27146C1.78428 2.54955 2.3695 1.96433 3.09141 1.96433V0.395777C1.50321 0.395777 0.215723 1.68327 0.215723 3.27146H1.78428ZM1.78428 10.5914V3.27146H0.215723V10.5914H1.78428ZM3.0914 11.8985C2.3695 11.8985 1.78428 11.3133 1.78428 10.5914H0.215723C0.215723 12.1796 1.50321 13.4671 3.0914 13.4671V11.8985ZM6.22857 11.8985H3.0914V13.4671H6.22857V11.8985ZM7.01285 15.8199V12.6828H5.4443V15.8199H7.01285ZM10.1647 12.0446L5.77272 15.1817L6.68443 16.4581L11.0764 13.321L10.1647 12.0446ZM14.5941 11.8985H10.6205V13.4671H14.5941V11.8985ZM15.9013 10.5914C15.9013 11.3133 15.316 11.8985 14.5941 11.8985V13.4671C16.1823 13.4671 17.4698 12.1796 17.4698 10.5914H15.9013ZM15.9013 3.27146V10.5914H17.4698V3.27146H15.9013ZM14.5941 1.96433C15.316 1.96433 15.9013 2.54955 15.9013 3.27146H17.4698C17.4698 1.68326 16.1823 0.395777 14.5941 0.395777V1.96433ZM3.09141 1.96433H14.5941V0.395777H3.09141V1.96433Z",
    fill: "#A0A3AD"
  })
}), ku = ({
  fill: n,
  onClick: e
}) => /* @__PURE__ */ v.jsxs("svg", {
  width: "16",
  height: "15",
  viewBox: "0 0 16 15",
  fill: n || "none",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: (t) => e ? e(t) : void 0,
  style: {
    cursor: "pointer"
  },
  children: [/* @__PURE__ */ v.jsx("path", {
    d: "M14.9245 14.2506C14.7258 14.2506 14.5352 14.1716 14.3946 14.0311C14.2541 13.8905 14.1751 13.6999 14.1751 13.5011V10.5034H11.1774C10.9787 10.5034 10.7881 10.4245 10.6475 10.2839C10.507 10.1434 10.428 9.95279 10.428 9.75403C10.428 9.55527 10.507 9.36465 10.6475 9.22411C10.7881 9.08357 10.9787 9.00461 11.1774 9.00461H14.9245C15.1233 9.00461 15.3139 9.08357 15.4545 9.22411C15.595 9.36465 15.674 9.55527 15.674 9.75403V13.5011C15.674 13.6999 15.595 13.8905 15.4545 14.0311C15.3139 14.1716 15.1233 14.2506 14.9245 14.2506ZM5.18207 6.00693H1.43497C1.23621 6.00693 1.04559 5.92797 0.905047 5.78743C0.764503 5.64688 0.685547 5.45627 0.685547 5.25751V1.51041C0.685547 1.31165 0.764503 1.12103 0.905047 0.980486C1.04559 0.839943 1.23621 0.760986 1.43497 0.760986C1.63373 0.760986 1.82434 0.839943 1.96489 0.980486C2.10543 1.12103 2.18439 1.31165 2.18439 1.51041V4.50809H5.18207C5.38083 4.50809 5.57145 4.58704 5.71199 4.72759C5.85253 4.86813 5.93149 5.05875 5.93149 5.25751C5.93149 5.45627 5.85253 5.64688 5.71199 5.78743C5.57145 5.92797 5.38083 6.00693 5.18207 6.00693Z",
    fill: n || "#A0A3AD"
  }), /* @__PURE__ */ v.jsx("path", {
    d: "M8.17934 15C6.33556 15.0003 4.55637 14.3209 3.18205 13.0918C1.80774 11.8627 0.934766 10.17 0.730106 8.33765C0.719281 8.23923 0.727945 8.13965 0.755606 8.04458C0.783266 7.94951 0.82938 7.86083 0.891315 7.78358C1.0164 7.62758 1.19833 7.52765 1.39709 7.50579C1.59585 7.48393 1.79515 7.54191 1.95116 7.667C2.10716 7.79208 2.20708 7.97401 2.22895 8.17277C2.37708 9.52376 2.97983 10.7843 3.93838 11.7478C4.89692 12.7113 6.15438 13.3205 7.50459 13.4755C8.85479 13.6306 10.2176 13.3223 11.3696 12.6012C12.5216 11.8801 13.3944 10.789 13.845 9.50674C13.8731 9.40817 13.9211 9.31642 13.986 9.23714C14.051 9.15787 14.1316 9.09277 14.2227 9.04586C14.3138 8.99895 14.4136 8.97123 14.5159 8.96442C14.6181 8.95761 14.7207 8.97185 14.8173 9.00625C14.9138 9.04066 15.0023 9.09451 15.0772 9.16446C15.1521 9.23442 15.2118 9.31899 15.2528 9.41296C15.2937 9.50693 15.3149 9.6083 15.3151 9.71079C15.3153 9.81329 15.2944 9.91473 15.2539 10.0089C14.7359 11.4705 13.7774 12.7355 12.5103 13.6294C11.2432 14.5233 9.73002 15.0022 8.17934 15ZM14.8792 7.50579C14.6939 7.50691 14.5148 7.43937 14.3764 7.3162C14.238 7.19302 14.1501 7.02295 14.1297 6.8388C13.975 5.49429 13.3699 4.24169 12.4128 3.28476C11.4558 2.32782 10.2031 1.72285 8.85858 1.56824C7.51405 1.41364 6.15676 1.7185 5.0075 2.43324C3.85823 3.14798 2.9846 4.23054 2.52872 5.50484C2.50062 5.6034 2.4526 5.69516 2.38763 5.77443C2.32266 5.85371 2.24212 5.91881 2.15099 5.96572C2.05987 6.01263 1.96008 6.04035 1.85781 6.04716C1.75555 6.05397 1.65297 6.03973 1.55642 6.00532C1.45988 5.97092 1.37141 5.91707 1.29651 5.84712C1.2216 5.77716 1.16183 5.69258 1.12091 5.59861C1.07999 5.50464 1.05878 5.40328 1.05859 5.30078C1.0584 5.19829 1.07923 5.09685 1.1198 5.00273C1.68406 3.40202 2.77497 2.04025 4.21397 1.14029C5.65297 0.240337 7.35485 -0.144505 9.04106 0.0487522C10.7273 0.242009 12.2979 1.00192 13.496 2.20411C14.6941 3.4063 15.4486 4.97958 15.6361 6.66644C15.6571 6.86306 15.5997 7.06004 15.4761 7.21445C15.3526 7.36887 15.173 7.4682 14.9766 7.4908L14.8792 7.50579Z",
    fill: n || "#A0A3AD"
  })]
}), Pu = ({
  fill: n,
  onClick: e
}) => /* @__PURE__ */ v.jsxs("svg", {
  width: "17",
  height: "15",
  viewBox: "0 0 17 15",
  fill: n ? "red" : "none",
  xmlns: "http://www.w3.org/2000/svg",
  onClick: (t) => e ? e(t) : void 0,
  style: {
    cursor: "pointer"
  },
  children: [/* @__PURE__ */ v.jsx("path", {
    d: "M13.8719 2.25042L14.2947 1.58984L13.8719 2.25042C15.2467 3.13022 15.7676 5.22206 14.8856 7.61317C14.0436 9.89583 11.9555 12.2374 8.51573 13.3648C5.07606 12.2374 2.98799 9.89584 2.14596 7.61316C1.26392 5.22203 1.7848 3.13022 3.15951 2.25042L3.15951 2.25042C4.58542 1.33783 5.64997 1.52983 6.39945 1.92503C7.21272 2.35388 7.73108 3.07114 7.86143 3.26838L8.51573 4.25838L9.17002 3.26838C9.30038 3.07113 9.81873 2.35388 10.632 1.92503C11.3815 1.52983 12.446 1.33783 13.8719 2.25042Z",
    stroke: n || "#A0A3AD",
    strokeWidth: "1.56855"
  }), /* @__PURE__ */ v.jsx("mask", {
    id: "path-2-inside-1_187_1051",
    fill: "white",
    children: /* @__PURE__ */ v.jsx("path", {
      d: "M8.58444 13.9397C7.76139 13.6864 7.05334 13.3937 6.29976 12.9825C5.95633 12.7951 5.62285 12.5895 5.3003 12.3681C5.14416 12.2609 4.99108 12.1493 4.84063 12.0343C4.78132 11.9889 4.88038 12.0652 4.82156 12.0195C4.80388 12.0058 4.7863 11.9919 4.76869 11.9781C4.73364 11.9505 4.69884 11.9225 4.66413 11.8945C4.58948 11.8342 4.51582 11.7727 4.4428 11.7105C3.90499 11.252 3.41381 10.7389 2.98016 10.1809C3.01856 10.2303 2.97651 10.176 2.97064 10.1683C2.9583 10.1522 2.94604 10.1359 2.9338 10.1197C2.90939 10.0874 2.88527 10.0548 2.86126 10.0221C2.80961 9.95189 2.75908 9.8808 2.70932 9.8092C2.61492 9.67345 2.52441 9.535 2.4371 9.39457C2.2673 9.12145 2.11213 8.83926 1.97147 8.55006C1.93849 8.48228 1.90657 8.41396 1.87531 8.34537C1.85978 8.3113 1.84459 8.27709 1.82948 8.24284C1.82195 8.22575 1.81456 8.20864 1.80714 8.19152C1.80167 8.17889 1.76856 8.10061 1.79664 8.16736C1.73728 8.0262 1.68205 7.88329 1.63029 7.73916C1.52982 7.45942 1.44498 7.17407 1.37575 6.88502C1.34218 6.74492 1.31301 6.60379 1.28746 6.46202C1.2754 6.39502 1.2645 6.32782 1.2543 6.26052C1.24925 6.22713 1.24453 6.19369 1.23994 6.16023C1.25136 6.24358 1.23495 6.11772 1.23231 6.09532C1.20042 5.82444 1.18535 5.55158 1.18721 5.27885C1.18811 5.14691 1.19374 5.01501 1.20334 4.88343C1.20788 4.82128 1.21368 4.75922 1.22023 4.69726C1.2235 4.66651 1.22713 4.6358 1.23089 4.60511C1.23278 4.58982 1.23477 4.57457 1.23678 4.5593C1.22562 4.64425 1.23563 4.56956 1.23823 4.55163C1.27428 4.30419 1.32861 4.05943 1.40097 3.82006C1.43614 3.70375 1.47635 3.58899 1.52072 3.47587C1.53125 3.449 1.54219 3.42229 1.55326 3.39564C1.51941 3.47716 1.55889 3.38334 1.56717 3.36464C1.59226 3.30803 1.61886 3.25209 1.64643 3.19664C1.75101 2.98624 1.87476 2.78549 2.01534 2.59724C2.02371 2.58603 2.03221 2.57492 2.04071 2.5638C1.99275 2.62656 2.02446 2.58496 2.03493 2.57169C2.05223 2.54974 2.06993 2.52808 2.08773 2.50653C2.12631 2.45984 2.16629 2.41434 2.20713 2.36962C2.28587 2.28341 2.36926 2.20151 2.456 2.12339C2.49787 2.08568 2.54084 2.0492 2.58443 2.01352C2.60631 1.99561 2.62852 1.97808 2.65084 1.9607C2.58164 2.01466 2.67191 1.94557 2.68962 1.93265C2.83338 1.8277 2.98587 1.7348 3.14013 1.6463C3.54393 1.41459 3.92437 1.25567 4.3831 1.15072C4.47716 1.12921 4.57219 1.11204 4.6676 1.09771C4.74483 1.08611 4.61527 1.10399 4.69217 1.09444C4.71513 1.0916 4.73817 1.08917 4.76119 1.08677C4.81403 1.08124 4.86704 1.07739 4.92007 1.07423C5.10084 1.06348 5.28237 1.06851 5.46252 1.0864C5.48336 1.08846 5.50417 1.09092 5.52495 1.09338C5.59508 1.10167 5.46943 1.08526 5.53899 1.09521C5.57965 1.10103 5.62016 1.10795 5.66059 1.11524C5.74647 1.13073 5.83159 1.1503 5.91604 1.17227C6.0728 1.21311 6.22621 1.26621 6.37595 1.32786C6.31111 1.30115 6.41877 1.34702 6.43584 1.35477C6.46987 1.3702 6.50356 1.38639 6.53714 1.4028C6.60865 1.43779 6.67886 1.47543 6.74817 1.51462C6.87662 1.58723 7.00062 1.66753 7.12092 1.7529C7.14882 1.77271 7.17637 1.79297 7.20383 1.81338C7.21739 1.82348 7.23087 1.8337 7.24432 1.84396C7.29158 1.87992 7.1988 1.80839 7.24529 1.84482C7.30109 1.88853 7.35568 1.93375 7.40949 1.97982C7.50652 2.06288 7.59994 2.15008 7.69053 2.24011C7.84008 2.38879 7.98044 2.54677 8.11149 2.71194C8.12572 2.72987 8.17533 2.79414 8.11485 2.7157C8.12636 2.73065 8.13776 2.74568 8.1491 2.76075C8.1694 2.78769 8.18934 2.81491 8.20905 2.8423C8.23825 2.88286 8.2667 2.92398 8.29429 2.96566C8.40374 3.131 8.6286 3.131 8.73805 2.96566C8.76707 2.92181 8.79712 2.87866 8.82785 2.83598C8.84783 2.80823 8.86819 2.78075 8.88875 2.75344C8.90242 2.73529 8.94928 2.67474 8.88935 2.75214C8.90409 2.73312 8.919 2.71424 8.93399 2.69542C9.0671 2.52834 9.21071 2.36968 9.36261 2.21954C9.45411 2.12907 9.5493 2.04234 9.64732 1.95897C9.69737 1.91641 9.74847 1.87507 9.80017 1.83456C9.7388 1.88263 9.82694 1.81457 9.84213 1.80327C9.87427 1.77937 9.90683 1.75606 9.9396 1.73301C10.0608 1.64773 10.1866 1.56915 10.3159 1.49682C10.3802 1.46084 10.4457 1.42703 10.5119 1.39467C10.5455 1.37823 10.5795 1.36251 10.6136 1.34704C10.6308 1.33926 10.6481 1.33171 10.6654 1.32417C10.6915 1.31296 10.6885 1.3142 10.6564 1.3279C10.6681 1.32303 10.6798 1.31822 10.6916 1.31349C10.8423 1.25235 10.9973 1.20246 11.1548 1.16239C11.2332 1.14248 11.3123 1.12599 11.3918 1.11166C11.4323 1.10435 11.473 1.09815 11.5138 1.09231C11.4471 1.10186 11.5171 1.09226 11.5281 1.09095C11.5559 1.08767 11.5838 1.08499 11.6117 1.0824C11.793 1.06553 11.9757 1.06513 12.1573 1.0771C12.203 1.08011 12.2485 1.08444 12.294 1.08921C12.3172 1.09163 12.3402 1.0945 12.3633 1.09734C12.3036 1.08994 12.3813 1.10022 12.3881 1.10123C12.4921 1.11685 12.5952 1.13785 12.6975 1.16193C13.1586 1.27048 13.5378 1.44037 13.9464 1.67761C14.0904 1.76129 14.2314 1.8507 14.3656 1.9495C14.377 1.95791 14.3884 1.96648 14.3997 1.97503C14.4419 2.00688 14.351 1.93696 14.3926 1.96945C14.4149 1.98683 14.4369 2.00462 14.4588 2.02252C14.5059 2.06115 14.5519 2.1013 14.5971 2.14228C14.6835 2.22073 14.7656 2.30388 14.8439 2.39035C14.8815 2.43176 14.9178 2.47427 14.9534 2.51736C14.9712 2.53891 14.9887 2.56077 15.006 2.58274C15.0384 2.62388 14.9682 2.53335 15 2.575C15.0114 2.58983 15.0225 2.60479 15.0336 2.61978C15.1736 2.80871 15.2946 3.01142 15.3985 3.22224C15.4238 3.27356 15.4477 3.32553 15.4709 3.37782C15.4767 3.39096 15.4824 3.40414 15.4881 3.41734C15.5093 3.46656 15.464 3.35945 15.4845 3.40902C15.4975 3.44013 15.5099 3.47148 15.5221 3.50289C15.5661 3.61632 15.6049 3.73175 15.6398 3.84833C15.7115 4.08832 15.763 4.33416 15.7984 4.58204C15.8064 4.63806 15.7901 4.51842 15.7975 4.57463C15.7995 4.58992 15.8014 4.60521 15.8033 4.6205C15.807 4.6512 15.8104 4.68197 15.8137 4.71273C15.8208 4.77994 15.8264 4.84732 15.8312 4.91474C15.8404 5.04658 15.8447 5.17876 15.8453 5.31093C15.8464 5.58418 15.8287 5.85737 15.7961 6.12862C15.7941 6.14529 15.7919 6.16192 15.7898 6.17856C15.7822 6.23827 15.7983 6.11722 15.7901 6.17697C15.7855 6.21044 15.7806 6.24389 15.7755 6.27731C15.7644 6.35031 15.752 6.4231 15.7388 6.49573C15.7129 6.63769 15.6823 6.7788 15.6484 6.91905C15.5784 7.20843 15.4909 7.49348 15.3897 7.77343C15.3648 7.84232 15.3388 7.9108 15.3121 7.97902C15.2987 8.01338 15.2849 8.0476 15.2711 8.08179C15.2641 8.09896 15.257 8.11604 15.25 8.13315C15.2452 8.14458 15.2405 8.15598 15.2357 8.16738C15.2496 8.13453 15.251 8.13117 15.2399 8.15734C15.1786 8.30137 15.1131 8.44355 15.0443 8.58416C14.9028 8.87351 14.7451 9.15483 14.5745 9.42799C14.4868 9.56844 14.395 9.70634 14.3002 9.84213C14.254 9.90821 14.2069 9.97355 14.1592 10.0385C14.1351 10.0711 14.1108 10.1036 14.0864 10.136C14.0741 10.1522 14.0617 10.1684 14.0494 10.1845C14.0319 10.2073 14.0329 10.2061 14.0522 10.181C14.0439 10.1918 14.0355 10.2025 14.0271 10.2132C13.8135 10.4869 13.5849 10.7488 13.3445 10.9992C13.0948 11.2594 12.8309 11.5058 12.556 11.7391C12.4884 11.7965 12.4199 11.8528 12.3509 11.9086C12.3162 11.9366 12.2812 11.9643 12.2461 11.992C12.2285 12.0058 12.2108 12.0196 12.1931 12.0333C12.2377 11.9987 12.1636 12.0558 12.156 12.0616C12.005 12.1765 11.8508 12.2871 11.6942 12.3941C11.3706 12.6153 11.0348 12.8185 10.6904 13.0055C10.5122 13.1023 10.3313 13.1939 10.1484 13.2815C10.059 13.3243 9.96904 13.3658 9.87868 13.4064C9.8331 13.4269 9.78733 13.4469 9.74151 13.4669C9.7185 13.4769 9.69541 13.4868 9.67233 13.4966C9.6442 13.5086 9.64146 13.5098 9.66417 13.5002C9.64864 13.5067 9.63313 13.5132 9.61758 13.5196C9.2349 13.6788 8.84398 13.8179 8.44786 13.9398C8.31409 13.9809 8.2304 14.1178 8.26839 14.2559C8.3047 14.3878 8.45064 14.4765 8.5845 14.4353C10.1534 13.9525 11.626 13.1871 12.8857 12.131C13.9425 11.245 14.8349 10.1456 15.4543 8.91165C15.9942 7.83608 16.3357 6.64744 16.3583 5.43967C16.3774 4.41628 16.149 3.35704 15.5742 2.49789C15.2929 2.07732 14.9371 1.71816 14.5205 1.43134C13.7956 0.932295 12.9294 0.592822 12.045 0.557214C10.7717 0.505949 9.60126 1.17157 8.7697 2.09685C8.59779 2.28813 8.43634 2.49172 8.29431 2.70629C8.44223 2.70629 8.59015 2.70629 8.73807 2.70629C8.22434 1.93023 7.48255 1.25338 6.6264 0.880424C5.9305 0.577258 5.18555 0.490164 4.43721 0.617179C3.98766 0.69348 3.55546 0.856508 3.14849 1.05915C2.81945 1.22296 2.50653 1.41842 2.22115 1.65017C1.44904 2.27713 0.973026 3.20995 0.783732 4.17519C0.56509 5.29004 0.68737 6.45381 1.02051 7.53339C1.41084 8.79827 2.09407 9.95916 2.95641 10.9589C3.94757 12.1081 5.19614 13.0306 6.5582 13.6933C7.16712 13.9896 7.8008 14.2362 8.44788 14.4353C8.58174 14.4765 8.72768 14.3878 8.76399 14.2559C8.80189 14.1177 8.71821 13.9809 8.58444 13.9397Z"
    })
  }), /* @__PURE__ */ v.jsx("path", {
    d: "M8.58444 13.9397C7.76139 13.6864 7.05334 13.3937 6.29976 12.9825C5.95633 12.7951 5.62285 12.5895 5.3003 12.3681C5.14416 12.2609 4.99108 12.1493 4.84063 12.0343C4.78132 11.9889 4.88038 12.0652 4.82156 12.0195C4.80388 12.0058 4.7863 11.9919 4.76869 11.9781C4.73364 11.9505 4.69884 11.9225 4.66413 11.8945C4.58948 11.8342 4.51582 11.7727 4.4428 11.7105C3.90499 11.252 3.41381 10.7389 2.98016 10.1809C3.01856 10.2303 2.97651 10.176 2.97064 10.1683C2.9583 10.1522 2.94604 10.1359 2.9338 10.1197C2.90939 10.0874 2.88527 10.0548 2.86126 10.0221C2.80961 9.95189 2.75908 9.8808 2.70932 9.8092C2.61492 9.67345 2.52441 9.535 2.4371 9.39457C2.2673 9.12145 2.11213 8.83926 1.97147 8.55006C1.93849 8.48228 1.90657 8.41396 1.87531 8.34537C1.85978 8.3113 1.84459 8.27709 1.82948 8.24284C1.82195 8.22575 1.81456 8.20864 1.80714 8.19152C1.80167 8.17889 1.76856 8.10061 1.79664 8.16736C1.73728 8.0262 1.68205 7.88329 1.63029 7.73916C1.52982 7.45942 1.44498 7.17407 1.37575 6.88502C1.34218 6.74492 1.31301 6.60379 1.28746 6.46202C1.2754 6.39502 1.2645 6.32782 1.2543 6.26052C1.24925 6.22713 1.24453 6.19369 1.23994 6.16023C1.25136 6.24358 1.23495 6.11772 1.23231 6.09532C1.20042 5.82444 1.18535 5.55158 1.18721 5.27885C1.18811 5.14691 1.19374 5.01501 1.20334 4.88343C1.20788 4.82128 1.21368 4.75922 1.22023 4.69726C1.2235 4.66651 1.22713 4.6358 1.23089 4.60511C1.23278 4.58982 1.23477 4.57457 1.23678 4.5593C1.22562 4.64425 1.23563 4.56956 1.23823 4.55163C1.27428 4.30419 1.32861 4.05943 1.40097 3.82006C1.43614 3.70375 1.47635 3.58899 1.52072 3.47587C1.53125 3.449 1.54219 3.42229 1.55326 3.39564C1.51941 3.47716 1.55889 3.38334 1.56717 3.36464C1.59226 3.30803 1.61886 3.25209 1.64643 3.19664C1.75101 2.98624 1.87476 2.78549 2.01534 2.59724C2.02371 2.58603 2.03221 2.57492 2.04071 2.5638C1.99275 2.62656 2.02446 2.58496 2.03493 2.57169C2.05223 2.54974 2.06993 2.52808 2.08773 2.50653C2.12631 2.45984 2.16629 2.41434 2.20713 2.36962C2.28587 2.28341 2.36926 2.20151 2.456 2.12339C2.49787 2.08568 2.54084 2.0492 2.58443 2.01352C2.60631 1.99561 2.62852 1.97808 2.65084 1.9607C2.58164 2.01466 2.67191 1.94557 2.68962 1.93265C2.83338 1.8277 2.98587 1.7348 3.14013 1.6463C3.54393 1.41459 3.92437 1.25567 4.3831 1.15072C4.47716 1.12921 4.57219 1.11204 4.6676 1.09771C4.74483 1.08611 4.61527 1.10399 4.69217 1.09444C4.71513 1.0916 4.73817 1.08917 4.76119 1.08677C4.81403 1.08124 4.86704 1.07739 4.92007 1.07423C5.10084 1.06348 5.28237 1.06851 5.46252 1.0864C5.48336 1.08846 5.50417 1.09092 5.52495 1.09338C5.59508 1.10167 5.46943 1.08526 5.53899 1.09521C5.57965 1.10103 5.62016 1.10795 5.66059 1.11524C5.74647 1.13073 5.83159 1.1503 5.91604 1.17227C6.0728 1.21311 6.22621 1.26621 6.37595 1.32786C6.31111 1.30115 6.41877 1.34702 6.43584 1.35477C6.46987 1.3702 6.50356 1.38639 6.53714 1.4028C6.60865 1.43779 6.67886 1.47543 6.74817 1.51462C6.87662 1.58723 7.00062 1.66753 7.12092 1.7529C7.14882 1.77271 7.17637 1.79297 7.20383 1.81338C7.21739 1.82348 7.23087 1.8337 7.24432 1.84396C7.29158 1.87992 7.1988 1.80839 7.24529 1.84482C7.30109 1.88853 7.35568 1.93375 7.40949 1.97982C7.50652 2.06288 7.59994 2.15008 7.69053 2.24011C7.84008 2.38879 7.98044 2.54677 8.11149 2.71194C8.12572 2.72987 8.17533 2.79414 8.11485 2.7157C8.12636 2.73065 8.13776 2.74568 8.1491 2.76075C8.1694 2.78769 8.18934 2.81491 8.20905 2.8423C8.23825 2.88286 8.2667 2.92398 8.29429 2.96566C8.40374 3.131 8.6286 3.131 8.73805 2.96566C8.76707 2.92181 8.79712 2.87866 8.82785 2.83598C8.84783 2.80823 8.86819 2.78075 8.88875 2.75344C8.90242 2.73529 8.94928 2.67474 8.88935 2.75214C8.90409 2.73312 8.919 2.71424 8.93399 2.69542C9.0671 2.52834 9.21071 2.36968 9.36261 2.21954C9.45411 2.12907 9.5493 2.04234 9.64732 1.95897C9.69737 1.91641 9.74847 1.87507 9.80017 1.83456C9.7388 1.88263 9.82694 1.81457 9.84213 1.80327C9.87427 1.77937 9.90683 1.75606 9.9396 1.73301C10.0608 1.64773 10.1866 1.56915 10.3159 1.49682C10.3802 1.46084 10.4457 1.42703 10.5119 1.39467C10.5455 1.37823 10.5795 1.36251 10.6136 1.34704C10.6308 1.33926 10.6481 1.33171 10.6654 1.32417C10.6915 1.31296 10.6885 1.3142 10.6564 1.3279C10.6681 1.32303 10.6798 1.31822 10.6916 1.31349C10.8423 1.25235 10.9973 1.20246 11.1548 1.16239C11.2332 1.14248 11.3123 1.12599 11.3918 1.11166C11.4323 1.10435 11.473 1.09815 11.5138 1.09231C11.4471 1.10186 11.5171 1.09226 11.5281 1.09095C11.5559 1.08767 11.5838 1.08499 11.6117 1.0824C11.793 1.06553 11.9757 1.06513 12.1573 1.0771C12.203 1.08011 12.2485 1.08444 12.294 1.08921C12.3172 1.09163 12.3402 1.0945 12.3633 1.09734C12.3036 1.08994 12.3813 1.10022 12.3881 1.10123C12.4921 1.11685 12.5952 1.13785 12.6975 1.16193C13.1586 1.27048 13.5378 1.44037 13.9464 1.67761C14.0904 1.76129 14.2314 1.8507 14.3656 1.9495C14.377 1.95791 14.3884 1.96648 14.3997 1.97503C14.4419 2.00688 14.351 1.93696 14.3926 1.96945C14.4149 1.98683 14.4369 2.00462 14.4588 2.02252C14.5059 2.06115 14.5519 2.1013 14.5971 2.14228C14.6835 2.22073 14.7656 2.30388 14.8439 2.39035C14.8815 2.43176 14.9178 2.47427 14.9534 2.51736C14.9712 2.53891 14.9887 2.56077 15.006 2.58274C15.0384 2.62388 14.9682 2.53335 15 2.575C15.0114 2.58983 15.0225 2.60479 15.0336 2.61978C15.1736 2.80871 15.2946 3.01142 15.3985 3.22224C15.4238 3.27356 15.4477 3.32553 15.4709 3.37782C15.4767 3.39096 15.4824 3.40414 15.4881 3.41734C15.5093 3.46656 15.464 3.35945 15.4845 3.40902C15.4975 3.44013 15.5099 3.47148 15.5221 3.50289C15.5661 3.61632 15.6049 3.73175 15.6398 3.84833C15.7115 4.08832 15.763 4.33416 15.7984 4.58204C15.8064 4.63806 15.7901 4.51842 15.7975 4.57463C15.7995 4.58992 15.8014 4.60521 15.8033 4.6205C15.807 4.6512 15.8104 4.68197 15.8137 4.71273C15.8208 4.77994 15.8264 4.84732 15.8312 4.91474C15.8404 5.04658 15.8447 5.17876 15.8453 5.31093C15.8464 5.58418 15.8287 5.85737 15.7961 6.12862C15.7941 6.14529 15.7919 6.16192 15.7898 6.17856C15.7822 6.23827 15.7983 6.11722 15.7901 6.17697C15.7855 6.21044 15.7806 6.24389 15.7755 6.27731C15.7644 6.35031 15.752 6.4231 15.7388 6.49573C15.7129 6.63769 15.6823 6.7788 15.6484 6.91905C15.5784 7.20843 15.4909 7.49348 15.3897 7.77343C15.3648 7.84232 15.3388 7.9108 15.3121 7.97902C15.2987 8.01338 15.2849 8.0476 15.2711 8.08179C15.2641 8.09896 15.257 8.11604 15.25 8.13315C15.2452 8.14458 15.2405 8.15598 15.2357 8.16738C15.2496 8.13453 15.251 8.13117 15.2399 8.15734C15.1786 8.30137 15.1131 8.44355 15.0443 8.58416C14.9028 8.87351 14.7451 9.15483 14.5745 9.42799C14.4868 9.56844 14.395 9.70634 14.3002 9.84213C14.254 9.90821 14.2069 9.97355 14.1592 10.0385C14.1351 10.0711 14.1108 10.1036 14.0864 10.136C14.0741 10.1522 14.0617 10.1684 14.0494 10.1845C14.0319 10.2073 14.0329 10.2061 14.0522 10.181C14.0439 10.1918 14.0355 10.2025 14.0271 10.2132C13.8135 10.4869 13.5849 10.7488 13.3445 10.9992C13.0948 11.2594 12.8309 11.5058 12.556 11.7391C12.4884 11.7965 12.4199 11.8528 12.3509 11.9086C12.3162 11.9366 12.2812 11.9643 12.2461 11.992C12.2285 12.0058 12.2108 12.0196 12.1931 12.0333C12.2377 11.9987 12.1636 12.0558 12.156 12.0616C12.005 12.1765 11.8508 12.2871 11.6942 12.3941C11.3706 12.6153 11.0348 12.8185 10.6904 13.0055C10.5122 13.1023 10.3313 13.1939 10.1484 13.2815C10.059 13.3243 9.96904 13.3658 9.87868 13.4064C9.8331 13.4269 9.78733 13.4469 9.74151 13.4669C9.7185 13.4769 9.69541 13.4868 9.67233 13.4966C9.6442 13.5086 9.64146 13.5098 9.66417 13.5002C9.64864 13.5067 9.63313 13.5132 9.61758 13.5196C9.2349 13.6788 8.84398 13.8179 8.44786 13.9398C8.31409 13.9809 8.2304 14.1178 8.26839 14.2559C8.3047 14.3878 8.45064 14.4765 8.5845 14.4353C10.1534 13.9525 11.626 13.1871 12.8857 12.131C13.9425 11.245 14.8349 10.1456 15.4543 8.91165C15.9942 7.83608 16.3357 6.64744 16.3583 5.43967C16.3774 4.41628 16.149 3.35704 15.5742 2.49789C15.2929 2.07732 14.9371 1.71816 14.5205 1.43134C13.7956 0.932295 12.9294 0.592822 12.045 0.557214C10.7717 0.505949 9.60126 1.17157 8.7697 2.09685C8.59779 2.28813 8.43634 2.49172 8.29431 2.70629C8.44223 2.70629 8.59015 2.70629 8.73807 2.70629C8.22434 1.93023 7.48255 1.25338 6.6264 0.880424C5.9305 0.577258 5.18555 0.490164 4.43721 0.617179C3.98766 0.69348 3.55546 0.856508 3.14849 1.05915C2.81945 1.22296 2.50653 1.41842 2.22115 1.65017C1.44904 2.27713 0.973026 3.20995 0.783732 4.17519C0.56509 5.29004 0.68737 6.45381 1.02051 7.53339C1.41084 8.79827 2.09407 9.95916 2.95641 10.9589C3.94757 12.1081 5.19614 13.0306 6.5582 13.6933C7.16712 13.9896 7.8008 14.2362 8.44788 14.4353C8.58174 14.4765 8.72768 14.3878 8.76399 14.2559C8.80189 14.1177 8.71821 13.9809 8.58444 13.9397Z",
    stroke: n || "#A0A3AD",
    strokeWidth: "3.13711",
    mask: "url(#path-2-inside-1_187_1051)"
  })]
});
function Ou({
  onClick: n,
  size: e = 24
}) {
  return /* @__PURE__ */ v.jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    role: "img",
    viewBox: "0 0 16 16",
    width: e,
    height: e,
    fill: "#4A4A4A",
    style: {
      display: "inline-block",
      userSelect: "none",
      verticalAlign: "text-bottom",
      overflow: "visible",
      cursor: "pointer",
      padding: "4px"
    },
    onClick: n,
    children: /* @__PURE__ */ v.jsx("path", {
      d: "M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
    })
  });
}
const Fu = () => Ie, Mu = /* @__PURE__ */ K(Fu())({
  classes: ["rect7e5"]
}), Nu = () => Ie, Uu = /* @__PURE__ */ K(Nu())({
  classes: ["p13mqntt"]
}), Bu = () => Ie, $u = /* @__PURE__ */ K(Bu())({
  classes: ["p1r47dz2"]
}), Gu = () => Ie, Vu = /* @__PURE__ */ K(Gu())({
  classes: ["cnojpqv"]
}), Hu = ({
  hash: n,
  reactions: e,
  onComment: t,
  onRecast: s,
  onLike: i,
  isLiked: r
}) => {
  const {
    client_id: a,
    user: o,
    isAuthenticated: l
  } = it(), [c, d] = te.useState(!1), [h, u] = te.useState({
    top: 0,
    left: 0
  }), [f, g] = te.useState(null), [m, p] = te.useState(r), [x, S] = te.useState(!1), T = te.useRef(null), C = te.useRef({
    comment: null,
    recast: null,
    like: null
  });
  ue(() => {
    p(e.likes.some((L) => L.fid === (o == null ? void 0 : o.fid))), S(e.recasts.some((L) => L.fid === (o == null ? void 0 : o.fid)));
  }, [e, o]), ue(() => {
    const L = localStorage.getItem(wt.NEYNAR_AUTHENTICATED_USER);
    if (L)
      try {
        g(JSON.parse(L).signer_uuid);
      } catch (_) {
        console.error("Error parsing JSON from local storage:", _), g(null);
      }
    else
      console.warn("No NEYNAR_AUTHENTICATED_USER found in local storage.");
  }, [l]), ue(() => {
    (f || l) && c && d(!1);
  }, [f, l, c]);
  const E = async (L, _) => {
    if (f)
      switch (_) {
        case "comment":
          if (t)
            t();
          else
            throw new Error("No comment handler function provided");
          break;
        case "recast":
          if (s)
            S(s());
          else
            throw new Error("No recast handler function provided");
          break;
        case "like":
          if (i)
            p(i());
          else
            throw new Error("No like handler function provided");
          break;
      }
    const I = C.current[_];
    if (I) {
      const P = I.getBoundingClientRect(), b = T.current;
      if (b) {
        const w = b.getBoundingClientRect();
        u({
          top: P.top - w.height - 10,
          left: P.left + P.width / 2 - w.width / 2
        });
      }
    }
  };
  return /* @__PURE__ */ v.jsxs(Mu, {
    children: [c && /* @__PURE__ */ v.jsxs(Uu, {
      ref: T,
      style: {
        top: h.top,
        left: h.left
      },
      children: [/* @__PURE__ */ v.jsx($u, {
        children: /* @__PURE__ */ v.jsx(jo, {
          variant: st.NEYNAR
        })
      }), /* @__PURE__ */ v.jsx(Vu, {
        children: /* @__PURE__ */ v.jsx(Ou, {
          onClick: () => d(!1),
          size: 16
        })
      })]
    }), /* @__PURE__ */ v.jsx(Ie, {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: /* @__PURE__ */ v.jsxs(Ie, {
        spacingVertical: "15px",
        style: {
          display: "flex",
          gap: "10px"
        },
        children: [/* @__PURE__ */ v.jsx("div", {
          ref: (L) => C.current.comment = L,
          children: /* @__PURE__ */ v.jsx(wu, {
            onClick: (L) => E(L, "comment")
          })
        }), /* @__PURE__ */ v.jsx("div", {
          ref: (L) => C.current.recast = L,
          children: /* @__PURE__ */ v.jsx(ku, {
            fill: x ? "green" : void 0,
            onClick: (L) => E(L, "recast")
          })
        }), /* @__PURE__ */ v.jsx("div", {
          ref: (L) => C.current.like = L,
          children: /* @__PURE__ */ v.jsx(Pu, {
            fill: m ? "red" : void 0,
            onClick: (L) => E(L, "like")
          })
        })]
      })
    })]
  });
};
function Ku({
  onClick: n
}) {
  return /* @__PURE__ */ v.jsx("svg", {
    style: {
      cursor: "pointer"
    },
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    onClick: (e) => n ? n(e) : void 0,
    children: /* @__PURE__ */ v.jsx("path", {
      d: "M15.2003 7.49063C14.7504 7.49063 14.4504 7.79057 14.4504 8.24048V12.7396C14.4504 13.1895 14.1505 13.4894 13.7006 13.4894H3.20268C2.75277 13.4894 2.45283 13.1895 2.45283 12.7396V8.24048C2.45283 7.79057 2.15289 7.49063 1.70298 7.49063C1.25307 7.49063 0.953125 7.79057 0.953125 8.24048V12.7396C0.953125 14.0143 1.92793 14.9891 3.20268 14.9891H13.7006C14.9753 14.9891 15.9501 14.0143 15.9501 12.7396V8.24048C15.9501 7.79057 15.6502 7.49063 15.2003 7.49063ZM5.97713 4.26627L7.70178 2.54161V9.74018C7.70178 10.1901 8.00172 10.49 8.45163 10.49C8.90155 10.49 9.20149 10.1901 9.20149 9.74018V2.54161L10.9261 4.26627C11.2261 4.56621 11.676 4.56621 11.9759 4.26627C12.2759 3.96633 12.2759 3.51642 11.9759 3.21648L8.97653 0.217073C8.90155 0.142088 8.82656 0.0671031 8.75157 0.0671031C8.6016 -0.00788202 8.37665 -0.00788202 8.15169 0.0671031C8.07671 0.0671031 8.00172 0.142088 7.92674 0.217073L4.92734 3.21648C4.62739 3.51642 4.62739 3.96633 4.92734 4.26627C5.22728 4.56621 5.67719 4.56621 5.97713 4.26627Z",
      fill: "#A0A3AD"
    })
  });
}
const pr = ({
  url: n
}) => {
  const [e, t] = te.useState(!1), s = async (i) => {
    try {
      await navigator.clipboard.writeText(n), t(!0), setTimeout(() => {
        t(!1);
      }, 2e3);
    } catch (r) {
      console.error("Failed to copy the text to clipboard:", r);
    }
  };
  return /* @__PURE__ */ v.jsx("div", {
    children: e ? /* @__PURE__ */ v.jsx("svg", {
      style: {
        cursor: "pointer",
        fill: "green"
      },
      width: "16",
      height: "15",
      viewBox: "0 0 16 15",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ v.jsx("path", {
        d: "M5.99967 12.8136L1.71967 8.53364L0.559673 9.69364L5.99967 15.1336L16.4397 4.69364L15.2797 3.53364L5.99967 12.8136Z"
      })
    }) : /* @__PURE__ */ v.jsx(Ku, {
      onClick: s
    })
  });
}, ju = () => /* @__PURE__ */ v.jsxs("svg", {
  width: "10",
  height: "10",
  viewBox: "0 0 10 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ v.jsx("path", {
    d: "M5.85855 0.555664H8.31281M8.31281 0.555664V2.73754M8.31281 0.555664L4.31445 4.11122",
    stroke: "#FFFFFF",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /* @__PURE__ */ v.jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.31445 1H1.31445C0.762168 1 0.314453 1.44772 0.314453 2V8C0.314453 8.55228 0.762168 9 1.31445 9H7.31445C7.86674 9 8.31445 8.55228 8.31445 8V6H7.31445V8H1.31445V2H3.31445V1Z",
    fill: "#FFFFFF"
  })]
}), Wu = () => /* @__PURE__ */ v.jsx("svg", {
  width: "10",
  height: "14",
  viewBox: "0 0 10 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ v.jsx("path", {
    d: "M5.01451 12.5187L4.96833 12.5174L4.93914 12.522C4.93113 12.516 4.92402 12.5087 4.91808 12.5005L4.51231 12.7926L4.91808 12.5005C4.9049 12.4822 4.89824 12.46 4.89913 12.4375L4.89953 12.4275V12.4176V8.81194V8.31194H4.39953H1.8876H1.88753C1.76188 8.31196 1.63853 8.27825 1.53036 8.21433C1.42218 8.1504 1.33315 8.05862 1.27256 7.94854C1.21196 7.83847 1.18203 7.71415 1.18588 7.58856C1.18973 7.46301 1.2272 7.34079 1.29438 7.23466C1.2944 7.23463 1.29442 7.23459 1.29444 7.23456L4.90001 1.54377L4.90567 1.53483L4.91095 1.52567C4.92227 1.50601 4.93988 1.49074 4.96094 1.48232C4.982 1.47389 5.00528 1.47281 5.02703 1.47924L5.02912 1.47985C5.05077 1.48614 5.06969 1.4995 5.08286 1.5178C5.09603 1.53609 5.1027 1.55827 5.1018 1.58079L5.10141 1.59073V1.60067V5.20631V5.70631H5.60141H8.11333H8.1134C8.23905 5.70629 8.3624 5.74 8.47058 5.80392C8.57875 5.86784 8.66778 5.95963 8.72838 6.06971C8.78897 6.17978 8.81891 6.3041 8.81506 6.42969C8.81121 6.55528 8.77371 6.67753 8.70649 6.78369L5.10232 12.4723C5.10219 12.4725 5.10205 12.4727 5.10191 12.4729C5.09255 12.4873 5.07969 12.499 5.06452 12.507C5.04914 12.5152 5.03191 12.5192 5.01451 12.5187Z",
    stroke: "#FFFFFF"
  })
}), Yu = /* @__PURE__ */ K("button")({
  classes: ["f1hmcrrf"]
}), qu = /* @__PURE__ */ K("div")({
  classes: ["f1ki4il6"]
}), zu = /* @__PURE__ */ K("div")({
  classes: ["bgnz0ud"]
}), Xu = /* @__PURE__ */ K("img")({
  classes: ["f1gbget9"]
}), Zu = /* @__PURE__ */ K("div")({
  classes: ["f4rwe4i"]
}), Qu = /* @__PURE__ */ K("div")({
  classes: ["f1qellgw"]
}), Ju = /* @__PURE__ */ K("input")({
  classes: ["i1hgxwhi"]
}), ef = /* @__PURE__ */ K("div")({
  classes: ["s1ahcfax"]
}), tf = () => {
  const n = Ce(null);
  return ue(() => {
    if (n.current) {
      let e = 0;
      const t = () => {
        e += 6, n.current && (n.current.style.transform = `rotate(${e}deg)`), requestAnimationFrame(t);
      };
      requestAnimationFrame(t);
    }
  }, []), /* @__PURE__ */ v.jsx("svg", {
    ref: n,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "size-6 text-white",
    style: {
      width: "24px",
      height: "24px"
    },
    children: /* @__PURE__ */ v.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    })
  });
};
function sf({
  number: n,
  text: e,
  actionType: t,
  target: s,
  frameUrl: i,
  handleOnClick: r
}) {
  return /* @__PURE__ */ v.jsxs(Yu, {
    onClick: () => r(n),
    children: [e, (t === "link" || t === "post_redirect" || t === "mint") && /* @__PURE__ */ v.jsx(ju, {}), t === "tx" && /* @__PURE__ */ v.jsx(Wu, {})]
  });
}
function nf({
  frame: n,
  onFrameBtnPress: e
}) {
  var u;
  const [t, s] = oe(n), [i, r] = oe(""), [a, o] = oe(!1), l = () => {
    const f = t.buttons.map((g) => /* @__PURE__ */ v.jsx(sf, {
      number: g.index,
      text: g.title,
      actionType: g.action_type,
      target: g.target,
      frameUrl: n.frames_url,
      handleOnClick: (m) => {
        o(!0), e(m, t, s, i).finally(() => o(!1));
      }
    }, g.index));
    return /* @__PURE__ */ v.jsx(zu, {
      children: f
    });
  }, c = (f) => {
    r(f);
  }, d = (f) => {
    try {
      return new URL(f).hostname.replace("www.", "");
    } catch {
      return "";
    }
  }, h = () => {
    switch (t.image_aspect_ratio) {
      case "1:1":
        return {
          aspectRatio: "1 / 1"
        };
      case "1.91:1":
        return {
          aspectRatio: "1.91 / 1"
        };
      default:
        return {
          aspectRatio: "1.91 / 1"
        };
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ v.jsxs(qu, {
      children: [a && /* @__PURE__ */ v.jsx(ef, {
        children: /* @__PURE__ */ v.jsx(tf, {})
      }), t.frames_url && /* @__PURE__ */ v.jsxs(v.Fragment, {
        children: [/* @__PURE__ */ v.jsx("a", {
          href: t.frames_url,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            width: "100%"
          },
          children: /* @__PURE__ */ v.jsx(Xu, {
            src: t.image,
            alt: `Frame image for ${t.frames_url}`,
            style: h()
          })
        }), ((u = t.input) == null ? void 0 : u.text) && /* @__PURE__ */ v.jsx(Ju, {
          type: "text",
          placeholder: t.input.text,
          value: i,
          onChange: (f) => c(f.target.value)
        }), l()]
      })]
    }), t.frames_url && /* @__PURE__ */ v.jsx(Zu, {
      children: d(t.frames_url)
    })]
  });
}
const rf = ({
  frame: n,
  onFrameBtnPress: e
}) => /* @__PURE__ */ v.jsx(Qu, {
  children: n ? /* @__PURE__ */ v.jsx(nf, {
    frame: n,
    onFrameBtnPress: e
  }) : /* @__PURE__ */ v.jsx(v.Fragment, {})
}), af = ({
  url: n,
  onFrameBtnPress: e,
  initialFrame: t
}) => {
  const {
    client_id: s,
    showToast: i
  } = it(), [r] = Pi(wt.NEYNAR_AUTHENTICATED_USER, null), [a, o] = oe(null), [l, c] = oe(t || null), [d, h] = oe(null);
  ue(() => {
    r ? o(r.signer_uuid) : console.warn("No NEYNAR_AUTHENTICATED_USER found in local storage.");
  }, [r]), ue(() => {
    t || (async () => {
      try {
        const m = await of(`${kt}/v2/farcaster/frame/crawl?url=${n}&client_id=${s}`, {
          method: "GET"
        });
        if (m.ok) {
          const x = (await m.json()).frame;
          if (Object.keys(x).length === 0)
            throw new Error("No frame data available");
          c(x), h(null);
        } else
          throw new Error(`HTTP error! status: ${m.status}`);
      } catch (m) {
        console.error(`An error occurred: ${m}`), h(`Failed to fetch: ${m.message}`);
      }
    })();
  }, [n, i, t]);
  const u = (g) => {
    if (typeof g != "object" || g === null) return !1;
    const m = ["version", "image", "buttons", "frames_url"];
    for (const p of m)
      if (!(p in g)) return !1;
    return !(!Array.isArray(g.buttons) || g.buttons.some((p) => typeof p.index != "number"));
  }, f = async (g, m, p, x) => {
    try {
      const S = await e(g, m, p, x);
      if (!u(S))
        throw new Error("Invalid frame data received");
      p(S);
    } catch (S) {
      i(Br.Error, `An error occurred while processing the button press: ${S}`);
    }
  };
  return d ? /* @__PURE__ */ v.jsx("div", {
    style: {
      color: "red",
      padding: "10px",
      border: "1px solid red",
      borderRadius: "5px"
    },
    children: d
  }) : /* @__PURE__ */ v.jsx(rf, {
    frame: l,
    onFrameBtnPress: f
  });
};
function of(n, e, t = 8e3) {
  return Promise.race([Pt(n, e), new Promise((s, i) => setTimeout(() => i(new Error("Request timed out")), t))]);
}
const lf = /* @__PURE__ */ K("div")({
  classes: ["sxqvxvq"]
}), cf = /* @__PURE__ */ K("a")({
  classes: ["s3kamov"]
}), df = /* @__PURE__ */ K("div")({
  classes: ["m1wrvvhk"]
}), hf = /* @__PURE__ */ K("div")({
  classes: ["u1lcaq27"]
}), uf = /* @__PURE__ */ K("div")({
  classes: ["lvnxx7k"]
}), yr = /* @__PURE__ */ K("div")({
  classes: ["e1dqpn4e"]
}), ff = /* @__PURE__ */ K("div")({
  classes: ["r15yf123"]
}), xr = /* @__PURE__ */ K("div")({
  classes: ["skmprsx"]
}), _s = te.memo(({
  username: n,
  displayName: e,
  avatarImgUrl: t,
  text: s = "",
  hash: i,
  reactions: r,
  replies: a,
  embeds: o = [],
  frames: l = [],
  channel: c,
  viewerFid: d,
  hasPowerBadge: h,
  isEmbed: u = !0,
  allowReactions: f,
  renderEmbeds: g,
  renderFrames: m,
  onLikeBtnPress: p,
  onRecastBtnPress: x,
  onCommentBtnPress: S,
  onFrameBtnPress: T,
  direct_replies: C,
  containerStyles: E,
  textStyles: L
}) => {
  const [_, I] = oe(r.likes_count), [P, b] = oe(r.likes.some((V) => V.fid === d)), w = zo(s, o), G = (o == null ? void 0 : o.length) === 1, O = gt(() => l.map((V) => V.frames_url), [l]), F = gt(() => o.filter((V) => !O.includes(V.url)), [o, O]), U = be((V) => {
    V.currentTarget.src = Li;
  }, []);
  ue(() => {
    b(r.likes.some((V) => V.fid === d));
  }, [r.likes, d]);
  const N = be(() => p && p() ? (I((M) => M + 1), b(!P), !0) : !1, [p]), H = Du(F, f, d);
  return /* @__PURE__ */ v.jsx(lf, {
    style: {
      ...E,
      borderWidth: u ? "1px" : "0"
    },
    children: /* @__PURE__ */ v.jsxs(Me, {
      children: [/* @__PURE__ */ v.jsx(Ie, {
        spacingRight: "10px",
        children: /* @__PURE__ */ v.jsx(Gr, {
          src: t && t.length > 0 ? t : Li,
          onError: U,
          loading: "lazy",
          alt: `${e ?? "Skeleton"} Avatar`
        })
      }), /* @__PURE__ */ v.jsxs(df, {
        children: [/* @__PURE__ */ v.jsx(Me, {
          justifyContent: "space-between",
          flexGrow: 1,
          children: /* @__PURE__ */ v.jsxs(jr, {
            children: [/* @__PURE__ */ v.jsxs(Me, {
              children: [/* @__PURE__ */ v.jsx("strong", {
                children: e
              }), h && /* @__PURE__ */ v.jsx(Ie, {
                spacingLeft: "5px",
                children: /* @__PURE__ */ v.jsx(Wr, {})
              })]
            }), /* @__PURE__ */ v.jsx(Me, {
              alignItems: "center",
              children: /* @__PURE__ */ v.jsxs(hf, {
                children: ["@", n]
              })
            })]
          })
        }), /* @__PURE__ */ v.jsx(Ie, {
          spacingVertical: "15px",
          children: /* @__PURE__ */ v.jsx(uf, {
            style: L,
            children: w
          })
        }), g && F && F.length > 0 ? /* @__PURE__ */ v.jsx(yr, {
          style: {
            margin: G ? "10px 0" : "0"
          },
          children: H.map((V, M) => /* @__PURE__ */ v.jsx("div", {
            style: {
              width: "100%"
            },
            children: V
          }, M))
        }) : /* @__PURE__ */ v.jsx(v.Fragment, {}), m && l && l.length > 0 ? /* @__PURE__ */ v.jsx(yr, {
          children: l.map((V) => /* @__PURE__ */ v.jsx(af, {
            url: V.frames_url,
            initialFrame: V,
            onFrameBtnPress: T
          }, V.frames_url))
        }) : null, /* @__PURE__ */ v.jsxs(ff, {
          style: {
            justifyContent: f ? "space-between" : "flex-end"
          },
          children: [f && /* @__PURE__ */ v.jsx(Hu, {
            hash: i,
            reactions: r,
            onComment: S,
            onRecast: x,
            onLike: N,
            isLiked: P
          }), f && n && i && /* @__PURE__ */ v.jsx(pr, {
            url: `https://warpcast.com/${n}/${i.slice(0, 10)}`
          })]
        }), /* @__PURE__ */ v.jsxs(xr, {
          style: {
            justifyContent: f ? "" : "space-between"
          },
          children: [/* @__PURE__ */ v.jsxs(xr, {
            style: {
              justifyContent: f ? "" : "space-between",
              gap: 6
            },
            children: [/* @__PURE__ */ v.jsxs("div", {
              children: [a, " replies"]
            }), /* @__PURE__ */ v.jsx("div", {
              children: "·"
            }), /* @__PURE__ */ v.jsxs("div", {
              children: [_, " likes"]
            }), c && /* @__PURE__ */ v.jsxs(v.Fragment, {
              children: [/* @__PURE__ */ v.jsx("div", {
                children: "·"
              }), /* @__PURE__ */ v.jsxs(cf, {
                href: `https://warpcast.com/~/channel/${c.id}`,
                target: "_blank",
                children: ["/", c.id]
              })]
            })]
          }), !f && n && i && /* @__PURE__ */ v.jsx(pr, {
            url: `https://warpcast.com/${n}/${i.slice(0, 10)}`
          })]
        })]
      })]
    })
  });
}), gf = /* @__PURE__ */ K("div")({
  classes: ["s1m6ob1a"]
}), Er = /* @__PURE__ */ K("div")({
  classes: ["r1esevc7"]
}), Tr = /* @__PURE__ */ K("div")({
  classes: ["vxb1f00"]
}), mf = /* @__PURE__ */ K("div")({
  classes: ["htv0qz7"]
}), vr = /* @__PURE__ */ K("div")({
  classes: ["rzksy2"]
});
function pf(n) {
  return /* @__PURE__ */ v.jsx(gf, {
    children: n.casts.map((e, t) => /* @__PURE__ */ v.jsxs(Er, {
      children: [t !== 0 && /* @__PURE__ */ v.jsx(Tr, {
        style: {
          left: "42px"
        }
      }), /* @__PURE__ */ v.jsxs(vr, {
        children: [/* @__PURE__ */ v.jsx(_s, {
          isEmbed: !1,
          ...e
        }), t === 0 && /* @__PURE__ */ v.jsx(mf, {}), e.direct_replies && e.direct_replies.length > 0 && e.direct_replies.map((s, i) => /* @__PURE__ */ v.jsxs(Er, {
          children: [/* @__PURE__ */ v.jsx(Tr, {
            style: {
              left: "42px"
            }
          }), /* @__PURE__ */ v.jsx(vr, {
            children: /* @__PURE__ */ v.jsx(_s, {
              isEmbed: !1,
              ...s
            })
          })]
        }, i))]
      })]
    }, t))
  });
}
async function yf({
  type: n,
  identifier: e,
  replyDepth: t = 2,
  includeChronologicalParentCasts: s = !1,
  limit: i = 20,
  viewerFid: r,
  clientId: a
}) {
  try {
    let o = `${kt}/v2/farcaster/cast/conversation?identifier=${encodeURIComponent(e)}&type=${n}&reply_depth=${t}&include_chronological_parent_casts=${s}&limit=${i}&client_id=${a}`;
    return r && (o += `&viewer_fid=${r}`), await (await Pt(o, {
      method: "GET",
      headers: {
        accept: "application/json"
      }
    })).json() || null;
  } catch (o) {
    return console.error("Error fetching conversation", o), null;
  }
}
function io(n) {
  return {
    username: n.author.username,
    displayName: n.author.display_name,
    avatarImgUrl: n.author.pfp_url,
    text: n.text,
    hash: n.hash,
    reactions: n.reactions,
    replies: n.replies.count,
    embeds: n.embeds,
    frames: n.frames,
    renderEmbeds: n.renderEmbeds,
    channel: n.channel,
    viewerFid: 2,
    hasPowerBadge: n.author.power_badge,
    isOwnProfile: !1,
    allowReactions: !0,
    renderFrames: !1,
    direct_replies: n.direct_replies ? n.direct_replies.map(io) : []
  };
}
function xf(n) {
  const e = [];
  return n.cast && e.push(io(n.cast)), e;
}
const D0 = ({
  type: n,
  identifier: e,
  replyDepth: t = 2,
  includeChronologicalParentCasts: s = !1,
  limit: i = 20,
  viewerFid: r
}) => {
  const {
    client_id: a
  } = it(), [o, l] = te.useState(null), [c, d] = te.useState(!0), [h, u] = te.useState(null);
  return te.useEffect(() => {
    d(!0), u(null), yf({
      type: n,
      identifier: e,
      replyDepth: t,
      includeChronologicalParentCasts: s,
      limit: i,
      viewerFid: r,
      clientId: a
    }).then((f) => {
      l(f);
    }).catch((f) => {
      u(f);
    }).finally(() => {
      d(!1);
    });
  }, [n, e, t, s, i, r, a]), c ? /* @__PURE__ */ v.jsx(v.Fragment, {
    children: " "
  }) : h ? /* @__PURE__ */ v.jsx(v.Fragment, {
    children: " "
  }) : /* @__PURE__ */ v.jsx(pf, {
    casts: xf(o.conversation)
  });
};
var no = { exports: {} }, si = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function Ef() {
  if (Sr) return si;
  Sr = 1;
  var n = te;
  function e(h, u) {
    return h === u && (h !== 0 || 1 / h === 1 / u) || h !== h && u !== u;
  }
  var t = typeof Object.is == "function" ? Object.is : e, s = n.useState, i = n.useEffect, r = n.useLayoutEffect, a = n.useDebugValue;
  function o(h, u) {
    var f = u(), g = s({ inst: { value: f, getSnapshot: u } }), m = g[0].inst, p = g[1];
    return r(function() {
      m.value = f, m.getSnapshot = u, l(m) && p({ inst: m });
    }, [h, f, u]), i(function() {
      return l(m) && p({ inst: m }), h(function() {
        l(m) && p({ inst: m });
      });
    }, [h]), a(f), f;
  }
  function l(h) {
    var u = h.getSnapshot;
    h = h.value;
    try {
      var f = u();
      return !t(h, f);
    } catch {
      return !0;
    }
  }
  function c(h, u) {
    return u();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : o;
  return si.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, si;
}
no.exports = Ef();
var ro = no.exports;
const ot = () => {
}, Te = (
  /*#__NOINLINE__*/
  ot()
), ii = Object, Z = (n) => n === Te, Ue = (n) => typeof n == "function", lt = (n, e) => ({
  ...n,
  ...e
}), Tf = (n) => Ue(n.then), ns = /* @__PURE__ */ new WeakMap();
let vf = 0;
const Kt = (n) => {
  const e = typeof n, t = n && n.constructor, s = t == Date;
  let i, r;
  if (ii(n) === n && !s && t != RegExp) {
    if (i = ns.get(n), i) return i;
    if (i = ++vf + "~", ns.set(n, i), t == Array) {
      for (i = "@", r = 0; r < n.length; r++)
        i += Kt(n[r]) + ",";
      ns.set(n, i);
    }
    if (t == ii) {
      i = "#";
      const a = ii.keys(n).sort();
      for (; !Z(r = a.pop()); )
        Z(n[r]) || (i += r + ":" + Kt(n[r]) + ",");
      ns.set(n, i);
    }
  } else
    i = s ? n.toJSON() : e == "symbol" ? n.toString() : e == "string" ? JSON.stringify(n) : "" + n;
  return i;
}, Ke = /* @__PURE__ */ new WeakMap(), ni = {}, rs = {}, Qi = "undefined", Ds = typeof window != Qi, Ri = typeof document != Qi, Sf = () => Ds && typeof window.requestAnimationFrame != Qi, at = (n, e) => {
  const t = Ke.get(n);
  return [
    // Getter
    () => !Z(e) && n.get(e) || ni,
    // Setter
    (s) => {
      if (!Z(e)) {
        const i = n.get(e);
        e in rs || (rs[e] = i), t[5](e, lt(i, s), i || ni);
      }
    },
    // Subscriber
    t[6],
    // Get server cache snapshot
    () => !Z(e) && e in rs ? rs[e] : !Z(e) && n.get(e) || ni
  ];
};
let _i = !0;
const Af = () => _i, [bi, Ii] = Ds && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  ot,
  ot
], Lf = () => {
  const n = Ri && document.visibilityState;
  return Z(n) || n !== "hidden";
}, Cf = (n) => (Ri && document.addEventListener("visibilitychange", n), bi("focus", n), () => {
  Ri && document.removeEventListener("visibilitychange", n), Ii("focus", n);
}), Rf = (n) => {
  const e = () => {
    _i = !0, n();
  }, t = () => {
    _i = !1;
  };
  return bi("online", e), bi("offline", t), () => {
    Ii("online", e), Ii("offline", t);
  };
}, _f = {
  isOnline: Af,
  isVisible: Lf
}, bf = {
  initFocus: Cf,
  initReconnect: Rf
}, Ar = !te.useId, jt = !Ds || "Deno" in window, If = (n) => Sf() ? window.requestAnimationFrame(n) : setTimeout(n, 1), gs = jt ? ue : xo, ri = typeof navigator < "u" && navigator.connection, Lr = !jt && ri && ([
  "slow-2g",
  "2g"
].includes(ri.effectiveType) || ri.saveData), Dt = (n) => {
  if (Ue(n))
    try {
      n = n();
    } catch {
      n = "";
    }
  const e = n;
  return n = typeof n == "string" ? n : (Array.isArray(n) ? n.length : n) ? Kt(n) : "", [
    n,
    e
  ];
};
let Df = 0;
const Di = () => ++Df, ao = 0, oo = 1, lo = 2, wf = 3;
var Ut = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: wf,
  FOCUS_EVENT: ao,
  MUTATE_EVENT: lo,
  RECONNECT_EVENT: oo
};
async function co(...n) {
  const [e, t, s, i] = n, r = lt({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let a = r.populateCache;
  const o = r.rollbackOnError;
  let l = r.optimisticData;
  const c = (u) => typeof o == "function" ? o(u) : o !== !1, d = r.throwOnError;
  if (Ue(t)) {
    const u = t, f = [], g = e.keys();
    for (const m of g)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(m) && u(e.get(m)._k) && f.push(m);
    return Promise.all(f.map(h));
  }
  return h(t);
  async function h(u) {
    const [f] = Dt(u);
    if (!f) return;
    const [g, m] = at(e, f), [p, x, S, T] = Ke.get(e), C = () => {
      const O = p[f];
      return (Ue(r.revalidate) ? r.revalidate(g().data, u) : r.revalidate !== !1) && (delete S[f], delete T[f], O && O[0]) ? O[0](lo).then(() => g().data) : g().data;
    };
    if (n.length < 3)
      return C();
    let E = s, L;
    const _ = Di();
    x[f] = [
      _,
      0
    ];
    const I = !Z(l), P = g(), b = P.data, w = P._c, G = Z(w) ? b : w;
    if (I && (l = Ue(l) ? l(G, b) : l, m({
      data: l,
      _c: G
    })), Ue(E))
      try {
        E = E(G);
      } catch (O) {
        L = O;
      }
    if (E && Tf(E))
      if (E = await E.catch((O) => {
        L = O;
      }), _ !== x[f][0]) {
        if (L) throw L;
        return E;
      } else L && I && c(L) && (a = !0, m({
        data: G,
        _c: Te
      }));
    if (a && !L)
      if (Ue(a)) {
        const O = a(E, G);
        m({
          data: O,
          error: Te,
          _c: Te
        });
      } else
        m({
          data: E,
          error: Te,
          _c: Te
        });
    if (x[f][1] = Di(), Promise.resolve(C()).then(() => {
      m({
        _c: Te
      });
    }), L) {
      if (d) throw L;
      return;
    }
    return E;
  }
}
const Cr = (n, e) => {
  for (const t in n)
    n[t][0] && n[t][0](e);
}, kf = (n, e) => {
  if (!Ke.has(n)) {
    const t = lt(bf, e), s = {}, i = co.bind(Te, n);
    let r = ot;
    const a = {}, o = (d, h) => {
      const u = a[d] || [];
      return a[d] = u, u.push(h), () => u.splice(u.indexOf(h), 1);
    }, l = (d, h, u) => {
      n.set(d, h);
      const f = a[d];
      if (f)
        for (const g of f)
          g(h, u);
    }, c = () => {
      if (!Ke.has(n) && (Ke.set(n, [
        s,
        {},
        {},
        {},
        i,
        l,
        o
      ]), !jt)) {
        const d = t.initFocus(setTimeout.bind(Te, Cr.bind(Te, s, ao))), h = t.initReconnect(setTimeout.bind(Te, Cr.bind(Te, s, oo)));
        r = () => {
          d && d(), h && h(), Ke.delete(n);
        };
      }
    };
    return c(), [
      n,
      i,
      c,
      r
    ];
  }
  return [
    n,
    Ke.get(n)[4]
  ];
}, Pf = (n, e, t, s, i) => {
  const r = t.errorRetryCount, a = i.retryCount, o = ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) * t.errorRetryInterval;
  !Z(r) && a > r || setTimeout(s, o, i);
}, Of = (n, e) => Kt(n) == Kt(e), [Ji, Ff] = kf(/* @__PURE__ */ new Map()), Mf = lt(
  {
    // events
    onLoadingSlow: ot,
    onSuccess: ot,
    onError: ot,
    onErrorRetry: Pf,
    onDiscarded: ot,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Lr ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Lr ? 5e3 : 3e3,
    // providers
    compare: Of,
    isPaused: () => !1,
    cache: Ji,
    mutate: Ff,
    fallback: {}
  },
  // use web preset by default
  _f
), Nf = (n, e) => {
  const t = lt(n, e);
  if (e) {
    const { use: s, fallback: i } = n, { use: r, fallback: a } = e;
    s && r && (t.use = s.concat(r)), i && a && (t.fallback = lt(i, a));
  }
  return t;
}, Uf = wi({}), ho = "$inf$", uo = Ds && window.__SWR_DEVTOOLS_USE__, Bf = uo ? window.__SWR_DEVTOOLS_USE__ : [], $f = () => {
  uo && (window.__SWR_DEVTOOLS_REACT__ = te);
}, fo = (n) => Ue(n[1]) ? [
  n[0],
  n[1],
  n[2] || {}
] : [
  n[0],
  null,
  (n[1] === null ? n[2] : n[1]) || {}
], Gf = () => lt(Mf, ki(Uf)), Vf = (n) => (e, t, s) => n(e, t && ((...r) => {
  const [a] = Dt(e), [, , , o] = Ke.get(Ji);
  if (a.startsWith(ho))
    return t(...r);
  const l = o[a];
  return Z(l) ? t(...r) : (delete o[a], l);
}), s), Hf = Bf.concat(Vf), Kf = (n) => function(...t) {
  const s = Gf(), [i, r, a] = fo(t), o = Nf(s, a);
  let l = n;
  const { use: c } = o, d = (c || []).concat(Hf);
  for (let h = d.length; h--; )
    l = d[h](l);
  return l(i, r || o.fetcher || null, o);
}, jf = (n, e, t) => {
  const s = e[n] || (e[n] = []);
  return s.push(t), () => {
    const i = s.indexOf(t);
    i >= 0 && (s[i] = s[s.length - 1], s.pop());
  };
}, Wf = (n, e) => (...t) => {
  const [s, i, r] = fo(t), a = (r.use || []).concat(e);
  return n(s, i, {
    ...r,
    use: a
  });
};
$f();
const Rr = te.use || ((n) => {
  if (n.status === "pending")
    throw n;
  if (n.status === "fulfilled")
    return n.value;
  throw n.status === "rejected" ? n.reason : (n.status = "pending", n.then((e) => {
    n.status = "fulfilled", n.value = e;
  }, (e) => {
    n.status = "rejected", n.reason = e;
  }), n);
}), ai = {
  dedupe: !0
}, Yf = (n, e, t) => {
  const { cache: s, compare: i, suspense: r, fallbackData: a, revalidateOnMount: o, revalidateIfStale: l, refreshInterval: c, refreshWhenHidden: d, refreshWhenOffline: h, keepPreviousData: u } = t, [f, g, m, p] = Ke.get(s), [x, S] = Dt(n), T = Ce(!1), C = Ce(!1), E = Ce(x), L = Ce(e), _ = Ce(t), I = () => _.current, P = () => I().isVisible() && I().isOnline(), [b, w, G, O] = at(s, x), F = Ce({}).current, U = Z(a) ? t.fallback[x] : a, N = (re, ae) => {
    for (const ve in F) {
      const he = ve;
      if (he === "data") {
        if (!i(re[he], ae[he]) && (!Z(re[he]) || !i(le, ae[he])))
          return !1;
      } else if (ae[he] !== re[he])
        return !1;
    }
    return !0;
  }, H = gt(() => {
    const re = !x || !e ? !1 : Z(o) ? I().isPaused() || r ? !1 : Z(l) ? !0 : l : o, ae = (Le) => {
      const ze = lt(Le);
      return delete ze._k, re ? {
        isValidating: !0,
        isLoading: !0,
        ...ze
      } : ze;
    }, ve = b(), he = O(), Be = ae(ve), pt = ve === he ? Be : ae(he);
    let xe = Be;
    return [
      () => {
        const Le = ae(b());
        return N(Le, xe) ? (xe.data = Le.data, xe.isLoading = Le.isLoading, xe.isValidating = Le.isValidating, xe.error = Le.error, xe) : (xe = Le, Le);
      },
      () => pt
    ];
  }, [
    s,
    x
  ]), V = ro.useSyncExternalStore(be(
    (re) => G(x, (ae, ve) => {
      N(ve, ae) || re();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      s,
      x
    ]
  ), H[0], H[1]), M = !T.current, B = f[x] && f[x].length > 0, X = V.data, j = Z(X) ? U : X, Q = V.error, se = Ce(j), le = u ? Z(X) ? se.current : X : j, de = B && !Z(Q) ? !1 : M && !Z(o) ? o : I().isPaused() ? !1 : r ? Z(j) ? !1 : l : Z(j) || l, Ae = !!(x && e && M && de), ct = Z(V.isValidating) ? Ae : V.isValidating, Ot = Z(V.isLoading) ? Ae : V.isLoading, Ft = be(
    async (re) => {
      const ae = L.current;
      if (!x || !ae || C.current || I().isPaused())
        return !1;
      let ve, he, Be = !0;
      const pt = re || {}, xe = !m[x] || !pt.dedupe, Le = () => Ar ? !C.current && x === E.current && T.current : x === E.current, ze = {
        isValidating: !1,
        isLoading: !1
      }, tn = () => {
        w(ze);
      }, sn = () => {
        const De = m[x];
        De && De[1] === he && delete m[x];
      }, nn = {
        isValidating: !0
      };
      Z(b().data) && (nn.isLoading = !0);
      try {
        if (xe && (w(nn), t.loadingTimeout && Z(b().data) && setTimeout(() => {
          Be && Le() && I().onLoadingSlow(x, t);
        }, t.loadingTimeout), m[x] = [
          ae(S),
          Di()
        ]), [ve, he] = m[x], ve = await ve, xe && setTimeout(sn, t.dedupingInterval), !m[x] || m[x][1] !== he)
          return xe && Le() && I().onDiscarded(x), !1;
        ze.error = Te;
        const De = g[x];
        if (!Z(De) && // case 1
        (he <= De[0] || // case 2
        he <= De[1] || // case 3
        De[1] === 0))
          return tn(), xe && Le() && I().onDiscarded(x), !1;
        const Xe = b().data;
        ze.data = i(Xe, ve) ? Xe : ve, xe && Le() && I().onSuccess(ve, x, t);
      } catch (De) {
        sn();
        const Xe = I(), { shouldRetryOnError: ws } = Xe;
        Xe.isPaused() || (ze.error = De, xe && Le() && (Xe.onError(De, x, Xe), (ws === !0 || Ue(ws) && ws(De)) && (!I().revalidateOnFocus || !I().revalidateOnReconnect || P()) && Xe.onErrorRetry(De, x, Xe, (yo) => {
          const ks = f[x];
          ks && ks[0] && ks[0](Ut.ERROR_REVALIDATE_EVENT, yo);
        }, {
          retryCount: (pt.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Be = !1, tn(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      x,
      s
    ]
  ), en = be(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...re) => co(s, E.current, ...re),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (gs(() => {
    L.current = e, _.current = t, Z(X) || (se.current = X);
  }), gs(() => {
    if (!x) return;
    const re = Ft.bind(Te, ai);
    let ae = 0;
    const he = jf(x, f, (Be, pt = {}) => {
      if (Be == Ut.FOCUS_EVENT) {
        const xe = Date.now();
        I().revalidateOnFocus && xe > ae && P() && (ae = xe + I().focusThrottleInterval, re());
      } else if (Be == Ut.RECONNECT_EVENT)
        I().revalidateOnReconnect && P() && re();
      else {
        if (Be == Ut.MUTATE_EVENT)
          return Ft();
        if (Be == Ut.ERROR_REVALIDATE_EVENT)
          return Ft(pt);
      }
    });
    return C.current = !1, E.current = x, T.current = !0, w({
      _k: S
    }), de && (Z(j) || jt ? re() : If(re)), () => {
      C.current = !0, he();
    };
  }, [
    x
  ]), gs(() => {
    let re;
    function ae() {
      const he = Ue(c) ? c(b().data) : c;
      he && re !== -1 && (re = setTimeout(ve, he));
    }
    function ve() {
      !b().error && (d || I().isVisible()) && (h || I().isOnline()) ? Ft(ai).then(ae) : ae();
    }
    return ae(), () => {
      re && (clearTimeout(re), re = -1);
    };
  }, [
    c,
    d,
    h,
    x
  ]), Eo(le), r && Z(j) && x) {
    if (!Ar && jt)
      throw new Error("Fallback data is required when using suspense in SSR.");
    L.current = e, _.current = t, C.current = !1;
    const re = p[x];
    if (!Z(re)) {
      const ae = en(re);
      Rr(ae);
    }
    if (Z(Q)) {
      const ae = Ft(ai);
      Z(le) || (ae.status = "fulfilled", ae.value = !0), Rr(ae);
    } else
      throw Q;
  }
  return {
    mutate: en,
    get data() {
      return F.data = !0, le;
    },
    get error() {
      return F.error = !0, Q;
    },
    get isValidating() {
      return F.isValidating = !0, ct;
    },
    get isLoading() {
      return F.isLoading = !0, Ot;
    }
  };
}, qf = Kf(Yf), zf = (n) => Dt(n ? n(0, null) : null)[0], oi = Promise.resolve(), Xf = (n) => (e, t, s) => {
  const i = Ce(!1), { cache: r, initialSize: a = 1, revalidateAll: o = !1, persistSize: l = !1, revalidateFirstPage: c = !0, revalidateOnMount: d = !1, parallel: h = !1 } = s, [, , , u] = Ke.get(Ji);
  let f;
  try {
    f = zf(e), f && (f = ho + f);
  } catch {
  }
  const [g, m, p] = at(r, f), x = be(() => Z(g()._l) ? a : g()._l, [
    r,
    f,
    a
  ]);
  ro.useSyncExternalStore(be(
    (I) => f ? p(f, () => {
      I();
    }) : () => {
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      f
    ]
  ), x, x);
  const S = be(() => {
    const I = g()._l;
    return Z(I) ? a : I;
  }, [
    f,
    a
  ]), T = Ce(S());
  gs(() => {
    if (!i.current) {
      i.current = !0;
      return;
    }
    f && m({
      _l: l ? T.current : S()
    });
  }, [
    f,
    r
  ]);
  const C = d && !i.current, E = n(f, async (I) => {
    const P = g()._i, b = g()._r;
    m({
      _r: Te
    });
    const w = [], G = S(), [O] = at(r, I), F = O().data, U = [];
    let N = null;
    for (let H = 0; H < G; ++H) {
      const [V, M] = Dt(e(H, h ? null : N));
      if (!V)
        break;
      const [B, X] = at(r, V);
      let j = B().data;
      const Q = o || P || Z(j) || c && !H && !Z(F) || C || F && !Z(F[H]) && !s.compare(F[H], j);
      if (t && (typeof b == "function" ? b(j, M) : Q)) {
        const se = async () => {
          if (!(V in u))
            j = await t(M);
          else {
            const de = u[V];
            delete u[V], j = await de;
          }
          X({
            data: j,
            _k: M
          }), w[H] = j;
        };
        h ? U.push(se) : await se();
      } else
        w[H] = j;
      h || (N = j);
    }
    return h && await Promise.all(U.map((H) => H())), m({
      _i: Te
    }), w;
  }, s), L = be(
    // eslint-disable-next-line func-names
    function(I, P) {
      const b = typeof P == "boolean" ? {
        revalidate: P
      } : P || {}, w = b.revalidate !== !1;
      return f ? (w && (Z(I) ? m({
        _i: !0,
        _r: b.revalidate
      }) : m({
        _i: !1,
        _r: b.revalidate
      })), arguments.length ? E.mutate(I, {
        ...b,
        revalidate: w
      }) : E.mutate()) : oi;
    },
    // swr.mutate is always the same reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      f,
      r
    ]
  ), _ = be(
    (I) => {
      if (!f) return oi;
      const [, P] = at(r, f);
      let b;
      if (Ue(I) ? b = I(S()) : typeof I == "number" && (b = I), typeof b != "number") return oi;
      P({
        _l: b
      }), T.current = b;
      const w = [], [G] = at(r, f);
      let O = null;
      for (let F = 0; F < b; ++F) {
        const [U] = Dt(e(F, O)), [N] = at(r, U), H = U ? N().data : Te;
        if (Z(H))
          return L(G().data);
        w.push(H), O = H;
      }
      return L(w);
    },
    // exclude getKey from the dependencies, which isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      f,
      r,
      L,
      S
    ]
  );
  return {
    size: S(),
    setSize: _,
    mutate: L,
    get data() {
      return E.data;
    },
    get error() {
      return E.error;
    },
    get isValidating() {
      return E.isValidating;
    },
    get isLoading() {
      return E.isLoading;
    }
  };
}, Zf = Wf(qf, Xf), Qf = /* @__PURE__ */ K("div")({
  classes: ["sfmkqcr"]
}), Jf = /* @__PURE__ */ K("div")({
  classes: ["hrldtio"]
}), e0 = wr(({
  casts: n,
  cursor: e
}) => /* @__PURE__ */ v.jsx(Qf, {
  children: n.map((t, s) => /* @__PURE__ */ v.jsxs(te.Fragment, {
    children: [/* @__PURE__ */ v.jsx(_s, {
      isEmbed: !1,
      ...t
    }), s < n.length - 1 && /* @__PURE__ */ v.jsx(Jf, {})]
  }, t.hash))
}));
function t0(n) {
  return n ? n.map((e) => {
    var t, s, i, r, a;
    return {
      username: ((t = e == null ? void 0 : e.author) == null ? void 0 : t.username) ?? "",
      displayName: ((s = e == null ? void 0 : e.author) == null ? void 0 : s.display_name) ?? "",
      avatarImgUrl: ((i = e == null ? void 0 : e.author) == null ? void 0 : i.pfp_url) ?? "",
      text: (e == null ? void 0 : e.text) ?? "",
      hash: (e == null ? void 0 : e.hash) ?? "",
      reactions: (e == null ? void 0 : e.reactions) ?? [],
      replies: ((r = e == null ? void 0 : e.replies) == null ? void 0 : r.count) ?? 0,
      embeds: (e == null ? void 0 : e.embeds) ?? [],
      frames: (e == null ? void 0 : e.frames) ?? [],
      renderEmbeds: (e == null ? void 0 : e.renderEmbeds) ?? !0,
      channel: (e == null ? void 0 : e.channel) ?? "",
      viewerFid: 2,
      hasPowerBadge: ((a = e == null ? void 0 : e.author) == null ? void 0 : a.power_badge) ?? !1,
      isOwnProfile: !1,
      allowReactions: !0,
      renderFrames: !1
    };
  }) : [];
}
const s0 = (n) => Pt(n).then((e) => e.json()), i0 = (n, e, t) => {
  if (e && (!e.casts || !e.casts.length)) return null;
  let s = `${kt}/v2/farcaster/feed?feed_type=${t.feedType}&client_id=${t.clientId}`;
  return t.filterType && (s += `&filter_type=${t.filterType}`), t.fid && (s += `&fid=${t.fid}`), t.fids && (s += `&fids=${t.fids}`), t.parentUrl && (s += `&parent_url=${t.parentUrl}`), t.channelId && (s += `&channel_id=${t.channelId}`), t.embedUrl && (s += `&embed_url=${t.embedUrl}`), s += `&with_recasts=${t.withRecasts}&limit=${t.limit}`, t.viewerFid && (s += `&viewer_fid=${t.viewerFid}`), e && (s += `&cursor=${e.next.cursor}`), s;
}, w0 = (n) => {
  const {
    client_id: e
  } = it(), t = Ce(null), [s, i] = oe([]), [r, a] = oe(!1), o = Ce(null), {
    data: l,
    error: c,
    size: d,
    setSize: h,
    isValidating: u
  } = Zf((p, x) => i0(p, x, {
    ...n,
    clientId: e
  }), s0), f = l ? l.flatMap((p) => (p == null ? void 0 : p.casts) ?? []) : [], g = Array.from(new Set(f.map((p) => p.hash))).map((p) => f.find((x) => x.hash === p)), m = t0(g);
  return ue(() => {
    !l || l.length === 0 || i(m);
  }, [l]), ue(() => (o.current && o.current.disconnect(), o.current = new IntersectionObserver((p) => {
    var S, T;
    const [x] = p;
    x.isIntersecting && !r && !u && l && ((T = (S = l[l.length - 1]) == null ? void 0 : S.next) != null && T.cursor) && (a(!0), h(d + 1).then(() => a(!1)));
  }, {
    rootMargin: "100px"
  }), t.current && o.current.observe(t.current), () => {
    o.current && o.current.disconnect();
  }), [t.current, r, u, l, d]), !l && !c ? /* @__PURE__ */ v.jsx("div", {
    children: "Loading..."
  }) : c ? /* @__PURE__ */ v.jsx("div", {
    children: "Error fetching feed data"
  }) : /* @__PURE__ */ v.jsxs("div", {
    children: [/* @__PURE__ */ v.jsx(e0, {
      casts: s,
      cursor: ""
    }), u && /* @__PURE__ */ v.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "10px"
      },
      children: [/* @__PURE__ */ v.jsxs("span", {
        style: {
          animation: "blink 1.5s infinite"
        },
        children: ["Loading", /* @__PURE__ */ v.jsx("span", {
          className: "dots",
          children: "..."
        })]
      }), /* @__PURE__ */ v.jsx("style", {
        children: `
                        @keyframes blink {
                            0% { opacity: 1; }
                            50% { opacity: 0; }
                            100% { opacity: 1; }
                        }
                    `
      })]
    }), /* @__PURE__ */ v.jsx("div", {
      ref: t
    })]
  });
}, n0 = /* @__PURE__ */ K("button")({
  classes: ["b1bqug8r"]
}), r0 = /* @__PURE__ */ K("button")({
  classes: ["b1mra45w"]
}), _r = "https://warpcast.com", go = /(^|\s)\/\w+/g, mo = /@\w+/g, po = /((https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?)/g, br = new RegExp(`(${go.source})|(${mo.source})|(${po.source})`, "g"), a0 = (n) => go.test(n) ? `${_r}/~/channel${n.trim()}` : mo.test(n) ? `${_r}/${n.substring(1)}` : po.test(n) ? n.startsWith("http") ? n : `http://${n}` : "", o0 = /* @__PURE__ */ K("a")({
  classes: ["sby9wa2"]
}), l0 = (n) => {
  if (!n) return [];
  const e = [];
  let t = 0, s;
  for (; (s = br.exec(n)) !== null; ) {
    const i = s.index;
    t < i && e.push(n.slice(t, i));
    const r = a0(s[0]), a = s[0].trim().startsWith("/");
    e.push(/* @__PURE__ */ v.jsx(o0, {
      href: r,
      target: "_blank",
      style: a ? {
        marginLeft: 3.5
      } : {},
      children: s[0].trim()
    }, i)), t = br.lastIndex;
  }
  return t < n.length && e.push(n.slice(t)), e;
};
function Ir(n) {
  const e = Math.min(n, 1e9);
  return e >= 1e9 ? Math.floor(e / 1e8) / 10 + "B" : e >= 1e6 ? Math.floor(e / 1e5) / 10 + "M" : e >= 1e3 ? Math.floor(e / 100) / 10 + "K" : e.toString();
}
const c0 = /* @__PURE__ */ K("div")({
  classes: ["sdahm58"]
}), d0 = /* @__PURE__ */ K("div")({
  classes: ["mziqyxp"]
}), h0 = /* @__PURE__ */ K("div")({
  classes: ["uz7tpmf"]
}), u0 = /* @__PURE__ */ K("div")({
  classes: ["u1rxlwac"]
}), Dr = /* @__PURE__ */ K("div")({
  classes: ["pgc6yqp"]
}), f0 = /* @__PURE__ */ K("div")({
  classes: ["torjf9a"]
}), g0 = wr(({
  fid: n,
  username: e,
  displayName: t,
  avatarImgUrl: s,
  bio: i,
  followers: r,
  following: a,
  hasPowerBadge: o,
  isFollowing: l,
  isOwnProfile: c,
  onCast: d,
  containerStyles: h
}) => {
  const u = l0(i), f = gt(() => Ir(a), [a]), g = gt(() => Ir(r), [r]), m = () => {
    window.open("https://warpcast.com/~/settings", "_blank");
  }, p = {
    color: h == null ? void 0 : h.color
  };
  return /* @__PURE__ */ v.jsxs(c0, {
    style: h,
    children: [c && d && /* @__PURE__ */ v.jsxs(Me, {
      alignItems: "center",
      justifyContent: "space-between",
      spacingBottom: "20px",
      children: [/* @__PURE__ */ v.jsxs(u0, {
        style: h,
        children: ["@", e]
      }), /* @__PURE__ */ v.jsx(n0, {
        onClick: d,
        children: "Cast"
      })]
    }), /* @__PURE__ */ v.jsxs(Me, {
      children: [/* @__PURE__ */ v.jsx(Ie, {
        spacingRight: "10px",
        children: /* @__PURE__ */ v.jsx(Gr, {
          src: s ?? Li,
          loading: "lazy",
          alt: `${t ?? "Skeleton"} Avatar`
        })
      }), /* @__PURE__ */ v.jsxs(d0, {
        children: [/* @__PURE__ */ v.jsxs(Me, {
          justifyContent: "space-between",
          flexGrow: 1,
          children: [/* @__PURE__ */ v.jsxs(jr, {
            children: [/* @__PURE__ */ v.jsxs(Me, {
              children: [/* @__PURE__ */ v.jsx("strong", {
                children: t || `!${n}`
              }), o && /* @__PURE__ */ v.jsx(Ie, {
                spacingLeft: "5px",
                children: /* @__PURE__ */ v.jsx(Wr, {})
              })]
            }), /* @__PURE__ */ v.jsxs(Me, {
              alignItems: "center",
              children: [/* @__PURE__ */ v.jsxs(h0, {
                style: h,
                children: ["@", e]
              }), l && /* @__PURE__ */ v.jsx(f0, {
                style: h,
                children: "Follows you"
              })]
            })]
          }), /* @__PURE__ */ v.jsx(Me, {
            children: c && /* @__PURE__ */ v.jsx(r0, {
              style: h,
              onClick: m,
              children: "Edit Profile"
            })
          })]
        }), /* @__PURE__ */ v.jsx(Ie, {
          spacingVertical: "15px",
          children: /* @__PURE__ */ v.jsx("div", {
            style: h,
            children: u
          })
        }), /* @__PURE__ */ v.jsxs(Me, {
          children: [/* @__PURE__ */ v.jsxs(Dr, {
            children: [/* @__PURE__ */ v.jsx("strong", {
              style: p,
              children: f
            }), " Following"]
          }), /* @__PURE__ */ v.jsxs(Dr, {
            children: [/* @__PURE__ */ v.jsx("strong", {
              style: p,
              children: g
            }), " Followers"]
          })]
        })]
      })]
    })]
  });
});
async function m0({
  fid: n,
  viewerFid: e,
  clientId: t
}) {
  var s;
  try {
    let i = `${kt}/v2/farcaster/user/bulk?client_id=${t}&fids=${n}`;
    e && (i += `&viewer_fid=${e}`);
    const a = await (await Pt(i)).json();
    return ((s = a == null ? void 0 : a.users) == null ? void 0 : s[0]) ?? null;
  } catch (i) {
    return console.error("Error fetching user by fid", i), null;
  }
}
const k0 = ({
  fid: n,
  viewerFid: e,
  containerStyles: t
}) => {
  var u;
  const {
    client_id: s
  } = it(), [i, r] = oe(null), [a, o] = oe(!0), [l, c] = oe(null), d = (i == null ? void 0 : i.fid) === e;
  ue(() => {
    n && (o(!0), c(null), m0({
      fid: n,
      viewerFid: e,
      clientId: s
    }).then((f) => {
      r(f);
    }).catch((f) => {
      c(f);
    }).finally(() => {
      o(!1);
    }));
  }, [n, e]);
  const h = be(() => {
  }, []);
  return a ? /* @__PURE__ */ v.jsx("div", {
    children: "Loading..."
  }) : !i || l ? /* @__PURE__ */ v.jsx("div", {
    children: "Error fetching user data"
  }) : /* @__PURE__ */ v.jsx(g0, {
    fid: n,
    username: i.username,
    displayName: i.display_name,
    avatarImgUrl: i.pfp_url,
    bio: i.profile.bio.text,
    followers: i.follower_count,
    following: i.following_count,
    hasPowerBadge: i.power_badge,
    isOwnProfile: d,
    isFollowing: (u = i.viewer_context) == null ? void 0 : u.followed_by,
    onCast: h,
    containerStyles: t
  });
}, p0 = /* @__PURE__ */ K("ul")({
  classes: ["d12rx4om"]
}), y0 = /* @__PURE__ */ K("li")({
  classes: ["lrpm6lp"]
}), x0 = /* @__PURE__ */ K("img")({
  classes: ["a1e9hg3b"]
}), E0 = /* @__PURE__ */ K("div")({
  classes: ["u1aqay1i"]
}), T0 = /* @__PURE__ */ K("div")({
  classes: ["d1m0njq"]
}), v0 = /* @__PURE__ */ K("div")({
  classes: ["u1lvlbuo"]
}), S0 = ({
  users: n,
  onSelect: e,
  customStyles: t = {}
}) => /* @__PURE__ */ v.jsx(p0, {
  style: {
    ...t == null ? void 0 : t.dropdown
  },
  children: n.map((s) => /* @__PURE__ */ v.jsxs(y0, {
    style: {
      ...t == null ? void 0 : t.listItem
    },
    onClick: () => e(s),
    children: [/* @__PURE__ */ v.jsx(x0, {
      style: {
        ...t == null ? void 0 : t.avatar
      },
      src: s.pfp_url,
      alt: s.username
    }), /* @__PURE__ */ v.jsxs(E0, {
      style: {
        ...t.userInfo
      },
      children: [/* @__PURE__ */ v.jsx(T0, {
        children: s.display_name
      }), /* @__PURE__ */ v.jsxs(v0, {
        children: ["@", s.username]
      })]
    })]
  }, s.fid))
}), A0 = /* @__PURE__ */ K("div")({
  classes: ["c9hm20t"]
}), L0 = /* @__PURE__ */ K("input")({
  classes: ["i80sd8h"]
});
async function C0({
  q: n,
  viewerFid: e,
  client_id: t
}) {
  var s;
  try {
    let i = `${kt}/v2/farcaster/user/search?q=${n}&limit=5${e ? `&viewer_fid=${e}` : ""}&client_id=${t}`;
    const a = await (await Pt(i)).json();
    return ((s = a == null ? void 0 : a.result) == null ? void 0 : s.users) || [];
  } catch (i) {
    return console.log("Error fetching users by query", i), null;
  }
}
const P0 = ({
  value: n,
  onChange: e,
  style: t = {},
  placeholder: s = "Enter FIDs or usernames",
  disabled: i = !1,
  viewerFid: r,
  customStyles: a = {},
  limit: o = null
}) => {
  const {
    client_id: l
  } = it(), [c, d] = oe(""), [h, u] = oe(!1), [f, g] = oe([]), m = Ce(null);
  ue(() => {
    const E = (n == null ? void 0 : n.split(",")) || [];
    if (!E[E.length - 1]) {
      d("");
      return;
    }
    d(E[E.length - 1].trim());
  }, [n]), ue(() => {
    c !== "" && !/^\d+$/.test(c) ? p(c) : u(!1);
  }, [c]);
  const p = async (E) => {
    const L = await C0({
      q: E,
      viewerFid: r,
      client_id: l
    });
    L && (g(L), u(!0));
  }, x = (E) => {
    const L = E.target.value;
    e(L);
  }, S = (E) => {
    let L = n.split(",");
    o !== null && L.length >= o ? L[L.length - 1] = E.fid.toString() : L.push(E.fid.toString());
    const _ = L.join(",");
    e(_), d(""), u(!1);
  }, T = () => {
    c && isNaN(Number(c)) && u(!0);
  }, C = () => {
    setTimeout(() => u(!1), 200);
  };
  return /* @__PURE__ */ v.jsxs(A0, {
    style: t,
    children: [/* @__PURE__ */ v.jsx(L0, {
      ref: m,
      type: "text",
      value: n,
      onChange: x,
      onFocus: T,
      onBlur: C,
      placeholder: s,
      disabled: i
    }), h && /* @__PURE__ */ v.jsx(S0, {
      users: f,
      onSelect: S,
      customStyles: a
    })]
  });
};
export {
  _s as CastCard,
  jo as NeynarAuthButton,
  Au as NeynarCastCard,
  _0 as NeynarContextProvider,
  D0 as NeynarConversationList,
  w0 as NeynarFeedList,
  af as NeynarFrameCard,
  k0 as NeynarProfileCard,
  P0 as NeynarUserDropdown,
  st as SIWN_variant,
  Nr as Theme,
  Pi as useLocalStorage,
  it as useNeynarContext
};
