/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { fetchCoins, setCoinsReducer } from '../../Redux/Crypto/CryptoSlice';

const HomeItem = () => {
  const cryptos = useSelector((state) => state.crypto);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch, fetchCoins]);

  const handleClick = ({ target }) => {
    const { id } = target;
    console.log(id);
    dispatch(setCoinsReducer(id));
  };

  return (
    <ul className="listItem">
      {cryptos.map((crypto) => (
        <Link to="/details" key={crypto.id}>
          <li
            className="homeItem"
            onClick={handleClick}
          >
            <div className="home-item-img">
              <img src={crypto.img} alt={crypto.name} id={crypto.id} />
            </div>
            <div className="home-item-info">
              <p>
                #
                {crypto.rank}
              </p>
              <h3 className="name">{crypto.name}</h3>
              <p className="symbol">{crypto.symbol}</p>
              <p>{crypto.price}</p>
            </div>
            <FaArrowRight className="fontIcon" />

          </li>
        </Link>
      ))}
      ;
    </ul>
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
