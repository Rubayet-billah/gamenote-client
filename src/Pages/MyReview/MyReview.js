import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreview/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
            })
    }, [user?.email])
    return (
        <div>
            {
                myReviews.map(rvw => <MyReviewRow key={rvw._id} review={rvw} />)
            }
        </div>
    );
};

export default MyReview;