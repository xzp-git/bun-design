import { defineComponent as B, toRefs as f, createVNode as i } from "vue";
function c(t, s, u, l) {
  return s && (t += `-${s}`), u && (t += `__${u}`), l && (t += `--${l}`), t;
}
function y(t) {
  return {
    b: (n = "") => c(t, n, "", ""),
    e: (n = "") => n ? c(t, "", n, "") : "",
    m: (n = "") => n ? c(t, "", "", n) : "",
    be: (n = "", o = "") => n && o ? c(t, n, o, "") : "",
    em: (n = "", o = "") => o && n ? c(t, "", n, o) : "",
    bm: (n = "", o = "") => n && o ? c(t, n, "", o) : "",
    bem: (n = "", o = "", r = "") => n && r ? c(t, n, o, r) : "",
    is: (n, o) => o ? `is-${n}` : ""
  };
}
function $(t) {
  const s = `b-${t}`;
  return y(s);
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
}, v = B({
  name: "BButton",
  props: p,
  setup(t, {
    slots: s
  }) {
    const {
      type: u,
      size: l,
      disabled: b,
      block: a
    } = f(t), e = $("button");
    return () => {
      const d = s.default ? s.default() : "\u6309\u94AE";
      return i("button", {
        disabled: b.value,
        class: [
          e.b(),
          e.m(u.value),
          e.m(l.value),
          e.is("block", a.value)
        ]
      }, [d]);
    };
  }
});
function _(t) {
  return t.install = function(s) {
    const { name: u } = t;
    s.component(u, t);
  }, t;
}
const S = _(v), g = [S], w = {
  install(t) {
    g.forEach((s) => t.use(s));
  }
};
export {
  v as BButton,
  w as default
};
