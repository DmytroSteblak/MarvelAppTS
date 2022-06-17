import React, {useEffect, useState} from 'react';

import './CharInfo.scss';
import Skeleton from '../skeleton/Skeleton';
import Loading from '../spinner/Spinner';
import marvelServices from '../../services/marvelServices';
import {
    ICharInfoProps,
    ItransformCharacter,
    ItransformCharacterProps
} from '../../@types/characterTypes';
import ErrorMessage from '../errorMessage/ErrorMessage';

const CharInfo: React.FC<ICharInfoProps> = ({active}) => {
    const [char, setChar] = useState<ItransformCharacter | null>(null);
    const {loading, error, getCharacterForId} = marvelServices();

    useEffect(() => {
        if (active) {
            getCharacterForId(active).then(char => setChar(char));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    const skeleton = !char && !loading && !error ? <Skeleton /> : null;
    const load = loading ? <Loading /> : null;
    const Errored = error ? <ErrorMessage /> : null;
    const content = (!error && !loading && char) ? <View character={char}/> : null;


    return (
        <div className="char_info">
            {skeleton}
            {load}
            {Errored}
            {content}
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
                    );
                })}
            </ul>
        </div>}
    </>
);

export default CharInfo;