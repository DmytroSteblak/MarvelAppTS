export interface ICharacterData {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: any;
    resourceURI: string;
    comics: any;
    series: object;
    stories: object;
    events: object;
    urls: any;
}

export interface ItransformCharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: any;
    homepage: string;
    wiki: string;
    comics: any;
}

export interface ItransformCharacterProps {
    character: ItransformCharacter;
    setActive?: (id: number) => void;
    active?: number | null;
}

export interface ImarvelServices {
    loading: boolean;
    error: null | string;
    getAllCharacter: (offset: number) => Promise<ItransformCharacter[]>;
    getCharacterForId: (id: number) => Promise<ItransformCharacter>;
    getAllComics: (offset: number) => Promise<any>;
    getComicForId: (id: string) => Promise<any>;
    resetError: any;
}

export interface ICharListProps {
    setSelectId: (active: number) => void;
    active: number | null;
}

export interface ICharInfoProps {
    active: number | null;
}

export interface IComicsType {
    id: number;
    title: string;
    description: string;
    pageCount: string;
    thumbnail: string;
    language: string;
    price: string;
}

export interface IComicsTypeProps {
    comic: IComicsType;
}
