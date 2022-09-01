import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Info from './Info';
import Website from './Website';

const Home = () => {
    return (
        <div className='px-12 '>
        <Banner></Banner>
        <Info></Info>
        <Categories></Categories>
        <Website></Website>

        </div>
    );
}

export default Home;
