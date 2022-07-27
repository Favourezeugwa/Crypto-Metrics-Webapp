import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchCoins } from '../../Redux/Crypto/CryptoSlice';
import HomeList from './HomeList';
import './Home.css';

const HomeContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  // declare a global state variable to store the data from the API
  const cryptos = useSelector((state) => state.crypto);
  console.log(cryptos);

  return (
    <Container>
      <HomeList cryptos={cryptos} />
    </Container>
  );
};

export default HomeContainer;
