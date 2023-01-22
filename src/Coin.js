import React from 'react'

const Coin = (props) => {
  // return (<>
  //   <div className="my-3 container d-flex align-items-center justify-content-between">
  //   <img src={props.coin.icon} alt="" width="80px" />
  //   <h4>{props.coin.symbol}</h4>
  //   <h4>{props.coin.name}</h4>
  //   <h4>${parseFloat(props.coin.price).toFixed(4)}</h4>
  //   {
  //     props.coin.priceChange1d>0?
  //     (<h4 style={{color:'green'}}>+{props.coin.priceChange1d}%</h4>)
  //     :(<h4 style={{color:'red'}}>{props.coin.priceChange1d}%</h4>)
  //   }
  //   <a type="button" target="_blank" rel="noreferrer" className="btn btn-primary" href={props.coin.websiteUrl}>{props.coin.symbol} Website</a>
  //   </div>
  //   </>)

  return(<div className="d-flex justify-content-center">
    <div class="card mt-5" style={{width: '80vw'}}>
  <div class="card-body d-flex align-items-center justify-content-evenly">
  <img src={props.coin.icon} alt="" width="80px" />
    <h5 class="card-title">{props.coin.symbol}</h5>
    <h5 class="card-subtitle mb-2 text-muted">{props.coin.name}</h5>
    <p class="card-text">${parseFloat(props.coin.price).toFixed(4)}</p>
    {
      props.coin.priceChange1d>0?
      (<p style={{color:'green'}}>+{props.coin.priceChange1d}%</p>)
      :(<p style={{color:'red'}}>{props.coin.priceChange1d}%</p>)
    }
    <a type="button" target="_blank" rel="noreferrer" className="btn btn-primary" href={props.coin.websiteUrl}>{props.coin.symbol} Website</a>
  </div>
</div>
  </div>)
}

export default Coin