/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Trisha extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Trisha-a", "./Trisha/costumes/Trisha-a.svg", {
        x: 81.34455278988648,
        y: 57.02459255690913
      }),
      new Costume("Trisha-b", "./Trisha/costumes/Trisha-b.svg", {
        x: 63.260135124357646,
        y: 60.86251166255646
      }),
      new Costume("Trisha-c", "./Trisha/costumes/Trisha-c.svg", {
        x: 81.34455278988648,
        y: 57.02459255690913
      }),
      new Costume("Trisha-d", "./Trisha/costumes/Trisha-d.svg", {
        x: 63.275047131412066,
        y: 55.525379847189015
      })
    ];

    this.sounds = [
      new Sound("Footsteps", "./Trisha/sounds/Footsteps.wav"),
      new Sound(
        "zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008",
        "./Trisha/sounds/zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008.mp3"
      ),
      new Sound(
        "foley_breeze_block_drop_on_hard_ground_001",
        "./Trisha/sounds/foley_breeze_block_drop_on_hard_ground_001.mp3"
      ),
      new Sound(
        "zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836",
        "./Trisha/sounds/zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836.mp3"
      ),
      new Sound(
        "zapsplat_foley_credit_card_cut_in_half_with_scissors_001_2",
        "./Trisha/sounds/zapsplat_foley_credit_card_cut_in_half_with_scissors_001_2.wav"
      ),
      new Sound("Video Game 1", "./Trisha/sounds/Video Game 1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.askAndWait(
      "Pick a weapon by typing r for rock, p for paper and s  for scissors"
    );
    this.createClone();
    if (this.stringIncludes(this.answer, "r")) {
      yield* this.playSoundUntilDone(
        "foley_breeze_block_drop_on_hard_ground_001"
      );
      this.broadcast("r");
      yield* this.sayAndWait("I pick Rock", 2);
    }
    if (this.stringIncludes(this.answer, "p")) {
      yield* this.playSoundUntilDone(
        "zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008"
      );
      this.broadcast("p");
      yield* this.sayAndWait("I pick Paper", 2);
    }
    if (this.stringIncludes(this.answer, "s")) {
      yield* this.playSoundUntilDone(
        "zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836"
      );
      this.broadcast("s");
      yield* this.sayAndWait("I pick Scissors", 2);
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.playSoundUntilDone("Video Game 1");
      yield;
    }
  }
}
