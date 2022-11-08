import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewRow = ({ review }) => {
    const { serviceName, reviewer, email, image, description, ratings } = review;
    // console.log(review)
    return (
        <div>
            <div className='border rounded p-3 mt-3'>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full' src={image} alt="" />
                    <div className='ml-2'>
                        <h3 className='text-xl font-bold'>{reviewer}</h3>
                        <p>{email}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='w-3/4'>{description}</p>
                    <p className='flex items-center'>{ratings} <FaStar className='text-yellow-400' /></p>
                </div>
            </div>
        </div>
    );
};

export default ReviewRow;