;(function (u, o) {
  typeof exports == 'object' && typeof module < 'u'
    ? o(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], o)
    : ((u = typeof globalThis < 'u' ? globalThis : u || self),
      o((u['bun-design'] = {}), u.Vue))
})(this, function (u, o) {
  'use strict'
  function c(t, e, l, d) {
    return e && (t += `-${e}`), l && (t += `__${l}`), d && (t += `--${d}`), t
  }
  function y(t) {
    return {
      b: (n = '') => c(t, n, '', ''),
      e: (n = '') => (n ? c(t, '', n, '') : ''),
      m: (n = '') => (n ? c(t, '', '', n) : ''),
      be: (n = '', s = '') => (n && s ? c(t, n, s, '') : ''),
      em: (n = '', s = '') => (s && n ? c(t, '', n, s) : ''),
      bm: (n = '', s = '') => (n && s ? c(t, n, '', s) : ''),
      bem: (n = '', s = '', B = '') => (n && B ? c(t, n, s, B) : ''),
      is: (n, s) => (s ? `is-${n}` : '')
    }
  }
  function p(t) {
    const e = `b-${t}`
    return y(e)
  }
  const v = {
      type: { type: String, default: 'secondary' },
      size: { type: String, default: 'medium' },
      disabled: { type: Boolean, default: !1 },
      block: { type: Boolean, default: !1 }
    },
    b = o.defineComponent({
      name: 'BButton',
      props: v,
      setup(t, { slots: e }) {
        const { type: l, size: d, disabled: f, block: r } = o.toRefs(t),
          i = p('button')
        return () => {
          const a = e.default ? e.default() : '\u6309\u94AE'
          return o.createVNode(
            'button',
            {
              disabled: f.value,
              class: [i.b(), i.m(l.value), i.m(d.value), i.is('block', r.value)]
            },
            [a]
          )
        }
      }
    })
  function _(t) {
    return (
      (t.install = function (e) {
        const { name: l } = t
        e.component(l, t)
      }),
      t
    )
  }
  const h = [_(b)],
    S = {
      install(t) {
        h.forEach(e => t.use(e))
      }
    }
  ;(u.BButton = b),
    (u.default = S),
    Object.defineProperties(u, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
