import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import AddReview from './AddReview';

const Reviews = ({ service }) => {
    const { user } = useContext(AuthContext)



    return (
        <div>
            {
                user?.uid ? <AddReview service={service} /> : <>
                    <Link to='/login' className='btn btn-primary'>Please login to add review</Link>
                </>
            }
        </div>
    );
};

export default Reviews;