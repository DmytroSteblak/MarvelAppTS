import React from 'react';
import thor from '../../resources/img/abyss.jpg';
import mjolnir from '../../resources/img/mjolnir.png'
import './RandomChar.scss'

const RandomChar = () => {
    return (
        <div className='randomchar'>
            <div className="randomchar_block">
                <img alt='img' src={thor} className="randomchar_img"/>
                <div className="randomchar_info">
                    <div className="randomchar_name">
                        Name
                    </div>
                    <div className="randomchar_deskr">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus est in iure
                        obcaecati suscipit vero.
                    </div>
                    <div className="randomchar_links">
                        <a href="html-encoding-sniffer" className="button button_main">
                            <div className="inner">HOMEPAGE</div>
                        </a>
                        <a href="html-encoding-sniffer" className="button button_secondary">
                            <div className="inner">WIKI</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="randomchar_static">
                <p className="randomchar_title">
                    Random character for today!
                    Do you want to get to know him better?
                </p>
                <p className="randomchar_title">
                    Or choose another one
                </p>
                <a href="html-encoding-sniffer" className="button button_main">
                    <div className="inner">TRY IT</div>
                </a>
                <img src={mjolnir} className='randomchar_decoration' alt="img"/>
            </div>
        </div>
    );
};

export default RandomChar;