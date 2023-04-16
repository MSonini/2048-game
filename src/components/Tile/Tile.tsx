import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { containerActions } from '../../store/modules/container';
import { APPEARENCE_TYPES, ITile } from '../../store/types/types';
import styles from './styles.module.css';
import { selectTileById } from '../../store/modules/container/selectors';

interface TileProps {
  id: string;
}

const getPositionStyleFromIndex = (row: number, column: number) => {
  return { top: `${5 + 110 * row}px`, left: `${5 + 110 * column}px` };
};

export const Tile: React.FC<TileProps> = ({ id }) => {
  const tile = useAppSelector((state) =>
    selectTileById(state, { id }),
  ) as ITile;
  const dispatch = useAppDispatch();

  const { row, column, value, zIndex } = tile;
  const position = getPositionStyleFromIndex(row, column);
  const style = {
    ...position,
    zIndex,
  };

  function getStyle() {
    if (tile.appearence === APPEARENCE_TYPES.NEW) {
      return styles.new;
    }
    if (tile.appearence === APPEARENCE_TYPES.MERGED) {
      return styles.merged;
    }
    return '';
  }

  return (
    <div
      className={classNames(styles.root, getStyle())}
      data-value={value}
      style={style}
      id={id}
      onTransitionEnd={() => {
        dispatch(containerActions.moveEndStartMerge({ id }));
      }}
    >
      {!value || <span className={styles.value}>{value}</span>}
    </div>
  );
};
