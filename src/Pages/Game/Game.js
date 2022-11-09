import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Game = ({ game }) => {
    const { _id, name, img, credit, price, seller, details } = game

    const handleClick = () => {

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <div className="foo">
                            <PhotoView src={img}>
                                <img src={img} alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Item: <span className='font-bold'>{credit}</span></p>
                    <p>{details.length > 100 ? <>{details.slice(0, 99)}...</> : details}</p>
                    <div className="card-actions justify-between items-end">
                        <div>

                            <p className='text-xl'>Price: <span className='font-bold text-primary'>${price}</span></p>
                        </div>
                        <Link to={`/services/${_id}`}><button className="btn btn-sm btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;