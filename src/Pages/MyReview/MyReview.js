import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    useTitle('My Reviews')
    const [myReviews, setMyReviews] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myreview/?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessKey')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
            })
    }, [user?.email, update])
    if (myReviews.length === 0) {
        return (
            <div className="hero h-96 md:min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">No reviews were added</h1>
                    </div>
                </div>
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