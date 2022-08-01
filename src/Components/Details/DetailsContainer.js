import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { setCoinsReducer } from '../../Redux/Crypto/CryptoSlice';

import './Details.css';

function DetailsContainer() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(setCoinsReducer(id));
  }, []);

  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => crypto.show === true);

  return (
    <Container>
      <div className="detailsContainer">
        {
         filteredCrypto.map((crypto) => (
           <>
             <div key={uuidv4()} className="imageContainer">
               <img src={crypto.img} alt="coin logo" id={uuidv4} className="indiImg" />
               <div className="cont">
                 <h2>
                   Coin:
                   {' '}
                   {crypto.name}
                 </h2>
                 <h2>
                   Ranked at:
                   {' '}
                   #
                   {crypto.rank}
                 </h2>
               </div>
             </div>
             <h2 className="detailTitle">
               More Information about
               {' '}
               {crypto.name}
             </h2>
             <div className="info">
               <p>Coin Name</p>
               <p>{crypto.name}</p>
             </div>
             <div className="info">
               <p>Ranking</p>
               <p>
                 No.
                 {crypto.rank}
               </p>
             </div>
             <div className="info">
               <p>Current Price</p>
               <p>
                 $
                 {crypto.price}
               </p>
             </div>
             <div className="info">
               <p>Symbol</p>
               <p>{crypto.symbol}</p>
             </div>
             <div className="info">
               <p>Market Cap</p>
               <p>
                 $
                 {crypto.marketCap}
               </p>
             </div>
             <div className="info">
               <p>Available Supply</p>
               <p>{crypto.availableSupply}</p>
             </div>
             <div className="info">
               <p>Contract Address</p>
               <p>{crypto.contractAddress}</p>
             </div>
             <div className="info">
               <p>Decimals</p>
               <p>{crypto.decimals}</p>
             </div>
             <div className="info">
               <p>Price Btc</p>
               <p>
                 $
                 {crypto.priceBtc}
               </p>
             </div>
             <div className="info">
               <p>Price Change/1 Day Ago</p>
               <p>
                 $
                 {crypto.priceChange1d}
               </p>
             </div>
             <div className="info">
               <p>Price Change/Hour</p>
               <p>
                 $
                 {crypto.priceChange1h}
               </p>
             </div>
             <div className="info">
               <p>Price Change/Week</p>
               <p>
                 $
                 {crypto.priceChange1w}
               </p>
             </div>
             <div className="info">
               <p>Total Supply</p>
               <p>
                 $
                 {crypto.totalSupply}
               </p>
             </div>
             <div className="info">
               <p>Volume</p>
               <p>{crypto.volume}</p>
             </div>
             <div className="infoLink">
               <p>Twitter</p>
               <li><a href={crypto.twitterUrl}>Our Twitter Handle</a></li>
             </div>
             <div className="infoLink">
               <p>Website</p>
               <li><a href={crypto.websiteUrl}>Our website URL</a></li>
             </div>
           </>
         ))
        }
      </div>
    </Container>
  );
}
export default DetailsContainer;
