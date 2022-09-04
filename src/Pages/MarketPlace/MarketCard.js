import React from "react";
import { Link } from "react-router-dom";

const MarketCard = ({ card,setCollection }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl glass">
  <figure><img src={card.img} alt="car!"/></figure>
  <div class="card-body p-5">
    <h2 class="card-title font-bold">{card.Name}</h2>
   
    <h2 class="card-title font-bold"><i class="ri-auction-line"></i>Current Bid</h2>
    <h3><i class="ri-currency-fill"></i>{card.price}</h3>
    
<div class="card-actions justify-start mr-14">
     
      <label 
      onClick={()=>setCollection(card)}
      for="card-modal" class="btn btn-primary"><i class="ri-wallet-fill"></i>Buy Now</label>
    </div>
  </div>
</div>
  ); 
};

export default MarketCard;