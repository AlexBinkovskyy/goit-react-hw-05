import { createPosterPath } from "../../apiService/query";

export const MovieCastItem = ({ movieCast }) => {
    const defaultImg =
      'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  
      return (
        <ul>
          {movieCast.cast.map(mcast => (
            <li key={mcast.id}>
              {mcast.profile_path !== null ? (
                <img
                  src={createPosterPath(mcast.profile_path)}
                  alt={mcast.character}
                  width="80px"
                />
              ) : (
                <img src={defaultImg} alt={mcast.character} width="80px" />
              )}
              <h5>
                Character name: <span>{mcast.character}</span>
              </h5>
              <h6>
                Popularity: <span>{mcast.popularity}</span>
              </h6>
            </li>
          ))}
        </ul>
      );
    };