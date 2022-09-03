import React from 'react';
import Footer from '../Shared/Footer';
import MarketCards from './MarketCards';
import MarketplaceBanner from './MarketplaceBanner';

const Marketplace = () => {
    return (
        <div>
            <MarketplaceBanner></MarketplaceBanner>
            <MarketCards></MarketCards>
            <Footer></Footer>
        </div>
    );
}

export default Marketplace;
