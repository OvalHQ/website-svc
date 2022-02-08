import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const MiniBtn = ({
  loading,
  placeholder,
  children,
  disabled,
  onClick,
  width,
}) => {
  return (
    <button
      onClick={() => {
        if (!disabled) onClick();
      }}
      className={`rounded h-9 ${
        !!width ? width : 'w-64'
      } flex items-center justify-center ${
        disabled ? 'bg-gray-400' : 'bg-primary shadow-primaryBtnShadow '
      }  text-white text-lg `}
    >
      {loading && <CgSpinner className="h-5 w-5 mr-2 animate-spin" />}
      {placeholder || children}
    </button>
  );
};

export default MiniBtn;
