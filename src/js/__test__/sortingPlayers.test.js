import { test, expect } from "@jest/globals";
import sortingPlayers from "../sortingPlayers";

test('Testing sortingPlayers function with an empty value', () => {
  expect(sortingPlayers()).toBe(null);
});

test('Testing sortingPlayers function', () => {
  const result = sortingPlayers([
    {name: 'мечник', health: 15},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 85},
  ]);

  expect(result).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 85},
    {name: 'мечник', health: 15},
  ]);
});


