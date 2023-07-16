import React, { useState } from 'react';

function ImageUpload({h,w,corner}) {
  const [image, setImage] = useState(null);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className=
        {`relative h-${h?h:'40'}  w-${w?w:'40'}  ${corner?corner:'rounded-full'} border-2 border-dashed border-gray-400 flex justify-center items-center cursor-pointer`}
        onClick={() => document.getElementById('imageInput').click()}
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded Image"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-gray-400">
            <svg
              className="w-12 h-12 mb-2 stroke-current stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 15l-5.84-5.84A5 5 0 1 0 15 9.83L20 14v1H4v-1l5-5L5.84 4.84A5 5 0 1 0 9.83 9L4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5z" />
            </svg>
            <span className="text-sm">Click to select image</span>
          </div>
        )}
      </div>
      <input
        id="imageInput"
        type="file"
        className="hidden"
        onChange={onImageChange}
      />
    </div>
  );
}

export default ImageUpload;
