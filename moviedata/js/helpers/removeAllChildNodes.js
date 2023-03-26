export const removeAllChildNodes = (id) => {
  const element = document.getElementById(id);
  const elementChildren = [...element.children];
  elementChildren.forEach((element) => {
    element.remove();
  });
};
