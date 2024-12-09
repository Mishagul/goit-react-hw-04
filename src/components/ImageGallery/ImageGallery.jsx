import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {
    return (
      <ul className={styles.photolist}>
        {images.map((image) => (
          <li className={styles.photoListItem} key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} /> 
          </li>
        ))}
      </ul>
    );
  };
  
  export default ImageGallery;