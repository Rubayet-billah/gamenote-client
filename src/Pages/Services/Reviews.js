import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import AddReview from './AddReview';

const Reviews = ({ service }) => {
    const { user } = useContext(AuthContext)

    const query = service.name;
    // console.log(query)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/?service=${query}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [query])

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