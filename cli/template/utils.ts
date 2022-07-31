export function upperFirst(name: string) {
  return name.replace(/^([a-z])/, (_, $1) => {
    return $1.toUpperCase()
  })
}
