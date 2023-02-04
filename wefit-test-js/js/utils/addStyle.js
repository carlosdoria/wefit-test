export function addStyle(element, style) {
  for (const property in style)
    element.style[property] = style[property];
}