import { useEffect, useRef, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchQuery } from '../apiService/query';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { MagnifyingGlass } from 'react-loader-spinner';

export const App = () => {
  const [queryString, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const errorText = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    const input = event.target.elements[0].value;
    if (!input.trim()) {
      return toast.error('Please, fill input field for search!');
    }
    setPage(1);
    setQuery(`${Date.now()}/${input}`);
    setImages([]);
    setIsVisible(false);
    setIsError(false);
    errorText.current = null;
  };

  useEffect(() => {
    if (!queryString) return;
    setIsVisible(true);
    fetchQuery(queryString, page)
      .then(response => {
        const { results, total_pages } = response;
        setTotalPage(total_pages);
        results.length > 0
          ? setImages(prev => [...prev, ...results])
          : (setIsError(true),
            (errorText.current = 'By your query there is nothing to show...'));
      })
      .catch(() => {
        setIsError(true);
        errorText.current =
          'Something went wrong... Try to reload page or contact your provider';
      })
      .finally(() => setIsVisible(false));
  }, [queryString, page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-right" reverseOrder={true} />
      {!isError ? (
        <>
          <ImageGallery images={images} />
          {images.length > 0 &&
            page < totalPage &&
            (isVisible ? (
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperClass="loaderMag"
                glassColor="#c0efff"
                color="#3d68f7"
              />
            ) : (
              <LoadMoreBtn onClick={handleClick} />
            ))}
        </>
      ) : (
        <ErrorMessage data={errorText.current} />
      )}
      {isVisible && <Loader visible={isVisible} />}
    </div>
  );
};