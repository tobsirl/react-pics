import React from 'react';

import './ImageList.css';

const ImageList = ({ images }) => {
  const ImageList = images.map(({ id, urls, description, alt_description }) => {
    return (
      <div key={id}>
        <img src={urls.regular} alt={alt_description} />
      </div>
    );
  });
  return <div className="image-list">{ImageList}</div>;
};

export default ImageList;
