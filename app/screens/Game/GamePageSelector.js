import { createSelector } from 'reselect';
import { gameSelector } from '../../selectors/gameSelectors';

export default createSelector(
  gameSelector, (
  game,
  ) => ({
    game,
  }),
);
