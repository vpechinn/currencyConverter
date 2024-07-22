import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { setUsd, setEur } from './currencySlice';

const CurrencyConverter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const usd = useSelector((state: RootState) => state.currency.usd);
  const eur = useSelector((state: RootState) => state.currency.eur);

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsd(e.target.value));
  };

  const handleEurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEur(e.target.value));
  };

  return (
    <div className="container">
      <div className="input-group">
        <label htmlFor="usd">USD</label>
        <input type="text" id="usd" value={usd} onChange={handleUsdChange} />
      </div>
      <div className="input-group">
        <label htmlFor="eur">EUR</label>
        <input type="text" id="eur" value={eur} onChange={handleEurChange} />
      </div>
    </div>
  );
};

export default CurrencyConverter;
