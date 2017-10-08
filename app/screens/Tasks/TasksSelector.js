import { createSelector } from 'reselect';
import { values } from 'ramda';
import { gameTasksSelector } from '../../selectors/gameSelectors';

export default createSelector(
  gameTasksSelector, (
    tasks,
   ) => ({
    tasks: values(tasks),
  }),
);
