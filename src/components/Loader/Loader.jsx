import style from './Loader.module.css';
import { Oval } from 'react-loader-spinner';

export const Loader = ({ visible }) => {
  return (
    <div className={style.backdrop}>
      <Oval
        visible={visible}
        height="40"
        width="40"
        color="#327bce"
        secondaryColor="#154f92"
        ariaLabel="oval-loading"
      />
    </div>
  );
};
