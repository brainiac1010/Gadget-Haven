// Utility/addToDb.js
import { toast } from "react-toastify";

// --- CART ---
const getStoredCart = () => {
    const storedListStr = localStorage.getItem('addTo-cart');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredCart = (id) => {
    const storedList = getStoredCart();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('addTo-cart', JSON.stringify(storedList));
        toast("Item add in your Cart")
    }
};

const removeFromStoredCart = (id) => {
    const storedList = getStoredCart();
    const updatedList = storedList.filter(itemId => itemId !== id);
    localStorage.setItem('addTo-cart', JSON.stringify(updatedList));
};

const clearCart = () => {
    localStorage.removeItem('addTo-cart'); // Changed from 'shopping-cart' to 'addTo-cart' to match your other cart functions
};

// --- WISHLIST ---
const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('wishlist');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

const addToStoredWishlist = (id) => {
    const storedList = getStoredWishlist();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedList));
        toast("Item add in your wishlist")
    }
};

const removeFromStoredWishlist = (id) => {
    const storedList = getStoredWishlist();
    const updatedList = storedList.filter(itemId => itemId !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedList));
};

export {
    addToStoredCart,
    getStoredCart,
    removeFromStoredCart,
    clearCart,
    addToStoredWishlist,
    getStoredWishlist,
    removeFromStoredWishlist
};