/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tatiana extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Tatiana-a", "./Tatiana/costumes/Tatiana-a.svg", {
        x: 60.66618579359704,
        y: 53.97647634953694
      }),
      new Costume("Tatiana-b", "./Tatiana/costumes/Tatiana-b.svg", {
        x: 49.74537298932822,
        y: 61.254895800177906
      }),
      new Costume("Tatiana-c", "./Tatiana/costumes/Tatiana-c.svg", {
        x: 60.666205767105936,
        y: 53.86536113811712
      }),
      new Costume("Tatiana-d", "./Tatiana/costumes/Tatiana-d.svg", {
        x: 49.85653018505951,
        y: 55.72124957487232
      })
    ];

    this.sounds = [
      new Sound("Footsteps", "./Tatiana/sounds/Footsteps.wav"),
      new Sound(
        "zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008",
        "./Tatiana/sounds/zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008.mp3"
      ),
      new Sound(
        "foley_breeze_block_drop_on_hard_ground_001",
        "./Tatiana/sounds/foley_breeze_block_drop_on_hard_ground_001.mp3"
      ),
      new Sound(
        "zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836",
        "./Tatiana/sounds/zapsplat_foley_credit_card_cut_in_half_with_scissors_001_32836.mp3"
      ),
      new Sound("Drum Roll", "./Tatiana/sounds/Drum Roll.wav"),
      new Sound("Win", "./Tatiana/sounds/Win.wav"),
      new Sound("Dun Dun Dunnn", "./Tatiana/sounds/Dun Dun Dunnn.wav"),
      new Sound("Bonk", "./Tatiana/sounds/Bonk.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "comp paper" },
        this.whenIReceiveCompPaper
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "comp rock" },
        this.whenIReceiveCompRock
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "comp scissors" },
        this.whenIReceiveCompScissors
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveCompPaper() {
    yield* this.wait(3);
    yield* this.sayAndWait("The outcome is...", 3);
    yield* this.playSoundUntilDone("Drum Roll");
    this.sprites["Trisha"].createClone();
    if (this.stringIncludes(this.answer, "p")) {
      yield* this.playSoundUntilDone("Bonk");
      yield* this.sayAndWait("its a tie", 2);
      this.stage.vars.tie++;
    }
    if (this.stringIncludes(this.answer, "r")) {
      yield* this.playSoundUntilDone("Dun Dun Dunnn");
      yield* this.sayAndWait("The computer wins!", 2);
      this.stage.vars.computerWins++;
    }
    if (this.stringIncludes(this.answer, "s")) {
      this.stage.vars.yourWins++;
      yield* this.playSoundUntilDone("Win");
      yield* this.sayAndWait("You win!", 2);
    }
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveCompRock() {
    yield* this.wait(3);
    yield* this.sayAndWait("The outcome is...", 3);
    yield* this.playSoundUntilDone("Drum Roll");
    this.sprites["Trisha"].createClone();
    if (this.stringIncludes(this.answer, "p")) {
      this.stage.vars.yourWins++;
      yield* this.playSoundUntilDone("Win");
      yield* this.sayAndWait("You win!", 2);
    }
    if (this.stringIncludes(this.answer, "r")) {
      yield* this.playSoundUntilDone("Bonk");
      yield* this.sayAndWait("Its a tie", 2);
      this.stage.vars.tie++;
    }
    if (this.stringIncludes(this.answer, "s")) {
      yield* this.playSoundUntilDone("Dun Dun Dunnn");
      yield* this.sayAndWait("The computer wins!", 2);
      this.stage.vars.computerWins++;
    }
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveCompScissors() {
    yield* this.wait(3);
    yield* this.sayAndWait("The outcome is...", 3);
    yield* this.playSoundUntilDone("Drum Roll");
    this.sprites["Trisha"].createClone();
    if (this.stringIncludes(this.answer, "p")) {
      yield* this.playSoundUntilDone("Dun Dun Dunnn");
      this.stage.vars.computerWins++;
      yield* this.sayAndWait("The computer wins!", 2);
    }
    if (this.stringIncludes(this.answer, "s")) {
      yield* this.playSoundUntilDone("Bonk");
      yield* this.sayAndWait("its a tie", 2);
      this.stage.vars.tie++;
    }
    if (this.stringIncludes(this.answer, "r")) {
      this.stage.vars.yourWins++;
      yield* this.playSoundUntilDone("Win");
      yield* this.sayAndWait("You win!", 2);
    }
    /* TODO: Implement stop all */ null;
  }

  *outcome(outcome, tie, computer, you) {
    this.stage.vars.computerWins = 0;
    this.stage.vars.tie = 0;
    this.stage.vars.yourWins = 0;
  }

  *whenGreenFlagClicked() {
    yield* this.sayAndWait("I am the judge", 5);
  }
}
