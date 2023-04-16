import { nanoid } from 'nanoid';
import { APPEARENCE_TYPES, ITile } from '../types/types';

export const swapTiles = (first: ITile, second: ITile, addNew = false) => {
  const { row: fRow, column: fCol, value: fValue } = first;
  const { row: sRow, column: sCol, value: sValue } = second;
  first = {
    ...first,
    row: sRow,
    column: sCol,
    value: sValue,
  };
  if (addNew) {
    second = {
      id: nanoid(),
      row: fRow,
      column: fCol,
      value: fValue,
      prevValue: 0,
      zIndex: 2,
      appearence: APPEARENCE_TYPES.NOT_CHANGED,
    };
  } else {
    second = { ...second, row: fRow, column: fCol };
  }
  return [first, second];
};
