import Team, { Character } from '../../index';

test('character added', () => {
  const bowman = new Character('Legolas');
  const brotherhood = new Team();
  brotherhood.add(bowman);
  const result = new Team();
  result.members.add(bowman);
  expect(brotherhood).toEqual(result);
});

test('character added twice', () => {
  const bowman = new Character('Legolas');
  const brotherhood = new Team();
  brotherhood.add(bowman);
  brotherhood.add(bowman);
  expect(brotherhood.add(bowman)).toEqual(Error('Персонаж уже добавлен в команду'));
});

test('all characters added', () => {
  const bowman = new Character('Legolas');
  const ranger = new Character('Aragorn');
  const thief = new Character('Frodo');
  const wizard = new Character('Gendalf');
  const warrior = new Character('Gimli');

  const brotherhood = new Team();
  brotherhood.addAll(bowman, ranger, thief, wizard, warrior);
  const result = new Team();
  result.members.add(bowman);
  result.members.add(ranger);
  result.members.add(thief);
  result.members.add(wizard);
  result.members.add(warrior);
  expect(brotherhood).toEqual(result);
});

test('all characters added with doubles', () => {
  const bowman = new Character('Legolas');
  const ranger = new Character('Aragorn');
  const thief = new Character('Frodo');
  const wizard = new Character('Gendalf');
  const warrior = new Character('Gimli');

  const brotherhood = new Team();
  brotherhood.addAll(thief, bowman, ranger, thief, wizard, warrior);
  const result = new Team();
  result.members.add(thief);
  result.members.add(bowman);
  result.members.add(ranger);
  result.members.add(wizard);
  result.members.add(warrior);
  expect(brotherhood).toEqual(result);
});

test('return array of members', () => {
  const bowman = new Character('Legolas');
  const ranger = new Character('Aragorn');
  const thief = new Character('Frodo');
  const wizard = new Character('Gendalf');
  const warrior = new Character('Gimli');

  const brotherhood = new Team();
  brotherhood.addAll(thief, bowman, ranger, wizard, warrior);
  const result = [];
  result.push(thief);
  result.push(bowman);
  result.push(ranger);
  result.push(wizard);
  result.push(warrior);
  expect(brotherhood.toArray()).toEqual(result);
});
