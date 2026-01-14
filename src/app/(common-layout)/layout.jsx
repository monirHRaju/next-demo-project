import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

import React from 'react';

const HomeLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;