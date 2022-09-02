import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Footer from '../Shared/Footer';
import Info from './Info';
import TopSeller from './TopSeller';
import TopCollection from './TopSeller';
import Website from './Website';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info></Info>
            <Categories></Categories>
            <Website></Website>
            <TopSeller></TopSeller>
            <Footer></Footer>


        </div>
    );
}

export default Home;
