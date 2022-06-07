import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";

const Header:React.FC = () => {
    return (
        <header className="header">
            <h1>
                <Link to='/' className='title'>
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className='header-links'>
                <ul>
                    <li><Link to="/">Characters</Link></li>
                     /
                    <li><Link to="/comics">Commits</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;