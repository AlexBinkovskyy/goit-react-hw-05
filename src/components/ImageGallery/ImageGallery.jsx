import { ImageCard } from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={style.list}>
      {images.map(image => {
        const { small, regular, alt_description: alt } = image.urls;
        return (
          <li key={image.id} className={style.listItem}>
            <ImageCard small={small} alt={alt} regular={regular} />
          </li>
        );
      })}
    </ul>
  );
};
