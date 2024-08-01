import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className='header-face'>
                <img className="header-face__image" src='/images/todo_app.jpg' alt='My Face' />
            </div>
            <div className='header-title'>
                <h1 className="header-title__name">Шарафутдинов Ренат Русланович</h1> 
                <h2 className="header-title__job">Frontend разработчик</h2> 
            </div>
        </div>
    );
}

export default Header;