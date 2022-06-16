import React, {useEffect, useState} from 'react';
import CharItem from "../CharItem/CharItem";
import './CharList.scss'
import marvelServices from "../../services/marvelServices";
import {ItransformCharacter,} from "../../@types/characterTypes";
import Loading from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

interface ICharListProps {
    setSelectId: any;
    active: any;
}

const CharList: React.FC<ICharListProps> = ({active, setSelectId}) => {
    const [characters, setCharacters] = useState<ItransformCharacter[]>([]);
    const [offset, setOffset] = useState<number>(1552);
    const [loadNewItem, setNewItem] = useState<boolean>(false);
    const [lastItem, setLastItem] = useState<boolean>(false);
    // const [active, setActive] = useState<number>(0);

    const {loading, error, getAllCharacter} = marvelServices();

    const getItemsList = (offset: number, init?: boolean) => {
        init ? setNewItem(false) : setNewItem(true)

        setOffset(offset + 9)
        getAllCharacter(offset).then(onLoaded)
    }

    const onLoaded = (items: ItransformCharacter[]) => {
        if (items.length < 9) {
            setLastItem(true)
        }
        setCharacters(prevState => [...prevState, ...items])
        setNewItem(false)
    }

    useEffect(() => {
        getItemsList(offset, true)
    }, [])

    const load = loading && !loadNewItem ? <Loading/> : null;
    const err = error ? <ErrorMessage/> : null;
    const content = (!loading || !err ?
        characters.map(item => (
            <CharItem setActive={setSelectId} key={item.id} active={active} character={item}/>
        )) : null)

    return (
        <div>
            {load}
            {err}
            <div className="char_list">
                {content}
            </div>
            <button
                disabled={loadNewItem}
                style={lastItem ? {display: 'none'} : {display: 'block'}}
                onClick={() => getItemsList(offset)}
                className="button button_main"
            >
                <div className="inner">Load More</div>
            </button>
        </div>
    );
};

export default CharList;