import React from 'react';
import { ImageGalleryUl } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  
  render() {
    const { images, openModal} = this.props;
    return (
      <ImageGalleryUl>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            tags={tags}
            value={largeImageURL}
            openModal={openModal}
          />
        ))}
      </ImageGalleryUl>
    );
  }
}

export default ImageGallery;
