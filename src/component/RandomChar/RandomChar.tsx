import React, {useEffect, useState} from 'react';
import mjolnir from '../../resources/img/mjolnir.png';
import Loading from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {
    ItransformCharacter,
    ItransformCharacterProps
} from '../../@types/characterTypes';
import './RandomChar.scss';
import marvelServices from "../../services/marvelServices";


const RandomChar = () => {
    const [character, setCharacter] = useState<ItransformCharacter | null>(null);

    const {loading, error, getCharacterForId, resetError} = marvelServices();

    const onLoaded = (items: ItransformCharacter) => {
        setCharacter(items)
    }

    const updateChar = () => {
        resetError()
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getCharacterForId(id).then(onLoaded)
    }

    useEffect(() => {
        updateChar()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const load = loading ? <Loading /> : null;
    const err = error ? <ErrorMessage /> : null;
    const content = !(loading || error || !character) ? <View character={character} /> : null;

    return (
        <div className='randomchar'>
            {err}
            {load}
            {content}
            <div className="randomchar_static">
                <p className="randomchar_title">
                    Random character for today!
                    Do you want to get to know him better?
                </p>
                <p className="randomchar_title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button_main">
                    <div className="inner">TRY IT</div>
                </button>
                <img src={mjolnir} className='randomchar_decoration' alt="img"/>
            </div>
        </div>
    );
};

const View:React.FC<ItransformCharacterProps> = ({character }) => {
    return (
        <div className="randomchar_block">
            <img alt='img' src={character.thumbnail} className="randomchar_img"/>
            <div className="randomchar_info">
                <div className="randomchar_name">
                    {character?.name}
                </div>
                <div className="randomchar_deskr">
                    {character?.description}
                </div>
                <div className="randomchar_links">
                    <a target='blank' href={character.homepage} className="button button_main">
                        <div className="inner">HOMEPAGE</div>
                    </a>
                    <a target='blank' href={character.wiki} className="button button_secondary">
                        <div className="inner">WIKI</div>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default RandomChar;