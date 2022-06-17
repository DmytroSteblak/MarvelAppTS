import React, {useState} from 'react';

import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';

const Main: React.FC = () => {

    const [selectId, setSelectId] = useState<number | null>(null);

    return (
        <>
            <RandomChar />
            <div className="char_content">
                <CharList active={selectId} setSelectId={setSelectId} />
                <CharInfo active={selectId} />
            </div>
        </>
    );
};

export default Main;