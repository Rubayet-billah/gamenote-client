import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Game from '../Game/Game';

const Services = () => {
    const games = useLoaderData();
    useTitle('Services')

    return (
        <div className='my-5'>
            <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {
                    games.map(gm => <Game
                        key={gm._id}
                        game={gm}
                    />)
                }
            </main>
        </div>
    );
};

export default Services;