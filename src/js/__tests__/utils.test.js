import { calcTileType } from '../utils';

test('function calcTileType works correctly', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
  expect(calcTileType(5, 8)).toBe('top');
  expect(calcTileType(7, 8)).toBe('top-right');
  expect(calcTileType(32, 8)).toBe('left');
  expect(calcTileType(11, 8)).toBe('center');
  expect(calcTileType(55, 8)).toBe('right');
  expect(calcTileType(56, 8)).toBe('bottom-left');
  expect(calcTileType(60, 8)).toBe('bottom');
  expect(calcTileType(63, 8)).toBe('bottom-right');
});
