import { useAppSelector } from '../../store/hooks/hooks';
import {
  selectContainerField,
  selectTileArray,
} from '../../store/modules/container/selectors';
import { Tile } from '../Tile/Tile';
import styles from './styles.module.css';
import { EmptyTile } from '../EmptyTile/EmptyTile';

export const GameField = () => {
  const blocks = useAppSelector(selectTileArray);
  const field = useAppSelector(selectContainerField);

  return (
    <div className={styles.root}>
      {blocks.map(({ id, value }) =>
        value ? <Tile key={id} id={id} /> : null,
      )}
      {field.map((rowArr, rowInd) =>
        rowArr.map((el, colInd) => (
          <EmptyTile key={`${rowInd}-${colInd}`} row={rowInd} column={colInd} />
        )),
      )}
    </div>
  );
};
