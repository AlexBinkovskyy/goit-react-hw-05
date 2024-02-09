import style from './LoadMoreBtn.module.css'

export const LoadMoreBtn = ({onClick}) => {
    return <button type="submit" onClick={onClick} className={style.button}>Load more images</button>
};
