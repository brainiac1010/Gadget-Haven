import React from 'react';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { useLoaderData, useParams } from 'react-router-dom';

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

    return (
        <div className="flex flex-col lg:flex-row items-start gap-8 p-6  text-white min-h-screen">
            <img
                src={product_image}
                alt={`Gadget ${product_id}`}
                style={{
                    width: '424.31px',
                    height: '503px',
                    borderRadius: '16px',
                    objectFit: 'cover',
                }}
            />

            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-sky-300">{product_title}</h2>
                <p className="mb-1">Category: <span className="font-medium text-slate-300">{category}</span></p>
                <p className="mb-1">Price: <span className="font-semibold text-green-400">${price}</span></p>
                <p className="mb-1">
                    Availability: 
                    <span className={`ml-2 font-semibold ${availability ? 'text-green-400' : 'text-red-400'}`}>
                        {availability ? 'In Stock' : 'Out of Stock'}
                    </span>
                </p>
                <p className="mb-4">Rating: <span className="text-yellow-300">⭐ {rating}</span></p>

                <p className="text-slate-300 mb-4">{description}</p>

                <h3 className="text-lg font-semibold mb-2 text-sky-300">Specifications:</h3>
                <ul className="list-disc list-inside mb-6 text-slate-300">
                    {specification.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center gap-2 bg-sky-400 text-white font-medium py-2 px-6 rounded-full hover:bg-sky-700 transition">
                        Add To Cart <BsCart3 className="text-xl" />
                    </button>

                    <button className="flex items-center gap-2 border border-sky-400 text-sky-300 py-2 px-6 rounded-full hover:bg-sky-800 transition">
                        <BsHeart className="text-xl" /> Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GadgetsDetails;
