import React from 'react';
import hero from'../../assets/images/hero.jpg'

const Banner = () => {
    return (
 
    <div class="hero min-h-screen px-12 ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={hero} class="max-w-sm rounded-lg shadow-2xl bg" />
    <div>
      <h1 class="text-5xl font-bold">Digital NFT Market Place</h1>
      <p class="py-6">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
      <button class="btn btn-primary px-6">Create</button>
    </div>
  </div>
</div>
    );
}

export default Banner;
