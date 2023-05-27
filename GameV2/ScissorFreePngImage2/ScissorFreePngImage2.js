/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScissorFreePngImage2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Scissor-Free-PNG-Image",
        "./ScissorFreePngImage2/costumes/Scissor-Free-PNG-Image.png",
        { x: 397, y: 360 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "comp scissors" },
        this.whenIReceiveCompScissors
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCompScissors() {
    yield* this.glide(1, 40, 90);
    return;
  }

  *whenGreenFlagClicked() {
    this.goto(120, 90);
  }
}
