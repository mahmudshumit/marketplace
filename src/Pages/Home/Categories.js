import React from 'react';
import art from '../../assets/images/art.png';
import photography from '../../assets/images/photography.jpg';
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
            Name:'Art',
            img: art
        },
        {
            _id:4,
            Name:'Art',
            img: art
        },
        {
            _id:5,
            Name:'Art',
            img: art
        },
        {
            _id:6,
            Name:'Art',
            img: art
        },
    ]
    return (
    <div className='my-24'>
       <div className="text-center ">
        <h1 className='font-bold text-4xl '>Browse by Category</h1>
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
