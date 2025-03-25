import { useState, useEffect } from 'react';

const useFetchCharacters = (url) => {
    const [dataApi, setDataApi] = useState(null);    

    const getCharacters = async (url) => {
        try {
            const response = await fetch(url);

            if(!response.ok) throw new Error('No se ha recibido datos');
            
            const result = await response.json();
            setDataApi(result)

        } catch (error) {
            console.error('Error: ', error);
        }
    }

    useEffect(() => {
        getCharacters(url)
    }, [])

    return {dataApi};
}

export default useFetchCharacters;
