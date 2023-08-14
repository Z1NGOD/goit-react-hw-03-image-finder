import React from 'react';
import { Img, Li } from './ImageGalleryItem.styled';
function ImageGalleryItem({ id, webformatURL, tags, value, openModal }) {
  return (
    <Li key={id} onClick={() => openModal(value)}>
      <Img id={id} src={webformatURL} tags={tags} />
    </Li>
  );
}


export default ImageGalleryItem;
