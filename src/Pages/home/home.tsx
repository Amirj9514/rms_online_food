import React from 'react';
import './home.scss';
import Banner from '../../components/home/banner/banner';
import ResturantDetail from '../../components/home/ResturantDetail/resturantDetail';

const Home = () => {
    return (
        <div className='mx-4 mt-2 mb-4'>
            <Banner />
            <ResturantDetail />
        </div>
    )
}

export default Home