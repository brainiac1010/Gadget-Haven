import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
                <h2 className='text-5xl font-bold text-center pt-9 pb-9'>
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h2>
                <p className='text-center'>
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to <br /> the coolest accessories, we have it all!
                </p>
                <div className='flex justify-center mt-6 pb-4'>
                    <button className='px-6 py-3 rounded-full bg-white text-sky-500 font-bold cursor-pointer'>
                        Shop Now
                    </button>
                </div>
                <div className='max-w-3xl pb-6 mx-auto'>
                    <img className='w-full rounded-xl' src="../../../public/assets/banner.jpg" alt="Banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
