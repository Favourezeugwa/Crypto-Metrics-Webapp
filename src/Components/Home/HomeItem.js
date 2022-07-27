import React from 'react';
import PropTypes from 'prop-types';

const HomeItem = (props) => {
  const { crypto } = props;
  const {
    id, name, symbol, price, img, rank,
  } = crypto;

  return (
    <li>
      <div
        className="home-item"
        id={id}
      >
        <div className="home-item-img">
          <img src={img} alt={name} />
        </div>
        <div className="home-item-info">
          <p>
            #
            {rank}
          </p>
          <h3>{name}</h3>
          <p>{symbol}</p>
          <p>{price}</p>
        </div>
      </div>
    </li>
  );
};

HomeItem.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeItem;
