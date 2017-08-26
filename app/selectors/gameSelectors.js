import { createSelector } from 'reselect';

export const gameSelector = state => state.game;

export const gameResultSelector = createSelector(
  gameSelector,
  game => game.result,
);
