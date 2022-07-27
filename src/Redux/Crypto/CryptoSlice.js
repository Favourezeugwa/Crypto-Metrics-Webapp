import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.coinstats.app/public/v1/coins';

export const fetchCoins = createAsyncThunk(
  'crypto/fetchCoins',
  async () => {
    const response = await fetch(baseURL);

    const data = await response.json();

    const coinData = data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.price,
      marketCap: coin.market_cap,
      volume: coin.volume,
      circulatingSupply: coin.circulating_supply,
      totalSupply: coin.total_supply,
      maxSupply: coin.max_supply,
      change1h: coin.change_1h,
      change24h: coin.change_24h,
      change7d: coin.change_7d,
      rank: coin.rank,
      img: coin.img,
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
      if (coin.id === action.payload.id) {
        return {
          ...coin,
          ...action.payload,
        };
      }
      return coin;
    }),
  },
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => action.payload,
  },
});

export const { setCoinsReducer } = cryptoSlice.actions;

export default cryptoSlice.reducer;
