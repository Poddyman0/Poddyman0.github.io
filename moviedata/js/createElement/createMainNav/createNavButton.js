import { createElement } from "../createElement.js";

export const createNavButton = ({
  containerClass,
  containerId,
  imgClass,
  imgId,
  pClass,
  pId,
  pText,
  arrow,
  dropDownMenu,
}) => {
  const navImg = createElement("img", {
    class: imgClass,
    id: imgId,
  });

  const navText = createElement("p", { class: pClass, id: pId }, pText);

  const navTextWrapper = createElement(
    "div",
    {
      class: "nav__button_text_wrapper",
    },
    navText
  );

  const arrowImg = createElement("img", {
    class: "nav_sort_pulldown_arrow",
    id: "nav_sort_pulldown_arrow",
  });

  const navButtonContainer = createElement(
    "buttton",
    {
      class: containerClass,
      id: containerId,
    },
    navImg,
    navTextWrapper,
    arrow ? arrowImg : "",
    dropDownMenu ? dropDownMenu : ""
  );

  return navButtonContainer;
};
