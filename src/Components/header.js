import React, { Component } from 'react';
import logo from '../Images/logo.png';
class Header extends Component {
    render() {
        return (
            <div className="top-nav">
                <ul className= "menu">
                    <li>Mens</li>
                    <li>Womens</li>
                    <li>New In</li>
                    <li>Sport</li>
                </ul>

                <img src={logo}/>
                
                <div className="menu-container">
                    <div className="search-bar">
                        <input name="search" type="search" placeholder="search"/>
                    </div>
                        <div className="util-bar">
                            <ul className= "util-menu">
                                <li>My Account</li>
                                <li>Wish List </li>
                                <li>USD $0.000</li>
                            </ul>
                        </div>
                    </div>
                
                


            </div>
        )
    }
}

export default Header;