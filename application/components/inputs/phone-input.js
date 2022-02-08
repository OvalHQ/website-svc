import React from 'react';
import SelectInput from './select-input';
import TextInput from './text-input';

const PhoneInput = ({
  onChange,
  setCountry,
  country,
  value,
  name,
  data,
  label,
}) => {
  return (
    <div>
      {label && (
        <p className="uppercase text-xs font-medium text-grey-lightGray tracking-wider my-2">
          {label}
        </p>
      )}
      <div className="flex items-center space-x-2">
        <div className="w-1/3">
          <SelectInput data={data} onChange={setCountry} value={country} />
        </div>
        <TextInput
          placeholder="Enter Phone Number"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
