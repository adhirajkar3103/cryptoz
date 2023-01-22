import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import Axios from 'axios'
import Coin from "./Coin";
import Spinner from "./Spinner";

const CoinPage = () => {
  const { id } = useParams();
  const [coin , setCoin] = useState({})
  const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
    
    Axios.get(`https://api.coinstats.app/public/v1/coins/${id}?currency=USD`)
    .then((res)=>{
      setCoin(res.data.coin)
      setLoading(true)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])


  return(<>
    {
      loading ? (<Coin coin={coin} />
      ):<Spinner />
    }
    </>)

};

export default CoinPage;
