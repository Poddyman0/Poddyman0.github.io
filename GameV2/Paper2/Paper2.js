/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Paper2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paper", "./Paper2/costumes/paper.png", { x: 300, y: 290 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "comp paper" },
        this.whenIReceiveCompPaper
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCompPaper() {
    yield* this.glide(1, 40, -90);
    return;
  }

  *whenGreenFlagClicked() {
    this.goto(120, -90);
  }
}
