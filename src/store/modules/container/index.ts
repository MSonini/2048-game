import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  APPEARENCE_TYPES,
  type IContainer,
  type IField,
  type ITile,
} from '../../types/types';
import { move } from '../../utils/move';
import { getRandomTileValue } from '../../utils/addRandomElements';

export const getInitialField = () => {
  const field: IField = [];
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      const id = nanoid();
      const value = getRandomTileValue();
      // const value = Math.round(Math.random()) * 2;
      row.push({
        id,
        row: i,
        column: j,
        zIndex: 2,
        value,
        prevValue: value,
        appearence: APPEARENCE_TYPES.NEW,
      } as ITile);
    }
    field.push(row);
  }
  return field;
};

const initialField = getInitialField();

const initialState: IContainer = {
  rows: 4,
  columns: 4,
  field: initialField,
  score: 0,
  isGameOver: false,
  isMoving: false,
};

const containerSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {
    moveStart(state, { payload: { type } }) {
      state.field.forEach((rows) =>
        rows.forEach((el) => {
          el.appearence = APPEARENCE_TYPES.NOT_CHANGED;
        }),
      );
      move(state, type);
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.field[i][j].value === 0) {
            state.field[i][j].appearence = APPEARENCE_TYPES.NEW;
            state.field[i][j].value = getRandomTileValue();
          }
        }
      }
    },
    moveEndStartMerge(state, { payload: { id } }) {
      state.field.forEach((rows) =>
        rows.forEach((el) => {
          if (el.id === id && el.prevValue !== el.value) {
            el.prevValue = el.value;
            el.appearence = APPEARENCE_TYPES.MERGED;
            el.id = nanoid();
          }
        }),
      );
    },
    startNewGame(state) {
      state.field = getInitialField();
    },
  },
});

export const containerActions = containerSlice.actions;
export const containerReducer = containerSlice.reducer;
