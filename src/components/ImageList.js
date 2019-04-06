import React from 'react';

const ImageList = ({ images }) => {
  console.log(images);
  return (
    <div>
      {images.map(({ id, urls, description, alt_description }) => {
        return (
          <div key={id}>
            <h1>{alt_description}</h1>
            <img src={urls.regular} alt={description} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
