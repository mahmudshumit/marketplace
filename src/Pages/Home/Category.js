import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category}) => {
    
    return (
        <button >
<div class="card lg:max-w-lg bg-base-100 shadow-xl  ">
        <figure class="px-10 pt-10">
          <img src={category.img}  class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{category.Name}</h2>
          
        
        </div>
     
      </div>
        </button>
        
        
        
    );
}

export default Category;
