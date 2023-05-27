/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rock extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rock", "./Rock/costumes/rock.png", { x: 480, y: 320.5 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(-120, 0);
      this.sprites["Trisha"].createClone();
      if (this.stringIncludes(this.answer, "r")) {
        yield* this.glide(1, -40, 0);
        return;
      }
      yield;
    }
  }
}
