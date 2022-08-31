import React from 'react';

const InfoCard = ({img,cardTittle,btnClass,pClass}) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl bg-neutral ">
        <figure className="pl-5">
            <img src={img} alt="Album"/></figure>
        <div class="card-body text-white">
          <h2 class="card-title">{cardTittle}</h2>
          <p>{pClass}</p>
          <div>
          <button class="btn btn-accent">{btnClass}</button>

          </div>

        </div>
        
      
      </div>
    );
}

export default InfoCard;
