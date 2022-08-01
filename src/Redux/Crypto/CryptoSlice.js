import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.coinstats.app/public/v1/coins';

export const fetchCoins = createAsyncThunk(
  'crypto/fetchCoins',
  async () => {
    const response = await fetch(baseURL);

    const data = await response.json();

    const coinData = data.coins.map((coin) => ({
      id: coin.id,
      img: coin.icon,
      name: coin.name,
      price: coin.price,
      rank: coin.rank,
      symbol: coin.symbol,
      marketCap: coin.marketCap,
      availableSupply: coin.availableSupply,
      contractAddress: coin.contractAddress,
      decimals: coin.decimals,
      priceBtc: coin.priceBtc,
      priceChange1d: coin.priceChange1d,
      priceChange1h: coin.priceChange1h,
      priceChange1w: coin.priceChange1w,
      totalSupply: coin.totalSupply,
      twitterUrl: coin.twitterUrl,
      volume: coin.volume,
      websiteUrl: coin.websiteUrl,
      show: false,
    }));

    return coinData;
  },
);

const initialState = [];

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCoinsReducer: (state, action) => state.map((coin) => {
      if (coin.id === action.payload) {
        return { ...coin, show: true };
      }
      return { ...coin, show: false };
    }),
  },
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => action.payload,
  },
});

export const { setCoinsReducer } = cryptoSlice.actions;

export default cryptoSlice.reducer;
