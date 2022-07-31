export function genStyleTemplate(name) {
  return `\
@use '../../theme-chalk/mixins/mixins' as *;
@include b(${name}) {
/* your component style */
}`
}
