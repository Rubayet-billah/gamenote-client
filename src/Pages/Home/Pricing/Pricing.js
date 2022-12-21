import React from 'react';

const Pricing = () => {
    return (
        <div className='my-5 grid md:grid-cols-3 gap-12'>
            <div className='bg-base-200 shadow-md p-5 py-12 text-center rounded-lg'>
                <p>Free</p>
                <h2 className='text-3xl text-primary font-bold'>$ 0.00 <span className='text-base'>/mon</span></h2>
                <div className='my-4'>
                    <p>No subscription</p>
                    <p>100 previews</p>
                    <p>limited offers</p>
                </div>
                <button className='btn btn-primary btn-sm md:btn-md mt-5'>Free</button>
            </div>
            <div className='bg-gray-800 text-white shadow-md p-5 py-12 text-center rounded-lg'>
                <p>Premium</p>
                <h2 className='text-3xl font-bold'>$ 1.99 <span className='text-base'>/mon</span></h2>
                <div className='my-4'>
                    <p>6 month subscription</p>
                    <p>500 previews</p>
                    <p>Event offers</p>
                    <p>Special offers</p>
                </div>
                <button className='btn btn-primary btn-sm md:btn-md mt-5'>Buy Now</button>
            </div>
            <div className='bg-base-200 shadow-md p-5 py-12 text-center rounded-lg'>
                <p>Advance</p>
                <h2 className='text-3xl text-primary font-bold'>$ 4.99 <span className='text-base'>/mon</span></h2>
                <div className='my-4'>
                    <p>Lifetime subscription</p>
                    <p>All previews</p>
                    <p>Event offers</p>
                    <p>Special offers</p>
                    <p>Lifetime support</p>
                </div>
                <button className='btn btn-primary btn-sm md:btn-md'>Buy Now</button>
            </div>
        </div>
    );
};

export default Pricing;