import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className=' p-4 m-12'>
            <div className=' bg-sky-400 text-white rounded '>
                <NavBar></NavBar>
                <Banner></Banner>

            </div>

            <div className='container mx-auto'>   <Gadgets></Gadgets></div>
            <Footer></Footer>

        </div>


    );
};

export default Home;