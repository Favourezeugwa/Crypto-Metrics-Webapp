/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    <li className="listItem">
      <div
        className="homeItem"
        id={id}
      >
        <div className="home-item-img">
          <Link
            to="/details"
          >
            <img src={img} alt={name} id={id} onClick={handleClick} />
          </Link>
        </div>
        <div className="home-item-info">
          <p>
            #
            {rank}
          </p>
          <h3 className="name">{name}</h3>
          <p className="symbol">{symbol}</p>
          <p>{price}</p>
        </div>
        <Link
          to="/details"
        >
          <FaArrowRight className="fontIcon" id={id} onClick={handleClick} />
        </Link>
      </div>
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
