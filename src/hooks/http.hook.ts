import {useCallback, useState} from "react";
import {ICharacterData} from '../@types/characterTypes'

const UseHttpHook = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    const response = useCallback( async (url: string, method: string = 'GET', body: BodyInit | null  = null, headers: HeadersInit = {'Content-Type': 'application/json'}): Promise<ICharacterData[]> => {
        setLoading(true)
        try {
            const resp = await fetch(url, {method, body, headers});

            if (!resp.ok) {
                throw new Error(`Could not fetch ${url}, status: ${resp.status}`)
            }
            const data = await resp.json()
            setLoading(false)
            return data.data.results
        } catch (e) {
            setLoading(false);
            setError((e as Error).message);
            throw e
        }
    }, [])

    const resetError = useCallback(() => {
        setError(null)
    }, [])

    return {loading, error, response, resetError}

}

export default UseHttpHook;