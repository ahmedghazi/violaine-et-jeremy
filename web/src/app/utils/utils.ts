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
