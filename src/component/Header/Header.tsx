import React from 'react';
import './Header.scss';
import {Link, NavLink} from 'react-router-dom';

const Header:React.FC = () => {
    return (
        <header className="header">
            <h1>
                <Link to="/" className="title">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="header-links">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>({
                                color:  isActive ? '#9F0013' : 'inherit'
                            })}
                        >
                            Characters
                        </NavLink>
                    </li>
                     /
                    <li>
                        <NavLink
                            to="/comics"
                            style={({ isActive }) =>({
                                color:  isActive ? '#9F0013' : 'inherit'
                            })}
                        >
                            Commits
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;