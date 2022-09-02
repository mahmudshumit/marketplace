import React from 'react';
import art from '../../assets/images/art.png';
import photography from '../../assets/images/photography.jpg';
import sports from '../../assets/images/sports.png';
import music from '../../assets/images/img-06.jpg';
import anime from '../../assets/images/img-03.jpg';
import virtual from '../../assets/images/img-04.jpg';
import Category from './Category';

const Categories = () => {
    const catagories =[
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
        <h1 className='font-bold text-4xl p-5 '>Browse by Category</h1>
       </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
             catagories.map(category=><Category
                key={category._id}
                category={category}>

            </Category>)
        }
    </div>
    </div>
    );
}

export default Categories;
