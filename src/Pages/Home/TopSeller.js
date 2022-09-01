import React from 'react';
import seller1 from '../../assets/images/ava-02.png';
import seller2 from '../../assets/images/ava-05.png';
import seller3 from '../../assets/images/ava-06.png';
import seller4 from '../../assets/images/ava-01.png';
import seller5 from '../../assets/images/ava-03.png';
import seller6 from '../../assets/images/ava-04.png';
import Category from './Category';
import Seller from './Seller';

const TopSeller = () => {
 
    const sellers =[
        {
            _id:1,
            Name:'Phebee Buffay',
            Price:'2.34 ETH',
            img: seller1
        },
        {
            _id:2,
            Name:'Richel Green',
            Price:'7.34 ETH',
            img: seller2
        },
        {
            _id:3,
            Name:'Monica Galler',
            Price:'8.34 ETH',
            img: seller3
        },
        {
            _id:4,
            Name:'Chandler Bing',
            Price:'90.34 ETH',
            img: seller4
        } ,
        {
            _id:5,
            Name:'Ross Galler',
            Price:'234 ETH',
            img: seller5
        },
        {
            _id:6,
            Name:'Joey Tribianni',
            Price:'1.1 ETH',
            img: seller6
        }
    ];

    return (
      <section className='my-24 px-12'>
        <div>
            <div  className="text-center py-10 ">
                <h1 className="text text-primary font-bold text-4xl "> TopCollection</h1>
            </div>
    
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
               {
                  sellers.map(seller=><Seller  
                  key={seller._id}
                  seller={seller}
                  >

                  </Seller>)
               }
        </div>
      </section>
    );
}

export default TopSeller;
