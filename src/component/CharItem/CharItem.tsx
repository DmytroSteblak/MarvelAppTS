import React, {useState} from 'react';
import './CharItem.scss'
import cn from 'classnames';
import {ItransformCharacterProps} from "../../@types/characterTypes";

const CharItem: React.FC<ItransformCharacterProps> = ({character, setActive, active}) => {

    const toggleActiveItem = () => {
        setActive?.(character.id)
    }

    return (
        <>
            <div onClick={toggleActiveItem} className={cn("char_item", {"active" : active === character.id})}>
                <img src={character.thumbnail} alt=""/>
                <div className="char_item_name">
                    {character.name}
                </div>
            </div>
        </>

    );
};

export default CharItem;