import { schema } from 'normalizr';

const player = new schema.Entity('players');
const vote = new schema.Entity('votes', {
  player,
}, {
  idAttribute: (input, parent) => `${input.player.guid}${parent.id}`,
});

const task = new schema.Entity('tasks', {
  votes: [vote],
});

export const gameSchema = {
  players: [player],
  tasks: [task],
};
