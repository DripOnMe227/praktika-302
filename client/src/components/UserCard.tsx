import React from 'react';

const UserCard = () => {
    return (
        <div className="user_card">
            <div className="info">
                <span>Иван Петров</span>
                <span>user@email.com</span>
                <span>+79992020057</span>
                <span>директор</span>
            </div>
            <div className="pc_info">
                <div className="left_info">
                    <span>motherboard: Asus</span>
                    <span>CPU: Ryzen7 3700x</span>
                    <span>GPU: GTX 2070super</span>
                </div>
                <div className="right_info">
                    <span>RAM: 32gb</span>
                    <span>keyboard: varmilo</span>
                    <span>monitor: zowie</span>
                </div>
            </div>
            <div className="buttons">
                <button className="update_button">Обновить</button>
                <button className="delete_button">Удалить</button>
            </div>
        </div>
    );
};

export default UserCard;