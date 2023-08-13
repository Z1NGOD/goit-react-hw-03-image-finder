import React from 'react';
import { ImageGalleryUl } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  console.log(images);
  return (
    <ImageGalleryUl>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          tags={tags}
        />
      ))}
    </ImageGalleryUl>
  );
}

export default ImageGallery;
