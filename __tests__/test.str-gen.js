import make from '../str-gen.js';

test('make', () => {
  const gen = make('A');
  expect(gen()).toBe('A_1');
  expect(gen()).toBe('A_2');
  expect(gen()).toBe('A_3');
});