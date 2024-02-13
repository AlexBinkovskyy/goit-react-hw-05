import { createPosterPath } from '../../apiService/query';
import css from './MovieReviewItem.module.css';

export const MovieReviewItem = ({ movieReview }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    movieReview.results > 0 ?
    (<div className={css.wrapper}>
      <ul className={css.list}>
        {movieReview.results.map(review => (
          <li key={review.id} className={css.listItem}>
            <div className={css.authorWrapp}>
                {review.author_details.avatar_path ? (
                  <img
                    src={createPosterPath(review.author_details.avatar_path)}
                    alt="author_avatar"
                    className={css.img}
                  />
                ) : (
                  <img src={defaultImg} alt="author_avatar" className={css.img}/>
                )}
                <h4 className={css.h4}> Author: <br /><span className={css.author}>{review.author}</span></h4>
            </div>
            <p className={css.p}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>) : <p className={css.emptyreview}>There are no any reviews to display yet ...</p>
  );
};
