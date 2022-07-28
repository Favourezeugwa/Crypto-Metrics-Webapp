import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './HomeItem';
import { fetchCoins } from '../../Redux/Crypto/CryptoSlice';

const HomeList = () => {
  const cryptos = useSelector((state) => state.crypto);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  return (
    <ul>
      { cryptos.map((crypto) => <HomeItem key={crypto.id} crypto={crypto} />)}
    </ul>
  );
};

export default HomeList;
