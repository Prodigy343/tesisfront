import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const List = () => {
  const history = useHistory();

  const addAction = () => {
    history.push('/event-type-create');
  }

  return (
    <div className={cx("table-fix", "no-box-shadow")}>
      <div className={cx("head-section")}>
        <div className={cx("head-head")}>Lista de Tipos de Eventos</div>
        <div className={cx("options")}>
          <Button variant="contained" onClick={addAction}>Crear</Button>
        </div>
      </div>
    </div>
  );
}