import React from 'react'

const Coin = (props) => {
  return (
    <div className="my-3 container d-flex align-items-center justify-content-between">
    <img src={props.coin.icon} alt="" width="80px" />
    <h4>{props.coin.symbol}</h4>
    <h4>{props.coin.name}</h4>
    <h4>${parseFloat(props.coin.price).toFixed(4)}</h4>
    <a type="button" target="_blank" rel="noreferrer" className="btn btn-primary" href={props.coin.websiteUrl}>{props.coin.symbol} Website</a>
    </div>
  )
}

export default Coin