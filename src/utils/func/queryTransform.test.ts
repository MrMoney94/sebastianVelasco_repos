import {serialize} from './queryTransform';

test('Query must be return a string converted in object', () => {
  expect(
    serialize('https://pokeapi.co/api/v2/pokemon?offset=10&limit=10'),
  ).toEqual({
    limit: '10',
    offset: '10',
  });
});
