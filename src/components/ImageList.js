import React from 'react';

const ImageList = ({ images }) => {
  console.log(images);
  return (
    <div>
      {images.map(image => {
        return <img src={image.urls.regular} alt="images" key={image.id} />;
      })}
    </div>
  );
};

export default ImageList;
