import React from 'react';
import numeral from 'numeral';
import { flags } from '../../helpers/constants';

const CurrencyCard = ({ currency, amount }) => {
  return (
    <div className="p-2 rounded-lg border border-primary">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {flags[currency.toUpperCase()].icon}
          <span>{flags[currency.toUpperCase()].label}</span>
        </div>
        <div className="text-sm text-gray-800 bg-green-50 p-1 px-2 rounded-xl">
          {currency.toUpperCase()}
        </div>
      </div>
      <h3 className="xl:text-2xl">
        {flags[currency.toUpperCase()].symbol}
        {numeral(amount).format('0,0.00')}
      </h3>
    </div>
  );
};

export default CurrencyCard;
