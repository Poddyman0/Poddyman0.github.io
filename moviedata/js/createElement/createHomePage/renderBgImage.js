import { createHomeBgImage } from './createHomeBgImage.js';

export const renderBgImage = () => {
  const mainContainer = document.getElementById('main');

  const backgroundImage = createHomeBgImage();

  mainContainer.appendChild(backgroundImage);
};
