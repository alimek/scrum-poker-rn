// @flow

export type Game = {
  id: string,
  name: string,
  status: string,
  current_task_id: string,
  tasks: Array<string>,
  players: Array<string>,
};
