import React from 'react';
import logo from '../img/logo.com.png'
class Header extends React.Component{
    render() {
        return(
            <header>
                <div className='container'>
                    <div className='header'>
                        <img src={logo}/>
                        <div className='nav'>
                            <a href='#'>О нас</a>
                            <a href='#'>Контакты</a>
                            <a href='#'>Вход</a>

                        </div>
                    </div>

                </div>

            </header>
        )

    }
}

export default Header;