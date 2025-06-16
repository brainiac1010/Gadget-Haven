import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const {product_id, product_image, product_title, price } = gadget;

    return (
        <div className="bg-white rounded-2xl shadow-lg w-[300px] hover:shadow-xl transition-shadow duration-300">
            <figure className="p-5">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl h-[200px] w-full object-cover"
                />
            </figure>
            <div className="px-5 pb-5 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{product_title}</h2>
                <p className="text-base text-gray-600 mb-4">Price: ${price}</p>
               
               <Link to={`/gadgets/${product_id}`}><button className="w-full py-2 text-white bg-sky-400 hover:bg-sky-700 rounded-full font-medium transition-colors cursor-pointer">
                    View Details
                </button> </Link>
               
                
            </div>
        </div>
    );
};

export default Gadget;
