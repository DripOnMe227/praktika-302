import React from 'react';
import Search from './Search';

const Header = () => {
    return (
        <div className="header">
            <Search />
            <span>MAX</span>
            <button>add</button>
        </div>
    );
};

export default Header;