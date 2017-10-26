export const TASK_SET = 'TASK_SET';

export const taskSetActive = currentlyActive => ({
  type: TASK_SET,
  currentlyActive,
});
