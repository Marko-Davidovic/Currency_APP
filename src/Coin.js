import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin__container'>
      <div className='coin__row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin__symbol'>{symbol}</p>
        </div>
        <div className='coin__data'>
          <p className='coin__price'>${price}</p>
          <p className='coin__volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin__percent red'>{priceChange}%</p>
          ) : (
            <p className='coin__percent green'>{priceChange}%</p>
          )}

          <p className='coin__marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
