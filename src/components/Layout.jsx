import React from 'react';

// import '../styles/components/Layout.scss';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
                { children }
            <Footer />
        </div>
    )
}

export default Layout;