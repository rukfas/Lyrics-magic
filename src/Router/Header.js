import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header>
                    <nav>
                        <ul>
                            <Link to='/' ><li>Home</li></Link>
                            <Link to='/About'>  <li>  About  </li></Link>
                            <li>Top List </li>
                        </ul>
                    </nav>
                </header>
            </div>

        )
    }
}

export default Header;