import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import AddReview from './AddReview';
import ReviewRow from './ReviewRow';

const Reviews = ({ service }) => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    const query = service.name;
    // console.log(query)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/?service=${query}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [query])

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews?.map(rvw => <ReviewRow
                                    key={rvw._id}
                                    review={rvw}
                                />)
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
            <div>
                {
                    user?.uid ? <AddReview service={service} /> : <>
                        <Link to='/login' className='btn btn-primary'>Please login to add review</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Reviews;