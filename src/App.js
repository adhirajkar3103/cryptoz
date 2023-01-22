import {useState , useEffect} from 'react'
import Axios from 'axios'
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import CoinPage from './CoinPage';
import NftHome from './NftHome';
function App() {
  const [listOfCoins,setListOfCoins] = useState([])
  const [searchedWord,setSearchedWord] = useState('')
  useEffect(()=>{
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&currency=USD')
    .then((res)=>{
      setListOfCoins(res.data.coins)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const filteredCoins = listOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchedWord.toLowerCase())
  })

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home filteredCoins={filteredCoins} listOfCoins={listOfCoins} setSearchedWord={setSearchedWord} />} />
        <Route path='/coin/:id' element={<CoinPage />} />
        <Route path='/nft' element={<NftHome />} />
        <Route path='*' element='Error Page' />
      </Routes>
    </Router>
  );
}

export default App;
