export const createElement = (tagName, attributes, ...content) => {
  let element = document.createElement(tagName);
  if (attributes) {
    for (const [attr, value] of Object.entries(attributes)) {
      element.setAttribute(attr, value);
    }
  }
  if (content && content.length) {
    element.append(...content);
  }
  return element;
};
