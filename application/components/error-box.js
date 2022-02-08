import React from 'react';

const ErrorBox = ({ errorMessage, setErrorMessage }) => {
  return (
    !!errorMessage && (
      <div
        onClick={() => setErrorMessage('')}
        className="transform transition duration-500 bg-red-500 my-4 text-sm text-white w-full p-2 flex justify-center items-center"
      >
        {errorMessage}
      </div>
    )
  );
};

export default ErrorBox;
