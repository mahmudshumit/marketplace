import React, { useState } from 'react';
import art from '../../assets/images/art.png';
import photography from '../../assets/images/photography.jpg';
import sports from '../../assets/images/sports.png';
import music from '../../assets/images/img-06.jpg';
import anime from '../../assets/images/img-03.jpg';
import virtual from '../../assets/images/img-04.jpg';
import MarketCard from './MarketCard';
import CardModal from './CardModal';


const MarketCards = () => {

    const [collection,setCollection] = useState(null)

    const cards =[
        {
            _id:1,
            Name:'Art',
            img: art
        },
        {
            _id:2,
            Name:'Photography',
            img: photography
        },
        {
            _id:3,
            Name:'Sports',
            img: sports
        },
        {
            _id:4,
            Name:'Music',
            img: music
        },
        {
            _id:5,
            Name:'Anime',
            img: anime
        },
        {
            _id:6,
            Name:'Virtual World',
            img: virtual
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
