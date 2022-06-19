import React from 'react';

import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

import './AppBanner.scss';


const AppBanner: React.FC = () => {
    return (
        <div className="app-banner">
            <img src={avengers} alt="avengers"/>
            <div className="app-banner-content">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="avengers"/>
        </div>
    );
};

export default AppBanner;