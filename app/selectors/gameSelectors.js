export const gameSelector = state => state.game;
export const gameNameSelector = state => state.game.result.name;
export const gameTasksSelector = state => state.game.entities.tasks;
export const gameIdSelector = state => state.game.result.gameId;
