import React from 'react';
import PropTypes, { Array } from 'prop-types';
import HomeItem from './HomeItem';

const HomeList = (props) => {
  const { cryptos } = props;

  return (
    <ul>
      { cryptos.map((crypto) => <HomeItem key={crypto.id} crypto={crypto} />)}
    </ul>
  );
};

HomeList.propTypes = {
  cryptos: PropTypes.instanceOf(Array).isRequired,
};

export default HomeList;
