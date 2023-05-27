/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Stripes", "./Stage/costumes/Stripes.svg", {
        x: 240,
        y: 180
      }),
      new Costume("background", "./Stage/costumes/background.svg", {
        x: 240.4444444444448,
        y: 179.99999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.yourWins = 8;
    this.vars.computerWins = 7;
    this.vars.tie = 5;

    this.watchers.yourWins = new Watcher({
      label: "Your wins:",
      style: "normal",
      visible: true,
      value: () => this.vars.yourWins,
      x: 240,
      y: -160
    });
    this.watchers.computerWins = new Watcher({
      label: "Computer wins:",
      style: "normal",
      visible: true,
      value: () => this.vars.computerWins,
      x: 565,
      y: -160
    });
    this.watchers.tie = new Watcher({
      label: "Tie:",
      style: "normal",
      visible: true,
      value: () => this.vars.tie,
      x: 439,
      y: -160
    });
  }
}
