import React from 'react';
import RandomChar from "../RandomChar/RandomChar";
import CharList from "../CharList/CharList";
import CharInfo from "../CharInfo/CharInfo";

const Main: React.FC = () => {
    return (
        <>
            <RandomChar />
            <div className="char_content">
                <CharList />
                <CharInfo />
            </div>

        </>
    );
};

export default Main;