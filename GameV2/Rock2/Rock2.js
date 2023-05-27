/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rock2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("rock", "./Rock2/costumes/rock.png", { x: 480, y: 320.5 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "comp rock" },
        this.whenIReceiveCompRock
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCompRock() {
    yield* this.glide(1, 40, 0);
    return;
  }

  *whenGreenFlagClicked() {
    this.goto(120, 0);
  }
}
