import React from 'react';
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="header">
            <SearchBar/>
            <span>Добро Пожаловать</span>
            <button>Добавить пользователя</button>
        </div>
    );
};

export default Header;