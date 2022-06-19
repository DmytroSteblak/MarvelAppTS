import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Loading from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './ComicsList.scss';
import marvelServices from '../../services/marvelServices';
import {IComicsType} from '../../@types/characterTypes';

const ComicsList:React.FC = () => {

    const [comics, setComics] = useState<IComicsType[]>([]);
    const [offset, setOffset] = useState(0);
    const [loadNewItem, setLoadNewItem] = useState<boolean>(false);
    const [lastItem, setLastItem] = useState<boolean>(false);

    const {loading, error, getAllComics} = marvelServices();

    const getComicsList = (offs: number, init?: boolean) => {
        init ? setLoadNewItem(false) : setLoadNewItem(true);
        getAllComics(offs).then(onLoaded);
        setOffset(prev => prev + 8);
    };

    const onLoaded = (items: IComicsType[]) => {
        if (items.length < 8) {
            setLastItem(true);
        }
        setComics(prevState => [...prevState, ...items]);
        setLoadNewItem(false);
    };

    useEffect(() =>{
        getComicsList(offset, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderComics = () => {
        const item = comics?.map(item => {
            return (
                <li key={item.id} className="comics-item">
                    <Link to={`${item.id}`}>
                        <img src={item.thumbnail} alt="comic"/>
                        <div className="comics-item-title">{item.title}</div>
                        <div className="comics-item-price">{item.price}</div>
                    </Link>
                </li>
            );
        });
        return (
            <ul className="comics-grid">
                {item}
            </ul>
        );
    };

    const load = loading ? <Loading /> : null;
    const errored = error ? <ErrorMessage /> : null;
    const content = !(loading && error && !comics) ? renderComics() : null;

    return (
        <div className="comics-list">
            {load}
            {errored}
            {content}
            <button
                disabled={loadNewItem}
                style={lastItem ? {display: 'none'} : {display: 'block'}}
                onClick={() => getComicsList(offset)}
                className="button button_main"
            >
                <div className="inner">Load More</div>
            </button>
        </div>
    );
};

export default ComicsList;