// 用来创建bem规范的名字

// b-block  e-element m-modifier  is -> 状态

//b-button__box--disabled

function _bem(
  prefixName: string,
  blockName: string,
  elementName: string,
  modifierName: string
) {
  if (blockName) {
    prefixName += `-${blockName}`
  }
  if (elementName) {
    prefixName += `__${elementName}`
  }
  if (modifierName) {
    prefixName += `--${modifierName}`
  }
  return prefixName
}

function createBem(prefixName: string) {
  const b = (blockName = '') => _bem(prefixName, blockName, '', '')
  const e = (elementName = '') =>
    elementName ? _bem(prefixName, '', elementName, '') : ''
  const m = (modifierName = '') =>
    modifierName ? _bem(prefixName, '', '', modifierName) : ''
  //be em bm bem
  const be = (blockName = '', elementName = '') =>
    blockName && elementName ? _bem(prefixName, blockName, elementName, '') : ''
  const em = (elementName = '', modifierName = '') =>
    modifierName && elementName
      ? _bem(prefixName, '', elementName, modifierName)
      : ''
  const bm = (blockName = '', modifierName = '') =>
    blockName && modifierName
      ? _bem(prefixName, blockName, '', modifierName)
      : ''
  const bem = (blockName = '', elementName = '', modifierName = '') =>
    blockName && modifierName
      ? _bem(prefixName, blockName, elementName, modifierName)
      : ''
  const is = (name: string, state: boolean) => (state ? `is-${name}` : '')
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  }
}

export function createNamespace(name: string) {
  const prefixName = `b-${name}`
  return createBem(prefixName)
}

/**
 * bem.b("button") b-button
 * bem.e("xx") b-button__xx
 *
 */
// let bem = createNamespace("button")

// console.log(bem.b("box"));
// console.log(bem.e("inner"));
// console.log(bem.m("disabled"));
// console.log(bem.bm("box", "disabled"));
// console.log(bem.em("inner", "disabled"));
// console.log(bem.bem("box", "inner", "disabled"));
