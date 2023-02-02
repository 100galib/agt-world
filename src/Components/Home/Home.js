import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import PostSection from '../Post-section/PostSection';
import TopNavbar from '../Top-Navbar/TopNavbar';

const Home = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <PostSection></PostSection>
        </div>
    );
};

export default Home;