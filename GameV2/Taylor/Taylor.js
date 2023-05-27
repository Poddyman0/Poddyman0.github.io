/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Taylor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Taylor-a", "./Taylor/costumes/Taylor-a.svg", {
        x: 59.066061145351995,
        y: 52.19126
      }),
      new Costume("Taylor-b", "./Taylor/costumes/Taylor-b.svg", {
        x: 48.612321639466984,
        y: 53.0163
      }),
      new Costume("Taylor-c", "./Taylor/costumes/Taylor-c.svg", {
        x: 59.066061145351995,
        y: 52.19126
      }),
      new Costume("Taylor-d", "./Taylor/costumes/Taylor-d.svg", {
        x: 48.945654918401004,
        y: 50.35257000000004
      })
    ];

    this.sounds = [
      new Sound("Footsteps", "./Taylor/sounds/Footsteps.wav"),
      new Sound(
        "zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008",
        "./Taylor/sounds/zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008.mp3"
      ),
      new Sound(
        "foley_breeze_block_drop_on_hard_ground_001",
        "./Taylor/sounds/foley_breeze_block_drop_on_hard_ground_001.mp3"
      ),
      new Sound(
        "zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836",
        "./Taylor/sounds/zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836.mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.sayAndWait("I am your opponent, you cant beat me!", 5);
    while (
      !(
        this.stringIncludes(this.answer, "r") ||
        this.stringIncludes(this.answer, "p") ||
          this.stringIncludes(this.answer, "s")
      )
    ) {
      yield;
    }
    if (this.random(1, 3) === 2) {
      yield* this.wait(2);
      yield* this.playSoundUntilDone(
        "zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008"
      );
      this.broadcast("comp paper");
      yield* this.sayAndWait("I pick Paper", 2);
    } else {
      if (this.random(1, 3) === 1) {
        yield* this.wait(2);
        yield* this.playSoundUntilDone(
          "foley_breeze_block_drop_on_hard_ground_001"
        );
        this.broadcast("comp rock");
        yield* this.sayAndWait("I pick Rock", 2);
      } else {
        yield* this.wait(2);
        yield* this.playSoundUntilDone(
          "zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836"
        );
        this.broadcast("comp scissors");
        yield* this.sayAndWait("i pick Scissors", 2);
      }
    }
  }
}
