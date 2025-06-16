import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    getStoredCart,
    removeFromStoredCart,
    getStoredWishlist,
    removeFromStoredWishlist
} from '../../Utility/addToDb';
import Gadget from '../Gadget/Gadget';
import { AiOutlineClose } from 'react-icons/ai';

const CartList = () => {
    const [cartList, setCartList] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const allItems = useLoaderData();

    useEffect(() => {
        const storedCartIds = getStoredCart();
        const storedWishIds = getStoredWishlist();

        const matchedCart = allItems.filter(item =>
            storedCartIds.includes(item.product_id)
        );
        const matchedWishlist = allItems.filter(item =>
            storedWishIds.includes(item.product_id)
        );

        setCartList(matchedCart);
        setWishlist(matchedWishlist);
    }, [allItems]);

    const handleRemoveCart = (id) => {
        removeFromStoredCart(id);
        setCartList(prev => prev.filter(item => item.product_id !== id));
    };

    const handleRemoveWishlist = (id) => {
        removeFromStoredWishlist(id);
        setWishlist(prev => prev.filter(item => item.product_id !== id));
    };

    return (
        <div className="min-h-screen px-4 md:px-10 py-8 bg-slate-900 text-white">
            <h3 className="text-4xl font-bold mb-8 text-center text-sky-400">🛒 Cart & 💖 Wishlist</h3>
            <Tabs>
                <TabList className="flex space-x-4 justify-center mb-6 text-lg font-semibold ">
                    <Tab className="cursor-pointer py-2 px-6 border border-sky-400 rounded hover:bg-sky-600 transition">Cart</Tab>
                    <Tab className="cursor-pointer py-2 px-6 border border-pink-400 rounded hover:bg-pink-600 transition">Wishlist</Tab>
                </TabList>

                {/* Cart Tab */}
                <TabPanel>
                    <h2 className="text-2xl text-sky-300 mb-6">🛍 Total Items in Cart: <span className="font-bold">{cartList.length}</span></h2>
                    {cartList.length > 0 ? (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {cartList.map(gadget => (
                                <div key={gadget.product_id} className="relative">
                                    <Gadget gadget={gadget} />
                                    <button
                                        onClick={() => handleRemoveCart(gadget.product_id)}
                                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-white rounded-full p-1"
                                        title="Remove from Cart"
                                    >
                                        <AiOutlineClose size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-slate-400">No items in the cart.</p>
                    )}
                </TabPanel>

                {/* Wishlist Tab */}
                <TabPanel>
                    <h2 className="text-2xl text-pink-300 mb-6">💖 Wishlist Items: <span className="font-bold">{wishlist.length}</span></h2>
                    {wishlist.length > 0 ? (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {wishlist.map(gadget => (
                                <div key={gadget.product_id} className="relative">
                                    <Gadget gadget={gadget} />
                                    <button
                                        onClick={() => handleRemoveWishlist(gadget.product_id)}
                                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 bg-white rounded-full p-1"
                                        title="Remove from Wishlist"
                                    >
                                        <AiOutlineClose size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-slate-400">Your wishlist is empty.</p>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CartList;