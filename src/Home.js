import React from 'react'
import CoinListItem from './CoinListItem'

const Home = (props) => {
  return (<>
    <div className='container w-25 my-3'>
        <label htmlFor="coinSearch" className='d-flex justify-content-center mb-1'>Search coins</label>
          <input className="form-control" type='text' id='coinSearch'  placeholder='Bitcoin...' onChange={(e)=>props.setSearchedWord(e.target.value)} />
    </div>
        <ul class="container list-group mb-5">
        {props.filteredCoins?(<p>{props.filteredCoins.length} results</p>):(<p>{props.listOfCoins.length} results</p>)}
        {props.filteredCoins?(
            props.filteredCoins.map((coin)=>{
              return <CoinListItem coin={coin} />
            })):(
            props.listOfCoins.map((coin)=>{
              return <CoinListItem coin={coin} />
            })
          )
        }
    </ul>
    </>)
}

export default Home


