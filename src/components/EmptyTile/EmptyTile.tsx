import classNames from 'classnames';
import styles from './styles.module.css';

interface EmptyTileProps {
  row: number;
  column: number;
}

const getPositionStyleFromIndex = (row: number, column: number) => {
  return { top: `${5 + 110 * row}px`, left: `${5 + 110 * column}px` };
};

export const EmptyTile: React.FC<EmptyTileProps> = ({ row, column }) => {
  const position = getPositionStyleFromIndex(row, column);
  const style = {
    ...position,
    zIndex: 1,
  };
  return <div className={classNames(styles.root)} style={style}></div>;
};
