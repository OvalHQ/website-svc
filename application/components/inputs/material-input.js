import React from 'react';

const MaterialInput = ({
  label,
  type = 'text',
  placeholder,
  container,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={`${container}`}>
      <p className="text-xs font-small text-grey-lightGray tracking-wider my-2">
        {label}
      </p>
      <input
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full h-8 border-b border-gray-400 transition duration-500 ease-in
          text-xs outline-none focus:border-primary
          ${type === 'password' ? 'tracking-widest' : 'tracking-wide'}`}
      />
    </div>
  );
};

export default MaterialInput;
