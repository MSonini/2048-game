import { MoveTypes } from '../../types/types';
import { IContainer, IField } from '../types/types';
import { swapTiles } from './swapTiles';

export const move = (state: IContainer, type: MoveTypes) => {
  switch (type) {
    case MoveTypes.right:
      moveRight(state);
      break;
    case MoveTypes.left:
      moveLeft(state);
      break;
    case MoveTypes.down:
      moveDown(state);
      break;
    case MoveTypes.up:
      moveUp(state);
      break;
  }
};

export const compareAndSwapHorizontal = (
  field: IField,
  r: number,
  c: number,
  colStart: number,
  operation: -1 | 1,
  score: number,
) => {
  const now = field[r][c];
  const start = field[r][colStart];
  if ((now.value !== 0 && start.value === 0) || now.value === start.value) {
    start.value += now.value;
    if (now.value !== 0 && start.value !== 0) score += start.value;
    now.value = 0;
    [field[r][colStart], field[r][c]] = swapTiles(now, start, true);
  } else if (now.value !== start.value && now.value !== 0) {
    colStart += operation;
    const newStart = field[r][colStart];
    if (
      colStart !== c &&
      (newStart.value === 0 || now.value === newStart.value)
    ) {
      newStart.value += now.value;
      if (now.value !== 0 && newStart.value !== 0) score += newStart.value;
      now.value = 0;
      [field[r][colStart], field[r][c]] = swapTiles(now, newStart, true);
    }
  }
  return [score, colStart];
};

export const compareAndSwapVertical = (
  field: IField,
  r: number,
  c: number,
  rowStart: number,
  operation: -1 | 1,
  score: number,
) => {
  const now = field[r][c];
  const start = field[rowStart][c];
  if ((now.value !== 0 && start.value === 0) || now.value === start.value) {
    start.value += now.value;
    if (now.value !== 0 && start.value !== 0) score += start.value;
    now.value = 0;
    [field[rowStart][c], field[r][c]] = swapTiles(now, start, true);
  } else if (now.value !== start.value && now.value !== 0) {
    rowStart += operation;
    const newStart = field[rowStart][c];
    if (
      rowStart !== r &&
      (newStart.value === 0 || now.value === newStart.value)
    ) {
      newStart.value += now.value;
      if (now.value !== 0 && newStart.value !== 0) score += newStart.value;
      now.value = 0;
      [field[rowStart][c], field[r][c]] = swapTiles(now, newStart, true);
    }
  }
  return [score, rowStart];
};

export const moveRight = (state: IContainer) => {
  const { rows, columns, field } = state;
  let { score } = state;
  for (let r = 0; r < rows; r++) {
    let start = columns - 1;
    for (let c = columns - 2; c >= 0; c--) {
      [score, start] = compareAndSwapHorizontal(field, r, c, start, -1, score);
    }
  }
  state.score = score;
};

export const moveLeft = (state: IContainer) => {
  const { rows, columns, field } = state;
  let { score } = state;
  for (let r = 0; r < rows; r++) {
    let start = 0;
    for (let c = 1; c < columns; c++) {
      [score, start] = compareAndSwapHorizontal(field, r, c, start, 1, score);
    }
  }
  state.score = score;
};

export const moveDown = (state: IContainer) => {
  const { rows, columns, field } = state;
  let { score } = state;
  for (let c = 0; c < columns; c++) {
    let start = rows - 1;
    for (let r = rows - 2; r >= 0; r--) {
      [score, start] = compareAndSwapVertical(field, r, c, start, -1, score);
    }
  }
  state.score = score;
};

export const moveUp = (state: IContainer) => {
  const { rows, columns, field } = state;
  let { score } = state;
  for (let c = 0; c < columns; c++) {
    let start = 0;
    for (let r = 1; r < rows; r++) {
      [score, start] = compareAndSwapVertical(field, r, c, start, 1, score);
    }
  }
  state.score = score;
};
