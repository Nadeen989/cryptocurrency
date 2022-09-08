import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [coins, setCoins] = useState([])
  


  useEffect(() => {
    const fetchCoins = async() => {
      const res = await fetch('https://api.coincap.io/v2/assets?limit=10')
      const data = await res.json()
      console.log(data.data)
      setCoins(data.data)
    }

    fetchCoins()

  }, [])
  return (
  
  <div className="cryptoPrice">
    <h1>Crypto-Currency-Page</h1>

    <table>
      
      <thead>
    <tr>
      <th><u>Rank</u></th>
      <th><u>Symbol</u></th>
      <th><u>Name</u></th>
      <th><u>Price (USD)</u></th>
    </tr>
    </thead>

    <tbody>
      {coins.map(({id, name, symbol, rank, priceUsd}) => (
        <tr key={id}>
          <td>{rank}</td>
          <td>{symbol}</td>
          <td>{name}</td>
          <td>${parseFloat(priceUsd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>


        </tr>
      ))}
    </tbody>

    </table>
    </div>
  );
}

export default App;