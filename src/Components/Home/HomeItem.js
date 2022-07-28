import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { setCoinsReducer } from '../../Redux/Crypto/CryptoSlice';

const HomeItem = (props) => {
  const { crypto } = props;

  const {
    id, name, symbol, price, img, rank,
  } = crypto;

  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(setCoinsReducer(id));
  };

  return (
    <li>
      <Link
        to="/details"
        onClick={handleClick}
      >
        <div
          className="homeItem"
          id={id}
        >
          <FaArrowRight />
          <div className="home-item-img">
            <img src={img} alt={name} id={id} />
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
      </Link>
    </li>
  );
};

HomeItem.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default HomeItem;
