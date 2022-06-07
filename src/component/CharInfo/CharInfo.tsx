import React from 'react';
import './CharInfo.scss'
import thor from '../../resources/img/thor.jpeg';

const CharInfo = () => {
    return (
        <div className="char_info">
            <div className="char_basics">
                <img src={thor} alt="img"/>
                <div>
                    <div className="char_name">
                        NAME_Item
                    </div>
                    <div className="char_buttons">
                        <a href="html-encoding-sniffer" className="button button_main">
                            <div className="inner">HOMEPAGE</div>
                        </a>
                        <a href="html-encoding-sniffer" className="button button_secondary">
                            <div className="inner">WIKI</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aut debitis error, numquam perferendis possimus quaerat quam veniam? Asperiores culpa delectus dolor eos possimus repellat sequi soluta unde veniam.
            </div>
            <span>Comics:</span>
            <ul>
                <li className="char_comic">
                    Avengers (1963) #264
                </li>
                <li className="char_comic">
                    CHAOS WAR: AVENGERS TPB (Trade Paperback)
                </li>
                <li className="char_comic">
                    Chaos War: Dead Avengers (2010) #1
                </li>
                <li className="char_comic">
                    Avengers (1963) #264
                </li>
                <li className="char_comic">
                    CHAOS WAR: AVENGERS TPB (Trade Paperback)
                </li>
                <li className="char_comic">
                    Chaos War: Dead Avengers (2010) #1
                </li>
            </ul>
        </div>
    );
};

export default CharInfo;