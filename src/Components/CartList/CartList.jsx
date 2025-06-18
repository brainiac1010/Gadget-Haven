import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    getStoredCart,
    removeFromStoredCart,
    getStoredWishlist,
    removeFromStoredWishlist,
    clearCart
} from '../../Utility/addToDb';
import { AiOutlineClose } from 'react-icons/ai';

const CartList = () => {
    const [cartList, setCartList] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
    const [sortOrder, setSortOrder] = useState('default');
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

    const handlePurchase = () => {
        setShowPaymentSuccess(true);
    };

    const handleClosePaymentSuccess = () => {
        setShowPaymentSuccess(false);
        clearCart();
        setCartList([]);
    };

    const handleSortByPrice = () => {
        const newSortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
        setSortOrder(newSortOrder);
        
        const sortedList = [...cartList].sort((a, b) => {
            return newSortOrder === 'desc' ? b.price - a.price : a.price - b.price;
        });
        setCartList(sortedList);
    };

    const calculateTotal = () => {
        return cartList.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
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
                    <div className="mb-6">
                        <h2 className="text-2xl mb-2">Cart</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-bold">Total cost: ${calculateTotal()}</p>
                            <button 
                                onClick={handleSortByPrice}
                                className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded"
                            >
                                Sort by Price {sortOrder === 'desc' ? '↓' : '↑'}
                            </button>
                        </div>
                    </div>

                    {cartList.length > 0 ? (
                        <div className="space-y-6">
                            {cartList.map(product => (
                                <div key={product.product_id} className="relative border-b border-gray-700 pb-6 flex gap-4">
                                    <div className="w-1/4">
                                        <img 
                                            src={product.product_image} 
                                            alt={product.product_title}
                                            className="w-full h-auto rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="w-3/4">
                                        <h3 className="text-xl font-semibold mb-2">{product.product_title}</h3>
                                        <p className="text-gray-300 mb-2">{product.description}</p>
                                        <p className="font-bold">Price: ${product.price}</p>
                                        <button
                                            onClick={() => handleRemoveCart(product.product_id)}
                                            className="absolute top-0 right-0 text-red-500 hover:text-red-700"
                                            title="Remove from Cart"
                                        >
                                            <AiOutlineClose size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            
                            <button 
                                onClick={handlePurchase}
                                className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg font-bold"
                            >
                                Purchase
                            </button>
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
                            {wishlist.map(product => (
                                <div key={product.product_id} className="relative border border-gray-700 rounded-lg p-4">
                                    <div className="mb-4">
                                        <img 
                                            src={product.product_image} 
                                            alt={product.product_title}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{product.product_title}</h3>
                                    <p className="text-gray-300 mb-2">{product.description}</p>
                                    <p className="font-bold">Price: ${product.price}</p>
                                    <button
                                        onClick={() => handleRemoveWishlist(product.product_id)}
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

            {/* Payment Success Modal */}
            {showPaymentSuccess && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-slate-800 p-8 rounded-lg max-w-md w-full">
                        <h3 className="text-2xl font-bold mb-4 text-green-400">Payment Successful</h3>
                        <p className="mb-6">Thanks for purchasing.</p>
                        <p className="text-lg font-bold mb-6">Total: ${calculateTotal()}</p>
                        <button
                            onClick={handleClosePaymentSuccess}
                            className="w-full bg-sky-600 hover:bg-sky-700 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;