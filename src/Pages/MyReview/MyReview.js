import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myreview/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
            })
    }, [user?.email, update])
    if (myReviews.length === 0) {
        return (
            <div className='my-5 text-center'>
                <h1 className='text-3xl md:text-5xl'>You have no previous reviews</h1>
            </div>
        );
    }
    return (
        <div>
            {
                myReviews.map(rvw => <MyReviewRow key={rvw._id} review={rvw} update={update} setUpdate={setUpdate} />)
            }
        </div>
    );
};

export default MyReview;