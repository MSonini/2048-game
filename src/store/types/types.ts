export enum APPEARENCE_TYPES {
  NEW,
  MERGED,
  NOT_CHANGED,
}

export interface ITile {
  id: string;
  row: number;
  column: number;
  zIndex: number;
  value: number;
  prevValue: number;
  appearence: APPEARENCE_TYPES;
}

export type IField = ITile[][];

export interface IContainer {
  rows: number;
  columns: number;
  field: IField;
  score: number;
  isGameOver: boolean;
  isMoving: boolean;
}
