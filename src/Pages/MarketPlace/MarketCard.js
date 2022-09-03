import React from "react";
import { Link } from "react-router-dom";

const MarketCard = ({ card,setCollection }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl glass">
  <figure><img src={card.img} alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title">{card.Name}</h2>
    <p>How to park your car at your garage?</p>
    <div class="avatar">
    <div class="avatar">
  <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
</div>
<div class="card-actions justify-start">
     
      <label 
      onClick={()=>setCollection(card)}
      for="card-modal" class="btn btn-primary">Buy Now</label>
    </div>
  </div>
</div>
  ); 
};

export default MarketCard;