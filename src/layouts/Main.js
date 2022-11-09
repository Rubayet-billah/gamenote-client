import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <section className=' min-h-screen flex flex-col justify-between'>
                <main className=''>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </section>
        </div>
    );
};

export default Main;