import style from './ErrorMessage.module.css';
export const ErrorMessage = ({ data }) => {
 
  return <p className={style.errorText}>{data}</p>
};
