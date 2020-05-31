import React from 'react';
import Nav from '../components/Nav';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
        </>
    );
};

export default Layout;
