import React, {useEffect, useState} from 'react';
import './CharInfo.scss'
import Skeleton from '../skeleton/Skeleton';
import marvelServices from "../../services/marvelServices";
import {ItransformCharacter, ItransformCharacterProps} from "../../@types/characterTypes";

interface CharInfoProps {
    active: number | null;
}

const CharInfo: React.FC<CharInfoProps> = ({active}) => {
    const [char, setChar] = useState<ItransformCharacter | null>(null)
    const {loading, error, getCharacterForId} = marvelServices();

    useEffect(() => {
        if (active) {
            getCharacterForId(active).then(char => setChar(char))
        }
    }, [active])
    

    return (
        <div className="char_info">
            {!char ? <Skeleton/> : <View character={char}/>}
        </div>
    );
};

const View: React.FC<ItransformCharacterProps> = ({character}) => (
    <>
        <div className="char_basics">
            <img src={character.thumbnail} alt="img"/>
            <div>
                <div className="char_name">
                    {character.name}
                </div>
                <div className="char_buttons">
                    <a href={character.homepage} target="blank" className="button button_main">
                        <div className="inner">HOMEPAGE</div>
                    </a>
                    <a href={character.wiki} target="blank" className="button button_secondary">
                        <div className="inner">WIKI</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="char_description">
            {character.description}
        </div>
        {character.comics.length === 0 ? <span>No Comics</span> : <div>
            <span>Comics:</span>
            <ul>
                {character.comics.slice(0, 5).map((item: any, id: number) => {
                    return (
                        <li key={id} className="char_comic">
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>}
    </>
)

export default CharInfo;