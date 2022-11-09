import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import AddReview from './AddReview';
import ReviewRow from './ReviewRow';

const Reviews = ({ service }) => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [update, setUpdate] = useState(false)

    console.log(update)

    const query = service.name;
    // console.log(query)


    useEffect(() => {
        fetch(`https://assignment-11-server-puce.vercel.app/reviews/?service=${query}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [query, update])

    return (
        <div>
            <div>
                {
                    reviews?.map(rvw => <ReviewRow
                        key={rvw._id}
                        review={rvw}
                    />)
                }

            </div>
            <div>
                {
                    user?.uid ? <AddReview service={service} update={update} setUpdate={setUpdate} /> : <>
                        <Link to='/login'><button className='btn btn-primary block mx-auto my-4'>Please login to add review</button></Link>
                    </>
                }
            </div>
        </div >
    );
};

export default Reviews;