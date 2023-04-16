import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { containerActions } from '../../store/modules/container';
import { MoveTypes } from '../../types/types';
import { Action } from '../Action/Action';
import { useKeyPress } from '../hooks/useKeyPress';
import styles from './styles.module.css';

export const Actions = () => {
  const dispatch = useAppDispatch();
  const wPressed = useKeyPress('w');
  const aPressed = useKeyPress('a');
  const sPressed = useKeyPress('s');
  const dPressed = useKeyPress('d');
  const upPressed = useKeyPress('ArrowUp');
  const leftPressed = useKeyPress('ArrowLeft');
  const downPressed = useKeyPress('ArrowDown');
  const rightPressed = useKeyPress('ArrowRight');

  useEffect(() => {
    if (wPressed || upPressed) {
      dispatch(containerActions.moveStart({ type: MoveTypes.up }));
    } else if (aPressed || leftPressed) {
      dispatch(containerActions.moveStart({ type: MoveTypes.left }));
    } else if (sPressed || downPressed) {
      dispatch(containerActions.moveStart({ type: MoveTypes.down }));
    } else if (dPressed || rightPressed) {
      dispatch(containerActions.moveStart({ type: MoveTypes.right }));
    }
  }, [
    wPressed,
    aPressed,
    sPressed,
    dPressed,
    upPressed,
    leftPressed,
    downPressed,
    rightPressed,
  ]);
  return (
    <div className={styles.root}>
      <Action type={MoveTypes.left} />
      <Action type={MoveTypes.right} />
      <Action type={MoveTypes.up} />
      <Action type={MoveTypes.down} />
    </div>
  );
};
