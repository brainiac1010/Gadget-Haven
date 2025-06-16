import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCart } from '../../Utility/addToDb';

const CartList = () => {

   const allItems = useLoaderData();
   useEffect(()=>{
    const storedCartList = getStoredCart();
    const 
    console.log(storedCartList,allItems)
   },[])
    return (
        <div>
            <h3 className="text-3xl my-8">Cart List</h3>
            <Tabs>
                <TabList>
                    <Tab>Cart</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Cart Totals: 999.99</h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>WishList</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CartList;