import React from 'react';

const SelectInput = ({
  label,
  placeholder,
  data,
  type,
  onChange,
  name,
  value,
}) => {
  return (
    <div>
      {label && (
        <p className="uppercase text-xs font-medium text-grey-lightGray tracking-wider my-2">
          {label}
        </p>
      )}
      <select
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        className={`appearance-none w-full h-10 border border-bg-blue-100 rounded text-sm px-4 outline-none focus:ring-1 focus:ring-primary bg-chevronDown bg-right-95 bg-no-repeat`}
        style={{ backgroundColor: 'rgba(224, 231, 255, 0.2)' }}
        onChange={onChange}
        name={name}
        value={value}
      >
        {type === 'countries' && <option value="NG">Nigeria</option>}
        {data.map((item, id) => (
          <option key={id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
