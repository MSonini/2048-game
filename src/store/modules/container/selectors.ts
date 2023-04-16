import { type RootState } from '../..';

export const selectContainerModule = (state: RootState) => state.container;

export const selectContainerField = (state: RootState) =>
  selectContainerModule(state).field;

export const selectFieldSize = (state: RootState) => {
  const field = selectContainerField(state);
  return [field.length, field[0].length];
};

export const selectTileArray = (state: RootState) =>
  selectContainerField(state).reduce((acc, elem) => {
    acc.push(...elem);
    return acc;
  }, []);

export const selectContainerScore = (state: RootState) =>
  selectContainerModule(state).score;

export const selectTileById = (state: RootState, { id }: { id: string }) =>
  selectTileArray(state).find((elem) => elem.id === id);

export const selectTilesIsMoving = (state: RootState) =>
  selectContainerModule(state).isMoving;
