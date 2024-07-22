import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  usd: string;
  eur: string;
}

const initialState: CurrencyState = {
  usd: '',
  eur: '',
};

const exchangeRate = 1.07;

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setUsd(state, action: PayloadAction<string>) {
      const usd = action.payload;
      state.usd = usd;
      state.eur = usd ? (parseFloat(usd) / exchangeRate).toFixed(2) : '';
    },
    setEur(state, action: PayloadAction<string>) {
      const eur = action.payload;
      state.eur = eur;
      state.usd = eur ? (parseFloat(eur) * exchangeRate).toFixed(2) : '';
    },
  },
});

export const { setUsd, setEur } = currencySlice.actions;
export default currencySlice.reducer;