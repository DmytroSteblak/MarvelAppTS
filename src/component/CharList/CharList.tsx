import React from 'react';
import CharItem from "../CharItem/CharItem";
import './CharList.scss'

const CharList: React.FC = () => {
    return (
        <div className="char_list">
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
        </div>
    );
};

export default CharList;