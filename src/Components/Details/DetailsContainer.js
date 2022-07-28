import React from 'react';
import { useSelector } from 'react-redux';

function DetailsContainer() {
  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => crypto.show === true);
  console.log(filteredCrypto);

  // useEffect(() => {
  //   dispatch(fetchCoins());
  // }, []);

  // declare a global state variable
  return (
    <>
      <div>
        {
         filteredCrypto.map((crypto) => (
           <>
             <p key={crypto.id}>{crypto.name}</p>
             <p key={crypto.id}>{crypto.rank}</p>
             <img src={crypto.img} alt={crypto.name} id={crypto.id} />
           </>
         ))
        }
      </div>
    </>
  );
}
export default DetailsContainer;