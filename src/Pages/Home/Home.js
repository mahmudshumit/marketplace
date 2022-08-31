import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Info from './Info';

const Home = () => {
    return (
        <div className='px-12'>
        <Banner></Banner>
        <Info></Info>
        <Categories></Categories>

        </div>
    );
}

export default Home;
