import React, { useState } from 'react';
import Monkey from '../../assets/images/card1 (1).jpg';
import anime from '../../assets/images/anime.jpg';
import Catto from '../../assets/images/card1 (6).jpg';
import dream from '../../assets/images/img-09.jpg';
import digital from '../../assets/images/img-08.jpg';
import mars from '../../assets/images/music.jpg';

import MarketCard from './MarketCard';
import CardModal from './CardModal';



const MarketCards = () => {

    const [collection,setCollection] = useState(null)

    const cards =[
        {
            _id:1,
            Name:'Monkey Pro',
            img: Monkey,
            price:445
            
            
        },
        {
            _id:2,
            Name:'Catto',
            img: Catto,
            price:654
        },
        {
            _id:3,
            Name:'Anime',
            img: anime,
            price:987
        },
        {
            _id:4,
            Name:'Confusion Fusion',
            img: dream,
            price:444
        },
        {
            _id:5,
            Name:'RoboCow',
            img: digital,
            price:456
        },
        {
            _id:6,
            Name:'Music Panda',
            img:mars ,
            price:765
        }
    ];
    return (
    <div className='my-24 px-12'>
       <div className="text-center ">
        <h1 className='font-bold text-4xl p-5 '>Collection</h1>
       </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
             cards.map(card=><MarketCard
                key={card._id}
                card={card}
                setCollection={setCollection}
                
                
                >

            </MarketCard>)
        }
    </div>
    {collection && <CardModal collection={collection}   ></CardModal>}
    </div>
    );
}

export default MarketCards;
