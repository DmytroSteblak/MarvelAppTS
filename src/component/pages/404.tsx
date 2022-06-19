import React from 'react';

import {Link, useNavigate } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';

const Page404: React.FC = () => {

    const history = useNavigate ();

    return (
        <div>
            <ErrorMessage />
            <p style={{textAlign: 'center', fontSize: '32px', fontWeight: 'bold'}}>Such page doesnt exist</p>
            <Link onClick={() => history(-1)} style={{display: 'block', textAlign: 'center', marginTop: '24px', fontSize: '24px' }} to={'/'}>
                Back to main page
            </Link>
        </div>
    );
};

export default Page404;