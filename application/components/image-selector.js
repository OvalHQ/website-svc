import React from 'react';

const ImageSelector = ({ onChange, isActive, image, label }) => {
  return (
    <div className="text-center cursor-pointer" onClick={onChange}>
      <div
        className={`mb-4 ${
          isActive ? 'border-primary' : 'border-gray-100 '
        } hover:shadow border rounded p-2 flex justify-center items-center`}
      >
        {image}
      </div>
      <p className="text-gray-400 max-w-xs">{label}</p>
    </div>
  );
};

export default ImageSelector;
