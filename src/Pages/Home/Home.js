import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Game from '../Game/Game';
import homeBanner from '../../assets/homeBanner.png'
import Banner from './Banner';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    const [games, setGames] = useState([])
    const size = 3;
    useTitle('Home')


    useEffect(() => {
        fetch(`https://assignment-11-server-puce.vercel.app/services/?size=${size}`)
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })
    }, [])
    return (
        <div>
            <header className='relative'>
                {/* <img src={homeBanner} className='rounded' alt="" /> */}
                <Banner></Banner>
            </header>
            <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {
                    games.map(gm => <Game
                        key={gm._id}
                        game={gm}
                    />)
                }
            </main>

            <Link to='/services'><button className='btn btn-sm btn-outline block w-fit mx-auto my-5'>See All Services</button></Link>
        </div>
    );
};

export default Home;