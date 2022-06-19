import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import AppBanner from '../../AppBanner/AppBanner';
import marvelServices from '../../../services/marvelServices';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import Loading from '../../spinner/Spinner';
import './singleComicsPage.scss';
import {IComicsType, IComicsTypeProps} from '../../../@types/characterTypes';

const SingleComicsPage: React.FC = () => {
    const [comic, setComic] = useState<IComicsType | null>(null);
    const {comicId} = useParams<{ comicId: string }>();
    const {loading, error, getComicForId, resetError} = marvelServices();

    const updateComic = () => {
        resetError();
        if (comicId)  {
            getComicForId(comicId).then(onLoaded);
        }
    };

    const onLoaded = (comic: IComicsType) => {
        setComic(comic);
    };

    useEffect(() => {
        updateComic();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[comicId]);

    const load = loading ? <Loading /> : null;
    const err = error ? <ErrorMessage /> : null;
    const content = !loading && !error && comic ? <View comic={comic} /> : null;

    return (
        <>
            <AppBanner/>
            {load}
            {err}
            {content}
        </>
    );
};

export default SingleComicsPage;

const View = ({comic}: IComicsTypeProps) => {
    const {thumbnail, title, description, price, pageCount, language} = comic;
    return (
        <div className="comic-page">
            <img src={thumbnail} alt="comic.thumbnail"/>
            <div>
                <h2 className="comic-page-name">{title}</h2>
                <p className="comic-page-descr">{description}</p>
                <p className="comic-page-descr">{pageCount}</p>
                <p className="comic-page-descr">Language: {language}</p>
                <div className="comic-page-price">{price}</div>
            </div>
            <Link className="comic-page-back" to="/comics" >
                Back to all
            </Link>
        </div>
    );
};