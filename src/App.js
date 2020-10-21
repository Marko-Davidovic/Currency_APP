import React,{ useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import Coin from './Coin';

function App() {
  const [coin, setCoins] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(error => console.log("API link Error"))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coin.filter(coin => 
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  return (
    <div className="coin__app">
      <div className="coin__serch">
          <h1 className="coin__text">Search Currency</h1>
          <form>
            <input type="text" placeholder="Search"
            className="coin__input"  onChange={handleChange}/>
          </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin key={coin.id} 
                name={coin.name} 
                price={coin.current_price} 
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.market_cap} 
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
                />

        )
      })}
    </div>
  );
}

export default App;


//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
