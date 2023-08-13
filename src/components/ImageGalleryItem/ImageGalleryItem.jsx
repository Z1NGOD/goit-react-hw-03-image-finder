import React from 'react';
import { Img, Li } from './ImageGalleryItem.styled';
function ImageGalleryItem({ id, webformatURL, tags }) {
  return (
    <Li key={id}>
      <Img id={id} src={webformatURL} tags={tags} />
    </Li>
  );
}

export default ImageGalleryItem;
