// @flow
import { createSelector } from 'reselect';
import { prop, compose, curry, path } from 'ramda';
import { Maybe } from 'ramda-fantasy';

import { gameTasksSelector } from '../../selectors/gameSelectors';
import { currentlyActive } from '../../selectors/taskSelectors';
import { votesSelector } from '../../selectors/voteSelector';

import type { Task } from '../../types/task';

const getCurrentTask = (task: string, tasks: Object): Maybe => Maybe(prop(task, tasks));

const loggit = x => {
  console.log(x)
  return x;
}

const countScore = (currentTask, votes) => {
  // const taskVotes = currentTask.map(task =>
  //   task.votes).reduce((x, y) => , 0);

  console.log(currentTask, votes);
  return 123908;
}

const getProp = (propName: string) => (task: Task): Maybe => Maybe(prop(propName, task));

const chain = (val: Maybe) => val.chain(x => x);

const equals = (expected: string) => (maybe: Maybe): boolean => maybe.equals(Maybe.of(expected));

const isFlipped = compose(
  equals('flipped'),
  getProp('status'),
  chain,
);

const getTotalScore = (currentTask: Maybe, votes: Object): Object => ({
  totalScore: isFlipped(currentTask)
    ? countScore(currentTask, votes)
    : null,
});


export default createSelector(
  gameTasksSelector,
  currentlyActive,
  votesSelector, (
    tasks,
    activeTask,
    votes,
  ) => {
    const currentTask = getCurrentTask(activeTask, tasks);
    const totalScore = getTotalScore(currentTask, votes);

    return currentTask.isJust && {
      ...currentTask.value,
      ...totalScore,
    };
  },
);
