import { createSelector } from 'reselect';
import { path } from 'ramda';

import { gameTasksSelector } from '../../selectors/gameSelectors';
import { currentlyActive } from '../../selectors/taskSelectors';

export default createSelector(
  gameTasksSelector,
  currentlyActive, (
    tasks,
    current,
  ) => ({
    task: path([current], tasks),
  }),
);
