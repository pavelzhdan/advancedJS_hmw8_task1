/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(characterName) {
    if (this.members.has(characterName)) {
      return Error('Персонаж уже добавлен в команду');
    } else {
      this.members.add(characterName);
    }
  }

  addAll(...rest) {
    const characterArray = [...rest];
    characterArray.forEach((element) => {
      if (this.members.has(element)) {
        return;
      }
      this.members.add(element);
    });
  }

  toArray() {
    return [...this.members];
  }
}


export class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}

const bowman = new Character('Legolas');
const ranger = new Character('Aragorn');
const thief = new Character('Frodo');
const wizard = new Character('Gendalf');
const warrior = new Character('Gimli');
