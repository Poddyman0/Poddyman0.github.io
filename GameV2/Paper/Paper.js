/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Paper extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paper", "./Paper/costumes/paper.png", { x: 300, y: 290 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(-120, -90);
      this.sprites["Trisha"].createClone();
      if (this.stringIncludes(this.answer, "p")) {
        yield* this.glide(1, -40, -90);
        return;
      }
      yield;
    }
  }
}
