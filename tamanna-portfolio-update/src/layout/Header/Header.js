import React from 'react';
import './Header.scss';
import logo from '../../assets/Images/logo.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerMain">
                <div className="headerContainer">
                    <div className="logoPart">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navLinkHeaders">
                        <ul>
                            <li >
                                home
                            </li>
                        </ul>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Header;