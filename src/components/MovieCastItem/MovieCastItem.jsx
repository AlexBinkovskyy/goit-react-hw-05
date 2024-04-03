import { createPosterPath } from '../../apiService/query';
import css from './MovieCastItem.module.css';

export const MovieCastItem = ({ movieCast }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {movieCast.cast.map(mcast => (
          <li key={mcast.id} className={css.listItem}>
            {mcast.profile_path !== null ? (
              <img
                src={createPosterPath(mcast.profile_path)}
                alt={mcast.character}
                width="80px"
                className={css.img}
              />
            ) : (
              <img
                src={defaultImg}
                alt={mcast.character}
                width="80px"
                className={css.img}
              />
            )}
            <h5 className={css.h5}>
              Character name: <br />
              <span className={css.span}>
                {mcast.character ? (
                  mcast.character
                ) : (
                  <span className={css.charSpan}>unfilled character</span>
                )}
              </span>
            </h5>
            <h6 className={css.h6}>
              Original name: <br />{' '}
              <span className={css.span}>{mcast.original_name}</span>
            </h6>
            <p className={css.p}>
              Popularity: <span className={css.span}>{mcast.popularity}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
