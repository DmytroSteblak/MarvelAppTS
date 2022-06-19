import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import Header from '../Header/Header';

const Main = React.lazy(() => import('../pages/main'));
const SingleComicsPage = React.lazy(() => import('../pages/SingleComicsPage/singleComicsPage'));
const ComicsPage = React.lazy(() => import('../pages/comicsPage'));
const Page404 = React.lazy(() => import('../pages/404'));

function App(): JSX.Element {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Suspense fallback={<Spinner />} >
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="comics" element={<ComicsPage />} />
                        <Route path="/comics/:comicId" element={<SingleComicsPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}

export default App;
