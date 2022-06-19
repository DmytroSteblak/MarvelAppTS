import React from 'react';

import ComicsList from '../ComicsList/ComicsList';
import AppBanner from '../AppBanner/AppBanner';

const ComicsPage: React.FC = () => {
    return (
        <>
            <AppBanner/>
            <ComicsList/>
        </>
    );
};

export default ComicsPage;