import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Game = ({ game }) => {

    const handleClick = () => {

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <div className="foo">
                            <PhotoView src='https://placeimg.com/400/225/arch'>
                                <img src='https://placeimg.com/400/225/arch' alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{game.name}</h2>
                    <p>{game.details.length > 100 ? <>{game.details.slice(0, 99)}...</> : game.details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${game._id}`}><button className="btn btn-sm btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;