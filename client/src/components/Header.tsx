import React from 'react';
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="header">
            <SearchBar/>
            <span>User panel</span>
            <button>Добавить</button>
        </div>
    );
};

export default Header;