import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CoinListItem(props) {
  let navigate = useNavigate()
  return (<>
    <li class="list-group-item d-flex justify-content-between" key={props.coin.id}>
     <img style={{width:'30px',height:'30px'}} src={props.coin.icon} alt='' /> 
      <span> {props.coin.name}</span>  
      <span>${props.coin.price.toFixed(3)}</span>
     <button className='btn btn-dark' onClick={()=>navigate(`coin/${props.coin.id}`)}>
        Read more
      </button>
    </li>
    </>)
}
