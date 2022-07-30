import { defineComponent as r, toRefs as f, createVNode as y } from "vue";
function c(t, o, u, l) {
  return o && (t += `-${o}`), u && (t += `__${u}`), l && (t += `--${l}`), t;
}
function i(t) {
  return {
    b: (n = "") => c(t, n, "", ""),
    e: (n = "") => n ? c(t, "", n, "") : "",
    m: (n = "") => n ? c(t, "", "", n) : "",
    be: (n = "", s = "") => n && s ? c(t, n, s, "") : "",
    em: (n = "", s = "") => s && n ? c(t, "", n, s) : "",
    bm: (n = "", s = "") => n && s ? c(t, n, "", s) : "",
    bem: (n = "", s = "", B = "") => n && B ? c(t, n, s, B) : "",
    is: (n, s) => s ? `is-${n}` : ""
  };
}
function $(t) {
  const o = `b-${t}`;
  return i(o);
}
const p = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  }
}, v = r({
  name: "BButton",
  props: p,
  setup(t, {
    slots: o
  }) {
    const {
      type: u,
      size: l,
      disabled: b,
      block: d
    } = f(t), e = $("button");
    return () => {
      const a = o.default ? o.default() : "\u6309\u94AE";
      return y("button", {
        disabled: b.value,
        class: [
          e.b(),
          e.m(u.value),
          e.m(l.value),
          e.is("block", d.value)
        ]
      }, [a]);
    };
  }
});
function _(t) {
  return t.install = function(o) {
    const { name: u } = t;
    o.component(u, t);
  }, t;
}
const z = _(v);
export {
  v as BButton,
  p as buttonProps,
  z as default
};
