import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeList from './HomeList';
import './Home.css';

const HomeContainer = () => {
  const [cryptos] = useState([
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$9,890.00',
      change: '+0.00%',
      changeColor: '#00ff00',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$9,890.00',
      change: '+0.00%',
      changeColor: '#00ff00',
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: '$9,890.00',
      change: '+0.00%',
      changeColor: '#00ff00',
    },
    {
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      price: '$9,890.00',
      change: '+0.00%',
      changeColor: '#00ff00',
    },
  ]);

  return (
    <Container>
      <HomeList cryptos={cryptos} />
    </Container>
  );
};

export default HomeContainer;
