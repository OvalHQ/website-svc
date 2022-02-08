import React from 'react';

const ButtonPlain = ({ label, disabled, onClick, width, style }) => {
  return (
    <button
      onClick={() => {
        if (!disabled) onClick();
      }}
      className={`${disabled ? 'text-gray-400' : 'text-primary'}
      ${width ? width : ""}
      text-white`}
      style={style}
    >
      {label || children}
    </button>
  );
};

export default ButtonPlain;
