import React from 'react';

const Beneficiary = ({ person }) => {
  const full_name = person.name.split(' ');
  const initials = full_name.map((name) => name[0]);

  return (
    <div className="bg-white flex items-center justify-evenly w-36 h-16 rounded-lg cursor-pointer border border-gray-400">
      <div className="bg-grey-graySuit rounded-full flex items-center justify-center h-8 w-8">
        <span className="text-white text-xs tracking-widest">{initials}</span>
      </div>
      <span className="text-sm mt-0" style={{marginTop: 0}}>{person.name.substr(0, 12)}</span>
    </div>
  );
};

export default Beneficiary;
