import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('./gadgetData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div className='mt-4 '>
            <h2 className='font-bold text-4xl text-center'>Explore Cutting-Edge Gadgets</h2>


            <section className='flex ml-20'>
                <div className="flex flex-col gap-3 p-4 bg-white rounded-xl w-48 h-100 mt-6  ">
                    <button className="bg-sky-400 text-white font-medium py-2 px-4 rounded-full cursor-pointer">
                        All Product
                    </button>
                    <button className="bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-sky-200 hover:text-sky-500 transition cursor-pointer">
                        Laptops
                    </button>
                    <button className="bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-sky-200 hover:text-sky-500 transition cursor-pointer">
                        Phones
                    </button>
                    <button className="bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-sky-200 hover:text-sky-500 transition cursor-pointer">
                        Accessories
                    </button>
                    <button className="bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-sky-200 hover:text-sky-500 transition cursor-pointer">
                        Smart Watches
                    </button>
                    <button className="bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-sky-200 hover:text-sky-500 transition cursor-pointer">
                        MacBook
                    </button>
                    <button className="bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-full hover:bg-sky-200 hover:text-sky-500 transition cursor-pointer">
                        iPhone
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-8 mt-6 '>
                    {
                        gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Gadgets;