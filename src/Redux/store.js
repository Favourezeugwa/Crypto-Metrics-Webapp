import { configureStore } from '@reduxjs/toolkit';
import { setCoinsReducer } from './Crypto/CryptoSlice';

export default configureStore({
  reducer: {
    crypto: setCoinsReducer,
  },
});
