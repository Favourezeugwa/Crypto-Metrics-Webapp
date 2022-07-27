import React from 'react';
import PropTypes from 'prop-types';

const HomeItem = (props) => {
  const { crypto } = props;
  const {
    name, symbol, price, change, changeColor,
  } = crypto;

  return (
    <li>
      <h3>{name}</h3>
      <p>{symbol}</p>
      <p>{price}</p>
      <p style={{ color: changeColor }}>{change}</p>
    </li>
  );
};

HomeItem.propTypes = {
  crypto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    changeColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeItem;
