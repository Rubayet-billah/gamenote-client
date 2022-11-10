import React from 'react';

const Pricing = () => {
    return (
        <div className='my-5 grid grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='bg-base-200 shadow-md p-5 text-center rounded-lg'>
                <p>Free</p>
                <h2 className='text-3xl text-primary'>$ 0.00 <span className='text-base'>/mon</span></h2>
                <div className='text-sm'>
                    <p>No subscription</p>
                    <p>100 previews</p>
                    <p>limited offers</p>
                </div>
                <button className='btn btn-primary btn-sm mt-5'>Free</button>
            </div>
            <div className='bg-base-200 shadow-md p-5 text-center rounded-lg'>
                <p>Premium</p>
                <h2 className='text-3xl text-primary'>$ 1.99 <span className='text-base'>/mon</span></h2>
                <div className='text-sm'>
                    <p>6 month subscription</p>
                    <p>500 previews</p>
                    <p>Event offers</p>
                    <p>Special offers</p>
                </div>
                <button className='btn btn-primary btn-sm mt-5'>Buy Now</button>
            </div>
            <div className='bg-base-200 shadow-md p-5 text-center rounded-lg'>
                <p>ADVANCE</p>
                <h2 className='text-3xl text-primary'>$ 4.99 <span className='text-base'>/mon</span></h2>
                <div className='text-sm'>
                    <p>Lifetime subscription</p>
                    <p>All previews</p>
                    <p>Event offers</p>
                    <p>Special offers</p>
                    <p>Lifetime support</p>
                </div>
                <button className='btn btn-primary btn-sm mt-5'>Buy Now</button>
            </div>
        </div>
    );
};

export default Pricing;