import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Game from '../Game/Game';
import homeBanner from '../../assets/homeBanner.png'
import Banner from './Banner';
import useTitle from '../../hooks/useTitle';
import Statistics from './Statistics';
import Pricing from './Pricing/Pricing';

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
            <hr className='my-5' />
            <h2 className='text-4xl text-center'>Get Your Desire Game Top-Up</h2>
            <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {
                    games.map(gm => <Game
                        key={gm._id}
                        game={gm}
                    />)
                }
            </main>
            <Link to='/services'><button className='btn btn-sm btn-outline block w-fit mx-auto my-5'>See All Services</button></Link>
            <hr className='my-5' />
            <Statistics></Statistics>
            {/* pricing  */}
            <hr className='my-5' />
            <section>
                <h2 className='text-4xl text-center'>Get Premium Services</h2>
                <Pricing></Pricing>
            </section>
        </div>
    );
};

export default Home;