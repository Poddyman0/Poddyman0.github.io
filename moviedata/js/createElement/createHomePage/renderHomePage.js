import { createHomeBgImage } from "./createHomeBgImage.js";
import { createHomeText } from "./createHomeText.js";

export const renderHomePage = () => {
  const mainContainer = document.getElementById("main");

  const backgroundImage = createHomeBgImage();
  const homeText = createHomeText();

  mainContainer.appendChild(backgroundImage);
  mainContainer.appendChild(homeText);
};
