// @flow
import { createSelector } from 'reselect';
import { Maybe } from 'ramda-fantasy';
import { prop } from 'ramda';
import { gameTasksSelector } from '../../selectors/gameSelectors';
import { currentlyActive } from '../../selectors/taskSelectors';

const getCurrentTask = (task: string, tasks: Object): Maybe => Maybe(prop(task, tasks));

export default createSelector(
  gameTasksSelector,
  currentlyActive, (
    tasks,
    activeTask,
  ) => ({
    ...getCurrentTask(activeTask, tasks).value,
  }),
);
