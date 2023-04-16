import styles from './styles.module.css';
import { GameField } from '../GameField/GameField';
import { Actions } from '../Actions/Actions';
import { Head } from '../Head/Head';

export const Container = () => {
  return (
    <div className={styles.root}>
      <Head />
      <GameField />
      <Actions />
    </div>
  );
};
