import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Trisha from "./Trisha/Trisha.js";
import Taylor from "./Taylor/Taylor.js";
import Paper from "./Paper/Paper.js";
import Rock from "./Rock/Rock.js";
import ScissorFreePngImage from "./ScissorFreePngImage/ScissorFreePngImage.js";
import Paper2 from "./Paper2/Paper2.js";
import Rock2 from "./Rock2/Rock2.js";
import ScissorFreePngImage2 from "./ScissorFreePngImage2/ScissorFreePngImage2.js";
import Tatiana from "./Tatiana/Tatiana.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Trisha: new Trisha({
    x: -200,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 2
  }),
  Taylor: new Taylor({
    x: 200,
    y: 0,
    direction: -90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 1
  }),
  Paper: new Paper({
    x: -40,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 3
  }),
  Rock: new Rock({
    x: -120,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 4
  }),
  ScissorFreePngImage: new ScissorFreePngImage({
    x: -120,
    y: 90,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 5
  }),
  Paper2: new Paper2({
    x: 120,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 6
  }),
  Rock2: new Rock2({
    x: 120,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 7
  }),
  ScissorFreePngImage2: new ScissorFreePngImage2({
    x: 40,
    y: 90,
    direction: 90,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 8
  }),
  Tatiana: new Tatiana({
    x: 0,
    y: -150,
    direction: -1.048483931883169,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 9
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
