import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer from './Crypto/CryptoSlice';

export default configureStore({
  reducer: {
    crypto: CryptoReducer,
  },
});
