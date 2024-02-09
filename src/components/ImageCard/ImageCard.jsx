import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import style from './ImageCard.module.css'

export const ImageCard = ({ small, alt, regular }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={style.wrapper}>
      <img src={small} alt={alt} onClick={openModal} className={style.image}/>
      {modalIsOpen && <ImageModal alt={alt} regular={regular} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}/>}
    </div>
  );
};
