import uuidv1 from 'uuid/v1';
import { schema } from 'normalizr';

const player = new schema.Entity('players');
const vote = new schema.Entity('votes', {
  player,
}, {
  idAttribute: () => uuidv1(),
});

const task = new schema.Entity('tasks', {
  votes: [vote],
});

export const gameSchema = {
  players: [player],
  tasks: [task],
};
