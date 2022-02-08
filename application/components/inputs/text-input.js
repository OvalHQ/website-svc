import React, { useState } from 'react';
import Image from 'next/image';
import ButtonPlain from '../buttons/plain-btn';
import { RiEyeOffFill, RiEyeFill } from 'react-icons/ri';

const TextInput = (
  {
    label,
    type = 'text',
    placeholder,
    withIcon = false,
    icon,
    withLink = false,
    onChange,
    value,
    name,
    inputID,
    disabled,
  },
  ref
) => {
  let inputType = type;

  const [showXters, setShowXters] = useState(false);
  return (
    <div className="w-full">
      <div className={`flex justify-between`}>
        {label && (
          <p className="uppercase text-xs font-medium text-grey-lightGray tracking-wider my-2">
            {label}
          </p>
        )}

        {withLink && (
          <ButtonPlain
            label={withLink}
            style={{ color: '#B4BAC3' }}
            onClick={() => alert('Please refer to the figma design :|')}
          />
        )}
      </div>
      <div className="relative">
        {withIcon && (
          <div className="absolute inset-2 left-3 w-6 h-6">
            <Image src={icon} className="rounded-full" />
          </div>
        )}
        <input
          placeholder={placeholder ? placeholder : `Enter ${label}`}
          className={`w-full h-10 border border-bg-blue-100 rounded text-sm 
            ${inputType === 'password' ? 'tracking-widest' : 'tracking-wide'}
            ${withIcon ? 'pl-12' : ''}
            px-4 outline-none focus:ring-1 focus:ring-primary`}
          type={
            inputType === 'password'
              ? showXters
                ? 'text'
                : 'password'
              : inputType
          }
          onChange={onChange}
          value={value}
          name={name}
          id={inputID}
          disabled={disabled}
          style={{ backgroundColor: 'rgba(224, 231, 255, 0.2)' }}
        />
        {inputType === 'password' && (
          <span
            className="absolute right-3 top-3"
            onClick={() => setShowXters(!showXters)}
          >
            {showXters ? (
              <RiEyeFill size={16} color="#B4BAC3" />
            ) : (
              <RiEyeOffFill size={16} color="#B4BAC3" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
