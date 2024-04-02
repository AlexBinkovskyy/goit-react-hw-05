import { useEffect, useState } from 'react';
import { fetchData, fetchParams } from '../../apiService/query';
import css from './Movieslist.module.css';
import { Page404 } from '../../pages/Page404/Page404';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import axios from 'axios';
import { Spinner } from '../Spinner/Spinner';
import { LoadMore } from '../LoadMore/LoadMore';

export const Movieslist = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchList() {
      try {
        setIsLoading(true);
        const resp = await fetchData(
          `${fetchParams.trending.url}?page=${page}`,
          controller.signal
        );
        setTrends(prevState => ({
          ...prevState,
          page: resp.page,
          results: Array.isArray(prevState.results)
            ? [...prevState.results, ...resp.results]
            : [...resp.results],
          total_pages: resp.total_pages,
          total_results: resp.total_results,
        }));
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
          return;
        } else {
          setError(true);
        }
      }
    }
    fetchList();
    return () => {
      controller.abort();
    };
  }, [page]);

  return (
    <>
      {!isLoading ? (
        <>
          <div className={css.wrapper}>
            <h3>Actual trending movie:</h3>
            {error ? (
              <Page404 />
            ) : (
              trends.results && (
                <div>
                  <ul className={css.list}>
                    <MovieListItem movies={trends} />
                  </ul>
                </div>
              )
            )}
            <LoadMore setPage={setPage} />
          </div>
          <div id="target"></div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

// export const Movieslist = () => {
//   const [trends, setTrends] = useState([]);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   const loadMore = async entries => {
//     const nextPage = page + 1;
//     try {
//       if (entries[0].isIntersecting) {
//         setIsLoading(true);
//         const resp = await fetchData(
//           `${fetchParams.trending.url}?page=${nextPage}`
//         );
//         setTrends(prevState => ({
//           ...prevState,
//           page: resp.page,
//           results: [...prevState.results, ...resp.results],
//           total_pages: resp.total_pages,
//           total_results: resp.total_results,
//         }));
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const target = document.querySelector('#target');
//     if (target) {
//       const observer = new IntersectionObserver(loadMore, {
//         rootMargin: '150px',
//         threshold: 1.0,
//       });
//       observer.observe(target);
//       setPage(page => (page += 1));
//       return () => {
//         observer.unobserve(target);
//       };
//     }
//   }, [page]);

//   useEffect(() => {
//     async function fetchList() {
//       try {
//         setIsLoading(true);
//         const resp = await fetchData(
//           `${fetchParams.trending.url}?page=${page}`
//         );
//         setTrends(resp);
//         setIsLoading(false);
//       } catch (error) {
//         if (axios.isCancel(error)) {
//           console.log('Request canceled', error.message);
//           return;
//         } else {
//           setError(true);
//         }
//       }
//     }
//     fetchList();
//   }, []);

//   return (
//     <>
//       {!isLoading ? (
//         <>
//           <div className={css.wrapper}>
//             <h3>Actual trending movie:</h3>
//             {error ? (
//               <Page404 />
//             ) : (
//               trends.results && (
//                 <div>
//                   <ul className={css.list}>
//                     <MovieListItem movies={trends} />
//                   </ul>
//                 </div>
//               )
//             )}
//           </div>
//           <div id="target"></div>
//         </>
//       ) : (
//         <Spinner />
//       )}
//     </>
//   );
// };
