import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Details.css';

function DetailsContainer() {
  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => crypto.show === true);
  console.log(filteredCrypto);

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
             <p key={crypto.id} className="info">
               Coin Name:
               {' '}
               {crypto.name}
             </p>
             <p key={crypto.id} className="info">
               Ranking:
               {' '}
               No.
               {crypto.rank}
             </p>
             <p key={crypto.id} className="info">
               Current Price:
               {' '}
               $
               {crypto.price}
             </p>
             <p key={crypto.id} className="info">
               Symbol:
               {' '}
               {crypto.symbol}
             </p>
             <p key={crypto.id} className="info">
               Market Cap:
               {' '}
               {crypto.marketCap}
             </p>
             <p key={crypto.id} className="info">
               Available Supply:
               {' '}
               {crypto.availableSupply}
             </p>
             <p key={crypto.id} className="info">
               Contract Address:
               {' '}
               {crypto.contractAddress}
             </p>
             <p key={crypto.id} className="info">
               Decimals:
               {' '}
               {crypto.decimals}
             </p>
             <p key={crypto.id} className="info">
               Price Btc:
               {' '}
               $
               {crypto.priceBtc}
             </p>
             <p key={crypto.id} className="info">
               Price Change/1 Day Ago:
               {' '}
               {crypto.priceChange1d}
             </p>
             <p key={crypto.id} className="info">
               Price Change/Hour:
               {' '}
               {crypto.priceChange1h}
             </p>
             <p key={crypto.id} className="info">
               Price Change/Week:
               {' '}
               {crypto.priceChange1w}
             </p>
             <p key={crypto.id} className="info">
               Total Supply:
               {' '}
               {crypto.totalSupply}
             </p>
             <p key={crypto.id} className="info">
               Volume:
               {' '}
               {crypto.volume}
             </p>
             <a href={crypto.twitterUrl} key={crypto.id} className="infoLink">Twitter</a>
             <a href={crypto.websiteUrl} key={crypto.id} className="infoLink">Our website URL</a>
           </>
         ))
        }
      </div>
    </Container>
  );
}
export default DetailsContainer;
