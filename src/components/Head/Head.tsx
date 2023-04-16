import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { containerActions } from '../../store/modules/container';
import { selectContainerScore } from '../../store/modules/container/selectors';
import styles from './styles.module.css';

export const Head = () => {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectContainerScore);
  return (
    <div className={styles.root}>
      <div className={styles.score}>Current score: {score}</div>
      <button
        className={styles.reset}
        onClick={() => {
          dispatch(containerActions.startNewGame());
        }}
      >
        New Game
      </button>
    </div>
  );
};
