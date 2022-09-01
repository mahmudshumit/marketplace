import React from 'react';

const Seller = ({seller}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    
    <div class="flex items-center">
    <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
    <img src={seller.img} />
  </div>
</div>
<div>
     <h4 className='text-xl'>{seller.Name}</h4>
     <p>{seller.Price}</p>
</div>
    </div>
  </div>
</div>
    );
}

export default Seller;
