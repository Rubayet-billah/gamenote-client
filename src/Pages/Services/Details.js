import React from 'react';

const Details = ({ service }) => {
    const { name, img, price, credit, details, duration, seller } = service;
    console.log(service)
    return (
        <div className='md:flex my-5 border '>
            <img className='md:w-1/2 rounded-lg' src={img} alt="" />
            <div className=" md:w-1/2 px-3 py-4">
                <h2 className='text-3xl text-center'>{name}</h2>
                <p>{details}</p>
                <div className='flex justify-between items-end'>
                    <p className='text-xl text-primary'>{credit}</p>
                    <p>Seller: {seller}</p>
                </div>
                <div className='flex justify-between items-end'>
                    <p className='text-xl text-primary font-bold'>${price}</p>
                    <p>Delivery: {duration}min</p>
                </div>
                <button className='btn btn-sm lg:btn-md btn-primary mt-3 ml-auto block'>Purchase</button>
            </div>
        </div>
    );
};

export default Details;