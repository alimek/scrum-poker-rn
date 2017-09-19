import { schema } from 'normalizr';

const player = new schema.Entity('players');
const task = new schema.Entity('tasks');

export const gameSchema = {
  players: [player],
  tasks: [task],
};
