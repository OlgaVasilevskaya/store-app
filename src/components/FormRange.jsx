import { useState } from 'react';

import { formatPrice } from '../utils';
import { MAX_PRICE, STEP } from '../constants';

const FormRange = ({ label, name, size, price }) => {
  const [selectedPrice, setSelectedPrice] = useState(price || MAX_PRICE);

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>

      <input
        type='range'
        name={name}
        min={0}
        max={MAX_PRICE}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={STEP}
      />

      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max : {formatPrice(MAX_PRICE)}</span>
      </div>
    </div>
  );
};

export default FormRange;
