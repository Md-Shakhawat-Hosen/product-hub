import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import HomeCard from '../../HomeCard/HomeCard';
import Spinner from '../../Spinner/Spinner';

const Home = () => {
    const products = useLoaderData();
    // console.log(products.products)
    
    const spinner = useNavigation()
    const isL = spinner.state === 'loading'
    // console.log(isL);

    return (
        <div>
            {
                isL ? <Spinner></Spinner> : ''
            }
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                products?.products.map(product => <HomeCard key={product.id} product={product}></HomeCard>)
            }
           </div>
        </div>
    );
};

export default Home;