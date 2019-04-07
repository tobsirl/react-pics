import React from 'react';

import ImageCard from '../ImageCard/ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
  const ImageList = images.map(image => {
    return (
      <div key={image.id}>
        <ImageCard image={image} />
      </div>
    );
  });
  return <div className="image-list">{ImageList}</div>;
};

export default ImageList;
