abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}
class MeeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this._name}. I can attack from a long range. `);
  }

  specialMove(): void {
    console.log(this._specialMoveName);
  }
}

function talkCharacter(character: Character) {
  character.talk();
  character.specialMove();
}

const mario = new MeeleeCharacter('Mario', 'Mega Punch!');
const luigi = new LongRangeCharacter('Luigi', 'Low kick!');

talkCharacter(mario);
talkCharacter(luigi);
