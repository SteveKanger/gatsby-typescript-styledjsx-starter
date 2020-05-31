import React from 'react';
import { Link } from 'gatsby';

const Nav: React.FC = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/second">Second</Link>
            <style jsx>{`
                nav :global(a) {
                    margin: 0 5px;
                }
            `}</style>
        </nav>
    );
};

export default Nav;
