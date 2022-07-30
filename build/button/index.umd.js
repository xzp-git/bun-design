;(function (o, s) {
  typeof exports == 'object' && typeof module < 'u'
    ? s(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], s)
    : ((o = typeof globalThis < 'u' ? globalThis : o || self),
      s((o.index = {}), o.Vue))
})(this, function (o, s) {
  'use strict'
  function c(t, u, d, l) {
    return u && (t += `-${u}`), d && (t += `__${d}`), l && (t += `--${l}`), t
  }
  function p(t) {
    return {
      b: (n = '') => c(t, n, '', ''),
      e: (n = '') => (n ? c(t, '', n, '') : ''),
      m: (n = '') => (n ? c(t, '', '', n) : ''),
      be: (n = '', e = '') => (n && e ? c(t, n, e, '') : ''),
      em: (n = '', e = '') => (e && n ? c(t, '', n, e) : ''),
      bm: (n = '', e = '') => (n && e ? c(t, n, '', e) : ''),
      bem: (n = '', e = '', y = '') => (n && y ? c(t, n, e, y) : ''),
      is: (n, e) => (e ? `is-${n}` : '')
    }
  }
  function v(t) {
    const u = `b-${t}`
    return p(u)
  }
  const b = {
      type: { type: String, default: 'secondary' },
      size: { type: String, default: 'medium' },
      disabled: { type: Boolean, default: !1 },
      block: { type: Boolean, default: !1 }
    },
    f = s.defineComponent({
      name: 'BButton',
      props: b,
      setup(t, { slots: u }) {
        const { type: d, size: l, disabled: r, block: B } = s.toRefs(t),
          i = v('button')
        return () => {
          const a = u.default ? u.default() : '\u6309\u94AE'
          return s.createVNode(
            'button',
            {
              disabled: r.value,
              class: [i.b(), i.m(d.value), i.m(l.value), i.is('block', B.value)]
            },
            [a]
          )
        }
      }
    })
  function _(t) {
    return (
      (t.install = function (u) {
        const { name: d } = t
        u.component(d, t)
      }),
      t
    )
  }
  const S = _(f)
  ;(o.BButton = f),
    (o.buttonProps = b),
    (o.default = S),
    Object.defineProperties(o, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
