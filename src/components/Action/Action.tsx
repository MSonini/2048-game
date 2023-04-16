import { useAppDispatch } from '../../store/hooks/hooks';
import { containerActions } from '../../store/modules/container';
import { MoveTypes } from '../../types/types';
import styles from './styles.module.css';

interface ActionProps {
  type: MoveTypes;
}

export const Action: React.FC<ActionProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.root}
      onClick={(e) => {
        dispatch(containerActions.moveStart({ type }));
      }}
    >
      {type}
    </button>
  );
};
