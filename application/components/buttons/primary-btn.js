import React from 'react';
import Image from 'next/image';
import { CgSpinner } from 'react-icons/cg';

const PrimaryBtn = ({
  type,
  placeholder,
  children,
  disabled,
  onClick,
  width,
  style,
  loading,
}) => {
  return (
    <button
      type={type}
      onClick={() => {
        if (!disabled && onClick && !loading) onClick();
      }}
      className={`rounded h-12 flex items-center justify-center 
      ${disabled ? 'bg-gray-400' : 'bg-primary'}
      ${width ? width : 'w-full'}
      text-white`}
      style={style}
    >
      {loading && <CgSpinner className="h-5 w-5 mr-2 animate-spin" />}
      {placeholder || children}
    </button>
  );
};

export default PrimaryBtn;
