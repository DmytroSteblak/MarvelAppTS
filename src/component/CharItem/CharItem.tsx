import React from 'react';
import thor from '../../resources/img/thor.jpeg'
import './CharItem.scss'

const CharItem:React.FC = () => {
    return (
        <div className="char_item">
            <img src={thor} alt=""/>
            <div className="char_item_name">
                NameChar
            </div>
        </div>
    );
};

export default CharItem;