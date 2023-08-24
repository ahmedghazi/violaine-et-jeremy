export const _linkResolver = (node: any) => {
  if (!node._type) return "/"
  // console.log(node._type)
  switch (node._type) {
    case "work":
      return `/works/${node.slug.current}`
    case "project":
      return `/project/${node.slug.current}`
    case "space":
      return `/space/${node.slug.current}`
    default:
      return `/${node.slug.current}`
  }
}

export const MathUtils = {
  // map number x from range [a, b] to [c, d]
  map: (x: number, a: number, b: number, c: number, d: number): number =>
    ((x - a) * (d - c)) / (b - a) + c,
  // linear interpolation
  lerp: (a: number, b: number, n: number): number => (1 - n) * a + n * b,
  // Random float
  getRandomFloat: (min: number, max: number): number =>
    parseFloat((Math.random() * (max - min) + min).toFixed(2)),
}
