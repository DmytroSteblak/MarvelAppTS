import UseHttpHook from '../hooks/http.hook';
import {ImarvelServices, ItransformCharacter, ICharacterData} from '../@types/characterTypes'


const marvelServices = (): ImarvelServices => {
    const _baseUrl = 'https://gateway.marvel.com:443/v1/public/'
    const _apiKey = '53eb2718fe31a6cc31b35d4b510abb3b'
    const _baseOffset = 0

    const {response, error, loading, resetError} = UseHttpHook();

    const getAllCharacter = async (offset = _baseOffset): Promise<ItransformCharacter[]> => {
        const characters =  await response(`${_baseUrl}characters?limit=9&offset=${offset}&apikey=${_apiKey}`)
        return characters.map(_transformCharacter)
    }

    const getCharacterForId = async (id: number): Promise<ItransformCharacter> => {
        const result = await response(`${_baseUrl}characters/${id}?apikey=${_apiKey}`)
        return _transformCharacter(result[0])
    }


    const _transformCharacter = (char: ICharacterData): ItransformCharacter => {
        return ({
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        })
    }

    return {loading, error, getAllCharacter, getCharacterForId, resetError}
}

export default marvelServices;