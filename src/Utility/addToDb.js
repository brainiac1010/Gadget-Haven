// addToDb.js

// Cart Functions
const getStoredCart = () => {
    const storedListStr = localStorage.getItem('addTo-cart');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

const addToStoredCart = (id) => {
    const storedList = getStoredCart();

    if (storedList.includes(id)) {
        console.log(id, "already exists in the cart");
    } else {
        storedList.push(id);
        localStorage.setItem('addTo-cart', JSON.stringify(storedList));
        console.log(id, "added to the cart");
    }
};

// Wishlist Functions
const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('wishlist');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

const addToStoredWishlist = (id) => {
    const storedList = getStoredWishlist();

    if (storedList.includes(id)) {
        console.log(id, "already exists in the wishlist");
    } else {
        storedList.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedList));
        console.log(id, "added to the wishlist");
    }
};

export { addToStoredCart, addToStoredWishlist };
