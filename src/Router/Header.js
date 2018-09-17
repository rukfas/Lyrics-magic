import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header>
                    <nav>
                        <ul>
                            <NavLink className="tonbut" activeStyle={{ fontSize: '1.6em' }} to='/' exact >Home</NavLink>
                            <NavLink to='/About' className='tonbut' activeStyle={{ fontSize: '1.6em' }}>    About  </NavLink>
                            <li>Top List </li>
                        </ul>
                    </nav>
                </header>
            </div>

        )
    }
}

export default Header;