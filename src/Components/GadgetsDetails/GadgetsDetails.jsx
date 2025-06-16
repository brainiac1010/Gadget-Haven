import React from 'react';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { useLoaderData, useParams } from 'react-router-dom';
import {
    addToStoredCart,
    addToStoredWishlist
} from '../../Utility/addToDb';



const GadgetsDetails = () => {
    const { gadgetsId } = useParams();
    const id = parseInt(gadgetsId);

    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === id);

    const {
        product_id,
        product_title,
        product_image,
        category,
        description,
        price,
        specification,
        availability,
        rating,
    } = gadget;

    const handleAddToCart = (id) => {
        addToStoredCart(id);

    };

    const handleAddToWishlist = (id) => {
        addToStoredWishlist(id);

    };

    return (
        <div className="flex flex-col lg:flex-row items-start gap-8 px-6 py-10 text-white min-h-screen bg-slate-900">
            <div className="flex-shrink-0 mx-auto">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl object-cover w-[300px] sm:w-[400px] lg:w-[424px] h-[400px] sm:h-[460px] lg:h-[503px]"
                />
            </div>

            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3 text-sky-300">{product_title}</h2>
                <p className="mb-1">
                    Category: <span className="font-medium text-slate-300">{category}</span>
                </p>
                <p className="mb-1">
                    Price: <span className="font-semibold text-green-400">${price}</span>
                </p>
                <p className="mb-1">
                    Availability:
                    <span className={`ml-2 font-semibold ${availability ? 'text-green-400' : 'text-red-400'}`}>
                        {availability ? 'In Stock' : 'Out of Stock'}
                    </span>
                </p>
                <p className="mb-4">
                    Rating: <span className="text-yellow-300">⭐ {rating}</span>
                </p>

                <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>

                <h3 className="text-lg font-semibold mb-2 text-sky-300">Specifications:</h3>
                <ul className="list-disc list-inside mb-6 text-slate-300 space-y-1">
                    {specification.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => handleAddToCart(id)}
                        className="flex items-center justify-center gap-2 bg-sky-400 text-white font-medium py-2 px-6 rounded-full hover:bg-sky-700 transition"
                    >
                        Add To Cart <BsCart3 className="text-xl" />
                    </button>

                    <button
                        onClick={() => handleAddToWishlist(id)}
                        className="flex items-center justify-center gap-2 border border-pink-400 text-pink-300 py-2 px-6 rounded-full hover:bg-pink-700 transition"
                    >
                        <BsHeart className="text-xl" /> Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GadgetsDetails;
