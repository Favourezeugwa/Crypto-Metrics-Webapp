import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Details.css';

function DetailsContainer() {
  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => crypto.show === true);

  return (
    <Container>
      <div className="detailsContainer">
        {
         filteredCrypto.map((crypto) => (
           <>
             <div className="imageContainer">
               <img src={crypto.img} alt="coin logo" id={crypto.id} className="indiImg" />
               <div className="cont">
                 <h2 key={crypto.id}>
                   Coin:
                   {' '}
                   {crypto.name}
                 </h2>
                 <h2 key={crypto.id}>
                   Ranked at:
                   {' '}
                   #
                   {crypto.rank}
                 </h2>
               </div>
             </div>
             <h2 className="detailTitle" key={crypto.id}>
               More Information about
               {' '}
               {crypto.name}
             </h2>
             <div className="info">
               <p>Coin Name</p>
               <p key={crypto.id}>{crypto.name}</p>
             </div>
             <div className="info">
               <p>Ranking</p>
               <p key={crypto.id}>
                 No.
                 {crypto.rank}
               </p>
             </div>
             <div className="info">
               <p>Current Price</p>
               <p key={crypto.id}>
                 $
                 {crypto.price}
               </p>
             </div>
             <div className="info">
               <p>Symbol</p>
               <p key={crypto.id}>{crypto.symbol}</p>
             </div>
             <div className="info">
               <p>Market Cap</p>
               <p key={crypto.id}>
                 $
                 {crypto.marketCap}
               </p>
             </div>
             <div className="info">
               <p>Available Supply</p>
               <p key={crypto.id}>{crypto.availableSupply}</p>
             </div>
             <div className="info">
               <p>Contract Address</p>
               <p key={crypto.id}>{crypto.contractAddress}</p>
             </div>
             <div className="info">
               <p>Decimals</p>
               <p key={crypto.id}>{crypto.decimals}</p>
             </div>
             <div className="info">
               <p>Price Btc</p>
               <p key={crypto.id}>
                 $
                 {crypto.priceBtc}
               </p>
             </div>
             <div className="info">
               <p>Price Change/1 Day Ago</p>
               <p key={crypto.id}>
                 $
                 {crypto.priceChange1d}
               </p>
             </div>
             <div className="info">
               <p>Price Change/Hour</p>
               <p key={crypto.id}>
                 $
                 {crypto.priceChange1h}
               </p>
             </div>
             <div className="info">
               <p>Price Change/Week</p>
               <p key={crypto.id}>
                 $
                 {crypto.priceChange1w}
               </p>
             </div>
             <div className="info">
               <p>Total Supply</p>
               <p key={crypto.id}>
                 $
                 {crypto.totalSupply}
               </p>
             </div>
             <div className="info">
               <p>Volume</p>
               <p key={crypto.id}>{crypto.volume}</p>
             </div>
             <div className="infoLink">
               <p>Twitter</p>
               <li><a href={crypto.twitterUrl} key={crypto.id}>Our Twitter Handle</a></li>
             </div>
             <div className="infoLink">
               <p>Website</p>
               <li><a href={crypto.websiteUrl} key={crypto.id}>Our website URL</a></li>
             </div>
           </>
         ))
        }
      </div>
    </Container>
  );
}
export default DetailsContainer;
