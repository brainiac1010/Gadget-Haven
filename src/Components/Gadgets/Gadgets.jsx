import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All Product');
    
    // Available categories - now matching exactly with your JSON data
    const categories = [
        'All Product',
        'Phones',
        'Computers',
        'Smart Watches',
        'Power Banks',
        'Chargers'
    ];

    useEffect(() => {
        fetch('./gadgetData.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data);
                setFilteredGadgets(data); // Initialize with all products
            })
    }, []);

    // Filter products by category
    const filterProducts = (category) => {
        setActiveFilter(category);
        if (category === 'All Product') {
            setFilteredGadgets(gadgets);
        } else {
            const filtered = gadgets.filter(gadget => gadget.category === category);
            setFilteredGadgets(filtered);
        }
    };

    // Handle mobile dropdown change
    const handleMobileFilterChange = (e) => {
        filterProducts(e.target.value);
    };

    return (
        <div className='mt-4 px-4 sm:px-6 lg:px-8'>
            <h2 className='font-bold text-3xl sm:text-4xl text-center mb-6'>Explore Cutting-Edge Gadgets</h2>

            <div className='flex flex-col lg:flex-row gap-6'>
                {/* Desktop Filters Sidebar */}
                <div className="hidden md:flex flex-col gap-3 p-4 bg-white rounded-xl w-full md:w-48 h-fit sticky top-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => filterProducts(category)}
                            className={`font-medium py-2 px-4 rounded-full transition cursor-pointer ${
                                activeFilter === category
                                    ? 'bg-sky-400 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-sky-200 hover:text-sky-500'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Mobile filter dropdown */}
                <div className="md:hidden mb-4">
                    <select 
                        onChange={handleMobileFilterChange}
                        value={activeFilter}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Gadgets Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => (
                            <Gadget gadget={gadget} key={gadget.product_id} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500 text-lg">No products found in this category</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;